# AGENTS.md — Jairo M Rojas website

Personal academic site at https://jairomrojas.github.io/. Theme: al-folio v1. Theme layouts stay in the `al_folio_core` gem.

## Where things are
- `_pages/about.md` — homepage. The nav label is Home
- `_pages/research.md` — three short sections: mechanics, collective, information. The longer note for each question stays in `_projects/`
- `_pages/events.md` — Recent Events, the selected conferences and schools, including schools without a talk. Each name links to that event’s site
- `_projects/*.md` — one research interest each. `category` must be one of those three groups
- `_bibliography/papers.bib` — published papers and the arXiv preprint
- `assets/img/figures/` — portrait and every publication figure
- `_data/socials.yml`, `_config.yml` — email, ORCID, Scholar, site name
- `_redirects/` — old URLs. Do not delete them
- `.github/workflows/deploy.yml` — GitHub Pages

Publication `preview` values are `../figures/<file>-square.png`.
The full figure stays beside that square, under the same name without `-square`.

## Commands
- Publish: `git push origin main`
- Local preview: `pixi run serve` (Ruby 3.3 from the physics environment, ImageMagick from this repo)

## Do / Ask / Never
- **Do:** keep each research interest to its own question. Keep figures in `assets/img/figures/`.
- **Ask:** before force-pushing `main`.
- **Never:** restore the Hugo theme, add a CV, or publish unpublished simulation numbers.

## Handoff
Local untracked `HANDOFF.md`.
