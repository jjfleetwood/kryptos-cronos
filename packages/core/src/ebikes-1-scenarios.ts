import type { ScenarioConfig } from "./types";

// "Play the Spot" Decision-Trainer scenarios for the E-BIKES epoch (Santa Cruz, CA).
// Audience: TEEN riders. Focus: PEDAL-ASSIST e-bikes (Class 1 mainly; Class 3 is
// pedal-assist but 16+ and helmet at every age). Throttle/Class 2 appears only as a
// classification distractor, not as something a teen rides. Every spot biases toward
// the safe, legal, predictable choice. California law follows AB 1096.
// correctIndex and explanation are stripped server-side before reaching the client.
export const ebikes1Scenarios: Record<string, ScenarioConfig> = {
  "ebikes-1-01": {
    intro: "You and your friends are getting e-bikes to ride to school in Santa Cruz. Before anything else, learn what an e-bike actually is — and which kind is pedal-assist, the type you'll be riding.",
    spots: [
      {
        id: "eb-01-s1", label: "Pedal-Assist",
        situation: "Your new e-bike only adds motor power while you pedal, and the boost fades out at 20 mph. There's no throttle lever on the handlebar.",
        prompt: "What kind of e-bike is this?",
        options: [
          "A pedal-assist (pedelec) e-bike",
          "A throttle e-bike",
          "A moped that needs a license",
          "A regular non-electric bike",
        ],
        correctIndex: 0,
        explanation: "Power that only comes when you pedal and cuts out at 20 mph is pedal-assist (pedelec) — that's a Class 1, the type most teens ride.",
      },
      {
        id: "eb-01-s2", label: "Spot the Throttle",
        situation: "A friend's bike has a thumb lever that makes it go on its own up to 20 mph without pedaling at all.",
        prompt: "Which feature makes that a throttle bike (Class 2), not pedal-assist?",
        options: [
          "Its torque sensor",
          "The throttle that moves the bike without pedaling",
          "Its pedal-assist sensor",
          "Its headlight",
        ],
        correctIndex: 1,
        explanation: "A throttle moves the bike with zero pedaling — that's a Class 2. Pedal-assist bikes (Class 1 and 3) have no throttle; the motor only helps while you pedal.",
      },
      {
        id: "eb-01-s3", label: "Not an E-Bike",
        situation: "Someone online is selling a two-wheeler with a 2000-watt motor that hits 40 mph on a throttle alone, and it has no working pedals.",
        prompt: "How should you classify it?",
        options: [
          "A Class 1 pedal-assist e-bike",
          "A Class 3 e-bike",
          "A motorized vehicle / moped — NOT a legal e-bike for a teen to ride",
          "A pedal-assist bicycle",
        ],
        correctIndex: 2,
        explanation: "Over 750W, way over 28 mph, and no real pedals — it's outside the e-bike definition. It's a moped/motor vehicle needing a license, registration, and insurance, not something a teen rides to school.",
      },
      {
        id: "eb-01-s4", label: "The Power Cap",
        situation: "Your friend claims 'any electric bike counts as an e-bike.' You want the actual ceiling that keeps a machine in the legal e-bike category.",
        prompt: "What's the motor-power limit for a legal e-bike?",
        options: [
          "There is no limit",
          "A motor of 750 watts (1 hp) or less, with working pedals",
          "3000 watts",
          "Exactly 1500 watts",
        ],
        correctIndex: 1,
        explanation: "A legal e-bike has operable pedals and a motor of 750W (1 hp) or less. Anything more powerful is regulated as a moped or motorcycle.",
      },
    ],
  },

  "ebikes-1-02": {
    intro: "Know what's under you. The motor, sensor, and battery decide how your pedal-assist bike climbs the hills around Santa Cruz and how far it gets you to school and back. Pick the right concept.",
    spots: [
      {
        id: "eb-02-s1", label: "Pedal-Assist Sensor",
        situation: "On your Class 1, the motor only kicks in when you pedal, and it gives more help the harder you push.",
        prompt: "Which part makes the assist feel smooth and tied to your effort?",
        options: [
          "A throttle",
          "A torque sensor that measures how hard you pedal",
          "The kickstand",
          "The bell",
        ],
        correctIndex: 1,
        explanation: "A torque sensor reads your pedaling force and scales the boost to your effort — smooth and natural. That's a pedal-assist system; there's no throttle involved.",
      },
      {
        id: "eb-02-s2", label: "Climbing Power",
        situation: "Your route to school includes a steep hill, and you want a motor that drives through the bike's gears for the best torque on climbs.",
        prompt: "Which motor placement climbs steep hills best?",
        options: [
          "A mid-drive motor at the cranks",
          "A front hub motor",
          "No motor helps on hills",
          "A motor in the seat post",
        ],
        correctIndex: 0,
        explanation: "A mid-drive sits at the pedals and pushes power through the gears, multiplying torque on climbs — great for Santa Cruz hills. Hub motors run at a fixed ratio and struggle on steep grades.",
      },
      {
        id: "eb-02-s3", label: "Watt-Hours",
        situation: "Your battery is labeled 36 volts and 10 amp-hours, and you want the number that predicts your range.",
        prompt: "What's the battery's capacity in watt-hours?",
        options: [
          "About 26 Wh",
          "About 46 Wh",
          "About 360 Wh",
          "About 3,600 Wh",
        ],
        correctIndex: 2,
        explanation: "Watt-hours = volts × amp-hours, so 36V × 10Ah = 360 Wh. Watt-hours — not voltage alone — tells you how much energy (and range) the pack holds.",
      },
      {
        id: "eb-02-s4", label: "What Eats Range",
        situation: "You and a friend have identical batteries. You use high assist up every hill; your friend uses eco mode on the flat path by the beach.",
        prompt: "What most decides how far each of you gets on a charge?",
        options: [
          "The color of the frame",
          "Energy used per mile — assist level, hills, rider weight, and wind",
          "Only the battery's voltage number",
          "How many stickers are on the bike",
        ],
        correctIndex: 1,
        explanation: "Range = battery watt-hours ÷ watt-hours used per mile. High assist, hills, heavier loads, and headwind all raise the per-mile draw and cut range — capacity alone doesn't tell the whole story.",
      },
    ],
  },

  "ebikes-1-03": {
    intro: "California's three-class system (AB 1096) decides what a teen can legally ride and the helmet rules. These are the rules that matter most when you're under 18. Get each one exactly right.",
    spots: [
      {
        id: "eb-03-s1", label: "Helmet Under 18",
        situation: "You're 15 and riding your Class 1 pedal-assist to school on neighborhood streets.",
        prompt: "What does California law require for you?",
        options: [
          "Nothing — helmets are optional",
          "A helmet — anyone under 18 must wear one on ANY class of e-bike",
          "A helmet only if you ride faster than 20 mph",
          "A driver's license",
        ],
        correctIndex: 1,
        explanation: "In California, every rider under 18 must wear a helmet on any class of e-bike. As a minor, helmet on, every ride — no exceptions.",
      },
      {
        id: "eb-03-s2", label: "Class 3 Age Limit",
        situation: "Your 14-year-old friend wants to borrow a Class 3 (pedal-assist to 28 mph) e-bike to ride around town.",
        prompt: "What does California law say?",
        options: [
          "Fine — any age can ride a Class 3",
          "Not allowed — you must be at least 16 to operate a Class 3",
          "Fine if a parent says okay",
          "Fine as long as they go slow",
        ],
        correctIndex: 1,
        explanation: "California sets a minimum age of 16 to ride a Class 3 e-bike. A 14-year-old can't legally operate one, even with permission — they belong on a Class 1.",
      },
      {
        id: "eb-03-s3", label: "Class 1 vs Class 3",
        situation: "You're 14 and choosing between a Class 1 (pedal-assist to 20 mph) and a Class 3 (pedal-assist to 28 mph).",
        prompt: "Which is the right, legal choice for you, and why?",
        options: [
          "Class 3 — faster is always better",
          "Class 1 — at 14 you're under the 16+ minimum for Class 3, and 20 mph is safer for a new teen rider",
          "Either one — age doesn't matter",
          "Class 3, but only without a helmet",
        ],
        correctIndex: 1,
        explanation: "A 14-year-old isn't old enough for a Class 3 (16+ only). A Class 1 is both legal and a smarter speed for a young rider — that's why teens belong on Class 1.",
      },
      {
        id: "eb-03-s4", label: "Class 3 Helmet",
        situation: "Your 17-year-old cousin and a 25-year-old adult both ride Class 3 e-bikes.",
        prompt: "Who must wear a helmet?",
        options: [
          "Only your 17-year-old cousin",
          "Neither, since Class 3 is pedal-assist",
          "Both — Class 3 requires a helmet for riders of EVERY age",
          "Only the 25-year-old",
        ],
        correctIndex: 2,
        explanation: "Class 3 e-bikes require a helmet at every age, adults included. (And anyone under 18 needs a helmet on any class anyway.) So both must wear one.",
      },
    ],
  },

  "ebikes-1-04": {
    intro: "The 'best' e-bike is the one that fits how you actually ride. Match each teen rider in Santa Cruz to the right pedal-assist bike.",
    spots: [
      {
        id: "eb-04-s1", label: "Riding to School",
        situation: "You're 14, riding a few miles to high school on city streets and bike lanes, carrying a backpack, and you want something legal for your age and easy to handle.",
        prompt: "Which e-bike fits best?",
        options: [
          "A Class 1 pedal-assist commuter (20 mph) with a rack for your backpack",
          "A Class 3 speed bike at 28 mph",
          "A 2000-watt throttle machine",
          "A downhill race bike with no rack",
        ],
        correctIndex: 0,
        explanation: "At 14 you're under the 16+ Class 3 age limit, so a Class 1 (20 mph) pedal-assist with a rack is the legal, practical pick for the school commute.",
      },
      {
        id: "eb-04-s2", label: "Trail Day With Friends",
        situation: "Your crew wants to ride legal dirt trails near Wilder Ranch on the weekend, with climbing power and suspension for roots and ruts.",
        prompt: "Which e-bike fits best?",
        options: [
          "A Class 1 electric mountain bike (eMTB)",
          "A Class 2 throttle beach cruiser",
          "A road bike with skinny slick tires",
          "A throttle-only scooter",
        ],
        correctIndex: 0,
        explanation: "A Class 1 eMTB (pedal-assist, 20 mph, no throttle) is what trail networks accept and what handles dirt. Trail access almost always means Class 1.",
      },
      {
        id: "eb-04-s3", label: "Older Sibling's Commute",
        situation: "Your 17-year-old sibling rides 10 miles each way to a job on busy roads and wants to keep pace with traffic in the bike lane.",
        prompt: "Which e-bike fits best for them?",
        options: [
          "A Class 1 limited to 20 mph",
          "A Class 3 pedal-assist commuter (28 mph) with a helmet at every ride",
          "A 14-year-old's hand-me-down kids' bike",
          "A throttle moped with no pedals",
        ],
        correctIndex: 1,
        explanation: "At 17 your sibling meets the 16+ rule for Class 3, and a 28 mph pedal-assist commuter keeps pace on busy roads — with a helmet required on Class 3 every single ride.",
      },
      {
        id: "eb-04-s4", label: "Easy Beach Cruise",
        situation: "You want relaxed weekend rides on the flat path near the beach, you're 15, and you want a steady, comfortable pedal-assist bike you can ride legally.",
        prompt: "Which e-bike fits best?",
        options: [
          "A Class 3 speed bike you're too young to ride",
          "A Class 1 step-through cruiser (20 mph pedal-assist)",
          "A 1500-watt throttle bike",
          "A downhill eMTB with race suspension",
        ],
        correctIndex: 1,
        explanation: "At 15 you're under the Class 3 age limit, so a comfy Class 1 cruiser (pedal-assist, 20 mph) is the legal, easygoing match for flat beachfront rides.",
      },
    ],
  },

  "ebikes-1-05": {
    intro: "Your battery is your fuel for getting to school and back. Do the range math, handle low charge before a climb, and treat the pack right so it lasts — and stays safe at home.",
    spots: [
      {
        id: "eb-05-s1", label: "Range Math",
        situation: "Your bike has a 360 Wh battery and, at your assist level on rolling Santa Cruz streets, it uses about 18 Wh per mile.",
        prompt: "Roughly how far can you expect to ride on a full charge?",
        options: [
          "About 5 miles",
          "About 20 miles",
          "About 100 miles",
          "About 360 miles",
        ],
        correctIndex: 1,
        explanation: "Range ≈ capacity ÷ consumption = 360 Wh ÷ 18 Wh/mi = 20 miles. Plan your ride around a realistic per-mile draw, not the best-case number on the box.",
      },
      {
        id: "eb-05-s2", label: "Low Battery, Big Hill",
        situation: "You're at 15% battery at the bottom of a long climb home, still a couple miles out.",
        prompt: "What's the smart move?",
        options: [
          "Crank assist to max to blast up fast",
          "Drop to eco/low assist and pedal harder to stretch the remaining charge",
          "Coast with the motor off the whole way",
          "Sit and wait for the battery to recharge itself",
        ],
        correctIndex: 1,
        explanation: "Max assist on a near-empty pack can die before the top. Switching to eco and putting in more leg power conserves the last watt-hours so you actually make it home.",
      },
      {
        id: "eb-05-s3", label: "Charging Safety",
        situation: "You get home from school and want to charge your e-bike battery in your room overnight.",
        prompt: "What's the safest charging practice?",
        options: [
          "Charge unattended overnight on a bed or pile of clothes",
          "Charge on a hard, non-flammable surface with the right charger, and unplug when it's full",
          "Use a random cheap charger with the wrong connector",
          "Cover the battery with a blanket while it charges",
        ],
        correctIndex: 1,
        explanation: "Lithium-ion batteries can overheat, so charge on a hard, non-flammable surface, use the correct charger, don't leave it charging unattended for long, and unplug when done. Never charge on bedding or cover the pack.",
      },
      {
        id: "eb-05-s4", label: "Use the Right Charger",
        situation: "You lost your charger and find a cheap unrelated one with a different plug and voltage in a drawer.",
        prompt: "What should you do?",
        options: [
          "Use only the manufacturer's charger (or a properly matched, certified replacement)",
          "Use whatever charger physically fits the port",
          "Wire the battery straight to the wall to charge faster",
          "Charge it off a car battery directly",
        ],
        correctIndex: 0,
        explanation: "Mismatched chargers are a leading cause of e-bike battery fires. Always use the manufacturer's charger or a certified replacement made for your exact pack.",
      },
    ],
  },

  "ebikes-1-06": {
    intro: "Speed and weight change how a bike stops and turns, and on crowded West Cliff Drive or by the Boardwalk you ride defensively. No phones, no earbuds blasting — just smart, predictable choices.",
    spots: [
      {
        id: "eb-06-s1", label: "No Distractions",
        situation: "Your phone buzzes with a group chat while you're riding to meet friends.",
        prompt: "What's the right decision?",
        options: [
          "Text back quickly while rolling — you're a good rider",
          "Leave it; pull over and stop if you really need to check it, with both ears free to hear traffic",
          "Steer with one hand and watch the screen",
          "Put in both earbuds and turn the volume up",
        ],
        correctIndex: 1,
        explanation: "Riding distracted is how crashes happen. Keep both hands on the bars and your ears open; if a message can't wait, pull over and stop first.",
      },
      {
        id: "eb-06-s2", label: "Braking",
        situation: "You're rolling at 20 mph on a loaded e-bike — heavier and faster than your old pedal bike — coming up to a stop.",
        prompt: "How should you brake?",
        options: [
          "Grab the front brake hard at the last second",
          "Brake earlier and smoothly with both brakes, since the extra weight and speed lengthen stopping distance",
          "Use only the rear brake to be safe",
          "Don't brake — just coast and hope",
        ],
        correctIndex: 1,
        explanation: "An e-bike's added weight and higher speed increase stopping distance, so brake earlier and squeeze both brakes smoothly. A last-second front-only grab can skid or pitch you over the bars.",
      },
      {
        id: "eb-06-s3", label: "Crowded Path",
        situation: "West Cliff is packed with walkers, dogs, and little kids on a sunny afternoon, and your friends are riding behind you.",
        prompt: "What's the right call?",
        options: [
          "Hold full speed and weave through the gaps",
          "Slow to a relaxed pace, drop to low assist, ride single-file, and be ready to stop",
          "Race your friends to the wharf",
          "Ring your bell once and keep full speed",
        ],
        correctIndex: 1,
        explanation: "In crowded pedestrian areas, slow down, ride single-file, and stay ready to stop. Speed is the biggest factor in how badly a crash hurts — ease off where people are walking.",
      },
      {
        id: "eb-06-s4", label: "Lights On",
        situation: "You're heading home along the coast as evening fog rolls in and the light fades.",
        prompt: "What's the best safety move?",
        options: [
          "Ride faster to beat the dark",
          "Turn on a white front light and red rear light, wear something bright, and slow down",
          "Turn lights off to save battery",
          "Wear dark clothes so you blend in",
        ],
        correctIndex: 1,
        explanation: "Fog and dusk make you hard to see. A front and rear light plus bright/reflective clothing and a slower pace keep drivers and pedestrians aware of you — and lights are required at night.",
      },
    ],
  },

  "ebikes-1-07": {
    intro: "Where you can ride in Santa Cruz depends on your e-bike's class and each path's rules. As a teen on a Class 1, you've got good access — but you still read the signs. Pick the legal route.",
    spots: [
      {
        id: "eb-07-s1", label: "The Paved Path",
        situation: "You're on your Class 1 pedal-assist and want to use a paved multi-use beach path that's open to bicycles, where Class 1 is permitted.",
        prompt: "Is this allowed?",
        options: [
          "Yes — Class 1 e-bikes are generally allowed on paved bike paths open to bicycles",
          "No — no e-bikes are ever allowed on any path",
          "Only if you have a license",
          "Only Class 3 is allowed there",
        ],
        correctIndex: 0,
        explanation: "Lower-speed Class 1 e-bikes are generally permitted on paved bike paths and lanes open to bicycles, unless a local sign says otherwise — handy for a teen commute.",
      },
      {
        id: "eb-07-s2", label: "Read the Sign",
        situation: "At a trailhead a posted sign reads 'Class 1 eBikes only.' You're on a Class 1.",
        prompt: "What should you do?",
        options: [
          "Ignore the sign — rules don't apply to teens",
          "Go ahead and ride it — your Class 1 is exactly what's permitted there",
          "Turn around; Class 1 is never allowed anywhere",
          "Only ride if no ranger is watching",
        ],
        correctIndex: 1,
        explanation: "'Class 1 only' is the most common trail-access rule, and your Class 1 is exactly what's permitted. Reading and following the posted class restriction is what keeps trails open to riders.",
      },
      {
        id: "eb-07-s3", label: "Class 3 Limits",
        situation: "Your 16-year-old friend on a Class 3 (28 mph) wants to join you on a separated bike path / multi-use trail.",
        prompt: "What's the general California rule for Class 3 on bike paths?",
        options: [
          "Class 3 can ride any path, anywhere, always",
          "Class 3 is generally prohibited from bike paths and multi-use trails unless a local authority specifically allows it",
          "Class 3 must ride on the sidewalk",
          "Class 3 e-bikes are banned from all of Santa Cruz",
        ],
        correctIndex: 1,
        explanation: "By default, Class 3 e-bikes are kept off bike paths and multi-use trails unless a local agency allows them — their higher speed is the reason. Your friend should take the road/bike lane.",
      },
      {
        id: "eb-07-s4", label: "Best Route",
        situation: "You and friends want to get across town to a Class 1-legal beach path during a busy afternoon.",
        prompt: "What's the safest, most legal routing choice?",
        options: [
          "Cut through the crowded pedestrian boardwalk at speed",
          "Take the on-street bike lanes to reach the bike path, riding single-file and obeying signals",
          "Ride on the sidewalks downtown the whole way",
          "Take a 'no e-bikes' trail because it's shorter",
        ],
        correctIndex: 1,
        explanation: "Use bike lanes and bike-legal paths, ride single-file, and obey signals. Skip crowded boardwalks, sidewalks, and trails that ban e-bikes — the legal route is also the safe one.",
      },
    ],
  },

  "ebikes-1-08": {
    intro: "Off-road, trail access is its own world. Whether your eMTB belongs on a trail depends on the class and the land manager — and good etiquette keeps trails open for your crew. Make the right call.",
    spots: [
      {
        id: "eb-08-s1", label: "Class 1 Singletrack",
        situation: "A legal singletrack near Santa Cruz is signed 'e-bikes: Class 1 only.' You're on a Class 1 eMTB with friends.",
        prompt: "Are you allowed to ride it?",
        options: [
          "Yes — a Class 1 eMTB is permitted where Class 1 is allowed",
          "No — eMTBs are banned from every trail",
          "Only if you turn the motor off",
          "Only Class 3 may ride singletrack",
        ],
        correctIndex: 0,
        explanation: "When a trail explicitly allows Class 1 e-bikes, your Class 1 eMTB is permitted. Class 1 is the access standard most land managers use for e-MTB trail riding.",
      },
      {
        id: "eb-08-s2", label: "Non-Motorized Trail",
        situation: "A trail is posted 'non-motorized / no motor vehicles,' with no e-bike exception, and managers treat eMTBs as motorized there.",
        prompt: "Can you ride your eMTB on it?",
        options: [
          "Yes — eMTBs count as regular bikes everywhere",
          "No — where e-bikes are treated as motorized and not exempted, the eMTB isn't allowed",
          "Yes, if you only use low assist",
          "Yes, as long as you're quiet",
        ],
        correctIndex: 1,
        explanation: "Trail access is set locally. On trails closed to motorized use with no e-bike exception, you can't ride — check each trail's specific rules before you go.",
      },
      {
        id: "eb-08-s3", label: "Yielding",
        situation: "You're climbing on your eMTB with friends and meet a hiker and a descending rider on a narrow trail.",
        prompt: "What's correct trail etiquette?",
        options: [
          "Bikes always go first over hikers",
          "Yield to hikers, generally yield to horses and to uphill traffic, and ride in control",
          "The fastest person goes first",
          "Hikers must step off for any e-bike",
        ],
        correctIndex: 1,
        explanation: "Standard multi-use etiquette: cyclists yield to hikers and horses, and downhill riders usually yield to climbers. Being courteous and in control is how riders keep trail access.",
      },
      {
        id: "eb-08-s4", label: "Protect the Trail",
        situation: "After a coastal storm the singletrack is wet and muddy, and your tires are leaving deep ruts.",
        prompt: "What's the responsible decision?",
        options: [
          "Ride anyway — ruts add character",
          "Stay off muddy trails to avoid damage; ride later when they've dried, or pick a hard surface",
          "Skid the corners to fling off the mud",
          "Ride faster so the tires don't sink",
        ],
        correctIndex: 1,
        explanation: "Riding wet trails carves ruts and speeds up erosion, which gets trails closed to bikes. Responsible riders wait for trails to dry — protecting access for everyone.",
      },
    ],
  },

  "ebikes-1-09": {
    intro: "An e-bike is a bike plus an electrical system, and salty Santa Cruz air is hard on both. Keep yours safe and reliable so it's ready for the ride to school. Diagnose the wear and choose the right care.",
    spots: [
      {
        id: "eb-09-s1", label: "Washing",
        situation: "Your bike is caked in salt and grime after coastal rides and you want to clean it without wrecking the electronics.",
        prompt: "What's the right way to wash a pedal-assist e-bike?",
        options: [
          "Blast it with a pressure washer aimed at the motor and battery",
          "Use a gentle hose or bucket and brush, keep water out of the motor and connectors, and dry it",
          "Dunk the whole bike in the ocean to rinse it",
          "Spray degreaser into the battery port",
        ],
        correctIndex: 1,
        explanation: "Low-pressure water, a brush, and care around the seals is right. A pressure washer drives water past the seals into the motor, battery, and bearings — never aim one at those parts.",
      },
      {
        id: "eb-09-s2", label: "Worn Brake Pads",
        situation: "Your disc brakes squeal, the lever pulls almost to the bar, and stopping power has faded.",
        prompt: "What's the right response?",
        options: [
          "Ignore it — brakes always squeal",
          "Get the worn brake pads inspected and replaced (and the rotors checked), since heavier/faster e-bikes wear pads fast",
          "Just pump up the tires",
          "Spray oil on the rotors to quiet them",
        ],
        correctIndex: 1,
        explanation: "Faded power and a lever that travels farther mean worn pads. E-bikes eat pads faster from the weight and speed — replace them and check the rotors. Never put oil on a braking surface.",
      },
      {
        id: "eb-09-s3", label: "Chain Care",
        situation: "After lots of salt-air rides your chain is dry, rusty-looking, and noisy, and your mid-drive puts extra load on it.",
        prompt: "What does it need?",
        options: [
          "Clean and lube the chain regularly and check it for wear, since e-bike torque wears drivetrains faster",
          "Leave it dry so dirt won't stick",
          "Pour cooking oil over the whole thing",
          "Replace the battery instead",
        ],
        correctIndex: 0,
        explanation: "A mid-drive's torque wears the chain and gears faster, and salt air causes rust. Regular cleaning, proper chain lube, and checking for wear keep it shifting smoothly and lasting longer.",
      },
      {
        id: "eb-09-s4", label: "When to Get Help",
        situation: "A motor error code pops up on the display, the assist cuts in and out, and you don't know why.",
        prompt: "What's the right call?",
        options: [
          "Pry open the sealed motor at home and poke around",
          "Take it to a qualified e-bike shop (or tell a parent/guardian) instead of opening sealed electronics yourself",
          "Keep riding and hope it clears up",
          "Disconnect the battery for good",
        ],
        correctIndex: 1,
        explanation: "Electrical faults and error codes need a qualified tech with the right tools. Opening a sealed motor yourself can cause damage and void the warranty — basic mechanical care is DIY, electronics aren't.",
      },
    ],
  },

  "ebikes-1-10": {
    intro: "Final ride: share the road like a pro, lock up smart at school, and know who has the right of way. Bring it all together the way a responsible teen rider should.",
    spots: [
      {
        id: "eb-10-s1", label: "Safe Passing",
        situation: "On a multi-use path you're catching up to a slower walker from behind.",
        prompt: "How do you pass correctly?",
        options: [
          "Buzz past as close and fast as you can",
          "Call out 'on your left,' slow down, and pass with a wide, gentle berth",
          "Use a burst of speed to get it over with",
          "Pass on whichever side has the smaller gap",
        ],
        correctIndex: 1,
        explanation: "Give an audible warning ('on your left' or a bell), slow down, and leave plenty of room. Predictable, announced passing is the etiquette that keeps shared paths safe.",
      },
      {
        id: "eb-10-s2", label: "Right of Way",
        situation: "You roll up to a four-way stop on your way to school at the same time as a car already stopped to your right.",
        prompt: "What should you do?",
        options: [
          "Blow through — bikes don't have to stop",
          "Stop, then yield to the vehicle that arrived first / is on your right, and go when it's your turn",
          "Assume the car will always wait for you",
          "Track-stand in the middle until they wave you on",
        ],
        correctIndex: 1,
        explanation: "An e-bike follows the same road rules: stop at the sign and yield by who-arrived-first / right-of-way. Riding lawfully and predictably is what keeps you safe and respected on the road.",
      },
      {
        id: "eb-10-s3", label: "Lock Up at School",
        situation: "You're parking your e-bike at the school bike rack all day, and e-bikes are a known theft target.",
        prompt: "What's the best theft-prevention move?",
        options: [
          "Lean it unlocked against the wall and check on it later",
          "Use a sturdy U-lock through the frame to the rack, take the battery/display if removable, and park where it's visible",
          "Loop a thin cable through just the front wheel",
          "Hide it in the bushes behind the gym",
        ],
        correctIndex: 1,
        explanation: "E-bikes are high-value theft targets. A quality U-lock through the frame to a fixed rack, removing the battery/display, and parking somewhere visible is the layered approach that deters thieves. A thin cable is cut in seconds.",
      },
      {
        id: "eb-10-s4", label: "Follow the House Rules",
        situation: "Your parent/guardian set rules: helmet on every ride, lights at night, no passengers on a one-person bike, and text when you arrive.",
        prompt: "What's the right approach?",
        options: [
          "Ignore the rules once you're out of sight",
          "Follow them — they keep you safe and keep your riding privileges",
          "Only follow them when a parent is watching",
          "Argue that real riders don't wear helmets",
        ],
        correctIndex: 1,
        explanation: "A guardian's rules — helmet, lights, one rider per bike, check-ins — line up with the law and good safety practice. Following them keeps you safe and keeps the keys to your e-bike.",
      },
    ],
  },
};
