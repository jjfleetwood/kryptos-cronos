import type { ScenarioConfig } from "./types";

// "Make the Call" Decision-Trainer scenarios for Flag Football: Foundations.
// Each spot is a concrete play situation with one correct answer per standard
// 5-on-5 flag football rules and sound strategy — never a coin flip. The full
// game state lives in `situation`; the decision is in `prompt`. correctIndex and
// explanation are stripped server-side before reaching the client.
export const flagFootball1Scenarios: Record<string, ScenarioConfig> = {
  "flag-01": {
    intro: "Welcome to the field. Before you run a single route, lock in what flag football actually is and how it's played.",
    spots: [
      {
        id: "ff1-01-s1", label: "The Stop",
        situation: "A ball-carrier breaks free up the sideline with a defender closing in. It's a non-contact game.",
        prompt: "How does the defender legally end the play?",
        options: [
          "Tackle the runner to the ground",
          "Pull a flag off the runner's belt",
          "Bump the runner out of bounds with a shoulder",
          "Wrap the runner up until the whistle",
        ],
        correctIndex: 1,
        explanation: "Flag football is non-contact — pulling a flag from the belt replaces the tackle and ends the play where the flag comes off.",
      },
      {
        id: "ff1-01-s2", label: "The Format",
        situation: "You're forming a team for an Olympic-style league and need to know how many players are on the field per side.",
        prompt: "What is the standard (and 2028 Olympic) flag football format?",
        options: ["5-on-5", "7-on-7", "9-on-9", "11-on-11"],
        correctIndex: 0,
        explanation: "5-on-5 is the most common format and the one chosen for the LA 2028 Olympic Games.",
      },
      {
        id: "ff1-01-s3", label: "Why It Fits You",
        situation: "A fast, smart, smaller player is deciding whether flag is a good fit against bigger opponents.",
        prompt: "Why does flag football reward this player?",
        options: [
          "Bigger players always dominate, so size is everything",
          "It's random, so any player has an equal shot",
          "Only kicking specialists matter",
          "No contact means speed, agility, and football IQ matter more than mass",
        ],
        correctIndex: 3,
        explanation: "Without tackling, technique, quickness, and smarts decide the game — flag rewards skill over size.",
      },
      {
        id: "ff1-01-s4", label: "Two Ways to Win",
        situation: "Your team needs points. You're weighing how scoring works in flag.",
        prompt: "How does a team primarily score?",
        options: [
          "By field goals kicked through uprights only",
          "By reaching the end zone for a touchdown",
          "By pulling the most flags",
          "By holding the ball the longest",
        ],
        correctIndex: 1,
        explanation: "Advancing the ball into the end zone for a touchdown (6 points) is the core way to score, followed by a 1- or 2-point try.",
      },
    ],
  },

  "flag-02": {
    intro: "You can't play smart without knowing the field. Read each situation and apply the geography and rules of game flow.",
    spots: [
      {
        id: "ff1-02-s1", label: "Move the Chains",
        situation: "Your offense starts a possession backed up near your own end zone. The field uses a midfield line-to-gain system.",
        prompt: "What must your offense reach first to earn a fresh set of downs?",
        options: [
          "The opponent's end zone directly",
          "The nearest sideline",
          "The midfield line to gain",
          "Your own 5-yard line",
        ],
        correctIndex: 2,
        explanation: "In the line-to-gain system, you first cross the midfield line for a new set of downs, then drive for the end zone.",
      },
      {
        id: "ff1-02-s2", label: "No-Run Zone",
        situation: "It's 1st down and you're inside the 5-yard no-run zone just before the end zone. Your coach loves the run, but the rules restrict you here.",
        prompt: "What's the correct call inside a no-run zone?",
        options: [
          "Hand off for an inside run",
          "Call a passing play — running is illegal here",
          "Kick a field goal",
          "Take a knee to run clock",
        ],
        correctIndex: 1,
        explanation: "No-run zones (near midfield and the end zone) make running plays illegal, forcing the offense to throw to advance or score.",
      },
      {
        id: "ff1-02-s3", label: "Score the Points",
        situation: "Your receiver catches the ball and crosses the goal line untouched.",
        prompt: "How many points has your team just scored?",
        options: ["6", "3", "2", "1"],
        correctIndex: 0,
        explanation: "A touchdown is worth 6 points, after which the team attempts a 1-point (short) or 2-point (longer) try.",
      },
      {
        id: "ff1-02-s4", label: "Whose Rules?",
        situation: "Your club team is about to play in an unfamiliar tournament run by a different organization than your home league.",
        prompt: "What should you confirm before kickoff?",
        options: [
          "Nothing — flag rules are identical everywhere",
          "Only the final score format",
          "This league's specific field size, downs, and rush distance",
          "Which team has bigger players",
        ],
        correctIndex: 2,
        explanation: "Field dimensions, down systems, and no-run/rush rules differ between NFL FLAG, school, and Olympic codes — always confirm the local rules.",
      },
    ],
  },

  "flag-03": {
    intro: "Five a side means everyone matters. Apply the eligibility and no-contact rules that keep the game clean.",
    spots: [
      {
        id: "ff1-03-s1", label: "Who Can Catch",
        situation: "Your center snaps the ball to the QB, then releases downfield wide open. The QB sees him.",
        prompt: "Can the QB legally throw the center the ball?",
        options: [
          "No — the center is never eligible",
          "Yes — in flag, the center is eligible after the snap",
          "Only if the QB is behind the line",
          "Only on 4th down",
        ],
        correctIndex: 1,
        explanation: "In flag football almost all offensive players are eligible receivers, including the center after he snaps — every player is a threat.",
      },
      {
        id: "ff1-03-s2", label: "Flag Guarding",
        situation: "A ball-carrier feels a defender reaching for his flag and swings his arm down to swat the defender's hand away from his belt.",
        prompt: "What just happened?",
        options: [
          "A legal stiff-arm",
          "Nothing — that's allowed",
          "A flag-guarding penalty on the ball-carrier",
          "A penalty on the defender",
        ],
        correctIndex: 2,
        explanation: "Using a hand, arm, or the ball to block a defender's access to your flags is flag guarding — an illegal move by the ball-carrier.",
      },
      {
        id: "ff1-03-s3", label: "The Rusher",
        situation: "You're the designated pass-rusher. The league requires rushers to start a set distance (commonly 7 yards) off the line of scrimmage.",
        prompt: "What must you do before rushing the QB?",
        options: [
          "Start the required distance off the line, then rush at the snap",
          "Line up right on the line next to the center",
          "Rush only after the QB throws",
          "Tackle the center first",
        ],
        correctIndex: 0,
        explanation: "Rushing from too close or too early is an illegal rush; the rusher must begin the required distance back before pursuing the passer.",
      },
      {
        id: "ff1-03-s4", label: "Keep It Clean",
        situation: "On a crossing route a defender squares up and blocks the receiver's path with his body to slow him down.",
        prompt: "Is that allowed in flag football?",
        options: [
          "Yes — blocking is encouraged",
          "Yes — only on defense",
          "Yes — anywhere on the field",
          "No — it's non-contact; that's illegal contact",
        ],
        correctIndex: 3,
        explanation: "Flag is non-contact: tackling, blocking, and intentional contact are penalized — you play the ball and the flags, not the body.",
      },
    ],
  },

  "flag-04": {
    intro: "The flag pull is the tackle of flag football — a coachable skill of angle, balance, and clean technique. Make the right read on each rep.",
    spots: [
      {
        id: "ff1-04-s1", label: "Where to Look",
        situation: "A shifty ball-carrier is dancing in front of you, throwing head fakes and ball fakes to make you bite.",
        prompt: "Where should you fix your eyes?",
        options: [
          "On his head and shoulders",
          "On the football",
          "On his hips and belt",
          "On the scoreboard",
        ],
        correctIndex: 2,
        explanation: "The hips can't lie about direction — watch the belt/hips, not the head or ball, which are used to fake you out.",
      },
      {
        id: "ff1-04-s2", label: "Take the Angle",
        situation: "A faster runner has a step on you and is sprinting up the field. You're chasing from behind and to the side.",
        prompt: "What's the correct pursuit?",
        options: [
          "Sprint straight at where he is right now",
          "Run an angle to where he's going so your paths intersect",
          "Run parallel and hope he slows down",
          "Give up and cover someone else",
        ],
        correctIndex: 1,
        explanation: "A proper pursuit angle aims ahead of the runner, accounting for his speed, so you cut off his path instead of trailing him.",
      },
      {
        id: "ff1-04-s3", label: "Don't Whiff",
        situation: "You're closing fast on the ball-carrier near the sideline and feel the urge to lunge and grab early.",
        prompt: "What's the disciplined technique?",
        options: [
          "Lunge now before he can cut",
          "Dive at his legs",
          "Break down under control and let him commit before you pull",
          "Close your eyes and swipe",
        ],
        correctIndex: 2,
        explanation: "Most missed flags come from lunging; break down into a balanced stance, mirror the cut, and pull cleanly once he commits.",
      },
      {
        id: "ff1-04-s4", label: "Use the Boundary",
        situation: "A runner is heading toward the sideline with you in good position on his inside shoulder.",
        prompt: "How do you use the sideline?",
        options: [
          "Force him toward it so it acts like a free extra defender",
          "Give him the sideline and the whole field",
          "Push him back to the middle",
          "Ignore it; it doesn't matter",
        ],
        correctIndex: 0,
        explanation: "Leveraging the runner toward the boundary shrinks his space and gives you help — the sideline becomes a free defender.",
      },
    ],
  },

  "flag-05": {
    intro: "Flag is a passing game, so the throw is your most important offensive skill. Apply grip, footwork, and timing on each rep.",
    spots: [
      {
        id: "ff1-05-s1", label: "The Spiral",
        situation: "Your passes keep wobbling and arriving nose-down. You want a tight, stable spiral.",
        prompt: "Where does a tight spiral come from?",
        options: [
          "Squeezing the ball as hard as possible",
          "A long, slow windup",
          "Throwing perfectly flat-footed",
          "The wrist snap and laces rolling off your fingers",
        ],
        correctIndex: 3,
        explanation: "Spin — and accuracy — comes from the wrist snap and the laces rolling off the fingertips, not from grip strength.",
      },
      {
        id: "ff1-05-s2", label: "Power Source",
        situation: "You're trying to add zip without straining your arm, throwing from a balanced base.",
        prompt: "Where should most of your throwing power come from?",
        options: [
          "Sequencing legs, hips, and torso into the arm",
          "The arm muscles alone",
          "Snapping the neck forward",
          "Jumping straight up as you throw",
        ],
        correctIndex: 0,
        explanation: "Power is a kinetic chain — legs to hips to torso to shoulder to arm to wrist, like cracking a whip.",
      },
      {
        id: "ff1-05-s3", label: "Lead the Target",
        situation: "Your receiver is running a crossing route at full speed, moving left to right.",
        prompt: "Where do you throw the ball?",
        options: [
          "Right at his current chest",
          "Ahead of him, to where he'll be, so he catches it in stride",
          "Behind him so he slows to get it",
          "Straight up so he can find it",
        ],
        correctIndex: 1,
        explanation: "Lead a moving receiver — throw to where he'll be so he catches it in stride and keeps running.",
      },
      {
        id: "ff1-05-s4", label: "Beat the Rush",
        situation: "There's no blocking. A rusher who started the required distance back is closing on you fast after the snap.",
        prompt: "What does this demand of your throwing?",
        options: [
          "A slow, max-power windup",
          "Holding the ball until everyone is open",
          "A quick, accurate release that gets the ball out on time",
          "Always scrambling backward first",
        ],
        correctIndex: 2,
        explanation: "With no blockers the rush arrives quickly, so a fast, on-time, accurate release beats a big arm in flag football.",
      },
    ],
  },

  "flag-06": {
    intro: "A perfect throw is wasted if it's dropped. See it in, secure it, then go — apply catching and ball-security technique.",
    spots: [
      {
        id: "ff1-06-s1", label: "High Ball",
        situation: "A pass is coming in high, above your chest and over your numbers.",
        prompt: "What hand position do you use?",
        options: [
          "Pinkies together, fingers down (basket)",
          "Hands flat at your sides",
          "Thumbs together, fingers up (diamond)",
          "One hand only",
        ],
        correctIndex: 2,
        explanation: "For anything from the chest up, make a thumbs-together diamond; basket (pinkies together) is for low balls.",
      },
      {
        id: "ff1-06-s2", label: "Catch First",
        situation: "A defender is right behind you and you're eager to turn upfield the instant the ball nears your hands.",
        prompt: "What's the most common cause of a drop here?",
        options: [
          "Looking to run before securing the catch",
          "Watching the ball all the way in",
          "Catching with your hands",
          "Tucking the ball away",
        ],
        correctIndex: 0,
        explanation: "Most drops come from looking upfield too early — look it in and secure it before doing anything else.",
      },
      {
        id: "ff1-06-s3", label: "Protect the Flags",
        situation: "You've just secured the catch and a defender is closing from your left, reaching for your belt.",
        prompt: "What do you do with the ball?",
        options: [
          "Hold it out loosely toward the defender",
          "Carry it on the side away from the defender, without flag guarding",
          "Swing your arm down over your flags to shield them",
          "Toss it to a teammate",
        ],
        correctIndex: 1,
        explanation: "Keep the ball away from the nearest defender for security — but never use your arm to shield your flags, which is illegal flag guarding.",
      },
      {
        id: "ff1-06-s4", label: "Going Deep",
        situation: "You've beaten your defender on a go route and a deep ball is dropping in over your shoulder.",
        prompt: "How do you make the catch?",
        options: [
          "Wait for it to land and scoop it",
          "Watch the defender instead of the ball",
          "Track it over the correct shoulder and high-point it at its peak",
          "Slow down and let it come to you",
        ],
        correctIndex: 2,
        explanation: "On deep balls, find it over the correct shoulder, adjust your speed, and catch it at the highest point before a defender can.",
      },
    ],
  },

  "flag-07": {
    intro: "Routes are the language of the passing game. Pick the pattern and technique that gets you open on each play.",
    spots: [
      {
        id: "ff1-07-s1", label: "Beat the Rush",
        situation: "The defense is bringing pressure and you need a quick, inside-breaking route to give your QB a fast throw across the middle.",
        prompt: "Which route fits best?",
        options: ["A go (fly)", "A slant", "A deep corner", "A comeback"],
        correctIndex: 1,
        explanation: "The slant is a quick angle across the middle — it gets open fast and is a great answer to the rush.",
      },
      {
        id: "ff1-07-s2", label: "The Break",
        situation: "You're at the top of your route stem about to change direction. You want maximum separation from the defender.",
        prompt: "How should you make the cut?",
        options: [
          "Round it off gradually",
          "Slow down well before it",
          "Sink your hips and snap it sharply",
          "Drift sideways into it",
        ],
        correctIndex: 2,
        explanation: "A sharp, planted cut (sink the hips and snap it) creates separation; rounding the cut lets the defender stay glued to you.",
      },
      {
        id: "ff1-07-s3", label: "Read Leverage",
        situation: "Pre-break, you notice the defender is shading hard to your inside, taking away the middle.",
        prompt: "Where should you usually break?",
        options: [
          "Outside, away from his leverage",
          "Straight into his inside shade",
          "Stop and stand still",
          "Directly at him",
        ],
        correctIndex: 0,
        explanation: "Break away from the defender's leverage — if he sits inside, attack outside to get open.",
      },
      {
        id: "ff1-07-s4", label: "On Time",
        situation: "Your QB throws on timing, releasing the ball as you break. You're tempted to round your route a yard short to save energy.",
        prompt: "Why must you run the exact depth and timing?",
        options: [
          "It just looks cleaner to coaches",
          "It tires out the defender",
          "Depth and timing are irrelevant in flag",
          "The QB throws to a spot on your break — being short or late lets the defense cover it",
        ],
        correctIndex: 3,
        explanation: "Timing offense throws to a spot as you break; a route a yard short, late, or rounded breaks the timing and gets covered.",
      },
    ],
  },

  "flag-08": {
    intro: "Now put the pieces together. Offense is getting the ball to playmakers in space, fast — make the decisive call each play.",
    spots: [
      {
        id: "ff1-08-s1", label: "The Read",
        situation: "Pre-snap you've identified the flat defender. Your rule: if he sits shallow, throw the corner behind him; if he sprints deep, hit the flat underneath.",
        prompt: "What is this kind of rule called?",
        options: [
          "A read — who to throw to based on what the defense does",
          "A penalty",
          "A formation",
          "The snap count",
        ],
        correctIndex: 0,
        explanation: "A read turns the defender's reaction into your decision — the foundation of decisive flag quarterbacking.",
      },
      {
        id: "ff1-08-s2", label: "Don't Lock On",
        situation: "Your favorite receiver is your first option, but he's blanketed. You have a second read and a short checkdown available.",
        prompt: "What's the right approach?",
        options: [
          "Stare down and force it to the first option",
          "Work the progression: first option, then second, then checkdown",
          "Throw it away immediately",
          "Hold the ball and wait for him to come open",
        ],
        correctIndex: 1,
        explanation: "Working a progression with a checkdown keeps you from locking on and forcing a covered throw.",
      },
      {
        id: "ff1-08-s3", label: "Stretch the Field",
        situation: "You're designing a play and deciding how to align your receivers across the field.",
        prompt: "Why space receivers out horizontally and vertically?",
        options: [
          "To crowd them together near the QB",
          "To confuse your own offense",
          "So one defender can't cover two and the field is stretched",
          "To make receivers run slower",
        ],
        correctIndex: 2,
        explanation: "Horizontal and vertical spacing create two-on-one binds — one defender can't cover two receivers, stretching the defense thin.",
      },
      {
        id: "ff1-08-s4", label: "Beat the Clock",
        situation: "There are no blockers and a live rusher is bearing down. Nothing is wide open yet.",
        prompt: "How fast should the ball generally come out?",
        options: [
          "After about 6 seconds",
          "Only once you scramble",
          "Never — hold it until something's perfect",
          "Quickly — usually around 2 seconds",
        ],
        correctIndex: 3,
        explanation: "With no blocking, the QB must deliver on time — the ball should usually be out in roughly two seconds against a live rush.",
      },
    ],
  },

  "flag-09": {
    intro: "Defense in flag is coverage and discipline. Five defenders, five eligible receivers — make the right coverage call each snap.",
    spots: [
      {
        id: "ff1-09-s1", label: "Pick the Coverage",
        situation: "Your coordinator wants each defender locked onto one specific receiver, following him everywhere he goes.",
        prompt: "Which coverage is this?",
        options: [
          "Man-to-man",
          "Zone",
          "Prevent",
          "No coverage",
        ],
        correctIndex: 0,
        explanation: "Man-to-man means each defender covers one assigned receiver everywhere; zone instead guards areas of the field.",
      },
      {
        id: "ff1-09-s2", label: "The Cardinal Rule",
        situation: "It's late, the offense trails, and you're a deep defender. A receiver runs a go route trying to get behind you.",
        prompt: "What's your top priority?",
        options: [
          "Jump the short route and risk getting beat over the top",
          "Don't get beat deep — give up the short stuff before the long",
          "Blitz the QB and leave the receiver",
          "Cover two receivers at once",
        ],
        correctIndex: 1,
        explanation: "On a small field a deep completion is usually a touchdown — keep everything in front and never get beat over the top.",
      },
      {
        id: "ff1-09-s3", label: "Attacking Man",
        situation: "You're in man coverage and the offense lines up in a tight bunch, then runs receivers crossing in front of each other.",
        prompt: "What is this designed to do to your man coverage?",
        options: [
          "Nothing — man handles it automatically",
          "Help your coverage",
          "Stress it with crossing routes, rubs/picks, and double moves",
          "Force a punt",
        ],
        correctIndex: 2,
        explanation: "Man is tight but vulnerable to crossers, legal rubs/picks, and double moves — communication and switching are the answers.",
      },
      {
        id: "ff1-09-s4", label: "Talk It Out",
        situation: "The offense sends a receiver in motion across the formation and runs a switch release, and two of your defenders hesitate over who has whom.",
        prompt: "What prevents the big play here?",
        options: [
          "Both defenders silently guessing",
          "Both chasing the same receiver",
          "Ignoring the motion entirely",
          "Communicating — calling the switch and who takes whom",
        ],
        correctIndex: 3,
        explanation: "Busted coverage from poor communication causes most big plays; calling out switches and assignments prevents free receivers.",
      },
    ],
  },

  "flag-10": {
    intro: "Flag is a game of cuts, accelerations, and stops. Apply agility, speed, and conditioning to win the one-on-one.",
    spots: [
      {
        id: "ff1-10-s1", label: "What Wins",
        situation: "You're building a training plan for a non-contact, short-field space game full of one-on-one matchups.",
        prompt: "Which athletic quality should you prioritize?",
        options: [
          "Maximum bench press",
          "Change of direction and short-burst acceleration",
          "Long-distance endurance only",
          "Raw height",
        ],
        correctIndex: 1,
        explanation: "Flag is decided by cuts and burst — change of direction and short-burst acceleration matter more than long speed or mass.",
      },
      {
        id: "ff1-10-s2", label: "The Cut",
        situation: "You're running a sharp out route and need to change direction without losing speed.",
        prompt: "What's the correct sequence for a sharp cut?",
        options: [
          "Speed up into it and turn tall",
          "Stop completely, then walk into the turn",
          "Stand upright and pivot slowly",
          "Decelerate, plant low, then re-accelerate",
        ],
        correctIndex: 3,
        explanation: "A sharp cut is decelerate, plant from a low and balanced base, then re-accelerate — staying low keeps you stable.",
      },
      {
        id: "ff1-10-s3", label: "The Juke",
        situation: "You've got the ball with one defender to beat in open space.",
        prompt: "How does a juke beat him?",
        options: [
          "Make him commit one way, then snap the other before he can re-plant",
          "Run straight into his chest",
          "Slow down and wait for help",
          "Run out of bounds to be safe",
        ],
        correctIndex: 0,
        explanation: "A juke works by forcing the defender to commit to one direction, then changing direction faster than he can recover.",
      },
      {
        id: "ff1-10-s4", label: "Late-Game Legs",
        situation: "It's the fourth quarter of a tight game and your legs are heavy. The next play is another one-on-one matchup.",
        prompt: "Why does conditioning matter so much right now?",
        options: [
          "It doesn't — games are too short to tire",
          "Only the QB needs to be in shape",
          "Tired legs cut slower and pull fewer flags late in games",
          "Fitness only helps on offense",
        ],
        correctIndex: 2,
        explanation: "Quickness fades with fatigue, so conditioning is a skill — fit legs keep cutting sharply and pulling flags when games are decided.",
      },
    ],
  },
};
