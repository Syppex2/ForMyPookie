/* CHRISTMAS MODE
   Turns on by itself from December 1 to December 26 (her phone's date).
   Preview any time:  ...index.html?christmas=1   (pretends it's December 7)
                      ...index.html?christmas=25  (pretends it's Christmas Day)
   Force it off:      ...index.html?christmas=0
   Loaded before script.js so the rest of the site can see window.XMAS. */
(function () {
  const param = new URLSearchParams(location.search).get("christmas");
  const now = new Date();
  let day = now.getMonth() === 11 && now.getDate() <= 26 ? now.getDate() : 0;
  if (param === "0") day = 0;
  else if (param) day = Math.min(26, Math.max(1, Number(param) === 1 ? 7 : Number(param) || 7));
  window.XMAS = day ? { day } : null;
  if (!day) return;

  const X = {
    shinobu: ["shinobu-xmas-2025.webp", "shinobu-xmas-2023.webp", "shinobu-xmas-2022.webp", "shinobu-xmas-2024.webp", "shinobu-xmas-2020.webp"],
    quotes: [
      "Ara ara, Merry Christmas. Did you behave this year?",
      "Santa Shinobu has a list. You're on the nice one. Barely",
      "Even the Insect Hashira takes a day off for Christmas",
    ],
    candles: [
      "All I want for Christmas is you (and ÑOYD)",
      "Santa called. He says you're my favorite gift",
      "Hot chocolate, a blanket and you. Perfect Christmas",
    ],
    advent: [
      "Day 1. The countdown starts. I already know my favorite gift: you",
      "Hot chocolate today. Extra marshmallows. Doctor's orders (Shinobu is the doctor)",
      "Put on a Christmas song and dance a little. Nobody's watching except Lloyd",
      "Fact: you look cuter in December. I don't make the rules",
      "Make a wish today. I'll try to make it come true",
      "Wrap yourself in a blanket like a burrito. That's today's task",
      "Seven days in and I'm still thinking about you every single one",
      "Gato Chico wants to know if he's getting a present. He's been good. Mostly",
      "Watch something cozy tonight. A Christmas movie or the anime we're watching, you choose",
      "Ten days down. You're doing amazing, pookie",
      "Miru is sleeping under the tree again. Classic Miru",
      "Today is a good day for a long call. Just saying",
      "Thirteen days, and I'm still the luckiest guy on the server",
      "Remember to eat something warm today. Soup counts",
      "Halfway there. The present under the altar is getting impatient",
      "Write down one good thing from this year. I'll start: you",
      "If it's cold where you are, I'm sending you a hug through the screen",
      "ÑOYD would like you to know he deserves a gift. He's very convincing",
      "Six days left. I promise the present is worth it",
      "Light the candles on the altar today. All three",
      "The longest night of the year. I'd stay up all of it talking to you",
      "Three days left. Don't you dare open the present early",
      "Two more sleeps",
      "Christmas Eve. Tomorrow you can open the present under the altar",
      "Merry Christmas, pookie. Go open your present",
      "Christmas is over, but I'm still yours. That part doesn't expire",
    ],
    letter: {
      greeting: "Merry Christmas, pookie",
      paragraphs: [
        "Another Christmas with you. I don't know how I got this lucky, but I'm not going to question it.",
        "This year wasn't easy. The rules changed, things got heavy, and you kept going anyway. I saw all of it, and I'm so proud of you.",
        "My Christmas wish is simple. More WAWAs, more matching pfps, more anime nights together, and more years of being yours. Next year, and the one after that, and every one after.",
        "I love you. Merry Christmas from me, Miru, Lloyd and Gato Chico. And Maxwell, he insisted.",
      ],
      signature: "Your Giyu, always",
    },
  };

  // swap in the Christmas content
  ALTAR.shinobu.images = [...X.shinobu.map((f) => "../christmas/" + f), ...ALTAR.shinobu.images];
  ALTAR.shinobu.quotes = [...X.quotes, ...ALTAR.shinobu.quotes];
  ALTAR.candleMessages = [...X.candles, ...ALTAR.candleMessages];
  ALTAR.dailyNotes = [X.advent[day - 1]];
  ALTAR.dailyTag = day <= 25 ? `Advent · Day ${day} of 25` : "Merry Christmas";
  ALTAR.xmasLetter = X.letter;
  document.documentElement.classList.add("xmas");

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // entrance text
  const gk = $("#gate .kicker"); if (gk) gk.textContent = "蝶屋敷 · a snowy night on the roof";
  const hint = $("#gate-hint"); if (hint) hint.textContent = "turn your sound on and tap anywhere";

  // string of lights across the top of the altar
  const lights = document.createElement("div");
  lights.className = "xmas-lights"; lights.setAttribute("aria-hidden", "true");
  const n = innerWidth < 600 ? 14 : 28;
  for (let i = 0; i < n; i++) { const b = document.createElement("i"); b.style.animationDelay = (i % 4) * 0.45 + "s"; lights.appendChild(b); }
  $("#altar").prepend(lights);

  // the big Christmas banner under the note of the day
  const banner = document.createElement("figure");
  banner.className = "xmas-banner reveal";
  banner.innerHTML = `<img src="images/christmas/banner-2025.webp" alt="All the Hashira at Christmas" loading="lazy" /><figcaption>Merry Christmas from all the Hashira (and me)</figcaption>`;
  banner.addEventListener("click", (e) => { e.stopPropagation(); window.FX && FX.openLightbox(banner.querySelector("img").src, "Merry Christmas from all the Hashira (and me)"); });
  $("#daily").after(banner);

  // the present under the altar
  const gift = document.createElement("div");
  gift.className = "xmas-gift-wrap";
  const ready = day >= 25;
  gift.innerHTML = `
    <button class="xmas-gift ${ready ? "ready" : ""}" aria-label="Christmas present">
      <span class="g-lid"></span><span class="g-box"></span><span class="g-ribbon-v"></span><span class="g-bow"></span>
    </button>
    <p class="xmas-gift-tag">${ready ? "It's Christmas. Open it" : "Don't open until December 25"}</p>`;
  $(".candles").before(gift);

  const modal = document.createElement("div");
  modal.id = "gift-modal"; modal.className = "stage"; modal.hidden = true;
  modal.innerHTML = `
    <article class="letter ow-letter xmas-letter">
      <p class="ow-title">${esc(X.letter.greeting)}</p>
      ${X.letter.paragraphs.map((p) => `<p class="ow-text">${esc(p)}</p>`).join("")}
      <p class="l-sign">${esc(X.letter.signature)}</p>
      <button class="btn" id="gift-close">Close the present</button>
    </article>`;
  document.body.appendChild(modal);
  const close = () => { modal.classList.remove("open"); setTimeout(() => (modal.hidden = true), 400); };
  modal.addEventListener("click", (e) => { e.stopPropagation(); if (e.target === modal || e.target.id === "gift-close") close(); });

  gift.querySelector(".xmas-gift").addEventListener("click", (e) => {
    e.stopPropagation();
    const g = e.currentTarget;
    if (!ready) {
      const left = 25 - day;
      gift.querySelector(".xmas-gift-tag").textContent = left === 1 ? "Ara ara, not yet. One more day" : `Ara ara, not yet. ${left} more days`;
      g.classList.remove("nope"); void g.offsetWidth; g.classList.add("nope");
      window.SFX && SFX.candleOff();
      return;
    }
    g.classList.add("opened");
    window.SFX && (SFX.init(), SFX.fanfare());
    if (window.FX) { FX.heartRain(24); const r = g.getBoundingClientRect(); FX.burst(r.left + r.width / 2, r.top, 8, true); }
    setTimeout(() => {
      modal.hidden = false;
      const art = modal.querySelector(".letter"); art.classList.remove("in"); void art.offsetWidth; art.classList.add("in");
      requestAnimationFrame(() => modal.classList.add("open"));
      window.SFX && SFX.rustle();
    }, 900);
  });
})();
