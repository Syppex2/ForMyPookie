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
      "Ara ara, Merry Christmas. ¿Te portaste bien este año?",
      "Santa Shinobu tiene una lista. Estás en la de los buenos. Apenas",
      "Hasta la Hashira del Insecto se toma el día libre en Navidad",
    ],
    candles: [
      "All I want for Christmas is you (y ÑOYD)",
      "Llamó Santa. Dice que eres mi regalo favorito",
      "Chocolate caliente, una mantita y tú. Navidad perfecta",
    ],
    advent: [
      "Día 1. Empieza la cuenta regresiva. Ya sé cuál es mi regalo favorito: tú",
      "Hoy toca chocolate caliente. Extra marshmallows. Órdenes de la doctora (la doctora es Shinobu)",
      "Pon una canción navideña y baila un poquito. Nadie te ve, solo Lloyd",
      "Dato: en diciembre te ves más cute. Yo no pongo las reglas",
      "Pide un deseo hoy. Voy a tratar de cumplirlo",
      "Envuélvete en una mantita como burrito. Esa es la tarea de hoy",
      "Siete días y sigo pensando en ti todos y cada uno",
      "Gato Chico quiere saber si le toca regalo. Se portó bien. Más o menos",
      "Ve algo cozy esta noche. Una peli navideña o el anime que estamos viendo, tú eliges",
      "Diez días. Lo estás haciendo increíble, puki",
      "Miru está durmiendo debajo del árbol otra vez. Classic Miru",
      "Hoy es buen día para una llamada larga. Solo digo",
      "Trece días y sigo siendo el más suertudo del server",
      "Acuérdate de comer algo calentito hoy. La sopa cuenta",
      "Vamos por la mitad. El regalo debajo del altar se está impacientando",
      "Escribe una cosa buena de este año. Empiezo yo: tú",
      "Si hace frío donde estás, te mando un abrazo por la pantalla",
      "ÑOYD quiere que sepas que se merece un regalo. Es muy convincente",
      "Faltan seis días. Te prometo que el regalo vale la pena",
      "Prende las velas del altar hoy. Las tres",
      "La noche más larga del año. Me la pasaría entera hablando contigo",
      "Faltan tres días. Ni se te ocurra abrir el regalo antes",
      "Dos noches más",
      "Nochebuena. Mañana puedes abrir el regalo debajo del altar",
      "Merry Christmas, puki. Anda a abrir tu regalo",
      "Ya pasó la Navidad, pero yo sigo siendo tuyo. Eso no vence",
    ],
    letter: {
      greeting: "Merry Christmas, puki",
      paragraphs: [
        "Otra Navidad contigo. No sé cómo tuve tanta suerte, pero no lo voy a cuestionar.",
        "Este año no fue fácil. Cambiaron las reglas, las cosas se pusieron pesadas y tú seguiste igual. Lo vi todo, y estoy muy orgulloso de ti.",
        "Mi deseo de Navidad es simple. Más WAWAs, más matching pfps, más noches de anime juntos y más años siendo tuyo. El próximo año, y el siguiente, y todos los que vengan.",
        "Te amo. Merry Christmas de parte mía, de Miru, Lloyd y Gato Chico. Y de Maxwell, insistió.",
      ],
      signature: "Tu Giyu, always",
    },
  };

  // swap in the Christmas content
  ALTAR.shinobu.images = [...X.shinobu.map((f) => "../christmas/" + f), ...ALTAR.shinobu.images];
  ALTAR.shinobu.quotes = [...X.quotes, ...ALTAR.shinobu.quotes];
  ALTAR.candleMessages = [...X.candles, ...ALTAR.candleMessages];
  ALTAR.dailyNotes = [X.advent[day - 1]];
  ALTAR.dailyTag = day <= 25 ? `Adviento · Día ${day} de 25` : "Merry Christmas";
  ALTAR.xmasLetter = X.letter;
  document.documentElement.classList.add("xmas");

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // entrance text
  const gk = $("#gate .kicker"); if (gk) gk.textContent = "蝶屋敷 · una noche nevada en el techo";
  const hint = $("#gate-hint"); if (hint) hint.textContent = "sube el volumen y toca donde sea";

  // string of lights across the top of the altar
  const lights = document.createElement("div");
  lights.className = "xmas-lights"; lights.setAttribute("aria-hidden", "true");
  const n = innerWidth < 600 ? 14 : 28;
  for (let i = 0; i < n; i++) { const b = document.createElement("i"); b.style.animationDelay = (i % 4) * 0.45 + "s"; lights.appendChild(b); }
  $("#altar").prepend(lights);

  // the big Christmas banner under the note of the day
  const banner = document.createElement("figure");
  banner.className = "xmas-banner reveal";
  banner.innerHTML = `<img src="images/christmas/banner-2025.webp" alt="All the Hashira at Christmas" loading="lazy" /><figcaption>Merry Christmas de todos los Hashira (y de mí)</figcaption>`;
  banner.addEventListener("click", (e) => { e.stopPropagation(); window.FX && FX.openLightbox(banner.querySelector("img").src, "Merry Christmas de todos los Hashira (y de mí)"); });
  $("#daily").after(banner);

  // the present under the altar
  const gift = document.createElement("div");
  gift.className = "xmas-gift-wrap";
  const ready = day >= 25;
  gift.innerHTML = `
    <button class="xmas-gift ${ready ? "ready" : ""}" aria-label="Christmas present">
      <span class="g-lid"></span><span class="g-box"></span><span class="g-ribbon-v"></span><span class="g-bow"></span>
    </button>
    <p class="xmas-gift-tag">${ready ? "Es Navidad. Ábrelo" : "No abrir hasta el 25 de diciembre"}</p>`;
  $(".candles").before(gift);

  const modal = document.createElement("div");
  modal.id = "gift-modal"; modal.className = "stage"; modal.hidden = true;
  modal.innerHTML = `
    <article class="letter ow-letter xmas-letter">
      <p class="ow-title">${esc(X.letter.greeting)}</p>
      ${X.letter.paragraphs.map((p) => `<p class="ow-text">${esc(p)}</p>`).join("")}
      <p class="l-sign">${esc(X.letter.signature)}</p>
      <button class="btn" id="gift-close">Cerrar el regalo</button>
    </article>`;
  document.body.appendChild(modal);
  const close = () => { modal.classList.remove("open"); setTimeout(() => (modal.hidden = true), 400); };
  modal.addEventListener("click", (e) => { e.stopPropagation(); if (e.target === modal || e.target.id === "gift-close") close(); });

  gift.querySelector(".xmas-gift").addEventListener("click", (e) => {
    e.stopPropagation();
    const g = e.currentTarget;
    if (!ready) {
      const left = 25 - day;
      gift.querySelector(".xmas-gift-tag").textContent = left === 1 ? "Ara ara, todavía no. Falta un día" : `Ara ara, todavía no. Faltan ${left} días`;
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
