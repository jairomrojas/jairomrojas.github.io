# Jairo M Rojas

Academic site: https://jairomrojas.github.io/

Built with [al-folio](https://github.com/alshedivat/al-folio). A push to `main` publishes it.

Local preview: `pixi run serve`, then open http://127.0.0.1:4000/.
ImageMagick for the figure previews lives in this folder's Pixi environment.
Ruby and Bundler come from the global `physics` environment.
The gems install into `vendor/bundle`.

## Edit these

| What | Where |
| --- | --- |
| Biography | `_pages/about.md` |
| Research interests | `_projects/*.md`, grouped in `_pages/research.md` |
| Events | `_pages/events.md` |
| Publications | `_bibliography/papers.bib` |
| Every figure | `assets/img/figures/` |
| Name, email, links | `_config.yml` and `_data/socials.yml` |

The portrait on the front page is `assets/img/figures/portrait.jpg`.
The camera original is `portrait-source.tif` in that same folder. It is not published.

A publication figure is named in the BibTeX `preview` field as `../figures/<file>-square.png`.
That file is the square used on the page.
The full figure is the same name without `-square`, in `assets/img/figures/`.
The theme looks in another folder, and that relative path is what points it at `assets/img/figures/`.

Old addresses (the previous Hugo pages, the CV, talks, and teaching) live in `_redirects/`.
Each file is only a destination. Leave them there so those links do not 404.

## Do not add

A CV file, a social-media account, a manuscript that is only in preparation, or unpublished numbers.
