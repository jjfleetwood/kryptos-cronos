import type { StageConfig, EpochConfig } from "./types";

export const baseball14Epoch: EpochConfig = {
  id: "baseball-14",
  name: "Center Field",
  subtitle: "The Captain of the Outfield",
  description:
    "Center field is the outfield's most demanding position — the most ground to cover, the deepest alignment, priority on every catchable ball, and the leadership to captain the outfield. This complete position course builds the center fielder from the ground up: reading the ball and the jump, route running across the gaps, catching and robbing home runs at the wall, the long throw, priority and calling off the corners, backing up second base and the middle, and the situational reads that lead the outfield. From Little League to Ken Griffey Jr.'s effortless grace, you will learn to run down everything, rob homers, and captain the outfield.",
  emoji: "🎯",
  color: "blue",
  unlocked: true,
};

export const baseball14Stages: StageConfig[] = [
  // ─── baseball-14-01: The Captain of the Outfield ──────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Kingdome",
      location: "Seattle, Washington",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-14-01",
    order: 1,
    title: "Center Field — The Captain of the Outfield",
    subtitle: "Most range, deepest, and priority on every ball",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-01", name: "OF Captain", emoji: "🎖️" },
    challengeType: "quiz",
    info: {
      tagline: "Center field covers the most ground of any position — the captain with priority on every ball he can reach.",
      year: 1989,
      overview: [
        "Center field is the most demanding outfield position and one of the most athletically demanding on the field. The center fielder covers more ground than any other player — patrolling the deepest, widest territory, running balls down in both gaps, over his head, and in front. The position demands the best outfield tools: elite speed, the best reads and routes, a strong arm, and the leadership to captain the outfield. Teams often put their best all-around defensive athlete in center field, the way they put their best infield athlete at shortstop.",
        "The center fielder is the captain of the outfield and has priority on any ball he can reach. When a ball is hit into a gap, the center fielder calls off the corner outfielder if he can get to it, because his angle and speed usually make him the better play and the priority prevents collisions. The center fielder also positions the corner outfielders, communicates on every ball, and leads the outfield the way the shortstop leads the infield. His combination of range, leadership, and priority makes him the hub of outfield defense.",
        "The center fielder's signature plays — running down balls in the gaps, the over-the-shoulder catch on deep drives, and robbing home runs by leaping at the wall — are among the most spectacular in baseball. Ken Griffey Jr. patrolled center field with a grace that made the impossible look routine, robbing home runs and covering ground effortlessly. This epoch builds the complete center fielder: the elite range and reads to cover the most ground, the arm to throw, and the leadership to captain the outfield.",
      ],
      technical: {
        title: "Why Center Field Is the Outfield's Most Demanding Position",
        body: [
          "The most range: the center fielder patrols the deepest, widest territory and covers more ground than any other player — running balls down in both gaps, over his head, and in front. This demands elite speed, the best reads and routes, and the most endurance of any outfielder.",
          "The captain with priority: the center fielder has priority on any ball he can reach and calls off the corner outfielders, because his angle and speed usually make him the better play and his priority prevents collisions. He positions the corner outfielders, communicates on every ball, and leads the outfield the way the shortstop leads the infield. Range plus leadership make him the hub of outfield defense.",
        ],
        codeExample: {
          label: "Center Field — Core Responsibilities",
          code: `  THE CENTER FIELDER'S JOBS:
  ✓ Cover the MOST GROUND (deepest, widest, both
    gaps, over the head, in front)
  ✓ PRIORITY on every ball he can reach → CALL OFF
    the corner outfielders (prevents collisions)
  ✓ POSITION the corner outfielders
  ✓ CATCH everything: gaps, over-the-shoulder, ROB
    home runs at the wall
  ✓ The long THROW; hit the cutoff
  ✓ BACK UP second base + the middle
  ✓ CAPTAIN the outfield (like the SS leads the IF)

  DEFINING TRAITS (best outfield tools):
  → ELITE speed + the best reads + routes
  → A strong arm + leadership

  Teams put their best defensive outfield athlete
  in center field.`,
        },
      },
      incident: {
        title: "Ken Griffey Jr. — Effortless Grace in Center",
        when: "1989–1999 — Seattle Mariners",
        where: "Kingdome, Seattle, Washington",
        impact: "Ken Griffey Jr. won ten Gold Gloves and became the defining center fielder of his era — robbing home runs at the wall and covering ground with a grace so effortless it made the position's hardest plays look routine.",
        body: [
          "Ken Griffey Jr., 'The Kid,' patrolled center field for the Seattle Mariners with a combination of speed, instincts, and grace that defined the position in the 1990s. He won ten Gold Gloves and became famous for robbing home runs — timing leaps at the wall to pull balls back from over the fence — and for running down drives in the gaps that looked like sure extra-base hits. His effortless style made the most spectacular plays look routine, and he covered the vast center-field territory with apparent ease.",
          "Griffey's brilliance came from elite tools applied with great reads and instincts: a perfect jump, efficient routes, the speed to cover ground, and the timing to rob home runs at the wall. He is the model of the complete center fielder — the captain with the range to patrol the deepest territory and the flair to make the impossible look easy. For young center fielders, Griffey is the standard: cover the most ground, rob the homers, and captain the outfield with grace.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Hit to the Outfield", sub: "anywhere in the deepest territory", type: "attacker" },
          { label: "Center Fielder Has Priority", sub: "call off the corners", type: "system" },
          { label: "Cover the Most Ground", sub: "gaps, over the head, the wall", type: "victim" },
          { label: "Out Made, Outfield Led", sub: "the captain delivers", type: "result" },
        ],
      },
      timeline: [
        { year: 1954, event: "Willie Mays's 'The Catch' showcases center-field range on the biggest stage" },
        { year: 1989, event: "Ken Griffey Jr. debuts with Seattle and redefines graceful center-field play", highlight: true },
        { year: 1997, event: "Griffey wins another Gold Glove amid a run of ten" },
        { year: 2007, event: "Andruw Jones completes ten straight Gold Gloves in center field" },
        { year: 2015, event: "Statcast quantifies center-field jump, range, and arm" },
      ],
      keyTakeaways: [
        "Center field covers the most ground of any position and demands the best outfield tools: speed, reads, routes, and an arm",
        "The center fielder is the captain of the outfield with priority on any ball he can reach — he calls off the corners",
        "He positions the corner outfielders, communicates on every ball, and leads the outfield like the shortstop leads the infield",
        "Signature plays include running down gap balls, the over-the-shoulder catch, and robbing home runs at the wall",
      ],
      references: [
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "USA Baseball: Outfield Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Ken Griffey Jr.", url: "https://baseballhall.org/hall-of-famers/griffey-jr-ken" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-01-q1",
          type: "Role",
          challenge: `  A coach explains that one outfield position covers
  more ground than any other and demands the best
  all-around defensive tools.`,
          text: "Why is center field considered the most demanding outfield position?",
          options: [
            "Because it's the smallest area to cover",
            "Because the center fielder covers the most ground — the deepest, widest territory and both gaps — demanding elite speed, the best reads and routes, and an arm",
            "Because center fielders never have to throw",
            "Because it requires the least athleticism",
          ],
          correctIndex: 1,
          explanation: "Center field is the most demanding outfield position because the center fielder covers the most ground — patrolling the deepest, widest territory, running balls down in both gaps, over his head, and in front. This demands the best outfield tools: elite speed, the best reads and routes, a strong arm, and the most endurance. Teams put their best all-around defensive outfield athlete in center, much as they put their best infield athlete at shortstop.",
        },
        {
          id: "baseball-14-01-q2",
          type: "Priority",
          challenge: `  A fly ball is hit into the gap. Both the center
  fielder and the corner outfielder can reach it,
  and both start to converge.`,
          text: "Who has priority on a ball that both the center fielder and a corner outfielder can reach?",
          options: [
            "The corner outfielder always has priority",
            "The center fielder — he has priority on any ball he can reach, so he calls off the corner outfielder to prevent a collision",
            "Whoever is closer to the dugout",
            "Neither — they should both pull up",
          ],
          correctIndex: 1,
          explanation: "The center fielder is the captain of the outfield and has priority on any ball he can reach, so he calls off the corner outfielder ('I got it!') to take the ball. His angle and speed usually make him the better play, and the priority system prevents collisions and dropped balls. The corner outfielder defers and backs up the play. This priority is fundamental to coordinated outfield defense.",
        },
        {
          id: "baseball-14-01-q3",
          type: "Leadership",
          challenge: `  Before and during plays, the center fielder
  positions the corner outfielders and communicates
  on every ball.`,
          text: "What leadership role does the center fielder play?",
          options: [
            "None — he only fields his own area",
            "He is the captain of the outfield — positioning the corner outfielders, communicating on every ball, and leading the outfield the way the shortstop leads the infield",
            "Only calling pitches",
            "Only batting leadoff",
          ],
          correctIndex: 1,
          explanation: "The center fielder is the captain of the outfield, leading it the way the shortstop leads the infield. He positions the corner outfielders, communicates on every ball, has priority on shared balls, and directs the outfield's response to batted balls. His combination of range, leadership, and priority makes him the hub of outfield defense — which is why the position demands both elite tools and leadership.",
        },
        {
          id: "baseball-14-01-q4",
          type: "Legacy",
          challenge: `  A center fielder times a leap at the wall to pull
  a ball back from over the fence, robbing a home
  run, and covers the gaps so effortlessly that the
  hardest plays look routine.`,
          text: "What does Ken Griffey Jr.'s career demonstrate about center field?",
          options: [
            "That center field requires no skill",
            "That elite speed, reads, routes, an arm, and timing can make a center fielder cover the most ground, rob home runs, and captain the outfield with grace",
            "That only hitting matters in center field",
            "That center-field defense can't be measured",
          ],
          correctIndex: 1,
          explanation: "Ken Griffey Jr. — ten Gold Gloves, robbing home runs at the wall, and covering the gaps with effortless grace — proved that center field can be a defensive art. His elite speed, perfect jumps, efficient routes, and timing at the wall let him cover the most ground and make the impossible look routine. He's the model of the complete center fielder: the captain with the range to patrol the deepest territory and the leadership to lead the outfield.",
        },
      ],
    },
  },

  // ─── baseball-14-02: Reading the Ball and the Jump ────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Dodger Stadium",
      location: "Los Angeles, California",
      era: "Modern",
      emoji: "👁️",
    },
    id: "baseball-14-02",
    order: 2,
    title: "Reading the Ball and the Jump",
    subtitle: "The straightaway read, first step, and routes both ways",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-02", name: "Perfect Jump", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "The center fielder reads the ball from straightaway and must break either way — the jump is everything when you cover the most ground.",
      year: 1990,
      overview: [
        "Reading the ball off the bat and getting a great jump is even more critical for the center fielder than for the corner outfielders, because he covers the most ground and must be able to break in any direction. From his straightaway position, the center fielder reads balls hit to either gap, directly over his head, and in front — so his read and first step must work in every direction. A great jump lets him cover his vast territory; a poor jump leaves balls falling in the gaps that he should have reached.",
        "The read begins before contact, with anticipation: the center fielder studies the pitch, count, and hitter's tendencies, and may shade toward a gap based on the matchup. At contact, he reads the ball's trajectory off the bat from the sound and initial flight, then takes the proper first step — a drop step and turn on balls over his head (never backpedaling), a hard break to the gap, or a controlled charge on balls in front. Because he must read balls to both sides, his reads have to be accurate in every direction.",
        "Route efficiency turns the jump into range. The center fielder runs the most efficient route to the ball's landing spot — often a curved route that lets him arrive with momentum toward his throw — and on deep balls, he turns and sprints to the spot for an over-the-shoulder catch. Because he covers the most ground, small improvements in his jump and routes have a huge impact on his range. A great jump and efficient routes, built on reading the ball off the bat, are the foundation of the center fielder's defense.",
      ],
      technical: {
        title: "The Straightaway Read, First Step, and Routes",
        body: [
          "Read in every direction: from straightaway, the center fielder must read balls to both gaps, over his head, and in front, so his read and first step have to work in any direction. Anticipate using the pitch, count, and hitter (shading toward a gap when warranted), then read trajectory off the bat from the sound and initial flight.",
          "First step and routes: drop-step and turn on balls over the head (never backpedal), break hard to the gap, or charge under control on balls in front. Run the most efficient route — often curved — to arrive with momentum toward your throw, and make the over-the-shoulder catch on deep balls. Because the center fielder covers the most ground, small improvements in the jump and routes have an outsized impact on his range.",
        ],
        codeExample: {
          label: "The Center Fielder's Jump and Routes",
          code: `  READ FROM STRAIGHTAWAY (break ANY direction):
  → Anticipate: pitch, count, hitter (shade a gap)
  → At contact: SOUND + initial flight → trajectory
  → Reads must be accurate to BOTH sides, over the
    head, AND in front

  FIRST STEP:
  → Over the head → DROP STEP + turn (NEVER backpedal)
  → To a gap → hard BREAK
  → In front → CHARGE under control

  ROUTES:
  → Efficient (often curved) route → arrive with
    momentum toward your THROW
  → Deep ball → turn + sprint → OVER-THE-SHOULDER
    catch

  Covering the MOST ground → small jump/route gains
  = big range gains.`,
        },
      },
      incident: {
        title: "The Jump That Covers the Gaps",
        when: "1990 — the route-efficiency era",
        where: "Dodger Stadium and ballparks across the game",
        impact: "Because the center fielder covers the most ground, his jump and route efficiency have the largest impact on range of any position — a truth confirmed when defensive metrics showed elite center fielders separating themselves through reads and routes, not just speed.",
        body: [
          "For the center fielder, who covers more ground than anyone, the jump and route efficiency matter more than for any other position. A great read and first step, combined with efficient routes, let a center fielder reach balls in both gaps and over his head that a late-reacting or poorly-routing outfielder never gets to. When defensive metrics began measuring outfield jump and routes, they confirmed that the best center fielders separated themselves through these skills, not just raw speed — though center field demands elite speed too.",
          "The lesson is that the center fielder's range, the most valuable in the outfield, is built on reading the ball off the bat and running efficient routes in every direction. Anticipation, an accurate read at contact, a proper first step (drop step on balls overhead), and efficient routes combine to create the range that covers the gaps. Young center fielders develop these through endless fly-ball and read repetition from a straightaway position, reading balls to both sides. A great jump is the foundation of center-field defense.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read from Straightaway", sub: "any direction", type: "system" },
          { label: "Proper First Step", sub: "drop step, gap break, charge", type: "attacker" },
          { label: "Efficient Route", sub: "to both gaps and over the head", type: "victim" },
          { label: "Cover the Most Ground", sub: "jump + routes = range", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Drop-step technique standardized for outfielders" },
        { year: 1990, event: "Route efficiency and the jump emphasized as outfield fundamentals", highlight: true },
        { year: 2010, event: "Defensive metrics begin measuring outfield reads and routes" },
        { year: 2015, event: "Statcast quantifies jump and route efficiency, especially in center" },
        { year: 2020, event: "Read-and-route training refined with technology" },
      ],
      keyTakeaways: [
        "The center fielder reads from straightaway and must break in any direction, so his reads must be accurate to both sides, over the head, and in front",
        "Anticipate with the pitch, count, and hitter (shading a gap when warranted), then read trajectory at contact",
        "Drop-step on balls over the head (never backpedal), break hard to the gap, or charge under control in front",
        "Because the center fielder covers the most ground, small improvements in his jump and routes have an outsized impact on range",
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
          id: "baseball-14-02-q1",
          type: "Reading Both Ways",
          challenge: `  A center fielder stands straightaway and must be
  ready for a ball to either gap, directly over his
  head, or in front of him.`,
          text: "Why must the center fielder's reads be accurate in every direction?",
          options: [
            "He only needs to read balls hit straight at him",
            "From straightaway he covers the most ground and must break to either gap, over his head, or in front, so his read and first step have to work in any direction",
            "Center fielders never move",
            "He only reads balls to his right",
          ],
          correctIndex: 1,
          explanation: "From his straightaway position, the center fielder must be able to break in any direction — to either gap, directly over his head, or in front — because he covers the most ground of anyone. So his read off the bat and his first step have to work accurately in every direction, unlike a corner outfielder who is more often reading balls toward the line or the gap. This all-directional reading is part of what makes center field so demanding.",
        },
        {
          id: "baseball-14-02-q2",
          type: "The Jump",
          challenge: `  Two center fielders have the same speed, but one
  reaches far more balls in the gaps because of his
  jump and routes.`,
          text: "Why does the jump matter even more for a center fielder than for other positions?",
          options: [
            "It doesn't — speed is all that matters",
            "Because the center fielder covers the most ground, small improvements in his jump and route efficiency have an outsized impact on his range",
            "Center fielders cover the least ground",
            "The jump only matters on ground balls",
          ],
          correctIndex: 1,
          explanation: "The center fielder covers more ground than anyone, so his jump and route efficiency have the largest impact on range of any position. A great read and first step, plus efficient routes, let him reach balls in both gaps and over his head that a late-reacting outfielder never gets to. Because his territory is so vast, even small improvements in his jump and routes translate to significantly more balls caught — making reads and routes especially valuable in center.",
        },
        {
          id: "baseball-14-02-q3",
          type: "First Step",
          challenge: `  A deep drive is hit over the center fielder's head
  toward the gap. He backpedals to track it and
  can't cover enough ground.`,
          text: "What first step should the center fielder take on a ball hit over his head?",
          options: [
            "Backpedal as fast as possible",
            "A drop step — pivot and turn to run toward the ball's landing spot at full speed, then look back for the ball",
            "Stand still and wait",
            "Charge in toward the infield",
          ],
          correctIndex: 1,
          explanation: "On a ball over his head, the center fielder uses a drop step — pivoting and turning to run toward the projected landing spot at full speed, then looking back over his shoulder for the ball. Backpedaling is slow and unstable and covers far less ground. Because the center fielder must run down deep balls over a vast area, the drop step and over-the-shoulder tracking are essential for covering the ground his position demands.",
        },
        {
          id: "baseball-14-02-q4",
          type: "Routes",
          challenge: `  A center fielder takes a slightly curved route to a
  ball in the gap rather than a dead-straight line.`,
          text: "Why run an efficient curved route to a ball in the gap?",
          options: [
            "To take a longer, slower path for no reason",
            "It lets him arrive at the catch point with momentum already moving toward where he'll throw, turning the catch into a throw in one motion",
            "Straight routes are always better",
            "Routes don't matter in center field",
          ],
          correctIndex: 1,
          explanation: "An efficient curved route lets the center fielder arrive at the catch point with his momentum already carrying toward where he needs to throw, so he can catch and throw in one motion. Because he covers the most ground and often makes long throws, efficient routes that set up the throw are especially valuable. Route running, combined with a great jump, is what turns the center fielder's speed into the range that covers the gaps.",
        },
      ],
    },
  },

  // ─── baseball-14-03: Catching and Robbing Home Runs ───────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Oracle Park",
      location: "San Francisco, California",
      era: "Modern",
      emoji: "🧤",
    },
    id: "baseball-14-03",
    order: 3,
    title: "Catching and Robbing Home Runs",
    subtitle: "Over-the-shoulder catches and the leap at the wall",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-14-badge-03", name: "Home Run Robber", emoji: "🧤" },
    challengeType: "quiz",
    info: {
      tagline: "The center fielder's catches range from the routine fly to the leaping rob at the wall — all built on the same fundamentals.",
      year: 1990,
      overview: [
        "The center fielder makes the full range of outfield catches — routine flies, line drives, over-the-shoulder catches on deep balls, and the most spectacular play in the outfield: robbing a home run by leaping at the wall. The fundamentals are the same as for any outfielder: get to the spot with a good route, get under control, and catch with two hands above the throwing shoulder when possible, ready to throw. But the center fielder's range means he makes more deep, running catches and wall plays than anyone, so the over-the-shoulder catch and the leap at the wall are signature skills.",
        "The over-the-shoulder catch is essential for the center fielder's deep balls. On a drive hit well over his head, he drop-steps, sprints to the projected landing spot, and catches the ball over his shoulder on the run, like a football receiver tracking a deep pass. This lets him run at full speed to cover the most ground and still make the catch. Judging the ball over his shoulder while sprinting, and timing the catch, are skills built through repetition — and they're what allow the center fielder to run down balls that look like sure extra-base hits.",
        "Robbing a home run is the center fielder's signature play. On a ball hit to the wall that would clear the fence, the center fielder reads it, sprints to the wall, locates the wall to time his jump, and leaps at the right moment to catch the ball above the fence — pulling back a home run. The play requires reading the ball, getting to the wall, locating it safely, and timing the leap perfectly. Ken Griffey Jr. and Andruw Jones made home-run robbery a hallmark of elite center-field defense. It combines every outfield skill — read, route, speed, and timing — in one spectacular play.",
      ],
      technical: {
        title: "The Over-the-Shoulder Catch and Robbing Home Runs",
        body: [
          "Routine and over-the-shoulder catches: catch routine flies with two hands above the throwing shoulder, ready to throw. On deep balls over the head, drop-step, sprint to the spot, and make the over-the-shoulder catch on the run, tracking the ball over the shoulder like a receiver. This lets the center fielder run at full speed and still catch deep balls.",
          "Robbing the home run: read the ball as a potential home run, sprint to the wall, locate the wall (glance to find it) to time the jump and stay safe, and leap at the right moment to catch the ball above the fence. The play requires reading the ball, getting to the wall, locating it, and timing the leap perfectly — combining read, route, speed, and timing in one play. Locate the wall to avoid crashing into it.",
        ],
        codeExample: {
          label: "Catches and Robbing the Home Run",
          code: `  ROUTINE FLY: two hands above the throwing shoulder,
  ready to throw.

  OVER-THE-SHOULDER (deep ball over the head):
  → Drop step + SPRINT to the spot
  → Catch over the shoulder ON THE RUN (like a
    receiver) → run full speed, still make it

  ROBBING THE HOME RUN (signature play):
  1. READ it as a potential HR
  2. SPRINT to the wall
  3. LOCATE the wall (glance) → time the jump +
     stay SAFE (don't crash)
  4. LEAP at the right moment → catch ABOVE the
     fence → pull back the home run

  Combines READ + ROUTE + SPEED + TIMING in one play.
  Griffey + Andruw Jones made it a hallmark.`,
        },
      },
      incident: {
        title: "Ken Griffey Jr. Robs the Home Run",
        when: "1990s — Seattle Mariners",
        where: "Oracle Park and ballparks across the game",
        impact: "Ken Griffey Jr.'s leaping catches at the wall — timing his jump to pull home runs back over the fence — became a signature of his game and the defining image of elite center-field defense, inspiring a generation of outfielders.",
        body: [
          "Ken Griffey Jr. made robbing home runs an art. Reading a deep drive, he would sprint to the wall, time his leap, and reach above the fence to snatch a ball that was destined for the seats — turning a home run into an out and deflating the opposing team. His grace and timing at the wall made the most spectacular play in the outfield look effortless, and his home-run robberies became a defining image of 1990s baseball and elite center-field defense.",
          "The play combines every outfield skill: reading the ball off the bat, running an efficient route to the wall, the speed to get there, locating the wall to time the jump and stay safe, and the timing to leap at the perfect moment. Andruw Jones and other great center fielders made it a hallmark of their games too. For young center fielders, robbing a home run is the ultimate expression of the position's skills — and it's built on the same fundamentals of reads, routes, and wall awareness that every outfielder develops.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deep Drive Toward the Wall", sub: "potential home run", type: "attacker" },
          { label: "Read, Sprint, Locate the Wall", sub: "route + safety", type: "system" },
          { label: "Time the Leap", sub: "jump at the right moment", type: "victim" },
          { label: "Home Run Robbed", sub: "catch above the fence", type: "result" },
        ],
      },
      timeline: [
        { year: 1954, event: "Willie Mays's over-the-shoulder 'Catch' sets the standard for deep catches" },
        { year: 1990, event: "Ken Griffey Jr.'s home-run robberies define elite center-field defense", highlight: true },
        { year: 2005, event: "Andruw Jones's wall play extends the home-run-robbing tradition" },
        { year: 2015, event: "Statcast measures catch probability and wall plays" },
        { year: 2020, event: "Robbing home runs celebrated as the outfield's signature play" },
      ],
      keyTakeaways: [
        "The center fielder makes the full range of catches, from routine flies to over-the-shoulder catches and robbing home runs",
        "On deep balls over the head, drop-step, sprint to the spot, and make the over-the-shoulder catch on the run",
        "Robbing a home run combines reading the ball, sprinting to the wall, locating it to time the jump safely, and leaping at the right moment",
        "Locate the wall to time the leap and avoid crashing — the home-run robbery combines every outfield skill",
      ],
      references: [
        { title: "USA Baseball: Outfield Catching and Wall Play", url: "https://www.usabaseball.com" },
        { title: "Baseball Hall of Fame: Ken Griffey Jr.", url: "https://baseballhall.org/hall-of-famers/griffey-jr-ken" },
        { title: "MLB: Outfield Defense", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-03-q1",
          type: "Over the Shoulder",
          challenge: `  A ball is crushed well over the center fielder's
  head toward the deepest part of the park. He
  drop-steps and sprints back, the ball still
  carrying as he reaches the spot.`,
          text: "What catch should the center fielder make on a deep ball hit well over his head?",
          options: [
            "Stop, turn to face the infield, and catch it",
            "An over-the-shoulder catch on the run, tracking the ball over his shoulder like a football receiver",
            "A basket catch at his belt",
            "Let it drop and play the carom",
          ],
          correctIndex: 1,
          explanation: "On a deep ball over his head, the center fielder drop-steps, sprints to the projected landing spot, and makes an over-the-shoulder catch on the run — tracking the ball over his shoulder like a receiver. This lets him run at full speed to cover the maximum ground and still make the catch. Stopping to turn and face the ball wastes time and ground. The over-the-shoulder catch is essential for running down the deep balls the center fielder covers.",
        },
        {
          id: "baseball-14-03-q2",
          type: "Robbing HR",
          challenge: `  A deep drive looks like a sure home run. The center
  fielder sprints to the wall to try to rob it.`,
          text: "What does robbing a home run require the center fielder to do?",
          options: [
            "Simply jump as high as possible at a random moment",
            "Read the ball, sprint to the wall, locate the wall to time the jump and stay safe, and leap at the right moment to catch the ball above the fence",
            "Climb over the fence into the stands",
            "Wait for the ball to land and play the carom",
          ],
          correctIndex: 1,
          explanation: "Robbing a home run combines every outfield skill: reading the ball as a potential home run, sprinting to the wall on an efficient route, locating the wall (glancing to find it) to time the jump and avoid crashing, and leaping at the precise moment to catch the ball above the fence. Ken Griffey Jr. and Andruw Jones made this their signature. It requires read, route, speed, and timing all in one spectacular, run-saving play.",
        },
        {
          id: "baseball-14-03-q3",
          type: "Safety",
          challenge: `  Sprinting full speed toward the wall to rob a home
  run, a center fielder keeps his eyes locked only
  on the ball and never checks where the wall is.`,
          text: "Why must the center fielder locate the wall when going up to rob a home run?",
          options: [
            "There's no reason to check the wall",
            "To time his jump correctly and avoid crashing into the wall at full speed, which risks serious injury",
            "To show off to the crowd",
            "Because the rules require it",
          ],
          correctIndex: 1,
          explanation: "When going to the wall to rob a home run, the center fielder must locate the wall — glancing to find it while tracking the ball — both to time his leap correctly (jumping at the right moment to reach above the fence) and to avoid crashing into the wall at full speed, which risks serious injury. Running blindly into the wall is dangerous and often results in a misplayed ball. Locating the wall is essential for both the play and safety.",
        },
        {
          id: "baseball-14-03-q4",
          type: "Fundamentals",
          challenge: `  A coach says that even the spectacular home-run
  robbery is built on the same fundamentals every
  outfielder develops.`,
          text: "What fundamentals does robbing a home run combine?",
          options: [
            "Only raw jumping ability",
            "Reading the ball off the bat, running an efficient route to the wall, the speed to get there, and the timing and wall awareness to leap and catch above the fence",
            "Only luck",
            "Only a strong throwing arm",
          ],
          correctIndex: 1,
          explanation: "Robbing a home run combines the same fundamentals every outfielder develops, executed at the highest level: reading the ball off the bat, running an efficient route to the wall, the speed to get there in time, and the wall awareness and timing to leap and catch the ball above the fence. It's the ultimate expression of the position's skills — read, route, speed, and timing — which is why it's built on the same foundations as every other outfield play.",
        },
      ],
    },
  },

  // ─── baseball-14-04: Route Running and the Gaps ───────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Coors Field",
      location: "Denver, Colorado",
      era: "Modern",
      emoji: "↔️",
    },
    id: "baseball-14-04",
    order: 4,
    title: "Route Running and Covering the Gaps",
    subtitle: "Efficient angles, the most ground, and setting up the throw",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-04", name: "Gap Eraser", emoji: "↔️" },
    challengeType: "quiz",
    info: {
      tagline: "The center fielder covers the most ground, so the route — not just the speed — is what gets him to the ball.",
      year: 2005,
      overview: [
        "Route running is the skill that turns the center fielder's speed into range across his vast territory. Because he covers the most ground and must reach balls in both gaps, the efficiency of his route to the ball is critical. The most efficient route gets him to the ball's landing spot in the least time while arriving with his momentum moving toward where he'll throw. A poor route — taking a bad angle, drifting, or overrunning the ball — wastes the center fielder's speed and turns a catchable ball into a hit.",
        "The center fielder reads the ball's trajectory and takes the angle that intercepts the ball at its landing spot. On a ball to the gap, he takes a route that accounts for the ball's curve and lets him arrive moving toward the infield for the throw. On a deep ball, he takes the most direct angle to the spot and makes the over-the-shoulder catch. The 'banana' route — a slightly curved path — is often used to arrive at the catch point with momentum toward the target, rather than a straight line that leaves him moving away from the play.",
        "Covering the gaps is the center fielder's defining range responsibility, and it's shared with the corner outfielders. The center fielder has priority and usually takes balls in the gap that he can reach, calling off the corner outfielder. Efficient routes let him erase the gaps — turning what would be doubles and triples into outs. Because he covers the most ground, the center fielder's route running has the biggest impact on a team's outfield defense. Mastering efficient routes in every direction is what lets the center fielder cover his enormous territory.",
      ],
      technical: {
        title: "Efficient Routes and Covering the Gaps",
        body: [
          "Take the efficient angle: read the ball's trajectory and take the route that intercepts the ball at its landing spot in the least time, arriving with momentum toward your throw. On gap balls, account for the ball's curve and arrive moving toward the infield; on deep balls, take the most direct angle and make the over-the-shoulder catch. The 'banana' route arrives at the catch point with momentum toward the target.",
          "Cover the gaps: the center fielder has priority and usually takes catchable balls in the gaps, calling off the corner outfielder. Efficient routes erase the gaps, turning doubles and triples into outs. Because the center fielder covers the most ground, his route running has the biggest impact on the outfield's defense — avoid bad angles, drifting, and overrunning the ball, all of which waste his speed.",
        ],
        codeExample: {
          label: "Route Running and the Gaps",
          code: `  THE EFFICIENT ROUTE:
  → Read trajectory → take the ANGLE that intercepts
    the ball at its landing spot in the LEAST time
  → Arrive with momentum TOWARD your throw
  → Gap ball → account for the curve, arrive moving
    toward the infield
  → Deep ball → most direct angle → OVER-THE-SHOULDER
  → "BANANA" route → arrive at the catch point with
    momentum toward the target

  COVER THE GAPS (the defining range job):
  → Priority → take catchable gap balls, CALL OFF
    the corner OF
  → Efficient routes ERASE the gaps → doubles +
    triples into OUTS

  AVOID: bad angles, drifting, OVERRUNNING the ball
  (all waste your speed).`,
        },
      },
      incident: {
        title: "Erasing the Gaps with Routes",
        when: "2005 — the route-efficiency era",
        where: "Coors Field and ballparks across the game",
        impact: "Defensive analysis confirmed that route efficiency, especially in center field, has an enormous impact on range — the best center fielders erased the gaps not just with speed but with the angles that got them to the ball fastest.",
        body: [
          "When defensive metrics began measuring route efficiency, they revealed how much the angle a center fielder takes matters. The best center fielders reached balls in the gaps that others didn't — not only because they were fast, but because their routes were efficient, getting them to the ball's landing spot in the least time and on the best angle to throw. Coors Field, with its enormous outfield, made route running especially critical, rewarding center fielders who took perfect angles to cover the vast gaps.",
          "The lesson is that route running, especially in center field, turns speed into range. A center fielder who reads the ball and takes the most efficient angle erases the gaps — converting would-be extra-base hits into outs — while one who takes bad angles, drifts, or overruns the ball wastes his speed. Because the center fielder covers the most ground, his route running has the biggest impact on the outfield's defense. Mastering efficient routes in every direction is what lets him cover his enormous territory.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball to the Gap", sub: "potential extra-base hit", type: "attacker" },
          { label: "Read and Take the Efficient Angle", sub: "intercept the landing spot", type: "system" },
          { label: "Arrive with Momentum to the Throw", sub: "banana route", type: "victim" },
          { label: "Gap Erased, Out Made", sub: "doubles into outs", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Route efficiency emphasized as an outfield fundamental" },
        { year: 2005, event: "Defensive analysis quantifies route efficiency's impact on range", highlight: true },
        { year: 2015, event: "Statcast measures route efficiency and outfielder jump" },
        { year: 2018, event: "Center-field route running shown to have the biggest defensive impact" },
        { year: 2022, event: "Route-running training refined with technology" },
      ],
      keyTakeaways: [
        "Route running turns the center fielder's speed into range across his vast territory",
        "Take the efficient angle that intercepts the ball at its landing spot in the least time, arriving with momentum toward the throw",
        "The center fielder has priority and erases the gaps with efficient routes, turning doubles and triples into outs",
        "Avoid bad angles, drifting, and overrunning the ball — all waste the center fielder's speed",
      ],
      references: [
        { title: "USA Baseball: Outfield Route Running", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB Statcast: Route Efficiency", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-04-q1",
          type: "Routes",
          challenge: `  Two center fielders with identical speed chase a
  ball in the gap. One takes a perfect angle and
  makes the catch; the other takes a bad angle and
  the ball drops for a double.`,
          text: "Why does the route a center fielder takes matter so much?",
          options: [
            "It doesn't — only speed determines who catches the ball",
            "An efficient route gets the fielder to the ball's landing spot in the least time, so a good angle reaches balls that a bad angle (wasting the same speed) doesn't",
            "Bad angles are faster",
            "Routes only matter on ground balls",
          ],
          correctIndex: 1,
          explanation: "The route turns speed into range. An efficient route — taking the angle that intercepts the ball at its landing spot in the least time — lets a center fielder reach balls that an equally fast fielder taking a bad angle never gets to. A poor route wastes the fielder's speed by covering extra distance or arriving late. Because the center fielder covers the most ground, his route efficiency has an enormous impact on his range and the outfield's defense.",
        },
        {
          id: "baseball-14-04-q2",
          type: "Banana Route",
          challenge: `  A center fielder needs to catch a ball in the gap
  and immediately throw to hold a runner. He takes
  a slightly curved route rather than a straight
  line.`,
          text: "Why might the center fielder run a curved 'banana' route to the gap ball?",
          options: [
            "To run a longer, slower path for no reason",
            "To arrive at the catch point with momentum already moving toward where he'll throw, so the catch flows into the throw",
            "Straight routes always set up the throw better",
            "Routes have no effect on the throw",
          ],
          correctIndex: 1,
          explanation: "A curved 'banana' route lets the center fielder arrive at the catch point with his momentum already carrying toward where he needs to throw, so the catch flows into the throw in one motion. A dead-straight route might get him to the ball a hair sooner but leave him moving away from the play, costing time on the throw. When a runner must be held, the banana route balances reaching the ball with setting up the throw.",
        },
        {
          id: "baseball-14-04-q3",
          type: "Covering the Gaps",
          challenge: `  A ball is hit into the gap that both the center
  fielder and the corner outfielder can reach.`,
          text: "How does the center fielder's priority help cover the gaps?",
          options: [
            "It doesn't — the corner outfielder should always take gap balls",
            "The center fielder has priority and usually takes catchable gap balls, calling off the corner outfielder, so his range and efficient routes erase the gaps",
            "Both fielders should always go for it together",
            "Nobody covers the gaps",
          ],
          correctIndex: 1,
          explanation: "The center fielder has priority on any ball he can reach, so he usually takes catchable balls in the gaps and calls off the corner outfielder. His superior range and efficient routes let him erase the gaps — turning would-be doubles and triples into outs. The priority system also prevents collisions. Covering the gaps with his range and routes is the center fielder's defining range responsibility, shared with but prioritized over the corner outfielders.",
        },
        {
          id: "baseball-14-04-q4",
          type: "Mistakes",
          challenge: `  A center fielder overruns a ball in the gap,
  drifts under another, and takes a bad angle on a
  third — all of which waste his speed.`,
          text: "What do bad angles, drifting, and overrunning the ball have in common?",
          options: [
            "They all make the fielder faster",
            "They all waste the center fielder's speed, turning catchable balls into hits — efficient routes avoid them",
            "They are all good techniques",
            "They only matter for corner outfielders",
          ],
          correctIndex: 1,
          explanation: "Bad angles, drifting under the ball, and overrunning the ball all waste the center fielder's speed — they cover extra distance, arrive late, or put him out of position to make the play, turning catchable balls into hits. Efficient routes avoid these mistakes by taking the best angle to the ball's landing spot. Because the center fielder covers the most ground, eliminating these route errors has a big impact on his range and the outfield's defense.",
        },
      ],
    },
  },

  // ─── baseball-14-05: Building the Center Fielder's Body ───────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Chase Field",
      location: "Phoenix, Arizona",
      era: "Modern",
      emoji: "💪",
    },
    id: "baseball-14-05",
    order: 5,
    title: "Building the Center Fielder's Body",
    subtitle: "Elite speed, acceleration, and endurance",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-05", name: "Burner", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "Center field demands the most athletic outfielder — elite speed, an explosive first step, and the endurance to chase it all.",
      year: 2015,
      overview: [
        "Center field demands the most athletic body in the outfield, because the center fielder covers the most ground. The key physical priorities are elite speed (top-end straight-line speed to run down deep balls and reach the gaps), explosive first-step quickness and acceleration (to get a great jump and break in any direction), change-of-direction agility (to handle balls to both sides and adjust routes), endurance (to cover the most ground and stay sharp through a long game and season), and a strong, accurate arm. The center fielder is typically the fastest, most athletic outfielder.",
        "Speed and acceleration are the foundation. Elite straight-line speed lets the center fielder run down deep drives over a vast area; explosive first-step quickness and acceleration produce the great jump and the ability to break in any direction; change-of-direction agility handles balls to both gaps and route adjustments. These are built through sprint training, acceleration and reaction drills, and agility work. Strong legs and a powerful core drive the sprint and the throws. The center fielder's lower body and explosiveness are what let him cover his enormous territory.",
        "Arm strength, endurance, and durability round out the body. A strong, accurate arm — built through long-toss, sound mechanics, and rotator-cuff and scapular strengthening — lets the center fielder make the long throws his deep position requires. Endurance keeps him covering ground late in games and seasons; flexibility and mobility keep him healthy over a long season of sprinting and throwing. The center fielder trains like an elite sprinter with a strong arm — the most athletic outfielder, built for speed, explosiveness, and durability.",
      ],
      technical: {
        title: "Training Priorities for Center Fielders",
        body: [
          "Speed and acceleration: prioritize elite straight-line speed (sprint training) for deep balls, explosive first-step quickness and acceleration (acceleration and reaction drills) for the jump, and change-of-direction agility for balls to both sides and route adjustments. Strong legs and a powerful core drive the sprint and throws. The center fielder is typically the fastest, most athletic outfielder.",
          "Arm, endurance, and durability: build the throwing arm through long-toss, sound mechanics, and rotator-cuff and scapular strengthening for the long throws the deep position requires. Endurance keeps him covering the most ground late in games; flexibility and mobility keep him healthy over a long season of sprinting and throwing. Train like an elite sprinter with a strong arm.",
        ],
        codeExample: {
          label: "Center Fielder Body-Building Priorities",
          code: `  THE MOST ATHLETIC OUTFIELDER:

  SPEED + ACCELERATION (covers the most ground):
  → ELITE straight-line SPEED → run down deep balls
  → Explosive first step + ACCELERATION → the JUMP,
    break in ANY direction
  → Change-of-direction AGILITY → both gaps + route
    adjustments
  → Strong legs + core → sprint + throws

  ARM + ENDURANCE + DURABILITY:
  → Long-toss + mechanics → the LONG throws (deep
    position)
  → Rotator cuff / scapular care
  → ENDURANCE → cover the most ground late
  → Mobility → stay healthy over a long season

  Train like an ELITE SPRINTER with a strong arm.`,
        },
      },
      incident: {
        title: "The Most Athletic Outfielder",
        when: "2015 — the Statcast era",
        where: "Chase Field and ballparks across the game",
        impact: "Statcast's measurement of sprint speed and jump confirmed that center fielders are typically the fastest, most explosive athletes in the outfield — elite speed and a great jump translating directly into the range that covers the most ground.",
        body: [
          "When Statcast began measuring sprint speed and jump, it confirmed that center fielders are typically the fastest, most explosive athletes in the outfield. The data showed that elite straight-line speed, an explosive first step, and a great jump translated directly into the range that covers the most ground — and that the best center fielders combined these athletic traits with the reads and routes that turn speed into range. Center-field defense became increasingly understood as a product of elite athleticism plus skill.",
          "The lesson for young center fielders is that the position rewards the most complete athletic profile in the outfield: elite speed, explosive acceleration and a great jump, change-of-direction agility, endurance, and a strong arm. Training emphasizes sprint work, acceleration and reaction drills, agility, long-toss and arm care, and the mobility to stay healthy. The center fielder trains like an elite sprinter with a strong arm — and combined with the reads and routes that turn speed into range, that athletic foundation is what lets him cover his enormous territory.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Covers the Most Ground", sub: "the position's demand", type: "attacker" },
          { label: "Elite Speed + Acceleration", sub: "the jump, run it all down", type: "system" },
          { label: "Arm + Endurance + Durability", sub: "long throws, stay fresh", type: "victim" },
          { label: "The Most Athletic Outfielder", sub: "sprinter with an arm", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Elite speed and acceleration emphasized for center fielders" },
        { year: 2005, event: "Sprint, agility, and arm-care programs standardized in development" },
        { year: 2015, event: "Statcast confirms center fielders as the fastest outfielders", highlight: true },
        { year: 2018, event: "Center-field evaluation centers on sprint speed and jump" },
        { year: 2022, event: "Integrated speed and arm-care programs tailored to center fielders" },
      ],
      keyTakeaways: [
        "Center field demands the most athletic outfielder — elite speed, explosive acceleration, agility, endurance, and an arm",
        "Elite straight-line speed runs down deep balls; explosive first-step quickness and acceleration produce the great jump",
        "A strong arm, built with long-toss and arm care, is needed for the long throws the deep position requires",
        "Train like an elite sprinter with a strong arm — fast, explosive, durable, with the endurance to cover the most ground",
      ],
      references: [
        { title: "USA Baseball: Athlete Development and Arm Care", url: "https://www.usabaseball.com" },
        { title: "Little League: Conditioning Basics", url: "https://www.littleleague.org/playing-rules/" },
        { title: "MLB Statcast: Sprint Speed and Jump", url: "https://baseballsavant.mlb.com" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-05-q1",
          type: "Most Athletic",
          challenge: `  A coach is deciding which outfielder to play in
  center and notes the position covers the most
  ground.`,
          text: "Why does center field demand the most athletic body in the outfield?",
          options: [
            "Because center field covers the least ground",
            "Because the center fielder covers the most ground, demanding elite speed, explosive acceleration, agility, endurance, and a strong arm",
            "Because center fielders never run",
            "Because the position requires no athleticism",
          ],
          correctIndex: 1,
          explanation: "Center field covers more ground than any position, so it demands the most athletic body in the outfield: elite straight-line speed to run down deep balls, explosive first-step quickness and acceleration for the jump, change-of-direction agility for balls to both sides, endurance to cover the most ground, and a strong arm. The center fielder is typically the fastest, most athletic outfielder — which is why teams put their best defensive outfield athlete there.",
        },
        {
          id: "baseball-14-05-q2",
          type: "Speed",
          challenge: `  A center fielder wants to improve his ability to
  run down deep drives to the wall and reach balls
  in the gaps.`,
          text: "Which physical qualities most directly let a center fielder cover his vast territory?",
          options: [
            "Upper-body size only",
            "Elite straight-line speed plus explosive first-step quickness and acceleration for the jump",
            "Grip strength only",
            "Bunting ability",
          ],
          correctIndex: 1,
          explanation: "Covering the center fielder's vast territory comes from elite straight-line speed (to run down deep balls) combined with explosive first-step quickness and acceleration (to get a great jump and break in any direction). These are built through sprint training, acceleration drills, and reaction work. Combined with change-of-direction agility and the reads and routes that turn speed into range, they're what let the center fielder cover the most ground.",
        },
        {
          id: "baseball-14-05-q3",
          type: "Arm",
          challenge: `  Playing the deepest position in the outfield, a
  center fielder often has to make long throws all
  the way to the bases or the plate.`,
          text: "How does a center fielder build the arm for the long throws his position requires?",
          options: [
            "By never throwing in practice",
            "Through long-toss, sound throwing mechanics, and rotator-cuff and scapular strengthening to build and protect a strong arm",
            "By only running sprints",
            "By throwing as hard as possible with no warm-up",
          ],
          correctIndex: 1,
          explanation: "Because center field is the deepest outfield position, the center fielder must make long throws, so he builds a strong, accurate arm through long-toss (developing arm strength safely), sound throwing mechanics, and rotator-cuff and scapular strengthening to protect the shoulder. Core strength powers the crow-hop throw. This arm-building and arm-care foundation lets the center fielder make the long throws his deep position requires while staying healthy.",
        },
        {
          id: "baseball-14-05-q4",
          type: "Profile",
          challenge: `  A young player asks how to think about the ideal
  center fielder's physical profile.`,
          text: "How is the ideal center fielder's body best described?",
          options: [
            "A slow, powerful slugger's build",
            "Like an elite sprinter with a strong arm — the fastest, most explosive outfielder, with the endurance to cover the most ground and the arm to make long throws",
            "Only maximum size and weight",
            "Only flexibility, with no speed",
          ],
          correctIndex: 1,
          explanation: "The ideal center fielder's body is like an elite sprinter with a strong arm — the fastest, most explosive, most athletic outfielder, built for elite speed and acceleration to cover the most ground, with the endurance to do it all game and a strong arm for the long throws. The position rewards the most complete athletic profile in the outfield. Combined with the reads and routes that turn speed into range, this is the physical foundation of center-field defense.",
        },
      ],
    },
  },

  // ─── baseball-14-06: The Throw and Long Throws ────────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Truist Park",
      location: "Atlanta, Georgia",
      era: "Modern",
      emoji: "🎯",
    },
    id: "baseball-14-06",
    order: 6,
    title: "The Throw and the Long Relay",
    subtitle: "The crow-hop, the deepest throws, and hitting the cutoff",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-06", name: "Long Gun", emoji: "🎯" },
    challengeType: "quiz",
    info: {
      tagline: "From the deepest spot on the field, the center fielder's throws are the longest — strong, low, and through the cutoff man.",
      year: 1995,
      overview: [
        "The center fielder makes the longest throws in the outfield because he plays the deepest position, so a strong, accurate arm and sound throwing mechanics are essential. The same principles apply as for any outfielder: the crow-hop to generate a strong throw, a four-seam grip and a low, carrying trajectory, and hitting the cutoff man. But the center fielder's throws — to third base, home plate, and second base — are often the longest and most important, and the long distance makes the relay system especially important on deep balls.",
        "The crow-hop and low trajectory generate the center fielder's long throws. After fielding or catching, he takes a crow-hop to gather momentum and throws over the top with a four-seam grip on a low, carrying line — not a high rainbow that loses speed and sails over the cutoff man. From the deep center-field position, a low, strong throw on a line gets to the target faster and stays catchable for the cutoff man. The center fielder's arm strength, combined with good footwork and a low trajectory, lets him make the long throws his position requires.",
        "On the deepest balls, the relay system is essential because even a strong arm can't always reach the target from the wall. A middle infielder sprints out as the relay man, and the center fielder throws a strong, accurate throw to the relay man, who turns and relays it to the base. On most throws, the center fielder hits the cutoff man, who can relay, redirect to catch a trailing runner, or let the throw through. Because the center fielder's throws are the longest, hitting the cutoff and relay men accurately is especially important to control the running game.",
      ],
      technical: {
        title: "Long Throws, the Crow-Hop, and the Relay",
        body: [
          "Generate the long throw: after fielding or catching, take a crow-hop to gather momentum and throw over the top with a four-seam grip on a low, carrying line — not a high rainbow. From the deep center-field position, a low, strong throw gets to the target faster and stays catchable for the cutoff man. Arm strength plus footwork and a low trajectory make the long throw.",
          "The relay and cutoff: on the deepest balls, a middle infielder sprints out as the relay man; the center fielder throws a strong, accurate throw to him, and he relays it to the base. On most throws, hit the cutoff man, who can relay, redirect to catch a trailing runner, or let the throw through. Because the center fielder's throws are the longest, accurately hitting the cutoff and relay men is especially important to control the running game.",
        ],
        codeExample: {
          label: "The Center Fielder's Long Throw",
          code: `  GENERATE THE LONG THROW (deepest position):
  1. Field / catch → CROW-HOP (gather momentum)
  2. Over the top, FOUR-SEAM grip
  3. LOW, carrying LINE (not a high rainbow) →
     faster + catchable for the cutoff

  DEEPEST BALLS → THE RELAY:
  → A middle infielder sprints out as the RELAY man
  → Throw a strong, accurate throw to HIM → he
    relays it to the base (even a strong arm can't
    always reach from the wall)

  MOST THROWS → HIT THE CUTOFF man:
  → He can relay / redirect (catch a trailing
    runner) / let it through

  Longest throws → accurately hitting the cutoff +
  relay men is ESPECIALLY important.`,
        },
      },
      incident: {
        title: "The Long Throw and the Relay",
        when: "1995 — fundamentals-driven defense",
        where: "Truist Park and ballparks across the game",
        impact: "From the deepest position on the field, the center fielder's long throws and the relay system that supports them are essential to controlling the running game — turning deep hits into held runners through strong, accurate throws to the cutoff and relay men.",
        body: [
          "The center fielder's throws are the longest in the outfield, and controlling the running game from the deepest position requires both arm strength and the relay system. On a deep ball to the wall, even a strong-armed center fielder often can't reach the target base on a fly, so a middle infielder sprints out as the relay man, and the center fielder's strong, accurate throw to him is turned into a quick relay to the base. On shorter throws, the center fielder hits the cutoff man to keep his options and prevent runners from advancing.",
          "The principle, as for all outfielders, is that a low, accurate throw on a line — generated by the crow-hop and a four-seam grip — is more valuable than a wild rocket, especially over the long distances the center fielder throws. Hitting the cutoff and relay men accurately keeps the defense's options open and controls the running game. For young center fielders, mastering the crow-hop long throw and the discipline to hit the cutoff and relay men is what turns the deepest position's arm into a genuine weapon.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deep Ball, Long Throw Needed", sub: "the deepest position", type: "system" },
          { label: "Crow-Hop, Four-Seam, Low Line", sub: "generate the long throw", type: "attacker" },
          { label: "Hit the Cutoff / Relay Man", sub: "relay, redirect, or let go", type: "victim" },
          { label: "Runner Held, Options Kept", sub: "control the running game", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Cutoff-and-relay systems formalized for long outfield throws" },
        { year: 1972, event: "Strong-armed outfielders set the standard for controlling runners" },
        { year: 1995, event: "Crow-hop long throws and relay discipline drilled as core defense", highlight: true },
        { year: 2015, event: "Statcast measures outfield arm strength and throw accuracy" },
        { year: 2020, event: "Throwing mechanics and relay alignment refined in development" },
      ],
      keyTakeaways: [
        "The center fielder makes the longest outfield throws because he plays the deepest position",
        "Generate the long throw with a crow-hop, a four-seam grip, and a low, carrying line — not a high rainbow",
        "On the deepest balls, throw to the relay man, who turns and relays it to the base",
        "Hit the cutoff and relay men accurately — especially important over the center fielder's long throws — to control the running game",
      ],
      references: [
        { title: "USA Baseball: Outfield Throwing and Relays", url: "https://www.usabaseball.com" },
        { title: "Little League: Outfield Fundamentals", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Arm and Cutoffs", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-06-q1",
          type: "Longest Throws",
          challenge: `  A coach notes that one outfield position makes the
  longest throws to the bases and home plate.`,
          text: "Why does the center fielder make the longest outfield throws?",
          options: [
            "Because center fielders have the weakest arms",
            "Because center field is the deepest outfield position, so throws to the bases and home are the longest",
            "Because center fielders never throw",
            "Because the rules require longer throws from center",
          ],
          correctIndex: 1,
          explanation: "The center fielder makes the longest outfield throws because he plays the deepest position on the field — farthest from the bases and home plate. So his throws to third, home, and second are the longest and most demanding, requiring a strong, accurate arm and sound mechanics. The long distances also make the relay system especially important on deep balls, since even a strong arm can't always reach the target from the wall.",
        },
        {
          id: "baseball-14-06-q2",
          type: "Trajectory",
          challenge: `  From deep center field, an outfielder unleashes a
  high, looping rainbow throw toward home. It arrives
  late and sails over the cutoff man.`,
          text: "Why should the center fielder's long throws be on a low, carrying line?",
          options: [
            "High rainbow throws are always better over long distances",
            "A low line gets to the target faster and stays catchable for the cutoff man, while a high rainbow is slow and sails over the cutoff's reach",
            "Trajectory doesn't matter on long throws",
            "Low throws can't travel far enough",
          ],
          correctIndex: 1,
          explanation: "Even over long distances, the center fielder's throws should be on a low, carrying line — not a high rainbow. A low throw gets to the target faster and stays at a height where the cutoff or relay man can catch it to relay or redirect. A high, looping throw is slow and sails over the cutoff man's reach, removing the defense's options. Generated by the crow-hop and a four-seam grip, the strong, low throw is the goal.",
        },
        {
          id: "baseball-14-06-q3",
          type: "Relay",
          challenge: `  A ball rolls to the wall in the deepest part of
  center field. The center fielder retrieves it,
  but he's too far away to throw home on a fly.`,
          text: "How does the defense get the ball home from the deepest part of the park?",
          options: [
            "The center fielder must throw it all the way home himself",
            "A middle infielder sprints out as the relay man; the center fielder throws to him, and he relays it home — turning one long throw into two quicker ones",
            "The ball is conceded as a home run",
            "The center fielder runs the ball back to the infield",
          ],
          correctIndex: 1,
          explanation: "From the deepest part of the park, even a strong-armed center fielder can't always reach home on a fly, so a middle infielder sprints out to become the relay man. The center fielder throws a strong, accurate throw to the relay man, who turns and relays it home — turning one long throw into two quicker, more accurate ones. The relay system is essential for getting the ball in from deep center field to control the running game.",
        },
        {
          id: "baseball-14-06-q4",
          type: "Hit the Cutoff",
          challenge: `  On a play developing at the plate, a center fielder
  airmails his long throw over the cutoff man's head.
  A trailing runner advances because the throw
  couldn't be redirected.`,
          text: "Why is hitting the cutoff man especially important on the center fielder's long throws?",
          options: [
            "It isn't — center fielders should always throw directly home",
            "Because the throws are so long, accurately hitting the cutoff man keeps the defense's options to relay or redirect, while an overthrow lets runners advance",
            "The cutoff man has no role on long throws",
            "Hitting the cutoff slows the play down for no reason",
          ],
          correctIndex: 1,
          explanation: "Because the center fielder's throws are the longest, accurately hitting the cutoff man is especially important. A low, accurate throw to or through the cutoff man lets the defense relay it, redirect it to catch a trailing runner, or let it through — controlling the running game. Overthrowing the cutoff man on a long throw removes those options and lets trailing runners advance. Accuracy to the cutoff and relay men is essential over the long distances the center fielder throws.",
        },
      ],
    },
  },

  // ─── baseball-14-07: Priority, Calling Off, and Communication ─────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Citi Field",
      location: "Queens, New York",
      era: "Modern",
      emoji: "📣",
    },
    id: "baseball-14-07",
    order: 7,
    title: "Priority, Calling Off, and Communication",
    subtitle: "Leading the outfield and preventing collisions",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-07", name: "I Got It", emoji: "📣" },
    challengeType: "quiz",
    info: {
      tagline: "The center fielder runs the outfield — loud, clear communication on every ball prevents collisions and dropped balls.",
      year: 1995,
      overview: [
        "The center fielder is the captain of the outfield, and communication is central to the role. On any ball that two outfielders can reach, someone must call for it loudly and clearly, and the center fielder has priority — he can call off either corner outfielder and take the ball, because his angle and speed usually make him the better play. Loud, early communication ('I got it!' or 'You take it!') prevents the two most dangerous outcomes on a shared ball: a collision between converging fielders, or both pulling up and letting the ball drop.",
        "The priority order in the outfield is clear: the center fielder has priority over both corner outfielders, and an outfielder generally has priority over an infielder on a ball both can reach (the outfielder is moving in toward the play with a better angle). When the center fielder calls for a ball, the corner outfielder defers immediately and backs up the play. The center fielder must call early and loudly enough to be heard over the crowd, and must also yield clearly when a corner outfielder has the better play on a ball the center fielder can't reach as well.",
        "Communication extends beyond calling for catches. The center fielder positions the corner outfielders, relays the situation, communicates on relays and cutoffs, and coordinates the outfield's response to every ball. As the captain, he leads the outfield the way the shortstop leads the infield. Clear, constant communication — calling for balls, deferring when appropriate, positioning teammates, and coordinating plays — is what makes the outfield function as a coordinated unit and prevents the collisions and dropped balls that miscommunication causes.",
      ],
      technical: {
        title: "Priority, Calling for Balls, and Outfield Communication",
        body: [
          "Priority and calling: the center fielder has priority over both corner outfielders, and outfielders generally have priority over infielders on shared balls. On any ball two fielders can reach, someone must call loudly and early ('I got it!' / 'You take it!') to prevent a collision or both pulling up. When the center fielder calls, the corner outfielder defers and backs up; the center fielder also yields clearly when a corner outfielder has the better play.",
          "Leading the outfield: the center fielder positions the corner outfielders, relays the situation, communicates on relays and cutoffs, and coordinates the outfield's response to every ball — leading it the way the shortstop leads the infield. Clear, constant communication makes the outfield a coordinated unit and prevents the collisions and dropped balls that miscommunication causes.",
        ],
        codeExample: {
          label: "Priority and Communication",
          code: `  PRIORITY ORDER (shared balls):
  → CENTER FIELDER over both corner outfielders
  → OUTFIELDER over infielder (better angle, moving
    in toward the play)

  CALL EVERY SHARED BALL:
  ✓ LOUD + EARLY: "I GOT IT!" or "YOU TAKE IT!"
  → Prevents the 2 dangers: a COLLISION, or both
    pulling up + the ball DROPS
  → CF calls → corner OF DEFERS + backs up
  → CF YIELDS clearly when a corner OF has the
    better play

  LEAD THE OUTFIELD (like the SS leads the IF):
  → Position the corner OF; relay the situation;
    communicate relays/cutoffs; coordinate every ball

  Constant, clear communication = a coordinated
  outfield, no collisions or dropped balls.`,
        },
      },
      incident: {
        title: "The Call That Prevents the Collision",
        when: "1995 — fundamentals-driven defense",
        where: "Citi Field and ballparks across the game",
        impact: "The center fielder's priority and loud, early communication on shared balls are what prevent the dangerous collisions and dropped balls that miscommunication causes — making clear calling one of the most important and safety-critical outfield fundamentals.",
        body: [
          "On a ball hit between two outfielders, the moment of truth is communication. If neither calls for it, both may pull up and let it drop, or worse, both converge and collide at full speed — a dangerous outcome that has caused serious injuries. The center fielder's priority and a loud, early call resolve this: he calls 'I got it!' to take the ball, the corner outfielder defers and backs up, and the collision and the dropped ball are both avoided. Clear calling is as much a safety skill as a defensive one.",
          "The priority system — center fielder over the corners, outfielders over infielders — combined with loud, early communication, is what makes the outfield function as a coordinated unit. The center fielder, as captain, leads this: calling for balls, deferring when a corner outfielder has the better play, positioning teammates, and coordinating every play. For young center fielders, learning to communicate loudly and early, and to lead the outfield, is essential — it prevents collisions and dropped balls and makes the whole outfield better.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball Between Two Fielders", sub: "collision risk", type: "attacker" },
          { label: "Priority + Loud Early Call", sub: "CF over corners; 'I got it!'", type: "system" },
          { label: "One Takes It, One Defers", sub: "the other backs up", type: "victim" },
          { label: "Collision Avoided, Ball Caught", sub: "coordinated outfield", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Outfield priority order formalized in coaching" },
        { year: 1980, event: "Loud, early calling emphasized as a safety and defensive fundamental" },
        { year: 1995, event: "Center-fielder-led outfield communication drilled as core defense", highlight: true },
        { year: 2010, event: "Communication systems refined to prevent collisions" },
        { year: 2020, event: "Outfield leadership and calling emphasized in development" },
      ],
      keyTakeaways: [
        "The center fielder has priority over both corner outfielders, and outfielders have priority over infielders on shared balls",
        "Call every shared ball loudly and early ('I got it!' / 'You take it!') to prevent collisions and dropped balls",
        "When the center fielder calls, the corner outfielder defers and backs up; the center fielder yields when a corner outfielder has the better play",
        "As captain, the center fielder positions teammates, communicates on relays and cutoffs, and leads the outfield",
      ],
      references: [
        { title: "USA Baseball: Outfield Communication and Priority", url: "https://www.usabaseball.com" },
        { title: "Little League: Team Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Fundamentals", url: "https://www.mlb.com/youth-programs" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-07-q1",
          type: "Priority",
          challenge: `  A fly ball is hit between the center fielder and
  the right fielder, and both can reach it.`,
          text: "Who has priority, and what should happen?",
          options: [
            "The right fielder has priority and takes it silently",
            "The center fielder has priority — he calls for it loudly and early, the right fielder defers and backs up",
            "Both should go for it without calling",
            "Neither should call; they should both pull up",
          ],
          correctIndex: 1,
          explanation: "The center fielder has priority over both corner outfielders, so on a ball both can reach, he calls for it loudly and early ('I got it!'), the right fielder defers immediately and backs up the play. This priority, combined with a clear call, prevents a collision or both pulling up and letting the ball drop. His angle and speed usually make him the better play, which is why the center fielder has priority.",
        },
        {
          id: "baseball-14-07-q2",
          type: "Collision",
          challenge: `  On a ball in the gap, neither outfielder calls for
  it. Both converge at full speed and nearly collide,
  and the ball drops between them.`,
          text: "What would have prevented this dangerous outcome?",
          options: [
            "Both fielders running faster",
            "A loud, early call from the player with priority (the center fielder), so one takes the ball and the other defers and backs up",
            "Neither fielder going for the ball",
            "The infielders covering the gap",
          ],
          correctIndex: 1,
          explanation: "The dangerous near-collision and dropped ball happened because no one called for it. A loud, early call from the player with priority — the center fielder — resolves the situation: he calls 'I got it!', takes the ball, and the corner outfielder defers and backs up. Clear, early communication prevents both the collision (a serious injury risk) and the dropped ball. Calling for shared balls is a critical safety and defensive fundamental.",
        },
        {
          id: "baseball-14-07-q3",
          type: "Yielding",
          challenge: `  A ball is hit that a corner outfielder is better
  positioned to catch moving toward the infield,
  while the center fielder would have to backhand
  it moving away.`,
          text: "What should the center fielder do when a corner outfielder has the better play?",
          options: [
            "Always call for it anyway because he has priority",
            "Yield clearly, letting the corner outfielder (with the better angle for the catch and throw) take it, then back up the play",
            "Run into the corner outfielder to take the ball",
            "Stand still and watch without communicating",
          ],
          correctIndex: 1,
          explanation: "Although the center fielder has priority, he should yield clearly when a corner outfielder has the genuinely better play — for instance, when the corner outfielder is moving toward the infield to catch and throw while the center fielder would be moving away. Good communication means calling for balls he should take AND clearly yielding the ones a teammate should take, then backing up the play. Priority is about preventing collisions, not taking every ball regardless of the better play.",
        },
        {
          id: "baseball-14-07-q4",
          type: "Leadership",
          challenge: `  Beyond calling for catches, the center fielder
  positions the corner outfielders, relays the
  situation, and coordinates relays and cutoffs.`,
          text: "What does this illustrate about the center fielder's role?",
          options: [
            "He's overstepping — outfielders should only field their own area",
            "As the captain of the outfield, he leads it the way the shortstop leads the infield — positioning teammates and coordinating every play through constant communication",
            "This is the coach's job, not the center fielder's",
            "Communication only matters on shared balls",
          ],
          correctIndex: 1,
          explanation: "The center fielder is the captain of the outfield and leads it the way the shortstop leads the infield. Beyond calling for catches, he positions the corner outfielders, relays the situation, communicates on relays and cutoffs, and coordinates the outfield's response to every ball. This constant communication and leadership make the outfield function as a coordinated unit and prevent the collisions and dropped balls that miscommunication causes.",
        },
      ],
    },
  },

  // ─── baseball-14-08: Backing Up the Middle ────────────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Petco Park",
      location: "San Diego, California",
      era: "Modern",
      emoji: "🗺️",
    },
    id: "baseball-14-08",
    order: 8,
    title: "Backing Up Second Base and the Middle",
    subtitle: "Where the center fielder goes on every play",
    category: "sports",
    xp: 90,
    badge: { id: "baseball-14-badge-08", name: "Backstop", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "When the ball isn't his to catch, the center fielder is backing up the middle — second base, the gaps, and the corner outfielders.",
      year: 1995,
      overview: [
        "The center fielder has a job on every play, and when the ball isn't his to catch, much of it is backing up the middle of the field. His most important backup responsibility is backing up second base — on steal attempts, on throws from the catcher or pitcher to second, and on balls hit up the middle. Positioned in straightaway center, the center fielder is perfectly placed to back up second base, so that an errant throw or a ball that gets through doesn't allow the runner to advance further. This is a constant, essential responsibility.",
        "The center fielder also backs up the corner outfielders on balls he can't reach but can get behind. On a ball to the gap that the corner outfielder takes, or a ball down the line, the center fielder hustles to back up the play in case it's misplayed. And he backs up balls hit through the infield up the middle. The principle, as for all outfielders, is that an overthrow or a misplayed ball in his area of responsibility should never go unguarded — the center fielder positions behind the play so a misplay doesn't cost extra bases.",
        "Knowing his backup responsibilities and reacting instantly is part of the center fielder's job on every pitch. Backing up second base on a steal, backing up the corner outfielders on balls in the gaps and down the lines, and backing up balls up the middle — these are constant, unglamorous responsibilities that prevent extra bases on misplays. Combined with his catching, throwing, and leadership, the center fielder's backup work makes him a contributor on every play, even when the ball isn't hit to him. He's never standing still.",
      ],
      technical: {
        title: "Backup Responsibilities in the Middle",
        body: [
          "Back up second base: the center fielder's most important backup responsibility. Positioned in straightaway center, he backs up second on steal attempts, on throws from the catcher or pitcher to second, and on balls hit up the middle — so an errant throw or a ball that gets through doesn't let the runner advance further. This is constant and essential.",
          "Back up the corners and the middle: hustle to back up the corner outfielders on balls in the gaps and down the lines that he can get behind, and back up balls hit through the infield up the middle. Position behind the play so an overthrow or misplay doesn't cost extra bases. Know your backup responsibilities and react instantly on every pitch — the center fielder is never standing still.",
        ],
        codeExample: {
          label: "Center Fielder — Backups in the Middle",
          code: `  MOST IMPORTANT: BACK UP SECOND BASE
  → Steal attempts; throws from catcher/pitcher to 2nd;
    balls hit up the middle
  → Straightaway CF = perfectly placed to back up 2nd
  → An errant throw / ball that gets through never lets
    the runner advance further

  ALSO BACK UP:
  → The CORNER outfielders on gap balls + balls down
    the lines (get behind the play)
  → Balls through the infield UP THE MIDDLE

  PRINCIPLE: an overthrow / misplay in your area never
  goes UNGUARDED → position BEHIND the play.

  Know your backups + react instantly EVERY pitch.
  The CF is NEVER standing still.`,
        },
      },
      incident: {
        title: "Backing Up Second Base",
        when: "1995 — fundamentals-driven defense",
        where: "Petco Park and ballparks across the game",
        impact: "The center fielder backing up second base on steals and throws — positioned perfectly in straightaway center — is a constant, essential responsibility that turns errant throws into held runners rather than extra bases.",
        body: [
          "Backing up second base is the center fielder's signature backup responsibility. On a steal attempt, the catcher's throw to second occasionally gets past the covering middle infielder — and the center fielder, positioned in straightaway center, is the only player who can keep the ball from rolling to the wall and the runner from advancing to third or scoring. Most of the time the throw is caught and nothing happens, but on the occasional errant throw, the backing-up center fielder saves a base or a run.",
          "The same is true for throws from the pitcher to second on pickoffs and for balls hit up the middle. The center fielder's straightaway position makes him the natural backstop for the middle of the field. Combined with backing up the corner outfielders on balls in the gaps and down the lines, this backup work makes the center fielder a constant contributor even when the ball isn't his to catch. For young center fielders, learning to back up second base and the middle on every play is as important as catching fly balls.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ball/Throw to the Middle", sub: "steal, throw, or ball up the middle", type: "attacker" },
          { label: "Center Fielder Backs Up", sub: "straightaway = perfect position", type: "system" },
          { label: "Behind Second Base / the Play", sub: "errant throw guarded", type: "victim" },
          { label: "Base or Run Saved", sub: "never standing still", type: "result" },
        ],
      },
      timeline: [
        { year: 1950, event: "Outfield backup responsibilities formalized in coaching" },
        { year: 1980, event: "Center-field backup of second base standardized as essential" },
        { year: 1995, event: "Backing up the middle drilled as a hallmark of sound defense", highlight: true },
        { year: 2010, event: "Positioning data refines outfield backup alignment" },
        { year: 2020, event: "Backup systems and communication emphasized in development" },
      ],
      keyTakeaways: [
        "The center fielder's most important backup responsibility is backing up second base on steals, throws, and balls up the middle",
        "His straightaway position makes him perfectly placed to back up the middle of the field",
        "He also backs up the corner outfielders on balls in the gaps and down the lines, and balls through the infield",
        "Know your backup responsibilities and react instantly on every pitch — the center fielder is never standing still",
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
          id: "baseball-14-08-q1",
          type: "Back Up Second",
          challenge: `  A runner attempts to steal second base. The catcher
  fires a throw to second, and it skips past the
  covering middle infielder.`,
          text: "Where should the center fielder be on a throw to second on a steal?",
          options: [
            "Standing in center field watching",
            "Backing up second base, positioned behind the bag so an errant throw doesn't let the runner advance to third",
            "Running to cover home plate",
            "Charging toward the infield to make the tag",
          ],
          correctIndex: 1,
          explanation: "On a steal attempt and the throw to second, the center fielder backs up second base — positioned behind the bag in straightaway center so that if the throw gets past the covering middle infielder, he can keep the ball from rolling away and the runner from advancing to third or scoring. His straightaway position makes him the perfect backstop for the middle. This is the center fielder's most important and constant backup responsibility.",
        },
        {
          id: "baseball-14-08-q2",
          type: "Position",
          challenge: `  A coach explains that the center fielder's normal
  position makes him ideal for one particular backup
  job.`,
          text: "Why is the center fielder perfectly placed to back up second base?",
          options: [
            "He isn't — the corner outfielders back up second",
            "His straightaway position in center field puts him directly behind second base, ideal for backing up throws and balls in the middle",
            "He plays right next to second base",
            "Second base never needs backing up",
          ],
          correctIndex: 1,
          explanation: "The center fielder plays straightaway in center, which puts him directly behind second base — making him perfectly placed to back up throws to second (on steals and pickoffs) and balls hit up the middle. No other outfielder is as well positioned to guard the middle of the field. This is why backing up second base is the center fielder's signature and most important backup responsibility.",
        },
        {
          id: "baseball-14-08-q3",
          type: "Back Up the Corners",
          challenge: `  A ball is hit down the right-field line that the
  right fielder fields. The center fielder, who
  couldn't reach it, hustles over behind the play.`,
          text: "Why does the center fielder back up the corner outfielders on balls he can't reach?",
          options: [
            "He shouldn't — he should stay in center",
            "In case the corner outfielder misplays the ball, the backing-up center fielder is there to prevent the misplay from becoming extra bases",
            "To take the ball away from the corner outfielder",
            "To argue with the umpire",
          ],
          correctIndex: 1,
          explanation: "The center fielder backs up the corner outfielders on balls he can't reach but can get behind, so that if the corner outfielder misplays the ball — bobbles it or has it get past him — the backing-up center fielder is there to field it and prevent the misplay from becoming extra bases. Backing up the corners on gap balls and balls down the lines is part of the center fielder's constant responsibility to never let a misplay in his area go unguarded.",
        },
        {
          id: "baseball-14-08-q4",
          type: "Always Working",
          challenge: `  A center fielder stands flat-footed and watches
  when the ball isn't hit directly to him, missing
  backup positions.`,
          text: "What should the center fielder be doing when the ball isn't his to catch?",
          options: [
            "Relaxing until a ball is hit to him",
            "Backing up second base, the corner outfielders, or balls up the middle — based on his pre-pitch responsibilities, so he's never standing still",
            "Walking toward the dugout",
            "Standing in the same spot regardless of the play",
          ],
          correctIndex: 1,
          explanation: "The center fielder is never standing still when the ball is in play. When the ball isn't his to catch, he's backing up second base (on steals and throws), backing up the corner outfielders (on gap balls and balls down the lines), or backing up balls up the middle — based on his pre-pitch responsibilities. Knowing these backup jobs and reacting instantly makes him a constant contributor on every play, even when the ball isn't hit to him.",
        },
      ],
    },
  },

  // ─── baseball-14-09: Situational IQ ───────────────────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Yankee Stadium",
      location: "Bronx, New York",
      era: "Modern",
      emoji: "🧠",
    },
    id: "baseball-14-09",
    order: 9,
    title: "Center Field Situational IQ",
    subtitle: "Positioning, leading the outfield, and the elements",
    category: "sports",
    xp: 95,
    badge: { id: "baseball-14-badge-09", name: "OF Field General", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "The center fielder thinks for the whole outfield — his pre-pitch plan covers his own play and the corners he's positioning.",
      year: 2000,
      overview: [
        "As the captain of the outfield, the center fielder processes the situation for himself and the whole outfield before each pitch. The key reads: score, inning, outs, runners and their speed, the count, and the hitter's tendencies. He sets his own depth and position (normal, shallow, deep no-doubles, shaded to a gap) and, as captain, helps position the corner outfielders. He also pre-decides where the play is and where he'll throw if the ball is hit to him. Because he's leading the outfield, his thinking covers the whole unit, not just his own play.",
        "Positioning decisions flow from the situation. The center fielder plays deep in no-doubles situations (late in close games) to prevent extra-base hits over his head, shallower when a play at the plate is likely, and shaded toward a gap based on the hitter's tendencies. He positions the corner outfielders in concert — for instance, shading the whole outfield toward the pull side against a pull hitter. He also accounts for the elements — the sun, the wind, and the field's quirks — and checks them before each at-bat, leading the outfield's adjustments.",
        "Leadership and communication tie it together. The center fielder confirms the situation and positioning with the corner outfielders, communicates on shared balls and relays, and stays aware of the runners and outs. Knowing the situation and translating it into positioning, a pre-made plan, and the outfield's alignment — while accounting for the elements — is the essence of playing center field. Like the shortstop in the infield, the center fielder is the thinking leader of the outfield, and his pre-pitch thinking covers the whole unit.",
      ],
      technical: {
        title: "Pre-Pitch Thinking for the Outfield Captain",
        body: [
          "Decide before the pitch: process the situation (score, outs, runners and speed, count, hitter) and set your depth and position (normal, shallow, deep no-doubles, shaded to a gap). As captain, help position the corner outfielders in concert. Pre-decide where the play is and where you'll throw if the ball is hit to you.",
          "Elements and leadership: account for the sun, wind, and field's quirks, checking them before each at-bat and leading the outfield's adjustments. Confirm the situation and positioning with the corner outfielders, communicate on shared balls and relays, and stay aware of the runners and outs. The center fielder is the thinking leader of the outfield, and his pre-pitch thinking covers the whole unit.",
        ],
        codeExample: {
          label: "Center Field Situational Checklist (the Captain)",
          code: `  EVERY PITCH, KNOW (for you AND the outfield):
  ✓ Score, inning, outs, count
  ✓ Runners — where, and HOW FAST?
  ✓ DEPTH + position: normal / shallow / DEEP
    (no-doubles) / shade to a gap (hitter)
  ✓ POSITION the corner outfielders in concert
  ✓ If it's hit to me → where's the play + where do
    I throw? (pre-decide)

  THE ELEMENTS (check before each at-bat):
  → SUN, WIND, FIELD quirks → lead the outfield's
    adjustments

  LEAD: confirm positioning with the corners,
  communicate shared balls + relays, track runners/outs.

  The CF thinks for the WHOLE outfield.`,
        },
      },
      incident: {
        title: "The Thinking Captain of the Outfield",
        when: "2000s — the analytics-and-IQ era",
        where: "Yankee Stadium and ballparks across the game",
        impact: "The best center fielders are recognized as much for their leadership and situational thinking — positioning the whole outfield, pre-deciding throws, and accounting for the elements — as for their physical tools, because the captain's thinking shapes the entire outfield.",
        body: [
          "The defining trait of a great center fielder, beyond his physical tools, is his mind and leadership. As the captain, he thinks for the whole outfield — processing the situation, setting his own positioning and the corner outfielders', pre-deciding where he'll throw, and accounting for the elements — all before the pitch. This anticipation lets him and the whole outfield react instantly and correctly when the ball is in play. A center fielder who has to figure out the play after the ball is hit is a step behind, and so is the outfield he leads.",
          "Modern data informs positioning, but the on-field thinking and leadership belong to the captain. The best center fielders position the whole outfield, communicate constantly, and pre-decide their plays. For young center fielders, the lesson is to think the game for the whole outfield every pitch — set the depth and the corners' positioning, pre-decide the throw, account for the elements, and communicate. Like the shortstop in the infield, the center fielder's thinking is what makes the physical tools, his own and his teammates', count.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Read the Situation", sub: "for self and the outfield", type: "system" },
          { label: "Set Positioning (Self + Corners)", sub: "depth, shade, the elements", type: "attacker" },
          { label: "Pre-Decide the Play", sub: "where's the throw?", type: "victim" },
          { label: "Lead Instant Execution", sub: "the captain thinks for the OF", type: "result" },
        ],
      },
      timeline: [
        { year: 1980, event: "Situational outfield depth and no-doubles positioning standardized" },
        { year: 2000, event: "Center-fielder-led outfield positioning and IQ emphasized", highlight: true },
        { year: 2010, event: "Positioning data integrated with the center fielder's leadership" },
        { year: 2015, event: "Statcast informs outfield positioning and depth" },
        { year: 2023, event: "Outfield positioning judgment refined with data and instincts" },
      ],
      keyTakeaways: [
        "As captain, the center fielder processes the situation for himself and the whole outfield before each pitch",
        "He sets his own depth and position and helps position the corner outfielders in concert with the hitter and situation",
        "He pre-decides where the play is and where he'll throw, and accounts for the sun, wind, and field's quirks",
        "He confirms positioning with the corners, communicates on shared balls and relays, and leads the outfield",
      ],
      references: [
        { title: "USA Baseball: Outfield IQ and Leadership", url: "https://www.usabaseball.com" },
        { title: "Little League: Situational Defense", url: "https://www.littleleague.org/player-and-coach-resources/baseball-coaching-guides/" },
        { title: "MLB: Outfield Strategy and Leadership", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-09-q1",
          type: "No-Doubles",
          challenge: `  Bottom of the ninth, defense leading by one run.
  An extra-base hit over the center fielder's head
  would put the tying run in scoring position.`,
          text: "How should the center fielder position himself in this no-doubles situation?",
          options: [
            "Play shallow to catch bloopers",
            "Play deep (no-doubles depth) to prevent extra-base hits over his head, conceding a single in front of him",
            "Play directly behind second base",
            "Move to a corner outfield spot",
          ],
          correctIndex: 1,
          explanation: "Late in a close game when an extra-base hit would be especially damaging, the center fielder plays deep (a 'no-doubles' alignment) to prevent balls from getting over his head for doubles or triples. This concedes a single dropping in front of him — far less costly than an extra-base hit that puts the tying run in scoring position. Positioning is a situational decision based on the score, inning, and the cost of an extra-base hit.",
        },
        {
          id: "baseball-14-09-q2",
          type: "Captain",
          challenge: `  Before a pitch, the center fielder shades himself
  toward right-center and signals both corner
  outfielders to shift toward the pull side against
  a strong pull hitter.`,
          text: "What does this illustrate about the center fielder's role?",
          options: [
            "He's overstepping — outfielders position only themselves",
            "As the captain, he positions the whole outfield in concert based on the hitter and situation, not just himself",
            "This is the coach's job, not the center fielder's",
            "Positioning has no effect on defense",
          ],
          correctIndex: 1,
          explanation: "As the captain of the outfield, the center fielder positions the whole unit — shading himself and signaling the corner outfielders to shift based on the hitter and situation (here, toward the pull side against a pull hitter). He must know the whole outfield's positioning, not just his own. This leadership, like the shortstop's in the infield, is part of the center fielder's role and helps the outfield cover the most likely areas.",
        },
        {
          id: "baseball-14-09-q3",
          type: "The Elements",
          challenge: `  At a windy ballpark with a bright sky, the center
  fielder checks the wind and notes where the sun
  is before the batter steps in.`,
          text: "Why does the center fielder account for the elements before each at-bat?",
          options: [
            "The elements have no effect on play",
            "The sun, wind, and field's quirks affect fly balls and visibility, so checking them lets him (and the outfield he leads) read and catch balls correctly and safely",
            "Only infielders need to check the elements",
            "It's just superstition",
          ],
          correctIndex: 1,
          explanation: "The sun, wind, and field's quirks significantly affect fly balls and visibility — wind knocks balls down or carries them, the sun can blind a fielder, and the field has its own dimensions and warning track. The center fielder checks these before each at-bat so he and the outfield he leads can read and catch balls correctly and safely. Accounting for the elements is part of an outfielder's situational awareness that infielders can mostly ignore.",
        },
        {
          id: "baseball-14-09-q4",
          type: "Pre-Decide",
          challenge: `  A center fielder catches the ball cleanly but then
  hesitates, unsure where to throw, and a runner
  advances during the delay.`,
          text: "What's the fix for a center fielder who hesitates after catching the ball?",
          options: [
            "Catch the ball faster",
            "Know the situation and pre-decide where the play is and where he'll throw before the ball is hit, so he reacts instantly",
            "Always throw home no matter what",
            "Never throw the ball",
          ],
          correctIndex: 1,
          explanation: "Hesitation after catching comes from not knowing the play in advance. The fix is pre-pitch thinking: the center fielder processes the situation — outs, runners, score — and decides where the play is and where he'll throw before the ball is hit. With the decision pre-made, he fields and throws decisively, without the delay that lets runners advance. As the captain, thinking the game for himself and the outfield every pitch is what makes the physical tools count.",
        },
      ],
    },
  },

  // ─── baseball-14-10: The Greats and Mastery ───────────────────────────────────
  {
    epochId: "baseball-14",
    wonder: {
      name: "Cooperstown",
      location: "Cooperstown, New York",
      era: "Modern",
      emoji: "🏆",
    },
    id: "baseball-14-10",
    order: 10,
    title: "The Greats and the Mastery Mindset",
    subtitle: "What the best center fielders teach about the craft",
    category: "sports",
    xp: 100,
    badge: { id: "baseball-14-badge-10", name: "Center Field Master", emoji: "🏆" },
    challengeType: "quiz",
    info: {
      tagline: "Master center field and you become the outfield captain — the rangy, graceful leader who runs down everything.",
      year: 2016,
      overview: [
        "The greatest center fielders share a set of pursuable traits: a great jump and efficient routes built on elite reads; the speed and range to cover the most ground; sure hands and the ability to make over-the-shoulder catches and rob home runs; a strong, accurate arm for the long throws; priority and leadership to captain the outfield; and the situational intelligence to position the whole unit and pre-decide throws. Ken Griffey Jr., Willie Mays, and Andruw Jones embodied all of it with grace — but the qualities, not the highlights, are what to build.",
        "Mastering center field is about range, leadership, and grace. The position's value comes from covering the most ground — erasing the gaps and robbing home runs — leading and positioning the outfield, throwing accurately from the deepest position, and backing up the middle, all while reading the ball and the situation. A great center fielder anchors the outfield the way a great shortstop anchors the infield. That range and leadership are the heart of the captain's position in the outfield.",
        "The mastery mindset treats center field as the outfield's most complete craft, demanding the most athleticism and the most leadership. That means endless fly-ball and read repetition from straightaway, route running in every direction, catching and wall play, long-toss and cutoff work, communication and positioning drills, and studying situations until the pre-pitch thinking is automatic. The complete center fielder is rangy, sure-handed, strong-armed, communicative, and a leader — the captain of the outfield. Build those qualities, and you become the player the outfield is built around.",
      ],
      technical: {
        title: "The Complete Center Fielder — A Self-Assessment",
        body: [
          "Skills to master: reading the ball and the jump, route running in every direction, catching technique (over-the-shoulder, robbing home runs), the crow-hop long throw and hitting the cutoff and relay men, priority and communication, backing up the middle, and situational positioning. Each is built through deliberate repetition — the most complete outfield skill set.",
          "Mindset to build: range, leadership, communication, and anticipation. Develop the jump, routes, and speed to cover the most ground; lead and position the outfield; throw accurately from the deepest position; and pre-decide plays while reading the situation and the elements. Treat center field as the outfield's most complete craft. The complete center fielder anchors the whole outfield.",
        ],
        codeExample: {
          label: "The Complete Center Fielder — Checklist",
          code: `  READS / RANGE:
  ✓ Read the ball → a great JUMP; routes any direction
  ✓ Cover the MOST ground; erase the gaps

  CATCHING:
  ✓ Over-the-shoulder catch; ROB home runs at the wall

  ARM / THROWS:
  ✓ Crow-hop LONG throws; hit the cutoff + relay men

  TEAM / LEADERSHIP:
  ✓ PRIORITY + loud calls (prevent collisions)
  ✓ POSITION the corner outfielders; back up 2nd + the
    middle
  ✓ CAPTAIN the outfield (like the SS leads the IF)

  MIND:
  ✓ Pre-decide plays; account for sun/wind/field

  Build these → you are the CAPTAIN of the outfield.`,
        },
      },
      incident: {
        title: "The Captains of Center Field",
        when: "2016 — Ken Griffey Jr.'s Hall of Fame induction",
        where: "National Baseball Hall of Fame, Cooperstown, New York",
        impact: "From Willie Mays to Ken Griffey Jr. to Andruw Jones, the greatest center fielders combined elite range, graceful catches, and leadership — proving that mastering center field can make a player the anchor of a great team's outfield and a Hall of Famer.",
        body: [
          "Ken Griffey Jr. was inducted into the Hall of Fame in 2016, the latest in a lineage of great center fielders — Willie Mays, Griffey, Andruw Jones, and others — who combined elite range, graceful catches and home-run robberies, strong arms, and the leadership to captain the outfield. Griffey covered the most ground with effortless grace, robbed home runs at the wall, and anchored the Mariners' outfield. These greats proved that mastering center field can make a player the foundation of a team's outfield defense.",
          "Their careers are the argument that mastering center field — the range, the reads, the catches, the arm, and the leadership — can make a player a great defender and a Hall of Famer. For any young center fielder, the lesson is to pursue the outfield's most complete craft: develop the jump and routes, cover the most ground, rob home runs, throw accurately, and captain the outfield with constant communication. Become the rangy, graceful captain who runs down everything, and you become the player the outfield is built around.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Master Every Skill", sub: "reads, range, catch, throw, lead", type: "system" },
          { label: "Build Range + Leadership", sub: "cover ground, captain the OF", type: "attacker" },
          { label: "Anchor the Outfield", sub: "the captain of the unit", type: "victim" },
          { label: "Become the Captain", sub: "the OF is built around you", type: "result" },
        ],
      },
      timeline: [
        { year: 1954, event: "Willie Mays's 'The Catch' sets the standard for center-field greatness" },
        { year: 1990, event: "Ken Griffey Jr. redefines the position with effortless range and home-run robbery" },
        { year: 2007, event: "Andruw Jones completes ten straight Gold Gloves in center field" },
        { year: 2016, event: "Ken Griffey Jr. inducted into the Hall of Fame", highlight: true },
        { year: 2020, event: "Range, reads, arm, and leadership recognized as the complete center fielder's traits" },
      ],
      keyTakeaways: [
        "The best center fielders combine a great jump and routes, elite range, graceful catches, a strong arm, and leadership",
        "Center field rewards range, leadership, and grace — covering the most ground, robbing home runs, and captaining the outfield",
        "The mastery mindset treats the position as the outfield's most complete craft, demanding the most athleticism and leadership",
        "Become the rangy, graceful captain who runs down everything — the player the outfield is built around",
      ],
      references: [
        { title: "Baseball Hall of Fame: Ken Griffey Jr.", url: "https://baseballhall.org/hall-of-famers/griffey-jr-ken" },
        { title: "USA Baseball: Complete Outfield Development", url: "https://www.usabaseball.com" },
        { title: "MLB: The Value of Outfield Defense", url: "https://www.mlb.com/news" },
      ],
    },
    quiz: {
      questions: [
        {
          id: "baseball-14-10-q1",
          type: "Traits",
          challenge: `  A young player wants to become a complete center
  fielder and asks which qualities to develop.`,
          text: "Which combination of traits defines the best center fielders?",
          options: [
            "Only home-run power",
            "A great jump and routes, elite range, graceful catches and home-run robbery, a strong arm, priority/leadership, and situational IQ",
            "Only a strong arm",
            "Only height",
          ],
          correctIndex: 1,
          explanation: "The best center fielders combine a great jump and efficient routes (from elite reads), the speed and range to cover the most ground, sure hands and the ability to make over-the-shoulder catches and rob home runs, a strong accurate arm for the long throws, priority and leadership to captain the outfield, and situational IQ. Griffey, Mays, and Andruw Jones embodied all of it. It's the outfield's most complete craft of range, catching, arm, and leadership.",
        },
        {
          id: "baseball-14-10-q2",
          type: "Anchor",
          challenge: `  A team builds its outfield around its center
  fielder the way it builds its infield around its
  shortstop.`,
          text: "Why is a great center fielder described as the anchor of the outfield?",
          options: [
            "Because center fielders don't affect the outfield",
            "Because he covers the most ground, makes the hardest catches, throws from the deepest position, and captains the outfield — so his range and leadership anchor the whole unit",
            "Because the center fielder bats cleanup",
            "Because only the corners matter",
          ],
          correctIndex: 1,
          explanation: "A great center fielder anchors the outfield because he covers the most ground, makes the hardest catches (including robbing home runs), throws from the deepest position, and captains the outfield — positioning the corners and leading communication. His range and leadership ripple through the whole unit, much as a great shortstop anchors the infield. That's why teams build their outfields around a great center fielder.",
        },
        {
          id: "baseball-14-10-q3",
          type: "Mindset",
          challenge: `  A talented center fielder relies on his speed and
  rarely practices reads, routes, catching, throwing,
  or communication, assuming his athleticism is
  enough.`,
          text: "What does the mastery mindset say about this approach?",
          options: [
            "It's fine — center field requires no skill practice",
            "Center field is the outfield's most complete craft, demanding deliberate repetition of reads, routes, catching, throwing, and communication — athleticism alone isn't enough",
            "Only hitting practice matters",
            "Practicing defense makes outfielders worse",
          ],
          correctIndex: 1,
          explanation: "The mastery mindset treats center field as the outfield's most complete craft, mastered through deliberate repetition — reading the ball, routes in every direction, catching and wall play, the long throw, and communication and positioning. Athleticism is the foundation, but without practicing these skills and studying situations, a talented player won't reach the position's potential. The greats like Griffey earned their grace and leadership through relentless practice.",
        },
        {
          id: "baseball-14-10-q4",
          type: "Legacy",
          challenge: `  From Willie Mays to Ken Griffey Jr. to Andruw
  Jones, a lineage of center fielders has anchored
  great outfields with range, grace, and leadership.`,
          text: "What does this lineage of great center fielders teach young players?",
          options: [
            "That center field is unimportant to winning",
            "That mastering the complete craft of center field — range, reads, catches, arm, and leadership — can make a player the anchor of a great outfield and a Hall of Famer",
            "That defense can't be developed",
            "That only power hitters succeed in center field",
          ],
          correctIndex: 1,
          explanation: "The lineage from Willie Mays through Griffey and Andruw Jones proves that mastering the complete craft of center field — range, reads, graceful catches, a strong arm, and leadership — can make a player the anchor of a great outfield and a Hall of Famer. Their range, home-run robberies, and captaincy turned center field into the foundation of championship outfields. The lesson for young players is to pursue that whole craft and become the rangy, graceful captain who runs down everything.",
        },
      ],
    },
  },
];
