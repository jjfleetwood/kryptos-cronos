import type { StageConfig, EpochConfig } from "./types";

export const hearts1Epoch: EpochConfig = {
  id: "hearts-1",
  name: "Hearts",
  subtitle: "Dodge the points, dump the Black Lady, and learn to shoot the moon",
  description:
    "Hearts — the classic four-player trick-taking game where the goal is NOT to win, but to avoid taking points. Every heart you collect costs you a point, and the dreaded Queen of Spades costs thirteen. This epoch builds you from a complete beginner into a sharp Hearts player: the deal and the pre-hand pass, how trick-taking works without a trump suit, the point cards and how the game ends, the bold all-or-nothing play of shooting the moon, the two-of-clubs opening and first-trick rules, voiding suits so you can slough off points, hunting down the Queen of Spades ('the Black Lady'), counting cards and controlling the endgame, and the major variants like Black Maria, Omnibus Hearts, and Cancellation Hearts. A game of evasion, timing, and quiet cunning — descended from old games like Reversis and carried to millions of desktops by Microsoft Windows.",
  emoji: "♥️",
  color: "rose",
  unlocked: true,
};

export const hearts1Stages: StageConfig[] = [
  // ─── hearts-1-01: What Is Hearts ─────────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The Hearts table", location: "Card tables and desktop computers everywhere", era: "Modern", emoji: "♥️" },
    id: "hearts-1-01",
    order: 1,
    title: "What Is Hearts",
    subtitle: "An 'evasion' game where the lowest score wins",
    category: "sports",
    xp: 85,
    badge: { id: "hearts-badge-01", name: "Sat Down", emoji: "♥️" },
    challengeType: "quiz",
    info: {
      tagline: "Most card games reward you for winning tricks. Hearts flips that idea on its head: it is an 'evasion' game where you try to AVOID taking certain cards, and the player with the LOWEST score wins. Easy to learn, surprisingly deep, and famous for shipping on hundreds of millions of computers.",
      year: 2024,
      overview: [
        "Hearts is a trick-taking card game for four players, each playing for themselves (no partnerships in the standard game). A standard 52-card deck is dealt out evenly, thirteen cards to each player, and the hand is played out one 'trick' at a time. Unlike most trick-taking games, the object is NOT to win tricks — it is to avoid winning the ones that contain penalty points.",
        "A few features define Hearts and set it apart:\n- IT'S AN EVASION GAME — you want to DODGE points, not collect them; the player with the fewest points at the end wins.\n- THE POINT CARDS — every heart is worth 1 penalty point and the Queen of Spades is worth a hefty 13, so a single bad trick can sting.\n- NO TRUMP SUIT — standard Hearts has no trump, so a high card in the led suit simply wins the trick, which makes timing and card-shedding the real skill.",
        "Every hand follows the same skeleton:\n- The deck is dealt out and, in most rounds, players secretly PASS three cards to an opponent before play begins.\n- Players take turns playing one card to each trick; the highest card of the suit that was led wins the trick and that player collects any points in it.\n- When all thirteen tricks are played, players tally the penalty points they took; play continues hand after hand until someone reaches a target score (commonly 100), and the player with the LOWEST total wins.",
      ],
      technical: {
        title: "From Reversis to the Family of 'Reverse' Games",
        body: [
          "Hearts belongs to a family of 'reverse' or 'trick-avoidance' games with a long pedigree:\n- It descends from older European games, most notably REVERSIS, a Spanish/French game from the 1700s in which the goal was to avoid taking tricks and certain cards.\n- The modern American form of Hearts, with the heart suit as the penalty cards, took shape in the United States in the late 1800s.\n- The Queen of Spades penalty (and her nickname 'the Black Lady') was added in a popular variant and became standard in most home games.",
          "Because the strategy is about shedding rather than winning, Hearts plays very differently from games like Bridge or Spades:\n- You often WANT to play low and lose tricks, holding onto dangerous high cards for the right moment.\n- Knowing when to take a trick on purpose — to gain the lead, or to avoid taking a worse one later — is a core skill.\n- The blend of simple rules and deep shedding decisions is exactly why Hearts has stayed popular for over a century.",
        ],
        codeExample: {
          label: "Anatomy of one Hearts hand",
          code: `  FOUR PLAYERS, 13 CARDS EACH (full 52-card deck)

  PENALTY POINTS HIDING IN THE DECK:
    every HEART (A K Q ... 2)   =  1 point each  (13 total)
    the QUEEN OF SPADES  (Q-s)  = 13 points
    -------------------------------------------------
    TOTAL POINTS IN PLAY        = 26 per hand

  GOAL: take as FEW points as possible.
  Game ends when someone hits 100 -> LOWEST score WINS.`,
        },
      },
      incident: {
        title: "How a Parlor Game Reached a Billion Desktops",
        when: "1990s",
        where: "Redmond, Washington (Microsoft Windows)",
        impact: "By bundling Hearts with Windows — complete with a network-play mode — Microsoft turned a centuries-old card game into one of the most-played computer games in history",
        body: [
          "Hearts existed for over a century as a parlor and family game, but its biggest leap in popularity came from an unlikely place: a software company. Beginning with Windows for Workgroups in 1992, Microsoft shipped a free Hearts game with its operating system, and it remained a fixture for years afterward.",
          "What made the Windows version special was more than the cards:\n- The bundled game included a NETWORK-PLAY mode, letting coworkers on the same office network play Hearts against each other — an early, wildly popular bit of multiplayer fun.\n- Because Windows ran on a vast share of the world's computers, an enormous number of people learned Hearts not from a deck of cards but from a screen.\n- That single bundling decision is a big reason Hearts is one of the most widely known card games on earth today.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal 13 Each", sub: "full 52-card deck, four players", type: "system" },
          { label: "Pass & Play Tricks", sub: "shed points, dodge the Queen", type: "attacker" },
          { label: "Take Penalty Points", sub: "hearts = 1, Q-spades = 13", type: "victim" },
          { label: "Lowest Score Wins", sub: "game ends at 100", type: "result" },
        ],
      },
      timeline: [
        { year: 1700, event: "Reversis and other 'reverse' games popular in Europe" },
        { year: 1880, event: "Modern Hearts takes shape in the United States" },
        { year: 1992, event: "Microsoft bundles Hearts (with network play) in Windows for Workgroups", highlight: true },
        { year: 2024, event: "Hearts remains one of the world's best-known card games" },
      ],
      keyTakeaways: [
        "Hearts is a four-player 'evasion' game — you avoid points instead of trying to win tricks",
        "Every heart is worth 1 penalty point and the Queen of Spades is worth 13 (26 total per hand)",
        "There is no trump suit; the highest card of the led suit wins the trick",
        "The game ends when a player reaches 100 points, and the LOWEST total score wins",
      ],
      references: [
        { title: "Hearts (card game) — overview", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)" },
        { title: "Reversis", url: "https://en.wikipedia.org/wiki/Reversis" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-01-q1", type: "Core Idea", challenge: "The whole point.", text: "What is the object of Hearts?", options: ["To take as FEW penalty points as possible — the lowest score wins", "To win as many tricks as possible", "To collect all the hearts", "To be the first to 100 points"], correctIndex: 0, explanation: "Hearts is an evasion game: you avoid points, and the player with the lowest score wins." },
        { id: "hearts-1-01-q2", type: "Points", challenge: "Count the danger.", text: "How many total penalty points are in play each hand?", options: ["26 (13 hearts + the 13-point Queen of Spades)", "13", "52", "100"], correctIndex: 0, explanation: "Thirteen hearts at 1 point each plus the 13-point Queen of Spades make 26 points per hand." },
        { id: "hearts-1-01-q3", type: "Trump", challenge: "What beats what.", text: "Which suit is trump in standard Hearts?", options: ["There is no trump suit", "Hearts", "Spades", "Whatever was led first"], correctIndex: 0, explanation: "Standard Hearts has no trump; the highest card of the led suit simply wins the trick." },
        { id: "hearts-1-01-q4", type: "History", challenge: "The desktop boom.", text: "How did Hearts reach hundreds of millions of new players in the 1990s?", options: ["Microsoft bundled it (with network play) in Windows", "It was invented by a video game company", "It replaced Solitaire in casinos", "It was sold only as an arcade machine"], correctIndex: 0, explanation: "Starting with Windows for Workgroups in 1992, Microsoft shipped Hearts with Windows, including a network-play mode." },
        { id: "hearts-1-01-q5", type: "Ancestry", challenge: "Where it came from.", text: "Hearts is descended from which older family of card games?", options: ["'Reverse' / trick-avoidance games like Reversis", "Trump-based games like Bridge", "Matching games like Rummy", "Betting games like Poker"], correctIndex: 0, explanation: "Hearts grew out of older 'reverse' games such as Reversis, where the goal was to avoid tricks and certain cards." },
      ],
    },
  },

  // ─── hearts-1-02: The Deal & The Pass ────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The pass", location: "The moment before every hand", era: "Modern", emoji: "🔄" },
    id: "hearts-1-02",
    order: 2,
    title: "The Deal & The Pass",
    subtitle: "Thirteen cards each, and the rotating three-card pass",
    category: "sports",
    xp: 86,
    badge: { id: "hearts-badge-02", name: "Dealer's Hand", emoji: "🔄" },
    challengeType: "quiz",
    info: {
      tagline: "Before a single card is played, Hearts gives you a chance to reshape your hand: you secretly pass three of your cards to an opponent. The direction of the pass rotates each hand — left, right, across, then a 'hold' hand with no pass at all.",
      year: 2024,
      overview: [
        "Hearts uses the full 52-card deck with no jokers. With four players, the deck divides evenly: each player receives exactly 13 cards. There is no kitty or stock — every card is dealt out, so all 52 cards (and all 26 points) are in play every hand.",
        "Before play, each player chooses three cards to PASS to another player:\n- You pick three cards from your hand and pass them face-down, while simultaneously receiving three from someone else.\n- Crucially, you pass BEFORE you see the cards coming to you, so passing is a guess based only on your own hand.\n- The pass lets you dump dangerous cards — high spades, high hearts, or a lone Ace — and try to create a 'void' in a suit (covered in a later stage).",
        "The direction of the pass ROTATES on a four-hand cycle:\n- HAND 1 — pass three cards to the player on your LEFT.\n- HAND 2 — pass three cards to the player on your RIGHT.\n- HAND 3 — pass three cards ACROSS the table (to your partner-less opposite).\n- HAND 4 — the 'HOLD' or 'keeper' hand: NO pass at all; you play the cards you were dealt. Then the cycle repeats.",
      ],
      technical: {
        title: "What to Pass — and Why the Pass Cuts Both Ways",
        body: [
          "Good passing is about getting rid of liabilities while keeping control:\n- DUMP THE QUEEN'S NEIGHBORS — the Ace and King of spades are dangerous because they can be forced to capture the Queen of Spades; many players pass them away.\n- PASS HIGH HEARTS — the Ace, King, and Queen of hearts are likely to win heart-filled tricks, so they are common pass choices.\n- CREATE A VOID — passing away all your cards in one suit means you can later discard hearts or the Queen on that suit when it is led.",
          "Remember that the pass is a two-way street, which shapes strategy:\n- The three cards you RECEIVE can hurt you — an opponent may pass you the very Queen of Spades you were trying to avoid.\n- Because you pass blind, you should keep a balanced hand rather than stripping it bare in one suit and getting flooded by the cards you are handed.\n- On the 'hold' hand (no pass), you must play exactly what you were dealt, so those hands reward pure in-game skill rather than clever passing.",
        ],
        codeExample: {
          label: "The four-hand pass rotation",
          code: `  HAND 1:  pass 3 cards  ->  LEFT
  HAND 2:  pass 3 cards  ->  RIGHT
  HAND 3:  pass 3 cards  ->  ACROSS
  HAND 4:  HOLD  -> no pass, play what you were dealt
  ( then the cycle repeats: left, right, across, hold )

  COMMON CARDS TO PASS:
    A-s / K-s   (can be forced to catch the Queen)
    A-h / K-h   (win big heart tricks)
    a whole short suit -> creates a VOID`,
        },
      },
      incident: {
        title: "The Pass That Backfires",
        when: "Every Hearts game",
        where: "Kitchen tables and online lobbies",
        impact: "Passing the Queen of Spades to an opponent can come straight back to haunt you — passing blind means you might receive an even worse hand",
        body: [
          "A classic Hearts moment: you are dealt the Queen of Spades with only one or two small spades to protect her, so you pass her away to the player on your left, relieved. Then you pick up the three cards passed to YOU — and find the player on your right has handed you the Ace and King of spades. Now you are more likely than ever to capture the very Queen you just gave away.",
          "This back-and-forth is the heart of why passing is a skill, not a formality:\n- Because everyone passes at the same time and blind, the cards you receive are out of your control.\n- Smart players think about what they are likely to be GIVEN, not just what they want to get rid of.\n- The rotation (left, right, across, hold) also means you pass to — and receive from — every opponent over four hands, so reading tendencies pays off over a full game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deal 13 Each", sub: "full deck, nothing held back", type: "system" },
          { label: "Choose 3 to Pass", sub: "blind, before you receive", type: "attacker" },
          { label: "Receive 3 Back", sub: "out of your control", type: "victim" },
          { label: "Rotation: L, R, Across, Hold", sub: "four-hand cycle", type: "result" },
        ],
      },
      timeline: [
        { year: 1880, event: "Early Hearts is often played with no pass at all" },
        { year: 1900, event: "The pre-hand pass becomes a common refinement" },
        { year: 1992, event: "The Windows version popularizes the left/right/across/hold rotation", highlight: true },
        { year: 2024, event: "The three-card rotating pass is standard in most Hearts apps" },
      ],
      keyTakeaways: [
        "The full 52-card deck is dealt out, 13 cards to each of the four players",
        "Before play, each player passes three cards and receives three — passing blind, before seeing what they get",
        "The pass direction rotates: left, right, across, then a 'hold' hand with no pass",
        "Pass away liabilities (high spades, high hearts) and try to create a void, but expect to receive danger in return",
      ],
      references: [
        { title: "Hearts (card game) — passing", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Passing" },
        { title: "Hearts rules (Bicycle Cards)", url: "https://bicyclecards.com/how-to-play/hearts" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-02-q1", type: "The Deal", challenge: "Count the cards.", text: "How many cards does each player receive in a four-player Hearts deal?", options: ["13", "10", "7", "26"], correctIndex: 0, explanation: "The 52-card deck divides evenly among four players: 13 cards each." },
        { id: "hearts-1-02-q2", type: "Rotation", challenge: "Name the cycle.", text: "What is the standard pass rotation in Hearts?", options: ["Left, right, across, then hold (no pass)", "Always to the left", "Right, left, right, left", "There is never any passing"], correctIndex: 0, explanation: "The pass rotates left, right, across, then a 'hold' hand with no pass, and repeats." },
        { id: "hearts-1-02-q3", type: "Blind Pass", challenge: "Timing of the pass.", text: "When do you choose your three cards to pass?", options: ["Before seeing the cards being passed to you", "After you receive your three cards", "After the first trick", "Only if you hold the Queen of Spades"], correctIndex: 0, explanation: "Everyone passes simultaneously and blind — you pick before you see what you'll receive." },
        { id: "hearts-1-02-q4", type: "What to Pass", challenge: "Shed the danger.", text: "Which cards are commonly passed away as liabilities?", options: ["High spades (A, K) and high hearts that can capture points", "Your lowest clubs", "The two of clubs", "Only diamonds"], correctIndex: 0, explanation: "High spades can be forced to catch the Queen, and high hearts win big heart tricks, so both are common passes." },
        { id: "hearts-1-02-q5", type: "Hold Hand", challenge: "No help this round.", text: "What happens on the 'hold' (or 'keeper') hand?", options: ["No cards are passed; you play exactly what you were dealt", "You pass six cards instead of three", "You pass across only", "You skip the hand entirely"], correctIndex: 0, explanation: "On the hold hand there is no pass, so you must play the hand exactly as dealt." },
      ],
    },
  },

  // ─── hearts-1-03: Trick-Taking Basics ────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The trick", location: "The four cards in the middle", era: "Modern", emoji: "🃏" },
    id: "hearts-1-03",
    order: 3,
    title: "Trick-Taking Basics",
    subtitle: "Follow suit, highest card wins, winner leads next",
    category: "sports",
    xp: 88,
    badge: { id: "hearts-badge-03", name: "Follows Suit", emoji: "🃏" },
    challengeType: "quiz",
    info: {
      tagline: "A 'trick' is one round of four cards, one from each player. The rules are simple: you must follow the suit that was led if you can, the highest card of that suit wins, and the winner leads the next trick. Master these and you understand the engine of every Hearts hand.",
      year: 2024,
      overview: [
        "Play happens in 'tricks'. One player leads a card face-up, then play continues clockwise with each player adding one card. When all four players have played, the trick is complete — four cards sit in the middle and one player 'wins' (takes) the trick.",
        "The single most important rule is FOLLOWING SUIT:\n- The first card played sets the 'led suit' for that trick.\n- If you have any card of the led suit, you MUST play one of them — you cannot play another suit.\n- Only if you are completely OUT of the led suit may you play a different suit (this is your chance to 'slough' off a heart or the Queen of Spades).",
        "Winning a trick and what comes next:\n- The trick is won by the HIGHEST card of the LED suit (Ace is high, 2 is low). Cards of other suits, no matter how high, cannot win the trick because there is no trump.\n- The winner of the trick COLLECTS it (along with any penalty points it contains) and then LEADS the next trick.\n- This continues for all 13 tricks until every card is played, then points are scored.",
      ],
      technical: {
        title: "No Trump Changes Everything — and Off-Suit Cards Can't Win",
        body: [
          "The absence of a trump suit is the defining feature of Hearts strategy:\n- In trump games, a low trump can beat a high card of another suit; in Hearts, nothing can — only the led suit can win the trick.\n- That means a card you play 'off-suit' (because you are void in the led suit) can NEVER win the trick, which is exactly why it is the safe moment to dump hearts or the Queen of Spades.\n- So a high card is only dangerous in its OWN suit; an Ace of hearts is a monster when hearts are led but harmless when you're forced to throw it on a club trick.",
          "Because the winner leads next, control of the lead is a strategic resource:\n- LEADING lets you choose the suit, which you can use to fish out dangerous cards or steer points toward someone else.\n- Sometimes you deliberately play a high card to WIN a 'clean' trick (no points) just to grab the lead and dictate the next suit.\n- Other times you carefully play under the current high card to LOSE the trick and avoid taking points — the constant tension of the game.",
        ],
        codeExample: {
          label: "One trick, played out",
          code: `  LED SUIT = CLUBS (first card sets it)

    P1 leads   8-c
    P2 plays   K-c   (must follow clubs)
    P3 plays   2-c   (must follow clubs)
    P4 is VOID in clubs -> plays  Q-s  (the Queen!)

  HIGHEST CLUB = K-c  ->  P2 WINS the trick
  P2 also COLLECTS the Q-s = 13 points (ouch)
  P2 leads the next trick.`,
        },
      },
      incident: {
        title: "The Off-Suit Dump That Defines the Game",
        when: "Every trick where someone is void",
        where: "Any Hearts table",
        impact: "Because off-suit cards cannot win, being 'void' in a suit is a weapon — the moment a player runs out of a suit, the Queen of Spades and hearts start flying onto other people's tricks",
        body: [
          "Picture a trick led with a low club. Three players follow with clubs, but the fourth player has no clubs left at all. That player is 'void' in clubs, and the rules now let them play ANY card — so they cheerfully toss the Queen of Spades onto the trick. Whoever played the highest club just won 13 points they never wanted.",
          "This single mechanic — that an off-suit card cannot win but CAN carry points — is the strategic core of Hearts:\n- Players race to become void in a suit precisely so they can unload danger onto someone else.\n- The person leading and the people following all worry about who at the table might be void and waiting to strike.\n- Understanding that 'highest card of the led suit wins, and only that suit' is the key that unlocks every advanced tactic in the game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead a Card", sub: "first card sets the suit", type: "system" },
          { label: "Follow Suit If Able", sub: "must play the led suit", type: "attacker" },
          { label: "Highest Led-Suit Card Wins", sub: "no trump; off-suit can't win", type: "victim" },
          { label: "Winner Takes & Leads", sub: "collects points, leads next", type: "result" },
        ],
      },
      timeline: [
        { year: 1700, event: "Trick-taking rules formalized across many European games" },
        { year: 1880, event: "Hearts adopts no-trump trick play with penalty cards" },
        { year: 1992, event: "Windows Hearts teaches follow-suit rules to millions of new players", highlight: true },
        { year: 2024, event: "Follow-suit, highest-wins is universal across Hearts variants" },
      ],
      keyTakeaways: [
        "A trick is one card from each player; you must follow the led suit if you can",
        "The highest card of the LED suit wins — there is no trump, so off-suit cards never win",
        "The trick winner collects any points in it and leads the next trick",
        "Being void in a suit lets you 'slough' a heart or the Queen of Spades onto someone else's trick",
      ],
      references: [
        { title: "Trick-taking game", url: "https://en.wikipedia.org/wiki/Trick-taking_game" },
        { title: "Hearts (card game) — gameplay", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Gameplay" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-03-q1", type: "Follow Suit", challenge: "The core rule.", text: "If a club is led and you hold clubs, what must you do?", options: ["Play a club — you must follow the led suit if you can", "Play any card you wish", "Play the Queen of Spades", "Play your lowest heart"], correctIndex: 0, explanation: "You must follow suit if you are able; you can only play off-suit when void in the led suit." },
        { id: "hearts-1-03-q2", type: "Who Wins", challenge: "Taking the trick.", text: "Which card wins a trick in Hearts?", options: ["The highest card of the suit that was led", "The highest card of any suit", "The Queen of Spades", "The first card played"], correctIndex: 0, explanation: "With no trump, only the led suit can win — and the highest card of it takes the trick." },
        { id: "hearts-1-03-q3", type: "No Trump", challenge: "Off-suit power.", text: "A heart is played on a trick where clubs were led. Can that heart win the trick?", options: ["No — off-suit cards cannot win because there is no trump", "Yes, hearts always win", "Yes, if it's the Ace", "Only on the last trick"], correctIndex: 0, explanation: "There is no trump, so an off-suit card never wins; that's why it's a safe spot to dump points." },
        { id: "hearts-1-03-q4", type: "The Lead", challenge: "Who goes next.", text: "Who leads the next trick?", options: ["The player who won the previous trick", "The player to the dealer's left", "The player with the most points", "It alternates clockwise regardless"], correctIndex: 0, explanation: "Winning a trick gives you the lead, letting you choose the next suit played." },
        { id: "hearts-1-03-q5", type: "Sloughing", challenge: "The danger move.", text: "Why is being 'void' in the led suit useful?", options: ["You can play any card, so you can dump a heart or the Queen of Spades onto the trick", "It lets you win the trick automatically", "It means you skip your turn", "It forces others to follow suit"], correctIndex: 0, explanation: "Void in the led suit, you may play off-suit — the perfect moment to slough off penalty cards." },
      ],
    },
  },

  // ─── hearts-1-04: The Point Cards ────────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The penalty cards", location: "Hidden among the 52", era: "Modern", emoji: "♠️" },
    id: "hearts-1-04",
    order: 4,
    title: "The Point Cards",
    subtitle: "Hearts are 1, the Queen of Spades is 13, and 100 ends it",
    category: "sports",
    xp: 90,
    badge: { id: "hearts-badge-04", name: "Scorekeeper", emoji: "♠️" },
    challengeType: "quiz",
    info: {
      tagline: "In Hearts, points are punishment. Every heart you collect costs you 1, and the Queen of Spades — the 'Black Lady' — costs a brutal 13. Knowing exactly which cards hurt, and how the game ends, is the foundation of every decision you make.",
      year: 2024,
      overview: [
        "Only certain cards carry penalty points. Everything else — all clubs, all diamonds, and the other spades — is harmless and can be taken freely. The point cards are:\n- EACH HEART (A through 2) = 1 penalty point. There are 13 hearts, so the heart suit is worth 13 points total.\n- THE QUEEN OF SPADES = 13 penalty points all by herself.\n- That makes 26 penalty points distributed every hand.",
        "Because the Queen of Spades alone equals the entire heart suit, she dominates the game:\n- Taking a single bad trick with the Queen can wipe out a whole hand of careful play.\n- Her nicknames — 'the Black Lady', 'Calamity Jane', or simply 'the Queen' — reflect how feared she is.\n- Much of Hearts strategy revolves around NOT being the one to capture her.",
        "Scoring and ending the game:\n- After each hand, every player adds the penalty points they took to a running total. Low is good.\n- The game ENDS when any player's running total reaches (or passes) an agreed target — most commonly 100 points.\n- When the game ends, the player with the LOWEST total score is the winner. So you are always racing to stay below everyone else, not above.",
      ],
      technical: {
        title: "Why the Queen Is Worth Exactly 13 — and How Scores Add Up",
        body: [
          "The 13-point Queen is a deliberate balancing act:\n- Setting her equal to all 13 hearts means the two threats are weighted the same, so you can't simply ignore one to focus on the other.\n- It also makes 'shooting the moon' (taking ALL 26 points, covered next) a real possibility worth defending against, because the Queen is half the total.\n- Capturing the Queen is the single most swingy event in a hand — which is why so much play is about steering her toward an opponent.",
          "Tracking the cumulative score shapes late-game tactics:\n- Players near the 100-point limit play very cautiously, since one more big hand ends the game with them likely losing.\n- A player with a comfortable low score can afford a riskier play, like an attempt to shoot the moon.\n- Some house rules add wrinkles — for example, if a player ends a hand on EXACTLY 100 (or another set number), it is sometimes treated specially — but the core is simple: cross the limit, and the lowest score wins.",
        ],
        codeExample: {
          label: "Scoring a single hand",
          code: `  POINT CARDS AND THEIR VALUES:
    each HEART   = 1   (13 hearts -> 13 pts)
    Q of SPADES  = 13
    everything else = 0

  EXAMPLE HAND RESULT:
    North took 5 hearts ............ +5
    East took the Q-s + 2 hearts ... +15
    South took 0 ................... +0   (clean!)
    West took 6 hearts ............. +6
    -----------------------------------------
    total dealt out = 26 points (always)`,
        },
      },
      incident: {
        title: "Calamity Jane: The Card That Decides Games",
        when: "Every competitive hand",
        where: "Tournament and casual Hearts alike",
        impact: "Because the Queen of Spades equals 13 points — half a hand's total — a single misplayed trick can swing an entire game; she is the most consequential card in Hearts",
        body: [
          "There is a reason the Queen of Spades has so many menacing nicknames — 'the Black Lady', 'Calamity Jane', 'the Black Maria'. Worth 13 points, she is as costly as collecting every heart in the deck. A player cruising toward a win can be undone by being forced to capture her on a single unlucky trick.",
          "Her weight defines the rhythm of the game:\n- Before she appears, players jockey to make sure SOMEONE ELSE will be holding the high spades when she falls.\n- The moment she is played, the whole table reacts — it can flip the standings instantly.\n- Mastering Hearts is largely about managing this one card: knowing when to hunt her, when to dodge her, and when to hold her as a weapon (all covered in later stages).",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hearts = 1 Each", sub: "13 hearts, 13 points", type: "system" },
          { label: "Queen of Spades = 13", sub: "the Black Lady", type: "attacker" },
          { label: "Tally After Each Hand", sub: "low score is good", type: "victim" },
          { label: "Game Ends at 100", sub: "lowest total wins", type: "result" },
        ],
      },
      timeline: [
        { year: 1880, event: "Hearts scores each heart as one penalty point" },
        { year: 1900, event: "The 13-point Queen of Spades penalty becomes standard", highlight: true },
        { year: 1992, event: "Windows Hearts defaults the game-ending target to 100 points" },
        { year: 2024, event: "Hearts = 1, Queen = 13, game to 100 remains the standard ruleset" },
      ],
      keyTakeaways: [
        "Each heart is worth 1 penalty point; the Queen of Spades is worth 13 (26 points total per hand)",
        "All other cards — clubs, diamonds, and the non-Queen spades — carry no points",
        "Players add their penalty points to a running total after every hand; low is good",
        "The game ends when someone reaches 100 points, and the player with the LOWEST total wins",
      ],
      references: [
        { title: "Hearts (card game) — scoring", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Scoring" },
        { title: "Queen of spades", url: "https://en.wikipedia.org/wiki/Queen_of_spades" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-04-q1", type: "Heart Value", challenge: "Price of a heart.", text: "How many penalty points is each heart worth?", options: ["1", "2", "13", "0"], correctIndex: 0, explanation: "Each heart is worth 1 point; with 13 hearts, the suit totals 13 points." },
        { id: "hearts-1-04-q2", type: "The Queen", challenge: "The big one.", text: "How many points is the Queen of Spades worth?", options: ["13", "1", "10", "26"], correctIndex: 0, explanation: "The Queen of Spades alone is worth 13 points — as much as the entire heart suit." },
        { id: "hearts-1-04-q3", type: "Harmless Cards", challenge: "Safe to take.", text: "Which cards carry NO penalty points?", options: ["All clubs and diamonds, plus the non-Queen spades", "All face cards", "All red cards", "The two of clubs only"], correctIndex: 0, explanation: "Only hearts and the Queen of Spades score; every other card is harmless." },
        { id: "hearts-1-04-q4", type: "Ending", challenge: "Game over.", text: "When does a standard game of Hearts end?", options: ["When a player's running total reaches 100 points", "After exactly 13 hands", "When someone takes all the hearts once", "When the deck runs out the first time"], correctIndex: 0, explanation: "The game ends once a player hits the target (commonly 100), and the lowest total wins." },
        { id: "hearts-1-04-q5", type: "Winning", challenge: "Who takes it.", text: "Who wins the overall game of Hearts?", options: ["The player with the LOWEST total score", "The player who reached 100 first", "The player with the most tricks", "The player who took the Queen most often"], correctIndex: 0, explanation: "Hearts is an evasion game — when it ends, the lowest cumulative score wins." },
      ],
    },
  },

  // ─── hearts-1-05: Shooting the Moon ──────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "Shooting the moon", location: "The boldest play in Hearts", era: "Modern", emoji: "🌙" },
    id: "hearts-1-05",
    order: 5,
    title: "Shooting the Moon",
    subtitle: "Take ALL 26 points — and turn disaster into triumph",
    category: "sports",
    xp: 95,
    badge: { id: "hearts-badge-05", name: "Moonshot", emoji: "🌙" },
    challengeType: "quiz",
    info: {
      tagline: "There is one spectacular exception to 'avoid points'. If you manage to take ALL 26 penalty points in a single hand — every heart AND the Queen of Spades — you 'shoot the moon': you score zero and each opponent is hit with 26. It's the boldest, highest-risk play in Hearts.",
      year: 2024,
      overview: [
        "Normally, taking points is bad. But 'shooting the moon' (also called 'shooting the sun' or 'running the table') flips the scoring when you take EVERY point:\n- To shoot the moon you must capture all 13 hearts AND the Queen of Spades — all 26 points — in one hand.\n- If you succeed, you score 0 for the hand, and instead each of your three opponents is charged the full 26 points.\n- It transforms what looks like a catastrophe (taking tons of points) into the best possible result.",
        "Most rule sets offer the shooter a choice of how to apply it:\n- ADD TO OPPONENTS — the usual option: all three opponents get +26 and you get 0.\n- SUBTRACT FROM YOURSELF — some rules let you instead subtract 26 from your OWN score, which can be better if opponents are near the losing limit.\n- The shooter (or the rules) picks whichever option helps most given the current scores.",
        "Shooting the moon is high risk and high reward:\n- It requires a strong hand — typically lots of high cards and good control of the lead — because you must WIN every points trick.\n- If you take 25 of the 26 points but ONE heart slips to an opponent, the moon FAILS and you are stuck with 25 points — a disaster.\n- Opponents who suspect a moon attempt will deliberately take a point to break it up, so the play is a tense battle of wills.",
      ],
      technical: {
        title: "The Mechanics of a Moonshot — and Defending Against One",
        body: [
          "Successfully shooting the moon takes specific ingredients:\n- HIGH CARDS AND CONTROL — you need winners (high cards) in multiple suits and the ability to keep the lead so you can drag every heart and the Queen into your own tricks.\n- A LONG, STRONG SUIT helps you run cards opponents cannot beat, forcing out their hearts safely into your hands.\n- The Queen of Spades is often the hardest piece: you must either hold the high spades to capture her or arrange to win the trick she falls on.",
          "Defending against a moon is just as important as attempting one:\n- WATCH FOR THE SIGNS — a player who is winning every trick and has taken several hearts may be shooting; if so, you must grab at least one point to stop them.\n- THE SAFETY VALVE — deliberately taking a single heart early (when it's cheap) is a classic way to deny the moon before it builds momentum.\n- BALANCE THE RISK — sometimes letting a player take a few points is fine, but never let one player quietly scoop ALL 26; the cost of failing to stop a moon is enormous (26 points to everyone).",
        ],
        codeExample: {
          label: "Shooting the moon vs a normal hand",
          code: `  NORMAL HAND (you took the Queen + 4 hearts):
    YOU       +17     <- bad
    others    +0 each

  SHOOT THE MOON (you took ALL 26 points):
    YOU       +0      <- you score ZERO!
    each opp  +26     <- everyone else gets slammed
       ( OR, by some rules, you may instead do
         YOU -26 to your own score )

  FAIL: take 25 of 26, miss ONE heart -> YOU +25 (ouch)`,
        },
      },
      incident: {
        title: "The Hand Everyone Remembers",
        when: "Every memorable Hearts session",
        where: "Living rooms and online tables",
        impact: "A successful moonshot can erase a losing position in a single hand — and a failed one can hand the game away; it is the play that makes Hearts dramatic",
        body: [
          "Ask anyone who plays Hearts regularly and they'll have a story about 'the time someone shot the moon'. A player buried near the losing limit suddenly takes trick after trick, the table realizes too late what is happening, and all 26 points land on everyone else's score. It can turn a near-certain loss into a commanding lead in one stroke.",
          "The drama comes from the razor's edge between triumph and disaster:\n- The shooter must win EVERY point — a single heart escaping ruins the whole attempt and saddles them with a big score.\n- Opponents face an agonizing choice: take a cheap point now to break the moon, or risk that no one is actually shooting.\n- This brinkmanship is why shooting the moon is the most celebrated — and most feared — play in the game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Take ALL 26 Points", sub: "every heart + the Queen", type: "system" },
          { label: "Need Control & High Cards", sub: "win every points trick", type: "attacker" },
          { label: "Opponents Try to Break It", sub: "grab one point to stop you", type: "victim" },
          { label: "Success: 0 for You, 26 for Them", sub: "or subtract 26 from yourself", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The 'take-all' bonus appears in Hearts variants" },
        { year: 1940, event: "'Shooting the moon' becomes the standard term in the U.S.", highlight: true },
        { year: 1992, event: "Windows Hearts implements shooting the moon (0 for you, 26 for others)" },
        { year: 2024, event: "Moon-shooting (with add-or-subtract options) is near-universal" },
      ],
      keyTakeaways: [
        "Shooting the moon means taking ALL 26 points — every heart and the Queen of Spades — in one hand",
        "Success scores you 0 and gives each opponent 26 (or, by some rules, subtracts 26 from your own score)",
        "It needs high cards and control of the lead; missing even one point makes the attempt fail badly",
        "Defenders must take at least one point to break up a suspected moonshot before it's complete",
      ],
      references: [
        { title: "Shooting the moon (cards)", url: "https://en.wikipedia.org/wiki/Shooting_the_moon_(cards)" },
        { title: "Hearts (card game) — shooting the moon", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Shooting_the_moon" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-05-q1", type: "Definition", challenge: "The whole pile.", text: "What does it mean to 'shoot the moon'?", options: ["Take all 26 points (every heart and the Queen of Spades) in one hand", "Take exactly half the points", "Take no points at all", "Win the most tricks"], correctIndex: 0, explanation: "Shooting the moon means capturing every one of the 26 penalty points in a single hand." },
        { id: "hearts-1-05-q2", type: "Reward", challenge: "The payoff.", text: "If you successfully shoot the moon, what happens to the scores?", options: ["You score 0 and each opponent gets 26 (or you subtract 26 from yourself)", "You score 26 and others score 0", "Everyone scores 13", "The hand is replayed"], correctIndex: 0, explanation: "A successful moonshot gives you 0 and each opponent 26 — or, by some rules, lets you subtract 26 from your own score." },
        { id: "hearts-1-05-q3", type: "The Risk", challenge: "When it backfires.", text: "What happens if you take 25 of the 26 points but one heart slips to an opponent?", options: ["The moon fails and you're stuck with 25 points", "You still shoot the moon", "The hand is a tie", "You score 0 anyway"], correctIndex: 0, explanation: "You must take ALL the points; missing even one means the attempt fails and you keep the points you took." },
        { id: "hearts-1-05-q4", type: "Requirements", challenge: "What you need.", text: "What kind of hand is needed to shoot the moon?", options: ["High cards and control of the lead to win every points trick", "A hand full of low cards", "No spades at all", "Only the two of clubs"], correctIndex: 0, explanation: "You need winners and the ability to keep the lead so you can capture every heart and the Queen." },
        { id: "hearts-1-05-q5", type: "Defense", challenge: "Stopping the shot.", text: "How do opponents defend against a moonshot?", options: ["Deliberately take at least one point to break it up", "Pass all their hearts to the shooter", "Refuse to play", "Always lead the Queen of Spades"], correctIndex: 0, explanation: "Taking even one point denies the shooter all 26, so alert defenders grab a cheap point to stop the moon." },
      ],
    },
  },

  // ─── hearts-1-06: The Opening — Two of Clubs ─────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The two of clubs", location: "The first card of every hand", era: "Modern", emoji: "♣️" },
    id: "hearts-1-06",
    order: 6,
    title: "The Opening — Two of Clubs & First-Trick Rules",
    subtitle: "Who leads, the no-points first trick, and breaking hearts",
    category: "sports",
    xp: 96,
    badge: { id: "hearts-badge-06", name: "Opening Lead", emoji: "♣️" },
    challengeType: "quiz",
    info: {
      tagline: "Every hand of Hearts begins the same way: whoever holds the two of clubs must lead it. A handful of special opening rules — no points on the first trick, and 'breaking hearts' before hearts can be led — shape the first few critical tricks.",
      year: 2024,
      overview: [
        "The opening is fixed, not chosen:\n- The player holding the TWO OF CLUBS must lead it as the very first card of the hand.\n- This means clubs are always the first suit, and everyone with a club must follow.\n- It's a simple, fair way to start that also removes the lowest club from play immediately.",
        "The FIRST TRICK has special safety rules:\n- NO POINTS may be played on the first trick — you cannot dump a heart or the Queen of Spades onto it, even if you are void in clubs.\n- (Many rule sets phrase this as 'no penalty cards on the first trick'; some allow the Queen if you have literally no safe card, but the common rule forbids all points.)\n- This protects players from getting slammed before the hand has even developed.",
        "'BREAKING HEARTS' governs when hearts may be LED:\n- Hearts cannot be LED to a trick until they have been 'broken' — meaning a heart has already been played (because someone was void in the led suit and discarded one).\n- Until hearts are broken, you must lead some other suit if you can. Only once a heart has appeared can a player choose to lead hearts.\n- Some variants also forbid leading the Queen of Spades until hearts are broken; rules vary, but the heart-leading restriction is standard.",
      ],
      technical: {
        title: "Why These Opening Rules Exist — and How to Use Them",
        body: [
          "Each opening rule serves the game's balance:\n- The TWO-OF-CLUBS lead guarantees a neutral, point-free start and removes any argument over who goes first.\n- The NO-POINTS-FIRST-TRICK rule prevents an unlucky void player from dumping the Queen of Spades on someone in the very first trick, before anyone can defend.\n- The BREAK-HEARTS rule stops a player from immediately blasting hearts and forcing points before the hand has shape, keeping early play about safe suits.",
          "Smart players exploit the opening:\n- Since no points can fall on the first trick, it's a free chance to safely get rid of a high club or read the table.\n- A player void in clubs on the first trick may have to throw a non-point card — sometimes revealing information about their hand.\n- Holding a low heart can be valuable: once hearts are broken, you want to be able to lead a low heart and lose the trick rather than be forced to win it.",
        ],
        codeExample: {
          label: "The opening sequence",
          code: `  TRICK 1: holder of  2-c  MUST lead it
    -> everyone follows clubs if able
    -> NO points may be played this trick
       (no hearts, no Q-s, even if void in clubs)

  LEADING HEARTS:
    you may NOT lead a heart until hearts are
    'BROKEN' = a heart has been discarded on an
    earlier trick (by a player void in the led suit).

  Until then -> lead clubs / diamonds / spades.`,
        },
      },
      incident: {
        title: "The First Trick: A Safe Harbor by Design",
        when: "Every hand's opening",
        where: "Standard Hearts rules",
        impact: "The 'no points on the first trick' and 'break hearts' rules exist specifically to stop early ambushes — they keep the opening fair and give the hand room to develop",
        body: [
          "Imagine Hearts WITHOUT these rules: the player to lead could be a club, and a player void in clubs could immediately drop the Queen of Spades on the first trick, ending someone's game before it began. To prevent exactly this kind of ambush, standard Hearts forbids any penalty card on the opening trick.",
          "Likewise, the 'break hearts' rule keeps the early game civilized:\n- Without it, a player could lead hearts from the very first opportunity, forcing points before anyone has had a chance to shed liabilities.\n- Requiring hearts to be 'broken' first means points enter the hand gradually, through discards, rather than all at once.\n- Together these opening rules make Hearts a game of building pressure rather than instant knockouts — and learning them is the difference between a beginner and someone who understands the game's design.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Two of Clubs Leads", sub: "fixed, neutral opening", type: "system" },
          { label: "No Points First Trick", sub: "no hearts or Queen", type: "attacker" },
          { label: "Hearts Must Be Broken", sub: "before they can be led", type: "victim" },
          { label: "Hand Develops Fairly", sub: "no early ambush", type: "result" },
        ],
      },
      timeline: [
        { year: 1880, event: "Early Hearts allows any opening lead" },
        { year: 1920, event: "The two-of-clubs forced lead becomes common" },
        { year: 1992, event: "Windows Hearts enforces 2-of-clubs lead and the break-hearts rule", highlight: true },
        { year: 2024, event: "No-points-first-trick and break-hearts are standard everywhere" },
      ],
      keyTakeaways: [
        "The player holding the two of clubs must lead it to start the hand",
        "No penalty cards (hearts or the Queen of Spades) may be played on the first trick",
        "Hearts cannot be LED until they've been 'broken' — a heart discarded on an earlier trick",
        "These opening rules prevent early ambushes and let each hand develop fairly",
      ],
      references: [
        { title: "Hearts (card game) — the first trick", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Gameplay" },
        { title: "Hearts rules (Bicycle Cards)", url: "https://bicyclecards.com/how-to-play/hearts" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-06-q1", type: "The Lead", challenge: "Who opens.", text: "Who leads the first trick of a Hearts hand?", options: ["The player holding the two of clubs (who must lead it)", "The dealer", "The player to the dealer's left", "Whoever holds the Ace of spades"], correctIndex: 0, explanation: "The holder of the two of clubs must lead it as the first card of the hand." },
        { id: "hearts-1-06-q2", type: "First Trick", challenge: "Safety rule.", text: "What may NOT be played on the first trick?", options: ["Penalty cards — hearts or the Queen of Spades", "Any club", "The Ace of clubs", "Diamonds"], correctIndex: 0, explanation: "No points may be played on the first trick, protecting players from an early ambush." },
        { id: "hearts-1-06-q3", type: "Breaking Hearts", challenge: "When you can lead them.", text: "When may a player LEAD a heart?", options: ["Only after hearts have been 'broken' (a heart already discarded)", "On the very first trick", "Whenever they wish", "Only on the last trick"], correctIndex: 0, explanation: "Hearts can't be led until they're broken — until a heart has been played on an earlier trick." },
        { id: "hearts-1-06-q4", type: "What Breaks Hearts", challenge: "The trigger.", text: "How do hearts get 'broken'?", options: ["A player void in the led suit discards a heart on a trick", "The dealer announces it", "Someone leads the Queen of Spades", "After exactly four tricks"], correctIndex: 0, explanation: "Hearts are broken when a void player sloughs a heart onto a trick of another suit." },
        { id: "hearts-1-06-q5", type: "Purpose", challenge: "Why bother.", text: "Why do the opening rules (no points first trick, break hearts) exist?", options: ["To prevent early ambushes and let the hand develop fairly", "To make the game shorter", "To favor the dealer", "To force everyone to shoot the moon"], correctIndex: 0, explanation: "They stop someone from dumping the Queen or blasting hearts before the hand has had a chance to develop." },
      ],
    },
  },

  // ─── hearts-1-07: Voiding Suits & Sloughing ──────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The void", location: "An empty suit in your hand", era: "Modern", emoji: "🕳️" },
    id: "hearts-1-07",
    order: 7,
    title: "Voiding Suits & Sloughing",
    subtitle: "Empty a suit so you can dump your points on others",
    category: "sports",
    xp: 98,
    badge: { id: "hearts-badge-07", name: "Void Master", emoji: "🕳️" },
    challengeType: "quiz",
    info: {
      tagline: "The single most powerful tool in Hearts is the 'void' — having zero cards in a suit. When a suit you're void in is led, you can play anything, which means you can 'slough' your hearts and the dreaded Queen of Spades onto someone else's trick.",
      year: 2024,
      overview: [
        "A 'VOID' means you hold no cards of a particular suit. It matters because of the follow-suit rule:\n- When a suit is led and you have it, you MUST follow.\n- When a suit is led and you are VOID in it, you may play ANY card — including a heart or the Queen of Spades.\n- Since off-suit cards can't win the trick, a void is your safe opportunity to unload penalty cards.",
        "'SLOUGHING' (also spelled 'sluffing') is the act of discarding a penalty card on a trick you can't win:\n- If diamonds are led and you're void in diamonds, you can slough a heart — the trick goes to a diamond, and your heart goes into someone else's pile.\n- The best sloughs get rid of your most dangerous cards: high hearts and, above all, the Queen of Spades.\n- Timing matters — you want a void in a suit that opponents will actually LEAD while you still hold danger to dump.",
        "Creating voids deliberately is a core skill:\n- The PASS is the first tool — passing away all your cards in a short suit makes you void before play even starts.\n- During play, you can 'short-suit' yourself by spending your low cards in a suit early, so you run out and become void later.\n- A hand with a void (or two) and the danger cards to dump is far safer than a flat hand with cards in every suit and nowhere to hide the Queen.",
      ],
      technical: {
        title: "Engineering a Void — and the Risk of Voiding Wrong",
        body: [
          "Building a useful void takes planning:\n- IDENTIFY YOUR SHORT SUIT — the suit where you have the fewest cards is the easiest to void; passing those few cards away completes it.\n- VOID A SUIT OTHERS HAVE — a void only helps if that suit gets led while you still hold points; voiding a suit no one leads is wasted.\n- KEEP THE DANGER UNTIL YOU'RE VOID — there's no point being void in clubs if you've already been forced to take all your hearts; coordinate so you still HAVE points to dump when the void is ready.",
          "Voids can also backfire if mismanaged:\n- VOID TOO EARLY in spades and you may be forced to slough... but with no high spade left to protect you, you might also have given up your ability to control the Queen.\n- BEING VOID IN ONE SUIT means you'll keep getting more of the OTHER suits — which can flood you with the very cards you didn't want.\n- The art is balance: enough voids to dump your worst cards, but enough spread that you aren't forced to win tricks you wanted to avoid.",
        ],
        codeExample: {
          label: "Sloughing on a void",
          code: `  YOUR HAND has NO diamonds (you are VOID).

  TRICK: diamonds are led
    P1  9-d
    P2  J-d
    YOU void in diamonds -> play ANY card
      -> slough the  Q-s !
    P4  A-d   (wins the trick... and your Queen)

  RESULT: A-d player takes the Queen = +13
  Your most dangerous card is gone, safely.`,
        },
      },
      incident: {
        title: "The Void as a Weapon",
        when: "Mid-hand, every game",
        where: "Skilled Hearts play",
        impact: "The difference between a beginner and a strong player is often the deliberate use of voids — engineering an empty suit to dump the Queen of Spades onto an opponent is the game's signature tactic",
        body: [
          "Watch a strong Hearts player and you'll see them quietly engineering voids from the very first pass. They pass away their two lonely diamonds, then spend their early plays getting short in another suit. By mid-hand they hold the Queen of Spades and a void in diamonds — and they simply wait for diamonds to be led so they can slide the Queen into someone else's trick.",
          "This deliberate, patient setup is what separates good players from those who just react:\n- A void turns a liability (the Queen, a fistful of high hearts) into something you can shed at will.\n- It requires foresight — you decide which suit to void several tricks before the payoff.\n- Combined with counting which suits opponents still hold (a later stage), the void is the engine behind nearly every advanced Hearts play.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick a Short Suit", sub: "fewest cards = easiest void", type: "system" },
          { label: "Pass / Spend It Away", sub: "empty the suit", type: "attacker" },
          { label: "Wait for It to Be Led", sub: "void = play anything", type: "victim" },
          { label: "Slough the Queen / Hearts", sub: "dump danger onto others", type: "result" },
        ],
      },
      timeline: [
        { year: 1880, event: "Follow-suit rules make voids strategically valuable" },
        { year: 1900, event: "The pass gives players a tool to engineer voids" },
        { year: 2000, event: "Online Hearts AI showcases aggressive void-and-slough tactics", highlight: true },
        { year: 2024, event: "Deliberate voiding is taught as a core intermediate skill" },
      ],
      keyTakeaways: [
        "A 'void' is having zero cards in a suit; when that suit is led, you may play any card",
        "'Sloughing' means dumping a heart or the Queen of Spades on a trick you can't win",
        "Create voids deliberately — via the pass or by spending a short suit early",
        "Void a suit opponents will actually lead, and keep your danger cards until the void is ready",
      ],
      references: [
        { title: "Hearts (card game) — strategy", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Strategy" },
        { title: "Glossary of card game terms — void", url: "https://en.wikipedia.org/wiki/Glossary_of_card_game_terms" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-07-q1", type: "Definition", challenge: "Empty suit.", text: "What does it mean to be 'void' in a suit?", options: ["You hold no cards of that suit", "You hold only low cards of that suit", "You hold the Ace of that suit", "You must lead that suit"], correctIndex: 0, explanation: "A void means zero cards of that suit, so you may play anything when it's led." },
        { id: "hearts-1-07-q2", type: "Sloughing", challenge: "The dump.", text: "What is 'sloughing'?", options: ["Discarding a penalty card on a trick you can't win because you're void", "Winning a trick on purpose", "Leading the two of clubs", "Passing three cards"], correctIndex: 0, explanation: "Sloughing is dumping a heart or the Queen of Spades off-suit when you're void in the led suit." },
        { id: "hearts-1-07-q3", type: "Creating Voids", challenge: "Make it empty.", text: "What is the easiest way to start creating a void?", options: ["Pass away all your cards in your shortest suit", "Pass away your highest cards in every suit", "Lead hearts immediately", "Keep one card in every suit"], correctIndex: 0, explanation: "Passing away the few cards of your shortest suit makes you void before play begins." },
        { id: "hearts-1-07-q4", type: "Useful Voids", challenge: "Which suit.", text: "A void only helps you if...", options: ["The voided suit actually gets led while you still hold points to dump", "It's the suit with the most cards", "You void hearts specifically", "You announce the void to the table"], correctIndex: 0, explanation: "The void pays off only when that suit is led and you still have danger cards to slough." },
        { id: "hearts-1-07-q5", type: "The Payoff", challenge: "Best target.", text: "What is the most valuable card to slough on a void?", options: ["The Queen of Spades (worth 13 points)", "A low club", "The two of diamonds", "A non-Queen spade"], correctIndex: 0, explanation: "Dumping the 13-point Queen of Spades onto an opponent is the biggest possible slough." },
      ],
    },
  },

  // ─── hearts-1-08: Hunting the Queen of Spades ────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The Queen hunt", location: "The battle over the Black Lady", era: "Modern", emoji: "👑" },
    id: "hearts-1-08",
    order: 8,
    title: "Hunting the Queen of Spades",
    subtitle: "Smoking out the Black Lady, and managing the Ace/King risk",
    category: "sports",
    xp: 100,
    badge: { id: "hearts-badge-08", name: "Queen Hunter", emoji: "👑" },
    challengeType: "quiz",
    info: {
      tagline: "So much of Hearts revolves around one card — the Queen of Spades. Whether you're trying to flush her out of an opponent's hand or desperately avoid catching her yourself, knowing how to hunt the Black Lady (and how to manage the dangerous Ace and King of spades) is the heart of the game.",
      year: 2024,
      overview: [
        "'Hunting' or 'smoking out' the Queen means forcing her to be played by leading spades:\n- When spades are led, everyone with a spade must follow — including whoever holds the Queen.\n- By leading low spades, you pressure the Queen-holder to eventually play her (or risk being stuck with her at the end).\n- The hunt is usually led by players who do NOT have the high spades themselves, trying to make someone else cough her up.",
        "The danger of the Ace and King of spades:\n- If you hold the ACE or KING of spades and the Queen is still out, you are at risk: when spades are led and the Queen falls, your high spade may WIN the trick and capture her.\n- This is why so many players pass away the Ace and King of spades early — they're liabilities, not assets, while the Queen is loose.\n- Conversely, holding high spades CAN be a weapon if you intend to control when the Queen appears (or to shoot the moon).",
        "When to dump versus when to hold the Queen:\n- IF YOU HOLD THE QUEEN, you generally want to get rid of her safely — slough her on a void, or play her when you're forced to follow a spade lead you can't win.\n- HOLDING HER TOO LONG is dangerous: if you're stuck leading and must play spades, you might be forced to lead the Queen and 'eat' her yourself if no higher spade is out.\n- Sometimes you HOLD her deliberately — as a threat, or to drop her on a specific opponent at the perfect moment.",
      ],
      technical: {
        title: "The Spade Count and the Art of the Smoke-Out",
        body: [
          "Hunting the Queen is really an exercise in counting spades:\n- COUNT THE SPADES PLAYED — track how many spades have appeared and whether the Ace, King, and Queen are still out.\n- If the high spades (A, K) are gone but the Queen hasn't appeared, leading spades is relatively safe and will eventually force her out.\n- If you hold a middling spade (say the 9) and the Queen is still out, leading it risks the Queen landing on YOU, so timing the lead is delicate.",
          "Managing your own spade exposure is just as important:\n- IF YOU HOLD A-s OR K-s, you usually want to shed them (via the pass) or get void in spades before the Queen is forced out, so you can't catch her.\n- IF YOU HOLD THE QUEEN, watch for a void to slough her, or wait for a spade trick you can safely lose her on.\n- The whole table is doing this math at once, which is why the Queen of Spades produces the tensest, most skillful moments in Hearts.",
        ],
        codeExample: {
          label: "Smoking out the Queen",
          code: `  GOAL: force the Queen-holder to play her.

  YOU hold low spades (4-s, 6-s), NOT the A/K/Q.
    -> LEAD a low spade.
    others must follow spades if able.

  IF the Queen-holder has no higher spade to hide
  behind, they may be forced to drop  Q-s  ->
  caught by whoever played the highest spade.

  DANGER: if YOU held A-s here, your Ace could be
  the one that WINS the spade trick + the Queen!`,
        },
      },
      incident: {
        title: "The Black Lady and the High-Spade Trap",
        when: "Every hand the Queen is in play",
        where: "Competitive Hearts",
        impact: "Holding the Ace or King of spades while the Queen is loose is one of the most common ways beginners get burned — the high spade they thought was strong becomes a magnet for 13 points",
        body: [
          "New players often cling to the Ace and King of spades, assuming high cards are good. In Hearts they can be a trap: when spades are led and the Queen of Spades falls into the trick, the highest spade WINS it — and 'wins' the 13-point Queen. The very card they thought was powerful drags the Black Lady straight into their pile.",
          "Experienced players treat the high spades with respect bordering on fear while the Queen is out:\n- They pass the Ace and King away, or work to become void in spades, removing the risk.\n- They count spades carefully so they know whether leading a spade will smoke out the Queen safely or backfire.\n- The phrase 'the Queen of Spades' looms over every spade trick — and learning to manage her, and the high spades around her, is the truest test of a Hearts player.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Lead Low Spades", sub: "pressure the Queen-holder", type: "system" },
          { label: "High Spades Are Risky", sub: "A/K can catch the Queen", type: "attacker" },
          { label: "Queen-Holder Must Follow", sub: "forced to play her eventually", type: "victim" },
          { label: "Dump or Catch the Queen", sub: "13 points lands somewhere", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "The 13-point Queen makes spade play the game's focal point" },
        { year: 1940, event: "Nicknames 'Black Lady' and 'Calamity Jane' enter common use", highlight: true },
        { year: 1992, event: "Windows Hearts AI models smoking out the Queen via spade leads" },
        { year: 2024, event: "Queen management remains the central skill of expert Hearts" },
      ],
      keyTakeaways: [
        "'Smoking out' the Queen means leading spades to force the Queen-holder to play her",
        "The Ace and King of spades are liabilities while the Queen is loose — they can catch her",
        "Many players pass away high spades or void spades to avoid catching the Queen",
        "If you hold the Queen, slough her on a void or play her when you can't win a spade trick",
      ],
      references: [
        { title: "Hearts (card game) — the Queen of Spades", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)" },
        { title: "Queen of spades — in games", url: "https://en.wikipedia.org/wiki/Queen_of_spades" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-08-q1", type: "Smoking Out", challenge: "Forcing her out.", text: "How do you 'smoke out' the Queen of Spades?", options: ["Lead spades to force the Queen-holder to eventually play her", "Lead hearts repeatedly", "Lead the two of clubs", "Refuse to play spades"], correctIndex: 0, explanation: "Leading spades makes everyone follow, pressuring the Queen-holder to play her." },
        { id: "hearts-1-08-q2", type: "High Spade Risk", challenge: "The trap.", text: "Why are the Ace and King of spades dangerous while the Queen is out?", options: ["When the Queen falls on a spade trick, your high spade can win it and capture her", "They can never win a trick", "They're worth points themselves", "They block you from following suit"], correctIndex: 0, explanation: "The highest spade wins the spade trick — and catches the 13-point Queen if she's in it." },
        { id: "hearts-1-08-q3", type: "Passing", challenge: "Shed the risk.", text: "What do many players do with the Ace and King of spades when the Queen is loose?", options: ["Pass them away or get void in spades to avoid catching the Queen", "Hold them to win tricks", "Lead them first", "Save them for the last trick"], correctIndex: 0, explanation: "High spades are liabilities with the Queen out, so players shed them to avoid catching her." },
        { id: "hearts-1-08-q4", type: "Holding the Queen", challenge: "Getting rid of her.", text: "If you hold the Queen of Spades, what's a safe way to get rid of her?", options: ["Slough her on a suit you're void in, or play her when you can't win a spade trick", "Lead her on the first trick", "Hold her until the very last card always", "Pass her every single hand"], correctIndex: 0, explanation: "Dumping her off-suit on a void, or losing a spade trick with her, gives her to someone else safely." },
        { id: "hearts-1-08-q5", type: "Nicknames", challenge: "Know her by name.", text: "Which nickname refers to the Queen of Spades?", options: ["The 'Black Lady' (also 'Calamity Jane')", "The 'Big Joker'", "The 'Right Bower'", "The 'Dead Man's Hand'"], correctIndex: 0, explanation: "The feared Queen of Spades is nicknamed the 'Black Lady' and 'Calamity Jane'." },
      ],
    },
  },

  // ─── hearts-1-09: Card Counting & Endgame ────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The count", location: "Where memory beats luck", era: "Modern", emoji: "🧮" },
    id: "hearts-1-09",
    order: 9,
    title: "Card Counting & Endgame",
    subtitle: "Track what's played, control the lead, dump points safely",
    category: "sports",
    xp: 104,
    badge: { id: "hearts-badge-09", name: "Card Counter", emoji: "🧮" },
    challengeType: "quiz",
    info: {
      tagline: "Hearts rewards memory. By tracking which cards have been played — especially the spades and hearts — you can predict who holds what, control the lead, and steer every remaining point toward your opponents in the endgame.",
      year: 2024,
      overview: [
        "Card counting in Hearts isn't about complex math — it's about tracking what's gone:\n- COUNT THE SPADES — above all, know whether the Ace, King, and Queen of spades are still out. This tells you whether leading spades is safe or risky.\n- COUNT THE HEARTS — knowing how many hearts remain (and roughly who's void) tells you when leading a heart will dump points versus catch them.\n- WATCH THE VOIDS — when a player fails to follow a suit, remember it: they're void there and can slough on you if that suit is led again.",
        "Controlling the lead is the key endgame lever:\n- Whoever leads chooses the suit, so controlling the lead lets you avoid being forced into bad tricks and lets you flush out danger cards.\n- Keeping a low card or two in reserve lets you LOSE the lead on purpose when you don't want it.\n- Conversely, holding a sure winner lets you GRAB the lead when you need to dictate the next suit.",
        "Dumping points safely in the endgame:\n- As the hand winds down, you want to shed your remaining hearts and the Queen onto tricks you can't win.\n- KNOW WHO'S VOID — if you know a player is void in a suit, you can avoid leading it (so they can't dump on you) or lead it deliberately to set up your own escape.\n- COUNT TO THE LAST TRICK — in the final few tricks, an expert often knows every remaining card; the player who counted correctly avoids the last-second point that decides a close game.",
      ],
      technical: {
        title: "Practical Counting — Spades First, Then Hearts and Voids",
        body: [
          "You don't need to memorize all 52 cards; focus your attention:\n- SPADES ARE PRIORITY ONE — track A, K, Q of spades and roughly how many low spades remain. This single habit drives most good Hearts decisions.\n- HEARTS ARE PRIORITY TWO — keep a rough count of how many hearts are still unplayed, so you know when the suit is 'safe' to lead (most hearts gone) or dangerous.\n- NOTE EVERY VOID — the instant a player can't follow suit, log it; that information shapes the rest of the hand more than any single card.",
          "Endgame technique ties counting to action:\n- LOW CARDS ARE GOLD LATE — a 2 or 3 you held back lets you duck under a trick and avoid points when it matters most.\n- FORCE THE DANGER OUT EARLY — if you suspect an opponent is hoarding the Queen or high hearts, use your leads to make them spend those cards before the endgame.\n- THE LAST TRICK — because the winner of each trick leads the next, a well-counted endgame can force a specific opponent to win the final, point-laden tricks. This is where games are won or lost.",
        ],
        codeExample: {
          label: "Counting into the endgame",
          code: `  TRACK THESE FIRST:
    spades:  is A-s, K-s, Q-s still OUT?
    hearts:  how many remain unplayed?
    voids:   who failed to follow which suit?

  ENDGAME (last few tricks):
    you hold  2-d  (a duck) + one high card.
    -> use the high card to GRAB the lead,
       then later play 2-d to DODGE the last
       points trick.

  Counting tells you exactly who must win the
  final trick -> steer the last hearts to them.`,
        },
      },
      incident: {
        title: "The Hand Decided by One Remembered Card",
        when: "Close endgames",
        where: "Expert Hearts play",
        impact: "In tight games, the player who accurately counted the spades and hearts can force opponents to eat the final points — counting, not luck, decides most close hands",
        body: [
          "Two players are neck-and-neck late in a game. The hand comes down to the final three tricks, and one player has been quietly counting: they know exactly which spades remain and that an opponent is void in diamonds. They lead precisely the card that forces the opponent to win the last heart-filled trick, sealing the game.",
          "This is the quiet truth of Hearts at a high level:\n- The cards are dealt randomly, but the OUTCOME is heavily shaped by who tracks information best.\n- Counting spades and hearts, remembering voids, and controlling the lead let a skilled player engineer the endgame rather than hope for good cards.\n- A beginner sees chaos in the final tricks; an expert sees a solved puzzle — which is why Hearts is a genuine game of skill, not just luck.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count Spades & Hearts", sub: "track A/K/Q and what's left", type: "system" },
          { label: "Remember the Voids", sub: "who can slough on you", type: "attacker" },
          { label: "Control the Lead", sub: "duck low, grab with winners", type: "victim" },
          { label: "Steer the Final Points", sub: "force opponents to eat them", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Strong players track spades and hearts to manage the Queen" },
        { year: 1980, event: "Strategy books formalize counting and lead control in Hearts" },
        { year: 2000, event: "Computer Hearts opponents demonstrate near-perfect card tracking", highlight: true },
        { year: 2024, event: "Counting spades, hearts, and voids is the mark of an expert" },
      ],
      keyTakeaways: [
        "Track the spades first (is the A/K/Q still out?), then the hearts, then every void you see",
        "Controlling the lead lets you avoid bad tricks and flush out danger cards",
        "Keep low cards in reserve to 'duck' tricks and avoid points in the endgame",
        "Accurate counting lets you force opponents to win the final, point-laden tricks",
      ],
      references: [
        { title: "Hearts (card game) — strategy", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Strategy" },
        { title: "Card counting", url: "https://en.wikipedia.org/wiki/Card_counting" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-09-q1", type: "Priority", challenge: "Count this first.", text: "Which cards should you track above all others in Hearts?", options: ["The spades — especially whether the Ace, King, and Queen are still out", "Only the diamonds", "The two of clubs", "Only your own cards"], correctIndex: 0, explanation: "Tracking the high spades tells you whether leading spades is safe and where the Queen might be." },
        { id: "hearts-1-09-q2", type: "Voids", challenge: "Remember the gap.", text: "Why is it important to notice when a player fails to follow suit?", options: ["It tells you they're void there and can slough points on you if that suit is led", "It means they're cheating", "It ends the hand", "It has no strategic value"], correctIndex: 0, explanation: "A void player can dump hearts or the Queen, so knowing who's void shapes the rest of the hand." },
        { id: "hearts-1-09-q3", type: "The Lead", challenge: "Why control it.", text: "Why is controlling the lead valuable in the endgame?", options: ["It lets you choose the suit, avoid bad tricks, and flush out danger cards", "It guarantees you take no points", "It forces opponents to pass you cards", "It doubles your score"], correctIndex: 0, explanation: "The leader picks the suit, so controlling the lead lets you steer play and dodge points." },
        { id: "hearts-1-09-q4", type: "Ducking", challenge: "Low cards late.", text: "Why are low cards valuable in the endgame?", options: ["They let you 'duck' under a trick and avoid taking points", "They win the most tricks", "They're worth bonus points", "They break hearts faster"], correctIndex: 0, explanation: "A held-back 2 or 3 lets you lose a trick on purpose and avoid the points in it." },
        { id: "hearts-1-09-q5", type: "Endgame", challenge: "Skill over luck.", text: "What can an expert who counts cards accomplish in the final tricks?", options: ["Force a specific opponent to win the last point-laden tricks", "Always shoot the moon", "Guarantee the Queen never appears", "Skip the last trick"], correctIndex: 0, explanation: "By counting and controlling the lead, an expert can steer the final points onto an opponent." },
      ],
    },
  },

  // ─── hearts-1-10: Strategy & Variants ────────────────────────────────────────
  {
    epochId: "hearts-1",
    wonder: { name: "The variants", location: "Hearts around the world", era: "Modern", emoji: "🎴" },
    id: "hearts-1-10",
    order: 10,
    title: "Strategy & Variants",
    subtitle: "Black Maria, Omnibus, Cancellation, and winning tactics",
    category: "sports",
    xp: 108,
    badge: { id: "hearts-badge-10", name: "Hearts Master", emoji: "🎴" },
    challengeType: "quiz",
    info: {
      tagline: "Once you know standard Hearts, a whole family of variants opens up — Black Maria, Omnibus Hearts, Spot Hearts, and Cancellation Hearts for big groups. Each tweaks the points or the players, but the same core tactics of passing, voiding, and endgame control carry over.",
      year: 2024,
      overview: [
        "Several popular variants change the scoring or structure:\n- BLACK MARIA — a British relative, often played by three players (one card removed), where the Queen of Spades ('Black Maria') and sometimes the King and Ace of spades carry penalties too.\n- OMNIBUS HEARTS — adds a BONUS card: the Jack of Diamonds (or the Ten of Diamonds) is worth MINUS 10, so capturing it actually HELPS you.\n- SPOT HEARTS — scores each heart by its face value (the 2 of hearts = 2, the Ace = 14 or so) instead of a flat 1 point each, making high hearts far more dangerous.",
        "For bigger groups, there's a special variant:\n- CANCELLATION HEARTS — designed for 5 or more players, it uses two full decks shuffled together.\n- When two identical cards are played in the same trick, they 'cancel' and neither can win the trick — a fun twist that handles large groups.\n- It keeps Hearts playable at a crowded table where a single 52-card deck wouldn't divide evenly.",
        "Across all variants, the winning tactics stay the same:\n- PASS to shed liabilities (high spades, high hearts) and build voids.\n- VOID AND SLOUGH to dump the Queen and hearts onto opponents.\n- COUNT cards and CONTROL the lead to steer the endgame.\n- KNOW THE SCORES — play cautiously when near the limit, and consider shooting the moon when you're far behind and hold a powerful hand.",
      ],
      technical: {
        title: "Adapting Your Strategy to the Variant and the Scoreboard",
        body: [
          "Each variant shifts the strategic emphasis:\n- IN OMNIBUS HEARTS, the minus-10 Jack of Diamonds becomes a prize — you might actively try to capture it, and shooting the moon may require taking it too (rules vary), adding a new layer.\n- IN SPOT HEARTS, high hearts (the Ace, King, Queen of hearts) are far more punishing than low ones, so passing and voiding priorities shift toward shedding big hearts.\n- IN BLACK MARIA and similar three-player games, the removed card and extra spade penalties change which cards are safe to hold.",
          "Reading the scoreboard is the master skill that ties it all together:\n- WHEN YOU'RE NEAR THE LIMIT, play it safe — avoid any chance of a big hand, and especially don't let an opponent shoot the moon for 26.\n- WHEN YOU'RE FAR BEHIND, take more risk — a moonshot or aggressive play might be your best path back.\n- TARGET THE RIGHT OPPONENT — in the endgame, you can often choose WHO eats the points; steering them onto the current leader can shift the standings in your favor. Good Hearts is always played with one eye on the cards and one on the scores.",
        ],
        codeExample: {
          label: "A field guide to Hearts variants",
          code: `  STANDARD     each heart = 1, Q-s = 13, game to 100

  BLACK MARIA  3 players, 1 card removed; A/K/Q of
               spades all carry penalties

  OMNIBUS      adds  J of diamonds = MINUS 10
               (a card you WANT to take)

  SPOT HEARTS  hearts scored by face value
               (2-h = 2 ... A-h = 14)

  CANCELLATION 5+ players, TWO decks; matching cards
               in a trick 'cancel' and can't win`,
        },
      },
      incident: {
        title: "One Game, Many Tables",
        when: "Over a century of play",
        where: "From British parlors to American family rooms",
        impact: "The many variants of Hearts — Black Maria, Omnibus, Spot, Cancellation — show how a single elegant idea (avoid the points) adapts to any group, scoring taste, or table size",
        body: [
          "Hearts has proven endlessly adaptable. The British developed Black Maria with its extra spade penalties; Americans added the rewarding Jack of Diamonds in Omnibus Hearts and the face-value scoring of Spot Hearts; big families invented Cancellation Hearts with two decks so everyone could play at once. Each version keeps the core thrill — dodging points and hunting the Queen — while adding its own flavor.",
          "For a player, the lesson is that the FUNDAMENTALS transfer:\n- No matter the variant, you still pass away liabilities, build voids, slough your danger cards, count the table, and control the lead.\n- What changes is the EMPHASIS — which cards are most dangerous or most valuable — and adapting to that is itself a skill.\n- Master standard Hearts and you can sit down at any of these tables and hold your own, which is exactly why it remains one of the world's most enduring card games.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick the Variant", sub: "Black Maria, Omnibus, Spot...", type: "system" },
          { label: "Adapt the Emphasis", sub: "which cards hurt or help", type: "attacker" },
          { label: "Same Core Tactics", sub: "pass, void, slough, count", type: "victim" },
          { label: "Play the Scoreboard", sub: "safe when ahead, bold when behind", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Black Maria and other regional Hearts variants emerge" },
        { year: 1930, event: "Omnibus Hearts adds the minus-10 Jack of Diamonds" },
        { year: 1950, event: "Cancellation Hearts lets large groups play with two decks", highlight: true },
        { year: 2024, event: "All variants share the same core pass-void-count strategy" },
      ],
      keyTakeaways: [
        "Black Maria (3-player, extra spade penalties), Omnibus (Jack of Diamonds = -10), and Spot Hearts (face-value hearts) are common variants",
        "Cancellation Hearts uses two decks for 5+ players; matching cards in a trick 'cancel' and can't win",
        "The core tactics — passing, voiding, sloughing, counting, lead control — carry across every variant",
        "Play the scoreboard: be cautious near the limit, take risks when far behind, and steer points onto the leader",
      ],
      references: [
        { title: "Hearts (card game) — variations", url: "https://en.wikipedia.org/wiki/Hearts_(card_game)#Variations" },
        { title: "Black Maria (card game)", url: "https://en.wikipedia.org/wiki/Black_Maria_(card_game)" },
      ],
    },
    quiz: {
      questions: [
        { id: "hearts-1-10-q1", type: "Omnibus", challenge: "The helpful card.", text: "In Omnibus Hearts, what is special about the Jack of Diamonds?", options: ["It's worth MINUS 10 — capturing it helps your score", "It's worth 13 like the Queen", "It can't be played", "It must be passed every hand"], correctIndex: 0, explanation: "Omnibus Hearts adds the Jack of Diamonds as a minus-10 bonus card you want to take." },
        { id: "hearts-1-10-q2", type: "Cancellation", challenge: "Big groups.", text: "What makes Cancellation Hearts suited to 5 or more players?", options: ["It uses two decks, and matching cards in a trick 'cancel' and can't win", "It removes the Queen of Spades", "It deals only seven cards each", "It has no passing"], correctIndex: 0, explanation: "Cancellation Hearts shuffles two decks together so larger groups can play; identical cards cancel out." },
        { id: "hearts-1-10-q3", type: "Spot Hearts", challenge: "Value scoring.", text: "How does Spot Hearts score the hearts?", options: ["By face value — higher hearts cost more points", "All hearts are worth 13", "Hearts are worth nothing", "Only the Ace of hearts scores"], correctIndex: 0, explanation: "Spot Hearts scores each heart by its rank, so high hearts become much more dangerous." },
        { id: "hearts-1-10-q4", type: "Black Maria", challenge: "British cousin.", text: "What is a feature of Black Maria?", options: ["Often three players with a card removed, and extra spade (A/K) penalties", "Five decks shuffled together", "No Queen of Spades at all", "Hearts are worth bonus points"], correctIndex: 0, explanation: "Black Maria is commonly a three-player game with extra penalties on the high spades." },
        { id: "hearts-1-10-q5", type: "Scoreboard", challenge: "Play the situation.", text: "How should the scoreboard affect your strategy?", options: ["Play cautiously near the limit; take more risk (e.g., a moonshot) when far behind", "Always play the same way", "Only shoot the moon when winning", "Ignore the scores entirely"], correctIndex: 0, explanation: "Reading the scores tells you when to play safe and when bold risks are worth it." },
      ],
    },
  },
];
