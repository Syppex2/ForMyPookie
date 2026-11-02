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


  /* ================= the goddess: Shinobu slideshow ================= */
  const G = ALTAR.shinobu || { images: [], quotes: [] };
  const slides = $("#goddess-slides"), dots = $("#goddess-dots"), quote = $("#goddess-quote");
  let gi = 0, gTimer = null;
  G.images.forEach((f, i) => {
    const im = document.createElement("img");
    im.src = "images/shinobu/" + f; im.alt = "Shinobu Kocho";
    im.loading = i < 2 ? "eager" : "lazy";
    if (i === 0) im.className = "on";
    slides.appendChild(im);
    const d = document.createElement("button");
    d.setAttribute("aria-label", "Picture " + (i + 1));
    if (i === 0) d.className = "on";
    d.addEventListener("click", (e) => { e.stopPropagation(); showSlide(i, true); });
    dots.appendChild(d);
  });
  function setQuote(i) {
    if (!G.quotes.length) return;
    quote.classList.remove("pop"); void quote.offsetWidth; quote.classList.add("pop");
    quote.textContent = G.quotes[i % G.quotes.length];
  }
  setQuote(0);
  function showSlide(i, byHand) {
    const imgs = slides.children; if (!imgs.length) return;
    imgs[gi].classList.remove("on"); dots.children[gi].classList.remove("on");
    gi = (i + imgs.length) % imgs.length;
    imgs[gi].classList.add("on"); dots.children[gi].classList.add("on");
    setQuote(gi);
    if (byHand) {
      SFX.chime();
      const r = $("#goddess-frame").getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 5, true);
      restartGoddess();
    }
  }
  function restartGoddess() { clearInterval(gTimer); gTimer = setInterval(() => showSlide(gi + 1), 5500); }
  const gf = $("#goddess-frame");
  gf.addEventListener("click", (e) => { e.stopPropagation(); showSlide(gi + 1, true); });
  gf.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showSlide(gi + 1, true); } });

  /* ================= matching souls (couples) ================= */
  if (ALTAR.couplesBanner) {
    const b = $("#couples-banner");
    b.innerHTML = `<img src="images/${esc(ALTAR.couplesBanner.img)}" alt="Giyu and Shinobu" loading="lazy" /><figcaption>${esc(ALTAR.couplesBanner.caption)}</figcaption>`;
    b.addEventListener("click", (e) => { e.stopPropagation(); SFX.heart(); heartsAt(e.clientX, e.clientY, 10); openLightbox(b.querySelector("img").src, ALTAR.couplesBanner.caption); });
  }
  (ALTAR.couples || []).forEach((c, i) => {
    const el = document.createElement("article");
    el.className = "couple reveal";
    el.style.setProperty("--d", (i % 4) * 0.08 + "s");
    el.innerHTML = `
      <div class="pair">
        <figure class="half left"><img src="images/${esc(c.a.img)}" alt="${esc(c.a.name)}" loading="lazy" /></figure>
        <figure class="half right"><img src="images/${esc(c.b.img)}" alt="${esc(c.b.name)}" loading="lazy" /></figure>
        <span class="mid-heart" aria-hidden="true">💗</span>
      </div>
      <div class="couple-label"><b>${esc(c.a.name)} <i>×</i> ${esc(c.b.name)}</b><small>${esc(c.from)}</small>${c.note ? `<span class="note">${esc(c.note)}</span>` : ""}</div>`;
    el.querySelectorAll("img").forEach((im) => im.addEventListener("error", () => { im.replaceWith(Object.assign(document.createElement("div"), { className: "ph", textContent: "🦋" })); }));
    el.addEventListener("pointerenter", () => SFX.hover());
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      SFX.heart();
      el.classList.remove("kiss"); void el.offsetWidth; el.classList.add("kiss");
      const r = el.querySelector(".mid-heart").getBoundingClientRect();
      heartsAt(r.left + r.width / 2, r.top + r.height / 2, 8);
    });
    $("#couples").appendChild(el);
  });
  function heartsAt(x, y, n) {
    if (reduced) return;
    for (let i = 0; i < n; i++) {
      const h = document.createElement("span");
      h.className = "pop-heart";
      h.textContent = ["💗", "💜", "🦋", "✨"][i % 4];
      h.style.left = x + "px"; h.style.top = y + "px";
      const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 80;
      h.style.setProperty("--tx", Math.cos(a) * d + "px");
      h.style.setProperty("--ty", Math.sin(a) * d - 40 + "px");
      fx.appendChild(h);
      setTimeout(() => h.remove(), 1100);
    }
  }

  /* ================= wisteria garland ================= */
  const wis = $("#wisteria");
  const strands = innerWidth < 600 ? 14 : 30;
  for (let i = 0; i < strands; i++) {
    const st = document.createElement("div");
    st.className = "strand";
    st.style.left = (i / strands) * 100 + Math.random() * 2 + "%";
    st.style.animationDelay = -Math.random() * 4 + "s";
    st.style.animationDuration = 3.5 + Math.random() * 2 + "s";
    const len = 5 + Math.floor(Math.random() * (i % 3 === 0 ? 10 : 6));
    for (let j = 0; j < len; j++) {
      const f = document.createElement("i");
      const t = j / len;
      f.style.width = f.style.height = 14 - t * 8 + "px";
      f.style.marginLeft = (j % 2 ? 3 : -3) * (1 - t) + "px";
      f.style.background = `hsl(${282 - t * 20}, ${60 + t * 20}%, ${62 + t * 18}%)`;
      st.appendChild(f);
    }
    wis.appendChild(st);
  }

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
      restartGoddess();
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
