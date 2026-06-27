import type { StageConfig, EpochConfig } from "./types";

export const cribbage4Epoch: EpochConfig = {
  id: "cribbage-4",
  name: "Cribbage: Expert Counting & The Board",
  subtitle: "Count any hand instantly, master the board, and win the endgame",
  description:
    "The expert tier of cribbage: counting fast and never missing a point, and playing the board like a tournament veteran. This epoch drills a reliable counting method (fifteens, then runs, pairs, flush, and nobs), the tricky hands where points hide (double and triple runs like 7-8-7-8), the legendary perfect 29 and the 'impossible' counts (19, 25, 26, 27) cribbage players joke about, how the crib scores like a hand except for its stricter flush rule, the anatomy of the board and its 'streets' and 91-point skunk line, pegging out and the endgame count (the non-dealer/pone counts first and can win before the dealer), strategy by score (offense when behind, defense when ahead), the muggins rule for claiming an opponent's missed points, the odds and expected values that define mastery (the '26 theory', the average crib, the value of the cut), and a full strategic game walkthrough in the style of American Cribbage Congress tournament play.",
  emoji: "🎓",
  color: "red",
  unlocked: true,
};

export const cribbage4Stages: StageConfig[] = [
  // ─── cribbage-4-01: Fast & Accurate Counting ──────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The counting method", location: "Where a hand becomes a number", era: "Modern", emoji: "⚡" },
    id: "cribbage-4-01",
    order: 1,
    title: "Fast & Accurate Counting",
    subtitle: "Count fifteens first, then runs, pairs, flush, and nobs — a reliable method",
    category: "sports",
    xp: 95,
    badge: { id: "cribbage4-badge-01", name: "Quick Counter", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "The difference between a good cribbage player and a great one is counting every hand quickly and never leaving a point behind. A reliable method — always in the same order — turns a tangle of cards into an exact number in seconds.",
      year: 2024,
      overview: [
        "Expert counters use a FIXED ORDER every single time so nothing is overlooked:\n- FIFTEENS first — find every distinct combination that sums to 15 (2 points each).\n- RUNS next — every distinct sequence of three or more consecutive ranks (1 point per card).\n- PAIRS — each pair is 2 (three of a kind = 6, four = 12).\n- FLUSH then NOBS — four matching suits (5 with the starter), and the held Jack of the starter's suit.",
        "Counting fifteens first is deliberate, not arbitrary:\n- Fifteens are where most points (and most missed points) live, so you clear the hardest part while your attention is fresh.\n- Pairs and the flush are nearly automatic to spot, so leaving them for last costs nothing.\n- Nobs is a single yes/no check at the very end (is the Jack of the starter's suit in my hand?), so it never gets forgotten.",
        "The spoken count is the method out loud:\n- 'Fifteen-two, fifteen-four...' walks the fifteens, then 'a run of three is seven, and a pair is nine' folds in the rest.\n- Saying the running subtotal aloud keeps you from double-counting or skipping a combination.\n- With practice the whole sequence collapses into pattern recognition — you see a 7-8 and a ten-card and just know it is worth points.",
      ],
      technical: {
        title: "Why Order Matters and How Experts Chunk a Hand",
        body: [
          "A consistent routine is an error-checking system:\n- Because you always go fifteens, runs, pairs, flush, nobs, your brain has a checklist — skip a step and you notice the gap.\n- Within fifteens, scan two-card combinations first (7+8, 6+9, 5+ten), then trios (4+5+6, 2+3+ten), so you never miss the harder multi-card fifteens.\n- Add as you go and announce a running subtotal; the final number is the sum of every category.",
          "Strong players 'chunk' familiar shapes rather than recompute:\n- A 5 plus any ten-card is an instant fifteen; two of them is fifteen-four before you think.\n- A run with a pair inside it (a double run) is recognized as a unit worth 8, not rebuilt card by card.\n- The goal is to reach the point where counting is recall, not arithmetic — the same way a reader sees words, not letters.",
        ],
        codeExample: {
          label: "The fixed counting order in action",
          code: `  HAND: 6 7 8 9  +  starter 8     (count in ORDER)

  1) FIFTEENS:  6+9=15, 7+8=15 (x2, two 8s) -> 6
  2) RUNS:      6-7-8-9 with each 8          -> two runs of 4 = 8
  3) PAIRS:     8-8                          -> 2
  4) FLUSH:     not all one suit             -> 0
  5) NOBS:      no Jack of starter's suit    -> 0
  ----------------------------------------------------
  TOTAL: 6 + 8 + 2 = 16   (say it as you go)`,
        },
      },
      incident: {
        title: "The Player Who Never Misses a Point",
        when: "Every serious game",
        where: "Clubs and tournaments",
        impact: "Counting in a fixed order is the single habit that separates club players from kitchen-table players — missed points are silent losses that decide close games",
        body: [
          "Every cribbage club has a player famous for counting a complex hand in a heartbeat and never, ever missing a point. The secret is not raw arithmetic talent — it is discipline: the same order, every hand, fifteens first, so the brain has a track to run on.",
          "The cost of skipping the method is invisible but real:\n- A forgotten fifteen or a missed double-run point does not announce itself; you simply score less than the hand was worth.\n- Over a game of many deals, a couple of missed points per hand becomes a decisive margin.\n- This is why teaching cribbage starts with the order — it is the foundation everything else in this epoch is built on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fifteens First", sub: "the hardest part, done fresh", type: "system" },
          { label: "Then Runs", sub: "every distinct sequence", type: "attacker" },
          { label: "Pairs, Flush", sub: "nearly automatic", type: "victim" },
          { label: "Nobs Last", sub: "one yes/no check", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle prints the scoring categories that fix the counting order" },
        { year: 1900, event: "Six-card cribbage makes dense, fast counting routine", highlight: true },
        { year: 1980, event: "Tournament play rewards counters who never miss a point" },
        { year: 2024, event: "The 'fifteens first' order is taught the same way worldwide" },
      ],
      keyTakeaways: [
        "Count in a fixed order every time: fifteens, runs, pairs, flush, nobs",
        "Do fifteens first — that is where most points (and most misses) live",
        "Announce a running subtotal aloud to avoid double-counting or skipping",
        "Aim for recognition over arithmetic — chunk familiar shapes like 5+ten and double runs",
      ],
      references: [
        { title: "Cribbage — counting the hands", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage scoring reference — ACC", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-01-q1", type: "The Method", challenge: "What goes first.", text: "In the reliable counting method, which category do you count first?", options: ["Fifteens", "The flush", "His nobs", "Pairs"], correctIndex: 0, explanation: "Count fifteens first — they hold most of the points and are the easiest to miss." },
        { id: "cribbage-4-01-q2", type: "The Order", challenge: "The full sequence.", text: "What is the recommended counting order?", options: ["Fifteens, runs, pairs, flush, nobs", "Nobs, flush, pairs, runs, fifteens", "Pairs, fifteens, flush, nobs, runs", "Runs, pairs, nobs, fifteens, flush"], correctIndex: 0, explanation: "Fifteens, then runs, then pairs, then flush, then nobs — the same order every hand." },
        { id: "cribbage-4-01-q3", type: "Count It", challenge: "Add it up.", text: "Count the hand 6-7-8-9 with a starter 8.", options: ["16", "14", "12", "18"], correctIndex: 0, explanation: "Fifteens 6+9 and 7+8 twice = 6; two runs of four = 8; pair of 8s = 2; total 16." },
        { id: "cribbage-4-01-q4", type: "Why Order", challenge: "The reason.", text: "Why do experts always count in the same fixed order?", options: ["It acts as a checklist so no combination is skipped", "It is required by the rules", "It makes the hand worth more", "It speeds up the deal"], correctIndex: 0, explanation: "A fixed routine is an error-check — skip a step and you notice the gap." },
        { id: "cribbage-4-01-q5", type: "Chunking", challenge: "Recognition.", text: "What is the goal of practiced counting?", options: ["Recognizing familiar shapes instantly instead of recomputing", "Counting only the highest cards", "Ignoring fifteens to save time", "Always using a calculator"], correctIndex: 0, explanation: "Experts chunk patterns (5+ten, double runs) so counting becomes recall, not arithmetic." },
      ],
    },
  },

  // ─── cribbage-4-02: Tricky / Hidden-Point Hands ───────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The double run", location: "Where points hide", era: "Modern", emoji: "🔍" },
    id: "cribbage-4-02",
    order: 2,
    title: "Tricky / Hidden-Point Hands",
    subtitle: "Double and triple runs, and the hands where points hide",
    category: "sports",
    xp: 97,
    badge: { id: "cribbage4-badge-02", name: "Hidden Points", emoji: "🔍" },
    challengeType: "quiz",
    info: {
      tagline: "Some hands count higher than they look. A pair tucked inside a run, a flush that is easy to forget, fifteens hiding in three-card combinations — the hands that trip up beginners are exactly where experts harvest extra points.",
      year: 2024,
      overview: [
        "DOUBLE RUNS are the classic hidden-point hand:\n- A run with a pair inside it (like 7-8-8-9) counts the run twice — once for each card of the pair — plus the pair itself.\n- 7-8-8-9 is a 'double run of three': two runs of three (6) plus the pair (2) = 8, before any fifteens.\n- The famous 7-8-7-8 with a 6 or 9 is a 'double double run': four runs of three (12), two pairs (4), and fifteens stack on top for a 24-point hand.",
        "Points hide in several recurring shapes:\n- THREE-CARD FIFTEENS — combinations like 4+5+6 or 2+3+ten are easy to walk past when scanning only pairs.\n- THE FLUSH — four cards of one suit quietly adds 4; with face cards present, players fixate on fifteens and miss it.\n- THE 'NO-FIFTEEN' TRAP — a hand of all high cards (8-9-9-10-J) can look rich but make zero fifteens, scoring only on its run and pair.",
        "Recognizing the shape is faster than computing it:\n- A run plus a pair = double run; the pair-count tells you the multiplier (a pair doubles, a three-of-a-kind triples the run).\n- Triple runs (a run with three of a kind, like 4-5-5-5-6) are worth 15 from runs and pairs alone.\n- Train your eye on these patterns and the 'tricky' hands become the easiest of all to count.",
      ],
      technical: {
        title: "Double, Double-Double, and Triple Runs Decoded",
        body: [
          "The run families have fixed values you can memorize:\n- DOUBLE RUN OF THREE (one pair inside a 3-run, e.g. 4-4-5-6): two runs of three (6) + a pair (2) = 8.\n- DOUBLE RUN OF FOUR (one pair inside a 4-run, e.g. 4-5-6-6-7): two runs of four (8) + a pair (2) = 10.\n- DOUBLE-DOUBLE RUN (two pairs inside a 3-run, e.g. 7-7-8-8-9): four runs of three (12) + two pairs (4) = 16.\n- TRIPLE RUN (three of a kind inside a 3-run, e.g. 4-5-5-5-6): three runs of three (9) + pair royal (6) = 15.",
          "The reliable way to count any double run is to separate the categories:\n- Count the runs by multiplying: how many distinct ways can you pick one of each rank in the sequence? Each way is a full run.\n- Count the pairs independently (the matching cards), then add any fifteens on top.\n- Done this way, even a 24-point monster is just fifteens + runs + pairs, each tallied in turn.",
        ],
        codeExample: {
          label: "Decoding the 7-8-7-8 double-double run",
          code: `  HAND: 7 8 7 8  +  starter 9

  FIFTEENS: 7+8 -> four combinations (two 7s x two 8s) = 8
  RUNS:     7-8-9 -> two 7s x two 8s x one 9 = four runs of 3 = 12
  PAIRS:    7-7 = 2, 8-8 = 2                              = 4
  ----------------------------------------------------------
  TOTAL: 8 + 12 + 4 = 24   (a "double double run")

  A pair inside a run DOUBLES it; trips TRIPLE it.`,
        },
      },
      incident: {
        title: "The 24 That Looks Like a 12",
        when: "Every dense hand",
        where: "The show",
        impact: "Double and triple runs are the most commonly under-counted hands in cribbage — players see a run and a pair but miss that the pair multiplies the run",
        body: [
          "Hand a beginner 7-8-7-8 with a 9 cut and they will often say '12' — a run, a couple of pairs, a couple of fifteens. The real answer is 24, because each pair multiplies the run it sits inside, producing four separate runs of three.",
          "These hands reward the player who counts by category:\n- Treat runs and pairs as independent tallies and the multiplication takes care of itself.\n- The same shapes appear constantly — 7-8-8-9, 4-4-5-6, J-J-Q-K — so learning the family values pays off every game.\n- Under the muggins rule, mis-counting a double run hands the missed points straight to your opponent, which is why this stage matters.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pair Inside a Run", sub: "doubles the run", type: "system" },
          { label: "Double Double", sub: "two pairs = four runs", type: "attacker" },
          { label: "Triple Run", sub: "trips = three runs", type: "victim" },
          { label: "Don't Miss the Flush", sub: "or three-card fifteens", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's scoring implies the multiplying value of pairs within runs" },
        { year: 1900, event: "Six-card play makes double runs common at the show", highlight: true },
        { year: 1980, event: "Tournament counters drill the run-family values" },
        { year: 2024, event: "Double runs remain the most under-counted hands among beginners" },
      ],
      keyTakeaways: [
        "A pair inside a run multiplies it: a double run of three is 8, a double-double is 16",
        "A three-of-a-kind inside a run triples it: a triple run is 15 from runs and pairs alone",
        "Count runs and pairs as independent tallies, then add fifteens on top",
        "Watch for hidden flushes and three-card fifteens — and the 'all-high, no-fifteen' trap",
      ],
      references: [
        { title: "Cribbage — runs, pairs, and double runs", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage scoring combinations", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-02-q1", type: "Double Double", challenge: "Count the monster.", text: "What does 7-8-7-8 with a 9 starter score?", options: ["24", "20", "16", "12"], correctIndex: 0, explanation: "Four fifteens (8) + four runs of three (12) + two pairs (4) = 24." },
        { id: "cribbage-4-02-q2", type: "Double Run", challenge: "Pair inside a run.", text: "What is a 'double run of three' (like 4-4-5-6) worth from runs and pairs?", options: ["8", "6", "3", "10"], correctIndex: 0, explanation: "Two runs of three (6) plus the pair (2) = 8, before any fifteens." },
        { id: "cribbage-4-02-q3", type: "The Trap", challenge: "All high cards.", text: "Count the hand 8-9-9-10-J (the cards are 8, 9, 9, 10, J).", options: ["10", "14", "12", "8"], correctIndex: 0, explanation: "No fifteens (all cards too high to sum 15); double run of four = 8, plus the pair of 9s = 2 (the run already counts the pair's multiply) — runs 8 + pair 2 = 10." },
        { id: "cribbage-4-02-q4", type: "Triple Run", challenge: "Three of a kind in a run.", text: "What does a triple run (like 4-5-5-5-6) score from runs and pairs?", options: ["15", "12", "9", "18"], correctIndex: 0, explanation: "Three runs of three (9) plus pair royal of 5s (6) = 15." },
        { id: "cribbage-4-02-q5", type: "Hidden Flush", challenge: "Easy to miss.", text: "Count 4-5-6-7 all spades with an 8 of diamonds starter.", options: ["13", "9", "11", "14"], correctIndex: 0, explanation: "Fifteens 7+8 and 4+5+6 = 4; run of five = 5; four-card flush in hand = 4; total 13." },
      ],
    },
  },

  // ─── cribbage-4-03: The Highest Hands & Impossible Counts ─────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The perfect 29", location: "The mathematical ceiling", era: "Modern", emoji: "🏆" },
    id: "cribbage-4-03",
    order: 3,
    title: "The Highest Hands & Impossible Counts",
    subtitle: "The perfect 29, the 28, and why 19/25/26/27 can never happen",
    category: "sports",
    xp: 99,
    badge: { id: "cribbage4-badge-03", name: "Perfect 29", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "29 is the holy grail — the highest hand cribbage allows. Just below it sits the 28, and scattered through the number line are scores no hand can ever make: 19, 25, 26, and 27. Knowing the ceiling, and the gaps, proves you truly understand the scoring.",
      year: 2024,
      overview: [
        "The PERFECT 29 has exactly one recipe:\n- Hold three 5s and the Jack of one suit, then cut the fourth 5 in that same suit as the starter.\n- Eight fifteens (each 5 with the Jack, plus the four three-card combinations of 5s) = 16; four 5s as double pair royal = 12; his nobs for the held Jack matching the starter = 1.\n- 16 + 12 + 1 = 29 — the mathematical maximum, rarer than one hand in tens of thousands.",
        "The 28 is the second-best and a common confusion:\n- Four 5s in your hand plus a Jack cut as the starter scores 28 — eight fifteens (16) and double pair royal (12).\n- It is NOT 29, because nobs requires the Jack to be in your HAND matching the starter's suit; here the Jack is the cut itself, so there is no nobs.\n- That single missing point is why 28 and 29 are different hands with different recipes.",
        "Some scores are simply IMPOSSIBLE:\n- A cribbage hand can never total 19, 25, 26, or 27.\n- Because of this, players jokingly call a worthless zero-point hand 'a nineteen' — '19' is shorthand for 'nothing'.\n- The gaps come from how fifteens, pairs, and runs combine: there is no arrangement of five cards that lands on exactly those totals.",
      ],
      technical: {
        title: "Building 29, the 28, and Why the Gaps Exist",
        body: [
          "The 29 is worth dissecting because it bundles every category:\n- FIFTEENS: each of the four 5s pairs with the Jack (4 fifteens) and the 5s combine three-at-a-time for 15 four more ways — eight fifteens, 16 points.\n- PAIRS: four 5s is double pair royal, six pairs, 12 points.\n- NOBS: the held Jack shares the starter's suit for the final point. No other five-card holding reaches 29.",
          "The impossible counts fall out of the arithmetic:\n- Scores are built from 2-point fifteens and pairs, 1-per-card runs, flushes, and the odd nobs point, so not every integer is reachable.\n- 19, 25, 26, and 27 have no valid combination of those building blocks across five cards — they are genuine gaps, not just rare.\n- Knowing them is a useful check: if you count a hand to 19, 25, 26, or 27, you have made an arithmetic error and should recount.",
        ],
        codeExample: {
          label: "29 vs 28 — one point of nobs apart",
          code: `  PERFECT 29:  hand 5 5 5 J(hearts)  + starter 5(hearts)
    fifteens 16 + four 5s 12 + NOBS 1 = 29   (Jack in HAND)

  THE 28:      hand 5 5 5 5            + starter J
    fifteens 16 + four 5s 12 + nobs 0 = 28   (Jack is the CUT)

  IMPOSSIBLE TOTALS: 19, 25, 26, 27
    -> no five-card hand can score these
    -> "a nineteen" = a hand worth nothing`,
        },
      },
      incident: {
        title: "The Hand Every Player Dreams Of",
        when: "Once in tens of thousands of hands",
        where: "Cribbage tables everywhere",
        impact: "The 29 is cribbage's hole-in-one — clubs and the ACC keep records of sanctioned ones, and players remember exactly when they scored theirs",
        body: [
          "Ask any lifelong cribbage player and they can tell you whether they have ever had a 29 — and if so, exactly when and where. The hand is rare enough that sanctioning bodies keep records of it, and a club will often mark the occasion.",
          "The 29's lore is also a teaching tool:\n- It is the perfect example because it folds fifteens, four of a kind, and nobs into a single count.\n- Understanding why 28 is a different hand (no nobs when the Jack is the cut) sharpens the distinction between his heels, his nobs, and the rest of the scoring.\n- And learning the impossible counts — 19, 25, 26, 27 — is the rite of passage that proves you have mastered the math.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Perfect 29", sub: "three 5s + Jack, cut the 4th 5", type: "system" },
          { label: "The 28", sub: "four 5s, Jack cut — no nobs", type: "attacker" },
          { label: "Impossible", sub: "19, 25, 26, 27", type: "victim" },
          { label: "'A Nineteen'", sub: "slang for a zero hand", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's scoring fixes 29 as the theoretical maximum" },
        { year: 1900, event: "Standard six-card scoring confirms the 29 ceiling", highlight: true },
        { year: 1980, event: "The ACC begins recording sanctioned 29-point hands" },
        { year: 2024, event: "'A nineteen hand' remains universal slang for a zero count" },
      ],
      keyTakeaways: [
        "The perfect 29: three 5s + the Jack of a suit, with the fourth 5 of that suit cut as the starter",
        "Four 5s with a Jack cut is 28, not 29 — no nobs, because the Jack is the cut, not in hand",
        "No cribbage hand can ever score 19, 25, 26, or 27",
        "'A nineteen' is players' slang for a worthless, zero-point hand",
      ],
      references: [
        { title: "Cribbage statistics — maximum hands", url: "https://en.wikipedia.org/wiki/Cribbage_statistics" },
        { title: "Cribbage — the 29 hand", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-03-q1", type: "The Max", challenge: "The ceiling.", text: "What is the highest possible cribbage hand?", options: ["29", "28", "31", "26"], correctIndex: 0, explanation: "29 is the maximum: three 5s and a Jack, with the fourth 5 (matching the Jack's suit) as the starter." },
        { id: "cribbage-4-03-q2", type: "Impossible", challenge: "The gap.", text: "Which of these scores can a cribbage hand NEVER make?", options: ["19", "20", "23", "17"], correctIndex: 0, explanation: "19, 25, 26, and 27 are impossible counts; 17, 20, and 23 are all reachable." },
        { id: "cribbage-4-03-q3", type: "The 28", challenge: "One point short.", text: "Four 5s in hand with a Jack cut as the starter scores how much?", options: ["28", "29", "26", "24"], correctIndex: 0, explanation: "Eight fifteens (16) + four 5s (12) = 28; no nobs because the Jack is the cut, not in hand." },
        { id: "cribbage-4-03-q4", type: "Slang", challenge: "A nineteen.", text: "When a player says they have 'a nineteen', what do they mean?", options: ["A hand worth zero points (since 19 is impossible)", "A hand worth exactly 19", "A perfect hand", "A hand with nineteen cards"], correctIndex: 0, explanation: "Since 19 is an impossible count, '19' is slang for a hand worth nothing." },
        { id: "cribbage-4-03-q5", type: "Nobs", challenge: "What makes 29 a 29.", text: "What single point separates the 28 from the perfect 29?", options: ["His nobs — the held Jack matching the starter's suit", "An extra fifteen", "An extra pair", "A flush"], correctIndex: 0, explanation: "29 requires the Jack in hand matching the starter for nobs; the 28 has the Jack as the cut, so no nobs." },
      ],
    },
  },

  // ─── cribbage-4-04: Counting the Crib ─────────────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The box", location: "The dealer's fifth hand", era: "Modern", emoji: "📦" },
    id: "cribbage-4-04",
    order: 4,
    title: "Counting the Crib",
    subtitle: "It scores like a hand — except a flush needs all five cards in one suit",
    category: "sports",
    xp: 101,
    badge: { id: "cribbage4-badge-04", name: "Crib Counter", emoji: "📦" },
    challengeType: "quiz",
    info: {
      tagline: "The crib is the dealer's fifth hand, and it counts exactly like any other hand — fifteens, runs, pairs, nobs — with one critical exception: its flush rule is stricter. Miscount the crib flush and you either steal points you didn't earn or leave points on the table.",
      year: 2024,
      overview: [
        "The crib scores by all the same rules as a hand:\n- FIFTEENS, RUNS, PAIRS, and NOBS work identically — the held Jack of the starter's suit still scores 1 in the crib.\n- You count the four crib cards plus the shared starter as a five-card hand, just like your own.\n- Only the dealer counts the crib, and it is counted last (after both players' hands).",
        "The ONE difference is the flush:\n- In a HAND, four cards of the same suit score a flush of 4 (5 with the starter).\n- In the CRIB, a flush only scores if ALL FIVE cards — the four crib cards AND the starter — share one suit, for 5 points.\n- A four-card crib flush with a non-matching starter scores NOTHING. This is the rule players most often get wrong.",
        "Why the crib's flush rule is stricter:\n- The crib is built from four discards by two different players, so a four-card suited crib is partly luck, not skill.\n- Requiring all five to match makes the crib flush a genuine rarity worth its 5 points.\n- Everything else — the dense fifteens, the double runs — counts exactly as it would in a hand, so the crib can still be a big scorer.",
      ],
      technical: {
        title: "Counting the Crib Correctly, Flush and All",
        body: [
          "Count the crib in the same fixed order, then check the flush carefully:\n- Fifteens, runs, pairs, nobs — identical to a hand.\n- For the flush, ask: are all five cards (the four crib cards plus the starter) the same suit? Only then score 5. Four matching is zero in the crib.\n- This is the moment to slow down — it is the easiest place to over-count (claiming a non-existent 4) or under-count a legitimate five-card flush.",
          "The crib's flush rule has real strategic weight:\n- When discarding to your own crib, a four-suited crib does you no good unless the starter also matches — so don't over-value 'almost-flush' throws.\n- A genuine five-card crib flush is rare and worth pressing for only when the rest of the throw is already strong.\n- At the show, treat the crib like any hand for fifteens and runs, but treat its flush as a special case every time.",
        ],
        codeExample: {
          label: "The crib flush rule vs the hand flush rule",
          code: `  HAND flush:  4 of one suit        = 4   (5 with starter)
  CRIB flush:  needs ALL FIVE suited = 5   (4 suited = ZERO)

  CRIB: 2(S) 6(S) 9(S) K(S)  + starter 4(H)
    fifteens: 6+9, 2+4+9 = 4
    flush:    only 4 spades, starter is a heart -> 0
    -> crib counts 4, NOT 8

  Same four cards in a HAND would score the flush (4).`,
        },
      },
      incident: {
        title: "The Flush That Isn't",
        when: "Every dealer's crib",
        where: "The show",
        impact: "The four-card crib flush is the most common scoring mistake in cribbage — claimed by beginners who forget the crib needs all five cards suited",
        body: [
          "A dealer turns over a crib of four spades and reaches to peg 4 for the flush — but the starter is a heart, and in the crib that flush is worth nothing. It is the single most common scoring error in the game, and under muggins it can cost the over-counter the points they wrongly claimed.",
          "The rule rewards players who count the crib deliberately:\n- Run the same order, then pause on the flush and confirm all five suits match before pegging it.\n- Carry the rule into your discarding: don't throw to your crib expecting a flush unless you can realistically get all five suited.\n- Master it and the crib becomes what it should be — a second hand you count with confidence, every deal.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Counts Like a Hand", sub: "fifteens, runs, pairs, nobs", type: "system" },
          { label: "Flush Is Stricter", sub: "all five suits must match", type: "attacker" },
          { label: "Four Suited = Zero", sub: "in the crib only", type: "victim" },
          { label: "Counted Last", sub: "by the dealer alone", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle codifies the crib's separate flush rule" },
        { year: 1900, event: "Six-card cribbage fixes the dealer's four-card crib", highlight: true },
        { year: 1980, event: "ACC rules confirm the all-five-suited crib flush requirement" },
        { year: 2024, event: "The four-card crib flush remains the most common scoring error" },
      ],
      keyTakeaways: [
        "The crib scores like a hand for fifteens, runs, pairs, and nobs",
        "A crib flush requires ALL FIVE cards (including the starter) to share one suit, for 5",
        "A four-card crib flush with a non-matching starter scores zero",
        "Count the crib in the same order, then carefully verify the flush before pegging it",
      ],
      references: [
        { title: "Cribbage — the crib and flush rules", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage flush scoring — ACC", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-04-q1", type: "The Exception", challenge: "How the crib differs.", text: "How does scoring the crib differ from scoring a hand?", options: ["A crib flush needs all five cards in one suit; a four-card crib flush scores nothing", "The crib does not score fifteens", "The crib scores double", "The crib ignores runs"], correctIndex: 0, explanation: "Everything counts the same except the flush: the crib needs all five cards suited." },
        { id: "cribbage-4-04-q2", type: "Four Suited", challenge: "Almost a flush.", text: "A crib has four spades plus a heart starter. How many flush points?", options: ["0", "4", "5", "1"], correctIndex: 0, explanation: "A four-card crib flush with a non-matching starter scores zero — the crib needs all five suited." },
        { id: "cribbage-4-04-q3", type: "Crib Nobs", challenge: "Does it count?", text: "Does 'his nobs' (the held Jack of the starter's suit) score in the crib?", options: ["Yes — nobs counts in the crib just like a hand", "No, never in the crib", "Only on the dealer's deal", "Only if it is a flush"], correctIndex: 0, explanation: "Nobs scores in the crib exactly as in a hand; only the flush rule differs." },
        { id: "cribbage-4-04-q4", type: "Count the Crib", challenge: "Add it up.", text: "Count the crib 3-7-8-Q-5, all diamonds (a five-card flush).", options: ["11", "6", "9", "10"], correctIndex: 0, explanation: "Fifteens 7+8, Q+5, and 3+5+7 = 6; full five-card crib flush = 5; total 11." },
        { id: "cribbage-4-04-q5", type: "Who Counts", challenge: "Whose hand, when.", text: "Who counts the crib, and when?", options: ["The dealer, last — after both players' hands", "The non-dealer, first", "Both players split it", "It is counted before the hands"], correctIndex: 0, explanation: "The crib belongs to the dealer and is counted last, after the pone's and dealer's hands." },
      ],
    },
  },

  // ─── cribbage-4-05: The Cribbage Board & Position ─────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The skunk line", location: "Hole 91 on the board", era: "Modern", emoji: "🛤️" },
    id: "cribbage-4-05",
    order: 5,
    title: "The Cribbage Board & Position",
    subtitle: "The streets, the 91-point skunk line, and knowing where you stand",
    category: "sports",
    xp: 103,
    badge: { id: "cribbage4-badge-05", name: "Board Reader", emoji: "🛤️" },
    challengeType: "quiz",
    info: {
      tagline: "A cribbage board is not just a scorekeeper — it is a map of the game. Reading your position on its 'streets', knowing how far you are from the 91-point skunk line and the 121 finish, and tracking the gap to your opponent turns raw points into real strategy.",
      year: 2024,
      overview: [
        "The board is laid out in segments players call STREETS:\n- A standard 121-board has two long rows of holes per player, often grouped visually into stretches of holes (commonly fives) that players treat as 'streets'.\n- Tracking which street you are in gives an instant read on whether you are early, mid, or near the finish.\n- The board's design — the trailing peg of the two-peg pair always shows your last move — keeps the position honest.",
        "Two landmarks matter most:\n- THE SKUNK LINE at hole 91 — if you win while your opponent's front peg is still short of 91 (31+ points back), you 'skunk' them, usually scoring a double game.\n- THE FINISH at hole 121 — first peg to reach or pass it wins; you need not land exactly on it.\n- The double-skunk line sits at 61; an opponent stuck below it loses an even bigger margin.",
        "Knowing where you stand drives every decision:\n- Counting the GAP to your opponent tells you whether to attack (you're behind) or defend (you're ahead).\n- Counting your distance to 121 tells you whether you can count out this hand, and counting their distance to 91 tells you whether a skunk is in reach.\n- Position, not just points, is what an expert reads before choosing a line of play.",
      ],
      technical: {
        title: "Reading the Streets, the Skunk Line, and the Gap",
        body: [
          "Board awareness is a constant background calculation:\n- Subtract your peg from 121 to know how many points you need; subtract the opponent's from 121 for theirs.\n- Compare the two to know the gap and who is on schedule against the '26-per-round' par.\n- Note the opponent's distance to 91 — if a strong dealing turn could finish them before they cross it, you press for the skunk.",
          "The skunk lines reshape end-of-game strategy:\n- On a 121 board, 91 is the single-skunk line and 61 the double-skunk line; in tournament match scoring these are worth extra game points.\n- A big leader pushes hard to skunk rather than coast; a trailing player nearing 91 plays to climb past it and avoid the double loss.\n- Reading the board is therefore not just bookkeeping — it changes which keep and which discard is correct.",
        ],
        codeExample: {
          label: "Reading position on a 121 board",
          code: `  FINISH: hole 121      ( reach or pass to win )
  SKUNK LINE: hole 91   ( opponent below it -> skunk = double )
  DOUBLE-SKUNK: hole 61 ( opponent below it -> quad )

  YOU at 105  -> need 121 - 105 = 16 to win
  OPP at 84   -> below 91, so a quick finish SKUNKS them

  Gap = 105 - 84 = 21 ahead -> play DEFENSE, press the skunk.`,
        },
      },
      incident: {
        title: "The Player Who Counts the Board, Not Just the Cards",
        when: "Every competitive game",
        where: "Club and tournament play",
        impact: "Strong players read position constantly — the board tells them when to gamble, when to grind, and when a skunk is worth pressing for",
        body: [
          "A casual player counts their hand; an expert counts the board. Before deciding how to peg or what to keep, they know their distance to 121, the opponent's distance to 121 and to 91, and the gap between the two pegs.",
          "Position is the context that makes a play correct:\n- The same hand might call for an aggressive keep when you are behind and a safe one when you are protecting a lead.\n- Pressing for a skunk when the opponent is stalled below 91 can be worth a whole extra game in a match.\n- Reading the streets and the skunk line is what turns scattered points into a coherent plan to the finish.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Streets", sub: "stretches of holes to track", type: "system" },
          { label: "Skunk Line at 91", sub: "below it = double loss", type: "attacker" },
          { label: "Finish at 121", sub: "reach or pass to win", type: "victim" },
          { label: "Read the Gap", sub: "attack behind, defend ahead", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle describes pegging the board to the target score" },
        { year: 1900, event: "The 121-point board with skunk margins becomes standard", highlight: true },
        { year: 1980, event: "The ACC fixes skunk (91) and double-skunk (61) lines for match scoring" },
        { year: 2024, event: "Position-reading is taught as a core expert skill" },
      ],
      keyTakeaways: [
        "The board's 'streets' let you read at a glance whether you are early, mid, or near the finish",
        "The skunk line is hole 91; an opponent below it when you win is skunked (a double game)",
        "First peg to reach or pass 121 wins — no exact landing needed; double-skunk line is 61",
        "Read your distance to 121, the opponent's to 121 and 91, and the gap, before choosing a line",
      ],
      references: [
        { title: "Cribbage — the board, skunks, and scoring", url: "https://en.wikipedia.org/wiki/Cribbage#Rules" },
        { title: "American Cribbage Congress — match scoring", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-05-q1", type: "Skunk Line", challenge: "The danger zone.", text: "On a 121 board, at which hole is the skunk line?", options: ["91", "61", "100", "31"], correctIndex: 0, explanation: "The skunk line is at 91 — a loser stuck below it (31+ points back) is skunked, usually a double game." },
        { id: "cribbage-4-05-q2", type: "Distance", challenge: "How far to go.", text: "Your peg is at hole 109. How many points do you need to win?", options: ["12", "16", "11", "13"], correctIndex: 0, explanation: "121 minus 109 = 12 points to reach the finish." },
        { id: "cribbage-4-05-q3", type: "Double Skunk", challenge: "An even bigger margin.", text: "At which hole is the double-skunk line on a 121 board?", options: ["61", "91", "31", "100"], correctIndex: 0, explanation: "The double-skunk line is 61; an opponent below it when you win loses an even larger margin." },
        { id: "cribbage-4-05-q4", type: "The Finish", challenge: "Land exactly?", text: "Do you have to land exactly on hole 121 to win?", options: ["No — reaching or passing 121 wins", "Yes, exactly 121", "Yes, then peg back down", "No, you need 124"], correctIndex: 0, explanation: "The first peg to reach or pass 121 wins; an exact landing is not required." },
        { id: "cribbage-4-05-q5", type: "Why Position", challenge: "Reading the board.", text: "Why do experts read board position before choosing a play?", options: ["The gap to the opponent and the finish decides whether to attack or defend", "It is required by the rules", "It changes the card values", "It speeds up the deal"], correctIndex: 0, explanation: "Position is the context that makes a keep or discard correct — attack behind, defend ahead." },
      ],
    },
  },

  // ─── cribbage-4-06: Pegging Out & The Endgame Count ───────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The count-out", location: "The race to 121 at the show", era: "Modern", emoji: "🏁" },
    id: "cribbage-4-06",
    order: 6,
    title: "Pegging Out & The Endgame Count",
    subtitle: "The pone counts first — and can win before the dealer ever counts",
    category: "sports",
    xp: 105,
    badge: { id: "cribbage4-badge-06", name: "Count-Out", emoji: "🏁" },
    challengeType: "quiz",
    info: {
      tagline: "The endgame is decided by who counts first. When both players are near 121, the non-dealer (pone) counts before the dealer — so a pone who can count out wins, even if the dealer's hand and crib would have scored more. Order is everything.",
      year: 2024,
      overview: [
        "Counting order at the show is fixed and decisive:\n- The NON-DEALER (pone) counts and pegs first, then the DEALER counts, then the dealer counts the crib.\n- Near 121, this means the pone gets the first chance to reach the finish.\n- A pone who can 'count out' — reach 121 with their hand — wins immediately, before the dealer ever counts a point.",
        "You can also peg out during the PLAY:\n- If you reach 121 mid-play — on a fifteen, a thirty-one, a pair, a run, a 'go', or the last card — you win on the spot.\n- This means a single pegging point can end the game before anyone reaches the show.\n- Tracking exactly how many points you need, and where they might come from, is the heart of endgame play.",
        "The dealer's crib advantage flips at the finish:\n- Through most of the game, dealing is an advantage because of the crib.\n- But in a tight endgame, being the pone can be better — you count first and can win before the dealer's bigger hand-plus-crib ever counts.\n- Expert players plan the last deals around who will count first.",
      ],
      technical: {
        title: "Who Counts First, Counting Out, and Planning the Finish",
        body: [
          "The count-out is a question of order and need:\n- Determine how many points you need to reach 121, then check whether your hand (and, for the dealer, hand plus crib) supplies them.\n- The pone counts first, so if the pone needs N and their hand counts N or more, the pone wins — the dealer never gets to count.\n- If the pone falls short, the dealer counts next, then the crib; the dealer's larger expected total often wins a turn later.",
          "Planning the finish shapes earlier decisions:\n- Near the end, a player keeps cards that guarantee a count-out total rather than maximizing average points.\n- A pone two or three points from home values certainty — a hand that reliably counts the needed points beats a flashier hand that might not.\n- The dealer, counting second, may need to peg aggressively in the play to reach 121 before the pone's show, since the pone counts first at the show.",
        ],
        codeExample: {
          label: "The pone counts first — and counts out",
          code: `  Both near the finish at the SHOW:
    PONE needs 8 to reach 121
    DEALER needs 6 to reach 121

  ORDER: pone counts FIRST.
    Pone's hand counts 9  -> pone reaches 121 -> PONE WINS
    Dealer never counts, even though they needed only 6.

  Lesson: near 121, counting FIRST can beat a bigger hand.`,
        },
      },
      incident: {
        title: "Won at the Show, by Counting First",
        when: "Every close finish",
        where: "The endgame",
        impact: "Countless games are decided not by who has the bigger hand but by who counts first — the pone's right to count before the dealer is a structural edge at the finish",
        body: [
          "A dealer can hold a monster hand and a fat crib and still lose, if the non-dealer counts out first. At the show the pone always counts before the dealer, so when both are within a hand of 121, the pone's smaller count can cross the line a beat sooner.",
          "This single rule reshapes endgame thinking:\n- A trailing player who will be the pone on the final deal has real hope — they count first.\n- A dealer who needs the show to win must often peg hard in the play, because the pone will count before them.\n- Knowing exactly how many points you need, and that the pone counts first, is what separates a planned win from a hopeful one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pone Counts First", sub: "then dealer, then crib", type: "system" },
          { label: "Count Out to Win", sub: "reach 121 at the show", type: "attacker" },
          { label: "Peg Out in Play", sub: "fifteen, go, or last card", type: "victim" },
          { label: "Plan the Finish", sub: "certainty over average", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle fixes the non-dealer-counts-first order at the show" },
        { year: 1900, event: "Six-card endgames make count-out timing decisive", highlight: true },
        { year: 1980, event: "Tournament play formalizes counting out and the pone's edge" },
        { year: 2024, event: "Endgame count-out planning is core to expert strategy" },
      ],
      keyTakeaways: [
        "At the show the pone (non-dealer) counts first, then the dealer, then the crib",
        "A pone who can count out reaches 121 and wins before the dealer ever counts",
        "You can also peg out during the play — on a fifteen, 31, pair, run, go, or last card",
        "Near the finish, keep cards that guarantee your needed count-out total over flashier averages",
      ],
      references: [
        { title: "Cribbage — counting order and the endgame", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage endgame strategy — ACC", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-06-q1", type: "Order", challenge: "Who's first.", text: "Who counts their hand first at the show?", options: ["The non-dealer (pone)", "The dealer", "The crib is counted first", "Whoever pegged more"], correctIndex: 0, explanation: "The pone counts first, then the dealer, then the crib — which decides close endgames." },
        { id: "cribbage-4-06-q2", type: "Count Out", challenge: "The race.", text: "Pone needs 8 to win and the dealer needs 6. The pone's hand counts 9. Who wins?", options: ["The pone — they count first and reach 121", "The dealer — they needed fewer", "Both tie", "The crib decides"], correctIndex: 0, explanation: "The pone counts first; counting 9 reaches 121 before the dealer ever counts." },
        { id: "cribbage-4-06-q3", type: "In the Play", challenge: "Win mid-hand.", text: "Can you win during the pegging phase, before the show?", options: ["Yes — reaching 121 on a peg (fifteen, 31, go, last card) wins immediately", "No, only at the show", "Only the dealer can", "Only on a flush"], correctIndex: 0, explanation: "Reaching 121 at any moment in the play ends the game on the spot." },
        { id: "cribbage-4-06-q4", type: "Certainty", challenge: "Near the finish.", text: "Near 121, what should guide your keep?", options: ["Cards that guarantee the exact points you need to count out", "Always the highest-average hand", "The most cards of one suit", "Whatever has a Jack"], correctIndex: 0, explanation: "At the finish, certainty of counting out beats a flashier hand that might fall short." },
        { id: "cribbage-4-06-q5", type: "The Flip", challenge: "When pone is better.", text: "Why can being the pone be an advantage in a tight endgame?", options: ["The pone counts first and can win before the dealer's bigger hand counts", "The pone gets the crib", "The pone deals", "The pone cuts twice"], correctIndex: 0, explanation: "Counting first lets a pone reach 121 before the dealer, flipping the usual crib edge." },
      ],
    },
  },

  // ─── cribbage-4-07: Strategy by Score ─────────────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "Offense and defense", location: "Where the score sets the plan", era: "Modern", emoji: "⚖️" },
    id: "cribbage-4-07",
    order: 7,
    title: "Strategy by Score",
    subtitle: "Attack when behind, defend when ahead — and discard to match",
    category: "sports",
    xp: 108,
    badge: { id: "cribbage4-badge-07", name: "Score Strategist", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "There is no single 'best' play in cribbage — only the best play for your position. Behind on the board, you take risks and chase points. Ahead, you starve the game and protect your lead. The score dictates both your pegging and your discards.",
      year: 2024,
      overview: [
        "The core principle is simple: let the score choose your mode:\n- BEHIND -> play OFFENSE: take risks, keep and throw for maximum points, gamble in the play to catch up.\n- AHEAD -> play DEFENSE: deny the opponent points, concede small pegs to avoid big ones, throw safe cards.\n- Even -> lean slightly to whoever has the next crib and the next deal.",
        "Discarding follows the same logic:\n- Behind, you load your own crib aggressively and may break up a hand to chase a bigger total.\n- Ahead, you throw dead cards to the opponent's crib and keep hands that deny pegging chances, even at a small cost to your own count.\n- The same six cards can call for a different layaway depending on whether you are chasing or protecting.",
        "Pegging mode shifts with the score too:\n- Behind, you lead and respond to create scoring chances — pairs, runs, the last card — accepting some risk.\n- Ahead, you play safe leads, avoid totals of 5 and 21, and are happy to concede a 'go' rather than hand over a run or a fifteen.\n- Reading the board (the previous stages) is what tells you which mode you are in.",
      ],
      technical: {
        title: "Choosing Offense or Defense, and Discarding to Match",
        body: [
          "Mode selection comes straight from board position:\n- Compare your distance to 121 with the opponent's, and check the par pace (~26 per round); falling behind means switch to offense.\n- Offense values variance — you would rather have a chance at a big hand or a big peg than a safe small one.\n- Defense values certainty and denial — you accept a guaranteed small loss to prevent a possible large one.",
          "The discard is where strategy by score bites hardest:\n- On your own deal, behind, feed your crib with combining cards (5s, connectors) even if it weakens your hand.\n- On the opponent's deal, ahead, throw widely separated dead cards and never give them a 5 or a connected pair.\n- A defender protecting a lead will sometimes keep a lower-scoring but safer hand specifically to limit the opponent's pegging and crib chances.",
        ],
        codeExample: {
          label: "Let the score pick your mode",
          code: `  BEHIND  -> OFFENSE
    keep/throw for MAX points; gamble in the play
    feed your own crib hard; chase pairs and runs

  AHEAD   -> DEFENSE
    deny points; concede small pegs, avoid big ones
    throw DEAD cards to their crib; never give a 5

  EVEN    -> lean toward whoever has the next crib

  The same six cards can call for a different discard
  depending on whether you chase or protect.`,
        },
      },
      incident: {
        title: "Same Cards, Different Plan",
        when: "Every deal of a close game",
        where: "The board",
        impact: "Expert cribbage is positional — the correct keep and the correct discard change with the score, which is why strong players never play a hand the same way twice",
        body: [
          "Give two experts the identical six cards but different scores and they will often make different plays. The leader throws safe and keeps a denying hand; the trailer loads the crib and keeps for maximum points. Neither is 'wrong' — each is correct for their position.",
          "This is what makes cribbage a strategic game rather than a counting drill:\n- The score is a constant input to every decision, from the lead card to the layaway.\n- Knowing when to switch from grinding defense to all-out offense is the mark of a seasoned competitor.\n- Combined with board reading, strategy by score is how points on the board translate into a plan to win.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Score", sub: "behind, ahead, or even", type: "system" },
          { label: "Behind: Offense", sub: "gamble, chase points", type: "attacker" },
          { label: "Ahead: Defense", sub: "deny, throw safe", type: "victim" },
          { label: "Discard to Match", sub: "feed or starve the crib", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle hints at adjusting play to the state of the game" },
        { year: 1900, event: "Six-card strategy formalizes offense vs defense", highlight: true },
        { year: 1980, event: "Tournament theory ties discard choice to board position" },
        { year: 2024, event: "Solvers confirm score-dependent discard decisions" },
      ],
      keyTakeaways: [
        "Behind, play offense: take risks and keep/throw for maximum points",
        "Ahead, play defense: deny the opponent points and concede small pegs to avoid big ones",
        "Discard to match — feed your own crib when chasing, starve the opponent's when protecting",
        "The same six cards can call for a different play depending on the score",
      ],
      references: [
        { title: "Cribbage — strategy and the score", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage offense and defense — ACC", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-07-q1", type: "Behind", challenge: "Chasing.", text: "What strategy fits being well behind on the board?", options: ["Offense — take risks and play for maximum points", "Defense — concede points safely", "Always pass", "Throw your best cards to the opponent"], correctIndex: 0, explanation: "Behind, you must take risks and chase points to catch up — offense." },
        { id: "cribbage-4-07-q2", type: "Ahead", challenge: "Protecting.", text: "What strategy fits holding a commanding lead?", options: ["Defense — deny points and throw safe cards", "Offense — gamble for big hands", "Give the opponent your 5s", "Ignore the crib"], correctIndex: 0, explanation: "Ahead, you protect the lead by denying points and conceding only small ones." },
        { id: "cribbage-4-07-q3", type: "Defensive Throw", challenge: "Guard the box.", text: "Ahead and on defense, which is the worst card to throw into the opponent's crib?", options: ["A 5", "A lone King", "A 2 of a different suit", "A widely separated low card"], correctIndex: 0, explanation: "The 5 is the best fifteen-maker — never hand it to an opponent's crib on defense." },
        { id: "cribbage-4-07-q4", type: "Offensive Throw", challenge: "Fuel your crib.", text: "Behind and on your own deal, what kind of discard fits an offensive plan?", options: ["Combining cards (5s, connectors) that load your own crib", "Two dead, unconnected cards", "Your highest cards only", "Whatever keeps a flush"], correctIndex: 0, explanation: "On offense, feed your own crib with combining cards to maximize points, even at a small cost to the hand." },
        { id: "cribbage-4-07-q5", type: "The Input", challenge: "What sets the mode.", text: "What determines whether you play offense or defense?", options: ["Your position on the board relative to the opponent", "The suit of the starter", "The number of face cards you hold", "Who dealt first"], correctIndex: 0, explanation: "Board position — your score versus the opponent's — sets offense or defense." },
      ],
    },
  },

  // ─── cribbage-4-08: Muggins ───────────────────────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "Muggins", location: "The rule that punishes a miscount", era: "Modern", emoji: "🫳" },
    id: "cribbage-4-08",
    order: 8,
    title: "Muggins",
    subtitle: "Claim the points your opponent missed — but only the ones they really had",
    category: "sports",
    xp: 110,
    badge: { id: "cribbage4-badge-08", name: "Muggins Hunter", emoji: "🫳" },
    challengeType: "quiz",
    info: {
      tagline: "Muggins is cribbage's sharpest edge: if your opponent under-counts their own hand and announces too few points, you can call 'muggins' and peg the points they missed. It rewards the careful counter and punishes the careless one.",
      year: 2024,
      overview: [
        "Muggins is an optional but common rule in serious play:\n- When a player counts their hand or crib and announces FEWER points than it actually contains, the opponent may call 'muggins'.\n- The opponent then PEGS the difference — the points the counter failed to claim.\n- It is the reason expert counting (the whole point of this epoch) matters: a missed combination can be stolen.",
        "Muggins has firm limits — it is not a free-for-all:\n- You can only claim points the hand ACTUALLY contained but the owner failed to announce.\n- You cannot 'muggins' points that were never there; over-claiming has no effect.\n- It applies to a player's own under-count, not to over-counting — and must usually be called promptly, before the next deal or play.",
        "Muggins changes table behavior:\n- Counters slow down and announce clearly, because a rushed count can be punished.\n- Opponents watch every count closely, ready to pounce on a missed double run, fifteen, or flush.\n- In a friendly kitchen game muggins is often waived; in clubs and tournaments it is frequently in force.",
      ],
      technical: {
        title: "Calling Muggins Correctly and Why It Rewards Counting",
        body: [
          "Muggins is a disciplined, bounded steal:\n- The counter announces a total; if it is short of the true value, the opponent calls 'muggins' and pegs exactly the missed amount.\n- The classic targets are under-counted double runs (a 24 called as 12), forgotten flushes, missed three-card fifteens, and overlooked nobs.\n- Because the points must really exist, the muggins-caller has to count the opponent's hand correctly too — it rewards skill on both sides.",
          "Timing and scope keep muggins fair:\n- It must typically be claimed immediately, before play or counting moves on.\n- It only covers a player's failure to claim their OWN points; it does not let you invent points.\n- Strategically, muggins raises the cost of every counting error, which is exactly why mastering fast, exact counting (stage 1) and the tricky hands (stage 2) pays off.",
        ],
        codeExample: {
          label: "Spotting and calling a muggins",
          code: `  OPPONENT shows: 7 8 7 8  + starter 9, announces "16".

  TRUE COUNT:
    fifteens 7+8 (x4)            = 8
    runs 7-8-9 (x4)              = 12
    pairs 7-7, 8-8               = 4
    -------------------------------- = 24

  They claimed 16, missed 8.
  CALL "MUGGINS" -> you peg the 8 they left behind.

  (You can only take points that were really there.)`,
        },
      },
      incident: {
        title: "The Points You Leave Behind",
        when: "Club and tournament play",
        where: "The show",
        impact: "Muggins turns counting into a high-stakes act — a forgotten double run does not just go unscored, it is handed to an alert opponent",
        body: [
          "In a friendly game a forgotten point is forgiven. Under muggins it is forfeited to whoever is paying attention. Miscount a 24-point hand as 12 and a sharp opponent calls 'muggins', pegging the eight points you failed to claim — for themselves.",
          "Muggins is the enforcement mechanism behind expert counting:\n- It rewards the disciplined counter who never misses a combination.\n- It punishes the careless one twice — they lose the points and the opponent gains them.\n- And it keeps everyone honest about the limits: you can only take points that genuinely existed, never points you wish were there.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Opponent Under-Counts", sub: "announces too few points", type: "system" },
          { label: "Call 'Muggins'", sub: "promptly, before play moves on", type: "attacker" },
          { label: "Peg the Difference", sub: "only points that existed", type: "victim" },
          { label: "Rewards Counting", sub: "punishes the careless", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Early rule sets allow claiming an opponent's overlooked points" },
        { year: 1900, event: "Muggins becomes a standard optional rule in serious play", highlight: true },
        { year: 1980, event: "The ACC codifies muggins for tournament cribbage" },
        { year: 2024, event: "Muggins remains common in clubs, often waived at the kitchen table" },
      ],
      keyTakeaways: [
        "Muggins lets you peg the points an opponent fails to claim in their own hand or crib",
        "You can only take points that actually existed — you cannot invent or over-claim",
        "It applies to a player's under-count, not over-counting, and must be called promptly",
        "Muggins is why fast, exact counting matters — a missed combination can be stolen",
      ],
      references: [
        { title: "Cribbage — the muggins rule", url: "https://en.wikipedia.org/wiki/Cribbage#Muggins" },
        { title: "Muggins and counting discipline — ACC", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-08-q1", type: "The Rule", challenge: "What muggins does.", text: "What does the muggins rule let you do?", options: ["Peg the points your opponent failed to claim in their own hand", "Replay a bad deal", "Double your own score", "Make the opponent skip a turn"], correctIndex: 0, explanation: "Muggins lets an alert opponent claim the points the counter missed." },
        { id: "cribbage-4-08-q2", type: "Spot It", challenge: "How many missed?", text: "Your opponent shows 7-8-7-8 with a 9 starter and announces '16'. How many can you muggins?", options: ["8 — the hand is really worth 24", "0 — they were correct", "4", "12"], correctIndex: 0, explanation: "The hand is 24 (8 fifteens, 12 runs, 4 pairs); they claimed 16, so you peg the missing 8." },
        { id: "cribbage-4-08-q3", type: "The Limit", challenge: "Only real points.", text: "Your opponent counts their hand fully and correctly. Can you call muggins?", options: ["No — muggins only takes points they actually failed to claim", "Yes, always", "Yes, if you want their crib", "Only if they have a Jack"], correctIndex: 0, explanation: "Muggins covers genuinely missed points; you cannot claim points that were correctly counted." },
        { id: "cribbage-4-08-q4", type: "Spot It Again", challenge: "Dense hand.", text: "Opponent shows 5-5-5-6 with a 4 starter and announces '14'. How many can you muggins?", options: ["9 — the hand is really worth 23", "0", "5", "7"], correctIndex: 0, explanation: "Fifteens 8 + triple run 9 + pair royal 6 = 23; they claimed 14, so you peg the missing 9." },
        { id: "cribbage-4-08-q5", type: "Timing", challenge: "When to call.", text: "When must muggins usually be called?", options: ["Promptly, before play or counting moves on", "Any time before the game ends", "Only after the next deal", "At the end of the match"], correctIndex: 0, explanation: "Muggins must typically be claimed immediately, before play or counting continues." },
      ],
    },
  },

  // ─── cribbage-4-09: Odds & Expected Values ────────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "Expected value", location: "Where cribbage becomes math", era: "Modern", emoji: "📊" },
    id: "cribbage-4-09",
    order: 9,
    title: "Odds & Expected Values",
    subtitle: "The 26 theory, the average crib, and the value of the cut",
    category: "sports",
    xp: 114,
    badge: { id: "cribbage4-badge-09", name: "EV Master", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "At the highest level, cribbage is a game of probabilities. Experts discard by expected value, judge their pace against the '26 theory', and know the average worth of a crib and the odds that the cut will help. The starter is unknown — so you play the averages.",
      year: 2024,
      overview: [
        "Expert discarding rests on EXPECTED VALUE (EV):\n- The starter is unknown when you discard, so you cannot know your exact score — you compute the AVERAGE over all possible cut cards.\n- For each candidate two-card throw, average the hand-plus-crib points across every starter, then pick the throw with the best NET expectation (add the crib on your deal, subtract it on theirs).\n- Published tables and solvers give these values for every six-card holding; masters internalize the patterns.",
        "A few benchmarks anchor a strong player's pace:\n- THE '26 THEORY' — over a full game the dealer should average about 26 points per round across hand, crib, and pegging; falling short means you are behind par.\n- THE AVERAGE HAND scores roughly 4 to 5 points before the crib.\n- THE AVERAGE CRIB is worth about 4 to 5 points to the dealer — a steady edge that is the reason the deal is valuable.",
        "Odds refine the close decisions:\n- The probability the cut improves your hand depends on which ranks help; a hand with many 'magic' starters is worth keeping.\n- Pegging probabilities — the chance an opponent can pair your lead or reach a key total — guide safe versus risky play.\n- None of this replaces counting; it layers probability on top of exact arithmetic to choose between near-equal options.",
      ],
      technical: {
        title: "Computing Discard EV, Par Scores, and Cut Odds",
        body: [
          "EV-based discarding is the engine of expert play:\n- For each two-card throw, sum the resulting hand score with each of the possible starters, average them, and add or subtract the crib's expected value depending on whose crib it is.\n- The throw with the highest net expectation is the 'correct' discard; this is a near-solved problem with published tables.\n- A master does not recompute at the table — they have absorbed the patterns until the EV-optimal play feels automatic.",
          "Par scores and odds give a running self-check:\n- The '26 theory' and the ~4.5-point average hand let you sense whether you are ahead of schedule, telling you when to gamble (behind par) or play safe (ahead).\n- Cut odds — the share of starters that help your specific hand — separate a fragile keep from a robust one.\n- Together, EV, par, and odds turn the layaway and the keep from guesses into calculations.",
        ],
        codeExample: {
          label: "Choosing a discard by expected value",
          code: `  Your deal (your crib). For each candidate throw:

    NET EV(throw) = avg(hand score over all starters)
                  + avg(crib value over all starters)

  Pick the throw with the highest NET EV.
  (On the opponent's deal, SUBTRACT the crib value.)

  BENCHMARKS:
    average hand  ~ 4 to 5 points
    average crib  ~ 4 to 5 points (to the dealer)
    "26 theory"   ~ aim 26 points per round`,
        },
      },
      incident: {
        title: "Playing the Averages",
        when: "Every discard",
        where: "The layaway",
        impact: "Because the starter is unknown, the best discard is a probability calculation — expert cribbage borrows the same expected-value thinking that defines strong poker and backgammon",
        body: [
          "When you lay away two cards, you do not yet know the starter — so there is no 'exact' best throw, only the one with the best average outcome. Experts treat this exactly like a poker odds problem: compute (or recall) the expected value over every possible cut and choose accordingly.",
          "The benchmarks make the math usable at speed:\n- Knowing the average hand and crib are each about 4 to 5 points, and aiming for ~26 per round, gives a constant sense of pace.\n- Knowing the cut odds for your specific hand tells you whether to keep a guaranteed-decent hand or gamble on a high-ceiling one.\n- This probabilistic layer, sitting on top of exact counting, is what defines true cribbage mastery.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Starter Unknown", sub: "so play the averages", type: "system" },
          { label: "Discard by EV", sub: "best over all cut cards", type: "attacker" },
          { label: "Par: 26 Theory", sub: "judge your pace", type: "victim" },
          { label: "Average Crib ~4.5", sub: "the dealer's edge", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's treatise begins the analytical study of cribbage odds" },
        { year: 1900, event: "Six-card cribbage makes discard EV the central skill", highlight: true },
        { year: 1980, event: "Players publish expected crib values and par scores" },
        { year: 2024, event: "Discard solvers compute the EV-optimal throw for any hand" },
      ],
      keyTakeaways: [
        "Discard by expected value — the best average score over all possible starter cards",
        "The '26 theory' sets a par of about 26 points per round (hand, crib, and pegging)",
        "The average hand and the average crib are each worth roughly 4 to 5 points",
        "The starter is unknown at the layaway, so the best throw is a probability calculation",
      ],
      references: [
        { title: "Cribbage statistics — expected values", url: "https://en.wikipedia.org/wiki/Cribbage_statistics" },
        { title: "Cribbage — discard strategy and odds", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-09-q1", type: "26 Theory", challenge: "Par for the round.", text: "What per-round point target does the '26 theory' suggest for the dealer?", options: ["About 26 points across hand, crib, and pegging", "About 60 points", "Exactly 15 points", "About 10 points"], correctIndex: 0, explanation: "The '26 theory' uses about 26 points per round as a par benchmark." },
        { id: "cribbage-4-09-q2", type: "Average Crib", challenge: "The dealer's edge.", text: "About how many points is the average crib worth to the dealer?", options: ["Roughly 4 to 5 points", "About 15 points", "About 1 point", "About 10 points"], correctIndex: 0, explanation: "The average crib is worth around 4 to 5 points — a steady edge that makes dealing valuable." },
        { id: "cribbage-4-09-q3", type: "Why EV", challenge: "The unknown cut.", text: "Why do experts pick a discard by expected value rather than current hand points?", options: ["The starter is unknown, so EV averages the result over all possible cut cards", "Because EV is required by the rules", "To always keep a flush", "Because hand points never matter"], correctIndex: 0, explanation: "Since the starter is unknown at the layaway, the best throw is the one with the best average over all cuts." },
        { id: "cribbage-4-09-q4", type: "Best Keep", challenge: "Four fives.", text: "On your deal with 5-5-5-5-8-K, what is the highest-EV play?", options: ["Keep the four 5s (a 20-point hand) and throw 8-K to your crib", "Keep 5-5-8-K and throw two 5s", "Throw all four 5s", "Keep 8-K and throw the 5s"], correctIndex: 0, explanation: "Four 5s score 20 on their own (eight fifteens + double pair royal), more with a ten-card cut — the best keep by far." },
        { id: "cribbage-4-09-q5", type: "Average Hand", challenge: "Typical count.", text: "About how many points does a typical four-card hand score before the crib?", options: ["Around 4 to 5 points", "Around 15 points", "Around 29 points", "Exactly 0 points"], correctIndex: 0, explanation: "The average hand is roughly 4 to 5 points, which helps gauge whether a hand is unusually strong or weak." },
      ],
    },
  },

  // ─── cribbage-4-10: Putting It Together ────────────────────────────────────────
  {
    epochId: "cribbage-4",
    wonder: { name: "The complete game", location: "Where every skill comes together", era: "Modern", emoji: "🎯" },
    id: "cribbage-4-10",
    order: 10,
    title: "Putting It Together",
    subtitle: "A full strategic game and the world of ACC tournament play",
    category: "sports",
    xp: 118,
    badge: { id: "cribbage4-badge-10", name: "Tournament Ready", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "Expert cribbage is the sum of its parts: exact counting, EV-based discards, smart pegging, and constant board awareness, all woven into a single game plan. This is where it comes together — a full strategic walkthrough and a look at the organized tournament world.",
      year: 2024,
      overview: [
        "A complete game blends every skill in this epoch:\n- DISCARD by expected value, adjusted for whose crib it is and your position on the board.\n- PEG by score — offense when behind, defense when ahead — while tracking dangerous totals.\n- COUNT exactly and fast at the show, never missing a double run or a flush, and call muggins when the opponent slips.",
        "The endgame ties it all to the board:\n- Track your distance to 121 and the opponent's, and remember the pone counts first.\n- Plan the last deals around who will count out first, and press for a skunk if the opponent stalls below 91.\n- Keep cards that guarantee your needed count-out total rather than chasing a flashier average.",
        "Organized cribbage is a real competitive ladder:\n- The AMERICAN CRIBBAGE CONGRESS (founded 1980) sanctions tournaments, ranks players, and awards master titles.\n- Tournament games are scored as MATCH POINTS, with skunks counting extra, so a big leader presses for the skunk.\n- The same arithmetic a beginner learns as 'fifteen-two' scales into a deep theory studied the way chess players study openings.",
      ],
      technical: {
        title: "A Strategic Walkthrough and the Tournament World",
        body: [
          "Putting it together is a sequence of linked decisions:\n- At the layaway, weigh the EV of each throw and adjust for the crib's owner and the board; behind, you load your crib, ahead, you starve theirs.\n- In the play, pick offense or defense by score, avoid handing over fifteens and 31s, and trap when the moment is right.\n- At the show, count in the fixed order, take every point, and use muggins to punish the opponent's misses.",
          "The competitive scene rewards this integrated skill:\n- ACC tournaments use standardized rules (muggins, skunks, match scoring) and a ranking system that turns the path from beginner to expert into a structured ladder.\n- Match-point scoring with skunk bonuses means a strong player manages not just wins but margins.\n- Four centuries after Suckling, cribbage endures because it is simple to learn and deep enough to study for a lifetime — exactly the blend this epoch has built.",
        ],
        codeExample: {
          label: "One hand, every skill",
          code: `  DEAL (your crib): 4 5 6 6 7 J
    EV DISCARD: keep 4-5-6-6 (double run = 12),
                throw 7-J to YOUR crib.
  PLAY: pick offense/defense by the score; dodge 5 and 21.
  SHOW: count in order -> fifteens, runs, pairs, flush, nobs.
  ENDGAME: pone counts first; track distance to 121;
           press for the skunk if opponent is below 91.
  ACC: match points, skunks count extra.`,
        },
      },
      incident: {
        title: "From Pub Pastime to Sanctioned Sport",
        when: "1980-present",
        where: "American Cribbage Congress",
        impact: "Organized play revealed how deep cribbage's strategy runs — tournament players study discard EV, par scores, and board position the way chess players study openings",
        body: [
          "For most of its history cribbage was a social game learned at home and played in pubs and wardrooms. In 1980 the American Cribbage Congress organized the competitive scene — sanctioning tournaments, ranking players, awarding master titles, and fixing a standard rulebook including muggins and skunk scoring.",
          "Tournament play shows the game's true depth:\n- Every skill in this epoch — counting, EV discards, pegging by score, board reading, the endgame count — combines into a single plan to the finish.\n- Match-point scoring with skunk bonuses rewards players who manage margins, not just wins.\n- The result is a four-century-old game that is still simple enough to teach in minutes and deep enough to master over a lifetime.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Discard by EV", sub: "and by board position", type: "system" },
          { label: "Peg by Score", sub: "offense or defense", type: "attacker" },
          { label: "Count & Muggins", sub: "take every point", type: "victim" },
          { label: "Win the Endgame", sub: "pone counts first; skunk", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Suckling refines Noddy into cribbage, the game played to this day" },
        { year: 1900, event: "Six-card cribbage becomes the standard competitive form" },
        { year: 1980, event: "The American Cribbage Congress is founded to sanction tournaments", highlight: true },
        { year: 2024, event: "Discard solvers and EV tables define modern expert play" },
      ],
      keyTakeaways: [
        "Expert cribbage combines exact counting, EV discards, pegging by score, and board awareness",
        "In the endgame, remember the pone counts first and plan to count out before the dealer",
        "Press for the skunk (opponent below 91) when you hold a commanding lead",
        "ACC tournaments use match-point scoring with skunks counting extra — manage margins, not just wins",
      ],
      references: [
        { title: "American Cribbage Congress", url: "https://en.wikipedia.org/wiki/American_Cribbage_Congress" },
        { title: "Cribbage — strategy and tournament play", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-4-10-q1", type: "Best Keep", challenge: "Put it together.", text: "On your deal you hold 4-5-6-6-7-J. What is the best keep for hand points?", options: ["4-5-6-6 — a 12-point double run", "5-6-6-7", "6-6-7-J", "4-5-6-7"], correctIndex: 0, explanation: "4-5-6-6 makes two runs of three (6), two fifteens of 4+5+6 (4), and a pair (2) = 12, the highest keep." },
        { id: "cribbage-4-10-q2", type: "Tournament", challenge: "ACC scoring.", text: "How are American Cribbage Congress tournament games typically scored?", options: ["As match points, with skunks counting extra", "By total pegs across all games", "Winner takes a fixed prize only", "By number of 29 hands"], correctIndex: 0, explanation: "ACC play uses match-point scoring, and skunks count for extra — so leaders press for the skunk." },
        { id: "cribbage-4-10-q3", type: "Endgame", challenge: "Count out.", text: "You are the pone at 116 (need 5) with 6-7-8-9 and a 10 starter. Do you win?", options: ["Yes — the hand counts 9 and the pone counts first", "No, the dealer counts first", "Only if you cut a Jack", "No, you need exactly 5"], correctIndex: 0, explanation: "The hand is 9 (two fifteens + a run of five); the pone counts first and reaches 121 to win." },
        { id: "cribbage-4-10-q4", type: "Synthesis", challenge: "The whole game.", text: "Which best captures expert cribbage?", options: ["Exact counting, EV discards, pegging by score, and reading the board", "Always keeping the highest cards", "Memorizing one fixed opening", "Relying on lucky cuts"], correctIndex: 0, explanation: "Mastery weaves counting, expected-value discards, score-based pegging, and board awareness into one plan." },
        { id: "cribbage-4-10-q5", type: "The Skunk", challenge: "Press the margin.", text: "Holding a big lead with the opponent stalled below hole 91, what should you do?", options: ["Press to finish for a skunk (a double game)", "Coast and play safe", "Deliberately lose points", "Stop pegging"], correctIndex: 0, explanation: "An opponent below 91 when you win is skunked — a double game — so a leader presses for it." },
      ],
    },
  },
];
