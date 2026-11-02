(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- fill text from config ----------
  document.querySelectorAll(".her-name").forEach((el) => (el.textContent = ALTAR.herName));
  $("#welcome").textContent = ALTAR.welcome;
  $("#from").textContent = ALTAR.from;

  // ---------- character cards (fall back to a placeholder if the picture is missing) ----------
  function card(c, isFav) {
    const el = document.createElement("article");
    el.className = "card" + (isFav ? " fav" : "");
    const src = "images/characters/" + c.img;
    el.innerHTML = `
      <img class="pic" src="${esc(src)}" alt="${esc(c.name)}" loading="lazy" />
      <div class="label"><b>${esc(c.name)}</b><small>${esc(c.from)}</small>${c.note ? `<span class="note">${esc(c.note)}</span>` : ""}</div>`;
    const img = el.querySelector("img");
    img.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.textContent = c.emoji || "🦋";
      img.replaceWith(ph);
    });
    el.addEventListener("click", () => {
      const real = el.querySelector("img.pic");
      if (real) openLightbox(real.src, `${c.name} — ${c.from}`);
    });
    return el;
  }
  ALTAR.favorites.forEach((c) => $("#favorites").appendChild(card(c, true)));
  ALTAR.characters.forEach((c) => $("#offerings").appendChild(card(c, false)));

  // ---------- hall of shame ----------
  ALTAR.chats.forEach((c, i) => {
    const el = document.createElement("figure");
    el.className = "polaroid";
    el.style.setProperty("--tilt", (i % 2 ? 2 : -2) + Math.random() * 1.5 + "deg");
    el.innerHTML = `<img src="images/chat/${esc(c.img)}" alt="chat screenshot" loading="lazy" /><p>${esc(c.caption)}</p>`;
    el.addEventListener("click", () => openLightbox(el.querySelector("img").src, c.caption));
    $("#chats").appendChild(el);
  });

  // ---------- lightbox ----------
  const lb = $("#lightbox");
  function openLightbox(src, text) {
    lb.querySelector("img").src = src;
    lb.querySelector("p").textContent = text;
    lb.hidden = false;
  }
  lb.addEventListener("click", () => (lb.hidden = true));
  document.addEventListener("keydown", (e) => e.key === "Escape" && (lb.hidden = true));

  // ---------- candles ----------
  let lastMsg = -1;
  document.querySelectorAll(".candle").forEach((btn) =>
    btn.addEventListener("click", () => {
      btn.classList.toggle("lit");
      if (!btn.classList.contains("lit")) return;
      let i;
      do { i = Math.floor(Math.random() * ALTAR.candleMessages.length); } while (i === lastMsg && ALTAR.candleMessages.length > 1);
      lastMsg = i;
      $("#candle-msg").textContent = ALTAR.candleMessages[i];
      burst(btn);
    })
  );

  // ---------- butterflies & petals ----------
  const sky = $("#sky");
  const bfly = '<svg viewBox="0 0 100 80"><use href="#bfly"/></svg>';
  function spawnFlyer(x, y, short) {
    const f = document.createElement("div");
    f.className = "flyer";
    f.innerHTML = bfly;
    const dur = short ? 4 + Math.random() * 2 : 14 + Math.random() * 12;
    f.style.left = (x ?? Math.random() * 100 + "vw");
    if (y) f.style.top = y;
    f.style.width = 20 + Math.random() * 26 + "px";
    f.style.setProperty("--dx", (Math.random() * 40 - 20) + "vw");
    f.style.setProperty("--rot", (Math.random() * 60 - 30) + "deg");
    f.style.animationDuration = dur + "s";
    if (!short) f.style.animationDelay = -Math.random() * dur + "s";
    sky.appendChild(f);
    if (short) setTimeout(() => f.remove(), dur * 1000);
  }
  function spawnPetal() {
    const p = document.createElement("div");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--dx", (Math.random() * 30 - 15) + "vw");
    const dur = 10 + Math.random() * 10;
    p.style.animationDuration = dur + "s";
    p.style.animationDelay = -Math.random() * dur + "s";
    if (Math.random() > 0.5) p.style.background = "var(--lilac)";
    sky.appendChild(p);
  }
  function burst(el) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 5; i++) spawnFlyer(r.left + r.width / 2 + "px", r.top + "px", true);
  }
  const small = window.innerWidth < 600;
  for (let i = 0; i < (small ? 7 : 14); i++) spawnFlyer();
  for (let i = 0; i < (small ? 12 : 24); i++) spawnPetal();

  // ---------- entrance ----------
  $("#enter").addEventListener("click", () => {
    $("#gate").classList.add("leaving");
    $("#altar").hidden = false;
    for (let i = 0; i < 10; i++) spawnFlyer(Math.random() * 100 + "vw", "60vh", true);
    setTimeout(() => $("#gate").remove(), 900);
  });
})();
