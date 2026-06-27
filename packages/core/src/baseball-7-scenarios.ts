import type { ScenarioConfig } from "./types";

// "Call the Game" Decision-Trainer scenarios for the Pitching Strategy epoch.
// Each spot is a deterministic, skill-based pitching decision — the correct line
// is the strategically sound play taught in that stage, never a coin-flip
// outcome. correctIndex and explanation are stripped server-side before reaching
// the client.
export const baseball7Scenarios: Record<string, ScenarioConfig> = {
  "baseball-7-01": {
    intro:
      "You're on the mound, but the real work starts before you throw. Read the batter's setup in the box and decide how to attack.",
    spots: [
      {
        id: "bb7-01-s1",
        label: "Deep in the Box",
        situation:
          "The hitter sets up well toward the back of the box, near the catcher, loading heavily onto his back foot.",
        prompt: "What does standing deep in the box most often tell you?",
        options: [
          "He wants extra time to read breaking balls — attack with the elevated fastball he has less time to handle",
          "He is a guaranteed bunter — bring the corners in",
          "He cannot reach anything on the outer half — pound it away",
          "His stance is neutral and tells you nothing useful",
        ],
        correctIndex: 0,
        explanation:
          "A deep setup buys a hitter more time to identify spin, which usually signals he is vulnerable up in the zone with hard velocity he can't catch up to before it rises past the barrel. The elevated fastball is the counter to a deep, time-buying stance.",
      },
      {
        id: "bb7-01-s2",
        label: "Crowding the Plate",
        situation:
          "This batter crowds the plate, front foot nearly on the inside chalk, diving over the dish.",
        prompt: "How should you generally attack a plate-crowder?",
        options: [
          "Throw everything soft and away, every pitch",
          "Establish the inner half to move him off the plate, then expand away once he respects inside",
          "Walk him intentionally — crowders are always dangerous",
          "Aim down the middle so he can't get extension",
        ],
        correctIndex: 1,
        explanation:
          "A hitter who crowds is taking away the inner half and looking to cover away. Jamming him inside — or establishing the threat of it — forces him to give ground, after which the outer half opens up. Living away only lets him keep diving with no consequence.",
      },
      {
        id: "bb7-01-s3",
        label: "The Grip Tell",
        situation:
          "First pitch of the at-bat. The hitter's forearms are rigid, his knuckles white, his jaw clenched on the bat.",
        prompt: "What does a visibly tight, tense grip suggest about how to attack him?",
        options: [
          "He is locked in and disciplined — only throw your best fastball",
          "Grip tension is meaningless — ignore it",
          "He is anxious and over-aggressive — start him with off-speed because he'll expand his zone trying to drive it",
          "He is bunting — charge off the mound",
        ],
        correctIndex: 2,
        explanation:
          "A tight, rigid grip kills bat speed and usually marks an over-eager hitter who will chase. Early off-speed — a changeup or curveball when he's braced for something hard — plays directly into a batter who is already overcommitted.",
      },
      {
        id: "bb7-01-s4",
        label: "Open Stride",
        situation:
          "Scouting with your catcher, you note this hitter strides open — his front foot pulls toward his own dugout, away from outside pitches.",
        prompt: "Where should the catcher set up against a hitter who strides away from the outer half?",
        options: [
          "Inside — his open body means he handles outside pitches easily",
          "Outer half — striding open pulls him off the outside corner, so away pitches are hardest for him to drive",
          "Down the middle — stride direction doesn't affect coverage",
          "It only matters versus lefties, so set up wherever",
        ],
        correctIndex: 1,
        explanation:
          "Striding open (bailing toward the dugout) physically pulls the barrel away from the outside corner, lengthening the path to that zone. Working away exploits the gap his own stride creates — a textbook stride-direction read.",
      },
    ],
  },

  "baseball-7-02": {
    intro:
      "The count is the scoreboard of the at-bat. Win the leverage battle pitch by pitch.",
    spots: [
      {
        id: "bb7-02-s1",
        label: "0-0",
        situation:
          "Top of the first, leadoff hitter, fresh count. Your coach's only instruction: get ahead.",
        prompt: "Why is the first-pitch strike the highest-leverage pitch of the at-bat?",
        options: [
          "It shifts every following count toward the pitcher — strikeout rates climb and walk rates fall once you're 0-1",
          "First pitches are thrown hardest, so they tire the hitter",
          "Hitters never swing 0-0, so it's basically free",
          "It only matters in the playoffs",
        ],
        correctIndex: 0,
        explanation:
          "On 0-0 a hitter has full plate discipline; at 0-1 he must protect and loses selectivity. Getting ahead measurably lowers his expected production for the whole at-bat, which is why first-pitch strike rate is one of the most predictive pitching metrics.",
      },
      {
        id: "bb7-02-s2",
        label: "0-2, Disciplined Hitter",
        situation:
          "You're ahead 0-2 on a patient, low-chase hitter who rarely expands the zone.",
        prompt: "What is the sound 0-2 approach against a disciplined hitter?",
        options: [
          "Groove a strike down the middle to avoid a walk",
          "A clearly-out-of-zone waste/chase pitch first — if he lays off you're still 1-2 and in control",
          "Throw at his hands to back him off",
          "Pitch around him and put him on first",
        ],
        correctIndex: 1,
        explanation:
          "Against a disciplined hitter, a true chase pitch clearly off the plate tests him at no real cost: chase ends it, take leaves you 1-2 and still ahead. The danger is a 'waste' pitch that drifts back over for a called strike or, worse, a hittable mistake.",
      },
      {
        id: "bb7-02-s3",
        label: "0-2 to 3-2",
        situation:
          "You had a hitter 0-2, then missed with a waste pitch, a curve in the dirt, a corner attempt, and finally a fouled fastball. Now it's 3-2.",
        prompt: "Why is the 0-2-to-3-2 sequence considered a strategic failure?",
        options: [
          "It isn't — a full count is 50/50 and totally normal",
          "The changeup, not the curve, was the only mistake",
          "You surrendered a dominant count over four straight non-finishing pitches while the hitter gained comfort and information",
          "You should have intentionally walked him at 0-2",
        ],
        correctIndex: 2,
        explanation:
          "0-2 is a commanding position — you can attack or waste at will. Frittering it away over four pitches hands the hitter time to settle and data on your stuff, converting a big edge into a neutral-or-worse 3-2 fight. Repeated across a game it balloons pitch counts.",
      },
      {
        id: "bb7-02-s4",
        label: "Mixing on 0-0",
        situation:
          "One pitcher throws a curve on 0-0 about a third of the time; another throws his fastball 0-0 nearly every time and posts a higher first-pitch-strike rate yet fewer 0-2 counts.",
        prompt: "Why can mixing pitch types on 0-0 generate more two-strike counts even with a lower first-pitch-strike rate?",
        options: [
          "It can't — pitch type on 0-0 has no carryover effect",
          "Unpredictability on 0-0 keeps the hitter from confidently timing any pitch, so he stays reactive and easier to put away later in the at-bat",
          "The curve is simply faster than the fastball",
          "Mixing helps the hitter lay off and draw walks",
        ],
        correctIndex: 1,
        explanation:
          "A hitter who knows the 0-0 pitch can sit on it and load his timing; one who can't must stay reactive, and that uncertainty carries into 0-1 and 0-2. The compounding doubt is how a pitcher without elite velocity still runs deep counts in his favor.",
      },
    ],
  },

  "baseball-7-03": {
    intro:
      "Every pitch is a setup for the next. Build a pattern, then collect on it.",
    spots: [
      {
        id: "bb7-03-s1",
        label: "The Productive Foul",
        situation:
          "You throw a fastball on the inner half and the hitter fouls it straight back. Count 0-1. Your coach nods approvingly.",
        prompt: "Why might a foul ball off an inside fastball be a successful sequencing pitch?",
        options: [
          "Foul balls are always wasted pitches with no value",
          "It confirms his hands are working inside and his defenses are committed there — making the next pitch away far more effective",
          "It just advanced the count; the location is irrelevant",
          "A foul means your location was poor",
        ],
        correctIndex: 1,
        explanation:
          "A foul off an inside pitch shows the hitter reached it and is geared to protect inside. His body memory is now calibrated in tight, so a breaking ball or change that starts inside and runs away finds his defenses pointed the wrong direction.",
      },
      {
        id: "bb7-03-s2",
        label: "In, In, Away",
        situation:
          "You've thrown two inside fastballs, both fouled off with the hitter getting his hands in well. Count 1-2. The catcher sets up away for a curveball.",
        prompt: "Why is the breaking ball away the right call now?",
        options: [
          "Two inside pitches conditioned his hands to stay tight — a curve starting inside then breaking away exploits that committed inside posture",
          "After two inside pitches he expects away, so go inside a third time",
          "The sequence only works if both prior pitches were called strikes",
          "Curveballs may only follow changeups, never fastballs",
        ],
        correctIndex: 0,
        explanation:
          "Repeated inside pitches reinforce the keep-the-hands-in reflex. A curve through the same visual tunnel that breaks to the outer half leaves his tight, committed hands unable to reach the away corner with authority — the classic in-to-away sequence working as designed.",
      },
      {
        id: "bb7-03-s3",
        label: "Cross-At-Bat Memory",
        situation:
          "First inning you buried a curveball and the cleanup hitter swung through it badly; later he singled off your fastball. Now you face him again. The catcher calls curve; you shake to the fastball.",
        prompt: "Who has the better read, and why?",
        options: [
          "The catcher — the early whiff proves the curve always beats him",
          "Neither — always throw your best pitch regardless of history",
          "The pitcher — he's now adjusted toward the curve (the pitch that beat him last time was the fastball), so the fastball catches his curve-first mindset",
          "The catcher, but only to a new location",
        ],
        correctIndex: 2,
        explanation:
          "He whiffed on the curve, then made a curve-oriented adjustment and handled the fastball — meaning his mental model is curve-first. The fastball counterpunches that. Beware: it works once; if he barrels the heater, the curve becomes the counter again.",
      },
      {
        id: "bb7-03-s4",
        label: "Hershiser's Outer Half",
        situation:
          "Sinker away, slider away, sinker away — then a fastball on the inner half. The hitter grounds out weakly on the inside pitch.",
        prompt: "Why did showing the outer half three times make the inside fastball so effective?",
        options: [
          "Repeated outside pitches drift him toward outer-half coverage mentally and physically, so the inside pitch arrives in territory he's vacated",
          "Inside pitches are effective regardless of any setup",
          "Working outside repeatedly only gives him more time on inside pitches",
          "It was the count, not the location pattern, that mattered",
        ],
        correctIndex: 0,
        explanation:
          "Three pitches away nudge a hitter to lean and gear toward the outside corner. The inside fastball then arrives where he is no longer protecting — the outer-to-inner version of the setup sequence that anchored Hershiser's scoreless streak.",
      },
    ],
  },

  "baseball-7-04": {
    intro:
      "A lineup learns you every time it bats. Manage the information curve across the game.",
    spots: [
      {
        id: "bb7-04-s1",
        label: "The Information Arc",
        situation:
          "First inning a hitter swings through your curve; fourth inning he lays off the same pitch for a ball; seventh inning he homers off it in the same spot.",
        prompt: "What best explains this progression against the same pitcher?",
        options: [
          "Pure random variance — the same pitch just produced different results",
          "He accumulated data on the curve's trajectory and break over multiple looks, making progressively better swing decisions",
          "The curve lost movement from fatigue and became hittable",
          "He got lucky; repeating the pitch was the right call",
        ],
        correctIndex: 1,
        explanation:
          "Whiff, then take, then barrel is the times-through-the-order penalty in miniature: each look adds calibration on starting point, break, and timing until he can sit on the pitch and drive it. It's why starters surrender more the third time through.",
      },
      {
        id: "bb7-04-s2",
        label: "Roberts' Decision",
        situation:
          "Your starter has a 3-1 lead, 74 pitches, and just retired the side in order twice straight. The top of the order is due — the third time through.",
        prompt: "What does times-through-order analysis say to do?",
        options: [
          "Leave him in — he's rolling and momentum beats data",
          "Leave him until the first baserunner, then react",
          "Go to a rested bullpen — the third-time-through penalty is structural and a strong sixth inning doesn't erase it; the risk is asymmetric",
          "Let him hit and decide afterward — never pull a clean inning",
        ],
        correctIndex: 2,
        explanation:
          "The penalty is systemic, independent of how the last inning went. The hitters have accumulated info and the bullpen is fresh, so the structural math favors the change now. Waiting for a bad result is reactive, not analytical — Roberts' explicit approach.",
      },
      {
        id: "bb7-04-s3",
        label: "The Opener",
        situation:
          "The opponent's top three hitters are right-handed; your best reliever is a tough righty sinkerballer; your scheduled starter is a lefty. The coach suggests opening with the righty for two innings, then handing to the lefty bulk pitcher.",
        prompt: "What problem does the Opener solve that traditional usage does not?",
        options: [
          "It lets the starter warm up slowly — purely a physical benefit",
          "It exploits the first-inning matchup by sending your best platoon edge at the lineup's top bats instead of defaulting to a fixed starter",
          "It cuts total bullpen usage in half",
          "It only works in the postseason",
        ],
        correctIndex: 1,
        explanation:
          "The Opener attacks the most predictable matchup in the game — the top of the order in the first — by leading with whoever has the best platoon advantage, then changing looks before hitters settle in. Here the righty neutralizes the three righty bats.",
      },
      {
        id: "bb7-04-s4",
        label: "Beating the Penalty",
        situation:
          "Your ace is staying in for the third time through. The dugout reminds him the hitters now know his patterns.",
        prompt: "How does an elite starter blunt the order penalty without leaving the game?",
        options: [
          "Repeat the exact sequences that worked the first two times",
          "Deliberately vary sequences and use counts/locations he avoided earlier, so the accumulated information no longer applies",
          "Throw only fastballs to simplify",
          "Slow the pace to rest between pitches",
        ],
        correctIndex: 1,
        explanation:
          "The penalty is driven by information, so the counter is to invalidate it — show pitches in counts and locations the lineup hasn't seen from you that night. Kershaw's late-game survival came largely from this sequencing creativity, not added velocity.",
      },
    ],
  },

  "baseball-7-05": {
    intro:
      "Runners on base change everything. Now you manage the hitter and the basepaths at once.",
    spots: [
      {
        id: "bb7-05-s1",
        label: "Controlling the Tempo",
        situation:
          "A fast runner is on first. You notice he times his jump off your delivery rhythm.",
        prompt: "How does varying your tempo and holds out of the stretch help?",
        options: [
          "It doesn't — pitch the same rhythm every time so you stay comfortable",
          "Varying holds and looks disrupts the runner's timing so he can't get a clean, rhythmic jump",
          "It only matters with two outs",
          "Holding the ball longer is a balk every time",
        ],
        correctIndex: 1,
        explanation:
          "A base stealer keys on the pitcher's rhythm to time his jump. Mixing quick pitches with longer, varied holds removes the predictable cadence, forcing the runner to guess and shrinking his lead and jump.",
      },
      {
        id: "bb7-05-s2",
        label: "The Slide Step",
        situation:
          "A burner is on first in a one-run game. Your normal leg-kick delivery takes about 1.5 seconds to the plate.",
        prompt: "Why use a slide step here?",
        options: [
          "It adds velocity to the fastball",
          "It cuts your time to the plate, giving the catcher a realistic chance to throw the runner out",
          "It guarantees a strike",
          "It's only for left-handed pitchers",
        ],
        correctIndex: 1,
        explanation:
          "A slide step replaces the high leg kick to get the ball to the plate faster (often near 1.1-1.2 sec), shrinking the runner's window so the catcher's throw can beat him. It trades a bit of stuff/deception for base-stealing control.",
      },
      {
        id: "bb7-05-s3",
        label: "Tunnel Vision",
        situation:
          "Runners on first and second, no outs, tie game. You become so focused on holding the runners that you fall behind 2-0 to the hitter.",
        prompt: "What's the disciplined priority with runners on?",
        options: [
          "Forget the hitter entirely and throw to the bases",
          "The batter is still the primary threat — control the running game enough to be reasonable, but don't let it wreck your focus on executing pitches and getting the out",
          "Always pitch out to stop the steal",
          "Issue an intentional walk to load the bases",
        ],
        correctIndex: 1,
        explanation:
          "Runners matter, but the hitter is the bigger threat — a walk or barreled mistake hurts more than a stolen base. Elite pitchers hold runners enough to stay honest while keeping their main attention on executing quality pitches.",
      },
      {
        id: "bb7-05-s4",
        label: "The Pickoff Weapon",
        situation:
          "A runner at first has been taking a big, aggressive lead, leaning toward second on your every move.",
        prompt: "How does a well-timed pickoff throw help even if it doesn't get the out?",
        options: [
          "It has no value unless the runner is tagged out",
          "It makes the runner respect first base, shortening his lead and jump for the rest of the inning",
          "It counts as a strike on the hitter",
          "It resets the count to 0-0",
        ],
        correctIndex: 1,
        explanation:
          "Even a pickoff that misses establishes that you'll throw over, forcing the runner to trim his lead and hesitate on his jump. That smaller lead is what gives your catcher a chance and disrupts the offense's running game.",
      },
    ],
  },

  "baseball-7-06": {
    intro:
      "The game is on the line. High-leverage moments reward conviction, not fear.",
    spots: [
      {
        id: "bb7-06-s1",
        label: "Attack vs. Nibble",
        situation:
          "Bases loaded, two outs, tie game, full-zone hitter at the plate. You feel the urge to pick at the corners and avoid the heart of the plate.",
        prompt: "What does the attack-vs-nibble philosophy advise here?",
        options: [
          "Nibble the black with every pitch — never give him anything to hit",
          "Attack the zone with your best pitch — nibbling risks a walk that forces in a run and falls behind, where damage is worse",
          "Throw four intentional balls",
          "Aim for the hitter to back him off",
        ],
        correctIndex: 1,
        explanation:
          "With the bases loaded a walk hands over a run for free and falling behind makes you predictable. Trusting your best pitch in the zone — accepting the small contact risk — beats nibbling your way into a forced-in run or a hitter's count.",
      },
      {
        id: "bb7-06-s2",
        label: "The Strikeout Need",
        situation:
          "Runner on third, one out, infield is back conceding a run on a grounder. You'd love a strikeout to keep the run from scoring.",
        prompt: "How should the strikeout situation shape your pitch selection?",
        options: [
          "Pitch to contact low in the zone for a double play",
          "Lean on your best swing-and-miss pitch and use the zone to chase, since a punchout prevents the run a grounder would let in",
          "Walk him to set up a force",
          "Throw only fastballs down the middle",
        ],
        correctIndex: 1,
        explanation:
          "With the infield back, a grounder trades the out for the run — so the strikeout has special value. Featuring your best whiff pitch and getting the hitter to chase is the way to get the out that keeps the runner at third.",
      },
      {
        id: "bb7-06-s3",
        label: "Closer's Mentality",
        situation:
          "Ninth inning, one-run lead, you've entered to close. Jansen-style, you have one dominant pitch the hitters know is coming.",
        prompt: "Why can a closer succeed even when the hitter knows the primary pitch is coming?",
        options: [
          "Because the umpire favors closers",
          "Elite movement, location, and conviction make the pitch effective regardless — knowing it's coming isn't the same as being able to hit it",
          "Because hitters give up in the ninth",
          "Because the rules limit ninth-inning swings",
        ],
        correctIndex: 1,
        explanation:
          "A great out pitch thrown with conviction and precise location beats hitters even when anticipated — Jansen's cutter is the model. Tipping the pitch matters far less than the hitter's inability to square up its movement in the zone.",
      },
      {
        id: "bb7-06-s4",
        label: "Reset After a Hit",
        situation:
          "Leading off the inning you allow a sharp double. The tying run is in scoring position and the crowd is roaring.",
        prompt: "What's the disciplined high-leverage response to the runner now on second?",
        options: [
          "Abandon your plan and start aiming for corners to be safe",
          "Reset, stay with your strengths, and attack the next hitter — one runner on second is not a reason to start nibbling",
          "Rush your tempo to get it over with",
          "Intentionally walk the next two hitters",
        ],
        correctIndex: 1,
        explanation:
          "One hit doesn't change what your best pitches are. Pressing or nibbling after a runner reaches usually compounds trouble with walks; resetting and continuing to attack with your strengths is how high-leverage outs get recorded.",
      },
    ],
  },

  "baseball-7-07": {
    intro:
      "Handedness is hidden leverage. Win the matchup before the pitch is thrown.",
    spots: [
      {
        id: "bb7-07-s1",
        label: "The Platoon Edge",
        situation:
          "A right-handed hitter steps in against your righty reliever whose slider breaks away from same-side bats.",
        prompt: "Why does the same-handed matchup favor the pitcher?",
        options: [
          "Righties simply swing slower",
          "A breaking ball moves away from a same-handed hitter and starts behind him, making it harder to see and square up than for an opposite-handed hitter",
          "Umpires give same-handed pitchers a bigger zone",
          "It doesn't — handedness is a myth",
        ],
        correctIndex: 1,
        explanation:
          "Same-handed breaking balls start in toward the hitter's back/hip and sweep away, giving a tougher, later-breaking look. Opposite-handed hitters see the ball start over the plate and break toward them — easier to track. That gap is the platoon advantage.",
      },
      {
        id: "bb7-07-s2",
        label: "The LOOGY",
        situation:
          "Late innings, the opponent's dangerous left-handed slugger is due up. You have a left-handed specialist warm.",
        prompt: "What was the traditional logic of bringing in a lefty specialist for this spot?",
        options: [
          "Lefties throw harder than righties",
          "A left-on-left matchup neutralizes the slugger's platoon advantage for that key at-bat",
          "It saves the bullpen for extra innings",
          "Specialists are cheaper to roster",
        ],
        correctIndex: 1,
        explanation:
          "Bringing a lefty to face a lefty in a leverage spot erases the hitter's platoon edge and tilts the at-bat to the pitcher. That single-matchup logic is exactly what the LOOGY role existed to exploit.",
      },
      {
        id: "bb7-07-s3",
        label: "Three-Batter Minimum",
        situation:
          "You want to bring your lefty in to face one left-handed hitter, then immediately pull him before the righties behind.",
        prompt: "How does the three-batter minimum rule constrain that plan?",
        options: [
          "It bans left-handed relievers entirely",
          "A pitcher must face at least three batters (or end the half-inning), so you can't bring a specialist for just one matchup anymore",
          "It only applies in the postseason",
          "It lets you change pitchers every batter",
        ],
        correctIndex: 1,
        explanation:
          "The three-batter minimum requires a reliever to face three hitters or finish the inning, which effectively ended the one-batter LOOGY. Now you must weigh how a lefty will fare against the righties who follow before deploying him.",
      },
      {
        id: "bb7-07-s4",
        label: "Building the Pen",
        situation:
          "Under the three-batter rule, you're constructing a bullpen for a long season.",
        prompt: "What reliever profile is most valuable in the modern, matchup-constrained game?",
        options: [
          "Only single-matchup specialists",
          "Relievers who get out both lefties and righties (small reverse/neutral splits), so they can be used flexibly across a three-batter sequence",
          "Only pitchers who throw 100+ mph",
          "Pitchers with the largest platoon splits possible",
        ],
        correctIndex: 1,
        explanation:
          "Because a reliever must face three hitters, the premium shifts to arms with weapons against both sides — a put-away pitch versus same-handed bats plus a changeup or cutter for opposite-handed ones. Flexible relievers, not pure specialists, anchor the modern pen.",
      },
    ],
  },

  "baseball-7-08": {
    intro:
      "Modern preparation turns hitters into solved puzzles. Read the data, build the plan.",
    spots: [
      {
        id: "bb7-08-s1",
        label: "Spray Charts",
        situation:
          "A hitter's spray chart shows nearly all his hard contact pulled to the left-field side, with almost nothing driven the other way.",
        prompt: "How should an extreme pull tendency shape your plan?",
        options: [
          "Throw everything middle-in so he can pull it",
          "Work the outer half and away to make him hit against his pull tendency, and position the defense to his pull side",
          "Spray charts only matter for the defense, not the pitcher",
          "Pitch him exactly like a spray-the-field hitter",
        ],
        correctIndex: 1,
        explanation:
          "A heavy pull hitter feasts on inner-half pitches he can turn on. Working away forces weaker, opposite-field contact, while the defense shifts to where he actually hits the ball — data driving both the pitch plan and alignment.",
      },
      {
        id: "bb7-08-s2",
        label: "Exit Velo by Zone",
        situation:
          "Statcast shows this hitter crushes pitches middle-up but produces weak exit velocity on pitches at the bottom of the zone.",
        prompt: "What does the zone-by-zone exit-velocity profile tell you?",
        options: [
          "Pitch him middle-up where he's comfortable",
          "Live at the bottom of the zone and below, where his contact quality collapses, and avoid the middle-up hot zone",
          "Exit velocity is random and not actionable",
          "Throw exclusively to his hot zone to challenge him",
        ],
        correctIndex: 1,
        explanation:
          "Exit-velocity-by-zone maps a hitter's damage and weak spots. The plan is to live in the cold zone (down) and stay out of the hot zone (middle-up), turning measured tendencies into a concrete location strategy.",
      },
      {
        id: "bb7-08-s3",
        label: "Chase Profile",
        situation:
          "The data shows this hitter rarely chases out of the zone and has elite plate discipline.",
        prompt: "How should a low chase rate change your two-strike approach?",
        options: [
          "Throw waste pitches well off the plate to get him to chase",
          "Recognize he won't chase, so you'll need to attack the edges of the zone with two strikes rather than expecting a free swing",
          "Walk him on purpose every time",
          "Chase rate has no bearing on pitching",
        ],
        correctIndex: 1,
        explanation:
          "Against a disciplined, low-chase hitter, expanding the zone just gives away balls. You have to earn the strikeout in or just off the zone with executed pitches on the edges — the data tells you a chase strategy will fail.",
      },
      {
        id: "bb7-08-s4",
        label: "Data Meets the Mound",
        situation:
          "Your scouting report is detailed, but mid-at-bat you see the hitter has clearly changed his setup from what the report described.",
        prompt: "How should you balance the data with live, in-game reads?",
        options: [
          "Ignore what you see and follow the report exactly",
          "Use the data as the foundation but adjust to the live read — the hitter's real-time setup change is newer information than the report",
          "Throw out the report entirely and improvise blindly",
          "Call timeout until the next series",
        ],
        correctIndex: 1,
        explanation:
          "Data builds the plan, but the best pitchers and catchers update it with what they observe in the box. A visible adjustment by the hitter is fresher information than the pregame report and should refine — not be overridden by — the plan.",
      },
    ],
  },

  "baseball-7-09": {
    intro:
      "Knowing when you're done is its own skill. Read your body and your data before they read you.",
    spots: [
      {
        id: "bb7-09-s1",
        label: "Velocity Drop",
        situation:
          "Your fastball sat 95 early; in the sixth the board reads 91-92 and your command is slipping.",
        prompt: "What does a clear, sustained velocity drop most often indicate?",
        options: [
          "You're just pacing yourself and can ramp back up at will",
          "Fatigue is setting in — a meaningful velo decline plus fading command is a real signal to evaluate pulling you",
          "The radar gun is broken; ignore it",
          "Lower velocity makes you harder to hit, so stay in",
        ],
        correctIndex: 1,
        explanation:
          "A sustained drop in velocity alongside deteriorating command is one of the clearest fatigue indicators teams track. It's not pacing — it's a flag to weigh a change before effectiveness and safety both decline further.",
      },
      {
        id: "bb7-09-s2",
        label: "Mechanics Breakdown",
        situation:
          "Late in your start, your front side is flying open and your release point has drifted, so pitches sail arm-side.",
        prompt: "Why is a breakdown in mechanics a warning sign beyond just walks?",
        options: [
          "It only affects the strike zone, nothing else",
          "Tired mechanics both cost command and raise injury risk, because compensations load the arm in unsafe ways",
          "Mechanics never change during a game",
          "It means you should throw harder to compensate",
        ],
        correctIndex: 1,
        explanation:
          "When fatigue degrades mechanics, the arm often compensates for what the legs and core no longer provide, spiking stress on the elbow and shoulder. So a mechanical breakdown is both a performance and a health warning — not just a command issue.",
      },
      {
        id: "bb7-09-s3",
        label: "Pitch Count Context",
        situation:
          "You're at 110 pitches, a number where research shows injury risk and effectiveness loss climb, especially with high-stress innings behind you.",
        prompt: "How should pitch-count and workload data factor into the decision?",
        options: [
          "Pitch count is meaningless; only the score matters",
          "Rising pitch counts and stressful innings compound fatigue and injury risk, so they're a key input — not the only one — in deciding when you're done",
          "Always pitch a complete game regardless of count",
          "Pitch count only matters for relievers",
        ],
        correctIndex: 1,
        explanation:
          "High pitch counts and high-stress innings are linked to greater injury risk and declining results. They're a central data point — weighed with velocity, mechanics, and the game situation — in protecting both the outcome and the pitcher's arm.",
      },
      {
        id: "bb7-09-s4",
        label: "Long-Term Health",
        situation:
          "You want to keep grinding through obvious fatigue in a regular-season game, but the staff sees mounting Tommy John risk factors.",
        prompt: "What is the sound long-term philosophy on pushing through fatigue?",
        options: [
          "Toughness means finishing every outing no matter the warning signs",
          "Protecting arm health matters more than one start — heeding fatigue and risk signals prevents serious injury that costs far more than an inning",
          "Injuries are pure luck, so fatigue is irrelevant",
          "Only the postseason warrants caution",
        ],
        correctIndex: 1,
        explanation:
          "Ignoring clear fatigue and risk indicators to grind out one regular-season start trades a small short-term gain for major injury risk like a torn UCL. Respecting those signals — Buehler's two Tommy John surgeries underscore the stakes — is the durable approach.",
      },
    ],
  },

  "baseball-7-10": {
    intro:
      "Five Dodger greats, five blueprints. Match the strategy to the pitcher who mastered it.",
    spots: [
      {
        id: "bb7-10-s1",
        label: "Koufax's Simplicity",
        situation:
          "A pitcher dominates with essentially two pitches — an overpowering fastball and a devastating curve — reading the hitter's load to decide which to throw.",
        prompt: "What made this elegant, two-pitch approach so effective?",
        options: [
          "He confused hitters with a dozen different pitches",
          "Two elite pitches plus a clean read of the hitter's weight/timing meant he didn't need complex sequencing — overwhelming quality did the work",
          "He relied entirely on defense behind him",
          "He never threw strikes on purpose",
        ],
        correctIndex: 1,
        explanation:
          "Koufax's perfect-game blueprint was simplicity backed by dominance: fastball to set the count, curve when hitters committed forward. When both pitches are that good, reading the hitter's load is enough to know which to deploy.",
      },
      {
        id: "bb7-10-s2",
        label: "Hershiser's Craft",
        situation:
          "A pitcher averaging around 86 mph throws 59 consecutive scoreless innings without overpowering anyone.",
        prompt: "How does a pitcher dominate without big velocity?",
        options: [
          "By throwing even harder than the radar shows",
          "Through elite sequencing, location, and movement — establishing the outer half then changing eye level and lanes to keep hitters off balance",
          "By relying solely on luck and a great defense",
          "By walking hitters to set up double plays",
        ],
        correctIndex: 1,
        explanation:
          "Hershiser's streak ran on intelligence, not heat: sinker/slider to own the outer half, patterns hitters couldn't sit on, then attacking the weakness. It's the model for winning with sequencing and command over raw stuff.",
      },
      {
        id: "bb7-10-s3",
        label: "Valenzuela's Deception",
        situation:
          "A young pitcher rides a screwball and a distinctive, look-to-the-sky delivery to overwhelm the league.",
        prompt: "How does an unusual pitch plus delivery deception create an edge?",
        options: [
          "Hitters are scouted into total comfort against rare pitches",
          "A pitch hitters rarely see (a screwball) combined with deceptive timing gives them little experience and few reps to adjust to",
          "Deception only matters for relievers",
          "It violates the rules, so umpires intervene",
        ],
        correctIndex: 1,
        explanation:
          "Fernando's screwball broke opposite the league's usual breaking balls and his delivery hid the ball and disrupted timing. Hitters simply lacked reps against that combination, which is why novelty plus deception is a real strategic weapon.",
      },
      {
        id: "bb7-10-s4",
        label: "Kershaw's Evolution",
        situation:
          "An ace who once overpowered hitters with mid-90s velocity is now succeeding later in his career with diminished raw stuff.",
        prompt: "How do great pitchers sustain dominance as velocity fades?",
        options: [
          "They retire the moment velocity drops",
          "They lean harder on sequencing, command, pitch mix, and hitter knowledge to replace the edge that velocity used to provide",
          "They simply throw every pitch as hard as possible anyway",
          "Velocity loss has no effect on great pitchers",
        ],
        correctIndex: 1,
        explanation:
          "Kershaw's career arc — overpowering early, craft-driven later — shows the evolution every long-career pitcher must make: as velocity declines, command, sequencing, and deep hitter knowledge carry the load. Strategy outlasts raw stuff.",
      },
    ],
  },
};
