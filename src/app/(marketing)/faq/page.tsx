import JsonLd from "@/components/JsonLd";
import { faqPageItems } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Corner Target FAQ",
  description:
    "Frequently asked questions about the football corner target, including fit, ages, setup, shipping, and training use cases.",
  path: "/faq",
  keywords: [
    "football corner target faq",
    "how do football corner targets work",
    "do corner targets improve shooting accuracy",
  ],
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPageItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="mx-auto w-full max-w-5xl px-4 pb-18 pt-8 sm:px-6 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            FAQ
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
            Football corner target questions, answered.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
            This page is designed to help buyers and search engines understand
            the product clearly before purchase.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqPageItems.map((item) => (
            <details
              key={item.question}
              className="rounded-[1.8rem] border border-white/10 bg-[var(--color-panel)] p-6"
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
      </section>
    </>
  );
}
