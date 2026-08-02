# 🌿 GreenPlanet

A premium, nature-themed multi-page website built around a 3D mouse-parallax wilderness hero.

### 🔗 Live site — **https://parekhankit26.github.io/GreenPlanet/**

![Vite](https://img.shields.io/badge/Vite-7-646CFF) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4)

## Features

- **3D parallax hero** — 17 layered mountain/fog images that shift on `translateZ` / `rotateY` as the cursor moves, with the title tucked behind the peaks for real depth.
- **Multi-page** — Home, Wonders, Mission and Gallery routes with shared navigation, CTA and footer.
- **GSAP card-fan carousel** — a hand of photo cards that fan out on hover and shuffle through the deck.
- **Motion throughout** — scroll-reveal sections, 3D tilt cards, counters that count up in view, animated funding bars, and a marquee strip.
- **Performance-minded** — hero art self-hosted as resized WebP (3.7 MB total, down from 37 MB of source PNGs), `requestAnimationFrame`-throttled pointer handling, cached layout reads, and a decode-based fade-in.

## Tech stack

| | |
|---|---|
| Build | Vite + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `src/index.css` via `@theme`) |
| Routing | React Router v7 |
| Animation | GSAP + CSS transforms |

## Running it locally

You need [Node.js](https://nodejs.org) 20 or newer. Then, from the project folder:

```bash
npm install
```

```bash
npm run dev
```

That starts the dev server on **http://localhost:5180** and opens it in your browser automatically. Leave that terminal window running while you work — closing it stops the site. Press `Ctrl+C` to stop.

> Nothing loading? Make sure you ran `npm install` first and that you're in the project folder (the one containing `package.json`).

To check the production build:

```bash
npm run build     # type-check and build into dist/
npm run preview   # serve the built site on http://localhost:5180
```

## Project structure

```
public/
  hero/                     optimized WebP parallax layers
  .htaccess                 SPA rewrite for Apache/cPanel hosting
src/
  components/
    site.tsx                navbar, shared CTA, footer, scroll-to-top
    ui/
      wilderness.tsx        3D parallax hero
      card-fan-carousel.tsx GSAP fan carousel
      nature-carousel.tsx   alternative coverflow carousel (unused)
  lib/
    anim.tsx                reveal, tilt, counter, bar, mount-on-view helpers
    utils.ts                cn() class merger
  pages/                    Home, Wonders, Mission, Gallery
```

## Deployment

**GitHub Pages (automatic).** Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to https://parekhankit26.github.io/GreenPlanet/. Nothing to run by hand.

Because project pages are served from a `/GreenPlanet/` subpath, the workflow builds with `VITE_BASE=/GreenPlanet/`; the router and the hero images both read that base at runtime. It also copies `index.html` to `404.html`, since GitHub Pages has no rewrite rules and would otherwise 404 on a direct hit to `/wonders`.

**Any other host.** `npm run build` outputs a static site to `dist/` with base `/`, ready for a root domain. Routing is client-side, so the host must rewrite unknown paths to `index.html` — `public/.htaccess` handles that on Apache/cPanel; add the equivalent SPA fallback on Netlify or Vercel.

## Credits

Photography from [Unsplash](https://unsplash.com). Parallax mountain and fog layers are third-party artwork bundled under `public/hero/`.
