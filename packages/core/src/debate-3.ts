import type { StageConfig, EpochConfig } from "./types";

export const debate3Epoch: EpochConfig = {
  id: "debate-3",
  name: "The Formats",
  subtitle: "Every Major Style of Competitive Debate",
  description:
    "There is no single 'debate' — there is a family of formats, each with its own speech order, judging style, and culture. Policy rewards research depth; Lincoln-Douglas rewards philosophy; Public Forum rewards persuasion before ordinary people; Parliamentary and British Parliamentary reward thinking on your feet; Congress simulates a legislature; Mock Trial puts you in a courtroom. This epoch is a guided tour of all of them, so you can read any round, speak in any chamber, and choose the format that fits you.",
  emoji: "🏛️",
  color: "teal",
  unlocked: true,
};

export const debate3Stages: StageConfig[] = [
  // ─── debate-3-01: Policy Debate ───────────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "Wake Forest University",
      location: "Winston-Salem, North Carolina",
      era: "Modern",
      emoji: "📚",
    },
    id: "debate-3-01",
    order: 1,
    title: "Policy Debate (Cross-Examination)",
    subtitle: "The research-heavy format built on stock issues and the plan",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-01", name: "Policy Wonk", emoji: "📚" },
    challengeType: "quiz",
    info: {
      tagline: "Policy debate is a year-long research war fought over a single resolution, decided on whether a specific plan should be enacted.",
      year: 1970,
      overview: [
        "Policy debate (also called CX, for cross-examination) is the oldest and most research-intensive American format. Two two-person teams debate a single resolution for the entire academic year — a broad policy question like 'the United States federal government should substantially increase its funding of public transportation.' Because the topic lasts all year, teams accumulate enormous evidence files ('tubs' or laptops full of 'cards'), and rounds are dense with quoted evidence read at high speed. The Affirmative proposes a specific plan to enact the resolution; the Negative attacks it from every angle.",
        "The Affirmative case is judged on the stock issues — the standard burdens any policy must meet:\n- Significance — is the harm in the status quo big enough to matter?\n- Inherency — is there a barrier in the status quo preventing the solution now?\n- Solvency — does the plan actually solve the harm?\n- Topicality — does the plan fall within the resolution?\nPlus the implicit weighing of advantages against disadvantages. The Affirmative must win all the stock issues; the Negative wins by defeating any one of them — proving the harm is trivial, the status quo already solves it, the plan won't work, or the plan isn't topical.",
        "The Negative's arsenal is large:\n- Disadvantages — the plan causes bad consequences that outweigh its benefits.\n- Counterplans — a different, often non-topical plan that solves better, making the Affirmative plan unnecessary.\n- Topicality — the plan doesn't meet the resolution's wording.\n- Kritiks — challenges to the assumptions underlying the case (covered in epoch 7).\nPolicy's defining features are speed ('spreading' — speaking 300+ words per minute to fit maximum arguments), evidence density, and technical line-by-line. It builds extraordinary research and information-processing skills, and it's the format most associated with the Tournament of Champions and intercollegiate national circuits.",
      ],
      technical: {
        title: "The Speech Order and the Stock Issues",
        body: [
          "Policy has eight speeches and four cross-examination periods. Four constructives (1AC, 1NC, 2AC, 2NC) build and develop arguments; four rebuttals (1NR, 1AR, 2NR, 2AR) extend and crystallize, with no new arguments. The 1AR is famously the hardest speech in debate — one speaker must answer everything from two Negative speeches (the 'Negative block') in limited time. Each constructive is followed by a three-minute cross-examination. Teams also have prep time to budget across the round.",
          "The stock issues function as a checklist the Affirmative must satisfy and the Negative attacks selectively. A smart Negative doesn't spread thin across all of them — it concentrates firepower where the Affirmative is weakest, often combining a disadvantage (turning the case) with a counterplan (capturing the benefit without the disadvantage) or a topicality challenge. The Affirmative responds by defending solvency, answering the disadvantage's links, and proving topicality. Because the format rewards covering every argument, dropping anything is fatal — which is why flowing (epoch 1) and speed coexist in policy.",
        ],
        codeExample: {
          label: "Policy Debate — Stock Issues and Speech Order",
          code: `  THE STOCK ISSUES (Aff must win ALL; Neg beats ONE):
   SIGNIFICANCE  is the status-quo harm big enough?
   INHERENCY     is there a barrier blocking the fix now?
   SOLVENCY      does the PLAN actually solve the harm?
   TOPICALITY    does the plan fit the resolution?
   (+ advantages must outweigh disadvantages)

  SPEECH ORDER (8 speeches, 4 cross-ex):
   1AC → CX → 1NC → CX → 2AC → CX → 2NC → CX
   then rebuttals:  1NR → 1AR → 2NR → 2AR
   ⚠ 1AR = hardest speech: answer the whole "Neg block"

  NEGATIVE ARSENAL:
   • DISADVANTAGE  plan → bad consequence that outweighs
   • COUNTERPLAN   better non-topical alternative
   • TOPICALITY    plan isn't within the resolution
   • KRITIK        challenge the case's assumptions (ep.7)

  SIGNATURE: speed ("spreading"), evidence "cards",
   technical line-by-line. Drop nothing.`,
        },
      },
      incident: {
        title: "The Rise of the National Policy Circuit",
        when: "1970s–present",
        where: "Wake Forest, Northwestern, and the national tournament circuit",
        impact: "Policy debate built the most rigorous research culture in education — its alumni populate law, government, and academia at remarkable rates — even as its embrace of extreme speed made it both formidable and controversial.",
        body: [
          "Through the late 20th century, American intercollegiate policy debate developed into an intense research discipline centered on programs like Wake Forest, Northwestern, and a national circuit culminating in the National Debate Tournament and, for high schools, the Tournament of Champions. Teams treated the year's resolution like a research project, reading hundreds of sources, cutting thousands of evidence cards, and refining arguments tournament by tournament. The intellectual demands — synthesizing vast literature, anticipating every counterargument, thinking under time pressure — are why policy alumni are heavily overrepresented in law, policy, and academia.",
          "Policy also became the format most associated with 'spreading' — delivering arguments at 300+ words per minute to maximize the number of arguments in play, on the theory that a dropped argument is conceded. Critics argue this sacrificed persuasion and accessibility; defenders argue it rewards information density and rigorous coverage, and that speed is a learnable skill that trains the mind. The debate over speed is itself a long-running argument within the activity. Whatever one's view, policy remains the deep end of competitive debate: the format that most rewards research, technical precision, and stamina, and that most directly simulates the adversarial analysis of real policy questions.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Year-Long Resolution", sub: "one broad policy question", type: "attacker" },
          { label: "Aff Proposes a Plan", sub: "must win all stock issues", type: "system" },
          { label: "Neg Attacks", sub: "DA / CP / topicality / kritik", type: "victim" },
          { label: "Judge Weighs", sub: "advantages vs. disadvantages", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Intercollegiate policy debate adopts annual national resolutions" },
        { year: 1947, event: "The National Debate Tournament (NDT) is established" },
        { year: 1970, event: "Evidence-intensive 'card' culture and faster delivery take hold", highlight: true },
        { year: 1989, event: "The high school Tournament of Champions becomes the national policy pinnacle" },
        { year: 2000, event: "Laptops and online evidence transform research volume and speed" },
        { year: 2024, event: "Policy remains the deepest research format on the national circuit" },
      ],
      keyTakeaways: [
        "Policy (CX) is a year-long, research-heavy format where two-person teams debate one resolution all season",
        "The Affirmative proposes a specific plan and must win all stock issues: significance, inherency, solvency, topicality",
        "The Negative wins by defeating any one stock issue or by running disadvantages, counterplans, topicality, or kritiks",
        "Signature features are speed ('spreading'), dense evidence 'cards', and technical line-by-line — dropping arguments is fatal",
      ],
      references: [
        { title: "NSDA: Policy Debate", url: "https://www.speechanddebate.org/competition-events/policy-debate/" },
        { title: "National Debate Tournament (NDT)", url: "https://www.netdebate.org/" },
        { title: "Introduction to Policy Debate Stock Issues", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-01-q1",
          type: "Stock Issues",
          challenge: `  An Affirmative team proves the status-quo harm is
  huge (significance) and that their plan would
  solve it (solvency) — but the Negative shows the
  status quo is ALREADY moving to fix the problem
  without the plan.`,
          text: "Which stock issue has the Negative attacked?",
          options: [
            "Topicality",
            "Inherency — if the status quo already solves or is fixing the problem, there's no barrier requiring the plan",
            "Solvency",
            "Significance",
          ],
          correctIndex: 1,
          explanation: "Inherency asks whether there's a barrier in the status quo that prevents the problem from being solved without the plan. If the Negative shows the status quo is already fixing the issue, the plan isn't necessary — there's no inherent barrier, so the Affirmative fails inherency even though it won significance and solvency. The Affirmative must win all stock issues; losing inherency alone is enough for the Negative to win.",
        },
        {
          id: "debate-3-01-q2",
          type: "Negative Strategy",
          challenge: `  The Negative argues: "Instead of the Affirmative's
  plan, the states should implement this policy
  individually — it solves the same harm without
  the federal overreach that triggers our
  disadvantage."`,
          text: "What Negative argument is this?",
          options: [
            "Topicality",
            "A counterplan — a competing alternative that captures the benefit while avoiding the disadvantage, making the Affirmative plan unnecessary",
            "Significance press",
            "A simple solvency denial",
          ],
          correctIndex: 1,
          explanation: "This is a counterplan: the Negative offers a different mechanism (state action) that solves the same harm while avoiding the disadvantage triggered by the Affirmative's plan (federal overreach). A counterplan competes with the plan — if it solves as well or better without the downside, the judge has no reason to vote for the Affirmative plan. Counterplans are often paired with a disadvantage to the plan, so the counterplan captures the upside and the disadvantage punishes the plan.",
        },
        {
          id: "debate-3-01-q3",
          type: "The 1AR",
          challenge: `  In policy, after the Negative's two consecutive
  speeches (the 'Negative block') pile on
  disadvantages, counterplans, and topicality, one
  Affirmative speaker must respond to all of it in
  a short speech.`,
          text: "Why is this speech (the 1AR) considered the hardest in debate?",
          options: [
            "It's the longest speech in the round",
            "One speaker must answer everything from two Negative speeches in limited time, making efficient, prioritized coverage essential",
            "New arguments are required in it",
            "It has no time limit",
          ],
          correctIndex: 1,
          explanation: "The 1AR (first Affirmative rebuttal) must answer the entire 'Negative block' — two consecutive Negative speeches loaded with disadvantages, counterplans, and topicality — in a short, fixed time. The time pressure is brutal: the speaker must cover every winning argument efficiently, prioritize, and drop nothing important. This is why it's legendary as debate's hardest speech, demanding exceptional time management and prioritization under fire.",
        },
        {
          id: "debate-3-01-q4",
          type: "Format Character",
          challenge: `  A student loves deep research, can process dense
  information quickly, and wants a format that
  simulates rigorous policy analysis over a whole
  year on one topic.`,
          text: "Why is policy debate well-suited to this student?",
          options: [
            "Because it changes topics every round and rewards improvisation over research",
            "Because it is research-intensive on a single year-long resolution, rewards evidence depth and technical coverage, and most directly simulates adversarial policy analysis",
            "Because it bans evidence and focuses only on delivery",
            "Because it has no time limits or structure",
          ],
          correctIndex: 1,
          explanation: "Policy debate's defining traits — a single year-long resolution, enormous evidence files, technical line-by-line, and the weighing of advantages against disadvantages — make it the format for students who love deep research and can process information fast. It most directly simulates rigorous, adversarial policy analysis. (Improvisation-focused students may prefer Parliamentary; persuasion-focused students may prefer Public Forum — formats covered later in this epoch.)",
        },
      ],
    },
  },

  // ─── debate-3-02: Lincoln-Douglas ─────────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "Freeport Debate Square",
      location: "Freeport, Illinois",
      era: "19th Century",
      emoji: "⚖️",
    },
    id: "debate-3-02",
    order: 2,
    title: "Lincoln-Douglas Debate",
    subtitle: "One-on-one values debate built on a framework",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-02", name: "Value Philosopher", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "Lincoln-Douglas is debate's philosophy seminar — a single speaker arguing what is just, moral, or valuable, judged through a chosen framework.",
      year: 1980,
      overview: [
        "Lincoln-Douglas (LD) is a one-on-one format focused on value resolutions — questions of what ought to be, what is just, or what is moral, rather than specific policies. Named for the 1858 debates, it was designed as a more philosophical, accessible alternative to the team-based, evidence-heavy policy format. A typical LD resolution: 'Resolved: A just government ought to prioritize universal basic income over targeted welfare.' The debate turns less on stacks of evidence and more on ethical reasoning, philosophy, and the framework through which the round is judged.",
        "The defining structure of LD is the value and criterion (also called the value premise and value criterion, or the framework). Each debater proposes a core value the round should be judged by (justice, morality, autonomy, social welfare) and a criterion — a standard for achieving or measuring that value (maximizing well-being, protecting rights, the categorical imperative). Whoever wins the framework debate controls how every other argument is weighed: arguments that serve the winning value/criterion matter; those that don't are filtered out. This is why LD debaters study moral philosophy — Kant, Mill, Rawls, social contract theory — and deploy it as the architecture of their cases.",
        "LD has six speeches and two cross-examinations, all delivered by one debater per side (no partner). The Affirmative speaks first and last but has less total speaking time; the Negative gets a long middle speech to both rebuild and attack. Because one person does everything — case, cross-ex, rebuttals, weighing — LD rewards versatility and deep individual mastery. Its culture varies: some circuits prize accessible, persuasive philosophy for lay judges, while the national circuit has developed faster, more technical, theory-laden styles. At its best, LD is the format that most directly trains rigorous ethical argument.",
      ],
      technical: {
        title: "The Framework Debate and Why It Decides the Round",
        body: [
          "The value/criterion framework is the lens that filters every argument. Suppose the Affirmative's value is 'justice' with the criterion 'protecting individual rights,' while the Negative's value is 'societal welfare' with the criterion 'maximizing well-being.' If the Affirmative wins that the round should be judged by rights-protection, then arguments about aggregate welfare matter only insofar as they bear on rights — and vice versa. Winning the framework can mean winning the round even while conceding some lower-level arguments, because the judge evaluates everything through the victorious lens.",
          "This makes the framework debate the highest-leverage clash in LD. Strong LD debaters explicitly argue why their value and criterion should be preferred (more fundamental, more inclusive, better grounded in the resolution), then show their contentions best achieve the winning standard while the opponent's fail it. The skill is layered: you argue your framework, argue under the opponent's framework as a backup ('even if you prefer their criterion, I still win because…'), and weigh impacts within whichever framework prevails. Mastering this conditional, framework-first reasoning is the core competency LD develops.",
        ],
        codeExample: {
          label: "Lincoln-Douglas — The Value/Criterion Framework",
          code: `  FRAMEWORK (the lens that filters every argument):
   VALUE       the core ideal to be upheld
               (justice, morality, autonomy, welfare)
   CRITERION   the standard for measuring/achieving it
               (protect rights, maximize well-being,
                the categorical imperative)

   Aff:  Value = Justice   | Criterion = protect rights
   Neg:  Value = Welfare   | Criterion = maximize well-being

   WIN THE FRAMEWORK → control how ALL else is weighed.
   (you can win the round while conceding minor points)

  SPEECH ORDER (1 debater per side, NO partner):
   AC → CX → NC → CX → 1AR → NR → 2AR
   Aff: first & last, less total time
   Neg: one long middle speech (rebuild + attack)

  STUDY: Kant, Mill, Rawls, social contract theory.
  LAYERED SKILL: argue your framework, argue UNDER
   theirs as backup, then weigh within the winner.`,
        },
      },
      incident: {
        title: "From 1858 to the Modern Value Round",
        when: "1858 and 1980",
        where: "Illinois — and the National Forensic League",
        impact: "The 1858 Lincoln-Douglas debates over slavery's morality inspired a modern format that strips debate down to one person arguing fundamental values — making ethical philosophy a competitive skill for hundreds of thousands of students.",
        body: [
          "The original 1858 debates between Lincoln and Douglas were, at their core, about a moral question — the justice of slavery and its expansion — argued by two individuals before the public. When the National Forensic League (now NSDA) sought in 1980 a format that would foreground values and individual reasoning rather than team research, it named the new event for those debates. Modern LD deliberately centers the kind of fundamental moral question the 1858 debates raised, asking not 'what policy?' but 'what is just?'",
          "The result is a format that functions as a competitive philosophy seminar. To win, a debater must understand and deploy ethical theory — utilitarian, deontological, contractarian — not as decoration but as the structural framework that decides the round. A high schooler arguing an LD resolution may invoke Kant's categorical imperative or Rawls's veil of ignorance and be expected to apply it rigorously to the topic. Few activities push young people to engage moral philosophy this directly and this competitively. The format's lineage from a debate about the nation's deepest moral fracture to a classroom exercise in applied ethics is a fitting one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Value Resolution", sub: "what is just / moral?", type: "attacker" },
          { label: "Propose a Framework", sub: "value + criterion", type: "system" },
          { label: "Win the Framework", sub: "control the weighing lens", type: "victim" },
          { label: "Contentions Filtered", sub: "judged through the winner", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "The original Lincoln-Douglas debates argue the morality of slavery" },
        { year: 1980, event: "The NFL launches modern Lincoln-Douglas value debate", highlight: true },
        { year: 1995, event: "Moral-philosophy frameworks (Kant, Mill, Rawls) become central to LD" },
        { year: 2008, event: "The national LD circuit develops faster, theory-heavy styles" },
        { year: 2015, event: "Tournament of Champions LD splits 'traditional' vs. 'circuit' styles" },
        { year: 2024, event: "LD remains debate's premier values-and-philosophy format" },
      ],
      keyTakeaways: [
        "Lincoln-Douglas is a one-on-one format on value resolutions — what is just, moral, or ought to be — not specific policies",
        "The value/criterion framework is the lens that filters every argument; winning it controls how the round is weighed",
        "LD debaters deploy moral philosophy (Kant, Mill, Rawls) as the structural architecture of their cases",
        "One debater does everything — case, cross-ex, rebuttals, weighing — rewarding versatility and deep individual mastery",
      ],
      references: [
        { title: "NSDA: Lincoln-Douglas Debate", url: "https://www.speechanddebate.org/competition-events/lincoln-douglas-debate/" },
        { title: "Moral Philosophy for Debaters (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/ethics-deontological/" },
        { title: "The Lincoln-Douglas Debates of 1858 (Library of Congress)", url: "https://www.loc.gov/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-02-q1",
          type: "Framework",
          challenge: `  In an LD round, the Affirmative wins that the
  round should be judged by 'protecting individual
  rights' (their criterion). The Negative had some
  strong arguments about overall social benefit —
  but those gains came at the cost of some rights.`,
          text: "How does winning the framework affect the outcome?",
          options: [
            "It doesn't — social benefit always outweighs",
            "Through the winning rights-protection lens, the Negative's welfare gains matter little if they violate rights, so the Affirmative can win even while conceding the welfare arguments",
            "The judge ignores frameworks entirely",
            "Both debaters automatically tie",
          ],
          correctIndex: 1,
          explanation: "In LD, the framework is the lens that filters all arguments. If the Affirmative wins that the round should be judged by protecting individual rights, then the Negative's social-welfare gains are weighed only through that lens — and gains that come at the cost of rights count for little. This is why winning the framework can win the round even while conceding lower-level arguments: the judge evaluates everything through the victorious value/criterion.",
        },
        {
          id: "debate-3-02-q2",
          type: "Resolution Type",
          challenge: `  Which of these is a proper Lincoln-Douglas
  resolution?

   A: "The US federal government should build
       high-speed rail."
   B: "A just society ought to value rehabilitation
       over retribution."`,
          text: "Which fits LD, and why?",
          options: [
            "A — LD debates specific government policies",
            "B — LD debates value resolutions about what is just or ought to be, requiring a value/criterion framework",
            "Both are equally LD resolutions",
            "Neither is an LD resolution",
          ],
          correctIndex: 1,
          explanation: "B is a value resolution — it asks what a just society ought to value, a question of morality and principle, which is exactly LD's domain and invites a value/criterion framework. A is a policy resolution (a specific government action), which belongs to Policy or Public Forum. LD's focus on values rather than implementation is its defining difference from the policy-oriented formats.",
        },
        {
          id: "debate-3-02-q3",
          type: "Layered Strategy",
          challenge: `  An experienced LD debater, anticipating they
  might lose the framework clash, prepares to argue:
  "Even if you prefer my opponent's criterion of
  maximizing well-being, I STILL win because my
  position best maximizes well-being too."`,
          text: "What advanced LD skill is this?",
          options: [
            "Conceding the round early",
            "Layered/conditional framework reasoning — winning under your own framework AND as a backup under the opponent's, so you win regardless of which framework prevails",
            "Refusing to engage the framework",
            "Changing the resolution",
          ],
          correctIndex: 1,
          explanation: "This is layered, conditional framework reasoning — a hallmark of strong LD. Rather than betting everything on winning their own framework, the debater also argues their case prevails under the opponent's framework as a backup ('even if you buy their criterion, I still win because…'). This insures against losing the framework clash: whichever lens the judge adopts, the debater has a path to victory. Mastering this framework-first, conditional weighing is LD's core competency.",
        },
        {
          id: "debate-3-02-q4",
          type: "Format Character",
          challenge: `  A student loves moral philosophy, prefers
  arguing alone rather than with a partner, and
  is drawn to questions of justice and ethics
  more than to policy mechanics.`,
          text: "Why is Lincoln-Douglas a strong fit?",
          options: [
            "Because LD requires a four-person team and bans philosophy",
            "Because LD is one-on-one, centers value/ethical resolutions, and uses moral-philosophy frameworks as its core — matching the student's interests",
            "Because LD never involves frameworks or values",
            "Because LD is identical to policy debate",
          ],
          correctIndex: 1,
          explanation: "Lincoln-Douglas is one-on-one (no partner), built on value resolutions about justice and morality, and structured around moral-philosophy frameworks (value/criterion). A student who loves ethics, prefers individual competition, and is drawn to questions of what 'ought' to be will find LD a natural home. It's the format that most directly rewards rigorous ethical reasoning and individual mastery of philosophical argument.",
        },
      ],
    },
  },

  // ─── debate-3-03: Public Forum ────────────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "The Town Hall Meeting",
      location: "New England, United States",
      era: "Modern",
      emoji: "🗣️",
    },
    id: "debate-3-03",
    order: 3,
    title: "Public Forum Debate",
    subtitle: "Accessible, partnered debate argued for the ordinary citizen",
    category: "arts",
    xp: 86,
    badge: { id: "debate-3-badge-03", name: "The Persuader", emoji: "🗣️" },
    challengeType: "quiz",
    info: {
      tagline: "Public Forum is the format built to be understood by anyone — persuasion before a 'reasonable person', not a technical specialist.",
      year: 2002,
      overview: [
        "Public Forum (PF) was created in 2002 explicitly to be accessible — debatable on current events, judged by ordinary people ('lay judges'), and free of the extreme speed and jargon that made policy debate impenetrable to outsiders. Two-person teams debate a topical resolution that changes monthly, drawn from contemporary issues ('Resolved: The benefits of artificial intelligence outweigh the harms'). The animating idea is the 'reasonable person' standard: you should argue as if persuading an intelligent citizen with no debate training, which means clarity, real-world impacts, and persuasion over technical maneuvering.",
        "PF's signature element is crossfire — open, three-minute periods where debaters question each other directly (rather than one-way cross-examination). There's a crossfire after the first two speeches, after the next two, and a 'grand crossfire' with all four debaters near the end. Crossfire rewards quick thinking, composure, and the ability to expose weaknesses conversationally. The format's short speeches and monthly topics keep it nimble and current, and the lay-judge norm keeps arguments grounded — a PF debater who spreads or buries the round in jargon usually loses, because the judge values being persuaded over being out-techniqued.",
        "Because topics rotate monthly and judges are often non-specialists, PF rewards a different skill set than policy or LD: efficient research on current events, clean and persuasive delivery, sharp crossfire, and the ability to distill complex issues into accessible, well-weighed arguments. The final speeches (the 'Final Focus') crystallize the two or three best reasons your side wins. PF has become the most popular high school debate format in the United States precisely because it's approachable, current, and transferable — it builds exactly the public-persuasion skills useful in careers from business to journalism to public life.",
      ],
      technical: {
        title: "Crossfire, the Final Focus, and Weighing for Lay Judges",
        body: [
          "PF's speech structure is compact: Constructive, Rebuttal, Summary, and Final Focus for each side, interleaved with crossfires. The Summary must both extend your best arguments and answer the opponent's — a tight speech demanding prioritization. The Final Focus is pure crystallization: no new arguments, just the clearest possible story of why you win, with explicit weighing ('even if they win their economy argument, our impact is larger and more probable, so vote for us'). Weighing is decisive in PF because lay judges need to be told how to compare impacts; the team that weighs explicitly usually wins the close ones.",
          "Crossfire is where PF rounds are often won or lost in the judge's eyes. The best crossfire is conversational but strategic — you ask pointed questions to expose a missing warrant or a conceded weakness, you answer your own questions concisely, and above all you stay composed and respectful (grand crossfire, with everyone talking, can descend into chaos that judges penalize). Because the audience is a reasonable person rather than a specialist, the debater who is clearest, most composed, and most persuasive — not the one with the most cards or the fastest delivery — tends to earn the ballot.",
        ],
        codeExample: {
          label: "Public Forum — Accessible, Current, Persuasive",
          code: `  DESIGN GOAL: persuade a "REASONABLE PERSON"
   (an intelligent lay judge, no debate training)
   → clarity + real-world impacts > speed + jargon

  TOPICS: change MONTHLY, drawn from current events
  TEAMS: two-person partners

  SPEECH ORDER (per side, interleaved):
   Constructive → Rebuttal → Summary → Final Focus
   CROSSFIRES:
    • after constructives (1st crossfire)
    • after rebuttals (2nd crossfire)
    • GRAND crossfire (all four) near the end

  SUMMARY    extend your best + answer theirs (prioritize)
  FINAL FOCUS no new args — crystallize + WEIGH explicitly
   "even if they win X, our impact is bigger & more
    probable → vote us"

  WIN CONDITION: clearest + most composed + best-weighed,
   NOT most cards or fastest delivery.`,
        },
      },
      incident: {
        title: "Debate for the Citizen — The Town Hall Ideal",
        when: "2002",
        where: "United States — the National Forensic League",
        impact: "Public Forum was designed to restore debate's connection to ordinary public reasoning — the New England town-hall ideal of citizens persuading one another on the issues of the day — after decades in which competitive debate had grown technical and inaccessible.",
        body: [
          "By the early 2000s, American policy debate's embrace of extreme speed and dense jargon had made top rounds nearly unintelligible to anyone outside the activity. In 2002, the National Forensic League launched a new format — first called 'Controversy,' then 'Ted Turner debate,' then Public Forum — explicitly to reconnect debate with public persuasion. The model was the citizen and the town hall: argument as a reasonable person would conduct it, on the issues of the day, in language anyone could follow.",
          "That design choice shaped everything about PF: monthly current-events topics so debaters engage real issues, lay judging so arguments stay grounded and persuasive, crossfire so exchanges feel like genuine public dialogue, and short speeches so clarity beats volume. The wager was that the most valuable thing debate teaches is not technical maneuvering but the ability to persuade ordinary people through clear reasoning and evidence — the skill a citizen, a juror, a voter, or a professional actually needs. PF's explosive growth into the most popular U.S. high school format suggests the wager paid off: it made competitive debate accessible again while preserving its rigor.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Monthly Current Topic", sub: "real-world issue", type: "attacker" },
          { label: "Argue for a Lay Judge", sub: "the 'reasonable person'", type: "system" },
          { label: "Crossfire + Weighing", sub: "expose, then compare impacts", type: "victim" },
          { label: "Final Focus", sub: "clearest reason to vote", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "The NFL launches Public Forum to restore accessible, persuasive debate", highlight: true },
        { year: 2009, event: "PF's monthly topics and lay-judge norm drive rapid growth" },
        { year: 2014, event: "Grand crossfire becomes a signature feature of PF rounds" },
        { year: 2018, event: "PF becomes the most popular U.S. high school debate format" },
        { year: 2020, event: "Online PF expands access during the pandemic" },
        { year: 2024, event: "PF emphasizes weighing and clarity for non-specialist judges" },
      ],
      keyTakeaways: [
        "Public Forum is designed for accessibility — argued for a 'reasonable person' lay judge on monthly current-events topics",
        "Crossfire (including grand crossfire) features direct, conversational questioning that rewards composure and quick thinking",
        "The Final Focus crystallizes with explicit weighing — telling a lay judge exactly how to compare impacts wins close rounds",
        "PF rewards clarity, persuasion, and current-events research over speed and jargon — it's the most popular U.S. high school format",
      ],
      references: [
        { title: "NSDA: Public Forum Debate", url: "https://www.speechanddebate.org/competition-events/public-forum-debate/" },
        { title: "Public Forum Crossfire and Weighing Guide (NSDA)", url: "https://www.speechanddebate.org/" },
        { title: "NSDA Monthly Public Forum Topics", url: "https://www.speechanddebate.org/topics/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-03-q1",
          type: "The Reasonable Person",
          challenge: `  In a Public Forum round judged by a parent
  volunteer with no debate background, one team
  speaks at 280 words per minute, packed with
  jargon and dozens of cards. The other speaks
  clearly, with two well-explained, well-weighed
  arguments.`,
          text: "Who is likely to win, and why?",
          options: [
            "The fast team — more arguments always wins",
            "The clear team — PF is argued for a 'reasonable person' lay judge who rewards clarity, persuasion, and explicit weighing over speed and jargon",
            "Neither — lay judges can't decide",
            "The fast team, because cards beat reasoning",
          ],
          correctIndex: 1,
          explanation: "Public Forum is built around the reasonable-person standard: you argue as if persuading an intelligent citizen with no debate training. A lay judge can only credit what they understand, so spreading and jargon backfire — they reward the clear, well-weighed team. This is by design: PF was created to keep debate accessible and persuasive. The clear team that tells the judge how to weigh the impacts almost always earns the lay ballot.",
        },
        {
          id: "debate-3-03-q2",
          type: "Crossfire",
          challenge: `  It's grand crossfire — all four debaters can
  speak. One debater stays calm, asks one pointed
  question exposing a missing warrant, and answers
  concisely. Another talks over everyone, raising
  their voice as the exchange gets chaotic.`,
          text: "What does effective crossfire look like?",
          options: [
            "Talking over opponents to dominate",
            "Calm, strategic questioning that exposes weaknesses, concise answers, and composure — chaos and shouting are penalized by judges",
            "Staying completely silent",
            "Asking only open-ended questions",
          ],
          correctIndex: 1,
          explanation: "Effective crossfire is conversational but strategic and, above all, composed: pointed questions that expose a missing warrant or conceded weakness, concise answers, and control. Grand crossfire (all four speaking) can devolve into shouting, which judges penalize. The composed debater who lands a clean question reads as the stronger, more credible competitor — exactly the impression that sways a lay judge's ballot.",
        },
        {
          id: "debate-3-03-q3",
          type: "Final Focus",
          challenge: `  In the Final Focus, a team has 30 seconds left.
  They could (a) introduce a brand-new statistic,
  or (b) explain why, even if the opponent wins
  their economic argument, this team's impact is
  larger and more likely.`,
          text: "Which is the correct use of the Final Focus?",
          options: [
            "Introduce the new statistic for a last-second edge",
            "Weigh — explain why their impact outweighs even if the opponent wins an argument; the Final Focus is for crystallizing and weighing, not new arguments",
            "Repeat the constructive verbatim",
            "Stay silent to seem confident",
          ],
          correctIndex: 1,
          explanation: "The Final Focus is for crystallization and explicit weighing — no new arguments (they'd be disregarded). With limited time, the highest-value move is to tell the judge how to compare impacts: 'even if they win their economy argument, our impact is bigger and more probable, so vote for us.' Weighing is decisive in PF because lay judges need to be told how to adjudicate competing impacts. A new statistic at the end is both disregarded and a wasted opportunity to weigh.",
        },
        {
          id: "debate-3-03-q4",
          type: "Format Character",
          challenge: `  A student is interested in current events, enjoys
  persuading non-experts, wants topics that change
  often, and prefers clear argumentation to dense
  technical research.`,
          text: "Why does Public Forum suit this student?",
          options: [
            "Because PF uses a single year-long topic and rewards spreading",
            "Because PF has monthly current-events topics, lay judging, and rewards clear, persuasive, well-weighed argument over technical maneuvering",
            "Because PF bans partners and crossfire",
            "Because PF is identical to Lincoln-Douglas",
          ],
          correctIndex: 1,
          explanation: "Public Forum's monthly current-events topics, lay-judge norm, and emphasis on clear, persuasive, well-weighed argument make it ideal for a student who loves current events and persuading ordinary people. Its rotating topics keep it fresh, and its reasonable-person standard rewards accessibility over dense research or speed. These are also the most transferable public-persuasion skills — part of why PF is the most popular U.S. high school format.",
        },
      ],
    },
  },

  // ─── debate-3-04: Parliamentary Debate ────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "The House of Commons",
      location: "London, England",
      era: "Modern",
      emoji: "🏛️",
    },
    id: "debate-3-04",
    order: 4,
    title: "Parliamentary Debate",
    subtitle: "Limited-prep debate with points of information and a parliamentary style",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-04", name: "On Your Feet", emoji: "🏛️" },
    challengeType: "quiz",
    info: {
      tagline: "Parliamentary debate hands you a motion and a few minutes — then tests whether you can reason, structure, and persuade without a research file.",
      year: 1991,
      overview: [
        "Parliamentary debate ('parli') strips away the evidence files and tests reasoning on your feet. Modeled on the British House of Commons, it uses two teams — Government (which proposes and defends the motion) and Opposition (which attacks it) — and, crucially, limited preparation: in American collegiate styles like NPDA, teams receive the motion and get only about 15–20 minutes to prepare before the round. There are no cards to read; arguments are built live from the debater's own knowledge, logic, and persuasion. This makes parli a test of broad general knowledge, analytical reasoning, and rhetorical agility rather than research depth.",
        "Parli's signature mechanic is the Point of Information (POI): during an opponent's speech, you may stand and offer a brief question or challenge, which the speaker may accept or decline. POIs keep speakers accountable in real time and reward quick thinking on both sides — a well-timed POI can expose a flaw, and gracefully handling POIs shows command. The format also carries parliamentary flavor in its language and roles (Prime Minister, Leader of Opposition, Member speeches), and motions range from concrete policy ('This House would abolish the electoral college') to abstract or values motions ('This House believes that…').",
        "Because there's little prep and no evidence, parli rewards a distinct skill set: a wide base of general knowledge across politics, history, economics, ethics, and current affairs; the ability to structure a coherent case in minutes; clear, persuasive extemporaneous speaking; and adaptability to motions you've never seen. Styles vary by circuit — NPDA (National Parliamentary Debate Association) and APDA (American Parliamentary Debate Association) in the U.S. each have their own conventions. Parli is excellent training for thinking and speaking under pressure, which is precisely why it resembles the real legislative and public debate it's modeled on.",
      ],
      technical: {
        title: "Roles, Points of Information, and Limited Prep",
        body: [
          "A typical two-team parli round has set roles. Government: the Prime Minister opens by defining the motion and presenting the case, and closes the round; a Member of Government extends it. Opposition: the Leader of Opposition responds and attacks, and a Member of Opposition extends. The Government has the right to reasonably define the motion, and the Opposition can challenge an unfair definition. Throughout the constructive speeches (but not the protected opening and closing minutes), opponents may rise on Points of Information.",
          "Limited prep changes how you build a case. With only minutes and no research, you brainstorm the strongest two or three arguments you can genuinely support with reasoning and general knowledge, structure them clearly, and anticipate the obvious responses. You can't bluff specific statistics you don't have, but you can reason carefully from widely known facts and principles. Handling POIs is a live skill: take one or two to show confidence, answer them crisply, and don't let a barrage of POIs derail your structure. The format prizes the debater who can think clearly and speak persuasively about almost anything on short notice.",
        ],
        codeExample: {
          label: "Parliamentary Debate — Limited Prep + POIs",
          code: `  TWO TEAMS (modeled on the House of Commons):
   GOVERNMENT  proposes + defends the motion
    • Prime Minister: define motion, open, and close
    • Member of Government: extend the case
   OPPOSITION  attacks the motion
    • Leader of Opposition: respond + attack
    • Member of Opposition: extend

  LIMITED PREP: ~15–20 min after seeing the motion
   → NO evidence files; build from knowledge + logic

  POINT OF INFORMATION (POI):
   • stand during an opponent's speech to offer a
     brief question/challenge
   • speaker may ACCEPT or DECLINE
   • (opening & closing minutes are "protected")
   → take 1–2 to show command; answer crisply

  MOTIONS: concrete policy OR abstract/values
  WINS ON: general knowledge, live reasoning,
   structure-in-minutes, persuasive extemp speaking.`,
        },
      },
      incident: {
        title: "The Commons Model — Debate as Governance",
        when: "1991",
        where: "The British House of Commons and American campuses",
        impact: "Parliamentary debate transplants the adversarial structure of the world's most famous legislature into competition — training students to reason and persuade on their feet the way working legislators must.",
        body: [
          "The British House of Commons is, structurally, a permanent debate: a Government benches that proposes and defends, an Opposition that attacks, a Speaker who keeps order, and the live, unscripted clash of members rising to challenge one another. When American educators built competitive parliamentary debate (NPDA was founded in 1991), they borrowed this model deliberately — the Government/Opposition structure, the parliamentary roles and language, and the Point of Information that mirrors a member yielding to an intervention.",
          "The point of the model is to train the skill legislators and public figures actually need: reasoning and persuading on short notice, without a script, about whatever question is on the floor. A working politician rarely gets a year to prepare a fixed case; they must respond to the motion of the day with the knowledge and reasoning they carry with them. Parli's limited prep and POIs simulate exactly this. It develops the broad general knowledge, mental agility, and extemporaneous fluency that mark an effective public reasoner — which is why the format's resemblance to the Commons is not decoration but its entire pedagogical purpose.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Motion Announced", sub: "minutes to prepare", type: "attacker" },
          { label: "Gov't vs. Opposition", sub: "propose vs. attack", type: "system" },
          { label: "Points of Information", sub: "live questions during speeches", type: "victim" },
          { label: "Reasoned Persuasion Wins", sub: "knowledge + agility, no files", type: "result" },
        ],
      },
      timeline: [
        { year: 1820, event: "The British Commons model matures as structured Government/Opposition debate" },
        { year: 1991, event: "The National Parliamentary Debate Association (NPDA) is founded in the U.S.", highlight: true },
        { year: 1995, event: "APDA and NPDA establish distinct American parliamentary styles" },
        { year: 2005, event: "Limited-prep, evidence-free debate spreads across collegiate programs" },
        { year: 2015, event: "Parliamentary formats grow internationally alongside Worlds-style debate" },
        { year: 2024, event: "Parli remains the premier test of on-your-feet reasoning" },
      ],
      keyTakeaways: [
        "Parliamentary debate uses Government vs. Opposition teams with limited prep (~15–20 min) and no evidence files",
        "Cases are built live from general knowledge, logic, and persuasion — rewarding broad knowledge and mental agility",
        "The Point of Information lets opponents rise with a brief question during speeches, which the speaker may accept or decline",
        "Styles vary (NPDA, APDA); the format trains extemporaneous reasoning the way real legislatures demand it",
      ],
      references: [
        { title: "National Parliamentary Debate Association (NPDA)", url: "https://www.parlidebate.org/" },
        { title: "American Parliamentary Debate Association (APDA)", url: "https://www.apdaweb.org/" },
        { title: "NSDA: Parliamentary-Style Debate Overview", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-04-q1",
          type: "Limited Prep",
          challenge: `  A debater used to policy debate enters their
  first parliamentary round and reaches for their
  evidence files to find cards. The judge informs
  them files aren't allowed, and they have 15
  minutes to prep the motion.`,
          text: "How must they adapt to parliamentary debate?",
          options: [
            "Demand their evidence files be allowed",
            "Build the case live from general knowledge, logic, and persuasion in the limited prep time — there are no evidence cards in parli",
            "Refuse to debate without research",
            "Use the same speed-and-cards approach anyway",
          ],
          correctIndex: 1,
          explanation: "Parliamentary debate has no evidence files — that's its defining constraint. With only ~15–20 minutes of prep after seeing the motion, the debater must build the strongest two or three arguments from their own general knowledge, sound reasoning, and persuasion. The skill shift from policy is fundamental: from research depth to on-your-feet analytical reasoning and broad knowledge. Adapting means brainstorming defensible arguments fast and structuring them clearly without cards.",
        },
        {
          id: "debate-3-04-q2",
          type: "Point of Information",
          challenge: `  During the Prime Minister's constructive, an
  Opposition debater stands and says, 'Point of
  information?'`,
          text: "What is happening, and what are the speaker's options?",
          options: [
            "The round is over; the Opposition has objected",
            "It's a Point of Information — a brief question/challenge the speaker may either accept (and answer) or decline; taking one or two shows command",
            "The speaker must immediately yield the floor permanently",
            "POIs are forbidden in parliamentary debate",
          ],
          correctIndex: 1,
          explanation: "A Point of Information is parli's signature mechanic: during an opponent's (unprotected) speaking time, a debater may stand to offer a brief question or challenge. The speaker holding the floor chooses to accept it (and answer briefly) or decline. Strategically, accepting one or two POIs and answering crisply shows confidence and command, while declining all of them can look evasive — but taking too many can derail your structure. It keeps speakers accountable in real time.",
        },
        {
          id: "debate-3-04-q3",
          type: "Defining the Motion",
          challenge: `  The motion is 'This House would prioritize the
  environment over economic growth.' The Government
  defines it reasonably and presents its case. The
  Government, however, could have defined it so
  narrowly that the Opposition had nothing to argue.`,
          text: "What governs how the Government may define the motion?",
          options: [
            "The Government may define it any way it likes, even unfairly",
            "The Government has the right to a reasonable definition; an unfair, abusive definition can be challenged by the Opposition",
            "Only the judge defines the motion",
            "The Opposition defines the motion",
          ],
          correctIndex: 1,
          explanation: "In parli, the Government earns the right to reasonably define and frame the motion in the opening speech — but the definition must be fair, leaving the Opposition legitimate ground to contest. A definition engineered to leave the Opposition nothing to argue is abusive and can be challenged. This mirrors the definitional fairness principle from Foundations: whoever frames the debate has power, but that power is bounded by the requirement of a fair, debatable interpretation.",
        },
        {
          id: "debate-3-04-q4",
          type: "Format Character",
          challenge: `  A student has wide general knowledge across
  politics, history, and economics, thinks quickly
  on their feet, and finds research-file
  memorization tedious. They love improvising a
  coherent argument about almost anything.`,
          text: "Why does parliamentary debate suit them?",
          options: [
            "Because parli requires massive evidence files and no improvisation",
            "Because parli uses limited prep and no evidence, rewarding broad general knowledge, live reasoning, and extemporaneous persuasion",
            "Because parli forbids speaking without a script",
            "Because parli is identical to policy debate",
          ],
          correctIndex: 1,
          explanation: "Parliamentary debate's limited prep, absence of evidence files, and live Government/Opposition clash reward exactly this student's strengths: broad general knowledge, quick analytical thinking, and persuasive extemporaneous speaking. It trains reasoning on your feet rather than research-file mastery, making it ideal for someone who thrives on improvising coherent arguments about unfamiliar motions. (Research-loving students gravitate to policy; this student is a natural parliamentarian.)",
        },
      ],
    },
  },

  // ─── debate-3-05: British Parliamentary / Worlds ──────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "World Universities Debating Championship",
      location: "Global",
      era: "Modern",
      emoji: "🌍",
    },
    id: "debate-3-05",
    order: 5,
    title: "British Parliamentary (Worlds)",
    subtitle: "Four teams, eight speakers, and the global championship format",
    category: "arts",
    xp: 90,
    badge: { id: "debate-3-badge-05", name: "Global Bencher", emoji: "🌍" },
    challengeType: "quiz",
    info: {
      tagline: "British Parliamentary puts four teams in one room competing for rank — you're not just beating the other side, you're beating your own bench too.",
      year: 1981,
      overview: [
        "British Parliamentary (BP) is the format of the World Universities Debating Championship (WUDC) and most international university competition — the closest thing debate has to a global standard. Its defining feature: four two-person teams in a single round, not two. Two teams sit on the Government (Proposition) side and two on the Opposition side, but they are split into 'Opening' and 'Closing' halves. So a room contains Opening Government, Opening Opposition, Closing Government, and Closing Opposition — eight speakers total — and the judges rank all four teams from 1st to 4th.",
        "This four-team structure transforms strategy. You must beat the other side AND outperform the team on your own bench. The two opening teams set up the debate and clash directly; the two closing teams must add something new — an 'extension' — that advances their side beyond what their opening team already said, while still being consistent with it. A closing team that merely repeats its opening allies cannot rank above them; it must contribute a fresh, substantive argument or analysis. This creates a rich, multi-layered debate where reading the room and finding unoccupied argumentative ground is as important as raw rebuttal.",
        "BP uses limited prep (typically 15 minutes), motions spanning policy, values, and international affairs, and Points of Information across teams. It rewards broad knowledge, strategic positioning, and the ability to add value late in a developing debate. Because it's the global university format, BP connects debaters across countries and cultures, and WUDC crowns world champions annually. Its demands — clash with opponents, differentiate from allies, extend the debate, and do it all on limited prep before international judges — make it one of the most strategically complex formats in the activity.",
      ],
      technical: {
        title: "The Four Positions and the Extension",
        body: [
          "The eight speakers occupy fixed roles. Opening Government: Prime Minister and Deputy PM define the motion and build the Proposition case. Opening Opposition: Leader and Deputy Leader of Opposition respond. Closing Government: Member and Government Whip must extend the Proposition with new material and then summarize. Closing Opposition: Member and Opposition Whip do the same for the Opposition. The whip speeches (the last two) generally cannot introduce brand-new arguments but summarize and crystallize their side's case, especially their own team's contribution.",
          "The extension is the heart of closing-half strategy. A closing team's job is to win the debate for its side while also being the best team on that side — which means contributing something the opening team did not. A strong extension might be a new argument, a deeper analysis of an under-explored dimension, a reframing, or new examples and impacts that advance the case. The worst outcome for a closing team is to 'mirror' its opening allies, adding nothing. Reading where the debate has gaps — what hasn't been said that helps your side — and filling them distinctively is the signature BP skill, on top of the usual clash with the other bench.",
        ],
        codeExample: {
          label: "British Parliamentary — Four Teams, One Room",
          code: `  FOUR teams, EIGHT speakers, judges RANK 1st–4th:

   PROPOSITION SIDE          OPPOSITION SIDE
   ┌─────────────────┐       ┌─────────────────┐
   │ OPENING GOV      │      │ OPENING OPP      │
   │  PM + Deputy PM  │ clash │ LO + Deputy LO  │
   ├─────────────────┤       ├─────────────────┤
   │ CLOSING GOV      │      │ CLOSING OPP      │
   │  Member + Whip   │      │  Member + Whip   │
   │  must EXTEND     │      │  must EXTEND     │
   └─────────────────┘       └─────────────────┘

  YOU MUST: beat the other side AND outshine your
   OWN bench (the team sharing your side).

  EXTENSION (closing teams): add NEW material that
   advances your side beyond your opening allies.
   ✗ mirroring your opening = can't rank above them.

  WHIP speeches: summarize/crystallize (no brand-new args).
  ~15 min prep · POIs across teams · WUDC = world champs.`,
        },
      },
      incident: {
        title: "The World Championship of Debate — WUDC",
        when: "1981–present",
        where: "A different host country each year",
        impact: "The World Universities Debating Championship made British Parliamentary the global lingua franca of university debate — a single format uniting competitors from hundreds of universities across every continent under one set of rules.",
        body: [
          "The World Universities Debating Championship, held annually since 1981 in a different country each year, grew into the largest debating tournament in the world and the sport's de facto global championship. It adopted British Parliamentary as its format, and because WUDC sat at the apex of university debate, BP spread worldwide as the common international style. A debater trained in BP can travel from one country to another and find the same four-team format, the same roles, the same expectation of an extension — a shared language of argument across cultures.",
          "This globalization is BP's distinctive contribution. Where American formats (policy, LD, PF) dominate U.S. high school and college circuits, BP connects debaters internationally, exposing them to motions about world affairs and to opponents from radically different backgrounds and assumptions. The four-team structure also produces a uniquely strategic game: succeeding requires not just defeating opponents but reading a developing debate and carving out distinctive ground against teammates on your own side. WUDC champions are, in a real sense, world champions of a global activity — and the format's spread shows how a well-designed set of rules can create a common arena for reasoned disagreement across the planet.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Four Teams, One Motion", sub: "two per side, opening + closing", type: "attacker" },
          { label: "Opening Teams Clash", sub: "set up the debate", type: "system" },
          { label: "Closing Teams Extend", sub: "add new ground, beat allies", type: "victim" },
          { label: "Judges Rank 1–4", sub: "best contribution wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1981, event: "The World Universities Debating Championship is established", highlight: true },
        { year: 1990, event: "British Parliamentary becomes the global university standard via WUDC" },
        { year: 2000, event: "BP spreads to hundreds of universities across every continent" },
        { year: 2010, event: "Online and regional BP circuits expand international access" },
        { year: 2019, event: "WUDC fields competitors from 200+ institutions worldwide" },
        { year: 2024, event: "BP remains the world's premier university debating format" },
      ],
      keyTakeaways: [
        "British Parliamentary puts four two-person teams in one room — judges rank all four from 1st to 4th",
        "Two teams per side are split into Opening and Closing halves; you must beat the other side AND outshine your own bench",
        "Closing teams must deliver an 'extension' — new material advancing their side beyond their opening allies",
        "BP is the global university format of the World Championship (WUDC), rewarding strategy, broad knowledge, and limited-prep agility",
      ],
      references: [
        { title: "World Universities Debating Championship (WUDC)", url: "https://en.wikipedia.org/wiki/World_Universities_Debating_Championship" },
        { title: "British Parliamentary Format Guide", url: "https://idebate.net/" },
        { title: "European/World BP Rules and Roles", url: "https://idebate.net/resources/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-05-q1",
          type: "Four-Team Structure",
          challenge: `  A debater wins their British Parliamentary round
  decisively against the other side. But they
  finish 2nd, not 1st — they're ranked below the
  other team on their OWN side of the debate.`,
          text: "How is this possible in BP?",
          options: [
            "It's a scoring error — beating the other side means 1st",
            "BP has four teams ranked 1st–4th; you must outperform your own-side bench too, and the other team on your side contributed more, so they ranked above you",
            "Two teams per side is not allowed",
            "The judge misunderstood the format",
          ],
          correctIndex: 1,
          explanation: "BP's four-team structure means you compete against your own side as well as the opposing side. Even if your half clearly beat the other side, the other team sharing your side can rank above you if they contributed more to the debate. Judges rank all four teams 1st–4th, so 'winning the clash' isn't enough — you must also be the stronger of the two teams on your bench. This dual competition is BP's defining strategic twist.",
        },
        {
          id: "debate-3-05-q2",
          type: "The Extension",
          challenge: `  A Closing Government team gives speeches that
  simply restate and slightly reword the arguments
  their Opening Government allies already made.`,
          text: "Why is this a strategic failure in BP?",
          options: [
            "It's fine — repeating your side's arguments is the goal",
            "Closing teams must EXTEND — add new material advancing their side; merely mirroring the opening team contributes nothing new, so they can't rank above their opening allies",
            "Closing teams aren't allowed to speak",
            "The extension is the opening team's job",
          ],
          correctIndex: 1,
          explanation: "A closing team's central task is the extension — contributing new arguments, deeper analysis, reframing, or fresh impacts that advance their side beyond what the opening team said. A closing team that merely mirrors its opening allies adds nothing and therefore can't rank above them. Reading the debate for unoccupied ground and filling it distinctively is the signature closing-half skill; without an extension, a closing team forfeits its path to the top ranks.",
        },
        {
          id: "debate-3-05-q3",
          type: "Whip Speeches",
          challenge: `  The very last speaker for each side (the 'Whip')
  wants to unveil a powerful brand-new argument to
  finish strong.`,
          text: "Is that appropriate for a whip speech in BP?",
          options: [
            "Yes — whip speeches are for new arguments",
            "No — whip speeches generally summarize and crystallize their side's case (especially their team's extension), not introduce brand-new arguments",
            "Whip speeches must be silent",
            "Only the opposition whip can add arguments",
          ],
          correctIndex: 1,
          explanation: "In BP, the whip speeches (the final two) are primarily for summary and crystallization — pulling together the debate, weighing the clash, and emphasizing their own team's extension — rather than launching brand-new arguments (mirroring the 'no new arguments late' principle from earlier epochs). A whip who unveils a wholly new argument both breaks convention and gives opponents no chance to respond. The whip's power is in framing and crystallizing what's already in the round.",
        },
        {
          id: "debate-3-05-q4",
          type: "Global Format",
          challenge: `  A university student wants to compete
  internationally, debate motions about world
  affairs, and use a format recognized at the
  global championship level.`,
          text: "Why is British Parliamentary the right choice?",
          options: [
            "Because BP is only used in one country",
            "Because BP is the global university standard of the World Championship (WUDC), used across hundreds of institutions worldwide on international motions",
            "Because BP forbids international competition",
            "Because BP is a high-school-only format",
          ],
          correctIndex: 1,
          explanation: "British Parliamentary is the format of the World Universities Debating Championship and most international university competition — the closest thing to a global standard. A student who wants to compete internationally, engage motions about world affairs, and reach the global championship should learn BP, because it provides a shared format and language understood across hundreds of universities on every continent. Its four-team strategic depth and international reach are exactly what this student is seeking.",
        },
      ],
    },
  },

  // ─── debate-3-06: World Schools ───────────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "World Schools Debating Championship",
      location: "Global",
      era: "Modern",
      emoji: "🌐",
    },
    id: "debate-3-06",
    order: 6,
    title: "World Schools Debate",
    subtitle: "Prepared and impromptu motions judged on style, content, and strategy",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-06", name: "Three-Pillar Speaker", emoji: "🌐" },
    challengeType: "quiz",
    info: {
      tagline: "World Schools blends research and improvisation, and judges you on three pillars at once — what you say, how you say it, and how well you played the round.",
      year: 1988,
      overview: [
        "World Schools Debate (WSD) is the format of the World Schools Debating Championships and a growing high school event, designed to balance the strengths of British and American styles. Two three-person teams — Proposition and Opposition — debate motions that are a mix of prepared (announced in advance, allowing research) and impromptu (given with about an hour of prep, no internet). This blend deliberately tests both deep preparation and on-your-feet reasoning, rather than specializing in one. Motions span policy, values, and international affairs, often phrased 'This House would…' or 'This House believes…'.",
        "WSD's distinctive feature is its explicit three-pillar judging: every speech is scored on Style (delivery, clarity, persuasiveness, engagement), Content (the quality, logic, and evidence of arguments), and Strategy (structure, prioritization, responsiveness, and how well the team navigates the clash of the round). Unlike formats that reward technical coverage or speed, WSD's balanced rubric means you cannot win on substance alone if your delivery is poor, or on charisma alone if your arguments are weak. The best WSD debaters are genuinely well-rounded — substantive, articulate, and strategically sharp in equal measure.",
        "The format includes Points of Information (as in parliamentary styles) and a reply speech — a short final speech (given by the first or second speaker, not the third) that offers a biased summary of why your side won, like a closing argument. WSD's emphasis on clear, persuasive, accessible speaking (without the extreme speed of policy) and its international, multicultural competitor base make it a popular bridge format. It teaches a complete debater: someone who can research and improvise, reason and persuade, and adapt to a global audience — which is why it has spread rapidly as an international high school standard.",
      ],
      technical: {
        title: "The Three Pillars and the Reply Speech",
        body: [
          "The three-pillar rubric shapes how WSD debaters allocate effort. Style is typically weighted alongside Content, with Strategy as a smaller but decisive component — meaning a beautifully delivered speech of weak arguments and a brilliant argument delivered poorly both lose marks. Debaters are coached to be clear and engaging (style), to develop well-reasoned and well-supported arguments (content), and to structure their case, respond to the most important clashes, and prioritize wisely (strategy). Balancing all three under time pressure is the format's central challenge.",
          "The reply speech is WSD's signature closing. After all the constructive and rebuttal speeches, each side gives a short reply — delivered by the first or second speaker (never the third) — that is an unapologetically biased overview of the debate from that side's perspective, identifying the key clashes and explaining why their side won them. It is comparative and persuasive, not a re-argument: think of a lawyer's closing statement. The reply rewards the ability to step back from the line-by-line, see the debate as a whole, and tell the judges a clear, winning story — a high-level skill that crystallizes the round.",
        ],
        codeExample: {
          label: "World Schools — Three Pillars + Reply Speech",
          code: `  TWO three-person teams: Proposition vs Opposition
  MOTIONS: mix of PREPARED (research) + IMPROMPTU
   (~1 hr prep, no internet) → tests both skill sets

  THE THREE JUDGING PILLARS (scored every speech):
   STYLE     delivery, clarity, persuasion, engagement
   CONTENT   argument quality, logic, evidence
   STRATEGY  structure, prioritization, responsiveness
   → can't win on charisma alone OR substance alone

  POINTS OF INFORMATION: offered during speeches
   (accept/decline), as in parliamentary styles

  REPLY SPEECH (the signature close):
   • short, by the 1st or 2nd speaker (NOT the 3rd)
   • a BIASED, comparative overview — "why we won"
   • like a closing argument, not a re-argument

  PRODUCES: the complete, well-rounded debater.`,
        },
      },
      incident: {
        title: "A Format Built to Bridge the World",
        when: "1988",
        where: "The World Schools Debating Championships",
        impact: "World Schools Debate was engineered to let students from radically different debating cultures compete on equal terms — blending research and improvisation, and judging the whole debater, to create a truly international high school standard.",
        body: [
          "When the World Schools Debating Championships began in 1988, organizers faced a challenge: students arrived from countries with very different debating traditions — some research-heavy and technical, others extemporaneous and oratorical. A format was needed that no single national style would dominate. The solution was deliberate hybridization: a mix of prepared and impromptu motions so neither pure research nor pure improvisation would win alone, and a three-pillar rubric (style, content, strategy) so neither slick delivery nor dense substance alone could carry a team.",
          "This engineering produced a format that rewards the complete debater and travels well across cultures. A student strong only in one dimension — only in research, only in eloquence, only in tactics — finds WSD demands the others too. The reply speech adds a final test of big-picture comparative judgment. The result has been rapid international adoption: WSD has become a leading high school standard precisely because its balance makes it fair across traditions and because the skills it builds — researching and improvising, reasoning and persuading, adapting to a global audience — are the ones a young person most needs to carry argument into a connected world.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Prepared + Impromptu", sub: "research and improvisation", type: "attacker" },
          { label: "Argue the Motion", sub: "three-person teams, POIs", type: "system" },
          { label: "Judged on 3 Pillars", sub: "style + content + strategy", type: "victim" },
          { label: "Reply Speech", sub: "biased winning overview", type: "result" },
        ],
      },
      timeline: [
        { year: 1988, event: "The World Schools Debating Championships are founded", highlight: true },
        { year: 2000, event: "WSD's three-pillar rubric balances style, content, and strategy" },
        { year: 2010, event: "World Schools spreads as a high school standard beyond the championship" },
        { year: 2016, event: "The NSDA adds a World Schools event to U.S. competition" },
        { year: 2020, event: "Online World Schools broadens international participation" },
        { year: 2024, event: "WSD is a leading bridge format between national debating cultures" },
      ],
      keyTakeaways: [
        "World Schools uses two three-person teams and mixes prepared (researched) and impromptu (limited-prep) motions",
        "Every speech is judged on three pillars — style (delivery), content (arguments), and strategy (structure/responsiveness)",
        "The balanced rubric rewards the complete debater: you can't win on charisma alone or substance alone",
        "The reply speech is a short, biased, comparative overview (by the 1st or 2nd speaker) explaining why your side won",
      ],
      references: [
        { title: "World Schools Debating Championships", url: "https://en.wikipedia.org/wiki/World_Schools_Debating_Championships" },
        { title: "NSDA: World Schools Debate", url: "https://www.speechanddebate.org/competition-events/world-schools-debate/" },
        { title: "World Schools Format and Judging Guide", url: "https://idebate.net/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-06-q1",
          type: "Three Pillars",
          challenge: `  A World Schools debater delivers a charismatic,
  beautifully spoken speech — but the arguments
  are thin and poorly reasoned. The opposing
  speaker is a bit stiff in delivery but offers
  rigorous, well-supported arguments and sharp
  responsiveness.`,
          text: "How does the three-pillar rubric handle this?",
          options: [
            "Style is all that matters — the charismatic speaker wins",
            "Both lose points on different pillars; a great delivery of weak content and rigorous content with weak delivery are both penalized — the rubric rewards balance across style, content, and strategy",
            "Content is irrelevant in World Schools",
            "Only strategy is scored",
          ],
          correctIndex: 1,
          explanation: "World Schools judges every speech on style, content, AND strategy. The charismatic speaker loses content marks for thin reasoning; the rigorous-but-stiff speaker loses some style marks but gains on content and strategy. Neither charisma nor substance alone carries the round — the rubric deliberately rewards the well-rounded debater. This balance is what makes WSD distinctive: you must be persuasive, substantive, and strategically sharp together.",
        },
        {
          id: "debate-3-06-q2",
          type: "Prepared vs Impromptu",
          challenge: `  At a World Schools tournament, some motions are
  released weeks in advance for research, while
  others are announced an hour before the round
  with no internet access allowed.`,
          text: "Why does WSD deliberately mix prepared and impromptu motions?",
          options: [
            "To make the format easier",
            "To test both deep preparation/research AND on-your-feet reasoning, so no single skill set dominates and debaters become well-rounded",
            "Because organizers can't decide on a format",
            "To eliminate research entirely",
          ],
          correctIndex: 1,
          explanation: "The prepared/impromptu mix is intentional: prepared motions reward research and deep preparation, while impromptu motions (limited prep, no internet) reward general knowledge and live reasoning. By including both, WSD ensures neither pure research nor pure improvisation wins alone, producing well-rounded debaters and a format that's fair across different national debating traditions. It's the same balancing logic behind the three-pillar rubric — reward the complete skill set, not a specialty.",
        },
        {
          id: "debate-3-06-q3",
          type: "Reply Speech",
          challenge: `  At the end of a World Schools round, a team's
  third speaker wants to give the reply speech and
  use it to introduce a brand-new argument.`,
          text: "What's wrong with this plan?",
          options: [
            "Nothing — the third speaker should give the reply with new arguments",
            "Two errors: the reply is given by the 1st or 2nd speaker (not the 3rd), and it's a biased comparative overview of why your side won — not a place for new arguments",
            "Reply speeches don't exist in World Schools",
            "The reply must introduce three new arguments",
          ],
          correctIndex: 1,
          explanation: "The plan breaks two WSD conventions. First, the reply speech is delivered by the first or second speaker, never the third. Second, the reply is a short, biased, comparative overview — like a closing argument — that identifies the key clashes and explains why your side won them, not a venue for brand-new arguments. Its skill is stepping back to see the whole debate and telling a clear winning story, which crystallizes rather than extends the round.",
        },
        {
          id: "debate-3-06-q4",
          type: "Format Character",
          challenge: `  A student wants a format that develops everything
  at once — research and improvisation, rigorous
  arguments and persuasive delivery — and lets
  them compete internationally at the high school
  level without extreme speed.`,
          text: "Why is World Schools an ideal fit?",
          options: [
            "Because WSD specializes narrowly in one skill and uses spreading",
            "Because WSD blends prepared and impromptu motions, judges style + content + strategy together, avoids extreme speed, and is an international high school standard",
            "Because WSD bans delivery and only scores evidence",
            "Because WSD is a one-person format",
          ],
          correctIndex: 1,
          explanation: "World Schools is built to develop the complete debater: its prepared/impromptu mix trains both research and improvisation, its three-pillar rubric demands strong content AND persuasive style AND sound strategy, and it avoids the extreme speed of policy. As the format of the World Schools Debating Championships, it also offers an accessible international high school stage. For a student who wants well-rounded development and global competition, it's an ideal home.",
        },
      ],
    },
  },

  // ─── debate-3-07: Congressional Debate ────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "The United States Capitol",
      location: "Washington, D.C.",
      era: "Modern",
      emoji: "🏛️",
    },
    id: "debate-3-07",
    order: 7,
    title: "Congressional Debate",
    subtitle: "A legislative simulation where you debate bills and resolutions like a member of Congress",
    category: "arts",
    xp: 86,
    badge: { id: "debate-3-badge-07", name: "The Legislator", emoji: "🏛️" },
    challengeType: "quiz",
    info: {
      tagline: "Congressional debate turns the room into a legislature — you write and debate bills, persuade the chamber, and rise on a docket of dozens of competitors.",
      year: 1938,
      overview: [
        "Congressional Debate (Congress) simulates the United States legislature. Instead of two sides clashing on one resolution, a chamber of many competitors (often 15–25) debates a docket of bills and resolutions on real-world issues, each student acting as a legislator. Debaters give speeches for or against each piece of legislation, respond to one another across the chamber, and the goal is to be among the best speakers and most effective legislators in the room as judged over the whole session — a format closer to public speaking and parliamentary procedure than to two-team debate.",
        "Speeches alternate between affirmation and negation of the bill under consideration, and after each speech other members may rise for questioning (cross-examination of the speaker by the chamber). The first speech on a bill (the 'authorship' or sponsorship speech) introduces it and is purely constructive; later speeches must engage the arguments already made, refuting prior speakers and advancing new points — so a great Congress debater is also a great listener who adapts to the flow of chamber debate. Speakers are ranked by judges (and sometimes peers) on the quality of their argumentation, delivery, and engagement.",
        "Congress also runs on parliamentary procedure, presided over by a student Presiding Officer (PO) — itself a competitive role — who recognizes speakers, runs motions and votes, and keeps the chamber orderly using rules derived from Robert's Rules of Order. Success requires versatility: research across many topics on the docket (since you don't know which bills will come up), strong extemporaneous and prepared speaking, the strategic timing of when to speak (early speeches frame, late speeches must add new clash), and the procedural savvy to navigate or preside over the chamber. It's the format that most directly trains the skills of actual legislative debate and public deliberation.",
      ],
      technical: {
        title: "The Docket, Speech Cycle, and the Presiding Officer",
        body: [
          "A Congress session works through a docket of legislation, one bill at a time. For each bill, the authorship/sponsorship speech opens debate (constructive, often by the bill's sponsor), then speeches alternate affirmative and negative, each followed by a questioning period from the chamber. Because everyone competes individually for ranking, timing is strategic: speaking early lets you frame the debate and is 'safer' on content, but later speeches are rewarded for refuting and advancing the clash — giving the same canned speech a third speaker already gave is penalized. Reading the chamber to find new ground is essential.",
          "The Presiding Officer is a distinctive Congress role and a path to recognition in itself. The PO runs the chamber: recognizing speakers fairly (using a precedence/recency system so everyone gets opportunities), conducting motions and votes, timing speeches, and maintaining order under parliamentary procedure. A skilled, fair, efficient PO is ranked highly for the difficulty of the role. Whether speaking or presiding, Congress rewards the well-rounded competitor — broad research, adaptable speaking, procedural fluency, and the social-strategic intelligence to stand out positively in a crowded chamber over a long session.",
        ],
        codeExample: {
          label: "Congressional Debate — A Legislative Simulation",
          code: `  THE CHAMBER: 15–25 students act as LEGISLATORS,
   debating a DOCKET of bills & resolutions (not one
   resolution, two sides — many competitors, ranked).

  PER BILL — THE SPEECH CYCLE:
   1. AUTHORSHIP/SPONSORSHIP speech (constructive, opens)
   2. speeches ALTERNATE affirmative / negative
   3. each speech → QUESTIONING period from the chamber
   ⚠ later speeches MUST refute + add new clash
     (repeating an earlier speech is penalized)

  STRATEGIC TIMING:
   early = frame the debate (safer)
   late  = rewarded for responsiveness + new ground

  PRESIDING OFFICER (PO) — a competitive role:
   recognizes speakers (precedence/recency), runs
   motions & votes, times speeches, keeps order via
   Robert's Rules. A great PO ranks highly.

  WINS ON: broad research + adaptable speaking +
   procedural savvy + standing out over a long session.`,
        },
      },
      incident: {
        title: "Debate as Legislative Training",
        when: "1938",
        where: "United States — high school and collegiate forensics",
        impact: "Congressional Debate was created to give students direct practice in the deliberative skills of representative government — turning the classroom into a legislature so young people learn to legislate, persuade, and preside before they ever hold office.",
        body: [
          "Student Congress debate emerged in American forensics in the late 1930s, with the explicit aim of teaching the deliberative process of representative democracy. Where other formats abstract argument into a contest of two sides, Congress recreates the actual machinery of a legislature: a docket of bills, speeches for and against, questioning from fellow members, votes, and a presiding officer enforcing parliamentary procedure. Students don't just argue a position — they experience how a deliberative body moves from competing speeches to a decision.",
          "This makes Congress unusually direct as civic training. A student learns to research a wide range of policy issues, to write and sponsor legislation, to persuade a roomful of peers, to question and respond across a chamber, to time their participation strategically, and to run a meeting under formal rules. These are the literal skills of legislators, advocates, and public officials. Many participants describe Congress as the format that most demystified government — having debated and voted on bills in a simulated chamber, they understood how real legislative deliberation works. It is debate as an apprenticeship in self-government.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Docket of Bills", sub: "many issues, many speakers", type: "attacker" },
          { label: "Speak For or Against", sub: "alternating, with questioning", type: "system" },
          { label: "Engage the Chamber", sub: "refute, add new clash, time it", type: "victim" },
          { label: "Ranked as a Legislator", sub: "or presiding officer", type: "result" },
        ],
      },
      timeline: [
        { year: 1938, event: "Student Congress debate is established to teach legislative deliberation", highlight: true },
        { year: 1876, event: "Robert's Rules of Order (which Congress uses) is first published" },
        { year: 1990, event: "Congressional Debate becomes a major NSDA championship event" },
        { year: 2005, event: "The Presiding Officer role is formalized as competitively ranked" },
        { year: 2018, event: "Congress grows as a format emphasizing real-world policy literacy" },
        { year: 2024, event: "Congress remains debate's closest simulation of an actual legislature" },
      ],
      keyTakeaways: [
        "Congressional Debate simulates a legislature — a chamber of many competitors debates a docket of bills, each acting as a legislator",
        "Speeches alternate affirmative/negative with questioning periods; later speeches must refute and add new clash, not repeat",
        "A student Presiding Officer runs the chamber under parliamentary procedure — a competitively ranked role in itself",
        "Success requires broad research, adaptable speaking, strategic timing, and procedural fluency over a long session",
      ],
      references: [
        { title: "NSDA: Congressional Debate", url: "https://www.speechanddebate.org/competition-events/congressional-debate/" },
        { title: "Robert's Rules of Order (official site)", url: "https://robertsrules.com/" },
        { title: "Congressional Debate Guide (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-07-q1",
          type: "Format Structure",
          challenge: `  A student expecting two teams clashing on one
  resolution walks into a Congressional Debate
  chamber and finds 20 students, a docket of
  several bills, and a presiding officer running
  the room.`,
          text: "How does Congress differ from two-team debate?",
          options: [
            "It's the same as policy debate with more people",
            "Congress is a legislative simulation — many individual competitors debate a docket of bills, giving alternating for/against speeches and being ranked, rather than two teams clashing on one resolution",
            "Congress has no speeches, only voting",
            "Congress allows only one speaker total",
          ],
          correctIndex: 1,
          explanation: "Congress is fundamentally different from two-team debate: it simulates a legislature, with a chamber of many individual competitors debating a docket of multiple bills and resolutions. Each student acts as a legislator, giving speeches for or against the legislation, questioning other speakers, and being ranked individually over the session. There's also a Presiding Officer running the chamber under parliamentary procedure. It's closer to public deliberation and legislative process than to a head-to-head match.",
        },
        {
          id: "debate-3-07-q2",
          type: "Speech Timing",
          challenge: `  A bill has already had four speeches. A debater
  rises and gives a polished speech that simply
  repeats arguments two earlier speakers already
  made, adding nothing new.`,
          text: "Why is this a weak strategic choice in Congress?",
          options: [
            "It's ideal — repetition reinforces the point",
            "Later speeches are expected to refute prior speakers and add NEW clash; repeating earlier arguments is penalized because it doesn't advance the chamber's debate",
            "Speakers may never reference earlier speeches",
            "Only the first speech is judged",
          ],
          correctIndex: 1,
          explanation: "In Congress, the value of a speech depends partly on when it's given. The authorship/early speeches frame the debate, but later speeches are rewarded for engaging — refuting prior speakers and advancing new arguments or clash. A polished speech that merely repeats what two earlier speakers said adds nothing to the chamber's deliberation and is penalized. Reading the room and finding fresh ground or sharp refutation is essential for late speakers, which makes listening and adaptability core Congress skills.",
        },
        {
          id: "debate-3-07-q3",
          type: "Presiding Officer",
          challenge: `  Instead of speaking on bills, one student
  volunteers to run the chamber: recognizing
  speakers, conducting votes, timing speeches, and
  keeping order under parliamentary rules.`,
          text: "What role is this, and how is it scored?",
          options: [
            "An unscored helper role with no competitive value",
            "The Presiding Officer (PO) — a competitively ranked role; a skilled, fair, efficient PO can rank highly for the difficulty of running the chamber",
            "A judge, not a competitor",
            "A role that disqualifies the student from ranking",
          ],
          correctIndex: 1,
          explanation: "This is the Presiding Officer, a distinctive and competitively ranked Congress role. The PO runs the chamber under parliamentary procedure — recognizing speakers fairly via a precedence/recency system, conducting motions and votes, timing speeches, and maintaining order. Because presiding well is demanding, a skilled, fair, and efficient PO can rank highly. It's an alternative path to recognition that rewards procedural mastery and leadership rather than speechmaking on the bills.",
        },
        {
          id: "debate-3-07-q4",
          type: "Format Character",
          challenge: `  A student is fascinated by government and
  lawmaking, enjoys public speaking on many
  different policy issues, and wants to learn
  parliamentary procedure and how a legislature
  actually deliberates.`,
          text: "Why is Congressional Debate the right fit?",
          options: [
            "Because Congress avoids government topics entirely",
            "Because Congress simulates a real legislature — debating a docket of bills, using parliamentary procedure, and rewarding broad policy research and public speaking — directly matching the student's interests",
            "Because Congress is a silent, written-only format",
            "Because Congress is identical to Lincoln-Douglas",
          ],
          correctIndex: 1,
          explanation: "Congressional Debate directly simulates a legislature: students debate a docket of bills on many real-world policy issues, use parliamentary procedure, question one another, vote, and can even preside. For a student fascinated by government and lawmaking who loves public speaking across varied topics, it's the ideal format — it trains the literal skills of legislative deliberation and demystifies how a deliberative body works. Many participants credit it with teaching them how government actually functions.",
        },
      ],
    },
  },

  // ─── debate-3-08: Mock Trial and Moot Court ───────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "The Supreme Court Bar",
      location: "Washington, D.C.",
      era: "Modern",
      emoji: "⚖️",
    },
    id: "debate-3-08",
    order: 8,
    title: "Mock Trial and Moot Court",
    subtitle: "Legal advocacy — arguing cases the way lawyers actually do",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-08", name: "The Advocate", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "Mock trial and moot court are debate in legal dress — bound by rules of evidence and procedure, judged on advocacy within the law.",
      year: 1820,
      overview: [
        "Mock trial and moot court are competitive formats that simulate the legal system rather than open debate, and they share debate's core skills while adding the constraints of law. In mock trial, teams act as the prosecution/plaintiff and defense in a simulated jury trial: students play attorneys (delivering opening statements, conducting direct and cross-examinations of witnesses, and giving closing arguments) and witnesses (testifying in character, staying within a sworn affidavit). The case packet — facts, witness statements, exhibits, and applicable law — is fixed and given to both sides, so the contest is purely about advocacy, not who has better facts.",
        "Moot court simulates an appellate argument rather than a trial. There are no witnesses or juries; instead, students argue points of law before a panel of judges, briefing and then orally arguing how the law should apply to a hypothetical case, fielding rapid, often hostile questions from the bench. Moot court rewards deep legal reasoning, mastery of precedent, and the composure to think on your feet while judges interrupt with hypotheticals designed to test the limits of your position. Both formats are staples of law schools (and increasingly high schools and colleges) and are the most direct bridge from debate to a legal career.",
        "What distinguishes legal advocacy from open debate is the framework of rules. In mock trial, the rules of evidence govern what can be said: you must object to improper questions ('Objection — hearsay,' 'leading the witness,' 'speculation') in real time, and a judge rules on the spot, so you need both substantive case knowledge and procedural fluency. In moot court, you're bound by precedent and the standard of review, and you cannot simply argue what's fair — you must argue what the law requires. These constraints teach a discipline open debate doesn't: persuading within a rule-bound system, which is exactly the skill of a practicing lawyer.",
      ],
      technical: {
        title: "Trial Roles, Objections, and Appellate Argument",
        body: [
          "In mock trial, the attorney skills map closely onto debate skills with legal structure. The opening statement is a non-argumentative roadmap of what the evidence will show; direct examination elicits your witness's helpful testimony through open questions; cross-examination uses tight leading questions to damage the opponent's witnesses (the same funnel technique from cross-ex in epoch 1, now bound by evidence rules); the closing argument is pure persuasion, weighing the evidence like a final focus. Objections are the procedural layer: spotting an improper question and objecting correctly, or defending your own question against objection, is a live skill judges score.",
          "Moot court strips away witnesses and centers on the oral argument before judges. You open by stating who you represent and what you ask the court to do, then argue your legal points — but you must yield constantly to questions from the bench, which probe the weaknesses and implications of your position ('Counsel, wouldn't your rule also permit X?'). The skill is to answer the question directly and honestly, then pivot back to your argument, never dodging and never losing composure. Mastery of the record, the precedents, and the standard of review lets you handle hypotheticals gracefully. Both formats reward the debater who can be persuasive while strictly respecting the rules of the system they're arguing within.",
        ],
        codeExample: {
          label: "Mock Trial vs. Moot Court — Legal Advocacy",
          code: `  MOCK TRIAL — simulates a JURY TRIAL
   ROLES: attorneys + witnesses (fixed case packet)
   ATTORNEY SEQUENCE:
    Opening statement   non-argumentative roadmap
    Direct examination  open Qs → your witness helps
    Cross-examination   leading Qs → damage their witness
    Closing argument    persuasion: weigh the evidence
   OBJECTIONS (live, ruled on the spot):
    "hearsay" · "leading" · "speculation" · "relevance"
   → bound by the RULES OF EVIDENCE

  MOOT COURT — simulates an APPELLATE argument
   NO witnesses/jury → argue POINTS OF LAW to judges
   • brief, then oral argument
   • constant questions ("hot bench") — answer
     directly, then pivot back; never dodge
   • bound by PRECEDENT + standard of review
   → argue what the law REQUIRES, not just what's fair

  BOTH: persuade WITHIN a rule-bound system (lawyering).`,
        },
      },
      incident: {
        title: "The Inns of Court and the Training of Advocates",
        when: "1820 onward",
        where: "London's Inns of Court and American law schools",
        impact: "For centuries, advocates have been trained by simulated argument — 'mooting' disputed legal questions — making mock trial and moot court the oldest continuous tradition of competitive argument as professional education.",
        body: [
          "Long before modern debate leagues, England's Inns of Court trained barristers through 'moots' — formal exercises in which students argued hypothetical legal questions before senior members, learning to reason from precedent and respond to challenge. The word 'moot' itself comes from these exercises. The practice crossed to American legal education, where moot court and, later, mock trial became central to how lawyers are made: you learn advocacy by doing it under the rules, with feedback from those who judge it.",
          "This long lineage reflects a deep truth that competitive debate also embodies — that the skills of argument are best learned by structured practice, not lecture. But legal advocacy adds the crucial element of arguing within a rule-bound system: a barrister, like a mock-trial attorney or moot-court advocate, cannot simply say what is persuasive; they must work within the rules of evidence, the constraints of precedent, and the standard of review. Mastering persuasion under those constraints is precisely what makes the formats such direct preparation for legal careers. A debater who moves into mock trial or moot court keeps every argumentation skill they've built and adds the discipline of advocacy within the law — the discipline the Inns of Court have taught for half a millennium.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Fixed Case / Legal Question", sub: "same facts for both sides", type: "attacker" },
          { label: "Advocate Within the Rules", sub: "evidence / precedent / procedure", type: "system" },
          { label: "Object or Answer the Bench", sub: "live procedural skill", type: "victim" },
          { label: "Persuade Lawfully", sub: "win on advocacy, not facts", type: "result" },
        ],
      },
      timeline: [
        { year: 1820, event: "The Inns of Court formalize 'mooting' as advocate training in England" },
        { year: 1900, event: "Moot court becomes standard in American legal education", highlight: true },
        { year: 1980, event: "High school mock trial leagues spread nationally in the U.S." },
        { year: 1985, event: "Collegiate mock trial (AMTA) is organized as a national competition" },
        { year: 2010, event: "Mock trial and moot court grow as direct pipelines into law" },
        { year: 2024, event: "Legal advocacy formats remain debate's bridge to the courtroom" },
      ],
      keyTakeaways: [
        "Mock trial simulates a jury trial (attorneys and witnesses, bound by rules of evidence); moot court simulates appellate argument on points of law",
        "Both use a fixed case given to both sides, so the contest is pure advocacy — not who has the better facts",
        "Mock trial adds live objections (hearsay, leading, speculation); moot court adds a 'hot bench' of constant judicial questioning",
        "These formats teach persuasion within a rule-bound system — the discipline of a practicing lawyer and the most direct bridge to a legal career",
      ],
      references: [
        { title: "American Mock Trial Association (AMTA)", url: "https://www.collegemocktrial.org/" },
        { title: "Moot Court (Britannica)", url: "https://www.britannica.com/topic/moot-court" },
        { title: "Federal Rules of Evidence (overview)", url: "https://www.law.cornell.edu/rules/fre" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-08-q1",
          type: "Mock Trial vs Moot Court",
          challenge: `  Format A: students play attorneys and witnesses
  in a simulated jury trial with examinations and
  objections.
  Format B: students argue points of law to a panel
  of judges, with no witnesses, facing constant
  questioning from the bench.`,
          text: "Which is mock trial and which is moot court?",
          options: [
            "A is moot court; B is mock trial",
            "A is mock trial (a simulated trial with witnesses and evidence rules); B is moot court (appellate argument on points of law before judges)",
            "Both are the same format",
            "Neither involves the law",
          ],
          correctIndex: 1,
          explanation: "A is mock trial: it simulates a full jury trial with attorneys, witnesses, examinations, and live objections under the rules of evidence. B is moot court: it simulates an appellate argument where students brief and orally argue points of law to a panel of judges, with no witnesses or jury, fielding rapid questions from the bench. Mock trial centers on trial advocacy and evidence; moot court centers on legal reasoning and precedent.",
        },
        {
          id: "debate-3-08-q2",
          type: "Objections",
          challenge: `  In a mock trial, opposing counsel asks their own
  witness: 'Isn't it true that you saw the
  defendant flee the scene?' — a question that
  suggests its own answer to a friendly witness on
  direct examination.`,
          text: "What objection applies, and why does objecting matter?",
          options: [
            "No objection — any question is allowed",
            "'Objection — leading the witness'; on direct exam you generally can't lead your own witness, and spotting/raising objections in real time is a scored procedural skill",
            "'Objection — hearsay,' because all questions are hearsay",
            "Objections are not allowed in mock trial",
          ],
          correctIndex: 1,
          explanation: "This is a leading question — it suggests its own answer — and on direct examination of your own witness, leading is generally improper (it's permitted on cross-examination). The correct response is 'Objection — leading the witness,' and the judge rules on the spot. Spotting improper questions and objecting correctly in real time (or defending your own questions against objection) is a live procedural skill that mock trial scores, layered on top of substantive case knowledge.",
        },
        {
          id: "debate-3-08-q3",
          type: "The Hot Bench",
          challenge: `  In moot court, an advocate is mid-argument when a
  judge interrupts: 'Counsel, wouldn't the rule you
  propose also allow the government to do X, which
  seems clearly unconstitutional?'`,
          text: "How should the advocate handle this?",
          options: [
            "Ignore the question and continue the prepared argument",
            "Answer the question directly and honestly, then pivot back to the argument — never dodging, staying composed, using mastery of precedent to address the hypothetical",
            "Refuse to answer because it's hostile",
            "Concede the entire case immediately",
          ],
          correctIndex: 1,
          explanation: "Moot court's 'hot bench' constantly probes the limits of your position with hypotheticals. The advocate must answer directly and honestly — addressing whether the proposed rule really allows X, perhaps distinguishing the hypothetical or accepting a limited version — and then pivot smoothly back to the argument. Dodging or ignoring the bench is fatal; composure and mastery of the precedents let you handle the hypothetical gracefully. Answering the question, then returning to your point, is the core appellate-advocacy skill.",
        },
        {
          id: "debate-3-08-q4",
          type: "Arguing Within Rules",
          challenge: `  A debater used to open debate enters moot court
  and tries to win purely by arguing what outcome
  would be most fair and beneficial, ignoring what
  the precedents and statute actually require.`,
          text: "Why does this approach struggle in legal advocacy?",
          options: [
            "It's the best approach — fairness always wins in court",
            "Legal advocacy requires arguing what the LAW requires (precedent, statute, standard of review), not merely what's fair; persuasion must operate within the rule-bound system",
            "Moot court has no rules at all",
            "Precedent is irrelevant in appellate argument",
          ],
          correctIndex: 1,
          explanation: "The defining constraint of legal advocacy is that you must argue within a rule-bound system: in moot court you're bound by precedent, statute, and the standard of review, and you must show what the law requires — not simply what would be fairest. A debater who ignores the law and argues only desirability will lose to one who grounds the same fairness intuitions in the governing authorities. Learning to persuade within these constraints is exactly the discipline that makes these formats prepare students for legal practice.",
        },
      ],
    },
  },

  // ─── debate-3-09: Extemporaneous and Impromptu Speaking ───────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "Chautauqua Assembly",
      location: "Chautauqua, New York",
      era: "19th Century",
      emoji: "🎙️",
    },
    id: "debate-3-09",
    order: 9,
    title: "Extemporaneous and Impromptu Speaking",
    subtitle: "The individual speech events that sharpen a debater's spontaneity",
    category: "arts",
    xp: 84,
    badge: { id: "debate-3-badge-09", name: "The Extemper", emoji: "🎙️" },
    challengeType: "quiz",
    info: {
      tagline: "Not every argument is a clash — sometimes you draw a question and have minutes to build a clear, persuasive speech alone.",
      year: 1874,
      overview: [
        "Extemporaneous speaking ('extemp') and impromptu speaking are individual speech events — close cousins of debate that sharpen the same reasoning and delivery under intense time pressure, without an opponent. In extemp, a competitor draws a question about current events (e.g., 'Will the EU's new policy strengthen the euro?'), then has roughly 30 minutes to prepare a structured 7-minute speech answering it, using a limited file of articles. It's debate's research-and-analysis muscle isolated: take a position, support it with evidence and reasoning, and deliver it fluently — alone, with no rebuttal to lean on.",
        "Impromptu speaking is extemp's faster, lighter sibling: a competitor draws a prompt (a quotation, a word, an abstract concept, or an object) and has only a couple of minutes to prepare a short speech, with no research at all. Impromptu tests pure spontaneity — the ability to instantly generate a thesis, structure two or three supporting points, and deliver a coherent, engaging speech from nothing but your own knowledge and creativity. It builds the mental quickness and structural instinct that make a debater dangerous when caught off guard.",
        "Both events reinforce skills that directly transfer to debate. Extemp builds rapid current-events analysis, evidence integration, and the discipline of answering a precise question (not drifting off topic) — invaluable for Public Forum and parliamentary debaters. Impromptu builds the instinct to structure thought instantly and speak without notes — invaluable for cross-examination, points of information, and any moment a round goes off-script. Many of the best debaters compete in extemp or impromptu alongside debate precisely because the events train the spontaneity, organization, and fluency that no amount of pre-written casework can provide.",
      ],
      technical: {
        title: "The Extemp Speech Structure and the Impromptu Sprint",
        body: [
          "Extemp speeches follow a tight, recognizable structure that a debater can build in 30 minutes: an attention-getting introduction that links to the question, a clear thesis directly answering the drawn question, two or three substantive points each supported with current evidence and analysis, signposted transitions, and a conclusion that ties back to the introduction. The discipline is answering the actual question asked — a brilliant speech that drifts off the precise question is penalized, just as a debate response that doesn't address the actual argument floats free of the flow. Time management in prep (research fast, outline, rehearse the intro) is the core craft.",
          "Impromptu compresses the same skills into a sprint. With only a minute or two of prep, you can't research — you generate. A reliable method: read the prompt, instantly pick an interpretation and a clear thesis, choose a simple structure (e.g., two or three examples from history, current events, literature, or personal experience that support your thesis), jot a few words for each, and spend remaining seconds on a strong opening line. Then deliver with confidence, using your prep words as a skeleton. The skill is decisiveness — committing fast to a workable structure rather than freezing in search of the perfect idea — which is exactly the instinct a debater needs when a round takes an unexpected turn.",
        ],
        codeExample: {
          label: "Extemp vs. Impromptu — Solo Speech Events",
          code: `  EXTEMPORANEOUS (extemp):
   draw a CURRENT-EVENTS question → ~30 min prep
   (limited article file) → ~7 min speech
   STRUCTURE:
    intro (hook + link)  →  THESIS answering the Q
    point 1 (evidence + analysis)
    point 2 (evidence + analysis)
    [point 3]            →  conclusion ties to intro
   ⚠ ANSWER THE EXACT QUESTION (don't drift)

  IMPROMPTU:
   draw a prompt (quote/word/concept) → ~1–2 min prep
   → short speech, NO research
   METHOD: pick interpretation → THESIS → 2–3 examples
    (history / news / literature / personal) → strong
    opening line → deliver from a skeleton of key words
   SKILL: DECISIVENESS — commit fast, don't freeze

  TRANSFER: extemp → current-events analysis (PF/parli)
            impromptu → cross-ex, POIs, off-script moments`,
        },
      },
      incident: {
        title: "Chautauqua and the American Culture of Public Speaking",
        when: "1874",
        where: "Chautauqua, New York",
        impact: "The Chautauqua movement spread public speaking, debate, and extemporaneous oratory across America as popular education — embedding the spoken word, delivered with skill on short notice, in the nation's civic life.",
        body: [
          "Beginning in 1874 at Lake Chautauqua, New York, the Chautauqua movement grew into a vast network of assemblies bringing lectures, debates, readings, and oratory to towns across America. Speakers traveled the 'Chautauqua circuit,' and the events cultivated a popular appetite for skilled public speaking — including extemporaneous oratory on the issues of the day. For millions of Americans without access to universities, Chautauqua was where they encountered argument, current-events analysis, and the art of the spoken word as a form of both education and entertainment.",
          "This culture seeded the individual speech events that survive in modern forensics. Extemporaneous and impromptu speaking carry forward the Chautauqua ideal: that an educated person should be able to speak intelligently and persuasively on short notice about the questions of the day. The events isolate skills that debate also demands — rapid analysis, clear structure, and confident delivery without a script — and refine them to a fine point. For a debater, time spent in extemp or impromptu is time building the spontaneity and organization that turn a prepared competitor into one who can also think and speak brilliantly on their feet, which is, in the end, what public reasoning has always required.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Draw a Question/Prompt", sub: "current event or abstract", type: "attacker" },
          { label: "Build Fast, Alone", sub: "30 min (extemp) / 2 min (impromptu)", type: "system" },
          { label: "Structure + Deliver", sub: "thesis, points, fluent speech", type: "victim" },
          { label: "Spontaneity Sharpened", sub: "transfers to live debate", type: "result" },
        ],
      },
      timeline: [
        { year: 1874, event: "The Chautauqua movement spreads public speaking and oratory across America", highlight: true },
        { year: 1925, event: "Extemporaneous speaking becomes a staple forensic event" },
        { year: 1950, event: "Impromptu speaking is formalized as a competitive speech event" },
        { year: 1990, event: "Extemp and impromptu become standard NSDA individual events" },
        { year: 2015, event: "Extemp's current-events focus pairs naturally with Public Forum debate" },
        { year: 2024, event: "Many top debaters cross-train in extemp/impromptu for spontaneity" },
      ],
      keyTakeaways: [
        "Extemp draws a current-events question with ~30 minutes of prep and a limited article file; impromptu draws a prompt with only ~1–2 minutes and no research",
        "Extemp builds rapid current-events analysis, evidence integration, and the discipline of answering the exact question",
        "Impromptu builds instant structure and decisiveness — committing fast to a workable thesis rather than freezing",
        "Both transfer directly to debate: extemp to PF/parli analysis, impromptu to cross-ex, POIs, and any off-script moment",
      ],
      references: [
        { title: "NSDA: Extemporaneous Speaking", url: "https://www.speechanddebate.org/competition-events/" },
        { title: "NSDA: Impromptu Speaking", url: "https://www.speechanddebate.org/competition-events/" },
        { title: "The Chautauqua Movement (Britannica)", url: "https://www.britannica.com/topic/Chautauqua-movement" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-09-q1",
          type: "Extemp vs Impromptu",
          challenge: `  Event A: draw a current-events question, get 30
  minutes and a file of articles, deliver a
  7-minute researched speech.
  Event B: draw a quotation, get 2 minutes and no
  resources, deliver a short speech.`,
          text: "Which is extemporaneous and which is impromptu?",
          options: [
            "A is impromptu; B is extemp",
            "A is extemporaneous (current-events question, ~30 min prep with a file); B is impromptu (a prompt, ~1–2 min prep, no research)",
            "Both are the same event",
            "Neither involves a time limit",
          ],
          correctIndex: 1,
          explanation: "A is extemporaneous speaking: a current-events question with roughly 30 minutes of prep using a limited file of articles, producing a researched ~7-minute speech. B is impromptu speaking: a prompt (quote, word, or concept) with only a minute or two of prep and no research, producing a short speech generated entirely from your own knowledge. Extemp tests research-and-analysis under moderate time pressure; impromptu tests pure spontaneity.",
        },
        {
          id: "debate-3-09-q2",
          type: "Answer the Question",
          challenge: `  An extemp speaker draws the question 'Will the new
  trade policy reduce inflation?' and delivers a
  polished, well-researched 7-minute speech about
  the history of trade policy generally — never
  directly answering whether it will reduce
  inflation.`,
          text: "Why is this penalized?",
          options: [
            "It isn't — any related speech is fine",
            "Extemp requires answering the exact question drawn; a speech that drifts to a related topic without answering the specific question is penalized, like a debate response that doesn't address the actual argument",
            "Trade policy is an off-limits topic",
            "The speech was too short",
          ],
          correctIndex: 1,
          explanation: "Extemp's core discipline is answering the precise question drawn — here, whether the new trade policy will reduce inflation. A polished speech about trade policy history that never answers the specific question drifts off-topic and is penalized, no matter how well-researched. This mirrors debate's flow discipline: a response that doesn't address the actual argument floats free and earns no credit. Take a clear position on the exact question and support it.",
        },
        {
          id: "debate-3-09-q3",
          type: "Impromptu Method",
          challenge: `  An impromptu speaker draws a prompt and spends
  their entire 90 seconds of prep searching for the
  'perfect' brilliant idea — then has to speak with
  no structure and freezes.`,
          text: "What's the better impromptu approach?",
          options: [
            "Keep searching for the perfect idea regardless of time",
            "Be decisive: quickly commit to a workable thesis and a simple 2–3 example structure, jot key words, and prepare a strong opening — speaking from a skeleton beats freezing for perfection",
            "Refuse to speak until inspired",
            "Memorize a generic speech and ignore the prompt",
          ],
          correctIndex: 1,
          explanation: "Impromptu rewards decisiveness, not perfectionism. With only seconds, the winning method is to commit fast to a workable interpretation and clear thesis, pick a simple structure (two or three supporting examples from history, current events, literature, or experience), jot key words, and craft a strong opening line — then deliver confidently from that skeleton. Hunting for the 'perfect' idea wastes the prep and causes freezing. This decisiveness is exactly the instinct a debater needs when a round goes off-script.",
        },
        {
          id: "debate-3-09-q4",
          type: "Transfer to Debate",
          challenge: `  A Public Forum debater struggles to analyze
  breaking current-events topics quickly and freezes
  during crossfire when caught off guard.`,
          text: "Which speech event would most directly help, and why?",
          options: [
            "Neither — speech events don't help debaters",
            "Extemp builds rapid current-events analysis (helping with PF topics) and impromptu builds on-the-spot structure and composure (helping with crossfire and off-script moments)",
            "Only memorized oratory would help",
            "Mock trial, because it has the same skills",
          ],
          correctIndex: 1,
          explanation: "Both events target this debater's weaknesses. Extemp trains rapid current-events analysis and evidence integration — directly useful for Public Forum's monthly topics. Impromptu trains the instinct to structure a response instantly and speak with composure under pressure — directly useful for crossfire, points of information, and any moment a round goes off-script. Many top debaters cross-train in these events precisely because they build the spontaneity and organization that pre-written casework can't.",
        },
      ],
    },
  },

  // ─── debate-3-10: Choosing Your Format ────────────────────────────────────────
  {
    epochId: "debate-3",
    wonder: {
      name: "The Crossroads",
      location: "Everywhere",
      era: "Timeless",
      emoji: "🧭",
    },
    id: "debate-3-10",
    order: 10,
    title: "Choosing Your Format",
    subtitle: "Matching the format to your strengths — and why the skills all transfer",
    category: "arts",
    xp: 88,
    badge: { id: "debate-3-badge-10", name: "The Navigator", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "There's no 'best' format — only the best fit for your strengths, your goals, and what's available to you. And whichever you pick, the core skills carry across them all.",
      year: 2024,
      overview: [
        "With so many formats, new debaters often ask which one to choose — and the honest answer is that it depends on your strengths, your goals, and what your school or club offers. If you love deep research and technical precision, policy rewards it. If you're drawn to philosophy and ethics and like competing solo, Lincoln-Douglas fits. If you want accessible, persuasive debate on current events, Public Forum suits you. If you think fast and have broad knowledge but dislike research files, parliamentary or British Parliamentary reward improvisation. If you want a balanced, international format, World Schools. If government and procedure fascinate you, Congress. If you're aiming at law, mock trial or moot court. The right choice aligns the format's demands with what you enjoy and want to develop.",
        "Practical factors matter as much as temperament. Availability is decisive — the best format is one you can actually compete in, with a coach and teammates, at tournaments you can reach. Time commitment varies: policy's year-long research is a heavy investment; Public Forum's monthly topics are lighter. Partner vs. solo is a real preference (PF, policy, and World Schools are team formats; LD is solo; Congress is individual-in-a-group). And your goals shape the choice: a future lawyer might prioritize mock trial; someone seeking broad communication skills might prefer Public Forum or World Schools; an aspiring policy analyst might thrive in policy or Congress.",
        "The most important thing to understand is that the core skills transfer across every format. Claim-warrant-impact, flowing, refutation, weighing, cross-examination, evidence evaluation, and persuasive delivery — everything from the Foundations and Logic epochs — applies in all of them; only the packaging changes. Debaters routinely switch formats or compete in several, and the skills compound. So choosing a format is not a permanent, high-stakes decision: pick one that fits and is available, develop the universal skills through it, and know that those skills will serve you in any other format, in any profession, and in life as a reasoning citizen. The format is the vehicle; the transferable skill of disciplined argument is the destination.",
      ],
      technical: {
        title: "A Decision Framework and the Universal Core",
        body: [
          "To choose, weigh four factors. (1) Temperament/strengths: research depth (policy), philosophy and solo competition (LD), persuasion and current events (PF), improvisation and breadth (parli/BP), balance (World Schools), procedure and government (Congress), legal advocacy (mock trial/moot court). (2) Goals: what skills or career are you building toward? (3) Logistics: what does your program offer, who can coach you, and what tournaments can you attend? (4) Commitment: how much research time can you give? No factor alone decides — the best fit usually satisfies several, especially availability, since a format you can't actually compete in helps no one.",
          "Underneath every format sits the same universal core, which is why switching is low-risk and cross-training is valuable. Every format requires building warranted arguments, listening and tracking the clash, refuting cleanly, weighing impacts, and delivering persuasively. A policy debater who moves to Public Forum keeps their evidence skills and gains accessibility; a parliamentary debater who tries mock trial keeps their on-feet reasoning and gains procedural discipline. Because the core is shared, debaters often compete in multiple formats and find each one strengthens the others. The practical advice: start with what's available and appealing, commit enough to build the fundamentals, and stay open — the transferable skills, not the specific format, are what you're really after.",
        ],
        codeExample: {
          label: "Choosing a Format — Fit, Logistics, and the Shared Core",
          code: `  MATCH FORMAT TO STRENGTH:
   deep research + technical .......... POLICY (CX)
   philosophy + solo + ethics ......... LINCOLN-DOUGLAS
   persuasion + current events ........ PUBLIC FORUM
   improvisation + broad knowledge .... PARLI / BRITISH PARL
   balanced + international ............ WORLD SCHOOLS
   government + procedure ............. CONGRESS
   law / courtroom .................... MOCK TRIAL / MOOT COURT
   spontaneity (solo speech) .......... EXTEMP / IMPROMPTU

  ALSO WEIGH (logistics often decide):
   • AVAILABILITY  what your program/circuit offers ★
   • GOALS         skills/career you're building toward
   • PARTNER?      team (PF/policy/WSD) vs solo (LD) vs
                   individual-in-group (Congress)
   • TIME          policy (year-long) ... PF (monthly)

  THE UNIVERSAL CORE (transfers to ALL formats):
   claim-warrant-impact · flowing · refutation ·
   weighing · cross-ex · evidence · delivery
  → the FORMAT is the vehicle; the SKILL is the destination.`,
        },
      },
      incident: {
        title: "One Activity, Many Doors",
        when: "Today",
        where: "Schools and universities worldwide",
        impact: "The proliferation of debate formats reflects a single insight expressed many ways — that disciplined argument can be taught through research, philosophy, improvisation, legislation, or law — and that whichever door a student enters, they emerge with the same transferable power to reason and persuade.",
        body: [
          "The variety of debate formats can look like fragmentation, but it's better understood as many doors into one house. Each format emphasizes a different facet of argument — policy the research, LD the philosophy, PF the persuasion, parliamentary the improvisation, Congress the deliberative process, mock trial the law — yet all of them teach the same underlying competence: how to build a sound argument, test it against opposition, and persuade a neutral judge. A student drawn in by any one facet ends up developing all of them, because the formats share a common core and competitors move between them.",
          "This is why the choice of format, while worth thinking about, is ultimately liberating rather than confining. There is no wrong door. The research-loving student who starts in policy and the improvisation-loving student who starts in parliamentary both build claim-warrant-impact reasoning, flowing, refutation, weighing, and persuasive delivery — and both carry those skills into whatever comes next, whether that's another format, a courtroom, a boardroom, a newsroom, a legislature, or simply life as a citizen who can think clearly and disagree well. The formats are many; the skill is one. Pick the door that fits, walk through it, and the house is yours.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Know Your Strengths", sub: "research? philosophy? speed?", type: "attacker" },
          { label: "Weigh Logistics + Goals", sub: "availability, partner, time", type: "system" },
          { label: "Pick a Fitting Format", sub: "no wrong door", type: "victim" },
          { label: "Build the Universal Core", sub: "skills transfer everywhere", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "Lincoln-Douglas models sustained two-sided argument" },
        { year: 1981, event: "WUDC globalizes British Parliamentary debate" },
        { year: 2002, event: "Public Forum is created to keep debate accessible" },
        { year: 2016, event: "World Schools is added to U.S. competition, expanding format choice" },
        { year: 2020, event: "Online tournaments widen access to formats regardless of location" },
        { year: 2024, event: "Debaters increasingly cross-train across formats as skills compound", highlight: true },
      ],
      keyTakeaways: [
        "There's no single best format — match it to your strengths, goals, and (decisively) what your program and circuit offer",
        "Weigh temperament (research vs. improvisation vs. persuasion), partner vs. solo, time commitment, and career goals",
        "The core skills — claim-warrant-impact, flowing, refutation, weighing, cross-ex, evidence, delivery — transfer across every format",
        "Choosing a format is low-risk: pick a fitting, available one, build the universal skills, and cross-train freely — the skill is the destination",
      ],
      references: [
        { title: "NSDA: Competition Events Overview", url: "https://www.speechanddebate.org/competition-events/" },
        { title: "Choosing a Debate Event (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "International Debate Education Association (IDEA)", url: "https://idebate.net/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-3-10-q1",
          type: "Matching Fit",
          challenge: `  A student loves moral philosophy, wants to
  compete individually rather than with a partner,
  and is drawn to questions of justice rather than
  policy mechanics or current events.`,
          text: "Which format is the most natural fit?",
          options: [
            "Public Forum",
            "Lincoln-Douglas — one-on-one, value/ethics resolutions, built on moral-philosophy frameworks",
            "Policy debate",
            "Congressional Debate",
          ],
          correctIndex: 1,
          explanation: "Lincoln-Douglas matches all three preferences: it's one-on-one (individual, no partner), centered on value resolutions about justice and morality, and structured around moral-philosophy frameworks. Public Forum is team-based and current-events focused; policy is research-heavy and team-based; Congress is a group legislative simulation. For a student drawn to ethics and solo competition over policy or current events, LD is the clear fit.",
        },
        {
          id: "debate-3-10-q2",
          type: "Logistics",
          challenge: `  A student is fascinated by policy debate after
  reading about it — but their school only offers
  Public Forum, has no policy coach, and the
  nearest policy tournaments are hundreds of miles
  away.`,
          text: "What should weigh heavily in their decision?",
          options: [
            "Ignore availability — only the ideal format matters",
            "Availability is decisive: the best format is one they can actually compete in with coaching and reachable tournaments; Public Forum (offered, coached, accessible) is the practical choice, and the core skills still transfer",
            "They should quit debate entirely",
            "They must travel hundreds of miles every weekend",
          ],
          correctIndex: 1,
          explanation: "Logistics — availability, coaching, and reachable tournaments — often decide format choice in practice. A format you can't actually compete in helps no one. Here, Public Forum is offered, coached, and accessible, making it the practical choice, even if policy sounds appealing in the abstract. Crucially, the universal skills (argument-building, flowing, refutation, weighing, delivery) transfer, so starting in PF still builds everything; the student could explore policy later if circumstances change.",
        },
        {
          id: "debate-3-10-q3",
          type: "Transferable Skills",
          challenge: `  A successful policy debater is nervous about
  switching to Public Forum, worried that years of
  policy training will be 'wasted' in a different
  format.`,
          text: "Why is this worry largely misplaced?",
          options: [
            "It's well-founded — no skills transfer between formats",
            "The core skills (claim-warrant-impact, flowing, refutation, weighing, cross-ex, evidence, delivery) transfer across all formats; only the packaging changes, so policy training strengthens their Public Forum",
            "They must restart from zero in any new format",
            "Public Forum requires entirely unrelated abilities",
          ],
          correctIndex: 1,
          explanation: "The worry is misplaced because every format rests on the same universal core: building warranted arguments, flowing, refuting cleanly, weighing impacts, cross-examining, evaluating evidence, and delivering persuasively. Only the packaging (speech order, judging norms, speed) differs. A policy debater moving to Public Forum keeps all that and gains accessibility and persuasion skills. Far from wasted, their training compounds — which is why debaters cross-train across formats and find each strengthens the others.",
        },
        {
          id: "debate-3-10-q4",
          type: "The Big Picture",
          challenge: `  A new debater is paralyzed trying to pick the
  'perfect' format, treating it as a permanent,
  high-stakes decision that will determine their
  entire future in the activity.`,
          text: "What's the healthier way to think about the choice?",
          options: [
            "It is permanent and must be perfect on the first try",
            "It's low-risk: pick a fitting, available format, commit enough to build the fundamentals, and stay open to switching or cross-training — the transferable skill of disciplined argument, not the specific format, is the real goal",
            "Never choose a format at all",
            "Only the most prestigious format is acceptable",
          ],
          correctIndex: 1,
          explanation: "Format choice is low-stakes because there's no wrong door — every format teaches the same core skills, and debaters routinely switch or compete in several. The healthy approach is to pick a format that fits your strengths and is actually available, commit enough to build the fundamentals, and remain open to cross-training or switching later. The destination is the transferable power to reason and persuade; the format is just the vehicle that gets you there.",
        },
      ],
    },
  },
];
