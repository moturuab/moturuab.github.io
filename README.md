# Abhishek Moturu — GitHub Pages site

This is a dependency-free static personal website for `moturuab.github.io`.

It replaces the old Academic Pages / Minimal Mistakes-style template with a cleaner, recruiter-friendly site that has:

- `index.html` — polished homepage with concise positioning, selected work, experience, research, leadership, credentials, media, and contact.
- `cv.html` — detailed CV page with education, experience, submissions, publications, reports, service, talks, awards, media, community work, affiliations, and skills.
- `404.html` — simple not-found page.
- `assets/css/styles.css` — all visual styling.
- `assets/js/main.js` — mobile navigation, active section highlighting, and subtle reveal animations.
- `assets/img/` — cropped portrait, square image, and social preview image.
- `favicon.svg`, `site.webmanifest`, `robots.txt`, `sitemap.xml` — SEO and browser basics.

## Exact repository replacement steps

From your local copy of `moturuab.github.io`:

```bash
git checkout -b refined-static-portfolio
```

Delete the old template files/folders in the repository root, but do **not** delete `.git/`.

Delete these if they exist:

```text
_data/
_drafts/
_includes/
_layouts/
_pages/
_portfolio/
_posts/
_publications/
_sass/
_talks/
_teaching/
assets/
files/
images/
markdown_generator/
talkmap/
.gitignore
CHANGELOG.md
CONTRIBUTING.md
Gemfile
LICENSE
README.md
_config.dev.yml
_config.yml
package.json
talkmap.ipynb
talkmap.py
```

Copy the **contents** of this folder into the root of the repository. Do not copy the folder itself as a nested folder.

Your repository root should look like this:

```text
moturuab.github.io/
├── index.html
├── cv.html
├── 404.html
├── README.md
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

Then commit and push:

```bash
git add --all
git commit -m "Refine AI portfolio site"
git push origin refined-static-portfolio
```

Open a pull request into your GitHub Pages publishing branch, or merge directly if you are comfortable.

## What changed from the first version

- The copy is more specific and less generic.
- The homepage is calmer and more professional: fewer buzzwords, less marketing language, more proof points.
- A separate `cv.html` page was added so the homepage stays clean while still surfacing your full background.
- More CV material was integrated, including in-submission work, reports, reviewing, talks, awards, media, community work, affiliations, and relevant commented-out leadership roles.
- The design moved from a dark/neon AI style to a more editorial, academic/professional style.
- The image crop and social preview were refreshed.

## Maintenance notes

- Edit the homepage copy in `index.html`.
- Edit the detailed CV content in `cv.html`.
- Edit colors, spacing, layout, and mobile styles in `assets/css/styles.css`.
- Edit navigation behavior and animations in `assets/js/main.js`.
- Replace `assets/img/abhishek-moturu-portrait.jpg` and `assets/img/abhishek-moturu-square.jpg` if you want a different photo later.
- The phone number from the CV is intentionally not displayed publicly to reduce scraping. Add it only if you want it public.

## Optional future addition

If you later want a PDF CV button:

1. Add a PDF file at `assets/files/Abhishek-Moturu-CV.pdf`.
2. Add this button where desired:

```html
<a class="button button-secondary" href="assets/files/Abhishek-Moturu-CV.pdf">Download CV</a>
```
