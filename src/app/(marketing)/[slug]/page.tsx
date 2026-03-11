import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { getGuidePage, getGuidePath, guideSlugs } from "@/content/guides";
import { siteConfig } from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type GuideRouteSlug = {
  slug: string;
};

type GuideTopicPageProps = {
  params: Promise<GuideRouteSlug>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuideTopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    keywords: page.keywords,
    image: page.image,
    type: "article",
  });
}

export default async function GuideTopicPage({ params }: GuideTopicPageProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);

  if (!page) {
    notFound();
  }

  const relatedGuides = page.relatedSlugs
    .map((relatedSlug) => getGuidePage(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: page.title, path: `/${slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    image: [absoluteUrl(page.image)],
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/${slug}`),
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
    articleSection: page.label,
    inLanguage: "en-GB",
    keywords: page.keywords.join(", "),
    citation: page.resources?.map((resource) => resource.url),
  };

  const videoSchemas =
    page.videos?.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      uploadDate: page.updatedAt,
    })) ?? [];

  const utilityBlocks = [
    { label: "Quick plan", card: page.quickPlan },
    { label: "Practice block", card: page.drillBlock },
    { label: "Common misses", card: page.commonMistakes },
  ].filter((item) => Boolean(item.card));

  return (
    <>
      <JsonLd data={[breadcrumbSchema, articleSchema, ...videoSchemas]} />

      <article className="mx-auto w-full max-w-5xl px-4 pb-18 pt-8 sm:px-6 lg:pb-24">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
            <Link href="/guides" className="transition hover:text-[var(--color-cream)]">
              Guides
            </Link>
            <span className="text-white/20">/</span>
            <span>{page.label}</span>
            <span className="text-white/20">/</span>
            <span>{page.readTime}</span>
          </div>

          <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            {page.title}
          </h1>

          <p className="max-w-3xl text-base leading-8 text-[var(--color-mist)]">
            {page.description}
          </p>

          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] text-[var(--color-mist)]">
            <span>Published {formatDate(page.publishedAt)}</span>
            <span>Updated {formatDate(page.updatedAt)}</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {page.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.2rem] border border-white/10 bg-[var(--color-panel)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-6 text-base leading-8 text-[var(--color-mist)]">
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
          <div className="relative aspect-[16/9]">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,13,0.08),rgba(8,10,13,0.48))]" />
          </div>
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            In this guide
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {page.sections.map((section) => (
              <div
                key={section.heading}
                className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--color-cream)]"
              >
                {section.heading}
              </div>
            ))}
            {page.videos?.length ? (
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--color-cream)]">
                Watch the technique
              </div>
            ) : null}
            {page.resources?.length ? (
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--color-cream)]">
                Visual guides and references
              </div>
            ) : null}
          </div>
        </div>

        {utilityBlocks.length ? (
          <section className="mt-12 grid gap-5 lg:grid-cols-3">
            {utilityBlocks.map((item) =>
              item.card ? (
                <div
                  key={item.label}
                  className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-sky)]">
                    {item.label}
                  </p>
                  <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                    {item.card.title}
                  </h2>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
                    {item.card.items.map((entry) => (
                      <li key={entry}>+ {entry}</li>
                    ))}
                  </ul>
                </div>
              ) : null,
            )}
          </section>
        ) : null}

        <div className="mt-14 space-y-12">
          {page.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-[var(--color-mist)]"
                >
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

        {page.videos?.length ? (
          <section className="mt-14 rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
              Watch the technique
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
              Use these breakdowns to study shape, approach, and contact before
              the next session.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {page.videos.map((video) => (
                <article
                  key={video.youtubeId}
                  className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.02)]"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                      {video.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {page.resources?.length ? (
          <section className="mt-14 rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
              Visual Guides And References
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {page.resources.map((resource) => (
                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-5 transition hover:border-[var(--color-gold)]/40"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                    {resource.source}
                  </p>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            Continue learning
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
            Keep the sequence coherent by moving from this topic into the next
            technical block.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedGuides.map((relatedGuide) => (
              <Link
                key={relatedGuide.slug}
                href={getGuidePath(relatedGuide.slug)}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--color-panel)] p-5 transition hover:border-[var(--color-gold)]/40"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  {relatedGuide.label}
                </p>
                <p className="mt-3 font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                  {relatedGuide.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/product"
              className="gold-cta inline-flex justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em]"
            >
              Shop the target
            </Link>
            <Link
              href="/faq"
              className="inline-flex justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
