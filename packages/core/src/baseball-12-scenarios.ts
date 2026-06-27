import type { ScenarioConfig } from "./types";

// "Read the Play" Decision-Trainer scenarios for the Shortstop epoch.
// Each spot is a deterministic, skill-based defensive decision — the correct
// line is the fundamentally sound shortstop play taught in that stage, never a
// coin-flip outcome. correctIndex and explanation are stripped server-side
// before reaching the client.
export const baseball12Scenarios: Record<string, ScenarioConfig> = {
  "baseball-12-01": {
    intro: "You're the shortstop — the captain of the infield. Before the first pitch, make sure you understand the job: the most ground, the hardest throws, and the leadership.",
    spots: [
      {
        id: "bb12-01-s1", label: "The Range",
        situation: "A coach asks you to describe how much territory the shortstop is responsible for compared to the other infielders.",
        prompt: "How much ground does the shortstop cover?",
        options: [
          "Only the area directly to his left",
          "The most of any infielder — deep in the hole, up the middle, and everywhere between",
          "Just the patch of dirt around second base",
          "Less ground than the first baseman",
        ],
        correctIndex: 1,
        explanation: "The shortstop covers more ground than any other infielder — ranging deep into the hole toward third, up the middle behind second, and everywhere between. That range is the first reason the position demands the best all-around tools.",
      },
      {
        id: "bb12-01-s2", label: "The Hardest Throw",
        situation: "You range far to your right, deep into the hole toward third base, backhand the ball, and now have to retire the runner at first.",
        prompt: "Why is this throw considered the hardest on the infield?",
        options: [
          "It's the longest infield throw and is made across the body while momentum carries you away from first",
          "It's actually a short, easy flip",
          "There's never a play on a ball in the hole",
          "The throw goes downhill",
        ],
        correctIndex: 0,
        explanation: "From deep in the hole the shortstop makes the longest infield throw, across his body, while his momentum is carrying him away from the target — which is why the position requires both elite range and a strong, accurate arm.",
      },
      {
        id: "bb12-01-s3", label: "The Captain",
        situation: "Before a pitch, you notice the outfield is shaded wrong and the third baseman is playing too deep for the situation.",
        prompt: "As the shortstop, what's your responsibility?",
        options: [
          "Say nothing — each fielder is on his own",
          "Wait for the manager to fix it from the dugout",
          "Take charge and direct the defense — position teammates and confirm coverage as the captain of the infield",
          "Move to third base yourself",
        ],
        correctIndex: 2,
        explanation: "The shortstop is the captain of the infield and often the whole defense — positioning teammates, directing cutoffs and relays, coordinating coverage, and taking charge on every play. Teams build their defense around a great shortstop.",
      },
      {
        id: "bb12-01-s4", label: "The Standard",
        situation: "A young player asks what a complete shortstop looks like, and you point to Ozzie Smith, 'The Wizard.'",
        prompt: "What made Ozzie Smith the model of the position?",
        options: [
          "He hit the most home runs in history",
          "He never made a play on defense",
          "He only played when the game was decided",
          "Extraordinary range, soft hands, a strong arm, acrobatic athleticism, and the leadership to captain a defense",
        ],
        correctIndex: 3,
        explanation: "Ozzie Smith won thirteen straight Gold Gloves and turned the position into an art form. His range, soft hands, arm, athleticism, and leadership are the standard of the complete shortstop the whole defense is built around.",
      },
    ],
  },

  "baseball-12-02": {
    intro: "Defense starts before the pitch. As the captain, you position yourself to cover the most ground — and help align the whole defense — then load into a ready stance.",
    spots: [
      {
        id: "bb12-02-s1", label: "Double-Play Depth",
        situation: "Runner on first, one out, a ground-ball pitcher on the mound. The defense wants to be able to turn two.",
        prompt: "How should you adjust your depth?",
        options: [
          "Play as deep as you possibly can",
          "Move to double-play depth — a step or two in and toward second — so you can reach the bag in time to feed or pivot",
          "Stand directly on second base",
          "Back up into shallow left field",
        ],
        correctIndex: 1,
        explanation: "With a runner on first and a double play in order, the shortstop plays double-play depth — in and toward second — shortening his distance to the bag so he can take a feed and pivot or field and feed. It trades a little range for double-play readiness.",
      },
      {
        id: "bb12-02-s2", label: "Ready Position",
        situation: "As the pitch is delivered you're standing upright and flat-footed. A grounder in the hole skips past before you can break on it.",
        prompt: "What's the fix?",
        options: [
          "Stand even taller for a better view",
          "Keep your feet together so you can spin",
          "Get into a low, athletic ready position with a creep step timed to the pitch, so you're loaded and moving as the ball is hit",
          "Turn your back to the plate",
        ],
        correctIndex: 2,
        explanation: "Because the shortstop covers so much ground, the ready position is critical: a low, athletic stance with weight forward and a well-timed creep step leaves you loaded and moving as the ball is struck. Flat-footed, you lose the first step range depends on.",
      },
      {
        id: "bb12-02-s3", label: "Captaining Alignment",
        situation: "You know this hitter pulls everything and the defense should shift. The third baseman hasn't adjusted.",
        prompt: "What does the captain do?",
        options: [
          "Signal and position teammates based on the hitter and game plan, then confirm coverage",
          "Ignore it — positioning others isn't your job",
          "Quietly hope the ball isn't hit there",
          "Switch positions with the third baseman",
        ],
        correctIndex: 0,
        explanation: "As the infield's captain, the shortstop helps align the whole defense — waving infielders and sometimes outfielders into position by hitter and game plan and confirming coverage. Being in the right spot, and helping everyone else be too, is as valuable as range.",
      },
      {
        id: "bb12-02-s4", label: "Read the Hitter",
        situation: "This batter almost always hits ground balls up the middle. You're standing in your standard, neutral spot.",
        prompt: "What's the smarter positioning?",
        options: [
          "Stay exactly where you are every time",
          "Shade toward the hitter's tendency — up the middle — to put yourself in the ball's most likely path",
          "Play deep in the hole toward third",
          "Move into the outfield grass in shallow right",
        ],
        correctIndex: 1,
        explanation: "Hitters have predictable tendencies, and the shortstop covers the most ground, so shading toward a tendency converts would-be hits into outs without any extra range. Smart positioning is a decision made fresh every pitch.",
      },
    ],
  },

  "baseball-12-03": {
    intro: "Range is footwork plus a great first step. Field the ball under control and from a base you can throw from — over more territory than any infielder.",
    spots: [
      {
        id: "bb12-03-s1", label: "Round It Off",
        situation: "On a routine grounder you run straight at the ball, field it flat-footed, then have to stop, gather, and reset before the long throw — and the runner beats it.",
        prompt: "What footwork makes the routine play faster?",
        options: [
          "Round off the route so you field the ball moving toward first, on the correct foot, with momentum flowing into the throw",
          "Wait for the ball to stop rolling",
          "Field it behind your body",
          "Throw harder from a dead stop",
        ],
        correctIndex: 0,
        explanation: "Fielding flat-footed and resetting wastes time on the shortstop's long throw. Rounding off the route — a slightly curved path that lets you field moving toward first on the correct foot — turns the field-and-throw into one rhythmic, faster motion.",
      },
      {
        id: "bb12-03-s2", label: "Up the Middle",
        situation: "A hard grounder is hit up the middle, to your left and behind second base. You range far and field it on the move, moving away from first base.",
        prompt: "What must you do after fielding it?",
        options: [
          "Throw immediately with no footwork",
          "Organize your feet — plant or make a quick footwork adjustment — to generate a strong throw from deep and an unbalanced position",
          "Run the ball back toward the infield",
          "Concede the hit; there's never a play",
        ],
        correctIndex: 1,
        explanation: "Ranging up the middle, you move to your left and away from first, so after fielding you must quickly organize your feet to throw from deep. The footwork to throw on the move from an unbalanced position is what gives a shortstop real range up the middle.",
      },
      {
        id: "bb12-03-s3", label: "Read the Hop",
        situation: "A grounder is coming with a series of bounces. You can charge to take it on a long hop, stay back for a short hop, or get caught at an awkward in-between bounce.",
        prompt: "How should you play the hops?",
        options: [
          "Always field the in-between hop",
          "Field every ball identically regardless of the bounce",
          "Read the bounces and adjust to field a good hop — charge a long hop or stay back for a short hop, avoiding the in-between",
          "Close your eyes and stab at it",
        ],
        correctIndex: 2,
        explanation: "The shortstop reads the bounces and adjusts his footwork to field a good hop — charging a long hop or staying back for a short hop — while avoiding the awkward in-between that handcuffs fielders. His long throws and quick releases leave no margin for a bad hop.",
      },
      {
        id: "bb12-03-s4", label: "What Range Really Is",
        situation: "A coach tells you that range isn't just about how fast you run.",
        prompt: "What does range at shortstop actually depend on?",
        options: [
          "Only raw running speed",
          "Only arm strength",
          "Only height",
          "An explosive first step, efficient routes, body control, and the footwork to field and throw from any position",
        ],
        correctIndex: 3,
        explanation: "Range is a skill, not just a gift of speed — built on an explosive first step, efficient routes, body control, and footwork. Great shortstops cover an enormous area cleanly because their fundamentals, not just their legs, create range.",
      },
    ],
  },

  "baseball-12-04": {
    intro: "The ball deep in the hole is the shortstop's masterpiece. Backhand it, then unleash the longest throw on the infield — by plant-and-throw or by jump throw.",
    spots: [
      {
        id: "bb12-04-s1", label: "The Plant",
        situation: "You range deep into the hole, backhand the ball, and have just enough time to set before throwing all the way to first.",
        prompt: "On the plant-and-throw, what does planting hard on your right foot accomplish?",
        options: [
          "Nothing — the plant is just for show",
          "It stops the momentum carrying you away from first and creates a strong base to throw across your body with power",
          "It makes the throw shorter",
          "It signals the runner to stop",
        ],
        correctIndex: 1,
        explanation: "After the backhand you're moving away from first. Planting hard on the right foot stops that backward momentum and builds a stable base, so the planted leg can drive a strong, accurate throw across your body all the way to first.",
      },
      {
        id: "bb12-04-s2", label: "No Time to Plant",
        situation: "A ball is smashed so hard and deep into the hole that you backhand it with no time to plant and set your feet.",
        prompt: "How can you still make the throw to first?",
        options: [
          "You can't — the play is impossible",
          "Throw the ball underhand to second base instead",
          "Use a jump throw — catch and throw while leaping and turning toward first in the air, using the jump's momentum for arm strength",
          "Hold the ball and concede the hit",
        ],
        correctIndex: 2,
        explanation: "When there's no time to plant, the shortstop uses a jump throw — catching and throwing while leaping and turning toward first in midair, using the momentum of the jump and turn to power the throw. Derek Jeter made this athletic play famous.",
      },
      {
        id: "bb12-04-s3", label: "Read the Ball",
        situation: "Two balls are hit deep into the hole: one moderately hard, one absolutely smashed. You reach both on the backhand.",
        prompt: "How do you decide between a plant-and-throw and a jump throw?",
        options: [
          "Read the ball off the bat — a moderately hit ball leaves time to plant, the hardest, deepest balls force the jump throw",
          "Always use the jump throw",
          "Always use the plant-and-throw",
          "Decide at random",
        ],
        correctIndex: 0,
        explanation: "You read the speed and depth off the bat: a moderately hit ball leaves time to plant and throw from a stronger, more accurate base, while the hardest, deepest balls give no time to set, forcing the jump throw. Choosing instantly is part of mastering the play.",
      },
      {
        id: "bb12-04-s4", label: "Why It's So Hard",
        situation: "A coach calls the deep-hole play the hardest in the infielder's repertoire.",
        prompt: "Why is it so difficult?",
        options: [
          "It's actually the easiest infield play",
          "There's never a throw involved",
          "It only requires running speed",
          "It combines elite range, a backhand catch at full extension, and the longest infield throw across the body while moving away from the target",
        ],
        correctIndex: 3,
        explanation: "The deep-hole play stacks three elite skills into one: the range to get there, a soft backhand catch at full extension, and the longest, hardest infield throw across the body while momentum carries you away from first. Mastering it defines a great defensive shortstop.",
      },
    ],
  },

  "baseball-12-05": {
    intro: "Shortstop demands the most complete athlete on the infield. Build the body that ties it all together — range, arm, agility, and body control.",
    spots: [
      {
        id: "bb12-05-s1", label: "The Complete Package",
        situation: "A coach explains that shortstop demands more complete physical tools than any other infield position.",
        prompt: "Why does shortstop require the most complete physical package?",
        options: [
          "Because shortstops only need to be fast",
          "Because the shortstop covers the most ground, makes the hardest throws, and fields and throws from every position — demanding range, arm, agility, and body control together",
          "Because the position requires no arm strength",
          "Because it's the least demanding spot on the field",
        ],
        correctIndex: 1,
        explanation: "Shortstop needs it all — range, arm strength, agility, body control, and overall athleticism. Where other infield spots can lean on one or two tools, shortstop needs every one, making it the most talent-intensive position on the infield.",
      },
      {
        id: "bb12-05-s2", label: "Arm Strength",
        situation: "A coach notes that a second baseman can play with an average arm, but a shortstop cannot.",
        prompt: "Why does shortstop require more arm strength than second base?",
        options: [
          "Shortstops throw less often",
          "There's no difference in arm requirements",
          "The shortstop makes the longest, hardest infield throws — from deep in the hole, across the body, and airborne — while second base has a much shorter throw to first",
          "Second basemen never throw to first",
        ],
        correctIndex: 2,
        explanation: "Arm strength separates the two middle-infield spots. The shortstop makes the longest, hardest throws — deep in the hole, across the body, even airborne on the jump throw — so a strong, durable arm is essential. The second baseman's throw to first is far shorter.",
      },
      {
        id: "bb12-05-s3", label: "Off-Balance Power",
        situation: "You frequently field on the move and have to plant in the hole or throw while leaping for the jump throw.",
        prompt: "Which training most directly supports these off-balance and airborne throws?",
        options: [
          "Single-leg strength and balance training plus a strong core, to stabilize and power throws from off-balance and airborne positions",
          "Only long-distance running",
          "Only upper-body pressing",
          "Only static stretching",
        ],
        correctIndex: 0,
        explanation: "The shortstop constantly throws from off-balance positions — planting in the hole, across the body, leaping for the jump throw. Single-leg strength and balance plus a strong core give the stability and power to make those throws accurately.",
      },
      {
        id: "bb12-05-s4", label: "The Ideal Body",
        situation: "A young player asks what the ideal shortstop's physical profile looks like.",
        prompt: "How is it best described?",
        options: [
          "A big, slow slugger's build",
          "Only maximum size and weight",
          "Only base-stealing speed",
          "A second baseman's quickness and agility plus a third baseman's arm strength — the complete infield athlete",
        ],
        correctIndex: 3,
        explanation: "The ideal shortstop combines a second baseman's quickness and agility (for range and fielding on the move) with a third baseman's arm strength (for the longest throws). The position rewards the full blend, not one dominant tool.",
      },
    ],
  },

  "baseball-12-06": {
    intro: "You're half of every double play. Pivot on balls to the right side, feed on balls to the left — and always clear the runner with a quick release.",
    spots: [
      {
        id: "bb12-06-s1", label: "The Pivot (4-6-3)",
        situation: "A ground ball is hit to the second baseman with a runner on first. He flips toward second to start the double play.",
        prompt: "What's your role on this ball to the right side?",
        options: [
          "Stay at your position and watch",
          "Cover second and become the pivot man — receive the feed, touch the bag for the force, and relay to first (a 4-6-3)",
          "Run to cover first base",
          "Throw home",
        ],
        correctIndex: 1,
        explanation: "On a ball to the right side with a runner on first, the shortstop covers second as the pivot man — receiving the feed, touching the bag for the force, and relaying to first to complete the 4-6-3, all while clearing the sliding runner.",
      },
      {
        id: "bb12-06-s2", label: "Clearing the Runner",
        situation: "You catch the feed at second for the force and a runner is bearing down on the bag as you relay to first.",
        prompt: "What footwork both completes the throw and keeps you safe?",
        options: [
          "Stand still on the bag and throw over the runner",
          "Jump straight up every time",
          "Step across the bag toward the outfield side, drag the bag, and throw as momentum carries you off the runner",
          "Run toward first base with the ball",
        ],
        correctIndex: 2,
        explanation: "A common, safe pivot is to catch and step across the bag toward the outfield side, drag the bag, and throw as momentum carries you away from the sliding runner. Under the slide rule, a quick release plus clearing footwork protects you.",
      },
      {
        id: "bb12-06-s3", label: "The Feed (6-4-3)",
        situation: "A ground ball is hit right to you near second base. The second baseman breaks to cover the bag for the double play.",
        prompt: "How should you feed him?",
        options: [
          "Deliver a catchable, turnable ball chosen by distance — underhand close, backhand flip a few steps away, firmer throw from deep — leading him to the bag",
          "Throw it as hard as you can every time",
          "Bounce it to him to slow it down",
          "Lead him directly into the path of the runner",
        ],
        correctIndex: 0,
        explanation: "Feeding the 6-4-3, choose the feed by distance — underhand toss close, backhand flip from a few steps, firmer throw from deep — and deliver a catchable, turnable ball that leads the second baseman to the bag without pulling him into the runner.",
      },
      {
        id: "bb12-06-s4", label: "The Partnership",
        situation: "A coach calls the double play a partnership between you and the second baseman.",
        prompt: "What does being a complete double-play partner require?",
        options: [
          "Only ever fielding, never covering the bag",
          "Being able to play both roles — feeding and pivoting — since the play comes from both sides of the infield",
          "Letting the second baseman do everything",
          "Avoiding the bag entirely",
        ],
        correctIndex: 1,
        explanation: "The double play comes from both sides, so a complete shortstop must feed (6-4-3) and pivot (4-6-3), communicate coverage, trust the feeds, and clear runners. The partnership — not either player alone — turns two.",
      },
    ],
  },

  "baseball-12-07": {
    intro: "The slow roller is the do-or-die play. Charge it hard, often barehand it, and throw on the run — soft, quick hands win the race to first.",
    spots: [
      {
        id: "bb12-07-s1", label: "Charge It",
        situation: "A slow roller trickles toward you up the middle. If you wait back for it, the runner is safe by a step.",
        prompt: "What's the play?",
        options: [
          "Wait for the ball to come to you",
          "Charge the ball hard under control to cut down the distance and time, then throw on the run",
          "Let it roll and hope it goes foul",
          "Back up and field it on a deep hop",
        ],
        correctIndex: 1,
        explanation: "On a slow roller the shortstop must charge under control — attacking the ball to cut down the time the runner has — then field and throw on the run. Waiting back turns a possible out into a sure hit.",
      },
      {
        id: "bb12-07-s2", label: "Glove or Barehand?",
        situation: "The slow roller has nearly stopped — it's a dead ball sitting in the grass — and you're charging hard with a runner about to beat it.",
        prompt: "How should you field it?",
        options: [
          "Barehand it — a glove can't pick a dead ball quickly enough on a do-or-die play",
          "Always use two hands, even on a stopped ball",
          "Kick it toward first to save time",
          "Stop and pick it up carefully with the glove",
        ],
        correctIndex: 0,
        explanation: "On a dead or barely-moving ball, the shortstop barehands it on the run — a glove can't scoop a stopped ball fast enough on a do-or-die play. Soft, quick hands make the barehand pickup and throw in one motion.",
      },
      {
        id: "bb12-07-s3", label: "Timing the Pickup",
        situation: "You're charging the slow roller and need the pickup and throw to flow together so you don't have to gather and reset.",
        prompt: "How should you time the pickup with your feet?",
        options: [
          "Pick it up on either foot, it doesn't matter",
          "Stop both feet before touching the ball",
          "Time the pickup with your throwing-side foot so fielding and throwing flow in rhythm, then throw on the run",
          "Pick it up while jumping straight up",
        ],
        correctIndex: 2,
        explanation: "Timing the pickup with the throwing-side foot lets the field-and-throw flow as one rhythmic motion, so you throw on the run without stopping to gather. That rhythm is what beats the runner on the do-or-die play.",
      },
      {
        id: "bb12-07-s4", label: "Soft Hands",
        situation: "You watch Ozzie Smith's signature barehanded stops on bad hops and tough chances.",
        prompt: "What skill makes those plays possible?",
        options: [
          "Stiff, rigid hands that stab at the ball",
          "Soft, quick hands that absorb the ball and transfer it fast on bad hops and barehands",
          "Closing your eyes on contact",
          "A heavier glove",
        ],
        correctIndex: 1,
        explanation: "Soft, quick hands let the shortstop absorb bad hops and barehand tough chances, transferring the ball instantly. It was Ozzie Smith's signature skill — the touch that turned impossible chances into outs.",
      },
    ],
  },

  "baseball-12-08": {
    intro: "On balls to the outfield you're the hub of the throwing game. Be the relay man, trail and direct, and lead the cutoffs as the captain.",
    spots: [
      {
        id: "bb12-08-s1", label: "Relay Man",
        situation: "A ball is hit into the left-center gap and rolls to the wall. The play is developing on a runner trying to score.",
        prompt: "On balls to the left side and left-center, what's the shortstop's usual job?",
        options: [
          "Stay at the infield and do nothing",
          "Become the relay man — sprint out to line up with the outfielder and the target, give a target, and catch-turn-throw in one motion",
          "Run to cover home plate",
          "Cover first base",
        ],
        correctIndex: 1,
        explanation: "On balls to the left side and into left-center, the shortstop is usually the relay man: he sprints out to line up between the outfielder and the target base, gives a target, and catches, turns, and throws in one motion to keep the runner from advancing.",
      },
      {
        id: "bb12-08-s2", label: "Line It Up",
        situation: "You're going out as the relay man on a ball in the gap. Where you set up determines how fast and accurate the relay is.",
        prompt: "How should you position yourself for the relay?",
        options: [
          "Stand wherever you happen to stop",
          "Line up directly between the outfielder fielding the ball and the base you're throwing to, and give a clear target",
          "Stand behind the outfielder",
          "Set up off to the side of the throwing lane",
        ],
        correctIndex: 1,
        explanation: "The relay man lines up directly between the outfielder and the target base so the throw travels straight, and gives a loud, clear target. A good line and target let him catch-turn-throw without wasted motion.",
      },
      {
        id: "bb12-08-s3", label: "Trail and Direct",
        situation: "The ball is hit to the right side, so the second baseman goes out as the relay man instead of you.",
        prompt: "What's the shortstop's role now?",
        options: [
          "Leave the field",
          "Trail the relay man as a backup and, as the captain, direct where the throw should go",
          "Sprint past the relay man into the outfield",
          "Cover the pitcher's mound",
        ],
        correctIndex: 1,
        explanation: "On balls to the right side the shortstop trails the relay man — backing up the play and, as the captain, reading the runners and directing where the throw should go. Even when he isn't the relay man, he's leading the play.",
      },
      {
        id: "bb12-08-s4", label: "Know Your Assignment",
        situation: "A ball is hit to the outfield and every fielder has a job — relay, trail, cut off, or back up.",
        prompt: "When should the shortstop know his assignment?",
        options: [
          "After the ball is already in the outfield",
          "Only once the runner stops",
          "Before each pitch — relay, trail, direct, or back up — so he leads the defense's execution instantly",
          "He never needs an assignment",
        ],
        correctIndex: 2,
        explanation: "As the captain, the shortstop knows his assignment — relay, trail, direct, or back up — before each pitch, so the defense executes instantly when the ball is hit. Leading the throwing game starts with pre-pitch awareness.",
      },
    ],
  },

  "baseball-12-09": {
    intro: "The mental game is the captain's game. Before every pitch, process the situation for yourself and the whole defense, then make it instant when the ball is hit.",
    spots: [
      {
        id: "bb12-09-s1", label: "Steal Coverage",
        situation: "Runner on first who might steal. You and the second baseman need to know who covers the bag on a throw down.",
        prompt: "When and how is this decided?",
        options: [
          "Decided live, mid-pitch, by whoever is closer",
          "Pre-decided with the second baseman before the pitch — usually by the batter's handedness — and signaled every pitch",
          "Never decided; nobody covers",
          "Decided by the umpire",
        ],
        correctIndex: 1,
        explanation: "Steal coverage is pre-decided with the second baseman before the pitch, usually by the batter's handedness (so the fielder away from the hitter's tendency covers), and signaled every pitch with the glove. It's settled before the ball is in play.",
      },
      {
        id: "bb12-09-s2", label: "Two or One?",
        situation: "Runner on first, one out. A ground ball comes to you — but it's a slow, tough chance and the double play may not be there.",
        prompt: "What's the disciplined read?",
        options: [
          "Always force the double play no matter what",
          "Default to turning two with a runner on first and fewer than two outs, but take the sure out when the double play isn't there",
          "Always just hold the ball",
          "Throw home every time",
        ],
        correctIndex: 1,
        explanation: "With a runner on first and fewer than two outs the default is to turn two, but a complete shortstop reads the play and takes the sure out when the double play isn't there rather than forcing a risky feed and getting nobody.",
      },
      {
        id: "bb12-09-s3", label: "Know the Outs",
        situation: "A coach stresses that the shortstop must always know the number of outs and the situation before the pitch.",
        prompt: "Why is this the captain's job?",
        options: [
          "So he can argue with the umpire",
          "It doesn't matter where the outs stand",
          "So he can lead the defense — confirm coverage, position teammates, direct cutoffs, and remind everyone of the outs so execution is instant",
          "So he can decide when to bat",
        ],
        correctIndex: 2,
        explanation: "As the captain the shortstop processes outs, runners, and situation for himself and the whole defense before each pitch — confirming coverage, positioning teammates, directing cutoffs, and reminding the outs — so when the ball is hit, the right play happens instantly.",
      },
      {
        id: "bb12-09-s4", label: "Pre-Pitch Routine",
        situation: "It's a close game with runners on. The best shortstops have a routine for every pitch.",
        prompt: "What does that pre-pitch routine accomplish?",
        options: [
          "It processes the situation in advance so the reaction is instant when the ball is hit",
          "It slows the game down to waste time",
          "It replaces the need to field cleanly",
          "It has no real effect on the play",
        ],
        correctIndex: 0,
        explanation: "Running the situation before every pitch — outs, runners, coverage, where the ball should go — means the shortstop has already decided, so his reaction is instant when the ball is hit. Situational IQ is what lets the captain lead at full speed.",
      },
    ],
  },

  "baseball-12-10": {
    intro: "Bring it all together. The greatest shortstops show what complete mastery looks like — every tool, plus the IQ and leadership to captain a defense.",
    spots: [
      {
        id: "bb12-10-s1", label: "The Complete Skill Set",
        situation: "You study the careers of Ozzie Smith, Omar Vizquel, and Andrelton Simmons to learn what the best shortstops share.",
        prompt: "What do the greatest shortstops combine?",
        options: [
          "Only a strong arm and nothing else",
          "Elite range, a strong arm, agility, soft hands, improvisation, and leadership",
          "Only home-run power",
          "Only base-running speed",
        ],
        correctIndex: 1,
        explanation: "The best shortstops combine elite range, a strong arm, agility, soft hands, the improvisation to make plays from any position, and the leadership to captain a defense. Shortstop rewards the most complete development on the infield.",
      },
      {
        id: "bb12-10-s2", label: "Every Tool Matters",
        situation: "A young player wants to specialize in just one shortstop skill and ignore the rest.",
        prompt: "What does shortstop demand instead?",
        options: [
          "The most complete development — every tool matters, plus the IQ to captain the defense",
          "Only the single best tool, ignore the others",
          "Just enough to get by at any position",
          "Hitting ability over all defense",
        ],
        correctIndex: 0,
        explanation: "Unlike positions that can lean on one or two standout tools, shortstop rewards the most complete development — range, arm, agility, hands, and baseball IQ together. There's no single tool to specialize in; the position demands them all.",
      },
      {
        id: "bb12-10-s3", label: "The Mastery Mindset",
        situation: "You commit to treating shortstop as the most complete craft on the infield.",
        prompt: "What does the mastery mindset require?",
        options: [
          "Practicing only the plays that come easily",
          "Waiting for natural talent to take over",
          "The most repetition across all the position's skills — range, throws, double plays, charges, relays, and leadership",
          "Avoiding the hardest plays in practice",
        ],
        correctIndex: 2,
        explanation: "Because shortstop is the most complete craft, mastery demands the most repetition across every skill — range and footwork, the deep-hole throw, double plays, charges and barehands, relays, and the leadership to lead it all. The hardest plays get drilled the most.",
      },
      {
        id: "bb12-10-s4", label: "The Anchor",
        situation: "A team is building its defense and decides who to build it around.",
        prompt: "What is the complete, captaining shortstop to a championship defense?",
        options: [
          "An afterthought the team can replace easily",
          "A purely offensive player who doesn't field",
          "Only useful when the game is out of reach",
          "The anchor the whole defense is built around — the captain who makes the impossible play and leads every other fielder",
        ],
        correctIndex: 3,
        explanation: "Teams build their defense around a great shortstop the way they build around a great pitcher. The complete, captaining shortstop — range, arm, hands, athleticism, and leadership — is the anchor of a championship defense.",
      },
    ],
  },
};
