import type { StageConfig, EpochConfig } from "./types";

export const poker3Epoch: EpochConfig = {
  id: "poker-3",
  name: "Poker: Beyond Hold'em",
  subtitle: "Omaha, Stud, Razz, Draw, Badugi, and the mixed games the pros respect",
  description:
    "Texas Hold'em is only one branch of a much larger family. This epoch takes a player who knows Hold'em and opens the rest of the poker world: the three structural families (draw, stud, and community-card games) and the high, lowball, and hi-lo split formats; Pot-Limit Omaha and the four-card 'game of the nuts'; Omaha Hi-Lo and the eight-or-better low; Seven-Card Stud and the memory game that ruled poker before Hold'em; Razz and the A-to-5 wheel; Five-Card Draw and 2-7 Triple Draw; Badugi and its four-suit lowball; the rotating mixed games like HORSE and the 8-Game that decide the WSOP $50,000 Players Championship; and how to choose, learn, and master a variant of your own. All-around skill, not one memorized game.",
  emoji: "🎴",
  color: "fuchsia",
  unlocked: true,
};

export const poker3Stages: StageConfig[] = [
  // ─── poker-3-01: The Poker Family ────────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The poker family tree", location: "Card rooms and mixed-game tables worldwide", era: "Modern", emoji: "🎴" },
    id: "poker-3-01",
    order: 1,
    title: "The Poker Family",
    subtitle: "Draw, stud, and community-card games — and high, low, and split formats",
    category: "sports",
    xp: 90,
    badge: { id: "poker3-badge-01", name: "Family Tree", emoji: "🎴" },
    challengeType: "quiz",
    info: {
      tagline: "Texas Hold'em is one game in a big family. Almost every poker variant is built from a few simple choices: how you receive cards (draw, stud, or community), whether the high or the low hand wins, and how betting is limited. Learn those axes and any new game becomes readable.",
      year: 2024,
      overview: [
        "Nearly every poker game ever dealt is a combination of a few design choices, so learning the choices is faster than memorizing games. The first choice is how players get and reveal cards — the three structural families:\n- DRAW games — you get a full hand of hidden cards and improve it by discarding and drawing replacements (e.g., Five-Card Draw, 2-7 Triple Draw, Badugi).\n- STUD games — you get a mix of face-down and face-up cards over several rounds, with no shared cards (e.g., Seven-Card Stud, Razz).\n- COMMUNITY-CARD games — you get a few private cards and share face-up board cards used by everyone (e.g., Texas Hold'em, Omaha).",
        "The second choice is which hand wins the pot — the 'direction' of the game:\n- HIGH — the best (highest) poker hand wins, the way Hold'em works.\n- LOWBALL (LOW) — the worst poker hand wins; the goal is to make low cards, and there are different rules for what counts as low (A-to-5, 2-to-7, or four-suit Badugi lows).\n- HI-LO SPLIT — the pot is split between the best high hand and the best qualifying low hand, so one deal can be won twice over.",
        "The third choice is the betting structure, which changes strategy as much as the cards:\n- FIXED-LIMIT — bets and raises are set sizes (e.g., $10 then $20); most traditional Stud and Draw games are spread this way.\n- POT-LIMIT — you can bet up to the current size of the pot, the classic structure for Omaha.\n- NO-LIMIT — you can bet any amount up to all your chips, the structure that made Hold'em famous. Mix these three axes and you can describe almost any poker game in a sentence.",
      ],
      technical: {
        title: "Reading a Game's Name as a Recipe",
        body: [
          "A game's name usually encodes the three axes, so you can decode it on sight:\n- 'No-Limit Hold'em' = community-card family, high only, no-limit betting.\n- 'Pot-Limit Omaha' (PLO) = community-card family (four hole cards), high only, pot-limit betting.\n- 'Omaha Hi-Lo Eight-or-Better' = community-card family, hi-lo split, with a low that must be eight-high or lower to qualify.\n- 'Limit Seven-Card Stud' = stud family, high only, fixed-limit betting. Once you see the pattern, an unfamiliar name stops being intimidating.",
          "The same hand-ranking ladder you learned for Hold'em carries across the whole high side of the family:\n- A flush still beats a straight, a full house still beats a flush, and so on — the rankings do not change between Omaha, Stud, and Hold'em.\n- What changes is HOW you build the five cards: from a shared board, from your own up-and-down cards, or by drawing.\n- Lowball games flip the goal and sometimes ignore straights and flushes entirely, which is why each low format needs its own short rulebook — covered in later stages.",
        ],
        codeExample: {
          label: "The three axes of any poker game",
          code: `  AXIS 1 - HOW YOU GET CARDS
    DRAW       : hidden hand, discard + draw
    STUD       : up-cards + down-cards, no board
    COMMUNITY  : hole cards + shared face-up board

  AXIS 2 - WHO WINS
    HIGH       : best hand wins
    LOW        : worst hand wins (lowball)
    HI-LO      : pot split high / qualifying low

  AXIS 3 - BETTING
    LIMIT  |  POT-LIMIT  |  NO-LIMIT

  EXAMPLE: "Pot-Limit Omaha" = COMMUNITY + HIGH + POT-LIMIT`,
        },
      },
      incident: {
        title: "How Hold'em Became the Exception, Not the Rule",
        when: "1800s–2000s",
        where: "United States card rooms",
        impact: "For most of poker's history the popular games were Draw and Stud; Hold'em's televised boom made one community-card game so dominant that players forgot how large the family is",
        body: [
          "For roughly a century, the games people meant by 'poker' were Five-Card Draw and, especially, Seven-Card Stud. Stud was the main event of the early World Series of Poker and the game in countless home games and movies. Texas Hold'em was a relative newcomer that only became the headline game after 1970, and then exploded worldwide after the 2003 televised boom.",
          "That boom was so total that many modern players assume Hold'em is poker, full stop:\n- In reality it is one leaf on a large tree of draw, stud, and community games, each with high, low, and split versions.\n- The richest tournaments for elite players are deliberately MIXED, rotating through many of these variants to reward all-around skill.\n- Knowing the family is what lets a Hold'em player step into an Omaha, Stud, or mixed game and not be lost.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Three Families", sub: "draw, stud, community", type: "system" },
          { label: "Direction of the Game", sub: "high, low, or hi-lo split", type: "attacker" },
          { label: "Betting Structure", sub: "limit, pot-limit, no-limit", type: "victim" },
          { label: "Any Game Decoded", sub: "name reads as a recipe", type: "result" },
        ],
      },
      timeline: [
        { year: 1850, event: "Five-Card Draw spreads across the American frontier" },
        { year: 1900, event: "Seven-Card Stud becomes the dominant American poker game" },
        { year: 1970, event: "WSOP debuts; Stud and Hold'em events share the marquee", highlight: true },
        { year: 2003, event: "The televised boom makes No-Limit Hold'em the game everyone knows" },
      ],
      keyTakeaways: [
        "Almost every poker game is a mix of three choices: how cards are dealt, who wins, and how betting is limited",
        "The three structural families are draw, stud, and community-card games",
        "Games can be high, lowball (worst hand wins), or hi-lo split (pot divided)",
        "Betting is fixed-limit, pot-limit, or no-limit — and that structure shapes strategy as much as the cards",
      ],
      references: [
        { title: "Poker — variations and structure", url: "https://en.wikipedia.org/wiki/Poker" },
        { title: "List of poker variants", url: "https://en.wikipedia.org/wiki/List_of_poker_variants" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-01-q1", type: "Families", challenge: "The three branches.", text: "What are the three structural families of poker games?", options: ["Draw, stud, and community-card games", "Bluff, value, and check games", "Limit, pot-limit, and no-limit", "High, low, and split"], correctIndex: 0, explanation: "Every variant is a draw, stud, or community-card game; the other axes are direction and betting." },
        { id: "poker-3-01-q2", type: "Direction", challenge: "Worst hand wins.", text: "In a 'lowball' game, which hand wins the pot?", options: ["The worst (lowest) poker hand", "The best high hand", "The first to fold", "A random hand"], correctIndex: 0, explanation: "Lowball flips the goal — you try to make the lowest hand, not the highest." },
        { id: "poker-3-01-q3", type: "Split", challenge: "Two winners.", text: "What is a 'hi-lo split' game?", options: ["The pot is split between the best high hand and the best qualifying low hand", "The pot is split evenly among all players", "The high hand wins twice the pot", "Only the low hand can win"], correctIndex: 0, explanation: "In hi-lo, one deal is won twice — half to the best high, half to the best qualifying low." },
        { id: "poker-3-01-q4", type: "Betting", challenge: "Sized to the pot.", text: "In 'pot-limit' betting, what is the most you can bet?", options: ["Up to the current size of the pot", "Any amount up to all your chips", "Only a fixed amount", "Twice the big blind"], correctIndex: 0, explanation: "Pot-limit caps a bet at the pot size — the classic structure for Omaha." },
        { id: "poker-3-01-q5", type: "Stud", challenge: "No shared cards.", text: "What distinguishes a stud game from a community-card game?", options: ["Stud games have no shared board — players get their own up- and down-cards", "Stud games have more betting rounds", "Stud games use two decks", "Stud games are always no-limit"], correctIndex: 0, explanation: "Stud deals each player a private mix of face-up and face-down cards, with no community board." },
      ],
    },
  },

  // ─── poker-3-02: Omaha (PLO) Basics ──────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The Omaha table", location: "High-stakes cash games worldwide", era: "Modern", emoji: "🍀" },
    id: "poker-3-02",
    order: 2,
    title: "Omaha (Pot-Limit Omaha) Basics",
    subtitle: "Four hole cards, exactly two-plus-three, and the game of the nuts",
    category: "sports",
    xp: 92,
    badge: { id: "poker3-badge-02", name: "Four-Card Player", emoji: "🍀" },
    challengeType: "quiz",
    info: {
      tagline: "Omaha looks like Hold'em with extra cards, but one rule changes everything: you get four hole cards and MUST use exactly two of them plus exactly three from the board. More cards make bigger hands — which is why Omaha is called 'the game of the nuts'.",
      year: 2024,
      overview: [
        "Omaha is a community-card game, like Hold'em, with the same board structure: a flop, a turn, and a river of shared cards. The differences are what make it a different game:\n- FOUR HOLE CARDS — each player is dealt four private cards instead of two.\n- THE TWO-AND-THREE RULE — you must use EXACTLY two of your four hole cards and EXACTLY three of the five board cards to make your hand; no more, no fewer.\n- This is the rule beginners break most often, and getting it wrong leads to badly misreading your own hand.",
        "That single rule has big consequences:\n- More starting cards mean more two-card combinations (six possible pairs of your four cards), so players make stronger hands far more often than in Hold'em.\n- Because strong hands are common, the winning hand at showdown is frequently the nuts or close to it — hence the nickname 'the game of the nuts'.\n- A hand that would be huge in Hold'em (like top pair, or even a non-nut flush) is often second-best in Omaha and can lose a big pot.",
        "The two-and-three rule has a famous trap worth burning into memory:\n- If the board shows four cards of one suit, you still need EXACTLY two cards of that suit in your hand to have a flush — one is not enough, because you must play two hole cards.\n- Likewise, having a single ace in your hand does not make a flush just because the board is suited.\n- Always build your hand by literally picking two from your hand and three from the board, every time.",
      ],
      technical: {
        title: "Pot-Limit Betting and Why PLO Boomed",
        body: [
          "Omaha is most often played pot-limit (PLO), and the betting structure shapes it:\n- POT-LIMIT means the biggest bet allowed is the current size of the pot, so pots grow geometrically rather than via a single all-in shove.\n- Because hands run so close in value, pot-limit keeps the game playable — pure no-limit Omaha would be wildly volatile.\n- Bet sizing in PLO is partly arithmetic: a 'pot-sized bet' is calculated from the pot plus the amount needed to call, a skill covered in the strategy stage.",
          "PLO has become the second most popular form of poker, especially in high-stakes cash games:\n- Players who found Hold'em 'solved' and low-action were drawn to Omaha's bigger pots, more draws, and higher variance.\n- Online and live high-stakes lineups increasingly feature PLO as the game of choice for action.\n- For a Hold'em player, the fastest way to start is to respect the two-and-three rule, value nut and near-nut hands, and discount the marginal hands that win in Hold'em.",
        ],
        codeExample: {
          label: "The two-and-three rule in action",
          code: `  YOUR FOUR HOLE CARDS:   [A♠] [A♥] [K♦] [2♣]
  BOARD:                  [Q♠] [J♠] [T♠] [7♠] [3♦]

  TEMPTING (but ILLEGAL): "I have A-high spade flush!"
    -> you only hold ONE spade (A♠); a flush needs TWO

  YOUR REAL BEST HAND: use A + K (hole) + Q J T (board)
    -> A K Q J T  =  a STRAIGHT (broadway), no flush

  RULE: ALWAYS exactly 2 from hand + exactly 3 from board`,
        },
      },
      incident: {
        title: "From a Side Game to the High-Stakes Main Event",
        when: "1980s–2010s",
        where: "Las Vegas and online high-stakes",
        impact: "Omaha grew from a niche Vegas side game into the dominant high-action format, with the biggest online cash pots in history dealt in PLO",
        body: [
          "Omaha spread through Las Vegas card rooms in the 1980s as a high-action alternative to Hold'em, prized because the four-card hands produced more action and bigger pots. For years it lived in the shadow of Hold'em as a 'side game', popular with gamblers who wanted more cards in play.",
          "As Hold'em strategy matured and games got tougher, serious players turned to Omaha for the action:\n- Pot-Limit Omaha became a staple of the nosebleed online and live cash games, where some of the largest pots ever recorded were dealt.\n- The World Series of Poker added prestigious PLO events, and the game became a required skill for any well-rounded high-stakes player.\n- Today PLO sits firmly as poker's number-two game, and 'the game of the nuts' is no longer a secret.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Four Hole Cards", sub: "twice as many as Hold'em", type: "system" },
          { label: "Two-and-Three Rule", sub: "exactly 2 hole + 3 board", type: "attacker" },
          { label: "Stronger Hands Common", sub: "nuts win often", type: "victim" },
          { label: "Pot-Limit Action", sub: "PLO, poker's #2 game", type: "result" },
        ],
      },
      timeline: [
        { year: 1982, event: "Omaha spreads in Las Vegas as a high-action community game" },
        { year: 1990, event: "Pot-Limit Omaha establishes itself in European and US card rooms" },
        { year: 2008, event: "Online high-stakes PLO produces record-breaking cash pots", highlight: true },
        { year: 2024, event: "PLO is firmly poker's second most popular form" },
      ],
      keyTakeaways: [
        "Omaha deals four hole cards but you must use exactly two of them plus exactly three board cards",
        "More starting cards make strong hands common, so showdowns are often won by the nuts — 'the game of the nuts'",
        "Four board cards of one suit is not a flush unless you hold exactly two of that suit",
        "Omaha is usually played pot-limit (PLO), now the second most popular form of poker",
      ],
      references: [
        { title: "Omaha hold 'em", url: "https://en.wikipedia.org/wiki/Omaha_hold_%27em" },
        { title: "Community card poker", url: "https://en.wikipedia.org/wiki/Community_card_poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-02-q1", type: "The Rule", challenge: "Two and three.", text: "In Omaha, how must you build your five-card hand?", options: ["Exactly two hole cards plus exactly three board cards", "Any five of the nine available cards", "All four hole cards plus one board card", "Only the five board cards"], correctIndex: 0, explanation: "Omaha requires exactly two of your four hole cards and exactly three of the board cards." },
        { id: "poker-3-02-q2", type: "Hole Cards", challenge: "How many?", text: "How many private hole cards does each player get in Omaha?", options: ["Four", "Two", "Three", "Five"], correctIndex: 0, explanation: "Omaha deals four hole cards versus two in Hold'em." },
        { id: "poker-3-02-q3", type: "The Trap", challenge: "Four to a suit.", text: "The board shows four spades but you hold only one spade. Do you have a flush?", options: ["No — you must use exactly two hole cards, so you need two spades", "Yes — one spade plus four on the board is enough", "Yes — any ace makes a flush", "Only on the river"], correctIndex: 0, explanation: "The two-and-three rule means a single suited hole card can never make a flush in Omaha." },
        { id: "poker-3-02-q4", type: "Nickname", challenge: "Why 'the nuts'.", text: "Why is Omaha called 'the game of the nuts'?", options: ["More cards make strong hands common, so the winner is often the nuts or close", "Because it is played with peanuts as chips", "Because bluffing always wins", "Because only nut hands are dealt"], correctIndex: 0, explanation: "Four hole cards make big hands frequent, so the best possible hand often shows up at showdown." },
        { id: "poker-3-02-q5", type: "Structure", challenge: "PLO.", text: "What does the 'PL' in PLO stand for?", options: ["Pot-Limit — you can bet up to the size of the pot", "Player-Limit", "Pre-flop Limit", "Position Limit"], correctIndex: 0, explanation: "PLO is Pot-Limit Omaha, the most common betting structure for the game." },
      ],
    },
  },

  // ─── poker-3-03: PLO Strategy ────────────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The wrap draw", location: "Pot-Limit Omaha tables", era: "Modern", emoji: "🌀" },
    id: "poker-3-03",
    order: 3,
    title: "PLO Strategy",
    subtitle: "Wraps, the nuts, position, pot-sized bets, and redraws",
    category: "sports",
    xp: 96,
    badge: { id: "poker3-badge-03", name: "Wrap Master", emoji: "🌀" },
    challengeType: "quiz",
    info: {
      tagline: "PLO rewards players who chase the nuts with big draws and fold the second-best hands that win in Hold'em. The core ideas are wraps and monster draws, nut-vs-non-nut discipline, position, pot-limit sizing, and the redraws that protect a made hand.",
      year: 2024,
      overview: [
        "The signature draw of Omaha is the 'wrap', and it has no equivalent in Hold'em:\n- A WRAP is a straight draw using your four hole cards that wraps around the board's connecting cards, giving far more outs than a Hold'em straight draw.\n- Where an open-ended straight draw in Hold'em has 8 outs, a big wrap can have 13, 17, or even 20 outs to make a straight.\n- These monster draws are often favorites over a made hand, which is why aggressive semi-bluffing with draws is central to PLO.",
        "The most important discipline in PLO is nut-vs-non-nut thinking:\n- Because strong hands are common, NON-NUT hands lose money: a king-high flush, a small straight, or a low set can be a trap that pays off a bigger hand.\n- Aim to make and draw to the NUTS — the best flush, the top straight, top set — and be cautious with second-best holdings.\n- The classic beginner leak is overvaluing Hold'em-strength hands (top pair, weak flushes) that are routinely beaten in Omaha.",
        "Two more pillars round out the basics:\n- POSITION is even more valuable than in Hold'em because pots are bigger and draws are complex; acting last lets you size bets and control the pot with far better information.\n- REDRAWS matter — a made hand that also has a draw to something better (e.g., a straight with a flush redraw) is much stronger than a 'naked' made hand, because it can improve if an opponent catches up.",
      ],
      technical: {
        title: "Pot-Sized Bets and Counting Wrap Outs",
        body: [
          "Pot-limit betting requires a small calculation that becomes second nature:\n- A 'pot-sized bet' equals the current pot PLUS the amount you would call. If the pot is 100 and a player bets 50, the pot for your raise is 100 + 50 (their bet) + 50 (your call) = 200, so a maximum raise makes it 250 to go.\n- Because you cannot simply move all-in for a huge overbet, PLO pots build over multiple streets, rewarding planning.\n- Sizing is a weapon: betting pot to charge draws, or sizing down to control the pot with a vulnerable made hand.",
          "Counting outs in PLO is bigger and more dangerous than in Hold'em:\n- A big wrap can have 17–20 straight outs, making it a favorite over many made hands — but watch for outs that complete the board's flush or pair it, which can make your straight second-best.\n- Always discount outs that give an opponent a higher hand; 'clean' outs to the nuts are what you want.\n- Reverse-implied-odds traps are everywhere: drawing to a non-nut flush or the low end of a straight can win small and lose big, so the discipline is to draw to the nuts and fold the rest.",
        ],
        codeExample: {
          label: "A wrap draw vs a Hold'em draw",
          code: `  BOARD: [9♥] [8♦] [2♣]

  HOLD'EM open-ender:  you hold  T-7
    outs to a straight:  J or 6  =  8 outs

  OMAHA wrap:  you hold  J-T-7-6
    a straight completes with: Q J T 7 6 5...
    -> J, T, 7, 6, 5, Q  ->  up to ~17-20 outs

  A big wrap can be a FAVORITE over top set.
  Draw to the NUTS; discount outs that pair the board.`,
        },
      },
      incident: {
        title: "Why Omaha Punishes the Hold'em Reflex",
        when: "Every Hold'em player's first PLO session",
        where: "Cash games and PLO tournaments",
        impact: "Skilled Hold'em players routinely lose at PLO at first by overvaluing top pair and non-nut hands — the game demands a different sense of strength",
        body: [
          "A common story in poker is the strong Hold'em player who sits down in a PLO game and loses quickly. The reason is almost always the same: they keep valuing hands the way Hold'em taught them — paying off with top pair, a weak flush, or the bottom of a straight — in a game where those hands are routinely crushed by the nuts.",
          "Adjusting means rebuilding your sense of hand strength from scratch:\n- Treat top pair and non-nut draws as weak; treat wraps, nut flush draws, and big made hands with redraws as your bread and butter.\n- Use position and pot-limit sizing to play big draws aggressively and to keep marginal hands cheap.\n- The players who make this shift find PLO enormously profitable; the ones who don't keep paying off the nuts.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Wraps & Big Draws", sub: "17-20 outs possible", type: "system" },
          { label: "Draw to the Nuts", sub: "non-nut hands lose money", type: "attacker" },
          { label: "Position & Sizing", sub: "pot-limit, big pots", type: "victim" },
          { label: "Value Redraws", sub: "made hand + a draw to better", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Pot-Limit Omaha strategy spreads through European card rooms" },
        { year: 2006, event: "Online PLO sparks deep study of wraps and equity", highlight: true },
        { year: 2015, event: "Solvers quantify PLO draws, confirming aggressive big-draw play" },
        { year: 2024, event: "Nut-focused, position-aware PLO is standard high-stakes strategy" },
      ],
      keyTakeaways: [
        "A 'wrap' is an Omaha straight draw with many more outs than Hold'em — often a favorite over a made hand",
        "Draw to and make the nuts; non-nut hands (weak flushes, low straights) lose money in PLO",
        "Position is even more valuable in PLO because pots are bigger and draws are complex",
        "Redraws — a made hand that can still improve — are much stronger than a naked made hand",
      ],
      references: [
        { title: "Omaha hold 'em — strategy", url: "https://en.wikipedia.org/wiki/Omaha_hold_%27em#Strategy" },
        { title: "Pot-limit betting", url: "https://en.wikipedia.org/wiki/Betting_in_poker#Pot_limit" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-03-q1", type: "Wraps", challenge: "The big draw.", text: "What is a 'wrap' in Omaha?", options: ["A straight draw using your four hole cards that can have far more outs than a Hold'em draw", "A way to fold quickly", "A flush draw with one card", "A type of forced bet"], correctIndex: 0, explanation: "Wraps use multiple connecting hole cards to make straight draws with up to ~20 outs." },
        { id: "poker-3-03-q2", type: "Discipline", challenge: "Which hand to want.", text: "What kind of hands should you primarily draw to in PLO?", options: ["The nuts — non-nut hands like weak flushes and low straights lose money", "Any pair", "Second-best flushes", "The bottom of a straight"], correctIndex: 0, explanation: "Because strong hands are common, drawing to the nuts is essential; non-nut hands are traps." },
        { id: "poker-3-03-q3", type: "Redraws", challenge: "Made plus more.", text: "Why is a made hand with a 'redraw' stronger than a naked made hand?", options: ["It can still improve to a better hand if an opponent catches up", "It can never be beaten", "It wins twice the pot", "Redraws don't matter in PLO"], correctIndex: 0, explanation: "A straight with a flush redraw, for example, has extra equity to stay ahead." },
        { id: "poker-3-03-q4", type: "Sizing", challenge: "Biggest legal bet.", text: "In pot-limit Omaha, the maximum bet is:", options: ["The current size of the pot (including the call amount in a raise)", "All your chips at any time", "Twice the big blind", "A fixed limit each street"], correctIndex: 0, explanation: "Pot-limit caps bets at the pot size; a raise includes your call in the pot calculation." },
        { id: "poker-3-03-q5", type: "Leak", challenge: "Common mistake.", text: "What is the classic Hold'em player's leak when moving to PLO?", options: ["Overvaluing top pair and non-nut hands that get crushed by the nuts", "Folding too many wraps", "Never bluffing", "Drawing only to the nuts"], correctIndex: 0, explanation: "Hold'em-strength hands like top pair are routinely beaten in Omaha; overvaluing them loses money." },
      ],
    },
  },

  // ─── poker-3-04: Omaha Hi-Lo / O8 ────────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The split pot", location: "Omaha Hi-Lo tables", era: "Modern", emoji: "✂️" },
    id: "poker-3-04",
    order: 4,
    title: "Omaha Hi-Lo / O8",
    subtitle: "Eight-or-better lows, scooping, and getting quartered",
    category: "sports",
    xp: 98,
    badge: { id: "poker3-badge-04", name: "Scooper", emoji: "✂️" },
    challengeType: "quiz",
    info: {
      tagline: "Omaha Hi-Lo splits the pot between the best high hand and the best qualifying low. The whole game is about making BOTH ends of one hand — chasing the scoop, while dodging the disaster of being 'quartered'.",
      year: 2024,
      overview: [
        "Omaha Hi-Lo (also called Omaha-8 or O8) is Omaha with a split pot:\n- HALF the pot goes to the best high hand, exactly as in regular Omaha.\n- The other HALF goes to the best qualifying LOW hand — and you still use exactly two hole cards and three board cards for each direction (and they can be different cards for the high and the low).\n- One player can win both halves; one hand can be used twice.",
        "The low has a strict qualifier called 'eight-or-better':\n- To make a low, you must use five different cards all ranked eight or lower (with the ace counting as low). If no one has five such cards, no low qualifies and the high hand wins the WHOLE pot.\n- For the low, straights and flushes do NOT count against you — only the ranks matter — and the LOWEST five cards win.\n- The best possible low is 5-4-3-2-A (the 'wheel'), read from the top card down: the lower your highest card, the better your low.",
        "The strategic heart of O8 is the split itself:\n- SCOOPING — winning both the high and the low halves of one pot — is the goal, because it doubles your win and is far more profitable than splitting.\n- GETTING QUARTERED is the trap: if you tie for one half (commonly two players sharing the same nut low), you collect only a quarter of the pot, which can lose money against a big bet.\n- A-2 is the most powerful low holding because it draws to the nut low (the wheel), which is why hands with A-2 plus high-card potential are premium.",
      ],
      technical: {
        title: "Reading a Board for Both Halves, and the Quarter Trap",
        body: [
          "Every O8 board must be read twice — once for high, once for low:\n- A low is only POSSIBLE if at least three different cards eight-or-lower are on the board; with two high cards and a pair on the board, no low can be made and it plays as high-only.\n- The nut low is whatever two of your hole cards make the lowest five-card combination with the board; holding A-2 usually makes the nut low when the board allows it.\n- Always ask: can I win the high, the low, or both? Hands that can only win one half — especially a non-nut low — are dangerous.",
          "The quarter trap is the defining risk of split-pot poker:\n- If two players both hold A-2 on a low board, they TIE for the best low and each gets a quarter of the pot; the high hand takes the other half.\n- Being quartered with a lot of money in can be a net loss even though you 'won', so a bare nut-low draw without high potential is a hand to play cautiously.\n- The premium O8 hands are 'two-way' — A-2 with a suited ace, a pair, or connecting high cards — because they can scoop and are less exposed to being quartered.",
        ],
        codeExample: {
          label: "Reading one O8 hand for high and low",
          code: `  BOARD: [A♠] [6♦] [4♣] [K♠] [9♠]

  LOW possible? three cards <= 8 on board (A,6,4)  YES

  YOU HOLD: 2-3-K-Q
    LOW : use 2-3 + A-4-6  ->  6-4-3-2-A  (a strong low)
    HIGH: use K-Q + A-K-9  ->  pair of Kings (weak high)

  ANOTHER PLAYER with A-2 makes 6-4-2-A -> better low!
  Best LOW is read top-down; lowest high card wins.
  NUT LOW here = A-2 in hand.  GOAL: scoop both halves.`,
        },
      },
      incident: {
        title: "The Quartering That Teaches Every Beginner",
        when: "Every new split-pot player's education",
        where: "Omaha Hi-Lo cash games",
        impact: "New O8 players who chase 'a low' without the nut low repeatedly get quartered — learning the hard way that half a hand is not enough",
        body: [
          "The classic Omaha Hi-Lo lesson arrives when a beginner makes a low, bets confidently, and discovers an opponent has the same low — splitting that half two ways and leaving them with just a quarter of the pot after putting in a third of the money. It is a 'win' that loses chips, and it happens again and again until the lesson sticks.",
          "The cure is to value the SCOOP and the NUT low, not just any low:\n- Chase hands that can win both halves, anchored by A-2 for the nut low and high-card or pairing potential for the high.\n- Treat a bare, non-nut low as a weak holding that invites quartering.\n- Once a player internalizes 'scoop or be careful', Omaha Hi-Lo becomes a deeply strategic, lower-variance cousin of PLO and a fixture of mixed games.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Split the Pot", sub: "best high + best low", type: "system" },
          { label: "Eight-or-Better Low", sub: "five cards 8 or lower", type: "attacker" },
          { label: "A-2 = Nut Low Draw", sub: "the wheel 5-4-3-2-A", type: "victim" },
          { label: "Scoop, Avoid Quartering", sub: "win both, dodge ties", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Omaha Hi-Lo spreads as a popular split-pot cash game" },
        { year: 2002, event: "O8 becomes a fixture of WSOP and mixed-game rotations", highlight: true },
        { year: 2006, event: "Online O8 popularizes 'scoop or fold' nut-low discipline" },
        { year: 2024, event: "Omaha Hi-Lo is a staple of HORSE and the 8-Game mix" },
      ],
      keyTakeaways: [
        "Omaha Hi-Lo splits the pot between the best high hand and the best qualifying low",
        "A low must be five different cards eight-or-lower; if none qualifies, the high hand wins the whole pot",
        "The best low is the wheel 5-4-3-2-A, and A-2 is the premium nut-low holding",
        "Scooping (winning both halves) is the goal; being 'quartered' on a tied low can lose money",
      ],
      references: [
        { title: "Omaha hold 'em — Hi/Lo split", url: "https://en.wikipedia.org/wiki/Omaha_hold_%27em#Omaha_Hi-Lo" },
        { title: "Lowball (poker)", url: "https://en.wikipedia.org/wiki/Lowball_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-04-q1", type: "The Split", challenge: "Two halves.", text: "How is the pot awarded in Omaha Hi-Lo?", options: ["Half to the best high hand, half to the best qualifying low hand", "All to the best high hand", "All to the lowest hand", "Evenly to every player"], correctIndex: 0, explanation: "O8 splits the pot between the best high and the best qualifying low." },
        { id: "poker-3-04-q2", type: "Qualifier", challenge: "Eight or better.", text: "What does a hand need to qualify for the low in O8?", options: ["Five different cards all ranked eight or lower (ace counts low)", "Any pair of low cards", "A straight of low cards", "Three cards under five"], correctIndex: 0, explanation: "The 'eight-or-better' rule requires five distinct cards eight or below to make a low." },
        { id: "poker-3-04-q3", type: "Best Low", challenge: "The wheel.", text: "What is the best possible low hand?", options: ["5-4-3-2-A (the wheel)", "6-5-4-3-2", "8-7-6-5-4", "A-A-2-3-4"], correctIndex: 0, explanation: "The wheel 5-4-3-2-A is the lowest five-card combination and the nut low." },
        { id: "poker-3-04-q4", type: "Goal", challenge: "Win it all.", text: "What does it mean to 'scoop' a pot?", options: ["Win both the high and the low halves of the same pot", "Fold to save chips", "Tie for the low", "Win only the high half"], correctIndex: 0, explanation: "Scooping means taking both halves, which is far more profitable than splitting." },
        { id: "poker-3-04-q5", type: "The Trap", challenge: "A quarter only.", text: "What does it mean to get 'quartered'?", options: ["You tie for one half of the pot and collect only a quarter of the total", "You win four pots", "You fold four times", "You make four of a kind"], correctIndex: 0, explanation: "Tying for a half (e.g., the same nut low) splits that half, leaving you just a quarter." },
      ],
    },
  },

  // ─── poker-3-05: Seven-Card Stud ─────────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The Stud table", location: "The game that ruled poker before Hold'em", era: "Modern", emoji: "🎩" },
    id: "poker-3-05",
    order: 5,
    title: "Seven-Card Stud",
    subtitle: "Antes, the bring-in, third to seventh street, and a memory game",
    category: "sports",
    xp: 100,
    badge: { id: "poker3-badge-05", name: "Up-Card Reader", emoji: "🎩" },
    challengeType: "quiz",
    info: {
      tagline: "Before Hold'em took over, Seven-Card Stud WAS poker. There are no community cards: each player builds a hand from their own up-cards and down-cards over five betting rounds. Watching the exposed cards — and remembering folded ones — is the whole game.",
      year: 2024,
      overview: [
        "Seven-Card Stud is a stud game with no shared board; everyone makes their own best five-card hand from seven cards dealt to them alone. The structure runs over five betting rounds:\n- ANTES — every player posts a small forced ante before the deal (instead of blinds).\n- THIRD STREET — each player gets two down-cards and one up-card, then the first betting round.\n- FOURTH through SEVENTH STREET — players receive three more up-cards (fourth, fifth, sixth) and a final down-card (seventh, 'the river'), with a betting round after each.",
        "Because there are no blinds, the action is started by the 'bring-in':\n- On third street, the player showing the LOWEST up-card is forced to make a small 'bring-in' bet to start the action.\n- On later streets, the player showing the best poker hand on their up-cards acts first and may bet.\n- Seven-Card Stud is traditionally a FIXED-LIMIT game, with bets stepping up to the bigger limit on later streets.",
        "The defining skill is information from exposed cards:\n- Each opponent's up-cards are visible, so you can read what hands are possible and dead — if you need a flush and three of your suit are showing in other hands, your draw is much weaker.\n- MEMORY is essential: cards that were folded are gone from the deck, and a good Stud player remembers them to judge their own outs and opponents' likely hands.\n- With no community cards, there is no shared 'nuts' — strength is relative to what each player could be building from their own seven cards.",
      ],
      technical: {
        title: "Reading Boards Without a Board, and Counting Live Cards",
        body: [
          "Stud replaces board-reading with up-card reading:\n- Watch the up-cards as they arrive: a player whose exposed cards are all one suit may be on a flush; paired up-cards threaten trips or a full house; connected up-cards suggest a straight.\n- 'Live' cards are the ranks and suits you need that are NOT showing in opponents' hands or the muck — the more live your cards, the better your draw.\n- A draw that looks strong can be nearly dead if the cards you need are already exposed elsewhere, so counting live cards is the Stud version of counting outs.",
          "Door cards and seating drive third-street strategy:\n- Your up-card (the 'door card') and the up-cards around the table determine whether to play: a high pair or three to a flush with live cards is strong; trash with dead cards folds to the bring-in.\n- Position in Stud is fluid — it changes each street based on whose up-cards are strongest — so you must re-read the table every round.\n- Because the game is fixed-limit and information accumulates, Stud rewards patience, accurate memory, and disciplined starting-hand selection more than big bluffs.",
        ],
        codeExample: {
          label: "One Seven-Card Stud hand (your view)",
          code: `  3rd  : (X X) 7♠        <- 2 down + 1 up; bring-in lowest
  4th  : (X X) 7♠ 8♠
  5th  : (X X) 7♠ 8♠ 9♠   <- three to a straight flush!
  6th  : (X X) 7♠ 8♠ 9♠ 2♦
  7th  : (X X) 7♠ 8♠ 9♠ 2♦ (X)  <- final card face DOWN

  ARE YOUR SPADES LIVE?  count spades in OTHER up-cards.
  If 3 spades already showing elsewhere -> draw is weak.
  No community cards: read up-cards + REMEMBER folds.`,
        },
      },
      incident: {
        title: "The Game That Was Poker — Then Yielded the Crown",
        when: "1900s–1980s",
        where: "American card rooms and the early WSOP",
        impact: "Seven-Card Stud was the dominant poker game for most of the 20th century before Texas Hold'em's televised rise pushed it to the background",
        body: [
          "For most of the 1900s, when Americans said 'poker', they very often meant Seven-Card Stud. It was the staple of home games, the game in old films, and a featured event at the early World Series of Poker. Its blend of visible and hidden information, with no shared board, made it a deep test of reading and memory.",
          "Texas Hold'em's rise changed the landscape:\n- After the 1970 WSOP made No-Limit Hold'em the championship and television later spread it worldwide, Stud faded from the spotlight.\n- Yet Stud never disappeared — it remains a beloved fixture in mixed-game rotations and among players who prize its memory-and-reading demands.\n- Knowing Stud is part of being a complete player, which is exactly why it sits inside the WSOP's mixed-game championships to this day.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Antes & Bring-In", sub: "no blinds; lowest card starts", type: "system" },
          { label: "Third to Seventh", sub: "up-cards + down-cards, 5 streets", type: "attacker" },
          { label: "Read Exposed Boards", sub: "no community cards", type: "victim" },
          { label: "Memory Wins", sub: "remember the folded cards", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Seven-Card Stud becomes the dominant American poker game" },
        { year: 1970, event: "Stud is a marquee event at the first World Series of Poker" },
        { year: 1980, event: "No-Limit Hold'em begins eclipsing Stud as the headline game", highlight: true },
        { year: 2024, event: "Stud endures as a core game in HORSE and the 8-Game mix" },
      ],
      keyTakeaways: [
        "Seven-Card Stud has no community cards; each player builds from their own up- and down-cards",
        "Antes and a 'bring-in' (lowest up-card) start the action instead of blinds",
        "It runs five betting rounds, third street through seventh, traditionally fixed-limit",
        "Reading opponents' exposed up-cards and remembering folded cards (live-card counting) is the core skill",
      ],
      references: [
        { title: "Seven-card stud", url: "https://en.wikipedia.org/wiki/Seven-card_stud" },
        { title: "Stud poker", url: "https://en.wikipedia.org/wiki/Stud_poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-05-q1", type: "Structure", challenge: "No shared cards.", text: "What is the key structural feature of Seven-Card Stud?", options: ["There are no community cards; each player uses their own up- and down-cards", "Players share five community cards", "Everyone draws new cards", "It uses four hole cards"], correctIndex: 0, explanation: "Stud has no board — each player builds a hand from seven cards dealt to them alone." },
        { id: "poker-3-05-q2", type: "The Bring-In", challenge: "Who starts.", text: "On third street, who makes the forced 'bring-in' bet?", options: ["The player showing the lowest up-card", "The player to the dealer's left", "The player with the highest up-card", "The previous winner"], correctIndex: 0, explanation: "The lowest exposed up-card is forced to bring in the betting; there are no blinds." },
        { id: "poker-3-05-q3", type: "Streets", challenge: "Count the rounds.", text: "How many betting rounds does Seven-Card Stud have?", options: ["Five (third through seventh street)", "Four", "Two", "Seven"], correctIndex: 0, explanation: "Betting occurs on third, fourth, fifth, sixth, and seventh streets — five rounds." },
        { id: "poker-3-05-q4", type: "The Skill", challenge: "What wins.", text: "Why is memory so important in Seven-Card Stud?", options: ["Folded cards are gone from the deck, so remembering them tells you your outs and opponents' hands", "You must memorize the betting order", "There are no betting rounds to track", "Memory has no role in Stud"], correctIndex: 0, explanation: "Tracking exposed and folded cards (live-card counting) is the heart of Stud strategy." },
        { id: "poker-3-05-q5", type: "Live Cards", challenge: "Dead draw.", text: "You need spades for a flush, but three spades are already showing in opponents' up-cards. What does that mean?", options: ["Your draw is much weaker because fewer of your cards are 'live'", "Your draw is stronger", "It has no effect", "You automatically win"], correctIndex: 0, explanation: "Cards you need that are visible elsewhere are not live, reducing your real outs." },
      ],
    },
  },

  // ─── poker-3-06: Razz ────────────────────────────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The Razz table", location: "Mixed-game rooms and the WSOP", era: "Modern", emoji: "🔻" },
    id: "poker-3-06",
    order: 6,
    title: "Razz",
    subtitle: "Seven-card lowball stud where the worst hand wins",
    category: "sports",
    xp: 100,
    badge: { id: "poker3-badge-06", name: "Wheel Chaser", emoji: "🔻" },
    challengeType: "quiz",
    info: {
      tagline: "Razz is Seven-Card Stud turned upside down: the LOWEST hand wins. Straights and flushes don't count, the ace is always low, and the perfect hand is the wheel A-2-3-4-5. It looks simple, but the upside-down logic trips up even strong players.",
      year: 2024,
      overview: [
        "Razz uses the exact deal of Seven-Card Stud — two down, four up, one down over five streets — but the goal is reversed:\n- The BEST LOW hand wins the whole pot (there is no high half; Razz is lowball, not split).\n- It uses A-to-5 (or 'California') lowball rules: the ace counts as the lowest card, and straights and flushes do NOT count against you.\n- That means the best possible hand is A-2-3-4-5, called the 'wheel' or the 'bicycle' — five unpaired low cards in a row, which would be a straight in a high game but is the nuts here.",
        "Reading a low hand is the opposite of reading a high one:\n- A low hand is ranked from its HIGHEST card downward; the lower your top card, the better. A hand 'eight-six' (8-6-x-x-x) beats 'eight-seven', and any seven-high beats any eight-high.\n- PAIRS are bad — pairing your cards ruins a low, so you want five different ranks.\n- High cards (kings, queens, jacks) and pairs are your enemies; the more low, unpaired cards you hold, the stronger your hand.",
        "The forced-bet rule also flips relative to Stud:\n- Because the HIGHEST card is the worst in lowball, the player showing the HIGHEST up-card on third street is forced to bring in the betting (the reverse of Stud, where the lowest card brings in).\n- On later streets, the player showing the best (lowest) board acts first and may bet.\n- As in Stud, there are no community cards, so reading opponents' up-cards and remembering exposed high and low cards is central.",
      ],
      technical: {
        title: "Counting the Worst Card and Tracking Live Lows",
        body: [
          "Razz strategy is built on the same Stud skills, inverted:\n- Your THREE LOWEST cards on third street are your starting hand; three cards to a wheel (like A-2-3) is premium, while a buried high card is a quick fold.\n- Watch opponents' up-cards for low cards: if many low cards are exposed in other hands, the lows you need are less 'live', weakening your draw — the live-card logic of Stud, aimed at low cards.\n- A board that 'bricks' (catches high cards or pairs on later streets) can turn a great-looking low into a loser, so the relative race between two low draws is read street by street.",
          "Two ideas separate winning Razz players:\n- The hand is only as good as its highest card, so on the river you judge the 'made' low by its top card; a smooth nine can be a winner, a rough ten often is not.\n- Bluffing exists in Razz through your board: if your up-cards show a scary run of low cards while an opponent's board pairs or catches a king, you can represent a made low and pressure them to fold.\n- Patience and discipline dominate, because the upside-down rankings tempt errors — many players misjudge which low hand is actually winning until it becomes second nature.",
        ],
        codeExample: {
          label: "Razz: lowest hand wins (A-5 lowball)",
          code: `  THE NUTS (the WHEEL):  A-2-3-4-5
    (straights & flushes DON'T count; ace is low)

  RANK A LOW BY ITS HIGHEST CARD, top-down:
    6-4-3-2-A   ("six-low")   BEATS
    7-5-4-2-A   ("seven-low") BEATS
    8-7-6-3-A   ("eight-low")

  PAIRS ARE BAD:  2-2-3-4-5 is much worse (a pair).
  3rd-street bring-in: the HIGHEST up-card (reverse of Stud).`,
        },
      },
      incident: {
        title: "The Upside-Down Game That Humbles Pros",
        when: "Every mixed-game session",
        where: "WSOP Razz events and the HORSE rotation",
        impact: "Razz's reversed logic catches even experienced players who misread which low hand is winning, making it a great equalizer in mixed games",
        body: [
          "Razz has a reputation as a frustrating, humbling game. Players who have spent years training their brains to see high hands suddenly have to value the opposite, and the misreads are common: thinking an eight-low is good when an opponent's board screams a seven, or chasing a low while bricking high card after high card.",
          "That difficulty is exactly why Razz belongs in mixed games:\n- It rewards the disciplined, all-around player and punishes the Hold'em specialist who never learned lowball.\n- It is one of the rotating games in HORSE (the 'R') and a standalone WSOP bracelet event.\n- Mastering Razz means truly internalizing lowball rankings — read top-down, avoid pairs, chase the wheel — which also unlocks the low side of split games like Omaha Hi-Lo.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lowest Hand Wins", sub: "A-5 lowball stud", type: "system" },
          { label: "Straights & Flushes Ignored", sub: "ace always low", type: "attacker" },
          { label: "The Wheel A-2-3-4-5", sub: "the nut low", type: "victim" },
          { label: "Highest Card Brings In", sub: "reverse of Stud", type: "result" },
        ],
      },
      timeline: [
        { year: 1920, event: "Razz emerges as a lowball form of seven-card stud" },
        { year: 1971, event: "Razz becomes an official World Series of Poker event", highlight: true },
        { year: 2002, event: "Razz is included as the 'R' in the HORSE rotation" },
        { year: 2024, event: "Razz remains a standalone WSOP bracelet and mixed-game staple" },
      ],
      keyTakeaways: [
        "Razz is seven-card lowball stud — the lowest hand wins the whole pot",
        "It uses A-to-5 rules: the ace is low and straights and flushes do not count against you",
        "The best hand is the wheel A-2-3-4-5; lows are ranked from the highest card downward and pairs are bad",
        "The highest up-card brings in the betting (the reverse of Seven-Card Stud)",
      ],
      references: [
        { title: "Razz (poker)", url: "https://en.wikipedia.org/wiki/Razz_(poker)" },
        { title: "Lowball (poker) — ace-to-five", url: "https://en.wikipedia.org/wiki/Lowball_(poker)#Ace-to-five_low" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-06-q1", type: "Goal", challenge: "Worst wins.", text: "What is the object of Razz?", options: ["Make the lowest hand — the worst poker hand wins", "Make the highest hand", "Split the pot high and low", "Make a flush"], correctIndex: 0, explanation: "Razz is a lowball stud game; the lowest five-card hand wins the whole pot." },
        { id: "poker-3-06-q2", type: "The Nuts", challenge: "Best low.", text: "What is the best possible hand in Razz?", options: ["A-2-3-4-5, the 'wheel'", "5-6-7-8-9", "A-A-2-3-4", "10-J-Q-K-A"], correctIndex: 0, explanation: "Straights don't count, so A-2-3-4-5 (the wheel) is the nut low." },
        { id: "poker-3-06-q3", type: "Rules", challenge: "What counts.", text: "In Razz, do straights and flushes hurt your low hand?", options: ["No — straights and flushes don't count, and the ace is low", "Yes, both count against you", "Only flushes count", "Only straights count"], correctIndex: 0, explanation: "Under A-to-5 rules, straights and flushes are ignored for the low and the ace plays low." },
        { id: "poker-3-06-q4", type: "Ranking", challenge: "Reading a low.", text: "Which is the better Razz hand: 8-6-4-2-A or 8-7-5-2-A?", options: ["8-6-4-2-A — after the matching 8, the lower second card (6) wins", "8-7-5-2-A", "They tie", "Neither qualifies"], correctIndex: 0, explanation: "Both are eight-low; you compare the next card down — 6 beats 7, so 8-6 wins." },
        { id: "poker-3-06-q5", type: "Bring-In", challenge: "Who starts.", text: "In Razz, which player makes the bring-in on third street?", options: ["The player showing the highest up-card", "The player showing the lowest up-card", "The player to the dealer's left", "Whoever posted the ante last"], correctIndex: 0, explanation: "Because high cards are bad in lowball, the highest up-card brings in — the reverse of Stud." },
      ],
    },
  },

  // ─── poker-3-07: Five-Card Draw & 2-7 Triple Draw ────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The draw table", location: "Home games and the WSOP draw events", era: "Modern", emoji: "🔄" },
    id: "poker-3-07",
    order: 7,
    title: "Five-Card Draw & 2-7 Triple Draw",
    subtitle: "The classic draw game and deuce-to-seven lowball",
    category: "sports",
    xp: 102,
    badge: { id: "poker3-badge-07", name: "Drawing Dead-Eye", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "Draw games are the oldest branch of the family: you get a full hand of hidden cards and improve it by discarding and drawing. Five-Card Draw is the classic; 2-7 Triple Draw is the lowball game pros love, where straights and flushes count AGAINST you and the ace is high.",
      year: 2024,
      overview: [
        "Five-Card Draw is the game most people picture from old movies and kitchen-table poker:\n- Each player is dealt five private cards, all hidden, and there is a betting round.\n- Then comes the 'draw': players may discard any number of cards and receive replacements, after which there is a final betting round and showdown.\n- It is a high game using the standard rankings, but with only one draw and two betting rounds it has the FEWEST decision points of the major variants — which is partly why Hold'em overtook it.",
        "2-7 Triple Draw (Deuce-to-Seven) is the modern, prestigious draw game, and it is lowball with a twist:\n- It uses DEUCE-TO-SEVEN low rules: straights and flushes DO count against you, and the ace is always HIGH (so it is a bad card for a low).\n- That makes the best possible hand 7-5-4-3-2 of mixed suits — the 'number-one' hand — because it is the lowest five cards that form NO straight and NO flush.\n- There are THREE draws (hence 'triple draw') and four betting rounds, giving it far more strategic depth than Five-Card Draw.",
        "The deuce-to-seven low ranking is the opposite of Razz's A-to-5 rules, so keep them straight:\n- In 2-7, an ace is the WORST card (it plays high), and making a straight or flush wrecks your hand — so A-2-3-4-5 is a straight, a terrible hand, not the wheel.\n- The best hand 7-5-4-3-2 must be 'unsuited and ungapped of a straight' — five low cards with no five-in-a-row and no flush.\n- Across three draws, players who started with four or five good low cards refine toward a smooth seven or eight while watching how many cards opponents draw.",
      ],
      technical: {
        title: "Drawing Patterns and Reading the Number of Cards Taken",
        body: [
          "In any draw game, the number of cards an opponent draws is a giant 'tell':\n- Standing PAT (drawing zero) represents a made hand — a strong made low in 2-7, or a made straight/flush/full house in a high game.\n- Drawing ONE card usually means a four-card hand needing to fill (a low draw in 2-7, a flush or straight draw in high draw).\n- Drawing two or three signals a weaker, more speculative hand. Skilled draw players read these patterns across multiple draws and bet accordingly.",
          "2-7 Triple Draw strategy centers on smooth low draws and position:\n- Starting hands are judged by how many low, non-paired, non-straightening cards you hold; '2-3-4-5' is NOT what you want (it makes a straight), whereas '2-3-4-7' drawing to a smooth seven is excellent.\n- Position matters because you act after seeing how many cards opponents drew on each of the three draws, so you can apply pressure or fold with better information.\n- Snowing (bluffing by standing pat with a bad hand to represent a made low) is an advanced weapon, made credible by the multiple draws and betting rounds.",
        ],
        codeExample: {
          label: "Two draw games, two low rules",
          code: `  FIVE-CARD DRAW (HIGH): one draw, two bet rounds
    deal 5 -> bet -> discard/draw -> bet -> showdown

  2-7 TRIPLE DRAW (LOWBALL, deuce-to-seven):
    ace is HIGH; straights AND flushes count AGAINST you
    BEST HAND:  7-5-4-3-2  (no straight, no flush)
    A-2-3-4-5 is a STRAIGHT here  -> a BAD hand!

  contrast: in RAZZ (A-5) the wheel A-2-3-4-5 is the NUTS.
  Three draws + four bet rounds = deep strategy.`,
        },
      },
      incident: {
        title: "From the Saloon Standard to the Pro's Favorite",
        when: "1800s–present",
        where: "The American frontier to the modern WSOP",
        impact: "Five-Card Draw defined frontier poker, then faded; the draw branch survives at the top as 2-7 Triple Draw, a connoisseur's game in mixed rotations",
        body: [
          "Five-Card Draw was the poker of the 19th-century American frontier and the home game of generations — simple to deal and easy to learn. But its shallow structure, with one draw and two betting rounds, gave skilled players fewer chances to outplay opponents, and it was eclipsed first by Stud and later decisively by Hold'em.",
          "The draw family did not die; it evolved upmarket:\n- 2-7 Triple Draw became a respected 'pro's game', valued for its depth and its place in mixed-game rotations and the 8-Game mix.\n- It carries its own WSOP bracelet events and a reputation as a game that rewards patience, reading draws, and disciplined low-hand selection.\n- For a complete player, knowing both the classic high draw and deuce-to-seven lowball rounds out an understanding of the family's oldest branch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hidden Hand + Draw", sub: "discard and replace cards", type: "system" },
          { label: "Five-Card Draw", sub: "classic high, one draw", type: "attacker" },
          { label: "2-7 Lowball", sub: "ace high; straights/flushes bad", type: "victim" },
          { label: "Best = 7-5-4-3-2", sub: "three draws, deep strategy", type: "result" },
        ],
      },
      timeline: [
        { year: 1850, event: "Five-Card Draw becomes the standard game of the American frontier" },
        { year: 1900, event: "Stud begins overtaking Draw as the dominant form" },
        { year: 2004, event: "2-7 Triple Draw gains its own WSOP bracelet event", highlight: true },
        { year: 2024, event: "Deuce-to-seven Triple Draw is a respected mixed-game and 8-Game format" },
      ],
      keyTakeaways: [
        "Draw games give you a full hidden hand that you improve by discarding and drawing replacements",
        "Five-Card Draw is the classic high game but has the fewest betting rounds, which is why newer games overtook it",
        "2-7 Triple Draw is deuce-to-seven lowball: the ace is high and straights and flushes count against you",
        "The best 2-7 hand is 7-5-4-3-2 (no straight, no flush) — the opposite of Razz's A-to-5 wheel",
      ],
      references: [
        { title: "Five-card draw", url: "https://en.wikipedia.org/wiki/Five-card_draw" },
        { title: "Deuce to seven lowball (Kansas City)", url: "https://en.wikipedia.org/wiki/Lowball_(poker)#Deuce_to_seven_low" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-07-q1", type: "Draw Games", challenge: "How they work.", text: "What defines a draw game like Five-Card Draw?", options: ["You get a full hidden hand and improve it by discarding and drawing replacements", "You share community cards with the table", "You get only up-cards", "You never see your own cards"], correctIndex: 0, explanation: "Draw games let you exchange cards from a fully hidden hand to improve it." },
        { id: "poker-3-07-q2", type: "2-7 Rules", challenge: "Ace's role.", text: "In 2-7 (deuce-to-seven) lowball, how does the ace rank?", options: ["The ace is always high, making it a bad card for a low", "The ace is always low", "The ace can be high or low", "Aces are wild"], correctIndex: 0, explanation: "Deuce-to-seven plays the ace high, so it is the worst card for making a low." },
        { id: "poker-3-07-q3", type: "Best Hand", challenge: "The number one.", text: "What is the best possible hand in 2-7 lowball?", options: ["7-5-4-3-2 with no flush (no straight, no flush)", "A-2-3-4-5", "2-3-4-5-6", "5-4-3-2-A"], correctIndex: 0, explanation: "Because straights and flushes count against you, 7-5-4-3-2 unsuited is the nut low." },
        { id: "poker-3-07-q4", type: "Contrast", challenge: "A-5 vs 2-7.", text: "Why is A-2-3-4-5 a great hand in Razz but a bad hand in 2-7 Triple Draw?", options: ["In 2-7 it forms a straight (which counts against you); in Razz straights don't count", "It is a flush in 2-7", "Aces are wild in Razz", "There is no difference"], correctIndex: 0, explanation: "2-7 penalizes straights and flushes, so A-2-3-4-5 is just a straight; Razz ignores them, making it the wheel." },
        { id: "poker-3-07-q5", type: "Tells", challenge: "Reading the draw.", text: "What does an opponent 'standing pat' (drawing zero cards) usually represent?", options: ["A made hand they don't want to change", "A weak, speculative hand", "That they have folded", "A request for more cards"], correctIndex: 0, explanation: "Standing pat signals a complete hand — a made low in 2-7 or a made high hand in draw poker." },
      ],
    },
  },

  // ─── poker-3-08: Badugi & Other Draw Games ───────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The Badugi table", location: "Mixed-game and online lowball rooms", era: "Modern", emoji: "🟦" },
    id: "poker-3-08",
    order: 8,
    title: "Badugi & Other Draw Games",
    subtitle: "Four-card lowball needing four different ranks and four different suits",
    category: "sports",
    xp: 102,
    badge: { id: "poker3-badge-08", name: "Badugi Builder", emoji: "🟦" },
    challengeType: "quiz",
    info: {
      tagline: "Badugi is a draw game unlike any other: hands are only FOUR cards, and the best hand needs four different ranks AND four different suits — a 'badugi'. Its strange logic makes it a favorite oddity in mixed games and a real test of lowball thinking.",
      year: 2024,
      overview: [
        "Badugi is a four-card triple-draw lowball game with its own unique hand structure:\n- Each player is dealt FOUR cards (not five), and there are three draws with four betting rounds, like 2-7 Triple Draw.\n- The goal is the lowest hand, but a hand is built only from cards of DIFFERENT ranks and DIFFERENT suits — any card that pairs a rank or matches a suit you already have is ignored.\n- A complete four-card hand with four different ranks and four different suits is called a 'badugi', and it beats any hand with fewer qualifying cards.",
        "How Badugi hands are counted is the key idea:\n- If two of your cards share a suit or a rank, one of them does not count, so you effectively have a THREE-card hand (a 'three-card badugi'), which loses to any true four-card badugi.\n- Among badugis, you compare the highest card down, just like other lowball: the lower the cards, the better, with the ace counting LOW.\n- The best possible hand is 4-3-2-A, all of different suits — the 'number-one badugi' — the lowest four unpaired, unmatched-suit cards.",
        "Strategy flows from how rare a strong badugi is:\n- A made low badugi (especially an eight or better) is a powerful hand, and a 'pat' badugi that you keep across draws is very strong.\n- Players draw to complete a badugi by swapping the card that pairs a rank or shares a suit, and the number of cards opponents draw is a major tell.\n- Like all draw games, position and reading the draws matter; Badugi rewards patience and a feel for when a 'rough' badugi (with a high card like a nine or ten) is good enough to bet.",
      ],
      technical: {
        title: "Counting a Badugi and Comparing Hands",
        body: [
          "To count any Badugi hand, keep only cards that are unique in BOTH rank and suit:\n- Start from your lowest card and add the next card that introduces a new rank AND a new suit; stop when you can't add more.\n- Example: holding 2-clubs, 3-clubs, 5-hearts, 7-spades, the second club doesn't count (same suit), so your hand is the three-card badugi 7-5-2.\n- A four-card badugi always beats any three-card hand; a three-card badugi always beats any two-card hand, regardless of the ranks involved.",
          "Comparing two badugis follows lowball logic with the ace low:\n- Both four-card badugis? Compare the highest card; the lower one wins, then the next card down, and so on (8-6-3-A beats 8-7-2-A).\n- This places Badugi alongside the other lowball games in the family, but its dual rank-and-suit requirement makes good hands scarcer and the draws more dramatic.\n- Badugi is most often played in mixed-game rotations and is part of expanded mixes, where its oddity tests whether a player can adapt to genuinely different rules rather than memorized lines.",
        ],
        codeExample: {
          label: "Counting a Badugi hand",
          code: `  RULE: keep cards of DIFFERENT rank AND DIFFERENT suit.

  HAND A: 2♣ 3♣ 5♥ 7♠
    -> 3♣ shares a suit with 2♣ -> drop one club
    -> counts as 7-5-2  (a THREE-card badugi)

  HAND B: 4♦ 3♣ 2♥ A♠
    -> all 4 ranks differ, all 4 suits differ
    -> a FOUR-card "badugi": 4-3-2-A  (the BEST hand)

  Any 4-card badugi beats any 3-card hand.
  Among badugis, lowest top-card wins (ace is low).`,
        },
      },
      incident: {
        title: "The Oddball Import That Earned a Bracelet",
        when: "1980s–2010s",
        where: "Asia to North American mixed games and the WSOP",
        impact: "Badugi spread from Asia into online and mixed-game poker, becoming popular enough to earn its own WSOP bracelet and a place in expanded mixes",
        body: [
          "Badugi is widely believed to have originated in Asia and spread through online poker in the 2000s, where its unusual four-card, rank-and-suit logic made it a novel favorite. The name itself is often linked to a Korean word, and the game found a devoted audience among players who enjoyed something genuinely different from Hold'em and Omaha.",
          "Its popularity earned it a permanent seat at poker's table:\n- Badugi gained its own World Series of Poker bracelet event and a regular role in mixed-game rotations and expanded mixes beyond the classic 8-Game.\n- For a student of the family, Badugi is the clearest proof that 'poker' is a design space, not a single game — change the hand structure and a whole new strategy appears.\n- Learning it sharpens lowball thinking and the universal draw-game skill of reading how many cards opponents take.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Four-Card Hands", sub: "triple draw lowball", type: "system" },
          { label: "Different Ranks & Suits", sub: "matched cards don't count", type: "attacker" },
          { label: "A 'Badugi'", sub: "four unique rank+suit cards", type: "victim" },
          { label: "Best = 4-3-2-A", sub: "all different suits", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Badugi is believed to originate and spread in Asia" },
        { year: 2005, event: "Online poker popularizes Badugi in the West", highlight: true },
        { year: 2011, event: "Badugi earns its own World Series of Poker bracelet event" },
        { year: 2024, event: "Badugi features in mixed-game and expanded-mix rotations" },
      ],
      keyTakeaways: [
        "Badugi is a four-card triple-draw lowball game with a unique rank-and-suit rule",
        "A 'badugi' has four different ranks AND four different suits; matched cards are ignored",
        "A four-card badugi beats any three-card hand; among badugis the lowest top card wins (ace low)",
        "The best possible hand is 4-3-2-A of four different suits — the number-one badugi",
      ],
      references: [
        { title: "Badugi", url: "https://en.wikipedia.org/wiki/Badugi" },
        { title: "Draw poker", url: "https://en.wikipedia.org/wiki/Draw_poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-08-q1", type: "Hand Size", challenge: "How many cards.", text: "How many cards make up a hand in Badugi?", options: ["Four", "Five", "Seven", "Two"], correctIndex: 0, explanation: "Badugi uses four-card hands, drawn over three draws." },
        { id: "poker-3-08-q2", type: "The Rule", challenge: "What qualifies.", text: "What does a 'badugi' (the best hand type) require?", options: ["Four cards of four different ranks and four different suits", "Four cards of the same suit", "A four-card straight", "Four cards of the same rank"], correctIndex: 0, explanation: "A badugi needs all four cards to differ in both rank and suit." },
        { id: "poker-3-08-q3", type: "Counting", challenge: "Matched cards.", text: "If two of your cards share a suit, what happens?", options: ["One of them doesn't count, leaving you a weaker three-card hand", "You automatically win", "Both count double", "The hand is dead"], correctIndex: 0, explanation: "Cards that match a rank or suit are ignored, reducing a four-card hand to three cards." },
        { id: "poker-3-08-q4", type: "Best Hand", challenge: "Number one.", text: "What is the best possible Badugi hand?", options: ["4-3-2-A of four different suits", "A-A-2-3", "2-3-4-5 of one suit", "K-Q-J-10"], correctIndex: 0, explanation: "4-3-2-A with four different suits is the lowest qualifying four-card badugi." },
        { id: "poker-3-08-q5", type: "Comparison", challenge: "Four beats three.", text: "Does a four-card badugi beat a three-card badugi?", options: ["Yes — any four-card badugi beats any three-card hand", "No, ranks decide it", "Only if it contains an ace", "They always tie"], correctIndex: 0, explanation: "More qualifying cards win: a four-card badugi always beats a three-card hand." },
      ],
    },
  },

  // ─── poker-3-09: Mixed Games — HORSE & 8-Game ────────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The mixed-game table", location: "WSOP $50,000 Players Championship", era: "Modern", emoji: "🐴" },
    id: "poker-3-09",
    order: 9,
    title: "Mixed Games — HORSE & 8-Game",
    subtitle: "Rotating formats and why all-around skill wins the biggest titles",
    category: "sports",
    xp: 106,
    badge: { id: "poker3-badge-09", name: "All-Arounder", emoji: "🐴" },
    challengeType: "quiz",
    info: {
      tagline: "Mixed games rotate through several variants at the same table, so no single specialty can carry you. HORSE and the 8-Game are the famous mixes — and the WSOP's $50,000 Players Championship uses them to crown the most complete player in poker.",
      year: 2024,
      overview: [
        "A mixed game cycles through different poker variants on a fixed rotation, usually changing games every orbit or after a set number of hands. The most famous mix is HORSE, an acronym for five games:\n- H — Hold'em (fixed-limit)\n- O — Omaha Hi-Lo (eight-or-better)\n- R — Razz\n- S — Seven-Card Stud\n- E — Eight-or-better (Seven-Card Stud Hi-Lo). The table plays each game in turn, then loops back to the start.",
        "The 8-Game mix is a broader rotation of eight games, adding draw and no-limit/pot-limit formats to the HORSE core:\n- It typically includes 2-7 Triple Draw, Limit Hold'em, Omaha Hi-Lo, Razz, Seven-Card Stud, Stud Hi-Lo, No-Limit Hold'em, and Pot-Limit Omaha.\n- Because it spans draw, stud, and community games across high, lowball, and split formats, the 8-Game is the closest thing poker has to an all-around decathlon.\n- Most mixed games are played fixed-limit (with the no-limit/pot-limit rounds as exceptions), which keeps the variance manageable across so many formats.",
        "The reason elite poker loves mixed games is simple — they reward COMPLETE skill:\n- A Hold'em specialist has nowhere to hide when the rotation reaches Razz or Triple Draw, so the player who is merely good at everything beats the player who is great at one thing.\n- Adapting your strategy as the game changes — switching between high and low logic, board and up-card reading, drawing decisions — is itself a high-level skill.\n- This is why the most prestigious 'best all-around player' titles are decided in mixed formats rather than No-Limit Hold'em.",
      ],
      technical: {
        title: "The $50,000 Players Championship and Switching Gears",
        body: [
          "The WSOP $50,000 Poker Players Championship is the showcase event for mixed-game mastery:\n- It began in 2006 as a $50,000 HORSE event, explicitly designed to crown the best all-around player rather than the best No-Limit Hold'em tournament player.\n- It later expanded to an 8-Game (and broader) format and is widely regarded as the most prestigious title outside the Main Event, with a trophy named for the late poker great Chip Reese, its first champion.\n- Its high buy-in and demanding rotation attract the deepest field of well-rounded professionals in the game.",
          "Playing a mix well is about disciplined gear-changing:\n- You must instantly reset your sense of hand strength as the game rotates — top pair matters in Limit Hold'em, the nuts matter in PLO, the wheel matters in Razz, a smooth seven matters in 2-7.\n- Because most rounds are fixed-limit, small edges and patience compound, and avoiding big mistakes in your WEAKEST game often matters more than brilliance in your best.\n- The path to mixed-game competence is exactly this epoch: learn each variant well enough to avoid disasters, then practice switching between them fluidly.",
        ],
        codeExample: {
          label: "HORSE and the 8-Game rotation",
          code: `  H O R S E  (each game one orbit, then repeat):
    H = Limit Hold'em
    O = Omaha Hi-Lo (8-or-better)
    R = Razz
    S = Seven-Card Stud
    E = stud Eight-or-better (Stud Hi-Lo)

  THE 8-GAME adds draw + big-bet rounds:
    2-7 Triple Draw, Limit Hold'em, Omaha Hi-Lo,
    Razz, Stud, Stud Hi-Lo, No-Limit Hold'em, PLO

  WSOP $50,000 PLAYERS CHAMPIONSHIP = the all-around crown.`,
        },
      },
      incident: {
        title: "The $50,000 Event Built to Find the Best All-Around Player",
        when: "2006–present",
        where: "World Series of Poker, Las Vegas",
        impact: "The $50,000 HORSE / Players Championship was created specifically to reward complete poker skill, becoming the most coveted title after the Main Event",
        body: [
          "In 2006 the WSOP introduced a $50,000 HORSE event with a deliberate goal: to crown the best ALL-AROUND poker player, not simply the best at No-Limit Hold'em tournaments. The legendary Chip Reese won that first edition, and after his death the championship trophy was named in his honor — a fitting tribute to a player revered for mastery across every game.",
          "The event grew into the modern $50,000 Poker Players Championship:\n- Its format expanded to an 8-Game (and broader) rotation, deepening the demand for all-around skill.\n- It draws the most respected professionals in the world and is widely considered the connoisseur's championship of poker.\n- Its very existence is the strongest argument for this epoch: the people who play poker for a living treat 'beyond Hold'em' mastery as the true measure of greatness.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Rotating Games", sub: "the table changes formats", type: "system" },
          { label: "HORSE", sub: "Hold'em, O8, Razz, Stud, Stud-8", type: "attacker" },
          { label: "The 8-Game", sub: "adds draw + big-bet rounds", type: "victim" },
          { label: "All-Around Crown", sub: "$50k Players Championship", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "HORSE rotations spread among high-stakes mixed-game players" },
        { year: 2006, event: "WSOP launches the $50,000 HORSE event; Chip Reese wins", highlight: true },
        { year: 2010, event: "The event becomes the $50,000 Poker Players Championship (8-Game era)" },
        { year: 2024, event: "The Players Championship is poker's premier all-around title" },
      ],
      keyTakeaways: [
        "Mixed games rotate through several variants, so no single specialty can carry a player",
        "HORSE = Hold'em, Omaha Hi-Lo, Razz, Seven-Card Stud, and Stud Eight-or-better",
        "The 8-Game adds draw and big-bet formats, spanning draw, stud, and community games across high, low, and split",
        "The WSOP $50,000 Players Championship uses these mixes to crown the most complete player in poker",
      ],
      references: [
        { title: "HORSE (poker)", url: "https://en.wikipedia.org/wiki/HORSE_(poker)" },
        { title: "Poker Players Championship", url: "https://en.wikipedia.org/wiki/Poker_Players_Championship" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-09-q1", type: "HORSE", challenge: "Spell it out.", text: "What five games make up HORSE?", options: ["Hold'em, Omaha Hi-Lo, Razz, Seven-Card Stud, Stud Eight-or-better", "Hold'em, Omaha, Razz, Stud, Five-Card Draw", "Hold'em, Omaha, Roulette, Stud, Euchre", "High draw, Omaha, Razz, Stud, Eight-ball"], correctIndex: 0, explanation: "HORSE = Hold'em, Omaha Hi-Lo, Razz, Seven-Card Stud, and Stud Eight-or-better." },
        { id: "poker-3-09-q2", type: "Mixed Games", challenge: "Why rotate.", text: "Why do mixed games reward all-around skill?", options: ["The rotation reaches games where a single-game specialist has no edge", "They are always no-limit", "They use two decks", "They have no betting"], correctIndex: 0, explanation: "Rotating formats expose any one-game specialist when the game switches to their weak spots." },
        { id: "poker-3-09-q3", type: "8-Game", challenge: "What it adds.", text: "How does the 8-Game mix differ from HORSE?", options: ["It adds draw games (like 2-7 Triple Draw) and big-bet rounds (NLHE, PLO)", "It removes Razz", "It is only Hold'em", "It has four games instead of five"], correctIndex: 0, explanation: "The 8-Game broadens the mix with draw and no-limit/pot-limit formats beyond HORSE's five." },
        { id: "poker-3-09-q4", type: "The Championship", challenge: "The big title.", text: "Which prestigious WSOP event uses mixed games to crown the best all-around player?", options: ["The $50,000 Poker Players Championship", "The Main Event", "The Ladies Event", "The Colossus"], correctIndex: 0, explanation: "The $50,000 Players Championship (originally HORSE) is the all-around mixed-game crown." },
        { id: "poker-3-09-q5", type: "Skill", challenge: "Changing gears.", text: "What is the defining skill of a strong mixed-game player?", options: ["Instantly resetting their sense of hand strength as the game rotates", "Memorizing one optimal Hold'em line", "Only playing the no-limit rounds", "Never folding"], correctIndex: 0, explanation: "Adapting strategy and hand values as formats change is the core mixed-game skill." },
      ],
    },
  },

  // ─── poker-3-10: Choosing & Mastering a Variant ──────────────────────────────
  {
    epochId: "poker-3",
    wonder: { name: "The complete player", location: "Wherever the game is dealt", era: "Modern", emoji: "🏆" },
    id: "poker-3-10",
    order: 10,
    title: "Choosing & Mastering a Variant",
    subtitle: "Game selection, transferable skills, variance, and why pros play mixed",
    category: "sports",
    xp: 110,
    badge: { id: "poker3-badge-10", name: "Complete Player", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "You don't have to master every game — but knowing the family makes you a better, more profitable player. This stage is about choosing a variant to focus on, carrying skills between games, respecting each game's variance, and why the best pros deliberately play many.",
      year: 2024,
      overview: [
        "The single most underrated skill in poker is GAME SELECTION — choosing what to play and against whom:\n- Pick a variant that suits your temperament: Hold'em for clean strategic depth, PLO for action and big draws, Stud and lowball for memory and patience, mixed games for variety.\n- Just as important is choosing soft games: the easiest money in poker comes from sitting in a game where you have an edge, not from out-grinding experts in a tough one.\n- Many newer variants have smaller player pools and weaker fields, so a Hold'em grinder can sometimes profit more by branching into Omaha or a mixed game.",
        "Skills transfer between games far more than beginners realize:\n- The CORE FUNDAMENTALS are universal — position, pot odds and equity, hand reading, bet sizing, bluffing logic, bankroll discipline, and the mental game carry into every variant.\n- The hand-ranking ladder and the idea of relative strength apply across the whole high side of the family; lowball games just teach you to think in reverse.\n- Learning a second game deepens your first: studying PLO draws sharpens your equity sense in Hold'em, and learning lowball teaches you to read 'the other half' of split games.",
        "Different games carry different VARIANCE and bankroll needs, which should shape your choices:\n- PLO and other big-draw games swing much harder than Hold'em — close all-ins mean wilder short-term results, so they require a bigger bankroll for the same stakes.\n- Fixed-limit stud and draw games are lower-variance but grind slowly, rewarding patience over big scores.\n- The pros' answer to all of this is to play MANY games: mixed games smooth out variance, keep edges fresh against specialists, and make a player resilient when one game's pool dries up or gets tough.",
      ],
      technical: {
        title: "A Practical Path to Mastering a New Game",
        body: [
          "A reliable way to add a variant follows the same steps you've used in this epoch:\n- LEARN THE RULES COLD first — especially the scoring quirks (the two-and-three rule, eight-or-better lows, deuce-to-seven vs ace-to-five, the badugi count) that cause the costliest beginner mistakes.\n- START SMALL and low-stakes while your reads are unreliable; expect to misjudge hand strength at first, the way Hold'em players do when they first play PLO or Razz.\n- TRANSFER the fundamentals consciously: ask how position, pot odds, and hand reading apply in the new game rather than memorizing rote lines.",
          "From competence to mastery is about study and deliberate variety:\n- Review your hands, focus on one leak at a time, and pay special attention to your WEAKEST game if you play mixed — disasters there cost more than brilliance elsewhere.\n- Respect bankroll and variance: size your stakes to the swings of the specific game, with extra cushion for high-variance formats like PLO.\n- The endpoint is the 'complete player' the WSOP $50,000 Players Championship is built to find — someone who can sit in any game in the family, read it quickly, and play it well. That is the destination this whole epoch points toward.",
        ],
        codeExample: {
          label: "A path to a new variant",
          code: `  1) LEARN THE RULES COLD
       focus on scoring quirks:
       - Omaha: exactly 2 + 3
       - O8 / Stud-8: eight-or-better low
       - 2-7 vs Razz: opposite low rules
       - Badugi: 4 ranks AND 4 suits

  2) START LOW-STAKES (your reads will be off at first)
  3) TRANSFER fundamentals: position, odds, hand reading
  4) STUDY one leak at a time; mind your WEAKEST game
  5) SIZE bankroll to the game's variance (PLO swings hard)

  GOAL: the complete, all-around player.`,
        },
      },
      incident: {
        title: "Why the Greats Refuse to Play Just One Game",
        when: "Across poker history",
        where: "From the Texas road gamblers to today's high-stakes pros",
        impact: "The most respected players in history have been all-around mixed-game masters, not single-game specialists — proof that breadth is a real edge",
        body: [
          "The players other professionals revere most — figures like Chip Reese, and the all-around champions of the modern era — built their reputations on excellence across many games, not a single specialty. The original Texan road gamblers who brought Hold'em to Vegas were themselves all-around players who could beat any game on offer.",
          "The lesson is consistent across eras:\n- Specializing in one game can be very profitable, but breadth provides resilience, fresh edges, and access to the softest games wherever they appear.\n- Variety also keeps the mind sharp and protects against the day your one game gets solved or its player pool dries up.\n- Whether you ultimately focus on one variant or chase the all-around crown, understanding the whole family — the goal of this epoch — makes you a more dangerous and adaptable player at any table.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Game Selection", sub: "pick the game and the table", type: "system" },
          { label: "Transferable Skills", sub: "position, odds, hand reading", type: "attacker" },
          { label: "Variance & Bankroll", sub: "PLO swings hardest", type: "victim" },
          { label: "Play Many Games", sub: "the complete player", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "All-around road gamblers dominate the early Las Vegas scene" },
        { year: 2006, event: "The $50,000 HORSE event formalizes 'best all-around player'", highlight: true },
        { year: 2015, event: "Solvers toughen single games, pushing pros toward mixed formats" },
        { year: 2024, event: "Breadth across the family is a recognized professional edge" },
      ],
      keyTakeaways: [
        "Game selection — choosing the right variant and a soft table — is one of poker's most underrated skills",
        "Core fundamentals (position, pot odds, hand reading, bet sizing, bankroll) transfer across every variant",
        "Different games carry different variance: PLO swings hardest and needs a bigger bankroll than Hold'em",
        "Pros deliberately play many games for resilience, fresh edges, and softer fields — the complete-player ideal",
      ],
      references: [
        { title: "Poker strategy — game selection", url: "https://en.wikipedia.org/wiki/Poker_strategy" },
        { title: "Bankroll (gambling) and variance", url: "https://en.wikipedia.org/wiki/Poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-3-10-q1", type: "Game Selection", challenge: "The underrated edge.", text: "Why is 'game selection' such an important skill?", options: ["The easiest profit comes from playing games and tables where you have an edge", "It guarantees you win every hand", "It removes all variance", "It only matters in Hold'em"], correctIndex: 0, explanation: "Choosing soft games and suitable variants is often more profitable than out-playing experts in tough ones." },
        { id: "poker-3-10-q2", type: "Transfer", challenge: "What carries over.", text: "Which skills transfer across nearly all poker variants?", options: ["Position, pot odds/equity, hand reading, bet sizing, and bankroll discipline", "Only memorized Hold'em starting-hand charts", "Nothing transfers between games", "Only the rules of Razz"], correctIndex: 0, explanation: "The core fundamentals are universal; only the specific scoring rules change between games." },
        { id: "poker-3-10-q3", type: "Variance", challenge: "Biggest swings.", text: "Which game generally has the highest variance and needs a larger bankroll?", options: ["Pot-Limit Omaha, because close all-ins swing results hard", "Fixed-limit Seven-Card Stud", "Fixed-limit Razz", "Five-Card Draw"], correctIndex: 0, explanation: "PLO's frequent close equities make it swing much harder than limit games, demanding more bankroll." },
        { id: "poker-3-10-q4", type: "Mastery", challenge: "First step.", text: "What is the most important first step when learning a new variant?", options: ["Learn the rules cold, especially the scoring quirks that cause big mistakes", "Immediately play the highest stakes", "Ignore the fundamentals you already know", "Only play it once"], correctIndex: 0, explanation: "Rules quirks (two-and-three, eight-or-better, 2-7 vs A-5, the badugi count) cause the costliest errors." },
        { id: "poker-3-10-q5", type: "Why Pros Mix", challenge: "Breadth as edge.", text: "Why do top professionals deliberately play many different games?", options: ["For resilience, fresh edges, softer fields, and to smooth out variance", "Because one-game play is illegal", "To avoid ever winning", "Because mixed games have no skill"], correctIndex: 0, explanation: "Breadth keeps edges fresh, finds softer spots, and smooths variance — the all-around-player advantage." },
      ],
    },
  },
];
