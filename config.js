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
  welcome: "I made you a little altar",

  // Signature at the bottom
  from: "From the one who always wakes up when you say WAKEUP",

  // Shown when all three candles are lit
  allCandlesMessage: "You lit all three. Your wish is granted: you get me, forever. No refunds.",

  // Random messages that appear when she lights a candle
  candleMessages: [
    "WAKEUP. I miss you too",
    "Official ranking: you, then Denji, then Akaza",
    "Shinobu approves of this relationship",
    "Not even Maomao could figure out how you're this cute",
    "Doggy says hi. He still wants to catch you",
    "You're my favorite episode",
    "Shinobu smiled at you. Either she likes you or you've been poisoned",
    "We're GiyuShino in real life. I'm Giyu, sorry",
    "Loading matching pfp number 1000...",
    "Miru and Lloyd say hi to their mom",
    "Lloyd, also known as ÑOYD, approves of this altar",
    "Miru wants to know when you're coming over",
    "Eepy and in love with Shinobu. I read your bio, I know everything",
  ],

  // ---------- THE CHOSEN ONES (shown big, under Shinobu) ----------
  favorites: [
    { name: "Giyu Tomioka", from: "Kimetsu no Yaiba", img: "../couples/giyu.png", emoji: "🌊", note: "He's not disliked (he is a little)" },
    { name: "Rei Ayanami",  from: "Neon Genesis Evangelion", img: "rei.jpg", emoji: "🤖", note: "On her favorites list since forever", ani: "Neon Genesis Evangelion", match: "Rei" },
    { name: "Denji",  from: "Chainsaw Man",        img: "denji.png",  emoji: "🪚", note: "Woof woof", ani: "Chainsaw Man", match: "Denji" },
    { name: "Doggy",  from: "Piggy (Roblox)",      img: "doggy.webp",  emoji: "🐶", note: "Scary but cute somehow" },
    { name: "Maomao", from: "The Apothecary Diaries", img: "maomao.png", emoji: "🧪", note: "Would drink your poison just to rate it", ani: "Kusuriya no Hitorigoto", match: "Maomao" },
    { name: "Akaza",  from: "Kimetsu no Yaiba",    img: "akaza.png",  emoji: "👊", note: "Still mad about Rengoku. Still on the list", ani: "Kimetsu no Yaiba: Mugen Ressha-hen", match: "Akaza" },
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
      "Ara ara, wouldn't it be nice if we could all get along?",
      "Insect Hashira, Kocho Shinobu. 蟲柱 胡蝶しのぶ",
      "Smiles at you, then poisons you. You do the same thing to me",
      "Too small to cut off a demon's head, so she invented a poison. Legend",
      "The owner of this altar. You're just visiting",
    ],
  },

  // ---------- HER SHELF (from her MyFigureCollection) ----------
  shelf: {
    bio: "i'm eepy and in love with shinobu",
    link: "https://myfigurecollection.net/profile/mew_owo",
    figures: "shelf/figures.webp",
    goods: "shelf/goods.webp",
    caption: "43 figures and counting. I counted 5 Shinobus, 5 Mikus and too many Giyus",
  },

  // ---------- MATCHING SOULS (couples, like our matching pfps) ----------
  couplesBanner: { img: "couples/giyu-shinobu-official.webp", caption: "GiyuShino. Official art, so it's basically canon" },
  couples: [
    { a: { name: "Giyu",    img: "couples/giyu.png" },    b: { name: "Shinobu", img: "characters/shinobu.png" }, from: "Kimetsu no Yaiba", note: "She bullies him and he lets her. Sounds familiar" },
    { a: { name: "Obanai",  img: "couples/obanai.jpg" },  b: { name: "Mitsuri", img: "couples/mitsuri.png" },    from: "Kimetsu no Yaiba", note: "He wrote her letters. I made you a website" },
    { a: { name: "Sanemi",  img: "couples/sanemi.png" },  b: { name: "Kanae",   img: "couples/kanae.png" },      from: "Kimetsu no Yaiba", note: "Grumpy guy, sweet girl" },
    { a: { name: "Tanjiro", img: "couples/tanjiro.png" }, b: { name: "Kanao",   img: "couples/kanao.png" },      from: "Kimetsu no Yaiba", note: "A coin flip decided it" },
    { a: { name: "Zenitsu", img: "couples/zenitsu.png" }, b: { name: "Nezuko",  img: "couples/nezuko.png" },     from: "Kimetsu no Yaiba", note: "He actually won in the end" },
    { a: { name: "Akaza",   img: "characters/akaza.png" },b: { name: "Koyuki",  img: "couples/koyuki.png" },     from: "Kimetsu no Yaiba", note: "We don't talk about this one" },
    { a: { name: "L",       img: "characters/l.png" },    b: { name: "Misa",    img: "couples/misa.png" },       from: "Death Note", note: "Cake and chaos" },
    { a: { name: "Okarun",  img: "characters/okarun.png" },b:{ name: "Momo",    img: "couples/momo.png" },       from: "Dandadan", note: "She likes Ken Takakura. The real one" },
    { a: { name: "Yuta",    img: "couples/yuta.jpg" },    b: { name: "Maki",    img: "couples/maki.png" },       from: "Jujutsu Kaisen", note: "Both of them could beat me up" },
    { a: { name: "Gojo",    img: "characters/gojo.png" }, b: { name: "Geto",    img: "couples/geto.png" },       from: "Jujutsu Kaisen", note: "Best friends. Sure" },
    { a: { name: "Denji",   img: "characters/denji.png" },b: { name: "Reze",    img: "couples/reze.png" },       from: "Chainsaw Man", note: "He should have gone to the café" },
    { a: { name: "David",   img: "couples/david.png" },   b: { name: "Lucy",    img: "characters/lucy.jpg" },    from: "Cyberpunk: Edgerunners", note: "I'd take you to the moon too" },
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

  // ---------- HALL OF SHAME (her chat screenshots) ----------
  chats: [
    { img: "pookie-wakeup.png", caption: "WAKEUP, I MISS U, POOKIE. Four messages in the same minute. Then she asked ChatGPT to draw what talking to her is like, and it was right" },
    { img: "u-gigantic-angry-wife.png", caption: "She sent this with just \"U\". I'm the little one, she's the gigantic angry wife. Correct" },
    { img: "panda-dance.webp", caption: "Her after winning an argument she started" },
    { img: "videocall-cat.webp", caption: "She showing me our son, ÑOYD" },
    { img: "gato-no-da-mas.png", caption: "Her after studying for ten minutes. Gato culiao que no da más" },
  ],

  // ---------- BUTTERFLY CINEMA (looping clips in images/gifs/) ----------
  cinema: [
    { video: "shinobu-victory-2", caption: "\"Oh, did I use too much poison? Silly me.\"" },
    { video: "shinobu-dragonfly", caption: "Insect Breathing, Dance of the Dragonfly: Compound Eye Hexagon" },
    { video: "shinobu-academy",   caption: "Kimetsu Gakuen Shinobu" },
    { video: "shinobu-horsefly",  caption: "Insect Breathing, Dance of the Horsefly" },
    { video: "shinobu-victory",   caption: "Walking away like nothing happened" },
    { video: "shinobu-centipede", caption: "Insect Breathing, Dance of the Centipede: Hundred-Legged Zigzag" },
  ],

  // ---------- GIYUSHINO ARCHIVE (canon moments) ----------
  giyushino: [
    { video: "giyushino-mission",   title: "Always sent on missions together", text: "Oyakata-sama sends both of them to Mount Natagumo. They got paired up a lot." },
    { video: "giyushino-victory",   title: "\"If only humans and demons could get along\"", text: "She says it smiling. He stands next to her and says nothing, like always." },
    { img: "couples/giyu-shinobu-official.webp", title: "\"That's why everyone dislikes you\"", text: "Giyu blocks her attack to protect Nezuko, so she tells him that's why people don't like him. His answer: \"I'm not disliked.\" He is, a little." },
    { video: "giyushino-victory-2", title: "She wants him to talk more", text: "She teases him all the time, but she really wants him to open up. He tells her she works hard and worries about her without saying it. Even Gyomei noticed they like talking to each other." },
    { img: "shinobu/shinobu-2.webp", title: "He remembers her smile", text: "When Giyu hears the news, the first thing he thinks of is her smiling. Okay I'm not crying." },
  ],

  // Optional: your favorite GiyuShino doujinshi.
  // The section only shows up when this list has something in it.
  // { title: "Name of the doujin", by: "artist or circle", link: "https://...", note: "why we like it" },
  doujinshi: [
  ],

  // ---------- THE BIG SURPRISE (Maxwell, love letter, Hashira scroll) ----------
  // The date you started dating (YYYY-MM-DD). Leave "" to hide the day counter.
  togetherSince: "",

  // Maxwell's song. Put the mp3 at audio/maxwell.mp3 (see README).
  // If the file isn't there, a little synth tune plays instead.
  maxwellSong: "audio/maxwell.mp3",

  // WRITE THIS IN YOUR OWN WORDS. It's the most important part of the site.
  letter: {
    greeting: "Hi pookie,",
    paragraphs: [
      "I made you an altar because you deserve one. Everything you like is here, the characters, our matching pfps, and the screenshots of you being dramatic in my DMs.",
      "You're loud and dramatic and a little poisonous like Shinobu, and you're also the softest person I know. You wake me up with ten WAKEUPs and it's still my favorite alarm.",
      "Thank you for picking me, for watching all of this with me, and for being my gigantic angry wife. I'll be your Giyu, quiet and always next to you.",
    ],
    signature: "Yours, your Giyu",
  },
  certificate: {
    rank: "Butterfly Hashira of My Heart",
    kanji: "蝶柱",
    breathing: [
      "First Form: Four WAKEUPs in the same minute",
      "Second Form: Gigantic Angry Wife",
      "Third Form: Showing me ÑOYD instead of her face",
      "Fourth Form: Being the best mom to Miru and Lloyd",
      "Final Form: Making me fall for her again every day",
    ],
    finale: "Ara ara. It's official, you're stuck with me now",
  },
};
