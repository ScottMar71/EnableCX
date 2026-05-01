# EnableCX Website

Production-ready setup for the EnableCX consultancy site using Next.js, Vercel, Supabase, and GitHub.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Vercel for hosting and preview deployments
- Supabase for data storage and backend services
- GitHub for source control and CI

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create local env file:

```bash
cp .env.example .env.local
```

3. Fill these values in `.env.local`:
- `NEXT_PUBLIC_SITE_URL` (production origin, e.g. `https://enablecx.com`; drives canonicals and sitemap)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (optional; Search Console HTML-tag value only)
- `ALLOW_PREVIEW_INDEXING` (optional; set to `true` only if a **preview** deploy should be indexable)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The app now performs startup-time environment validation for these keys, so missing values fail fast instead of causing runtime form submission errors.

4. Start development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - Run local app
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript check
- `npm run build` - Build production bundle
- `npm run seo:urls` - Print URLs for Meta / LinkedIn / X sharing debuggers

## CI

GitHub Actions workflow is configured at `.github/workflows/ci.yml` and runs:
- Lint
- Typecheck
- Build

## Supabase

- Local Supabase config is initialized in `supabase/config.toml`.
- Client helpers are in:
  - `src/lib/supabase/client.ts`
  - `src/lib/supabase/server.ts`

## Vercel

- Project has been linked to Vercel (`.vercel/project.json`).
- **SEO / URLs:** In the Vercel dashboard, set **`NEXT_PUBLIC_SITE_URL`** for Production (see `docs/seo-launch-checklist.md`).
- Environment sync can be run with:

```bash
npx vercel pull --yes --environment=development
```

## SEO checklist

See **`docs/seo-launch-checklist.md`** for Search Console, social preview tools, preview `robots` behavior, and when to bump sitemap dates.
