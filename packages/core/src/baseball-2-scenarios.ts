import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Art of Hitting epoch (baseball-2).
// Each spot is a deterministic, skill-based hitting decision — the correct line
// is the sound, coachable choice for that count / pitch / situation, never a
// luck-of-the-draw outcome. correctIndex and explanation are stripped
// server-side before reaching the client.
export const baseball2Scenarios: Record<string, ScenarioConfig> = {
  "baseball-2-01": {
    intro: "Step into the box. Before a pitch is even thrown, your stance and setup decide how ready you are. Make the setup calls a great hitter makes automatically.",
    spots: [
      {
        id: "bb2-01-s1", label: "Set Your Base",
        situation: "You're stepping in against a hard thrower. You want a stance that lets your hips rotate explosively.",
        prompt: "How wide should your feet be set?",
        options: [
          "Slightly wider than shoulder-width, knees bent",
          "As narrow as possible — about six inches apart",
          "So wide you can barely stride",
          "Feet together for maximum mobility",
        ],
        correctIndex: 0,
        explanation: "A base slightly wider than shoulder-width with bent knees gives the hips a stable platform to rotate forcefully. Too narrow and the lower body has no leverage; too wide and you can't stride or transfer weight.",
      },
      {
        id: "bb2-01-s2", label: "Hand Position",
        situation: "You keep getting jammed and popping the ball up. You notice your hands start low and out in front of your body.",
        prompt: "Where should your hands start in the stance?",
        options: [
          "Low and in front, near the front hip",
          "Near the back shoulder, grip firm but relaxed",
          "High above your head for a downward chop",
          "Wherever feels comfortable — it doesn't matter",
        ],
        correctIndex: 1,
        explanation: "Hands near the back shoulder create the shortest, most direct path to the ball. Starting low and forward forces a longer, slower arc that causes pop-ups and late contact.",
      },
      {
        id: "bb2-01-s3", label: "Pick a Trigger",
        situation: "You're a developing hitter still learning to time pitches. You're tempted to copy Ohtani's dramatic high leg kick.",
        prompt: "What trigger should you start with?",
        options: [
          "A high leg kick — it generates the most power",
          "No trigger at all — never move before the pitch",
          "A simple, repeatable toe-tap or small weight shift",
          "A different trigger on every pitch to stay unpredictable",
        ],
        correctIndex: 2,
        explanation: "A simple, consistent trigger like a toe-tap loads the swing with far less timing risk than a big leg kick. Master a repeatable trigger first; complex kicks are hard to land in sync with the pitch.",
      },
      {
        id: "bb2-01-s4", label: "Weight Distribution",
        situation: "The pitcher is in his windup. You realize your weight has settled back onto your heels.",
        prompt: "What should you do before the pitch?",
        options: [
          "Shift your weight onto the balls of your feet",
          "Stay on your heels — it prevents lunging",
          "Lean even further back for more power",
          "Lock your ankles to stay steady",
        ],
        correctIndex: 0,
        explanation: "Athletes react from the balls of their feet. Weight on the heels locks the ankles and forces you to shift forward before you can even move — milliseconds you don't have against a 95-mph fastball.",
      },
    ],
  },

  "baseball-2-02": {
    intro: "A 95-mph fastball gives you under 400 milliseconds. Reading the pitcher early — his tendencies, his tells, the tunnel — is how you buy time. Make the recognition calls.",
    spots: [
      {
        id: "bb2-02-s1", label: "Spot the Tell",
        situation: "You notice this pitcher's release point drops about two inches every time he throws his curveball.",
        prompt: "How should you use this?",
        options: [
          "Ignore it — release differences are too small to matter",
          "Treat the lower release as advance notice that a curveball is coming",
          "Assume every pitch is now a curveball",
          "Only watch the catcher's glove instead",
        ],
        correctIndex: 1,
        explanation: "A consistent release-point difference is a 'tell' — a fraction of a second of advance warning before the ball even leaves the hand. At 90+ mph, even a small head start is a real edge.",
      },
      {
        id: "bb2-02-s2", label: "Same Tunnel",
        situation: "Two pitchers throw 94. Pitcher A's fastball and curve share the same tunnel; Pitcher B's curve breaks out of the tunnel five feet earlier.",
        prompt: "Which is harder to hit?",
        options: [
          "Pitcher B — the early break gives more time to react",
          "They're identical — tunneling doesn't matter",
          "Pitcher A — shared tunnel hides the pitch type longer",
          "Whichever throws more curveballs",
        ],
        correctIndex: 2,
        explanation: "Pitcher A is tougher. When pitches share a tunnel they look identical for the longest possible time, leaving you the least time to identify and adjust. Pitcher B's early break is an earlier visual cue.",
      },
      {
        id: "bb2-02-s3", label: "Read the Spin",
        situation: "You're trying to identify pitch type from the seam rotation out of the hand.",
        prompt: "Which read matches a fastball?",
        options: [
          "Pure backspin — a tight ring or 'dot' of rotation",
          "Forward topspin tumbling over the top",
          "A small, tilted lateral spin",
          "No visible spin at all",
        ],
        correctIndex: 0,
        explanation: "A four-seam fastball shows pure backspin. Topspin tumbling forward is a curveball; a tight tilted dot is a slider. Reading spin early is how elite hitters predict location.",
      },
      {
        id: "bb2-02-s4", label: "Use Your Homework",
        situation: "Your pre-game study shows this pitcher throws a fastball up-and-in 78% of the time in 2-0 counts. You just worked the count to 2-0.",
        prompt: "How does this change your approach?",
        options: [
          "It doesn't — video never matches the game",
          "Sit on the fastball up-and-in and be ready to drive it",
          "Look away — he'll do the opposite of the data",
          "Take the pitch no matter what",
        ],
        correctIndex: 1,
        explanation: "Knowing the tendency lets you narrow four possible pitches down to essentially one in that count — a perceptual time advantage. Studied anticipation, not guessing, is how hitters crush pitches in known situations.",
      },
    ],
  },

  "baseball-2-03": {
    intro: "A great swing is a kinetic chain firing from the ground up, finishing at the perfect launch angle. Make the mechanical decisions that turn hard contact into hits.",
    spots: [
      {
        id: "bb2-03-s1", label: "Find the Power",
        situation: "You're a smaller hitter swinging with all arms and upper body — big arm swing, no hip rotation. Your exit velo tops out around 65 mph.",
        prompt: "Where does real bat speed come from?",
        options: [
          "Just lifting heavier weights for stronger arms",
          "A heavier bat to add mass",
          "Engaging the full kinetic chain — hips and core driving the hands",
          "Swinging earlier on every pitch",
        ],
        correctIndex: 2,
        explanation: "The kinetic chain multiplies force: legs and hips transfer momentum into the core, then shoulders, then hands. An arms-only swing uses a fraction of the available power — mechanics beat size.",
      },
      {
        id: "bb2-03-s2", label: "Launch Angle",
        situation: "You smash a ball at 102 mph exit velocity — but at a -5 degree launch angle. It's an easy ground-ball out.",
        prompt: "What turns this into a hit?",
        options: [
          "Nothing — 102 mph should be a hit at any angle",
          "Match your swing plane to the pitch and lift it into the 10–30 degree range",
          "Swing even harder for more exit velocity",
          "Aim everything to the opposite field on the ground",
        ],
        correctIndex: 1,
        explanation: "A 102-mph grounder is still a grounder. Hard contact at 10–30 degrees becomes line drives and home runs; matching swing plane to the pitch's approach angle is the key adjustment.",
      },
      {
        id: "bb2-03-s3", label: "Contact Point",
        situation: "A fastball is thrown on the inside corner. You contact it deep, near your back hip, and it dribbles weakly to the second baseman.",
        prompt: "What's the fix for inside pitches?",
        options: [
          "Hit them out in front of the plate — fire the hips a touch sooner",
          "Let them travel even deeper next time",
          "Use a heavier bat",
          "Contact point is the same for every location",
        ],
        correctIndex: 0,
        explanation: "Inside pitches must be hit out in front. Wait too long and you contact them near the back hip with a closed path, producing weak grounders. Outside pitches are the opposite — stay deep and drive them the other way.",
      },
      {
        id: "bb2-03-s4", label: "Separation",
        situation: "Your coach says your hips and hands are firing at the same time and you've lost your whip.",
        prompt: "What is hip-hand separation?",
        options: [
          "Spreading the hands apart on the grip",
          "The hips begin rotating before the hands release, creating a whip effect",
          "Moving hips and hands to opposite sides of the plate",
          "Keeping the front hip from flying open",
        ],
        correctIndex: 1,
        explanation: "Separation (or 'lag') is the brief stretch where the hips have started rotating but the hands haven't released yet. Like cracking a whip, the handle moves first and the barrel follows — that's where bat speed comes from.",
      },
    ],
  },

  "baseball-2-04": {
    intro: "The best pitch to hit is one you choose. Plate discipline — swing at strikes, take balls, manage the count — is one of the hardest mental skills in the game. Make the calls.",
    spots: [
      {
        id: "bb2-04-s1", label: "3-0 Green Light",
        situation: "You're 3-0 with the green light to swing. The pitcher has to throw a strike or walk you.",
        prompt: "What should you look for?",
        options: [
          "A fastball in your specific zone you can drive hard",
          "Swing at any strike anywhere — it's a free swing",
          "Bunt to catch him off guard",
          "Swing at the next pitch no matter the location",
        ],
        correctIndex: 0,
        explanation: "A 3-0 green light means selectively aggressive, not blindly aggressive. Hunt a fastball in the location you crush; if it's at the knees or on the edge where you can't drive it, take the ball and earn the walk.",
      },
      {
        id: "bb2-04-s2", label: "OBP vs. AVG",
        situation: "Player A hits .320 with a .340 OBP (20 walks). Player B hits .270 with a .390 OBP (85 walks). Both played 150 games.",
        prompt: "Who is more valuable offensively?",
        options: [
          "Player A — batting average matters most",
          "They're equal — the walks cancel the average",
          "Player B — he reaches base far more often via walks",
          "Can't tell without home run totals",
        ],
        correctIndex: 2,
        explanation: "Player B reaches base roughly 30 more times over the season. Every time on base is a scoring chance, and his ~85 walks force the pitcher to fail. Avoiding outs is what wins, and OBP measures it.",
      },
      {
        id: "bb2-04-s3", label: "Two-Strike Zone",
        situation: "You're 0-2. The pitcher throws a breaking ball that catches the bottom of the zone — borderline, could be called either way.",
        prompt: "What's the right approach?",
        options: [
          "Take it — never expand the zone, even at 0-2",
          "Protect the plate — swing at anything that could be called a strike",
          "Step out and reset",
          "Swing only at pitches down the middle",
        ],
        correctIndex: 1,
        explanation: "At 0-2 your zone expands. With no room for error, you swing at anything an umpire might call a strike to stay alive. This isn't chasing pitches in the dirt — it's shifting your threshold to protect the plate.",
      },
      {
        id: "bb2-04-s4", label: "Lay Off the Corner",
        situation: "It's 2-2, bases empty, your team down 1-0. The pitch is just off the outside corner — a ball by an inch. Teammates yell to swing.",
        prompt: "Swing or take?",
        options: [
          "Swing — be aggressive with your team behind",
          "Take it — a ball off the corner stays a ball, and 3-2 gives you a better pitch",
          "Swing only because the count is close",
          "Bunt for a hit",
        ],
        correctIndex: 1,
        explanation: "Taking a true ball on 2-2 works the count to 3-2, where the pitcher still must throw a strike. Discipline beats emotion — don't chase just because the count is tight. A 3-2 walk is as good as a single.",
      },
    ],
  },

  "baseball-2-05": {
    intro: "Power isn't about size — it's efficient force transfer at the right moment. Make the decisions that separate weak fly balls from tape-measure damage.",
    spots: [
      {
        id: "bb2-05-s1", label: "Bat Choice",
        situation: "You're choosing between a heavy bat you can barely whip through the zone and a lighter bat you can swing noticeably faster.",
        prompt: "Which produces more exit velocity for you?",
        options: [
          "The lighter bat you can swing faster",
          "The heaviest bat available — more mass always wins",
          "Bat weight has no effect on exit velocity",
          "Whichever bat looks more intimidating",
        ],
        correctIndex: 0,
        explanation: "Bat speed is the most direct driver of exit velocity. A lighter bat you can whip faster usually beats a heavy bat you struggle to accelerate. Don't sacrifice bat speed chasing mass.",
      },
      {
        id: "bb2-05-s2", label: "Pull Power",
        situation: "A fastball comes in on the inner half and you want to drive it for maximum power.",
        prompt: "Where should you make contact?",
        options: [
          "Out in front of the plate, pulling it in the air",
          "Deep near your back hip",
          "Right at the back tip of the plate",
          "It doesn't matter for power",
        ],
        correctIndex: 0,
        explanation: "Pull power comes from getting the barrel to the inner-half ball early, out in front, while the swing is still accelerating. The physics favor it — that's why most home runs are pulled in the air.",
      },
      {
        id: "bb2-05-s3", label: "Oppo Pitch",
        situation: "The pitch is on the outer third. You have average bat speed and you're tempted to yank it to the pull side.",
        prompt: "What's the smart play on an outside pitch?",
        options: [
          "Try to pull it hard for a home run",
          "Stay back and drive it with authority the other way",
          "Always bunt outside pitches",
          "Swing as early as possible",
        ],
        correctIndex: 1,
        explanation: "Trying to pull an outside pitch produces weak grounders to the shortstop side. Staying back and driving it the opposite way is the high-percentage play. True oppo power is the signature of elite bat speed.",
      },
      {
        id: "bb2-05-s4", label: "Launch for Power",
        situation: "You want to maximize home run production, not just hard grounders.",
        prompt: "What launch angle range are you aiming for?",
        options: [
          "0–5 degrees — flat and hard",
          "Above 40 degrees — high fly balls",
          "Roughly 20–35 degrees",
          "Straight down for backspin",
        ],
        correctIndex: 2,
        explanation: "Home runs cluster in the 20–35 degree launch range. Flat contact (0–5°) is grounders; above 40° is easy pop-ups. Combine hard exit velocity with that window to do real damage.",
      },
    ],
  },

  "baseball-2-06": {
    intro: "When you're behind in the count or just need to put the ball in play, contact hitting takes over. Choke up, shorten up, and battle. Make the two-strike calls.",
    spots: [
      {
        id: "bb2-06-s1", label: "Choke Up",
        situation: "You're down 0-2 against a power pitcher and keep getting beaten by velocity. You want quicker, more controlled bat-to-ball.",
        prompt: "What adjustment helps most?",
        options: [
          "Choke up on the handle to shorten and quicken the swing",
          "Grip the very end for more leverage",
          "Take a bigger leg kick",
          "Swing harder than ever",
        ],
        correctIndex: 0,
        explanation: "Choking up shortens the lever, increasing bat control and quickness through the zone at the small cost of a little power — exactly the trade you want with two strikes against velocity.",
      },
      {
        id: "bb2-06-s2", label: "Two-Strike Approach",
        situation: "You have two strikes. With no strikes you'd be hunting a pitch to drive for power.",
        prompt: "How should your approach change?",
        options: [
          "Keep swinging for the fences — power always",
          "Shorten up, widen the zone you protect, and focus on putting the ball in play",
          "Take every pitch and hope for a walk",
          "Bunt every two-strike pitch",
        ],
        correctIndex: 1,
        explanation: "A two-strike approach trades power for contact: choke up, shorten the swing, protect the expanded zone, and battle to stay alive. Putting the ball in play keeps the at-bat alive and pressures the defense.",
      },
      {
        id: "bb2-06-s3", label: "What .300 Means",
        situation: "A teammate is frustrated, saying a .300 hitter 'fails 70% of the time' and isn't worth much.",
        prompt: "How do you frame a .300 average?",
        options: [
          "He's right — .300 is a poor, replaceable number",
          "Batting average is meaningless, ignore it entirely",
          "A .300 average is elite — among the best hitters in the game",
          "Only home runs count, average is irrelevant",
        ],
        correctIndex: 2,
        explanation: "Hitting a round ball with a round bat is the hardest skill in sports; a .300 average is consistently elite. Failure is built into hitting, which is why contact skill and a short, repeatable swing are so valuable.",
      },
      {
        id: "bb2-06-s4", label: "Beat the Shift",
        situation: "The defense has loaded one side of the infield against your pull tendency, daring you to go the other way.",
        prompt: "What's the high-percentage counter?",
        options: [
          "Use the whole field — go with the outside pitch the other way",
          "Pull everything even harder into the shift",
          "Always bunt down the open line on every pitch",
          "Swing for a home run every at-bat",
        ],
        correctIndex: 0,
        explanation: "A contact hitter who can stay inside the ball and drive it to the open field — like Tony Gwynn did for decades — neutralizes the shift. Forcing pulled grounders into a stacked side just feeds the defense.",
      },
    ],
  },

  "baseball-2-07": {
    intro: "Velocity tests your timing more than your strength. Beating the fastball is about being on time and keeping your hands inside the ball. Make the timing decisions.",
    spots: [
      {
        id: "bb2-07-s1", label: "Get the Foot Down",
        situation: "You're consistently late on fastballs — fouling them off to the opposite side or swinging through.",
        prompt: "What's the core timing fix?",
        options: [
          "Start your load and get your front foot down earlier so you're on time",
          "Add a bigger leg kick to generate more power",
          "Wait longer before starting your swing",
          "Choke up and stop striding entirely",
        ],
        correctIndex: 0,
        explanation: "Being late on velocity is a timing problem. Starting the load earlier and getting the front foot down on time lets the hands fire in sync with the pitch instead of rushing to catch up.",
      },
      {
        id: "bb2-07-s2", label: "Hands Inside the Ball",
        situation: "An inside fastball keeps tying you up and you hit weak foul balls off the handle.",
        prompt: "What does 'keep your hands inside the ball' fix?",
        options: [
          "It means casting the barrel out early",
          "It keeps the hands tight to the body so the barrel stays on the inside pitch and turns on it",
          "It means dropping the hands toward the dirt",
          "It only applies to outside pitches",
        ],
        correctIndex: 1,
        explanation: "Keeping the hands inside the ball keeps the barrel on a tight, direct path so you can turn on the inside fastball instead of casting around it and getting jammed. It's the cure for being beaten inside.",
      },
      {
        id: "bb2-07-s3", label: "Don't Overcommit",
        situation: "You're guessing fastball on every pitch and getting badly fooled when an off-speed pitch comes.",
        prompt: "What's the better mental approach against a hard thrower?",
        options: [
          "Keep sitting dead-red fastball and ignore everything else",
          "Be ready for velocity but stay back enough to adjust to off-speed",
          "Guess off-speed every pitch instead",
          "Close your eyes and swing hard",
        ],
        correctIndex: 1,
        explanation: "Gear up for the fastball but don't fully commit so early that an off-speed pitch buries you. Staying back just enough to adjust is what lets a hitter handle both velocity and the changeup.",
      },
      {
        id: "bb2-07-s4", label: "Pitching Machine Trap",
        situation: "You crush a 90-mph pitching machine in the cage but struggle against a live 88-mph pitcher.",
        prompt: "Why the gap, and what should you train?",
        options: [
          "The machine is faster — you just need a faster machine",
          "A machine gives no windup or release cues, so add live BP and recognition work for real timing",
          "You should only ever train on the machine",
          "Live pitching is easier, so the gap is random",
        ],
        correctIndex: 1,
        explanation: "A machine offers no arm action or release point to time off of. Live pitching requires reading the delivery — so live BP and pitch-recognition work, not just machine reps, build real game timing.",
      },
    ],
  },

  "baseball-2-08": {
    intro: "Breaking balls are designed to make you commit early and miss. Staying back and recognizing spin is the whole game. Make the calls against the bender.",
    spots: [
      {
        id: "bb2-08-s1", label: "Stay Back",
        situation: "You keep lunging at curveballs and rolling over weak grounders because your weight drifts forward early.",
        prompt: "What's the key adjustment?",
        options: [
          "Stay back, keep your weight loaded, and let the breaking ball travel",
          "Charge forward to attack it earlier",
          "Swing as soon as it leaves the hand",
          "Close your stance and lunge",
        ],
        correctIndex: 0,
        explanation: "Breaking balls break late and down. Staying back with your weight loaded lets the pitch finish breaking so you can adjust, instead of lunging out front and rolling over it for a weak grounder.",
      },
      {
        id: "bb2-08-s2", label: "Curve vs. Slider",
        situation: "You're trying to tell the difference between a curveball and a slider out of the hand.",
        prompt: "Which best describes a curveball's movement?",
        options: [
          "A late, tight horizontal cut",
          "A bigger, slower top-to-bottom break (12-to-6 shape)",
          "Straight with backspin",
          "Fades down and away with fastball arm speed",
        ],
        correctIndex: 1,
        explanation: "A curveball has a bigger, slower top-to-bottom break (toward 12-to-6). A slider is faster with a tight, late lateral cut; a changeup fades down-and-away with fastball arm speed. Reading the shape sets your timing.",
      },
      {
        id: "bb2-08-s3", label: "The Changeup",
        situation: "A pitcher's changeup keeps fooling you — it looks like a fastball out of the hand but arrives 8–10 mph slower.",
        prompt: "Why is the changeup so effective, and what's the fix?",
        options: [
          "It spins backwards — just watch for spin and you're fine",
          "It mimics fastball arm speed so you commit early; the fix is to stay back and not rush",
          "It's always thrown for a ball, so just take it",
          "It moves too little to matter — ignore it",
        ],
        correctIndex: 1,
        explanation: "The changeup's fastball arm speed makes your brain say 'fastball' and fire early, so the slower ball arrives after you've committed. Staying back and trusting your timing — not rushing — is the counter.",
      },
      {
        id: "bb2-08-s4", label: "Recognize Spin Early",
        situation: "You want to identify breaking balls sooner so you're not fooled.",
        prompt: "What should you train your eyes to read?",
        options: [
          "The seam rotation and spin out of the release point",
          "The catcher's signs before the pitch",
          "The scoreboard between pitches",
          "Nothing — recognition can't be trained",
        ],
        correctIndex: 0,
        explanation: "Elite hitters read spin out of the hand — topspin tumble for a curve, a tight tilted dot for a slider. Recognition can absolutely be trained, and reading spin early is what buys time to stay back and adjust.",
      },
    ],
  },

  "baseball-2-09": {
    intro: "From Jackie Robinson's bat control to Shohei Ohtani's power, the Dodgers are a hitting dynasty. Each great teaches a lesson. Pick the principle each one embodies.",
    spots: [
      {
        id: "bb2-09-s1", label: "Bat Control",
        situation: "Jackie Robinson was famous for bunting, slashing, and putting the ball exactly where the defense wasn't — not just for raw power.",
        prompt: "What underrated skill does this highlight?",
        options: [
          "Bat control — placing the ball and adjusting to the situation",
          "Swinging for a home run every at-bat",
          "Never bunting under any circumstance",
          "Ignoring the defense entirely",
        ],
        correctIndex: 0,
        explanation: "Bat control — the ability to bunt, slash, and direct the ball where you want — is one of hitting's most underrated weapons. Robinson used it to disrupt defenses far beyond what a power-only approach could.",
      },
      {
        id: "bb2-09-s2", label: "Situational Hitting",
        situation: "Runner on second, nobody out, your team needs to move him to third. A clean single isn't the only goal.",
        prompt: "What's the team-first approach?",
        options: [
          "Swing for a home run regardless of the situation",
          "Hit the ball to the right side to advance the runner to third",
          "Take all the way hoping for a walk",
          "Bunt foul on purpose",
        ],
        correctIndex: 1,
        explanation: "With a runner on second and nobody out, hitting the ball to the right side advances him to third where he can score on a fly ball or grounder. Situational hitting puts the team's run ahead of personal stats.",
      },
      {
        id: "bb2-09-s3", label: "Power Threat",
        situation: "Shohei Ohtani's elite bat speed and 80+ mph swing speed make pitchers afraid to challenge him in the zone.",
        prompt: "How does that power help even when he doesn't homer?",
        options: [
          "It doesn't help unless he actually hits a home run",
          "Pitchers nibble and avoid the zone, leading to more walks and better pitches to hit",
          "It forces him to swing at everything",
          "It only matters with the bases empty",
        ],
        correctIndex: 1,
        explanation: "A genuine power threat changes how pitchers attack — they nibble, miss the zone, and walk him or eventually give in with a hittable pitch. The threat of power creates value beyond the home runs themselves.",
      },
      {
        id: "bb2-09-s4", label: "Clutch Preparation",
        situation: "Duke Snider's four-homer 1955 World Series and Freeman's 2024 walk-off grand slam looked like magic moments — but they came from something repeatable.",
        prompt: "What really produces clutch hits?",
        options: [
          "Pure luck in the big moment",
          "Preparation and a repeatable approach that holds up under pressure",
          "Swinging harder than usual when it counts",
          "Abandoning your normal approach in big spots",
        ],
        correctIndex: 1,
        explanation: "Great postseason moments come from preparation and a trusted, repeatable approach — studied anticipation, not magic. Freeman's grand slam came from knowing the pitcher; the moment just revealed the prep.",
      },
    ],
  },

  "baseball-2-10": {
    intro: "Hitters are built in the cage, not just the game. Tee work, soft toss, BP, and video are how pros train. Make the decisions that build a real hitting routine.",
    spots: [
      {
        id: "bb2-10-s1", label: "Tee Work",
        situation: "A teammate dismisses hitting off a tee as 'too basic' for serious players.",
        prompt: "What's the truth about the tee?",
        options: [
          "He's right — the tee is only for little kids",
          "The tee is one of the best tools for grooving a repeatable swing and isolating mechanics",
          "The tee teaches bad habits and should be avoided",
          "Only use the tee the day before a game",
        ],
        correctIndex: 1,
        explanation: "Even MLB hitters use the tee daily. Removing the variable of a moving ball lets you isolate and groove swing mechanics — contact point, path, extension — through high-quality repetition. It's foundational, not basic.",
      },
      {
        id: "bb2-10-s2", label: "Drill Progression",
        situation: "You're building a cage session and want it to transfer to live at-bats.",
        prompt: "What's a sound progression?",
        options: [
          "Tee work, then soft toss, then live BP / pitch recognition",
          "Only ever face live max-effort pitching",
          "Random drills in no particular order",
          "Just swing as hard as possible at everything",
        ],
        correctIndex: 0,
        explanation: "Progressing from tee (isolate mechanics) to soft toss (add timing) to live BP and recognition (game speed) layers skills so the swing transfers to real at-bats. Order builds from controlled to game-like.",
      },
      {
        id: "bb2-10-s3", label: "Use the Video",
        situation: "You feel like your swing is fine but you keep getting the same weak results, and you have phone video of your cuts.",
        prompt: "How should you use the video?",
        options: [
          "Don't bother — feel is more reliable than video",
          "Review it to compare what you feel against what your swing actually does and find the flaw",
          "Only watch highlights of pros, never yourself",
          "Delete it so you don't overthink",
        ],
        correctIndex: 1,
        explanation: "Feel and real often differ. Video lets you compare what you think you're doing against what actually happens, exposing flaws like a long path or drifting weight. It's how modern hitters self-correct.",
      },
      {
        id: "bb2-10-s4", label: "Train with Purpose",
        situation: "You take 200 fast, mindless hacks in the cage just to feel productive.",
        prompt: "What's the better way to practice?",
        options: [
          "Quality over quantity — fewer, focused reps with a clear intent each round",
          "Always max out the rep count, focus doesn't matter",
          "Only practice when you feel like it",
          "Skip the cage and just play games",
        ],
        correctIndex: 0,
        explanation: "Mindless reps groove sloppiness. Pros train with intent — each round has a focus (contact point, staying back, oppo drive). Fewer high-quality, deliberate reps build a better swing than hundreds of careless ones.",
      },
    ],
  },
};
