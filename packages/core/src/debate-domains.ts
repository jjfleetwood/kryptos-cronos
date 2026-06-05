// Debate & Speech — skill domains, the degree ladder, and real-world credential
// references for the /debate tracker. This is a LEARNING-readiness tracker, not the
// official award: the seven domains map to the seven Debate epochs, and the degree
// ladder (modeled on the NSDA Merit→Premier Distinction degrees) advances with the
// number of debate stages completed as a proxy for accumulated experience. Real
// credentials (NSDA degrees, Toastmasters Pathways/DTM, collegiate/international
// championships, the TOC) are surfaced as references for the learner to pursue.

const epochStages = (n: number): string[] =>
  Array.from({ length: 10 }, (_, i) => `debate-${n}-${String(i + 1).padStart(2, "0")}`);

export type DebateDomain = {
  id: string;
  name: string;
  epochId: string;
  weight: number; // % of the full track (sums to 100)
  description: string;
  color: string;
  icon: string;
  topics: string[];
  stageIds: string[];
};

export const DEBATE_DOMAINS: DebateDomain[] = [
  {
    id: "foundations",
    name: "Foundations",
    epochId: "debate-1",
    weight: 14,
    description:
      "The bedrock of every round: what a resolution is and who carries which burden, the claim-warrant-impact anatomy of an argument, evidence and its ethics, flowing the round, speaker roles, cross-examination, the four-step refutation, delivery, and competitive etiquette.",
    color: "sky",
    icon: "🎙️",
    topics: [
      "Resolutions & burdens",
      "Claim · warrant · impact",
      "Evidence & ethics",
      "Flowing the round",
      "Cross-examination basics",
      "Four-step refutation",
      "Delivery & signposting",
      "Ethics & the ballot",
    ],
    stageIds: epochStages(1),
  },
  {
    id: "logic",
    name: "Argumentation & Logic",
    epochId: "debate-2",
    weight: 14,
    description:
      "The reasoning engine: the Toulmin model, deductive validity vs. soundness, inductive strength, causation vs. correlation, the formal and informal fallacy families, analogical and statistical reasoning, and how burden of proof and presumption decide contested questions.",
    color: "cyan",
    icon: "🧠",
    topics: [
      "Toulmin model",
      "Deduction (validity/soundness)",
      "Induction & evidence strength",
      "Causation vs. correlation",
      "Formal & informal fallacies",
      "Analogical reasoning",
      "Statistical reasoning",
      "Burden of proof & parsimony",
    ],
    stageIds: epochStages(2),
  },
  {
    id: "formats",
    name: "The Formats",
    epochId: "debate-3",
    weight: 11,
    description:
      "Every major style: Policy (CX), Lincoln-Douglas, Public Forum, Parliamentary, British Parliamentary (Worlds), World Schools, Congressional Debate, Mock Trial and Moot Court, and the individual speech events — plus how to choose the format that fits you.",
    color: "teal",
    icon: "🏛️",
    topics: [
      "Policy (CX)",
      "Lincoln-Douglas",
      "Public Forum",
      "Parliamentary & British Parliamentary",
      "World Schools",
      "Congressional Debate",
      "Mock Trial / Moot Court",
      "Extemp & Impromptu",
    ],
    stageIds: epochStages(3),
  },
  {
    id: "case-construction",
    name: "Research & Case Construction",
    epochId: "debate-4",
    weight: 14,
    description:
      "Turning a resolution into a winning case: topic analysis, research and cutting cards, constructive cases, frameworks, policy stock issues, Public Forum links, weighing mechanisms, pre-written blocks, roadmapping and signposting, and red-teaming your own case.",
    color: "emerald",
    icon: "🏗️",
    topics: [
      "Topic analysis",
      "Research & cutting cards",
      "Constructive case architecture",
      "Framework & weighing standards",
      "Policy stock issues & plans",
      "Public Forum links",
      "Blocks & frontlines",
      "Red-teaming your case",
    ],
    stageIds: epochStages(4),
  },
  {
    id: "clash",
    name: "Clash",
    epochId: "debate-5",
    weight: 14,
    description:
      "Winning the exchange: reading the flow as a battlefield, layered refutation, turns, cross-examination strategy, extending and frontlining your arguments, collapsing onto your winners, strategic concession, crystallization, and exploiting the dropped argument.",
    color: "amber",
    icon: "⚔️",
    topics: [
      "Flow as battlefield",
      "Layered refutation",
      "Turns (link & impact)",
      "Cross-ex strategy",
      "Extending & frontlining",
      "Collapsing",
      "Strategic concession",
      "Crystallization & dropped args",
    ],
    stageIds: epochStages(5),
  },
  {
    id: "delivery",
    name: "Rhetoric & Delivery",
    epochId: "debate-6",
    weight: 12,
    description:
      "The art of persuasion: ethos, pathos, and logos; vocal and nonverbal delivery; the speed-vs-persuasion question and audience adaptation; word economy; narrative and framing; the classical rhetorical devices; managing nerves; and finding your authentic voice.",
    color: "rose",
    icon: "🎭",
    topics: [
      "Ethos · pathos · logos",
      "Vocal & nonverbal delivery",
      "Spreading vs. persuasion",
      "Word economy",
      "Narrative & framing",
      "Rhetorical devices",
      "Audience adaptation",
      "Composure & authentic voice",
    ],
    stageIds: epochStages(6),
  },
  {
    id: "mastery",
    name: "Competitive & Professional",
    epochId: "debate-7",
    weight: 11,
    description:
      "The highest level and the credentials: judge paradigms, theory and topicality, kritiks, counterplans and disadvantages, tournament strategy, the NSDA degree ladder, Toastmasters, collegiate and international honors, coaching and judging, and lifelong careers.",
    color: "indigo",
    icon: "🏆",
    topics: [
      "Judge paradigms",
      "Theory & topicality",
      "Kritiks",
      "Counterplans & disadvantages",
      "Tournament strategy",
      "NSDA degrees & Toastmasters",
      "Collegiate & international honors",
      "Coaching, judging & careers",
    ],
    stageIds: epochStages(7),
  },
  {
    id: "psychology",
    name: "The Psychology of Debate",
    epochId: "debate-8",
    weight: 10,
    description:
      "The cognitive science beneath persuasion: cognitive biases, the principles of influence, how judges actually decide, the role of emotion, cognitive load and fluency, reading people, why minds resist, psychological inoculation, the psychology of credibility, and the debater's own mental game.",
    color: "purple",
    icon: "🧠",
    topics: [
      "Cognitive biases",
      "Principles of influence",
      "How judges decide",
      "Emotion & judgment",
      "Cognitive load & fluency",
      "Reading people",
      "Why minds resist",
      "Inoculation & the mental game",
    ],
    stageIds: epochStages(8),
  },
];

