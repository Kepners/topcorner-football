import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

const guideLinks = [
  {
    href: "/how-to-hit-top-corner",
    title: "How To Hit The Top Corner In Football",
    description:
      "A practical guide to shot shape, timing, and repeatable finishing cues.",
  },
  {
    href: "/football-shooting-drills",
    title: "10 Football Shooting Drills To Improve Accuracy",
    description:
      "A drill list for solo and coached sessions with target-based finishing.",
  },
  {
    href: "/solo-striker-training",
    title: "Solo Striker Training Routines",
    description:
      "Structured solo routines to improve first touch, movement, and finishing.",
  },
  {
    href: "/free-kick-training",
    title: "Free Kick Training Guide",
    description:
      "A practical guide to free-kick preparation, spin, and finishing under pressure.",
  },
  {
    href: "/improve-finishing-accuracy",
    title: "Improve Finishing Accuracy",
    description:
      "A practical system for building cleaner contact and decision-making in finite drill blocks.",
  },
  {
    href: "/blog/how-to-practice-football-shooting-at-home",
    title: "How To Practice Football Shooting At Home",
    description:
      "A home-drill setup for safe, repeatable high-quality shooting sessions.",
  },
];

export const metadata = buildMetadata({
  title: "Football Shooting Guides",
  description:
    "Football shooting and finishing guides for TopCorner users: top-corner finishing, drills, and structured solo training.",
  path: "/guides",
  keywords: [
    "football shooting guides",
    "finishing drills",
    "solo football training",
    "top corner shooting",
    "topcorner guides",
  ],
});

export default function GuidesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ]);

  const guidesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "TopCorner football training guides",
    description:
      "A guide collection covering football shooting, target work, and finishing improvement.",
    url: absoluteUrl("/guides"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guideLinks.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: guide.title,
          url: absoluteUrl(guide.href),
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, guidesSchema]} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
          Guides
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
          Build a sharper finishing game with practical football guides.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-mist)]">
          Use these guides to improve shot shape, consistency, and match-like
          reps. Start with a target, then move to repeatable drill blocks.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {guideLinks.map((guide) => (
            <article
              key={guide.href}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                Guide
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.1em] text-[var(--color-cream)]">
                {guide.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                {guide.description}
              </p>
              <Link
                href={guide.href}
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
              >
                Open guide
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
