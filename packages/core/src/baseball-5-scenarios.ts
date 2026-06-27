import type { ScenarioConfig } from "./types";

// "Call the Pitch" Decision-Trainer scenarios for the Art of Pitching epoch.
// Each spot is a deterministic, skill-based pitching decision — the correct line
// is the sound mechanical/strategic choice taught in that stage, never a
// luck-of-the-draw outcome. correctIndex and explanation are stripped server-side
// before reaching the client. Pitching situations (count, batter, runners) live in
// `situation`; the decision (what pitch/location/approach) lives in `prompt`.
export const baseball5Scenarios: Record<string, ScenarioConfig> = {
  "baseball-5-01": {
    intro: "Everything begins with one foot on the rubber. Choose the right stance and setup before the ball ever leaves your hand.",
    spots: [
      {
        id: "bb5-01-s1", label: "Bases Empty",
        situation: "Top of the first, nobody on base, leadoff hitter steps in. You want maximum velocity and a clean, repeatable delivery.",
        prompt: "Which setup should you use?",
        options: [
          "The full windup — bases empty lets you load fully for top velocity",
          "The slide step — always be quick to the plate",
          "A quick-pitch with no leg lift",
          "The stretch with a long hold",
        ],
        correctIndex: 0,
        explanation: "With the bases empty there's no steal threat, so the full windup is correct — the rocker step and full leg lift load the hips for maximum velocity.",
      },
      {
        id: "bb5-01-s2", label: "Runner On",
        situation: "Bottom of the fifth, a fast runner reaches first with nobody out. He's a stolen-base threat.",
        prompt: "How should you deliver the next pitch?",
        options: [
          "Stay in the full windup for velocity",
          "Pitch from the stretch to cut your time to the plate",
          "Step off and wait for him to leave",
          "Throw an intentional ball outside",
        ],
        correctIndex: 1,
        explanation: "With a steal threat on base you must use the stretch. Its compact motion shaves 0.3–0.5 seconds off your delivery, giving the catcher a real chance to throw the runner out.",
      },
      {
        id: "bb5-01-s3", label: "The Set",
        situation: "You're in the stretch with runners on first and second. You come set, then start your motion to the plate.",
        prompt: "What must you do before delivering?",
        options: [
          "Start your leg lift immediately to stay quick",
          "Look the runner back twice first",
          "Come to a complete, discernible stop in the set position",
          "Pump-fake toward second base",
        ],
        correctIndex: 2,
        explanation: "Rule 5.07 requires a complete and discernible stop in the set position. Failing to stop is a balk, and every runner advances a base.",
      },
      {
        id: "bb5-01-s4", label: "Balance Point",
        situation: "Your last few pitches sailed high and flat. You notice you've been drifting forward off the rubber before your leg lift reaches its peak.",
        prompt: "What's the fix?",
        options: [
          "Reach a tall, balanced peak on the leg lift before driving forward",
          "Speed up the whole delivery to beat the drift",
          "Lower your arm slot to flatten the plane",
          "Aim lower to compensate for the rise",
        ],
        correctIndex: 0,
        explanation: "Rushing past the balance point scrambles the kinetic chain — the arm gets ahead of the hips, producing high, flat pitches and lost velocity. Stay tall and balanced at peak leg lift, then drive.",
      },
    ],
  },

  "baseball-5-02": {
    intro: "A two-inch shift of the fingertips changes everything. Pick the grip that does the job — safely.",
    spots: [
      {
        id: "bb5-02-s1", label: "First Pitch",
        situation: "A 10-year-old on your team wants to learn to pitch and asks which grip to master first.",
        prompt: "What do you teach first?",
        options: [
          "The curveball — it fools young hitters",
          "The slider — it breaks late",
          "The splitter — it drops off the table",
          "The four-seam fastball — the foundation with no wrist stress",
        ],
        correctIndex: 3,
        explanation: "The four-seam fastball is the universal first grip: straight arm path, no wrist snap, no elbow stress. Every other pitch is a modification of that foundation.",
      },
      {
        id: "bb5-02-s2", label: "Need a Ground Ball",
        situation: "Runner on first, nobody out, and you want a double-play ground ball. You need late, downward, arm-side movement.",
        prompt: "Which grip best fits the goal?",
        options: [
          "The two-seam fastball / sinker on the narrow seams",
          "A four-seam fastball up in the zone",
          "A high changeup",
          "A backdoor slider away",
        ],
        correctIndex: 0,
        explanation: "The two-seam (sinker), gripped on the narrow seams with slight pronation, produces arm-side run and sink — exactly the movement that induces ground balls.",
      },
      {
        id: "bb5-02-s3", label: "Safe Off-Speed",
        situation: "A 12-year-old wants an off-speed pitch to mix in. You want deception without risking the growing arm.",
        prompt: "Which pitch do you give them?",
        options: [
          "A knuckle-curve with a hard snap",
          "The changeup — same arm speed, no wrist snap, no elbow stress",
          "A slider — easy to command",
          "A cutter thrown hard",
        ],
        correctIndex: 1,
        explanation: "The changeup's deception comes from grip drag, not an unnatural wrist motion. It's biomechanically near-identical to a fastball at the arm, making it the safe off-speed choice for young pitchers.",
      },
      {
        id: "bb5-02-s4", label: "Fixing the Run",
        situation: "Your two-seam keeps running the wrong way — toward the third-base side instead of arm-side. Your coach says you're leaning on your middle finger.",
        prompt: "What adjustment corrects the movement?",
        options: [
          "Throw it harder to straighten it out",
          "Drop your arm slot to sidearm",
          "Shift more pressure onto the index finger",
          "Move your thumb to the side of the ball",
        ],
        correctIndex: 2,
        explanation: "For a right-hander, index-finger pressure pushes the ball arm-side (toward first base). Middle-finger dominance was steering it glove-side, so emphasizing the index finger restores the intended run.",
      },
    ],
  },

  "baseball-5-03": {
    intro: "The windup is a kinetic chain — each phase sets up the next. Diagnose the link that's breaking down.",
    spots: [
      {
        id: "bb5-03-s1", label: "Lost Velocity",
        situation: "A pitcher's fastball is 5–7 mph slower than expected. On film, his hips fly open toward home plate during the leg lift, before the stride even starts.",
        prompt: "What's the mechanical cause?",
        options: [
          "Opening the hips early dumps the stored rotational energy before it can transfer to the arm",
          "His arm slot is too high",
          "His stride is too short",
          "He's gripping the ball too tightly",
        ],
        correctIndex: 0,
        explanation: "Hip rotation is the engine of velocity. If the hips open during the leg lift, that energy dissipates before the stride — by the time the arm fires, there's no hip power left to transfer.",
      },
      {
        id: "bb5-03-s2", label: "Stride Direction",
        situation: "A right-hander keeps landing with his stride foot crossing to the third-base side of the rubber-to-plate line. His pitches tail and his command is erratic.",
        prompt: "What is this closed stride doing?",
        options: [
          "Adding velocity through extra torque",
          "Blocking the hips from completing rotation, forcing him to throw around his own body",
          "Improving his pickoff move",
          "Nothing — stride direction only affects breaking balls",
        ],
        correctIndex: 1,
        explanation: "Landing across the body turns the lead leg into a gate the hips can't clear. The pitcher compensates by throwing arm-only, producing inconsistent arm paths, tailing pitches, and poor command.",
      },
      {
        id: "bb5-03-s3", label: "The Landing",
        situation: "A pitcher's elbow is sore after outings even though his pitch counts are fine. You watch him land hard on his heel with every stride.",
        prompt: "How should he land instead?",
        options: [
          "Even harder on the heel to anchor the front side",
          "Flat-footed to spread the impact",
          "On the ball of the foot, for a soft, absorptive landing",
          "On the outside edge of the heel",
        ],
        correctIndex: 2,
        explanation: "Heel-first landing sends a jarring deceleration shock up the chain just as energy should flow smoothly to the upper body. Landing on the ball of the foot cushions the contact and protects the arm.",
      },
      {
        id: "bb5-03-s4", label: "Repeatability",
        situation: "Two pitchers throw the same velocity, but one walks far fewer hitters. The difference: he reaches an identical, balanced leg-lift peak on every single pitch.",
        prompt: "Why does that consistency improve his command?",
        options: [
          "It doesn't — command is purely about grip",
          "A repeatable balance point gives the same weight load and release point every time",
          "It only helps with breaking balls",
          "It just makes him look smoother",
        ],
        correctIndex: 1,
        explanation: "An identical balance-point load on every pitch produces the same weight transfer and the same release point — which is the foundation of command. Kershaw's frame-identical balance point is exactly why he repeats his location.",
      },
    ],
  },

  "baseball-5-04": {
    intro: "The arm is the last link in the chain — and the most fragile. Protect it while it does its job.",
    spots: [
      {
        id: "bb5-04-s1", label: "Layback",
        situation: "A young pitcher is told he 'lays the ball back too far,' so he tenses up to stop his arm from rotating backward. Two weeks later his elbow hurts.",
        prompt: "Was that the right cue?",
        options: [
          "No — external rotation is physics; fighting it forces the muscles to resist their own delivery and spikes stress",
          "Yes — less layback always means a healthier arm",
          "Yes — cap external rotation at 90 degrees",
          "No, but only because his follow-through is the real issue",
        ],
        correctIndex: 0,
        explanation: "Layback (external rotation) is caused passively by violent hip and torso rotation whipping the arm back. Tensing to stop it makes the shoulder and elbow fight the very forces driving the pitch, dramatically increasing UCL stress.",
      },
      {
        id: "bb5-04-s2", label: "Elbow Height",
        situation: "A 13-year-old drops his elbow well below shoulder height on every fastball. He says it feels natural and his velocity is fine.",
        prompt: "What's the right call?",
        options: [
          "Leave it — if it feels good and the velo is there, don't tinker",
          "Only fix it if his command also suffers",
          "Raise the elbow to at least shoulder height to protect the UCL",
          "Lower it further to a true sidearm slot",
        ],
        correctIndex: 2,
        explanation: "Elbow drop is a documented UCL risk factor — it puts the ligament in a high-stress position at peak acceleration, and damage accumulates before any pain appears. Getting the elbow up to shoulder height now prevents Tommy John surgery later.",
      },
      {
        id: "bb5-04-s3", label: "Follow-Through",
        situation: "A pitcher stops his arm abruptly at shoulder height after release because he thinks it looks 'cleaner.'",
        prompt: "What should he do instead?",
        options: [
          "Keep cutting it off — a short finish improves accuracy",
          "Finish a full deceleration arc, hand sweeping down toward the opposite hip",
          "Snap the wrist harder to compensate",
          "Stop even earlier to save energy",
        ],
        correctIndex: 1,
        explanation: "At release the arm is internally rotating at 7,000–8,000°/sec. A full follow-through lets muscles absorb that momentum over a long arc. Cutting it off forces the rotator cuff to brake the arm in a fraction of the distance, overloading it every throw.",
      },
      {
        id: "bb5-04-s4", label: "Arm-Dominant",
        situation: "A pitcher has clean arm action, but his coach notes the fastball 'comes entirely from the arm' — the hips barely rotate before the arm fires.",
        prompt: "What will this cost him over a full season?",
        options: [
          "More velocity, since the arm drives directly",
          "Better command, with fewer moving parts",
          "Nothing meaningful — arm and hips contribute equally",
          "Arm fatigue and elevated injury risk from the arm carrying the whole load",
        ],
        correctIndex: 3,
        explanation: "The lower body should generate most of the velocity; the arm is the final delivery link, not the engine. An arm-dominant motion makes the arm work at its limit on every pitch — over 1,000+ throws that overloads the cuff and elbow and shortens careers.",
      },
    ],
  },

  "baseball-5-05": {
    intro: "Command is repeating your release point and putting the ball where the catcher's glove is. Hit your spots.",
    spots: [
      {
        id: "bb5-05-s1", label: "Ahead in the Count",
        situation: "You're ahead 0-2 on a free-swinging hitter. You don't need a strike — you need a chase.",
        prompt: "Where do you locate the next pitch?",
        options: [
          "Just off the plate, below the zone, to bait a chase",
          "Middle-middle to steal a called strike",
          "A get-me-over fastball down the heart",
          "High and tight, daring him to swing",
        ],
        correctIndex: 0,
        explanation: "With a 0-2 count you have a free pitch. A ball just off the plate or below the zone tempts an aggressive hitter to chase — you don't give in to the middle where he can do damage.",
      },
      {
        id: "bb5-05-s2", label: "Paint the Black",
        situation: "A dangerous hitter is up with first base open. You want a fastball on the outer edge — the 'black' of the plate — not over the middle.",
        prompt: "What does locating to the edge require most?",
        options: [
          "Maximum velocity at all costs",
          "A consistent, repeatable release point",
          "A brand-new grip",
          "A lower arm slot",
        ],
        correctIndex: 1,
        explanation: "Painting the black is command, and command flows from a repeatable release point. The same arm slot and finish every pitch is what lets Kershaw live on the edges instead of the middle.",
      },
      {
        id: "bb5-05-s3", label: "Missing Arm-Side",
        situation: "Your fastballs are consistently missing to your arm side — you keep yanking them inside to same-handed hitters. Your release is drifting early.",
        prompt: "What's the likely fix?",
        options: [
          "Throw harder to straighten the misses out",
          "Aim further glove-side and hope it evens out",
          "Hold the ball a fraction longer for full extension to your release point",
          "Switch to your changeup grip",
        ],
        correctIndex: 2,
        explanation: "Missing arm-side usually means you're releasing the ball early, before full extension. Staying through to a complete, consistent release point out front re-centers the location rather than masking it by aiming.",
      },
      {
        id: "bb5-05-s4", label: "Setting Up the Out Pitch",
        situation: "Two strikes on a hitter who's been fighting off fastballs away all at-bat. You've established that outer-edge fastball repeatedly.",
        prompt: "What's the smartest finishing pitch?",
        options: [
          "Another identical fastball away",
          "A fastball right down the middle",
          "A pitch over his head to scare him",
          "A breaking ball off the same outer-edge tunnel that the fastball established",
        ],
        correctIndex: 3,
        explanation: "Command sets up sequencing. After living on the outer edge, a breaking ball starting on that same tunnel and breaking off it looks identical out of the hand — the hitter has been conditioned to the fastball and gets fooled.",
      },
    ],
  },

  "baseball-5-06": {
    intro: "With runners on, the battle is about time and deception. Manage the basepaths without giving away a base.",
    spots: [
      {
        id: "bb5-06-s1", label: "Quick to the Plate",
        situation: "A burner is on first with a big lead, threatening to steal. Your normal leg lift is slow to the plate.",
        prompt: "How do you deliver?",
        options: [
          "Use a slide step to cut your time to the plate",
          "Add a higher leg kick for more power",
          "Return to the full windup",
          "Throw your slowest curveball",
        ],
        correctIndex: 0,
        explanation: "The slide step trades a little velocity for a much quicker delivery, shrinking the runner's window and giving the catcher time to throw. Pairing a slow breaking ball with a big leg lift would hand him the base.",
      },
      {
        id: "bb5-06-s2", label: "The Pickoff",
        situation: "Runner on first is leaning hard toward second. You're set, and you want to throw over to first to drive him back.",
        prompt: "What makes a pickoff move legal?",
        options: [
          "You may fake to first as long as you don't throw",
          "You must step toward first with your stride foot before or as you throw",
          "You can throw to first without any step",
          "Any move is legal once you're set",
        ],
        correctIndex: 1,
        explanation: "A legal pickoff to first requires stepping directly toward the base with the stride foot before/as you throw. A fake throw to first (unlike to second or third) is a balk.",
      },
      {
        id: "bb5-06-s3", label: "Balk Trap",
        situation: "Runners on first and third. You're set on the rubber, then you flinch your shoulders and start your delivery without ever coming to a stop.",
        prompt: "What just happened?",
        options: [
          "Nothing — a flinch is legal once you're set",
          "A strike is added to the count",
          "It's a balk — runners advance, including the run from third",
          "The batter is awarded first base only",
        ],
        correctIndex: 2,
        explanation: "Failing to come set with a complete stop, or any deceptive start-and-stop of the delivery, is a balk. All runners advance one base — and with a man on third that means a run scores.",
      },
      {
        id: "bb5-06-s4", label: "Vary the Look",
        situation: "A smart baserunner has timed your delivery perfectly — you hold the same count every time before going home.",
        prompt: "How do you disrupt his timing?",
        options: [
          "Always hold exactly the same to stay consistent",
          "Vary your holds and looks — sometimes quick, sometimes a long hold, sometimes a step-off",
          "Throw over to first on every single pitch",
          "Ignore him and pitch from the windup",
        ],
        correctIndex: 1,
        explanation: "Predictable timing is what lets runners get great jumps. Varying your hold times, looks, and the occasional step-off or pickoff keeps the runner honest and ruins his read on your delivery.",
      },
    ],
  },

  "baseball-5-07": {
    intro: "Radar-gun readings sell tickets, but outs win games. Weigh velocity against location and efficiency.",
    spots: [
      {
        id: "bb5-07-s1", label: "Velo vs. Location",
        situation: "A 92-mph fastball thrown middle-middle gets crushed; a well-located 88-mph fastball on the outer corner gets a weak groundout.",
        prompt: "What's the lesson?",
        options: [
          "Location can beat raw velocity — a spotted 88 can be more effective than a centered 92",
          "Velocity is everything; the 92 was just unlucky",
          "Hitters can't catch up to 92 regardless of location",
          "The 88 only worked because the hitter was bad",
        ],
        correctIndex: 0,
        explanation: "A great location turns a modest fastball into a tough at-bat, while a centered premium fastball is hittable. This is the heart of the Maddux principle — command and movement beat the radar gun.",
      },
      {
        id: "bb5-07-s2", label: "The Maddux Principle",
        situation: "You want to model your game on Greg Maddux, who dominated in the 1990s without overpowering velocity.",
        prompt: "What was the core of Maddux's success?",
        options: [
          "Throwing as hard as humanly possible every pitch",
          "Pinpoint command, movement, and pitch efficiency — getting outs on few pitches",
          "Walking hitters to set up double plays",
          "Relying on one unhittable pitch",
        ],
        correctIndex: 1,
        explanation: "Maddux thrived on command, late movement, and efficiency — inducing weak contact early in counts and getting deep into games on remarkably few pitches, not on velocity.",
      },
      {
        id: "bb5-07-s3", label: "Max Effort",
        situation: "A youth pitcher tries to add velocity by throwing every pitch at absolute max effort, overthrowing on each one.",
        prompt: "What's the main risk?",
        options: [
          "He'll throw too many strikes",
          "Nothing — max effort is the safest way to build velocity",
          "It only affects his breaking ball",
          "Max-effort overthrowing raises injury risk and usually wrecks command and consistency",
        ],
        correctIndex: 3,
        explanation: "Chasing velocity through max-effort overthrowing increases arm-injury risk and degrades the repeatable mechanics that produce command. Controlled, efficient effort is both safer and more effective.",
      },
      {
        id: "bb5-07-s4", label: "What Builds Velocity",
        situation: "A pitcher genuinely wants to add safe velocity over time.",
        prompt: "What's the most legitimate source of more velocity?",
        options: [
          "Efficient lower-body mechanics and full-body strength feeding the kinetic chain",
          "Yanking the arm back harder at release",
          "Gripping the ball as tightly as possible",
          "Skipping the leg lift to be quicker",
        ],
        correctIndex: 0,
        explanation: "Real, sustainable velocity comes from the lower body and core — leg drive and hip rotation feeding the kinetic chain — not from muscling the arm, which only adds stress.",
      },
    ],
  },

  "baseball-5-08": {
    intro: "Young arms are still growing. Respect the count, the rest, and the warning signs.",
    spots: [
      {
        id: "bb5-08-s1", label: "The Limit",
        situation: "Your 11-year-old pitcher is cruising and has thrown 84 pitches. Little League rules cap his age group at 85 pitches per day.",
        prompt: "What do you do?",
        options: [
          "Let him finish the game — he feels great",
          "Take him out after this batter / at the limit, even though he's dealing",
          "Push to 100 since he's not tired",
          "Move him to shortstop and bring him back to pitch next inning",
        ],
        correctIndex: 1,
        explanation: "Pitch-count limits are a hard safety rule, not a suggestion. Once he reaches the cap (he may finish the current batter), he's done pitching for the day regardless of how good he feels.",
      },
      {
        id: "bb5-08-s2", label: "Required Rest",
        situation: "Your 12-year-old threw 70 pitches today — enough to require the maximum mandated rest before he pitches again.",
        prompt: "How should you handle his next outing?",
        options: [
          "Pitch him tomorrow if the team needs him",
          "Rest is optional as long as he stretches",
          "Give him the full required days of rest before he pitches again",
          "Just lower his pitch count next time, no rest needed",
        ],
        correctIndex: 2,
        explanation: "Pitch counts are tied to mandatory rest days — the higher the count, the more days off required before pitching again. Skipping that rest is exactly what drives overuse injuries.",
      },
      {
        id: "bb5-08-s3", label: "Curveball Age",
        situation: "A 12-year-old begs to throw a curveball because it breaks and fools hitters. His growth plates are still developing.",
        prompt: "What do you tell him?",
        options: [
          "Sure — curveballs are fine at any age",
          "Throw it, but only a few per game",
          "Switch to a slider instead",
          "Not yet — master the changeup as your off-speed; breaking balls can wait",
        ],
        correctIndex: 3,
        explanation: "The wrist snap and forearm torque of a curveball stress the still-developing UCL and growth plates. The changeup gives the same deceptive purpose with no extra arm stress, so it's the right youth off-speed pitch.",
      },
      {
        id: "bb5-08-s4", label: "Warning Sign",
        situation: "Mid-game, your pitcher quietly shakes his arm between pitches and says his elbow feels sore but insists he can keep going.",
        prompt: "What's the correct response?",
        options: [
          "Take him out — elbow pain is a stop sign, not something to pitch through",
          "Let him finish the inning if he says he's okay",
          "Have him throw only fastballs the rest of the way",
          "Ice it between innings and continue",
        ],
        correctIndex: 0,
        explanation: "Elbow pain in a young pitcher is a red flag that can precede serious UCL damage. The pitcher comes out immediately — never let a kid pitch through arm pain.",
      },
    ],
  },

  "baseball-5-09": {
    intro: "The moment you release the ball, you're a fifth infielder. Know your fielding job before the ball is hit.",
    spots: [
      {
        id: "bb5-09-s1", label: "Cover First",
        situation: "Runner-less, a ground ball is hit sharply to the right side, pulling the first baseman far off the bag toward the line.",
        prompt: "What's your job as the pitcher?",
        options: [
          "Stay on the mound and watch the play",
          "Break to cover first base for the throw and flip",
          "Run to back up second base",
          "Field the ball yourself even though it's past you",
        ],
        correctIndex: 1,
        explanation: "When the first baseman is pulled off the bag fielding a grounder, the pitcher must sprint to cover first — running to the bag, taking the feed, and stepping on the base. The 3-1 putout is fundamental PFP.",
      },
      {
        id: "bb5-09-s2", label: "Comebacker, Runner On",
        situation: "Runner on first, nobody out. A sharp one-hopper comes right back to you on the mound.",
        prompt: "What's the highest-value play?",
        options: [
          "Throw to first for the easy single out",
          "Hold the ball and run it back to the circle",
          "Turn and start the 1-6-3 double play by throwing to second",
          "Throw home to nobody",
        ],
        correctIndex: 2,
        explanation: "With a runner on first and a comebacker, the pitcher should start the double play — throw to second to get the lead runner and let the shortstop relay to first. Two outs beats one.",
      },
      {
        id: "bb5-09-s3", label: "Back Up the Bag",
        situation: "Runner on first, a clean single drops into the right-field gap. A throw is coming toward third base to try to nail the runner.",
        prompt: "Where should the pitcher go?",
        options: [
          "Cover home plate",
          "Stand on the mound in case of a rundown",
          "Run toward the outfield to help field",
          "Back up third base in case the throw gets away",
        ],
        correctIndex: 3,
        explanation: "On an extra-base hit and a throw to third, the pitcher's job is to back up the base behind the play — here, third base — so an errant throw doesn't let the runner advance further.",
      },
      {
        id: "bb5-09-s4", label: "Bunt Defense",
        situation: "Runner on first, the batter squares to sacrifice bunt and pushes it softly up the first-base line.",
        prompt: "What's the right read?",
        options: [
          "Field it cleanly and look the lead runner to second before throwing — take the sure out at first if second isn't there",
          "Always throw to second no matter what",
          "Let the first baseman get it every time",
          "Eat the ball and concede both runners",
        ],
        correctIndex: 0,
        explanation: "On a bunt, the pitcher charges, fields cleanly, and checks the lead runner. If there's a play at second, take it; if not, secure the sure out at first. The cardinal rule is to get at least one out, not to force a risky throw.",
      },
    ],
  },

  "baseball-5-10": {
    intro: "The mound is as much mental as physical. Control your tempo, your breathing, and the next pitch.",
    spots: [
      {
        id: "bb5-10-s1", label: "Bad Inning",
        situation: "You've just given up three straight hits and a run. You're rattled, rushing, and the inning is unraveling.",
        prompt: "What's the disciplined response?",
        options: [
          "Step off the rubber, take a slow breath, and reset to the next pitch",
          "Throw harder to overpower your way out of it",
          "Rush the next few pitches to get it over with",
          "Start aiming the ball to avoid more hits",
        ],
        correctIndex: 0,
        explanation: "The proven move is to slow down: step off, breathe, and refocus on executing one pitch. Rushing or overthrowing in a bad inning compounds the damage; resetting restores your mechanics and command.",
      },
      {
        id: "bb5-10-s2", label: "Pace as a Weapon",
        situation: "Your defense is making plays and you're throwing strikes. The hitters look uncomfortable and rushed.",
        prompt: "How can your tempo help?",
        options: [
          "Slow way down to milk the moment",
          "Work quickly when you're in rhythm to keep hitters on their heels and your defense engaged",
          "Take the maximum time on every pitch regardless",
          "Throw to first base repeatedly to stall",
        ],
        correctIndex: 1,
        explanation: "Working fast when you're locked in keeps hitters from settling in and keeps your fielders sharp. Pace is a real weapon — controlled tempo is part of an elite mound mindset.",
      },
      {
        id: "bb5-10-s3", label: "After the Error",
        situation: "Your shortstop boots a routine grounder that should have ended the inning. You feel anger rising at your teammate.",
        prompt: "What's the right mental approach?",
        options: [
          "Show your frustration so he knows he messed up",
          "Try to strike everyone out now to make up for it",
          "Let go of the error, support your defense, and execute the next pitch",
          "Ease up and assume the inning is lost",
        ],
        correctIndex: 2,
        explanation: "Errors happen; dwelling on them or showing up a teammate only tightens you and the defense. The competitor's move is to flush it, back your fielders, and lock in on the next pitch you can control.",
      },
      {
        id: "bb5-10-s4", label: "The Big Spot",
        situation: "Bases loaded, two outs, your best hitter facing you in a tie game. The pressure is enormous.",
        prompt: "What's the right mindset?",
        options: [
          "Hope he doesn't swing and you get a walk-free miracle",
          "Aim the ball carefully to avoid walking in a run",
          "Try to throw it past him as hard as you possibly can",
          "Trust your stuff, commit fully to one chosen pitch, and execute it with conviction",
        ],
        correctIndex: 3,
        explanation: "High-leverage moments reward conviction. Pick a pitch and a location, commit fully, and execute — aiming tentatively or overthrowing both break down command. Kershaw's edge is competing with total commitment to the next pitch.",
      },
    ],
  },
};
