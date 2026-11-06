/* The kids visit, note of the day, anniversary countdown, Caso Cerrado,
   Butterfly Catch and "put the altar on your phone". */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const store = {
    get(k) { try { return localStorage.getItem("altar-" + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("altar-" + k, v); } catch (e) {} },
  };
  const busy = () => document.body.classList.contains("popup-open") || !!$("#gate") || $("#altar").hidden;
  const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  /* ================= NOTE OF THE DAY ================= */
  const notes = ALTAR.dailyNotes || [];
  if (notes.length) {
    const now = new Date();
    const dayNumber = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(2021, 6, 25)) / 864e5);
    $("#daily").innerHTML = `
      <span class="daily-tag">${ALTAR.dailyTag ? esc(ALTAR.dailyTag) : `Nota del día · ${now.getDate()} de ${MONTHS[now.getMonth()]}`}</span>
      <p>${esc(notes[((dayNumber % notes.length) + notes.length) % notes.length])}</p>
      <small>una nueva cada día</small>`;
  } else $("#daily").remove();

  /* ================= COUNTDOWN TO THE NEXT ANNIVERSARY ================= */
  const cd = $("#countdown");
  if (ALTAR.togetherSince && cd) {
    const [sy, sm, sd] = ALTAR.togetherSince.split("-").map(Number);
    const ord = (n) => n + (["th", "st", "nd", "rd"][(n % 100 > 10 && n % 100 < 14) ? 0 : (n % 10 < 4 ? n % 10 : 0)]);
    let celebrated = false;
    function tick() {
      const now = new Date();
      let year = now.getFullYear();
      const isToday = now.getMonth() === sm - 1 && now.getDate() === sd;
      if (isToday) {
        if (!cd.dataset.today) {
          cd.dataset.today = "1";
          cd.innerHTML = `<p class="cd-title">Feliz aniversario número ${year - sy}, puki</p><p class="cd-sub">Otro 25 de julio juntos. El mejor día del año, todos los años.</p>`;
          if (!celebrated) { celebrated = true; setTimeout(() => { FX.heartRain(24); SFX.chime(); }, 800); }
        }
        return;
      }
      let target = new Date(year, sm - 1, sd);
      if (target <= now) target = new Date(++year, sm - 1, sd);
      let left = Math.floor((target - now) / 1000);
      const d = Math.floor(left / 86400); left -= d * 86400;
      const h = Math.floor(left / 3600); left -= h * 3600;
      const m = Math.floor(left / 60); const s = left - m * 60;
      if (!cd.dataset.built) {
        cd.dataset.built = "1";
        cd.innerHTML = `
          <p class="cd-title">Para nuestro aniversario número ${year - sy}</p>
          <div class="cd-boxes">${[["days", "días"], ["hours", "horas"], ["minutes", "minutos"], ["seconds", "segundos"]].map(([u, label]) => `<div><b data-u="${u}">0</b><span>${label}</span></div>`).join("")}</div>
          <p class="cd-sub">${sd} de ${MONTHS[sm - 1]}, ${year}</p>`;
      }
      cd.querySelector('[data-u="days"]').textContent = d;
      cd.querySelector('[data-u="hours"]').textContent = String(h).padStart(2, "0");
      cd.querySelector('[data-u="minutes"]').textContent = String(m).padStart(2, "0");
      cd.querySelector('[data-u="seconds"]').textContent = String(s).padStart(2, "0");
    }
    tick(); setInterval(tick, 1000);
  }

  /* ================= THE KIDS VISIT ================= */
  const walker = $("#walker"), kids = ALTAR.kids || [], kidNotes = ALTAR.kidNotes || {};
  let walking = false, lastKid = -1;
  function walk() {
    if (walking || busy() || document.hidden || !kids.length) return;
    let i; do { i = Math.floor(Math.random() * kids.length); } while (i === lastKid && kids.length > 1);
    lastKid = i;
    const k = kids[i], ltr = Math.random() < 0.5;
    walking = true;
    walker.querySelector("img").src = "images/kids/" + k.img;
    walker.querySelector("img").alt = k.name;
    walker.querySelector(".walker-note").textContent = "";
    walker.dataset.name = k.name;
    walker.className = "walker " + (ltr ? "ltr" : "rtl");
    walker.hidden = false;
    const done = () => { walker.hidden = true; walker.className = "walker"; walking = false; };
    walker.onanimationend = (e) => { if (e.target === walker) done(); };
  }
  walker.addEventListener("click", (e) => {
    e.stopPropagation();
    if (walker.classList.contains("stopped")) return;
    const name = walker.dataset.name;
    SFX.meow(kids.findIndex((k) => k.name === name));
    walker.classList.add("stopped");
    const note = walker.querySelector(".walker-note");
    note.textContent = pick(kidNotes[name] || [name + " dice hola"]);
    // keep the note bubble inside the screen
    note.style.marginLeft = "0px";
    const nr = note.getBoundingClientRect();
    if (nr.right > innerWidth - 8) note.style.marginLeft = (innerWidth - 8 - nr.right) + "px";
    else if (nr.left < 8) note.style.marginLeft = (8 - nr.left) + "px";
    const r = walker.getBoundingClientRect();
    FX.heartsAt(r.left + r.width / 2, r.top, 5);
    setTimeout(() => { walker.classList.remove("stopped"); }, 3500);
  });
  // first visit after ~25s, then every 50 to 80 seconds
  setTimeout(function loop() { walk(); setTimeout(loop, 50000 + Math.random() * 30000); }, 25000);
  window.KID_WALK = walk;

  /* ================= CASO CERRADO ================= */
  const court = $("#court"), cases = ALTAR.cases || [];
  let ci = 0;
  function showCase() {
    const c = cases[ci];
    court.innerHTML = `
      <div class="court-head">
        <span class="court-seal" aria-hidden="true">⚖️</span>
        <div><p class="court-num">Caso ${String(ci + 1).padStart(3, "0")} · ${esc(c.subject)}</p><h4>${esc(c.title)}</h4></div>
      </div>
      <div class="court-row"><b>La acusación</b><p>${esc(c.charge)}</p></div>
      <div class="court-row"><b>La defensa</b><p>"${esc(c.defense)}"</p></div>
      <div class="court-verdict" hidden>
        <p class="court-v ${c.free || c.verdict.startsWith("NOT") ? "free" : ""}">${esc(c.verdict)}</p>
        <p class="court-s"><b>Sentencia:</b> ${esc(c.sentence)}</p>
        <div class="court-stamp">¡CASO CERRADO!</div>
      </div>
      <div class="court-btns">
        <button class="btn" id="court-go">Escuchar el veredicto</button>
        <button class="btn ghost" id="court-next" hidden>Siguiente caso</button>
      </div>`;
    $("#court-go").addEventListener("click", (e) => {
      e.stopPropagation();
      e.currentTarget.hidden = true;
      court.classList.remove("slam"); void court.offsetWidth; court.classList.add("slam");
      setTimeout(() => {
        SFX.stamp();
        court.querySelector(".court-verdict").hidden = false;
        FX.burst(e.clientX, e.clientY, 4);
        if (cases.length > 1) $("#court-next").hidden = false;
      }, 380);
    });
    $("#court-next").addEventListener("click", (e) => { e.stopPropagation(); SFX.rustle(); ci = (ci + 1) % cases.length; showCase(); });
  }
  if (cases.length) showCase(); else court.closest("section").remove();

  /* ================= BUTTERFLY CATCH ================= */
  const box = $("#catch"), G = ALTAR.game || { seconds: 30, goal: 20, win: "" };
  let flies = [], score = 0, timeLeft = 0, running = false, raf = 0, spawnT = 0, clockT = 0;
  function gameIntro(extra) {
    const best = Number(store.get("catch-best") || 0);
    box.innerHTML = `
      <div class="catch-intro">
        ${extra || `<h4>Atrapa ${G.goal} mariposas en ${G.seconds} segundos</h4><p>Tócalas antes de que se escapen. Las doradas valen 3.</p>`}
        ${best ? `<p class="catch-best">Tu récord: ${best}</p>` : ""}
        <button class="btn" id="catch-go">${extra ? "Jugar otra vez" : "Empezar"}</button>
      </div>`;
    $("#catch-go").addEventListener("click", (e) => { e.stopPropagation(); start(); });
  }
  function start() {
    score = 0; timeLeft = G.seconds; running = true; flies = [];
    box.innerHTML = `<div class="catch-hud"><span>Atrapadas <b id="catch-score">0</b> / ${G.goal}</span><span><b id="catch-time">${timeLeft}</b>s</span></div><div class="catch-field" id="catch-field"></div>`;
    SFX.chime();
    spawnT = setInterval(spawn, 520);
    clockT = setInterval(() => { timeLeft--; $("#catch-time").textContent = timeLeft; if (timeLeft <= 0) end(); }, 1000);
    for (let i = 0; i < 3; i++) spawn();
    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(50, now - last) / 1000; last = now;
      const field = $("#catch-field"); if (!field) return;
      const W = field.clientWidth - 12, H = field.clientHeight - 12;
      flies = flies.filter((f) => {
        f.age += dt;
        f.vx += Math.sin(f.age * f.wob + f.seed) * 140 * dt;
        f.vy += Math.cos(f.age * f.wob * 0.8 + f.seed) * 140 * dt - (f.age > f.life ? 260 * dt : 0);
        const sp = Math.hypot(f.vx, f.vy), max = f.gold ? 210 : 150;
        if (sp > max) { f.vx *= max / sp; f.vy *= max / sp; }
        f.x += f.vx * dt; f.y += f.vy * dt;
        if (f.age < f.life) {
          if (f.x < 0 || f.x > W - 48) { f.vx *= -1; f.x = Math.max(0, Math.min(W - 48, f.x)); }
          if (f.y < 0 || f.y > H - 48) { f.vy *= -1; f.y = Math.max(0, Math.min(H - 48, f.y)); }
        }
        if (f.y < -70 || f.x < -70 || f.x > W + 70) { f.el.remove(); return false; }
        f.el.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${Math.max(-25, Math.min(25, f.vx / 6))}deg)`;
        return true;
      });
      if (running) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }
  function spawn() {
    const field = $("#catch-field"); if (!field || flies.length >= 7) return;
    const W = field.clientWidth, H = field.clientHeight, gold = Math.random() < 0.13;
    const el = document.createElement("button");
    el.className = "catch-fly" + (gold ? " gold" : "");
    el.setAttribute("aria-label", gold ? "Gold butterfly" : "Butterfly");
    el.innerHTML = '<svg viewBox="0 0 100 80"><use href="#bfly"/></svg>';
    const f = { el, gold, x: Math.random() * (W - 48), y: H - 10, vx: (Math.random() - 0.5) * 120, vy: -80 - Math.random() * 60, age: 0, life: 2.6 + Math.random() * 2.2, wob: 2 + Math.random() * 3, seed: Math.random() * 6 };
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault(); e.stopPropagation();
      if (!running || el.dataset.caught) return;
      el.dataset.caught = "1";
      score += gold ? 3 : 1;
      $("#catch-score").textContent = score;
      gold ? SFX.chime() : SFX.pop();
      FX.heartsAt(e.clientX, e.clientY, gold ? 6 : 3);
      el.classList.add("caught");
      flies = flies.filter((x) => x !== f);
      setTimeout(() => el.remove(), 300);
    });
    field.appendChild(el);
    flies.push(f);
  }
  function end() {
    running = false; clearInterval(spawnT); clearInterval(clockT); cancelAnimationFrame(raf);
    const best = Math.max(score, Number(store.get("catch-best") || 0));
    store.set("catch-best", best);
    const won = score >= G.goal;
    if (won) { SFX.fanfare(); FX.heartRain(20); } else SFX.candleOff();
    gameIntro(`
      <p class="catch-final">${score}</p>
      <h4>${won ? "Las atrapaste todas" : "Esta vez se escaparon"}</h4>
      <p>${won ? esc(G.win) : `Necesitas ${G.goal}. Shinobu cree en ti. Inténtalo otra vez.`}</p>`);
    if (won) box.querySelector(".catch-intro").classList.add("won");
  }
  gameIntro();

  /* ================= PUT THE ALTAR ON YOUR PHONE ================= */
  let installEvt = null;
  addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; });
  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  const ib = $("#install");
  if (standalone) ib.remove();
  else ib.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (installEvt) { installEvt.prompt(); try { await installEvt.userChoice; } catch (err) {} installEvt = null; return; }
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    $("#install-text").textContent = ios
      ? "En iPhone: abre esta página en Safari, toca el botón Compartir (el cuadrado con la flecha) y después \"Agregar a inicio\". La mariposa va a quedar en tu celular como una app."
      : "En Android: toca el menú (los tres puntitos de Chrome) y después \"Agregar a la pantalla principal\" o \"Instalar app\". La mariposa va a quedar en tu celular como una app.";
    const m = $("#install-modal");
    m.hidden = false; requestAnimationFrame(() => m.classList.add("open"));
  });
  const im = $("#install-modal");
  const closeInstall = () => { im.classList.remove("open"); setTimeout(() => (im.hidden = true), 400); };
  $("#install-close").addEventListener("click", (e) => { e.stopPropagation(); closeInstall(); });
  im.addEventListener("click", (e) => { e.stopPropagation(); if (e.target === im) closeInstall(); });
})();
