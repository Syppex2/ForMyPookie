/* =========================================================
   ✿  EDIT THIS FILE TO CUSTOMIZE THE ALTAR  ✿
   - Put character pictures in  images/characters/
   - Put chat screenshots in    images/chat/
   - Then write the file name below (exactly the same, with .png / .jpg)
   Pictures are chosen in this order:
     1) your own file in images/characters/   (always wins)
     2) official art fetched automatically from AniList (using ani + match)
     3) a cute emoji placeholder
   ani   = the show's name to search on anilist.co
   match = part of the character's name as AniList writes it
   ========================================================= */

const ALTAR = {
  // Her name or nickname (shown at the top)
  herName: "Pookie",

  // Shown on the entrance screen
  welcome: "A sacred altar, made only for you",

  // Signature at the bottom
  from: "From the one who always wakes up for you ♡",

  // Shown when ALL three candles are lit at the same time
  allCandlesMessage: "Three candles lit... the altar grants your wish: me. Forever. 🦋💗",

  // Random little messages that appear when she lights a candle
  candleMessages: [
    "WAKEUP. I miss you too 🦋",
    "Official ranking: you > Denji > Akaza",
    "Shinobu approves of this relationship",
    "Even Maomao couldn't solve how cute you are",
    "Pookie detected. Heart rate: illegal.",
    "Doggy says hi (he still wants to catch you)",
    "You are my favorite episode",
    "Shinobu smiled at you. That means you're either loved or poisoned.",
    "We are the GiyuShino of real life (I'm Giyu, sorry)",
    "Matching pfp #1000 loading...",
  ],

  // ---------- THE GODS OF THE ALTAR (the main favorites) ----------
  // These show bigger, in the center of the altar.
  favorites: [
    { name: "Denji",  from: "Chainsaw Man",        img: "denji.png",  emoji: "🪚", note: "Woof woof, chainsaw boy", ani: "Chainsaw Man", match: "Denji" },
    { name: "Doggy",  from: "Piggy (Roblox)",      img: "doggy.webp",  emoji: "🐶", note: "Scary but make it cute" },
    { name: "Maomao", from: "The Apothecary Diaries", img: "maomao.png", emoji: "🧪", note: "Will taste-test your poison", ani: "Kusuriya no Hitorigoto", match: "Maomao" },
    { name: "Akaza",  from: "Kimetsu no Yaiba",    img: "akaza.png",  emoji: "👊", note: "Has never once said 'I'm not strong'", ani: "Kimetsu no Yaiba: Mugen Ressha-hen", match: "Akaza" },
  ],

  // ---------- THE GODDESS: SHINOBU (center of the shrine) ----------
  // Pictures in images/shinobu/ — they slide one after another. Add or remove freely.
  shinobu: {
    images: [
      "shinobu-1.webp", "shinobu-2.webp", "shinobu-3.webp", "shinobu-4.webp", "shinobu-5.webp",
      "shinobu-6.webp", "shinobu-7.webp", "shinobu-8.webp", "shinobu-9.webp",
    ],
    // Little lines that change with each picture
    quotes: [
      "Ara ara~ wouldn't it be nice if we could all get along?",
      "Insect Hashira · Kocho Shinobu · 蟲柱 胡蝶しのぶ",
      "Smiling politely while being the most dangerous person in the room. Just like you.",
      "Too small to cut a demon's head? Then poison. Very her. Very you.",
      "The butterfly that rules this altar 🦋",
    ],
  },

  // ---------- MATCHING SOULS (couples, like our matching pfps) ----------
  // Pictures in images/couples/ (or ../characters/ to reuse one from there)
  couplesBanner: { img: "couples/giyu-shinobu-official.webp", caption: "GiyuShino: official art, official canon (in our hearts)" },
  couples: [
    { a: { name: "Giyu",    img: "couples/giyu.png" },    b: { name: "Shinobu", img: "characters/shinobu.png" }, from: "Kimetsu no Yaiba", note: "He's not hated. She just bullies him. Relatable." },
    { a: { name: "Obanai",  img: "couples/obanai.jpg" },  b: { name: "Mitsuri", img: "couples/mitsuri.png" },    from: "Kimetsu no Yaiba", note: "Wrote her letters. Peak romance." },
    { a: { name: "Sanemi",  img: "couples/sanemi.png" },  b: { name: "Kanae",   img: "couples/kanae.png" },      from: "Kimetsu no Yaiba", note: "Grumpy x sunshine" },
    { a: { name: "Tanjiro", img: "couples/tanjiro.png" }, b: { name: "Kanao",   img: "couples/kanao.png" },      from: "Kimetsu no Yaiba", note: "Decided by a coin flip. Fate." },
    { a: { name: "Zenitsu", img: "couples/zenitsu.png" }, b: { name: "Nezuko",  img: "couples/nezuko.png" },     from: "Kimetsu no Yaiba", note: "He finally won" },
    { a: { name: "Akaza",   img: "characters/akaza.png" },b: { name: "Koyuki",  img: "couples/koyuki.png" },     from: "Kimetsu no Yaiba", note: "Don't talk to me about this one 😭" },
    { a: { name: "L",       img: "characters/l.png" },    b: { name: "Misa",    img: "couples/misa.png" },       from: "Death Note", note: "Sweets & chaos" },
    { a: { name: "Okarun",  img: "characters/okarun.png" },b:{ name: "Momo",    img: "couples/momo.png" },       from: "Dandadan", note: "Ken Takakura (the real one)" },
    { a: { name: "Yuta",    img: "couples/yuta.jpg" },    b: { name: "Maki",    img: "couples/maki.png" },       from: "Jujutsu Kaisen", note: "Strongest duo" },
    { a: { name: "Gojo",    img: "characters/gojo.png" }, b: { name: "Geto",    img: "couples/geto.png" },       from: "Jujutsu Kaisen", note: "The strongest... and his best friend" },
    { a: { name: "Denji",   img: "characters/denji.png" },b: { name: "Reze",    img: "couples/reze.png" },       from: "Chainsaw Man", note: "Should've gone to the café" },
    { a: { name: "David",   img: "couples/david.png" },   b: { name: "Lucy",    img: "characters/lucy.jpg" },    from: "Cyberpunk: Edgerunners", note: "Take me to the moon 🌕" },
  ],

  // ---------- THE OFFERINGS (one card per show she watched) ----------
  characters: [
    { name: "Satoru Gojo",   from: "Jujutsu Kaisen",            img: "gojo.png",     emoji: "🕶️", ani: "Jujutsu Kaisen", match: "Satoru" },
    { name: "L",             from: "Death Note",                img: "l.png",        emoji: "🍰", ani: "Death Note", match: "L" },
    { name: "Pikachu",       from: "Pokémon",                   img: "pikachu.jpg",  emoji: "⚡", ani: "Pokemon", match: "Pikachu" },
    { name: "Rei Ayanami",   from: "Neon Genesis Evangelion",   img: "rei.jpg",      emoji: "🤖", ani: "Neon Genesis Evangelion", match: "Rei" },
    { name: "Miyo / Muge",   from: "A Whisker Away",            img: "muge.jpg",     emoji: "🐱", ani: "Nakitai Watashi wa Neko wo Kaburu", match: "Miyo" },
    { name: "Okarun", from: "Dandadan",                  img: "okarun.png",   emoji: "👽", ani: "Dandadan", match: "Ken" },
    { name: "Anya Forger",   from: "Spy x Family",              img: "anya.png",     emoji: "🥜", ani: "Spy x Family", match: "Anya" },
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

  // ---------- HALL OF SHAME (with love) — her chat screenshots ----------
  chats: [
    { img: "pookie-wakeup.png", caption: "Exhibit A: 'WAKEUP' 'I MISS U' — 4 messages in 0 seconds. Then asked ChatGPT to draw what talking to her is like. It was accurate." },
    { img: "u-gigantic-angry-wife.png", caption: "Exhibit B: She sent this and only wrote 'U'. Yes, I'm the small one gazing lovingly. She's the gigantic angry wife. No notes." },
    { img: "panda-dance.webp", caption: "Exhibit C: Her doing the victory dance after winning an argument (that she started)." },
    { img: "videocall-cat.webp", caption: "Exhibit D: Me: 'let me see you' 🥺 — Her: shows me the cat. Every. Single. Call." },
    { img: "gato-no-da-mas.png", caption: "Exhibit E: Her after studying for 10 minutes. 'gato culiao que no da más' 😭" },
  ],

  // ---------- BUTTERFLY CINEMA (looping animations, in images/gifs/) ----------
  // Each one is a small .mp4 that loops like a GIF (much lighter than a real GIF).
  cinema: [
    { video: "shinobu-victory-2", caption: "\"Oh, did I use too much poison? Silly me.\"" },
    { video: "shinobu-dragonfly", caption: "Insect Breathing · Dance of the Dragonfly: Compound Eye Hexagon" },
    { video: "shinobu-academy",   caption: "Kimetsu Academy Shinobu (school uniform era)" },
    { video: "shinobu-horsefly",  caption: "Insect Breathing · Dance of the Horsefly" },
    { video: "shinobu-victory",   caption: "Leaving the battlefield like a lady" },
    { video: "shinobu-centipede", caption: "Insect Breathing · Dance of the Centipede: Hundred-Legged Zigzag" },
  ],

  // ---------- GIYUSHINO ARCHIVE (canon moments, timeline) ----------
  giyushino: [
    { video: "giyushino-mission",   title: "Always sent on missions together", text: "The Master sends both of them to Mount Natagumo. The Hashira were usually paired up like this. Fate? Fate." },
    { video: "giyushino-victory",   title: "\"If only humans and demons could get along…\"", text: "She says it with a smile. He stands next to her saying nothing, as always. Iconic duo energy." },
    { img: "couples/giyu-shinobu-official.webp", title: "\"That's why everyone dislikes you\"", text: "Giyu blocks her attack to protect Nezuko, and she roasts him: people dislike him because of how he acts. His answer: \"I'm not disliked.\" (He is a little bit.)" },
    { video: "giyushino-victory-2", title: "She wishes he would talk more", text: "She teases him constantly, but she actually wants him to open up. He compliments her hard work and quietly worries about her. Gyomei even noticed the two of them enjoy talking to each other." },
    { img: "shinobu/shinobu-2.webp", title: "He remembers her smile", text: "When the news reaches Giyu, the first thing he remembers is her smiling face. 🦋 (Pass the tissues.)" },
  ],

  // Optional: your favorite GiyuShino doujinshi / fan comics.
  // The section only shows up when this list has something in it.
  // { title: "Name of the doujin", by: "artist or circle", link: "https://...", note: "why we love it" },
  doujinshi: [
  ],

  // ---------- THE BIG SURPRISE (crow → love letter → Hashira ceremony) ----------
  // The date you started dating (YYYY-MM-DD). Leave "" to hide the day counter.
  togetherSince: "",

  // ✍️ WRITE THIS IN YOUR OWN WORDS — it's the most important part of the whole site.
  letter: {
    greeting: "To my favorite butterfly,",
    paragraphs: [
      "I made you an altar because you deserve one. Every character you love, every matching pfp we've worn, every chaotic message you send me at once — it's all here, because all of it is you.",
      "You are loud, dramatic, a little bit poisonous (in the Shinobu way) and the softest person I know. You wake me up with ten 'WAKEUP's and somehow it's my favorite alarm.",
      "Thank you for choosing me, for watching all these shows with me, and for being my gigantic angry wife. I'd stand next to you in silence like Giyu, but I'd never let you fight alone.",
    ],
    signature: "Yours, always — your Giyu ♡",
  },
  certificate: {
    rank: "Butterfly Hashira of My Heart",
    kanji: "蝶柱",
    breathing: [
      "First Form: Four 'WAKEUP' messages in zero seconds",
      "Second Form: Gigantic Angry Wife",
      "Third Form: Showing me the cat instead of her face",
      "Final Form: Making me fall for her again, every day",
    ],
    finale: "Ara ara~ it's official. You're stuck with me now. 🦋",
  },
};
