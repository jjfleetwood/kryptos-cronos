import type { StageConfig, EpochConfig } from "./types";

export const baseball13Epoch: EpochConfig = {
  id: "baseball-13",
  name: "Left Field",
  subtitle: "Reading the Ball off the Bat",
  description:
    "Left field is where most balls are hit — the corner that demands reading the slice off right-handed pull hitters, playing the line and the wall, and throwing to third with accuracy. This complete position course builds the left fielder from the ground up: reading the ball off the bat, the first step and routes, catching fly balls and line drives, playing caroms off the wall, the crow-hop throw, hitting cutoffs, backing up bases, and the situational reads of the corner. From Little League to Zack Wheat — the Brooklyn Dodgers' graceful Hall of Fame left fielder and franchise hits leader — you will learn to track down every ball, play the wall, and keep runners from taking the extra base.",
  emoji: "🧤",
  color: "green",
  unlocked: true,
};

export const baseball13Stages: StageConfig[] = [
  // ─── baseball-13-01: The Position ─────────────────────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Ebbets Field",
      location: "Brooklyn, New York",
      era: "Modern",
      emoji: "🟢",
    },
    id: "baseball-13-01",
    order: 1,
    title: "Left Field — Where the Ball Lives",
    subtitle: "The busiest outfield corner and its unique demands",
    category: "sports",
    xp: 85,
    badge: { id: "baseball-13-badge-01", name: "Left Field Rookie", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "Most hitters are right-handed and pull the ball — so left field sees more action than any other outfield corner.",
      year: 1961,
      overview: [
        "Left field is one of the three outfield positions, and it tends to see the most action of the two corner spots. Because the majority of hitters are right-handed and tend to pull the ball, more balls are hit to left field than to right. The left fielder's core jobs:\n- Catching fly balls and line drives.\n- Fielding ground balls that get through the infield.\n- Playing balls off the wall and down the line.\n- Throwing to the bases (especially third base) and hitting the cutoff man.\n- Backing up plays.\nLike all outfielders, the left fielder must read the ball off the bat and run efficient routes.",
        "Left field has a few distinctive demands. The left fielder must read the slice on balls hit by right-handed pull hitters — these balls curve (hook) toward the left-field line as they travel, so the route must account for the curve. The left fielder also plays the left-field line (a ball down the line that gets past is an extra-base hit) and, in some ballparks, plays caroms off an outfield wall. The throw to third base is shorter than the right fielder's throw, so left field can be played with a slightly less powerful arm than right field, though accuracy and the ability to hit the cutoff still matter.",
        "The center fielder is the captain of the outfield and has priority on any ball the two can both reach, so the left fielder must communicate and defer on balls in the left-center gap. The left fielder backs up third base on throws and the center fielder on balls to left-center. Zack Wheat turned left field into an art for the Brooklyn Dodgers — a smooth, sure defender who read the ball off the bat, ran graceful routes, and played his park's caroms and corners as well as anyone of his era. This epoch builds the complete left fielder:\n- reads\n- routes\n- catches\n- the wall\n- the throw\n- the situational intelligence the corner demands",
      ],
      technical: {
        title: "Why Left Field Sees the Most Action",
        body: [
          "Right-handed pull hitters: most batters are right-handed and tend to pull the ball to the left side, so more balls — both in the air and on the ground through the left side — reach left field than right field. The left fielder must also read the slice on these pulled balls, which hook toward the left-field line.",
          "The shorter throw and the captain: the throw from left field to third base is shorter than the right fielder's throw to third, so left field can be played with a slightly less powerful (but still accurate) arm. The center fielder is the outfield captain with priority on shared balls, so the left fielder communicates and defers on balls in the left-center gap while backing up the center fielder and third base.",
        ],
        codeExample: {
          label: "Left Field — Core Responsibilities",
          code: `  THE LEFT FIELDER'S JOBS:
  ✓ CATCH fly balls + line drives (read off the bat)
  ✓ FIELD grounders through the left side
  ✓ Play the LINE + caroms off the WALL
  ✓ THROW to the bases (esp. THIRD) + hit the cutoff
  ✓ BACK UP third base + the center fielder
  ✓ COMMUNICATE + defer to the CF on shared balls

  DISTINCTIVE DEMANDS:
  → MOST action of the corners (RH pull hitters)
  → Read the SLICE/HOOK on pulled balls (curve to
    the left-field line)
  → Shorter throw to 3rd → a slightly less powerful
    arm is OK (accuracy still matters)
  → CF is the captain → LF defers on the left-center
    gap

  Left field: where the ball lives.`,
        },
      },
      incident: {
        title: "Zack Wheat and the Art of Left Field",
        when: "1909–1926 — Brooklyn Dodgers",
        where: "Ebbets Field, Brooklyn, New York",
        impact: "Zack Wheat played left field for the Brooklyn Dodgers for 18 seasons, became the franchise's all-time hits leader, and was renowned as one of the most graceful and sure-handed left fielders of his era — turning would-be extra-base hits into singles and outs through his reads, routes, and smooth defense.",
        body: [
          "Zack Wheat spent nearly his entire career in left field for the Brooklyn Dodgers and was celebrated for the grace and reliability of his defense. He read balls off the bat early, glided to the right spot on efficient routes, and played the caroms and angles of Ebbets Field — judging instantly whether a ball would be caught, clear the fence, or rebound off the wall, and positioning to hold hitters to as few bases as possible. He set a standard for smooth, sure corner-outfield play.",
          "Wheat's play shows that left field, far from a place to hide a bat, is a position of real skill — reading balls off the bat, running routes, playing the line and the wall, and throwing accurately. His command of Ebbets Field's quirks turned a tricky park into a defensive advantage, and his longevity and grace made him a Hall of Famer. For young left fielders, Wheat is a model: study the position's demands, especially the reads and the wall, and turn the busiest outfield corner into a defensive strength.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Right-Handed Pull Hitter", sub: "most batters, most balls to left", type: "attacker" },
          { label: "Read the Ball (and the Slice)", sub: "hook toward the line", type: "system" },
          { label: "Catch, Field, or Play the Wall", sub: "routes, line, caroms", type: "victim" },
          { label: "Throw to Third / Hit the Cutoff", sub: "hold the runner", type: "result" },
        ],
      },
      timeline: [
        { year: 1909, event: "Zack Wheat debuts for Brooklyn and begins an 18-year left-field career" },
        { year: 1913, event: "Ebbets Field opens in Brooklyn with its own tricky outfield walls and angles" },
        { year: 1925, event: "Wheat, the Dodgers' all-time hits leader, sets the standard for graceful left-field play", highlight: true },
        { year: 1977, event: "Rawlings Gold Glove recognition cements corner-outfield defense's value" },
        { year: 2015, event: "Statcast quantifies outfield reads, routes, and arm strength" },
      ],
      keyTakeaways: [
        "Left field sees the most action of the corner spots because most hitters are right-handed and pull the ball",
        "The left fielder must read the slice on pulled balls, which hook toward the left-field line",
        "The throw to third is shorter than the right fielder's, so left field can use a slightly less powerful (but accurate) arm",
        "The center fielder is the outfield captain with priority on shared balls — the left fielder communicates and defers",
      ],
      references: [
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Outfield Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Zack Wheat", url: "https://baseballhall.org/hall-of-famers/wheat-zack" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-01-q1",
          type: "Role",
          challenge: `  A coach explains that of the two corner outfield
  spots, one tends to see more batted balls than
  the other.`,
          text: "Why does left field tend to see more action than right field?",
          options: [
            "Left fielders are faster",
            "Most hitters are right-handed and tend to pull the ball to the left side, so more balls are hit to left field",
            "The rules send more balls to left field",
            "Left field is smaller",
          ],
          correctIndex: 1,
          explanation: "The majority of hitters are right-handed and tend to pull the ball, sending more batted balls — both fly balls and grounders through the left side — to left field than to right. That's why left field tends to see the most action of the two corner outfield spots. The left fielder must also read the slice on these pulled balls, which curve toward the left-field line as they travel.",
        },
        {
          id: "baseball-13-01-q2",
          type: "The Slice",
          challenge: `  A right-handed batter pulls a fly ball toward left
  field. As it travels, the ball curves (hooks)
  toward the left-field line.`,
          text: "What must the left fielder account for when reading a pulled fly ball?",
          options: [
            "Nothing — pulled balls travel in a straight line",
            "The slice/hook — pulled balls curve toward the left-field line, so the route must account for the curve",
            "That the ball will curve toward center field",
            "That the ball will stop in midair",
          ],
          correctIndex: 1,
          explanation: "A fly ball pulled by a right-handed hitter slices (hooks) toward the left-field line as it travels. The left fielder must read this curve and run a route that accounts for it, rather than taking a straight line to where the ball started. Misreading the slice is a common mistake that turns a catchable ball into a hit. Reading the hook on pulled balls is a distinctive left-field skill.",
        },
        {
          id: "baseball-13-01-q3",
          type: "The Arm",
          challenge: `  A coach is deciding which corner outfield spot
  suits a player with a good but not elite throwing
  arm, and excellent reads and routes.`,
          text: "Why can left field be played with a slightly less powerful arm than right field?",
          options: [
            "Left fielders never throw",
            "The throw from left field to third base is shorter than the right fielder's throw to third, so a slightly less powerful (but still accurate) arm is acceptable",
            "Left field requires no accuracy",
            "Right fielders don't need strong arms",
          ],
          correctIndex: 1,
          explanation: "The throw from left field to third base is shorter than the right fielder's throw to third (right field is the farthest outfield spot from third), so left field can be played with a slightly less powerful arm — though accuracy and the ability to hit the cutoff man still matter. This is why the strongest outfield arm is usually placed in right field, while a player with great reads and routes but a moderate arm can excel in left.",
        },
        {
          id: "baseball-13-01-q4",
          type: "The Captain",
          challenge: `  A fly ball is hit into the gap between the left
  fielder and the center fielder. Both converge on it.`,
          text: "Who has priority on a ball both the left fielder and center fielder can reach?",
          options: [
            "The left fielder always has priority",
            "The center fielder — he is the captain of the outfield and has priority on any ball both can reach, so the left fielder defers",
            "Whoever calls for it first, regardless of position",
            "Neither — they should both pull up",
          ],
          correctIndex: 1,
          explanation: "The center fielder is the captain of the outfield and has priority on any ball that both he and a corner outfielder can reach. So on a ball in the left-center gap, the left fielder communicates, listens for the center fielder's call, and defers if the center fielder takes it. This priority system prevents collisions and dropped balls. The left fielder also backs up the center fielder and third base on various plays.",
        },
      ],
    },
  },

  // ─── baseball-13-02: Reading the Ball off the Bat ─────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "👁️",
    },
    id: "baseball-13-02",
    order: 2,
    title: "Reading the Ball off the Bat",
    subtitle: "The first step, routes, and the jump",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-02", name: "Great Jump", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "The best outfield skill is invisible — reading the ball instantly and taking the right first step, before anyone notices.",
      year: 1990,
      overview: [
        "The single most important outfield skill is reading the ball off the bat and getting a good first step — the 'jump.' The read begins before contact, anticipating where the ball will go from:\n- The pitch being thrown.\n- The count.\n- The hitter's tendencies.\n- The swing itself.\nThen, at contact, the sound and initial flight reveal the trajectory. An outfielder who reads instantly covers more ground than one who's faster but reacts late.",
        "The first step and route turn the read into range:\n- On a ball over their head — use a drop step (pivot and turn to run back, never backpedal) and take an efficient angle to the landing spot.\n- On a ball in front — charge under control.\nThe goal is the most efficient route, often a slightly curved 'banana' route that arrives with momentum already moving toward the throw, rather than leaving the fielder backpedaling or lunging.",
        "Judging fly balls and line drives is built through repetition and anticipation. A high fly ball gives time but requires tracking; a line drive is the hardest read because it's hard to judge whether it's sinking or carrying. The left fielder must also read the slice on balls from right-handed pull hitters, which hook toward the line. Outfielders never backpedal on balls over their head — they turn and run, then look back for the ball. Getting a great jump is the foundation of outfield defense, and it's a skill, not just a gift of speed.",
      ],
      technical: {
        title: "The Read, the First Step, and the Route",
        body: [
          "Read before and at contact. Anticipate using the pitch, the count, hitter tendencies, and the swing, then read the ball's trajectory off the bat from the sound and initial flight. A great jump comes from anticipation plus an instant, accurate read — that's why a slower outfielder with great reads can out-range a faster one who reacts late.",
          "First step and route: on a ball over your head, drop-step (pivot and turn to run, never backpedal) and take an efficient angle; on a ball in front, charge under control. Run the most efficient route — often a curved 'banana' route — so you arrive at the spot with momentum toward your throw. Read the slice on pulled balls (they hook toward the line). On balls over the head, turn and run to the spot, then look back for the ball — never backpedal.",
        ],
        codeExample: {
          label: "Reading the Ball and Getting a Jump",
          code: `  READ (before + at contact):
  → ANTICIPATE: pitch, count, hitter, the swing
  → At contact: SOUND + initial flight → trajectory
  → A great JUMP = anticipation + instant read
    (beats raw speed with a late reaction)

  FIRST STEP + ROUTE:
  → Over your head → DROP STEP (pivot + turn to
    run; NEVER backpedal), efficient angle
  → In front → CHARGE under control
  → Run an efficient "BANANA" route → arrive with
    momentum toward your THROW
  → Read the SLICE on pulled balls (hook to the line)
  → Over the head → turn + run to the spot, THEN
    look back for the ball

  Getting a great jump is a SKILL, not just speed.`,
        },
      },
      incident: {
        title: "The Jump That Beats Speed",
        when: "1990 — the route-efficiency era",
        where: "Dodger Stadium and ballparks across the game",
        impact: "Outfield analysis confirmed what scouts long believed: a great jump and efficient route can make a slower outfielder cover more ground than a faster one who reads the ball late or runs a poor route — proving that reads and routes, not just speed, create outfield range.",
        body: [
          "When defensive metrics began measuring outfield reads and routes, they confirmed a long-held truth: the jump — the read and first step — and route efficiency matter as much as raw speed. An outfielder who reads the ball instantly, breaks in the right direction, and runs an efficient route gets to balls a faster but late-reacting outfielder never reaches. The best outfielders separated themselves through anticipation and reads, not just their times in the forty.",
          "The lesson is that outfield range is a skill built on reading the ball off the bat and running good routes. Anticipation (studying the pitch, count, and hitter), an instant accurate read at contact, a proper first step (drop step on balls overhead, never backpedaling), and an efficient route combine to create range. Young outfielders develop these through endless fly-ball and read repetition. A great jump is the foundation of outfield defense, and it can be developed regardless of natural speed.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Anticipate + Read at Contact", sub: "pitch, hitter, sound, flight", type: "system" },
          { label: "Proper First Step", sub: "drop step, never backpedal", type: "attacker" },
          { label: "Efficient Route", sub: "banana route to the spot", type: "victim" },
          { label: "Range, the Ball Run Down", sub: "jump beats raw speed", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Drop-step technique standardized for outfielders" },
        { year: 1990, event: "Route efficiency and the jump emphasized as outfield fundamentals", highlight: true },
        { year: 2010, event: "Defensive metrics begin measuring outfield reads and routes" },
        { year: 2015, event: "Statcast quantifies jump, route efficiency, and outfield range" },
        { year: 2020, event: "Read-and-route training refined with technology" },
      ],
      keyTakeaways: [
        "Reading the ball off the bat and getting a good first step (the jump) is the most important outfield skill",
        "Anticipate using the pitch, count, and hitter, then read trajectory from the sound and initial flight at contact",
        "On balls over your head, drop-step and turn to run — never backpedal — then look back for the ball",
        "Run an efficient 'banana' route to arrive with momentum toward your throw; a great jump beats raw speed",
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
          id: "baseball-13-02-q1",
          type: "The Jump",
          challenge: `  Two left fielders run the same sprint speed. One
  consistently catches more balls because he reads
  the ball instantly and breaks in the right
  direction at contact.`,
          text: "Why can a great jump make one outfielder cover more ground than an equally fast one?",
          options: [
            "It can't — only speed determines range",
            "Reading the ball instantly and taking a good first step gets the outfielder moving in the right direction sooner, covering more ground than a late reaction or poor route",
            "The faster outfielder always covers more ground",
            "Jumps only matter on ground balls",
          ],
          correctIndex: 1,
          explanation: "A great jump — an instant, accurate read and a good first step — gets an outfielder moving in the right direction immediately, so he covers more ground than an equally fast (or even faster) outfielder who reads the ball late or runs a poor route. Reads and routes, not just speed, create outfield range. That's why anticipation and reading the ball off the bat are the most important outfield skills, and they can be developed.",
        },
        {
          id: "baseball-13-02-q2",
          type: "Drop Step",
          challenge: `  A ball is hit over a left fielder's head. He
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
          explanation: "Outfielders never backpedal on a ball over their head — it's slow and unstable. Instead, the outfielder uses a drop step: pivoting and turning to run back toward the ball's projected landing spot at full speed, then looking back over his shoulder to find the ball. Backpedaling is slow and leads to stumbles and misjudged balls; turning and running covers far more ground and is the fundamental technique for balls hit overhead.",
        },
        {
          id: "baseball-13-02-q3",
          type: "Routes",
          challenge: `  A coach tells a left fielder to run a slightly
  curved 'banana' route to a ball in the gap rather
  than a straight line.`,
          text: "Why run a curved 'banana' route to the ball?",
          options: [
            "It's a longer, slower path for no reason",
            "It lets the outfielder arrive at the catch point with momentum already moving toward where he'll throw, instead of catching the ball moving away from the play",
            "Straight routes are always better",
            "It confuses the baserunners",
          ],
          correctIndex: 1,
          explanation: "A curved 'banana' route lets the outfielder arrive at the catch point with his momentum already carrying toward where he needs to throw, so he can catch and throw in one motion. A straight-line route might get him there a hair sooner but leave him moving in the wrong direction to throw. Efficient routes balance getting to the ball with setting up the throw — a key part of turning a read into both a catch and a play.",
        },
        {
          id: "baseball-13-02-q4",
          type: "Anticipation",
          challenge: `  Before the pitch, a left fielder notes the count,
  the pitch being thrown, and the hitter's tendency
  to pull fastballs, and leans toward the line.`,
          text: "How does anticipating before the pitch help an outfielder's jump?",
          options: [
            "It doesn't — outfielders should only react after contact",
            "Anticipating where the ball is likely to go (from the pitch, count, and hitter) lets the outfielder read and break faster at contact, improving his jump",
            "It makes the outfielder slower",
            "Anticipation only matters for infielders",
          ],
          correctIndex: 1,
          explanation: "A great jump comes from anticipation plus an instant read. By studying the pitch, count, and hitter's tendencies before the pitch — and leaning or positioning accordingly — the outfielder primes himself to read the ball and break faster at contact. This anticipation is why some outfielders seem to know where the ball is going before it's hit. Combined with an accurate read off the bat, it produces the great jump that creates range.",
        },
      ],
    },
  },

  // ─── baseball-13-03: Catching Fly Balls and Line Drives ───────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-13-03",
    order: 3,
    title: "Catching Fly Balls and Line Drives",
    subtitle: "Technique, two hands, and the over-the-shoulder catch",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-03", name: "Sure Hands", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "Get to the spot, get under control, and catch it with two hands above the throwing shoulder — ready to throw.",
      year: 1985,
      overview: [
        "Catching fly balls is the outfielder's most fundamental skill. The technique:\n- Get to the landing spot quickly with a good route.\n- Get under control as the ball comes down.\n- Catch with two hands at or above the throwing-shoulder side of the head — so the catch flows directly into a throw.\nCatching above the throwing shoulder (rather than basket-style at the belt) lets the outfielder transfer and throw immediately — which matters when runners are tagging — and two hands secure the catch and speed the transfer.",
        "Different balls require different catches:\n- Routine fly — two hands above the throwing shoulder, moving toward the target if possible.\n- Line drive (the hardest read) — judge whether it's sinking (charge, maybe catch low or on a short hop) or carrying (drift back), and commit.\n- Over-the-shoulder catch — on balls well over your head, drop-step, sprint to the spot, and catch over the shoulder on the run, like a football receiver.\nEach catch is built through repetition.",
        "Footwork sets up the throw. Whenever there's a chance a runner will advance, the outfielder positions to catch the ball with momentum moving toward the target and uses a crow-hop (a small shuffle-hop) after the catch to generate a strong throw. On a routine catch with no one on base, the priority is simply a secure two-handed catch. Getting under control before the catch — not drifting or lunging — and catching above the throwing shoulder with two hands is the foundation that lets the outfielder both secure the out and make the throw.",
      ],
      technical: {
        title: "Catching Technique and the Over-the-Shoulder Catch",
        body: [
          "Routine fly balls: get to the spot with a good route, get under control, and catch with two hands at or above the throwing-shoulder side of the head, moving toward the target if a runner may advance. Catching above the throwing shoulder (not basket-style at the belt) lets the catch flow straight into a throw, and two hands secure it and speed the transfer.",
          "Line drives and over-the-shoulder catches: on a line drive, read whether it's sinking (charge, catch low or short-hop it) or carrying (drift back) and commit. On balls well over the head, after a drop step and full sprint, make the over-the-shoulder catch on the run. Use a crow-hop after the catch to generate a strong throw when a runner may advance. Get under control before the catch — don't drift or lunge.",
        ],
        codeExample: {
          label: "Catching Fly Balls and Line Drives",
          code: `  ROUTINE FLY BALL:
  ✓ Good route → get to the spot, GET UNDER CONTROL
  ✓ TWO HANDS, at/above the THROWING-SHOULDER side
    of the head (NOT basket-style at the belt)
  ✓ Move TOWARD the target if a runner may advance
  → catch flows straight into the THROW

  LINE DRIVE (hardest read):
  → Sinking? → CHARGE, catch low / short-hop it
  → Carrying? → DRIFT BACK
  → Read it and COMMIT

  OVER THE HEAD:
  → Drop step + full SPRINT → OVER-THE-SHOULDER
    catch on the run (like a receiver)

  THROW SETUP:
  → CROW-HOP after the catch for a strong throw
    when a runner may advance`,
        },
      },
      incident: {
        title: "The Fundamentals That Never Change",
        when: "1985 — the fundamentals era",
        where: "Oracle Park and ballparks across the game",
        impact: "Coaching tradition holds that catching fly balls with two hands above the throwing shoulder, getting under control, and setting up the throw are timeless fundamentals — the difference between an outfielder who simply catches the ball and one who catches it and makes a play.",
        body: [
          "The fundamentals of catching fly balls have remained constant across generations because they work: get to the spot under control, catch with two hands above the throwing shoulder, and position to throw. An outfielder who catches the ball this way can secure the out and immediately make a strong, accurate throw to hold or retire a runner. One who catches basket-style at the belt or drifts under the ball loses the time and balance needed to throw, allowing runners to advance.",
          "These fundamentals separate an outfielder who merely catches the ball from one who catches it and makes a play. The two-handed catch above the throwing shoulder, the over-the-shoulder catch on balls overhead, the read on line drives, and the crow-hop into the throw are all built through repetition. For young left fielders, mastering the catch — and especially catching in a way that sets up the throw — is the foundation on which the rest of outfield defense is built.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read and Route to the Spot", sub: "get there under control", type: "system" },
          { label: "Two Hands, Above the Shoulder", sub: "catch flows into the throw", type: "attacker" },
          { label: "Right Catch for the Ball", sub: "fly, line drive, over the head", type: "victim" },
          { label: "Out Secured, Ready to Throw", sub: "crow-hop when a runner may go", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Two-handed catch above the throwing shoulder taught as the standard" },
        { year: 1954, event: "Willie Mays's over-the-shoulder catch showcases the technique on the biggest stage" },
        { year: 1985, event: "Catch-and-throw fundamentals standardized in outfield coaching", highlight: true },
        { year: 2010, event: "Defensive metrics credit outfield catches and route efficiency" },
        { year: 2020, event: "Catching and throwing technique refined with technology" },
      ],
      keyTakeaways: [
        "Catch routine fly balls with two hands at or above the throwing-shoulder side of the head, ready to throw",
        "Catching above the throwing shoulder (not basket-style) lets the catch flow straight into a throw",
        "Read line drives as sinking (charge) or carrying (drift back) and commit; use the over-the-shoulder catch on balls overhead",
        "Get under control before the catch and crow-hop into a strong throw when a runner may advance",
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
          id: "baseball-13-03-q1",
          type: "Technique",
          challenge: `  A left fielder catches routine fly balls basket-
  style at his belt with one hand. With a runner
  tagging from third, he's slow to transfer and
  throw, and the run scores.`,
          text: "How should the outfielder catch a fly ball when a runner may advance?",
          options: [
            "Basket-style at the belt with one hand",
            "With two hands at or above the throwing-shoulder side of the head, so the catch flows straight into a throw",
            "Behind his back",
            "With his bare hand only",
          ],
          correctIndex: 1,
          explanation: "When a runner may advance, the outfielder should catch the ball with two hands at or above the throwing-shoulder side of the head — a position that lets the catch flow immediately into a transfer and throw. Catching basket-style at the belt or with one hand is slower to throw from, allowing runners to advance or score. Two hands also secure the catch. Catching in a way that sets up the throw is a key outfield fundamental.",
        },
        {
          id: "baseball-13-03-q2",
          type: "Over the Shoulder",
          challenge: `  A ball is crushed well over the left fielder's head.
  He drop-steps, sprints to the projected landing
  spot, and the ball is still carrying as he arrives.`,
          text: "What catch should the outfielder make on a ball hit well over his head?",
          options: [
            "Stop, turn around, and catch it facing the infield",
            "An over-the-shoulder catch on the run, tracking the ball over his shoulder like a football receiver",
            "A basket catch at his belt",
            "Let it drop and play the carom",
          ],
          correctIndex: 1,
          explanation: "On a ball hit well over his head, the outfielder drop-steps, sprints to the projected landing spot, and makes an over-the-shoulder catch on the run — tracking the ball over his shoulder like a receiver catching a deep pass. Trying to stop and turn to face the ball wastes time and ground. The over-the-shoulder catch lets the outfielder run full speed to the spot and still make the catch, covering maximum ground on deep balls.",
        },
        {
          id: "baseball-13-03-q3",
          type: "Line Drives",
          challenge: `  A line drive is hit right at the left fielder. He
  can't immediately tell whether it's sinking in
  front of him or carrying over his head.`,
          text: "Why are line drives the hardest balls to read, and what must the outfielder do?",
          options: [
            "They're the easiest read",
            "It's hard to judge whether a line drive is sinking or carrying, so the outfielder must read it quickly and commit — charging a sinker or drifting back on a carrier",
            "He should always charge every line drive",
            "He should always drift back on every line drive",
          ],
          correctIndex: 1,
          explanation: "Line drives are the hardest balls to read because it's difficult to immediately judge whether they're sinking (and will drop in front) or carrying (and will sail overhead). The outfielder must read the ball's trajectory quickly and commit — charging hard to catch or short-hop a sinking liner, or drifting back on a carrying one. Hesitation is fatal on a line drive; reading it and committing is essential.",
        },
        {
          id: "baseball-13-03-q4",
          type: "Crow-Hop",
          challenge: `  A left fielder catches a fly ball with a runner
  tagging at third, then throws flat-footed from a
  standstill, and the throw is weak and late.`,
          text: "What footwork generates a strong throw after a catch when a runner is advancing?",
          options: [
            "Throwing flat-footed from a standstill",
            "A crow-hop — a small shuffle-hop after the catch that builds momentum into a strong throw",
            "Throwing while falling backward",
            "Spinning in a full circle before throwing",
          ],
          correctIndex: 1,
          explanation: "After catching a ball with a runner advancing, the outfielder uses a crow-hop — a small shuffle-hop that transfers his weight and builds momentum behind the throw — to generate a strong, accurate throw to the target. Throwing flat-footed from a standstill produces a weak, late throw. Combined with catching the ball moving toward the target above the throwing shoulder, the crow-hop turns the catch into a strong throw to hold or retire the runner.",
        },
      ],
    },
  },

  // ─── baseball-13-04: Playing the Wall and the Line ────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Ebbets Field",
      location: "Brooklyn, New York",
      era: "Modern",
      emoji: "🟢",
    },
    id: "baseball-13-04",
    order: 4,
    title: "Playing the Wall and the Line",
    subtitle: "Caroms, the corner, and holding the double to a single",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-04", name: "Wall Master", emoji: "🟢" },
    challengeType: "quiz",
    info: {
      tagline: "A left fielder who plays the wall and the line well turns doubles into singles — and that's a skill all its own.",
      year: 1967,
      overview: [
        "Playing the outfield wall and the left-field line is a distinctive left-field skill, mastered by graceful corner outfielders like the Brooklyn Dodgers' Zack Wheat. When a ball is hit toward the wall, the outfielder must judge instantly whether it will be caught, clear the wall for a home run, or hit the wall and carom back — and then play the carom cleanly to hold the hitter to as few bases as possible. A left fielder who knows the angles and caroms of his wall can turn a would-be double into a single by quickly fielding the rebound and throwing.",
        "Reading a ball to the wall takes a sequence and study:\n- Track the ball while locating the wall (glance back to find it, then return eyes to the ball).\n- Decide whether to leap for a catch at the wall, set up to play the carom, or back up.\n- Know the specific wall — its height, material, and rebound (a high wall produces long caroms; a padded wall deadens the ball).\nSafety matters too: locate the wall to avoid crashing into it at full speed. The best outfielders study their home wall's quirks until the caroms are predictable.",
        "Playing the line is equally important — a ball down the left-field line that gets past rolls into the corner for extra bases:\n- Cut off balls down the line before they reach the corner.\n- Play the corner caroms cleanly.\n- Get the ball back to the infield quickly to hold the runner.\nPositioning matters: in no-doubles situations or against pull hitters, guard the line. Turning extra-base hits into singles and outs is what separates a complete left fielder from one who only catches fly balls in open space.",
      ],
      technical: {
        title: "Reading the Wall, Playing Caroms, and the Line",
        body: [
          "At the wall, track the ball while locating the wall — glance to find it, then return your eyes to the ball — and decide whether to leap for a catch, set up for the carom, or back up. Know your wall's height, material, and rebound behavior; a high wall produces long caroms, a padded wall deadens the ball. Play the carom cleanly and get rid of the ball fast to hold the hitter. Locate the wall to avoid crashing into it.",
          "Playing the line: cut off balls hit down the left-field line before they reach the corner, and play corner caroms cleanly, because a ball past the outfielder down the line becomes an extra-base hit. Guard the line in no-doubles situations and against pull hitters. The goal of both wall and line play is to turn would-be doubles and triples into singles by fielding the rebound quickly and getting the ball back to the infield.",
        ],
        codeExample: {
          label: "Playing the Wall and the Line",
          code: `  BALL HIT TO THE WALL:
  1. TRACK the ball + LOCATE the wall (glance, then
     eyes back to the ball)
  2. DECIDE: leap to catch at the wall? play the
     CAROM? back up?
  3. KNOW YOUR WALL: height, material, rebound
     → high wall = LONG caroms; padded = deadens
  4. Play the carom CLEAN, get rid of it FAST
  5. LOCATE the wall → don't crash at full speed

  PLAYING THE LINE:
  → CUT OFF balls down the line before the corner
  → Play corner caroms cleanly
  → A ball past you down the line = EXTRA BASES
  → GUARD THE LINE in no-doubles + vs pull hitters

  GOAL: turn doubles/triples into SINGLES + outs.`,
        },
      },
      incident: {
        title: "Zack Wheat and the Caroms of Ebbets Field",
        when: "1909–1926 — Brooklyn Dodgers",
        where: "Ebbets Field, Brooklyn, New York",
        impact: "Zack Wheat mastered the tricky outfield walls and angles of Ebbets Field, turning a quirky park into a defensive advantage — holding hitters to singles on balls off the wall and getting the ball back to the infield quickly to keep runners from taking the extra base.",
        body: [
          "Zack Wheat's command of Ebbets Field's caroms was part of his reputation as one of the era's smoothest left fielders. He learned the park's walls and angles — how balls rebounded off the boards and corners — until he could position himself to field rebounds instantly. Hitters who drove balls off the wall expecting easy doubles often found Wheat fielding the carom and firing in, holding them to a single.",
          "Wheat turned a tricky park into a defensive advantage through study and practice. His command of the walls shows that playing the wall and the line is a genuine skill — reading the ball, knowing the caroms, and getting rid of the ball quickly to hold runners. Every ballpark has its own wall and corner quirks, and the best left fielders learn their home park's angles cold. For young left fielders, Wheat's command of his park is the model for turning the wall and the line into strengths.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Hit to the Wall or Line", sub: "potential extra-base hit", type: "attacker" },
          { label: "Read It, Locate the Wall", sub: "catch, carom, or back up?", type: "system" },
          { label: "Play the Carom Cleanly", sub: "know your wall's angles", type: "victim" },
          { label: "Double Held to a Single", sub: "quick rebound, fast throw", type: "result" },
        ],
      },
      timeline: [
        { year: 1913, event: "Ebbets Field opens in Brooklyn with its own tricky outfield walls and angles" },
        { year: 1918, event: "Zack Wheat's command of Ebbets Field's caroms makes him an elite left fielder", highlight: true },
        { year: 1925, event: "Wheat becomes the Dodgers' all-time hits leader, the franchise's left-field standard" },
        { year: 2003, event: "Modern parks each present their own wall and corner challenges to left fielders" },
        { year: 2015, event: "Statcast measures outfield wall play and arm value" },
      ],
      keyTakeaways: [
        "Playing the wall and the line is a distinctive left-field skill that turns doubles into singles and outs",
        "Track the ball while locating the wall, then decide to catch, play the carom, or back up — and avoid crashing",
        "Know your wall's height, material, and rebound behavior; a high wall produces long caroms",
        "Cut off balls down the line before the corner and guard the line in no-doubles situations and against pull hitters",
      ],
      references: [
        { title: "USA Baseball: Playing the Outfield Wall", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Zack Wheat", url: "https://baseballhall.org/hall-of-famers/wheat-zack" },
        { title: "MLB: Outfield Defense and the Wall", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-04-q1",
          type: "Caroms",
          challenge: `  A ball is smashed off the high left-field wall. A
  left fielder who knows the wall fields the carom
  instantly and throws, holding the hitter to a
  single.`,
          text: "How does knowing the wall's caroms help a left fielder?",
          options: [
            "It doesn't — caroms are random",
            "Knowing how balls rebound off the specific wall lets the outfielder position for the carom, field it quickly, and hold a would-be double to a single",
            "It only helps on home runs",
            "Knowing the wall makes the outfielder slower",
          ],
          correctIndex: 1,
          explanation: "Knowing the specific wall's height, material, and rebound behavior lets the left fielder anticipate where a ball will carom, position himself to field the rebound instantly, and get rid of the ball quickly — holding a would-be double to a single or throwing out a runner who tries to stretch it. Skilled left fielders like Zack Wheat mastered their park's caroms this way. Every wall has its own quirks, and learning them turns the wall into a defensive advantage.",
        },
        {
          id: "baseball-13-04-q2",
          type: "Locating the Wall",
          challenge: `  Chasing a deep fly ball toward the wall at full
  speed, a left fielder keeps his eyes locked on
  the ball and runs hard.`,
          text: "What should the outfielder do as he approaches the wall on a deep ball?",
          options: [
            "Keep his eyes only on the ball and never look at the wall",
            "Locate the wall (glance to find it, then return eyes to the ball) so he can decide to catch, play the carom, or back up — and avoid crashing into it",
            "Close his eyes near the wall",
            "Stop running well short of the wall",
          ],
          correctIndex: 1,
          explanation: "As he approaches the wall, the outfielder should locate it — glancing to find the wall, then returning his eyes to the ball — so he can decide whether to leap for a catch, set up to play the carom, or back up, and so he doesn't crash into the wall at full speed. Running blindly into the wall risks injury and a misplayed ball. Locating the wall while tracking the ball is a key safety and technique skill.",
        },
        {
          id: "baseball-13-04-q3",
          type: "The Line",
          challenge: `  A ball is hit down the left-field line. The left
  fielder lets it get past him, and it rolls into
  the corner while the batter races to second and
  then third.`,
          text: "Why is cutting off a ball down the line so important?",
          options: [
            "It isn't — balls down the line are always singles",
            "A ball that gets past the outfielder down the line rolls into the corner for an extra-base hit, so cutting it off holds the hitter to fewer bases",
            "Balls down the line are automatically foul",
            "The left fielder should never field balls down the line",
          ],
          correctIndex: 1,
          explanation: "A ball hit down the left-field line that gets past the outfielder rolls into the corner, allowing the batter to take extra bases (a double or triple). So the left fielder must cut off balls down the line and play the corner caroms cleanly to hold the hitter to as few bases as possible. This is why left fielders guard the line in no-doubles situations and against pull hitters — preventing the extra-base hit down the line.",
        },
        {
          id: "baseball-13-04-q4",
          type: "Skill",
          challenge: `  A coach says that playing the wall and the line
  well is a skill that separates a complete left
  fielder from one who only catches fly balls in
  open space.`,
          text: "What is the overall goal of playing the wall and the line well?",
          options: [
            "To hit more home runs",
            "To turn would-be doubles and triples into singles and outs by fielding caroms quickly and cutting off balls down the line",
            "To avoid fielding any balls near the wall",
            "To let every ball off the wall go for extra bases",
          ],
          correctIndex: 1,
          explanation: "The goal of playing the wall and the line well is to minimize the bases a hitter gets — turning would-be doubles and triples into singles and outs by fielding caroms quickly, getting the ball back to the infield, and cutting off balls down the line before the corner. This skill, mastered by graceful left fielders like Zack Wheat, separates a complete left fielder from one who only catches routine fly balls in open space. It directly prevents runs.",
        },
      ],
    },
  },

  // ─── baseball-13-05: Building the Outfielder's Body ───────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Coors Field",
      location: "Denver, Colorado",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-13-05",
    order: 5,
    title: "Building the Outfielder's Body",
    subtitle: "Speed, first-step quickness, and endurance",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-05", name: "Track Star", emoji: "🏃" },
    challengeType: "quiz",
    info: {
      tagline: "Outfield is a running position — speed, an explosive first step, and the endurance to chase everything for nine innings.",
      year: 2015,
      overview: [
        "Outfield is fundamentally a running position, and the left fielder's body is built around speed and covering ground. The key physical priorities:\n- First-step quickness and acceleration — for a great jump and reaching balls in the gaps and down the line.\n- Straight-line and change-of-direction speed — to run down fly balls over a large area.\n- Endurance — to chase balls and stay sharp through a long game and season.\n- A strong, accurate throwing arm.\nThe corner spots can use a bit less raw speed than center field, but range still depends on quickness and reads.",
        "Speed and acceleration are the foundation:\n- First-step quickness and acceleration — built through sprint training, acceleration drills, and reaction work — translate directly to the jump and range.\n- Straight-line speed lets the outfielder run down deep balls; change-of-direction agility helps on slicing balls and in the gaps.\n- Strong legs and a powerful core drive the sprint and the throws.\nThe lower body and explosiveness are what let him cover the large area the position demands.",
        "Arm strength and durability round out the outfielder's body. A strong, accurate throwing arm — built through long-toss, sound mechanics, and rotator-cuff and scapular strengthening — lets the outfielder throw to the bases and hit cutoffs; the corner outfielder, especially in right field, needs a strong arm for the long throw to third. Core strength powers the crow-hop throws; flexibility and mobility keep the body healthy over a long season of sprinting and throwing. The outfielder trains like a sprinter with a strong arm — fast, explosive, durable, and able to throw.",
      ],
      technical: {
        title: "Training Priorities for Outfielders",
        body: [
          "Speed and quickness: prioritize first-step quickness and acceleration (sprint training, acceleration and reaction drills) for the jump and range, plus straight-line speed for deep balls and change-of-direction agility for slicing balls and the gaps. Strong legs and a powerful core drive the sprint and the throws.",
          "Arm strength and durability: build the throwing arm through long-toss, sound mechanics, and rotator-cuff and scapular strengthening for throws to the bases and cutoffs (a corner outfielder needs a strong arm for the long throw). Core strength powers the crow-hop throw; flexibility and mobility keep the body healthy over a long season of sprinting and throwing. Train like a fast, explosive, durable athlete with a strong arm.",
        ],
        codeExample: {
          label: "Outfielder Body-Building Priorities",
          code: `  OUTFIELD = a RUNNING position:

  SPEED + QUICKNESS (range):
  → First-step quickness + ACCELERATION → the JUMP
    (sprint training, acceleration + reaction drills)
  → Straight-line SPEED → deep balls
  → Change-of-direction AGILITY → slices + gaps
  → Strong legs + core → sprint + throws

  ARM STRENGTH + DURABILITY:
  → Long-toss + sound mechanics → throws to bases +
    cutoffs (corner OF needs a strong arm for the
    long throw)
  → Rotator cuff / scapular care
  → Core → the CROW-HOP throw

  MOBILITY:
  → Flexibility + mobility → stay healthy over a
    long season of sprinting + throwing

  Train like a SPRINTER with a strong arm.`,
        },
      },
      incident: {
        title: "The Athletic Modern Outfielder",
        when: "2015 — the Statcast era",
        where: "Coors Field and ballparks across the game",
        impact: "Statcast's measurement of sprint speed, jump, and arm strength confirmed that outfield defense is built on explosive acceleration, top-end speed, and a strong arm — reshaping how outfielders are evaluated and trained.",
        body: [
          "When Statcast began measuring sprint speed, jump (reaction and acceleration), and arm strength, it confirmed that outfield defense is fundamentally about athleticism — getting a great jump, accelerating to top speed, covering ground, and throwing strongly. The data showed that the best outfielders combined an explosive first step, high top-end speed, and a strong arm, and that these traits translated directly into runs saved. Outfield evaluation and training became increasingly focused on these measurable athletic qualities.",
          "The lesson for young outfielders is that the position rewards a specific athletic profile: explosive acceleration and a great jump, top-end and change-of-direction speed, endurance, and a strong, accurate arm. Training emphasizes sprint work, acceleration and reaction drills, long-toss and arm care, and the core and mobility to stay healthy. The outfielder trains like a sprinter with a strong arm — and combined with the reads and routes that turn speed into range, that athletic foundation is what lets an outfielder cover his territory.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Outfield's Demands", sub: "cover ground, throw", type: "attacker" },
          { label: "Speed + First-Step Quickness", sub: "the jump, acceleration", type: "system" },
          { label: "Arm Strength + Durability", sub: "long-toss, cuff care, core", type: "victim" },
          { label: "Cover the Territory, Make the Throw", sub: "a sprinter with an arm", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Sprint and acceleration training emphasized for outfielders" },
        { year: 2005, event: "Long-toss and arm-care programs standardized in development" },
        { year: 2015, event: "Statcast measures sprint speed, jump, and arm strength", highlight: true },
        { year: 2018, event: "Outfield evaluation centers on jump, speed, and arm" },
        { year: 2022, event: "Integrated speed and arm-care programs tailored to outfielders" },
      ],
      keyTakeaways: [
        "Outfield is a running position — first-step quickness, acceleration, and speed are the foundation of range",
        "Build the jump and range with sprint training, acceleration drills, and reaction work, plus change-of-direction agility",
        "A strong, accurate arm — built with long-toss and arm care — is needed for throws to the bases and cutoffs",
        "Train like a sprinter with a strong arm: fast, explosive, durable, and able to throw, with the mobility to stay healthy",
      ],
      references: [
        { title: "USA Baseball: Athlete Development and Arm Care", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB Statcast: Sprint Speed and Outfield Jump", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-05-q1",
          type: "Foundation",
          challenge: `  A coach describes the outfield as fundamentally a
  "running position" when explaining what to train.`,
          text: "Which physical qualities form the foundation of outfield range?",
          options: [
            "Maximum upper-body size only",
            "First-step quickness, acceleration, and speed — the ability to get a great jump and cover ground",
            "Grip strength only",
            "Bunting and base-stealing",
          ],
          correctIndex: 1,
          explanation: "Outfield is fundamentally a running position, so its range is built on first-step quickness, acceleration, and speed — the ability to get a great jump and run down balls over a large area. These are developed through sprint training, acceleration and reaction drills, and change-of-direction work. Combined with reads and routes (which turn speed into range) and a strong arm, this athletic foundation is what lets an outfielder cover his territory.",
        },
        {
          id: "baseball-13-05-q2",
          type: "The Jump",
          challenge: `  A left fielder wants to improve his jump and reach
  more balls in the gaps.`,
          text: "Which training most directly improves an outfielder's jump and range?",
          options: [
            "Long-distance jogging only",
            "First-step quickness and acceleration training — sprint work, acceleration drills, and reaction work",
            "Heavy bench pressing only",
            "Stretching alone",
          ],
          correctIndex: 1,
          explanation: "The jump and range are improved by first-step quickness and acceleration training — sprint work, acceleration drills, and reaction work that develop the explosive first step and the ability to reach top speed quickly. These translate directly to getting a great jump and covering ground in the gaps and down the line. Long-distance jogging and pure strength work don't build the explosive acceleration the position demands.",
        },
        {
          id: "baseball-13-05-q3",
          type: "Arm",
          challenge: `  An outfielder needs to make strong, accurate throws
  to the bases and hit cutoff men, and a corner
  outfielder may need to throw all the way to third.`,
          text: "How does an outfielder build and protect a strong throwing arm?",
          options: [
            "By never throwing in practice",
            "Through long-toss, sound throwing mechanics, and rotator-cuff and scapular strengthening to build and protect the arm",
            "By only lifting heavy weights",
            "By throwing as hard as possible with no warm-up",
          ],
          correctIndex: 1,
          explanation: "A strong, accurate outfield arm is built through long-toss (which develops arm strength safely), sound throwing mechanics, and rotator-cuff and scapular strengthening to protect the shoulder. Core strength powers the crow-hop throw. A corner outfielder especially needs a strong arm for the long throw to third base. This arm-building and arm-care foundation lets the outfielder make the throws the position requires while staying healthy.",
        },
        {
          id: "baseball-13-05-q4",
          type: "Profile",
          challenge: `  A young player asks how to think about the ideal
  outfielder's physical profile.`,
          text: "How is the ideal outfielder's body best described?",
          options: [
            "A slow, powerful slugger's build",
            "Like a sprinter with a strong arm — fast, explosive, durable, with a great jump and the ability to throw",
            "Only maximum size and weight",
            "Only flexibility, with no speed or strength",
          ],
          correctIndex: 1,
          explanation: "The ideal outfielder's body is like a sprinter with a strong arm — built for first-step quickness, acceleration, and speed to cover ground, with the endurance to chase everything all game and a strong, accurate arm to throw. The position rewards explosive, fast, durable athletes who can also throw. Combined with the reads and routes that turn speed into range, this athletic profile is the physical foundation of outfield defense.",
        },
      ],
    },
  },

  // ─── baseball-13-06: The Throw and the Crow Hop ───────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Truist Park",
      location: "Atlanta, Georgia",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-13-06",
    order: 6,
    title: "The Throw and Hitting the Cutoff",
    subtitle: "The crow-hop, throwing to bases, and the cutoff man",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-06", name: "Strong Arm", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "A great outfield throw isn't just strong — it's on a line, on target, and through the cutoff man.",
      year: 1972,
      overview: [
        "Throwing is a major part of outfield defense — the left fielder's throws help control the running game:\n- To third base — to hold or retire runners trying to advance.\n- To second base — to keep hitters to a single.\n- Home — on plays at the plate, usually through the cutoff man, who can relay it or let it through.\nA good outfield throw combines arm strength with footwork (the crow-hop), accuracy, and a low trajectory the cutoff man can handle.",
        "The crow-hop generates a strong throw:\n- After fielding or catching, take a crow-hop — a small shuffle-hop that gathers momentum and transfers weight from the back foot through the throw.\n- Throw over the top with a four-seam grip on a low, carrying line.\n- Keep it on a line (not a high rainbow) so it gets there faster and the cutoff man can catch it at shoulder height for a relay or redirect.\nA strong, accurate, low throw with good footwork is far more valuable than a wild rocket.",
        "Hitting the cutoff man is the most important throwing principle. On most throws to the bases or home, the outfielder throws through a cutoff man (an infielder positioned in line between the outfielder and the target), keeping the throw low and accurate so the cutoff man can catch and relay it, redirect it to a different base to catch a trailing runner, or let it continue to the target. Overthrowing the cutoff man — sailing the ball over his head — lets runners advance. The outfielder's job is a strong, accurate throw on a line to or through the cutoff man, hitting him at the chest.",
      ],
      technical: {
        title: "The Crow-Hop, Trajectory, and Hitting the Cutoff",
        body: [
          "The crow-hop and trajectory: after fielding or catching, take a crow-hop (shuffle-hop) to gather momentum and transfer weight, then throw over the top with a four-seam grip on a low, carrying line — not a high rainbow. A low throw gets there faster and lets the cutoff man catch it at shoulder height to relay or redirect. Footwork and a four-seam grip make the throw strong and accurate.",
          "Hit the cutoff man — the infielder lined up between you and the target. Throw to his chest with a low, accurate throw so he can catch and relay it, redirect it to catch a trailing runner, or let it continue. Overthrowing the cutoff man lets runners advance. A strong, accurate throw on a line to or through the cutoff man is the goal — accuracy and a low trajectory matter as much as arm strength.",
        ],
        codeExample: {
          label: "The Outfield Throw",
          code: `  GENERATE THE THROW:
  1. Field / catch, then CROW-HOP (shuffle-hop):
     gather momentum, transfer weight back → through
  2. Throw OVER THE TOP, FOUR-SEAM grip
  3. LOW, carrying LINE (not a high rainbow) →
     gets there faster + the cutoff man can catch
     it at shoulder height

  HIT THE CUTOFF MAN (most important principle):
  → Throw THROUGH the cutoff man (infielder lined
    up between you + the target)
  → Hit him at the CHEST, low + accurate → he can:
      relay it / redirect to catch a trailing
      runner / LET IT GO to the target
  → OVERTHROWING the cutoff = runners advance

  Accuracy + low trajectory matter as much as ARM.`,
        },
      },
      incident: {
        title: "Hitting the Cutoff Man Wins Games",
        when: "1972 — fundamentals-driven defense",
        where: "Truist Park and ballparks across the game",
        impact: "Coaching tradition treats hitting the cutoff man as one of the most important outfield fundamentals — a low, accurate throw to or through the cutoff keeps runners from advancing and gives the defense the option to catch a trailing runner, while an overthrow lets runners take extra bases.",
        body: [
          "Hitting the cutoff man is drilled into outfielders at every level because it wins games quietly. A strong, accurate, low throw to or through the cutoff man lets the defense control the running game: the cutoff can relay the throw to the target, redirect it to catch a trailing runner taking an extra base, or let it continue to the plate or a base. An outfielder who overthrows the cutoff man — sailing the ball over his head toward a base — gives up the option to make a play elsewhere and often lets trailing runners advance.",
          "The principle reflects a deeper truth: a low, accurate throw on a line is more valuable than a wild rocket. The crow-hop generates the strength, the four-seam grip and low trajectory provide accuracy and speed, and aiming through the cutoff man at chest height gives the defense maximum options. For young left fielders, mastering the crow-hop throw and the discipline to hit the cutoff man is as important as arm strength — it turns the outfielder's arm into a genuine weapon against the running game.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Field or Catch the Ball", sub: "runner advancing", type: "system" },
          { label: "Crow-Hop, Four-Seam", sub: "gather momentum, grip", type: "attacker" },
          { label: "Low Line to the Cutoff", sub: "hit him at the chest", type: "victim" },
          { label: "Runner Held, Options Kept", sub: "relay, redirect, or let go", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "The cutoff-and-relay system formalized in professional coaching" },
        { year: 1972, event: "Roberto Clemente and peers set the standard for outfield throwing", highlight: true },
        { year: 1990, event: "Crow-hop and four-seam throwing technique standardized" },
        { year: 2015, event: "Statcast measures outfield arm strength and throw accuracy" },
        { year: 2020, event: "Throwing mechanics and cutoff discipline refined in development" },
      ],
      keyTakeaways: [
        "The crow-hop (a shuffle-hop after fielding or catching) generates a strong, accurate throw",
        "Throw over the top with a four-seam grip on a low, carrying line — not a high rainbow — so it's faster and catchable",
        "Hit the cutoff man at the chest with a low, accurate throw so he can relay, redirect, or let it through",
        "Overthrowing the cutoff man lets runners advance — accuracy and a low trajectory matter as much as arm strength",
      ],
      references: [
        { title: "USA Baseball: Outfield Throwing and Cutoffs", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Arm and Cutoffs", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-06-q1",
          type: "Crow-Hop",
          challenge: `  A left fielder fields a single and throws toward
  third flat-footed from a standstill. The throw is
  weak and the runner advances easily.`,
          text: "What footwork generates a strong outfield throw?",
          options: [
            "Throwing flat-footed from a standstill",
            "A crow-hop — a shuffle-hop after fielding that gathers momentum and transfers weight into a strong throw",
            "Throwing while falling backward",
            "A full spin before throwing",
          ],
          correctIndex: 1,
          explanation: "A strong outfield throw is generated by the crow-hop — a small shuffle-hop after fielding or catching that gathers momentum and transfers weight from the back foot through the throw. Throwing flat-footed from a standstill produces a weak throw. The crow-hop, combined with an over-the-top motion and a four-seam grip, lets the outfielder put his whole body into a strong, accurate throw to the bases.",
        },
        {
          id: "baseball-13-06-q2",
          type: "Trajectory",
          challenge: `  An outfielder unleashes a high, looping rainbow
  throw toward home plate. It arrives late, and the
  cutoff man can't reach it to redirect it.`,
          text: "Why should outfield throws be on a low, carrying line rather than a high rainbow?",
          options: [
            "High rainbow throws are always better",
            "A low line gets there faster and lets the cutoff man catch it at shoulder height to relay or redirect, while a high rainbow is slow and uncatchable by the cutoff",
            "Trajectory doesn't matter",
            "Low throws can't reach the bases",
          ],
          correctIndex: 1,
          explanation: "Outfield throws should be on a low, carrying line — not a high rainbow — because a low throw gets to the target faster and stays at a height where the cutoff man can catch it to relay or redirect it if needed. A high, looping throw is slow to arrive and sails over the cutoff man's reach, removing the defense's options. A strong, low, accurate throw on a line is the goal.",
        },
        {
          id: "baseball-13-06-q3",
          type: "Hit the Cutoff",
          challenge: `  With a play developing, an outfielder airmails his
  throw over the cutoff man's head toward the base.
  A trailing runner takes second easily because the
  ball couldn't be redirected.`,
          text: "Why is hitting the cutoff man so important?",
          options: [
            "It isn't — outfielders should always throw directly to the base",
            "A low, accurate throw to or through the cutoff man lets the defense relay it, redirect it to catch a trailing runner, or let it through — overthrowing the cutoff removes those options and lets runners advance",
            "The cutoff man is just a backup with no real role",
            "Hitting the cutoff slows the play down for no reason",
          ],
          correctIndex: 1,
          explanation: "Hitting the cutoff man is one of the most important outfield fundamentals. A low, accurate throw to or through the cutoff man — at chest height — lets the defense relay it to the target, redirect it to catch a trailing runner taking an extra base, or let it continue. Overthrowing the cutoff man removes all those options and lets trailing runners advance freely. The outfielder's job is a strong, accurate throw on a line to or through the cutoff.",
        },
        {
          id: "baseball-13-06-q4",
          type: "Accuracy vs Power",
          challenge: `  Two outfielders: one has a slightly stronger arm
  but is wild; the other throws a touch slower but
  is always accurate, on a line, and hits the cutoff.`,
          text: "Which outfielder's throwing is more valuable, and why?",
          options: [
            "The wild, stronger arm — velocity is everything",
            "The accurate one — a strong, accurate throw on a line that hits the cutoff man controls the running game, while a wild rocket gives up the play's options",
            "They're exactly equal",
            "Neither throw matters",
          ],
          correctIndex: 1,
          explanation: "Accuracy and a low trajectory matter as much as arm strength. An outfielder who throws a touch slower but is always accurate, on a line, and hits the cutoff man controls the running game and keeps the defense's options open. A stronger but wild arm sails throws over the cutoff and misses targets, giving up plays. A strong, accurate, low throw with good footwork is far more valuable than a wild rocket.",
        },
      ],
    },
  },

  // ─── baseball-13-07: Backups and Positioning ──────────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Citi Field",
      location: "Queens, New York",
      era: "Modern",
      emoji: "🗺️",
    },
    id: "baseball-13-07",
    order: 7,
    title: "Backups and Positioning for Every Situation",
    subtitle: "Where the left fielder goes when the ball isn't his",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-07", name: "Always Backing Up", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "An outfielder is never standing still — there's a base to back up or a position to take on nearly every play.",
      year: 1995,
      overview: [
        "Outfielders have a job on every play, even when the ball isn't hit to them — much of it backing up:\n- Back up third base on throws and pickoffs from the catcher or pitcher.\n- Back up the center fielder on balls hit to left-center.\n- Back up bases on infield throws and rundowns on the left side.\nThe principle: an overthrow or a ball past a fielder should never go unguarded. Backing up is constant, unglamorous, and essential.",
        "Positioning before the pitch is the other half. The left fielder's depth and lateral position change with the situation:\n- Normal depth for most situations.\n- Shallow when a weak hitter or a play at the plate is likely.\n- Deep in no-doubles situations (late in close games, to prevent extra-base hits over his head).\n- Shaded toward the line or the gap based on the hitter's tendencies.\nHe reads the hitter, pitcher, and situation, and adjusts in concert with the center fielder.",
        "Communication ties it together. The left fielder communicates with the center fielder on shared balls and positioning, calls or defers on balls in the gap, and stays aware of the situation — the score, outs, runners, and where the play is. He must know before each pitch where he'll back up or what he'll do if the ball is hit to a given spot. Like every position, the left fielder is never truly idle when the ball is in play; there's almost always a backup responsibility or a positioning adjustment to make.",
      ],
      technical: {
        title: "Backup Responsibilities and Situational Positioning",
        body: [
          "Backups: the left fielder backs up third base on throws and pickoffs from the catcher or pitcher, backs up the center fielder on balls to left-center, and backs up bases and rundowns on the left side. Position behind the play so an overthrow or a ball that gets past a fielder doesn't cost extra bases. Backing up is constant and essential.",
          "Positioning and communication go together. Set depth and lateral position by situation — normal, shallow (weak hitter or play at the plate), deep (no-doubles, late in close games), or shaded to the line or gap for the hitter. Read the hitter, pitcher, and situation, and adjust in concert with the center fielder. Communicate on shared balls, call or defer in the gap, and know before each pitch where you'll back up or what you'll do if the ball is hit to a given spot.",
        ],
        codeExample: {
          label: "Left Fielder — Backups and Positioning",
          code: `  BACKUPS (a job on every play):
  → Back up THIRD on throws + pickoffs (catcher/
    pitcher)
  → Back up the CENTER FIELDER on balls to
    left-center
  → Back up bases + rundowns on the LEFT side
  → Position BEHIND the play → an overthrow never
    goes unguarded

  POSITIONING (by situation):
  Normal               → standard depth
  Weak hitter / play
   at the plate         → SHALLOW
  No-doubles (late,
   close)               → DEEP (stop extra bases
                          over your head)
  Hitter tendencies     → shade to the line / gap

  COMMUNICATE with the CF; call or defer in the gap.
  Know your backup / job BEFORE the pitch.`,
        },
      },
      incident: {
        title: "The Backup That Saves a Base",
        when: "1995 — fundamentals-driven defense",
        where: "Citi Field and ballparks across the game",
        impact: "Coaching tradition stresses that an outfielder backing up bases and throws — even when the ball isn't his — is a hallmark of a fundamentally sound team, turning potential overthrows and misplays into held runners rather than extra bases.",
        body: [
          "Backing up is one of the most overlooked but important parts of outfield play. When the left fielder hustles to back up a throw to third base on a pickoff or a play, most of the time nothing happens — but on the occasional overthrow, the backing-up outfielder is the only player who can keep the runner from advancing further. The same is true backing up the center fielder on a ball in the gap: if the center fielder misplays it, the left fielder is there to prevent a triple from becoming an inside-the-park disaster.",
          "These backup plays, repeated all game even when they usually don't matter, are a sign of a fundamentally sound team and a sign of an outfielder's effort and awareness. Combined with smart situational positioning — playing deep in no-doubles situations, shallow when a play at the plate looms, and shaded for the hitter — backing up makes the left fielder a constant contributor even when the ball isn't hit to him. For young left fielders, learning to always have a job on every play is as important as catching fly balls.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball in Play (Not to Me)", sub: "left fielder still has a job", type: "attacker" },
          { label: "Read the Assignment", sub: "back up or position", type: "system" },
          { label: "Back Up / Position Behind the Play", sub: "third, the CF, bases", type: "victim" },
          { label: "Overthrow Guarded, Base Saved", sub: "never standing still", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Outfield backup responsibilities formalized in coaching" },
        { year: 1980, event: "No-doubles and situational outfield depth standardized" },
        { year: 1995, event: "Backing up bases and throws drilled as a hallmark of sound defense", highlight: true },
        { year: 2010, event: "Positioning data refines outfield depth and alignment" },
        { year: 2020, event: "Communication and backup systems emphasized in development" },
      ],
      keyTakeaways: [
        "The left fielder backs up third base on throws and pickoffs, the center fielder on left-center balls, and bases on the left side",
        "Position behind the play so an overthrow or ball that gets past a fielder doesn't cost extra bases",
        "Set depth and position by situation: normal, shallow (play at the plate), deep (no-doubles), or shaded for the hitter",
        "Communicate with the center fielder and know your backup or job before each pitch — never stand still",
      ],
      references: [
        { title: "USA Baseball: Outfield Backups and Positioning", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Positioning", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-07-q1",
          type: "Backup",
          challenge: `  With a runner on second, the catcher throws to
  third on a pickoff attempt. The throw gets past
  the third baseman.`,
          text: "Where should the left fielder be on a throw to third base?",
          options: [
            "Standing in left field watching",
            "Backing up third base, positioned behind the bag so an overthrow doesn't let the runner advance further",
            "Running to cover home plate",
            "Standing on second base",
          ],
          correctIndex: 1,
          explanation: "On a throw to third base — whether a pickoff or a play — the left fielder backs up third, positioning behind the bag so that if the throw gets past the third baseman, he can field it and keep the runner from advancing further. This backup responsibility is constant: most of the time the throw is caught and nothing happens, but on the occasional overthrow, the backing-up left fielder saves a base. It's a hallmark of a sound, hustling defense.",
        },
        {
          id: "baseball-13-07-q2",
          type: "No-Doubles",
          challenge: `  Bottom of the ninth, defense leading by one run.
  An extra-base hit over the left fielder's head
  would put the tying run in scoring position.`,
          text: "How should the left fielder position himself in a no-doubles situation?",
          options: [
            "Play shallow to catch bloopers",
            "Play deep (no-doubles depth) to prevent extra-base hits over his head, conceding a single in front of him",
            "Play directly on the foul line only",
            "Move to center field",
          ],
          correctIndex: 1,
          explanation: "Late in a close game when an extra-base hit would be especially damaging, the left fielder plays deep (a 'no-doubles' alignment) to prevent balls from getting over his head for doubles or triples. This concedes a single dropping in front of him — far less costly than an extra-base hit that puts the tying run in scoring position. Positioning is a situational decision based on the score, the inning, and the cost of an extra-base hit.",
        },
        {
          id: "baseball-13-07-q3",
          type: "Backup the CF",
          challenge: `  A fly ball is hit to left-center and the center
  fielder calls for it. The left fielder, having
  deferred, sees the ball heading toward the
  center fielder.`,
          text: "What should the left fielder do after deferring to the center fielder on a ball in the gap?",
          options: [
            "Stop and watch the center fielder make the play",
            "Back up the center fielder, in case the ball is misplayed or gets past him, to prevent extra bases",
            "Run to the infield",
            "Argue that he should have caught it",
          ],
          correctIndex: 1,
          explanation: "Even after deferring to the center fielder on a ball in the left-center gap, the left fielder backs up the play — positioning behind the center fielder in case the ball is misplayed, bobbled, or gets past him. If that happens, the backing-up left fielder is there to field it and prevent the hit from becoming an extra-base disaster. Backing up the center fielder on shared balls is a constant left-field responsibility.",
        },
        {
          id: "baseball-13-07-q4",
          type: "Awareness",
          challenge: `  A left fielder stands flat-footed and unsure of his
  responsibilities, reacting late when a ball is
  hit and missing backup spots.`,
          text: "What habit makes a left fielder a constant contributor even when the ball isn't hit to him?",
          options: [
            "Relaxing until the ball is hit to him directly",
            "Knowing before each pitch where he'll back up or what he'll do if the ball is hit to a given spot, so he's never idle when the ball is in play",
            "Standing in the same spot regardless of the situation",
            "Waiting for the coach to tell him where to go",
          ],
          correctIndex: 1,
          explanation: "A left fielder is never truly idle when the ball is in play — there's almost always a backup responsibility or positioning job. By knowing before each pitch where he'll back up (third, the center fielder, bases) or what he'll do if the ball is hit to a given spot, he reacts instantly and contributes on every play. This pre-pitch awareness, combined with situational positioning and communication, makes the left fielder a constant contributor.",
        },
      ],
    },
  },

  // ─── baseball-13-08: Cutoffs, Relays, and Where to Throw ──────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-13-08",
    order: 8,
    title: "Cutoffs, Relays, and Where to Throw",
    subtitle: "Knowing the play before you field the ball",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-13-badge-08", name: "Right Base", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "The best outfielders decide where the ball is going before they catch it — and hit the cutoff to make it happen.",
      year: 1995,
      overview: [
        "Knowing where to throw — and deciding before fielding — is a defining outfield skill. As the ball comes, the left fielder must already know the situation and the play:\n- Hold the ball.\n- Throw to second to keep a hitter to a single.\n- Throw to third to retire or hold an advancing runner.\n- Throw home on a play at the plate.\nDeciding in advance lets him field with momentum already moving toward the target and throw decisively, rather than catching it and then thinking.",
        "The cutoff and relay system organizes these throws. On a throw toward home or third, an infielder lines up as the cutoff man between the outfielder and the target; on a deep ball into the gap or corner, a middle infielder comes out as the relay man. The left fielder throws to or through the cutoff man, who can relay, redirect, or let the throw through based on the situation and the catcher's or his own read. The left fielder's job is to field the ball, know the play, and deliver a strong, accurate, low throw to the right target or cutoff.",
        "Hitting the right target and the cutoff man prevents runners from advancing. Throwing to the wrong base — firing home when the run will score easily, letting the batter take second — wastes the throw and lets trailing runners advance. The disciplined outfielder reads the play, throws to the base where an out or a hold is possible, and hits the cutoff man so the defense keeps its options. Deciding where to throw before fielding the ball, and executing through the cutoff, is what turns a strong arm into effective run prevention.",
      ],
      technical: {
        title: "Deciding Where to Throw and the Cutoff System",
        body: [
          "Decide before fielding — know the situation (outs, runners, score) and where the play is before the ball arrives:\n- hold it\n- throw to second (keep the hitter to a single)\n- throw to third (retire or hold an advancing runner)\n- throw home (play at the plate)\nDeciding in advance lets you field with momentum toward the target and throw decisively.",
          "The cutoff and relay system: throw to or through the cutoff man (an infielder lined up between you and the target) on throws home or to third; on deep balls, a middle infielder comes out as the relay man. The cutoff/relay can relay, redirect to catch a trailing runner, or let the throw through. Throw to the base where an out or hold is possible — not the wrong base — and hit the cutoff so the defense keeps its options.",
        ],
        codeExample: {
          label: "Knowing Where to Throw",
          code: `  BEFORE THE BALL ARRIVES, KNOW THE PLAY:
  ✓ Outs, runners, score
  ✓ Where's the play? →
      HOLD it / throw to 2nd (keep it a single) /
      throw to 3rd (retire-hold the runner) /
      throw HOME (play at the plate)
  → Decide in ADVANCE → field with momentum toward
    the target → quick, decisive throw

  THE CUTOFF / RELAY SYSTEM:
  → Throw to/through the CUTOFF man (infielder
    lined up between you + the target)
  → Deep ball → a middle infielder is the RELAY man
  → Cutoff/relay can: RELAY / REDIRECT (catch a
    trailing runner) / LET IT GO

  THROW TO THE RIGHT BASE — wrong base = trailing
  runners advance. Hit the cutoff → keep options.`,
        },
      },
      incident: {
        title: "Deciding the Play Before the Catch",
        when: "1995 — fundamentals-driven defense",
        where: "Petco Park and ballparks across the game",
        impact: "The best outfielders are taught to know the situation and decide where the ball is going before they field it — turning a strong arm into effective run prevention by making quick, decisive, accurate throws to the right target through the cutoff man.",
        body: [
          "An outfielder's arm is only as effective as his decision about where to throw. The best outfielders process the situation — outs, runners, score — before the ball reaches them, so they know exactly where the play is and can field the ball with their momentum already carrying toward the target. This pre-decision lets them make a quick, decisive throw rather than catching the ball and then hesitating while runners advance. Knowing the play before the catch is what separates a smart outfielder from one who merely has a strong arm.",
          "The cutoff and relay system, and the discipline to throw to the right base, complete the picture. Throwing to or through the cutoff man at the right target keeps runners from advancing and preserves the defense's options to catch a trailing runner. Throwing to the wrong base — firing home when the run scores easily — wastes the throw and lets others advance. For young left fielders, learning to decide where to throw before fielding the ball, and to hit the cutoff man, turns a strong arm into genuine run prevention.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Know the Situation", sub: "outs, runners, score", type: "system" },
          { label: "Decide the Play Before the Catch", sub: "hold, 2nd, 3rd, or home", type: "attacker" },
          { label: "Field with Momentum to the Target", sub: "quick, decisive throw", type: "victim" },
          { label: "Throw Through the Cutoff", sub: "right base, options kept", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff-and-relay systems formalized in professional coaching" },
        { year: 1972, event: "Roberto Clemente models anticipating where runners will go" },
        { year: 1995, event: "Deciding-before-the-catch and cutoff discipline drilled as core defense", highlight: true },
        { year: 2010, event: "Defensive coordinators chart cutoff and relay alignments" },
        { year: 2015, event: "Statcast measures outfield arm and throw decisions" },
      ],
      keyTakeaways: [
        "Decide where to throw before fielding the ball — know the outs, runners, score, and where the play is",
        "Deciding in advance lets the outfielder field with momentum toward the target and throw quickly and decisively",
        "Throw to or through the cutoff man, who can relay, redirect to catch a trailing runner, or let the throw through",
        "Throw to the right base — the wrong base wastes the throw and lets trailing runners advance",
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
          id: "baseball-13-08-q1",
          type: "Decide Early",
          challenge: `  A single is hit to left field with a runner on
  first. A left fielder catches the ball and only
  then starts thinking about where to throw, losing
  precious time.`,
          text: "When should the outfielder decide where he's going to throw?",
          options: [
            "After he catches the ball and looks around",
            "Before the ball arrives — knowing the situation and where the play is, so he fields with momentum toward the target and throws decisively",
            "Only after a teammate yells at him",
            "It doesn't matter when he decides",
          ],
          correctIndex: 1,
          explanation: "The outfielder should decide where to throw before the ball arrives, based on the situation (outs, runners, score) and where the play is. Deciding in advance lets him field the ball with his momentum already carrying toward the target and make a quick, decisive throw, instead of catching it and then hesitating while runners advance. Knowing the play before the catch is what makes a strong arm effective.",
        },
        {
          id: "baseball-13-08-q2",
          type: "Wrong Base",
          challenge: `  A single to left, the runner from second is going
  to score easily. The left fielder fires home
  anyway, and the batter takes second on the throw.`,
          text: "What was the mistake in throwing home on this play?",
          options: [
            "Nothing — always throw home",
            "The run was going to score easily, so the throw home was wasted and let the batter advance to second — the outfielder should have thrown to the right base to keep the batter at first",
            "He should have thrown to the pitcher",
            "He should have held the ball forever",
          ],
          correctIndex: 1,
          explanation: "Throwing home when the run will score easily wastes the throw and lets the batter advance to second on the throw. The disciplined outfielder reads the play: if the lead run can't be retired, he throws to the base where he can make a play or hold a runner — here, keeping the batter at first by hitting the cutoff or throwing to second. Throwing to the wrong base gives up the trailing runner's advance for no benefit.",
        },
        {
          id: "baseball-13-08-q3",
          type: "Cutoff Options",
          challenge: `  An outfielder throws a strong, low throw to the
  cutoff man on a play developing at the plate.
  The catcher, seeing the runner will be safe,
  yells for the cutoff man to redirect the throw.`,
          text: "What options does hitting the cutoff man give the defense?",
          options: [
            "None — the cutoff man can only let the ball through",
            "The cutoff man can relay it to the target, redirect it to catch a trailing runner taking an extra base, or let it through to the plate",
            "The cutoff man must always catch and hold the ball",
            "Hitting the cutoff man removes all options",
          ],
          correctIndex: 1,
          explanation: "Hitting the cutoff man with a low, accurate throw gives the defense options: the cutoff man can relay the throw to the target, redirect it to a different base to catch a trailing runner taking an extra base, or let it continue to the plate. Here, with the runner safe at home, the catcher directs the cutoff man to redirect the throw and catch the batter trying to advance. Overthrowing the cutoff would remove all these options.",
        },
        {
          id: "baseball-13-08-q4",
          type: "Relay",
          challenge: `  A ball splits the gap and rolls to the wall in
  deep left-center. A middle infielder sprints into
  the outfield as the left fielder retrieves the ball.`,
          text: "What should the left fielder do with the ball on a deep gap hit?",
          options: [
            "Run the ball all the way back to the infield himself",
            "Hit the relay man (the middle infielder who came out) with a strong, accurate throw so he can quickly relay it to a base",
            "Throw it as far as he can toward home",
            "Hold the ball and concede the triple",
          ],
          correctIndex: 1,
          explanation: "On a deep ball to the gap or wall, a middle infielder sprints out to become the relay man. The left fielder retrieves the ball and throws a strong, accurate throw to the relay man, who then quickly turns and relays it to the appropriate base to hold or retire the runner. This relay system turns one long throw into two quicker, more accurate ones. The left fielder's job is to get the ball to the relay man cleanly and fast.",
        },
      ],
    },
  },

  // ─── baseball-13-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Wrigley Field",
      location: "Chicago, Illinois",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-13-09",
    order: 9,
    title: "Left Field Situational IQ",
    subtitle: "Depth, sun and wind, and knowing the game",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-13-badge-09", name: "Heads-Up", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "A heads-up outfielder knows the count, the runners, the wind, and the sun — and has already decided what he'll do.",
      year: 2000,
      overview: [
        "A complete left fielder plays the game mentally before each pitch. He processes the score, inning, outs, runners and their speed, count, and the hitter's tendencies, then sets:\n- His depth — normal, shallow, or deep no-doubles.\n- His lateral position — shaded to the line or the gap.\n- A pre-decision on what he'll do if the ball comes to him and where he'll throw.\nThis pre-pitch thinking lets him react instantly and correctly when the ball is hit.",
        "The elements are part of an outfielder's situational awareness in a way they aren't for infielders:\n- Sun — know where it is and use sunglasses or the glove to shield fly balls.\n- Wind — account for it knocking balls down or carrying them.\n- The field — know its quirks (the wall, the corners, the warning track).\nChecking the wind and sun before each at-bat, and sensing the warning track by feel, are part of playing the outfield well and safely.",
        "Communication and awareness complete the picture. The left fielder communicates with the center fielder on positioning and shared balls, knows the outs and the situation, and stays aware of the runners. Knowing the situation and translating it into depth, positioning, and a pre-made plan — while accounting for the sun, wind, and field — is what makes a heads-up left fielder. Like every position, the outfield is mental as much as physical, and the thinking must be done before the pitch.",
      ],
      technical: {
        title: "Pre-Pitch Thinking and the Elements",
        body: [
          "Decide before the pitch. Process the situation — score, outs, runners and speed, count, hitter — and set depth and position (normal, shallow, deep no-doubles, shaded to line or gap). Pre-decide where the play is and where you'll throw if the ball is hit to you, so the reaction is instant.",
          "The elements and awareness: know where the sun is and shield it with sunglasses or the glove on fly balls; account for the wind knocking balls down or carrying them; know the field's quirks (wall, corners, warning track by feel for safety). Check the wind and sun before each at-bat. Communicate with the center fielder on positioning and shared balls, and stay aware of the outs and runners. The thinking and the element-checks are done before the pitch.",
        ],
        codeExample: {
          label: "Left Field Situational Checklist",
          code: `  EVERY PITCH, KNOW:
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ DEPTH + position: normal / shallow / DEEP
    (no-doubles) / shade to line or gap (hitter)
  ✓ If it's hit to me → where's the play + where do
    I throw? (pre-decide)

  THE ELEMENTS (check before each at-bat):
  → SUN: know where it is; sunglasses / glove shield
  → WIND: knocks balls down or carries them
  → FIELD: wall, corners, WARNING TRACK by feel
    (safety)

  COMMUNICATE with the CF on positioning + shared
  balls; stay aware of the outs + runners.

  Think + check the elements BEFORE the pitch.`,
        },
      },
      incident: {
        title: "The Heads-Up Outfielder",
        when: "2000s — the analytics-and-IQ era",
        where: "Wrigley Field and ballparks across the game",
        impact: "The best outfielders are recognized for their situational awareness — pre-deciding their positioning and throws, and accounting for the sun, wind, and field — which turns physical tools into consistent run prevention.",
        body: [
          "Outfield defense is mental as much as physical. The best left fielders process the situation before every pitch — the score, outs, runners, and hitter — and set their depth and positioning and pre-decide where they'll throw, so they react instantly and correctly. They also account for the elements that infielders can mostly ignore: shielding the sun on fly balls, judging the wind's effect, and knowing the field's quirks and the warning track for safety. This awareness turns their physical tools into consistent, reliable defense.",
          "Wrigley Field, with its swirling winds and ivy-covered walls, is a famous reminder of how much the elements and the field matter to an outfielder. A left fielder who checks the wind and sun, knows the wall and corners, and has thought through the situation plays the game a step ahead. For young left fielders, the lesson is to think the game every pitch — set the depth, pre-decide the throw, check the elements, and communicate — so that when the ball is hit, the reaction is pure, prepared execution.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "outs, runners, count, hitter", type: "system" },
          { label: "Set Depth + Pre-Decide the Throw", sub: "position and plan", type: "attacker" },
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
        "Pre-decide where the play is and where you'll throw if the ball is hit to you, so the reaction is instant",
        "Account for the elements — shield the sun, judge the wind, and know the wall, corners, and warning track for safety",
        "Communicate with the center fielder and stay aware of the outs and runners — think the game every pitch",
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
          id: "baseball-13-09-q1",
          type: "Depth",
          challenge: `  A weak-hitting batter is up with a runner on second
  and a play at the plate likely on a single.`,
          text: "How might the left fielder adjust his depth in this situation?",
          options: [
            "Play as deep as possible",
            "Play shallower than normal, so he can field a single and throw home to cut down the runner trying to score",
            "Move to right field",
            "Stand on the warning track",
          ],
          correctIndex: 1,
          explanation: "With a weak hitter and a likely play at the plate, the left fielder may play shallower than normal so he can field a single quickly and throw home to cut down the runner trying to score from second. This trades some protection against a ball hit over his head for the ability to make a play at the plate. Depth is a situational decision based on the hitter, the runners, and where the likely play is.",
        },
        {
          id: "baseball-13-09-q2",
          type: "The Sun",
          challenge: `  A high fly ball is hit toward the left fielder, and
  the afternoon sun is directly in his line of sight
  to the ball.`,
          text: "How should the left fielder handle a fly ball hit into the sun?",
          options: [
            "Stare directly into the sun and hope",
            "Use sunglasses or shield the sun with his glove to pick up the ball, having already noted where the sun is before the pitch",
            "Close his eyes and guess",
            "Let the ball drop every time",
          ],
          correctIndex: 1,
          explanation: "An outfielder must account for the sun. Knowing before the pitch where the sun is, he uses sunglasses and shields the sun with his glove (flipping it up to block the glare) to pick up a fly ball hit into it. Staring directly into the sun risks losing the ball entirely or being hit by it. Accounting for the sun — along with the wind and the field's quirks — is part of an outfielder's situational awareness that infielders can mostly ignore.",
        },
        {
          id: "baseball-13-09-q3",
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
          id: "baseball-13-09-q4",
          type: "Pre-Decide",
          challenge: `  A left fielder consistently catches the ball
  cleanly but then hesitates, unsure where to throw,
  and runners advance during the delay.`,
          text: "What's the fix for an outfielder who hesitates after catching the ball?",
          options: [
            "Catch the ball faster",
            "Know the situation and pre-decide where the play is and where he'll throw before the ball is hit, so he reacts instantly",
            "Always throw home no matter what",
            "Never throw the ball at all",
          ],
          correctIndex: 1,
          explanation: "Hesitation after catching comes from not knowing the play in advance. The fix is pre-pitch thinking: the left fielder processes the situation — outs, runners, score — and decides where the play is and where he'll throw before the ball is hit. With the decision pre-made, he fields and throws decisively, without the delay that lets runners advance. Thinking the game every pitch turns physical tools into effective, reliable defense.",
        },
      ],
    },
  },

  // ─── baseball-13-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-13",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-13-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best left fielders teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-13-badge-10", name: "Left Field Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master left field and you become the corner guardian — great reads, the wall, and a throw that holds the runner.",
      year: 1983,
      overview: [
        "The greatest left fielders share a set of pursuable traits:\n- A great jump and efficient routes built on reading the ball off the bat.\n- Sure hands and sound catching technique.\n- The ability to play the wall and the line, turning doubles into singles.\n- A strong, accurate arm that hits the cutoff man.\n- The speed and endurance to cover the corner.\n- The situational intelligence to position, pre-decide throws, and account for the elements.\nZack Wheat embodied all of it for the Brooklyn Dodgers — but the qualities, not the highlights, are what to build.",
        "Mastering left field is about reads, routes, the wall, and a disciplined arm. The position's value comes from running down balls in the gap and down the line, playing the wall to hold hitters to fewer bases, throwing accurately to the right base through the cutoff man, and backing up plays — all while positioning smartly for the situation. A left fielder who does these consistently prevents runs and controls the running game. That reliability, especially command of the corner and the wall, is the heart of left-field defense.",
        "The mastery mindset treats left field as a craft of reading the ball, running routes, playing the wall and line, and throwing with discipline. That means endless fly-ball and read repetition, route running, wall and carom practice, long-toss and cutoff work, and studying situations and the elements until the pre-pitch thinking is automatic. The complete left fielder is a great reader and router, sure-handed, wall-savvy, strong-armed, and heads-up — the guardian of the corner. Build those qualities, and you turn the busiest outfield spot into a defensive strength.",
      ],
      technical: {
        title: "The Complete Left Fielder — A Self-Assessment",
        body: [
          "Skills to master:\n- reading the ball off the bat and the jump\n- efficient routes and the drop step\n- catching technique (two hands above the shoulder, over-the-shoulder, line drives)\n- playing the wall and the line\n- the crow-hop throw and hitting the cutoff\n- deciding where to throw\n- backups\n- situational positioning\nEach is built through deliberate repetition.",
          "Mindset to build: reads-and-routes focus, wall command, throwing discipline, and situational awareness. Develop the jump and routes, master your wall and the line, throw accurately to the right base through the cutoff, and think the game (positioning, throws, the elements) every pitch. Treat left field as a craft, not a place to hide a bat. The complete left fielder turns the busiest corner into a strength.",
        ],
        codeExample: {
          label: "The Complete Left Fielder — Checklist",
          code: `  READS / RANGE:
  ✓ Read the ball off the bat → a great JUMP
  ✓ Efficient routes + drop step (never backpedal)

  CATCHING:
  ✓ Two hands above the shoulder; over-the-shoulder;
    read line drives (sink vs carry)

  THE CORNER:
  ✓ Play the WALL + the LINE → doubles into singles
  ✓ Read the SLICE on pulled balls

  ARM / THROWS:
  ✓ Crow-hop, low line, FOUR-SEAM
  ✓ HIT THE CUTOFF; throw to the RIGHT base

  MIND:
  ✓ Position by situation; pre-decide throws
  ✓ Account for sun, wind, field; back up plays

  Build these → you GUARD the corner.`,
        },
      },
      incident: {
        title: "Zack Wheat and the Corner Guardians",
        when: "1909–1926 — Zack Wheat, Brooklyn Dodgers / 1959 Hall of Fame",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "Zack Wheat's Hall of Fame career — 18 seasons in left field, the Brooklyn Dodgers' all-time hits leader, and a reputation for graceful, sure defense — stands as proof that left field is a position of real skill that can anchor a great team.",
        body: [
          "Zack Wheat spent nearly two decades mastering left field for the Brooklyn Dodgers, became the franchise's all-time hits leader, and was renowned as one of the era's smoothest, surest left fielders. His command of the corner, his reads and routes, and his accurate arm made him a complete left fielder and a Hall of Famer. He proved that left field, far from a place to hide a bat, is a position of genuine skill that contributes to winning.",
          "Wheat's career is the argument that mastering left field — the reads, routes, wall play, catching, and disciplined throwing — can make a player a great defender and anchor a team's outfield. For any young left fielder, the lesson is to pursue the complete craft: develop the jump and routes, master the wall and the line, throw with discipline through the cutoff, and think the game every pitch. Become the corner guardian who runs down everything and holds runners, and you turn the busiest outfield spot into a defensive strength.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master the Skills", sub: "reads, routes, wall, throw", type: "system" },
          { label: "Build the Mindset", sub: "wall command, discipline, IQ", type: "attacker" },
          { label: "Run Down Everything, Hold Runners", sub: "doubles into singles", type: "victim" },
          { label: "Guard the Corner", sub: "the busiest spot, a strength", type: "result" },
        ],
      },
      timeline: [
        { year: 1909, event: "Zack Wheat begins mastering left field for the Brooklyn Dodgers" },
        { year: 1918, event: "Wheat's complete game makes him one of the era's best left fielders" },
        { year: 1926, event: "Wheat finishes his Brooklyn career as the franchise's all-time hits leader", highlight: true },
        { year: 1959, event: "Zack Wheat inducted into the Baseball Hall of Fame" },
        { year: 2015, event: "Statcast quantifies the reads, routes, and arm that define great outfielders" },
      ],
      keyTakeaways: [
        "The best left fielders combine a great jump and routes, sure hands, wall and line play, a disciplined arm, and situational IQ",
        "Left field rewards reads, routes, wall command, and accurate throwing to the right base through the cutoff",
        "The mastery mindset treats the position as a craft: repetition of reads, routes, wall play, and throwing",
        "Become the corner guardian who runs down everything and holds runners — turning the busiest outfield spot into a strength",
      ],
      references: [
        { title: "Baseball Hall of Fame: Zack Wheat", url: "https://baseballhall.org/hall-of-famers/wheat-zack" },
        { title: "USA Baseball: Complete Outfield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Outfield Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-13-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete left
  fielder and asks which qualities to develop.`,
          text: "Which combination of traits defines the best left fielders?",
          options: [
            "Only home-run power",
            "A great jump and routes, sure hands, wall and line play, a strong accurate arm that hits the cutoff, speed, and situational IQ",
            "Only running speed",
            "Only a strong arm",
          ],
          correctIndex: 1,
          explanation: "The best left fielders combine a great jump and efficient routes (from reading the ball off the bat), sure hands and sound catching technique, the ability to play the wall and the line, a strong and accurate arm that hits the cutoff man, the speed and endurance to cover the corner, and situational intelligence. Zack Wheat embodied all of it. It's a complete craft of reads, routes, the wall, and a disciplined arm — not just power or one tool.",
        },
        {
          id: "baseball-13-10-q2",
          type: "The Wall",
          challenge: `  A left fielder consistently plays balls off the
  wall so well that he holds hitters to singles on
  balls that would be doubles against a lesser
  outfielder.`,
          text: "Why is mastering the wall and the line so valuable?",
          options: [
            "It isn't — wall play doesn't matter",
            "It turns would-be doubles and triples into singles and outs, directly preventing runners from reaching scoring position",
            "It only helps the outfielder's personal stats",
            "Wall play has no effect on the game",
          ],
          correctIndex: 1,
          explanation: "Mastering the wall and the line — reading caroms, fielding rebounds quickly, and cutting off balls down the line — turns would-be doubles and triples into singles and outs, directly preventing runners from reaching scoring position and saving runs. A skilled left fielder's command of his park's caroms is the model. It's a genuine skill that separates a complete left fielder from one who only catches fly balls in open space, and it directly affects the game.",
        },
        {
          id: "baseball-13-10-q3",
          type: "Mindset",
          challenge: `  A talented left fielder relies on his speed and
  rarely practices reads, routes, wall play, or
  throwing, assuming his athleticism is enough.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — left field requires no skill practice",
            "Left field is a craft of reads, routes, wall play, and disciplined throwing that demands deliberate repetition — athleticism alone isn't enough",
            "Only hitting practice matters",
            "Practicing defense makes outfielders worse",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats left field as a craft mastered through deliberate repetition — reading the ball off the bat, running routes, playing the wall and line, catching technique, and disciplined throwing through the cutoff. Athleticism is the foundation, but without practicing these skills and studying situations, a talented player won't reach the position's potential. The greats like Zack Wheat earned their command of the corner through relentless practice.",
        },
        {
          id: "baseball-13-10-q4",
          type: "Legacy",
          challenge: `  Zack Wheat reached the Hall of Fame after a long
  career in left field for the Brooklyn Dodgers — as
  the franchise's all-time hits leader and a graceful, sure defender.`,
          text: "What does Zack Wheat's career teach young left fielders?",
          options: [
            "That left field is unimportant to winning",
            "That mastering the complete craft of left field — reads, routes, wall play, catching, and disciplined throwing — makes a player a great defender who anchors a team's outfield",
            "That only hitting gets you to the Hall of Fame",
            "That outfield defense can't be developed",
          ],
          correctIndex: 1,
          explanation: "Zack Wheat's Hall of Fame career — a long run in left field for the Brooklyn Dodgers as the franchise's all-time hits leader and a graceful, sure defender — proves that mastering the complete craft of left field makes a player a great defender who anchors a team's outfield. His reads, routes, wall play, and accurate arm turned the busiest outfield corner into a strength. The lesson for young players is to pursue that whole craft and become the corner guardian who runs down everything and holds runners.",
        },
      ],
    },
  },
];
