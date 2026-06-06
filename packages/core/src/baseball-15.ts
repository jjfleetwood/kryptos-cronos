import type { StageConfig, EpochConfig } from "./types";

export const baseball15Epoch: EpochConfig = {
  id: "baseball-15",
  name: "Right Field",
  subtitle: "The Cannon",
  description:
    "Right field is the strong-arm corner — the position with the longest throw to third base, where a cannon arm controls the running game. This complete position course builds the right fielder from the ground up: reading the ball off the bat, catching fly balls and line drives, the long throw to third and home, playing the line and the sun, backing up first base, hitting cutoffs, and the situational reads of the corner. From Little League to Mookie Betts — the Dodgers' multiple-Gold-Glove right fielder and World Series champion — you will learn to run down everything, unleash the cannon, and stop runners from taking the extra base.",
  emoji: "🚀",
  color: "orange",
  unlocked: true,
};

export const baseball15Stages: StageConfig[] = [
  // ─── baseball-15-01: The Strong-Arm Corner ────────────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "🚀",
    },
    id: "baseball-15-01",
    order: 1,
    title: "Right Field — The Cannon",
    subtitle: "Why the strongest arm goes in right field",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-15-badge-01", name: "Strong Arm", emoji: "🚀" },
    challengeType: "quiz",
    info: {
      tagline: "Right field is the strong-arm corner — the longest throw to third belongs here, so the cannon goes in right.",
      year: 2001,
      overview: [
        "Right field is the outfield's strong-arm corner. While it tends to see fewer batted balls than left field (most hitters are right-handed and pull to left), the right fielder makes the longest and most important corner throws, so the strongest outfield arm usually goes in right field. The reason is geometry: right field is the farthest outfield position from third base, so the throw to third — to retire or hold a runner trying to advance from first on a single, or from second — is the longest outfield throw and demands a powerful, accurate arm.",
        "The right fielder's core jobs mirror the other outfielders:\n- Catching fly balls and line drives.\n- Fielding ground balls that get through.\n- Playing the line and the wall.\n- Throwing to the bases and hitting the cutoff man.\n- Backing up plays.\nBut the right fielder's arm is his defining weapon. A strong-armed right fielder controls the running game — runners think twice about trying to go first-to-third on a single to right, or about tagging up, because the cannon will throw them out. The threat of the arm alone deters runners from taking extra bases.",
        "The right fielder must also read the slice on balls hit by left-handed pull hitters, which hook toward the right-field line, and he often plays with the sun as a factor. The center fielder is the captain with priority on shared balls, so the right fielder communicates and defers on balls in right-center. The right fielder also backs up first base on throws and pickoffs. Mookie Betts has turned the right-field corner into a defensive weapon — a multiple Gold Glove winner whose strong, accurate arm and elite instincts shut down the running game. This epoch builds the complete right fielder: reads, catches, the cannon, and the situational intelligence the corner demands.",
      ],
      technical: {
        title: "Why the Strongest Arm Goes in Right Field",
        body: [
          "The longest corner throw: right field is the farthest outfield position from third base, so the throw to third — on a single with a runner on first, or to hold a runner — is the longest outfield throw. This is why the strongest outfield arm usually goes in right field, even though right tends to see fewer batted balls than left.",
          "The arm as a weapon: a strong-armed right fielder controls the running game. Runners hesitate to go first-to-third on a single to right, or to tag up, because the cannon will throw them out — the threat alone deters extra bases. The right fielder also reads the slice on balls from left-handed pull hitters (which hook toward the right-field line), often plays with the sun as a factor, and backs up first base on throws and pickoffs.",
        ],
        codeExample: {
          label: "Right Field — Core Responsibilities",
          code: `  THE RIGHT FIELDER'S JOBS:
  ✓ CATCH fly balls + line drives (read off the bat)
  ✓ FIELD grounders through the right side
  ✓ Play the LINE, the wall, + often the SUN
  ✓ The CANNON: the longest corner throw (to THIRD)
    + the throw HOME; hit the cutoff
  ✓ BACK UP first base on throws + pickoffs; back up 2nd
  ✓ COMMUNICATE + defer to the CF on shared balls

  WHY THE STRONGEST ARM GOES IN RIGHT:
  → RF is the FARTHEST outfield spot from THIRD →
    the throw to third is the LONGEST outfield throw
  → A strong arm CONTROLS the running game — runners
    hesitate to go first-to-third or tag up
  → Read the SLICE on balls from LH pull hitters
    (hook toward the right-field line)

  Right field: the strong-arm corner.`,
        },
      },
      incident: {
        title: "Mookie Betts — The Gold Glove Cannon",
        when: "2014–present — Boston Red Sox and Los Angeles Dodgers",
        where: "Dodger Stadium, Los Angeles, California",
        impact: "Mookie Betts is a multiple Gold Glove right fielder and a World Series champion whose strong, accurate arm, elite jumps, and home-run robberies make him one of the best defensive right fielders of his era — the modern image of the right-field cannon.",
        body: [
          "Mookie Betts plays right field with elite instincts and one of the game's most respected arms. He gets a great jump, runs precise routes, robs home runs at the wall, and unleashes strong, accurate throws that gun down runners trying to take the extra base. With a runner trying to advance from first to third on a single to right, a strong-armed right fielder like Betts fields the ball and throws on a line to nail the runner — the right-field cannon at work.",
          "Betts has won multiple Gold Gloves and a World Series with the Dodgers, and his arm is feared enough that runners think twice about challenging it. His example is the model of the right-field cannon: a strong, accurate arm and elite instincts that control the running game and deter runners from taking the extra base. For young right fielders, Betts shows that the strong-arm corner can be a defensive weapon, where a great arm and great reads turn singles into held runners and outs.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Single to Right, Runner Going to Third", sub: "the longest outfield throw", type: "attacker" },
          { label: "Right Fielder's Cannon", sub: "the strongest outfield arm", type: "system" },
          { label: "Laser to Third Base", sub: "flat, accurate, on a line", type: "victim" },
          { label: "Runner Out or Held", sub: "the arm controls the game", type: "result" },
        ],
      },
      timeline: [
        { year: 1955, event: "The right-field arm is established as a prized defensive weapon" },
        { year: 1972, event: "The strong-armed right fielder recognized as a force that controls the running game" },
        { year: 2016, event: "Mookie Betts begins a run of Gold Gloves in right field", highlight: true },
        { year: 2020, event: "Betts joins the Dodgers and wins a World Series, his elite right-field defense on display" },
        { year: 2015, event: "Statcast quantifies outfield arm strength, confirming right field's cannon" },
      ],
      keyTakeaways: [
        "Right field is the strong-arm corner — the strongest outfield arm goes there because the throw to third is the longest outfield throw",
        "Right field tends to see fewer batted balls than left, but its throws are the longest and most important",
        "A strong-armed right fielder controls the running game — the threat of the cannon deters runners from taking extra bases",
        "The right fielder reads the slice on balls from left-handed pull hitters, often plays the sun, and backs up first base",
      ],
      references: [
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Outfield Play", url: "https://www.usabaseball.com" },
        { title: "MLB: Mookie Betts", url: "https://www.mlb.com/player/mookie-betts-605141" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-01-q1",
          type: "The Arm",
          challenge: `  A coach explains that the strongest outfield arm
  is usually placed in right field, even though
  right field tends to see fewer batted balls than
  left.`,
          text: "Why does the strongest outfield arm usually go in right field?",
          options: [
            "Because right fielders never have to run",
            "Because right field is the farthest outfield position from third base, so the throw to third is the longest outfield throw and demands a powerful arm",
            "Because right field sees the most action",
            "Because the rules require it",
          ],
          correctIndex: 1,
          explanation: "Right field is the farthest outfield position from third base, so the throw to third — to retire or hold a runner trying to advance from first on a single, or from second — is the longest outfield throw. This demands the strongest, most accurate arm, which is why the cannon goes in right field. Even though right tends to see fewer batted balls than left (most hitters pull to left), its throws are the longest and most important.",
        },
        {
          id: "baseball-15-01-q2",
          type: "Controlling Runners",
          challenge: `  A runner on first base on a single to right field
  hesitates and stops at second instead of trying
  for third, because of the right fielder's arm.`,
          text: "How does a strong-armed right fielder control the running game even without making a throw?",
          options: [
            "He doesn't — only actual throws matter",
            "The threat of his cannon deters runners from trying to take the extra base (first-to-third or tagging up), so they hold up without a throw being needed",
            "Runners ignore the right fielder's arm",
            "A strong arm only matters on home runs",
          ],
          correctIndex: 1,
          explanation: "A strong-armed right fielder controls the running game through the threat of his arm. Runners hesitate to go first-to-third on a single to right, or to tag up, because they know the cannon will throw them out — so they hold up at second or stay put without a throw ever being needed. A strong-armed right fielder like Mookie Betts is feared enough that runners hesitate to challenge his arm. The deterrent effect of the cannon is as valuable as the throws themselves.",
        },
        {
          id: "baseball-15-01-q3",
          type: "The Slice",
          challenge: `  A left-handed batter pulls a fly ball toward right
  field. As it travels, the ball curves (hooks)
  toward the right-field line.`,
          text: "What must the right fielder account for when reading a pulled fly ball from a left-handed hitter?",
          options: [
            "Nothing — pulled balls travel straight",
            "The slice/hook — balls pulled by left-handed hitters curve toward the right-field line, so the route must account for the curve",
            "That the ball will curve toward center field",
            "That the ball will stop in midair",
          ],
          correctIndex: 1,
          explanation: "A fly ball pulled by a left-handed hitter slices (hooks) toward the right-field line as it travels — the mirror image of the slice a left fielder reads on right-handed pull hitters. The right fielder must read this curve and run a route that accounts for it, rather than taking a straight line to where the ball started. Reading the hook on pulled balls from lefties is a distinctive right-field skill.",
        },
        {
          id: "baseball-15-01-q4",
          type: "Legacy",
          challenge: `  A right fielder with a Gold Glove arm fields a
  single and unleashes a flat, accurate throw to
  third base that nails a runner trying to advance —
  and makes other runners stop testing him.`,
          text: "What does Mookie Betts's career demonstrate about right field?",
          options: [
            "That right field requires no skill",
            "That a powerful, accurate arm can make the right-field corner a defensive weapon that controls the running game and turns singles into outs",
            "That only hitting matters in right field",
            "That right-field defense can't be measured",
          ],
          correctIndex: 1,
          explanation: "Mookie Betts — multiple Gold Gloves, a feared arm, and elite instincts — shows that the right-field corner can be a defensive weapon. His strong, accurate arm and great reads control the running game and deter runners from taking extra bases. He's a model of the right-field cannon: a great arm and great reads that turn singles into held runners and outs. The position rewards a strong arm combined with the reads and routes every outfielder needs.",
        },
      ],
    },
  },

  // ─── baseball-15-02: Reading the Ball and the Jump ────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "👁️",
    },
    id: "baseball-15-02",
    order: 2,
    title: "Reading the Ball and the Jump",
    subtitle: "The first step, routes, and the slice toward the line",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-02", name: "Great Jump", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "The right fielder's reads and routes turn his speed into range — and he must read the slice on every lefty pull.",
      year: 1990,
      overview: [
        "Like every outfielder, the right fielder's most important skill is reading the ball off the bat and getting a good first step — the jump. The read unfolds in stages:\n- Before contact — anticipate by studying the pitch, count, and hitter's tendencies.\n- At contact — read the ball's trajectory from the sound and initial flight.\n- Then — take the proper first step and an efficient route.\nAn outfielder who reads instantly covers far more ground than one who's faster but reacts late or takes a poor route.",
        "The right fielder's distinctive read is the slice on balls from left-handed pull hitters, which hooks toward the right-field line — he must account for the curve rather than running straight to where the ball started. His first steps by ball type:\n- Over his head — drop-step and turn to run (never backpedal).\n- In the gap — break hard.\n- In front — charge under control.\nReading the slice and running efficient routes are what let the right fielder cover his corner.",
        "Route efficiency turns the jump into range and sets up the throw. Because the right fielder has the strongest arm and makes the longest throws, running a route that lets him arrive with momentum toward third base or home is especially valuable — the 'banana' route gets him to the catch point already moving toward his throw. A great jump and efficient routes, built on reading the ball off the bat, are the foundation of the right fielder's defense, and they set up the cannon that controls the running game.",
      ],
      technical: {
        title: "The Read, the Jump, and the Slice",
        body: [
          "Read and jump: anticipate using the pitch, count, and hitter, then read trajectory off the bat from the sound and initial flight. Take the proper first step — drop step on balls over the head (never backpedal), hard break to the gap, or controlled charge in front. A great jump comes from anticipation plus an instant read, which is why reads beat raw speed.",
          "The slice and routes: read the slice on balls from left-handed pull hitters, which hook toward the right-field line, and account for the curve in your route. Run an efficient 'banana' route to arrive at the catch point with momentum toward your throw — especially valuable because the right fielder makes the longest throws to third and home. Reading the slice and running efficient routes let the right fielder cover his corner and set up the cannon.",
        ],
        codeExample: {
          label: "Reading the Ball and the Jump (Right Field)",
          code: `  READ (before + at contact):
  → ANTICIPATE: pitch, count, hitter, the swing
  → At contact: SOUND + initial flight → trajectory
  → A great JUMP = anticipation + instant read
    (beats raw speed with a late reaction)

  FIRST STEP:
  → Over the head → DROP STEP (NEVER backpedal)
  → To the gap → hard BREAK
  → In front → CHARGE under control

  THE SLICE (right field's distinctive read):
  → Balls from LH pull hitters HOOK toward the
    right-field line → account for the curve

  ROUTES:
  → Efficient "BANANA" route → arrive with momentum
    toward your THROW (esp. valuable — RF makes the
    longest throws to 3rd + home)`,
        },
      },
      incident: {
        title: "The Jump and the Route Set Up the Cannon",
        when: "1990 — the route-efficiency era",
        where: "Dodger Stadium and ballparks across the game",
        impact: "For the right fielder, whose arm is his weapon, reading the ball and running an efficient route that sets up the throw are doubly valuable — the jump creates range, and the route lets the cannon fire with momentum toward third or home.",
        body: [
          "Reads and routes matter for every outfielder, but for the right fielder — whose arm is his defining weapon — running an efficient route that sets up the throw is especially valuable. A great jump lets him reach more balls, and a route that brings him to the catch point with momentum toward third base or home lets his cannon fire from a strong position. The combination of range and a throw set up by a good route is what makes the right fielder's arm a genuine weapon against the running game.",
          "Defensive analysis confirmed that the jump and route efficiency create range, and that a slower outfielder with great reads can out-range a faster one who reacts late. For the right fielder, the lesson is to master the read (including the slice on lefty pull hitters), the first step, and the efficient route — both to cover his corner and to set up the throw. A great jump and a route that feeds the cannon are the foundation of right-field defense, turning the arm into a weapon that controls the running game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Anticipate + Read at Contact", sub: "pitch, hitter, sound, flight", type: "system" },
          { label: "Proper First Step", sub: "drop step, read the slice", type: "attacker" },
          { label: "Efficient Route", sub: "momentum toward the throw", type: "victim" },
          { label: "Range + the Cannon Set Up", sub: "feed the arm", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Drop-step technique standardized for outfielders" },
        { year: 1990, event: "Route efficiency and the jump emphasized as outfield fundamentals", highlight: true },
        { year: 2010, event: "Defensive metrics begin measuring outfield reads and routes" },
        { year: 2015, event: "Statcast quantifies jump and route efficiency" },
        { year: 2020, event: "Read-and-route training refined with technology" },
      ],
      keyTakeaways: [
        "Reading the ball off the bat and getting a good jump is the right fielder's most important skill",
        "The right fielder reads the slice on balls from left-handed pull hitters, which hook toward the right-field line",
        "On balls over the head, drop-step and turn to run — never backpedal — then look back for the ball",
        "Run an efficient 'banana' route to arrive with momentum toward the throw — especially valuable since the right fielder makes the longest throws",
      ],
      references: [
        { title: "USA Baseball: Outfield Reads and Routes", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB Statcast: Outfield Jump", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-02-q1",
          type: "The Jump",
          challenge: `  Two right fielders run the same sprint speed, but
  one consistently reaches more balls because he
  reads the ball instantly and breaks in the right
  direction.`,
          text: "Why can a great jump make one outfielder cover more ground than an equally fast one?",
          options: [
            "It can't — only speed determines range",
            "Reading the ball instantly and taking a good first step gets the outfielder moving in the right direction sooner, covering more ground than a late reaction or poor route",
            "The faster outfielder always covers more ground",
            "Jumps only matter on ground balls",
          ],
          correctIndex: 1,
          explanation: "A great jump — an instant, accurate read and a good first step — gets an outfielder moving in the right direction immediately, covering more ground than an equally fast outfielder who reads the ball late or runs a poor route. Reads and routes, not just speed, create range. For the right fielder, the jump also sets up the cannon by getting him to the ball in position to throw. Reading the ball off the bat is the most important outfield skill.",
        },
        {
          id: "baseball-15-02-q2",
          type: "The Slice",
          challenge: `  A left-handed batter pulls a fly ball toward right
  field. A right fielder takes a straight-line route
  to where the ball started, and it hooks away from
  him toward the line for a hit.`,
          text: "What did the right fielder fail to account for?",
          options: [
            "Nothing — the route was correct",
            "The slice — balls pulled by left-handed hitters hook toward the right-field line, so the route must account for the curve",
            "That the ball would curve toward center field",
            "That left-handed hitters can't pull the ball",
          ],
          correctIndex: 1,
          explanation: "A fly ball pulled by a left-handed hitter slices (hooks) toward the right-field line as it travels. The right fielder must read this curve and run a route that accounts for it, rather than taking a straight line to where the ball started. Failing to account for the slice — as in this play — lets the ball hook away toward the line for a hit. Reading the hook on lefty pull balls is a distinctive and essential right-field skill.",
        },
        {
          id: "baseball-15-02-q3",
          type: "Drop Step",
          challenge: `  A ball is hit over a right fielder's head. He
  backpedals to track it, stumbles, and the ball
  drops in for extra bases.`,
          text: "What should the outfielder do instead of backpedaling on a ball over his head?",
          options: [
            "Backpedal faster",
            "Drop-step — pivot and turn to run back toward the ball's landing spot, then look back for the ball",
            "Stand still and wait",
            "Run in toward the infield",
          ],
          correctIndex: 1,
          explanation: "Outfielders never backpedal on a ball over their head — it's slow and unstable. The right fielder uses a drop step: pivoting and turning to run back toward the ball's projected landing spot at full speed, then looking back over his shoulder to find the ball. Backpedaling leads to stumbles and misjudged balls; turning and running covers far more ground. The drop step is the fundamental technique for balls hit overhead.",
        },
        {
          id: "baseball-15-02-q4",
          type: "Routes",
          challenge: `  A right fielder with a cannon arm runs a slightly
  curved route to a single, arriving at the ball
  already moving toward third base.`,
          text: "Why is running a route that sets up the throw especially valuable for the right fielder?",
          options: [
            "It isn't — routes don't affect throws",
            "Because the right fielder makes the longest throws (to third and home), arriving with momentum toward the throw lets his cannon fire from a strong position",
            "Curved routes are always slower for no reason",
            "Only the center fielder benefits from routes",
          ],
          correctIndex: 1,
          explanation: "For the right fielder, whose arm is his weapon and who makes the longest outfield throws (to third and home), running a 'banana' route that brings him to the catch point with momentum already moving toward his throw is especially valuable. It lets his cannon fire from a strong position, in one motion, controlling the running game. The route both gets him to the ball and sets up the throw — doubly important for the strong-arm corner.",
        },
      ],
    },
  },

  // ─── baseball-15-03: Catching Fly Balls and Line Drives ───────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-15-03",
    order: 3,
    title: "Catching Fly Balls and Line Drives",
    subtitle: "Technique, two hands, and catching to throw",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-03", name: "Sure Hands", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "For a right fielder, catching the ball the right way isn't just an out — it's the start of the cannon's throw.",
      year: 1985,
      overview: [
        "Catching fly balls is the right fielder's most fundamental skill, and for the strong-arm corner, catching to set up the throw matters especially. The technique:\n- Get to the landing spot quickly with a good route.\n- Get under control.\n- Catch with two hands at or above the throwing-shoulder side of the head — so the catch flows directly into a throw.\nBecause his arm is his weapon, catching above the throwing shoulder (not basket-style at the belt) lets him transfer and unleash the cannon immediately on plays at the bases.",
        "Different balls require different catches:\n- Routine fly — two hands above the throwing shoulder, moving toward the target if possible.\n- Line drive (the hardest read) — judge sinking (charge, maybe catch low or short-hop) vs. carrying (drift back), and commit.\n- Over-the-shoulder catch — on balls well over the head, drop-step, sprint, and catch over the shoulder on the run.\nEach catch is built through repetition.",
        "Footwork sets up the throw, which matters more for the right fielder than any outfielder because of his long, important throws. Whenever a runner may advance, the right fielder catches the ball moving toward the target and uses a crow-hop after the catch to generate the strong throw to third or home. On a routine catch with no one on base, the priority is a secure two-handed catch. Getting under control before the catch and catching above the throwing shoulder with two hands is the foundation that lets the right fielder both secure the out and fire the cannon.",
      ],
      technical: {
        title: "Catching Technique That Sets Up the Cannon",
        body: [
          "Routine fly balls: get to the spot with a good route, get under control, and catch with two hands at or above the throwing-shoulder side of the head, moving toward the target if a runner may advance. Catching above the throwing shoulder (not basket-style at the belt) lets the catch flow straight into the throw — especially important for the right fielder's long throws to third and home.",
          "Line drives and over-the-shoulder catches: on a line drive, read whether it's sinking (charge, catch low or short-hop it) or carrying (drift back) and commit. On balls well over the head, after a drop step and full sprint, make the over-the-shoulder catch on the run. Use a crow-hop after the catch to generate the strong throw when a runner may advance. Get under control before the catch — don't drift or lunge.",
        ],
        codeExample: {
          label: "Catching to Throw (Right Field)",
          code: `  ROUTINE FLY BALL:
  ✓ Good route → get to the spot, GET UNDER CONTROL
  ✓ TWO HANDS, at/above the THROWING-SHOULDER side
    (NOT basket-style at the belt)
  ✓ Move TOWARD the target if a runner may advance
  → catch flows straight into the CANNON's throw
    (esp. important — RF's throws are long + key)

  LINE DRIVE (hardest read):
  → Sinking? → CHARGE, catch low / short-hop it
  → Carrying? → DRIFT BACK → read it + COMMIT

  OVER THE HEAD:
  → Drop step + SPRINT → OVER-THE-SHOULDER catch on
    the run

  THROW SETUP:
  → CROW-HOP after the catch → the strong throw to
    third or home when a runner may advance`,
        },
      },
      incident: {
        title: "Catching to Throw — The Right Fielder's Edge",
        when: "1985 — the fundamentals era",
        where: "Oracle Park and ballparks across the game",
        impact: "For the right fielder, whose arm is his weapon, catching the ball above the throwing shoulder and setting up the throw turns the catch into the first step of the cannon — the difference between holding a runner and letting him advance.",
        body: [
          "The fundamentals of catching fly balls matter for every outfielder, but they're especially important for the right fielder, whose long, accurate throws control the running game. An outfielder who catches with two hands above the throwing shoulder, moving toward the target, can fire the cannon immediately on a play at third or home — holding or retiring a runner. One who catches basket-style at the belt or drifts under the ball loses the time and balance needed to throw, letting runners advance.",
          "These fundamentals — the two-handed catch above the throwing shoulder, the crow-hop into the throw, the read on line drives, and the over-the-shoulder catch — are built through repetition. For the right fielder, catching in a way that sets up the throw is the difference between a cannon that controls the running game and an arm that arrives too late. For young right fielders, mastering the catch-to-throw is the foundation on which the right-field cannon is built.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read and Route to the Spot", sub: "get there under control", type: "system" },
          { label: "Two Hands, Above the Shoulder", sub: "catch flows into the throw", type: "attacker" },
          { label: "Right Catch for the Ball", sub: "fly, line drive, over the head", type: "victim" },
          { label: "Out Secured, Cannon Ready", sub: "crow-hop into the throw", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Two-handed catch above the throwing shoulder taught as the standard" },
        { year: 1972, event: "Catching the ball to throw established as a right-field fundamental" },
        { year: 1985, event: "Catch-and-throw fundamentals standardized in outfield coaching", highlight: true },
        { year: 2010, event: "Defensive metrics credit outfield catches and throws" },
        { year: 2020, event: "Catching and throwing technique refined with technology" },
      ],
      keyTakeaways: [
        "Catch routine fly balls with two hands at or above the throwing-shoulder side of the head, ready to throw",
        "Catching above the throwing shoulder lets the catch flow into the throw — especially important for the right fielder's long throws",
        "Read line drives as sinking (charge) or carrying (drift back) and commit; use the over-the-shoulder catch on balls overhead",
        "Get under control before the catch and crow-hop into the strong throw to third or home when a runner may advance",
      ],
      references: [
        { title: "USA Baseball: Outfield Catching Mechanics", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-03-q1",
          type: "Catch to Throw",
          challenge: `  A right fielder catches routine fly balls basket-
  style at his belt. With a runner tagging from
  third, he's slow to transfer and his strong arm
  arrives too late.`,
          text: "How should the right fielder catch a fly ball when a runner may advance?",
          options: [
            "Basket-style at the belt with one hand",
            "With two hands at or above the throwing-shoulder side of the head, so the catch flows straight into the cannon's throw",
            "Behind his back",
            "With his bare hand only",
          ],
          correctIndex: 1,
          explanation: "For the right fielder, whose arm is his weapon, catching above the throwing shoulder is critical. He catches with two hands at or above the throwing-shoulder side of the head — a position that lets the catch flow immediately into the transfer and the strong throw to third or home. Catching basket-style at the belt is slower to throw from, letting runners advance despite his strong arm. Catching to throw is the foundation of the right-field cannon.",
        },
        {
          id: "baseball-15-03-q2",
          type: "Over the Shoulder",
          challenge: `  A ball is crushed well over the right fielder's
  head. He drop-steps, sprints to the spot, and the
  ball is still carrying as he arrives.`,
          text: "What catch should the right fielder make on a ball hit well over his head?",
          options: [
            "Stop, turn to face the infield, and catch it",
            "An over-the-shoulder catch on the run, tracking the ball over his shoulder like a football receiver",
            "A basket catch at his belt",
            "Let it drop and play the carom",
          ],
          correctIndex: 1,
          explanation: "On a ball hit well over his head, the right fielder drop-steps, sprints to the projected landing spot, and makes an over-the-shoulder catch on the run — tracking the ball over his shoulder like a receiver. This lets him run full speed to cover the maximum ground and still make the catch. Stopping to turn and face the ball wastes time and ground. The over-the-shoulder catch is essential for running down deep balls.",
        },
        {
          id: "baseball-15-03-q3",
          type: "Line Drives",
          challenge: `  A line drive is hit at the right fielder. He can't
  immediately tell whether it's sinking in front of
  him or carrying over his head.`,
          text: "Why are line drives the hardest balls to read, and what must the outfielder do?",
          options: [
            "They're the easiest read",
            "It's hard to judge whether a line drive is sinking or carrying, so the outfielder must read it quickly and commit — charging a sinker or drifting back on a carrier",
            "He should always charge every line drive",
            "He should always drift back on every line drive",
          ],
          correctIndex: 1,
          explanation: "Line drives are the hardest balls to read because it's difficult to immediately judge whether they're sinking (and will drop in front) or carrying (and will sail overhead). The right fielder must read the trajectory quickly and commit — charging hard to catch or short-hop a sinking liner, or drifting back on a carrying one. Hesitation is fatal on a line drive; reading it and committing is essential.",
        },
        {
          id: "baseball-15-03-q4",
          type: "Crow-Hop",
          challenge: `  A right fielder catches a fly ball with a runner
  tagging at third, then throws home flat-footed
  from a standstill, and even his strong arm
  produces a weak, late throw.`,
          text: "What footwork generates a strong throw after a catch when a runner is advancing?",
          options: [
            "Throwing flat-footed from a standstill",
            "A crow-hop — a small shuffle-hop after the catch that builds momentum into a strong throw",
            "Throwing while falling backward",
            "Spinning in a full circle before throwing",
          ],
          correctIndex: 1,
          explanation: "After catching a ball with a runner advancing, the right fielder uses a crow-hop — a small shuffle-hop that transfers his weight and builds momentum behind the throw — to generate a strong, accurate throw to third or home. Throwing flat-footed from a standstill produces a weak, late throw even from a strong arm. Combined with catching the ball moving toward the target above the throwing shoulder, the crow-hop unleashes the cannon to hold or retire the runner.",
        },
      ],
    },
  },

  // ─── baseball-15-04: The Cannon — Throwing to Third and Home ───────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Globe Life Field",
      location: "Arlington, Texas",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-15-04",
    order: 4,
    title: "The Cannon — Throwing to Third and Home",
    subtitle: "The longest corner throw and controlling the runner",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-15-badge-04", name: "The Cannon", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "The right fielder's throw to third is the longest in the outfield — a flat, accurate laser that nails the runner and shuts down the running game.",
      year: 2001,
      overview: [
        "The right fielder's signature weapon is his arm, and his signature throw is to third base — the longest throw in the outfield:\n- On a single to right with a runner on first, the runner often tries for third; the throw must travel the longest distance of any outfield throw, on a line and accurate, to nail him.\n- The throw home on a play at the plate is also critical.\nA strong, accurate cannon controls the running game — and the threat of it deters runners from even attempting the extra base.",
        "The throw combines arm strength with the same mechanics as any outfielder:\n- A crow-hop to generate momentum.\n- A four-seam grip.\n- A low, flat, carrying trajectory — not a high rainbow — so the long throw to third gets there in time and the cutoff man can handle it.\nThe right fielder catches or fields moving toward the target, crow-hops, and throws with his whole body. Mookie Betts's throws are known for their accuracy and carry, arriving on a line to nail runners trying to advance.",
        "Hitting the cutoff man and the relay system apply to the right fielder's throws as much as anyone's, and matter even more because his throws are the longest. On a throw to third or home, the right fielder throws to or through the cutoff man, who can relay, redirect to catch a trailing runner, or let it through. On the deepest balls, a middle infielder comes out as the relay man. The right fielder's cannon is a weapon, but it's most effective when the throw is accurate, low, and hits the cutoff — controlling the running game while keeping the defense's options.",
      ],
      technical: {
        title: "The Throw to Third, the Cannon, and the Cutoff",
        body: [
          "The throw to third: the longest outfield throw, made on a single to right with a runner on first trying to advance. Catch or field the ball moving toward the target, crow-hop, use a four-seam grip, and throw on a low, flat, carrying line — not a high rainbow — so it gets there in time and stays catchable for the cutoff. The throw home on a play at the plate uses the same mechanics.",
          "The cutoff and relay: throw to or through the cutoff man on throws to third or home, hitting him at the chest so he can relay, redirect to catch a trailing runner, or let it through. On the deepest balls, a middle infielder comes out as the relay man. Because the right fielder's throws are the longest, hitting the cutoff and relay men accurately is especially important — the cannon is most effective when the throw is accurate, low, and to the cutoff.",
        ],
        codeExample: {
          label: "The Right-Field Cannon",
          code: `  THE THROW TO THIRD (longest outfield throw):
  → Single to right, runner on 1st going to 3rd
  1. Catch/field moving TOWARD the target
  2. CROW-HOP → gather momentum, whole body
  3. FOUR-SEAM grip
  4. LOW, FLAT, carrying LINE (not a high rainbow)
     → gets there in time + catchable for the cutoff
  → Aim FLAT so the ball barely rises (accurate + fast)

  THE THROW HOME: same mechanics, play at the plate

  HIT THE CUTOFF / RELAY (esp. important — longest
  throws):
  → Throw to/through the cutoff at the chest → he
    relays / redirects (catch a trailing runner) /
    lets it through
  → Deepest balls → a middle infielder is the RELAY

  The cannon controls the running game — most
  effective when ACCURATE, LOW, + to the cutoff.`,
        },
      },
      incident: {
        title: "Mookie Betts and the Cannon That Controls the Game",
        when: "2014–present — a Gold Glove career",
        where: "Globe Life Field and ballparks across the game",
        impact: "Mookie Betts's strong, accurate arm — gunning down runners trying to advance and deterring the rest — is a modern demonstration of the right-field cannon, the kind of weapon that controls the running game from the corner.",
        body: [
          "Mookie Betts shows the right-field cannon at its finest. With a runner trying to advance from first to third on a single to right, a strong-armed right fielder fields the ball and unleashes a throw on a line — covering the longest outfield distance, right field to third — to nail the runner. Betts's accurate, carrying throws and quick release have produced many outfield assists and made runners wary of challenging him.",
          "What makes these throws possible is the combination of arm strength with sound mechanics: fielding the ball moving toward the target, a crow-hop, a four-seam grip, and a flat, low trajectory that gets the ball there in time. Betts's arm is feared enough that runners stop trying to take the extra base on him — the threat of the cannon controls the running game by itself. For young right fielders, Betts is the model: a flat, accurate throw to third that turns singles into outs and shuts down the running game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Single to Right, Runner to Third", sub: "the longest outfield throw", type: "attacker" },
          { label: "Crow-Hop, Four-Seam, Flat Line", sub: "whole-body throw", type: "system" },
          { label: "Laser to Third / the Cutoff", sub: "accurate, low, on a line", type: "victim" },
          { label: "Runner Out or Deterred", sub: "the cannon controls the game", type: "result" },
        ],
      },
      timeline: [
        { year: 1955, event: "The right-field arm established as a prized defensive weapon" },
        { year: 1972, event: "Strong-armed right fielders deter runners from taking the extra base" },
        { year: 2018, event: "Mookie Betts wins MVP and a Gold Glove, his right-field defense elite", highlight: true },
        { year: 2020, event: "Betts brings his Gold Glove arm to the Dodgers and wins the World Series" },
        { year: 2015, event: "Statcast measures outfield arm strength, confirming the right-field cannon" },
      ],
      keyTakeaways: [
        "The right fielder's throw to third is the longest in the outfield, made on a single to right with a runner advancing",
        "Generate the throw with a crow-hop, a four-seam grip, and a low, flat, carrying line — not a high rainbow",
        "A flat, accurate throw gets there in time and stays catchable for the cutoff — aim on a line, not a rainbow",
        "Hit the cutoff and relay men accurately, especially important on the right fielder's long throws, to control the running game",
      ],
      references: [
        { title: "USA Baseball: Outfield Throwing and Cutoffs", url: "https://www.usabaseball.com" },
        { title: "MLB: Mookie Betts", url: "https://www.mlb.com/player/mookie-betts-605141" },
        { title: "MLB Statcast: Outfield Arm Strength", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-04-q1",
          type: "The Throw to Third",
          challenge: `  A single is hit to right field with a runner on
  first who tries to advance all the way to third.`,
          text: "Why is the right fielder's throw to third the longest in the outfield?",
          options: [
            "Because right fielders have weak arms",
            "Because right field is the farthest outfield position from third base, so the throw to third covers the longest distance",
            "Because the throw to third is actually short",
            "Because runners never advance to third",
          ],
          correctIndex: 1,
          explanation: "Right field is the farthest outfield position from third base, so the right fielder's throw to third — to retire or hold a runner advancing from first on a single — covers the longest distance of any outfield throw. This is the signature throw of the right-field cannon and the reason the strongest outfield arm goes in right field. Making this long throw accurately and on time controls the running game.",
        },
        {
          id: "baseball-15-04-q2",
          type: "Trajectory",
          challenge: `  On the long throw to third, a right fielder
  unleashes a high, looping rainbow throw. It
  arrives too late and the runner is safe.`,
          text: "Why should the throw to third be on a low, flat line rather than a high rainbow?",
          options: [
            "High rainbow throws are always better over long distances",
            "A low, flat line gets to third faster and stays catchable for the cutoff, while a high rainbow is slow and arrives too late",
            "Trajectory doesn't matter on long throws",
            "Low throws can't reach third base",
          ],
          correctIndex: 1,
          explanation: "Over the long throw to third, a low, flat, carrying line is essential — it gets the ball there faster and stays at a height where the cutoff man can handle it. A high, looping rainbow throw is slow and arrives too late to retire the runner. A strong right fielder's best throws are flat and on a line, arriving fast and catchable. Generated by a crow-hop and a four-seam grip, the flat, strong throw is the goal.",
        },
        {
          id: "baseball-15-04-q3",
          type: "The Threat",
          challenge: `  After a right fielder throws out a runner at third
  early in a series, opposing runners stop trying to
  advance from first to third on singles to right.`,
          text: "How does a strong-armed right fielder control the running game beyond making throws?",
          options: [
            "He doesn't — only actual throws matter",
            "The threat of his cannon deters runners from attempting the extra base, so they hold up without a throw being needed",
            "Runners ignore the right fielder's arm",
            "A strong arm only matters on home runs",
          ],
          correctIndex: 1,
          explanation: "Once a right fielder demonstrates his cannon by throwing out a runner, opposing runners stop testing it — they hold up at second rather than risk being thrown out at third. The threat of the arm deters runners from taking the extra base, controlling the running game without a throw being needed. A feared arm like Mookie Betts's makes runners hesitate to challenge it. The deterrent effect is as valuable as the throws themselves.",
        },
        {
          id: "baseball-15-04-q4",
          type: "Hit the Cutoff",
          challenge: `  On a long throw home, a right fielder airmails the
  ball over the cutoff man's head. A trailing runner
  advances because the throw couldn't be redirected.`,
          text: "Why is hitting the cutoff man especially important on the right fielder's long throws?",
          options: [
            "It isn't — the right fielder should always throw directly to the base",
            "Because the throws are so long, accurately hitting the cutoff keeps the defense's options to relay or redirect, while an overthrow lets runners advance",
            "The cutoff man has no role on long throws",
            "Hitting the cutoff slows the play for no reason",
          ],
          correctIndex: 1,
          explanation: "Because the right fielder's throws are the longest in the outfield, accurately hitting the cutoff man is especially important. A low, accurate throw to or through the cutoff man lets the defense relay it, redirect it to catch a trailing runner, or let it through — controlling the running game. Overthrowing the cutoff on a long throw removes those options and lets trailing runners advance. The cannon is most effective when the throw is accurate, low, and to the cutoff.",
        },
      ],
    },
  },

  // ─── baseball-15-05: Building the Right Fielder's Body ────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Chase Field",
      location: "Phoenix, Arizona",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-15-05",
    order: 5,
    title: "Building the Right Fielder's Body",
    subtitle: "Speed, the strongest corner arm, and durability",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-05", name: "Strong Wing", emoji: "💪" },
    challengeType: "quiz",
    info: {
      tagline: "The right fielder is a sprinter with the strongest corner arm — built for speed and for the longest throws in the outfield.",
      year: 2015,
      overview: [
        "The right fielder's body combines an outfielder's speed with the strongest corner arm. The key physical priorities:\n- First-step quickness and acceleration — for the jump and range.\n- Straight-line and change-of-direction speed — to cover the corner.\n- Endurance.\n- Most distinctively, elite arm strength for the longest outfield throws to third and home.\nHe doesn't need quite a center fielder's range, but his arm is his defining weapon, so building and protecting it is a top priority.",
        "Speed and quickness come from the same training as any outfielder:\n- First-step quickness and acceleration for the jump.\n- Straight-line speed for deep balls.\n- Change-of-direction agility for slicing balls and the gaps.\nBuilt through sprint training, acceleration drills, and reaction work, with strong legs and a powerful core driving the sprint and — crucially — the throws. The lower body and core generate much of the power on the long throw.",
        "Arm strength is the right fielder's distinctive physical priority. The strongest outfield arm is built through long-toss programs, sound throwing mechanics, and rotator-cuff and scapular strengthening to develop power and protect the shoulder over the long, high-effort throws the position demands. Core strength powers the crow-hop throw; flexibility and mobility keep the body healthy over a long season of sprinting and throwing. The right fielder trains like a sprinter with a focus on building and protecting the strongest, most durable throwing arm in the outfield.",
      ],
      technical: {
        title: "Training Priorities for Right Fielders",
        body: [
          "Speed and quickness: prioritize first-step quickness and acceleration (sprint and reaction drills) for the jump and range, plus straight-line speed and change-of-direction agility for the corner. Strong legs and a powerful core drive the sprint and generate much of the power on the long throw.",
          "Arm strength and durability (the distinctive priority): build the strongest outfield arm through long-toss, sound mechanics, and rotator-cuff and scapular strengthening for the longest throws to third and home, and to protect the shoulder over high-effort throws. Core strength powers the crow-hop throw; flexibility and mobility keep the body healthy over a long season. Train like a sprinter focused on building and protecting the strongest, most durable throwing arm in the outfield.",
        ],
        codeExample: {
          label: "Right Fielder Body-Building Priorities",
          code: `  A SPRINTER WITH THE STRONGEST CORNER ARM:

  SPEED + QUICKNESS (range):
  → First-step quickness + ACCELERATION → the JUMP
  → Straight-line speed + change-of-direction agility
  → Strong legs + core → sprint + THROW POWER

  ARM STRENGTH + DURABILITY (the distinctive priority):
  → Long-toss + sound mechanics → the STRONGEST
    outfield arm for the LONGEST throws (3rd + home)
  → Rotator cuff / scapular care → protect the
    shoulder over high-effort throws
  → Core → the CROW-HOP throw

  MOBILITY:
  → Flexibility + mobility → stay healthy over a long
    season of sprinting + throwing

  Build + PROTECT the strongest, most durable arm in
  the outfield.`,
        },
      },
      incident: {
        title: "The Strongest Arm in the Outfield",
        when: "2015 — the Statcast era",
        where: "Chase Field and ballparks across the game",
        impact: "Statcast's measurement of outfield arm strength confirmed that the strongest arms belong in right field — and that building and protecting a powerful, durable throwing arm is the right fielder's distinctive physical priority.",
        body: [
          "When Statcast began measuring outfield arm strength, it confirmed what scouts long knew: the strongest arms belong in right field, where the longest throws to third and home control the running game. The data showed that elite right-field arm strength translated directly into runs prevented — runners held, extra bases denied, and outs made on the bases. Right-field evaluation increasingly centered on arm strength alongside the speed and reads every outfielder needs.",
          "The lesson for young right fielders is that the position rewards a specific physical profile: outfield speed and quickness for range, plus the strongest, most durable throwing arm in the outfield. Training emphasizes sprint and reaction work for the jump and range, and especially long-toss, sound mechanics, and arm care to build and protect the cannon. The right fielder trains like a sprinter focused on the arm — and combined with the reads, routes, and catching that set up the throw, that arm is what controls the running game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "The Position's Demands", sub: "cover the corner + the longest throws", type: "attacker" },
          { label: "Speed + First-Step Quickness", sub: "the jump, range", type: "system" },
          { label: "The Strongest Corner Arm", sub: "long-toss, cuff care, core", type: "victim" },
          { label: "Range + the Cannon", sub: "a sprinter with a strong arm", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Sprint and acceleration training emphasized for outfielders" },
        { year: 2005, event: "Long-toss and arm-care programs standardized in development" },
        { year: 2015, event: "Statcast confirms the strongest arms belong in right field", highlight: true },
        { year: 2018, event: "Right-field evaluation centers on arm strength plus speed" },
        { year: 2022, event: "Integrated speed and arm-care programs tailored to right fielders" },
      ],
      keyTakeaways: [
        "The right fielder combines outfield speed and quickness with the strongest corner arm",
        "Build the jump and range with sprint training, acceleration drills, and reaction work, plus agility",
        "Arm strength is the distinctive priority — build the strongest, most durable arm with long-toss, mechanics, and rotator-cuff care",
        "The legs and core drive both the sprint and the power on the long throw — train like a sprinter focused on the arm",
      ],
      references: [
        { title: "USA Baseball: Athlete Development and Arm Care", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB Statcast: Outfield Arm Strength", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-05-q1",
          type: "Distinctive Priority",
          challenge: `  A coach is choosing a right fielder and notes that
  one physical trait matters more for right field
  than for the other outfield positions.`,
          text: "What is the right fielder's distinctive physical priority?",
          options: [
            "The least arm strength of any outfielder",
            "Elite arm strength — the strongest, most durable throwing arm in the outfield for the longest throws to third and home",
            "Only bunting ability",
            "Only flexibility, with no arm strength",
          ],
          correctIndex: 1,
          explanation: "The right fielder's distinctive physical priority is elite arm strength — the strongest, most durable throwing arm in the outfield — because he makes the longest throws to third and home that control the running game. While he needs the speed and quickness of any outfielder, his arm is his defining weapon. Building and protecting a powerful, durable throwing arm is the top priority that sets the right fielder apart physically.",
        },
        {
          id: "baseball-15-05-q2",
          type: "Building the Arm",
          challenge: `  A right fielder wants to develop the strongest,
  most durable throwing arm in the outfield for his
  long throws to third and home.`,
          text: "How does the right fielder build and protect his cannon?",
          options: [
            "By never throwing in practice",
            "Through long-toss programs, sound throwing mechanics, and rotator-cuff and scapular strengthening to build power and protect the shoulder",
            "By only running sprints",
            "By throwing as hard as possible with no warm-up",
          ],
          correctIndex: 1,
          explanation: "The right fielder builds and protects his cannon through long-toss programs (which develop arm strength safely), sound throwing mechanics, and rotator-cuff and scapular strengthening to protect the shoulder over the long, high-effort throws the position demands. Core strength powers the crow-hop throw. This arm-building and arm-care foundation develops the strongest arm in the outfield while keeping it healthy over a long season.",
        },
        {
          id: "baseball-15-05-q3",
          type: "Legs and Core",
          challenge: `  A right fielder relies only on his arm to throw,
  neglecting his legs and core, and his long throws
  to third lack power and accuracy.`,
          text: "Why are strong legs and a core important for the right fielder's throws?",
          options: [
            "They aren't — only the arm matters for throwing",
            "The legs and core generate much of the power on the long throw, transferring energy through the crow-hop into the arm for a strong, accurate throw",
            "Legs and core only help with hitting",
            "Only the forearm matters",
          ],
          correctIndex: 1,
          explanation: "Strong legs and a powerful core are essential to the right fielder's throws — they generate much of the power on the long throw, transferring energy through the crow-hop and the body into the arm. A right fielder who relies only on his arm, neglecting the legs and core, produces weaker, less accurate long throws. The whole body, driven by the legs and core, makes the cannon's long throws to third and home.",
        },
        {
          id: "baseball-15-05-q4",
          type: "Profile",
          challenge: `  A young player asks how to think about the ideal
  right fielder's physical profile.`,
          text: "How is the ideal right fielder's body best described?",
          options: [
            "A slow slugger with a weak arm",
            "Like a sprinter with the strongest corner arm — fast and explosive for range, with the strongest, most durable throwing arm in the outfield",
            "Only maximum size and weight",
            "Only flexibility, with no speed or arm",
          ],
          correctIndex: 1,
          explanation: "The ideal right fielder's body is like a sprinter with the strongest corner arm — built for first-step quickness, acceleration, and speed to cover the corner, with the endurance to do it all game and, most distinctively, the strongest, most durable throwing arm in the outfield for the longest throws. The position rewards outfield athleticism plus an elite, well-protected arm. Combined with the reads, routes, and catching that set up the throw, this is the foundation of right-field defense.",
        },
      ],
    },
  },

  // ─── baseball-15-06: Playing the Line and the Sun ─────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Coors Field",
      location: "Denver, Colorado",
      era: "Modern",
      emoji: "☀️",
    },
    id: "baseball-15-06",
    order: 6,
    title: "Playing the Line, the Wall, and the Sun",
    subtitle: "The corner, the caroms, and the toughest fly balls",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-06", name: "Corner Guard", emoji: "☀️" },
    challengeType: "quiz",
    info: {
      tagline: "The right-field corner has the line, the wall, and often the sun — playing them well turns doubles into singles and saves the catch.",
      year: 1990,
      overview: [
        "Like the left fielder, the right fielder must play the line, the wall, and the corner — and he deals with the sun more than any outfielder:\n- Cut off balls down the right-field line before they roll into the corner for extra bases.\n- Play the corner caroms cleanly to hold the hitter to as few bases as possible.\n- Judge balls at the wall — caught, over the fence, or caroming back — knowing the wall's angles.\nDoing this well turns would-be doubles into singles and outs.",
        "The sun is a special challenge for the right fielder in many ballparks. In day games, the afternoon sun is often positioned where it interferes with the right fielder's view of fly balls. The right fielder must know where the sun is before each pitch, use sunglasses, and shield the sun with his glove (flipping the glove up to block the glare) to pick up fly balls hit into it. Losing a fly ball in the sun can turn a routine out into an extra-base hit or a dangerous situation, so managing the sun is an essential right-field skill.",
        "Playing the corner well combines all of it:\n- Read the ball and play the line to prevent extra-base hits.\n- Know the wall's caroms to hold runners.\n- Manage the sun to make catches he'd otherwise lose.\n- Position to guard the line in no-doubles situations and against pull hitters (especially lefties).\nReading and playing the line, the wall, and the sun is what separates a complete right fielder from one who only catches routine fly balls in open space.",
      ],
      technical: {
        title: "Playing the Line, the Wall, and Managing the Sun",
        body: [
          "The line and the wall: cut off balls hit down the right-field line before they reach the corner, and play corner caroms cleanly, because a ball past the right fielder down the line becomes an extra-base hit. Know the wall's height, material, and rebound behavior to play caroms and hold runners. Guard the line in no-doubles situations and against pull hitters (especially lefties).",
          "Managing the sun: in day games, the sun often interferes with the right fielder's view. Know where the sun is before each pitch, use sunglasses, and shield the sun with the glove (flip it up to block the glare) to pick up fly balls hit into it. Losing a ball in the sun turns a routine out into an extra-base hit or a danger, so managing the sun is essential. Playing the corner combines reading the ball, the line, the wall, and the sun.",
        ],
        codeExample: {
          label: "Playing the Corner (Right Field)",
          code: `  THE LINE + THE WALL:
  → CUT OFF balls down the right-field line before
    the corner; play corner caroms CLEAN
  → A ball past you down the line = EXTRA BASES
  → KNOW YOUR WALL: height, material, rebound →
    hold doubles to singles
  → GUARD THE LINE in no-doubles + vs pull hitters
    (esp. lefties)

  MANAGING THE SUN (a right-field challenge):
  → Day games → the afternoon sun often blocks the
    right fielder's view
  → Know where the SUN is BEFORE the pitch
  → SUNGLASSES + SHIELD with the glove (flip it up
    to block the glare)
  → Losing a ball in the sun = an extra-base hit or
    a DANGER

  GOAL: doubles into singles + save the catch.`,
        },
      },
      incident: {
        title: "Fighting the Sun in Right Field",
        when: "1990 — the fundamentals era",
        where: "Coors Field and ballparks across the game",
        impact: "Managing the sun is one of the right fielder's distinctive challenges — knowing where the sun is, using sunglasses, and shielding the glare with the glove are essential skills that turn potential lost balls into routine catches.",
        body: [
          "The right fielder, more than any outfielder in many ballparks, has to fight the sun. In day games, the afternoon sun is often positioned to interfere with the right fielder's view of fly balls, and a ball lost in the sun can turn a routine out into an extra-base hit — or hit the fielder. The best right fielders manage the sun deliberately: they know where it is before each pitch, wear sunglasses, and shield the glare with their glove, flipping it up to block the sun while tracking the ball around it.",
          "Managing the sun is part of the broader skill of playing the right-field corner — reading the ball, playing the line and the wall, and dealing with the elements. A right fielder who masters these turns extra-base hits into singles and saves catches he'd otherwise lose. Combined with his cannon arm, command of the corner makes the right fielder a complete defender. For young right fielders, learning to manage the sun and play the line and wall is as important as the throws — it's the difference between a complete right fielder and one who only catches routine flies.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball to the Line, Wall, or Sun", sub: "the corner's challenges", type: "attacker" },
          { label: "Read It, Manage the Element", sub: "line, carom, or shield the sun", type: "system" },
          { label: "Play the Corner Cleanly", sub: "cut off, carom, catch", type: "victim" },
          { label: "Double Held / Catch Saved", sub: "command the corner", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Playing the line and wall refined for corner outfielders" },
        { year: 1972, event: "Complete right-field corner play established as a craft" },
        { year: 1990, event: "Managing the sun and the corner standardized in coaching", highlight: true },
        { year: 2010, event: "Defensive metrics credit corner outfield play and caroms" },
        { year: 2020, event: "Sun and wall management refined in development" },
      ],
      keyTakeaways: [
        "The right fielder must play the line, the wall, and — distinctively — often the sun",
        "Cut off balls down the right-field line and play corner caroms cleanly to hold extra-base hits to fewer bases",
        "Manage the sun: know where it is before each pitch, use sunglasses, and shield the glare with the glove",
        "Guard the line in no-doubles situations and against pull hitters, especially lefties",
      ],
      references: [
        { title: "USA Baseball: Playing the Outfield Corner", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Defense and the Elements", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-06-q1",
          type: "The Sun",
          challenge: `  In a day game, a high fly ball is hit toward the
  right fielder, and the afternoon sun is directly
  in his line of sight to the ball.`,
          text: "How should the right fielder handle a fly ball hit into the sun?",
          options: [
            "Stare directly into the sun and hope",
            "Use sunglasses and shield the sun with his glove (flipping it up to block the glare), having already noted where the sun is before the pitch",
            "Close his eyes and guess",
            "Let the ball drop every time",
          ],
          correctIndex: 1,
          explanation: "The right fielder, who often fights the sun more than any outfielder, must manage it deliberately: knowing before the pitch where the sun is, wearing sunglasses, and shielding the glare with his glove (flipping it up to block the sun) to pick up the fly ball around it. Staring into the sun risks losing the ball entirely — turning a routine out into an extra-base hit or a danger. Managing the sun is an essential, distinctive right-field skill.",
        },
        {
          id: "baseball-15-06-q2",
          type: "The Line",
          challenge: `  A ball is hit down the right-field line. The right
  fielder lets it get past him, and it rolls into
  the corner while the batter races to second and
  third.`,
          text: "Why is cutting off a ball down the line so important?",
          options: [
            "It isn't — balls down the line are always singles",
            "A ball that gets past the outfielder down the line rolls into the corner for an extra-base hit, so cutting it off holds the hitter to fewer bases",
            "Balls down the line are automatically foul",
            "The right fielder should never field balls down the line",
          ],
          correctIndex: 1,
          explanation: "A ball hit down the right-field line that gets past the right fielder rolls into the corner, allowing the batter to take extra bases (a double or triple). So the right fielder must cut off balls down the line and play the corner caroms cleanly to hold the hitter to as few bases as possible. This is why right fielders guard the line in no-doubles situations and against pull hitters — preventing the extra-base hit down the line.",
        },
        {
          id: "baseball-15-06-q3",
          type: "The Wall",
          challenge: `  A ball is smashed off the right-field wall. A right
  fielder who knows the wall fields the carom
  instantly and throws, holding the hitter to a
  single.`,
          text: "How does knowing the wall's caroms help a right fielder?",
          options: [
            "It doesn't — caroms are random",
            "Knowing how balls rebound off the specific wall lets the outfielder position for the carom, field it quickly, and hold a would-be double to a single",
            "It only helps on home runs",
            "Knowing the wall makes the outfielder slower",
          ],
          correctIndex: 1,
          explanation: "Knowing the specific wall's height, material, and rebound behavior lets the right fielder anticipate where a ball will carom, position to field the rebound instantly, and get rid of the ball quickly — holding a would-be double to a single or throwing out a runner who tries to stretch it. Every wall has its own quirks, and learning them turns the wall into a defensive advantage, just as left fielders learn their walls.",
        },
        {
          id: "baseball-15-06-q4",
          type: "Complete Corner",
          challenge: `  A coach says that playing the corner well — the
  line, the wall, and the sun — separates a complete
  right fielder from one who only catches routine
  fly balls.`,
          text: "What is the overall goal of playing the right-field corner well?",
          options: [
            "To hit more home runs",
            "To turn extra-base hits into singles and outs and to save catches — by playing the line and wall and managing the sun",
            "To avoid fielding any balls near the line or wall",
            "To let every ball off the wall go for extra bases",
          ],
          correctIndex: 1,
          explanation: "The goal of playing the right-field corner well is to minimize the bases a hitter gets and to save catches — turning extra-base hits into singles and outs by cutting off balls down the line, playing the wall's caroms, and managing the sun to catch balls he'd otherwise lose. Combined with his cannon arm, command of the corner makes the right fielder a complete defender, separating him from one who only catches routine fly balls in open space.",
        },
      ],
    },
  },

  // ─── baseball-15-07: Backing Up First Base ────────────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Citi Field",
      location: "Queens, New York",
      era: "Modern",
      emoji: "🗺️",
    },
    id: "baseball-15-07",
    order: 7,
    title: "Backing Up First Base and Coverage",
    subtitle: "Where the right fielder goes when the ball isn't his",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-07", name: "Backstop", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "The right fielder's signature backup is first base — on pickoffs and throws across the infield, he's the last line behind the bag.",
      year: 1995,
      overview: [
        "The right fielder has a job on every play, and his signature backup responsibility is backing up first base. On pickoff throws from the pitcher to first, and on throws across the infield to first base (from the shortstop, third baseman, second baseman, or catcher), the right fielder hustles to back up first — positioned behind the bag so that if the throw gets past the first baseman, he can field it and keep the runner from advancing. Positioned in right field, he's perfectly placed to back up first base, which no other outfielder can do as well.",
        "The right fielder also backs up beyond first base:\n- Second base on certain plays — throws to second from the left side, and balls up the middle when the center fielder is occupied.\n- The center fielder on balls in right-center.\n- Bunt plays and pickoffs at first.\nThe principle, as for all outfielders, is that an overthrow or misplayed ball in his area should never go unguarded — he positions behind the play so a misplay doesn't cost extra bases.",
        "Knowing his backup responsibilities and reacting instantly is part of the job on every pitch:\n- Backing up first base on pickoffs and throws across the infield.\n- Backing up second and the center fielder.\n- Backing up bunt plays.\nThese constant, unglamorous responsibilities prevent extra bases on misplays. Combined with his catching, his cannon, and his corner play, they make the right fielder a contributor on every play — he's never standing still.",
      ],
      technical: {
        title: "Backing Up First Base and Coverage Responsibilities",
        body: [
          "Back up first base (the signature responsibility): on pickoff throws from the pitcher to first, and on throws across the infield to first, the right fielder hustles to back up first — positioned behind the bag so an errant throw doesn't let the runner advance. Positioned in right field, he's perfectly placed to do this, and no other outfielder can back up first as well.",
          "Other backups: back up second base on throws from the left side and balls up the middle when the center fielder is occupied, back up the center fielder on balls in right-center, and back up bunt plays and pickoffs at first. Position behind the play so an overthrow or misplay doesn't cost extra bases. Know your backup responsibilities and react instantly on every pitch — the right fielder is never standing still.",
        ],
        codeExample: {
          label: "Right Fielder — Backups and Coverage",
          code: `  SIGNATURE: BACK UP FIRST BASE
  → Pickoff throws (pitcher → 1st)
  → Throws across the infield to 1st (SS/3B/2B/catcher)
  → Positioned in RF = perfectly placed to back up 1st
  → An errant throw never lets the runner advance

  ALSO BACK UP:
  → SECOND base (throws from the left side; balls up
    the middle when the CF is occupied)
  → The CENTER FIELDER on balls in right-center
  → BUNT plays + pickoffs at first

  PRINCIPLE: an overthrow / misplay in your area never
  goes UNGUARDED → position BEHIND the play.

  Know your backups + react instantly EVERY pitch.
  The RF is NEVER standing still.`,
        },
      },
      incident: {
        title: "Backing Up First Base",
        when: "1995 — fundamentals-driven defense",
        where: "Citi Field and ballparks across the game",
        impact: "The right fielder backing up first base on pickoffs and throws across the infield — positioned perfectly in right field — is a constant, essential responsibility that turns errant throws into held runners rather than extra bases.",
        body: [
          "Backing up first base is the right fielder's signature backup responsibility. On a pickoff throw from the pitcher to first, or a throw across the infield to first on a ground ball, the throw occasionally gets past the first baseman — and the right fielder, positioned in right field, is the only player who can keep the ball from rolling away and the runner from advancing. Most of the time the throw is caught and nothing happens, but on the occasional errant throw, the backing-up right fielder saves a base.",
          "The right fielder's position makes him the natural backstop for first base, just as the center fielder backs up second and the left fielder backs up third. Combined with backing up second base, the center fielder, and bunt plays, this backup work makes the right fielder a constant contributor even when the ball isn't his to catch. For young right fielders, learning to back up first base on every pickoff and throw is as important as catching fly balls — it's a hallmark of a sound, hustling defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Throw/Pickoff to First", sub: "errant throw risk", type: "attacker" },
          { label: "Right Fielder Backs Up First", sub: "positioned in RF = perfect", type: "system" },
          { label: "Behind the Bag / the Play", sub: "errant throw guarded", type: "victim" },
          { label: "Base Saved", sub: "never standing still", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Outfield backup responsibilities formalized in coaching" },
        { year: 1980, event: "Right-field backup of first base standardized as essential" },
        { year: 1995, event: "Backing up first base drilled as a hallmark of sound defense", highlight: true },
        { year: 2010, event: "Positioning data refines outfield backup alignment" },
        { year: 2020, event: "Backup systems and communication emphasized in development" },
      ],
      keyTakeaways: [
        "The right fielder's signature backup responsibility is backing up first base on pickoffs and throws across the infield",
        "His position in right field makes him perfectly placed to back up first, which no other outfielder can do as well",
        "He also backs up second base on certain plays, the center fielder on right-center balls, and bunt plays",
        "Know your backup responsibilities and react instantly on every pitch — the right fielder is never standing still",
      ],
      references: [
        { title: "USA Baseball: Outfield Backups", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Positioning and Backups", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-07-q1",
          type: "Back Up First",
          challenge: `  With a runner on first, the pitcher throws over to
  first base on a pickoff attempt, and the throw
  skips past the first baseman.`,
          text: "Where should the right fielder be on a pickoff throw to first base?",
          options: [
            "Standing in right field watching",
            "Backing up first base, positioned behind the bag so an errant throw doesn't let the runner advance",
            "Running to cover home plate",
            "Charging toward the infield to make the tag",
          ],
          correctIndex: 1,
          explanation: "On a pickoff throw to first — or any throw across the infield to first — the right fielder backs up first base, positioned behind the bag in right field so that if the throw gets past the first baseman, he can keep the ball from rolling away and the runner from advancing. His position in right field makes him the perfect backstop for first base. This is the right fielder's signature and most important backup responsibility.",
        },
        {
          id: "baseball-15-07-q2",
          type: "Position",
          challenge: `  A coach explains that the right fielder's normal
  position makes him ideal for one particular backup
  job, just as the center fielder backs up second.`,
          text: "Why is the right fielder perfectly placed to back up first base?",
          options: [
            "He isn't — the center fielder backs up first",
            "His position in right field puts him in line behind first base, ideal for backing up pickoffs and throws across the infield to first",
            "He plays right next to first base",
            "First base never needs backing up",
          ],
          correctIndex: 1,
          explanation: "The right fielder plays in right field, which puts him in line behind first base — making him perfectly placed to back up pickoff throws and throws across the infield to first. No other outfielder is as well positioned to guard first base, just as the center fielder backs up second and the left fielder backs up third. This is why backing up first base is the right fielder's signature backup responsibility.",
        },
        {
          id: "baseball-15-07-q3",
          type: "Other Backups",
          challenge: `  A ball is hit up the middle and the center fielder
  has to range far to field it. The right fielder
  reads the play.`,
          text: "What additional backup responsibilities does the right fielder have?",
          options: [
            "None — he only backs up first base",
            "He backs up second base on certain plays and the center fielder on balls in right-center, in addition to first base",
            "He covers home plate",
            "He never backs up any other base",
          ],
          correctIndex: 1,
          explanation: "Beyond his signature responsibility of backing up first base, the right fielder also backs up second base on certain plays (throws from the left side and balls up the middle when the center fielder is occupied), backs up the center fielder on balls in right-center, and backs up bunt plays. Like every fielder, he should know his backup assignment before each pitch — there's almost always a backup responsibility somewhere when the ball is in play.",
        },
        {
          id: "baseball-15-07-q4",
          type: "Always Working",
          challenge: `  A right fielder stands flat-footed and watches when
  the ball isn't hit directly to him, missing backup
  positions.`,
          text: "What should the right fielder be doing when the ball isn't his to catch?",
          options: [
            "Relaxing until a ball is hit to him",
            "Backing up first base, second base, or the center fielder based on his pre-pitch responsibilities, so he's never standing still",
            "Walking toward the dugout",
            "Standing in the same spot regardless of the play",
          ],
          correctIndex: 1,
          explanation: "The right fielder is never standing still when the ball is in play. When the ball isn't his to catch, he's backing up first base (on pickoffs and throws), second base (on certain plays), or the center fielder (on right-center balls) — based on his pre-pitch responsibilities. Knowing these backup jobs and reacting instantly makes him a constant contributor on every play, even when the ball isn't hit to him.",
        },
      ],
    },
  },

  // ─── baseball-15-08: Cutoffs, Relays, and Where to Throw ──────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-15-08",
    order: 8,
    title: "Cutoffs, Relays, and Where to Throw",
    subtitle: "Aiming the cannon at the right target",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-15-badge-08", name: "Right Target", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "A cannon is only a weapon if it's aimed right — decide where the play is before the catch, and hit the cutoff.",
      year: 1995,
      overview: [
        "For the right fielder, whose arm is his weapon, knowing where to throw — and deciding before fielding — is essential to making the cannon effective. As the ball comes, he must already know the situation and the play:\n- Hold the ball.\n- Throw to second to keep a hitter to a single.\n- Throw to third (his signature long throw) to retire or hold an advancing runner.\n- Throw home on a play at the plate.\nDeciding in advance lets him field with momentum toward the target and unleash the cannon decisively.",
        "The cutoff and relay system organizes the right fielder's throws and matters especially because his throws are the longest. On a throw to third or home, an infielder lines up as the cutoff man between the right fielder and the target; on a deep ball, a middle infielder comes out as the relay man. The right fielder throws to or through the cutoff man, who can relay it, redirect it to catch a trailing runner, or let it through. Because his throws are the longest, hitting the cutoff man accurately keeps the defense's options and prevents trailing runners from advancing.",
        "Throwing to the right base is what makes the cannon a weapon rather than a liability. A strong arm thrown to the wrong base — firing home when the run will score easily, letting the batter take second — wastes the throw and lets trailing runners advance. The disciplined right fielder reads the play, throws to the base where an out or a hold is possible, and hits the cutoff man. Deciding where to throw before fielding the ball, and aiming the cannon at the right target through the cutoff, is what turns the strongest arm in the outfield into genuine run prevention.",
      ],
      technical: {
        title: "Deciding Where to Throw and Aiming the Cannon",
        body: [
          "Decide before fielding: know the situation (outs, runners, score) and where the play is before the ball arrives — hold it, throw to second (keep the hitter to a single), throw to third (retire or hold an advancing runner), or throw home (play at the plate). Deciding in advance lets the right fielder field with momentum toward the target and unleash the cannon decisively.",
          "The cutoff and relay (especially important for the longest throws): throw to or through the cutoff man on throws to third or home, hitting him at the chest so he can relay, redirect to catch a trailing runner, or let it through. On deep balls, a middle infielder is the relay man. Throw to the base where an out or hold is possible — not the wrong base. A strong arm to the wrong base wastes the throw; aiming the cannon at the right target through the cutoff is what makes it a weapon.",
        ],
        codeExample: {
          label: "Aiming the Cannon",
          code: `  BEFORE THE BALL ARRIVES, KNOW THE PLAY:
  ✓ Outs, runners, score
  ✓ Where's the play? →
      HOLD it / throw to 2nd (keep it a single) /
      throw to 3rd (the signature long throw) /
      throw HOME (play at the plate)
  → Decide in ADVANCE → field with momentum toward
    the target → unleash the cannon decisively

  THE CUTOFF / RELAY (esp. important — longest throws):
  → Throw to/through the CUTOFF man → relay /
    redirect (catch a trailing runner) / let it go
  → Deep ball → a middle infielder is the RELAY man

  THROW TO THE RIGHT BASE: a strong arm to the WRONG
  base wastes the throw + lets trailing runners advance.
  Aim the cannon at the right target THROUGH the cutoff.`,
        },
      },
      incident: {
        title: "Aiming the Cannon",
        when: "1995 — fundamentals-driven defense",
        where: "Petco Park and ballparks across the game",
        impact: "The strongest arm is only a weapon when it's aimed correctly — the best right fielders decide where the play is before the catch and throw to the right base through the cutoff man, turning the cannon into genuine run prevention.",
        body: [
          "A right fielder's cannon is only as effective as his decision about where to throw. The best right fielders process the situation — outs, runners, score — before the ball reaches them, so they know exactly where the play is and can field the ball with momentum already carrying toward the target. This pre-decision lets them unleash the cannon decisively rather than catching the ball and then hesitating while runners advance. Knowing the play before the catch is what separates a smart right fielder from one who merely has a strong arm.",
          "The cutoff and relay system, and the discipline to throw to the right base, complete the picture — and matter even more for the right fielder because his throws are the longest. Throwing to or through the cutoff man at the right target keeps runners from advancing and preserves the option to catch a trailing runner. A strong arm thrown to the wrong base wastes the throw. For young right fielders, learning to decide where to throw before fielding the ball, and to aim the cannon at the right target through the cutoff, turns the strongest arm in the outfield into genuine run prevention.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Know the Situation", sub: "outs, runners, score", type: "system" },
          { label: "Decide the Play Before the Catch", sub: "hold, 2nd, 3rd, or home", type: "attacker" },
          { label: "Field with Momentum to the Target", sub: "unleash the cannon", type: "victim" },
          { label: "Throw Through the Cutoff", sub: "right base, options kept", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff-and-relay systems formalized in professional coaching" },
        { year: 1972, event: "Aiming the cannon at the right target established as a right-field discipline" },
        { year: 1995, event: "Deciding-before-the-catch and cutoff discipline drilled as core defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart cutoff and relay alignments" },
        { year: 2015, event: "Statcast measures outfield arm and throw decisions" },
      ],
      keyTakeaways: [
        "Decide where to throw before fielding the ball — know the outs, runners, score, and where the play is",
        "Deciding in advance lets the right fielder field with momentum toward the target and unleash the cannon decisively",
        "Throw to or through the cutoff man — especially important for the right fielder's long throws — to keep the defense's options",
        "Throw to the right base — a strong arm to the wrong base wastes the throw and lets trailing runners advance",
      ],
      references: [
        { title: "USA Baseball: Cutoffs, Relays, and Throw Decisions", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Cutoff and Relay Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-08-q1",
          type: "Decide Early",
          challenge: `  A single is hit to right field with a runner on
  first. A right fielder catches the ball and only
  then starts thinking about where to throw, losing
  precious time even though his arm is strong.`,
          text: "When should the right fielder decide where he's going to throw?",
          options: [
            "After he catches the ball and looks around",
            "Before the ball arrives — knowing the situation and where the play is, so he fields with momentum toward the target and unleashes the cannon decisively",
            "Only after a teammate yells at him",
            "It doesn't matter when he decides",
          ],
          correctIndex: 1,
          explanation: "Even with a cannon arm, the right fielder must decide where to throw before the ball arrives, based on the situation (outs, runners, score) and where the play is. Deciding in advance lets him field the ball with momentum already carrying toward the target and unleash the cannon decisively, instead of catching it and then hesitating while runners advance. Knowing the play before the catch is what makes the strong arm effective.",
        },
        {
          id: "baseball-15-08-q2",
          type: "Wrong Base",
          challenge: `  A single to right, the runner from second is going
  to score easily. The right fielder fires his
  cannon home anyway, and the batter takes second
  on the throw.`,
          text: "What was the mistake in throwing home on this play?",
          options: [
            "Nothing — a strong arm should always throw home",
            "The run was going to score easily, so the throw home was wasted and let the batter advance to second — the right fielder should have thrown to the right base to keep the batter at first",
            "He should have thrown to the pitcher",
            "He should have held the ball forever",
          ],
          correctIndex: 1,
          explanation: "Even a cannon thrown to the wrong base is a liability. With the run scoring easily, firing home wastes the throw and lets the batter advance to second. The disciplined right fielder reads the play: if the lead run can't be retired, he throws to the base where he can make a play or hold a runner — here, keeping the batter at first by hitting the cutoff. A strong arm is only a weapon when aimed at the right target.",
        },
        {
          id: "baseball-15-08-q3",
          type: "Cutoff Options",
          challenge: `  On a long throw to third, a right fielder throws a
  strong, low throw to the cutoff man. The infield,
  seeing the runner will be safe at third, directs
  the cutoff to redirect the throw.`,
          text: "Why is hitting the cutoff man especially important on the right fielder's long throws?",
          options: [
            "It isn't — he should always throw directly to the base",
            "Because his throws are the longest, hitting the cutoff keeps the defense's options to relay or redirect to catch a trailing runner, while an overthrow lets runners advance",
            "The cutoff man has no role on long throws",
            "Hitting the cutoff slows the play for no reason",
          ],
          correctIndex: 1,
          explanation: "Because the right fielder's throws are the longest, hitting the cutoff man accurately is especially important. A low, accurate throw to or through the cutoff man lets the defense relay it, redirect it to catch a trailing runner, or let it through. Here, with the runner safe at third, the infield directs the cutoff to redirect the throw to catch a trailing runner. Overthrowing the cutoff on a long throw removes those options and lets runners advance.",
        },
        {
          id: "baseball-15-08-q4",
          type: "Relay",
          challenge: `  A ball splits the gap and rolls to the wall in deep
  right-center. A middle infielder sprints into the
  outfield as the right fielder retrieves the ball.`,
          text: "What should the right fielder do with the ball on a deep gap hit?",
          options: [
            "Run the ball all the way back to the infield himself",
            "Hit the relay man (the middle infielder who came out) with a strong, accurate throw so he can quickly relay it to a base",
            "Throw it as far as he can toward home",
            "Hold the ball and concede the triple",
          ],
          correctIndex: 1,
          explanation: "On a deep ball to the gap or wall, a middle infielder sprints out to become the relay man. The right fielder retrieves the ball and throws a strong, accurate throw to the relay man, who turns and relays it to the appropriate base to hold or retire the runner. This relay system turns one long throw into two quicker, more accurate ones — especially important from deep right field. The right fielder's job is to get the ball to the relay man cleanly and fast.",
        },
      ],
    },
  },

  // ─── baseball-15-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-15-09",
    order: 9,
    title: "Right Field Situational IQ",
    subtitle: "Depth, the sun and wind, and knowing the game",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-15-badge-09", name: "Heads-Up", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "A heads-up right fielder knows the count, the runners, the sun, and the wind — and has already decided where the cannon will fire.",
      year: 2000,
      overview: [
        "A complete right fielder plays the game mentally before each pitch. He processes the score, inning, outs, runners and their speed, count, and the hitter's tendencies, then sets:\n- His depth — normal, shallow, or deep no-doubles.\n- His lateral position — shaded to the line or the gap.\n- A pre-decision on what he'll do if the ball comes to him and where he'll throw, so the cannon fires decisively.\nThis pre-pitch thinking lets him react instantly and correctly when the ball is hit.",
        "The elements are part of the right fielder's situational awareness — the sun especially:\n- Sun — know where it is and use sunglasses or the glove to shield fly balls (often a bigger factor in right field than elsewhere).\n- Wind — account for its effect on fly balls.\n- The field — know its quirks (the line, the corner, the wall, the warning track).\nChecking the sun and wind before each at-bat, and sensing the warning track by feel, are part of playing right field well and safely.",
        "Communication and awareness complete the picture. The right fielder communicates with the center fielder on positioning and shared balls, defers on balls in right-center, knows the outs and the situation, and stays aware of the runners. Knowing the situation and translating it into depth, positioning, and a pre-made plan — while accounting for the sun, wind, and field — is what makes a heads-up right fielder. Like every position, the outfield is mental as much as physical, and the thinking must be done before the pitch.",
      ],
      technical: {
        title: "Pre-Pitch Thinking and the Elements",
        body: [
          "Decide before the pitch: process the situation (score, outs, runners and speed, count, hitter) and set depth and position (normal, shallow, deep no-doubles, shaded to line or gap). Pre-decide where the play is and where you'll throw if the ball is hit to you, so the cannon fires decisively.",
          "The elements and awareness: account for the sun (often a bigger factor in right field) by knowing where it is and shielding it with sunglasses or the glove; account for the wind; know the field's quirks (line, corner, wall, warning track by feel for safety). Check the sun and wind before each at-bat. Communicate with the center fielder on positioning and shared balls, defer on right-center balls, and stay aware of the outs and runners. The thinking and element-checks are done before the pitch.",
        ],
        codeExample: {
          label: "Right Field Situational Checklist",
          code: `  EVERY PITCH, KNOW:
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ DEPTH + position: normal / shallow / DEEP
    (no-doubles) / shade to line or gap (hitter)
  ✓ If it's hit to me → where's the play + where do
    I throw? (pre-decide → fire the cannon decisively)

  THE ELEMENTS (check before each at-bat):
  → SUN (often a bigger factor in RF): know it,
    sunglasses / glove shield
  → WIND: knocks balls down or carries them
  → FIELD: line, corner, wall, WARNING TRACK by feel

  COMMUNICATE with the CF; defer on right-center;
  track the outs + runners.

  Think + check the elements BEFORE the pitch.`,
        },
      },
      incident: {
        title: "The Heads-Up Right Fielder",
        when: "2000s — the analytics-and-IQ era",
        where: "Wrigley Field and ballparks across the game",
        impact: "The best right fielders are recognized for their situational awareness — pre-deciding their positioning and throws, and accounting for the sun, wind, and field — which turns the cannon and their tools into consistent run prevention.",
        body: [
          "Right-field defense is mental as much as physical. The best right fielders process the situation before every pitch — the score, outs, runners, and hitter — and set their depth and positioning and pre-decide where they'll throw, so they react instantly and correctly and fire the cannon decisively. They also account for the elements, especially the sun, which is often a bigger factor in right field than elsewhere. This awareness turns their tools — including the cannon — into consistent, reliable defense.",
          "Wrigley Field, with its swirling winds and day games, is a famous reminder of how much the elements matter to an outfielder. A right fielder who checks the sun and wind, knows the line and corner, and has thought through the situation plays the game a step ahead. For young right fielders, the lesson is to think the game every pitch — set the depth, pre-decide the throw, check the elements, and communicate — so that when the ball is hit, the reaction is pure, prepared execution and the cannon fires at the right target.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "outs, runners, count, hitter", type: "system" },
          { label: "Set Depth + Pre-Decide the Throw", sub: "position and aim the cannon", type: "attacker" },
          { label: "Account for Sun, Wind, Field", sub: "the elements + warning track", type: "victim" },
          { label: "React Instantly + Safely", sub: "a step ahead of the play", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Situational outfield depth and no-doubles positioning standardized" },
        { year: 2000, event: "Pre-pitch thinking and element awareness emphasized in coaching", highlight: true },
        { year: 2010, event: "Positioning data integrated with outfield judgment" },
        { year: 2015, event: "Statcast informs outfield positioning and depth" },
        { year: 2023, event: "Outfield positioning judgment refined with data and instincts" },
      ],
      keyTakeaways: [
        "Process the situation before each pitch and set depth and position: normal, shallow, deep no-doubles, or shaded for the hitter",
        "Pre-decide where the play is and where you'll throw, so the cannon fires decisively when the ball is hit",
        "Account for the elements — especially the sun (often a bigger factor in right field) — plus the wind and the field",
        "Communicate with the center fielder, defer on right-center balls, and stay aware of the outs and runners",
      ],
      references: [
        { title: "USA Baseball: Outfield IQ and the Elements", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Strategy", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-09-q1",
          type: "No-Doubles",
          challenge: `  Bottom of the ninth, defense leading by one run.
  An extra-base hit over the right fielder's head
  would put the tying run in scoring position.`,
          text: "How should the right fielder position himself in this no-doubles situation?",
          options: [
            "Play shallow to catch bloopers",
            "Play deep (no-doubles depth) to prevent extra-base hits over his head, conceding a single in front of him",
            "Play directly on the foul line only",
            "Move to center field",
          ],
          correctIndex: 1,
          explanation: "Late in a close game when an extra-base hit would be especially damaging, the right fielder plays deep (a 'no-doubles' alignment) to prevent balls from getting over his head for doubles or triples. This concedes a single dropping in front of him — far less costly than an extra-base hit that puts the tying run in scoring position. Positioning is a situational decision based on the score, inning, and the cost of an extra-base hit.",
        },
        {
          id: "baseball-15-09-q2",
          type: "The Sun",
          challenge: `  In a day game, the right fielder notes that the
  afternoon sun is positioned right where he'll have
  to look to track fly balls.`,
          text: "Why is accounting for the sun especially important for the right fielder?",
          options: [
            "The sun has no effect on play",
            "The sun is often a bigger factor in right field, so the right fielder must know where it is and shield it with sunglasses and his glove to track fly balls and avoid losing them",
            "Only infielders deal with the sun",
            "The sun only matters at night",
          ],
          correctIndex: 1,
          explanation: "The sun is often a bigger factor in right field than elsewhere, especially in day games where the afternoon sun interferes with the right fielder's view of fly balls. The right fielder must know where the sun is before each pitch, use sunglasses, and shield the glare with his glove to track fly balls and avoid losing them — which would turn a routine out into an extra-base hit or a danger. Managing the sun is an essential part of right-field situational awareness.",
        },
        {
          id: "baseball-15-09-q3",
          type: "The Wind",
          challenge: `  At a windy ballpark, a fly ball that looks like a
  routine catch is pushed several feet by a strong
  gust as it descends.`,
          text: "Why must an outfielder account for the wind?",
          options: [
            "Wind has no effect on a baseball",
            "Wind can knock fly balls down or carry them, pushing the ball off its expected path, so the outfielder must adjust his read and route for it",
            "Wind only affects ground balls",
            "Outfielders should ignore the wind",
          ],
          correctIndex: 1,
          explanation: "Wind significantly affects fly balls — knocking them down, carrying them farther, or pushing them sideways. An outfielder must check the wind before each at-bat and account for its effect when reading and routing to a fly ball, adjusting where he expects the ball to come down. Ballparks like Wrigley Field, with swirling winds, make this especially important. Judging the wind is part of an outfielder's situational awareness.",
        },
        {
          id: "baseball-15-09-q4",
          type: "Pre-Decide",
          challenge: `  A right fielder consistently catches the ball
  cleanly but then hesitates, unsure where to fire,
  and runners advance during the delay despite his
  strong arm.`,
          text: "What's the fix for a right fielder who hesitates after catching the ball?",
          options: [
            "Catch the ball faster",
            "Know the situation and pre-decide where the play is and where he'll throw before the ball is hit, so he fires the cannon instantly",
            "Always throw home no matter what",
            "Never throw the ball",
          ],
          correctIndex: 1,
          explanation: "Hesitation after catching wastes even a great arm. The fix is pre-pitch thinking: the right fielder processes the situation — outs, runners, score — and decides where the play is and where he'll throw before the ball is hit. With the decision pre-made, he fields and fires the cannon decisively, without the delay that lets runners advance. Thinking the game every pitch turns the strongest arm in the outfield into effective, reliable run prevention.",
        },
      ],
    },
  },

  // ─── baseball-15-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-15",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-15-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best right fielders teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-15-badge-10", name: "Right Field Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master right field and you become the cannon — great reads, the corner, and an arm that controls the running game.",
      year: 2001,
      overview: [
        "The greatest right fielders share a set of pursuable traits:\n- A great jump and efficient routes built on reading the ball off the bat (including the slice on lefty pull hitters).\n- Sure hands and sound catching technique.\n- The ability to play the line, the wall, and the sun, turning doubles into singles and saving catches.\n- Most distinctively — the strongest, most accurate arm in the outfield, the cannon that controls the running game.\nMookie Betts embodies all of it — but the qualities, not the highlights, are what to build.",
        "Mastering right field is about reads, the corner, and the cannon. The position's value comes from running down balls in the gap and down the line, playing the corner and the sun to hold hitters to fewer bases and save catches, and — above all — controlling the running game with a strong, accurate arm thrown to the right base. A right fielder who does these consistently prevents runs and deters runners from taking extra bases. That command of the corner and the cannon is the heart of right-field defense.",
        "The mastery mindset treats right field as a craft of reading the ball, playing the corner, and aiming the cannon. That means endless fly-ball and read repetition, route running, corner and sun practice, long-toss and cutoff work to build and aim the arm, and studying situations until the pre-pitch thinking is automatic. The complete right fielder is a great reader and router, sure-handed, corner-savvy, and armed with the strongest cannon in the outfield, aimed with discipline. Build those qualities, and you become the player who runs down everything and controls the running game.",
      ],
      technical: {
        title: "The Complete Right Fielder — A Self-Assessment",
        body: [
          "Skills to master: reading the ball off the bat (including the slice) and the jump, efficient routes and the drop step, catching technique (catch to throw, over-the-shoulder, line drives), playing the line, the wall, and the sun, the cannon (the long throw to third and home, the crow-hop, hitting the cutoff), deciding where to throw, backing up first base, and situational positioning. Each is built through deliberate repetition.",
          "Mindset to build: reads-and-routes focus, corner command, cannon discipline, and situational awareness. Develop the jump and routes, master the corner and the sun, build and aim the strongest arm in the outfield through the cutoff to the right base, and think the game every pitch. Treat right field as a craft. The complete right fielder runs down everything and controls the running game with his cannon.",
        ],
        codeExample: {
          label: "The Complete Right Fielder — Checklist",
          code: `  READS / RANGE:
  ✓ Read the ball (incl. the SLICE on lefty pull) →
    a great JUMP; efficient routes; drop step

  CATCHING:
  ✓ Catch to THROW (two hands above the shoulder);
    over-the-shoulder; read line drives

  THE CORNER:
  ✓ Play the LINE, the WALL, + the SUN → doubles into
    singles + save catches

  THE CANNON (the distinctive weapon):
  ✓ The long throw to THIRD + home; crow-hop, flat,
    four-seam; HIT THE CUTOFF; throw to the RIGHT base

  TEAM / MIND:
  ✓ Back up FIRST base; position by situation;
    pre-decide throws; account for sun/wind/field

  Build these → you are the CANNON of the outfield.`,
        },
      },
      incident: {
        title: "Mookie Betts and the Right-Field Cannon",
        when: "2014–present — Mookie Betts, the modern right-field cannon",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Mookie Betts combines elite range, instincts, and one of the game's most respected arms — proving that mastering right field, and especially the cannon, can make a player a perennial Gold Glover and the anchor of a championship team's outfield.",
        body: [
          "The great right fielders share a defining weapon: a strong, accurate arm — the cannon that controls the running game. Mookie Betts, with multiple Gold Gloves and a feared arm, makes runners afraid to take the extra base on him. He combines that elite arm with great range, reads, and command of the corner to be a complete right fielder, anchoring a championship team's outfield.",
          "Their careers are the argument that mastering right field — the reads, the routes, the corner, the catching, and above all the cannon — can make a player a great defender and a legend. For any young right fielder, the lesson is to pursue the complete craft: develop the jump and routes, master the corner and the sun, build and aim the strongest arm in the outfield through the cutoff to the right base, and think the game every pitch. Become the cannon who runs down everything and controls the running game, and you become the player a team's outfield is anchored by.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master the Skills", sub: "reads, corner, the cannon", type: "system" },
          { label: "Build the Mindset", sub: "corner command, cannon discipline, IQ", type: "attacker" },
          { label: "Run Down Everything, Control Runners", sub: "doubles into singles, deter the extra base", type: "victim" },
          { label: "Become the Cannon", sub: "anchor the outfield", type: "result" },
        ],
      },
      timeline: [
        { year: 1955, event: "The right-field arm and corner play established as defensive weapons" },
        { year: 1972, event: "Gold Glove right-field defense established as a benchmark for the position" },
        { year: 2016, event: "Mookie Betts wins his first Gold Glove, redefining modern right-field defense", highlight: true },
        { year: 2020, event: "Betts brings his Gold Glove arm to the Dodgers and wins the World Series" },
        { year: 2015, event: "Statcast quantifies the arm strength that defines great right fielders" },
      ],
      keyTakeaways: [
        "The best right fielders combine a great jump and routes, sure hands, corner and sun play, and the strongest arm in the outfield",
        "Right field rewards reads, command of the corner, and the cannon — controlling the running game with accurate throws to the right base",
        "The mastery mindset treats the position as a craft: repetition of reads, routes, corner play, and building and aiming the arm",
        "Become the cannon who runs down everything and controls the running game — the anchor of a team's outfield",
      ],
      references: [
        { title: "MLB: Mookie Betts", url: "https://www.mlb.com/player/mookie-betts-605141" },
        { title: "USA Baseball: Complete Outfield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Outfield Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-15-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete right
  fielder and asks which qualities to develop.`,
          text: "Which combination of traits defines the best right fielders?",
          options: [
            "Only home-run power",
            "A great jump and routes, sure hands, corner and sun play, and the strongest, most accurate arm in the outfield — the cannon",
            "Only running speed",
            "Only a weak arm and good hitting",
          ],
          correctIndex: 1,
          explanation: "The best right fielders combine a great jump and efficient routes (from reading the ball, including the slice on lefty pull hitters), sure hands and sound catching technique, the ability to play the line, wall, and sun, and — most distinctively — a strong, accurate arm, the cannon that controls the running game. Mookie Betts embodies all of it. It's a complete craft of reads, the corner, and the arm.",
        },
        {
          id: "baseball-15-10-q2",
          type: "The Cannon",
          challenge: `  A right fielder's arm becomes so feared that
  opposing runners stop trying to take the extra
  base on him entirely.`,
          text: "Why is the cannon so valuable to a right fielder's defense?",
          options: [
            "It isn't — the arm doesn't matter",
            "A strong, accurate arm controls the running game by making throws to the right base and deterring runners from taking extra bases — its threat alone prevents runs",
            "It only helps the right fielder's personal stats",
            "The arm has no effect on the game",
          ],
          correctIndex: 1,
          explanation: "The cannon is the right fielder's defining weapon. A strong, accurate arm controls the running game by throwing out runners trying to take the extra base and, just as importantly, deterring them from even attempting it — its threat alone prevents runs. Mookie Betts's arm is feared enough that runners hesitate to test it. Mastering and aiming the cannon at the right base through the cutoff is what makes the right fielder a defensive weapon.",
        },
        {
          id: "baseball-15-10-q3",
          type: "Mindset",
          challenge: `  A talented right fielder relies on his arm strength
  and rarely practices reads, routes, corner play,
  or aiming his throws, assuming his cannon is
  enough.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — a strong arm is all a right fielder needs",
            "Right field is a craft of reads, routes, corner play, and aiming the cannon with discipline that demands deliberate repetition — arm strength alone isn't enough",
            "Only hitting practice matters",
            "Practicing defense makes outfielders worse",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats right field as a craft mastered through deliberate repetition — reading the ball, running routes, playing the corner and sun, catching to throw, and aiming the cannon through the cutoff to the right base. A strong arm is the distinctive weapon, but without the reads, routes, corner play, and the discipline to throw to the right base, it's wasted. Great right fielders like Mookie Betts earn their command of the corner and the cannon through relentless practice.",
        },
        {
          id: "baseball-15-10-q4",
          type: "Legacy",
          challenge: `  Mookie Betts anchors a great outfield with elite
  range, Gold Glove instincts, and one of the game's
  most respected throwing arms.`,
          text: "What does Mookie Betts's career teach young players?",
          options: [
            "That right field is unimportant to winning",
            "That mastering the complete craft of right field — reads, routes, the corner, catching, and the cannon — can make a player a great defender, a perennial Gold Glover, and the anchor of a championship outfield",
            "That defense can't be developed",
            "That only power hitters succeed in right field",
          ],
          correctIndex: 1,
          explanation: "Mookie Betts's career proves that mastering the complete craft of right field — reads, routes, command of the corner, catching, and above all the cannon — can make a player a great defender, a perennial Gold Glover, and the anchor of a championship team's outfield. His range and feared arm control the running game and save runs. The lesson for young players is to pursue that whole craft and become the cannon who runs down everything and controls the running game.",
        },
      ],
    },
  },
];
