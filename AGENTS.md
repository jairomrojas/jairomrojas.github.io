# AGENTS.md — Jairo M Rojas website

Personal academic site for Jairo M Rojas, published at https://jairomrojas.github.io/.
Hugo Blox Academic CV (`blox-bootstrap/v5` v5.9.7). A push to `main` rebuilds and publishes the site.

## Layout
- `content/_index.md` — homepage sections: about, research, publications, talks, teaching, seminars, contact
- `content/authors/admin/_index.md` — name, role, bio, education, interests; avatar is `avatar.jpg` in that folder
- `content/projects/` — homepage Research. Say what is published, what is in preparation, and what is open
- `content/papers/` — homepage Publications. Each item is a folder with `index.md` and `cite.bib`. In `authors`, `admin` is this profile. Manuscripts in preparation stay labeled that way
- `content/talks/` — homepage Talks
- `content/seminars/` — external seminar series, not his own talks
- `static/uploads/resume.pdf` — the 2026 CV, linked from the menu
- `config/_default/` — title, base URL, menus, module, params
- `layouts/partials/site_footer.html` — keeps the copyright line and omits the theme's promotional footer
- `.github/workflows/publish.yaml` — deploy

`content/authors/_index.md` disables standalone author pages. The homepage still reads the `admin` profile.

## Commands
Working directory: repository root.

- Publish: `git push origin main`. GitHub Actions runs Hugo extended **0.123.3** (`hugo --minify`) and deploys to GitHub Pages.
- Local preview, with that same Hugo extended build: `hugo server`
- Production build: `hugo --minify --baseURL https://jairomrojas.github.io/`
- This repository has no test, lint, or format command.

Hugo is not installed on this workstation. Do not install it with `pip` or `conda`.

## Invariants
- `config/_default/hugo.yaml` sets `baseURL` to `https://jairomrojas.github.io`.
- Each homepage section reads one content folder. A page in the wrong folder does not appear.
- Homepage lists sort by `date`, newest first. `show_date: false` hides a date that is only there for sorting.
- Do not publish unpublished simulation numbers. Point to the paper once it exists.
- Old URLs that moved are `aliases` in that page's front matter. Keep them.
- `public/`, `resources/`, `node_modules/`, and `go.sum` are generated. Leave them untracked.
- The theme version is pinned in `go.mod`. Do not edit cached theme sources.

## Do / Ask / Never
- **Do:** edit Markdown and media in `content/`, and check that the page sits in the folder the homepage section filters.
- **Ask:** before `git commit` or `git push`. A push to `main` publishes the site.
- **Never:** force-push `main`, change `baseURL`, or replace the publish workflow wholesale.

## Verification
A content change is done when the page is in the folder that section reads, its front matter is valid YAML, and either `hugo server` or a successful GitHub Pages deploy shows it. `public/` is disposable build output.

## Handoff
Session state is the local, untracked `HANDOFF.md`. Refresh it after a content milestone and before switching CLIs.
