import type { ScenarioConfig } from "./types";

// "Decision Trainer" scenarios for the DRIVING epoch "First Miles" (driving-2).
// Each spot is a concrete behind-the-wheel situation with a single legally and
// safely correct action per the standard US / California DMV handbook. correctIndex
// and explanation are stripped server-side before reaching the client.
export const driving2Scenarios: Record<string, ScenarioConfig> = {
  "driving-2-01": {
    intro: "You've just climbed into a car that someone else drove last. Before the key turns, run your cockpit drill — every decision here sets up a safe trip.",
    spots: [
      {
        id: "drv2-01-s1", label: "First Adjustment",
        situation: "You sit down and the seat is set for someone much taller. Your feet barely touch the pedals and the mirrors all look wrong.",
        prompt: "What do you adjust first?",
        options: [
          "The seat — so your feet reach the pedals with a slight knee bend",
          "The rearview mirror",
          "Both side mirrors",
          "The steering wheel tilt",
        ],
        correctIndex: 0,
        explanation: "Seat first — your seating position determines where every mirror needs to point. Adjusting mirrors before the seat means redoing them all.",
      },
      {
        id: "drv2-01-s2", label: "Side Mirrors",
        situation: "Glancing at your right side mirror, you can see almost the entire side of your own car and very little of the lane behind you.",
        prompt: "What does this tell you?",
        options: [
          "The mirror is set perfectly — you should always see your car",
          "The mirror is angled too far inward — swing it out until just a sliver of your car shows",
          "The mirror is angled too far outward",
          "Side mirrors don't need adjusting if the rearview is set",
        ],
        correctIndex: 1,
        explanation: "Properly set side mirrors show only a thin sliver of your own car on the inner edge. Seeing most of your car means it's turned in too far, hiding the lane and blind spot behind you.",
      },
      {
        id: "drv2-01-s3", label: "The Belt",
        situation: "Your seatbelt's shoulder strap feels like it rubs your neck, and a friend suggests tucking it behind your back.",
        prompt: "What's the right move?",
        options: [
          "Tuck the strap behind your back — the lap belt is enough",
          "Put the strap under your arm instead",
          "Keep the shoulder strap across your chest and shoulder — adjust the anchor height if it's uncomfortable",
          "Leave the belt off for short trips",
        ],
        correctIndex: 2,
        explanation: "The shoulder strap must cross your chest and shoulder to restrain your upper body in a crash. Routing it behind your back or under your arm can cause severe internal injuries. Use the height adjuster for comfort.",
      },
      {
        id: "drv2-01-s4", label: "Warning Light",
        situation: "You start the engine. All the dashboard lights flash on, then go out — except the oil pressure light, which stays lit.",
        prompt: "What should you do?",
        options: [
          "Drive gently to a gas station to top up the oil",
          "Wait a few minutes for it to clear as the engine warms",
          "Turn the engine off immediately and don't drive until the cause is found",
          "Continue your trip — the oil light often stays on when cold",
        ],
        correctIndex: 2,
        explanation: "An oil pressure light means the engine may not be lubricated right now. Driving even briefly can destroy it within minutes. Shut off the engine, check the oil, and get it diagnosed before driving.",
      },
    ],
  },

  "driving-2-02": {
    intro: "Smooth is safe. Your passengers should barely feel you start or stop. Each of these spots is about controlling speed gently and stopping completely.",
    spots: [
      {
        id: "drv2-02-s1", label: "Spotting the Sign",
        situation: "You're rolling along a residential street at 25 mph and a stop sign comes into view about 100 feet ahead.",
        prompt: "When do you begin braking?",
        options: [
          "Now — lift off the gas and start light, progressive braking early",
          "About 10 feet from the line — there's plenty of room at 25 mph",
          "Right at the stop line, braking hard to stop quickly",
          "Only once you can read the street sign on the cross street",
        ],
        correctIndex: 0,
        explanation: "Begin braking early with light, progressive pressure. Starting late forces a hard stop that jolts passengers and reduces control. Early, gradual braking is the mark of a smooth driver.",
      },
      {
        id: "drv2-02-s2", label: "The Full Stop",
        situation: "At the stop sign your car has slowed to a crawl — about 3 mph — and you see no cross traffic at all.",
        prompt: "Is it okay to proceed without fully stopping?",
        options: [
          "Yes — a rolling stop is fine when it's clear",
          "Yes — but only when turning right",
          "No — you must come to a complete stop with the wheels no longer rolling, then check traffic",
          "Yes — the law only requires you to slow down significantly",
        ],
        correctIndex: 2,
        explanation: "A legal stop means all four wheels stop rolling. A rolling 'California stop' is illegal in every state and cuts short your chance to scan for cross traffic and pedestrians.",
      },
      {
        id: "drv2-02-s3", label: "Cover the Brake",
        situation: "You're approaching a busy intersection and a row of parked cars on the right where a door could open.",
        prompt: "What's the smart positioning for your right foot?",
        options: [
          "Keep it on the gas until you actually need to brake",
          "Move it off the gas to hover over (not press) the brake, ready to stop instantly",
          "Rest your left foot on the brake to be ready",
          "Press the brake lightly the whole way to slow drivers behind you",
        ],
        correctIndex: 1,
        explanation: "Covering the brake — hovering your foot just above the pedal — cuts reaction time from about half a second to near zero. Use it near intersections, parked cars, and in parking lots.",
      },
      {
        id: "drv2-02-s4", label: "Green Light",
        situation: "You're stopped first at a red light. It turns green, but you notice a car on the cross street still moving through the intersection.",
        prompt: "What do you do?",
        options: [
          "Go immediately — the light is green and it's your right of way",
          "Accelerate hard to claim the space before they finish crossing",
          "Wait, confirm the intersection is clear of the late-running car, then proceed",
          "Honk and edge forward to make them hurry",
        ],
        correctIndex: 2,
        explanation: "A green light is permission, not a guarantee. Red-light runners cause intersection crashes in the first seconds after a change. Always confirm the intersection is actually clear before moving.",
      },
    ],
  },

  "driving-2-03": {
    intro: "Every turn has a setup, an execution, and a landing. Signal early, steer smoothly, and end up in the right lane each time.",
    spots: [
      {
        id: "drv2-03-s1", label: "When to Signal",
        situation: "You're driving toward a residential corner where you plan to turn right. There's a car following a short distance behind you.",
        prompt: "When should your turn signal go on?",
        options: [
          "As you start turning the wheel",
          "At least 100 feet before the turn — before you begin braking",
          "About 10 feet from the corner",
          "Only because a car is behind you; otherwise skip it",
        ],
        correctIndex: 1,
        explanation: "Signal at least 100 feet ahead and before you brake, so drivers, cyclists, and pedestrians have time to react to both the signal and your slowing.",
      },
      {
        id: "drv2-03-s2", label: "Landing the Right Turn",
        situation: "You're making a right turn onto a two-lane, one-way-each-direction street that has two lanes going your way.",
        prompt: "Which lane should you end up in?",
        options: [
          "The far (left) lane — it's easier to swing wide into",
          "Either lane, as long as you signal once you're there",
          "The rightmost lane — the one nearest where you turned from",
          "The center, then drift into whichever opens up",
        ],
        correctIndex: 2,
        explanation: "After a right turn, land in the rightmost lane — the shortest, most predictable path. Swinging wide into a farther lane can collide with a car turning left into that same lane from the opposite direction.",
      },
      {
        id: "drv2-03-s3", label: "Hand Technique",
        situation: "You're guiding the wheel through a left turn at an intersection in a car equipped with an airbag.",
        prompt: "Which steering technique is recommended?",
        options: [
          "Push-pull (shuffle) — one hand pushes up while the other pulls down, both staying on the wheel",
          "Hand-over-hand, crossing your arms over the center of the wheel",
          "One hand at the bottom, spinning the wheel freely",
          "Both hands at the top, pulling down together",
        ],
        correctIndex: 0,
        explanation: "Push-pull keeps both hands on the wheel and your arms clear of the airbag deployment zone. Crossing your arms over the hub risks injury if the airbag fires.",
      },
      {
        id: "drv2-03-s4", label: "Going Too Wide",
        situation: "Midway through a right turn you realize your car is drifting toward the center line, heading toward the oncoming side.",
        prompt: "What's the correct response?",
        options: [
          "Speed up to finish before oncoming traffic arrives",
          "Steer more to the right, smoothly, to tighten the arc and stay in your lane",
          "Stop in the middle of the intersection and wait",
          "Reverse and restart the turn",
        ],
        correctIndex: 1,
        explanation: "Add smooth steering input in the direction of the turn to tighten your arc. Next time, start the turn a touch later — when the front of the car reaches the corner — for a naturally tighter line.",
      },
    ],
  },

  "driving-2-04": {
    intro: "Every safe lane change and merge is a sequence: mirrors, signal, shoulder check — in that order, every single time.",
    spots: [
      {
        id: "drv2-04-s1", label: "The Sequence",
        situation: "You want to move one lane to your left on a multi-lane city street.",
        prompt: "What's the correct order of actions?",
        options: [
          "Signal, then steer over while just glancing at your mirrors (no blind-spot check)",
          "Check mirrors, signal, shoulder check into the blind spot, then steer over",
          "Shoulder check, mirrors, signal, then steer over",
          "Check mirrors, shoulder check, signal, then steer over",
        ],
        correctIndex: 1,
        explanation: "Mirrors first (so you know what's behind before signaling), then signal your intent, then a shoulder check to clear the blind spot, then move. This order is the professional standard.",
      },
      {
        id: "drv2-04-s2", label: "The Blind Spot",
        situation: "Your mirrors are perfectly adjusted and show nothing beside you. You're about to change lanes.",
        prompt: "Is a shoulder check still necessary?",
        options: [
          "No — perfectly set mirrors eliminate the blind spot",
          "Only on the highway",
          "Yes — even perfect mirrors leave a blind spot beside each rear quarter panel that only a head-turn can clear",
          "Only if you think a motorcycle is nearby",
        ],
        correctIndex: 2,
        explanation: "Every mirror setup leaves a 10–20 foot blind zone beside the rear doors where a whole car can hide. A shoulder check is always required — even in cars with blind-spot monitors, which can miss fast vehicles.",
      },
      {
        id: "drv2-04-s3", label: "The On-Ramp",
        situation: "You're on a freeway on-ramp. Traffic on the freeway is moving at 65 mph, but as the ramp ends you're only doing 40 mph and there's a merge lane available.",
        prompt: "What should you do?",
        options: [
          "Merge right away — other drivers will slow for you",
          "Stop at the end of the ramp and wait for a big gap",
          "Keep accelerating in the merge lane, signal, and merge only once you're at or near traffic speed in a gap",
          "Brake to be safe, then ease in slowly",
        ],
        correctIndex: 2,
        explanation: "Match freeway speed before merging. Use the merge lane to keep accelerating — merging at 40 into 65 mph traffic leaves the car behind almost no time to react. Never stop on a ramp unless truly forced to.",
      },
      {
        id: "drv2-04-s4", label: "Car in the Blind Spot",
        situation: "You've checked mirrors and signaled, and your shoulder check reveals a car sitting right in the lane you wanted to move into.",
        prompt: "What's the correct action?",
        options: [
          "Complete the lane change quickly before it catches up",
          "Cancel the move — turn the signal off, stay in your lane, and recheck in a few seconds",
          "Flash your hazards to warn the other driver off",
          "Speed up first to get ahead, then cut over",
        ],
        correctIndex: 1,
        explanation: "If the blind spot is occupied, abort. Turn off the signal, hold your lane, and wait for the gap to clear. No lane change is ever urgent enough to merge into an occupied space.",
      },
    ],
  },

  "driving-2-05": {
    intro: "From parallel parking on a hill to curbing your wheels, parking is all about reference points and one simple safety rule. Master it and no spot intimidates you.",
    spots: [
      {
        id: "drv2-05-s1", label: "Parallel Counter-Steer",
        situation: "You're parallel parking. You've reversed until your car sits at about a 45-degree angle to the curb behind the front car.",
        prompt: "What's your next move?",
        options: [
          "Turn the wheel sharply left while continuing to reverse slowly, straightening into the space",
          "Reverse straight back until you touch the curb",
          "Turn the wheel further right to get closer to the curb",
          "Shift to drive and pull forward to fix the angle",
        ],
        correctIndex: 0,
        explanation: "After reaching about 45 degrees you counter-steer — sharp left while still backing slowly — to bring the front of the car in and straighten parallel to the curb. The two-phase steer is the core of parallel parking.",
      },
      {
        id: "drv2-05-s2", label: "Downhill Wheels",
        situation: "You're parking on a steep downhill street with a curb on your right.",
        prompt: "Which way should your front wheels point?",
        options: [
          "Straight ahead — turning them can damage the tires",
          "To the left, away from the curb",
          "To the right, toward the curb",
          "It doesn't matter as long as the parking brake is set",
        ],
        correctIndex: 2,
        explanation: "Downhill with a curb: turn the wheels right, toward the curb. If the car rolls, the front wheels catch the curb and stop it — your last line of defense if the brake fails.",
      },
      {
        id: "drv2-05-s3", label: "Uphill Wheels",
        situation: "Now you're parking on a steep uphill street, again with a curb on your right.",
        prompt: "Which direction should your front wheels face?",
        options: [
          "To the right, toward the curb — same as downhill",
          "Straight ahead",
          "To the left, away from the curb, so the curb stops the wheel if the car rolls back",
          "Direction only matters on downhill slopes",
        ],
        correctIndex: 2,
        explanation: "Uphill with a curb: turn the wheels left, away from the curb. If the car rolls backward, the front of the tire catches the curb. It's the opposite of the downhill rule — and always set the parking brake too.",
      },
      {
        id: "drv2-05-s4", label: "Back In or Pull Through",
        situation: "You find an empty space in a busy parking lot with foot traffic and cars passing behind it.",
        prompt: "What's the safer way to park?",
        options: [
          "Always pull in forward — backing is too risky",
          "Back into the space so you can later exit forward with full visibility",
          "It makes no difference for safety",
          "Only back in if the space is extra wide",
        ],
        correctIndex: 1,
        explanation: "Backing in is safer because you exit forward, with a clear view of pedestrians and cross traffic. Backing out blindly into a busy lane is where most parking-lot collisions happen.",
      },
    ],
  },

  "driving-2-06": {
    intro: "The freeway is one of the safer places to drive — if you respect speed, distance, and lane discipline. These decisions keep the flow predictable.",
    spots: [
      {
        id: "drv2-06-s1", label: "Keep Right",
        situation: "You're cruising at the speed limit in the left lane of a three-lane freeway. The road ahead of you is clear for a quarter mile and a faster car is coming up behind.",
        prompt: "Is staying in the left lane okay?",
        options: [
          "Yes — you're at the speed limit, so the left lane is fine",
          "No — the left lane is for passing; if you're not actively passing, move right",
          "Yes — as long as you yield to faster cars eventually",
          "Only move over if there are trucks in the right lane",
        ],
        correctIndex: 1,
        explanation: "The left lane is a passing lane. Camping there when not passing forces faster traffic to pass on the right — more dangerous, and illegal in California and most states (keep right except to pass).",
      },
      {
        id: "drv2-06-s2", label: "Following Gap",
        situation: "You're traveling at 65 mph and the car ahead just passed under a bridge overpass.",
        prompt: "How many seconds should pass before you reach that same overpass?",
        options: [
          "1 second — quick reactions need less space at speed",
          "2 seconds — the standard rule is plenty",
          "At least 4 seconds — highway speeds demand more distance, not less",
          "It doesn't matter; ABS handles emergency stops",
        ],
        correctIndex: 2,
        explanation: "At 65 mph you cover about 95 feet per second, so a 4-second gap is roughly 380 feet — about a football field. That's the minimum to perceive a hazard, react, and stop. Double it in rain.",
      },
      {
        id: "drv2-06-s3", label: "Planning the Exit",
        situation: "Your exit is one mile away and you're in the second lane from the left of a four-lane freeway.",
        prompt: "What should you do?",
        options: [
          "Wait until you see the exit ramp, then cut across all lanes",
          "Begin moving right now — one lane at a time with full mirror-signal-shoulder checks",
          "Move over only at the 500-foot exit sign",
          "Use the left shoulder to pass and reach the exit faster",
        ],
        correctIndex: 1,
        explanation: "Start moving right at least half a mile out, one lane at a time with full checks each move. Last-second multi-lane cuts cause serious crashes — give yourself room to reach the exit gracefully.",
      },
      {
        id: "drv2-06-s4", label: "The Ramp Curve",
        situation: "You're taking an exit ramp posted at 35 mph, but you enter it still doing 65 mph.",
        prompt: "What's the danger?",
        options: [
          "None — ramp limits are conservative and meant for trucks",
          "The ramp's curve is engineered for 35 mph; at 65 you may lose grip and slide off or roll over",
          "The only risk is extra tire wear",
          "There's a slight risk, but only in wet weather",
        ],
        correctIndex: 1,
        explanation: "Ramp speeds reflect the curve's geometry. At nearly double the posted speed, lateral force can exceed your tires' grip and send you off the road. Slow to the posted speed before the curve tightens.",
      },
    ],
  },

  "driving-2-07": {
    intro: "Rain and darkness change everything — your speed, your distance, your visibility. These spots are about adjusting before conditions catch you out.",
    spots: [
      {
        id: "drv2-07-s1", label: "Lights On",
        situation: "It's dusk and rain has just started. Your windshield wipers are running, but it's not fully dark yet.",
        prompt: "Should your headlights be on?",
        options: [
          "Yes — most states require headlights whenever wipers are on, and they help others see you in the rain",
          "No — wait until it's fully dark",
          "Only if visibility drops under 100 feet",
          "Only your high beams would help here",
        ],
        correctIndex: 0,
        explanation: "Most US states require headlights whenever the wipers are in use. Beyond the law, they make you visible to others in reduced light — never wait for full dark to switch them on.",
      },
      {
        id: "drv2-07-s2", label: "High Beams",
        situation: "You're on a dark, empty rural road using your high beams when a car appears around a curve about 400 feet ahead, coming toward you.",
        prompt: "What should you do?",
        options: [
          "Keep the high beams on — you need the visibility more",
          "Flash your high beams to warn them",
          "Switch to low beams now — high beams can blind the oncoming driver at this distance",
          "Pull onto the shoulder until they pass",
        ],
        correctIndex: 2,
        explanation: "Dim to low beams for oncoming traffic within about 500 feet (and when following within 300 feet). Leaving high beams on blinds the other driver and is illegal.",
      },
      {
        id: "drv2-07-s3", label: "Fog",
        situation: "You drive into a patch of thick fog and your high beams seem to make a wall of glare in front of you.",
        prompt: "What's the correct lighting?",
        options: [
          "Keep high beams on for maximum reach",
          "Switch to low beams (or fog lights) — high beams scatter off fog and worsen your visibility",
          "Turn on your hazard lights while moving",
          "Turn all lights off to cut the glare",
        ],
        correctIndex: 1,
        explanation: "In fog, use low beams or fog lights. High beam light reflects off the water droplets and creates blinding glare. Hazard lights while moving are dangerous and illegal in many states.",
      },
      {
        id: "drv2-07-s4", label: "Hydroplaning",
        situation: "Driving through heavy rain at highway speed, your steering suddenly feels light and floaty — the tires are riding on water.",
        prompt: "How do you recover?",
        options: [
          "Brake hard immediately to slow down",
          "Steer sharply toward the shoulder to regain grip",
          "Ease off the gas, keep the wheel pointed straight, and let the car slow until the tires regain traction",
          "Accelerate to push through the water",
        ],
        correctIndex: 2,
        explanation: "To recover from hydroplaning: ease off the gas smoothly, hold the wheel straight, and let the car slow until the tires reconnect with the road. Hard braking or sharp steering can send you into a spin.",
      },
    ],
  },

  "driving-2-08": {
    intro: "Your first solo drive feels more real. Setting yourself up well and staying calm under stress is the whole game — trust your training.",
    spots: [
      {
        id: "drv2-08-s1", label: "Choosing the Route",
        situation: "You're planning your very first solo drive and have a choice of where to go.",
        prompt: "What's the best plan?",
        options: [
          "A short trip on familiar roads you've already practiced, avoiding highways and rush hour",
          "A long highway drive to build confidence fast",
          "A drive during rush hour so you get used to traffic immediately",
          "Wherever your friends want to go, however far",
        ],
        correctIndex: 0,
        explanation: "Keep first solo drives short and on familiar, low-traffic roads. Familiar routes let you focus on technique instead of navigation. Build up to highways, rush hour, and tough conditions gradually.",
      },
      {
        id: "drv2-08-s2", label: "Getting Lost",
        situation: "Halfway through your drive you realize you've missed a turn and aren't sure where you are. Your phone has navigation.",
        prompt: "What's the safe response?",
        options: [
          "Glance at the map and type the address while you keep driving",
          "Make a quick U-turn wherever you can to get back on track",
          "Pull over in a safe, well-lit spot, then use navigation to reorient before continuing",
          "Speed up to find a familiar landmark sooner",
        ],
        correctIndex: 2,
        explanation: "Never operate the phone or read a map while moving. Pull over somewhere safe and well-lit, set your route, then drive on. When unsure, default to pulling over rather than a hasty turn or lane change.",
      },
      {
        id: "drv2-08-s3", label: "Aggressive Driver",
        situation: "A driver behind you is tailgating closely and clearly wants you to go faster than you're comfortable with.",
        prompt: "What's the right way to handle it?",
        options: [
          "Speed up beyond your comfort level to satisfy them",
          "Brake-check them to send a message",
          "Stay calm, maintain a safe speed, and let them pass when you can move right or they find a gap",
          "Match their aggression and refuse to move",
        ],
        correctIndex: 2,
        explanation: "Don't let another driver pressure you into unsafe speed, and never brake-check (that invites a rear-end crash). Stay calm, keep a safe speed and following distance, and let an aggressive driver pass.",
      },
      {
        id: "drv2-08-s4", label: "Feeling Overwhelmed",
        situation: "After a near-miss you notice your heart racing and your hands shaking — you feel too stressed to drive well.",
        prompt: "What should you do?",
        options: [
          "Push through it — pulling over would be embarrassing",
          "Reduce speed, increase your following distance, and find a safe place to pull over and collect yourself",
          "Speed up to get the drive over with sooner",
          "Close your eyes for a moment to calm down",
        ],
        correctIndex: 1,
        explanation: "Driving under high stress is genuinely dangerous, and there's no shame in pausing. Slow down, build in extra following distance, and pull over somewhere safe to settle before continuing.",
      },
    ],
  },
};
