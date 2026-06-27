import type { StageConfig, EpochConfig } from "./types";

export const bridge1Epoch: EpochConfig = {
  id: "bridge-1",
  name: "Bridge",
  subtitle: "From the auction to the last trick — learn the world's deepest partnership card game",
  description:
    "Contract Bridge — the four-player partnership card game played in clubs, online, and at world championships — taught from the ground up. This epoch builds you from a complete beginner into a thinking player: what bridge is and how a deal works, tricks and trumps and the famous 'dummy', counting your hand with high-card points, the language of the auction, opening and responding to find a fit, planning the play as declarer, the finesse and other card techniques, defense and opening leads, and the scoring and the wider bridge world of duplicate tournaments, conventions, and masterpoints. A game of logic, memory, arithmetic, and partnership communication — widely regarded as the most skillful card game ever devised.",
  emoji: "♣️",
  color: "blue",
  unlocked: true,
};

export const bridge1Stages: StageConfig[] = [
  // ─── bridge-1-01: What Is Bridge ─────────────────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The bridge table", location: "Clubs, tournaments, and online tables", era: "Modern", emoji: "♣️" },
    id: "bridge-1-01",
    order: 1,
    title: "What Is Bridge",
    subtitle: "Four players, two partnerships, two phases — the auction and the play",
    category: "sports",
    xp: 88,
    badge: { id: "bridge-badge-01", name: "Pulled Up a Chair", emoji: "♣️" },
    challengeType: "quiz",
    info: {
      tagline: "Two phases, one goal: bid for a contract, then play the cards to fulfill it. Contract Bridge is a four-player partnership game widely considered the deepest card game in the world — a contest of logic, memory, arithmetic, and silent communication with your partner.",
      year: 2024,
      overview: [
        "Bridge is a trick-taking card game for four players, who form two partnerships sitting opposite each other — by convention called North-South and East-West. A standard 52-card deck is dealt out completely, 13 cards to each player. Unlike poker, bridge is not a gambling free-for-all but a partnership game: you and your partner work together, against the other two, and the cards you and your partner hold combine into a single team effort.",
        "Every deal has two distinct phases:\n- THE AUCTION (bidding) — partners exchange coded bids to describe their hands and agree how many tricks they will try to win and whether there is a trump suit. The final bid becomes 'the contract'.\n- THE PLAY — the cards are played out one trick at a time, and the declaring side tries to win at least as many tricks as their contract promised while the defenders try to stop them.",
        "A few features explain why bridge is so respected:\n- IT IS A PARTNERSHIP GAME — you cannot talk to your partner except through legal bids and plays, so communication is a skill in itself.\n- IT REWARDS SKILL OVER LUCK — in duplicate bridge the same deals are replayed at many tables, so good results come from playing a hand better than your rivals, not from being dealt good cards.\n- IT IS DEEP — the bidding alone is a rich coded language, and the play involves counting, inference, and technique that take a lifetime to master.",
      ],
      technical: {
        title: "Whist, Vanderbilt, and the Governing Bodies",
        body: [
          "Bridge grew out of older trick-taking games:\n- WHIST, a popular English trick-taking game, was the ancestor; in the late 1800s it evolved into 'Bridge Whist' and then 'Auction Bridge', which added competitive bidding.\n- In 1925, the American railroad heir Harold Vanderbilt devised a new scoring scheme in which only tricks you actually BID AND MADE counted toward game — creating modern 'Contract Bridge'.\n- Vanderbilt's scoring rewarded accurate bidding and quickly swept away Auction Bridge; it is essentially the game still played today.",
          "Bridge is a governed, organized sport:\n- The WORLD BRIDGE FEDERATION (WBF) runs world championships and recognizes bridge as a 'mind sport'.\n- In the United States, the AMERICAN CONTRACT BRIDGE LEAGUE (ACBL) sanctions tournaments, sets the rules of play in North America, and awards 'masterpoints' for success.\n- Millions play socially at home and in clubs, while a competitive circuit crowns world champions every year.",
        ],
        codeExample: {
          label: "The bridge table and the two phases",
          code: `        NORTH
          |
   WEST --+-- EAST       N-S vs E-W (partners sit opposite)
          |
        SOUTH

  PHASE 1 - THE AUCTION (bidding):
    players bid in turn to set the CONTRACT
    e.g.  N-S agree to "4 Hearts"  (win 10 tricks, hearts trump)

  PHASE 2 - THE PLAY:
    13 tricks are played out
    declaring side tries to MAKE the contract`,
        },
      },
      incident: {
        title: "How a Card Game Became a Worldwide Sport",
        when: "1890s–1930s",
        where: "England and the United States",
        impact: "A parlor descendant of Whist became, within a few decades, an organized mind sport with world championships and millions of players",
        body: [
          "In the late nineteenth century the fashionable card game was Whist, but it had no bidding. 'Bridge Whist' and then 'Auction Bridge' added an auction, letting players compete to name the trump suit. The game caught on quickly among the wealthy on both sides of the Atlantic, but its scoring still rewarded simply winning tricks rather than predicting them.",
          "The turning point came in 1925:\n- Harold Vanderbilt, sailing on a steamship, refined a scoring system in which a side scored toward 'game' only for tricks they had contracted to win — punishing overbidding and underbidding alike.\n- The new 'Contract Bridge' was an instant sensation; within a few years it had displaced Auction Bridge and become a craze, fueled by celebrity experts and newspaper columns.\n- By the 1930s organized bodies were running tournaments, and the game has been a governed international mind sport ever since.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal 13 Cards Each", sub: "52-card deck, four players", type: "system" },
          { label: "The Auction", sub: "bid for a contract", type: "attacker" },
          { label: "The Play", sub: "13 tricks played out", type: "victim" },
          { label: "Make or Defeat", sub: "declarer vs defenders", type: "result" },
        ],
      },
      timeline: [
        { year: 1890, event: "Bridge Whist evolves from the older game of Whist" },
        { year: 1904, event: "Auction Bridge adds competitive bidding for the trump suit" },
        { year: 1925, event: "Harold Vanderbilt devises modern Contract Bridge scoring", highlight: true },
        { year: 1958, event: "The World Bridge Federation is founded to govern world play" },
      ],
      keyTakeaways: [
        "Bridge is a four-player partnership trick-taking game; partners sit opposite each other",
        "Each deal has two phases: the auction (bidding) and then the play of 13 tricks",
        "Modern Contract Bridge scoring was devised by Harold Vanderbilt in 1925, evolving from Whist and Auction Bridge",
        "Bridge is governed by the World Bridge Federation and, in the US, by the ACBL — a recognized mind sport",
      ],
      references: [
        { title: "Contract bridge — overview", url: "https://en.wikipedia.org/wiki/Contract_bridge" },
        { title: "American Contract Bridge League", url: "https://en.wikipedia.org/wiki/American_Contract_Bridge_League" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-01-q1", type: "Core Idea", challenge: "How many play.", text: "How many players are in a game of bridge, and how are they arranged?", options: ["Four players in two partnerships, partners sitting opposite each other", "Two players head to head", "Six players in three teams", "Four players, each for themselves"], correctIndex: 0, explanation: "Bridge is a partnership game for four: two partnerships (e.g., North-South vs East-West) sitting opposite their partner." },
        { id: "bridge-1-01-q2", type: "Structure", challenge: "The two phases.", text: "What are the two phases of a bridge deal?", options: ["The auction (bidding), then the play of the cards", "The shuffle, then the cut", "Betting, then a showdown", "Drawing cards, then discarding"], correctIndex: 0, explanation: "First players bid in the auction to set the contract, then the 13 tricks are played out." },
        { id: "bridge-1-01-q3", type: "History", challenge: "Who codified it.", text: "Who devised modern Contract Bridge scoring in 1925?", options: ["Harold Vanderbilt", "Ely Culbertson", "Charles Goren", "Edmond Hoyle"], correctIndex: 0, explanation: "Harold Vanderbilt's 1925 scoring scheme — counting only bid-and-made tricks toward game — created Contract Bridge." },
        { id: "bridge-1-01-q4", type: "Ancestry", challenge: "Where it came from.", text: "Bridge evolved most directly from which older card game?", options: ["Whist (via Bridge Whist and Auction Bridge)", "Poker", "Blackjack", "Solitaire"], correctIndex: 0, explanation: "Bridge descended from Whist, passing through Bridge Whist and Auction Bridge before Vanderbilt's Contract scoring." },
        { id: "bridge-1-01-q5", type: "Governance", challenge: "Who runs it.", text: "Which body governs bridge in the United States?", options: ["The American Contract Bridge League (ACBL)", "The NCAA", "FIFA", "The World Series of Poker"], correctIndex: 0, explanation: "The ACBL sanctions North American tournaments and awards masterpoints; the WBF governs world play." },
      ],
    },
  },

  // ─── bridge-1-02: Tricks, Trump & the Dummy ──────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The trick and the dummy", location: "The center of the table", era: "Modern", emoji: "🂡" },
    id: "bridge-1-02",
    order: 2,
    title: "Tricks, Trump & the Dummy",
    subtitle: "How cards are played, what 'trump' means, and the face-up hand",
    category: "sports",
    xp: 90,
    badge: { id: "bridge-badge-02", name: "Took a Trick", emoji: "🂡" },
    challengeType: "quiz",
    info: {
      tagline: "Bridge is won one trick at a time. Learn how tricks are taken, why a 'trump' suit is so powerful, and the feature unique to bridge — the dummy, where one player's hand is laid face-up and played by the other.",
      year: 2024,
      overview: [
        "The play happens in 13 'tricks'. A trick is one card contributed by each of the four players in clockwise turn. The basic rules of trick-taking are simple:\n- FOLLOW SUIT — you must play a card of the suit that was led if you have one.\n- HIGHEST CARD WINS — the highest card of the led suit wins the trick, unless someone plays a trump.\n- THE WINNER LEADS NEXT — whoever wins a trick leads the first card to the next trick.",
        "A contract sets either a trump suit or 'notrump':\n- A TRUMP SUIT is a master suit: any card of the trump suit beats any card of the other three suits. So if hearts are trump and you cannot follow the suit led, you may 'ruff' (play a trump) and win the trick with even a low heart.\n- NOTRUMP means there is no trump suit, so the highest card of the led suit always wins — pure high-card play.\n- Choosing the trump suit (or notrump) is one of the main goals of the auction.",
        "Bridge has a feature found in no other major card game — the DUMMY:\n- After the opening lead, the partner of the 'declarer' lays their entire hand FACE-UP on the table for everyone to see.\n- The DECLARER then plays BOTH hands — their own and the dummy's — choosing cards for both sides of the partnership.\n- The dummy's owner takes no further part in the play; they simply watch. This turns the play into a kind of double-handed puzzle for the declarer and a two-against-one battle for the defenders.",
      ],
      technical: {
        title: "Declarer, Dummy, and the Order of Play",
        body: [
          "Three roles are set the moment the auction ends:\n- The DECLARER is the player who first named the suit (or notrump) of the final contract for their side; they will try to fulfill it.\n- The DUMMY is the declarer's partner, whose cards go face-up and are played by the declarer.\n- The DEFENDERS are the other two players, working as a partnership to defeat the contract.",
          "The order of play each deal is fixed:\n- The defender to the declarer's LEFT makes the OPENING LEAD (the first card), face-down then face-up, before dummy appears.\n- Then the dummy is tabled, and play proceeds clockwise, a card from each hand, until all 13 tricks are played.\n- Because the declarer sees 26 cards (their hand plus dummy) while each defender sees only their own 13 plus dummy, declarer has an information edge — but the defenders have the advantage of leading first and signaling to each other.",
        ],
        codeExample: {
          label: "One trick, with hearts as trump",
          code: `  SPADES LED. Trump suit = HEARTS.

    West leads:  S-K   (king of spades)
    North plays: S-3
    East plays:  S-A   (ace of spades - higher!)
    South plays: H-2   (a trump - cannot follow spades)

  WHO WINS? South's H-2.
    A trump beats any card of another suit,
    so the lowly 2 of hearts captures the trick.

  THE DUMMY: declarer's partner lays all 13 cards
    face-up; declarer plays both hands.`,
        },
      },
      incident: {
        title: "The Dummy: Bridge's Signature Invention",
        when: "Late 1800s",
        where: "From Whist to Bridge",
        impact: "Adding a face-up 'dummy' hand transformed a hidden-card game into a problem of pure technique and made world-class declarer play possible",
        body: [
          "Whist, bridge's ancestor, was played with all four hands hidden. The innovation that made bridge a deeper game was the dummy: exposing one hand face-up so that one player controls 26 cards. The very name 'bridge' is sometimes said to come from the idea of the dummy being a 'bridge' partner, though the true origin of the word is disputed.",
          "The dummy changed the game profoundly:\n- It turned the declarer's job into a solvable puzzle — with 26 cards visible, expert play could be analyzed, taught, and perfected.\n- It created the rich literature of 'card play technique' — finesses, end plays, squeezes — that fills bridge books.\n- For the defenders, it created a fascinating challenge: they can see dummy too, and must combine that knowledge with signals to their partner to find the defense that beats the contract.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead a Card", sub: "follow suit if you can", type: "system" },
          { label: "Trump Beats All", sub: "ruff when void in the suit", type: "attacker" },
          { label: "Dummy Goes Face-Up", sub: "declarer plays both hands", type: "victim" },
          { label: "Highest Wins the Trick", sub: "winner leads next", type: "result" },
        ],
      },
      timeline: [
        { year: 1700, event: "Whist popularizes four-handed trick-taking with hidden hands" },
        { year: 1886, event: "Early 'Biritch' / Bridge introduces an exposed dummy hand", highlight: true },
        { year: 1904, event: "Auction Bridge keeps the dummy and adds bidding" },
        { year: 1925, event: "Contract Bridge inherits the trick, trump, and dummy mechanics" },
      ],
      keyTakeaways: [
        "Play happens in 13 tricks; you must follow the suit led, and the highest card (or a trump) wins",
        "A trump suit beats all other suits; 'notrump' contracts have no trump, so the led suit's highest card wins",
        "The declarer's partner becomes the 'dummy', laying their hand face-up to be played by declarer",
        "Roles each deal: declarer, dummy, and two defenders; the defender to declarer's left makes the opening lead",
      ],
      references: [
        { title: "Contract bridge — the play", url: "https://en.wikipedia.org/wiki/Contract_bridge#Gameplay" },
        { title: "Dummy (cards)", url: "https://en.wikipedia.org/wiki/Dummy_(cards)" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-02-q1", type: "Trick-Taking", challenge: "The basic rule.", text: "When a suit is led, what must you do?", options: ["Follow suit (play that suit) if you have a card in it", "Always play your highest card", "Play any card you like", "Play a trump"], correctIndex: 0, explanation: "You must follow suit if able; only when void in the led suit may you trump or discard." },
        { id: "bridge-1-02-q2", type: "Trump", challenge: "Power of trump.", text: "If hearts are trump and spades are led, can the 2 of hearts win the trick?", options: ["Yes — a trump beats any card of another suit", "No — the 2 is too low", "Only if no aces are played", "Only in notrump"], correctIndex: 0, explanation: "Any trump beats any card of a non-trump suit, so even the 2 of trumps captures the trick." },
        { id: "bridge-1-02-q3", type: "The Dummy", challenge: "Face-up hand.", text: "Who plays the cards from the dummy?", options: ["The declarer (the dummy's partner)", "The dummy player themselves", "The defenders", "Whoever won the last trick"], correctIndex: 0, explanation: "The declarer plays both their own hand and the dummy; the dummy's owner just watches." },
        { id: "bridge-1-02-q4", type: "Notrump", challenge: "No master suit.", text: "In a notrump contract, what wins a trick?", options: ["The highest card of the suit that was led", "Any club, since clubs are lowest", "The first card played", "The dummy's card"], correctIndex: 0, explanation: "With no trump suit, the highest card of the led suit always wins the trick." },
        { id: "bridge-1-02-q5", type: "Opening Lead", challenge: "Who goes first.", text: "Who makes the opening lead to the first trick?", options: ["The defender to the declarer's left", "The declarer", "The dummy", "The dealer"], correctIndex: 0, explanation: "The defender on declarer's left leads first; then dummy is tabled and play proceeds clockwise." },
      ],
    },
  },

  // ─── bridge-1-03: Hand Evaluation — HCP ──────────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The point count", location: "Every player's mental arithmetic", era: "Modern", emoji: "🔢" },
    id: "bridge-1-03",
    order: 3,
    title: "Hand Evaluation — High-Card Points",
    subtitle: "The 4-3-2-1 count, distribution points, and the road to game",
    category: "sports",
    xp: 92,
    badge: { id: "bridge-badge-03", name: "Counts the Points", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "Before you bid a single card, you measure your hand. The 4-3-2-1 high-card point count, plus a little extra for long and short suits, tells you and your partner how much firepower your team has — and roughly 25 to 26 combined points is the magic threshold for 'game'.",
      year: 2024,
      overview: [
        "The standard way to value a hand is the HIGH-CARD POINT (HCP) count, popularized by Milton Work and Charles Goren. You add up:\n- ACE = 4 points\n- KING = 3 points\n- QUEEN = 2 points\n- JACK = 1 point\n- All other cards (the 'spot cards' 2 through 10) are worth zero in this count.",
        "The whole deck contains a fixed amount of high-card strength:\n- There are four aces, four kings, four queens, and four jacks, so the deck holds 4x4 + 4x3 + 4x2 + 4x1 = 40 HCP in total.\n- An AVERAGE hand therefore holds about 40 / 4 = 10 HCP.\n- This fixed total is a powerful tool: if you and dummy show 26 HCP, you know the defenders hold only 14 between them, which guides the whole play.",
        "Raw high cards are not the whole story — SHAPE matters too:\n- LENGTH/DISTRIBUTION POINTS reward long suits and short suits, because long suits provide extra tricks and short suits let you trump.\n- A common method adds points for a long suit (e.g., +1 for each card over four in a suit) or, when supporting partner's trump suit, for shortness (a 'void' = 5, a 'singleton' = 3, a 'doubleton' = 1).\n- Adding HCP and distribution gives your 'total points', the number you use to judge how high to bid.",
      ],
      technical: {
        title: "The Magic Numbers: Game, Part-Score, and Slam",
        body: [
          "Point counts map directly to how high you should contract:\n- About 25 to 26 COMBINED points between the two partners is enough to bid 'game' (3NT, 4 of a major, or 5 of a minor), because that strength typically wins the required nine, ten, or eleven tricks.\n- Fewer than that and you stay in a low 'part-score'; far more, and you reach for 'slam'.\n- Roughly 33 combined points suggests a small slam (12 tricks) and about 37 a grand slam (all 13).",
          "Why the thresholds work:\n- HCP correlate strongly with trick-taking power, so the 25-26 rule of thumb is a reliable guide for beginners.\n- The count is approximate — a hand rich in aces and kings and long suits plays better than its raw points, while one full of unsupported queens and jacks plays worse.\n- Good players adjust: they upgrade aces and long suits and downgrade lone honors, but the 4-3-2-1 count plus the 25/26/33/37 landmarks is the foundation every bidder learns first.",
        ],
        codeExample: {
          label: "Counting a hand",
          code: `  HAND:  S A K 7 4   H Q 9 2   D K J 5   C 8 3

  HIGH-CARD POINTS:
    spade  A = 4 , spade  K = 3
    heart  Q = 2
    diamond K = 3 , diamond J = 1
    -----------------------------------
    TOTAL HCP = 13   (a sound opening hand)

  WHOLE DECK = 40 HCP   (average hand = 10)

  COMBINED-POINT LANDMARKS (you + partner):
    ~25-26 -> bid GAME
    ~33    -> small slam (12 tricks)
    ~37    -> grand slam (all 13)`,
        },
      },
      incident: {
        title: "Goren and the 4-3-2-1 Revolution",
        when: "1940s–1950s",
        where: "The United States",
        impact: "Charles Goren's point-count method made bridge learnable for the masses and became the near-universal language of hand evaluation",
        body: [
          "Early bridge used vaguer 'honor trick' evaluations that were hard for beginners. The 4-3-2-1 high-card scale had been suggested by Milton Work, but it was Charles Goren who, in the 1940s and 1950s, combined it with distribution points into a complete, teachable system and promoted it relentlessly through books and a syndicated column.",
          "The point-count method swept the bridge world:\n- It gave every player a simple, shared yardstick, so partners could communicate strength precisely through their bids.\n- Goren became a household name, and 'Goren points' were synonymous with bridge for a generation.\n- Today nearly every bidding system on earth starts from the same 4-3-2-1 count and the same combined-point landmarks for game and slam — the single most important tool a new player can master.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count A-K-Q-J", sub: "4-3-2-1 high-card points", type: "system" },
          { label: "Add for Shape", sub: "long and short suits", type: "attacker" },
          { label: "40 HCP in the Deck", sub: "average hand = 10", type: "victim" },
          { label: "25-26 = Game", sub: "33 slam, 37 grand", type: "result" },
        ],
      },
      timeline: [
        { year: 1915, event: "Milton Work popularizes the 4-3-2-1 high-card scale" },
        { year: 1949, event: "Charles Goren's point-count system spreads nationwide", highlight: true },
        { year: 1958, event: "Point count becomes the standard worldwide method of evaluation" },
        { year: 2024, event: "The 4-3-2-1 count remains the first thing every beginner learns" },
      ],
      keyTakeaways: [
        "High-card points: Ace=4, King=3, Queen=2, Jack=1 — the 4-3-2-1 count",
        "The whole deck contains exactly 40 HCP, so an average hand holds about 10",
        "Add distribution/length points for long and short suits to get your total points",
        "About 25 to 26 combined points between partners is enough to bid game",
      ],
      references: [
        { title: "Hand evaluation — high card points", url: "https://en.wikipedia.org/wiki/Hand_evaluation" },
        { title: "Milton Work point count", url: "https://en.wikipedia.org/wiki/Milton_Work" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-03-q1", type: "The Count", challenge: "Value an ace.", text: "In the standard high-card point count, how many points is an Ace worth?", options: ["4", "3", "2", "1"], correctIndex: 0, explanation: "The 4-3-2-1 scale: Ace=4, King=3, Queen=2, Jack=1." },
        { id: "bridge-1-03-q2", type: "The Deck", challenge: "Total strength.", text: "How many high-card points are in the entire deck?", options: ["40", "52", "13", "100"], correctIndex: 0, explanation: "Four each of A-K-Q-J at 4-3-2-1 gives 4(4+3+2+1) = 40 HCP." },
        { id: "bridge-1-03-q3", type: "Average", challenge: "A normal hand.", text: "Roughly how many HCP does an average hand contain?", options: ["About 10", "About 20", "About 4", "About 25"], correctIndex: 0, explanation: "40 points divided among four players gives an average of about 10 HCP per hand." },
        { id: "bridge-1-03-q4", type: "Game", challenge: "The magic number.", text: "About how many combined points do the two partners need to bid game?", options: ["About 25 to 26", "About 10", "About 40", "Exactly 33"], correctIndex: 0, explanation: "Roughly 25-26 combined points typically produces enough tricks for game." },
        { id: "bridge-1-03-q5", type: "Shape", challenge: "Beyond high cards.", text: "Why do players add 'distribution points' for long and short suits?", options: ["Long suits make extra tricks and short suits let you trump, adding value", "Because the rules require exactly 13 points", "Short suits are worth high-card points", "Distribution points replace high-card points"], correctIndex: 0, explanation: "Shape matters: long suits provide length tricks and shortness enables ruffing, so both add to a hand's value." },
      ],
    },
  },

  // ─── bridge-1-04: The Auction / Bidding Basics ───────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The auction", location: "The coded conversation", era: "Modern", emoji: "🗣️" },
    id: "bridge-1-04",
    order: 4,
    title: "The Auction — Bidding Basics",
    subtitle: "Levels, strains, pass, double, and the language of the bid",
    category: "sports",
    xp: 95,
    badge: { id: "bridge-badge-04", name: "Opened the Bidding", emoji: "🗣️" },
    challengeType: "quiz",
    info: {
      tagline: "The auction is a coded conversation. Each bid names a level and a strain, and every bid must be higher than the last. Through this restricted language partners describe their hands and settle on the contract they will try to make.",
      year: 2024,
      overview: [
        "A bid has two parts — a LEVEL and a STRAIN:\n- The LEVEL is a number from 1 to 7, and it tells how many tricks ABOVE SIX your side promises to win. So a bid of '1' contracts for 6 + 1 = 7 tricks, and a bid of '7' contracts for all 13.\n- The STRAIN is the proposed trump suit — clubs, diamonds, hearts, or spades — or 'notrump' (NT), meaning no trump suit.\n- So '4 Hearts' means: hearts are trump and we will win at least 10 tricks (6 + 4).",
        "Bids must steadily increase, and the strains have a fixed ranking:\n- From lowest to highest: CLUBS, DIAMONDS, HEARTS, SPADES, then NOTRUMP.\n- Each new bid must be higher than the last, either by raising the level or by naming a higher strain at the same level. So over '1 Heart' you may bid '1 Spade' or '1NT' (higher strains, same level) but '1 Club' would be illegal.\n- The auction continues clockwise until three players pass in succession; the last bid becomes 'the contract'.",
        "Besides naming a contract, a player has three other calls:\n- PASS — make no bid this turn (you can still bid later if the auction comes back around).\n- DOUBLE — used against the opponents, increasing the score they win or lose; it often means 'I think you cannot make this'.\n- REDOUBLE — a reply to a double that raises the stakes further, usually meaning 'we are confident we WILL make it'.\nCrucially, all of this is a CODE: you may not say anything about your hand except through these legal calls, so the auction is how partners exchange information.",
      ],
      technical: {
        title: "Why Bidding Is a Language, Not Just a Price",
        body: [
          "Bridge bidding is unlike an ordinary auction because the goal is communication:\n- Each bid carries an agreed MEANING about your strength and shape, not merely a willingness to 'pay' more.\n- For example, an opening bid of '1 Spade' typically promises a certain point range and at least five spades; partner decodes that and responds to describe their own hand.\n- Over many bids, the partnership narrows down the right level and strain — like two people triangulating an answer using only a small vocabulary.",
          "A few structural points every beginner needs:\n- THE CONTRACT is the final bid before three passes; the side that bid it must try to take that many tricks.\n- A contract you bid and MAKE scores well; one you fail (go 'down') costs you, and the penalty is bigger if doubled.\n- This is exactly Vanderbilt's 1925 insight: because only bid-and-made tricks count toward game, accurate bidding — not wild overbidding — wins, which is why the coded conversation is the heart of the game.",
        ],
        codeExample: {
          label: "Reading a bid and the ranking of strains",
          code: `  A BID = LEVEL + STRAIN

    4 H   ->  level 4, strain Hearts
          ->  contract for 6 + 4 = 10 tricks, hearts trump

  RANKING OF STRAINS (low to high):
    Clubs < Diamonds < Hearts < Spades < NoTrump

  EACH BID MUST BE HIGHER. Over 1 Heart you may bid:
    1 S , 1 NT , 2 C , 2 D ...   (higher strain or level)
    but NOT 1 C or 1 D  (lower at the same level)

  OTHER CALLS:  Pass , Double (X) , Redouble (XX)`,
        },
      },
      incident: {
        title: "The Bidding Wars of Culbertson and Goren",
        when: "1930s–1950s",
        where: "Newspapers, radio, and famous matches",
        impact: "Rival experts turned bidding systems into national news, proving that the auction — not luck — was where bridge was won",
        body: [
          "Once Contract Bridge took off, the question became HOW to bid: what should each call mean? Ely Culbertson built the first famous system and marketed it brilliantly, even staging a heavily publicized 1931-32 'Bridge Battle of the Century' match to prove its superiority. Bidding theory became front-page entertainment.",
          "The systems kept improving:\n- Charles Goren's point-count approach later overtook Culbertson's and became the standard American method.\n- These rivalries showed the public that bridge skill lived largely in the auction — in agreeing precise meanings for bids so partners could find their best contract.\n- Modern systems (Standard American, Acol, 2-over-1) are direct descendants of that era; every one of them is just a richer vocabulary for the same coded conversation you are learning now.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Bid = Level + Strain", sub: "tricks over six, plus suit/NT", type: "system" },
          { label: "Strains Rank", sub: "C < D < H < S < NT", type: "attacker" },
          { label: "Each Bid Goes Higher", sub: "or pass, double, redouble", type: "victim" },
          { label: "Final Bid = Contract", sub: "three passes end it", type: "result" },
        ],
      },
      timeline: [
        { year: 1925, event: "Contract scoring makes accurate bidding the key skill" },
        { year: 1931, event: "Culbertson stages the publicized Bridge Battle of the Century", highlight: true },
        { year: 1949, event: "Goren's point-count bidding becomes the American standard" },
        { year: 2024, event: "Standard American, Acol, and 2-over-1 refine the same coded language" },
      ],
      keyTakeaways: [
        "A bid names a level (1-7, tricks above six) and a strain (clubs, diamonds, hearts, spades, or notrump)",
        "Strains rank clubs < diamonds < hearts < spades < notrump, and every bid must be higher than the last",
        "The final bid before three passes becomes 'the contract'; players may also pass, double, or redouble",
        "Bidding is a coded conversation: partners describe their hands through the agreed meanings of bids",
      ],
      references: [
        { title: "Bridge bidding — overview", url: "https://en.wikipedia.org/wiki/Bidding_(cards)" },
        { title: "Contract bridge — the auction", url: "https://en.wikipedia.org/wiki/Contract_bridge#Auction" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-04-q1", type: "Anatomy", challenge: "What a bid says.", text: "What does a bid of '4 Hearts' mean?", options: ["Hearts are trump and we contract to win 10 tricks (6 + 4)", "We will win exactly 4 tricks", "We hold 4 hearts", "Hearts cannot be trump"], correctIndex: 0, explanation: "The level counts tricks above six, so '4' = 10 tricks, with hearts as the trump suit." },
        { id: "bridge-1-04-q2", type: "Ranking", challenge: "Order of strains.", text: "Which is the correct ranking of strains from lowest to highest?", options: ["Clubs, diamonds, hearts, spades, notrump", "Notrump, spades, hearts, diamonds, clubs", "Hearts, spades, clubs, diamonds, notrump", "Spades, hearts, diamonds, clubs, notrump"], correctIndex: 0, explanation: "Clubs are lowest, then diamonds, hearts, spades, with notrump ranking highest." },
        { id: "bridge-1-04-q3", type: "Legal Bids", challenge: "Can you bid it?", text: "After an opponent bids '1 Heart', which of these is a legal next bid?", options: ["1 Spade", "1 Club", "1 Diamond", "Pass is the only option"], correctIndex: 0, explanation: "Spades outrank hearts, so 1 Spade is legal; 1 Club or 1 Diamond would be lower at the same level." },
        { id: "bridge-1-04-q4", type: "The Contract", challenge: "How it ends.", text: "How is the final contract determined?", options: ["It is the last bid made before three players pass in succession", "It is the first bid of the auction", "It is the highest possible bid, 7NT", "The dealer chooses it"], correctIndex: 0, explanation: "When a bid is followed by three passes, that bid becomes the contract." },
        { id: "bridge-1-04-q5", type: "Other Calls", challenge: "Beyond bidding.", text: "What is the purpose of a 'double'?", options: ["A call against the opponents that increases the score won or lost", "A way to bid two suits at once", "To pass twice", "To name your trump suit"], correctIndex: 0, explanation: "A double raises the stakes on the opponents' contract; redouble responds and raises them further." },
      ],
    },
  },

  // ─── bridge-1-05: Opening Bids ───────────────────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The opening bid", location: "The first word of the auction", era: "Modern", emoji: "🚪" },
    id: "bridge-1-05",
    order: 5,
    title: "Opening Bids",
    subtitle: "Opening one of a suit, the 1NT opener, five-card majors, and preempts",
    category: "sports",
    xp: 98,
    badge: { id: "bridge-badge-05", name: "Made the First Bid", emoji: "🚪" },
    challengeType: "quiz",
    info: {
      tagline: "The opening bid is the first word of the conversation, and it tells your partner a great deal at once. Learn the everyday openings of Standard American: one of a suit, the descriptive 1NT, and the disruptive preempt.",
      year: 2024,
      overview: [
        "With a normal, balanced-to-strong hand of about 12 to 21 points, you usually OPEN ONE OF A SUIT:\n- You generally open your LONGEST suit first.\n- In the popular 'Standard American' / 'five-card majors' style, an opening bid of 1 Heart or 1 Spade promises at least FIVE cards in that major suit, which helps partner judge whether a trump fit exists.\n- With no five-card major you open a minor (1 Club or 1 Diamond), often your longer minor, planning to describe the rest of your hand later.",
        "The 1NT OPENING is one of the most useful bids in the game:\n- It shows a BALANCED hand (no very long or very short suit, e.g., shapes like 4-3-3-3 or 4-4-3-2) with a tight point range, most commonly 15 to 17 HCP.\n- Because it pins down both strength and shape in a single bid, partner can often place the final contract immediately.\n- This precision is why so many conventions (covered next stage) are built specifically to respond to 1NT.",
        "Very strong or very weak hands have their own openings:\n- A hand of about 22+ points is too strong for a one-bid, so it opens with a special strong, forcing bid (commonly 2 Clubs in Standard American) that demands partner keep bidding.\n- At the other extreme, a PREEMPT — opening at the 3-level or higher with a long suit but few points (e.g., 3 Hearts on a seven-card suit) — sacrifices accuracy to crowd the opponents out of their auction.\n- Preempts trade your own precision for the chaos they create for the other side, a classic bridge tactic.",
      ],
      technical: {
        title: "Why Five-Card Majors and Balanced 1NT Work So Well",
        body: [
          "The logic behind the common openings is all about finding fits and saving space:\n- FIVE-CARD MAJORS — because the prize contracts are in the majors (hearts and spades), promising five of them when you open lets partner raise immediately with three-card support, since 5 + 3 = a guaranteed eight-card fit.\n- OPEN YOUR LONGEST SUIT — long suits make tricks, so describing length first points the partnership toward its best trump suit.",
          "1NT and preempts are about precision versus disruption:\n- 1NT is the most DESCRIPTIVE opening — a narrow point range and a balanced shape in one bid — which is why expert systems lavish so much machinery on it.\n- A PREEMPT is the opposite philosophy: by jumping straight to a high level with a weak, shapely hand, you steal bidding room and force the opponents to guess at a high level, often pushing them into the wrong contract.\n- Knowing which opening fits your hand — descriptive 1NT, natural one-of-a-suit, strong 2 Clubs, or disruptive preempt — is the first strategic decision of every auction.",
        ],
        codeExample: {
          label: "Choosing an opening bid (Standard American)",
          code: `  HAND A:  S K Q 8 6 5   H A 4   D K 7 3   C Q 9 2   (13 HCP)
    -> five spades -> OPEN 1 SPADE (a five-card major)

  HAND B:  S K J 9   H A Q 7   D K 10 6 4   C A J   (16 HCP, balanced)
    -> 15-17 and balanced -> OPEN 1 NOTRUMP

  HAND C:  S 5   H K Q J 9 6 4 2   D 8 3   C 7 4   (6 HCP, 7 hearts)
    -> weak but long suit -> OPEN 3 HEARTS (a preempt)

  HAND D:  S A K Q   H A K J 5   D A Q 4   C K 3   (24 HCP)
    -> too strong for a one-bid -> OPEN 2 CLUBS (strong, forcing)`,
        },
      },
      incident: {
        title: "The Rise of Five-Card Majors",
        when: "Mid-20th century",
        where: "American tournament bridge",
        impact: "The shift to promising five cards for a major-suit opening reshaped Standard American bidding and made major-suit fits easier to find",
        body: [
          "Early Goren-style bidding allowed four-card major openings, which sometimes left partners guessing whether a real trump fit existed. Over time, American experts increasingly adopted the 'five-card majors' style, in which 1 Heart and 1 Spade promise at least five cards.",
          "The change had a lasting effect:\n- It made raising partner's major instantly safe with only three-card support, because a fit was guaranteed.\n- It pushed four-card suits and balanced hands toward the minors or 1NT, sharpening the meaning of every opening.\n- Today five-card majors is the default assumption in 'Standard American' and the related '2-over-1' system used by most North American players, and it is the style taught to beginners alongside the descriptive 1NT and the disruptive preempt.",
        ],
      },
      diagram: {
        nodes: [
          { label: "1 of a Suit", sub: "~12-21 pts, longest suit", type: "system" },
          { label: "Five-Card Majors", sub: "1 H / 1 S promises five", type: "attacker" },
          { label: "1NT Opening", sub: "balanced, ~15-17 HCP", type: "victim" },
          { label: "Preempts & Strong 2C", sub: "disrupt or show power", type: "result" },
        ],
      },
      timeline: [
        { year: 1949, event: "Goren popularizes point-count opening standards" },
        { year: 1960, event: "Five-card-major style gains ground in American bridge", highlight: true },
        { year: 1980, event: "2-over-1 game-forcing builds on five-card majors and a strong 1NT" },
        { year: 2024, event: "Standard American defaults to five-card majors and a 15-17 1NT" },
      ],
      keyTakeaways: [
        "Open one of a suit with about 12 to 21 points, generally bidding your longest suit first",
        "In Standard American, a 1 Heart or 1 Spade opening promises at least five cards (five-card majors)",
        "A 1NT opening shows a balanced hand, most commonly 15 to 17 HCP — strength and shape in one bid",
        "Very strong hands open a strong, forcing bid (often 2 Clubs); weak, long-suit hands can preempt to disrupt opponents",
      ],
      references: [
        { title: "Standard American bidding", url: "https://en.wikipedia.org/wiki/Standard_American" },
        { title: "Opening bid (preempt)", url: "https://en.wikipedia.org/wiki/Preempt" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-05-q1", type: "Five-Card Majors", challenge: "What it promises.", text: "In Standard American five-card majors, what does an opening bid of 1 Spade promise?", options: ["At least five spades and an opening-strength hand", "Exactly four spades", "A balanced hand with no spades", "Game-going strength only"], correctIndex: 0, explanation: "A major-suit opening (1H or 1S) promises at least five cards in that suit, so partner can raise with three-card support." },
        { id: "bridge-1-05-q2", type: "1NT", challenge: "The notrump opener.", text: "What does a 1NT opening typically show?", options: ["A balanced hand, most commonly 15 to 17 HCP", "A long, weak suit", "22 or more points", "A void in one suit"], correctIndex: 0, explanation: "1NT shows a balanced shape and a narrow point range (commonly 15-17), describing the hand in a single bid." },
        { id: "bridge-1-05-q3", type: "Which Suit", challenge: "First suit to bid.", text: "When opening one of a suit, which suit do you generally bid first?", options: ["Your longest suit", "Your shortest suit", "Always clubs", "Your weakest suit"], correctIndex: 0, explanation: "You usually open your longest suit, since length is where your tricks and best trump fit lie." },
        { id: "bridge-1-05-q4", type: "Preempt", challenge: "Bidding to disrupt.", text: "What is the purpose of a preemptive opening like 3 Hearts on a weak hand with seven hearts?", options: ["To crowd the opponents out of bidding room and make them guess", "To show a very strong hand", "To force partner to game", "To show a balanced 15-17"], correctIndex: 0, explanation: "A preempt trades your own precision for disruption, stealing bidding space from the opponents." },
        { id: "bridge-1-05-q5", type: "Strong Hands", challenge: "Too good for one.", text: "With about 22+ points, why not just open one of a suit?", options: ["Partner might pass, so you open a strong, forcing bid (often 2 Clubs) instead", "It is illegal to open with that many points", "You must open 1NT", "You must pass and wait"], correctIndex: 0, explanation: "A one-bid can be passed out; a strong, forcing opening like 2 Clubs makes partner keep bidding so game is not missed." },
      ],
    },
  },

  // ─── bridge-1-06: Responding & Finding a Fit ─────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The fit", location: "Where two hands meet", era: "Modern", emoji: "🧩" },
    id: "bridge-1-06",
    order: 6,
    title: "Responding & Finding a Fit",
    subtitle: "The eight-card fit, raising partner, and Stayman & transfers",
    category: "sports",
    xp: 100,
    badge: { id: "bridge-badge-06", name: "Found the Fit", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "When your partner opens, your job is to answer. The single most important goal of the early auction is to find an eight-card-or-better trump fit, especially in a major — because a good trump fit is worth its weight in tricks.",
      year: 2024,
      overview: [
        "The phrase every new player must memorize is 'EIGHT-CARD FIT':\n- A trump suit works best when the partnership holds at least EIGHT cards in it between the two hands, so the opponents hold at most five and cannot easily run their own suits.\n- Because game in a major pays well and needs only ten tricks, finding an eight-card MAJOR fit (hearts or spades) is the prime objective of responding.\n- If no eight-card major fit exists, partnerships often settle in notrump or a minor.",
        "As 'responder' you have a few standard tools after partner opens one of a suit:\n- RAISE PARTNER'S SUIT — with support (often three-plus cards) and appropriate strength, you raise (e.g., 1 Spade to 2 Spades), confirming the fit and showing your point range.\n- BID A NEW SUIT — naming a new suit is FORCING (partner must bid again) and explores for a different or better fit while keeping the auction alive.\n- BID NOTRUMP — a notrump response shows a balanced hand without support for partner and a defined point range.",
        "Over a 1NT opening, two famous conventions help find the fit:\n- STAYMAN — responder bids 2 Clubs to ASK whether opener holds a four-card major; opener answers, and the pair can locate a 4-4 major fit they would otherwise miss.\n- JACOBY TRANSFERS — responder bids the suit BELOW their real major (e.g., 2 Diamonds to show hearts), forcing opener to bid the major so that the strong 1NT hand becomes declarer and stays hidden.\n- These conventions are artificial — the bid does NOT mean its natural suit — and they are the first 'gadgets' most students learn, precisely because finding a major fit is so valuable.",
      ],
      technical: {
        title: "Why Eight Cards, and Why Conventions Exist",
        body: [
          "The eight-card rule comes straight from the math of the deck:\n- A suit has 13 cards; if your side holds eight, the opponents hold five, which usually splits 3-2, so after you draw trumps your remaining trumps control the hand.\n- With only a seven-card fit the opponents hold six and can more often ruff or run a suit, which is why eight is the threshold for a comfortable trump contract.\n- This is why responder hunts for major fits first and only settles for notrump or a minor when no eight-card major fit can be found.",
          "Conventions like Stayman and transfers exist to plug gaps in natural bidding:\n- After a 1NT opening, responder cannot bid a natural 2 of a suit to invite, so the partnership AGREES to reuse those low bids as artificial questions and commands.\n- The payoff is reaching the right strain: Stayman uncovers 4-4 major fits, and transfers both find 5-3 fits and put the lead up to the stronger, concealed hand.\n- Every convention is just a prior agreement about what a bid MEANS; learning a small set of them dramatically improves a partnership's accuracy, which is why they are introduced so early.",
        ],
        codeExample: {
          label: "Finding the fit",
          code: `  THE GOAL: an 8+ card trump fit (best in a major)

  PARTNER OPENS 1 SPADE (>= 5 spades):
    you hold S K 7 4 ...  -> 5 + 3 = 8-card fit!
    RAISE to 2 SPADES (support + your point range)

  PARTNER OPENS 1 NOTRUMP:
    STAYMAN:  you bid 2 CLUBS = "do you have a 4-card major?"
              opener bids 2H / 2S to show one, else 2D = "no"

    JACOBY TRANSFER:  you bid 2 DIAMONDS = "I have hearts"
              opener is FORCED to bid 2 HEARTS
              -> the strong 1NT hand declares, stays hidden`,
        },
      },
      incident: {
        title: "Stayman, Transfers, and the Convention Era",
        when: "1940s–1950s",
        where: "London and New York",
        impact: "A handful of simple artificial bids became near-universal, proving that prior agreement could outperform purely natural bidding",
        body: [
          "In the 1940s players hunted for a way to find 4-4 major fits after a 1NT opening. The idea of bidding 2 Clubs as an artificial inquiry was developed by several players, including Britain's Jack Marx and George Rapee, but it took the name of Sam Stayman, who published it in 1945 — and 'Stayman' it has been ever since.",
          "Transfers followed and the convention era bloomed:\n- Jacoby (and Hungarian-American Oswald Jacoby's name) became attached to the transfer idea of bidding the suit below your real major to make opener declare it.\n- These conventions spread because they demonstrably found better contracts, and they remain the first two conventions almost every learner adds.\n- They illustrate the deepest truth of bridge bidding: the partnership that AGREES on more precise meanings, within the rules, will outbid one that relies on natural bids alone.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Aim for 8-Card Fit", sub: "best in a major", type: "system" },
          { label: "Raise With Support", sub: "confirm the fit + strength", type: "attacker" },
          { label: "New Suit Forces", sub: "keeps exploring", type: "victim" },
          { label: "Stayman & Transfers", sub: "find majors over 1NT", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "Sam Stayman publishes the 2 Club inquiry over 1NT", highlight: true },
        { year: 1956, event: "Jacoby transfers spread as a complement to Stayman" },
        { year: 1980, event: "Eight-card-fit thinking is standard responder doctrine" },
        { year: 2024, event: "Stayman and transfers are the first conventions every learner adds" },
      ],
      keyTakeaways: [
        "The main goal of responding is to find an eight-card-or-better trump fit, ideally in a major",
        "Raise partner's suit with support, or bid a new (forcing) suit to keep exploring for a fit",
        "Over 1NT, Stayman (2 Clubs) asks opener for a four-card major",
        "Over 1NT, Jacoby transfers make opener bid your major so the strong hand declares and stays concealed",
      ],
      references: [
        { title: "Stayman convention", url: "https://en.wikipedia.org/wiki/Stayman_convention" },
        { title: "Jacoby transfer", url: "https://en.wikipedia.org/wiki/Jacoby_transfer" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-06-q1", type: "The Fit", challenge: "How many is enough.", text: "How many trumps does a partnership ideally want between both hands?", options: ["At least eight", "At least four", "Exactly thirteen", "At least eleven"], correctIndex: 0, explanation: "An eight-card fit leaves the opponents only five trumps, giving you comfortable control of the suit." },
        { id: "bridge-1-06-q2", type: "Raising", challenge: "Showing support.", text: "Partner opens 1 Spade and you hold three spades and a fair hand. A natural action is to:", options: ["Raise to 2 Spades to confirm the fit and show your strength", "Pass immediately", "Bid 1 Spade again", "Double partner"], correctIndex: 0, explanation: "With three-card support for a five-card major you have an eight-card fit, so you raise to show it." },
        { id: "bridge-1-06-q3", type: "Stayman", challenge: "Asking a question.", text: "Over a 1NT opening, what does the Stayman 2 Club response ask?", options: ["Whether opener holds a four-card major", "For opener to pass", "Whether opener has long clubs", "For a slam"], correctIndex: 0, explanation: "Stayman 2 Clubs is artificial, asking opener to reveal a four-card heart or spade suit." },
        { id: "bridge-1-06-q4", type: "Transfers", challenge: "Making partner declare.", text: "Why use a Jacoby transfer over partner's 1NT?", options: ["To make the strong 1NT hand declare the major, keeping it concealed", "To show clubs", "To pass the contract to the opponents", "To double 1NT"], correctIndex: 0, explanation: "Transferring forces opener to bid your major, so the strong, hidden hand becomes declarer." },
        { id: "bridge-1-06-q5", type: "Forcing", challenge: "Keep it alive.", text: "What does it mean that bidding a new suit as responder is 'forcing'?", options: ["Partner is obligated to bid again, keeping the auction going", "The contract is now final", "You must pass next turn", "Partner must double"], correctIndex: 0, explanation: "A forcing bid commits partner to respond, so the partnership can keep exploring for the best contract." },
      ],
    },
  },

  // ─── bridge-1-07: Declarer Play ──────────────────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The plan", location: "The declarer's mind", era: "Modern", emoji: "🧠" },
    id: "bridge-1-07",
    order: 7,
    title: "Declarer Play — Making the Contract",
    subtitle: "Pause, plan, count winners or losers, and time your tricks",
    category: "sports",
    xp: 105,
    badge: { id: "bridge-badge-07", name: "Made the Contract", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "When the dummy hits the table, the worst thing you can do is play quickly. The expert's first move is to STOP and make a plan: count the tricks you have, the tricks you need, and the order in which to take them.",
      year: 2024,
      overview: [
        "The play begins with the OPENING LEAD by the defender on declarer's left; then the dummy is tabled and declarer can see all 26 of the partnership's cards. Before playing from dummy to the first trick, declarer should PAUSE AND PLAN. The plan depends on the type of contract:\n- In a NOTRUMP contract, count your sure WINNERS (tricks you can take right now) and figure out how to develop the extra ones you need.\n- In a SUIT (trump) contract, it is often easier to count your LOSERS — tricks you might have to give up — and find ways to avoid them.",
        "The core trick-making ideas every declarer uses are:\n- ESTABLISHING A LONG SUIT — a suit where you and dummy hold many cards will, after the opponents' cards are exhausted, produce extra winners from your remaining small cards.\n- PROMOTING HONORS — driving out the opponents' high cards so your lower honors (like a king or queen) become winners.\n- TRUMPING (RUFFING) LOSERS — in a suit contract, using dummy's trumps to ruff away losing cards from your hand.",
        "TIMING — the ORDER in which you do things — is what separates good declarers from beginners:\n- You often must develop your extra tricks BEFORE the opponents develop theirs, because whoever sets up their winners first usually cashes them.\n- In a suit contract you must judge WHEN to 'draw trumps' (pull the opponents' trumps) versus when to delay so you can ruff losers first.\n- Holding up high cards, keeping an 'entry' to reach a long suit, and counting how the missing cards divide are all parts of getting the timing right.",
      ],
      technical: {
        title: "Counting Winners vs Losers, and Managing Entries",
        body: [
          "The two counting methods fit the two contract types:\n- IN NOTRUMP, count WINNERS. If you have seven sure tricks and need nine, you must develop two more — usually by establishing a long suit or promoting honors — and you plan the play around getting those extra tricks safely.\n- IN A SUIT CONTRACT, count LOSERS. If you have four likely losers and can afford only three, you look for a way to dispose of one — by ruffing it in dummy, discarding it on an extra winner, or finessing.",
          "Two practical skills make the plan work:\n- ENTRIES — to cash a long suit you have established, you must be able to REACH the hand that holds it; a high card kept as an 'entry' is precious, and careless declarers strand their winners by using up entries too soon.\n- DRAWING TRUMPS WITH CARE — pulling the opponents' trumps protects your winners from being ruffed, but if you need dummy's trumps to ruff your own losers, you must ruff FIRST and draw trumps later. Judging this order is the heart of suit-contract technique.",
        ],
        codeExample: {
          label: "Declarer's plan in 3 Notrump",
          code: `  CONTRACT: 3 NT  (need 9 tricks). Opening lead made.

  STEP 1 - COUNT SURE WINNERS:
    spades  A K          = 2
    hearts  A            = 1
    diamonds A K Q       = 3
    clubs   A            = 1
    ------------------------------
    SURE WINNERS = 7   ->   need 2 more

  STEP 2 - DEVELOP THE EXTRA TRICKS:
    long diamonds: A K Q + dummy's 5-4 -> 2 more length winners
    once opponents' diamonds are gone

  STEP 3 - TIMING / ENTRIES:
    keep an entry to dummy's long diamonds; take tricks
    in the order that lets you reach them. PLAN, then play.`,
        },
      },
      incident: {
        title: "The Discipline of the Pause",
        when: "Every well-played hand",
        where: "From club games to world finals",
        impact: "Generations of teachers reduced declarer play to one habit — stop and plan before playing to trick one — because most contracts are lost in the first ten seconds",
        body: [
          "Bridge teachers have a near-universal mantra: 'Don't play a card from dummy until you have a plan.' The reason is that the first decision often locks in the result. A declarer who plays automatically to trick one frequently strands a long suit, uses an entry too early, or draws trumps when ruffing was needed.",
          "The plan-first discipline is what makes the play teachable:\n- Counting winners (notrump) or losers (suit contracts) turns a vague situation into a concrete arithmetic problem with a target number.\n- Thinking about timing and entries BEFORE touching a card prevents the irreversible mistakes that beginners make on the very first trick.\n- This is why declarer play, like the auction, rewards thought over speed: the cards are fixed once dummy appears, and the contract is usually won or lost by the quality of the plan.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pause After the Lead", sub: "make a plan first", type: "system" },
          { label: "Count Winners or Losers", sub: "NT = winners, suit = losers", type: "attacker" },
          { label: "Develop Extra Tricks", sub: "long suits, promote honors", type: "victim" },
          { label: "Time It & Keep Entries", sub: "take tricks in the right order", type: "result" },
        ],
      },
      timeline: [
        { year: 1925, event: "Contract scoring puts a premium on actually making the contract" },
        { year: 1949, event: "Goren's books teach systematic counting of winners and losers" },
        { year: 1970, event: "Card-play texts codify timing, entries, and trump management", highlight: true },
        { year: 2024, event: "'Plan before trick one' is universal beginner instruction" },
      ],
      keyTakeaways: [
        "After the opening lead and dummy appears, PAUSE and make a plan before playing",
        "In notrump count your winners; in a suit contract count your losers",
        "Make extra tricks by establishing long suits, promoting honors, and ruffing losers in dummy",
        "Timing and entries matter: take tricks in the right order and keep a way to reach your established suit",
      ],
      references: [
        { title: "Declarer play techniques", url: "https://en.wikipedia.org/wiki/Declarer_play_techniques_at_contract_bridge" },
        { title: "Contract bridge — declarer play", url: "https://en.wikipedia.org/wiki/Contract_bridge#Declarer_play" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-07-q1", type: "First Move", challenge: "Before you play.", text: "What should declarer do the moment the dummy is tabled?", options: ["Pause and make a plan before playing to the first trick", "Play quickly to keep up the pace", "Draw trumps immediately every time", "Cash all aces at once"], correctIndex: 0, explanation: "Expert habit is to stop and plan first, because the play to trick one often decides the contract." },
        { id: "bridge-1-07-q2", type: "Counting", challenge: "Notrump method.", text: "In a notrump contract, what should declarer count?", options: ["Sure winners, then plan how to develop the extra tricks needed", "Only the opponents' points", "The number of trumps", "Nothing — just play high cards"], correctIndex: 0, explanation: "In notrump you count winners and figure out how to develop the additional tricks to reach your target." },
        { id: "bridge-1-07-q3", type: "Counting", challenge: "Suit method.", text: "In a suit contract, declarers often count their:", options: ["Losers, then look for ways to avoid them", "Honor cards only", "Opponents' winners", "Discards"], correctIndex: 0, explanation: "In a trump contract it is usually easier to count losers and find ways to ruff, discard, or finesse them away." },
        { id: "bridge-1-07-q4", type: "Making Tricks", challenge: "Extra winners.", text: "Which is a standard way to make extra tricks?", options: ["Establishing a long suit so its small cards win once opponents are exhausted", "Refusing to play any honors", "Always conceding the first five tricks", "Never drawing trumps"], correctIndex: 0, explanation: "A long suit produces length winners from small cards after the opponents' cards in that suit are gone." },
        { id: "bridge-1-07-q5", type: "Entries", challenge: "Reaching your tricks.", text: "Why must declarer be careful about 'entries'?", options: ["You need a way to reach the hand holding your established winners, or they are stranded", "Entries decide who deals next", "Entries are extra trump cards", "Entries only matter on defense"], correctIndex: 0, explanation: "An entry is a card that lets you reach a hand; squander entries and you cannot cash your long-suit winners." },
      ],
    },
  },

  // ─── bridge-1-08: The Finesse & Card Techniques ──────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The finesse", location: "The fifty-fifty gamble", era: "Modern", emoji: "🎯" },
    id: "bridge-1-08",
    order: 8,
    title: "The Finesse & Card Techniques",
    subtitle: "Leading toward an honor, ruffing losers, and drawing trumps",
    category: "sports",
    xp: 108,
    badge: { id: "bridge-badge-08", name: "Took the Finesse", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "The finesse is the most famous play in bridge — an attempt to win a trick with a card that is not the highest, by gambling that a missing honor is favorably placed. Together with ruffing and drawing trumps, it is the toolkit every declarer reaches for.",
      year: 2024,
      overview: [
        "A FINESSE is an attempt to make a trick from an honor when you are missing a higher one, by leading TOWARD that honor and hoping the missing card sits in the right hand:\n- Classic example: dummy holds A-Q of a suit and you are missing the King. You lead a low card from YOUR hand toward dummy's A-Q.\n- If the player in between (the one who plays before dummy) holds the King and does not rise with it, you play the Queen; it wins whenever the King is 'onside' (sitting before your A-Q).\n- A simple finesse like this works about HALF the time — it is roughly a 50/50 gamble on where the missing honor lies.",
        "RUFFING is using trumps to win tricks and erase losers:\n- When you have no card in the suit led (you are 'void'), you may ruff with a trump and win the trick.\n- A key technique is RUFFING LOSERS IN DUMMY: if your hand has a losing card but dummy is short in that suit, you can trump the loser in dummy, turning a loser into a winner.\n- This is one big reason short suits in the dummy are valuable in a trump contract.",
        "DRAWING TRUMPS means deliberately pulling the opponents' trumps:\n- By leading trumps until the defenders have none, you stop them from ruffing your winners in the side suits.\n- But there is a tension with ruffing: if you need dummy's trumps to ruff your own losers, you must do that FIRST, because drawing trumps too early uses up the very trumps you needed.\n- Knowing when to draw trumps immediately and when to delay is one of the most important judgments in declarer play.",
      ],
      technical: {
        title: "Placing the Cards: When a Finesse Is Right",
        body: [
          "A finesse is a bet on card placement, and good declarers improve the odds:\n- The plain finesse is about 50%, but you can sometimes do better by gathering information first — counting the points the opponents have shown in the bidding, or watching which suits they discard.\n- If the bidding marks a missing King in a particular hand, you take (or avoid) the finesse accordingly; a finesse 'into' the safe opponent can also protect against a damaging return.\n- There are also two-way finesses, double finesses, and combined chances, but the single finesse toward an honor is the foundation.",
          "Ruffing and trump management interlock with the finesse:\n- RUFFING LOSERS adds tricks beyond your high cards, which is why you count losers in a suit contract and look for short suits to ruff into.\n- DRAWING TRUMPS protects those winners, but the order matters: a common beginner disaster is drawing all the trumps and only then realizing you needed one of dummy's trumps to ruff a loser.\n- The expert sequence is to plan the whole hand first (previous stage), decide whether ruffs are needed, take them or arrange them, and only then draw the remaining trumps — fitting finesses in at the right moment.",
        ],
        codeExample: {
          label: "A simple finesse",
          code: `  YOU NEED AN EXTRA TRICK. You are missing the KING.

    DUMMY:  A Q 5        (ace and queen)
    YOU:    7 4 3

  LEAD a low card from YOUR hand toward dummy:
    if LEFT-HAND opponent (plays before dummy) has the K:
       he plays low -> you play the QUEEN -> it WINS
       (the king is "onside")
    if he has it and rises -> your ACE beats the king,
       and your queen is now high

  ODDS: about 50% - it wins when the king sits "onside".

  RUFFING A LOSER: trump your losing card in dummy.
  DRAWING TRUMPS: pull opponents' trumps (but ruff first
                  if you still need dummy's trumps).`,
        },
      },
      incident: {
        title: "Why 'Eight Ever, Nine Never' and Other Maxims Exist",
        when: "20th century",
        where: "Bridge instruction worldwide",
        impact: "Card-play technique was distilled into memorable rules of thumb that let beginners play missing-honor situations close to optimally",
        body: [
          "Because finessing and suit-handling come up constantly, the game accumulated a body of maxims — like 'eight ever, nine never' (a guide to whether to finesse for a missing queen depending on how many cards you hold) and 'second hand low, third hand high'. These rules compress real probability into something a beginner can apply at the table.",
          "The maxims work because the underlying math is fixed:\n- How the missing cards are likely to divide between the opponents is governed by probability, so a few rules capture the best play in the most common layouts.\n- The finesse itself is just the most famous of these: a structured way to gamble on a missing honor's location at roughly even odds, improved by reading the bidding and the play.\n- Mastering the finesse, the ruff, and the timing of drawing trumps gives a new declarer the core technical kit — everything else (squeezes, end plays) is built on top of these basics.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead Toward an Honor", sub: "the finesse, about 50%", type: "system" },
          { label: "Hope It's Onside", sub: "missing honor placed well", type: "attacker" },
          { label: "Ruff Losers in Dummy", sub: "trumps erase losing cards", type: "victim" },
          { label: "Draw Trumps in Time", sub: "protect your winners", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Finesse and suit-combination odds are formalized in print" },
        { year: 1955, event: "Card-play maxims ('eight ever, nine never') spread to club players" },
        { year: 1975, event: "Probability tables for suit divisions become standard study", highlight: true },
        { year: 2024, event: "The finesse, the ruff, and trump timing remain the core technical kit" },
      ],
      keyTakeaways: [
        "A finesse leads toward an honor, gambling that a missing higher card is favorably placed — about 50/50",
        "Ruffing losers in the dummy turns losing cards into winners using trumps",
        "Drawing trumps removes the opponents' trumps so they cannot ruff your winners",
        "Order matters: if you need dummy's trumps to ruff losers, do it before drawing all the trumps",
      ],
      references: [
        { title: "Finesse", url: "https://en.wikipedia.org/wiki/Finesse" },
        { title: "Glossary of contract bridge terms — ruff", url: "https://en.wikipedia.org/wiki/Glossary_of_contract_bridge_terms" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-08-q1", type: "The Finesse", challenge: "What it is.", text: "What is a finesse?", options: ["An attempt to win a trick with a card that is not highest, by hoping a missing honor is favorably placed", "Always playing your highest card", "A way to draw trumps", "A type of opening lead"], correctIndex: 0, explanation: "A finesse leads toward an honor and gambles that the missing higher card sits in the favorable hand." },
        { id: "bridge-1-08-q2", type: "Odds", challenge: "How often it works.", text: "Roughly how often does a simple finesse succeed?", options: ["About half the time (50/50)", "Always", "About 10% of the time", "About 90% of the time"], correctIndex: 0, explanation: "A plain finesse depends on whether the missing honor is onside, which is roughly an even-money chance." },
        { id: "bridge-1-08-q3", type: "Ruffing", challenge: "Erasing a loser.", text: "What does 'ruffing a loser in dummy' accomplish?", options: ["It uses a dummy trump to win a trick that would otherwise be lost", "It draws the opponents' trumps", "It discards an honor", "It ends the hand"], correctIndex: 0, explanation: "Trumping a losing card in the dummy turns that loser into a winning trump trick." },
        { id: "bridge-1-08-q4", type: "Drawing Trumps", challenge: "Why pull them.", text: "Why does declarer 'draw trumps'?", options: ["To remove the opponents' trumps so they cannot ruff your winners", "To give the opponents more tricks", "To finesse the dummy", "To make the contract notrump"], correctIndex: 0, explanation: "Drawing trumps strips the defenders of trumps, protecting your side-suit winners from being ruffed." },
        { id: "bridge-1-08-q5", type: "Timing", challenge: "Order of operations.", text: "If you need dummy's trumps to ruff your losers, when should you draw trumps?", options: ["After taking the ruffs, since drawing too early uses up the trumps you needed", "Always immediately, before anything else", "Never draw trumps at all", "Only in notrump"], correctIndex: 0, explanation: "Ruff your losers first; if you draw all the trumps too soon you strip away the very trumps you needed to ruff." },
      ],
    },
  },

  // ─── bridge-1-09: Defense & Opening Leads ────────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The defense", location: "The other side of the table", era: "Modern", emoji: "🛡️" },
    id: "bridge-1-09",
    order: 9,
    title: "Defense & Opening Leads",
    subtitle: "Setting the contract, choosing a lead, and signaling to partner",
    category: "sports",
    xp: 110,
    badge: { id: "bridge-badge-09", name: "Set the Contract", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Half of every deal you play, you are defending — and defense is widely called the hardest part of bridge. The two defenders cannot see each other's cards, so they must cooperate through standard leads and signals to take enough tricks to 'set' the contract.",
      year: 2024,
      overview: [
        "The DEFENDERS' job is to defeat the contract — to take enough tricks that declarer falls short of the number bid (called 'setting' or 'beating' the contract). The defense is at an information disadvantage:\n- Declarer sees 26 cards (their hand plus dummy), but each defender sees only their own 13 plus the dummy.\n- The two defenders may NOT show each other their cards or talk, so everything they convey must come through the cards they choose to play.\n- This makes partnership cooperation and standard agreements the soul of good defense.",
        "It all starts with the OPENING LEAD, the one card a defender plays before dummy appears:\n- TOP OF A SEQUENCE — from a run of touching honors (like K-Q-J), lead the top card; it is safe and tells partner about the suit.\n- FOURTH-BEST VERSUS NOTRUMP — against a notrump contract a common lead is the fourth-highest card of your longest, strongest suit, aiming to set up length winners.\n- Against suit contracts, leads are chosen more for safety and to attack or to set up ruffs; the opening lead is famously the hardest single decision in defense because it is made nearly blind.",
        "Once the play is underway, defenders cooperate through SIGNALS — agreed meanings for which card they play:\n- ATTITUDE — a high spot card often says 'I like this suit, keep playing it' while a low one says 'I don't'.\n- COUNT — the order in which you play spot cards can show whether you hold an even or odd number of cards in a suit, helping partner count the hand.\n- These signals, like bidding conventions, are PRIOR AGREEMENTS; combined with good opening leads they let two defenders act almost as if they could see each other's hands.",
      ],
      technical: {
        title: "Why Defense Is the Hardest Part of the Game",
        body: [
          "Defense is hard precisely because of the information gap:\n- Declarer controls 26 known cards and plans freely; each defender must INFER their partner's hand from the bidding, the dummy, and the cards partner chooses to play.\n- A single careless discard or the wrong card can hand declarer the contract, so defenders must count the hand and trust their partner's signals.\n- Strong defenders reconstruct the unseen hands by combining the auction (what each side promised) with the developing play.",
          "Standard leads and signals are what make cooperation possible:\n- LEADING from sequences and 'fourth best' lets partner deduce your holding in the suit, since the card you choose is governed by an agreed rule.\n- ATTITUDE and COUNT signals turn otherwise meaningless small cards into messages, so partner knows whether to continue a suit or shift.\n- Because the defenders cannot talk, these conventions are not optional flourishes but the very language of defense; mastering them is what lets a partnership consistently set contracts the declarer expected to make.",
        ],
        codeExample: {
          label: "Opening leads and a signal",
          code: `  OPENING LEAD GUIDES:

    From a sequence  K Q J 4   -> lead the KING (top of sequence)
    vs NOTRUMP, longest suit  H 8 6 4 3 2
                              -> lead the 4 (fourth-best)

  ATTITUDE SIGNAL (when partner leads a suit):
    you play a HIGH spot (e.g., the 8)  = "I like it, continue"
    you play a LOW  spot (e.g., the 2)  = "I don't, switch"

  COUNT SIGNAL:
    high-then-low  = even number of cards
    low-then-high  = odd number of cards

  GOAL: take enough tricks to SET (defeat) the contract.`,
        },
      },
      incident: {
        title: "The Codified Language of Defense",
        when: "20th century",
        where: "Bridge theory and championship play",
        impact: "Standard leads and signals turned defense from guesswork into a shared language, making expert partnership defense possible",
        body: [
          "In the early game, defenders mostly guessed. Over the decades, theorists established conventions for opening leads (top of a sequence, fourth-best against notrump) and for signaling (attitude, then count and suit-preference), giving partners an agreed code for the cards they could not speak about.",
          "These agreements transformed defense into a craft:\n- With standard leads, the opening card itself becomes information partner can decode rather than a shot in the dark.\n- With signals, every spot card a defender plays can carry a message about their holding or their wishes.\n- Top partnerships still regard defense as the most demanding part of bridge, because even with the best conventions the defenders must out-think a declarer who can see more cards — which is exactly why setting a well-bid contract is one of the game's great satisfactions.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Aim to Set It", sub: "deny declarer the tricks", type: "system" },
          { label: "Choose the Lead", sub: "top of sequence, 4th best", type: "attacker" },
          { label: "Signal Partner", sub: "attitude and count", type: "victim" },
          { label: "Two Minds, One Plan", sub: "cooperate without talking", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Fourth-best and top-of-sequence leads become standard" },
        { year: 1950, event: "Attitude and count signaling are codified for partnerships", highlight: true },
        { year: 1980, event: "Suit-preference and advanced signals refine defensive cooperation" },
        { year: 2024, event: "Defense is still regarded as the hardest, most cooperative part of bridge" },
      ],
      keyTakeaways: [
        "The defenders' goal is to 'set' the contract — take enough tricks to make declarer fall short",
        "Standard opening leads include top of a sequence and the fourth-best card against notrump",
        "Defenders cooperate through signals — attitude (like/dislike) and count (even/odd) — since they cannot talk",
        "Defense is the hardest part of bridge because each defender sees fewer cards and must infer the rest",
      ],
      references: [
        { title: "Defence (bridge)", url: "https://en.wikipedia.org/wiki/Defence_(bridge)" },
        { title: "Opening lead", url: "https://en.wikipedia.org/wiki/Opening_lead" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-09-q1", type: "The Goal", challenge: "What defenders want.", text: "What is the defenders' objective?", options: ["To 'set' the contract by taking enough tricks that declarer falls short", "To help declarer make the contract", "To win the auction", "To draw trumps"], correctIndex: 0, explanation: "Defenders try to defeat (set) the contract by denying declarer the number of tricks bid." },
        { id: "bridge-1-09-q2", type: "Opening Lead", challenge: "Against notrump.", text: "A common opening lead against a notrump contract is:", options: ["The fourth-best card of your longest, strongest suit", "Always your highest card", "Always a trump", "The dummy's suit"], correctIndex: 0, explanation: "Leading fourth-best from your long suit aims to develop length winners against notrump." },
        { id: "bridge-1-09-q3", type: "Sequences", challenge: "Touching honors.", text: "From a holding like K-Q-J-4, which card do you usually lead?", options: ["The King (top of the sequence)", "The 4 (lowest)", "The Jack", "You never lead this suit"], correctIndex: 0, explanation: "From a sequence of touching honors you lead the top card; it is safe and informative for partner." },
        { id: "bridge-1-09-q4", type: "Signals", challenge: "Talking with cards.", text: "What does an 'attitude' signal communicate to partner?", options: ["Whether you like the suit and want it continued, or not", "How many trumps declarer holds", "The final contract", "Your exact point count"], correctIndex: 0, explanation: "A high card shows you like the suit (continue), a low card shows dislike (consider switching)." },
        { id: "bridge-1-09-q5", type: "Difficulty", challenge: "Why it's hard.", text: "Why is defense considered the hardest part of bridge?", options: ["Each defender sees fewer cards than declarer and must infer partner's hand without talking", "Defenders are not allowed to take tricks", "There are no rules for defense", "Defenders always see all 52 cards"], correctIndex: 0, explanation: "Defenders work with less information and cannot communicate except through standard leads and signals." },
      ],
    },
  },

  // ─── bridge-1-10: Scoring & The Bridge World ─────────────────────────────────
  {
    epochId: "bridge-1",
    wonder: { name: "The score and the wider game", location: "Clubs, tournaments, and world finals", era: "Modern", emoji: "🏆" },
    id: "bridge-1-10",
    order: 10,
    title: "Scoring & The Bridge World",
    subtitle: "Game, slam, and vulnerability; rubber vs duplicate; conventions and masterpoints",
    category: "sports",
    xp: 115,
    badge: { id: "bridge-badge-10", name: "Toured the Bridge World", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Scoring is what gives every bid its meaning, and the wider world of bridge — rubber games at home, duplicate tournaments, masterpoints, and world championships — is where the game becomes a lifelong mind sport. This is the map of where your new skills can take you.",
      year: 2024,
      overview: [
        "Scoring rewards bidding and making your contract, with big bonuses for the higher targets:\n- PART-SCORE — a contract below the game level (e.g., 2 Hearts) earns modest points.\n- GAME — bidding and making 3NT, 4 of a major, or 5 of a minor earns a large GAME BONUS, which is why the ~25-26 point threshold matters so much.\n- SLAM — bidding and making 6 of a suit/NT (small slam, 12 tricks) or 7 (grand slam, all 13) earns huge bonuses, the richest scores in the game.",
        "VULNERABILITY raises the stakes:\n- A side is either 'vulnerable' or 'non-vulnerable', a status that changes from deal to deal.\n- When VULNERABLE, your game and slam bonuses are bigger — but the penalties for failing a contract are also bigger.\n- Vulnerability adds a layer of risk management: a sacrifice or a borderline game is a different decision depending on who is vulnerable.",
        "The same game is played in two main competitive forms:\n- RUBBER BRIDGE — the traditional home/club form, where you play a series of deals and the luck of the cards you are dealt matters.\n- DUPLICATE BRIDGE — the tournament form, where the SAME deals are replayed at many tables and your score is compared with others who held identical cards, so the luck of the deal is removed and SKILL is measured directly.\n- Duplicate is the engine of organized bridge, where the ACBL awards MASTERPOINTS, and modern systems and conventions (like Standard American/SAYC and 2-over-1) let serious partnerships bid with precision. From kitchen tables to the WBF World Championships, bridge is played by millions as a true lifelong mind sport.",
      ],
      technical: {
        title: "Why Duplicate Measures Skill, and What the Conventions Add",
        body: [
          "Duplicate bridge is the great equalizer:\n- Because every pair plays the SAME pre-dealt hands, a good score comes only from bidding and playing those exact cards better than your rivals did with them.\n- This removes the deal's luck almost entirely and is why bridge is recognized as a mind sport rather than a gambling game; world titles are decided over hundreds of such boards.\n- Results are scored by comparison (matchpoints or IMPs), and success earns ACBL masterpoints that accumulate toward ranks like 'Life Master'.",
          "Bidding systems and conventions are the partnership's shared toolkit:\n- A SYSTEM (such as Standard American Yellow Card / SAYC, Acol, or 2-over-1 game-forcing) defines the basic meanings of opening bids and responses.\n- CONVENTIONS (Stayman, transfers, Blackwood for aces, and many more) are specific agreements layered on top to handle particular situations with precision.\n- Together with the scoring incentives — game, slam, and vulnerability — these tools turn bridge into a game you can study and improve at for a lifetime, which is exactly why its players, from beginners to champions, keep coming back to the table.",
        ],
        codeExample: {
          label: "Scoring landmarks and the two forms",
          code: `  CONTRACT TARGETS AND BONUSES (concept):
    PART-SCORE   below game            -> small reward
    GAME         3NT / 4-major / 5-minor -> big game bonus
    SMALL SLAM   6-level (12 tricks)   -> large bonus
    GRAND SLAM   7-level (all 13)      -> largest bonus

  VULNERABILITY:
    vulnerable   -> bigger bonuses, bigger penalties
    non-vuln     -> smaller stakes

  TWO FORMS OF THE GAME:
    RUBBER    home/club; the deal you get matters
    DUPLICATE same hands replayed at every table
              -> compares SKILL, removes deal luck
              -> ACBL masterpoints, up to world titles`,
        },
      },
      incident: {
        title: "From Vanderbilt's Scorepad to the World Championship",
        when: "1925–present",
        where: "Steamships, clubs, and world finals",
        impact: "A single scoring innovation grew into a global competitive sport with national bodies, masterpoints, and world champions",
        body: [
          "Harold Vanderbilt's 1925 scoring did more than tweak the rules — by rewarding only contracts that were bid and made, and by adding rich bonuses for game and slam, it gave bidding its purpose and made accuracy the route to victory. Duplicate movements, invented to let the same deals be replayed and compared, then turned bridge into a measurable contest of skill.",
          "From that foundation grew the modern bridge world:\n- National organizations like the ACBL standardized the rules, ran tournaments, and created the masterpoint ladder that motivates club players everywhere.\n- The World Bridge Federation crowned world champions and won bridge recognition as a mind sport, with famous experts like Ely Culbertson, Charles Goren, and many world-class pairs popularizing it across the twentieth century.\n- Today the same game you have just learned — count your points, bid for a contract, plan the play, defend with signals — is enjoyed by millions socially and contested at the highest levels, a genuine lifelong pursuit.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Score the Contract", sub: "part-score, game, slam", type: "system" },
          { label: "Vulnerability", sub: "bigger bonuses and penalties", type: "attacker" },
          { label: "Rubber vs Duplicate", sub: "deal-luck vs measured skill", type: "victim" },
          { label: "Masterpoints & Titles", sub: "ACBL, WBF, lifelong sport", type: "result" },
        ],
      },
      timeline: [
        { year: 1925, event: "Vanderbilt's scoring adds game, slam, and vulnerability incentives", highlight: true },
        { year: 1935, event: "Duplicate movements let the same deals be compared to measure skill" },
        { year: 1958, event: "The World Bridge Federation begins crowning world champions" },
        { year: 2024, event: "Millions play socially while champions contest WBF world titles" },
      ],
      keyTakeaways: [
        "Scoring rewards bidding and making contracts, with large bonuses for game and huge ones for slam",
        "Vulnerability raises both the bonuses for success and the penalties for failure",
        "Rubber bridge is the home/club form where the deal matters; duplicate replays the same hands to measure skill",
        "Conventions and systems (SAYC, 2-over-1, Stayman, transfers) and the ACBL's masterpoints make bridge a lifelong mind sport",
      ],
      references: [
        { title: "Bridge scoring", url: "https://en.wikipedia.org/wiki/Bridge_scoring" },
        { title: "Duplicate bridge", url: "https://en.wikipedia.org/wiki/Duplicate_bridge" },
      ],
    },
    quiz: {
      questions: [
        { id: "bridge-1-10-q1", type: "Scoring", challenge: "The big bonus.", text: "Which contract earns a large 'game bonus'?", options: ["3NT, 4 of a major, or 5 of a minor", "1 Club", "Any part-score", "A doubled overtrick only"], correctIndex: 0, explanation: "Game contracts (3NT, four of a major, five of a minor) earn a large bonus, which is why ~25-26 points is the target." },
        { id: "bridge-1-10-q2", type: "Slam", challenge: "The richest score.", text: "What is a 'small slam'?", options: ["Bidding and making a 6-level contract (12 tricks)", "Winning the auction", "Any game contract", "A part-score doubled"], correctIndex: 0, explanation: "A small slam is a 6-level contract for 12 tricks; a grand slam is 7-level for all 13, with the biggest bonuses." },
        { id: "bridge-1-10-q3", type: "Vulnerability", challenge: "Raising the stakes.", text: "What does being 'vulnerable' change?", options: ["Both the bonuses for success and the penalties for failure are bigger", "Nothing — it is decorative", "Only the trump suit", "The number of cards dealt"], correctIndex: 0, explanation: "Vulnerability increases game/slam bonuses and also the penalties for going down, adding risk management." },
        { id: "bridge-1-10-q4", type: "Forms", challenge: "Removing luck.", text: "How does duplicate bridge differ from rubber bridge?", options: ["The same deals are replayed at many tables, so results compare skill and remove deal luck", "It uses two decks per player", "There is no bidding", "Only experts may play it"], correctIndex: 0, explanation: "Duplicate replays identical hands at every table, comparing how well each pair did with the same cards." },
        { id: "bridge-1-10-q5", type: "The World", challenge: "Rewards and rank.", text: "What are 'masterpoints'?", options: ["Recognition points the ACBL awards for tournament success, building toward ranks", "The points in your hand", "Penalty points for the opponents", "A type of opening lead"], correctIndex: 0, explanation: "Masterpoints are awarded for success in sanctioned play and accumulate toward ranks like Life Master." },
      ],
    },
  },
];
