import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Research & Case Construction epoch (debate-4).
// Each spot is a deterministic, skill-based judgment about research and case-building:
// judging source credibility, choosing the strongest evidence, completing a contention
// (claim-warrant-impact-evidence), spotting an under-warranted card, structuring a case,
// and weighing impacts. The marked answer reflects sound case-construction principle,
// never opinion. correctIndex and explanation are stripped server-side before the client.
export const debate4Scenarios: Record<string, ScenarioConfig> = {
  // ── debate-4-01: Topic Analysis ───────────────────────────────────────────
  "debate-4-01": {
    intro:
      "You've been handed a brand-new resolution and zero prep. Before you touch a search engine, map the topic — terms, burdens, arguments, and the clash.",
    spots: [
      {
        id: "deb4-01-s1",
        label: "First Move",
        situation:
          "Resolved: 'The United States should adopt a federal wealth tax.' You have a full prep period and an empty document.",
        prompt: "What's the correct FIRST step?",
        options: [
          "Start saving every article you can find and build the case from whatever turns up",
          "Analyze the topic first — define terms, identify the burdens, brainstorm both sides, and map the clash — then research to fill the gaps",
          "Write your first contention immediately so you don't waste time",
          "Memorize a generic case you can reuse on any topic",
        ],
        correctIndex: 1,
        explanation:
          "Topic analysis comes before research. Researching first produces unguided evidence that may not fit the decisive clash. Mapping the topic — terms, burdens, both sides, the battlegrounds — tells you exactly what to look for, so the research that follows is targeted and efficient.",
      },
      {
        id: "deb4-01-s2",
        label: "Both Sides",
        situation:
          "You've been assigned the Affirmative. You're tempted to brainstorm only Affirmative arguments to save time.",
        prompt: "Why should you brainstorm the Negative's arguments too?",
        options: [
          "You shouldn't — only your own side's arguments matter",
          "The opponent's best arguments are the attacks you must answer, and mapping their ground reveals where your case is vulnerable and where the clash lies",
          "It's required so you can switch sides in the middle of the round",
          "Only to be polite to your opponent",
        ],
        correctIndex: 1,
        explanation:
          "Even when locked to one side, you brainstorm both because the Negative's strongest arguments are exactly the attacks you'll face. Mapping their ground shows where you're exposed and lets you pre-build answers. Debaters who think only about their own case get blindsided by predictable attacks.",
      },
      {
        id: "deb4-01-s3",
        label: "Map the Clash",
        situation:
          "Your brainstorm produced ten possible arguments. You're deciding how many to research and run.",
        prompt: "What does mapping the clash tell you to do?",
        options: [
          "Research and run all ten — more arguments always means more ways to win",
          "Pick arguments at random to stay unpredictable",
          "Identify the 2–3 decisive battlegrounds and concentrate your strongest, most defensible arguments there",
          "Run exactly one argument no matter the topic",
        ],
        correctIndex: 2,
        explanation:
          "Most resolutions turn on a few decisive battlegrounds, not ten equal points. Identify those clashes and concentrate depth there. A focused case of two or three well-supported arguments beats a scattered ten — and it tells you where to spend limited research time.",
      },
      {
        id: "deb4-01-s4",
        label: "The Output",
        situation:
          "You've defined terms, brainstormed both sides, mapped the clash, and chosen your strongest arguments.",
        prompt: "What two deliverables should this analysis have produced?",
        options: [
          "A finished speech and nothing else",
          "A case outline (arguments to build) AND a targeted research to-do list (specific evidence and definitions to find)",
          "A list of judges to avoid and a list of opponents",
          "A memorized script and a backup script",
        ],
        correctIndex: 1,
        explanation:
          "Good topic analysis yields a case outline (your strongest arguments and framework, ready to build) and a research to-do list (exactly which arguments need evidence and which terms need defining). Together they make all downstream work faster and sharper.",
      },
    ],
  },

  // ── debate-4-02: Research and Cutting Cards ───────────────────────────────
  "debate-4-02": {
    intro:
      "Your topic map says what to look for. Now judge sources, cut clean cards, and organize them so the right evidence is in your hands in seconds.",
    spots: [
      {
        id: "deb4-02-s1",
        label: "Judge the Source",
        situation:
          "Four sources all claim a wealth tax would 'devastate' investment. You can read only one card on the point.",
        prompt: "Which source is the strongest to cut a card from?",
        options: [
          "An anonymous blog post with no author or date",
          "A 2009 op-ed by a columnist with no economics background",
          "A peer-reviewed 2023 study by named economists in a respected journal, directly on the resolution",
          "A viral social-media thread that 'lots of people agreed with'",
        ],
        correctIndex: 2,
        explanation:
          "Source quality is currency, currency of relevance, authority, and recency. A recent, peer-reviewed study by qualified, named authors directly on point outweighs an anonymous blog, a dated lay op-ed, or social consensus. Apply the CRAAP/quality tests: a judge weighs strong sourcing far more heavily.",
      },
      {
        id: "deb4-02-s2",
        label: "Card Anatomy",
        situation:
          "A teammate hands you 'a card' that is just a long pasted quote — no label and no citation. In a round you can't quickly say what it proves or who wrote it.",
        prompt: "What two required parts of a card are missing?",
        options: [
          "The tag (a short, honest claim of what it proves) and the citation (author, qualification, date, source)",
          "More quoted text and a second supporting quote",
          "A footnote and a bibliography page number",
          "Nothing — a raw quote is already a complete card",
        ],
        correctIndex: 0,
        explanation:
          "A usable card has three parts: tag, citation, and quoted text. This one has only the text. The tag (a concise, honest claim read first to orient the judge) and the citation (author, qualification, date, source — which establishes credibility) are missing, leaving it slow to deploy and lacking visible authority.",
      },
      {
        id: "deb4-02-s3",
        label: "Spot the Bad Tag",
        situation:
          "A source says a policy 'may modestly reduce emissions in some sectors.' The card is tagged: 'Policy dramatically slashes emissions across the entire economy.'",
        prompt: "What's wrong, and what should you do?",
        options: [
          "Nothing — tags are supposed to sound as strong as possible",
          "Make the tag even bolder so the judge is impressed",
          "Shorten the quoted text so the gap is less visible",
          "Rewrite the tag to claim only what the source supports — an overstated tag is an ethics violation and a liability when the opponent reads the card",
        ],
        correctIndex: 3,
        explanation:
          "The tag claims far more than the text ('may modestly... in some sectors' is not 'dramatically... across the entire economy'). An overstated tag misrepresents the source (an ethics problem) and backfires strategically: when the opponent calls for and reads the card, the gap is exposed and your credibility on everything else suffers. Tag only what the card proves.",
      },
      {
        id: "deb4-02-s4",
        label: "File It",
        situation:
          "You have great evidence but keep it all in one giant unsorted document. An opponent makes an argument you HAVE a strong card against — but you can't find it before your speech time runs out.",
        prompt: "What organizational principle fixes this?",
        options: [
          "Add more cards to the same document so it's more complete",
          "File evidence by argument — a folder per contention (offense) and per anticipated opponent argument (answers) — so the right card is findable in seconds",
          "Delete the file and rely on memory under pressure",
          "Keep one pile but make the document longer and unbroken",
        ],
        correctIndex: 1,
        explanation:
          "Evidence you can't find under pressure might as well not exist. Filing by argument — offense folders per contention, answer/block folders per anticipated opponent argument, mirroring your topic map — means you go straight to the relevant card when its clash arises. A single undifferentiated pile fails exactly when speed matters most.",
      },
    ],
  },

  // ── debate-4-03: Building the Constructive Case ───────────────────────────
  "debate-4-03": {
    intro:
      "A case is architecture, not a fact dump. Frame it, build complete contentions, and arrange them so the whole stands under attack.",
    spots: [
      {
        id: "deb4-03-s1",
        label: "Case vs List",
        situation:
          "A debater's 'case' is a rapid list of fifteen true facts about the topic — no thesis, no framework, no explanation of why any fact means their side wins.",
        prompt: "Why isn't this an effective constructive case?",
        options: [
          "It is effective — more facts means more proof",
          "It needs architecture: a framework and 2–3 complete contentions with impacts, not an unstructured pile of facts the judge has no organized reason to vote on",
          "Fifteen facts is too few — it needs at least thirty",
          "Facts should never appear in a debate case",
        ],
        correctIndex: 1,
        explanation:
          "A list of true facts is a pile of stones, not an arch. An effective case has a framework telling the judge how to weigh, and two or three complete contentions, each with claim, warrant, and impact. Facts without structure or impacts give the judge no organized reason to vote and collapse under the first push.",
      },
      {
        id: "deb4-03-s2",
        label: "Complete the Contention",
        situation:
          "Contention One states a clear claim and reads strong evidence for it — but never says why this contention means the judge should vote for this side.",
        prompt: "What part of a complete contention is missing?",
        options: [
          "The impact — why the contention matters, tied to the framework/burden; without it the judge knows the claim is true but not why it wins the round",
          "A second, unrelated claim",
          "More evidence stacked behind the same point",
          "Nothing — a claim plus evidence is already complete",
        ],
        correctIndex: 0,
        explanation:
          "A complete contention is claim + warrant (reasoning/evidence) + impact. This one has claim and warrant but no impact — the most commonly skipped step. Without it the judge accepts the claim but doesn't know why it decides the ballot. Every contention must answer 'so what?' by linking back to why you win.",
      },
      {
        id: "deb4-03-s3",
        label: "Depth vs Breadth",
        situation:
          "Two cases on the same resolution: Case A has six shallow contentions rushed to fit the time limit; Case B has two deeply warranted, well-evidenced, clearly impacted contentions.",
        prompt: "Which structure is generally stronger?",
        options: [
          "Case A — six contentions give more paths to victory",
          "They are identical in strength",
          "Case B — a judge can vote on a single winning contention, so two robust, defensible ones beat six shallow ones that are each easy to attack",
          "Neither — a case should have exactly one contention",
        ],
        correctIndex: 2,
        explanation:
          "Depth beats breadth. Because the judge can vote for you on any single winning contention, two robust, well-warranted, well-impacted contentions give defensible ground, while six shallow ones are each easy to attack and too rushed to develop. The two-or-three-contention norm exists for exactly this reason.",
      },
      {
        id: "deb4-03-s4",
        label: "Order It",
        situation:
          "A debater presents their contentions first and then, at the very end of the case, finally explains the framework the judge should use to weigh everything.",
        prompt: "Why is this ordering suboptimal?",
        options: [
          "It's optimal — the framework belongs last as a strong finish",
          "Frameworks should never be stated aloud",
          "The contentions should come after the conclusion instead",
          "The framework is the lens for weighing the contentions, so it must come BEFORE them — otherwise the judge heard the arguments without knowing how to evaluate them",
        ],
        correctIndex: 3,
        explanation:
          "The framework tells the judge how to weigh the contentions, so it belongs right after the introduction, before them. Presenting contentions first and framework last means the judge processed your arguments without the evaluating lens. Proper architecture is intro → framework → contentions → conclusion.",
      },
    ],
  },

  // ── debate-4-04: Framework and Weighing Standards ─────────────────────────
  "debate-4-04": {
    intro:
      "Whoever sets the standard for what counts as winning has already half-won. Choose, defend, and weigh under the lens the judge sees the round through.",
    spots: [
      {
        id: "deb4-04-s1",
        label: "Why It Matters",
        situation:
          "The same argument about maximizing total social welfare is decisive in one round and nearly irrelevant in another — with identical evidence.",
        prompt: "What best explains the difference?",
        options: [
          "The framework differed — a welfare-maximizing standard makes the argument decisive while a rights-based standard makes it carry little weight",
          "The judges must have been biased",
          "The evidence was secretly different in one round",
          "Frameworks have no real effect on how arguments count",
        ],
        correctIndex: 0,
        explanation:
          "The framework is the lens that determines which arguments count as decisive. Under a welfare-maximizing standard an aggregate-welfare argument is central; under a rights-based standard the same argument shrinks. With identical evidence, the framework alone can flip the result — which is why it's the highest-leverage element of a case.",
      },
      {
        id: "deb4-04-s2",
        label: "Choose Wisely",
        situation:
          "A debater picks an impressive-sounding framework, then realizes their own strongest contentions don't actually satisfy that standard — while the opponent's arguments do.",
        prompt: "What's the lesson about choosing a framework?",
        options: [
          "Always pick the most impressive-sounding framework regardless of fit",
          "Choose a framework your strongest arguments satisfy and the opponent's don't; a framework you can't win under is worse than none",
          "Frameworks should be chosen at random to stay unpredictable",
          "Pick the framework that favors the opponent, for fairness",
        ],
        correctIndex: 1,
        explanation:
          "A framework you can't win under actively helps the opponent by setting a standard their arguments meet and yours don't. Choose a lens that (a) fairly fits the resolution and (b) your strongest contentions best satisfy while the opponent's fail it. Impressiveness is irrelevant if the lens makes your own case look weak.",
      },
      {
        id: "deb4-04-s3",
        label: "Layer It",
        situation:
          "A skilled debater argues: 'My criterion is the right lens for this resolution. But even if you prefer my opponent's criterion, my case still wins under it, because…'",
        prompt: "What framework strategy is this?",
        options: [
          "Conceding the framework debate entirely",
          "Refusing to engage with frameworks",
          "Layered framework reasoning — argue for your own framework AND argue you still win under the opponent's as a backup, insuring victory either way",
          "Abandoning your contentions to focus only on the value",
        ],
        correctIndex: 2,
        explanation:
          "This is layered framework reasoning: rather than betting everything on winning your own lens, you also show your case prevails under the opponent's as insurance. Whichever framework the judge adopts, you have a path to the ballot — a hallmark of sophisticated case construction.",
      },
      {
        id: "deb4-04-s4",
        label: "Cash It In",
        situation:
          "A debater wins that the round should be judged by 'protecting individual rights' — but never explains how their specific contentions protect rights better than the opponent's.",
        prompt: "What did they fail to do?",
        options: [
          "Nothing — winning the framework is automatically enough",
          "They should have picked a different framework",
          "They needed to add more contentions",
          "They failed to WEIGH under the framework — after winning the lens you must show your contentions best satisfy it while the opponent's fail it",
        ],
        correctIndex: 3,
        explanation:
          "Winning the framework is necessary but not sufficient — you must then weigh under it, explicitly showing your case satisfies the standard better than the opponent's. Winning 'judge by protecting rights' but never demonstrating your case protects rights best leaves the framework's leverage unused.",
      },
    ],
  },

  // ── debate-4-05: Building a Policy Case ───────────────────────────────────
  "debate-4-05": {
    intro:
      "A policy case is a promise: a real problem, a status quo that won't fix it, a specific plan that will, and benefits that beat the costs. Build all of it.",
    spots: [
      {
        id: "deb4-05-s1",
        label: "Missing Stock Issue",
        situation:
          "An Affirmative proves a huge harm exists and presents a detailed plan — but reads no evidence that the plan would actually fix the harm.",
        prompt: "Which stock issue have they failed to prove?",
        options: [
          "Inherency",
          "Solvency — proof the plan actually solves the harm; without it the Negative wins on that stock issue alone",
          "Topicality",
          "Significance of the harm",
        ],
        correctIndex: 1,
        explanation:
          "Solvency is the burden to prove the plan actually addresses the harm. A real problem and a detailed plan mean nothing if there's no evidence the plan works. Miss any stock issue — harm, inherency, plan, solvency, advantages — and the Negative can win on it alone.",
      },
      {
        id: "deb4-05-s2",
        label: "Plan Specificity",
        situation:
          "An Affirmative plan reads, in full: 'The government should do more about climate change.'",
        prompt: "What's the problem with this plan?",
        options: [
          "It's too specific and gives the Negative a target",
          "Nothing — vague plans are harder to attack",
          "It's too vague — no actor, action, mechanism, funding, or enforcement — so you can't prove solvency or defend topicality",
          "It names too many agencies",
        ],
        correctIndex: 2,
        explanation:
          "A good plan names the actor, action, mechanism, and usually funding and enforcement. Vagueness ('do more about climate') makes solvency unprovable and invites attacks for being unworkable or untopical. Specificity is strength — it lets you prove concretely that the plan solves, even though it also gives the Negative a precise target.",
      },
      {
        id: "deb4-05-s3",
        label: "The Advantage Chain",
        situation:
          "An Affirmative advantage states: 'Our plan funds public transit, which reduces emissions, which mitigates climate harm.' The Negative reads strong evidence that the funded transit projects would not actually reduce emissions.",
        prompt: "What has the Negative attacked, and what must the Affirmative do?",
        options: [
          "The Negative attacked the impact; the Affirmative should drop the advantage",
          "The Negative severed an internal link in the chain; the Affirmative must defend that link with evidence or the advantage collapses",
          "The Negative ran a topicality argument; the Affirmative should rewrite the plan",
          "Nothing happened — links don't matter, only impacts",
        ],
        correctIndex: 1,
        explanation:
          "An advantage is a causal chain (plan → link → impact). The Negative severed the link (transit → emissions), and if that link falls, the impact never arrives no matter how large. The Affirmative must defend each link with evidence — a broken chain delivers no advantage.",
      },
      {
        id: "deb4-05-s4",
        label: "Net Benefit",
        situation:
          "The Affirmative's advantage and the Negative's disadvantage both survive. The Affirmative's advantage is large and probable; the Negative's disadvantage is speculative and small.",
        prompt: "How should the Affirmative win the weighing?",
        options: [
          "Claim the disadvantage doesn't exist at all",
          "Argue that any disadvantage means they automatically lose",
          "Refuse to weigh and hope the judge ignores the disadvantage",
          "Weigh impacts — show their large, probable advantage outweighs the small, speculative disadvantage, leaving the plan net beneficial",
        ],
        correctIndex: 3,
        explanation:
          "A policy case wins on net benefit. Even granting some Negative offense, the Affirmative weighs magnitude and probability to show its advantage outweighs the disadvantage, so the plan is net beneficial. Conceding the disadvantage exists but proving it's outweighed is the disciplined, honest path.",
      },
    ],
  },

  // ── debate-4-06: Public Forum Contentions and Links ───────────────────────
  "debate-4-06": {
    intro:
      "Public Forum builds for a reasonable, non-specialist judge. Make every impact earn its way through a clear chain of links — and keep it accessible.",
    spots: [
      {
        id: "deb4-06-s1",
        label: "The Link Gap",
        situation:
          "A PF contention claims a massive impact — 'this policy prevents a global recession' — but never explains the steps connecting the policy to that outcome.",
        prompt: "What's the flaw?",
        options: [
          "The impact is too big and should be made smaller",
          "There's a link gap — no chain of reasoning connects the policy to the impact, so the judge has no reason to believe the outcome follows",
          "Nothing — a big impact speaks for itself",
          "The contention needs a second impact stacked on top",
        ],
        correctIndex: 1,
        explanation:
          "An impact is only as strong as the links that reach it. Asserting a huge outcome without the connecting steps (policy → intermediate effects → impact) is a link gap; the opponent severs the unsupported chain and the impact evaporates. Big impacts demand well-warranted links, not just bold claims.",
      },
      {
        id: "deb4-06-s2",
        label: "Strongest Link Evidence",
        situation:
          "You need a card to support the key link in your contention. You have three options for the same link.",
        prompt: "Which best supports the link?",
        options: [
          "A source on a related but different policy, loosely analogous",
          "A strong-sounding quote that actually addresses the impact, not the link",
          "A recent, credible study that directly establishes this exact link",
          "A general statement that the topic is 'important'",
        ],
        correctIndex: 2,
        explanation:
          "The strongest evidence directly proves the specific link it's cited for. A study on a different policy, a card about the impact rather than the link, or a vague importance claim all leave the link itself unsupported. Match the evidence to the precise step in the chain it must establish.",
      },
      {
        id: "deb4-06-s3",
        label: "Accessibility",
        situation:
          "In a PF round before a parent judge with no debate background, a team races through dense jargon and unexplained acronyms.",
        prompt: "Why is this a mistake in Public Forum?",
        options: [
          "It isn't — jargon shows expertise and wins ballots",
          "PF is judged by the reasonable, non-specialist 'intelligent general reader,' so a case must be clear and accessible to persuade",
          "Parent judges aren't allowed to vote on content",
          "Speed and jargon are required by PF rules",
        ],
        correctIndex: 1,
        explanation:
          "Public Forum is built for a reasonable lay judge — the intelligent general reader. Dense jargon and unexplained acronyms lose that judge. Clear, accessible argument that an ordinary informed person can follow is the format's core demand; persuasion beats technical density.",
      },
      {
        id: "deb4-06-s4",
        label: "Build for Weighing",
        situation:
          "A PF team has two well-linked contentions but never states which impact matters most or why, leaving the judge to guess at the end.",
        prompt: "What should they add?",
        options: [
          "More contentions to crowd out the opponent",
          "Faster delivery to fit more evidence",
          "Built-in weighing — tell the judge why their impact matters most (magnitude, probability, timeframe) so the ballot is decided on their terms",
          "Nothing — strong links make weighing unnecessary",
        ],
        correctIndex: 2,
        explanation:
          "Strong links get you to an impact, but the judge still needs to know why your impact outweighs the opponent's. Building weighing into the case — pre-empting the comparison on magnitude, probability, and timeframe — means you're not leaving the decisive judgment to chance.",
      },
    ],
  },

  // ── debate-4-07: Weighing Mechanisms ──────────────────────────────────────
  "debate-4-07": {
    intro:
      "When both sides win arguments, the judge needs to know whose impact matters more. Master magnitude, probability, timeframe — and 'even if' weighing.",
    spots: [
      {
        id: "deb4-07-s1",
        label: "Why Weigh",
        situation:
          "In a close round both teams clearly won some of their arguments. Neither side told the judge how to compare the surviving impacts.",
        prompt: "What happens, and what should they have done?",
        options: [
          "The judge flips a coin; nothing could have prevented it",
          "Without weighing, the judge must intervene and pick for themselves; both teams should have compared impacts to decide the round on their terms",
          "The round is automatically a tie and re-run",
          "The team that spoke last always wins by default",
        ],
        correctIndex: 1,
        explanation:
          "When competing impacts both survive and no one weighs, the judge is forced to intervene and decide by their own intuition. Weighing — telling the judge why your impact matters more — takes that decision out of their hands and wins close rounds you'd otherwise leave to chance.",
      },
      {
        id: "deb4-07-s2",
        label: "Magnitude vs Probability",
        situation:
          "Your opponent claims a catastrophic but extremely unlikely impact. You have a smaller harm that is near-certain to occur.",
        prompt: "What's the strongest weighing argument for your impact?",
        options: [
          "Concede their impact is bigger and give up the weighing",
          "Weigh on probability — a near-certain harm should outweigh a catastrophic one so speculative it almost never occurs",
          "Claim your impact is actually the largest possible",
          "Argue impacts can't be compared at all",
        ],
        correctIndex: 1,
        explanation:
          "Magnitude isn't the only axis. A huge impact with near-zero probability can be outweighed by a smaller, highly probable one. Weighing on probability — 'mine actually happens; theirs is speculative' — is the honest, accurate counter to an inflated low-probability catastrophe.",
      },
      {
        id: "deb4-07-s3",
        label: "Timeframe",
        situation:
          "Both impacts are serious and roughly equally probable, but yours occurs immediately while the opponent's would only materialize decades from now.",
        prompt: "Which weighing mechanism most favors you here?",
        options: [
          "Magnitude — yours must be bigger",
          "Probability — yours must be more likely",
          "Timeframe — an immediate impact can be weighed as more urgent, and a near-term harm can foreclose the long-term one",
          "Reversibility — yours must be permanent",
        ],
        correctIndex: 2,
        explanation:
          "Timeframe is a distinct weighing axis. When magnitude and probability are comparable, an impact that strikes now can outweigh one decades away — both because urgency matters and because the near-term harm may change conditions before the distant one ever arrives.",
      },
      {
        id: "deb4-07-s4",
        label: "'Even If' Weighing",
        situation:
          "You think you're winning the probability debate, but you want insurance in case the judge buys some of the opponent's impact.",
        prompt: "What's the sophisticated move?",
        options: [
          "Drop your impact and concede the comparison",
          "Insist the judge accept only your framing with no fallback",
          "'Even if' weighing — 'even if you grant their impact is real, mine still outweighs on magnitude/probability/timeframe,' securing the round on multiple layers",
          "Repeat your impact louder without comparing",
        ],
        correctIndex: 2,
        explanation:
          "'Even if' weighing layers your comparison: you argue you win the impact debate, but even granting the opponent's impact, yours still outweighs. It insures the round against losing one layer of the clash — the same defensive depth as layered framework reasoning.",
      },
    ],
  },

  // ── debate-4-08: Briefs, Blocks, and Frontlines ───────────────────────────
  "debate-4-08": {
    intro:
      "The strongest attacks on your case are predictable. Pre-write your answers so you respond with prepared, evidenced blocks instead of improvising under fire.",
    spots: [
      {
        id: "deb4-08-s1",
        label: "What's a Block",
        situation:
          "From topic analysis you already know the three arguments the Negative is most likely to run against your case.",
        prompt: "What's the highest-value prep you can do before the round?",
        options: [
          "Pre-write blocks — organized, evidenced responses to each predictable attack — so you answer from prepared material, not improvisation",
          "Memorize your own case word for word and ignore the attacks",
          "Wait until the round and respond entirely off the cuff",
          "Write a longer constructive with more contentions",
        ],
        correctIndex: 0,
        explanation:
          "A block (or frontline) is a pre-written, evidenced response to an argument you know is coming. Because the strongest attacks are predictable, pre-writing your answers means you respond with organized, sourced material under time pressure instead of scrambling — the payoff of having mapped both sides.",
      },
      {
        id: "deb4-08-s2",
        label: "Anticipate Right",
        situation:
          "You have limited prep time and can only build blocks for a few arguments. You're deciding which to prioritize.",
        prompt: "Which arguments should you block first?",
        options: [
          "The weakest, least likely arguments — they're easiest to answer",
          "Arguments on totally unrelated topics, for variety",
          "The opponent's strongest, most likely attacks on the decisive clash — where the round is most likely won or lost",
          "Only arguments your own case already covers",
        ],
        correctIndex: 2,
        explanation:
          "Block the attacks that matter most: the opponent's strongest, most probable arguments on the decisive battlegrounds your topic map identified. Prep time spent answering unlikely or trivial arguments is wasted; prep on the real clash is where blocks win rounds.",
      },
      {
        id: "deb4-08-s3",
        label: "A Good Block",
        situation:
          "You're writing a block against the predictable 'capital flight' attack on your wealth-tax case.",
        prompt: "What makes the block strongest?",
        options: [
          "A single line that just says 'this is wrong'",
          "Several layered responses — a logical answer, an evidenced answer, and a turn — so the block holds even if one response is beaten",
          "A long unsourced rant restating your own case",
          "An insult aimed at the opponent's source",
        ],
        correctIndex: 1,
        explanation:
          "A strong block is layered: multiple independent responses (a logical refutation, an evidenced refutation, and ideally a turn) so that even if the opponent beats one, the others survive. A single bare assertion collapses the moment it's answered; depth-in-defense mirrors depth-in-offense.",
      },
      {
        id: "deb4-08-s4",
        label: "Don't Over-Script",
        situation:
          "A debater reads a pre-written block word for word, but it doesn't actually respond to the specific version of the argument the opponent ran.",
        prompt: "What went wrong?",
        options: [
          "Nothing — blocks should always be read verbatim",
          "The block should have been longer",
          "They treated the block as a rigid script instead of adapting it to clash with the specific argument actually made — blocks are starting material, not a substitute for listening",
          "They should never have prepared a block",
        ],
        correctIndex: 2,
        explanation:
          "Blocks are prepared raw material, not a script to read blindly. If you fire a generic block that doesn't engage the specific argument the opponent actually made, you fail to clash. The skill is adapting your prepared answers to the real argument in the room — preparation plus responsiveness.",
      },
    ],
  },

  // ── debate-4-09: Roadmaps and Signposting Your Case ───────────────────────
  "debate-4-09": {
    intro:
      "A judge can only vote on what they can follow and flow. Make your speech effortless to track with roadmaps and relentless signposting.",
    spots: [
      {
        id: "deb4-09-s1",
        label: "The Roadmap",
        situation:
          "A debater begins their speech by diving straight into arguments with no preview of the order they'll cover things.",
        prompt: "What should they do first instead?",
        options: [
          "Give a roadmap — a brief preview of the order they'll address arguments — so the judge knows what's coming and can organize their flow",
          "Start with their strongest evidence and skip any preview",
          "Apologize for being unprepared",
          "Read their entire case again from the top",
        ],
        correctIndex: 0,
        explanation:
          "A roadmap is a short preview of the order you'll cover arguments ('I'll go opponent's case, then mine, then weighing'). It orients the judge so they can structure their flow before you speak. Speeches that plunge in with no roadmap are harder to follow and harder to vote on.",
      },
      {
        id: "deb4-09-s2",
        label: "Signposting",
        situation:
          "A debater moves from answering one contention to the next without ever naming which argument they're on. The judge's flow becomes a tangle.",
        prompt: "What technique fixes this?",
        options: [
          "Speak faster to cover more ground",
          "Signpost relentlessly — clearly label each argument as you reach it ('On their second contention…', 'Next, the link…') so the judge tracks exactly where you are",
          "Drop the weaker arguments entirely",
          "Lower your voice so the judge listens harder",
        ],
        correctIndex: 1,
        explanation:
          "Signposting means explicitly labeling each argument as you address it so the judge can place every response on the correct line of their flow. Without it, even strong responses get lost because the judge can't tell what they answer. A flowable speech is a winnable speech.",
      },
      {
        id: "deb4-09-s3",
        label: "Flow-Centric",
        situation:
          "Two debaters make equally good arguments. One organizes responses in the same order the opponent presented them and labels each; the other answers in a scrambled order with no labels.",
        prompt: "Why does the organized debater usually score better?",
        options: [
          "Judges favor whoever speaks first regardless of clarity",
          "The judge can cleanly flow the organized debater's responses against each original argument, so the clash is legible and the work is credited",
          "Organization has no effect on the ballot",
          "The scrambled debater sounds more spontaneous and wins style",
        ],
        correctIndex: 1,
        explanation:
          "Judges decide off their flow. Answering in the opponent's order and labeling each response lets the judge line up the clash and credit your work; a scrambled, unlabeled speech leaves good arguments stranded where the judge can't connect them. Structure makes your substance count.",
      },
      {
        id: "deb4-09-s4",
        label: "Don't Overrun",
        situation:
          "A debater signposts well but spends so long on a minor argument that they run out of time before reaching their own weighing.",
        prompt: "What's the lesson?",
        options: [
          "Signposting alone guarantees a win regardless of time",
          "They should have skipped the roadmap to save time",
          "Time allocation is part of structure — budget time to reach the decisive arguments and weighing, not to over-invest in minor points",
          "Always cover every argument equally no matter its importance",
        ],
        correctIndex: 2,
        explanation:
          "Good signposting can't save a speech that runs out of time before the arguments that decide the round. Time allocation is structural discipline: spend it on the decisive clash and your weighing, and don't let a minor point eat the speech. Prioritize ruthlessly.",
      },
    ],
  },

  // ── debate-4-10: Preparing Against Your Own Case ──────────────────────────
  "debate-4-10": {
    intro:
      "The best way to find your case's weaknesses is to attack it yourself — before an opponent does it for you in a round that counts.",
    spots: [
      {
        id: "deb4-10-s1",
        label: "Be Your Own Opponent",
        situation:
          "You've finished a polished case. With prep time left, you're deciding how to spend it.",
        prompt: "What's the highest-value way to stress-test the case?",
        options: [
          "Re-read your own case admiringly to build confidence",
          "Switch sides and attack your own case as hard as you can, finding its weakest links before an opponent does",
          "Add more contentions until the time limit is full",
          "Memorize the wording so delivery is smooth",
        ],
        correctIndex: 1,
        explanation:
          "Preparing against your own case means flipping sides and attacking it ruthlessly. The weaknesses you find in the quiet of prep — the under-warranted link, the vulnerable contention — are ones you can fix or block now, instead of discovering them mid-round when it's too late.",
      },
      {
        id: "deb4-10-s2",
        label: "Find the Weak Link",
        situation:
          "Attacking your own case, you find one contention rests on a single old, weakly-qualified source while the rest are strong.",
        prompt: "What's the right response?",
        options: [
          "Leave it — one weak card among strong ones won't matter",
          "Delete every contention and start over from scratch",
          "Shore up the weak link — find a stronger, more recent source, or cut the contention if it can't be supported — since the opponent will target exactly that gap",
          "Hide the weak card by reading it faster",
        ],
        correctIndex: 2,
        explanation:
          "A case is only as strong as its weakest load-bearing link, and a good opponent will find it. The fix is to shore it up — better, more recent evidence — or cut the contention if it can't be defended. Self-attack exists precisely to surface and repair these gaps before they cost a round.",
      },
      {
        id: "deb4-10-s3",
        label: "Pre-empt the Attack",
        situation:
          "Your self-attack reveals the single most damaging argument an opponent could make against your case.",
        prompt: "How should this shape your prep?",
        options: [
          "Ignore it and hope the opponent doesn't think of it",
          "Build a strong, evidenced block against that exact attack — and consider pre-empting it inside your constructive so it lands weaker",
          "Remove your whole case so the attack has nothing to hit",
          "Switch to a completely different resolution",
        ],
        correctIndex: 1,
        explanation:
          "Once you know the most dangerous attack, you prepare for it directly: a layered, evidenced block, and where possible a pre-empt woven into your constructive so the attack arrives already softened. Knowing your case's biggest vulnerability is a gift — it tells you exactly where to fortify.",
      },
      {
        id: "deb4-10-s4",
        label: "Honest Self-Review",
        situation:
          "A debater convinces themselves their case has no weaknesses at all and skips the self-attack step entirely.",
        prompt: "Why is this dangerous?",
        options: [
          "It isn't — a confident debater shouldn't doubt their case",
          "Every case has weaknesses; refusing to look for them just means the opponent finds them first, in a round that counts",
          "Self-attack is only for beginners",
          "It saves time, which always outweighs the risk",
        ],
        correctIndex: 1,
        explanation:
          "No case is flawless, and the belief that yours is just means you've stopped looking. The choice isn't whether the weaknesses get found — it's whether you find them in prep, where you can fix them, or the opponent finds them in the round, where you can't. Honest self-review is the discipline that turns a good case into a defensible one.",
      },
    ],
  },
};
