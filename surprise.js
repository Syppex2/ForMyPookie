/* THE BIG SURPRISE: Maxwell the cat brings a love letter, then the Hashira scroll */
(function () {
  const $ = (s) => document.querySelector(s);
  const wait = (ms) => new Promise((r) => setTimeout(r, FX.reduced ? Math.min(ms, 50) : ms));
  const L = ALTAR.letter, C = ALTAR.certificate;
  let crowCame = false, busy = false;

  /* ---------- 1. Maxwell ---------- */
  let song = null, synthTimer = null;
  function startSong() {
    stopSong();
    SFX.duck(true);
    song = new Audio(ALTAR.maxwellSong || "audio/maxwell.mp3");
    song.loop = true; song.volume = 0;
    // fade in softly up to MAXWELL_VOLUME so it doesn't blast her ears
    const target = ALTAR.maxwellVolume ?? 0.3, me = song;
    song.play().then(() => {
      let v = 0; const f = setInterval(() => { v += target / 25; if (song !== me || v >= target) { clearInterval(f); if (song === me) me.volume = target; } else me.volume = v; }, 60);
    }).catch(() => { song = null; synthTimer = SFX.maxwellLoop(); });
    song.addEventListener("error", () => { if (song) { song = null; synthTimer = SFX.maxwellLoop(); } });
  }
  function stopSong() {
    if (song) { const s = song; song = null; let v = s.volume; const f = setInterval(() => { v -= 0.03; if (v <= 0) { s.pause(); clearInterval(f); } else s.volume = v; }, 60); }
    if (synthTimer) { clearInterval(synthTimer); synthTimer = null; }
  }
  async function callCrow() {
    if (busy) return;
    busy = true; crowCame = true;
    const cat = $("#crow"), bubble = $("#crow-bubble");
    cat.hidden = false; cat.className = "crow maxwell";
    void cat.offsetWidth;
    cat.classList.add("fly-in");
    startSong();
    await wait(2100);
    cat.classList.add("landed");
    SFX.pop();
    FX.burst(innerWidth / 2, innerHeight * 0.55, 4);
    bubble.hidden = false;
    const t = $("#crow-text");
    t.textContent = "";
    const msg = `has a letter for ${ALTAR.herName}. He won't stop spinning until you take it.`;
    for (const ch of msg) { t.textContent += ch; await wait(28); }
  }

  $("#take-letter").addEventListener("click", async (e) => {
    e.stopPropagation();
    $("#crow-bubble").hidden = true;
    const cat = $("#crow");
    cat.classList.add("fly-out");
    SFX.pop();
    setTimeout(() => { cat.hidden = true; stopSong(); }, 1400);
    showEnvelope();
  });

  /* ---------- 2. the envelope + letter ---------- */
  function showEnvelope() {
    SFX.duck(true);
    const st = $("#letter-stage");
    st.hidden = false; st.classList.remove("open");
    $("#envelope").hidden = false;
    $("#envelope").className = "envelope";
    $("#letter").hidden = true;
    requestAnimationFrame(() => st.classList.add("open"));
  }
  async function openEnvelope() {
    const env = $("#envelope");
    if (env.classList.contains("opening")) return;
    env.classList.add("opening");
    SFX.crack();
    const r = env.getBoundingClientRect();
    FX.burst(r.left + r.width / 2, r.top + r.height / 2, 6, true);
    await wait(500); SFX.rustle();
    await wait(1100);
    env.hidden = true;
    showLetter(true);
  }
  $("#envelope").addEventListener("click", (e) => { e.stopPropagation(); openEnvelope(); });
  $("#envelope").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); } });

  let skip = false;
  async function showLetter(animate) {
    const letter = $("#letter"), body = $("#letter-body"), accept = $("#accept");
    letter.hidden = false; accept.hidden = true; body.innerHTML = ""; skip = !animate;
    letter.classList.remove("in"); void letter.offsetWidth; letter.classList.add("in");
    const parts = [["greeting", L.greeting], ...L.paragraphs.map((p) => ["p", p]), ["sign", L.signature]];
    for (const [cls, text] of parts) {
      const el = document.createElement("p");
      el.className = "l-" + cls;
      body.appendChild(el);
      if (skip) { el.textContent = text; continue; }
      let n = 0;
      for (const ch of text) {
        if (skip) { el.textContent = text; break; }
        el.textContent += ch;
        if (++n % 3 === 0) SFX.type();
        await wait(ch === "," || ch === "." ? 120 : 24);
      }
      await wait(350);
    }
    accept.hidden = false;
    accept.classList.add("pulse-in");
  }
  $("#letter").addEventListener("click", (e) => { e.stopPropagation(); skip = true; });

  /* ---------- 3. the Hashira ceremony ---------- */
  $("#accept").addEventListener("click", (e) => { e.stopPropagation(); ceremony(); });
  async function ceremony() {
    $("#letter-stage").hidden = true;
    const cer = $("#ceremony"), scroll = $("#scroll");
    cer.hidden = false; cer.classList.remove("open");
    scroll.className = "scroll";
    $("#finale").textContent = ""; $("#finale").className = "finale";
    $("#finale-btns").hidden = true;
    $("#hanko").className = "hanko";
    cer.querySelector(".cert-name").textContent = ALTAR.herName;
    $("#cert-kanji").textContent = C.kanji;
    $("#cert-rank").textContent = C.rank;
    $("#cert-forms").innerHTML = "";
    C.breathing.forEach((b) => { const li = document.createElement("li"); li.textContent = b; $("#cert-forms").appendChild(li); });
    const d = ALTAR.togetherSince ? Math.floor((Date.now() - new Date(ALTAR.togetherSince + "T00:00:00")) / 864e5) : -1;
    $("#cert-days").textContent = d >= 0 ? `Together since ${new Date(ALTAR.togetherSince + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}. ${d} days and counting` : "";
    requestAnimationFrame(() => cer.classList.add("open"));

    await wait(400);
    SFX.unroll();
    scroll.classList.add("unrolled");
    await wait(1500);
    scroll.classList.add("written");
    await wait(2600);
    // the stamp
    $("#hanko").classList.add("stamped");
    await wait(260);
    SFX.stamp();
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);
    await wait(500);
    // grand finale
    SFX.fanfare();
    for (let i = 0; i < 40; i++) setTimeout(() => FX.burst(Math.random() * innerWidth, innerHeight + 10, 1, true), i * 70);
    FX.heartRain(60);
    setTimeout(() => FX.heartRain(40), 1800);
    await wait(900);
    const fin = $("#finale");
    fin.classList.add("show");
    for (const ch of C.finale) { fin.textContent += ch; await wait(45); }
    await wait(600);
    $("#finale-btns").hidden = false;
    busy = false;
  }
  $("#again").addEventListener("click", (e) => { e.stopPropagation(); $("#ceremony").hidden = true; $("#letter-stage").hidden = false; $("#envelope").hidden = true; showLetter(false); });
  $("#close-ceremony").addEventListener("click", (e) => { e.stopPropagation(); closeAll(); });
  function closeAll() {
    stopSong();
    ["#ceremony", "#letter-stage", "#crow-bubble"].forEach((s) => ($(s).hidden = true));
    $("#crow").hidden = true;
    SFX.duck(false);
    busy = false;
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#ceremony").hidden && !$("#finale-btns").hidden) closeAll(); });
  ["#ceremony", "#letter-stage"].forEach((s) => $(s).addEventListener("click", (e) => e.stopPropagation()));

  /* ---------- triggers ---------- */
  $("#call-crow").addEventListener("click", (e) => { e.stopPropagation(); callCrow(); });
  // the crow arrives by itself the first time she reaches the end of the altar
  new IntersectionObserver((es, obs) => {
    if (es.some((x) => x.isIntersecting) && !crowCame && !$("#altar").hidden) { obs.disconnect(); setTimeout(callCrow, 1200); }
  }, { threshold: 0.6 }).observe(document.querySelector("footer"));
})();
