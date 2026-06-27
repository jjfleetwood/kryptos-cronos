import type { StageConfig, EpochConfig } from "./types";

export const cribbage1Epoch: EpochConfig = {
  id: "cribbage-1",
  name: "Cribbage",
  subtitle: "Fifteen-two, fifteen-four — learn the classic pegging card game",
  description:
    "Cribbage — the centuries-old card game played across a wooden pegging board — taught from the ground up. This epoch builds a complete beginner into a confident player: the object and the race to 121, the deal and the dealer's crib, the cut and 'his heels', counting your hand at 'the show', the scoring building blocks (fifteens, runs, pairs, flushes, and 'his nobs'), the play/pegging phase up to 31, pegging and discarding strategy, the board and match-play etiquette (skunks, muggins, the two-peg leapfrog), and the expected-value thinking that defines mastery. A game of arithmetic, card sense, and quiet tactics — attributed to the poet Sir John Suckling and descended from the older game Noddy.",
  emoji: "🪵",
  color: "amber",
  unlocked: true,
};

export const cribbage1Stages: StageConfig[] = [
  // ─── cribbage-1-01: What Is Cribbage ──────────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The cribbage board", location: "Pubs, parlors, and kitchen tables", era: "1630s–present", emoji: "🪵" },
    id: "cribbage-1-01",
    order: 1,
    title: "What Is Cribbage",
    subtitle: "The board, the race to 121, and where the game came from",
    category: "sports",
    xp: 85,
    badge: { id: "cribbage-badge-01", name: "Took a Seat", emoji: "🪵" },
    challengeType: "quiz",
    info: {
      tagline: "Two players, a deck of cards, and a wooden board with rows of holes. Cribbage is a race to 121 points scored by making clever card combinations — a 400-year-old game of arithmetic and tactics, traditionally credited to the poet Sir John Suckling.",
      year: 2024,
      overview: [
        "Cribbage is a card game in which players score points for combinations of cards and race their pegs around a board to a target total. The classic game is for two players, but it adapts well to three or four. Each player is dealt a small hand, everyone contributes cards to an extra hand called the 'crib', and points are scored in two phases — 'the play' (pegging) and 'the show' (counting hands) — until someone reaches the finish.",
        "A few features make cribbage distinctive:\n- THE BOARD — score is kept by moving pegs along tracks of holes rather than with pencil and paper, which is why a cribbage set is instantly recognizable.\n- TWO WAYS TO SCORE EACH DEAL — you peg points during the play of the cards AND count points when you reveal your hand, so every deal has layers.\n- THE EXTRA HAND — the 'crib' is a bonus hand that belongs to the dealer, giving the deal real value and shaping every discard decision.",
        "Every standard two-player game has the same shape:\n- The goal is to be first to peg 121 points (a 'twice around' the standard board); some play to 61 ('once around').\n- Players alternate as the dealer, and the deal matters because the dealer owns the crib.\n- The winner is simply the first peg to reach or pass the final hole — there is no need to land exactly on it.",
      ],
      technical: {
        title: "The Object, the Board, and Suckling's Invention",
        body: [
          "The board and the target define the game:\n- The standard board has two rows of 30 holes per player plus game-end holes, so a full circuit is 60 and 'twice around' is 120 — you win on the 121st point.\n- Score is pegged with two pegs that leapfrog each other (covered later), which keeps an auditable record of your last move.\n- Cards rank with the ace LOW (worth 1) and face cards worth 10; only the pip values matter for the scoring math, not the suits (except for flushes).",
          "Cribbage has an unusually well-attributed origin:\n- The game is traditionally credited to the English poet and courtier SIR JOHN SUCKLING in the early-to-mid 1600s.\n- It evolved from an older Elizabethan game called NODDY, borrowing its scoring ideas and adding the crib — the innovation that made cribbage its own game.\n- It has been played continuously ever since, becoming a fixture of British and American card culture and even an official pastime aboard ships and in pubs.",
        ],
        codeExample: {
          label: "Anatomy of a cribbage board",
          code: `  START )  o o o o o ... o o o o o  ( first street (30)
           o o o o o ... o o o o o    second street (30)
           ---------------------------
           o o o o o ... o o o o o    third street (30)
           o o o o o ... o o o o o  ) FINISH = 121

  Each player has 2 pegs that LEAPFROG up the track.
  Race to 121 ("twice around"); some games stop at 61.`,
        },
      },
      incident: {
        title: "A Poet's Game That Outlived Its Inventor",
        when: "c. 1630s",
        where: "England",
        impact: "Sir John Suckling's refinement of the older game Noddy produced cribbage, which spread across the English-speaking world and is still played four centuries later",
        body: [
          "By long tradition, cribbage was devised in the early seventeenth century by Sir John Suckling, a wealthy English poet, gambler, and courtier. He is said to have taken the existing card game Noddy and added a crucial twist — the 'crib', a separate hand that the dealer scores — which transformed it into a deeper, more strategic game.",
          "From those courtly beginnings the game spread widely:\n- English settlers carried cribbage to North America, where it became a beloved tavern and home game.\n- It earned a near-mythic place in naval tradition; the wardroom cribbage board of one famous submarine became a service heirloom.\n- Today organized play is overseen by groups like the American Cribbage Congress, but the rules a beginner learns are essentially the ones Suckling would recognize.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal the Cards", sub: "small hands + a crib", type: "system" },
          { label: "The Play (Pegging)", sub: "score as cards are played", type: "attacker" },
          { label: "The Show (Counting)", sub: "score each hand + crib", type: "victim" },
          { label: "First to 121 Wins", sub: "race around the board", type: "result" },
        ],
      },
      timeline: [
        { year: 1620, event: "The Elizabethan game Noddy is widely played in England" },
        { year: 1635, event: "Sir John Suckling is credited with inventing cribbage from Noddy", highlight: true },
        { year: 1700, event: "Cribbage crosses the Atlantic with English settlers" },
        { year: 1980, event: "The American Cribbage Congress standardizes modern tournament rules" },
      ],
      keyTakeaways: [
        "Cribbage is a race to 121 points, scored on a pegging board; some games go to 61",
        "Points are scored twice each deal — during 'the play' and again at 'the show'",
        "The 'crib' is an extra hand that belongs to the dealer, which makes the deal valuable",
        "The game is traditionally credited to Sir John Suckling (~1630s), evolved from the older game Noddy",
      ],
      references: [
        { title: "Cribbage — overview", url: "https://en.wikipedia.org/wiki/Cribbage" },
        { title: "John Suckling (poet)", url: "https://en.wikipedia.org/wiki/John_Suckling_(poet)" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-01-q1", type: "The Object", challenge: "The finish line.", text: "What is the standard target score that wins a game of cribbage?", options: ["121 points", "100 points", "500 points", "21 points"], correctIndex: 0, explanation: "Standard cribbage is a race to 121 ('twice around' the board); some games go to 61." },
        { id: "cribbage-1-01-q2", type: "Scoring Method", challenge: "Keeping score.", text: "How is the score traditionally kept in cribbage?", options: ["By moving pegs along holes on a wooden board", "With a deck of scoring cards", "On a dartboard", "By stacking chips"], correctIndex: 0, explanation: "Cribbage uses a pegging board with rows of holes — its signature feature." },
        { id: "cribbage-1-01-q3", type: "Origin", challenge: "Who gets the credit?", text: "Who is traditionally credited with inventing cribbage?", options: ["The poet Sir John Suckling", "Edmond Hoyle", "King Henry VIII", "Doyle Brunson"], correctIndex: 0, explanation: "Cribbage is traditionally attributed to the 17th-century English poet Sir John Suckling." },
        { id: "cribbage-1-01-q4", type: "Ancestry", challenge: "An older game.", text: "Cribbage evolved from which older card game?", options: ["Noddy", "Whist", "Faro", "Euchre"], correctIndex: 0, explanation: "Cribbage descended from the Elizabethan game Noddy, with the crib added as the key innovation." },
        { id: "cribbage-1-01-q5", type: "Players", challenge: "How many at the table?", text: "What is the classic number of players for cribbage?", options: ["Two (though three or four also play)", "Exactly four", "Six", "Only one"], correctIndex: 0, explanation: "Cribbage is classically a two-player game but adapts to three or four players." },
      ],
    },
  },

  // ─── cribbage-1-02: The Deal & The Crib ───────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The crib", location: "The dealer's bonus hand", era: "Modern", emoji: "🃏" },
    id: "cribbage-1-02",
    order: 2,
    title: "The Deal & The Crib",
    subtitle: "Six cards each, two to the box, the cut, and 'his heels'",
    category: "sports",
    xp: 88,
    badge: { id: "cribbage-badge-02", name: "Dealt In", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "Every cribbage deal starts the same way: six cards each, and both players throw two away into the dealer's crib. Then a card is cut to start the play. Understanding the deal — and why the crib is the dealer's prize — is the foundation of cribbage strategy.",
      year: 2024,
      overview: [
        "In two-handed cribbage, the dealer gives each player six cards. Then comes the decision that defines the game:\n- LAY AWAY — each player chooses two of their six cards to discard face-down into the 'crib' (also called the 'box').\n- THE CRIB BELONGS TO THE DEALER — those four set-aside cards form a fifth hand that only the dealer gets to count at the show.\n- KEEP FOUR — after laying away, each player keeps a four-card hand to use in the play and the show.",
        "After the discards, the non-dealer cuts the deck and the dealer turns the top card of the lower half face-up:\n- This turn-up is the 'starter' (also called the 'cut card' or 'the turn').\n- The starter is shared: it counts as a fifth card for BOTH players' hands and for the crib when scoring at the show.\n- During the play phase, however, the starter is not played — it sits on the deck as a reference card.",
        "There is one immediate scoring rule on the cut:\n- 'HIS HEELS' (also 'his nibs' for the cut Jack) — if the starter card turned up is a JACK, the dealer immediately pegs 2 points.\n- This is a small but real reward for dealing, and it is scored before any cards are played.\n- Because the dealer owns the crib and can peg 'his heels', holding the deal is a meaningful advantage that rotates each hand.",
      ],
      technical: {
        title: "Why the Crib Is the Dealer's Edge, and the Mechanics of the Cut",
        body: [
          "The crib is a structural advantage that alternates fairly:\n- Both players feed the crib two cards, but only the dealer scores it — so on your own deal you want to put GOOD cards in the crib, and on the opponent's deal you want to throw JUNK.\n- The deal alternates every hand, so over a game each player deals about half the time and the crib advantage balances out.\n- Studies of the game put the dealer's crib edge at a few points per deal on average — enough that experienced players track who is 'on the crib'.",
          "The cut has precise mechanics worth knowing:\n- The non-dealer lifts the top portion of the deck and the dealer reveals the card beneath, which becomes the starter.\n- If the cut reveals a Jack, the dealer pegs 2 for 'his heels' right then — but only on the cut. A Jack appearing later is scored differently ('his nobs', at the show).\n- A common etiquette/strictness rule: the dealer must claim 'his heels' before the opponent plays the first card, or forfeit it in some house rules.",
        ],
        codeExample: {
          label: "The deal, layaway, and the cut",
          code: `  DEAL:    each player gets 6 cards
  LAYAWAY: each discards 2  ->  the CRIB (4 cards)
           (crib belongs to the DEALER only)
  KEEP:    each player holds 4 cards

  CUT:     opponent cuts -> dealer flips the STARTER
           if STARTER is a JACK -> dealer pegs 2
                                   ("his heels")

  The starter is shared by both hands + the crib
  at the show, but is NOT played during pegging.`,
        },
      },
      incident: {
        title: "The Crib: One Rule That Made the Game",
        when: "17th century onward",
        where: "From Noddy to cribbage",
        impact: "Adding a separate dealer-owned hand turned a simple counting game into a contest of discards — the strategic heart of cribbage",
        body: [
          "The older game Noddy had hands and a turn-up card, but no crib. Cribbage's defining innovation was the addition of that fifth hand built from everyone's discards and awarded to the dealer. Suddenly every throwaway carried weight: a card you discard does not just leave your hand, it helps (or, on your opponent's deal, hurts) someone's score.",
          "This single rule is why cribbage rewards thought:\n- Each deal you face a tension — keep a card for your hand's value, or lay it away to boost or starve the crib.\n- Because the deal rotates, the same player is sometimes helped and sometimes hurt by their discards, keeping the game balanced.\n- The crib is the reason 'what to throw' is a whole skill of its own, covered later in this course.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal Six Each", sub: "two-handed cribbage", type: "system" },
          { label: "Lay Away Two", sub: "into the dealer's crib", type: "attacker" },
          { label: "Cut the Starter", sub: "shared fifth card", type: "victim" },
          { label: "His Heels", sub: "cut Jack = 2 for dealer", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage adds the crib to Noddy's basic structure", highlight: true },
        { year: 1742, event: "Edmond Hoyle codifies cribbage rules in print" },
        { year: 1900, event: "Six-card cribbage becomes the standard form over the older five-card game" },
        { year: 1980, event: "ACC rules fix the dealer's crib and 'his heels' for tournament play" },
      ],
      keyTakeaways: [
        "Each player is dealt six cards and discards two into the crib (the 'box')",
        "The crib is a fifth hand that belongs to and is scored only by the dealer",
        "The non-dealer cuts and the dealer turns up the shared 'starter' card",
        "If the starter is a Jack, the dealer pegs 2 immediately for 'his heels'",
      ],
      references: [
        { title: "Cribbage — the deal and the crib", url: "https://en.wikipedia.org/wiki/Cribbage#The_deal" },
        { title: "Cribbage rules — American Cribbage Congress", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-02-q1", type: "The Deal", challenge: "How many cards?", text: "In two-player cribbage, how many cards is each player dealt?", options: ["Six", "Five", "Four", "Seven"], correctIndex: 0, explanation: "Each player gets six cards, then discards two to the crib, keeping four." },
        { id: "cribbage-1-02-q2", type: "The Crib", challenge: "Whose hand?", text: "Who scores the crib?", options: ["The dealer", "The non-dealer", "Both players split it", "Nobody"], correctIndex: 0, explanation: "The crib belongs to the dealer — the main reason the deal is an advantage." },
        { id: "cribbage-1-02-q3", type: "His Heels", challenge: "Cut a Jack.", text: "If the starter card cut is a Jack, what happens?", options: ["The dealer pegs 2 points ('his heels')", "The non-dealer pegs 2 points", "The hand is redealt", "Nothing"], correctIndex: 0, explanation: "A Jack cut as the starter scores 'his heels' — 2 points for the dealer, immediately." },
        { id: "cribbage-1-02-q4", type: "The Starter", challenge: "The fifth card.", text: "How is the 'starter' (turn-up) card used?", options: ["As a shared fifth card for both hands and the crib at the show", "Only by the dealer", "It is discarded immediately", "It replaces a player's worst card"], correctIndex: 0, explanation: "The starter counts as a fifth card for both players' hands and the crib when counting." },
        { id: "cribbage-1-02-q5", type: "Layaway", challenge: "Build the crib.", text: "Where do the two cards each player discards go?", options: ["Into the crib (the 'box')", "Back into the deck", "To the opponent's hand", "Out of the game entirely"], correctIndex: 0, explanation: "Each player lays away two cards into the crib, which the dealer later counts." },
      ],
    },
  },

  // ─── cribbage-1-03: The Show — Counting Your Hand ─────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The show", location: "Where hands are counted", era: "Modern", emoji: "🔢" },
    id: "cribbage-1-03",
    order: 3,
    title: "The Show — Counting Your Hand",
    subtitle: "Fifteens, pairs, runs, flushes, and 'his nobs'",
    category: "sports",
    xp: 90,
    badge: { id: "cribbage-badge-03", name: "Counter", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "After the cards are played, everyone counts their hand for points — the phase called 'the show'. Your four cards plus the shared starter make a five-card hand, and you score every combination it contains: fifteens, pairs, runs, flushes, and the Jack bonus called 'his nobs'.",
      year: 2024,
      overview: [
        "At the show, each player makes a five-card hand from their four cards plus the starter and scores every scoring combination it contains. The categories are:\n- FIFTEENS — every distinct group of cards adding up to 15 pips scores 2 points.\n- PAIRS — two cards of the same rank score 2 (more for three or four of a kind).\n- RUNS — three or more cards in consecutive rank score 1 point per card.\n- FLUSHES — four or five cards of the same suit score 4 or 5.\n- HIS NOBS — holding the Jack of the same suit as the starter scores 1.",
        "Counting order and 'who counts first' matter:\n- The NON-DEALER counts and pegs their hand first, then the DEALER counts their hand, and finally the dealer counts the crib.\n- This order matters in a close game: the non-dealer may reach 121 and win before the dealer ever gets to count.\n- Each combination is scored separately, so the same card can be part of a fifteen, a pair, and a run all at once — you add them all up.",
        "The traditional way players announce a count is a sing-song tally:\n- A hand might be counted aloud as 'fifteen-two, fifteen-four, and a pair is six' — each phrase adds points.\n- Beginners are encouraged to count out loud and in a consistent order (fifteens, then pairs, then runs, then flush, then nobs) so nothing is missed.\n- Forgetting a combination simply costs you those points (unless 'muggins' is in play, covered later), so careful counting is a real skill.",
      ],
      technical: {
        title: "The Counting Order, 'His Nobs', and Not Missing Points",
        body: [
          "A reliable counting routine prevents missed points:\n- Count FIFTEENS first — check every pair, triple, and group of cards that totals 15 (remember face cards are 10 each).\n- Then PAIRS, then RUNS, then the FLUSH, and finally HIS NOBS.\n- Add them in a fixed order every time; the classic chant ('fifteen-two, fifteen-four...') is just this routine spoken aloud.",
          "'His nobs' is the one combination tied to a specific suit:\n- If your hand contains the JACK of the same suit as the starter card, you score 1 point for 'his nobs' (sometimes spelled 'his nibs').\n- This is different from 'his heels' (the 2 points the dealer pegs when a Jack is the cut itself) — nobs is the held Jack matching the starter's suit, scored at the show.\n- It is the only place suits affect the count besides flushes; otherwise only ranks and pip values matter.",
        ],
        codeExample: {
          label: "Counting a hand at the show",
          code: `  HAND: 5H 5S 5D  +  starter JD   (5C left in crib)

  FIFTEENS: each 5 with the J(=10) makes 15
    5H+J=15, 5S+J=15, 5D+J=15  -> three 15s = 6
  PAIRS: 5-5-5 is "pair royal" (three pairs) = 6
  RUNS:  none
  NOBS:  no Jack of starter's suit held here = 0
  ------------------------------------------------
  TOTAL: 6 + 6 = 12 points  (count aloud as you go)`,
        },
      },
      incident: {
        title: "The Singsong Count of the Card Table",
        when: "Centuries of play",
        where: "Pubs and parlors",
        impact: "The rhythmic 'fifteen-two, fifteen-four' chant became cribbage's cultural signature — and a discipline that stops players from leaving points on the table",
        body: [
          "Ask anyone who grew up on cribbage and they can recite the count: 'fifteen-two, fifteen-four, fifteen-six, and a pair is eight.' This rhythmic announcement is more than tradition — it is a checklist spoken aloud, walking through fifteens, then pairs, then runs, so the counter does not overlook a combination.",
          "The chant endures because missed points are real losses:\n- In ordinary play, points you fail to claim are simply gone.\n- Under the optional 'muggins' rule, an opponent can even steal points you forgot — a harsh incentive to count carefully.\n- Learning to count quickly and in order is the single most practical skill in cribbage, and the old singsong is how generations have drilled it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Make Five Cards", sub: "your four + the starter", type: "system" },
          { label: "Score Combinations", sub: "15s, pairs, runs, flushes", type: "attacker" },
          { label: "Add 'His Nobs'", sub: "held Jack of starter's suit", type: "victim" },
          { label: "Peg the Total", sub: "non-dealer, dealer, then crib", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage inherits Noddy's fifteen, pair, and run scoring" },
        { year: 1742, event: "Hoyle prints the scoring combinations and counting order", highlight: true },
        { year: 1900, event: "Six-card cribbage fixes the four-card hand + starter at the show" },
        { year: 2024, event: "The 'fifteen-two' count is taught the same way worldwide" },
      ],
      keyTakeaways: [
        "At 'the show' you score every combination in your four cards plus the shared starter",
        "The scoring categories are fifteens, pairs, runs, flushes, and 'his nobs'",
        "Count in a fixed order (fifteens, pairs, runs, flush, nobs) so you miss nothing",
        "'His nobs' is 1 point for holding the Jack of the same suit as the starter",
      ],
      references: [
        { title: "Cribbage — counting the hands", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage scoring reference", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-03-q1", type: "His Nobs", challenge: "The matching Jack.", text: "What earns 'his nobs' at the show?", options: ["Holding the Jack of the same suit as the starter card", "Cutting a Jack as the starter", "Holding any Jack", "Holding two Jacks"], correctIndex: 0, explanation: "'His nobs' is 1 point for holding the Jack matching the starter's suit — distinct from the dealer's 'his heels' on the cut." },
        { id: "cribbage-1-03-q2", type: "Counting Order", challenge: "Who counts first?", text: "Who counts their hand first at the show?", options: ["The non-dealer", "The dealer", "The crib is counted first", "Whoever pegged more in the play"], correctIndex: 0, explanation: "The non-dealer counts first, then the dealer, then the dealer's crib — which can decide a close game." },
        { id: "cribbage-1-03-q3", type: "Categories", challenge: "What you score.", text: "Which of these is a scoring category at the show?", options: ["Fifteens", "Suits in alphabetical order", "Highest card", "Number of red cards"], correctIndex: 0, explanation: "Fifteens, pairs, runs, flushes, and his nobs are the scoring categories." },
        { id: "cribbage-1-03-q4", type: "The Hand", challenge: "How many cards count?", text: "How many cards make up the hand you count at the show?", options: ["Five — your four cards plus the starter", "Four — just your kept cards", "Six — your full deal", "Three — your best cards"], correctIndex: 0, explanation: "You count five cards: your four kept cards combined with the shared starter." },
        { id: "cribbage-1-03-q5", type: "The Chant", challenge: "Counting aloud.", text: "Why do players count aloud ('fifteen-two, fifteen-four...')?", options: ["It's a spoken checklist that prevents missing combinations", "It's required to win", "It speeds up the deal", "It changes the score"], correctIndex: 0, explanation: "The chant walks through the combinations in order so no points are overlooked." },
      ],
    },
  },

  // ─── cribbage-1-04: Fifteens ──────────────────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The fifteen", location: "The heart of the scoring math", era: "Modern", emoji: "🧮" },
    id: "cribbage-1-04",
    order: 4,
    title: "Fifteens",
    subtitle: "Every combination totaling 15 pips scores two",
    category: "sports",
    xp: 92,
    badge: { id: "cribbage-badge-04", name: "Fifteen-Two", emoji: "🧮" },
    challengeType: "quiz",
    info: {
      tagline: "If cribbage has a single beating heart, it is the fifteen. Every distinct combination of cards in your hand that adds up to exactly 15 pips scores 2 points — and learning to spot them all instantly is the core arithmetic of the game.",
      year: 2024,
      overview: [
        "A 'fifteen' is any group of cards whose pip values sum to exactly 15, and each one is worth 2 points. The card values are:\n- ACE = 1 (always low in cribbage; it is never 11).\n- NUMBER CARDS = their face value (2 through 10).\n- FACE CARDS = 10 each (Jack, Queen, and King all count as 10).\n- You may use any number of cards in a combination — pairs, triples, or more — as long as they total 15.",
        "What matters is every DISTINCT combination, not just one:\n- A hand of 5-5-5-10 contains a fifteen for each 5 paired with the 10 — that's three separate fifteens (6 points) before counting the pair royal.\n- A 7 and an 8 make 15 (one combination, 2 points); a 6, a 4, and a 5 make 15 as a trio.\n- Count carefully: it is easy to miss a fifteen made of three or four small cards.",
        "Fifteens dominate cribbage scoring because tens are everywhere:\n- Sixteen of the 52 cards count as 10 (the four tens plus all twelve face cards), so any 5 paired with a ten-card is a fifteen.\n- This is why the 5 is the single most valuable card in cribbage — it pairs with all those tens to make fifteens.\n- A skilled counter sees fifteens at a glance, which is why the very first words of the classic count are 'fifteen-two'.",
      ],
      technical: {
        title: "Why Fives Rule, and Counting Fifteens Without Missing Any",
        body: [
          "The math explains the 5's special status:\n- Because Jacks, Queens, Kings, and Tens all count as 10, there are sixteen ten-valued cards in the deck.\n- A single 5 forms a fifteen with any one of them, so 5s generate fifteens prolifically — the reason a hand full of 5s and tens scores so heavily.\n- The legendary maximum hand (covered later) is built almost entirely from 5s and a ten-card for exactly this reason.",
          "A systematic scan finds every fifteen:\n- First pair each card with every other single card and note any pair totaling 15 (e.g., 7+8, 6+9, 5+10).\n- Then look for trios and larger groups that total 15 (e.g., 4+5+6, 2+3+10, 5+5+5).\n- Each distinct grouping is its own 2 points, even if cards are reused across different groupings — that reuse is exactly how big fifteen counts pile up.",
        ],
        codeExample: {
          label: "Spotting every fifteen (each = 2 points)",
          code: `  CARD VALUES:  A=1   2..10 = face   J,Q,K = 10

  HAND: 5 5 5 J  (J counts as 10)
    5 + J = 15   (x3, one per five) -> 15-2, 15-4, 15-6
    5 + 5 + 5 = 15                  -> 15-8
  -> four fifteens = 8 points from 15s alone

  HAND: 7 8 6 9
    7 + 8 = 15  -> 15-2
    6 + 9 = 15  -> 15-4
  -> two fifteens = 4 points`,
        },
      },
      incident: {
        title: "The Five: The Most Coveted Card in Cribbage",
        when: "Every game ever played",
        where: "The card table",
        impact: "Because sixteen cards count as ten, the humble 5 makes more fifteens than any other card — a quirk of arithmetic that shapes all of cribbage strategy",
        body: [
          "New players are often surprised to learn that the most powerful card in cribbage is not an ace or a king but the unassuming 5. The reason is pure arithmetic: with sixteen ten-valued cards in the deck, every 5 pairs with all of them to make a fifteen, so 5s are scoring machines.",
          "This single fact ripples through the whole game:\n- Players hoard 5s in their hands and agonize over throwing them into an opponent's crib.\n- The famous perfect hand is built from four 5s and a Jack, harvesting fifteens by the fistful.\n- Even in the play phase, the 5 is treated with caution because leading or pairing around tens so easily produces a fifteen — a theme of later strategy stages.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sum to 15 = 2 Points", sub: "any distinct combination", type: "system" },
          { label: "Know the Values", sub: "A=1, faces=10", type: "attacker" },
          { label: "Count Every Group", sub: "pairs, trios, more", type: "victim" },
          { label: "Fives Are Gold", sub: "they pair with 16 tens", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage adopts the fifteen as a core scoring combination" },
        { year: 1742, event: "Hoyle documents fifteens as worth two points each", highlight: true },
        { year: 1900, event: "Six-card play makes dense fifteen-counting routine" },
        { year: 2024, event: "'Fifteen-two' remains the opening line of every count" },
      ],
      keyTakeaways: [
        "Every distinct combination of cards totaling 15 pips scores 2 points",
        "Aces count as 1, number cards at face value, and all face cards as 10",
        "Reuse cards across groupings — each distinct fifteen scores separately",
        "The 5 is the most valuable card because sixteen ten-valued cards make it a fifteen",
      ],
      references: [
        { title: "Cribbage — fifteens", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage card values and scoring", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-04-q1", type: "The Rule", challenge: "What a fifteen is worth.", text: "How many points is each combination of cards totaling 15 worth?", options: ["2 points", "1 point", "5 points", "15 points"], correctIndex: 0, explanation: "Every distinct combination summing to 15 scores 2 points — the game's core unit." },
        { id: "cribbage-1-04-q2", type: "Card Values", challenge: "How much is a King?", text: "What pip value does a King have for making fifteens?", options: ["10", "13", "11", "0"], correctIndex: 0, explanation: "Jacks, Queens, and Kings all count as 10 for scoring purposes." },
        { id: "cribbage-1-04-q3", type: "The Ace", challenge: "High or low?", text: "What is an ace worth in cribbage?", options: ["1 (always low)", "11", "Either 1 or 11", "10"], correctIndex: 0, explanation: "The ace is always 1 in cribbage; it is never high or worth 11." },
        { id: "cribbage-1-04-q4", type: "Counting", challenge: "Add them up.", text: "How many fifteens are in the hand 5-5-5-10 (ignoring other combos)?", options: ["Four (three 5+10 plus the three 5s)", "One", "Two", "Zero"], correctIndex: 0, explanation: "Each 5 with the 10 makes a fifteen (three of them), plus 5+5+5=15 — four fifteens, 8 points." },
        { id: "cribbage-1-04-q5", type: "Best Card", challenge: "The scoring machine.", text: "Why is the 5 considered the most valuable card in cribbage?", options: ["Sixteen ten-valued cards pair with it to make fifteens", "It is the highest card", "It is wild", "It scores triple"], correctIndex: 0, explanation: "With sixteen cards worth 10, every 5 makes a fifteen with all of them — unmatched scoring power." },
      ],
    },
  },

  // ─── cribbage-1-05: Runs, Pairs & Flushes ─────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The perfect 29", location: "The legendary maximum hand", era: "Modern", emoji: "🏆" },
    id: "cribbage-1-05",
    order: 5,
    title: "Runs, Pairs & Flushes",
    subtitle: "Pair royal, double pair royal, runs, flushes, and the perfect 29",
    category: "sports",
    xp: 95,
    badge: { id: "cribbage-badge-05", name: "Combo Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Beyond fifteens, cribbage rewards runs, pairs, and flushes. Knowing the exact values — pair royal is 6, double pair royal is 12, a run scores one per card — unlocks the rest of the scoring, all the way up to the near-mythical perfect 29-point hand.",
      year: 2024,
      overview: [
        "PAIRS scale up fast as you add matching cards:\n- A PAIR (two of a rank) scores 2.\n- THREE OF A KIND, called 'PAIR ROYAL', scores 6 (because it contains three separate pairs).\n- FOUR OF A KIND, called 'DOUBLE PAIR ROYAL', scores 12 (six pairs).\n- The jump is not linear — three of a kind is worth three times a pair, not 1.5 times.",
        "RUNS reward consecutive ranks, and FLUSHES reward matching suits:\n- A RUN is three or more cards in consecutive rank (suits don't matter for runs), scoring 1 point per card — a run of three is 3, a run of four is 4, a run of five is 5.\n- A FLUSH is four cards of the same suit in your hand, scoring 4; if the starter is also that suit, it is a five-card flush for 5.\n- Important crib rule: the crib only scores a flush if all five cards (including the starter) share a suit — a four-card crib flush does not count.",
        "Stack these with fifteens and you reach the famous maximum:\n- The PERFECT 29 is the highest possible cribbage hand: holding three 5s and the Jack of one suit, with the fourth 5 of that suit as the starter.\n- It scores 29 — eight fifteens (16), a double pair royal of 5s (12), and his nobs (1).\n- A 29 is so rare that scoring one is a celebrated, once-in-a-lifetime event for most players.",
      ],
      technical: {
        title: "Double Runs, the Flush Distinction, and How 29 Is Built",
        body: [
          "Runs combine with pairs to create 'double runs':\n- If a hand has a run plus a pair within it (e.g., 4-5-5-6), you count the run once for each way the pair lets you make it — 4-5-6 twice — giving a 'double run' worth 8 (two runs of three plus the pair).\n- A 'double double run' and a run-with-three-of-a-kind ('triple run') score even more; the principle is to count each distinct sequence.\n- This is why hands with both consecutive cards and pairs can score surprisingly high.",
          "The flush rule differs between hand and crib, and 29 has exactly one recipe:\n- In your HAND, four matching suits score 4 (five with the starter scores 5).\n- In the CRIB, only a full five-card flush counts — four matching suits plus a non-matching starter scores nothing.\n- The perfect 29: three fives and the Jack of, say, hearts in hand, with the five of hearts as the starter. Every 5 makes a fifteen with the Jack and with each pair of other 5s (eight fifteens = 16), the four 5s are a double pair royal (12), and the held Jack matches the heart starter for his nobs (1): 16 + 12 + 1 = 29. There is no 28 in standard scoring — 29 is the ceiling.",
        ],
        codeExample: {
          label: "The perfect 29-point hand",
          code: `  HAND:    5H 5S 5C  +  JH        STARTER: 5D
  (the Jack's suit must match the starter's suit)

  FIFTEENS: each 5 + J(=10) = 15  -> four ways  = 8
            5+5+5 reused groups  -> four more    = 8   (16 total)
  DOUBLE PAIR ROYAL: four 5s     -> 12
  HIS NOBS: JH matches... (here starter is 5D,
            so the Jack must share the STARTER suit)
  ----------------------------------------------------
  16 (fifteens) + 12 (four 5s) + 1 (nobs) = 29  MAX`,
        },
      },
      incident: {
        title: "Chasing the Perfect 29",
        when: "Once in tens of thousands of hands",
        where: "Cribbage tables everywhere",
        impact: "The 29-point hand is cribbage's hole-in-one — statistically rare enough that players remember exactly when they got one",
        body: [
          "Every cribbage player knows the dream hand: three fives and a Jack, with the fourth five turned up as the starter in the Jack's suit. It totals 29 points — the mathematical maximum, since no legal hand can score 28 or 30. The odds of being dealt and cutting into a 29 are roughly one in many tens of thousands of hands.",
          "Its rarity gives the 29 an outsized place in the game's lore:\n- Clubs and the American Cribbage Congress keep records of sanctioned 29s, and players proudly report theirs.\n- The hand is a perfect teaching example because it bundles fifteens, four of a kind, and his nobs into one count.\n- Understanding why 29 is the ceiling — and why 28 is impossible — is a rite of passage that proves you truly grasp the scoring.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pairs Scale Up", sub: "pair 2, royal 6, double royal 12", type: "system" },
          { label: "Runs: 1 Per Card", sub: "3+ consecutive ranks", type: "attacker" },
          { label: "Flushes", sub: "4 in hand, 5 with starter", type: "victim" },
          { label: "Perfect 29", sub: "four 5s + matching Jack", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Pairs, runs, and flushes carry over from Noddy into cribbage" },
        { year: 1742, event: "Hoyle fixes pair royal at 6 and double pair royal at 12", highlight: true },
        { year: 1900, event: "Standard scoring confirms 29 as the maximum hand" },
        { year: 1980, event: "The ACC begins recognizing sanctioned 29-point hands" },
      ],
      keyTakeaways: [
        "Pair = 2, three of a kind ('pair royal') = 6, four of a kind ('double pair royal') = 12",
        "Runs score 1 point per card (three cards = 3, four = 4); suits don't matter for runs",
        "A flush is 4 (four matching suits in hand) or 5 with the starter; the crib needs all five matching",
        "The perfect hand is 29: three 5s plus a Jack, with the fourth 5 (matching the Jack's suit) as the starter",
      ],
      references: [
        { title: "Cribbage — pairs, runs, flushes, and the 29 hand", url: "https://en.wikipedia.org/wiki/Cribbage#Counting" },
        { title: "Cribbage statistics — maximum hands", url: "https://en.wikipedia.org/wiki/Cribbage_statistics" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-05-q1", type: "Pair Royal", challenge: "Three of a kind.", text: "How many points is 'pair royal' (three of a kind) worth?", options: ["6", "3", "9", "2"], correctIndex: 0, explanation: "Three of a kind contains three separate pairs, so it scores 6 — 'pair royal'." },
        { id: "cribbage-1-05-q2", type: "Runs", challenge: "Count the sequence.", text: "How many points does a run of four consecutive cards score?", options: ["4 (one point per card)", "1", "8", "2"], correctIndex: 0, explanation: "Runs score one point per card, so a four-card run is worth 4." },
        { id: "cribbage-1-05-q3", type: "The Max", challenge: "The ceiling.", text: "What is the highest possible cribbage hand?", options: ["29 points", "31 points", "28 points", "121 points"], correctIndex: 0, explanation: "29 is the maximum — four 5s and a Jack matching the starter's suit. There is no 28 or 30." },
        { id: "cribbage-1-05-q4", type: "Double Pair Royal", challenge: "Four of a kind.", text: "What does four of a kind ('double pair royal') score?", options: ["12", "8", "4", "16"], correctIndex: 0, explanation: "Four of a kind makes six pairs, scoring 12 — 'double pair royal'." },
        { id: "cribbage-1-05-q5", type: "Crib Flush", challenge: "A flush in the box.", text: "When does a flush score in the crib?", options: ["Only when all five cards (including the starter) share a suit", "When any four cards match", "Never", "Only with three matching cards"], correctIndex: 0, explanation: "A crib flush requires all five cards to be the same suit; four is not enough in the crib." },
      ],
    },
  },

  // ─── cribbage-1-06: The Play / Pegging ────────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The play", location: "The pegging phase up to 31", era: "Modern", emoji: "♟️" },
    id: "cribbage-1-06",
    order: 6,
    title: "The Play / Pegging",
    subtitle: "Alternate cards up to 31, scoring fifteens, pairs, runs, and 'go'",
    category: "sports",
    xp: 96,
    badge: { id: "cribbage-badge-06", name: "Pegger", emoji: "♟️" },
    challengeType: "quiz",
    info: {
      tagline: "Before anyone counts their hand, the cards are played out in a phase called 'the play' or 'pegging'. Players alternate laying cards while keeping a running total — never going over 31 — and score along the way for fifteens, 31, pairs, runs, and the last card.",
      year: 2024,
      overview: [
        "In the play, the two players take turns laying down one card at a time, face-up, announcing the running total of pip values as they go:\n- The NON-DEALER plays first, then players alternate.\n- The running total starts at 0 and climbs with each card; it may never exceed 31.\n- The starter card is not used here — only the four cards in each player's hand.",
        "You peg points during the play for hitting key totals and making combinations:\n- FIFTEEN — playing a card that makes the running total exactly 15 scores 2.\n- THIRTY-ONE — bringing the total to exactly 31 scores 2.\n- PAIRS and RUNS — playing a card that pairs or extends a run with the immediately preceding cards scores (pair 2, three of a kind 6, a run of three 3, and so on).\n- These play-combinations are scored from the recent sequence of cards, not your whole hand.",
        "When a player cannot add a card without exceeding 31, the 'go' rules apply:\n- If you cannot play without going over 31, you say 'GO', and the other player pegs 1 (or continues playing if they can, then takes the point).\n- The player who plays the LAST card before a reset scores 1 for 'last card' (or 2 if it hit exactly 31).\n- The count then resets to 0 and play continues with the remaining cards until all eight are down.",
      ],
      technical: {
        title: "Pegging Combinations, the 'Go', and Reaching 31",
        body: [
          "Play-phase scoring rewards the sequence of recent cards:\n- A PAIR in play means playing a card matching the rank of the one just played (2 points); a third makes pair royal (6); a fourth, double pair royal (12).\n- A RUN in play scores when the last several cards form a consecutive sequence in ANY order — playing a 4 onto a 6-5 already down makes a run of three for 3 points.\n- Reaching exactly 15 or 31 with your card each scores 2; these are the only 'total' targets in the play.",
          "The 'go' and the 31 reset govern who scores at the end of a sub-count:\n- If neither player can add a card under 31, the last to play pegs 1 for the 'go' (the point for the last card played).\n- Hitting exactly 31 scores 2 instead of the 1-for-last-card, and immediately resets the count to 0.\n- After a reset, the player who did NOT play last leads the new count, and play continues until all cards are exhausted — the very last card of the whole play always scores 1 for 'last card'.",
        ],
        codeExample: {
          label: "A pegging sequence up to 31",
          code: `  RUNNING TOTAL starts at 0 (non-dealer leads)

  N plays 5  -> total  5
  D plays 10 -> total 15   -> D pegs 2 (fifteen)
  N plays 6  -> total 21
  D plays 7  -> total 28   (5-6-7 run? not consecutive
                            with the 10 between -> no)
  N says "GO" (no card keeps it <= 31)
  D plays 3  -> total 31   -> D pegs 2 (thirty-one)
  -> reset to 0; remaining cards continue`,
        },
      },
      incident: {
        title: "The Play: Where Points Are Stolen One at a Time",
        when: "Every deal, before the show",
        where: "The pegging phase",
        impact: "Pegging looks minor next to the show, but games are routinely won or lost by the handful of points scrapped for during the play",
        body: [
          "Newcomers often treat the play as a formality before the 'real' counting at the show, but seasoned players know the pegging phase decides close games. A point for a 'go', 2 for a sneaky fifteen, a pair that the opponent walked into — these add up, and a player who pegs well gains several points a game on someone who plays cards carelessly.",
          "The play rewards alertness because scoring is reactive:\n- You score off the cards just laid, so watching the running total and the recent sequence is constant work.\n- Hitting 31, completing a run, or pairing the opponent's card are all opportunities that appear and vanish within a turn.\n- This is why pegging strategy (the next stage) is a genuine skill — the difference between a beginner and a strong player is often measured in pegged points.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Alternate Cards", sub: "running total to 31 max", type: "system" },
          { label: "Hit 15 or 31", sub: "each scores 2", type: "attacker" },
          { label: "Pairs & Runs in Play", sub: "off the recent cards", type: "victim" },
          { label: "Go & Last Card", sub: "1 point, then reset", type: "result" },
        ],
      },
      timeline: [
        { year: 1635, event: "Cribbage establishes the play-to-31 pegging phase" },
        { year: 1742, event: "Hoyle documents pegging combinations and the 'go'", highlight: true },
        { year: 1900, event: "Six-card play sets up the modern eight-card pegging sequence" },
        { year: 2024, event: "Pegging is taught as a distinct skill from counting the show" },
      ],
      keyTakeaways: [
        "In the play, players alternate cards keeping a running total that may never exceed 31",
        "Making the total exactly 15 or 31 each scores 2 points",
        "Pairs and runs formed by the recently played cards score during the play",
        "If you can't play under 31 you say 'go'; the last card scores 1 (or 2 at exactly 31), then reset",
      ],
      references: [
        { title: "Cribbage — the play", url: "https://en.wikipedia.org/wiki/Cribbage#The_play" },
        { title: "Cribbage pegging rules", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-06-q1", type: "The Cap", challenge: "The ceiling on the count.", text: "What is the maximum the running total may reach during the play?", options: ["31", "15", "21", "121"], correctIndex: 0, explanation: "The running total can go up to 31 but never over it; reaching exactly 31 scores 2." },
        { id: "cribbage-1-06-q2", type: "Hitting Totals", challenge: "Score a number.", text: "Playing a card that makes the running total exactly 15 scores how many points?", options: ["2", "1", "15", "5"], correctIndex: 0, explanation: "Hitting 15 in the play scores 2, just like hitting 31." },
        { id: "cribbage-1-06-q3", type: "The Go", challenge: "Can't play.", text: "What do you say when you cannot play a card without exceeding 31?", options: ["'Go'", "'Pass'", "'Fold'", "'Skunk'"], correctIndex: 0, explanation: "You announce 'go'; the opponent then pegs the point for the last card played." },
        { id: "cribbage-1-06-q4", type: "Pairs in Play", challenge: "Match the card.", text: "If your opponent plays a 7 and you play a 7, what do you score?", options: ["2 for the pair", "Nothing", "7 points", "1 for last card"], correctIndex: 0, explanation: "Pairing the just-played card scores 2 during the play (three of a kind would be 6)." },
        { id: "cribbage-1-06-q5", type: "The Starter", challenge: "Which cards play.", text: "Is the starter card played during the pegging phase?", options: ["No — only the four cards in each hand are played", "Yes, it's played first", "Yes, by the dealer", "Only if it's a Jack"], correctIndex: 0, explanation: "The starter is set aside during the play; only the eight hand cards are pegged out." },
      ],
    },
  },

  // ─── cribbage-1-07: Pegging Strategy ──────────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The safe lead", location: "Where pegging becomes tactics", era: "Modern", emoji: "🛡️" },
    id: "cribbage-1-07",
    order: 7,
    title: "Pegging Strategy",
    subtitle: "Safe leads, avoiding 15s and 31s, and trapping for runs",
    category: "sports",
    xp: 98,
    badge: { id: "cribbage-badge-07", name: "Tactician", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Pegging is not random — every card you play either offers your opponent a scoring chance or denies one. Good pegging means leading safely, avoiding handing over fifteens and 31s, and occasionally baiting your opponent into a trap.",
      year: 2024,
      overview: [
        "The first principle of pegging is the safe lead:\n- DON'T LEAD A 5 — a 5 is the worst opening card, because any of the sixteen ten-cards your opponent holds makes 15 for 2 points on top of it.\n- LEAD LOW CARDS (an ace, 2, 3, or 4) so the opponent can't immediately reach 15, and you keep room under 31.\n- LEADING FROM A PAIR can be useful: if the opponent pairs your card for 2, you can play your other one for pair royal and 6.",
        "Throughout the play, avoid setting up the opponent:\n- DON'T MAKE THE TOTAL 5 OR 21 carelessly — those let an opponent's ten-card reach 15 or 31.\n- WATCH FOR RUNS — playing a card adjacent in rank to the last one can let the opponent complete a run; sometimes it's safer to break the sequence.\n- COUNT TO 31 — try to be the one who lands on 31 (2 points) or forces a 'go' in your favor.",
        "Pegging has an offensive and a defensive mode:\n- DEFENSIVE PEGGING — when you are ahead or it's your opponent's crib, play it safe and deny points, conceding small 'go's rather than risking big combinations.\n- OFFENSIVE PEGGING — when you're behind or chasing, take small risks to peg pairs and runs and apply pressure.\n- TRAPPING — deliberately playing a card hoping the opponent pairs or extends, so you can re-pair or finish a longer run for more points.",
      ],
      technical: {
        title: "Reading the Total, Trapping, and Picking Your Mode",
        body: [
          "Strong pegging is about controlling the running total:\n- Keep a mental note of which totals are 'dangerous' to reach — landing on 5 or 21 invites a ten-card fifteen or 31 from the opponent.\n- When you can, play to reach 31 yourself or to leave a total where the opponent cannot score and may be forced to say 'go'.\n- Holding a low card back lets you respond to a 'go' situation and grab the last-card point.",
          "Traps and tempo separate good peggers from beginners:\n- THE PAIR TRAP — leading one of a pair invites the opponent to pair you for 2; if they do, you play the third for pair royal (6) and net 4.\n- THE RUN TRAP — playing into a near-run can tempt the opponent to extend it, only for you to extend it further for a bigger run.\n- Choosing offense vs defense depends on the score and whose crib it is: protect a lead and starve the opponent on their crib; gamble for pegs when you're behind.",
        ],
        codeExample: {
          label: "Safe vs risky pegging leads",
          code: `  RISKY LEAD:  play a 5  (total = 5)
    -> opponent's 10/J/Q/K makes 15 for 2  (BAD)

  SAFER LEAD:  play a 4  (total = 4)
    -> no single card makes 15 off a 4 lead

  PAIR TRAP:   lead one of a pair, say a 4
    opp pairs (4) -> 8, opp pegs 2
    you play 3rd 4 -> 12, you peg 6 (pair royal)
    net: you +6, opp +2  ->  +4 for you`,
        },
      },
      incident: {
        title: "The Quiet Battle of the Pegging Phase",
        when: "Every competitive game",
        where: "Club and tournament cribbage",
        impact: "Among strong players the pegging duel — safe leads, denied fifteens, baited pairs — often swings the four to six points that decide a match",
        body: [
          "Watch two experts peg and you'll see a careful, almost chess-like exchange: neither leads a 5, both track the running total, and each watches for the moment the other slips and offers a fifteen or a run. The points are small, but in a race to 121 they accumulate into the margin of victory.",
          "Pegging skill is largely about discipline and reading:\n- Avoiding the obvious giveaways (the 5 lead, the careless 21) already beats most casual players.\n- Knowing when to switch from safe, defensive play to aggressive trapping — based on the score and whose crib is next — is the mark of a seasoned competitor.\n- Because pegging is reactive, it can't be memorized like a hand count; it's earned through practice, which is why it's where improving players make their biggest gains.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead Low, Not a 5", sub: "deny easy fifteens", type: "system" },
          { label: "Watch the Total", sub: "avoid 5 and 21 traps", type: "attacker" },
          { label: "Set Traps", sub: "bait pairs and runs", type: "victim" },
          { label: "Offense or Defense", sub: "score and crib decide", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's writing hints at safe leads and the danger of the 5" },
        { year: 1900, event: "Six-card pegging deepens the tactical exchange", highlight: true },
        { year: 1980, event: "Tournament play formalizes defensive vs offensive pegging" },
        { year: 2024, event: "Cribbage software confirms the 'don't lead a 5' heuristic" },
      ],
      keyTakeaways: [
        "Never lead a 5 — any of the sixteen ten-cards makes 15 on it for an easy 2 points",
        "Lead low cards and avoid bringing the total to 5 or 21, which invite fifteens and 31s",
        "Trap by leading from a pair (re-pair for pair royal) or baiting a run to extend further",
        "Play defensively when ahead or on the opponent's crib; gamble for pegs when behind",
      ],
      references: [
        { title: "Cribbage — strategy of the play", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage pegging strategy", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-07-q1", type: "The Lead", challenge: "The card to avoid.", text: "Which card is the worst to lead in the pegging phase?", options: ["A 5", "An ace", "A 2", "A 3"], correctIndex: 0, explanation: "Leading a 5 lets any of the sixteen ten-cards make 15 for an easy 2 points." },
        { id: "cribbage-1-07-q2", type: "Safe Play", challenge: "Keep it low.", text: "Why are low cards (ace–4) good leads?", options: ["No single card can make 15 off them, keeping the opponent from an easy fifteen", "They are the highest scoring", "They always make a run", "They force a 'go'"], correctIndex: 0, explanation: "A low lead can't be turned into 15 by one card, denying the opponent a quick 2." },
        { id: "cribbage-1-07-q3", type: "The Trap", challenge: "Bait the pair.", text: "What is the idea behind leading one card of a pair?", options: ["If the opponent pairs it, you play the third for pair royal (6)", "It guarantees a run", "It reaches 31 automatically", "It blocks all scoring"], correctIndex: 0, explanation: "Leading from a pair baits the opponent to pair you for 2, so you re-pair for pair royal and net points." },
        { id: "cribbage-1-07-q4", type: "Dangerous Totals", challenge: "Mind the count.", text: "Why is bringing the running total to 21 risky?", options: ["A ten-card from the opponent makes 31 for 2 points", "It ends the game", "It is illegal", "It forces you to say 'go'"], correctIndex: 0, explanation: "At 21, any ten-valued card brings the opponent to exactly 31 for 2 points." },
        { id: "cribbage-1-07-q5", type: "Mode", challenge: "When to play safe.", text: "When should you peg defensively?", options: ["When you are ahead or it is the opponent's crib", "Always, no matter the score", "Only on the first deal", "When you have a 5"], correctIndex: 0, explanation: "Protect a lead and starve the opponent's crib by playing safe; gamble for pegs when behind." },
      ],
    },
  },

  // ─── cribbage-1-08: Discarding Strategy ───────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The layaway decision", location: "Keep vs throw", era: "Modern", emoji: "🤔" },
    id: "cribbage-1-08",
    order: 8,
    title: "Discarding Strategy / What to Throw",
    subtitle: "Keep vs lay away, feeding your crib, starving the opponent's",
    category: "sports",
    xp: 100,
    badge: { id: "cribbage-badge-08", name: "Crib Strategist", emoji: "🤔" },
    challengeType: "quiz",
    info: {
      tagline: "The two cards you throw away each deal are one of cribbage's biggest decisions. Whose crib is it? What does it do to your hand? Good discarding balances the value of the four cards you keep against the four that go into the box.",
      year: 2024,
      overview: [
        "Every discard is shaped by one question: whose crib is it?\n- ON YOUR OWN DEAL (your crib) — you want to throw GOOD cards, because crib points are your points. Cards that work together (like a 5-5, or a 5 with a ten-card) boost your crib.\n- ON THE OPPONENT'S DEAL (their crib) — throw JUNK, the cards least likely to combine. Avoid giving them 5s, pairs, or close-rank cards that could make fifteens and runs in their box.\n- The same two cards can be a great throw to your own crib and a terrible one to your opponent's.",
        "You also balance the crib against the hand you keep:\n- KEEP THE FOUR CARDS that score the most on their own, but weigh how the starter might help them.\n- Sometimes you keep a slightly weaker hand to avoid feeding the opponent's crib (defense), or break up your hand to load your own crib (offense).\n- Cards that are flexible — near a 5, or forming partial runs and fifteens — are valuable; isolated high cards and widely separated ranks are often safe throws to an enemy crib.",
        "Some discards are 'magic' combinations:\n- 5-5 into your own crib is a classic strong throw, because two 5s plus any of the many ten-cards (and the starter) produce piles of fifteens.\n- 7-8 or 4-5 are good crib throws because they make fifteens and start runs.\n- The cards you must protect on defense are exactly these — never hand a 5, or a connected pair, to the opponent's crib if you can avoid it.",
      ],
      technical: {
        title: "Balancing Hand and Crib, and the Cards That Combine",
        body: [
          "The discard is a two-sided value calculation:\n- Estimate the points in the FOUR you keep, then estimate what your two thrown cards contribute to the crib — adding it if the crib is yours, treating it as a cost if it isn't.\n- On your deal, the right throw often sacrifices a point or two from your hand to gain more in your crib.\n- On the opponent's deal, you may keep a slightly lower-scoring hand if it lets you throw two truly dead cards that can't help their box.",
          "Know which pairs of cards combine dangerously (or profitably):\n- FIVES are the prime crib fuel — 5-5, or any 5 with a ten-card, makes fifteens easily; great in your crib, poison in theirs.\n- CONNECTED CARDS (like 6-7 or 4-5) start runs and fifteens; CLOSE RANKS that can be bridged are risky to give away.\n- WIDELY SEPARATED, low-combining cards (like a King and a 2 of different suits) are the safest throws to an opponent's crib because they rarely score together.",
        ],
        codeExample: {
          label: "Whose crib? Throw accordingly",
          code: `  YOUR CRIB (your deal):  throw cards that COMBINE
    great throws: 5-5,  5-10,  7-8,  4-5
    -> they make fifteens and runs FOR YOU

  OPPONENT'S CRIB (their deal):  throw JUNK
    safe throws: K-2,  Q-3,  wide unmatched cards
    AVOID giving: 5s, pairs, connected cards
    -> deny them easy fifteens and runs

  RULE: same two cards can be a gift or a leak --
        always ask "whose crib is it?" first.`,
        },
      },
      incident: {
        title: "The Discard That Wins (or Loses) the Game",
        when: "Twice per round, every game",
        where: "The layaway",
        impact: "Because each player discards on every deal, consistently good crib decisions compound into a decisive edge over a full game",
        body: [
          "Cribbage is sometimes described as a discarding game with a counting phase attached. Every deal, both players make a layaway decision, and the cumulative effect of throwing well — fueling your own crib, starving your opponent's — is one of the clearest separators between casual and serious players.",
          "The discipline is to always frame the throw correctly:\n- On your crib, be generous to the box; on theirs, be stingy.\n- Respect the 5: it is the best card to keep or to feed your own crib, and the worst to hand the opponent.\n- Over a game of many deals, a player who makes the better layaway each time gains points steadily — which is why expected-value analysis of discards (the final stage) became a serious study.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ask: Whose Crib?", sub: "the first question", type: "system" },
          { label: "Your Crib: Feed It", sub: "throw 5-5, connectors", type: "attacker" },
          { label: "Their Crib: Starve It", sub: "throw dead, wide cards", type: "victim" },
          { label: "Balance the Hand", sub: "keep vs lay-away value", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle advises throwing to the dealer's advantage" },
        { year: 1900, event: "Six-card cribbage makes the two-card layaway central", highlight: true },
        { year: 1980, event: "Players publish expected crib values for common throws" },
        { year: 2024, event: "Discard solvers quantify the best layaway for every hand" },
      ],
      keyTakeaways: [
        "Always ask 'whose crib is it?' before discarding — it flips the whole decision",
        "On your deal, throw cards that combine (5-5, 5 with a ten, 7-8) to fuel your crib",
        "On the opponent's deal, throw dead, widely separated cards and never give them a 5 or a pair",
        "Balance the value of the four cards you keep against what your two discards do to the crib",
      ],
      references: [
        { title: "Cribbage — discarding strategy", url: "https://en.wikipedia.org/wiki/Cribbage#Strategy" },
        { title: "Cribbage discard and crib value tables", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-08-q1", type: "The Key Question", challenge: "Frame the throw.", text: "What is the most important question before discarding?", options: ["Whose crib is it — yours or the opponent's?", "What suit is trump?", "How many cards are left in the deck?", "Who is winning?"], correctIndex: 0, explanation: "The crib's owner flips the decision: feed your own crib, starve the opponent's." },
        { id: "cribbage-1-08-q2", type: "Your Crib", challenge: "Feed the box.", text: "Into your OWN crib, which is a strong throw?", options: ["5-5", "King-2 of different suits", "A lone King", "Widely separated cards"], correctIndex: 0, explanation: "5-5 is classic crib fuel — two 5s plus the many ten-cards make abundant fifteens." },
        { id: "cribbage-1-08-q3", type: "Their Crib", challenge: "Starve the box.", text: "Into the OPPONENT'S crib, what should you throw?", options: ["Dead, widely separated cards that won't combine", "A pair of 5s", "Two connected cards like 7-8", "Cards that make a run"], correctIndex: 0, explanation: "Throw junk that can't form fifteens or runs; never hand the opponent 5s or connectors." },
        { id: "cribbage-1-08-q4", type: "The Five", challenge: "Guard it.", text: "Why should you avoid throwing a 5 into the opponent's crib?", options: ["A 5 combines with the many ten-cards to make easy fifteens", "5s are worth nothing", "It's against the rules", "It ends the game"], correctIndex: 0, explanation: "The 5 is the best fifteen-maker, so it is the worst card to give an opponent's crib." },
        { id: "cribbage-1-08-q5", type: "Balance", challenge: "Keep or throw?", text: "Discarding involves balancing what two things?", options: ["The value of the four cards you keep vs what your two discards do to the crib", "Your score vs the deck size", "The suits vs the ranks", "Your pegs vs your opponent's"], correctIndex: 0, explanation: "Good discarding weighs the kept hand against the crib effect of your layaway." },
      ],
    },
  },

  // ─── cribbage-1-09: The Board, Match Play & Etiquette ─────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "The skunk line", location: "The board's danger zone", era: "Modern", emoji: "🦨" },
    id: "cribbage-1-09",
    order: 9,
    title: "The Board, Match Play & Etiquette",
    subtitle: "Pegging up the board, skunks, muggins, and the two-peg leapfrog",
    category: "sports",
    xp: 104,
    badge: { id: "cribbage-badge-09", name: "Board Boss", emoji: "🦨" },
    challengeType: "quiz",
    info: {
      tagline: "The board is more than a scorekeeper — it's where the drama lives. Pegging up its tracks, the dreaded 'skunk' line, the 'muggins' rule that punishes a miscount, and the two-peg leapfrog all turn raw points into the texture of a real game.",
      year: 2024,
      overview: [
        "Score is pegged up the board with the two-peg leapfrog system:\n- Each player has TWO PEGS. You always move the BACK peg ahead of the front one by the number of points you just scored.\n- This leaves a visible record: the gap between your two pegs shows your most recent score, which keeps both players honest.\n- The first peg to reach hole 121 wins — you don't have to land on it exactly, you just have to reach or pass it.",
        "Big winning margins have names — the 'skunk':\n- A SKUNK is winning while your opponent is still 31 or more points from the finish (i.e., they failed to reach the 90-point line on a 121 game). A skunk usually counts as a DOUBLE game/win.\n- A DOUBLE SKUNK is winning while the opponent is 61 or more points short — typically a quadruple game.\n- These margins matter most in tournaments and league play, where games are scored as match points.",
        "Rules and etiquette keep play fair and friendly:\n- MUGGINS (optional) — if you under-count your hand and announce too few points, an alert opponent may call 'muggins' and peg the points you missed. It rewards careful counting and is common in serious play.\n- Count carefully and announce your score clearly; let the opponent verify before you peg.\n- Standard courtesies: cut the deck for the opponent, don't touch your pegs until you've scored, and leave the back peg where it is as proof of your last move.",
      ],
      technical: {
        title: "Leapfrog Mechanics, the Skunk Lines, and Calling Muggins",
        body: [
          "The two-peg system is a built-in audit trail:\n- Start with both pegs in the starting holes. Score 6? Move your back peg 6 holes ahead of your front peg.\n- Next score, the (new) back peg jumps ahead again — the pegs alternate leapfrogging up the track.\n- Because the trailing peg marks where you were, an opponent can always check that your last move was legitimate, which is why you never move both pegs at once.",
          "Skunks and muggins shape competitive scoring and discipline:\n- On a 121-point board, the SKUNK line is at 91 — a loser stuck below it (31+ from home) is skunked, doubling the result; the DOUBLE-SKUNK line is at 61.\n- MUGGINS must usually be called immediately, before the next deal or play, and only takes points the counter actually failed to claim — you can't muggins points that weren't there.\n- Tournaments award match points partly by skunks, so a strong player presses for the skunk when well ahead rather than coasting.",
        ],
        codeExample: {
          label: "The board: leapfrog pegging and skunk lines",
          code: `  TWO PEGS each; move the BACK peg by your score:

   start: (P1)(P2)..............................
   +6:    .....(P2)(P1).........................  back peg leaps
   +4:    .........(P1)(P2).....................  other peg leaps

  SKUNK LINES on a 121 board:
    91  = skunk line   (loser below 91 -> double game)
    61  = double-skunk  (loser below 61 -> quad game)

  MUGGINS: undercount your hand -> opponent pegs
           the points you missed.`,
        },
      },
      incident: {
        title: "Muggins and the Skunk: Cribbage's Sharp Edges",
        when: "Club and tournament play",
        where: "Sanctioned cribbage",
        impact: "Optional rules like muggins and scoring quirks like the skunk add a competitive bite that turned casual cribbage into a serious tournament game",
        body: [
          "In a friendly kitchen game, a forgotten point is usually forgiven. In competitive cribbage, the 'muggins' rule makes counting a high-stakes act: miscount your hand and an opponent can pounce, pegging your missed points for themselves. It rewards the disciplined counter and punishes the careless one.",
          "The skunk gives blowouts real consequences:\n- Finishing an opponent before they cross the 91-hole 'skunk line' counts as a double win, so a player far ahead pushes hard to skunk rather than just win.\n- Double skunks (opponent below 61) are rarer and worth even more in match scoring.\n- Together with the two-peg leapfrog that keeps everyone honest, these rules give cribbage the structure and etiquette of a genuine competitive sport, overseen by bodies like the American Cribbage Congress.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Two-Peg Leapfrog", sub: "back peg jumps ahead", type: "system" },
          { label: "Race to 121", sub: "reach or pass the end", type: "attacker" },
          { label: "Skunk Lines", sub: "91 single, 61 double", type: "victim" },
          { label: "Muggins & Etiquette", sub: "claim missed points fairly", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle describes pegging the board to the target score" },
        { year: 1900, event: "The 121-point board and skunk margins become standard", highlight: true },
        { year: 1980, event: "The ACC codifies muggins, skunks, and match scoring for tournaments" },
        { year: 2024, event: "Two-peg leapfrog and skunk lines remain universal" },
      ],
      keyTakeaways: [
        "Score with two pegs that leapfrog — always move the back peg ahead by your latest score",
        "First to reach (or pass) hole 121 wins; you needn't land on it exactly",
        "A skunk (opponent 31+ short, below the 91 line) is a double game; a double skunk (below 61) more",
        "'Muggins' lets an opponent peg the points you forgot to count — a reason to count carefully",
      ],
      references: [
        { title: "Cribbage — skunk, muggins, and the board", url: "https://en.wikipedia.org/wiki/Cribbage#Rules" },
        { title: "American Cribbage Congress — tournament rules", url: "https://www.cribbage.org/rules/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-09-q1", type: "Pegging Up", challenge: "Move which peg?", text: "In the two-peg system, which peg do you move when you score?", options: ["The back peg, ahead of the front one by your score", "The front peg, backward", "Both pegs together", "Neither — you use a pencil"], correctIndex: 0, explanation: "You leapfrog the back peg ahead of the front by your latest score, leaving an honest record." },
        { id: "cribbage-1-09-q2", type: "The Skunk", challenge: "A big win.", text: "What is a 'skunk' in cribbage?", options: ["Winning while the opponent is 31+ points from the finish (below the 91 line)", "Losing on the last hand", "Cutting a Jack", "Pegging exactly 31"], correctIndex: 0, explanation: "A skunk is winning before the opponent reaches 91 (31+ short), usually counting as a double game." },
        { id: "cribbage-1-09-q3", type: "Muggins", challenge: "Claim the miss.", text: "What does the 'muggins' rule allow?", options: ["An opponent to peg points you failed to count in your own hand", "Replaying a bad deal", "Skipping your turn", "Doubling your score"], correctIndex: 0, explanation: "Under muggins, if you under-count your hand, an alert opponent claims the points you missed." },
        { id: "cribbage-1-09-q4", type: "Winning", challenge: "Land exactly?", text: "Do you have to land exactly on hole 121 to win?", options: ["No — reaching or passing 121 wins", "Yes, exactly 121", "No, you need 124", "Yes, and then peg back"], correctIndex: 0, explanation: "The first peg to reach or pass 121 wins; an exact landing isn't required." },
        { id: "cribbage-1-09-q5", type: "Double Skunk", challenge: "An even bigger margin.", text: "A 'double skunk' occurs when the loser is below which line on a 121 board?", options: ["61", "91", "31", "100"], correctIndex: 0, explanation: "A double skunk is winning while the opponent is below 61 (61+ points short)." },
      ],
    },
  },

  // ─── cribbage-1-10: Cribbage Mastery ──────────────────────────────────────────
  {
    epochId: "cribbage-1",
    wonder: { name: "Expected value", location: "Where cribbage becomes math", era: "Modern", emoji: "🎯" },
    id: "cribbage-1-10",
    order: 10,
    title: "Cribbage Mastery",
    subtitle: "Discard expected values, the '26 theory', odds, variants, and the ACC",
    category: "sports",
    xp: 108,
    badge: { id: "cribbage-badge-10", name: "Cribbage Master", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "At the top level, cribbage is a game of expected values and odds. Masters know the average value of every discard, the rough 'par' for a hand, and the variants and tournament structures of organized play overseen by the American Cribbage Congress.",
      year: 2024,
      overview: [
        "Expert discarding rests on expected value (EV):\n- For any six cards, you can compute the AVERAGE points each possible two-card throw yields across all 46 possible starter cards — and choose the discard with the best expectation.\n- These EV tables are well studied; masters internalize them so they instinctively keep the hand-plus-crib combination that scores the most on average.\n- It turns the layaway from a guess into a near-solved calculation, the same way poker players use odds.",
        "Two rules of thumb anchor a strong player's intuition:\n- THE '26 THEORY' — over a full game the dealer should aim for about 26 points across each round's hand, crib, and pegging; falling short suggests you're behind 'par' and should press.\n- THE AVERAGE HAND — a typical four-card cribbage hand scores around 4 to 5 points before the crib, so unusually big or small counts tell you when to gamble or play safe.\n- These benchmarks help you judge whether you're ahead of the expected pace toward 121.",
        "Cribbage has variants and an organized competitive world:\n- VARIANTS — FIVE-CARD cribbage (the older form, dealt five, kept four, game to 61), SEVEN-CARD cribbage (a longer-handed version), three- and four-handed games, and 'LOWBALL' or low-scoring variants where the goal is reversed.\n- THE AMERICAN CRIBBAGE CONGRESS (ACC) — founded in 1980, it sanctions tournaments, maintains rankings and Grand Master titles, and standardizes the rules used in competitive play.\n- Mastery combines this math, the odds of the cut and the play, and lots of practice — the same blend of arithmetic and tactics that has kept cribbage alive for four centuries.",
      ],
      technical: {
        title: "Computing Discard EV, Par Scores, and the Competitive Scene",
        body: [
          "EV-based discarding is the engine of expert play:\n- For each candidate two-card throw, sum the hand's score combined with each of the 46 possible starters, weight by likelihood, and add (for your crib) or subtract (for theirs) the crib's expected value.\n- The throw with the highest net expectation is the 'correct' discard; published tables and software give these for every six-card holding.\n- A master doesn't recompute at the table — they've absorbed the patterns (keep the 5s, throw connectors to your crib, etc.) until the EV-optimal play feels automatic.",
          "Par scores and the organized game frame mastery:\n- The '26 theory' and the ~4.5-point average hand give you a running sense of whether you're ahead of schedule, informing when to take risks (behind par) or play safe (ahead).\n- Cut and pegging probabilities — like the chance the starter helps your hand, or that an opponent can pair your lead — refine close decisions.\n- The ACC and clubs worldwide run sanctioned tournaments with these standardized rules, awarding ranking points and master titles, so the path from beginner to expert is a real, structured ladder.",
        ],
        codeExample: {
          label: "Choosing a discard by expected value",
          code: `  SIX CARDS: 4 5 5 6 J J   (your deal -> your crib)

  COMPARE THROWS by average points over all starters:
    keep 4-5-6-J  throw 5-J  -> hand EV + crib EV(5-J)
    keep 5-5-J-J  throw 4-6  -> hand EV + crib EV(4-6)
    keep 4-5-5-6  throw J-J  -> hand EV + crib EV(J-J)

  PICK the throw with the best NET expectation
  (add crib EV on your deal, subtract on theirs).

  PAR CHECK ("26 theory"): aim ~26 pts per round.`,
        },
      },
      incident: {
        title: "From Pub Pastime to Sanctioned Sport",
        when: "1980–present",
        where: "American Cribbage Congress",
        impact: "The founding of the ACC turned a centuries-old social game into an organized competitive activity with rankings, masters, and a standardized rulebook",
        body: [
          "For most of its history, cribbage was a social game learned at home and played in pubs and wardrooms. In 1980 the American Cribbage Congress was founded to organize the competitive scene — sanctioning tournaments, ranking players, awarding Grand Master titles, and fixing a standard set of rules (including muggins and skunk scoring) for serious play.",
          "Organized play revealed how deep the game's strategy runs:\n- Tournament players study discard EV tables, par scores, and cut probabilities the way chess players study openings.\n- The same arithmetic that lets a beginner count 'fifteen-two' scales up into a rich theory of expected values and odds.\n- Four centuries after Suckling, cribbage endures precisely because it rewards mastery — simple enough to learn in minutes, deep enough to study for a lifetime.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Discard by EV", sub: "best average over all starters", type: "system" },
          { label: "Par & '26 Theory'", sub: "judge your pace to 121", type: "attacker" },
          { label: "Know the Odds", sub: "cut and pegging probabilities", type: "victim" },
          { label: "Variants & the ACC", sub: "five-card, lowball, tournaments", type: "result" },
        ],
      },
      timeline: [
        { year: 1742, event: "Hoyle's treatise begins the analytical study of cribbage" },
        { year: 1900, event: "Six-card cribbage overtakes the older five-card game" },
        { year: 1980, event: "The American Cribbage Congress is founded to sanction tournament play", highlight: true },
        { year: 2024, event: "Discard solvers and EV tables define modern expert strategy" },
      ],
      keyTakeaways: [
        "Expert discarding picks the two-card throw with the best expected value over all possible starters",
        "The '26 theory' (aim ~26 points per round) and the ~4.5-point average hand gauge your pace",
        "Variants include five-card (game to 61), seven-card, three/four-handed, and lowball cribbage",
        "The American Cribbage Congress (founded 1980) standardizes rules and runs sanctioned tournaments",
      ],
      references: [
        { title: "Cribbage — variants and strategy", url: "https://en.wikipedia.org/wiki/Cribbage#Variations" },
        { title: "American Cribbage Congress", url: "https://en.wikipedia.org/wiki/American_Cribbage_Congress" },
      ],
    },
    quiz: {
      questions: [
        { id: "cribbage-1-10-q1", type: "Expected Value", challenge: "The master's tool.", text: "How do expert players choose which two cards to discard?", options: ["By the throw with the best expected value averaged over all possible starters", "By always keeping the highest cards", "Randomly", "By suit color"], correctIndex: 0, explanation: "Masters compute or memorize the discard with the highest average score across all starter cards." },
        { id: "cribbage-1-10-q2", type: "26 Theory", challenge: "Par for the round.", text: "Roughly what per-round point target does the '26 theory' suggest for the dealer?", options: ["About 26 points", "About 60 points", "About 10 points", "Exactly 15 points"], correctIndex: 0, explanation: "The '26 theory' uses ~26 points per round (hand, crib, pegging) as a par benchmark." },
        { id: "cribbage-1-10-q3", type: "Variants", challenge: "An older form.", text: "What is a defining feature of five-card cribbage?", options: ["Five cards dealt, keep four, and the game is to 61", "Seven cards dealt to each player", "No crib at all", "Game is to 200"], correctIndex: 0, explanation: "Five-card cribbage — the older form — deals five, keeps four, and plays to 61." },
        { id: "cribbage-1-10-q4", type: "The ACC", challenge: "Who runs the game.", text: "What does the American Cribbage Congress (ACC) do?", options: ["Sanctions tournaments, ranks players, and standardizes the rules", "Manufactures all cribbage boards", "Invented the game", "Sets card prices"], correctIndex: 0, explanation: "The ACC, founded in 1980, organizes competitive cribbage and standardizes its rules." },
        { id: "cribbage-1-10-q5", type: "Average Hand", challenge: "Typical count.", text: "About how many points does a typical four-card cribbage hand score (before the crib)?", options: ["Around 4 to 5 points", "Around 15 points", "Around 29 points", "Exactly 0 points"], correctIndex: 0, explanation: "The average hand is roughly 4–5 points, which helps gauge when a hand is unusually strong or weak." },
      ],
    },
  },
];
