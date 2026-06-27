# Implementation Plan — gabi.gomez.id

Personal landing page / portfolio / online CV for Gabrielli Laurindo Gomez (Gabi Gomez).

---

## Repo & Hosting

- New public GitHub repo: `gabilgomez.github.io`
- GitHub Pages served from `main` branch root
- `CNAME` file containing `gabi.gomez.id`
- DNS: add a `CNAME` record in the `gomez.id` registrar pointing `gabi` → `gabilgomez.github.io`
- Enable HTTPS in GitHub Pages settings once DNS propagates

---

## File Structure

```
gabilgomez.github.io/
├── index.html
├── style.css
├── script.js
└── CNAME
```

---

## Page Structure (single scroll)

| # | Section | Notes |
|---|---------|-------|
| 1 | **Sticky nav** | Full name left, 🇬🇧 / 🇧🇷 language toggle right |
| 2 | **Hero** | "Gabrielli Laurindo Gomez" as legal name, "Gabi Gomez" as display name, tagline, LinkedIn / GitHub / email links |
| 3 | **About** | Profile paragraph — engineer background, IP expertise, career direction |
| 4 | **Experience** | 3 roles in timeline style, content from patent analyst CV |
| 5 | **Skills** | Pill/tag style, loosely grouped: IP / Engineering / Tools |
| 6 | **Education & Certifications** | Compact two-column list |
| 7 | **Contact** | Email + LinkedIn only, no form |
| 8 | **Footer** | Minimal — name + year |

> Photo placeholder is reserved in the Hero section. Asset to be added last.

---

## Design

| Token | Value |
|-------|-------|
| Font | Inter (Google Fonts) |
| Background | `#f8f7f4` (warm off-white) |
| Surface | `#ffffff` |
| Accent | `#2d6a4f` (deep forest green) |
| Text primary | `#1c1c1c` |
| Text secondary | `#5a5a5a` |
| Border | `#e2e2e2` |
| Accent light (tags bg) | `#e8f4f0` |

- Modern, minimalist layout
- Max content width ~900px, centred
- Clear section headings with generous whitespace
- Keywords and key terms emphasised using the green accent — not bold overuse
- Tactile use of the accent colour on hover states, links, and borders

---

## Internationalisation (i18n)

- Languages: English (UK) 🇬🇧 and Portuguese (BR) 🇧🇷
- All strings defined in a JS object: `{ en: { … }, pt: { … } }`
- DOM elements carry `data-i18n="key"` attributes; `script.js` swaps text on toggle
- `<html lang="">` attribute updates to `en` or `pt-BR` accordingly
- Language selection persisted in `localStorage`
- Toggle displayed as small flag emoji + label (e.g. 🇬🇧 EN / 🇧🇷 PT)

---

## SEO & Open Graph

- `<html lang>` set dynamically
- `<title>` — "Gabi Gomez — IP Analyst & Mechatronics Engineer"
- `<meta name="description">` — concise professional summary
- `<link rel="canonical" href="https://gabi.gomez.id">`
- Open Graph block:
  - `og:title`
  - `og:description`
  - `og:type` — `profile`
  - `og:url`
  - `og:image` — placeholder until photo asset is provided
- Twitter Card meta (`summary_large_image`)

---

## Content Source

Primary CV: `CV_GabI_Patent Analyst.pdf`

Key content decisions:
- Experience section covers: Senior IP Analyst (RWS, 2022–present), IP Research & Innovation Manager (Cerumar, 2016–2020), Customer Experience Associate (Conduent, 2021)
- About paragraph frames her as an engineer who moved into IP — positioning leaves room for career pivot back toward engineering without making it the headline
- Certifications section draws from the fuller list in the patent analyst CV (WIPO courses, PCT, etc.)

---

## Outstanding Items

- [x] Career pivot framing decision: **"engineer who specialised in IP"** — About copy should lead with engineering identity, with IP expertise positioned as a specialism built on top of that foundation
- [ ] Headshot / profile photo (to be added last)
- [ ] DNS record confirmation once repo is live
