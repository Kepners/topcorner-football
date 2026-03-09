import Image from "next/image";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/content/blog";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Shooting Drills Blog",
  description:
    "Football training articles covering shooting drills, top-corner finishing, solo practice, and striker development.",
  path: "/blog",
  keywords: [
    "football shooting drills",
    "football shooting blog",
    "football training blog",
    "solo football training",
    "top corner football",
  ],
  image: "/images/products/goal-installed-1.jpg",
});

export default function BlogIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TopCorner football shooting blog",
    description:
      "Football shooting, finishing, and solo training articles published by TopCorner.football.",
    url: absoluteUrl("/blog"),
    inLanguage: "en-GB",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: absoluteUrl(post.heroImage),
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, blogSchema]} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Blog
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            Football shooting content built to rank and convert.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            These articles target finishing, shooting accuracy, and solo training
            topics so the site can build authority beyond the product page alone.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]"
            >
              <div className="relative aspect-[16/10]">
                <Image src={post.heroImage} alt={post.title} fill className="object-cover" />
              </div>
              <div className="space-y-5 p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  <span>{post.category}</span>
                  <span className="text-white/20">/</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                  {post.title}
                </h2>
                <p className="text-sm leading-7 text-[var(--color-mist)]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex rounded-full border border-[var(--color-gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
