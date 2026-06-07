import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const siliconFabEpoch: EpochConfig = {
  id: "silicon-fab",
  name: "Silicon: Sand to Superchips",
  subtitle: "How the Newest GPU & Quantum Chips Are Made",
  description:
    "The most complex manufacturing on Earth, told from the beginning: how ordinary quartz sand becomes 99.9999999%-pure silicon, how a wafer is grown and sliced, how light prints circuits finer than a virus, what EUV machines do, how doping and etching sculpt billions of transistors, how FinFET and gate-all-around devices work, how a giant AI GPU is stitched together from chiplets and stacked memory — and how the radically different quantum processors at the frontier are fabricated.",
  emoji: "💠",
  color: "sky",
  unlocked: true,
};

export const siliconFabStages: StageConfig[] = [
  // ─── si-01: Sand to Silicon ──────────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "Spruce Pine — the quartz that makes the world's chips", location: "North Carolina, USA", era: "Modern", emoji: "⛏️" },
    id: "si-01",
    order: 1,
    title: "From Sand to Silicon",
    subtitle: "Purifying the Most Important Element in Tech",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-si-sand", name: "Crystal Grower", emoji: "⛏️" },
    challengeType: "quiz",
    info: {
      tagline: "Every GPU and quantum chip begins as ordinary sand. The journey from a beach to a billion transistors starts with one of the hardest problems in chemistry: making silicon almost perfectly pure.",
      year: 2024,
      overview: [
        "Silicon is the second most abundant element in Earth's crust, locked up in quartz and sand as silica (silicon dioxide). The catch is that chips need it almost unimaginably clean — purer than almost any material humans make. So chipmaking is really a purification story before it is a patterning story.",
        "Getting from sand to chip-grade silicon takes a ladder of refining steps:\n- SMELTING — quartz is heated with carbon in an electric arc furnace, stripping away the oxygen to leave 'metallurgical-grade' silicon that is about 99% pure.\n- THE SIEMENS PROCESS — that silicon is turned into a gas, distilled, and re-deposited as 'electronic-grade' polysilicon at 99.9999999% purity (called '9N', nine nines) or better.\n- CRYSTAL GROWING — the pure polysilicon is melted and pulled into a single, flawless crystal so the atoms line up in one perfect lattice.",
        "That last step is the famous Czochralski process, and it is mesmerizing to picture:\n- A tiny 'seed' crystal is dipped into molten silicon and slowly pulled upward while rotating, coaxing the melt to freeze onto it atom-by-atom in the same orientation.\n- Hours later you have a 'boule' (ingot) — a shiny cylinder of monocrystalline silicon, today about 300 mm across and weighing over 100 kg.\n- Purity and crystal perfection matter for trust as well as performance: contamination or hidden defects are exactly the kind of flaw that can make a chip behave unpredictably, which is why supply-chain integrity starts here at the raw material.",
      ],
      technical: {
        title: "Electronic-Grade Silicon and the Boule",
        body: [
          "The numbers behind 'pure enough' are staggering:\n- Electronic-grade silicon allows roughly one foreign atom per billion silicon atoms — like one specific person among everyone on Earth, several times over.\n- Even the crucible and the argon atmosphere are controlled, because a stray metal atom can create an electrical trap that ruins a transistor.\n- A surprising real-world dependency: the ultra-pure quartz used to make the crucibles that hold the molten silicon comes largely from a single town, Spruce Pine, North Carolina — a quiet supply-chain chokepoint for the whole industry.",
          "Growing the single crystal is a controlled freeze:\n- In the Czochralski method the rotating seed sets the crystal orientation (often noted as '100' or '111'), which affects how the silicon etches and behaves later.\n- An alternative, the float-zone method, passes a molten zone along a rod for even higher purity, used for power devices and some sensitive applications.\n- The finished boule is tested, its ends trimmed, and its diameter ground precise before it ever meets a saw — the foundation every later step is built on.",
        ],
      },
      incident: {
        title: "The Town That Quietly Supplies the World's Chips",
        when: "Ongoing",
        where: "Spruce Pine, North Carolina, USA",
        impact: "A single small region produces the ultra-pure quartz the semiconductor industry depends on — a hidden chokepoint",
        body: [
          "Tucked in the Appalachian Mountains, Spruce Pine sits on a deposit of extraordinarily pure quartz. That quartz is melted into crucibles and components essential to growing silicon crystals, making this small town one of the most strategically important places in technology that almost no one has heard of.",
          "It is a vivid lesson in how fragile the chip supply chain can be:\n- When Hurricane Helene flooded the area in 2024, the world briefly worried about the quartz supply that high-end chipmaking quietly relies on.\n- Concentrating a critical input in one place is a single point of failure — the physical-world version of a security risk every defender understands.\n- It is why nations now treat semiconductor materials and tooling as matters of national security, with stockpiles, export controls, and 'reshoring' efforts to spread the risk.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Quartz Sand (SiO₂)", sub: "abundant but impure", type: "system" },
          { label: "Arc Furnace + Siemens", sub: "refine to 9N polysilicon", type: "attacker" },
          { label: "Czochralski Pull", sub: "grow one perfect crystal", type: "victim" },
          { label: "Silicon Boule", sub: "300 mm monocrystal ingot", type: "result" },
        ],
      },
      timeline: [
        { year: 1916, event: "Jan Czochralski discovers his crystal-pulling method (by accident, with a pen and molten metal)" },
        { year: 1954, event: "The Siemens process for ultra-pure polysilicon is developed" },
        { year: 1960, event: "Czochralski-grown silicon becomes the backbone of the chip industry", highlight: true },
        { year: 2024, event: "300 mm wafers are standard; a single boule yields hundreds of them" },
      ],
      keyTakeaways: [
        "Chips start as quartz sand (silica) that must be purified to ~99.9999999% ('9N') electronic-grade silicon",
        "Smelting → the Siemens process → crystal growth is the ladder from sand to chip-grade material",
        "The Czochralski process pulls a rotating seed from molten silicon to grow one perfect 300 mm crystal (boule)",
        "Critical inputs like ultra-pure quartz concentrate in few places — a supply-chain chokepoint and a security concern",
      ],
      references: [
        { title: "How sand becomes silicon wafers — overview", url: "https://www.intel.com/content/www/us/en/newsroom/news/how-chips-are-made.html" },
        { title: "Czochralski process — Wikipedia", url: "https://en.wikipedia.org/wiki/Czochralski_method" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-01-q1", type: "Core Idea", challenge: "The raw material.", text: "What is the starting material for silicon chips?", options: ["Quartz sand (silica, SiO₂)", "Crude oil", "Iron ore", "Plastic pellets"], correctIndex: 0, explanation: "Chips begin as silica from quartz sand, which is then refined into ultra-pure silicon." },
        { id: "si-01-q2", type: "Purity", challenge: "How clean.", text: "How pure must electronic-grade silicon be?", options: ["About 99.9999999% ('9N') — roughly one impurity per billion atoms", "About 90%", "About 99%", "Purity does not matter"], correctIndex: 0, explanation: "A single stray atom can ruin a transistor, so the silicon must be almost perfectly pure." },
        { id: "si-01-q3", type: "Process", challenge: "Growing a crystal.", text: "What does the Czochralski process do?", options: ["Pulls a rotating seed from molten silicon to grow one large single crystal", "Cuts wafers into chips", "Prints circuits with light", "Adds copper wiring"], correctIndex: 0, explanation: "A seed crystal is dipped and slowly pulled, freezing the melt into a flawless boule." },
        { id: "si-01-q4", type: "Vocabulary", challenge: "The cylinder.", text: "What is the 'boule' (ingot) produced by crystal growth?", options: ["A cylinder of single-crystal silicon, ~300 mm across", "A finished GPU", "A bag of sand", "A sheet of glass"], correctIndex: 0, explanation: "The boule is a monocrystalline silicon cylinder later sliced into wafers." },
        { id: "si-01-q5", type: "Refining", challenge: "Making it pure.", text: "What is the Siemens process used for?", options: ["Producing ultra-pure 'electronic-grade' polysilicon", "Stacking memory chips", "Cooling quantum computers", "Etching transistors"], correctIndex: 0, explanation: "The Siemens process distills silicon through a gas phase to reach electronic-grade purity." },
        { id: "si-01-q6", type: "Supply Chain", challenge: "A hidden chokepoint.", text: "Why is a town like Spruce Pine strategically important?", options: ["It supplies much of the ultra-pure quartz the chip industry depends on", "It manufactures all GPUs", "It writes chip software", "It has no real importance"], correctIndex: 0, explanation: "Concentrating a critical input in one place is a single point of failure — a supply-chain risk." },
      ],
    },
  },

  // ─── si-02: Wafers & the Cleanroom ───────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The cleanroom — cleaner than an operating theatre", location: "Advanced fabs worldwide", era: "Modern", emoji: "🧼" },
    id: "si-02",
    order: 2,
    title: "Wafers & the Cleanroom",
    subtitle: "Slicing the Crystal and Fighting Dust",
    category: "cybersecurity",
    xp: 132,
    badge: { id: "badge-si-wafer", name: "Wafer Wrangler", emoji: "🧼" },
    challengeType: "quiz",
    info: {
      tagline: "The crystal becomes a stack of mirror-smooth discs called wafers, then enters the cleanest place humans have ever built — because at chip scale, a speck of dust is a boulder.",
      year: 2024,
      overview: [
        "The silicon boule is sliced into thin, round wafers — the 'plates' that hundreds of chips are built on at once. Modern wafers are 300 mm across (about the size of a dinner plate) and under a millimeter thick. Building many chips on one wafer in parallel is the central trick that makes them affordable.",
        "Turning a rough-cut slice into a flawless surface takes several finishing steps:\n- SLICING — a diamond wire saw cuts the boule into wafers, with a small notch ground in to mark the crystal orientation.\n- POLISHING — lapping and chemical-mechanical planarization (CMP) make one face atomically flat and mirror-smooth, because lithography later needs perfect focus.\n- EPITAXY — a thin, ultra-clean crystalline layer is sometimes grown on top to give transistors a pristine surface to live in.",
        "Then the wafers move into the cleanroom, and the obsession with cleanliness is hard to overstate:\n- The most advanced cleanrooms are 'ISO Class 1' — thousands of times cleaner than a hospital operating room, with the air constantly filtered and flowing downward.\n- Workers wear full 'bunny suits' and the lighting is yellow, because the light-sensitive coatings used in patterning must not be exposed too early.\n- A single particle smaller than a bacterium, landing in the wrong place, can kill a chip — so dust control is not housekeeping, it is the difference between profit and scrap, and a core part of manufacturing integrity.",
      ],
      technical: {
        title: "Why Flatness and Cleanliness Are Everything",
        body: [
          "Wafer quality is measured to extremes:\n- Flatness is controlled to nanometers across a 300 mm disc, because the lithography step focuses light into features a few atoms wide and cannot tolerate hills and valleys.\n- The polished surface and crystal orientation set how cleanly later layers grow and etch.\n- Bigger wafers mean more chips per run and lower cost per chip, which is why the industry moved 200 mm → 300 mm (a jump to 450 mm was attempted but stalled on cost).",
          "The cleanroom is an engineered war on contamination:\n- ULPA/HEPA filters and laminar (top-down) airflow sweep particles away from the wafers continuously.\n- Class numbers count allowed particles per volume of air; the best rooms allow only a handful of the tiniest particles per cubic meter.\n- Even the people, chemicals, water (ultra-pure deionized water), and gases are filtered and monitored — a reminder that in fabrication, everything that touches the wafer is part of the trust boundary.",
        ],
      },
      incident: {
        title: "When a Tiny Contamination Scrapped Months of Chips",
        when: "2019",
        where: "Major memory fabs, East Asia",
        impact: "A chemical-contamination event spoiled large volumes of wafers, showing how fragile yield is",
        body: [
          "In 2019 a contamination incident at large memory fabs reportedly ruined tens of thousands of wafers, wiping out months of work in an instant. Whether the cause is a faulty chemical batch, a filtration failure, or a stray particle source, the result is the same: wafers that took weeks to process become expensive scrap.",
          "It is a sharp illustration of why fabs are so paranoid:\n- A chip passes through hundreds of steps over weeks, so a problem introduced early can quietly destroy enormous value before it is even detected.\n- This is why fabs monitor every input obsessively and treat any unexplained change as a potential threat to the whole line.\n- The same mindset — distrust the environment, verify every input, contain contamination fast — is exactly how security operations think about protecting a system.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Silicon Boule", sub: "the grown crystal", type: "system" },
          { label: "Diamond-Wire Slicing", sub: "cut into thin discs", type: "attacker" },
          { label: "Polish + CMP", sub: "mirror-flat to nanometers", type: "victim" },
          { label: "Wafer in Cleanroom", sub: "ISO Class 1, bunny suits", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "First silicon wafers used for planar transistors" },
        { year: 1980, event: "Cleanroom standards formalized as the industry scales up" },
        { year: 2001, event: "300 mm wafers become the new high-volume standard", highlight: true },
        { year: 2024, event: "Leading fabs run ISO Class 1 cleanrooms with fully filtered air, water, and gases" },
      ],
      keyTakeaways: [
        "The boule is sliced into thin 300 mm wafers; hundreds of chips are built on each wafer at once",
        "Wafers are polished mirror-flat (lapping, CMP) so lithography can focus light into atom-scale features",
        "Fabs run in cleanrooms (ISO Class 1) — far cleaner than hospitals — with bunny suits and filtered everything",
        "A single sub-micron particle can kill a chip, so contamination control is central to yield and trust",
      ],
      references: [
        { title: "Silicon wafer processing — overview", url: "https://en.wikipedia.org/wiki/Wafer_(electronics)" },
        { title: "Cleanroom classifications (ISO 14644)", url: "https://en.wikipedia.org/wiki/Cleanroom" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-02-q1", type: "Core Idea", challenge: "The disc.", text: "What is a silicon 'wafer'?", options: ["A thin round disc cut from the crystal that many chips are built on at once", "A single finished chip", "A cooling fan", "A type of memory"], correctIndex: 0, explanation: "Hundreds of chips are fabricated in parallel on one wafer, which keeps costs down." },
        { id: "si-02-q2", type: "Size", challenge: "How big.", text: "What is the standard modern wafer diameter?", options: ["300 mm (about a dinner plate)", "30 mm", "3 meters", "1 mm"], correctIndex: 0, explanation: "300 mm is today's high-volume standard; bigger wafers mean more chips per run." },
        { id: "si-02-q3", type: "Finishing", challenge: "Mirror flat.", text: "Why are wafers polished to be extremely flat?", options: ["So lithography can focus light into atom-scale features without blur", "To make them shiny for looks", "To make them lighter", "Flatness does not matter"], correctIndex: 0, explanation: "Patterning needs perfect focus, so flatness is controlled to nanometers." },
        { id: "si-02-q4", type: "Environment", challenge: "The clean place.", text: "What is a semiconductor cleanroom?", options: ["An ultra-filtered space (ISO Class 1) far cleaner than a hospital", "A normal factory floor", "An outdoor yard", "A data center"], correctIndex: 0, explanation: "Cleanrooms use filtered, downward-flowing air to keep particles off wafers." },
        { id: "si-02-q5", type: "Why", challenge: "Dust the boulder.", text: "Why is a tiny dust particle so dangerous in a fab?", options: ["At chip scale a sub-micron speck can land on and kill a chip", "It scratches the floor", "It makes the room smell", "It has no effect"], correctIndex: 0, explanation: "Features are a few atoms wide, so even a bacteria-sized particle is catastrophic." },
        { id: "si-02-q6", type: "Detail", challenge: "Yellow light.", text: "Why is cleanroom lighting often yellow?", options: ["To avoid exposing light-sensitive patterning coatings too early", "To save energy", "It is a safety color", "For decoration"], correctIndex: 0, explanation: "The photoresist used in lithography must not be exposed by ordinary white light." },
      ],
    },
  },

  // ─── si-03: Photolithography ─────────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The stepper/scanner — printing with light", location: "ASML, Nikon, Canon", era: "Modern", emoji: "🖨️" },
    id: "si-03",
    order: 3,
    title: "Printing Circuits with Light",
    subtitle: "Photolithography — the Heart of Chipmaking",
    category: "cybersecurity",
    xp: 138,
    badge: { id: "badge-si-litho", name: "Light Printer", emoji: "🖨️" },
    challengeType: "quiz",
    info: {
      tagline: "Here is the magic at the center of it all: chips are printed with light. The same idea as a photograph, but projecting patterns so fine they are smaller than a virus — and repeated dozens of times to stack a 3D circuit.",
      year: 2024,
      overview: [
        "Photolithography is how the circuit design gets onto the wafer. It works like photography: coat the wafer in a light-sensitive chemical, shine light through a stencil of the pattern, and develop it to leave the pattern behind. This single idea, repeated layer after layer, is what builds billions of transistors at once.",
        "One lithography cycle has a clear rhythm, and a chip needs dozens of them:\n- COAT — the wafer is spin-coated with 'photoresist', a chemical that changes when hit by light.\n- EXPOSE — light is projected through a patterned 'mask' (reticle), shrinking the image about 4× as it lands on the wafer.\n- DEVELOP — the exposed (or unexposed) resist washes away, leaving a stencil that protects some areas and bares others for the next step (etching or doping).",
        "The whole game is making the printed features smaller, and the wavelength of the light sets the limit:\n- Older tools used near-ultraviolet light (365 nm); the industry then moved to 'deep ultraviolet' (DUV) at 248 nm and 193 nm to print finer lines.\n- A clever trick called 'immersion' puts water between the lens and wafer to sharpen 193 nm light further (193i), squeezing years more progress out of it.\n- The machines that do this — made chiefly by ASML, with Nikon and Canon — are among the most precise instruments ever built, aligning each layer to the ones beneath within nanometers.",
      ],
      technical: {
        title: "Resist, Reticles, and Resolution",
        body: [
          "The mask and the optics do the real work:\n- A 'reticle' carries the pattern for one layer, drawn about 4× larger than final size; the scanner's lens demagnifies it onto the wafer, which both helps precision and makes the mask easier to manufacture.\n- A 'scanner' sweeps the image across the wafer field by field, then 'steps' to the next die — this is why the machines are called step-and-scan systems.\n- 'Overlay' is the art of aligning every new layer to the previous ones within a few nanometers; get it wrong and the layers do not connect.",
          "Resolution is governed by physics:\n- The Rayleigh criterion says the smallest printable feature scales with the wavelength divided by the lens's numerical aperture — shorter light and bigger lenses print finer.\n- 'Positive' resist becomes soluble where exposed (you keep the shadow); 'negative' resist hardens where exposed (you keep the lit area).\n- Because the printed pattern literally defines the circuit, the mask is a sensitive, valuable, and security-relevant asset — tampering with a mask, or stealing a design, attacks the chip before it is ever powered on.",
        ],
      },
      incident: {
        title: "How One Company Came to Make the World's Lithography Machines",
        when: "1984–present",
        where: "Veldhoven, Netherlands (ASML)",
        impact: "ASML grew from a tiny spin-off into the sole maker of the most advanced lithography tools — a global chokepoint",
        body: [
          "ASML began in 1984 as a small joint venture in the Netherlands. Decades of focused engineering — and deep partnerships with suppliers like Zeiss for optics — made it the dominant maker of the step-and-scan systems every leading fab depends on, and the only company that can build the most advanced kind (next stage).",
          "That dominance turned lithography into geopolitics:\n- Because a handful of these machines gates the world's ability to make cutting-edge chips, governments now restrict which countries can buy them.\n- Export controls on advanced lithography tools have become a central lever in the technology rivalry between major powers.\n- It is a striking example of how a single, hard-to-replicate manufacturing capability becomes strategic power — and a chokepoint others race to control or work around.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Photoresist Coat", sub: "light-sensitive layer", type: "system" },
          { label: "Mask / Reticle", sub: "the circuit stencil", type: "victim" },
          { label: "Expose + Demagnify ~4×", sub: "project pattern with light", type: "attacker" },
          { label: "Develop", sub: "pattern left on the wafer", type: "result" },
        ],
      },
      timeline: [
        { year: 1955, event: "Photolithography adapted from printing to making transistors" },
        { year: 1984, event: "ASML founded in the Netherlands" },
        { year: 2007, event: "193 nm immersion lithography extends DUV far beyond expectations", highlight: true },
        { year: 2024, event: "A single advanced chip needs dozens of lithography layers, aligned within nanometers" },
      ],
      keyTakeaways: [
        "Photolithography prints circuit patterns onto the wafer using light, like photography, layer by layer",
        "Each cycle: coat with photoresist → expose through a mask (reticle, ~4× shrink) → develop the stencil",
        "Shorter light (DUV 248/193 nm, plus water 'immersion') prints finer features — wavelength sets the limit",
        "Lithography tools are made chiefly by ASML — a strategic chokepoint now governed by export controls",
      ],
      references: [
        { title: "Photolithography — Wikipedia", url: "https://en.wikipedia.org/wiki/Photolithography" },
        { title: "How lithography works — ASML", url: "https://www.asml.com/en/technology/lithography-principles" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-03-q1", type: "Core Idea", challenge: "Printing chips.", text: "What does photolithography do?", options: ["Prints circuit patterns onto the wafer using light, like photography", "Cuts the wafer into chips", "Cools the processor", "Stores data"], correctIndex: 0, explanation: "It transfers the circuit design layer-by-layer using light-sensitive chemicals." },
        { id: "si-03-q2", type: "Materials", challenge: "The sensitive coating.", text: "What is 'photoresist'?", options: ["A light-sensitive chemical coated on the wafer that changes when exposed", "A metal wire", "A cooling fluid", "The silicon itself"], correctIndex: 0, explanation: "Exposing photoresist through a mask creates the stencil for the next step." },
        { id: "si-03-q3", type: "The Mask", challenge: "The stencil.", text: "What is a 'reticle' (mask)?", options: ["A patterned plate carrying one layer's design, projected and shrunk onto the wafer", "A finished chip", "A type of wafer saw", "The power supply"], correctIndex: 0, explanation: "The scanner demagnifies the reticle pattern (~4×) onto the wafer." },
        { id: "si-03-q4", type: "Resolution", challenge: "Going smaller.", text: "What mainly sets how small a feature lithography can print?", options: ["The wavelength of the light (and the lens aperture)", "The color of the wafer", "The size of the fab", "The price of the chip"], correctIndex: 0, explanation: "Shorter wavelengths and larger numerical apertures print finer features." },
        { id: "si-03-q5", type: "Trick", challenge: "Sharper with water.", text: "What does 193 nm 'immersion' lithography add?", options: ["Water between the lens and wafer to sharpen the light and print finer lines", "A second wafer", "A cooling gas", "More photoresist"], correctIndex: 0, explanation: "Immersion raised the effective resolution of 193 nm DUV, extending it for years." },
        { id: "si-03-q6", type: "Strategy", challenge: "A chokepoint.", text: "Why are lithography machines geopolitically important?", options: ["A few hard-to-build tools gate cutting-edge chipmaking, so they are export-controlled", "They are cheap and common", "They have no strategic value", "They only make memory"], correctIndex: 0, explanation: "Control of advanced lithography is a central lever in the global technology rivalry." },
      ],
    },
  },

  // ─── si-04: EUV Lithography ──────────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "EUV — the most complex machine ever built", location: "ASML TwinScan NXE/EXE", era: "Modern", emoji: "🔆" },
    id: "si-04",
    order: 4,
    title: "EUV — Light From Exploding Tin",
    subtitle: "Extreme Ultraviolet & the Cutting Edge",
    category: "cybersecurity",
    xp: 142,
    badge: { id: "badge-si-euv", name: "EUV Pioneer", emoji: "🔆" },
    challengeType: "quiz",
    info: {
      tagline: "To print today's most advanced chips, engineers needed light so short it is almost an X-ray — and the only practical way to make it is to blast droplets of molten tin with a laser fifty thousand times a second.",
      year: 2024,
      overview: [
        "Extreme ultraviolet (EUV) lithography uses light with a wavelength of 13.5 nm — about 14× shorter than the old 193 nm DUV — to print the finest features in leading-edge GPUs and processors. It took decades and billions of dollars to make work, and it is widely called the most complex machine humanity has ever mass-produced.",
        "EUV is so extreme that almost nothing about it is ordinary:\n- THE LIGHT — tiny tin droplets are hit by a powerful laser to form a plasma that glows at 13.5 nm, repeated about 50,000 times per second.\n- NO LENSES — EUV is absorbed by glass and even by air, so the whole machine runs in a vacuum and uses ultra-smooth mirrors (coated with dozens of nanometer-thin layers) instead of lenses.\n- THE SCALE — a single EUV scanner can cost on the order of $200 million, weigh as much as a bus, and is assembled from hundreds of thousands of parts.",
        "EUV matters because it replaced an increasingly painful workaround:\n- Before EUV, fabs printed tiny features by 'multipatterning' — splitting one layer across several DUV masks and exposures, which is slow, costly, and error-prone.\n- EUV prints many of those features in a single shot, simplifying the most advanced layers and enabling the 7 nm, 5 nm, and 3 nm generations.\n- The newest 'High-NA' EUV pushes further still — and because only one company can build these tools, who is allowed to buy them has become a defining issue of national security and the global chip rivalry.",
      ],
      technical: {
        title: "Tin Plasma, Mirrors, and Multipatterning",
        body: [
          "Generating usable EUV is a feat of brute-force precision:\n- A high-power CO₂ laser strikes each falling tin droplet twice — first to flatten it, then to vaporize it into a plasma that emits the 13.5 nm light.\n- That light is gathered and steered by 'multilayer' mirrors (alternating molybdenum and silicon layers) because no material transmits EUV well; even so, a lot of the light is lost at each bounce.\n- Keeping the source bright and stable enough for high-volume manufacturing was the single hardest part, and why EUV took so long to arrive.",
          "EUV and DUV coexist by dividing the work:\n- Critical, finest layers use EUV; coarser layers still use cheaper DUV — a chip is a mix.\n- Where DUV must still print small features, multipatterning techniques (like LELE double patterning, or SADP/SAQP self-aligned patterning) build them up from multiple steps.\n- 'High-NA' EUV increases the lens aperture to print even smaller features, at the cost of an even more expensive machine and a smaller print field — the next frontier the leading fabs are adopting.",
        ],
      },
      incident: {
        title: "Three Decades to Make EUV Work — and a Geopolitical Flashpoint",
        when: "1990s–2020s",
        where: "Global research consortia and ASML",
        impact: "EUV took ~30 years and tens of billions of dollars; today access to it is restricted between nations",
        body: [
          "EUV lithography was researched for roughly three decades by international consortia and ASML before it reached high-volume production around 2019. Many experts doubted it would ever be practical, given the difficulty of making a bright, stable EUV source and mirrors smooth to the atom.",
          "Once it worked, it instantly became strategic:\n- Because EUV is essential to the most advanced chips and only ASML makes it, governments have restricted exporting these machines to certain countries.\n- That makes the tool a literal gatekeeper for who can manufacture leading-edge AI and computing hardware.\n- It is the clearest modern case of a single manufacturing capability translating directly into geopolitical and security leverage — an entire industry hinging on one machine from one company.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tin Droplets", sub: "50,000 per second", type: "system" },
          { label: "Laser → Plasma", sub: "emits 13.5 nm EUV light", type: "attacker" },
          { label: "Mirrors in Vacuum", sub: "no lenses; EUV is absorbed by air", type: "victim" },
          { label: "Finest Chip Layers", sub: "7/5/3 nm in one shot", type: "result" },
        ],
      },
      timeline: [
        { year: 1997, event: "EUV research consortia form to chase 13.5 nm lithography" },
        { year: 2010, event: "First pre-production EUV tools shipped for development" },
        { year: 2019, event: "EUV reaches high-volume manufacturing (7 nm/5 nm class chips)", highlight: true },
        { year: 2024, event: "High-NA EUV scanners (~$380M each) begin rolling out for future nodes" },
      ],
      keyTakeaways: [
        "EUV uses 13.5 nm light — ~14× shorter than DUV — to print the finest features in advanced chips",
        "The light is made by blasting molten tin droplets with a laser ~50,000×/sec; it needs vacuum and mirrors, not lenses",
        "EUV replaced slow, costly DUV 'multipatterning' for critical layers, enabling 7/5/3 nm generations",
        "Only ASML builds EUV, making it a strategic chokepoint now governed by export controls between nations",
      ],
      references: [
        { title: "EUV lithography — Wikipedia", url: "https://en.wikipedia.org/wiki/Extreme_ultraviolet_lithography" },
        { title: "EUV explained — ASML", url: "https://www.asml.com/en/technology/lithography-principles/euv-lithography" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-04-q1", type: "Core Idea", challenge: "Shorter light.", text: "What wavelength does EUV lithography use?", options: ["13.5 nm — far shorter than DUV's 193 nm", "550 nm (green light)", "1 meter", "0.0001 nm"], correctIndex: 0, explanation: "EUV's 13.5 nm light prints the smallest features in leading-edge chips." },
        { id: "si-04-q2", type: "The Source", challenge: "Making the light.", text: "How is EUV light generated?", options: ["By blasting tiny tin droplets with a laser to form a glowing plasma", "With an ordinary light bulb", "By burning silicon", "With sunlight"], correctIndex: 0, explanation: "A laser-produced tin plasma emits 13.5 nm light ~50,000 times per second." },
        { id: "si-04-q3", type: "Optics", challenge: "No lenses.", text: "Why does EUV use mirrors in a vacuum instead of lenses in air?", options: ["EUV is absorbed by glass and even by air, so it must reflect in vacuum", "Mirrors are cheaper", "Lenses are too heavy", "It is just tradition"], correctIndex: 0, explanation: "Almost everything absorbs EUV, so the system uses multilayer mirrors in vacuum." },
        { id: "si-04-q4", type: "Why It Matters", challenge: "Replacing a workaround.", text: "What did EUV replace for the most advanced layers?", options: ["Slow, costly DUV 'multipatterning' (many masks/exposures per layer)", "The cleanroom", "The silicon wafer", "Transistors"], correctIndex: 0, explanation: "EUV prints in one shot what DUV needed several patterning steps to achieve." },
        { id: "si-04-q5", type: "Difficulty", challenge: "Hard to build.", text: "Roughly how long and costly was EUV to develop?", options: ["About three decades and tens of billions of dollars", "A weekend", "One year and a few thousand dollars", "It was never developed"], correctIndex: 0, explanation: "EUV is often called the most complex machine ever mass-produced." },
        { id: "si-04-q6", type: "Strategy", challenge: "Gatekeeper tool.", text: "Why is EUV a national-security issue?", options: ["Only ASML makes it and it gates advanced chipmaking, so it is export-controlled", "It is freely available everywhere", "It only affects toys", "It has no strategic role"], correctIndex: 0, explanation: "Access to EUV directly determines who can build leading-edge AI and computing chips." },
      ],
    },
  },

  // ─── si-05: Doping & Ion Implantation ────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The p–n junction — where electronics began", location: "Bell Labs / Fairchild", era: "1950s–60s", emoji: "⚛️" },
    id: "si-05",
    order: 5,
    title: "Doping the Silicon",
    subtitle: "Ion Implantation & Making a Switch",
    category: "cybersecurity",
    xp: 138,
    badge: { id: "badge-si-doping", name: "Dopant Engineer", emoji: "⚛️" },
    challengeType: "quiz",
    info: {
      tagline: "Pure silicon is almost useless for computing — it barely conducts. The trick that turns it into a switch is deliberate contamination: firing precise impurities into the crystal to control exactly how it carries charge.",
      year: 2024,
      overview: [
        "After all that work to purify silicon, chipmakers deliberately add tiny amounts of other elements back in — a process called 'doping'. This is what makes a transistor possible: by controlling which impurities go where, engineers decide exactly how each region of the chip conducts electricity.",
        "Doping creates two complementary kinds of silicon, and transistors need both:\n- N-TYPE — adding elements like phosphorus or arsenic gives the silicon extra free electrons (negative carriers).\n- P-TYPE — adding boron creates 'holes', places where an electron is missing, which act like positive carriers.\n- Put n-type and p-type regions next to each other and you get a 'junction' — the fundamental building block that lets current flow one way and not the other, and the basis of every transistor.",
        "The modern way to dope is ion implantation, which is exactly as dramatic as it sounds:\n- Atoms of the dopant are ionized, accelerated to high speed, and fired like a beam into the wafer, embedding at a precise depth and amount controlled by the beam's energy and dose.\n- The bombardment damages the crystal, so the wafer is 'annealed' (heated) to heal the lattice and lock the dopants into place.\n- Precision is everything: the location and concentration of dopants define the transistor's behavior, so a doping process is closely guarded — and subtle, malicious changes to it are one theoretical way to hide a 'hardware trojan' in a chip.",
      ],
      technical: {
        title: "Carriers, Junctions, and the Anneal",
        body: [
          "Doping is about controlling charge carriers:\n- Pure ('intrinsic') silicon has very few free carriers, so it barely conducts; doping adds carriers in a controlled way to set its conductivity.\n- A few parts per million of dopant can change the conductivity by orders of magnitude — a tiny addition with an enormous effect.\n- Where n-type meets p-type, a 'depletion region' forms that gives diodes and transistors their one-way and switching behavior.",
          "Ion implantation gives fine control but must be repaired:\n- Beam energy sets how deep the ions land; beam current and time set the dose (how many) — both measured precisely.\n- The high-speed ions knock silicon atoms out of place, so a rapid thermal anneal restores the crystal and 'activates' the dopants into their proper lattice sites.\n- Older 'diffusion' doping (heating the wafer in a dopant gas) is still used for some steps, but implantation's precision is why it dominates modern chips — and why exact recipes are sensitive intellectual property.",
        ],
      },
      incident: {
        title: "The p–n Junction: the Quiet Discovery Behind All Electronics",
        when: "1940s",
        where: "Bell Labs, USA",
        impact: "Understanding doped junctions made transistors, solar cells, and every modern chip possible",
        body: [
          "In the early 1940s, researcher Russell Ohl at Bell Labs noticed that a silicon sample with an accidental boundary between differently-contaminated regions produced electricity when exposed to light — he had stumbled onto the p–n junction. Understanding why became the foundation for the transistor a few years later.",
          "That single insight underpins the entire industry:\n- Controlling doped junctions is what lets a transistor switch and amplify, a diode steer current, and a solar cell turn light into power.\n- Every region of a modern chip is a carefully doped pattern, placed and measured to the atom.\n- It is a reminder that the 'impurity' we worked so hard to remove is, when added back with precision, the very thing that makes silicon think — and that precision is part of what makes a chip trustworthy.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pure Silicon", sub: "barely conducts", type: "system" },
          { label: "Add Dopants", sub: "phosphorus (n) / boron (p)", type: "attacker" },
          { label: "Ion Implant + Anneal", sub: "fire ions, then heal crystal", type: "victim" },
          { label: "p–n Junction", sub: "the switch is born", type: "result" },
        ],
      },
      timeline: [
        { year: 1940, event: "Russell Ohl discovers the silicon p–n junction at Bell Labs" },
        { year: 1958, event: "Doped junctions enable the first integrated circuits" },
        { year: 1970, event: "Ion implantation becomes a standard, precise doping method", highlight: true },
        { year: 2024, event: "Advanced chips use implantation tuned to the atom for billions of transistors" },
      ],
      keyTakeaways: [
        "Doping deliberately adds impurities to silicon to control how each region conducts — making transistors possible",
        "N-type (phosphorus/arsenic) adds free electrons; p-type (boron) adds 'holes'; their junction is the building block",
        "Ion implantation fires accelerated dopant ions to a precise depth and dose, then anneals to heal the crystal",
        "Dopant placement defines transistor behavior, so recipes are sensitive — and a theoretical hardware-trojan vector",
      ],
      references: [
        { title: "Doping (semiconductor) — Wikipedia", url: "https://en.wikipedia.org/wiki/Doping_(semiconductor)" },
        { title: "Ion implantation — Wikipedia", url: "https://en.wikipedia.org/wiki/Ion_implantation" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-05-q1", type: "Core Idea", challenge: "Adding impurities.", text: "What is 'doping' in chipmaking?", options: ["Deliberately adding tiny amounts of impurities to control how silicon conducts", "Cleaning the wafer", "Printing patterns with light", "Cooling the chip"], correctIndex: 0, explanation: "Controlled impurities turn nearly non-conducting silicon into a usable switch." },
        { id: "si-05-q2", type: "Types", challenge: "Two flavors.", text: "What does n-type doping add to silicon?", options: ["Extra free electrons (negative carriers)", "Extra holes", "More silicon", "Copper wiring"], correctIndex: 0, explanation: "N-type (e.g., phosphorus) adds electrons; p-type (boron) adds holes." },
        { id: "si-05-q3", type: "The Junction", challenge: "Where the magic is.", text: "What forms where n-type meets p-type silicon?", options: ["A p–n junction — the basis of diodes and transistors", "A cooling fin", "A memory cell", "A power cable"], correctIndex: 0, explanation: "The junction lets current flow one way and not the other — the core building block." },
        { id: "si-05-q4", type: "Method", challenge: "Firing ions.", text: "What is ion implantation?", options: ["Accelerating dopant ions and firing them into the wafer at a precise depth and dose", "Painting the wafer", "Melting the silicon", "Stacking chips"], correctIndex: 0, explanation: "Beam energy sets depth; dose sets amount — very precise control of doping." },
        { id: "si-05-q5", type: "Repair", challenge: "After the blast.", text: "Why is the wafer 'annealed' (heated) after implantation?", options: ["To heal the crystal damage and activate the dopants into the lattice", "To cool it down", "To add color", "To cut it into chips"], correctIndex: 0, explanation: "High-speed ions damage the lattice; annealing restores it and locks dopants in place." },
        { id: "si-05-q6", type: "Security Seed", challenge: "Hidden tampering.", text: "Why are doping recipes a security concern?", options: ["Subtle changes to dopant placement could hide a 'hardware trojan' in a chip", "They make the chip heavier", "They have no security relevance", "They change the chip's color"], correctIndex: 0, explanation: "Because doping defines transistor behavior, malicious tweaks are a theoretical stealth attack." },
      ],
    },
  },

  // ─── si-06: Deposition & Etching ─────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "Copper interconnects — wiring a chip", location: "IBM / Applied Materials", era: "1997–present", emoji: "🧱" },
    id: "si-06",
    order: 6,
    title: "Building in 3D",
    subtitle: "Deposition, Etching & Copper Wiring",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-si-deposition", name: "Layer Architect", emoji: "🧱" },
    challengeType: "quiz",
    info: {
      tagline: "A chip is not flat — it is a microscopic skyscraper of dozens of layers. Building it means adding films a few atoms thick, carving them away with plasma, and threading miles of copper wire thinner than light.",
      year: 2024,
      overview: [
        "Lithography draws the patterns, but two other steps actually build the structure: 'deposition' adds thin layers of material, and 'etching' carves them away where they are not wanted. Repeating add-pattern-etch dozens of times stacks up the full 3D circuit — transistors at the bottom, wiring above.",
        "Deposition is how every film on the chip is laid down, and there are several methods for different jobs:\n- CVD (chemical vapor deposition) — gases react on the wafer to grow a solid film, used for many insulating and structural layers.\n- PVD / sputtering — atoms are knocked off a target and land on the wafer, used mostly for metals.\n- ALD (atomic layer deposition) — builds a film literally one atomic layer at a time, the only way to coat the tiniest features evenly and to lay down special 'high-k' insulators.",
        "Etching removes material with surgical control, and the wiring ties it all together:\n- DRY (plasma) etching uses reactive gases in a plasma to carve straight, vertical walls — essential for tiny, dense features — while older 'wet' etching uses liquid chemicals.\n- Connections between layers use the 'damascene' process: trenches are etched, filled with copper, then polished flat, repeated to build 10–15+ metal wiring levels.\n- Between layers, planarization (CMP) keeps each level perfectly flat so the next can be printed — and because these hidden internal layers are nearly impossible to inspect once buried, they are exactly where a malicious modification would be hardest to find.",
      ],
      technical: {
        title: "Films, Plasma, and the Damascene Process",
        body: [
          "Choosing a deposition method is about scale and material:\n- ALD's one-atom-at-a-time growth made possible the 'high-k metal gate' — replacing the transistor's old silicon-dioxide insulator with materials like hafnium oxide to stop leakage at tiny sizes.\n- CVD variants (plasma-enhanced, low-pressure) trade speed, temperature, and film quality for different layers.\n- Epitaxy grows new crystalline silicon (sometimes silicon-germanium) to 'strain' the channel and make transistors faster.",
          "Etching and interconnect are where geometry gets real:\n- Plasma (dry) etching is 'anisotropic' — it cuts downward far faster than sideways, giving the vertical walls dense circuits require; wet etching is simpler but undercuts.\n- Copper replaced aluminum wiring in 1997 because it conducts better, but copper cannot be etched easily — so the damascene process etches the gap first and fills it with copper instead.\n- A thin 'barrier' layer wraps the copper to stop it diffusing into the silicon, and dozens of these patterned metal layers form the chip's internal road network, carrying signals and power to billions of transistors.",
        ],
      },
      incident: {
        title: "1997 — IBM Switches Chip Wiring to Copper",
        when: "1997",
        where: "IBM, USA",
        impact: "Moving from aluminum to copper interconnects cut resistance and enabled faster, denser chips",
        body: [
          "For decades chips were wired with aluminum, but as features shrank, aluminum's resistance became a bottleneck. In 1997 IBM introduced a manufacturable way to wire chips with copper, which conducts better and allowed faster, lower-power, more densely-wired processors.",
          "The breakthrough was as much about process as material:\n- Because copper is hard to etch, IBM perfected the 'damascene' approach — etch the trench, fill with copper, polish flat — which the whole industry adopted.\n- It is a classic example of how a manufacturing innovation, not just a smaller transistor, drives progress.\n- It also added new layers to the chip's hidden interior, deepening the 'skyscraper' of wiring above the transistors — and underscoring how much of a modern chip is invisible structure that must simply be trusted to be built correctly.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Deposit a Film", sub: "CVD / PVD / ALD", type: "system" },
          { label: "Pattern (Litho)", sub: "stencil the design", type: "attacker" },
          { label: "Plasma Etch", sub: "carve vertical walls", type: "victim" },
          { label: "Copper Damascene", sub: "fill + polish wiring layers", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "CVD and sputtering become standard thin-film methods" },
        { year: 1997, event: "IBM moves chip interconnects from aluminum to copper", highlight: true },
        { year: 2007, event: "High-k metal gate (via ALD) replaces silicon-dioxide gate insulators" },
        { year: 2024, event: "Advanced chips stack 10–15+ copper wiring layers above the transistors" },
      ],
      keyTakeaways: [
        "A chip is a 3D stack: deposition adds thin films, etching carves them, repeated dozens of times",
        "Deposition methods include CVD (gas reaction), PVD/sputtering (metals), and ALD (one atomic layer at a time)",
        "Plasma (dry) etching cuts straight vertical walls; copper wiring is built by the damascene 'etch-fill-polish' process",
        "Much of a chip is hidden internal structure — hard to inspect once buried, so it must be trusted to be built right",
      ],
      references: [
        { title: "Thin-film deposition — Wikipedia", url: "https://en.wikipedia.org/wiki/Thin-film_deposition" },
        { title: "Copper interconnect & damascene process", url: "https://en.wikipedia.org/wiki/Copper_interconnects" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-06-q1", type: "Core Idea", challenge: "Add and carve.", text: "What do deposition and etching do?", options: ["Deposition adds thin material layers; etching carves them away to build the 3D circuit", "They cool the chip", "They cut the wafer into dies", "They test the chip"], correctIndex: 0, explanation: "Repeating add-pattern-etch dozens of times stacks the full chip structure." },
        { id: "si-06-q2", type: "Deposition", challenge: "One atom at a time.", text: "What is special about ALD (atomic layer deposition)?", options: ["It builds a film one atomic layer at a time for perfect, ultra-thin coatings", "It is the fastest method", "It only works on metals", "It removes material"], correctIndex: 0, explanation: "ALD's atomic precision enabled high-k gate insulators and coating tiny features evenly." },
        { id: "si-06-q3", type: "Etching", challenge: "Straight walls.", text: "Why is plasma (dry) etching preferred for tiny features?", options: ["It cuts downward far faster than sideways, giving vertical walls", "It is cheaper than everything", "It adds material", "It cools the wafer"], correctIndex: 0, explanation: "Anisotropic plasma etching gives the straight, dense profiles modern circuits need." },
        { id: "si-06-q4", type: "Wiring", challenge: "Connecting it all.", text: "How are a chip's copper wires built (the damascene process)?", options: ["Etch a trench, fill it with copper, then polish flat — repeated for many layers", "Glue copper on top", "Print copper with light", "Spray molten metal"], correctIndex: 0, explanation: "Copper is hard to etch, so the gap is carved first and filled, then planarized." },
        { id: "si-06-q5", type: "History", challenge: "A material switch.", text: "What did IBM change about chip wiring in 1997?", options: ["Moved from aluminum to copper interconnects for lower resistance", "Removed all wiring", "Switched to gold transistors", "Made chips out of plastic"], correctIndex: 0, explanation: "Copper conducts better, enabling faster, denser, lower-power chips." },
        { id: "si-06-q6", type: "Security Seed", challenge: "Buried structure.", text: "Why are a chip's internal layers a trust concern?", options: ["Once buried they are nearly impossible to inspect, so they must be trusted to be built correctly", "They glow in the dark", "They are easy to photograph", "They have no role"], correctIndex: 0, explanation: "Hidden internal structure is exactly where a malicious modification is hardest to detect." },
      ],
    },
  },

  // ─── si-07: FinFET to Gate-All-Around ────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The 3D transistor revolution", location: "Intel / TSMC / Samsung", era: "2011–present", emoji: "🧩" },
    id: "si-07",
    order: 7,
    title: "The Modern Transistor",
    subtitle: "FinFET, Gate-All-Around & the 'nm' Myth",
    category: "cybersecurity",
    xp: 144,
    badge: { id: "badge-si-finfet", name: "Transistor Architect", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "As transistors shrank, the classic flat design started to leak and misbehave. The fix was to go vertical — wrapping the gate around the channel — and that 3D redesign is what powers today's most advanced GPUs.",
      year: 2024,
      overview: [
        "For decades transistors were 'planar' — flat, with the gate sitting on top of the channel. But as they shrank toward atomic sizes, the gate lost control of the current: electricity leaked even when the switch was 'off', wasting power and creating heat. The answer was to rebuild the transistor in three dimensions.",
        "The transistor's shape has gone through a clear evolution:\n- PLANAR — the original flat MOSFET, which ran out of room as the channel got too short to control.\n- FinFET — introduced around 2011, the channel stands up as a thin 'fin' and the gate wraps around three sides, gripping the current far better.\n- GATE-ALL-AROUND (GAA / nanosheet) — the newest design (Samsung in 2022, then TSMC and Intel), where the gate fully surrounds stacked horizontal channels on all sides for the tightest control yet.",
        "This is also where the famous 'nanometer' node names stop meaning what you think:\n- A '3 nm' or '2 nm' process does not have any part that is literally 3 or 2 nanometers — the numbers are now marketing labels for a generation, not a measurement.\n- What actually advances each generation is a mix of transistor shape, materials, and density improvements.\n- These leading designs are why a modern AI GPU can pack tens of billions of transistors into a thumbnail of silicon — and why only a few fabs in the world can make them, a concentration with real economic and security weight.",
      ],
      technical: {
        title: "Short-Channel Effects and Going 3D",
        body: [
          "The physics forced the redesign:\n- In a too-short planar channel, the gate can no longer fully pinch off the current, so 'leakage' flows even when off — burning power and generating heat.\n- Wrapping the gate around more of the channel (3 sides in FinFET, all sides in GAA) restores control, cutting leakage and letting voltage drop.\n- Supporting tricks help too: 'high-k metal gate' insulators (from si-06) and 'strained silicon' that speeds carriers along.",
          "Modern node engineering is multi-pronged:\n- GAA 'nanosheets' stack several channel ribbons with the gate woven around each, packing more drive into the same footprint.\n- Coming improvements include 'backside power delivery', routing power through the back of the wafer to free up the front for signals.\n- The takeaway for security and economics alike: each generation is harder, costlier, and made in fewer places — so the world's most advanced computing increasingly depends on a tiny number of fabs, a strategic concentration defenders and policymakers watch closely.",
        ],
      },
      incident: {
        title: "2011 — Intel Ships the First 3D (FinFET) Transistors",
        when: "2011",
        where: "Intel, USA",
        impact: "FinFET ('Tri-Gate') kept Moore's Law alive when flat transistors hit a wall",
        body: [
          "By the late 2000s, planar transistors were leaking so badly at small sizes that further shrinking threatened to stop. In 2011 Intel introduced its '22 nm Tri-Gate' technology — the first high-volume FinFET — standing the channel up as a fin so the gate could grip it on three sides.",
          "It was a turning point for the whole industry:\n- FinFET dramatically cut leakage and let chips keep getting smaller, faster, and more efficient — effectively rescuing Moore's Law for another decade.\n- Every advanced chipmaker eventually adopted FinFET, and now the leading edge is moving to gate-all-around.\n- It shows that progress in chips is not automatic: it takes repeated, hard-won reinventions of the transistor itself, each one made by an ever-smaller set of companies capable of pulling it off.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Planar MOSFET", sub: "flat — leaks when tiny", type: "system" },
          { label: "FinFET (2011)", sub: "gate wraps 3 sides of a fin", type: "attacker" },
          { label: "Gate-All-Around", sub: "gate surrounds all sides", type: "victim" },
          { label: "Tens of Billions/Chip", sub: "powers modern AI GPUs", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "High-k metal gate buys planar transistors a few more generations" },
        { year: 2011, event: "Intel ships the first high-volume FinFET (22 nm Tri-Gate)", highlight: true },
        { year: 2022, event: "Samsung begins gate-all-around (nanosheet) production at '3 nm'" },
        { year: 2025, event: "TSMC and Intel move to gate-all-around for their leading nodes" },
      ],
      keyTakeaways: [
        "Shrinking flat (planar) transistors caused leakage; the fix was to make the transistor 3D",
        "FinFET (≈2011) wraps the gate around a vertical fin (3 sides); gate-all-around wraps all sides for tighter control",
        "Process 'nm' names (3 nm, 2 nm) are marketing labels for a generation, not literal measurements",
        "These designs let AI GPUs pack tens of billions of transistors — and are made in only a few fabs worldwide",
      ],
      references: [
        { title: "FinFET — Wikipedia", url: "https://en.wikipedia.org/wiki/FinFET" },
        { title: "Gate-all-around (GAAFET) transistors", url: "https://en.wikipedia.org/wiki/Multigate_device#GAAFET" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-07-q1", type: "Core Idea", challenge: "Why go 3D.", text: "Why did transistors need to become 3D?", options: ["Shrinking flat transistors leaked current even when 'off', wasting power", "To make chips heavier", "To look nicer", "3D was never needed"], correctIndex: 0, explanation: "A too-short flat channel can't be controlled, so the gate was wrapped around it." },
        { id: "si-07-q2", type: "FinFET", challenge: "Standing up.", text: "What is a FinFET?", options: ["A transistor whose channel is a vertical 'fin' with the gate wrapping three sides", "A type of cooling fin", "A memory chip", "A flat transistor"], correctIndex: 0, explanation: "Introduced ~2011, FinFET's gate grips the channel far better than a flat design." },
        { id: "si-07-q3", type: "GAA", challenge: "All around.", text: "What is gate-all-around (GAA / nanosheet)?", options: ["A transistor where the gate fully surrounds the channel on all sides", "A bigger flat transistor", "A wiring layer", "A type of resist"], correctIndex: 0, explanation: "GAA wraps the channel completely for the tightest control — the newest design." },
        { id: "si-07-q4", type: "The 'nm' Myth", challenge: "Just a label.", text: "What does a '3 nm' process node actually mean today?", options: ["A marketing label for a generation — nothing on it is literally 3 nm", "Every feature is exactly 3 nm", "The wafer is 3 nm thick", "The chip weighs 3 nm"], correctIndex: 0, explanation: "Node names stopped being literal measurements; they denote a technology generation." },
        { id: "si-07-q5", type: "History", challenge: "First 3D.", text: "Who shipped the first high-volume FinFET in 2011?", options: ["Intel (22 nm Tri-Gate)", "Apple", "Google", "Samsung"], correctIndex: 0, explanation: "Intel's Tri-Gate rescued Moore's Law when planar transistors hit a wall." },
        { id: "si-07-q6", type: "Impact", challenge: "Few makers.", text: "What is a security/economic implication of these advanced transistors?", options: ["Only a few fabs can make them, concentrating the world's advanced computing", "They are made everywhere cheaply", "They need no special tools", "They have no strategic weight"], correctIndex: 0, explanation: "Each harder generation is made in fewer places — a strategic concentration of capability." },
      ],
    },
  },

  // ─── si-08: Building a GPU ───────────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The AI accelerator — chiplets and stacked memory", location: "NVIDIA / TSMC CoWoS", era: "Modern", emoji: "🎮" },
    id: "si-08",
    order: 8,
    title: "Building a Giant AI GPU",
    subtitle: "Chiplets, HBM & Advanced Packaging",
    category: "cybersecurity",
    xp: 146,
    badge: { id: "badge-si-gpu", name: "GPU Builder", emoji: "🎮" },
    challengeType: "quiz",
    info: {
      tagline: "A modern AI GPU is too big and complex to be a single chip. The newest ones are really several pieces of silicon stitched together and surrounded by stacks of memory — a feat of packaging as much as of transistors.",
      year: 2024,
      overview: [
        "A GPU (graphics/AI processor) is built from the same silicon steps as any chip, but pushed to the limit. Where a CPU has a few powerful cores, a GPU has thousands of simpler cores running in parallel — perfect for the massive matrix math behind graphics and AI. The flagship AI GPUs contain tens of billions of transistors and are made on the most advanced nodes.",
        "These chips have grown so large that a single die is no longer enough:\n- THE RETICLE LIMIT — lithography can only print one die up to roughly 800 mm² in a single shot, a hard ceiling on how big one piece of silicon can be.\n- CHIPLETS — so designers split the processor into multiple smaller dies ('chiplets' or 'tiles') and connect them tightly; the newest flagship GPUs join two large dies to act as one.\n- This 'disaggregation' also improves yield and lets different parts use the best-suited process.",
        "The real magic of a modern GPU is in the packaging that binds it all together:\n- HBM (high-bandwidth memory) — towers of DRAM chips are stacked and connected by vertical 'through-silicon vias', then placed right beside the GPU for enormous memory bandwidth.\n- 2.5D PACKAGING (e.g., TSMC's CoWoS) — the GPU dies and HBM stacks sit on a silicon 'interposer', a tiny circuit board of silicon that wires them together with thousands of connections.\n- 3D STACKING — newer methods bond chips directly face-to-face ('hybrid bonding') for even denser, shorter links — and because these multi-die packages mix silicon from different sources, verifying that every component is genuine and untampered is a growing hardware-security challenge.",
      ],
      technical: {
        title: "Parallelism, the Reticle Limit, and Stacking",
        body: [
          "Why a GPU looks the way it does:\n- Graphics and AI workloads do the same operation across huge amounts of data, so thousands of small cores beat a few big ones — this is 'data parallelism'.\n- That hunger for data makes memory bandwidth the bottleneck, which is why HBM is stacked right next to the compute, not out on a distant board.\n- The combination — many cores plus nearby high-bandwidth memory — is exactly what made GPUs the engine of the AI boom.",
          "Advanced packaging is now as important as the transistor:\n- The reticle limit (~800+ mm²) caps a single die, so 'more performance' increasingly means joining multiple dies rather than making one bigger.\n- An interposer (2.5D) or direct hybrid bonding (3D) provides far more, far shorter connections between dies than a traditional package could — key to feeding thousands of cores.\n- Packaging capacity (like CoWoS) has become a real bottleneck for AI-chip supply, and the mixing of many sourced components raises supply-chain and counterfeit concerns the industry is racing to address.",
        ],
      },
      incident: {
        title: "When Advanced Packaging Became the AI Bottleneck",
        when: "2023–2024",
        where: "TSMC and the AI hardware supply chain",
        impact: "Demand for AI GPUs outran the supply of advanced 2.5D/3D packaging, not just transistors",
        body: [
          "During the AI boom, the scarcest resource for building cutting-edge GPUs was often not the transistor fabrication but the advanced packaging — specifically the CoWoS capacity needed to join GPU dies with their HBM memory stacks. Demand far outstripped supply, and packaging became a headline constraint on how many AI accelerators the world could build.",
          "It marked a shift in how chips are understood:\n- For decades 'making a faster chip' meant a smaller transistor; now it increasingly means smarter assembly of multiple dies and memory.\n- This makes packaging facilities strategically important in their own right, with their own supply-chain risks and security considerations.\n- It also multiplies trust questions: a finished AI GPU is now an assembly of many sourced parts, and confirming each is authentic and unmodified is part of securing the hardware.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Thousands of Cores", sub: "parallel matrix math", type: "system" },
          { label: "Reticle Limit ~800 mm²", sub: "split into chiplets", type: "attacker" },
          { label: "HBM Stacks (TSVs)", sub: "memory beside the compute", type: "victim" },
          { label: "2.5D/3D Package", sub: "interposer / hybrid bonding", type: "result" },
        ],
      },
      timeline: [
        { year: 2008, event: "GPUs adopted for general computing, igniting GPU-accelerated science" },
        { year: 2015, event: "HBM debuts — DRAM stacked with through-silicon vias for huge bandwidth" },
        { year: 2017, event: "2.5D packaging (CoWoS) pairs big GPUs with HBM on a silicon interposer", highlight: true },
        { year: 2024, event: "Flagship AI GPUs join multiple dies and many HBM stacks in one package" },
      ],
      keyTakeaways: [
        "GPUs use thousands of parallel cores for matrix math — ideal for graphics and AI, unlike a few big CPU cores",
        "The reticle limit (~800 mm²) caps a single die, so big GPUs are split into multiple 'chiplets'/tiles",
        "HBM stacks DRAM with through-silicon vias next to the GPU; 2.5D (CoWoS) and 3D packaging wire it all together",
        "Advanced packaging is now a key bottleneck — and mixing many sourced parts raises hardware-trust concerns",
      ],
      references: [
        { title: "High Bandwidth Memory (HBM) — Wikipedia", url: "https://en.wikipedia.org/wiki/High_Bandwidth_Memory" },
        { title: "Advanced packaging & chiplets — overview", url: "https://en.wikipedia.org/wiki/Chiplet" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-08-q1", type: "Core Idea", challenge: "Many small cores.", text: "How does a GPU differ from a CPU?", options: ["It has thousands of simpler cores running in parallel, ideal for matrix math", "It has one giant core", "It cannot do math", "It is only for storage"], correctIndex: 0, explanation: "Massive parallelism makes GPUs the engine of graphics and AI." },
        { id: "si-08-q2", type: "Reticle Limit", challenge: "A hard ceiling.", text: "What is the 'reticle limit'?", options: ["The maximum size (~800 mm²) of a single die lithography can print at once", "The number of chips per wafer", "The price of a GPU", "The speed of light"], correctIndex: 0, explanation: "It caps a single die, forcing big designs to split into multiple chiplets." },
        { id: "si-08-q3", type: "Chiplets", challenge: "Splitting up.", text: "Why are the newest big GPUs built from multiple dies (chiplets)?", options: ["A single die can't exceed the reticle limit, so dies are joined to act as one", "To make them cheaper to ship", "Because one die is illegal", "To reduce performance"], correctIndex: 0, explanation: "Disaggregation gets around the size ceiling and can improve yield." },
        { id: "si-08-q4", type: "Memory", challenge: "Stacked DRAM.", text: "What is HBM (high-bandwidth memory)?", options: ["Stacks of DRAM connected by through-silicon vias, placed next to the GPU", "A cooling system", "A type of transistor", "A power cable"], correctIndex: 0, explanation: "HBM sits beside the compute to feed thousands of cores with huge bandwidth." },
        { id: "si-08-q5", type: "Packaging", challenge: "Wiring it together.", text: "What does 2.5D packaging (like CoWoS) do?", options: ["Places GPU dies and HBM on a silicon interposer that wires them with many connections", "Prints transistors", "Purifies silicon", "Cools the data center"], correctIndex: 0, explanation: "The interposer is a tiny silicon 'circuit board' joining the dies and memory." },
        { id: "si-08-q6", type: "Bottleneck", challenge: "The new constraint.", text: "What became a major AI-GPU bottleneck in 2023–2024?", options: ["Advanced packaging capacity (CoWoS), not just transistor fabrication", "Too many wafers", "A shortage of software", "Cheap electricity"], correctIndex: 0, explanation: "Packaging to join GPUs with HBM was the scarce resource limiting AI-chip supply." },
      ],
    },
  },

  // ─── si-09: Yield, Testing & Cost ────────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The $20-billion fab", location: "TSMC / Samsung / Intel", era: "Modern", emoji: "💰" },
    id: "si-09",
    order: 9,
    title: "Yield, Testing & the Price of a Chip",
    subtitle: "Why Chips Are So Hard (and Expensive) to Make",
    category: "cybersecurity",
    xp: 144,
    badge: { id: "badge-si-yield", name: "Yield Master", emoji: "💰" },
    challengeType: "quiz",
    info: {
      tagline: "Not every chip on a wafer works — and on a giant GPU, many do not. The art of getting enough good ones, sorting them, and packaging them is what decides whether a chip costs five dollars or fifty thousand.",
      year: 2024,
      overview: [
        "After weeks of processing, a wafer holds hundreds of chips — but some are defective. 'Yield' is the fraction that work, and it quietly governs the entire economics of the industry. Because a single particle or flaw can kill a chip, and because big chips have more area to go wrong, yield is the number every fab obsesses over.",
        "Turning a finished wafer into sellable products takes several steps:\n- WAFER TEST — tiny probes touch each chip on the wafer to check if it works before it is even cut out.\n- BINNING — working chips are sorted by quality; a part with one bad core or a lower top speed is sold as a cheaper model, so almost nothing is wasted.\n- DICING & PACKAGING — the wafer is sawn into individual dies, which are packaged, connected to pins or balls, and tested again (sometimes 'burned in' under stress) before shipping.",
        "All of this explains why advanced chips are so expensive, and why so few can make them:\n- Bigger dies (like AI GPUs) catch more defects, so their yield is lower and each good one is far more costly.\n- A leading-edge fab costs $20–40 billion to build, and a single EUV machine runs around $200 million — capital only a handful of companies can muster.\n- That concentration also creates security stakes: counterfeit, recycled, or subtly altered chips entering the supply chain are a real threat, so traceability and authentication of genuine parts matter as much as raw performance.",
      ],
      technical: {
        title: "Defect Density, Binning, and Fab Economics",
        body: [
          "Yield follows hard statistics:\n- Yield falls as die area grows and as 'defect density' (flaws per area) rises — models like the Murphy/Poisson yield curves capture this, and it is why huge GPUs are expensive.\n- Fabs fight defects with cleanliness, process control, and 'redundancy' — adding spare cores or memory so a chip with a small flaw still works.\n- Early in a new process, yields can be low and improve over months as engineers hunt down defect sources — the 'yield ramp'.",
          "The money and trust dimensions are inseparable from manufacturing:\n- The cost per good chip = wafer cost ÷ (good dies per wafer), so yield directly sets price; this is why binning recovers value from imperfect dies.\n- Final test, burn-in, and traceability also guard quality: a chip that passes fab steps can still fail under real stress, so it is screened before sale.\n- Because the supply chain is long and global, authenticating that a chip is genuine and unmodified — not counterfeit, re-marked, or tampered — is a core hardware-security practice, especially for defense, medical, and infrastructure systems.",
        ],
      },
      incident: {
        title: "The $20-Billion Bet: Why Only a Few Make Leading Chips",
        when: "Modern",
        where: "TSMC, Samsung, Intel",
        impact: "The staggering cost of advanced fabs concentrated cutting-edge chipmaking into a tiny club",
        body: [
          "Building a single leading-edge fab now costs on the order of $20–40 billion, packed with EUV scanners that each cost around $200 million. Only a handful of companies — led by TSMC, with Samsung and Intel — can afford to operate at the cutting edge, and TSMC alone makes the most advanced chips for much of the industry.",
          "That concentration shapes the modern world:\n- It makes a few facilities, often in a few regions, critical to the global economy and to national security.\n- It is why governments are spending heavily to build domestic fabs and secure their chip supply.\n- And it raises the stakes for hardware trust: when so much depends on so few sources, verifying that the chips coming out are exactly what was designed — no defects hidden, no tampering, no counterfeits — becomes essential, not optional.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Finished Wafer", sub: "hundreds of chips, some bad", type: "system" },
          { label: "Wafer Test + Bin", sub: "probe, sort by quality", type: "attacker" },
          { label: "Dice + Package + Test", sub: "cut, wire, screen", type: "victim" },
          { label: "Cost = Wafer ÷ Good Dies", sub: "yield sets the price", type: "result" },
        ],
      },
      timeline: [
        { year: 1960, event: "Yield management becomes central as integrated circuits scale" },
        { year: 1984, event: "Binning emerges to sell imperfect dies as lower-tier products" },
        { year: 2010, event: "Leading fab costs cross $10 billion as tools grow more complex" },
        { year: 2024, event: "A cutting-edge fab costs $20–40B; one EUV scanner ~$200M", highlight: true },
      ],
      keyTakeaways: [
        "'Yield' is the fraction of chips on a wafer that work — it governs the entire economics of chipmaking",
        "Chips are probed on the wafer, 'binned' by quality (a flawed part becomes a cheaper SKU), then diced, packaged, and tested",
        "Bigger dies (AI GPUs) catch more defects, so they yield less and cost far more per good chip",
        "Fabs cost $20–40B and EUV tools ~$200M, concentrating chipmaking — and raising counterfeit/tamper trust concerns",
      ],
      references: [
        { title: "Semiconductor yield — overview", url: "https://en.wikipedia.org/wiki/Semiconductor_device_fabrication#Device_test" },
        { title: "Product binning — Wikipedia", url: "https://en.wikipedia.org/wiki/Product_binning" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-09-q1", type: "Core Idea", challenge: "How many work.", text: "What is 'yield' in chipmaking?", options: ["The fraction of chips on a wafer that actually work", "The wafer's diameter", "The chip's clock speed", "The fab's electricity bill"], correctIndex: 0, explanation: "Yield governs cost: defects mean not every die on a wafer is sellable." },
        { id: "si-09-q2", type: "Testing", challenge: "Before cutting.", text: "What is 'wafer test'?", options: ["Probing each chip on the wafer to check it works before dicing", "Cutting the wafer", "Growing the crystal", "Adding memory"], correctIndex: 0, explanation: "Tiny probes touch each die so bad ones are caught before packaging." },
        { id: "si-09-q3", type: "Binning", challenge: "Sorting by quality.", text: "What is 'binning'?", options: ["Sorting working chips by quality — a flawed part becomes a cheaper model", "Throwing away all chips", "Recycling sand", "Cooling the chips"], correctIndex: 0, explanation: "Binning recovers value: a chip with one bad core is sold as a lower-tier SKU." },
        { id: "si-09-q4", type: "Big Dies", challenge: "Why GPUs cost more.", text: "Why do large dies like AI GPUs have lower yield?", options: ["More area means more chances to catch a fatal defect", "They are made of gold", "They are tested less", "Large dies always yield better"], correctIndex: 0, explanation: "Defects scale with area, so big chips yield fewer good dies and cost far more." },
        { id: "si-09-q5", type: "Economics", challenge: "The price of entry.", text: "About how much does a leading-edge fab cost to build?", options: ["$20–40 billion", "$20,000", "$2 million", "Nothing"], correctIndex: 0, explanation: "Enormous capital (plus ~$200M EUV tools) limits cutting-edge chipmaking to a few firms." },
        { id: "si-09-q6", type: "Security Seed", challenge: "Trust the part.", text: "Why does chip authentication matter for security?", options: ["Counterfeit, recycled, or tampered chips can enter the supply chain", "Chips never get faked", "It only affects color", "Authentication is irrelevant"], correctIndex: 0, explanation: "Verifying chips are genuine and unmodified is core hardware security, especially for critical systems." },
      ],
    },
  },

  // ─── si-10: Fabricating Quantum Chips ────────────────────────────────────────
  {
    epochId: "silicon-fab",
    wonder: { name: "The quantum processor — built near absolute zero", location: "IBM / Google / Intel", era: "Frontier", emoji: "❄️" },
    id: "si-10",
    order: 10,
    title: "Fabricating Quantum Chips",
    subtitle: "The Radically Different Frontier",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-si-quantum", name: "Quantum Fabricator", emoji: "❄️" },
    challengeType: "quiz",
    info: {
      tagline: "Quantum processors are made in a fab too — but they bend the rules. Some are tiny superconducting circuits chilled colder than deep space; others trap single atoms; and the most futuristic ones might ride the very same silicon lines that make your laptop.",
      year: 2024,
      overview: [
        "Quantum chips borrow many tools from classical chipmaking — lithography, deposition, etching — but they store information in 'qubits' that exploit quantum physics, and that changes what they are made of and how they must be built. There is no single winning design yet; several very different approaches are being fabricated and raced against each other.",
        "The leading qubit technologies are built in strikingly different ways:\n- SUPERCONDUCTING (IBM, Google) — circuits of aluminum or niobium on a silicon or sapphire chip, using 'Josephson junctions', that must be cooled to about 10–15 millikelvin (colder than outer space) in a dilution refrigerator.\n- TRAPPED IONS (IonQ, Quantinuum) — individual charged atoms held in a vacuum by electromagnetic fields from a micro-fabricated trap chip, manipulated with lasers.\n- SILICON SPIN QUBITS (Intel) — single electron spins held in quantum dots, deliberately designed to reuse standard CMOS transistor fabrication.",
        "What makes quantum fabrication so hard is that the qubits are exquisitely fragile:\n- Tiny imperfections, stray materials, or vibrations cause 'decoherence' — the quantum state collapses — so material purity and interface quality matter even more than in classical chips.\n- Some silicon spin qubits use isotopically purified silicon-28 to remove magnetic 'noise' from other isotopes, an extra purification step beyond anything classical chips need.\n- Because errors are so common, today's machines need heavy 'error correction', and scaling up qubit counts while keeping them stable is the central manufacturing challenge — quantum chipmaking is roughly where classical chipmaking was in its earliest, hand-built decades, and a field where post-quantum security planning is already underway.",
      ],
      technical: {
        title: "Josephson Junctions, Ion Traps, and Spin Qubits",
        body: [
          "Each approach has its own fabrication signature:\n- Superconducting qubits hinge on the Josephson junction — a sliver of insulator between two superconductors — often made by 'shadow evaporation' of aluminum; the chip is wired and mounted into a refrigerator that reaches millikelvin temperatures.\n- Trapped-ion processors are really precision micro-fabricated electrode chips that create the fields to suspend atoms in vacuum; the 'qubits' (atoms) are identical by nature, a real advantage.\n- Silicon spin qubits define quantum dots with gate electrodes much like ordinary transistors, which is why they hold the tantalizing promise of leveraging the trillion-dollar CMOS manufacturing base.",
          "The shared obstacle is fragility and scale:\n- Coherence — how long a qubit holds its state — depends on materials, interfaces, and shielding, so fabrication cleanliness and design directly set quantum quality.\n- Error correction spreads one reliable 'logical' qubit across many physical qubits, so useful machines may need thousands to millions of them — an enormous manufacturing and packaging problem.\n- Connecting and controlling huge qubit arrays (the wiring 'fan-out', cryogenic control electronics) is an open frontier — and the reason experts plan now for a future where quantum machines could threaten today's encryption, driving the move to post-quantum cryptography.",
        ],
      },
      incident: {
        title: "2019 — A Quantum Chip Claims to Beat the Fastest Supercomputer",
        when: "2019",
        where: "Google (Sycamore processor)",
        impact: "A 53-qubit superconducting chip performed a task said to be infeasible for classical supercomputers",
        body: [
          "In 2019 Google reported that its 53-qubit 'Sycamore' superconducting processor completed a specially-chosen task in minutes that, it argued, would take the best classical supercomputers far longer — a milestone often called 'quantum advantage'. The result was debated, but it showed fabricated quantum hardware reaching a meaningful scale.",
          "It crystallized both the promise and the manufacturing reality:\n- Sycamore is a fabricated chip of superconducting circuits, chilled to millikelvin temperatures and wired with painstaking care — proof these devices can be built, if not yet easily.\n- Each generation since has chased more qubits and lower error rates, the two things fabrication must improve together.\n- It also sharpened the security timeline: a future fault-tolerant quantum computer could break widely-used encryption, which is exactly why governments and industry are already migrating to post-quantum cryptography — securing today's data against tomorrow's quantum chips.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Qubits, Not Bits", sub: "store quantum states", type: "system" },
          { label: "Superconducting / Ion / Spin", sub: "very different fabrication", type: "attacker" },
          { label: "Fight Decoherence", sub: "purity, cold, shielding", type: "victim" },
          { label: "Scale + Error Correction", sub: "the central challenge", type: "result" },
        ],
      },
      timeline: [
        { year: 1999, event: "First solid-state superconducting qubit demonstrated" },
        { year: 2016, event: "IBM puts a quantum processor on the cloud for public access" },
        { year: 2019, event: "Google's Sycamore claims quantum advantage with 53 qubits", highlight: true },
        { year: 2024, event: "Processors reach hundreds–1000+ qubits; error correction is the focus" },
      ],
      keyTakeaways: [
        "Quantum chips use lithography-like tools but store info in fragile 'qubits' that exploit quantum physics",
        "Major approaches: superconducting (millikelvin, Josephson junctions), trapped ions, and silicon spin qubits (CMOS-like)",
        "Decoherence makes purity, interfaces, and cold/shielding critical — silicon spin qubits even use isotopically pure Si-28",
        "Scaling stable qubits with error correction is the key challenge — and the reason post-quantum cryptography is being adopted now",
      ],
      references: [
        { title: "Quantum computing — Wikipedia", url: "https://en.wikipedia.org/wiki/Quantum_computing" },
        { title: "Superconducting quantum computing", url: "https://en.wikipedia.org/wiki/Superconducting_quantum_computing" },
      ],
    },
    quiz: {
      questions: [
        { id: "si-10-q1", type: "Core Idea", challenge: "Same tools, new rules.", text: "How is quantum chip fabrication related to classical chipmaking?", options: ["It borrows tools like lithography but stores info in fragile qubits using quantum physics", "It is completely unrelated", "It uses no manufacturing at all", "It is exactly the same"], correctIndex: 0, explanation: "Quantum chips reuse many fab tools but the qubits change the materials and constraints." },
        { id: "si-10-q2", type: "Superconducting", challenge: "Very cold circuits.", text: "How are superconducting qubits (IBM, Google) operated?", options: ["As aluminum/niobium circuits cooled to ~millikelvin in a dilution refrigerator", "At room temperature in air", "Inside a normal CPU", "By burning silicon"], correctIndex: 0, explanation: "They use Josephson junctions and must be chilled colder than outer space." },
        { id: "si-10-q3", type: "Approaches", challenge: "Many roads.", text: "Which is a real qubit technology being fabricated?", options: ["Trapped ions held by fields from a micro-fabricated trap chip", "Steam-powered qubits", "Qubits made of wood", "Magnetic tape qubits"], correctIndex: 0, explanation: "Trapped ions, superconducting circuits, and silicon spin qubits are all being built." },
        { id: "si-10-q4", type: "CMOS Link", challenge: "Riding the silicon line.", text: "Why are silicon spin qubits (Intel) appealing for manufacturing?", options: ["They are designed to reuse standard CMOS transistor fabrication", "They need no cooling ever", "They are already perfect", "They use no silicon"], correctIndex: 0, explanation: "Leveraging the existing CMOS base could help scale qubit production." },
        { id: "si-10-q5", type: "The Challenge", challenge: "Fragile states.", text: "What is 'decoherence', the core problem in quantum fabrication?", options: ["The quantum state collapsing due to imperfections, noise, or vibration", "The chip overheating", "Running out of qubits", "A software bug"], correctIndex: 0, explanation: "Fragile qubits make purity, interfaces, and shielding even more critical than in classical chips." },
        { id: "si-10-q6", type: "Security Link", challenge: "Why plan now.", text: "Why does quantum hardware progress drive post-quantum cryptography?", options: ["A future fault-tolerant quantum computer could break today's widely-used encryption", "Quantum chips encrypt automatically", "It makes passwords obsolete instantly", "It has no security impact"], correctIndex: 0, explanation: "The threat of future quantum machines is why organizations are migrating to post-quantum cryptography now." },
      ],
    },
  },
];

