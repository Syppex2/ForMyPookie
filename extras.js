/* Our Story timeline, the Final Selection quiz and the Open When letters */
(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return localStorage.getItem("altar-" + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("altar-" + k, v); } catch (e) {} },
  };
  const daysTogether = () => ALTAR.togetherSince ? Math.floor((Date.now() - new Date(ALTAR.togetherSince + "T00:00:00")) / 864e5) : null;

  /* ================= OUR STORY ================= */
  (ALTAR.story || []).forEach((ch, i) => {
    const li = document.createElement("li");
    li.className = "chapter reveal";
    let media = "";
    if (ch.img) media = `<img class="ch-img" src="images/${esc(ch.img)}" alt="" loading="lazy" />`;
    if (ch.pair) media = `<div class="ch-pair">${ch.pair.map((p) => `<img src="images/${esc(p)}" alt="" loading="lazy" />`).join("")}<span aria-hidden="true">💗</span></div>`;
    if (ch.youtube) media = `<button class="yt" data-id="${esc(ch.youtube)}" aria-label="Play our song"><img src="https://i.ytimg.com/vi/${esc(ch.youtube)}/hqdefault.jpg" alt="" loading="lazy" /><span class="yt-play" aria-hidden="true"></span></button>`;
    if (ch.gavel) media = `<div class="ch-gavel" aria-hidden="true"><span>⚖️</span><b>CASO CERRADO</b></div>`;
    if (ch.kids) media = `<div class="ch-kids">${(ALTAR.kids || []).map((k) => `<img src="images/kids/${esc(k.img)}" alt="${esc(k.name)}" loading="lazy" />`).join("")}</div>`;
    let title = ch.title;
    if (ch.today) {
      const d = daysTogether();
      if (d != null) { const y = Math.floor(d / 365.25); title = `${y} years, ${d} days`; }
    }
    li.innerHTML = `
      <span class="ch-num">Chapter ${i + 1}</span>
      <div class="ch-card"><h4>${esc(title)}</h4>${media}<p>${esc(ch.text)}</p></div>`;
    li.addEventListener("pointerenter", () => SFX.hover());
    $("#story").appendChild(li);
  });
  // our song: only load YouTube when she presses play
  document.querySelectorAll(".yt").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    SFX.duck(true);
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0`;
    f.title = "I Really Want to Stay at Your House";
    f.allow = "autoplay; encrypted-media; picture-in-picture";
    f.allowFullscreen = true;
    f.className = "yt-frame";
    b.replaceWith(f);
  }));

  /* ================= FINAL SELECTION ================= */
  const Q = ALTAR.quiz || [];
  const quiz = $("#quiz");
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
  let qi = 0, score = 0;
  function quizStart() {
    qi = 0; score = 0;
    quiz.innerHTML = `
      <div class="quiz-intro">
        <p class="quiz-kicker">最終選別</p>
        <h4>The Final Selection</h4>
        <p>${Q.length} questions about us. Get ${ALTAR.quizPass} right to survive, and something secret unlocks.</p>
        <button class="btn" id="quiz-go">Start</button>
      </div>`;
    $("#quiz-go").addEventListener("click", (e) => { e.stopPropagation(); SFX.chime(); quizQuestion(); });
  }
  function quizQuestion() {
    const item = Q[qi];
    const right = item.options[0];
    quiz.innerHTML = `
      <div class="quiz-top"><span>Question ${qi + 1} of ${Q.length}</span><span class="quiz-bar"><i style="width:${(qi / Q.length) * 100}%"></i></span></div>
      <h4 class="quiz-q">${esc(item.q)}</h4>
      <div class="quiz-opts">${shuffle(item.options).map((o) => `<button class="quiz-opt">${esc(o)}</button>`).join("")}</div>
      <p class="quiz-react" aria-live="polite"></p>`;
    quiz.querySelectorAll(".quiz-opt").forEach((b) => b.addEventListener("click", (e) => {
      e.stopPropagation();
      if (quiz.dataset.lock) return;
      quiz.dataset.lock = "1";
      const ok = b.textContent === right;
      if (ok) { score++; SFX.chime(); FX.heartsAt(e.clientX, e.clientY, 6); } else { SFX.candleOff(); }
      quiz.querySelectorAll(".quiz-opt").forEach((x) => { if (x.textContent === right) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); x.disabled = true; });
      const r = quiz.querySelector(".quiz-react");
      r.textContent = pick(ok ? ALTAR.quizRight : ALTAR.quizWrong);
      r.className = "quiz-react " + (ok ? "ok" : "no");
      setTimeout(() => { delete quiz.dataset.lock; qi++; qi < Q.length ? quizQuestion() : quizEnd(); }, 1300);
    }));
  }
  function quizEnd() {
    const pass = score >= ALTAR.quizPass;
    quiz.innerHTML = `
      <div class="quiz-end ${pass ? "pass" : "fail"}">
        <p class="quiz-score">${score} / ${Q.length}</p>
        <h4>${pass ? "You survived the Final Selection" : "Shinobu says: ara ara, try again"}</h4>
        <p>${pass ? "Of course you did. A secret letter just unlocked in Open When." : `You need ${ALTAR.quizPass} to pass. I believe in you. Tsun tsun.`}</p>
        <button class="btn ${pass ? "ghost" : ""}" id="quiz-again">${pass ? "Play again" : "Try again"}</button>
      </div>`;
    $("#quiz-again").addEventListener("click", (e) => { e.stopPropagation(); quizStart(); });
    if (pass) {
      SFX.fanfare();
      for (let i = 0; i < 24; i++) setTimeout(() => FX.burst(Math.random() * innerWidth, innerHeight + 10, 1, true), i * 60);
      FX.heartRain(30);
      passedThisVisit = true;
      renderLetters();
      const sec = document.querySelector(".ow-env.secret");
      if (sec) sec.classList.add("just-unlocked");
    } else SFX.candleOff();
  }
  if (Q.length) quizStart();

  /* ================= OPEN WHEN ================= */
  const box = $("#openwhen"), modal = $("#ow-modal");
  // the secret letter unlocks only for this visit: she has to pass the quiz each time
  let passedThisVisit = false;
  // envelopes start sealed on every visit
  const openedThisVisit = new Set();
  try { Object.keys(localStorage).filter((k) => k.startsWith("altar-ow-")).forEach((k) => localStorage.removeItem(k)); } catch (e) {}
  try { localStorage.removeItem("altar-quiz-passed"); } catch (e) {}
  function renderLetters() {
    const passed = passedThisVisit;
    box.innerHTML = "";
    (ALTAR.openWhen || []).forEach((l, i) => {
      const locked = l.secret && !passed;
      const opened = !locked && openedThisVisit.has(i);
      const b = document.createElement("button");
      b.className = "ow-env reveal in" + (l.secret ? " secret" : "") + (locked ? " locked" : "") + (opened ? " opened" : "");
      b.style.setProperty("--tilt", ((i * 37) % 7) - 3 + "deg");
      b.innerHTML = `
        <span class="ow-flap" aria-hidden="true"></span>
        <span class="ow-seal" aria-hidden="true">${locked ? "🔒" : ""}</span>
        <span class="ow-label"><small>Open when</small>${esc(l.when)}</span>
        ${locked ? `<span class="ow-lock">pass the Final Selection to open</span>` : ""}`;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        if (locked) { SFX.candleOff(); b.classList.remove("nope"); void b.offsetWidth; b.classList.add("nope"); return; }
        openLetter(l, i, b);
      });
      box.appendChild(b);
    });
  }
  function openLetter(l, i, b) {
    SFX.crack(); setTimeout(() => SFX.rustle(), 200);
    openedThisVisit.add(i);
    b.classList.add("opened");
    modal.querySelector(".ow-title").textContent = "Open when " + l.when;
    modal.querySelector(".ow-text").textContent = l.text;
    modal.hidden = false;
    const art = modal.querySelector(".ow-letter");
    art.classList.remove("in"); void art.offsetWidth; art.classList.add("in");
    requestAnimationFrame(() => modal.classList.add("open"));
    const r = b.getBoundingClientRect();
    FX.burst(r.left + r.width / 2, r.top, 4);
  }
  function closeLetter() { modal.classList.remove("open"); setTimeout(() => (modal.hidden = true), 400); }
  modal.addEventListener("click", (e) => { e.stopPropagation(); if (e.target === modal || e.target.classList.contains("ow-close")) closeLetter(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeLetter(); });
  renderLetters();
})();

/* ================= WAKEUP secret ================= */
(function () {
  const W = ALTAR.wakeup; if (!W) return;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const wait = (ms) => new Promise((r) => setTimeout(r, FX.reduced ? Math.min(ms, 60) : ms));
  const modal = $("#wake"), chat = $("#wake-chat"), letter = $("#wake-letter");
  let running = false;

  function bubble(name, pfp, text, mine) {
    const m = document.createElement("div");
    m.className = "wk-msg" + (mine ? " mine" : "");
    m.innerHTML = `<img src="images/${esc(pfp)}" alt="" /><div><b>${esc(name)} <small>Today</small></b><p>${esc(text)}</p></div>`;
    chat.appendChild(m);
    chat.scrollTop = chat.scrollHeight;
  }
  async function wakeup() {
    if (running) return;
    running = true;
    SFX.init(); SFX.duck(true);
    chat.innerHTML = ""; letter.hidden = true; chat.hidden = false;
    modal.hidden = false; requestAnimationFrame(() => modal.classList.add("open"));
    SFX.alarm();
    document.body.classList.add("wk-ring");
    setTimeout(() => document.body.classList.remove("wk-ring"), 1300);
    await wait(500);
    for (const t of W.spam) { bubble(W.herName, W.herPfp, t, false); SFX.ping(); await wait(380); }
    await wait(900);
    const typing = document.createElement("p"); typing.className = "wk-typing"; typing.textContent = `${W.myName} is typing...`; chat.appendChild(typing);
    await wait(1600); typing.remove();
    bubble(W.myName, W.myPfp, W.reply, true); SFX.heart();
    for (let i = 0; i < 30; i++) setTimeout(() => FX.burst(Math.random() * innerWidth, innerHeight + 10, 1, true), i * 50);
    FX.heartRain(35);
    await wait(2200);
    chat.hidden = true;
    $("#wake-text").textContent = W.message;
    letter.hidden = false; letter.classList.remove("in"); void letter.offsetWidth; letter.classList.add("in");
    SFX.rustle();
  }
  function close() { modal.classList.remove("open"); SFX.duck(false); setTimeout(() => { modal.hidden = true; running = false; }, 400); }
  $("#wake-close").addEventListener("click", (e) => { e.stopPropagation(); close(); });
  modal.addEventListener("click", (e) => { e.stopPropagation(); if (e.target === modal && !letter.hidden) close(); });

  // typing WAKEUP anywhere (not inside a text field)
  let buf = "";
  addEventListener("keydown", (e) => {
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === "Escape" && !modal.hidden && !letter.hidden) return close();
    if (e.key.length !== 1) return;
    buf = (buf + e.key.toUpperCase()).slice(-6);
    if (buf === "WAKEUP" && !$("#gate")) { buf = ""; wakeup(); }
  });
  // phones: tap the word WAKEUP in the footer
  const from = $("#from");
  if (from && from.textContent.includes("WAKEUP")) {
    const [a, b] = from.textContent.split("WAKEUP");
    from.textContent = a.trimEnd();
    const w = document.createElement("button");
    w.className = "wk-word"; w.textContent = "WAKEUP"; w.setAttribute("aria-label", "WAKEUP (secret)");
    w.addEventListener("click", (e) => { e.stopPropagation(); wakeup(); });
    from.append(w, b || "");
  }
  window.WAKEUP = wakeup;
})();
