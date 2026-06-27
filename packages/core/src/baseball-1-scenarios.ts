import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the Baseball Fundamentals epoch (baseball-1).
// Each spot is a deterministic, rules-and-strategy-based decision — the correct
// line is the sound, by-the-book baseball play taught in that stage, never a
// coin-flip outcome. The game situation (outs, count, runners, score) lives in
// `situation`; the decision lives in `prompt`. correctIndex and explanation are
// stripped server-side before reaching the client.
export const baseball1Scenarios: Record<string, ScenarioConfig> = {
  // ─── baseball-1-01: The Field and the Game ───────────────────────────────
  "baseball-1-01": {
    intro:
      "You've just taken the field for the first time. Before the first pitch, make sure the diamond, the positions, and how a run scores are second nature.",
    spots: [
      {
        id: "bb1-01-s1",
        label: "Take the Field",
        situation:
          "Your coach is filling out the lineup card and points to the spot between second and third base. He asks what position number that fielder wears on the scorecard.",
        prompt: "Which position is the shortstop on a scorecard?",
        options: ["Position 6", "Position 4", "Position 5", "Position 2"],
        correctIndex: 0,
        explanation:
          "On a scorecard the shortstop is 6 (pitcher 1, catcher 2, first base 3, second base 4, third base 5, shortstop 6, then outfielders 7-8-9). That's why a shortstop-to-second-to-first double play is scored 6-4-3.",
      },
      {
        id: "bb1-01-s2",
        label: "Score the Run",
        situation:
          "Your teammate is on third base with one out. The batter lines a clean single into right field and your teammate trots home and touches the plate.",
        prompt: "What has to happen for that run to count?",
        options: [
          "The runner must touch first, second, third, and home in order before the third out",
          "The runner only needs to reach home — the bases don't have to be touched in order",
          "The run counts only if the batter also reaches base safely",
          "Nothing else — any runner who crosses home always scores",
        ],
        correctIndex: 0,
        explanation:
          "A run scores only when a runner legally touches first, second, third, and home in order before the inning's third out. This runner started on third (already having touched first and second earlier), so touching home completes the circuit and the run counts.",
      },
      {
        id: "bb1-01-s3",
        label: "Three Outs",
        situation:
          "Your team is in the field. The opponent has runners on first and second with two outs. The batter grounds out to short for the third out.",
        prompt: "What happens now?",
        options: [
          "Play continues — runners stay on base for the next batter",
          "The half-inning ends and your team comes in to bat",
          "Only the batter is out; the inning keeps going",
          "The runners are awarded the next base",
        ],
        correctIndex: 1,
        explanation:
          "Three outs retire the side. The half-inning is over, the bases are cleared, and the teams switch — your side comes up to bat. A full inning is two halves (top and bottom).",
      },
      {
        id: "bb1-01-s4",
        label: "Fair or Foul",
        situation:
          "The batter chops a ball down the third-base line. It first lands in fair territory a few feet PAST third base, then spins off into foul ground.",
        prompt: "Is it a fair ball or a foul ball?",
        options: [
          "Foul — it ended up in foul territory",
          "Foul — any ball that touches the line is foul",
          "Fair — past the base, what matters is where it first touched the ground",
          "The umpire decides based on where it traveled the longest",
        ],
        correctIndex: 2,
        explanation:
          "Beyond first or third base, fair/foul is judged by where the ball FIRST contacts the ground (or a fielder). It landed fair past the bag, so it's a fair ball even though it later rolled foul.",
      },
    ],
  },

  // ─── baseball-1-02: Rules Every Player Must Know ──────────────────────────
  "baseball-1-02": {
    intro:
      "Knowing the rules protects your team. Read each situation and apply the rule exactly the way an umpire would.",
    spots: [
      {
        id: "bb1-02-s1",
        label: "Force at Second",
        situation:
          "Runner on first, ground ball to the shortstop. He flips to the second baseman, who catches it and steps on the bag while the runner is still five feet away.",
        prompt: "Does the second baseman need to tag the runner?",
        options: [
          "Yes — he must tag the runner before the runner reaches the base",
          "No — it's a force out, so touching the bag with the ball is enough",
          "Only if the runner slides into the bag",
          "Yes — a tag is always required at second base",
        ],
        correctIndex: 1,
        explanation:
          "The runner on first is forced to advance because the batter became a runner. On a force, the fielder only has to touch the base while holding the ball — no tag needed. The runner is out the instant the bag is touched.",
      },
      {
        id: "bb1-02-s2",
        label: "Two-Strike Foul",
        situation:
          "The batter has a 1-and-2 count. She swings and fouls the next pitch straight back into the screen.",
        prompt: "What is the count now?",
        options: [
          "She's out — that's strike three",
          "The count is still 1-2 — a foul ball can't be the third strike",
          "The count goes to 2-2 — the foul counts as a ball",
          "The at-bat resets to 0-0",
        ],
        correctIndex: 1,
        explanation:
          "A foul ball with two strikes is NOT a third strike (the exception is a foul bunt). The count stays 1-2. She can keep fouling pitches off all day without striking out that way.",
      },
      {
        id: "bb1-02-s3",
        label: "Infield Fly",
        situation:
          "Runners on first and second, one out. The batter pops a lazy fly straight up over the second baseman, easily catchable. The umpire shouts and points: 'Infield fly, batter is out!'",
        prompt: "Why is the batter called out before anyone even catches the ball?",
        options: [
          "Because the runners didn't tag up in time",
          "Because the ball was hit too high",
          "To stop infielders from intentionally dropping it for a cheap double play",
          "Because there were two runners on base who interfered",
        ],
        correctIndex: 2,
        explanation:
          "The infield fly rule (runners on 1st-and-2nd or loaded, fewer than two outs, catchable infield fly) makes the batter automatically out. It exists so a fielder can't deliberately let an easy pop-up drop and turn it into a double or triple play.",
      },
      {
        id: "bb1-02-s4",
        label: "Ball Four",
        situation:
          "The batter watches a pitch sail well outside the strike zone and doesn't swing. That's the fourth pitch out of the zone he's taken this at-bat.",
        prompt: "What's the call and what does the batter do?",
        options: [
          "Strike — he should have protected the plate",
          "Foul ball — the count stays the same",
          "Ball four — he's awarded a walk and goes to first base",
          "He's out on a checked swing",
        ],
        correctIndex: 2,
        explanation:
          "Four balls (pitches out of the zone the batter doesn't swing at) is a walk — a free pass to first base. A walk forces any runner who's blocked behind him to advance one base as well.",
      },
    ],
  },

  // ─── baseball-1-03: The Art of Batting ────────────────────────────────────
  "baseball-1-03": {
    intro:
      "Hitting is the hardest skill in sports. These spots are all about sound mechanics at the plate — pick the fundamental that holds up.",
    spots: [
      {
        id: "bb1-03-s1",
        label: "The Grip",
        situation:
          "A new teammate grabs the bat deep in his palms and wraps every finger tight, the way you'd hold a hammer. The coach asks you to fix his grip.",
        prompt: "What grip should you teach instead?",
        options: [
          "Line up the knocking knuckles (the middle knuckles) of both hands",
          "Keep the hammer grip — it gives the most control",
          "Hold the bat only with the fingertips for bat speed",
          "Overlap the hands like a golf grip",
        ],
        correctIndex: 0,
        explanation:
          "Aligning the knocking knuckles (the middle knuckles of both hands) lets the wrists roll naturally through contact. A deep palm/hammer grip locks the wrists and kills bat speed and rotation.",
      },
      {
        id: "bb1-03-s2",
        label: "The Stride",
        situation:
          "A hitter keeps rolling weak grounders to the pull side. You notice that as she swings, her front foot steps toward the dugout — away from the plate — instead of toward the pitcher.",
        prompt: "What is this fault called?",
        options: [
          "Squishing the bug",
          "Loading the hands",
          "Stepping in the bucket",
          "A proper closed stride",
        ],
        correctIndex: 2,
        explanation:
          "Stepping in the bucket is when the front foot bails toward the dugout instead of striding toward the pitcher. It opens the body early, pulls the head off the ball, and makes outside pitches nearly impossible to reach.",
      },
      {
        id: "bb1-03-s3",
        label: "Where Power Comes From",
        situation:
          "A player swings hard with just his arms and produces nothing but soft contact. He asks where the real power in a swing actually comes from.",
        prompt: "What is the primary power source in a baseball swing?",
        options: [
          "The wrists snapping at the last second",
          "A big shoulder turn alone",
          "Hip rotation driving the body through the ball",
          "Gripping the bat as hard as possible",
        ],
        correctIndex: 2,
        explanation:
          "Power starts from the ground up: the hips fire toward the pitcher and pull the torso, shoulders, and hands through in sequence. Arms-only swings leave most of the available power on the table.",
      },
      {
        id: "bb1-03-s4",
        label: "Eyes on the Ball",
        situation:
          "A hitter keeps popping the ball straight up. Video shows that just before contact she lifts her head and eyes to watch where the ball is going.",
        prompt: "Why is lifting the head early causing pop-ups?",
        options: [
          "It has no effect — you have to lift your head to see the ball",
          "Her front shoulder flies open and slows the swing down",
          "Raising the head drops the barrel under the ball so the bat undercuts it",
          "It makes her grip too tight",
        ],
        correctIndex: 2,
        explanation:
          "Lifting the head pulls the front shoulder up, the barrel drops below the ball, and the bat undercuts it — producing pop-ups. The cue is 'see the bat hit the ball': keep the head and eyes down through contact.",
      },
    ],
  },

  // ─── baseball-1-04: Pitching Fundamentals ─────────────────────────────────
  "baseball-1-04": {
    intro:
      "A pitcher's arm is precious. These decisions are about good mechanics and respecting the rules that keep young arms healthy.",
    spots: [
      {
        id: "bb1-04-s1",
        label: "Pitch Count Limit",
        situation:
          "Your 11-year-old pitcher has thrown 70 pitches and still looks strong. Little League rules for ages 11-12: max 85 pitches/day, and 66+ pitches requires 4 days of rest. The coach wants her to throw again in two days.",
        prompt: "When can she next pitch in a game?",
        options: [
          "Tomorrow — she's still under the 85-pitch maximum",
          "In two days — that's plenty of rest",
          "Not for 4 calendar days — 70 pitches crossed the 66-pitch threshold",
          "Right away — she felt fine, so no rest is needed",
        ],
        correctIndex: 2,
        explanation:
          "Rest is set by total pitches thrown that day, not how she felt. At 70 pitches she's past the 66-pitch line, which mandates 4 days of rest before pitching again — regardless of the 85-pitch maximum.",
      },
      {
        id: "bb1-04-s2",
        label: "The Grip",
        situation:
          "You're teaching the four-seam fastball. Your pitcher places two fingers across the seams correctly, but then squeezes the ball so hard his forearm visibly tenses up.",
        prompt: "What should you tell him about that tight grip?",
        options: [
          "Squeeze even harder for more velocity",
          "Loosen up — a tense forearm cuts velocity and raises injury risk",
          "Grip tightness only matters for curveballs",
          "Move the fingers along the seams instead",
        ],
        correctIndex: 1,
        explanation:
          "Choking the ball creates forearm and elbow tension that kills the loose arm action velocity comes from and shortens the follow-through. The cue: hold it firm enough that it can't fly away, gentle enough not to crush it.",
      },
      {
        id: "bb1-04-s3",
        label: "Follow Through",
        situation:
          "After releasing the ball, your pitcher snaps his arm to a dead stop at his side, finishing pointed at the ground instead of letting it travel across his body.",
        prompt: "Why does stopping the arm short matter?",
        options: [
          "It makes the pitch rise",
          "Abruptly stopping the arm forces the muscles to absorb all that force at once, straining the elbow and shoulder",
          "It only affects accuracy, not arm health",
          "Nothing — a short finish is fine",
        ],
        correctIndex: 1,
        explanation:
          "At release the arm is moving extremely fast. A complete follow-through (arm finishing across the body toward the glove-side thigh) lets it decelerate over a longer distance. Stopping it short dumps all that force into the joint and is a major injury cause.",
      },
      {
        id: "bb1-04-s4",
        label: "Year-Round Arm",
        situation:
          "A 13-year-old pitches travel ball in spring, All-Stars in summer, fall ball, and takes pitching lessons all winter — roughly year-round. His dad asks the orthopedist if that's safe for the arm.",
        prompt: "What do sports-medicine guidelines (Pitch Smart) recommend?",
        options: [
          "Year-round is fine as long as each season's pitch counts are respected",
          "He should take at least 3-4 consecutive months off from overhead throwing each year",
          "More throwing builds arm strength and prevents injury",
          "Only winter pitching is risky; the rest is fine",
        ],
        correctIndex: 1,
        explanation:
          "USA Baseball's Pitch Smart and ASMI research both call for 3-4 consecutive months off from all overhead throwing each year. Year-round pitching and single-sport specialization are top risk factors for UCL (Tommy John) injuries in youth arms.",
      },
    ],
  },

  // ─── baseball-1-05: Fielding and Throwing ─────────────────────────────────
  "baseball-1-05": {
    intro:
      "Every great defensive play starts before the ball is hit. Make the fundamentally sound choice on each ball in the dirt and in the air.",
    spots: [
      {
        id: "bb1-05-s1",
        label: "Ready Position",
        situation:
          "You're at second base and the pitcher is starting his windup. You're standing straight up, arms at your sides, glove hanging down. A sharp grounder gets past you before you can react.",
        prompt: "What ready position should you have been in?",
        options: [
          "Feet wider than shoulders, knees bent, weight on the balls of the feet, glove out front",
          "Feet together, standing tall, to save energy for the jump",
          "Crouched flat with the glove already on the ground",
          "Heels down, leaning back, ready to retreat",
        ],
        correctIndex: 0,
        explanation:
          "The athletic ready position — feet wider than shoulders, knees bent, weight forward on the balls of the feet, glove out front at about waist height — lets you push off in any direction instantly. Standing tall adds nearly half a second to your first step.",
      },
      {
        id: "bb1-05-s2",
        label: "Field the Hop",
        situation:
          "A ground ball is bouncing toward you. You can either stay back and wait for it to come to you, or charge in and field it out in front.",
        prompt: "What's the better approach and why?",
        options: [
          "Stay back so the ball comes to you on a predictable hop",
          "Charge it — you reach it faster and can pick a good long hop instead of a tricky short hop",
          "Charge only if there are no runners on base",
          "It doesn't matter; both are equal",
        ],
        correctIndex: 1,
        explanation:
          "Charging gets you to the ball faster (less time for runners) AND lets you field a clean long hop rather than being trapped by an in-between short hop. Waiting passively forces you to take whatever bad bounce arrives.",
      },
      {
        id: "bb1-05-s3",
        label: "Get Low",
        situation:
          "A routine grounder comes right at you, but you field it standing up at hip height with your glove pointed sideways. It skips under your glove and through your legs.",
        prompt: "What's the correct way to set the glove on a ground ball?",
        options: [
          "Glove fingers pointing UP, hands at the waist",
          "Glove turned sideways to scoop it",
          "Glove down low with the fingers pointing at the ground, body bent and low",
          "One hand only, reaching out to the side",
        ],
        correctIndex: 2,
        explanation:
          "Get low with your glove on the ground, fingers pointing down, so a short hop can't bounce under it. Field with two hands and watch the ball all the way in. Staying tall is what lets grounders skip through.",
      },
      {
        id: "bb1-05-s4",
        label: "The Throw",
        situation:
          "A shortstop fields the ball cleanly but grabs it with whatever fingers land on the leather and throws to first. The ball tails badly and pulls the first baseman off the bag.",
        prompt: "What would make her throws straighter?",
        options: [
          "Throw harder to overpower the tail",
          "Aim to the opposite side to compensate for the tail",
          "Get a quick four-seam grip across the seams before throwing",
          "Use a sidearm motion every time",
        ],
        correctIndex: 2,
        explanation:
          "A four-seam grip (fingers across the seams) gives the ball true backspin, so it carries straight. A random or two-seam grip puts side-spin on it and makes the throw tail or sink. Snapping to a four-seam grip on every throw is the habit that fixes accuracy.",
      },
    ],
  },

  // ─── baseball-1-06: Infield Play ──────────────────────────────────────────
  "baseball-1-06": {
    intro:
      "The infield turns ground balls into outs and snuffs out rallies. Position yourself and execute the way a steady infield does.",
    spots: [
      {
        id: "bb1-06-s1",
        label: "Stretch at First",
        situation:
          "You're playing first base. The third baseman fields a slow chopper and his throw is going to be a bang-bang play. The runner is sprinting down the line.",
        prompt: "How do you give your team the best chance at the out?",
        options: [
          "Stay flat-footed on the bag and wait for the ball",
          "Stretch toward the throw — keep your back foot on the bag and reach to catch it sooner",
          "Leave the bag and run toward the ball",
          "Jump straight up to catch it",
        ],
        correctIndex: 1,
        explanation:
          "Stretching toward the throw with your heel anchored on the bag shortens the ball's flight by a step's worth of distance — often the difference on a close play. Just be sure to keep contact with the base until the ball is secured.",
      },
      {
        id: "bb1-06-s2",
        label: "Turn Two",
        situation:
          "Runner on first, nobody out, sharp grounder to the shortstop. You want the classic double play.",
        prompt: "What's the standard fielder sequence for this double play?",
        options: [
          "Shortstop to second base, then second baseman to first (a 6-4-3)",
          "Shortstop straight to first base only",
          "Third baseman to second to first (a 5-4-3)",
          "Pitcher to home to first",
        ],
        correctIndex: 0,
        explanation:
          "The most common twin killing is the 6-4-3: shortstop (6) flips to the second baseman covering second (4) for the force, who then fires to first (3) to double off the batter. Get the lead out first, then the throw to first.",
      },
      {
        id: "bb1-06-s3",
        label: "Call It Off",
        situation:
          "A pop fly drifts into shallow center, halfway between you at shortstop and the center fielder. Both of you are converging on it.",
        prompt: "Who should take it and how is it decided?",
        options: [
          "Whoever gets there first, no call needed",
          "The shortstop always has priority over outfielders",
          "The outfielder calls it loudly and takes priority — he's moving toward the infield with the play in front of him",
          "Both keep going and hope one catches it",
        ],
        correctIndex: 2,
        explanation:
          "Loud, early communication prevents collisions, and a player coming in on the ball with the play in front of him has the easier catch. On shallow flies an outfielder calling 'Ball! Ball!' takes priority over the retreating infielder, who peels off.",
      },
      {
        id: "bb1-06-s4",
        label: "Back It Up",
        situation:
          "There's a runner on first with a base hit to the outfield. You're the first baseman, the ball is in the outfield, and a throw is coming toward third base across the diamond.",
        prompt: "What should you be doing on this play?",
        options: [
          "Stand on first base and watch the throw",
          "Move to back up the throw to third in case it gets away",
          "Run toward the ball in the outfield",
          "Leave the field area — the play is away from you",
        ],
        correctIndex: 1,
        explanation:
          "Smart infields back up throws. With the play going to third and you no longer needed at first, you move behind the target base so an errant throw doesn't roll free and let runners take an extra base. Backing up bases turns overthrows into no harm done.",
      },
    ],
  },

  // ─── baseball-1-07: Outfield Play ─────────────────────────────────────────
  "baseball-1-07": {
    intro:
      "Outfielders are the last line of defense — one misread ball becomes extra bases. Track it, hit the cutoff, and talk.",
    spots: [
      {
        id: "bb1-07-s1",
        label: "Drop Step",
        situation:
          "You're in center field. The ball is crushed over your head. Your instinct is to backpedal straight back to keep your eyes on it.",
        prompt: "What's the correct first move on a ball hit over your head?",
        options: [
          "Backpedal so you can watch the ball the whole way",
          "Take a drop step — turn and run to the spot, then find the ball",
          "Stay put and hope it stays in front",
          "Jump immediately",
        ],
        correctIndex: 1,
        explanation:
          "Open up with a drop step, turn, and sprint to where the ball is going — then locate it over your shoulder. Backpedaling is slow and unstable; you can't cover ground or you stumble. Outfielders run to the spot and let the ball come down to them.",
      },
      {
        id: "bb1-07-s2",
        label: "Read the Bat",
        situation:
          "Before the pitch even lands, good outfielders are already getting their first read. The crack of the bat and the ball's initial launch tell the story.",
        prompt: "What's your best earliest cue for where a fly ball is headed?",
        options: [
          "Wait until the ball is halfway to you, then move",
          "Watch the runners to see where they go",
          "The sound off the bat and the ball's initial angle off the bat",
          "Guess based on the hitter's name",
        ],
        correctIndex: 2,
        explanation:
          "The sound of contact and the ball's launch angle off the bat are the first and best cues — they let you break in the right direction immediately. A line drive reads flat and hard; a high, lazy arc reads easy. Reacting late costs you the catch.",
      },
      {
        id: "bb1-07-s3",
        label: "Hit the Cutoff",
        situation:
          "Runner on first scoring position aside, a single drops in front of you in right with a runner rounding second. The infielder has come out to the grass, lined up between you and the base, waving his arms as your relay man.",
        prompt: "Where should you throw?",
        options: [
          "Air-mail it all the way to the base on the fly",
          "Throw low and on a line to the cutoff man",
          "Hold the ball and run it in yourself",
          "Throw to a different base entirely",
        ],
        correctIndex: 1,
        explanation:
          "Hit the cutoff man with a strong, low throw. He can redirect it to whichever base the play develops, or cut it to stop other runners from advancing. One-hop moon-shots to the base let every other runner move up.",
      },
      {
        id: "bb1-07-s4",
        label: "Two Outfielders",
        situation:
          "A fly ball splits the gap between you in left and the center fielder. You're both sprinting full speed at the ball and at each other.",
        prompt: "How do you avoid a collision and make the catch?",
        options: [
          "Both keep going silently and hope for the best",
          "Whoever wants it calls it loudly and early; the other peels off and backs up",
          "Slow down so neither of you gets hurt",
          "The left fielder always yields to no one",
        ],
        correctIndex: 1,
        explanation:
          "The fielder taking it yells 'Ball! Ball! Ball!' early and loud; the other immediately gives way and trails the play to back up in case of a miss. Center field generally has priority on balls he can reach, but the rule is simple: loud call wins, no call means danger.",
      },
    ],
  },

  // ─── baseball-1-08: Baserunning ───────────────────────────────────────────
  "baseball-1-08": {
    intro:
      "Smart baserunning steals bases and extra 90 feet without swinging the bat. Read each situation and run the bases the right way.",
    spots: [
      {
        id: "bb1-08-s1",
        label: "Tag Up",
        situation:
          "You're on third base with one out. The batter lifts a deep fly ball to the outfield that's clearly going to be caught.",
        prompt: "What should you do as the catch is made?",
        options: [
          "Take off for home the instant the ball is hit",
          "Stay on third, retouch the base as the ball is caught, then sprint home",
          "Leave third and stand halfway down the line",
          "Run only if the outfielder drops it",
        ],
        correctIndex: 1,
        explanation:
          "On a caught fly you must tag up — stay in contact with the base until the ball is touched, then go. Leaving early lets the defense throw back to third to double you off. With a deep fly and one out, tagging from third is a classic sac-fly run.",
      },
      {
        id: "bb1-08-s2",
        label: "Run on Contact",
        situation:
          "You're on first base with two outs and a full count on the batter. The pitch is on its way.",
        prompt: "With two outs and the count full, what should you do on the pitch?",
        options: [
          "Stay glued to first until you see where the ball is hit",
          "Take off with the pitch — with two outs and a full count you run on contact",
          "Wait for the coach to wave you",
          "Return to the base and hold",
        ],
        correctIndex: 1,
        explanation:
          "Two outs, full count: every runner is forced to go on the pitch ('running on contact'). A swing means the ball is in play and you'd be forced anyway; a ball four is a walk that forces you up. Getting a running start turns singles into first-to-third and scores runners from second.",
      },
      {
        id: "bb1-08-s3",
        label: "Round the Bag",
        situation:
          "You smash a ball into the right-field corner. As you approach first base it's obviously going to be at least a double.",
        prompt: "How should you take first base on an extra-base hit?",
        options: [
          "Run straight through the bag in a straight line",
          "Veer out a few steps before the bag and hit the inside corner to round it toward second",
          "Stop on first to be safe",
          "Slide into first base",
        ],
        correctIndex: 1,
        explanation:
          "On an extra-base hit you bow out slightly into foul ground a few steps before the bag, then hit the inside corner of first and angle toward second — a 'banana' path that carries your momentum. Running straight through is only for a play where you're stopping at first.",
      },
      {
        id: "bb1-08-s4",
        label: "Slide",
        situation:
          "You're trying to steal second and the throw is coming. A tag is going to be applied right at the bag.",
        prompt: "What's the safe, sound way to reach the base on a close play?",
        options: [
          "Run in standing up and hope you beat it",
          "Slide — get down early, lead foot to the bag, hands up and back to stay safe",
          "Jump over the fielder",
          "Slow down so you don't overrun it",
        ],
        correctIndex: 1,
        explanation:
          "Slide on a close play: it lets you reach the bag at full speed while giving the tag a smaller, lower target and helping you stop right on the base. Keep your hands up and off the ground to avoid jammed fingers, and start the slide early — never late.",
      },
    ],
  },

  // ─── baseball-1-09: Catching — The Field General ──────────────────────────
  "baseball-1-09": {
    intro:
      "The catcher runs the defense from behind the plate. Gear up, give the signs, and protect the plate on every pitch.",
    spots: [
      {
        id: "bb1-09-s1",
        label: "Block the Ball",
        situation:
          "Runner on third, fewer than two outs. The pitcher bounces a curveball in the dirt right in front of you.",
        prompt: "How should you handle the pitch in the dirt?",
        options: [
          "Stab at it with the glove to try to catch it clean",
          "Drop to your knees, chest over the ball, chin down, and smother it in front of you",
          "Step back so it doesn't hit you",
          "Let it go to the backstop and chase it",
        ],
        correctIndex: 1,
        explanation:
          "With a runner on third you block, not catch: drop to your knees, angle your shoulders and chest down over the ball, tuck your chin, and keep it in front of you. Stabbing with the glove often deflects it away and lets the run score.",
      },
      {
        id: "bb1-09-s2",
        label: "Framing",
        situation:
          "A pitch arrives right on the edge of the strike zone — a true borderline pitch the umpire could call either way.",
        prompt: "What's good receiving (framing) technique here?",
        options: [
          "Yank the glove hard back into the zone after catching it",
          "Receive it quietly with a soft, still glove and hold it for a beat on the edge",
          "Stab out at the pitch to show effort",
          "Drop the glove down immediately",
        ],
        correctIndex: 1,
        explanation:
          "Good framing is quiet and subtle: catch the borderline pitch softly, keep the glove still, and hold it for a beat to present a strike. Jerking the glove ('snatching') tells the umpire it was a ball and loses you the call.",
      },
      {
        id: "bb1-09-s3",
        label: "Give the Sign",
        situation:
          "Before the pitch you crouch down and flash a signal to the pitcher with your fingers between your knees.",
        prompt: "Why do you tuck the signs in tight between your thighs?",
        options: [
          "To stay comfortable in the crouch",
          "So only the pitcher (and middle infielders) can see them, not the opposing runners or coaches",
          "It's just tradition with no real purpose",
          "To keep your hand warm",
        ],
        correctIndex: 1,
        explanation:
          "Signs are hidden deep between the thighs so a runner on second or a base coach can't read the pitch and tip off the hitter. The catcher calls the pitch, sets the target, and runs the defense — the field general behind the plate.",
      },
      {
        id: "bb1-09-s4",
        label: "Catch and Throw",
        situation:
          "A runner on first takes off to steal second. You catch the pitch cleanly and need to get rid of the ball fast.",
        prompt: "What gives you the best chance to throw him out?",
        options: [
          "A long wind-up to put maximum power on it",
          "A quick transfer to a four-seam grip and a snappy throw to second — speed of release matters most",
          "Run a few steps toward second before throwing",
          "Throw it as a high looping arc",
        ],
        correctIndex: 1,
        explanation:
          "Throwing out a base stealer is about a quick release, not just arm strength. Catch, snap to a four-seam grip, and use a short, compact throwing motion to second on a line. A long wind-up wastes the fractions of a second that decide the play.",
      },
    ],
  },

  // ─── baseball-1-10: Sportsmanship and the Spirit of the Game ──────────────
  "baseball-1-10": {
    intro:
      "How you play matters as much as whether you win. These are the off-the-field decisions that make a real teammate.",
    spots: [
      {
        id: "bb1-10-s1",
        label: "Run It Out",
        situation:
          "You hit a routine ground ball to the shortstop and you're almost certainly going to be thrown out at first.",
        prompt: "What's the right thing to do?",
        options: [
          "Jog half-speed since you'll probably be out anyway",
          "Sprint hard all the way through the bag in case of a bobble or bad throw",
          "Stop and walk back to the dugout",
          "Throw your bat in frustration",
        ],
        correctIndex: 1,
        explanation:
          "You hustle and run everything out hard through the bag. Defenders boot routine balls and airmail throws all the time — full effort puts the pressure on them and shows respect for the game and your teammates. Never assume you're out.",
      },
      {
        id: "bb1-10-s2",
        label: "Respect the Ump",
        situation:
          "You're sure the umpire blew a call at the plate — you thought you were safe and you were called out.",
        prompt: "What's the right response?",
        options: [
          "Argue loudly and throw your helmet",
          "Accept the call, head back to the dugout, and let your coach handle any questions calmly",
          "Refuse to leave the field",
          "Yell at the umpire from the bench",
        ],
        correctIndex: 1,
        explanation:
          "You accept the umpire's call and move on — arguing, throwing equipment, or showing the ump up is poor sportsmanship and can get you ejected. If there's a real question, that's the coach's job, handled respectfully.",
      },
      {
        id: "bb1-10-s3",
        label: "Pick Them Up",
        situation:
          "Your teammate just made an error that let in the go-ahead run, and he's hanging his head in the field.",
        prompt: "What should you do as a teammate?",
        options: [
          "Glare at him so he knows he messed up",
          "Encourage him — a quick 'shake it off, we've got the next one' and stay positive",
          "Ignore him completely",
          "Complain to the coach about him",
        ],
        correctIndex: 1,
        explanation:
          "Errors are part of baseball — even the pros make them. A good teammate picks people up with encouragement and keeps the dugout positive. Tearing a teammate down only makes the team worse and the game miserable.",
      },
      {
        id: "bb1-10-s4",
        label: "The Handshake Line",
        situation:
          "Your team just lost a close, hard-fought game. The two teams line up to shake hands afterward.",
        prompt: "What's the right way to go through the line?",
        options: [
          "Skip it — you're too disappointed to bother",
          "Shake every hand and say 'good game' even though you lost",
          "Go through but refuse to make eye contact or speak",
          "Only shake hands with players you like",
        ],
        correctIndex: 1,
        explanation:
          "Win or lose, you go through the handshake line and offer a genuine 'good game.' Respecting your opponents and the game itself is the heart of sportsmanship — it's what separates real competitors from sore losers.",
      },
    ],
  },
};
