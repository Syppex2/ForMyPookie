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
  ],

  // ---------- THE GODS OF THE ALTAR (the main favorites) ----------
  // These show bigger, in the center of the altar.
  favorites: [
    { name: "Denji",  from: "Chainsaw Man",        img: "denji.png",  emoji: "🪚", note: "Woof woof, chainsaw boy", ani: "Chainsaw Man", match: "Denji" },
    { name: "Doggy",  from: "Piggy (Roblox)",      img: "doggy.png",  emoji: "🐶", note: "Scary but make it cute" },
    { name: "Maomao", from: "The Apothecary Diaries", img: "maomao.png", emoji: "🧪", note: "Will taste-test your poison", ani: "Kusuriya no Hitorigoto", match: "Maomao" },
    { name: "Akaza",  from: "Kimetsu no Yaiba",    img: "akaza.png",  emoji: "👊", note: "Has never once said 'I'm not strong'", ani: "Kimetsu no Yaiba: Mugen Ressha-hen", match: "Akaza" },
  ],

  // ---------- THE OFFERINGS (one card per show she watched) ----------
  characters: [
    { name: "Shinobu Kocho", from: "Kimetsu no Yaiba",          img: "shinobu.png",  emoji: "🦋", ani: "Kimetsu no Yaiba", match: "Shinobu" },
    { name: "Satoru Gojo",   from: "Jujutsu Kaisen",            img: "gojo.png",     emoji: "🕶️", ani: "Jujutsu Kaisen", match: "Satoru" },
    { name: "L",             from: "Death Note",                img: "l.png",        emoji: "🍰", ani: "Death Note", match: "L" },
    { name: "Pikachu",       from: "Pokémon",                   img: "pikachu.png",  emoji: "⚡", ani: "Pokemon", match: "Pikachu" },
    { name: "Rei Ayanami",   from: "Neon Genesis Evangelion",   img: "rei.png",      emoji: "🤖", ani: "Neon Genesis Evangelion", match: "Rei" },
    { name: "Miyo / Muge",   from: "A Whisker Away",            img: "muge.png",     emoji: "🐱", ani: "Nakitai Watashi wa Neko wo Kaburu", match: "Miyo" },
    { name: "Okarun & Momo", from: "Dandadan",                  img: "okarun.png",   emoji: "👽", ani: "Dandadan", match: "Ken" },
    { name: "Anya Forger",   from: "Spy x Family",              img: "anya.png",     emoji: "🥜", ani: "SPY×FAMILY", match: "Anya" },
    { name: "Legoshi",       from: "Beastars",                  img: "legoshi.png",  emoji: "🐺", ani: "Beastars", match: "Legoshi" },
    { name: "Power",         from: "Chainsaw Man",              img: "power.png",    emoji: "🩸", ani: "Chainsaw Man", match: "Power" },
    { name: "Nazuna",        from: "Call of the Night",         img: "nazuna.png",   emoji: "🌙", ani: "Yofukashi no Uta", match: "Nazuna" },
    { name: "Marin Kitagawa",from: "My Dress-Up Darling",       img: "marin.png",    emoji: "🧵", ani: "Sono Bisque Doll wa Koi wo Suru", match: "Marin" },
    { name: "Platelet",      from: "Cells at Work",             img: "platelet.png", emoji: "🩹", ani: "Hataraku Saibou", match: "Platelet" },
    { name: "Red Blood Cell",from: "Cells at Work: Code Black", img: "rbc.png",      emoji: "🫀", ani: "Hataraku Saibou BLACK", match: "Red" },
    { name: "Yumeko Jabami", from: "Kakegurui",                 img: "yumeko.png",   emoji: "🎲", ani: "Kakegurui", match: "Yumeko" },
    { name: "Mary Saotome",  from: "Kakegurui Twin",            img: "mary.png",     emoji: "🃏", ani: "Kakegurui Twin", match: "Mary" },
    { name: "Nagatoro",      from: "Don't Toy with Me, Miss Nagatoro", img: "nagatoro.png", emoji: "😼", ani: "Ijiranaide, Nagatoro-san", match: "Nagatoro" },
    { name: "Lucius",        from: "Thermae Romae",             img: "lucius.png",   emoji: "🛁", ani: "Thermae Romae", match: "Lucius" },
    { name: "Tatsu",         from: "The Way of the Househusband", img: "tatsu.png",  emoji: "🍳", ani: "Gokushufudou", match: "Tatsu" },
    { name: "Senpai",        from: "Magical Sempai",            img: "senpai.png",   emoji: "🎩", ani: "Tejina-senpai", match: "Senpai" },
    { name: "Ju-gyeong",     from: "True Beauty",               img: "jugyeong.png", emoji: "💄", ani: "True Beauty", match: "Ju" },
    { name: "Sakura",        from: "I Want to Eat Your Pancreas", img: "sakura.png", emoji: "🌸", ani: "Kimi no Suizou wo Tabetai", match: "Sakura" },
    { name: "Lucy",          from: "Cyberpunk: Edgerunners",    img: "lucy.png",     emoji: "🌕", ani: "Cyberpunk: Edgerunners", match: "Lucy" },
    { name: "Shoko",         from: "A Silent Voice",            img: "shoko.png",    emoji: "🤟", ani: "Koe no Katachi", match: "Shouko" },
    { name: "Ayumu",         from: "Japan Sinks: 2020",         img: "ayumu.png",    emoji: "🏃‍♀️", ani: "Nihon Chinbotsu 2020", match: "Ayumu" },
    { name: "Hinata",        from: "Haikyuu!!",                 img: "hinata.png",   emoji: "🏐", ani: "Haikyuu!!", match: "Shouyou" },
    { name: "Levi",          from: "Attack on Titan",           img: "levi.png",     emoji: "🗡️", ani: "Shingeki no Kyojin", match: "Levi" },
  ],

  // ---------- HALL OF SHAME (with love) — her chat screenshots ----------
  chats: [
    { img: "pookie-wakeup.png", caption: "Exhibit A: 'WAKEUP' 'I MISS U' — 4 messages in 0 seconds. Then asked ChatGPT to draw what talking to her is like. It was accurate." },
    // { img: "another-one.png", caption: "Exhibit B: ..." },
  ],
};
