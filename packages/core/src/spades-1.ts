import type { StageConfig, EpochConfig } from "./types";

export const spades1Epoch: EpochConfig = {
  id: "spades-1",
  name: "Spades",
  subtitle: "Bid, take your tricks, and dodge the bags — master the classic partnership card game",
  description:
    "Spades — the four-player partnership trick-taking game where the spade suit is ALWAYS trump — taught from the ground up. Born in 1930s America and made famous in the military, on college campuses, and across African-American communities, Spades pairs you with a partner across the table in a race to 500 points. This epoch builds you from the deal and the fixed trump suit through bidding tricks, following suit and 'breaking spades', the signature nil bid, blind nil, the punishing bags/sandbag rule, partnership play and supporting a nil, counting trump and setting opponents, and the strategy and house variants (Whiz, Suicide, Mirror, Joker-Joker-Deuce) that separate steady winners from the table. A game of arithmetic, memory, communication, and nerve.",
  emoji: "♠️",
  color: "slate",
  unlocked: true,
};

export const spades1Stages: StageConfig[] = [
  // ─── spades-1-01: What Is Spades ─────────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The Spades table", location: "Barracks, dorm lounges, and family kitchens", era: "Modern", emoji: "♠️" },
    id: "spades-1-01",
    order: 1,
    title: "What Is Spades",
    subtitle: "Four players, two teams, and a race to 500",
    category: "sports",
    xp: 85,
    badge: { id: "spades-badge-01", name: "Pulled Up a Chair", emoji: "♠️" },
    challengeType: "quiz",
    info: {
      tagline: "Two pairs of partners sit across from each other, the whole deck gets dealt, and spades always beat everything. Spades is simple to learn but rewards memory, counting, and teamwork — the first team to 500 points wins.",
      year: 2024,
      overview: [
        "Spades is a trick-taking card game for four players in two partnerships, played with a standard 52-card deck. Partners sit ACROSS the table from each other, so the turn order alternates between the two teams. The whole deck is dealt out (13 cards each), and play happens in 'tricks' — each player lays down one card, and the highest card in the led suit (or the highest spade) wins that trick and leads the next one.",
        "A few features make Spades distinctive among card games:\n- SPADES ARE ALWAYS TRUMP — the spade suit always outranks the other three suits, and there is no auction to decide trump; it is fixed every single hand.\n- IT IS A PARTNERSHIP GAME — your score is combined with your partner's, so reading and helping your partner matters as much as your own cards.\n- YOU BID FIRST — before play, every player predicts how many tricks they will win, which sets up the scoring tension that defines the game.",
        "Spades has deep American roots. It was developed in the United States in the 1930s and spread rapidly during and after World War II, becoming a fixture in the U.S. military, on college campuses, and in African-American communities, where it remains a beloved social and competitive game. In the late 1990s and 2000s it became one of the most-played games online (Yahoo! Games, MSN Gaming Zone), introducing it to millions more.",
      ],
      technical: {
        title: "The Object, the Teams, and Why It Caught On",
        body: [
          "The structure of a game is easy to picture:\n- TWO TEAMS of two, partners sitting opposite, so going clockwise the seating is You, Opponent, Partner, Opponent.\n- A hand (also called a 'round') is 13 tricks; both players on a team bid, and their bids combine into one team contract.\n- Scoring rewards making your combined bid and punishes both falling short and taking too many extra tricks (the 'bag' rule, covered later). The first team to reach 500 points wins the game.",
          "Spades spread because it is social, fast, and forgiving to learn:\n- THE RULES FIT ON A NAPKIN, but the bidding and the nil bid create rich, repeatable decisions.\n- IT REWARDS PARTNERSHIP — table talk is limited, so good partners learn to read each other's plays, which makes it a bonding game.\n- IT TRAVELS — a single deck and four chairs are all you need, which is exactly why it thrived in barracks, dorms, and break rooms across the country.",
        ],
        codeExample: {
          label: "The Spades table (partnerships)",
          code: `        PARTNER (North)
             |
   WEST -----+----- EAST   <- opponents
             |
          YOU (South)

  TEAMS:  You + North   vs   West + East
  DEAL :  13 cards to each of the 4 players
  TRUMP:  SPADES, always (no bidding for trump)
  GOAL :  first team to 500 points wins`,
        },
      },
      incident: {
        title: "From 1930s America to the Whole World",
        when: "1930s–2000s",
        where: "United States → military bases → the early internet",
        impact: "A simple partnership game became a cultural staple of the U.S. military and college life, then one of the first massively popular online card games",
        body: [
          "Spades was developed in the United States in the 1930s, likely in the Midwest, as a simplified relative of older trick-taking games like Whist and Bridge. Its big growth came with World War II: it was easy to teach, quick to play between duties, and needed nothing but a deck of cards, so soldiers carried it everywhere. After the war those same players spread it through colleges and communities across the country.",
          "Its second explosion came online:\n- In the late 1990s and 2000s, Spades was a flagship game on services like Yahoo! Games and the MSN Gaming Zone, where millions played it against strangers.\n- That era cemented the now-standard online rules — bidding, nil, and the bag penalty — that this course teaches.\n- Through all of it the core never changed: four players, partners across, and spades on top.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal All 52 Cards", sub: "13 to each of 4 players", type: "system" },
          { label: "Partners Sit Across", sub: "two teams of two", type: "attacker" },
          { label: "Spades Are Trump", sub: "fixed every hand, no auction", type: "victim" },
          { label: "Race to 500", sub: "best combined score wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Spades is developed in the United States from Whist-family games" },
        { year: 1945, event: "World War II soldiers spread the game across the U.S. military", highlight: true },
        { year: 1960, event: "Spades becomes a fixture on campuses and in communities nationwide" },
        { year: 1999, event: "Yahoo! Games and MSN Zone make Spades a top online card game" },
      ],
      keyTakeaways: [
        "Spades is a 4-player partnership trick-taking game with partners sitting across the table",
        "The spade suit is ALWAYS trump and there is no auction to choose trump",
        "It was developed in 1930s America and spread through the military, campuses, and online play",
        "The first team to reach 500 combined points wins the game",
      ],
      references: [
        { title: "Spades (card game) — overview", url: "https://en.wikipedia.org/wiki/Spades_(card_game)" },
        { title: "Trick-taking game", url: "https://en.wikipedia.org/wiki/Trick-taking_game" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-01-q1", type: "Core Idea", challenge: "How many players and teams.", text: "How is a standard game of Spades set up?", options: ["Four players in two partnerships, partners sitting across the table", "Two players, one each", "Six players in three teams", "Four players, every player for themselves"], correctIndex: 0, explanation: "Standard Spades is four players in two partnerships, with partners seated opposite each other." },
        { id: "spades-1-01-q2", type: "Trump", challenge: "What's trump?", text: "Which suit is trump in Spades?", options: ["Spades, always", "Whichever suit is led first", "The suit chosen by bidding each hand", "There is no trump suit"], correctIndex: 0, explanation: "Spades is the permanent trump suit every hand — there is no auction to pick trump." },
        { id: "spades-1-01-q3", type: "Origin", challenge: "Where it comes from.", text: "Where and when did Spades originate?", options: ["In the United States in the 1930s", "In England in the 1700s", "In France in the 1500s", "In Japan in the 1980s"], correctIndex: 0, explanation: "Spades was developed in the United States in the 1930s and spread through the military in WWII." },
        { id: "spades-1-01-q4", type: "Winning", challenge: "The finish line.", text: "How does a game of Spades end?", options: ["The first team to reach 500 points wins", "After exactly five hands", "When one player runs out of cards", "When someone bids nil"], correctIndex: 0, explanation: "Teams play hands until one reaches the target score, traditionally 500 points." },
        { id: "spades-1-01-q5", type: "The Deal", challenge: "Cards per player.", text: "How many cards is each player dealt?", options: ["13", "7", "10", "5"], correctIndex: 0, explanation: "The full 52-card deck is dealt evenly, giving each of the four players 13 cards." },
      ],
    },
  },

  // ─── spades-1-02: The Deal & Trump ───────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The fixed trump suit", location: "Every Spades hand", era: "Modern", emoji: "🃏" },
    id: "spades-1-02",
    order: 2,
    title: "The Deal & Trump",
    subtitle: "52 cards, 13 each, and the suit that always wins",
    category: "sports",
    xp: 87,
    badge: { id: "spades-badge-02", name: "Knows the Deck", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "Every hand starts the same way: shuffle, deal all 52 cards, and remember one rule that never changes — any spade beats any card of another suit. Understanding the deal and the fixed trump is the foundation of everything else.",
      year: 2024,
      overview: [
        "Spades uses a standard 52-card deck with no jokers (in the basic game). The dealer shuffles and deals the cards one at a time, clockwise, until all 52 are gone — 13 to each player. Within each suit, cards rank in the normal order: Ace is high, then King, Queen, Jack, 10, down to 2. The deal rotates one seat to the left each hand so everyone deals over time.",
        "The single most important rule in Spades is the trump:\n- SPADES ARE PERMANENT TRUMP — a spade beats any card of the other three suits (hearts, diamonds, clubs), no matter how high that card is.\n- So the 2 of spades beats the Ace of hearts, because the lowest trump still outranks the highest non-trump.\n- There is NO BIDDING FOR TRUMP — unlike Bridge or Euchre, the trump suit is fixed before anyone even looks at their cards.",
        "Because trump is fixed, your spades are your power cards:\n- A hand full of high spades is very strong, because each one can win a trick when you can no longer follow a led suit.\n- The other three suits ('side suits') only win a trick if no spade is played to beat them.\n- Counting how many spades you and your opponents hold is a core skill (covered later) — but it all rests on knowing that spades trump everything, every hand.",
      ],
      technical: {
        title: "Card Ranking, the Dealer Rotation, and Why Fixed Trump Matters",
        body: [
          "The ranking inside a hand is simple but exact:\n- WITHIN ANY SUIT the order is A (high), K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2 (low).\n- ACROSS SUITS, a spade always outranks a non-spade; among non-spades, a card only matters if it follows the suit that was led.\n- The dealer position rotates clockwise each hand, which keeps the deal fair and changes who leads first over the course of a game.",
          "Fixing the trump suit is what gives Spades its character:\n- In games like Bridge the players bid to NAME trump; in Spades that decision is removed, so all the strategy moves into how many TRICKS you bid and how you manage your spades.\n- Because everyone always knows trump is spades, the game becomes about counting and timing — when to play a spade, when to save it, and when an opponent is out of a suit.\n- This is why a beginner can sit down in minutes: there is no trump auction to learn, just 'spades win'.",
        ],
        codeExample: {
          label: "Card ranking and trump",
          code: `  RANK WITHIN A SUIT (high to low):
    A K Q J 10 9 8 7 6 5 4 3 2

  TRUMP RULE:
    any SPADE  >  any heart / diamond / club

  EXAMPLE:
    2 of spades  BEATS  A of hearts
    (lowest trump outranks highest non-trump)

  THE DEAL: 52 cards, 13 each, dealer rotates left`,
        },
      },
      incident: {
        title: "Why 'Always Spades' Beats an Auction",
        when: "Comparing card games",
        where: "Spades vs Bridge and Euchre",
        impact: "By fixing the trump suit, Spades stripped away the most complex part of older trick-taking games and made a deep game instantly approachable",
        body: [
          "Spades descends from the Whist family, the same lineage as Bridge. Those older games spend enormous effort on an auction to decide the trump suit and the contract — a barrier that takes serious study to learn. Spades made one radical simplification: trump is always the spade suit, decided for you, forever.",
          "That single choice is a big reason the game spread so fast:\n- New players skip the hardest concept (naming trump) and start playing immediately.\n- Veterans still get deep strategy, because all the thinking shifts to bidding tricks and managing a known trump suit.\n- The result is a game that is genuinely easy to start and hard to master — the sweet spot that made it a barracks and dorm-room classic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Shuffle & Deal", sub: "52 cards, 13 each, clockwise", type: "system" },
          { label: "Rank Within Suit", sub: "Ace high down to 2", type: "attacker" },
          { label: "Spades Trump All", sub: "any spade beats any side card", type: "victim" },
          { label: "No Trump Auction", sub: "fixed before you look", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Spades fixes trump as the spade suit, simplifying its Whist ancestors" },
        { year: 1945, event: "Standard 52-card, no-joker deal becomes the common form", highlight: true },
        { year: 1990, event: "House rules add jokers in some variants, but base trump stays spades" },
        { year: 2024, event: "Fixed-spade trump remains the defining rule worldwide" },
      ],
      keyTakeaways: [
        "A standard 52-card deck is dealt 13 cards to each of the four players",
        "Cards rank Ace-high down to 2 within each suit",
        "Any spade beats any heart, diamond, or club — the 2 of spades beats the Ace of hearts",
        "Trump is fixed as spades; there is no auction to choose it",
      ],
      references: [
        { title: "Spades (card game) — the deal and trump", url: "https://en.wikipedia.org/wiki/Spades_(card_game)" },
        { title: "Standard 52-card deck", url: "https://en.wikipedia.org/wiki/Standard_52-card_deck" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-02-q1", type: "Trump Power", challenge: "Low trump vs high side card.", text: "Which card wins: the 2 of spades or the Ace of hearts?", options: ["The 2 of spades — any spade beats any non-spade", "The Ace of hearts, because it's higher", "They tie", "Whichever was played first"], correctIndex: 0, explanation: "Spades are trump, so even the lowest spade outranks the highest card of another suit." },
        { id: "spades-1-02-q2", type: "Ranking", challenge: "Highest in a suit.", text: "What is the highest-ranking card within a suit?", options: ["The Ace", "The King", "The 2", "The Jack"], correctIndex: 0, explanation: "Within each suit the Ace is high, then King, Queen, Jack, and down to the 2." },
        { id: "spades-1-02-q3", type: "Choosing Trump", challenge: "Who picks trump?", text: "How is the trump suit chosen each hand?", options: ["It isn't chosen — spades are always trump", "Players bid for it", "The dealer names it", "The first card led sets it"], correctIndex: 0, explanation: "Trump is fixed as spades every hand; there is no auction or selection." },
        { id: "spades-1-02-q4", type: "The Deck", challenge: "What's in the deck.", text: "How many cards are dealt in a basic game of Spades?", options: ["All 52 cards (13 to each player)", "Only 40 cards", "32 cards", "24 cards"], correctIndex: 0, explanation: "The entire standard 52-card deck is dealt out, 13 to each of the four players." },
        { id: "spades-1-02-q5", type: "The Deal", challenge: "Who deals next.", text: "How does the deal move from hand to hand?", options: ["It rotates one seat clockwise each hand", "The same player always deals", "The winner of the last trick deals", "It is chosen at random each time"], correctIndex: 0, explanation: "The deal rotates clockwise so each player deals over the course of the game." },
      ],
    },
  },

  // ─── spades-1-03: Bidding Tricks ─────────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The bid", location: "Before the first card is played", era: "Modern", emoji: "🔢" },
    id: "spades-1-03",
    order: 3,
    title: "Bidding Tricks",
    subtitle: "Predicting your tricks and forming the team contract",
    category: "sports",
    xp: 89,
    badge: { id: "spades-badge-03", name: "Bid Caller", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "Before a single card is played, each player promises how many tricks they will win. Your bid and your partner's bid add together into one team contract — and the whole game turns on whether you make it.",
      year: 2024,
      overview: [
        "After the deal, players bid in turn (clockwise, starting left of the dealer). A bid is a number: how many of the 13 tricks you predict YOUR side will win with your hand. Bids run from 0 (a 'nil', covered later) up to 13. You look at your cards and estimate your 'sure' tricks — high spades, Aces, protected Kings — and announce a number.",
        "The key idea is that bids combine into a TEAM contract:\n- Your bid plus your partner's bid is your team's target for the hand. If you bid 4 and your partner bids 3, your team must win at least 7 tricks together.\n- You do NOT each have to make your own number exactly — the team total is what is scored.\n- This is why partners think about what the other likely has, and why later you can 'support' a partner who is short.",
        "Scoring rewards hitting the contract and punishes missing it:\n- MAKE THE CONTRACT (take at least your combined bid) and you score 10 points per bid trick — a bid of 7 made is worth 70 points.\n- MISS THE CONTRACT ('get set') and you LOSE 10 points per bid trick — bidding 7 and taking only 6 costs you 70 points.\n- Extra tricks beyond your bid score only 1 point each as 'bags' (and bags carry a hidden penalty, covered later) — so bidding accurately, neither too high nor too low, is the heart of the game.",
      ],
      technical: {
        title: "Counting Your Tricks and Bidding Accurately",
        body: [
          "Beginners estimate tricks from a few reliable sources:\n- HIGH SPADES — the Ace, King, and Queen of spades are strong trick-takers because spades are trump; lots of spades also let you win once you run out of a side suit.\n- SIDE ACES — an Ace in hearts, diamonds, or clubs usually wins a trick the first time that suit is led.\n- SHORT SUITS — having few or no cards in a side suit (being 'void' or 'short') lets you trump in with a spade, which can add tricks.",
          "The skill is bidding the RIGHT number:\n- OVERBIDDING (promising more than you can take) risks getting set and losing big — the worst outcome in Spades.\n- UNDERBIDDING (promising fewer than you'll take) is safer but piles up 'bags' that eventually cost you 100 points.\n- A common guideline is to count your near-certain tricks and add a partial trick for strong-but-not-sure cards; with experience you learn your table's tendencies and bid to the team total, not just your own hand.",
        ],
        codeExample: {
          label: "From hand to team contract",
          code: `  YOU bid:      4 tricks
  PARTNER bids: 3 tricks
  -------------------------------
  TEAM CONTRACT: 7 tricks needed

  SCORING THIS HAND:
    take 7 (or more) ->  +70  (10 x bid)
    take only 6      ->  -70  (set: -10 x bid)
    take 9 (7 + 2)   ->  +72  (70 + 2 bag points)
                            ^ bags add up... carefully`,
        },
      },
      incident: {
        title: "The Set: Why One Missed Trick Hurts",
        when: "Every competitive game",
        where: "Spades tables everywhere",
        impact: "Because a missed contract loses the full bid value, a single overbid trick can swing 100+ points — making disciplined bidding the difference between winning and losing",
        body: [
          "The most painful moment in Spades is being 'set' — falling even one trick short of your combined bid. If your team bid 8 and takes only 7, you don't just miss out on points; you LOSE 80. A bold overbid that fails can erase a whole game's lead in a single hand.",
          "This asymmetry shapes how good players bid:\n- They count conservatively, because the downside of overbidding (a big minus) is worse than the downside of underbidding (a few bags).\n- They communicate through the bid itself — a higher bid tells your partner you have a strong hand.\n- They learn that 'bid what you can make' beats 'bid what you hope for', because the set is the fastest way to lose a game you were winning.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count Your Tricks", sub: "high spades, aces, voids", type: "system" },
          { label: "Announce Your Bid", sub: "0 to 13, in turn", type: "attacker" },
          { label: "Combine With Partner", sub: "two bids = team contract", type: "victim" },
          { label: "Make It or Get Set", sub: "+10 per bid, or -10 per bid", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Early Spades scores by individual or team bid contracts" },
        { year: 1945, event: "Partnership bidding (combined team total) becomes standard", highlight: true },
        { year: 1999, event: "Online rooms standardize the 10-per-bid, -10-if-set scoring" },
        { year: 2024, event: "Accurate bidding is taught as the single most important skill" },
      ],
      keyTakeaways: [
        "Each player bids how many tricks their side will win; bids range from 0 (nil) to 13",
        "Your bid and your partner's bid combine into one team contract for the hand",
        "Making the contract scores 10 points per bid trick; getting set loses 10 per bid trick",
        "Overbidding risks a big set; underbidding piles up 'bags' — accuracy is everything",
      ],
      references: [
        { title: "Spades (card game) — bidding and scoring", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Bidding" },
        { title: "Contract (trick-taking games)", url: "https://en.wikipedia.org/wiki/Contract_bridge" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-03-q1", type: "The Contract", challenge: "Adding the bids.", text: "You bid 4 and your partner bids 3. How many tricks must your team win?", options: ["At least 7", "Exactly 4", "Exactly 3", "At least 13"], correctIndex: 0, explanation: "Partners' bids combine: 4 + 3 = 7 tricks needed as a team." },
        { id: "spades-1-03-q2", type: "Scoring", challenge: "Making it.", text: "If your team bids 5 and makes it, how many points do you score for the bid?", options: ["50 points (10 per bid trick)", "5 points", "500 points", "25 points"], correctIndex: 0, explanation: "A made contract scores 10 points per bid trick, so a bid of 5 is worth 50." },
        { id: "spades-1-03-q3", type: "The Set", challenge: "Falling short.", text: "Your team bids 6 but takes only 5 tricks. What happens?", options: ["You are 'set' and lose 60 points", "You score 50 points", "You score 60 points", "Nothing changes"], correctIndex: 0, explanation: "Missing the contract is a 'set' — you lose 10 points per bid trick, here -60." },
        { id: "spades-1-03-q4", type: "Counting", challenge: "Where tricks come from.", text: "Which of these is a reliable source of tricks when bidding?", options: ["High spades and side-suit Aces", "Low cards in long suits", "Twos and threes", "Cards you plan to discard"], correctIndex: 0, explanation: "High spades (trump) and side Aces are the most dependable trick-takers." },
        { id: "spades-1-03-q5", type: "Discipline", challenge: "Which error is worse.", text: "Why do good players bid conservatively?", options: ["Getting set loses the full bid value, a bigger penalty than a few bags", "Bidding low is against the rules", "High bids are never allowed", "Conservative bids always win the hand"], correctIndex: 0, explanation: "The set penalty is severe, so it is safer to slightly underbid than to overbid and miss." },
      ],
    },
  },

  // ─── spades-1-04: Following Suit, Trumping & Breaking Spades ──────────────────
  {
    epochId: "spades-1",
    wonder: { name: "Breaking spades", location: "The moment trump enters play", era: "Modern", emoji: "✂️" },
    id: "spades-1-04",
    order: 4,
    title: "Following Suit, Trumping & 'Breaking Spades'",
    subtitle: "The rules of the trick — and the one suit you can't lead yet",
    category: "sports",
    xp: 91,
    badge: { id: "spades-badge-04", name: "Suit Follower", emoji: "✂️" },
    challengeType: "quiz",
    info: {
      tagline: "Every trick has rules: follow the led suit if you can, trump in if you can't, and never lead a spade until they've been 'broken'. These three rules govern how every single card is played.",
      year: 2024,
      overview: [
        "Play happens one trick at a time. The leader plays any legal card, and going clockwise each player must FOLLOW SUIT — play a card of the same suit that was led — if they have one. The highest card of the led suit wins the trick, unless someone plays a spade. The winner of a trick leads the next one.",
        "What happens when you CAN'T follow suit is where trump comes alive:\n- If you have no card of the led suit, you may 'trump in' by playing a spade, which beats any non-spade in the trick.\n- If two players trump the same trick, the HIGHER spade wins.\n- You may also choose to 'throw off' (discard) a card of another non-trump suit instead of trumping, which loses the trick but lets you keep a spade or dump a weak card.",
        "The signature rule is BREAKING SPADES:\n- You may NOT lead a spade until spades have been 'broken' — meaning a spade has already been played because someone couldn't follow a led side suit (or, in some rules, was discarded).\n- The one exception: if a player has NOTHING but spades in their hand, they are allowed to lead a spade.\n- This rule keeps trump from being thrown out too early and is one of the first things every new player must remember.",
      ],
      technical: {
        title: "Legal Plays, the Order of Power, and When Spades Break",
        body: [
          "The legality of a play follows a strict order:\n- IF you can follow the led suit, you MUST (you cannot trump or discard while holding the led suit).\n- IF you cannot follow, you may play a spade (trump in) OR discard any other card.\n- WITHIN the trick, a spade beats any non-spade; if no spade is played, the highest card of the LED suit wins; side cards of other suits can never win a trick they don't follow.",
          "'Breaking spades' is precise and worth getting right:\n- Spades become 'broken' the first time a spade is legally played on a trick led with another suit (because a player was void in that suit) — or, under some house rules, when a spade is first discarded.\n- Until that happens, no one may LEAD a spade, so the early tricks are usually fought in the side suits.\n- The lone exception protects a player whose entire hand is spades: they may lead one because they have no other choice. Knowing exactly when spades are broken tells you when you can finally lead trump to draw out opponents' spades.",
        ],
        codeExample: {
          label: "Following suit and trumping",
          code: `  TRICK: hearts are LED

  YOU HOLD a heart?
    -> you MUST play a heart (follow suit)

  YOU HOLD no heart?
    -> play a SPADE  (trump in, beats all hearts)
       OR discard a club/diamond (lose the trick)

  LEADING A SPADE:
    only AFTER spades are 'broken'
    (a spade was played on a non-spade lead)
    exception: your hand is ALL spades`,
        },
      },
      incident: {
        title: "The Classic Beginner Foul: Leading Spades Too Soon",
        when: "Every new player's first games",
        where: "Kitchen tables and online lobbies",
        impact: "Forgetting that spades must be 'broken' before they can be led is the most common rules mistake — and a quick way to give away trump and tricks",
        body: [
          "New players constantly try to lead a spade on the very first trick, or before any spade has been played. It is illegal: you can't lead trump until it's broken. Online clients simply won't let you; at a kitchen table, an opponent will (politely) make you take the card back.",
          "The rule exists for a good reason, and learning it teaches real strategy:\n- It stops players from dumping all their trump early and keeps the side suits in play, which makes bidding and counting meaningful.\n- Once you understand WHEN spades break, you can plan to break them yourself (by getting void in a suit) to seize control of trump.\n- The lone-hand exception (all spades) is rare but important to know, so you're never stuck with an illegal hand.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Suit Is Led", sub: "everyone follows if able", type: "system" },
          { label: "Follow Suit First", sub: "must play the led suit", type: "attacker" },
          { label: "Void? Trump or Discard", sub: "spade wins, or throw off", type: "victim" },
          { label: "Spades 'Break'", sub: "only then can you lead them", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Follow-suit and trump rules inherited from the Whist family" },
        { year: 1945, event: "The 'spades must be broken' lead restriction becomes standard", highlight: true },
        { year: 1999, event: "Online clients enforce breaking spades automatically" },
        { year: 2024, event: "Breaking spades remains the first rule every beginner learns" },
      ],
      keyTakeaways: [
        "You must follow the led suit if you have a card in it",
        "If you are void in the led suit, you may trump with a spade or discard another suit",
        "A spade beats any non-spade; the higher spade wins if two are played",
        "You cannot LEAD a spade until spades are 'broken' — unless your hand is all spades",
      ],
      references: [
        { title: "Spades (card game) — play and breaking spades", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Playing" },
        { title: "Following suit", url: "https://en.wikipedia.org/wiki/Trick-taking_game#Following" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-04-q1", type: "Following Suit", challenge: "You can follow.", text: "Hearts are led and you hold a heart. What must you do?", options: ["Play a heart (follow suit)", "Play a spade to trump", "Discard a club", "Lead a new suit"], correctIndex: 0, explanation: "If you can follow the led suit, you must — you can't trump or discard while holding it." },
        { id: "spades-1-04-q2", type: "Trumping", challenge: "You are void.", text: "Hearts are led but you have no hearts. What may you do?", options: ["Play a spade to trump in, or discard another suit", "You must pass", "You must still play a heart", "You automatically win"], correctIndex: 0, explanation: "Void in the led suit, you may trump with a spade or throw off a different card." },
        { id: "spades-1-04-q3", type: "Breaking Spades", challenge: "Leading trump.", text: "When may you LEAD a spade?", options: ["Only after spades have been 'broken' (or if your hand is all spades)", "On the very first trick", "Any time you want", "Only on the last trick"], correctIndex: 0, explanation: "Spades can't be led until broken, with the exception of a hand containing only spades." },
        { id: "spades-1-04-q4", type: "Two Trumps", challenge: "Spade on spade.", text: "If two players both play a spade on a trick, which wins?", options: ["The higher spade", "The first spade played", "The lower spade", "Neither — it's void"], correctIndex: 0, explanation: "When multiple spades are played, the highest-ranking spade takes the trick." },
        { id: "spades-1-04-q5", type: "When It Breaks", challenge: "The trigger.", text: "How do spades typically get 'broken'?", options: ["When someone plays a spade because they can't follow the led suit", "When the dealer announces it", "After three tricks no matter what", "When someone bids nil"], correctIndex: 0, explanation: "Spades break the first time a spade is played on a non-spade lead by a void player." },
      ],
    },
  },

  // ─── spades-1-05: Nil Bids ───────────────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The nil bid", location: "The signature gamble of Spades", era: "Modern", emoji: "0️⃣" },
    id: "spades-1-05",
    order: 5,
    title: "Nil Bids",
    subtitle: "Bidding zero for a big bonus — and the cost of failing",
    category: "sports",
    xp: 93,
    badge: { id: "spades-badge-05", name: "Nil Runner", emoji: "0️⃣" },
    challengeType: "quiz",
    info: {
      tagline: "The nil bid is the soul of Spades: you promise to win ZERO tricks for a large bonus, usually +100. Pull it off and it's the biggest swing in the game. Take even one trick and you lose all 100 — pure nerve and card management.",
      year: 2024,
      overview: [
        "A 'nil' (or 'nello') is a bid of zero — you are promising to take NO tricks during the entire hand. It is the signature play of Spades and exists because it changes the goal: instead of winning tricks, you are desperately trying to LOSE every one of them. To do that you need a hand full of low cards and no awkward high ones.",
        "The reward and the risk are both large:\n- SUCCESS — if you take zero tricks, your team scores a bonus, most commonly +100 points, on top of your partner's normal bid.\n- FAILURE — if you take even a single trick, you 'break' the nil and LOSE 100 points (and any tricks you took usually still count as bags).\n- That ±100 swing is why a well-timed nil can win a game and a busted nil can lose one.",
        "Whether a hand is safe for nil comes down to its shape:\n- LOW CARDS ARE SAFE — 2s through small numbers can almost always be played UNDER an opponent's card to avoid winning a trick.\n- HIGH CARDS ARE DANGER — Aces and Kings (and high spades) are likely to win a trick you don't want.\n- VOIDS HELP — being void in a side suit lets you discard a dangerous card when that suit is led, and a few low spades are usually safe because everyone must follow suit first.",
      ],
      technical: {
        title: "Reading a Nil Hand and Dodging Tricks",
        body: [
          "Before bidding nil, players scan for 'danger cards':\n- A bare Ace or King in a side suit is a classic nil-breaker, because when that suit is led you may be forced to win.\n- Many high spades are dangerous too, since once spades are led your high trump can be stranded as a winner.\n- The ideal nil hand is full of 2s, 3s, and 4s with a void or two, so you can always duck under or discard.",
          "Playing a nil is an exercise in losing on purpose:\n- DUCK — when a suit is led, play your highest card that still LOSES the trick, getting rid of dangerous cards safely while you can.\n- DISCARD DANGER ON VOIDS — when a suit you're void in is led, throw your scariest off-suit card (like that bare Ace).\n- WATCH THE LEAD — you don't want to be forced to lead, because leading often means winning; good partners help by taking control of the tricks (covered in a later stage).",
        ],
        codeExample: {
          label: "A nil bid: scoring and danger",
          code: `  YOU bid:  NIL (0 tricks)

  OUTCOME:
    take 0 tricks  ->  +100  (nil made!)
    take 1+ trick  ->  -100  (nil broken)

  GOOD NIL HAND (low + voids):
    spades:  3 2
    hearts:  (void)
    diamonds: 6 4 3 2
    clubs:   7 5 4 3 2

  DANGER CARDS to avoid holding: A, K, high spades`,
        },
      },
      incident: {
        title: "Nil: The Bid That Defines the Game",
        when: "Throughout Spades history",
        where: "Casual and tournament play alike",
        impact: "The nil bid is what separates Spades from ordinary trick-taking games — a high-variance gamble that rewards card-reading and partnership over raw luck",
        body: [
          "Plenty of games have you win tricks; Spades' genius is the nil, where the entire goal flips. Going for zero requires reading your hand cold, planning every discard, and trusting your partner to take the tricks you can't afford to. It's the moment in a hand where skill and nerve matter most.",
          "The nil also makes Spades a great partnership game:\n- A nil is rarely a solo act — your partner usually bids extra and plays to 'cover' you, deliberately winning tricks so you don't have to.\n- Deciding WHEN to risk a nil (when you're behind, when your hand is clean) is a core strategic judgment.\n- Because a busted nil swings 100+ points, it keeps every game tense to the end — exactly why players love it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Bid Zero (Nil)", sub: "promise to take no tricks", type: "system" },
          { label: "Scan for Danger", sub: "Aces, Kings, high spades", type: "attacker" },
          { label: "Duck Every Trick", sub: "play low, discard danger", type: "victim" },
          { label: "+100 or -100", sub: "clean nil vs busted nil", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Early Spades experiments with zero-trick 'nil' bidding" },
        { year: 1945, event: "Nil becomes a standard bid worth a large bonus", highlight: true },
        { year: 1999, event: "Online rooms fix the common +100 / -100 nil scoring" },
        { year: 2024, event: "The nil bid is recognized as the game's signature play" },
      ],
      keyTakeaways: [
        "A nil is a bid of zero — you promise to take no tricks at all",
        "Making a nil is usually worth +100; breaking it (taking any trick) loses 100",
        "Low cards and voids make a hand safe for nil; Aces, Kings, and high spades are dangerous",
        "Play a nil by ducking under tricks and discarding danger cards when you can",
      ],
      references: [
        { title: "Spades (card game) — nil and bonus bids", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Nil" },
        { title: "Misère (zero-trick bids)", url: "https://en.wikipedia.org/wiki/Mis%C3%A8re" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-05-q1", type: "Definition", challenge: "What a nil is.", text: "What does it mean to bid 'nil'?", options: ["To promise you will take zero tricks the entire hand", "To bid all 13 tricks", "To pass on bidding", "To name a new trump suit"], correctIndex: 0, explanation: "A nil bid is a promise to win exactly zero tricks during the hand." },
        { id: "spades-1-05-q2", type: "Reward", challenge: "Making it.", text: "What is a successful nil typically worth?", options: ["+100 points", "+10 points", "+500 points", "+1 point"], correctIndex: 0, explanation: "A made nil usually scores a +100 bonus, on top of the partner's normal bid." },
        { id: "spades-1-05-q3", type: "Penalty", challenge: "Breaking it.", text: "What happens if you take even one trick after bidding nil?", options: ["You lose 100 points (the nil is 'broken')", "Nothing, you just score normally", "You win the hand", "You score +50"], correctIndex: 0, explanation: "Taking any trick breaks the nil, costing your team 100 points." },
        { id: "spades-1-05-q4", type: "Hand Shape", challenge: "Safe for nil.", text: "Which hand is best suited for a nil bid?", options: ["Lots of low cards (2s-4s) and a void suit", "Several Aces and Kings", "All high spades", "A balanced hand of medium cards"], correctIndex: 0, explanation: "Low cards and voids let you duck or discard, which is exactly what a nil needs." },
        { id: "spades-1-05-q5", type: "Technique", challenge: "Losing on purpose.", text: "How do you safely get rid of a dangerous Ace during a nil?", options: ["Discard it when a suit you're void in is led", "Lead it immediately", "Hold it until the last trick", "Trump with it"], correctIndex: 0, explanation: "When a void suit is led, you can throw off your most dangerous card without winning." },
      ],
    },
  },

  // ─── spades-1-06: Blind Nil & Blind Bids ─────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The blind nil", location: "The boldest bid in the game", era: "Modern", emoji: "🙈" },
    id: "spades-1-06",
    order: 6,
    title: "Blind Nil & Blind Bids",
    subtitle: "Bidding zero before you look — the high-risk comeback gamble",
    category: "sports",
    xp: 95,
    badge: { id: "spades-badge-06", name: "Blind Gambler", emoji: "🙈" },
    challengeType: "quiz",
    info: {
      tagline: "A blind nil is the ultimate gamble: you bid zero tricks BEFORE looking at your cards, for an even bigger bonus. Usually allowed only when your team is far behind, it's the desperation play that can flip a losing game.",
      year: 2024,
      overview: [
        "A 'blind nil' is a nil bid declared before you've seen your hand. Because you're betting blind, the reward is larger than a normal nil — commonly +200 (with -200 if it fails) instead of ±100. It is the boldest bid in Spades and is usually offered only as a comeback tool when a team is badly behind.",
        "Most house rules gate the blind nil behind a deficit:\n- A common rule allows a blind bid only when your team is trailing by a set margin (often 100 or more points), so it functions as a catch-up mechanic.\n- Some games also allow a 'blind' team bid (e.g., 'blind 6') for a bonus, declared before looking, but the blind NIL is the famous one.\n- Because you bid before seeing your cards, it's far riskier than a normal nil — you might find yourself stuck with Aces you can't avoid winning with.",
        "To soften the gamble, many rule sets allow a card PASS with a blind nil:\n- After bidding blind nil and then looking, you and your partner each pass one or two cards to each other (you give your worst cards, they give you their lowest).\n- This swap improves your chance of ducking every trick and is a small mercy for taking the big risk.\n- Even with the pass, blind nil fails often — which is exactly why it's reserved for when you have little to lose.",
      ],
      technical: {
        title: "When to Risk It, and the Card Pass",
        body: [
          "The decision to go blind is about score, not cards (you can't see them):\n- You take the blind nil when you're far enough behind that a normal game plan won't catch up — the +200 can erase a big gap in one hand.\n- You avoid it when you're close or ahead, because the -200 downside is catastrophic.\n- It's a calculated act of desperation: trading high variance for a real shot at a comeback.",
          "The card pass turns a blind gamble into a survivable one:\n- A typical rule: declare blind nil, then exchange two cards with your partner — you hand over your two most dangerous cards and receive their two lowest.\n- After the swap, you play the nil normally: duck under tricks, dump danger on voids, and lean on your partner to 'cover' you.\n- Your partner, knowing you're blind, bids extra and plays to win the tricks you can't afford, so the pair functions as a team even on the wildest bid.",
        ],
        codeExample: {
          label: "Blind nil vs regular nil",
          code: `  REGULAR NIL:
    look at hand, THEN bid 0   ->  +100 / -100

  BLIND NIL:
    bid 0 BEFORE looking       ->  +200 / -200
    (usually allowed only when far behind)

  OPTIONAL CARD PASS (house rule):
    after bidding blind, swap 2 cards
    YOU give: your 2 worst (high) cards
    PARTNER gives: their 2 lowest cards`,
        },
      },
      incident: {
        title: "The Comeback Mechanic",
        when: "Casual and tournament Spades",
        where: "House rules around the world",
        impact: "The blind nil exists as a built-in comeback rule — a swingy, high-stakes option that keeps a losing team alive and every game dramatic to the finish",
        body: [
          "Without a catch-up mechanic, a big early lead in Spades could make the rest of a game a formality. The blind nil fixes that: by offering a ±200 swing to a trailing team, it gives the underdogs a real, if dangerous, path back. It's a piece of game design that keeps tables tense.",
          "Players treat it as a calculated last resort:\n- Going blind when you're 150 points behind can be the mathematically correct play, even though it often fails.\n- The optional card pass and an alert partner improve the odds just enough to make it worth attempting.\n- Win or lose, the blind nil is the most dramatic moment in Spades — which is exactly why house rules keep it around.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Trailing Badly", sub: "behind by a set margin", type: "system" },
          { label: "Bid Nil Blind", sub: "before seeing your cards", type: "attacker" },
          { label: "Pass Cards (optional)", sub: "swap danger for low cards", type: "victim" },
          { label: "+200 or -200", sub: "the comeback gamble", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "Spades adds bonus bids beyond the simple contract" },
        { year: 1980, event: "Blind nil spreads as a comeback option in house rules", highlight: true },
        { year: 1999, event: "Online rooms add blind nil with deficit gates and optional passes" },
        { year: 2024, event: "Blind nil remains the highest-variance bid in the game" },
      ],
      keyTakeaways: [
        "A blind nil is a nil bid declared before you look at your cards",
        "It pays a larger bonus (often +200) but loses just as much (-200) if it fails",
        "House rules usually allow it only when your team is far behind — a comeback mechanic",
        "Many rule sets let blind-nil partners swap cards to improve the odds",
      ],
      references: [
        { title: "Spades (card game) — blind nil", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Blind_nil" },
        { title: "Spades variations and house rules", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Variations" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-06-q1", type: "Definition", challenge: "What makes it blind.", text: "What is a 'blind nil'?", options: ["A nil bid made before looking at your cards", "A nil bid made after careful study of your hand", "Bidding 13 tricks", "Refusing to bid at all"], correctIndex: 0, explanation: "A blind nil is bid before you've seen your hand, which is what makes it so risky." },
        { id: "spades-1-06-q2", type: "Stakes", challenge: "The bigger swing.", text: "How does blind nil scoring usually compare to a regular nil?", options: ["A larger bonus and penalty, commonly +200 / -200", "Exactly the same, +100 / -100", "No bonus at all", "A smaller +50 bonus"], correctIndex: 0, explanation: "Because you bid blind, the reward and the penalty are both bigger, often ±200." },
        { id: "spades-1-06-q3", type: "When Allowed", challenge: "The gate.", text: "When are players typically allowed to bid blind nil?", options: ["Only when their team is trailing by a set margin", "On every hand", "Only when they are ahead", "Only on the first hand"], correctIndex: 0, explanation: "Blind nil is usually a comeback rule, allowed only when a team is far behind." },
        { id: "spades-1-06-q4", type: "Card Pass", challenge: "Improving the odds.", text: "How do many rule sets help a blind-nil bidder?", options: ["By letting the partners swap a couple of cards", "By revealing the opponents' hands", "By skipping the nil player's turns", "By doubling the bonus again"], correctIndex: 0, explanation: "An optional card pass lets you trade away danger cards for your partner's low ones." },
        { id: "spades-1-06-q5", type: "Strategy", challenge: "Why gamble.", text: "Why would a team risk a blind nil despite the high failure rate?", options: ["The big +200 swing can erase a large deficit in a single hand", "It is required every game", "It guarantees a win", "It has no downside"], correctIndex: 0, explanation: "When far behind, the large potential swing makes the gamble worthwhile as a comeback." },
      ],
    },
  },

  // ─── spades-1-07: Bags / Sandbagging ─────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The bag pile", location: "Where overtricks come back to bite", era: "Modern", emoji: "🛍️" },
    id: "spades-1-07",
    order: 7,
    title: "Bags / Sandbagging",
    subtitle: "Why winning too many tricks can cost you 100 points",
    category: "sports",
    xp: 98,
    badge: { id: "spades-badge-07", name: "Bag Watcher", emoji: "🛍️" },
    challengeType: "quiz",
    info: {
      tagline: "In most games, more is better — not in Spades. Every trick you win beyond your bid is a 'bag', and collecting 10 bags triggers a brutal -100 penalty. The bag rule is why good players bid up and dump tricks on purpose.",
      year: 2024,
      overview: [
        "A 'bag' (also called a 'sandbag' or 'overtrick') is any trick your team wins ABOVE your combined bid. If you bid 5 and take 7, you made your contract but collected 2 bags. Each bag is worth just 1 point right now — but they accumulate across the whole game, and they come back to hurt you.",
        "The penalty is what makes bags matter:\n- THE 10-BAG RULE — whenever your team's running bag total reaches 10, you are hit with a -100 point penalty, and your bag count rolls back by 10 (so 10 bags = -100, and the count resets).\n- This means a string of 'safe' overbids quietly builds toward a 100-point disaster.\n- The penalty is why the game is sometimes called 'spades with sandbags' — taking extra tricks is a liability, not a reward.",
        "Understanding bags reshapes how you play:\n- DON'T OVER-COLLECT — once your contract is safe, you often want to LOSE the remaining tricks to avoid bags, by ducking and discarding.\n- BID UP WHEN YOU'LL WIN TRICKS ANYWAY — if your hand is going to take 6 tricks no matter what, bid 6, not 4, so those tricks count for points instead of bags.\n- WEAPONIZE THEM — a sharp team can deliberately force opponents to take extra tricks ('bagging them') to push them toward the -100 penalty.",
      ],
      technical: {
        title: "Counting Bags, Bidding to Avoid Them, and the 'Bag Bag'",
        body: [
          "Bags are tracked as a running ones-digit alongside the score:\n- Many scorers keep the team score plus a small bag counter; each made-hand overtrick adds 1 to both the score and the bag counter.\n- When the counter hits 10, subtract 100 from the score and reduce the counter by 10. A few rule sets use a different threshold, but 10 bags for -100 is the standard.\n- Note: when you get SET, you take no bags (you didn't make your bid), but you've already lost the bid value — a different, immediate penalty.",
          "Avoiding bags is mostly a bidding and end-of-hand skill:\n- BID ACCURATELY — the cleanest way to avoid bags is to bid close to what you'll actually take, so few tricks spill over.\n- DUMP LATE TRICKS — once your contract is locked, intentionally lose extra tricks by playing low and not trumping, so the overtricks go to the other team.\n- MIND THE THRESHOLD — if you're sitting on 8 or 9 bags, play extra carefully; one or two careless overtricks can trigger the -100 and swing the game.",
        ],
        codeExample: {
          label: "How bags pile up and bite",
          code: `  TEAM bid 5, took 7 tricks
    score:  +50  (made the bid)
    bags :  +2   (two overtricks)

  RUNNING BAG COUNTER across hands:
    ... 7 -> 8 -> 9 -> 10  *** -100 penalty! ***
    counter rolls back:  10 - 10 = 0

  LESSON: bid what you'll take; dump extra tricks`,
        },
      },
      incident: {
        title: "Sandbagging: The Anti-Greed Rule",
        when: "Standard Spades scoring",
        where: "Tables and online rooms everywhere",
        impact: "The bag penalty turns 'just take all the tricks you can' into a losing strategy, forcing players to bid honestly and play with restraint",
        body: [
          "Early trick-taking instincts say 'win everything you can'. Spades punishes that with the sandbag rule: hoard overtricks and you'll eventually eat a -100. The rule is a deliberate brake on greedy, lazy play — it forces you to predict your hand accurately and to throw tricks away when you don't need them.",
          "The bag rule creates some of the game's best strategy:\n- 'Bag wars', where teams try to FORCE extra tricks onto opponents who are near the 10-bag cliff.\n- The discipline of 'dumping' — deliberately losing tricks late in a hand once your bid is safe.\n- A reason to bid bravely: if you'll take the tricks anyway, you may as well bid for them and score 10 each instead of 1 — turning would-be bags into real points.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Overtricks = Bags", sub: "tricks above your bid", type: "system" },
          { label: "Worth 1 Point Now", sub: "but they accumulate", type: "attacker" },
          { label: "10 Bags = -100", sub: "counter rolls back by 10", type: "victim" },
          { label: "Bid Up, Dump Extras", sub: "avoid the sandbag cliff", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "Spades adds overtrick ('bag') tracking to scoring" },
        { year: 1970, event: "The 10-bags-for-minus-100 penalty becomes the common standard", highlight: true },
        { year: 1999, event: "Online rooms enforce automatic bag counting and penalties" },
        { year: 2024, event: "Bag management is a core skill taught to every serious player" },
      ],
      keyTakeaways: [
        "A 'bag' is any trick you win beyond your combined bid; each is worth only 1 point",
        "Accumulating 10 bags triggers a -100 penalty and rolls your bag count back by 10",
        "Avoid bags by bidding accurately and dumping extra tricks once your contract is safe",
        "Bid up for tricks you'll win anyway so they score 10 each, not 1 — and bag your opponents toward the cliff",
      ],
      references: [
        { title: "Spades (card game) — bags and sandbagging", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Scoring" },
        { title: "Sandbagging (games)", url: "https://en.wikipedia.org/wiki/Sandbagging" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-07-q1", type: "Definition", challenge: "What a bag is.", text: "What is a 'bag' in Spades?", options: ["A trick won beyond your team's combined bid", "A bid of zero", "A missed contract", "A high spade"], correctIndex: 0, explanation: "A bag (or sandbag) is an overtrick — a trick taken above what you bid." },
        { id: "spades-1-07-q2", type: "The Penalty", challenge: "Hitting the limit.", text: "What happens when your team accumulates 10 bags?", options: ["You lose 100 points and the bag count rolls back by 10", "You win 100 points", "Nothing", "You must bid nil next hand"], correctIndex: 0, explanation: "Reaching 10 bags triggers a -100 penalty, and the counter drops back by 10." },
        { id: "spades-1-07-q3", type: "Value", challenge: "What a single bag scores.", text: "How many points is one bag worth in the moment?", options: ["1 point", "10 points", "100 points", "-10 points"], correctIndex: 0, explanation: "Each overtrick adds just 1 point now, but they accumulate toward the -100 penalty." },
        { id: "spades-1-07-q4", type: "Avoiding Bags", challenge: "Staying clean.", text: "Once your contract is safe, how do you avoid extra bags?", options: ["Deliberately lose remaining tricks by playing low and not trumping", "Win every remaining trick", "Bid nil immediately", "Trump every trick"], correctIndex: 0, explanation: "Dumping unneeded tricks keeps overtricks off your team and avoids the bag penalty." },
        { id: "spades-1-07-q5", type: "Smart Bidding", challenge: "Bags vs points.", text: "If your hand will clearly take 6 tricks, why bid 6 instead of 4?", options: ["Those tricks score 10 each as bid, instead of 1 each as bags", "Bidding 4 is illegal", "It guarantees a nil", "It avoids dealing next hand"], correctIndex: 0, explanation: "Bidding for tricks you'll win turns would-be bags into 10-point scoring tricks." },
      ],
    },
  },

  // ─── spades-1-08: Partnership Play & Supporting Nil ──────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "Covering the nil", location: "Where partners win together", era: "Modern", emoji: "🤝" },
    id: "spades-1-08",
    order: 8,
    title: "Partnership Play & Supporting Nil",
    subtitle: "Covering your partner, 'cover' cards, and legal table talk",
    category: "sports",
    xp: 100,
    badge: { id: "spades-badge-08", name: "True Partner", emoji: "🤝" },
    challengeType: "quiz",
    info: {
      tagline: "Spades is a team game, and the best teams play as one. The clearest example is 'covering' a partner's nil — winning tricks so they don't have to. Knowing how to support each other (within the rules on table talk) wins games.",
      year: 2024,
      overview: [
        "Because your scores combine, you and your partner are playing one shared hand from two sides of the table. Good partnership means thinking about what your partner needs, not just your own cards: who should win a given trick, who should duck, and how to protect a risky bid like a nil.",
        "Supporting (or 'covering') a nil is the signature partnership skill:\n- When your partner bids nil, your job is to WIN tricks they can't safely lose, so they don't get stuck taking one.\n- COVER CARDS — if your partner is void in a suit, you want a high card in that suit (or a spade) ready to grab the trick before it falls to them.\n- You often bid a little EXTRA to account for the tricks you'll have to take while covering — covering a nil usually means winning more tricks yourself.",
        "Partnership also runs through normal hands:\n- LEAD AND SIGNAL — the cards you choose to lead and play hint at your strength (a high lead may say 'I'm strong here'; ducking may say 'take this, partner').\n- TABLE TALK IS LIMITED — you may NOT tell your partner what cards you hold or what to play; doing so is against the rules. Communication has to happen through the legal bids and the cards you play.\n- READING A PARTNER over time — strong pairs learn each other's tendencies, which is why regular partners are so tough to beat.",
      ],
      technical: {
        title: "Covering a Nil, Cover Cards, and the Table-Talk Line",
        body: [
          "Covering a partner's nil is a concrete plan:\n- WIN EARLY when a dangerous suit is led, so your partner can dump their high card under your winner instead of being forced to take the trick.\n- KEEP COVER CARDS — hold onto an Ace or King (or high spade) specifically to seize tricks in the suits where your partner is most likely to get trapped.\n- TAKE CONTROL OF THE LEAD — by winning tricks you also choose what's led next, steering away from your partner's danger cards.",
          "There are clear limits on communication:\n- LEGAL — bidding (your number is information), and the cards you choose to play, including standard 'signals' through which card you lead or follow with.\n- ILLEGAL — telling your partner your holdings, instructing them what to play, or using gestures/codes. Most rules and all online rooms forbid this kind of table talk.\n- THE ART is conveying meaning within the rules: a thoughtful lead or a pointed duck can tell your partner a lot without saying a word.",
        ],
        codeExample: {
          label: "Covering a partner's nil",
          code: `  PARTNER bid: NIL    YOU bid: 5 (extra, to cover)

  A heart is led, PARTNER is void in hearts
    -> PARTNER must discard (danger: their A of clubs)
    -> YOU play a HIGH heart to WIN the trick
       so partner's risky cards fall safely

  COVER CARDS to keep: high cards in partner's
  void suits + a high spade to grab control`,
        },
      },
      incident: {
        title: "Why Regular Partners Dominate",
        when: "Club and tournament Spades",
        where: "Anywhere the game is played seriously",
        impact: "Teams that play together regularly read each other's cards and cover each other's bids so well that partnership chemistry often beats raw card luck",
        body: [
          "Walk into any serious Spades setting and you'll find that established partnerships clean up. The reason isn't better cards — it's that they've learned each other's habits: how their partner bids, which leads mean what, when a duck is a request to take the trick. That shared language lets them cover nils and avoid bags far better than strangers.",
          "This is the heart of Spades as a social game:\n- It rewards paying attention to your partner, not just your own hand.\n- It enforces fair play by banning explicit table talk, so the skill is in legal communication through cards.\n- It builds bonds — which is exactly why it became a fixture of barracks, dorms, and family tables, where the same partners play for years.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Think as a Team", sub: "two hands, one score", type: "system" },
          { label: "Cover the Nil", sub: "win the tricks partner can't", type: "attacker" },
          { label: "Hold Cover Cards", sub: "high cards in danger suits", type: "victim" },
          { label: "Signal, Don't Tell", sub: "table talk is limited", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "Partnership Spades develops covering and signaling conventions" },
        { year: 1970, event: "Anti-table-talk rules standardize legal communication", highlight: true },
        { year: 1999, event: "Online play removes verbal cues, sharpening card-based signals" },
        { year: 2024, event: "Partnership chemistry remains a defining edge in competitive Spades" },
      ],
      keyTakeaways: [
        "Partners share a score, so play to support each other, not just your own hand",
        "'Covering' a nil means winning tricks so your partner doesn't get stuck taking one",
        "Keep 'cover cards' — high cards in your partner's void suits and a high spade for control",
        "Explicit table talk (naming cards or instructing plays) is illegal; communicate through bids and plays",
      ],
      references: [
        { title: "Spades (card game) — partnership play", url: "https://en.wikipedia.org/wiki/Spades_(card_game)" },
        { title: "Signal (card games)", url: "https://en.wikipedia.org/wiki/Signal_(bridge)" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-08-q1", type: "Covering", challenge: "Helping a nil.", text: "Your partner bid nil. What is your main job?", options: ["Win the tricks they can't safely lose, so they take none", "Take zero tricks yourself", "Bid nil too", "Play your lowest cards always"], correctIndex: 0, explanation: "Covering a nil means grabbing the dangerous tricks so your partner stays clean." },
        { id: "spades-1-08-q2", type: "Cover Cards", challenge: "What to keep.", text: "What is a 'cover card' when supporting a partner's nil?", options: ["A high card in a suit your partner may get trapped in", "Your lowest card", "A bid of zero", "Any club"], correctIndex: 0, explanation: "Cover cards are high cards (or spades) you keep to win tricks in your partner's danger suits." },
        { id: "spades-1-08-q3", type: "Bidding to Cover", challenge: "Adjusting your bid.", text: "When your partner bids nil, how should you usually bid?", options: ["A bit higher, since you'll win extra tricks while covering", "Always nil as well", "As low as possible", "It doesn't matter"], correctIndex: 0, explanation: "Covering forces you to take more tricks, so you often bid a little extra to account for them." },
        { id: "spades-1-08-q4", type: "Table Talk", challenge: "What's allowed.", text: "Which of these is ILLEGAL communication in Spades?", options: ["Telling your partner which cards you hold or what to play", "Choosing which card to lead", "Bidding your number", "Ducking a trick on purpose"], correctIndex: 0, explanation: "Naming your cards or instructing your partner is banned; you communicate only through bids and plays." },
        { id: "spades-1-08-q5", type: "Teamwork", challenge: "Why pairs win.", text: "Why do regular partnerships tend to beat strangers?", options: ["They learn each other's tendencies and cover/signal better", "They get better cards", "They are allowed to talk freely", "They always bid nil"], correctIndex: 0, explanation: "Shared habits let regular partners read leads and cover bids far more effectively." },
      ],
    },
  },

  // ─── spades-1-09: Counting Trump & Setting Opponents ─────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "Counting the spades", location: "The memory game inside the card game", era: "Modern", emoji: "🧮" },
    id: "spades-1-09",
    order: 9,
    title: "Counting Trump & Setting Opponents",
    subtitle: "Tracking the spades, drawing trump, and breaking a bid",
    category: "sports",
    xp: 103,
    badge: { id: "spades-badge-09", name: "Trump Counter", emoji: "🧮" },
    challengeType: "quiz",
    info: {
      tagline: "Strong Spades players keep a running count of how many spades have been played. Knowing who holds trump lets you 'draw' it, protect your tricks, and — most satisfyingly — 'set' the opponents by stopping them from making their bid.",
      year: 2024,
      overview: [
        "There are exactly 13 spades in the deck. The single most valuable counting skill in Spades is keeping track of how many have been played and how many are still out. If you know all the remaining spades are in your hand, your other spades are guaranteed winners; if you know an opponent is out of trump, your side suits are safe to lead.",
        "Counting trump powers two big plays:\n- DRAWING TRUMP — once spades are broken, a player with lots of high spades can LEAD them repeatedly to pull spades out of opponents' hands, after which their side-suit Aces and Kings can't be trumped.\n- PROTECTING WINNERS — knowing the spades are gone means you can cash high side cards without fear of someone trumping in.\n- Both depend on having counted how many spades have appeared trick by trick.",
        "The most rewarding counting goal is the SET:\n- 'Setting' the opponents means stopping them from making their combined bid, so they LOSE 10 points per bid trick instead of scoring.\n- You set them by winning tricks they were counting on — trumping their side-suit winners, holding up high cards, and forcing them one trick short.\n- A good defensive team is always asking 'can we set them?' — it's both a points swing and the most satisfying play in the game.",
      ],
      technical: {
        title: "Tracking 13 Spades, Drawing Trump, and Engineering a Set",
        body: [
          "Counting trump is a simple running tally:\n- Start from 13. Subtract every spade you see played (including your own) trick by trick; what's left is the number of spades still unseen.\n- Pay attention to who FAILS to follow a spade lead — that tells you they're now void in trump, which is huge information.\n- You don't need a photographic memory; just keep the spade count and note who's out, and you'll outplay opponents who don't.",
          "Setting the opponents is targeted defense:\n- IDENTIFY THE TRICK THEY NEED — if they bid 6 and have taken 5, your goal is to deny them the 6th.\n- TRUMP THEIR WINNERS — when they lead a high side card to win a needed trick, trump in with a spade to steal it (if you're void in that suit).\n- HOLD UP AND TIME IT — sometimes you win a key trick late, when they can no longer recover the one they need. Counting both trump and their likely winners is what makes a deliberate set possible.",
        ],
        codeExample: {
          label: "Counting trump to set the bid",
          code: `  13 spades total.  Subtract as they appear:
    seen so far: A K Q J 9 7 5 4 2  (9 spades)
    -> 13 - 9 = 4 spades still out there

  OPPONENTS bid 6, have taken 5 (need 1 more)
    they lead the A of diamonds to win #6
    YOU are void in diamonds
    -> TRUMP with a spade, steal the trick
    -> they finish with 5: SET!  (-60 to them)`,
        },
      },
      incident: {
        title: "The Set: Defense That Wins Games",
        when: "Competitive Spades",
        where: "Tournaments and serious tables",
        impact: "A well-engineered set can swing 60-120 points in a hand by turning an opponent's expected score into a loss — often the difference in a close game",
        body: [
          "Beginners focus only on making their own bid; experts spend equal energy trying to SET the other team. Because a set flips the opponents' bid from a plus to a minus, a single set can swing the score by well over 100 points — the same as a made nil. Defense, in Spades, is offense.",
          "Setting well is built on counting:\n- Knowing how many trumps are left tells you when you can safely trump an opponent's winner.\n- Tracking which suits opponents are void in tells you which of your leads they'll have to trump or duck.\n- The players who keep these counts in their head, hand after hand, are the ones who consistently win — proof that Spades is a game of memory and arithmetic as much as cards.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count the 13 Spades", sub: "tally trump as it's played", type: "system" },
          { label: "Draw or Save Trump", sub: "pull spades, protect winners", type: "attacker" },
          { label: "Spot Their Needed Trick", sub: "what bid are they chasing?", type: "victim" },
          { label: "Set the Opponents", sub: "deny the bid: -10 per trick", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "Card-counting becomes the mark of strong Spades players" },
        { year: 1970, event: "'Setting' the opponents recognized as a core defensive goal", highlight: true },
        { year: 1999, event: "Online play lets serious players drill counting against bots" },
        { year: 2024, event: "Trump counting and setting remain the top intermediate skills" },
      ],
      keyTakeaways: [
        "There are 13 spades; counting how many have been played tells you who still holds trump",
        "Drawing trump (leading spades) strips opponents so your side-suit winners are safe",
        "Setting the opponents means denying their bid, costing them 10 points per bid trick",
        "Counting trump and tracking voids is what makes a deliberate set possible",
      ],
      references: [
        { title: "Spades (card game) — strategy and counting", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Strategy" },
        { title: "Card counting (general)", url: "https://en.wikipedia.org/wiki/Card_counting" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-09-q1", type: "Counting", challenge: "How many trumps.", text: "How many spades are in the deck to keep track of?", options: ["13", "4", "26", "52"], correctIndex: 0, explanation: "There are 13 spades; counting how many have been played is a key skill." },
        { id: "spades-1-09-q2", type: "Drawing Trump", challenge: "Pulling spades.", text: "What does 'drawing trump' accomplish?", options: ["It pulls spades from opponents so your side-suit winners can't be trumped", "It ends the hand early", "It scores bonus points", "It forces a nil"], correctIndex: 0, explanation: "Leading spades removes opponents' trump, protecting your high side cards." },
        { id: "spades-1-09-q3", type: "Setting", challenge: "What a set is.", text: "What does it mean to 'set' the opponents?", options: ["Stop them from making their bid, so they lose points instead of scoring", "Help them make their bid", "Deal them the cards", "Give them bags"], correctIndex: 0, explanation: "A set denies the opponents' contract, costing them 10 points per bid trick." },
        { id: "spades-1-09-q4", type: "The Tool", challenge: "How to deny a trick.", text: "Opponents need one more trick and lead a high diamond. You're void in diamonds. What sets them?", options: ["Trump the trick with a spade to steal it", "Discard a low club", "Follow with your highest diamond", "Concede the trick"], correctIndex: 0, explanation: "Being void lets you trump their winner with a spade, denying the trick they need." },
        { id: "spades-1-09-q5", type: "Information", challenge: "Reading voids.", text: "Why does it matter when an opponent can't follow a spade lead?", options: ["It tells you they are now void in trump — valuable information", "It means the hand is over", "It scores you a bag", "It is illegal"], correctIndex: 0, explanation: "A player failing to follow trump reveals they're out of spades, which guides your play." },
      ],
    },
  },

  // ─── spades-1-10: Strategy & Variants ────────────────────────────────────────
  {
    epochId: "spades-1",
    wonder: { name: "The house rules", location: "Every table's own flavor of Spades", era: "Modern", emoji: "🎯" },
    id: "spades-1-10",
    order: 10,
    title: "Strategy & Variants",
    subtitle: "Whiz, Suicide, Mirror, jokers, and the road to 500",
    category: "sports",
    xp: 108,
    badge: { id: "spades-badge-10", name: "Spades Master", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "Once you've got the core game, two things make you a winner: tight overall strategy (bid accurately, manage bags, hunt sets, time your endgame) and knowing the popular variants you'll meet at different tables — Whiz, Suicide, Mirror, and Joker-Joker-Deuce.",
      year: 2024,
      overview: [
        "Winning Spades is the sum of everything so far, applied with discipline:\n- BID ACCURATELY — most games are won and lost on bidding; bid close to your real trick count to avoid both sets and bags.\n- MANAGE BAGS — bid up for tricks you'll take anyway, and dump extras once your contract is safe.\n- HUNT SETS AND PLAY THE ENDGAME — count trump, look to set the opponents, and in the last few tricks know exactly which cards are still out so you take precisely what you need.",
        "Many tables play popular VARIANTS, and you should know the common ones:\n- WHIZ — each player must bid either the number of spades in their hand or nil; it removes bidding guesswork and forces aggressive play.\n- SUICIDE — one player on each team MUST bid nil every hand (the other bids normally), making nil-covering the central skill.\n- MIRROR (or 'Pure'/'Mirrors') — your bid MUST equal the number of spades you hold, with no nil allowed, so the cards dictate the contract.",
        "Other widespread variants change the deck or scoring:\n- JOKER-JOKER-DEUCE (the '2-of-spades high' family) — two jokers are added and the lowest cards removed; the jokers become the TWO highest trumps, above the Ace, and the 2 of spades often ranks just below them, giving 14 trumps and bigger swings.\n- PLAYING TO 500 — the classic target; some play to 300 for a quick game or 1000 for a long one, and bag/nil values can vary by house rule.\n- The lesson: ALWAYS confirm the house rules — nil value, bag threshold, jokers, and target score — before the first deal.",
      ],
      technical: {
        title: "Endgame Precision and the Variant Landscape",
        body: [
          "The endgame is where good players separate from great ones:\n- By the last few tricks, a sharp player knows every remaining card by having counted trump and the side suits.\n- This lets you take EXACTLY your contract — grabbing the tricks you need, dumping the ones that would become bags, and timing a set on the opponents down to the final card.\n- Precision here turns a 'probably fine' hand into a guaranteed, bag-free make.",
          "Knowing the variants keeps you ready for any table:\n- WHIZ and MIRROR remove or constrain the bid, shifting all the skill into play and card-counting.\n- SUICIDE forces a nil every hand, so practicing nil play and covering pays off directly.\n- JOKER variants add two super-trumps and change every count (now there are 14 or 15 trumps to track), and they raise the stakes on nil since two unbeatable cards are loose. Confirm the rules first, then adjust your bidding and counting to the deck you're actually playing with — and play to whatever target (commonly 500) the table has set.",
        ],
        codeExample: {
          label: "Common Spades variants",
          code: `  WHIZ    : bid = # of spades you hold, OR nil
  SUICIDE : one partner MUST bid nil every hand
  MIRROR  : bid MUST equal your spade count (no nil)

  JOKER-JOKER-DEUCE (trump order, high to low):
    BIG JOKER > LITTLE JOKER > 2 of spades
      > A K Q J ... of spades   (14 trumps)

  TARGET SCORE: usually 500 (300 quick / 1000 long)
  ALWAYS confirm house rules before the first deal`,
        },
      },
      incident: {
        title: "One Game, a Hundred House Rules",
        when: "Across all of Spades' history",
        where: "From barracks to the internet",
        impact: "Spades has no single global rulebook — its many variants are a feature, letting every community tune the game, but they make confirming the rules essential",
        body: [
          "Spades grew up as a folk game, spreading by word of mouth through the military, campuses, and neighborhoods. As a result there is no single authority over the rules, and dozens of regional variants flourished: different nil values, bag thresholds, joker decks, and bid restrictions like Whiz and Mirror. Online platforms later codified popular versions, but they still offer many toggles.",
          "For a player, the practical lesson is simple and important:\n- The CORE is always the same — partners across, spades trump, bid your tricks, race to a target.\n- The DETAILS vary — so before you play, agree on nil/blind-nil values, the bag rule, whether jokers are in, and the winning score.\n- Master the fundamentals in this course and you can sit down at any Spades table in the world, ask two or three questions about the house rules, and play to win.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Bid & Bag Discipline", sub: "accuracy beats ambition", type: "system" },
          { label: "Count the Endgame", sub: "take exactly what you need", type: "attacker" },
          { label: "Know the Variants", sub: "Whiz, Suicide, Mirror, jokers", type: "victim" },
          { label: "Confirm Rules, Win", sub: "play to 500 your way", type: "result" },
        ],
      },
      timeline: [
        { year: 1930, event: "Spades begins as a folk game with no central rulebook" },
        { year: 1970, event: "Regional variants (Whiz, Suicide, joker decks) spread widely", highlight: true },
        { year: 1999, event: "Online platforms codify popular variants with rule toggles" },
        { year: 2024, event: "Core game plus countless house rules keep Spades endlessly varied" },
      ],
      keyTakeaways: [
        "Winning comes from accurate bidding, bag management, hunting sets, and precise endgame play",
        "Whiz (bid your spades or nil), Suicide (one partner nils each hand), and Mirror (bid = spade count) are common bidding variants",
        "Joker-Joker-Deuce adds two jokers as the top trumps above the Ace, giving 14 trumps",
        "There's no single rulebook — confirm nil values, the bag rule, jokers, and the target (usually 500) before playing",
      ],
      references: [
        { title: "Spades (card game) — variations", url: "https://en.wikipedia.org/wiki/Spades_(card_game)#Variations" },
        { title: "Joker (playing card)", url: "https://en.wikipedia.org/wiki/Joker_(playing_card)" },
      ],
    },
    quiz: {
      questions: [
        { id: "spades-1-10-q1", type: "Whiz", challenge: "The Whiz rule.", text: "In the 'Whiz' variant, what must each player bid?", options: ["Either the number of spades in their hand, or nil", "Always exactly 4", "Whatever they want", "The number of hearts they hold"], correctIndex: 0, explanation: "In Whiz, your bid must equal your spade count or be a nil — no free choice." },
        { id: "spades-1-10-q2", type: "Suicide", challenge: "Forced nils.", text: "What defines 'Suicide' spades?", options: ["One player on each team must bid nil every hand", "No one may bid nil", "Both partners bid nil every hand", "Spades aren't trump"], correctIndex: 0, explanation: "In Suicide, one partner is required to bid nil each hand, making covering essential." },
        { id: "spades-1-10-q3", type: "Jokers", challenge: "Top of the deck.", text: "In Joker-Joker-Deuce, where do the jokers rank?", options: ["As the two highest trumps, above the Ace of spades", "As the lowest cards", "They aren't trump", "Equal to the 2 of spades"], correctIndex: 0, explanation: "The two jokers become the highest trumps, above the Ace, giving 14 spade-trumps." },
        { id: "spades-1-10-q4", type: "Target", challenge: "The finish line.", text: "What is the classic target score for a game of Spades?", options: ["500 points", "21 points", "100 points", "10,000 points"], correctIndex: 0, explanation: "Spades is traditionally played to 500, though some use 300 (quick) or 1000 (long)." },
        { id: "spades-1-10-q5", type: "House Rules", challenge: "Before you deal.", text: "Why should you confirm the rules before playing at a new table?", options: ["Nil values, bag rules, jokers, and target score vary widely by house", "The core rules are completely different everywhere", "It's required by law", "So you can change trump"], correctIndex: 0, explanation: "Spades has many house-rule variants, so agree on the details before the first deal." },
      ],
    },
  },
];
