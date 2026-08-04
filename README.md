# Abhishek Moturu personal website update

This bundle updates the GitHub Pages site from the CV dated August 4, 2026.

## Updated files

- `index.html` — homepage, affiliations, roles, manuscripts, awards, and metadata
- `cv.html` — detailed web CV
- `Abhishek_Moturu_CV_Aug_4.pdf` — dated downloadable CV
- `Abhishek_Moturu_CV.pdf` — the same updated CV at the previous stable URL
- `sitemap.xml` and `site.webmanifest` — updated site metadata
- `assets` — site styles, script, portrait, and social images; the role grid has a small responsive layout update
- `404.html`, `favicon.svg`, and `robots.txt` — included for a complete site handoff

Copy this bundle without using `--delete` so any unrelated repository files remain untouched.

## Update the repository

```bash
cd ~/Documents/moturuab.github.io
git pull --ff-only origin master
rsync -av --exclude='.git/' --exclude='.DS_Store' ~/Downloads/Abhishek_Moturu_Website_Aug_4_Update/ ./
python3 -m http.server 8000
```

Open `http://localhost:8000`, then press `Control-C` in Terminal when the review is complete.

```bash
git status
git diff -- index.html cv.html assets/css/styles.css sitemap.xml site.webmanifest README.md
git add -A
git commit -m "Update website from August 2026 CV"
git push origin master
```
