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
  problemPoints,
  productVariants,
  siteConfig,
  solutionPoints,
  useCases,
} from "@/content/site";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Train Your Shot. Hit The Top Corner.",
  description:
    "Football training site for the CalcioKx corner target, with product details, session ideas, and guides for sharper finishing practice.",
  path: "/",
  keywords: [
    "football shooting drills",
    "football training drills",
    "top corner football",
    "improve shooting accuracy football",
    "football finishing drills",
    "solo football training",
  ],
});

export default function HomePage() {
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

  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl(siteConfig.defaultOgImage),
      brand: siteConfig.brand,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/blog?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    faqSchema,
  ];

  const heroMediaCards = [
    {
      title: "Installed view",
      body: "See how the target sits on the goal in a real outdoor setup before you take it into training.",
      src: "/images/products/goal-target-angle.jpg",
      alt: "Angled field photo of the TopCorner training target attached to a goal",
    },
    {
      title: "Distance test",
      body: "A wider field view gives a better sense of scale from the edge of the box and beyond.",
      src: "/images/products/goal-target-wide.jpg",
      alt: "Wide football pitch photo showing the TopCorner training target fixed to the goal",
    },
  ];

  return (
    <>
      <JsonLd data={siteSchema} />
      <SplashIntro />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(69,193,198,0.18),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,196,71,0.18),transparent_20%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-sky)]">
                Cinematic football training gear
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl lg:text-8xl">
                  Train Your Shot. Hit The Top Corner.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
                  Turn any goal into a professional shooting training setup with
                  a strap-on football corner target built for sharper finishing,
                  cleaner repetition, and faster sessions.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/product"
                  className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)] transition hover:brightness-105"
                >
                  Shop now
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                >
                  Read training guides
                </Link>
              </div>

              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Free UK shipping included at checkout
              </p>

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
                <div className="relative aspect-[5/4]">
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

            <article className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)]">
              <video
                className="aspect-[5/4] h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/products/hero-goal-target.jpg"
              >
                <source src={siteConfig.customerDemoVideo} type="video/mp4" />
              </video>
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                  Customer footage
                </p>
                <p className="text-sm leading-7 text-[var(--color-mist)]">
                  A quick session clip shows how the target looks and reacts
                  when players strike into it at speed.
                </p>
              </div>
            </article>

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
            Shooting accuracy drops when the target is vague.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Players usually get plenty of shooting reps. The problem is that
            many of those reps do not teach precise finishing. The ball gets
            hit, but the learning loop stays fuzzy.
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
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/products/goal-installed-3.jpg"
                alt="Close-up of the football corner target attached to a goal"
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
              CalcioKx turns the toughest scoring zone in football into a clear
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
                href="/product"
                className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-ink)]"
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

      <section id="shop" className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
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

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Real customer footage
            </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Show the target. Show the finish.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            Watch the target on the goal, see how the ball travels into the
            pocket, and get a clearer feel for the setup in a normal training
            environment.
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
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Training ideas
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            Three straightforward ways to use the target.
          </h2>
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
