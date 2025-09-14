Edit & Deploy (for contributors)
================================

This document explains how to edit documentation, preview changes locally, build, and deploy to either Vercel (recommended) or GitHub Pages.

1) Edit docs

- All documentation source files are in the `docs/` folder (and localized copies under `i18n/<locale>/docusaurus-plugin-content-docs/current/`).
- Each doc is Markdown with frontmatter. Example frontmatter at the top of a doc:

```md
---
id: 02-orders-detail
title: Orders Detail
---
```

- To add or edit content: modify the Markdown files and save.

2) Preview locally

```bash
cd docusaurus
npm ci
npm start
```

Open `http://localhost:3000` and use the locale dropdown to preview translations.

3) Build the site (production)

```bash
npm run build
```

Output will be generated in the `build/` folder.

4) Deploy to Vercel (recommended)

- In the Vercel dashboard, click "Import Project" → choose `losnah-think/fulgo-oms-fdd`.
- Vercel will detect a Node project. Set build command to:

```
npm ci && npm run build
```

and output directory to `build`.

- Or deploy from your machine with the Vercel CLI:

```bash
# login once
npx vercel login

# deploy to production
npx vercel --prod
```

Notes:
- `docusaurus.config.js` is configured so `baseUrl` defaults to `/` for Vercel.

5) Deploy to GitHub Pages (optional)

- This repo includes a GitHub Actions workflow that can publish `build/` to the `gh-pages` branch. To use it, ensure the workflow file is present in `.github/workflows/deploy.yml` (already included), then push to `main` — the workflow will run and publish to `gh-pages`.
- If you prefer to publish `build/` into `main/site/` manually (so Pages serves from `main/site`), you can run:

```bash
# build
npm ci && npm run build

# prepare site/ folder and commit
rm -rf site
mkdir site
rsync -a --delete build/ site/
git add site
git commit -m "chore: publish built site to main/site"
git push origin main
```

6) Quick troubleshooting

- If links look broken, check `docusaurus.config.js` `baseUrl` and `url` values. They can be overridden by environment variables `SITE_URL` and `BASE_URL` (used by CI).
- If the site doesn't reflect new translations, run a full build (`npm run build`) and redeploy.

7) Contributing tips

- Keep frontmatter `id` and `title` stable to avoid breaking sidebar links.
- When adding a new doc, register it in `sidebars.js` if you want a custom position.
