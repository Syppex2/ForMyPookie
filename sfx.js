/* Sound effects, all synthesized live with the Web Audio API (no audio files needed). */
const SFX = (() => {
  let ctx, master, musicGain, on = true, musicTimer = null, rain = null;
  const PENTA = [0, 2, 4, 7, 9]; // major pentatonic: soft, music-box feel

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.55;
    // gentle echo for a temple-hall feel
    const delay = ctx.createDelay(); delay.delayTime.value = 0.28;
    const fb = ctx.createGain(); fb.gain.value = 0.28;
    const wet = ctx.createGain(); wet.gain.value = 0.35;
    master.connect(ctx.destination);
    master.connect(delay); delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(ctx.destination);
    musicGain = ctx.createGain(); musicGain.gain.value = 0.22; musicGain.connect(master);
  }
  const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

  function tone(freq, { t = 0, dur = 0.6, type = "sine", vol = 0.3, attack = 0.005, out, glide } = {}) {
    if (!ctx || !on) return;
    const s = ctx.currentTime + t;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, s);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, s + dur);
    g.gain.setValueAtTime(0, s);
    g.gain.linearRampToValueAtTime(vol, s + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
    o.connect(g); g.connect(out || master); o.start(s); o.stop(s + dur + 0.05);
  }
  // bell = fundamental + inharmonic partials
  function bell(freq, t = 0, vol = 0.25, dur = 1.6) {
    tone(freq, { t, dur, vol });
    tone(freq * 2.76, { t, dur: dur * 0.5, vol: vol * 0.35 });
    tone(freq * 5.4, { t, dur: dur * 0.25, vol: vol * 0.15 });
  }
  function noise({ t = 0, dur = 0.3, vol = 0.2, from = 800, to = 3000, q = 1, type = "bandpass" } = {}) {
    if (!ctx || !on) return;
    const s = ctx.currentTime + t;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(from, s); f.frequency.exponentialRampToValueAtTime(to, s + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, s); g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
    src.connect(f); f.connect(g); g.connect(master); src.start(s);
  }

  return {
    init,
    get on() { return on; },
    toggle() { on = !on; if (on) this.music(); else { this.stopMusic(); this.rainStop(0.3); } return on; },

    /* Entrance: temple gong + rising chime arpeggio + whoosh of the doors */
    enter() {
      tone(hz(45), { dur: 3.5, vol: 0.35, type: "sine" });
      tone(hz(57), { dur: 2.5, vol: 0.12, type: "triangle" });
      noise({ dur: 1.2, vol: 0.12, from: 300, to: 1800, q: 0.7 });
      [72, 76, 79, 84, 88].forEach((n, i) => bell(hz(n), 0.25 + i * 0.12, 0.16));
    },
    hover() { tone(hz(96 + PENTA[Math.random() * 5 | 0]), { dur: 0.25, vol: 0.05 }); },
    chime() { [84, 88, 91].forEach((n, i) => bell(hz(n), i * 0.06, 0.1, 0.9)); },
    /* candle: match strike + whoosh + warm note */
    candle() {
      noise({ dur: 0.12, vol: 0.35, from: 2500, to: 6000, q: 2 });
      noise({ t: 0.08, dur: 0.6, vol: 0.18, from: 400, to: 1200, q: 0.6, type: "lowpass" });
      bell(hz(69 + PENTA[Math.random() * 5 | 0]), 0.15, 0.14, 1.4);
    },
    candleOff() { noise({ dur: 0.35, vol: 0.15, from: 1500, to: 300, q: 0.5 }); },
    /* camera shutter for the Hall of Shame */
    shutter() {
      noise({ dur: 0.05, vol: 0.4, from: 3000, to: 2000, q: 3 });
      noise({ t: 0.09, dur: 0.06, vol: 0.3, from: 2500, to: 1500, q: 3 });
    },
    flutter() { for (let i = 0; i < 4; i++) noise({ t: i * 0.045, dur: 0.04, vol: 0.08, from: 1800, to: 2600, q: 4 }); },
    twinkle() { tone(hz(100 + PENTA[Math.random() * 5 | 0]), { dur: 0.35, vol: 0.06, type: "triangle" }); },
    /* the big surprise */
    wish() {
      [60, 64, 67, 72, 76, 79, 84, 88, 91, 96].forEach((n, i) => bell(hz(n), i * 0.09, 0.14, 2));
      tone(hz(48), { dur: 3, vol: 0.25, attack: 0.3 });
      tone(hz(55), { dur: 3, vol: 0.15, attack: 0.3 });
    },
    /* two bells answering each other, like a heartbeat */
    heart() {
      bell(hz(79), 0, 0.14, 1.2); bell(hz(84), 0.14, 0.14, 1.4);
      tone(hz(55), { dur: 0.18, vol: 0.25 }); tone(hz(55), { t: 0.22, dur: 0.18, vol: 0.2 });
    },
    /* crow: two raspy caws */
    caw() {
      [0, 0.38].forEach((t) => {
        tone(620, { t, dur: 0.28, type: "sawtooth", vol: 0.12, glide: 380 });
        tone(910, { t, dur: 0.22, type: "square", vol: 0.04, glide: 560 });
        noise({ t, dur: 0.28, vol: 0.12, from: 1400, to: 700, q: 2 });
      });
    },
    wingbeat() { for (let i = 0; i < 3; i++) noise({ t: i * 0.12, dur: 0.1, vol: 0.12, from: 300, to: 900, q: 0.8, type: "lowpass" }); },
    crack() { noise({ dur: 0.08, vol: 0.4, from: 3000, to: 1200, q: 1.5 }); noise({ t: 0.05, dur: 0.12, vol: 0.25, from: 1500, to: 400, q: 1 }); },
    rustle() { for (let i = 0; i < 6; i++) noise({ t: i * 0.07, dur: 0.12, vol: 0.08, from: 2000 + Math.random() * 2000, to: 1200, q: 0.7 }); },
    type() { noise({ dur: 0.03, vol: 0.05, from: 2500, to: 2000, q: 3 }); },
    stamp() {
      tone(70, { dur: 0.5, vol: 0.5, glide: 40 });
      noise({ dur: 0.18, vol: 0.4, from: 600, to: 150, q: 0.7, type: "lowpass" });
    },
    unroll() { noise({ dur: 1.2, vol: 0.1, from: 400, to: 2500, q: 0.6 }); },
    fanfare() {
      const chord = [60, 64, 67, 72];
      chord.forEach((n) => tone(hz(n), { dur: 3.5, vol: 0.09, type: "triangle", attack: 0.08 }));
      [72, 76, 79, 84, 88, 91, 96, 100].forEach((n, i) => bell(hz(n), 0.1 + i * 0.1, 0.13, 2.2));
      [65, 69, 72, 77].forEach((n) => tone(hz(n), { t: 1.2, dur: 3, vol: 0.08, type: "triangle", attack: 0.1 }));
      [67, 71, 74, 79].forEach((n) => tone(hz(n), { t: 2.2, dur: 3.5, vol: 0.08, type: "triangle", attack: 0.1 }));
      [72, 76, 79, 84].forEach((n) => tone(hz(n), { t: 3.2, dur: 4.5, vol: 0.1, type: "triangle", attack: 0.1 }));
    },
    /* backup tune for Maxwell if there's no mp3: a bouncy original loop */
    maxwellLoop() {
      if (!ctx || !on) return null;
      const bass = [45, 52, 45, 52, 43, 50, 43, 50], mel = [76, 79, 81, 79, 76, 74, 72, 74, 76, 79, 84, 83, 81, 79, 76, 79];
      let i = 0;
      const step = () => {
        const b = bass[(i >> 1) % bass.length];
        if (i % 2 === 0) tone(hz(b), { dur: 0.2, vol: 0.22, type: "triangle" });
        else tone(hz(b + 12), { dur: 0.12, vol: 0.08, type: "square" });
        tone(hz(mel[i % mel.length]), { dur: 0.16, vol: 0.06, type: "square" });
        i++;
      };
      step();
      return setInterval(step, 190);
    },
    /* a little meow: each kid gets a different pitch */
    meow(n = 0) {
      if (!ctx || !on) return;
      const base = [620, 520, 700][n % 3];
      const s0 = ctx.currentTime;
      const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(base * 0.8, s0);
      o.frequency.linearRampToValueAtTime(base * 1.25, s0 + 0.18);
      o.frequency.exponentialRampToValueAtTime(base * 0.7, s0 + 0.55);
      f.type = "bandpass"; f.Q.value = 3;
      f.frequency.setValueAtTime(900, s0); f.frequency.linearRampToValueAtTime(1800, s0 + 0.2); f.frequency.linearRampToValueAtTime(800, s0 + 0.55);
      g.gain.setValueAtTime(0, s0); g.gain.linearRampToValueAtTime(0.25, s0 + 0.06); g.gain.exponentialRampToValueAtTime(0.001, s0 + 0.6);
      o.connect(f); f.connect(g); g.connect(master); o.start(s0); o.stop(s0 + 0.65);
    },
    /* soft night rain for the entrance */
    rainStart() {
      if (!ctx || !on || rain) return;
      const len = ctx.sampleRate * 3, buf = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); let last = 0;
        for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.06 * w) / 1.06; d[i] = w * 0.55 + last * 2.5; } }
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 400;
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 5200;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(ctx.destination);
      src.start(); g.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 2.5);
      // little drops hitting the roof tiles
      const drops = setInterval(() => {
        if (!on) return;
        for (let i = 0; i < 3; i++) if (Math.random() < 0.6) noise({ t: Math.random() * 0.2, dur: 0.03, vol: 0.03 + Math.random() * 0.04, from: 2500 + Math.random() * 3000, to: 1800, q: 6 });
      }, 220);
      rain = { src, g, drops };
    },
    rainStop(fade = 3) {
      if (!rain) return;
      const r = rain; rain = null; clearInterval(r.drops);
      r.g.gain.setTargetAtTime(0, ctx.currentTime, fade / 3);
      setTimeout(() => { try { r.src.stop(); } catch (e) {} }, fade * 1000 + 500);
    },
    /* alarm clock: fast double bell rings */
    alarm() {
      for (let i = 0; i < 8; i++) {
        const t = i * 0.16;
        tone(1320, { t, dur: 0.12, type: "square", vol: 0.06 });
        tone(1760, { t: t + 0.06, dur: 0.1, type: "square", vol: 0.05 });
      }
    },
    /* discord-ish message ping */
    ping() { tone(hz(84), { dur: 0.15, vol: 0.12, type: "triangle" }); tone(hz(91), { t: 0.07, dur: 0.2, vol: 0.1, type: "triangle" }); },
    pop() { tone(500, { dur: 0.12, vol: 0.12, glide: 1200 }); },

    /* soft generative music box loop */
    music() {
      if (!ctx || !on || musicTimer) return;
      const roots = [60, 57, 53, 55]; let bar = 0;
      const play = () => {
        const r = roots[bar++ % roots.length];
        tone(hz(r - 12), { dur: 3.2, vol: 0.18, attack: 0.4, out: musicGain });
        for (let i = 0; i < 6; i++) {
          if (Math.random() < 0.75) {
            const n = r + 12 + PENTA[Math.random() * 5 | 0] + (Math.random() < 0.3 ? 12 : 0);
            tone(hz(n), { t: i * 0.42, dur: 1.4, vol: 0.12, type: "triangle", out: musicGain });
          }
        }
      };
      play(); musicTimer = setInterval(play, 2520);
    },
    stopMusic() { clearInterval(musicTimer); musicTimer = null; },
    duck(on) { if (musicGain) musicGain.gain.setTargetAtTime(on ? 0.05 : 0.22, ctx.currentTime, 0.5); },
  };
})();
