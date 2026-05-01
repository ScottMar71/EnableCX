#!/usr/bin/env node
/**
 * Prints absolute URLs to paste into sharing debuggers after deploy.
 * Usage: NEXT_PUBLIC_SITE_URL=https://enablecx.com node scripts/print-seo-urls.mjs
 */
const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://enablecx.com").replace(/\/$/, "");
const paths = [
  "/",
  "/services",
  "/services/saas-training",
  "/resources/why-platform-adoption-stalls",
  "/case-studies/travel-support-adoption-acceleration",
  "/opengraph-image",
];
console.log("Paste into Meta Sharing Debugger / X card validator / LinkedIn Post Inspector:\n");
for (const p of paths) {
  console.log(base + p);
}
