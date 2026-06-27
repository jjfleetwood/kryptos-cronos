import type { ScenarioConfig } from "./types";

// "Read the Play" Decision-Trainer scenarios for the Left Field epoch.
// Each spot is a deterministic, skill-based defensive decision — the correct
// line is the fundamentally sound left-field play taught in that stage, never a
// coin-flip. correctIndex and explanation are stripped server-side before the
// client ever sees them.
export const baseball13Scenarios: Record<string, ScenarioConfig> = {
  "baseball-13-01": {
    intro: "You're learning the busiest outfield corner. Before the ball is ever hit, know what left field demands and where you fit in the outfield.",
    spots: [
      {
        id: "bb13-01-s1", label: "The Corner",
        situation: "A right-handed pull hitter is up. Your coach reminds you why your spot stays busy.",
        prompt: "Why does left field tend to see more batted balls than right field?",
        options: [
          "Most hitters are right-handed and pull the ball to the left side",
          "Left field is a smaller area to cover",
          "The rules require more balls be hit to left",
          "Left fielders are simply faster",
        ],
        correctIndex: 0,
        explanation: "The majority of hitters bat right-handed and tend to pull the ball, sending more fly balls and grounders to the left side — which is why left field is the busiest corner.",
      },
      {
        id: "bb13-01-s2", label: "The Slice",
        situation: "A right-handed batter pulls a fly ball your way. It begins curving toward the foul line as it travels.",
        prompt: "What must you account for as you read this pulled fly ball?",
        options: [
          "Nothing — pulled balls fly perfectly straight",
          "That it will curve back toward center field",
          "The slice — the ball hooks toward the left-field line, so your route must bend with it",
          "That the ball will hang and stop in the air",
        ],
        correctIndex: 2,
        explanation: "A ball pulled by a right-handed hitter slices (hooks) toward the left-field line. Misreading that curve turns a catchable ball into a hit — reading the hook is a signature left-field skill.",
      },
      {
        id: "bb13-01-s3", label: "The Captain",
        situation: "A fly ball drifts into the gap between you and the center fielder. You both break toward it and converge.",
        prompt: "Who has priority on a ball you can both reach?",
        options: [
          "You — the corner outfielder always takes it",
          "The center fielder — he's the captain of the outfield, so you defer to his call",
          "Whoever started running first, regardless of position",
          "Neither — you both pull up and let it drop",
        ],
        correctIndex: 1,
        explanation: "The center fielder is the outfield captain with priority on any shared ball. You communicate, listen for his call, and peel off if he takes it — that's how collisions are prevented.",
      },
      {
        id: "bb13-01-s4", label: "The Arm",
        situation: "A coach is placing two outfielders: one has a cannon arm, the other has elite reads and a solid-but-not-elite arm.",
        prompt: "Why can left field be played with a slightly less powerful arm than right field?",
        options: [
          "The throw from left field to third base is shorter than the right fielder's throw there",
          "Left fielders never have to throw the ball",
          "Accuracy doesn't matter from left field",
          "Right field never needs a strong arm",
        ],
        correctIndex: 0,
        explanation: "Left field is closer to third base than right field is, so the key throw is shorter — a slightly less powerful (but still accurate) arm works in left, while the cannon usually goes to right.",
      },
    ],
  },

  "baseball-13-02": {
    intro: "Range starts before contact. Read the ball off the bat, take the right first step, and run an efficient route.",
    spots: [
      {
        id: "bb13-02-s1", label: "Over Your Head",
        situation: "A ball is crushed on a line over your head. Your instinct is to backpedal to keep your eyes on it.",
        prompt: "What's the correct first move on a ball hit over your head?",
        options: [
          "Backpedal as fast as you can",
          "Stand still and wait to judge it",
          "Drop-step — pivot, turn, and run to the spot, then look back for the ball",
          "Charge in toward the infield first",
        ],
        correctIndex: 2,
        explanation: "Never backpedal on a ball overhead — it's slow and unstable. Drop-step, turn, and sprint to the projected landing spot, then find the ball over your shoulder. Turning and running covers far more ground.",
      },
      {
        id: "bb13-02-s2", label: "The Jump",
        situation: "Two left fielders run identical sprint times. One consistently reaches more balls.",
        prompt: "How can an equally fast outfielder cover more ground than the other?",
        options: [
          "A better glove makes balls travel slower",
          "A great jump — reading the ball instantly and breaking in the right direction first",
          "He can't; only raw speed determines range",
          "He plays much shallower every time",
        ],
        correctIndex: 1,
        explanation: "A great jump — an instant read and a correct first step — gets you moving the right way sooner, so you out-range an equally fast fielder who reacts late. Reads and routes, not just speed, create range.",
      },
      {
        id: "bb13-02-s3", label: "The Route",
        situation: "A ball is hit to the gap with a runner who may try to advance. You can sprint straight at it or take a slightly curved path.",
        prompt: "Why run a curved 'banana' route to the ball?",
        options: [
          "It arrives with your momentum already carrying toward your throw, so you catch and throw in one motion",
          "It's a longer path that wastes time for no reason",
          "It confuses the baserunners",
          "Straight lines are always the wrong way to a fly ball",
        ],
        correctIndex: 0,
        explanation: "A banana route lets you reach the catch point already moving toward where you'll throw. A dead-straight path might arrive a hair sooner but leaves you drifting away from the play.",
      },
      {
        id: "bb13-02-s4", label: "Anticipation",
        situation: "Before the pitch you note the count, the pitch called, and that this hitter pulls fastballs hard.",
        prompt: "How does anticipating before the pitch help your jump?",
        options: [
          "It doesn't — outfielders should only react after contact",
          "It makes you slower by overthinking",
          "Anticipation only matters for infielders",
          "Knowing where the ball is likely to go lets you read and break faster at contact",
        ],
        correctIndex: 3,
        explanation: "A great jump is anticipation plus an instant read. Studying the pitch, count, and hitter and leaning accordingly primes you to break a step sooner the moment the ball is struck.",
      },
    ],
  },

  "baseball-13-03": {
    intro: "The catch is the foundation. Get to the spot under control and catch in a way that flows straight into a throw.",
    spots: [
      {
        id: "bb13-03-s1", label: "Catch to Throw",
        situation: "A runner is tagging from third on a fly ball to you. You've been catching basket-style at your belt.",
        prompt: "How should you catch this ball with a runner ready to advance?",
        options: [
          "One hand, basket-style at the belt",
          "Two hands at or above your throwing-shoulder side of the head, so the catch flows into a throw",
          "Behind your back to surprise the runner",
          "Down at your shoe-tops every time",
        ],
        correctIndex: 1,
        explanation: "Catching with two hands above the throwing shoulder lets you transfer and throw immediately to hold the runner. A basket catch at the belt is slower to throw from and lets runners advance.",
      },
      {
        id: "bb13-03-s2", label: "Over the Shoulder",
        situation: "A ball is hit well over your head and is still carrying as you sprint to the projected landing spot.",
        prompt: "What catch should you make?",
        options: [
          "Stop, spin to face the infield, then catch it",
          "A basket catch at your belt",
          "Let it drop and play the carom",
          "An over-the-shoulder catch on the run, tracking it like a football receiver",
        ],
        correctIndex: 3,
        explanation: "On a deep ball you've turned and run down, make the over-the-shoulder catch on the run. Stopping to turn and face the ball wastes time and ground you can't spare.",
      },
      {
        id: "bb13-03-s3", label: "Line Drive",
        situation: "A line drive is hit right at you. You can't immediately tell if it's sinking or carrying.",
        prompt: "What makes line drives the hardest read, and what must you do?",
        options: [
          "They're actually the easiest read — just camp under them",
          "Always charge every single line drive",
          "It's hard to judge sinking vs carrying, so read it fast and commit — charge a sinker, drift back on a carrier",
          "Always drift back on every line drive",
        ],
        correctIndex: 2,
        explanation: "Line drives are hardest because you can't instantly tell whether the ball drops in front or sails overhead. Read the trajectory quickly and commit — hesitation is fatal on a liner.",
      },
      {
        id: "bb13-03-s4", label: "The Crow-Hop",
        situation: "You catch a fly with a runner tagging at third, then throw flat-footed from a standstill. The throw sails in weak and late.",
        prompt: "What footwork generates a strong throw after the catch?",
        options: [
          "A crow-hop — a small shuffle-hop that builds momentum into the throw",
          "Throwing flat-footed from a dead stop",
          "Spinning in a full circle before releasing",
          "Throwing while falling backward",
        ],
        correctIndex: 0,
        explanation: "A crow-hop transfers your weight and builds momentum behind the throw. Combined with catching above the throwing shoulder, it turns the catch into a strong, accurate throw to hold the runner.",
      },
    ],
  },

  "baseball-13-04": {
    intro: "Playing the wall and the line is a skill all its own — it turns doubles into singles. Know your park and protect the corner.",
    spots: [
      {
        id: "bb13-04-s1", label: "The Carom",
        situation: "A ball is smashed off the high left-field wall. You know exactly how your wall rebounds.",
        prompt: "How does knowing the wall's caroms help you?",
        options: [
          "It only matters on balls that clear the fence",
          "It doesn't — caroms bounce randomly",
          "You can position for the rebound, field it fast, and hold a would-be double to a single",
          "Knowing the wall actually slows you down",
        ],
        correctIndex: 2,
        explanation: "Knowing your wall's height, material, and rebound lets you anticipate the carom, get to the rebound instantly, and fire it in — holding the hitter to fewer bases, exactly as Zack Wheat did at Ebbets Field.",
      },
      {
        id: "bb13-04-s2", label: "Locate the Wall",
        situation: "You're chasing a deep fly toward the wall at full speed with your eyes locked on the ball.",
        prompt: "What should you do as you approach the wall?",
        options: [
          "Glance to locate the wall, then return your eyes to the ball — so you can play it and not crash",
          "Keep your eyes only on the ball and never look at the wall",
          "Close your eyes right before impact",
          "Stop well short of the wall to be safe",
        ],
        correctIndex: 0,
        explanation: "Locate the wall with a quick glance, then go back to tracking the ball. That lets you decide to leap, play the carom, or back up — and keeps you from crashing into it at full speed.",
      },
      {
        id: "bb13-04-s3", label: "The Line",
        situation: "A ball is hit hard down the left-field line. If it gets past you it rolls into the corner.",
        prompt: "Why is cutting off a ball down the line so important?",
        options: [
          "Balls down the line are automatically foul",
          "It isn't — balls down the line are always singles anyway",
          "You should never field balls near the line",
          "A ball past you down the line rolls to the corner for extra bases, so cutting it off saves bases",
        ],
        correctIndex: 3,
        explanation: "A ball that gets by you down the line rolls into the corner for a double or triple. Cutting it off — and guarding the line in no-doubles situations — holds the hitter to as few bases as possible.",
      },
      {
        id: "bb13-04-s4", label: "The Goal",
        situation: "Your coach says wall-and-line play is what separates a complete left fielder from one who only catches fly balls in open space.",
        prompt: "What's the overall goal of playing the wall and line well?",
        options: [
          "To turn would-be doubles and triples into singles and outs",
          "To hit more home runs",
          "To avoid fielding any ball near the wall",
          "To let balls off the wall roll free for extra bases",
        ],
        correctIndex: 0,
        explanation: "The point is to minimize bases — fielding caroms quickly, getting the ball back in, and cutting off the line to turn extra-base hits into singles and outs. That directly prevents runs.",
      },
    ],
  },

  "baseball-13-05": {
    intro: "Outfield is a running position. Build the body that gets a great jump, covers ground, and makes the throw.",
    spots: [
      {
        id: "bb13-05-s1", label: "The Foundation",
        situation: "A coach calls the outfield 'a running position' as he lays out what to train.",
        prompt: "Which qualities form the foundation of outfield range?",
        options: [
          "Grip strength alone",
          "First-step quickness, acceleration, and speed to get a great jump and cover ground",
          "Maximum upper-body size only",
          "Bunting and base-stealing",
        ],
        correctIndex: 1,
        explanation: "Range is built on first-step quickness, acceleration, and speed — the ability to get a jump and run balls down over a large area, developed through sprint and reaction work.",
      },
      {
        id: "bb13-05-s2", label: "Train the Jump",
        situation: "You want a quicker first step and more range in the gaps.",
        prompt: "Which training most directly improves your jump and range?",
        options: [
          "Long-distance jogging only",
          "Stretching by itself",
          "Sprint work, acceleration drills, and reaction training",
          "Heavy bench pressing only",
        ],
        correctIndex: 2,
        explanation: "The explosive first step and quick top-end speed come from sprint work, acceleration drills, and reaction training — not slow jogging or pure upper-body lifting.",
      },
      {
        id: "bb13-05-s3", label: "The Arm",
        situation: "You need strong, accurate throws to the bases and cutoff men, and sometimes all the way to third.",
        prompt: "How do you build and protect a strong throwing arm?",
        options: [
          "By throwing as hard as possible with no warm-up",
          "By never throwing in practice to save it",
          "By only lifting heavy weights",
          "Long-toss, sound mechanics, and rotator-cuff and scapular strengthening",
        ],
        correctIndex: 3,
        explanation: "Arm strength comes from long-toss and good mechanics; cuff and scapular work protects the shoulder. Core strength powers the crow-hop throw. That's how you build an arm and keep it healthy.",
      },
      {
        id: "bb13-05-s4", label: "The Profile",
        situation: "A young player asks how to picture the ideal outfielder's body.",
        prompt: "How is that body best described?",
        options: [
          "A slow, powerful slugger's build",
          "Like a sprinter with a strong arm — fast, explosive, durable, able to throw",
          "Maximum size and weight only",
          "Only flexible, with no speed or strength",
        ],
        correctIndex: 1,
        explanation: "Picture a sprinter with a strong arm: explosive first step, top-end speed, endurance to chase everything all game, and an accurate arm — the athletic profile outfield defense rewards.",
      },
    ],
  },

  "baseball-13-06": {
    intro: "A great throw is built, not lucked into. Master the crow-hop, the right trajectory, and hitting the cutoff man.",
    spots: [
      {
        id: "bb13-06-s1", label: "Power the Throw",
        situation: "You field a single in left with a runner trying to score from second. You want maximum carry and accuracy.",
        prompt: "What footwork should you use to generate the throw?",
        options: [
          "Throw immediately from wherever your feet land",
          "A crow-hop — gather, shuffle-hop, and throw with your momentum behind it",
          "Throw side-arm off your back foot",
          "Spin around to build torque first",
        ],
        correctIndex: 1,
        explanation: "The crow-hop transfers weight forward and puts your body behind the ball, producing a stronger, more accurate throw than a flat-footed heave from a standstill.",
      },
      {
        id: "bb13-06-s2", label: "Throw Trajectory",
        situation: "You're making a long throw to third base to nail an advancing runner.",
        prompt: "What's the ideal trajectory for a long outfield throw?",
        options: [
          "A high, looping rainbow so it's easy to see",
          "A throw bounced ten feet in front of you",
          "Whatever feels natural, height doesn't matter",
          "A low throw with a long, true one-hop that the cutoff man can also catch",
        ],
        correctIndex: 3,
        explanation: "A low throw that one-hops to the bag carries energy, stays accurate, and can be cut off by the relay man if needed. A high rainbow loses time and can't be intercepted.",
      },
      {
        id: "bb13-06-s3", label: "Hit the Cutoff",
        situation: "Your throw home is slightly off line, and the trailing batter is rounding first looking to take second.",
        prompt: "Why is hitting the cutoff man so important?",
        options: [
          "He can relay an accurate throw or redirect it to stop trailing runners from advancing",
          "It isn't — always throw straight through to the base",
          "The cutoff man only matters on bunts",
          "It's just to make the infielder feel involved",
        ],
        correctIndex: 0,
        explanation: "The cutoff man can catch an off-line throw and redirect it, or cut it to throw out a trailing runner taking an extra base. Air-mailing the cutoff lets other runners advance freely.",
      },
      {
        id: "bb13-06-s4", label: "When to Hold",
        situation: "There's no realistic play at the plate on a clean single, but a trailing runner is rounding a base.",
        prompt: "What's the smart throw decision?",
        options: [
          "Always fire home no matter the odds",
          "Hold the ball or throw to the cutoff to keep trailing runners from advancing",
          "Throw to an empty base for show",
          "Run the ball back to the infield yourself",
        ],
        correctIndex: 1,
        explanation: "When there's no play at the plate, a wild throw home just lets other runners move up. Hitting the cutoff (or holding) keeps the trailing runners station-to-station — the disciplined play.",
      },
    ],
  },

  "baseball-13-07": {
    intro: "Most of the time the ball isn't hit to you. Knowing where to go on every play is what makes a left fielder valuable.",
    spots: [
      {
        id: "bb13-07-s1", label: "Back Up Third",
        situation: "A runner is on first with a base hit to right field, and there's a throw coming to third base.",
        prompt: "Where should the left fielder go?",
        options: [
          "Stay put in left field",
          "Run in to cover second base",
          "Back up third base in case the throw gets away",
          "Jog toward the dugout",
        ],
        correctIndex: 2,
        explanation: "The left fielder backs up third base on throws to third, so an overthrow or deflection doesn't roll free and let runners advance. Backing up the right base is core left-field work.",
      },
      {
        id: "bb13-07-s2", label: "The Steal Throw",
        situation: "A runner on second base takes off to steal third. The catcher fires down to third base.",
        prompt: "What's the left fielder's responsibility?",
        options: [
          "Charge all the way to home plate",
          "Break in to back up the throw to third base in case it gets through",
          "Stay deep and do nothing",
          "Run to back up first base",
        ],
        correctIndex: 1,
        explanation: "On a steal of third, the left fielder breaks in to back up the throw to third base — if it skips past the bag with no backup, the runner can score. (On a steal of second, the center fielder is the backup behind the bag, not the left fielder.)",
      },
      {
        id: "bb13-07-s3", label: "Ball in the Gap",
        situation: "A ball is hit into the left-center gap and the center fielder calls you off to make the play.",
        prompt: "What should you do once the center fielder takes it?",
        options: [
          "Keep running and try to make the catch anyway",
          "Stop and watch",
          "Run to back up the center fielder and be ready for a deflection or carom",
          "Head toward the infield to cover a base",
        ],
        correctIndex: 2,
        explanation: "When the center fielder takes a ball in the gap, you trail behind to back him up — if it tips off his glove or caroms, you're there to keep it from rolling and limit the damage.",
      },
      {
        id: "bb13-07-s4", label: "Know It Pre-Pitch",
        situation: "A coach says good backups happen because the fielder already knew where to go before the ball was hit.",
        prompt: "When should a left fielder figure out his backup responsibility?",
        options: [
          "Before each pitch, based on the runners and the situation",
          "Only after seeing where the ball goes",
          "Once the throw is already in the air",
          "Backups can't really be planned",
        ],
        correctIndex: 0,
        explanation: "Heads-up outfielders think through 'where do I go if...' before every pitch, based on the runners and count. Knowing your job pre-pitch lets you break instantly instead of reacting late.",
      },
    ],
  },

  "baseball-13-08": {
    intro: "Decide where you're throwing before you field the ball. Know the outs, the runners, and the cutoff system cold.",
    spots: [
      {
        id: "bb13-08-s1", label: "Know Before the Ball",
        situation: "Runner on second, one out, and the ball is heading to you for a base hit.",
        prompt: "When should you decide where you're going to throw?",
        options: [
          "After you've already fielded the ball",
          "Before the ball gets to you — using the outs, runners, and score",
          "Whenever the cutoff man yells",
          "Only once you see the runner round third",
        ],
        correctIndex: 1,
        explanation: "The best outfielders know the situation — outs, runners, score — and decide the play before fielding the ball, so they can catch and throw in one motion instead of hesitating.",
      },
      {
        id: "bb13-08-s2", label: "The Cutoff",
        situation: "You field a single with a runner trying to score from second. An infielder sets up between you and home as the cutoff.",
        prompt: "Who is your cutoff man on a throw to the plate from left field?",
        options: [
          "The second baseman",
          "The first baseman",
          "The pitcher",
          "The third baseman",
        ],
        correctIndex: 1,
        explanation: "The first baseman is the cutoff man on throws to the plate from the outfield, lining up between the fielder and home to relay or redirect the throw. (The shortstop is the cutoff on throws to third base and the relay man on extra-base hits.)",
      },
      {
        id: "bb13-08-s3", label: "The Relay",
        situation: "You chase a ball to the wall in the deep corner with a runner circling the bases. You're too far to reach a base on the fly.",
        prompt: "How do you get the ball in quickly?",
        options: [
          "Throw a low, accurate ball to the relay man, who turns and fires to the base",
          "Sprint the ball all the way to the infield yourself",
          "Heave it as high and far as you can toward the base",
          "Hold it and concede the extra bases",
        ],
        correctIndex: 0,
        explanation: "On a deep ball, hit the relay man with a quick, accurate throw; he turns and fires to the base. A long relay is faster and more accurate than one impossible throw the whole distance.",
      },
      {
        id: "bb13-08-s4", label: "Hit the Cutoff",
        situation: "There's no play at the plate, but if your throw home sails through, a trailing runner takes an extra base.",
        prompt: "What's the disciplined throw?",
        options: [
          "Always throw straight through to the plate anyway",
          "Throw to the cutoff man, who can redirect it to catch a trailing runner",
          "Throw to an empty base",
          "Spike the ball to stop the play",
        ],
        correctIndex: 1,
        explanation: "Hitting the cutoff man lets the defense redirect the ball to nab a trailing runner or hold him. Air-mailing a throw with no play at the plate just gifts the other runners extra bases.",
      },
    ],
  },

  "baseball-13-09": {
    intro: "Defense is decided before the pitch. Set your depth, read the elements, and know the game situation on every batter.",
    spots: [
      {
        id: "bb13-09-s1", label: "Set Your Depth",
        situation: "It's the bottom of the ninth, your team leads by one, and the tying run is on second base.",
        prompt: "How should you play your depth?",
        options: [
          "Play normal depth and ignore the situation",
          "Play extra deep so nothing gets over your head, even if a single falls in",
          "Charge in shallow looking for a diving catch",
          "Depth doesn't matter to an outfielder",
        ],
        correctIndex: 1,
        explanation: "Protecting the lead, you play deep ('no-doubles') so nothing carries over your head for extra bases. You'll concede a soft single, but you won't let the tying run reach scoring position on a gapper.",
      },
      {
        id: "bb13-09-s2", label: "The Sun",
        situation: "A high fly ball is hit toward you, directly into the bright afternoon sun.",
        prompt: "What's the right technique?",
        options: [
          "Stare straight into the sun and hope to see it",
          "Give up on the ball entirely",
          "Use your glove or throwing hand to shield the sun and shift to catch off to the side of it",
          "Close your eyes and catch by sound",
        ],
        correctIndex: 2,
        explanation: "Use your glove or bare hand as a sun shield and angle your position so the ball isn't square in the sun. Fighting the sun is a real skill — losing a ball in it can be a disaster.",
      },
      {
        id: "bb13-09-s3", label: "Play the Wind",
        situation: "You notice a strong wind blowing in from left field toward the infield all game.",
        prompt: "How should the wind change your positioning?",
        options: [
          "Play a bit shallower, since the wind will hold balls up and knock them down",
          "Play much deeper to compensate",
          "Ignore it; wind never affects fly balls",
          "Move toward center to escape the wind",
        ],
        correctIndex: 0,
        explanation: "A wind blowing in knocks fly balls down, so you cheat in a step. A wind blowing out carries balls, so you'd play deeper. Reading the wind each inning is part of outfield IQ.",
      },
      {
        id: "bb13-09-s4", label: "Know the Hitter",
        situation: "A dead-pull, right-handed power hitter steps in. You know his tendencies from earlier at-bats.",
        prompt: "How should you position for him?",
        options: [
          "Play him straight up the middle",
          "Shade toward the line and the gap where he pulls the ball",
          "Shift all the way toward center field",
          "Position is the same for every hitter",
        ],
        correctIndex: 1,
        explanation: "A dead-pull righty drives balls toward the left-field line and gap, so you shade that way. Positioning to the hitter's tendencies puts you a step closer before the ball is even hit.",
      },
    ],
  },

  "baseball-13-10": {
    intro: "The great left fielders share habits, not just talent. Self-assess against the complete-corner-outfielder standard.",
    spots: [
      {
        id: "bb13-10-s1", label: "The Complete LF",
        situation: "You're rating yourself against the standard set by graceful left fielders like Zack Wheat.",
        prompt: "What truly defines a complete left fielder?",
        options: [
          "Only how many home runs he robs",
          "Reads, routes, catching, wall-and-line play, and accurate throws together",
          "Pure foot speed and nothing else",
          "Having the single strongest arm on the team",
        ],
        correctIndex: 1,
        explanation: "A complete left fielder combines reads and routes, sure catching, wall-and-line play, and accurate throws to cutoffs — not one flashy tool, but the whole package that prevents runs.",
      },
      {
        id: "bb13-10-s2", label: "Defense Saves Runs",
        situation: "A teammate argues left field is just a place to hide a big bat.",
        prompt: "What's the best response about left-field defense?",
        options: [
          "He's right; defense in left doesn't matter",
          "Left field is only about catching routine flies",
          "Outfield defense saves runs — turning extra-base hits into outs and singles changes games",
          "Only the infield affects the score",
        ],
        correctIndex: 2,
        explanation: "Strong left-field defense saves real runs — a great read, a held double, a runner thrown out at third all swing games. A complete corner outfielder is far more than a bat parked in the field.",
      },
      {
        id: "bb13-10-s3", label: "Build the Skill",
        situation: "A young player asks how the best outfielders got so good at reading the ball.",
        prompt: "How is elite ball-reading developed?",
        options: [
          "It's purely a gift you're born with or not",
          "Through endless repetition — fly balls, reads, and routes practiced over and over",
          "By only watching, never practicing",
          "It can't be improved at all",
        ],
        correctIndex: 1,
        explanation: "Reading the ball off the bat is a skill built by repetition — thousands of fly balls and reads — not just raw talent. A great jump can be developed regardless of natural speed.",
      },
      {
        id: "bb13-10-s4", label: "The Mindset",
        situation: "Between pitches, a great outfielder is already thinking about the next play.",
        prompt: "What mental habit separates elite outfielders?",
        options: [
          "Waiting passively until the ball is hit to react",
          "Only focusing when the ball comes their way",
          "Relying on the infield to make every decision",
          "Anticipating every pitch — knowing depth, the count, the runners, and where to go before contact",
        ],
        correctIndex: 3,
        explanation: "Elite outfielders are mentally in every pitch — set on depth, aware of count and runners, and knowing their job before contact. That anticipation is the mastery mindset that turns tools into plays.",
      },
    ],
  },
};
