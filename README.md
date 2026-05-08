# Abhishek Moturu — Personal Website

A fast, polished, static personal website for `moturuab.github.io`.

## What this replaces

This version intentionally replaces the existing Academic Pages / Minimal Mistakes template with a clean, dependency-free static site. No Ruby, Jekyll, Node, package manager, or build step is required.

## File structure

```text
.
├── index.html
├── 404.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── assets/
    ├── css/
    │   └── styles.css
    ├── img/
    │   ├── abhishek-moturu-portrait.jpg
    │   ├── abhishek-moturu-square.jpg
    │   └── og-image.jpg
    └── js/
        └── main.js
```

## Deploy to GitHub Pages

1. Clone the repository:

```bash
git clone git@github.com:moturuab/moturuab.github.io.git
cd moturuab.github.io
```

2. Create a safety branch before deleting the old template:

```bash
git checkout -b new-static-portfolio
```

3. Delete the existing template files and folders in the repository root, but do **not** delete `.git/`.

4. Copy every file in this folder into the repository root.

5. Commit and push:

```bash
git add --all
git commit -m "Replace template with professional AI portfolio"
git push origin new-static-portfolio
```

6. Open a pull request from `new-static-portfolio` into the publishing branch currently used by GitHub Pages. The existing repo currently uses `master`, so merge into `master` unless you change the Pages source to `main`.

## Maintenance notes

- Edit core copy in `index.html`.
- Edit visual design in `assets/css/styles.css`.
- Edit menu behavior, scroll effects, and active nav behavior in `assets/js/main.js`.
- Replace profile images in `assets/img/` if you want a different crop.
- The public phone number from the CV was intentionally omitted to reduce scraping. Add it in the contact section only if you want it public.
- External links are written directly in `index.html`; check them every few months.

## Suggested future upgrade

Add a PDF CV at `assets/files/Abhishek-Moturu-CV.pdf` and add this button in the hero/contact sections:

```html
<a class="button button-secondary" href="assets/files/Abhishek-Moturu-CV.pdf">Download CV</a>
```
