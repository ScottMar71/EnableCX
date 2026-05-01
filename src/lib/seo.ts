import type { Metadata } from "next";
import { absoluteUrl } from "./site";

type StaticSeoInput = {
  path: string;
  title: string;
  description: string;
};

/** Canonical, Open Graph, and Twitter fields for static marketing routes. */
export function staticSeo({ path, title, description }: StaticSeoInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title} | EnableCX`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title: socialTitle,
      description,
      siteName: "EnableCX",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
