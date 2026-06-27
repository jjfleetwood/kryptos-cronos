import type { ScenarioConfig } from "./types";

// "Guard the Corner" Decision-Trainer scenarios for the Third Base (the hot
// corner) epoch. Each spot is a deterministic, skill-based decision — the
// correct answer is the sound, real-baseball play for a third baseman, never a
// luck-of-the-draw outcome. correctIndex and explanation are stripped
// server-side before reaching the client.
export const baseball11Scenarios: Record<string, ScenarioConfig> = {
  "baseball-11-01": {
    intro: "Welcome to the hot corner. Before you ever field a ball, you have to understand WHY third base is the toughest, fastest reacting spot on the infield — and what it asks of you.",
    spots: [
      {
        id: "bb11-01-s1", label: "The Nickname",
        situation: "A right-handed power hitter steps in. Your coach reminds you to be ready for anything as the pitch is delivered.",
        prompt: "Why is third base called the 'hot corner'?",
        options: [
          "It's the sunniest part of the field",
          "Right-handed pull hitters drive the hardest-hit balls there, and you stand close to the plate with the least time to react",
          "Third basemen run more than anyone else",
          "The bag heats up during day games",
        ],
        correctIndex: 1,
        explanation: "Most hitters are right-handed and pull the ball, sending screaming grounders and liners toward third — and you stand relatively close to home plate, so a smash arrives in a fraction of a second. That combination of hard contact and almost no reaction time is what earns third base its 'hot corner' nickname.",
      },
      {
        id: "bb11-01-s2", label: "What It Takes",
        situation: "A coach must pick a third baseman between a rangy runner with an average arm and a player with quick reflexes, soft hands, and a cannon.",
        prompt: "Which qualities most define a good third baseman?",
        options: [
          "Quick reflexes, soft fearless hands, and a strong arm — reactions and arm strength matter more than pure range",
          "Maximum foot speed and range above all else",
          "Home-run power and nothing else",
          "Height and a big frame",
        ],
        correctIndex: 0,
        explanation: "Third base doesn't demand the range of shortstop, but the balls you DO get come hard and fast. The position prizes lightning reflexes, soft and fearless hands to knock down a smash, and a strong, accurate arm for the long throw. Reactions and arm strength define the corner more than raw range.",
      },
      {
        id: "bb11-01-s3", label: "The Throw",
        situation: "You field a grounder deep behind the bag and must get the ball to first.",
        prompt: "What makes the third baseman's throw to first uniquely demanding?",
        options: [
          "It's the shortest throw on the infield",
          "Third basemen aren't allowed to throw to first",
          "Third base is the farthest infield spot from first, so it's the longest routine infield throw and needs a strong, accurate arm",
          "The throw is downhill and easy",
        ],
        correctIndex: 2,
        explanation: "Third base is the farthest infield position from first base, so you make the longest routine infield throw — all the way across the diamond. That demands a strong, accurate arm and clean footwork to set and fire, which is why a cannon is one of the two defining tools of the hot corner.",
      },
      {
        id: "bb11-01-s4", label: "The Standard",
        situation: "A young player studies Adrián Beltré — a Dodgers product and first-ballot Hall of Famer — throwing runners out from the hole and even from one knee.",
        prompt: "What does Beltré's defensive career teach about the position?",
        options: [
          "That third base requires no real skill",
          "That fearless soft hands, quick reflexes, and a strong arm can turn the hot corner into a defensive art that wins games",
          "That only a third baseman's hitting matters",
          "That defense at third base can't be measured",
        ],
        correctIndex: 1,
        explanation: "Beltré won five Gold Gloves and reached the Hall of Fame on his glove as much as his bat. His soft hands, quick reflexes, and cannon arm turned sure doubles into outs — the model of the complete third baseman and proof the hot corner can be a defensive weapon.",
      },
    ],
  },

  "baseball-11-02": {
    intro: "With so little reaction time, your stance and depth aren't details — they're survival. Read the situation and set up right before every pitch.",
    spots: [
      {
        id: "bb11-02-s1", label: "The Stance",
        situation: "As the pitch is delivered you're standing fairly upright with your glove around waist height. A hard one-hopper handcuffs you before you can get the glove down.",
        prompt: "How should you set up as the pitch is thrown?",
        options: [
          "Stand tall and relaxed to save energy",
          "Low and athletic — wide feet, deep knee bend, weight forward, glove low and out front, with a creep step timed to the pitch",
          "Sit back on your heels",
          "Stand on the bag",
        ],
        correctIndex: 1,
        explanation: "Most hard-hit balls at third are on the ground or low line drives, so you must be low and loaded — wide base, deep knee bend, weight forward, glove low — with a creep step so your feet land as the ball reaches the zone. An upright stance leaves you unable to get the glove down in the split second you have.",
      },
      {
        id: "bb11-02-s2", label: "Guard the Line",
        situation: "Bottom of the ninth, your team leads by one. A double down the left-field line would put the tying run in scoring position.",
        prompt: "How should you position yourself in this late, close situation?",
        options: [
          "Cheat toward the shortstop hole for more range",
          "Play in for a bunt",
          "Stand on the third-base bag",
          "Guard the line — play close to the foul line to take away the double, conceding a single through the hole",
        ],
        correctIndex: 3,
        explanation: "Late and close, you guard the line: hugging the foul line takes away the extra-base hit that would put the tying run in scoring position. You concede a single through the hole toward short — far less damaging than a double. It's the classic hot-corner trade-off of range for protecting against the extra base.",
      },
      {
        id: "bb11-02-s3", label: "Bunt Depth",
        situation: "Runner on first, nobody out, and a weak hitter squares to bunt to move the runner over.",
        prompt: "How should you adjust your depth when a bunt is likely?",
        options: [
          "Play as deep as possible",
          "Move out to guard the line behind the bag",
          "Play in, closer to the plate, ready to charge the bunt and make a quick play",
          "Drift toward shortstop",
        ],
        correctIndex: 2,
        explanation: "When a bunt is likely you play in, closer to home, so you can charge and field it quickly — maybe even get the lead runner. Playing at normal or deep depth hands the offense an easy sacrifice. Reading bunt situations and creeping in is a key part of pre-pitch positioning at third.",
      },
      {
        id: "bb11-02-s4", label: "Wrong Time to Hug It",
        situation: "Second inning of a tie game, nobody on base. You play tight against the foul line, and a routine grounder rolls through the wide-open hole for a hit.",
        prompt: "What was wrong with guarding the line here?",
        options: [
          "Nothing — always guard the line",
          "Guarding the line is for late, close situations; early with nobody on, normal depth gives better coverage, so hugging the line needlessly opened the hole",
          "You should have played even tighter to the line",
          "Third basemen shouldn't field grounders",
        ],
        correctIndex: 1,
        explanation: "Guarding the line is a situational call for late, close games when preventing a double is worth conceding the hole. Early with the bases empty there's no reason to surrender that range — normal depth covers more ground. Hugging the line needlessly opened a hole that proper positioning would have closed. Match positioning to the situation, every pitch.",
      },
    ],
  },

  "baseball-11-03": {
    intro: "At the hot corner you can't always field it clean — but if you knock it down and stay calm, you can still get the out. Master reactions, soft hands, and courage.",
    spots: [
      {
        id: "bb11-03-s1", label: "The Knockdown",
        situation: "A rocket you can't catch cleanly caroms off your glove and drops a few feet in front of you. The runner is still well up the line.",
        prompt: "After knocking a hard smash down, what should you do?",
        options: [
          "Give up — a knockdown can never become an out",
          "Stay calm, pick it up, and make a strong throw — the runner is usually slower than the ball, so there's often still time",
          "Kick it toward the shortstop",
          "Argue that it should be ruled a hit",
        ],
        correctIndex: 1,
        explanation: "A knockdown is not a failure — it's often still an out. A hard-hit ball travels faster than the runner runs, so if you keep it close, stay composed, and make a strong throw, you frequently still retire the batter. Beltré built a legend on exactly this: knock it down, then recover and throw the runner out.",
      },
      {
        id: "bb11-03-s2", label: "Soft Hands",
        situation: "You stab rigidly at a hard short hop with a stiff, locked wrist, and the ball ricochets off the glove and rolls away.",
        prompt: "What technique would help you control that hard short hop?",
        options: [
          "Stab even harder at the ball",
          "Close your eyes on contact",
          "Use soft hands — give with the glove to absorb the velocity and keep the ball in front",
          "Try to barehand it instead",
        ],
        correctIndex: 2,
        explanation: "Hard-hit balls and short hops demand soft hands. You let the glove and hands give — a slight recoil that absorbs the velocity and keeps the ball in front and controllable. Stabbing rigidly makes the ball deflect away. Soft, giving hands are what let you secure, or at least knock down and keep close, the hardest chances.",
      },
      {
        id: "bb11-03-s3", label: "The Mindset",
        situation: "You tend to relax and hope the ball is hit elsewhere, then you react a step slow when a smash actually comes your way.",
        prompt: "What mental habit would sharpen your reactions?",
        options: [
          "Hope the ball goes to another fielder",
          "Watch the runner instead of the hitter",
          "Stand more upright to stay loose",
          "Expect the ball on every pitch from a low, loaded, ready stance — anticipation speeds reaction time",
        ],
        correctIndex: 3,
        explanation: "Reaction time improves dramatically with anticipation. A third baseman who expects the ball every single pitch — low, loaded, ready — reacts far faster than one hoping it goes elsewhere. With so little time at the corner, that 'it's coming to me' mindset is the difference between making the play and getting handcuffed.",
      },
      {
        id: "bb11-03-s4", label: "Courage",
        situation: "Facing a big right-handed hitter, you flinch and turn your head away as the ball is smashed at you, and it skips past.",
        prompt: "Why is fearlessness essential at third base?",
        options: [
          "A third baseman who flinches or turns away can't get his glove or body in front of the hardest-hit balls, so courage is required",
          "It isn't — flinching is a good safety habit",
          "Courage only matters for the hitter",
          "The ball never actually comes hard at third",
        ],
        correctIndex: 0,
        explanation: "Fearlessness is core to the hot corner. A third baseman who flinches or turns away can't get his glove or body in front of a rocket, and it gets past him. Fielding the position means staying down, keeping your eyes on the ball, and attacking it. Combined with soft hands and quick reflexes, courage is what lets you handle the hardest chances in the game.",
      },
    ],
  },

  "baseball-11-04": {
    intro: "From the hot corner it's a long way to first. A strong, accurate arm and clean footwork get the ball there in time — even from the most awkward angles.",
    spots: [
      {
        id: "bb11-04-s1", label: "Footwork",
        situation: "You field a routine grounder with plenty of time, but you throw flat-footed using only your arm. The ball sails and lacks zip.",
        prompt: "What footwork adds velocity and accuracy to the long throw?",
        options: [
          "Just throw harder with the arm alone",
          "Gather, align your front shoulder to first, and step toward the target with a crow-hop or shuffle to build momentum across the diamond",
          "Throw while jumping straight up",
          "Turn your back to first before throwing",
        ],
        correctIndex: 1,
        explanation: "A flat-footed, all-arm throw lacks velocity and accuracy. With time, you gather after fielding, align the front shoulder to first, and step toward the target with a crow-hop or shuffle to build momentum across the diamond. Your legs and footwork generate much of the velocity and improve accuracy — it's not just arm strength.",
      },
      {
        id: "bb11-04-s2", label: "Accuracy",
        situation: "Trying to show off your arm, you throw as hard as you possibly can. The ball sails high and pulls the first baseman off the bag.",
        prompt: "Why does accuracy matter as much as velocity on the throw from third?",
        options: [
          "It doesn't — only velocity matters",
          "First basemen prefer fast throws that sail",
          "It's the longest infield throw, so an errant throw has more distance to sail; a chest-high, catchable throw beats a blazing one that pulls the first baseman off the bag",
          "Accuracy only matters on short throws",
        ],
        correctIndex: 2,
        explanation: "Because the throw across the diamond is the longest on the infield, an off-target throw has more distance to sail. Overthrowing to max out velocity often sends the ball high and pulls the first baseman off the bag, costing the out. A chest-high, catchable throw is far more valuable than a blazing one that misses.",
      },
      {
        id: "bb11-04-s3", label: "The Grip",
        situation: "You grab the ball with whatever grip your fingers find and throw to first. Over the long distance it tails badly and the first baseman has to reach.",
        prompt: "Why is the four-seam grip especially important on the long throw?",
        options: [
          "It curves the ball on purpose",
          "Grip doesn't affect a thrown ball",
          "It only matters for pitchers",
          "A four-seam grip produces a straight, true ball; over the long distance a poor grip's spin is magnified and the ball tails or sinks off target",
        ],
        correctIndex: 3,
        explanation: "A four-seam grip — fingers across the seams — produces pure backspin and a straight, true throw. Over the long distance from third to first, a random grip's side-spin or sink is magnified, tailing the ball off target and pulling the first baseman off the bag. Securing a four-seam grip in the transfer is essential for the long throw.",
      },
      {
        id: "bb11-04-s4", label: "On the Run",
        situation: "A slow roller dribbles toward third. You charge hard and must release while still moving forward, with no time to set your feet.",
        prompt: "How should you throw on a do-or-die charging play?",
        options: [
          "Stop completely and set your feet first",
          "Throw on the run — often sidearm or three-quarter — prioritizing a quick release and accuracy over raw power",
          "Throw home instead of to first",
          "Hold the ball; there's no play",
        ],
        correctIndex: 1,
        explanation: "On a do-or-die play there's no time to stop and set your feet — you throw on the run, often sidearm or three-quarter, getting rid of the ball quickly. A fast release and accuracy beat raw power because the play is a race. This is one of the corner's signature plays, built on practiced footwork and a quick, accurate release.",
      },
    ],
  },

  "baseball-11-05": {
    intro: "The hot corner is built on two physical pillars: fast-twitch reactions and a strong, durable arm. Train the body the position actually demands.",
    spots: [
      {
        id: "bb11-05-s1", label: "Two Priorities",
        situation: "A coach designs a training program for a young third baseman and asks which physical qualities to emphasize.",
        prompt: "Which two physical priorities most define a third baseman?",
        options: [
          "Long-distance endurance and flexibility only",
          "Maximum size and body weight",
          "Fast-twitch reaction quickness and arm strength — reflexes for the hardest-hit balls and an arm for the long throw",
          "Base-stealing speed and bunting",
        ],
        correctIndex: 2,
        explanation: "Third base concentrates on two physical priorities: fast-twitch reaction quickness, to handle the hardest-hit balls with little reaction time, and arm strength, for the longest infield throw. Unlike positions built on lateral range, the corner is about quick reactions over short distances plus throwing power.",
      },
      {
        id: "bb11-05-s2", label: "Building Reactions",
        situation: "You want to improve your ability to react to hard smashes and short hops.",
        prompt: "Which training most directly builds reaction quickness?",
        options: [
          "Long-distance jogging",
          "Fast-twitch reflex drills — rapid short hops, reaction balls with unpredictable bounces, and hand-eye work",
          "Heavy bench pressing only",
          "Static stretching alone",
        ],
        correctIndex: 1,
        explanation: "Reaction quickness is built with fast-twitch reflex training: rapid-fire short hops, reaction balls that bounce unpredictably, and hand-eye drills. These train the hands and reflexes to respond in the split second you have. Paired with first-step explosiveness work, they build the lightning reactions the corner demands — something cardio or pure strength won't provide.",
      },
      {
        id: "bb11-05-s3", label: "Arm Care",
        situation: "You make long, high-effort throws across the diamond all game and want to keep your arm strong and healthy over a full season.",
        prompt: "What training protects and builds the throwing arm?",
        options: [
          "Avoid all throwing in practice",
          "Throw as hard as possible with no warm-up",
          "Only heavy leg lifting",
          "Sound throwing mechanics, a long-toss program, and rotator-cuff and scapular strengthening to protect the shoulder",
        ],
        correctIndex: 3,
        explanation: "A strong, durable arm is built through sound mechanics, a long-toss program to develop arm strength safely, and rotator-cuff and scapular work to protect the shoulder from the long, high-effort throws the position demands. Core strength supports across-the-body throws. That arm-care foundation keeps the arm both powerful and healthy all season.",
      },
      {
        id: "bb11-05-s4", label: "Off-Balance",
        situation: "You constantly throw to first from deep in the hole or while charging a slow roller — off-balance and often on one leg.",
        prompt: "Which training helps you throw accurately from off-balance positions?",
        options: [
          "Single-leg strength and balance work, plus core strength, to stabilize and power throws from awkward positions",
          "Only two-legged squats",
          "Long-distance running",
          "Upper-body work alone",
        ],
        correctIndex: 0,
        explanation: "Third basemen constantly throw off-balance — deep in the hole, across the body, or on the run. Single-leg strength and balance training, plus a strong core, give you the stability and power to make accurate throws from those awkward positions. It complements the reaction and arm work that define the hot corner's physical training.",
      },
    ],
  },

  "baseball-11-06": {
    intro: "The slow roller is the hot corner's signature test — charge it, bare-hand it, and throw on the run, all in one motion. Master the do-or-die play.",
    spots: [
      {
        id: "bb11-06-s1", label: "Bare-Hand It",
        situation: "A bunt rolls toward third and nearly stops in the grass. You charge and try to scoop it with your glove, but can't get it out cleanly in time.",
        prompt: "How should you field a nearly-stopped or dead ball on a do-or-die play?",
        options: [
          "Always use the glove no matter what",
          "Wait for it to start rolling again",
          "Bare-hand it — a glove can't pick a dead ball quickly enough, so the barehand pickup is needed to field and throw in time",
          "Kick it toward first base",
        ],
        correctIndex: 2,
        explanation: "A glove can't scoop a dead or nearly-stopped ball fast enough on a do-or-die play, so you bare-hand it. The barehand pickup, timed with your footwork, lets you field and throw in one rhythmic motion fast enough to get the runner. A still-moving ball may allow the glove, but a dead ball demands the bare hand.",
      },
      {
        id: "bb11-06-s2", label: "Rhythm",
        situation: "You charge a slow roller, field it, then stop, gather yourself, set your feet, and throw — and the runner beats it out.",
        prompt: "What's the key to making the do-or-die play in time?",
        options: [
          "Always stop and set the feet before throwing",
          "Field the ball in stride, in rhythm with your feet, so field-and-throw is one continuous motion with a quick release on the run",
          "Throw the ball as hard as possible",
          "Field the ball flat-footed",
        ],
        correctIndex: 1,
        explanation: "The do-or-die play is a race won by rhythm. You field the ball in stride, timed with your feet, so fielding and throwing flow as one continuous motion with a quick release on the run. Stopping to gather and set — as natural as it feels — takes too long. The whole play must be fluid: charge, field in rhythm, throw on the run.",
      },
      {
        id: "bb11-06-s3", label: "Under Control",
        situation: "Eager to make a highlight play, you sprint recklessly at a slow roller, overrun the ball, and have to reach back for it — botching the play.",
        prompt: "Why must the charge be under control rather than reckless?",
        options: [
          "There's no need for control — faster is always better",
          "Control only matters on routine grounders",
          "Reckless charging intimidates the runner",
          "Overrunning the ball wrecks the footwork rhythm needed to field in stride and throw on the run; the charge must be controlled and timed",
        ],
        correctIndex: 3,
        explanation: "A reckless charge that overruns the ball forces you to reach back or stop, destroying the footwork rhythm that makes the play work. The charge must be controlled and timed so you field in stride, in rhythm with the throwing-side foot, and flow into the throw. Controlled aggression — not recklessness — lets the field-and-throw happen in one motion.",
      },
      {
        id: "bb11-06-s4", label: "The Release",
        situation: "You field the ball on the run with a split second to release. Instead you try to plant and fire a perfect overhand fastball — and the runner is safe.",
        prompt: "What kind of throw is best on a do-or-die charging play?",
        options: [
          "A full overhand throw after planting and setting",
          "A quick sidearm or three-quarter throw on the run, prioritizing a fast release and accuracy over power",
          "A high looping lob",
          "No throw — concede the play",
        ],
        correctIndex: 1,
        explanation: "On a do-or-die play there's no time to plant and throw a full overhand fastball. You throw on the run with a quick sidearm or three-quarter motion, putting a fast release and accuracy ahead of raw power. The play is a race, and getting rid of the ball quickly — even from a lower slot — is what nips the runner.",
      },
    ],
  },

  "baseball-11-07": {
    intro: "Balls down the line and into the hole demand the backhand and the dive — and the strong-armed recovery throw. Extend your range to the corners.",
    spots: [
      {
        id: "bb11-07-s1", label: "The Backhand",
        situation: "A ground ball is hit hard to your glove side, into the hole toward shortstop, just out of reach for a normal forehand.",
        prompt: "How should you field a ball to your glove side in the hole?",
        options: [
          "Reach across your body with a forehand",
          "Let it go to the shortstop every time",
          "Crossover step and field it on the backhand with the glove turned over, then plant the back foot and throw across your body",
          "Field it between your legs",
        ],
        correctIndex: 2,
        explanation: "A ball to your glove side in the hole calls for a backhand: crossover step toward it, extend the glove turned over (palm to the ball) to field out in front, then plant the back foot hard and throw across your body to first. The backhand-and-throw from deep in the hole is a signature third-base play demanding a strong arm and clean footwork.",
      },
      {
        id: "bb11-07-s2", label: "The Plant",
        situation: "After backhanding a ball deep in the hole, you try to throw to first while still drifting to your right, and the throw has nothing on it.",
        prompt: "What footwork makes the throw from deep in the hole possible?",
        options: [
          "Keep drifting right while you throw",
          "Plant the back (right) foot hard to anchor and generate power, then throw across your body to first",
          "Throw underhand to first",
          "Run the ball halfway to first",
        ],
        correctIndex: 1,
        explanation: "Deep in the hole you're moving away from first, so you must plant the back (right) foot hard to anchor yourself and generate power, then throw across your body all the way over. Drifting while you throw produces a weak, inaccurate ball. The hard plant converts your momentum into a strong throw — which is why the play needs both arm and footwork.",
      },
      {
        id: "bb11-07-s3", label: "The Dive",
        situation: "A hard grounder is smashed down the third-base line, just out of reach. You can let it go or dive for it.",
        prompt: "Why is a diving stop down the line especially valuable?",
        options: [
          "It isn't — diving is always a bad idea",
          "Diving down the line is against the rules",
          "It only matters with the bases empty",
          "A ball past you down the line is almost always an extra-base hit, so a diving stop that keeps it in the infield saves a double",
        ],
        correctIndex: 3,
        explanation: "A ball down the line that gets past you almost always rolls to the corner for a double or triple. A diving stop that keeps it in the infield — even if no throw is possible — saves the extra-base hit and holds the batter to a single or gets the out. That's why you dive on otherwise-unreachable balls down the line, especially late in close games.",
      },
      {
        id: "bb11-07-s4", label: "When NOT to Dive",
        situation: "A routine grounder is hit a step to your right, easily reachable with a backhand while staying on your feet. Instead you dive dramatically and bobble it.",
        prompt: "What does this reveal about the judgment of when to dive?",
        options: [
          "Diving is always the best choice",
          "Dive only on otherwise-unreachable balls; diving for one you could field on your feet adds risk and can turn an out into an error",
          "Third basemen should never field balls on their feet",
          "Bobbling is unavoidable on every play",
        ],
        correctIndex: 1,
        explanation: "Diving is for balls that are otherwise unreachable and where the stop matters. Diving for one you could field on your feet with a backhand or a step adds needless risk and can turn a routine out into an error. Good third basemen judge when a dive is needed versus when staying on their feet and fielding cleanly is smarter. Judgment governs the dive.",
      },
    ],
  },

  "baseball-11-08": {
    intro: "The third baseman is a cutoff man, a bunt defender, and a backup — with a job on every ball in play. Know your assignment before the pitch.",
    spots: [
      {
        id: "bb11-08-s1", label: "Bunt Rotation",
        situation: "Runner on first, a sacrifice bunt is laid down toward third. You charge hard to field it, leaving the bag uncovered behind you.",
        prompt: "Who covers third base when you charge the bunt?",
        options: [
          "Nobody — third is left open",
          "The catcher sprints up to cover third",
          "The shortstop rotates over to cover third base",
          "The left fielder covers third",
        ],
        correctIndex: 2,
        explanation: "When you charge in to field a bunt, you vacate third, so the shortstop rotates over to cover it. The whole infield must understand this rotation before the pitch — a charging third baseman with no one covering the bag gives it away. Bunt defense is a coordinated team play, and 3B-charges / SS-covers is fundamental.",
      },
      {
        id: "bb11-08-s2", label: "Steal of Third",
        situation: "A runner on second takes off to steal third. The catcher fires a throw toward the bag.",
        prompt: "What is your job on a steal of third?",
        options: [
          "Stay at your fielding spot and watch",
          "Run toward home plate",
          "Cover second base",
          "Cover third, take the catcher's throw, and apply a quick, low tag — catching the ball first",
        ],
        correctIndex: 3,
        explanation: "On a steal of third you cover the bag, take the catcher's throw, and apply a quick, low tag to the sliding runner — securing the ball first. As on any tag play, you catch it before you tag, and the tag goes low to the front edge of the bag where the runner slides in. Covering third on the steal is a core coverage duty.",
      },
      {
        id: "bb11-08-s3", label: "Receiver at Third",
        situation: "A base hit to left field with a runner trying to advance to third. The left fielder comes up throwing toward the bag.",
        prompt: "What is your typical role on a throw to third from the outfield?",
        options: [
          "Be the receiver at third — line up at the bag, give a target, take the throw, and apply the tag",
          "Run into the outfield to get the ball",
          "Cover home plate",
          "Cut the throw off and just hold the ball",
        ],
        correctIndex: 0,
        explanation: "On a ball to the outfield with a runner heading for third, you're usually the receiver at the bag — lining up, presenting a target to the outfielder or relay man, taking the throw, and tagging the sliding runner. Catch the throw cleanly before the tag. (On some plays you instead serve as a cutoff for throws toward home from the left side.)",
      },
      {
        id: "bb11-08-s4", label: "The Wheel Play",
        situation: "Runner on second, the defense calls the wheel play to cut down the lead runner at third on a bunt. Both corners charge hard.",
        prompt: "On the wheel play, who covers third base?",
        options: [
          "The third baseman stays back to cover third",
          "The shortstop covers third, since both corners are charging to attack the bunt and the lead runner",
          "Nobody covers third",
          "The second baseman covers third",
        ],
        correctIndex: 1,
        explanation: "On the wheel play both corner infielders charge hard to field the bunt and attack the lead runner heading to third, so the shortstop covers third (and the second baseman covers first). The infield 'wheels' around. It's high-risk, high-reward, and depends on everyone knowing the rotation — especially the shortstop covering behind the charging third baseman.",
      },
    ],
  },

  "baseball-11-09": {
    intro: "At the hot corner there's no time to think when the ball arrives — so the thinking has to be done before the pitch. Pre-decide everything.",
    spots: [
      {
        id: "bb11-09-s1", label: "Think First",
        situation: "You try to decide what to do with the ball only after a hard smash is already in your glove, and the hesitation costs the play.",
        prompt: "Why must you decide what to do with the ball before the pitch?",
        options: [
          "You shouldn't — there's always time to decide after fielding",
          "The ball arrives so fast there's no time to think once it's hit, so the decision must be pre-made and the reaction pure execution",
          "Deciding early is against the rules",
          "It only matters with two outs",
        ],
        correctIndex: 1,
        explanation: "At the hot corner a hard-hit ball can arrive in under a second, leaving no time to decide once it's in your glove. The great third basemen pre-decide everything before the pitch — positioning, force-or-tag, exactly what they'll do with the ball — so the reaction is pure, pre-made execution. Hesitating after you field it costs the play.",
      },
      {
        id: "bb11-09-s2", label: "Infield In",
        situation: "Runner on third, one out, tie game late. The infield is playing in to prevent the run, and a grounder is hit to you.",
        prompt: "With the infield in and a runner on third, what's your priority on a ground ball?",
        options: [
          "Throw to first for the sure out and let the run score",
          "Hold the ball and run at the runner",
          "Field it and throw home to cut down the runner trying to score — preventing the run is the priority",
          "Throw to second base",
        ],
        correctIndex: 2,
        explanation: "With the infield in to prevent a run in a tie game, the priority on a grounder is to field it and throw home to cut down the runner scoring from third. The defense has conceded range and accepted that some balls get through, specifically to make a play at the plate on the ones it reaches. Know that assignment before the pitch.",
      },
      {
        id: "bb11-09-s3", label: "Force or Tag",
        situation: "Bases loaded, one out. A ground ball is hit to you near the bag.",
        prompt: "With the bases loaded, is the play at third a force or a tag?",
        options: [
          "A tag — you must tag the runner coming from second",
          "There is no play at third",
          "You must both tag and touch the bag",
          "A force — the runner from second is forced to third, so you can just touch the bag with the ball",
        ],
        correctIndex: 3,
        explanation: "With the bases loaded every runner is forced to advance, so the runner from second is forced to third. You simply touch third while holding the ball for the force — no tag required — and can even start a 5-4-3 or 5-2-3 double play. Knowing instantly whether a play is a force or a tag, based on the occupied bases, is essential situational IQ.",
      },
      {
        id: "bb11-09-s4", label: "Communicate",
        situation: "Before a pitch in a likely bunt situation, you silently confirm the play call, coverage, and number of outs with your shortstop and pitcher.",
        prompt: "Why is this pre-pitch communication important?",
        options: [
          "It isn't — the third baseman should act alone",
          "Coordinating bunt coverage, the wheel play, and the outs prevents breakdowns like an uncovered base or two fielders going for the same ball",
          "It's only for show",
          "It distracts you from fielding",
        ],
        correctIndex: 1,
        explanation: "Pre-pitch communication — confirming the bunt call (charge or wheel), who covers third when you charge, and the number of outs — prevents the breakdowns that turn routine plays into disasters, like an uncovered bag or two fielders converging on the same bunt. Third base is part of a coordinated defense, and that talk ensures everyone knows their job.",
      },
    ],
  },

  "baseball-11-10": {
    intro: "Master the hot corner and you become the guardian — fearless hands and a cannon arm that turn smashes into outs. Pull it all together.",
    spots: [
      {
        id: "bb11-10-s1", label: "The Complete Player",
        situation: "A young player wants to become a complete third baseman and asks which qualities to develop.",
        prompt: "Which combination of traits defines the best third basemen?",
        options: [
          "Only home-run power",
          "Fearless soft hands and reflexes, a strong accurate arm, charging and backhand plays, and situational IQ",
          "Only base-running speed",
          "Only height and size",
        ],
        correctIndex: 1,
        explanation: "The best third basemen combine lightning reflexes and soft, fearless hands; a strong, accurate arm for the long throw; the footwork to charge slow rollers and bare-hand bunts; the range to backhand and dive at the line and in the hole; and the IQ to pre-decide every play. It's a complete craft of courage, hands, arm, and intelligence — not just power or size.",
      },
      {
        id: "bb11-10-s2", label: "The Impact",
        situation: "An opposing hitter smashes what he's sure is a double down the line, only to watch you dive, knock it down, and throw him out. He walks back demoralized.",
        prompt: "What does this reveal about the impact of a great third baseman?",
        options: [
          "It's just luck with no lasting effect",
          "Hitters don't care about defense",
          "A great third baseman demoralizes hitters by turning sure hits into outs — that fearless reliability is a foundation of championship defense",
          "Defense at third doesn't affect games",
        ],
        correctIndex: 2,
        explanation: "Turning a sure double into an out — as Beltré did from the hole season after season — demoralizes hitters and deflates rallies. A third baseman who consistently takes away hits the hitter believes he's earned breaks the other team's spirit and prevents runs. That fearless, demoralizing reliability at the corner is a genuine foundation of championship defense.",
      },
      {
        id: "bb11-10-s3", label: "The Mindset",
        situation: "A talented but inconsistent third baseman avoids reaction and charging drills because they're hard and a little scary, hoping natural ability will carry him.",
        prompt: "What does the mastery mindset say about this approach?",
        options: [
          "The hot corner is a craft mastered through fearless, deliberate repetition — reactions, charges, backhands, and the long throw; natural ability alone isn't enough",
          "It's fine — third base requires no special practice",
          "Only hitting practice matters",
          "Avoiding hard drills makes you a better fielder",
        ],
        correctIndex: 0,
        explanation: "The mastery mindset treats the hot corner as a craft built through fearless, deliberate repetition — reaction drills, charging and barehanding slow rollers, backhand and diving work, and the long throw from every angle. Skipping the hard, scary drills leaves a talented player inconsistent and unready for the position's toughest plays. The greats earned their reliability through relentless practice.",
      },
      {
        id: "bb11-10-s4", label: "The Legacy",
        situation: "From Adrián Beltré — a Dodgers product — to Nolan Arenado and beyond, a lineage of third basemen has anchored great defenses with spectacular play at the corner.",
        prompt: "What does this lineage teach young players?",
        options: [
          "That third base is unimportant to winning",
          "That defense can't be developed",
          "That only power hitters succeed at third",
          "That mastering the complete craft of the hot corner — fearless hands, a strong arm, charging and backhand plays, and IQ — can make a player the foundation of a championship defense",
        ],
        correctIndex: 3,
        explanation: "The lineage anchored by Beltré — a Dodgers product and first-ballot Hall of Famer — proves that mastering the complete craft of third base can make a player the cornerstone of a championship defense. Fearless hands, a strong arm, charging and backhand plays, and situational IQ turn the hardest-hit balls into outs. Pursue that whole craft with courage and become the guardian of the hot corner.",
      },
    ],
  },
};
