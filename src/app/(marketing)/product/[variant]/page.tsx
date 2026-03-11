import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BuyButton from "@/components/BuyButton";
import JsonLd from "@/components/JsonLd";
import ProductImageGallery from "@/components/ProductImageGallery";
import {
  getProductVariantById,
  isProductVariantId,
  productDetailContent,
} from "@/content/products";
import {
  faqPageItems,
  productReviews,
  productSpecs,
  productVariants,
  shippingFacts,
  siteConfig,
} from "@/content/site";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type ProductVariantPageProps = {
  params: Promise<{ variant: string }>;
};

function formatPrice(value: number) {
  return `GBP ${value}`;
}

export function generateStaticParams() {
  return productVariants.map((variant) => ({ variant: variant.id }));
}

export async function generateMetadata({
  params,
}: ProductVariantPageProps): Promise<Metadata> {
  const { variant } = await params;

  if (!isProductVariantId(variant)) {
    return {};
  }

  const product = getProductVariantById(variant);
  const detail = productDetailContent[variant];

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: `${product.shortName} Football Corner Target`,
    description: detail.metaDescription,
    path: `/product/${variant}`,
    keywords: [
      product.name.toLowerCase(),
      `${product.shortName.toLowerCase()} football corner target`,
      `${siteConfig.brand.toLowerCase()} ${variant} pack`,
      "football goal corner training target",
      "football corner target",
    ],
    image: detail.hero.src,
  });
}

