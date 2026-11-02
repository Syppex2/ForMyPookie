/* =========================================================
   ✿  EDIT THIS FILE TO CUSTOMIZE THE ALTAR  ✿
   - Put character pictures in  images/characters/
   - Put chat screenshots in    images/chat/
   - Then write the file name below (exactly the same, with .png / .jpg)
   If a picture is missing, a pretty placeholder card is shown instead.
   ========================================================= */

const ALTAR = {
  // Her name or nickname (shown at the top)
  herName: "Pookie",

  // Shown on the entrance screen
  welcome: "A sacred altar, made only for you",

  // Signature at the bottom
  from: "From the one who always wakes up for you ♡",

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
    { name: "Denji",  from: "Chainsaw Man",        img: "denji.png",  emoji: "🪚", note: "Woof woof, chainsaw boy" },
    { name: "Doggy",  from: "Piggy (Roblox)",      img: "doggy.png",  emoji: "🐶", note: "Scary but make it cute" },
    { name: "Maomao", from: "The Apothecary Diaries", img: "maomao.png", emoji: "🧪", note: "Will taste-test your poison" },
    { name: "Akaza",  from: "Kimetsu no Yaiba",    img: "akaza.png",  emoji: "👊", note: "Has never once said 'I'm not strong'" },
  ],

  // ---------- THE OFFERINGS (one card per show she watched) ----------
  characters: [
    { name: "Shinobu Kocho", from: "Kimetsu no Yaiba",          img: "shinobu.png",  emoji: "🦋" },
    { name: "Satoru Gojo",   from: "Jujutsu Kaisen",            img: "gojo.png",     emoji: "🕶️" },
    { name: "L",             from: "Death Note",                img: "l.png",        emoji: "🍰" },
    { name: "Pikachu",       from: "Pokémon",                   img: "pikachu.png",  emoji: "⚡" },
    { name: "Rei Ayanami",   from: "Neon Genesis Evangelion",   img: "rei.png",      emoji: "🤖" },
    { name: "Miyo / Muge",   from: "A Whisker Away",            img: "muge.png",     emoji: "🐱" },
    { name: "Okarun & Momo", from: "Dandadan",                  img: "okarun.png",   emoji: "👽" },
    { name: "Anya Forger",   from: "Spy x Family",              img: "anya.png",     emoji: "🥜" },
    { name: "Legoshi",       from: "Beastars",                  img: "legoshi.png",  emoji: "🐺" },
    { name: "Power",         from: "Chainsaw Man",              img: "power.png",    emoji: "🩸" },
    { name: "Nazuna",        from: "Call of the Night",         img: "nazuna.png",   emoji: "🌙" },
    { name: "Marin Kitagawa",from: "My Dress-Up Darling",       img: "marin.png",    emoji: "🧵" },
    { name: "Platelet",      from: "Cells at Work",             img: "platelet.png", emoji: "🩹" },
    { name: "Red Blood Cell",from: "Cells at Work: Code Black", img: "rbc.png",      emoji: "🫀" },
    { name: "Yumeko Jabami", from: "Kakegurui",                 img: "yumeko.png",   emoji: "🎲" },
    { name: "Mary Saotome",  from: "Kakegurui Twin",            img: "mary.png",     emoji: "🃏" },
    { name: "Nagatoro",      from: "Don't Toy with Me, Miss Nagatoro", img: "nagatoro.png", emoji: "😼" },
    { name: "Lucius",        from: "Thermae Romae",             img: "lucius.png",   emoji: "🛁" },
    { name: "Tatsu",         from: "The Way of the Househusband", img: "tatsu.png",  emoji: "🍳" },
    { name: "Senpai",        from: "Magical Sempai",            img: "senpai.png",   emoji: "🎩" },
    { name: "Ju-gyeong",     from: "True Beauty",               img: "jugyeong.png", emoji: "💄" },
    { name: "Sakura",        from: "I Want to Eat Your Pancreas", img: "sakura.png", emoji: "🌸" },
    { name: "Lucy",          from: "Cyberpunk: Edgerunners",    img: "lucy.png",     emoji: "🌕" },
    { name: "Shoko",         from: "A Silent Voice",            img: "shoko.png",    emoji: "🤟" },
    { name: "Ayumu",         from: "Japan Sinks: 2020",         img: "ayumu.png",    emoji: "🏃‍♀️" },
    { name: "Hinata",        from: "Haikyuu!!",                 img: "hinata.png",   emoji: "🏐" },
    { name: "Levi",          from: "Attack on Titan",           img: "levi.png",     emoji: "🗡️" },
  ],

  // ---------- HALL OF SHAME (with love) — her chat screenshots ----------
  chats: [
    { img: "pookie-wakeup.png", caption: "Exhibit A: 'WAKEUP' 'I MISS U' — 4 messages in 0 seconds. Then asked ChatGPT to draw what talking to her is like. It was accurate." },
    // { img: "another-one.png", caption: "Exhibit B: ..." },
  ],
};
