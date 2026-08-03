import type { MetadataRoute } from "next";
import { caseStudies } from "./data/case-studies";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.86,
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${SITE_URL}/work/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
  ];
}
