import Link from "next/link";

import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import ProductImageGallery from "@/components/ProductImageGallery";
import {
  getProductVariantById,
  productCompareRows,
  productDetailContent,
} from "@/content/products";
import {
  productReviews,
  faqPageItems,
  merchantReturnPolicy,
  productReviewSummary,
  productVariants,
  shippingFacts,
} from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Football Corner Targets",
  description:
    "Compare football corner target packs, including the TopCorner single and double goal targets for solo drills and coach-led sessions.",
  path: "/product",
  keywords: [
    "football corner target",
    "football goal target",
    "top bins target",
    "topcorner single corner target",
    "topcorner double corner target",
    "football training target packs",
  ],
  image: "/images/products/ckx-single-isolated.jpg",
});

function formatPrice(value: number) {
  return `GBP ${value}`;
}

export default function ProductPage() {
  const singlePack = getProductVariantById("single");
  const pageFaqItems = faqPageItems.slice(0, 3);
  const prioritizedVariants = [...productVariants].sort(
    (a, b) => Number(b.id === "double") - Number(a.id === "double")
  );

  if (!singlePack) {
    return null;
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
  ]);

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "TopCorner Corner Target Packs",
    description:
      "Browse the TopCorner single and double corner target packs for solo sessions, coach-led drills, and group finishing work.",
    url: absoluteUrl("/product"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: productVariants.map((variant, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/product/${variant.id}`),
        item: {
          "@type": "WebPage",
          "@id": absoluteUrl(`/product/${variant.id}`),
          url: absoluteUrl(`/product/${variant.id}`),
          name: variant.name,
          image: absoluteUrl(variant.image),
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqItems.map((item) => ({
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
      <JsonLd data={[breadcrumbSchema, productListSchema, faqSchema]} />

      <section
        id="shop"
        className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Products
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
              Choose your pack and check out.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-mist)]">
              Start with the single pack for the lowest entry price, or step up
              to the double pack for both top corners live at once and stronger
              value per target. This page is built to help first-time buyers
              choose fast.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
              <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-[var(--color-gold)]">
                {productReviewSummary.ratingValue}/5 rating
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[var(--color-mist)]">
                {productReviewSummary.reviewCount} launch reviews
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-300">
                In stock
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[var(--color-mist)]">
                Launch price ends when the current batch sells out
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Free UK shipping included",
              "Dispatch target: 1-2 working days",
              "30-day returns support",
              "Secure checkout with Stripe",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-white/10 bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-cream)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {prioritizedVariants.map((variant) => {
            const detail = productDetailContent[variant.id];
            const detailHref = `/product/${variant.id}`;
            const compareAtValue =
              variant.id === "double" ? singlePack.priceValue * 2 : null;
            const galleryImages = detail.gallery.slice(0, 5);
            const variantReviewCount = productReviews.filter((review) =>
              review.reviewedItem.toLowerCase().includes(variant.shortName.toLowerCase())
            ).length;

            return (
              <article
                key={variant.id}
                className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,71,0.08),transparent_28%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                      {detail.eyebrow}
                    </p>
                    <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-cream)]">
                      {variant.name}
                    </h2>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {variant.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-mist)]">
                      {variant.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {variant.badge ? (
                      <span className="gold-fill-text rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
                        {variant.badge}
                      </span>
                    ) : null}
                    {detail.savingsLine ? (
                      <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                        {detail.savingsLine}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="relative mt-6 grid gap-6 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.18em]">
                      <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-3 py-1.5 text-[var(--color-gold)]">
                        {productReviewSummary.ratingValue}/5 rated
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[var(--color-mist)]">
                        {variantReviewCount || 1} review{variantReviewCount === 1 ? "" : "s"}
                      </span>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-emerald-300">
                        In stock
                      </span>
                    </div>

                    <ProductImageGallery
                      images={galleryImages}
                      mainAspectClass="aspect-square"
                      thumbGridClassName="grid-cols-5"
                      panelClassName="rounded-[1.7rem] border border-white/10 bg-white/5"
                    />
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                        Price
                      </p>
                      <p className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                        {variant.priceLabel}
                      </p>
                      {compareAtValue ? (
                        <>
                          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                            2 targets for GBP 20 each
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]">
                            <span className="line-through">
                              {formatPrice(compareAtValue)}
                            </span>{" "}
                            as two single packs
                          </p>
                        </>
                      ) : (
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]">
                          Lowest starting price
                        </p>
                      )}
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-emerald-300">
                        In stock for immediate checkout
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]">
                        {detail.offerLine}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-sky)]">
                        {detail.unitLine}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                          Delivery
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
                          Free UK shipping with 1-2 day dispatch target.
                        </p>
                      </div>
                      <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                          Returns
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
                          {merchantReturnPolicy.returnWindowDays}-day support on eligible returns.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-cream)]">
                        Why pick this pack
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                        {detail.choiceLine}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {detail.trustPoints.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                          Included
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                          {variant.contents.map((item) => (
                            <li key={item}>+ {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                          Best for
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                          {variant.benefits.map((benefit) => (
                            <li key={benefit}>+ {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <BuyButton
                        productId={variant.id}
                        label={
                          variant.id === "double"
                            ? `Get double value - ${variant.priceLabel}`
                            : `Start with single - ${variant.priceLabel}`
                        }
                      />
                      <Link
                        href={detailHref}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                      >
                        View pack details
                      </Link>
                    </div>

                    <div className="grid gap-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-mist)] sm:grid-cols-3">
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">
                        Secure checkout
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">
                        Free UK delivery
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center">
                        30-day returns
                      </div>
                    </div>

                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-sky)]">
                      Dispatch target 1-2 working days. Delivery target 2-5 working days.
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                      Launch price ends when the current batch sells out
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Compare packs
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Fast side-by-side comparison.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-mist)]">
              Buy single if you want one clear target at the lowest price. Buy
              double if you want both corners live and the better value per
              target.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-panel)]">
            <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 px-6 py-5 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
              <div>Pack</div>
              <div>Single</div>
              <div>Double</div>
            </div>

            {productCompareRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[0.9fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-5 last:border-b-0"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                  {row.label}
                </div>
                <div className="text-sm leading-7 text-[var(--color-mist)]">
                  {row.single}
                </div>
                <div className="text-sm leading-7 text-[var(--color-mist)]">
                  {row.double}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Need a quick answer?
          </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              Simple buying rule.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
              <p>
                Choose <span className="text-[var(--color-cream)]">Single</span>{" "}
                if you want one live corner, the lowest starting price, and a
                pack that is easy to move between solo sessions.
              </p>
              <p>
                Choose <span className="text-[var(--color-cream)]">Double</span>{" "}
                if you want both corners ready at once, better value per target,
                and less resetting during finishing patterns.
              </p>
            </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product/single"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30"
            >
              View single pack
            </Link>
            <Link
              href="/product/double"
              className="gold-cta inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition hover:brightness-105"
            >
              View double pack
            </Link>
          </div>
        </div>

          <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Delivery and checkout
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {shippingFacts.map((fact) => (
                <li key={fact}>+ {fact}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Common questions
            </p>
            <div className="mt-6 space-y-4">
              {pageFaqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-cream)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
            <Link
              href="/faq"
              className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]"
            >
              Read the full FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
