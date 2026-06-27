import type { StageConfig, EpochConfig } from "./types";

export const poker1Epoch: EpochConfig = {
  id: "poker-1",
  name: "Poker: Texas Hold'em",
  subtitle: "From the blinds to the river — learn the world's most popular card game",
  description:
    "Texas Hold'em — the game at the center of the World Series of Poker and nearly every poker room and home game on earth — taught from the ground up. This epoch builds you from a complete beginner into a thinking player: the rules and the deal, hand rankings, the four betting rounds, starting hands and the power of position, pot odds and outs, reading the board, bluffing and tells, the difference between tournaments and cash games, bankroll management and the mental game, and the strategy ideas (ranges, GTO vs exploitative) that separate winners from the field. A game of skill, math, and psychology — not luck.",
  emoji: "🃏",
  color: "rose",
  unlocked: true,
};

export const poker1Stages: StageConfig[] = [
  // ─── poker-1-01: What Is Texas Hold'em ───────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The Hold'em table", location: "Card rooms, casinos, and kitchen tables", era: "Modern", emoji: "🃏" },
    id: "poker-1-01",
    order: 1,
    title: "What Is Texas Hold'em",
    subtitle: "The deal, the blinds, and the object of the game",
    category: "sports",
    xp: 85,
    badge: { id: "poker-badge-01", name: "Sat Down", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "Two cards in your hand, five on the table, and the best five-card hand wins. Texas Hold'em is simple to learn and a lifetime to master — a game where math, position, and reading people matter far more than luck over the long run.",
      year: 2024,
      overview: [
        "Texas Hold'em is a community-card poker game. Each player is dealt two private cards (the 'hole cards'), and over the course of a hand up to five shared 'community' cards are dealt face-up in the middle of the table. You make the best possible five-card poker hand using any combination of your two cards and the five on the board — and you win either by having the best hand at a showdown or by betting in a way that makes everyone else fold.",
        "A few features make Hold'em the dominant form of poker:\n- SHARED CARDS — because five cards are community cards, everyone is working from a lot of the same information, which creates rich strategy and big pots.\n- SIMPLE TO DEAL, DEEP TO PLAY — the rules fit on a napkin, but the decisions (when to bet, call, raise, or fold) run very deep.\n- IT'S THE TELEVISED GAME — the World Series of Poker Main Event and almost every poker broadcast is No-Limit Hold'em, which made it the game everyone knows.",
        "Every hand has the same skeleton:\n- The two players to the left of the dealer post forced bets called the 'small blind' and 'big blind' to start the action and build a pot.\n- Cards are dealt, and there are four betting rounds (preflop, flop, turn, river) where players act in turn.\n- If two or more players remain after the final bet, they show their cards and the best five-card hand wins the pot; if everyone folds to a bet, the last player standing wins without showing.",
      ],
      technical: {
        title: "Blinds, the Button, and No-Limit",
        body: [
          "The blinds and the dealer button drive the structure:\n- The 'button' is a marker showing the nominal dealer; it moves one seat clockwise each hand so the blinds and the advantage of acting last rotate fairly.\n- The small blind and big blind are forced bets (the big blind is usually twice the small blind) that seed the pot so there's something to play for every hand.\n- After the flop, the player on the button acts last each round — the single biggest positional edge in the game (covered in a later stage).",
          "Most Hold'em today is 'No-Limit', which shapes everything:\n- NO-LIMIT means you can bet any amount up to all of your chips ('all-in') at any time — so a single hand can risk your whole stack.\n- That makes bet sizing a weapon: the threat of a big bet wins pots that a small one wouldn't.\n- Other formats exist (Limit Hold'em caps bet sizes; Pot-Limit caps a bet at the size of the pot), but No-Limit is the headline game and the focus of this course.",
        ],
        codeExample: {
          label: "Anatomy of one Hold'em hand",
          code: `  YOUR HOLE CARDS:   [A♠] [K♠]      (private — only you see)

  THE COMMUNITY BOARD (dealt over 3 rounds):
    FLOP   ->  [Q♠] [J♠] [2♦]
    TURN   ->  [Q♠] [J♠] [2♦] [7♥]
    RIVER  ->  [Q♠] [J♠] [2♦] [7♥] [T♠]

  BEST 5-CARD HAND: A♠ K♠ Q♠ J♠ T♠  = ROYAL FLUSH
  (use any mix of your 2 cards + the 5 on the board)`,
        },
      },
      incident: {
        title: "How a Texas Game Conquered the World",
        when: "1900s–1970s",
        where: "Robstown, Texas → Las Vegas",
        impact: "A game born in small-town Texas became the centerpiece of the World Series of Poker and, decades later, a global phenomenon",
        body: [
          "By poker lore, Texas Hold'em originated in the early 1900s in Robstown, Texas, and was carried to Las Vegas by a group of Texan road gamblers — including future legends Doyle Brunson, Amarillo Slim, and Crandell Addington — in the 1960s. Addington reportedly loved that, unlike Draw poker, Hold'em was 'a thinking man's game' because of all the shared information and betting rounds.",
          "Its big break came through the casino and TV:\n- In 1970 the Binion family made No-Limit Hold'em the championship event of the new World Series of Poker, cementing it as the 'main event' of poker.\n- That single choice is why, when poker later exploded on television and online, Hold'em — not Stud or Draw — was the game the whole world learned.\n- Everything in this course is about that same game: simple rules, endlessly deep decisions.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Post the Blinds", sub: "forced bets seed the pot", type: "system" },
          { label: "Deal Hole Cards", sub: "two private cards each", type: "attacker" },
          { label: "Four Betting Rounds", sub: "preflop, flop, turn, river", type: "victim" },
          { label: "Best Hand Wins", sub: "showdown or everyone folds", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Texas Hold'em reportedly originates in Robstown, Texas" },
        { year: 1967, event: "Texan road gamblers introduce Hold'em to Las Vegas" },
        { year: 1970, event: "The World Series of Poker debuts; Hold'em becomes its main event", highlight: true },
        { year: 2003, event: "Online qualifier Chris Moneymaker wins the WSOP — the boom begins" },
      ],
      keyTakeaways: [
        "You get two private hole cards and share five community cards; the best five-card hand wins",
        "Forced blinds seed the pot, and the dealer button rotates so position is shared fairly",
        "There are four betting rounds — preflop, flop, turn, and river",
        "No-Limit Hold'em (bet up to all your chips) is the dominant, televised form of the game",
      ],
      references: [
        { title: "Texas hold 'em — overview", url: "https://en.wikipedia.org/wiki/Texas_hold_%27em" },
        { title: "World Series of Poker — history", url: "https://en.wikipedia.org/wiki/World_Series_of_Poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-01-q1", type: "Core Idea", challenge: "The hand you make.", text: "In Texas Hold'em, how do you form your final hand?", options: ["The best five-card hand from your two hole cards plus the five community cards", "Only your two hole cards", "Only the five community cards", "Any seven cards you like from the deck"], correctIndex: 0, explanation: "You combine your two private cards with the five shared cards to make the best five-card hand." },
        { id: "poker-1-01-q2", type: "Structure", challenge: "Starting the action.", text: "What are the 'blinds'?", options: ["Forced bets posted by the two players left of the button to seed the pot", "Cards dealt face-down to the dealer", "A type of bluff", "The community cards"], correctIndex: 0, explanation: "The small and big blinds are forced bets that give players something to compete for each hand." },
        { id: "poker-1-01-q3", type: "Winning", challenge: "Two ways to win.", text: "How can you win a hand of Hold'em?", options: ["Have the best hand at showdown, OR make everyone else fold", "Only by having the best hand at showdown", "Only by bluffing", "By drawing the most cards"], correctIndex: 0, explanation: "You win either at a showdown or when everyone folds to your bet." },
        { id: "poker-1-01-q4", type: "Format", challenge: "How much can you bet?", text: "In No-Limit Hold'em, how much can you bet?", options: ["Any amount up to all of your chips (all-in)", "Only the size of the big blind", "A fixed amount each round", "Never more than the pot"], correctIndex: 0, explanation: "No-Limit means you can move all-in at any time, which makes bet sizing a powerful weapon." },
        { id: "poker-1-01-q5", type: "The Button", challenge: "Why it moves.", text: "Why does the dealer button rotate each hand?", options: ["So the blinds and the advantage of acting last are shared fairly", "To shuffle the deck", "To decide who wins", "It doesn't move"], correctIndex: 0, explanation: "Rotating the button rotates the blinds and positional advantage around the table." },
      ],
    },
  },

  // ─── poker-1-02: Hand Rankings ───────────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The hand-ranking ladder", location: "Every poker table", era: "Modern", emoji: "🪜" },
    id: "poker-1-02",
    order: 2,
    title: "Hand Rankings",
    subtitle: "Royal flush down to high card — the order you must know cold",
    category: "sports",
    xp: 88,
    badge: { id: "poker-badge-02", name: "Knows the Ladder", emoji: "🪜" },
    challengeType: "quiz",
    info: {
      tagline: "You can't play a hand if you don't know what beats what. The ten poker hand rankings are the alphabet of the game — memorize them until they're instant, because every decision depends on knowing where your hand stands.",
      year: 2024,
      overview: [
        "Every poker hand is ranked by how rare it is — the harder a hand is to make, the higher it beats. All poker variants share the same standard ranking of five-card hands, so learning it once serves you everywhere. From strongest to weakest, the ten categories are: royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, and high card.",
        "Here is what each one means:\n- ROYAL FLUSH — A-K-Q-J-10 all of the same suit (the unbeatable nut hand).\n- STRAIGHT FLUSH — five cards in sequence, all one suit (e.g., 5-6-7-8-9 of hearts).\n- FOUR OF A KIND ('quads') — all four cards of one rank.\n- FULL HOUSE ('boat') — three of one rank plus a pair (e.g., three Kings and two 5s).\n- FLUSH — five cards of the same suit, not in sequence.",
        "And the lower half of the ladder:\n- STRAIGHT — five cards in sequence of mixed suits (the Ace can be high, A-K-Q-J-10, or low, A-2-3-4-5).\n- THREE OF A KIND ('trips' or a 'set') — three cards of the same rank.\n- TWO PAIR — two different pairs.\n- ONE PAIR — two cards of the same rank.\n- HIGH CARD — none of the above; your highest card plays. When two hands are the same category, the higher cards ('kickers') break the tie.",
      ],
      technical: {
        title: "Why the Order Is What It Is — and Tie-Breakers",
        body: [
          "The ranking follows probability — rarer hands win:\n- There are 2,598,960 possible five-card hands. A flush is rarer than a straight, which is why a flush beats a straight, even though many beginners guess the opposite.\n- A full house is rarer than a flush, four of a kind is rarer than a full house, and so on up to the (almost never seen) royal flush.\n- You never need to compute these odds at the table — you just need the order memorized so it's automatic.",
          "Ties are broken by 'kickers' and the cards that make the hand:\n- Two players with one pair? The higher pair wins; if the pairs are equal, the highest side card (kicker) decides, then the next, and so on.\n- Because the best five cards play, an unbeatable 'the nuts' on a given board is the strongest possible hand — and recognizing it is a skill covered later.\n- Suits have no ranking value in Hold'em: a flush in spades does not beat a flush in hearts; only the card ranks matter.",
        ],
        codeExample: {
          label: "Hand rankings — strongest to weakest",
          code: `  1. ROYAL FLUSH      A K Q J T (one suit)
  2. STRAIGHT FLUSH   9 8 7 6 5 (one suit)
  3. FOUR OF A KIND   Q Q Q Q  x
  4. FULL HOUSE       K K K  5 5
  5. FLUSH            A J 8 6 3 (one suit, no run)
  6. STRAIGHT         7 6 5 4 3 (mixed suits)
  7. THREE OF A KIND  9 9 9  x x
  8. TWO PAIR         J J  4 4  x
  9. ONE PAIR         T T  x x x
 10. HIGH CARD        A x x x x   <- kicker breaks ties`,
        },
      },
      incident: {
        title: "The Classic Trap: Flush vs Straight",
        when: "Every beginner's table",
        where: "Home games everywhere",
        impact: "Misremembering that a flush beats a straight (or that a full house beats both) costs new players money — the rankings reward rarity",
        body: [
          "The single most common beginner mistake is getting the middle of the ladder backwards — most often thinking a straight beats a flush. It doesn't: a flush is harder to make than a straight, so the flush wins. Likewise, a full house beats both, and many players are surprised the first time they learn that 'two pair' loses to 'three of a kind'.",
          "The cure is simple and worth doing before you play for anything real:\n- Memorize the ten-rung ladder top to bottom until you can recite it without thinking.\n- Remember the logic — rarer hand wins — so you can reconstruct the order if you blank.\n- Drill a few example match-ups (flush vs straight, full house vs flush, trips vs two pair) so the right answer is instant when chips are on the line.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Rarer = Stronger", sub: "ranking follows probability", type: "system" },
          { label: "Top: Flushes & Quads", sub: "royal, straight flush, quads, boat", type: "attacker" },
          { label: "Middle & Bottom", sub: "flush, straight, trips, two pair...", type: "victim" },
          { label: "Kickers Break Ties", sub: "highest side cards decide", type: "result" },
        ],
      },
      timeline: [
        { year: 1875, event: "Standard five-card hand rankings stabilize in American poker" },
        { year: 1944, event: "Probability of poker hands formalized in game-theory literature" },
        { year: 1970, event: "WSOP standardizes the rankings for championship play", highlight: true },
        { year: 2024, event: "The same ten-rung ladder is used in every poker room on earth" },
      ],
      keyTakeaways: [
        "Hands rank by rarity: royal flush, straight flush, quads, full house, flush, straight, trips, two pair, pair, high card",
        "A flush beats a straight, and a full house beats both — the classic beginner trap",
        "When two hands share a category, the higher 'kicker' cards break the tie",
        "Suits have no value in Hold'em — only the ranks of the cards matter",
      ],
      references: [
        { title: "List of poker hands — rankings", url: "https://en.wikipedia.org/wiki/List_of_poker_hands" },
        { title: "Poker probability", url: "https://en.wikipedia.org/wiki/Poker_probability" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-02-q1", type: "The Trap", challenge: "Flush or straight?", text: "Which hand is stronger?", options: ["A flush beats a straight", "A straight beats a flush", "They tie", "It depends on the suit"], correctIndex: 0, explanation: "A flush is rarer than a straight, so it wins — the most common beginner mistake." },
        { id: "poker-1-02-q2", type: "Top of the Ladder", challenge: "The nuts of nuts.", text: "What is the highest possible hand?", options: ["Royal flush (A-K-Q-J-10 of one suit)", "Four aces", "Straight flush 9-high", "A full house of aces"], correctIndex: 0, explanation: "A royal flush — the highest straight flush — is the best hand in poker." },
        { id: "poker-1-02-q3", type: "Full House", challenge: "The boat.", text: "What makes a full house?", options: ["Three of one rank plus a pair", "Five cards of one suit", "Five cards in a row", "Two separate pairs"], correctIndex: 0, explanation: "A full house ('boat') is three of a kind plus a pair, e.g., KKK 55." },
        { id: "poker-1-02-q4", type: "Tie-Breaker", challenge: "Same pair, who wins?", text: "Two players both have a pair of tens. What decides the winner?", options: ["The highest 'kicker' (side card)", "The suit of the tens", "They split automatically", "Who bet last"], correctIndex: 0, explanation: "With equal pairs, the highest side cards (kickers) break the tie." },
        { id: "poker-1-02-q5", type: "Suits", challenge: "Do suits rank?", text: "Does a flush in spades beat a flush in hearts in Hold'em?", options: ["No — suits have no ranking; only the card ranks matter", "Yes, spades are highest", "Yes, hearts are highest", "Only on the river"], correctIndex: 0, explanation: "Suits are equal in Hold'em; the highest cards in the flush decide it." },
      ],
    },
  },

  // ─── poker-1-03: The Betting Rounds ──────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The four streets", location: "Preflop to the river", era: "Modern", emoji: "🛣️" },
    id: "poker-1-03",
    order: 3,
    title: "The Four Betting Rounds",
    subtitle: "Preflop, flop, turn, river — and your options on each",
    category: "sports",
    xp: 90,
    badge: { id: "poker-badge-03", name: "Street Smart", emoji: "🛣️" },
    challengeType: "quiz",
    info: {
      tagline: "A hand of Hold'em unfolds over four betting rounds, called 'streets'. Knowing the order of the streets and your five options on each — check, bet, call, raise, fold — is the grammar of the game.",
      year: 2024,
      overview: [
        "After the blinds are posted and everyone gets their two cards, the hand plays out over four betting rounds. Between the rounds, the dealer reveals community cards. The four streets are:\n- PREFLOP — betting on just your two hole cards, before any community cards.\n- THE FLOP — the first three community cards are dealt face-up; a betting round follows.\n- THE TURN — a fourth community card is dealt; another betting round.\n- THE RIVER — the fifth and final community card is dealt; the last betting round, then showdown.",
        "On each street, when it's your turn you choose one action:\n- CHECK — pass the action without betting (only allowed if no one has bet yet this round).\n- BET — put chips in when no one else has.\n- CALL — match the current bet to stay in the hand.\n- RAISE — increase the current bet, forcing others to call more or fold.\n- FOLD — give up your hand and any chips already in the pot.",
        "The order of action matters:\n- Preflop, the player to the left of the big blind acts first; on later streets, action starts to the left of the button.\n- A betting round ends when everyone still in has either matched the largest bet or folded.\n- If at any point only one player remains (everyone else folded), the hand ends immediately and they win the pot without showing their cards.",
      ],
      technical: {
        title: "Closing the Action, Showdown, and the 'Street' Vocabulary",
        body: [
          "A round 'closes' when bets are settled:\n- If someone bets, everyone else must call, raise, or fold; the round only ends once all remaining players have put in equal chips.\n- The big blind has a special preflop right called the 'option' — if no one raised, they can check or raise, because they already have a bet posted.\n- After the river betting closes with two or more players left, there is a showdown: players reveal their cards and the best hand wins.",
          "Pros think in terms of the streets because strategy changes on each:\n- More money typically goes in on later streets, when hands are closer to complete and the pot is bigger.\n- 'Barreling' means continuing to bet street after street to apply pressure; 'pot control' means checking to keep the pot small with a medium hand.\n- Every concept later in this course — odds, position, bluffing — is applied street by street, so the vocabulary (preflop/flop/turn/river) is worth knowing cold.",
        ],
        codeExample: {
          label: "The four streets of one hand",
          code: `  PREFLOP : [hole cards]      -> bet round 1
  FLOP    : + [_][_][_]        -> bet round 2
  TURN    : + [_]              -> bet round 3
  RIVER   : + [_]              -> bet round 4  -> SHOWDOWN

  YOUR OPTIONS EACH ROUND:
    check | bet | call | raise | fold
  (check only if no one has bet yet this street)`,
        },
      },
      incident: {
        title: "Why More Streets Means More Skill",
        when: "Compared to older poker games",
        where: "Hold'em vs Five-Card Draw",
        impact: "Hold'em's four betting rounds (versus Draw's two) create far more decision points — the reason it rewards skill so heavily",
        body: [
          "Older poker games like Five-Card Draw have only one or two betting rounds, so there are fewer chances to outplay an opponent. Texas Hold'em's four streets, combined with the shared community cards, multiply the decisions in every hand: you can gather information, change your read, and apply or release pressure four separate times.",
          "This structure is exactly why Hold'em is considered a deep game of skill:\n- Each new community card changes the value of every hand, forcing fresh decisions.\n- Good players use the streets to extract value when ahead and to bluff or fold when behind.\n- The more decisions a game contains, the more a skilled player's edge compounds over time — and Hold'em is full of them.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Preflop", sub: "bet on hole cards", type: "system" },
          { label: "Flop & Turn", sub: "3 then 4th community card", type: "attacker" },
          { label: "River", sub: "5th card, final bet", type: "victim" },
          { label: "Showdown", sub: "best hand wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1834, event: "Early poker uses a single betting round on dealt hands" },
        { year: 1900, event: "Hold'em's community-card structure adds multiple streets" },
        { year: 1970, event: "WSOP standardizes preflop/flop/turn/river No-Limit play", highlight: true },
        { year: 2003, event: "Televised hole-card cameras make the four streets a spectator sport" },
      ],
      keyTakeaways: [
        "A hand has four betting rounds ('streets'): preflop, flop, turn, and river",
        "Your options on your turn are check, bet, call, raise, or fold (check only if no one has bet)",
        "A round ends when all remaining players have matched the biggest bet or folded",
        "If everyone folds, the last player wins immediately without a showdown",
      ],
      references: [
        { title: "Texas hold 'em — play of the hand", url: "https://en.wikipedia.org/wiki/Texas_hold_%27em#Play_of_the_hand" },
        { title: "Betting in poker", url: "https://en.wikipedia.org/wiki/Betting_in_poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-03-q1", type: "Order", challenge: "Name the streets.", text: "What is the correct order of the betting rounds?", options: ["Preflop, flop, turn, river", "Flop, preflop, river, turn", "River, turn, flop, preflop", "Turn, flop, river, preflop"], correctIndex: 0, explanation: "The four streets in order are preflop, flop, turn, and river." },
        { id: "poker-1-03-q2", type: "The Flop", challenge: "How many cards?", text: "How many community cards are revealed on the flop?", options: ["Three", "One", "Two", "Five"], correctIndex: 0, explanation: "The flop is the first three community cards; the turn and river add one each." },
        { id: "poker-1-03-q3", type: "Options", challenge: "When can you check?", text: "When are you allowed to 'check'?", options: ["Only when no one has bet yet this round", "Any time you want", "Only on the river", "Only when you're all-in"], correctIndex: 0, explanation: "Checking passes the action but is only legal if there's no bet to call." },
        { id: "poker-1-03-q4", type: "Closing", challenge: "Round's end.", text: "When does a betting round end?", options: ["When everyone still in has matched the biggest bet or folded", "After exactly three actions", "When the dealer decides", "When the blinds are posted"], correctIndex: 0, explanation: "A round closes once all remaining players have put in equal chips or folded." },
        { id: "poker-1-03-q5", type: "Showdown", challenge: "No showdown needed.", text: "What happens if everyone folds to a bet?", options: ["The last remaining player wins the pot without showing cards", "The hand is replayed", "The pot is split", "Cards must still be revealed"], correctIndex: 0, explanation: "If only one player is left, they win immediately — no showdown required." },
      ],
    },
  },

  // ─── poker-1-04: Starting Hands & Position ───────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The starting-hand chart", location: "The first decision of every hand", era: "Modern", emoji: "🎴" },
    id: "poker-1-04",
    order: 4,
    title: "Starting Hands & Position",
    subtitle: "Which two cards to play — and why your seat is power",
    category: "sports",
    xp: 92,
    badge: { id: "poker-badge-04", name: "Position Player", emoji: "🎴" },
    challengeType: "quiz",
    info: {
      tagline: "Most of poker is decided before the flop, by two questions: are my two cards worth playing, and where am I sitting? Great players fold most hands and play their best ones aggressively — especially when they get to act last.",
      year: 2024,
      overview: [
        "Your two hole cards are your starting hand, and not all of them are worth playing. The strongest are the 'premium' hands:\n- BIG PAIRS — Aces (AA), Kings (KK), Queens (QQ), Jacks (JJ).\n- BIG CARDS — Ace-King (AK), especially suited, and Ace-Queen (AQ).\n- These hands win more than their share and can be played from anywhere. Most random two-card hands (like 7-2 offsuit, the worst hand) should simply be folded.",
        "What makes a starting hand good comes down to a few factors:\n- HIGH CARDS make stronger top pairs and win more showdowns.\n- BEING PAIRED gives you a made hand immediately and the chance to flop a powerful 'set' (three of a kind).\n- BEING SUITED (both cards the same suit) and CONNECTED (close in rank, like 8-9) adds flush and straight potential, raising a hand's upside.",
        "Position — where you sit relative to the dealer button — may be even more important than your cards:\n- Acting LAST (on or near the button) lets you see what everyone does before you decide, a huge information edge.\n- Acting FIRST (in the blinds or 'early position') is a disadvantage, so you should play tighter (fewer hands) there.\n- The saying 'play tight in early position, loosen up in late position' captures the core of solid preflop strategy.",
      ],
      technical: {
        title: "Why Position Wins Money, and the Tight-Aggressive Style",
        body: [
          "Position is an information advantage that pays every street:\n- On the flop, turn, and river, the button acts last, so they always know how many opponents stayed and whether they bet or checked before deciding.\n- That lets the in-position player bluff more safely, get more value, and control the pot size — advantages that compound over thousands of hands.\n- This is why the same two cards are worth more on the button than in the blinds.",
          "The winning baseline style for beginners is 'tight-aggressive' (TAG):\n- TIGHT — play relatively few hands, mostly strong ones, especially out of position.\n- AGGRESSIVE — when you do play, bet and raise rather than just calling, so you can win pots two ways (best hand or by making others fold).\n- A simple plan: raise your premium and strong hands, fold the junk, and play more hands as your position improves toward the button.",
        ],
        codeExample: {
          label: "Table positions (6-handed)",
          code: `         [BTN]  <- acts LAST (best seat)
        /        \\
   [CO]            [SB]  <- forced bet
     |              |
   [HJ]            [BB]  <- forced bet, acts first postflop
        \\        /
         [UTG]  <- acts first preflop (play tight here)

  Early position: play few, strong hands
  Late position : play more hands, steal blinds`,
        },
      },
      incident: {
        title: "Sklansky and the Science of Starting Hands",
        when: "1976–present",
        where: "Poker strategy literature",
        impact: "Authors like David Sklansky turned starting-hand selection from folklore into ranked, studied groups — the basis of modern preflop play",
        body: [
          "For decades, which hands to play was passed around as folklore. Strategy author David Sklansky helped change that by publishing ranked groups of starting hands and explaining how their value shifts with position and the number of players — turning a gut-feel decision into something you could study and learn.",
          "Modern players take this further with data and solvers, but the core lessons are unchanged:\n- A disciplined player folds most starting hands and waits for spots where their cards and position give an edge.\n- Loose players who play too many weak hands, especially out of position, bleed chips over time.\n- Mastering starting hands and position is the highest-leverage skill a beginner can build — it prevents most costly mistakes before they happen.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Premium Hands", sub: "AA KK QQ AK...", type: "system" },
          { label: "Why It's Strong", sub: "high, paired, suited, connected", type: "attacker" },
          { label: "Position", sub: "acting last = information", type: "victim" },
          { label: "Tight-Aggressive", sub: "few hands, played hard", type: "result" },
        ],
      },
      timeline: [
        { year: 1976, event: "Sklansky's strategy writing ranks starting hands into groups" },
        { year: 1979, event: "Doyle Brunson's 'Super/System' codifies aggressive play", highlight: true },
        { year: 2006, event: "Online play and databases prove the value of position with data" },
        { year: 2024, event: "Solvers confirm position and selective aggression as core edges" },
      ],
      keyTakeaways: [
        "Premium starting hands (AA, KK, QQ, AK) can be played from anywhere; most weak hands should be folded",
        "Hands gain value from high cards, being paired, and being suited and connected",
        "Position is power: acting last (on the button) is a big information advantage",
        "Play tight in early position and looser in late position — the tight-aggressive baseline",
      ],
      references: [
        { title: "Texas hold 'em — starting hands", url: "https://en.wikipedia.org/wiki/Texas_hold_%27em_starting_hands" },
        { title: "Position (poker)", url: "https://en.wikipedia.org/wiki/Position_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-04-q1", type: "Premium", challenge: "The best of the best.", text: "Which of these is a premium starting hand?", options: ["A pair of Aces (AA)", "7-2 offsuit", "9-4 offsuit", "10-3 offsuit"], correctIndex: 0, explanation: "Pocket Aces is the strongest starting hand; 7-2 offsuit is the weakest." },
        { id: "poker-1-04-q2", type: "What Makes It Good", challenge: "Upside.", text: "Why are 'suited connectors' like 8♠9♠ playable?", options: ["They can make both flushes and straights, adding upside", "They are the highest cards", "They always win", "They can't be beaten"], correctIndex: 0, explanation: "Suited and connected cards have flush and straight potential, raising their value." },
        { id: "poker-1-04-q3", type: "Position", challenge: "Best seat.", text: "Which position has the biggest advantage postflop?", options: ["The button (acts last)", "The small blind", "Under the gun (acts first)", "The big blind"], correctIndex: 0, explanation: "The button acts last on every postflop street — the best information advantage." },
        { id: "poker-1-04-q4", type: "Strategy", challenge: "Early seat.", text: "How should you play in early position?", options: ["Tighter — play fewer, stronger hands", "Looser — play any two cards", "Always go all-in", "Only check"], correctIndex: 0, explanation: "Out of position you have less information, so play a tighter range of strong hands." },
        { id: "poker-1-04-q5", type: "Style", challenge: "The baseline.", text: "What does 'tight-aggressive' mean?", options: ["Play relatively few hands, but bet and raise them aggressively", "Play every hand passively", "Only call, never raise", "Bluff every hand"], correctIndex: 0, explanation: "Tight-aggressive — few hands, played with bets and raises — is the winning beginner style." },
      ],
    },
  },

  // ─── poker-1-05: Pot Odds & Outs ─────────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The math of the draw", location: "Where poker meets arithmetic", era: "Modern", emoji: "🧮" },
    id: "poker-1-05",
    order: 5,
    title: "Pot Odds & Outs",
    subtitle: "Counting your chances and pricing a call",
    category: "sports",
    xp: 95,
    badge: { id: "poker-badge-05", name: "Odds Counter", emoji: "🧮" },
    challengeType: "quiz",
    info: {
      tagline: "Poker is a game of incomplete information, but it is not a game of guessing. By counting your 'outs' and comparing your odds of winning to the price the pot is offering, you turn fold-or-call decisions into simple, profitable math.",
      year: 2024,
      overview: [
        "An 'out' is a card still in the deck that will improve your hand to a likely winner. Counting outs is the first step in poker math:\n- A FLUSH DRAW (four cards to a flush) has 9 outs — the 9 remaining cards of that suit.\n- An OPEN-ENDED STRAIGHT DRAW (e.g., 5-6-7-8 needing a 4 or a 9) has 8 outs.\n- A pair trying to become three of a kind has 2 outs. Count carefully and don't double-count cards that help two draws at once.",
        "Once you know your outs, the 'Rule of 2 and 4' gives a fast estimate of your chance to hit:\n- With two cards to come (on the flop), multiply your outs by 4 for your rough percentage to improve by the river.\n- With one card to come (on the turn), multiply your outs by 2.\n- Example: a flush draw with 9 outs on the flop is about 9 x 4 = 36% to complete by the river.",
        "Pot odds compare the price of a call to the reward:\n- POT ODDS = the size of the bet you must call, relative to the total pot you could win.\n- If the pot is $100 and you must call $20, you are getting 5-to-1 (you risk 1 to win 5) — you only need to win about 1 in 6 times to break even.\n- THE RULE: call when your chance to hit (from your outs) is better than the pot odds you're being offered, and fold when it isn't. That single comparison underlies most drawing decisions.",
      ],
      technical: {
        title: "Expected Value, Implied Odds, and Not Chasing",
        body: [
          "Pot odds are really a shortcut for expected value (EV):\n- EV asks: over many repetitions, does this call make or lose money? If your win probability times the pot exceeds your cost, the call is +EV (profitable long-term).\n- Comparing your hit % to your pot odds % is the at-the-table version of that calculation.\n- Winning poker is making +EV decisions again and again; the results of any single hand are noisy, but the math wins over time.",
          "Two refinements every player should know:\n- IMPLIED ODDS — you may call a slightly 'wrong' price if you expect to win extra chips on later streets when you hit a hidden strong hand. Deep stacks increase implied odds.\n- REVERSE IMPLIED ODDS — beware draws to the 'second-best' hand (e.g., a low flush) that can complete and still lose you a big pot.\n- The discipline is to fold draws that don't have the price or the implied odds, instead of 'chasing' — calling out of hope. Chasing bad draws is one of the biggest leaks in amateur poker.",
        ],
        codeExample: {
          label: "Outs -> chance -> decision",
          code: `  YOUR DRAW: flush draw on the flop = 9 outs

  RULE OF 4 (two cards to come):
    9 outs x 4  ~=  36% to hit by the river

  POT ODDS: pot $100, you must call $20
    you're getting 100:20 = 5-to-1  (~17% needed)

  DECISION: 36% to win  >  17% needed  ->  CALL (+EV)`,
        },
      },
      incident: {
        title: "How Math Quietly Took Over Poker",
        when: "1980s–2010s",
        where: "From card rooms to online databases",
        impact: "As players began tracking results, those who made odds-based decisions consistently beat those who played on feel — proving poker is a skill game",
        body: [
          "For most of poker's history, decisions were made on intuition. But as serious players — and later, online databases tracking millions of hands — studied the game, a clear pattern emerged: players who counted outs, calculated pot odds, and made +EV decisions consistently beat players who relied on hunches.",
          "This quiet revolution is the strongest evidence that poker is a game of skill:\n- Luck decides individual hands, but math decides who wins over a year.\n- A player who always takes the mathematically correct line will profit from opponents who chase bad draws.\n- You don't need to be a mathematician — the Rule of 2 and 4 and a sense of pot odds are enough to avoid the costly mistakes that sink most players.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count Your Outs", sub: "cards that win the hand", type: "system" },
          { label: "Rule of 2 and 4", sub: "estimate your % to hit", type: "attacker" },
          { label: "Compare Pot Odds", sub: "price vs reward", type: "victim" },
          { label: "Call if +EV, Else Fold", sub: "don't chase bad draws", type: "result" },
        ],
      },
      timeline: [
        { year: 1978, event: "Strategy books popularize outs and pot-odds thinking" },
        { year: 1999, event: "Online poker enables tracking millions of hands" },
        { year: 2009, event: "Hand-tracking software proves odds-based play beats intuition", highlight: true },
        { year: 2024, event: "The Rule of 2 and 4 is standard beginner instruction worldwide" },
      ],
      keyTakeaways: [
        "An 'out' is a card that improves you to a likely winner; a flush draw has 9 outs, an open-ended straight draw has 8",
        "Rule of 2 and 4: outs x 4 on the flop, outs x 2 on the turn, gives your rough % to hit",
        "Pot odds compare the call price to the pot; call when your hit % beats the odds offered",
        "Winning poker is making +EV decisions repeatedly — don't 'chase' draws without the right price",
      ],
      references: [
        { title: "Pot odds", url: "https://en.wikipedia.org/wiki/Pot_odds" },
        { title: "Out (poker)", url: "https://en.wikipedia.org/wiki/Out_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-05-q1", type: "Outs", challenge: "Count the flush.", text: "How many outs does a flush draw (four to a flush) have?", options: ["9", "4", "15", "2"], correctIndex: 0, explanation: "There are 13 cards of each suit; with 4 seen, 9 remain to complete the flush." },
        { id: "poker-1-05-q2", type: "Rule of 4", challenge: "Estimate it.", text: "Using the Rule of 4, what's the rough chance to hit a 9-out flush draw by the river (from the flop)?", options: ["About 36%", "About 9%", "About 72%", "About 50%"], correctIndex: 0, explanation: "9 outs x 4 ≈ 36% to complete by the river with two cards to come." },
        { id: "poker-1-05-q3", type: "Pot Odds", challenge: "Price the call.", text: "The pot is $100 and you must call $20. What odds are you getting?", options: ["5-to-1", "1-to-5", "2-to-1", "10-to-1"], correctIndex: 0, explanation: "You risk $20 to win $100 — that's 5-to-1 pot odds." },
        { id: "poker-1-05-q4", type: "Decision", challenge: "Call or fold?", text: "Your draw is 36% to hit and the pot offers you 5-to-1 (about 17% needed). What's the correct play?", options: ["Call — your chance to win beats the price", "Fold — the draw is hopeless", "Always go all-in", "It doesn't matter"], correctIndex: 0, explanation: "36% to win versus only 17% needed makes calling profitable (+EV)." },
        { id: "poker-1-05-q5", type: "Implied Odds", challenge: "Extra reward.", text: "What are 'implied odds'?", options: ["Extra chips you expect to win on later streets if your draw hits", "The blinds you must post", "A type of bluff", "The rake the casino takes"], correctIndex: 0, explanation: "Implied odds account for the additional money you can win after completing a hidden strong hand." },
      ],
    },
  },

  // ─── poker-1-06: Reading the Board ───────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The board texture", location: "The five cards in the middle", era: "Modern", emoji: "👁️" },
    id: "poker-1-06",
    order: 6,
    title: "Reading the Board",
    subtitle: "The nuts, made hands vs draws, and wet vs dry boards",
    category: "sports",
    xp: 96,
    badge: { id: "poker-badge-06", name: "Board Reader", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "Because the community cards are shared, the board tells a story about every hand at the table. Learn to read what the board makes possible — the best hand it allows ('the nuts'), and how 'wet' or 'dry' it is — and you'll always know where you stand.",
      year: 2024,
      overview: [
        "Reading the board means asking: given these community cards, what is the best hand anyone could have, and how does mine compare? The most important concept is 'the nuts' — the strongest possible hand on a given board.\n- On a board of A♠ K♠ 5♠ 9♦ 2♣, the nuts is a spade flush with the Q♠ J♠ (or any two spades making the highest flush).\n- If you hold the nuts, no one can beat you; if you can't beat the nuts, you must consider that someone might have it.",
        "Distinguish 'made hands' from 'draws':\n- A MADE HAND is already complete — a pair, two pair, a straight, etc. — and wins right now if the hand ended.\n- A DRAW is an incomplete hand hoping to improve (a flush draw, a straight draw).\n- A key skill is recognizing when your made hand is strong enough to bet for value versus when many draws on the board threaten it.",
        "Boards have 'texture', and it shapes strategy:\n- A WET (coordinated) board has many possible draws — connected ranks and same-suit cards (e.g., 9♠ 8♠ 7♦) where straights and flushes loom. Strong hands should usually bet to charge the draws.\n- A DRY (uncoordinated) board has few draws (e.g., K♦ 7♣ 2♠), so made hands are safer and bluffs are more believable.\n- Reading texture tells you how vulnerable your hand is and how an opponent's bets should be interpreted.",
      ],
      technical: {
        title: "Counting the Nuts, Blockers, and Relative Hand Strength",
        body: [
          "Spotting the nuts (and near-nuts) is a fast mental checklist:\n- Is a flush possible? (three or more of one suit on board)\n- Is a straight possible? (three cards within a five-rank span)\n- Is the board paired? (if so, a full house or quads is possible, which beats a flush or straight)\n- Run that checklist on every board so you always know the top of the range you could be facing.",
          "Two ideas sharpen your reads:\n- BLOCKERS — holding a card that makes a strong hand less likely for opponents. If you hold the A♠ on a three-spade board, no one can have the nut flush, which makes your bluffs more credible.\n- RELATIVE vs ABSOLUTE strength — 'top pair' is great on a dry board but weak on a wet, draw-heavy board. Always judge your hand relative to what the board makes possible, not in a vacuum.\n- This is why the same pair can be a bet-for-value hand on one board and a check-and-fold on another.",
        ],
        codeExample: {
          label: "Reading a board",
          code: `  BOARD: 9♠ 8♠ 7♦  (a very WET flop)

  WHAT'S POSSIBLE?
    - flush draw  (two more spades coming)
    - straight    (T-J or 6-5 or 6-T already there)
    - the NUTS now: J♠T♠ would be... no flush yet
      -> straight T-6 (any T6) or J-T makes a straight

  YOUR HAND: A♠A♣ (overpair) -> strong but VULNERABLE
    -> bet big to charge the many draws`,
        },
      },
      incident: {
        title: "The Cooler: When Two Big Hands Collide",
        when: "Every high-stakes game",
        where: "Televised poker",
        impact: "Famous 'coolers' — like a flush losing to a full house — happen when a player misreads how the board could beat a strong-looking hand",
        body: [
          "Poker television is full of 'coolers' — hands where a player with something strong, like a flush, loses a huge pot to something stronger, like a full house, because the board was paired and they didn't respect what it allowed. These dramatic moments are really lessons in board reading.",
          "Skilled players avoid the worst coolers by always asking what the board permits:\n- On a paired board, they slow down with a flush or straight because a full house is now possible.\n- On a wet board, they don't fall in love with one pair.\n- They use the nuts as a reference point on every street, so they're rarely surprised by what an opponent turns over — the hallmark of a player who truly reads the board.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Find the Nuts", sub: "best hand the board allows", type: "system" },
          { label: "Made Hand or Draw?", sub: "complete vs improving", type: "attacker" },
          { label: "Read the Texture", sub: "wet (draws) vs dry (safe)", type: "victim" },
          { label: "Judge Relative Strength", sub: "your hand vs what's possible", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' teaches reading boards and opponents" },
        { year: 2003, event: "Hole-card cameras let viewers learn board reading at home", highlight: true },
        { year: 2015, event: "Solvers formalize board texture and range advantage" },
        { year: 2024, event: "Texture-based strategy is core to modern training" },
      ],
      keyTakeaways: [
        "'The nuts' is the best possible hand on a given board — always know what it is",
        "Distinguish made hands (already complete) from draws (still improving)",
        "Wet boards have many draws (bet your strong hands); dry boards are safer for made hands and bluffs",
        "Judge your hand's strength relative to what the board makes possible, and watch for paired boards",
      ],
      references: [
        { title: "Nut hand", url: "https://en.wikipedia.org/wiki/Nut_hand" },
        { title: "Glossary of poker terms — board texture", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-06-q1", type: "The Nuts", challenge: "Top of the range.", text: "What does 'the nuts' mean?", options: ["The best possible hand on a given board", "A pair of aces", "Any flush", "The worst hand"], correctIndex: 0, explanation: "The nuts is the strongest hand the current board allows — unbeatable on that board." },
        { id: "poker-1-06-q2", type: "Made vs Draw", challenge: "Complete or not.", text: "What is a 'draw'?", options: ["An incomplete hand hoping to improve (e.g., a flush draw)", "A hand that already wins", "A tie", "A type of bet"], correctIndex: 0, explanation: "A draw needs another card to become a strong hand; a made hand is already complete." },
        { id: "poker-1-06-q3", type: "Texture", challenge: "Lots of danger.", text: "A board of 9♠ 8♠ 7♦ is best described as:", options: ["Wet (coordinated, many possible draws)", "Dry (few draws)", "Paired", "Unplayable"], correctIndex: 0, explanation: "Connected, same-suit cards create many straight and flush draws — a wet board." },
        { id: "poker-1-06-q4", type: "Blockers", challenge: "Holding the key card.", text: "Why is holding the A♠ on a three-spade board useful for bluffing?", options: ["It blocks the nut flush, so opponents are less likely to have it", "It guarantees you win", "It makes a full house", "It has no effect"], correctIndex: 0, explanation: "Holding the ace of the flush suit means no one can have the nut flush, making your bluff credible." },
        { id: "poker-1-06-q5", type: "Relative Strength", challenge: "Context matters.", text: "Why can top pair be strong on one board but weak on another?", options: ["Its value depends on how many better hands and draws the board makes possible", "Top pair is always the nuts", "Pairs never change value", "Only suits matter"], correctIndex: 0, explanation: "Judge hands relative to the board: top pair is great on a dry board, vulnerable on a wet one." },
      ],
    },
  },

  // ─── poker-1-07: Bluffing & Tells ────────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The bluff", location: "Where psychology beats cards", era: "Modern", emoji: "🎭" },
    id: "poker-1-07",
    order: 7,
    title: "Bluffing & Tells",
    subtitle: "Betting a story, reading opponents, and managing your image",
    category: "sports",
    xp: 98,
    badge: { id: "poker-badge-07", name: "Poker Face", emoji: "🎭" },
    challengeType: "quiz",
    info: {
      tagline: "Bluffing is the soul of poker — winning a pot with the worst hand by telling a believable story with your bets. But good bluffing is logical, not reckless, and reading opponents is as much about their betting patterns as their twitchy hands.",
      year: 2024,
      overview: [
        "A bluff is a bet or raise made with a hand that probably isn't the best, aiming to make opponents fold. Bluffs work because the threat of a strong hand is often as powerful as the hand itself. The most reliable kind is the 'semi-bluff':\n- A SEMI-BLUFF is betting with a drawing hand that isn't best yet but could improve (like a flush draw).\n- You can win two ways: opponents fold now, or you hit your draw and have the best hand later.\n- Pure bluffs (no chance to improve) work too, but should be chosen carefully, on boards and against players where the story makes sense.",
        "Good bluffs follow logic, not bravado:\n- TELL A CONSISTENT STORY — your bets across the streets should represent a believable strong hand; a line that no real hand would take is easy to call.\n- PICK YOUR SPOTS — bluff more on scary boards, against few opponents, and against players capable of folding.\n- BET SIZING — size your bluffs like your value bets so opponents can't tell them apart; a tiny bluff or an unusually huge one is often a giveaway.",
        "Reading opponents combines two kinds of 'tells':\n- BETTING TELLS (the reliable kind) — patterns in how someone bets: do they only raise with strong hands? do they always continuation-bet? These patterns are far more trustworthy than body language.\n- PHYSICAL TELLS (the famous kind) — shaky hands, staring, sudden stillness, or talkativeness. Real but unreliable, and overrated by Hollywood.\n- TABLE IMAGE — how others perceive you. A tight player's bluffs get respect; a wild player gets called. Manage your image and use it.",
      ],
      technical: {
        title: "Balance, Frequencies, and Not Bluffing the Un-Bluffable",
        body: [
          "Modern theory frames bluffing as 'balance':\n- If you only ever bet with strong hands, observant opponents simply fold; if you bluff too much, they simply call. The solution is to bet both value hands and bluffs at the right ratio so you're unpredictable.\n- On the river, a rough guideline ties your bluff frequency to your bet size: bigger bets can include more bluffs because they offer opponents worse pot odds to call.\n- You don't need exact math as a beginner — just avoid the extremes of never bluffing and bluffing constantly.",
          "The most common bluffing mistakes are about target selection:\n- DON'T BLUFF A 'CALLING STATION' — some players call with almost anything; against them, value bet relentlessly and bluff rarely.\n- DON'T BLUFF INTO MANY PLAYERS — the more opponents, the more likely someone has a hand worth calling.\n- DON'T TELL AN IMPOSSIBLE STORY — if your betting represents a hand that can't exist given the action, smart players call. Pick believable spots and credible sizing.",
        ],
        codeExample: {
          label: "Semi-bluff vs pure bluff",
          code: `  SEMI-BLUFF  (preferred):
    you hold  J♠T♠  on  9♠ 8♠ 2♦
    -> open-ended straight + flush draw
    -> BET: win now if they fold, OR hit a monster later

  PURE BLUFF (use sparingly):
    you hold  7♦6♦  on  A♣ K♠ Q♦
    -> no real equity; only wins if they fold
    -> needs a believable story + a folding opponent`,
        },
      },
      incident: {
        title: "The Bluff That Built a Legend",
        when: "2009 WSOP",
        where: "World Series of Poker",
        impact: "Iconic televised bluffs — and equally famous failed ones — taught a generation that poker is a battle of stories, not just cards",
        body: [
          "Televised poker turned big bluffs into legend. Players became famous for fearless, well-timed bluffs that won enormous pots with nothing — and infamous for spectacular bluffs that got snapped off on camera. Either way, audiences learned that poker is a psychological duel layered on top of the cards.",
          "The lasting lesson from these moments is that great bluffing is disciplined, not crazy:\n- The best bluffs told a story the opponent believed, in a spot where folding made sense.\n- The worst ran into a player who couldn't fold, or represented a hand that didn't add up.\n- Knowing when NOT to bluff — against a calling station, into a crowd, on the wrong board — is just as valuable as the bluff itself.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Semi-Bluff", sub: "bet a draw — two ways to win", type: "system" },
          { label: "Tell a Story", sub: "consistent bets, normal sizing", type: "attacker" },
          { label: "Read Betting Tells", sub: "patterns beat body language", type: "victim" },
          { label: "Manage Your Image", sub: "tight image = respected bluffs", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' preaches aggression and the power of the bet" },
        { year: 2003, event: "Hole-card TV reveals bluffs to the public for the first time", highlight: true },
        { year: 2014, event: "Mike Caro's tell research popularized; betting patterns proven more reliable" },
        { year: 2024, event: "Solver-era 'balanced' bluffing becomes mainstream strategy" },
      ],
      keyTakeaways: [
        "A bluff bets a weaker hand to make opponents fold; the semi-bluff (betting a draw) is the safest kind",
        "Good bluffs tell a consistent story with believable bet sizing and pick the right spots",
        "Betting patterns are far more reliable tells than physical 'Hollywood' tells",
        "Don't bluff calling stations or many opponents at once; manage your table image",
      ],
      references: [
        { title: "Bluff (poker)", url: "https://en.wikipedia.org/wiki/Bluff_(poker)" },
        { title: "Tell (poker)", url: "https://en.wikipedia.org/wiki/Tell_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-07-q1", type: "Semi-Bluff", challenge: "Two ways to win.", text: "What is a 'semi-bluff'?", options: ["Betting a drawing hand that can improve, so you win by a fold or by hitting", "Betting only with the nuts", "Folding a strong hand", "Checking every street"], correctIndex: 0, explanation: "A semi-bluff bets a draw — you win if they fold now or if you complete your hand later." },
        { id: "poker-1-07-q2", type: "Sizing", challenge: "Hide the bluff.", text: "Why should bluffs be sized like value bets?", options: ["So opponents can't tell bluffs and value bets apart", "To save chips", "Because rules require it", "To always bet small"], correctIndex: 0, explanation: "Matching your bluff and value sizing makes you unpredictable and hard to read." },
        { id: "poker-1-07-q3", type: "Tells", challenge: "What to trust.", text: "Which kind of tell is generally most reliable?", options: ["Betting patterns", "Shaky hands", "Staring", "Talkativeness"], correctIndex: 0, explanation: "How a player bets over time is far more trustworthy than physical tells." },
        { id: "poker-1-07-q4", type: "Targeting", challenge: "Wrong target.", text: "Whom should you avoid bluffing?", options: ["A 'calling station' who calls with almost anything", "A very tight player", "A player who folds often", "A short stack about to fold"], correctIndex: 0, explanation: "Calling stations don't fold, so bluffing them just loses chips — value bet them instead." },
        { id: "poker-1-07-q5", type: "Image", challenge: "Reputation matters.", text: "Why does a tight player's bluff work better?", options: ["Their tight image makes opponents believe their bets and fold", "Tight players have better cards", "Image doesn't matter", "Bluffs always work"], correctIndex: 0, explanation: "Table image shapes how bets are read; a respected tight image earns folds." },
      ],
    },
  },

  // ─── poker-1-08: Cash Games vs Tournaments ───────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "Cash game vs tournament", location: "Two ways to play", era: "Modern", emoji: "🏆" },
    id: "poker-1-08",
    order: 8,
    title: "Cash Games vs Tournaments",
    subtitle: "Structures, stack sizes, and why strategy shifts",
    category: "sports",
    xp: 100,
    badge: { id: "poker-badge-08", name: "Format Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "The same game of Hold'em is played two very different ways. In cash games, chips are money and the blinds never change; in tournaments, everyone starts equal, the blinds keep rising, and survival itself has value. Each format rewards a different strategy.",
      year: 2024,
      overview: [
        "In a CASH GAME (also called a 'ring game'):\n- Chips equal real money — a $1 chip is a dollar, and you can buy more ('rebuy') or leave with your stack at any time.\n- The blinds stay the same all session, so there's no clock pressure.\n- You typically sit with a deep stack (often 100 big blinds), which allows more post-flop play and bigger implied odds.",
        "In a TOURNAMENT:\n- Everyone pays one buy-in for the same number of tournament chips, which have no cash value — you play until you have all the chips or you're out.\n- The blinds RISE on a timer (levels), constantly shrinking everyone's stack in 'big blinds' and forcing action.\n- Payouts go to the top finishers, so the goal is to survive and accumulate, not to maximize chips on any one hand.",
        "These differences flip strategy in important ways:\n- STACK DEPTH drives play: deep stacks (cash) favor careful post-flop play; short stacks (late tournament) favor all-in 'push/fold' decisions before the flop.\n- SURVIVAL HAS VALUE in tournaments — busting means you can't win anything, so you sometimes fold hands you'd happily play for cash.\n- RISING BLINDS force tournament players to take risks before they get 'blinded out', a pressure that simply doesn't exist in a cash game.",
      ],
      technical: {
        title: "Stack Sizes in Big Blinds, ICM, and Push/Fold",
        body: [
          "Everything in tournaments is measured in big blinds (BB), not dollars:\n- A 'big stack' might be 60+ BB (room to maneuver); a 'short stack' is roughly 10–15 BB or fewer (time to look for an all-in).\n- As the blinds rise, even a large chip count can become 'short' in BB terms, which is why you must keep accumulating.\n- Around 10 BB or less, play becomes 'push or fold': you either move all-in or fold preflop, because there isn't enough behind to play after the flop.",
          "The defining tournament concept is ICM (the Independent Chip Model):\n- ICM says tournament chips aren't worth a fixed cash amount — the chips you'd win are worth less than the chips you'd lose, because busting forfeits all future prize equity.\n- Near a pay jump (like the money 'bubble' or a final-table ladder), ICM makes you fold hands you'd call in a cash game, to avoid risking elimination.\n- In a cash game there's no ICM — a chip is always a chip — so you simply make the most +EV play every hand. Understanding when survival has value (tournament) versus when it doesn't (cash) is the heart of choosing the right strategy.",
        ],
        codeExample: {
          label: "Cash vs tournament at a glance",
          code: `                CASH GAME        TOURNAMENT
  chips = money     YES              NO (no cash value)
  blinds            fixed            rise on a timer
  stack depth       usually deep     shrinks over time
  re-enter?         rebuy anytime    only if 'rebuy' event
  survival value    none (chip=$$)   HIGH (bust = out)
  late-game style   post-flop play   push/fold + ICM`,
        },
      },
      incident: {
        title: "The Moneymaker Effect and the Tournament Boom",
        when: "2003",
        where: "WSOP Main Event, Las Vegas",
        impact: "An amateur winning a $10,000 tournament via a $86 online satellite triggered a global poker boom centered on tournaments",
        body: [
          "In 2003, an accountant named Chris Moneymaker won the WSOP Main Event — a $2.5 million tournament prize — after qualifying through an $86 online satellite. The story that an amateur could turn pocket change into millions, broadcast with hole-card cameras, set off the 'poker boom' and made the multi-table tournament the dream format for millions of new players.",
          "The boom highlighted exactly why tournament strategy differs from cash:\n- Players had to learn survival, rising blinds, and short-stack push/fold — skills a cash game never demanded.\n- ICM and bubble play became essential knowledge as huge fields laddered up to life-changing prizes.\n- Yet the underlying game was identical Hold'em; only the structure changed the optimal decisions — the perfect illustration of why format awareness matters.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Cash: Chips = Money", sub: "fixed blinds, deep stacks", type: "system" },
          { label: "Tournament: Rising Blinds", sub: "survive and accumulate", type: "attacker" },
          { label: "Count Your Big Blinds", sub: "deep vs short stack", type: "victim" },
          { label: "ICM & Push/Fold", sub: "survival has value", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "The WSOP establishes the freezeout tournament format" },
        { year: 2003, event: "Chris Moneymaker's win sparks the tournament boom", highlight: true },
        { year: 2007, event: "ICM and push/fold charts become standard tournament tools" },
        { year: 2024, event: "Online and live tournaments draw record global fields" },
      ],
      keyTakeaways: [
        "Cash games: chips are money, blinds are fixed, stacks are deep, and you can rebuy or leave anytime",
        "Tournaments: equal start, rising blinds, no cash value to chips, and you play until you bust or win it all",
        "Measure tournament stacks in big blinds; around 10 BB or fewer, play 'push or fold'",
        "ICM means survival has value in tournaments — fold hands near pay jumps you'd play for cash",
      ],
      references: [
        { title: "Independent Chip Model (ICM)", url: "https://en.wikipedia.org/wiki/Independent_Chip_Model" },
        { title: "Chris Moneymaker", url: "https://en.wikipedia.org/wiki/Chris_Moneymaker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-08-q1", type: "Cash Game", challenge: "Chips and blinds.", text: "In a cash game, what is true of the chips and blinds?", options: ["Chips equal real money and the blinds stay fixed", "Chips have no value and blinds rise", "You can never rebuy", "Blinds disappear after the flop"], correctIndex: 0, explanation: "In cash games a chip is a dollar and blinds never change during the session." },
        { id: "poker-1-08-q2", type: "Tournament", challenge: "The clock.", text: "What happens to the blinds in a tournament?", options: ["They rise on a timer, shrinking everyone's stack in big blinds", "They stay the same", "They are removed", "Only the dealer pays them"], correctIndex: 0, explanation: "Rising blinds force action and constantly reduce stack sizes measured in big blinds." },
        { id: "poker-1-08-q3", type: "Stacks", challenge: "Short stack play.", text: "With about 10 big blinds or fewer, how should you generally play preflop?", options: ["Push or fold (move all-in or fold)", "Always call", "Always check", "Limp every hand"], correctIndex: 0, explanation: "Short stacks lack chips to play post-flop, so the optimal style is push/fold." },
        { id: "poker-1-08-q4", type: "ICM", challenge: "Survival value.", text: "What does ICM tell tournament players?", options: ["Survival has value — chips you'd lose are worth more than chips you'd win near pay jumps", "Chips always equal cash", "Bluffing is illegal", "You should never fold"], correctIndex: 0, explanation: "ICM makes you avoid risking elimination near the money, unlike a cash game." },
        { id: "poker-1-08-q5", type: "History", challenge: "The boom.", text: "Whose 2003 WSOP win triggered the tournament 'poker boom'?", options: ["Chris Moneymaker", "Doyle Brunson", "Phil Hellmuth", "Johnny Chan"], correctIndex: 0, explanation: "Amateur Chris Moneymaker qualified online for $86 and won millions, sparking the boom." },
      ],
    },
  },

  // ─── poker-1-09: Bankroll & The Mental Game ──────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "Bankroll & tilt", location: "The discipline behind the cards", era: "Modern", emoji: "🧘" },
    id: "poker-1-09",
    order: 9,
    title: "Bankroll & The Mental Game",
    subtitle: "Variance, managing your money, and beating tilt",
    category: "sports",
    xp: 102,
    badge: { id: "poker-badge-09", name: "Iron Discipline", emoji: "🧘" },
    challengeType: "quiz",
    info: {
      tagline: "You can play perfectly and still lose for a week — that's variance. The players who survive and win long-term aren't just skilled; they manage their money carefully and keep their emotions in check. Bankroll and the mental game are where good players become winning players.",
      year: 2024,
      overview: [
        "Poker has 'variance' — the natural swings of luck over the short term:\n- Even a winning player will hit losing stretches ('downswings') and run hot at other times, purely by chance.\n- Because results are noisy, you can't judge a decision by whether one hand worked; you judge it by whether it's +EV over the long run.\n- Accepting variance is the foundation of both bankroll management and emotional control.",
        "Bankroll management is the rule that keeps variance from busting you:\n- Your 'bankroll' is the money set aside only for poker, separate from rent and life expenses.\n- A common guideline is to keep many buy-ins for your stake — often 20–40 buy-ins for cash games and 100+ for tournaments (which have higher variance).\n- Playing within your bankroll means a normal downswing can't wipe you out, so you can keep playing your best and let your edge work over time.",
        "The mental game is about controlling 'tilt':\n- TILT is letting emotion — frustration after a bad beat, fear, boredom, or overconfidence — push you into bad decisions.\n- A tilting player chases losses, plays too many hands, and bluffs wildly, turning a small loss into a disaster.\n- The fixes are practical: take breaks, set stop-loss limits, focus on decisions (not results), and quit when you're not playing your best. Discipline off the felt protects your edge on it. And always play responsibly — poker should stay fun and within your means.",
      ],
      technical: {
        title: "Why Bankroll Math Works, and Spotting Your Own Tilt",
        body: [
          "Bankroll guidelines come from the math of risk of ruin:\n- 'Risk of ruin' is the probability of losing your whole bankroll given your edge and the game's variance. More buy-ins and a bigger edge both drive it toward zero.\n- Higher-variance games (tournaments, loose tables) need more buy-ins; lower-variance games need fewer.\n- Moving down in stakes during a downswing is not a defeat — it's bankroll management protecting your ability to keep playing.",
          "Beating tilt starts with self-awareness:\n- Learn your personal triggers (a specific bad beat, a needling opponent, being card-dead) and your warning signs (faster decisions, anger, wanting 'revenge').\n- Use rules you set in advance: a stop-loss (quit after losing X), scheduled breaks, and a pre-session reminder that you're playing for long-term EV, not this hand.\n- Separate the quality of your decision from the result of the hand: a correct call that loses is still a good call. Players who internalize this stay calm, keep making +EV plays, and outlast those who melt down.",
        ],
        codeExample: {
          label: "Bankroll guidelines (rough)",
          code: `  FORMAT            SUGGESTED CUSHION
  cash (full ring)   20-40 buy-ins
  cash (aggressive)  40-50 buy-ins
  tournaments        100+ buy-ins (high variance!)

  RULES THAT SAVE PLAYERS:
   - keep poker money separate from life money
   - move DOWN in stakes during a downswing
   - set a stop-loss; take breaks; quit when tilted`,
        },
      },
      incident: {
        title: "Why Pros Talk About Mindset as Much as Cards",
        when: "2010s–present",
        where: "Professional poker",
        impact: "The rise of dedicated poker 'mental game' coaching showed that emotional control and bankroll discipline separate long-term winners from talented players who go broke",
        body: [
          "As poker matured, a striking pattern emerged: plenty of technically gifted players still went broke, while disciplined, even-keeled players quietly built careers. This led to an entire field of 'mental game' coaching, with books and coaches devoted to tilt control, focus, and handling variance — proof that mindset is a core poker skill, not a soft add-on.",
          "The takeaways apply to a kitchen-table player as much as a pro:\n- Bankroll discipline ensures you're never playing scared or risking money you can't afford to lose.\n- Tilt control ensures a few bad beats don't snowball into a blown session.\n- Judging yourself by decision quality, not short-term results, keeps you improving and emotionally steady — and keeps the game enjoyable and responsible.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Accept Variance", sub: "luck swings short-term", type: "system" },
          { label: "Manage Your Bankroll", sub: "many buy-ins, money set aside", type: "attacker" },
          { label: "Control Tilt", sub: "breaks, stop-loss, self-awareness", type: "victim" },
          { label: "Judge Decisions, Not Results", sub: "long-term EV wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "Early strategy books warn against playing over your bankroll" },
        { year: 2007, event: "Online grinders formalize buy-in-based bankroll rules" },
        { year: 2011, event: "Dedicated 'mental game of poker' coaching emerges", highlight: true },
        { year: 2024, event: "Tilt control and bankroll discipline are core to serious play" },
      ],
      keyTakeaways: [
        "Variance means even great players have losing stretches — judge decisions by long-term EV, not single results",
        "Keep a separate bankroll with many buy-ins (more for higher-variance tournaments) to survive downswings",
        "Tilt is letting emotion drive bad decisions; beat it with breaks, stop-losses, and self-awareness",
        "Move down in stakes during a downswing, and always play within your means and responsibly",
      ],
      references: [
        { title: "Bankroll (poker) — variance & management", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms#bankroll" },
        { title: "Risk of ruin (gambling)", url: "https://en.wikipedia.org/wiki/Risk_of_ruin" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-09-q1", type: "Variance", challenge: "Short-term luck.", text: "What is 'variance' in poker?", options: ["The natural short-term swings of luck around your long-term edge", "A type of bet", "The casino's fee", "A starting hand"], correctIndex: 0, explanation: "Variance is why even winning players have downswings; the edge shows up over the long run." },
        { id: "poker-1-09-q2", type: "Bankroll", challenge: "Protect yourself.", text: "Why keep many buy-ins in your bankroll?", options: ["So a normal downswing can't wipe you out and you can keep playing your best", "To impress opponents", "Because the rules require it", "To bet bigger every hand"], correctIndex: 0, explanation: "A cushion of buy-ins lets your skill edge survive the inevitable swings." },
        { id: "poker-1-09-q3", type: "Tilt", challenge: "The danger.", text: "What is 'tilt'?", options: ["Letting emotion push you into bad decisions", "A winning strategy", "A type of shuffle", "Folding too much"], correctIndex: 0, explanation: "Tilt is emotional play — chasing losses and abandoning good decisions — and it's costly." },
        { id: "poker-1-09-q4", type: "Mindset", challenge: "Judge what?", text: "How should you evaluate your own play?", options: ["By the quality of your decisions, not the result of a single hand", "By whether you won the last hand", "By how big your bluffs were", "By how many hands you played"], correctIndex: 0, explanation: "A correct decision can still lose a hand; long-term, good decisions win." },
        { id: "poker-1-09-q5", type: "Discipline", challenge: "Downswing move.", text: "What's a smart response to a long downswing?", options: ["Move down in stakes to protect your bankroll", "Move up to win it back faster", "Bet your whole bankroll", "Play more tilted"], correctIndex: 0, explanation: "Dropping stakes preserves your bankroll and your ability to keep playing." },
      ],
    },
  },

  // ─── poker-1-10: Putting It Together ──────────────────────────────────────────
  {
    epochId: "poker-1",
    wonder: { name: "The thinking player", location: "From rules to real strategy", era: "Modern", emoji: "♠️" },
    id: "poker-1-10",
    order: 10,
    title: "Putting It All Together",
    subtitle: "Ranges, GTO vs exploitative, and how to keep improving",
    category: "sports",
    xp: 110,
    badge: { id: "poker-badge-10", name: "Thinking Player", emoji: "♠️" },
    challengeType: "quiz",
    info: {
      tagline: "You now know the rules, the math, the reads, and the discipline. The final leap is learning to think in 'ranges' instead of single hands, and to understand the two great strategic philosophies — GTO and exploitative play — that define modern poker. This is where a beginner becomes a player.",
      year: 2024,
      overview: [
        "The biggest mental upgrade in poker is thinking in RANGES, not single hands:\n- Instead of guessing 'does he have aces?', you ask 'what is the whole set of hands he'd play this way?' — his range.\n- You then play well against that entire range, betting hands that beat most of it and folding hands that beat little of it.\n- Strong players also keep their own range balanced and hard to read, which ties together everything from starting hands to bluffing.",
        "Two philosophies guide strategic decisions:\n- GTO (Game Theory Optimal) — a balanced, mathematically sound strategy that can't be exploited no matter what opponents do. It mixes value bets and bluffs in the right proportions, so you never give anything away.\n- EXPLOITATIVE play — deliberately deviating from balance to punish a specific opponent's mistakes (e.g., bluffing a nit who folds too much, or value-betting a calling station relentlessly).\n- The practical answer: use GTO as a baseline so you're tough to beat, and deviate exploitatively when an opponent shows a clear, repeated leak.",
        "Improvement is a lifelong process, and the path is well-worn:\n- STUDY — review your hands, learn from books, training sites, and solvers, and focus on your biggest leaks first.\n- PLAY WITH PURPOSE — apply one concept at a time (position, pot odds, ranges) until it's automatic.\n- STAY HUMBLE AND CURIOUS — even the best players keep learning, because the game keeps evolving. Combine solid fundamentals with discipline, and you'll beat the vast majority of players you meet.",
      ],
      technical: {
        title: "How the Pieces Fit: A Hand from Start to Finish",
        body: [
          "Every skill in this epoch comes together in a single decision:\n- PREFLOP, you use starting-hand and position knowledge to enter with a sensible range.\n- ON THE FLOP/TURN, you read the board texture and the nuts, estimate your equity with outs and the Rule of 2 and 4, and weigh pot odds.\n- AS YOU ACT, you consider your opponent's likely range, tell a consistent story with your bets, and choose value bets or semi-bluffs — all while staying within your bankroll and free of tilt.",
          "The history of poker strategy mirrors this layering:\n- Doyle Brunson's 'Super/System' (1979) taught aggression and feel; Sklansky added starting-hand science; the online era added databases and statistics.\n- The modern 'solver' era brought GTO, computing balanced strategies that humans now study and approximate.\n- Yet the human edge remains in reading opponents and exploiting their mistakes — which is why poker stays a game of skill, math, and psychology all at once. Master the fundamentals in this epoch, keep studying, and the rest is a lifetime of enjoyable improvement.",
        ],
        codeExample: {
          label: "GTO baseline + exploitative deviation",
          code: `  DEFAULT (GTO):
    play a balanced range; mix value bets and bluffs
    -> result: opponents can't exploit you

  THEN ADJUST (EXPLOITATIVE):
    opponent folds too much  -> bluff them MORE
    opponent calls too much  -> bluff LESS, value bet MORE
    opponent is predictable   -> attack their pattern

  EDGE = solid baseline + punishing real mistakes`,
        },
      },
      incident: {
        title: "From 'Super/System' to Solvers",
        when: "1979–present",
        where: "The evolution of poker strategy",
        impact: "Poker strategy advanced from Doyle Brunson's feel-based aggression to computer-derived GTO — yet the winning formula still blends fundamentals, reads, and discipline",
        body: [
          "When Doyle Brunson published 'Super/System' in 1979, he gave away the aggressive secrets that made him a champion, and it became the bible of poker for a generation. Decades later, powerful 'solvers' computed near-optimal (GTO) strategies, changing how serious players study the game forever.",
          "But the throughline of poker's whole history is simple:\n- The fundamentals — hand selection, position, odds, board reading, and discipline — have never stopped mattering.\n- Technology refined the strategy, but the winning player still combines a solid baseline with the human skills of reading and exploiting opponents.\n- That's the perfect note to end on: you've built the fundamentals, and from here every hand you play with intention makes you better.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Think in Ranges", sub: "not single hands", type: "system" },
          { label: "GTO Baseline", sub: "balanced, unexploitable", type: "attacker" },
          { label: "Exploit Mistakes", sub: "punish opponents' leaks", type: "victim" },
          { label: "Study & Improve", sub: "a lifelong edge", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "Doyle Brunson's 'Super/System' codifies aggressive winning play", highlight: true },
        { year: 2003, event: "The poker boom brings millions of new students to the game" },
        { year: 2015, event: "Solvers compute GTO strategies, reshaping serious study" },
        { year: 2024, event: "Top play blends GTO baselines with exploitative reads" },
      ],
      keyTakeaways: [
        "Think in ranges — the full set of hands an opponent could hold — not single guessed hands",
        "GTO is a balanced, unexploitable baseline; exploitative play deviates to punish a specific opponent's leaks",
        "Use GTO as your default and adjust exploitatively when someone shows a clear, repeated mistake",
        "Keep improving by studying your hands, applying one concept at a time, and staying humble — poker is a lifelong skill",
      ],
      references: [
        { title: "Doyle Brunson — Super/System", url: "https://en.wikipedia.org/wiki/Super/System" },
        { title: "Game-theory-optimal play (poker)", url: "https://en.wikipedia.org/wiki/Poker_strategy" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-1-10-q1", type: "Ranges", challenge: "The big upgrade.", text: "What does it mean to think in 'ranges'?", options: ["Considering the whole set of hands an opponent could have, not just one", "Only playing your best hand", "Betting the same amount always", "Memorizing the deck"], correctIndex: 0, explanation: "Range thinking weighs all the hands an opponent would play a certain way, leading to better decisions." },
        { id: "poker-1-10-q2", type: "GTO", challenge: "Balanced play.", text: "What is GTO (Game Theory Optimal) play?", options: ["A balanced strategy that can't be exploited regardless of opponents", "Always bluffing", "Always folding", "Copying the dealer"], correctIndex: 0, explanation: "GTO mixes value and bluffs in correct proportions so opponents can't exploit you." },
        { id: "poker-1-10-q3", type: "Exploitative", challenge: "Punish the leak.", text: "How do you play exploitatively against an opponent who folds far too much?", options: ["Bluff them more often", "Bluff them less", "Only value bet", "Stop playing hands"], correctIndex: 0, explanation: "Against an over-folder, increasing your bluffs profits from their mistake." },
        { id: "poker-1-10-q4", type: "Approach", challenge: "Best of both.", text: "What's the practical way to combine GTO and exploitative play?", options: ["Use GTO as a baseline and deviate to exploit clear, repeated mistakes", "Only ever play GTO", "Never study GTO", "Always play randomly"], correctIndex: 0, explanation: "A solid GTO baseline makes you hard to beat; exploitative deviations punish real leaks." },
        { id: "poker-1-10-q5", type: "History", challenge: "The classic text.", text: "Whose 1979 book 'Super/System' became the bible of aggressive poker?", options: ["Doyle Brunson", "Chris Moneymaker", "John von Neumann", "Phil Ivey"], correctIndex: 0, explanation: "Doyle Brunson's 'Super/System' shared the aggressive strategy that defined a generation." },
      ],
    },
  },
];
