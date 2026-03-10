import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { aboutPrinciples, siteConfig } from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About TopCorner Football",
  description:
    "Learn the story behind TopCorner.football and the TopCorner football corner target brand.",
  path: "/about",
  keywords: [
    "about topcorner football",
    "calciokx brand story",
    "football training brand",
  ],
  image: "/images/brand/topcorner-og.jpg",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About TopCorner.football",
    description:
      "Background on TopCorner.football and the TopCorner football corner target brand.",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      email: siteConfig.supportEmail,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, aboutSchema]} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              About
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
              A focused football training brand for better finishing sessions.
            </h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-[var(--color-mist)]">
            <p>
              {siteConfig.name} is built around a narrow but useful football
              training idea: players improve faster when they can see the exact
              finishing target and repeat the action with intent.
            </p>
            <p>
              The first product in the brand is the TopCorner football
              corner target, designed to make top-corner practice more obvious,
              more repeatable, and easier to coach. The wider site supports that
              product with practical content on shooting drills, solo training,
              and finishing technique.
            </p>
            <p>
              The aim is simple: offer football training gear and advice that
              feel specific, practical, and easy to trust for players, coaches,
              and parents looking for better finishing sessions.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {aboutPrinciples.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
            >
              <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                {principle.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                {principle.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Next step
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-mist)]">
            If the brand story makes sense, the next logical move is to see the
            product page and the supporting blog content working together.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/product"
              className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
            >
              View product
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cream)]"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
