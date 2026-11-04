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
    "Official ranking: you, then Shinobu, then Giyu",
    "Shinobu approves of this relationship",
    "Not even Maomao could figure out how you're this cute",
    "Doggy says hi. He still wants to catch you",
    "You're my favorite episode",
    "Shinobu smiled at you. Either she likes you or you've been poisoned",
    "We're GiyuShino in real life. I'm Giyu, sorry",
    "Loading matching pfp number 1000...",
    "Miru, Lloyd and Gato Chico say hi to their mom",
    "Gato Chico's real name is Raven. Nobody has ever called him that",
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

  // ---------- OUR KIDS (pictures in images/kids/) ----------
  kids: [
    { name: "Gato Chico", aka: "legally Raven", img: "gato-chico.webp", line: "Watches everyone from the top of the furniture. Nobody has called him Raven in years" },
    { name: "Lloyd", aka: "ÑOYD", img: "lloyd.webp", line: "Her son. The fluffiest one, and the one I see on every video call instead of her" },
    { name: "Miru", aka: "my kid", img: "miru.webp", line: "Falls asleep on me while I play. I'm not allowed to move until Miru wakes up" },
  ],

  // ---------- MATCHING SOULS (couples, like our matching pfps) ----------
  couplesBanner: { img: "couples/giyu-shinobu-official.webp", caption: "GiyuShino. Official art, so it's basically canon" },
  couples: [
    { a: { name: "Zhongli", img: "couples/zhongli.webp" }, b: { name: "Hu Tao", img: "couples/hutao.webp" }, from: "Genshin Impact", note: "Our very first matching pfp. Wolf picked it, and that's kind of how we happened" },
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
    { img: "pookie-wakeup.png", caption: "WAKEUP, I MISS U, POOKIE. Four messages in the same minute. Then she asked ChatGPT to draw what talking to her is like, and it was right" },
    { img: "u-gigantic-angry-wife.png", caption: "She sent this with just \"U\". I'm the little one, she's the gigantic angry wife. Correct" },
    { img: "panda-dance.webp", caption: "PANDA" },
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

  // ---------- OUR STORY (timeline) ----------
  // Each chapter can have: img (one picture), pair (two pictures side by side),
  // youtube (a video id), kids: true (shows the cats), today: true (counts the days).
  story: [
    { title: "Baxth's server", text: "We met talking in our friend Baxth's server. Two random people typing in the same chat. I had no idea what was coming." },
    { title: "The rebellion", text: "Then we started a little rebellion against Baxth, just for fun. Don't worry, we're all friends again now. Hi Baxth." },
    { title: "awa", text: "You made awa, our rebellion server, and somehow I was there all the time. That's where we became us." },
    { title: "July 25, 2021", text: "The day you became my girlfriend. Best day of my life, and every day after it is a close second." },
    { title: "Our first matching pfp", pair: ["couples/zhongli.webp", "couples/hutao.webp"], text: "Zhongli and Hu Tao. Our friend Wolf picked them for us, and honestly that's a big part of why we ended up together. Thank you, Wolf. The first of about a thousand matching pfps." },
    { title: "Our song", youtube: "KvMY1uzSC1E", text: "I Really Want to Stay at Your House. Every time it plays, I think of you." },
    { title: "Caso Cerrado, Roblox edition", gavel: true, text: "The night we watched the Caso Cerrado Roblox episode and couldn't breathe from laughing. Still one of my favorite memories with you." },
    { title: "The family grew", kids: true, text: "Gato Chico, Lloyd and Miru. Three kids and none of them listen to us." },
    { title: "Today", today: true, text: "And I'd still choose you. Every single time." },
  ],

  // ---------- FINAL SELECTION (quiz about us) ----------
  // The first option is always the right one (they get shuffled on the page).
  quiz: [
    { q: "Where did we meet?", options: ["Baxth's server", "awa", "A Genshin lobby", "Roblox"] },
    { q: "What was the name of our rebellion server?", options: ["awa", "owo", "uwu", "Baxth"] },
    { q: "When did we become a couple?", options: ["July 25, 2021", "June 25, 2021", "July 25, 2022", "August 25, 2021"] },
    { q: "What was our first matching pfp?", options: ["Zhongli and Hu Tao", "Giyu and Shinobu", "Denji and Reze", "Okarun and Momo"] },
    { q: "Who picked our first matching pfp?", options: ["Wolf", "Me", "You", "Maxwell"] },
    { q: "What's Gato Chico's real name?", options: ["Raven", "Miru", "Lloyd", "Gato Grande"] },
    { q: "What's ÑOYD's actual name?", options: ["Lloyd", "Loid Forger", "Noyd", "Raven"] },
    { q: "What's our song?", options: ["I Really Want to Stay at Your House", "Maxwell the Cat Theme", "Gurenge", "Kick Back"] },
    { q: "What made us laugh until we couldn't breathe?", options: ["The Caso Cerrado Roblox episode", "The panda video", "Maxwell spinning", "Doggy jumpscares"] },
    { q: "What do you yell when I take too long to answer?", options: ["STOP IGNORING ME", "Ara ara", "Tsun tsun", "Good morning"] },
    { q: "Who is the real owner of this altar?", options: ["Shinobu", "You", "Maxwell", "Doggy"] },
  ],
  quizPass: 7, // how many right answers she needs
  quizRight: ["WAWA, correct", "Ara ara, you know us too well", "Correct. Shinobu is impressed", "Yes! Of course you remember"],
  quizWrong: ["Tsun tsun. Wrong", "Ara ara... that's not it", "STOP IGNORING THE RIGHT ANSWER", "Hmm. I'm telling Lloyd"],

  // ---------- OPEN WHEN... (letters) ----------
  // Rewrite any of these in your own words. "secret: true" stays locked until she passes the quiz.
  openWhen: [
    { when: "you can't sleep", text: "Eepy but can't sleep? Close your eyes and imagine I'm there. ÑOYD on your feet, Miru on me, and me telling you the most boring story in the world until you fall asleep. Sleep well, pookie. I'll be here when you wake up, and yes, you can send me ten WAKEUPs in the morning." },
    { when: "you're mad at me", text: "Okay, I probably deserve it. I'm sorry, and I mean it, even if I'm being Giyu about it and not saying much. Take your time being mad. Tsun tsun is allowed. When you're ready, I'll be right here with a hug and probably a bad joke." },
    { when: "you miss me", text: "I miss you too, more than you think. Put on our song, look at our first matching pfp, and remember that every day that passes is one day closer to seeing you. I really want to stay at your house." },
    { when: "the immigration stuff is too much", text: "Pookie, I know how much you wanted this. You planned for it, you worked for it, you did everything right, and then they changed the rules again like none of that mattered. It's okay to be angry. It's okay to be sad. It's okay to not know what to do right now.\n\nPlease don't think this happened because you weren't good enough or didn't try hard enough. You did. This is a system changing the floor under people's feet, and you happened to be standing on it. That's not on you.\n\nYou don't have to figure out the whole plan tonight. Tonight you just have to breathe, eat something, and let me take care of you a little. Tomorrow we can look at the options together, one small step at a time, and if one door closes we'll look for the next one. I'll read every page and every rule with you if I have to.\n\nI know it feels like your future is in someone else's hands right now. But this part isn't: me. I'm not going anywhere. No rule, no visa, no country can change that. Five years, a rebellion, three cats and a thousand matching pfps. We've already proven we can get through anything.\n\nWhatever happens, you'll never face it alone. I'm right here, holding your hand from wherever I am. I love you, and I'm so proud of you for still fighting." },
    { when: "you had a bad day", text: "Bad days happen, even to Hashiras. Go to the Hall of Shame and look at the panda. Then come back and remember that someone on the other side of the screen thinks you're the best thing in the world. That's me. It's me." },
    { when: "you feel ignored", text: "STOP IGNORING ME, I hear you. I promise I'm never ignoring you, I'm just slow at typing. WAWA. You matter more to me than anything else on my screen." },
    { when: "you need a laugh", text: "Caso Cerrado. Roblox. That's it, that's the letter. Okay fine: remember how we couldn't breathe? Go rewatch it, then call me so I can hear you laugh." },
    { when: "you pass the Final Selection", secret: true, text: "You know everything about us. Of course you do, you were there for all of it. Your reward: one hug that never expires, redeemable anytime, anywhere. I love you, pookie." },
  ],

  // ---------- WAKEUP SECRET ----------
  // Typing WAKEUP anywhere on the site (or tapping WAKEUP in the footer) opens this.
  wakeup: {
    herName: "Mewtrelle", herPfp: "couples/hutao.webp",
    myName: "Syppex", myPfp: "couples/zhongli.webp",
    spam: ["WAKEUP", "WAKEUP", "I MISS U", "POOKIE", "WAWA", "STOP IGNORING ME"],
    reply: "I'm awake. I'm always awake for you.",
    message: "You found the secret. Of course you did, you've typed WAKEUP to me a thousand times. Here's the truth: every single one of those made my day. Even the ones at 7 in the morning. Keep waking me up for the rest of our lives, okay? I love you, pookie.",
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
    greeting: "Hi pookie,",
    paragraphs: [
      "I'm sorry for every fight we've had, and for all the nights I stayed up way past my bedtime after promising you I'd go to sleep. I know I'm not always easy.",
      "But every moment I've spent by your side has been the best thing that's ever happened to me. Five years together and my heart still jumps when your name shows up on my phone, even when it's ten WAKEUPs in a row.",
      "Thank you for loving me, for all our matching pfps, for Miru, Lloyd and Gato Chico, and for being my gigantic angry wife.",
      "And if I ever get reincarnated, I'd find you again and choose you again. In every life, it's always going to be you.",
    ],
    signature: "Yours always, your Giyu",
  },
  certificate: {
    rank: "Butterfly Hashira of My Heart",
    kanji: "蝶柱",
    breathing: [
      "First Form: Four WAKEUPs in the same minute",
      "Second Form: Gigantic Angry Wife",
      "Third Form: Showing me ÑOYD instead of her face",
      "Fourth Form: Being the best mom to Miru, Lloyd and Gato Chico",
      "Final Form: Making me fall for her again every day",
    ],
    finale: "Ara ara. It's official, you're stuck with me now",
  },
};
