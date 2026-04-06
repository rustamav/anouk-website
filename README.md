# Anouk Nijenhuis — Personal Portfolio

A clean, minimal portfolio website for Anouk Nijenhuis — HR Professional specializing in People & Culture and Brand & Communication.

Live at [anoukdesigns.nl](https://anoukdesigns.nl)

## Features

- Single-page scrolling design with smooth anchor navigation
- Fully responsive (mobile hamburger menu, tablet, desktop)
- Scroll-triggered animations and parallax effects
- No frameworks or dependencies — vanilla HTML, CSS, and JavaScript
- Downloadable CV

## Local Development

No install step needed. Just start a local server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project Structure

```
index.html        — Single-page site (Hero, About, Experience, Skills & Tools, Contact)
styles.css        — All styles including responsive breakpoints (1024px, 768px)
script.js         — Navbar, mobile menu, smooth scroll, parallax, scroll animations
Pictures/         — Image assets (hero photo, about section photo)
CV/               — Resume PDF (downloadable from the site)
```

## Design

- **Fonts**: Cormorant Garamond (headings) + Poppins (body) via Google Fonts
- **Colors**: Warm neutral palette — dark text (`#2a2520`), off-white background (`#fefdfb`), muted accents (`#9a8e86`, `#d4c5b9`)

## Deployment

Hosted via GitHub Pages. To deploy:

1. Push to `main` branch
2. In repo Settings > Pages, set source to `main` branch
3. Optionally configure custom domain (`anoukdesigns.nl`)

### Custom Domain DNS

Add these DNS records with your domain provider:

| Type  | Name | Value                                                                  |
|-------|------|------------------------------------------------------------------------|
| A     | @    | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | www  | `rustamav.github.io`                                                   |

## Customization

- **Text**: Edit content in `index.html`
- **Colors**: Update color values in `styles.css`
- **Images**: Replace files in `Pictures/`
- **Resume**: Replace the PDF in `CV/`
