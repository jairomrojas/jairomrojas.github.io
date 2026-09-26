# Jairo M Rojas

Academic site: https://jairomrojas.github.io/

Hugo Blox Academic CV, Hugo extended 0.123.3. A push to `main` runs `.github/workflows/publish.yaml` and publishes the site.

## Where to edit

| What | File |
| --- | --- |
| Name, role, bio, education, interests | `content/authors/admin/_index.md` |
| Homepage sections | `content/_index.md` |
| Navigation | `config/_default/menus.yaml` |
| Research pages | `content/projects/<name>/index.md` |
| Papers, thesis, reports | `content/papers/<name>/index.md` and `cite.bib` next to it |
| Talks | `content/talks/<name>/index.md` |
| Seminar series (not his talks) | `content/seminars/<name>/index.md` |
| CV | `static/uploads/resume.pdf` |
| Title and site URL | `config/_default/hugo.yaml` |

The homepage lists only `content/projects/`, `content/papers/`, `content/talks/`, and `content/seminars/`. A page in another folder does not show up.

Pages that moved keep the old address in an `aliases` list in that page's front matter. Leave those in place so existing links still resolve.

In a paper's `authors` list, `admin` means this site's profile (`content/authors/admin/`). The Cite button reads `cite.bib` in the same folder. `weight` sets publication order (higher first).

`static/uploads/resume.pdf` is present. The CV menu entry in `config/_default/menus.yaml` is commented out.

## Preview

From this directory, with Hugo extended 0.123.3:

```bash
hugo server
```

## Theme

Layout comes from the Hugo module in `go.mod` (`blox-bootstrap/v5` v5.9.7). `LICENSE.md` is that theme's MIT license.
