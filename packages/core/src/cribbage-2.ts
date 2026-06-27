import type { StageConfig, EpochConfig } from "./types";

export const cribbage2Epoch: EpochConfig = {
  id: "cribbage-2",
  name: "Cribbage: The Crib & Discarding",
  subtitle: "Keep four, lay away two — the discard decision that decides the game",
  description:
    "An advanced cribbage epoch built entirely around the layaway: the two cards you throw to the crib every single deal. Where the first course taught the rules and the count, this one teaches the decision that separates strong players from beginners — choosing which four cards to keep and which two to discard. You will learn to read the difference between your crib and your opponent's, exploit the 'magic' fives that pair with every ten-card, recognize the best-scoring four-card keep inside a six-card hand, throw point-rich combinations (5-5, 2-3, 4-5, 7-8) into your own box while starving theirs of fives and connectors, balance hand value against crib expectation, account for the starter, flushes, and his nobs, play the discard differently as dealer versus pone, and finally think the way experts do — in expected values and studied 'best average discard' tables. Exact cribbage scoring throughout: fifteens, pairs, runs, flushes, and nobs counted to the point.",
  emoji: "✂️",
  color: "orange",
  unlocked: true,
};

export const cribbage2Stages: StageConfig[] = [
  // ─── cribbage-2-01: The Discard Decision ──────────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The layaway", location: "Keep four, throw two", era: "Modern", emoji: "✂️" },
    id: "cribbage-2-01",
    order: 1,
    title: "The Discard Decision",
    subtitle: "You keep four and lay away two — the pivotal skill of cribbage",
    category: "sports",
    xp: 92,
    badge: { id: "cribbage2-badge-01", name: "Layaway Learner", emoji: "✂️" },
    challengeType: "quiz",
    info: {
      tagline: "Cribbage is sometimes called a discarding game with a counting phase attached. Every deal you are dealt six cards and must throw exactly two away into the crib — keeping the four that work best together. That layaway, made twice a round for a whole game, is the single biggest skill in cribbage.",
      year: 2024,
      overview: [
        "After the deal you hold six cards and immediately face the game's defining choice:\n- KEEP FOUR — the four cards you hold for both the play and the show.\n- LAY AWAY TWO — the two cards you discard, face-down, into the crib (the 'box').\n- The two you throw are gone from your hand; you cannot use them in the play or count them in your show — they belong to whoever owns the crib.",
        "The discard is hard precisely because it is a trade-off:\n- The four-card keep should score as much as possible on its own — fifteens, pairs, runs, and a flush.\n- But the two you throw are not neutral: they help (your crib) or hurt (the opponent's crib) someone's score.\n- The right discard balances the points in your kept hand against what your two thrown cards do to the crib.",
        "Because you discard on every deal, small edges compound:\n- A player who lays away well — keeping the higher-scoring four and feeding or starving the crib correctly — gains points steadily over a full game to 121.\n- Beginners grab the obvious pairs and runs; strong players weigh every six-card hand as a keep-versus-throw decision.\n- This epoch is the study of that one decision, from the basic mechanic to expert expected-value tables.",
      ],
      technical: {
        title: "Reading a Six-Card Hand as Keep Four, Throw Two",
        body: [
          "The skill is to evaluate all fifteen possible four-card keeps inside your six cards:\n- Six cards yield fifteen distinct two-card discards (and therefore fifteen four-card keeps).\n- Scan for the keep that contains the most fifteens, pairs, runs, and flush cards combined.\n- The highest-scoring keep is the starting point; whose crib it is, and how the starter might help, then refine the choice.",
          "A worked example shows how much the keep matters:\n- From 4-5-5-6-J-K, keeping 4-5-5-6 scores twelve on its own: two fifteens (4+5+6 twice through the two fives = 4), a double run of three (4-5-6 twice = 6), and the pair of fives (2).\n- Keeping almost any other four from the same hand scores far less — a six- or five-point keep at best.\n- The two cards left over (here the J and K) go to the crib, where their value depends entirely on whose box it is.",
        ],
        codeExample: {
          label: "Keep four, lay away two",
          code: `  DEALT 6:   keep 4  +  lay away 2  ->  the CRIB
  the 2 you throw are GONE from your hand

  EXAMPLE (your deal):  4 5 5 6 J K
    keep 4-5-5-6  -> hand = 12
      (4+5+6 fifteen x2 = 4, run 4-5-6 x2 = 6, pair 5-5 = 2)
    throw J-K to YOUR crib
  -> the layaway is the single biggest skill in cribbage`,
        },
      },
      incident: {
        title: "The Decision Made Twice Every Round",
        when: "Every deal of every game",
        where: "The layaway",
        impact: "Because both players discard on every deal, the cumulative quality of those throws is one of the clearest separators between casual and serious cribbage",
        body: [
          "Newcomers tend to treat the discard as housekeeping — toss the two cards that look least useful and get on with the game. Strong players see it as the most important move they make all hand, because it shapes both their own four-card hand and the crib that one of the two players will score.",
          "Over a full game to 121 the math is unforgiving:\n- You discard on every deal, so a consistently better layaway than your opponent's quietly piles up points.\n- The decision blends arithmetic (which four score most) with judgment (whose crib, what the cut might bring).\n- Mastering it is the whole project of advanced cribbage, which is why discard study — covered through this epoch — became a serious field.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Dealt Six Cards", sub: "the starting hand", type: "system" },
          { label: "Choose the Best Four", sub: "most fifteens, runs, pairs", type: "attacker" },
          { label: "Lay Away Two", sub: "to the crib, gone from hand", type: "victim" },
          { label: "Balance Keep vs Throw", sub: "hand value vs crib effect", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "The crib is added to Noddy, creating the discard decision" },
        { year: 1742, event: "Hoyle advises laying away to the dealer's advantage", highlight: true },
        { year: 1900, event: "Six-card cribbage makes the two-card layaway central to every deal" },
        { year: 2024, event: "Discard solvers quantify the best keep for every six-card hand" },
      ],
      keyTakeaways: [
        "Every deal you keep four cards and lay away exactly two into the crib",
        "The two cards you throw leave your hand entirely — they score only in the crib",
        "Pick the four-card keep that scores the most, then weigh whose crib gets the two you throw",
        "Discarding well on every deal compounds into a decisive edge over a full game",
      ],
      references: [
        { title: "Cribbage — the discard", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage discard strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-01-q1", type: "The Mechanic", challenge: "Keep and throw.", text: "After the deal, how many cards do you keep and how many do you lay away?", options: ["Keep four, lay away two", "Keep five, lay away one", "Keep three, lay away three", "Keep all six"], correctIndex: 0, explanation: "Each player keeps four cards for the play and show, and discards two into the crib." },
        { id: "cribbage-2-01-q2", type: "The Throw", challenge: "Where they go.", text: "What happens to the two cards you lay away?", options: ["They go into the crib and leave your hand entirely", "They stay in your hand for the play", "They are reshuffled into the deck", "They become the starter card"], correctIndex: 0, explanation: "The two discards leave your hand for good and score only in the crib, for whoever owns it." },
        { id: "cribbage-2-01-q3", type: "Best Keep", challenge: "Twelve in hand.", text: "From 4-5-5-6-J-K, which four-card keep scores the most on its own?", options: ["4-5-5-6 (twelve points)", "5-5-J-K (ten points)", "6-J-K-4 (zero points)", "4-5-J-K (four points)"], correctIndex: 0, explanation: "4-5-5-6 makes two fifteens (4), a double run of three (6), and a pair of fives (2) for 12." },
        { id: "cribbage-2-01-q4", type: "The Trade-off", challenge: "Why it's hard.", text: "Why is the discard a genuine decision rather than housekeeping?", options: ["It trades the value of your kept hand against what the throw does to the crib", "Because the rules require thinking for ten seconds", "Because you must always keep the highest cards", "Because suits decide the score"], correctIndex: 0, explanation: "The two you throw help or hurt a crib, so the choice balances hand value against crib effect." },
        { id: "cribbage-2-01-q5", type: "Why It Matters", challenge: "Over a game.", text: "Why does good discarding decide games over the long run?", options: ["You discard on every deal, so small edges compound toward 121", "It is the only way to score points", "It guarantees a skunk", "It changes the target score"], correctIndex: 0, explanation: "Because the layaway happens twice a round, a steadily better discard piles up the winning margin." },
      ],
    },
  },

  // ─── cribbage-2-02: Your Crib vs Their Crib ───────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "Whose crib?", location: "The first question of every discard", era: "Modern", emoji: "🔄" },
    id: "cribbage-2-02",
    order: 2,
    title: "Your Crib vs Their Crib",
    subtitle: "Throw helping cards to your own box, junk to the opponent's",
    category: "sports",
    xp: 94,
    badge: { id: "cribbage2-badge-02", name: "Crib Reader", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "Before you throw a single card, ask one question: whose crib is it? The crib belongs to the dealer, so on your own deal you feed it good cards, and on your opponent's deal you starve it with junk. The same two cards can be a gift or a leak depending on the answer.",
      year: 2024,
      overview: [
        "The crib alternates with the deal, and that flips the whole discard:\n- ON YOUR DEAL the crib is YOURS — throw cards that combine, because every point in the crib is your point.\n- ON THE OPPONENT'S DEAL the crib is THEIRS — throw dead cards, because anything that scores there scores for them.\n- The deal rotates every hand, so you are constantly switching between feeding and starving.",
        "Good cards for a crib are the ones that work together:\n- A 5 with a ten-card, a pair like 5-5, or connectors like 4-5 and 7-8 make fifteens and runs easily.\n- These are exactly what you want in YOUR crib and exactly what you must keep out of THEIRS.\n- Junk for a crib is the opposite: widely separated ranks that rarely combine, like a King and a 2.",
        "The discipline is to frame the throw by ownership first:\n- The identical pair of cards is a strong throw to your box and a costly leak to your opponent's.\n- On your crib you may even sacrifice a point from your hand to load the box; on theirs you protect it first.\n- 'Whose crib is it?' is the question every experienced player asks before evaluating anything else.",
      ],
      technical: {
        title: "Feeding Your Box and Starving Theirs",
        body: [
          "Throwing to your own crib is an additive calculation:\n- Estimate the points in your four-card keep, then add the expected value of the two cards you send to your box.\n- Connectors and fives raise that crib expectation sharply, so a marginally weaker hand can be the right keep if it lets you throw, say, a 4-5 into your crib.\n- The starter and the opponent's two unknown cards round out your crib, so even a single helping card has real expected value there.",
          "Throwing to the opponent's crib is a subtractive one:\n- Now the expected value of your two thrown cards is a cost, so you minimize it.\n- Avoid handing over fives, pairs, and connectors; prefer wide, unconnected ranks that struggle to make fifteens or runs even with the starter and the opponent's own discards.\n- When every throw helps a little, choose the least damaging — but never give the opponent's box a free 5 or a ready-made pair.",
        ],
        codeExample: {
          label: "Whose crib decides the throw",
          code: `  YOUR DEAL  -> the crib is YOURS:  throw cards that COMBINE
    e.g. 5-5, 5-10, 4-5, 7-8  -> fifteens + runs FOR you

  THEIR DEAL -> the crib is THEIRS: throw DEAD cards
    e.g. K-2, J-4, wide unmatched ranks
    NEVER give them 5s, pairs, or connectors

  Same 2 cards can be a gift to your box
  and a leak to theirs -- ask "whose crib?" first.`,
        },
      },
      incident: {
        title: "One Question That Reframes Every Discard",
        when: "Twice per round, every game",
        where: "The layaway",
        impact: "Teaching players to ask 'whose crib is it?' before anything else turns the discard from a guess into a directed decision",
        body: [
          "Ask a strong cribbage player how they discard and the first thing they tell you is to look at who dealt. The crib belongs to the dealer, and that single fact reverses the goal: on your deal you are trying to build the crib up, and on the opponent's you are trying to keep it down.",
          "The clearest illustration is a pair of fives:\n- Into your own crib, 5-5 is rocket fuel — two fives plus the deck's many ten-cards produce fifteens in bulk.\n- Into the opponent's crib, that same 5-5 is a disaster you should almost never hand over.\n- Same cards, opposite verdicts — which is why ownership is the question that comes first.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ask: Whose Crib?", sub: "the dealer owns it", type: "system" },
          { label: "Your Crib: Feed It", sub: "fives, connectors", type: "attacker" },
          { label: "Their Crib: Starve It", sub: "wide, dead cards", type: "victim" },
          { label: "Same Cards Flip", sub: "gift here, leak there", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "The dealer-owned crib makes ownership matter to every throw" },
        { year: 1742, event: "Hoyle advises throwing to the dealer's advantage", highlight: true },
        { year: 1900, event: "Six-card play sharpens feed-versus-starve discard tactics" },
        { year: 2024, event: "Crib-value tables confirm the gulf between your box and theirs" },
      ],
      keyTakeaways: [
        "The crib belongs to the dealer, so 'whose crib is it?' is the first discard question",
        "On your deal, throw cards that combine (5-5, 5-10, 4-5, 7-8) to feed your crib",
        "On the opponent's deal, throw wide, dead cards and keep fives and connectors out",
        "The same two cards are a gift to your box and a leak to your opponent's",
      ],
      references: [
        { title: "Cribbage — discarding to the crib", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage crib-value reference", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-02-q1", type: "First Question", challenge: "Before any throw.", text: "What should you determine before evaluating a discard?", options: ["Whose crib it is — yours or the opponent's", "How many cards are left in the deck", "Which suit is highest", "Who is currently winning"], correctIndex: 0, explanation: "The crib's owner reverses the goal, so ownership is the first thing to settle." },
        { id: "cribbage-2-02-q2", type: "Your Deal", challenge: "Feed the box.", text: "On your own deal, what kind of cards do you want to throw to the crib?", options: ["Cards that combine for points, like fives and connectors", "Cards that cannot possibly combine", "Only face cards", "Only red cards"], correctIndex: 0, explanation: "The crib is yours, so combining cards build points you will collect." },
        { id: "cribbage-2-02-q3", type: "Their Deal", challenge: "Starve the box.", text: "On the opponent's deal, what should you throw?", options: ["Wide, dead cards that rarely combine", "A pair of fives", "Two connected cards like 7-8", "Cards that make a run"], correctIndex: 0, explanation: "Anything that scores in their crib scores for them, so give them junk that can't combine." },
        { id: "cribbage-2-02-q4", type: "Same Cards", challenge: "Gift or leak.", text: "Why does the same pair (say a 5 and a 6) get thrown in some deals and kept in others?", options: ["It's a strong throw to your crib but a leak to the opponent's", "It is illegal to throw twice", "The rules change with the score", "Suits decide whether it combines"], correctIndex: 0, explanation: "Ownership flips the verdict: helping cards belong in your box, never in theirs." },
        { id: "cribbage-2-02-q5", type: "Junk", challenge: "Safe to give.", text: "Which pair is the safest to throw into the opponent's crib?", options: ["King and 2 (wide, unconnected)", "5 and 5", "4 and 5", "7 and 8"], correctIndex: 0, explanation: "A King and a 2 rarely combine; the others make easy fifteens or runs for the opponent." },
      ],
    },
  },

  // ─── cribbage-2-03: The Magic Fives ───────────────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The five", location: "The most valuable rank in cribbage", era: "Modern", emoji: "5️⃣" },
    id: "cribbage-2-03",
    order: 3,
    title: "The Magic Fives",
    subtitle: "Fives pair with every ten-card for fifteens — keep them, hoard them",
    category: "sports",
    xp: 96,
    badge: { id: "cribbage2-badge-03", name: "Five Hunter", emoji: "5️⃣" },
    challengeType: "quiz",
    info: {
      tagline: "Sixteen of the fifty-two cards count as ten, and a single 5 makes a fifteen with every one of them. That arithmetic makes the 5 the most valuable card in cribbage — the card you most want in your hand and your own crib, and the very last card you ever hand to your opponent's box.",
      year: 2024,
      overview: [
        "The 5 is special because of how many cards count as ten:\n- The four 10s plus the twelve face cards (Jack, Queen, King) are all worth 10 — sixteen ten-valued cards in all.\n- A 5 forms a fifteen with any one of them, so fives generate fifteens more prolifically than any other rank.\n- That is why a hand full of fives and tens scores so heavily, and why the perfect 29 is built from four fives and a Jack.",
        "In the discard, the 5 dominates the decision:\n- KEEP fives in your hand whenever you can — they are your best fifteen-makers.\n- THROW fives to YOUR crib happily — 5-5, or a 5 with a ten-card, loads the box with fifteens.\n- NEVER throw a 5 to the OPPONENT'S crib if you can avoid it — it is the worst single card to give them.",
        "Stacked fives multiply fast:\n- Three fives plus a ten-card already make a pile of fifteens and a pair royal.\n- Three fives and a ten-card cut as the starter is enormous, and four fives with a Jack is the legendary maximum.\n- Recognizing how fives combine is the heart of strong keep-and-throw judgment.",
      ],
      technical: {
        title: "Counting Fives and Protecting Them",
        body: [
          "The fifteen-count of a five-heavy hand is worth drilling:\n- Each 5 paired with each ten-card is a separate fifteen, and a trio of fives (5+5+5) is itself a fifteen.\n- A hand of three fives plus two ten-cards (with the starter) racks up seven fifteens — fourteen points — before the pair royal of fives adds six more, for twenty.\n- Reuse is the key: the same five counts in many different fifteens, which is how the totals climb so quickly.",
          "Because fives are so strong, they drive defensive discarding too:\n- A lone 5 you cannot keep should still not go to the opponent's crib; throw almost anything else first.\n- When you hold a 5 on the opponent's deal, keeping it both adds to your hand and denies it to their box.\n- The rule of thumb is simple: in your hand or your crib the 5 is gold, in your opponent's crib it is poison.",
        ],
        codeExample: {
          label: "Why fives are the rocket fuel",
          code: `  Sixteen cards count as TEN (four 10s + J Q K x4).
  A 5 makes 15 with EVERY one of them.

  HAND: 5 5 10 J   + starter 5
    5+10 (x3 fives) = 3 fifteens
    5+J  (x3 fives) = 3 fifteens
    5+5+5           = 1 fifteen      -> 7 x 2 = 14
    pair royal (three 5s)            -> 6
  ------------------------------------------------
  TOTAL = 20   (fives are the crib's rocket fuel)`,
        },
      },
      incident: {
        title: "The Card Everyone Fights Over",
        when: "Every game ever played",
        where: "The card table",
        impact: "The 5's knack for making fifteens shapes nearly every discard decision in cribbage, from hoarding it in hand to guarding it from the enemy crib",
        body: [
          "If you watch experienced players agonize over a discard, it is usually about a 5. They hate giving one up, they love sending one to their own crib, and they will twist a hand into an awkward shape rather than hand a 5 to the opponent's box.",
          "The reasoning is pure arithmetic:\n- With sixteen ten-valued cards in the deck, a single 5 is a fifteen waiting to happen.\n- That makes it the strongest card to keep, the best card to feed your own crib, and the most dangerous to surrender.\n- Understanding the 5 is the fastest way to upgrade your discard instincts.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sixteen Ten-Cards", sub: "four 10s + twelve faces", type: "system" },
          { label: "Every 5 Makes 15", sub: "with any ten-card", type: "attacker" },
          { label: "Keep & Feed Your Box", sub: "fives are gold to you", type: "victim" },
          { label: "Never Feed Theirs", sub: "a 5 is poison to give", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage's fifteen scoring makes the 5 disproportionately strong" },
        { year: 1742, event: "Hoyle's scoring tables expose the value of fives", highlight: true },
        { year: 1900, event: "Six-card play makes guarding the 5 a core discard skill" },
        { year: 2024, event: "Discard solvers rank holding and feeding fives among the top plays" },
      ],
      keyTakeaways: [
        "Sixteen cards count as ten, so a single 5 makes a fifteen with any one of them",
        "Keep fives in your hand and feed them to your own crib whenever you can",
        "Never throw a 5 into the opponent's crib if any other card will do",
        "Three fives and a ten-card with a five starter count to twenty before anything else",
      ],
      references: [
        { title: "Cribbage — the value of fives", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage statistics", url: "https://en.wikipedia.org/wiki/Cribbage_statistics" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-03-q1", type: "The Arithmetic", challenge: "How many tens.", text: "How many cards in the deck count as ten, making the 5 so valuable?", options: ["Sixteen (four 10s plus twelve face cards)", "Four (just the 10s)", "Twelve (just the faces)", "Twenty"], correctIndex: 0, explanation: "Four 10s plus J, Q, K in each suit makes sixteen ten-valued cards, each a fifteen with a 5." },
        { id: "cribbage-2-03-q2", type: "Keep It", challenge: "Hand value.", text: "In your own hand, how should you treat a 5?", options: ["Keep it — it is your best fifteen-maker", "Throw it away first", "Treat it as worthless", "Use it only in runs"], correctIndex: 0, explanation: "A 5 pairs with the deck's many ten-cards, so it is the strongest card to keep." },
        { id: "cribbage-2-03-q3", type: "Their Crib", challenge: "The poison card.", text: "Why must you avoid throwing a 5 to the opponent's crib?", options: ["A 5 combines with the many ten-cards for easy fifteens in their box", "Fives are worth nothing", "It is against the rules", "It ends the game"], correctIndex: 0, explanation: "The 5 is the best fifteen-maker, so it is the worst card to hand an opponent's crib." },
        { id: "cribbage-2-03-q4", type: "Count Them", challenge: "Five-heavy hand.", text: "How many points is 5-5-10-J with a 5 starter (fifteens plus the pair royal)?", options: ["20", "16", "14", "12"], correctIndex: 0, explanation: "Seven fifteens (each five with each ten-card, plus 5+5+5) is 14, and the pair royal of fives is 6, for 20." },
        { id: "cribbage-2-03-q5", type: "Your Crib", challenge: "Feed the box.", text: "Into your own crib, which throw is the richest in fifteens?", options: ["5-5, because two fives pair with all the ten-cards", "2-9, two unconnected cards", "King-2, a wide pair", "3-10, a gap of seven"], correctIndex: 0, explanation: "Two fives plus the deck's ten-cards (and the starter) make fifteens in bulk in your crib." },
      ],
    },
  },

  // ─── cribbage-2-04: Keeping Hand Value ────────────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The best four", location: "Inside every six-card hand", era: "Modern", emoji: "🔢" },
    id: "cribbage-2-04",
    order: 4,
    title: "Keeping Hand Value",
    subtitle: "Recognizing the best-scoring four-card keep from your six",
    category: "sports",
    xp: 98,
    badge: { id: "cribbage2-badge-04", name: "Keep Master", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "Before you worry about the crib, you have to see the best hand hiding in your six cards. Spotting the four-card keep that scores the most — double runs, paired runs, dense fifteens, and flushes — is a counting skill you can train until the strongest keep jumps out instantly.",
      year: 2024,
      overview: [
        "Six cards conceal fifteen possible four-card keeps, and they are not equal:\n- A keep that turns a pair next to a run into a DOUBLE RUN can score far more than a plain run of four.\n- Dense fifteens — several combinations summing to fifteen — stack on top of runs and pairs.\n- A four-card FLUSH adds four points that a non-suited keep simply does not have.",
        "Train your eye to find the high-scoring shapes:\n- A run with a duplicated card (like 7-8-8-9) counts the run twice plus the pair — a double run worth eight, not four.\n- Two fifteens plus a run (like 6-7-8-9) makes eight; a double run with two fifteens (like 4-5-5-6) makes twelve.\n- Recognizing these patterns is faster than recounting every keep from scratch.",
        "The best keep is the foundation, then refined by context:\n- Start from the four cards that score the most on their own.\n- Then weigh how the starter might help, and whether the two left-over cards belong in your crib or the opponent's.\n- But you cannot make a good throw until you can see the strongest hand inside the six.",
      ],
      technical: {
        title: "Double Runs, Paired Runs, and Hidden Flushes",
        body: [
          "Paired runs are where keeps quietly outscore each other:\n- 7-8-8-9 contains the run 7-8-9 twice (once through each eight), so it scores two runs of three (6), the pair of eights (2), and two fifteens of 7+8 (4) — twelve in all.\n- A flat keep like 7-8-9-J from the same cards scores only the run of three and a single fifteen — five.\n- The duplicate card more than doubles the keep, so always look for a pair sitting beside a run.",
          "Fifteens and flushes are the other multipliers:\n- 4-5-5-6 makes two fifteens (4+5+6 through each five), a double run of three, and the pair of fives, for twelve.\n- Four cards of one suit add a flush worth four, so a suited 4-5-6-7 scores its run, its 4+5+6 fifteen, and the flush — ten — beating an unsuited 6-7-8-9's eight.\n- When two keeps look close, the suited or doubled one usually wins.",
        ],
        codeExample: {
          label: "Finding the best four-card keep",
          code: `  From 6 cards, the best KEEP is the 4 that score most.

  HAND: 4 7 8 8 9 J   (your deal)
    keep 7-8-8-9  -> 12
      runs 7-8-9 x2 = 6
      pair 8-8      = 2
      fifteens 7+8 x2 = 4
    throw 4-J
  beats 6-pt and 5-pt keeps from the same six cards.`,
        },
      },
      incident: {
        title: "Seeing the Hand Inside the Hand",
        when: "Every deal",
        where: "The six-card read",
        impact: "Players who instantly recognize double runs, paired runs, and flushes keep more points every deal than those who count one keep and stop",
        body: [
          "The difference between an average and a strong cribbage player is often just speed of recognition. Given six cards, the strong player sees at a glance that 7-8-8-9 is worth twelve while 7-8-9-J is worth five, and keeps the right four without laboring over it.",
          "These patterns repeat constantly:\n- A pair beside a run means a double run; a third of a kind means a triple run.\n- Several cards clustered around a five or a ten mean dense fifteens.\n- Four of one suit means a hidden flush. Learn the shapes and the best keep stops being a calculation and becomes a glance.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Six Cards, Fifteen Keeps", sub: "they are not equal", type: "system" },
          { label: "Spot Double Runs", sub: "pair beside a run", type: "attacker" },
          { label: "Stack Fifteens", sub: "clusters of fives, tens", type: "victim" },
          { label: "Keep the Highest Four", sub: "then refine for crib", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle tabulates run and pair scoring that defines strong keeps" },
        { year: 1900, event: "Six-card cribbage makes choosing among keeps a core skill", highlight: true },
        { year: 1980, event: "Tournament players publish keep-value heuristics" },
        { year: 2024, event: "Software confirms the best keep for every six-card hand" },
      ],
      keyTakeaways: [
        "Six cards hide fifteen four-card keeps, and the highest-scoring one is rarely obvious",
        "A pair beside a run makes a double run — far more than a flat run of four",
        "Dense fifteens and a four-card flush are the other big multipliers to look for",
        "Find the strongest hand first, then refine the keep for the crib and the starter",
      ],
      references: [
        { title: "Cribbage — runs, pairs, and double runs", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage scoring reference", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-04-q1", type: "Double Run", challenge: "Pair beside a run.", text: "How many points is the keep 7-8-8-9 worth?", options: ["12 (two runs of three, a pair, and two fifteens)", "5", "8", "4"], correctIndex: 0, explanation: "7-8-9 runs twice through the two eights (6), the pair of eights is 2, and 7+8 makes 15 twice (4) — 12." },
        { id: "cribbage-2-04-q2", type: "Pattern", challenge: "What to look for.", text: "What hidden pattern most often makes one keep outscore another?", options: ["A pair sitting next to a run, forming a double run", "The number of red cards", "The highest single card", "Alphabetical suit order"], correctIndex: 0, explanation: "A duplicated card inside a run counts the run twice plus the pair, far outscoring a flat run." },
        { id: "cribbage-2-04-q3", type: "Flush", challenge: "Suited bonus.", text: "Why might a suited 4-5-6-7 beat an unsuited 6-7-8-9?", options: ["The four-card flush adds four points on top of its run and fifteen", "Suited cards always score double", "Flushes outrank runs", "It cannot — they are equal"], correctIndex: 0, explanation: "Suited 4-5-6-7 scores its run (4), the 4+5+6 fifteen (2), and a flush (4) for 10, beating 6-7-8-9's 8." },
        { id: "cribbage-2-04-q4", type: "Twelve Points", challenge: "Dense keep.", text: "How many points is the keep 4-5-5-6 worth?", options: ["12 (double run, two fifteens, a pair)", "8", "6", "10"], correctIndex: 0, explanation: "4-5-6 runs twice through the two fives (6), 4+5+6 makes 15 twice (4), and the pair of fives is 2 — 12." },
        { id: "cribbage-2-04-q5", type: "Order", challenge: "First things first.", text: "What is the first step in choosing your discard?", options: ["Find the four-card keep that scores the most on its own", "Throw the two highest cards", "Count the crib", "Cut the deck"], correctIndex: 0, explanation: "You must see the strongest hand inside the six before refining the throw for the crib." },
      ],
    },
  },

  // ─── cribbage-2-05: Throwing Combos to Your Crib ──────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The loaded box", location: "Your own crib", era: "Modern", emoji: "🎁" },
    id: "cribbage-2-05",
    order: 5,
    title: "Throwing Combos to Your Crib",
    subtitle: "Lay away point-rich pairs — 5-5, 2-3, 4-5, 7-8 — on your deal",
    category: "sports",
    xp: 100,
    badge: { id: "cribbage2-badge-05", name: "Crib Loader", emoji: "🎁" },
    challengeType: "quiz",
    info: {
      tagline: "On your own deal the crib is yours, so the cards you throw it should work together. A handful of pairs — 5-5, 4-5, 2-3, 7-8 and their cousins — are 'magic' crib throws because they make fifteens and runs with the ten-cards, the starter, and the opponent's blind discards.",
      year: 2024,
      overview: [
        "The richest crib throws share a trait: they combine on their own or with common cards.\n- 5-5 is the premier throw — two fives plus the many ten-cards make fifteens in bulk.\n- 4-5 makes a fifteen with a 6 and a near-run; 7-8 makes a fifteen outright and a near-run.\n- 2-3 looks weak but makes a fifteen with any ten-card (2+3+10) and a near-run.",
        "The goal is to keep a strong hand AND feed your crib:\n- Often the best four-card keep leaves exactly a point-rich pair to throw — so you collect on both ends.\n- For example, keeping a 6-7-8-8 hand for twelve can leave a 5-5 to throw straight into your crib.\n- When the keep is fixed, choose the leftover pair that combines best for your box.",
        "Recognize the workhorse crib pairs:\n- FIVES with anything — 5-5, 5-10, 5-6, 5-4 — because of the fifteen.\n- CONNECTORS — 4-5, 6-7, 7-8, 8-7 — because of fifteens and runs.\n- LOW SUMS THAT REACH FIFTEEN WITH TENS — 2-3, A-4, 6-9 — because a single ten-card completes them.",
      ],
      technical: {
        title: "The Pairs That Build a Crib",
        body: [
          "Each magic throw works through a specific mechanism:\n- 5-5 relies on the sixteen ten-cards: any one makes a fifteen with each five, and the fives pair for two more.\n- 7-8 brings its own fifteen (7+8) and threatens a run with a 6 or a 9 from the starter or the opponent.\n- 2-3 and 4-5 contribute fifteens with ten-cards or a 6 respectively, plus run potential — modest cards that punch above their rank in a crib.",
          "Keeping a good hand and loading the crib are not always in conflict:\n- From 6-7-8-8 and a pair of fives, the keep 6-7-8-8 scores twelve and the leftover 5-5 is the best possible crib throw — you do not have to choose.\n- From 7-7-8-8 and a 4-5, keeping the four sevens-and-eights for twelve still lets you throw the 4-5 connector to your box.\n- The art is spotting hands where the strongest keep happens to free a point-rich pair for the crib.",
        ],
        codeExample: {
          label: "Point-rich pairs for your own crib",
          code: `  POINT-RICH PAIRS for YOUR crib:
    5-5   two 5s + any ten-card -> piles of fifteens
    4-5   4+5+6 = 15, near run
    2-3   2+3+ten = 15
    7-8   7+8 = 15, near run

  HAND: 6 7 8 8 5 5  (your deal)
    keep 6-7-8-8 = 12  AND  throw 5-5 to your crib
  -> keep a big hand AND load the box: best of both.`,
        },
      },
      incident: {
        title: "The Throws Experts Love to Make",
        when: "Every deal you hold",
        where: "Your own crib",
        impact: "Knowing the handful of point-rich crib pairs lets players turn their own deal into a reliable second source of points",
        body: [
          "On your deal the crib is a second hand you alone will score, and seasoned players treat it accordingly — they throw it cards that combine. A pair of fives, a 4-5, a 2-3, a 7-8: these recur as the throws experts reach for when the box is theirs.",
          "The reason is consistency:\n- These pairs do not need perfect cards to score — a single ten-card or a starter near the rank turns them into fifteens and runs.\n- Over many deals, feeding your crib these combinations adds up to a dependable point stream.\n- The best hands let you keep twelve and still throw a 5-5 — and recognizing those is a real edge.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Crib Is Yours", sub: "on your deal", type: "system" },
          { label: "Throw Combining Pairs", sub: "5-5, 4-5, 2-3, 7-8", type: "attacker" },
          { label: "They Make 15s & Runs", sub: "with tens and the starter", type: "victim" },
          { label: "Keep Big, Load the Box", sub: "best of both ends", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle notes throwing combining cards to one's own crib" },
        { year: 1900, event: "Six-card play makes loaded-crib throws routine", highlight: true },
        { year: 1980, event: "Players publish expected crib values for common pairs" },
        { year: 2024, event: "Solvers rank 5-5 and connectors among the top crib throws" },
      ],
      keyTakeaways: [
        "On your deal, throw pairs that combine: 5-5, 4-5, 2-3, 7-8 and their relatives",
        "5-5 is the best crib throw because two fives pair with all the ten-cards",
        "Low pairs like 2-3 still make a fifteen with any single ten-card",
        "The best hands let you keep a strong four and still throw a point-rich pair to your box",
      ],
      references: [
        { title: "Cribbage — crib throws", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage crib-value tables", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-05-q1", type: "Best Throw", challenge: "Fuel the box.", text: "On your own deal, which pair is the richest throw to your crib?", options: ["5-5", "King-2", "9-Q", "3-10"], correctIndex: 0, explanation: "Two fives pair with the deck's many ten-cards (and the starter) to make abundant fifteens." },
        { id: "cribbage-2-05-q2", type: "Low Combo", challenge: "Weak-looking, strong.", text: "Why is 2-3 a surprisingly good crib throw?", options: ["2+3 plus any ten-card makes a fifteen, and it threatens a run", "It is the highest-scoring pair", "It guarantees a flush", "It always makes 31"], correctIndex: 0, explanation: "2+3+ten = 15, and a 4 or an ace nearby extends a run, so 2-3 punches above its rank." },
        { id: "cribbage-2-05-q3", type: "Both Ends", challenge: "Keep and load.", text: "From 6-7-8-8-5-5 on your deal, what is the ideal play?", options: ["Keep 6-7-8-8 for twelve and throw 5-5 to your crib", "Keep 5-5 and throw 6-7", "Throw 8-8 to your crib", "Keep 5-5-6-7 and throw 8-8"], correctIndex: 0, explanation: "6-7-8-8 scores twelve and the leftover 5-5 is the best possible crib throw — you collect on both ends." },
        { id: "cribbage-2-05-q4", type: "Connectors", challenge: "Near runs.", text: "Why are connectors like 4-5 and 7-8 good crib throws?", options: ["They make fifteens and threaten runs with the starter or opponent's cards", "They are worth four points by themselves", "They block the opponent's hand", "They force a go"], correctIndex: 0, explanation: "7-8 makes a fifteen outright; 4-5 makes one with a 6; both can become runs in the box." },
        { id: "cribbage-2-05-q5", type: "Recognize", challenge: "The workhorses.", text: "Which set lists classic point-rich crib throws?", options: ["5-5, 4-5, 2-3, 7-8", "K-2, Q-3, J-4, 10-2", "A-9, 2-8, 3-7, 4-J", "K-Q, K-J, Q-J, J-10"], correctIndex: 0, explanation: "Fives and connectors that make fifteens and runs are the reliable throws to your own crib." },
      ],
    },
  },

  // ─── cribbage-2-06: Defensive Discarding to Their Crib ────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The starved box", location: "The opponent's crib", era: "Modern", emoji: "🛡️" },
    id: "cribbage-2-06",
    order: 6,
    title: "Defensive Discarding to Their Crib",
    subtitle: "Throw wide junk; never hand the opponent a 5, a pair, or a connector",
    category: "sports",
    xp: 102,
    badge: { id: "cribbage2-badge-06", name: "Crib Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "On the opponent's deal the crib is theirs, so your job reverses: starve it. Defensive discarding means throwing wide, unconnected cards that struggle to score — and above all keeping fives, pairs, and connectors out of an enemy box where every point counts against you.",
      year: 2024,
      overview: [
        "When the crib belongs to your opponent, the throw becomes damage control:\n- Throw DEAD cards — ranks far apart that rarely combine into fifteens or runs.\n- Keep BACK the dangerous cards — fives, pairs, and adjacent ranks that build the crib.\n- You cannot stop their crib from scoring entirely, but you can deny it the easy points.",
        "Some throws are clearly safer than others:\n- A high card and a low card with a wide gap — a King and a 2, a Jack and a 4 — seldom score together.\n- A 5 is the single worst card to give, because it makes a fifteen with all the ten-cards.\n- A pair hands the opponent two guaranteed points, and connectors hand them fifteens and runs.",
        "When every throw helps a little, minimize the damage:\n- Compare your candidate throws and pick the one whose two cards combine least, with each other and with likely starters.\n- It is often worth keeping a slightly weaker hand to throw two truly dead cards instead of two helpful ones.\n- The defensive instinct is to protect the opponent's crib first, then count your own hand.",
      ],
      technical: {
        title: "Picking the Deadest Pair",
        body: [
          "A safe throw is one that resists combination:\n- Wide, unconnected ranks like K-A (10 and 1) or J-4 (10 and 4) make no fifteen between themselves and start no run.\n- They can still be helped by the starter or the opponent's own discards, but they offer the least to work with.\n- The deadest available pair, not a perfect one, is the realistic target on defense.",
          "The cards to hold back are predictable:\n- Never surrender a 5 if any other card will do — it is a fifteen with sixteen of the deck's cards.\n- Avoid throwing a pair, which is a free two (or more) for the opponent's box.\n- Avoid connectors (4-5, 6-7, 7-8), which make fifteens and runs cheaply; keep them or split them so they cannot combine in the enemy crib.",
        ],
        codeExample: {
          label: "Defensive throws to the opponent's crib",
          code: `  THEIR DEAL -> minimize what the crib can score.

  SAFE throws: wide, unconnected, no 5
    K-A,  J-4,  Q-2   (10+1, 10+4, 10+2 -> no run, no 15)

  AVOID giving the opponent's crib:
    any 5      (makes 15 with sixteen ten-cards)
    a pair     (free 2+ for them)
    connectors (4-5, 6-7, 7-8 -> fifteens & runs)`,
        },
      },
      incident: {
        title: "Quietly Starving the Enemy Box",
        when: "Every deal the opponent holds",
        where: "Their crib",
        impact: "Disciplined defensive throwing denies an opponent's crib the steady points that, uncontested, would add up to a decisive lead",
        body: [
          "The crib belongs to the dealer, so half the time you are throwing into a box you cannot score. A careless player tosses whatever looks weakest in hand; a disciplined one asks what those two cards could do in the enemy crib, and throws the deadest pair available.",
          "The payoff is in what does not happen:\n- The opponent's crib that might have scored eight off a gifted 5-5 or 4-5 scores two off your wide junk instead.\n- Over a game, those denied points are as real as the ones you peg.\n- Defensive discarding rarely feels dramatic, but it is half of the discard skill.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Crib Is Theirs", sub: "on the opponent's deal", type: "system" },
          { label: "Throw Wide Junk", sub: "ranks far apart", type: "attacker" },
          { label: "Hold Back the Danger", sub: "fives, pairs, connectors", type: "victim" },
          { label: "Minimize the Damage", sub: "deadest pair available", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle warns against helping the dealer's crib" },
        { year: 1900, event: "Six-card play makes defensive throwing a distinct skill", highlight: true },
        { year: 1980, event: "Tournament strategy formalizes starving the opponent's box" },
        { year: 2024, event: "Solvers quantify the cost of gifting fives and connectors" },
      ],
      keyTakeaways: [
        "On the opponent's deal, throw wide, unconnected cards that rarely combine",
        "Never give the opponent's crib a 5 — it makes a fifteen with sixteen cards",
        "Avoid handing over pairs (a free two) and connectors (cheap fifteens and runs)",
        "When every throw helps a little, pick the deadest pair, even at a small cost to your hand",
      ],
      references: [
        { title: "Cribbage — defensive discarding", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage crib defense", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-06-q1", type: "Safe Throw", challenge: "Deadest pair.", text: "Into the opponent's crib, which throw is safest?", options: ["King and Ace (wide, no fifteen, no run)", "5 and 6", "7 and 8", "4 and 5"], correctIndex: 0, explanation: "A King and an Ace make no fifteen between them and start no run; the others all combine easily." },
        { id: "cribbage-2-06-q2", type: "The Worst Card", challenge: "Guard it.", text: "Which single card should you most avoid giving the opponent's crib?", options: ["A 5", "A 2", "An Ace", "A 9"], correctIndex: 0, explanation: "A 5 makes a fifteen with any of the deck's sixteen ten-cards, so it is the worst gift to a crib." },
        { id: "cribbage-2-06-q3", type: "Avoid Pairs", challenge: "Free points.", text: "Why avoid throwing a pair into the opponent's crib?", options: ["A pair is a free two (or more) for their box", "Pairs are illegal to throw", "Pairs cannot be split", "It forces a redeal"], correctIndex: 0, explanation: "A pair guarantees the opponent at least two points in a crib you cannot score." },
        { id: "cribbage-2-06-q4", type: "Connectors", challenge: "Cheap runs.", text: "Why are connectors like 6-7 dangerous to throw to their crib?", options: ["They make fifteens and runs cheaply with the starter or their own cards", "They are the highest-scoring pair", "They guarantee a flush", "They reach 31"], correctIndex: 0, explanation: "Adjacent ranks turn into fifteens and runs easily, so they fuel an opponent's crib." },
        { id: "cribbage-2-06-q5", type: "Trade-off", challenge: "Worth a point.", text: "When is it right to keep a slightly weaker hand on defense?", options: ["When it lets you throw two dead cards instead of two helpful ones", "Never — always keep the highest hand", "Only on your own deal", "Only when you hold a 5"], correctIndex: 0, explanation: "Sacrificing a hand point to deny the opponent's crib several points is a winning trade." },
      ],
    },
  },

  // ─── cribbage-2-07: Balancing Hand vs Crib EV ─────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The combined total", location: "Hand plus crib", era: "Modern", emoji: "⚖️" },
    id: "cribbage-2-07",
    order: 7,
    title: "Balancing Hand vs Crib EV",
    subtitle: "Sometimes a lower hand makes a higher hand-plus-crib total",
    category: "sports",
    xp: 105,
    badge: { id: "cribbage2-badge-07", name: "Balance Keeper", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "The strongest discard is not always the one that keeps the most in your hand. On your deal, breaking a hand to load your crib can win; on the opponent's, sacrificing a hand point to deny their crib can win. You are maximizing the combined total, not the hand alone.",
      year: 2024,
      overview: [
        "Every discard has two halves, and you add them with a sign:\n- On YOUR deal, the crib's expected points are ADDED — you collect them.\n- On the OPPONENT'S deal, the crib's expected points are SUBTRACTED — you suffer them.\n- The best throw maximizes hand value plus (your crib) or minus (their crib) the crib's expectation.",
        "That math can favor a lower-scoring hand:\n- On your deal, two keeps may score the same in hand, but the one that throws 5-5 to your crib beats the one that throws 8-9 — same hand, higher total.\n- A keep worth two points less can still win if it lets you throw a much richer pair to your own box.\n- The hand on the table is only part of the score you will collect.",
        "On defense the same logic protects you:\n- The highest-scoring keep sometimes forces you to throw great cards — a 4-5, a 5-10 — into the opponent's crib.\n- Keeping a hand worth a couple points less, so you can throw dead cards instead, lowers your hand but raises your net.\n- You give up a little to deny a lot.",
      ],
      technical: {
        title: "Adding and Subtracting Crib Expectation",
        body: [
          "On your own deal you compare combined totals, not hands:\n- From 5-5-7-8-9-10, keeping 7-8-9-10 scores six and lets you throw 5-5 to your crib; keeping 5-5-7-10 also scores six but throws only 8-9.\n- Both hands are six, so the decision is entirely about the crib — and 5-5 in your box is worth far more than 8-9.\n- Keep 7-8-9-10 and throw the fives: same hand, much higher total.",
          "On the opponent's deal you subtract their crib's value:\n- From 4-5-6-7-8-9, keeping 6-7-8-9 scores eight but forces you to throw 4-5 — a rich pair — into the opponent's box.\n- Keeping 5-6-7-8 scores six but lets you throw the dead 4-9 instead.\n- The two-point drop in your hand is smaller than the points you deny their crib by not handing over the 4-5, so the lower hand is the right keep.",
        ],
        codeExample: {
          label: "Maximize hand plus or minus crib",
          code: `  Score the KEEP, then value the THROW:
    your deal  -> ADD the crib's expected points
    their deal -> SUBTRACT them

  YOUR DEAL: 5 5 7 8 9 10
    keep 7-8-9-10 = 6  + throw 5-5 to YOUR crib
       vs
    keep 5-5-7-10 = 6  + throw 8-9 to YOUR crib
  Same 6 in hand -- but 5-5 in your box is worth
  far more than 8-9.  Pick the higher TOTAL.`,
        },
      },
      incident: {
        title: "Counting the Crib, Not Just the Hand",
        when: "Every discard decision",
        where: "The keep-versus-throw balance",
        impact: "Players who weigh the crib's expected value alongside their hand make discards that a hand-only count would call wrong — and win more for it",
        body: [
          "A beginner keeps the four cards that count the most and throws the rest. An intermediate player learns that the crib is part of the score too, and that the best keep is the one that maximizes the whole deal — hand and crib together, with the crib counting for you or against you depending on the deal.",
          "The lesson lands in close hands:\n- A two-point edge in the hand can be erased by a far larger swing in the crib.\n- On your deal that pushes you to feed the box; on theirs it pushes you to starve it, even at a cost.\n- Thinking in combined totals is the bridge from counting to genuine strategy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hand Is Half the Score", sub: "the crib is the rest", type: "system" },
          { label: "Your Deal: Add Crib", sub: "feed it, even breaking a hand", type: "attacker" },
          { label: "Their Deal: Subtract Crib", sub: "starve it, even losing a point", type: "victim" },
          { label: "Maximize the Total", sub: "not the hand alone", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle hints at trading hand value for crib advantage" },
        { year: 1900, event: "Six-card play makes combined hand-plus-crib thinking essential", highlight: true },
        { year: 1980, event: "Players publish crib expected values to guide the trade-off" },
        { year: 2024, event: "Solvers optimize the combined total for every discard" },
      ],
      keyTakeaways: [
        "Add the crib's expected value on your deal and subtract it on the opponent's",
        "Two keeps that score the same in hand can differ greatly once the crib is counted",
        "On your deal it can pay to break a hand to throw 5-5 or a connector to your box",
        "On defense it can pay to keep a lower hand so you can throw dead cards to their crib",
      ],
      references: [
        { title: "Cribbage — hand and crib expected value", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage expected value tables", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-07-q1", type: "The Sign", challenge: "Add or subtract.", text: "How does the crib's expected value enter your discard decision?", options: ["Added on your deal, subtracted on the opponent's", "Always added", "Always subtracted", "It is ignored"], correctIndex: 0, explanation: "You collect your crib (add it) and suffer the opponent's (subtract it) when picking the throw." },
        { id: "cribbage-2-07-q2", type: "Same Hand", challenge: "Crib decides.", text: "Two keeps both score six in hand; one throws 5-5 to your crib, the other 8-9. Which is better?", options: ["The one throwing 5-5, for a far higher combined total", "The one throwing 8-9", "They are identical", "Whichever keeps more face cards"], correctIndex: 0, explanation: "Equal hands, but 5-5 in your own crib is worth far more than 8-9, so it wins the deal." },
        { id: "cribbage-2-07-q3", type: "Lower Hand", challenge: "Higher total.", text: "Why might you keep a hand worth two points less on your own deal?", options: ["Because it lets you throw a much richer pair to your crib", "Because lower hands always win", "To avoid a skunk", "To change the starter"], correctIndex: 0, explanation: "A small drop in the hand can be more than repaid by a stronger throw to your own box." },
        { id: "cribbage-2-07-q4", type: "Defense", challenge: "Deny their box.", text: "On the opponent's deal, when is a lower-scoring keep correct?", options: ["When the higher keep forces you to throw rich cards into their crib", "Never — keep the highest hand", "Only when you are losing", "Only with a flush"], correctIndex: 0, explanation: "Sacrificing a hand point to throw dead cards instead of a 4-5 denies the opponent more than it costs." },
        { id: "cribbage-2-07-q5", type: "The Principle", challenge: "What you maximize.", text: "What are you really trying to maximize on each discard?", options: ["Hand value combined with the crib's expectation", "Only the points in your hand", "Only the crib", "The number of cards kept"], correctIndex: 0, explanation: "The best discard maximizes the whole deal — hand plus or minus the crib — not the hand alone." },
      ],
    },
  },

  // ─── cribbage-2-08: The Starter, Flush & Nobs ─────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The cut", location: "The shared fifth card", era: "Modern", emoji: "🃏" },
    id: "cribbage-2-08",
    order: 8,
    title: "The Starter Card, Flush & Nobs",
    subtitle: "How the cut, a four-flush, and his nobs shape your keep",
    category: "sports",
    xp: 108,
    badge: { id: "cribbage2-badge-08", name: "Cut Reader", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "Your four kept cards are never the whole story — the starter cut joins them as a shared fifth card, and suits start to matter. A four-card flush, a held Jack that might match the cut for his nobs, and the chance the starter completes a run all feed back into which four you keep.",
      year: 2024,
      overview: [
        "The starter is a fifth card you do not control but must plan around:\n- It counts for both players' hands and for the crib at the show.\n- Any keep can be improved or left flat by the cut, so you weigh which four are most LIKELY to be helped.\n- A keep with many open ends — near-runs, fives, a four-flush — has more cards that turn it into a bigger score.",
        "Flushes change with the starter, and the crib is stricter:\n- Four cards of one suit in your HAND score four; if the starter is also that suit it becomes a five-card flush for five.\n- In the CRIB, a flush needs all five cards (including the starter) to share a suit — four is not enough.\n- A four-flush is a real reason to keep an otherwise weaker four, because the cut can lift it to five.",
        "His nobs ties a held Jack to the starter's suit:\n- If you hold the Jack of the same suit as the starter, you score one for his nobs.\n- It is a single point, but keeping the Jack that matches a likely suit adds a small edge.\n- Do not confuse it with his heels — the two points the dealer pegs only when a Jack is cut as the starter itself.",
      ],
      technical: {
        title: "Open Ends, Flush Math, and the Held Jack",
        body: [
          "Counting a kept hand with the starter shows how the cut pays off:\n- Keep J-4-5-6 and cut a 7 of the Jack's suit: 4+5+6 makes fifteen (2), J+5 makes fifteen (2), the run 4-5-6-7 scores four, and the Jack matches the starter's suit for his nobs (1) — nine points.\n- The same four kept cards score far less without that helpful cut, which is why open-ended keeps are valuable.\n- Always notice the runs and fifteens a likely starter would complete.",
          "Flushes reward suit awareness in the keep:\n- A four-card hand flush is worth four immediately and five if the starter matches, so four suited cards can outscore a higher mixed keep once the cut is considered.\n- The crib flush rule is harsher: four suited cards plus a non-matching starter score nothing, so do not bank on a crib flush from four.\n- When holding a Jack, prefer keeping the one whose suit is most likely to match the cut for his nobs.",
        ],
        codeExample: {
          label: "Starter, flush, and his nobs",
          code: `  The CUT (starter) is a shared 5th card for both
  hands and the crib at the show.

  HAND FLUSH:  4 of a suit in hand = 4
               + starter same suit = 5
  CRIB FLUSH:  needs ALL FIVE one suit (4 won't do)
  HIS NOBS:    hold the JACK of the STARTER's suit = 1

  EXAMPLE: J(s) 4 5 6  + starter 7(s)
    4+5+6 = 15 (2),  J+5 = 15 (2),  run 4-5-6-7 (4),
    nobs J(s) matches 7(s) (1)  ->  9`,
        },
      },
      incident: {
        title: "Planning Around a Card You Cannot See",
        when: "Every show",
        where: "The starter cut",
        impact: "Keeping hands with open ends, a four-flush, or a suit-matched Jack squeezes extra points out of the one card no one controls",
        body: [
          "The starter is the great equalizer: it joins every hand and the crib, and no one chooses it. Strong players cannot control the cut, but they steer toward keeps that the cut is most likely to reward — near-runs, fives, four-flushes, and Jacks that might match.",
          "The small edges add up:\n- A four-flush that becomes five on a matching cut; a near-run the starter completes; a Jack that lands his nobs.\n- None of these is guaranteed, but keeping the four cards with the most ways to improve raises your average score.\n- The cut is luck, but planning for it is skill.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Starter Joins Every Hand", sub: "shared fifth card", type: "system" },
          { label: "Four-Flush Can Become Five", sub: "if the cut matches", type: "attacker" },
          { label: "His Nobs", sub: "held Jack of starter's suit = 1", type: "victim" },
          { label: "Keep the Open Ends", sub: "most ways to improve", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "The shared starter card is built into cribbage from the start" },
        { year: 1742, event: "Hoyle distinguishes hand and crib flush rules and his nobs", highlight: true },
        { year: 1900, event: "Six-card play makes planning around the cut routine" },
        { year: 2024, event: "Solvers weigh starter probabilities into every keep" },
      ],
      keyTakeaways: [
        "The starter is a shared fifth card, so keep the four most likely to be improved by the cut",
        "A four-card hand flush scores four, or five if the starter matches the suit",
        "A crib flush needs all five cards one suit — four suited cards plus a stray starter score nothing",
        "His nobs is one point for holding the Jack of the starter's suit, distinct from his heels",
      ],
      references: [
        { title: "Cribbage — flushes and his nobs", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage scoring reference", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-08-q1", type: "The Starter", challenge: "Shared card.", text: "How does the starter card affect your hand?", options: ["It joins your four as a shared fifth card at the show", "Only the dealer uses it", "It is discarded before counting", "It replaces your worst card"], correctIndex: 0, explanation: "The cut counts for both players' hands and the crib, so plan keeps around how it might help." },
        { id: "cribbage-2-08-q2", type: "Hand Flush", challenge: "Four of a suit.", text: "How many points is a four-card flush in your hand, and how does the starter change it?", options: ["Four, becoming five if the starter is the same suit", "Five always", "Four, never more", "One"], correctIndex: 0, explanation: "Four suited cards score four in hand; a matching starter makes a five-card flush for five." },
        { id: "cribbage-2-08-q3", type: "Crib Flush", challenge: "Stricter rule.", text: "When does a flush score in the crib?", options: ["Only when all five cards, including the starter, share a suit", "When any four cards match", "Whenever the hand had a flush", "Never"], correctIndex: 0, explanation: "A crib flush requires all five cards one suit; four suited cards plus a stray starter score nothing." },
        { id: "cribbage-2-08-q4", type: "His Nobs", challenge: "The matching Jack.", text: "You hold the Jack of diamonds and the starter is a diamond. What do you score?", options: ["One point for his nobs", "Two points for his heels", "Nothing", "Five for a flush"], correctIndex: 0, explanation: "Holding the Jack of the starter's suit scores one for his nobs; his heels is the dealer's cut-Jack bonus." },
        { id: "cribbage-2-08-q5", type: "Open Ends", challenge: "Plan the cut.", text: "Which keep is best positioned to be helped by the starter?", options: ["A near-run with open ends and a four-flush", "Four widely separated, unsuited cards", "Two pairs of high cards", "Four cards summing under ten"], correctIndex: 0, explanation: "Near-runs, fives, and a four-flush give the cut the most ways to add points." },
      ],
    },
  },

  // ─── cribbage-2-09: Dealer vs Pone Strategy ───────────────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "Dealer and pone", location: "The two seats", era: "Modern", emoji: "🎭" },
    id: "cribbage-2-09",
    order: 9,
    title: "Dealer vs Pone Strategy",
    subtitle: "Dealers throw aggressively to their own crib; the pone discards defensively",
    category: "sports",
    xp: 112,
    badge: { id: "cribbage2-badge-09", name: "Seat Strategist", emoji: "🎭" },
    challengeType: "quiz",
    info: {
      tagline: "Your discard strategy depends on which seat you are in. The dealer owns the crib and can throw aggressively to build it; the pone — the non-dealer — is throwing into the enemy box and must discard defensively. The same six cards call for opposite plays depending on who dealt.",
      year: 2024,
      overview: [
        "The two seats have opposite incentives every deal:\n- The DEALER owns the crib, so aggressive throws that combine — fives, connectors — pay off in points they collect.\n- The PONE (non-dealer) is feeding the opponent's crib, so cautious, dead throws keep the damage down.\n- Because the deal alternates, you switch between these mindsets hand after hand.",
        "As dealer you can afford to commit cards to the box:\n- Throwing a 5, a 5-10, or a 2-3 to your own crib is a strength, not a sacrifice.\n- You can even break a strong hand slightly to load the crib, because both halves are yours.\n- The dealer's edge is real — the crib is why holding the deal is worth points on average.",
        "As pone you defend first and count second:\n- Keep fives and connectors out of the opponent's box; throw the deadest pair you can.\n- It is often worth a slightly weaker hand to avoid handing the dealer's crib a gift.\n- The same six cards that you would split aggressively on your own deal you handle cautiously as the pone.",
      ],
      technical: {
        title: "Same Six Cards, Opposite Decisions",
        body: [
          "A single hand makes the contrast concrete:\n- Holding 5-6-7-8-9-10 as the DEALER, keep 6-7-8-9 (a run of four and two fifteens, for eight) and throw 5-10 straight into your own crib — a 5 with a ten-card is a built-in fifteen you will score.\n- The aggressive throw is correct because the crib is yours.\n- You keep a strong hand and feed the box at the same time.",
          "Now flip the deal and the play changes:\n- Holding the same 5-6-7-8-9-10 as the PONE, throwing 5-10 would gift the opponent's crib a fifteen, so do not.\n- Keep 5-6-7-8 (a run of four and a fifteen, for six) and throw 9-10 instead — a smaller hand, but no 5 surrendered.\n- Two points of hand value are a fair price for keeping the 5 out of the enemy box.",
        ],
        codeExample: {
          label: "Dealer aggressive, pone defensive",
          code: `  DEALER (crib is yours): throw to BUILD it
    aggressive throws: 5-5, 5-10, 4-5, 2-3 ok

  PONE / non-dealer (crib is theirs): throw to STARVE it
    defensive throws: wide junk, never a 5

  SAME 6:  5 6 7 8 9 10
    as DEALER -> keep 6-7-8-9 (8), throw 5-10 to YOUR crib
    as PONE   -> keep 5-6-7-8 (6), throw 9-10 (deny the 5)`,
        },
      },
      incident: {
        title: "Two Seats, Two Mindsets",
        when: "Every deal, alternating",
        where: "Dealer and pone",
        impact: "Adjusting your discard to the seat you are in — aggressive on your deal, defensive on theirs — is one of the most reliable sources of edge in cribbage",
        body: [
          "The crib makes the deal valuable, and good players let that fact drive their throws. On their own deal they lean in, feeding the crib cards that combine; on the opponent's they pull back, throwing dead cards and guarding their fives.",
          "The discipline is to switch cleanly:\n- The same six cards are an aggressive layaway as dealer and a cautious one as pone.\n- Forgetting which seat you are in is a classic mistake — gifting your fives to an enemy crib, or timidly starving your own.\n- Matching your discard to the deal is half the battle.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Check the Seat", sub: "dealer or pone?", type: "system" },
          { label: "Dealer: Aggressive", sub: "feed your own crib", type: "attacker" },
          { label: "Pone: Defensive", sub: "starve the enemy crib", type: "victim" },
          { label: "Same Cards Flip", sub: "opposite layaway", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "The dealer-owned crib creates the dealer-pone asymmetry" },
        { year: 1742, event: "Hoyle notes the dealer's crib advantage", highlight: true },
        { year: 1900, event: "Six-card play formalizes aggressive-dealer, defensive-pone discarding" },
        { year: 2024, event: "Solvers confirm the dealer's average crib edge per deal" },
      ],
      keyTakeaways: [
        "The dealer owns the crib and can throw aggressively to build it",
        "The pone feeds the opponent's crib and should discard defensively",
        "As dealer, a 5, 5-10, or 2-3 to your own box is a strength, not a sacrifice",
        "The same six cards call for opposite layaways depending on who dealt",
      ],
      references: [
        { title: "Cribbage — dealer and pone strategy", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage positional strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-09-q1", type: "The Dealer", challenge: "Own the box.", text: "Why can the dealer throw aggressively?", options: ["The crib is theirs, so combining cards build points they collect", "Dealers must throw their highest cards", "The pone counts the dealer's crib", "Aggressive throws are required by the rules"], correctIndex: 0, explanation: "Because the dealer scores the crib, cards that combine in it are points for the dealer." },
        { id: "cribbage-2-09-q2", type: "The Pone", challenge: "Defend the box.", text: "How should the pone (non-dealer) discard?", options: ["Defensively, throwing dead cards into the opponent's crib", "Aggressively, throwing fives and connectors", "Randomly", "Always keeping the highest hand regardless"], correctIndex: 0, explanation: "The pone feeds the opponent's crib, so cautious, dead throws limit the damage." },
        { id: "cribbage-2-09-q3", type: "Dealer Throw", challenge: "Build it.", text: "As dealer with 5-6-7-8-9-10, what is a strong play?", options: ["Keep 6-7-8-9 and throw 5-10 to your own crib", "Keep 5-6-7-8 and throw 9-10", "Throw 6-7 to your crib", "Keep 9-10 and throw 5-6"], correctIndex: 0, explanation: "6-7-8-9 scores eight and the 5-10 throw is a built-in fifteen you will collect in your box." },
        { id: "cribbage-2-09-q4", type: "Pone Throw", challenge: "Deny the five.", text: "As pone with the same 5-6-7-8-9-10, what changes?", options: ["Keep 5-6-7-8 and throw 9-10 to avoid giving up the 5", "Keep 6-7-8-9 and throw 5-10", "Throw 5-5 to their crib", "Keep 9-10 and throw 5-6"], correctIndex: 0, explanation: "Throwing 5-10 would gift the opponent's crib a fifteen; keep the 5 and throw 9-10 instead." },
        { id: "cribbage-2-09-q5", type: "The Switch", challenge: "Mind the seat.", text: "Why do the same six cards call for different discards?", options: ["The crib's owner changes with the deal, flipping aggressive to defensive", "The card values change", "The target score changes", "The suits rotate"], correctIndex: 0, explanation: "Whose crib it is reverses the goal, so the seat you are in dictates the layaway." },
      ],
    },
  },

  // ─── cribbage-2-10: Discard Tables & Expected Value ───────────────────────────
  {
    epochId: "cribbage-2",
    wonder: { name: "The discard table", location: "Where cribbage becomes math", era: "Modern", emoji: "📊" },
    id: "cribbage-2-10",
    order: 10,
    title: "Discard Tables & Expected Value",
    subtitle: "The studied 'best average discard' for every six-card hand",
    category: "sports",
    xp: 115,
    badge: { id: "cribbage2-badge-10", name: "EV Master", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "At the highest level the discard is nearly solved. For any six cards you can compute the average points each two-card throw yields over every possible starter, add or subtract the crib's expectation, and pick the best. Masters internalize these 'discard tables' until the optimal throw feels automatic.",
      year: 2024,
      overview: [
        "Expected value turns the layaway from a guess into a calculation:\n- For each candidate throw, average your resulting hand score across all the starter cards that could be cut.\n- Add the crib's expected value on your deal, or subtract it on the opponent's.\n- The throw with the best net expectation is the correct discard.",
        "These results are well studied and tabulated:\n- Published discard tables and software give the best throw for every six-card holding.\n- Masters do not recompute at the table — they have absorbed the patterns until the right keep is obvious.\n- The patterns match everything in this epoch: keep and feed fives, throw connectors to your box, starve the enemy crib.",
        "Rules of thumb back up the tables:\n- The dealer's crib is worth roughly four to five points on average, which is why the deal is an edge.\n- A typical four-card hand scores around four to five points before the crib.\n- These benchmarks tell you when a hand is unusually strong or weak and when to deviate from the routine throw.",
      ],
      technical: {
        title: "Computing the Best Average Discard",
        body: [
          "The expected-value method is mechanical once you see it:\n- Enumerate each possible two-card throw, leaving a four-card keep.\n- For each keep, score it against every remaining card as the starter and average — that is the hand's expected value.\n- Add (your deal) or subtract (their deal) the crib's expected value for the two thrown cards; the highest net wins.",
          "A worked hand shows the table in action:\n- From 4-5-5-6-5-J, keeping 5-5-5-J scores fourteen on its own — three fifteens of 5+J, the 5+5+5 fifteen (eight in fifteens), and the pair royal of fives (six).\n- No other keep comes close, so the throw is 4-6 into your crib, where on your deal it adds a little more expected value.\n- The table simply formalizes what the count already screams: keep the three fives and the Jack.",
        ],
        codeExample: {
          label: "Choosing a discard by expected value",
          code: `  A DISCARD TABLE = the average value of each 2-card
  throw over ALL possible starter cards.

  SIX: 4 5 5 6 5 J   (your deal -> your crib)
    keep 5-5-5-J = 14   (best hand by far)
      5+J x3 = 6, 5+5+5 = 2 (fifteens 8), pair royal 6
    throw 4-6 to your crib
  BEST DISCARD = highest (hand + your crib EV),
                 or (hand - their crib EV) on defense.`,
        },
      },
      incident: {
        title: "From Card Sense to a Solved Discard",
        when: "Modern competitive cribbage",
        where: "Discard tables and software",
        impact: "Computed expected values confirmed and sharpened the discard instincts players had built over centuries, turning the layaway into a near-solved decision",
        body: [
          "For most of cribbage's history the best discard was a matter of feel, refined by experience. Modern analysis put numbers on it: by averaging over every possible starter and accounting for the crib, the expected value of each throw can be computed exactly, and the best one identified.",
          "The tables vindicated the old wisdom:\n- Keep and feed your fives, throw connectors to your own crib, starve the opponent's — all show up as the highest-EV plays.\n- Masters absorb the patterns rather than the raw numbers, so the optimal throw feels automatic.\n- Four centuries after Suckling, the humble layaway is as deep as a chess opening — and now, nearly solved.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Average Over All Starters", sub: "each throw's expected hand", type: "system" },
          { label: "Add or Subtract the Crib", sub: "yours plus, theirs minus", type: "attacker" },
          { label: "Pick the Best Net EV", sub: "the correct discard", type: "victim" },
          { label: "Internalize the Patterns", sub: "until it feels automatic", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle begins the analytical study of cribbage" },
        { year: 1900, event: "Six-card cribbage becomes the standard form for analysis" },
        { year: 1980, event: "The American Cribbage Congress standardizes competitive play", highlight: true },
        { year: 2024, event: "Discard solvers compute the best throw for every six-card hand" },
      ],
      keyTakeaways: [
        "A discard table gives the average value of each throw over all possible starter cards",
        "The best discard maximizes hand value plus your crib or minus the opponent's",
        "Published tables and software match the instincts taught throughout this epoch",
        "The dealer's crib averages about four to five points, and a typical hand four to five",
      ],
      references: [
        { title: "Cribbage — strategy and statistics", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage statistics — discard expected values", url: "https://en.wikipedia.org/wiki/Cribbage_statistics" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-2-10-q1", type: "The Table", challenge: "What it gives.", text: "What does a discard table tell you?", options: ["The average value of each two-card throw over all possible starters", "Which suit will be cut", "The opponent's hand", "The exact starter card"], correctIndex: 0, explanation: "It averages each throw's outcome across every starter, identifying the best discard." },
        { id: "cribbage-2-10-q2", type: "Best Keep", challenge: "Fourteen in hand.", text: "From 4-5-5-6-5-J on your deal, which keep scores the most?", options: ["5-5-5-J (fourteen points)", "4-5-5-6 (twelve points)", "5-5-6-J (six points)", "4-5-6-J (seven points)"], correctIndex: 0, explanation: "Three fives and a Jack make eight in fifteens (5+J thrice plus 5+5+5) and a pair royal of six — 14." },
        { id: "cribbage-2-10-q3", type: "The Objective", challenge: "What you maximize.", text: "What does the best discard maximize?", options: ["Hand value plus your crib, or minus the opponent's crib", "Only the hand", "Only the crib", "The number of fives kept"], correctIndex: 0, explanation: "Net expected value combines the hand with the crib, signed by whose deal it is." },
        { id: "cribbage-2-10-q4", type: "Crib Value", challenge: "Average box.", text: "Roughly how many points is the dealer's crib worth on average?", options: ["About four to five points", "About fifteen points", "About twenty points", "Zero"], correctIndex: 0, explanation: "The crib averages roughly four to five points, which is why holding the deal is an edge." },
        { id: "cribbage-2-10-q5", type: "Tables vs Sense", challenge: "What they confirm.", text: "How do computed discard tables relate to the instincts in this epoch?", options: ["They confirm them — keep fives, feed your box, starve theirs are the top plays", "They contradict them entirely", "They apply only to five-card cribbage", "They ignore the crib"], correctIndex: 0, explanation: "The highest-EV plays match the taught patterns; masters absorb the patterns, not the raw numbers." },
      ],
    },
  },
];
