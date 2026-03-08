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
      "Shop the CalcioKx single corner target for solo finishing sessions, one live top-corner target, and fast setup on most football goals.",
    offerLine: "Best starting point for solo reps",
    unitLine: "One live corner for focused repetition",
    choiceLine:
      "Choose the single pack if you want the lower entry price and one fixed target for home practice, solo work, or coach-led finishing stations.",
    trustPoints: [
      "1 target, 3 fixing straps, and carry bag",
      "Free UK shipping included",
      "Dispatch target: 1-2 working days",
    ],
    hero: {
      src: "/images/products/hero-goal-target.jpg",
      alt: "CalcioKx single corner target attached to the top corner of a football goal",
    },
    gallery: [
      {
        src: "/images/products/hero-goal-target.jpg",
        alt: "CalcioKx single corner target attached to the top corner of a football goal",
      },
      {
        src: "/images/products/goal-target-angle.jpg",
        alt: "Angled football goal view showing the CalcioKx single target in place",
      },
      {
        src: "/images/products/goal-installed-close.jpg",
        alt: "Close installed view of the CalcioKx single target",
      },
      {
        src: "/images/products/product-single-angle.jpg",
        alt: "Studio product view of the CalcioKx single corner target",
        fit: "contain",
        lightPanel: true,
      },
      {
        src: "/images/products/product-detail-joint.jpg",
        alt: "Close-up of the CalcioKx frame joint and orange corner detail",
      },
      {
        src: "/images/products/product-components.jpg",
        alt: "CalcioKx single pack components and carry bag laid out on a light background",
        fit: "contain",
        lightPanel: true,
      },
      {
        src: "/images/products/product-straps.jpg",
        alt: "Close-up of the CalcioKx fixing straps and attachment points",
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
      "Shop the CalcioKx double corner target pack for coach-led sessions, both corners live at once, and better value for group finishing drills.",
    offerLine: "Best value for coach-led and group sessions",
    unitLine: "GBP 20 per target when you buy the double pack",
    savingsLine: "Save GBP 10 compared with buying two single packs",
    choiceLine:
      "Choose the double pack if you want both corners active without resetting between patterns, especially for striker groups and repeated finishing circuits.",
    trustPoints: [
      "2 targets, 6 fixing straps, and carry bag",
      "Free UK shipping included",
      "Dispatch target: 1-2 working days",
    ],
    hero: {
      src: "/images/products/goal-target-wide.jpg",
      alt: "Wide football pitch view with the CalcioKx corner target installed on the goal",
    },
    gallery: [
      {
        src: "/images/products/goal-target-wide.jpg",
        alt: "Wide football pitch view with the CalcioKx corner target installed on the goal",
      },
      {
        src: "/images/products/goal-installed-front.jpg",
        alt: "Front view of the CalcioKx target fitted to the goal from just outside the area",
      },
      {
        src: "/images/products/goal-installed-side.jpg",
        alt: "Side angle of the CalcioKx target fitted to the top corner of a goal",
      },
      {
        src: "/images/products/product-double-flat.jpg",
        alt: "CalcioKx double pack product shot on a white background",
        fit: "contain",
        lightPanel: true,
      },
      {
        src: "/images/products/goal-installed-4.jpg",
        alt: "Close installed view of the CalcioKx target on the goal frame",
      },
      {
        src: "/images/products/product-detail-joint.jpg",
        alt: "Close-up of the CalcioKx frame joint and orange corner detail",
      },
      {
        src: "/images/products/product-straps.jpg",
        alt: "Close-up of the CalcioKx fixing straps and attachment points",
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
