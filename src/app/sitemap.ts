import type { MetadataRoute } from "next";

import { blogPosts } from "@/content/blog";
import { guideSlugs } from "@/content/guides";
import { productVariants, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/guides",
    "/blog",
    "/faq",
    "/about",
    "/shipping",
    "/returns",
    "/uk-football-training-target",
  ];
  const guideRoutes = guideSlugs.map((slug) => `/${slug}`);
  const productRoutes = productVariants.map((variant) => `/product/${variant.id}`);
  const lastModified = new Date("2026-04-27");

  const staticEntries = [...staticRoutes, ...guideRoutes, ...productRoutes].map((path) => ({
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
