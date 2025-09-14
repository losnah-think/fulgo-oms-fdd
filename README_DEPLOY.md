Vercel deployment

1. Connect the GitHub repository `losnah-think/fulgo-oms-fdd` to Vercel (Import Project).
2. Set the framework to "Other" or let Vercel detect. Build command: `npm ci && npm run build`.
3. Output directory: `build`.
4. Alternatively use Vercel CLI:

```bash
# install/vercel login
npx vercel --prod
```

Notes:
- `docusaurus.config.js` has `baseUrl: '/'` configured for Vercel.
- If you want to deploy to a custom domain, add it via Vercel dashboard.
