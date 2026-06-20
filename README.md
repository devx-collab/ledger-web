# Vaultio Marketing Website

Static Next.js site for the Vaultio net worth tracker app.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output: `out/` — deploy to Vercel, Netlify, Cloudflare Pages, etc.

## Configuration

Edit `src/lib/site.ts`:

- `url` — set `NEXT_PUBLIC_SITE_URL` in production
- `appStoreUrl` / `playStoreUrl` — real store links when live
- `supportEmail` / `legalEmail`

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home, SEO landing |
| `/features/` | Feature deep-dive |
| `/pricing/` | Free vs Premium |
| `/faq/` | FAQ |
| `/privacy/` | Privacy Policy (store required) |
| `/terms/` | Terms of Service |
| `/cookies/` | Cookie Policy |
| `/support/` | Contact & help |

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for full SEO and launch checklist.
