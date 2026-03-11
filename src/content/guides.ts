export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideChecklist = {
  title: string;
  items: string[];
};

export type GuideVideo = {
  title: string;
  youtubeId: string;
  description: string;
};

export type GuideResource = {
  title: string;
  source: string;
  url: string;
  description: string;
};

export const guideSlugs = [
  "how-to-hit-top-corner",
  "football-shooting-drills",
  "solo-striker-training",
  "free-kick-training",
  "corner-kick-olimpico-guide",
  "penalty-top-corner-guide",
  "improve-finishing-accuracy",
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export type GuidePageConfig = {
  slug: GuideSlug;
  title: string;
  description: string;
  label: string;
  readTime: string;
  intro: string[];
  sections: GuideSection[];
  relatedSlugs: GuideSlug[];
  keywords: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  quickPlan?: GuideChecklist;
  drillBlock?: GuideChecklist;
  commonMistakes?: GuideChecklist;
  videos?: GuideVideo[];
  resources?: GuideResource[];
  publishedAt: string;
  updatedAt: string;
};

const guideTopicPages: Record<GuideSlug, GuidePageConfig> = {
  "how-to-hit-top-corner": {
    slug: "how-to-hit-top-corner",
    title: "How To Hit The Top Corner In Football",
    description:
      "Learn the angle, contact, and training cues that make top-corner finishes more repeatable in real match actions.",
    label: "Finishing",
    readTime: "8 min read",
    image: "/images/products/goal-installed-3.jpg",
    imageAlt:
      "TopCorner target installed on a goal for top-corner finishing practice",
    keywords: [
      "how to hit the top corner",
      "top corner football",
      "football finishing drills",
      "running shot top corner",
    ],
    highlights: ["Approach angle", "Curl or drive", "Video breakdown"],
    intro: [
      "Top-corner finishing is not a power contest. It is a geometry problem: the angle into the ball, the plant foot position, the body stack, and the strike shape all have to agree before the shot leaves the foot.",
      "Players improve faster when they separate the finish types. A wrapped shot to the far upper corner is a different action from a laces strike that lifts quickly, so the rep should tell you which version you are training before the run-up starts.",
    ],
    quickPlan: {
      title: "Top-corner checklist",
      items: [
        "Approach on a slight angle so the hips can open into the target instead of crashing straight through the ball.",
        "Plant beside the ball with the chest stacked, not leaning back toward the bar.",
        "Choose curl or laces before the touch arrives so the ankle shape stays consistent.",
        "Score only clean upper-window finishes, not lucky shots that happen to rise.",
      ],
    },
    sections: [
      {
        heading: "Set the angle before you strike",
        paragraphs: [
          "Most players miss high because the approach is rushed and the support foot lands late. Arrive with a calm final stride so the plant foot can sit next to the ball and the body can stay over the contact point.",
          "A top-corner finish usually comes from a slight entry angle rather than a straight sprint. That angle gives the hips room to turn and helps the follow-through travel toward the corner instead of across the ball.",
        ],
      },
      {
        heading: "Know whether the rep is curl or lift",
        paragraphs: [
          "The classic far-top-corner shot is a wrapped finish with the inside of the foot. It works best when the body opens, the ankle stays firm, and the follow-through wraps around the ball instead of stabbing at it.",
          "A quicker top-corner strike uses the laces with less bend and more direct lift. That version is useful when the keeper is set late or the shooting lane is more central, but it only stays under the bar if the chest stays controlled.",
        ],
        bullets: [
          "Use curl when you have space to bend the shot around the keeper.",
          "Use a firmer laces strike when the lane is central and the release must be quicker.",
          "Do not switch finish type halfway through the run-up.",
        ],
      },
      {
        heading: "Train running shots, not just dead balls",
        paragraphs: [
          "The best transfer comes from moving into the strike. Work on cut-ins from the flank, half-turn finishes after a bounce pass, and second-touch shots after a check-away movement so the top-corner rep still looks like football.",
          "A visible upper target is useful here because it tells you whether the movement pattern still led to the correct finish window. Without that target, players often settle for any shot that goes high instead of a clean upper-corner action.",
        ],
      },
      {
        heading: "Track hit rate instead of highlight shots",
        paragraphs: [
          "One clean top-bins strike looks great, but it tells you very little. A better measure is a small set where every rep starts from the same pattern and only true upper-corner finishes count.",
          "If the ball keeps drifting wide, review the line of the plant foot and the exit of the follow-through. If it keeps sailing over, the body is usually losing its stack or the player is chasing extra pace.",
        ],
      },
    ],
    drillBlock: {
      title: "20-ball running-shot block",
      items: [
        "5 cut-inside shots bent to the far upper corner.",
        "5 two-touch shots attacked with the laces from a more central lane.",
        "5 weaker-foot reps into the same top-corner window.",
        "5 pressure reps where only first-time or second-touch shots count.",
      ],
    },
    commonMistakes: {
      title: "Common misses and fixes",
      items: [
        "Leaning back: reduce pace and keep the chest stacked over contact.",
        "Plant foot too far away: tighten the final step so the strike can stay compact.",
        "Opening the hips too early: decide the corner first and let the shape build late.",
        "Training only static shots: add movement patterns before adding more power.",
      ],
    },
    videos: [
      {
        title: "How I Curve A Soccer Ball Top Corner",
        youtubeId: "xlGW7kIWGg0",
        description:
          "Close-up study material on body lean, plant-foot distance, and wrapping the ball into the far upper corner.",
      },
    ],
    resources: [
      {
        title: "How to Shoot a Football: Step-by-Step",
        source: "Adidas",
        url: "https://www.adidas.co.uk/blog/949467-how-to-shoot-a-football-step-by-step",
        description:
          "Visual shooting guide built around corner targeting, body shape, and repeatable finishing mechanics.",
      },
    ],
    relatedSlugs: [
      "football-shooting-drills",
      "solo-striker-training",
      "improve-finishing-accuracy",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "football-shooting-drills": {
    slug: "football-shooting-drills",
    title: "10 Football Shooting Drills To Improve Accuracy",
    description:
      "A drill ladder that moves from clean technical reps into match-speed finishing so placement holds up under pressure.",
    label: "Drills",
    readTime: "9 min read",
    image: "/images/products/goal-installed-4.jpg",
    imageAlt: "Football shooting drill setup using a target in the upper corner",
    keywords: [
      "football shooting drills",
      "finishing drills",
      "football accuracy training",
      "shooting session plan",
    ],
    highlights: ["10 drill ideas", "Movement to finish", "Simple scoring"],
    intro: [
      "A useful shooting session does not try to teach every finish at once. It layers one demand onto the next: stable contact, movement into the strike, then decisions under pressure.",
      "The easiest way to keep drill quality high is to grade the reps. Players should know before the ball arrives what counts as success and what gets reset, otherwise volume replaces learning very quickly.",
    ],
    quickPlan: {
      title: "Drill ladder",
      items: [
        "Open with static target work so the first block is about contact quality, not chaos.",
        "Move into two-touch and first-time patterns that force body organization.",
        "Add wide-to-central and near-post or far-post decisions once the strike is stable.",
        "Finish with a points game so the session ends under pressure, not under boredom.",
      ],
    },
    sections: [
      {
        heading: "Drills 1 to 3: Build the strike",
        paragraphs: [
          "Start with static top-corner repetition, then move into a two-touch finish across the body, followed by one-touch cut-back finishing. These three drills teach the player how the plant foot, body line, and contact point work together.",
          "The first block should feel clean, not exhausting. Stop the set while technique is still honest so the later drills inherit good mechanics rather than tired guesses.",
        ],
        bullets: [
          "Static top-corner repetition",
          "Two-touch finish across the body",
          "One-touch cut-back finishing",
        ],
      },
      {
        heading: "Drills 4 to 7: Add movement and shape",
        paragraphs: [
          "Next, work through a curling finish into the far top corner, a near-post power finish, a check-away and finish pattern, and a first-time volley or half-volley set. This section teaches players to match the finish to the arrival pattern.",
          "Good coaching here is about cue selection. Pick one or two reminders such as body angle or early foot preparation rather than shouting every correction in the same rep.",
        ],
        bullets: [
          "Curling finish into the far top corner",
          "Near-post power with control",
          "Check-away movement into a second-touch strike",
          "Volley or half-volley target work",
        ],
      },
      {
        heading: "Drills 8 to 10: Pressure, rebounds, and scoreboards",
        paragraphs: [
          "Finish with rebound work, turn-and-shoot patterns, and a scoreboard challenge. These drills are less about perfect technique in isolation and more about keeping placement while the brain is busy.",
          "The scoreboard matters because it changes player behaviour. Once every shot has a cost, the rep starts to look much more like the final moments of a match.",
        ],
        bullets: [
          "Rebound finishing off a second ball",
          "Turn and shoot after contact or a bounce pass",
          "Scoreboard challenge with target-only points",
        ],
      },
      {
        heading: "Audit the session after the final set",
        paragraphs: [
          "Do not review the session by asking whether players struck the ball hard. Review it by asking where quality broke first: first touch, body shape, or final contact. That gives you the real entry point for the next training block.",
          "If accuracy vanished when speed increased, reduce the tempo before adding more reps. If accuracy held up until the pressure game, the next step is to keep the same technical demand and increase the decision load.",
        ],
      },
    ],
    drillBlock: {
      title: "45-minute accuracy session",
      items: [
        "10 minutes of static and two-touch accuracy work.",
        "15 minutes of movement-based finishing from different entry angles.",
        "10 minutes of first-time and rebound finishing.",
        "10 minutes of a target-only scoreboard challenge.",
      ],
    },
    commonMistakes: {
      title: "What ruins drill quality",
      items: [
        "Too many balls in one set: technique turns into fatigue management.",
        "No scoring rule: players stop caring where the finish actually lands.",
        "Changing the setup every rep: no feedback loop ever gets established.",
        "Only training the strong foot: the drill becomes a comfort routine, not development.",
      ],
    },
    relatedSlugs: [
      "how-to-hit-top-corner",
      "solo-striker-training",
      "free-kick-training",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "solo-striker-training": {
    slug: "solo-striker-training",
    title: "Solo Striker Training Routines",
    description:
      "A solo session template that keeps first touch, finishing, and pressure work connected instead of turning training into random shooting.",
    label: "Solo Training",
    readTime: "8 min read",
    image: "/images/products/goal-installed-1.jpg",
    imageAlt: "Outdoor portrait view of a TopCorner target fitted to a goal",
    keywords: [
      "solo football training",
      "striker training routine",
      "solo finishing drills",
      "solo striker session",
    ],
    highlights: ["Three-block session", "First touch", "Pressure finish"],
    intro: [
      "Solo striker work only pays off when the session has structure. Without that structure, players drift into the easiest finish they already trust and never expose the parts of the action that still break down.",
      "A simple three-block format works well because it moves from touch preparation into finishing, then into a pressure game that forces concentration when the legs are tired.",
    ],
    quickPlan: {
      title: "Solo session template",
      items: [
        "Open with a first-touch block that sets body shape for the shot.",
        "Move into a target-finishing block with both corners and both feet.",
        "End with a score-based pressure phase so the last reps are mentally honest.",
        "Write down what broke first before you leave the pitch.",
      ],
    },
    sections: [
      {
        heading: "Block one: Prepare the body with the first touch",
        paragraphs: [
          "Use bounce passes off a wall, self-served tosses, or a rebound board to create a realistic first touch. The touch should not be random; it should place the body into the finish you are about to train.",
          "Forwards need to feel how the touch changes the finish. A touch across the body opens the far corner, while a touch into the line may invite a near-post or quick-lift strike instead.",
        ],
      },
      {
        heading: "Block two: Train target discipline",
        paragraphs: [
          "The middle block is where the finishing work lives. Alternate between far-top-corner curl, near-post power, and one or two first-time patterns so the session covers more than one kind of finish.",
          "A visible target stops solo players from drifting into vague shots. If the rep has a clear corner and the ball misses it, the feedback is immediate and useful.",
        ],
        bullets: [
          "Split reps between both top corners.",
          "Use your weaker foot in the same session, not only on a different day.",
          "Count only clean finishes into the chosen scoring window.",
        ],
      },
      {
        heading: "Block three: Add consequence",
        paragraphs: [
          "Finish with a challenge that has a score and a cost. For example, give yourself ten balls to hit six clean targets, or restart the set every time two misses arrive in a row.",
          "That consequence changes how the shot feels. Suddenly the last rep matters, which is exactly why it transfers better than endless casual striking.",
        ],
      },
      {
        heading: "Use the notes to design the next session",
        paragraphs: [
          "The session should finish with a short review. If the touch was clean but the shot floated, your next session needs more strike work. If the strike was solid but the first touch kept closing the angle, go back to the setup phase.",
          "This makes solo training cumulative. Each session tells the next one where to start instead of resetting to zero.",
        ],
      },
    ],
    drillBlock: {
      title: "30-minute solo striker session",
      items: [
        "8 minutes of first-touch preparation from two different angles.",
        "12 minutes of target-based finishing into both top corners.",
        "5 minutes of weaker-foot or first-time variation work.",
        "5 minutes of a score-based pressure challenge.",
      ],
    },
    commonMistakes: {
      title: "Solo-session traps",
      items: [
        "Too much ball carrying and not enough finishing rhythm.",
        "No record of hit rate, so the player cannot see whether accuracy improved.",
        "Only taking favourite finishes from the same side.",
        "Finishing the session when the player is warm instead of ending under pressure.",
      ],
    },
    relatedSlugs: [
      "football-shooting-drills",
      "how-to-hit-top-corner",
      "improve-finishing-accuracy",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "free-kick-training": {
    slug: "free-kick-training",
    title: "Free Kick Training Guide",
    description:
      "Train free kicks with a stable setup, clearer strike options, and video-backed reference material for bending the ball into dangerous corners.",
    label: "Set Pieces",
    readTime: "8 min read",
    image: "/images/products/goal-target-angle.jpg",
    imageAlt: "Goal target installed for free-kick and finishing practice",
    keywords: [
      "free kick training",
      "football free kick training",
      "how to score free kicks",
      "free kick technique",
    ],
    highlights: ["Ball-strike map", "Wall pressure", "Embedded study video"],
    intro: [
      "Good free-kick training is built on repeatability. If the run-up changes every time, or the player keeps mixing a curled shot with a driven shot, the session produces drama but very little improvement.",
      "The smarter approach is to map one free-kick solution at a time. Pick a ball position, one strike type, and one finish window, then add wall pressure and keeper pressure after the movement is stable.",
    ],
    quickPlan: {
      title: "Free-kick routine",
      items: [
        "Read the angle, distance, and wall before deciding what kind of ball you are trying to produce.",
        "Use the same starting point for a full block so the body can learn one strike shape.",
        "Track where the ball starts relative to the wall and where it finishes relative to the corner.",
        "Change only one variable between sets: angle, distance, strike type, or target.",
      ],
    },
    sections: [
      {
        heading: "Choose the shot before the run-up",
        paragraphs: [
          "A free kick near the box usually gives you three realistic options: bend around the wall, lift over it, or drive through a side of it with less shape. The mistake is trying to discover the answer in the final step.",
          "Start by deciding which lane you are attacking. Once that lane is fixed, the body can organise around it and the repetition becomes meaningful.",
        ],
      },
      {
        heading: "Map the contact and start line",
        paragraphs: [
          "The key feedback in free-kick work is not just whether the ball scored. It is where the ball began and how it travelled. A shot that starts too central will ask for impossible bend, while a shot that starts too wide may never threaten the frame.",
          "That is why visual targets help. They make the final window obvious, so you can see whether the ball needed more height, earlier bend, or a cleaner start line around the wall.",
        ],
        bullets: [
          "Keep the same run-up angle for a full set.",
          "Note whether the miss was high, wide, or blocked early.",
          "Work one strike type per block before mixing deliveries.",
        ],
      },
      {
        heading: "Add wall and goalkeeper pressure only after the strike is stable",
        paragraphs: [
          "The wall makes the rep realistic, but it also hides the real problem if introduced too early. First prove you can hit the lane without pressure, then add mannequins, a live wall, or a keeper to test whether the movement still holds.",
          "Once the basic strike is stable, rotate the ball position from left, central, and right free-kick spots. The goal is not to take hundreds of weak shots. It is to make a smaller number of honest, scoreable attempts.",
        ],
      },
      {
        heading: "Review one adjustment at a time",
        paragraphs: [
          "If a whole set keeps missing in the same way, resist the urge to change everything. Adjust the starting line first, then the plant foot, then the contact point. That order keeps the session logical.",
          "Players improve faster when the coaching cue stays narrow. One stable cue repeated across twelve accurate attempts beats twelve conflicting instructions every time.",
        ],
      },
    ],
    drillBlock: {
      title: "12-ball free-kick block",
      items: [
        "4 reps from the left channel curled toward the far upper corner.",
        "4 reps from a central lane lifted over the wall.",
        "4 reps from the right channel with the same strike type for comparison.",
        "Record how many attempts enter the intended lane before judging goals alone.",
      ],
    },
    commonMistakes: {
      title: "What usually breaks first",
      items: [
        "Rushing the final stride and losing the plant-foot line.",
        "Changing shot type every rep, so no repeatable feel ever develops.",
        "Introducing the wall too early and hiding the strike issue.",
        "Judging success by goals only instead of by start line and finish window.",
      ],
    },
    videos: [
      {
        title: "How to Shoot a Football Free Kick",
        youtubeId: "NzvweK_yLws",
        description:
          "Reference video embedded by Soccer Inter-Action that shows a full free-kick striking action and basic setup cues.",
      },
    ],
    resources: [
      {
        title: "How to Take a Free Kick in Football",
        source: "Soccer Inter-Action",
        url: "https://soccerinteraction.com/how-to-take-a-free-kick-in-football",
        description:
          "Step-by-step free-kick article with an embedded video and visual explanation of approach, wall, and strike shape.",
      },
      {
        title: "Master the Art: How to Take Free Kicks in Football",
        source: "The Titans FA",
        url: "https://thetitansfa.com/master-the-art-how-to-take-free-kicks-in-football/",
        description:
          "Long-form guide covering wall setup, goalkeeper position, and different free-kick scenarios.",
      },
      {
        title: "How to Take Free Kicks Like the Pros",
        source: "Looking For Soccer",
        url: "https://looking-for-soccer.com/en-gb/take-free-kicks-like-pros/",
        description:
          "Technical breakdown of body shape, contact, and how to guide the ball toward the top corners.",
      },
    ],
    relatedSlugs: [
      "corner-kick-olimpico-guide",
      "how-to-hit-top-corner",
      "improve-finishing-accuracy",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "corner-kick-olimpico-guide": {
    slug: "corner-kick-olimpico-guide",
    title: "How To Take A Corner Kick And Train For An Olimpico",
    description:
      "Improve inswinging corners, dangerous near-post delivery, and the technique needed to train the rare direct goal from a corner.",
    label: "Set Pieces",
    readTime: "8 min read",
    image: "/images/products/goal-target-wide.jpg",
    imageAlt:
      "Wide football pitch photo showing a goal target used for crossing and corner-kick practice",
    keywords: [
      "corner kick technique",
      "how to score an olimpico",
      "olimpico corner guide",
      "inswinging corner practice",
    ],
    highlights: ["Inswing path", "Near-post threat", "Olimpico setup"],
    intro: [
      "Most corner kicks should be trained as delivery first and spectacle second. If a player cannot repeat a dangerous inswinger into the six-yard corridor, they have not yet earned the direct-from-corner attempt.",
      "An Olimpico is simply the extreme end of an inswinging corner: same body idea, tighter window, and much less margin. That is why the best way to train it is to build from controlled delivery rather than from wild direct shots.",
    ],
    quickPlan: {
      title: "Corner routine",
      items: [
        "Choose the foot and side that create an inswinging path into the goal area.",
        "Fix one run-up and one ball placement before changing the target.",
        "Attack the six-yard corridor first, then narrow the target toward the frame.",
        "Only attempt direct goals after repeated delivery into the same dangerous lane.",
      ],
    },
    sections: [
      {
        heading: "Start with the right side and spin",
        paragraphs: [
          "For a direct threat, the ball usually needs to swing toward goal rather than away from it. That means choosing the corner side and striking foot that naturally create an inswinging delivery.",
          "A good inswinger does not just hang in the air. It enters the goalkeeper's space with pace and late movement, forcing a decision between claiming, punching, or protecting the line.",
        ],
      },
      {
        heading: "Train delivery before you train the direct goal",
        paragraphs: [
          "The first job is to hit the target corridor between the front of the six-yard box and the far-post zone. That corridor punishes weak defending and teaches the player how much whip the ball really needs.",
          "Once the player can repeat that delivery, narrow the finish window higher and closer to goal. That is the bridge into Olimpico work: same swing idea, but the ball now has to threaten the keeper and the frame at once.",
        ],
        bullets: [
          "Use an inswinging foot and side combination.",
          "Measure whether the ball enters the dangerous corridor, not just whether a teammate could head it.",
          "Reduce the target only after delivery quality is repeatable.",
        ],
      },
      {
        heading: "Build the Olimpico through target windows",
        paragraphs: [
          "A direct corner goal needs the ball to arrive above defenders, below or tight to the bar, and inside the keeper's reach zone. That is a tiny window, which is why the target should be trained in layers.",
          "Start by aiming to whip the ball toward the far upper side of the goal area. Then progress to a smaller upper window once the strike consistently bends late enough to stay dangerous.",
        ],
      },
      {
        heading: "Use small sets and compare outcomes",
        paragraphs: [
          "Corner delivery is sensitive to tiny changes in contact and wind, so short sets work better than endless attempts. A set of five to ten balls lets the player compare shape, height, and swing without losing the feel of the previous rep.",
          "Review whether misses were flat, overhit, or too close to the keeper. Those misses ask for different adjustments, so lumping them together slows improvement.",
        ],
      },
    ],
    drillBlock: {
      title: "15-ball corner ladder",
      items: [
        "5 inswingers aimed through the six-yard corridor.",
        "5 balls aimed tighter to the far-post upper channel.",
        "3 direct Olimpico attempts from the same setup.",
        "2 pressure balls where the player gets only one attempt after a reset.",
      ],
    },
    commonMistakes: {
      title: "Why direct-corner attempts fail",
      items: [
        "The delivery is too flat, so the keeper claims it easily.",
        "The player changes the run-up trying to create magic instead of repeating the whip.",
        "The ball starts too close to goal and never has space to swing.",
        "Too many direct attempts arrive before the basic inswinger is stable.",
      ],
    },
    resources: [
      {
        title: "How to Take a Corner Kick Like a Pro",
        source: "Unisport",
        url: "https://www.unisportstore.com/guides/12027-how-to-take-a-corner-kick-like-a-pro-watch-the-video-at-unisport/",
        description:
          "Visual guide to inswinging and outswinging corners with body-position cues and video-led demonstrations.",
      },
      {
        title: "The Crazy Physics That Make It Possible to Score Right From the Corner Kick",
        source: "WIRED",
        url: "https://www.wired.com/2014/06/the-crazy-physics-that-make-it-possible-to-score-right-from-the-corner-kick/",
        description:
          "Helpful background on why direct corner goals are rare and what kind of swing the ball needs.",
      },
    ],
    relatedSlugs: [
      "free-kick-training",
      "how-to-hit-top-corner",
      "football-shooting-drills",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "penalty-top-corner-guide": {
    slug: "penalty-top-corner-guide",
    title: "How To Hit Top-Corner Penalties",
    description:
      "A practical penalty routine for players who want to attack the top corner without turning every kick into a crossbar challenge.",
    label: "Set Pieces",
    readTime: "7 min read",
    image: "/images/products/goal-installed-front.jpg",
    imageAlt:
      "Front view of a football goal with a visible upper-corner target for penalty practice",
    keywords: [
      "top corner penalty",
      "how to score penalties football",
      "penalty kick technique",
      "penalty top bins",
    ],
    highlights: ["Commit early", "Controlled lift", "Pressure routine"],
    intro: [
      "Top-corner penalties look unstoppable because they attack the hardest save zone, but the margin is tiny. The difference between a clean finish and a miss over the bar is usually not bravery. It is how calmly the player controls the body through contact.",
      "That is why the best penalty routines are quiet and narrow. Pick one corner, build one repeatable approach, and only raise the ball as high as your technique can still support under pressure.",
    ],
    quickPlan: {
      title: "Penalty routine",
      items: [
        "Choose the corner before the whistle or before the walk-back ends.",
        "Use the same run-up rhythm so the body does not rush the final step.",
        "Attack an upper side-net window, not the crossbar itself.",
        "Earn the highest top-corner attempts after side-net accuracy is stable.",
      ],
    },
    sections: [
      {
        heading: "Commit to the corner early",
        paragraphs: [
          "The quickest way to ruin a penalty is to keep the decision open until the last second. A top-corner penalty needs a cleaner strike shape than a safer side-net penalty, so the mind has to be settled before the body starts the final steps.",
          "That commitment does not mean rushing. It means the player can let the approach feel calm because the decision is already made.",
        ],
      },
      {
        heading: "Lift the ball with control, not panic",
        paragraphs: [
          "A top-corner penalty still needs a compact strike. The ball should be guided into the upper window with a firm ankle and controlled body line, not hacked upward in a moment of tension.",
          "Most players should first master the upper side-net area rather than the absolute highest inch of the goal. That is still very hard for the keeper, and it gives you usable margin under the bar.",
        ],
        bullets: [
          "Keep the run-up rhythm consistent.",
          "Aim for the upper side-net channel rather than the underside of the bar.",
          "Do not chase more height until the previous height is repeatable.",
        ],
      },
      {
        heading: "Train the ladder, not only the headline kick",
        paragraphs: [
          "Penalty practice should work in levels: side-net drives first, upper-third finishes next, then true top-corner attempts. That ladder protects technique and makes the final progression honest.",
          "If the player cannot keep four out of five balls inside the same upper-third window, they are not ready to live on the top-corner edge yet.",
        ],
      },
      {
        heading: "Finish with pressure balls",
        paragraphs: [
          "The final penalty or two in a set should carry consequence. Restart the set after two misses, or give yourself only one ball to hit the chosen top window. Pressure changes the run-up and exposes whether the routine is really stable.",
          "This is also where a visible target helps. It keeps the aim specific, which is crucial when the heart rate rises and the player is tempted to hit and hope.",
        ],
      },
    ],
    drillBlock: {
      title: "10-penalty progression",
      items: [
        "4 penalties into the side-net channel at comfortable height.",
        "3 penalties into the upper third of the same side.",
        "2 penalties aimed at the true top-corner window.",
        "1 final match ball with only a clean upper-window finish counting.",
      ],
    },
    commonMistakes: {
      title: "Typical penalty breakdowns",
      items: [
        "Changing corner choice halfway through the run-up.",
        "Trying to score in the exact angle of the bar instead of the wider upper window.",
        "Leaning back because the player wants extra lift.",
        "Practising only calm penalties and never testing the routine under consequence.",
      ],
    },
    resources: [
      {
        title: "How to Score a Penalty",
        source: "WikiHow",
        url: "https://www.wikihow.com/Score-a-Penalty",
        description:
          "Visual step-by-step guide with pictures covering plant foot, body lean, and common penalty cues.",
      },
      {
        title: "How to Take a Penalty Kick",
        source: "Online Soccer Academy",
        url: "https://www.onlinesocceracademy.com/soccer-training-videos/shooting/how-to-take-a-penalty-kick",
        description:
          "Penalty routine reference that is useful for building a calmer approach before adding top-corner height.",
      },
    ],
    relatedSlugs: [
      "improve-finishing-accuracy",
      "how-to-hit-top-corner",
      "solo-striker-training",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
  "improve-finishing-accuracy": {
    slug: "improve-finishing-accuracy",
    title: "Improve Finishing Accuracy",
    description:
      "A repeatable system for cleaner placement that links decision-making, body shape, and target discipline in every session.",
    label: "Accuracy",
    readTime: "7 min read",
    image: "/images/products/product-double-flat.jpg",
    imageAlt: "Double pack product image representing finishing accuracy training",
    keywords: [
      "improve finishing accuracy",
      "football accuracy trainer",
      "finishing improvement",
      "shooting consistency football",
    ],
    highlights: ["Accuracy audit", "Decision quality", "Review loop"],
    intro: [
      "Finishing accuracy improves when the player knows what success looks like before the shot starts. That sounds obvious, but many sessions still ask for vague power and then hope placement appears afterwards.",
      "A better approach is to build accuracy around repeatable decision points: what corner is live, what finish type is being trained, and what technical cue is under review in that set.",
    ],
    quickPlan: {
      title: "Accuracy audit",
      items: [
        "Define the target and finish type before the rep begins.",
        "Keep the first set simple enough that clean contact is possible.",
        "Record why the miss happened instead of calling every miss a bad shot.",
        "Only add speed or pressure when the previous level is stable.",
      ],
    },
    sections: [
      {
        heading: "Start with one visible target",
        paragraphs: [
          "Accuracy training gets diluted when the player treats the entire goal as good enough. One visible target narrows the eye and makes the body solve a more precise problem.",
          "That precision matters because it links the shot mechanics to an outcome the player can actually judge. The rep becomes a feedback loop instead of a generic strike.",
        ],
      },
      {
        heading: "Keep the cue narrow",
        paragraphs: [
          "A session improves faster when one technical cue owns the set. That cue might be plant-foot distance, early body shape, or a firmer ankle through contact, but it should stay stable long enough for the player to feel the change.",
          "If the coach or player keeps switching cues every rep, the misses stop being useful. The body never gets the chance to repeat a corrected action.",
        ],
      },
      {
        heading: "Use misses as categories",
        paragraphs: [
          "Not all misses mean the same thing. A shot high over the bar usually points to posture or overhit contact. A shot that starts outside the post might point to setup angle or plant-foot line.",
          "Once misses are grouped, the next session becomes clearer. You can return to the most common failure first instead of trying to solve everything in one block.",
        ],
      },
      {
        heading: "Progress from clean reps to football reps",
        paragraphs: [
          "Accuracy should not stay static forever. Once the player can repeat the target from a stable setup, add movement, first-touch variation, and score pressure so the placement survives real actions.",
          "This progression is where tools like a visible corner target become useful. They let the session stay honest even when the rep gets quicker and more chaotic.",
        ],
      },
    ],
    drillBlock: {
      title: "Accuracy progression",
      items: [
        "Static target work to lock in contact.",
        "Two-touch finishing with the same target window.",
        "Movement-based finishing from a different angle.",
        "A final score challenge where only target-clean finishes count.",
      ],
    },
    commonMistakes: {
      title: "Why accuracy stalls",
      items: [
        "Training volume without a visible target or scoring rule.",
        "Changing finish type before the original one is repeatable.",
        "Ignoring why the shot missed and only counting total shots.",
        "Adding pressure before the basic action is clean.",
      ],
    },
    relatedSlugs: [
      "how-to-hit-top-corner",
      "football-shooting-drills",
      "penalty-top-corner-guide",
    ],
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
  },
};

export function getGuidePage(slug: string): GuidePageConfig | undefined {
  return guideTopicPages[slug as GuideSlug];
}

export function getGuidePages() {
  return guideSlugs.map((slug) => guideTopicPages[slug]);
}

export function getGuidePath(slug: GuideSlug) {
  return `/${slug}`;
}

export function getGuideCards() {
  return getGuidePages().map((guide) => ({
    href: getGuidePath(guide.slug),
    title: guide.title,
    description: guide.description,
    image: guide.image,
    alt: guide.imageAlt,
    label: guide.label,
    readTime: guide.readTime,
    highlights: guide.highlights,
  }));
}
