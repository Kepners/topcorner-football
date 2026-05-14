import { productVariants, type ProductVariant } from "@/content/site";

export type ProductVariantId = ProductVariant["id"];

export type ProductGalleryImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  lightPanel?: boolean;
};

type ProductDetailContent = {
  eyebrow: string;
  metaDescription: string;
  offerLine: string;
  unitLine: string;
  savingsLine?: string;
  choiceLine: string;
  trustPoints: string[];
  hero: ProductGalleryImage;
  gallery: ProductGalleryImage[];
  crossSell: {
    href: string;
    label: string;
    title: string;
    body: string;
  };
};

export const productDetailContent: Record<ProductVariantId, ProductDetailContent> = {
  single: {
    eyebrow: "Single pack",
    metaDescription:
      "Shop the TopCorner single football corner target for GBP 10.00, solo finishing sessions, one live top-corner target, and fast setup on most football goals.",
    offerLine: "Reduced price for solo reps",
    unitLine: "One live corner for focused repetition",
    choiceLine:
      "Choose the single pack if you want one clear top-corner target, the lowest product price, and a setup that moves easily between solo sessions, home practice, and coach-led stations.",
    trustPoints: [
      "Fits most round and square goal posts",
      "GBP 5.00 UK delivery",
      "30-day returns support",
    ],
    hero: {
      src: "/images/products/real-installed-close-1.png",
      alt: "TopCorner single corner target fitted to a goal post corner, close-up outdoor shot",
    },
    gallery: [
      {
        src: "/images/products/real-installed-close-1.png",
        alt: "TopCorner single corner target fitted to a goal post corner, close-up outdoor shot",
      },
      {
        src: "/images/products/real-installed-close-2.png",
        alt: "Angled close-up of the TopCorner target attached to a goal post outdoors",
      },
      {
        src: "/images/products/real-installed-front.jpg",
        alt: "Front-facing view of the TopCorner target installed on a goal corner outdoors",
      },
      {
        src: "/images/products/real-installed-portrait.jpg",
        alt: "Full portrait view of the TopCorner target on a goal post at a grass pitch",
      },
      {
        src: "/images/products/real-pack-components.jpg",
        alt: "TopCorner single pack contents laid out - frame, net, straps, and carry bag",
        fit: "cover",
      },
      {
        src: "/images/products/real-detail-joint.png",
        alt: "Close-up detail of the TopCorner corner joint and strap fixing mechanism",
      },
      {
        src: "/images/products/real-product-studio.jpg",
        alt: "TopCorner single target product shot on a white studio background",
      },
    ],
    crossSell: {
      href: "/product/double",
      label: "View double pack",
      title: "Want both corners live?",
      body:
        "Move up to the double pack when you want near-post and far-post patterns ready in the same session, with the same GBP 10.00 per-target price.",
    },
  },
  double: {
    eyebrow: "Double pack",
    metaDescription:
      "Shop the TopCorner double corner target pack for GBP 20.00, coach-led sessions, both corners live at once, and cleaner group finishing drills.",
    offerLine: "Reduced price for coaches and group sessions",
    unitLine: "GBP 10.00 per target when you buy the double pack",
    choiceLine:
      "Choose the double pack if you want both corners active without resetting between patterns, the same GBP 10.00 per-target price, and a cleaner setup for coach-led finishing circuits.",
    trustPoints: [
      "Fits most round and square goal posts",
      "GBP 5.00 UK delivery",
      "30-day returns support",
    ],
    hero: {
      src: "/images/products/real-installed-close-1.png",
      alt: "TopCorner corner target fitted to a goal post corner, close-up outdoor shot",
    },
    gallery: [
      {
        src: "/images/products/real-installed-close-1.png",
        alt: "TopCorner corner target fitted to a goal post corner, close-up outdoor shot",
      },
      {
        src: "/images/products/real-installed-close-2.png",
        alt: "Angled close-up of the TopCorner target attached to a goal post outdoors",
      },
      {
        src: "/images/products/real-installed-front.jpg",
        alt: "Front-facing view of the TopCorner target installed on a goal corner outdoors",
      },
      {
        src: "/images/products/real-installed-portrait.jpg",
        alt: "Full portrait view of the TopCorner target on a goal post at a grass pitch",
      },
      {
        src: "/images/products/real-pack-components.jpg",
        alt: "TopCorner double pack contents laid out - two frames, nets, straps, and carry bag",
        fit: "cover",
      },
      {
        src: "/images/products/real-detail-joint.png",
        alt: "Close-up detail of the TopCorner corner joint and strap fixing mechanism",
      },
      {
        src: "/images/products/real-product-studio.jpg",
        alt: "TopCorner target product shot on a white studio background",
      },
    ],
    crossSell: {
      href: "/product/single",
      label: "View single pack",
      title: "Only need one live corner?",
      body:
        "The single pack keeps the setup lighter for solo sessions, smaller spaces, and players who want one clear target at the lower product price.",
    },
  },
};

export const productCompareRows = [
  {
    label: "Price",
    single: "GBP 10.00",
    double: "GBP 20.00",
  },
  {
    label: "In the pack",
    single: "1 target, 3 straps, carry bag",
    double: "2 targets, 6 straps, carry bag",
  },
  {
    label: "Best for",
    single: "Solo sessions and technical repetition",
    double: "Coach-led drills and striker groups",
  },
  {
    label: "Goal coverage",
    single: "One live corner at a time",
    double: "Both top corners active",
  },
  {
    label: "Value angle",
    single: "Lowest product price",
    double: "Same GBP 10.00 per target",
  },
  {
    label: "Delivery",
    single: "GBP 5.00 UK delivery",
    double: "GBP 5.00 UK delivery",
  },
];

export function isProductVariantId(value: string): value is ProductVariantId {
  return productVariants.some((variant) => variant.id === value);
}

export function getProductVariantById(variantId: string) {
  return productVariants.find((variant) => variant.id === variantId);
}