// The degree ladder — modeled on the NSDA Merit→Premier Distinction degrees, advanced
// here by the number of debate stages completed (a learning proxy for accrued points).
export type DebateDegree = {
  name: string;
  threshold: number; // debate stages completed (of 70) to earn this degree
  color: string;
  blurb: string;
};

export const DEBATE_DEGREES: DebateDegree[] = [
  { name: "Degree of Merit", threshold: 8, color: "#94a3b8", blurb: "You've begun — the foundations are taking hold." },
  { name: "Degree of Honor", threshold: 20, color: "#38bdf8", blurb: "Real competence: argument, logic, and the formats." },
  { name: "Degree of Excellence", threshold: 34, color: "#2dd4bf", blurb: "You can build a case and win the clash." },
  { name: "Degree of Distinction", threshold: 50, color: "#34d399", blurb: "Advanced: delivery, persuasion, and strategy." },
  { name: "Degree of Special Distinction", threshold: 66, color: "#fbbf24", blurb: "Near-complete mastery — including the psychology of debate." },
  { name: "Degree of Premier Distinction", threshold: 80, color: "#a78bfa", blurb: "The complete advocate — every stage mastered." },
];

// Real-world credentials a learner can actually pursue (reference cards on the tracker).
export type DebateCredential = {
  name: string;
  org: string;
  icon: string;
  color: string;
  summary: string;
  ladder: string[];
  url: string;
};

