# VAgent website

Company website for **VAgent**, live at https://vagent.online.

## How it works
- Plain static site. No framework, no build step, no npm.
- Pages (root): `index.html`, `services.html`, `work.html`, `pricing.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`, `404.html`.
- Shared styles: `assets/css/styles.css` (design tokens at the top). Shared JS: `assets/js/main.js` (mobile menu, work filters, contact + newsletter forms; `CONTACT_EMAIL` set at the top).
- Images: `assets/images/`. Original Google Stitch export kept for reference in `design/stitch-export/`.
- Header and footer are repeated in every page: when you change the nav or footer, update all pages.
- Hosted free on **Cloudflare Pages**, connected to this GitHub repo.
- **Every push to `main` deploys to production automatically** (live about 1 minute later). Treat a push to `main` as a release.

## Brand
- Logo: `logo.png` (teal rounded square, dark "V" with a dot). Use it as the logo everywhere.
- Brand teal: `#2EE6C5` (used as `theme-color`).
- Favicons made from `logo.png`: `favicon.ico` (16/32/48), `favicon-32x32.png`, `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`.
  To regenerate after a logo change, use `sips -z <size> <size> logo.png --out <file>` (macOS built-in). Pack `favicon.ico` from the 16/32/48 PNGs with a short Python script.

## Rules
- Keep changes small. No frameworks or new dependencies unless asked.
- Test by opening `index.html` in a browser before pushing to `main`.
