import Image from "next/image";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import SplashIntro from "@/components/SplashIntro";
import BuyButton from "@/components/BuyButton";
import { blogPosts } from "@/content/blog";
import {
  blogLeadIn,
  heroHighlights,
  homeBenefits,
  homeFaqs,
  howItWorksSteps,
  merchantReturnPolicy,
  productReviews,
  productReviewSummary,
  problemPoints,
  productVariants,
  siteConfig,
  solutionPoints,
  trustHighlights,
  useCases,
} from "@/content/site";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Corner Target Training Aid | TopCorner",
  description:
    "Football corner target training aid for sharper finishing, faster setup, and better shooting drills for players and coaches.",
  path: "/",
  keywords: [
    "football corner target",
    "football goal target",
    "top bins target",
    "football shooting drills",
    "football training drills",
    "football shooting target",
    "improve shooting accuracy football",
    "goal corner training aid",
  ],
});

export default function HomePage() {
  const featuredReviews = productReviews.slice(0, 3);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.defaultOgImage),
    email: siteConfig.supportEmail,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.supportEmail,
        areaServed: "GB",
        availableLanguage: ["en-GB"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-GB",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use the TopCorner football corner target",
    description:
      "Attach the target to the goal, run your finishing drill, and repeat with a visible top-corner target.",
    image: absoluteUrl("/images/products/goal-target-angle.jpg"),
    totalTime: "PT2M",
    step: howItWorksSteps.map((item) => ({
      "@type": "HowToStep",
      name: item.title,
      text: item.body,
      image: absoluteUrl("/images/products/goal-installed-3.jpg"),
    })),
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "TopCorner football training target demo",
    description:
      "Customer training footage showing the TopCorner football corner target attached to a goal during shooting practice.",
    thumbnailUrl: [absoluteUrl("/images/products/hero-goal-target.jpg")],
    contentUrl: absoluteUrl(siteConfig.customerDemoVideo),
    embedUrl: absoluteUrl("/"),
    uploadDate: "2026-03-07",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.defaultOgImage),
      },
    },
  };

  const heroMediaCards = [
    {
      title: "Installed view",
      body: "See how the target sits on the goal in a real outdoor setup before you take it into training.",
      src: "/images/products/goal-target-angle.jpg",
      alt: "Angled field photo of the TopCorner training target attached to a goal",
      aspectClass: "aspect-[5/4]",
    },
    {
      title: "Distance test",
      body: "A wider field view gives a better sense of scale from the edge of the box and beyond.",
      src: "/images/products/goal-target-wide.jpg",
      alt: "Wide football pitch photo showing the TopCorner training target fixed to the goal",
      aspectClass: "aspect-[5/4]",
    },
    {
      title: "Full frame setup",
      body: "A portrait shot shows the full installed target and post clearly, which reads better in a tall media frame.",
      src: "/images/products/goal-installed-1.jpg",
      alt: "Portrait photo of the TopCorner target fitted to the goal post in a full outdoor view",
      aspectClass: "aspect-[4/5]",
    },
  ];

  const competitorRows = [
    {
      feature: "Setup time",
      topCorner: "Under 2 minutes with straps",
      generic: "Often 10-15 minutes with ties",
    },
    {
      feature: "Attachment style",
      topCorner: "Hook-and-loop straps",
      generic: "Mixed tie or rope systems",
    },
    {
      feature: "Portability",
      topCorner: "Built for fast pack-down and reuse",
      generic: "Varies by product",
    },
    {
      feature: "Brand focus",
      topCorner: "Designed in the UK for finishing reps",
      generic: "General football accessories",
    },
  ];

  return (
    <>
      <JsonLd
        data={[organizationSchema, websiteSchema, faqSchema, howToSchema, videoSchema]}
      />
      <SplashIntro />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,193,198,0.18),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,196,71,0.18),transparent_20%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                Trusted by players, coaches, and football parents
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl lg:text-8xl">
                  The fastest way to train top-corner finishing.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                  Strap this target onto almost any goal in under 2 minutes and
                  turn every shooting session into precision finishing practice.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/product#shop"
                  className="gold-cta rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
                >
                  Get your target
                </Link>
                <Link
                  href="#watch"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                >
                  Watch it in action
                </Link>
              </div>

              <div className="rounded-[1.4rem] border border-[var(--color-gold)]/35 bg-[var(--color-gold)]/10 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Launch offer: free UK shipping plus early release pricing
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[var(--color-mist)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-3 rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                    Trusted by players and coaches
                  </p>
                  <p className="mt-2 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                    {productReviewSummary.ratingValue}/5
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    5-star buyer feedback
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
                    Based on {productReviewSummary.reviewCount} early reviews from coaches,
                    players, and football parents.
                  </p>
                </div>
                <div className="space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                  <p>Secure Stripe checkout</p>
                  <p>Free UK shipping with 2-5 working day delivery</p>
                  <p>{merchantReturnPolicy.returnWindowDays}-day returns support</p>
                  <p>Support email: {siteConfig.supportEmail}</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 lg:pt-8">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,196,71,0.15),transparent_40%)]" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/products/hero-goal-target.jpg"
                    alt="Hero product photo of the TopCorner training target strapped to the top corner of a goal"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-[rgba(8,10,13,0.78)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Fast setup. Visible target. Better reps.
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {heroMediaCards.map((card) => (
              <article
                key={card.src}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]"
              >
                <div className={`relative ${card.aspectClass}`}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                    {card.title}
                  </p>
                  <p className="text-sm leading-7 text-[var(--color-mist)]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}

            <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                Why it works
              </p>
              <p className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)]">
                Clear target. Cleaner finishing.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                The target gives players a fixed visual cue in the hardest area
                for keepers to reach, so every strike is easier to repeat,
                judge, and coach.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-cream)]">
                <li>+ Easier visual focus at full speed</li>
                <li>+ Better solo sessions without extra setup</li>
                <li>+ Useful for players, coaches, and club sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)]">
        <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-6 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-gold)]">
              2
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
              Pack options
            </p>
          </div>
          <div>
            <p className="font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-gold)]">
              2 min
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
              Typical setup time
            </p>
          </div>
          <div>
            <p className="font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-gold)]">
              Free
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
              UK shipping
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            The problem
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Most shooting practice fails because players aim at nothing.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Players hear &ldquo;aim for the top corner,&rdquo; but many training
            reps still happen without a fixed strike point. That creates wasted shots,
            inconsistent feedback, and slower technical progress.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {problemPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
            >
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
              Before
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
              Vague shooting sessions
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              <li>+ Players chase power more than placement</li>
              <li>+ Coaches spend extra time resetting drills</li>
              <li>+ Solo reps turn into guesswork quickly</li>
            </ul>
          </article>
          <article className="rounded-[1.8rem] border border-[var(--color-gold)]/30 bg-[linear-gradient(180deg,rgba(255,196,71,0.1),rgba(255,255,255,0.03))] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
              After
            </p>
            <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
              Target-led finishing reps
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-cream)]">
              <li>+ Every strike has a visible top-corner cue</li>
              <li>+ Repetition quality is easier to track and coach</li>
              <li>+ Sessions stay structured from first rep to last</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative self-start overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="relative aspect-square">
              <Image
                src="/images/products/ckx-single-installed-square.jpg"
                alt="Square installed view of the football corner target attached to the goal"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              The solution
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Meet the Top Corner Training Target.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              TopCorner turns the toughest scoring zone in football into a clear
              coaching cue. The setup is quick, the product is portable, and
              the training feedback is immediate.
            </p>

            <div className="mt-8 grid gap-4">
              {solutionPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.3rem] border border-white/10 bg-white/5 p-4"
                >
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-gold)] text-xs font-bold text-[var(--color-ink)]">
                    +
                  </span>
                  <p className="text-sm leading-7 text-[var(--color-cream)]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/product#shop"
                className="gold-cta rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]"
              >
                Browse packs
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)]"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Browse the packs
          </p>
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            One product family. Two pack options.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-[var(--color-mist)]">
            Choose the setup that matches your training environment. The single
            pack is ideal for focused solo work. The double pack keeps both
            corners live for team and striker sessions.
          </p>
          <div>
            <Link
              href="/product"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
            >
              Compare all packs
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {productVariants.map((variant) => (
            <article
              key={variant.id}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              {variant.badge ? (
                <span className="absolute right-6 top-6 rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]">
                  {variant.badge}
                </span>
              ) : null}

              <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-white">
                  <Image
                    src={variant.image}
                    alt={variant.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                      {variant.shortName} pack
                    </p>
                    <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.1em] text-[var(--color-cream)]">
                      {variant.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                      {variant.description}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
                        Price
                      </p>
                      <p className="font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                        {variant.priceLabel}
                      </p>
                      {variant.id === "double" ? (
                        <>
                          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                            Save GBP 10 vs two singles
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]">
                            Most players choose this pack
                          </p>
                        </>
                      ) : null}
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                      Free UK shipping
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-[var(--color-mist)]">
                    {variant.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <span className="text-[var(--color-gold)]">+</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      href={`/product/${variant.id}`}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                    >
                      View pack
                    </Link>
                    <BuyButton
                      productId={variant.id}
                      label={`Buy ${variant.shortName} - ${variant.priceLabel}`}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              How it works
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              A 3-step setup built for fast sessions.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {howItWorksSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-gold)]">
                  {item.step}
                </p>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.1em] text-[var(--color-cream)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Benefits
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Built to improve the quality of every rep.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              The goal is not just more shots. The goal is better shots, better
              coaching feedback, and a training setup players actually want to
              use again.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {homeBenefits.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-white/10 bg-[var(--color-panel)] p-6 text-sm leading-7 text-[var(--color-cream)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="watch"
        className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Real customer footage
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Show the target. Show the finish.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              Watch how quickly the target installs, how clear the cue looks in
              a full-size goal, and how the strike quality improves when the
              corner is no longer vague.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <video
              className="aspect-video h-full w-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
              poster="/images/products/hero-goal-target.jpg"
            >
              <source src={siteConfig.customerDemoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/products/goal-installed-2.jpg"
                alt="Player striking the ball towards a TopCorner target in the upper goal corner"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              The goal moment
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              The feeling every striker wants.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-mist)]">
              There is no better sound in football than striking the top
              corner clean. Train for that moment with a target players can see
              clearly at full speed, then repeat it until it becomes habit.
            </p>
            <Link
              href="/product#shop"
              className="gold-cta mt-8 inline-flex rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
            >
              Train for top bins
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Who this is for
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Built for players, coaches, and parents.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            The same target works across home sessions, academy drills, and
            team training blocks. Pick the pack size based on how many corners
            you want active.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.title}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-7"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {useCase.title}
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--color-cream)]">
                {useCase.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
                Trust signals
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
                Clear buyer signals before checkout.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
                Buyers should not have to infer how delivery, returns, support, and
                credibility work. This section makes the commercial basics explicit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-white/10 bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-cream)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Why TopCorner
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Built to beat generic corner nets.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            If you are comparing options, the biggest differences are setup
            speed, attachment design, and how easily the target fits into real
            training sessions.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
          <div className="grid grid-cols-[0.85fr_1fr_1fr] border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
            <div>Feature</div>
            <div>TopCorner</div>
            <div>Generic nets</div>
          </div>
          {competitorRows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-[0.85fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-5 last:border-b-0"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                {row.feature}
              </div>
              <div className="text-sm leading-7 text-[var(--color-cream)]">
                {row.topCorner}
              </div>
              <div className="text-sm leading-7 text-[var(--color-mist)]">
                {row.generic}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
                FAQ
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
                Common questions before you order.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
                From goal fit to setup time and shipping, these are the details
                most players, parents, and coaches want to know first.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)]"
              >
                Open full FAQ
              </Link>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.5rem] border border-white/10 bg-[var(--color-panel)] p-6"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold leading-7 text-[var(--color-cream)]">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
          Real feedback
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
          What players and coaches are saying.
        </h2>
        <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
          Practical feedback from training sessions, built for a realistic finishing
          process rather than generic claims.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                {review.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]">
                &ldquo;{review.body}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            {blogLeadIn.title}
          </p>
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Drills, technique, and finishing ideas.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[var(--color-mist)]">
            {blogLeadIn.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                  {post.category}
                </p>
                <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                  {post.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-mist)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
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
