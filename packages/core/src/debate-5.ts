import type { StageConfig, EpochConfig } from "./types";

export const debate5Epoch: EpochConfig = {
  id: "debate-5",
  name: "Clash",
  subtitle: "Refutation, Rebuttal, and Winning the Exchange",
  description:
    "Cases are built in advance; rounds are won in the clash. This epoch is the combat manual: how to read the flow as a battlefield, refute at every layer, turn an opponent's argument into your own offense, run cross-examination like a strategist, extend and frontline your arguments through the round, collapse onto your winners, concede with purpose, crystallize the final speech, and hunt the dropped argument. These are the skills that decide who actually wins.",
  emoji: "⚔️",
  color: "amber",
  unlocked: true,
};

export const debate5Stages: StageConfig[] = [
  // ─── debate-5-01: The Flow as Battlefield ─────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The War Room Map Table",
      location: "Strategy, Everywhere",
      era: "Timeless",
      emoji: "🗺️",
    },
    id: "debate-5-01",
    order: 1,
    title: "The Flow as Battlefield",
    subtitle: "Reading the round as a map of who is winning each argument",
    category: "arts",
    xp: 86,
    badge: { id: "debate-5-badge-01", name: "Battle Cartographer", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Your flow isn't just notes — it's a live map of the battlefield, showing exactly which arguments you're winning and which you're losing.",
      year: 2024,
      overview: [
        "Flowing (epoch 1) is the foundation; in the clash, the flow becomes a strategic instrument — a live map of the battlefield showing the state of every argument. At any moment in a round, each argument on the flow is in one of a few states:\n- Winning — you've made a response the opponent hasn't answered.\n- Losing — they've made a response you haven't answered.\n- Contested — both sides have traded responses.\n- Dropped — one side never responded at all.\nReading these states across your flow tells you, at a glance, where you're ahead, where you're behind, and where the decisive battles are — which is the information you need to make every strategic decision in the round.",
        "This battlefield reading drives the higher-order clash skills in this epoch. You extend the arguments you're winning (carry them forward, epoch 5-05), frontline the responses to your case (answer the answers, epoch 5-06), collapse onto your strongest winners and let go of the rest (epoch 5-07), and pounce on what the opponent dropped (epoch 5-10). None of these are possible without an accurate flow that tells you the true state of each argument. A debater with a clean flow sees the round as it actually is; a debater flowing poorly fights half-blind, defending arguments already won and abandoning arguments still in play.",
        "The discipline is to constantly update and read the flow as a decision tool, not just a record. After each speech, you scan: what did they answer, what did they drop, where did the clash deepen, what is now uncontested? This reading tells you how to allocate your limited speaking time — pour effort into the decisive contested battles and the dropped arguments you can extend, not into arguments already settled. Generals win by reading the battlefield and committing forces where they matter; debaters win by reading the flow and committing speech time where the round is actually decided. The flow is the map; learning to read it strategically is what turns note-taking into generalship.",
      ],
      technical: {
        title: "Reading Argument States and Allocating Time",
        body: [
          "Mark the state of each argument as you flow. A simple system: a check or arrow for an argument you're winning (your last response is unanswered), a mark for one you're losing (their last response is unanswered by you), a note where both have traded (contested/deep clash), and a clear flag for a drop (one side never responded). After each speech, scan the columns and read the board: where am I ahead, where am I behind, what's uncontested, where is the real fight? This reading is the input to every strategic choice — what to extend, what to answer, what to collapse to, what to weigh.",
          "Use the read to allocate time, your scarcest resource. Don't spend a precious rebuttal re-winning an argument you've already won (the opponent dropped your response) — extend it briefly and move on. Don't keep fighting a losing argument that doesn't decide the round — let it go and reallocate. Pour your time into the contested battles that actually decide the ballot and the dropped arguments you can leverage. The flow tells you where those are. A debater who reads the battlefield well speaks where it matters; one who doesn't spreads effort evenly across settled and decisive arguments alike, and loses the rounds that come down to where the time went.",
        ],
        codeExample: {
          label: "The Flow as a Live Battlefield Map",
          code: `  EACH ARGUMENT ON THE FLOW IS IN A STATE:
   ✓ WINNING    your last response is UNANSWERED
   ✗ LOSING     their last response is unanswered by you
   ⇄ CONTESTED  both traded responses (deep clash)
   ! DROPPED    one side NEVER responded → conceded

  AFTER EACH SPEECH, READ THE BOARD:
   where am I ahead? behind? what's uncontested?
   where is the DECISIVE fight?

  ALLOCATE TIME BY THE READ (time = scarcest resource):
   ✓ winning  → extend briefly, don't over-invest
   ✗ losing & irrelevant → let it go, reallocate
   ⇄ contested & decisive → POUR time here
   ! dropped (theirs) → extend + weigh it (free offense)

  generals commit forces where the battle is decided;
  debaters commit SPEECH TIME where the round is decided.
  → the flow is the map; reading it = generalship.`,
        },
      },
      incident: {
        title: "Sun Tzu and the Commander Who Sees the Field",
        when: "5th century BCE",
        where: "Ancient China",
        impact: "Sun Tzu's 'The Art of War' taught that victory goes to the commander who accurately knows the disposition of forces — their own and the enemy's — the same situational awareness a debater achieves by reading the flow.",
        body: [
          "In 'The Art of War,' written around the 5th century BCE, Sun Tzu returned again and again to a single theme: the commander who knows the true disposition of forces — where their own strength lies, where the enemy is weak, where the decisive engagement will occur — prevails, while the commander who fights without that knowledge is defeated. 'If you know the enemy and know yourself, you need not fear the result of a hundred battles.' Victory, for Sun Tzu, begins with accurate situational awareness: seeing the battlefield as it actually is, not as you wish it were.",
          "A debater's flow is the instrument of exactly this awareness. It shows the true disposition of every argument — which of your responses stand unanswered (your strength), which of the opponent's responses you've left unanswered (their strength), where the deep clash is, and what has been dropped. A debater who reads the flow accurately knows the round as it actually is and commits their limited speaking time to the engagements that decide it. A debater flowing poorly fights blind, defending settled positions and abandoning live ones — the commander who doesn't know the field. Sun Tzu's lesson translates directly: the round is won first in the seeing. Read the battlefield, know where you are strong and weak, and commit your forces — your speech time — where victory is actually decided.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Flow Every Argument", sub: "track the clash", type: "attacker" },
          { label: "Mark Each State", sub: "winning / losing / contested / dropped", type: "system" },
          { label: "Read the Board", sub: "where is the round decided?", type: "victim" },
          { label: "Commit Time There", sub: "speak where it matters", type: "result" },
        ],
      },
      timeline: [
        { year: -500, event: "Sun Tzu's 'The Art of War' centers victory on knowing the disposition of forces", highlight: true },
        { year: 1950, event: "Policy debate develops the columnar flow to track multi-argument clash" },
        { year: 1990, event: "Reading the flow strategically (not just recording it) becomes core skill" },
        { year: 2010, event: "Time-allocation by argument state becomes standard rebuttal strategy" },
        { year: 2018, event: "Argument-state tracking taught as the bridge from flowing to strategy" },
        { year: 2024, event: "The flow-as-battlefield concept anchors clash training" },
      ],
      keyTakeaways: [
        "In the clash, the flow becomes a live battlefield map showing the state of every argument",
        "Each argument is winning, losing, contested, or dropped — reading these states tells you where the round is decided",
        "Use the read to allocate your scarce speech time: extend winners briefly, let go of irrelevant losers, pour time into decisive clashes and drops",
        "Like a commander reading the field, the debater who reads the flow accurately commits forces where victory is actually decided",
      ],
      references: [
        { title: "NSDA: Flowing and Round Strategy", url: "https://www.speechanddebate.org/" },
        { title: "Sun Tzu, The Art of War (overview)", url: "https://www.britannica.com/topic/The-Art-of-War-by-Sunzi" },
        { title: "Strategic Flowing Guide (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-01-q1",
          type: "Argument States",
          challenge: `  Mid-round, a debater scans their flow. On one
  argument, their last response sits unanswered by
  the opponent. On another, the opponent's response
  sits unanswered by them.`,
          text: "What are these two argument states, and why do they matter?",
          options: [
            "Both are 'tied' and irrelevant",
            "The first is WINNING (their response is unanswered) and the second is LOSING (your response is unanswered); reading these states tells you where you're ahead and behind so you can allocate time",
            "Both mean the round is over",
            "They indicate the judge is biased",
          ],
          correctIndex: 1,
          explanation: "The first argument is one you're winning — your last response stands unanswered, so on that point you're ahead. The second you're losing — the opponent's response is unanswered by you. Reading each argument's state (winning, losing, contested, dropped) across your flow gives you a live map of where you're ahead and behind, which is the essential input for deciding how to spend your limited speech time. Without that read, you fight half-blind.",
        },
        {
          id: "debate-5-01-q2",
          type: "Time Allocation",
          challenge: `  A debater spends most of their rebuttal piling on
  more responses to an argument they had ALREADY won
  (the opponent dropped their response), while barely
  addressing the contested argument that will decide
  the round.`,
          text: "What's the strategic error?",
          options: [
            "No error — reinforce winners as much as possible",
            "Misallocated time — they over-invested in an already-won argument and under-invested in the decisive contested one; extend winners briefly and pour time into the battles that actually decide the ballot",
            "They should have conceded everything",
            "They spoke too quietly",
          ],
          correctIndex: 1,
          explanation: "Time is the scarcest resource in a round, and this debater misallocated it: lavishing a rebuttal on an argument already won (the opponent dropped their response) while neglecting the contested argument that decides the ballot. The flow tells you an already-won argument needs only a brief extension, freeing time for the decisive clash. Reading the battlefield means committing your speech time where the round is actually decided — not re-winning settled points.",
        },
        {
          id: "debate-5-01-q3",
          type: "Reading the Board",
          challenge: `  After the opponent's speech, a strong debater pauses
  for a moment and scans their entire flow before
  beginning their own speech.`,
          text: "Why is this scan valuable?",
          options: [
            "It wastes time and should be skipped",
            "It reads the current state of every argument — what was answered, what was dropped, where the clash deepened — which tells the debater how to allocate their speech and what to prioritize",
            "It's only to look confident",
            "Scanning the flow has no strategic value",
          ],
          correctIndex: 1,
          explanation: "The scan is a deliberate battlefield read: before speaking, the debater updates the state of every argument — what the opponent answered, what they dropped, where the clash deepened, what's now uncontested. This read is the input to every strategic choice in the upcoming speech: what to extend, what to answer, what to collapse to, what to weigh, and where to spend time. A moment spent reading the board prevents minutes of misallocated speaking. The flow is a decision tool, not just a record.",
        },
        {
          id: "debate-5-01-q4",
          type: "Sun Tzu",
          challenge: `  A coach quotes Sun Tzu: 'If you know the enemy and
  know yourself, you need not fear the result of a
  hundred battles,' and says this is what a flow
  gives a debater.`,
          text: "How does the flow embody this principle?",
          options: [
            "It doesn't — debate has nothing to do with strategy",
            "The flow shows the true disposition of every argument — your unanswered responses (your strength), theirs (their strength), the deep clash, and the drops — giving the situational awareness Sun Tzu says wins battles",
            "It only records who spoke louder",
            "It predicts the judge's mood",
          ],
          correctIndex: 1,
          explanation: "Sun Tzu's principle is that victory begins with accurate situational awareness — knowing the true disposition of forces. The flow provides exactly that for a round: it shows which of your responses stand unanswered (your strength), which of the opponent's do (their strength), where the deep clash is, and what's been dropped. A debater who reads the flow accurately 'knows the enemy and knows themselves' and commits their speech time to the engagements that decide the round. The round is won first in the seeing.",
        },
      ],
    },
  },

  // ─── debate-5-02: Advanced Refutation ─────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Fencing Salle",
      location: "Europe",
      era: "Modern",
      emoji: "🤺",
    },
    id: "debate-5-02",
    order: 2,
    title: "Layered Refutation",
    subtitle: "Answering an argument on multiple independent levels at once",
    category: "arts",
    xp: 88,
    badge: { id: "debate-5-badge-02", name: "The Duelist", emoji: "🤺" },
    challengeType: "quiz",
    info: {
      tagline: "Don't stake everything on one response — answer an argument on several independent levels, so even if one answer fails, another still beats it.",
      year: 2024,
      overview: [
        "Basic refutation (epoch 1's four-step) answers an argument with one response; advanced refutation layers multiple independent responses, so the argument is beaten even if some answers fail. The classic structure is a cascade of 'even if' layers:\n- Deny the argument outright.\n- But even if it's true, deny that it links to the impact.\n- But even if it links, deny the impact matters.\n- But even if it matters, show you outweigh.\nEach layer is an independent reason you win, so the opponent must win every layer — while you need only win one.",
        "This layering exploits a structural truth: most arguments have multiple points of failure (recall Toulmin from epoch 2 — claim, warrant, link, impact). Rather than attacking one and hoping, you attack several at once. 'Their disadvantage: first, the link is wrong — the plan doesn't trigger it (and here's evidence); second, even if it links, the impact is overstated and improbable; third, even if real, we outweigh it on magnitude and timeframe.' Now the opponent faces a much harder task: they can't just rebuild one response; they must win the link AND the impact AND the weighing, or they lose the argument. You've multiplied their burden while distributing your risk.",
        "Layered refutation must be disciplined, not scattershot:\n- Genuinely independent — each a separate reason you win.\n- Consistent — not contradicting each other (avoid the double-turn from epoch 1).\n- Ordered logically — from the most decisive ('this is just false') down through the 'even if' fallbacks.\n- Prioritized by strength — lead with your best layer, since the opponent and judge weight the first response most.\nDone well, a single response can be beaten by a single good rebuild, but three independent layers force the opponent to win three separate battles — and usually they can't.",
      ],
      technical: {
        title: "Building the 'Even If' Cascade",
        body: [
          "Construct layers along the argument's points of failure. For a typical impact-bearing argument: Layer 1 — deny the claim/link ('this isn't true / the plan doesn't cause this,' with evidence). Layer 2 — 'even if it links, the impact is small/improbable' (attack magnitude or probability). Layer 3 — 'even if the impact is real, we outweigh' (comparative weighing, epoch 4-07). Each layer is prefaced with 'even if [the prior layer fails],' making explicit that they are independent fallbacks. The opponent must defeat all of them; you survive on any one. This is the same robustness logic as 'even if' weighing, generalized to refutation.",
          "Keep the layers consistent and prioritized. Consistency: the layers must not contradict (don't say 'the plan doesn't cause X' and 'X is actually good that the plan causes' — that's a double-turn). Order: lead with the strongest, most decisive layer, because the first response carries the most weight with the judge and the opponent; relegate weaker fallbacks to later 'even if' positions. Don't over-layer trivial arguments — reserve deep layering for the arguments that matter, since each layer costs time. The art is matching the number and strength of layers to the importance of the argument: heavy, multi-layered refutation on the decisive clashes; a single clean response on the minor ones.",
        ],
        codeExample: {
          label: "Layered Refutation — The 'Even If' Cascade",
          code: `  BASIC refutation = ONE response (single point of failure).
  LAYERED refutation = several INDEPENDENT responses;
   opponent must win ALL; you survive on ANY ONE.

  THE "EVEN IF" CASCADE (vs an impact argument):
   LAYER 1  deny it: "this is false / no link" + evidence
   LAYER 2  "EVEN IF it links — impact is small/improbable"
   LAYER 3  "EVEN IF the impact is real — we OUTWEIGH"
            (magnitude / probability / timeframe)
   → 3 independent reasons you beat the argument.

  DISCIPLINE:
   ✓ layers genuinely INDEPENDENT (separate reasons)
   ✓ CONSISTENT — no contradictions (avoid double-turn)
   ✓ ORDERED strongest-first (judge weights it most)
   ✓ MATCH depth to importance — don't over-layer trivia

  multiplies the opponent's burden; distributes your risk.`,
        },
      },
      incident: {
        title: "Defense in Depth — The Fencer and the Fortress",
        when: "Timeless",
        where: "From fencing salles to fortress design",
        impact: "Master fencers and fortress engineers share one principle: never rely on a single defense. Layered, independent lines of defense mean that breaching one still leaves the attacker facing another — the exact logic of layered refutation.",
        body: [
          "A master fencer never relies on a single defensive action. Against an attack, they layer defenses: a parry to deflect the blade, but if the parry fails, a retreat to break distance, but if caught, a counter to make the exchange costly. Each defense is independent — the attacker must beat all of them to land the touch. The same principle built the great fortresses: concentric walls, moats, and bastions arranged so that breaching the outer line only brought the attacker against the next, and the next. Defense in depth means no single failure is fatal, because every line is backed by another.",
          "Layered refutation is defense in depth applied to argument. A debater who answers an opponent's argument with a single response stakes everything on that one parry — if the opponent rebuilds it, the argument lands. A debater who layers — deny it, but even if true no link, but even if it links we outweigh — forces the opponent to breach every line in succession, and surviving on any one defense beats the argument. The fencer's lesson and the engineer's lesson are identical: never depend on a single defense against a determined attacker. Build your refutation like a fortress — independent lines, each backing the last — so that even when one answer is breached, the argument still cannot get through.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Opponent's Argument", sub: "multiple points of failure", type: "attacker" },
          { label: "Layer Independent Answers", sub: "deny / no link / outweigh", type: "system" },
          { label: "Each a Separate Reason", sub: "'even if... even if...'", type: "victim" },
          { label: "Robust Refutation", sub: "win on any one layer", type: "result" },
        ],
      },
      timeline: [
        { year: -350, event: "Aristotle identifies the multiple parts of an argument that can fail" },
        { year: 1958, event: "Toulmin's model maps the points of failure to attack (claim/warrant/link/impact)" },
        { year: 1990, event: "'Even if' layered refutation becomes standard advanced practice", highlight: true },
        { year: 2005, event: "Layered responses formalized in policy and LD rebuttal strategy" },
        { year: 2015, event: "Independent, consistent layering taught as robust refutation" },
        { year: 2024, event: "Layered refutation anchors the advanced clash curriculum" },
      ],
      keyTakeaways: [
        "Layered refutation answers an argument with multiple independent responses, so it's beaten even if some answers fail",
        "Use the 'even if' cascade: deny it, but even if true no link, but even if it links we outweigh — each layer a separate reason you win",
        "The opponent must win every layer; you survive on any one — multiplying their burden while distributing your risk",
        "Keep layers independent, consistent (no double-turns), strongest-first, and matched in depth to the argument's importance",
      ],
      references: [
        { title: "NSDA: Advanced Refutation Techniques", url: "https://www.speechanddebate.org/" },
        { title: "Layered Responses and 'Even If' (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Toulmin's Model — Points of Failure (Purdue OWL)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/historical_perspectives_on_argumentation/toulmin_argument.html" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-02-q1",
          type: "Layering",
          challenge: `  Opponent runs a disadvantage. A debater responds:
  "First, the link is wrong — the plan doesn't
  trigger this, here's evidence. Second, even if it
  links, the impact is improbable. Third, even if
  it's real, we outweigh on magnitude."`,
          text: "Why is this layered refutation stronger than a single response?",
          options: [
            "It isn't — one strong response is always better",
            "Each layer is an independent reason to beat the argument, so the opponent must win all three (link, impact, weighing) while the debater survives on any one — multiplying the opponent's burden and distributing risk",
            "It only works if all three are identical",
            "Layering confuses the judge and should be avoided",
          ],
          correctIndex: 1,
          explanation: "Layered refutation provides three independent reasons the argument fails: no link, weak impact, and we outweigh. The opponent now must rebuild ALL three to win the argument, while the debater wins the argument by holding ANY one. A single response is a single point of failure — beat it and the argument lands. Layering is defense in depth: it multiplies the opponent's burden and distributes the debater's risk, making the refutation far more robust.",
        },
        {
          id: "debate-5-02-q2",
          type: "Consistency",
          challenge: `  A debater layers responses to an immigration
  disadvantage: "First, the plan doesn't increase
  immigration. Second, actually, increased
  immigration is GREAT and we want more of it."`,
          text: "What's wrong with these two layers?",
          options: [
            "Nothing — more layers is always better",
            "They contradict each other (a double-turn) — denying the link while celebrating the impact is inconsistent; layers must be independent AND consistent, not self-contradicting",
            "There are too few layers",
            "The layers are too strong",
          ],
          correctIndex: 1,
          explanation: "These layers contradict: layer 1 denies the plan increases immigration, while layer 2 celebrates increased immigration (implying you'd want the plan to cause it). That's a double-turn (epoch 1) — a sharp opponent exploits the contradiction. Layered refutation requires layers that are independent AND consistent. The fix is to pick one coherent line: either deny the link and the impact, or concede the link and impact-turn it — not both at once. Consistency is as important as independence.",
        },
        {
          id: "debate-5-02-q3",
          type: "Ordering Layers",
          challenge: `  A debater has three responses to an argument: a
  decisive one ('this is simply false, here's
  proof'), a moderate one, and a weak fallback. They
  lead with the weak fallback and bury the decisive
  response last.`,
          text: "How should the layers be ordered?",
          options: [
            "Weakest first, as they did",
            "Strongest/most decisive first, because the judge and opponent weight the first response most; lead with 'this is false' and relegate weaker 'even if' fallbacks to later positions",
            "In random order",
            "Only the weak fallback should be given",
          ],
          correctIndex: 1,
          explanation: "Layers should be ordered strongest-first. The first response carries the most weight with both the judge and the opponent, so you lead with your most decisive layer ('this is simply false, here's proof') and relegate weaker 'even if' fallbacks to later positions. Leading with a weak fallback wastes the prime position and risks the judge weighting your weakest answer most heavily. Prioritize by strength: best layer first, fallbacks after.",
        },
        {
          id: "debate-5-02-q4",
          type: "Matching Depth",
          challenge: `  A debater spends enormous time building a five-layer
  refutation against a trivial, throwaway argument
  the opponent barely made — and runs short on time
  for the decisive clash.`,
          text: "What principle did they violate?",
          options: [
            "None — always maximally layer every argument",
            "Match layering depth to argument importance — heavy multi-layer refutation belongs on decisive clashes; a trivial argument needs only a single clean response, since each layer costs time",
            "They should have used ten layers",
            "Trivial arguments deserve the most layers",
          ],
          correctIndex: 1,
          explanation: "Layering costs time, so its depth should match the argument's importance. Pouring five layers into a trivial throwaway argument while running short for the decisive clash is a misallocation (echoing epoch 5-01's time strategy). Reserve heavy, multi-layered refutation for the arguments that actually decide the round; answer minor arguments with a single clean response. The art is calibration: deep defense in depth where it matters, efficiency where it doesn't.",
        },
      ],
    },
  },

  // ─── debate-5-03: Turns ───────────────────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Judo Dojo",
      location: "Japan",
      era: "Modern",
      emoji: "🥋",
    },
    id: "debate-5-03",
    order: 3,
    title: "Turns — Stealing the Opponent's Offense",
    subtitle: "Link turns and impact turns that convert their argument into yours",
    category: "arts",
    xp: 90,
    badge: { id: "debate-5-badge-03", name: "The Reverser", emoji: "🥋" },
    challengeType: "quiz",
    info: {
      tagline: "The highest art of refutation isn't blocking an argument — it's turning it around so it becomes a reason you win.",
      year: 2024,
      overview: [
        "A turn (from epoch 1) is the most powerful refutation because it doesn't merely neutralize the opponent's argument — it converts it into offense for your side. There are two kinds:\n- Link turn — flips the causal direction: they say your plan causes a bad thing; you show it actually causes the opposite, or prevents the bad thing.\n- Impact turn — concedes the link but flips the value: they say your plan causes X and X is bad; you show X is actually good.\nEither way, an argument the opponent intended to hurt you now helps you — and if they drop the turn, it becomes conceded offense that can win you the round.",
        "Turns are devastating because of their asymmetry. A defensive response (no link, no impact) at best neutralizes an argument — makes it a wash. A turn, if won, gives you a net positive: you don't just stop their argument, you gain a reason to vote for you. And turns put the opponent in a bind: they spent a speech building this argument, and now their own work is being used against them; they must spend time defending against their own argument or concede the turn. A well-placed, well-evidenced turn can flip the momentum of a round, especially when the opponent invested heavily in the turned argument.",
        "Turns carry the risk earlier epochs flagged — the double-turn:\n- If you both link-turn and impact-turn the same argument ('the plan doesn't cause X' AND 'X is good'), you contradict yourself, implying you'd want the plan to cause the good thing you just denied it causes.\n- A sharp opponent then makes your contradiction prove their point.\nSo turns require discipline: pick one type per argument, keep the turn consistent with the rest of your case, and have the evidence to defend the flipped link or revalued impact. Used carefully, turns are the judo of debate — and the single highest-leverage refutation move available.",
      ],
      technical: {
        title: "Link Turns, Impact Turns, and Avoiding the Double-Turn",
        body: [
          "A link turn attacks the causal claim's direction: 'They say our plan increases government spending; actually it reduces total spending by preventing costlier future crises — here's the evidence.' Now the opponent's spending argument is a reason to vote for you (your plan cuts spending). An impact turn concedes the link but flips the evaluation: 'They say our plan increases immigration; concede it does — and increased immigration is good because it grows the economy and fills labor shortages.' Now their immigration argument is your advantage. Both convert their offense into yours; choose based on which is true and defensible for the specific argument.",
          "The cardinal rule: never both link-turn and impact-turn the same argument — that's a double-turn, and it's self-defeating. If you link-turn ('plan doesn't increase immigration') and impact-turn ('immigration is good') simultaneously, you've said you don't cause the good thing you're praising, and the opponent argues: 'By their own logic, immigration is good and their plan prevents it — so vote against their plan.' To avoid this, commit to one turn per argument and check it's consistent with your case. Also, extend your turns explicitly — a turn the opponent drops is conceded offense, so flag it ('they dropped our link turn — it now flows as an independent reason to vote for us') and weigh it. A defended, extended turn is often the cleanest path to victory.",
        ],
        codeExample: {
          label: "Turns — Convert Their Offense Into Yours",
          code: `  DEFENSIVE response → at best NEUTRALIZES (a wash).
  TURN → converts their argument into OFFENSE for YOU.
   (and a DROPPED turn = conceded offense → can win the round)

  LINK TURN  flip the causal direction:
   "Plan increases spending" → "Plan REDUCES total
    spending (prevents costlier crises)" + evidence

  IMPACT TURN  concede the link, flip the value:
   "Plan increases immigration, which is bad" →
   "Concede it does — and immigration is GOOD
    (grows economy, fills labor shortages)"

  ⚠ NEVER do BOTH on the same argument = DOUBLE-TURN
   link-turn ("no increase") + impact-turn ("increase is good")
   → contradicts; opponent uses it to prove their point.

  DISCIPLINE: one turn per argument · consistent with your
   case · have the evidence · EXTEND it (dropped turn = win).
  → the judo of debate: use their force against them.`,
        },
      },
      incident: {
        title: "Judo — Maximum Efficiency, Using the Opponent's Force",
        when: "1882",
        where: "Japan",
        impact: "Jigoro Kano founded judo on the principle of using an opponent's own force and momentum against them — the exact strategic insight behind the debate turn, where the opponent's own argument is redirected to defeat them.",
        body: [
          "In 1882, Jigoro Kano founded judo, distilling its philosophy into a principle: 'maximum efficiency, minimum effort' — and central to it, the idea of using the opponent's force against them. A smaller judoka does not meet a larger attacker's push with a stronger push; they redirect the attacker's own momentum, turning the force of the attack into the means of the throw. The opponent's strength becomes the instrument of their defeat. This is leverage in its purest form: not adding your own force, but redirecting theirs.",
          "The debate turn is judo applied to argument. The opponent builds an argument with effort and conviction, pushing it as offense against you. Rather than meeting it with an opposing push (a defensive 'no, that's wrong'), the turn redirects the argument's own force — showing it actually points the other way (link turn) or that its outcome is actually good (impact turn) — so the opponent's own work throws them. The asymmetry Kano prized appears here too: a defensive block merely stops the attack, but a turn uses the attack's momentum to gain ground, converting the opponent's offense into your own. And like a judo throw that depends on precise timing and commitment, a turn demands discipline — one technique cleanly executed, never two contradictory ones at once (the double-turn), which would unbalance you instead. Master the turn and you wield the highest leverage in debate: victory through the opponent's own force.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Opponent's Argument", sub: "intended as offense vs. you", type: "attacker" },
          { label: "Link or Impact Turn", sub: "flip direction or value", type: "system" },
          { label: "Their Offense Becomes Yours", sub: "a reason you win", type: "victim" },
          { label: "Extend and Weigh It", sub: "dropped turn = conceded offense", type: "result" },
        ],
      },
      timeline: [
        { year: 1882, event: "Jigoro Kano founds judo on using the opponent's force against them", highlight: true },
        { year: 1990, event: "Link turns and impact turns formalized in policy debate strategy" },
        { year: 2000, event: "The double-turn is identified as the key risk of turning" },
        { year: 2010, event: "Turns become central to high-level rebuttal offense" },
        { year: 2018, event: "Extending dropped turns taught as a primary path to victory" },
        { year: 2024, event: "Turns anchor the offensive refutation curriculum" },
      ],
      keyTakeaways: [
        "A turn converts the opponent's argument into offense for you — the highest-leverage refutation, beyond merely neutralizing",
        "A link turn flips the causal direction; an impact turn concedes the link but flips the value (the bad thing is actually good)",
        "Never do both on the same argument — that's a self-defeating double-turn the opponent uses to prove their point",
        "Extend turns explicitly — a dropped turn is conceded offense that can win the round — and weigh it like any impact",
      ],
      references: [
        { title: "NSDA: Turns in Debate (Link and Impact)", url: "https://www.speechanddebate.org/" },
        { title: "Avoiding the Double-Turn (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Judo and the Principle of Leverage (Kodokan)", url: "https://www.britannica.com/sports/judo" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-03-q1",
          type: "Turn vs Defense",
          challenge: `  Opponent: "Your plan will hurt the economy."

   Response A: "No it won't" (neutralize).
   Response B: "Actually our plan STRENGTHENS the
   economy, here's why" (with evidence).`,
          text: "Why is Response B (a turn) more powerful than Response A?",
          options: [
            "It isn't — neutralizing is always enough",
            "A defensive response at best makes the argument a wash; the turn converts the opponent's argument into a reason to vote FOR you, gaining offense rather than just stopping theirs",
            "Response B concedes the round",
            "Both responses are identical",
          ],
          correctIndex: 1,
          explanation: "Response A merely neutralizes — at best the economy argument becomes a wash. Response B is a turn: it converts the opponent's own argument into offense for your side (your plan strengthens the economy, which is now a reason to vote for you). That asymmetry is why turns are the highest-leverage refutation: you don't just stop their argument, you gain a reason to win — and if they drop the turn, it's conceded offense. Turns generate offense; defense only prevents it.",
        },
        {
          id: "debate-5-03-q2",
          type: "Link vs Impact Turn",
          challenge: `  Opponent: "Your plan increases tourism, and more
  tourism damages fragile ecosystems."

   Debater concedes tourism increases, but argues
   the increased tourism actually FUNDS conservation
   that protects those ecosystems.`,
          text: "What kind of turn is this?",
          options: [
            "A link turn — denying the plan increases tourism",
            "An impact turn — conceding the link (tourism increases) but flipping the value (the increase is good because it funds conservation)",
            "A double-turn",
            "A defensive no-link",
          ],
          correctIndex: 1,
          explanation: "This is an impact turn: the debater concedes the link (yes, the plan increases tourism) but flips the evaluation (the increased tourism is good, because it funds conservation that protects ecosystems). A link turn would instead deny the causal direction (e.g., 'our plan actually decreases tourism'). Here the link is granted and the impact's value is reversed — converting the opponent's 'tourism is bad' argument into your advantage. Choosing impact-turn vs. link-turn depends on which is true and defensible.",
        },
        {
          id: "debate-5-03-q3",
          type: "Double-Turn",
          challenge: `  Opponent: "Your plan raises interest rates, which
  hurts borrowers."

   Debater says BOTH: "Our plan does NOT raise interest
   rates" AND "Higher interest rates are actually good
   for the economy."`,
          text: "What mistake is this, and how does the opponent exploit it?",
          options: [
            "No mistake — two responses are safer",
            "A double-turn — link-turning ('no rate increase') and impact-turning ('rate increases are good') contradict; the opponent argues 'by their own logic, rate increases are good and their plan prevents them — so vote against the plan'",
            "It's a clean impact turn",
            "It's a strong layered refutation",
          ],
          correctIndex: 1,
          explanation: "This is a double-turn: link-turning (the plan doesn't raise rates) and impact-turning (rate increases are good) on the same argument contradict each other. The opponent pounces: 'By their own logic, higher rates are good — and their plan prevents them — so their plan is bad; vote against it.' The contradiction proves the opponent's point. The rule is one turn per argument: either deny the link or revalue the impact, never both. Doing both unbalances you, like attempting two contradictory throws at once.",
        },
        {
          id: "debate-5-03-q4",
          type: "Extending Turns",
          challenge: `  A debater makes a strong impact turn early in the
  round. The opponent never responds to it. In the
  final speech, the debater barely mentions it.`,
          text: "What should the debater do with the dropped turn?",
          options: [
            "Ignore it — turns don't matter once made",
            "Extend it explicitly and weigh it — a dropped turn is conceded offense, so flag 'they dropped our turn, it flows as an independent reason to vote for us' and weigh it as an impact",
            "Apologize for making it",
            "Convert it into a defensive response",
          ],
          correctIndex: 1,
          explanation: "A dropped turn is conceded offense — one of the most valuable things in a round — but only if you extend and weigh it. The debater should explicitly flag it ('they dropped our impact turn; it now flows uncontested as an independent reason to vote for us') and weigh it like any impact. Barely mentioning a winning, dropped turn wastes it; the judge needs to be told it's conceded offense and why it decides the round. Extending dropped turns is a primary path to victory.",
        },
      ],
    },
  },

  // ─── debate-5-04: Cross-Examination Strategy ──────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Trial Lawyer's Lectern",
      location: "Courtrooms, Everywhere",
      era: "Modern",
      emoji: "❓",
    },
    id: "debate-5-04",
    order: 4,
    title: "Cross-Examination Strategy",
    subtitle: "Setting traps, controlling the exchange, and harvesting concessions",
    category: "arts",
    xp: 88,
    badge: { id: "debate-5-badge-04", name: "The Interrogator", emoji: "❓" },
    challengeType: "quiz",
    info: {
      tagline: "Great cross-examination is a trap built one short question at a time — the opponent doesn't see where it's going until the door has already closed.",
      year: 2024,
      overview: [
        "Epoch 1 introduced cross-examination basics — narrow questions, set up your speech, stay composed. This stage is the strategy: how to design questioning that controls the opponent and extracts the concessions that win the round. The master technique is the funnel: a planned sequence of short, leading questions that each seem innocuous but together close off the opponent's escape routes, ending on a question where any honest answer hurts them. The opponent answers each small question without seeing the trap, until the final question reveals that they've conceded the point — a 'checkmate' built one move at a time.",
        "Strategic cross-ex has specific goals you plan in advance:\n- Extract a concession you'll use in your speech — a missing funding source, an admitted contradiction, an overstated piece of evidence.\n- Expose that a key term was never defined, or that two arguments conflict.\n- Pin down the opponent's position so they can't shift it later.\nYou design the questions backward from the concession you want, short and leading ('Your evidence is from 2009, correct?' 'And internet usage has changed enormously since then, yes?') so the opponent has little room to maneuver.",
        "Control is the through-line, and you keep it by:\n- Asking, not arguing — don't deliver speeches as questions.\n- Keeping questions short and closed (yes/no or narrow), denying room to filibuster.\n- Cutting off non-responsive rambling politely but firmly ('I appreciate that, but my question was…').\n- Never asking a question whose answer you can't predict or handle.\nWhen answering cross-ex, resist the funnel — give honest but minimal answers, decline framings you reject, and don't volunteer material. The concessions cross-ex harvests, deployed in your next speech, often decide the round.",
      ],
      technical: {
        title: "Designing the Funnel and Maintaining Control",
        body: [
          "Design questions backward from the concession. Decide what admission you want ('they have no funding source'), then build a short chain of unavoidable questions leading there: establish a premise they must grant ('Your plan costs money, yes?'), narrow ('Where does the funding come from?'), and close ('So no specific funding source was identified, correct?'). Each question is short and leading, predictable in its answer, and the sequence boxes them in. Critically, don't argue the conclusion during cross-ex — bank the concession and deploy it in your speech ('In cross-ex, they admitted no funding source — which means their plan can't be enacted').",
          "Maintain control throughout. Ask questions, don't make speeches; keep them closed and short to deny filibustering; and politely cut off non-responsive answers ('That's helpful, but my question was whether...'). Never ask an open question that hands the opponent free speaking time, and never ask a question whose answer could blow up on you — only ask what you can predict and use. When you are the one answering, flip the strategy: give honest but minimal answers, refuse to accept loaded framings ('I wouldn't characterize it that way — what's true is...'), don't volunteer extra material, and stay composed so the questioner can't rattle you into a concession. The exchange is a contest of control: the questioner tries to funnel; the answerer tries to resist without dodging.",
        ],
        codeExample: {
          label: "Cross-Ex Strategy — The Funnel and Control",
          code: `  DESIGN BACKWARD from the concession you want:
   GOAL: "they admit no funding source"
   Q1 (premise they must grant): "Plan costs money, yes?"
   Q2 (narrow):                  "Where's the funding from?"
   Q3 (close the trap):          "So no source was given —
                                  correct?"
   → bank it; deploy in your SPEECH (don't argue it in CX)

  MAINTAIN CONTROL (as questioner):
   ✓ ASK, don't make speeches
   ✓ short, CLOSED, leading questions (no filibuster room)
   ✓ cut off rambling politely: "helpful, but my question
     was..."
   ✗ never ask an OPEN question (free speech time for them)
   ✗ never ask one whose answer you can't predict/handle

  WHEN ANSWERING (resist the funnel):
   honest but MINIMAL · reject loaded framings · don't
   volunteer · stay composed (don't get rattled into a
   concession)

  CX rarely wins alone — its CONCESSIONS, used next speech, do.`,
        },
      },
      incident: {
        title: "The Cross-Examiner's Art — Never Ask a Question You Don't Know the Answer To",
        when: "Modern trial advocacy",
        where: "The courtroom",
        impact: "Trial lawyers refined cross-examination into a precise science of control — short leading questions, planned sequences, never a question without a known answer — and competitive debate inherited the method whole.",
        body: [
          "Trial advocacy distilled cross-examination into a set of hard-won rules that competitive debaters use directly. The most famous: never ask a witness a question you don't already know the answer to — because an unpredictable answer can destroy your case. Others: ask leading questions that suggest their own answer, so the witness merely confirms; keep questions short and closed to maintain control; build toward your point one small admission at a time rather than asking the witness to agree with your conclusion (which they'll refuse); and stop when you've gotten the concession, before the witness can explain it away. These rules exist because the courtroom taught, through countless cases won and lost, exactly how questioning controls — or loses control of — a hostile witness.",
          "Competitive debate inherited this art wholesale, because the strategic situation is identical: you are questioning an adversary who will not volunteer anything helpful, in front of a decision-maker, with the goal of extracting admissions you'll use in argument. The funnel of short leading questions, the discipline of never asking what you can't predict, the planned sequence ending in a concession, the refusal to argue during the questioning — all of it transfers directly from the trial lawyer's lectern to the debate round. And the answerer's defense is the same skill a well-prepared witness uses: honest, minimal answers; refusing loaded framings; composure under pressure. Cross-examination is the one part of debate that is, almost literally, courtroom advocacy — which is why mastering it is both a competitive edge and a genuine professional skill.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Plan the Concession", sub: "what must they admit?", type: "attacker" },
          { label: "Build the Funnel", sub: "short leading questions", type: "system" },
          { label: "Close the Trap", sub: "any honest answer hurts them", type: "victim" },
          { label: "Harvest in Your Speech", sub: "'in cross-ex they admitted...'", type: "result" },
        ],
      },
      timeline: [
        { year: 1730, event: "Cross-examination matures as control of hostile witnesses in common-law courts" },
        { year: 1904, event: "Wigmore calls cross-examination the greatest engine for discovering truth" },
        { year: 1990, event: "Funnel questioning and 'know the answer' rules formalized in debate", highlight: true },
        { year: 2005, event: "Crossfire strategy develops in Public Forum" },
        { year: 2015, event: "Concession-harvesting taught as the core purpose of cross-ex" },
        { year: 2024, event: "Cross-examination strategy anchors the clash skill set" },
      ],
      keyTakeaways: [
        "Strategic cross-ex uses a funnel — a planned sequence of short leading questions that close off escape routes and end in a concession",
        "Design questions backward from the concession you want, and bank it for your speech rather than arguing it during cross-ex",
        "Maintain control: ask (don't speechify), keep questions short and closed, cut off rambling, and never ask what you can't predict",
        "When answering, resist the funnel — honest but minimal answers, reject loaded framings, don't volunteer, and stay composed",
      ],
      references: [
        { title: "NSDA: Cross-Examination Strategy", url: "https://www.speechanddebate.org/" },
        { title: "Cross-Examination (Britannica)", url: "https://www.britannica.com/topic/cross-examination" },
        { title: "Crossfire and Questioning Guide (NSDA Resources)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-04-q1",
          type: "The Funnel",
          challenge: `  A debater wants the opponent to admit their plan
  has no enforcement mechanism. They ask: "What do
  you think about enforcement generally?"

  The opponent gives a long speech praising their
  plan's enforceability.`,
          text: "What went wrong, and what funnel question would have worked?",
          options: [
            "Nothing — open questions are best",
            "The open question handed the opponent free speaking time; a funnel of short leading questions ('Your plan requires compliance, yes? What body enforces it? So no enforcement body was named, correct?') would have boxed them in",
            "The debater should have argued instead of asking",
            "Enforcement can't be questioned",
          ],
          correctIndex: 1,
          explanation: "The open question ('what do you think about enforcement?') gave the opponent free time to praise their plan — the opposite of the goal. Strategic cross-ex uses a funnel of short, leading, closed questions that the opponent must answer narrowly: 'Your plan requires compliance, yes? Which body enforces it? So no enforcement body was specified, correct?' Each question closes an escape route until any honest answer concedes the point. Open questions surrender control; the funnel keeps it.",
        },
        {
          id: "debate-5-04-q2",
          type: "Bank the Concession",
          challenge: `  During cross-ex, a debater successfully gets the
  opponent to admit a contradiction. The debater then
  spends the rest of cross-ex loudly arguing why this
  admission destroys the opponent's whole case.`,
          text: "What's the better use of the admission?",
          options: [
            "Argue it as loudly as possible during cross-ex",
            "Bank it and deploy it in the next speech ('In cross-ex they admitted X, which means...') — cross-ex is for extracting concessions, not arguing them; arguing during cross-ex wastes time and gives them a chance to walk it back",
            "Forget the admission immediately",
            "Apologize for the question",
          ],
          correctIndex: 1,
          explanation: "Cross-ex is for extracting concessions, not arguing them. Once the opponent admits the contradiction, the debater should bank it and deploy it in their next speech ('In cross-ex they admitted X, which means their case is incoherent'). Arguing it loudly during cross-ex wastes the questioning time and, worse, gives the opponent the chance to explain or walk back the admission. Get the concession, stop, and use it where it counts — in your speech, where they can't immediately respond.",
        },
        {
          id: "debate-5-04-q3",
          type: "Never Ask Blind",
          challenge: `  A debater asks the opponent a question in cross-ex
  without any idea how they'll answer — hoping to
  catch them off guard. The opponent gives a strong
  answer that actually strengthens their case.`,
          text: "What rule did the debater violate?",
          options: [
            "None — surprise questions are best",
            "Never ask a question whose answer you can't predict or handle — an unpredictable answer can strengthen the opponent's case or blow up on you; only ask what you can foresee and use",
            "They should have asked it louder",
            "Cross-ex questions must always be surprises",
          ],
          correctIndex: 1,
          explanation: "The debater violated the trial-advocacy rule debate inherited: never ask a question whose answer you can't predict or handle. An unpredictable question is a gamble that can backfire — here, it handed the opponent a chance to strengthen their case. Strategic cross-ex only asks questions where you can foresee the answer and use it (ideally ones where any honest answer helps you). Fishing blindly surrenders control and risks improving the opponent's position.",
        },
        {
          id: "debate-5-04-q4",
          type: "Answering Cross-Ex",
          challenge: `  A debater is being cross-examined. The questioner
  asks a leading question loaded with a framing the
  debater rejects: "So you admit your plan is
  reckless and unfunded, right?"`,
          text: "How should the debater answer?",
          options: [
            "Accept the framing to seem agreeable",
            "Reject the loaded framing honestly but firmly without dodging: 'I wouldn't characterize it that way — our plan is funded through X and includes safeguards Y' — give a minimal accurate answer, don't accept the trap's premise",
            "Refuse to answer at all",
            "Give a long rambling speech volunteering extra detail",
          ],
          correctIndex: 1,
          explanation: "When answering, you resist the funnel without dodging. The question smuggles in a framing ('reckless and unfunded') the debater rejects, so the right move is to decline that framing honestly and concisely: 'I wouldn't characterize it that way — it's funded through X and includes safeguard Y.' This neither accepts the loaded premise nor evades the question (judges punish dodging). Keep the answer minimal — don't volunteer extra material the questioner can exploit — and stay composed so you're not rattled into the concession they're fishing for.",
        },
      ],
    },
  },

  // ─── debate-5-05: Extending Arguments ─────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Relay Baton",
      location: "The Track",
      era: "Modern",
      emoji: "🏃",
    },
    id: "debate-5-05",
    order: 5,
    title: "Extending Arguments",
    subtitle: "Carrying your winning arguments forward through every speech",
    category: "arts",
    xp: 86,
    badge: { id: "debate-5-badge-05", name: "The Extender", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "An argument you made once and never mention again can fade from the round — you have to carry it forward, speech by speech, or it dies on the flow.",
      year: 2024,
      overview: [
        "Extending an argument means carrying it forward through the round — re-explaining and re-emphasizing it in each successive speech so it stays alive and weighed. A common novice misconception is that once you've made an argument, it's permanently 'in the round.' In practice, arguments that aren't extended can fade: the judge may stop weighing an argument you made in your first speech but never mentioned again, especially if the opponent responded to it and you didn't carry it through. To win on an argument, you generally must extend it from your constructive through your rebuttals to your final speech.",
        "A proper extension does three things:\n- References the original argument, so the judge connects it on the flow.\n- Answers any responses the opponent made — you can't repeat the argument as if uncontested; you must extend through their response.\n- Re-impacts — reminds the judge why it matters and how it's weighed.\n'Extend our second contention on economic growth — they said growth hurts the environment, but [answer], so it stands, and it outweighs because [weighing].' A bare repetition isn't an extension.",
        "Extension is selective, not universal — you can't extend everything in limited time:\n- Extend your strongest contentions.\n- Extend your dropped turns (conceded offense).\n- Extend the arguments the round will be decided on.\n- Let go of arguments that are losing or irrelevant (the collapse from epoch 5-07).\nThe skill is a relay: each speech receives the argument from the last and carries it further, answering new responses and re-weighing, so by the final speech it arrives intact and weighed. An argument that completes this relay is one the judge can vote on; one dropped along the way fades.",
      ],
      technical: {
        title: "What a Real Extension Contains",
        body: [
          "A complete extension has three components. Reference: name the argument so the judge locates it on the flow ('extend our Contention 2 on economic growth'). Answer-through: address the opponent's responses to it — an extension over a contested argument must answer the response, not ignore it ('they said growth harms the environment; that's answered by our clean-energy evidence'). Re-impact: restate why it matters and how it weighs ('this outweighs because it affects more people and is happening now'). Skipping the answer-through is the common failure — repeating an argument the opponent already attacked, as if it were uncontested, doesn't extend it; you must carry it over their response.",
          "Extend selectively, guided by the flow. You don't have time to extend every argument, so use your battlefield read (epoch 5-01) to choose: extend your winning arguments, your dropped turns (conceded offense worth flagging and weighing), and the arguments the round turns on; release the losing or irrelevant ones. As the round progresses and you collapse (epoch 5-07), the set of extended arguments narrows toward your strongest few. The final speech extends only the handful of arguments you're winning the round on, each carried fully through the opponent's responses and weighed. Think of it as a relay where you must hand the baton cleanly each leg — an argument dropped between speeches is a baton dropped on the track: the race is effectively lost on that lane, no matter how strong the runner.",
        ],
        codeExample: {
          label: "Extending — Carry the Argument Forward",
          code: `  MYTH: "I made the argument once → it's in the round."
  REALITY: un-extended arguments FADE from the flow.
   → carry winners forward, speech by speech, to the end.

  A REAL EXTENSION = 3 PARTS (not bare repetition):
   1. REFERENCE   "extend our Contention 2 on growth"
                  (judge locates it on the flow)
   2. ANSWER-THROUGH  address their RESPONSE to it
                  "they said growth harms environment —
                   answered by our clean-energy evidence"
                  (← skipping this is the common failure)
   3. RE-IMPACT   "and it outweighs because... (weighing)"

  EXTEND SELECTIVELY (time is limited — use the flow read):
   ✓ your WINNING contentions
   ✓ DROPPED TURNS (conceded offense — flag + weigh)
   ✓ the arguments the round TURNS on
   ✗ release losing / irrelevant arguments (→ collapse)

  it's a RELAY: hand the baton cleanly each speech.
  drop it between speeches → that argument is lost.`,
        },
      },
      incident: {
        title: "The Relay — A Race Lost in the Handoff",
        when: "Modern athletics",
        where: "The track",
        impact: "In relay racing, the fastest team can lose by dropping the baton in a handoff — a vivid lesson that an argument, like a baton, must be carried cleanly from one speech to the next or the advantage is lost.",
        body: [
          "Relay racing is decided as much in the handoffs as in the running. A team of the fastest sprinters in the world will lose if they drop the baton during an exchange — the race is run not by individuals but by the baton, which must travel cleanly from hand to hand around the track. Olympic finals have been lost, and favored teams eliminated, by a single fumbled handoff. The lesson is stark: raw speed is wasted if the baton doesn't make it through every exchange. The object that must complete the journey is the baton, not any one runner.",
          "An argument in a debate round is the baton, and each speech is a leg of the relay. A brilliant argument made in the first speech is like a blazing first leg — but if it isn't handed cleanly to the next speech (extended, with the opponent's responses answered and the impact re-weighed), it's a baton dropped in the exchange, and the argument's advantage is lost no matter how strong it was when first run. To win on an argument, you must carry it through every handoff — constructive to rebuttal to final speech — answering responses and re-impacting each leg, so it arrives at the finish intact and weighed. The debaters who win are not always those with the single best argument, but those who carry their best arguments cleanly through every handoff to the end. Run fast, but above all, don't drop the baton.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Argument Made", sub: "in the constructive", type: "attacker" },
          { label: "Extend Each Speech", sub: "reference, answer-through, re-impact", type: "system" },
          { label: "Carry Over Responses", sub: "answer their attacks, weigh", type: "victim" },
          { label: "Arrives Intact", sub: "judge can vote on it", type: "result" },
        ],
      },
      timeline: [
        { year: 1958, event: "Toulmin's model clarifies what must be carried (claim, warrant, impact)" },
        { year: 1990, event: "Extension (reference + answer-through + re-impact) formalized in coaching", highlight: true },
        { year: 2005, event: "Selective extension guided by the flow becomes standard rebuttal practice" },
        { year: 2015, event: "Extending dropped turns/arguments emphasized as conceded offense" },
        { year: 2020, event: "Final-speech extension narrowed to the decisive few arguments" },
        { year: 2024, event: "Extension anchors the through-the-round argument curriculum" },
      ],
      keyTakeaways: [
        "Extending means carrying an argument forward through each speech so it stays alive and weighed — un-extended arguments fade from the round",
        "A real extension references the argument, answers the opponent's responses to it (answer-through), and re-impacts it — not bare repetition",
        "Extend selectively: your winning contentions, dropped turns (conceded offense), and the decisive arguments — release the losing or irrelevant ones",
        "It's a relay: hand the argument cleanly between speeches; an argument dropped along the way is lost no matter how strong it began",
      ],
      references: [
        { title: "NSDA: Extending Arguments Through a Round", url: "https://www.speechanddebate.org/" },
        { title: "Extensions and the Flow (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Rebuttal Strategy Guide (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-05-q1",
          type: "Why Extend",
          challenge: `  A debater makes a strong argument in their first
  speech and assumes it's now permanently 'in the
  round,' so they never mention it again. The
  opponent responded to it; the debater didn't carry
  it through.`,
          text: "What's the risk of never extending it?",
          options: [
            "No risk — once made, an argument stays won",
            "Un-extended arguments fade from the round; because the opponent responded and the debater never answered through, the judge may stop weighing it — you must extend an argument to win on it",
            "The judge must weigh it regardless",
            "It automatically becomes a turn",
          ],
          correctIndex: 1,
          explanation: "Making an argument once doesn't keep it 'in the round' — arguments that aren't extended fade, especially when the opponent responded and you never answered through. The judge may stop weighing an argument left behind after the first speech. To win on an argument you must extend it: carry it forward, answer the opponent's responses, and re-impact it. An argument abandoned after one speech is a baton dropped in the relay.",
        },
        {
          id: "debate-5-05-q2",
          type: "Real Extension",
          challenge: `  In a rebuttal, a debater 'extends' their contention
  by simply repeating it word-for-word — ignoring
  that the opponent had made a specific response to
  it in the previous speech.`,
          text: "Why isn't this a proper extension?",
          options: [
            "It is proper — repetition is extension",
            "A real extension must answer through the opponent's response, not repeat the argument as if uncontested; it should reference it, answer the response, and re-impact",
            "Extensions should never reference the original argument",
            "Extensions must introduce brand-new arguments",
          ],
          correctIndex: 1,
          explanation: "Bare repetition isn't extension. Because the opponent responded, a proper extension must carry the argument over that response — referencing the argument, answering the opponent's response ('they said X; that's wrong because Y'), and re-impacting it. Repeating the contention as if it were uncontested ignores the clash and doesn't actually advance the argument on the flow. The answer-through step is exactly what's missing here, and it's the most commonly skipped part of a real extension.",
        },
        {
          id: "debate-5-05-q3",
          type: "Selective Extension",
          challenge: `  In the final speech, with little time left, a
  debater tries to extend all eight arguments from
  earlier in the round equally — and ends up
  developing none of them well.`,
          text: "What should they have done instead?",
          options: [
            "Extend even more arguments, faster",
            "Extend selectively — carry forward only the winning, decisive arguments (and dropped turns) fully, releasing the losing or irrelevant ones; time is limited, so concentrate on the few that decide the round",
            "Extend nothing at all",
            "Extend only the weakest arguments",
          ],
          correctIndex: 1,
          explanation: "You can't extend everything in limited time. Trying to carry all eight arguments equally develops none of them well. The fix is selective extension guided by the battlefield read (epoch 5-01): fully extend the handful of winning, decisive arguments (and any dropped turns worth weighing), and release the losing or irrelevant ones. By the final speech, the set of extended arguments should have narrowed to the few you're winning the round on — depth on the decisive arguments beats shallow coverage of all of them.",
        },
        {
          id: "debate-5-05-q4",
          type: "The Relay",
          challenge: `  A coach compares an argument to a relay baton that
  must be handed cleanly from speech to speech, and
  warns that 'the fastest team loses if they drop the
  baton in the handoff.'`,
          text: "What does this analogy teach about extension?",
          options: [
            "The best single argument always wins regardless of handling",
            "An argument, like a baton, must be carried cleanly through every speech (handoff); a strong argument dropped between speeches is lost, so winning means extending your best arguments all the way to the finish",
            "Speed is the only thing that matters",
            "Arguments should be dropped on purpose",
          ],
          correctIndex: 1,
          explanation: "The relay analogy teaches that an argument is the baton, and each speech is a leg requiring a clean handoff (extension). Just as the fastest team loses by dropping the baton, a debater with the best argument loses on that argument if they drop it between speeches by failing to extend it — answer through, re-impact, carry it forward. Winning means carrying your strongest arguments cleanly through every handoff to the final speech, where they arrive intact and weighed.",
        },
      ],
    },
  },

  // ─── debate-5-06: Frontlining ─────────────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Castle Rampart",
      location: "Fortifications, Everywhere",
      era: "Medieval",
      emoji: "🛡️",
    },
    id: "debate-5-06",
    order: 6,
    title: "Frontlining — Defending Your Case",
    subtitle: "Answering the answers to your arguments before they sink your case",
    category: "arts",
    xp: 86,
    badge: { id: "debate-5-badge-06", name: "The Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "When the opponent attacks your case, you don't just repeat it louder — you answer their attacks point by point. That's frontlining.",
      year: 2024,
      overview: [
        "Frontlining (also 'answering the answers' or 'extending through responses') is defending your own arguments against the opponent's attacks:\n- When you make a contention and the opponent responds, frontlining answers those responses so your contention survives and is extended.\n- It's the defensive half of the clash, complementing the offensive refutation of the opponent's case.\nA debater who builds a strong case but can't frontline watches their own arguments get dismantled — the case was only as good as its ability to withstand the attacks the opponent was always going to make.",
        "Good frontlining is specific and pre-prepared. Because topic analysis and red-teaming (epoch 4) revealed the attacks your case would face, you should have blocks (epoch 4-08) ready — pre-written answers to the predictable responses to each contention. When the opponent makes the expected attack, you frontline with your prepared answer: 'They responded that our economic growth contention ignores inequality; first, growth has historically reduced absolute poverty even when inequality rises; second, our plan includes redistributive mechanisms; so the contention stands.' The frontline answers the specific response, with evidence, and then re-extends and re-impacts the contention.",
        "Frontlining must answer the actual response, not a strawman, and be layered for the responses that matter (epoch 5-02). The common failures:\n- Ignoring the opponent's response and just repeating your contention — it loses, because the response stands unanswered.\n- Answering a weaker version of their response than they actually made.\n- Frontlining everything shallowly instead of concentrating on the attacks that threaten your winning arguments.\nStrong frontlining is selective and deep — pour defensive effort into the contentions you're winning on, answer the actual responses with specific evidence, and carry the contention through intact. Offense wins rounds, but a debater who can't frontline has no case left to win with.",
      ],
      technical: {
        title: "Frontlining a Response With Prepared Answers",
        body: [
          "A frontline answers a specific opponent response and re-secures the contention. Structure: name the response ('they said our growth contention ignores inequality'), answer it with one or more specific responses and evidence ('first, growth reduces absolute poverty even as inequality rises — evidence; second, our plan redistributes'), then re-extend and re-impact the contention ('so the contention stands and outweighs because…'). This is the defensive mirror of the four-step refutation: you're refuting their refutation of your argument. Have these prepared as blocks for the predictable attacks your case-construction red-teaming identified.",
          "Be specific, layered, and selective. Specific: answer the response they actually made, not a convenient weaker version — a frontline that addresses a strawman of their attack leaves the real attack standing. Layered: for responses that genuinely threaten a winning contention, give multiple independent answers (epoch 5-02) so the contention survives even if one frontline fails. Selective: concentrate frontlining on the contentions you're winning the round on; don't spend equal defensive effort on a contention you've decided to collapse away from. The integration of these epochs is the point — you frontline (defend) your winners while refuting and turning (attack) the opponent's case, and the flow read (epoch 5-01) tells you where to spend the defensive effort.",
        ],
        codeExample: {
          label: "Frontlining — Answer the Answers to Your Case",
          code: `  OFFENSE = refute THEIR case. DEFENSE = FRONTLINE YOURS.
   (a strong case is only as good as your ability to
    defend it against the attacks it was always going to face)

  A FRONTLINE = defensive mirror of four-step refutation:
   1. NAME their response  "they said growth ignores inequality"
   2. ANSWER it (specific + evidence)
       "1: growth cuts absolute poverty even as inequality
        rises [ev]; 2: our plan redistributes"
   3. RE-EXTEND + RE-IMPACT
       "so the contention stands and outweighs because..."

  ⚠ FAILURES:
   ✗ ignore their response, just repeat the contention
     (the response stands unanswered → you lose it)
   ✗ answer a STRAWMAN of their response (real attack stands)
   ✗ frontline everything shallowly

  DO: SPECIFIC (their actual response) · LAYERED (winners) ·
   SELECTIVE (defend what you're collapsing TO).
  PREP: have BLOCKS ready for predictable attacks (ep. 4-08).`,
        },
      },
      incident: {
        title: "The Rampart — A Castle Is Only as Strong as Its Defense",
        when: "Medieval era",
        where: "Castles and fortifications across the world",
        impact: "Medieval castles were engineered not just to look imposing but to be defended — every wall, gate, and tower designed to answer a specific method of attack — teaching that a position is only as strong as its prepared response to assault.",
        body: [
          "A medieval castle was a machine for defense. Its builders didn't merely raise tall walls; they engineered specific answers to specific attacks: ramparts and battlements to repel scaling, murder-holes and gatehouses to answer assaults on the entrance, towers positioned to cover every approach with crossfire, moats to defeat siege engines and tunneling. Every feature was a prepared response to a known method of attack. A castle that was tall and grand but had no answer to the besieger's tactics would fall; the castles that endured were those whose defenders had anticipated each assault and built — and manned — the answer to it.",
          "Frontlining is the defense of your case the way a castle is defended: not by building an impressive wall and hoping, but by having a prepared answer ready for each attack the opponent will mount. Your case-construction red-teaming told you where the assaults would come — the inequality attack on your growth contention, the solvency attack on your plan — and frontlining is manning those ramparts with prepared answers when the assault arrives. A debater who builds a grand case but cannot frontline is a defender standing on a tall but undefended wall, watching the opponent's responses breach it point by point. The lesson the castle teaches is the lesson of the clash: a position is only as strong as your prepared, specific answer to the attack against it. Build the case, but man the ramparts — answer the answers, and your case stands.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Your Contention", sub: "the opponent attacks it", type: "attacker" },
          { label: "Name Their Response", sub: "their actual attack", type: "system" },
          { label: "Answer With Evidence", sub: "specific, layered for winners", type: "victim" },
          { label: "Contention Stands", sub: "re-extended and re-impacted", type: "result" },
        ],
      },
      timeline: [
        { year: 1958, event: "Toulmin's rebuttal element formalizes anticipating attacks on a claim" },
        { year: 1990, event: "Frontlining ('answering the answers') becomes standard defensive practice", highlight: true },
        { year: 2008, event: "Pre-written frontline blocks become a core preparation tool" },
        { year: 2015, event: "Selective, layered frontlining taught for defending winning arguments" },
        { year: 2020, event: "Frontlining integrated with flow-reading and collapse strategy" },
        { year: 2024, event: "Frontlining anchors the defensive clash curriculum" },
      ],
      keyTakeaways: [
        "Frontlining is defending your own arguments by answering the opponent's responses to them — the defensive half of the clash",
        "A frontline names the opponent's response, answers it with specific evidence, then re-extends and re-impacts the contention",
        "Prepare frontlines as blocks for the predictable attacks your topic analysis and red-teaming identified",
        "Be specific (answer their actual response), layered (for winning contentions), and selective (defend what you're collapsing to)",
      ],
      references: [
        { title: "NSDA: Frontlining and Defending Your Case", url: "https://www.speechanddebate.org/" },
        { title: "Answering Responses ('Frontlines') (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Defensive Rebuttal Strategy (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-06-q1",
          type: "What Is Frontlining",
          challenge: `  A debater builds a strong case, but when the
  opponent attacks each contention, the debater just
  repeats the contentions louder without addressing
  any of the specific responses.`,
          text: "What defensive skill are they failing to use?",
          options: [
            "Turning",
            "Frontlining — answering the opponent's responses to your own arguments; just repeating the contention leaves the attacks unanswered and the case gets dismantled",
            "Roadmapping",
            "Cross-examination",
          ],
          correctIndex: 1,
          explanation: "The missing skill is frontlining — answering the opponent's responses to your own arguments so your contentions survive. Repeating a contention louder ignores the specific attacks, which then stand unanswered, and the case is dismantled point by point. Frontlining names each response, answers it with evidence, and re-extends the contention. A strong case is only as good as your ability to defend it against the attacks it was always going to face.",
        },
        {
          id: "debate-5-06-q2",
          type: "Frontline Structure",
          challenge: `  Opponent attacks: 'Your growth contention ignores
  rising inequality.' The debater wants to defend the
  contention properly.`,
          text: "What should a proper frontline contain?",
          options: [
            "Just restating 'growth is good' with no reference to the attack",
            "Name their response (the inequality attack), answer it specifically with evidence (e.g., growth cuts absolute poverty even as inequality rises; the plan redistributes), then re-extend and re-impact the contention",
            "A brand-new unrelated contention",
            "An apology for the contention",
          ],
          correctIndex: 1,
          explanation: "A proper frontline is the defensive mirror of four-step refutation: name the opponent's actual response (the inequality attack), answer it with specific responses and evidence (growth reduces absolute poverty even as inequality rises; the plan includes redistribution), then re-extend and re-impact the contention ('so it stands and outweighs because…'). Simply restating 'growth is good' ignores the attack, and a new unrelated contention abandons the one under fire. The frontline must engage and defeat the specific response.",
        },
        {
          id: "debate-5-06-q3",
          type: "Answer the Real Response",
          challenge: `  The opponent's actual response is a sophisticated
  point about enforcement costs. The debater frontlines
  by answering a much simpler, weaker version of the
  attack that the opponent never actually made.`,
          text: "What's the problem with this frontline?",
          options: [
            "Nothing — answering any version is fine",
            "It answers a strawman of the response, leaving the opponent's actual (stronger) attack standing; a frontline must answer the response the opponent actually made",
            "It's too specific",
            "Frontlines should always answer weaker versions",
          ],
          correctIndex: 1,
          explanation: "Frontlining a strawman — answering a weaker version of the attack than the opponent actually made — leaves their real, stronger response standing, so the contention is still in trouble. This is the defensive equivalent of the straw man fallacy. A frontline must engage the opponent's actual response (the sophisticated enforcement-cost point), not a convenient simpler one. Otherwise the judge sees the real attack went unanswered, and the contention falls despite the 'frontline.'",
        },
        {
          id: "debate-5-06-q4",
          type: "Selective Defense",
          challenge: `  With limited time, a debater spreads equal
  frontlining effort across every contention —
  including ones they've decided to abandon — and
  under-defends the two contentions they're actually
  winning the round on.`,
          text: "What's the better defensive allocation?",
          options: [
            "Defend every contention equally regardless of importance",
            "Frontline selectively — concentrate defensive effort (and layered answers) on the contentions you're winning the round on; don't spend equal effort defending contentions you're collapsing away from",
            "Stop frontlining entirely",
            "Defend only the contentions you're abandoning",
          ],
          correctIndex: 1,
          explanation: "Frontlining should be selective, guided by the flow read and your collapse strategy. Spreading equal defensive effort across every contention — including ones you're abandoning — wastes time and under-defends the contentions you're actually winning on. Concentrate your frontlining (and layered answers for the threatening attacks) on the winning, decisive contentions you're collapsing toward, and let the abandoned ones go. Depth of defense where it matters beats shallow defense everywhere.",
        },
      ],
    },
  },

  // ─── debate-5-07: Collapsing ──────────────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Burning Glass",
      location: "Optics, Everywhere",
      era: "Timeless",
      emoji: "🔥",
    },
    id: "debate-5-07",
    order: 7,
    title: "Collapsing — Narrowing to Your Winners",
    subtitle: "Concentrating the round onto the arguments you're winning",
    category: "arts",
    xp: 88,
    badge: { id: "debate-5-badge-07", name: "The Focuser", emoji: "🔥" },
    challengeType: "quiz",
    info: {
      tagline: "You don't win by going for everything — you win by choosing your strongest ground and pouring the whole round into it.",
      year: 2024,
      overview: [
        "Collapsing is the strategic narrowing of a round — as it progresses, you stop trying to win every argument and concentrate on the few you're winning that decide it:\n- Early speeches are broad — multiple contentions, multiple responses.\n- Later speeches must narrow — there isn't time to extend and weigh everything, and trying means doing all of it shallowly.\nThe skilled debater collapses — choosing their strongest ground and pouring remaining time into developing, extending, and weighing it deeply, while letting weaker or less relevant arguments go.",
        "Collapsing is counterintuitive for novices, who fear that dropping any of their own arguments is conceding. But going for everything is usually a path to losing: a debater who extends six arguments shallowly in the final speech, none of them developed or weighed, gives the judge no clear reason to vote for them, while an opponent who collapsed to two arguments — deeply extended and clearly weighed — hands the judge a clean ballot story. You don't need to win every argument; you need to win the round, which means winning the few arguments that decide it, decisively. Releasing the rest isn't weakness — it's the concentration of force that wins.",
        "Collapse intelligently, using your flow read (epoch 5-01). Choose the arguments to collapse to based on:\n- Which you're winning — your responses stand, or the opponent dropped them.\n- Which are hardest for the opponent to recover.\n- Which weigh best.\nOften you collapse to a dropped turn (conceded offense) plus a winning contention, or to the single cleanest path to the ballot. Then spend the final speeches extending those few fully, frontlining the attacks on them, and weighing — 'here are the two reasons we win, and here's why they outweigh.' Collapsing is the discipline to choose your ground and commit, rather than dissipating your force across a front too wide to hold.",
      ],
      technical: {
        title: "Choosing What to Collapse To",
        body: [
          "Select your collapse arguments by three criteria. Winning: collapse to arguments you're actually ahead on — your responses stand unanswered, or the opponent dropped them (a dropped turn is ideal, being conceded offense). Recoverability: prefer arguments the opponent can't easily rebuild in their remaining speeches. Weighing: prefer arguments with impacts you can weigh favorably (large, probable, irreversible — epoch 4-07). Often the best collapse is one or two arguments that are winning, hard to recover, and weigh well — frequently a conceded turn plus a strong, well-defended contention. This becomes your path to the ballot.",
          "Execute the collapse across the late speeches. Explicitly narrow ('we're going to focus the round on two key issues'), then spend your time extending those few fully (epoch 5-05), frontlining the attacks on them (epoch 5-06), and weighing them against the opponent's entire case (epoch 4-07): 'even if they win everything else, we win because these two arguments outweigh.' Let the abandoned arguments go silently — you don't need to announce dropping them, just stop extending them. The final speech is the narrowest: it crystallizes onto the one or two arguments that win the round, fully developed and weighed. Collapsing is the burning glass of debate — taking the diffuse light of many arguments and focusing it to a single burning point that decides the round.",
        ],
        codeExample: {
          label: "Collapsing — Concentrate Force on Your Winners",
          code: `  EARLY speeches = BROAD (many contentions/responses).
  LATE speeches = NARROW → COLLAPSE to the few you're
   winning & that decide the round.

  WHY: extending 6 args shallowly = no clear ballot story.
   collapsing to 2 (deeply extended + weighed) = clean win.
   you don't need to win every arg — just win the ROUND.

  CHOOSE WHAT TO COLLAPSE TO (3 criteria):
   WINNING        your responses stand / they DROPPED it
                  (a dropped TURN = conceded offense = ideal)
   RECOVERABILITY hard for them to rebuild in time left
   WEIGHING       impacts you can weigh favorably

  EXECUTE (late speeches):
   • announce the narrow: "we focus on two key issues"
   • EXTEND them fully + FRONTLINE attacks on them
   • WEIGH vs their WHOLE case: "even if they win all
     else, these two outweigh"
   • let abandoned args go silently (just stop extending)

  the BURNING GLASS: focus many arguments → one burning point.`,
        },
      },
      incident: {
        title: "The Burning Glass — Diffuse Light, Focused to Fire",
        when: "Timeless",
        where: "From ancient optics to the schoolyard magnifying glass",
        impact: "A magnifying glass turns harmless, diffuse sunlight into a point hot enough to burn — a vivid demonstration that concentration, not quantity, creates decisive force, the exact principle behind collapsing a debate round.",
        body: [
          "Sunlight falling on a surface is warm but harmless — its energy spread across a wide area accomplishes nothing dramatic. Pass that same light through a burning glass, a simple lens, and it converges to a single point so concentrated it can scorch wood and start fire. The total energy hasn't changed; what changed is its concentration. Diffuse, it warms; focused, it burns. The lens performs no magic beyond gathering the light that was already there and bringing it to a single decisive point. Concentration, not quantity, is what creates the power to burn.",
          "Collapsing a debate round is the burning glass applied to argument. Across a round, a debater generates many arguments — diffuse light, each warming the judge a little but none decisive. The temptation, especially for novices, is to keep all of them going, spreading effort across the whole front. But spread across many arguments, the debater's limited time and the judge's limited attention accomplish nothing dramatic — six shallow extensions warm but don't burn. Collapsing focuses that same effort onto the one or two arguments that decide the round, extending and weighing them so deeply that they become a single burning point the judge cannot ignore. The total argumentative energy is the same; concentrated, it wins. This is why going for everything so often loses and collapsing so often wins: victory in the late round comes not from the quantity of arguments but from the concentration of force onto the ground where the round is actually decided. Be the burning glass — gather your strongest arguments to a single point, and burn.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Many Arguments", sub: "diffuse, none decisive", type: "attacker" },
          { label: "Read the Flow", sub: "what's winning, weighing, unrecoverable?", type: "system" },
          { label: "Collapse to a Few", sub: "extend + frontline + weigh deeply", type: "victim" },
          { label: "A Burning Point", sub: "clean reason to vote you", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Collapsing emerges as core late-round strategy in policy and LD", highlight: true },
        { year: 2005, event: "'Go for everything' identified as a common losing pattern" },
        { year: 2012, event: "Collapse-to-a-dropped-turn taught as a clean path to the ballot" },
        { year: 2018, event: "Final-speech crystallization onto 1–2 arguments becomes standard" },
        { year: 2020, event: "Collapsing integrated with flow-reading and weighing" },
        { year: 2024, event: "Collapsing anchors late-round strategy in the clash curriculum" },
      ],
      keyTakeaways: [
        "Collapsing is narrowing the round to the few arguments you're winning and that decide it — early speeches broad, late speeches narrow",
        "Going for everything usually loses: six shallow extensions give no clear ballot story; two deeply extended, weighed arguments win",
        "Choose collapse arguments that you're winning, the opponent can't recover, and weigh favorably — often a dropped turn plus a strong contention",
        "Execute by extending the few fully, frontlining attacks on them, and weighing them against the opponent's whole case",
      ],
      references: [
        { title: "NSDA: Collapsing and Late-Round Strategy", url: "https://www.speechanddebate.org/" },
        { title: "Narrowing the Round (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Final Rebuttal Strategy Guide (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-07-q1",
          type: "Why Collapse",
          challenge: `  In the final speech, Debater A frantically extends
  all six of their arguments shallowly. Debater B
  focuses entirely on the two arguments they're
  winning, extending and weighing them deeply.`,
          text: "Why does Debater B's collapse usually win?",
          options: [
            "It doesn't — more arguments always wins",
            "B gives the judge a clear, deeply developed and weighed ballot story on the decisive arguments, while A's six shallow extensions develop nothing and give no clear reason to vote — you win the round by winning the few arguments that decide it",
            "B conceded the round",
            "A wins because quantity beats quality",
          ],
          correctIndex: 1,
          explanation: "Collapsing wins because you don't need to win every argument — you need to win the round, which means winning the few decisive arguments decisively. Debater B concentrates force on two winning arguments, extending and weighing them so the judge has a clear ballot story. Debater A spreads thin across six, developing none and giving the judge no clear reason to vote. Going for everything dissipates your limited time and the judge's attention; collapsing focuses them into a decisive point.",
        },
        {
          id: "debate-5-07-q2",
          type: "What to Collapse To",
          challenge: `  A debater is deciding which arguments to collapse
  to. One is a turn the opponent completely dropped;
  another is a contention they're narrowly winning but
  the opponent could rebuild; a third they're losing.`,
          text: "Which is the strongest argument to collapse to, and why?",
          options: [
            "The one they're losing — for the challenge",
            "The dropped turn — it's conceded offense (winning, unrecoverable since it's dropped, and weighable), making it the cleanest path to the ballot",
            "All three equally",
            "None — never collapse to a turn",
          ],
          correctIndex: 1,
          explanation: "The dropped turn is the strongest collapse argument: it scores on all three criteria — it's winning (conceded, since dropped), unrecoverable (the opponent already failed to answer it, and new responses to it late may be disallowed), and it's offense you can weigh. Collapsing to conceded offense is one of the cleanest paths to the ballot. The narrowly-won contention is riskier (the opponent can rebuild), and the losing argument should be released. Collapse to what's winning, unrecoverable, and weighs well.",
        },
        {
          id: "debate-5-07-q3",
          type: "Novice Fear",
          challenge: `  A novice refuses to collapse because they feel that
  not extending an argument they made earlier is the
  same as 'conceding' it and looks like weakness.`,
          text: "Why is this fear misguided?",
          options: [
            "It's correct — never drop your own arguments",
            "You don't need to win every argument to win the round; releasing weaker arguments to concentrate force on your winners is strategic strength, not weakness — going for everything usually means doing all of it shallowly and losing",
            "Collapsing always loses",
            "Extending everything is the only safe choice",
          ],
          correctIndex: 1,
          explanation: "The fear conflates winning arguments with winning the round. You don't need to win every argument — you need to win the round, which means winning the decisive few decisively. Releasing weaker or less relevant arguments to concentrate your limited time on the winners is the concentration of force that wins, not a weakness. Going for everything means developing nothing fully, which gives the judge no clear ballot story. Collapsing is strategic discipline: choose your ground and commit.",
        },
        {
          id: "debate-5-07-q4",
          type: "The Burning Glass",
          challenge: `  A coach holds up a magnifying glass and notes that
  diffuse sunlight is harmless, but focused to a point
  it can start a fire — 'and that,' they say, 'is
  collapsing.'`,
          text: "What does the burning-glass analogy teach?",
          options: [
            "More arguments generate more total energy and always win",
            "Concentration, not quantity, creates decisive force — the same argumentative effort spread across many arguments accomplishes little, but focused onto the one or two that decide the round, it 'burns'",
            "Sunlight is irrelevant to debate",
            "Arguments should always be kept diffuse",
          ],
          correctIndex: 1,
          explanation: "The burning glass teaches that concentration, not quantity, creates decisive force. The total energy (your argumentative effort) is the same whether diffuse or focused — but spread across many arguments it merely warms (six shallow extensions), while focused onto the one or two decisive arguments it burns (deeply extended and weighed, a clear reason to vote). Collapsing is gathering your strongest arguments to a single point the judge can't ignore. Victory in the late round comes from concentration of force, not breadth.",
        },
      ],
    },
  },

  // ─── debate-5-08: Strategic Concession ────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Chessboard",
      location: "Strategy, Everywhere",
      era: "Timeless",
      emoji: "♟️",
    },
    id: "debate-5-08",
    order: 8,
    title: "Strategic Concession",
    subtitle: "Granting arguments on purpose to win the ones that matter",
    category: "arts",
    xp: 88,
    badge: { id: "debate-5-badge-08", name: "The Sacrificer", emoji: "♟️" },
    challengeType: "quiz",
    info: {
      tagline: "Sometimes the strongest move is to grant the opponent an argument — because conceding what doesn't matter lets you win what does.",
      year: 2024,
      overview: [
        "Strategic concession is the deliberate granting of an opponent's argument — not because you can't answer it, but because conceding it is more useful than contesting it. It's the counterpart to collapsing: where collapsing narrows to your winning arguments, strategic concession releases the opponent's arguments that don't threaten your path to victory. Novices try to answer everything, which spreads them thin and signals they don't know what matters. Experienced debaters concede freely and purposefully, granting arguments that are true-but-irrelevant, that don't affect the weighing, or that — once conceded — actually help their case.",
        "There are several reasons to concede:\n- Irrelevance — if an argument doesn't bear on what will decide the round, contesting it wastes time ('we'll grant their point about X — it doesn't affect our winning argument about Y').\n- Weighing — concede an opponent's impact entirely and still win by outweighing it ('even granting their economic harm, ours is larger and irreversible').\n- Strategic use — conceding a premise that, combined with your argument, leads to your conclusion.\nConceding the right things is a scalpel that removes distractions and focuses the round on your winning ground.",
        "The discipline is knowing what's safe to concede:\n- Concede arguments that don't threaten your path to the ballot.\n- Never concede an argument that, if granted, loses you the round — one that turns your case, or that you need to win to access your impacts.\nThis requires the flow read (epoch 5-01) and weighing analysis (epoch 4-07): concede an impact only when you're confident you outweigh it; concede a contention only when it's not load-bearing. Done well, it frees your time and the judge's attention from arguments that don't matter — conceding what doesn't matter is how you win what does.",
      ],
      technical: {
        title: "What to Concede and What Never to Concede",
        body: [
          "Concede strategically in three situations. Irrelevance: an argument that doesn't bear on the decisive clash — grant it and reclaim the time ('we grant their point about implementation timing; it doesn't affect whether the policy is justified'). Outweighed impact: an opponent's impact you can beat on weighing — concede it fully and win by outweighing ('even granting their entire disadvantage, we outweigh on magnitude and probability'), which is more robust than contesting the link because it holds even if they win the argument. Set-up: a premise that, once granted, combines with your argument to reach your conclusion. In each case, you announce the concession deliberately and explain why it doesn't cost you the round.",
          "Never concede a load-bearing or case-turning argument. The danger is conceding something that, once granted, loses you the round: an argument that turns your case (concede it and you've conceded offense to the opponent), an argument you need to win to access your own impacts (concede it and your impacts disappear), or an impact you can't actually outweigh (concede it and you lose the weighing). Before conceding, ask: 'if I grant this, do I still win?' If yes, conceding frees resources; if no, you must contest it. This is why concession requires the flow and weighing analysis — you must know your path to the ballot well enough to know which arguments are dispensable and which are essential. Concede the dispensable freely; defend the essential to the end.",
        ],
        codeExample: {
          label: "Strategic Concession — Grant to Gain",
          code: `  CONCEDE = grant an opponent's argument ON PURPOSE,
   to free time/attention for the arguments that decide it.
   (counterpart to collapsing: release THEIR irrelevant args)

  WHEN TO CONCEDE:
   IRRELEVANCE   doesn't bear on the decisive clash
                 → "we grant X; it doesn't affect our win on Y"
   OUTWEIGHED    you beat their impact on weighing
                 → "even granting their whole DA, we outweigh"
                   (robust — holds even if they WIN the arg)
   SET-UP        granting a premise feeds YOUR conclusion

  NEVER CONCEDE (load-bearing / case-turning):
   ✗ an argument that TURNS your case (= conceding offense)
   ✗ one you need to ACCESS your own impacts
   ✗ an impact you can't actually outweigh

  THE TEST before conceding: "if I grant this, do I STILL win?"
   yes → concede, reclaim resources.   no → contest it.
   (requires the flow read + weighing analysis)

  bonus: gracefully granting true points builds CREDIBILITY.`,
        },
      },
      incident: {
        title: "The Sacrifice — Giving Up Material to Win the Game",
        when: "Timeless",
        where: "The chessboard",
        impact: "In chess, the sacrifice — deliberately giving up a piece to gain a decisive advantage — is among the most powerful moves, demonstrating that surrendering what doesn't matter to win what does is the height of strategy, not weakness.",
        body: [
          "In chess, one of the most beautiful and powerful ideas is the sacrifice: deliberately giving up a piece — even a valuable one — to gain a decisive advantage elsewhere. A novice clings to every pawn, afraid to lose any material, and is often outplayed by a master who gives up a knight or a rook to expose the enemy king or force checkmate. The sacrifice is not a loss; it's an investment. The master understands that the goal is not to keep the most pieces but to win the game, and that surrendering material that doesn't serve that goal to gain a position that does is the height of strategic understanding.",
          "Strategic concession is the debate sacrifice. The novice debater, like the novice chess player, tries to hold onto every argument, contesting points that don't matter out of a fear that conceding anything is losing. The experienced debater concedes freely and deliberately — granting the opponent's irrelevant arguments, conceding impacts they can outweigh, sacrificing material that doesn't serve the goal — to free their resources for the arguments that actually win the round. And just as a chess sacrifice must be calculated (a master never sacrifices a piece that's actually holding their position together), a debate concession must be calculated: you grant what's dispensable, never what's load-bearing. The shared lesson is profound and counterintuitive: the goal is not to win every exchange but to win the contest, and the willingness to give up what doesn't matter — purposefully, with the win in view — is the mark of a strategist, not a quitter. Conceding the pawn that doesn't matter is how you deliver the checkmate that does.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Opponent's Arguments", sub: "not all threaten your win", type: "attacker" },
          { label: "Test: Still Win If Granted?", sub: "flow + weighing analysis", type: "system" },
          { label: "Concede the Dispensable", sub: "irrelevant / outweighed", type: "victim" },
          { label: "Win What Matters", sub: "resources focused on winners", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Strategic concession formalized alongside collapsing in late-round strategy", highlight: true },
        { year: 2005, event: "'Even if' concession-and-outweigh taught as robust impact strategy" },
        { year: 2012, event: "Conceding-to-set-up recognized as an advanced offensive technique" },
        { year: 2018, event: "The 'do I still win if I grant this?' test standardizes" },
        { year: 2020, event: "Strategic concession integrated with weighing and the flow read" },
        { year: 2024, event: "Strategic concession anchors advanced round management" },
      ],
      keyTakeaways: [
        "Strategic concession deliberately grants opponent arguments that don't threaten your path to victory, freeing time for what matters",
        "Concede the irrelevant, concede impacts you can outweigh ('even granting it, we win'), and concede premises that set up your own argument",
        "Never concede a load-bearing argument — one that turns your case, that you need to access your impacts, or an impact you can't outweigh",
        "Before conceding, ask 'if I grant this, do I still win?' — yes means concede freely; no means contest it",
      ],
      references: [
        { title: "NSDA: Strategic Concessions", url: "https://www.speechanddebate.org/" },
        { title: "Conceding and Outweighing (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Round Management Strategy (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-08-q1",
          type: "Concede to Outweigh",
          challenge: `  The opponent has a real economic-harm impact the
  debater can't fully disprove — but the debater's
  own impact is clearly larger, more probable, and
  irreversible.`,
          text: "What's the strong strategic move?",
          options: [
            "Spend the round desperately trying to disprove the economic harm",
            "Concede the economic harm entirely and win by outweighing it ('even granting their full impact, ours is larger, more probable, and irreversible') — more robust than contesting a link you can't beat",
            "Ignore both impacts",
            "Concede the debater's own impact instead",
          ],
          correctIndex: 1,
          explanation: "When you can't disprove an opponent's impact but can outweigh it, the strong move is to concede it fully and win on weighing: 'even granting their entire economic harm, our impact is larger, more probable, and irreversible, so we win.' This is more robust than contesting a link you can't beat, because it holds even if they win their argument. Conceding to outweigh frees your time from a losing fight and concentrates the round on the weighing where you win.",
        },
        {
          id: "debate-5-08-q2",
          type: "Never Concede This",
          challenge: `  An opponent makes an argument that, if granted,
  actually TURNS the debater's case — it would become
  a reason to vote against them. The debater is
  tempted to concede it to save time.`,
          text: "Should they concede it?",
          options: [
            "Yes — conceding always saves useful time",
            "No — never concede a case-turning argument; granting it gives the opponent offense and loses the round. Strategic concession applies only to arguments that, if granted, still leave you winning",
            "Yes, but only halfway",
            "It doesn't matter either way",
          ],
          correctIndex: 1,
          explanation: "This argument is load-bearing in the worst way — it turns the debater's case, so granting it hands the opponent offense and loses the round. The test 'if I grant this, do I still win?' returns no, so it must be contested, not conceded. Strategic concession applies only to arguments that are dispensable — irrelevant, outweighed, or set-ups — where granting them still leaves you winning. Conceding a case-turner to 'save time' is sacrificing the piece that's holding your whole position together.",
        },
        {
          id: "debate-5-08-q3",
          type: "Concede the Irrelevant",
          challenge: `  The opponent spends time on a minor point about
  implementation timing that has no bearing on whether
  the policy is justified — the actual decisive
  question. The debater feels they must rebut it.`,
          text: "What's the better approach?",
          options: [
            "Rebut the timing point thoroughly to leave nothing unanswered",
            "Concede it — 'we'll grant their timing point; it doesn't affect whether the policy is justified' — and reclaim the time for the decisive question, since contesting irrelevant arguments wastes resources",
            "Concede the entire case",
            "Ignore it silently without acknowledging it",
          ],
          correctIndex: 1,
          explanation: "The timing point is irrelevant to the decisive question (whether the policy is justified), so contesting it wastes time the debater needs for what matters. The efficient move is to concede it explicitly — 'we grant their timing point; it doesn't affect the core question of justification' — and reclaim the time. Trying to rebut everything, including irrelevant arguments, is the novice error that spreads a debater thin. Conceding the irrelevant is a scalpel that removes distractions and focuses the round on the winning ground.",
        },
        {
          id: "debate-5-08-q4",
          type: "The Chess Sacrifice",
          challenge: `  A coach compares strategic concession to a chess
  sacrifice — giving up a piece to win the game — and
  notes that a master 'never sacrifices a piece that's
  holding their position together.'`,
          text: "What does this teach about concession?",
          options: [
            "Never concede anything, like never sacrificing a piece",
            "Conceding dispensable arguments to win the decisive ones is strategic strength — but, like a calculated sacrifice, you must never concede a load-bearing argument that holds your position together",
            "Always concede your most important arguments",
            "Sacrifices and concessions are reckless",
          ],
          correctIndex: 1,
          explanation: "The chess sacrifice teaches that giving up what doesn't matter to win what does is the height of strategy, not weakness — but it must be calculated. A master sacrifices material to gain a decisive advantage, yet never gives up a piece holding their position together. Likewise, a debater concedes dispensable arguments (irrelevant, outweighed, set-ups) to focus on the winners, but never concedes a load-bearing argument that turns the case or accesses their impacts. The goal is winning the contest, not keeping every piece — calculated concession serves the win.",
        },
      ],
    },
  },

  // ─── debate-5-09: Crystallization ─────────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Closing Argument",
      location: "Courtrooms, Everywhere",
      era: "Modern",
      emoji: "💎",
    },
    id: "debate-5-09",
    order: 9,
    title: "Crystallization — The Final Speech",
    subtitle: "Telling the judge the story of why you won",
    category: "arts",
    xp: 90,
    badge: { id: "debate-5-badge-09", name: "The Closer", emoji: "💎" },
    challengeType: "quiz",
    info: {
      tagline: "The final speech isn't more arguing — it's the story of the round, told so the judge writes your ballot for you.",
      year: 2024,
      overview: [
        "Crystallization is what the final speech does: it steps back from the line-by-line and tells the judge the story of the round — the two or three reasons your side won, why those reasons outweigh everything the opponent has, and therefore why the judge should vote for you. By the final speech, the round has been collapsed (epoch 5-07) to a few decisive arguments; crystallization is presenting those arguments as a clear, compelling ballot story. It's the difference between leaving the judge to assemble the round themselves and handing them a finished decision. No new arguments (epoch 1) — crystallization is synthesis and weighing, not construction.",
        "A crystallized final speech has a recognizable shape:\n- Identify the key voting issues — the few arguments that decide the round.\n- Explain why your side wins each (extending through the opponent's responses, frontlining).\n- Weigh them against the opponent's best arguments — why your reasons to vote outweigh theirs ('even if they win their argument, we win because ours is larger, more probable, and we've conceded nothing essential').\nIt ends by explicitly asking for the ballot and stating the clearest one-sentence reason: 'Vote for us because our plan solves a real, present harm and they've given you no impact that outweighs it.'",
        "Crystallization is persuasion at its most distilled — the judge is about to decide, and a great final speech pre-writes their reason for decision. The failures:\n- Giving a final speech that's just more line-by-line — overwhelming the judge with details instead of synthesizing.\n- Introducing new arguments — disregarded.\n- Failing to weigh — leaving the comparison to the judge.\nThe skill is to rise above the trees and show the forest: crystallize everything that happened into a clear, weighted story that points unmistakably to your ballot. Like a lawyer's closing argument, it doesn't present new evidence; it tells the jury what the evidence means and why it compels a verdict in your favor. Master it and you win the close rounds, because you, not the judge, decide what the round was about.",
      ],
      technical: {
        title: "Structuring a Crystallized Final Speech",
        body: [
          "A strong crystallization has four moves. (1) Frame the round: state the one or two key voting issues the round comes down to ('this round is about whether our plan solves the harm, and whether their disadvantage outweighs'). (2) Win each voting issue: briefly extend your winning argument through the opponent's responses, showing you're ahead ('on solvency, they responded X, but we answered with Y, so it stands'). (3) Weigh: compare your winning arguments against the opponent's best, explicitly, telling the judge why yours outweigh ('even if they win their disadvantage, we outweigh on magnitude and timeframe'). (4) Ask for the ballot: state the clearest one-sentence reason to vote for you. This structure turns the round into a decision.",
          "Avoid the crystallization failures. Don't give a final speech that's just more line-by-line — the judge doesn't need every detail re-litigated; they need synthesis and weighing. Don't introduce new arguments — they're disregarded and waste the speech. Don't fail to weigh — an un-weighed final speech leaves the decisive comparison to the judge, who may decide against you. And write the speech for the judge's flow and ballot: make the voting issues explicit and few, the weighing clear, and the ask unmistakable. The test of a great final speech: could the judge write their reason for decision by simply transcribing your last thirty seconds? If yes, you've crystallized — you've handed them the ballot.",
        ],
        codeExample: {
          label: "Crystallization — Hand the Judge the Ballot",
          code: `  FINAL SPEECH = synthesis + weighing, NOT more arguing.
   NO new arguments (disregarded). rise above line-by-line,
   tell the STORY of the round → pre-write the judge's
   reason for decision.

  FOUR MOVES:
   1. FRAME   "this round comes down to 2 issues: X and Y"
   2. WIN EACH  briefly extend through their responses:
                "on X they said A, we answered B → it stands"
   3. WEIGH   compare to their best, explicitly:
              "even if they win Y, we outweigh on magnitude
               + timeframe"
   4. ASK     one-sentence ballot reason: "vote us because
              we solve a real present harm and nothing
              they have outweighs it"

  FAILURES TO AVOID:
   ✗ just more line-by-line (overwhelm, no synthesis)
   ✗ NEW arguments (disregarded)
   ✗ no weighing (judge decides the comparison — maybe vs you)

  TEST: could the judge write their RFD by transcribing your
   last 30 seconds? if yes → you've crystallized.`,
        },
      },
      incident: {
        title: "The Closing Argument — Telling the Jury What It All Means",
        when: "Modern trial advocacy",
        where: "The courtroom",
        impact: "A trial lawyer's closing argument introduces no new evidence — it synthesizes the trial into a story of what the evidence means and why it compels a verdict, the exact function of a crystallized final speech.",
        body: [
          "In a trial, after all the witnesses and exhibits, comes the closing argument — and a great one introduces not a single new fact. By the rules, it can't; the evidence is closed. Instead, the lawyer rises and tells the jury what all of it meant: here are the two or three things this case comes down to, here is why the evidence on each points our way, here is why the other side's points don't change the outcome, and therefore here is the verdict you must reach. The closing doesn't add to the trial; it crystallizes it — transforming a sprawling mass of testimony into a clear, weighted story that compels a decision. The lawyers who win close cases are often those whose closing made the jury's decision feel obvious and inevitable.",
          "A crystallized final speech is the debate closing argument, and it works exactly the same way. The arguments are closed — no new ones allowed. The debater rises not to re-litigate every point but to tell the judge what the round meant: here are the few voting issues, here is why we win each, here is why our reasons outweigh theirs, and therefore here is your ballot. Like the trial lawyer, the debater introduces nothing new; they synthesize and weigh, turning the round's complexity into a clear story that points unmistakably to their victory. And like the closing argument, crystallization is where close rounds are won — because the side that best tells the judge what the round was about, and why that means they win, often decides the ballot before the judge has finished deliberating. The final speech is your closing argument: don't present more evidence, tell the judge what it all means, and why it compels a verdict in your favor.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Frame the Voting Issues", sub: "the 2–3 that decide it", type: "attacker" },
          { label: "Win Each One", sub: "extend through their responses", type: "system" },
          { label: "Weigh Against Their Best", sub: "'even if they win, we outweigh'", type: "victim" },
          { label: "Hand Over the Ballot", sub: "one-sentence reason to vote", type: "result" },
        ],
      },
      timeline: [
        { year: 1858, event: "Lincoln and Douglas close long debates by synthesizing the core dispute" },
        { year: 1990, event: "Crystallization formalized as the function of the final rebuttal", highlight: true },
        { year: 2005, event: "Public Forum's 'Final Focus' centers crystallization and weighing" },
        { year: 2015, event: "'Voting issues' framing becomes standard final-speech structure" },
        { year: 2020, event: "Writing the judge's reason-for-decision taught as the crystallization test" },
        { year: 2024, event: "Crystallization caps the through-the-round clash skills" },
      ],
      keyTakeaways: [
        "Crystallization is the final speech's job: synthesize the round into the few reasons you won, weigh them, and ask for the ballot — no new arguments",
        "Structure it: frame the voting issues, win each by extending through responses, weigh against the opponent's best, and state a one-sentence ballot reason",
        "Avoid the failures: don't just re-litigate the line-by-line, don't introduce new arguments, and never skip the weighing",
        "Like a closing argument, it adds no new evidence — it tells the judge what the round meant and why it compels a verdict for you",
      ],
      references: [
        { title: "NSDA: Crystallization and the Final Rebuttal", url: "https://www.speechanddebate.org/" },
        { title: "Final Focus and Voting Issues (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Closing Arguments in Advocacy (Britannica)", url: "https://www.britannica.com/topic/closing-argument" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-09-q1",
          type: "What Crystallization Is",
          challenge: `  In their final speech, a debater re-reads every
  argument and response from the entire round in
  detailed line-by-line order, overwhelming the judge
  with details and never synthesizing.`,
          text: "What should the final speech do instead?",
          options: [
            "Exactly this — re-litigate every detail",
            "Crystallize — step back from the line-by-line and tell the story of the round: the few voting issues, why you win each, why they outweigh the opponent's, and an explicit ask for the ballot",
            "Introduce several new arguments",
            "Stay silent to seem confident",
          ],
          correctIndex: 1,
          explanation: "The final speech's job is crystallization, not re-litigating the line-by-line. Drowning the judge in every detail provides no synthesis and no clear reason to vote. Instead, the debater should rise above the details and tell the story of the round: frame the two or three voting issues, show why they win each (extending through responses), weigh them against the opponent's best, and explicitly ask for the ballot. Crystallization hands the judge a finished decision rather than a pile of details to sort.",
        },
        {
          id: "debate-5-09-q2",
          type: "Weighing in the Final",
          challenge: `  A debater's final speech clearly wins their key
  arguments but never compares them to the opponent's
  arguments — leaving the judge to figure out which
  side's winning arguments matter more.`,
          text: "What's the cost of skipping the weighing?",
          options: [
            "Nothing — winning arguments is enough",
            "Without weighing, the decisive comparison is left to the judge, who may weigh against the debater; a crystallized final speech must explicitly weigh its winners against the opponent's best ('even if they win X, we outweigh')",
            "Weighing is only for the first speech",
            "The judge ignores weighing entirely",
          ],
          correctIndex: 1,
          explanation: "Skipping the weighing leaves the decisive comparison to the judge, who may weigh differently than the debater hoped — a common way to lose a round where you 'won your arguments.' Crystallization must explicitly weigh: compare your winning arguments against the opponent's best and tell the judge why yours outweigh ('even if they win their disadvantage, we outweigh on magnitude and timeframe'). The whole point of the final speech is to make the decision for the judge, and weighing is the core of that.",
        },
        {
          id: "debate-5-09-q3",
          type: "No New Arguments",
          challenge: `  In the final speech, a debater unveils a brand-new
  contention and a new piece of evidence they'd been
  holding back, hoping for a strong finish.`,
          text: "How will the judge treat this, and why?",
          options: [
            "Reward it as a strong closing",
            "Disregard it as new in the final speech — the opponent has no chance to respond, so new arguments are barred; crystallization is synthesis and weighing of existing arguments, not new construction",
            "Count it double for boldness",
            "Require an immediate re-debate",
          ],
          correctIndex: 1,
          explanation: "New arguments in the final speech are disregarded (epoch 1) because the opponent has no chance to respond — and crystallization is explicitly synthesis and weighing, not new construction. Holding back a contention for a 'strong finish' wastes it: it can't be tested, so the judge won't credit it. The final speech draws only on arguments already in the round, crystallizing them into a clear, weighted story. New material there is both barred and a wasted opportunity to weigh what's already won.",
        },
        {
          id: "debate-5-09-q4",
          type: "The Closing Argument",
          challenge: `  A coach says a final speech is like a trial
  lawyer's closing argument, which 'introduces no new
  evidence but tells the jury what the evidence
  means.'`,
          text: "What does this comparison teach about crystallization?",
          options: [
            "The final speech should present brand-new evidence like an opening statement",
            "Like a closing argument, crystallization adds nothing new — it synthesizes the round into a clear, weighted story of what the arguments mean and why they compel a verdict for your side",
            "Closing arguments are irrelevant to debate",
            "The final speech should avoid telling any story",
          ],
          correctIndex: 1,
          explanation: "The closing-argument comparison teaches that crystallization, like a legal closing, introduces no new evidence — it synthesizes everything already in the round into a clear, weighted story of what the arguments mean and why they compel a verdict for your side. The lawyer tells the jury the two or three things the case comes down to, why the evidence points their way, and why the other side's points don't change the outcome. The debater does exactly this in the final speech: not new construction, but the persuasive synthesis that hands the judge their decision.",
        },
      ],
    },
  },

  // ─── debate-5-10: The Dropped Argument ────────────────────────────────────────
  {
    epochId: "debate-5",
    wonder: {
      name: "The Unguarded Gate",
      location: "Strategy, Everywhere",
      era: "Timeless",
      emoji: "🚪",
    },
    id: "debate-5-10",
    order: 10,
    title: "The Dropped Argument",
    subtitle: "Spotting what the opponent never answered — and making it win the round",
    category: "arts",
    xp: 90,
    badge: { id: "debate-5-badge-10", name: "The Opportunist", emoji: "🚪" },
    challengeType: "quiz",
    info: {
      tagline: "The argument your opponent forgot to answer is conceded as true — and a single dropped argument, properly leveraged, can win the entire round.",
      year: 2024,
      overview: [
        "A dropped argument is one that a side failed to answer — and in debate, a dropped argument is conceded: the judge treats it as true. This is one of the most important and most exploited principles in the activity. If you make an argument and the opponent never responds to it, you don't have to keep proving it — it stands as true, because the opponent had the chance to contest it and didn't. Spotting drops (which requires a clean flow, epoch 5-01) and leveraging them is one of the surest paths to victory, because a conceded argument is unbeatable: there's nothing left to argue about.",
        "Not every drop wins the round — the skill is leveraging the drop that matters, because a dropped argument is only as valuable as its impact:\n- A conceded but trivial point doesn't win.\n- A conceded decisive argument does — a dropped turn (conceded offense) is the gold standard, but a dropped contention or weighable impact counts too.\nSo identify the drops on your flow, select the ones that matter, and extend and weigh them explicitly: 'they dropped our second contention entirely — it's conceded, and it independently wins because [weighing].'",
        "Leveraging a drop has a specific technique:\n- Flag it clearly so the judge registers it ('they completely dropped our economic argument').\n- Explain the implication of the concession ('which means it's conceded as true — they've given us this').\n- Weigh it ('and it independently wins because it outweighs everything they're going for').\nDo this before it's too late for the opponent to claim they answered it elsewhere — once dropped, new responses are disregarded like new arguments. The dropped argument is the unguarded gate: clean flowing finds it, and clear extension and weighing walk through it.",
      ],
      technical: {
        title: "Finding, Flagging, and Weighing the Drop",
        body: [
          "Finding drops requires a clean flow. As you flow each speech, mark any argument the opponent failed to answer — a blank column beneath one of your arguments (epoch 1). After their speech, scan for these blanks: each is a dropped argument, conceded as true. The drops that matter most are dropped turns (conceded offense — your strongest possible position), dropped contentions or independent arguments you can extend to win, and dropped impacts or weighing that let you win the comparison. Prioritize leveraging the decisive drops; a dropped trivial point isn't worth your time.",
          "Leveraging has three steps and a timing rule. Flag: 'they dropped our X' (make the judge register the concession). Explain the implication: 'so it's conceded as true.' Weigh: 'and it independently wins because…' (impact the concession, epoch 4-07). The timing rule: leverage drops at the first opportunity and hold the opponent to the concession — once an argument is genuinely dropped, the opponent generally cannot resurrect it with a new response in a later speech (treated like a new argument and disregarded), so you can extend a dropped argument confidently, knowing they're barred from answering it now. This is why dropped arguments are so powerful: a conceded argument is unbeatable, and you simply have to flag it, explain it's conceded, and weigh it to convert the opponent's oversight into your victory.",
        ],
        codeExample: {
          label: "The Dropped Argument — Conceded = Unbeatable",
          code: `  DROPPED ARGUMENT = a side failed to answer it
   → CONCEDED: the judge treats it as TRUE.
   (a conceded argument is unbeatable — nothing left to argue)

  FIND IT (needs a clean flow):
   scan for a BLANK column beneath one of YOUR arguments.
   each blank = a drop. → prioritize the ones that MATTER:
    ★ dropped TURN (conceded OFFENSE — gold standard)
    • dropped contention / independent winning argument
    • dropped impact or weighing

  LEVERAGE IT (3 steps):
   1. FLAG       "they completely dropped our X"
   2. IMPLICATION "so it's conceded as TRUE — they gave us this"
   3. WEIGH      "and it independently wins because..."

  TIMING RULE: leverage at first chance & hold them to it —
   once dropped, a NEW response later is disregarded (like a
   new argument). so extend a dropped arg CONFIDENTLY.

  the UNGUARDED GATE: they left an opening; spot it (flow),
   drive through it (extend + weigh), win the round.`,
        },
      },
      incident: {
        title: "The Unguarded Gate — Victory Through the Opening Left Undefended",
        when: "Timeless",
        where: "From ancient sieges to modern strategy",
        impact: "Throughout the history of conflict, fortresses thought impregnable have fallen through a single unguarded gate or postern left undefended — a permanent lesson that the decisive weakness is often not strength overcome but an opening left unwatched.",
        body: [
          "History is full of mighty fortresses and cities that fell not because their walls were breached by force, but because a single gate, postern, or passage was left unguarded. The defenders concentrated on the obvious threats and forgot a minor entrance; the attacker found it and walked through the opening the defense had failed to watch. The lesson recurs across millennia of siege warfare: the decisive vulnerability is frequently not a strength overcome through superior force, but an opening left undefended through oversight. The strongest position in the world fails at the point no one was guarding.",
          "A dropped argument is the unguarded gate of a debate round. The opponent, concentrating on the arguments they chose to contest, leaves one of yours unanswered — an opening in their defense. By the rules of the activity, that opening is decisive: a dropped argument is conceded as true, unbeatable, because the opponent had their chance to defend the gate and didn't. The debater's task is the attacker's task: spot the unguarded gate (which requires the situational awareness of a clean flow, epoch 5-01), and drive through it before it can be closed (extend and weigh the concession, while the opponent is barred from belatedly answering). A single dropped argument, properly leveraged, can win a round against an opponent who was 'winning' everywhere they were paying attention — because the round, like the fortress, is lost at the point left undefended. Watch for the gate the opponent forgot to guard, and walk through it to the ballot.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Clean Flow", sub: "track every argument", type: "attacker" },
          { label: "Spot the Blank Column", sub: "an argument they never answered", type: "system" },
          { label: "Flag It Conceded", sub: "'dropped = conceded as true'", type: "victim" },
          { label: "Weigh It to Victory", sub: "the unguarded gate to the ballot", type: "result" },
        ],
      },
      timeline: [
        { year: -500, event: "Sun Tzu notes the decisive weakness is the point left undefended" },
        { year: 1950, event: "The columnar flow makes dropped arguments visible as blank columns" },
        { year: 1990, event: "'Dropped = conceded' becomes a foundational judging principle", highlight: true },
        { year: 2005, event: "Flag-explain-weigh technique for leveraging drops standardizes" },
        { year: 2015, event: "The bar on answering dropped arguments late is widely enforced" },
        { year: 2024, event: "The dropped argument caps the clash epoch as a primary path to victory" },
      ],
      keyTakeaways: [
        "A dropped (unanswered) argument is conceded — the judge treats it as true, making it unbeatable",
        "Spot drops with a clean flow (blank columns), and prioritize the ones that matter — a dropped turn is conceded offense, the gold standard",
        "Leverage a drop in three steps: flag it, explain it's conceded as true, and weigh it as a reason you win",
        "Once dropped, the opponent generally can't answer it later — so extend a dropped argument confidently; it's the unguarded gate to the ballot",
      ],
      references: [
        { title: "NSDA: Dropped Arguments and Concession", url: "https://www.speechanddebate.org/" },
        { title: "Leveraging Drops on the Flow (NSDA Resources)", url: "https://www.speechanddebate.org/" },
        { title: "Judging Paradigms and Dropped Arguments (NSDA)", url: "https://www.speechanddebate.org/" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "debate-5-10-q1",
          type: "Dropped = Conceded",
          challenge: `  A debater made a strong argument in their
  constructive. Checking their flow, they see a
  completely blank column beneath it — the opponent
  never responded to it at all.`,
          text: "What does this blank column mean, and what's its status?",
          options: [
            "It means the argument was too weak to matter",
            "The argument was dropped — and a dropped argument is conceded, treated by the judge as true; the opponent had the chance to contest it and didn't",
            "The debater must keep re-proving it",
            "It means the judge didn't hear it",
          ],
          correctIndex: 1,
          explanation: "A blank column beneath your argument means the opponent dropped it — never answered it. By a foundational principle of debate, a dropped argument is conceded: the judge treats it as true, because the opponent had the opportunity to contest it and didn't. The debater no longer has to prove it; it stands. Spotting these blanks (which requires a clean flow) and leveraging the ones that matter is one of the surest paths to victory, because a conceded argument is unbeatable.",
        },
        {
          id: "debate-5-10-q2",
          type: "Which Drop Matters",
          challenge: `  A debater notices the opponent dropped two things:
  a trivial, low-impact side point, and a turn that
  gives the debater conceded offense on the central
  issue.`,
          text: "Which drop should the debater leverage, and why?",
          options: [
            "The trivial side point, since any drop wins",
            "The dropped turn — it's conceded offense on the central issue (the gold-standard drop); a dropped argument is only as valuable as its impact, so leverage the decisive one and weigh it",
            "Neither — drops don't matter",
            "Both equally, spending the same time on each",
          ],
          correctIndex: 1,
          explanation: "A dropped argument is only as valuable as its impact, so the debater should leverage the dropped turn — conceded offense on the central issue, the gold-standard drop — not the trivial side point. The turn, now conceded, is an independent reason to win that the opponent is barred from answering, and it bears on the decisive clash. The trivial dropped point, even though also conceded, doesn't move the round. Prioritize leveraging the drops that decide the ballot.",
        },
        {
          id: "debate-5-10-q3",
          type: "Leveraging Technique",
          challenge: `  A debater wants to make the most of an important
  argument the opponent dropped.`,
          text: "What's the effective three-step technique?",
          options: [
            "Mention it once quietly and move on",
            "Flag it ('they dropped our X'), explain the implication ('so it's conceded as true'), and weigh it ('and it independently wins because…') — making the judge see the concession decides the ballot",
            "Introduce a brand-new argument instead",
            "Wait until after the round to mention it",
          ],
          correctIndex: 1,
          explanation: "The effective technique is flag-explain-weigh: flag the drop so the judge registers it ('they completely dropped our economic argument'), explain the implication of the concession ('so it's conceded as true — they've given us this'), and weigh it ('and it independently wins because it outweighs everything they're going for'). Mentioning it quietly wastes a conceded, unbeatable argument; the judge needs to be told it's dropped, that dropping means conceding, and why the concession decides the round.",
        },
        {
          id: "debate-5-10-q4",
          type: "Timing Rule",
          challenge: `  A debater extends an argument the opponent dropped
  two speeches ago. The opponent now tries to answer
  it for the first time in their final speech.`,
          text: "How is the opponent's belated response generally treated?",
          options: [
            "It fully revives the argument as if never dropped",
            "It's generally disregarded — once an argument is dropped, answering it late is treated like a new argument, so the concession stands and the debater can extend the dropped argument confidently",
            "It automatically wins the argument for the opponent",
            "The judge must restart the round",
          ],
          correctIndex: 1,
          explanation: "Once an argument is genuinely dropped, a belated first response in a later speech is generally disregarded — it's treated like a new argument (the opponent had their chance and missed it, and answering now denies the debater a chance to respond). So the concession stands, and the debater can extend the dropped argument confidently, knowing the opponent is barred from reviving it. This timing rule is exactly what makes dropped arguments so powerful: the gate, once left unguarded, can't be closed after you've driven through it.",
        },
      ],
    },
  },
];
