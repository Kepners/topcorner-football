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
      "Shop the TopCorner single corner target for solo finishing sessions, one live top-corner target, and fast setup on most football goals.",
    offerLine: "Lower entry price for solo reps",
    unitLine: "One live corner for focused repetition",
    choiceLine:
      "Choose the single pack if you want one clear top-corner target, the lowest entry price, and a setup that moves easily between solo sessions, home practice, and coach-led stations.",
    trustPoints: [
      "Fits most round and square goal posts",
      "Free UK shipping included",
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
        "Move up to the double pack when you want near-post and far-post patterns ready in the same session, with a GBP 10 saving against two singles.",
    },
  },
  double: {
    eyebrow: "Double pack",
    metaDescription:
      "Shop the TopCorner double corner target pack for coach-led sessions, both corners live at once, and better value for group finishing drills.",
    offerLine: "Best value for coaches and group sessions",
    unitLine: "GBP 20 per target when you buy the double pack",
    savingsLine: "Save GBP 10 compared with buying two single packs",
    choiceLine:
      "Choose the double pack if you want both corners active without resetting between patterns, stronger value per target, and a cleaner setup for coach-led finishing circuits.",
    trustPoints: [
      "Fits most round and square goal posts",
      "Free UK shipping included",
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
        "The single pack keeps the setup lighter for solo sessions, smaller spaces, and players who want one clear target at the lower starting price.",
    },
  },
};

export const productCompareRows = [
  {
    label: "Price",
    single: "GBP 25",
    double: "GBP 40",
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
    single: "Lower starting price",
    double: "Save GBP 10 vs two singles",
  },
  {
    label: "Delivery",
    single: "Free UK shipping",
    double: "Free UK shipping",
  },
];

export function isProductVariantId(value: string): value is ProductVariantId {
  return productVariants.some((variant) => variant.id === value);
}

export function getProductVariantById(variantId: string) {
  return productVariants.find((variant) => variant.id === variantId);
}
