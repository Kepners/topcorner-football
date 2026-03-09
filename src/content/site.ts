export type ProductVariant = {
  id: "single" | "double";
  name: string;
  shortName: string;
  sku: string;
  gtin13: string;
  priceLabel: string;
  priceValue: number;
  description: string;
  tagline: string;
  image: string;
  badge?: string;
  contents: string[];
  benefits: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductReview = {
  id: string;
  author: string;
  role: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  reviewedItem: string;
};

export const siteConfig = {
  name: "TopCorner.football",
  brand: "CalcioKx",
  brandSchema: "TopCorner",
  domain: "topcorner.football",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.topcorner.football",
  description:
    "Football corner targets and shooting training aids for players and coaches who want sharper finishing, better drills, and faster setup sessions.",
  defaultOgImage: "/images/brand/topcorner-og.jpg",
  customerDemoVideo: "/videos/customer-training-demo.mp4",
  supportEmail: "orders@topcorner.football",
  locale: "en_GB",
};

export const merchantReturnPolicy = {
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  returnWindowDays: 30,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};

export const productReviewSummary = {
  ratingValue: 4.8,
  reviewCount: 27,
};

export const productReviews: ProductReview[] = [
  {
    id: "review-2026-01",
    author: "Liam Carter",
    role: "Under-18 Coach, Northside FC",
    rating: 5,
    title: "Makes every striker rep clearer",
    body: "Our boys knew exactly where to finish because the target is obvious. It helped us build a cleaner finishing routine in 30-second blocks.",
    date: "2026-03-04",
    reviewedItem: "CalcioKx Single Corner Target",
  },
  {
    id: "review-2026-02",
    author: "Maya Singh",
    role: "Player, U19 Academy",
    rating: 5,
    title: "Simple setup, noticeable progress",
    body: "I can do solo sessions without wondering if I am improving. The target tells me if my approach and contact improved since the last set.",
    date: "2026-03-06",
    reviewedItem: "CalcioKx Double Corner Target",
  },
  {
    id: "review-2026-03",
    author: "Coach Daniel Price",
    role: "SFA Academy Lead Coach",
    rating: 4,
    title: "Good fit for coach-led sessions",
    body: "The double pack is practical for small groups. Players train both corners with much less reset time and better focus on finishing quality.",
    date: "2026-03-07",
    reviewedItem: "CalcioKx Double Corner Target",
  },
  {
    id: "review-2026-04",
    author: "Sophie Hale",
    role: "Parent, Weekend Striker",
    rating: 5,
    title: "Perfect for home practice",
    body: "Before this setup, my daughter blasted away without structure. Now she tracks top-corner reps, keeps better body shape, and is more consistent.",
    date: "2026-03-08",
    reviewedItem: "CalcioKx Single Corner Target",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/product", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export const supportLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
];

export const productVariants: ProductVariant[] = [
  {
    id: "single",
    name: "CalcioKx Single Corner Target",
    shortName: "Single",
    sku: "5065017325008",
    gtin13: "5065017325008",
    priceLabel: "GBP 25",
    priceValue: 25,
    description:
      "A single top-corner target for focused repetition on one side of the goal.",
    tagline: "One corner. One clear target. Fast reps.",
    image: "/images/products/product-single-nobg.png",
    contents: [
      "1 curved corner target",
      "3 hook-and-loop fixing straps",
      "Storage bag",
    ],
    benefits: [
      "Best for solo sessions and technical finishing work",
      "Fits round and square posts",
      "Ready in under 2 minutes",
    ],
  },
  {
    id: "double",
    name: "CalcioKx Double Corner Target",
    shortName: "Double",
    sku: "5065017325015",
    gtin13: "5065017325015",
    priceLabel: "GBP 40",
    priceValue: 40,
    description:
      "A pair of corner targets that lets strikers and coaches work both sides of the goal without resetting.",
    tagline: "Both corners covered for realistic finishing patterns.",
    image: "/images/products/product-double-nobg.png",
    badge: "Best value",
    contents: [
      "2 curved corner targets",
      "6 hook-and-loop fixing straps",
      "Storage bag",
    ],
    benefits: [
      "Best for striker groups and coached shooting circuits",
      "Train near-post and far-post finishing in one setup",
      "Cuts down reset time between patterns",
    ],
  },
];

export const heroHighlights = [
  "Built for strikers, coaches, and solo players",
  "Fits most football goals with strap-on setup",
  "Free UK shipping included at checkout",
];

export const problemPoints = [
  {
    title: "Most shooting practice rewards power, not placement",
    body:
      "Players can hit plenty of shots in training without ever learning what a true top-corner strike feels like.",
  },
  {
    title: "Coaches lose time resetting generic drills",
    body:
      "Cones and mannequins help the approach, but they do not give a clean visual target at the moment of contact.",
  },
  {
    title: "Solo sessions need instant feedback",
    body:
      "If the target is not obvious, repetition turns into guesswork and the session quality drops quickly.",
  },
];

export const solutionPoints = [
  "Creates an immediate visual cue in the hardest area for keepers to reach",
  "Attaches with straps, so there is no drilling, tying, or hardware setup",
  "Works for finishing drills, free kicks, and solo repetition",
  "Packs away quickly after training",
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Attach to the goal",
    body:
      "Place the target where the crossbar meets the upright and fix it with the supplied straps.",
  },
  {
    step: "02",
    title: "Run your finishing pattern",
    body:
      "Use it for one-touch finishing, cut-backs, curlers, or free-kick reps with a clear point of aim.",
  },
  {
    step: "03",
    title: "Track cleaner repetition",
    body:
      "Every rep has a visible standard, which makes session feedback sharper for both players and coaches.",
  },
];

export const homeBenefits = [
  "Improve shooting accuracy with a visible target zone",
  "Train with a setup that feels closer to match finishing",
  "Fits most football goals used by clubs, schools, and home setups",
  "Easy to install, remove, and store between sessions",
];

export const useCases = [
  {
    title: "Solo finishing",
    body:
      "Use one live corner for repeated curlers, laces finishes, and first-time strikes when you want one clear point of aim.",
  },
  {
    title: "Coach-led sessions",
    body:
      "Keep both sides of the goal active with the double pack for alternating near-post and far-post patterns.",
  },
  {
    title: "Portable training",
    body:
      "Pack it down quickly after training and bring it back out whenever you want a reliable target for clubs, schools, or garden sessions.",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "How do football corner targets work?",
    answer:
      "They attach to the top corner of the goal and give players a clear finishing zone to aim for during shooting drills, free kicks, and solo practice.",
  },
  {
    question: "Do corner targets improve shooting accuracy?",
    answer:
      "They help because the player is no longer aiming at a vague part of the goal. A fixed visual target makes repetition more deliberate and easier to coach.",
  },
  {
    question: "Will it fit my football goal?",
    answer:
      "The CalcioKx target is designed to fit most standard round and square football goals using adjustable straps.",
  },
  {
    question: "What age players can use it?",
    answer:
      "It works for youth players, teenagers, and adults. Coaches can scale the drill intensity and distance to suit the age group.",
  },
  {
    question: "Is this only for strikers?",
    answer:
      "No. It is useful for wingers, attacking midfielders, free-kick takers, and any player working on placement.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most users can attach the target and start training in under 2 minutes.",
  },
];

export const faqPageItems: FaqItem[] = [
  ...homeFaqs,
  {
    question: "Can coaches use it for team sessions?",
    answer:
      "Yes. The double pack is especially useful for team training because players can work both sides of the goal without constant resets.",
  },
  {
    question: "What is included with each order?",
    answer:
      "Each pack includes the target frame, fixing straps, and a storage bag. The double pack includes two targets.",
  },
  {
    question: "Where do you ship?",
    answer:
      "The current checkout flow is set up for United Kingdom delivery only, with free shipping included at checkout.",
  },
];

export const productSpecs = [
  { label: "Material", value: "PVC frame with mesh net pocket" },
  { label: "Attachment", value: "Hook-and-loop strap system" },
  { label: "Goal fit", value: "Most standard round and square posts" },
  { label: "Setup time", value: "Under 2 minutes" },
  { label: "Origin", value: "Designed in the United Kingdom" },
  { label: "Shipping", value: "Free United Kingdom shipping" },
];

export const shippingFacts = [
  "Free UK shipping is included at checkout",
  "Dispatch target: 1-2 working days after order confirmation",
  "Typical delivery window: 2-5 working days",
  "Checkout currently collects UK addresses only",
];

export const shippingHighlights = [
  {
    title: "Shipping cost",
    body: "Free UK shipping is included in checkout for both the single and double packs.",
  },
  {
    title: "Delivery area",
    body: "Checkout currently accepts United Kingdom delivery addresses only.",
  },
  {
    title: "Dispatch window",
    body: "Orders are typically packed and dispatched within 1-2 working days after payment.",
  },
];

export const returnsSupportSteps = [
  "Email orders@topcorner.football with your order number and the issue you need help with.",
  "Wait for support to confirm the next step before sending any product back.",
  "Use the same email address from checkout where possible so the order can be matched quickly.",
];

export const aboutPrinciples = [
  {
    title: "Specific practice beats vague repetition",
    body:
      "The brand is built around one idea: a player improves faster when the session gives a precise target and a repeatable standard.",
  },
  {
    title: "Setup should never kill training momentum",
    body:
      "If a tool takes too long to install, players and coaches stop using it. The product is designed to go on quickly and come off quickly.",
  },
  {
    title: "Football training gear should feel purposeful",
    body:
      "A focused training product earns its place when it solves a real problem and stays simple enough to use every week.",
  },
];

export const blogLeadIn = {
  title: "Training guides",
  body:
    "Read practical articles on shooting technique, finishing drills, and solo sessions built around sharper top-corner repetition.",
};
