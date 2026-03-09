import type { MetadataRoute } from "next";

import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/product/single",
    "/product/double",
    "/guides",
    "/blog",
    "/how-to-hit-top-corner",
    "/football-shooting-drills",
    "/free-kick-training",
    "/solo-striker-training",
    "/improve-finishing-accuracy",
    "/faq",
    "/about",
    "/shipping",
    "/returns",
    "/uk-football-training-target",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-03-09"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const articleEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...articleEntries];
}
