import type { MetadataRoute } from "next";

import { getAllPostSlugs } from "@/content/blog";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/product/single",
    "/product/double",
    "/blog",
    "/faq",
    "/about",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-03-07"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const articleEntries = getAllPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date("2026-03-07"),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...articleEntries];
}
