# AGENTS.md — Jairo M Rojas website

Personal academic site at https://jairomrojas.com/. Theme: al-folio v1. Theme layouts stay in the `al_folio_core` gem.
`../AGENTS.md` honesty rules apply here (no unpublished numbers, verified publication facts); its LaTeX and vector-PDF figure rules do not, since web images follow the theme's formats (PNG, JPEG, WebP).

## Where things are
- `_pages/about.md` — homepage. The nav label is Home
- `_pages/research.md` — four short sections: mechanics, collective, information, education. The longer note for each question stays in `_projects/`
- `_pages/events.md` — Recent Events, the selected conferences and schools, including schools without a talk. Each name links to that event’s site
- `_projects/*.md` — one research interest each. `category` must be mechanics, collective, or information
- `_bibliography/papers.bib` — published papers and the arXiv preprint
- `assets/img/figures/` — portrait and every publication figure
- `assets/site.css` — all custom CSS, linked from `_includes/header.liquid`. It stays outside `assets/css/`, which PurgeCSS trims at deploy
- `assets/fonts/` — the site fonts, Source Serif 4 for titles and headings and Source Sans 3 for text, self-hosted as variable WOFF2 files with Adobe's licenses. `assets/site.css` declares them and names them in `--font-serif` and `--font-sans`
- `_data/socials.yml`, `_config.yml` — email, ORCID, Scholar, site name
- `_redirects/` — old URLs, each forwarding to its matching new page. Keep them. The three that forwarded to Home (`/cv/`, `/seminars/`, `/teaching/`) were removed on 2026-10-26, because Google can read many old URLs sent to the home page as errors
- `.github/workflows/deploy.yml` — GitHub Pages
- `google77e1796456c8718a.html` — Google's verification file, which verifies the old `https://jairomrojas.github.io/` Search Console property (needed for the Change of Address to `jairomrojas.com`, started 2026-09-28) and probably the `https://jairomrojas.com/` one. Never delete it, since removing it unverifies the property

Publication `preview` values are `../figures/<file>-square.png`.
The full figure stays beside that square, under the same name without `-square`.

## Commands
- Publish: `git push origin main` runs the GitHub Pages deploy; the owner runs it (AI tools are blocked from pushing)
- Local preview: `bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload`
- Local build: `bundle exec jekyll build`
- Host tools: Ruby, Bundler, Node, and ImageMagick come from the shared `physics` Pixi environment (`pixi global add --environment physics <pkg>`). Gems install into `vendor/bundle`.

## Quick checks

```bash
bundle exec jekyll build --quiet
```

## Do / Ask / Never
- **Do:** keep each research interest to its own question. Keep figures in `assets/img/figures/`.
- **Ask:** before every push, since a push publishes the site.
- **Never:** restore the Hugo theme, add a CV, or publish unpublished simulation numbers.

## Handoff
Local untracked `HANDOFF.md` (excluded in `.git/info/exclude`), following `~/setup/templates/HANDOFF.md`.
