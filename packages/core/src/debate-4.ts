import type { StageConfig, EpochConfig } from "./types";

export const debate4Epoch: EpochConfig = {
  id: "debate-4",
  name: "Research & Case Construction",
  subtitle: "Turning a Resolution Into a Case That Wins",
  description:
    "Knowing how to argue is not the same as having something to argue. This epoch is the workshop: how to analyze a resolution, research and organize evidence, build a constructive case with framework and contentions, structure a policy plan or Public Forum case, weigh impacts so the judge knows why you win, pre-write blocks against predictable attacks, and prepare against your own case. By the end you can take any resolution and build a complete, defensible case from scratch.",
  emoji: "🏗️",
  color: "emerald",
  unlocked: true,
};

export const debate4Stages: StageConfig[] = [
  // ─── debate-4-01: Topic Analysis ──────────────────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Drawing Board",
      location: "Every Prep Room",
      era: "Timeless",
      emoji: "🗺️",
    },
    id: "debate-4-01",
    order: 1,
    title: "Topic Analysis",
    subtitle: "Mapping a resolution before you research a single source",
    category: "arts",
    xp: 86,
    badge: { id: "debate-4-badge-01", name: "Topic Mapper", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Before you research, you map — because you can't find the right evidence until you know what the debate is actually about.",
      year: 2024,
      overview: [
        "Topic analysis is the first step of case construction: breaking down a resolution to understand what the debate will really be about before researching or writing. Skipping it is the most common novice mistake — diving into research without knowing what you're looking for, and ending up with a pile of evidence that doesn't fit a coherent case. Good topic analysis answers a few questions first:\n- What do the key terms mean?\n- What must each side prove?\n- What are the major arguments available to both sides?\n- Where will the central clash happen?",
        "The core technique is brainstorming both sides. Even though you'll be assigned (or choose) one side in a round, you analyze the resolution by listing the strongest arguments for AND against it. This does two things: it reveals the best arguments you can run, and it exposes the attacks you'll face, so you can prepare for them. Mapping the 'ground' — the territory of arguments each side legitimately gets — shows you where your case is strong, where it's vulnerable, and where the decisive clash between the sides will occur. Strong debaters can argue either side of their topic, because they've mapped the whole field.",
        "Topic analysis also identifies the resolution's type and burden (from epoch 1) and the likely framework (from epoch 2's logic and the format's conventions). Several questions shape the map:\n- Is it fact, value, or policy?\n- What's the weighing standard going to be?\n- What definitions are contested?\n- What's the status quo, and what would change?\nFrom this map you derive a research plan — you now know which arguments need evidence, which terms need defining, and which clashes to prepare for. The discipline is simple but powerful: think before you research, map before you build. A well-analyzed topic makes everything downstream — research, case-writing, rebuttals — faster and sharper.",
      ],
      technical: {
        title: "Brainstorming Both Sides and Mapping the Clash",
        body: [
          "A practical topic-analysis process: (1) Define the key terms and note which are contested. (2) Identify the resolution type and each side's burden. (3) Brainstorm the strongest 4–6 arguments for the Affirmative and the strongest 4–6 for the Negative, without filtering. (4) For each argument, note what evidence it would need and what the obvious response is. (5) Identify the 2–3 places where the sides genuinely clash — the central battlegrounds. (6) Decide which arguments are your strongest and most defensible. This map becomes both your case outline and your research to-do list.",
          "Mapping the clash is the highest-value part. Most resolutions have a small number of decisive battlegrounds — points where the Affirmative's best argument meets the Negative's best response. For a resolution on a wealth tax, the clash might be 'revenue and fairness' vs. 'capital flight and enforcement.' Identifying these in advance tells you where to concentrate research and where the round will be won or lost. It also prevents the scattered case that argues ten weak points instead of two strong ones. The debater who has mapped the clash walks into the round knowing exactly what they need to win — and what they can afford to concede.",
        ],
        codeExample: {
          label: "Topic Analysis — Map Before You Research",
          code: `  STEP-BY-STEP (do this BEFORE researching):
   1. DEFINE key terms; flag the contested ones
   2. IDENTIFY type (fact/value/policy) + each burden
   3. BRAINSTORM both sides (don't filter yet):
        AFF: 4–6 strongest arguments
        NEG: 4–6 strongest arguments
   4. For each arg: what EVIDENCE? what's the RESPONSE?
   5. MAP THE CLASH — the 2–3 decisive battlegrounds
   6. PICK your strongest, most defensible arguments

  EXAMPLE — "Resolved: adopt a wealth tax"
   AFF ground: revenue, inequality, fairness
   NEG ground: capital flight, enforcement cost, growth
   THE CLASH: "revenue + fairness" vs "flight + enforcement"
   → research concentrates HERE; round is won/lost HERE

  OUTPUT: a case outline AND a research to-do list.
  RULE: think before you research; map before you build.`,
        },
      },
      incident: {
        title: "Why Coaches Start With the Map, Not the Cards",
        when: "Modern debate pedagogy",
        where: "Debate classrooms everywhere",
        impact: "Experienced coaches universally teach topic analysis before research because every season they watch novices waste weeks gathering evidence for a case they hadn't yet thought through — and lose to opponents who mapped the topic first.",
        body: [
          "Ask any veteran debate coach about the most common rookie error, and many will name the same thing: students who, handed a new resolution, immediately start searching for evidence without first thinking about what the debate is actually about. They accumulate articles and statistics, build a case around whatever they found first, and then discover in their first rounds that they prepared for the wrong clash — they have evidence for arguments no one contests and nothing for the argument that decides the round. The research felt productive but was unguided.",
          "Coaches counter this by forcing topic analysis first: brainstorm both sides, map the clash, identify the decisive battlegrounds, and only then research to fill the specific gaps the map reveals. The result is dramatic — a debater who has mapped the topic researches faster (they know what they're looking for), builds a focused case (two strong arguments, not ten weak ones), and walks into rounds anticipating the real clash. The lesson generalizes far beyond debate: in any complex problem, the temptation is to start 'doing' before 'thinking,' and the discipline of mapping the problem first — what's really at stake, where the genuine conflict lies — is what separates effective work from busy work.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Resolution", sub: "terms, type, burden", type: "attacker" },
          { label: "Brainstorm Both Sides", sub: "strongest args for each", type: "system" },
          { label: "Map the Clash", sub: "the decisive battlegrounds", type: "victim" },
          { label: "Research Plan", sub: "know what to look for", type: "result" },
        ],
      },
      timeline: [
        { year: -55, event: "Cicero's stasis theory identifies the precise point of dispute before arguing" },
        { year: 1958, event: "Toulmin's model clarifies the parts of an argument to map" },
        { year: 1990, event: "Topic analysis becomes a formal first step in debate curricula", highlight: true },
        { year: 2005, event: "Both-sides brainstorming is standardized in novice training" },
        { year: 2018, event: "Clash-mapping emerges as a core pre-research discipline" },
        { year: 2024, event: "Topic analysis opens the case-construction process in modern coaching" },
      ],
      keyTakeaways: [
        "Topic analysis means mapping a resolution — terms, burdens, arguments, and clash — before researching anything",
        "Brainstorm the strongest arguments for BOTH sides to reveal your best case and the attacks you'll face",
        "Map the 2–3 decisive battlegrounds where the sides genuinely clash — that's where the round is won or lost",
        "The map becomes both your case outline and your research to-do list — think before you research, map before you build",
      ],
      references: [
        { title: "NSDA: Analyzing the Resolution", url: "https://www.speechanddebate.org/" },
        { title: "Cicero's Stasis Theory (Purdue OWL)", url: "https://owl.purdue.edu/" },
        { title: "Case Construction Fundamentals (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-01-q1",
          type: "Research First?",
          challenge: `  Handed a new resolution, a novice immediately
  opens a search engine and starts saving every
  article they can find, planning to 'figure out
  the case later' from whatever they collect.`,
          text: "What's the problem with this approach?",
          options: [
            "Nothing — gathering evidence first is ideal",
            "Researching before topic analysis produces unguided evidence that may not fit a coherent case or the real clash; you should map the topic first, then research to fill specific gaps",
            "They should save even more articles",
            "Topic analysis is only for advanced debaters",
          ],
          correctIndex: 1,
          explanation: "Researching before analyzing the topic is the classic novice error: you accumulate evidence with no idea whether it fits the decisive clash, often preparing for arguments no one contests while missing the one that matters. Topic analysis first — defining terms, brainstorming both sides, mapping the clash — tells you exactly what to research. Then your research is guided and efficient. Think before you research; map before you build.",
        },
        {
          id: "debate-4-01-q2",
          type: "Both Sides",
          challenge: `  A debater is assigned the Affirmative and reasons:
  "I only need to brainstorm Affirmative arguments —
  why waste time thinking about the Negative's
  case?"`,
          text: "Why should they brainstorm both sides anyway?",
          options: [
            "They shouldn't — only your own side matters",
            "Brainstorming the Negative reveals the attacks you'll face so you can prepare for them, and clarifies where the clash is — you can't defend against arguments you never anticipated",
            "It's required to switch sides mid-round",
            "Only to help the opponent",
          ],
          correctIndex: 1,
          explanation: "Even when assigned one side, you brainstorm both because the opponent's best arguments are the attacks you must be ready to answer. Mapping the Negative's ground shows where your case is vulnerable and where the decisive clash lies, letting you pre-build responses. A debater who only thinks about their own arguments gets blindsided by predictable attacks. Strong competitors can argue either side precisely because they've mapped the whole field.",
        },
        {
          id: "debate-4-01-q3",
          type: "Mapping the Clash",
          challenge: `  After brainstorming, a debater has a list of ten
  possible arguments. They plan to research and run
  all ten in their case.`,
          text: "What does mapping the clash suggest instead?",
          options: [
            "Run all ten — more arguments always wins",
            "Identify the 2–3 decisive battlegrounds and concentrate on the strongest, most defensible arguments there; a focused case beats ten scattered weak points",
            "Pick arguments at random",
            "Run only one argument no matter what",
          ],
          correctIndex: 1,
          explanation: "Mapping the clash reveals that most resolutions turn on a few decisive battlegrounds, not ten equal points. The right move is to identify those 2–3 central clashes and concentrate on your strongest, most defensible arguments there. A focused case with deep, well-supported arguments beats a scattered case of ten shallow ones — and it tells you where to spend your limited research time. Depth at the decisive points wins; breadth at trivial ones doesn't.",
        },
        {
          id: "debate-4-01-q4",
          type: "Output",
          challenge: `  A debater finishes a thorough topic analysis:
  defined terms, brainstormed both sides, mapped
  the clash, and picked their strongest arguments.`,
          text: "What two things has this analysis produced?",
          options: [
            "Only a finished speech",
            "A case outline (the arguments to build) AND a research to-do list (the specific evidence and definitions to find) — so downstream work is focused",
            "A list of opponents to avoid",
            "Nothing usable until the round begins",
          ],
          correctIndex: 1,
          explanation: "A good topic analysis yields two deliverables: a case outline (your strongest arguments and the framework, ready to build out) and a targeted research to-do list (exactly which arguments need evidence and which terms need defining). Together they make all downstream work — research, case-writing, and rebuttal prep — faster and sharper, because you now know precisely what you're looking for and building toward. The map guides everything that follows.",
        },
      ],
    },
  },

  // ─── debate-4-02: Research and Cutting Cards ──────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Reading Room",
      location: "Research Libraries Everywhere",
      era: "Modern",
      emoji: "🗃️",
    },
    id: "debate-4-02",
    order: 2,
    title: "Research and Cutting Cards",
    subtitle: "Finding strong evidence and organizing it so you can use it under pressure",
    category: "arts",
    xp: 86,
    badge: { id: "debate-4-badge-02", name: "The Researcher", emoji: "🗃️" },
    challengeType: "quiz",
    info: {
      tagline: "Great evidence you can't find at the right moment is useless — research is half discovery and half organization.",
      year: 2004,
      overview: [
        "Once topic analysis tells you what to look for, research finds the evidence — the skill has two halves: finding strong sources and organizing them. Strong research goes beyond the first search result to authoritative, recent, relevant sources:\n- Peer-reviewed studies.\n- Government and institutional data.\n- Expert analysis.\n- Quality journalism.\nEvaluate each with the CRAAP/quality tests from epoch 1 — the goal is not the most evidence but the best evidence for the specific arguments your map identified.",
        "'Cutting a card' is debate's term for turning a source into usable evidence, and a card has three parts:\n- The tag — a short label, in your own words, stating what the card proves (read first in a round to tell the judge what's coming).\n- The citation — author, qualification, date, source (establishes credibility).\n- The quoted text — the relevant excerpt, accurately reproduced, key sentences emphasized (the proof).\nCut cards honestly — never distorting the source's meaning (epoch 1's evidence ethics) — and tag them clearly: that's the craft that turns raw reading into a usable arsenal.",
        "Organization is what makes research pay off under pressure. Evidence buried in a disorganized pile might as well not exist when you have seconds to respond. Debaters organize evidence by argument — files or folders for each contention, each likely opponent argument, each anticipated clash — so that when a specific argument arises in a round, they can find the relevant card immediately. Modern debaters often use digital tools (shared documents, evidence software) to tag, sort, and search their files. The discipline mirrors topic analysis: research with a purpose (fill the map's gaps), cut cleanly, and file by argument so the evidence is there when the clash demands it.",
      ],
      technical: {
        title: "Anatomy of a Card and Filing by Argument",
        body: [
          "A well-cut card is built for speed and credibility. The tag is a concise, accurate claim in your own words ('Wealth taxes drive capital flight — France lost billions before repealing theirs'). The citation follows immediately (author, their qualification, publication, date). Then the quoted excerpt, reproduced faithfully, with the most relevant sentences emphasized so you can read the key lines quickly. A good tag is honest — it claims only what the card actually supports — because a tag that overstates the evidence is both an ethics problem and a liability when the opponent reads the card and exposes the gap.",
          "Filing by argument is the organizational key. Rather than one undifferentiated pile, create a structure mapped to your case and the anticipated clash: a folder per contention (offense), a folder per likely opponent argument (defense/answers), and 'blocks' of pre-cut responses to predictable attacks. When an argument arises in a round, you go straight to its folder. Many debaters maintain an indexed master file and use search to locate cards instantly. The investment in organization is repaid every round: the difference between a debater who 'has a card on that somewhere' and one who reads it in three seconds is often the difference between winning and losing the exchange.",
        ],
        codeExample: {
          label: "Cutting a Card and Filing by Argument",
          code: `  ANATOMY OF A CARD:
   ┌────────────────────────────────────────────┐
   │ TAG   short, HONEST claim in your own words │
   │       "Wealth taxes drive capital flight."  │
   │ CITE  author, qualification, source, date   │
   │       "Smith, OECD economist, FT, 2023"     │
   │ TEXT  faithful quoted excerpt (key lines    │
   │       emphasized for fast reading)          │
   └────────────────────────────────────────────┘
   ⚠ tag only what the card ACTUALLY supports
     (overstated tag = ethics problem + liability)

  FILE BY ARGUMENT (not one big pile):
   /Contention-1-Revenue   ← your offense cards
   /Contention-2-Fairness
   /Answers-to-CapitalFlight ← defense / blocks
   /Answers-to-Enforcement
   → argument arises → go straight to its folder

  GOAL: not the MOST evidence — the BEST evidence,
   findable in seconds when the clash demands it.`,
        },
      },
      incident: {
        title: "The Card Revolution and the Research Arms Race",
        when: "2004",
        where: "The national policy debate circuit",
        impact: "The shift to digital evidence and laptop debating transformed research from a library chore into a high-volume, highly organized discipline — and made the ability to find the right card instantly a decisive competitive skill.",
        body: [
          "In the early 2000s, competitive debate — especially policy — moved from paper evidence in file boxes to digital evidence on laptops. The change was transformative. Debaters could now cut, store, and search thousands of cards electronically, share evidence within teams, and pull up any card in seconds. Research volume exploded, and with it the premium on organization: when you carry ten thousand cards, the bottleneck is no longer having the evidence but finding the right one in the heat of a round.",
          "This created an arms race in both research and information management. Teams developed elaborate filing systems, indexed master files, and tagging conventions so that any card could be located instantly. The skills this built are strikingly modern and transferable: efficiently searching large bodies of information, evaluating source quality at speed, distilling a source to its essential claim (the tag), and organizing knowledge so it's retrievable under pressure. These are the core competencies of the information age — research, synthesis, and knowledge management — and competitive debate trains them more intensely than almost any other activity. The card may be a debate artifact, but the discipline of finding, distilling, and organizing evidence is a life skill.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Research With Purpose", sub: "fill the map's gaps", type: "attacker" },
          { label: "Cut Clean Cards", sub: "tag, cite, faithful quote", type: "system" },
          { label: "File by Argument", sub: "offense + answers folders", type: "victim" },
          { label: "Findable in Seconds", sub: "evidence ready at the clash", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Evidence-based policy debate adopts cards and file boxes" },
        { year: 1990, event: "Card-cutting and tagging conventions standardize in coaching" },
        { year: 2004, event: "Laptop debating and digital evidence transform research volume", highlight: true },
        { year: 2010, event: "Shared team evidence files and indexing become standard" },
        { year: 2018, event: "Evidence software enables instant search of large card files" },
        { year: 2024, event: "AI tools raise new questions about evidence sourcing and verification" },
      ],
      keyTakeaways: [
        "Research finds the best evidence for the specific arguments your topic analysis identified — quality over quantity",
        "A card has three parts: an honest tag (your label), the citation (author, qualification, date, source), and the faithful quoted excerpt",
        "Tag only what the card actually supports — an overstated tag is both an ethics problem and a liability when the opponent reads it",
        "File evidence by argument (offense and answer folders) so the right card is findable in seconds when the clash arises",
      ],
      references: [
        { title: "NSDA: Researching and Cutting Cards", url: "https://www.speechanddebate.org/" },
        { title: "Evidence Evaluation — CRAAP Test (CSU Chico)", url: "https://library.csuchico.edu/help/source-or-information-good" },
        { title: "Debate Evidence Ethics (NSDA Rules)", url: "https://www.speechanddebate.org/competition-rules/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-02-q1",
          type: "Card Anatomy",
          challenge: `  A debater pastes a long quote from a source into
  their file with no label and no citation — just
  the raw text. In the round, they can't quickly
  say what it proves or who wrote it.`,
          text: "What two parts of a proper card are missing?",
          options: [
            "Nothing — raw text is a complete card",
            "The tag (a short, honest label stating what it proves) and the citation (author, qualification, date, source) — without them the card is hard to deploy and lacks credibility",
            "More quoted text",
            "A second unrelated quote",
          ],
          correctIndex: 1,
          explanation: "A usable card has three parts: tag, citation, and quoted text. This one has only the text. It's missing the tag (a concise, honest claim in the debater's own words, read first to tell the judge what's coming) and the citation (author, qualification, publication, date, which establishes credibility). Without them, the evidence is slow to deploy and carries no visible authority — the judge can't quickly grasp what it proves or weigh how credible it is.",
        },
        {
          id: "debate-4-02-q2",
          type: "Honest Tags",
          challenge: `  A source says a policy 'may modestly reduce
  emissions in some sectors.' The debater tags the
  card: 'Policy dramatically slashes emissions
  across the economy.'`,
          text: "What's wrong with this tag?",
          options: [
            "Nothing — tags should sound impressive",
            "The tag overstates what the card supports ('may modestly... in some sectors' ≠ 'dramatically... across the economy'), which is an ethics problem and a liability when the opponent reads the actual card",
            "The tag is too short",
            "Tags should never summarize the card",
          ],
          correctIndex: 1,
          explanation: "The tag claims far more than the source supports — 'may modestly reduce in some sectors' is not 'dramatically slashes across the economy.' An overstated tag is both an evidence-ethics problem (misrepresenting the source) and a strategic liability: when the opponent calls for and reads the card, the gap between the tag and the text is exposed, damaging the debater's credibility on everything else. Tags must honestly claim only what the card actually proves.",
        },
        {
          id: "debate-4-02-q3",
          type: "Organization",
          challenge: `  A debater has excellent evidence but keeps it all
  in one giant unsorted document. In a round, an
  opponent makes an argument the debater HAS a great
  card against — but they can't find it in time.`,
          text: "What organizational principle would fix this?",
          options: [
            "Add more cards to the same document",
            "File evidence by argument (folders per contention and per anticipated opponent argument) so the right card is findable in seconds when its clash arises",
            "Delete the evidence and rely on memory",
            "Keep everything in one pile but make it longer",
          ],
          correctIndex: 1,
          explanation: "Evidence you can't find under pressure might as well not exist. The fix is filing by argument: a folder per contention (your offense) and a folder per anticipated opponent argument (your answers/blocks), so when a specific argument arises you go straight to its folder. A giant unsorted document fails exactly when speed matters most. Good organization — mirroring your topic-analysis map — is what turns a research library into a usable, in-round arsenal.",
        },
        {
          id: "debate-4-02-q4",
          type: "Quality vs Quantity",
          challenge: `  Two debaters research a contention. One collects
  40 mediocre sources (blogs, old data, opinion
  pieces). The other finds 3 authoritative, recent,
  directly relevant peer-reviewed and government
  sources.`,
          text: "Whose research better serves their case?",
          options: [
            "The one with 40 sources — volume wins",
            "The one with 3 authoritative, recent, relevant sources — research aims at the best evidence for the specific argument, not the most evidence",
            "They are equal",
            "Neither — debaters shouldn't cite sources",
          ],
          correctIndex: 1,
          explanation: "Research targets the best evidence for the specific arguments your map identified, not the largest quantity. Three authoritative, recent, directly relevant sources (peer-reviewed studies, government data) outweigh forty weak ones (blogs, stale data, opinion) — and a judge weighs the strong evidence far more heavily. Volume of weak sources is a liability: each invites quality challenges. Apply the evidence-quality tests from epoch 1 and concentrate on strong, relevant proof for the decisive clash.",
        },
      ],
    },
  },

  // ─── debate-4-03: Building the Constructive Case ──────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Keystone Arch",
      location: "Architecture, Everywhere",
      era: "Timeless",
      emoji: "🏛️",
    },
    id: "debate-4-03",
    order: 3,
    title: "Building the Constructive Case",
    subtitle: "Structuring contentions into a case that stands on its own",
    category: "arts",
    xp: 88,
    badge: { id: "debate-4-badge-03", name: "Case Builder", emoji: "🏛️" },
    challengeType: "quiz",
    info: {
      tagline: "A case isn't a list of facts — it's an architecture: a thesis, a few load-bearing contentions, each a complete argument, arranged to be impossible to ignore.",
      year: 2024,
      overview: [
        "The constructive case is the structured presentation of your side, delivered in your first speech — a clear, complete, self-standing reason to vote for you before any clash begins. A strong case has a recognizable architecture:\n- An introduction and (where the format calls for it) a framework.\n- A small number of contentions — typically two or three.\n- Each contention a complete argument with claim, warrant, and impact (epoch 1).\nArrange them in a logical order and signpost so the judge can flow them.",
        "The contention is the case's building block. Each contention is a major reason your side is correct, developed fully: a clear claim (the contention's thesis), warrants (reasoning and evidence supporting it), and an impact (why it matters, linked to the framework or burden). Contentions are usually labeled and numbered ('Contention One: Economic Growth') so they're easy to track and reference later. The discipline is to make each contention strong and self-contained — a judge should be able to vote for you on any single winning contention, so you want two or three solid ones rather than six flimsy ones.",
        "Architecture matters as much as content:\n- Order contentions purposefully — often strongest first, or in a logic that builds.\n- Put the framework (if any) before the contentions, since it tells the judge how to weigh them.\n- Signpost relentlessly so the case is flowable.\n- Keep within time, which forces ruthless prioritization — every second on a weak contention is one not spent strengthening a winning one.\nA well-built constructive is like a sound structure — a clear thesis, a few load-bearing contentions, each complete, arranged so the whole stands even under attack. Build it well and the rest of the round is defending a strong position rather than scrambling to assemble one.",
      ],
      technical: {
        title: "The Contention and the Shape of a Case",
        body: [
          "Each contention should be internally complete: Claim (the contention's headline thesis), Warrant (the reasoning and evidence — usually a logical link plus a card or two), and Impact (why it matters, tied to the framework or the resolution's burden). A common sub-structure within a contention is uniqueness/link/impact or simply point-evidence-explanation: state the point, prove it with evidence, then explain its significance. The explanation step — connecting the evidence back to why it wins — is what novices skip and what experienced debaters never omit.",
          "At the case level, sequence the pieces deliberately:\n- introduction (brief, engaging, framing the resolution)\n- framework (the lens for weighing — value/criterion in LD, observations/definitions in policy or PF)\n- the contentions, in a purposeful order\n- a short conclusion\nTwo or three contentions is the norm because depth beats breadth — a judge can vote on one winning contention, so you want each to be robust and defensible rather than spreading thin. Stay within the time limit by cutting the weakest material; a focused case of two strong contentions outperforms a rushed case of five. The whole structure should be signposted ('My first contention...', 'The impact here is...') so the judge flows it cleanly.",
        ],
        codeExample: {
          label: "Constructive Case Architecture",
          code: `  CASE STRUCTURE (delivered in your 1st speech):
   1. INTRODUCTION   brief, engaging, frames the topic
   2. FRAMEWORK      the lens for weighing (if format uses)
                     LD: value + criterion | PF/policy: obs.
   3. CONTENTIONS    2–3 major reasons you're right
   4. CONCLUSION     short — restate why you win

  EACH CONTENTION = a COMPLETE argument:
   ┌─────────────────────────────────────────────┐
   │ CLAIM    "Contention 1: Economic Growth"     │
   │ WARRANT  reasoning + evidence (card or two)   │
   │ IMPACT   why it matters → tied to framework   │
   │          (← novices skip this; never omit it) │
   └─────────────────────────────────────────────┘

  WHY 2–3 (not 6)?  judge can vote on ONE winning
   contention → make each ROBUST. depth > breadth.

  SIGNPOST everything · stay in TIME (cut the weakest).`,
        },
      },
      incident: {
        title: "The Keystone Principle — Why Structure Holds",
        when: "Timeless",
        where: "From Roman arches to modern cases",
        impact: "The Roman arch stands because each stone bears load and the keystone locks the structure — the same principle by which a well-architected case stands under attack while a pile of unstructured facts collapses.",
        body: [
          "A Roman arch is one of history's most enduring structures, and it works through architecture, not mass: each voussoir (wedge stone) bears and transfers load, and the central keystone locks the whole together so the arch carries weight that would crush a flat lintel. Remove the structure and you have a heap of stones; impose the structure and you have a span that lasts two thousand years. The principle — that arrangement, not just material, creates strength — is exactly the principle of a well-built case.",
          "A constructive case stands or falls on its architecture. The thesis (framework) is the keystone that tells the judge how everything is weighed; the contentions are the load-bearing stones, each complete and self-supporting, arranged so that the case carries the weight of the round. A debater who merely piles up facts — true statements with no structure, no framework, no impacts — has a heap of stones that collapses the moment an opponent pushes. A debater who builds an arch — clear thesis, two or three complete, well-ordered, well-impacted contentions — has a structure that holds even as the opponent attacks individual stones, because the judge can still vote on any contention left standing. Build the arch, not the pile.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Intro + Framework", sub: "frame and weighing lens", type: "attacker" },
          { label: "2–3 Contentions", sub: "each claim-warrant-impact", type: "system" },
          { label: "Order + Signpost", sub: "purposeful, flowable", type: "victim" },
          { label: "A Case That Stands", sub: "win on any contention", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "Lincoln-Douglas model warranted, structured cases for a public audience" },
        { year: 1958, event: "Toulmin's model formalizes the parts of each contention" },
        { year: 1990, event: "The contention-based constructive becomes the standard case structure", highlight: true },
        { year: 2005, event: "Framework-first case architecture spreads across formats" },
        { year: 2015, event: "Depth-over-breadth (2–3 strong contentions) becomes coaching orthodoxy" },
        { year: 2024, event: "Constructive case architecture anchors case-construction training" },
      ],
      keyTakeaways: [
        "A constructive case is an architecture: introduction, framework (if used), 2–3 contentions, and a conclusion",
        "Each contention is a complete argument — claim, warrant (reasoning + evidence), and impact tied to the framework or burden",
        "Use 2–3 robust contentions, not many flimsy ones: a judge can vote on one winning contention, so depth beats breadth",
        "Order purposefully, put framework before contentions, signpost relentlessly, and stay in time by cutting the weakest material",
      ],
      references: [
        { title: "NSDA: Constructing a Case", url: "https://www.speechanddebate.org/" },
        { title: "Toulmin's Model of Argument (Purdue OWL)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html" },
        { title: "Case Writing for Debate (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-03-q1",
          type: "Case vs List",
          challenge: `  A debater's 'case' is a rapid list of fifteen true
  facts about the topic, with no thesis, no
  framework, no explanation of why any fact means
  their side wins.`,
          text: "Why isn't this an effective constructive case?",
          options: [
            "It is effective — more facts means more proof",
            "A case needs architecture — a thesis/framework and 2–3 complete contentions with impacts — not a pile of facts; without structure and impacts, the judge has no organized reason to vote for the side",
            "Fifteen facts is too few",
            "Facts should never appear in a case",
          ],
          correctIndex: 1,
          explanation: "A list of true facts is a 'pile of stones,' not an arch. An effective constructive case has architecture: a thesis/framework telling the judge how to weigh, and two or three complete contentions, each with a claim, warrant, and impact explaining why it means the side wins. Facts without structure and without impacts give the judge no organized reason to vote — they collapse under the first push. Build contentions that connect evidence to why you win, not an unstructured fact dump.",
        },
        {
          id: "debate-4-03-q2",
          type: "Complete Contention",
          challenge: `  Contention One states a clear claim and reads
  strong evidence for it — but never explains why
  this contention means the judge should vote for
  this side.`,
          text: "What's missing, and why does it matter?",
          options: [
            "Nothing — evidence alone proves the contention",
            "The impact — the explanation of why the contention matters, tied to the framework/burden; without it the judge knows the claim is true but not why it wins the round",
            "A second claim",
            "More evidence",
          ],
          correctIndex: 1,
          explanation: "The contention has a claim and a warrant (evidence) but no impact — the step explaining why it matters and how it connects to the framework or the resolution's burden. This is the most commonly skipped part. Without the impact, the judge accepts the claim as true but doesn't know why it should decide the ballot. Every contention must answer 'so what?' by linking back to why this is a reason to vote for your side.",
        },
        {
          id: "debate-4-03-q3",
          type: "Depth vs Breadth",
          challenge: `  Two cases on the same resolution:

   Case A: six contentions, each shallow, rushed to
           fit the time limit.
   Case B: two contentions, each deeply warranted,
           well-evidenced, and clearly impacted.`,
          text: "Which case structure is generally stronger, and why?",
          options: [
            "Case A — more contentions means more paths to victory",
            "Case B — a judge can vote on a single winning contention, so two robust, defensible contentions beat six shallow ones that are easy to attack",
            "They are identical in strength",
            "Neither — cases should have exactly one contention",
          ],
          correctIndex: 1,
          explanation: "Depth beats breadth in case construction. Because a judge can vote for you on any single winning contention, two robust, well-warranted, well-impacted contentions give you strong, defensible ground — while six shallow ones are each easy to attack and collectively too rushed to develop. The two-or-three-contention norm exists precisely for this reason: concentrate your time and evidence on a few arguments strong enough to win on their own.",
        },
        {
          id: "debate-4-03-q4",
          type: "Architecture",
          challenge: `  A debater puts their contentions first and then,
  at the very end of the case, finally explains the
  framework the judge should use to weigh everything.`,
          text: "Why is this ordering suboptimal?",
          options: [
            "It's optimal — framework belongs last",
            "The framework is the lens for weighing the contentions, so it should come BEFORE them — presenting it last means the judge heard the contentions without knowing how to evaluate them",
            "Frameworks should never be stated",
            "Contentions must always come after the conclusion",
          ],
          correctIndex: 1,
          explanation: "The framework tells the judge how to weigh the contentions, so it belongs before them — typically right after the introduction. Presenting contentions first and the framework last means the judge processed your arguments without the lens for evaluating them, weakening their impact. Proper case architecture is intro → framework → contentions → conclusion, so the judge knows the weighing standard before hearing the arguments it's meant to evaluate.",
        },
      ],
    },
  },

  // ─── debate-4-04: The Framework ───────────────────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Lens Grinder's Workshop",
      location: "Delft, Netherlands",
      era: "17th Century",
      emoji: "🔭",
    },
    id: "debate-4-04",
    order: 4,
    title: "Framework and Weighing Standards",
    subtitle: "Setting the lens through which the judge evaluates the entire round",
    category: "arts",
    xp: 90,
    badge: { id: "debate-4-badge-04", name: "Framework Architect", emoji: "🔭" },
    challengeType: "quiz",
    info: {
      tagline: "Whoever sets the standard for what counts as winning has already half-won — the framework is the lens the judge sees the whole round through.",
      year: 1980,
      overview: [
        "The framework is the part of a case that tells the judge how to evaluate the round — the standard by which arguments are weighed and a winner is chosen. It is the highest-leverage element of case construction because it determines what matters. The same set of arguments can produce opposite results under different frameworks: an argument about aggregate welfare is decisive under a utilitarian framework and nearly irrelevant under a rights-based one. Setting and winning the framework is therefore often more important than any single contention.",
        "Frameworks take different forms by format:\n- Lincoln-Douglas — the explicit value and criterion (epoch 3): the core value (justice, autonomy) and the standard for measuring it (maximizing well-being, protecting rights).\n- Policy — the weighing of advantages against disadvantages, and 'role of the ballot' arguments about what the judge should be deciding.\n- Public Forum — a weighing mechanism or stated standard ('prioritize the most probable and largest impact').\nAcross all of them, the framework answers: by what standard should the judge decide who won?",
        "Because the framework is so decisive, sophisticated debaters fight for it directly:\n- Argue why your framework should be preferred — more fundamental, more inclusive, better grounded in the resolution, or avoiding a flaw in the opponent's.\n- Argue under the opponent's framework as a backup — 'even if you adopt their standard, I still win because…' (the layered reasoning from epoch 3).\n- Explicitly weigh your contentions under the winning framework, showing they best satisfy the standard while the opponent's fail it.\nA debater who controls the framework controls how every other argument is counted — which is why mastering the framework debate is the core skill of high-level case construction.",
      ],
      technical: {
        title: "Choosing, Defending, and Weighing Under a Framework",
        body: [
          "Choosing a framework: pick a standard that genuinely fits the resolution and that your strongest arguments satisfy. A framework you can't win under is worse than none. Common standards include consequentialist (judge by outcomes/welfare), deontological (judge by rights/duties/principles), and structural or resolutional standards (judge by what best upholds the resolution's specific demand). The choice should be strategic: select the lens through which your case looks strongest and the opponent's looks weakest, while remaining defensible as the fair reading of the topic.",
          "Defending and deploying it takes three moves. Argue affirmatively why your framework is the right one (more fundamental, more inclusive, better tied to the resolution), pre-empt the opponent's framework by noting its flaws, and — crucially — argue under their framework as insurance. Then weigh: explicitly show how your contentions best achieve the winning standard ('under a framework of protecting rights, my case prevails because it prevents rights violations the opponent's position permits'). The framework debate is won not by merely asserting a value but by giving reasons to prefer it and then demonstrating your case satisfies it better — turning the abstract lens into a concrete reason you win.",
        ],
        codeExample: {
          label: "The Framework — The Lens That Decides the Round",
          code: `  FRAMEWORK = the standard the judge uses to decide.
   same arguments → OPPOSITE results under different lenses
   (welfare arg: decisive under utilitarian, weak under rights)

  BY FORMAT:
   LD       value + criterion (justice / maximize welfare)
   POLICY   advantages vs disadvantages; "role of the ballot"
   PF       weighing mechanism / stated standard

  WINNING THE FRAMEWORK (3 layers):
   1. ARGUE FOR YOURS  more fundamental / inclusive /
                        better tied to the resolution
   2. ARGUE UNDER THEIRS (backup)  "even on your standard,
                                    I still win because..."
   3. WEIGH  show your contentions best satisfy the
             winning standard; theirs fail it

  ⚠ pick a framework your STRONGEST args satisfy —
    a framework you can't win under is worse than none.`,
        },
      },
      incident: {
        title: "Grinding the Lens — How the Standard Shapes What We See",
        when: "1670s",
        where: "Delft, Netherlands",
        impact: "When Antonie van Leeuwenhoek ground better lenses, he didn't change the microbial world — he changed what could be seen of it, just as a debate framework doesn't change the arguments but determines which ones the judge can see as decisive.",
        body: [
          "In the 1670s in Delft, Antonie van Leeuwenhoek ground glass lenses of unprecedented quality and, peering through them, became the first human to see microorganisms — a teeming microscopic world that had always existed but had been invisible. The organisms didn't appear because he created them; they became visible because he had the right lens. Change the lens, and an entire domain of reality comes into focus or vanishes. The instrument of viewing determines what can be seen.",
          "A debate framework is exactly such a lens. It does not change the arguments in the round — they are what they are — but it determines which of them the judge can see as decisive. Under a welfare-maximizing lens, an argument about aggregate outcomes looms large and an argument about an individual rights violation may shrink to invisibility; under a rights-based lens, the reverse. The debater who successfully grinds and installs the lens — who wins the framework — controls what the judge perceives as mattering. This is why framework is the highest-leverage element of a case: it is not one argument among many but the instrument through which all the arguments are viewed. Win the lens, and you have shaped what the judge can even see as a reason to vote.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Choose a Standard", sub: "fits topic + your case", type: "attacker" },
          { label: "Argue For Your Lens", sub: "and under theirs as backup", type: "system" },
          { label: "Weigh Under the Winner", sub: "your case best satisfies it", type: "victim" },
          { label: "Control What Counts", sub: "the lens decides the round", type: "result" },
        ],
      },
      timeline: [
        { year: 1670, event: "Van Leeuwenhoek's lenses reveal a world invisible without the right instrument" },
        { year: 1785, event: "Kant and Mill articulate the deontological and consequentialist standards debaters use" },
        { year: 1980, event: "Lincoln-Douglas formalizes the explicit value/criterion framework", highlight: true },
        { year: 2000, event: "'Role of the ballot' framework arguments spread in policy debate" },
        { year: 2010, event: "Explicit weighing mechanisms become central to Public Forum" },
        { year: 2024, event: "Framework construction is taught as the highest-leverage case skill" },
      ],
      keyTakeaways: [
        "The framework is the standard by which the judge weighs arguments and chooses a winner — the lens for the whole round",
        "The same arguments yield opposite results under different frameworks, making framework the highest-leverage case element",
        "Win the framework in layers: argue for yours, argue under the opponent's as backup, and weigh your case under the winning standard",
        "Choose a framework your strongest arguments satisfy and that fairly fits the resolution — one you can't win under is worse than none",
      ],
      references: [
        { title: "NSDA: Frameworks in Lincoln-Douglas", url: "https://www.speechanddebate.org/competition-events/lincoln-douglas-debate/" },
        { title: "Consequentialism and Deontology (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/consequentialism/" },
        { title: "Weighing and Framework in Debate (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-04-q1",
          type: "Why Framework Matters",
          challenge: `  The same argument about maximizing total social
  welfare is decisive in one round and nearly
  irrelevant in another — with identical evidence.`,
          text: "What explains this difference?",
          options: [
            "The judges were biased",
            "The framework differed — under a welfare-maximizing standard the argument is decisive; under a rights-based standard it carries little weight, because the framework determines what counts",
            "The evidence was secretly different",
            "Frameworks have no effect on arguments",
          ],
          correctIndex: 1,
          explanation: "The framework is the lens that determines which arguments count as decisive. A welfare-maximizing framework makes an argument about aggregate social welfare central; a rights-based framework makes that same argument nearly irrelevant (and might elevate a rights-violation argument instead). With identical evidence, the framework alone can flip the result — which is exactly why it's the highest-leverage element of a case. Winning the framework shapes how every other argument is weighed.",
        },
        {
          id: "debate-4-04-q2",
          type: "Layered Framework",
          challenge: `  A skilled debater argues: 'My value/criterion is
  the right lens for this resolution. But even if
  you prefer my opponent's criterion, my case still
  wins under it, because...'`,
          text: "What framework strategy is this?",
          options: [
            "Conceding the framework debate",
            "Layered framework reasoning — argue for your own framework AND argue you still win under the opponent's as a backup, insuring victory regardless of which framework the judge adopts",
            "Refusing to engage frameworks",
            "Abandoning your contentions",
          ],
          correctIndex: 1,
          explanation: "This is layered framework reasoning (from epoch 3): rather than betting everything on winning your own framework, you also argue your case prevails under the opponent's framework as insurance. Whichever lens the judge adopts, you have a path to victory. It's a hallmark of sophisticated case construction — winning the framework debate outright is best, but securing a backup under the opponent's standard protects you if you lose that clash.",
        },
        {
          id: "debate-4-04-q3",
          type: "Choosing a Framework",
          challenge: `  A debater picks an impressive-sounding framework
  — but realizes their own strongest contentions
  don't actually satisfy that standard, while the
  opponent's arguments do.`,
          text: "What's the lesson about choosing a framework?",
          options: [
            "Always pick the most impressive-sounding framework",
            "Choose a framework your strongest arguments satisfy and the opponent's don't; a framework you can't win under is worse than none, because it hands the opponent the standard",
            "Frameworks should be chosen at random",
            "The framework should favor the opponent for fairness",
          ],
          correctIndex: 1,
          explanation: "A framework you can't win under is worse than none — it actively helps the opponent by setting a standard their arguments satisfy and yours don't. The strategic rule is to choose a framework that (a) fairly fits the resolution and (b) your strongest contentions best satisfy while the opponent's fail it. Impressiveness is irrelevant if the lens makes your own case look weak. Pick the lens through which your case looks strongest and the opponent's weakest, within the bounds of a defensible reading of the topic.",
        },
        {
          id: "debate-4-04-q4",
          type: "Deploying the Framework",
          challenge: `  A debater wins that the round should be judged by
  'protecting individual rights' — but then never
  explains how their specific contentions actually
  protect rights better than the opponent's.`,
          text: "What did they fail to do?",
          options: [
            "Nothing — winning the framework is automatically enough",
            "They failed to WEIGH under the framework — after winning the lens, you must show your contentions best satisfy it (protect rights) while the opponent's fail it; the framework only pays off when you connect your case to it",
            "They should have picked a different framework",
            "They needed more contentions",
          ],
          correctIndex: 1,
          explanation: "Winning the framework is necessary but not sufficient — you must then weigh under it, explicitly showing how your contentions best satisfy the winning standard while the opponent's fail it. A debater who wins 'judge by protecting rights' but never demonstrates that their case protects rights better than the opponent's has left the framework's leverage unused. The framework pays off only when you connect your specific arguments to it: 'under this lens, I win because my case prevents the rights violations theirs permits.'",
        },
      ],
    },
  },

  // ─── debate-4-05: Policy Case Construction ────────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Legislative Drafting Office",
      location: "Capitols Everywhere",
      era: "Modern",
      emoji: "📋",
    },
    id: "debate-4-05",
    order: 5,
    title: "Building a Policy Case",
    subtitle: "Harms, inherency, solvency, and advantages — the plan that holds together",
    category: "arts",
    xp: 88,
    badge: { id: "debate-4-badge-05", name: "Plan Drafter", emoji: "📋" },
    challengeType: "quiz",
    info: {
      tagline: "A policy case is a promise: there's a real problem, the status quo won't fix it, this specific plan will, and the benefits beat the costs — prove all four or lose.",
      year: 1970,
      overview: [
        "A policy case (the Affirmative case, and the structure behind any 'should the government do X' resolution) is built to satisfy the stock issues from epoch 3 — a recognizable skeleton:\n- Harm — a significant problem in the status quo.\n- Inherency — a barrier preventing the status quo from solving it.\n- Plan — the specific action the Affirmative proposes.\n- Solvency — proof the plan actually solves the harm.\n- Advantages — the net benefits, which must outweigh any disadvantages.\nEach element is a distinct burden, and a missing or weak one is a hole the Negative will exploit.",
        "The plan is the heart of the case and must be specific. Vague plans ('the government should do more about climate') invite attacks for being unworkable or untopical; a good plan names the actor, the action, the mechanism, and often funding and enforcement ('The federal government will fund and mandate X through agency Y, paid for by Z'). Specificity is strength: it lets you prove solvency concretely and defend topicality, though it also gives the Negative a precise target. The art is a plan specific enough to defend solvency and topicality but not so over-detailed that every clause becomes a vulnerability.",
        "Advantages are how a policy case wins on weighing — an advantage is a chain:\n- The plan leads to a good outcome (the internal link).\n- That outcome matters (the impact).\n'Plan funds public transit → reduces emissions → mitigates climate harm' is an advantage with a link and an impact. The Affirmative must show its advantages outweigh the disadvantages the Negative will run. Strong construction means each stock issue is proven and the advantages are large, probable, and clearly weighed — so even granting some Negative offense, the judge sees the plan as net beneficial.",
      ],
      technical: {
        title: "The Stock-Issue Skeleton and the Advantage Chain",
        body: [
          "Build the case to satisfy every stock issue explicitly. Harm: prove a significant problem exists (evidence of scale and severity). Inherency: prove a barrier in the status quo prevents the solution now — structural (a law or absence of one), attitudinal, or existential — so the plan is necessary. Plan: state it specifically (actor, action, mechanism, funding, enforcement). Solvency: prove the plan actually addresses the harm (evidence the mechanism works, ideally empirical). Skip any of these and the Negative wins on that stock issue alone, regardless of the rest.",
          "Advantages are constructed as causal chains and defended at each link. An advantage has a link (plan → intermediate effect), possibly internal links (a chain of effects), and a terminal impact (why the final effect matters). The Negative attacks by severing a link ('the plan won't actually reduce emissions because…') or by running a disadvantage whose impact outweighs. So the Affirmative pre-builds defense of each link and prepares to weigh impacts (epoch 4-07): magnitude, probability, timeframe. A robust policy case is one where the harm is real, the plan is specifically solvent, and the advantages are weighed to outweigh the predictable disadvantages — leaving the judge a net-beneficial plan even after the Negative's best attacks.",
        ],
        codeExample: {
          label: "Policy Case — The Stock-Issue Skeleton",
          code: `  THE AFFIRMATIVE SKELETON (prove ALL):
   HARM        significant problem in the status quo
                (evidence of scale + severity)
   INHERENCY   a BARRIER stops the status quo solving it
                (structural / attitudinal)
   PLAN        SPECIFIC: actor + action + mechanism
                + funding + enforcement
   SOLVENCY    proof the plan ACTUALLY solves the harm
   ADVANTAGES  net benefits that OUTWEIGH disadvantages

  ⚠ miss ONE stock issue → Neg wins on it alone.

  ADVANTAGE = a causal chain, defended at each link:
   PLAN ──link──► intermediate effect ──► IMPACT
   "fund transit → cut emissions → mitigate climate harm"
   Neg attacks: sever a LINK, or DA that outweighs.

  PLAN SPECIFICITY = strength (prove solvency + topicality)
   but also a precise target — specific enough to defend,
   not so over-detailed every clause is a vulnerability.`,
        },
      },
      incident: {
        title: "Why Real Legislation Reads Like a Policy Case",
        when: "Modern lawmaking",
        where: "Legislatures and policy shops",
        impact: "Actual legislation and policy proposals are structured exactly like a debate policy case — identifying a problem, explaining why current law fails, specifying an intervention, and projecting benefits — because that structure is what a sound policy argument requires.",
        body: [
          "Open a serious piece of legislation or a policy white paper and you'll find the debate policy case's skeleton staring back: a 'findings' section establishing the problem (harm), an account of why existing law or programs are inadequate (inherency), the specific provisions of the new policy (the plan, with its actor, mechanism, funding, and enforcement), and a projection of intended benefits (advantages), usually weighed against anticipated costs. This is not a coincidence. The stock issues are not an arbitrary debate convention; they are the logical requirements of any sound argument that a government should take an action.",
          "This is why policy case construction is such transferable training. To argue for a policy responsibly — in a round, a legislature, a boardroom, or a city council — you must show that a real problem exists, that the status quo won't fix it on its own, that your specific intervention will address it, and that the benefits exceed the costs. A proposal missing any of these is incomplete: a problem with no workable solution, a solution to a non-problem, a plan with no evidence it works, or a benefit that doesn't justify the cost. Debaters who internalize the stock-issue skeleton learn to construct — and to critique — real policy arguments with a rigor that serves them in any field where decisions about action must be justified.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Harm + Inherency", sub: "real problem, status quo can't fix", type: "attacker" },
          { label: "The Plan", sub: "specific actor + mechanism", type: "system" },
          { label: "Solvency", sub: "proof the plan works", type: "victim" },
          { label: "Advantages Outweigh", sub: "net benefit vs. disadvantages", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Policy debate adopts the stock-issues framework for Affirmative cases" },
        { year: 1970, event: "The specific 'plan' becomes the centerpiece of the Affirmative case", highlight: true },
        { year: 1985, event: "Advantage/disadvantage weighing becomes the core of policy decision-making" },
        { year: 2000, event: "Detailed plan-writing (mechanism, funding, enforcement) standardizes" },
        { year: 2015, event: "Impact weighing of advantages becomes increasingly explicit" },
        { year: 2024, event: "The stock-issue skeleton anchors policy case construction" },
      ],
      keyTakeaways: [
        "A policy case must satisfy every stock issue: significant harm, inherency (a status-quo barrier), a specific plan, solvency, and advantages",
        "The plan should be specific — actor, action, mechanism, funding, enforcement — which proves solvency and topicality but also gives the Negative a target",
        "Advantages are causal chains (link → impact) that must be defended at each link and weighed to outweigh the disadvantages",
        "Real legislation shares this structure because the stock issues are the logical requirements of any sound argument for government action",
      ],
      references: [
        { title: "NSDA: Policy Debate Stock Issues", url: "https://www.speechanddebate.org/competition-events/policy-debate/" },
        { title: "Writing a Policy Affirmative Case (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "How Laws Are Structured (Congress.gov)", url: "https://www.congress.gov/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-05-q1",
          type: "Stock Issues",
          challenge: `  An Affirmative proves a huge harm exists and
  presents a specific plan — but offers no evidence
  that the plan would actually fix the harm.`,
          text: "Which stock issue is unmet, and what's the consequence?",
          options: [
            "Inherency — and there's no consequence",
            "Solvency — without proof the plan actually solves the harm, the Negative wins on solvency alone even if the harm is real and the plan is specific",
            "Significance — the harm was too big",
            "Topicality — the plan was too specific",
          ],
          correctIndex: 1,
          explanation: "The unmet stock issue is solvency: the Affirmative must prove the plan actually solves the harm, not just that the harm exists and the plan is specific. A real problem with a detailed plan that has no evidence of working is a plan that may do nothing. The Negative wins on solvency alone — the Affirmative must demonstrate the mechanism addresses the harm (ideally with empirical evidence). Every stock issue is a distinct burden; missing one is fatal regardless of the others.",
        },
        {
          id: "debate-4-05-q2",
          type: "Plan Specificity",
          challenge: `  An Affirmative plan reads, in full: 'The
  government should do more about poverty.'`,
          text: "Why is this vague plan a problem?",
          options: [
            "It's fine — vague plans are harder to attack",
            "A vague plan can't prove solvency concretely or defend topicality, and invites 'unworkable/untopical' attacks; a good plan names the actor, action, mechanism, and often funding and enforcement",
            "It's too specific",
            "Plans should never name an actor",
          ],
          correctIndex: 1,
          explanation: "'Do more about poverty' names no actor, mechanism, funding, or enforcement, so the Affirmative can't prove the plan concretely solves anything (solvency) or defend that it fits the resolution (topicality), and it invites attacks for being unworkable. A specific plan — actor, action, mechanism, funding, enforcement — is a strength: it enables concrete solvency proof and topicality defense. The trade-off is that specificity gives the Negative a precise target, so the art is being specific enough to defend without over-detailing every clause into a vulnerability.",
        },
        {
          id: "debate-4-05-q3",
          type: "Advantage Chain",
          challenge: `  An Affirmative advantage states: 'Our plan funds
  renewable energy.' It stops there, never
  explaining what good that produces or why it
  matters.`,
          text: "What's incomplete about this advantage?",
          options: [
            "Nothing — funding renewables is self-evidently good",
            "It's missing the link-to-impact chain — the plan must lead to an outcome (e.g., reduced emissions) that produces an impact that matters (e.g., mitigated climate harm); an advantage needs both link and terminal impact",
            "It has too many impacts",
            "Advantages shouldn't mention the plan",
          ],
          correctIndex: 1,
          explanation: "An advantage is a causal chain: the plan leads to an intermediate effect (the link), which produces a terminal impact (why it matters). 'Funds renewable energy' is just the first step; the advantage must continue — funds renewables → reduces emissions → mitigates climate harm — and explain why that final impact matters. Without the link-to-impact chain, the judge doesn't know what good the funding does or why it should outweigh the Negative's disadvantages. Advantages win on impacts, fully developed and weighed.",
        },
        {
          id: "debate-4-05-q4",
          type: "Real-World Parallel",
          challenge: `  A student notices that an actual bill they read
  has a 'findings' section (the problem), an
  explanation of why current law is inadequate, the
  specific new provisions, and projected benefits.`,
          text: "Why does real legislation mirror the policy-case stock issues?",
          options: [
            "Coincidence — there's no real connection",
            "Because the stock issues are the logical requirements of any sound argument for government action: a real problem, why the status quo fails, a specific intervention, and benefits exceeding costs",
            "Because legislators copy debate textbooks",
            "Because bills are required to be debate cases by law",
          ],
          correctIndex: 1,
          explanation: "Legislation mirrors the policy-case structure because the stock issues aren't an arbitrary debate convention — they're the logical requirements of any responsible argument that a government should act. To justify a policy you must show a real problem (findings/harm), why current law won't fix it (inherency), a specific intervention (the plan's provisions), and that benefits exceed costs (advantages vs. disadvantages). This is why policy case construction transfers directly to real-world advocacy: it's the anatomy of a sound policy argument anywhere.",
        },
      ],
    },
  },

  // ─── debate-4-06: Public Forum Case and Links ─────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Op-Ed Page",
      location: "Public Discourse",
      era: "Modern",
      emoji: "🔗",
    },
    id: "debate-4-06",
    order: 6,
    title: "Public Forum Contentions and Links",
    subtitle: "Building accessible, link-driven cases for a reasonable judge",
    category: "arts",
    xp: 86,
    badge: { id: "debate-4-badge-06", name: "Link Builder", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "A Public Forum case lives or dies on its links — the chain from your evidence to a real-world impact a reasonable person can follow.",
      year: 2002,
      overview: [
        "A Public Forum case is built for the reasonable-person standard from epoch 3 — clear, accessible contentions a non-specialist judge can follow, connected to tangible real-world impacts:\n- Typically two contentions, each a complete argument.\n- Framed for persuasion rather than technical density.\n- A clean link chain — the logical steps from claim to an impact that obviously matters — rather than stacks of cards or jargon.\nBecause topics change monthly and judges are often lay, the premium is on clarity.",
        "The link is the central concept. A link is the causal or logical connection between your argument and its impact: 'AI adoption (the topic) → displaces workers in vulnerable sectors (link) → causes economic harm to families (impact).' PF rounds are frequently won and lost on links: a contention with a strong, well-evidenced link chain beats one with a big impact but a weak or missing link, because a sophisticated opponent (and a thoughtful judge) will ask 'but how does your argument actually lead to that impact?' Building robust links — and attacking the opponent's weak ones — is the core of PF case construction.",
        "PF case-building demands ruthless accessibility and weighing:\n- Each contention should be explainable to an intelligent non-expert in plain language.\n- Evidence cited cleanly (epoch 1) but not buried under technicality.\n- Impacts chosen to be large, probable, and clearly significant — with weighing built in from the start.\nLay judges need to be told how to compare impacts, so a strong PF case is two clear contentions, each with a solid link chain to a weighable real-world impact, delivered so a reasonable person not only follows it but is persuaded by it.",
      ],
      technical: {
        title: "The Link Chain and Building for Weighing",
        body: [
          "Construct each contention as an explicit link chain: start from the resolution, establish the link (how the topic leads to an intermediate effect), and arrive at a terminal impact, with evidence supporting the key steps. The most common PF weakness is a 'link gap' — a contention that asserts a big impact without proving the chain that connects the topic to it. Anticipate the opponent asking 'how do you get from the resolution to that harm?' and make sure every step is supported. A modest impact with an airtight link often beats a huge impact with a broken link.",
          "Build for weighing from the outset. Since lay judges need explicit comparison, choose impacts you can weigh favorably — large in magnitude, high in probability, or otherwise clearly significant — and prepare the weighing arguments you'll deliver in Summary and Final Focus ('even if they win their economic argument, ours affects more people and is more likely'). Keep everything accessible: explain each contention in plain language, cite evidence cleanly without drowning the judge in cards, and signpost so the lay judge can follow. The PF case that wins is the one a reasonable person can both follow and be persuaded by — clear contentions, solid links, weighable impacts.",
        ],
        codeExample: {
          label: "Public Forum Case — Link-Driven and Accessible",
          code: `  PF CASE: ~2 contentions, built for a LAY JUDGE
   (reasonable-person standard) → clarity > density

  EACH CONTENTION = an explicit LINK CHAIN:
   RESOLUTION ──link──► intermediate effect ──► IMPACT
   "AI adoption → displaces vulnerable workers →
    economic harm to families"
   (evidence supports the key steps)

  ⚠ #1 PF WEAKNESS = the LINK GAP
   big impact asserted, but no proof the chain
   connects the topic to it.
   → a modest impact with an AIRTIGHT link beats a
     huge impact with a BROKEN link.

  BUILD FOR WEIGHING (lay judges need it spelled out):
   pick impacts large / probable / clearly significant;
   pre-write weighing for Summary + Final Focus:
   "even if they win X, ours affects more people &
    is more likely → vote us"

  ACCESSIBLE: plain language, clean cites, signposted.`,
        },
      },
      incident: {
        title: "The Op-Ed Test — Argument for the Intelligent General Reader",
        when: "Modern public discourse",
        where: "Newspapers and public debate",
        impact: "The best op-eds persuade an intelligent general reader through a clear chain from premise to consequence — exactly the standard a Public Forum case is built to meet, and a model for accessible public argument.",
        body: [
          "A good op-ed column is a model of the Public Forum case. Its author cannot assume specialist knowledge; they must persuade an intelligent general reader by laying out a clear chain of reasoning from a premise the reader accepts, through logical steps, to a conclusion that matters — citing evidence to support the key links but never burying the reader in jargon or footnotes. The persuasive power comes from the clarity and soundness of the link chain: the reader can follow each step and arrives convinced. An op-ed with a big claim but a missing logical step fails the same way a PF contention with a link gap fails.",
          "This 'op-ed test' captures why Public Forum trains uniquely valuable skills. The reasonable-person standard forces debaters to argue the way effective public communicators must — in business, journalism, advocacy, and civic life — where the audience is intelligent but non-specialist and persuasion depends on a clear, well-supported chain from premise to consequence. Learning to build a PF case is learning to make an argument that an ordinary thoughtful person can follow and be moved by: identify a tangible impact, build a solid link chain to it, support the steps with credible evidence, and weigh it clearly against the alternatives. These are precisely the skills of persuading the public — which is why PF's accessibility is not a dumbing-down but a sharpening toward the kind of argument that actually changes minds outside a specialist's room.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Clear Contentions", sub: "for a reasonable person", type: "attacker" },
          { label: "Build the Link Chain", sub: "topic → effect → impact", type: "system" },
          { label: "Support Each Step", sub: "clean evidence, no link gaps", type: "victim" },
          { label: "Weighable Impact", sub: "large, probable, persuasive", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "Public Forum is created with the reasonable-person standard", highlight: true },
        { year: 2009, event: "Link-driven, accessible case construction becomes the PF norm" },
        { year: 2014, event: "Explicit weighing of impacts becomes central to PF strategy" },
        { year: 2018, event: "PF becomes the most popular U.S. high school format" },
        { year: 2020, event: "Link gaps are emphasized as the key PF case weakness in coaching" },
        { year: 2024, event: "Accessible, link-driven case-building anchors PF training" },
      ],
      keyTakeaways: [
        "Public Forum cases (usually two contentions) are built for a lay 'reasonable person' — clarity and accessible links over technical density",
        "The link — the causal/logical chain from the topic to a real-world impact — is what PF rounds are won and lost on",
        "Beware the 'link gap': a modest impact with an airtight link beats a huge impact with a broken or unproven link",
        "Build for weighing from the start — choose large, probable impacts and prepare to explain why they outweigh the opponent's",
      ],
      references: [
        { title: "NSDA: Public Forum Case Construction", url: "https://www.speechanddebate.org/competition-events/public-forum-debate/" },
        { title: "Links and Impacts in Public Forum (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Writing Persuasive Op-Eds (The Op-Ed Project)", url: "https://www.theopedproject.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-06-q1",
          type: "The Link Gap",
          challenge: `  A PF contention claims a massive impact: 'This
  policy could trigger a global economic collapse.'
  But it never explains the steps connecting the
  resolution to that collapse.`,
          text: "What is this weakness, and how serious is it?",
          options: [
            "No weakness — a big impact wins on its own",
            "A link gap — the contention asserts a huge impact without proving the chain from the topic to it; a thoughtful judge/opponent asks 'how do you get there?', and a modest impact with a solid link beats this",
            "The impact is too small",
            "The contention has too many links",
          ],
          correctIndex: 1,
          explanation: "This is a link gap — the central PF case weakness. The contention asserts a dramatic impact (global economic collapse) without building the link chain that connects the resolution to it. A thoughtful judge or opponent immediately asks 'how does the topic actually lead to that?', and the unproven chain collapses. A modest, well-linked impact reliably beats a huge impact with a broken link, because PF rounds are won on links the reasonable-person judge can follow.",
        },
        {
          id: "debate-4-06-q2",
          type: "Accessibility",
          challenge: `  In a Public Forum round before a parent judge, a
  debater builds a technically dense contention full
  of specialized jargon and a dozen rapid card
  citations, hard for a non-expert to follow.`,
          text: "Why does this misfit the format?",
          options: [
            "It's ideal — density impresses lay judges",
            "PF is argued for a reasonable-person lay judge who rewards clarity; dense jargon and card-dumping lose a non-expert, so contentions should be explainable in plain language with clean, not overwhelming, evidence",
            "PF requires maximum jargon",
            "Lay judges prefer the fastest speaker",
          ],
          correctIndex: 1,
          explanation: "Public Forum's reasonable-person standard means the judge is an intelligent non-specialist who can only credit what they understand. Dense jargon and a dozen rushed citations lose that judge. PF contentions should be explainable in plain language, with evidence cited cleanly but not buried under technicality, and signposted for easy following. The format rewards accessible, persuasive argument — clarity is a strategic asset, not a compromise.",
        },
        {
          id: "debate-4-06-q3",
          type: "Building for Weighing",
          challenge: `  A PF team builds two contentions with solid links
  but never thinks about how to compare their
  impacts to the opponent's until they're scrambling
  in the Final Focus.`,
          text: "What should they have done during case construction?",
          options: [
            "Nothing — weighing is only an end-of-round concern",
            "Build for weighing from the start — choose impacts that are large/probable/significant and pre-write the weighing arguments (why theirs outweigh the opponent's) for Summary and Final Focus",
            "Avoid weighing entirely",
            "Add ten more contentions",
          ],
          correctIndex: 1,
          explanation: "Weighing should be designed into the case from the beginning, not improvised at the end. Since lay judges need explicit comparison, the team should choose impacts that weigh favorably (large magnitude, high probability, clear significance) and pre-write the weighing arguments — why their impact outweighs the opponent's — ready to deliver in Summary and Final Focus. Scrambling to weigh in the last speech, with no prepared comparison, is how winnable PF rounds are lost.",
        },
        {
          id: "debate-4-06-q4",
          type: "The Op-Ed Test",
          challenge: `  A coach tells a PF debater: 'Build your contention
  so it would work as a good op-ed for an intelligent
  general reader.'`,
          text: "What does this 'op-ed test' encourage?",
          options: [
            "Maximizing jargon and technical citations",
            "A clear chain of reasoning from an accepted premise through logical steps to a consequence that matters, supported by credible evidence and understandable to a non-specialist — exactly the PF reasonable-person standard",
            "Writing as long as possible",
            "Ignoring evidence entirely",
          ],
          correctIndex: 1,
          explanation: "The 'op-ed test' captures the PF reasonable-person standard: build the contention so an intelligent general reader could follow and be persuaded by it — a clear link chain from an accepted premise through logical steps to an impact that matters, supported by credible evidence, free of jargon. A good op-ed persuades precisely this way, and a contention that passes the test will land with a lay judge. It's a practical heuristic for accessible, link-driven case construction.",
        },
      ],
    },
  },

  // ─── debate-4-07: Weighing Mechanisms ─────────────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Scales of Justice",
      location: "Courthouses Everywhere",
      era: "Timeless",
      emoji: "⚖️",
    },
    id: "debate-4-07",
    order: 7,
    title: "Weighing Mechanisms",
    subtitle: "Magnitude, probability, timeframe — telling the judge whose impact matters more",
    category: "arts",
    xp: 90,
    badge: { id: "debate-4-badge-07", name: "The Weigher", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "When both sides win arguments, the judge votes on whoever weighed best — weighing is how you turn 'I won points' into 'I won the round.'",
      year: 2024,
      overview: [
        "In most rounds, both sides win some arguments — so the judge must decide which side's winning arguments matter more. Weighing is the explicit comparison of impacts that answers this, and it is one of the most decisive and most under-practiced skills in debate. A debater who wins arguments but never weighs leaves the comparison to the judge, who may weigh differently than hoped; a debater who weighs explicitly tells the judge exactly why their impacts outweigh, and usually wins the close rounds. Weighing is the bridge from 'I won arguments' to 'I won the round.'",
        "There are standard weighing mechanisms — dimensions along which impacts are compared:\n- Magnitude — how big is the impact (how many affected, how severe)?\n- Probability — how likely is it to actually happen?\n- Timeframe — how soon does it occur (and does a sooner impact preempt a later one)?\n- Scope — how many people or how wide an area?\n- Reversibility — can the harm be undone, or is it permanent?\nEach is a lever for arguing your impact matters more ('ours is larger and far more likely than theirs, which is speculative and distant'). Knowing the mechanisms lets you make precise comparative arguments rather than vague claims of importance.",
        "The art is comparative and honest. Weighing isn't asserting your impact is big; it's arguing why it outweighs theirs on a specified dimension: 'even if their economic harm is real, ours affects more people, is more probable, and is irreversible, so it outweighs.' The strongest weighing concedes the opponent might win their argument and shows you still win the round ('even if…') — which is robust because it doesn't depend on defeating their argument entirely. Weighing belongs in the late speeches (Summary, Final Focus, rebuttals) but is built into the case from the start by choosing weighable impacts. Master weighing and you stop losing rounds where you 'won more arguments' but failed to tell the judge why your arguments mattered more.",
      ],
      technical: {
        title: "The Weighing Mechanisms and 'Even If' Weighing",
        body: [
          "Learn the mechanisms as a comparison toolkit. Magnitude (size/severity of the impact), probability (likelihood it occurs), timeframe (how soon; a near-term impact can preempt a long-term one), scope (breadth — how many affected), reversibility (permanent harm outweighs recoverable harm), and sometimes 'strength of link' (a well-linked smaller impact can outweigh a poorly-linked larger one). In a round, pick the dimensions where you win and argue them explicitly: 'compare on probability — their nuclear-war scenario is wildly improbable, while our impact is happening now.'",
          "The most robust weighing is 'even if' weighing: granting the opponent their argument and showing you still win. 'Even if they win their entire economic disadvantage, we outweigh because our impact affects far more people and is irreversible.' This is powerful because it doesn't require defeating their argument — it makes you win even when they win their point, which is exactly the situation (both sides winning arguments) where weighing decides the round. Build weighable impacts into your case (large, probable, soon, broad, irreversible where possible), and deliver the explicit comparison in the late speeches. The judge should never have to guess how to compare; you tell them, on the dimensions where you're ahead.",
        ],
        codeExample: {
          label: "Weighing Mechanisms — Whose Impact Matters More",
          code: `  WHEN BOTH SIDES WIN ARGS → judge weighs impacts.
   weigh explicitly or the judge guesses (and may
   guess against you). weighing = win args → WIN ROUND.

  THE MECHANISMS (pick the ones you WIN on):
   MAGNITUDE      how big / severe is the impact?
   PROBABILITY    how LIKELY is it to actually happen?
   TIMEFRAME      how soon? (near-term can preempt later)
   SCOPE          how many people / how wide?
   REVERSIBILITY  permanent harm > recoverable harm
   STRENGTH OF LINK  well-linked small > poorly-linked big

  "EVEN IF" WEIGHING (the most robust form):
   grant them their argument, still win:
   "EVEN IF they win their econ disadvantage, we
    outweigh — our impact hits more people and is
    irreversible."
   → you win even when THEY win their point.

  BUILD weighable impacts into the case; DELIVER the
   comparison in Summary / Final Focus / rebuttals.`,
        },
      },
      incident: {
        title: "The Scales — Justice as the Weighing of Competing Claims",
        when: "Timeless",
        where: "From ancient courts to modern benches",
        impact: "The scales of justice — humanity's oldest symbol of judgment — depict exactly what weighing is: the deliberate comparison of competing claims to decide which carries more weight, the act at the heart of every reasoned decision.",
        body: [
          "The scales held by the figure of Justice are among the oldest symbols in human civilization, appearing from ancient Egypt (where the heart was weighed against the feather of truth) through Greek and Roman law to the modern courthouse. The image endures because it captures the essence of judgment: a decision is not made by counting which side spoke more or asserted louder, but by placing the competing claims on the scale and determining which carries more weight. Justice is, literally, an act of weighing.",
          "Debate weighing is this ancient act made explicit. When both sides have real arguments — as in nearly every genuine dispute — the decision comes down to comparison: whose claim is larger, more likely, more urgent, more irreversible? A judge, like Justice, must place the impacts on the scale. The skilled debater does not leave this to chance; they guide the weighing, showing exactly why their impacts tip the balance, on the dimensions where they are heavier. This is why weighing is the most decisive late-round skill: it is the moment the round stops being about who won which argument and becomes about which winning arguments matter more — the exact question the scales have always represented. To weigh well is to do, deliberately and persuasively, what every just decision-maker must do: compare competing claims and determine which carries the greater weight.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Both Sides Win Args", sub: "the usual case", type: "attacker" },
          { label: "Pick Your Dimensions", sub: "magnitude, probability, timeframe", type: "system" },
          { label: "Compare Explicitly", sub: "'even if they win, we outweigh'", type: "victim" },
          { label: "Win the Round", sub: "your impacts tip the scale", type: "result" },
        ],
      },
      timeline: [
        { year: -2400, event: "Ancient courts depict justice as the weighing of competing claims" },
        { year: 1980, event: "Impact calculus becomes formalized in policy debate decision-making" },
        { year: 2000, event: "Magnitude/probability/timeframe weighing standardizes across formats", highlight: true },
        { year: 2010, event: "'Even if' weighing becomes a hallmark of strong rebuttals" },
        { year: 2018, event: "Explicit weighing becomes central to Public Forum's Final Focus" },
        { year: 2024, event: "Weighing is taught as the decisive late-round case skill" },
      ],
      keyTakeaways: [
        "When both sides win arguments, the judge votes on who weighed best — weighing turns 'I won arguments' into 'I won the round'",
        "Standard mechanisms compare impacts on magnitude, probability, timeframe, scope, reversibility, and strength of link",
        "Weigh comparatively and explicitly — argue why your impact outweighs theirs on a specified dimension, don't just assert importance",
        "'Even if' weighing (grant their argument, show you still win) is the most robust form and is built into the case by choosing weighable impacts",
      ],
      references: [
        { title: "NSDA: Weighing and Impact Calculus", url: "https://www.speechanddebate.org/" },
        { title: "Weighing in Public Forum and Policy (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Impact Calculus Explained (Debate Coaching Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-07-q1",
          type: "Why Weigh",
          challenge: `  In a close round, both teams clearly won some
  arguments. One team explicitly explained why their
  impacts outweighed; the other just won their
  arguments and left the comparison to the judge.`,
          text: "Why does explicit weighing usually win these rounds?",
          options: [
            "It doesn't — the judge counts arguments equally",
            "Weighing tells the judge exactly why your impacts matter more, instead of leaving the comparison to a judge who may weigh differently; in close rounds, the side that weighs usually wins",
            "Weighing is only for losing teams",
            "The louder team always wins",
          ],
          correctIndex: 1,
          explanation: "When both sides win arguments, the judge must compare impacts — and if you don't guide that comparison, the judge weighs on their own, possibly against you. Explicit weighing tells the judge precisely why your impacts outweigh (bigger, more likely, sooner, irreversible), making the decision for them in your favor. In close rounds, the team that weighs almost always beats the team that merely won arguments but left the comparison to chance. Weighing is the bridge from winning arguments to winning the round.",
        },
        {
          id: "debate-4-07-q2",
          type: "Mechanisms",
          challenge: `  The opponent's impact is a low-probability nuclear
  war scenario. Your impact is ongoing economic harm
  that is currently happening to millions.`,
          text: "Which weighing mechanisms most favor your impact?",
          options: [
            "Only magnitude — nuclear war is bigger",
            "Probability (yours is actually happening; theirs is speculative) and timeframe (yours is now; theirs is distant/hypothetical) — argue the judge should prefer the real, present impact",
            "Reversibility only, in their favor",
            "None — you must concede",
          ],
          correctIndex: 1,
          explanation: "Your strongest weighing dimensions here are probability (your harm is real and occurring; their nuclear scenario is highly improbable) and timeframe (yours is happening now; theirs is distant and hypothetical). You'd argue: 'Compare on probability and timeframe — prefer the real, present harm to millions over a speculative, low-probability scenario.' You pick the dimensions where you win and argue them explicitly. (Opponents often inflate magnitude, so beating them on probability and timeframe is the classic response.)",
        },
        {
          id: "debate-4-07-q3",
          type: "Even-If Weighing",
          challenge: `  A debater says: 'Even if my opponent completely
  wins their economic disadvantage, we still win the
  round, because our impact affects far more people
  and is irreversible.'`,
          text: "Why is this 'even if' weighing especially robust?",
          options: [
            "It concedes the round",
            "It doesn't depend on defeating the opponent's argument — it shows you win even if they win their point, which is exactly the both-sides-win situation where weighing decides the round",
            "It only works if you also win every argument",
            "It's weaker than simply asserting your impact is big",
          ],
          correctIndex: 1,
          explanation: "'Even if' weighing is robust because it doesn't require defeating the opponent's argument — you grant they might win it and show you still win the round on comparison (more people affected, irreversible). This directly addresses the most common situation, where both sides win arguments, and removes the risk of losing because the judge credited the opponent's point. It's far stronger than merely asserting your impact is big, because it survives even the opponent's best case.",
        },
        {
          id: "debate-4-07-q4",
          type: "Building for Weighing",
          challenge: `  Two debaters prepare cases. One picks impacts
  almost at random. The other deliberately chooses
  impacts that are large, probable, soon, broad, and
  irreversible where possible.`,
          text: "Why does the second debater's choice help them win?",
          options: [
            "It doesn't — impacts can't be chosen strategically",
            "Choosing impacts that score well on the weighing mechanisms (magnitude, probability, timeframe, scope, reversibility) means they can weigh favorably later; weighing is built into the case by impact selection, not just argued at the end",
            "Random impacts are equally weighable",
            "Only delivery affects weighing",
          ],
          correctIndex: 1,
          explanation: "Weighing starts at case construction, not just in the final speech. By deliberately selecting impacts that are large, probable, soon, broad, and irreversible, the second debater ensures they'll have favorable comparisons to make on the weighing mechanisms later. The debater who picks impacts at random may end up with arguments that are hard to weigh well. Strong case-building chooses weighable impacts up front so the explicit comparison in Summary/Final Focus is already stacked in your favor.",
        },
      ],
    },
  },

  // ─── debate-4-08: Briefs, Blocks, and Frontlines ──────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Armory",
      location: "Preparation, Everywhere",
      era: "Timeless",
      emoji: "🛡️",
    },
    id: "debate-4-08",
    order: 8,
    title: "Briefs, Blocks, and Frontlines",
    subtitle: "Pre-writing responses to the arguments you know are coming",
    category: "arts",
    xp: 86,
    badge: { id: "debate-4-badge-08", name: "The Armorer", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "You already know most of what the opponent will say — so write your best answers in advance, when you have time to make them perfect.",
      year: 2024,
      overview: [
        "Because topic analysis (epoch 4-01) reveals the arguments both sides will make, you can pre-write your responses to the predictable ones. These pre-written sets are called blocks, briefs, or frontlines — one of the highest-return investments in preparation:\n- A block is a ready-made set of responses to a specific anticipated argument.\n- Written calmly in advance with your best evidence and reasoning.\n- Delivered as a polished answer when that argument appears, instead of improvising under pressure.\nThe difference between a prepared block and an in-round improvisation is usually the difference between a clean win on that argument and a scramble.",
        "Blocks come in two flavors:\n- Offensive blocks (or 'extensions') — how you'll defend and extend your own contentions against the responses you expect (your second-line answers to predictable attacks on your case).\n- Defensive blocks (or 'answers') — your refutations of the opponent's predictable arguments, ready to go when they run the disadvantage or contention you knew was coming.\nA well-prepared debater walks into a round with a folder of blocks covering the main clashes their topic analysis identified, organized so they can pull the right one instantly (epoch 4-02's filing).",
        "The skill is anticipation plus organization, not scripting. You can't pre-write the entire round — debate is dynamic, and you must adapt blocks to what's actually said rather than reading them robotically. But you can pre-write the building blocks: the best responses to the arguments you're confident will appear, the extensions of your own contentions, the answers to the common attacks. Then in-round you select, adapt, and deliver them. This is why preparation compounds: every round and every tournament, you refine your blocks against the arguments you actually face, building an ever-sharper arsenal. The prepared debater spends in-round mental energy on adaptation and strategy because the predictable responses are already written.",
      ],
      technical: {
        title: "Building a Block File and Adapting It Live",
        body: [
          "Build blocks from your topic-analysis map. For each predictable opponent argument, write a block: a short list of your best responses (each a complete refutation — They Say/But/Because/Therefore from epoch 1), with the evidence pre-cut and tagged. For each of your own contentions, write an extension block: how you'll rebuild and extend it against the responses you expect, with second-line evidence. Organize these by argument (epoch 4-02) so the right block is findable in seconds. The goal is that when a known argument arises, you're reading from a prepared, polished set of answers rather than inventing them live.",
          "Adapt, don't recite. Blocks are raw material, not a script — the cardinal error is reading a block that doesn't quite fit what the opponent actually said, answering an argument they didn't make. In-round, you select the relevant block, then adapt it to the specific way the opponent framed the argument, dropping responses that don't apply and emphasizing the ones that do. The best debaters blend preparation and responsiveness: prepared blocks for the predictable, live adaptation for the specific. Over a season, blocks are continuously refined — after each round you note which responses worked and which the opponent beat, and you sharpen the file. This compounding preparation is why experienced debaters seem to have an answer for everything: they've pre-written the answers to everything predictable.",
        ],
        codeExample: {
          label: "Blocks / Briefs / Frontlines — Pre-Written Answers",
          code: `  topic analysis → you KNOW most arguments coming.
  → pre-write responses when you have time to perfect them.

  TWO KINDS OF BLOCK:
   OFFENSIVE (extensions)  defend + extend YOUR contentions
     against expected responses (2nd-line evidence)
   DEFENSIVE (answers)     pre-written refutations to the
     opponent's predictable arguments

  EACH BLOCK = best responses, pre-cut evidence,
   each a complete refutation (They Say/But/Because/
   Therefore). FILE by argument → findable in seconds.

  ⚠ ADAPT, don't recite:
   reading a block that doesn't fit = answering an
   argument they didn't make. select → adapt to their
   exact framing → deliver.

  COMPOUNDS: after each round, refine blocks vs. what you
   actually faced → an ever-sharper arsenal.
  → prepared debater spends in-round energy on STRATEGY.`,
        },
      },
      incident: {
        title: "The Armory Principle — Forge Weapons Before the Battle",
        when: "Timeless",
        where: "From medieval armories to modern prep rooms",
        impact: "No army forges its swords during the battle; it stocks an armory in advance. Debate blocks apply the same ancient logic — prepare your weapons in calm, then draw the right one in the heat of the round.",
        body: [
          "Throughout military history, the work of the armory happened long before the battle: weapons were forged, sharpened, and stockpiled in peacetime so that when conflict came, soldiers drew ready arms rather than fashioning them mid-fight. The idea is obvious yet profound — the time to prepare a weapon is when you have time, not when you're under attack. A force that tried to forge swords during the battle would be cut down by one that had filled its armory in advance.",
          "Debate blocks are the armory principle applied to argument. The predictable arguments your topic analysis reveals are the battles you know are coming; the calm hours of preparation are when you forge your best responses, with your strongest evidence and clearest reasoning, free from the pressure of a live round. Then, when the opponent runs the argument you anticipated, you draw a polished, ready answer instead of improvising under fire. This is why preparation so reliably beats raw talent in debate: the prepared debater has an armory of pre-forged responses and spends the round's pressure on strategy and adaptation, while the unprepared debater spends it desperately trying to forge answers mid-battle. Fill the armory in calm; draw the right weapon in the heat — and refine the armory after every battle for the next one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Anticipate Arguments", sub: "from topic analysis", type: "attacker" },
          { label: "Pre-Write Blocks", sub: "offense + defense, with evidence", type: "system" },
          { label: "File by Argument", sub: "findable in seconds", type: "victim" },
          { label: "Adapt and Deliver", sub: "polished answers, not improv", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Evidence-based debate begins pre-writing briefs on annual topics" },
        { year: 1990, event: "Blocks and frontlines become standard preparation tools", highlight: true },
        { year: 2004, event: "Digital files make extensive block libraries practical" },
        { year: 2010, event: "Block organization (filing by argument) becomes a competitive edge" },
        { year: 2018, event: "Iterative block refinement across a season standardizes" },
        { year: 2024, event: "Pre-written, adaptable blocks anchor serious debate preparation" },
      ],
      keyTakeaways: [
        "Topic analysis reveals predictable arguments, so you can pre-write your best responses (blocks/briefs/frontlines) in advance",
        "Offensive blocks extend your own contentions; defensive blocks pre-write refutations to the opponent's predictable arguments",
        "Adapt blocks to the opponent's exact framing — never recite a block that doesn't fit what they actually said",
        "Blocks compound: refine them after every round against what you actually faced, building an ever-sharper arsenal",
      ],
      references: [
        { title: "NSDA: Preparing Blocks and Briefs", url: "https://www.speechanddebate.org/" },
        { title: "Frontlining and Extensions in Debate (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Refutation Structure — They Say/But/Because/Therefore (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-08-q1",
          type: "Why Pre-Write",
          challenge: `  A debater's topic analysis shows the opponent will
  almost certainly run a 'capital flight'
  disadvantage. The debater plans to just improvise
  a response if it comes up in the round.`,
          text: "Why is pre-writing a block the better choice?",
          options: [
            "It isn't — improvising under pressure is best",
            "Since the argument is predictable, you can pre-write your best responses calmly in advance with strong evidence, then deliver a polished answer instead of scrambling live — preparation beats improvisation on known arguments",
            "Blocks are only for the opponent",
            "You should never anticipate opponent arguments",
          ],
          correctIndex: 1,
          explanation: "When an argument is predictable (as topic analysis revealed), pre-writing a block lets you craft your best responses calmly, with your strongest evidence and clearest reasoning, when you have time to make them excellent. Then in-round you deliver a polished answer rather than improvising under pressure. This is the armory principle: forge the weapon before the battle. Improvising a response to a known argument wastes the advantage of having anticipated it.",
        },
        {
          id: "debate-4-08-q2",
          type: "Adapt vs Recite",
          challenge: `  An opponent makes a version of an argument the
  debater has a block for — but framed differently
  than expected. The debater reads their entire
  pre-written block verbatim, including responses
  that don't fit what the opponent actually said.`,
          text: "What error is this, and what's the fix?",
          options: [
            "No error — always read the full block",
            "The error is reciting instead of adapting — they're answering an argument the opponent didn't make; the fix is to select the block, then adapt it to the opponent's exact framing, dropping responses that don't apply",
            "They should have written more blocks",
            "Blocks should never be used at all",
          ],
          correctIndex: 1,
          explanation: "Blocks are raw material, not a script. Reciting a block verbatim when the opponent framed the argument differently means answering points they didn't make — wasting time and confusing the clash. The fix is to adapt: select the relevant block, then tailor it to the opponent's specific framing, dropping responses that don't apply and emphasizing those that do. The best debaters blend preparation (the block) with responsiveness (live adaptation to what was actually said).",
        },
        {
          id: "debate-4-08-q3",
          type: "Offense vs Defense",
          challenge: `  A debater prepares two kinds of pre-written
  material: (1) how they'll rebuild and extend their
  OWN contentions against expected attacks, and (2)
  ready-made refutations of the OPPONENT'S likely
  arguments.`,
          text: "What are these two kinds of blocks called?",
          options: [
            "They're the same thing",
            "(1) Offensive blocks / extensions (defending and extending your own case) and (2) defensive blocks / answers (refuting the opponent's predictable arguments)",
            "Both are framework blocks",
            "Neither is a real preparation tool",
          ],
          correctIndex: 1,
          explanation: "These are the two flavors of blocks. Offensive blocks (or extensions) prepare how you'll defend and extend your own contentions against the responses you expect — your second-line answers protecting your case. Defensive blocks (or answers) prepare your refutations of the opponent's predictable arguments. A well-prepared debater carries both, organized by argument, covering the main clashes their topic analysis identified — offense to protect their case, defense to dismantle the opponent's.",
        },
        {
          id: "debate-4-08-q4",
          type: "Compounding Prep",
          challenge: `  Across a season, after each round a debater notes
  which of their block responses worked and which the
  opponents beat, then revises the blocks before the
  next tournament.`,
          text: "Why does this practice make them increasingly hard to beat?",
          options: [
            "It doesn't — blocks should never change",
            "Blocks compound — iteratively refining them against the arguments actually faced builds an ever-sharper arsenal, so over a season the debater accumulates polished answers to nearly everything predictable",
            "Revising blocks weakens them",
            "Only delivery improves over a season",
          ],
          correctIndex: 1,
          explanation: "Preparation compounds when you iterate: by noting which block responses worked and which got beaten, then revising before the next tournament, the debater continuously sharpens their arsenal against real-world arguments. Over a season this accumulates into polished, battle-tested answers to nearly everything predictable on the topic — which is why experienced debaters seem to have a ready response for everything. They've pre-written and refined the answers to everything predictable, round after round.",
        },
      ],
    },
  },

  // ─── debate-4-09: Roadmaps and Signposting ────────────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Cartographer's Table",
      location: "Navigation, Everywhere",
      era: "Timeless",
      emoji: "🧭",
    },
    id: "debate-4-09",
    order: 9,
    title: "Roadmaps and Signposting Your Case",
    subtitle: "Making your speech effortless for the judge to follow and flow",
    category: "arts",
    xp: 84,
    badge: { id: "debate-4-badge-09", name: "The Wayfinder", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "Tell the judge where you're going, tell them where you are, and they'll arrive at your conclusion with you — organization is persuasion.",
      year: 2024,
      overview: [
        "A roadmap is a brief preview, given at the very start of a speech, telling the judge the order in which you'll address things: 'I'll go to my opponent's case first, then rebuild my own — starting with their disadvantage, then their solvency attack, then my two contentions.' It takes a few seconds and dramatically improves how well the judge follows and flows the speech, because they know the structure before you begin filling it in. Roadmaps are standard practice in most formats, and skipping one forces the judge to reconstruct your organization on the fly.",
        "Signposting (from epoch 1) is the in-speech companion to the roadmap — continuous verbal labels marking where you are:\n- 'Now to their first contention…'\n- 'My second response here is…'\n- 'Moving back to my own case…'\nWhere the roadmap previews the structure, signposts keep the judge oriented within it as you move. Together they make a speech navigable — the judge always knows which argument you're on. A judge who can follow your organization flows your arguments accurately and credits them; a judge lost in a disorganized speech misses arguments you actually made.",
        "Organization is persuasion because comprehension is the precondition of being credited. The most brilliant argument, delivered without a roadmap or signposts in a tangle the judge can't follow, may simply not make it onto the flow — and an argument not on the flow didn't happen (epoch 1). Roadmapping and signposting are how you guarantee your structure survives the journey from your mouth to the judge's flow intact. They also project competence: a debater who navigates their own speech cleanly reads as in command. The discipline is simple and high-return: preview your route, label every turn, and the judge arrives at your conclusion having followed every step.",
      ],
      technical: {
        title: "Giving a Roadmap and Signposting the Turns",
        body: [
          "A roadmap is short and structural, given before you start arguing (in many formats you briefly state it and the judge gets their flow ready): name the order of the major areas you'll cover ('their case then mine,' or 'two off-case arguments then the case debate'). Keep it to the sequence of big areas, not a preview of every sub-point. Once the judge knows the route, they can set up their flow to track it. Some formats have conventions about roadmaps (e.g., stating 'off-time roadmap' so it doesn't count against your time); follow your format's norms.",
          "Signposting is the running navigation within the speech. At every transition, label where you're going: between major areas ('now to my own case'), between arguments ('their second contention'), and between responses within an argument ('my first response… my second response…'). Numbered signposts are especially powerful because they let the judge create discrete flow lines. The test is whether a judge, looking only at your signposts, could reconstruct your speech's structure — if yes, you've signposted well. Pair signposts with brief eye contact at transitions to confirm the judge is tracking. Roadmap plus signposting turns even a dense, fast speech into one the judge can follow effortlessly, which is the precondition for every argument in it being credited.",
        ],
        codeExample: {
          label: "Roadmap + Signposting — Navigate the Speech",
          code: `  ROADMAP (start of speech, ~5 seconds):
   preview the ORDER of major areas only:
   "I'll go to their case first — their disadvantage,
    then their solvency attack — then rebuild my two
    contentions."
   → judge sets up their flow to track you.
   (follow format norms, e.g. "off-time roadmap")

  SIGNPOSTING (running, throughout the speech):
   between AREAS    "now to my own case"
   between ARGS     "their second contention"
   within an ARG    "my first response... my second..."
   → numbered signposts = discrete flow lines

  THE TEST: could the judge reconstruct your speech's
   STRUCTURE from your signposts alone? if yes → good.

  WHY IT MATTERS: an argument the judge can't follow
   doesn't make the flow → "didn't happen."
   organization = persuasion. preview the route,
   label every turn, the judge arrives WITH you.`,
        },
      },
      incident: {
        title: "The Map and the Territory — Why Navigation Wins",
        when: "Timeless",
        where: "From the cartographer's table to the debate round",
        impact: "A traveler with a map and clear signposts reaches the destination; one without them gets lost in the same territory. A speech is a journey, and the debater who maps and marks the route brings the judge all the way to the conclusion.",
        body: [
          "For as long as people have traveled unfamiliar territory, two things have separated those who arrive from those who get lost: a map that previews the route and signposts that mark the way as you go. The territory is identical for both travelers; the difference is navigation. A region without maps or markers swallows even the well-intentioned traveler, while the same region, mapped and signed, is crossed with confidence. Navigation is not the journey, but it determines whether the journey reaches its destination.",
          "A debate speech is a journey the judge takes with you, through the territory of your arguments to your conclusion. The roadmap is the map you hand the judge at the trailhead — here is the route we'll take; the signposts are the markers along the way — we are here now, turning toward this argument next. Without them, even a judge willing to follow gets lost in a dense speech, and arguments are missed, mis-flowed, or never credited. With them, the judge follows every step and arrives at your conclusion alongside you, having tracked the whole route. This is why organization is not a cosmetic nicety but a form of persuasion: the best argument in the world persuades no one who couldn't follow the path to it. Map the route, mark every turn, and you bring the judge all the way home.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Give a Roadmap", sub: "preview the route", type: "attacker" },
          { label: "Signpost Every Turn", sub: "macro and numbered micro", type: "system" },
          { label: "Judge Stays Oriented", sub: "always knows where you are", type: "victim" },
          { label: "Every Argument Credited", sub: "structure survives to the flow", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "Lincoln and Douglas structure long speeches with clear signposted transitions" },
        { year: 1925, event: "Intercollegiate debate scores organization and clarity" },
        { year: 1990, event: "Roadmapping becomes standard practice across formats", highlight: true },
        { year: 2005, event: "Numbered signposting is taught as core to flowable speeches" },
        { year: 2018, event: "Roadmap-and-signpost discipline emphasized for lay-judge formats" },
        { year: 2024, event: "Navigation skills anchor speech organization in case construction" },
      ],
      keyTakeaways: [
        "A roadmap is a brief preview of the order you'll address things, given at the start so the judge can set up their flow",
        "Signposting is continuous in-speech labeling ('now to their second contention', 'my first response') that keeps the judge oriented",
        "Organization is persuasion: an argument the judge can't follow doesn't make the flow, so it 'didn't happen'",
        "Test your signposting by asking whether the judge could reconstruct your speech's structure from the signposts alone",
      ],
      references: [
        { title: "NSDA: Roadmapping and Signposting", url: "https://www.speechanddebate.org/" },
        { title: "Speech Organization for Debate (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Flowing and Signposting Guide (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-09-q1",
          type: "Roadmap",
          challenge: `  A debater begins their rebuttal by immediately
  diving into arguments with no preview of what
  they'll cover or in what order. The judge struggles
  to set up their flow and loses track early.`,
          text: "What simple tool would have helped?",
          options: [
            "Speaking faster to cover more",
            "A roadmap — a brief preview of the order they'll address things ('their case first, then mine'), given at the start so the judge can set up their flow to track the speech",
            "Skipping the opponent's arguments",
            "A longer conclusion",
          ],
          correctIndex: 1,
          explanation: "A roadmap — a few seconds previewing the order of the major areas ('I'll address their case first, then rebuild mine') — lets the judge set up their flow before you start filling it in. Without it, the judge has to reconstruct your organization on the fly and easily loses track, as happened here. Roadmapping is standard practice precisely because it dramatically improves how well the judge follows and flows a speech, at almost no time cost.",
        },
        {
          id: "debate-4-09-q2",
          type: "Signposting",
          challenge: `  A debater gives a roadmap but then, during the
  speech, never says where they are — moving between
  arguments and responses with no verbal labels. The
  judge again gets lost mid-speech.`,
          text: "What's missing, and why does the roadmap alone not suffice?",
          options: [
            "Nothing — a roadmap is all you need",
            "Signposting — continuous in-speech labels ('now their second contention', 'my first response') keep the judge oriented within the structure; a roadmap previews the route, but signposts mark the turns as you go",
            "A second roadmap at the end",
            "Faster delivery",
          ],
          correctIndex: 1,
          explanation: "A roadmap previews the structure, but signposting maintains it. Without continuous in-speech labels marking each transition ('moving to their second contention,' 'my first response here'), the judge loses track within the speech even though they knew the overall plan. Roadmap and signposting work together: the roadmap is the map handed over at the start; signposts are the markers along the way. You need both for the judge to follow every step.",
        },
        {
          id: "debate-4-09-q3",
          type: "Organization as Persuasion",
          challenge: `  A debater makes a genuinely brilliant argument,
  but buries it in a disorganized, unsignposted
  tangle. The judge, unable to follow, never writes
  it down — and doesn't credit it in the decision.`,
          text: "What principle does this illustrate?",
          options: [
            "Brilliant arguments always win regardless of delivery",
            "Organization is persuasion: an argument the judge can't follow doesn't make the flow, and an argument not on the flow 'didn't happen' — comprehension is the precondition of being credited",
            "Judges should try harder to follow",
            "Disorganization makes arguments more impressive",
          ],
          correctIndex: 1,
          explanation: "This illustrates that organization is persuasion because comprehension is the precondition of credit. A brilliant argument buried in an unsignposted tangle may never make it onto the judge's flow — and an argument not on the flow 'didn't happen' (epoch 1). Roadmapping and signposting guarantee your structure survives from your mouth to the judge's flow intact, so your arguments are actually credited. Brilliance the judge can't follow persuades no one.",
        },
        {
          id: "debate-4-09-q4",
          type: "The Test",
          challenge: `  A debater wants to check whether their signposting
  is good enough.`,
          text: "What's a reliable test of effective signposting?",
          options: [
            "Whether the speech was the loudest in the round",
            "Whether the judge could reconstruct the speech's structure from the signposts alone — if the labeled transitions map the whole speech, signposting is working",
            "Whether the speech used the most evidence",
            "Whether the speech finished early",
          ],
          correctIndex: 1,
          explanation: "A reliable test is whether a judge could reconstruct your speech's structure from your signposts alone. If your verbal labels — between areas, between arguments, and between numbered responses — map the entire speech, then the judge can follow and flow it accurately. If the signposts leave gaps where the judge wouldn't know where they are, the signposting needs work. The goal is a speech so clearly marked that its organization is unmistakable to anyone tracking it.",
        },
      ],
    },
  },

  // ─── debate-4-10: Preparing Against Your Own Case ─────────────────────────────
  {
    epochId: "debate-4",
    wonder: {
      name: "The Sparring Ring",
      location: "Training Halls, Everywhere",
      era: "Timeless",
      emoji: "🥊",
    },
    id: "debate-4-10",
    order: 10,
    title: "Preparing Against Your Own Case",
    subtitle: "Stress-testing your case by attacking it before the opponent does",
    category: "arts",
    xp: 88,
    badge: { id: "debate-4-badge-10", name: "Red Team", emoji: "🥊" },
    challengeType: "quiz",
    info: {
      tagline: "The best way to bulletproof your case is to attack it yourself first — find your own weaknesses in practice, before an opponent finds them in a round.",
      year: 2024,
      overview: [
        "The final step of case construction is to turn against your own case and attack it as hard as the toughest opponent would — 'red-teaming' or 'prepping out' your case. Deliberately hunt for every weakness:\n- The shaky link.\n- The vulnerable premise.\n- The evidence that overstates.\n- The framework an opponent could flip.\n- The response you don't have a good answer to.\nFinding these in your own preparation, when you have time to fix them, is infinitely better than discovering them when an opponent exploits them in a round.",
        "This works best as adversarial practice — have a teammate or coach run the strongest case against yours, or argue the opposite side yourself and genuinely try to beat your case. The goal is to test whether your blocks (epoch 4-08) hold; where they don't, you have a choice:\n- Strengthen the weak part — better evidence, a tighter link, a defended framework.\n- Build a block for the response you lacked.\n- Cut a contention that can't be defended and replace it with something stronger.\nA case that has survived a serious internal attack is far more robust than one that has never been tested.",
        "Red-teaming also builds the intellectual honesty that epoch 1 identified as debate's deepest value. To attack your own case well, you must genuinely understand the other side and take its best arguments seriously — not the strawman version, but the strongest case against you. This is uncomfortable (it means admitting your case has weaknesses) and immensely valuable: it produces a stronger case, prepares you for the real clash, and trains the habit of seeking out the best objections to your own views rather than avoiding them. The debater who has honestly tried to defeat their own case walks into the round already knowing where the battle will be and having prepared for it. Attack yourself first, and the opponent finds a case already hardened against their best blows.",
      ],
      technical: {
        title: "Running the Red Team and Fixing What Breaks",
        body: [
          "A systematic self-attack: go through your case element by element and ask the adversary's questions. For each contention — is the link solid, or can it be severed? Does the evidence actually support the tag, or does it overstate? Is the impact weighable, or is it speculative? For the framework — can an opponent argue a different standard that makes my case look weak? For each predictable opponent argument — do I have a block, and does it actually answer the strongest version? Where you find a weakness, you've found exactly what the opponent will find — so fix it now: strengthen, block, or cut.",
          "The most rigorous method is genuine adversarial practice: have a teammate, coach, or your own honest effort build and run the best possible opposing case, and see what survives. This 'practice round' against your own case reveals weaknesses no amount of solo review catches, because a real opponent attacks in ways you didn't anticipate. Note every place your case struggled, then iterate — fix the weakness, rebuild the block, re-test. This is the same compounding-preparation logic as blocks (epoch 4-08), turned inward: each cycle of self-attack and repair hardens the case. By the time you face a real opponent, your case has already survived the toughest attack you and your team could mount — and you know exactly where the clash will be.",
        ],
        codeExample: {
          label: "Red-Team Your Own Case Before the Opponent Does",
          code: `  RED-TEAMING: attack your OWN case as the toughest
   opponent would, while you still have time to FIX it.

  SELF-ATTACK CHECKLIST (element by element):
   CONTENTIONS  link solid or severable?
                evidence supports the tag or overstates?
                impact weighable or speculative?
   FRAMEWORK    can an opponent flip it to favor them?
   BLOCKS       do I answer the STRONGEST version of
                each predictable argument?

  found a weakness = exactly what the OPPONENT will find.
   FIX IT NOW (3 options):
    • STRENGTHEN  better evidence / tighter link / defend
    • BLOCK       build the answer you were missing
    • CUT         can't defend it → replace with stronger

  BEST METHOD: real adversarial practice — a teammate/
   coach runs the best opposing case; see what survives;
   iterate. (compounding prep, turned inward)

  BONUS: builds intellectual honesty — take the BEST
   case against you seriously, not a strawman.`,
        },
      },
      incident: {
        title: "The Sparring Principle — Tested in Practice, Not in the Fight",
        when: "Timeless",
        where: "Every serious training hall",
        impact: "Fighters, militaries, engineers, and security teams all 'red-team' — testing their plans against a determined adversary in practice — because a weakness found in training is fixable, while one found in the real contest is a defeat.",
        body: [
          "Across every field where contests are won or lost, the same wisdom recurs: test yourself against a determined adversary in practice, not for the first time in the real fight. Boxers spar before the bout, so they meet real punches in training, not in the championship. Militaries run 'red team' exercises where a dedicated unit plays the enemy and attacks their own side's plans, exposing flaws while they can still be fixed. Engineers stress-test structures to failure in the lab. Security teams hire ethical hackers to break their systems before criminals do. In every case, the principle is identical: a weakness found in practice is a lesson; the same weakness found in the real contest is a loss.",
          "Red-teaming your own debate case applies this universal principle to argument. Your case will be attacked by a determined opponent; the only question is whether you discover its weaknesses first, in preparation where they can be fixed, or whether the opponent discovers them, in a round where they cost you. By turning against your own case — genuinely trying to defeat it, ideally with a teammate playing the toughest opponent — you surface the shaky links, overstated evidence, and missing blocks while there's still time to repair them. The case that emerges from a serious internal attack is hardened, and you walk into the round already knowing where the clash will be. It is the sparring principle: meet the hardest blows in training, so the real contest holds no surprises. Attack yourself first, and the opponent meets a case already battle-tested against their best.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attack Your Own Case", sub: "as the toughest opponent", type: "attacker" },
          { label: "Find the Weaknesses", sub: "shaky links, missing blocks", type: "system" },
          { label: "Strengthen, Block, or Cut", sub: "fix it while you can", type: "victim" },
          { label: "A Hardened Case", sub: "already survived the worst", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "'Prepping out' one's own case becomes standard advanced practice", highlight: true },
        { year: 2000, event: "Adversarial practice rounds formalize internal case-testing" },
        { year: 2010, event: "Red-teaming spreads from security/military thinking into debate prep" },
        { year: 2018, event: "Iterative self-attack-and-repair becomes a coaching staple" },
        { year: 2024, event: "Red-teaming your own case caps the case-construction epoch" },
      ],
      keyTakeaways: [
        "Red-team your own case — attack it as hard as the toughest opponent would, while you still have time to fix the weaknesses",
        "Go element by element: test each link, the evidence, the impacts, the framework, and whether your blocks answer the strongest version",
        "When you find a weakness, fix it now — strengthen it, build the missing block, or cut a contention you can't defend",
        "Genuine adversarial practice (a teammate running the best opposing case) finds weaknesses solo review misses and builds intellectual honesty",
      ],
      references: [
        { title: "NSDA: Practice Rounds and Case Testing", url: "https://www.speechanddebate.org/" },
        { title: "Red Teaming and Adversarial Thinking (overview)", url: "https://en.wikipedia.org/wiki/Red_team" },
        { title: "Improving Your Case Through Practice (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-4-10-q1",
          type: "Why Red-Team",
          challenge: `  A debater finishes their case and feels confident.
  A teammate offers to run the strongest possible
  opposing case against it in practice. The debater
  says, 'No need — I'm sure it's solid.'`,
          text: "Why should they accept the practice attack?",
          options: [
            "They shouldn't — confidence means the case is fine",
            "Red-teaming finds weaknesses in practice, where they're fixable, rather than in a round where an opponent exploits them; a case that survives a serious internal attack is far more robust",
            "Practice attacks only help the teammate",
            "Cases should never be tested before competition",
          ],
          correctIndex: 1,
          explanation: "Confidence isn't a substitute for testing. The case will be attacked by a real opponent regardless; the only question is whether its weaknesses are found first in practice (fixable) or in a round (costly). Accepting the teammate's best opposing case surfaces shaky links, overstated evidence, and missing blocks while there's still time to repair them. This is the sparring/red-team principle: a weakness found in training is a lesson; the same weakness found in the real contest is a loss.",
        },
        {
          id: "debate-4-10-q2",
          type: "Finding a Weakness",
          challenge: `  While attacking their own case, a debater realizes
  one contention rests on a link an opponent could
  easily sever, and they have no good block for that
  attack.`,
          text: "What are their options for fixing this?",
          options: [
            "Ignore it and hope no opponent notices",
            "Strengthen the weak part (better evidence, a tighter link), build the block they were missing, or cut the contention and replace it with something stronger",
            "Make the contention longer without changing it",
            "Remove all their contentions",
          ],
          correctIndex: 1,
          explanation: "Finding the weakness is exactly what the opponent will find — so fix it now. The three options are: strengthen it (better evidence, a tighter link, a defended framework), build the block you were missing (so you can answer the attack), or cut the contention and replace it with something more defensible if it can't be saved. Ignoring it and hoping no opponent notices is the one bad option, because a competent opponent will find precisely what your own self-attack found.",
        },
        {
          id: "debate-4-10-q3",
          type: "Intellectual Honesty",
          challenge: `  To red-team well, a debater must build the
  STRONGEST possible case against their own position
  — not a weak strawman — and take it seriously.`,
          text: "What deeper value does this practice build?",
          options: [
            "Cynicism — learning to argue dishonestly",
            "Intellectual honesty — genuinely understanding the other side, taking the best objections to your own view seriously, which produces a stronger case and trains a habit valuable far beyond debate",
            "Nothing beyond the case itself",
            "A reason to avoid all opposing arguments",
          ],
          correctIndex: 1,
          explanation: "Red-teaming well requires building the strongest case against yourself — not a strawman — and taking it seriously, which is the essence of intellectual honesty (epoch 1's deepest value). It's uncomfortable because it means admitting your case has weaknesses, but it produces a stronger case and trains the lifelong habit of seeking out the best objections to your own views rather than avoiding them. This is the opposite of cynical manipulation: it's the discipline of following reasons honestly, even against your own position.",
        },
        {
          id: "debate-4-10-q4",
          type: "The Sparring Principle",
          challenge: `  A coach compares red-teaming your case to a boxer
  sparring before a match, a military red-team
  exercise, and a security team hiring ethical
  hackers to break their systems.`,
          text: "What common principle unites all of these?",
          options: [
            "Test your plan against a determined adversary in PRACTICE, because a weakness found in training is fixable while the same weakness found in the real contest is a defeat",
            "Avoid all testing until the real event",
            "Adversaries should never be simulated",
            "Only debate uses this idea",
          ],
          correctIndex: 0,
          explanation: "The uniting principle is to test yourself against a determined adversary in practice, not for the first time in the real contest — because a weakness found in training is a fixable lesson, while the same weakness found in the actual fight is a defeat. Boxers spar, militaries red-team, engineers stress-test, security teams hire ethical hackers, and debaters attack their own cases. All apply the identical logic: surface and repair flaws in preparation so the real contest holds no surprises.",
        },
      ],
    },
  },
];
