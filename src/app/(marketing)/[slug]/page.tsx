import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

type GuideRouteSlug = {
  slug: string;
};

type GuidePageConfig = {
  title: string;
  description: string;
  intro: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedSlugs: string[];
  keywords: string[];
  image: string;
};

const guideTopicPages: Record<string, GuidePageConfig> = {
  "how-to-hit-top-corner": {
    title: "How To Hit The Top Corner In Football",
    description:
      "Learn the approach, contact, and finishing rhythm needed to reach the top corner more consistently.",
    image: "/images/products/goal-installed-3.jpg",
    keywords: [
      "how to hit the top corner",
      "top corner football",
      "football finishing drills",
    ],
    intro: [
      "The top corner is a premium finish position. It is hardest because it forces the player to align shape, contact, and timing in one quick action.",
      "A visible target makes the process repeatable. You stop guessing and start testing one mechanical cue at a time.",
    ],
    sections: [
      {
        heading: "Build the setup before you swing",
        paragraphs: [
          "Your first cue is the run-up. Keep the approach controlled so your body can organize around the strike.",
          "Settle the support foot beside the ball and hold the foot shape long enough for the body to stay balanced.",
        ],
      },
      {
        heading: "Contact quality over raw force",
        paragraphs: [
          "A cleaner finish usually comes from stable plant and controlled ankle action, not from swinging harder.",
          "Train the same movement each rep, then increase challenge through speed and decision pressure.",
        ],
        bullets: [
          "Plant at the right distance",
          "Lock the ankle through contact",
          "Finish toward the intended corner window",
        ],
      },
    ],
    relatedSlugs: [
      "/improve-finishing-accuracy",
      "/football-shooting-drills",
      "/guides",
    ],
  },
  "football-shooting-drills": {
    title: "10 Football Shooting Drills To Improve Accuracy",
    description:
      "A practical list of structured finishing drills for technical improvement, consistency, and better match-like execution.",
    image: "/images/products/goal-installed-4.jpg",
    keywords: [
      "football shooting drills",
      "finishing drills",
      "football accuracy training",
    ],
    intro: [
      "Finishing improves when practice is designed as a sequence, not an endurance session.",
      "Use a fixed target, track score quality, and keep your reps short so quality never collapses.",
    ],
    sections: [
      {
        heading: "Progression from simple to pressured shots",
        paragraphs: [
          "Start with static targeting and clear rules. As technique settles, add movement and time pressure.",
          "Keep a simple scoreboard so improvement is visible across sessions.",
        ],
        bullets: [
          "Three blocks per session",
          "Reset time between reps",
          "Score only target-valid finishes",
        ],
      },
      {
        heading: "Keep technique auditable",
        paragraphs: [
          "Measure one variable at a time. If everything changes in the same set, you cannot improve your feedback loop.",
          "The easiest audit is approach shape, support foot, and final touch point.",
        ],
      },
    ],
    relatedSlugs: [
      "/how-to-hit-top-corner",
      "/solo-striker-training",
      "/free-kick-training",
    ],
  },
  "free-kick-training": {
    title: "Free Kick Training Guide",
    description:
      "Train free-kick mechanics with clear routines for spin, touch, and finish direction under realistic reps.",
    image: "/images/products/goal-target-angle.jpg",
    keywords: [
      "free kick training",
      "football free kick training",
      "finishing drills",
    ],
    intro: [
      "Most free-kick misses come from rushing the strike shape.",
      "A small number of precise reps is more useful than repeating weak, unguided attempts.",
    ],
    sections: [
      {
        heading: "Create repeatable delivery",
        paragraphs: [
          "Choose one setup and keep it stable before increasing variables.",
          "Track where the ball starts and where it finishes; small changes there usually explain most outcomes.",
        ],
      },
      {
        heading: "Use match-like constraints",
        paragraphs: [
          "Add distance, angle, and timing pressure only after the movement is repeatable.",
          "When the shot shape is stable, increase reps to add confidence under realistic effort.",
        ],
        bullets: [
          "One cue per rep",
          "Consistent take-off rhythm",
          "Score completion from each block",
        ],
      },
    ],
    relatedSlugs: [
      "/football-shooting-drills",
      "/improve-finishing-accuracy",
      "/how-to-hit-top-corner",
    ],
  },
  "solo-striker-training": {
    title: "Solo Striker Training",
    description:
      "A simple solo striker routine for improving contact quality, first-time finishing, and target discipline.",
    image: "/images/products/product-single-flat.jpg",
    keywords: [
      "solo football training",
      "striker training routine",
      "solo finishing drills",
    ],
    intro: [
      "Solo training only works when the session has structure.",
      "You should leave each session knowing exactly what improved and what was still inconsistent.",
    ],
    sections: [
      {
        heading: "A three-block solo template",
        paragraphs: [
          "Use a first-touch block, a target finish block, and a score-based challenge block.",
          "This format balances technical volume with cognitive pressure, which is what transfer depends on.",
        ],
      },
      {
        heading: "Track the right outcomes",
        paragraphs: [
          "Not every shot is equal. Track where quality breaks first: touch, body shape, or contact.",
          "When quality drops, reduce variable load before moving to higher speed work.",
        ],
        bullets: [
          "Keep sessions short and precise",
          "Only score clean target quality",
          "Finish with a pressure phase",
        ],
      },
    ],
    relatedSlugs: [
      "/improve-finishing-accuracy",
      "/football-shooting-drills",
      "/blog/how-to-practice-football-shooting-at-home",
    ],
  },
  "improve-finishing-accuracy": {
    title: "Improve Finishing Accuracy",
    description:
      "A structured approach to cleaner finishing through movement, contact consistency, and measurable shot standards.",
    image: "/images/products/product-double-flat.jpg",
    keywords: [
      "improve finishing accuracy",
      "football accuracy trainer",
      "finishing improvement",
    ],
    intro: [
      "Finishing accuracy improves when your drills force repeatable decision points.",
      "A target and a simple scoring rule are stronger than random volume alone.",
    ],
    sections: [
      {
        heading: "Design your accuracy checks",
        paragraphs: [
          "Always know the rule of success before a rep starts.",
          "Measure where and why the rep missed before counting it as progress.",
        ],
      },
      {
        heading: "Choose consistency over comfort",
        paragraphs: [
          "Keep your technical cues simple and constant until they become automatic.",
          "Then add variability for match-like resilience.",
        ],
        bullets: [
          "Set one primary target per rep",
          "Reduce noise in setup",
          "Review missed cues after the set",
        ],
      },
    ],
    relatedSlugs: [
      "/solo-striker-training",
      "/how-to-hit-top-corner",
      "/football-shooting-drills",
    ],
  },
};

function getGuidePage(slug: string): GuidePageConfig | undefined {
  return guideTopicPages[slug];
}

export function generateStaticParams() {
  return Object.keys(guideTopicPages).map((slug) => ({ slug }));
}

type GuideTopicPageProps = {
  params: Promise<GuideRouteSlug>;
};

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
  });
}

export default async function GuideTopicPage({ params }: GuideTopicPageProps) {
  const { slug } = await params;
  const page = getGuidePage(slug);

  if (!page) {
    notFound();
  }

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
    datePublished: "2026-03-09",
    dateModified: "2026-03-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/${slug}`),
    },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema, articleSchema]} />

      <article className="mx-auto w-full max-w-5xl px-4 pb-18 pt-8 sm:px-6 lg:pb-24">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Guides
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            {page.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--color-mist)]">
            {page.description}
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-8 text-[var(--color-mist)]">
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 space-y-12">
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

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
            Continue learning
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
            Use these next guides to keep your sequence coherent:
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.relatedSlugs.map((relatedPath) => (
              <Link
                key={relatedPath}
                href={relatedPath}
                className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
              >
                {relatedPath}
              </Link>
              ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/product"
              className="inline-flex justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]"
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
