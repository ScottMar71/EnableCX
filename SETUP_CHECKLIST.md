# EnableCX Setup Checklist

## Completed

- [x] Bootstrapped Next.js + TypeScript + Tailwind app
- [x] Initialized local git repository
- [x] Initialized Supabase CLI project (`supabase/config.toml`)
- [x] Linked project to Vercel (`.vercel/project.json`)
- [x] Pulled Vercel development environment file (`.vercel/.env.development.local`)
- [x] Added Supabase client/server helpers
- [x] Added `.env.example` for required env vars
- [x] Added GitHub Actions CI workflow (`lint`, `typecheck`, `build`)

## Still Required (Manual)

- [ ] Create GitHub remote repository and push this project
- [ ] Connect GitHub repository to Vercel (for automatic preview/prod deployments)
- [ ] Create Supabase project (if not already created)
- [ ] Link local Supabase folder to hosted project (`npx supabase link --project-ref <ref>`)
- [ ] Add production and preview env vars in Vercel project settings:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
- [ ] (Optional) Add branch protection rules in GitHub for `main`

## Verification Commands

```bash
npm run lint
npm run typecheck
npm run build
```
