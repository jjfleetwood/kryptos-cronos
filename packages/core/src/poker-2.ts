import type { StageConfig, EpochConfig } from "./types";

export const poker2Epoch: EpochConfig = {
  id: "poker-2",
  name: "Poker: Advanced Hold'em",
  subtitle: "Ranges, 3-bets, barrels, and the math the pros really use",
  description:
    "The graduate course in No-Limit Texas Hold'em. This epoch assumes you already know the rules, hand rankings, position, and basic pot odds — and takes you into the world serious players actually live in: thinking in ranges rather than single hands, building raise-first-in charts by position, the 3-bet/4-bet/5-bet war, continuation betting and multi-street barreling, hand combinatorics and blockers, equity against a range, semi-bluffing draws aggressively, multiway pot control, polarized bet sizing and overbets, profiling and exploiting player types, final-table ICM, and the modern solver/GTO study routine (MDF, alpha, range advantage). The skills that separate a break-even player from a long-term winner.",
  emoji: "🎯",
  color: "red",
  unlocked: true,
};

export const poker2Stages: StageConfig[] = [
  // ─── poker-2-01: Preflop Ranges & Opening ────────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The RFI chart", location: "The first decision of every hand", era: "Modern", emoji: "📊" },
    id: "poker-2-01",
    order: 1,
    title: "Preflop Ranges & Opening",
    subtitle: "Thinking in ranges and building your raise-first-in chart",
    category: "sports",
    xp: 92,
    badge: { id: "poker2-badge-01", name: "Range Thinker", emoji: "📊" },
    challengeType: "quiz",
    info: {
      tagline: "Beginners ask 'what do I have?' Advanced players ask 'what range do I represent, and what range does my opponent have?' Mastering preflop ranges — which hands to open from each seat, and how much — is the foundation everything else is built on.",
      year: 2024,
      overview: [
        "A 'range' is the full set of hands a player could be holding given their actions, not one specific hand. Strong players never put an opponent on a single hand too early; they keep a weighted list of possibilities and narrow it street by street. Your own preflop strategy is also expressed as a range — a defined group of hands you'll play a given way from a given seat.",
        "The most important preflop range is your RFI — 'raise first in' — the hands you open-raise when the pot is unopened:\n- RFI ranges WIDEN as you move toward the button, because you have more position and fewer players left to act behind you.\n- Under the gun (UTG) you might open only the top ~15% of hands; on the button you can open ~45% or more.\n- The blinds are a special case: the small blind plays a tighter raise-or-fold strategy out of position, and the big blind mostly defends by calling because it already has money in.",
        "Opening size matters as much as which hands you open:\n- A standard online open is about 2.2–2.5 big blinds; live games often open larger (3–4bb) because more players call.\n- Raise the SAME size with your whole range from a given seat — limping some hands and raising others telegraphs your holding.\n- The goal of an open-raise is to win the blinds outright sometimes and to take the betting lead and initiative into the flop with the rest.",
      ],
      technical: {
        title: "Why Position Widens Ranges, and the Linear Open",
        body: [
          "Position is the engine that drives range width:\n- The later you act, the more information you have and the fewer opponents can wake up with a big hand behind you, so marginal hands become profitable opens.\n- On the button only the two blinds are left to act, so 'blind-stealing' with a wide range pressures two players who must defend out of position.\n- This is why the same hand (say, K-9 suited) is a clear fold UTG and a clear open on the button.",
          "An RFI range is usually 'linear' (also called 'merged') — it takes the BEST hands, top down:\n- A linear range is every hand above a threshold: all the strong hands plus the next-best ones, with no gaps.\n- This contrasts with a 'polarized' range (very strong hands + bluffs, nothing in between) which is used more for 3-bets and big bets, covered later.\n- A simple, durable plan: memorize an RFI chart for each position, open one consistent size, and fold everything below the threshold — most preflop leaks vanish instantly.",
        ],
        codeExample: {
          label: "RFI range width by position (6-max)",
          code: `  SEAT     OPEN %   EXAMPLE THRESHOLD HANDS
  -----    ------   -------------------------
  UTG      ~15%     77+, ATs+, KQs, AJo+
  HJ       ~20%     66+, A9s+, KTs, AJo+, KQo
  CO       ~28%     55+, A5s+, K9s+, QTs, ATo+
  BTN      ~45%     22+, A2s+, K7s+, Q8s+, A8o+
  SB       ~38%     raise-or-fold, no flat calls

  Rule: ranges WIDEN as you move toward the button
  Open ONE size (~2.5bb) with your whole range`,
        },
      },
      incident: {
        title: "From Starting-Hand Charts to Range Theory",
        when: "1979 → 2015",
        where: "Super/System to the solver era",
        impact: "Poker thinking evolved from 'play these hands' lists to full range-vs-range analysis — the single biggest shift in how the game is studied",
        body: [
          "Doyle Brunson's 1979 'Super/System' and David Sklansky's hand-group charts taught a generation which individual hands to play. They were revolutionary, but they still framed poker as a question about your two cards. The next leap came when players started thinking about the entire distribution of hands each player could hold.",
          "The online and solver eras cemented range thinking:\n- Tracking software let players see exactly which hands win money from each seat, producing data-backed RFI charts.\n- Solvers (from ~2015) output strategies as ranges with mixed frequencies, proving that even preflop is about distributions, not single hands.\n- Today a competent player can recite an opening range for every position — and, just as importantly, estimate the opponent's range and play accordingly.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Define Your RFI", sub: "open range per seat", type: "system" },
          { label: "Position Widens It", sub: "tight UTG, wide BTN", type: "attacker" },
          { label: "Opponent's Range", sub: "what they can hold", type: "victim" },
          { label: "One Size, Top-Down", sub: "linear open, take initiative", type: "result" },
        ],
      },
      timeline: [
        { year: 1976, event: "Sklansky publishes ranked starting-hand groups" },
        { year: 1979, event: "Brunson's 'Super/System' codifies aggressive opening play" },
        { year: 2006, event: "Online databases produce data-backed positional RFI charts" },
        { year: 2015, event: "Solvers express all preflop strategy as ranges with frequencies", highlight: true },
      ],
      keyTakeaways: [
        "A 'range' is every hand a player could hold given their actions — never lock an opponent onto one hand too early",
        "Your RFI (raise-first-in) range widens from tight UTG to wide on the button as position improves",
        "Open one consistent size (~2.5bb) with your whole range so you don't telegraph your hand",
        "RFI ranges are linear/merged — the best hands top-down — unlike polarized 3-bet ranges",
      ],
      references: [
        { title: "Texas hold 'em starting hands", url: "https://en.wikipedia.org/wiki/Texas_hold_%27em_starting_hands" },
        { title: "Position (poker)", url: "https://en.wikipedia.org/wiki/Position_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-01-q1", type: "Core Idea", challenge: "Define it.", text: "What is a 'range' in poker?", options: ["The full set of hands a player could hold given their actions", "The single best hand a player has", "The amount you're allowed to bet", "The distance between the blinds"], correctIndex: 0, explanation: "A range is the weighted set of all hands consistent with a player's actions — advanced players think in ranges, not single hands." },
        { id: "poker-2-01-q2", type: "Position", challenge: "Wider where?", text: "From which seat should your raise-first-in (RFI) range be widest?", options: ["The button", "Under the gun (UTG)", "The small blind", "The big blind"], correctIndex: 0, explanation: "On the button you have position and only the two blinds left to act, so you can open the widest range." },
        { id: "poker-2-01-q3", type: "Sizing", challenge: "How much to open.", text: "Why open the same size with your entire range from a given seat?", options: ["So opponents can't read your hand strength from your bet size", "Because the rules require it", "To save chips on weak hands", "Because position doesn't matter"], correctIndex: 0, explanation: "Using one consistent size keeps your range disguised; varying size by hand telegraphs your holding." },
        { id: "poker-2-01-q4", type: "Range Shape", challenge: "Top-down.", text: "An RFI opening range is usually described as:", options: ["Linear/merged — the best hands top-down with no gaps", "Polarized — only the nuts and pure bluffs", "Random — any two cards", "Only pocket pairs"], correctIndex: 0, explanation: "Open-raising ranges are linear (merged): the strongest hands down to a threshold, unlike polarized betting ranges." },
        { id: "poker-2-01-q5", type: "Blinds", challenge: "Big blind play.", text: "Why does the big blind defend mostly by calling rather than folding?", options: ["It already has money invested, so it gets a discount to continue", "It always has the best hand", "Calling is required by the rules", "It acts last postflop"], correctIndex: 0, explanation: "The big blind has a posted bet and good pot odds to call, so it defends wide — though it acts out of position postflop." },
      ],
    },
  },

  // ─── poker-2-02: The 3-Bet and 4-Bet ─────────────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The re-raise war", location: "Preflop, before the flop is dealt", era: "Modern", emoji: "⚔️" },
    id: "poker-2-02",
    order: 2,
    title: "The 3-Bet and 4-Bet",
    subtitle: "Value 3-bets, light 3-bets, and the 4-bet/5-bet jam dynamic",
    category: "sports",
    xp: 94,
    badge: { id: "poker2-badge-02", name: "Three-Better", emoji: "⚔️" },
    challengeType: "quiz",
    info: {
      tagline: "The 3-bet — re-raising a raise — is one of the most powerful weapons in No-Limit. Used only for value, you become predictable; mixing in light 3-bet bluffs makes you impossible to play against. Learn the war of escalating re-raises that decides huge pots before the flop.",
      year: 2024,
      overview: [
        "Counting the big blind as the first bet, a re-raise of an open is a '3-bet', a re-raise of that is a '4-bet', and an all-in over a 4-bet is a '5-bet'. Each step up the ladder represents a stronger and stronger range — but advanced players deliberately add bluffs at each level so they can't be read.",
        "There are two reasons to 3-bet, and your range blends them:\n- VALUE 3-BETS — premium hands (QQ+, AK) that want more money in against a worse hand that will call.\n- LIGHT (BLUFF) 3-BETS — hands like A5s or suited connectors that aren't strong enough to call but make great re-raise bluffs: they have blockers, play well postflop, and can fold out better hands now.\n- A 3-bet range built only of monsters is easy to fold to; adding bluffs wins pots immediately and gets your value hands paid.",
        "Range SHAPE is the key advanced concept here:\n- A POLARIZED 3-bet range (very strong hands + bluffs, little in between) is best in position, where you can apply pressure and your bluffs have room to work.\n- A LINEAR/MERGED 3-bet range (all your strong hands, value-heavy) is better against very wide openers or from the blinds, where you just want to play big pots with the best hands.\n- The 4-bet and 5-bet follow the same logic: 4-bet for value with the top of your range, add a few 4-bet bluffs (often with an ace blocker), and only get all-in (5-bet jam) with hands that beat a calling range.",
      ],
      technical: {
        title: "Sizing, Blockers, and the 4-Bet/5-Bet Jam Math",
        body: [
          "3-bet and 4-bet sizing follow position and stacks:\n- IN POSITION, a 3-bet is often about 3x the original open; OUT OF POSITION, size up to ~4x to deny the opener's positional advantage and good pot odds.\n- A 4-bet is typically about 2.2–2.5x the 3-bet — large enough to commit you toward stacking off but small enough to keep a bluff cheap.\n- Deeper stacks allow more 4-bet bluffing room; short stacks compress the war into 'jam or fold'.",
          "Blockers make light re-raises work, and the jam ends it:\n- Hands like A5s and A4s are favored 4-bet and 3-bet bluffs because holding an ace BLOCKS the opponent's AA and AK, making it less likely they have a hand strong enough to continue.\n- When stacks get short or a 4-bet has already gone in, the decision becomes a 5-bet JAM: shove only with hands that beat the opponent's calling range (often QQ+/AK), and fold your pure bluffs.\n- Players like Tom 'durrrr' Dwan made high-stakes online poker famous around 2009 with relentless, well-balanced light 3-betting that opponents simply couldn't fold to or call profitably.",
        ],
        codeExample: {
          label: "The re-raise ladder",
          code: `  BB = 1 bet  (the forced big blind)
  OPEN (2.5bb) ........ the 2-bet
   |
   +-- 3-BET (~3-4x) ... value: QQ+, AK
   |                     bluff: A5s, KJs, suited connectors
   |
   +-- 4-BET (~2.3x) ... value: KK+, AK
   |                     bluff: A5s (blocks AA/AK)
   |
   +-- 5-BET JAM (all-in)  only hands that beat a call
                          (QQ+/AK) -> bluffs fold here`,
        },
      },
      incident: {
        title: "The High-Stakes Online Era and the Light 3-Bet",
        when: "~2007–2011",
        where: "Online nosebleed cash games",
        impact: "Aggressive young online players weaponized the light 3-bet, forcing the whole poker world to learn re-raise defense and range balance",
        body: [
          "In the late 2000s, a wave of online players in the highest-stakes cash games — most famously Tom 'durrrr' Dwan — turned the light 3-bet into a signature weapon. Instead of re-raising only premiums, they 3-bet a balanced range of monsters and bluffs, putting opponents in impossible spots: fold too much and you get run over, call too much and you play big pots out of position with weak hands.",
          "This forced the entire game to evolve:\n- Opponents had to develop 4-bet bluffing and 'flatting' (calling 3-bets in position) just to survive.\n- The concept of balance — mixing value and bluffs at the right frequency — went from theory to table stakes.\n- The lasting lesson: a credible 3-betting range needs both value hands AND bluffs, or thinking opponents will simply exploit whichever half is missing.",
        ],
      },
      diagram: {
        nodes: [
          { label: "3-Bet to Re-Raise", sub: "value hands + light bluffs", type: "system" },
          { label: "Polarized vs Linear", sub: "shape by position/opponent", type: "attacker" },
          { label: "Opponent Must React", sub: "fold, flat, or 4-bet", type: "victim" },
          { label: "5-Bet Jam Ends It", sub: "shove hands that beat a call", type: "result" },
        ],
      },
      timeline: [
        { year: 2003, event: "Moneymaker boom floods games with raisers to re-raise" },
        { year: 2009, event: "Tom 'durrrr' Dwan popularizes balanced light 3-betting at nosebleeds", highlight: true },
        { year: 2011, event: "4-bet bluffing and 3-bet flatting become standard defenses" },
        { year: 2018, event: "Solvers confirm mixed value/bluff 3-bet ranges as optimal" },
      ],
      keyTakeaways: [
        "A 3-bet re-raises an open, a 4-bet re-raises that, a 5-bet is the all-in jam — each step a stronger range",
        "Mix value 3-bets (QQ+, AK) with light/bluff 3-bets (A5s, suited connectors) so you can't be read",
        "Use a polarized range in position and a linear/value-heavy range out of position or vs wide openers",
        "Ace-blocker hands make great 4-bet bluffs; only 5-bet jam with hands that beat a calling range",
      ],
      references: [
        { title: "Betting in poker — raising and re-raising", url: "https://en.wikipedia.org/wiki/Betting_in_poker" },
        { title: "Tom Dwan", url: "https://en.wikipedia.org/wiki/Tom_Dwan" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-02-q1", type: "Terminology", challenge: "Count the bets.", text: "Re-raising someone's opening raise is called a:", options: ["3-bet", "4-bet", "5-bet", "Limp"], correctIndex: 0, explanation: "The big blind is the 1st bet and the open is the 2nd, so the first re-raise is a 3-bet." },
        { id: "poker-2-02-q2", type: "Why Bluff", challenge: "Light 3-bets.", text: "Why add 'light' 3-bet bluffs to your re-raising range?", options: ["So your value 3-bets get paid and you can't be easily folded to", "Because bluffs always win", "To save chips", "Because the rules require balance"], correctIndex: 0, explanation: "A range of only monsters is easy to fold to; bluffs win pots now and disguise your value hands." },
        { id: "poker-2-02-q3", type: "Range Shape", challenge: "Strong + air.", text: "A 'polarized' 3-bet range consists of:", options: ["Very strong hands plus bluffs, with little in between", "Only medium-strength hands", "Every hand equally", "Only pocket pairs"], correctIndex: 0, explanation: "Polarized means the extremes — premium value and bluffs — and is most effective in position." },
        { id: "poker-2-02-q4", type: "Blockers", challenge: "Why A5s?", text: "Why is a hand like A5s a favored 4-bet bluff?", options: ["The ace blocks opponents' AA and AK, making a call/jam less likely", "It is the strongest hand", "It can't be beaten", "Suited hands always 4-bet"], correctIndex: 0, explanation: "Holding an ace reduces the combos of AA and AK the opponent can have, so they continue less often." },
        { id: "poker-2-02-q5", type: "The Jam", challenge: "When to shove.", text: "When facing a 4-bet, what hands should you 5-bet jam?", options: ["Hands that beat the opponent's calling range (e.g., QQ+/AK)", "Any two cards", "Your weakest bluffs only", "Only suited connectors"], correctIndex: 0, explanation: "A 5-bet jam is for hands strong enough to be called by worse; pure bluffs should fold to a 4-bet." },
      ],
    },
  },

  // ─── poker-2-03: Continuation Betting & Barreling ────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The barrel", location: "Flop, turn, and river pressure", era: "Modern", emoji: "🛢️" },
    id: "poker-2-03",
    order: 3,
    title: "Continuation Betting & Barreling",
    subtitle: "C-bets, board texture, range advantage, and when to give up",
    category: "sports",
    xp: 96,
    badge: { id: "poker2-badge-03", name: "Barreler", emoji: "🛢️" },
    challengeType: "quiz",
    info: {
      tagline: "As the preflop raiser you take the betting lead into the flop — but firing a continuation bet on every board is a leak. Great players c-bet based on board texture and range advantage, then choose which turns and rivers to keep 'barreling' and which to give up.",
      year: 2024,
      overview: [
        "A continuation bet ('c-bet') is a bet on the flop by the player who raised preflop, continuing their aggression. It's powerful because you represented strength preflop and the board usually misses both players — but auto-c-betting 100% of the time is exploitable. Modern c-betting is selective and based on who the board favors.",
        "The key idea is RANGE ADVANTAGE — whose range is helped more by a given board:\n- On HIGH, DRY boards (like K-7-2 rainbow), the preflop raiser's range has more big cards, so they hold a range advantage and can c-bet often, even small.\n- On LOW, CONNECTED boards (like 6-5-4 two-tone) that favor the caller's range, the raiser should c-bet far less and check more.\n- C-bet sizing follows texture too: small bets (~25–33% pot) work on dry boards you can bet wide; larger bets (~66%+) are for wet boards where you want to charge draws and bet a more polarized range.",
        "'Barreling' is continuing to bet on later streets:\n- A DOUBLE BARREL is a second bet on the turn; a TRIPLE BARREL is a third on the river.\n- The best barreling cards are 'scare cards' that improve your range and hit the opponent's calling range less — a turn that completes a draw you'd have or that brings an overcard to their pairs.\n- Knowing when to GIVE UP is just as important: if the turn favors the caller, you have no equity, and you can't represent anything credible, checking and folding saves money. Barreling with no equity and no story is a classic losing-player leak.",
      ],
      technical: {
        title: "Frequency, Sizing Tells, and the Delayed C-Bet",
        body: [
          "C-bet frequency and sizing are tied together by theory:\n- The wider you bet, the smaller you should size; the more polarized (nuts-or-air) your betting range, the larger you can size, up to and beyond pot.\n- A balanced c-bettor mixes value hands, draws (semi-bluffs), and some pure bluffs so a single small bet on a dry board can represent the whole range.\n- Beware sizing tells: if you only bet big with strong hands and small with weak ones, observant opponents will read you — keep your sizes tied to board texture, not hand strength.",
          "Two refinements separate good barrelers from the rest:\n- The DELAYED C-BET — checking the flop with a medium hand or as a trap, then betting the turn — protects your checking range and lets you realize equity cheaply when a c-bet would have been bloating the pot out of position.\n- GIVING UP is a skill: a triple barrel must tell a consistent story across all three streets. If the river card doesn't help your story and your hand has no showdown value, a third barrel is a bluff that needs a believable line and a foldable opponent — otherwise check and concede.",
        ],
        codeExample: {
          label: "C-bet decision by board texture",
          code: `  YOU RAISED PREFLOP. FLOP COMES...

  K 7 2  rainbow   (DRY, favors raiser)
    -> RANGE ADVANTAGE: c-bet often, SMALL (~33%)

  6 5 4  two-tone  (WET, favors caller)
    -> c-bet LESS, check more; when you bet, go BIGGER

  BARRELING (turn / river):
    good scare card + a story  -> fire again
    no equity + no story       -> GIVE UP (check/fold)`,
        },
      },
      incident: {
        title: "The Death of the Auto-C-Bet",
        when: "2010s solver era",
        where: "Online training sites and solver labs",
        impact: "Solvers proved that betting every flop is a leak, replacing 'always c-bet' folklore with texture- and range-based betting",
        body: [
          "For years, conventional wisdom said the preflop raiser should fire a continuation bet on almost every flop. It worked against passive opponents — but as fields got tougher, players who auto-c-bet started bleeding chips to floats, check-raises, and aggressive turn play. The 'auto-c-bet' became a recognizable, exploitable pattern.",
          "Solvers (from ~2015) rewrote the rules:\n- They showed that optimal c-bet frequency varies wildly by board — sometimes 90%+ at a small size, sometimes under 40% — and is driven by range advantage, not habit.\n- They formalized small-bet/wide-range and big-bet/polarized strategies, and proved that checking strong hands sometimes (to protect your checking range) is correct.\n- The takeaway for any player: don't bet because you raised — bet because the board, your range, and your story justify it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Take the Lead", sub: "raiser c-bets the flop", type: "system" },
          { label: "Read the Texture", sub: "range advantage drives it", type: "attacker" },
          { label: "Barrel or Give Up", sub: "scare cards + a story", type: "victim" },
          { label: "Tell One Story", sub: "consistent across streets", type: "result" },
        ],
      },
      timeline: [
        { year: 1999, event: "Online play makes the continuation bet a standard tool" },
        { year: 2009, event: "Tough online games punish predictable auto-c-betting" },
        { year: 2015, event: "Solvers tie c-bet frequency and size to board texture and range advantage", highlight: true },
        { year: 2024, event: "Texture-based, mixed-frequency c-betting is core training-site curriculum" },
      ],
      keyTakeaways: [
        "A c-bet continues preflop aggression; don't fire automatically — bet based on board texture and range advantage",
        "Dry high boards favor the raiser (c-bet often, small); wet low boards favor the caller (c-bet less, bet bigger)",
        "Double/triple barrels need a scare card that helps your range and a consistent story across streets",
        "Knowing when to give up — no equity, no credible story — saves the money that auto-barreling burns",
      ],
      references: [
        { title: "Continuation bet — glossary of poker terms", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
        { title: "Betting in poker", url: "https://en.wikipedia.org/wiki/Betting_in_poker" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-03-q1", type: "Definition", challenge: "What is it.", text: "What is a continuation bet (c-bet)?", options: ["A bet on the flop by the player who raised preflop", "A check by the preflop caller", "A forced bet like the blinds", "A bet only made on the river"], correctIndex: 0, explanation: "A c-bet continues the preflop raiser's aggression into the flop." },
        { id: "poker-2-03-q2", type: "Range Advantage", challenge: "Whose board?", text: "On a K-7-2 rainbow flop after you raised preflop, you should generally:", options: ["C-bet often, frequently at a small size — your range has the advantage", "Always check — the board favors the caller", "Only bet pot or larger", "Fold to any aggression"], correctIndex: 0, explanation: "High dry boards favor the preflop raiser's range, allowing frequent small c-bets." },
        { id: "poker-2-03-q3", type: "Wet Boards", challenge: "Sizing up.", text: "On a wet board like 6♠5♠4♦ that favors the caller, how should you adjust?", options: ["C-bet less often, and use a larger size when you do bet", "C-bet every time at a tiny size", "Never bet under any circumstance", "Always overbet"], correctIndex: 0, explanation: "Wet boards that favor the caller call for a lower c-bet frequency and a bigger, more polarized size." },
        { id: "poker-2-03-q4", type: "Barreling", challenge: "Fire again?", text: "What makes a good turn 'double barrel' card?", options: ["A scare card that improves your range and misses the caller's range", "Any card at all", "A card that pairs the lowest flop card", "Only a card of the same suit"], correctIndex: 0, explanation: "The best barreling cards help your perceived range and hurt the opponent's calling range." },
        { id: "poker-2-03-q5", type: "Give Up", challenge: "Know when to stop.", text: "When should you give up instead of firing another barrel?", options: ["When you have no equity and can't tell a credible story", "Whenever you have any draw", "Only on the river", "Never — always keep betting"], correctIndex: 0, explanation: "Barreling with no equity and no believable line is a major leak; checking and conceding saves money." },
      ],
    },
  },

  // ─── poker-2-04: Equity, Combos & Blockers ───────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The combo count", location: "Where poker becomes arithmetic", era: "Modern", emoji: "🧮" },
    id: "poker-2-04",
    order: 4,
    title: "Equity, Combos & Blockers",
    subtitle: "Counting combinations, equity vs a range, and the cards you hold",
    category: "sports",
    xp: 98,
    badge: { id: "poker2-badge-04", name: "Combo Counter", emoji: "🧮" },
    challengeType: "quiz",
    info: {
      tagline: "Advanced reads aren't guesses — they're counts. By counting how many 'combos' of each hand your opponent can have, factoring in the cards you and the board remove ('blockers'), and measuring your equity against their whole range, you replace hunches with arithmetic.",
      year: 2024,
      overview: [
        "Hand combinatorics is the art of counting how many specific two-card combinations make up a hand. The numbers are fixed and worth memorizing:\n- A NON-PAIRED hand like A-K has 16 combos (4 aces x 4 kings); A-K SUITED has 4 and A-K OFFSUIT has 12.\n- A POCKET PAIR like AA has 6 combos.\n- These counts let you ask 'how many ways can the opponent actually have the nuts?' instead of fearing a single scary hand.",
        "BLOCKERS (and 'unblockers') adjust those counts using cards you can see:\n- If you hold an ace, the opponent can have only 3 combos of AA instead of 6 — you 'block' half of them.\n- On a board with two spades, holding the A♠ removes the nut-flush draw from the opponent's range, making your bluffs more credible and your hero-calls easier.\n- 'Unblockers' is the flip side: you want your bluffs to NOT block the hands you're trying to make fold, so they're more likely to actually hold a folding hand.",
        "EQUITY is your share of the pot if the hand went to showdown right now, and the advanced version is equity vs a RANGE, not vs one hand:\n- Against a single hand you might be 60/40; against the opponent's whole likely range you compute a weighted average across all their combos.\n- FOLD EQUITY is the extra value you gain from the chance your opponent folds — it's why semi-bluffs with low showdown equity can still be hugely profitable.\n- Total value of a bet = (chance they fold x the pot you win now) + (chance they call x your equity when called). That combination is the real engine behind aggressive play.",
      ],
      technical: {
        title: "Counting Combos at the Table, and Equity Realization",
        body: [
          "A quick combo count turns vague fear into a decision:\n- Suppose you fear an opponent has a specific set on the board. There are only 3 combos of that set (since one of the pair's cards is on the board). Compare that to the dozens of combos of weaker hands and draws in their range — and the scary hand is often a small slice.\n- Blockers shift the count: holding a card that's part of the nut hand cuts those combos further.\n- You don't need exact percentages live — just the habit of asking 'how many combos beat me vs how many I beat?' before committing chips.",
          "Equity is necessary but not sufficient — 'equity realization' matters:\n- Having 50% equity is worth less out of position, because you won't always get to see all five cards or showdown cheaply; position lets you realize more of your raw equity.\n- This is why suited, connected hands (which flop draws and play well in position) outperform their raw equity, while offsuit big cards out of position underperform theirs.\n- Combine the three ideas: count the combos, adjust for blockers, estimate equity vs the range, and weigh how well you'll realize it given position — that's the full advanced calculation behind a tough call or bluff.",
        ],
        codeExample: {
          label: "Combo counts and a blocker",
          code: `  COMBO COUNTS (no cards removed):
    Pocket pair (AA) ........ 6 combos
    Suited hand (AKs) ....... 4 combos
    Offsuit hand (AKo) ..... 12 combos
    Any two non-paired ..... 16 combos

  BLOCKER EXAMPLE:
    You hold the A-spade on a two-spade board
    -> opponent's nut-flush DRAW combos drop sharply
    -> your bluff is more credible (they can't have it)

  FOLD EQUITY:
    bet value = P(fold) x pot_now
              + P(call) x your_equity_when_called`,
        },
      },
      incident: {
        title: "How Combinatorics Went From Math Class to the Felt",
        when: "2000s–2010s",
        where: "Training forums and solver outputs",
        impact: "Combo counting and blocker theory moved from academic probability into everyday decisions, especially for tough river bluffs and calls",
        body: [
          "Early strategy talked about reading opponents in vague terms. As serious players studied probability — and forums like the old training communities dissected hands combo by combo — counting combinations became a practical, in-the-moment skill rather than a textbook exercise. River decisions, in particular, became exercises in counting value combos versus bluff combos.",
          "Solvers made blockers a household concept among serious players:\n- Solver outputs revealed that which specific cards you hold (not just your hand's strength) change whether you should bluff or call — pure blocker effects.\n- 'I'm bluffing because I block the nuts and unblock his folds' became standard reasoning at high stakes.\n- The lesson for everyone: every read can be sharpened by counting combos and noticing which cards you and the board remove from the opponent's range.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Count the Combos", sub: "AA=6, AKs=4, AKo=12", type: "system" },
          { label: "Apply Blockers", sub: "cards you hold cut combos", type: "attacker" },
          { label: "Equity vs Range", sub: "weighted across all combos", type: "victim" },
          { label: "Add Fold Equity", sub: "value of making them fold", type: "result" },
        ],
      },
      timeline: [
        { year: 1944, event: "Game theory formalizes probability over distributions of hands" },
        { year: 2007, event: "Equity calculators (e.g., PokerStove) make range-vs-range math instant" },
        { year: 2015, event: "Solvers reveal pure blocker effects driving bluff/call decisions", highlight: true },
        { year: 2024, event: "Combo counting and blockers are standard advanced-player skills" },
      ],
      keyTakeaways: [
        "Memorize combo counts: a pocket pair = 6 combos, suited = 4, offsuit = 12, any non-paired hand = 16",
        "Blockers are cards you hold that reduce an opponent's combos of a hand (e.g., an ace blocks AA to 3 combos)",
        "Equity vs a range is a weighted average across all the opponent's combos — not your equity vs one hand",
        "Fold equity plus pot equity is why semi-bluffs profit; weigh how well you'll realize equity given position",
      ],
      references: [
        { title: "Poker probability", url: "https://en.wikipedia.org/wiki/Poker_probability" },
        { title: "Glossary of poker terms — blocker and equity", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-04-q1", type: "Combos", challenge: "Count the pair.", text: "How many combinations of a pocket pair (e.g., AA) are there before any cards are removed?", options: ["6", "4", "12", "16"], correctIndex: 0, explanation: "Choosing 2 of the 4 aces gives 6 combinations of a pocket pair." },
        { id: "poker-2-04-q2", type: "Combos", challenge: "Suited vs offsuit.", text: "How many combos does a specific offsuit hand like A-K offsuit have?", options: ["12", "4", "6", "16"], correctIndex: 0, explanation: "A non-paired hand has 16 combos total: 4 suited + 12 offsuit." },
        { id: "poker-2-04-q3", type: "Blockers", challenge: "Cutting combos.", text: "If you hold one ace, how many combos of pocket aces can your opponent have?", options: ["3", "6", "1", "4"], correctIndex: 0, explanation: "Removing one ace leaves 3 remaining, so only 3 combos of AA are possible for the opponent." },
        { id: "poker-2-04-q4", type: "Equity", challenge: "Vs a range.", text: "What does 'equity vs a range' mean?", options: ["Your weighted average share of the pot across all of the opponent's possible hands", "Your equity against only the nuts", "The size of the pot", "The blinds you must post"], correctIndex: 0, explanation: "It averages your equity across every combo in the opponent's range, weighted by how likely each is." },
        { id: "poker-2-04-q5", type: "Fold Equity", challenge: "The extra value.", text: "What is 'fold equity'?", options: ["The extra value gained from the chance your opponent folds to your bet", "The rake the house takes", "The equity of a folded hand", "The blinds returned to you"], correctIndex: 0, explanation: "Fold equity is the value from making opponents fold; combined with pot equity it makes semi-bluffs profitable." },
      ],
    },
  },

  // ─── poker-2-05: Playing Draws & Semi-Bluffs ─────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The aggressive draw", location: "Two ways to win the pot", era: "Modern", emoji: "🎣" },
    id: "poker-2-05",
    order: 5,
    title: "Playing Draws & Semi-Bluffs Aggressively",
    subtitle: "Turning draws into bets, fold equity plus pot equity, sizing",
    category: "sports",
    xp: 100,
    badge: { id: "poker2-badge-05", name: "Semi-Bluffer", emoji: "🎣" },
    challengeType: "quiz",
    info: {
      tagline: "Passive players call with their draws and hope. Winning players bet them. A draw played as a semi-bluff wins two ways — opponents fold now, or you complete the best hand later — and that combination of fold equity and pot equity is one of poker's most profitable engines.",
      year: 2024,
      overview: [
        "A semi-bluff is a bet or raise made with a drawing hand that isn't the best yet but can improve. It's the opposite of passively calling and praying. The power comes from stacking two sources of value:\n- FOLD EQUITY — opponents may fold right now, winning you the pot with no showdown.\n- POT EQUITY — even when called, your draw still has real chances to complete and win at showdown.\n- Together, these make betting a strong draw often MORE profitable than calling with it.",
        "Not all draws are equal — bet your strongest ones hardest:\n- A combo draw (e.g., a flush draw + an open-ended straight draw) can have 15 outs and be a coin-flip or better against a made hand — these are premium semi-bluff and even all-in hands.\n- A bare gutshot (4 outs) is a weak draw; it can still be a thin semi-bluff with extra equity like overcards or backdoor potential, but it can't take heavy heat.\n- The more outs and the more fold equity, the more aggressively you can play the draw.",
        "Bet sizing with draws is a balance of charging and protecting:\n- Betting and raising your draws DENIES opponents the right price to draw against you and builds the pot for when you hit.\n- Semi-bluff raises are especially strong: you can win immediately, and you've disguised your hand for when the draw comes in.\n- Crucially, semi-bluffing keeps you BALANCED — because you bet both made hands and draws, opponents can't simply fold to your aggression knowing you only bet value, which in turn gets your value hands paid.",
      ],
      technical: {
        title: "The Math of Betting vs Calling a Draw, and the Free Card",
        body: [
          "Why betting a draw often beats calling it:\n- When you CALL, you only win if your draw completes (pot equity alone).\n- When you BET, you add fold equity: total value = (chance they fold x pot won now) + (chance they call x your equity when you hit). For a strong draw, that sum frequently exceeds the value of a passive call.\n- A flush draw with two cards to come (~36% by the river) plus meaningful fold equity is a textbook profitable semi-bluff, especially in position.",
          "Two refinements every aggressive drawer should know:\n- THE FREE-CARD PLAY — raising a draw in position can make the opponent check to you on the next street, letting you check behind and see the river 'for free' if you miss, or bet again if you hit. Position multiplies a draw's value.\n- DON'T OVERDO IT MULTIWAY — fold equity collapses against many opponents (someone usually has a hand), so semi-bluff bluff-raises lose value in big multiway pots; there, lean on the pot equity and play draws more straightforwardly. Also respect reverse implied odds: drawing to a non-nut hand (a low flush) can complete and still lose a stack.",
        ],
        codeExample: {
          label: "Why betting the draw wins twice",
          code: `  YOUR HAND: J♠T♠  on  9♠ 8♦ 2♠
    -> flush draw (9) + open-ender (8) = ~15 outs

  CALL:   win only if a spade/straight card hits
          (pot equity ONLY)

  SEMI-BLUFF BET/RAISE:
    win NOW if they fold          (fold equity)
    + win LATER if you complete   (pot equity)
    -> two ways to win = higher total value

  IN POSITION bonus: raise -> 'free card' on the turn`,
        },
      },
      incident: {
        title: "Sklansky's Semi-Bluff and the Rise of Aggression",
        when: "1976 → online era",
        where: "Strategy literature to high-stakes online",
        impact: "The semi-bluff turned 'aggression' from recklessness into mathematically justified poker — a cornerstone of every winning style",
        body: [
          "David Sklansky's strategy writing in the 1970s gave a name and a logic to the semi-bluff: betting a draw that isn't best but could become best. It reframed aggression as a calculated tool — you bet because you have two ways to win, not because you're gambling. This idea underpinned the loose-aggressive (LAG) styles that later dominated.",
          "The online era turned semi-bluffing into an art form:\n- High-stakes online players bet and raised draws relentlessly, combining fold equity and pot equity to apply constant pressure.\n- Hand databases confirmed that aggressively played draws outperformed passively played ones over huge samples.\n- The enduring lesson: when you hold a strong draw, the question isn't usually 'should I call?' but 'should I bet or raise?' — semi-bluffing is the higher-EV path far more often than beginners realize.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hold a Strong Draw", sub: "outs + potential", type: "system" },
          { label: "Bet, Don't Just Call", sub: "add fold equity", type: "attacker" },
          { label: "Two Ways to Win", sub: "they fold, or you hit", type: "victim" },
          { label: "Stay Balanced", sub: "bet made hands + draws", type: "result" },
        ],
      },
      timeline: [
        { year: 1976, event: "Sklansky formalizes and names the semi-bluff" },
        { year: 1979, event: "'Super/System' champions aggressive, pressure-based poker" },
        { year: 2009, event: "Online databases prove aggressively played draws outperform passive ones", highlight: true },
        { year: 2018, event: "Solvers confirm high-frequency semi-bluffing with strong draws" },
      ],
      keyTakeaways: [
        "A semi-bluff bets a draw that isn't best yet — winning via fold equity now or pot equity when you complete",
        "Bet your strongest draws hardest: combo draws (15 outs) are premium semi-bluff and all-in hands",
        "Betting/raising draws denies opponents a price, builds the pot, and keeps your betting range balanced",
        "Fold equity collapses multiway and against non-folders; respect reverse implied odds on non-nut draws",
      ],
      references: [
        { title: "Semi-bluff — glossary of poker terms", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
        { title: "Out (poker)", url: "https://en.wikipedia.org/wiki/Out_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-05-q1", type: "Definition", challenge: "What is it.", text: "What is a semi-bluff?", options: ["A bet/raise with a draw that isn't best yet but can improve", "A bet with the nuts", "A bet with no chance to improve", "A forced bet"], correctIndex: 0, explanation: "A semi-bluff bets a drawing hand — winning if opponents fold now or if the draw completes later." },
        { id: "poker-2-05-q2", type: "Two Ways", challenge: "The edge.", text: "Why is betting a strong draw often better than calling with it?", options: ["You win two ways — fold equity now plus pot equity when you hit", "Betting is required by the rules", "Calling never wins", "You always have the best hand"], correctIndex: 0, explanation: "Calling only wins if you complete; betting adds the chance opponents fold immediately." },
        { id: "poker-2-05-q3", type: "Strong Draws", challenge: "The monster draw.", text: "Roughly how many outs does a combined flush draw plus open-ended straight draw have?", options: ["About 15", "About 4", "About 8", "About 2"], correctIndex: 0, explanation: "Nine flush outs plus the straight outs (minus overlaps) gives around 15 — a premium semi-bluff." },
        { id: "poker-2-05-q4", type: "Multiway", challenge: "When it fails.", text: "Why are bluff-raise semi-bluffs weaker in big multiway pots?", options: ["Fold equity collapses because someone usually has a hand worth calling", "Draws have more outs multiway", "The rules forbid it", "You can't be balanced"], correctIndex: 0, explanation: "More opponents means more chance one calls, so the 'they fold' half of the value shrinks." },
        { id: "poker-2-05-q5", type: "Position", challenge: "Free card.", text: "What is the 'free-card play' with a draw in position?", options: ["Raising so the opponent checks to you, letting you check behind for a free river if you miss", "Folding your draw", "Always betting the river", "Posting an extra blind"], correctIndex: 0, explanation: "Raising in position can induce a check next street, giving you a free card or the option to barrel if you hit." },
      ],
    },
  },

  // ─── poker-2-06: Multiway Pots & Pot Control ─────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The crowded pot", location: "Three or more players to the flop", era: "Modern", emoji: "👥" },
    id: "poker-2-06",
    order: 6,
    title: "Multiway Pots & Pot Control",
    subtitle: "Tighter ranges, fewer bluffs, and keeping the pot small",
    category: "sports",
    xp: 102,
    badge: { id: "poker2-badge-06", name: "Pot Controller", emoji: "👥" },
    challengeType: "quiz",
    info: {
      tagline: "Everything you know about heads-up pots changes when three or more players see the flop. Hands need to be stronger to win, bluffs stop working, and 'pot control' — keeping the pot small with a medium hand — becomes a core skill. Multiway is where over-aggression goes to die.",
      year: 2024,
      overview: [
        "A multiway pot has three or more players seeing the flop, and it changes the math fundamentally:\n- The more players, the more likely SOMEONE connected with the board, so the hand strength needed to win goes up.\n- Marginal made hands (like top pair with a weak kicker) drop in value, while hands that make the nuts — sets, flushes, straights — go up.\n- This is why you should tighten your continuing ranges multiway: play hands that can flop big, and fold the speculative junk you might play heads-up.",
        "Bluffing collapses as players are added:\n- A bluff has to get EVERY opponent to fold; against three players that's three chances for someone to have a hand and call.\n- So you bluff far LESS in multiway pots and value bet more selectively, knowing you'll often get called by something.\n- C-betting frequency drops sharply multiway — fire mainly when you have a strong hand or a strong draw, and check a lot of the air you'd c-bet heads-up.",
        "POT CONTROL is the discipline of keeping the pot small with medium-strength hands:\n- With a hand that can win at showdown but doesn't want to play a huge pot (like middle pair or a weak top pair), CHECKING instead of betting controls the size and avoids getting blown off the hand or stacked.\n- It also lets you get to showdown cheaply and 'realize your equity' rather than bloating the pot out of position with a hand that's good but not great.\n- The flip side: with the nuts or a big draw, you do want to build the pot — pot control is specifically for the awkward middle of your range.",
      ],
      technical: {
        title: "Equity Buckets, Position Multiway, and the Check-Behind",
        body: [
          "Multiway, your equity is split more ways, so think in 'buckets':\n- NUTTED hands and strong draws — bet and build the pot; you want money in when you're ahead of multiple ranges.\n- MEDIUM made hands — pot control: check or call, aim to get to a cheap showdown, fold to heavy multiway pressure.\n- AIR — mostly give up; bluffing through multiple players rarely works.\n- The middle bucket is where most multiway mistakes happen, because players bet medium hands as if heads-up and get punished by the extra opponents.",
          "Position and the check-behind are your pot-control tools:\n- IN POSITION with a medium hand, checking behind on a street keeps the pot small, denies a check-raise, and still lets you call a reasonable bet or improve on a later street.\n- OUT OF POSITION, checking and calling (rather than betting) with a medium hand avoids building a pot you don't want — but be ready to fold to sustained aggression from multiple players, which signals real strength.\n- The overarching rule: in multiway pots, value the nuts, devalue marginal hands, bluff rarely, and use checks to control the size of pots you're not thrilled to play.",
        ],
        codeExample: {
          label: "Heads-up vs multiway adjustments",
          code: `  PLAYERS TO THE FLOP:   HU (2)      vs   MULTIWAY (3+)
  -------------------    --------         -------------
  Hand strength needed    lower             HIGHER
  Bluff frequency         higher            MUCH LOWER
  C-bet frequency         higher            LOWER
  Marginal made hands     playable          POT-CONTROL/fold
  Nutty hands & draws     bet               BET (build pot)

  POT CONTROL: medium hand -> check to keep pot small,
  realize equity, avoid getting stacked or blown off`,
        },
      },
      incident: {
        title: "The Limp-Fest: Why Live Multiway Pots Punish Aggression",
        when: "Live low-stakes cash games",
        where: "Casino card rooms everywhere",
        impact: "Players who apply heads-up aggression to multiway 'family pots' bleed chips; respecting multiway dynamics is a key live-game edge",
        body: [
          "Live low-stakes games are famous for 'family pots' — five or six players limping or calling to see a flop. Players who learned aggressive, heads-up-style poker online often try to c-bet and bluff their way through these crowds and get snapped off again and again, because in a six-way pot someone always has a piece of the board.",
          "Adjusting to multiway reality is a quiet but huge edge:\n- Tighten up preflop, then play to make the nuts — sets and suited hands that can stack the field.\n- Cut bluffs dramatically and value bet your strong hands, since you'll get paid by all the loose callers.\n- Use pot control with medium hands instead of betting them like you're heads-up. The discipline to slow down in multiway pots is one of the clearest dividing lines between winning and losing live players.",
        ],
      },
      diagram: {
        nodes: [
          { label: "3+ to the Flop", sub: "someone usually connects", type: "system" },
          { label: "Tighten & Value", sub: "make the nuts, bluff less", type: "attacker" },
          { label: "Devalue Marginals", sub: "top pair drops in value", type: "victim" },
          { label: "Pot Control Medium", sub: "check to keep pots small", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' warns that hand values shift with the number of players" },
        { year: 2006, event: "Online play teaches heads-up aggression that backfires multiway" },
        { year: 2015, event: "Solvers quantify lower bluff/c-bet frequencies in multiway pots", highlight: true },
        { year: 2024, event: "Multiway discipline and pot control are core live-game edges" },
      ],
      keyTakeaways: [
        "Multiway (3+ to the flop) raises the hand strength needed to win; favor hands that make the nuts",
        "Bluff far less multiway — a bluff must beat every opponent, and someone usually has a hand",
        "C-bet less and value bet more selectively; the loose callers will pay your strong hands",
        "Pot control: check medium hands to keep the pot small, realize equity, and avoid getting stacked",
      ],
      references: [
        { title: "Glossary of poker terms — pot control and multiway", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
        { title: "Texas hold 'em strategy", url: "https://en.wikipedia.org/wiki/Texas_hold_%27em" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-06-q1", type: "Hand Values", challenge: "What changes.", text: "How does hand strength needed to win change in a multiway pot?", options: ["It increases — with more players, someone is more likely to have connected", "It decreases", "It stays the same", "It only matters on the river"], correctIndex: 0, explanation: "More opponents means a higher chance someone has a strong hand, so you need more to win." },
        { id: "poker-2-06-q2", type: "Bluffing", challenge: "Why it fails.", text: "Why should you bluff less in multiway pots?", options: ["A bluff must get every opponent to fold, and more players means more chance one calls", "Bluffs are illegal multiway", "Multiway pots are smaller", "You always have the nuts"], correctIndex: 0, explanation: "Each extra player is another chance someone holds a calling hand, so bluffs succeed far less often." },
        { id: "poker-2-06-q3", type: "Pot Control", challenge: "Keep it small.", text: "What is 'pot control'?", options: ["Keeping the pot small with a medium-strength hand, often by checking", "Always betting the maximum", "Folding every hand", "Going all-in preflop"], correctIndex: 0, explanation: "Pot control means checking/calling with medium hands to keep the pot manageable and reach a cheap showdown." },
        { id: "poker-2-06-q4", type: "Which Hands", challenge: "Value up.", text: "Which hand types gain value in multiway pots?", options: ["Hands that make the nuts — sets, flushes, straights", "Weak top pairs", "Ace-high bluffs", "Bottom pair"], correctIndex: 0, explanation: "Nut-making hands rise in value multiway because you need a strong hand to beat several ranges." },
        { id: "poker-2-06-q5", type: "Position", challenge: "Check behind.", text: "How does checking behind in position help with a medium hand?", options: ["It keeps the pot small, denies a check-raise, and lets you reach showdown cheaply", "It forces opponents all-in", "It builds a huge pot", "It guarantees a win"], correctIndex: 0, explanation: "Checking behind controls the pot size and lets you realize your equity without bloating the pot." },
      ],
    },
  },

  // ─── poker-2-07: Bet Sizing & Polarization ───────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The sizing dial", location: "Every bet you make", era: "Modern", emoji: "🎚️" },
    id: "poker-2-07",
    order: 7,
    title: "Bet Sizing & Polarization",
    subtitle: "Small bets, overbets, polarized vs merged, and river leverage",
    category: "sports",
    xp: 105,
    badge: { id: "poker2-badge-07", name: "Sizing Wizard", emoji: "🎚️" },
    challengeType: "quiz",
    info: {
      tagline: "Which hands you play matters — but how much you bet decides how much you win. Bet sizing is a dial: small bets pressure wide ranges cheaply, overbets apply maximum leverage with polarized ranges, and matching your sizing to your range shape is what makes a betting strategy unexploitable.",
      year: 2024,
      overview: [
        "Bet size and range shape are tied together. The two fundamental shapes:\n- POLARIZED — your betting range is the nuts (or near it) plus bluffs, with little in between. Polarized ranges can and should bet LARGE, because the bet is a threat that puts the opponent to a tough decision for a lot of chips.\n- MERGED (or 'linear/depolarized') — your betting range is value-heavy with many medium-strong hands and few pure bluffs. Merged ranges bet SMALL, extracting thin value from many worse hands that can call cheaply.",
        "Sizes map to situations:\n- SMALL BETS (~25–40% pot) — great on dry boards and with merged ranges; they let you bet wide, deny equity, and get called by more hands.\n- MEDIUM BETS (~50–75% pot) — the standard value/protection size on most boards.\n- OVERBETS (>100% pot) — a polarized weapon, usually on later streets, when your range is uncapped (can hold the nuts) and the opponent's is capped (can't). Overbets maximize fold equity and value from the bluff-catchers they target.",
        "The river is where sizing becomes pure leverage:\n- By the river there are no more cards, so a bet is a clean polarized threat — value or bluff — and bigger sizes (including overbets) put maximum pressure on the opponent's bluff-catchers.\n- Bigger bets require more bluffs to stay balanced (so the opponent's calls break even), and offer the opponent worse pot odds to call.\n- The master skill is matching size to range: bet big when you're polarized and want leverage, bet small when you're merged and want thin value — never the reverse, or thinking opponents will exploit the mismatch.",
      ],
      technical: {
        title: "Capped vs Uncapped Ranges, and Bluff-to-Value Ratios",
        body: [
          "Overbets are unlocked by range asymmetry:\n- A range is 'CAPPED' if it can't contain the strongest hands (e.g., a player who just called down rarely has the nuts); it's 'UNCAPPED' if it still can.\n- When YOUR range is uncapped and the opponent's is capped, an overbet is devastating: you credibly represent hands they can't have, so even their good bluff-catchers are in a miserable spot.\n- This is why overbets show up most on rivers and on cards that favor the bettor's range — the leverage comes from the threat of hands the opponent simply cannot hold.",
          "Bet size dictates the bluff-to-value ratio for balance:\n- The bigger the bet relative to the pot, the MORE bluffs you can include while remaining unexploitable, because a bigger bet gives the opponent worse pot odds to call. A pot-sized river bet is balanced at roughly half value, half bluffs; a small bet should be much more value-heavy.\n- Practically: size up with polarized ranges to maximize fold equity and value; size down with merged ranges to get thin value from a wide calling range.\n- And keep your sizing tied to range shape, not hand strength alone — if you only overbet the nuts, a sharp opponent will fold everything but their own nuts, and your overbets stop getting paid.",
        ],
        codeExample: {
          label: "Range shape drives bet size",
          code: `  POLARIZED range  (nuts + bluffs, little middle)
    -> bet BIG / OVERBET (>100% pot)
    -> maximize fold equity + value; pure leverage

  MERGED range  (value-heavy, few bluffs)
    -> bet SMALL (~25-40% pot)
    -> thin value, get called by many worse hands

  OVERBET UNLOCK:
    your range UNCAPPED (can have nuts)
    opp range  CAPPED   (can't have nuts)
    -> overbet their bluff-catchers for max pressure`,
        },
      },
      incident: {
        title: "How Overbets Went From Heresy to Standard",
        when: "2015 → today",
        where: "The solver era",
        impact: "Solvers revealed that big, polarized bets and overbets are often optimal, overturning the old 'never bet more than the pot' orthodoxy",
        body: [
          "For most of poker history, betting more than the pot was seen as reckless or amateurish — 'why risk so much to win so little?' Sizing was mostly fixed at half-pot to pot. Then solvers (PioSOLVER and others, from around 2015) started outputting strategies full of large bets and frequent overbets on the right boards and rivers.",
          "This changed how serious players think about sizing:\n- Solvers proved that when your range is uncapped and polarized, overbetting extracts more value and fold equity than a 'safe' size — the leverage is mathematically justified.\n- Players learned to bet small with wide, merged ranges and huge with narrow, polarized ones, matching size to range rather than to feel.\n- The legacy: bet sizing is now treated as a strategic dial, not a habit — and using multiple, deliberate sizes (small and very large) is a hallmark of a modern, theory-informed player.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick a Range Shape", sub: "polarized vs merged", type: "system" },
          { label: "Match the Size", sub: "big when polarized, small when merged", type: "attacker" },
          { label: "Capped Opponent", sub: "overbet what they can't have", type: "victim" },
          { label: "River Leverage", sub: "max pressure on bluff-catchers", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' treats bet sizing as a weapon, not a fixed amount" },
        { year: 2010, event: "Online pros experiment with multiple deliberate bet sizes" },
        { year: 2015, event: "Solvers prove large polarized bets and overbets are often optimal", highlight: true },
        { year: 2024, event: "Size-to-range matching is standard modern strategy" },
      ],
      keyTakeaways: [
        "Polarized ranges (nuts + bluffs) bet big/overbet; merged ranges (value-heavy) bet small for thin value",
        "Small bets (~25-40%) pressure wide ranges cheaply; overbets (>100%) maximize leverage on later streets",
        "Overbets work when your range is uncapped and the opponent's is capped — you represent hands they can't have",
        "Bigger bets allow more bluffs while staying balanced; always match size to range shape, not just hand strength",
      ],
      references: [
        { title: "Betting in poker — bet sizing", url: "https://en.wikipedia.org/wiki/Betting_in_poker" },
        { title: "Glossary of poker terms — polarized range", url: "https://en.wikipedia.org/wiki/Glossary_of_poker_terms" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-07-q1", type: "Range Shape", challenge: "Nuts and air.", text: "A 'polarized' betting range is best played with which bet size?", options: ["Large bets or overbets", "Tiny bets only", "No bet at all", "Always exactly half pot"], correctIndex: 0, explanation: "Polarized ranges (nuts + bluffs) bet big to maximize fold equity and value — pure leverage." },
        { id: "poker-2-07-q2", type: "Merged", challenge: "Thin value.", text: "Why do 'merged' (value-heavy) ranges use smaller bets?", options: ["To get called by many worse hands and extract thin value", "Because they always have the nuts", "Because small bets are required", "To fold out everything"], correctIndex: 0, explanation: "A merged range wants calls from many worse hands, so a small size keeps the opponent's range in." },
        { id: "poker-2-07-q3", type: "Overbets", challenge: "When to fire huge.", text: "An overbet (>100% pot) works best when:", options: ["Your range is uncapped and the opponent's range is capped", "You have the worst possible hand only", "It is the first betting round", "You are out of chips"], correctIndex: 0, explanation: "Overbets leverage range asymmetry: you can represent nut hands the capped opponent can't hold." },
        { id: "poker-2-07-q4", type: "Balance", challenge: "Bigger = more bluffs.", text: "How does a larger bet size affect how many bluffs you can include?", options: ["You can include more bluffs while staying balanced, since the opponent gets worse odds to call", "You must include fewer bluffs", "Bluffs are never allowed when betting big", "Bet size has no effect on bluffs"], correctIndex: 0, explanation: "Bigger bets offer worse pot odds, so the balanced bluff-to-value ratio shifts toward more bluffs." },
        { id: "poker-2-07-q5", type: "Matching", challenge: "Size to range.", text: "What is the key skill of advanced bet sizing?", options: ["Matching your bet size to your range shape, not just your single hand", "Always betting the same amount", "Betting big only with the nuts", "Never betting the river"], correctIndex: 0, explanation: "Tie size to range shape — big when polarized, small when merged — so opponents can't exploit a mismatch." },
      ],
    },
  },

  // ─── poker-2-08: Player Profiling & Live Reads ───────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The player read", location: "Across the felt from your opponent", era: "Modern", emoji: "🕵️" },
    id: "poker-2-08",
    order: 8,
    title: "Player Profiling & Live Reads",
    subtitle: "TAG, LAG, nit, calling station, whale — and how to exploit each",
    category: "sports",
    xp: 108,
    badge: { id: "poker2-badge-08", name: "Profiler", emoji: "🕵️" },
    challengeType: "quiz",
    info: {
      tagline: "GTO tells you how to never be exploited; exploitative play tells you how to win the most against real, flawed humans. The fastest way to print money is to profile each opponent's type, then deviate to attack their specific leaks — and keep updating the read as they adjust.",
      year: 2024,
      overview: [
        "Players cluster into recognizable archetypes along two axes — how MANY hands they play (tight vs loose) and how AGGRESSIVELY they play them (passive vs aggressive):\n- TAG (tight-aggressive) — plays few hands but bets/raises them hard; the solid winning baseline. Tough to exploit; respect their aggression.\n- LAG (loose-aggressive) — plays many hands aggressively; dangerous and high-variance. Tighten up, let them bluff into your strong hands, and trap.\n- NIT (very tight-passive) — plays only premiums; when a nit bets big, believe them and fold. Steal their blinds relentlessly.",
        "The profitable opponents — the ones you target — are the loose-passive players:\n- CALLING STATION — calls far too much, rarely folds. The exploit: value bet relentlessly and thinly, and almost NEVER bluff them (they won't fold).\n- WHALE / FISH — loose-passive with money to lose; play straightforward, bet your good hands big, and avoid fancy bluffs.\n- Against these types, your edge comes from patience and value, not creativity — they pay off your strong hands, so just keep making them.",
        "Reads come from patterns and, in live play, from physical cues:\n- BETTING PATTERNS are the reliable tells: does this player only raise with the nuts? always continuation-bet? never fold to a 3-bet? These behaviors are gold.\n- PHYSICAL TELLS exist live — trembling hands often mean a strong hand (adrenaline), sudden stillness can mean a bluff, and timing (snap-calls vs long tanks) leaks information — but they're secondary to betting patterns and overrated by Hollywood.\n- Crucially, profiling is DYNAMIC: good players change gears and notice you adjusting, so update your read continuously rather than locking someone into a box for the whole session.",
      ],
      technical: {
        title: "GTO vs Exploitative, and the Adjustment War",
        body: [
          "Profiling is the engine of EXPLOITATIVE play, the counterpart to GTO:\n- A GTO (game-theory-optimal) strategy is unexploitable but leaves money on the table against players who make mistakes — it doesn't punish their specific leaks.\n- EXPLOITATIVE play deliberately deviates from balanced to attack a read: over-fold against a nit, over-bluff a weak-tight player, never bluff a station, value bet thinner against a loose caller.\n- The trade-off: every exploit opens you to a counter-exploit. Against unknown or strong opponents, anchor near GTO; against clear, predictable types, deviate hard — that's where the real money is.",
          "The adjustment war is continuous:\n- 'Leveling' is thinking about what the opponent thinks you have. Against a thinking player, your bluffs and value need to account for their reads of you — and yours of them.\n- Track a few key stats live, mentally: roughly how often they enter pots, how often they continuation-bet, and whether they ever fold to aggression. Online, a HUD (heads-up display) shows these explicitly (the HUD/database era took off around 2006).\n- Stay flexible: the best players profile fast, exploit hard, and re-profile the instant an opponent changes gears — never letting a stale read cost them.",
        ],
        codeExample: {
          label: "Archetypes and how to attack them",
          code: `             TIGHT                 LOOSE
          +--------------------+--------------------+
  AGGR.   | TAG: solid, tough  | LAG: wild, tricky  |
          | -> respect, trap   | -> tighten, trap   |
          +--------------------+--------------------+
  PASSIVE | NIT: only premiums | STATION/WHALE: calls|
          | -> steal blinds,   | -> VALUE BET thin, |
          | believe big bets   | NEVER bluff them   |
          +--------------------+--------------------+

  GTO = unexploitable baseline
  EXPLOIT = deviate to attack each type's leak`,
        },
      },
      incident: {
        title: "The HUD Era: Profiling by the Numbers",
        when: "~2006 onward",
        where: "Online poker tables",
        impact: "Tracking software and heads-up displays turned player profiling from gut feel into hard data, professionalizing exploitative play",
        body: [
          "When online poker exploded after the 2003 Moneymaker boom, players soon realized every hand could be recorded. Tracking software and the heads-up display (HUD) — overlaying stats like VPIP (how often a player voluntarily puts money in the pot) and PFR (preflop raise %) right on the table — let grinders profile opponents by hard numbers across thousands of hands.",
          "This turned profiling into a science and a war of adjustments:\n- A player labeled a 'station' by their stats got value-bet relentlessly; a 'nit' got their blinds stolen and their big bets respected.\n- But opponents adjusted too, and the best players learned to deviate, disguise their own stats, and counter-exploit.\n- The lesson holds even live and without software: identify the type, attack the leak, and never stop updating — exploitative profiling, applied dynamically, is where most real-world poker profit comes from.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Profile the Player", sub: "tight/loose x passive/aggressive", type: "system" },
          { label: "Find the Leak", sub: "calls too much? folds too much?", type: "attacker" },
          { label: "Deviate to Exploit", sub: "value vs stations, steal vs nits", type: "victim" },
          { label: "Re-Profile Constantly", sub: "they adjust — so do you", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' profiles opponent types and how to adjust" },
        { year: 2003, event: "The Moneymaker boom floods games with exploitable amateurs" },
        { year: 2006, event: "HUDs and tracking software professionalize data-driven profiling", highlight: true },
        { year: 2017, event: "GTO solvers reframe exploits as deliberate deviations from balance" },
      ],
      keyTakeaways: [
        "Profile opponents on two axes: tight/loose (how many hands) and passive/aggressive (how they play them)",
        "Never bluff a calling station — value bet them thinly; steal from nits and respect their big bets",
        "Betting-pattern tells are far more reliable than physical tells; trembling hands often signal strength",
        "GTO is the unexploitable baseline; exploitative play deviates to attack reads — and must update as opponents adjust",
      ],
      references: [
        { title: "Poker strategy", url: "https://en.wikipedia.org/wiki/Poker_strategy" },
        { title: "Tell (poker)", url: "https://en.wikipedia.org/wiki/Tell_(poker)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-08-q1", type: "Archetypes", challenge: "The solid one.", text: "What does 'TAG' stand for, and what is it?", options: ["Tight-aggressive — plays few hands but bets and raises them hard; the solid baseline", "Totally-aggressive gambler", "Tight and gives up always", "The aggressive gambler who plays every hand"], correctIndex: 0, explanation: "TAG (tight-aggressive) is the disciplined winning style: a narrow range played aggressively." },
        { id: "poker-2-08-q2", type: "The Station", challenge: "Don't bluff.", text: "How should you exploit a 'calling station'?", options: ["Value bet relentlessly and almost never bluff — they won't fold", "Bluff them constantly", "Only check to them", "Fold whenever they bet"], correctIndex: 0, explanation: "Stations call too much, so bluffs fail and thin value bets get paid off — bet your good hands, don't bluff." },
        { id: "poker-2-08-q3", type: "The Nit", challenge: "Believe them.", text: "What is the best adjustment against a 'nit' (very tight-passive player)?", options: ["Steal their blinds often, and fold when they make a big bet", "Call all their big bets", "Bluff every river", "Never raise their blinds"], correctIndex: 0, explanation: "Nits only bet big with premiums, so respect their aggression but attack their tight blinds." },
        { id: "poker-2-08-q4", type: "Tells", challenge: "Most reliable.", text: "Which kind of tell is most reliable?", options: ["Betting patterns (e.g., only raising with the nuts)", "Whether they wear sunglasses", "Their chair posture", "How they stack their chips"], correctIndex: 0, explanation: "Betting-pattern tells are far more trustworthy than physical/body-language tells." },
        { id: "poker-2-08-q5", type: "GTO vs Exploit", challenge: "The trade-off.", text: "How does exploitative play differ from GTO play?", options: ["Exploitative play deviates from balance to attack a specific opponent's leaks", "Exploitative play is always unexploitable", "GTO play targets each opponent's mistakes", "They are identical"], correctIndex: 0, explanation: "GTO is the unexploitable baseline; exploitative play intentionally deviates to punish a player's tendencies." },
      ],
    },
  },

  // ─── poker-2-09: Final Table & ICM Deep Dive ─────────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The bubble", location: "The final table, money on the line", era: "Modern", emoji: "💰" },
    id: "poker-2-09",
    order: 9,
    title: "Final Table & ICM Deep Dive",
    subtitle: "The bubble, pay jumps, ICM pressure, and push/fold ranges",
    category: "sports",
    xp: 112,
    badge: { id: "poker2-badge-09", name: "ICM Master", emoji: "💰" },
    challengeType: "quiz",
    info: {
      tagline: "In a tournament, chips are not money. The Independent Chip Model (ICM) explains why a chip you lose is worth more than a chip you win near the money — and why correct final-table play looks nothing like cash-game poker. Master ICM and you out-earn players who only know how to accumulate chips.",
      year: 2024,
      overview: [
        "In cash games a chip equals a dollar, but in tournaments the prize structure breaks that link. The INDEPENDENT CHIP MODEL (ICM) converts your stack of chips into its real-money equity given the remaining payouts. Its central insight: chips have DIMINISHING value — doubling your stack does NOT double your equity, because you can only win first place once but can bust at any time.",
        "This warps strategy most at two moments:\n- THE BUBBLE — the spot just before the money, where busting earns nothing and surviving locks up a min-cash. Here, every player's risk of ruin spikes, so calling off becomes much tighter and the chip leaders can apply enormous pressure.\n- PAY JUMPS at the final table — each elimination moves everyone up the payout ladder, so survival itself has value. The closer the pay jumps, the more cautious medium stacks must be.\n- The result: you fold hands you'd happily get all-in with in a cash game, because the downside (busting and losing real-money equity) outweighs the chip upside.",
        "ICM pressure flows from stack sizes:\n- The BIG STACK is the bully: they risk the least real money on any given clash (they won't bust), so they can open wide and jam on the medium stacks who can't call without risking their tournament life.\n- The SHORT STACK switches to PUSH/FOLD — with few big blinds left, post-flop play disappears; the correct game is shoving all-in or folding preflop, governed by Nash equilibrium push/fold charts.\n- The MEDIUM STACKS are the most pressured: they have enough to lose a lot of equity by busting but not enough to bully, so they must tighten dramatically against the big stack's aggression.",
      ],
      technical: {
        title: "Why a Lost Chip Costs More, and Nash Push/Fold",
        body: [
          "ICM makes risk asymmetric:\n- Because equity is concave in chips, the chips you LOSE are worth more (in real-money equity) than the chips you WIN. Losing half your stack hurts your equity more than doubling it helps.\n- This is why ICM-correct play near the money is tighter than 'chip EV' play: a call that's break-even in chips can be clearly losing in dollars.\n- Practically, you fold some hands that are mathematically +chipEV because they're -$EV under the payout structure — the bubble is the classic example, where survival is worth real money.",
          "Short-stack play collapses into push/fold math:\n- With roughly 10–15 big blinds or fewer, raising and folding to a re-raise wastes chips, so the optimal strategy is to move all-in or fold preflop.\n- NASH push/fold charts give game-theory-optimal shoving and calling ranges by stack depth and position — memorizing them is standard for tournament players.\n- But ICM tightens the calling ranges versus raw Nash: near a pay jump, you call a shove with a NARROWER range than chip-EV Nash suggests, because busting costs you real-money equity. The big stack, conversely, can shove WIDER. Reading the room — payouts, stacks, who's under pressure — is the final-table master skill.",
        ],
        codeExample: {
          label: "ICM: chips are not money",
          code: `  CHIP VALUE IS CONCAVE (diminishing):
    double your stack  ->  LESS than double your equity
    -> a chip LOST is worth MORE than a chip WON

  BUBBLE / PAY-JUMP EFFECTS:
    survival has $ value  -> call OFF tighter
    BIG STACK   -> bully: shove wide, risk least
    MED STACK   -> most pressured: fold a lot
    SHORT STACK -> PUSH/FOLD (Nash charts by bb/position)

  ICM vs Nash: near a pay jump, CALL tighter than chipEV`,
        },
      },
      incident: {
        title: "ICM and the Science of the Final Table",
        when: "1980s model → modern tournaments",
        where: "Tournament poker worldwide",
        impact: "The Independent Chip Model gave tournament players a rigorous way to value survival, reshaping bubble and final-table strategy and spawning deal-making math",
        body: [
          "As tournament poker grew, players noticed that cash-game instincts led to costly mistakes near the money — getting all-in 'correctly' by chips but busting out of real prize equity. The Independent Chip Model, adapted from earlier probability work, gave a rigorous framework: translate everyone's chip stacks into real-money equity given the payout structure.",
          "ICM became foundational to modern tournament play:\n- It is the basis for chop/deal negotiations when a final table agrees to split the remaining prize pool by current equity, not by chip count.\n- ICM calculators and trainers let players study bubble and final-table spots precisely, proving that survival has measurable value.\n- The lasting lesson: in tournaments, think in dollars of equity, not chips. The big stack should bully, the short stack should push/fold, and everyone should call off tighter as the pay jumps loom — the exact opposite of reckless chip accumulation.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Chips ≠ Money", sub: "ICM = real-$ equity", type: "system" },
          { label: "Diminishing Value", sub: "lost chip > won chip", type: "attacker" },
          { label: "Bubble Pressure", sub: "survival has value", type: "victim" },
          { label: "Big Bullies, Short Jams", sub: "stack-based push/fold", type: "result" },
        ],
      },
      timeline: [
        { year: 1987, event: "The Independent Chip Model is adapted for tournament equity" },
        { year: 2003, event: "The Moneymaker boom makes big-field tournaments mainstream", highlight: true },
        { year: 2010, event: "ICM calculators and push/fold (Nash) charts go mainstream" },
        { year: 2024, event: "ICM-aware final-table play and deal-making are standard for pros" },
      ],
      keyTakeaways: [
        "ICM (Independent Chip Model) converts chips to real-money equity; chip value is concave, so a lost chip costs more than a won chip",
        "Near the money and at pay jumps, survival has value — call off much tighter than chip-EV would suggest",
        "The big stack bullies (shoves wide, risks least); the short stack plays push/fold via Nash charts",
        "Medium stacks face the most ICM pressure and must fold a lot against the big stack's aggression",
      ],
      references: [
        { title: "Independent Chip Model", url: "https://en.wikipedia.org/wiki/Independent_Chip_Model" },
        { title: "Poker tournament", url: "https://en.wikipedia.org/wiki/Poker_tournament" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-09-q1", type: "Core Idea", challenge: "Chips vs money.", text: "What is the central insight of the Independent Chip Model (ICM)?", options: ["Chip value diminishes, so a chip lost is worth more than a chip won", "A chip always equals one dollar", "More chips always means proportionally more equity", "Chips have no value in tournaments"], correctIndex: 0, explanation: "ICM equity is concave in chips: doubling your stack adds less than double the equity, so survival matters." },
        { id: "poker-2-09-q2", type: "The Bubble", challenge: "Just before the money.", text: "How should ICM change your play on the money bubble?", options: ["Call off tighter — busting costs real-money equity, so survival has value", "Call off much wider", "Play exactly like a cash game", "Always go all-in"], correctIndex: 0, explanation: "On the bubble the value of surviving spikes, so correct calling ranges tighten versus chip-EV." },
        { id: "poker-2-09-q3", type: "Big Stack", challenge: "The bully.", text: "Why can the big stack apply so much pressure near a pay jump?", options: ["They risk the least real-money equity since they won't bust, so they can shove wide", "They have the best cards", "The rules give them extra bets", "They can see opponents' hands"], correctIndex: 0, explanation: "The chip leader can't be eliminated, so ICM pressure falls on the medium stacks they jam into." },
        { id: "poker-2-09-q4", type: "Short Stack", challenge: "Few big blinds.", text: "What strategy does a short stack (around 10bb) switch to?", options: ["Push/fold — move all-in or fold preflop, guided by Nash charts", "Limp every hand", "Only call, never raise", "Min-raise and fold to 3-bets"], correctIndex: 0, explanation: "With a short stack, post-flop play disappears; the optimal game is shoving or folding preflop." },
        { id: "poker-2-09-q5", type: "ICM vs Nash", challenge: "Calling ranges.", text: "Compared to chip-EV Nash ranges, how does ICM affect your calling range near a pay jump?", options: ["It tightens your calling range because busting costs real-money equity", "It widens your calling range", "It has no effect", "It only changes your shoving range"], correctIndex: 0, explanation: "ICM penalizes busting, so you call shoves with a narrower range than raw chip-EV Nash suggests." },
      ],
    },
  },

  // ─── poker-2-10: Modern Theory & Study Routine ───────────────────────────────
  {
    epochId: "poker-2",
    wonder: { name: "The solver", location: "Where modern poker is studied", era: "Modern", emoji: "🧠" },
    id: "poker-2-10",
    order: 10,
    title: "Modern Theory & Study Routine",
    subtitle: "Solvers, GTO, MDF and alpha, and how to actually improve",
    category: "sports",
    xp: 115,
    badge: { id: "poker2-badge-10", name: "Solver Student", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "Modern poker is studied with solvers and game theory, but raw GTO output is useless without a study routine that turns it into instincts. Understand the core concepts — MDF, alpha, range advantage, GTO vs exploit — then build the off-table habits that actually make you better.",
      year: 2024,
      overview: [
        "GTO (game-theory-optimal) poker is a strategy so balanced that no opponent can exploit it — a Nash equilibrium where your bluffs and value bets are perfectly proportioned. Solvers (software like PioSOLVER and browser tools such as GTO Wizard, mainstream from ~2015) compute these strategies for given situations, outputting mixed frequencies — bet THIS hand 70% of the time, check it 30% — that humans then study and approximate.",
        "Two numbers anchor GTO defense and bluffing:\n- MDF (Minimum Defense Frequency) — the share of your range you must continue with to stop a bet from being an automatic profitable bluff. MDF = pot / (pot + bet). The bigger the bet, the LESS you must defend, so you can fold more against big bets.\n- ALPHA — the bluff's required success rate, the flip side of MDF: alpha = bet / (pot + bet). It tells you how often a bluff must work to break even, and therefore your correct bluff-to-value ratio when betting.\n- RANGE ADVANTAGE — whose overall range is stronger on a given board — drives who gets to bet aggressively and how often (the c-bet concept from earlier, formalized).",
        "GTO is a default, not a religion — you blend it with exploitation:\n- Play near GTO against strong or unknown opponents to stay unexploitable; deviate toward EXPLOITATIVE play against clear, flawed players to win more (as in the profiling stage).\n- A real study routine matters more than memorizing charts: review your own hands and find mistakes, run key spots through a solver or trainer, drill preflop ranges and push/fold charts until automatic, study one concept at a time, and discuss tough hands with stronger players.\n- And never neglect the fundamentals from the first epoch — bankroll management, position, and the mental game (tilt control) — because all the theory in the world is wasted if you go broke or play emotionally.",
      ],
      technical: {
        title: "Reading a Solver, and Building the Habit Loop",
        body: [
          "Using solvers wisely (without becoming a robot):\n- Solvers output MIXED strategies and exact sizes for a defined situation; the goal isn't to memorize outputs but to extract the WHY — which boards favor big bets, which hands make good bluffs (blockers), how MDF sets your defending frequency.\n- Study 'nodes' that recur often (single-raised pots, common board textures) rather than rare spots, and turn solver lessons into simple heuristics you can apply at the table in real time.\n- Beware over-fitting to GTO against weak fields: against players who never bluff or never fold, the money is in deviating, not in textbook balance.",
          "The study loop that actually builds skill:\n- REVIEW — after sessions, mark hands you were unsure about and analyze them away from the table (alone, with a solver/trainer, or with peers).\n- DRILL — practice preflop ranges, pot-odds and MDF math, and push/fold charts until they're instant.\n- ISOLATE — work on ONE leak or concept at a time (e.g., 'stop over-c-betting wet boards') rather than everything at once.\n- TRACK & PROTECT YOUR BANKROLL — keep records, manage variance with proper bankroll rules, and guard the mental game; consistent, emotion-free decisions over a large sample are what turn study into a winning bottom line.",
        ],
        codeExample: {
          label: "MDF, alpha, and the study loop",
          code: `  FACING A BET:
    MDF  = pot / (pot + bet)       <- how much you must defend
    bigger bet -> lower MDF -> you can FOLD more

  WHEN YOU BET (bluffing):
    alpha = bet / (pot + bet)      <- how often a bluff must work
    sets your correct bluff-to-value ratio

  STUDY LOOP (off the table):
    REVIEW hands -> DRILL ranges/math -> ISOLATE one leak
      -> manage BANKROLL + tilt -> repeat
  GTO = default vs strong/unknown; EXPLOIT the weak`,
        },
      },
      incident: {
        title: "The Solver Revolution",
        when: "~2015 onward",
        where: "PioSOLVER, GTO Wizard, and the training world",
        impact: "Affordable solvers brought game-theory-optimal analysis to the masses, raising the skill floor and making study routines the price of admission to winning poker",
        body: [
          "For decades, poker theory advanced through books, intuition, and trial and error. Around 2015, affordable solvers like PioSOLVER — and later browser-based tools such as GTO Wizard — let ordinary players compute near-optimal strategies for specific spots. Suddenly, ideas that top pros had felt their way toward could be checked precisely, and the whole game's skill floor rose.",
          "But the solver era also taught a humbling lesson about study:\n- Raw solver output is overwhelming and useless without a process to convert it into real, in-game instincts.\n- The winners weren't those who 'memorized GTO' but those who studied deliberately — reviewing hands, drilling, isolating leaks, and still exploiting weak opponents.\n- The modern takeaway closes this course: understand the theory (MDF, alpha, range advantage, GTO vs exploit), build a disciplined study routine, protect your bankroll and mindset, and never stop learning. That combination — not any single trick — is what makes a lasting winner.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Solvers & GTO", sub: "balanced, mixed strategies", type: "system" },
          { label: "Learn MDF & Alpha", sub: "defend and bluff frequencies", type: "attacker" },
          { label: "Default vs Deviate", sub: "GTO baseline, exploit the weak", type: "victim" },
          { label: "Study Routine", sub: "review, drill, isolate, protect roll", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "'Super/System' and early books are the only study tools" },
        { year: 2006, event: "HUDs and databases bring data-driven study to the masses" },
        { year: 2015, event: "Affordable solvers (PioSOLVER) bring GTO analysis to ordinary players", highlight: true },
        { year: 2020, event: "Browser solvers and trainers (GTO Wizard) make study routine the norm" },
      ],
      keyTakeaways: [
        "GTO is a balanced, unexploitable baseline computed by solvers; use it as a default and deviate to exploit weak players",
        "MDF = pot/(pot+bet) sets how much you must defend; bigger bets mean you can fold more",
        "Alpha = bet/(pot+bet) is how often a bluff must work, setting your bluff-to-value ratio when betting",
        "A real study routine — review, drill, isolate one leak, manage bankroll and tilt — beats memorizing charts",
      ],
      references: [
        { title: "Poker strategy", url: "https://en.wikipedia.org/wiki/Poker_strategy" },
        { title: "Nash equilibrium", url: "https://en.wikipedia.org/wiki/Nash_equilibrium" },
      ],
    },
    quiz: {
      questions: [
        { id: "poker-2-10-q1", type: "GTO", challenge: "What it is.", text: "What is a GTO (game-theory-optimal) strategy?", options: ["A balanced strategy that no opponent can exploit (a Nash equilibrium)", "A strategy that always bluffs", "A strategy that targets each opponent's mistakes", "A strategy that only plays premium hands"], correctIndex: 0, explanation: "GTO is the unexploitable equilibrium baseline; exploitative play deviates from it to attack specific leaks." },
        { id: "poker-2-10-q2", type: "MDF", challenge: "The defense formula.", text: "What does Minimum Defense Frequency (MDF) tell you?", options: ["The share of your range you must continue with so a bet isn't an auto-profitable bluff", "How many chips to bet", "Which cards to fold preflop", "The size of the blinds"], correctIndex: 0, explanation: "MDF = pot/(pot+bet); defending at least that often stops opponents from profitably bluffing any two cards." },
        { id: "poker-2-10-q3", type: "Bet Size", challenge: "Defend less.", text: "How does facing a bigger bet change your minimum defense frequency?", options: ["MDF goes down — you must defend less, so you can fold more", "MDF goes up — you must defend more", "MDF stays the same", "MDF becomes 100%"], correctIndex: 0, explanation: "Larger bets lower MDF (pot/(pot+bet)), so you're allowed to fold a greater share of your range." },
        { id: "poker-2-10-q4", type: "Alpha", challenge: "Bluff success.", text: "What does 'alpha' = bet/(pot+bet) represent?", options: ["How often a bluff must succeed to break even", "The number of outs you have", "The pot odds for a call", "Your stack size in big blinds"], correctIndex: 0, explanation: "Alpha is the required fold rate for a bluff to break even, which sets your correct bluff-to-value ratio." },
        { id: "poker-2-10-q5", type: "Improvement", challenge: "Get better.", text: "What matters most for actually improving at modern poker?", options: ["A disciplined study routine — review, drill, isolate leaks, and manage bankroll/tilt", "Memorizing every solver output exactly", "Playing as many hands as fast as possible", "Only studying rare, unusual spots"], correctIndex: 0, explanation: "Deliberate study habits that build instincts — plus bankroll and mental discipline — beat rote memorization." },
      ],
    },
  },
];
