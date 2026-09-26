# AGENTS.md — Jairo M. Rojas website

Personal academic site, published at https://jairomrojas.github.io/.
The theme is al-folio v1 (Jekyll). Layouts live in the `al_folio_core` gem. Do not copy theme internals into this repo.

## Layout
- `_pages/about.md` — homepage biography
- `_projects/` — research pages, category `research`
- `_bibliography/papers.bib` — the publication list
- `_pages/talks.md`, `_pages/teaching.md`
- `_config.yml`, `_data/socials.yml` — name, URL, email, icons
- `.github/workflows/deploy.yml` — GitHub Pages

## Commands
Working directory: repository root.

- Publish: `git push origin main`
- Local preview, with Ruby 3.3 and Bundler: `bundle exec jekyll serve`
- This repository has no test suite of its own.

## Do / Ask / Never
- **Do:** keep the public page short. Published papers only. No CV file, no X account, no preprint.
- **Ask:** before force-pushing `main`. A normal push publishes the site.
- **Never:** restore the Hugo theme, or put unpublished simulation numbers on a public page.

## Handoff
Session state is the local, untracked `HANDOFF.md`.
