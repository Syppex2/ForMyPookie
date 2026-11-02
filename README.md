# 🦋 The Butterfly Altar

A Shinobu-themed (Kimetsu no Yaiba) altar website for my favorite person.

## Files

| File / folder         | What it is                                                    |
|-----------------------|---------------------------------------------------------------|
| `config.js`           | **Edit this one.** Her name, characters, captions, candle messages |
| `images/characters/`  | Character pictures (`denji.png`, `akaza.png`, ...)            |
| `images/chat/`        | Chat screenshots for the "Hall of Shame"                      |
| `index.html`, `style.css`, `script.js` | The site itself                              |
| `sfx.js`              | Sound effects + music box (made in code, no audio files)      |

## Add a picture

1. Save the image into `images/characters/` (or `images/chat/`).
2. Name it exactly like the `img:` in `config.js` (e.g. `denji.png`), **or** change the `img:` to match your file.
3. Pictures are chosen in this order: your own file → official art fetched from AniList
   (uses `ani` + `match` in `config.js`) → a cute emoji placeholder. Nothing breaks.
   If AniList picks the wrong character, just drop your own picture in, it always wins.

## Secret things she can find
- Click the big butterfly on the entrance 5 times.
- Light all three candles.
- Click any empty spot → butterflies.

## Preview on your computer

Double-click `index.html`. It opens in your browser.

## Put it online (free, GitHub Pages)

1. Create a new repository on https://github.com/new (for example `butterfly-altar`), Public.
2. Upload these files (drag & drop on the repo page → *Add file → Upload files*), or push with git.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. After about a minute your site is at `https://YOUR-USERNAME.github.io/butterfly-altar/`.

Every time you change something and commit, the site updates by itself.
