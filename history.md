# Build History

---

## Increment 1 — HTML Skeleton, CSS Design System & Sticky Nav
**Date:** 2026-06-27

### What was implemented
- `index.html` — full single-page skeleton with all six sections (Hero, About, Experience, Skills, Education & Certifications, Contact) and Footer. Placeholder content in each section pending their respective increments.
- `style.css` — complete CSS design system: custom property tokens (colours, typography, spacing, radius), reset, container layout, sticky nav, section scaffolding, footer, and responsive breakpoint at 640px.
- `script.js` — i18n string map (`en`/`pt`) with `applyLang()` function, language toggle event listeners, `localStorage` persistence, and footer year injection. Section label strings switch correctly on toggle.
- `CNAME` — set to `gabi.gomez.id` for GitHub Pages custom domain.

### Design tokens set
| Token | Value |
|-------|-------|
| `--bg` | `#f8f7f4` |
| `--surface` | `#ffffff` |
| `--accent` | `#2d6a4f` |
| `--accent-light` | `#e8f4f0` |
| `--text-primary` | `#1c1c1c` |
| `--text-secondary` | `#5a5a5a` |
| `--border` | `#e2e2e2` |

### Tested
- Live preview server running at http://localhost:8080 — HTTP 200 confirmed.
- Language toggle switches section labels between EN and PT; `localStorage` key persists selection.
- Footer year renders correctly.

### Next
Increment 2 — Hero section with name, tagline, and social links.
