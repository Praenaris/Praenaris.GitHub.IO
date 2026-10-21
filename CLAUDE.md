# CLAUDE.md

The official website of Praenaris, an indie videogame studio from Donostia / San Sebastián. It is a Hugo static site, published at https://www.praenaris.com/.

The site is being migrated from an older hand-written HTML/JS site into Hugo, and the migration is about halfway done. Many files named `legacy` or `_LEGACY_` come from the old site. Expect leftovers, hardcoded markup and commented-out blocks.


## Commands

- `hugo serve` runs the dev server at http://localhost:1313/. `serve.cmd` does the same and opens the browser. It is git-ignored and local only.
- `hugo` builds to `public/`, which is git-ignored and must never be edited by hand.
- Hugo extended v0.151 is installed locally. CI uses `hugo_extended:latest`.
- There are no tests, linters or npm packages. The only check is that `hugo` builds without errors.


## Deployment

GitLab (`gitlab.com/praenaris/web-praenaris`) runs `.gitlab-ci.yml`. A push to `master` builds and publishes to GitLab Pages, so every commit on `master` goes live. Other branches only run a test build.


## Structure

No theme is used (`themes/` is empty). The site's own layouts do everything.

- `hugo.toml`: site config. `DisableKinds = ["taxonomy"]`. `params.Authors` fills the author `<meta>` tags.
- `layouts/_default/baseof.html`: the HTML skeleton. Each page layout fills `{{ define "body" }}` with its own `<body id="pr-page-…">`.
- `layouts/index.html`: the home page (hero, works grid, workshop, copyright).
- `layouts/about/list.html`, `layouts/contact/list.html`: section pages. Their text is hardcoded in the layout. The `_index.md` files only hold the title and menu weight.
- `layouts/works/list.html`: empty for now. Works are shown on the home page and as overlays, not on their own pages.
- `layouts/partials/`:
	- `head.html`: `<head>` with Google Fonts (Crimson Text, Work Sans), normalize.css, the legacy CSS and the JS files.
	- `nav.html`: the nav bar. The left and right lists come from `.Site.Menus.left` and `.Site.Menus.right`, set in front matter (`menu.left.weight`, `menu.right.weight`). "Our Works" is a hardcoded link to `/#pr-section-works`.
	- `overlays.html`: one hidden overlay per work (`#pr-overlay-<filename>`), built from the works' front matter. Pages that link to works include it.
	- `copyright.html`: the footer.
- `data/stores.yaml`: store keys (`Steam`, `Itchio`, `GOG`…) mapped to a display name and an SVG icon in `static/img/stores/`.
- `static/css/legacy/`: the stylesheets actually in use (`general.css`, `praenaris.css`, `praenaris-mobile.css`). `legacy.css` is not linked anywhere. `static/css/*.css` (`main`, `nav`, `body`, `footer`, `_default`) are empty placeholders for the planned CSS rework.
- `static/js/`: plain scripts with no bundler. `main.js` runs the init on `window.onload`, `overlay_manager.js` shows and hides work overlays, `color_mode_switcher.js` swaps the favicon for dark mode, `whitespace_remover.js` removes whitespace-only text nodes. The `_LEGACY_*.js` files are not used.
- `static/img/`: backgrounds, icons (`icon-<name>-dark|light`), `covers/` and `pictures/` per work, `stores/`, `socials/`, `masters/`. `_convert.cmd` converts every PNG in the folder to WebP (ImageMagick, quality 35). CSS references the `.webp` versions, and the PNG and PSD sources stay alongside.


## Works (`content/works/*.md`)

Each work is one Markdown file with YAML front matter and no body. The filename (without `.md`) becomes the overlay id, so `swan.md` gives `pr-overlay-swan`. The home grid sorts works by `Date` ascending (creation date).

```yaml
Title: "Arima Lodge"
Date: 2022-09-19				# Project start; drives the order
Draft: false
ProjectTitle: null				# Internal codename, or null
FullDescription: [ "…" ]		# Paragraphs; markdownify is applied
BehindScenesSummary: [ "…" ]	# Paragraphs; markdownify is applied
CoverLink: "/img/covers/<name>.png"
PictureLink: "/img/pictures/<name>.png"
InDevelopment: false
DemoDate: 2022-09-26			# Or null
ReleaseDate: 2024-12-10			# Or null (with InDevelopment: true it means "TBD", otherwise "cancelled")
MainDeveloper: "Praenaris"
Developers: [ "Praenaris" ]
Publishers: [ "Praenaris" ]
Links:
  - store: "Steam"				# Must be a key in data/stores.yaml
    link: "https://…"
```

To add a work, create the file, add its cover and picture images, and add any new store to `data/stores.yaml` with an SVG in `static/img/stores/`. To link to a work from hand-written HTML, use `onclick="showOverlayContainerById('pr-overlay-<filename>', true, event)"`. The page must include `overlays.html`.


## Conventions

- Everything uses the `pr-` prefix: ids (`pr-section-…`, `pr-page-…`, `pr-overlay-…`) and classes (`pr-button`, `pr-social-item-<network>`…). CSS custom properties follow `--<scope>--<element>--<property>`, for example `--general--h1--font-size`.
- Indent with tabs in HTML, CSS, JS and Go templates.
- JS: plain functions in the global scope, Allman braces for function declarations and K&R braces for control flow. Leave 4 blank lines between groups of functions and 2 between related functions. Event handlers bail out early with `if ((event != undefined) && (event.target != event.currentTarget)) return;`.
- Many layout, CSS and JS files end with a braille-art ship banner inside comments. Keep it when editing those files.
- Asset paths are root-absolute (`/img/…`, `/css/…`, `/js/…`).
- Commented-out blocks, such as former crew members in `about/list.html` and old works markup in `index.html`, are kept on purpose. Don't delete them unless asked.
- Site text is in English. `LanguageCode` is `en-us` and `i18n/` is empty.


## Known loose ends from the migration

Mention these if they're relevant to a task, but don't fix them unasked:

- `head.html` loads `/js/data_loader.js` and `/js/image_cacher.js`, which no longer exist (they were renamed to `_LEGACY_*`), so both requests return 404.
- `main.js` adds `loaded` to `#pr-loading`, but the loading screen is commented out on every page. The call throws on load.
- The home hero links to `./about.html`, which is a leftover URL from the old site. The real URL is `/about/`.
- `content/works/_index.md` has its menu entry commented out, and `layouts/works/list.html` is empty.
- `<title>` and the meta description are hardcoded in `head.html` instead of using `.Title` or `.Site.Title`.