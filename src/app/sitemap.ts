import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/saas-training",
    "/services/ccaas-training",
    "/services/ucaas-training",
    "/case-studies",
    "/about",
    "/resources",
    "/book-call",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];

  return routes.map((route) => ({
    url: `https://enablecx.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
