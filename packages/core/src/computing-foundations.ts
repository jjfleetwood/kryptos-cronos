import type { StageConfig, EpochConfig } from "./types";

export const computingFoundationsEpoch: EpochConfig = {
  id: "computing-foundations",
  name: "How Computers Really Work",
  subtitle: "From Electrons to Bits to Code",
  description:
    "The foundation everything else sits on, built from scratch: what electricity actually is, how circuits and transistors switch it, how switches become logic and binary, how logic does math and remembers, how a CPU runs a program, how your code becomes voltages — and why all of it is, underneath, a physical thing an attacker can probe.",
  emoji: "⚡",
  color: "orange",
  unlocked: true,
};

export const computingFoundationsStages: StageConfig[] = [
  // ─── cf-01: Electricity ──────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "Menlo Park — Edison's invention factory", location: "New Jersey, USA", era: "1880s CE", emoji: "⚡" },
    id: "cf-01",
    order: 1,
    title: "The Flow of Electrons",
    subtitle: "What Electricity Actually Is",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-cf-electricity", name: "Electron Wrangler", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "Every computation you have ever run — every password, every video, every hack — was, at the bottom, electrons being pushed around. Before bits and code, there is electricity. Let's start there.",
      year: 2024,
      overview: [
        "Electricity sounds complicated, but the core is simple: it is the movement of tiny charged particles — usually electrons — through a material. Some materials (metals like copper) let electrons flow easily; these are conductors. Others (rubber, glass) hold their electrons tight; these are insulators. A computer is, at heart, a fantastically precise way of steering that flow.",
        "Three words describe electricity, and a water analogy makes them click:\n- Charge — the 'stuff' that flows, like water itself. Electrons carry negative charge.\n- Current — how much charge flows per second, like the rate of water through a pipe (measured in amps).\n- Voltage — the 'push' that drives the flow, like water pressure (measured in volts). No pressure, no flow.",
        "Why start a computing course with physics? Because it never stops being true:\n- A '1' inside your computer is really a higher voltage; a '0' is a lower one. Bits are voltages.\n- Everything a CPU does is open and close microscopic gates to route this flow.\n- And because the flow is physical, it leaks — heat, light, radio waves, timing — which is exactly what hardware attacks exploit later in this track.",
      ],
      technical: {
        title: "Conductors, Voltage, and Ohm's Law",
        body: [
          "A few precise ideas turn the water analogy into real engineering:\n- Conductors vs. insulators — metals have loosely-held electrons free to move; insulators don't. Semiconductors (the next stages) sit in between, and that 'in between' is the whole magic of computers.\n- A circuit — electrons only flow in a complete loop from a source (battery, power supply) and back. Break the loop and the flow stops; that is what a switch does.\n- Direction — by convention 'current' flows from + to −, even though the electrons themselves drift the other way (a quirk of history from Benjamin Franklin's guess).",
          "Ohm's Law is the one equation worth meeting early, because it governs everything downstream:\n- It states Voltage = Current × Resistance (V = I × R): push harder (more volts) and more current flows; add resistance and current drops.\n- Resistance is how much a material fights the flow, turning some electrical energy into heat — which is why computers get warm and need cooling.\n- That heat is not just an annoyance: it is wasted energy, a physical signal, and ultimately the limit on how fast and small chips can get.",
        ],
      },
      incident: {
        title: "The War of the Currents — How Electricity Got Standardized",
        when: "1880s–1890s",
        where: "United States",
        impact: "Edison's DC vs. Tesla/Westinghouse's AC battle set the electrical standards that still power every computer",
        body: [
          "Before electricity could power anything reliably, the world had to agree on how to deliver it. Thomas Edison championed direct current (DC), where electrons flow one steady direction. Nikola Tesla and George Westinghouse backed alternating current (AC), where the flow rapidly reverses — which travels over long distances far more efficiently.",
          "AC won the grid, but the story shaped computing in a lasting way:\n- Your wall socket delivers AC, but every computer chip runs on steady, low-voltage DC — so a power supply converts and tames the wall's AC into the clean DC a CPU needs.\n- The need for stable, precise voltages is why power supplies and voltage regulators are critical, sensitive components.\n- It also foreshadows a security theme: because chips are so sensitive to their exact voltage, deliberately glitching the power (a 'fault injection' attack, later in this track) can make them misbehave on command.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Voltage (push)", sub: "the electrical 'pressure'", type: "system" },
          { label: "Electrons Flow", sub: "current through a conductor", type: "attacker" },
          { label: "Resistance", sub: "fights flow, makes heat", type: "victim" },
          { label: "A '1' or '0'", sub: "just a higher/lower voltage", type: "result" },
        ],
      },
      timeline: [
        { year: 1752, event: "Franklin's kite links lightning and electricity (and mislabels current's direction)" },
        { year: 1827, event: "Georg Ohm publishes Ohm's Law: V = I × R" },
        { year: 1891, event: "AC power triumphs at the Niagara Falls and World's Fair demonstrations", highlight: true },
        { year: 1947, event: "The transistor turns controlled electron flow into computing" },
      ],
      keyTakeaways: [
        "Electricity is the flow of charged particles (electrons) through conductors — computers steer that flow",
        "Voltage is the push, current is the flow rate, resistance fights it (and makes heat): V = I × R",
        "Inside a computer a '1' is a higher voltage and a '0' is a lower one — bits are literally voltages",
        "Because the flow is physical, it leaks heat, light, and timing — the seeds of hardware attacks",
      ],
      references: [
        { title: "Electricity basics — U.S. Energy Information Administration", url: "https://www.eia.gov/energyexplained/electricity/" },
        { title: "Ohm's Law explained — Khan Academy", url: "https://www.khanacademy.org/science/physics/circuits-topic" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-01-q1", type: "Core Idea", challenge: "What it is.", text: "What is electricity, fundamentally?", options: ["The movement of charged particles (usually electrons) through a material", "A type of software", "Stored sunlight", "A kind of magnet"], correctIndex: 0, explanation: "Electric current is electrons flowing through a conductor — the basis of all computing." },
        { id: "cf-01-q2", type: "Vocabulary", challenge: "The push.", text: "In the water analogy, voltage is like…", options: ["Water pressure — the push that drives the flow", "The pipe itself", "The temperature of the water", "The color of the water"], correctIndex: 0, explanation: "Voltage is the electrical 'pressure'; without it, no current flows." },
        { id: "cf-01-q3", type: "Materials", challenge: "Letting it flow.", text: "What is a conductor?", options: ["A material that lets electrons flow easily (like copper)", "A material that blocks all electricity", "A type of battery", "A computer program"], correctIndex: 0, explanation: "Conductors have loosely-held electrons; insulators hold theirs tightly." },
        { id: "cf-01-q4", type: "Bits", challenge: "The big link.", text: "Inside a computer, what is a binary '1' physically?", options: ["A higher voltage level", "A printed number", "A sound", "A magnet pointing north"], correctIndex: 0, explanation: "Bits are voltages: a '1' is a higher voltage, a '0' is a lower one." },
        { id: "cf-01-q5", type: "Ohm's Law", challenge: "The equation.", text: "Ohm's Law says voltage equals…", options: ["Current × Resistance (V = I × R)", "Current + Resistance", "Current ÷ Voltage", "Resistance × Heat"], correctIndex: 0, explanation: "V = I × R relates the push, the flow, and the material's resistance." },
        { id: "cf-01-q6", type: "Security Seed", challenge: "Why it matters later.", text: "Why does electricity being physical matter for security?", options: ["The flow leaks heat, light, and timing that attacks can exploit", "It makes passwords longer", "It encrypts data automatically", "It has no security relevance"], correctIndex: 0, explanation: "Physical side effects of computation (power, EM, timing) are the basis of hardware side-channel attacks." },
      ],
    },
  },

  // ─── cf-02: Circuits ─────────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "The first electrical engineering labs", location: "Cambridge, Massachusetts, USA", era: "Early 1900s CE", emoji: "🔌" },
    id: "cf-02",
    order: 2,
    title: "Closing the Loop",
    subtitle: "Circuits, Components & the Switch",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-cf-circuits", name: "Circuit Closer", emoji: "🔌" },
    challengeType: "quiz",
    info: {
      tagline: "Electricity only does useful work when it flows in a complete loop — a circuit. Control where and when that loop closes, and you can control anything. A computer is millions of tiny loops opening and closing billions of times a second.",
      year: 2024,
      overview: [
        "A circuit is simply a complete path that electrons can flow around, from a power source and back. Break the path anywhere and the flow stops instantly. That on/off control is the single most important idea in all of computing: a switch decides whether the loop is closed (current flows, '1') or open (no current, '0').",
        "A handful of basic components shape the flow, each with a job:\n- A source — a battery or power supply provides the voltage push.\n- A switch — opens or closes the loop; the ancestor of every bit in your computer.\n- A resistor — deliberately limits current (protecting parts, setting levels).\n- A wire — the low-resistance path the electrons travel.\n- A load — the thing being powered (a bulb, a buzzer, or a billion transistors).",
        "Why obsess over a humble switch? Because computing is switches all the way down:\n- A light switch is a human-operated bit: on or off.\n- The breakthrough of computers was replacing the human finger with an electrical switch — one that another electrical signal can flip, billions of times per second.\n- Everything ahead — logic gates, memory, processors — is built from switches controlling other switches. Master 'the loop opens or closes', and the rest follows.",
      ],
      technical: {
        title: "Series, Parallel, and Controlled Switching",
        body: [
          "Two ways to wire components change how the flow behaves:\n- Series — components in a single line; the same current flows through all of them, and if one breaks the whole loop opens (old Christmas lights where one dead bulb kills the string).\n- Parallel — components on separate branches; each gets the full voltage and they work independently (your home's outlets, so one device failing doesn't kill the rest).\n- These patterns let designers route and divide current precisely — the basis of building complex behavior from simple parts.",
          "The leap to computing is the controlled switch:\n- A normal switch needs a hand. A relay (an electrically-operated switch) uses one circuit to flip another — electricity controlling electricity.\n- Early computers were built from thousands of relays and vacuum tubes doing exactly this, clacking and glowing as they computed.\n- The transistor (next stage) is the same idea shrunk to microscopic, silent, ultra-fast, and ultra-cheap — which is why a chip can hold billions of them.",
        ],
      },
      incident: {
        title: "The Relay Computers — and the First Literal 'Bug'",
        when: "1940s",
        where: "Harvard and Bell Labs, USA",
        impact: "Room-sized relay and tube computers proved electrical switching could compute — and coined a word we still use",
        body: [
          "Before silicon, computers were built from electromechanical relays and vacuum tubes — physical switches by the thousands. Machines like the Harvard Mark I and ENIAC filled entire rooms, drew enormous power, and ran hot enough to need serious cooling, all to do what a modern phone does instantly.",
          "One famous moment captured how physical these machines were:\n- In 1947, operators of the Harvard Mark II found a moth trapped in a relay, stopping it from switching properly. They taped the moth into the logbook, labeling it 'first actual case of bug being found'.\n- The word 'bug' for a fault predates this, but the story stuck because it was literally true — a physical insect breaking an electrical loop.\n- It is a vivid reminder that under all the abstraction, a computer is electricity flowing through switches that can fail in physical ways.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Power Source", sub: "provides the voltage", type: "system" },
          { label: "Closed Loop", sub: "current flows = '1'", type: "result" },
          { label: "Switch Opens", sub: "loop broken = '0'", type: "victim" },
          { label: "Controlled Switch", sub: "electricity flips electricity", type: "attacker" },
        ],
      },
      timeline: [
        { year: 1835, event: "The relay invented — one circuit electrically controls another" },
        { year: 1937, event: "Claude Shannon shows electrical switches can do Boolean logic" },
        { year: 1945, event: "ENIAC: ~18,000 vacuum-tube switches fill a room" },
        { year: 1947, event: "A moth in a relay becomes the 'first computer bug'", highlight: true },
      ],
      keyTakeaways: [
        "A circuit is a complete loop electrons flow around; a switch opens or closes it — the root of every bit",
        "Basic components: source (push), switch (control), resistor (limit), wire (path), load (the work)",
        "Series shares one current path; parallel gives each branch full voltage independently",
        "The key leap was the controlled switch (relay → transistor): electricity flipping other electricity",
      ],
      references: [
        { title: "Circuits — basics and components (SparkFun)", url: "https://learn.sparkfun.com/tutorials/what-is-a-circuit" },
        { title: "Claude Shannon and switching logic — history", url: "https://www.ithistory.org/honor-roll/claude-shannon" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-02-q1", type: "Core Idea", challenge: "The loop.", text: "What is an electrical circuit?", options: ["A complete loop electrons can flow around, from a source and back", "A single straight wire with no return", "A type of software loop", "A kind of battery"], correctIndex: 0, explanation: "Current only flows in a closed loop; breaking it anywhere stops the flow." },
        { id: "cf-02-q2", type: "The Switch", challenge: "On and off.", text: "Why is the switch the most important component for computing?", options: ["It controls whether the loop is closed ('1') or open ('0') — a bit", "It makes electricity faster", "It stores photos", "It cools the circuit"], correctIndex: 0, explanation: "A switch is a physical bit; computing is switches controlling switches." },
        { id: "cf-02-q3", type: "Wiring", challenge: "One path.", text: "In a series circuit, what happens if one component breaks?", options: ["The whole loop opens and current stops", "Only that component stops; others continue", "Voltage doubles", "Nothing changes"], correctIndex: 0, explanation: "Series shares one path, so a single break kills the entire loop." },
        { id: "cf-02-q4", type: "Controlled Switch", challenge: "Electricity flipping electricity.", text: "What does a relay do?", options: ["Uses one circuit to electrically switch another", "Stores data permanently", "Generates electricity", "Measures temperature"], correctIndex: 0, explanation: "A relay is an electrically-operated switch — the ancestor of the transistor." },
        { id: "cf-02-q5", type: "History", challenge: "Before silicon.", text: "What were early computers like ENIAC built from?", options: ["Thousands of relays and vacuum tubes (physical switches)", "Silicon microchips", "Quantum qubits", "Magnetic tape only"], correctIndex: 0, explanation: "They used room-sized banks of electromechanical and tube switches before transistors." },
        { id: "cf-02-q6", type: "Trivia", challenge: "A literal bug.", text: "The famous 1947 'first computer bug' was…", options: ["A real moth stuck in a relay, breaking the switching", "A software typo", "A virus", "A power outage"], correctIndex: 0, explanation: "Operators taped the moth into the logbook — a physical insect breaking an electrical loop." },
      ],
    },
  },

  // ─── cf-03: Transistors ──────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "Bell Labs — birthplace of the transistor", location: "Murray Hill, New Jersey, USA", era: "1947 CE", emoji: "🔺" },
    id: "cf-03",
    order: 3,
    title: "The Switch That Changed Everything",
    subtitle: "Transistors & Semiconductors",
    category: "cybersecurity",
    xp: 135,
    badge: { id: "badge-cf-transistor", name: "Transistor Tamer", emoji: "🔺" },
    challengeType: "quiz",
    info: {
      tagline: "The transistor is the most important invention you never think about. It is a switch with no moving parts, flipped by electricity itself, shrinkable to a few atoms wide — and your phone holds tens of billions of them.",
      year: 2024,
      overview: [
        "A transistor is a tiny electrical switch with no moving parts. A small voltage on one terminal (the 'gate') controls whether current can flow between the other two — letting one signal turn another on or off. That is the relay's idea, but made microscopic, silent, fast, and almost free to mass-produce. Everything modern flows from this.",
        "The trick lives in a special material — the semiconductor:\n- Silicon normally conducts only a little. By deliberately adding impurities ('doping'), engineers create regions that carry charge in controllable ways.\n- Arrange these doped regions cleverly and a small gate voltage can switch a much larger current on or off.\n- That controllability is why it is called a semiconductor: not quite a conductor, not quite an insulator — exactly the in-between needed for a switch.",
        "Two superpowers made the transistor civilization-changing:\n- Switching — used as an on/off gate, it is the physical bit behind all digital logic.\n- Shrinking — transistors can be made astonishingly small and packed by the billions on a fingernail-sized chip, getting faster and cheaper as they shrink (the engine behind Moore's Law).\n- A 1950s computer used room-sized racks of tubes; today an equivalent switch is a few dozen atoms across and one of billions on a single chip.",
      ],
      technical: {
        title: "How a Transistor Switches",
        body: [
          "The dominant type in chips is the MOSFET, and its operation is intuitive:\n- It has three terminals — source, drain, and gate. Current wants to flow from source to drain.\n- A voltage on the gate creates (or removes) a conducting channel between source and drain — opening or closing the switch without anything moving.\n- No gate voltage → channel closed → no current → '0'. Gate voltage applied → channel open → current flows → '1'.",
          "Why this design conquered computing:\n- It is voltage-controlled, so it sips almost no power to hold a state — crucial when you have billions of them.\n- It is binary-friendly: cleanly off or cleanly on, ideal for representing 0 and 1 without ambiguity.\n- But it is also physical and imperfect — tiny leakage currents, heat, and behavior that shifts with voltage and temperature. Those imperfections are exactly the cracks that side-channel and fault attacks pry open later in this track.",
        ],
      },
      incident: {
        title: "1947 — Three Physicists Invent the Future at Bell Labs",
        when: "December 1947",
        where: "Bell Telephone Laboratories, New Jersey",
        impact: "Bardeen, Brattain, and Shockley's transistor replaced bulky tubes and launched the entire digital age",
        body: [
          "On December 23, 1947, John Bardeen and Walter Brattain, working under William Shockley at Bell Labs, demonstrated the first working transistor — a small germanium device that could amplify and switch electrical signals. It won the trio the 1956 Nobel Prize in Physics.",
          "The consequences are hard to overstate:\n- Transistors replaced fragile, hot, power-hungry vacuum tubes, making computers smaller, cheaper, and reliable enough to spread everywhere.\n- The integrated circuit (1958) then put many transistors on one chip, and relentless shrinking followed for decades.\n- Every later stage of this track — logic, memory, CPUs — and the entire security field exists because this one switch could be made tiny and abundant. It is the literal bedrock of the digital world.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Gate Voltage", sub: "the controlling signal", type: "system" },
          { label: "Channel Forms", sub: "in the semiconductor", type: "attacker" },
          { label: "Source → Drain", sub: "current flows = '1'", type: "result" },
          { label: "No Gate Voltage", sub: "channel closed = '0'", type: "victim" },
        ],
      },
      timeline: [
        { year: 1947, event: "First working transistor demonstrated at Bell Labs", highlight: true },
        { year: 1958, event: "The integrated circuit puts multiple transistors on one chip" },
        { year: 1965, event: "Moore's Law: transistor counts double roughly every two years" },
        { year: 2024, event: "Leading chips pack 100+ billion transistors, a few atoms wide" },
      ],
      keyTakeaways: [
        "A transistor is a switch with no moving parts — a small gate voltage controls a larger current",
        "It works because semiconductors (doped silicon) can be made to conduct controllably",
        "Its superpowers are switching (the physical bit) and shrinking (billions per chip, ever cheaper)",
        "Transistors are physical and imperfect (leakage, heat) — the cracks hardware attacks later exploit",
      ],
      references: [
        { title: "The transistor — Nobel Prize (1956)", url: "https://www.nobelprize.org/prizes/physics/1956/summary/" },
        { title: "How transistors work — Computerphile / explainer", url: "https://www.ibm.com/topics/transistor" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-03-q1", type: "Core Idea", challenge: "What it is.", text: "What is a transistor?", options: ["A tiny switch with no moving parts, flipped by a voltage", "A type of battery", "A mechanical lever", "A storage disk"], correctIndex: 0, explanation: "A small gate voltage controls whether current flows — an electrical switch." },
        { id: "cf-03-q2", type: "Material", challenge: "The in-between.", text: "Why is silicon called a semiconductor?", options: ["It conducts controllably — between a full conductor and an insulator", "It is half metal, half plastic", "It only works at night", "It conducts perfectly always"], correctIndex: 0, explanation: "Doping silicon makes it conduct in controllable ways, ideal for switching." },
        { id: "cf-03-q3", type: "Operation", challenge: "Opening the gate.", text: "In a MOSFET, what does a voltage on the gate do?", options: ["Creates a channel so current can flow source-to-drain (switch on)", "Permanently destroys the transistor", "Stores a file", "Cools the chip"], correctIndex: 0, explanation: "Gate voltage forms a conducting channel — gate off means no channel, no current, a '0'." },
        { id: "cf-03-q4", type: "Why It Won", challenge: "Two superpowers.", text: "What two properties made transistors revolutionary?", options: ["Switching cleanly (0/1) and shrinking (billions per chip)", "Color and weight", "Sound and smell", "Being large and slow"], correctIndex: 0, explanation: "Clean binary switching plus relentless shrinking drove the entire digital age." },
        { id: "cf-03-q5", type: "History", challenge: "Where it began.", text: "Where was the transistor invented in 1947?", options: ["Bell Labs (Bardeen, Brattain, Shockley)", "Apple", "NASA", "Intel"], correctIndex: 0, explanation: "The Bell Labs trio won the 1956 Nobel Prize for it." },
        { id: "cf-03-q6", type: "Security Seed", challenge: "Imperfect by nature.", text: "Why do transistor imperfections matter for security?", options: ["Leakage, heat, and voltage-dependent behavior become side-channel and fault-attack cracks", "They make passwords stronger", "They have no effect", "They speed up encryption"], correctIndex: 0, explanation: "Physical imperfections leak information and can be glitched — the basis of hardware attacks." },
      ],
    },
  },

  // ─── cf-04: Logic Gates ──────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "Shannon's master's thesis at MIT", location: "Cambridge, Massachusetts, USA", era: "1937 CE", emoji: "🚪" },
    id: "cf-04",
    order: 4,
    title: "From Switches to Logic",
    subtitle: "Logic Gates — AND, OR, NOT",
    category: "cybersecurity",
    xp: 135,
    badge: { id: "badge-cf-gates", name: "Logic Gate Keeper", emoji: "🚪" },
    challengeType: "quiz",
    info: {
      tagline: "Wire a few transistors together a certain way and something magical happens: the circuit starts making decisions. AND, OR, NOT — these logic gates are where raw electricity becomes reasoning.",
      year: 2024,
      overview: [
        "A logic gate is a small circuit, built from transistors, that takes one or more bits in and produces a bit out according to a fixed rule. They are the first step from 'electricity flowing' to 'computer thinking'. With just three basic gates you can build every decision a computer ever makes.",
        "The three foundational gates are easy to feel intuitively:\n- NOT — flips the input. Give it 1, get 0; give it 0, get 1. (An inverter.)\n- AND — outputs 1 only if all inputs are 1. ('Both must be true.')\n- OR — outputs 1 if at least one input is 1. ('Either will do.')\n- Combine them and you also get NAND, NOR, and XOR (true when inputs differ) — the everyday workhorses of real chips.",
        "Why is this such a big deal? Because logic gates are universal:\n- Any decision you can describe with 'and / or / not' can be wired as gates.\n- In fact a single gate type (NAND or NOR) can build all the others — so an entire computer can be made from billions of copies of one simple gate.\n- This is the bridge from physics to computer science: George Boole's 1850s logic, married to Shannon's switches, becomes a machine that reasons.",
      ],
      technical: {
        title: "Truth Tables and Universality",
        body: [
          "A gate is fully defined by its 'truth table' — every input combination and its output:\n- AND(0,0)=0, AND(0,1)=0, AND(1,0)=0, AND(1,1)=1 — only all-ones gives one.\n- OR(0,0)=0, OR(0,1)=1, OR(1,0)=1, OR(1,1)=1 — any one gives one.\n- XOR(1,1)=0 but XOR(1,0)=1 — true only when inputs differ, the key to addition (next stage).\n- These tables are exact and deterministic: same inputs always give the same output.",
          "The deep result that makes computers possible is 'functional completeness':\n- NAND (NOT-AND) alone can construct NOT, AND, OR, and therefore any logic function whatsoever.\n- So a chip designer can, in principle, build the entire machine from one repeated building block — enormously simplifying manufacturing.\n- Real chips use a mix for efficiency, but the principle stands: unimaginable complexity (a whole CPU) is built by composing one trivially simple, perfectly predictable operation, billions of times.",
        ],
      },
      incident: {
        title: "1937 — Claude Shannon Marries Logic to Circuits",
        when: "1937",
        where: "MIT, Massachusetts",
        impact: "A master's thesis showed electrical switches could implement Boolean logic — founding digital circuit design",
        body: [
          "As a 21-year-old graduate student, Claude Shannon realized that the on/off behavior of electrical switches perfectly matched the true/false values of Boolean algebra, a system of logic invented by George Boole in the 1850s with no machine in mind. His 1937 master's thesis showed how to design circuits that compute any logical expression.",
          "It has been called the most important master's thesis of the 20th century:\n- It turned circuit design from intuition and trial-and-error into a precise mathematical discipline.\n- It is the reason engineers can design a processor with billions of gates and have it work exactly as planned.\n- Shannon went on to found information theory too — but this single insight, that switches can do logic, is the foundation under every digital device you own.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Bits In", sub: "0s and 1s as voltages", type: "system" },
          { label: "Transistors Wired as a Gate", sub: "AND / OR / NOT", type: "attacker" },
          { label: "Truth-Table Rule", sub: "fixed, deterministic output", type: "victim" },
          { label: "A Decision", sub: "one bit out", type: "result" },
        ],
      },
      timeline: [
        { year: 1854, event: "George Boole publishes Boolean algebra — logic as math, no machine in mind" },
        { year: 1937, event: "Shannon links Boolean logic to electrical switches", highlight: true },
        { year: 1958, event: "Logic gates packed onto integrated circuits" },
        { year: 2024, event: "Modern CPUs implement billions of gates from a few transistor patterns" },
      ],
      keyTakeaways: [
        "A logic gate is a transistor circuit that turns input bits into an output bit by a fixed rule",
        "The basics — NOT, AND, OR (plus NAND, NOR, XOR) — express any 'and/or/not' decision",
        "Gates are universal: NAND alone can build every other gate, so one block makes a whole computer",
        "Shannon (1937) showed switches can do Boolean logic — the bridge from physics to computer science",
      ],
      references: [
        { title: "Logic gates — basics (Khan Academy / Nand2Tetris)", url: "https://www.nand2tetris.org/" },
        { title: "Claude Shannon's 1937 thesis — MIT", url: "https://www.ithistory.org/honor-roll/claude-shannon" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-04-q1", type: "Core Idea", challenge: "What it does.", text: "What is a logic gate?", options: ["A small transistor circuit that turns input bits into an output bit by a fixed rule", "A physical door on the case", "A type of battery", "A storage device"], correctIndex: 0, explanation: "Gates are where electricity starts 'making decisions' according to truth tables." },
        { id: "cf-04-q2", type: "AND", challenge: "Both must be true.", text: "An AND gate outputs 1 when…", options: ["All of its inputs are 1", "Any input is 1", "All inputs are 0", "Never"], correctIndex: 0, explanation: "AND requires every input to be 1 — 'both must be true'." },
        { id: "cf-04-q3", type: "NOT", challenge: "The flip.", text: "What does a NOT gate do?", options: ["Flips the input: 1 becomes 0 and 0 becomes 1", "Adds two numbers", "Stores a bit", "Doubles the voltage"], correctIndex: 0, explanation: "NOT (an inverter) outputs the opposite of its input." },
        { id: "cf-04-q4", type: "Universality", challenge: "One block to rule them all.", text: "Why is NAND special?", options: ["Alone it can build every other gate — a whole computer from one block", "It is the fastest gate", "It uses no electricity", "It only works with NOT"], correctIndex: 0, explanation: "NAND is functionally complete: NOT, AND, OR, and all logic can be made from it." },
        { id: "cf-04-q5", type: "Determinism", challenge: "Always the same.", text: "What's true of a gate's truth table?", options: ["The same inputs always produce the same output", "Outputs are random", "It changes daily", "It depends on the weather"], correctIndex: 0, explanation: "Gates are deterministic — fixed, predictable rules are what make reliable computers possible." },
        { id: "cf-04-q6", type: "History", challenge: "The big marriage.", text: "What did Shannon's 1937 thesis show?", options: ["Electrical switches can implement Boolean (true/false) logic", "How to build a battery", "That computers need vacuum tubes forever", "How to write software"], correctIndex: 0, explanation: "It united Boole's logic with switches — founding digital circuit design." },
      ],
    },
  },

  // ─── cf-05: Binary ───────────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "Leibniz's binary manuscripts", location: "Hanover, Germany", era: "1703 CE", emoji: "🔢" },
    id: "cf-05",
    order: 5,
    title: "Counting in Twos",
    subtitle: "Binary, Bits & Bytes",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-cf-binary", name: "Binary Native", emoji: "🔢" },
    challengeType: "quiz",
    info: {
      tagline: "A switch only knows two states: on or off, 1 or 0. So computers count, write, draw, and speak using nothing but those two symbols. Once you see how, the whole machine stops being magic.",
      year: 2024,
      overview: [
        "Computers use binary — a number system with only two digits, 0 and 1 — because that maps perfectly onto a switch's two states. Each 0 or 1 is a 'bit' (binary digit). It feels limiting compared to our ten-digit system, but with enough bits you can represent any number, letter, image, or sound.",
        "Counting in binary is just counting with two symbols instead of ten:\n- In our system each place is worth ten times more (1, 10, 100). In binary each place is worth two times more (1, 2, 4, 8, 16…).\n- So 1011 means 8 + 0 + 2 + 1 = 11. Every number has a binary spelling.\n- Bits are grouped for convenience: 8 bits make a byte, which can hold 256 different values (2^8) — enough for one character of text.",
        "Everything in a computer is ultimately bits, encoded by agreed-upon rules:\n- Text — each character gets a number (ASCII/Unicode); 'A' is 65, stored as 01000001.\n- Images — each pixel is numbers for red, green, blue brightness.\n- Sound — the air-pressure wave is measured thousands of times a second, each measurement a number.\n- The profound idea: a single physical thing (patterns of high/low voltage) can represent anything, as long as everyone agrees on the code.",
      ],
      technical: {
        title: "Place Value, Bytes, and Encoding",
        body: [
          "Binary place value is the whole trick, and it is simpler than it looks:\n- Reading right to left, the places are worth 1, 2, 4, 8, 16, 32, 64, 128 — each double the last.\n- Add up the places where there's a 1: 11010 = 16 + 8 + 0 + 2 + 0 = 26.\n- n bits represent 2^n different values: 8 bits → 256, 16 bits → 65,536, 32 bits → ~4.3 billion.",
          "Encodings are the shared rulebooks that give bits meaning:\n- The same byte 01000001 is the number 65, the letter 'A', or a shade of gray — context (the encoding) decides which.\n- This is why a file opened with the wrong program looks like garbage: the bits are fine, but the interpretation is wrong.\n- It also matters for security: attackers exploit confusion between encodings, and secrets are 'just bits' that look random — which is why a leaked pattern of bits, or even their physical traces, can betray a key.",
        ],
      },
      incident: {
        title: "1703 — Leibniz Invents Binary, Centuries Early",
        when: "1703",
        where: "Hanover, Germany",
        impact: "Gottfried Leibniz formalized binary arithmetic 240 years before it would power the first electronic computers",
        body: [
          "The mathematician and philosopher Gottfried Wilhelm Leibniz published a full system of binary arithmetic in 1703, showing how to represent any number and do math with only 0 and 1. He found it beautiful and even saw a kind of philosophy in it — something from nothing, all numbers from two symbols.",
          "He had no machine to run it on, but the foresight was extraordinary:\n- Binary sat as a mathematical curiosity for two centuries until electrical switches gave it a physical home.\n- When Shannon and the early computer builders needed a number system that matched on/off switches, binary was waiting, fully worked out.\n- It is a striking example of pure ideas arriving long before the technology to use them — and a reminder that today's computing rests on centuries of accumulated thought, not just recent invention.",
        ],
      },
      diagram: {
        nodes: [
          { label: "A Switch: On/Off", sub: "two states only", type: "system" },
          { label: "A Bit: 1/0", sub: "the smallest unit", type: "attacker" },
          { label: "8 Bits = 1 Byte", sub: "256 possible values", type: "victim" },
          { label: "Numbers, Text, Images", sub: "all encoded as bits", type: "result" },
        ],
      },
      timeline: [
        { year: 1703, event: "Leibniz formalizes binary arithmetic", highlight: true },
        { year: 1937, event: "Switches give binary a physical home in circuits" },
        { year: 1963, event: "ASCII standardizes text-to-bits encoding" },
        { year: 1991, event: "Unicode begins encoding every language's characters as bits" },
      ],
      keyTakeaways: [
        "Binary uses only 0 and 1 because that matches a switch's two states; each digit is a 'bit'",
        "Binary place values double (1,2,4,8…); n bits represent 2^n values; 8 bits = 1 byte = 256 values",
        "Text, images, and sound are all bits, given meaning by agreed encodings (ASCII, Unicode, RGB)",
        "Secrets are 'just bits' — so leaked bit patterns or their physical traces can betray information",
      ],
      references: [
        { title: "Binary numbers explained — Khan Academy", url: "https://www.khanacademy.org/computing/computers-and-internet" },
        { title: "Leibniz and binary arithmetic — history", url: "https://www.britannica.com/technology/binary-code" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-05-q1", type: "Core Idea", challenge: "Why two.", text: "Why do computers use binary (0 and 1)?", options: ["It matches a switch's two states: off and on", "Because two is a lucky number", "To save electricity only", "Because humans have two hands"], correctIndex: 0, explanation: "Each bit maps directly onto a transistor switch being off (0) or on (1)." },
        { id: "cf-05-q2", type: "Vocabulary", challenge: "Names.", text: "What is a 'bit'?", options: ["A single binary digit — one 0 or 1", "Eight bytes", "A small computer", "A type of file"], correctIndex: 0, explanation: "A bit is the smallest unit; 8 bits make a byte." },
        { id: "cf-05-q3", type: "Place Value", challenge: "Reading binary.", text: "What number is binary 1011?", options: ["11 (8 + 2 + 1)", "1011", "23", "4"], correctIndex: 0, explanation: "Places are 8,4,2,1; the 1s are at 8, 2, and 1 → 11." },
        { id: "cf-05-q4", type: "Capacity", challenge: "How much fits.", text: "How many values can 8 bits (one byte) represent?", options: ["256 (2^8)", "8", "100", "1,000"], correctIndex: 0, explanation: "n bits give 2^n values; 8 bits = 256." },
        { id: "cf-05-q5", type: "Encoding", challenge: "Same bits, different meaning.", text: "Why can the same byte be a number, a letter, or a color?", options: ["The encoding (agreed rulebook) decides how the bits are interpreted", "Bytes randomly change meaning", "Computers guess", "It can't — bytes are only numbers"], correctIndex: 0, explanation: "Encodings like ASCII or RGB give identical bits different meanings by context." },
        { id: "cf-05-q6", type: "History", challenge: "Ahead of its time.", text: "Who formalized binary arithmetic in 1703?", options: ["Gottfried Leibniz — 240 years before electronic computers", "Steve Jobs", "Alan Turing", "Isaac Newton"], correctIndex: 0, explanation: "Leibniz worked out binary centuries before switches gave it a physical home." },
      ],
    },
  },

  // ─── cf-06: Adders / ALU ─────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "The dawn of digital arithmetic", location: "Iowa State / Bletchley Park", era: "1940s CE", emoji: "➕" },
    id: "cf-06",
    order: 6,
    title: "Doing Math with Logic",
    subtitle: "Adders & the Arithmetic Logic Unit",
    category: "cybersecurity",
    xp: 135,
    badge: { id: "badge-cf-alu", name: "Arithmetic Architect", emoji: "➕" },
    challengeType: "quiz",
    info: {
      tagline: "Here is the moment it all comes together: a handful of logic gates, wired just so, can add two numbers. From that one trick — addition built from AND, OR, and XOR — grows every calculation a computer does.",
      year: 2024,
      overview: [
        "We have bits (binary), and we have gates (logic). Now watch them combine into arithmetic. Adding in binary follows the same rules you learned as a child: add column by column, carry when you overflow. The astonishing part is that this is exactly what a few logic gates do — no 'math chip' required, just clever wiring of switches.",
        "Binary addition has only four cases per column, and gates handle them perfectly:\n- 0+0 = 0, 0+1 = 1, 1+0 = 1 — these are just an XOR (output the sum bit).\n- 1+1 = 10 — the column is 0 and you 'carry the 1', which an AND gate detects.\n- Wire an XOR (for the sum) and an AND (for the carry) together and you have a 'half adder' — a circuit that adds two bits.\n- Chain 'full adders' (which also accept a carry coming in) and you can add numbers of any size.",
        "Scale that idea up and you get the heart of the processor:\n- The Arithmetic Logic Unit (ALU) is the part of a CPU that does math and logic — add, subtract, compare, AND, OR.\n- Subtraction, multiplication, and comparison are all built from the same gate-level tricks (subtraction is clever adding).\n- So the chip that runs your spreadsheet, your game, and your encryption is, at its core, vast fields of adders and gates — pure logic doing arithmetic.",
      ],
      technical: {
        title: "Half Adders, Full Adders, and the ALU",
        body: [
          "Building an adder is a satisfying piece of engineering:\n- Half adder — inputs A and B; XOR gives the sum bit, AND gives the carry. It can't accept a carry-in, so it only works for the rightmost column.\n- Full adder — inputs A, B, and carry-in; produces a sum and a carry-out, so it handles any column.\n- Ripple-carry adder — chain n full adders, each passing its carry to the next, and you add two n-bit numbers. Real CPUs use faster 'carry-lookahead' designs, but the logic is the same.",
          "The ALU and why this matters beyond math:\n- The ALU bundles adders and gate logic with a control signal that selects the operation (add, subtract, AND, compare…).\n- Comparisons (is A greater than B? equal?) drive every 'if' and loop in software — they are just subtractions whose result is checked.\n- For security this is foundational: cryptography is arithmetic, and the exact way the ALU performs it — how long an operation takes, how much power it draws — can leak the secret numbers involved, which is the entire premise of timing and power attacks later in this track.",
        ],
      },
      incident: {
        title: "Colossus and the Arithmetic That Won a War",
        when: "1943–1945",
        where: "Bletchley Park, United Kingdom",
        impact: "The first programmable electronic digital computer used logic circuits to break German codes, shortening WWII",
        body: [
          "At Bletchley Park, codebreakers needed to perform vast numbers of logical comparisons to crack the German Lorenz cipher. The result was Colossus (1943) — the first programmable electronic digital computer — which used thousands of vacuum-tube logic circuits to count and compare at then-unimaginable speed.",
          "It is a landmark for this stage's lesson:\n- Colossus showed that wiring logic gates could perform real, decisive computation — arithmetic and comparison at scale — not just abstract demonstrations.\n- The work, led by engineers like Tommy Flowers and informed by Alan Turing's codebreaking, helped shorten the war and was kept secret for decades.\n- It is a direct ancestor of every ALU since: take logic gates, wire them to add and compare, and you have built something that can out-think any human at the tasks it was designed for.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Two Binary Numbers", sub: "bits to add", type: "system" },
          { label: "XOR = Sum, AND = Carry", sub: "a half adder", type: "attacker" },
          { label: "Chained Full Adders", sub: "add any-size numbers", type: "victim" },
          { label: "The ALU", sub: "the CPU's math engine", type: "result" },
        ],
      },
      timeline: [
        { year: 1937, event: "Shannon's logic makes gate-based arithmetic possible on paper" },
        { year: 1943, event: "Colossus uses logic circuits to break codes at Bletchley Park", highlight: true },
        { year: 1945, event: "ENIAC performs thousands of additions per second electronically" },
        { year: 1971, event: "The Intel 4004 puts a whole ALU on a single chip" },
      ],
      keyTakeaways: [
        "Binary addition is column-by-column with carries — exactly what XOR (sum) and AND (carry) gates do",
        "A half adder adds two bits; chained full adders add numbers of any size",
        "The ALU bundles adders and logic to do all arithmetic and comparison — the heart of the CPU",
        "How the ALU performs math (timing, power) can leak the secret numbers — the basis of crypto side channels",
      ],
      references: [
        { title: "Building an adder from logic gates — Nand2Tetris", url: "https://www.nand2tetris.org/" },
        { title: "Colossus computer — The National Museum of Computing", url: "https://www.tnmoc.org/colossus" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-06-q1", type: "Core Idea", challenge: "Math from logic.", text: "How does a computer add numbers?", options: ["With logic gates wired to perform binary addition (XOR for sum, AND for carry)", "With a separate mechanical calculator", "By looking answers up in a table of all sums", "It can't add"], correctIndex: 0, explanation: "Addition is built directly from gates — no special 'math chip' is needed." },
        { id: "cf-06-q2", type: "Half Adder", challenge: "Two gates.", text: "A half adder uses which gates for the sum and the carry?", options: ["XOR for the sum, AND for the carry", "OR for both", "NOT for the sum, OR for the carry", "Only AND"], correctIndex: 0, explanation: "XOR gives the column's sum bit; AND detects when to carry (1+1)." },
        { id: "cf-06-q3", type: "Scaling", challenge: "Bigger numbers.", text: "How do you add large binary numbers?", options: ["Chain full adders so each passes its carry to the next column", "Use one giant gate", "Convert to decimal first", "Add them by hand"], correctIndex: 0, explanation: "Full adders accept a carry-in, so chaining them adds any-size numbers." },
        { id: "cf-06-q4", type: "The ALU", challenge: "The math engine.", text: "What is the ALU?", options: ["The CPU part that does arithmetic and logic (add, subtract, compare, AND/OR)", "The computer's memory", "The power supply", "The screen controller"], correctIndex: 0, explanation: "The Arithmetic Logic Unit bundles adders and gate logic — the heart of computation." },
        { id: "cf-06-q5", type: "Comparisons", challenge: "Driving decisions.", text: "How does a computer decide 'is A greater than B'?", options: ["By subtracting and checking the result — comparisons are arithmetic", "By asking the user", "Randomly", "It cannot compare"], correctIndex: 0, explanation: "Comparisons are subtractions whose result is inspected — driving every 'if' and loop." },
        { id: "cf-06-q6", type: "Security Seed", challenge: "Leaky math.", text: "Why does the ALU matter for cryptography's security?", options: ["How long math takes and how much power it draws can leak the secret numbers", "It encrypts everything automatically", "It has no security role", "It hides keys in the screen"], correctIndex: 0, explanation: "Crypto is arithmetic; timing and power of those operations are exploited by side-channel attacks." },
      ],
    },
  },

  // ─── cf-07: Memory ───────────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "The age of magnetic cores and silicon memory", location: "Cambridge / Silicon Valley", era: "1950s–Present", emoji: "🧠" },
    id: "cf-07",
    order: 7,
    title: "How Computers Remember",
    subtitle: "Memory & Storage — from Flip-Flops to Flash",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-cf-memory", name: "Memory Keeper", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "Logic can decide and add — but a computer also has to remember. Holding a single bit still, on demand, turns out to be its own clever trick, and the way memory physically stores bits quietly involves quantum physics.",
      year: 2024,
      overview: [
        "So far our circuits react instantly to their inputs. To compute anything useful, a machine must also store bits — keep a 1 a 1 until told otherwise. Memory is how a computer holds numbers, programs, and your data. Different needs (fast vs. permanent vs. cheap) led to different physical tricks.",
        "Memory comes in a few flavors, trading speed for permanence:\n- Registers and cache — tiny, lightning-fast memory inside the CPU, built from logic (flip-flops) for bits in active use.\n- RAM (main memory) — larger and fast, holding your running programs, but 'volatile': it forgets everything when power is lost.\n- Storage (SSD/flash, hard drives) — slower but 'non-volatile': it keeps data without power, which is why your files survive a shutdown.",
        "How a bit is physically held differs by technology — and one of them is secretly quantum:\n- A flip-flop loops a gate's output back to its input so it holds its state — logic remembering itself.\n- DRAM stores each bit as a tiny charge in a capacitor that leaks away, so it must be 'refreshed' thousands of times a second.\n- Flash memory traps electrons on an isolated 'floating gate' — and the only way electrons get on and off is quantum tunneling, the spooky ability of particles to cross a barrier they classically shouldn't. Your phone's storage runs on quantum physics.",
      ],
      technical: {
        title: "Volatile vs. Non-Volatile, and the Quantum Trick",
        body: [
          "The memory hierarchy is a deliberate speed/size/cost trade-off:\n- Closer to the CPU = faster but smaller and pricier (registers, then L1/L2/L3 cache).\n- Farther = bigger and cheaper but slower (RAM, then SSD, then disk).\n- Programs constantly shuttle data up and down this hierarchy; how well they do it largely determines real-world speed.",
          "The physics of holding a bit has direct security consequences:\n- DRAM's leaking charge means data fades — but slowly, so a powered-off chip can retain secrets for seconds to minutes, especially when cold (the 'cold boot' attack, later in this track, freezes RAM to steal keys).\n- DRAM cells are so densely packed that rapidly hammering one row can electrically disturb its neighbors and flip their bits — the 'Rowhammer' attack.\n- Flash's floating gates wear out after many tunneling cycles (limited write endurance) and can retain ghosts of deleted data. Memory is physical, and physical memory leaks, lingers, and can be disturbed — themes the Physics of Hacking track makes central.",
        ],
      },
      incident: {
        title: "Magnetic Core Memory — Weaving Bits by Hand",
        when: "1950s–1970s",
        where: "MIT and the early computer industry",
        impact: "Tiny magnetic rings, hand-threaded with wires, stored bits for two decades and even flew to the Moon",
        body: [
          "Before silicon memory, computers remembered using 'core memory': grids of tiny magnetic rings (cores), each threaded with wires. Magnetizing a core one way stored a 1, the other way a 0 — and crucially, it held its state without power, making it non-volatile.",
          "Core memory's legacy still echoes today:\n- It was often woven by hand, a painstaking craft, yet reliable enough that the Apollo Guidance Computer used it to land humans on the Moon.\n- Because it kept data with the power off, engineers called a saved snapshot of memory a 'core dump' — a term we still use for a crash's memory image.\n- It is a reminder that 'remembering' has always been a physical act — magnetized rings then, trapped electrons now — and that the physical medium shapes both what's possible and what can leak.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Registers / Cache", sub: "tiny, fastest (flip-flops)", type: "system" },
          { label: "RAM", sub: "fast, volatile (forgets at power-off)", type: "attacker" },
          { label: "Flash / SSD", sub: "permanent, via quantum tunneling", type: "result" },
          { label: "Physical Leaks", sub: "remanence, Rowhammer, wear", type: "victim" },
        ],
      },
      timeline: [
        { year: 1953, event: "Magnetic core memory — non-volatile bits from magnetized rings" },
        { year: 1969, event: "Core memory helps the Apollo Guidance Computer reach the Moon", highlight: true },
        { year: 1970, event: "DRAM invented — bits as leaking capacitor charge, needing refresh" },
        { year: 1984, event: "Flash memory traps electrons via quantum tunneling — modern storage is born" },
      ],
      keyTakeaways: [
        "Memory holds bits over time; the hierarchy trades speed for size and permanence (cache → RAM → SSD)",
        "RAM is volatile (forgets at power-off); flash/SSD is non-volatile (keeps data) — different physical tricks",
        "Flash stores bits by trapping electrons via quantum tunneling — everyday storage runs on quantum physics",
        "Physical memory leaks and lingers: cold-boot remanence, Rowhammer bit-flips, and flash data ghosts",
      ],
      references: [
        { title: "How computer memory works — explainer", url: "https://www.crucial.com/articles/about-memory/how-computer-memory-works" },
        { title: "Flash memory and floating-gate tunneling", url: "https://en.wikipedia.org/wiki/Flash_memory" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-07-q1", type: "Core Idea", challenge: "Why memory.", text: "Why does a computer need memory in addition to logic?", options: ["To store bits over time — hold numbers, programs, and data until needed", "To make the screen brighter", "Logic can't run without the internet", "To cool the CPU"], correctIndex: 0, explanation: "Logic reacts instantly; memory holds state so the machine can keep and reuse information." },
        { id: "cf-07-q2", type: "Volatile", challenge: "Forgetful by design.", text: "What does it mean that RAM is 'volatile'?", options: ["It loses its contents when power is removed", "It explodes easily", "It can never be erased", "It stores data forever"], correctIndex: 0, explanation: "Volatile memory (RAM) forgets at power-off; non-volatile storage (SSD) keeps data." },
        { id: "cf-07-q3", type: "Hierarchy", challenge: "Speed vs size.", text: "What's the trade-off in the memory hierarchy?", options: ["Closer to the CPU is faster but smaller and pricier; farther is bigger, cheaper, slower", "Everything is equally fast", "Bigger is always faster", "There is no trade-off"], correctIndex: 0, explanation: "Registers/cache are fast and small; RAM and storage are larger and slower." },
        { id: "cf-07-q4", type: "Quantum Link", challenge: "Spooky storage.", text: "How does flash memory store a bit?", options: ["By trapping electrons on a floating gate via quantum tunneling", "By magnetizing a spinning disk", "By printing ink", "By heating wires"], correctIndex: 0, explanation: "Electrons tunnel onto/off an isolated gate — everyday storage relies on quantum tunneling." },
        { id: "cf-07-q5", type: "Security Seed", challenge: "Memory leaks.", text: "Which is a physical memory weakness attackers exploit?", options: ["Cold-boot remanence — RAM keeps data briefly after power-off, especially when cold", "Memory is perfectly secure", "Bits evaporate instantly", "RAM encrypts itself"], correctIndex: 0, explanation: "DRAM retains data for seconds/minutes; cooling extends it, enabling key theft (cold-boot attack)." },
        { id: "cf-07-q6", type: "History", challenge: "Hand-woven bits.", text: "What was magnetic core memory?", options: ["Grids of tiny magnetic rings, threaded by wire, holding bits without power", "An early hard drive", "A type of CPU", "A programming language"], correctIndex: 0, explanation: "Core memory stored non-volatile bits as magnetized rings — it even flew to the Moon." },
      ],
    },
  },

  // ─── cf-08: The CPU ──────────────────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "Intel — the microprocessor revolution", location: "Santa Clara, California, USA", era: "1971 CE", emoji: "🧩" },
    id: "cf-08",
    order: 8,
    title: "The Brain at Work",
    subtitle: "How a CPU Runs a Program",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-cf-cpu", name: "CPU Whisperer", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "Logic decides, the ALU calculates, memory remembers — the CPU is the conductor that makes them work together, stepping through a program one tiny instruction at a time, billions of times a second.",
      year: 2024,
      overview: [
        "The Central Processing Unit (CPU) is the part that actually 'runs' a program. A program is just a long list of extremely simple instructions stored in memory — add these two numbers, put the result here, jump to that step if a value is zero. The CPU's genius is not any single instruction; it is doing billions of them per second, flawlessly, in order.",
        "Every CPU repeats one simple loop, called the fetch-decode-execute cycle:\n- Fetch — read the next instruction from memory.\n- Decode — figure out what it means (which operation, which data).\n- Execute — do it (use the ALU to add, read or write memory, or jump elsewhere).\n- Then repeat, forever, with a 'program counter' tracking which instruction is next.",
        "A few parts make this loop possible:\n- The clock — a crystal-driven heartbeat (billions of ticks per second, gigahertz) that paces every step so the parts stay in sync.\n- Registers — the tiny, ultra-fast slots holding the data being worked on right now.\n- Control unit — the traffic cop that directs data between memory, registers, and the ALU according to each instruction.\n- Put together: a CPU is a spectacularly fast, perfectly obedient machine that does trivial steps so quickly the result feels like thought.",
      ],
      technical: {
        title: "Instructions, the Clock, and Going Faster",
        body: [
          "Instructions are the CPU's native language:\n- Each CPU understands a fixed 'instruction set' (like x86 or ARM) — a vocabulary of simple operations encoded as binary.\n- High-level code (the next stage) is ultimately translated into these instructions.\n- The clock speed (GHz) sets the raw pace, but modern CPUs do far more per tick than the basic loop suggests.",
          "Decades of cleverness made CPUs fast — and opened security holes:\n- Pipelining — work on several instructions at once, like an assembly line, so a new one finishes each tick.\n- Caching — keep frequently-used data in fast on-chip memory to avoid slow trips to RAM.\n- Speculative execution — guess which way a branch will go and run ahead; if wrong, undo it. Brilliant for speed, but in 2018 the Spectre and Meltdown attacks showed these speed tricks leave traces in the cache that leak secrets across program boundaries — a landmark reminder that performance and security can collide at the hardware level.",
        ],
      },
      incident: {
        title: "1971 — The Intel 4004 Puts a Computer on a Chip",
        when: "November 1971",
        where: "Intel, California",
        impact: "The first commercial microprocessor put an entire CPU on one chip, launching the personal-computer age",
        body: [
          "Intel's 4004, designed by a small team including Federico Faggin and Ted Hoff, packed a complete CPU — about 2,300 transistors — onto a single chip the size of a fingernail. Originally built for a calculator, it proved a general-purpose processor could be mass-produced cheaply.",
          "It set off an exponential climb that still defines computing:\n- From 2,300 transistors in 1971, CPUs grew to billions today, doubling roughly every two years (Moore's Law) for decades.\n- Cheap, powerful microprocessors put computers in homes, phones, cars, and eventually everything — the substrate the entire security field now defends.\n- The 4004 is the moment 'a computer' stopped being a room and became a component — and every CPU since runs the same fetch-decode-execute heartbeat, just unimaginably faster.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fetch", sub: "read next instruction from memory", type: "system" },
          { label: "Decode", sub: "figure out what it means", type: "attacker" },
          { label: "Execute", sub: "ALU / memory / jump", type: "victim" },
          { label: "Repeat (billions/sec)", sub: "paced by the clock", type: "result" },
        ],
      },
      timeline: [
        { year: 1945, event: "The 'stored-program' design (von Neumann) defines how CPUs run code" },
        { year: 1971, event: "Intel 4004: the first microprocessor — a CPU on one chip", highlight: true },
        { year: 1995, event: "Speculative execution and deep pipelines make CPUs much faster" },
        { year: 2018, event: "Spectre & Meltdown: CPU speed tricks leak secrets across boundaries" },
      ],
      keyTakeaways: [
        "A program is a long list of simple instructions in memory; the CPU runs them one at a time, very fast",
        "Every CPU repeats fetch-decode-execute, paced by a clock (GHz) and tracked by a program counter",
        "Speed tricks — pipelining, caching, speculative execution — do far more per tick than the basic loop",
        "Those same tricks can leak data (Spectre/Meltdown, 2018): hardware performance and security can collide",
      ],
      references: [
        { title: "How a CPU works — fetch-decode-execute (explainer)", url: "https://www.ibm.com/topics/central-processing-unit" },
        { title: "Spectre & Meltdown explained", url: "https://meltdownattack.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-08-q1", type: "Core Idea", challenge: "What it runs.", text: "What is a program, from the CPU's view?", options: ["A long list of very simple instructions stored in memory", "A single complex command", "A picture", "A web page"], correctIndex: 0, explanation: "The CPU executes simple stored instructions one after another, billions per second." },
        { id: "cf-08-q2", type: "The Cycle", challenge: "The heartbeat.", text: "What is the CPU's basic cycle?", options: ["Fetch, decode, execute — then repeat", "Save, print, delete", "Encrypt, send, receive", "Boot, sleep, wake"], correctIndex: 0, explanation: "Fetch the instruction, decode it, execute it, then move to the next — forever." },
        { id: "cf-08-q3", type: "The Clock", challenge: "Keeping time.", text: "What does the CPU clock do?", options: ["Paces every step (billions of ticks/sec) so the parts stay in sync", "Displays the time of day", "Cools the chip", "Stores files"], correctIndex: 0, explanation: "The clock is the chip's heartbeat measured in gigahertz, synchronizing all operations." },
        { id: "cf-08-q4", type: "Instructions", challenge: "Its native language.", text: "What is an 'instruction set' (like x86 or ARM)?", options: ["The fixed vocabulary of simple operations a CPU understands in binary", "A user manual", "A programming course", "A type of memory"], correctIndex: 0, explanation: "High-level code is translated into these native binary instructions the CPU executes." },
        { id: "cf-08-q5", type: "Speed Tricks", challenge: "Doing more per tick.", text: "Which is a technique CPUs use to go faster?", options: ["Speculative execution — guessing a branch and running ahead", "Slowing the clock", "Removing the ALU", "Erasing memory"], correctIndex: 0, explanation: "Pipelining, caching, and speculation do far more per tick than the basic loop." },
        { id: "cf-08-q6", type: "Security Seed", challenge: "Speed bites back.", text: "What did Spectre and Meltdown (2018) reveal?", options: ["CPU speed tricks (speculation/caching) can leak secrets across program boundaries", "CPUs can't do math", "Clocks are insecure by design", "Programs can't be run"], correctIndex: 0, explanation: "Speculative execution left cache traces that leaked data — performance and security collided in hardware." },
      ],
    },
  },

  // ─── cf-09: Code to Electricity ──────────────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "The first compilers and high-level languages", location: "USA", era: "1950s CE", emoji: "📜" },
    id: "cf-09",
    order: 9,
    title: "From Code to Electricity",
    subtitle: "Languages, Compilers & the Layers of Abstraction",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-cf-code", name: "Abstraction Climber", emoji: "📜" },
    challengeType: "quiz",
    info: {
      tagline: "Nobody writes software by flipping voltages. We write words — and a beautiful tower of translation turns those words, layer by layer, into the electrons flowing through a chip. Understanding the tower is understanding computing.",
      year: 2024,
      overview: [
        "There is a vast gap between a line of code like `print('hello')` and the electrons it eventually moves. That gap is bridged by 'abstraction layers' — each layer hiding the messy details below it and offering a simpler interface above. This tower is arguably computing's greatest idea: it lets humans think in words while machines run on voltages.",
        "From your code down to the metal, the journey passes through several floors:\n- High-level language — readable code (Python, JavaScript, C) that humans write.\n- Compiler or interpreter — translates that code into the CPU's instruction set.\n- Machine code — the binary instructions the CPU actually understands.\n- Microarchitecture — the CPU executing those instructions with gates and the ALU.\n- Transistors and voltages — the physical electrons doing the work, where this track began.",
        "Why build such a tall tower? Because each layer is a superpower:\n- Productivity — you describe what you want in human terms, not in billions of switch flips.\n- Portability — the same high-level code can run on different chips, because only the lower layers change.\n- But abstractions 'leak': performance, bugs, and security flaws from a lower layer can surface in your code unexpectedly — which is why great engineers (and attackers) understand more than one floor of the tower.",
      ],
      technical: {
        title: "Compilers, Interpreters, and Leaky Abstractions",
        body: [
          "Two ways to translate code reflect a classic trade-off:\n- A compiler translates the whole program to machine code ahead of time (C, Rust, Go) — fast to run, since the CPU executes native instructions directly.\n- An interpreter translates and runs code line by line at runtime (Python, JavaScript) — more flexible and portable, but generally slower.\n- Many modern systems blend both (just-in-time compilation) to get flexibility and speed.",
          "The security weight of the tower is enormous:\n- Most software vulnerabilities live at the seams between layers — a buffer overflow is code writing past memory the lower layer assumed was safe; an injection attack is data mistaken for instructions.\n- Compilers can even introduce or remove security properties (e.g., 'optimizing away' a routine that wipes a password from memory).\n- And the deepest truth of this whole track: every secret, every defense, ultimately becomes voltages in transistors — so an attacker who can reach a lower layer (the hardware) can sometimes bypass all the careful logic above it. That is precisely the door the next track, the Physics of Hacking, walks through.",
        ],
      },
      incident: {
        title: "Grace Hopper and the First Compiler",
        when: "1952",
        where: "Remington Rand / UNIVAC, USA",
        impact: "Grace Hopper's compiler proved computers could translate human-readable code into machine code — inventing modern programming",
        body: [
          "In the early 1950s, programming meant writing raw machine code — tedious, error-prone, and tied to one specific computer. Grace Hopper, a US Navy officer and mathematician, built the first compiler (the A-0 system) to translate symbolic, human-friendly instructions into machine code automatically. Many doubted a computer could 'write its own programs'.",
          "Her insight created the layered world we live in:\n- It led to early high-level languages (and Hopper helped create COBOL), letting people write code in something closer to English.\n- Every language, framework, and app since rests on this idea: let the machine do the translation so humans can think at a higher level.\n- Hopper — who also popularized the 'debugging' story from cf-02's moth — is a direct reason you can write a line of code today without knowing which transistors it will eventually switch.",
        ],
      },
      diagram: {
        nodes: [
          { label: "High-Level Code", sub: "human-readable (Python, C)", type: "system" },
          { label: "Compiler / Interpreter", sub: "translates to machine code", type: "attacker" },
          { label: "Machine Code", sub: "binary the CPU runs", type: "victim" },
          { label: "Transistors & Voltages", sub: "electrons — where we started", type: "result" },
        ],
      },
      timeline: [
        { year: 1952, event: "Grace Hopper builds the first compiler (A-0)", highlight: true },
        { year: 1957, event: "FORTRAN — an early widely-used high-level language" },
        { year: 1972, event: "The C language: high-level power close to the hardware" },
        { year: 1995, event: "Interpreted/JIT languages (Java, JavaScript, Python) spread portability" },
      ],
      keyTakeaways: [
        "Abstraction layers translate human-readable code, step by step, down to electrons in transistors",
        "The tower: high-level language → compiler/interpreter → machine code → microarchitecture → voltages",
        "Compilers translate ahead of time (fast); interpreters translate at runtime (flexible) — JIT blends both",
        "Abstractions leak: most vulnerabilities live at the seams between layers, and hardware can bypass software defenses",
      ],
      references: [
        { title: "Grace Hopper and the first compiler — history", url: "https://www.computerhistory.org/profile/grace-murray-hopper/" },
        { title: "Compilers vs interpreters — explainer", url: "https://www.freecodecamp.org/news/compiler-vs-interpreter/" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-09-q1", type: "Core Idea", challenge: "Bridging the gap.", text: "How does human-written code become electrons in a chip?", options: ["Through layers of abstraction that translate it step by step down to voltages", "Magically, all at once", "By the user flipping switches", "It doesn't — code stays as words"], correctIndex: 0, explanation: "Each layer hides the one below and is translated downward to machine instructions and voltages." },
        { id: "cf-09-q2", type: "The Tower", challenge: "Order of floors.", text: "Which order goes from human to hardware?", options: ["High-level code → machine code → transistors/voltages", "Voltages → high-level code → compiler", "Machine code → Python → electrons", "There are no layers"], correctIndex: 0, explanation: "Code is translated down through machine code to the microarchitecture and physical transistors." },
        { id: "cf-09-q3", type: "Translation", challenge: "Two styles.", text: "What's the difference between a compiler and an interpreter?", options: ["A compiler translates the whole program ahead of time; an interpreter runs it line by line", "They are identical", "Interpreters make hardware; compilers make screens", "Compilers only work on phones"], correctIndex: 0, explanation: "Ahead-of-time compilation is fast; line-by-line interpretation is flexible and portable." },
        { id: "cf-09-q4", type: "Why Layers", challenge: "The payoff.", text: "What's a key benefit of abstraction layers?", options: ["You think in human terms while the same code can run on different chips (portability)", "They slow everything down for fun", "They prevent all bugs", "They remove the need for a CPU"], correctIndex: 0, explanation: "Productivity and portability come from hiding lower-level detail behind clean interfaces." },
        { id: "cf-09-q5", type: "Security Seed", challenge: "Leaky seams.", text: "Where do most software vulnerabilities tend to live?", options: ["At the seams between abstraction layers (e.g., buffer overflows, injection)", "Only in the screen", "In the power cable", "Nowhere — abstractions are perfectly safe"], correctIndex: 0, explanation: "Mismatched assumptions between layers (memory, data-vs-code) are a top source of flaws." },
        { id: "cf-09-q6", type: "History", challenge: "Who started it.", text: "What did Grace Hopper's 1952 compiler prove?", options: ["A computer can translate human-readable code into machine code automatically", "Computers can't be programmed", "Machine code is unnecessary", "Hardware writes itself"], correctIndex: 0, explanation: "The first compiler founded modern programming and the layered tower we use today." },
      ],
    },
  },

  // ─── cf-10: Why This Matters for Security ────────────────────────────────────
  {
    epochId: "computing-foundations",
    wonder: { name: "The hardware-security frontier", location: "Worldwide", era: "Present Day", emoji: "🛡️" },
    id: "cf-10",
    order: 10,
    title: "It's All Physical",
    subtitle: "Why Computing Foundations Are Security Foundations",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-cf-security", name: "Foundations Graduate", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "You now know what a computer really is: electrons, switches, gates, bits, and a CPU stepping through code. That knowledge is a security superpower — because every defense, and every attack, ultimately lives in the physical machine.",
      year: 2024,
      overview: [
        "This final stage connects the whole track to the platform's mission. Most of cybersecurity is fought in software — passwords, encryption, firewalls. But all of that runs on the physical machine you just learned to build, and the physical layer is a battlefield of its own. Understanding the foundations lets you see attacks and defenses that purely-software thinkers miss.",
        "The core realization is simple and powerful: computation is physical, and physical things leak and can be disturbed:\n- Leak — running code gives off heat, draws measurable power, emits radio waves, and takes different amounts of time. Each of these can carry secrets out (side channels).\n- Linger — bits are physical states that don't vanish instantly; data persists in RAM after power-off and in 'deleted' flash.\n- Disturb — because chips are sensitive to voltage, timing, and their neighbors, attackers can glitch power, hammer memory, or inject faults to force misbehavior.",
        "This is exactly where the next track picks up:\n- 'The Physics of Hacking' takes each physical property you met here — power, EM, timing, memory remanence — and turns it into a real attack and a real defense.\n- The lesson of these foundations is that security is not only about clever code; it is about a physical device an adversary can touch, measure, and perturb.\n- An engineer who understands the machine from electrons to code can defend (and test) it at every layer — which is rarer, and more valuable, than knowing software alone.",
      ],
      technical: {
        title: "The Physical Attack Surface, Mapped to What You Learned",
        body: [
          "Each foundation stage seeded a real security theme — here is the map:\n- Electricity & power (cf-01) → power-analysis attacks read the secret from how much current the chip draws.\n- Transistors' imperfections (cf-03) → leakage and voltage sensitivity enable fault injection.\n- The ALU's arithmetic (cf-06) → timing attacks measure how long secret-dependent math takes.\n- Memory's physics (cf-07) → cold-boot remanence and Rowhammer bit-flips steal or corrupt data.\n- The CPU's speed tricks (cf-08) → Spectre/Meltdown leak across boundaries via caches.\n- The abstraction tower (cf-09) → reaching a lower layer can bypass higher defenses.",
          "Why this makes you a better defender (and tester):\n- Defenses exist for all of these — shielding, constant-time code, masking, error-correcting memory, secure elements — but you can only apply them if you understand the physics they counter.\n- Threat modeling improves when you include the physical layer: a key that is cryptographically perfect can still leak through power or timing.\n- The most resilient systems are designed with the physical reality in mind from the start — and that mindset begins exactly with the electrons-to-code understanding you have now built.",
        ],
      },
      incident: {
        title: "Why Hardware Security Became a Field of Its Own",
        when: "1996–Present",
        where: "Academic and industry security research worldwide",
        impact: "A steady drumbeat of physical attacks proved that securing software is not enough — the machine itself must be defended",
        body: [
          "Starting in the late 1990s, researchers repeatedly showed that perfectly correct, well-written secure software could be defeated by attacking the physical machine running it — reading power traces to extract encryption keys, measuring timing, glitching voltages, and freezing memory chips. None of these broke the math; they bypassed it physically.",
          "The result was a whole discipline of hardware and physical security:\n- Secure elements, hardware security modules (HSMs), trusted platform modules (TPMs), and side-channel-resistant designs exist because software-only security has a physical underbelly.\n- Standards now require physical protections for high-assurance systems, and chip designers treat side channels as first-class threats.\n- For you, finishing this track, the takeaway is empowering: you understand the machine deeply enough to follow these attacks and defenses — and the very next track will walk you through them, one physical phenomenon at a time.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Software Security", sub: "passwords, crypto, firewalls", type: "system" },
          { label: "Runs On Physical Hardware", sub: "electrons, switches, memory", type: "attacker" },
          { label: "Leaks · Lingers · Disturbs", sub: "power, EM, timing, remanence", type: "victim" },
          { label: "Defend Every Layer", sub: "from electrons to code", type: "result" },
        ],
      },
      timeline: [
        { year: 1996, event: "Timing attacks shown to extract cryptographic keys" },
        { year: 1999, event: "Differential power analysis breaks smartcards" },
        { year: 2008, event: "Cold-boot attack recovers keys from powered-off RAM", highlight: true },
        { year: 2018, event: "Spectre/Meltdown make hardware-level leaks front-page news" },
      ],
      keyTakeaways: [
        "Computation is physical: running code leaks heat, power, EM, and timing — all potential side channels",
        "Bits linger (memory remanence) and can be disturbed (Rowhammer, fault injection) — physical, not just logical",
        "Each foundation maps to a real attack/defense — understanding the machine lets you secure every layer",
        "The next track, The Physics of Hacking, turns each physical phenomenon here into an attack and a defense",
      ],
      references: [
        { title: "Introduction to hardware security and side channels", url: "https://www.cl.cam.ac.uk/~rja14/book.html" },
        { title: "Hardware security overview — NIST", url: "https://csrc.nist.gov/projects/hardware-security" },
      ],
    },
    quiz: {
      questions: [
        { id: "cf-10-q1", type: "Core Idea", challenge: "The big link.", text: "Why do computing foundations matter for security?", options: ["Every defense and attack ultimately runs on the physical machine, which leaks and can be disturbed", "They don't — security is only software", "Only to pass exams", "Because hardware can't be hacked"], correctIndex: 0, explanation: "Software security runs on physical hardware, and the physical layer is its own battlefield." },
        { id: "cf-10-q2", type: "Three Properties", challenge: "Physical reality.", text: "Which trio captures why hardware is attackable?", options: ["It leaks (power/EM/timing), lingers (memory), and can be disturbed (faults)", "It is fast, cheap, and small", "It is silent, cold, and dark", "It is software, only software"], correctIndex: 0, explanation: "Leak, linger, and disturb summarize the physical attack surface." },
        { id: "cf-10-q3", type: "Mapping", challenge: "Power tells tales.", text: "How can the electricity a chip draws threaten a secret key?", options: ["Power-analysis attacks read the key from the current the chip draws while using it", "It can't — power is unrelated to data", "Only the screen leaks", "Power encrypts the key"], correctIndex: 0, explanation: "Secret-dependent operations draw distinguishable power, leaking the key (DPA)." },
        { id: "cf-10-q4", type: "Beyond Math", challenge: "Bypassing the crypto.", text: "How can perfect cryptography still be defeated?", options: ["By attacking the physical machine (power, timing, faults) instead of breaking the math", "By guessing the key once", "It can't ever be defeated", "By using a longer password"], correctIndex: 0, explanation: "Side-channel and fault attacks bypass the math by exploiting the hardware running it." },
        { id: "cf-10-q5", type: "Defense", challenge: "Why understanding helps.", text: "Why does knowing the foundations make you a better defender?", options: ["You can apply physical defenses (shielding, constant-time code, secure elements) because you understand what they counter", "It doesn't help at all", "It only helps attackers", "Defenses are automatic"], correctIndex: 0, explanation: "You can only threat-model and defend the physical layer if you understand the machine." },
        { id: "cf-10-q6", type: "Next Step", challenge: "Where to go.", text: "What does the next track, The Physics of Hacking, do with these foundations?", options: ["Turns each physical phenomenon here into a real attack and a real defense", "Repeats this track exactly", "Teaches cooking", "Ignores hardware"], correctIndex: 0, explanation: "It builds directly on these foundations — power, EM, timing, memory — as concrete attacks and defenses." },
      ],
    },
  },
];
