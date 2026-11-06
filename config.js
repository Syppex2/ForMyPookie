/* =========================================================
   EDIT THIS FILE TO CHANGE THE TEXT AND PICTURES OF THE ALTAR
   - Character pictures go in  images/characters/
   - Chat screenshots go in    images/chat/
   - Then write the file name below exactly as it is (with .png / .jpg)
   Pictures are chosen in this order:
     1) your own file in images/characters/ (always wins)
     2) official art fetched from AniList (using ani + match)
     3) an emoji placeholder
   ani   = the show's name on anilist.co
   match = part of the character's name as AniList writes it
   ========================================================= */

const ALTAR = {
  // Her name or nickname (shown at the top)
  herName: "Pookie",

  // Shown on the entrance screen
  welcome: "Te hice un altar chiquito",

  // Signature at the bottom
  from: "From your Giyu, que te elegiría en todas las vidas",

  // Shown when all three candles are lit
  allCandlesMessage: "Prendiste las tres. Wish granted: me tienes a mí, forever. No hay devoluciones.",

  // Random messages that appear when she lights a candle
  candleMessages: [
    "WAWA. I miss you too",
    "hallo puki. /huggies",
    "Amor, estás muy stinky. But you're my stinky",
    "blub blub blub (am fish). Traducción: te amo",
    "Te debo un besito de buenas noches. Here, have ten",
    "Ranking oficial: tú, después Shinobu, después Giyu",
    "Shinobu aprueba esta relación",
    "Ni Maomao podría descubrir cómo eres tan cute",
    "Doggy dice hola. Todavía te quiere atrapar",
    "You're my favorite episode",
    "Shinobu te sonrió. O le caes bien o ya te envenenó",
    "Somos GiyuShino en la vida real. Yo soy Giyu, sorry",
    "Cargando matching pfp número 1000...",
    "Miru, Lloyd y Gato Chico saludan a su mamá",
    "Gato Chico se llama Raven. Nadie le ha dicho así nunca",
    "Lloyd, alias ÑOYD, aprueba este altar",
    "Miru quiere saber cuándo vienes",
    "Eepy and in love with Shinobu. Leí tu bio, lo sé todo",
  ],

  // ---------- THE CHOSEN ONES (shown big, under Shinobu) ----------
  favorites: [
    { name: "Giyu Tomioka", from: "Kimetsu no Yaiba", img: "../couples/giyu.png", emoji: "🌊", note: "No lo odian (bueno, un poquito)" },
    { name: "Rei Ayanami",  from: "Neon Genesis Evangelion", img: "rei.jpg", emoji: "🤖", note: "En su lista de favoritos since forever", ani: "Neon Genesis Evangelion", match: "Rei" },
    { name: "Denji",  from: "Chainsaw Man",        img: "denji.png",  emoji: "🪚", note: "Woof woof", ani: "Chainsaw Man", match: "Denji" },
    { name: "Doggy",  from: "Piggy (Roblox)",      img: "doggy.webp",  emoji: "🐶", note: "Da miedo pero es cute igual" },
    { name: "Maomao", from: "The Apothecary Diaries", img: "maomao.png", emoji: "🧪", note: "Se tomaría tu veneno solo para ponerle nota", ani: "Kusuriya no Hitorigoto", match: "Maomao" },
    { name: "Akaza",  from: "Kimetsu no Yaiba",    img: "akaza.png",  emoji: "👊", note: "Sigo enojado por Rengoku. Igual está en la lista", ani: "Kimetsu no Yaiba: Mugen Ressha-hen", match: "Akaza" },
  ],

  // ---------- SHINOBU (center of the altar) ----------
  // Pictures in images/shinobu/, they change one after another.
  shinobu: {
    images: [
      "shinobu-1.webp", "shinobu-2.webp", "shinobu-3.webp", "shinobu-4.webp", "shinobu-5.webp",
      "shinobu-6.webp", "shinobu-7.webp", "shinobu-8.webp", "shinobu-9.webp",
    ],
    // Lines that change with each picture
    quotes: [
      "Ara ara, ¿no sería lindo que todos nos lleváramos bien?",
      "Insect Hashira, Kocho Shinobu. 蟲柱 胡蝶しのぶ",
      "Te sonríe y después te envenena. Tú me haces lo mismo",
      "Muy bajita para cortarle la cabeza a un demonio, así que inventó un veneno. Legend",
      "La dueña de este altar. Tú solo estás de visita",
    ],
  },

  // ---------- HER SHELF (from her MyFigureCollection) ----------
  shelf: {
    bio: "i'm eepy and in love with shinobu",
    link: "https://myfigurecollection.net/profile/mew_owo",
    figures: "shelf/figures.webp",
    goods: "shelf/goods.webp",
    caption: "43 figuras and counting. Conté 5 Shinobus, 5 Mikus y demasiados Giyus",
  },

  // ---------- OUR KIDS (pictures in images/kids/) ----------
  kids: [
    { name: "Gato Chico", aka: "legalmente Raven", img: "gato-chico.webp", line: "Vigila a todos desde arriba de los muebles. Nadie le dice Raven hace años" },
    { name: "Lloyd", aka: "ÑOYD", img: "lloyd.webp", line: "Su hijo. El más esponjoso, y el que veo en cada videollamada en vez de a ella" },
    { name: "Miru", aka: "my kid", img: "miru.webp", line: "Se queda dormido encima mío mientras juego. No me puedo mover hasta que Miru despierte" },
  ],

  // ---------- MATCHING SOULS (couples, like our matching pfps) ----------
  couplesBanner: { img: "couples/giyu-shinobu-official.webp", caption: "GiyuShino. Arte oficial, so it's basically canon" },
  couples: [
    { a: { name: "Zhongli", img: "couples/zhongli.webp" }, b: { name: "Hu Tao", img: "couples/hutao.webp" }, from: "Genshin Impact", note: "Nuestra primera matching pfp. La eligió Wolf, y así más o menos empezó lo nuestro" },
    { a: { name: "Giyu",    img: "couples/giyu.png" },    b: { name: "Shinobu", img: "characters/shinobu.png" }, from: "Kimetsu no Yaiba", note: "Ella lo bullea y él se deja. Me suena familiar" },
    { a: { name: "Obanai",  img: "couples/obanai.jpg" },  b: { name: "Mitsuri", img: "couples/mitsuri.png" },    from: "Kimetsu no Yaiba", note: "Él le escribía cartas. Yo te hice una página" },
    { a: { name: "Sanemi",  img: "couples/sanemi.png" },  b: { name: "Kanae",   img: "couples/kanae.png" },      from: "Kimetsu no Yaiba", note: "Él gruñón, ella un amor" },
    { a: { name: "Tanjiro", img: "couples/tanjiro.png" }, b: { name: "Kanao",   img: "couples/kanao.png" },      from: "Kimetsu no Yaiba", note: "Lo decidió una moneda" },
    { a: { name: "Zenitsu", img: "couples/zenitsu.png" }, b: { name: "Nezuko",  img: "couples/nezuko.png" },     from: "Kimetsu no Yaiba", note: "Al final sí ganó" },
    { a: { name: "Akaza",   img: "characters/akaza.png" },b: { name: "Koyuki",  img: "couples/koyuki.png" },     from: "Kimetsu no Yaiba", note: "De esta no hablamos" },
    { a: { name: "L",       img: "characters/l.png" },    b: { name: "Misa",    img: "couples/misa.png" },       from: "Death Note", note: "Pastel y caos" },
    { a: { name: "Okarun",  img: "characters/okarun.png" },b:{ name: "Momo",    img: "couples/momo.png" },       from: "Dandadan", note: "A ella le gusta Ken Takakura. El de verdad" },
    { a: { name: "Yuta",    img: "couples/yuta.jpg" },    b: { name: "Maki",    img: "couples/maki.png" },       from: "Jujutsu Kaisen", note: "Los dos me podrían pegar" },
    { a: { name: "Gojo",    img: "characters/gojo.png" }, b: { name: "Geto",    img: "couples/geto.png" },       from: "Jujutsu Kaisen", note: "Mejores amigos. Sure" },
    { a: { name: "Denji",   img: "characters/denji.png" },b: { name: "Reze",    img: "couples/reze.png" },       from: "Chainsaw Man", note: "Debió ir al café" },
    { a: { name: "David",   img: "couples/david.png" },   b: { name: "Lucy",    img: "characters/lucy.jpg" },    from: "Cyberpunk: Edgerunners", note: "Yo también te llevaría a la luna" },
  ],

  // ---------- OFFERINGS (one card per show she watched) ----------
  characters: [
    { name: "Satoru Gojo",   from: "Jujutsu Kaisen",            img: "gojo.png",     emoji: "🕶️", ani: "Jujutsu Kaisen", match: "Satoru" },
    { name: "L",             from: "Death Note",                img: "l.png",        emoji: "🍰", ani: "Death Note", match: "L" },
    { name: "Greninja",      from: "Pokémon XY",                img: "greninja.jpg", emoji: "🐸" },
    { name: "Hatsune Miku",  from: "Vocaloid",                  img: "miku.jpg",     emoji: "🎤" },
    { name: "Rem",           from: "Re:Zero",                   img: "rem.png",      emoji: "💙" },
    { name: "Miyo / Muge",   from: "A Whisker Away",            img: "muge.jpg",     emoji: "🐱", ani: "Nakitai Watashi wa Neko wo Kaburu", match: "Miyo" },
    { name: "Okarun",        from: "Dandadan",                  img: "okarun.png",   emoji: "👽", ani: "Dandadan", match: "Ken" },
    { name: "Loid Forger",   from: "Spy x Family",              img: "loid.png",     emoji: "🕵️", ani: "Spy x Family", match: "Loid" },
    { name: "Legoshi",       from: "Beastars",                  img: "legoshi.png",  emoji: "🐺", ani: "Beastars", match: "Legoshi" },
    { name: "Power",         from: "Chainsaw Man",              img: "power.png",    emoji: "🩸", ani: "Chainsaw Man", match: "Power" },
    { name: "Nazuna",        from: "Call of the Night",         img: "nazuna.png",   emoji: "🌙", ani: "Yofukashi no Uta", match: "Nazuna" },
    { name: "Marin Kitagawa",from: "My Dress-Up Darling",       img: "marin.png",    emoji: "🧵", ani: "Sono Bisque Doll wa Koi wo Suru", match: "Marin" },
    { name: "Platelet",      from: "Cells at Work",             img: "platelet.jpg", emoji: "🩹", ani: "Hataraku Saibou", match: "Platelet" },
    { name: "Red Blood Cell",from: "Cells at Work: Code Black", img: "rbc.jpg",      emoji: "🫀", ani: "Hataraku Saibou BLACK", match: "Red" },
    { name: "Yumeko Jabami", from: "Kakegurui",                 img: "yumeko.png",   emoji: "🎲", ani: "Kakegurui", match: "Yumeko" },
    { name: "Mary Saotome",  from: "Kakegurui Twin",            img: "mary.png",     emoji: "🃏", ani: "Kakegurui Twin", match: "Mary" },
    { name: "Nagatoro",      from: "Don't Toy with Me, Miss Nagatoro", img: "nagatoro.png", emoji: "😼", ani: "Ijiranaide, Nagatoro-san", match: "Nagatoro" },
    { name: "Lucius",        from: "Thermae Romae",             img: "lucius.png",   emoji: "🛁", ani: "Thermae Romae", match: "Lucius" },
    { name: "Tatsu",         from: "The Way of the Househusband", img: "tatsu.png",  emoji: "🍳", ani: "Gokushufudou", match: "Tatsu" },
    { name: "Senpai",        from: "Magical Sempai",            img: "senpai.png",   emoji: "🎩", ani: "Tejina-senpai", match: "Senpai" },
    { name: "Ju-gyeong",     from: "True Beauty",               img: "jugyeong.png", emoji: "💄", ani: "True Beauty", match: "Ju" },
    { name: "Sakura",        from: "I Want to Eat Your Pancreas", img: "sakura.jpg", emoji: "🌸", ani: "Kimi no Suizou wo Tabetai", match: "Sakura" },
    { name: "Lucy",          from: "Cyberpunk: Edgerunners",    img: "lucy.jpg",     emoji: "🌕", ani: "Cyberpunk: Edgerunners", match: "Lucy" },
    { name: "Shoko",         from: "A Silent Voice",            img: "shoko.png",    emoji: "🤟", ani: "Koe no Katachi", match: "Shouko" },
    { name: "Ayumu",         from: "Japan Sinks: 2020",         img: "ayumu.png",    emoji: "🏃‍♀️", ani: "Nihon Chinbotsu 2020", match: "Ayumu" },
    { name: "Hinata",        from: "Haikyuu!!",                 img: "hinata.png",   emoji: "🏐", ani: "Haikyuu!!", match: "Shouyou" },
    { name: "Levi",          from: "Attack on Titan",           img: "levi.png",     emoji: "🗡️", ani: "Shingeki no Kyojin", match: "Levi" },
  ],

  // ---------- HALL OF SHAME (her chat screenshots) ----------
  chats: [
    { img: "pookie-wakeup.png", caption: "WAKEUP, I MISS U, POOKIE. Cuatro mensajes en el mismo minuto. Después le pidió a ChatGPT que dibujara cómo es hablar con ella, y le atinó" },
    { img: "u-gigantic-angry-wife.png", caption: "Mandó esto solo con una \"U\". Yo soy el chiquito, ella la gigantic angry wife. Correcto" },
    { img: "panda-dance.webp", caption: "PANDA" },
    { img: "videocall-cat.webp", caption: "She showing me our son, ÑOYD" },
    { video: "blub-blub", caption: "blub blub blub. Así nos decimos te amo" },
    { img: "ill-paw-you.webp", caption: "I'll paw you" },
    { img: "gato-no-da-mas.png", caption: "Ella después de estudiar diez minutos. Gato culiao que no da más" },
  ],

  // ---------- BUTTERFLY CINEMA (looping clips in images/gifs/) ----------
  cinema: [
    { video: "shinobu-victory-2", caption: "\"Ara, ¿usé demasiado veneno? Silly me.\"" },
    { video: "shinobu-dragonfly", caption: "Respiración del Insecto, Danza de la Libélula: Ojo Compuesto Hexagonal" },
    { video: "shinobu-academy", caption: "Shinobu de Kimetsu Gakuen" },
    { video: "shinobu-horsefly", caption: "Respiración del Insecto, Danza del Tábano" },
    { video: "shinobu-victory", caption: "Yéndose como si nada hubiera pasado" },
    { video: "shinobu-centipede", caption: "Respiración del Insecto, Danza del Ciempiés: Zigzag de Cien Patas" },
  ],

  // ---------- GIYUSHINO ARCHIVE (canon moments) ----------
  giyushino: [
    { video: "giyushino-mission", title: "Siempre los mandaban juntos de misión", text: "Oyakata-sama manda a los dos al Monte Natagumo. Los emparejaban mucho." },
    { video: "giyushino-victory", title: "\"Si tan solo los humanos y los demonios pudieran llevarse bien\"", text: "Ella lo dice sonriendo. Él está a su lado sin decir nada, como siempre." },
    { img: "couples/giyu-shinobu-official.webp", title: "\"Por eso todos te odian\"", text: "Giyu bloquea su ataque para proteger a Nezuko, y ella le dice que por eso nadie lo quiere. Su respuesta: \"No me odian.\" Sí lo odian, un poquito." },
    { video: "giyushino-victory-2", title: "Ella quiere que él hable más", text: "Lo molesta todo el tiempo, pero de verdad quiere que se abra. Él le dice que trabaja duro y se preocupa por ella sin decirlo. Hasta Gyomei notó que les gusta hablar entre ellos." },
    { img: "shinobu/shinobu-2.webp", title: "Él recuerda su sonrisa", text: "Cuando Giyu se entera, lo primero que piensa es en ella sonriendo. Ok, no estoy llorando." },
  ],

  // Optional: your favorite GiyuShino doujinshi.
  // The section only shows up when this list has something in it.
  // { title: "Name of the doujin", by: "artist or circle", link: "https://...", note: "why we like it" },
  doujinshi: [
  ],

  // ---------- OUR STORY (timeline) ----------
  // Each chapter can have: img (one picture), pair (two pictures side by side),
  // youtube (a video id), kids: true (shows the cats), today: true (counts the days).
  story: [
    { title: "El server de Baxth", text: "Nos conocimos hablando en el server de nuestro amigo Baxth. Dos randoms escribiendo en el mismo chat. No tenía idea de lo que venía." },
    { title: "La rebelión", text: "Después armamos una pequeña rebelión contra Baxth, just for fun. Tranqui, ya somos todos amigos otra vez. Hi Baxth." },
    { title: "awa", text: "Hiciste awa, nuestro server rebelde, y de alguna forma yo estaba ahí todo el tiempo. Ahí nos volvimos nosotros." },
    { title: "25 de julio, 2021", text: "El día que te volviste mi novia. El mejor día de mi vida, y todos los que vinieron después le siguen muy de cerca." },
    { title: "Nuestra primera matching pfp", pair: ["couples/zhongli.webp", "couples/hutao.webp"], text: "Zhongli y Hu Tao. Nuestro amigo Wolf las eligió por nosotros, y honestamente eso tuvo mucho que ver con que termináramos juntos. Thank you, Wolf. La primera de como mil matching pfps." },
    { title: "Nuestra canción", youtube: "KvMY1uzSC1E", text: "I Really Want to Stay at Your House. Cada vez que suena, pienso en ti." },
    { title: "Caso Cerrado, Roblox edition", gavel: true, text: "La noche que vimos el episodio de Caso Cerrado en Roblox y no podíamos ni respirar de la risa. Sigue siendo uno de mis recuerdos favoritos contigo." },
    { title: "La familia creció", kids: true, text: "Gato Chico, Lloyd y Miru. Tres hijos y ninguno nos hace caso." },
    { title: "Hoy", today: true, text: "Y te seguiría eligiendo. Every single time." },
  ],

  // ---------- FINAL SELECTION (quiz about us) ----------
  // The first option is always the right one (they get shuffled on the page).
  quiz: [
    { q: "¿Dónde nos conocimos?", options: ["En el server de Baxth", "En awa", "En un lobby de Genshin", "En Roblox"] },
    { q: "¿Cómo se llamaba nuestro server rebelde?", options: ["awa", "owo", "uwu", "Baxth"] },
    { q: "¿Cuándo empezamos a ser pareja?", options: ["25 de julio, 2021", "25 de junio, 2021", "25 de julio, 2022", "25 de agosto, 2021"] },
    { q: "¿Cuál fue nuestra primera matching pfp?", options: ["Zhongli y Hu Tao", "Giyu y Shinobu", "Denji y Reze", "Okarun y Momo"] },
    { q: "¿Quién eligió nuestra primera matching pfp?", options: ["Wolf", "Yo", "Tú", "Maxwell"] },
    { q: "¿Cuál es el nombre real de Gato Chico?", options: ["Raven", "Miru", "Lloyd", "Gato Grande"] },
    { q: "¿Cómo se llama ÑOYD de verdad?", options: ["Lloyd", "Loid Forger", "Noyd", "Raven"] },
    { q: "¿Cuál es nuestra canción?", options: ["I Really Want to Stay at Your House", "Maxwell the Cat Theme", "Gurenge", "Kick Back"] },
    { q: "¿Qué nos hizo reír hasta no poder respirar?", options: ["El episodio de Caso Cerrado en Roblox", "El video del panda", "Maxwell girando", "Los jumpscares de Doggy"] },
    { q: "¿Qué gritas cuando me demoro en contestar?", options: ["STOP IGNORING ME", "Ara ara", "Tsun tsun", "Buenos días"] },
    { q: "¿Quién es la verdadera dueña de este altar?", options: ["Shinobu", "Tú", "Maxwell", "Doggy"] },
  ],
  quizPass: 7, // how many right answers she needs
  quizRight: ["WAWA, correcto", "Ara ara, nos conoces demasiado bien", "Correcto. Shinobu está impresionada", "Yes! Obvio que te acuerdas"],
  quizWrong: ["Tsun tsun. Incorrecto", "Ara ara... no era esa", "STOP IGNORING THE RIGHT ANSWER", "Hmm. Le voy a contar a Lloyd"],

  // ---------- OPEN WHEN... (letters) ----------
  // Rewrite any of these in your own words. "secret: true" stays locked until she passes the quiz.
  openWhen: [
    // "date" = this text only on that day (her phone's date); from the next day it shows "after".
    { when: "el día sea demasiado", date: "2026-11-06",
      text: "Puki,\n\nHoy fue un día pesado, y lo sé. Te sentías mal, tenías frío, estabas cansada y estresada, y encima se te pasó la cita del médico. Quiero que sepas algo: no pasa nada. Llevas demasiadas cosas encima al mismo tiempo, y cuando alguien carga tanto, a veces algo se le cae. Eso no te hace menos. Te hace humana.\n\nLa cita se puede volver a pedir. Mañana, cuando estés más tranquila y con la mente más fría, la reservas sin apuro, y esta vez yo me encargo de recordártela. Te escribo el día antes y el mismo día, y te insisto hasta que vayas. Ahora me toca a mí.\n\nLo único que me duele es no poder estar ahí. Si pudiera, te taparía con una mantita, te haría algo calentito para tomar y pondría ese anime que tenemos pendiente, o cualquier serie que te guste. No te dejaría levantarte para nada. Como no puedo, te lo mando todo por aquí: huggies infinitos, todos los besitos de buenas noches que te debo, y a ÑOYD de guardia en tus pies.\n\nHoy no tienes que ser fuerte ni tenerlo todo bajo control. Hoy solo tienes que descansar, tomar agua y dejar que te mime, aunque sea desde lejos. Ven aquí, miamol. Déjame mimarte.\n\nTe amo muchísimo, mi stinky favorita. Mañana va a ser mejor, y si no, lo enfrentamos juntos.\n\nSyppex",
      after: "Puki,\n\nSi abriste esta carta, es porque hoy fue demasiado. Está bien. No tienes que explicarme nada ni tener una buena razón; a veces los días simplemente pesan.\n\nHaz esto por mí: deja el celular un rato (después de leer esto, obvio), toma agua, ponte algo cómodo y busca a uno de los niños para abrazarlo. Si es ÑOYD, mejor, que es el más esponjoso.\n\nLo que no salió hoy puede esperar a mañana. Tú no tienes que poder con todo, y menos sola. Cuando quieras, escríbeme aunque sea un :c y yo entiendo.\n\nTe amo, miamol. Huggies infinitos, como siempre.\n\nSyppex" },
    { when: "no puedas dormir", text: "¿Eepy pero no te puedes dormir? Cierra los ojos e imagina que estoy ahí. ÑOYD en tus pies, Miru encima mío, y yo contándote la historia más aburrida del mundo hasta que te quedes dormida. Sleep well, puki. Voy a estar aquí cuando despiertes." },
    { when: "estés enojada conmigo", text: "Ok, probably me lo merezco. I'm sorry, y lo digo en serio, aunque esté siendo muy Giyu y no diga mucho. Tómate tu tiempo para estar enojada, el tsun tsun está permitido. Cuando estés lista, aquí voy a estar con un abrazo y probablemente un chiste malo." },
    { when: "me extrañes", text: "I miss you too, más de lo que crees. Pon nuestra canción, mira nuestra primera pfp de pareja y acuérdate de que cada día que pasa es un día menos para vernos. I really want to stay at your house." },
    { when: "lo de la visa sea demasiado", text: "Puki, sé cuánto querías esto. Lo planeaste, te esforzaste, hiciste todo bien, y después cambiaron las reglas otra vez como si nada de eso importara. Está bien estar enojada. Está bien estar triste. Está bien no saber qué hacer ahora.\n\nPor favor no pienses que esto pasó porque no fuiste suficiente o porque no lo intentaste lo bastante. Lo hiciste. Esto es un sistema que le mueve el piso a la gente, y te tocó estar parada ahí. Eso no es tu culpa.\n\nNo tienes que tener todo el plan resuelto esta noche. Esta noche solo tienes que respirar, comer algo y dejar que te cuide un poquito. Mañana vemos las opciones juntos, paso a paso, y si se cierra una puerta buscamos la siguiente. Si hace falta, leo contigo cada página y cada regla.\n\nSé que ahora sientes que tu futuro está en manos de otros. Pero hay una parte que no: yo. No me voy a ninguna parte. Ninguna regla, ninguna visa y ningún país pueden cambiar eso. Cinco años, una rebelión, tres gatos y mil pfps de pareja. Ya demostramos que podemos con todo.\n\nPase lo que pase, you'll never face it alone. Estoy aquí, tomándote la mano desde donde sea que esté. Te amo, y estoy muy orgulloso de ti por seguir luchando." },
    { when: "te sientas enferma", text: "Puki :c odio cuando te sientes mal y no puedo estar ahí para cuidarte. Así que este es el plan: agua, algo calentito para comer, una mantita y descansar. Hoy nada de hacerte la fuerte ni de hacerlo todo sola. Si necesitas ir al médico, ve, y después me cuentas para saber que estás bien. Igual voy a estar pendiente de ti. Ven aquí miamol, déjame mimarte, aunque sea desde lejos. Huggies infinitos hasta que te sientas mejor." },
    { when: "tengas un mal día", text: "Bad days le pasan a cualquiera, hasta a los Hashira. Ve al Hall of Shame y mira el panda. Después vuelve y acuérdate de que alguien al otro lado de la pantalla piensa que eres lo mejor del mundo. Ese soy yo. Soy yo." },
    { when: "sientas que te ignoro", text: "STOP IGNORING ME, sí, te escucho. Te prometo que nunca te ignoro, solo escribo lento. WAWA. Me importas más que cualquier otra cosa en mi pantalla." },
    { when: "necesites reírte", text: "Ve al Hall of Shame y mira el pez. blub blub blub. Después el panda. Después a ÑOYD en la videollamada. Still not laughing? Llámame y giro como Maxwell hasta que te rías." },
    { when: "pases la Final Selection", secret: true, text: "Sabes todo sobre nosotros. Obvio, you were there for all of it. Tu premio: un abrazo que nunca vence, canjeable cuando quieras y donde quieras. Te amo, puki." },
  ],

  // ---------- THE KIDS VISIT (they walk across the screen now and then) ----------
  kidNotes: {
    "Gato Chico": ["Gato Chico te ha estado vigilando desde arriba del refri. Aprueba", "Gato Chico dice que en realidad se llama Raven. Nadie le hace caso", "Gato Chico quiere comida. Y amor. Más que nada comida", "Gato Chico está juzgando tu horario de sueño", "blub blub. Hoy Gato Chico cree que es un pez"],
    "Lloyd": ["ÑOYD te extraña", "Lloyd dice que su mamá es la mejor mamá", "ÑOYD quiere salir en la videollamada otra vez", "Lloyd se sentó en el teclado. Sorry", "Lloyd dice que mamá está stinky. Con cariño"],
    "Miru": ["Miru dice que te vayas a dormir", "Miru se durmió encima de papá otra vez. Send help", "Miru quiere que vengas de visita", "Miru te trae un abrazo (y pelos)", "Miru también quiere huggies"],
  },

  // ---------- NOTE OF THE DAY (a different one every day) ----------
  dailyNotes: [
    "Good morning, puki. O good night. Da igual, te amo",
    "Toma agua. Órdenes de Shinobu",
    "Lo estás haciendo mejor de lo que crees",
    "Recordatorio: eres mi notificación favorita",
    "Hoy es buen día para una mini rebelión. Chiquita nomás",
    "Si estás cansada, descansa. El mundo puede esperar, yo también",
    "Estoy orgulloso de ti. Por todo, pero sobre todo por no rendirte",
    "En este momento, Lloyd está pensando en ti",
    "Haces que hasta los días aburridos se sientan como un episodio que quiero volver a ver",
    "Come algo rico hoy. You deserve it",
    "Tú + yo > todos los ships de este altar",
    "Gracias por existir. En serio",
    "Si hoy pesa, déjalo un rato y ven a hablarme",
    "Eres cute. Esa es la nota. Eso es todo",
    "Shinobu sonríe cuando está enojada. Tú sonríes y se me olvida qué día es",
    "Cinco años y todavía me emociono cuando me escribes",
    "Respira hondo. Inhala, exhala. Ok, now go be amazing",
    "Tienes permiso para un día flojo. Eepy is valid",
    "Miru dice hola. Gato Chico no dice nada, está ocupado",
    "Empezaría otra rebelión por ti. Sorry Baxth",
    "Anda a ver el pez al Hall of Shame. blub blub. De nada",
    "Pase lo que pase hoy, me sigues teniendo",
    "Tú eres la gigantic angry wife y yo el little guy más feliz",
    "Tu risa es mi sonido favorito. La canción de Maxwell va segunda",
    "Los pasos chiquitos también cuentan. Todos",
    "I really want to stay at your house",
    "Ara ara, alguien está revisando el altar otra vez. I love that",
    "Eres fuerte, pero no siempre tienes que serlo. I've got you",
    "Misión de hoy: ser buena contigo misma",
    "Te amo más que ayer. Menos que mañana",
    "Hoy tienes huggies ilimitados. Sin límite. /huggies",
    "hallo puki. ¿Tomaste agua hoy? :c",
    "Stinky, pero mía",
    "blub blub blub. Así se dice te extraño en pez",
    "Si hoy se siente demasiado, ven aquí miamol. Déjame mimarte un poquito",
  ],

  // ---------- CASO CERRADO: POOKIE VS SYPPEX ----------
  cases: [
    { title: "Pookie vs Syppex", subject: "El caso de la hora de dormir", charge: "El acusado dijo que se iba a dormir a las 12. A las 3 seguía conectado.", defense: "Su señoría, estaba pensando en ella. No es mi culpa.", verdict: "CULPABLE", sentence: "Dormir a la hora por una semana entera, y mandar un mensaje de buenas noches cada noche." },
    { title: "Pookie vs Syppex", subject: "Dejada en visto", charge: "El acusado dejó a la demandante en visto cuatro minutos enteros. Ella tuvo que escribir STOP IGNORING ME tres veces.", defense: "Estaba en el baño, su señoría.", verdict: "CULPABLE", sentence: "Contestar cada STOP IGNORING ME en menos de diez segundos, por el resto de su vida." },
    { title: "Syppex vs Pookie", subject: "El corazón robado", charge: "La acusada le robó el corazón al demandante en el server de Baxth en 2021 y nunca se lo devolvió.", defense: "Pookie: Me lo quedo.", verdict: "INOCENTE", free: true, sentence: "El corazón fue entregado por voluntad propia. Se lo puede quedar para siempre." },
  ],

  // ---------- BUTTERFLY CATCH (mini game) ----------
  game: {
    seconds: 30,
    goal: 20,
    win: "Las atrapaste todas, igual que me atrapaste a mí en 2021. Tu premio: te debo una movie night, tú eliges la peli. Sin quejas.",
  },

  // ---------- WAKEUP SECRET ----------
  // Typing WAKEUP anywhere on the site (or, on phones, tapping the butterfly at the very bottom) opens this.
  wakeup: {
    herName: "Mewtrelle", herPfp: "couples/hutao.webp",
    myName: "Syppex", myPfp: "couples/zhongli.webp",
    spam: ["WAKEUP", "I want huggies", ":c", "POOKIE", "WAWA", "STOP IGNORING ME"],
    reply: "hallo puki. /huggies",
    message: "Encontraste el secreto. Obvio, si me has escrito WAKEUP como mil veces. Here's the truth: cada uno de esos me alegró el día. Hasta los de las 7 de la mañana. Sigue despertándome por el resto de nuestras vidas, ¿ok? Te amo, puki.",
  },

  // ---------- THE BIG SURPRISE (Maxwell, love letter, Hashira scroll) ----------
  // The date you started dating (YYYY-MM-DD). Leave "" to hide the day counter.
  togetherSince: "2021-07-25",

  // Maxwell's song (audio/maxwell.mp3). If the file is missing, a synth tune plays instead.
  maxwellSong: "audio/maxwell.mp3",
  // How loud it plays, from 0 to 1. It fades in up to this.
  maxwellVolume: 0.3,

  // WRITE THIS IN YOUR OWN WORDS. It's the most important part of the site.
  letter: {
    greeting: "Hola puki,",
    paragraphs: [
      "Perdón por cada pelea que hemos tenido, y por todas las noches que me quedé despierto hasta tarde después de prometerte que me iba a dormir. Sé que no siempre soy fácil.",
      "Pero cada momento a tu lado ha sido lo mejor que me ha pasado en la vida. Cinco años juntos y mi corazón todavía salta cuando aparece tu nombre en mi celular, aunque sea un WAWA random.",
      "Gracias por amarme, por todas nuestras matching pfps, por Miru, Lloyd y Gato Chico, y por ser mi gigantic angry wife.",
      "Y si alguna vez reencarno, te buscaría otra vez y te elegiría otra vez. En todas las vidas, siempre vas a ser tú.",
    ],
    signature: "Yours always, tu Giyu",
  },
  certificate: {
    rank: "Hashira Mariposa de mi Corazón",
    kanji: "蝶柱",
    breathing: [
      "Primera Forma: STOP IGNORING ME (en mayúsculas)",
      "Segunda Forma: Gigantic Angry Wife",
      "Tercera Forma: Mostrarme a ÑOYD en vez de su cara",
      "Cuarta Forma: Ser la mejor mamá de Miru, Lloyd y Gato Chico",
      "Forma Final: Hacer que me enamore de ella otra vez cada día",
    ],
    finale: "Ara ara. Ya es oficial, ahora estás stuck conmigo",
  },
};