export default async function ProductVariantPage({
  params,
}: ProductVariantPageProps) {
  const { variant } = await params;

  if (!isProductVariantId(variant)) {
    notFound();
  }

  const product = getProductVariantById(variant);

  if (!product) {
    notFound();
  }

  const detail = productDetailContent[variant];
  const otherVariantId = variant === "single" ? "double" : "single";
  const otherProduct = getProductVariantById(otherVariantId);
  const pageFaqItems = faqPageItems.slice(0, 4);
  const onlineStoreId = absoluteUrl("/#online-store");
  const shippingServiceId = absoluteUrl("/shipping#uk-standard-shipping");
  const returnPolicyId = absoluteUrl("/returns#standard-return-policy");
  const visibleReviews = productReviews.filter((review) =>
    review.reviewedItem.toLowerCase().includes(product.shortName.toLowerCase())
  );
  const variantRatingValue = visibleReviews.length
    ? Number(
        (
          visibleReviews.reduce((total, review) => total + review.rating, 0) /
          visibleReviews.length
        ).toFixed(1)
      )
    : null;
  const compareAtValue =
    variant === "double" ? (getProductVariantById("single")?.priceValue ?? 0) * 2 : null;

  if (!otherProduct) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: product.name, path: `/product/${variant}` },
  ]);

  const reviewItems = visibleReviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    name: review.title,
    reviewBody: review.body,
    publisher: {
      "@type": "Organization",
      name: "TopCorner.football",
    },
  }));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    gtin13: product.gtin13,
    url: absoluteUrl(`/product/${variant}`),
    description: detail.metaDescription,
    brand: {
      "@type": "Brand",
      name: "TopCorner",
    },
    category: "Soccer training equipment",
    image: detail.gallery.map((image) => ({
      "@type": "ImageObject",
      url: absoluteUrl(image.src),
      caption: image.alt,
    })),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/product/${variant}`),
      priceCurrency: "GBP",
      price: product.priceValue.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": onlineStoreId,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        hasShippingService: {
          "@id": shippingServiceId,
        },
      },
      hasMerchantReturnPolicy: {
        "@id": returnPolicyId,
      },
    },
    ...(variantRatingValue
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: variantRatingValue,
            reviewCount: visibleReviews.length,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    ...(reviewItems.length ? { review: reviewItems } : {}),
    additionalProperty: productSpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
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
      <JsonLd data={[breadcrumbSchema, productSchema, faqSchema]} />

      <section
        id="shop"
        className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
          <Link href="/product" className="transition hover:text-[var(--color-cream)]">
            Products
          </Link>
          <span className="text-white/20">/</span>
          <span>{detail.eyebrow}</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="space-y-5">
            <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-sky)]">
                  Product gallery
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]">
                  Tap thumbnails to inspect the pack
                </p>
              </div>

              <div className="mt-5">
                <ProductImageGallery
                  images={detail.gallery}
                  priority
                  mainAspectClass="aspect-[4/3]"
                  thumbGridClassName="grid-cols-4 sm:grid-cols-5"
                  panelClassName="rounded-[1.7rem] border border-white/10 bg-white/5"
                  showCaption
                />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                  {detail.eyebrow}
                </span>
                {product.badge ? (
                  <span className="gold-fill-text rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
                    {product.badge}
                  </span>
                ) : null}
                {detail.savingsLine ? (
                  <span className="rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    {detail.savingsLine}
                  </span>
                ) : null}
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                  In stock
                </span>
              </div>

              <h1 className="mt-5 font-display text-5xl uppercase leading-[0.9] tracking-[0.08em] text-[var(--color-cream)] sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-8 text-[var(--color-mist)]">
                {product.tagline}
              </p>

              <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  Price
                </p>
                <p className="mt-3 font-display text-5xl uppercase tracking-[0.08em] text-[var(--color-gold)]">
                  {product.priceLabel}
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
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]">
                  {detail.offerLine}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-sky)]">
                  {detail.unitLine}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-emerald-300">
                  Ready for immediate checkout
                </p>
              </div>

              <p className="mt-6 text-sm leading-7 text-[var(--color-mist)]">
                {detail.choiceLine}
              </p>

              <div className="mt-6 grid gap-3">
                {detail.trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--color-mist)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                    Included
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                    {product.contents.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-cream)]">
                    Best for
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-mist)]">
                    {product.benefits.map((item) => (
                      <li key={item}>+ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <BuyButton
                  productId={product.id}
                  label={
                    product.id === "double"
                      ? `Get double value - ${product.priceLabel}`
                      : `Start with single - ${product.priceLabel}`
                  }
                />
                <Link
                  href="/product"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cream)] transition hover:border-white/30 hover:bg-white/8"
                >
                  Back to all packs
                </Link>
              </div>

              <div className="mt-4 grid gap-2 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-mist)] sm:grid-cols-3">
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

              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--color-sky)]">
                Dispatch target 1-2 working days. Delivery target 2-5 working days.
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                Launch price ends when the current batch sells out
              </p>
            </div>
          </aside>
        </div>
      </section>

      {reviewItems.length ? (
        <section className="border-y border-white/10 bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Reviews
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
              What players report after training.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {visibleReviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-[1.7rem] border border-white/10 bg-[var(--color-panel)] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    {review.author}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-cream)]">
                    &ldquo;{review.body}&rdquo;
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                    {review.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-18 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
            Product details
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
            What you check before buying.
          </h2>
          <dl className="mt-8 divide-y divide-white/10">
            {productSpecs.map((spec) => (
              <div key={spec.label} className="grid gap-3 py-4 sm:grid-cols-[0.42fr_0.58fr]">
                <dt className="text-xs uppercase tracking-[0.24em] text-[var(--color-sky)]">
                  {spec.label}
                </dt>
                <dd className="text-sm leading-7 text-[var(--color-cream)]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Delivery
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-mist)]">
              {shippingFacts.map((fact) => (
                <li key={fact}>+ {fact}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[var(--color-panel)] p-7">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
              Support questions
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
          </div>
        </div>
      </section>

      <section className="bg-[rgba(255,255,255,0.02)] py-18 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.2rem] border border-white/10 bg-[var(--color-panel)] p-7 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-sky)]">
                  Also consider
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-[var(--color-cream)] sm:text-5xl">
                  {detail.crossSell.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-mist)]">
                  {detail.crossSell.body}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={detail.crossSell.href}
                  className="gold-cta inline-flex items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition hover:brightness-105"
                >
                  {detail.crossSell.label}
                </Link>
                <BuyButton
                  productId={otherProduct.id}
                  label={`Buy ${otherProduct.shortName} - ${otherProduct.priceLabel}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
