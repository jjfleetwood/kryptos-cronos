import type { StageConfig, EpochConfig } from "./types";

export const cribbage3Epoch: EpochConfig = {
  id: "cribbage-3",
  name: "Cribbage: Pegging Mastery",
  subtitle: "Win the play — safe leads, traps, and the running count to 31",
  description:
    "The play (pegging) is where good cribbage players quietly out-score weaker ones. This epoch is a deep, practical course in the play phase: the running count to 31 and everything it scores (fifteens, thirty-ones, pairs, pair royals, runs, the go, and last card), the right opening lead, making and denying pairs and runs, hitting and dodging the 15 and the 31, defensive 'safe-card' play, offensive traps that bait a re-pair for trips, holding low cards back for 31 and the go, counting the cards to read what the opponent holds, adjusting risk to the strength of your hand, and the razor-thin endgame where a single peg decides the game. Every lesson uses exact pegging arithmetic — face cards count 10, the ace counts 1, and the running total can never pass 31.",
  emoji: "📌",
  color: "yellow",
  unlocked: true,
};

export const cribbage3Stages: StageConfig[] = [
  // ─── cribbage-3-01: Pegging Fundamentals Recap ────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The running count", location: "The play, from 0 to 31", era: "Modern", emoji: "📌" },
    id: "cribbage-3-01",
    order: 1,
    title: "Pegging Fundamentals Recap",
    subtitle: "The running count to 31 and everything it scores",
    category: "sports",
    xp: 92,
    badge: { id: "cribbage3-badge-01", name: "Count Keeper", emoji: "📌" },
    challengeType: "quiz",
    info: {
      tagline: "Before the tactics, lock the mechanics cold. In the play, the two hands are pegged out alternately while a running total climbs toward 31 but never past it — and along the way you score fifteens, thirty-ones, pairs, runs, the go, and the last card. Master this scoreboard and pegging strategy becomes readable.",
      year: 2024,
      overview: [
        "The play is a separate scoring phase from the show, run on a single number — the running total:\n- The NON-DEALER leads the first card; players then alternate one card at a time, face-up.\n- Each card adds its pip value to the running total: ace = 1, number cards at face value, and Jack/Queen/King all = 10.\n- The total may climb to exactly 31 but can NEVER exceed it; the starter card is not played here.",
        "Points are pegged for hitting key totals and making combinations off the recently played cards:\n- FIFTEEN — a card that makes the total exactly 15 scores 2.\n- THIRTY-ONE — a card that makes the total exactly 31 scores 2.\n- PAIR 2, PAIR ROYAL (third of a rank) 6, DOUBLE PAIR ROYAL (fourth) 12; RUNS score 1 per card for the last cards forming a consecutive sequence in any order.",
        "When a player cannot add a card without passing 31, the 'go' rules close out the sub-count:\n- You say 'GO' if you have no card that keeps the total at 31 or below; the opponent then plays anything they legally can.\n- The last player able to play pegs 1 for the GO (or 2 if their card hit exactly 31), and the count resets to 0.\n- The very last card of the entire play always pegs 1 for 'last card'.",
      ],
      technical: {
        title: "The Scoreboard of the Play, Reset by Reset",
        body: [
          "Everything in the play is scored off the live sequence, not your whole hand:\n- A pair means matching the rank of the card JUST played (2); a third of that rank is pair royal (6); a fourth is double pair royal (12).\n- A run scores when the last N cards form N consecutive ranks in any order with no gap and no interloping rank — playing a 4 onto a down 6-5 makes 4-5-6 for 3.\n- Fifteen and thirty-one are the only 'total' targets; there is no points-for-21 or points-for-30.",
          "The go and the 31-reset decide who collects at the end of each sub-count:\n- If neither player can add a card under 31, the last to legally play pegs 1 (the go / last-card point).\n- Reaching exactly 31 pegs 2 and immediately resets the total to 0; after any reset, the player who did NOT play last leads the new count.\n- Play continues, resetting as needed, until all eight cards are down — then the show begins.",
        ],
        codeExample: {
          label: "One sub-count of the play",
          code: `  CARD VALUES:  A=1   2..10 = face   J,Q,K = 10
  RUNNING TOTAL starts at 0  (non-dealer leads)

  N plays 4  -> total  4
  D plays J  -> total 14
  N plays A  -> total 15   -> N pegs 2 (fifteen)
  D plays 9  -> total 24
  N plays 7  -> total 31   -> N pegs 2 (thirty-one)
  -> reset to 0; D leads the next sub-count

  Total may reach 31 but NEVER pass it.`,
        },
      },
      incident: {
        title: "The Phase Beginners Underrate",
        when: "Every deal, before the show",
        where: "The pegging phase",
        impact: "Casual players treat the play as a formality and leave several points a game on the table; strong players know the running count is a live scoreboard worth grinding",
        body: [
          "Newcomers often play their cards out almost at random, eager to get to 'the real scoring' at the show. But the play scores too, point by point, and those points are exactly the ones a careless player donates: an unguarded fifteen, a pair walked into, a go conceded that didn't have to be.",
          "Because the play scores reactively off the most recent cards, it rewards attention rather than memorization:\n- The whole game lives on one number you can see — the running total — so there is no excuse for losing track of it.\n- Knowing precisely what scores (and that 21 and 30 score nothing on their own) is the foundation every later pegging tactic builds on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Non-Dealer Leads", sub: "alternate to 31 max", type: "system" },
          { label: "Hit 15 or 31", sub: "each scores 2", type: "attacker" },
          { label: "Pairs & Runs", sub: "off the recent cards", type: "victim" },
          { label: "Go, Then Reset", sub: "1 point, count to 0", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage establishes the play-to-31 pegging phase" },
        { year: 1742, event: "Hoyle documents pegging combinations and the 'go'", highlight: true },
        { year: 1900, event: "Six-card play sets the eight-card pegging sequence" },
        { year: 2024, event: "Pegging is taught as a skill distinct from the show" },
      ],
      keyTakeaways: [
        "The running total climbs to 31 but never past it; the non-dealer leads and players alternate",
        "Hitting exactly 15 or exactly 31 each scores 2 — no other total scores by itself",
        "Pairs (2/6/12) and runs (1 per card) score off the most recently played cards",
        "Can't play under 31? Say 'go'; the last to play pegs 1 (or 2 at exactly 31), then reset to 0",
      ],
      references: [
        { title: "Cribbage — the play", url: "https://en.wikipedia.org/wiki/Cribbage#The_play" },
        { title: "Cribbage pegging rules", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-01-q1", type: "The Cap", challenge: "The ceiling.", text: "What is the highest the running total may reach in the play?", options: ["31", "15", "21", "30"], correctIndex: 0, explanation: "The total can reach exactly 31 but never exceed it; reaching 31 scores 2." },
        { id: "cribbage-3-01-q2", type: "Totals", challenge: "Scoring a number.", text: "Which running totals score points just for being reached?", options: ["Exactly 15 and exactly 31 (2 each)", "21 and 31", "Any multiple of five", "Only 31"], correctIndex: 0, explanation: "Only 15 and 31 score on their own (2 points each); 21 and 30 score nothing by themselves." },
        { id: "cribbage-3-01-q3", type: "Pair Royal", challenge: "Three in the play.", text: "Playing the third card of a rank in a row scores how much?", options: ["6 (pair royal)", "2", "3", "12"], correctIndex: 0, explanation: "A third matching card in the play is pair royal for 6; a fourth is double pair royal for 12." },
        { id: "cribbage-3-01-q4", type: "The Go", challenge: "Can't play.", text: "You can't add a card without passing 31. What do you do?", options: ["Say 'go'; the opponent plays if able and pegs the go point", "Pass your whole hand", "Reset the count to 0 yourself", "Forfeit the deal"], correctIndex: 0, explanation: "You say 'go'; the last player able to play pegs 1 (or 2 at exactly 31), then the count resets." },
        { id: "cribbage-3-01-q5", type: "Card Values", challenge: "Counting the pips.", text: "What does a Queen count in the running total?", options: ["10", "12", "13", "0"], correctIndex: 0, explanation: "Jacks, Queens, and Kings all count 10 in the play; the ace counts 1." },
      ],
    },
  },

  // ─── cribbage-3-02: The Opening Lead ──────────────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The first card", location: "The non-dealer's lead", era: "Modern", emoji: "🥇" },
    id: "cribbage-3-02",
    order: 2,
    title: "The Opening Lead",
    subtitle: "Lead a four or under — and never lead a five",
    category: "sports",
    xp: 94,
    badge: { id: "cribbage3-badge-02", name: "Safe Lead", emoji: "🥇" },
    challengeType: "quiz",
    info: {
      tagline: "The non-dealer's first card sets the whole sub-count in motion. The single most important pegging habit is choosing it well: lead a low card the opponent can't turn into 15, and above all never, ever lead a 5.",
      year: 2024,
      overview: [
        "The opening lead is a defense-first decision, and the math is simple:\n- A card you lead can be answered with a 15 if the opponent holds a card worth (15 minus your lead).\n- Lead a 4 and the opponent would need an 11 to make 15 — impossible, since no single card is worth more than 10.\n- So a lead of 4 OR UNDER (ace, 2, 3, 4) cannot be made into a fifteen by any single card.",
        "The 5 is the worst possible lead, for the same reason it is the best card to hold:\n- Lead a 5 and the opponent makes 15 with ANY of the deck's sixteen ten-valued cards (the four 10s plus twelve face cards) for an easy 2.\n- Roughly a third of the deck punishes a 5 lead instantly, which is why strong players treat leading a 5 as a beginner's tell.\n- Leads of 6 through 9 are also answerable by a single ten-or-near card (9 needs a 6, 6 needs a 9), so the safe zone is the bottom four ranks.",
        "A good lead can do double duty as a trap:\n- LEADING FROM A PAIR — a low card you hold two of (say a pair of 3s) is a strong lead: it's safe, and if the opponent pairs it for 2 you re-pair for pair royal (6).\n- Keep a low card or two in reserve, not just for the lead but for hitting 31 and grabbing the go later.\n- When every low card is equally safe, prefer the one that keeps your hand and your 31-chances flexible.",
      ],
      technical: {
        title: "Why Four-Or-Under, and the Pair-Trap Lead",
        body: [
          "The 'lead low' rule is pure arithmetic about the fifteen:\n- For a single card to make 15 on your lead, it must be worth exactly (15 minus your card). Lead 4 -> needs 11 (impossible); lead 3 -> needs 12 (impossible); aces and 2s likewise can't be fifteened by one card.\n- Lead 5 -> needs 10, and sixteen cards satisfy that; leads of 6, 7, 8, 9 each have a single answering rank that makes 15.\n- None of this means low leads are risk-free against runs or pairs — but it removes the most common giveaway, the instant fifteen.",
          "Leading from a pair turns a safe lead into a small trap:\n- You lead one of a pair of low cards. If the opponent pairs it, they peg 2 — but you play your matching card for pair royal (6), a net swing of +4 to you.\n- A cautious opponent may decline to pair, which is fine — you've still made a safe lead.\n- Don't over-lead from pairs of 5s (the 5 itself is too dangerous to lead); the trap is best with low connected-safe ranks like aces through 4s.",
        ],
        codeExample: {
          label: "Which leads can be fifteened by one card?",
          code: `  LEAD   opponent needs   makes 15?
  ----   --------------   --------
   A          14            NO
   2          13            NO
   3          12            NO
   4          11            NO   <- safe ceiling
   5          10            YES (16 ten-cards!)  BAD
   6           9            YES
   7           8            YES
   8           7            YES
   9           6            YES

  RULE: open with a 4 or under; never lead a 5.`,
        },
      },
      incident: {
        title: "The Five Lead: Cribbage's Classic Tell",
        when: "Every beginner's first games",
        where: "The pegging phase",
        impact: "Leading a 5 is so reliably punished that experienced players spot a novice the instant one hits the table",
        body: [
          "Ask any club player for the first rule of pegging and they'll say it before you finish the question: don't lead a 5. The card that is gold in your hand — pairing with a third of the deck to make fifteens — is poison the moment you lead it, because that same third of the deck now makes the fifteen against you.",
          "The fix is a single disciplined habit:\n- When you're on lead, look to the bottom of your hand first: an ace, 2, 3, or 4 is almost always the right opener.\n- If two of those low cards match, lead one and invite the pair trap.\n- Save the analysis for later streets — the lead itself should be automatic, and it should never be a 5.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead Four or Under", sub: "no single-card 15", type: "system" },
          { label: "Never Lead a 5", sub: "16 ten-cards punish it", type: "attacker" },
          { label: "Lead From a Pair", sub: "bait the re-pair (6)", type: "victim" },
          { label: "Keep Low Cards", sub: "for 31 and the go", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's writing hints at the danger of the 5 in the play" },
        { year: 1900, event: "Six-card pegging makes the opening lead a studied choice", highlight: true },
        { year: 1980, event: "Tournament play formalizes 'lead low, never a 5'" },
        { year: 2024, event: "Cribbage solvers confirm low leads as the safe default" },
      ],
      keyTakeaways: [
        "Lead a 4 or under — no single card can make 15 on a 4, 3, 2, or ace",
        "Never lead a 5: any of the sixteen ten-valued cards makes 15 on it for an easy 2",
        "Leads of 6–9 each have a single answering rank that makes 15, so the safe zone is the bottom four",
        "Leading one card of a low pair is safe and baits a pair-royal re-pair for 6",
      ],
      references: [
        { title: "Cribbage — strategy of the play", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-02-q1", type: "The Lead", challenge: "Open safely.", text: "What is the safest kind of opening lead?", options: ["A card of 4 or under", "A 5", "A face card", "A 9"], correctIndex: 0, explanation: "Lead a 4 or under — no single card can make 15 on it (a 4 would need an impossible 11)." },
        { id: "cribbage-3-02-q2", type: "The Worst Lead", challenge: "Avoid this.", text: "Why is leading a 5 the worst opening?", options: ["Any of the sixteen ten-valued cards makes 15 on it for 2", "It is against the rules", "It wastes your highest card", "It forces you to say 'go'"], correctIndex: 0, explanation: "A 5 lead lets any of the deck's sixteen ten-cards reach exactly 15 for an easy 2 points." },
        { id: "cribbage-3-02-q3", type: "The Trap", challenge: "Bait it.", text: "Why lead one card of a low pair?", options: ["It's safe, and if paired you re-pair for pair royal (6)", "It guarantees a run", "It reaches 31 instantly", "It blocks all scoring"], correctIndex: 0, explanation: "A low pair lead is safe and baits the opponent to pair for 2, so you re-pair for 6, netting +4." },
        { id: "cribbage-3-02-q4", type: "Near Leads", challenge: "Not quite safe.", text: "If you lead a 9, which single card makes 15 against you?", options: ["A 6", "A 7", "An ace", "A King"], correctIndex: 0, explanation: "9 + 6 = 15, so a lone 6 punishes a 9 lead; the bottom four ranks avoid any single-card 15." },
        { id: "cribbage-3-02-q5", type: "Reserve", challenge: "Hold something back.", text: "Beyond safety, why favor keeping a low card during the play?", options: ["To hit 31 or grab the go later", "To make a flush", "To force a redeal", "To score his nobs"], correctIndex: 0, explanation: "Low cards are flexible — they help you land on 31 and pick up the last-card/go point." },
      ],
    },
  },

  // ─── cribbage-3-03: Pairs & Runs in the Play ──────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The live sequence", location: "The last cards on the table", era: "Modern", emoji: "🔗" },
    id: "cribbage-3-03",
    order: 3,
    title: "Pairs & Runs in the Play",
    subtitle: "Make them for points — and don't set up the opponent's",
    category: "sports",
    xp: 96,
    badge: { id: "cribbage3-badge-03", name: "Combo Pegger", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "Pairs and runs are the bread-and-butter pegs of the play. Making them is worth points; carelessly setting them up for the opponent gives points away. The skill is seeing the live sequence — the most recent cards — and knowing what your card does to it.",
      year: 2024,
      overview: [
        "Pairs and runs in the play score off the cards just laid, not your whole hand:\n- PAIR — match the rank of the card just played for 2. A third of that rank is PAIR ROYAL (6); a fourth is DOUBLE PAIR ROYAL (12).\n- RUN — when the last several cards form a consecutive sequence in any order (with no break and no repeated rank in between), you score 1 per card: a run of three is 3, a run of four is 4.\n- A run can be made out of order: a 5 played onto a down 7-6 makes 5-6-7 for 3.",
        "Every pair or run you make also hands the opponent a chance to do you one better:\n- Pair the opponent's card for 2 and, if they hold the matching third, they re-pair for pair royal (6) on top of you.\n- Make a run of three and the opponent may extend it to a run of four with the right card.\n- So scoring is good, but always ask what your card lets THEM play next.",
        "Reading runs takes care, because order doesn't matter but gaps do:\n- 6-7-8 is a run of three whatever order the cards arrived; 6-7-9 is NOT a run (the 8 is missing).\n- A run is broken the moment a duplicate rank lands in the sequence, even if the cards could re-form later.\n- Count from the most recent card backward to see the longest unbroken consecutive set that includes the card you're about to play.",
      ],
      technical: {
        title: "Scoring the Sequence, and Not Gift-Wrapping the Reply",
        body: [
          "Runs in the play are scored on the tail of the sequence, in any internal order:\n- Look at the last cards played with no interrupting duplicate; if your card extends them to N consecutive ranks, you peg N.\n- Down 4-6 and you play a 5 -> the tail 4-6-5 is the consecutive set {4,5,6} -> run of three for 3.\n- Down 4-5-6 and you play a 3 or a 7 -> a run of four for 4 (the new card extends the consecutive set at either end).",
          "Avoiding the give-back is the other half of the skill:\n- Before you pair, ask: could the opponent hold the third card of that rank for a 6-point pair royal? Against a likely pair, sometimes the safe non-pairing card is better.\n- Before you make a short run, ask: does my card sit where the opponent can extend the run further than I did?\n- The strongest plays make YOUR pair or run while leaving the opponent no over-the-top reply.",
        ],
        codeExample: {
          label: "Making a run, in any order",
          code: `  DOWN: 7 then 6     (running total 13)
  YOU play 5         (total 18)
    tail = 7,6,5  -> set {5,6,7}  -> RUN OF 3 = 3

  DOWN: 5 then 6 then 7  (running total 18)
  YOU play 8         (total 26)
    tail extends to {5,6,7,8}  -> RUN OF 4 = 4

  WARNING: a duplicate rank in the tail breaks it.
    7 6 6 5  ->  the second 6 breaks the run.`,
        },
      },
      incident: {
        title: "The Pair That Cost Six",
        when: "Any careless game",
        where: "The pegging phase",
        impact: "Pairing for a quick 2 into an opponent's hidden third card is one of the most common ways players hand back a six-point pair royal",
        body: [
          "It feels free: the opponent plays an 8, you hold an 8, you pair it for 2. But if they kept two 8s, they now play the third for pair royal — six points — and your tidy little peg becomes a four-point loss. The play punishes greedy pairing more than almost any other habit.",
          "Strong peggers weigh the give-back every time:\n- Early in a hand, a pair is usually fine; late, when the opponent has shown they're holding a rank, it can be a trap.\n- The same caution applies to runs: making a three is good only if the opponent can't make a four on top of it.\n- Read the sequence, count what's likely still out, and take pairs and runs that don't invite a bigger reply.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Tail", sub: "the live sequence", type: "system" },
          { label: "Make Pairs & Runs", sub: "2/6/12 and 1-per-card", type: "attacker" },
          { label: "Mind the Reply", sub: "pair royal, longer run", type: "victim" },
          { label: "Gaps Break Runs", sub: "duplicates too", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Pairs and runs carry into the play from Noddy's scoring" },
        { year: 1742, event: "Hoyle documents in-play runs scored in any order", highlight: true },
        { year: 1900, event: "Six-card play makes pair-royal swings a common motif" },
        { year: 2024, event: "Pegging tutors teach 'pair safely' as a core habit" },
      ],
      keyTakeaways: [
        "A pair in the play is 2, pair royal 6, double pair royal 12 — off the card just played",
        "A run scores 1 per card and can be made in any order, but a gap or duplicate breaks it",
        "Pairing for 2 can hand back a 6-point pair royal if the opponent holds the third card",
        "Make pairs and runs that the opponent can't beat with a longer reply",
      ],
      references: [
        { title: "Cribbage — pairs and runs in the play", url: "https://en.wikipedia.org/wiki/Cribbage#The_play" },
        { title: "Cribbage pegging combinations", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-03-q1", type: "Runs", challenge: "Any order.", text: "The last cards down are 7 then 6. You play a 5. What do you score?", options: ["A run of three (3)", "Nothing — wrong order", "A pair (2)", "A fifteen (2)"], correctIndex: 0, explanation: "The tail 7-6-5 forms the consecutive set {5,6,7} — a run of three scores 3, order doesn't matter." },
        { id: "cribbage-3-03-q2", type: "Pair Royal", challenge: "The third card.", text: "The risk of pairing the opponent's card for 2 is that they may then...", options: ["Play the third of that rank for pair royal (6)", "Reach 31 automatically", "Score a flush", "Win instantly"], correctIndex: 0, explanation: "If the opponent holds the matching third card, they re-pair for a 6-point pair royal on top of you." },
        { id: "cribbage-3-03-q3", type: "Broken Runs", challenge: "Mind the gap.", text: "Which sequence of recent cards is NOT a run?", options: ["6-7-9", "6-7-8", "5-6-7", "8-9-10"], correctIndex: 0, explanation: "6-7-9 skips the 8, so it is not consecutive; the others are valid runs of three." },
        { id: "cribbage-3-03-q4", type: "Extending", challenge: "One better.", text: "The last cards are 4-5-6 and you play a 7. What do you score?", options: ["A run of four (4)", "A run of three (3)", "A pair (2)", "Nothing"], correctIndex: 0, explanation: "The 7 extends {4,5,6} to {4,5,6,7} — a run of four for 4 points." },
        { id: "cribbage-3-03-q5", type: "Safe Pairing", challenge: "When to hold back.", text: "When is pairing the opponent's card most dangerous?", options: ["When they may hold the third card for pair royal", "On the opening lead", "When the count is below 5", "When you are the dealer"], correctIndex: 0, explanation: "Pair into a likely third card and you donate a 6-point pair royal; sometimes the safe card is better." },
      ],
    },
  },

  // ─── cribbage-3-04: Hitting & Dodging the 15 and the 31 ───────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The two magic totals", location: "15 and 31", era: "Modern", emoji: "🎯" },
    id: "cribbage-3-04",
    order: 4,
    title: "Hitting & Dodging the 15 and the 31",
    subtitle: "Take the fifteen and the thirty-one — and don't leave them",
    category: "sports",
    xp: 98,
    badge: { id: "cribbage3-badge-04", name: "Total Control", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "Fifteen and thirty-one are the only totals that score by themselves, 2 points each. Good pegging is a constant two-sided watch: hit those totals when you can, and never leave the running count on a number that lets the opponent hit them.",
      year: 2024,
      overview: [
        "Hitting the magic totals is the most basic offense in the play:\n- If a card brings the running total to exactly 15, play it for 2.\n- If a card brings it to exactly 31, play it for 2 — and it resets the count.\n- These often beat a small pair: a guaranteed 2 for the 15 or 31 is usually worth more than a pair that risks a pair-royal reply.",
        "Dodging is the mirror image — don't leave the count where one card scores against you:\n- Leaving the total at 5 lets any ten-card make 15; leaving it at 21 lets any ten-card make 31.\n- Leaving it at 6, 7, 8, or 9 leaves a single answering rank that makes 15 (a 9 left at 6, etc.).\n- When you can't score, prefer the play that lands the count on a 'cold' number the opponent can't easily hit.",
        "The two goals can conflict, so weigh them:\n- A card that scores a 15 for you is almost always worth taking even if it advances the count.\n- When no score is available, choose the safest resting total — generally one above 15 where no single card makes 31, and not 21.\n- Track which dangerous cards (especially tens and 5s) the opponent has already spent; a total is only dangerous if the punishing card still exists.",
      ],
      technical: {
        title: "The Danger Totals, and Choosing a Cold Resting Number",
        body: [
          "A resting total T is dangerous if the opponent holds a card worth (15 minus T) or (31 minus T):\n- T = 5 -> a ten makes 15 (sixteen such cards); T = 21 -> a ten makes 31 — both very dangerous.\n- T = 6..9 -> a single rank makes 15; T = 22..26 -> a single rank makes 31 (a 5 left at 26, etc.).\n- T just above 15 with a high count (say 16-20) is often the safest place to leave it: no card makes 15, and you may be near a go.",
          "Hitting beats dodging when a real score is on offer:\n- Always take an available 15 or 31 unless doing so walks into an obvious pair-royal or run reply.\n- If you must choose a safe non-scoring play, avoid 5 and 21 above all, and prefer a total where the punishing card is scarce or already played.\n- Late in a sub-count, a high resting total (28-30) can force the opponent into a go, handing you the point.",
        ],
        codeExample: {
          label: "Hit it, or leave a cold total",
          code: `  HIT IT:
    total 24, you hold a 7  ->  play 7 -> 31 = 2
    total  6, you hold a 9  ->  play 9 -> 15 = 2

  DODGE IT (no score available):
    total 16, hold 5 / 2 / K
      play 5 -> 21  (any ten -> 31)        BAD
      play K -> 26  (a 5 -> 31)            risky
      play 2 -> 18  (no card makes 15/31)  SAFE

  Avoid leaving 5 or 21 above all else.`,
        },
      },
      incident: {
        title: "The Twenty-One Trap",
        when: "Mid-count, every game",
        where: "The pegging phase",
        impact: "Leaving the running total at 21 is the second-most-common pegging giveaway after the 5 lead — a third of the deck makes 31 on it",
        body: [
          "The count creeps to 21 and a player tosses a card without thinking — then watches the opponent drop a King for 31 and 2 points. Like the 5 lead, the 21 rest is dangerous precisely because so many cards punish it: every ten-valued card makes exactly 31.",
          "The defense is to think one card ahead:\n- Before you settle the count on a number, ask what single card would score on it for the opponent.\n- 5 and 21 are the marquee traps, but any low resting total has an answering fifteen and any total in the low 20s has an answering thirty-one.\n- When you can't score, the quietest available number — often a total in the high teens — is usually the right place to leave it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Take 15 and 31", sub: "2 points each", type: "system" },
          { label: "Never Leave 5 or 21", sub: "a ten makes 15 / 31", type: "attacker" },
          { label: "Find a Cold Total", sub: "no single-card score", type: "victim" },
          { label: "Track Spent Tens", sub: "danger needs the card", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle records the 2-point fifteen and thirty-one in play" },
        { year: 1900, event: "Six-card pegging makes resting-total safety routine", highlight: true },
        { year: 1980, event: "Tournament theory codifies the 5 and 21 danger totals" },
        { year: 2024, event: "Solvers quantify the safest resting totals by card count" },
      ],
      keyTakeaways: [
        "Hitting exactly 15 or exactly 31 each scores 2 — take it when offered",
        "Never leave the count at 5 or 21: any of sixteen ten-cards makes 15 or 31 on them",
        "Totals 6–9 leave a single answering fifteen; the low 20s leave an answering thirty-one",
        "A total a touch above 15 is often the safest cold place to rest the count",
      ],
      references: [
        { title: "Cribbage — fifteens and thirty-ones in play", url: "https://en.wikipedia.org/wiki/Cribbage#The_play" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-04-q1", type: "Hit It", challenge: "Take the points.", text: "The total is 24 and you hold a 7. What should you do?", options: ["Play the 7 to make 31 for 2", "Hold the 7", "Say 'go'", "Play a face card"], correctIndex: 0, explanation: "24 + 7 = 31, scoring 2 and resetting the count — take the guaranteed points." },
        { id: "cribbage-3-04-q2", type: "Danger Total", challenge: "The 21 trap.", text: "Why is leaving the running total at 21 dangerous?", options: ["Any ten-valued card makes 31 for the opponent", "It is illegal", "It ends the game", "It forces you to say 'go'"], correctIndex: 0, explanation: "At 21, any of the sixteen ten-cards brings the total to exactly 31 for 2 points." },
        { id: "cribbage-3-04-q3", type: "Cold Total", challenge: "Rest it safely.", text: "With no score available, where is the count usually safest to leave?", options: ["A little above 15, where no single card makes 15", "At 5", "At 21", "At a number a ten-card completes"], correctIndex: 0, explanation: "A resting total in the high teens leaves no single-card fifteen and no easy thirty-one." },
        { id: "cribbage-3-04-q4", type: "Punish a 5 Lead", challenge: "They left a 5.", text: "The opponent leads a 5 (total 5) and you hold a 10. What's best?", options: ["Play the 10 to make 15 for 2", "Pair nothing and pass", "Say 'go'", "Play a 2"], correctIndex: 0, explanation: "5 + 10 = 15, so the ten-card punishes their 5 lead for an easy 2 points." },
        { id: "cribbage-3-04-q5", type: "When Danger Lifts", challenge: "Card-count it.", text: "A resting total is only dangerous if...", options: ["The opponent still holds the card that scores on it", "It is an odd number", "You are the non-dealer", "The starter was a Jack"], correctIndex: 0, explanation: "If the punishing card (e.g., all the tens) is already played, that total is no longer dangerous." },
      ],
    },
  },

  // ─── cribbage-3-05: Defensive Pegging ─────────────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The safe card", location: "Denying the opponent", era: "Modern", emoji: "🛡️" },
    id: "cribbage-3-05",
    order: 5,
    title: "Defensive Pegging",
    subtitle: "Play safe cards, deny runs and fifteens, force the go",
    category: "sports",
    xp: 100,
    badge: { id: "cribbage3-badge-05", name: "Safe Hands", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "When you're ahead, or it's the opponent's deal, the job changes from scoring to denying. Defensive pegging means playing 'safe' cards that give nothing away, refusing runs and fifteens, and pushing the count high to force a go in your favor.",
      year: 2024,
      overview: [
        "A 'safe card' is one that leaves the opponent no immediate score:\n- It doesn't bring the total to a number they can fifteen or thirty-one.\n- It doesn't sit adjacent in rank to the last card (which would let them complete a run).\n- It doesn't pair a card they're likely holding two more of.",
        "The defensive priorities, in order:\n- DENY THE 15 AND 31 — never rest the count on 5 or 21, and watch totals that a single card completes.\n- DENY RUNS — breaking rank-adjacency is the classic safe play; a card far from the last rank can't start a run.\n- DENY PAIRS — be wary of pairing into a possible pair royal when you're protecting a lead.",
        "Late in a sub-count, defense becomes about the go:\n- If you can't hit 31 exactly, play your HIGHEST safe card to push the total up — the closer to 31, the more likely the opponent can't answer and must say go.\n- Forcing a go hands YOU the last-card point and denies them the reset lead.\n- Conceding a single go point is often the right price to avoid handing over a pair or a run.",
      ],
      technical: {
        title: "Choosing the Safe Card, and Pushing Toward the Go",
        body: [
          "To find the safe card, screen each option against the opponent's likely replies:\n- Reject any play that leaves a fifteen or thirty-one one card away (5, 21, and the single-rank totals).\n- Reject any play that sits next to the last rank, opening a run (next to a 7 invites 5-6-7 or 6-7-8 or 7-8-9).\n- Among what remains, a card whose rank is far from everything recently played is the safest — nothing consecutive can be built on it.",
          "Pushing the count is the endgame of a defensive sub-count:\n- With no exact-31 card, your highest legal card maximizes the chance the opponent is stuck and must say go.\n- A go is worth 1 to whoever played last, so forcing it is a quiet, reliable defensive peg.\n- When protecting a lead, decline low-reward pairs that risk a six-point pair royal — denying 6 is worth more than grabbing 2.",
        ],
        codeExample: {
          label: "Finding the safe card",
          code: `  DOWN: opponent led a 7   (total 7)
  YOU hold 6 / 9 / 2

    play 6 -> 13  (sits next to 7: a 5 or 8 -> run) RISKY
    play 9 -> 16  (7 then 9: an 8 -> 7-8-9 run)     RISKY
    play 2 ->  9  (nothing consecutive with 7)      SAFE

  LATE IN THE COUNT (total 20, can't hit 31):
    play your HIGHEST safe card -> push toward 30,
    forcing the opponent to say "go" -> you peg 1.`,
        },
      },
      incident: {
        title: "Winning by Giving Nothing",
        when: "Defending a lead",
        where: "The pegging phase",
        impact: "Against a strong opponent, a disciplined defensive player can hold pegging to a trickle, protecting a lead that the show alone would not",
        body: [
          "There's a version of cribbage skill that scores almost nothing in the play and still wins: the defender who never leaves a 5 or 21, never opens a run, never pairs into trouble, and quietly forces the go time after time. The opponent's pegs dry up, and a lead built at the show survives to the finish.",
          "Defense is a mode you switch into deliberately:\n- When you're ahead, or the crib is the opponent's, denying points is worth more than chasing them.\n- The safe card is rarely the flashy card — it's the quiet 2 played far from the action, or the high card that jams the count.\n- Concede the small go; refuse the big pair royal. That trade, made consistently, is what protecting a lead looks like.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Play the Safe Card", sub: "no immediate reply", type: "system" },
          { label: "Break Adjacency", sub: "deny the run", type: "attacker" },
          { label: "Refuse Risky Pairs", sub: "avoid pair royal", type: "victim" },
          { label: "Push the Go", sub: "high card jams 31", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle hints at safe play to protect a position" },
        { year: 1900, event: "Six-card pegging makes defensive technique explicit", highlight: true },
        { year: 1980, event: "Tournaments formalize defensive vs offensive pegging" },
        { year: 2024, event: "Solvers confirm 'deny first' when ahead or on their crib" },
      ],
      keyTakeaways: [
        "A safe card leaves no 15, 31, run, or risky pair for the opponent's next play",
        "Breaking rank-adjacency to the last card is the classic way to deny a run",
        "Push your highest safe card late to force a go and take the last-card point",
        "Protecting a lead, concede a small go rather than risk a six-point pair royal",
      ],
      references: [
        { title: "Cribbage — defensive play", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-05-q1", type: "Safe Card", challenge: "Give nothing.", text: "What makes a card a 'safe' play in defensive pegging?", options: ["It leaves no immediate 15, 31, run, or likely pair for the opponent", "It is your highest card", "It is a 5", "It always scores"], correctIndex: 0, explanation: "A safe card denies the opponent any immediate reply — no fifteen, thirty-one, run, or easy pair." },
        { id: "cribbage-3-05-q2", type: "Deny the Run", challenge: "Break it up.", text: "How do you keep the opponent from making a run?", options: ["Play a card far in rank from the last one (break adjacency)", "Play a card adjacent to the last one", "Always pair", "Always say 'go'"], correctIndex: 0, explanation: "A card not adjacent in rank can't be built into a run; breaking adjacency is the classic safe play." },
        { id: "cribbage-3-05-q3", type: "Force the Go", challenge: "Jam the count.", text: "Late in a sub-count and you can't hit 31. What's the defensive play?", options: ["Play your highest safe card to push the total up and force a go", "Play your lowest card", "Say 'go' while you can still play", "Leave the count at 21"], correctIndex: 0, explanation: "A high card near 31 makes it likely the opponent can't answer and must say go, giving you the point." },
        { id: "cribbage-3-05-q4", type: "Refuse the Pair", challenge: "Worth the risk?", text: "Protecting a lead, you could pair the opponent's 9 for 2 but they may hold two more 9s. Best play?", options: ["Play a safe non-pairing card to deny the pair-royal swing", "Always pair for the 2", "Say 'go' though you can play", "Pair and hope"], correctIndex: 0, explanation: "When ahead, denying a possible 6-point pair royal beats grabbing a 2 — play safe." },
        { id: "cribbage-3-05-q5", type: "When to Defend", challenge: "Pick the mode.", text: "When should you peg defensively?", options: ["When you are ahead or it is the opponent's deal", "Always, on every card", "Only on the opening lead", "Only with a 5 in hand"], correctIndex: 0, explanation: "Defense protects a lead and starves the opponent's crib; gamble for pegs only when behind." },
      ],
    },
  },

  // ─── cribbage-3-06: Offensive Pegging & Traps ─────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The bait", location: "Inviting the opponent's mistake", era: "Modern", emoji: "🪤" },
    id: "cribbage-3-06",
    order: 6,
    title: "Offensive Pegging & Traps",
    subtitle: "Bait a pair for trips, set the trap lead, extend the run",
    category: "sports",
    xp: 103,
    badge: { id: "cribbage3-badge-06", name: "Trap Setter", emoji: "🪤" },
    challengeType: "quiz",
    info: {
      tagline: "When you need pegs, you go on offense — and the best offense often baits the opponent into a mistake. Lead from a pair to spring a pair royal, set traps that invite a pair you can re-pair, and play to extend runs further than your opponent expects.",
      year: 2024,
      overview: [
        "The pair trap is the signature offensive play:\n- You lead one card of a pair (or play one of a pair). The opponent pairs it for 2, thinking they've scored.\n- You then play your matching third card for PAIR ROYAL (6), a net swing of +4 in your favor.\n- With three of a kind in hand, the trap can even reach DOUBLE PAIR ROYAL (12) if the opponent obliges.",
        "Traps work because a tempting 2 hides a bigger loss:\n- The opponent sees a free pair and takes it; the trap is sprung only if you hold the over-card.\n- The same logic baits runs: play into a near-run so the opponent extends it, then extend it further yourself.\n- Good traps look like normal, safe plays — the bait must be something the opponent wants to take.",
        "Offense also means taking the live, scoring line:\n- EXTEND RUNS — when a run is building, the player who adds the last consecutive card scores the whole length; aim to be that player.\n- STACK SCORES — a single card can make a 15 AND a run at once (a 6 onto a down 4-5 makes 15 and 4-5-6 for 5).\n- Press when you're behind or your hand is weak: the pegs you manufacture in the play can replace the points your hand won't give you.",
      ],
      technical: {
        title: "Springing the Pair Trap and Winning the Run Race",
        body: [
          "The pair trap is an expectation play:\n- Lead one of a pair. If the opponent pairs (peg 2), you re-pair for pair royal (peg 6): you net +4.\n- If the opponent declines to pair, you've lost nothing — you made a safe low lead.\n- The trap is strongest from low pairs (safe to lead) and when the board suggests the opponent will grab the 2.",
          "Winning the run race is about who plays the last consecutive card:\n- A run pays its full length to whoever completes it, so extending a 4 into a 5 can be worth more than starting a fresh sequence.\n- Watch for a card that both makes a total (15/31) and a run — those stacked scores are the biggest single pegs in the play.\n- On offense, accept a little risk: a play that scores now is often worth more than a perfectly safe one when you need the points.",
        ],
        codeExample: {
          label: "Springing the pair trap",
          code: `  YOU hold 8 8 (a pair) + junk;  you lead an 8.
    total 8.
  OPPONENT pairs the 8  -> total 16, opp pegs 2.
  YOU play your 2nd 8   -> total 24, you peg 6
                           (pair royal!)

  NET: you +6, opponent +2  ->  +4 to you.

  STACKED SCORE example:
    down 4 then 5 (total 9); you play 6
    -> total 15 (=2) AND run 4-5-6 (=3) = 5 points.`,
        },
      },
      incident: {
        title: "The Bait and the Bigger Hook",
        when: "When you need pegs",
        where: "The pegging phase",
        impact: "A well-set pair trap turns the opponent's instinct to grab a free 2 into a four-point loss — the kind of swing that wins close games",
        body: [
          "The pair trap is cribbage's oldest piece of guile. You lead one of a pair, dangling a card the opponent can pair for 2. They take the bait, and you drop the third for pair royal — six points to their two. The opponent did exactly what looked right, and lost ground for it.",
          "Offense is a deliberate gear, chosen by the score and the hand:\n- When you're behind or your hand will count little, you manufacture pegs: traps, run extensions, stacked fifteens.\n- The risk is real — a trap that isn't sprung, a run you open for the opponent — so you press when you need to, not always.\n- The best offensive plays disguise themselves as ordinary ones; the opponent should never see the hook until it's set.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead From a Pair", sub: "dangle the bait", type: "system" },
          { label: "They Pair for 2", sub: "the trap is set", type: "attacker" },
          { label: "Re-Pair for 6", sub: "pair royal, net +4", type: "victim" },
          { label: "Extend & Stack", sub: "runs and 15s together", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle notes the value of pairs and runs in play" },
        { year: 1900, event: "Six-card pegging popularizes the pair-trap lead", highlight: true },
        { year: 1980, event: "Tournament players codify offensive trapping lines" },
        { year: 2024, event: "Solvers confirm trap leads as +EV when pegs are needed" },
      ],
      keyTakeaways: [
        "Lead one of a pair: if the opponent pairs for 2, re-pair for pair royal (6) and net +4",
        "Traps work because a tempting free 2 hides a bigger loss — and cost nothing if declined",
        "Aim to play the card that completes a run, since the completer scores its full length",
        "Press on offense when behind or holding a weak hand — manufactured pegs replace lost show points",
      ],
      references: [
        { title: "Cribbage — offensive play and traps", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-06-q1", type: "The Pair Trap", challenge: "Spring it.", text: "You lead one of a pair and the opponent pairs it for 2. What's your payoff play?", options: ["Play your matching third card for pair royal (6)", "Say 'go'", "Play your highest card", "Concede the points"], correctIndex: 0, explanation: "The third matching card scores pair royal (6) — a net +4 after the opponent's 2." },
        { id: "cribbage-3-06-q2", type: "Why It Works", challenge: "The hidden cost.", text: "Why does the pair trap succeed?", options: ["A tempting free 2 hides a bigger pair-royal loss; it costs nothing if declined", "It is the only legal play", "It always reaches 31", "It forces a redeal"], correctIndex: 0, explanation: "The opponent grabs a 2 that walks into your 6; if they decline, you've still made a safe lead." },
        { id: "cribbage-3-06-q3", type: "Run Race", challenge: "Be the completer.", text: "The last cards are 5-6-7 and you hold an 8. What do you score by playing it?", options: ["A run of four (4)", "A pair (2)", "Nothing", "A fifteen (2)"], correctIndex: 0, explanation: "The 8 completes 5-6-7-8 — a run of four for 4, scored by whoever plays the last consecutive card." },
        { id: "cribbage-3-06-q4", type: "Sprung Trap", challenge: "Cash it in.", text: "You led a 4 from a pair; the opponent paired it (total 8) for 2. You hold the third 4. Best play?", options: ["Play your third 4 for pair royal (6), netting +4", "Concede the 2", "Say 'go'", "Play a different card"], correctIndex: 0, explanation: "Your third 4 makes pair royal (6) on top of their 2 — the trap pays off at +4." },
        { id: "cribbage-3-06-q5", type: "Stacked Score", challenge: "Two at once.", text: "Down are 4 then 5 (total 9). You play a 6. What do you score?", options: ["5 points — a fifteen (2) and a run of three (3)", "2 for the fifteen only", "3 for the run only", "Nothing"], correctIndex: 0, explanation: "9 + 6 = 15 (2) and 4-5-6 is a run of three (3) — a stacked 5 points at once." },
      ],
    },
  },

  // ─── cribbage-3-07: Holding Cards Back ────────────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The reserve card", location: "Saved for the right moment", era: "Modern", emoji: "🤚" },
    id: "cribbage-3-07",
    order: 7,
    title: "Holding Cards Back",
    subtitle: "Keep a low card for 31, the go, and the last card",
    category: "sports",
    xp: 106,
    badge: { id: "cribbage3-badge-07", name: "Reserve Master", emoji: "🤚" },
    challengeType: "quiz",
    info: {
      tagline: "Which card you play is only half the decision — the other half is which you keep. Holding a low card in reserve lets you hit an exact 31, snatch the go, and pocket the last-card point that careless players give away.",
      year: 2024,
      overview: [
        "Low cards are the keys to the end of a sub-count:\n- An ace, 2, or 3 held in reserve can be the card that makes an exact 31 when the count is in the high 20s.\n- The same low card lets you keep playing after the opponent says go, taking the last-card point.\n- Spend your high cards earlier and keep flexibility for the finish.",
        "The go and the last card are small but decisive pegs:\n- The last player able to add a card pegs 1 (or 2 if it makes 31); over a game those single points add up.\n- Holding a low card means you're more often the one still able to play when the opponent is stuck.\n- The player who can answer near 31 controls who leads the next sub-count too.",
        "Sequencing your own cards is a real skill:\n- When two cards are equally fine now, play the one that leaves you the better reserve for later.\n- Don't burn your only ace early if the count may climb to 30 and need it.\n- Think a card or two ahead: what total am I likely to face on my next turn, and what do I want to be holding for it?",
      ],
      technical: {
        title: "Reserving the 31-Card and the Go-Card",
        body: [
          "A low reserve card is an option you keep alive:\n- If the count reaches 30, only an ace plays; at 29, only an ace or 2; at 28, an ace, 2, or 3. Holding one keeps you in the count.\n- Making an exact 31 with that reserve pegs 2 and steals the reset lead; even just being able to play pegs the last-card point.\n- The fewer low cards left in the deck, the more valuable yours becomes.",
          "Sequencing is choosing the order that preserves options:\n- Among equally safe plays now, keep your lowest card for last so you can answer a high count.\n- Avoid spending two low cards early if one would have covered the endgame.\n- Late in the hand, count what the opponent can still play — if they're likely stuck soon, your held low card grabs the go.",
        ],
        codeExample: {
          label: "Why the held low card matters",
          code: `  WHICH CARD CAN PLAY at a high count?
    total 30 -> only an ACE (1)
    total 29 -> ACE or 2
    total 28 -> ACE, 2, or 3

  KEEP a low card; spend highs first:

    you hold A and K, count is 25.
      play the K? -> 35 ILLEGAL.
      play the A  -> 26, and you STILL hold... nothing.
    BETTER earlier: keep the ACE for the 31 / go,
    so at total 30 you peg the last card (or 31).`,
        },
      },
      incident: {
        title: "The Ace You Wish You'd Kept",
        when: "The end of a sub-count",
        where: "The pegging phase",
        impact: "Players who spend their low cards early are the ones forced to say go while the opponent quietly pegs out near 31",
        body: [
          "It happens to everyone once: you play your ace early to make a tidy fifteen, the count climbs to 30, and now you're stuck saying go while the opponent drops their own ace for 31. The point you gave up was hiding in the card you spent too soon.",
          "Holding back is a habit of looking ahead:\n- Treat your lowest card as a reserve for the finish unless playing it now scores something better.\n- The go and the last card are small, but in a race to 121 the player who collects them game after game is meaningfully ahead.\n- When in doubt near the end of a sub-count, keep the card that can still play at 30.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Spend Highs First", sub: "keep lows in reserve", type: "system" },
          { label: "Hold a 31-Card", sub: "ace/2/3 for the finish", type: "attacker" },
          { label: "Grab the Go", sub: "still able to play", type: "victim" },
          { label: "Steal the Lead", sub: "control the next reset", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle notes the value of the last-card and go points" },
        { year: 1900, event: "Six-card play makes card-sequencing a studied skill", highlight: true },
        { year: 1980, event: "Tournament theory stresses reserving low cards for 31" },
        { year: 2024, event: "Solvers weight the held low card in close pegging lines" },
      ],
      keyTakeaways: [
        "Keep a low card (ace/2/3) in reserve to make an exact 31 or play after a go",
        "The go and last card peg 1 each (2 at 31) — small points that decide close games",
        "Spend high cards earlier so you stay able to play when the count climbs near 31",
        "Sequence equally-safe plays to preserve your best reserve card for the finish",
      ],
      references: [
        { title: "Cribbage — the go and last card", url: "https://en.wikipedia.org/wiki/Cribbage#The_play" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-07-q1", type: "The Reserve", challenge: "Hold which card?", text: "Which kind of card is most worth holding back during the play?", options: ["A low card (ace, 2, or 3)", "A 5", "A face card", "Your highest card"], correctIndex: 0, explanation: "A low card can still play at a high count to make 31 or grab the go and last card." },
        { id: "cribbage-3-07-q2", type: "Why Hold", challenge: "The payoff.", text: "Why keep a small card late in a sub-count?", options: ["To reach exactly 31 or take the last-card/go point", "To win more fifteens", "To make a flush", "To force a redeal"], correctIndex: 0, explanation: "Low cards play when the count is near 31, letting you peg 31 or the go that others concede." },
        { id: "cribbage-3-07-q3", type: "Sequencing", challenge: "Which first?", text: "The count is 5 and you hold a 4 and two 9s. Which do you keep back?", options: ["Keep the 4 as a 31/go card and play a 9 now", "Play the 4 immediately", "Play both 9s at once", "Say 'go'"], correctIndex: 0, explanation: "Hold the flexible low 4 for the endgame and spend a higher 9 while the count is low." },
        { id: "cribbage-3-07-q4", type: "Don't Burn It", challenge: "Save the ace.", text: "The count is 12 and you hold an ace, a 7, and a King. To preserve a 31/go card, what's best?", options: ["Play the King and keep the ace in reserve", "Play the ace now", "Say 'go'", "Play the ace then the 7"], correctIndex: 0, explanation: "Spend the high King now and hold the ace, which can still play when the count climbs near 31." },
        { id: "cribbage-3-07-q5", type: "High Count", challenge: "Who can play?", text: "When the running total is 30, which card can still be played?", options: ["Only an ace (worth 1)", "Any card", "A 5", "A face card"], correctIndex: 0, explanation: "At 30 only an ace keeps the total at or under 31 — which is why a held ace is so valuable." },
      ],
    },
  },

  // ─── cribbage-3-08: Counting the Play & the Opponent's Cards ──────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The read", location: "Tracking what's left", era: "Modern", emoji: "🧠" },
    id: "cribbage-3-08",
    order: 8,
    title: "Counting the Play & the Opponent's Cards",
    subtitle: "Track the count and read what they likely hold",
    category: "sports",
    xp: 109,
    badge: { id: "cribbage3-badge-08", name: "Card Reader", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "Expert pegging is partly bookkeeping. Track the running total exactly, remember the cards already played, and reason about what the opponent must be holding — and danger totals stop being dangerous once the punishing cards are gone.",
      year: 2024,
      overview: [
        "First, never lose the running total — it's the one number everything hinges on:\n- Know it precisely before every play so you can see which cards make 15, 31, or bust.\n- From the total you can read your own legal plays at a glance and spot exact-31 chances.\n- Most pegging errors are really just a misread of the count.",
        "Second, remember the cards already on the table:\n- Each player held four cards; as they're played you can subtract them from what remains.\n- If three cards of a rank are accounted for (your hand plus the table), the opponent can hold at most one — so a pair royal against you is impossible.\n- Knowing the tens are spent makes a 21 rest safe; knowing the 5s are gone changes which totals are cold.",
        "Third, turn the count into a read on the opponent's hand:\n- The cards they lead and play, and what they threw to the crib, hint at what's left in their hand.\n- After six of the eight cards are down, only two remain — one each — and the endgame is nearly an open book.\n- Use the read to choose plays that are safe against what they can actually still hold, not against the whole deck.",
      ],
      technical: {
        title: "Subtracting the Played Cards and Reading the Remainder",
        body: [
          "Card-tracking refines every danger total:\n- A resting total is only dangerous if the opponent still holds the card that scores on it. Count the tens: once all sixteen are played, no total in the low 20s yields a 31.\n- Track the 5s the same way; they drive so many fifteens that knowing they're gone reshapes safe play.\n- This is exactly the skill that lets an expert leave a 'dangerous' 21 when they know it's actually safe.",
          "Reading the opponent narrows the possibilities as cards fall:\n- Start with 'they hold four unknown cards' and subtract as the hand develops and as their discards imply holdings.\n- By the last card or two, you can often name what they have and play perfectly into it.\n- Combine the read with the count: choose the line that's safe against their actual remaining cards and presses where they're weak.",
        ],
        codeExample: {
          label: "Card-tracking changes the danger",
          code: `  COUNT the ten-cards (16 total: four 10s + J,Q,K x4).

  Normally:  leaving the total at 21 is dangerous
             (any ten -> 31 for 2).

  But if you've SEEN all sixteen tens played:
             21 is now COLD -- no card makes 31 on it.

  THREE-OF-A-RANK rule:
    you hold two 5s and a 5 was cut
      -> only ONE 5 remains in the whole deck
      -> opponent's pair royal of 5s is impossible.`,
        },
      },
      incident: {
        title: "The Expert Who Counts the Deck",
        when: "Every serious game",
        where: "The pegging phase",
        impact: "The difference between a good and a great pegger is often pure memory — tracking which dangerous cards have been spent and playing accordingly",
        body: [
          "Watch a strong player rest the count on 21 and you might think they've blundered — until the hand plays out and it turns out every ten was already gone. They weren't guessing; they'd counted the deck, knew the punishing cards were spent, and treated the 'dangerous' total as the safe one it had become.",
          "This bookkeeping is learnable, not magic:\n- Keep the running total exact, always.\n- Track the cards that matter most — the tens and the 5s — and update what the opponent can hold as cards fall.\n- By the final card, a player who's been counting often knows the opponent's hand exactly, and pegs as if the cards were face-up.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hold the Total", sub: "exact, every turn", type: "system" },
          { label: "Subtract the Played", sub: "what remains", type: "attacker" },
          { label: "Read the Opponent", sub: "four unknowns shrink", type: "victim" },
          { label: "Danger Lifts", sub: "spent cards = cold total", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's analysis assumes careful tracking of the count" },
        { year: 1900, event: "Six-card play rewards memory of the spent cards", highlight: true },
        { year: 1980, event: "Tournament players formalize card-counting in the play" },
        { year: 2024, event: "Solvers model the opponent's range from played cards" },
      ],
      keyTakeaways: [
        "Keep the running total exact — most pegging mistakes are really a misread count",
        "Subtract played cards from what remains; three of a rank seen means no pair royal against you",
        "A danger total (5, 21) goes cold once the punishing cards (tens, 5s) are all played",
        "By the last card or two, careful tracking can reveal the opponent's exact holding",
      ],
      references: [
        { title: "Cribbage — counting the play", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-08-q1", type: "The Total", challenge: "Hit 31 exactly.", text: "You've tracked the count to 28 and hold a 3 and a Jack. What's the play?", options: ["The 3 — makes 31 for 2", "The Jack", "Say 'go'", "Either card"], correctIndex: 0, explanation: "28 + 3 = 31 for 2; the Jack (10) would bust at 38, so the tracked count points straight to the 3." },
        { id: "cribbage-3-08-q2", type: "Three Seen", challenge: "Count the rank.", text: "You hold two 5s and a 5 was cut as the starter. How many 5s can the opponent hold?", options: ["At most one", "Two", "Three", "Four"], correctIndex: 0, explanation: "Three of the four 5s are accounted for, so the opponent can hold at most one — no pair royal of 5s." },
        { id: "cribbage-3-08-q3", type: "Cards Left", challenge: "Track the count.", text: "Each player started with four cards and six have been played. How many remain?", options: ["Two — one in each hand", "Four", "Three", "One"], correctIndex: 0, explanation: "Eight cards are played in total; after six, exactly two remain, one in each hand." },
        { id: "cribbage-3-08-q4", type: "Danger Lifts", challenge: "Use your memory.", text: "You've counted that every ten-valued card is already played. Is leaving the total at 21 safe now?", options: ["Yes — with all tens gone, no card makes 31 on 21", "No, 21 is always fatal", "Only if you hold a 5", "No, never leave 21"], correctIndex: 0, explanation: "21 is dangerous only because a ten makes 31; once all sixteen tens are spent, 21 is cold." },
        { id: "cribbage-3-08-q5", type: "The Read", challenge: "What's the use?", text: "What is the main payoff of reading the opponent's remaining cards?", options: ["Choosing plays that are safe against what they can actually still hold", "Counting your show hand faster", "Winning the cut", "Scoring his nobs"], correctIndex: 0, explanation: "Knowing their range lets you play safe against their real cards and press where they're weak." },
      ],
    },
  },

  // ─── cribbage-3-09: Pegging With Strong vs Weak Hands ─────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The risk dial", location: "Matching play to your hand", era: "Modern", emoji: "⚖️" },
    id: "cribbage-3-09",
    order: 9,
    title: "Pegging With Strong vs Weak Hands",
    subtitle: "Gamble when your hand is weak; protect a strong one",
    category: "sports",
    xp: 112,
    badge: { id: "cribbage3-badge-09", name: "Risk Dialer", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "How you peg should depend on what your hand is worth. A weak hand that will count almost nothing at the show needs pegs, so you take risks for them. A strong hand or a game lead is worth protecting, so you play safe and deny.",
      year: 2024,
      overview: [
        "Let the strength of your hand set the risk dial:\n- WEAK HAND — if your four cards will count only a point or two at the show, the play is where you must find points. Take the pairs, chase the runs, set the traps.\n- STRONG HAND — if your hand is a lock for a big count, you don't need pegging risk; play safe so you don't hand the opponent points.\n- The same card can be a good play with a weak hand and a bad one with a strong hand.",
        "Match the dial to the score, too:\n- AHEAD — protect the lead; deny pegs and concede small gos rather than gamble.\n- BEHIND — press; the pegs you manufacture may be the only way to catch up before the opponent counts out.\n- The decision combines both: a weak hand when behind is maximum aggression; a strong hand when ahead is maximum caution.",
        "Concrete tells of when to gamble:\n- A weak hand makes a risky pair (even into a possible pair royal) more acceptable — you need the 2 and have little to protect.\n- A strong hand makes that same pair a needless risk; take the safe line and let your show count do the work.\n- Near the finish, protecting a winning position outweighs almost any peg you might chase.",
      ],
      technical: {
        title: "Turning Hand Value Into a Pegging Plan",
        body: [
          "Read your hand's show value before the first card and set your plan:\n- A 2-point hand means the play is your scoring engine; accept variance to manufacture pegs.\n- A 12-plus hand means you're banking points at the show; in the play, just don't leak any.\n- Re-evaluate as the count develops, but enter each sub-count knowing whether you're pressing or protecting.",
          "Blend hand value with the game score:\n- Behind on the board with a weak hand: take every reasonable risk, including pairs that might be re-paired.\n- Ahead with a strong hand: play the safest card every time, force gos, and refuse low-reward pairs.\n- The middle cases are judgment calls — but naming your mode (offense or defense) before you play prevents drifting into bad, mode-less decisions.",
        ],
        codeExample: {
          label: "Set the dial: hand value x score",
          code: `             |  WEAK hand        |  STRONG hand
   ----------+-------------------+------------------
   BEHIND    |  MAX offense:     |  press a little,
             |  trap, pair,      |  but the show will
             |  chase pegs       |  carry you
   ----------+-------------------+------------------
   AHEAD     |  press for pegs,  |  MAX defense:
             |  but watch the    |  safe cards, force
             |  big give-backs   |  gos, deny pairs`,
        },
      },
      incident: {
        title: "Knowing When to Gamble",
        when: "Every deal you pick up your hand",
        where: "The pegging phase",
        impact: "Players who peg the same way regardless of their hand leave points on the table — risking with strong hands, playing meekly with weak ones",
        body: [
          "A common mistake is to peg on autopilot — always cautious, or always grabbing every 2. The fix is to look at your hand first: a hand that will count 14 at the show doesn't need you to risk a pair royal for a single peg, while a hand worth 2 absolutely does.",
          "The dial has two inputs, hand and score:\n- A weak hand says 'find points in the play'; a strong hand says 'don't lose any'.\n- Being behind argues for more risk, being ahead for less; combine the two for your mode.\n- Decide before you play, and the individual card choices become far clearer.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read Hand Value", sub: "weak vs strong", type: "system" },
          { label: "Weak: Gamble", sub: "manufacture pegs", type: "attacker" },
          { label: "Strong: Protect", sub: "deny, play safe", type: "victim" },
          { label: "Factor the Score", sub: "behind press, ahead deny", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle ties play decisions to a hand's prospects" },
        { year: 1900, event: "Six-card cribbage sharpens the offense/defense choice", highlight: true },
        { year: 1980, event: "Tournament theory links pegging risk to hand strength" },
        { year: 2024, event: "Solvers vary pegging aggression by hand value and score" },
      ],
      keyTakeaways: [
        "Set your pegging risk by your hand: a weak hand needs pegs, a strong hand needs protecting",
        "Behind on the board argues for more risk; ahead argues for denial",
        "A risky pair is more acceptable with a weak hand than with a strong one",
        "Name your mode — offense or defense — before you play, and the card choices follow",
      ],
      references: [
        { title: "Cribbage — pegging and hand strength", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-09-q1", type: "Weak Hand", challenge: "Find the points.", text: "Your hand will count only 2 at the show. How should you peg?", options: ["Take more risk — a weak hand means you need pegging points", "Play it perfectly safe", "Concede the deal", "Lead a 5"], correctIndex: 0, explanation: "When your hand won't score, the play is your engine — gamble for the pegs you need." },
        { id: "cribbage-3-09-q2", type: "Strong Hand", challenge: "Protect it.", text: "Your hand is a lock for 16 at the show and you lead the game. How should you peg?", options: ["Play safe — you don't need pegs, so deny the opponent", "Gamble for every peg", "Lead your 5", "Pair everything"], correctIndex: 0, explanation: "A strong hand and a lead are worth protecting; don't risk points you don't need." },
        { id: "cribbage-3-09-q3", type: "Concrete", challenge: "Risk the pair?", text: "Your hand is weak and the opponent leads a 6 (total 6); you hold a 6. Best play?", options: ["Pair the 6 — grab the 2 your weak hand needs", "Play a safe card", "Say 'go'", "Hold the 6"], correctIndex: 0, explanation: "With a weak hand you take the available pair for 2 — you need the points more than the safety." },
        { id: "cribbage-3-09-q4", type: "Near the Finish", challenge: "Guard the win.", text: "You need only a few points to win and your hand counts plenty. In the play you should...", options: ["Play safe and avoid giving the opponent pegs that could win it first", "Take wild risks", "Lead a 5", "Pair every card"], correctIndex: 0, explanation: "Protecting a near-certain win, deny the opponent any peg that could let them count out before you." },
        { id: "cribbage-3-09-q5", type: "The Dial", challenge: "Two inputs.", text: "Which two factors most set your pegging aggression?", options: ["Your hand's strength and the game score", "The suit colors and the time of day", "The starter card alone", "The number of players watching"], correctIndex: 0, explanation: "Combine hand value (weak/strong) with the score (behind/ahead) to choose offense or defense." },
      ],
    },
  },

  // ─── cribbage-3-10: Endgame Pegging ───────────────────────────────────────────
  {
    epochId: "cribbage-3",
    wonder: { name: "The last hole", location: "Where one peg wins", era: "Modern", emoji: "🏁" },
    id: "cribbage-3-10",
    order: 10,
    title: "Endgame Pegging",
    subtitle: "When a single peg in the play decides the game",
    category: "sports",
    xp: 115,
    badge: { id: "cribbage3-badge-10", name: "Pegging Master", emoji: "🏁" },
    challengeType: "quiz",
    info: {
      tagline: "Near 121, the play stops being about totals and becomes about the finish line. Pegs count the instant they're made, so a fifteen, a go, or a last card in the play can win the game before the show is ever counted — and the player who needs one point will do anything to deny it.",
      year: 2024,
      overview: [
        "Pegs win mid-play — you don't wait for the show:\n- The instant your peg reaches 121, you win; a fifteen, pair, run, go, or last card all count live.\n- If you're a couple of points short and the play offers a 15 or 31, taking it can end the game on the spot.\n- Count your position before every play near the finish so you never miss a winning peg.",
        "When the opponent is on the brink, defense is everything:\n- If the opponent needs only a point or two, deny EVERY peg — a single go or fifteen you give up can lose the game.\n- Refuse pairs and runs, avoid the danger totals, and don't hand them the last card if it wins it for them.\n- Who counts first at the show matters: the non-dealer counts first, so a non-dealer on the brink may peg out before the dealer ever shows.",
        "The endgame combines counting out with denial:\n- If you can reach 121 in the play this deal, take the most certain line to the points you need.\n- If you can't, focus entirely on keeping the opponent from their last point or two.\n- Every reserve low card, every forced go, every safe play matters more here than anywhere else in the game.",
      ],
      technical: {
        title: "Counting Out in the Play and Denying the Last Point",
        body: [
          "Pegging out is about certainty, not size:\n- Near the finish, prefer the play that most reliably reaches the exact points you need, even a humble go or last card.\n- A fifteen for 2 that reaches 121 wins immediately — there is no 'saving it for the show'.\n- Know your number before each play: how many points until you win, and which available peg gets you there.",
          "Denying the opponent's out is the mirror skill:\n- If the opponent needs N points and N is small, treat every potential peg as game-losing and refuse it.\n- Hold a low card to keep playing so they can't grab a last-card point that wins it.\n- Remember the show order — the non-dealer pegs first, so when you're the dealer defending a brink, the play and the non-dealer's count are the dangers to survive.",
        ],
        codeExample: {
          label: "One peg to win",
          code: `  YOU are at 119 (need 2). Count is 13; you hold 2 and 9.
    play the 2 -> total 15 -> peg 2 -> 121 -> YOU WIN.
    (don't wait for the show -- the peg ends it.)

  OPPONENT at 120 (needs 1), on lead, you are dealer:
    deny EVERYTHING -- any go or last card you concede
    lets them peg the single point and win.
    hold a low card so YOU can always answer.`,
        },
      },
      incident: {
        title: "Won on a Single Peg",
        when: "The race to 121",
        where: "The pegging phase",
        impact: "More close games are decided by a peg in the play than players expect — the go, the last card, and the timely fifteen all win games outright near the finish",
        body: [
          "Two pegs sit near the final holes. The non-dealer plays a card for a fifteen, the front peg slides home, and the game is over — the dealer never even counts a strong hand. Near 121 the play is no longer a warm-up for the show; it's where the game can simply end.",
          "Endgame pegging is two disciplines at once:\n- When you can reach 121, find the surest peg to do it and take it the moment it appears.\n- When the opponent is a point or two away, give them nothing — no go, no last card, no careless fifteen.\n- The small points you learned to value all game are, at the finish line, the whole game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pegs Win Live", sub: "121 ends it mid-play", type: "system" },
          { label: "Know Your Number", sub: "points to the finish", type: "attacker" },
          { label: "Deny the Brink", sub: "refuse every peg", type: "victim" },
          { label: "Mind Show Order", sub: "non-dealer counts first", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's rules confirm pegs score the instant they're made" },
        { year: 1900, event: "Six-card play makes endgame pegging a decisive art", highlight: true },
        { year: 1980, event: "Tournament theory stresses counting out in the play" },
        { year: 2024, event: "Solvers optimize the surest line to the final hole" },
      ],
      keyTakeaways: [
        "Pegs win the instant they reach 121 — a fifteen, go, or last card can end the game mid-play",
        "Know exactly how many points you need before every play near the finish",
        "When the opponent needs only a point or two, deny every peg — a single go can lose it",
        "Remember the show order: the non-dealer counts first and may peg out before the dealer shows",
      ],
      references: [
        { title: "Cribbage — winning and pegging out", url: "https://en.wikipedia.org/wiki/Cribbage#Game_play" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-3-10-q1", type: "Peg to Win", challenge: "End it now.", text: "You're at 119 and the play offers a fifteen for 2. Do you take it?", options: ["Yes — pegging to 121 wins immediately, no need to wait for the show", "No, save points for the show", "Only if you are the dealer", "Pegs don't count at 119"], correctIndex: 0, explanation: "Pegs score live; reaching 121 in the play wins the game on the spot." },
        { id: "cribbage-3-10-q2", type: "Deny the Out", challenge: "On the brink.", text: "The opponent needs just 1 point and leads; you're the dealer. Your priority?", options: ["Deny every peg — even one point ends the game for them", "Score your own hand", "Aim for a skunk", "Save cards for the crib"], correctIndex: 0, explanation: "When the opponent is one peg from winning, refuse every possible point in the play." },
        { id: "cribbage-3-10-q3", type: "Winning Peg", challenge: "Find it.", text: "You're at 119, the count is 13, and you hold a 2 and a 9. What wins?", options: ["The 2 — makes 15 for 2 and reaches 121", "The 9", "Say 'go'", "Either card"], correctIndex: 0, explanation: "13 + 2 = 15 pegs 2, bringing you to 121 for the win; the 9 only reaches 22 with no score." },
        { id: "cribbage-3-10-q4", type: "Peg Out at 31", challenge: "One to win.", text: "You need 1 point, the count is 30, and you hold an ace and a King. What's the play?", options: ["The ace — makes 31 for 2 and pegs out to win", "The King", "Say 'go'", "Concede"], correctIndex: 0, explanation: "At 30 the King (10) busts; the ace makes 31 for 2, more than enough to reach the finish and win." },
        { id: "cribbage-3-10-q5", type: "Show Order", challenge: "Who counts first?", text: "Why does the show order matter in a close endgame?", options: ["The non-dealer counts first and may peg out before the dealer shows", "The dealer always counts first", "The crib is counted before the hands", "Order never affects the result"], correctIndex: 0, explanation: "Counting order is non-dealer, then dealer, then crib — a non-dealer on the brink can win before the dealer counts." },
      ],
    },
  },
];
