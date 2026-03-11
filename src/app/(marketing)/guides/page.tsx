import Image from "next/image";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

const guideLinks = [
  {
    href: "/how-to-hit-top-corner",
    title: "How To Hit The Top Corner In Football",
    description:
      "A practical guide to shot shape, timing, and repeatable finishing cues.",
    image: "/images/products/goal-target-angle.jpg",
    alt: "Football goal with TopCorner target installed for top-corner finishing practice",
    label: "Finishing",
    readTime: "7 min read",
    highlights: ["Body shape", "Clean contact", "Target work"],
  },
  {
    href: "/football-shooting-drills",
    title: "10 Football Shooting Drills To Improve Accuracy",
    description:
      "A drill list for solo and coached sessions with target-based finishing.",
    image: "/images/products/goal-installed-4.jpg",
    alt: "Player using a goal target during a shooting drill session",
    label: "Drills",
    readTime: "9 min read",
    highlights: ["10 drill ideas", "Solo or coached", "Progression-based"],
  },
  {
    href: "/solo-striker-training",
    title: "Solo Striker Training Routines",
    description:
      "Structured solo routines to improve first touch, movement, and finishing.",
    image: "/images/products/goal-installed-1.jpg",
    alt: "Outdoor portrait view of a TopCorner target fitted to a goal",
    label: "Solo Training",
    readTime: "8 min read",
    highlights: ["Three-block session", "Movement patterns", "Target scoring"],
  },
  {
    href: "/free-kick-training",
    title: "Free Kick Training Guide",
    description:
      "A practical guide to free-kick preparation, spin, and finishing under pressure.",
    image: "/images/products/goal-target-wide.jpg",
    alt: "Wide football pitch photo showing a goal target used for free-kick practice",
    label: "Set Pieces",
    readTime: "6 min read",
    highlights: ["Approach rhythm", "Spin control", "Match-like reps"],
  },
  {
    href: "/improve-finishing-accuracy",
    title: "Improve Finishing Accuracy",
    description:
      "A practical system for building cleaner contact and decision-making in finite drill blocks.",
    image: "/images/products/goal-installed-close.jpg",
    alt: "Close-up of a goal target showing the upper-corner finishing zone",
    label: "Accuracy",
    readTime: "7 min read",
    highlights: ["Consistency checks", "Decision quality", "Session review"],
  },
  {
    href: "/blog/how-to-practice-football-shooting-at-home",
    title: "How To Practice Football Shooting At Home",
    description:
      "A home-drill setup for safe, repeatable high-quality shooting sessions.",
    image: "/images/products/product-single-flat.jpg",
    alt: "Single TopCorner target laid out flat for home training use",
    label: "Home Practice",
    readTime: "8 min read",
    highlights: ["Safe setup", "Limited-space drills", "Structured reps"],
  },
] as const;

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
  image: guideLinks[0].image,
});

export default function GuidesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ]);

  const featuredGuide = guideLinks[0];
  const remainingGuides = guideLinks.slice(1);

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
          image: absoluteUrl(guide.image),
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, guidesSchema]} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Guides
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            Practical shooting guides with real visual context.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Good guide hubs lead with images, clear outcomes, and articles that
            feel usable before the click. Start with technique, drills, solo
            routines, or home practice and open the guide that matches the
            session you want to run.
          </p>
        </div>

        <article className="mt-12 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={featuredGuide.image}
                alt={featuredGuide.alt}
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,13,0.14),rgba(8,10,13,0.55))]" />
            </div>

            <div className="space-y-6 p-7 sm:p-8">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Featured guide
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                  {featuredGuide.label}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-mist)]">
                  {featuredGuide.readTime}
                </span>
              </div>

              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.1em] text-[var(--color-cream)] sm:text-5xl">
                  {featuredGuide.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-mist)]">
                  {featuredGuide.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {featuredGuide.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={featuredGuide.href}
                  className="gold-cta inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition hover:brightness-105"
                >
                  Open featured guide
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                >
                  Shop the target
                </Link>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remainingGuides.map((guide) => (
            <article
              key={guide.href}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={guide.image}
                  alt={guide.alt}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-sky)]">
                    {guide.label}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-mist)]">
                    {guide.readTime}
                  </span>
                </div>

                <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                  {guide.title}
                </h2>
                <p className="text-sm leading-7 text-[var(--color-mist)]">
                  {guide.description}
                </p>

                <div className="grid gap-2">
                  {guide.highlights.map((item) => (
                    <p
                      key={item}
                      className="text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]"
                    >
                      + {item}
                    </p>
                  ))}
                </div>

                <Link
                  href={guide.href}
                  className="inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
                >
                  Open guide
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
