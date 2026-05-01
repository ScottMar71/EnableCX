import type { Metadata } from "next";

/**
 * Search Console “HTML tag” verification value only (not the full meta tag).
 * Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel + `.env.local`.
 */
export function getGoogleSiteVerification(): Metadata["verification"] | undefined {
  const token = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return token ? { google: token } : undefined;
}
