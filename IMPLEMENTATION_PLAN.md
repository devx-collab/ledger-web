# Vaultio Marketing Website — Implementation Plan

**Status:** Mobile app parked · Marketing site in `net-worth-tracker-web/` (Next.js static export)

## Goals

| Goal | Approach |
|------|----------|
| Front-facing brand site | Dark emerald Vaultio theme matching the app |
| SEO | App Router metadata, JSON-LD, sitemap, robots, semantic HTML |
| Store readiness | App Store + Google Play placeholders (swap URLs when live) |
| Compliance | Privacy, Terms, Cookies, Support — required for store submission |
| Performance | Static export (`output: 'export'`), no server required |
| UX | Clear hierarchy, one primary CTA, scannable sections, mobile-first |

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **next/font** — Inter (body) + Space Grotesk (display)
- **Static export** — deploy to Vercel, Netlify, Cloudflare Pages, or any static host

## Information architecture

```
/                 Home — hero, value props, social proof, store CTAs
/features         Deep feature breakdown + comparison Free vs Pro
/pricing          One-time premium, FAQ snippet, store CTAs
/faq              Common questions (IAP, privacy, offline, currencies)
/privacy          Privacy Policy (GDPR-friendly baseline)
/terms            Terms of Service
/cookies          Cookie Policy (minimal — analytics placeholder)
/support          Contact, support email, data requests
```

### Optional later (not in v1)

- `/blog` — content SEO
- `/changelog` — release notes
- `/press` — media kit

## SEO strategy

### Primary keywords

- net worth tracker app
- offline net worth tracker
- private personal finance app
- track net worth without bank linking
- private wealth tracker India
- net worth calculator app

### Secondary keywords

- asset liability tracker
- portfolio tracker offline
- INR net worth app
- lifetime premium finance app
- PDF net worth report

### On-page

- Unique `<title>` and `meta description` per route (see `src/lib/seo.ts`)
- One `<h1>` per page
- Internal links in header/footer
- `canonical` URLs via `site.url`
- Open Graph + Twitter cards on all pages

### Technical

- `app/sitemap.ts` — dynamic sitemap
- `app/robots.ts` — allow all, sitemap URL
- JSON-LD: `SoftwareApplication` on home, `Organization` in layout
- `lang="en"` on `<html>`
- Alt text on images, semantic landmarks (`header`, `main`, `footer`)

### Pre-launch checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Replace placeholder support email with real inbox (current: `info@sylvabit.com`)
- [ ] Add real App Store / Play Store URLs in `src/lib/site.ts`
- [ ] Submit sitemap in Google Search Console
- [ ] Verify Privacy/Terms match actual app behaviour before store review

## Design system (aligned with app)

| Token | Value |
|-------|--------|
| Background | `#0A0F0C` |
| Surface | `#131B16` |
| Accent | `#10B981` |
| Accent light | `#34D399` |
| Text primary | `#FFFFFF` |
| Text secondary | `#8A9690` |

### UX principles

1. **Hero** — one headline, one subline, dual store badges
2. **Trust** — “No bank linking · Offline · On your device” above the fold
3. **Features** — icon + title + one sentence; no wall of text
4. **Pricing** — single lifetime tier; no subscription confusion
5. **Legal** — readable prose, last-updated date, table of contents on long pages
6. **Footer** — all legal links on every page

## Store placeholders

Configured in `src/lib/site.ts`:

```ts
appStoreUrl: '#'   // → Apple App Store link when live
playStoreUrl: '#'  // → Google Play link when live
```

Badges render disabled style with “Coming soon” until URLs are not `#`.

## Build & deploy

```bash
cd net-worth-tracker-web
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs to out/
```

Deploy `out/` to any static host. On Vercel, use standard Next.js preset (can disable static export if SSR needed later).

## Content ownership

| Page | Owner action before launch |
|------|---------------------------|
| Privacy | Review data practices (SQLite local, optional backup, RevenueCat) |
| Terms | Review IAP / refund policy per store rules |
| Support | Real email + response SLA |

## Phase 2 (when app launches)

1. Swap store URLs and enable badge links
2. Add real screenshots (`public/screenshots/`)
3. Add `SoftwareApplication` aggregateRating when reviews exist
4. Optional: Plausible/GA with consent banner → update Cookies page

---

**Delivered in this repo:** Full v1 site per structure above.
