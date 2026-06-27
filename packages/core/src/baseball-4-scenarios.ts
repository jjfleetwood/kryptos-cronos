import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Elite Hitting Mastery epoch (baseball-4).
// Each spot is a deterministic, skill-based hitting decision — the correct line is
// the approach taught in that stage, never a luck-of-the-draw outcome.
// correctIndex and explanation are stripped server-side before reaching the client.
export const baseball4Scenarios: Record<string, ScenarioConfig> = {
  "baseball-4-01": {
    intro:
      "You're in the Dodgers' analytics room evaluating hitters by their batted-ball data, not their box scores. Read the Statcast numbers, not the noise.",
    spots: [
      {
        id: "bb4-01-s1",
        label: "Find the Value",
        situation:
          "Two free agents cost the same. Hitter A: .295 BA / .255 xBA / 6% barrel. Hitter B: .255 BA / .300 xBA / 13% barrel.",
        prompt: "Which hitter is the smarter acquisition?",
        options: [
          "Hitter A — the higher batting average proves better contact",
          "Hitter B — his xBA far exceeds his BA and his barrel rate is elite, so his results are suppressed by bad luck and likely to improve",
          "Hitter A — barrel rate doesn't matter for everyday players",
          "Neither — identical price means identical value",
        ],
        correctIndex: 1,
        explanation:
          "Hitter B is the buy. A .300 xBA against a .255 BA means his contact quality deserves far better results — the gap is bad luck or defense that should regress toward his expected numbers. His 13% barrel rate is above the elite threshold. Hitter A's BA already exceeds his xBA, so his .295 is likely to fall: he's selling high on himself.",
      },
      {
        id: "bb4-01-s2",
        label: "Weight the Outcomes",
        situation:
          "Two hitters both bat .280. Hitter A: 50 walks, 10 home runs. Hitter B: 20 walks, 30 home runs.",
        prompt: "Who has the higher wOBA, and why?",
        options: [
          "Hitter B — home runs carry far more wOBA weight than walks, so his power output outweighs A's extra walks",
          "Hitter A — walks are weighted highest in wOBA",
          "They're equal — wOBA is just batting average rescaled",
          "Impossible to tell without their stolen-base totals",
        ],
        correctIndex: 0,
        explanation:
          "wOBA assigns run-value weights: a home run is worth roughly 2.0, a walk roughly 0.69. Hitter B's 20 extra homers generate far more wOBA value than Hitter A's 30 extra walks can recover, so B carries the higher wOBA despite identical batting averages. wOBA captures power and on-base ability in one number — that's why it beats batting average for valuing hitters.",
      },
      {
        id: "bb4-01-s3",
        label: "Diagnose the Slump",
        situation:
          "Your hitter's barrel rate fell from 14% to 6% and his average from .290 to .230. Exit velocity is unchanged, but his average launch angle dropped from 18° to 9°.",
        prompt: "What's the most likely cause?",
        options: [
          "He's lost bat speed and needs rest",
          "Pitchers cracked his scouting report",
          "His swing plane has flattened, dropping his launch angle out of the barrel zone — his power is intact but he's hitting too many grounders",
          "It's pure variance; do nothing",
        ],
        correctIndex: 2,
        explanation:
          "Unchanged exit velocity means bat speed and power are fine — so it isn't fatigue. A launch angle falling from 18° to 9° pushes him below the barrel zone and into ground-ball territory. The fix is mechanical: restore the slight upward attack angle that produces the 15–25° sweet spot. Statcast separating exit velo from launch angle is what makes this diagnosis possible.",
      },
      {
        id: "bb4-01-s4",
        label: "Break the Tie",
        situation:
          "Two left fielders have identical .370 wOBA. One has 30.2 ft/sec sprint speed (elite); the other 26.7 ft/sec (below average).",
        prompt: "Why does the faster hitter add offensive value beyond stolen bases?",
        options: [
          "He doesn't — sprint speed only matters for steals",
          "Slower runners are better because pitchers must hold them on",
          "Elite speed raises infield-hit rate, takes extra bases on hits, and pressures defenses — adding measurable offense that wOBA alone doesn't capture",
          "Sprint speed only matters on defense, not at the plate",
        ],
        correctIndex: 2,
        explanation:
          "Elite sprint speed turns slow grounders into infield hits, lets a runner stretch singles into doubles, and forces defenses to play shallow. Those gains sit on top of wOBA. With two hitters at identical wOBA, the faster runner is the more valuable bat — speed is a real offensive multiplier, not just a stolen-base tool.",
      },
    ],
  },

  "baseball-4-02": {
    intro:
      "You've studied the advance scouting card all morning. Now turn pitch-usage data into a pre-pitch plan in the box.",
    spots: [
      {
        id: "bb4-02-s1",
        label: "Trust the Tendency",
        situation:
          "The card says this pitcher throws a fastball 88% of the time in 2-0 counts. You work it to 2-0; his last pitch was a changeup that missed low.",
        prompt: "What pitch do you look for?",
        options: [
          "The changeup — he just threw it, so he'll repeat it",
          "The fastball — an 88% rate in 2-0 counts is a strong prior that one prior pitch doesn't override",
          "Take no matter what — study his pattern in real time",
          "Anything — scouting data can't predict a single pitch",
        ],
        correctIndex: 1,
        explanation:
          "An 88% fastball rate in 2-0 is built from hundreds of pitches; the single preceding changeup is noise. Abandoning a dominant tendency because of one pitch is a cognitive error. Sit fastball on 2-0, and if the changeup comes you adjust — but you were right to look for the heater.",
      },
      {
        id: "bb4-02-s2",
        label: "Pressure Predictability",
        situation:
          "The report notes his fastball usage jumps from 55% to 71% with runners in scoring position. It's the 6th, runners on 2nd and 3rd, two outs, 1-1 count.",
        prompt: "What should you be ready to hit?",
        options: [
          "His slider — he'll go to his out-pitch to end the inning",
          "A changeup — surprises work best under pressure",
          "The fastball — under pressure he reverts to his primary pitch, making him more predictable, not less",
          "Something off-speed — pressure makes pitchers overthrow fastballs",
        ],
        correctIndex: 2,
        explanation:
          "The report tells you exactly what's coming: this pitcher gets more predictable under pressure, leaning on his fastball 71% of the time with RISP. Sit on the heater and drive it. This is where advance scouting pays its biggest dividend.",
      },
      {
        id: "bb4-02-s3",
        label: "Two-Strike Out-Pitch",
        situation:
          "The card shows that in 0-2 and 1-2 counts he throws his slider down-and-away nearly half the time as his swing-and-miss pitch. You're now in a 1-2 count.",
        prompt: "What's the correct two-strike approach?",
        options: [
          "Sit dead-red fastball and take the slider",
          "Protect against the down-and-away slider: widen your zone away with two strikes, shorten up, and be ready to spoil it rather than chase out of the zone",
          "Look middle-in for a pitch to pull",
          "Guess curveball and commit early",
        ],
        correctIndex: 1,
        explanation:
          "With two strikes against a pitcher whose out-pitch is the slider away, you can't sit fastball — you'd be defenseless on his best put-away pitch. Cover away, shorten the swing, and battle to foul off or take the slider that breaks off the plate. Scouting tells you which pitch to protect against; two-strike discipline does the rest.",
      },
      {
        id: "bb4-02-s4",
        label: "Build the At-Bat Plan",
        situation:
          "Before your first at-bat against an unfamiliar starter, you want three data points off the card to build your mental model.",
        prompt: "Which three are most actionable for a first matchup?",
        options: [
          "His ERA, WHIP, and season strikeout total",
          "First-pitch tendency, his must-throw-strike pitch, and his primary out-pitch",
          "His age, handedness, and number of career starts",
          "His height, weight, and arm angle",
        ],
        correctIndex: 1,
        explanation:
          "For a first at-bat the actionable trio is: the 0-0 pitch (decide whether to ambush or take), the pitch he throws when he must throw a strike (your pitch to hunt deep in counts), and his out-pitch (what to protect against with two strikes). ERA and season totals describe results, not what's coming next.",
      },
    ],
  },

  "baseball-4-03": {
    intro:
      "The at-bat begins in the on-deck circle. Use David Ortiz's routine framework — track, review, visualize, regulate — before you ever step in.",
    spots: [
      {
        id: "bb4-03-s1",
        label: "On-Deck Tracking",
        situation:
          "You're on deck. Most hitters watch the count; you're watching the pitcher.",
        prompt: "What's the most valuable thing to gather from the on-deck circle?",
        options: [
          "The catcher's sign sequence",
          "The pitcher's release point and delivery timing, so you can calibrate your trigger and time the live ball before stepping in",
          "Copying the current batter's swing adjustments",
          "The umpire's strike zone from his calls on the current hitter",
        ],
        correctIndex: 1,
        explanation:
          "The on-deck circle gives you a live look at the delivery you can't get from the box. Tracking the release point and timing the pitches — taking a few tracking swings in rhythm — means you step in with your timing already calibrated instead of starting from zero.",
      },
      {
        id: "bb4-03-s2",
        label: "Specific Visualization",
        situation:
          "A young hitter asks what to visualize on deck — is 'just getting a hit' enough?",
        prompt: "What makes visualization actually work?",
        options: [
          "Keeping it vague and positive so you don't add pressure",
          "Making it specific and sensory — see the pitch type and location, feel the swing, hear the contact, see the ball's flight — so it rehearses the real motor pattern",
          "Picturing the pitcher's mistakes instead of your swing",
          "Any mental image works; the content doesn't matter",
        ],
        correctIndex: 1,
        explanation:
          "Vague 'I'll get a hit' imagery only creates positive feeling. Specific, sensory visualization — a 1-0 fastball middle-away, hips rotating, the crack of the barrel, the ball into the left-center gap — activates the brain's motor-planning regions and literally rehearses the movement. Specificity is what produces the performance benefit.",
      },
      {
        id: "bb4-03-s3",
        label: "Arousal Reset",
        situation:
          "You just struck out looking in a big spot. Next inning you're up with the bases loaded — heart racing, jaw tight, gripping the bat too hard.",
        prompt: "What's the disciplined response on deck?",
        options: [
          "Grip tighter to channel the adrenaline into bat speed",
          "Use slow controlled breathing — a 4-count inhale and longer 6-count exhale — to engage the parasympathetic system, lower your heart rate, and restore fine motor control",
          "Replay the strikeout to figure out what went wrong",
          "Nothing — composure can't be changed between at-bats",
        ],
        correctIndex: 1,
        explanation:
          "A longer exhale than inhale activates the parasympathetic 'rest and digest' branch — real physiology, not metaphor. A 4-count in / 6-count out reduces heart rate and restores the fine motor control that over-arousal degrades. Unclenching the jaw and loosening the grip are part of the same correction.",
      },
      {
        id: "bb4-03-s4",
        label: "Keep the Routine",
        situation:
          "Bases loaded, 9th inning. Hitter A lengthens his routine for the moment — more visualization, extra deep breaths, more swings. Hitter B runs his exact, identical routine.",
        prompt: "Which approach do sports psychologists recommend, and why?",
        options: [
          "Hitter A — adapting to the moment's importance improves readiness",
          "Hitter B — an identical routine activates the same calm performance state every time, preventing situation-specific anxiety from disrupting it",
          "Both are equally valid; it's personal preference",
          "Neither — clearing your mind with no routine is best",
        ],
        correctIndex: 1,
        explanation:
          "Routine consistency beats situation-adapted rituals. Changing the routine for a big moment signals to the nervous system that this situation is different, which amplifies anxiety and can over-arouse the hitter. The identical routine is a conditioned anchor to the calm, focused state — changing the anchor breaks the conditioning.",
      },
    ],
  },

  "baseball-4-04": {
    intro:
      "High leverage rewards discipline, not adrenaline. Channel Freeman's 2024 World Series at-bat: refuse to expand, wait for your pitch, then execute.",
    spots: [
      {
        id: "bb4-04-s1",
        label: "Take the Ball",
        situation:
          "Bases loaded, two outs, tie game, 9th inning. The pitch is a slider four inches off the plate — borderline, but clearly a ball. The whole stadium wants you to swing. You take it.",
        prompt: "Did you make the right decision?",
        options: [
          "No — with the bases loaded you should swing at anything close",
          "Yes — taking a ball outside your zone under maximum pressure is elite discipline; it improves the count instead of handing the pitcher a free out",
          "Only if the pitcher is known to be wild",
          "No — a borderline pitch should always be swung at with two outs",
        ],
        correctIndex: 1,
        explanation:
          "Taking a ball outside your zone in a high-leverage spot is the hardest, most disciplined thing a hitter can do. Swinging at a slider four inches off the plate gives the pitcher a free out; taking it moves the count your way and earns a better pitch to drive. The crowd's reaction is irrelevant to pitch quality.",
      },
      {
        id: "bb4-04-s2",
        label: "Freeman's Discipline",
        situation:
          "In Freeman's 2024 WS Game 1 grand slam he took pitch 1 (slider, ball) and pitch 3 (changeup, ball) before crushing pitch 4 (fastball, inner half).",
        prompt: "What principle does that sequence most clearly demonstrate?",
        options: [
          "Elite hitters guess every pitch and got lucky on pitch 4",
          "Even with the bases loaded and a sprained ankle, elite hitters refuse to expand their zone — they wait for the pitch in their zone and then execute without hesitation",
          "Those takes were obvious; any hitter makes them",
          "It only shows Cortes made a mistake, not that Freeman was disciplined",
        ],
        correctIndex: 1,
        explanation:
          "Freeman's takes came under maximum pressure — World Series, extra innings, bases loaded, season on the line. Neither ball was obvious; many hitters expand there. He trusted his zone, forced Cortes back to the fastball, and was ready for it. Discipline in extremis is the clutch skill.",
      },
      {
        id: "bb4-04-s3",
        label: "RISP Adjustment",
        situation:
          "Data shows the best hitters get better with runners in scoring position while average hitters get slightly worse — yet bat speed and contact quality don't change.",
        prompt: "What actually changes for elite clutch hitters?",
        options: [
          "Raw talent that only appears under pressure",
          "Approach discipline — they get more selective, prioritize solid contact over pull power, and accept the walk — while keeping identical mechanics",
          "They build specific RISP muscle memory through extra reps",
          "The pitcher gets nervous, making pitches easier",
        ],
        correctIndex: 1,
        explanation:
          "Statcast on high-leverage at-bats shows mechanics stay constant; what changes is approach. Elite hitters swing at strikes at a higher rate, go the other way more, and take their walks. The mental game — heightened plate discipline — separates clutch from non-clutch, not a mysterious physical gear.",
      },
      {
        id: "bb4-04-s4",
        label: "Don't Press",
        situation:
          "You're 0-for-3 and your team trails by one in the 8th, runner on second. You feel the urge to be the hero and end the game with one swing.",
        prompt: "What's the correct clutch mindset here?",
        options: [
          "Swing for the fences — only a home run matters now",
          "Expand your zone to make sure you put something in play",
          "Stick to your normal approach: hunt a pitch in your zone, drive a line drive, and trust that solid contact and a knocked-in run is the win — pressing leads to chasing",
          "Choke up and just slap at the first pitch",
        ],
        correctIndex: 2,
        explanation:
          "Trying to be the hero is how hitters expand their zone and chase. The run scores on a line drive to the gap just as well as a homer. Keeping your normal approach — wait for your pitch, drive it hard — is exactly what makes a hitter clutch. Pressing and selling out for power is the leak.",
      },
    ],
  },

  "baseball-4-05": {
    intro:
      "Handedness is a structural edge. Work the platoon math the way the Dodgers build a lineup and a switch-hitter manages the matchup.",
    spots: [
      {
        id: "bb4-05-s1",
        label: "The Platoon Edge",
        situation:
          "You're a right-handed hitter. A right-handed pitcher is on the mound; the manager could pinch-hit your left-handed teammate.",
        prompt: "Why does the lefty bat usually have the advantage against a righty?",
        options: [
          "Left-handed hitters are simply more talented",
          "The breaking ball moves toward the opposite-handed hitter and stays longer in view, and the lefty starts a step closer to first — so the platoon advantage favors the opposite-handed batter",
          "Handedness has no real effect on hitting",
          "Right-handed pitchers throw slower to lefties",
        ],
        correctIndex: 1,
        explanation:
          "A right-hander's slider breaks away from a righty hitter but toward a lefty, who sees it longer and out of a more comfortable angle; the lefty also gets a half-step head start to first base. That's the platoon advantage — the opposite-handed matchup — and it's why managers stack lefties against righties.",
      },
      {
        id: "bb4-05-s2",
        label: "Read the Splits",
        situation:
          "A bench bat shows .310 vs LHP but only .220 vs RHP over his career — a large, stable platoon split across thousands of plate appearances.",
        prompt: "How should you deploy him?",
        options: [
          "Start him every day; the average will balance out",
          "Use him as the strong side of a platoon — start him against left-handed pitching and sit or pinch-hit for him against righties",
          "Bat him leadoff regardless of the opposing pitcher",
          "Splits that large are random noise; ignore them",
        ],
        correctIndex: 1,
        explanation:
          "A 90-point split over a large sample is a real, exploitable tendency, not noise. The optimal use is platooning: play him against lefties where he's elite and protect him from righties where he's a liability. That's exactly how the Dodgers have squeezed value from role players.",
      },
      {
        id: "bb4-05-s3",
        label: "Switch-Hitter Logic",
        situation:
          "You're a switch-hitter. A right-handed pitcher is on the mound, but in a key spot he could be replaced by a left-handed reliever.",
        prompt: "From which side do you bat against the right-handed pitcher?",
        options: [
          "Right-handed, to pull the ball",
          "Left-handed — you bat from the opposite side of the pitcher's throwing hand to keep the platoon advantage, so you hit lefty against a righty",
          "Whichever side feels better that day",
          "It makes no difference for a switch-hitter",
        ],
        correctIndex: 1,
        explanation:
          "The whole point of switch-hitting is to always take the platoon advantage: bat from the side opposite the pitcher's hand. Against a righty you hit left-handed; if the lefty reliever comes in, you flip to the right side. You force the favorable matchup every time.",
      },
      {
        id: "bb4-05-s4",
        label: "The Reliever Counter",
        situation:
          "It's the 8th, you've stacked three straight lefty bats to attack the right-handed starter. The opposing manager warms a hard left-handed reliever.",
        prompt: "What's the strategic risk you created?",
        options: [
          "None — lefty bats always hit",
          "By stacking same-handed bats you invited a same-handed reliever to neutralize all of them at once; a balanced lineup or a right-handed bat off the bench guards against being countered",
          "The reliever can't be used because you batted first",
          "Lefty relievers are always worse than starters",
        ],
        correctIndex: 1,
        explanation:
          "Stacking three lefties hands the opposing manager an easy counter: one left-handed reliever flips the platoon edge against your whole cluster. Lineup construction has to anticipate the bullpen — keeping right-handed bats available or balancing the order prevents a single matchup move from erasing your advantage.",
      },
    ],
  },

  "baseball-4-06": {
    intro:
      "Modern development is measured, not guessed. Use the tech — high-speed cameras, ball-tracking, and VR — to train pitch recognition the right way.",
    spots: [
      {
        id: "bb4-06-s1",
        label: "Why High-Speed Cameras",
        situation:
          "Your lab has an Edgertronic high-speed camera filming the pitcher's hand at release in extreme slow motion.",
        prompt: "What's the main hitting benefit of that footage?",
        options: [
          "It measures how hard the hitter swings",
          "It reveals release-point and grip cues that tip pitch type, so hitters can train to recognize spin and pitch out of the hand earlier",
          "It calls balls and strikes automatically",
          "It only helps pitchers, never hitters",
        ],
        correctIndex: 1,
        explanation:
          "High-speed footage of the hand at release exposes the subtle grip and wrist cues that distinguish a fastball from a slider before the ball travels. Studying those cues trains earlier pitch recognition — the elite skill of identifying a pitch out of the hand rather than halfway to the plate.",
      },
      {
        id: "bb4-06-s2",
        label: "Read the Ball Data",
        situation:
          "A ball-tracking unit (Rapsodo) reports your live BP: spin rate, spin axis, and movement profile for every pitch the machine throws.",
        prompt: "How does that data sharpen a hitter's preparation?",
        options: [
          "It tells the hitter to swing harder",
          "It lets you replicate an opponent's exact spin and movement in practice, so you train against the real shape of pitches you'll face — not generic batting practice",
          "It guarantees you'll hit the pitch in a game",
          "It measures only the hitter's exit velocity, nothing about pitches",
        ],
        correctIndex: 1,
        explanation:
          "Ball-tracking quantifies the spin and movement that give a pitch its shape. Programming the machine to match an upcoming opponent's pitches means you rehearse against that exact break and velocity. You arrive having literally seen the pitcher's stuff, instead of facing it cold.",
      },
      {
        id: "bb4-06-s3",
        label: "VR Reps",
        situation:
          "A VR hitting simulator can serve you hundreds of an opponent's pitches from his real release point and arsenal without throwing a single live ball.",
        prompt: "What's the chief value of VR training for recognition?",
        options: [
          "It replaces the need for any physical swing work",
          "Volume and specificity — you get many high-rep looks at a specific pitcher's release and pitch mix, training decision-making and recognition without physical fatigue",
          "It improves raw bat speed more than weight training",
          "It only helps with bunting",
        ],
        correctIndex: 1,
        explanation:
          "VR's edge is repeatable, opponent-specific looks at scale — hundreds of recognition reps from a real release point with no arm to wear out and no pitcher to fatigue. It trains the decision (swing/take, pitch ID) rather than the physical swing, which still needs live and tee work.",
      },
      {
        id: "bb4-06-s4",
        label: "Don't Over-Engineer",
        situation:
          "A hitter is drowning in dashboards — spin axis, attack angle, ten metrics per swing — and his in-game performance is getting worse, not better.",
        prompt: "What's the right way to use the technology?",
        options: [
          "Add more metrics until something clicks",
          "Treat the data as a diagnostic tool that informs a few targeted cues, then let the hitter compete with a clear, simple mind — paralysis by analysis hurts performance",
          "Abandon all technology and go purely by feel",
          "Have him read the dashboard between every pitch in the game",
        ],
        correctIndex: 1,
        explanation:
          "The tech is for diagnosis and targeted training, not for the batter's box. Overloading a hitter with live metrics causes paralysis by analysis. The best development labs convert data into one or two simple cues, then send the hitter up to compete with a quiet mind. Information serves the swing; it doesn't replace competing.",
      },
    ],
  },

  "baseball-4-07": {
    intro:
      "Offense is judged relative to position. Evaluate hitters against the baseline for the spot they play, the way a front office actually does.",
    spots: [
      {
        id: "bb4-07-s1",
        label: "Catcher Context",
        situation:
          "Your catcher hits .245 with solid defense and elite pitch framing. A fan says he's a weak hitter who should be benched.",
        prompt: "How do you evaluate his bat?",
        options: [
          "Bench him — .245 is below average for any hitter",
          "A .245 catcher who frames and defends well is a genuine asset: offense is judged against the positional baseline, and catcher is the lowest offensive bar because of its defensive demands",
          "Move him to first base immediately",
          "Batting average is the only number that matters at any position",
        ],
        correctIndex: 1,
        explanation:
          "Catcher carries the toughest defensive load in baseball, so its offensive baseline is the lowest on the diamond. A .245 catcher who frames, blocks, and handles a staff is producing real value. You measure a hitter against the average bat at his position, not against the league as a whole.",
      },
      {
        id: "bb4-07-s2",
        label: "The Cost Curve",
        situation:
          "Two players post the same .270/.330/.450 line. One is a shortstop; one is a first baseman.",
        prompt: "Which is the more valuable player, and why?",
        options: [
          "The first baseman — corner power is worth more",
          "They're identical because the slash lines match",
          "The shortstop — the same offensive line is far more valuable from a premium up-the-middle defensive position than from first base, where the offensive bar is highest",
          "Neither matters; only home runs count",
        ],
        correctIndex: 2,
        explanation:
          "An identical bat is worth more from a demanding position. Shortstop is up-the-middle and scarce; first base is the easiest defensive spot and therefore carries the highest offensive expectation. A positional adjustment (the heart of WAR) credits the shortstop for producing the same offense from a much harder job.",
      },
      {
        id: "bb4-07-s3",
        label: "The DH Bar",
        situation:
          "A bat-only player provides zero defensive value and will only DH. He hits .260 with 18 home runs.",
        prompt: "How should you judge whether that's good enough?",
        options: [
          "It's great — 18 homers is plenty",
          "The DH has the highest offensive bar on the roster because he contributes nothing on defense, so a .260/18-HR line is roughly league-average-ish bat and likely below what a starting DH should provide",
          "DH production doesn't need to be evaluated",
          "Any DH is automatically more valuable than a defender",
        ],
        correctIndex: 1,
        explanation:
          "Because a DH offers no glove, his bat must clear the highest offensive baseline on the team to justify the lineup spot. A .260/18-HR line is short of an impact DH; you'd want significantly more power or on-base ability from a spot that does nothing defensively. The DH's only job is to mash.",
      },
      {
        id: "bb4-07-s4",
        label: "Build the Lineup",
        situation:
          "You're choosing between a glove-first, .230-hitting center fielder and a .290-hitting corner outfielder who's a poor defender, for a contending roster.",
        prompt: "What's the sound front-office reasoning?",
        options: [
          "Always take the higher batting average",
          "Weigh each against his positional baseline and total value: an elite-defending center fielder can be worth a .230 bat, while a poor-defending corner bat must hit a lot to clear its higher offensive bar — decide on combined offense-plus-defense, not BA alone",
          "Center field doesn't matter defensively",
          "Defense is always more important than offense at every spot",
        ],
        correctIndex: 1,
        explanation:
          "You evaluate the whole package against position. Elite center-field defense is scarce and can justify a light bat; a corner outfielder who can't defend must hit well above his higher offensive baseline to be a net asset. The decision turns on combined value relative to each position, not on batting average in isolation.",
      },
    ],
  },

  "baseball-4-08": {
    intro:
      "Great hitting coaches fix what's broken and protect what works. Decide what to change, what to leave alone, and which philosophy fits the hitter.",
    spots: [
      {
        id: "bb4-08-s1",
        label: "Leave It Alone",
        situation:
          "A young hitter has an unusual leg kick and a hand hitch, but he's consistently on time, balanced at contact, and squares the ball up with authority.",
        prompt: "What's the most important coaching decision?",
        options: [
          "Rebuild his swing to look textbook",
          "Leave the cosmetic quirks alone — if he gets to a strong, on-time launch position and squares the ball up, the timing mechanism works; don't fix what isn't broken",
          "Eliminate the leg kick because it's nonstandard",
          "Flatten his swing to remove the hitch immediately",
        ],
        correctIndex: 1,
        explanation:
          "The hardest and most valuable coaching skill is knowing what to leave alone. Pre-swing style — leg kicks, hitches, bat waggles — is just a timing trigger. If the hitter reaches a strong launch position on time and squares the ball, the move works. Rebuilding a productive swing to look 'correct' usually does harm.",
      },
      {
        id: "bb4-08-s2",
        label: "Fix the Real Flaw",
        situation:
          "Another hitter consistently lunges out onto his front foot early, losing his back side and getting beaten by anything off-speed.",
        prompt: "Is this worth correcting?",
        options: [
          "No — leave every swing alone",
          "Yes — lunging and committing the front side early is a genuine timing and balance flaw that off-speed pitches will exploit, so it's worth correcting unlike cosmetic style points",
          "Only change it if he asks you to",
          "Tell him to swing harder to compensate",
        ],
        correctIndex: 1,
        explanation:
          "There's a difference between style and a flaw. Lunging onto the front foot early destroys balance and timing and makes a hitter helpless against changeups and breaking balls. That's a root mechanical problem worth fixing — the coach's job is to separate harmless quirks from the few flaws that actually limit the hitter.",
      },
      {
        id: "bb4-08-s3",
        label: "Lau vs. Williams",
        situation:
          "You're teaching a slap-and-run, speed-first leadoff hitter. You weigh Charlie Lau's contact-and-line-drive approach against Ted Williams' rotational, get-the-ball-in-the-air power model.",
        prompt: "Which philosophy fits this hitter best?",
        options: [
          "Williams — every hitter should swing for power",
          "Lau's contact, level-to-the-ball, use-the-whole-field approach suits a speed-first hitter whose game is putting the ball in play and beating out hits, rather than selling out for power",
          "Neither philosophy applies to real hitters",
          "Whichever one the coach personally prefers",
        ],
        correctIndex: 1,
        explanation:
          "Coaching philosophy should fit the player. A speed-first table-setter wins by making contact, driving line drives, and using his legs — closer to Charlie Lau's model. Ted Williams' rotational power approach better fits a strong hitter built to drive the ball in the air. Matching method to the hitter's tools is the point of the debate.",
      },
      {
        id: "bb4-08-s4",
        label: "Player Development Mindset",
        situation:
          "The modern Dodger development model (Van Scoyoc with Mookie Betts) pairs data with individualized coaching rather than one universal swing.",
        prompt: "What's the core principle of that approach?",
        options: [
          "Force every hitter into one optimal swing template",
          "Use data to understand each hitter's individual swing and tailor adjustments to his strengths, rather than imposing a single 'correct' model on everyone",
          "Ignore data entirely and coach purely on feel",
          "Only coach the swing during games, never in practice",
        ],
        correctIndex: 1,
        explanation:
          "The modern model is individualized: data diagnoses what each hitter does and where his real opportunities are, and coaching is tailored to his particular swing and strengths. There's no single correct swing to impose — Betts and a power-first slugger need different cues. Personalization, informed by measurement, is the philosophy.",
      },
    ],
  },

  "baseball-4-09": {
    intro:
      "Every great hitter has a technical signature. Match the Dodger legend to the skill that defined him — and the lesson you can steal.",
    spots: [
      {
        id: "bb4-09-s1",
        label: "Opposite-Field Power",
        situation:
          "A hitter is renowned for driving outside pitches with authority to the opposite field rather than trying to pull everything — the hallmark of Mike Piazza and Manny Ramirez.",
        prompt: "What does this skill let a hitter do?",
        options: [
          "It only works against weak pitching",
          "It lets him cover the whole plate and punish pitchers who try to work him away, instead of being beaten or rolling over on outer-half pitches",
          "It reduces his power to nothing",
          "It's a flaw that should be coached out",
        ],
        correctIndex: 1,
        explanation:
          "Genuine opposite-field power, the signature of hitters like Piazza and Manny Ramirez, removes the pitcher's safest plan — living away. A hitter who drives the outer-half pitch the other way covers the entire plate and can't be pitched into a corner. It's a mark of elite plate coverage, not a weakness.",
      },
      {
        id: "bb4-09-s2",
        label: "Plate Discipline",
        situation:
          "Manny Ramirez posted a .489 on-base percentage in his 2008 run with the Dodgers, in part by laying off pitches just off the plate and forcing pitchers into the zone.",
        prompt: "Why is that swing-decision skill so valuable?",
        options: [
          "It isn't — walks are boring and overrated",
          "Controlling the strike zone drives on-base percentage and forces pitchers into hittable counts, multiplying the value of his already-elite contact",
          "It only matters for leadoff hitters",
          "Pitchers ignore disciplined hitters anyway",
        ],
        correctIndex: 1,
        explanation:
          "Elite swing decisions raise OBP directly and bend at-bats toward the hitter by forcing pitchers to come into the zone. Paired with Manny's bat-to-ball skill, that discipline turned him into a relentless on-base force. Controlling the zone is one of the most transferable skills in hitting.",
      },
      {
        id: "bb4-09-s3",
        label: "The Launch-Angle Tweak",
        situation:
          "Corey Seager refined his swing to elevate the ball more consistently, raising his launch angle into the optimal range while keeping his elite contact.",
        prompt: "What was the point of that adjustment?",
        options: [
          "To strike out more and look powerful",
          "To convert his already-hard contact into more line drives and extra-base hits by getting the ball into the air in the optimal launch-angle window",
          "To slow his swing down",
          "Launch angle has no effect on results",
        ],
        correctIndex: 1,
        explanation:
          "Seager already hit the ball hard; the adjustment was to stop wasting that exit velocity on grounders. Lifting his average launch angle into the productive 15–25° window turned hard contact into doubles and home runs. It's the modern lesson: pair exit velocity with the right launch angle to maximize damage.",
      },
      {
        id: "bb4-09-s4",
        label: "Steal the Right Lesson",
        situation:
          "A coachable young hitter wants to copy a Dodger great. He has quick hands and good contact but minimal power and average speed.",
        prompt: "Which legend's approach is the most useful model for him?",
        options: [
          "Copy a slugger and try to hit 40 home runs by swinging as hard as possible",
          "Borrow the contact-and-plate-discipline approach — use the whole field, control the zone, drive line drives — rather than forcing a power profile his tools don't support",
          "Imitate a specific star's batting stance exactly and nothing else",
          "Avoid studying great hitters entirely",
        ],
        correctIndex: 1,
        explanation:
          "You steal the lesson that fits your tools, not a stance to mimic. A contact-and-discipline hitter should model the all-fields, zone-controlling approach that maximizes his quick hands — not chase a power profile his body doesn't support. Studying legends is about extracting the transferable skill, not cosplaying a swing.",
      },
    ],
  },

  "baseball-4-10": {
    intro:
      "Mastery is a compounding habit, not an event. Build the lifelong practice that separates students of hitting from everyone who plateaus.",
    spots: [
      {
        id: "bb4-10-s1",
        label: "The Compound Effect",
        situation:
          "Two equally talented 13-year-olds. One takes 50 quality tee swings a day year-round; the other only practices during the season.",
        prompt: "Over five years, what's the likely outcome?",
        options: [
          "No difference — talent is fixed",
          "The daily-tee hitter pulls far ahead — small, consistent reps compound into a massive gap in grooved mechanics and feel over years",
          "The seasonal hitter wins because rest matters most",
          "Both plateau immediately",
        ],
        correctIndex: 1,
        explanation:
          "Hitting development compounds. Fifty quality swings a day is thousands of extra grooved reps a year, and over five years that consistency builds a swing the seasonal player never approaches. The daily student isn't more talented — he's banked far more deliberate practice. Small habits, compounded, create the gap.",
      },
      {
        id: "bb4-10-s2",
        label: "Off-Season Plan",
        situation:
          "It's the off-season. A hitter wants to keep improving but has no games to play.",
        prompt: "What's the most productive use of the off-season?",
        options: [
          "Completely rest and don't touch a bat until spring",
          "Build the foundation: strength and mobility work, mechanical refinement on the tee and in the cage, and recognition training — the unhurried window to make changes you can't make mid-season",
          "Play in as many games as possible with no practice",
          "Only lift weights and never swing",
        ],
        correctIndex: 1,
        explanation:
          "The off-season is the one stretch with no competition pressure, which makes it the right time to add strength and mobility, refine mechanics on the tee, and train pitch recognition. You can't overhaul a swing in-season without risking results; the off-season is where the foundation for next year is actually built.",
      },
      {
        id: "bb4-10-s3",
        label: "Age-Appropriate Focus",
        situation:
          "You're advising a 9-year-old's parent who wants intense, specialized power training and a rigid year-round swing program.",
        prompt: "What's the right developmental emphasis at that age?",
        options: [
          "Maximal weighted-bat power training every day",
          "Athleticism, multi-sport movement, fun, and clean fundamentals — specialized, high-intensity, single-focus training is inappropriate and risks burnout and injury at that age",
          "Treat the 9-year-old exactly like a pro",
          "Only mental visualization, never physical play",
        ],
        correctIndex: 1,
        explanation:
          "Development is age-specific. A nine-year-old should build general athleticism, broad movement skills, and clean fundamentals while keeping the game fun — multi-sport play included. Early hyper-specialization and adult-style intensity invite burnout and overuse injury. The training has to match the developmental stage, not copy the pros.",
      },
      {
        id: "bb4-10-s4",
        label: "Student of the Game",
        situation:
          "Ted Williams studied hitting obsessively his whole life — pitchers, his own swing, the physics of the bat — and kept learning even as a veteran.",
        prompt: "What habit most defines a lifelong student of hitting?",
        options: [
          "Believing you've fully mastered it and stopping the study",
          "Relentless curiosity and self-evaluation — always studying pitchers, refining the swing, and learning, treating hitting as a craft you never finish mastering",
          "Refusing to ever change anything once you reach the majors",
          "Relying only on natural talent and never analyzing",
        ],
        correctIndex: 1,
        explanation:
          "What separates the lifelong student is never deciding he's finished. Ted Williams kept dissecting pitchers, his own mechanics, and the science of hitting throughout his career. Treating hitting as an unfinishable craft — driven by curiosity and honest self-evaluation — is the habit that produces continuous improvement long after others plateau.",
      },
    ],
  },
};
