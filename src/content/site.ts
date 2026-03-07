export type ProductVariant = {
  id: "single" | "double";
  name: string;
  shortName: string;
  priceLabel: string;
  priceValue: number;
  description: string;
  tagline: string;
  image: string;
  badge?: string;
  inventory: string;
  contents: string[];
  benefits: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "TopCorner.football",
  brand: "CalcioKx",
  company: "Rhinoceros Lime Ltd",
  domain: "topcorner.football",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://topcorner.football",
  description:
    "Football goal corner training targets for players and coaches who want sharper finishing, better shooting drills, and faster setup sessions.",
  defaultOgImage: "/images/brand/topcorner-og.jpg",
  supportEmail: "orders@topcorner.football",
  locale: "en_GB",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export const productVariants: ProductVariant[] = [
  {
    id: "single",
    name: "CalcioKx Single Corner Target",
    shortName: "Single",
    priceLabel: "GBP 25",
    priceValue: 25,
    description:
      "A single top-corner target for focused repetition on one side of the goal.",
    tagline: "One corner. One clear target. Fast reps.",
    image: "/images/products/product-single-nobg.png",
    inventory: "90 units available",
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
    priceLabel: "GBP 40",
    priceValue: 40,
    description:
      "A pair of corner targets that lets strikers and coaches work both sides of the goal without resetting.",
    tagline: "Both corners covered for realistic finishing patterns.",
    image: "/images/products/product-double-nobg.png",
    badge: "Best value",
    inventory: "40 units available",
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
  "Designed in the UK for fast, repeatable sessions",
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

export const reviews = [
  {
    title: "Placeholder review slot",
    quote:
      "Replace this with a short coach testimonial about setup speed and the quality of the finishing reps.",
  },
  {
    title: "Placeholder review slot",
    quote:
      "Replace this with a player quote about how the target makes top-corner practice feel more focused.",
  },
  {
    title: "Placeholder review slot",
    quote:
      "Replace this with a team or academy note on using the double pack for group shooting sessions.",
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
      "The current checkout flow is set up for United Kingdom delivery only, with a flat shipping rate.",
  },
];

export const productSpecs = [
  { label: "Material", value: "PVC frame with mesh net pocket" },
  { label: "Attachment", value: "Hook-and-loop strap system" },
  { label: "Goal fit", value: "Most standard round and square posts" },
  { label: "Setup time", value: "Under 2 minutes" },
  { label: "Origin", value: "Designed in the United Kingdom" },
  { label: "Shipping", value: "United Kingdom only" },
];

export const shippingFacts = [
  "Flat UK shipping rate configured in Stripe checkout",
  "Dispatch target: 1-2 working days after order confirmation",
  "Typical delivery window: 2-5 working days",
  "Checkout currently collects UK addresses only",
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
    title: "A niche product still needs a serious brand",
    body:
      "TopCorner.football is being built as a focused football training brand with clear product messaging, useful content, and clean buying flow.",
  },
];

export const blogLeadIn = {
  title: "Build authority through useful football training content",
  body:
    "The product page converts intent. The blog brings new intent into the site through practical shooting and finishing guides that link back to the training target.",
};
