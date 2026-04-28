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
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

4. Start development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - Run local app
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript check
- `npm run build` - Build production bundle

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
- Environment sync can be run with:

```bash
npx vercel pull --yes --environment=development
```
