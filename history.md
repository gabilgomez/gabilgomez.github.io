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

---

## Increment 4 — Skills, Education & Certifications, Contact
**Date:** 2026-06-27

### What was implemented
- **Skills**: 3-column grid (IP & Research · Engineering · Tools) with 20 accent-green pill tags; collapses to single column on mobile
- **Education & Certifications**: two-column layout (Education left, Certifications right)
  - 2 education entries (BSc Mechatronics 2018, Industrial Mechanics) with UK ENIC notes in accent italic
  - 5 certifications (WIPO ×3, Fluminense Federal, Ponta Grossa State University), 2015–2018
- **Contact**: intro line + two solid accent-green pill buttons (email, LinkedIn) with hover darkening
- All new section sub-labels and contact intro wired to i18n (EN + PT)
- Mobile breakpoints: skills grid → 1 col, edu-cols grid → 1 col

### Tested
- 20 skill pills confirmed in served HTML
- 5 cert-items confirmed in served HTML
- All section and sub-section labels toggle correctly with EN/PT switcher

### Next
Increment 5 — Full i18n pass and GitHub Pages activation (CNAME + DNS instructions).

---

## Increment 5 — i18n Completion & SEO Finalisation
**Date:** 2026-06-27

### What was implemented
- `page.title` and `page.description` strings added for EN and PT
- `applyLang()` now updates `document.title` and `<meta name="description">` on every language switch
- `id="meta-description"` added to description meta for efficient DOM access
- `hreflang` alternate links added (`en`, `pt-BR`, `x-default`) — all pointing to `https://gabi.gomez.id` (single-URL language switch pattern)
- `og:locale` (`en_GB`) and `og:locale:alternate` (`pt_BR`) added
- Placeholder comment for `og:image` (to be added with profile photo)

### Tested
- All new meta tags and hreflang links confirmed present in served HTML

### GitHub Pages activation — user action required
1. Go to **github.com/gabilgomez/gabilgomez.github.io → Settings → Pages**
2. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save
3. Site becomes live at `https://gabilgomez.github.io` within ~60 seconds

### DNS setup — user action required
In your `gomez.id` domain registrar, add one record:
- Type: `CNAME`
- Name / Host: `gabi`
- Value / Points to: `gabilgomez.github.io`
- TTL: `3600` (or default)

After DNS propagates (15–60 min), `https://gabi.gomez.id` will resolve.
Then in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is ready.

### Next
Increment 6 — Profile photo integration (user to provide asset).
