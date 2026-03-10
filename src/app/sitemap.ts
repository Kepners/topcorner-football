import type { MetadataRoute } from "next";

import { blogPosts } from "@/content/blog";
import { productVariants, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/product/corner-target",
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
  const productRoutes = productVariants.map((variant) => `/product/${variant.id}`);
  const lastModified = new Date("2026-03-10");

  const staticEntries = [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency:
      path === "" || path === "/product" || path.startsWith("/product/")
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/product" || path.startsWith("/product/")
          ? 0.9
          : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const articleEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticEntries, ...articleEntries];
}
