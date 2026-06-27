import type { ScenarioConfig } from "./types";

// "Read the Play" Decision-Trainer scenarios for the Right Field epoch (baseball-15).
// Each spot is a deterministic, skill-based defensive decision — the correct line is
// the sound right-field play taught in that stage, never a coin-flip outcome.
// correctIndex and explanation are stripped server-side before reaching the client.
export const baseball15Scenarios: Record<string, ScenarioConfig> = {
  // ─── baseball-15-01: Right Field — The Cannon ───────────────────────────────
  "baseball-15-01": {
    intro: "You're the right fielder — the strong-arm corner. Before a pitch is thrown, make sure you understand why the cannon lives in right and what it does to the running game.",
    spots: [
      {
        id: "bb15-01-s1", label: "The Corner",
        situation: "A new right fielder asks why the team's strongest outfield arm was put in right rather than left or center.",
        prompt: "Why does the strongest outfield arm usually go in right field?",
        options: [
          "Because right field is the farthest outfield spot from third base, so the throw to third is the longest outfield throw",
          "Because right field sees the most batted balls of any outfield spot",
          "Because right fielders never have to run for the ball",
          "Because the rulebook assigns the strong arm to right",
        ],
        correctIndex: 0,
        explanation: "Right field is the farthest outfield position from third base, so the throw to third — to nail or hold a runner advancing from first on a single — is the longest outfield throw. That geometry is why the cannon goes in right, even though right tends to see fewer batted balls than left.",
      },
      {
        id: "bb15-01-s2", label: "The Deterrent",
        situation: "Earlier this game you gunned a runner out at third. Now a single drops in front of you with a runner on first, and the runner pulls up at second instead of trying for third.",
        prompt: "How is your arm controlling the running game on this play?",
        options: [
          "It isn't — only an actual throw counts",
          "The threat of your cannon deterred the runner from taking the extra base, so he held without a throw being needed",
          "The runner stopped only because he was tired",
          "Your arm matters solely on home-run robberies",
        ],
        correctIndex: 1,
        explanation: "A strong-armed right fielder controls the running game by reputation. Once runners respect the arm, they stop testing it and hold up — the deterrent is as valuable as the assists themselves.",
      },
      {
        id: "bb15-01-s3", label: "The Slice",
        situation: "A left-handed batter pulls a high fly ball toward your corner. As it travels it begins to hook toward the right-field line.",
        prompt: "What must you account for on this pulled fly from a lefty?",
        options: [
          "Nothing — pulled fly balls travel in a straight line",
          "That the ball will curve back toward center field",
          "The slice — a lefty's pulled ball hooks toward the right-field line, so your route must bend with the curve",
          "That the ball will stop and drop straight down",
        ],
        correctIndex: 2,
        explanation: "A ball pulled by a left-handed hitter slices toward the right-field line. Run a route that accounts for the hook instead of a straight line to where it started — reading the slice is a distinctive right-field skill.",
      },
      {
        id: "bb15-01-s4", label: "Defer or Take",
        situation: "A ball is hit into right-center. You and the center fielder are both closing on it and both call for it.",
        prompt: "Who has priority on the ball in the gap?",
        options: [
          "The right fielder always takes gap balls",
          "The center fielder — he's the captain of the outfield and has priority on shared balls",
          "Whoever is louder",
          "Neither — let it drop to avoid a collision",
        ],
        correctIndex: 1,
        explanation: "The center fielder is the outfield captain and has priority on balls you can both reach. Communicate, then defer and peel off to back him up.",
      },
    ],
  },

  // ─── baseball-15-02: Reading the Ball and the Jump ──────────────────────────
  "baseball-15-02": {
    intro: "Range starts before your feet move. Read the ball off the bat, take the right first step, and run a route that feeds the throw.",
    spots: [
      {
        id: "bb15-02-s1", label: "Over the Head",
        situation: "A ball is crushed high and deep, clearly over your head and toward the wall.",
        prompt: "What's your first move?",
        options: [
          "Drop-step and turn to run toward the landing spot, then look back for the ball",
          "Backpedal as fast as you can while facing the infield",
          "Freeze and wait to see where it comes down",
          "Charge in toward the infield",
        ],
        correctIndex: 0,
        explanation: "On a ball over your head you drop-step — pivot and sprint back toward the projected landing spot, then find the ball over your shoulder. Backpedaling is slow and unstable and gets balls misjudged.",
      },
      {
        id: "bb15-02-s2", label: "The Jump",
        situation: "Two right fielders run the same sprint speed, but one consistently reaches more balls.",
        prompt: "What most likely gives the one fielder more range?",
        options: [
          "He simply gets lucky on more balls",
          "A better jump — reading the ball instantly and breaking in the right direction sooner",
          "He plays much shallower on every hitter",
          "Nothing — equal speed means equal range",
        ],
        correctIndex: 1,
        explanation: "A great jump — an instant read plus a correct first step — covers more ground than equal raw speed with a late reaction or a bad route. Reads and routes create range.",
      },
      {
        id: "bb15-02-s3", label: "The Banana Route",
        situation: "A single is dropping in front of you with a runner on first who'll try for third. You have time to choose your path to the ball.",
        prompt: "What route should you run?",
        options: [
          "A straight line that leaves you flat-footed and moving sideways at the ball",
          "A path that drifts you away from the infield so you catch it backing up",
          "A slightly curved 'banana' route so you arrive at the ball already moving toward third base",
          "The shortest possible route regardless of momentum",
        ],
        correctIndex: 2,
        explanation: "A banana route brings you to the ball with momentum already carrying toward your throw. For the right fielder making the longest throws, arriving in throwing motion is doubly valuable.",
      },
      {
        id: "bb15-02-s4", label: "Read at Contact",
        situation: "You want to get the best possible jump on every ball.",
        prompt: "What gives you the earliest, most accurate read?",
        options: [
          "Watching the scoreboard between pitches",
          "Anticipating from the pitch, count, and hitter, then reading the sound and initial flight at contact",
          "Waiting until the ball is halfway to you before moving",
          "Guessing a direction before the pitch and committing no matter what",
        ],
        correctIndex: 1,
        explanation: "A great jump is anticipation plus an instant read — study the pitch, count, and hitter before contact, then read trajectory off the sound and first flight. That beats raw speed with a late reaction.",
      },
    ],
  },

  // ─── baseball-15-03: Catching Fly Balls and Line Drives ─────────────────────
  "baseball-15-03": {
    intro: "For the strong-arm corner, the catch is the first step of the throw. Catch to throw, read the liner, and run down the deep ball.",
    spots: [
      {
        id: "bb15-03-s1", label: "Catch to Throw",
        situation: "A medium fly ball is hit to you with a runner tagging at third, ready to score.",
        prompt: "How should you catch this ball?",
        options: [
          "Basket-style at your belt with one hand",
          "With two hands at or above the throwing-shoulder side of your head, so the catch flows straight into the throw",
          "Behind your back to look smooth",
          "As low to the ground as possible",
        ],
        correctIndex: 1,
        explanation: "Catching with two hands above the throwing shoulder lets you transfer and fire immediately at the plate. Basket-catching at the belt is slow to throw from and lets the runner score.",
      },
      {
        id: "bb15-03-s2", label: "The Liner",
        situation: "A line drive is hit right at you, and you can't immediately tell if it's sinking or carrying.",
        prompt: "What's the correct approach to a line drive?",
        options: [
          "Always charge every line drive hard",
          "Always drift back on every line drive",
          "Read whether it's sinking or carrying, then commit — charge a sinker, drift back on a carrier",
          "Stand still until it nearly lands",
        ],
        correctIndex: 2,
        explanation: "Line drives are the hardest read because sink vs. carry is hard to judge. Read it quickly and commit — hesitation turns a catchable liner into a hit over or in front of you.",
      },
      {
        id: "bb15-03-s3", label: "The Crow-Hop",
        situation: "You catch a fly ball with a runner tagging at third. You catch it cleanly but throw home flat-footed from a standstill, and the throw is weak and late.",
        prompt: "What footwork should you have used to generate a strong throw?",
        options: [
          "A crow-hop — a shuffle-hop after the catch that builds momentum into the throw",
          "Throwing while falling backward",
          "A full 360-degree spin before releasing",
          "Throwing flat-footed but harder",
        ],
        correctIndex: 0,
        explanation: "A crow-hop transfers your weight and builds momentum behind the throw. Even a strong arm produces a weak, late throw flat-footed from a standstill.",
      },
      {
        id: "bb15-03-s4", label: "Deep and Gone",
        situation: "A ball is hit well over your head into the gap. You've drop-stepped and you're at a full sprint, and the ball is still carrying as you reach the spot.",
        prompt: "What catch should you make?",
        options: [
          "Stop, square up to the infield, and catch it facing in",
          "A basket catch at your belt",
          "An over-the-shoulder catch on the run, tracking it like a receiver",
          "Let it drop and play the carom off the wall",
        ],
        correctIndex: 2,
        explanation: "On a ball well over your head you make an over-the-shoulder catch on the run, covering maximum ground at full speed. Stopping to square up wastes time and the ball gets by you.",
      },
    ],
  },

  // ─── baseball-15-04: The Cannon — Throwing to Third and Home ─────────────────
  "baseball-15-04": {
    intro: "Your signature weapon is the throw to third — the longest in the outfield. Make it flat, accurate, and through the cutoff.",
    spots: [
      {
        id: "bb15-04-s1", label: "Trajectory",
        situation: "A single with a runner trying to go first-to-third. You field it cleanly and have to choose how to throw it to third base.",
        prompt: "What trajectory should the long throw to third have?",
        options: [
          "A high, looping rainbow so it carries the distance",
          "A low, flat, carrying line that gets there fast and stays catchable for the cutoff",
          "A one-hop bounce starting halfway, every time",
          "A soft lob to make it easy to handle",
        ],
        correctIndex: 1,
        explanation: "A flat, carrying line gets to third faster and stays at a height the cutoff can handle. A high rainbow is slow and arrives too late to retire the runner.",
      },
      {
        id: "bb15-04-s2", label: "The Grip",
        situation: "You're setting up the strongest, most accurate long throw you can make.",
        prompt: "Which grip should you use coming out of the glove?",
        options: [
          "A four-seam grip across the seams for the truest, carrying throw",
          "Whatever grip the ball happens to land in",
          "A two-seam grip so the ball sinks and tails",
          "A knuckleball grip to fool the runner",
        ],
        correctIndex: 0,
        explanation: "A four-seam grip produces the straightest, most carrying throw with the least tail — exactly what a long, accurate throw to third or home needs.",
      },
      {
        id: "bb15-04-s3", label: "Hit the Cutoff",
        situation: "On a long throw home, you airmail the ball over the cutoff man's head. A trailing runner advances an extra base because the throw couldn't be redirected.",
        prompt: "Why is hitting the cutoff man especially important on your long throws?",
        options: [
          "It isn't — always throw directly to the base instead",
          "Because your throws are so long, hitting the cutoff keeps the defense's options to relay, redirect, or let it through",
          "The cutoff man has no role once the ball is in the air",
          "Hitting the cutoff just slows everything down for no reason",
        ],
        correctIndex: 1,
        explanation: "Because right field's throws are the longest, an accurate throw to or through the cutoff lets the defense relay it, cut it to catch a trailing runner, or let it go. An overthrow removes every option.",
      },
      {
        id: "bb15-04-s4", label: "Generate the Power",
        situation: "You want to put everything behind the long throw to third without sacrificing accuracy.",
        prompt: "Where does the power on a strong outfield throw come from?",
        options: [
          "The arm alone, snapping the wrist",
          "The whole body — a crow-hop transferring weight, the legs and core driving through the throw",
          "Throwing while standing perfectly still and tall",
          "Leaning back and short-arming the ball",
        ],
        correctIndex: 1,
        explanation: "The crow-hop, legs, and core generate most of the throw's power and let the arm work from a strong base. Arm-only throws are weaker and less accurate over the long distance to third.",
      },
    ],
  },

  // ─── baseball-15-05: Building the Right Fielder's Body ───────────────────────
  "baseball-15-05": {
    intro: "Train like a sprinter with the strongest corner arm. These are the right fielder's body-building and arm-care decisions.",
    spots: [
      {
        id: "bb15-05-s1", label: "Distinctive Priority",
        situation: "A coach is developing a young right fielder and notes one physical trait matters more here than at the other outfield spots.",
        prompt: "What is the right fielder's distinctive physical priority?",
        options: [
          "Maximum body size and weight above all",
          "The least arm strength of any outfielder",
          "Elite, durable arm strength for the longest throws to third and home",
          "Only flexibility, with no need for an arm",
        ],
        correctIndex: 2,
        explanation: "The right fielder still needs an outfielder's speed and quickness, but his defining priority is the strongest, most durable throwing arm in the outfield — that's what controls the running game from the corner.",
      },
      {
        id: "bb15-05-s2", label: "Build the Cannon",
        situation: "You want to develop a stronger, more durable throwing arm over the offseason.",
        prompt: "Which program best builds and protects the arm?",
        options: [
          "Long-toss, sound mechanics, and rotator-cuff and scapular strengthening",
          "Never throwing in practice to save the arm",
          "Throwing maximum effort every day with no warm-up or rest",
          "Only running sprints, with no throwing at all",
        ],
        correctIndex: 0,
        explanation: "Long-toss safely builds arm strength, sound mechanics protect the shoulder, and rotator-cuff/scapular work keeps the arm durable over a season of high-effort throws. Max-effort with no warm-up or recovery invites injury.",
      },
      {
        id: "bb15-05-s3", label: "Legs and Core",
        situation: "A right fielder relies on his arm alone to throw, neglecting his lower body, and his long throws to third lack power and accuracy.",
        prompt: "Why do strong legs and core matter for his throws?",
        options: [
          "They don't — only the arm produces throwing power",
          "They generate much of the throw's power, transferring energy through the crow-hop into the arm",
          "They only help with hitting, not throwing",
          "Only the forearm matters for an outfield throw",
        ],
        correctIndex: 1,
        explanation: "The legs and core drive both the sprint and the throw, feeding energy through the crow-hop into the arm. Arm-only throwers produce weaker, less accurate long throws.",
      },
      {
        id: "bb15-05-s4", label: "The Profile",
        situation: "A young player asks how to picture the ideal right fielder's body.",
        prompt: "How is the ideal right fielder's physical profile best described?",
        options: [
          "A slow slugger with a weak arm",
          "Pure size with no speed required",
          "Only flexibility, with no speed or arm",
          "A sprinter with the strongest corner arm — explosive for range, with an elite, durable arm",
        ],
        correctIndex: 3,
        explanation: "The right fielder is built like a sprinter with the strongest corner arm: first-step quickness and speed for range, plus the strongest, most durable arm in the outfield for the longest throws.",
      },
    ],
  },

  // ─── baseball-15-06: Playing the Line, the Wall, and the Sun ─────────────────
  "baseball-15-06": {
    intro: "The corner has its own hazards — the foul line, the wall and its caroms, and the sun. Make the reads that keep balls in front of you.",
    spots: [
      {
        id: "bb15-06-s1", label: "Guard the Line",
        situation: "Late in a close game, a double down the right-field line would put the tying run in scoring position. The hitter tends to pull.",
        prompt: "How should you adjust your positioning?",
        options: [
          "Cheat toward the line to guard against the extra-base hit down the corner",
          "Shade well into the gap and leave the line open",
          "Play your normal straight-up depth and position",
          "Move in shallow toward the infield",
        ],
        correctIndex: 0,
        explanation: "In a situation where a ball down the line hurts most, the right fielder guards the line — giving up the lower-cost single to the gap to take away the double down the corner.",
      },
      {
        id: "bb15-06-s2", label: "The Sun",
        situation: "A high fly ball is hit toward you, directly into the blinding afternoon sun.",
        prompt: "What's the correct technique to track it?",
        options: [
          "Stare straight into the sun and hope to pick it up",
          "Use your glove or throwing hand to shield your eyes and pick the ball up beside the glare, moving to change your angle",
          "Close your eyes and listen for the ball",
          "Turn your back and play the bounce",
        ],
        correctIndex: 1,
        explanation: "Use your glove or free hand as a visor to block the glare and try to find the ball off to the side of the sun, adjusting your angle so the sun isn't directly behind it. Flip-down sunglasses help too.",
      },
      {
        id: "bb15-06-s3", label: "The Carom",
        situation: "A ball is hit hard into the right-field corner and rebounds off the wall as a runner sprints the bases.",
        prompt: "What's the priority on a ball off the wall?",
        options: [
          "Get to the ball fast, play the carom cleanly off the wall, and come up throwing to the cutoff",
          "Wait for the ball to stop rolling before picking it up",
          "Always assume it will bounce straight back to you",
          "Charge the wall and try to catch the rebound bare-handed for style",
        ],
        correctIndex: 0,
        explanation: "On a ball in the corner, knowing how it'll carom and getting to it fast — then coming up throwing to the cutoff — limits the runner to the fewest bases. Misplaying the carom turns a double into a triple or worse.",
      },
      {
        id: "bb15-06-s4", label: "Know Your Park",
        situation: "You're playing in an unfamiliar ballpark with an oddly angled right-field wall and a short corner.",
        prompt: "What should you do before the game?",
        options: [
          "Nothing — every outfield wall plays the same",
          "Learn the wall during warmups — its angles, padding, and how balls carom off it",
          "Play extra deep to avoid the wall entirely",
          "Assume it plays exactly like your home park",
        ],
        correctIndex: 1,
        explanation: "Good right fielders learn each park's right-field wall and corner in warmups — the angles and caroms differ by stadium, and knowing them turns potential extra bases into outs or holds.",
      },
    ],
  },

  // ─── baseball-15-07: Backing Up First Base and Coverage ──────────────────────
  "baseball-15-07": {
    intro: "Most of your job happens when the ball isn't hit to you. Know where to go to back up throws and cover the bases.",
    spots: [
      {
        id: "bb15-07-s1", label: "Back Up First",
        situation: "With a runner on first, the pitcher throws over to first base on a pickoff attempt.",
        prompt: "Where should the right fielder be?",
        options: [
          "Standing still in right field watching",
          "Breaking in to back up first base in case the pickoff throw gets away",
          "Running toward second base",
          "Backing up home plate",
        ],
        correctIndex: 1,
        explanation: "The right fielder backs up first base on pickoff throws and throws to first. He's the only player positioned behind first on the right-field side, so an errant throw he backs up doesn't become extra bases.",
      },
      {
        id: "bb15-07-s2", label: "The Grounder",
        situation: "With nobody on, a ground ball is hit to the shortstop, who throws across to first base.",
        prompt: "What should the right fielder do?",
        options: [
          "Stay put — it's an infield play and none of his business",
          "Break in to back up first base in case the throw gets past the first baseman",
          "Run to cover second base",
          "Charge home plate",
        ],
        correctIndex: 1,
        explanation: "On any throw to first from the left side of the infield, the right fielder hustles in to back up first — a wild throw he's behind keeps the batter from taking second.",
      },
      {
        id: "bb15-07-s3", label: "Back Up Second",
        situation: "A single is hit to left field with a runner on first, and the throw is going to second base to try to keep the runner from advancing.",
        prompt: "What's the right fielder's job?",
        options: [
          "Stand and watch the play in left",
          "Break toward second base to back up the throw coming in from the left-field side",
          "Run to back up third base",
          "Cover first base",
        ],
        correctIndex: 1,
        explanation: "On a throw to second from the left-field side, the right fielder rotates over to back up second base. Outfielders back up bases on the throws coming from across the diamond.",
      },
      {
        id: "bb15-07-s4", label: "Always Moving",
        situation: "A coach stresses that the right fielder should rarely be standing still during a play, even when the ball isn't hit to him.",
        prompt: "Why is that?",
        options: [
          "To look busy for the coaches",
          "Because there's almost always a base or throw to back up or a coverage responsibility on every batted ball",
          "Outfielders are required to jog continuously by rule",
          "There's no real reason — he can stand still",
        ],
        correctIndex: 1,
        explanation: "On nearly every play the right fielder has a backup or coverage job — backing first or second, trailing a throw, or rotating with the play. A heads-up outfielder is moving with the ball even when it isn't hit to him.",
      },
    ],
  },

  // ─── baseball-15-08: Cutoffs, Relays, and Where to Throw ─────────────────────
  "baseball-15-08": {
    intro: "A cannon is only as good as its aim. Decide where to throw, hit the cutoff, and stop the trail runner from advancing.",
    spots: [
      {
        id: "bb15-08-s1", label: "Where to Throw",
        situation: "A single to right with a runner on second who's rounding third and clearly going to score easily. A batter is on first behind him.",
        prompt: "Where should you throw?",
        options: [
          "Home, on a hopeless throw that lets the batter take second",
          "To the cutoff man, conceding the run but keeping the batter-runner at first",
          "Into the stands to stop the clock",
          "Hold the ball and run it in",
        ],
        correctIndex: 1,
        explanation: "When the lead run will score easily, don't chase a hopeless throw home. Hit the cutoff and keep the trail runner from advancing — give up the run you can't stop, take away the base you can.",
      },
      {
        id: "bb15-08-s2", label: "Through the Cutoff",
        situation: "You have a play at the plate. The cutoff man lines up between you and home.",
        prompt: "How should you throw it?",
        options: [
          "Low and on a line through the cutoff man at chest height, so he can cut it or let it through",
          "High over the cutoff man's head straight to the catcher",
          "A high arc that drops in over everyone",
          "Bounce it well in front of the cutoff so it dies",
        ],
        correctIndex: 0,
        explanation: "Throw low and on a line at the cutoff man's chest. He can let a perfect throw through to the plate or cut it to make a play on a trail runner. A throw over his head removes every option.",
      },
      {
        id: "bb15-08-s3", label: "The Relay",
        situation: "You chase a ball deep into the right-center gap, far from the infield, with a runner circling the bases.",
        prompt: "How does the throw get in from that depth?",
        options: [
          "You make one all-out throw the entire distance yourself",
          "A middle infielder comes out as the relay man; you hit him and he relays it in",
          "You hold the ball since it's too far",
          "You throw directly to the dugout",
        ],
        correctIndex: 1,
        explanation: "On the deepest balls a middle infielder comes out as the relay man. You throw to him and he turns and fires — a quick, accurate relay beats one long, fading throw from the gap.",
      },
      {
        id: "bb15-08-s4", label: "Hit the Cutoff Man",
        situation: "A coach drills that the right fielder must hit the cutoff man on the throw home rather than airmailing it to the plate.",
        prompt: "What's the main reason hitting the cutoff matters?",
        options: [
          "It looks more disciplined to the crowd",
          "It keeps the defense's options — relay, redirect to a trail runner, or let it through — and prevents overthrows that let runners advance",
          "It's only a rule for infielders",
          "There's no real reason; throw straight to the base",
        ],
        correctIndex: 1,
        explanation: "Hitting the cutoff man preserves every option and prevents the overthrow that lets trailing runners take an extra base. Especially on right field's long throws, accuracy to the cutoff is what controls the play.",
      },
    ],
  },

  // ─── baseball-15-09: Right Field Situational IQ ──────────────────────────────
  "baseball-15-09": {
    intro: "Great defense is thinking before the pitch. Set your depth, read the elements, and know what you'll do with the ball before it's hit.",
    spots: [
      {
        id: "bb15-09-s1", label: "Pre-Pitch Plan",
        situation: "There's one out, a fast runner on second, and a single will likely be tested for a run.",
        prompt: "What should you do before the pitch?",
        options: [
          "Decide nothing and react after the ball is hit",
          "Know the situation — outs, runners, the score — and decide in advance where you'll throw on a ball hit to you",
          "Focus only on the hitter's stance and ignore the runners",
          "Wait for the third-base coach to tell you what to do",
        ],
        correctIndex: 1,
        explanation: "The heads-up right fielder rehearses the play before the pitch: with a runner on second and one out, he already knows he's charging the single and throwing home or to the cutoff. Pre-pitch thinking turns hesitation into instant action.",
      },
      {
        id: "bb15-09-s2", label: "Set Your Depth",
        situation: "It's a tie game in the ninth, a runner on second, and a single to the outfield would score the winning run.",
        prompt: "How should you play your depth?",
        options: [
          "Play deep to prevent anything over your head",
          "Play shallower so you can charge and throw home to cut down the winning run on a single",
          "Stay at standard depth and don't adjust",
          "Move to the line regardless of the hitter",
        ],
        correctIndex: 1,
        explanation: "When a single scores the winning run, the right fielder plays shallower to have a chance to throw the runner out at the plate. Depth is a situational decision, not a fixed spot.",
      },
      {
        id: "bb15-09-s3", label: "Read the Wind",
        situation: "It's a windy day and the flags are blowing hard in from right field toward the infield.",
        prompt: "How does that wind affect your play on fly balls?",
        options: [
          "It doesn't — wind has no effect on fly balls",
          "Balls will be held up and fall shorter than they look, so play a step in and stay ready to charge",
          "Balls will carry farther, so play deeper",
          "It only affects ground balls",
        ],
        correctIndex: 1,
        explanation: "A wind blowing in knocks fly balls down so they fall shorter than struck. The right fielder reads the flags and his pre-pitch position, cheating in a touch and being ready to charge.",
      },
      {
        id: "bb15-09-s4", label: "Know the Hitter",
        situation: "A dead-pull left-handed power hitter steps in, and you know he sprays almost everything toward the right-field line.",
        prompt: "How should you position?",
        options: [
          "Shade toward the right-field line and gap where he tends to hit it",
          "Shade toward center, away from his power",
          "Play exactly straight-up regardless of the hitter",
          "Move in shallow toward the infield",
        ],
        correctIndex: 0,
        explanation: "Positioning follows the hitter's tendencies and the scouting. Against a dead-pull lefty, the right fielder shades toward his corner and gap — playing the percentages of where the ball is most likely hit.",
      },
    ],
  },

  // ─── baseball-15-10: The Greats and the Mastery Mindset ──────────────────────
  "baseball-15-10": {
    intro: "Bring it all together — the reads, the routes, the catch-to-throw, the cannon, and the head. This is what separates a complete right fielder.",
    spots: [
      {
        id: "bb15-10-s1", label: "The Model",
        situation: "A young right fielder studies Mookie Betts as his model for the position.",
        prompt: "What does Betts demonstrate the right-field corner can be?",
        options: [
          "A spot where only hitting matters",
          "A defensive weapon — a strong, accurate arm and elite reads that control the running game and turn singles into outs",
          "A position requiring no real skill",
          "A place to hide a weak defender",
        ],
        correctIndex: 1,
        explanation: "Betts — multiple Gold Gloves, a feared arm, home-run robberies — shows the corner can be a defensive weapon. Great reads plus a great arm turn singles into held runners and outs.",
      },
      {
        id: "bb15-10-s2", label: "Judge the Process",
        situation: "You played a single perfectly — great jump, banana route, a strong accurate throw to the cutoff — but the runner still beat the throw to third by a step.",
        prompt: "How should you evaluate that play?",
        options: [
          "It was a bad play because the runner was safe",
          "It was a sound play — judge the process and execution, not a single bang-bang result",
          "You should stop throwing to third entirely",
          "Only the result matters; the read and route were pointless",
        ],
        correctIndex: 1,
        explanation: "A great right fielder judges the decision and execution, not one close result. Make the right read and the right throw consistently and the outs follow over time.",
      },
      {
        id: "bb15-10-s3", label: "The Complete Fielder",
        situation: "A coach lists what makes a complete right fielder beyond a strong arm.",
        prompt: "Which best captures the complete right fielder?",
        options: [
          "Arm strength alone, with nothing else needed",
          "The reads, routes, and catch-to-throw that set up the arm, plus situational IQ and backups",
          "Only raw foot speed",
          "Only the ability to hit home runs",
        ],
        correctIndex: 1,
        explanation: "The cannon is only a weapon when the reads, routes, catches, cutoffs, backups, and pre-pitch thinking all feed it. The complete right fielder masters the whole craft, not just the arm.",
      },
      {
        id: "bb15-10-s4", label: "The Mastery Mindset",
        situation: "You want to keep improving as a right fielder over a long career.",
        prompt: "What mindset best builds mastery at the position?",
        options: [
          "Assume you've already mastered it and stop practicing the fundamentals",
          "Keep drilling the fundamentals — jumps, routes, catch-to-throw, and arm care — and learn every park and hitter",
          "Rely only on natural talent and skip practice",
          "Focus only on highlight plays and ignore the routine ones",
        ],
        correctIndex: 1,
        explanation: "Mastery comes from relentlessly drilling the fundamentals, caring for the arm, and learning each park and hitter. The greats keep sharpening the routine plays that win games, not just the highlights.",
      },
    ],
  },
};
