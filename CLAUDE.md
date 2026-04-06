# Portfolio Website — Anouk Nijenhuis

Static HTML/CSS/JS portfolio site. No frameworks, no build tools, no dependencies.

- Live: https://rustamav.github.io/anouk-website/
- Repo: https://github.com/rustamav/anouk-website

## Local Development

```bash
python3 -m http.server 8000
```

## Design System

- **Fonts**: Cormorant Garamond (headings), Poppins (body) — Google Fonts
- **Colors**: warm neutrals — `#2a2520` text, `#fefdfb` background, `#9a8e86` muted, `#d4c5b9` accents

## Important Notes

- Hosted on GitHub Pages from `main` branch — file paths are case-sensitive (Linux), so always use lowercase `pictures/` not `Pictures/`
- No `favicon.ico` yet
- Do not add co-author lines to commit messages
- Use Playwright MCP for testing (permissions pre-configured in `.claude/settings.local.json`)
