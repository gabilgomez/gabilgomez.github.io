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

---

## Increment 2 — Hero Section
**Date:** 2026-06-27

### What was implemented
- Two-column hero layout: content left, circular photo placeholder right
- Legal name (`Gabrielli Laurindo Gomez`) displayed in small secondary text above the main name
- Large responsive display name `Gabi Gomez` using `clamp()` for fluid type sizing
- Tagline and location wired to i18n (EN/PT strings added)
- Three social link pills: LinkedIn, GitHub, gabi@gomez.id — each with inline SVG icon
- Link pills animate to solid accent green on hover
- Photo placeholder: 148px circle with dashed accent border and silhouette icon
- Mobile breakpoint: layout stacks (photo moves above name, shrinks to 96px)

### Tested
- All three links verified present in served HTML (`/gabrielligomez/`, `/gabilgomez`, `mailto:gabi@gomez.id`)
- 9 hero class references confirmed in served output
- Tagline switches language correctly on toggle (EN ↔ PT)

### Next
Increment 3 — About paragraph and Experience timeline.

---

## Increment 3 — About & Experience
**Date:** 2026-06-27

### What was implemented
- **About section**: single paragraph framing Gabi as an engineer who specialised in IP; key terms (`patent searches`, `freedom-to-operate analyses`, `technology landscape reviews`) emphasised in accent green via `<strong>`
- **Experience section**: three roles in reverse-chronological timeline
  - Senior IP Analyst — RWS IP Services (2022–Present), 5 bullets
  - Customer Experience Associate — Conduent (2021), 2 bullets
  - IP Research & Innovation Manager — Cerumar (2016–2020), 6 bullets
- Custom bullet design: 5px accent-green dot via `::before` pseudo-element on flex list items
- Role header: role title + company/location left, period right-aligned
- `applyLang` updated to use `innerHTML` so `<strong>` emphasis in translation strings renders correctly
- Full EN and PT translations for all About and Experience strings added to `strings` object
- Mobile: date period floats above role title at ≤640px

### Tested
- 10 about/experience class instances confirmed in served HTML
- All 25 i18n keys for the three roles confirmed present (9 + 6 + 10)
- `innerHTML` switch verified — emphasis tags render on language toggle

### Next
Increment 4 — Skills, Education & Certifications, Contact, Footer.
