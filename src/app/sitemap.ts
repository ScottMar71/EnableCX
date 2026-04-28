import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { resources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdatedAt = new Date("2026-04-28");
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

  const staticRoutes = routes.map((route) => ({
    url: `https://enablecx.com${route}`,
    lastModified: siteUpdatedAt,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((item) => ({
    url: `https://enablecx.com/case-studies/${item.slug}`,
    lastModified: new Date(item.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((item) => ({
    url: `https://enablecx.com/resources/${item.slug}`,
    lastModified: new Date(item.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...resourceRoutes];
}
