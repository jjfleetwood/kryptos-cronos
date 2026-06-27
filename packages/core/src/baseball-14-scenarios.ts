import type { ScenarioConfig } from "./types";

// "Read the Play" Decision-Trainer scenarios for the Center Field epoch.
// Each spot is a deterministic, fundamentals-based defensive decision — the
// correct answer is the technique or read taught in that stage, never a
// luck-of-the-bounce outcome. correctIndex and explanation are stripped
// server-side before reaching the client.
export const baseball14Scenarios: Record<string, ScenarioConfig> = {
  "baseball-14-01": {
    intro: "You're the center fielder — the captain of the outfield, with the most ground to cover and priority on every ball you can reach. Let's set the foundations before the first pitch.",
    spots: [
      {
        id: "bb14-01-s1", label: "The Gap Ball",
        situation: "A fly ball drifts into the left-center gap. Both you and the left fielder break on it and you can both get there.",
        prompt: "Who takes the ball?",
        options: [
          "You do — the center fielder has priority and calls off the corner outfielder",
          "The left fielder — corners always have priority in their gap",
          "Whoever is closer to the foul line",
          "Let it drop and play the carom off the wall",
        ],
        correctIndex: 0,
        explanation: "The center fielder is the captain of the outfield and has priority on any ball he can reach. You call him off ('I got it!') so there's no collision and the better angle/speed makes the play.",
      },
      {
        id: "bb14-01-s2", label: "Set the Corners",
        situation: "A dead-pull right-handed slugger steps in. Before the pitch you survey the outfield alignment.",
        prompt: "As the captain, what's part of your job here?",
        options: [
          "Nothing — each outfielder positions only himself",
          "Position the corner outfielders and communicate the alignment, the way the shortstop leads the infield",
          "Move to play shortstop on the pull side",
          "Wait for the dugout to set everyone by hand",
        ],
        correctIndex: 1,
        explanation: "The center fielder leads the outfield: he positions the corner outfielders, communicates on every ball, and directs the unit — leadership is as much the job as range.",
      },
      {
        id: "bb14-01-s3", label: "Pick the Athlete",
        situation: "A coach has three outfielders and must decide who patrols center.",
        prompt: "Which player belongs in center field?",
        options: [
          "The one with the strongest bat regardless of defense",
          "The slowest player, to hide him in the biggest space",
          "The best all-around defensive athlete — speed, reads, routes, and an arm",
          "It doesn't matter; all outfield spots are identical",
        ],
        correctIndex: 2,
        explanation: "Center covers the most ground of any position, so teams put their best all-around defensive outfield athlete there — the way they put their best infield athlete at shortstop.",
      },
      {
        id: "bb14-01-s4", label: "The Signature Play",
        situation: "A deep drive looks gone, but you sprint back, time a leap at the wall, and reach above the fence.",
        prompt: "What is this play, and what makes it possible?",
        options: [
          "Luck alone — there's no skill to a wall catch",
          "Robbing a home run — built on read, route, speed, and timing, the center fielder's signature play",
          "A routine catch any infielder makes",
          "An illegal play that doesn't count as an out",
        ],
        correctIndex: 1,
        explanation: "Robbing a home run is the center fielder's signature play — Griffey made it famous — and it combines the read off the bat, an efficient route, speed to the wall, and the timing to leap.",
      },
    ],
  },

  "baseball-14-02": {
    intro: "Everything starts with the read off the bat and the jump. From straightaway you must break in any direction — let's get the first step right.",
    spots: [
      {
        id: "bb14-02-s1", label: "Over Your Head",
        situation: "Crack of the bat — the ball is hit hard, directly over your head toward the wall.",
        prompt: "What's your first move?",
        options: [
          "Backpedal as fast as you can while watching the ball",
          "Drop-step: pivot and turn, sprint toward the landing spot, then find the ball over your shoulder",
          "Freeze and wait to see where it lands",
          "Charge in toward the infield",
        ],
        correctIndex: 1,
        explanation: "On a ball over your head you drop-step — turn and run to the spot at full speed, then look back for the ball. Backpedaling is slow, unstable, and covers far less ground.",
      },
      {
        id: "bb14-02-s2", label: "Anticipate",
        situation: "Before the pitch, you note a dead-pull hitter, a count favoring a big swing, and a pitch likely to be driven the other way.",
        prompt: "How should you use this pre-pitch information?",
        options: [
          "Ignore it — only react after contact",
          "Anticipate and shade toward the likely gap so your first step is shorter",
          "Move to the deepest part of the park every pitch",
          "Stand flat-footed to look ready",
        ],
        correctIndex: 1,
        explanation: "Great reads begin before contact. Using the pitch, count, and hitter to anticipate and shade a gap shortens your route and turns a tough ball into a routine one.",
      },
      {
        id: "bb14-02-s3", label: "Read at Contact",
        situation: "The ball leaves the bat. You have a split second to judge where it's going.",
        prompt: "What gives you the earliest, most accurate read?",
        options: [
          "The sound off the bat plus the ball's initial flight and trajectory",
          "Watching the runner leave first base",
          "Waiting until the ball reaches its peak",
          "The catcher's reaction",
        ],
        correctIndex: 0,
        explanation: "The center fielder reads trajectory from the sound off the bat and the ball's initial flight, which lets him break instantly — crucial when he must cover the most ground.",
      },
      {
        id: "bb14-02-s4", label: "The Route",
        situation: "A ball is sinking into the gap and you'll want to throw a runner once you catch it.",
        prompt: "Which route serves you best?",
        options: [
          "A dead-straight line that leaves you moving away from the infield",
          "A curved 'banana' route that arrives at the catch point with momentum toward your throw",
          "The longest possible path to be safe",
          "Stop short and play it on a hop",
        ],
        correctIndex: 1,
        explanation: "An efficient curved route lets you reach the ball in time AND arrive with momentum carrying toward the throw, so the catch flows into the throw in one motion.",
      },
    ],
  },

  "baseball-14-03": {
    intro: "Your catches range from the routine fly to the leaping rob at the wall. Same fundamentals, the most spectacular results.",
    spots: [
      {
        id: "bb14-03-s1", label: "Two Hands",
        situation: "A routine fly settles toward you with no runners threatening to advance.",
        prompt: "How should you catch and present it?",
        options: [
          "One-handed at your waist with a flashy basket catch",
          "Two hands above your throwing shoulder, ready to come up throwing",
          "On a short hop to save energy",
          "Behind your back for style points",
        ],
        correctIndex: 1,
        explanation: "Catch routine flies with two hands above the throwing shoulder so you're already in position to throw — secure the out first, throw second.",
      },
      {
        id: "bb14-03-s2", label: "The Deep Drive",
        situation: "A ball is crushed well over your head to the deepest part of the park. You drop-step and sprint; it's still carrying as you reach the spot.",
        prompt: "What catch do you make?",
        options: [
          "Stop, turn to face the infield, and catch it square",
          "A basket catch at your belt",
          "An over-the-shoulder catch on the run, tracking it like a football receiver",
          "Let it drop and play the carom",
        ],
        correctIndex: 2,
        explanation: "On a deep ball over your head you make the over-the-shoulder catch on the run — it lets you keep full speed to cover the maximum ground and still make the play.",
      },
      {
        id: "bb14-03-s3", label: "At the Wall",
        situation: "A deep drive looks like a sure homer. You sprint full speed toward the wall to try to rob it.",
        prompt: "What must you do as you near the wall?",
        options: [
          "Keep your eyes locked only on the ball and never check the wall",
          "Glance to locate the wall — to time your leap and avoid crashing into it",
          "Jump as early as possible, just in case",
          "Slow down and concede the home run",
        ],
        correctIndex: 1,
        explanation: "You must locate the wall — glancing to find it while tracking the ball — both to time the leap correctly and to avoid a full-speed collision that risks serious injury.",
      },
      {
        id: "bb14-03-s4", label: "The Foundations",
        situation: "A young player thinks robbing home runs is pure jumping ability.",
        prompt: "What does the home-run robbery actually combine?",
        options: [
          "Only raw vertical leap",
          "Reading the ball, an efficient route to the wall, the speed to get there, and the timing/wall awareness to leap",
          "Only a strong throwing arm",
          "Only luck and a friendly bounce",
        ],
        correctIndex: 1,
        explanation: "The rob is the ultimate expression of the position's fundamentals — read, route, speed, and timing — the same skills every outfielder builds, executed at the highest level.",
      },
    ],
  },

  "baseball-14-04": {
    intro: "Speed only becomes range if your routes are efficient. You cover the most ground, so the angle you take matters more than anyone's.",
    spots: [
      {
        id: "bb14-04-s1", label: "Same Speed",
        situation: "Two center fielders with identical speed chase the same gap ball. One catches it; one watches it drop for a double.",
        prompt: "What separated them?",
        options: [
          "The route — the efficient angle reached the landing spot in the least time",
          "Nothing — it was random luck",
          "The one who took a bad angle was actually faster",
          "Routes don't matter on fly balls",
        ],
        correctIndex: 0,
        explanation: "The route turns speed into range. An efficient angle to the landing spot reaches balls a bad angle — wasting the same speed on extra distance — never gets to.",
      },
      {
        id: "bb14-04-s2", label: "Drifting",
        situation: "A fielder casually drifts under a ball instead of sprinting to the spot and waiting.",
        prompt: "Why is drifting a problem?",
        options: [
          "It looks too aggressive",
          "It wastes time and leaves him moving at the catch, hurting both range and the throw",
          "It's actually the preferred technique",
          "It only matters with a runner on third",
        ],
        correctIndex: 1,
        explanation: "Drifting wastes the center fielder's speed and leaves him out of position. Sprint to the spot and wait under control so you can catch and throw — don't float to the ball.",
      },
      {
        id: "bb14-04-s3", label: "Erase the Gap",
        situation: "A ball both you and the right fielder can reach hangs in right-center.",
        prompt: "How does your priority help cover the gaps?",
        options: [
          "It doesn't — the corner should always take gap balls",
          "Both of you should commit fully and converge",
          "You have priority and usually take it, calling off the corner, so your range and routes erase the gap",
          "Nobody is responsible for the gaps",
        ],
        correctIndex: 2,
        explanation: "You have priority on any ball you can reach, so you take catchable gap balls and call off the corner — your range and efficient routes turn would-be doubles into outs.",
      },
      {
        id: "bb14-04-s4", label: "Overrunning",
        situation: "A fielder misjudges and sprints past the ball's landing spot, having to double back.",
        prompt: "What do overrunning, bad angles, and drifting have in common?",
        options: [
          "They all make a fielder faster",
          "They all waste the center fielder's speed and turn catchable balls into hits",
          "They are all good techniques",
          "They only matter for corner outfielders",
        ],
        correctIndex: 1,
        explanation: "All three squander the center fielder's speed — covering extra ground or arriving out of position. Efficient routes avoid them, which is huge for the position that covers the most ground.",
      },
    ],
  },

  "baseball-14-05": {
    intro: "You're the most athletic outfielder on the field. Let's train the body the position demands — built like a sprinter with an arm.",
    spots: [
      {
        id: "bb14-05-s1", label: "Run It Down",
        situation: "You want to reach more deep drives and balls in the gaps.",
        prompt: "Which qualities most directly expand your range?",
        options: [
          "Upper-body size and bench press",
          "Elite straight-line speed plus explosive first-step quickness and acceleration",
          "Grip strength alone",
          "Bunting and bat speed",
        ],
        correctIndex: 1,
        explanation: "Range comes from elite top-end speed (to run down deep balls) plus an explosive first step and acceleration (the jump and break in any direction) — built with sprint and reaction work.",
      },
      {
        id: "bb14-05-s2", label: "The Long Arm",
        situation: "From the deepest spot on the field, you regularly throw all the way to the bases and the plate.",
        prompt: "How do you build and protect that arm?",
        options: [
          "Never throw in practice to save the arm",
          "Long-toss, sound mechanics, and rotator-cuff/scapular strengthening",
          "Only sprint training",
          "Max-effort throws with no warm-up",
        ],
        correctIndex: 1,
        explanation: "The deep position requires long throws, so build a strong, accurate arm through long-toss and good mechanics, and protect it with rotator-cuff and scapular work.",
      },
      {
        id: "bb14-05-s3", label: "Both Directions",
        situation: "Balls come at you to both gaps, and your routes often need quick adjustments.",
        prompt: "Which trait handles that best?",
        options: [
          "Change-of-direction agility",
          "Maximum body weight",
          "Slow, deliberate movement",
          "Flexibility with no speed",
        ],
        correctIndex: 0,
        explanation: "Reading from straightaway means breaking either way and adjusting routes, so change-of-direction agility — alongside speed and acceleration — is essential for the center fielder.",
      },
      {
        id: "bb14-05-s4", label: "The Profile",
        situation: "A young player asks what the ideal center fielder's body looks like.",
        prompt: "Best description?",
        options: [
          "A slow, powerful slugger's build",
          "Maximum size and weight only",
          "Like an elite sprinter with a strong arm — fast, explosive, durable, with endurance to cover the most ground",
          "Pure flexibility with no speed",
        ],
        correctIndex: 2,
        explanation: "The position rewards the most complete athletic profile in the outfield: an elite sprinter with a strong arm, the endurance to cover the most ground, and the durability to do it all season.",
      },
    ],
  },

  "baseball-14-06": {
    intro: "From the deepest spot on the field your throws are the longest. Strong, low, on a line, and through the cutoff man.",
    spots: [
      {
        id: "bb14-06-s1", label: "Generate the Throw",
        situation: "You field a single in the gap with a runner trying for an extra base.",
        prompt: "How do you generate a strong, accurate long throw?",
        options: [
          "Throw flat-footed off your back foot",
          "Take a crow-hop to gather momentum, then throw over the top with a four-seam grip",
          "Spin in a full circle first",
          "Lob it underhand to be safe",
        ],
        correctIndex: 1,
        explanation: "The crow-hop gathers momentum into the throw; an over-the-top motion with a four-seam grip produces the carrying, accurate long throw the deep position requires.",
      },
      {
        id: "bb14-06-s2", label: "Trajectory",
        situation: "You're throwing from deep center toward third base to nail an advancing runner.",
        prompt: "What trajectory should the throw take?",
        options: [
          "A high rainbow arc for maximum distance",
          "A low, carrying line that stays catchable for the cutoff man",
          "A one-hopper that bounces three times",
          "Whatever feels natural; trajectory doesn't matter",
        ],
        correctIndex: 1,
        explanation: "A low throw on a line gets there faster and stays catchable for the cutoff man; a high rainbow loses speed, sails over the cutoff, and can't be redirected.",
      },
      {
        id: "bb14-06-s3", label: "Hit the Cutoff",
        situation: "You catch a deep ball with a runner tagging. Your relay man and cutoff are lined up between you and the base.",
        prompt: "Where do you aim the throw?",
        options: [
          "Over the cutoff man straight to the base every time",
          "At the cutoff/relay man, who can relay, redirect to a trailing runner, or let it through",
          "Into the dugout to stop play",
          "At the runner directly",
        ],
        correctIndex: 1,
        explanation: "Hit the cutoff man: he keeps the long throw accurate and gives the defense options — relay to the base, cut and throw behind a trailing runner, or let a good throw go through.",
      },
      {
        id: "bb14-06-s4", label: "The Relay",
        situation: "You run a deep ball down at the wall, far from the infield — even your best throw can't reach the base on a line.",
        prompt: "What's the right play?",
        options: [
          "Heave it as far as you can and hope",
          "Throw a strong, accurate throw to the middle-infield relay man, who turns and relays to the base",
          "Run the ball all the way in yourself",
          "Hold the ball; there's no play",
        ],
        correctIndex: 1,
        explanation: "On the deepest balls the relay system is essential: a middle infielder sprints out as the relay man, you hit him with a strong accurate throw, and he relays to the base.",
      },
    ],
  },

  "baseball-14-07": {
    intro: "Two fielders, one ball, and a closing gap — communication prevents collisions and decides who makes the play. You're the captain who calls it.",
    spots: [
      {
        id: "bb14-07-s1", label: "Call Early",
        situation: "A shallow fly drops between you and the left fielder. Both of you converge and neither says a word.",
        prompt: "What's the fix?",
        options: [
          "Someone must call loudly and early — 'I got it!' / 'You take it!'",
          "Both should pull up and let it drop",
          "Run faster and figure it out at the last second",
          "Wait for the umpire to decide",
        ],
        correctIndex: 0,
        explanation: "On any ball two fielders can reach, someone must call loudly and early to prevent a collision or both pulling up. Silence is how outfielders get hurt and balls fall in.",
      },
      {
        id: "bb14-07-s2", label: "The Bloop",
        situation: "A soft liner drops between you and the second baseman. You're charging in; he's drifting back.",
        prompt: "Who has priority?",
        options: [
          "The infielder always takes balls behind the infield",
          "You do — outfielders generally have priority over infielders on shared balls, coming in under control",
          "Neither; let it drop for a hit",
          "Whoever yells second",
        ],
        correctIndex: 1,
        explanation: "Outfielders generally have priority over infielders on balls both can reach — you're moving in with the ball in front of you, a far easier and safer play than a backpedaling infielder.",
      },
      {
        id: "bb14-07-s3", label: "Yield the Better Play",
        situation: "A ball is hit where the right fielder, charging hard with momentum toward the plate, clearly has the superior angle and throw.",
        prompt: "As the captain with priority, what do you do?",
        options: [
          "Take it anyway because you always have priority",
          "Yield clearly and early, letting the corner make the better play, then back him up",
          "Both go for it to be safe",
          "Stop and watch without communicating",
        ],
        correctIndex: 1,
        explanation: "Priority isn't ego — when a corner outfielder has the better play (angle, momentum, throw), the captain yields clearly and backs him up. Good leadership means calling the right man.",
      },
      {
        id: "bb14-07-s4", label: "After the Call",
        situation: "You call off the left fielder and settle under a deep fly.",
        prompt: "What should the left fielder do now?",
        options: [
          "Stop and watch the catch",
          "Defer and back up the play in case of a missed catch or a throw",
          "Keep running at the ball anyway",
          "Leave the field",
        ],
        correctIndex: 1,
        explanation: "When the center fielder calls a ball, the corner outfielder defers and backs up the play — covering a possible drop, bobble, or carom and supporting the throw.",
      },
    ],
  },

  "baseball-14-08": {
    intro: "On most plays the ball isn't hit to you — your job is to be where an errant throw or a ball up the middle ends up. Back up everything.",
    spots: [
      {
        id: "bb14-08-s1", label: "The Steal",
        situation: "A runner takes off to steal second. The catcher fires a throw down to the bag.",
        prompt: "Where should you be?",
        options: [
          "Standing still in straightaway center, watching",
          "Breaking in behind second base to back up the throw in case it gets through",
          "Charging all the way to the infield dirt",
          "Drifting toward the gap in case of a hit",
        ],
        correctIndex: 1,
        explanation: "Backing up second base is the center fielder's most important backup job. On a steal throw, break in behind the bag so an errant or deflected throw doesn't let the runner advance.",
      },
      {
        id: "bb14-08-s2", label: "Up the Middle",
        situation: "A ground ball is hit hard up the middle and skips past the diving second baseman.",
        prompt: "What's your responsibility?",
        options: [
          "Wait for it to slow down on its own",
          "Charge the ball and field it cleanly to keep a single from becoming extra bases",
          "Let the shortstop chase it into the outfield",
          "Stay deep in case of a second ball",
        ],
        correctIndex: 1,
        explanation: "On balls up the middle you charge and field them under control — playing the ball, not letting it play you — so a clean single doesn't turn into a double on a misplay.",
      },
      {
        id: "bb14-08-s3", label: "The Pickoff",
        situation: "With a runner on second, the pitcher spins and throws to the shortstop covering for a pickoff attempt.",
        prompt: "What should the center fielder do?",
        options: [
          "Nothing; pickoffs are the infield's business",
          "Break in to back up second base in case the pickoff throw gets away",
          "Run toward third base",
          "Stay flat-footed and watch",
        ],
        correctIndex: 1,
        explanation: "Any throw to second — steal, pickoff, or relay — is a backup opportunity. Break in behind the bag so a wild pickoff throw doesn't send the runner to third or home.",
      },
      {
        id: "bb14-08-s4", label: "Hub of the Middle",
        situation: "Your coach explains why the center fielder is constantly moving even when the ball isn't hit to him.",
        prompt: "What's the principle?",
        options: [
          "He only moves when the ball is hit directly at him",
          "From straightaway he's the natural backup for second base and balls up the middle — constant, essential work",
          "Backing up is optional and rarely matters",
          "He should conserve energy and stay put",
        ],
        correctIndex: 1,
        explanation: "Positioned in straightaway center, the center fielder is the hub of the middle — backing up second on steals, pickoffs, and relays, and balls up the middle, on nearly every play.",
      },
    ],
  },

  "baseball-14-09": {
    intro: "Great defense is decided before the pitch. Process the situation, set your depth, and pre-decide where the ball is going.",
    spots: [
      {
        id: "bb14-09-s1", label: "No-Doubles",
        situation: "Bottom of the ninth, you're up by one, two outs, tying run on first. A double could tie the game.",
        prompt: "How should you position?",
        options: [
          "Play shallow to cut off singles",
          "Play deep 'no-doubles' depth to keep everything in front of you",
          "Shade hard to one line",
          "Stay at normal depth and react",
        ],
        correctIndex: 1,
        explanation: "Protecting a one-run lead late, you play deep 'no-doubles' depth so nothing gets over your head — you'll concede a single but prevent the extra-base hit that scores the runner from first.",
      },
      {
        id: "bb14-09-s2", label: "Play In",
        situation: "Tie game, bottom of the ninth, winning run on third with one out. A medium fly scores the runner on a tag.",
        prompt: "What's the alignment thinking?",
        options: [
          "Play deep to prevent any extra-base hit",
          "Play shallower to have a chance to throw the runner out at the plate on a fly",
          "Position doesn't matter here",
          "Shade toward the gap and ignore the runner",
        ],
        correctIndex: 1,
        explanation: "With the winning run on third and a play at the plate, you shade in so a catchable fly gives you a realistic throw home — depth is chosen for the situation, not by habit.",
      },
      {
        id: "bb14-09-s3", label: "The Sun and Wind",
        situation: "A high fly drives straight into a low afternoon sun, and there's a stiff wind blowing in.",
        prompt: "What's the right technique?",
        options: [
          "Stare straight into the sun and hope",
          "Use the glove or free hand to shield the sun, and account for the wind holding the ball up",
          "Close your eyes at the last moment",
          "Ignore the elements entirely",
        ],
        correctIndex: 1,
        explanation: "The captain plays the elements: shield the sun with the glove/hand and read it to the side, and adjust for wind — an in-blowing wind holds the ball up and shortens it.",
      },
      {
        id: "bb14-09-s4", label: "Pre-Decide",
        situation: "Runner on second, one out. Before the pitch you think through what you'll do if the ball comes to you.",
        prompt: "What should you settle before the pitch?",
        options: [
          "Nothing — just react after the ball is hit",
          "Where the play is and where you'll throw, so you can catch and throw without hesitation",
          "Which teammate to blame if it drops",
          "How to celebrate the out",
        ],
        correctIndex: 1,
        explanation: "Pre-pitch, the outfield captain pre-decides the situation and where he'll throw if the ball is hit to him — that anticipation turns a catch into an instant, correct throw.",
      },
    ],
  },

  "baseball-14-10": {
    intro: "Bring it all together — the complete center fielder. Range, catching, the arm, leadership, and the mindset the greats teach.",
    spots: [
      {
        id: "bb14-10-s1", label: "The Skill Set",
        situation: "You're self-assessing the full toolkit of a complete center fielder.",
        prompt: "Which best captures what you must master?",
        options: [
          "Only running fast",
          "Reads/jump, routes, catching, the long throw and cutoffs, priority/communication, backups, and situational positioning",
          "Only robbing home runs",
          "Only hitting",
        ],
        correctIndex: 1,
        explanation: "The complete center fielder masters the full set — reads and the jump, routes, catching (over-the-shoulder and the rob), the crow-hop long throw and cutoffs/relays, priority and communication, backups, and situational IQ.",
      },
      {
        id: "bb14-10-s2", label: "How They Got There",
        situation: "A young player assumes Griffey's effortless grace was pure natural talent.",
        prompt: "What actually built it?",
        options: [
          "Talent alone with no practice",
          "Elite tools applied with great reads, efficient routes, and timing — refined through deliberate repetition",
          "Luck and good bounces",
          "Only a strong throwing arm",
        ],
        correctIndex: 1,
        explanation: "Griffey's grace came from elite tools applied with great reads, perfect jumps, efficient routes, and timing — all built through endless repetition. The 'effortless' look is earned.",
      },
      {
        id: "bb14-10-s3", label: "Lead the Unit",
        situation: "Late in a close game, the outfield needs to be aligned and on the same page for the hitter due up.",
        prompt: "What does the captain mindset call for?",
        options: [
          "Worry only about your own zone",
          "Position the corners, communicate every situation, and take charge of shared balls — lead the outfield like the shortstop leads the infield",
          "Stay quiet so as not to distract anyone",
          "Defer all decisions to the corners",
        ],
        correctIndex: 1,
        explanation: "The mastery mindset is leadership: the center fielder positions the corners, communicates on every ball and situation, and owns priority — the captain who makes the whole outfield better.",
      },
      {
        id: "bb14-10-s4", label: "The Standard",
        situation: "You want a single sentence to define the goal of playing center field at the highest level.",
        prompt: "Which is it?",
        options: [
          "Cover the least ground and avoid mistakes",
          "Cover the most ground, rob the homers, make the long throws, and captain the outfield with grace",
          "Focus only on your batting average",
          "Stand still and wait for easy flies",
        ],
        correctIndex: 1,
        explanation: "Griffey is the standard: cover the most ground, rob the home runs, make the long throws, and captain the outfield with grace — the complete center fielder, defense as an art.",
      },
    ],
  },
};
