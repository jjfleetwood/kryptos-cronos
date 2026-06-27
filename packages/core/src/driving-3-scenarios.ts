import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the DRIVING epoch "Rules of the Road"
// (driving-3). Each spot is a deterministic, judgment-based driving decision —
// the correct line is the legally/safely correct one per the CA DMV handbook
// and California Vehicle Code, never a matter of chance. correctIndex and
// explanation are stripped server-side before reaching the client.
export const driving3Scenarios: Record<string, ScenarioConfig> = {
  // ─── driving-3-01: Eyes Up, Phone Down — distracted driving ────────────────
  "driving-3-01": {
    intro:
      "You're behind the wheel and the phone keeps pulling at your attention. Make the call that keeps your eyes on the road — and keeps you legal in California.",
    spots: [
      {
        id: "drv3-01-s1",
        label: "Red Light Text",
        situation:
          "You're 20 years old, stopped at a red light. Your phone is in your hand and a text just came in. The light is still red.",
        prompt: "Is it legal to type a quick reply while stopped at the light?",
        options: [
          "Yes — the car isn't moving, so phone use is allowed",
          "No — holding the phone is illegal even while stopped; it must be mounted and used with a single tap",
          "Yes — texting is only banned above 25 mph",
          "Only if you finish before the light turns green",
        ],
        correctIndex: 1,
        explanation:
          "California's hands-free law applies the entire time you're driving — including while stopped at a light. Adults may only use a phone that is in an approved mount, operated with a single tap or swipe. Holding the phone to type is illegal whether the car is moving or stopped.",
      },
      {
        id: "drv3-01-s2",
        label: "Under 18",
        situation:
          "You're 17, driving home with a hands-free Bluetooth earpiece. A friend calls and you could answer entirely voice-activated, without touching anything.",
        prompt: "What's the correct, legal choice?",
        options: [
          "Answer it — hands-free is legal for everyone",
          "Answer only because it's voice-activated",
          "Don't answer — drivers under 18 may not use a phone at all while driving, even hands-free",
          "Answer, but pull over first to talk",
        ],
        correctIndex: 2,
        explanation:
          "California Vehicle Code 23124 bans drivers under 18 from using any wireless device while driving — including hands-free and voice-activated use. The only exception is a genuine emergency call (such as 911). Let it go to voicemail and call back when parked.",
      },
      {
        id: "drv3-01-s3",
        label: "Navigation",
        situation:
          "You're an adult on the freeway and need to change your GPS destination. Your phone is mounted on the dash in an approved holder.",
        prompt: "How should you interact with the navigation app?",
        options: [
          "Take the phone off the mount so you can type the address faster",
          "Leave it mounted and use a single tap or swipe — or better, set it before you start driving",
          "Type the full address while holding the wheel with one hand",
          "Glance down and type as long as you keep one eye on the road",
        ],
        correctIndex: 1,
        explanation:
          "Even with a legal mount, the law allows only a single tap or swipe — not full typing. The safest practice is to enter your destination before you start moving. Removing the phone from the mount to type makes it 'handheld' and illegal, and typing an address is a multi-second visual-manual-cognitive distraction.",
      },
      {
        id: "drv3-01-s4",
        label: "The Glance",
        situation:
          "You're cruising at 65 mph. A notification lights up your screen and you're tempted to read it — it would take about five seconds.",
        prompt: "Why is that five-second glance so dangerous here?",
        options: [
          "It isn't — five seconds is too short to matter at any speed",
          "At 65 mph you'd travel roughly the length of a football field with no one steering",
          "It only matters at night or in the rain",
          "The danger is the fine, not the driving risk",
        ],
        correctIndex: 1,
        explanation:
          "At about 95 feet per second (65 mph), a five-second glance covers roughly 475 feet — well over a football field — completely unguided. Traffic can stop, a car can cut in, or a hazard can appear in that distance. Texting impairs driving comparably to a .08% BAC. Leave the notification until you're parked.",
      },
    ],
  },

  // ─── driving-3-02: Defensive Driving — SIPDE, space, scanning ──────────────
  "driving-3-02": {
    intro:
      "Defensive driving is about having a plan before you need one. Read each developing situation and choose the proactive, space-managing response.",
    spots: [
      {
        id: "drv3-02-s1",
        label: "Brake Lights Ahead",
        situation:
          "You're at 65 mph on the freeway. Far ahead — about 15 cars up — brake lights ripple on. The car directly in front of you hasn't slowed yet.",
        prompt: "What's the SIPDE-trained response?",
        options: [
          "Ease off the gas, cover the brake, and start slowing now",
          "Wait until the car right in front of you brakes, then react",
          "Hold your speed — it's too far ahead to matter yet",
          "Swerve to another lane immediately without checking",
        ],
        correctIndex: 0,
        explanation:
          "You Scanned far ahead and Identified a slowdown; now Predict it will reach you, Decide to slow, and Execute early. Reacting at 15 cars ahead gives you many seconds of buffer. Waiting for the car directly in front leaves almost none and forces hard braking.",
      },
      {
        id: "drv3-02-s2",
        label: "Following Distance",
        situation:
          "Traffic is flowing on a dry freeway. You pick a fixed sign on the shoulder and count: the car ahead passes it, and you reach the same sign before you finish saying 'one-thousand-two.'",
        prompt: "What does that tell you, and what should you do?",
        options: [
          "You're at a safe distance — two seconds is plenty",
          "You're following too closely — back off until you have at least a 3-second gap",
          "You're too far back — close the gap to 1 second",
          "Following distance doesn't matter at steady speeds",
        ],
        correctIndex: 1,
        explanation:
          "The 3-second rule: if you pass your fixed marker before counting to three, you're too close. Reaching it at two seconds means you need to drop back. Expand to 4–5 seconds in rain, fog, or heavy traffic. Space is your most important safety resource — it buys reaction and braking time.",
      },
      {
        id: "drv3-02-s3",
        label: "Pedestrian at the Curb",
        situation:
          "Approaching an intersection, you see a pedestrian standing at the curb, looking down at their phone, half-stepping toward the street. Your foot is on the gas.",
        prompt: "What's the right defensive move?",
        options: [
          "Speed up to clear the intersection before they step out",
          "Honk to make them look up, and keep your speed",
          "Move your foot to hover over the brake (cover the brake) and be ready to stop",
          "Hold the gas — pedestrians must yield to cars at unmarked crossings",
        ],
        correctIndex: 2,
        explanation:
          "Covering the brake — lifting off the gas and hovering over the brake without pressing — cuts your reaction-to-brake time from about 0.75 seconds to under 0.3. A distracted pedestrian who might step out is exactly when to do it. That half-second can be the difference between stopping and not.",
      },
      {
        id: "drv3-02-s4",
        label: "How Far to Look",
        situation:
          "A newer driver tells you they keep their eyes locked on the bumper of the car directly ahead so they'll 'never be surprised.'",
        prompt: "How far ahead should a defensive driver actually be scanning?",
        options: [
          "About 2–3 car lengths — just enough to watch the car ahead",
          "Roughly 12–15 seconds of travel — far enough to spot and process hazards early",
          "Only at the car directly in front; looking farther is distracting",
          "As far as the eye can see, ignoring everything nearby",
        ],
        correctIndex: 1,
        explanation:
          "Scan 12–15 seconds ahead — about a quarter mile on the freeway, a block in the city — while checking mirrors every 5–8 seconds. That lead time lets you respond smoothly instead of reacting at the last second. Watching only the car in front keeps you perpetually reactive and surprise-prone.",
      },
    ],
  },

  // ─── driving-3-03: Staying Cool — road rage, de-escalation ─────────────────
  "driving-3-03": {
    intro:
      "Frustration behind the wheel is normal; acting on it is dangerous. Each spot is a chance to disengage and stay safe.",
    spots: [
      {
        id: "drv3-03-s1",
        label: "Cut Off",
        situation:
          "A driver cuts sharply in front of you on the freeway, then slows to below your speed. You're angry. They probably never saw you.",
        prompt: "What's the safe, correct response?",
        options: [
          "Flash your high beams repeatedly to make a point",
          "Tailgate them closely so they feel the hazard they created",
          "Back off, create space, and let it go",
          "Pass them with an angry gesture to end it",
        ],
        correctIndex: 2,
        explanation:
          "Disengaging is the only safe choice. Flashing, tailgating, or gesturing all escalate and can provoke an unstable driver. The person who cut you off almost certainly didn't see you — it wasn't personal. Creating distance protects you physically and ends the interaction.",
      },
      {
        id: "drv3-03-s2",
        label: "Being Followed",
        situation:
          "An aggressive driver has tailgated, honked, and flashed lights at you for several miles. Your normal exit toward home is coming up, and you think they may follow you off the freeway.",
        prompt: "What should you do?",
        options: [
          "Take your usual exit home — don't let them dictate your route",
          "Pull onto the shoulder and confront them to settle it",
          "Do not drive home — head to a police station or busy public place and call 911",
          "Stop in the lane and wait for them to go around",
        ],
        correctIndex: 2,
        explanation:
          "Never lead a hostile driver to your home. Skip your exit and drive to a police station, a busy 24-hour business, or another public place. Stay in your locked car and call 911, giving the vehicle description, plate, and your location. Stopping on the shoulder or in a lane creates its own severe danger.",
      },
      {
        id: "drv3-03-s3",
        label: "Before You Leave",
        situation:
          "You just had a stressful argument, you're running late, and you can feel yourself already irritated before you've even backed out of the driveway. Rush-hour freeway driving is ahead.",
        prompt: "What does research say is the smart move?",
        options: [
          "Drive now — stress has no real effect if you focus on the road",
          "Take a few minutes to calm down first; elevated emotion increases aggressive driving and lowers hazard tolerance",
          "Drive faster to burn off the tension",
          "It only matters for teen drivers, so just go",
        ],
        correctIndex: 1,
        explanation:
          "Drivers who are already emotionally elevated are more likely to read neutral events as aggressive, overreact to slights, and make impulsive decisions. A few minutes of slow breathing before you drive measurably reduces road-rage risk. Don't start a high-stress drive while already escalated.",
      },
      {
        id: "drv3-03-s4",
        label: "Reaching CHP",
        situation:
          "You want to report an aggressive, possibly impaired driver weaving through California freeway traffic. You have your cell phone and want CHP directly.",
        prompt: "What do you dial?",
        options: [
          "411",
          "511",
          "#77",
          "*CHP",
        ],
        correctIndex: 2,
        explanation:
          "#77 connects directly to California Highway Patrol dispatch from a cell phone anywhere in the state — the fastest route to CHP for road rage, aggressive or impaired drivers, crashes, and hazards. Regular 911 also works; #77 reaches CHP specifically. Report the plate and direction of travel; don't engage.",
      },
    ],
  },

  // ─── driving-3-04: Sharing the Road — cyclists, peds, buses, trucks ────────
  "driving-3-04": {
    intro:
      "Everyone on the road has the same right to get home safely. These spots test how you protect the most vulnerable users around you.",
    spots: [
      {
        id: "drv3-04-s1",
        label: "Passing a Cyclist",
        situation:
          "You're on a narrow two-lane road behind a cyclist. To give the legal clearance you'd need to ease across the center line, but there's oncoming traffic right now.",
        prompt: "What does California's 3-foot passing law require?",
        options: [
          "Squeeze past as close as you safely can — 3 feet is just a guideline",
          "Slow down and wait behind until it's safe to cross over and pass with full 3-foot clearance",
          "Honk and pass immediately so the cyclist knows you're there",
          "Pass in the bike lane, which is shared while passing",
        ],
        correctIndex: 1,
        explanation:
          "CVC 21760 requires at least 3 feet of clearance when passing a cyclist — it's the law, not a suggestion. If you can't give 3 feet, you must slow and wait for a safe gap in oncoming traffic, then pass with full clearance. Even wind turbulence from a too-close pass can destabilize a bike at speed.",
      },
      {
        id: "drv3-04-s2",
        label: "Crosswalk",
        situation:
          "At a marked crosswalk, a pedestrian steps off the far curb and starts across. They're still in the opposite half of the crosswalk — not yet in your lane.",
        prompt: "Do you have to yield?",
        options: [
          "No — only once they actually enter your travel lane",
          "Yes — you must yield to a pedestrian who is in or entering the crosswalk and could be endangered",
          "Only if they make eye contact with you first",
          "No — yielding is only required at intersections with signals",
        ],
        correctIndex: 1,
        explanation:
          "CVC 21950 requires yielding to pedestrians in a crosswalk or entering one close enough to be in danger — they don't have to be in your lane yet. This applies at unmarked crosswalks (where curb lines meet at intersections) too. When in doubt, yield.",
      },
      {
        id: "drv3-04-s3",
        label: "School Bus",
        situation:
          "On a two-lane road with only a painted center line (no raised median), a school bus ahead switches on flashing red lights and swings out its stop arm. You're behind it; other cars approach from the opposite direction.",
        prompt: "Who must stop?",
        options: [
          "Only the traffic behind the bus",
          "Only cars if children are visibly crossing",
          "All traffic in both directions must stop on an undivided road",
          "Nobody — flashing red is just a warning to slow down",
        ],
        correctIndex: 2,
        explanation:
          "On an undivided road (including a two-lane road with only a painted line), ALL traffic in both directions must stop for a school bus with flashing red lights and an extended stop arm. Only a physical raised median or barrier exempts oncoming traffic. Stay stopped until the lights stop and the arm retracts.",
      },
      {
        id: "drv3-04-s4",
        label: "Truck Blind Spot",
        situation:
          "You've been cruising alongside a large semi-truck's right side for the last mile. You can see the trailer clearly, but you can't see the driver's face in the truck's mirrors. The truck starts drifting toward your lane.",
        prompt: "What's going on, and what's the lesson?",
        options: [
          "The driver is distracted — report them to CHP",
          "You're in the truck's No-Zone blind spot; if you can't see the driver's mirrors, the driver can't see you",
          "The truck's signal must be broken — trucks see everything on the right",
          "Nothing's wrong — trucks have full right-side visibility",
        ],
        correctIndex: 1,
        explanation:
          "The No-Zone rule: if you can't see the truck driver's face in their side mirror, you're in a blind spot and they can't see you. Big rigs have large blind spots on both sides (especially the right), directly behind, and in front. Don't linger beside a truck — pass decisively and clearly, and give space when one signals.",
      },
    ],
  },

  // ─── driving-3-05: Car Care Basics — tires, oil, warning lights ────────────
  "driving-3-05": {
    intro:
      "You don't have to be a mechanic, but a safe driver knows the basics. Each spot is a real maintenance judgment call.",
    spots: [
      {
        id: "drv3-05-s1",
        label: "Penny Test",
        situation:
          "You insert a penny upside-down into a tire's tread groove. Abraham Lincoln's entire head stays visible above the tread.",
        prompt: "What does that mean for the tire?",
        options: [
          "Great tread — a visible Lincoln means plenty of rubber",
          "The tread is worn to or below the 2/32-inch legal minimum — replace the tire",
          "It only matters on the front tires",
          "It means the tire is overinflated, not worn",
        ],
        correctIndex: 1,
        explanation:
          "Insert the penny with Lincoln's head pointing down into the groove. If the tread covers part of his head, you have at least 2/32 inch — the legal minimum. If his whole head is visible, you're at or below the limit and the tire should be replaced. Many experts replace at 4/32 inch (quarter test) for wet-weather safety.",
      },
      {
        id: "drv3-05-s2",
        label: "Red Oil Light",
        situation:
          "Driving home, your red oil-pressure warning light comes on. You're 8 miles out, and there's no gas station nearby.",
        prompt: "What should you do?",
        options: [
          "Pull over safely as soon as possible and shut off the engine",
          "Drive home carefully — 8 miles is short enough to risk",
          "Slow to 25 mph and limp to the nearest station",
          "Ignore it and add oil at your next fill-up",
        ],
        correctIndex: 0,
        explanation:
          "A red oil-pressure light means the engine is not getting adequate oil pressure right now. Running it can cause metal-on-metal damage and seizure within minutes. Pull over, stop the engine, and call for help. Driving 8 more miles can turn a tow into a multi-thousand-dollar engine replacement.",
      },
      {
        id: "drv3-05-s3",
        label: "Checking Oil",
        situation:
          "You want an accurate oil-level reading. You just parked after driving for two hours, and you're reaching for the dipstick.",
        prompt: "What's the right way to get an accurate reading?",
        options: [
          "Read it right away — oil only reads true when hot",
          "Wait about 5 minutes so oil drains to the pan, then wipe the dipstick, reinsert fully, and pull it again",
          "Check it while the engine is still running for a 'live' reading",
          "Wait 30 minutes for fumes to clear before opening the hood",
        ],
        correctIndex: 1,
        explanation:
          "Right after driving, oil is still circulating and hasn't drained back to the pan, so the dipstick reads low. Wait about 5 minutes on level ground, then wipe the stick clean, reinsert it fully, and pull again for a true reading. The level should sit between the MIN and MAX marks; milky oil means stop and get it inspected.",
      },
      {
        id: "drv3-05-s4",
        label: "Correct PSI",
        situation:
          "You're filling your tires and want the manufacturer's recommended pressure for your specific car — not the wrong number.",
        prompt: "Where's the most reliable place to find it?",
        options: [
          "The big number molded into the tire sidewall",
          "The sticker in the driver's door jamb (or the owner's manual)",
          "Whatever the gas-station air pump is set to",
          "The TPMS dashboard light tells you the target number",
        ],
        correctIndex: 1,
        explanation:
          "The driver's door-jamb sticker (and owner's manual) lists the manufacturer's recommended pressure for your vehicle — usually 32–36 PSI. The sidewall number is the tire's MAXIMUM pressure, not the fill target, and the TPMS only warns that pressure is low without giving the target. Check pressure monthly and before long trips.",
      },
    ],
  },

  // ─── driving-3-06: After a Crash — obligations, fault, SR-1 ────────────────
  "driving-3-06": {
    intro:
      "After a collision it's hard to think clearly. Knowing the steps — and what not to say — protects you legally and physically.",
    spots: [
      {
        id: "drv3-06-s1",
        label: "Parking Lot Bump",
        situation:
          "You back into another car in a store parking lot. There's moderate damage to both vehicles and no one's hurt. You're tempted to drive off because 'it's just a parking lot.'",
        prompt: "What does California law require?",
        options: [
          "Nothing — parking-lot collisions have no reporting rules",
          "Stop, provide your information, and (if there are injuries) render aid — leaving is a hit-and-run",
          "You only owe a note if the other driver isn't around",
          "Stop-and-exchange rules apply only on public roads, not private lots",
        ],
        correctIndex: 1,
        explanation:
          "CVC 20002 requires you to stop and provide identifying information (name, address, license, registration) after any collision causing property damage — parking lots included. Leaving when the other party is present or the car is identifiable is a hit-and-run. If the owner isn't there, leave a note with your details.",
      },
      {
        id: "drv3-06-s2",
        label: "Don't Say Sorry",
        situation:
          "Right after the crash the other driver looks shaken. You feel awful and it may have been partly your fault. You almost blurt out, 'I'm so sorry — I didn't see you, that was all on me.'",
        prompt: "Why should you not say that?",
        options: [
          "It's rude to apologize before police arrive",
          "Statements admitting fault at the scene are admissible and can be used against you in claims and lawsuits",
          "Fault is never assigned at the scene, so it's meaningless",
          "Apologies only count if put in writing",
        ],
        correctIndex: 1,
        explanation:
          "Verbal statements at the scene are legally admissible. Admitting fault — even a reflexive 'I'm sorry, that was my fault' — can be treated as an admission of liability, even when the full picture is more complex. Show concern for wellbeing ('Are you okay?'), exchange the required information, cooperate with police — but say nothing about cause or fault.",
      },
      {
        id: "drv3-06-s3",
        label: "Document It",
        situation:
          "Both cars are safely pulled to the side after a collision, no injuries, and you have your phone out with plenty of battery.",
        prompt: "What's the most useful thing to photograph?",
        options: [
          "The other driver's face for ID",
          "Just your own car's damage — they handle theirs",
          "Both vehicles' damage and plates, plus the overall scene with street signs and skid marks",
          "Only the exact point of impact — context shots aren't useful",
        ],
        correctIndex: 2,
        explanation:
          "Photograph everything: damage to both vehicles, all license plates, the wider scene with street signs and intersection, skid marks, road conditions, and vehicle positions. Wide shots set context; close-ups document damage. Phone photos are time-stamped and GPS-tagged — powerful evidence. Take more than you think you need.",
      },
      {
        id: "drv3-06-s4",
        label: "File the SR-1",
        situation:
          "In a crash with no injuries, your car took $800 in damage and the other car took $1,400. Police came and wrote a report.",
        prompt: "Do you need to file an SR-1 with the California DMV?",
        options: [
          "No — the police report covers the filing requirement",
          "Yes — one person's property damage exceeds $1,000, so you must file the SR-1 within 10 days",
          "Only if someone was injured",
          "No — SR-1 is only triggered by combined damage over $1,000",
        ],
        correctIndex: 1,
        explanation:
          "California requires an SR-1 when a crash causes any injury or death, OR property damage over $1,000 to any one person's property. The other car's $1,400 clears that threshold, so you must file the SR-1 within 10 days. The police report does not replace it — they're separate filings, and failing to file can suspend your license.",
      },
    ],
  },

  // ─── driving-3-07: Breakdowns and Roadside Safety ──────────────────────────
  "driving-3-07": {
    intro:
      "The freeway shoulder is one of the most dangerous places in California. These spots are about getting off the road and staying alive.",
    spots: [
      {
        id: "drv3-07-s1",
        label: "Losing Power",
        situation:
          "Your car suddenly loses power on the freeway. You're in the second lane from the right with 70 mph traffic all around you.",
        prompt: "What's your immediate first action?",
        options: [
          "Turn on your hazard lights and steer toward the right shoulder",
          "Stop where you are and call AAA before moving",
          "Open your door and wave for help",
          "Switch on your headlights and coast in-lane until you stall",
        ],
        correctIndex: 0,
        explanation:
          "Activate your hazard lights first — instantly — then use your remaining momentum to steer to the right shoulder. Stopping in a live lane at freeway speed makes you an obstacle in 70 mph traffic. Even coasting without power, you can usually reach the shoulder. Hazards warn following drivers before they're upon you.",
      },
      {
        id: "drv3-07-s2",
        label: "On the Shoulder",
        situation:
          "You've reached the right shoulder of I-5. Traffic is screaming past at 70 mph just a few feet from your door. You're wondering whether to get out and look at the problem.",
        prompt: "What does CHP recommend on a high-speed shoulder?",
        options: [
          "Get out to diagnose it fast and minimize time stopped",
          "Stay inside with your seat belt on and call for help",
          "Stand behind the car so passing drivers see you",
          "Pop the hood and stand in front to signal distress",
        ],
        correctIndex: 1,
        explanation:
          "CHP advises staying inside the vehicle with your seat belt fastened. A person on the shoulder is extremely exposed — a distracted driver drifting right will strike them directly. Inside the car, there's a metal structure between you and an impact. Keep hazards on, call for help, and wait — exit only for fire or other immediate danger.",
      },
      {
        id: "drv3-07-s3",
        label: "Warning Triangles",
        situation:
          "Your car has broken down on a two-lane highway (not a freeway) with 55 mph traffic. You carry three emergency warning triangles in the trunk.",
        prompt: "Where do you place them?",
        options: [
          "One in front and one behind the car, on each side",
          "At 10 feet, 100 feet, and 200 feet behind the vehicle",
          "All three together, about 500 feet back",
          "Just one, about 5 feet directly behind",
        ],
        correctIndex: 1,
        explanation:
          "Standard placement is one triangle 10 feet behind, one at 100 feet, and one at 200 feet — a progressive warning so approaching drivers see the farthest one first, then confirm the hazard, then see exactly where to avoid. On a high-speed freeway, though, CHP advises against leaving the car to set triangles; stay inside.",
      },
      {
        id: "drv3-07-s4",
        label: "Calling for Help",
        situation:
          "You're broken down on a California freeway with your cell phone and want to reach CHP dispatch directly for a tow and assistance.",
        prompt: "What number do you dial?",
        options: [
          "411 — general information",
          "#77 — direct to CHP dispatch on California highways",
          "*CHP — the emergency star-code",
          "1-800-HIGHWAY — a national road line",
        ],
        correctIndex: 1,
        explanation:
          "#77 reaches California Highway Patrol dispatch directly from a cell phone — faster than 911 for non-life-threatening highway situations like breakdowns, and the route to the free Freeway Service Patrol during peak hours. Give your location as the freeway number, direction of travel, and nearest milepost marker (green signs).",
      },
    ],
  },

  // ─── driving-3-08: Being a Good Driver — courtesy, merging ─────────────────
  "driving-3-08": {
    intro:
      "The best drivers are thoughtful, not just skilled. Each spot is a chance to make the road better — and smoother — for everyone.",
    spots: [
      {
        id: "drv3-08-s1",
        label: "Zipper Merge",
        situation:
          "A sign reads 'Right Lane Ends — 1 Mile.' Both lanes are still moving and you're in the right lane. The driver behind you honks and waves for you to move left NOW.",
        prompt: "What's the correct behavior approaching a lane closure a mile ahead?",
        options: [
          "Move left immediately — using the closing lane is selfish",
          "Stay in the right lane to the merge point and alternate at the merge (zipper) — the efficient, endorsed method",
          "Speed up to get ahead of traffic before merging",
          "Pull onto the shoulder to let the honking driver by",
        ],
        correctIndex: 1,
        explanation:
          "The zipper merge — using both lanes to the merge point and alternating one-by-one — is the technique California and traffic engineers endorse, cutting backups by up to 40% versus early merging. Staying in the closing lane until the end is correct. The honking driver is acting on a common misconception; you don't need to comply.",
      },
      {
        id: "drv3-08-s2",
        label: "Idling",
        situation:
          "You park outside an apartment to pick someone up who's running about 10 minutes late. Your gas car's AC is running and you're idling the whole time. You're in California.",
        prompt: "What's the responsible, legally aware choice?",
        options: [
          "Idle as long as you like — it's always legal while parked",
          "Limit idling — diesels are capped at 5 minutes by state law, gas cars face local ordinances, and idling wastes fuel and emits needlessly",
          "Idling is always illegal in California whenever the car isn't moving",
          "Only trucks and buses have idling limits, so personal cars never matter",
        ],
        correctIndex: 1,
        explanation:
          "California's main idling rule caps commercial diesel idling at 5 minutes, and many cities restrict gasoline-vehicle idling, especially near schools and homes. Beyond the law, ten minutes of idling burns fuel and produces emissions for no reason. Shutting the engine off while you wait is the courteous, responsible choice.",
      },
      {
        id: "drv3-08-s3",
        label: "Teaching a New Driver",
        situation:
          "Your younger sibling just got their permit, and you take them to an empty lot to practice. They ask what habit they should lock in first.",
        prompt: "What's the most valuable foundational habit to teach?",
        options: [
          "Parallel parking — it's the hardest test skill",
          "Checking mirrors and blind spots before every lane change and turn",
          "Operating the radio and climate controls without looking",
          "Smooth acceleration to avoid jerky starts",
        ],
        correctIndex: 1,
        explanation:
          "Checking mirrors and blind spots before every lane change and turn is the most consequential habit. Beginners routinely under-check and cause merge crashes, sideswipes, and dooring. Making this a non-negotiable reflex protects them immediately and underpins every more advanced maneuver. Parking can be refined later.",
      },
      {
        id: "drv3-08-s4",
        label: "Letting Someone In",
        situation:
          "You're in heavy freeway traffic, two car lengths behind the car ahead. A driver in the next lane is signaling to merge in front of you to reach an upcoming exit.",
        prompt: "What does letting them in cost you — and why does it matter?",
        options: [
          "30+ seconds — letting one car in seriously slows your trip",
          "Almost nothing — about 1–2 seconds — and it makes overall traffic calmer and safer",
          "It's only fair if they signaled far in advance",
          "It's dangerous — any gap triggers a cascade of merges",
        ],
        correctIndex: 1,
        explanation:
          "Traffic-flow research shows letting one car merge in heavy traffic costs the following driver only about 1–2 seconds — far less than most people assume. The benefit is real: the merging driver's stress drops, their driving calms, and courtesy ripples outward. There's almost no scenario where denying a signaling merger improves your trip.",
      },
    ],
  },
};
