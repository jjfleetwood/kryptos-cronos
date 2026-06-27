import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Advanced Mechanics (baseball-3) epoch.
// Each spot is a deterministic, knowledge-based hitting decision — the marked
// answer reflects real baseball biomechanics and coaching, never a coin-flip
// outcome. correctIndex and explanation are stripped server-side before the
// client renders the spot.
export const baseball3Scenarios: Record<string, ScenarioConfig> = {
  "baseball-3-01": {
    intro:
      "You're in the cage at Dodger Stadium working on the X-factor — hip-shoulder separation. Make the calls a hitting coach would make.",
    spots: [
      {
        id: "bb3-01-s1",
        label: "Read the Coil",
        situation:
          "On video at front-foot landing, your hips are 45° open but your front shoulder is already 30° open.",
        prompt: "What does this tell you about your separation?",
        options: [
          "Only ~15° of separation — your shoulder is leaking open early, bleeding off stored torque",
          "55° of separation — elite, leave it alone",
          "Separation doesn't exist until after contact",
          "Perfect — hips and shoulders should match angles at landing",
        ],
        correctIndex: 0,
        explanation:
          "Separation is the gap between hip and shoulder angle at landing: 45° − 30° = ~15°. That's low for power because the shoulder opened with the hips instead of staying coiled behind them. Elite power hitters hold 40–55°. Your shoulder is 'spinning out' early, releasing the rubber-band tension before the swing can use it.",
      },
      {
        id: "bb3-01-s2",
        label: "Pick the Drill",
        situation:
          "You keep opening the front shoulder too soon and want a constraint that physically stops it.",
        prompt: "Which drill best isolates hip-first sequencing?",
        options: [
          "Soft-toss to the opposite field with no stride",
          "The wall drill — front shoulder near a fence so the hips must clear while the shoulder stays back",
          "Heavy-bat swings for bat speed",
          "One-handed top-hand drives for extension",
        ],
        correctIndex: 1,
        explanation:
          "The wall drill makes early shoulder rotation impossible — the fence is in the way, so the only thing that can move is the hips clearing toward the catcher. It forces the feel of pure hip-first sequencing and the oblique stretch that is the X-factor tension. It teaches through constraint, not instruction.",
      },
      {
        id: "bb3-01-s3",
        label: "Two-Strike Trade",
        situation:
          "Two strikes, and your coach asks you to dial back your big coil for a more controlled rotation.",
        prompt: "Why reduce separation here?",
        options: [
          "Less separation makes the ball go farther on contact",
          "Umpires call aggressive hip rotation a violation with two strikes",
          "A smaller coil needs less precise timing, giving a quicker, more adjustable swing to protect the widened zone",
          "Separation only helps against off-speed pitches",
        ],
        correctIndex: 2,
        explanation:
          "More separation = more power but a tighter timing window — the coil must release at exactly the right instant. With two strikes you prioritize bat-to-ball over max power, so trimming the coil shortens the timing demand and makes the swing more direct and adjustable. It's a deliberate, intelligent gear change, not a flaw.",
      },
      {
        id: "bb3-01-s4",
        label: "Copying Ohtani",
        situation:
          "A youth player wants to copy Ohtani's leg kick exactly to get his 52° separation and 54 homers.",
        prompt: "What's the right coaching response?",
        options: [
          "Go for it — if the kick works for Ohtani it works for anyone",
          "Build separation from the ground up first; copying the visible trigger without the trained mobility, strength, and timing just creates timing errors",
          "Tell them separation only works for left-handed hitters",
          "Tell them they need to be over six feet tall first",
        ],
        correctIndex: 1,
        explanation:
          "Ohtani's separation is the output of years of hip mobility, rotational strength, and a timing mechanism grooved to land precisely. Copy the leg kick without the underlying mechanics and you land with unpredictable weight, fire hips and shoulders together anyway, and scramble your timing across speeds. Start with wall and hip-first tee work, then add load gradually as timing stabilizes.",
      },
    ],
  },

  "baseball-3-02": {
    intro:
      "Camelback Ranch, slow-motion cameras rolling. The hands deliver the bat — let's keep the path clean.",
    spots: [
      {
        id: "bb3-02-s1",
        label: "Spot the Flaw",
        situation:
          "At hip fire, your front arm has already extended and the barrel is level with your hands, out front.",
        prompt: "What is this, and why does it cost you?",
        options: [
          "Inside-out path — ideal, keep it",
          "Bat drag — the barrel peaks and starts decelerating before it reaches the ball, so it arrives slow and late",
          "A normal load that has no effect on contact",
          "Good extension that adds power on every pitch",
        ],
        correctIndex: 1,
        explanation:
          "That's bat drag: the front arm straightens too early, pushing the barrel forward before it should release. Bat speed peaks during acceleration behind a compact path — if the barrel extends early, its top speed happens before contact and it's decelerating at the ball. Like a whip, extend the arm too soon and the tip slows before the crack.",
      },
      {
        id: "bb3-02-s2",
        label: "Jammed Inside",
        situation:
          "A pitcher keeps beating you inside at 97 and sawing you off near the label.",
        prompt: "What path fix gets the barrel to the inside pitch in time?",
        options: [
          "Drive the knob directly at the ball, hands tight to the body, so the barrel trails on a short path and arrives early on the inner half",
          "Step in the bucket to pull everything",
          "Swing harder with the arms to beat the fastball",
          "Drop the back shoulder to lift the inside pitch",
        ],
        correctIndex: 0,
        explanation:
          "Getting jammed means the barrel reaches the inner half late, having traveled a long outer arc (bat drag). The 'knob-to-ball' cue keeps the barrel trailing on the shortest route so it gets to the inside contact point out front, where inside pitches must be hit. The path change alone — no extra force — fixes the jamming.",
      },
      {
        id: "bb3-02-s3",
        label: "Williams or Gwynn",
        situation:
          "A developing hitter asks whether to model Ted Williams' longer rotational path or Tony Gwynn's ultra-compact one.",
        prompt: "How do you advise them?",
        options: [
          "Always Williams — power beats contact in every situation",
          "Always Gwynn — contact hitters always last longer",
          "Build the compact (Gwynn) path first, then add rotational load for power later — a short path can be lengthened, but a long draggy one is hard to shorten",
          "The two paths are mechanically identical anyway",
        ],
        correctIndex: 2,
        explanation:
          "Both were elite and intentional — Williams' slightly longer arc maximized torque in his zone; Gwynn's compact path minimized miss risk everywhere. For a developing hitter, foundation first: groove the short, barrel-trailing path, then expand toward more rotational load as power develops. Shortening a long, draggy swing later is much harder.",
      },
      {
        id: "bb3-02-s4",
        label: "Why the Pause",
        situation:
          "At spring training you do 200 reps pausing the swing at hip fire to check the barrel is still trailing.",
        prompt: "Why does the paused checkpoint help fix bat drag?",
        options: [
          "It builds forearm strength, the real cause of drag",
          "It creates a conscious neurological checkpoint exactly where drag begins, training the brain to verify barrel position before releasing",
          "It only works at Camelback Ranch's altitude",
          "It permanently slows the swing so the barrel can catch up",
        ],
        correctIndex: 1,
        explanation:
          "Motor learning says inserting a conscious check at the precise moment a bad habit fires accelerates correction. Drag starts at hip fire, so pausing there — 'knob forward, barrel trailing? proceed' — installs an interrupt that becomes automatic at full speed. The pause is scaffolding, removed once the correct position is habitual.",
      },
    ],
  },

  "baseball-3-03": {
    intro:
      "Petco Park, Statcast on the board. Barrel management is all about matching your swing plane to the pitch plane.",
    spots: [
      {
        id: "bb3-03-s1",
        label: "Ground-Ball Machine",
        situation:
          "A four-seam fastball approaches at -8°. Your attack angle is -3° (slightly down) and you pound 95-mph grounders every time.",
        prompt: "What's the fix?",
        options: [
          "Nothing — a downward attack angle is correct for fastballs",
          "Raise attack angle to about +8° so the bat climbs into the descending pitch, opening a wide plane-overlap window and driving the ball",
          "Swing even more downward to 'stay on top'",
          "Nothing can be done — the pitch's plane decides launch angle",
        ],
        correctIndex: 1,
        explanation:
          "At -3° into a -8° pitch, both move down but the ball descends faster, so the bat clips the bottom for backspin grounders. Swing up at +8° against a -8° descent and the planes meet across ~16° of overlap — a big contact window and balls driven in the air. This is exactly why the old 'swing down' cue was abandoned.",
      },
      {
        id: "bb3-03-s2",
        label: "Curveball Hole",
        situation:
          "You barrel fastballs at 15% but curveballs at just 3%, using the same +8° attack angle on both.",
        prompt: "What adjustment does barrel management call for?",
        options: [
          "Flatten to 0° on curveballs",
          "It's pure timing — leave the swing plane alone",
          "Steepen attack angle to about +14–15° on curveballs to match their -14° to -20° descent and widen the overlap",
          "The 5° difference is within measurement error and irrelevant",
        ],
        correctIndex: 2,
        explanation:
          "A curveball descends far more steeply (-14° to -20°) than a fastball (-6° to -8°). A +8° swing into a -18° curve leaves a small, low-on-the-barrel window. Bumping attack angle to ~+15° creates roughly 33° of overlap — a much bigger window. The cue is 'get up and through the curveball,' swinging more steeply up to match the steeper drop.",
      },
      {
        id: "bb3-03-s3",
        label: "Average Lies",
        situation:
          "Hitter A bats .285 with an 8% barrel rate; Hitter B bats .260 with a 16% barrel rate. Analytics call B more valuable.",
        prompt: "Why is the lower-average hitter worth more?",
        options: [
          "They're not — batting average is the better value indicator",
          "Barrel rate measures contact quality consistently; a 16% rate means B regularly produces extra-base, high-slug contact that creates more runs, even with hard-hit balls caught for outs",
          "Barrel rate only matters for home-run hitters",
          "8% vs 16% is statistical noise over a season",
        ],
        correctIndex: 1,
        explanation:
          "Barrel rate captures elite contact — balls both hard and at optimal launch angles. A 16% rate means roughly every sixth plate appearance is a 'barrel' that goes for extra bases at a high clip. B's .260 likely hides bad luck (rockets caught by defense). Over a full season, 16% predicts far more runs created than 8% regardless of the current average.",
      },
      {
        id: "bb3-03-s4",
        label: "Freeman's Report",
        situation:
          "Freddie Freeman's curveball attack angle drifts to +6° (optimal +14°) on a road trip; analytics flags it.",
        prompt: "What does the staff do?",
        options: [
          "Rest him until the drift self-corrects",
          "Bench him — analytics show rest fixes mechanical drift",
          "Change his stance, since drift comes from foot position",
          "Add breaking-ball tee work with a higher tee to force a steeper attack angle and re-groove the plane before it becomes a slump",
        ],
        correctIndex: 3,
        explanation:
          "Targeted practice, not rest or lineup moves: raising the tee and driving the barrel steeply through a higher contact point physically re-grooves the steeper angle breaking balls need. After 100–200 high-tee reps the feel recalibrates. This feedback loop catches minor drift in the next day's BP and keeps Freeman's season-long barrel rate steady.",
      },
    ],
  },

  "baseball-3-04": {
    intro:
      "Camelback Ranch minor-league fields. The load is a clock — start on time or nothing downstream can be.",
    spots: [
      {
        id: "bb3-04-s1",
        label: "Pick the Trigger",
        situation:
          "A 14-year-old with inconsistent timing — sometimes early, sometimes late on the same speed — asks: leg kick or toe-tap?",
        prompt: "What do you recommend, and why?",
        options: [
          "Toe-tap — its smaller movement is a narrower timing window to master, cutting error sources while pitch recognition develops",
          "Leg kick — extra power masks timing mistakes",
          "No-stride — eliminate the trigger entirely",
          "Doesn't matter — any load fixes timing over time",
        ],
        correctIndex: 0,
        explanation:
          "Inconsistent timing usually means the load adds more variability than the hitter's recognition can absorb. A leg kick's ±12ms landing window leaves little margin; a toe-tap (under ±20ms but far simpler and more repeatable) gives more room while recognition matures. Build timing on the simple trigger first, then add a bigger load. A leg kick on shaky timing amplifies the problem.",
      },
      {
        id: "bb3-04-s2",
        label: "Fooled by the Change",
        situation:
          "Four 96-mph fastballs, perfect contact. Fifth pitch is an 84-mph changeup; your foot lands on time but you're way out front for a weak grounder.",
        prompt: "What happened?",
        options: [
          "Your load mechanism is wrong and must be replaced",
          "The foot landed fine, but the hips fired immediately instead of 'staying back' to delay hip fire for the slower pitch",
          "Hands too low at landing — raise them for delay",
          "A changeup after fastballs is simply unhittable",
        ],
        correctIndex: 1,
        explanation:
          "Foot landing only starts the sequence. After landing you have ~50ms more on an 84-mph change than a 96-mph fastball to decide when to fire the hips. Fire immediately every time and the changeup is always early. 'Staying back' — consciously delaying hip fire, letting the ball travel farther — is the fix; the 'soft-to-hard' mindset makes that delay the default.",
      },
      {
        id: "bb3-04-s3",
        label: "Cap the Kick",
        situation:
          "A prospect has a big leg kick and shaky timing vs AAA velocity. Staff says keep the kick but limit it to knee height.",
        prompt: "What's the goal of capping the height?",
        options: [
          "A lower kick just looks more professional",
          "It speeds weight to the back foot — the real benefit of kicks",
          "Less air time for the front foot tightens the timing window while still loading the hip enough for meaningful separation",
          "It's cosmetic; mechanics are identical at any height",
        ],
        correctIndex: 2,
        explanation:
          "A higher kick keeps the front foot airborne longer, amplifying any timing variability. Dropping from hip- to knee-high cuts air time (roughly 250ms to 150ms), so the foot lands more consistently relative to release. Yet a knee-high kick still loads the back hip well — preserving ~35–40° of separation for power while cutting timing error sharply.",
      },
      {
        id: "bb3-04-s4",
        label: "Same Pitch, Two Speeds",
        situation:
          "A coach explains that an 85-mph pitch and a 97-mph pitch demand swing initiations about 50ms apart.",
        prompt: "What does an elite hitter do with that 50ms?",
        options: [
          "Use a different load mechanism for each pitch speed",
          "Land the foot, then hold the hips back longer on the slower pitch before firing — 'staying back'",
          "Start the swing identically and hope the barrel adjusts",
          "Step closer to the plate against slower pitches",
        ],
        correctIndex: 1,
        explanation:
          "You can't carry two separate triggers into an at-bat. The adjustability lives after foot landing: on the slower pitch the hitter delays hip fire to use that extra ~50ms, letting the ball travel before committing. The same load handles both speeds — the difference is the hold. That delay is the single biggest changeup-handling skill.",
      },
    ],
  },

  "baseball-3-05": {
    intro:
      "Oracle Park, October. Two strikes. The best hitters change their whole approach to protect the plate and still do damage.",
    spots: [
      {
        id: "bb3-05-s1",
        label: "Expand the Zone",
        situation:
          "You're 1-2. The pitch is just off the outside corner — a borderline strike a good umpire might ring up.",
        prompt: "What's the two-strike approach?",
        options: [
          "Take it — only swing at pitches clearly in the zone",
          "Protect: widen your zone and put the bat on anything close to fight off a called strike three",
          "Swing for the fences — go big or go home",
          "Pull off and try to pull it for power",
        ],
        correctIndex: 1,
        explanation:
          "With two strikes you can't trust a borderline pitch to be called a ball. The mastery move is widening the zone and prioritizing contact — foul it off or put it in play rather than risk a backwards K. You trade some power and selectivity for plate coverage and a longer at-bat.",
      },
      {
        id: "bb3-05-s2",
        label: "Choke Up",
        situation:
          "Down to your last strike against a power arm, you slide your hands an inch up the handle.",
        prompt: "Why does choking up help with two strikes?",
        options: [
          "It adds bat length to reach outside pitches",
          "It increases mass at the barrel for more power",
          "It shortens the effective bat, increasing bat control and quickness so you can catch up to velocity and adjust late",
          "It's superstition with no mechanical effect",
        ],
        correctIndex: 2,
        explanation:
          "Choking up shortens the lever, reducing the bat's moment of inertia so it's quicker and more controllable. You sacrifice a little reach and raw power for faster, more adjustable bat delivery — exactly what you want to fight off velocity and protect the plate with two strikes. It's a skill move, not a concession.",
      },
      {
        id: "bb3-05-s3",
        label: "Spit on the Slider",
        situation:
          "Two strikes, and the pitcher's out-pitch is a slider that starts as a strike then dives below the zone, low and away.",
        prompt: "What discipline keeps you alive?",
        options: [
          "Chase it — you have to protect with two strikes",
          "Recognize the breaking-ball spin/tunnel and lay off the one that finishes out of the zone, trusting it for a ball",
          "Always swing at anything low and away",
          "Close your eyes and guess",
        ],
        correctIndex: 1,
        explanation:
          "Two-strike protection means covering pitches near the zone — not chasing pitches that finish clearly out of it. The best two-strike hitters read spin and the pitch's tunnel early enough to distinguish a strike-finishing slider from one that buries. Laying off the unhittable chase pitch is exactly how .300 two-strike hitters survive.",
      },
      {
        id: "bb3-05-s4",
        label: "Approach, Not Panic",
        situation:
          "A teammate hits .210 with two strikes and treats the count as already lost.",
        prompt: "What separates elite two-strike hitters like Freeman?",
        options: [
          "They swing harder once behind to make up for it",
          "They treat two strikes as a distinct, practiced approach — shorter, contact-first, zone-widened — rather than a lost cause, staying competitive in the at-bat",
          "They take every two-strike pitch hoping for a walk",
          "They have no special approach; it's purely luck",
        ],
        correctIndex: 1,
        explanation:
          "The .300 two-strike hitters aren't lucky — they have a deliberate, rehearsed mode: choke up, shorten the swing, widen the zone, hunt contact, and battle. Treating two strikes as its own skill (not a death sentence) turns would-be strikeouts into foul-offs, walks, and balls in play, dragging a high two-strike average up over a season.",
      },
    ],
  },

  "baseball-3-06": {
    intro:
      "Runner on, game on the line. Situational hitting is putting the team's need ahead of your own line — and executing it.",
    spots: [
      {
        id: "bb3-06-s1",
        label: "Runner on Second, Nobody Out",
        situation:
          "Man on second, no outs, tie game late. Your job is to get the runner to third so a fly ball or grounder can score him.",
        prompt: "What's the textbook situational at-bat?",
        options: [
          "Hit the ball to the right side (behind the runner) so he advances to third even on a groundout",
          "Swing for a home run — go for it all",
          "Try to pull everything to left field",
          "Bunt directly back to the pitcher",
        ],
        correctIndex: 0,
        explanation:
          "With a runner on second and no outs, advancing him to third is the priority — from third he scores on a sac fly, grounder, wild pitch, or squeeze. A ball hit to the right side (second-base side) lets the runner advance even on an out, because he's moving the same direction the ball is going. It's a productive out that trades your at-bat for 90 feet.",
      },
      {
        id: "bb3-06-s2",
        label: "Hit-and-Run",
        situation:
          "Hit-and-run is on: the runner breaks from first with the pitch and you must protect him by making contact.",
        prompt: "What's your responsibility as the hitter?",
        options: [
          "Take the pitch to give the runner a clean steal",
          "Swing and put the ball on the ground — ideally to the right side, through the hole the covering middle infielder vacates",
          "Swing for power to drive the runner in from first",
          "Bunt the runner over",
        ],
        correctIndex: 1,
        explanation:
          "On a hit-and-run, the runner is going regardless, so you must protect him by making contact — preferably a ground ball. Because a middle infielder breaks to cover second on the steal, a hole opens; driving the ball to the right side often finds that vacated spot, moving the runner extra bases or staying out of the double play.",
      },
      {
        id: "bb3-06-s3",
        label: "Sac Fly",
        situation:
          "Runner on third, fewer than two outs, you need one run. The infield is back.",
        prompt: "What contact are you trying to make?",
        options: [
          "A hard ground ball through the middle",
          "A deep fly ball or line drive to the outfield, deep enough for the runner to tag and score",
          "A bunt down the third-base line",
          "A swinging strikeout is fine — just don't ground out",
        ],
        correctIndex: 1,
        explanation:
          "With a runner on third and under two outs, a fly ball deep enough to the outfield lets the runner tag up and score — the sacrifice fly. You're hunting a slight uppercut on a pitch you can elevate, not a grounder (which risks a force/double play at home or an out with no run). Get it in the air, get it deep.",
      },
      {
        id: "bb3-06-s4",
        label: "Read the Defense",
        situation:
          "Runner on third, one out, but the infield is playing in to cut the run off at the plate.",
        prompt: "How does the drawn-in infield change your approach?",
        options: [
          "Nothing changes — keep trying for a grounder",
          "A hard grounder can now sneak through the drawn-in infield for a hit, and any ball in the air or in the gaps is even more dangerous to them — hunt a pitch to drive",
          "Bunt — the infield being in means a bunt always works",
          "Take pitches and hope for a walk",
        ],
        correctIndex: 1,
        explanation:
          "When the infield plays in to stop the run, the holes between fielders get bigger and a hard ground ball that finds a gap both scores the run and goes for a hit. The drawn-in defense also has less range on liners and balls in the air. So you shift from 'just make a productive out' toward driving the ball, since the defense has conceded range to protect the plate.",
      },
    ],
  },

  "baseball-3-07": {
    intro:
      "Dodger Stadium video room. Great hitters don't just react — they predict, building a map of what's coming and when.",
    spots: [
      {
        id: "bb3-07-s1",
        label: "Sit on a Pitch",
        situation:
          "Scouting shows this pitcher throws a first-pitch fastball 80% of the time to get ahead. You're leading off the inning.",
        prompt: "How do you use that tendency?",
        options: [
          "Take the first pitch no matter what to see velocity",
          "Sit fastball early in the count and be ready to ambush the first-pitch heater in your zone",
          "Look for the slider on pitch one",
          "Bunt the first pitch every time",
        ],
        correctIndex: 1,
        explanation:
          "Sitting on a pitch means narrowing your expectation to the most likely offering and committing your timing to it. An 80% first-pitch fastball is a strong tendency — gearing up for it lets you ambush a hittable heater early instead of falling behind. You adjust off it if you see something else, but you hunt the probable pitch.",
      },
      {
        id: "bb3-07-s2",
        label: "Count Leverage",
        situation:
          "You work the count to 3-1. The pitcher needs a strike and rarely throws his slider for a strike in this count.",
        prompt: "What does the count tell you to expect?",
        options: [
          "Expect his best breaking ball in the dirt",
          "Expect a fastball in the zone — hitter's count — and look to drive it, staying selective for your zone",
          "Expect a pitchout",
          "Expect nothing predictable — counts are random",
        ],
        correctIndex: 1,
        explanation:
          "3-1 is a classic hitter's count: the pitcher can't afford ball four and a wild breaking ball, so he leans on the pitch he can locate — usually the fastball. Knowing that, you narrow to a fastball in a specific zone and look to do damage, while still laying off anything outside your spot because you can afford to.",
      },
      {
        id: "bb3-07-s3",
        label: "Sequencing Pattern",
        situation:
          "Video shows this pitcher loves to climb the ladder — fastball up — right after he buries a slider down and in for a swing-and-miss.",
        prompt: "You just swung over a slider down. What's likely next?",
        options: [
          "Another identical slider in the same spot",
          "A fastball up out of the zone, using your downward eye level against you — recognize the pattern and lay off the chase",
          "A changeup right down the middle",
          "An intentional walk",
        ],
        correctIndex: 1,
        explanation:
          "Sequencing is about how pitches play off each other. After a hitter chases a slider down, pitchers love to elevate a fastball — your eyes and bat path are now geared low, making the high pitch tempting and hard to handle. Recognizing the down-then-up tunnel lets you reset your eye level and spit on the climbing fastball.",
      },
      {
        id: "bb3-07-s4",
        label: "Don't Over-Sit",
        situation:
          "You're so locked into 'fastball away' from your scouting report that you're frozen on anything else.",
        prompt: "What's the risk of over-committing to a prediction?",
        options: [
          "There's no risk — always commit fully to the report",
          "If you sit too narrowly, a pitcher who deviates from tendency freezes or fools you; good hitters weight probabilities but stay adjustable to the actual pitch",
          "It only matters against left-handers",
          "Over-sitting improves your two-strike approach",
        ],
        correctIndex: 1,
        explanation:
          "Tendencies are probabilities, not guarantees — pitchers and catchers know hitters study them and will cross you up. Sit too rigidly and any deviation leaves you frozen or way off. The skill is weighting the likely pitch enough to be ready while keeping your recognition open to adjust to what's actually thrown, especially with two strikes.",
      },
    ],
  },

  "baseball-3-08": {
    intro:
      "Conditions change the game — sun, wind, altitude, lights. Smart hitters adjust the plan to the ballpark and the elements.",
    spots: [
      {
        id: "bb3-08-s1",
        label: "Wind Blowing In",
        situation:
          "It's a cold day with a stiff wind blowing straight in from center, knocking down fly balls.",
        prompt: "How should you adjust your approach?",
        options: [
          "Swing for max launch — try to hit it over the wind",
          "Shift toward line drives and hard ground balls, since fly balls die in the wind; use the gaps rather than chasing carry",
          "Bunt every at-bat",
          "Nothing — wind doesn't affect hitting strategy",
        ],
        correctIndex: 1,
        explanation:
          "Wind in from center turns would-be homers into outs and shrinks fly-ball value. The adjustment is to prioritize hard line drives and balls in the gaps that beat the wind, rather than trying to elevate into it. Hitters often flatten their approach slightly and aim to drive the ball on a line in these conditions.",
      },
      {
        id: "bb3-08-s2",
        label: "Altitude at Coors",
        situation:
          "You're at Coors Field in Denver. The thin air both lets the ball carry farther and flattens breaking-ball movement.",
        prompt: "What's the key adjustment hitters make at altitude?",
        options: [
          "Expect breaking balls to break less and stay flatter, so be ready to handle pitches that 'hang' more than at sea level",
          "Choke up because the ball is heavier in thin air",
          "Bunt more because home runs are impossible",
          "Swing down to keep the ball in the park",
        ],
        correctIndex: 0,
        explanation:
          "Thin air means less drag: the ball carries farther (more homers) but breaking pitches get less bite — curveballs and sliders flatten out. Hitters key on the reduced break, sitting on pitches that don't move as sharply as they would at sea level. The carry is a bonus, but the recognition edge is knowing the spin won't break as much.",
      },
      {
        id: "bb3-08-s3",
        label: "Day Game Sun",
        situation:
          "A bright afternoon game, and the sun and shadows are creeping across the plate as the innings pass.",
        prompt: "What's the smart adjustment when visibility is compromised?",
        options: [
          "Swing as aggressively as always — sun doesn't matter",
          "Simplify: shorten up, look fastball/middle, and avoid expanding the zone since you can't track spin and edges as well",
          "Only swing at the first pitch",
          "Close one eye to cut the glare",
        ],
        correctIndex: 1,
        explanation:
          "When sun or a shadow line crosses the plate, pitch recognition suffers — you can't read spin or the edges as cleanly. The disciplined adjustment is to simplify: shorten the swing, hunt the fastball in the middle, and tighten your zone rather than chasing pitches you can't fully see. Hard-to-see conditions reward a smaller, more controlled approach.",
      },
      {
        id: "bb3-08-s4",
        label: "Know the Park",
        situation:
          "You move from a pitcher-friendly park with deep gaps to a small park with a short porch in right.",
        prompt: "How might you tailor your approach to the park?",
        options: [
          "Approach every park identically — park factors are a myth",
          "Lean into what the park gives: in the big park use the gaps for doubles/triples; in the small park a pulled fly to the short porch can leave the yard",
          "Always try to pull everything regardless of park",
          "Always go oppo regardless of park",
        ],
        correctIndex: 1,
        explanation:
          "Park factors are real: deep gaps reward line drives and balls hit to the alleys for extra bases, while a short porch rewards getting the ball in the air to that side. Good hitters subtly tailor their target — using the big field's space, or taking advantage of a short fence — without abandoning their core swing. It's a tilt, not a rebuild.",
      },
    ],
  },

  "baseball-3-09": {
    intro:
      "Every hitter slumps. The skill is diagnosing why — mechanical or mental or just bad luck — and responding like a pro.",
    spots: [
      {
        id: "bb3-09-s1",
        label: "Diagnose First",
        situation:
          "You're 2-for-30 but Statcast shows your exit velocity and barrel rate are right at your career norms — the hits just aren't falling.",
        prompt: "What does the data say is happening?",
        options: [
          "Your swing is broken — overhaul the mechanics immediately",
          "This is likely bad luck (low BABIP), not a mechanical flaw — the contact quality is intact, so stay the course and trust the process",
          "You need a brand-new stance",
          "Quit hitting the ball hard and just slap singles",
        ],
        correctIndex: 1,
        explanation:
          "When exit velocity and barrel rate hold steady but hits dry up, the underlying contact is fine — you're getting unlucky as hard-hit balls find gloves (a low BABIP stretch). The worst response is tearing apart a swing that's actually working. The pro move is recognizing variance, trusting the quality metrics, and not chasing a problem that isn't there.",
      },
      {
        id: "bb3-09-s2",
        label: "Mechanical vs Mental",
        situation:
          "A different slump: your exit velocity has dropped, you're late on fastballs, and video shows your front shoulder flying open early.",
        prompt: "What kind of slump is this, and the response?",
        options: [
          "Mental only — just relax and it'll fix itself",
          "Mechanical — the early shoulder is a real flaw; go to targeted drills (e.g., the wall drill) to re-groove sequencing",
          "Bad luck — ignore it and keep playing",
          "Nothing is wrong; lower exit velocity is normal",
        ],
        correctIndex: 1,
        explanation:
          "Dropping exit velocity plus a visible flaw (front shoulder flying open) and being late on fastballs points to a mechanical cause, not luck. The fix is targeted drill work — the wall drill, hip-first sequencing — to restore separation and bat speed. Correctly distinguishing a mechanical breakdown from a luck-driven cold streak determines whether you fix the swing or leave it alone.",
      },
      {
        id: "bb3-09-s3",
        label: "The Mental Spiral",
        situation:
          "After a few hitless games you start pressing, expanding the zone, and chasing pitches you'd normally take.",
        prompt: "What's the disciplined response to a mental slump?",
        options: [
          "Swing harder and earlier to force hits",
          "Re-narrow your approach: tighten the strike zone, simplify to a fastball-middle plan, and judge at-bats by good swing decisions, not results",
          "Take every pitch until you walk",
          "Change your stance every at-bat until something clicks",
        ],
        correctIndex: 1,
        explanation:
          "Pressing and chasing is the classic mental spiral — anxiety widens the zone and degrades decisions, which deepens the slump. The fix is process discipline: shrink the zone back down, simplify the plan, and grade yourself on swing decisions and quality of contact rather than the box score. Good process restored typically pulls results back with it.",
      },
      {
        id: "bb3-09-s4",
        label: "Freeman's Standard",
        situation:
          "Freeman's 2022 early slump featured solid underlying contact metrics, and he kept his same daily routine and approach.",
        prompt: "What does his handling of failure teach?",
        options: [
          "Panic and overhaul everything at the first sign of trouble",
          "Separate quality of contact from results, trust a sound process and routine through variance, and avoid overhauling a swing that's still producing hard contact",
          "Stop watching video so you don't see the slump",
          "Demand a lineup change to escape the slump",
        ],
        correctIndex: 1,
        explanation:
          "Freeman's example: when the batted-ball data stayed strong, he trusted that the results would normalize and held his routine and approach rather than reinventing his swing in a panic. The lesson is emotional and analytical discipline — judge the process and contact quality, ride out variance, and only change mechanics when the data actually shows a flaw.",
      },
    ],
  },

  "baseball-3-10": {
    intro:
      "The Dodgers' tech lab: Blast Motion, Rapsodo, HitTrax. Data turns 'feel' into something you can measure and fix.",
    spots: [
      {
        id: "bb3-10-s1",
        label: "Right Tool for the Job",
        situation:
          "You want to measure your bat's attack angle and on-plane efficiency through the swing.",
        prompt: "Which device is built for that?",
        options: [
          "A radar gun pointed at the pitcher",
          "A Blast Motion sensor on the bat knob, which tracks swing metrics like attack angle, bat speed, and on-plane efficiency",
          "A stopwatch",
          "A pitching machine's speed dial",
        ],
        correctIndex: 1,
        explanation:
          "Blast Motion is a small sensor that mounts on the bat knob and measures swing-specific metrics — attack angle, bat speed, time to contact, rotational acceleration, and on-plane efficiency. It's purpose-built for diagnosing the swing itself, unlike a radar gun (pitch speed) or HitTrax/Rapsodo (which measure the batted ball off the bat).",
      },
      {
        id: "bb3-10-s2",
        label: "Feel vs Real",
        situation:
          "You swear you're swinging up at +10°, but Blast data shows your attack angle is actually -2°.",
        prompt: "What does this 'feel vs real' gap mean for training?",
        options: [
          "The sensor is wrong — trust your feel over the data",
          "Feel is often miscalibrated; use the objective data to guide changes, and you may need to 'feel' an exaggerated uppercut to actually produce a neutral-to-positive angle",
          "Ignore it — attack angle doesn't matter",
          "Stop swinging until the feel matches",
        ],
        correctIndex: 1,
        explanation:
          "A core value of swing tech is exposing the gap between what a hitter feels and what's actually happening. Feeling +10° while producing -2° is common — proprioception lies. You use the objective number as the target and often have to over-exaggerate the new feel (feel like a big uppercut) to nudge the real measurement to where you want it, then confirm with the data.",
      },
      {
        id: "bb3-10-s3",
        label: "HitTrax Indoors",
        situation:
          "It's winter and you can't get on a field, but you want to track exit velocity, launch angle, and projected distance off live swings.",
        prompt: "What does HitTrax give you indoors?",
        options: [
          "It measures the pitcher's spin rate only",
          "It uses cameras/sensors to capture batted-ball data — exit velocity, launch angle, spray, and simulated outcomes — so you can train and measure contact quality indoors year-round",
          "It only counts how many balls you hit",
          "It replaces the need to actually swing",
        ],
        correctIndex: 1,
        explanation:
          "HitTrax tracks the batted ball indoors — exit velocity, launch angle, spray chart, and simulated hit outcomes — turning cage work into measurable, gamified data. That lets a hitter quantify contact quality and launch profile in the offseason, exactly the kind of year-round measurement the Dodgers used in developing players like Corey Seager.",
      },
      {
        id: "bb3-10-s4",
        label: "Data Serves the Hitter",
        situation:
          "A young hitter becomes paralyzed, obsessing over every Blast number after every single swing in a game.",
        prompt: "What's the right relationship between data and performance?",
        options: [
          "Check every metric mid-at-bat to optimize each swing",
          "Use data as a development and feedback tool in training, then compete with a clear, simple mind — measure in the lab, react in the game",
          "Throw out all the technology — data has no value",
          "Only trust data, never trust feel or competitiveness",
        ],
        correctIndex: 1,
        explanation:
          "The tech is a training and feedback tool, not an in-game crutch. Elite player development uses the numbers to diagnose and groove changes in practice, then asks the hitter to compete free and reactive — 'see ball, hit ball.' Obsessing over metrics during competition causes paralysis by analysis. Measure in the lab; trust the work and react in the box.",
      },
    ],
  },
};
