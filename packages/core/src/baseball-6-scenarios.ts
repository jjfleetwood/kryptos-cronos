import type { ScenarioConfig } from "./types";

// "Call the Pitch" Decision-Trainer scenarios for the Pitch Arsenal epoch.
// Each spot is a deterministic pitching decision — which pitch to throw, how to
// grip it, or how to sequence it — judged on real baseball physics and strategy,
// never on luck. correctIndex and explanation are stripped server-side before
// they reach the client.
export const baseball6Scenarios: Record<string, ScenarioConfig> = {
  // ─── baseball-6-01: Four-Seam Fastball ───────────────────────────────────────
  "baseball-6-01": {
    intro:
      "You're on the Dodger Stadium mound establishing your four-seam fastball. Grip it right, spin it right, and put it where the rise effect lives.",
    spots: [
      {
        id: "bb6-01-s1",
        label: "The Grip",
        situation: "You're setting your four-seam grip in the bullpen before an inning.",
        prompt: "How should the index and middle fingers sit on the ball?",
        options: [
          "Across the horseshoe seam, with fingertip pressure and a relaxed thumb underneath",
          "Buried deep in the palm so you can really push the ball",
          "Along the two narrow parallel seams, like a two-seamer",
          "Split wide around the equator of the ball",
        ],
        correctIndex: 0,
        explanation:
          "The four-seamer is held with the fingertips across the horseshoe seam so all four seams cut the air each revolution. Fingertip pressure keeps the wrist loose for a full snap; a deep palm grip kills wrist flexion, costing both spin and velocity.",
      },
      {
        id: "bb6-01-s2",
        label: "Same Velo, Different Result",
        situation:
          "Two pitchers both sit 94 mph. One spins it at 2,600 rpm, the other at 1,900 rpm. You want the swing-and-miss profile up in the zone.",
        prompt: "Which spin rate gives you the elevated-fastball weapon, and why?",
        options: [
          "1,900 rpm — lower spin means less drag and a faster, flatter pitch",
          "2,600 rpm — stronger backspin Magnus force fights gravity, so the ball drops less and hitters swing under it",
          "Spin rate doesn't matter at the same velocity — location is everything",
          "1,900 rpm — it behaves like a sinker, which always misses more bats",
        ],
        correctIndex: 1,
        explanation:
          "At equal velocity, the higher-spin (2,600 rpm) four-seamer generates a stronger Magnus Effect. It falls less than gravity predicts, arriving higher than the hitter's timing expects — the perceived rise that produces whiffs at the top of the zone. The 1,900-rpm ball drops more and gets squared up.",
      },
      {
        id: "bb6-01-s3",
        label: "Where to Live",
        situation:
          "Your coach reminds you: the four-seamer up is your strikeout pitch, the four-seamer down is your get-me-out pitch.",
        prompt: "Where do you locate a high-spin four-seamer to chase a swing-and-miss?",
        options: [
          "Down at the knees, where it works like a sinker",
          "Middle-middle, so it's a strike no matter what",
          "Up at the letters, where the rise effect is most pronounced",
          "Off the plate inside, hoping for a chase",
        ],
        correctIndex: 2,
        explanation:
          "The rise effect is most deceptive at the top of the zone, where the ball stays above the hitter's expected plane and they swing under it. Down in the zone the four-seamer loses that advantage and gets attacked on a flatter swing — that's where hard contact comes from.",
      },
      {
        id: "bb6-01-s4",
        label: "Set the Table",
        situation:
          "First inning, you throw 82 mph. Your coach wants a high four-seam percentage early even though hitters are clearly sitting fastball.",
        prompt: "Why establish the fastball when the hitters already expect it?",
        options: [
          "It's a mistake — open with off-speed to surprise them instead",
          "It locks the hitters' timing to your velocity, so the off-speed you throw later plays slower and more disorienting",
          "It only works above 95 mph; below that it backfires",
          "Pitch selection doesn't matter until later in the game",
        ],
        correctIndex: 1,
        explanation:
          "Hitters calibrate their internal clock to what they see early. Establish 82 mph and a 70-mph curve later arrives 12 mph behind their timing. Off-speed pitches are measured as a differential from the fastball, so the fastball is the reference point every other pitch exploits.",
      },
    ],
  },

  // ─── baseball-6-02: Two-Seam Fastball and Sinker ─────────────────────────────
  "baseball-6-02": {
    intro:
      "The two-seamer and sinker don't miss bats — they miss barrels. Read the grip, the movement, and the ground-ball game plan.",
    spots: [
      {
        id: "bb6-02-s1",
        label: "Reading the Run",
        situation:
          "You're a right-handed pitcher. Your two-seamer tails in on a right-handed hitter, jams him on the hands, breaks his bat, and produces a dribbler.",
        prompt: "A teammate says you missed your spot and hit him. Who's right?",
        options: [
          "Your coach — the two-seamer is designed to run in on same-side hitters and saw them off for weak contact",
          "Your teammate — any pitch near the hands is uncontrolled, regardless of result",
          "Neither — a broken-bat grounder is pure hitter error",
          "Your teammate — only a ground ball counts as success, not a jam shot",
        ],
        correctIndex: 0,
        explanation:
          "Arm-side run is the two-seamer's whole purpose. Against a same-handed hitter it tails toward the hands, so the batter catches it off the thin handle — a jam. That's the intended movement pattern executed perfectly, not a missed location.",
      },
      {
        id: "bb6-02-s2",
        label: "Know Your Defense",
        situation:
          "Your infield is shaky on grounders today but your outfield is excellent. You carry both a four-seamer and a sinker.",
        prompt: "Which pitch should you favor in this game?",
        options: [
          "The four-seamer — elevate for whiffs and fly balls your strong outfield can handle, keeping balls off your weak infield",
          "The sinker — ground balls always produce outs regardless of who's fielding",
          "The sinker — send everything to the infield to keep it simple",
          "It shouldn't change — defense never affects pitch selection",
        ],
        correctIndex: 0,
        explanation:
          "Pitch selection should account for the defense behind you. With a weak infield and strong outfield, you want balls in the air: an elevated four-seamer produces whiffs (no defense needed) and fly balls your outfielders catch. Sinkers would funnel contact straight to your weakest fielders.",
      },
      {
        id: "bb6-02-s3",
        label: "Flat Sinker Mystery",
        situation:
          "Your sinker sinks sharply some days and stays flat on others. Rapsodo shows identical spin RATE on both days, but the spin AXIS has shifted on the flat days.",
        prompt: "Why does the same spin rate produce less sink?",
        options: [
          "Spin rate is the only thing that matters — the readings must be wrong",
          "A shifted axis turns more of the spin into gyro (movement-less) spin, reducing the downward-Magnus component despite equal rpm",
          "Cold weather makes the ball heavier and flatter",
          "The flat days simply have lower velocity",
        ],
        correctIndex: 1,
        explanation:
          "Spin rate is how fast the ball rotates; spin axis is the direction that rotation pushes air. A sinker needs an axis that maximizes downward Magnus force. Shift the axis and more spin becomes gyroscopic — same rpm, less active spin, less sink. That's the 'active spin' principle.",
      },
      {
        id: "bb6-02-s4",
        label: "Break the Pattern",
        situation:
          "You've thrown three straight sinkers down to a hitter and he's adjusted, staying low and squaring the third one up. The catcher flashes sinker again.",
        prompt: "What's the better call?",
        options: [
          "Throw the sinker again — stay with what was working",
          "Go up in the zone with a four-seamer or change speeds to reset his adjusted low-ball timing",
          "Throw the sinker harder — a few extra mph is enough",
          "Always defer to the catcher's sign no matter what",
        ],
        correctIndex: 1,
        explanation:
          "The sinker worked by establishing a pattern, not by endless repetition. Once the hitter has adapted his swing path low, an elevated four-seamer attacks the opposite plane and the off-speed resets his timing. Great pitchers think in sequences, not in repeated identical pitches.",
      },
    ],
  },

  // ─── baseball-6-03: The Changeup ─────────────────────────────────────────────
  "baseball-6-03": {
    intro:
      "The changeup lives or dies on deception. Same arm, same release, slower ball — sell it and let the hitter beat himself.",
    spots: [
      {
        id: "bb6-03-s1",
        label: "Don't Tip It",
        situation:
          "A hitter recognized your changeup early and lined it for a single. Your catcher says your arm visibly slowed down on the pitch.",
        prompt: "What's the fix?",
        options: [
          "Accept it — the grip can't slow the ball enough on its own, so some arm deceleration is required",
          "Throw it with full fastball arm speed and let the grip's drag do the velocity reduction",
          "Switch to a deeper grip so arm slowdown won't matter",
          "Nothing — the hitter just guessed right",
        ],
        correctIndex: 1,
        explanation:
          "Arm slowdown is the most visible changeup tell; hitters read it before the ball leaves the hand and simply wait. The circle/off-center grips exist precisely so you can throw with fastball aggression and the grip alone bleeds the velocity. Think fast, throw fast — the grip handles the rest.",
      },
      {
        id: "bb6-03-s2",
        label: "Mind the Gap",
        situation:
          "You throw a 68-mph fastball. Your 'changeup' comes in at 64 mph — only 4 mph slower — and hitters keep adjusting to it.",
        prompt: "What speed differential do you actually need?",
        options: [
          "4 mph is fine — youth hitters can't detect small speed changes",
          "A 10–15 mph gap, so the hitter commits his hips before the ball arrives and can't recover",
          "A 2 mph gap is even harder to detect and better",
          "Differential is irrelevant — only the movement matters",
        ],
        correctIndex: 1,
        explanation:
          "Hitters can adjust their swing timing by roughly 5–6 mph mid-swing, so a 4-mph change falls inside their recovery window. At 10–15 mph slower they've already fired their hips before the ball gets there — an irrecoverable early commitment, which is the entire point of the changeup.",
      },
      {
        id: "bb6-03-s3",
        label: "Full-Count Nerve",
        situation:
          "3-2 count, two outs, runner on second. You have a good fastball and a developing changeup. The catcher signals changeup and your coach later praises the call.",
        prompt: "Why is a full-count changeup a smart, advanced call?",
        options: [
          "It isn't — a full count always demands a fastball strike",
          "Everyone expects fastball in a full count, so the changeup catches a hitter who is most committed to swinging",
          "Changeups only work in full counts against lefties",
          "Only if you've already thrown five changeups this at-bat",
        ],
        correctIndex: 1,
        explanation:
          "A full count is an ideal changeup spot precisely because hitter and runner both expect fastball and have committed their timing to it. A well-sold changeup catches the hitter lunging for weak contact or a whiff — the least expected pitch in the most 'obvious' fastball count.",
      },
      {
        id: "bb6-03-s4",
        label: "Second Pitch First",
        situation:
          "A 12-year-old asks whether to learn a curveball or a changeup next. The coach says changeup first.",
        prompt: "What's the reasoning?",
        options: [
          "Curveballs are illegal at that age",
          "The changeup uses fastball arm action with no extra elbow stress, while the curveball adds torque that risks a young, developing growth plate",
          "Changeups are simply easier to throw for strikes",
          "A curveball needs 90+ mph velocity to work at all",
        ],
        correctIndex: 1,
        explanation:
          "The changeup is the safe second pitch: identical fastball mechanics, velocity reduction from the grip, no new elbow torque. The curveball loads the UCL and medial growth plate, which is still developing through ages 12–16 — so ASMI recommends waiting until roughly 13–14 for breaking balls.",
      },
    ],
  },

  // ─── baseball-6-04: The Curveball ────────────────────────────────────────────
  "baseball-6-04": {
    intro:
      "The curveball is topspin in reverse of the fastball — Magnus force that adds to gravity. Make it bite, and know when an arm is ready for it.",
    spots: [
      {
        id: "bb6-04-s1",
        label: "Why It Loops",
        situation:
          "A young pitcher's curveball spins the right direction but just arcs slowly instead of snapping — a lazy 'cement mixer' that hitters drive.",
        prompt: "What's the most likely cause?",
        options: [
          "His hands are too small to grip it properly",
          "Low spin rate means a weak Magnus force, so the ball follows a gentle gravity arc instead of a sharp, late break",
          "He's releasing the ball too late",
          "A loopy curve is actually better — more time to miss",
        ],
        correctIndex: 1,
        explanation:
          "The curveball's downward Magnus force scales with spin rate. High, efficient topspin adds force to gravity for a sharp, late break; low spin lets the ball drift on gravity's slow arc, which hitters can time. Faster finger snap and wrist rotation are the levers that tighten the break.",
      },
      {
        id: "bb6-04-s2",
        label: "Ready or Not",
        situation:
          "A 12-year-old has a natural curveball grip and wants to throw it in games. His parents say 'if it feels natural, let him.' His coach says wait a year.",
        prompt: "Who's right and why?",
        options: [
          "The parents — a natural-feeling grip means safe mechanics",
          "The coach — at 12 the elbow growth plate is still open and curveball torque correlates with injury regardless of how the grip feels",
          "The parents — the ASMI guidance only applies if the elbow already hurts",
          "The coach — but only because curveballs are useless at youth velocity",
        ],
        correctIndex: 1,
        explanation:
          "'Feels natural' describes grip comfort, not biomechanical safety. The curveball stresses the UCL and the medial-epicondyle growth plate, which hasn't closed at 12. ASMI's guideline is age-based (about 13–14) because physiology, not feel, determines readiness.",
      },
      {
        id: "bb6-04-s3",
        label: "Expected and Still Unhittable",
        situation:
          "Kershaw throws El Diablo in obvious breaking-ball counts. Hitters know it's coming and still can't handle it.",
        prompt: "Why is it so hard even when anticipated?",
        options: [
          "His release point and arm speed match his fastball, so a hitter can't start his downward adjustment until the break begins — too late",
          "It's only effective as a surprise; expecting it makes it hittable",
          "He throws it 95 mph",
          "Hitters are simply intimidated by his reputation",
        ],
        correctIndex: 0,
        explanation:
          "Kershaw's curve comes out of the same slot and arm speed as his fastball, so identification is delayed until the ball is already breaking. Combined with a near-vertical 12-6 axis and 2,800+ rpm, the late, sharp drop falls below a swing that was committed to a flatter plane.",
      },
      {
        id: "bb6-04-s4",
        label: "Pick the Break",
        situation:
          "You want the purest top-to-bottom plane — belt to knees to dirt — to drop straight down on a hitter.",
        prompt: "Which spin axis produces that pure vertical drop?",
        options: [
          "An 11-to-5 tilted axis for diagonal sweep",
          "A pure 12-to-6 vertical axis",
          "A horizontal axis like a four-seamer",
          "A flat gyro axis with no Magnus movement",
        ],
        correctIndex: 1,
        explanation:
          "A vertical 12-to-6 spin axis directs the Magnus force straight down for pure vertical break. Tilting the axis toward 11-5 trades some of that drop for lateral sweep — useful against opposite-handed hitters, but not the straight-down hammer.",
      },
    ],
  },

  // ─── baseball-6-05: The Slider ───────────────────────────────────────────────
  "baseball-6-05": {
    intro:
      "The slider lives between the fastball and the curve — late lateral bite at high velocity. Choose your shape, protect your elbow, and finish hitters.",
    spots: [
      {
        id: "bb6-05-s1",
        label: "Shape It",
        situation:
          "You want a hard, tight slider with late, short glove-side cut — more velocity, less sweep — to attack the back foot of opposite-handed hitters.",
        prompt: "Which shape are you describing?",
        options: [
          "A big sweeping slider (sweeper) with mostly horizontal movement",
          "A tight, harder 'gyro' slider with short, late break close to fastball velocity",
          "A 12-6 curveball with pure vertical drop",
          "A changeup with arm-side fade",
        ],
        correctIndex: 1,
        explanation:
          "A tight gyro slider carries a lot of bullet-like gyro spin, sits only a few mph under the fastball, and breaks short and late. The sweeper is the opposite trade — more side spin, more horizontal sweep, less velocity. Same family, two different jobs.",
      },
      {
        id: "bb6-05-s2",
        label: "Sweeper Matchup",
        situation:
          "You have a big east-west sweeper. You're facing a same-handed hitter, then an opposite-handed hitter.",
        prompt: "Against whom is the sweeper generally most effective?",
        options: [
          "The same-handed hitter — it sweeps away from his barrel, off the outer edge and out of the zone",
          "The opposite-handed hitter — it sweeps right into his happy zone",
          "It plays identically against both",
          "Neither — sweepers are only for getting ahead, never for swings",
        ],
        correctIndex: 0,
        explanation:
          "A sweeper breaks glove-side, away from a same-handed hitter, sweeping off the barrel for chases and weak contact. Against opposite-handed hitters it can back up over the middle, which is why many pitchers pair a sweeper with a pitch that runs the other way for the platoon disadvantage.",
      },
      {
        id: "bb6-05-s3",
        label: "Arm Safety",
        situation:
          "A pitcher falls in love with his slider and starts throwing it 40%+ of the time, often by twisting and supinating hard at release.",
        prompt: "What's the chief concern?",
        options: [
          "Nothing — more sliders simply means more strikeouts",
          "Heavy slider usage and violent supination are associated with elevated elbow/UCL stress, so usage should be managed",
          "Sliders are completely arm-neutral; only fastballs hurt",
          "The only risk is shoulder fatigue, not the elbow",
        ],
        correctIndex: 1,
        explanation:
          "The slider's late supinated snap loads the elbow, and research links high slider usage to elevated UCL stress and injury rates. It's a devastating pitch, but workload and mechanics must be managed — not thrown as a default 40% of the time.",
      },
      {
        id: "bb6-05-s4",
        label: "Kershaw's Evolution",
        situation:
          "Between 2012 and his 2014 Cy Young, Kershaw's slider became a dominant third pitch alongside his fastball and curve.",
        prompt: "What did adding an elite slider do for his arsenal?",
        options: [
          "Nothing — the curveball alone was always enough",
          "It gave him a hard breaking ball at a different speed and shape than the curve, splitting the zone and timing into three distinct looks",
          "It replaced his fastball as the primary pitch",
          "It made his changeup unnecessary to develop",
        ],
        correctIndex: 1,
        explanation:
          "The slider filled the velocity and movement gap between his rising four-seamer and his slow 12-6 curve. Three distinct speeds and break shapes from the same release made each pitch harder to identify and time — the foundation of his peak dominance.",
      },
    ],
  },

  // ─── baseball-6-06: The Cutter ───────────────────────────────────────────────
  "baseball-6-06": {
    intro:
      "The cutter is a fastball with a secret — a few inches of late glove-side cut off a four-seam look. Rivera built a Hall of Fame career on one pitch.",
    spots: [
      {
        id: "bb6-06-s1",
        label: "The Grip",
        situation:
          "You're learning the cutter and want that late, short glove-side movement while keeping near-fastball velocity.",
        prompt: "How is the cutter grip set relative to a four-seamer?",
        options: [
          "Buried deep in the palm like a palmball",
          "A four-seam grip shifted slightly off-center, with light pressure toward the middle finger to impart cut",
          "Split wide around the seams like a splitter",
          "Fingers along the narrow seams like a two-seamer for arm-side run",
        ],
        correctIndex: 1,
        explanation:
          "The cutter is essentially an off-center four-seamer — the grip slides slightly to the side and pressure favors the middle finger, tilting the axis just enough for late glove-side cut while preserving most of the fastball's velocity and look.",
      },
      {
        id: "bb6-06-s2",
        label: "Breaking Bats",
        situation:
          "Rivera, a righty, throws his cutter in on the hands of a left-handed hitter. The bat shatters and the ball dribbles away.",
        prompt: "Why is the cutter so famous for breaking bats?",
        options: [
          "It arrives looking like a fastball, then cuts late into the hands/handle of an opposite-handed hitter — too late to adjust",
          "It's thrown so slowly the bat can't catch up",
          "It has huge sweeping break the hitter sees early",
          "It only breaks bats by luck, not design",
        ],
        correctIndex: 0,
        explanation:
          "The cutter's deception is that it mirrors the four-seamer until the last few feet, then darts glove-side. To a left-handed hitter facing a righty, that late cut runs in on the label, jamming him before he can adjust — the signature broken-bat result.",
      },
      {
        id: "bb6-06-s3",
        label: "One Pitch, Whole Career",
        situation:
          "Rivera was famously a one-pitch pitcher, yet elite hitters knew the cutter was coming for nearly two decades and still couldn't square it.",
        prompt: "How does a known, single pitch stay dominant?",
        options: [
          "Hitters secretly didn't know it was coming",
          "Elite command and late, sharp movement at high velocity meant knowing the pitch didn't help them time or locate it",
          "He actually threw five other pitches no one mentions",
          "Umpires gave him every call",
        ],
        correctIndex: 1,
        explanation:
          "Knowing 'cutter' tells a hitter nothing if the movement is late and the location is pinpoint at the edges. Rivera's command let him work both halves of the plate, and the late cut beat the barrel even when anticipated — execution over surprise.",
      },
      {
        id: "bb6-06-s4",
        label: "Jansen's Lesson",
        situation:
          "Kenley Jansen built a closer career on his cutter, but lefties eventually began timing it middle-away, so the Dodgers had him add a changeup.",
        prompt: "What's the takeaway for a one-pitch reliever?",
        options: [
          "Never change anything once a pitch works",
          "A secondary pitch doesn't have to be dominant — it just has to exist convincingly enough to reintroduce doubt and protect the primary pitch",
          "He should have abandoned the cutter entirely",
          "Adding pitches always ruins a reliever's command",
        ],
        correctIndex: 1,
        explanation:
          "When hitters began sitting on the cutter, the changeup gave Jansen a same-look, different-speed, different-path option. It was never a put-away pitch, but forcing hitters to consider two outcomes restored the cutter's edge — the value of a credible second offering.",
      },
    ],
  },

  // ─── baseball-6-07: The Splitter and Forkball ────────────────────────────────
  "baseball-6-07": {
    intro:
      "Split the ball deep between your fingers and watch the bottom drop out. Nomo made the forkball a Dodger Stadium sensation — handle it with care.",
    spots: [
      {
        id: "bb6-07-s1",
        label: "Why It Drops",
        situation:
          "You wedge the ball deep between your index and middle fingers and throw it with fastball arm action. It tumbles and falls off the table near the plate.",
        prompt: "Why does the splitter dive so sharply?",
        options: [
          "The deep grip adds extra backspin for a rising fastball effect",
          "The split fingers kill spin, so the ball has little Magnus lift and drops faster than the hitter's fastball read expects",
          "The fingers add pure topspin like a curveball",
          "It dives only because it's thrown 30 mph slower",
        ],
        correctIndex: 1,
        explanation:
          "Splitting the fingers deep dampens backspin, so the ball generates far less upward Magnus force than a fastball. With the bottom falling out late off a fastball look and arm speed, the hitter reads fastball, swings on that plane, and the ball dives under the barrel.",
      },
      {
        id: "bb6-07-s2",
        label: "Sell the Fastball",
        situation:
          "Your splitter is sharpest when the hitter is convinced a fastball is coming until the last instant.",
        prompt: "What makes the splitter deceptive?",
        options: [
          "A deliberately slower, telegraphed arm so the hitter relaxes",
          "Fastball arm speed and release that mimic the heater, so the late drop arrives after the hitter has committed",
          "An exaggerated wrist snap the hitter can read early",
          "A wildly different release point from the fastball",
        ],
        correctIndex: 1,
        explanation:
          "Like the changeup, the splitter relies on matching the fastball's arm speed and release. The hitter commits to fastball timing and plane; the late dive then beats the barrel. Slowing the arm or changing the slot tips the pitch and erases the deception.",
      },
      {
        id: "bb6-07-s3",
        label: "Hand and Health",
        situation:
          "Two pitchers want a splitter: one has long fingers and a large hand, the other has small hands and a still-developing arm.",
        prompt: "What's the right guidance?",
        options: [
          "Both should throw it heavily right away — it's harmless",
          "It suits larger hands that can split the ball comfortably; the deep spread stresses the forearm/elbow, so young or small-handed arms should be cautious and limit volume",
          "Only small hands can grip it correctly",
          "Hand size is irrelevant; only velocity matters",
        ],
        correctIndex: 1,
        explanation:
          "The splitter's wide finger spread is easier and safer for larger hands, and the grip places extra strain on the forearm and elbow. It's generally treated as a more advanced, higher-stress pitch — best added by mature arms and kept to a managed workload.",
      },
      {
        id: "bb6-07-s4",
        label: "Nomomania",
        situation:
          "In 1995, Hideo Nomo's forkball and unusual delivery made him a Dodger Stadium phenomenon, baffling hitters who'd never seen the pitch.",
        prompt: "Why was his forkball initially so effective in MLB?",
        options: [
          "It was thrown harder than anyone else's fastball",
          "Its sharp, splitter-like tumbling drop was unfamiliar to hitters and paired with a deceptive windup, so they had no timing reference for it",
          "Umpires expanded the zone for him",
          "He only ever threw it on 0-2 counts",
        ],
        correctIndex: 1,
        explanation:
          "The forkball — a deep-grip cousin of the splitter — produced a late tumbling drop few MLB hitters had faced, and Nomo's twisting 'Tornado' delivery hid the ball further. With no established timing reference, hitters chased the dive, fueling Nomomania in 1995.",
      },
    ],
  },

  // ─── baseball-6-08: Spin Rate, Spin Axis, and Rapsodo ────────────────────────
  "baseball-6-08": {
    intro:
      "Numbers don't lie on the mound. Rapsodo and Statcast turn feel into data — read spin rate, spin axis, and active spin to build better pitches.",
    spots: [
      {
        id: "bb6-08-s1",
        label: "Rate vs. Axis",
        situation:
          "Your Rapsodo report shows two numbers for every pitch: spin rate and spin axis. A teammate thinks they mean the same thing.",
        prompt: "What's the difference?",
        options: [
          "They're the same metric in different units",
          "Spin rate is how fast the ball spins (rpm); spin axis is the direction the spin points, which determines which way the Magnus force pushes the ball",
          "Spin axis measures velocity; spin rate measures location",
          "Spin rate only matters for fastballs, axis only for curves",
        ],
        correctIndex: 1,
        explanation:
          "Spin rate (rpm) is the magnitude of rotation; spin axis is its orientation. Rate sets how much potential movement there is, axis sets the direction. You need both — a high rpm pointed at an inefficient axis still won't move the way you want.",
      },
      {
        id: "bb6-08-s2",
        label: "Active vs. Gyro",
        situation:
          "Two fastballs both read 2,400 rpm. One has 95% active spin, the other 70% active spin with lots of gyro spin.",
        prompt: "Which moves more, and why?",
        options: [
          "They move identically — total rpm is all that matters",
          "The 95% active-spin ball moves more, because more of its spin is the kind that creates Magnus movement rather than spin-less gyro",
          "The 70% ball moves more — gyro spin adds late break",
          "Neither moves; 2,400 rpm is too low",
        ],
        correctIndex: 1,
        explanation:
          "Only active (transverse) spin generates Magnus movement; gyro spin is the bullet-like component that produces none. At equal rpm, the 95%-active ball converts far more spin into ride or run. That's why two identical spin rates can play completely differently.",
      },
      {
        id: "bb6-08-s3",
        label: "Use the Data",
        situation:
          "A Dodger coach at Camelback Ranch has a pitcher tweak his grip a few millimeters, then re-measures on Rapsodo to confirm the change improved movement.",
        prompt: "What does this workflow demonstrate about modern development?",
        options: [
          "Movement is fixed at birth and data can't change it",
          "Grip is a precise, measurable skill — small adjustments can be tested objectively on Rapsodo instead of relying on feel alone",
          "Pitchers should ignore data and trust feel",
          "Only velocity, never movement, can be developed",
        ],
        correctIndex: 1,
        explanation:
          "Rapsodo lets coaches treat grip as a tunable input: shift a finger, measure the spin axis and movement, keep what works. It turns 'hold it this way' into measured iteration — the data-driven development model the Dodgers run organization-wide.",
      },
      {
        id: "bb6-08-s4",
        label: "Don't Chase Numbers",
        situation:
          "A pitcher with a 2,200-rpm fastball but excellent command and 95% active spin asks if he should overhaul his mechanics just to add raw rpm.",
        prompt: "What's the sound advice?",
        options: [
          "Chase rpm above all else — higher spin always wins",
          "Don't blow up command for raw rpm; high active spin plus location can outperform higher rpm that's inefficient or wild",
          "Quit pitching — 2,200 rpm can never succeed",
          "Add rpm by gripping the ball as hard as possible",
        ],
        correctIndex: 1,
        explanation:
          "Raw spin rate is only valuable when it's efficient and locatable. A 2,200-rpm fastball with 95% active spin and pinpoint command can beat a higher-rpm pitch that's inefficient or erratic. Data should guide development, not override command and movement quality.",
      },
    ],
  },

  // ─── baseball-6-09: Pitch Tunneling and Deception ────────────────────────────
  "baseball-6-09": {
    intro:
      "Great arsenals look identical until it's too late. Build pitches that share a tunnel, then break apart past the hitter's decision point.",
    spots: [
      {
        id: "bb6-09-s1",
        label: "The Tunnel Point",
        situation:
          "Your fastball and slider travel on the same path out of your hand, then separate roughly 20–25 feet from the plate.",
        prompt: "Why is sharing that early path so effective?",
        options: [
          "It lets the hitter see the spin earlier",
          "Both pitches look identical through the hitter's decision window, so he must commit before they break apart — and is wrong on one of them",
          "It makes both pitches slower",
          "It only matters for the catcher framing pitches",
        ],
        correctIndex: 1,
        explanation:
          "The hitter must decide to swing while the ball is still near the tunnel point. If two pitches overlap through that window and diverge only afterward, he commits to one read and can't adjust when the pitch separates late — the core of tunneling.",
      },
      {
        id: "bb6-09-s2",
        label: "Same Release",
        situation:
          "You release your changeup from a noticeably lower slot than your fastball, and hitters keep laying off it.",
        prompt: "What should you fix to tunnel better?",
        options: [
          "Throw the changeup even slower so it looks different on purpose",
          "Match the release point and arm slot to the fastball so the pitches share the same starting tunnel",
          "Change your grip to a curveball instead",
          "Move to the other side of the rubber for the changeup only",
        ],
        correctIndex: 1,
        explanation:
          "Tunneling requires a shared release point and arm slot. A different slot tips the pitch immediately, letting hitters identify and lay off it. Matching the slot keeps both pitches on the same early path so the hitter can't separate them until it's too late.",
      },
      {
        id: "bb6-09-s3",
        label: "Pair the Pitches",
        situation:
          "You want to tunnel two pitches so they look the same out of the hand but finish in opposite quadrants of the zone.",
        prompt: "Which classic pairing tunnels well?",
        options: [
          "A high four-seam fastball and a sharp 12-6 curve that share a slot but finish up vs. down",
          "Two identical fastballs to the same spot",
          "A pitch from over the top and another from a sidearm slot",
          "A slow lob and a slower lob",
        ],
        correctIndex: 0,
        explanation:
          "A rising four-seamer up and a 12-6 curve down out of the same slot is a textbook tunnel: identical early, then the fastball holds its plane while the curve drops away. Same look, opposite finishes — the hitter is wrong on whichever he didn't pick.",
      },
      {
        id: "bb6-09-s4",
        label: "Kershaw's Cohesion",
        situation:
          "Kershaw's fastball, slider, and curve are praised as one of the most cohesive tunneled arsenals in baseball.",
        prompt: "Why does that cohesion make each individual pitch better?",
        options: [
          "It doesn't — each pitch succeeds on its own merits alone",
          "Because all three share a release and early path, the hitter can't pre-identify any of them, so every pitch borrows deception from the others",
          "Because he throws all three at the exact same speed",
          "Because hitters are allowed only one guess per game",
        ],
        correctIndex: 1,
        explanation:
          "When three pitches emerge from the same tunnel, none can be identified early, so the hitter must respect all of them at once. The fastball makes the breaking balls play, and the breaking balls make the fastball play — the arsenal is greater than its parts.",
      },
    ],
  },

  // ─── baseball-6-10: Building Your Arsenal by Age ─────────────────────────────
  "baseball-6-10": {
    intro:
      "Arsenals are built in the right order. Master the fundamentals first, add pitches as the body matures, and follow the Pitch Smart ladder.",
    spots: [
      {
        id: "bb6-10-s1",
        label: "First Two Pitches",
        situation:
          "An 8-to-10-year-old is just starting to pitch and wants to learn 'all the pitches' immediately.",
        prompt: "Which two pitches form the right foundation at that age?",
        options: [
          "Slider and splitter",
          "A well-located four-seam fastball and a changeup",
          "Curveball and cutter",
          "Knuckleball and forkball",
        ],
        correctIndex: 1,
        explanation:
          "The foundation is fastball command plus a changeup, since both use safe fastball arm action with no extra elbow torque. Breaking balls come later. Building command and a changeup first develops feel and protects the young arm.",
      },
      {
        id: "bb6-10-s2",
        label: "When to Add the Hook",
        situation:
          "A 13-to-14-year-old with a solid fastball and changeup is ready to expand his arsenal as his body matures.",
        prompt: "Which pitch is generally appropriate to add next?",
        options: [
          "Nothing — never add a third pitch",
          "A curveball (and later a slider), introduced carefully at low volume as growth plates approach maturity",
          "A splitter thrown 50% of the time immediately",
          "A cutter at maximum effort every pitch",
        ],
        correctIndex: 1,
        explanation:
          "ASMI/Pitch Smart guidance puts breaking-ball introduction around 13–14, when the elbow is maturing. The curveball is the typical next pitch, added at low volume with sound mechanics — not a high-stress splitter or an all-out cutter diet.",
      },
      {
        id: "bb6-10-s3",
        label: "Protect the Arm",
        situation:
          "A youth coach wants to maximize a 12-year-old's innings during a busy tournament weekend.",
        prompt: "What does Pitch Smart prioritize?",
        options: [
          "Pitch count and rest limits, plus avoiding high-stress pitches, to protect the developing arm",
          "Throwing as many innings as the kid is willing to",
          "Adding a slider to get quick outs and save pitches",
          "Skipping rest days when the team needs wins",
        ],
        correctIndex: 0,
        explanation:
          "MLB Pitch Smart is built on pitch-count limits, mandated rest, and avoiding overuse and high-stress pitches at young ages. Winning a tournament never justifies exceeding count/rest guidelines — long-term arm health comes first.",
      },
      {
        id: "bb6-10-s4",
        label: "The Dodger Ladder",
        situation:
          "Yoshinobu Yamamoto reached the majors with a deep, refined arsenal, reflecting the Dodgers' development philosophy.",
        prompt: "What principle does that philosophy emphasize?",
        options: [
          "Throw as hard as possible and ignore everything else",
          "Build a complete, well-sequenced arsenal on a foundation of command and health, adding and refining pitches in the right order over time",
          "One dominant pitch is all any pitcher ever needs",
          "Skip the fundamentals and specialize in trick pitches early",
        ],
        correctIndex: 1,
        explanation:
          "The Dodger ladder develops command and durability first, then layers pitches in a sensible progression, refining shape and sequencing with data. Yamamoto exemplifies the payoff: a deep, cohesive arsenal built the right way, not raw velocity alone.",
      },
    ],
  },
};
