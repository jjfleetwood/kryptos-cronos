import type { ScenarioConfig } from "./types";

// "Make the Call" Decision-Trainer scenarios for the Flag Football: Playbook &
// Competition epoch (flag-21 → flag-30). Each spot is a deterministic,
// skill-based game-management / play-calling decision — the correct line is the
// sound competitive choice taught in that stage, never a coin-flip outcome.
// correctIndex and explanation are stripped server-side before reaching the client.
export const flagFootball3Scenarios: Record<string, ScenarioConfig> = {
  "flag-21": {
    intro: "You're the coach building this season's playbook from scratch. Practice time is short and the roster is new — every choice has to earn its place on the call sheet.",
    spots: [
      {
        id: "ff3-21-s1", label: "Install Size",
        situation: "You have two 60-minute practices a week with a young team. A volunteer assistant wants to install 40 plays before the opener.",
        prompt: "How big should your opening install be?",
        options: [
          "A small core your team can run flawlessly — depth of mastery over volume",
          "All 40 plays, so you always have an answer ready",
          "Exactly one play, run every down",
          "As many plays as the wristband can physically hold",
        ],
        correctIndex: 0,
        explanation: "With limited reps, a compact playbook run cleanly beats an overstuffed one run with hesitation. Master the core, then add.",
      },
      {
        id: "ff3-21-s2", label: "Multiplying Looks",
        situation: "You want to show the defense many different pictures, but you can't afford to memorize dozens of separate plays.",
        prompt: "What's the most efficient way to create many looks?",
        options: [
          "Add three more brand-new plays each week",
          "Run a few core concepts from different formations and motions",
          "Use only one formation so nobody gets confused",
          "Let each receiver freelance their route",
        ],
        correctIndex: 1,
        explanation: "Formation × concept × motion multiplies the looks: 4 concepts from 4 formations is 16 pictures off a tiny install.",
      },
      {
        id: "ff3-21-s3", label: "Coverage Check",
        situation: "You list your install on a whiteboard: a smash concept, a mesh, a deep shot, and a jet sweep. You're about to call it done.",
        prompt: "Reviewing the list, what's the most important gap to fill before the opener?",
        options: [
          "A second deep shot play",
          "A team fight song",
          "A blitz beater / quick game and a safe checkdown",
          "Nothing — four plays is plenty",
        ],
        correctIndex: 2,
        explanation: "A complete playbook needs an answer for every situation — quick game vs the rush, a no-run-zone score, a blitz beater, and a checkdown — not just shots.",
      },
      {
        id: "ff3-21-s4", label: "Calling System",
        situation: "Your huddles are slow and the defense keeps reading your hand signals before the snap.",
        prompt: "What's the best fix for speed and secrecy?",
        options: [
          "A numbered wristband system — call a number, players read their assignment",
          "Shout the full play name louder so your team hears it",
          "Take a timeout before every snap to talk it through",
          "Let the defense see the call so they relax",
        ],
        correctIndex: 0,
        explanation: "Numbered wristbands speed the huddle and conceal the call — a clear, consistent naming/number system makes calls fast and unambiguous.",
      },
    ],
  },

  "flag-22": {
    intro: "Game day. You've got the call sheet, a headset, and a defense you've never seen. Now you have to actually run the game — script it, read it, and adjust on the fly.",
    spots: [
      {
        id: "ff3-22-s1", label: "Opening Script",
        situation: "It's the first series. You don't yet know the opponent's coverage or how hard they rush.",
        prompt: "What's the value of scripting your first few plays?",
        options: [
          "It locks you into a plan you can't change",
          "It probes the defense's coverage and rush while settling your team into rhythm",
          "It guarantees a touchdown on the first drive",
          "It wastes downs on purpose",
        ],
        correctIndex: 1,
        explanation: "Openers are an information-gathering tool: they reveal coverage and pressure tendencies and get the team into rhythm.",
      },
      {
        id: "ff3-22-s2", label: "Read the Pressure",
        situation: "Through one quarter the defense has rushed extra players on nearly every snap and gotten home twice for sacks.",
        prompt: "How should your play-calling adapt?",
        options: [
          "Keep calling deep, slow-developing routes and hope they hold up",
          "Call only timeouts until they stop",
          "Lean on quick game and screens to get the ball out before the rush arrives",
          "Run straight into the heaviest part of the rush",
        ],
        correctIndex: 2,
        explanation: "Quick throws and screens punish a heavy rush by beating it to the spot — get the ball out fast and make the extra rusher irrelevant.",
      },
      {
        id: "ff3-22-s3", label: "The Constraint Play",
        situation: "Your jet sweep has gashed them three times, and now their flat defender is flying up to stop it the instant he sees motion.",
        prompt: "What's the right counter?",
        options: [
          "Run the same jet sweep again, harder",
          "A constraint play — fake the sweep and hit play-action behind the defender who jumped it",
          "Stop using motion entirely for the rest of the game",
          "Call a deep shot to the opposite sideline with no fake",
        ],
        correctIndex: 1,
        explanation: "A constraint play punishes a defense for over-committing to your base: when they jump the sweep, the play-action goes behind them.",
      },
      {
        id: "ff3-22-s4", label: "Staying Unpredictable",
        situation: "You notice you've thrown a quick out on every single 3rd-and-short, and the defense is starting to sit on it.",
        prompt: "How do you keep the defense honest?",
        options: [
          "Vary your calls by down and distance and sequence plays so tendencies don't form",
          "Tell your QB to audible to the same play anyway",
          "Run the quick out one more time — it worked before",
          "Announce the play so they can't accuse you of cheating",
        ],
        correctIndex: 0,
        explanation: "Mixing calls by situation and sequencing plays keeps the defense guessing — predictable tendencies get punished by a prepared opponent.",
      },
    ],
  },

  "flag-23": {
    intro: "You've driven the length of the field, but now the field is shrinking. Inside the red zone and the no-run zone, space disappears and every yard is contested.",
    spots: [
      {
        id: "ff3-23-s1", label: "Why It's Hard",
        situation: "Your offense moved easily between the 20s but has now stalled twice inside the 10-yard line.",
        prompt: "Why does scoring get harder this close to the end zone?",
        options: [
          "The ball gets heavier near the goal line",
          "There's no deep field left to stretch the defense, so coverage compresses and windows tighten",
          "Receivers are required to slow down",
          "The end zone is smaller than the rest of the field",
        ],
        correctIndex: 1,
        explanation: "Compressed space removes the vertical threat. With no deep field to defend, the coverage tightens and throwing lanes shrink.",
      },
      {
        id: "ff3-23-s2", label: "Attack the Space",
        situation: "The defense has packed the end zone, sitting in tight coverage with no deep responsibility.",
        prompt: "What's the soundest way to attack it?",
        options: [
          "Stretch the defense horizontally with quick breaking routes and throw to open grass",
          "Throw deep over the top into the back of the end zone",
          "Hand off up the middle every down",
          "Take a knee and settle for nothing",
        ],
        correctIndex: 0,
        explanation: "Without deep room you win sideways — horizontal spacing and quick routes create the throwing lanes a vertical attack can't.",
      },
      {
        id: "ff3-23-s3", label: "Beating Tight Man",
        situation: "Film shows this team plays tight man-to-man in the end zone, trailing every receiver step for step.",
        prompt: "Which concept best beats tight end-zone man coverage?",
        options: [
          "A deep post into the only deep defender",
          "Standing receivers still to confuse the defender",
          "Legal rub/pick concepts to free a receiver, plus fades and back-shoulder throws",
          "Guarding your flag and hoping for a penalty",
        ],
        correctIndex: 2,
        explanation: "Rubs free a receiver from a trailing defender; fades and back-shoulder throws put the ball where only your receiver can get it.",
      },
      {
        id: "ff3-23-s4", label: "No-Run Zone",
        situation: "You've crossed into the no-run zone, where handoffs are illegal, and the defense knows it.",
        prompt: "What makes the no-run zone uniquely tough — and how do you answer it?",
        options: [
          "Passing is illegal there, so you must kneel",
          "It's identical to midfield; call whatever you like",
          "The defense knows you must pass and sells out against it — beat it with quick, spaced concepts and motion",
          "Running is actually faster there, so just run",
        ],
        correctIndex: 2,
        explanation: "Because the defense knows a pass is coming, it can commit to coverage. Quick, well-spaced concepts and motion stress that sold-out look.",
      },
    ],
  },

  "flag-24": {
    intro: "The defense has decided to bring the heat. Extra rushers are coming all game — your job is to turn their aggression into your big plays.",
    spots: [
      {
        id: "ff3-24-s1", label: "The Trade-Off",
        situation: "The defense sends an extra rusher off the edge. That rusher was lined up over your slot receiver a moment ago.",
        prompt: "What does the blitz hand you to exploit?",
        options: [
          "More defenders dropping into coverage",
          "A vacated area — the blitzer is a coverage defender who left his zone/man",
          "A safer, slower game for your QB",
          "Nothing useful at all",
        ],
        correctIndex: 1,
        explanation: "Every extra rusher is one fewer coverage defender. Throw to the space the blitzer abandoned.",
      },
      {
        id: "ff3-24-s2", label: "Hot Routes",
        situation: "Your QB keeps getting flagged before deeper routes can develop against the pressure.",
        prompt: "What tool gives the QB an instant answer to the blitz?",
        options: [
          "A hot route — a receiver breaks off into a quick route the moment he reads blitz",
          "A deep developing post on every snap",
          "A defensive coverage call",
          "A delay-of-game penalty to reset",
        ],
        correctIndex: 0,
        explanation: "A hot route gives the QB an immediate target into the vacated space, beating the rush before it arrives.",
      },
      {
        id: "ff3-24-s3", label: "Pre-Snap Read",
        situation: "Before the snap you want to know whether the blitz is coming so you can set protection and hot routes.",
        prompt: "What's the best pre-snap tell?",
        options: [
          "Watch the crowd's reaction",
          "Wait until after the throw to find out",
          "Count rushers vs. defenders and read movement and leverage near the line",
          "Ignore the defense and snap quickly",
        ],
        correctIndex: 2,
        explanation: "An extra man creeping toward the line and pre-snap movement tip the blitz — counting and reading the box lets you set the answer first.",
      },
      {
        id: "ff3-24-s4", label: "The Payoff",
        situation: "Three times now you've hit the vacated space for big gains the moment they blitzed.",
        prompt: "What's the strategic effect of repeatedly beating the blitz?",
        options: [
          "The offense starts getting penalized for it",
          "It forces the defense to blitz less and play more coverage",
          "Nothing — the defense keeps blitzing the same way",
          "Your QB is now required to run every down",
        ],
        correctIndex: 1,
        explanation: "Punishing pressure makes blitzing too costly, so the defense backs off — you've won the chess match, not just the play.",
      },
    ],
  },

  "flag-25": {
    intro: "You've got a few specials in the back pocket — flea-flickers, double-passes, reverses. They can steal a game, but only if you spend them wisely and run them clean.",
    spots: [
      {
        id: "ff3-25-s1", label: "Why It Works",
        situation: "Your reverse only gains big when the defense flows hard to the initial action.",
        prompt: "What actually makes a trick play work?",
        options: [
          "Simply running faster than the defense",
          "Having more players on the field than allowed",
          "Selling a convincing fake so the defense reacts, then attacking where they aren't",
          "Bending the rules until you get caught",
        ],
        correctIndex: 2,
        explanation: "Deception turns the defense's discipline and pursuit against it — you attack the space their reaction opens up.",
      },
      {
        id: "ff3-25-s2", label: "The Flea-Flicker",
        situation: "You want a shot play that pulls the safety up before going over the top.",
        prompt: "How does a flea-flicker create that shot?",
        options: [
          "Fake a run, pitch the ball back to the QB, then throw deep behind the bitten defenders",
          "Hand off cleanly with no fake at all",
          "Send every receiver on the same short route",
          "Have the QB rush immediately without faking",
        ],
        correctIndex: 0,
        explanation: "The fake run sucks defenders up toward the line; the pitch back resets the QB and the deep shot goes behind them.",
      },
      {
        id: "ff3-25-s3", label: "Know the Rules",
        situation: "Your double-pass trick play has the QB throw a lateral, then a receiver throws downfield.",
        prompt: "What rule must you confirm before calling it?",
        options: [
          "Forward passes are always illegal in flag",
          "Most leagues allow only one forward pass — laterals can chain, but a second forward pass is usually illegal",
          "You may throw unlimited forward passes",
          "No passes of any kind are allowed",
        ],
        correctIndex: 1,
        explanation: "Typically only one forward pass is legal; the first toss must be a lateral. Check your league's code before you call it.",
      },
      {
        id: "ff3-25-s4", label: "When to Spend It",
        situation: "It's a close game and you've practiced your best gadget all week.",
        prompt: "How should you use trick plays over a season?",
        options: [
          "On every down, to keep the defense guessing",
          "Never — they're too risky to attempt",
          "Sparingly, at the right moment, well-disguised and well-rehearsed",
          "Only when you're already losing by 30",
        ],
        correctIndex: 2,
        explanation: "Surprise is the weapon, and it's a finite resource — pick the moment, disguise it, and make sure you've drilled it cleanly.",
      },
    ],
  },

  "flag-26": {
    intro: "Now you're wearing the defensive coordinator's hat. You can rush extra defenders, but every blitzer you send leaves a gap behind. Design the pressure so it doesn't get you burned.",
    spots: [
      {
        id: "ff3-26-s1", label: "Designed Heat",
        situation: "Your defenders keep guessing on when to rush, and the QB picks them apart.",
        prompt: "What is a defensive pressure package?",
        options: [
          "A designed call that brings an extra rusher while planning the coverage behind it",
          "A random, unplanned rush by whoever feels like it",
          "A coverage call with no rusher at all",
          "An offensive play",
        ],
        correctIndex: 0,
        explanation: "Pressure with a plan speeds up the QB and forces mistakes — it's a coordinated rush plus the coverage that covers for it.",
      },
      {
        id: "ff3-26-s2", label: "The Zone Blitz",
        situation: "Every time you blitz, the QB hits the area the rusher left wide open.",
        prompt: "How does a zone blitz fix that weakness?",
        options: [
          "It sends every defender and hopes for the best",
          "A different defender drops to replace the rusher's vacated area, keeping the coverage sound",
          "It rushes nobody and plays soft",
          "It only works against the run",
        ],
        correctIndex: 1,
        explanation: "Swapping responsibilities — one player rushes, another drops into his vacated zone — keeps coverage intact while still confusing the QB.",
      },
      {
        id: "ff3-26-s3", label: "Disguise It",
        situation: "The QB keeps checking to the perfect hot route before the snap, beating your pressure every time.",
        prompt: "Why disguise where the pressure comes from?",
        options: [
          "Only to look intimidating",
          "Because the rules require it",
          "So the QB can't identify it pre-snap and set the right protection or hot route",
          "There's no real benefit to disguising it",
        ],
        correctIndex: 2,
        explanation: "Identical pre-snap looks rob the QB of his answer — if he can't read the pressure, he can't pre-set the hot route to beat it.",
      },
      {
        id: "ff3-26-s4", label: "The Spy",
        situation: "The opposing QB is fast and keeps escaping your rush for big scramble gains.",
        prompt: "What's the role of a 'spy' against a mobile QB?",
        options: [
          "Cover a receiver deep down the sideline",
          "Rush the hardest of anyone on the field",
          "Mirror the QB to contain scrambles and pull his flag if he runs",
          "Snap the ball for the offense",
        ],
        correctIndex: 2,
        explanation: "A spy shadows the QB so your pressure doesn't open a running lane — he keeps a scrambler contained and pulls the flag if he takes off.",
      },
    ],
  },

  "flag-27": {
    intro: "The week before a big game, you've got film of your opponent and a notebook. Turn what you watch into a plan that lets your team anticipate instead of react.",
    spots: [
      {
        id: "ff3-27-s1", label: "Why Study Film",
        situation: "Your team plays well but always seems a step behind, reacting to what the opponent does.",
        prompt: "What does scouting let you do?",
        options: [
          "Skip practice that week",
          "Anticipate the opponent's tendencies instead of just reacting",
          "Guess randomly at the snap",
          "Ignore your own game plan",
        ],
        correctIndex: 1,
        explanation: "Knowing an opponent's tendencies turns reaction into anticipation — you know what's likely coming before they run it.",
      },
      {
        id: "ff3-27-s2", label: "Finding Tendencies",
        situation: "You're watching three games of opponent film with a blank chart in front of you.",
        prompt: "What's the right way to uncover their tendencies?",
        options: [
          "Watch only the scoreboard",
          "Judge them by their uniforms",
          "Chart each play by down, distance, formation, and result",
          "Call and ask the other coach what they'll run",
        ],
        correctIndex: 2,
        explanation: "Charting by situation surfaces patterns — e.g., '3rd-and-short = blitz 70%' — that you can attack with the right call.",
      },
      {
        id: "ff3-27-s3", label: "Self-Scout",
        situation: "You've scouted the opponent thoroughly but never reviewed your own film.",
        prompt: "Why also scout yourself?",
        options: [
          "To find and fix your own predictable tendencies before the opponent exploits them",
          "To copy exactly what the opponent does",
          "It's pointless — only the opponent matters",
          "To pad the notebook with extra pages",
        ],
        correctIndex: 0,
        explanation: "If you're predictable, the opponent's film study punishes you — self-scouting finds the leaks before they do.",
      },
      {
        id: "ff3-27-s4", label: "Make It a Plan",
        situation: "You've got pages of charted tendencies for both teams, but kickoff is in two days.",
        prompt: "How do you turn scouting into something usable?",
        options: [
          "Throw away the notes and wing it",
          "Build a situational call sheet that attacks their tendencies and protects your own",
          "Memorize one play and run it all game",
          "Decide never to adjust mid-game",
        ],
        correctIndex: 1,
        explanation: "A situational call sheet operationalizes the report — it tells you what to call by down and distance to attack what you found.",
      },
    ],
  },

  "flag-28": {
    intro: "You run the practices. Limited field time, a mix of skill levels, and a season to get ready for — design the reps and the culture that actually show up on game day.",
    spots: [
      {
        id: "ff3-28-s1", label: "Practice Like You Play",
        situation: "Your scrimmage reps are casual and walked through at half speed, but games are fast and physical.",
        prompt: "What does 'you play how you practice' mean for design?",
        options: [
          "Practice slowly and casually to avoid mistakes",
          "Practice game-like and at game speed so real habits transfer",
          "Skip fundamentals to save time",
          "Avoid game situations entirely",
        ],
        correctIndex: 1,
        explanation: "Game-like reps at game speed build the habits that hold up under pressure — practice intensity transfers to performance.",
      },
      {
        id: "ff3-28-s2", label: "Quality vs. Quantity",
        situation: "You have one hour and want to choose between deep reps on a few concepts or a quick skim of two dozen plays.",
        prompt: "Which is the better use of a limited practice?",
        options: [
          "Skim dozens of plays so the team has seen them all",
          "Do no install and only condition",
          "Work a small set of concepts deeply with quality reps",
          "Run brand-new plays you've never practiced",
        ],
        correctIndex: 2,
        explanation: "Quality reps of a focused install beat shallow breadth — mastery of a few things wins over exposure to many.",
      },
      {
        id: "ff3-28-s3", label: "Clear Roles",
        situation: "On game day players keep colliding on assignments and asking 'whose job was that?'",
        prompt: "Why define clear roles in practice?",
        options: [
          "So everyone knows their job and how they help the team win",
          "To deliberately create confusion",
          "Roles don't actually matter in flag",
          "To find reasons to bench players",
        ],
        correctIndex: 0,
        explanation: "Clarity of roles is half of execution — when everyone knows their assignment, the team plays fast and clean.",
      },
      {
        id: "ff3-28-s4", label: "The Glue",
        situation: "Late in a tight game, you can see which teams hold together and which fall apart.",
        prompt: "What holds a team together under pressure?",
        options: [
          "Raw talent alone",
          "A bag of trick plays",
          "A culture of communication, effort, and accountability",
          "Going silent and hoping it passes",
        ],
        correctIndex: 2,
        explanation: "Culture and leadership keep a team composed when it matters — talent without it cracks under pressure.",
      },
    ],
  },

  "flag-29": {
    intro: "You're planning the whole season's training arc, not just this week. The goal: build fitness early, stay fresh through the grind, and peak when the playoffs arrive.",
    spots: [
      {
        id: "ff3-29-s1", label: "Plan the Arc",
        situation: "Your team trains the exact same way in week 1 of the preseason as in the championship week.",
        prompt: "What is periodization?",
        options: [
          "Training the identical way all year long",
          "Organizing training into phases to build, sharpen, and peak at the right time",
          "Never training at all",
          "Only ever competing, never training",
        ],
        correctIndex: 1,
        explanation: "Periodization phases your training so you're neither overtrained nor flat — you build early and peak for the big games.",
      },
      {
        id: "ff3-29-s2", label: "In-Season Shift",
        situation: "The season has started and games come every week, but you're still piling on heavy high-volume workouts.",
        prompt: "How should training change once games begin?",
        options: [
          "Add even more volume than the preseason",
          "Stop all training completely",
          "Shift toward speed/agility and quality work, with lower volume to stay fresh",
          "Do only maximal lifts the day before games",
        ],
        correctIndex: 2,
        explanation: "In-season is about sharpening and freshness, not building — lower volume with quality keeps legs fast for game day.",
      },
      {
        id: "ff3-29-s3", label: "The Taper",
        situation: "The playoffs start in two weeks and your players are grinding through fatigue.",
        prompt: "What does a taper before the playoffs accomplish?",
        options: [
          "Sheds accumulated fatigue while keeping fitness, so athletes peak",
          "Builds maximum fatigue for toughness",
          "Strips away all the fitness you built",
          "Has no measurable effect",
        ],
        correctIndex: 0,
        explanation: "Tapering reduces fatigue while preserving fitness, delivering peak speed and explosiveness exactly when it counts.",
      },
      {
        id: "ff3-29-s4", label: "Recovery Counts",
        situation: "A coach wants to cut all rest days and recovery work to fit in more practice.",
        prompt: "Why keep recovery in the season plan?",
        options: [
          "Recovery just wastes valuable time",
          "Only games matter, not rest",
          "It's when adaptation happens and how you avoid injury and burnout",
          "Athletes at this level don't need rest",
        ],
        correctIndex: 2,
        explanation: "Adaptation happens during recovery — sleep, nutrition, and managed load keep players fast, healthy, and available.",
      },
    ],
  },

  "flag-30": {
    intro: "It's tournament day: multiple games, single-elimination brackets, and a championship on the line. Everything you've built comes down to managing the day and the moments.",
    spots: [
      {
        id: "ff3-30-s1", label: "The Long Day",
        situation: "Your team has three pool games this morning and, if you advance, two bracket games this afternoon.",
        prompt: "How do you manage a multi-game tournament day?",
        options: [
          "Play your starters every single snap to win big early",
          "Pace energy, recover between games, and use your roster depth",
          "Skip warm-ups to conserve energy",
          "Ignore hydration and nutrition until it's over",
        ],
        correctIndex: 1,
        explanation: "Energy management, between-game recovery, and using your depth keep you fresh enough to win the games that matter most — the late ones.",
      },
      {
        id: "ff3-30-s2", label: "Bracket Scout",
        situation: "You're about to play a bracket opponent you've never seen and will only face once.",
        prompt: "How do you prepare for a one-shot bracket opponent?",
        options: [
          "Don't bother preparing at all",
          "Reuse last week's game plan unchanged",
          "Quick-scout their tendencies during early action and adjust within the game",
          "Forfeit and rest for the next round",
        ],
        correctIndex: 2,
        explanation: "Even a few series reveal coverage and blitz tendencies — quick-scout live and adjust in-game, since there's no week of film.",
      },
      {
        id: "ff3-30-s3", label: "The Close One",
        situation: "It's an elimination game, tied late, and both teams are evenly matched.",
        prompt: "What usually decides tight elimination games?",
        options: [
          "Situational execution — clock and timeout management — plus composure",
          "Pure luck and nothing else",
          "Only trick plays",
          "The pre-game coin toss",
        ],
        correctIndex: 0,
        explanation: "Clock mastery, smart timeout use, and calm, rehearsed execution win the close ones — the prepared, composed team takes it.",
      },
      {
        id: "ff3-30-s4", label: "Keep Climbing",
        situation: "Your team just won the championship, and your best players are wondering what's next.",
        prompt: "Where can championship flag football lead?",
        options: [
          "Nowhere beyond the trophy",
          "State titles, college programs, and the 2028 LA Olympics",
          "Straight to the NFL Draft",
          "Only more backyard games",
        ],
        correctIndex: 1,
        explanation: "Flag's growth makes a title a stepping stone — state titles, college programs, and flag's debut at the 2028 LA Olympics are real paths.",
      },
    ],
  },
};
