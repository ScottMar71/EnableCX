# Structural Consistency Standards

This document defines project-wide conventions to keep UI behavior, accessibility, SEO, and architecture patterns consistent as the codebase grows.

## 1. Interactive Elements

- Use one interactive element per control.
- Do not nest `button` inside `a` or `a` inside `button`.
- For linked CTAs, use `Button` with `asChild` and pass a link-like child (`Link` or `TrackedLink`).

## 2. CTA and Analytics Pattern

- Use `TrackedLink` for user-navigation events that require analytics metadata.
- Use plain `Link` when analytics tracking is not required.
- Always include `eventName` and `location` for tracked links.

## 3. Form Field Accessibility

- Inputs must receive `aria-describedby` for hints/errors and `aria-invalid` on error.
- `FormField` owns label, hint, and error IDs.
- Controls rendered inside `FormField` must be a single control element (`Input`, `Select`, `Textarea`, or equivalent).

## 4. Environment Boundaries

- Use `getSupabasePublicEnv()` for browser/server-public clients.
- Use `getSupabaseAdminEnv()` only for trusted server paths.
- Never require admin secrets in UI/public code paths.

## 5. Styling and Token Usage

- Prefer semantic token classes (`text-brand-primary`, `bg-bg-subtle`, etc.) over hardcoded color values.
- Keep utility names aligned to shared token vocabulary in `globals.css`.
- Do not introduce one-off naming variants for existing surface/background tokens.

## 6. Metadata and SEO for Dynamic Routes

- Dynamic pages must provide:
  - `title`
  - `description`
  - canonical URL in `alternates`
  - `openGraph`
  - `twitter`
- Content-backed pages should keep `publishedDate` in source models.

## 7. Sitemap Freshness

- Avoid `new Date()` on every route during sitemap generation.
- Use stable content dates (`publishedDate`) or explicit site update timestamps.

## 8. Server Action Consistency

- Shared behavior (honeypot, validation, persistence, redirects) should be centralized.
- Route-specific behavior should be config-driven, not copy-pasted.

## 9. Validation Gate

Before merging structural changes, run:

```bash
npm run lint
npm run typecheck
npm run build
```

All three checks must pass.
