# SEO launch checklist (EnableCX)

Use this after each major release or when onboarding search/social tooling. The numbered sections mirror the launch plan.

## 1. Production URL on Vercel

1. Open the project on [Vercel](https://vercel.com) → **Settings** → **Environment Variables**.
2. For **Production**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://enablecx.com` (no trailing slash)
3. (Recommended) Add the same for **Preview** if previews should generate correct absolute URLs when shared; production is required for canonicals and sitemap.
4. Redeploy production so clients pick up the value.

Local: copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_SITE_URL` if you test under another host.

## 2. Google Search Console

1. Add a **Domain** or **URL-prefix** property for `https://enablecx.com`.
2. Verify ownership using the **HTML tag** method:
   - In Vercel, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the `content` value only (the string inside `content="..."`).
   - Redeploy, then click **Verify** in Search Console.
3. Submit **Sitemaps** → `https://enablecx.com/sitemap.xml`.
4. Over the next days, check **Pages** and **Sitemaps** for crawl or indexing issues.

## 3. Social / share previews

After deploy, open each URL in the debugger and **Scrape again** / refresh where offered:

| Tool | URL |
|------|-----|
| Meta Sharing Debugger | https://developers.facebook.com/tools/debug/ |
| LinkedIn Post Inspector | https://www.linkedin.com/post-inspector/ |
| X (Twitter) Card Validator | https://cards-dev.twitter.com/validator |

Suggested URLs (adjust origin if needed):

- Homepage  
- `/services`  
- `/services/saas-training`  
- A resource article, e.g. `/resources/why-platform-adoption-stalls`  
- A case study, e.g. `/case-studies/travel-support-adoption-acceleration`  
- Default share image route: `/opengraph-image` (optional sanity check)

From the repo root you can print the same list with:

```bash
npm run seo:urls
# optional:
NEXT_PUBLIC_SITE_URL=https://enablecx.com npm run seo:urls
```

## 4. Preview deployment indexing

- **Default:** Preview deployments use `robots.txt` with `Disallow: /` so they are not indexed.
- To allow indexing for a **specific** preview experiment, set Vercel env **`ALLOW_PREVIEW_INDEXING`** = `true` for that environment, then redeploy. Remove it when done.

## 5. Favicon

- `public/favicon.ico` should exist for legacy clients and some crawlers.
- `public/favicon.svg` remains the preferred modern icon; `layout` references both.

Regenerate `.ico` from the SVG if the brand mark changes (requires PNG intermediates + e.g. `npx png-to-ico`).

## 6. Structured data and sitemap freshness

- **WebSite** + **Organization** JSON-LD: home page (`src/app/page.tsx`).
- **FAQPage** JSON-LD: main services listing and each service detail template (FAQs on-page).
- **Service** JSON-LD: each service detail page.
- **Article** / **FAQPage** where applicable: resource articles (`resources/[slug]`).
- **Hreflang:** not used; add only if you ship multiple locales.

When you change sitewide nav or many static pages, bump **`marketingSiteLastModified`** in `src/content/site-version.ts` so static URLs in `sitemap.xml` get an honest `lastmod`.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run seo:urls` | Print URLs for social debuggers |
