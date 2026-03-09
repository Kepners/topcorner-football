import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { blogPosts, getAllPostSlugs, getPostBySlug } from "@/content/blog";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.heroImage,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter((item) => Boolean(item));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.heroImage)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.defaultOgImage),
      },
    },
    articleSection: post.category,
    inLanguage: "en-GB",
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema, articleSchema]} />

      <article className="mx-auto w-full max-w-5xl px-4 pb-18 pt-8 sm:px-6 lg:pb-24">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
            <Link href="/blog" className="transition hover:text-[var(--color-cream)]">
              Blog
            </Link>
            <span className="text-white/20">/</span>
            <span>{post.category}</span>
            <span className="text-white/20">/</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            {post.title}
          </h1>

          <p className="max-w-3xl text-base leading-8 text-[var(--color-mist)]">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] text-[var(--color-mist)]">
            <span>Published {formatDate(post.publishedAt)}</span>
            <span>Updated {formatDate(post.updatedAt)}</span>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10">
          <div className="relative aspect-[16/9]">
            <Image src={post.heroImage} alt={post.title} fill className="object-cover" />
          </div>
        </div>

        <div className="mt-12 space-y-6 text-base leading-8 text-[var(--color-mist)]">
          {post.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            Internal link
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
            Ready to turn these finishing ideas into a visible training setup?
            See the{" "}
            <Link href="/product" className="text-[var(--color-gold)]">
              CalcioKx corner target
            </Link>{" "}
            or browse the{" "}
            <Link href="/faq" className="text-[var(--color-gold)]">
              FAQ
            </Link>{" "}
            and the{" "}
            <Link href="/guides" className="text-[var(--color-gold)]">
              guide collection
            </Link>{" "}
            before you buy.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-[var(--color-mist)]">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="space-y-3 rounded-[1.6rem] border border-white/10 bg-[var(--color-panel)] p-6 text-sm leading-7 text-[var(--color-mist)]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>+ {bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            Keep reading
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => {
              if (!relatedPost) {
                return null;
              }

              return (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="rounded-[1.5rem] border border-white/10 bg-[var(--color-panel)] p-5 transition hover:border-[var(--color-gold)]/40"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                    {relatedPost.category}
                  </p>
                  <p className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                    {relatedPost.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