export const DEBATE_CREDENTIALS: DebateCredential[] = [
  {
    name: "NSDA Degrees & Academic All American",
    org: "National Speech & Debate Association",
    icon: "🎖️",
    color: "indigo",
    summary:
      "The largest U.S. speech & debate honor society. Merit points earned in competition accumulate over a career into a ladder of degrees; Academic All American recognizes competitive success paired with academic excellence.",
    ladder: ["Merit", "Honor", "Excellence", "Distinction", "Special Distinction", "Premier Distinction", "Academic All American"],
    url: "https://www.speechanddebate.org/recognition/",
  },
  {
    name: "Toastmasters Pathways & DTM",
    org: "Toastmasters International",
    icon: "🗣️",
    color: "rose",
    summary:
      "The premier lifelong public-speaking credential, open to adults at any age and career stage. Progress through five-level specialized paths up to the Distinguished Toastmaster (DTM) — the highest award.",
    ladder: ["Pathways L1–L5", "Complete a path", "Multiple paths", "Distinguished Toastmaster (DTM)"],
    url: "https://www.toastmasters.org/pathways-overview",
  },
  {
    name: "Collegiate & International Championships",
    org: "NDT · CEDA · NPDA · AFA · WUDC · WSDC",
    icon: "🌍",
    color: "teal",
    summary:
      "University debate is governed by format-specific bodies (NDT/CEDA for policy, NPDA/APDA for parliamentary, NFA/AFA for LD and individual events). WUDC and WSDC are the global university and high-school championships.",
    ladder: ["NFA-LD / AFA-NIET", "NDT / CEDA", "NPDA / APDA", "WSDC (high school)", "WUDC (university)"],
    url: "https://en.wikipedia.org/wiki/World_Universities_Debating_Championship",
  },
  {
    name: "Tournament of Champions (TOC)",
    org: "University of Kentucky",
    icon: "🏆",
    color: "amber",
    summary:
      "The most prestigious U.S. high school honor — invitation-only. Earn 'bids' by reaching late elimination rounds at designated national tournaments; accumulating the required bids earns an invitation to the TOC.",
    ladder: ["Earn a 1st bid", "Earn a 2nd bid", "Qualify for the TOC", "Place at the TOC"],
    url: "https://toc.nationalspeechanddebate.org/",
  },
];

export function getDomainsForStage(stageId: string): DebateDomain[] {
  return DEBATE_DOMAINS.filter((d) => d.stageIds.includes(stageId));
}

// Compute per-domain and overall debate readiness, plus the current/next degree.
export function computeDebateReadiness(completedStageIds: string[]): {
  overall: number;
  totalCompleted: number;
  totalStages: number;
  domains: Array<{ domain: DebateDomain; completed: number; total: number; pct: number }>;
  currentDegree: DebateDegree | null;
  nextDegree: DebateDegree | null;
} {
  const domains = DEBATE_DOMAINS.map((domain) => {
    const completed = domain.stageIds.filter((id) => completedStageIds.includes(id)).length;
    const total = domain.stageIds.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { domain, completed, total, pct };
  });

  const overall = Math.round(
    domains.reduce((sum, { domain, pct }) => sum + (pct * domain.weight) / 100, 0)
  );

  const allIds = new Set(DEBATE_DOMAINS.flatMap((d) => d.stageIds));
  const totalStages = allIds.size;
  const totalCompleted = [...allIds].filter((id) => completedStageIds.includes(id)).length;

  let currentDegree: DebateDegree | null = null;
  let nextDegree: DebateDegree | null = null;
  for (const degree of DEBATE_DEGREES) {
    if (totalCompleted >= degree.threshold) currentDegree = degree;
    else { nextDegree = degree; break; }
  }

  return { overall, totalCompleted, totalStages, domains, currentDegree, nextDegree };
}
