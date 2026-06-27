import type { StageConfig, EpochConfig } from "./types";

export const ebikes1Epoch: EpochConfig = {
  id: "ebikes-1",
  name: "E-Bikes: Santa Cruz",
  subtitle: "Pedal-assist e-bikes for teens — ride smart, ride safe on the California coast",
  description:
    "A safety-first guide to pedal-assist e-bikes for teen riders in Santa Cruz, California. If you're riding to high school, meeting friends for a group ride, or earning the trust that comes with your own bike, this epoch is for you. It centers on Class 1 pedal-assist e-bikes — the most common and the most welcome on paths and trails — and teaches what an e-bike really is, how the motor and battery work, the three legal classes and California's helmet and age laws (taught accurately), how to pick an affordable bike that fits, battery and range, riding skills and traffic safety, where you can legally ride around town and up to UCSC, electric mountain bikes and trail access, keeping your bike running, and the etiquette and theft-prevention that keep you and your bike safe. Anchored in real Santa Cruz places and the local company, Santa Cruz Bicycles. Helmets on, lights on, ride predictable.",
  emoji: "🚴",
  color: "lime",
  unlocked: true,
};

export const ebikes1Stages: StageConfig[] = [
  // ─── ebikes-1-01: What Is an E-Bike ──────────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The pedal-assist e-bike", location: "Streets and trails of Santa Cruz, California", era: "Modern", emoji: "🚴" },
    id: "ebikes-1-01",
    order: 1,
    title: "What Is an E-Bike?",
    subtitle: "Pedal-assist explained, and why this course focuses on it",
    category: "sports",
    xp: 88,
    badge: { id: "ebikes-badge-01", name: "First Pedal", emoji: "🚴" },
    challengeType: "quiz",
    info: {
      tagline: "An e-bike is a regular bike with a small motor that helps you pedal — not a motorcycle. This course is all about PEDAL-ASSIST e-bikes, the kind most teens ride to school and the kind that's safest and most welcome on Santa Cruz paths and trails.",
      year: 2024,
      overview: [
        "An electric bike (e-bike) is a normal bicycle — pedals, chain, two wheels — with an electric motor and a battery that help you ride. The most important word is ASSIST: on a pedal-assist e-bike the motor only helps WHILE YOU PEDAL. You're still riding a bike; the motor just makes hills smaller and rides longer, which is perfect for getting to high school without showing up drenched in sweat.",
        "There are two ways a motor can give you power, and this course focuses on the first:\n- PEDAL-ASSIST (also called a pedelec) — the motor adds power only when you pedal, in proportion to how hard you push. This is what Class 1 and Class 3 e-bikes use, and it's the focus of everything here.\n- THROTTLE — a lever or twist grip that powers the bike WITHOUT pedaling, like a scooter. Only Class 2 bikes have a throttle. We mention it so you know what it is, but we don't center it.",
        "Why pedal-assist for new and teen riders? A few solid reasons:\n- IT FEELS LIKE A BIKE — because you're always pedaling, the bike handles and behaves like a bicycle, which is easier and safer to learn on.\n- BETTER ACCESS — Class 1 pedal-assist bikes are welcome on the most bike paths and trails; throttle bikes are restricted in more places.\n- SMOOTHER AND SAFER — power that matches your pedaling is more predictable than a throttle that surges, which matters a lot when you're new.",
      ],
      technical: {
        title: "Why an E-Bike Is a Bicycle (Not a Moped) — and Why Santa Cruz Loves Them",
        body: [
          "An e-bike is legally a bicycle, not a moped or motorcycle, because of strict limits:\n- LIMITED POWER — the motor is capped at 750 watts (about 1 horsepower).\n- LIMITED SPEED — the motor stops assisting at 20 mph (Class 1 and 2) or 28 mph (Class 3); after that, it's just you pedaling.\n- NO PLATE OR LICENSE — because of those limits, California asks for NO license, NO registration, and NO insurance for the three e-bike classes. A moped or motorcycle has none of those limits and needs all of that paperwork.",
          "Santa Cruz is almost made for teen e-bike riders:\n- THE HILLS — the town sits between the ocean and the Santa Cruz Mountains, with real climbs (like the grind up toward UCSC) that pedal-assist turns from brutal into easy.\n- THE TRIPS — short rides to school, the beach, a friend's house, or a group ride are exactly what e-bikes do best, often replacing a ride from a parent.\n- THE CULTURE — a deep cycling scene and a famous local bike company, Santa Cruz Bicycles, right in town. WARNING: a 'derestricted' or over-powered bike that beats these limits is no longer an e-bike — it becomes an illegal, unregistered motor vehicle, and that's a much bigger problem than a ticket.",
        ],
        codeExample: {
          label: "Pedal-assist vs throttle vs moped",
          code: `                  PEDAL-ASSIST    THROTTLE      MOPED
  this course?    YES (focus)     briefly       no
  pedal to move?  YES             not required  sometimes
  feels like...   a stronger bike a scooter     a small motorbike
  classes         1 and 3         2             not an e-bike
  license/plate?  NO              NO            YES

  An e-bike is a BICYCLE because the motor only ASSISTS,
  and power + speed are capped by law. Pedal-assist = most bike-like.`,
        },
      },
      incident: {
        title: "How Pedal-Assist Became the Standard",
        when: "1990s–2020s",
        where: "Europe and Japan → the United States → Santa Cruz",
        impact: "Pedal-assist grew from a European commuting idea into the mainstream e-bike style that teens now ride to school in coastal California",
        body: [
          "The modern pedal-assist bike was refined in Europe and Japan in the 1990s, where 'pedelecs' became an everyday way to commute and climb hills. Companies like Bosch and Shimano built reliable pedal-assist motor systems that bike makers could drop into real bicycles, and the style spread across Europe before reaching the US.",
          "The boom hit the United States in the late 2010s and early 2020s:\n- Pedal-assist became the default for quality bikes because it feels natural and rides like a bicycle.\n- California's three-class system (from a 2015 law called AB 1096) gave riders and parents a shared, clear vocabulary.\n- In a hilly, bike-loving town like Santa Cruz, pedal-assist e-bikes became a common sight on the way to school and on weekend group rides — widening who could ride and how far.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Bicycle First", sub: "pedals, chain, two wheels", type: "system" },
          { label: "Pedal-Assist Motor", sub: "helps only while you pedal", type: "attacker" },
          { label: "Power Is Capped", sub: "750 W, stops at 20 or 28 mph", type: "victim" },
          { label: "Legally a Bike", sub: "no license, plate, or insurance", type: "result" },
        ],
      },
      timeline: [
        { year: 1993, event: "Yamaha sells an early mass-produced pedal-assist (PAS) bicycle in Japan" },
        { year: 2010, event: "Bosch launches a dedicated pedal-assist motor system, fueling Europe's pedelec boom" },
        { year: 2015, event: "California passes AB 1096, defining the three-class e-bike system", highlight: true },
        { year: 2022, event: "US e-bike sales surge; pedal-assist becomes a common way teens ride to school" },
      ],
      keyTakeaways: [
        "An e-bike is a bicycle with a motor that ASSISTS you — this course focuses on pedal-assist",
        "Pedal-assist adds power only while you pedal; a throttle (Class 2 only) powers the bike without pedaling",
        "Pedal-assist is more bike-like, has better path/trail access, and is safer for new teen riders",
        "Capped power (750 W) and speed (20 or 28 mph) keep an e-bike legally a bicycle — no license or plate needed",
      ],
      references: [
        { title: "Electric bicycle — overview", url: "https://en.wikipedia.org/wiki/Electric_bicycle" },
        { title: "California DMV — Electric Bicycles", url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/registration-of-bicycles-mopeds/electric-bicycles/" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-01-q1", type: "Core Idea", challenge: "What the motor does.", text: "On a pedal-assist e-bike, when does the motor add power?", options: ["Only while you are pedaling, in proportion to your effort", "All the time, whether or not you pedal", "Only when you are braking", "Only above 28 mph"], correctIndex: 0, explanation: "Pedal-assist motors help only while you pedal, multiplying your own effort." },
        { id: "ebikes-1-01-q2", type: "Throttle", challenge: "Define the throttle.", text: "What is a 'throttle' on an e-bike, and which class has one?", options: ["A lever that powers the bike without pedaling — only on Class 2", "A second set of brakes on every e-bike", "The battery charger", "The pedal-assist sensor on Class 1"], correctIndex: 0, explanation: "A throttle powers the bike without pedaling and is found only on Class 2 bikes; this course focuses on pedal-assist." },
        { id: "ebikes-1-01-q3", type: "Why Pedal-Assist", challenge: "Safer to learn on.", text: "Why does this course focus on pedal-assist for new teen riders?", options: ["It feels like a bike, has better path access, and is more predictable and safer", "It is the only legal kind of e-bike", "It needs no helmet", "It can't go up hills"], correctIndex: 0, explanation: "Pedal-assist is more bike-like, gets the broadest path/trail access, and is safer for new riders." },
        { id: "ebikes-1-01-q4", type: "Not a Moped", challenge: "Why it's a bicycle.", text: "Why is an e-bike treated as a bicycle, not a moped, in California?", options: ["Its motor power and assist speed are capped within legal limits", "It is heavier than a moped", "It has a license plate", "It cannot be ridden on roads"], correctIndex: 0, explanation: "The 750 W power cap and the speed cutoff keep an e-bike legally a bicycle." },
        { id: "ebikes-1-01-q5", type: "Local", challenge: "Why Santa Cruz?", text: "Why are pedal-assist e-bikes a great fit for teens in Santa Cruz?", options: ["Steep hills (like the climb to UCSC) plus short trips to school and friends", "The town is completely flat", "E-bikes are required by city law", "There are no bike shops there"], correctIndex: 0, explanation: "Steep climbs and short school/social trips are exactly what pedal-assist e-bikes do best." },
      ],
    },
  },

  // ─── ebikes-1-02: How an E-Bike Works ────────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The pedal-assist drive system", location: "Inside every e-bike", era: "Modern", emoji: "⚙️" },
    id: "ebikes-1-02",
    order: 2,
    title: "How an E-Bike Works",
    subtitle: "Motor, battery, controller, and the sensor that reads your pedaling",
    category: "sports",
    xp: 90,
    badge: { id: "ebikes-badge-02", name: "Knows the Watts", emoji: "⚙️" },
    challengeType: "quiz",
    info: {
      tagline: "Five parts turn a bike into a pedal-assist e-bike: a motor, a battery, a controller, a sensor that reads your pedaling, and the bike's own gears. Knowing them helps you pick a good bike, ride it well, and keep it safe.",
      year: 2024,
      overview: [
        "A pedal-assist e-bike has a few core parts you should be able to name:\n- MOTOR — turns battery power into the push that helps you pedal.\n- BATTERY — stores the energy, measured in watt-hours (Wh).\n- CONTROLLER — the small computer that decides how much power to send.\n- SENSOR — detects that you're pedaling (and often how hard) so the motor responds. On pedal-assist bikes, no pedaling means no power.\n- DRIVETRAIN — the bike's own gears, chain, and cranks, which still carry the power to the rear wheel.",
        "Motors sit in one of two places, and it changes how the bike rides:\n- MID-DRIVE — the motor is at the cranks (the pedals) and drives the chain, so its power runs through the bike's gears. It climbs steep hills well and keeps the weight low and centered — great for the Santa Cruz Mountains and the climb to UCSC.\n- HUB MOTOR — the motor is built into the front or rear wheel and pushes that wheel directly. It's simpler and often cheaper, but doesn't use the gears.\n- Quality pedal-assist bikes usually use mid-drives; budget bikes often use hub motors.",
        "The battery is what everyone asks about, and watt-hours tell the story:\n- WATT-HOURS (Wh) = volts x amp-hours; it's the size of the 'fuel tank' and the best predictor of how far you can go.\n- A common e-bike battery is around 400–750 Wh; a bigger pack goes farther but costs and weighs more.\n- How far you actually get also depends on hills, your weight, assist level, and wind (covered in the range stage).",
      ],
      technical: {
        title: "Torque Sensors, Assist Modes, and the Systems in Local Shops",
        body: [
          "How natural and safe an e-bike feels comes down to its sensor:\n- A CADENCE SENSOR just notices the pedals turning and switches the motor on — cheap, but the power can feel like a sudden surge, which can catch a new rider off guard.\n- A TORQUE SENSOR measures how HARD you push and adds power in proportion, so the bike feels like a stronger version of your own legs. It's smoother, more predictable, and easier on the battery — better for new riders.\n- Good mid-drive pedal-assist systems use torque sensors, which is a big reason they feel so controlled on a climb.",
          "Most e-bikes in a Santa Cruz shop are built around a few pedal-assist systems:\n- BOSCH and SHIMANO (Shimano's STEPS/EP line) are the two leading mid-drive systems, known for reliable torque sensing and tunable assist modes (Eco / Tour / Turbo, or similar).\n- Assist modes let you choose less power to save battery or more power for a steep climb — start in a low mode while you learn the bike's response.\n- Santa Cruz Bicycles' Heckler electric mountain bike, for example, is built around a Shimano pedal-assist system — a local example of a quality torque-sensor bike.",
        ],
        codeExample: {
          label: "How the parts connect (pedal-assist)",
          code: `   [ BATTERY ]  --power-->  [ CONTROLLER ]  --power-->  [ MOTOR ]
   (watt-hours)              (the brain)                  |
                                 ^                        |
                                 |                        v
                          [ SENSOR ]              MID-DRIVE turns the
                     (torque = how HARD            CRANKS -> through the
                      you pedal)                    GEARS -> rear wheel

   NO PEDALING -> NO POWER  (that's what pedal-assist means)
   Torque sensor = smooth, predictable power = easier + safer to learn on`,
        },
      },
      incident: {
        title: "When Torque-Sensor Mid-Drives Made E-Bikes Feel Natural",
        when: "2014–2016",
        where: "European and California cycling scenes",
        impact: "Compact, torque-sensing pedal-assist motors made e-bikes ride like real bicycles — smoother and safer, especially for newer riders",
        body: [
          "Early e-bikes often used clunky hub motors with simple on/off cadence sensors, so the power could surge in a way that felt unnatural and could surprise a rider. The breakthrough came when Bosch, Shimano, and others shipped compact mid-drive motors with torque sensors: power ran through the gears, the weight sat low, and the assist matched the rider's effort.",
          "That change made today's smooth, predictable e-bikes possible:\n- Riders could climb steep hills with power that felt like their own legs, not a jolt.\n- The natural feel made e-bikes easier and safer to learn — a real plus for teen and new riders.\n- Brands including Santa Cruz Bicycles built torque-sensor pedal-assist bikes like the Heckler, and confident, controlled riding became the norm.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Battery (Wh)", sub: "stores the energy", type: "system" },
          { label: "Controller", sub: "meters the power", type: "attacker" },
          { label: "Sensor", sub: "torque reads how hard you pedal", type: "victim" },
          { label: "Motor + Gears", sub: "mid-drive climbs through the drivetrain", type: "result" },
        ],
      },
      timeline: [
        { year: 1989, event: "An early torque-sensing pedal-assist concept is patented" },
        { year: 2010, event: "Bosch ships a compact mid-drive pedal-assist motor system" },
        { year: 2014, event: "Torque-sensing mid-drives make e-bikes feel natural and predictable", highlight: true },
        { year: 2021, event: "Santa Cruz Bicycles' Heckler ships on a Shimano pedal-assist system" },
      ],
      keyTakeaways: [
        "A pedal-assist e-bike adds a motor, battery, controller, and pedaling sensor to the bike's own drivetrain",
        "No pedaling means no power on a pedal-assist bike — the sensor reads that you're pedaling",
        "Mid-drive motors climb best (power through the gears); battery size is measured in watt-hours (Wh)",
        "A torque sensor makes power smooth and predictable — easier and safer for new riders than a cadence sensor",
      ],
      references: [
        { title: "Electric bicycle — motors and batteries", url: "https://en.wikipedia.org/wiki/Electric_bicycle" },
        { title: "Bosch eBike Systems", url: "https://www.bosch-ebike.com/en" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-02-q1", type: "Battery", challenge: "The fuel-tank number.", text: "Battery capacity on an e-bike is measured in what unit?", options: ["Watt-hours (Wh)", "Miles per hour", "Newton-meters", "Decibels"], correctIndex: 0, explanation: "Watt-hours (volts x amp-hours) measure stored energy and best predict range." },
        { id: "ebikes-1-02-q2", type: "Motor Type", challenge: "Best climber.", text: "Which motor placement runs power through the gears to help on steep climbs?", options: ["Mid-drive (at the cranks)", "Front hub motor", "Rear hub motor", "Seatpost motor"], correctIndex: 0, explanation: "A mid-drive sits at the cranks and drives the chain, using the gears to climb." },
        { id: "ebikes-1-02-q3", type: "Pedal-Assist", challenge: "No pedaling, no power.", text: "On a pedal-assist e-bike, what happens if you stop pedaling?", options: ["The motor stops adding power", "The bike speeds up on its own", "The throttle takes over", "The brakes lock"], correctIndex: 0, explanation: "Pedal-assist means the motor only helps while you pedal — stop pedaling and the assist stops." },
        { id: "ebikes-1-02-q4", type: "Sensors", challenge: "Smooth and safe.", text: "Why is a torque sensor better for a new rider than a cadence sensor?", options: ["It adds power in proportion to your effort, so it's smooth and predictable", "It makes the bike go faster than the limit", "It removes the need for brakes", "It only works downhill"], correctIndex: 0, explanation: "A torque sensor feeds power proportionally, avoiding the sudden surge that can surprise new riders." },
        { id: "ebikes-1-02-q5", type: "Systems", challenge: "The big two.", text: "Which two pedal-assist systems are common on quality e-bikes?", options: ["Bosch and Shimano", "Tesla and Rivian", "Honda and Yamaha cars", "Intel and AMD"], correctIndex: 0, explanation: "Bosch and Shimano are the leading mid-drive pedal-assist systems on quality e-bikes." },
      ],
    },
  },

  // ─── ebikes-1-03: The Three Classes & California Law ─────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The three-class system", location: "California law (AB 1096)", era: "Modern", emoji: "⚖️" },
    id: "ebikes-1-03",
    order: 3,
    title: "The Three Classes & California Law",
    subtitle: "AB 1096, the helmet law, and the rules every teen rider must know",
    category: "sports",
    xp: 95,
    badge: { id: "ebikes-badge-03", name: "Knows the Law", emoji: "⚖️" },
    challengeType: "quiz",
    info: {
      tagline: "If you're a teen on an e-bike in California, this is the stage that keeps you legal and safe. The three classes, the under-18 helmet law, and the Class 3 age rule are the facts you and your parents most need to get right.",
      year: 2024,
      overview: [
        "In 2015, California's Assembly Bill 1096 created a three-class system (effective January 1, 2016). Each class is defined by how the motor delivers power and the speed at which it stops assisting:\n- CLASS 1 — pedal-assist only (no throttle); the motor stops assisting at 20 mph. This is the most common class and the focus of this course.\n- CLASS 2 — has a throttle that can power the bike without pedaling; the motor stops at 20 mph.\n- CLASS 3 — pedal-assist only, but the motor assists up to 28 mph, and the bike has a speedometer.",
        "Here are the HELMET and AGE rules — the most important ones for teens:\n- UNDER 18? HELMET ALWAYS. California law requires anyone under 18 to wear a helmet on ANY class of e-bike. No exceptions.\n- CLASS 3 IS STRICTER: you must be at least 16 to operate a Class 3 e-bike, AND every rider of a Class 3 must wear a helmet at ANY age. So even an adult on a Class 3 wears a helmet.\n- Class 1 and Class 2 have no minimum operating age under state law (local rules can add one), but the under-18 helmet rule always applies. Most teens ride Class 1.",
        "The classes are NOT mopeds or motor vehicles, which is good news for you and your family:\n- For all three classes, California requires NO driver's license, NO registration, and NO insurance.\n- All three are limited to a motor of 750 watts or less.\n- A bike that breaks these limits (more power, or a motor that keeps pushing past the speed cap) is NOT an e-bike — it's a moped or motorcycle that legally needs registration and a license. Riding a 'souped-up' bike can quietly turn you into an unlicensed motor-vehicle driver.",
      ],
      technical: {
        title: "Where Each Class May Ride — and Why Class 1 Is the Teen Default",
        body: [
          "The class label controls where you're allowed to ride:\n- CLASS 1 and CLASS 2 may generally go where regular bikes go — bike lanes and, in most cases, paved multi-use paths — unless a local sign or land manager says otherwise.\n- CLASS 3 is the restricted one: it may ride on the road and in on-road bike lanes, but it's generally NOT allowed on multi-use bike paths and trails unless the path runs along a road or a local rule allows it.\n- This is a big reason CLASS 1 is the default for teens: pedal-assist to 20 mph, the broadest path and trail access, and no special age rule beyond the under-18 helmet law.",
          "A few more facts that keep you legal and your parents comfortable:\n- E-bikes follow the same rules of the road as bicycles: ride with traffic, obey signals and stop signs, and use lights at night.\n- Class 3 bikes have a speedometer; Class 1/2 cap assist at 20 mph and Class 3 at 28 mph.\n- TALK TO YOUR PARENT OR GUARDIAN about your bike's class, where you'll ride, and a helmet-every-time rule. Agreeing on expectations up front is how you earn and keep the freedom an e-bike gives you.\n- Never 'derestrict' or modify a bike to beat the limits — it becomes an illegal motor vehicle and far more dangerous.",
        ],
        codeExample: {
          label: "California's three classes (AB 1096) — teen edition",
          code: `  CLASS  POWER MODE      MOTOR STOPS  HELMET RULE       MIN AGE
  -----  ----------      -----------  ----------------  -------
  1      pedal-assist    20 mph       under 18 always   none*
  2      throttle OK     20 mph       under 18 always   none*
  3      pedal-assist    28 mph       ALL riders, any   16+

  ALL CLASSES: motor <= 750 W; NO license / registration / insurance.
  CLASS 3: usually NOT allowed on multi-use bike paths.
  TEEN DEFAULT: Class 1 (pedal-assist, 20 mph, best path access).
  * local rules may add a min age; under-18 helmet rule ALWAYS applies.`,
        },
      },
      incident: {
        title: "AB 1096: Clear Rules That Protect Young Riders",
        when: "2015–2016",
        where: "California State Legislature",
        impact: "A single bill turned a confusing old e-bike rule into the clear three-class system, with helmet and age protections that matter most for teens",
        body: [
          "Before 2016, California treated e-bikes under an old 'motorized bicycle' rule that didn't fit modern pedal-assist bikes, leaving families confused about helmets, ages, and where kids could ride. Assembly Bill 1096, signed in 2015 and effective January 1, 2016, replaced it with the clean three-class system and a 750-watt cap.",
          "The law kept e-bikes in the 'bicycle' family while drawing safety lines that especially protect teens:\n- It set the under-18 helmet rule for every class.\n- It made Class 3 (the faster, 28 mph pedal-assist) require riders to be 16+ and to wear a helmet at any age, and kept Class 3 off most bike paths.\n- Because it was clear and workable, most US states copied this model — which is why a Class 1/2/3 sticker is on nearly every e-bike sold today, including the ones in Santa Cruz shops.",
        ],
      },
      diagram: {
        nodes: [
          { label: "AB 1096 (2015)", sub: "creates the three classes", type: "system" },
          { label: "Helmet Under 18", sub: "required on ANY class", type: "attacker" },
          { label: "Class 3 = 16+ & Helmet", sub: "every rider, any age", type: "victim" },
          { label: "Still a Bicycle", sub: "no license, plate, or insurance", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "California enacts AB 1096, creating the three-class e-bike system", highlight: true },
        { year: 2016, event: "The law takes effect January 1; helmet and age rules apply" },
        { year: 2018, event: "Many other US states adopt the same three-class model" },
        { year: 2024, event: "The three classes and helmet law remain the basis of California e-bike rules" },
      ],
      keyTakeaways: [
        "AB 1096 (2015): Class 1 (pedal-assist, 20 mph), Class 2 (throttle, 20 mph), Class 3 (pedal-assist, 28 mph)",
        "Anyone under 18 must wear a helmet on ANY class — the rule that matters most for teens",
        "Class 3 requires riders to be 16+ AND a helmet for EVERY rider at any age; it's usually banned from bike paths",
        "All three classes are bicycles — no license, registration, or insurance, and a 750 W motor cap; Class 1 is the teen default",
      ],
      references: [
        { title: "California DMV — Electric Bicycles & the 3 classes", url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/registration-of-bicycles-mopeds/electric-bicycles/" },
        { title: "California AB 1096 (2015) — bill text", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201520160AB1096" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-03-q1", type: "Helmet Law", challenge: "The teen rule.", text: "Under California law, who must wear a helmet on a Class 1 e-bike?", options: ["Anyone under 18, always", "Only riders over 21", "No one — helmets are optional", "Only on weekends"], correctIndex: 0, explanation: "California requires every rider under 18 to wear a helmet on any class of e-bike." },
        { id: "ebikes-1-03-q2", type: "Class 3", challenge: "The strict one.", text: "Which rules apply specifically to a Class 3 e-bike?", options: ["Rider must be 16+, and every rider must wear a helmet at any age", "Anyone of any age, no helmet needed", "Throttle to 28 mph with no rules", "Allowed on all bike paths"], correctIndex: 0, explanation: "Class 3 (pedal-assist to 28 mph) requires riders to be 16+ and a helmet for every rider, any age." },
        { id: "ebikes-1-03-q3", type: "Class 1", challenge: "The teen default.", text: "What defines a Class 1 e-bike?", options: ["Pedal-assist only, with the motor stopping at 20 mph", "Throttle to 28 mph", "Pedal-assist to 28 mph", "A 1,500-watt motor"], correctIndex: 0, explanation: "Class 1 is pedal-assist only, with assist cutting off at 20 mph — the most common teen choice." },
        { id: "ebikes-1-03-q4", type: "Paperwork", challenge: "Not a motor vehicle.", text: "What does California require to ride one of the three e-bike classes?", options: ["No license, registration, or insurance", "A motorcycle license and plates", "Annual DMV registration", "Proof of insurance"], correctIndex: 0, explanation: "All three classes are bicycles under California law — none need a license, plate, or insurance." },
        { id: "ebikes-1-03-q5", type: "Where to Ride", challenge: "Path access.", text: "Which class is generally NOT allowed on multi-use bike paths?", options: ["Class 3", "Class 1", "Class 2", "All classes are banned"], correctIndex: 0, explanation: "Class 3 is usually kept off multi-use bike paths; Class 1 (the teen default) has the broadest access." },
      ],
    },
  },

  // ─── ebikes-1-04: Choosing Your E-Bike ───────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The right bike for a teen rider", location: "Santa Cruz bike shops", era: "Modern", emoji: "🛒" },
    id: "ebikes-1-04",
    order: 4,
    title: "Choosing Your E-Bike",
    subtitle: "Class 1 for most teens, the right fit, and getting value for the money",
    category: "sports",
    xp: 92,
    badge: { id: "ebikes-badge-04", name: "Smart Buyer", emoji: "🛒" },
    challengeType: "quiz",
    info: {
      tagline: "Your first e-bike doesn't have to be the most expensive — it has to fit you, suit your riding, and be safe and supportable. For most teens, a Class 1 pedal-assist bike sized for Santa Cruz's hills is the sweet spot.",
      year: 2024,
      overview: [
        "Start with the class and the type. For most teens, the answer is CLASS 1 pedal-assist, because it has the broadest path and trail access and the most bike-like feel. Then pick the type that matches your riding:\n- COMMUTER / CITY — upright, with lights, fenders, and a rack; perfect for the ride to high school and around town.\n- ELECTRIC MOUNTAIN BIKE (eMTB) — suspension and knobby tires for dirt trails and group rides in the mountains.\n- Folding and cargo bikes exist too, but commuter and eMTB cover most teen riding.",
        "Fit matters as much as type — maybe more, because e-bikes are heavy:\n- FRAME SIZE — your leg length and reach should match the frame; a shop can size you and let you test ride.\n- STANDOVER AND REACH — you should be able to plant a foot flat and reach the bars comfortably, so you can control a heavier bike at low speed.\n- TEST RIDE A REAL HILL — if you can, ride a demo bike up a climb like the ones around town before deciding.",
        "Be smart about money — value beats flashy:\n- BUDGET HONESTLY with your parent or guardian, and remember to leave room for the safety gear you actually need: a good helmet, lights, and a strong lock.\n- TORQUE AND BATTERY FOR THE HILLS — a higher-torque mid-drive (often 70–85 Nm) and a decent battery (around 500 Wh) will handle Santa Cruz climbs; a weak, super-cheap bike may struggle and wear out.\n- BUY SUPPORTABLE, NOT JUST CHEAP — a bike a local shop can service and update is worth more over time than a no-name bargain that no one will fix.",
      ],
      technical: {
        title: "Santa Cruz Bicycles, the Heckler, and Why a Local Shop Matters",
        body: [
          "Santa Cruz has a famous local bike company, which makes a useful example:\n- SANTA CRUZ BICYCLES is a premium mountain-bike maker based right in the city, known for its trail bikes and a strong frame warranty.\n- Its eMTB, the HECKLER, is a Class 1 pedal-assist full-suspension mountain bike — a high-end example of a bike built for the steep local terrain. You don't need to buy one, but it shows what a quality Class 1 trail bike looks like.\n- Most teens will land on a more affordable commuter or entry eMTB — that's totally fine; the goal is the right, safe bike, not the priciest.",
          "Where you buy matters more for an e-bike than a regular bike:\n- A LOCAL BIKE SHOP fits you, assembles the bike safely, and services the motor, battery, and firmware over its life — including the brakes that have to stop a heavy bike.\n- Ask about the warranty (especially the battery and motor), whether you can start in a low assist mode while you learn, and whether the shop is an authorized service center for that motor system.\n- A safe, well-fitted, serviceable bike is the best 'feature' you can buy — it's also what convinces a parent or guardian that you're ready for the responsibility.",
        ],
        codeExample: {
          label: "Choosing a teen's first e-bike",
          code: `  STEP 1  CLASS: Class 1 (pedal-assist, 20 mph) for most teens
  STEP 2  TYPE:  commuter (school + town) or eMTB (trails)
  STEP 3  FIT:   get sized, plant a foot flat, test ride a hill
  STEP 4  HILLS: mid-drive torque ~70-85 Nm + battery ~500 Wh
  STEP 5  VALUE: leave budget for HELMET + LIGHTS + LOCK
  STEP 6  BUY SUPPORTABLE: a shop that can service it

  Flashy and cheap < safe, fitted, and supportable.`,
        },
      },
      incident: {
        title: "The Cheap-Bike Trap",
        when: "2018–present",
        where: "Online e-bike marketplaces",
        impact: "A flood of ultra-cheap, unsupported e-bikes left buyers with dead batteries, weak brakes, and no one to fix them — a warning for value shoppers",
        body: [
          "As e-bikes boomed, very cheap online bikes appeared with no local dealer, generic motors, and batteries of unknown quality. Some were okay; many became heavy paperweights when the battery died or a part failed and no shop would touch them. A few had brakes too weak for a heavy bike — a real safety problem.",
          "The lesson isn't 'spend the most' — it's 'buy supportable and safe':\n- A bike using a known system (Bosch, Shimano) bought through a shop can be diagnosed, updated, and repaired for years.\n- Battery quality and safety (proper cells, a UL-style certification) are worth paying for, because cheap packs fail most often.\n- For Santa Cruz's hills, a properly sized, serviceable Class 1 bike just works — while a too-cheap bike may overheat, brake poorly, or never make the climb. Put your money into safety and support, not hype.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pick Class 1", sub: "best access, bike-like feel", type: "system" },
          { label: "Pick the Type", sub: "commuter or eMTB", type: "attacker" },
          { label: "Fit + Size for Hills", sub: "torque (Nm) + battery (Wh)", type: "victim" },
          { label: "Safe & Supportable", sub: "budget for gear; a shop that services it", type: "result" },
        ],
      },
      timeline: [
        { year: 1994, event: "Santa Cruz Bicycles is founded in Santa Cruz, California" },
        { year: 2018, event: "Cheap, unsupported e-bikes flood online marketplaces" },
        { year: 2021, event: "Santa Cruz Bicycles releases the Heckler, a Class 1 full-suspension eMTB", highlight: true },
        { year: 2024, event: "Sizing for torque/battery and buying supportable become standard advice" },
      ],
      keyTakeaways: [
        "For most teens, a Class 1 pedal-assist bike is the best mix of access, feel, and safety",
        "Fit comes first: get sized, plant a foot flat, and test ride a real hill before buying",
        "Budget for the safety gear you need — helmet, lights, and a strong lock — not just the bike",
        "Buy a supportable bike from a shop that can service the motor, battery, brakes, and firmware",
      ],
      references: [
        { title: "Santa Cruz Bicycles — Heckler", url: "https://www.santacruzbicycles.com/en-US/heckler" },
        { title: "Electric bicycle — types", url: "https://en.wikipedia.org/wiki/Electric_bicycle" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-04-q1", type: "Class", challenge: "Best for teens.", text: "Which class is usually the best first e-bike for a teen?", options: ["Class 1 (pedal-assist, 20 mph, broad path access)", "Class 3 (28 mph)", "An over-750-watt custom bike", "A throttle moped"], correctIndex: 0, explanation: "Class 1 pedal-assist gives the best access and the most bike-like, safe feel for new riders." },
        { id: "ebikes-1-04-q2", type: "Hills", challenge: "Climbing strength.", text: "Which spec most directly measures a motor's climbing strength?", options: ["Torque, in newton-meters (Nm)", "Battery weight", "Tire width", "Handlebar height"], correctIndex: 0, explanation: "Torque (Nm) is the motor's pulling power on a climb — key for Santa Cruz hills." },
        { id: "ebikes-1-04-q3", type: "Budget", challenge: "Spend smart.", text: "When budgeting for a first e-bike, what should you be sure to leave money for?", options: ["Safety gear — a good helmet, lights, and a strong lock", "A second battery only", "Custom paint", "A louder horn"], correctIndex: 0, explanation: "Helmet, lights, and a strong lock are essential gear — plan the budget to include them." },
        { id: "ebikes-1-04-q4", type: "Buying", challenge: "Why a shop.", text: "Why is buying from a local shop valuable for an e-bike?", options: ["The shop fits, assembles, and services the motor, battery, brakes, and firmware over time", "Shops are always cheapest", "It avoids needing a helmet", "It registers the bike with the DMV"], correctIndex: 0, explanation: "E-bikes need ongoing service; a supporting shop keeps the bike safe and running for years." },
        { id: "ebikes-1-04-q5", type: "Value", challenge: "Cheap-bike trap.", text: "What's the risk of the cheapest no-name online e-bike?", options: ["Weak brakes/battery and no one to service it", "It is always the safest option", "It comes with a free license", "It can't be ridden on roads"], correctIndex: 0, explanation: "Ultra-cheap bikes often have weak parts and no support — buy supportable and safe instead." },
      ],
    },
  },

  // ─── ebikes-1-05: Battery & Range ────────────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The watt-hour budget", location: "From a full charge to the ride home", era: "Modern", emoji: "🔋" },
    id: "ebikes-1-05",
    order: 5,
    title: "Battery & Range",
    subtitle: "Watt-hours, the climb home, charging habits, and battery safety",
    category: "sports",
    xp: 96,
    badge: { id: "ebikes-badge-05", name: "Range Manager", emoji: "🔋" },
    challengeType: "quiz",
    info: {
      tagline: "Will it make it to school and back? That's the range question, and you can answer it with simple math. Knowing your watt-hours and charging your battery safely keeps you from getting stranded — and keeps the battery (and your home) safe.",
      year: 2024,
      overview: [
        "Range starts with the battery's watt-hours (Wh), but how fast you use them depends on how you ride:\n- A rough rule: a pedal-assist e-bike uses about 10–20 Wh per mile, so a 500 Wh battery might go anywhere from ~25 to ~50 miles.\n- Use a low assist level (Eco) and the battery lasts much longer; ride in Turbo up every hill and it drains fast.\n- Your weight, a loaded backpack, wind, low tire pressure, and stop-and-go all change the number — so any single 'X-mile' claim is just a starting point.",
        "Hills are the biggest range factor in Santa Cruz — plan for the climb home:\n- A long climb like the route up to UCSC or into the Santa Cruz Mountains can use several times the energy of flat, cruisy West Cliff Drive.\n- Plan a hilly day by its climbing, not just its distance: a hilly 15-mile round trip can drain more than a flat 30-mile cruise.\n- The good news: what goes up comes down, so you use less on the descent — but you can't 'bank' enough downhill to undo a big climb. Leave a buffer so the ride home isn't a problem.",
        "How you charge decides how long the battery LASTS (years), not just today's range:\n- LITHIUM BATTERIES like a middle charge: routinely keeping the pack between about 20% and 80% is gentler than always draining to empty or sitting at 100%.\n- TEMPERATURE MATTERS: charge and store at room temperature — not in a hot car or a freezing garage — and let a cold battery warm up before charging.\n- Use ONLY the charger that came with the bike, don't leave it charging unattended for days, and store it around half charge if you won't ride for a while.",
      ],
      technical: {
        title: "Estimating Range, Cold Mornings, and Charging Safely at Home",
        body: [
          "You can estimate range with easy arithmetic:\n- RANGE (mi) is roughly battery Wh divided by your Wh-per-mile. At a thrifty 12 Wh/mi, a 500 Wh battery gives ~40 miles; at a hill-climbing 25 Wh/mi, ~20 miles.\n- Watch the bike's display — most show a battery percentage and an estimated remaining range that adapts to how you've been riding.\n- For a big day, plan around the WORST case (lots of climbing, high assist) so you arrive with margin, not on fumes. And remember: even a dead battery just means a heavier bike you can still pedal home — not a stranding.",
          "Two things catch riders out — cold and charging safety:\n- COLD foggy-coast mornings temporarily reduce how much energy the battery delivers, shortening range; the capacity returns as the pack warms up.\n- CHARGE SAFELY: this is a real home-safety issue. Use only the manufacturer's charger, charge where you can see it (not while you sleep), keep it away from exits and flammable stuff, and NEVER charge a damaged or swollen battery. Let a hot battery cool first.\n- Cheap, uncertified packs and mismatched chargers are what cause rare battery fires — a quality, UL-style certified battery charged the right way is safe and long-lived.",
        ],
        codeExample: {
          label: "Estimating range + charging safely",
          code: `  RANGE (miles)  ~=  BATTERY (Wh)  /  USE RATE (Wh per mile)

  USE RATE depends on how you ride:
    flat, low assist (Eco)   ~ 10-12 Wh/mi
    rolling, medium assist   ~ 15-18 Wh/mi
    big climbs, high assist  ~ 20-25+ Wh/mi

  EXAMPLE: 500 Wh battery, climbing home to the UCSC area
    500 / 25  ~= 20 miles  -> plenty for school + back, with margin

  CHARGE SAFELY: only the right charger | where you can see it
    20-80% is gentle | never charge a damaged/swollen pack`,
        },
      },
      incident: {
        title: "Battery Safety and the Push for Certified Packs",
        when: "2021–2023",
        where: "United States cities",
        impact: "Fires traced to cheap, damaged, or counterfeit battery packs pushed riders toward certified batteries and safe charging habits — important wherever teens charge bikes at home",
        body: [
          "As e-bikes and e-scooters multiplied, some cities saw fires traced to low-quality, damaged, or counterfeit lithium packs and mismatched chargers — almost always cheap, uncertified gear rather than name-brand systems. The risk is real but very manageable with good gear and good habits.",
          "The response set today's best practices, and they matter at home:\n- Buy bikes and batteries that meet a recognized safety certification (UL-style testing), and only use the bike's own charger.\n- Don't charge a damaged or swollen pack, don't leave it charging unattended overnight, and let a hot battery cool first.\n- Store and charge at room temperature, away from doors and flammables. These simple habits make a quality battery safe — protect your home, your family, and the range you paid for.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Watt-Hours", sub: "the size of the tank", type: "system" },
          { label: "Use Rate", sub: "assist + hills + weight", type: "attacker" },
          { label: "Cold & Climbs", sub: "shorten range — plan a buffer", type: "victim" },
          { label: "Charge Safely", sub: "right charger, watch it, 20-80%", type: "result" },
        ],
      },
      timeline: [
        { year: 2008, event: "Lithium-ion packs become standard on quality e-bikes" },
        { year: 2018, event: "On-bike displays add adaptive remaining-range estimates" },
        { year: 2022, event: "Battery-fire incidents drive a push for UL-certified packs and safe charging", highlight: true },
        { year: 2024, event: "Watt-hour range math and safe-charging habits become standard rider knowledge" },
      ],
      keyTakeaways: [
        "Estimate range as battery watt-hours divided by your watt-hours-per-mile (about 10–25 Wh/mi)",
        "Hills like the climb to UCSC drain range fast — plan for the ride home and leave a buffer",
        "For battery life, favor a 20–80% charge and avoid heat, deep cold, and constant 100%",
        "Charge safely: only the right charger, where you can see it, never a damaged pack — it's a home-safety issue",
      ],
      references: [
        { title: "Electric bicycle — range and batteries", url: "https://en.wikipedia.org/wiki/Electric_bicycle" },
        { title: "Lithium-ion battery", url: "https://en.wikipedia.org/wiki/Lithium-ion_battery" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-05-q1", type: "Estimate", challenge: "Do the math.", text: "How do you roughly estimate an e-bike's range?", options: ["Battery watt-hours divided by watt-hours used per mile", "Battery weight times tire pressure", "Top speed times motor torque", "Number of gears divided by rider weight"], correctIndex: 0, explanation: "Range is about battery Wh / Wh-per-mile, which depends on assist level and terrain." },
        { id: "ebikes-1-05-q2", type: "Hills", challenge: "What drains it.", text: "What drains the battery fastest on the ride home in Santa Cruz?", options: ["A long climb on high assist", "Coasting downhill", "Riding slowly on the flat", "Leaving the bike parked"], correctIndex: 0, explanation: "Steep, sustained climbs on high assist use several times the energy of flat riding." },
        { id: "ebikes-1-05-q3", type: "Charging Safety", challenge: "Home safety.", text: "Which is a safe e-bike charging habit?", options: ["Use only the bike's own charger, where you can see it, and never charge a damaged pack", "Charge any battery with any charger overnight while asleep", "Charge a swollen battery to fix it", "Charge it next to the heater"], correctIndex: 0, explanation: "Use the correct charger, supervise charging, and never charge a damaged or swollen battery." },
        { id: "ebikes-1-05-q4", type: "Longevity", challenge: "Battery lifespan.", text: "Which charging habit is gentlest on the battery over time?", options: ["Keeping it roughly between 20% and 80% at room temperature", "Always draining to 0% then charging to 100%", "Storing it in a hot car", "Charging it in a freezer"], correctIndex: 0, explanation: "Lithium packs last longest in a middle charge range at moderate temperatures." },
        { id: "ebikes-1-05-q5", type: "Stranded?", challenge: "Empty battery.", text: "What happens if the battery runs out before you get home?", options: ["You can still pedal it home — it's just heavier and slower", "The bike locks and won't move", "You must call a tow truck", "The wheels stop turning"], correctIndex: 0, explanation: "A dead battery means a heavier bike, not a stranded rider — you can always pedal home." },
      ],
    },
  },

  // ─── ebikes-1-06: Riding Skills & Safety ─────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "Control, focus, and good habits", location: "The ride to school and around town", era: "Modern", emoji: "🦺" },
    id: "ebikes-1-06",
    order: 6,
    title: "Riding Skills & Safety",
    subtitle: "Helmets, braking the extra weight, no earbuds, and group-ride safety",
    category: "sports",
    xp: 100,
    badge: { id: "ebikes-badge-06", name: "Sure-Handed", emoji: "🦺" },
    challengeType: "quiz",
    info: {
      tagline: "This is the most important stage in the course. An e-bike is heavier and quicker than a regular bike, so a few real skills — helmet on, brake early, ride predictable, stay focused — keep you safe getting to school and riding with friends.",
      year: 2024,
      overview: [
        "Start with the gear and the law, because it's simple and it saves lives:\n- HELMET, EVERY RIDE — California requires it if you're under 18 (and for every Class 3 rider at any age), but you should wear one no matter what. Fit it level, snug, and buckled.\n- LIGHTS AND VISIBILITY — run a white front light and a red rear light, even in daylight, and wear bright colors. E-bikes look like regular bikes but move faster, so help drivers see you and judge your speed.\n- A QUICK BIKE CHECK — before you ride, squeeze both brakes (firm?) and check the tires (full?). A heavy e-bike punishes a soft tire or weak brake.",
        "Two things make an e-bike ride differently, and both change how you handle it:\n- WEIGHT — e-bikes often weigh 45–70+ pounds. That's stable at speed but harder to start, stop, and balance at walking pace, so plant a foot firmly when you stop.\n- INSTANT TORQUE — the motor adds power the moment you pedal, so you accelerate quickly. Start in a LOW assist mode while you learn, so the bike doesn't surge out from under you.\n- BRAKING is the key skill: brake EARLIER and more smoothly than on a regular bike, use both brakes (most power up front, but ease it so you don't go over the bars), and remember stopping distance grows with both speed and weight.",
        "Ride predictably and stay focused — this is how you avoid crashes:\n- NO EARBUDS, NO PHONE — don't ride distracted. You need your ears to hear cars and your eyes on the road; in California it's illegal to wear earbuds in both ears while riding. Set your route before you roll.\n- BE PREDICTABLE — ride with traffic, hold a straight line, signal turns with your hand, and make eye contact with drivers at intersections (watch for opening car doors).\n- CORNERING — slow BEFORE the corner, look through the turn; the extra weight wants to run wide, so enter slower than you think.",
      ],
      technical: {
        title: "Group Rides, Crowded Paths, and Riding as a Pack",
        body: [
          "Riding with friends is one of the best parts of an e-bike — and it needs its own safety habits:\n- RIDE SINGLE FILE in traffic and on narrow paths, leave space between bikes (e-bikes stop differently depending on weight and brakes), and don't tailgate.\n- CALL OUT HAZARDS — 'car back,' 'stopping,' 'on your left' — so the whole group reacts together. Agree on the route and regroup spots before you start.\n- MATCH THE SLOWEST RIDER and never pressure anyone to ride faster than they're comfortable. Show-off riding — racing, wheelies in traffic, doubling a friend on a bike built for one — is how group rides go wrong.",
          "Santa Cruz's best spots are also its most crowded, so match your speed to the people around you:\n- WEST CLIFF DRIVE and the COASTAL RAIL TRAIL are full of walkers, dogs, and strollers. Slow down, ring a bell or call 'on your left,' and pass slowly and predictably.\n- THE BEACH BOARDWALK area is a walking zone — ride at a walking pace or just walk the bike. This is no place for instant torque.\n- THE RULE EVERYWHERE: the more people, the slower you go. Your speed should match the crowd, not what the bike can do. Around school at drop-off and pickup, this matters most — lots of people, cars, and bikes in a small space.",
        ],
        codeExample: {
          label: "The teen e-bike safety checklist",
          code: `  EVERY RIDE (before you roll):
    [ ] helmet on, level + buckled
    [ ] front + rear lights ON (even in daylight)
    [ ] brakes firm, tires full
    [ ] NO earbuds, phone away, route set

  WHILE RIDING:
    brake EARLY (heavy + fast = longer stops)  |  start in LOW assist
    ride predictable: straight line, hand signals, eye contact
    slow in crowds (West Cliff, Boardwalk, school drop-off)

  GROUP RIDES:
    single file | space out | call hazards | match the slowest rider`,
        },
      },
      incident: {
        title: "Faster Bikes, More New Riders, and the Safety Push",
        when: "2020s",
        where: "California schools and coastal paths",
        impact: "As e-bikes put many new and younger riders on the road at higher speeds, schools and cities responded with helmet, visibility, and no-distraction safety campaigns",
        body: [
          "When e-bikes made it easy for many more teens to ride — and to ride faster — communities saw more close calls: a quick pass next to a walker, a distracted rider with earbuds in, a crash at speed without a helmet. The bikes weren't the problem so much as speed plus inexperience plus distraction.",
          "The response focused on habits, not bans, and it's exactly what this stage teaches:\n- Schools and cities pushed helmet-every-ride, lights-and-bright-clothing, and no-earbuds messages, plus 'slow down and announce your pass' on shared paths.\n- Group-ride etiquette — single file, space out, match the slowest rider — cut down crashes among friends.\n- The takeaway for every teen rider: the bike's speed is not permission to ride fast in the wrong place. Control, focus, and a helmet are the real skills that keep you riding.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Gear Up", sub: "helmet + lights, every ride", type: "system" },
          { label: "Brake & Handle the Weight", sub: "earlier stops, start in low assist", type: "attacker" },
          { label: "Stay Focused", sub: "no earbuds, ride predictable", type: "victim" },
          { label: "Ride Safe in a Group", sub: "single file, space, match the slowest", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Disc brakes and wider tires become standard on quality e-bikes" },
        { year: 2020, event: "E-bike adoption surges, putting many new teen riders on the road" },
        { year: 2022, event: "Schools and coastal cities launch e-bike helmet, visibility, and safety campaigns", highlight: true },
        { year: 2024, event: "Helmet-every-ride, no earbuds, and slow-in-crowds become core teen e-bike habits" },
      ],
      keyTakeaways: [
        "Wear a helmet every ride (required under 18 and for all Class 3 riders), and run front and rear lights",
        "Brake earlier and smoothly — an e-bike's weight and speed make stopping distances longer; start in low assist",
        "Don't ride distracted: no earbuds in both ears, phone away, ride predictable with hand signals and eye contact",
        "On group rides, go single file, leave space, call out hazards, and match the slowest rider",
      ],
      references: [
        { title: "Bicycle safety", url: "https://en.wikipedia.org/wiki/Bicycle_safety" },
        { title: "California DMV — Electric Bicycles (helmet & safety rules)", url: "https://www.dmv.ca.gov/portal/vehicle-registration/new-registration/registration-of-bicycles-mopeds/electric-bicycles/" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-06-q1", type: "Helmet", challenge: "Every ride.", text: "What's the rule on helmets for a teen e-bike rider?", options: ["Wear one every ride — it's the law under 18 and just smart at any age", "Only on the highway", "Only for racing", "Never, on a Class 1"], correctIndex: 0, explanation: "California requires a helmet under 18 on any class; wearing one every ride is the safe habit." },
        { id: "ebikes-1-06-q2", type: "Braking", challenge: "Stopping in time.", text: "Because an e-bike is heavier and faster, how should you brake?", options: ["Earlier and more gradually, using both brakes", "Only at the last second", "Only the front brake, as hard as possible", "Never use the front brake"], correctIndex: 0, explanation: "More weight and speed mean longer stops — brake earlier and smoothly with both brakes." },
        { id: "ebikes-1-06-q3", type: "Focus", challenge: "No distractions.", text: "Why shouldn't you ride with earbuds in both ears?", options: ["You need to hear traffic, and it's illegal in California while riding", "Earbuds drain the battery", "It makes the motor slower", "It voids the warranty"], correctIndex: 0, explanation: "You need your ears for traffic, and California law bans wearing earbuds in both ears while riding." },
        { id: "ebikes-1-06-q4", type: "Group Rides", challenge: "Riding with friends.", text: "What's a key safety habit on a group ride?", options: ["Ride single file with space, call out hazards, and match the slowest rider", "Race each other through intersections", "Ride three across to chat", "Double a friend on a one-person bike"], correctIndex: 0, explanation: "Single file, spacing, calling hazards, and matching the slowest rider keep the group safe." },
        { id: "ebikes-1-06-q5", type: "Crowds", challenge: "Busy spots.", text: "How should you ride a crowded stretch like West Cliff Drive or near school?", options: ["Slow down to match the crowd, announce passes, and pass gently", "Use full assist to get through fast", "Weave through people at speed", "Ride on the far edge as fast as possible"], correctIndex: 0, explanation: "In crowds, match your speed to people on foot and pass slowly and predictably." },
      ],
    },
  },

  // ─── ebikes-1-07: Where to Ride in Santa Cruz ────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The coastal riding map", location: "Santa Cruz County, California", era: "Modern", emoji: "🗺️" },
    id: "ebikes-1-07",
    order: 7,
    title: "Where to Ride in Santa Cruz",
    subtitle: "School routes, West Cliff, the Rail Trail, Wilder Ranch, and UCSC",
    category: "sports",
    xp: 94,
    badge: { id: "ebikes-badge-07", name: "Local Navigator", emoji: "🗺️" },
    challengeType: "quiz",
    info: {
      tagline: "Santa Cruz is a riding paradise — ocean paths, a growing rail trail, redwood parks, and a hilltop campus. Knowing where your Class 1 bike is welcome (and where Class 3 isn't) lets you plan a safe, legal route to school or a weekend ride with friends.",
      year: 2024,
      overview: [
        "The everyday spots — great on a Class 1 pedal-assist bike:\n- WEST CLIFF DRIVE — a paved cliff-top path along the ocean toward Natural Bridges; flat, scenic, and very popular with walkers, so keep your speed low.\n- THE COASTAL RAIL TRAIL (part of the Monterey Bay Sanctuary Scenic Trail) — a developing car-free, multi-use path along the old rail line that connects parts of town; a flat, safer spine for getting around and to school.\n- These paved, in-town routes are where most teens ride, and Class 1 (and Class 2) are generally welcome.",
        "The bigger rides — parks and the campus climb:\n- WILDER RANCH STATE PARK — a coastal state park with bluff and backcountry trails just northwest of town; a popular weekend spot with its own rules about where bikes and which classes may go.\n- UCSC — the University of California, Santa Cruz sits on a forested hill above town; the long climb to campus is the classic place where pedal-assist shines. Campus paths have their own rules.\n- THE FOREST OF NISENE MARKS STATE PARK — redwoods and fire roads to the east near Aptos, with its own trail and access rules.",
        "The one habit that keeps you legal: match your bike's class to the rules of the place:\n- On PAVED in-town paths (West Cliff, the Rail Trail), Class 1 and 2 are generally welcome; Class 3 is often restricted from multi-use paths — another reason Class 1 is the teen default.\n- In STATE PARKS (Wilder Ranch, Nisene Marks) and on dirt trails, e-bike access is set by the land manager and is usually limited to specific trails and often to Class 1 — never assume, always check.\n- The posted trailhead signs and the park's published rules always govern, and they can differ trail by trail.",
      ],
      technical: {
        title: "Planning a Safe, Legal Route — and the Ride to School",
        body: [
          "Where you can legally ride depends on your class and who manages the land:\n- PAVED CITY PATHS (city/county) — Class 1 and 2 generally OK; Class 3 usually limited to roads and on-road bike lanes. West Cliff and the Rail Trail fall here.\n- STATE PARKS (Wilder Ranch, Nisene Marks) — California State Parks sets access trail by trail; many natural-surface trails allow only Class 1 where e-bikes are allowed at all.\n- CAMPUS (UCSC) — the university sets its own path and road rules.",
          "A simple way to plan any ride — including your daily route to school:\n- KNOW YOUR CLASS — the sticker on your bike says 1, 2, or 3; that decides a lot before you leave home.\n- PICK THE SAFEST ROUTE, not just the fastest — favor bike lanes, the Rail Trail, and quieter streets over busy roads, and plan around the safest crossings.\n- CHECK THE SPECIFIC PLACE — look up the city, county, or park e-bike page and read the trailhead signs; rules change and vary by trail.\n- TELL SOMEONE YOUR PLAN — sharing your route and arrival time with a parent or guardian is a smart, simple safety habit. When unsure, ride the paved routes like West Cliff and the Rail Trail.",
        ],
        codeExample: {
          label: "Where each class tends to be allowed",
          code: `  PLACE                    TYPE        CLASS 1   CLASS 2   CLASS 3
  -----                    ----        -------   -------   -------
  West Cliff Drive path    paved path  yes       yes       check*
  Coastal Rail Trail       paved path  yes       yes       check*
  on-road bike lanes       road        yes       yes       yes
  Wilder Ranch trails      state park  some**    no/some   no
  Nisene Marks fire roads  state park  some**    no/some   no

  * Class 3 is often restricted from multi-use paths -> read signs
  ** state-park e-bike access is set trail-by-trail; verify first
  TEEN TIP: plan the SAFEST route + share it with a parent/guardian`,
        },
      },
      incident: {
        title: "Building the Coastal Rail Trail",
        when: "2010s–2020s",
        where: "Santa Cruz County rail corridor",
        impact: "Turning an old rail line into a car-free, multi-use trail gave teen riders a flat, safer spine to get across town and to school",
        body: [
          "Santa Cruz County has been steadily building the Coastal Rail Trail along a historic rail line — part of the larger Monterey Bay Sanctuary Scenic Trail Network. Segment by segment, it creates a flat, separated, car-free path connecting neighborhoods, beaches, and schools.",
          "For teen e-bike riders, this kind of infrastructure is a big deal:\n- A flat, protected spine away from car traffic is one of the safest ways to ride to school or meet friends.\n- It connects to favorites like West Cliff Drive and trailheads toward Wilder Ranch, knitting the town together for bikes.\n- It also gets crowded with walkers and riders, which is exactly why the slow-down-and-share habits from the safety stage matter most here.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Know Your Class", sub: "1, 2, or 3 on the sticker", type: "system" },
          { label: "Paved In-Town Paths", sub: "West Cliff, Rail Trail", type: "attacker" },
          { label: "Parks & Campus", sub: "Wilder Ranch, Nisene, UCSC", type: "victim" },
          { label: "Plan the Safest Route", sub: "read signs, share your plan", type: "result" },
        ],
      },
      timeline: [
        { year: 1974, event: "Wilder Ranch becomes a California State Park, preserving coastal trails" },
        { year: 1963, event: "The Forest of Nisene Marks land is donated, later a state park of redwood trails" },
        { year: 2018, event: "Santa Cruz County advances the Coastal Rail Trail / Monterey Bay Sanctuary Scenic Trail", highlight: true },
        { year: 2024, event: "E-bike access is set class-by-class and trail-by-trail across local lands" },
      ],
      keyTakeaways: [
        "West Cliff Drive and the Coastal Rail Trail are paved in-town paths great for Class 1 riders",
        "State parks like Wilder Ranch and Nisene Marks set e-bike access trail by trail — often Class 1 only",
        "The long climb to UCSC is the classic place where pedal-assist makes riding easy",
        "Plan the safest route (not just fastest), check the place's rules and signs, and share your plan",
      ],
      references: [
        { title: "Wilder Ranch State Park", url: "https://www.parks.ca.gov/?page_id=549" },
        { title: "Monterey Bay Sanctuary Scenic Trail Network (Coastal Rail Trail)", url: "https://sccrtc.org/projects/multimodal/monterey-bay-sanctuary-scenic-trail/" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-07-q1", type: "Paved Path", challenge: "The cliff-top classic.", text: "What kind of route is West Cliff Drive?", options: ["A paved, scenic cliff-top path along the ocean, popular with walkers", "A dirt downhill mountain trail", "A freeway", "A private road"], correctIndex: 0, explanation: "West Cliff Drive is a flat paved oceanfront path — great riding, but ride it slowly given the crowds." },
        { id: "ebikes-1-07-q2", type: "Rail Trail", challenge: "The car-free spine.", text: "The Coastal Rail Trail is part of which larger project?", options: ["The Monterey Bay Sanctuary Scenic Trail Network", "Interstate 5", "The Pacific Crest Trail", "The UCSC shuttle"], correctIndex: 0, explanation: "The Coastal Rail Trail is part of the Monterey Bay Sanctuary Scenic Trail along the old rail corridor." },
        { id: "ebikes-1-07-q3", type: "State Parks", challenge: "Trail access.", text: "How is e-bike access decided in state parks like Wilder Ranch and Nisene Marks?", options: ["By the land manager, trail by trail — often Class 1 only where allowed", "E-bikes are allowed on every trail automatically", "Only Class 3 bikes are allowed", "There are no rules in state parks"], correctIndex: 0, explanation: "California State Parks sets e-bike access per trail; natural-surface trails often allow only Class 1." },
        { id: "ebikes-1-07-q4", type: "The Climb", challenge: "Where assist shines.", text: "Why is the route up to UCSC a classic e-bike ride?", options: ["The long, steep climb is exactly where pedal-assist makes riding easy", "It is completely flat", "It is closed to all bikes", "It has no hills"], correctIndex: 0, explanation: "UCSC sits on a hill above town, and pedal-assist turns a punishing climb into an easy one." },
        { id: "ebikes-1-07-q5", type: "Planning", challenge: "Smart route.", text: "What's a smart way to plan your ride to school?", options: ["Pick the safest route (bike lanes, the Rail Trail) and share your plan with a parent or guardian", "Always take the busiest road to save time", "Skip lights to be less noticeable", "Ride wherever, rules don't matter"], correctIndex: 0, explanation: "Favor safer, lower-traffic routes and let someone know your plan and arrival time." },
      ],
    },
  },

  // ─── ebikes-1-08: eMTB & Trail Access ────────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The electric mountain bike", location: "Soquel Demonstration State Forest", era: "Modern", emoji: "🌲" },
    id: "ebikes-1-08",
    order: 8,
    title: "eMTB & Trail Access",
    subtitle: "Class 1 trail rules, riding with friends, and trail etiquette",
    category: "sports",
    xp: 96,
    badge: { id: "ebikes-badge-08", name: "Trail Steward", emoji: "🌲" },
    challengeType: "quiz",
    info: {
      tagline: "Electric mountain bikes open the steep, beautiful trails of the Santa Cruz Mountains to more riders — but trail access is a privilege. It's mostly Class 1 pedal-assist only, set by land managers, and kept open by riders who respect the dirt, ride in control, and look out for each other.",
      year: 2024,
      overview: [
        "An electric mountain bike (eMTB) is a full mountain bike with a mid-drive pedal-assist motor, built to climb and descend dirt trails. The appeal for teens is obvious: you can climb more, ride farther on a group ride, and reach terrain that's exhausting on a regular bike — a great fit for the steep Santa Cruz Mountains.",
        "Trail access is mostly about CLASS 1 — and that's the kind you want for the dirt:\n- Where eMTBs are allowed on natural-surface trails, it's almost always CLASS 1 only — pedal-assist, 20 mph cutoff, no throttle. The quieter, slower, bike-like behavior is why land managers accept it.\n- Class 2 (throttle) and Class 3 (28 mph) eMTBs are generally NOT allowed on singletrack trails.\n- 'Allowed' is never universal — it depends entirely on who manages the land, so always check before you ride.",
        "Land managers, not riders, decide access, and they differ:\n- STATE PARKS (Wilder Ranch, Nisene Marks) and other agencies each set their own e-bike trail rules, which vary trail by trail and change over time.\n- SOQUEL DEMONSTRATION STATE FOREST, in the mountains above Soquel, is a well-known local spot that allows Class 1 eMTBs on its trails — a popular destination for electric trail riders.\n- Before you ride dirt, look up the land's e-bike policy and read the trailhead signs. Riding a closed trail or the wrong class risks a ticket and, worse, future access for everyone.",
      ],
      technical: {
        title: "Why Class 1, Riding Safely With Friends, and the Etiquette That Keeps Trails Open",
        body: [
          "Land managers favor Class 1 on dirt trails for concrete reasons:\n- SPEED — the 20 mph pedal-assist cap keeps eMTB speeds close to regular mountain bikes, reducing conflict and trail wear.\n- FEEL AND NOISE — pedal-assist (no throttle) means the bike behaves like a bicycle, which is the basis for allowing it on bike trails.\n- That's why a Class 1 eMTB is welcome at Soquel Demonstration State Forest while a throttle or 28 mph bike isn't.",
          "Trail riding with friends is awesome — and safety and etiquette keep it that way:\n- WEAR A HELMET (a full mountain-bike helmet is even better on trails), bring water, and tell someone where you're going and when you'll be back — trails have no traffic but also less help if something goes wrong.\n- RIDE IN CONTROL and within your skill: just because the motor helps you climb doesn't mean you should bomb blind corners. Keep enough space between friends so no one is in another's blind spot.\n- YIELD — bikes yield to hikers and horses; when two riders meet, the one DESCENDING usually yields to the one CLIMBING. Slow down and pass with care.\n- DON'T RIDE MUD (it carves ruts and wrecks trails), stay on OPEN, LEGAL trails, never cut new lines, and pack out your trash.",
        ],
        codeExample: {
          label: "eMTB trail-ride checklist (teen edition)",
          code: `  BEFORE you ride dirt:
    [ ] Is my bike CLASS 1? (pedal-assist, 20 mph, no throttle)
    [ ] Does THIS land manager allow eMTBs on THIS trail?
    [ ] Helmet, water, and someone knows my plan?
    [ ] Trails dry? (no riding mud) | read the trailhead signs

  ON the trail (with friends):
    ride in control        |  space out, no blind spots
    yield to hikers/horses |  climber has right of way
    no skidding/new lines  |  pack out trash, stay legal

  LOCAL YES FOR CLASS 1: Soquel Demonstration State Forest`,
        },
      },
      incident: {
        title: "The Fight to Keep Trails Open to eMTBs",
        when: "2015–present",
        where: "Public lands across California and the West",
        impact: "As eMTBs grew popular, land managers debated allowing them — and the Class 1 standard plus respectful rider behavior became the path to keeping trails open",
        body: [
          "When eMTBs first appeared, many land managers weren't sure an 'electric' bike belonged on bike trails, and some banned them. The debate was about speed, trail wear, and whether a motor made a bike a 'motorized vehicle' that didn't belong on non-motorized trails.",
          "A workable answer formed around Class 1 and rider responsibility:\n- Agencies increasingly allow Class 1 eMTBs where regular mountain bikes are allowed, trail by trail, because the 20 mph pedal-assist behaves like a bicycle.\n- Continued access depends on riders proving the worry wrong: yielding, not skidding, never riding mud, and staying on legal trails.\n- Soquel Demonstration State Forest shows the model working — but every closed-trail or reckless ride gives ammunition to people who'd ban eMTBs. For a teen rider, good etiquette is access insurance for your whole crew.",
        ],
      },
      diagram: {
        nodes: [
          { label: "eMTB = Trail Bike", sub: "mid-drive, climbs and descends dirt", type: "system" },
          { label: "Class 1 Only", sub: "pedal-assist, 20 mph, no throttle", type: "attacker" },
          { label: "Land Manager Decides", sub: "trail-by-trail rules", type: "victim" },
          { label: "Ride Safe + Etiquette", sub: "in control, yield, no mud", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "eMTBs surge; land managers begin setting e-bike trail policies" },
        { year: 2019, event: "US agencies move toward allowing Class 1 e-bikes on many bike trails" },
        { year: 2021, event: "Class 1 eMTB access expands at venues like Soquel Demonstration State Forest", highlight: true },
        { year: 2024, event: "Trail access stays Class 1-focused and depends on rider behavior" },
      ],
      keyTakeaways: [
        "An eMTB is a mid-drive pedal-assist mountain bike built to climb and descend dirt trails",
        "Where eMTBs are allowed on natural-surface trails, it's almost always Class 1 only",
        "Land managers decide access trail by trail; Soquel Demonstration State Forest allows Class 1 eMTBs",
        "Ride in control with a helmet, yield, never ride mud, and stay on legal trails — etiquette keeps access open",
      ],
      references: [
        { title: "Soquel Demonstration State Forest (CAL FIRE)", url: "https://www.fire.ca.gov/what-we-do/natural-resource-management/demonstration-state-forests/soquel-demonstration-state-forest" },
        { title: "Electric mountain bike (eMTB)", url: "https://en.wikipedia.org/wiki/Electric_mountain_bike" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-08-q1", type: "Access", challenge: "Which class on dirt.", text: "Where eMTBs are allowed on natural-surface trails, which class is it almost always limited to?", options: ["Class 1 (pedal-assist, 20 mph, no throttle)", "Class 2 (throttle)", "Class 3 (28 mph)", "Any class is fine on all trails"], correctIndex: 0, explanation: "Class 1's quieter, 20 mph pedal-assist feel is why land managers accept it on bike trails." },
        { id: "ebikes-1-08-q2", type: "Local Spot", challenge: "Where eMTBs are welcome.", text: "Which local forest is known for allowing Class 1 eMTBs on its trails?", options: ["Soquel Demonstration State Forest", "A private golf course", "The Beach Boardwalk", "West Cliff Drive"], correctIndex: 0, explanation: "Soquel Demonstration State Forest, above Soquel, is a popular Class 1 eMTB destination." },
        { id: "ebikes-1-08-q3", type: "Safety", challenge: "Riding with friends.", text: "What's a smart safety habit for a trail ride with friends?", options: ["Wear a helmet, bring water, ride in control with space, and tell someone your plan", "Race down blind corners", "Ride right on each other's wheel", "Leave your helmet at home on dirt"], correctIndex: 0, explanation: "Helmet, water, control, spacing, and a shared plan keep a trail group safe." },
        { id: "ebikes-1-08-q4", type: "Etiquette", challenge: "Protect the dirt.", text: "Why should you avoid riding muddy trails?", options: ["It carves ruts and damages trails, threatening access for everyone", "Mud makes the motor faster", "It charges the battery", "Mud is required for traction"], correctIndex: 0, explanation: "Riding wet trails ruts and damages them — one of the fastest ways to lose access." },
        { id: "ebikes-1-08-q5", type: "Yielding", challenge: "Right of way.", text: "On a shared trail, who usually has the right of way between two bike riders?", options: ["The climbing rider; the descending rider yields", "Whoever is faster", "The one with the bigger battery", "Descenders never yield"], correctIndex: 0, explanation: "Climbers usually have the right of way, and all bikes yield to hikers and horses." },
      ],
    },
  },

  // ─── ebikes-1-09: Maintenance & Care ─────────────────────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The well-kept e-bike", location: "Your garage and the local shop", era: "Modern", emoji: "🔧" },
    id: "ebikes-1-09",
    order: 9,
    title: "Maintenance & Care",
    subtitle: "Keeping the brakes safe, washing it right, and making it last",
    category: "sports",
    xp: 94,
    badge: { id: "ebikes-badge-09", name: "Bike Keeper", emoji: "🔧" },
    challengeType: "quiz",
    info: {
      tagline: "Taking care of your e-bike is a safety thing AND a money thing: good brakes and tires keep you safe, and basic care makes an expensive bike last for years. A few simple habits — and one big rule about washing — do most of the work.",
      year: 2024,
      overview: [
        "An e-bike wears its parts faster than a regular bike, because of the motor's torque and the bike's weight — and some of those parts are your safety:\n- BRAKES — more speed and weight make the pads and rotors work harder and wear faster. Check pad thickness often and tell a parent or shop if the brakes feel weak or spongy. On a heavy bike, brakes are not optional.\n- DRIVETRAIN — the extra torque stresses the chain, cassette, and chainring. Clean and lube the chain regularly, and replace it before it 'stretches' enough to wreck the pricier cassette (cheaper to stay ahead of it).\n- TIRES — heavier, faster bikes wear tires faster; check them for cuts and keep them at the right pressure.",
        "Tire pressure is the easiest habit with the biggest payoff:\n- Run the pressure printed on the tire's sidewall — too low risks pinch flats and sluggish, unsafe handling on a heavy bike; too high gives a harsh, low-grip ride.\n- Check it weekly. E-bike tires lose air like any tire, and the stakes are higher at e-bike weight and speed.\n- Correct pressure protects the tire, improves your range, and makes braking and cornering safer.",
        "The electrical side has easy care, and it saves you money:\n- FIRMWARE AND DIAGNOSTICS — modern systems (Bosch, Shimano) get firmware updates and can be plugged in at a shop to read error codes; keep yours updated through the dealer.\n- MOTOR SERVICE INTERVALS — quality mid-drives have recommended service points (by mileage or time); following them catches small problems before they get expensive.\n- BATTERY CARE — as covered earlier, store it around half charge in a cool, dry place and use only the right charger.",
      ],
      technical: {
        title: "Washing Without Wrecking the Electronics, and Storage",
        body: [
          "Washing an e-bike has one golden rule: do NOT blast water into the motor or battery:\n- NEVER use a high-pressure washer — the jet can drive water past the seals into the motor, battery contacts, or bearings and cause expensive damage.\n- Instead, use a bucket of soapy water, a sponge, and a gentle hose trickle; brush the drivetrain, then rinse lightly and dry.\n- Keep water away from the battery contacts and charge port; if your bike is designed for it, remove the battery and wipe the bay separately. Re-lube the chain after washing, since soap strips the lubricant.",
          "Storage protects the bike, the battery, and your wallet:\n- Store the bike in a cool, dry place out of constant sun and rain — moisture and heat are hard on electronics and tires.\n- For longer storage, leave the battery around 40–60% charge, keep it at room temperature (not a freezing or boiling garage), and top it up every month or two so it doesn't sit empty.\n- Before riding after storage, run your safety check: tire pressure, brakes firm, lights working, and battery and contacts clean and dry — the same pre-ride habit that keeps a heavy, fast bike safe.",
        ],
        codeExample: {
          label: "Washing an e-bike safely",
          code: `  DO:                          DON'T:
   - bucket + sponge + soap     - pressure washer / jet nozzle
   - gentle hose trickle        - spray INTO the motor or battery
   - brush the drivetrain       - soak the charge port / contacts
   - dry, then re-lube chain    - put the bike away wet

  RHYTHM OF CARE:
    weekly : tire pressure + quick BRAKE and chain check
    monthly: clean + lube drivetrain, inspect pads and tires
    per maker's interval: motor service + firmware at the shop`,
        },
      },
      incident: {
        title: "The Pressure-Washer Mistake",
        when: "Common new-owner error",
        where: "Home driveways everywhere",
        impact: "Riders used to hosing down a car or BMX have ruined e-bike motors and batteries by pressure-washing them — a costly, totally avoidable lesson",
        body: [
          "A common and expensive mistake is treating an e-bike like a car or a regular bike and blasting it with a pressure washer. The high-pressure jet forces water past the seals that keep the motor and battery dry, causing corrosion, electrical faults, and bearing damage a gentle wash never would.",
          "The fix is just to wash the way the maker says:\n- Use low-pressure water, soap, and a sponge or brush, and keep the spray away from the motor, battery, and connectors.\n- Dry the bike and re-lube the chain afterward.\n- This one habit — never pressure-wash an e-bike — prevents one of the most common, costly failures. Paired with regular brake, chain, and tire checks, it keeps your bike safe and running for years, which protects the money you (and your family) put into it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Torque + Weight Wear", sub: "faster brake, chain, tire wear", type: "system" },
          { label: "Safety Checks", sub: "brakes, tire pressure, lights", type: "attacker" },
          { label: "Wash Gently", sub: "no jet into motor/battery", type: "victim" },
          { label: "Update & Store Right", sub: "firmware, service, cool storage", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Mid-drive systems introduce dealer firmware updates and diagnostics" },
        { year: 2018, event: "Makers publish e-bike-specific washing and service guidance" },
        { year: 2020, event: "Pressure-washer motor damage becomes a widely warned-about mistake", highlight: true },
        { year: 2024, event: "Regular brake/drivetrain care + gentle washing are standard e-bike upkeep" },
      ],
      keyTakeaways: [
        "Motor torque and bike weight wear out brakes, chains, and tires faster — check and service them often",
        "Keep tires at the recommended pressure and check brakes weekly; both are safety items on a heavy bike",
        "Never pressure-wash an e-bike — use a bucket, sponge, and gentle water away from the motor and battery",
        "Keep firmware updated, follow service intervals, and store the bike cool and dry with the battery part-charged",
      ],
      references: [
        { title: "Electric bicycle — maintenance", url: "https://en.wikipedia.org/wiki/Electric_bicycle" },
        { title: "Bosch eBike Systems — care and service", url: "https://www.bosch-ebike.com/en/service" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-09-q1", type: "Safety Wear", challenge: "Why parts wear.", text: "Why do an e-bike's brakes and chain wear out faster than a regular bike's?", options: ["The motor's torque and the bike's weight stress them more", "E-bike parts are made of paper", "Electricity dissolves metal", "They don't — they last longer"], correctIndex: 0, explanation: "Extra torque and mass make the brakes and drivetrain work harder and wear sooner." },
        { id: "ebikes-1-09-q2", type: "Washing", challenge: "The golden rule.", text: "How should you wash an e-bike?", options: ["Gently, with a bucket and sponge, keeping water out of the motor and battery", "With a high-pressure washer aimed at the motor", "By submerging it in a lake", "Never clean it at all"], correctIndex: 0, explanation: "Use low-pressure water and keep the spray away from the motor, battery, and connectors." },
        { id: "ebikes-1-09-q3", type: "Pressure Washer", challenge: "What not to do.", text: "Why should you never pressure-wash an e-bike?", options: ["The jet can force water past seals into the motor and battery, causing damage", "It cleans too well", "It voids your driver's license", "It makes the bike too shiny"], correctIndex: 0, explanation: "High-pressure water drives moisture past seals into the electronics and bearings." },
        { id: "ebikes-1-09-q4", type: "Tires & Brakes", challenge: "Weekly habit.", text: "What's a simple weekly habit that keeps you safe and improves range?", options: ["Check tire pressure and that the brakes feel firm", "Repaint the frame", "Replace the battery", "Loosen the brakes"], correctIndex: 0, explanation: "Correct tire pressure and firm brakes keep a heavy bike safe and improve range." },
        { id: "ebikes-1-09-q5", type: "Electronics", challenge: "Keeping it healthy.", text: "How do you keep the motor system healthy and avoid big repair bills?", options: ["Keep firmware updated and follow the maker's service intervals at the shop", "Never plug it in again", "Disconnect the controller", "Overcharge the battery daily"], correctIndex: 0, explanation: "Firmware updates and scheduled service catch small issues before they get expensive." },
      ],
    },
  },

  // ─── ebikes-1-10: Rules, Etiquette & the Local Scene ─────────────────────────
  {
    epochId: "ebikes-1",
    wonder: { name: "The shared road and the local scene", location: "Santa Cruz, California", era: "Modern", emoji: "🤝" },
    id: "ebikes-1-10",
    order: 10,
    title: "Rules of the Road, Etiquette & the Local Scene",
    subtitle: "Sharing the path, locking up at school, and being a good rider",
    category: "sports",
    xp: 100,
    badge: { id: "ebikes-badge-10", name: "Santa Cruz E-Rider", emoji: "🤝" },
    challengeType: "quiz",
    info: {
      tagline: "An e-bike is real freedom — and the way you earn and keep it is by riding courteously, protecting your bike from theft, and being a rider the community is glad to see. This capstone ties the rules, the etiquette, and the local scene together.",
      year: 2024,
      overview: [
        "E-bikes follow the same rules of the road as bicycles, and good etiquette makes those rules work:\n- RIDE WITH TRAFFIC, obey signals and stop signs, use lights at night, and signal your turns — you're a vehicle on the road.\n- ON MULTI-USE PATHS, keep right, pass on the left, announce your pass ('on your left') or use a bell, and slow down for people on foot.\n- SAFE PASSING means slowing, giving space, and only passing when it's clear. Your e-bike's speed is never a reason to crowd a walker, a little kid, or a slower rider.",
        "Bike theft is a REAL problem in Santa Cruz, and e-bikes are top targets because they're valuable — so lock up like you mean it, especially at school:\n- USE A GOOD LOCK — a hardened U-lock (and ideally a second lock or cable) beats a flimsy cable lock that thieves cut in seconds. Lock the FRAME to something solid and immovable, not just a wheel.\n- LOCK SMART — at school, use the bike racks in busy, visible spots; take the battery and any quick-release parts with you when you can; and never leave the bike unlocked 'just for a minute.'\n- REGISTER AND RECORD — write down the serial number, photograph the bike, and register it (for example, with a free registry like Bike Index) so a recovered bike can be returned to you.",
        "Beyond rules and locks, you're joining a community and a real shift in how people get around:\n- THE LOCAL SCENE — Santa Cruz has bike shops, group rides, advocacy groups, and trail crews; getting involved makes you a better, more connected rider and is a great way to make friends.\n- E-MOBILITY'S FUTURE — e-bikes replace car trips, let more teens get themselves around, and ease parking and traffic; they're a growing part of how coastal towns move.\n- BEING A GOOD AMBASSADOR — courteous, legal, safe riding is what keeps paths and trails open to e-bikes and keeps drivers, parents, and neighbors on your side.",
      ],
      technical: {
        title: "Locking Up at School, and Riding as an Ambassador",
        body: [
          "Anti-theft is a system, not a single lock — and it matters most where you park every day:\n- THE LOCK — a quality U-lock through the FRAME and a fixed object is the core; add a cable or second lock for the wheels. The goal is to make your bike a harder, slower target than the next one over.\n- THE LOCATION — at school, lock in the busy, well-lit racks near the entrance, not a quiet back corner; thieves prefer dark, empty spots.\n- THE EXTRAS — take the battery and seat inside when you can, record the serial number and photos, and register the bike so police and buyers can identify it. On a high-value bike, a hidden tracker isn't a bad idea.",
          "Every ride you take is part of how the public sees teen e-bike riders:\n- FOLLOW THE LAW you learned here — the right class in the right place, helmets where required (always under 18), lights, and signals.\n- RIDE COURTEOUSLY — slow in crowds, yield on trails, announce passes, and don't ride where it's banned (no bombing through pedestrian zones). No doubling friends on a one-person bike or showing off in traffic.\n- GIVE BACK — support local shops, join a group ride or a trail-cleanup day, and welcome new riders. The future of e-mobility in a town like Santa Cruz depends on riders who make e-bikes a good neighbor — and that, more than anything, is how you keep the freedom your bike gives you.",
        ],
        codeExample: {
          label: "Lock-up + good-rider checklist",
          code: `  LOCK IT RIGHT (especially at school):
    [ ] hardened U-lock: FRAME -> solid, fixed rack
    [ ] second lock / cable for the wheels
    [ ] busy, lit, visible spot (not a back corner)
    [ ] take the battery + quick-release parts with you
    [ ] record serial # + photos; register (e.g. Bike Index)

  RIDE AS AN AMBASSADOR:
    right class, right place   |   helmet (always under 18)
    lights + hand signals      |   slow + gentle in crowds
    yield on trails, no mud    |   support shops + group rides`,
        },
      },
      incident: {
        title: "An E-Bike Theft Wave Meets Online Registries",
        when: "2020s",
        where: "Santa Cruz and bike-heavy California towns",
        impact: "A surge in e-bike theft pushed riders toward better locks and free online registries, which have helped reunite stolen bikes with their owners",
        body: [
          "As e-bikes became common and valuable, theft rose sharply in bike-heavy California towns, including Santa Cruz — a long-running problem made worse by the high resale value of e-bikes. Cheap cable locks and quiet, dark parking made too many bikes easy targets, and school bike racks were a frequent hit.",
          "Riders and the community adapted, and the lessons are simple:\n- Better locking habits (a hardened U-lock through the frame, busy locations, taking the battery) made bikes much harder to steal.\n- Free online registries like Bike Index let owners record serial numbers and report thefts, and they've helped recover and return stolen bikes when buyers or police check a serial number.\n- The capstone takeaway: protecting your bike, riding courteously and legally, and plugging into the local scene aren't separate chores — together they make you a responsible part of the e-mobility future Santa Cruz is building, and they're how you keep the trust and freedom that come with your own e-bike.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Same Rules as Bikes", sub: "traffic laws + path etiquette", type: "system" },
          { label: "Pass Safely", sub: "slow, announce, give space", type: "attacker" },
          { label: "Beat Theft", sub: "U-lock the frame, register, take the battery", type: "victim" },
          { label: "Good Ambassador", sub: "courtesy keeps access + trust", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Free online bike registries (e.g., Bike Index) launch to fight theft" },
        { year: 2015, event: "AB 1096's clear rules make courteous, legal e-bike riding easier to follow" },
        { year: 2021, event: "E-bike theft surges in California towns, driving better locking habits", highlight: true },
        { year: 2024, event: "E-bikes become a mainstream way teens get around coastal California" },
      ],
      keyTakeaways: [
        "E-bikes follow the same rules of the road as bikes; on paths, keep right, announce passes, and slow for people",
        "Bike theft is a real Santa Cruz problem — U-lock the FRAME, lock up smart at school, and take the battery",
        "Register and photograph your bike (e.g., Bike Index) so a stolen bike can be identified and returned",
        "Courteous, legal, safe riding makes you an ambassador — it keeps paths open and keeps the trust your bike earns you",
      ],
      references: [
        { title: "Bike Index — bicycle registry", url: "https://bikeindex.org/" },
        { title: "Bicycle theft", url: "https://en.wikipedia.org/wiki/Bicycle_theft" },
      ],
    },
    quiz: {
      questions: [
        { id: "ebikes-1-10-q1", type: "Etiquette", challenge: "Passing on a path.", text: "What's the right way to pass someone on a multi-use path?", options: ["Slow down, give space, and announce your pass or use a bell", "Speed up and squeeze past closely", "Pass silently at full speed", "Cut in front and brake hard"], correctIndex: 0, explanation: "Safe passing means slowing, giving room, and warning the person ahead with a call or bell." },
        { id: "ebikes-1-10-q2", type: "Theft", challenge: "Locking right.", text: "What's the best way to lock an e-bike at a school bike rack?", options: ["A hardened U-lock securing the FRAME to a solid, fixed rack", "A thin cable looped around one wheel only", "Leaning it against a wall unlocked", "Hiding it behind a bush"], correctIndex: 0, explanation: "A U-lock through the frame to something immovable resists the quick cuts thieves rely on." },
        { id: "ebikes-1-10-q3", type: "Recovery", challenge: "Getting it back.", text: "What helps a stolen e-bike get returned to you?", options: ["Recording the serial number and registering it (e.g., with Bike Index)", "Painting it a different color each week", "Never writing down any details", "Removing the serial number"], correctIndex: 0, explanation: "A recorded serial number and registry entry let police and buyers identify and return a stolen bike." },
        { id: "ebikes-1-10-q4", type: "Rules", challenge: "On the road.", text: "What rules of the road do e-bikes follow?", options: ["The same traffic rules as bicycles — ride with traffic, obey signals, use lights", "The same as pedestrians, on sidewalks", "No rules apply to e-bikes", "Only motorcycle rules"], correctIndex: 0, explanation: "E-bikes are treated as bicycles and follow the same traffic laws and signaling." },
        { id: "ebikes-1-10-q5", type: "Ambassador", challenge: "Keeping trust.", text: "Why does courteous, legal riding matter beyond your own safety?", options: ["It keeps paths open and keeps the trust and freedom that come with your bike", "It makes the battery last forever", "It is required to charge the bike", "It has no wider effect"], correctIndex: 0, explanation: "Good behavior keeps e-bikes welcome and helps you keep the trust your own bike earns you." },
      ],
    },
  },
];
