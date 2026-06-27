import type { StageConfig, EpochConfig } from "./types";

export const euchre1Epoch: EpochConfig = {
  id: "euchre-1",
  name: "Euchre",
  subtitle: "The fast, friendly trick-taking game of the Midwest and Ontario",
  description:
    "Euchre — the quick, partnership trick-taking card game that rules kitchen tables across the American Midwest and Ontario, Canada, and the game that famously put the Joker in the modern deck — taught from the ground up. This epoch builds you from a beginner into a confident player: the short 24-card deck and its odd ranking, the all-important bowers (the right and left Jacks), the deal and the turn-up, the two rounds of making trump, the brutal beginner trap of following suit with the left bower, taking tricks and scoring, the high-reward play of going alone, the strategy of ordering up versus passing, and the variants and etiquette that define the culture of the game. A game of memory, partnership, and nerve.",
  emoji: "🃏",
  color: "green",
  unlocked: true,
};

export const euchre1Stages: StageConfig[] = [
  // ─── euchre-1-01: What Is Euchre ─────────────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The Euchre table", location: "Kitchen tables of the Midwest and Ontario", era: "Modern", emoji: "🃏" },
    id: "euchre-1-01",
    order: 1,
    title: "What Is Euchre",
    subtitle: "A fast 4-player partnership trick-taking game",
    category: "sports",
    xp: 85,
    badge: { id: "euchre-badge-01", name: "Pulled Up a Chair", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "Four players, two teams, a short deck of just 24 cards, and a race to 10 points. Euchre is quick to deal and quicker to play — a partnership game of memory, trumps, and bluff that has anchored card tables across the Midwest and Canada for over a century.",
      year: 2024,
      overview: [
        "Euchre is a trick-taking card game played by four people in two fixed partnerships, with partners sitting across the table from each other. It uses a short deck and a designated 'trump' suit, and the goal of each hand is simply to win the majority of the tricks. It is famous for being fast, social, and easy to learn — a single hand takes only a minute or two, and a full game is over quickly.",
        "A few features define the game:\n- A SHORT DECK — Euchre uses only 24 cards (the 9, 10, Jack, Queen, King, and Ace of each suit). Some variants add a Joker for 25 cards, or extra low cards for a 32-card deck.\n- PARTNERSHIPS — it is a 2-versus-2 team game; you and your partner sit opposite each other and win or lose together.\n- A TRUMP SUIT — one suit is chosen as trump each hand, and trump cards beat all other suits, which makes choosing trump the heart of the game.",
        "Every hand follows the same shape:\n- The dealer gives each player five cards, and the top card of the leftover stack (the 'kitty') is turned face-up as a proposed trump.\n- Players bid to decide the trump suit, and the team that names it (the 'makers') must win at least three of the five tricks.\n- Tricks are played out one card per player, the highest trump (or highest card of the led suit) wins each trick, and points are scored. The first team to reach 10 points wins the game.",
      ],
      technical: {
        title: "Why Only 24 Cards, and the Race to 10",
        body: [
          "The short deck is what gives Euchre its speed and character:\n- Stripping a standard 52-card deck down to the 9 through Ace in each suit leaves 24 cards — exactly enough to deal five to four players (20) plus a four-card kitty.\n- With so few cards, players quickly learn which high cards are still 'live', so memory and card-counting matter from the very first trick.\n- Because each hand is only five tricks, swings are fast and a single good or bad decision can decide the hand.",
          "Scoring drives the whole game toward 10 points:\n- The makers score 1 point for winning 3 or 4 tricks, 2 points for sweeping all 5 (a 'march'), and the most dramatic results come from 'going alone'.\n- If the makers fail to win 3 tricks they are 'euchred', and the other team scores 2 points instead — a punishment that shapes every bidding decision.\n- The first partnership to 10 points wins; many tables keep score with two spare cards (a Five and a Six, or two face cards) fanned to show their total.",
        ],
        codeExample: {
          label: "The Euchre table and one hand",
          code: `  THE TABLE (partners sit opposite):
                PARTNER (North)
                    |
       WEST  ----  POT  ----  EAST   (opponents)
                    |
                  YOU (South)

  THE DEAL:   24 cards -> 5 to each player (20)
              + 4-card KITTY in the middle
              top kitty card turned FACE-UP = proposed trump

  THE GOAL:   makers must win 3 of 5 tricks
              first team to 10 POINTS wins the game`,
        },
      },
      incident: {
        title: "The Game That Put the Joker in the Deck",
        when: "1860s America",
        where: "The American frontier and Midwest",
        impact: "Euchre's popularity in 19th-century America led card makers to add a brand-new card — the Joker — to the standard deck specifically to serve as Euchre's top trump",
        body: [
          "Euchre was the most popular card game in the United States through much of the 19th century, and it left a permanent mark on every deck of cards sold today. American players wanted an extra top trump card for the game, and in the 1860s card manufacturers obliged by printing a new, special card. That card became known as the Joker — and it was created for Euchre.",
          "The game itself has older European roots:\n- Euchre is widely believed to descend from an Alsatian game called Juckerspiel, carried to America by German-speaking immigrants in the early 1800s.\n- It spread across the frontier and became a national pastime before being overtaken by other games, but it never lost its strongholds.\n- To this day Euchre remains hugely popular in the American Midwest and in Ontario, Canada, where it is a fixture of family gatherings, clubs, and church-hall tournaments.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Short 24-Card Deck", sub: "9 through Ace in each suit", type: "system" },
          { label: "Deal Five Each", sub: "+ a four-card kitty", type: "attacker" },
          { label: "Name Trump & Play Tricks", sub: "makers need 3 of 5", type: "victim" },
          { label: "First to 10 Wins", sub: "march and loner bonuses", type: "result" },
        ],
      },
      timeline: [
        { year: 1810, event: "Euchre arrives in America, likely from the Alsatian game Juckerspiel" },
        { year: 1850, event: "Euchre becomes one of the most popular card games in the United States" },
        { year: 1860, event: "Card makers add the Joker to the deck as a top trump for Euchre", highlight: true },
        { year: 2024, event: "Euchre remains a staple in the U.S. Midwest and Ontario, Canada" },
      ],
      keyTakeaways: [
        "Euchre is a four-player partnership trick-taking game; partners sit across from each other",
        "It uses a short 24-card deck (9, 10, J, Q, K, A in each suit); some variants use 25 or 32 cards",
        "The makers must win at least 3 of the 5 tricks each hand; first team to 10 points wins",
        "Euchre's 19th-century popularity is the reason the Joker was added to the modern deck",
      ],
      references: [
        { title: "Euchre — overview", url: "https://en.wikipedia.org/wiki/Euchre" },
        { title: "Joker (playing card) — origin", url: "https://en.wikipedia.org/wiki/Joker_(playing_card)" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-01-q1", type: "Core Idea", challenge: "Players and teams.", text: "How is Euchre structured as a game?", options: ["Four players in two fixed partnerships, partners sitting opposite each other", "Two players head-to-head", "Six players, every person for themselves", "Four players with no teams"], correctIndex: 0, explanation: "Standard Euchre is a 2-versus-2 partnership game; your partner sits directly across the table." },
        { id: "euchre-1-01-q2", type: "The Deck", challenge: "Count the cards.", text: "How many cards are in a standard Euchre deck?", options: ["24 (9, 10, J, Q, K, A in each suit)", "52 (a full deck)", "32 (7 through Ace)", "20 (10 through Ace)"], correctIndex: 0, explanation: "Standard Euchre strips the deck to the 9 through Ace in each suit — 24 cards." },
        { id: "euchre-1-01-q3", type: "Winning", challenge: "The target score.", text: "How many points does a team need to win a game of Euchre?", options: ["10 points", "21 points", "5 points", "100 points"], correctIndex: 0, explanation: "The first partnership to reach 10 points wins the game." },
        { id: "euchre-1-01-q4", type: "The Makers", challenge: "The bar to clear.", text: "How many of the five tricks must the team that names trump win?", options: ["At least three", "All five", "At least one", "Exactly four"], correctIndex: 0, explanation: "The makers must take at least 3 of the 5 tricks, or they are 'euchred' and the other team scores." },
        { id: "euchre-1-01-q5", type: "History", challenge: "A lasting mark.", text: "What famous card did Euchre's popularity add to the standard deck?", options: ["The Joker", "The Ace of Spades", "The Queen of Hearts", "The blank card"], correctIndex: 0, explanation: "Card makers created the Joker in the 1860s as an extra top trump for Euchre." },
      ],
    },
  },

  // ─── euchre-1-02: The Deck & Card Ranking ────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The 24-card deck", location: "Every Euchre hand", era: "Modern", emoji: "🎴" },
    id: "euchre-1-02",
    order: 2,
    title: "The Deck & Card Ranking",
    subtitle: "Twenty-four cards, and which one beats which",
    category: "sports",
    xp: 88,
    badge: { id: "euchre-badge-02", name: "Knows the Cards", emoji: "🎴" },
    challengeType: "quiz",
    info: {
      tagline: "Before you can win a trick you have to know which card is higher. In Euchre the ranking is simple in the three plain suits — but the trump suit has a famous twist that turns the usual order on its head.",
      year: 2024,
      overview: [
        "A Euchre deck has 24 cards: the 9, 10, Jack, Queen, King, and Ace of each of the four suits. There is no 2 through 8, which is why high cards dominate and even a '9' can matter. Learning the deck is the first step; learning the ranking is the second.",
        "In any NON-TRUMP (plain) suit, the ranking is the natural one you would expect:\n- ACE is high, then KING, then QUEEN, then JACK, then 10, then 9 (the lowest).\n- This is the ordinary high-to-low order, the same as in most card games.\n- All three suits that are not trump follow this same plain ranking for the whole hand.",
        "In the TRUMP suit, the ranking is special and is the single thing that makes Euchre Euchre:\n- The Jack of the trump suit is NOT a middling card — it becomes the highest card in the entire deck (the 'right bower').\n- The other Jack of the same COLOR jumps up to become the second-highest trump (the 'left bower').\n- These two bower rules are covered in full in the next stage, but the key idea is: in trump, the Jacks rule, and you must never assume the Ace is the top trump.",
      ],
      technical: {
        title: "Plain-Suit Order and the Trump Exception",
        body: [
          "It helps to hold two pictures in your head at once:\n- PLAIN SUITS: A, K, Q, J, 10, 9 from highest to lowest — clean and familiar.\n- TRUMP SUIT: right bower (Jack of trump), left bower (other Jack of the same color), then A, K, Q, 10, 9 — note the Jack of trump is removed from its normal spot and the same-color Jack is borrowed in from another suit.\n- Every plain card, no matter how high, loses to even the lowest trump (the trump 9), because trumps outrank all plain suits.",
          "A couple of points trip up beginners:\n- The Ace is the boss of a PLAIN suit, but in the TRUMP suit it is only the third-highest card, behind both bowers.\n- Because two Jacks (the bowers) leave their printed suits to act as trump, the trump suit effectively has SEVEN cards and the same-color non-trump suit has only five.\n- You never need to memorize odds — you just need this ranking automatic, so you instantly know whether your card wins a trick.",
        ],
        codeExample: {
          label: "Card ranking, plain vs trump",
          code: `  PLAIN SUIT (not trump) - high to low:
    A  >  K  >  Q  >  J  >  10  >  9

  TRUMP SUIT - high to low:
    RIGHT BOWER  (Jack of trump)        <- highest in deck
    LEFT BOWER   (other Jack, same color)
    A  >  K  >  Q  >  10  >  9

  RULE: any trump beats any plain-suit card,
        even the trump 9 beats a plain Ace.`,
        },
      },
      incident: {
        title: "The 9s and 10s That Don't Exist Elsewhere",
        when: "Every game",
        where: "The Euchre table",
        impact: "Because the deck is so short, low cards like the 9 and 10 carry weight they never would in a full-deck game — a quirk that surprises players coming from poker or rummy",
        body: [
          "Players who learn Euchre after games like poker or rummy are often surprised that a 9 or 10 can be a useful card. In a 52-card deck those are near the bottom, but in Euchre's 24-card deck they are the LOWEST cards in each suit, and with only six ranks per suit, a 10 of trump is a genuine middle-strength card that can win tricks late in the hand.",
          "This shortness shapes how the whole game feels:\n- With so few cards, you can often deduce exactly which high cards remain in other players' hands.\n- A trump 9 or 10 is worthless on its own but valuable as a card you can play to 'trump in' and steal a trick.\n- Knowing the exact ranking — plain suits natural, trump topped by the two bowers — is the foundation every later strategy is built on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "24-Card Deck", sub: "9, 10, J, Q, K, A x four suits", type: "system" },
          { label: "Plain Suits", sub: "A high down to 9 low", type: "attacker" },
          { label: "Trump Suit", sub: "bowers on top, then A K Q 10 9", type: "victim" },
          { label: "Trump Beats All", sub: "even the 9 of trump tops an Ace", type: "result" },
        ],
      },
      timeline: [
        { year: 1810, event: "Euchre's short-deck format arrives from continental Europe" },
        { year: 1860, event: "The 24-card (9-A) deck becomes the American standard for Euchre", highlight: true },
        { year: 1900, event: "Hoyle rulebooks codify the plain-suit and trump rankings" },
        { year: 2024, event: "The same 24-card ranking is used at tables across the Midwest and Ontario" },
      ],
      keyTakeaways: [
        "A Euchre deck is 24 cards: the 9, 10, J, Q, K, and A of each suit",
        "In plain (non-trump) suits, the order is A high down to 9 low",
        "In the trump suit the two Jacks (the bowers) are the top two cards; the Ace is only third",
        "Any trump card beats any plain-suit card — even the trump 9 beats a plain Ace",
      ],
      references: [
        { title: "Euchre — the cards and rank", url: "https://en.wikipedia.org/wiki/Euchre#The_cards" },
        { title: "Bower (card game term)", url: "https://en.wikipedia.org/wiki/Bower_(card_game)" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-02-q1", type: "Plain Suits", challenge: "Natural order.", text: "In a non-trump (plain) suit, which card is the highest?", options: ["The Ace", "The King", "The Jack", "The 9"], correctIndex: 0, explanation: "In plain suits the order is the natural A, K, Q, J, 10, 9 from high to low." },
        { id: "euchre-1-02-q2", type: "Deck Size", challenge: "What's in the deck.", text: "Which cards make up a standard Euchre deck?", options: ["9, 10, Jack, Queen, King, Ace of every suit", "Ace through King, all 52", "2 through 10 only", "Only the face cards and Aces"], correctIndex: 0, explanation: "Euchre uses the 9 through Ace in each suit — 24 cards total." },
        { id: "euchre-1-02-q3", type: "Trump Exception", challenge: "The top trump.", text: "In the trump suit, which card is the highest?", options: ["The Jack of trump (the right bower)", "The Ace of trump", "The King of trump", "The 9 of trump"], correctIndex: 0, explanation: "The Jack of the trump suit — the right bower — is the highest card in the whole deck." },
        { id: "euchre-1-02-q4", type: "Trump Beats Plain", challenge: "Low trump vs high plain.", text: "Does the 9 of trump beat the Ace of a plain suit?", options: ["Yes — any trump beats any plain-suit card", "No, the Ace is always highest", "Only on the last trick", "They tie"], correctIndex: 0, explanation: "Every trump outranks every plain-suit card, so even the lowly trump 9 beats a plain Ace." },
        { id: "euchre-1-02-q5", type: "The Ace in Trump", challenge: "Where the Ace sits.", text: "When its suit is trump, how high is the Ace?", options: ["Only third-highest, behind both bowers", "Still the highest card", "The lowest trump", "It is removed from play"], correctIndex: 0, explanation: "In the trump suit the two bowers outrank the Ace, leaving it third from the top." },
      ],
    },
  },

  // ─── euchre-1-03: The Bowers ─────────────────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The bowers", location: "The heart of every Euchre hand", era: "Modern", emoji: "👑" },
    id: "euchre-1-03",
    order: 3,
    title: "The Bowers — Right and Left",
    subtitle: "The two Jacks that rule the trump suit",
    category: "sports",
    xp: 96,
    badge: { id: "euchre-badge-03", name: "Bower Master", emoji: "👑" },
    challengeType: "quiz",
    info: {
      tagline: "If you learn one rule in Euchre, learn this one. The two top trumps are not the Ace and King — they are two Jacks called the 'bowers', and the left bower changes its suit. Misunderstanding the bowers is the single most common beginner mistake.",
      year: 2024,
      overview: [
        "When a suit becomes trump, the two highest cards in the entire deck are two specific Jacks, called the 'bowers' (from the German word 'Bauer', meaning farmer or knave):\n- The RIGHT BOWER is the Jack OF the trump suit. It is the single highest card in the game — nothing beats it.\n- The LEFT BOWER is the OTHER Jack of the same COLOR as trump. It becomes the second-highest card in the game.",
        "The left bower has a rule that catches every new player: it COUNTS AS A TRUMP CARD, not as a card of its printed suit.\n- Example: if HEARTS is trump, the right bower is the Jack of Hearts. The left bower is the Jack of DIAMONDS (the other red Jack).\n- For the rest of that hand, the Jack of Diamonds is treated as a HEART (a trump) for every purpose — leading, following suit, and winning tricks.\n- It is NOT a diamond anymore. If a diamond is led, you cannot 'follow suit' with the left bower, because it is no longer a diamond — it is a trump.",
        "So the full top of the trump suit, using hearts as trump, is:\n- 1st: Jack of Hearts (right bower)\n- 2nd: Jack of Diamonds (left bower — a 'borrowed' card now acting as a heart)\n- 3rd: Ace of Hearts, then King, Queen, 10, and 9 of Hearts.\n- The two colors pair up: hearts/diamonds are red, clubs/spades are black, so the left bower is always the same-color Jack.",
      ],
      technical: {
        title: "Why the Left Bower Trips Everyone Up",
        body: [
          "The mental model that prevents mistakes is: 'when this suit is trump, the same-color Jack moves into the trump suit and leaves its old suit behind.'\n- The trump suit temporarily GAINS a card (the left bower) and so has seven cards.\n- The same-color plain suit temporarily LOSES its Jack and so has only five cards.\n- Always identify both bowers the instant trump is set, before you play a single card.",
          "Two consequences flow from the left bower being a trump:\n- If TRUMP is led, you must play a trump if you have one — and the left bower counts, so you may be forced to play it.\n- If the left bower's PRINTED suit is led (e.g., a diamond is led when hearts are trump), the left bower does NOT count as that suit. You do not have to play it to follow suit, and if it is your only 'diamond', you are actually void in diamonds and may trump or discard.\n- This following-suit trap is so important it gets its own stage next — but it all starts here, with understanding that the left bower IS a trump.",
        ],
        codeExample: {
          label: "Bowers when HEARTS are trump",
          code: `  TRUMP = HEARTS  (red)

  TOP OF THE TRUMP SUIT (high to low):
    1. J of HEARTS    <- RIGHT BOWER  (highest card in deck)
    2. J of DIAMONDS  <- LEFT  BOWER  (same color; now a HEART)
    3. A of HEARTS
    4. K of HEARTS
    5. Q of HEARTS
    6. 10 of HEARTS
    7. 9 of HEARTS

  KEY: the J of DIAMONDS is now a TRUMP, not a diamond.
       If a diamond is led, it does NOT follow suit.`,
        },
      },
      incident: {
        title: "The Mistake Every New Player Makes Once",
        when: "Every beginner's first game",
        where: "Kitchen tables everywhere",
        impact: "Treating the left bower as its printed suit — or forgetting it is the second-highest trump — costs new players tricks and partners their patience, which is why veterans drill it first",
        body: [
          "Ask any experienced Euchre player and they will tell you the same story: a beginner holds the left bower, a card of its printed suit is led, and the beginner 'follows suit' by playing it — only to be told, often loudly, that it is a trump and was not theirs to play that way. Or the reverse: a beginner trumps in and is shocked their 'King of trump' lost to a Jack of a different suit.",
          "Veterans teach the bowers before anything else for good reason:\n- The bowers decide who wins most hands, because they are the two best cards.\n- Counting whether the bowers have been played is the most important card-counting skill in the game.\n- Once the bowers click — right bower is the trump Jack, left bower is the same-color Jack and is now a trump — the rest of Euchre falls into place. Drill them until they are second nature.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Right Bower", sub: "Jack of trump = highest card", type: "system" },
          { label: "Left Bower", sub: "same-color Jack = 2nd highest", type: "attacker" },
          { label: "It Becomes a Trump", sub: "no longer its printed suit", type: "victim" },
          { label: "Identify Both First", sub: "before playing any card", type: "result" },
        ],
      },
      timeline: [
        { year: 1810, event: "The 'bower' (from German 'Bauer', a Jack) arrives with the game" },
        { year: 1860, event: "Right and left bower rules become standardized in American play", highlight: true },
        { year: 1864, event: "The Joker is added as an even-higher 'best bower' in some rule sets" },
        { year: 2024, event: "The bowers remain the defining, most-taught rule of Euchre" },
      ],
      keyTakeaways: [
        "The right bower is the Jack of the trump suit — the highest card in the whole deck",
        "The left bower is the other Jack of the SAME COLOR — the second-highest card",
        "The left bower counts as a TRUMP, not as its printed suit, for the entire hand",
        "Identify both bowers the moment trump is set — they win most hands and are the key to card-counting",
      ],
      references: [
        { title: "Bower — right and left bowers", url: "https://en.wikipedia.org/wiki/Bower_(card_game)" },
        { title: "Euchre — rank of cards (bowers)", url: "https://en.wikipedia.org/wiki/Euchre#The_cards" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-03-q1", type: "Right Bower", challenge: "The top card.", text: "What is the 'right bower'?", options: ["The Jack of the trump suit — the highest card in the deck", "The Ace of trump", "The Jack of any suit", "The highest plain-suit card"], correctIndex: 0, explanation: "The right bower is the Jack of the trump suit and is the single highest card in Euchre." },
        { id: "euchre-1-03-q2", type: "Left Bower", challenge: "The second card.", text: "If hearts are trump, what is the left bower?", options: ["The Jack of Diamonds (the other red Jack)", "The Jack of Spades", "The Jack of Clubs", "The Ace of Hearts"], correctIndex: 0, explanation: "The left bower is the same-COLOR Jack; hearts are red, so it is the Jack of Diamonds." },
        { id: "euchre-1-03-q3", type: "Suit Change", challenge: "What it counts as.", text: "When hearts are trump, what suit does the left bower (Jack of Diamonds) count as?", options: ["It counts as a heart (a trump), not a diamond", "It is still a diamond", "It counts as both", "It has no suit"], correctIndex: 0, explanation: "The left bower becomes a trump for the whole hand and is no longer its printed suit." },
        { id: "euchre-1-03-q4", type: "Ranking", challenge: "Order at the top.", text: "With spades as trump, rank the top three trumps from highest.", options: ["Jack of Spades, Jack of Clubs, Ace of Spades", "Ace of Spades, King of Spades, Jack of Spades", "Jack of Clubs, Jack of Spades, Ace of Spades", "King of Spades, Queen of Spades, Jack of Spades"], correctIndex: 0, explanation: "Right bower (J♠), then left bower (J♣, same black color), then the Ace of trump." },
        { id: "euchre-1-03-q5", type: "Why It Matters", challenge: "Color pairing.", text: "Why is the left bower always the same color as the trump suit?", options: ["The two same-color suits pair up, so the matching-color Jack is borrowed as the left bower", "Because Jacks are always red", "It is a random rule", "Because the Ace decides it"], correctIndex: 0, explanation: "Hearts/diamonds are red and clubs/spades are black; the left bower is the Jack of the partner color." },
      ],
    },
  },

  // ─── euchre-1-04: The Deal & The Turn-Up ─────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The deal", location: "The start of every hand", era: "Modern", emoji: "🤲" },
    id: "euchre-1-04",
    order: 4,
    title: "The Deal & The Turn-Up",
    subtitle: "Five cards each, and the card that proposes trump",
    category: "sports",
    xp: 88,
    badge: { id: "euchre-badge-04", name: "Dealt In", emoji: "🤲" },
    challengeType: "quiz",
    info: {
      tagline: "Every Euchre hand begins the same way: five cards to each player dealt in little batches, and one card turned face-up in the middle. That single turned-up card sets the entire bidding in motion.",
      year: 2024,
      overview: [
        "The deal in Euchre is quick and has a traditional rhythm. The dealer deals clockwise, giving each of the four players five cards, but not all at once:\n- Cards are dealt in two passes, in batches of two and three (or three and two) per player — for example, '2, 3, 2, 3' on the first pass and the remainder on the second.\n- This dealing in 'twos and threes' is traditional and helps keep the deal honest and even.\n- After everyone has five cards, four cards remain undealt; these form the 'kitty' (also called the 'talon' or 'blind').",
        "The kitty is placed face-down in the center, and then the key move happens:\n- The TOP card of the kitty is turned FACE-UP for everyone to see.\n- This turned-up card proposes a trump suit: its suit is the candidate to become trump for this hand.\n- The other three kitty cards stay hidden and are not used unless a special variant says otherwise.",
        "The turn-up card matters in two ways at once:\n- It is the SUGGESTED trump suit that players will accept or reject during bidding (the next stage).\n- It is a REAL card that, if the dealer's team takes the turn-up suit as trump, the dealer picks up into their hand (discarding one card face-down). So everyone can see one card the dealer may gain.\n- Knowing that, say, the turned-up card is the right bower tells the table the dealer would have the best card if that suit becomes trump.",
      ],
      technical: {
        title: "The Dealer's Advantage and the Deal Rotation",
        body: [
          "The deal rotates so the advantage is shared:\n- After each hand, the deal passes one seat to the left (clockwise), so over a game everyone deals an equal number of times.\n- The player to the dealer's left always leads to the first trick and is also first to bid — position relative to the dealer matters throughout.\n- A misdeal (wrong number of cards, exposed card) is typically redealt by the same dealer.",
          "The turn-up gives the dealer a hidden edge:\n- Only the dealer can actually take the turn-up card into hand (if their side names that suit), so the dealer effectively 'knows' a sixth card they might use.\n- That is why the dealer's team is often more willing to accept the turned-up suit — they gain a known, often strong card.\n- When the dealer picks it up, they immediately discard one card face-down to return to five cards; choosing what to discard (often a low card of an off-suit, to become 'void' in a suit) is a small but real skill.",
        ],
        codeExample: {
          label: "The deal and the turn-up",
          code: `  DEAL (clockwise, in twos and threes):
    pass 1:  2 - 3 - 2 - 3   cards to each player
    pass 2:  3 - 2 - 3 - 2   (totals 5 each = 20 cards)

  THE KITTY (4 cards left over, face-down):
    [ X ][ X ][ X ][ X ]
      ^ TOP card turned FACE-UP  ->  proposes trump

  Example turn-up:  [ J of Spades ]
    -> Spades is the proposed trump
    -> if the dealer's side takes it, dealer picks up
       this Jack (the right bower!) and discards one card`,
        },
      },
      incident: {
        title: "Dealing in Twos and Threes",
        when: "Traditional play",
        where: "Euchre tables for two centuries",
        impact: "The distinctive 'twos and threes' deal is a piece of card-table tradition that survives because it is fast, fair, and gives the game its recognizable rhythm",
        body: [
          "Newcomers often ask why Euchre is not dealt one card at a time like most games. The answer is partly tradition and partly practicality: dealing in batches of two and three gets five cards to four players in just two quick passes, which keeps the famously fast game moving. The pattern (2-3 or 3-2) is announced or assumed at the table, and a dealer who breaks the pattern may be gently corrected.",
          "The turn-up tradition is just as old and just as important:\n- For centuries the top of the stock has been flipped to propose trump, making the bid a public, shared decision rather than a hidden one.\n- It means every player starts the bidding with the same crucial piece of information: one specific candidate suit and one specific card.\n- This simple ritual — deal in twos and threes, turn one up — is the same at a county fair tournament and a family kitchen table, and it is where every hand's strategy begins.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal Five Each", sub: "in twos and threes, clockwise", type: "system" },
          { label: "Four-Card Kitty", sub: "left face-down in the center", type: "attacker" },
          { label: "Turn Up the Top", sub: "proposes the trump suit", type: "victim" },
          { label: "Dealer May Gain It", sub: "picks up the turn-up if taken", type: "result" },
        ],
      },
      timeline: [
        { year: 1810, event: "The deal-in-twos-and-threes pattern arrives with the game" },
        { year: 1860, event: "Five-card hands plus a turned-up trump become the American standard", highlight: true },
        { year: 1900, event: "Hoyle codifies dealer rotation and the turn-up procedure" },
        { year: 2024, event: "The same deal and turn-up open every modern Euchre hand" },
      ],
      keyTakeaways: [
        "The dealer gives each player five cards, dealt in batches of two and three (clockwise)",
        "Four leftover cards form the kitty; the top card is turned face-up to propose trump",
        "The turned-up card's suit is the candidate trump that players will accept or reject",
        "If the dealer's side takes the turn-up suit, the dealer picks up that card and discards one",
      ],
      references: [
        { title: "Euchre — the deal", url: "https://en.wikipedia.org/wiki/Euchre#The_deal" },
        { title: "Euchre — making trump procedure", url: "https://en.wikipedia.org/wiki/Euchre#Bidding" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-04-q1", type: "The Deal", challenge: "Cards per player.", text: "How many cards does each player receive in standard Euchre?", options: ["Five", "Seven", "Six", "Four"], correctIndex: 0, explanation: "Each of the four players gets five cards, leaving four cards for the kitty." },
        { id: "euchre-1-04-q2", type: "The Kitty", challenge: "What's left over.", text: "What happens to the four undealt cards?", options: ["They form the kitty, placed face-down, with the top card turned up", "They are dealt as a sixth-player hand", "They are discarded immediately", "Each player gets one"], correctIndex: 0, explanation: "The four leftover cards are the kitty; its top card is flipped face-up to propose trump." },
        { id: "euchre-1-04-q3", type: "The Turn-Up", challenge: "What it does.", text: "What is the purpose of the turned-up card?", options: ["It proposes the candidate trump suit for the hand", "It is the dealer's score marker", "It is always the right bower", "It decides who deals next"], correctIndex: 0, explanation: "The turn-up's suit is the proposed trump that players accept or reject in bidding." },
        { id: "euchre-1-04-q4", type: "Dealer Edge", challenge: "Who can use it.", text: "If the dealer's team makes the turned-up suit trump, what happens to the turn-up card?", options: ["The dealer picks it up into their hand and discards one card", "It stays in the center unused", "It goes to the player who named trump", "It is shuffled back in"], correctIndex: 0, explanation: "The dealer takes the turn-up card and discards one, gaining a known card — a real advantage." },
        { id: "euchre-1-04-q5", type: "Rotation", challenge: "Next dealer.", text: "Who deals the next hand?", options: ["The player to the current dealer's left (deal rotates clockwise)", "The same dealer every time", "The team that won the hand", "The player who was euchred"], correctIndex: 0, explanation: "The deal passes one seat clockwise each hand so everyone deals equally." },
      ],
    },
  },

  // ─── euchre-1-05: Making Trump ───────────────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "Making trump", location: "The bidding round", era: "Modern", emoji: "🗣️" },
    id: "euchre-1-05",
    order: 5,
    title: "Making Trump",
    subtitle: "Ordering it up, passing, and naming a suit",
    category: "sports",
    xp: 95,
    badge: { id: "euchre-badge-05", name: "Trump Caller", emoji: "🗣️" },
    challengeType: "quiz",
    info: {
      tagline: "Euchre's bidding has no chips and no numbers — just two quick rounds of decisions about one question: what suit is trump? Get the bidding right and your team controls the hand; get it wrong and you get euchred.",
      year: 2024,
      overview: [
        "After the deal, the turned-up card proposes a trump suit, and bidding goes around the table starting with the player to the dealer's left. There are TWO rounds:\n- ROUND ONE is about the turned-up suit only. In turn, each player may 'pass' or accept that suit as trump.\n- A non-dealer who accepts says 'I order it up' (ordering the dealer to pick up the turn-up); the dealer accepting says 'I take it up' or 'I'll pick it up'.\n- Whoever accepts becomes a 'maker', the turned-up suit is trump, and the dealer picks up the turn-up card and discards one face-down.",
        "If all four players pass in round one, the turn-up card is turned face-DOWN and ROUND TWO begins:\n- Now each player, again starting left of the dealer, may pass or NAME a different suit as trump.\n- You may name any suit EXCEPT the suit that was just turned down. (If hearts were turned down, you cannot call hearts; you must call clubs, diamonds, or spades.)\n- The player who names a suit becomes a maker, and that suit is trump. No card is picked up in round two — the dealer just plays the five cards already in hand.",
        "Many groups add the 'STICK THE DEALER' rule to keep hands moving:\n- Under stick-the-dealer, if everyone passes in round two as well, the dealer is FORCED to name a trump suit (any suit except the turned-down one). They cannot pass.\n- This guarantees every hand is played and adds pressure on the dealer, who may be stuck naming a weak suit and risk being euchred.\n- Without this rule, a hand where everyone passes both rounds is simply thrown in and re-dealt.",
      ],
      technical: {
        title: "Who Makes, and What 'Ordering Up' Costs",
        body: [
          "The makers take on a burden as well as control:\n- Whichever side names trump (the makers) must win at least 3 of the 5 tricks, or be euchred and give the opponents 2 points.\n- So you only make trump when you believe your hand — counting bowers, trumps, and off-suit Aces — can win three tricks.\n- 'Ordering up' the dealer is significant because it hands the dealer (an opponent, if you are not on their team) a known extra card; you order up only when your own hand is strong enough that the help to the dealer is worth it.",
          "Position and partnership shape the bidding:\n- If you sit to the dealer's left and the dealer is your OPPONENT, ordering up gives them the turn-up card — usually a bad idea unless your hand is very strong.\n- If the dealer is your PARTNER, ordering up gives your partner a known card and can be a strong team play (you might order up specifically to put the turn-up card, like a bower, into your partner's hand).\n- The dealer, deciding whether to 'pick it up', weighs how the turn-up card improves their hand and whether they have the trumps to take three tricks.",
        ],
        codeExample: {
          label: "The two rounds of bidding",
          code: `  TURN-UP:  [ Q of Clubs ]   (proposes CLUBS as trump)

  ROUND 1  (the turned-up suit only):
    each player, left of dealer first:
      "pass"                  -> next player
      "order it up" / "pick it up"  -> CLUBS is trump,
                                        dealer takes the Q, discards 1

  ALL PASS?  -> turn the card DOWN, begin round 2

  ROUND 2  (name a DIFFERENT suit):
      "pass"                  -> next player
      "I name hearts/diamonds/spades"  (NOT clubs!) -> that is trump

  STICK THE DEALER (optional):
    if all pass round 2, the DEALER must name a suit.`,
        },
      },
      incident: {
        title: "Stick the Dealer and the Death of the Thrown-In Hand",
        when: "Modern tournament play",
        where: "Club and tournament Euchre",
        impact: "The 'stick the dealer' rule spread through competitive Euchre to eliminate slow, no-decision thrown-in hands — and it added real pressure to the dealer's seat",
        body: [
          "In old casual play, if all four players passed both rounds the hand was simply thrown in and re-dealt, which could waste time when cautious players kept passing weak hands. To fix this, clubs and tournaments widely adopted 'stick the dealer': if it comes all the way around in round two with no one naming trump, the dealer is stuck and must choose a suit.",
          "The rule changed the texture of the game:\n- Every hand now produces a result, keeping games brisk — important in timed tournaments.\n- The dealer's seat carries new risk: a dealer with a weak hand can be forced to name trump and then be euchred for 2 points.\n- Good players factor this in, sometimes 'ordering up' earlier to avoid getting stuck, and defenders watch eagerly for a stuck dealer to euchre. Whether you play with the rule is agreed before the game — it is the most common house-rule choice in Euchre.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Round 1: The Turn-Up", sub: "order it up or pass", type: "system" },
          { label: "All Pass: Turn It Down", sub: "begin round two", type: "attacker" },
          { label: "Round 2: Name a Suit", sub: "any suit but the rejected one", type: "victim" },
          { label: "Makers Need 3 Tricks", sub: "or get euchred for 2", type: "result" },
        ],
      },
      timeline: [
        { year: 1860, event: "The two-round 'order it up / name a suit' bidding becomes standard" },
        { year: 1900, event: "Hoyle formalizes the prohibition on naming the turned-down suit" },
        { year: 1990, event: "'Stick the dealer' spreads through club and tournament play", highlight: true },
        { year: 2024, event: "Stick-the-dealer is the most common house rule, agreed before each game" },
      ],
      keyTakeaways: [
        "Bidding has two rounds: round one accepts or passes the turned-up suit; round two names a different suit",
        "Accepting the turn-up is 'ordering it up' (or the dealer 'picking it up'); that side becomes the makers",
        "In round two you may name any suit EXCEPT the one that was just turned down",
        "Under the common 'stick the dealer' rule, the dealer must name trump if everyone passes round two",
      ],
      references: [
        { title: "Euchre — bidding (making trump)", url: "https://en.wikipedia.org/wiki/Euchre#Bidding" },
        { title: "Euchre — stick the dealer variation", url: "https://en.wikipedia.org/wiki/Euchre#Variations" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-05-q1", type: "Round One", challenge: "Accepting the turn-up.", text: "In round one of bidding, what does a player decide?", options: ["Whether to accept the turned-up suit as trump ('order it up') or pass", "Which of three new suits to name", "How many tricks to bid", "Whether to deal again"], correctIndex: 0, explanation: "Round one is only about the turned-up suit: accept it as trump (order it up) or pass." },
        { id: "euchre-1-05-q2", type: "Round Two", challenge: "After all pass.", text: "If everyone passes round one, what happens in round two?", options: ["The turn-up is turned down and players may name a different trump suit", "The hand is scored immediately", "The dealer wins automatically", "Players re-draw their cards"], correctIndex: 0, explanation: "The turn-up card is turned face-down, and players may now name any other suit as trump." },
        { id: "euchre-1-05-q3", type: "The Forbidden Suit", challenge: "What you can't name.", text: "In round two, which suit may you NOT name as trump?", options: ["The suit of the card that was just turned down", "Any red suit", "The dealer's strongest suit", "Any suit you already hold"], correctIndex: 0, explanation: "You may name any suit except the one that was turned up and rejected in round one." },
        { id: "euchre-1-05-q4", type: "The Makers", challenge: "The obligation.", text: "What must the team that names trump (the makers) accomplish?", options: ["Win at least three of the five tricks, or be euchred", "Win all five tricks", "Win exactly two tricks", "Avoid winning any tricks"], correctIndex: 0, explanation: "The makers must take at least 3 tricks; failing that, they are euchred and the opponents score 2." },
        { id: "euchre-1-05-q5", type: "Stick the Dealer", challenge: "The forcing rule.", text: "Under the 'stick the dealer' rule, what happens if all players pass in round two?", options: ["The dealer is forced to name a trump suit", "The hand is thrown in and re-dealt", "The opponents pick trump", "The game ends in a tie"], correctIndex: 0, explanation: "Stick-the-dealer forces the dealer to choose trump rather than throwing the hand in." },
      ],
    },
  },

  // ─── euchre-1-06: Following Suit with the Left Bower ─────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "Following suit", location: "Every trick", era: "Modern", emoji: "⚠️" },
    id: "euchre-1-06",
    order: 6,
    title: "Following Suit with the Left Bower",
    subtitle: "The classic trap the left bower sets",
    category: "sports",
    xp: 98,
    badge: { id: "euchre-badge-06", name: "Trap Dodger", emoji: "⚠️" },
    challengeType: "quiz",
    info: {
      tagline: "The left bower's split personality — printed as one suit, playing as another — creates the most common rules mistake in Euchre. Get following-suit right and you will never be the player who 'reneged' and lost their team the points.",
      year: 2024,
      overview: [
        "The basic rule of trick-taking is: you must 'follow suit' — play a card of the suit that was led — if you can. In Euchre this rule has one tricky wrinkle, and it is entirely because of the left bower:\n- Because the left bower IS a trump (not its printed suit), the suit you must follow depends on what counts as what.\n- If TRUMP is led, the left bower counts as a trump, so it is one of your trump cards and you must follow with a trump if you have one.\n- If the left bower's PRINTED suit is led, the left bower does NOT count as that suit — it is a trump — so it does not help you follow suit.",
        "Walk through the classic trap. Suppose HEARTS are trump (so the left bower is the Jack of Diamonds):\n- A DIAMOND is led. You hold the Jack of Diamonds (left bower) and no other diamonds.\n- You are actually VOID in diamonds, because the Jack of Diamonds is now a heart (a trump), not a diamond.\n- Therefore you do NOT have to follow with it. You may trump in with it, or play any other card. Playing it as a 'diamond' to follow suit would be wrong.",
        "Now the other side of the trap, same trump (hearts):\n- HEARTS (trump) are led. You hold the Jack of Diamonds (left bower) and it is your only trump.\n- Now the left bower DOES count — it is a trump, and trump was led — so you MUST play it to follow suit.\n- 'Reneging' (failing to follow suit when you could have) is a penalty in Euchre, usually costing your team 2 points, so getting this right is not just etiquette — it is scoring.",
      ],
      technical: {
        title: "Void, Reneging, and the Mental Re-Label",
        body: [
          "The cure is to mentally RE-LABEL the left bower the instant trump is set:\n- Cross out its printed suit and write 'TRUMP' on it in your head. For the rest of the hand, treat it exactly like a trump card of the trump suit.\n- When deciding if you can follow a led suit, ask 'do I have that suit?' using the re-labeled hand — the left bower only answers 'yes' to the TRUMP question.\n- This single habit removes the entire trap.",
          "The penalty makes precision matter:\n- A 'renege' (also called a revoke) is failing to follow suit when you were able to. In Euchre the standard penalty is that the offending team loses 2 points (or the non-offending side scores 2), and a hand may be replayed depending on house rules.\n- The left bower causes most reneges: a player either wrongly plays it as its printed suit, or wrongly fails to play it as trump when trump is led and it is their only trump.\n- Conversely, the trap is also a weapon — opponents who forget the left bower is a trump may misjudge whether you are void, letting you win an unexpected trick.",
        ],
        codeExample: {
          label: "The left-bower follow-suit trap (hearts trump)",
          code: `  TRUMP = HEARTS   ->  LEFT BOWER = J of DIAMONDS (a trump now)

  CASE A:  a DIAMOND is led, you hold J-of-Diamonds only
    - J of Diamonds is NOT a diamond -> you are VOID in diamonds
    - you do NOT have to play it; trump in or discard freely

  CASE B:  a HEART (trump) is led, J-of-Diamonds is your only trump
    - J of Diamonds IS a trump -> trump was led
    - you MUST play it to follow suit (else you RENEGE = -2)

  HABIT: relabel the left bower 'TRUMP' the moment trump is set.`,
        },
      },
      incident: {
        title: "The Renege That Decides Games",
        when: "Every level of play",
        where: "Casual and tournament Euchre alike",
        impact: "Reneging on the left bower is the most common scoring penalty in Euchre, swinging hands and igniting the table arguments the game is half-famous for",
        body: [
          "More Euchre disputes start over the left bower than anything else. A player follows a led diamond with the left bower (which is no longer a diamond), or fails to play it when trump is led, and a sharp-eyed opponent calls the renege. Because the penalty is a full 2 points — often a quarter of the way to winning — these calls can decide a game, and they are the source of the friendly arguing Euchre is known for.",
          "Experienced players protect themselves with discipline:\n- They announce trump clearly and immediately re-orient their whole hand around it, re-labeling the left bower as a trump.\n- They watch which suit is led and ask the right question — 'can I follow THIS suit?' — using the bower's true (trump) identity.\n- They also watch opponents, because catching an opponent's renege is worth 2 points. Mastering this one rule eliminates the most expensive beginner mistake in the game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Left Bower = Trump", sub: "re-label it the instant trump is set", type: "system" },
          { label: "Its Printed Suit Led", sub: "you are void; need not play it", type: "attacker" },
          { label: "Trump Led", sub: "it counts; you must play it", type: "victim" },
          { label: "Reneging Costs 2", sub: "follow suit correctly every time", type: "result" },
        ],
      },
      timeline: [
        { year: 1860, event: "Follow-suit and renege penalties standardize with the bowers" },
        { year: 1900, event: "Hoyle codifies the 2-point penalty for reneging (revoke)" },
        { year: 1990, event: "Tournament rules formalize renege calls and replays", highlight: true },
        { year: 2024, event: "The left-bower follow-suit trap remains the top beginner mistake" },
      ],
      keyTakeaways: [
        "You must follow the suit that was led if you can — using each card's TRUE (trump-adjusted) suit",
        "If the left bower's printed suit is led, you are void in that suit and need not play the bower",
        "If trump is led and the left bower is your only trump, you MUST play it to follow suit",
        "Failing to follow suit (reneging) typically costs your team 2 points — re-label the left bower as a trump",
      ],
      references: [
        { title: "Euchre — play and following suit", url: "https://en.wikipedia.org/wiki/Euchre#The_play" },
        { title: "Revoke (cards) — renege penalty", url: "https://en.wikipedia.org/wiki/Revoke_(cards)" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-06-q1", type: "Core Rule", challenge: "Which suit to follow.", text: "When deciding if you can follow suit, what suit does the left bower count as?", options: ["The trump suit (not its printed suit)", "Its printed suit", "Whatever suit you choose", "No suit at all"], correctIndex: 0, explanation: "The left bower is a trump for all purposes, so it only follows the trump suit." },
        { id: "euchre-1-06-q2", type: "The Trap", challenge: "Printed suit led.", text: "Hearts are trump. A diamond is led and your only diamond-looking card is the Jack of Diamonds (left bower). Must you play it?", options: ["No — it is a trump now, so you are void in diamonds", "Yes — it is still a diamond", "Yes — bowers must always be played", "Only if you want to win the trick"], correctIndex: 0, explanation: "The left bower is a heart (trump), so you hold no actual diamond and are void." },
        { id: "euchre-1-06-q3", type: "Trump Led", challenge: "Forced to play it.", text: "Hearts are trump. A heart is led and the Jack of Diamonds (left bower) is your only trump. What must you do?", options: ["Play the Jack of Diamonds — it is a trump and trump was led", "Keep it; you may discard instead", "Play any card you like", "Pass the trick"], correctIndex: 0, explanation: "The left bower is a trump, so when trump is led it must be played to follow suit." },
        { id: "euchre-1-06-q4", type: "The Penalty", challenge: "Cost of the mistake.", text: "What is the usual penalty for reneging (failing to follow suit when able)?", options: ["The offending team loses 2 points (opponents score 2)", "A warning only", "Loss of one trick", "The game ends"], correctIndex: 0, explanation: "Reneging typically costs the offending side 2 points — a major swing in a race to 10." },
        { id: "euchre-1-06-q5", type: "Best Habit", challenge: "Avoiding the trap.", text: "What is the best habit for handling the left bower?", options: ["Mentally re-label it as a trump the instant trump is set", "Always play it first", "Treat it as its printed suit", "Save it for the last trick"], correctIndex: 0, explanation: "Re-labeling the left bower as a trump immediately removes the entire follow-suit trap." },
      ],
    },
  },

  // ─── euchre-1-07: Taking Tricks & Scoring ────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The scorekeeping", location: "After every hand", era: "Modern", emoji: "🔢" },
    id: "euchre-1-07",
    order: 7,
    title: "Taking Tricks & Scoring",
    subtitle: "Points, marches, and getting euchred",
    category: "sports",
    xp: 92,
    badge: { id: "euchre-badge-07", name: "Scorekeeper", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "Five tricks, a handful of points, and one harsh punishment for over-reaching. Euchre's scoring is tiny and tense — every hand is a quick contract where the makers either deliver three tricks or pay the price.",
      year: 2024,
      overview: [
        "Each hand has five tricks. A trick is won by the highest trump played, or, if no trump is played, by the highest card of the suit that was led. The winner of each trick leads to the next. The team that named trump are the 'makers'; the other team are the 'defenders'.",
        "The makers' scoring depends on how many of the five tricks they win:\n- 3 or 4 TRICKS = 1 point. This is the standard, expected outcome for making trump.\n- ALL 5 TRICKS (a 'march' or sweep) = 2 points. Winning every trick is rewarded with double.\n- These are the everyday results; the bonus for 'going alone' is bigger and gets its own stage.",
        "The defenders score only when they stop the makers:\n- If the makers FAIL to win at least 3 tricks (i.e., the defenders take 3 or more), the makers are 'EUCHRED'.\n- Being euchred scores 2 POINTS for the DEFENDERS — a reward for beating the team that chose trump.\n- This asymmetry is the engine of the game: making trump earns you only 1 point for a normal win, but failing hands the opponents 2. Choosing trump is a real risk, not a free pull.",
      ],
      technical: {
        title: "Why Euchre Pays 1 but Punishes 2",
        body: [
          "The scoring is deliberately lopsided to discourage reckless bidding:\n- A successful make is worth just 1 point, but a failed make gives the opponents 2 — so you should only name trump when you genuinely expect three tricks.\n- This is why disciplined players pass marginal hands: the downside (being euchred for 2) outweighs the modest 1-point upside.\n- The march (2 points) and the loner bonuses reward the strong hands that justify bidding, balancing the risk.",
          "Keeping score is part of the game's culture:\n- The classic method uses two low cards per team (often a 5 and a 6, or two face cards) to display the score from 0 to 10 by how they overlap and fan.\n- Games are typically to 10 points; some play to 5 or 11, and partnership tournaments may use other targets, but 10 is the standard.\n- Because points come in 1s and 2s, a single euchre or march can flip a game, so every hand's bid-and-defend decision is meaningful right up to 10.",
        ],
        codeExample: {
          label: "Euchre scoring table",
          code: `  MAKERS win 3 or 4 tricks ................. 1 point
  MAKERS win all 5 tricks (a 'march') ...... 2 points
  MAKERS go ALONE and win 3 or 4 .......... 1 point
  MAKERS go ALONE and win all 5 ........... 4 points   (big!)

  DEFENDERS hold makers to 2 or fewer
     -> makers are 'EUCHRED'
     -> DEFENDERS score ...................  2 points

  GAME: first team to 10 points wins.`,
        },
      },
      incident: {
        title: "The Euchre That Names the Game",
        when: "Throughout the game's history",
        where: "Every Euchre table",
        impact: "The act of 'euchring' the makers — beating the team that chose trump — is so central that it gave the game its very name and remains its most satisfying play",
        body: [
          "The word 'euchre' as a verb means to outwit or get the better of someone, and being 'euchred' is exactly that: the team that confidently named trump is held under three tricks and hands the opponents 2 points. It is the most satisfying result in the game for the defenders, and the threat of it disciplines every bid. The play is so central that it gave the whole game its name.",
          "Strategically, the euchre reshapes how both sides play:\n- Defenders actively try to win three tricks to euchre the makers, not merely to avoid losing — there are 2 points in it.\n- Makers, knowing this, bid cautiously and play carefully to lock up their three tricks before chasing a march.\n- A late-game euchre, worth 2 points, can leapfrog a team from behind to victory, which is why even a losing position is never hopeless as long as the opponents keep naming trump on thin hands.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Highest Trump Wins", sub: "or highest of the led suit", type: "system" },
          { label: "Makers: 3-4 = 1 pt", sub: "the standard successful make", type: "attacker" },
          { label: "March = 2, Loner = 4", sub: "sweeps pay a bonus", type: "victim" },
          { label: "Euchred = 2 to Defense", sub: "failing to make is punished", type: "result" },
        ],
      },
      timeline: [
        { year: 1850, event: "The 1/2/2 scoring (make, march, euchre) becomes standard" },
        { year: 1860, event: "'Euchre' as a verb — to outwit — names the game", highlight: true },
        { year: 1900, event: "Hoyle fixes games at 10 points (some at 5 or 7)" },
        { year: 2024, event: "Games to 10, scored with two spare cards, remain the norm" },
      ],
      keyTakeaways: [
        "Each trick is won by the highest trump, or the highest card of the led suit if no trump is played",
        "Makers score 1 point for 3 or 4 tricks and 2 points for all five (a march)",
        "If the makers fail to take 3 tricks they are 'euchred' and the defenders score 2 points",
        "The 1-point reward versus 2-point punishment is why you only name trump on a strong hand",
      ],
      references: [
        { title: "Euchre — scoring", url: "https://en.wikipedia.org/wiki/Euchre#Scoring" },
        { title: "Euchre (verb) — etymology", url: "https://en.wiktionary.org/wiki/euchre" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-07-q1", type: "Normal Make", challenge: "Three tricks.", text: "How many points do the makers score for winning three or four of the five tricks?", options: ["1 point", "2 points", "3 points", "4 points"], correctIndex: 0, explanation: "A standard successful make (3 or 4 tricks) is worth 1 point." },
        { id: "euchre-1-07-q2", type: "The March", challenge: "Sweeping the hand.", text: "How many points do the makers earn for winning all five tricks (a 'march')?", options: ["2 points", "1 point", "4 points", "5 points"], correctIndex: 0, explanation: "Winning all five tricks as a partnership is a march, worth 2 points." },
        { id: "euchre-1-07-q3", type: "Getting Euchred", challenge: "Falling short.", text: "If the makers win only two tricks, what happens?", options: ["They are euchred, and the defenders score 2 points", "They still score 1 point", "The hand is replayed", "Nobody scores"], correctIndex: 0, explanation: "Failing to take 3 tricks means the makers are euchred and the defenders get 2 points." },
        { id: "euchre-1-07-q4", type: "Winning a Trick", challenge: "Who takes it.", text: "Which card wins a trick?", options: ["The highest trump played, or the highest card of the led suit if no trump is played", "The first card played", "The last card played", "The highest card regardless of suit"], correctIndex: 0, explanation: "Trumps beat the led suit; if no trump is played, the highest card of the suit led wins." },
        { id: "euchre-1-07-q5", type: "The Risk", challenge: "Why bidding is risky.", text: "Why should you only name trump on a strong hand?", options: ["A normal make scores just 1 point, but failing gives the opponents 2", "Naming trump always loses a point", "The dealer keeps the points", "There is no risk to naming trump"], correctIndex: 0, explanation: "The lopsided 1-versus-2 scoring punishes over-reaching, so bid trump only when confident." },
      ],
    },
  },

  // ─── euchre-1-08: Going Alone ────────────────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The loner", location: "The boldest play in Euchre", era: "Modern", emoji: "🎯" },
    id: "euchre-1-08",
    order: 8,
    title: "Going Alone",
    subtitle: "The loner — sit your partner down for four points",
    category: "sports",
    xp: 100,
    badge: { id: "euchre-badge-08", name: "Lone Wolf", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "Euchre's biggest swing comes from playing short-handed on purpose. Declare a 'loner', bench your partner, and a clean sweep is worth four points — nearly half the game in a single hand. It is the bravest, most rewarding play on the table.",
      year: 2024,
      overview: [
        "When you make trump, you may choose to 'go alone' (play a 'loner'). You declare it as you name trump, and the consequence is dramatic:\n- Your PARTNER sits out the entire hand, laying their cards face-down and playing nothing.\n- You play all five tricks by yourself against BOTH opponents.\n- You are betting that your hand is so strong you do not need your partner's help — and the reward reflects that risk.",
        "The scoring is what makes the loner special:\n- If you go alone and win ALL FIVE tricks (a lone march), you score 4 POINTS — double the normal march and the biggest single score in standard Euchre.\n- If you go alone and win 3 or 4 tricks, you score just 1 point (the same as a normal make) — so the bonus is only for the sweep.\n- If you go alone and get euchred (fail to take 3), the defenders still score 2 points, as usual. The downside is the same; only the upside grows.",
        "Because the reward is for sweeping, you go alone only with a powerhouse hand:\n- The classic loner hand holds the top trumps — ideally BOTH bowers — plus enough other trumps and off-suit Aces to win all five tricks unassisted.\n- Holding the right bower, left bower, and Ace of trump, for instance, means the three best cards in the game are yours, and the rest of your hand just has to avoid being trumped.\n- Sitting your partner down removes their potential help, so only attempt it when you can win without them.",
      ],
      technical: {
        title: "When the Math Favors the Loner",
        body: [
          "The loner is a calculated gamble, and the math usually justifies it with a monster hand:\n- A normal march is 2 points; a lone march is 4. So going alone DOUBLES the reward when you sweep, for the cost of giving up your partner's cards.\n- If you are confident of all five tricks, the extra 2 points are nearly free — your partner's cards were not going to be needed anyway.\n- 4 points is 40% of a game to 10, so a single successful loner can swing a match; it is the play that wins games from behind.",
          "Knowing WHEN to go alone is the skill:\n- Count your guaranteed winners: both bowers plus a high trump or two, and side Aces, are the building blocks. If you can see five likely tricks, go alone.\n- Position helps — being able to lead the right bower first to pull out opponents' trumps makes a sweep more reliable.\n- Defenders facing a loner play to win even ONE trick, because stopping the sweep saves their opponents 2 points (the lone march becomes a mere 1-point make). The defense's whole goal shifts from euchring to simply not getting swept.",
        ],
        codeExample: {
          label: "Going alone — the payoff",
          code: `  DECLARE 'ALONE' as you name trump:
    -> your PARTNER sits out (cards face-down)
    -> you play all 5 tricks vs BOTH opponents

  SCORING WHEN ALONE:
    win all 5 (lone march) ......... 4 POINTS   <- the prize
    win 3 or 4 ..................... 1 point
    win 2 or fewer (euchred) ....... 0 (defenders get 2)

  TYPICAL LONER HAND (spades trump):
    J of Spades (right), J of Clubs (left), A of Spades,
    + a side Ace  ->  near-certain five tricks`,
        },
      },
      incident: {
        title: "The Lone Hand That Steals the Game",
        when: "Decisive moments in close games",
        where: "Tournament and tavern alike",
        impact: "Because a lone march is worth 4 of the 10 points needed to win, a well-timed loner is the single most game-changing play in Euchre — and the most talked-about",
        body: [
          "Every Euchre player remembers a loner that turned a game around. Trailing 9 to 5, a player picks up a hand with both bowers and the Ace of trump, declares alone, sweeps all five tricks for 4 points, and suddenly the score is 9 to 9. No other standard play can move the needle that far that fast, which is why the loner is the game's signature moment of nerve.",
          "The drama comes from the all-or-nothing structure:\n- Win all five and you bank 4; fall one trick short of the sweep and you get only 1, so the difference between brilliance and ordinary is a single trick.\n- Defenders pour everything into stealing just one trick to deny the 4, turning the loner into a tense duel of three players.\n- This blend of huge reward, real risk, and the theater of benching your own partner is what gives Euchre its competitive spark and its reputation as a thinking player's game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Declare 'Alone'", sub: "as you name trump", type: "system" },
          { label: "Partner Sits Out", sub: "you play 1 vs 2", type: "attacker" },
          { label: "Lone March = 4 Points", sub: "sweep all five tricks", type: "victim" },
          { label: "Only on a Monster", sub: "both bowers + winners", type: "result" },
        ],
      },
      timeline: [
        { year: 1860, event: "The lone hand and its 4-point bonus enter standard Euchre" },
        { year: 1900, event: "Hoyle fixes the lone-march reward at 4 points", highlight: true },
        { year: 1990, event: "Tournament play formalizes the partner sitting out" },
        { year: 2024, event: "The loner remains the biggest single score and signature play" },
      ],
      keyTakeaways: [
        "Going alone ('a loner') means your partner sits out and you play all five tricks by yourself",
        "Sweeping all five tricks alone scores 4 points — the biggest score in standard Euchre",
        "Going alone and winning only 3 or 4 tricks scores just 1 point, so the bonus is for the sweep",
        "Attempt a loner only with a powerhouse hand, ideally holding both bowers plus winners",
      ],
      references: [
        { title: "Euchre — going alone (the loner)", url: "https://en.wikipedia.org/wiki/Euchre#Scoring" },
        { title: "Euchre — play of the lone hand", url: "https://en.wikipedia.org/wiki/Euchre#The_play" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-08-q1", type: "The Move", challenge: "What happens.", text: "When you declare a 'loner' (going alone), what happens to your partner?", options: ["Your partner sits out and plays no cards for the hand", "Your partner plays two extra cards", "Your partner becomes the dealer", "Your partner joins the other team"], correctIndex: 0, explanation: "Going alone benches your partner; you play all five tricks by yourself." },
        { id: "euchre-1-08-q2", type: "The Reward", challenge: "Sweeping alone.", text: "How many points do you score for winning all five tricks while going alone?", options: ["4 points", "2 points", "1 point", "10 points"], correctIndex: 0, explanation: "A lone march — sweeping all five tricks alone — is worth 4 points, the biggest score." },
        { id: "euchre-1-08-q3", type: "Short of the Sweep", challenge: "Three tricks alone.", text: "If you go alone and win only three or four tricks, how much do you score?", options: ["1 point — the same as a normal make", "4 points", "2 points", "Nothing"], correctIndex: 0, explanation: "The 4-point bonus is only for sweeping; 3 or 4 tricks alone scores the normal 1 point." },
        { id: "euchre-1-08-q4", type: "When to Try", challenge: "The right hand.", text: "What kind of hand justifies going alone?", options: ["A powerhouse hand, ideally with both bowers plus other sure winners", "Any hand with one trump", "A hand with no trumps", "Only the dealer's hand"], correctIndex: 0, explanation: "Only go alone when you can win all five unassisted — both bowers and side winners are ideal." },
        { id: "euchre-1-08-q5", type: "Defending It", challenge: "The defenders' goal.", text: "When facing a loner, what is the defenders' main goal?", options: ["Win even one trick to deny the 4-point sweep", "Win all five tricks themselves", "Name a new trump suit", "Concede immediately"], correctIndex: 0, explanation: "Stealing a single trick stops the lone march, cutting the score from 4 down to 1." },
      ],
    },
  },

  // ─── euchre-1-09: Strategy — Ordering Up vs Passing ─────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The bidding decision", location: "Where games are won", era: "Modern", emoji: "🧠" },
    id: "euchre-1-09",
    order: 9,
    title: "Strategy — Ordering Up vs Passing",
    subtitle: "Counting trumps, protecting your partner, and euchring",
    category: "sports",
    xp: 102,
    badge: { id: "euchre-badge-09", name: "Table General", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "Euchre is won and lost in the split second you decide to order it up or pass. The cards are dealt by luck, but counting your trumps, reading your seat, and knowing when to defend turn that luck into wins.",
      year: 2024,
      overview: [
        "The core bidding judgment is whether your hand can win three tricks. A widely taught rule of thumb is the 'THREE-TRUMP RULE':\n- If you hold three or more trumps (counting the bowers as trumps), you generally have enough to order it up and make trump.\n- Two trumps plus an off-suit Ace can also be enough, especially if one trump is a bower.\n- One trump and a prayer is a pass — naming trump on a thin hand is how you get euchred for 2.",
        "Your SEAT relative to the dealer changes the math:\n- The DEALER'S UP-CARD ADVANTAGE: if the dealer is your partner and the turn-up is strong (a bower or Ace), ordering it up puts that known card into your partner's hand — a powerful team play.\n- If the dealer is your OPPONENT, ordering it up gives THEM the turn-up card, so you need a strong hand of your own to justify the gift.\n- 'PROTECT YOUR PARTNER': as the dealer's partner, you may order up a marginal suit to spare your partner from being forced (under stick-the-dealer) to name a worse one, or simply to take control with the up-card's help.",
        "Defense is half the game, and it is mostly about euchring:\n- When the other team makes trump, your goal flips from making points to taking three tricks yourself for the 2-point euchre.\n- Lead smartly: leading trump can strip the makers' trumps, while leading an off-suit Ace can grab an early trick before it gets trumped.\n- 'Next' and 'reverse-next' theory (which suit to call in round two based on the turned-down color) and saving a high trump to stop a march are advanced defensive ideas — but the foundation is simply: count, respect the up-card, and don't bid into a euchre.",
      ],
      technical: {
        title: "Counting, Position, and Don't Feed the Dealer",
        body: [
          "Disciplined counting beats hopeful bidding:\n- Before ordering up, count your trumps INCLUDING both bowers as trumps, and add likely off-suit Ace winners. Aim for three reasonably certain tricks.\n- Remember the turned-up card affects the count: if you pass and it gets turned down, that card (and its suit's strength) leaves the picture, and a same-color call shifts where the bowers live.\n- Marginal hands favor passing when the dealer is an opponent (you would arm them) and favor ordering when the dealer is your partner (you arm your own side).",
          "Position-aware plays that win games:\n- 'DON'T FEED THE DEALER': avoid ordering up a suit that mainly improves an opposing dealer, especially if the up-card is a bower.\n- 'CALLING NEXT': after a suit is turned down, the same-color suit (the 'next' suit) often holds the bowers cheaply, and calling it from first seat is a known steal — because the original bower-rich suit was rejected, the next suit's bowers are likely live.\n- DEFENDING A LONER: sacrifice nothing to euchre is impossible, so concentrate every high card on winning ONE trick to deny the 4-point sweep. These ideas separate a steady winner from a lucky one.",
        ],
        codeExample: {
          label: "Order it up? A quick checklist",
          code: `  COUNT (bowers count as trumps):
    3+ trumps .......................... usually ORDER IT UP
    2 trumps + an off-suit Ace ......... often enough
    1 trump only ....................... PASS

  WHO IS THE DEALER?
    your PARTNER + strong up-card ...... lean to ORDER (arm partner)
    an OPPONENT ........................ need a strong hand
                                          (you give them the up-card)

  ON DEFENSE:
    aim to win 3 tricks  -> EUCHRE them for 2
    vs a loner -> just steal ONE trick to kill the 4`,
        },
      },
      incident: {
        title: "From Folklore to the 'Next' Theory",
        when: "20th century to today",
        where: "Euchre strategy circles and online play",
        impact: "Over decades, casual rules of thumb like the three-trump rule and 'calling next' hardened into a real strategic literature that separates skilled players from lucky ones",
        body: [
          "For most of its life Euchre strategy was barroom folklore — 'order up on three trumps', 'never feed the dealer', 'call next'. As the game persisted in the Midwest and online, players formalized these into studied principles: the three-trump rule for bidding, the dealer up-card advantage, and especially 'next' theory, the insight that after a suit is turned down, its same-color partner suit often holds the bowers and is a strong call from first seat.",
          "These ideas show Euchre rewards thought as much as luck:\n- A player who counts trumps and respects position will, over many hands, get euchred far less and steal more makes than one who bids on feel.\n- Defensive discipline — leading to euchre, saving a stopper for a march, denying a loner one trick — wins the points that decide close games.\n- The deal is random, but the long-run winner is the player who bids with a count, plays the position, and defends with a plan.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count Your Trumps", sub: "bowers included; aim for 3 tricks", type: "system" },
          { label: "Read Your Seat", sub: "dealer = partner or opponent?", type: "attacker" },
          { label: "Don't Feed the Dealer", sub: "pass thin hands vs their up-card", type: "victim" },
          { label: "Defend to Euchre", sub: "take 3 tricks for 2 points", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The three-trump rule of thumb circulates in print" },
        { year: 1970, event: "Midwest club play refines dealer-position and 'next' tactics" },
        { year: 2000, event: "Online Euchre spreads formalized 'next'/'reverse-next' theory", highlight: true },
        { year: 2024, event: "Counting, position, and disciplined defense define strong play" },
      ],
      keyTakeaways: [
        "The three-trump rule of thumb: hold three trumps (bowers count) and you can usually order it up",
        "When the dealer is your opponent, ordering up gives them the turn-up card — bid only with a strong hand",
        "When the dealer is your partner, ordering up a strong up-card arms your own side",
        "On defense, aim to take three tricks for a 2-point euchre; against a loner, just steal one trick",
      ],
      references: [
        { title: "Euchre — strategy", url: "https://en.wikipedia.org/wiki/Euchre#Strategy" },
        { title: "Euchre — bidding and the dealer's advantage", url: "https://en.wikipedia.org/wiki/Euchre#Bidding" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-09-q1", type: "Rule of Thumb", challenge: "The trump count.", text: "According to the common rule of thumb, how many trumps generally justify ordering it up?", options: ["Three or more (counting the bowers as trumps)", "Just one trump", "You need all five trumps", "Trump count doesn't matter"], correctIndex: 0, explanation: "The three-trump rule: with three or more trumps (bowers included) you can usually make trump." },
        { id: "euchre-1-09-q2", type: "Position", challenge: "Feeding the enemy.", text: "Why is ordering up risky when the dealer is on the opposing team?", options: ["It gives the opposing dealer the turned-up card, strengthening their hand", "It makes you the dealer", "It costs you a point automatically", "It ends your turn to bid"], correctIndex: 0, explanation: "Ordering up hands the dealer the up-card, so against an opponent you need a strong hand to justify it." },
        { id: "euchre-1-09-q3", type: "Partnership", challenge: "Arming your side.", text: "When does ordering up the turn-up help your team the most?", options: ["When the dealer is your partner and the up-card is strong (e.g., a bower)", "When the dealer is your opponent", "When you have no trumps", "When the up-card is the lowest card"], correctIndex: 0, explanation: "If your partner is the dealer, ordering up puts a known strong card into your own side's hand." },
        { id: "euchre-1-09-q4", type: "Defense", challenge: "The defenders' aim.", text: "When the other team makes trump, what is your team's scoring goal?", options: ["Win three tricks to euchre them for 2 points", "Win exactly one trick", "Win zero tricks", "Win two tricks"], correctIndex: 0, explanation: "Taking three of the five tricks euchres the makers and scores 2 points for the defenders." },
        { id: "euchre-1-09-q5", type: "Next Theory", challenge: "After a turn-down.", text: "In 'calling next', which suit is often a strong call after the turn-up is turned down?", options: ["The same-color suit as the turned-down card (the 'next' suit)", "The exact suit that was turned down", "Always hearts", "The suit you have the fewest of"], correctIndex: 0, explanation: "After a suit is turned down, its same-color partner often holds the bowers, making 'next' a strong call." },
      ],
    },
  },

  // ─── euchre-1-10: Variants & Etiquette ───────────────────────────────────────
  {
    epochId: "euchre-1",
    wonder: { name: "The Euchre family", location: "Tables around the world", era: "Modern", emoji: "🌐" },
    id: "euchre-1-10",
    order: 10,
    title: "Variants & Etiquette",
    subtitle: "Cutthroat, Canadian, Bid Euchre, and table manners",
    category: "sports",
    xp: 95,
    badge: { id: "euchre-badge-10", name: "Euchre Ambassador", emoji: "🌐" },
    challengeType: "quiz",
    info: {
      tagline: "Euchre is really a whole family of games, played from three-handed kitchen showdowns to double-deck tournament marathons — bound together by a shared code of table manners and the cardinal sin of table talk.",
      year: 2024,
      overview: [
        "The standard game is four-player partnership Euchre, but the family is large:\n- THREE-HANDED ('CUTTHROAT') EUCHRE — every player for themselves; the maker plays alone against the other two, and there are no partnerships.\n- SIX-HANDED EUCHRE — three teams of two (or two teams of three) using a larger deck, popular at big family gatherings.\n- CALL-IT / NO-TURN-UP variants — instead of a turn-up, players bid suits directly. These keep the bowers and core play while changing the bidding.",
        "Several variants change the deck or the bidding entirely:\n- CANADIAN / DOUBLE-DECK EUCHRE — uses two decks' worth of cards (often 9 through Ace doubled), with larger hands and team bids for a number of tricks.\n- BID EUCHRE (also 'PEPPER' or 'BID EUCH') — players bid the number of tricks they will take (and sometimes name trump), more like contract bridge or Pinochle, with scoring tied to the bid.\n- THE 25-CARD JOKER GAME — adding a Joker that acts as the HIGHEST trump (the 'best bower'), above even the right bower. This is the role the Joker was invented for; in some versions the Joker has no suit and is always trump.",
        "Across all variants, etiquette is taken seriously:\n- NO TABLE TALK — you may not signal your hand to your partner with words, gestures, or hints. Saying 'I wish I had a better hand' to nudge a partner's bid is cheating.\n- RENEGING IS PENALIZED — failing to follow suit when able costs your team 2 points (and can void the hand); call it cleanly and own it when you do it.\n- GENERAL COURTESY — play in turn, don't slow-roll, keep the bowers and trump announced clearly, and keep the famously friendly arguing friendly. Agree on house rules (stick-the-dealer, Joker, score to 10) BEFORE the first deal.",
      ],
      technical: {
        title: "The Variant Map and the No-Talk Rule",
        body: [
          "Choosing a variant is about the group and the goal:\n- Three players? Cutthroat. Big family? Six-handed or double-deck. Want a deeper bidding game? Bid Euchre or Pepper. Want the traditional game? Standard partnership to 10.\n- Most variants preserve the bowers and the trick-taking core, so the skills from this epoch transfer directly; only the deck size and bidding format change.\n- The Joker variant is the historical curiosity worth knowing — calling the Joker as the top trump is literally why the card exists.",
          "The no-table-talk rule is the backbone of fair play:\n- Because partners cannot see each other's hands, the entire game depends on NOT communicating illicitly; legitimate information comes only from the cards played and the bids made.\n- Penalties for talk range from a warning in a kitchen game to forfeiting the hand or points in a tournament.\n- Skilled partners DO communicate — but only legally, through the LANGUAGE OF THE CARDS: which suit you lead, when you trump in, and which card you discard all send honest signals your partner can read without a word being spoken.",
        ],
        codeExample: {
          label: "The Euchre variant family",
          code: `  PLAYERS   VARIANT                 KEY TWIST
  -------   --------------------    -----------------------------
    3       Cutthroat Euchre        no partners; maker vs 2
    4       Standard Partnership    the classic game (this epoch)
    4       Bid Euchre / Pepper     bid # of tricks; richer scoring
    6       Six-Handed Euchre       three pairs, bigger deck
    4       Canadian / Double-Deck  two decks, larger hands
    4       25-card Joker game      Joker = BEST bower (top trump)

  ETIQUETTE:  no table talk * play in turn * agree house
              rules first * own your reneges * keep it friendly`,
        },
      },
      incident: {
        title: "The Joker's Home Game and the Honor Code",
        when: "1860s to today",
        where: "From frontier saloons to tournament halls",
        impact: "The Joker variant preserves the card's original purpose, while Euchre's strict no-table-talk honor code keeps a game with no referee fair across millions of casual tables",
        body: [
          "The Joker variant is a living piece of history: the Joker was created in 1860s America specifically as a top trump for Euchre, and groups that play the 25-card game with the Joker as the 'best bower' are using the card exactly as intended. It is a small reminder that this kitchen-table game once shaped the standard deck itself.",
          "Euchre's culture rests on an honor code more than written law:\n- With no dealer's-choice referee at most tables, the no-table-talk rule and honest renege calls are what keep the game fair — players police themselves and each other.\n- The famous friendly arguing over a renege or a bold loner is part of the fun, but it stays within the rules everyone agreed to before the first deal.\n- Whether you play cutthroat with three, double-deck at a reunion, or the classic partnership game to 10, the same etiquette travels with it: signal only through your cards, play in turn, and keep it sporting.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick the Variant", sub: "cutthroat, six-hand, bid, double-deck", type: "system" },
          { label: "The Joker Game", sub: "25 cards; Joker = best bower", type: "attacker" },
          { label: "No Table Talk", sub: "signal only through the cards", type: "victim" },
          { label: "Agree Rules First", sub: "stick-the-dealer, Joker, score", type: "result" },
        ],
      },
      timeline: [
        { year: 1860, event: "The Joker is created as Euchre's top-trump 'best bower'", highlight: true },
        { year: 1900, event: "Bid Euchre and Pepper variants spread through the Midwest" },
        { year: 1960, event: "Double-deck and six-handed Euchre become family-gathering staples" },
        { year: 2024, event: "The no-table-talk honor code governs Euchre worldwide" },
      ],
      keyTakeaways: [
        "Euchre is a family of games: three-handed cutthroat, six-handed, double-deck/Canadian, and Bid Euchre/Pepper",
        "In the 25-card variant a Joker acts as the highest trump (the 'best bower') — the role it was invented for",
        "Table talk is forbidden; partners may communicate only legally, through the cards they play",
        "Reneging is penalized (usually 2 points); agree house rules like stick-the-dealer before the first deal",
      ],
      references: [
        { title: "Euchre — variations", url: "https://en.wikipedia.org/wiki/Euchre#Variations" },
        { title: "Bid Euchre", url: "https://en.wikipedia.org/wiki/Bid_Euchre" },
      ],
    },
    quiz: {
      questions: [
        { id: "euchre-1-10-q1", type: "Three Players", challenge: "No partners.", text: "What is three-handed 'cutthroat' Euchre?", options: ["Every player for themselves; the maker plays alone against the other two", "Three teams of two", "A game with no trump suit", "Euchre played with three decks"], correctIndex: 0, explanation: "Cutthroat Euchre drops partnerships; the player who makes trump faces the other two alone." },
        { id: "euchre-1-10-q2", type: "The Joker", challenge: "Best bower.", text: "In the 25-card variant, what role does the Joker play?", options: ["The highest trump of all (the 'best bower'), above the right bower", "The lowest card", "A second left bower", "It is always discarded"], correctIndex: 0, explanation: "The Joker acts as the top trump — the 'best bower' — which is the role it was invented for." },
        { id: "euchre-1-10-q3", type: "Bid Euchre", challenge: "A richer auction.", text: "How does Bid Euchre (Pepper) differ from the standard game?", options: ["Players bid the number of tricks they will take, with scoring tied to the bid", "It removes the bowers", "It uses only one suit", "It has no scoring"], correctIndex: 0, explanation: "Bid Euchre adds a trick-count auction, more like Pinochle or bridge, with bid-based scoring." },
        { id: "euchre-1-10-q4", type: "Etiquette", challenge: "The cardinal sin.", text: "What is the most important etiquette rule in Euchre?", options: ["No table talk — you may not signal your hand to your partner", "Always deal the cards yourself", "Never go alone", "Bid on every hand"], correctIndex: 0, explanation: "Table talk is forbidden; partners may communicate only legally, through the cards they play." },
        { id: "euchre-1-10-q5", type: "House Rules", challenge: "Settle it early.", text: "When should a group agree on house rules like stick-the-dealer or using a Joker?", options: ["Before the first deal", "Only after someone loses", "Halfway through the game", "Never — they are fixed"], correctIndex: 0, explanation: "Agree on variants and house rules before play begins so everyone shares the same expectations." },
      ],
    },
  },
];
