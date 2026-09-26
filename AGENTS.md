# AGENTS.md — Jairo M. Rojas website

Personal academic site, published at https://jairomrojas.github.io/.
The theme is al-folio v1 (Jekyll). Layouts live in the `al_folio_core` gem. Do not copy theme internals into this repo.

## Layout
- `_pages/about.md` — homepage biography
- `_pages/research.md` — research interests, kept general
- `_bibliography/papers.bib` — published papers and the arXiv preprint
- `_config.yml`, `_data/socials.yml` — name, URL, email, icons
- `.github/workflows/deploy.yml` — GitHub Pages

## Commands
Working directory: repository root.

- Publish: `git push origin main`
- Local preview, with Ruby 3.3 and Bundler: `bundle exec jekyll serve`
- This repository has no test suite of its own.

## Do / Ask / Never
- **Do:** keep research interests general. No talks page, no teaching page, no CV, no GitHub icon, no manuscripts in preparation.
- **Ask:** before force-pushing `main`. A normal push publishes the site.
- **Never:** restore the Hugo theme, or put unpublished simulation numbers on a public page.

## Handoff
Session state is the local, untracked `HANDOFF.md`.