// CTF labs — deep, step-by-step technical exercises via the shared mkDeepCtf
// factory. Themed on hardware trust & semiconductor supply-chain security.
const SI_CTF: Record<string, CtfConfig> = {
  "si-01": mkDeepCtf(
    "A wafer fab claims 9N (99.9999999%) pure silicon, but a downstream chip misbehaves. Assay the purity, spot an intentional dopant, and prove a substrate-level hardware trojan.",
    "OP: SUBSTRATE TROJAN\nTarget: 'ultra-pure' silicon feedstock.\nGoal: assay purity, spot the dopant, trace the trojan.\nSequence: assay-purity -> spot-dopant -> trace-trojan",
    "FLAG{9N_S1L1C0N_",
    "Mission Brief",
    ["assay-purity", "D0P4NT_", "Purity Assayed", [
      "$ assay-purity ingot.dat",
      "Target 99.9999999% (9N). Measured a localized region at 99.97% — impurity spike.",
      "Pure silicon is the canvas; contamination changes electrical behavior.",
      "Next: spot-dopant",
    ]],
    ["spot-dopant", "TR0J4N_", "Dopant Spotted", [
      "$ spot-dopant --region hot",
      "Boron concentrated in a precise pattern — not random contamination, but placed.",
      "Dopant-level changes can alter a cell's behavior invisibly to optical inspection.",
      "Next: trace-trojan",
    ]],
    ["trace-trojan", "F0UND}", "Trojan Traced", [
      "$ trace-trojan",
      "The doped region weakens a specific logic cell's RNG — a dopant-level hardware trojan.",
      "Defenses: trusted foundries, dopant-aware inspection, split manufacturing.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Assay purity. Run: assay-purity", "Spot the dopant. Run: spot-dopant", "Trace the trojan. Run: trace-trojan", "Run 'assemble', then submit the flag"],
    { "ingot.dat": "target_purity: 9N (99.9999999%)\nregion_hot: 99.97% (boron spike, patterned)" },
  ),
  "si-02": mkDeepCtf(
    "Yield on a lot crashed. A single dust particle in the cleanroom can kill a die. Scan the wafer, map the defects, and isolate the contamination source.",
    "OP: PARTICLE KILLER\nTarget: a wafer lot with crashing yield.\nGoal: scan, map defects, isolate the particle source.\nSequence: scan-wafer -> map-defects -> isolate-particle",
    "FLAG{CL34NR00M_",
    "Mission Brief",
    ["scan-wafer", "P4RT1CL3_", "Wafer Scanned", [
      "$ scan-wafer w-4471",
      "Defect map shows a tight cluster of dead dies in one quadrant — not random.",
      "At nanometer scales a speck of dust is a boulder.",
      "Next: map-defects",
    ]],
    ["map-defects", "D3F3CT_", "Defects Mapped", [
      "$ map-defects --signature",
      "Cluster signature matches a recurring particle deposited at one process step.",
      "Spatial pattern points straight at the offending tool.",
      "Next: isolate-particle",
    ]],
    ["isolate-particle", "1S0L4T3D}", "Source Isolated", [
      "$ isolate-particle",
      "Traced to a failing HEPA filter on the litho track; replaced it; yield recovers.",
      "Cleanroom discipline (Class 1) is why chips are even possible.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Scan the wafer. Run: scan-wafer", "Map the defects. Run: map-defects", "Isolate the particle. Run: isolate-particle", "Run 'assemble', then submit the flag"],
    { "wafer.txt": "lot: w-4471\ndead_dies: clustered Q3\nsignature: recurring 0.3um particle @ litho" },
  ),
  "si-03": mkDeepCtf(
    "Photolithography prints the circuit by projecting a mask onto the wafer. An overlay error is shifting every layer. Load the mask, check the overlay, and re-align.",
    "OP: PRINT WITH LIGHT\nTarget: a litho step with mis-registered layers.\nGoal: load mask, check overlay, fix alignment.\nSequence: load-mask -> check-overlay -> fix-align",
    "FLAG{L1TH0_",
    "Mission Brief",
    ["load-mask", "0V3RL4Y_", "Mask Loaded", [
      "$ load-mask reticle-M3",
      "Reticle holds the layer pattern; the scanner projects it through optics onto resist.",
      "Each layer must register to the one beneath within a few nm.",
      "Next: check-overlay",
    ]],
    ["check-overlay", "M4SK_", "Overlay Checked", [
      "$ check-overlay",
      "Overlay error = +12nm X, +9nm Y vs target. Vias will miss the metal below.",
      "Mis-registration silently destroys connectivity.",
      "Next: fix-align",
    ]],
    ["fix-align", "4L1GN3D}", "Aligned", [
      "$ fix-align --correct-stage",
      "Applied stage correction; overlay back under 2nm; vias land on target.",
      "Lithography is the heart of the fab — alignment is everything.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Load the mask. Run: load-mask", "Check the overlay. Run: check-overlay", "Fix the alignment. Run: fix-align", "Run 'assemble', then submit the flag"],
    { "overlay.txt": "target: <3nm\nmeasured: X=+12nm Y=+9nm  <-- vias will miss" },
  ),
  "si-04": mkDeepCtf(
    "EUV lithography makes light by blasting molten tin droplets into plasma at 13.5nm. The print is blurry. Fire the source, measure focus, and tune it.",
    "OP: EUV SOURCE\nTarget: an EUV scanner printing blurry features.\nGoal: fire the source, measure focus, tune it.\nSequence: fire-euv -> measure-focus -> tune-source",
    "FLAG{3UV_T1N_",
    "Mission Brief",
    ["fire-euv", "PL4SM4_", "Source Fired", [
      "$ fire-euv",
      "Tin droplets hit by a CO2 laser 50,000x/sec -> plasma emits 13.5nm EUV light.",
      "Shorter wavelength prints smaller features.",
      "Next: measure-focus",
    ]],
    ["measure-focus", "13_5NM_", "Focus Measured", [
      "$ measure-focus",
      "Dose stable but best-focus drifted; critical dimension out of spec -> blur.",
      "At 13.5nm, even all-mirror optics must be perfect.",
      "Next: tune-source",
    ]],
    ["tune-source", "F0CUS3D}", "Source Tuned", [
      "$ tune-source --refocus",
      "Re-focused; CD back in spec; sharp features restored.",
      "EUV is the bleeding edge of physics turned into a factory tool.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Fire the EUV source. Run: fire-euv", "Measure the focus. Run: measure-focus", "Tune the source. Run: tune-source", "Run 'assemble', then submit the flag"],
    { "euv.txt": "wavelength: 13.5nm\nsource: laser-pulsed tin plasma\nfocus: drifted -> CD out of spec" },
  ),
  "si-05": mkDeepCtf(
    "Ion implantation dopes the silicon to make transistors. A saboteur altered the implant dose recipe. Measure the dose, detect the tamper, and recalibrate.",
    "OP: IMPLANT INTEGRITY\nTarget: an ion-implantation recipe.\nGoal: measure dose, detect tamper, recalibrate.\nSequence: measure-dose -> detect-tamper -> recalibrate",
    "FLAG{D0P4NT_D0S3_",
    "Mission Brief",
    ["measure-dose", "1MPL4NT_", "Dose Measured", [
      "$ measure-dose",
      "Implanting boron/phosphorus accelerates ions into the lattice to set conductivity.",
      "Measured dose deviates from the qualified recipe in one zone.",
      "Next: detect-tamper",
    ]],
    ["detect-tamper", "T4MP3R_", "Tamper Detected", [
      "$ detect-tamper --diff-recipe",
      "Recipe hash mismatch: dose for the secure-enclave region was quietly raised.",
      "A doping change can shift threshold voltages — a stealthy backdoor.",
      "Next: recalibrate",
    ]],
    ["recalibrate", "C4UGHT}", "Recalibrated", [
      "$ recalibrate --restore qualified",
      "Restored the signed recipe; re-qualified the tool; tamper logged.",
      "Doping is invisible to the eye — recipe integrity is the control.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Measure the dose. Run: measure-dose", "Detect the tamper. Run: detect-tamper", "Recalibrate. Run: recalibrate", "Run 'assemble', then submit the flag"],
    { "recipe.txt": "qualified_hash: a91f...\ncurrent_hash:   c70e...  <-- mismatch\nzone: secure-enclave dose raised" },
  ),
  "si-06": mkDeepCtf(
    "Chips are built layer by layer with deposition and etch (copper damascene). An etch defect is shorting two layers. Inspect the stack, find the defect, repair it.",
    "OP: LAYER BY LAYER\nTarget: a damascene metal stack with a short.\nGoal: inspect the stack, find the etch defect, repair.\nSequence: inspect-stack -> find-etch-defect -> repair-layer",
    "FLAG{D4M4SC3N3_",
    "Mission Brief",
    ["inspect-stack", "3TCH_", "Stack Inspected", [
      "$ inspect-stack --xsection",
      "Cross-section shows trenches etched, filled with copper, then CMP-polished — repeated per layer.",
      "An unexpected bridge connects M2 to M3.",
      "Next: find-etch-defect",
    ]],
    ["find-etch-defect", "D3F3CT_", "Defect Found", [
      "$ find-etch-defect",
      "Etch under-cleared a via, leaving residual copper that shorts the two metal layers.",
      "Deposition adds, etch removes — get either wrong and the chip fails.",
      "Next: repair-layer",
    ]],
    ["repair-layer", "F1X3D}", "Layer Repaired", [
      "$ repair-layer --rework-etch",
      "Re-etched/cleared the via; short gone; continuity per layer verified.",
      "Modern chips stack 15+ metal layers — each must be perfect.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Inspect the stack. Run: inspect-stack", "Find the etch defect. Run: find-etch-defect", "Repair the layer. Run: repair-layer", "Run 'assemble', then submit the flag"],
    { "stack.txt": "layers: M1..M15 (Cu damascene)\nshort: M2<->M3 (residual Cu in via)" },
  ),
  "si-07": mkDeepCtf(
    "The modern transistor is a 3D gate-all-around FinFET successor. Characterize a suspect standard cell, diff it against the golden layout, and find a hardware trojan.",
    "OP: TRUST THE CELL\nTarget: a standard cell in a GAA process.\nGoal: characterize, diff against golden, find the trojan.\nSequence: characterize-cell -> diff-golden -> find-trojan",
    "FLAG{G4A_C3LL_",
    "Mission Brief",
    ["characterize-cell", "G0LD3N_", "Cell Characterized", [
      "$ characterize-cell AND2_X1",
      "GAA wraps the gate fully around the channel for control at a few nm.",
      "This cell draws slightly more leakage than the library spec.",
      "Next: diff-golden",
    ]],
    ["diff-golden", "H4RDW4R3_", "Diffed vs Golden", [
      "$ diff-golden --layout",
      "Extra transistors hidden in fill area, tied to an internal net — not in the golden layout.",
      "Trojans love to hide in 'empty' fill.",
      "Next: find-trojan",
    ]],
    ["find-trojan", "TR0J4N}", "Trojan Found", [
      "$ find-trojan",
      "The added logic is a trigger that flips an output on a rare input pattern. Confirmed trojan.",
      "Defenses: golden-layout diff, side-channel fingerprinting, trusted EDA + foundry.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Characterize the cell. Run: characterize-cell", "Diff against golden. Run: diff-golden", "Find the trojan. Run: find-trojan", "Run 'assemble', then submit the flag"],
    { "cell.txt": "cell: AND2_X1 (GAA)\nleakage: +8% vs spec\nfill_area: extra transistors on internal net" },
  ),
  "si-08": mkDeepCtf(
    "A giant AI GPU is many chiplets bonded on a CoWoS interposer with HBM stacks. One chiplet looks off. Scan the package, verify provenance, and flag the counterfeit.",
    "OP: CHIPLET PROVENANCE\nTarget: a multi-chiplet AI GPU package.\nGoal: scan, verify each chiplet, flag the fake.\nSequence: scan-package -> verify-chiplet -> flag-counterfeit",
    "FLAG{C0W0S_",
    "Mission Brief",
    ["scan-package", "CH1PL3T_", "Package Scanned", [
      "$ scan-package gpu-x100",
      "8 compute chiplets + 6 HBM stacks on a silicon interposer (CoWoS 2.5D).",
      "One compute chiplet's markings differ subtly.",
      "Next: verify-chiplet",
    ]],
    ["verify-chiplet", "F4K3_", "Chiplet Verified", [
      "$ verify-chiplet --ecid-attest",
      "7 chiplets return valid signed ECIDs; chiplet #5 fails on-die attestation.",
      "No valid root-of-trust = untrusted silicon.",
      "Next: flag-counterfeit",
    ]],
    ["flag-counterfeit", "C0UNT3RF31T}", "Counterfeit Flagged", [
      "$ flag-counterfeit",
      "Chiplet #5 is a re-marked counterfeit slipped in via the packaging supply chain.",
      "Defenses: on-die IDs/attestation, trusted OSAT, provenance tracking.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Scan the package. Run: scan-package", "Verify the chiplets. Run: verify-chiplet", "Flag the counterfeit. Run: flag-counterfeit", "Run 'assemble', then submit the flag"],
    { "package.txt": "interposer: CoWoS 2.5D\ncompute_chiplets: 8\nhbm: 6 stacks\nchiplet#5: ECID attest FAIL" },
  ),
  "si-09": mkDeepCtf(
    "Not every die works; testing and binning set the price. A die passes every functional test — but a security test says otherwise. Run wafer test, bin the dies, and catch the trojan.",
    "OP: TEST & BIN\nTarget: a wafer at final test.\nGoal: run tests, bin dies, catch the hidden trojan.\nSequence: run-wafer-test -> bin-dies -> catch-trojan",
    "FLAG{Y13LD_B1N_",
    "Mission Brief",
    ["run-wafer-test", "FUNCT10N4L_", "Wafer Tested", [
      "$ run-wafer-test",
      "Probed every die: functional pass-rate (yield) = 72%; speed/power measured for binning.",
      "Functional tests check it computes correctly — not that it ONLY does that.",
      "Next: bin-dies",
    ]],
    ["bin-dies", "TR0J4N_", "Dies Binned", [
      "$ bin-dies",
      "Sorted into speed bins. One die is functionally perfect yet draws anomalous power on idle.",
      "A side-channel/security screen catches what functional tests miss.",
      "Next: catch-trojan",
    ]],
    ["catch-trojan", "C4UGHT}", "Trojan Caught", [
      "$ catch-trojan --power-fingerprint",
      "The idle draw is a dormant trojan beaconing — passes function, fails trust. Quarantined.",
      "Yield economics must include a security gate, not just functional tests.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Run wafer test. Run: run-wafer-test", "Bin the dies. Run: bin-dies", "Catch the trojan. Run: catch-trojan", "Run 'assemble', then submit the flag"],
    { "test.txt": "yield: 72%\ndie@(3,7): functional PASS, idle power ANOMALOUS" },
  ),
  "si-10": mkDeepCtf(
    "Quantum chips need exotic fabrication and brutal isolation. Fab a qubit, measure its coherence, and detect tampering that secretly accelerates decoherence.",
    "OP: FAB A QUBIT\nTarget: a superconducting quantum chip.\nGoal: fab, measure coherence, detect tamper.\nSequence: fab-qubit -> measure-coherence -> detect-tamper",
    "FLAG{QUB1T_",
    "Mission Brief",
    ["fab-qubit", "C0H3R3NC3_", "Qubit Fabricated", [
      "$ fab-qubit --josephson",
      "Patterned a transmon (Josephson junction) on sapphire; will run near absolute zero.",
      "Qubits are fragile: any disturbance collapses the state.",
      "Next: measure-coherence",
    ]],
    ["measure-coherence", "T4MP3R_", "Coherence Measured", [
      "$ measure-coherence",
      "T2 coherence time is far below spec for this fab process — something adds noise.",
      "Shorter coherence = fewer usable operations.",
      "Next: detect-tamper",
    ]],
    ["detect-tamper", "D3T3CT3D}", "Tamper Detected", [
      "$ detect-tamper",
      "A material impurity introduced in fab couples noise into the qubit — sabotaged coherence.",
      "Even quantum hardware has a supply chain to defend.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Fab the qubit. Run: fab-qubit", "Measure coherence. Run: measure-coherence", "Detect the tamper. Run: detect-tamper", "Run 'assemble', then submit the flag"],
    { "qubit.txt": "type: transmon (Josephson junction)\nT2_spec: 120us\nT2_measured: 18us  <-- noise added" },
  ),
};

for (const s of siliconFabStages) {
  const ctf = SI_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
