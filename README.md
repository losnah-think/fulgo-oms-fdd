Docusaurus starter for FULGO OMS FDD

Quick start

1. Install dependencies

```bash
cd docusaurus
npm install
```

2. Run dev server

```bash
npm start
```

3. Build for production

```bash
npm run build
```

Converting existing HTML pages

- The `docs/` folder contains Markdown shells for the original `pages/*.html` files. Replace the placeholder text with converted Markdown. Use tools like `pandoc` or online converters if you want automated conversion.

PDF export

- Use headless Chromium to print pages to PDF, or use a plugin/workflow to render the full site as PDF.
