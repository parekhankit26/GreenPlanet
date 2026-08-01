# 🌿 GreenPlanet

A premium, nature-themed multi-page website built around a 3D mouse-parallax wilderness hero.

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

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5180.

```bash
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
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

The build outputs a static site to `dist/`. Because routing is client-side, the host must rewrite unknown paths to `index.html` or deep links will 404 — `public/.htaccess` handles this on Apache/cPanel. On Netlify or Vercel, add the equivalent SPA fallback rule.

## Credits

Photography from [Unsplash](https://unsplash.com). Parallax mountain and fog layers are third-party artwork bundled under `public/hero/`.
