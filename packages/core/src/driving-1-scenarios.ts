import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the DRIVING epoch "Road to Your License"
// (California DMV test prep). Each spot is a deterministic rules-of-the-road
// decision — right-of-way, stopping rules, signs/signals, speed, and safe-driving
// choices that follow California Vehicle Code and the CA Driver Handbook. The
// marked answer is always the legally correct / safest action. correctIndex and
// explanation are server-only and stripped before reaching the client.
export const driving1Scenarios: Record<string, ScenarioConfig> = {
  "driving-1-01": {
    intro: "Before you ever touch the wheel legally you have to clear the first gate — the instruction permit. Make these requirements second nature.",
    spots: [
      {
        id: "drv1-01-s1", label: "Minimum Age",
        situation: "A teen has just turned exactly 15 years and 6 months old. She has her birth certificate, Social Security number, and a parent-signed consent form.",
        prompt: "Is she old enough to apply for a California instruction permit?",
        options: [
          "No — she must be at least 16 to apply for any permit",
          "No — the minimum is 15 years and 9 months",
          "Yes — 15 years and 6 months is the minimum age for an instruction permit",
          "Only if she has already finished a behind-the-wheel course",
        ],
        correctIndex: 2,
        explanation: "California's minimum age for an instruction permit is 15 years and 6 months — not 16. With her documents and parental consent, she is eligible to apply today.",
      },
      {
        id: "drv1-01-s2", label: "Supervised Practice",
        situation: "You hold a fresh instruction permit and want to practice driving on a Saturday afternoon.",
        prompt: "Who must be with you for it to be legal?",
        options: [
          "A California-licensed parent, guardian, spouse, or driver 25 or older in the front passenger seat",
          "Any friend who also holds an instruction permit",
          "No one — a permit lets you drive solo during the day",
          "A licensed 18-year-old in the front seat",
        ],
        correctIndex: 0,
        explanation: "A permit holder may never drive alone. In California a minor with a provisional permit must be supervised by a California-licensed parent, guardian, spouse, or a driver who is 25 or older, seated in the front passenger seat — never another permit holder.",
      },
      {
        id: "drv1-01-s3", label: "Parental Consent",
        situation: "A 16-year-old wants to apply for his permit, but his father cannot come to the DMV office with him that day.",
        prompt: "How can he still complete his application?",
        options: [
          "He can't — a parent must be physically present to sign in front of a clerk",
          "No consent is required once an applicant is 16",
          "He gets a restricted permit until his parent comes in later",
          "His father signs form DL 44C in advance and he brings the signed form",
        ],
        correctIndex: 3,
        explanation: "The DMV lets a parent or guardian sign form DL 44C ahead of time. The applicant brings the completed, signed form himself — the parent does not have to be present in person.",
      },
      {
        id: "drv1-01-s4", label: "At the Counter",
        situation: "You're at the DMV counter on application day, documents in hand, ready to earn your permit.",
        prompt: "Besides the written knowledge test, what else does the DMV require before issuing the permit?",
        options: [
          "Nothing else — passing the written test is the only step",
          "Pass a vision screening and pay the application fee",
          "Pass a full behind-the-wheel road test the same day",
          "Submit a blood test for medical clearance",
        ],
        correctIndex: 1,
        explanation: "Along with the written test you must pass a vision screening (about 20/40 in at least one eye) and pay the non-commercial application fee. The behind-the-wheel test comes later, for the license — not the permit.",
      },
    ],
  },

  "driving-1-02": {
    intro: "Almost half of first-time test takers fail. The ones who pass read the handbook and know the format cold. Let's lock it in.",
    spots: [
      {
        id: "drv1-02-s1", label: "Passing Score",
        situation: "You sit down for the California DMV written knowledge test. The proctor tells you it has 46 questions.",
        prompt: "How many must you answer correctly to pass?",
        options: [
          "30 out of 46",
          "38 out of 46 (about 82.6%)",
          "40 out of 46",
          "All 46 — a perfect score is required",
        ],
        correctIndex: 1,
        explanation: "You need 38 of 46 correct — roughly 82.6%. You can miss no more than 8 questions; 37 or fewer is a failing score.",
      },
      {
        id: "drv1-02-s2", label: "Study Source",
        situation: "Two students prepare for the test. One memorizes questions from a random 'DMV cheat sheet' website; the other reads the official handbook and uses the DMV's practice tests.",
        prompt: "Which is the reliable way to prepare?",
        options: [
          "Memorize the cheat-sheet site — it has the exact real questions",
          "Just recall how other people drive — the test is common sense",
          "Guess based on intuition the day of the test",
          "Read the California Driver Handbook cover to cover and use the official DMV practice tests",
        ],
        correctIndex: 3,
        explanation: "Every test question comes straight from the California Driver Handbook — there are no trick questions. The handbook plus the official DMV practice tests is the proven method; third-party cheat sheets are often outdated or wrong.",
      },
      {
        id: "drv1-02-s3", label: "After a Fail",
        situation: "An applicant scores 35 out of 46 — a failing score — and wants to retake the test as soon as possible.",
        prompt: "When is the earliest she can retake it?",
        options: [
          "The next business day — she cannot retake it the same day",
          "Immediately — there is no waiting period",
          "After a mandatory 30-day waiting period",
          "Never — a fail means starting the whole license process over",
        ],
        correctIndex: 0,
        explanation: "After failing, California makes you wait until the next business day to retake the test. You get up to three attempts per application fee paid.",
      },
      {
        id: "drv1-02-s4", label: "Language Access",
        situation: "A 17-year-old who recently moved to California speaks Spanish as a first language and worries about taking the test in English.",
        prompt: "What does the DMV offer him?",
        options: [
          "The test is English-only — he must bring his own interpreter",
          "He must first pass an English proficiency exam",
          "The test is available in many languages, including Spanish, plus an audio version on request",
          "Only English and Spanish are offered, with no other options",
        ],
        correctIndex: 2,
        explanation: "The DMV offers the knowledge test in multiple languages — Spanish, Chinese, Vietnamese, and others — plus an audio version on request. Language is not a barrier to getting a license.",
      },
    ],
  },

  "driving-1-03": {
    intro: "Every sign's shape and color is a message before you can even read the words. These are the regulatory signs you must obey.",
    spots: [
      {
        id: "drv1-03-s1", label: "The Stop Sign",
        situation: "You reach a red octagonal STOP sign at a quiet intersection. There is a marked limit line and no cross traffic in sight.",
        prompt: "What does the law require you to do?",
        options: [
          "Come to a complete stop at the limit line, then yield before proceeding",
          "Slow to about 5 mph and roll through since it's clear",
          "Stop only if cross traffic is actually present",
          "Treat it like a yield sign and merge without stopping",
        ],
        correctIndex: 0,
        explanation: "A STOP sign requires a full stop — wheels not rolling — at the limit line (or crosswalk/intersection edge), then yielding to traffic and pedestrians before you go. A rolling 'California stop' is a violation even when no one is around.",
      },
      {
        id: "drv1-03-s2", label: "Read the Shape",
        situation: "A sign is coming up. Before you can read any text, you can see it is a downward-pointing triangle with a red border and white center.",
        prompt: "What does that shape tell you to do?",
        options: [
          "Come to a complete stop, like a stop sign",
          "Read the number inside for the speed limit",
          "Slow down and give the right of way, stopping only if traffic requires it (YIELD)",
          "You are going the wrong way — turn around",
        ],
        correctIndex: 2,
        explanation: "The downward red-and-white triangle is used only for YIELD. Slow down and give the right of way to traffic already in the intersection or road, stopping only if needed. Shapes are designed to communicate before the text is readable.",
      },
      {
        id: "drv1-03-s3", label: "Posted Limit",
        situation: "A white sign reads 25. You're in a residential neighborhood on a clear, sunny day with no other traffic and good visibility.",
        prompt: "Is it legal to drive 30 mph here?",
        options: [
          "Yes — 5 mph over is acceptable in good conditions",
          "No — the posted limit is the maximum; 30 in a 25 zone is illegal",
          "Yes — the posted number is only a suggestion",
          "No — because 25 is actually the minimum speed",
        ],
        correctIndex: 1,
        explanation: "A posted speed limit is the maximum allowed under ideal conditions. Driving 30 in a 25 zone is speeding regardless of conditions — and the Basic Speed Law can require you to go even slower when conditions are poor.",
      },
      {
        id: "drv1-03-s4", label: "Prohibition Sign",
        situation: "Approaching an intersection you see a white regulatory sign: a curved U-turn arrow inside a red circle with a diagonal slash across it.",
        prompt: "You were planning to make a U-turn here. What must you do?",
        options: [
          "Make the U-turn — the sign only restricts trucks",
          "Make the U-turn only if no other cars are present",
          "Use your own judgment — the sign is just advisory",
          "Do not make the U-turn — the sign prohibits U-turns at this location",
        ],
        correctIndex: 3,
        explanation: "A red circle with a diagonal slash means the action shown is prohibited. This is a No U-Turn regulatory sign — U-turns are illegal here for all drivers, and you must obey it.",
      },
    ],
  },

  "driving-1-04": {
    intro: "Yellow diamonds warn you what's coming. The trick is to react early — before you're already in the hazard.",
    spots: [
      {
        id: "drv1-04-s1", label: "Warning Diamond",
        situation: "On a two-lane mountain road at 50 mph you see a yellow diamond-shaped sign with a sharply curving arrow ahead.",
        prompt: "What is the sign telling you to do?",
        options: [
          "Nothing — diamond signs are only informational",
          "Come to a complete stop before the curve",
          "Slow down before the curve — it warns your current speed may be unsafe for a sharp bend ahead",
          "Honk to warn oncoming drivers, then keep your speed",
        ],
        correctIndex: 2,
        explanation: "Yellow diamonds are warning signs. A curve sign tells you a sharp bend is ahead and your speed may be unsafe for it — slow down before you reach the curve, not while you're in it.",
      },
      {
        id: "drv1-04-s2", label: "School Zone",
        situation: "You pass an elementary school at 2:30 PM. The school-zone sign's flashing yellow light is ON, the posted limit is 25 mph, and your speedometer reads 35.",
        prompt: "Are you breaking the law?",
        options: [
          "No — the limit only applies if you can actually see children on the street",
          "Yes — when the flashing light is active you must drive 25, whether or not you see children",
          "No — there's a 10 mph grace tolerance in school zones",
          "Yes — but only if a crossing guard is on duty",
        ],
        correctIndex: 1,
        explanation: "When a school zone's flashing light is active, the 25 mph limit is in force regardless of whether children are visible. Driving 35 there is a speeding violation, usually with steeper fines than ordinary speeding.",
      },
      {
        id: "drv1-04-s3", label: "Railroad Crossing",
        situation: "You approach a railroad crossing. As you near it, the red lights on the crossbuck begin flashing. There is no gate, but the lights are flashing.",
        prompt: "What must you do?",
        options: [
          "Slow to 15 mph and ease through — a gate is required before you must stop",
          "Proceed if you don't see a train coming",
          "Yield, then roll across if traffic is clear",
          "Stop at least 15 feet from the nearest rail and wait until the lights stop flashing",
        ],
        correctIndex: 3,
        explanation: "Flashing red lights at a crossing are a legal stop — you must stop at least 15 feet from the nearest rail and wait until they stop. A gate is not required to make the stop mandatory, and you must never cross while the lights flash.",
      },
      {
        id: "drv1-04-s4", label: "Guide Signs",
        situation: "You're low on gas on an unfamiliar highway and start scanning the roadside signs for the next services exit.",
        prompt: "What color sign points you to motorist services like gas, food, and lodging?",
        options: [
          "Blue — motorist service signs are blue",
          "Green — the same as route and distance signs",
          "Brown — the same as parks and recreation signs",
          "Yellow — like all the warning signs",
        ],
        correctIndex: 0,
        explanation: "Blue rectangular signs mark motorist services (gas, food, lodging, hospitals). Green is for routes and distances, brown for recreational and historic sites, and yellow is reserved for warnings.",
      },
    ],
  },

  "driving-1-05": {
    intro: "The posted number is the maximum — never the guarantee. Manage your speed and your space for the conditions you're actually in.",
    spots: [
      {
        id: "drv1-05-s1", label: "Basic Speed Law",
        situation: "You're on a freeway posted at 65 mph, but heavy rain has cut visibility to about 100 feet and the pavement is slick. You're holding 65.",
        prompt: "Are you violating California law?",
        options: [
          "No — you're at the posted limit, which is always legal",
          "Yes — the Basic Speed Law requires a speed safe for conditions, even below the posted limit",
          "No — the 65 limit applies in all weather unless a temporary sign lowers it",
          "Yes — but only if a CHP officer happens to witness it",
        ],
        correctIndex: 1,
        explanation: "The Basic Speed Law (Vehicle Code §22350) says you may never drive faster than is safe for current conditions. With 100 feet of visibility on a slick road at 65, you'd need far more room to stop — so the posted-limit speed is unsafe and illegal here.",
      },
      {
        id: "drv1-05-s2", label: "Default Limit",
        situation: "You drive onto a neighborhood street lined with houses on both sides. There is no speed-limit sign anywhere on the block.",
        prompt: "What is the speed limit?",
        options: [
          "35 mph — the standard default for unmarked roads",
          "45 mph — residential streets default to 45",
          "25 mph — California's default limit for a residential district",
          "55 mph — the default applies everywhere unless posted lower",
        ],
        correctIndex: 2,
        explanation: "California's prima facie (default) limit in a residential district is 25 mph even with no sign posted — the same default that applies in school zones during school hours. You're expected to know it without a sign.",
      },
      {
        id: "drv1-05-s3", label: "Following Distance",
        situation: "At 55 mph you pick a bridge pillar as a reference. The car ahead passes it and you count 'one-thousand-one... one-thousand-two...' — but you pass the pillar before reaching three.",
        prompt: "What does that tell you?",
        options: [
          "You're following too closely — you have less than 3 seconds of space; back off",
          "You're at the perfect distance — 2 seconds is the standard",
          "You're too far back — close the gap",
          "The 3-second rule only applies on freeways, not two-lane roads",
        ],
        correctIndex: 0,
        explanation: "The 3-second rule applies on all roads. Reaching the reference point before counting to three means under 3 seconds of following distance — not enough time to react and stop if the car ahead brakes. Increase your distance.",
      },
      {
        id: "drv1-05-s4", label: "Adjust for Conditions",
        situation: "You're driving at night, and a steady rain has made the road wet and the lane lines hard to see.",
        prompt: "How should you adjust your following distance from the normal 3 seconds?",
        options: [
          "Keep exactly 3 seconds — conditions don't change the rule",
          "Cut it to about 1 second so you can keep pace with traffic",
          "Increase it to 4 or more seconds because of the rain and darkness",
          "Tailgate the car ahead to use its taillights as a guide",
        ],
        correctIndex: 2,
        explanation: "Rain and darkness lengthen stopping distance and shorten how far ahead you can see, so increase following distance — at least 4 seconds in rain or at night, and 5 or more on slippery roads or behind large trucks.",
      },
    ],
  },

  "driving-1-06": {
    intro: "Right of way is never taken — it is given. You yield it to avoid a collision, even when it's technically yours.",
    spots: [
      {
        id: "drv1-06-s1", label: "Four-Way Stop",
        situation: "You reach a 4-way stop at the same instant as a vehicle directly to your right. No one else is at the intersection.",
        prompt: "Who has the right of way?",
        options: [
          "You do — you arrived a split second first",
          "The larger vehicle goes first",
          "The vehicle to your right — on a simultaneous arrival, yield to the right",
          "Neither — you both wait until one waves the other through",
        ],
        correctIndex: 2,
        explanation: "When two vehicles reach a 4-way stop at the same time, the one on the right goes first. You yield. The rule is consistent whenever arrival times are tied.",
      },
      {
        id: "drv1-06-s2", label: "Left Turn",
        situation: "You have a green light and want to turn left. Oncoming traffic is approaching at about 40 mph, and you think you can squeeze the turn in before they arrive.",
        prompt: "What must you do before turning?",
        options: [
          "Yield to the oncoming straight traffic — a left turn always yields to it, even on green",
          "Proceed — a green light gives every movement equal right of way",
          "Flash your signal and go — oncoming traffic must slow for a turning car",
          "Wait only if the oncoming car is within 100 feet",
        ],
        correctIndex: 0,
        explanation: "A left turn always yields to oncoming straight traffic. A green light lets you enter the intersection, but you must wait for a safe gap. Misjudging this is one of California's most common — and most dangerous — intersection crashes.",
      },
      {
        id: "drv1-06-s3", label: "Pedestrian",
        situation: "Driving through a shopping area on a green light, you see a pedestrian who has stepped off the curb into a marked crosswalk and is now about halfway across, in your lane.",
        prompt: "What must you do?",
        options: [
          "Proceed — your green light gives you priority over pedestrians",
          "Honk so the pedestrian hurries out of your way",
          "Proceed slowly — pedestrians must yield when your signal is green",
          "Yield — a pedestrian in a marked crosswalk has the right of way, even on your green",
        ],
        correctIndex: 3,
        explanation: "A pedestrian in a marked crosswalk always has the right of way. A green light does not override that. You must yield to anyone in or entering the crosswalk in your path.",
      },
      {
        id: "drv1-06-s4", label: "Emergency Vehicle",
        situation: "On a two-lane road you hear a siren and see an ambulance with flashing red lights closing fast behind you. You're nearing an intersection.",
        prompt: "What is the correct action?",
        options: [
          "Speed up to clear the intersection, then pull over on the far side",
          "Pull to the right edge of the road and stop, without blocking the intersection, until it passes",
          "Stop immediately right where you are, even if you're in the intersection",
          "Keep driving at your normal speed — emergency vehicles use their own lane",
        ],
        correctIndex: 1,
        explanation: "When an emergency vehicle approaches with lights and siren, pull to the right edge and stop — but don't stop inside an intersection. Clear it first if you can, then pull over and wait until the vehicle has passed.",
      },
    ],
  },

  "driving-1-07": {
    intro: "For drivers under 21, even one drink can cost the license. California's zero tolerance law means exactly that — zero.",
    spots: [
      {
        id: "drv1-07-s1", label: "Zero Tolerance",
        situation: "A 17-year-old with a provisional license has two beers over two hours at a party and feels completely sober. A test measures his BAC at 0.03%.",
        prompt: "Has he violated California law by driving?",
        options: [
          "No — 0.03% is well under the 0.08% DUI limit",
          "Yes — under 21, it's illegal to drive at 0.01% BAC or higher (zero tolerance)",
          "No — the 0.08% limit applies to drivers of every age",
          "Yes — but only if he is involved in a crash",
        ],
        correctIndex: 1,
        explanation: "California's zero tolerance law (Vehicle Code §23136) bars drivers under 21 from driving at 0.01% BAC or higher. His 0.03% is three times that limit, and feeling sober is irrelevant — the law is based on measured BAC.",
      },
      {
        id: "drv1-07-s2", label: "Curfew + Passengers",
        situation: "A 16-year-old got her provisional license a month ago. It's 11:45 PM, and three friends — all 16, none licensed — want her to drive them home.",
        prompt: "Which provisional-license restrictions are being violated?",
        options: [
          "None — a provisional license has the same privileges as a full one",
          "Only the passenger rule — curfew doesn't apply on weekends",
          "Only the curfew — passenger limits apply only on school nights",
          "Both — no driving 11 PM–5 AM and no passengers under 20 without a qualifying adult",
        ],
        correctIndex: 3,
        explanation: "Two restrictions apply, every night, during the first 12 months: no driving between 11 PM and 5 AM, and no passengers under 20 unless a licensed parent/guardian or licensed driver 25+ is present. At 11:45 PM with three unlicensed 16-year-olds, both are broken.",
      },
      {
        id: "drv1-07-s3", label: "Phone Rules",
        situation: "A 17-year-old driver takes a hands-free Bluetooth call. Her phone is mounted on the dashboard and both hands stay on the wheel the whole time.",
        prompt: "Is this legal under California law?",
        options: [
          "No — drivers under 18 may not use a phone in any way while driving, even hands-free",
          "Yes — hands-free use is allowed for every driver",
          "Yes — as long as the phone is mounted, any call is fine",
          "No — Bluetooth calls are legal only on freeways, not surface streets",
        ],
        correctIndex: 0,
        explanation: "Drivers under 18 cannot use a wireless device at all while driving — including hands-free calls. The hands-free exception applies only to drivers 18 and older.",
      },
      {
        id: "drv1-07-s4", label: "Passenger Limit",
        situation: "A 16-year-old has held a provisional license for two months. At 2 PM on a school day he wants to drive two 16-year-old friends to the mall, with no adult in the car.",
        prompt: "Is this allowed?",
        options: [
          "Yes — daytime driving carries no passenger limits",
          "Yes — provisional drivers may carry up to two passengers",
          "No — for the first 12 months he can't carry passengers under 20 without a licensed parent/guardian or licensed driver 25+ present",
          "No — but the restriction only applies after 11 PM",
        ],
        correctIndex: 2,
        explanation: "For the first 12 months (or until 18), a provisional driver may not transport passengers under 20 unless a licensed parent/guardian or a licensed driver 25 or older is in the vehicle. The restriction applies all day, not just at night.",
      },
    ],
  },

  "driving-1-08": {
    intro: "The examiner isn't trying to fail you — they're verifying you can drive safely. Know what gets scored, and what ends the test on the spot.",
    spots: [
      {
        id: "drv1-08-s1", label: "Critical vs Minor",
        situation: "During your drive test you enter an intersection and run a red light. Later, while turning right, you forget to look over your shoulder to check your blind spot.",
        prompt: "Which of these, if either, causes an automatic test failure?",
        options: [
          "Neither — both are minor point deductions",
          "The red light — running it is a critical error (instant fail); the missed blind-spot check is a minor error",
          "The blind spot only — observation checks are the critical errors",
          "Both — each one is an automatic failure on its own",
        ],
        correctIndex: 1,
        explanation: "Running a red light is a critical error that fails the test immediately. A missed blind-spot check is a minor error (deduction) — though enough minor errors, more than 15, also fails you.",
      },
      {
        id: "drv1-08-s2", label: "Lane Change",
        situation: "On a two-lane road, the examiner asks you to move into the right lane.",
        prompt: "What is the correct order of steps before changing lanes?",
        options: [
          "Signal → move into the lane → check mirror → check blind spot",
          "Move immediately, then signal and check mirrors once you're over",
          "Check mirrors → signal → check the blind spot over your shoulder → move smoothly",
          "Check the blind spot → move → signal while you're changing",
        ],
        correctIndex: 2,
        explanation: "The right sequence is mirrors, signal, blind-spot shoulder check, then a smooth move into the lane. Moving before the shoulder check is a common — and dangerous — omission examiners watch for.",
      },
      {
        id: "drv1-08-s3", label: "Stop Sign",
        situation: "The examiner directs you to turn left at the next intersection, which has a STOP sign. You slow to about 3 mph but your wheels never fully stop, then complete the turn without incident.",
        prompt: "How will the examiner score this?",
        options: [
          "No deduction — slowing under 5 mph counts as a stop",
          "A minor point deduction for an imperfect stop",
          "No deduction — errors are scored only if you nearly cause a collision",
          "Automatic failure — a rolling stop is scored as running the stop sign",
        ],
        correctIndex: 3,
        explanation: "A rolling stop is treated as running the stop sign — a critical error and automatic failure. The examiner requires a complete stop with the wheels fully stopped. It's one of the most common reasons people fail.",
      },
      {
        id: "drv1-08-s4", label: "Signal Distance",
        situation: "Approaching a right turn, you wait until you are 50 feet from the intersection to switch on your turn signal and begin turning.",
        prompt: "Have you met California's turn-signal requirement?",
        options: [
          "No — California requires signaling at least 100 feet before a turn, so 50 feet is too late",
          "Yes — any signal before the turn is legally enough",
          "Yes — 50 feet is the legal minimum for surface-street turns",
          "No — signals must be on at least 300 feet ahead of a turn",
        ],
        correctIndex: 0,
        explanation: "California requires signaling at least 100 feet before a turn. Signaling at 50 feet is too late and is marked as an error on the drive test. (On freeways, signal at least 5 seconds before a lane change.)",
      },
    ],
  },
};
