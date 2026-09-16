# Abhishek Moturu — personal website

Static website for https://moturuab.github.io/, hosted with GitHub Pages. It uses plain HTML, CSS, and JavaScript. No package installation or build step is required.

## Preview

Open `index.html` in a browser. For a local server, run this from the repository root:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Check both `index.html` and `cv.html`, including a narrow mobile window, before publishing.

## Files to edit

- `index.html`: introduction, affiliations, selected experience, and recent research.
- `cv.html`: detailed web CV, complete citations, teaching, awards, and service.
- `Abhishek_Moturu_CV.pdf`: downloadable CV; replace this file using the same name.
- `assets/css/styles.css`: shared design, responsive rules, and print styles.
- `assets/js/main.js`: navigation, optional publication search and status filters, and print behavior.
- `sitemap.xml`: update `lastmod` when page content changes.

The recent research list is static HTML, so it remains readable with JavaScript disabled. Search and filters are enabled only after their handlers attach. Each paper has `data-publication="published"`, `"preprint"`, or `"manuscript"`. The global framework paper has a `data-search` attribute containing the full author list because its visible citation abbreviates the authors. Update that attribute if the author list changes.

When adding a paper, update both its homepage entry and full citation in `cv.html`. Use publisher records for final titles and publication details, and identify preprints, workshops, and unpublished manuscripts explicitly. The homepage uses the conference/online year for *Pain in 3D* (2026), while the full CV records the publisher's formal proceedings citation year (2027) with an explanation. LiLAW's first public preprint year is 2025, with a 2026 revision.

The supplied PDF is dated September 16, 2026 and is preserved as received. The web CV includes source-verified bibliographic corrections that do not alter the PDF.

## Publish

The supplied repository uses the `master` branch. With GitHub Pages configured to deploy from `master` and `/ (root)`, committing and pushing the website files publishes the update. Retain the existing Pages settings if they are already working.

```sh
git status --short
git diff --check
git add index.html cv.html Abhishek_Moturu_CV.pdf assets/css/styles.css assets/js/main.js favicon.svg 404.html site.webmanifest sitemap.xml README.md
git commit -m "Update publications, Faculty of Information fellowship, and site design"
git push origin master
```

Only commit files you intend to publish. The `.git` directory is repository metadata and should never be copied from a downloaded update bundle into another checkout.
