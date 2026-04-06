# Portfolio Website — Anouk Nijenhuis

Static HTML/CSS/JS portfolio site. No frameworks, no build tools, no dependencies.
Custom domain: anoukdesigns.nl

## Local Development

```bash
python3 -m http.server 8000
```

Or just open `index.html` directly. No install step needed.

## File Structure

- `index.html` — single-page site (Hero, About, Experience, Skills & Tools, Footer/Contact)
- `styles.css` — all styles, responsive breakpoints at 1024px and 768px
- `script.js` — navbar behavior, mobile menu, smooth scroll, parallax, scroll-reveal animations
- `Pictures/` — image assets
- `CV/` — downloadable resume PDF

## Design System

- **Fonts**: Cormorant Garamond (headings), Poppins (body) — Google Fonts
- **Colors**: warm neutrals — `#2a2520` text, `#fefdfb` background, `#9a8e86` muted, `#d4c5b9` accents

## Testing

Use Playwright MCP to test. Permissions are pre-configured in `.claude/settings.local.json`.

```bash
python3 -m http.server 8000
```

Viewport sizes: mobile 375x812, tablet 768x1024, desktop 1280x800.

Note: no `favicon.ico` exists yet (will 404 in console).
