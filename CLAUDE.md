# Agent Instructions — gabi.gomez.id

## Project
Static personal landing page / portfolio site for Gabi Gomez.
See `implementation.md` for the full plan.

## Live Preview
Always keep a live preview server running during development.
Use Python's built-in server from the repo root:

```bash
python3 -m http.server 8080
```

The site is then accessible at http://localhost:8080.
Start this before beginning any increment and keep it running throughout.

## Development Workflow

Implement the plan in **logical, testable increments** (e.g. structure & nav, hero section, experience section, i18n, SEO, etc.).

### After each increment:

1. **Write to `history.md`** — append a dated entry describing what was implemented in that increment
2. **Test** — where possible, verify the feature is working (check the live preview, validate markup, confirm i18n strings switch correctly, etc.). Report what was tested and the result.
3. **Commit** — stage and commit the changes with a concise, logical commit message
4. **Pause and ask the user to test and approve** before moving on to the next increment

Do not proceed to the next increment without explicit user approval.

## Source of Truth
- Content: `CV_GabI_Patent Analyst.pdf` (primary)
- Plan: `implementation.md`
- Change log: `history.md`
