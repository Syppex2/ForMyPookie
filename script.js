(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const sky = $("#sky"), fx = $("#fx");

  /* ================= text from config ================= */
  document.querySelectorAll(".her-name").forEach((el) => (el.textContent = ALTAR.herName));
  $("#from").textContent = ALTAR.from;

  // title letters drop in one by one
  const title = $("#gate-title");
  const words = [["The Altar of ", false], [ALTAR.herName, true]];
  let k = 0;
  words.forEach(([w, special]) => {
    const wrap = document.createElement("span");
    [...w].forEach((ch) => {
      const s = document.createElement("span");
      s.className = special ? "drop name-letter" : "drop";
      s.textContent = ch === " " ? " " : ch;
      s.style.animationDelay = 0.3 + k++ * 0.06 + "s";
      wrap.appendChild(s);
    });
    title.appendChild(wrap);
  });
  // welcome text types itself
  const welcome = $("#welcome");
  [...ALTAR.welcome].forEach((ch, i) => setTimeout(() => (welcome.textContent += ch), reduced ? 0 : 1200 + i * 45));

  /* ================= AniList: fetch official character art in her browser ================= */
  const CACHE_KEY = "altar-anilist-v1";
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch (e) {}

  const all = [...ALTAR.favorites, ...ALTAR.characters];
  const pending = {}; // ani -> Promise<nodes[]>

  function pickCharacter(nodes, match) {
    if (!nodes || !nodes.length) return null;
    const m = (match || "").toLowerCase();
    const tokens = (n) => [n.name.full, ...(n.name.alternative || [])].filter(Boolean).join(" ").toLowerCase().split(/[\s\-·]+/);
    const hit = m && nodes.find((n) => tokens(n).some((t) => (m.length <= 2 ? t === m : t.startsWith(m))));
    return (hit || nodes[0]).image.large;
  }

  function loadAniList() {
    const shows = [...new Set(all.filter((c) => c.ani).map((c) => c.ani))].filter((a) => !cache[a]);
    const chunks = [];
    for (let i = 0; i < shows.length; i += 5) chunks.push(shows.slice(i, i + 5));
    chunks.forEach((chunk) => {
      const q = "query{" + chunk.map((a, i) =>
        `m${i}:Media(search:${JSON.stringify(a)},sort:SEARCH_MATCH){characters(perPage:25,sort:[ROLE,FAVOURITES_DESC]){nodes{name{full alternative}image{large}}}}`
      ).join(" ") + "}";
      const p = fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ query: q }),
      })
        .then((r) => r.json())
        .then((j) => {
          chunk.forEach((a, i) => {
            const nodes = j.data && j.data["m" + i] && j.data["m" + i].characters.nodes;
            if (nodes) cache[a] = nodes.map((n) => ({ name: n.name, image: n.image }));
          });
          try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) {}
        })
        .catch(() => {});
      chunk.forEach((a) => (pending[a] = p));
    });
  }
  let aniStarted = false;
  function aniImage(c) {
    if (!c.ani) return Promise.resolve(null);
    if (!aniStarted) { aniStarted = true; loadAniList(); } // only used if a local picture is missing
    if (cache[c.ani]) return Promise.resolve(pickCharacter(cache[c.ani], c.match));
    return (pending[c.ani] || Promise.resolve()).then(() => pickCharacter(cache[c.ani], c.match));
  }

  /* ================= cards ================= */
  function placeholder(c) {
    const ph = document.createElement("div");
    ph.className = "ph";
    ph.innerHTML = `<span>${esc(c.emoji || "🦋")}</span>`;
    return ph;
  }
  function card(c, isFav, idx) {
    const el = document.createElement("article");
    el.className = "card reveal loading" + (isFav ? " fav" : "");
    el.style.setProperty("--d", (idx % 6) * 0.08 + "s");
    el.innerHTML = `
      <div class="tilt">
        <img class="pic" alt="${esc(c.name)}" />
        <div class="glare"></div>
        <div class="label"><b>${esc(c.name)}</b><small>${esc(c.from)}</small>${c.note ? `<span class="note">${esc(c.note)}</span>` : ""}</div>
      </div>`;
    const img = el.querySelector("img");
    let stage = 0;
    img.addEventListener("load", () => el.classList.remove("loading"));
    img.addEventListener("error", () => {
      if (stage === 0) {
        stage = 1;
        aniImage(c).then((url) => {
          if (url) img.src = url;
          else { img.replaceWith(placeholder(c)); el.classList.remove("loading"); }
        });
      } else { img.replaceWith(placeholder(c)); el.classList.remove("loading"); }
    });
    img.src = "images/characters/" + c.img;

    // 3D tilt + glare
    const tilt = el.querySelector(".tilt");
    if (finePointer && !reduced) {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        tilt.style.transform = `rotateY(${(x - 0.5) * 18}deg) rotateX(${(0.5 - y) * 18}deg) scale(1.04)`;
        tilt.style.setProperty("--gx", x * 100 + "%");
        tilt.style.setProperty("--gy", y * 100 + "%");
      });
      el.addEventListener("pointerleave", () => (tilt.style.transform = ""));
    }
    el.addEventListener("pointerenter", () => SFX.hover());
    el.addEventListener("click", (e) => {
      SFX.chime();
      burst(e.clientX, e.clientY, 4);
      const real = el.querySelector("img.pic");
      if (real && real.complete && real.naturalWidth) openLightbox(real.src, `${c.name} — ${c.from}`);
    });
    return el;
  }
  ALTAR.favorites.forEach((c, i) => $("#favorites").appendChild(card(c, true, i)));
  ALTAR.characters.forEach((c, i) => $("#offerings").appendChild(card(c, false, i)));

  /* ================= hall of shame ================= */
  ALTAR.chats.forEach((c, i) => {
    const el = document.createElement("figure");
    el.className = "polaroid reveal";
    el.style.setProperty("--tilt", (i % 2 ? 2 : -2) + Math.random() * 1.5 + "deg");
    el.style.setProperty("--d", (i % 3) * 0.12 + "s");
    el.innerHTML = `<div class="tape"></div><img src="images/chat/${esc(c.img)}" alt="chat screenshot" loading="lazy" /><p>${esc(c.caption)}</p>`;
    el.addEventListener("click", () => {
      SFX.shutter();
      el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
      setTimeout(() => openLightbox(el.querySelector("img").src, c.caption), 180);
    });
    $("#chats").appendChild(el);
  });

  /* ================= lightbox ================= */
  const lb = $("#lightbox");
  function openLightbox(src, text) {
    lb.querySelector("img").src = src;
    lb.querySelector("p").textContent = text;
    lb.hidden = false;
    requestAnimationFrame(() => lb.classList.add("open"));
  }
  function closeLightbox() { lb.classList.remove("open"); setTimeout(() => (lb.hidden = true), 250); }
  lb.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLightbox(); closeWish(); } });

  /* ================= candles + surprise ================= */
  let lastMsg = -1;
  const candles = [...document.querySelectorAll(".candle")];
  candles.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("lit");
      if (!btn.classList.contains("lit")) { SFX.candleOff(); smoke(btn); return; }
      SFX.candle();
      let i;
      do { i = Math.floor(Math.random() * ALTAR.candleMessages.length); } while (i === lastMsg && ALTAR.candleMessages.length > 1);
      lastMsg = i;
      const msg = $("#candle-msg");
      msg.classList.remove("pop"); void msg.offsetWidth; msg.classList.add("pop");
      msg.textContent = ALTAR.candleMessages[i];
      const r = btn.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top, 5);
      if (candles.every((c) => c.classList.contains("lit"))) setTimeout(openWish, 700);
    })
  );
  const wish = $("#wish");
  function openWish() {
    wish.querySelector("p").textContent = ALTAR.allCandlesMessage;
    wish.hidden = false;
    requestAnimationFrame(() => wish.classList.add("open"));
    SFX.wish();
    for (let i = 0; i < 26; i++) setTimeout(() => burst(Math.random() * innerWidth, innerHeight + 20, 1, true), i * 60);
    heartRain(40);
  }
  function closeWish() { if (wish.hidden) return; wish.classList.remove("open"); setTimeout(() => (wish.hidden = true), 400); }
  wish.addEventListener("click", (e) => { e.stopPropagation(); closeWish(); });

  /* ================= effects ================= */
  const bflySVG = '<svg viewBox="0 0 100 80"><use href="#bfly"/></svg>';
  function flyer({ x, y, short, big } = {}) {
    if (reduced && short) return;
    const f = document.createElement("div");
    f.className = "flyer" + (short ? " short" : "");
    f.innerHTML = bflySVG;
    const dur = short ? 3.5 + Math.random() * 2 : 14 + Math.random() * 12;
    f.style.left = x != null ? x + "px" : Math.random() * 100 + "vw";
    f.style.top = y != null ? y + "px" : "105vh";
    f.style.width = (big ? 30 : 18) + Math.random() * 24 + "px";
    f.style.setProperty("--dx", Math.random() * 60 - 30 + "vw");
    f.style.setProperty("--rot", Math.random() * 60 - 30 + "deg");
    f.style.animationDuration = dur + "s";
    if (!short) f.style.animationDelay = -Math.random() * dur + "s";
    sky.appendChild(f);
    if (short) setTimeout(() => f.remove(), dur * 1000);
  }
  function burst(x, y, n = 3, big) { for (let i = 0; i < n; i++) flyer({ x, y, short: true, big }); }
  function petal() {
    const p = document.createElement("div");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--dx", Math.random() * 30 - 15 + "vw");
    const dur = 10 + Math.random() * 10;
    p.style.animationDuration = dur + "s";
    p.style.animationDelay = -Math.random() * dur + "s";
    if (Math.random() > 0.5) p.style.background = "var(--lilac)";
    sky.appendChild(p);
  }
  function heartRain(n) {
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      const h = document.createElement("span");
      h.className = "heart";
      h.textContent = ["💗", "💜", "🦋", "🌸", "✨"][i % 5];
      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = 16 + Math.random() * 22 + "px";
      h.style.animationDelay = Math.random() * 1.8 + "s";
      h.style.animationDuration = 2.8 + Math.random() * 2 + "s";
      fx.appendChild(h);
      setTimeout(() => h.remove(), 5500);
    }
  }
  function smoke(btn) {
    const r = btn.getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "smoke";
    s.style.left = r.left + r.width / 2 + "px";
    s.style.top = r.top - 30 + "px";
    fx.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }
  // sparkle trail behind the mouse
  let lastSpark = 0;
  if (finePointer && !reduced)
    addEventListener("pointermove", (e) => {
      const now = performance.now();
      if (now - lastSpark < 40) return;
      lastSpark = now;
      const s = document.createElement("span");
      s.className = "spark";
      s.textContent = Math.random() < 0.5 ? "✦" : "·";
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.color = ["#f6a6cb", "#e7b6f0", "#ffd58a", "#4fb6a3"][(Math.random() * 4) | 0];
      fx.appendChild(s);
      setTimeout(() => s.remove(), 800);
    });
  // tap anywhere empty → butterflies
  addEventListener("click", (e) => {
    if (e.target.closest("button, .card, .polaroid, #lightbox, #gate")) return;
    burst(e.clientX, e.clientY, 2);
    SFX.flutter();
  });

  // scroll reveal
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12 }
  );

  const small = innerWidth < 600;
  for (let i = 0; i < (small ? 7 : 14); i++) flyer();
  for (let i = 0; i < (small ? 12 : 26); i++) petal();

  /* ================= gate ================= */
  let gateClicks = 0;
  $("#gate-bfly").addEventListener("click", () => {
    SFX.init(); SFX.pop();
    if (++gateClicks === 5) document.querySelector("#gate .kicker").textContent = "ara ara~ you found me 🦋 — Shinobu";
  });
  $("#enter").addEventListener("click", () => {
    SFX.init();
    SFX.enter();
    setTimeout(() => SFX.music(), 2500);
    const gate = $("#gate");
    gate.classList.add("opening");
    const r = $("#enter").getBoundingClientRect();
    burst(r.left + r.width / 2, r.top, 12, true);
    setTimeout(() => {
      $("#altar").hidden = false;
      $("#sound").hidden = false;
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }, 500);
    setTimeout(() => gate.remove(), 1700);
  });
  $("#sound").addEventListener("click", (e) => {
    e.stopPropagation();
    const on = SFX.toggle();
    e.currentTarget.textContent = on ? "🔊" : "🔇";
  });
})();
