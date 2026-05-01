import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { marketingSiteLastModified } from "@/content/site-version";
import { resources } from "@/content/resources";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdatedAt = marketingSiteLastModified;
  const routes = [
    "",
    "/services",
    "/services/saas-training",
    "/services/ccaas-training",
    "/services/ucaas-training",
    "/case-studies",
    "/about",
    "/resources",
    "/resources/ramp-time-calculator",
    "/resources/training-plan-generator",
    "/resources/ai-capability-diagnostic",
    "/book-call",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];

  const staticRoutes = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: siteUpdatedAt,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((item) => ({
    url: absoluteUrl(`/case-studies/${item.slug}`),
    lastModified: new Date(item.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((item) => ({
    url: absoluteUrl(`/resources/${item.slug}`),
    lastModified: new Date(item.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...resourceRoutes];
}
