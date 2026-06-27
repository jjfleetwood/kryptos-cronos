import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Flag Football: Advanced Play epoch
// (flag-11 … flag-20). Each spot is a deterministic, skill-based call — the
// correct answer is the read/concept/coverage taught in that stage, never a
// coin-flip. correctIndex and explanation are stripped server-side before
// reaching the client. Spots omit hand/board/pot/toCall (those are poker-only)
// and lean on a rich `situation` (formation, motion, coverage shell, down &
// distance) plus a decision in `prompt`.
export const flagFootball2Scenarios: Record<string, ScenarioConfig> = {
  // ─── flag-11: Formations & Motion ──────────────────────────────────────────
  "flag-11": {
    intro: "You're the offensive mind. Use formation and pre-snap motion to stress the defense and learn what it's in before the ball is even snapped.",
    spots: [
      {
        id: "ff2-11-s1", label: "Read the Motion",
        situation: "1st & 10 near midfield. You're in a 2x2 spread. You send your slot receiver in jet motion across the formation, and a defensive back sprints across with him, staying glued the whole way.",
        prompt: "What does the defender chasing the motion man tell you?",
        options: [
          "It's man coverage — a defender is locked to each receiver",
          "It's a deep zone — nobody is responsible for anyone",
          "They're definitely rushing four",
          "Nothing — motion never reveals coverage",
        ],
        correctIndex: 0,
        explanation: "A defender traveling with the motion man across the field is the classic 'man' tell; in zone, the defense would pass him off and stay in their areas.",
      },
      {
        id: "ff2-11-s2", label: "Overload a Side",
        situation: "You want a quick, clean look against a defense that struggles to match up. You'd like to put three eligible receivers to one side so the defense can't cover everyone evenly.",
        prompt: "Which formation creates that overload?",
        options: [
          "Stack (one receiver directly behind another)",
          "Trips (three receivers to one side)",
          "A tight, balanced 1-back set",
          "Empty with two on each side",
        ],
        correctIndex: 1,
        explanation: "Trips puts three receivers to one side, stressing the defense's numbers — if they don't rotate coverage, you can get a free man on that side.",
      },
      {
        id: "ff2-11-s3", label: "Beat Press Man",
        situation: "The defense is in tight press man and keeps jamming your outside receivers at the line, disrupting your timing. You want to align so a defender can't get a clean jam and your receivers release free.",
        prompt: "Which alignment best frees your receivers from press?",
        options: [
          "Spread them as wide as possible, isolated on an island",
          "A bunch/stack set that creates natural traffic and rub releases",
          "Put everyone on the line of scrimmage shoulder to shoulder",
          "Motion everyone to one side and snap immediately",
        ],
        correctIndex: 1,
        explanation: "Bunch and stack sets create legal traffic that makes a clean press jam nearly impossible and naturally rubs man defenders off — a go-to answer to press coverage.",
      },
      {
        id: "ff2-11-s4", label: "Motion to Create",
        situation: "You have a fast slot receiver and a slower linebacker-type defender shaded over him. You want to get your speed player to the perimeter with momentum, attacking that mismatch on the edge.",
        prompt: "What's the purpose of jet/orbit motion here?",
        options: [
          "To waste the play clock",
          "To tell your own QB to throw deep every time",
          "To get a fast player moving to the edge with momentum, attacking the mismatch",
          "To remove a receiver from the play",
        ],
        correctIndex: 2,
        explanation: "Motion isn't only a diagnostic — jet/orbit motion gets a fast player to the perimeter at speed, turning a favorable matchup into a quick-hitting advantage.",
      },
    ],
  },

  // ─── flag-12: Quarterbacking (Deep) ────────────────────────────────────────
  "flag-12": {
    intro: "You're the quarterback — the offense's brain. Win the pre-snap chess, work your progression, and never make the back-breaking mistake under a free rusher.",
    spots: [
      {
        id: "ff2-12-s1", label: "Count the Deep",
        situation: "Pre-snap, you scan the secondary and see a single defender standing deep in the middle of the field, with everyone else up tight on your receivers.",
        prompt: "What does one deep defender most likely signal?",
        options: [
          "Cover 2 — two deep halves",
          "A single-high look (man-free or single-high zone)",
          "Cover 0 — nobody deep at all",
          "Prevent defense with four deep",
        ],
        correctIndex: 1,
        explanation: "One deep safety is a single-high shell (Cover 1 man-free or single-high zone); counting deep defenders is the QB's fastest read on where the coverage is vulnerable.",
      },
      {
        id: "ff2-12-s2", label: "Work the Progression",
        situation: "You planned to hit your first read on a comeback, but at the snap the cornerback sits hard on it and takes it away cleanly. Your second read is breaking open over the middle, and your checkdown is wide open underneath.",
        prompt: "What's the disciplined play?",
        options: [
          "Force the comeback anyway — it was the call",
          "Come off it to your second read coming open over the middle",
          "Hold the ball and wait for the comeback to clear",
          "Throw it into the ground immediately",
        ],
        correctIndex: 1,
        explanation: "When the defense takes your first read, you work the progression — move to the open second read. Forcing a covered first option is how interceptions happen.",
      },
      {
        id: "ff2-12-s3", label: "Free Rusher",
        situation: "3rd & 8. The rush gets home fast and a free rusher is bearing down on you. You scan and nobody has separated — every receiver is blanketed in tight man.",
        prompt: "What's the cardinal rule here?",
        options: [
          "Force it into the tightest window and hope",
          "Take a sack-fumble risk scrambling backward forever",
          "Throw it away safely (or take the checkdown) — don't force a turnover",
          "Throw it up for grabs deep",
        ],
        correctIndex: 2,
        explanation: "Against a free rusher with nothing open, never force it — a throwaway or checkdown beats an interception every time. Live for the next down.",
      },
      {
        id: "ff2-12-s4", label: "Throw Them Open",
        situation: "Your receiver is running a deep out toward the sideline with the cornerback trailing slightly inside and underneath him.",
        prompt: "Where should you place the ball?",
        options: [
          "Behind the receiver, back toward the trailing corner",
          "Right at the receiver's numbers so the corner can break on it",
          "Out in front and to the sideline, away from the defender where only the receiver can get it",
          "As hard as possible, location doesn't matter",
        ],
        correctIndex: 2,
        explanation: "Good ball placement throws a receiver open — lead him away from the defender, toward the sideline, to a spot only he can reach. That's how a modest arm still carves up coverage.",
      },
    ],
  },

  // ─── flag-13: Receiver Play (Deep) ─────────────────────────────────────────
  "flag-13": {
    intro: "You're the receiver, and getting open is a craft. Manipulate the defender with releases, leverage, and double moves — then finish at the catch point.",
    spots: [
      {
        id: "ff2-13-s1", label: "Read Leverage",
        situation: "You're running an option off the line and the defender is clearly shaded to your inside, sitting on anything that breaks across the middle.",
        prompt: "Which way should you break to win?",
        options: [
          "Break outside, away from his inside leverage",
          "Break inside, directly into his leverage",
          "Run straight at him and stop",
          "Break wherever — leverage doesn't matter",
        ],
        correctIndex: 0,
        explanation: "You attack a defender by breaking away from his leverage. With him sitting inside, the outside break is open — read the shade and cut away from it.",
      },
      {
        id: "ff2-13-s2", label: "Remove the Cushion",
        situation: "You're running a vertical (go) route and the deep defender is giving you a soft cushion, backpedaling to keep everything in front so he can play the ball over your shoulder.",
        prompt: "What technique takes away his ability to play the deep ball?",
        options: [
          "Slow down so he can settle under it",
          "Stack him — run directly through and get on top of him to erase the cushion",
          "Run out of bounds and come back",
          "Cut it off short into a hitch every time",
        ],
        correctIndex: 1,
        explanation: "'Stacking' a defender — getting directly on top of him on a vertical — removes his cushion and his angle to play the ball over your shoulder, so only you can make the catch.",
      },
      {
        id: "ff2-13-s3", label: "The Double Move",
        situation: "A cornerback has jumped your quick hitch (stop route) twice in a row, breaking aggressively downhill on it. You have time because the rush is contained.",
        prompt: "What's the highest-upside route call?",
        options: [
          "Run the same hitch a third time",
          "Run a quick slant underneath him",
          "A hitch-and-go (double move): sell the stop, then explode deep past the biting defender",
          "Stand still and wait for the ball",
        ],
        correctIndex: 2,
        explanation: "A defender who jumps your first move is the perfect target for a double move — sell the hitch, then go. Double moves need time/protection, which you have here.",
      },
      {
        id: "ff2-13-s4", label: "Finish on the Sideline",
        situation: "You've separated on a back-shoulder throw near the boundary and the ball is arriving with the defender draped on your inside hip.",
        prompt: "How do you finish the play?",
        options: [
          "Catch it with your body and drift out of bounds",
          "Shield the defender with your body, high-point the ball, and tap both feet in bounds",
          "Look at the defender instead of the ball",
          "Wait for it to come down to your waist",
        ],
        correctIndex: 1,
        explanation: "Separation only counts if you finish: shield the defender, high-point the ball at its peak, and keep your feet in bounds. Catch point and sideline awareness complete the rep.",
      },
    ],
  },

  // ─── flag-14: Route Concepts & Combinations ────────────────────────────────
  "flag-14": {
    intro: "Single routes get covered; concepts win on purpose. Combine routes to put a key defender in a bind — wrong no matter what he chooses.",
    spots: [
      {
        id: "ff2-14-s1", label: "Smash vs the Corner",
        situation: "You call SMASH: a hitch underneath at about 5 yards with a corner route breaking deep behind it, both to the same side. You read the cornerback, who drops to carry the deep corner route.",
        prompt: "Where do you throw?",
        options: [
          "The deep corner, right where the CB is dropping",
          "The hitch underneath — the corner vacated the short flat",
          "Backside, away from the concept",
          "Hold it; smash has no answer here",
        ],
        correctIndex: 1,
        explanation: "Smash high-lows the corner. If he carries the deep route, the underneath hitch is open; if he sits on the hitch, you throw the corner. Read him and take what he leaves.",
      },
      {
        id: "ff2-14-s2", label: "Beat the Zone",
        situation: "The defense is sitting in a three-deep, four-under zone. You want a concept that overloads one underneath zone with more receivers than the defense can cover there.",
        prompt: "Which concept best attacks that zone?",
        options: [
          "A single isolated go route",
          "FLOOD — three routes at different depths to one side, more receivers than defenders",
          "A double move on an island",
          "Everybody runs hitches at the same depth",
        ],
        correctIndex: 1,
        explanation: "Flood sends three routes at staggered depths to one side, putting more receivers into a zone than there are defenders — someone is always open in the soft spot.",
      },
      {
        id: "ff2-14-s3", label: "Beat the Man",
        situation: "The defense is in tight Cover 1 man across the board. You want a concept that uses legal traffic to spring a receiver loose from his man defender.",
        prompt: "Which concept is built to beat man coverage?",
        options: [
          "Four verticals into the man defenders",
          "MESH — two crossing routes underneath that rub off man defenders",
          "A team of comeback routes",
          "Everybody clears out deep and nobody crosses",
        ],
        correctIndex: 1,
        explanation: "Mesh sends receivers crossing close together so man defenders collide or get caught in traffic, springing a receiver free — the classic man-beater (run routes, don't block defenders).",
      },
      {
        id: "ff2-14-s4", label: "Legal or Illegal?",
        situation: "On your mesh concept, one of your crossers slows down and sticks his arm out to physically wall off the defender chasing the other crosser.",
        prompt: "What just happened?",
        options: [
          "Great technique — that's how mesh is supposed to work",
          "Nothing — contact is fine in flag",
          "An illegal pick — receivers must run routes, not deliberately block defenders",
          "It only matters if the pass is caught",
        ],
        correctIndex: 2,
        explanation: "The line between a legal rub and an illegal pick is intent: run your route and traffic is legal; deliberately blocking a defender is a penalty (offensive pass interference).",
      },
    ],
  },

  // ─── flag-15: Defensive Coverages (Deep) ───────────────────────────────────
  "flag-15": {
    intro: "Now you're the defense. Pick the coverage shell that takes away the offense's best option — and understand each shell's weakness before they exploit it.",
    spots: [
      {
        id: "ff2-15-s1", label: "Name the Shell",
        situation: "You call a coverage with no deep safety: every defender is locked in man-to-man and you're bringing extra pressure on the quarterback.",
        prompt: "What coverage is this?",
        options: [
          "Cover 0 — all man, no deep help",
          "Cover 2 — two deep halves",
          "Cover 3 — three deep thirds",
          "Cover 1 — man with a free safety",
        ],
        correctIndex: 0,
        explanation: "Cover 0 is all-man with no deep safety, usually paired with a rush. It's tight and aggressive but gets beaten deep the instant a receiver wins his matchup.",
      },
      {
        id: "ff2-15-s2", label: "Cover 2 Hole",
        situation: "You're in Cover 2: two deep defenders split the deep field in halves, with underneath zones beneath them. The offense keeps attacking the same soft area.",
        prompt: "Where is Cover 2 most vulnerable?",
        options: [
          "The short flats only",
          "The deep middle (the seam between the two safeties) and over the top of the corners",
          "Nowhere — Cover 2 has no weakness",
          "Right at the line of scrimmage",
        ],
        correctIndex: 1,
        explanation: "Cover 2 splits the deep field in two, leaving the deep-middle seam between the safeties and the deep sideline behind the corners as its classic soft spots.",
      },
      {
        id: "ff2-15-s3", label: "Single-High Help",
        situation: "You want man coverage on every receiver but you're nervous about getting beaten deep on a double move. You'd like one defender free in the deep middle to help over the top.",
        prompt: "Which coverage gives you that?",
        options: [
          "Cover 0",
          "Cover 2",
          "Cover 1 — man underneath with one free safety deep",
          "Pure Cover 3 zone",
        ],
        correctIndex: 2,
        explanation: "Cover 1 (man-free) plays man across the board with a single free safety deep, giving you tight coverage plus over-the-top insurance against the deep ball.",
      },
      {
        id: "ff2-15-s4", label: "Disguise It",
        situation: "An elite QB is shredding you because he diagnoses your coverage pre-snap every time and throws to the weakness instantly.",
        prompt: "What's the best counter?",
        options: [
          "Line up in the exact same look every play so you're consistent",
          "Disguise — show one shell pre-snap, then rotate to a different coverage at the snap",
          "Always rush everyone",
          "Tell the QB what you're in to be sporting",
        ],
        correctIndex: 1,
        explanation: "Disguise beats a QB's pre-snap read: show one shell, then rotate into another at the snap so his diagnosis is wrong and he throws into coverage he didn't expect.",
      },
    ],
  },

  // ─── flag-16: The Pass Rush ────────────────────────────────────────────────
  "flag-16": {
    intro: "You're the rusher, spotting seven yards. Pressure is a race of timing, angles, and contain — not brute force. Marry the rush to the coverage behind you.",
    spots: [
      {
        id: "ff2-16-s1", label: "The 7-Yard Rule",
        situation: "It's a passing down and you're the designated rusher. You're itching to time the snap and fire off the line of scrimmage right next to the center.",
        prompt: "What does the flag rush rule require?",
        options: [
          "You can rush from anywhere, anytime",
          "You must start a set distance back (commonly 7 yards) before rushing the QB",
          "You must wait three seconds after the snap",
          "Only the center can rush",
        ],
        correctIndex: 1,
        explanation: "The flag rusher typically starts ~7 yards off the line. That head start for the offense makes the rush about get-off speed, timing, and angles rather than power.",
      },
      {
        id: "ff2-16-s2", label: "Hold Contain",
        situation: "You explode off the line, but the QB is a scrambler. You can either fly straight upfield at him as fast as possible, or take an angle that keeps him from escaping to the outside.",
        prompt: "What's the disciplined rush?",
        options: [
          "Sprint straight at him — speed is everything",
          "Rush under control on an angle that contains him inside; don't let him escape outside",
          "Stop and drop into coverage instead",
          "Run past him to pressure from behind",
        ],
        correctIndex: 1,
        explanation: "Contain is the rusher's prime directive: rush to a point that keeps the QB from escaping outside. Fly straight upfield and a step-up or scramble beats you for big yards.",
      },
      {
        id: "ff2-16-s3", label: "Time the Pressure",
        situation: "You've got a beat to the QB. You want your pressure to be maximally disruptive to the throw rather than just arriving whenever.",
        prompt: "When should your pressure ideally arrive?",
        options: [
          "Long before any route develops",
          "As the routes break and the QB wants to throw",
          "Only after the QB has already thrown",
          "Timing of arrival doesn't matter",
        ],
        correctIndex: 1,
        explanation: "Pressure that hits exactly as routes break — when the QB is loading to throw — is the most disruptive, forcing hurried, inaccurate balls. Use the 7-yard start to time it.",
      },
      {
        id: "ff2-16-s4", label: "Blitz Math",
        situation: "Your coordinator wants to send a second rusher to get home faster on an obvious passing down.",
        prompt: "What's the trade-off of that blitz?",
        options: [
          "There's no downside — always blitz",
          "It slows your rush down",
          "Faster pressure, but it subtracts a coverage defender and opens a hole behind it",
          "It's illegal to send two rushers",
        ],
        correctIndex: 2,
        explanation: "An extra rusher gets there faster but removes a coverage defender, so a blitz is a calculated gamble — best on obvious passing downs or with a coverage that can survive it.",
      },
    ],
  },

  // ─── flag-17: Run Game & Misdirection ──────────────────────────────────────
  "flag-17": {
    intro: "Flag isn't all dropbacks. Sweeps, motion, reverses, play-action, and screens freeze the defense and steal easy yards. Make every play look the same — until it isn't.",
    spots: [
      {
        id: "ff2-17-s1", label: "Attack the Edge",
        situation: "The defense crowds the middle of the field and is slow to the perimeter. You have a fast player and you're outside any no-run zone.",
        prompt: "Which call best attacks that defense?",
        options: [
          "A dive straight up the middle into the crowd",
          "A jet sweep or pitch to get your speed player to the edge with momentum",
          "A deep drop-back into the teeth of the rush",
          "A kneel-down",
        ],
        correctIndex: 1,
        explanation: "Sweeps and jet motion attack the perimeter, getting a fast player to the edge with a head start where a middle-heavy flag defense is stretched thin.",
      },
      {
        id: "ff2-17-s2", label: "Punish Over-Pursuit",
        situation: "Film shows this defense flows hard and fast to the first action — they over-pursue the sweep look every time, all flying to the strong side.",
        prompt: "Which misdirection call punishes that?",
        options: [
          "Run the same sweep into their flow again",
          "A reverse — start one way, then hand back the other way against the grain",
          "A QB kneel",
          "Throw it out of bounds",
        ],
        correctIndex: 1,
        explanation: "A reverse specifically punishes a defense that over-pursues the first action: as they flow one way, the ball goes back the other, into the space they vacated.",
      },
      {
        id: "ff2-17-s3", label: "Set the Trap",
        situation: "This defense is aggressive — defenders sprint downhill the instant they read run, biting hard on any sweep or run action.",
        prompt: "What's the deadliest answer to that aggression?",
        options: [
          "Play-action — fake the run to suck them up, then throw behind them",
          "Run straight at them harder",
          "Snap the ball and immediately kneel",
          "Run the exact same run a fourth time",
        ],
        correctIndex: 0,
        explanation: "Play-action weaponizes an aggressive defense's run-keys: fake the sweep/run to pull defenders up, then throw into the space they vacated behind them.",
      },
      {
        id: "ff2-17-s4", label: "Sell It",
        situation: "You're installing a misdirection package and want it to actually fool the defense rather than tip them off early.",
        prompt: "What makes misdirection work?",
        options: [
          "Running each play slowly so they can see it",
          "Making every play look identical at the start so the defense keys the wrong thing",
          "Telling the defense which play is coming",
          "Never using pre-snap motion",
        ],
        correctIndex: 1,
        explanation: "Misdirection lives on identical pre-snap and early looks — same motion, same backfield action — so the defense can't tell the real play from the fake until it's too late.",
      },
    ],
  },

  // ─── flag-18: Defensive Strategy & Adjustments ─────────────────────────────
  "flag-18": {
    intro: "Offenses script chess; you answer. Elite flag defense is recognition + communication + situational savvy. Diagnose the look, talk it out, and out-adjust the offense.",
    spots: [
      {
        id: "ff2-18-s1", label: "Diagnose the Strength",
        situation: "The offense lines up in trips to the field side — three receivers to one side, overloading it. Your coverage is balanced left-and-right as called.",
        prompt: "What should the defense do pre-snap?",
        options: [
          "Ignore it and stay balanced",
          "Recognize the overload and rotate/adjust coverage to the trips strength",
          "Always blitz everyone",
          "Leave the three-receiver side completely uncovered",
        ],
        correctIndex: 1,
        explanation: "Formation recognition is step one: a trips set signals an overload, so you align and rotate your coverage to the strength before the snap or you give up a free receiver.",
      },
      {
        id: "ff2-18-s2", label: "Have a Motion Rule",
        situation: "You're in man coverage and the offense sends a receiver in motion across the formation. Your defenders hesitate, unsure who has him now.",
        prompt: "What's the correct man-coverage rule for motion?",
        options: [
          "Travel with the motion man across the formation",
          "Everyone stays put and lets him go free",
          "Switch to a deep zone mid-play",
          "Run off the field",
        ],
        correctIndex: 0,
        explanation: "In man, you travel with the motion man so he's never uncovered (in zone you'd bump/rotate). A defense without a motion rule gives up busted-coverage scores.",
      },
      {
        id: "ff2-18-s3", label: "Third and Long",
        situation: "It's 3rd & 9. The offense needs a chunk to move the chains, and they have all their best route concepts available.",
        prompt: "What's the smart situational call?",
        options: [
          "All-out man with no deep help",
          "Drop into a deep zone and rush with contain — protect the sticks, make them check down short",
          "Stack the line expecting a run up the middle",
          "Leave the deep middle wide open",
        ],
        correctIndex: 1,
        explanation: "On 3rd-and-long, defend the line to gain: drop into deep zone with a contained rush so anything underneath is short of the sticks and the QB can't hit a deep shot.",
      },
      {
        id: "ff2-18-s4", label: "Eye Discipline",
        situation: "This offense lives on misdirection — jet motion, reverses, and play-action. Your defenders keep getting fooled, biting on the backfield action.",
        prompt: "What lets your defenders stop biting on the fakes?",
        options: [
          "Watching the ball-carrier's every fake closely",
          "Guessing the play before the snap",
          "Eye discipline — each defender reads his own key, not the backfield magic show",
          "Closing their eyes at the snap",
        ],
        correctIndex: 2,
        explanation: "Eye discipline beats misdirection: each defender reads his assigned key rather than the backfield action, so fakes and motion can't pull him out of position.",
      },
    ],
  },

  // ─── flag-19: Athletic Development ──────────────────────────────────────────
  "flag-19": {
    intro: "The athlete you build off the field decides the player you are on it. Train speed, power, and agility — specific to flag's cuts and bursts — and stay durable.",
    spots: [
      {
        id: "ff2-19-s1", label: "Train What Transfers",
        situation: "You have limited training time before the season. Almost every flag play is a short acceleration, a sharp cut, and a burst — rarely a long, steady run.",
        prompt: "What training transfers best to flag football?",
        options: [
          "Long-distance jogging only",
          "Acceleration mechanics, plyometrics, and change-of-direction work",
          "Max bench press as the only lift",
          "Sitting still to stay fresh",
        ],
        correctIndex: 1,
        explanation: "Flag is short bursts and cuts, so prioritize acceleration mechanics, plyometric power, and change-of-direction (plus reactive agility) — not long-distance endurance.",
      },
      {
        id: "ff2-19-s2", label: "Speed Is a Skill",
        situation: "A teammate insists you're either born fast or you're not, so there's no point working on how you sprint.",
        prompt: "Why is that wrong?",
        options: [
          "Speed can't be improved at all",
          "Only long runs make you faster",
          "Sprinting is a skill — better acceleration posture and arm action make you faster with no extra effort",
          "Mechanics actually slow you down",
        ],
        correctIndex: 2,
        explanation: "Sprinting is trainable technique: improving acceleration posture (lean and drive) and arm action makes you faster without working any harder.",
      },
      {
        id: "ff2-19-s3", label: "Protect the Knees",
        situation: "Flag is a hard-cutting sport, and the most common serious injuries are non-contact ACL tears and hamstring strains from sudden decelerations and cuts.",
        prompt: "Which approach most reduces those injuries?",
        options: [
          "Skip the warm-up to save energy",
          "Dynamic warm-ups plus hamstring/core strength and trained landing/cutting technique",
          "Only static stretching right before play",
          "Never rest between sessions",
        ],
        correctIndex: 1,
        explanation: "Neuromuscular programs — dynamic warm-ups, hamstring/hip/core strength, and good landing/cutting mechanics — measurably cut ACL and hamstring injuries in cutting sports.",
      },
      {
        id: "ff2-19-s4", label: "Recovery Is Training",
        situation: "You're a high-school athlete grinding hard every day, but you're cutting sleep short and skipping meals to fit it all in, and you've hit a performance slump.",
        prompt: "What's the likely fix?",
        options: [
          "Train even more with even less sleep",
          "Recovery — prioritize sleep, hydration, and nutrition so the body actually adapts",
          "Recovery is a waste of time; only the workout matters",
          "Teens don't need sleep",
        ],
        correctIndex: 1,
        explanation: "Recovery is when training pays off — sleep (the biggest lever for teens), hydration, and nutrition drive adaptation. Overtraining with poor sleep causes slumps and injuries.",
      },
    ],
  },

  // ─── flag-20: Game IQ & The Next Level ─────────────────────────────────────
  "flag-20": {
    intro: "Talent gets you on the field; game IQ wins games. Master the clock, down-and-distance, and the moment — the smartest player often beats the most talented one.",
    spots: [
      {
        id: "ff2-20-s1", label: "Protect the Lead",
        situation: "You're on offense leading by 4 with two minutes left. The defense has to stop you to get the ball back. You have a manageable down and distance.",
        prompt: "What's the smart approach?",
        options: [
          "Throw deep down the field every play",
          "Stay in bounds, take safe completions, and run clock; avoid the turnover",
          "Run out of bounds to stop the clock for the defense",
          "Call timeouts to help the other team",
        ],
        correctIndex: 1,
        explanation: "Leading late, you protect the ball and milk the clock — stay in bounds, take the safe completion, and never risk the turnover that flips the game.",
      },
      {
        id: "ff2-20-s2", label: "Two-Minute, Trailing",
        situation: "Now you're trailing by 4 with little time left and you have timeouts in your pocket. You need to score and you can't afford to let the clock bleed out.",
        prompt: "What's the right clock management?",
        options: [
          "Run the clock down to milk it",
          "Get out of bounds to stop the clock, use timeouts wisely, and attack the line to gain",
          "Avoid using any timeouts",
          "Kneel the ball to end the half",
        ],
        correctIndex: 1,
        explanation: "Trailing late, you do the opposite of protecting a lead: stop the clock by getting out of bounds, spend timeouts smartly, and chase the sticks with calculated aggression.",
      },
      {
        id: "ff2-20-s3", label: "Take What's Given",
        situation: "It's 3rd & 4. The defense drops everyone deep to prevent a big play, conceding the short underneath throw. Your instinct is to go for the home run.",
        prompt: "What does high game IQ say?",
        options: [
          "Force the deep shot into the deep coverage anyway",
          "Take the open underneath throw to move the chains — take what the defense gives",
          "Throw it away to be safe",
          "Run backward to buy time for the deep route",
        ],
        correctIndex: 1,
        explanation: "Game IQ is taking what the defense gives: with everyone deep, the sure underneath completion moves the chains. Don't force the low-percentage shot into the coverage they want.",
      },
      {
        id: "ff2-20-s4", label: "The Pathway",
        situation: "A teammate asks what the realistic ceiling is for a player who masters offense, defense, agility, and game IQ in flag football today.",
        prompt: "What is the ultimate competitive stage flag football now reaches?",
        options: [
          "Only backyard and gym-class games",
          "There is no real competitive ladder",
          "The NFL Combine",
          "The 2028 Los Angeles Olympic Games",
        ],
        correctIndex: 3,
        explanation: "Flag football now has a real ladder — sanctioned high-school championships and growing college programs — culminating in its debut at the LA 2028 Olympics.",
      },
    ],
  },
};
