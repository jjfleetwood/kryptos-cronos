import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const quantumIntroEpoch: EpochConfig = {
  id: "quantum-intro",
  name: "Quantum for Curious Minds",
  subtitle: "Quantum Physics & Computing from Scratch",
  description:
    "A gentle, jargon-light on-ramp to the quantum world — no physics degree required. Build real intuition for superposition, measurement, wave-particle duality, interference, and entanglement, then meet the qubit, quantum gates, and what quantum computers can (and can't) actually do — each idea anchored to the experiment that proved it.",
  emoji: "🌌",
  color: "purple",
  unlocked: true,
};

export const quantumIntroStages: StageConfig[] = [
  // ─── quantum-i01: What Is Quantum ────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "The Solvay Conference — birthplace of quantum debate", location: "Brussels, Belgium", era: "1927 CE", emoji: "🌌" },
    id: "quantum-i01",
    order: 1,
    title: "The World at Its Smallest",
    subtitle: "What 'Quantum' Actually Means",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-qi-quantum", name: "Quantum Explorer", emoji: "🌌" },
    challengeType: "quiz",
    info: {
      tagline: "Nature runs on two rulebooks. The one you grew up with works for baseballs and planets. Down at the size of atoms, a stranger rulebook takes over — and that one is 'quantum'.",
      year: 2024,
      overview: [
        "'Quantum' sounds intimidating, but the core idea is simple: at the scale of atoms and particles, the world behaves in ways that feel impossible compared to everyday life. A ball is in one place; an electron can be spread across many. A coin lands heads or tails; a quantum coin can be both until you look. Quantum physics is just the rulebook that describes this very small world accurately.",
        "The word itself is a clue to the first surprise:\n- 'Quantum' means a fixed amount, a chunk. Energy, at the smallest scale, comes in discrete packets rather than a smooth flow.\n- A guitar string can only play certain notes; an electron in an atom can only sit at certain energy levels — not the ones in between.\n- This 'chunkiness' is where the field got its name, when Max Planck proposed it in 1900 to fix a stubborn physics problem.",
        "You do not need the math to build real intuition, and this track will not throw it at you:\n- We will use everyday analogies — coins, waves, music — to make each idea click.\n- Every stage is anchored to a real experiment, so the strangeness is not hand-waving; it is measured fact.\n- By the end you will understand superposition, entanglement, qubits, and why quantum computers matter — starting from zero.",
      ],
      technical: {
        title: "Two Rulebooks: Classical vs. Quantum",
        body: [
          "It helps to see what changes when you shrink down to the quantum scale:\n- Definiteness — classically an object has one position and speed at once; quantum objects can hold a blend of possibilities until measured.\n- Chunkiness — classically energy is continuous; quantum energy comes in fixed quanta, so only certain values are allowed.\n- Probability — classical physics predicts exactly what happens; quantum physics predicts the odds of each outcome.\n- Disturbance — classically you can observe without changing things; in the quantum world, measuring genuinely affects what you measure.",
          "Why don't we notice any of this day to day? Because the effects shrink as things get bigger:\n- Quantum weirdness is loudest for tiny, isolated things — single electrons, photons, atoms.\n- For anything made of trillions of particles bumping into their surroundings, the strangeness averages out — a process called decoherence.\n- That is why a baseball never appears in two places: it is constantly 'measured' by the air and light around it. Quantum rules never switched off; they just hide at human scale.",
        ],
      },
      incident: {
        title: "1900 — Max Planck Reluctantly Starts a Revolution",
        when: "December 1900",
        where: "Berlin, Germany",
        impact: "Introduced the 'quantum' to fix the physics of glowing hot objects — and unintentionally founded modern physics",
        body: [
          "Physics had an embarrassing failure called the 'ultraviolet catastrophe': the best theory predicted a hot object should blast out infinite energy as ultraviolet light, which is obviously wrong. Max Planck found that the math only worked if energy was emitted in discrete chunks — quanta — rather than a smooth stream.",
          "Planck thought it was a mathematical trick, not reality, and was uneasy about it for years:\n- Einstein took the idea seriously in 1905, using light-quanta (photons) to explain the photoelectric effect — the work that won him the Nobel Prize.\n- Within three decades, Bohr, Heisenberg, Schrödinger, and others built the quantum rulebook that now underpins lasers, transistors, MRI machines, and the computer you are reading this on.\n- A reluctant fix to one stubborn problem became the foundation of nearly all modern technology.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Everyday World", sub: "baseballs, one place at a time", type: "system" },
          { label: "Shrink to Atoms", sub: "the quantum scale begins", type: "victim" },
          { label: "New Rulebook", sub: "blends, chunks, probabilities", type: "attacker" },
          { label: "Modern Tech", sub: "lasers, chips, MRI", type: "result" },
        ],
      },
      timeline: [
        { year: 1900, event: "Planck introduces energy quanta to solve the ultraviolet catastrophe", highlight: true },
        { year: 1905, event: "Einstein explains the photoelectric effect with light-quanta (photons)" },
        { year: 1927, event: "The Solvay Conference: the giants of physics debate what it all means" },
        { year: 1947, event: "The transistor — quantum physics becomes everyday technology" },
      ],
      keyTakeaways: [
        "'Quantum' describes how the very small world behaves — strange compared to everyday life, but precisely measurable",
        "The name comes from energy arriving in fixed chunks (quanta), not a smooth flow",
        "Quantum weirdness hides at human scale because big objects are constantly disturbed (decoherence)",
        "You can build real intuition with analogies and experiments — no heavy math required",
      ],
      references: [
        { title: "What is quantum mechanics? — CERN (beginner explainer)", url: "https://home.cern/science/physics/quantum-mechanics" },
        { title: "Planck and the birth of the quantum — Nobel Prize", url: "https://www.nobelprize.org/prizes/physics/1918/planck/facts/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i01-q1", type: "Core Idea", challenge: "What it means.", text: "What does 'quantum physics' describe?", options: ["How the very small world (atoms, particles) behaves", "How planets orbit the sun", "How to build faster cars", "A type of computer virus"], correctIndex: 0, explanation: "Quantum physics is the accurate rulebook for the world at the scale of atoms and particles." },
        { id: "quantum-i01-q2", type: "The Name", challenge: "Why 'quantum'.", text: "Where does the word 'quantum' come from?", options: ["Energy at the smallest scale comes in fixed chunks (quanta)", "It means 'very fast'", "It is short for 'quantity of computers'", "It refers to quantum of websites"], correctIndex: 0, explanation: "Planck found energy is emitted in discrete packets — quanta — which named the whole field." },
        { id: "quantum-i01-q3", type: "Everyday Gap", challenge: "Why we don't notice.", text: "Why don't we see quantum weirdness in everyday life?", options: ["Big objects are constantly disturbed by their surroundings, averaging it out (decoherence)", "Quantum rules only work on Tuesdays", "Scientists turned it off", "It only happens in space"], correctIndex: 0, explanation: "Quantum effects are loud for tiny isolated things but wash out for large, constantly-measured objects." },
        { id: "quantum-i01-q4", type: "Comparison", challenge: "Classical vs quantum.", text: "Which is a quantum behavior, not a classical one?", options: ["An electron holding a blend of possibilities until it's measured", "A ball sitting in exactly one spot", "A car driving at a steady speed", "Water flowing downhill"], correctIndex: 0, explanation: "Holding multiple possibilities at once (superposition) is quantum; single definite states are classical." },
        { id: "quantum-i01-q5", type: "History", challenge: "Where it started.", text: "What problem led Planck to introduce the quantum in 1900?", options: ["The 'ultraviolet catastrophe' — wrong predictions about glowing hot objects", "A broken telescope", "A computer crash", "A failed rocket launch"], correctIndex: 0, explanation: "Energy-in-chunks fixed the bad prediction that hot objects emit infinite ultraviolet energy." },
        { id: "quantum-i01-q6", type: "Everyday Analogy", challenge: "Tie it together.", text: "Energy levels in an atom are most like…", options: ["The fixed notes a guitar string can play — only certain ones, nothing in between", "A dimmer switch with infinite smooth settings", "A pile of sand", "A straight highway"], correctIndex: 0, explanation: "Like allowed musical notes, electrons can only occupy certain energy levels — the 'chunkiness' of quanta." },
      ],
    },
  },

  // ─── quantum-i02: Superposition ──────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "Schrödinger's thought experiment", location: "Vienna, Austria", era: "1935 CE", emoji: "🪙" },
    id: "quantum-i02",
    order: 2,
    title: "Both at Once",
    subtitle: "Superposition — The Spinning Coin",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-qi-superposition", name: "Superposition Student", emoji: "🪙" },
    challengeType: "quiz",
    info: {
      tagline: "Flip a coin and slap it down: heads or tails, you just can't see which. A quantum coin is different — while it spins, it is genuinely a blend of both, and that blend is the whole magic.",
      year: 2024,
      overview: [
        "Superposition is the headline act of quantum physics. A classical coin is always heads or tails; you might not know which, but it is one of them. A quantum object in superposition is truly a combination of possibilities at the same time — not 'we don't know yet', but 'it is genuinely both, with certain weights', until something forces it to choose.",
        "The spinning-coin analogy gets the spirit right, with a careful caveat:\n- While a quantum coin 'spins', it holds heads and tails together in a blend.\n- The blend has weights — maybe 70% heads, 30% tails — that decide the odds when you look.\n- Crucially, it is not secretly already one of them; experiments prove the blend itself is real and has effects a hidden answer could not produce.",
        "This is the resource quantum computers run on, which is why beginners meet it first:\n- One quantum bit (qubit) can hold a blend of 0 and 1 instead of just one value.\n- Put many qubits in superposition and they represent a huge number of combinations simultaneously.\n- That is not the same as 'trying every answer at once' (a common myth we will untangle later), but it is the raw material that makes quantum computing different.",
      ],
      technical: {
        title: "What a Superposition Really Is",
        body: [
          "A superposition is described by 'amplitudes' — the weights of each possibility:\n- A qubit's state is written as a blend of 0 and 1, each with an amplitude.\n- Square an amplitude and you get the probability of seeing that outcome when measured (the '70% heads' part).\n- Amplitudes can be positive or negative, which classical probabilities cannot — and that sign is what makes interference (a later stage) possible.",
          "Two common misunderstandings are worth clearing up early:\n- 'It's just hidden information' — no: Bell experiments (another stage) rule out the idea that the coin was secretly decided all along.\n- 'It can stay in superposition forever' — no: contact with the environment collapses it almost instantly, which is exactly why quantum computers need extreme isolation and cold.\n- Superposition is fragile and real at the same time — powerful, but only while it is protected from the outside world.",
        ],
      },
      incident: {
        title: "1935 — Schrödinger's Cat Makes Superposition Famous",
        when: "1935",
        where: "A thought experiment, never an actual cat",
        impact: "Turned an abstract idea into the most famous image in physics — and started a century of debate about measurement",
        body: [
          "Erwin Schrödinger imagined a cat in a sealed box with a device that would be triggered by a single random quantum event. If quantum rules apply naively, before you open the box the triggering atom is in a superposition — and so, absurdly, the cat is 'both alive and dead'.",
          "Schrödinger meant it as a criticism — he found the conclusion ridiculous — but it became the perfect teaching image:\n- It dramatizes the gap between the quantum world (genuine blends) and our world (definite cats).\n- The resolution is decoherence: a cat is far too big and connected to its surroundings to stay in superposition, so it is never really both.\n- The thought experiment endures because it makes a precise question vivid — when and how does a blend of possibilities become one definite reality?",
        ],
      },
      diagram: {
        nodes: [
          { label: "Classical Coin", sub: "heads OR tails (just hidden)", type: "system" },
          { label: "Quantum Coin", sub: "genuine blend of both", type: "attacker" },
          { label: "Amplitudes", sub: "weights set the odds", type: "victim" },
          { label: "Qubit", sub: "blend of 0 and 1", type: "result" },
        ],
      },
      timeline: [
        { year: 1926, event: "Schrödinger's wave equation describes states as blends of possibilities" },
        { year: 1935, event: "Schrödinger's cat dramatizes superposition and the measurement puzzle", highlight: true },
        { year: 1996, event: "Physicists create 'cat states' in the lab — superpositions of larger systems" },
        { year: 2019, event: "Superposition of qubits powers the first claims of quantum advantage" },
      ],
      keyTakeaways: [
        "Superposition means a quantum object is genuinely a blend of possibilities at once — not just unknown",
        "Amplitudes are the weights of each possibility; squared, they give the odds of each measurement outcome",
        "It is not 'hidden information' (experiments rule that out) and it is fragile (the environment collapses it fast)",
        "A qubit in superposition holds 0 and 1 together — the raw resource of quantum computing",
      ],
      references: [
        { title: "Superposition explained — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-superposition" },
        { title: "Schrödinger's cat — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/qt-issues/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i02-q1", type: "Core Idea", challenge: "Both at once.", text: "What is superposition?", options: ["A quantum object being a genuine blend of possibilities at the same time", "A coin we simply haven't looked at yet", "Two computers stacked together", "A very fast calculation"], correctIndex: 0, explanation: "Superposition is a real combination of states, not mere ignorance of a hidden answer." },
        { id: "quantum-i02-q2", type: "Not Hidden", challenge: "The key distinction.", text: "How does a quantum superposition differ from a covered classical coin?", options: ["The coin is secretly already heads or tails; the qubit is truly both until measured", "There is no difference", "The qubit is heavier", "The coin is faster"], correctIndex: 0, explanation: "Experiments show the blend is real — it isn't just a definite answer we can't see." },
        { id: "quantum-i02-q3", type: "Amplitudes", challenge: "Setting the odds.", text: "What do the amplitudes in a superposition tell you?", options: ["Squared, they give the probability of each outcome when you measure", "The temperature of the qubit", "The color of the particle", "The price of a computer"], correctIndex: 0, explanation: "Amplitude squared = probability — that's the '70% heads, 30% tails' of a quantum state." },
        { id: "quantum-i02-q4", type: "Fragility", challenge: "Why so cold.", text: "Why do quantum computers need extreme isolation and cold?", options: ["Contact with the environment collapses superposition almost instantly", "Cold makes electricity cheaper", "Heat erases the hard drive", "It looks impressive"], correctIndex: 0, explanation: "Superposition is fragile; decoherence from the surroundings destroys it, so qubits must be protected." },
        { id: "quantum-i02-q5", type: "Computing Link", challenge: "Why it matters.", text: "Why is superposition important for quantum computing?", options: ["A qubit can hold a blend of 0 and 1, the raw resource quantum algorithms exploit", "It makes screens brighter", "It stores more photos", "It speeds up typing"], correctIndex: 0, explanation: "Superposition (with interference, later) is what gives quantum computers their distinctive power." },
        { id: "quantum-i02-q6", type: "Famous Image", challenge: "The cat.", text: "What was Schrödinger's cat meant to illustrate?", options: ["The strange gap between quantum blends and the definite everyday world", "That cats are quantum", "How to build a box", "A real laboratory animal"], correctIndex: 0, explanation: "It dramatizes the measurement puzzle — and decoherence explains why a real cat is never 'both'." },
      ],
    },
  },

  // ─── quantum-i03: Measurement & Collapse ─────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "Niels Bohr Institute", location: "Copenhagen, Denmark", era: "1927 CE", emoji: "👁️" },
    id: "quantum-i03",
    order: 3,
    title: "Looking Changes It",
    subtitle: "Measurement, Collapse & the Uncertainty Principle",
    category: "cybersecurity",
    xp: 130,
    badge: { id: "badge-qi-measure", name: "Measurement Apprentice", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "In the everyday world you can watch without interfering. In the quantum world, the act of looking forces nature to pick an answer — and erases the blend that was there a moment before.",
      year: 2024,
      overview: [
        "Measurement is where the quantum and everyday worlds meet. While unobserved, a quantum object can sit in superposition — a blend of possibilities. The instant you measure it, the blend 'collapses' to a single definite outcome, with the odds set by those amplitudes. Look at a spinning quantum coin and it snaps to heads or tails; the blend is gone.",
        "This is not mystical 'consciousness' magic — it is physical interaction:\n- 'Measuring' means letting the quantum system interact with something big (a detector, the air, a photon).\n- That interaction is what forces the choice; a conscious observer is not required, just a disturbance.\n- It explains the earlier point about decoherence: the everyday world constantly 'measures' big objects, which is why they never look quantum.",
        "Measurement also brings a famous limit — the uncertainty principle:\n- Some pairs of properties, like a particle's exact position and its exact speed, cannot both be pinned down at once.\n- The sharper you measure one, the fuzzier the other necessarily becomes — it is built into nature, not a flaw in our instruments.\n- This is why quantum information cannot simply be read like a page without disturbing it, a fact that later powers quantum-safe communication.",
      ],
      technical: {
        title: "Collapse, Disturbance, and a Built-In Limit",
        body: [
          "A few precise points make 'collapse' less mysterious:\n- Before measurement, outcomes have probabilities set by amplitudes; after, there is one definite result.\n- Measure the same qubit again immediately and you get the same answer — the collapse 'stuck'.\n- Which outcome you get is fundamentally random; quantum mechanics predicts the odds, not the individual result.",
          "The uncertainty principle is a real, quantitative rule, not vagueness:\n- It says certain pairs of measurements have a hard trade-off — improve one, lose precision on the other.\n- It is why you cannot copy an unknown quantum state perfectly (the 'no-cloning' rule) — reading it disturbs it.\n- That 'reading disturbs it' property is a feature, not just a limit: it lets two people detect an eavesdropper, because any attempt to listen leaves a mark. (Quantum key distribution, in the security tracks, is built on exactly this.)",
        ],
      },
      incident: {
        title: "The Quantum Eraser — Proving Observation Is the Key",
        when: "1982–2000",
        where: "Optics laboratories worldwide",
        impact: "Experiments showed that whether you can know a particle's path — not whether a human watches — determines its quantum behavior",
        body: [
          "In 'which-path' experiments, physicists send single particles toward two routes and check whether recording which route they took changes the result. The striking finding: the moment the path information exists in the apparatus, the quantum blend (and its interference) vanishes — even if no person ever reads the record.",
          "The 'quantum eraser' variant drives the point home:\n- If you delete the which-path information before it can be known, the quantum behavior returns.\n- This proves measurement is about information and physical interaction, not human consciousness.\n- It cleanly separates real physics from the mystical interpretations that often get attached to 'the observer effect' — what matters is whether the universe could, in principle, tell which path was taken.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Superposition", sub: "blend of possibilities", type: "system" },
          { label: "Measurement", sub: "interaction with the big world", type: "attacker" },
          { label: "Collapse", sub: "one definite, random outcome", type: "victim" },
          { label: "Uncertainty Limit", sub: "can't read it without disturbing it", type: "result" },
        ],
      },
      timeline: [
        { year: 1927, event: "Heisenberg states the uncertainty principle — a built-in measurement trade-off" },
        { year: 1927, event: "Bohr and the 'Copenhagen interpretation' frame measurement and collapse" },
        { year: 1982, event: "Quantum eraser experiments separate 'information' from 'conscious observer'", highlight: true },
        { year: 1984, event: "No-cloning + measurement disturbance inspire quantum key distribution (BB84)" },
      ],
      keyTakeaways: [
        "Measuring a quantum object collapses its blend of possibilities to one definite, random outcome",
        "It's physical interaction (a detector, the environment) — not human consciousness — that forces the choice",
        "The uncertainty principle is a hard limit: some property pairs can't both be measured sharply at once",
        "Reading an unknown quantum state disturbs it — a limit that becomes a security superpower (eavesdropper detection)",
      ],
      references: [
        { title: "Heisenberg's uncertainty principle — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/uncertainty-principle" },
        { title: "The observer effect and quantum eraser — Physics explainer", url: "https://www.quantamagazine.org/tag/quantum-physics/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i03-q1", type: "Core Idea", challenge: "The snap.", text: "What happens when you measure a quantum object in superposition?", options: ["Its blend collapses to a single definite outcome", "It splits into two objects", "It speeds up", "Nothing changes"], correctIndex: 0, explanation: "Measurement forces one definite result, with odds set by the amplitudes." },
        { id: "quantum-i03-q2", type: "No Magic", challenge: "What 'measuring' is.", text: "What actually causes a quantum collapse?", options: ["Physical interaction with something large (a detector or the environment)", "A human consciously thinking about it", "Turning off the lights", "A software update"], correctIndex: 0, explanation: "Any disturbance that records the outcome causes collapse — no conscious observer needed." },
        { id: "quantum-i03-q3", type: "Randomness", challenge: "Predicting outcomes.", text: "What does quantum mechanics predict about a single measurement?", options: ["Only the probability of each outcome, not which one you'll get", "The exact result every time", "Nothing at all", "That the result is always 0"], correctIndex: 0, explanation: "Individual outcomes are fundamentally random; the theory gives the odds, not the specific result." },
        { id: "quantum-i03-q4", type: "Uncertainty", challenge: "The hard limit.", text: "What does the uncertainty principle say?", options: ["Certain property pairs (like position and speed) can't both be measured sharply at once", "Scientists are unsure how atoms work", "Measurements are always wrong", "Quantum is just guessing"], correctIndex: 0, explanation: "It's a built-in trade-off in nature — sharpening one property necessarily blurs the other." },
        { id: "quantum-i03-q5", type: "Security Link", challenge: "Turning a limit into a tool.", text: "Why is 'reading disturbs the state' useful for security?", options: ["An eavesdropper can't intercept quantum information without leaving a detectable mark", "It makes passwords longer", "It deletes viruses", "It speeds up downloads"], correctIndex: 0, explanation: "Because measurement disturbs the state, listening in is detectable — the basis of quantum key distribution." },
        { id: "quantum-i03-q6", type: "Experiment", challenge: "Information, not minds.", text: "What did quantum eraser experiments show?", options: ["Whether path information could be known — not whether a human watches — controls the behavior", "That cameras are conscious", "That erasers are quantum", "That observation does nothing"], correctIndex: 0, explanation: "Deleting which-path information restores quantum behavior, proving it's about information, not consciousness." },
      ],
    },
  },

  // ─── quantum-i04: Wave-Particle Duality ──────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "The Double-Slit Experiment", location: "Cambridge, United Kingdom", era: "1801 / 1927 CE", emoji: "🌊" },
    id: "quantum-i04",
    order: 4,
    title: "Wave or Particle?",
    subtitle: "Wave-Particle Duality & the Double-Slit Experiment",
    category: "cybersecurity",
    xp: 135,
    badge: { id: "badge-qi-duality", name: "Duality Detective", emoji: "🌊" },
    challengeType: "quiz",
    info: {
      tagline: "Is light a wave or a stream of particles? The honest answer that took physics a century to accept: it is neither, and both — and a single experiment with two slits shows it better than any sentence can.",
      year: 2024,
      overview: [
        "One of the deepest quantum ideas is that the building blocks of nature are not quite waves and not quite particles — they are something new that shows wave-like or particle-like behavior depending on how you look. Light, electrons, even whole atoms all do this. It sounds like a contradiction; the double-slit experiment turns it into something you can see.",
        "Here is the experiment in plain terms:\n- Fire particles (photons or electrons) one at a time at a barrier with two narrow slits, and record where each lands on a screen behind it.\n- Each particle hits the screen as a single dot — that is the particle behavior.\n- But after many dots build up, they form a striped interference pattern — the signature of waves passing through both slits at once.",
        "The mind-bending part is what happens when you peek:\n- If you add a detector to learn which slit each particle went through, the stripes vanish and you get two plain bands — pure particle behavior.\n- The particle 'decides' to behave like a wave or a particle based on whether its path is knowable.\n- This ties directly to the last stage: gaining which-path information is a measurement, and measurement collapses the wave-like blend.",
      ],
      technical: {
        title: "Reading the Double-Slit",
        body: [
          "The pattern is the whole story, so it pays to read it carefully:\n- One slit open — particles pile up behind the slit in a single blob (ordinary).\n- Two slits open, no path detector — an interference pattern of light and dark stripes appears, as if each particle went through both slits and interfered with itself.\n- Two slits open, with a path detector — the stripes disappear; you get two blobs, one per slit.\n- Fired one at a time — the stripes still build up dot by dot, proving each lone particle interferes with itself, not with its neighbors.",
          "What this teaches the beginner is foundational:\n- 'Wave-particle duality' is not a vague slogan; it is the directly observed result above.\n- The wave is a wave of possibility (amplitude), and where it is strong, particles are likely to land.\n- Interference of those possibility-waves — the topic of the next stage — is the precise mechanism behind quantum computing's power.",
        ],
      },
      incident: {
        title: "1989 — Watching a Single Electron Build the Pattern",
        when: "1989",
        where: "Hitachi Research Laboratory, Japan",
        impact: "Tonomura's team filmed individual electrons arriving one by one and assembling an interference pattern — duality made undeniable",
        body: [
          "Thomas Young first showed light's wave nature with two slits in 1801, but the quantum punchline came much later. In 1989, Akira Tonomura's team at Hitachi sent electrons through a double-slit setup one at a time and recorded each arrival:\n- On screen, the first electrons looked like random scattered dots — clearly particles.\n- As thousands accumulated, the striped interference pattern emerged from the dots — clearly waves.",
          "The film became one of the most famous demonstrations in physics:\n- It proved a single electron interferes with itself; the wave behavior is not a crowd effect.\n- It made wave-particle duality something you could literally watch happen, not just read about.\n- A 2002 Physics World poll voted the single-electron double-slit 'the most beautiful experiment in physics' — the clearest window into quantum strangeness.",
        ],
      },
      diagram: {
        nodes: [
          { label: "One Particle Fired", sub: "lands as a single dot", type: "system" },
          { label: "Two Slits, No Peeking", sub: "interference stripes build up", type: "attacker" },
          { label: "Add a Path Detector", sub: "stripes vanish -> two blobs", type: "victim" },
          { label: "Duality", sub: "wave or particle, set by knowing", type: "result" },
        ],
      },
      timeline: [
        { year: 1801, event: "Thomas Young's double-slit shows light behaves as a wave" },
        { year: 1905, event: "Einstein shows light also comes in particles (photons) — duality is born" },
        { year: 1927, event: "Davisson–Germer: electrons diffract like waves, confirming matter waves" },
        { year: 1989, event: "Tonomura films single electrons assembling the interference pattern", highlight: true },
      ],
      keyTakeaways: [
        "Quantum objects are neither pure waves nor pure particles — they show either behavior depending on how you observe",
        "The double-slit: single dots (particle) build into interference stripes (wave) over many shots",
        "Adding a which-path detector destroys the stripes — knowing the path is a measurement that collapses the wave",
        "A single particle interferes with itself — proven by firing them one at a time",
      ],
      references: [
        { title: "The double-slit experiment — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/double-slit-experiment" },
        { title: "Tonomura single-electron double-slit (Hitachi)", url: "https://www.hitachi.com/rd/research/materials/quantum/doubleslit/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i04-q1", type: "Core Idea", challenge: "Neither and both.", text: "What does wave-particle duality mean?", options: ["Quantum objects show wave-like or particle-like behavior depending on how they're observed", "Everything is only a wave", "Everything is only a particle", "Light is broken"], correctIndex: 0, explanation: "Photons, electrons, and atoms behave as waves or particles depending on the experiment." },
        { id: "quantum-i04-q2", type: "The Pattern", challenge: "Two slits, no peeking.", text: "With two slits open and no path detector, single particles build up…", options: ["An interference pattern of light and dark stripes", "A single dot", "Nothing at all", "A perfect circle"], correctIndex: 0, explanation: "The striped pattern is the wave signature — each particle interferes with itself through both slits." },
        { id: "quantum-i04-q3", type: "Peeking", challenge: "Knowing the path.", text: "What happens to the interference stripes if you detect which slit each particle uses?", options: ["They disappear, leaving two plain blobs (particle behavior)", "They get brighter", "They turn into circles", "Nothing changes"], correctIndex: 0, explanation: "Knowing the path is a measurement; it collapses the wave behavior, erasing the interference." },
        { id: "quantum-i04-q4", type: "Self-Interference", challenge: "One at a time.", text: "What does firing particles one at a time prove?", options: ["A single particle interferes with itself — the wave behavior isn't a crowd effect", "Particles bump into each other", "The screen is faulty", "Only groups are quantum"], correctIndex: 0, explanation: "Even alone, each particle builds the pattern, so it must pass through both slits as a possibility-wave." },
        { id: "quantum-i04-q5", type: "Meaning", challenge: "What waves.", text: "In quantum terms, what is 'waving' in the double-slit?", options: ["A wave of possibility (amplitude) — where it's strong, particles are likely to land", "Ocean water", "Sound", "Electric cables"], correctIndex: 0, explanation: "The wave is the probability amplitude; its strength sets where particles tend to appear." },
        { id: "quantum-i04-q6", type: "Connection", challenge: "Why it matters next.", text: "Why does the double-slit set up the next idea, interference?", options: ["Possibility-waves adding and canceling is the mechanism behind quantum computing's power", "It proves computers are waves", "It has nothing to do with computing", "It shows slits are fast"], correctIndex: 0, explanation: "Interference of amplitudes — seen as the stripes — is exactly what quantum algorithms exploit." },
      ],
    },
  },

  // ─── quantum-i05: Interference ───────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "Quantum optics laboratory", location: "Paris, France", era: "Present Day", emoji: "🎚️" },
    id: "quantum-i05",
    order: 5,
    title: "Adding Up Possibilities",
    subtitle: "Interference — How Quantum Computers Get Their Edge",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-qi-interference", name: "Interference Initiate", emoji: "🎚️" },
    challengeType: "quiz",
    info: {
      tagline: "Superposition gets the headlines, but interference is where the real power hides. It is how a quantum computer makes wrong answers cancel out and right answers add up.",
      year: 2024,
      overview: [
        "Interference is the partner that makes superposition useful. Recall that quantum amplitudes — the weights of each possibility — can be positive or negative. When possibilities overlap, their amplitudes add: matching signs reinforce (constructive interference), opposite signs cancel (destructive interference). The double-slit stripes are exactly this — bright where amplitudes add, dark where they cancel.",
        "Why does a sign matter so much? Because classical probabilities cannot do it:\n- Ordinary odds only add up; two ways to reach an outcome always make it more likely.\n- Quantum amplitudes can subtract, so two ways to reach a wrong answer can cancel to zero probability.\n- This is the single most important difference between quantum and classical computing — and it is invisible if you only think about superposition.",
        "A quantum algorithm is essentially choreographed interference:\n- Start qubits in a superposition spanning many possibilities.\n- Nudge the amplitudes so that paths leading to wrong answers cancel and paths leading to right answers reinforce.\n- Measure, and the right answer is now overwhelmingly likely. The cleverness is not 'trying everything' — it is arranging the cancellation.",
      ],
      technical: {
        title: "Constructive and Destructive Cancellation",
        body: [
          "Think of amplitudes like waves on a pond, because the picture is exact:\n- Two crests meeting make a bigger crest — constructive interference, higher probability.\n- A crest meeting a trough flattens out — destructive interference, lower or zero probability.\n- Probabilities (amplitude squared) are always positive, but the amplitudes underneath carry the signs that allow cancellation.",
          "This reframes what a quantum computer actually does:\n- It is not a magic box that checks all answers in parallel and reads off the best one.\n- It is a device that prepares a superposition and then engineers interference so the unwanted possibilities destructively cancel.\n- Designing that cancellation is hard, which is why quantum computers help with only certain problems (factoring, search, simulation) — not everything. The next stages build toward seeing where the real speedups come from.",
        ],
      },
      incident: {
        title: "Grover's Algorithm — Interference as a Search Spotlight",
        when: "1996",
        where: "Bell Labs, New Jersey, USA",
        impact: "Showed interference can systematically amplify the right answer's amplitude, searching an unsorted list faster than any classical method",
        body: [
          "Lov Grover invented a quantum search algorithm that is a textbook picture of interference at work. Imagine looking for one name in an unsorted phone book of a million entries; classically you might check half a million on average. Grover's method:\n- Starts every possibility in an equal superposition.\n- Repeatedly nudges amplitudes so the target answer grows while the others shrink — constructive interference for the right answer, destructive for the wrong ones.",
          "The result is a clean, intuitive speedup:\n- It finds the item in about the square root of the number of entries — roughly a thousand steps for a million, instead of half a million.\n- It is not the dramatic exponential leap of factoring, but it shows the engine plainly: amplitudes are sculpted, not searched.\n- Grover's is one of the gentlest ways to grasp that interference — not brute parallelism — is the source of quantum advantage.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Superposition", sub: "many possibilities, with signs", type: "system" },
          { label: "Wrong Paths Cancel", sub: "destructive interference", type: "victim" },
          { label: "Right Path Reinforces", sub: "constructive interference", type: "attacker" },
          { label: "Measure the Answer", sub: "now overwhelmingly likely", type: "result" },
        ],
      },
      timeline: [
        { year: 1801, event: "Young's stripes — interference of waves first demonstrated" },
        { year: 1985, event: "Deutsch frames quantum computing around interference of amplitudes" },
        { year: 1994, event: "Shor's algorithm uses interference to factor numbers exponentially faster" },
        { year: 1996, event: "Grover's search makes interference-as-amplification intuitive", highlight: true },
      ],
      keyTakeaways: [
        "Interference is superposition's partner: amplitudes with matching signs add, opposite signs cancel",
        "Unlike classical odds, quantum amplitudes can subtract — letting wrong answers cancel to zero",
        "A quantum algorithm engineers interference so wrong paths cancel and the right answer reinforces",
        "Quantum power is sculpted cancellation, not brute-force 'trying every answer at once'",
      ],
      references: [
        { title: "Quantum interference — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained" },
        { title: "Grover's algorithm explained (beginner)", url: "https://quantum.cloud.ibm.com/learning/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i05-q1", type: "Core Idea", challenge: "Adding possibilities.", text: "What is quantum interference?", options: ["Amplitudes adding or canceling — matching signs reinforce, opposite signs cancel", "Two computers competing", "Radio static", "A type of qubit"], correctIndex: 0, explanation: "Interference is how possibility-amplitudes combine, constructively or destructively." },
        { id: "quantum-i05-q2", type: "The Key Difference", challenge: "Signs matter.", text: "What can quantum amplitudes do that classical probabilities cannot?", options: ["Subtract — so two routes to a wrong answer can cancel to zero", "Be larger than one", "Be measured for free", "Travel faster than light"], correctIndex: 0, explanation: "Classical odds only add; quantum amplitudes carry signs and can cancel — the heart of quantum advantage." },
        { id: "quantum-i05-q3", type: "Algorithm Engine", challenge: "What an algorithm does.", text: "What is a quantum algorithm fundamentally doing?", options: ["Engineering interference so wrong answers cancel and the right one reinforces", "Trying every answer and reading the best", "Guessing randomly", "Running classical code faster"], correctIndex: 0, explanation: "The skill is sculpting amplitudes so the desired outcome dominates at measurement." },
        { id: "quantum-i05-q4", type: "Myth Buster", challenge: "Not magic parallelism.", text: "Why is 'a quantum computer tries all answers at once' misleading?", options: ["You only ever measure one outcome; the trick is interference making it the right one", "Quantum computers are slow", "They can't hold superpositions", "They check answers in order"], correctIndex: 0, explanation: "Superposition holds many possibilities, but a single measurement returns one — interference makes it the answer." },
        { id: "quantum-i05-q5", type: "Wave Picture", challenge: "Crests and troughs.", text: "Destructive interference is like…", options: ["A wave crest meeting a trough and flattening out", "Two crests stacking higher", "A wave with no motion", "A straight line"], correctIndex: 0, explanation: "Opposite-sign amplitudes cancel, just as a crest and trough flatten on a pond." },
        { id: "quantum-i05-q6", type: "Example", challenge: "Grover's spotlight.", text: "How does Grover's search use interference?", options: ["It repeatedly amplifies the target's amplitude while shrinking the others", "It sorts the list first", "It deletes wrong entries", "It asks each entry politely"], correctIndex: 0, explanation: "Constructive interference grows the right answer; destructive interference shrinks the rest — a clean demo of the engine." },
      ],
    },
  },

  // ─── quantum-i06: Entanglement ───────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "2022 Nobel Prize in Physics — Bell test experiments", location: "Stockholm, Sweden", era: "2022 CE", emoji: "🔗" },
    id: "quantum-i06",
    order: 6,
    title: "The Spooky Connection",
    subtitle: "Entanglement — Correlated Coins Across Any Distance",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-qi-entangle", name: "Entanglement Adept", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "Take two quantum coins, link them, and send them across the galaxy. Flip one and you instantly know the other — a connection Einstein called 'spooky action at a distance' and disliked intensely. He was wrong; it is real.",
      year: 2024,
      overview: [
        "Entanglement is the quantum link that has no classical equal. Two particles can be prepared so that their fates are bound together: measure one and you immediately learn something about the other, no matter how far apart they are. It is not that they were secretly set in advance — experiments prove the correlation is deeper and stranger than any pre-arranged plan could produce.",
        "The careful version of the picture matters, so beginners don't over-claim:\n- Entangled particles share a single joint state; neither has a definite value of its own until measured.\n- Measure one and the other's outcome becomes instantly correlated — perfectly matched (or perfectly opposite), by design.\n- But you cannot use this to send a message faster than light: each individual result still looks random, and you only see the correlation by comparing notes afterward through a normal (slower-than-light) channel.",
        "Entanglement is a workhorse, not just a curiosity:\n- It is the resource behind quantum teleportation (transferring a quantum state), superdense coding, and many quantum algorithms.\n- Entangling many qubits is what lets a quantum computer represent correlations no classical bit-string can.\n- It also underpins quantum networking and the strongest forms of quantum-secure communication in the security tracks.",
      ],
      technical: {
        title: "Correlation Deeper Than Any Hidden Plan",
        body: [
          "The crux is distinguishing entanglement from ordinary correlation:\n- Ordinary correlation — put a left glove in one box and a right glove in another; opening one tells you the other, but each glove was always left or right.\n- Entanglement — the particles genuinely have no definite value until measured, yet still come out perfectly correlated; this is what the gloves cannot do.\n- John Bell devised a precise test (an inequality) that a 'gloves' explanation can never break but entanglement does — turning philosophy into a measurable number.",
          "What the Bell tests settle, and what they don't:\n- Real experiments violate Bell's inequality, ruling out 'local hidden variables' — the comforting idea that the answers were set in advance and nothing non-local is happening.\n- This does not permit faster-than-light signaling; the no-communication theorem still holds, because the marginal results are random.\n- The takeaway for a beginner: entanglement is a real, usable, non-classical correlation — weird, but tamed and engineered every day in quantum labs.",
        ],
      },
      incident: {
        title: "2022 — A Nobel Prize for Proving Einstein Wrong",
        when: "October 2022",
        where: "Stockholm — recognizing decades of work",
        impact: "Aspect, Clauser, and Zeilinger won the Nobel Prize for Bell-test experiments confirming entanglement and launching quantum information science",
        body: [
          "Einstein, with Podolsky and Rosen, argued in 1935 that quantum mechanics must be incomplete — surely the particles had hidden, pre-set values, because 'spooky action at a distance' seemed absurd. For decades it looked like an unanswerable philosophical dispute, until John Bell showed in 1964 that the two views make different, testable predictions.",
          "Three experimentalists then settled it over many years:\n- John Clauser ran the first Bell tests in the 1970s; Alain Aspect closed key loopholes in the 1980s; Anton Zeilinger pushed entanglement to long distances and practical uses.\n- Their results consistently violated Bell's inequality — entanglement is real, and local hidden variables are ruled out.\n- The 2022 Nobel Prize honored this work, which also founded the field that now builds quantum computers, quantum networks, and quantum-secure communication.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Entangle Two Qubits", sub: "one shared joint state", type: "system" },
          { label: "Separate Them", sub: "any distance apart", type: "victim" },
          { label: "Measure One", sub: "other is instantly correlated", type: "attacker" },
          { label: "No FTL Messaging", sub: "correlation seen only by comparing", type: "result" },
        ],
      },
      timeline: [
        { year: 1935, event: "Einstein–Podolsky–Rosen argue quantum theory is 'incomplete' (the EPR paradox)" },
        { year: 1964, event: "John Bell turns the debate into a testable inequality" },
        { year: 1982, event: "Aspect's experiments close loopholes, strongly confirming entanglement" },
        { year: 2022, event: "Nobel Prize to Aspect, Clauser, Zeilinger for Bell-test experiments", highlight: true },
      ],
      keyTakeaways: [
        "Entanglement links particles into one joint state — measure one and the other is instantly correlated, at any distance",
        "It's deeper than hidden 'gloves': entangled particles have no definite value until measured, yet still match perfectly",
        "Bell tests rule out pre-set hidden values — but no faster-than-light messaging is possible (results look random alone)",
        "It's a core resource for quantum computing, teleportation, networking, and quantum-secure communication",
      ],
      references: [
        { title: "Entanglement & the 2022 Nobel Prize — Nobel Prize", url: "https://www.nobelprize.org/prizes/physics/2022/summary/" },
        { title: "Quantum entanglement explained — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/entanglement" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i06-q1", type: "Core Idea", challenge: "The link.", text: "What is quantum entanglement?", options: ["Two particles sharing one joint state, so measuring one instantly correlates with the other", "Two particles glued together physically", "A fast internet cable", "Two identical copies of a file"], correctIndex: 0, explanation: "Entangled particles behave as a single linked system regardless of distance." },
        { id: "quantum-i06-q2", type: "Not Gloves", challenge: "Deeper than hidden values.", text: "How is entanglement different from a pair of gloves in two boxes?", options: ["Entangled particles have no definite value until measured, yet still come out correlated", "It's exactly like gloves", "The gloves are faster", "There is no difference"], correctIndex: 0, explanation: "Bell tests prove the correlation can't be explained by pre-set values, unlike the gloves." },
        { id: "quantum-i06-q3", type: "No FTL", challenge: "Can you message with it?", text: "Can entanglement send information faster than light?", options: ["No — each result looks random; the correlation only shows when you compare notes later", "Yes, instantly across any distance", "Yes, but only short messages", "Only on weekends"], correctIndex: 0, explanation: "The no-communication theorem holds; you need a normal channel to compare and reveal the correlation." },
        { id: "quantum-i06-q4", type: "The Test", challenge: "Settling the debate.", text: "What did John Bell contribute?", options: ["A testable inequality that distinguishes entanglement from pre-set hidden values", "A new kind of glove", "The first quantum computer", "A faster telescope"], correctIndex: 0, explanation: "Bell turned a philosophical argument into an experiment with different predictions." },
        { id: "quantum-i06-q5", type: "The Verdict", challenge: "Who was right.", text: "What did the Bell-test experiments (2022 Nobel) conclude?", options: ["Entanglement is real and 'local hidden variables' are ruled out — Einstein's objection failed", "Einstein was right; entanglement is fake", "The results were inconclusive", "Particles use gloves"], correctIndex: 0, explanation: "Experiments violate Bell's inequality, confirming genuine non-classical entanglement." },
        { id: "quantum-i06-q6", type: "Uses", challenge: "Why we care.", text: "Why is entanglement valuable?", options: ["It's a core resource for quantum computing, teleportation, networking, and secure communication", "It makes batteries last longer", "It cools down servers", "It compresses images"], correctIndex: 0, explanation: "Entangled qubits enable correlations and protocols impossible for classical bits." },
      ],
    },
  },

  // ─── quantum-i07: The Qubit ──────────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "IBM Quantum lab", location: "Yorktown Heights, New York, USA", era: "Present Day", emoji: "⚛️" },
    id: "quantum-i07",
    order: 7,
    title: "Meet the Qubit",
    subtitle: "From Bit to Qubit — the Building Block of Quantum Computing",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-qi-qubit", name: "Qubit Builder", emoji: "⚛️" },
    challengeType: "quiz",
    info: {
      tagline: "A classical bit is a light switch: on or off, 0 or 1. A qubit is a dimmer that can also point in directions a switch never could — and that extra freedom is where quantum computing lives.",
      year: 2024,
      overview: [
        "Everything so far — superposition, measurement, interference, entanglement — comes together in the qubit, the basic unit of quantum information. A classical bit is strictly 0 or 1. A qubit can be 0, 1, or any superposition blend of the two, and several qubits can be entangled. It is the place where the physics becomes a technology.",
        "A helpful mental picture is an arrow on a globe (the 'Bloch sphere'), introduced gently:\n- The north pole is 0, the south pole is 1, and the arrow can point anywhere on the surface in between.\n- Where it points encodes the superposition blend and a second quantity called 'phase' (which carries the sign that makes interference work).\n- Measuring forces the arrow to snap to the north or south pole — back to a plain 0 or 1.",
        "Qubits are made from real physical things, each a tiny isolated quantum system:\n- Superconducting circuits chilled near absolute zero (IBM, Google), trapped ions held by lasers (IonQ, Quantinuum), photons, neutral atoms, and more.\n- All face the same enemy — decoherence — so they need extreme isolation, cooling, and error correction.\n- The count and quality of qubits is how we measure progress: more good, stable, low-error qubits means more useful computation.",
      ],
      technical: {
        title: "What Makes a Qubit Different",
        body: [
          "Two qubit properties do the heavy lifting:\n- Superposition — a qubit holds a weighted blend of 0 and 1, not just one value.\n- Phase — beyond the blend, a qubit carries a phase (think of the arrow's direction around the globe) whose sign enables constructive and destructive interference.\n- Entanglement — qubits can be linked so the group's state is richer than any list of individual qubit values.",
          "Why n qubits are powerful — stated carefully:\n- A register of n qubits can be in a superposition spanning 2^n combinations at once: 300 qubits span more combinations than there are atoms in the visible universe.\n- But you cannot read all 2^n out — a measurement gives a single n-bit answer.\n- The power comes from manipulating that huge superposition with interference so a useful answer emerges, which is exactly why qubit quality (low error, long coherence) matters as much as qubit count.",
        ],
        codeExample: {
          label: "Creating a qubit in superposition (Qiskit — beginner)",
          code: `from qiskit import QuantumCircuit

# One qubit, one classical bit to store the measurement.
qc = QuantumCircuit(1, 1)

# The Hadamard gate (H) puts the qubit into an equal 0/1 superposition.
qc.h(0)

# Measure: the superposition collapses to 0 or 1, ~50/50 each run.
qc.measure(0, 0)

# Run it many times and you'll see roughly half 0s and half 1s —
# the qubit really was a blend, not secretly one value.`,
        },
      },
      incident: {
        title: "From One Qubit to Quantum Machines You Can Use",
        when: "1998–Present",
        where: "Research labs and cloud quantum computers",
        impact: "The qubit went from a single fragile demonstration to cloud-accessible machines with hundreds of qubits in about two decades",
        body: [
          "The first working qubits appeared in the late 1990s — single, short-lived, error-prone demonstrations using nuclear spins and trapped ions. Progress was steady but humbling: keeping even one qubit coherent long enough to compute was a triumph.",
          "The last decade changed the picture for beginners and professionals alike:\n- IBM put a real quantum computer on the cloud in 2016, letting anyone run a circuit like the one above from a laptop.\n- Devices grew from a handful of qubits to hundreds, and the focus shifted from raw count to error rates and error correction.\n- We are in the 'NISQ' era — Noisy Intermediate-Scale Quantum — where machines are real and improving but not yet error-corrected enough for the biggest promised tasks, a nuance the next stage explores.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Classical Bit", sub: "0 or 1, a light switch", type: "system" },
          { label: "Qubit", sub: "blend of 0 and 1 + phase", type: "attacker" },
          { label: "Many Qubits", sub: "entangled, span 2^n states", type: "victim" },
          { label: "Measure", sub: "collapses to one n-bit answer", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "First working qubits demonstrated (nuclear spin, trapped ions)" },
        { year: 2016, event: "IBM puts a real quantum computer on the cloud for anyone to use", highlight: true },
        { year: 2019, event: "Devices reach dozens of qubits; first claims of quantum advantage" },
        { year: 2023, event: "Hundreds of qubits; focus shifts to error correction and quality" },
      ],
      keyTakeaways: [
        "A qubit can be 0, 1, or any superposition of both — and can be entangled with other qubits",
        "Picture it as an arrow on a globe: position encodes the blend, and 'phase' carries the sign for interference",
        "n qubits span 2^n combinations in superposition, but a measurement returns only one n-bit answer",
        "Real qubits are fragile physical systems; quality (low error, long coherence) matters as much as quantity",
      ],
      references: [
        { title: "What is a qubit? — IBM Quantum", url: "https://www.ibm.com/topics/qubit" },
        { title: "Qubits and the Bloch sphere — Microsoft Quantum (beginner)", url: "https://learn.microsoft.com/en-us/azure/quantum/concepts-the-qubit" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i07-q1", type: "Core Idea", challenge: "Bit vs qubit.", text: "How does a qubit differ from a classical bit?", options: ["A qubit can be 0, 1, or a superposition of both (and can entangle)", "A qubit is just a faster bit", "A qubit is always 0", "There is no difference"], correctIndex: 0, explanation: "Qubits add superposition, phase, and entanglement — far more than a strict 0-or-1 bit." },
        { id: "quantum-i07-q2", type: "Picture", challenge: "The globe.", text: "On the Bloch-sphere picture, what do the north and south poles represent?", options: ["The definite states 0 and 1; in-between directions are superpositions", "Hot and cold", "Two different qubits", "On and off switches only"], correctIndex: 0, explanation: "Poles are 0 and 1; the arrow pointing elsewhere encodes the superposition and phase." },
        { id: "quantum-i07-q3", type: "Phase", challenge: "The hidden ingredient.", text: "Besides the 0/1 blend, what does a qubit's 'phase' provide?", options: ["The sign that enables constructive and destructive interference", "Its temperature", "Its weight", "Its color"], correctIndex: 0, explanation: "Phase carries the signs that make interference — and thus quantum algorithms — work." },
        { id: "quantum-i07-q4", type: "Scaling", challenge: "The big number.", text: "How many combinations can n qubits hold in superposition?", options: ["2^n combinations at once", "n combinations", "Exactly 2", "n squared"], correctIndex: 0, explanation: "n qubits span 2^n states — 300 qubits exceed the number of atoms in the visible universe." },
        { id: "quantum-i07-q5", type: "Reading Out", challenge: "The catch.", text: "When you measure an n-qubit register, what do you get?", options: ["A single n-bit answer — you can't read out all 2^n states", "All 2^n answers at once", "Nothing", "A random number unrelated to the qubits"], correctIndex: 0, explanation: "Measurement returns one outcome; interference must make the useful one likely first." },
        { id: "quantum-i07-q6", type: "Reality", challenge: "Quality vs quantity.", text: "Why does qubit 'quality' matter as much as the number of qubits?", options: ["Qubits are fragile; low error rates and long coherence are needed for useful computation", "More qubits always means useful results", "Quality is irrelevant", "Quality only affects color"], correctIndex: 0, explanation: "Noisy, short-lived qubits can't run long algorithms; error rates and coherence are decisive." },
      ],
    },
  },

  // ─── quantum-i08: Quantum Gates ──────────────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "Quantum circuit design studio", location: "Zurich, Switzerland", era: "Present Day", emoji: "🧩" },
    id: "quantum-i08",
    order: 8,
    title: "Quantum LEGO",
    subtitle: "Quantum Gates & Circuits — Programming a Qubit",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-qi-gates", name: "Circuit Tinkerer", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "Classical computers are built from logic gates — AND, OR, NOT. Quantum computers have their own gates, but instead of flipping switches they rotate the qubit's arrow, and that opens moves a classical computer simply does not have.",
      year: 2024,
      overview: [
        "If a qubit is the building block, quantum gates are the LEGO connectors — the operations that change qubit states to perform a computation. A quantum program is a 'circuit': a sequence of gates applied to qubits, ending in a measurement. The gates are how you steer superposition and interference toward an answer.",
        "A few starter gates cover a lot of ground:\n- X gate (the quantum NOT) — flips 0 to 1 and 1 to 0.\n- Hadamard (H) — turns a definite 0 or 1 into an equal superposition; the gate that 'creates quantumness'.\n- Z and phase gates — leave the 0/1 odds alone but change the phase (the sign), setting up interference.\n- CNOT — a two-qubit gate that flips a target qubit depending on a control qubit; this is how you create entanglement.",
        "Two rules make quantum gates feel different from classical ones:\n- They are reversible — every quantum gate can be undone, because the underlying physics is reversible (unlike a classical AND, which loses information).\n- They are rotations — each gate rotates the qubit's arrow on the globe rather than forcing a 0/1 choice; only measurement does that.\n- With a small set of gates (like H, T, and CNOT) you can build any quantum computation — the quantum version of 'universal' logic.",
      ],
      technical: {
        title: "Building a Circuit",
        body: [
          "A canonical first circuit is the 'Bell pair' — the simplest entanglement:\n- Apply H to the first qubit to put it in superposition.\n- Apply CNOT with the first qubit as control and the second as target.\n- Now the two qubits are entangled: measuring them always gives matching results (00 or 11), never mixed — exactly the entanglement from an earlier stage, built from two gates.",
          "How a real quantum program runs, in beginner terms:\n- You design the circuit (the gate sequence), choosing gates so that interference makes the right answer likely.\n- Because results are probabilistic, you run the circuit many times ('shots') and look at the distribution of outcomes.\n- Today's hardware adds noise, so part of the craft is keeping circuits short and using error mitigation — a reminder that gate quality, not just cleverness, limits what runs.",
        ],
        codeExample: {
          label: "A Bell pair — entangling two qubits with two gates (Qiskit)",
          code: `from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)

qc.h(0)         # qubit 0 -> equal superposition
qc.cx(0, 1)     # CNOT: entangle qubit 1 with qubit 0
qc.measure([0, 1], [0, 1])

# Run many shots: you'll see ~50% "00" and ~50% "11",
# and essentially never "01" or "10" — the hallmark of entanglement.`,
        },
      },
      incident: {
        title: "1985 — Deutsch Defines What a Quantum Computer Even Is",
        when: "1985",
        where: "University of Oxford, United Kingdom",
        impact: "David Deutsch formalized the quantum circuit model, giving quantum computing its 'gates and circuits' foundation",
        body: [
          "Before quantum computers could be built, someone had to define them. In 1985 David Deutsch described a universal quantum computer and the idea of computing by applying reversible quantum gates to qubits — the model every quantum machine still follows.",
          "The framework turned a physics curiosity into a computing discipline:\n- It showed there are tasks a quantum computer could do that a classical one cannot do as efficiently, by exploiting superposition and interference through gates.\n- It set the stage for Shor's and Grover's algorithms, which are just particular clever circuits.\n- For a beginner, the lesson is grounding: a quantum computer is not a mysterious oracle — it is qubits, a sequence of gates, and a measurement, designed so interference reveals an answer.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Qubits Start at 0", sub: "the blank circuit", type: "system" },
          { label: "Hadamard (H)", sub: "creates superposition", type: "attacker" },
          { label: "CNOT", sub: "entangles two qubits", type: "victim" },
          { label: "Measure (many shots)", sub: "read the outcome distribution", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Deutsch defines the universal quantum computer and circuit model", highlight: true },
        { year: 1995, event: "Universal gate sets identified — a few gates suffice for any computation" },
        { year: 2016, event: "Cloud quantum computers let beginners run gate circuits from a browser" },
        { year: 2023, event: "Error-mitigated circuits push toward practical, larger computations" },
      ],
      keyTakeaways: [
        "Quantum gates are operations on qubits; a sequence of gates plus a measurement is a quantum circuit",
        "Starter gates: X (flip), Hadamard (make superposition), Z/phase (set the sign), CNOT (entangle)",
        "Quantum gates are reversible and act as rotations of the qubit's arrow — only measurement forces 0/1",
        "A small universal gate set builds any computation; results are read from many repeated runs (shots)",
      ],
      references: [
        { title: "Quantum gates and circuits — IBM Quantum Learning", url: "https://quantum.cloud.ibm.com/learning/" },
        { title: "Build a Bell pair — Qiskit textbook (beginner)", url: "https://qiskit.org/learn/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i08-q1", type: "Core Idea", challenge: "What gates do.", text: "What is a quantum gate?", options: ["An operation that changes qubit states to perform part of a computation", "A physical door on the computer", "A type of qubit", "A measurement result"], correctIndex: 0, explanation: "Gates manipulate qubits; a sequence of them forms a quantum circuit." },
        { id: "quantum-i08-q2", type: "The H Gate", challenge: "Making quantumness.", text: "What does the Hadamard (H) gate do?", options: ["Turns a definite 0 or 1 into an equal superposition", "Deletes the qubit", "Measures the qubit", "Cools the computer"], correctIndex: 0, explanation: "H creates an even 0/1 superposition — the gate that introduces quantum behavior." },
        { id: "quantum-i08-q3", type: "Entangling", challenge: "Linking qubits.", text: "Which gate is used to entangle two qubits?", options: ["CNOT (controlled-NOT)", "The X gate alone", "A measurement", "The phase gate alone"], correctIndex: 0, explanation: "H then CNOT creates a Bell pair — the simplest entangled state." },
        { id: "quantum-i08-q4", type: "Reversibility", challenge: "A key property.", text: "How do quantum gates differ from a classical AND gate?", options: ["Quantum gates are reversible — they can be undone without losing information", "They are slower", "They use more electricity", "They can't be combined"], correctIndex: 0, explanation: "Quantum operations are reversible rotations; classical AND discards information." },
        { id: "quantum-i08-q5", type: "Running It", challenge: "Why repeat.", text: "Why do you run a quantum circuit many times ('shots')?", options: ["Results are probabilistic, so you read the answer from the distribution of outcomes", "The computer forgets after one run", "To waste time", "Once is never allowed"], correctIndex: 0, explanation: "Each run yields one measurement; many shots reveal the probability distribution the circuit produces." },
        { id: "quantum-i08-q6", type: "Grounding", challenge: "Demystified.", text: "In the circuit model, a quantum computer is fundamentally…", options: ["Qubits, a sequence of gates, and a measurement designed so interference reveals an answer", "A magical oracle that just knows answers", "A faster classical CPU", "A random number generator"], correctIndex: 0, explanation: "Deutsch's model: it's gates on qubits, not magic — interference does the work." },
      ],
    },
  },

  // ─── quantum-i09: Why Quantum Computers Matter ───────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "Google Quantum AI", location: "Santa Barbara, California, USA", era: "2019 CE", emoji: "🚀" },
    id: "quantum-i09",
    order: 9,
    title: "Why All the Hype?",
    subtitle: "What Quantum Computers Can (and Can't) Do",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-qi-power", name: "Quantum Realist", emoji: "🚀" },
    challengeType: "quiz",
    info: {
      tagline: "Quantum computers are not just faster classical computers, and they will not speed up your spreadsheet. They are a different tool that wins big on a few special problems — and understanding which ones is the difference between hype and reality.",
      year: 2024,
      overview: [
        "It is tempting to imagine a quantum computer as a super-fast classical one that 'tries everything at once'. That picture is wrong, and getting it right is the most valuable thing a beginner can do. Quantum computers exploit superposition and interference to solve certain structured problems far faster — but for most everyday computing, they offer no advantage at all.",
        "Where quantum computers genuinely shine:\n- Factoring large numbers — Shor's algorithm threatens today's RSA/ECC encryption, the reason the security tracks exist.\n- Searching and optimization — Grover's algorithm gives a quadratic (square-root) speedup for unstructured search.\n- Simulating quantum systems — modeling molecules and materials, which is naturally quantum and brutally hard for classical machines; this may transform chemistry, drug discovery, and batteries.",
        "Where they do not help — and why honesty matters:\n- Everyday tasks (email, video, spreadsheets, most software) see no speedup; classical computers remain better and cheaper.\n- The famous speedups need specific mathematical structure; throwing qubits at a generic problem does nothing.\n- And today's machines are 'NISQ' — noisy and modest-sized — so the biggest promised wins (like breaking RSA) await large, error-corrected machines that do not yet exist. The threat is real and coming, but it is years out, which is exactly why migration starts now.",
      ],
      technical: {
        title: "Speedups, Honestly",
        body: [
          "It helps to separate three very different kinds of 'fast':\n- Exponential speedup (rare and huge) — e.g., Shor's factoring; turns a task that would take billions of years into hours, and is what endangers current public-key cryptography.\n- Polynomial speedup (useful, modest) — e.g., Grover's square-root search; helpful but not civilization-altering.\n- No speedup (most things) — adding, sorting, serving web pages; quantum offers nothing here.",
          "Two myths to retire for good:\n- 'Quantum tries all answers in parallel and reads the best.' — No. It holds many possibilities, but measurement returns one; interference must concentrate probability on the right answer first.\n- 'Quantum computers will replace classical computers.' — No. They are specialized co-processors for particular problems; you will still run classical machines for almost everything, calling a quantum computer only when its structure fits.",
        ],
      },
      incident: {
        title: "2019 — Google Claims 'Quantum Supremacy' (and the Debate That Followed)",
        when: "October 2019",
        where: "Google Quantum AI, Santa Barbara",
        impact: "A 53-qubit processor performed a contrived task in minutes that Google argued would take a supercomputer millennia — a milestone, and a lesson in nuance",
        body: [
          "Google's Sycamore processor completed a carefully chosen sampling task in about 200 seconds and claimed a classical supercomputer would need thousands of years — the first demonstration of a quantum machine outpacing the best classical ones on some task.",
          "The episode is a perfect teaching moment about hype versus substance:\n- The task was deliberately contrived to favor the quantum device and had no practical use — 'supremacy' meant a benchmark, not a useful application.\n- IBM promptly argued a better classical method could do it in days, not millennia, and later classical algorithms narrowed the gap further.\n- The honest takeaway: quantum hardware crossed a real threshold, but the headline overstated it. Useful, error-corrected quantum advantage on practical problems is still ahead — which is why the field talks about 'quantum advantage' on real tasks, not just 'supremacy' on benchmarks.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Structured Problem", sub: "factoring, simulation, search", type: "system" },
          { label: "Superposition + Interference", sub: "concentrate the right answer", type: "attacker" },
          { label: "Big Speedup (sometimes)", sub: "exponential or square-root", type: "result" },
          { label: "Everyday Tasks", sub: "no quantum advantage", type: "victim" },
        ],
      },
      timeline: [
        { year: 1994, event: "Shor's algorithm: quantum computers could break RSA — the wake-up call" },
        { year: 1996, event: "Grover's algorithm: quadratic speedup for unstructured search" },
        { year: 2019, event: "Google claims 'quantum supremacy' on a contrived benchmark task", highlight: true },
        { year: 2024, event: "Focus shifts to error correction and 'useful quantum advantage' on real problems" },
      ],
      keyTakeaways: [
        "Quantum computers are specialized tools, not faster classical computers — they win on a few structured problems",
        "Real strengths: factoring (breaks RSA/ECC), quantum simulation (chemistry/materials), and search/optimization",
        "Most everyday computing sees no speedup; the famous wins need specific mathematical structure",
        "Today's machines are noisy (NISQ); breaking RSA needs large error-corrected machines — coming, but years away",
      ],
      references: [
        { title: "Quantum advantage and supremacy — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained/quantum-computing-explained" },
        { title: "Google's quantum supremacy result and the response", url: "https://www.nature.com/articles/d41586-019-03213-z" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i09-q1", type: "Core Idea", challenge: "What they are.", text: "How should you think about a quantum computer?", options: ["A specialized tool that wins big on a few structured problems, not a faster everyday computer", "A faster version of any classical computer", "A replacement for your laptop", "A type of internet connection"], correctIndex: 0, explanation: "Quantum computers excel only on specific problems; classical machines stay better for most tasks." },
        { id: "quantum-i09-q2", type: "Strengths", challenge: "Where they win.", text: "Which is a genuine quantum strength?", options: ["Simulating molecules and materials (naturally quantum problems)", "Loading web pages faster", "Storing more photos", "Typing documents"], correctIndex: 0, explanation: "Factoring, quantum simulation, and search/optimization are the real wins — chemistry is a flagship example." },
        { id: "quantum-i09-q3", type: "Myth", challenge: "The parallelism myth.", text: "Why is 'tries all answers at once and reads the best' wrong?", options: ["Measurement returns just one outcome; interference must make it the right one first", "Quantum computers can't hold data", "They only have one qubit", "They check answers alphabetically"], correctIndex: 0, explanation: "Superposition holds many possibilities, but you measure one — the engine is interference, not brute parallelism." },
        { id: "quantum-i09-q4", type: "Limits", challenge: "Where they don't help.", text: "What about everyday computing tasks?", options: ["They see no quantum speedup — classical computers remain better and cheaper", "They run twice as fast", "They become instant", "They stop working"], correctIndex: 0, explanation: "Without special structure, quantum offers no advantage; most software gains nothing." },
        { id: "quantum-i09-q5", type: "Timeline", challenge: "The RSA threat.", text: "Why does breaking RSA with Shor's algorithm not happen today?", options: ["It needs large, error-corrected machines that don't exist yet — today's are noisy (NISQ)", "RSA is already broken", "Quantum computers refuse to do it", "It was banned"], correctIndex: 0, explanation: "The threat is real but years out; that lead time is exactly why crypto migration starts now." },
        { id: "quantum-i09-q6", type: "Hype Check", challenge: "Supremacy in context.", text: "What did Google's 2019 'quantum supremacy' actually show?", options: ["A quantum device beat classical machines on a contrived benchmark with no practical use", "Quantum computers broke encryption", "Quantum computers replaced supercomputers", "Nothing happened"], correctIndex: 0, explanation: "It was a real milestone but a contrived task — useful quantum advantage on practical problems is still ahead." },
      ],
    },
  },

  // ─── quantum-i10: Quantum in Your Future ─────────────────────────────────────
  {
    epochId: "quantum-intro",
    wonder: { name: "The quantum technology frontier", location: "Worldwide", era: "Present Day → Future", emoji: "🔭" },
    id: "quantum-i10",
    order: 10,
    title: "Quantum in Your Future",
    subtitle: "Where Quantum Goes Next — and Why It Touches You",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-qi-future", name: "Quantum Graduate", emoji: "🔭" },
    challengeType: "quiz",
    info: {
      tagline: "Quantum is not only future computers. It is already sharpening medical scanners and navigation, it is reshaping cybersecurity right now, and it is becoming a field you can actually work in. Here is the map of what comes next.",
      year: 2024,
      overview: [
        "You have built the core intuitions:\n- superposition\n- measurement\n- duality\n- interference\n- entanglement\n- qubits\n- gates\nThis final stage zooms out to where these ideas are heading — because quantum is not a single technology but a family of them, and several are already in your life.",
        "Quantum technology splits into three practical branches:\n- Quantum computing — the machines we have focused on, aimed at chemistry, materials, optimization, and (eventually) breaking certain cryptography.\n- Quantum sensing — using fragile quantum states to measure tiny changes; it is already improving MRI, gravity sensors, and ultra-precise atomic clocks (the heart of GPS).\n- Quantum communication & networking — using entanglement and the measurement-disturbance rule to move information in ways that reveal eavesdroppers.",
        "The branch that affects everyone soonest is security, which connects this track to the rest of the platform:\n- Shor's algorithm means a future quantum computer could break the RSA/ECC encryption protecting today's internet — and adversaries can 'harvest now, decrypt later'.\n- That is why the world is migrating to post-quantum cryptography now, years before the threat fully arrives.\n- If you enjoyed this, the platform's Quantum Era security tracks pick up exactly here — the threat, the new NIST algorithms, and how organizations actually migrate.",
      ],
      technical: {
        title: "From Curiosity to Career",
        body: [
          "Quantum is becoming a real job market, and the on-ramps are broader than people expect:\n- You do not have to be a physicist — the field needs software engineers, security professionals, hardware and cryptography specialists, and educators.\n- Free tools let anyone start: cloud quantum computers (IBM, others), Qiskit and similar SDKs, and open courses turn the ideas here into hands-on practice.\n- Governments and companies are investing heavily (national quantum initiatives, large corporate labs), so quantum literacy is becoming a genuine career asset.",
          "A grounded sense of the timeline keeps expectations honest:\n- Near term — quantum sensing and small, noisy computers deliver niche value; PQC migration is the urgent, practical work happening today.\n- Medium term — error-corrected machines unlock simulation and optimization wins, and the cryptographic threat matures.\n- The most useful posture for a beginner is exactly what you have built here: enough real understanding to tell genuine progress from hype, and to know which problems quantum will and will not solve.",
        ],
      },
      incident: {
        title: "The Quantum Race — Nations and Companies Bet Big",
        when: "2018–Present",
        where: "United States, European Union, China, and global industry",
        impact: "Multi-billion-dollar national programs and corporate labs turned quantum from academic curiosity into strategic technology",
        body: [
          "Around 2018, quantum technology became a geopolitical and commercial priority. The US National Quantum Initiative, the EU Quantum Flagship, major investments in China, and corporate programs at IBM, Google, Microsoft, Amazon, and a wave of startups poured billions into the field:\n- The motivations span scientific advantage, economic opportunity, and national security — especially the cryptographic stakes.\n- This funding is why cloud quantum computers, PQC standards, and a growing quantum workforce exist today.",
          "For someone just learning, the practical message is encouraging:\n- The field is young enough that solid fundamentals — the ones in this track — put you ahead of most people, including many in tech.\n- The cybersecurity angle is the most immediately relevant and employable: every organization will migrate to post-quantum cryptography, and people who understand both the physics and the security are scarce.\n- You finish this track equipped to go deeper in any direction — computing, sensing, communication, or the security migration that starts on the very next track.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Quantum Computing", sub: "chemistry, optimization, crypto-breaking", type: "system" },
          { label: "Quantum Sensing", sub: "MRI, clocks, navigation (here now)", type: "result" },
          { label: "Quantum Communication", sub: "eavesdropper-aware networks", type: "victim" },
          { label: "Post-Quantum Security", sub: "the migration happening today", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2018, event: "US National Quantum Initiative + EU Quantum Flagship launch the 'quantum race'" },
        { year: 2022, event: "NIST selects the first post-quantum cryptography standards" },
        { year: 2024, event: "FIPS 203/204/205 finalized; organizations begin PQC migration in earnest", highlight: true },
        { year: 2030, event: "Targeted milestones for error-corrected machines and CNSA 2.0 migration" },
      ],
      keyTakeaways: [
        "Quantum is three branches: computing, sensing (already in MRI/clocks/GPS), and communication/networking",
        "Security is the soonest impact: future quantum computers threaten RSA/ECC, so PQC migration is happening now",
        "You don't need to be a physicist — software, security, and crypto skills are in demand, with free tools to start",
        "Your best asset is exactly what you built here: real intuition to separate genuine quantum progress from hype",
      ],
      references: [
        { title: "National Quantum Initiative (US)", url: "https://www.quantum.gov/" },
        { title: "Quantum technologies overview — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-i10-q1", type: "Core Idea", challenge: "More than computers.", text: "Quantum technology is best described as…", options: ["A family of technologies — computing, sensing, and communication", "Only quantum computers", "A single app", "A type of battery"], correctIndex: 0, explanation: "Computing gets the headlines, but sensing and communication are real, distinct branches." },
        { id: "quantum-i10-q2", type: "Here Now", challenge: "Already in use.", text: "Which quantum technology already improves everyday tools like clocks and medical scanners?", options: ["Quantum sensing", "Quantum supremacy", "Quantum spreadsheets", "Quantum email"], correctIndex: 0, explanation: "Quantum sensing powers atomic clocks (GPS), gravity sensors, and MRI improvements today." },
        { id: "quantum-i10-q3", type: "Soonest Impact", challenge: "Why security first.", text: "Why is security the soonest broad impact of quantum?", options: ["Future quantum computers threaten RSA/ECC, so the world is migrating to PQC now", "Quantum makes WiFi faster", "It encrypts nothing", "Security is unaffected"], correctIndex: 0, explanation: "The 'harvest now, decrypt later' threat drives post-quantum migration years ahead of the computers." },
        { id: "quantum-i10-q4", type: "Careers", challenge: "Who can join.", text: "Who can work in quantum technology?", options: ["Not only physicists — software, security, hardware, and crypto skills are all needed", "Only Nobel laureates", "Only mathematicians", "No one yet"], correctIndex: 0, explanation: "The field needs diverse skills, and free cloud tools and courses lower the barrier to entry." },
        { id: "quantum-i10-q5", type: "Realism", challenge: "The honest posture.", text: "What's the most useful mindset a beginner can carry forward?", options: ["Enough real understanding to tell genuine quantum progress from hype", "Believe every headline", "Assume quantum solves everything", "Ignore the field entirely"], correctIndex: 0, explanation: "Grounded intuition — knowing what quantum will and won't do — is the most valuable takeaway." },
        { id: "quantum-i10-q6", type: "Next Step", challenge: "Where to go next.", text: "Where does this track hand you off on the platform?", options: ["The Quantum Era security tracks — the threat, NIST PQC algorithms, and real migration", "Nowhere; it's the end", "Back to the beginning forever", "A cooking course"], correctIndex: 0, explanation: "The security quantum tracks pick up exactly here, applying these fundamentals to PQC migration." },
      ],
    },
  },
];

// CTF labs — deep, step-by-step quantum-information exercises via the shared
// mkDeepCtf factory. Beginner-friendly hands-on quantum (superposition,
// measurement, entanglement, Grover, PQC). Flags mirrored in stage-flags.ts.
const QI_CTF: Record<string, CtfConfig> = {
  "quantum-i01": mkDeepCtf(
    "Classical rules break at the smallest scale. Probe a system small enough to show quantization, observe discrete energy levels, and confirm it is genuinely quantum.",
    "OP: THE QUANTUM SCALE\nTarget: a system at the atomic scale.\nGoal: probe it, see quantization, confirm quantum behavior.\nSequence: probe-scale -> observe-quantization -> confirm-quantum",
    "FLAG{QU4NTUM_",
    "Mission Brief",
    ["probe-scale", "SC4L3_", "Scale Probed", [
      "$ probe-scale --nanometers",
      "At ~1nm, energy is not continuous — it comes in discrete packets (quanta).",
      "Classical intuition stops working here.",
      "Next: observe-quantization",
    ]],
    ["observe-quantization", "QU4NT1Z3D_", "Quantization Observed", [
      "$ observe-quantization",
      "Spectrum shows sharp lines, not a smooth band: only specific energy levels are allowed.",
      "This 'staircase' is the signature of the quantum world.",
      "Next: confirm-quantum",
    ]],
    ["confirm-quantum", "C0NF1RM3D}", "Quantum Confirmed", [
      "$ confirm-quantum",
      "Discrete levels confirmed — the system obeys quantum mechanics, not classical physics.",
      "Everything in this track builds on this foundation.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the scale. Run: probe-scale", "Observe quantization. Run: observe-quantization", "Confirm quantum. Run: confirm-quantum", "Run 'assemble', then submit the flag"],
    { "spectrum.txt": "energy levels: E0, E1, E2 (discrete)\nbetween levels: forbidden\n=> quantized" },
  ),
  "quantum-i02": mkDeepCtf(
    "A qubit can be both 0 and 1 at once — superposition. Initialize a qubit, apply a Hadamard gate, and sample the 50/50 distribution that proves it.",
    "OP: BOTH AT ONCE\nTarget: a single qubit.\nGoal: superpose it and sample the distribution.\nSequence: init-qubit -> apply-hadamard -> sample-super",
    "FLAG{SUP3RP0S1T10N_",
    "Mission Brief",
    ["init-qubit", "H4D4M4RD_", "Qubit Initialized", [
      "$ init-qubit |0>",
      "Qubit starts in definite state |0>. Measuring now always gives 0.",
      "Superposition needs a gate.",
      "Next: apply-hadamard",
    ]],
    ["apply-hadamard", "S4MPL3D_", "Hadamard Applied", [
      "$ apply-hadamard",
      "H|0> = (|0> + |1>)/sqrt(2): the qubit is now BOTH 0 and 1 simultaneously.",
      "Not 'unknown' — genuinely both until measured.",
      "Next: sample-super",
    ]],
    ["sample-super", "50_50}", "Distribution Sampled", [
      "$ sample-super --shots 1000",
      "Outcomes: 0 -> 503, 1 -> 497. The ~50/50 split is the fingerprint of superposition.",
      "This parallelism is where quantum power begins.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Initialize the qubit. Run: init-qubit", "Apply Hadamard. Run: apply-hadamard", "Sample the superposition. Run: sample-super", "Run 'assemble', then submit the flag"],
    { "hadamard.txt": "H|0> = (|0>+|1>)/sqrt(2)\nshots=1000 -> 0:503 1:497" },
  ),
  "quantum-i03": mkDeepCtf(
    "Measuring a quantum system changes it. Prepare a state, watch measurement collapse it, and use that to detect an eavesdropper — the principle behind quantum key distribution.",
    "OP: LOOKING CHANGES IT\nTarget: a prepared quantum state on a channel.\nGoal: prepare, collapse by measuring, detect the eavesdropper.\nSequence: prepare-state -> measure-collapse -> detect-disturb",
    "FLAG{M34SUR3_",
    "Mission Brief",
    ["prepare-state", "C0LL4PS3_", "State Prepared", [
      "$ prepare-state --basis random",
      "Encoded bits on qubits in randomly chosen bases (the BB84 idea).",
      "An undisturbed qubit carries the bit faithfully.",
      "Next: measure-collapse",
    ]],
    ["measure-collapse", "D1STURB_", "Collapse Observed", [
      "$ measure-collapse",
      "Measuring in the wrong basis collapses the state and randomizes the result.",
      "You cannot observe a qubit without changing it.",
      "Next: detect-disturb",
    ]],
    ["detect-disturb", "D3T3CT3D}", "Eavesdropper Detected", [
      "$ detect-disturb --compare-bases",
      "Error rate on shared bits jumped to ~25% -> an eavesdropper measured the channel.",
      "Measurement disturbance makes quantum key distribution tamper-evident.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Prepare the state. Run: prepare-state", "Measure & collapse. Run: measure-collapse", "Detect the disturbance. Run: detect-disturb", "Run 'assemble', then submit the flag"],
    { "qkd.txt": "protocol: BB84\nexpected error: ~0%\nmeasured error: ~25%  <-- eavesdropper" },
  ),
  "quantum-i04": mkDeepCtf(
    "Light and matter act as both wave and particle. Run the double-slit experiment, add a which-path detector, and watch the interference pattern vanish.",
    "OP: WAVE OR PARTICLE\nTarget: the double-slit experiment.\nGoal: see interference, add a detector, watch it collapse.\nSequence: run-double-slit -> add-detector -> observe-collapse",
    "FLAG{D0UBL3_SL1T_",
    "Mission Brief",
    ["run-double-slit", "WH1CH_", "Interference Seen", [
      "$ run-double-slit",
      "Single particles build up an interference pattern -> each went through BOTH slits as a wave.",
      "Wave behavior when unobserved.",
      "Next: add-detector",
    ]],
    ["add-detector", "P4TH_", "Detector Added", [
      "$ add-detector --which-path",
      "Now measuring which slit each particle takes — gaining 'which-path' information.",
      "Observation forces a choice.",
      "Next: observe-collapse",
    ]],
    ["observe-collapse", "C0LL4PS3D}", "Pattern Collapsed", [
      "$ observe-collapse",
      "Interference vanishes -> particles now act like particles. Knowledge changes reality.",
      "Wave-particle duality, demonstrated.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Run the double slit. Run: run-double-slit", "Add the detector. Run: add-detector", "Observe the collapse. Run: observe-collapse", "Run 'assemble', then submit the flag"],
    { "slit.txt": "no detector: interference fringes\nwith which-path detector: two bands (no interference)" },
  ),
  "quantum-i05": mkDeepCtf(
    "Quantum outcomes are amplitudes that add and cancel. Set the amplitudes, let them interfere, and read off the boosted answer — the trick every quantum algorithm uses.",
    "OP: ADDING POSSIBILITIES\nTarget: a small quantum register.\nGoal: set amplitudes, interfere, read the peak.\nSequence: set-amplitudes -> interfere -> read-peak",
    "FLAG{4MPL1TUD3_",
    "Mission Brief",
    ["set-amplitudes", "1NT3RF3R3_", "Amplitudes Set", [
      "$ set-amplitudes",
      "Each outcome has a complex amplitude; probability = amplitude squared.",
      "Amplitudes can be positive or negative.",
      "Next: interfere",
    ]],
    ["interfere", "P34K_", "Interference Applied", [
      "$ interfere",
      "Wrong answers' amplitudes cancel (destructive); the right answer's add (constructive).",
      "This is how a quantum computer concentrates probability on the solution.",
      "Next: read-peak",
    ]],
    ["read-peak", "R34D}", "Peak Read", [
      "$ read-peak",
      "Measurement now returns the correct answer with high probability.",
      "Interference, not brute force, is the source of quantum advantage.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Set the amplitudes. Run: set-amplitudes", "Interfere. Run: interfere", "Read the peak. Run: read-peak", "Run 'assemble', then submit the flag"],
    { "amp.txt": "P(outcome) = |amplitude|^2\ndestructive: wrong answers cancel\nconstructive: right answer amplified" },
  ),
  "quantum-i06": mkDeepCtf(
    "Entangled particles share a fate no matter the distance. Make a Bell pair, measure both, and violate the CHSH inequality to prove correlations no classical theory allows.",
    "OP: THE SPOOKY CONNECTION\nTarget: two qubits.\nGoal: entangle, measure both, violate Bell.\nSequence: make-bell-pair -> measure-both -> violate-bell",
    "FLAG{B3LL_P41R_",
    "Mission Brief",
    ["make-bell-pair", "CHSH_", "Bell Pair Made", [
      "$ make-bell-pair",
      "H + CNOT -> (|00> + |11>)/sqrt(2): two qubits in one shared state.",
      "Neither qubit has a definite value alone.",
      "Next: measure-both",
    ]],
    ["measure-both", "V10L4T3D_", "Both Measured", [
      "$ measure-both --remote",
      "Measuring one instantly fixes the other's outcome — correlated every time.",
      "Compute the CHSH value across measurement angles.",
      "Next: violate-bell",
    ]],
    ["violate-bell", "SP00KY}", "Bell Violated", [
      "$ violate-bell",
      "CHSH S = 2.78 > 2 (classical limit) -> no local hidden-variable theory can explain it.",
      "Entanglement is real, and it powers teleportation and device-independent QKD.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Make the Bell pair. Run: make-bell-pair", "Measure both. Run: measure-both", "Violate Bell. Run: violate-bell", "Run 'assemble', then submit the flag"],
    { "bell.txt": "state: (|00>+|11>)/sqrt(2)\nclassical CHSH max: 2\nmeasured S: 2.78  <-- violation" },
  ),
  "quantum-i07": mkDeepCtf(
    "The qubit lives on the Bloch sphere. Initialize one, rotate it with gates, and read it out — the unit of quantum information.",
    "OP: MEET THE QUBIT\nTarget: a single qubit on the Bloch sphere.\nGoal: init, rotate, read out.\nSequence: init-bloch -> rotate-qubit -> readout",
    "FLAG{QUB1T_",
    "Mission Brief",
    ["init-bloch", "BL0CH_", "Bloch Initialized", [
      "$ init-bloch",
      "Represent the qubit as a point on a sphere: north=|0>, south=|1>, equator=superposition.",
      "Any pure state is one point on this sphere.",
      "Next: rotate-qubit",
    ]],
    ["rotate-qubit", "R0T4T3_", "Qubit Rotated", [
      "$ rotate-qubit --rx 90 --rz 45",
      "Gates are rotations of the Bloch vector; X/Y/Z/H move the point around the sphere.",
      "Quantum programming = choreographing rotations.",
      "Next: readout",
    ]],
    ["readout", "R34D0UT}", "Qubit Read Out", [
      "$ readout",
      "Measurement projects the vector onto the Z-axis -> a probabilistic 0 or 1.",
      "One qubit holds a continuum of states but yields one classical bit when read.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Initialize the Bloch vector. Run: init-bloch", "Rotate the qubit. Run: rotate-qubit", "Read out. Run: readout", "Run 'assemble', then submit the flag"],
    { "bloch.txt": "north=|0> south=|1> equator=superposition\ngates = rotations of the vector" },
  ),
  "quantum-i08": mkDeepCtf(
    "Quantum circuits are built from gate 'LEGO'. Place gates, wire them into a circuit, and run it to produce a quantum result.",
    "OP: QUANTUM LEGO\nTarget: an empty quantum circuit.\nGoal: place gates, build the circuit, run it.\nSequence: place-gates -> build-circuit -> run-circuit",
    "FLAG{QU4NTUM_",
    "Mission Brief",
    ["place-gates", "C1RCU1T_", "Gates Placed", [
      "$ place-gates H CNOT X",
      "Picked gates from the universal set; each is a reversible operation on qubits.",
      "Order matters — gates don't always commute.",
      "Next: build-circuit",
    ]],
    ["build-circuit", "G4T3S_", "Circuit Built", [
      "$ build-circuit",
      "Wired H on q0, CNOT q0->q1, measure both: a 2-qubit entangling circuit.",
      "This is literally a quantum program.",
      "Next: run-circuit",
    ]],
    ["run-circuit", "BU1LT}", "Circuit Run", [
      "$ run-circuit --shots 1000",
      "Output: 00 -> 511, 11 -> 489 (entangled). The circuit did what we designed.",
      "Compose gates and you can build any quantum algorithm.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Place the gates. Run: place-gates", "Build the circuit. Run: build-circuit", "Run the circuit. Run: run-circuit", "Run 'assemble', then submit the flag"],
    { "circuit.txt": "q0: H -.-\nq1: ---X (CNOT target)\nout: 00:511 11:489" },
  ),
  "quantum-i09": mkDeepCtf(
    "Quantum computers shine on special problems. Load Grover's oracle, run the search, and find the marked item in far fewer steps than classical brute force.",
    "OP: WHY THE HYPE\nTarget: an unstructured search of N items.\nGoal: load the oracle, run Grover, find the marked item.\nSequence: load-oracle -> run-grover -> find-marked",
    "FLAG{GR0V3R_",
    "Mission Brief",
    ["load-oracle", "0R4CL3_", "Oracle Loaded", [
      "$ load-oracle --N 1048576",
      "Classical search of ~1M items needs ~1M checks on average.",
      "Grover's oracle flips the phase of the marked item.",
      "Next: run-grover",
    ]],
    ["run-grover", "M4RK3D_", "Grover Run", [
      "$ run-grover",
      "Amplitude amplification boosts the marked item over ~sqrt(N) ≈ 1024 iterations.",
      "Quadratic speedup — not magic, but real.",
      "Next: find-marked",
    ]],
    ["find-marked", "F0UND}", "Marked Item Found", [
      "$ find-marked",
      "Measured the marked item in 1024 steps vs ~1,000,000 classical. (Shor breaks RSA similarly.)",
      "This speedup is exactly why post-quantum crypto matters.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Load the oracle. Run: load-oracle", "Run Grover. Run: run-grover", "Find the marked item. Run: find-marked", "Run 'assemble', then submit the flag"],
    { "grover.txt": "N=1048576\nclassical: ~1,000,000 checks\nGrover: ~1024 (sqrt(N))" },
  ),
  "quantum-i10": mkDeepCtf(
    "Quantum computers will break today's encryption. Assess your harvest-now-decrypt-later exposure, pick a NIST post-quantum algorithm, and migrate.",
    "OP: QUANTUM IN YOUR FUTURE\nTarget: systems using classical public-key crypto.\nGoal: assess HNDL risk, choose PQC, migrate.\nSequence: assess-hndl -> pick-pqc -> migrate",
    "FLAG{HNDL_",
    "Mission Brief",
    ["assess-hndl", "PQC_", "HNDL Assessed", [
      "$ assess-hndl",
      "Adversaries record encrypted traffic now to decrypt later once a quantum computer exists.",
      "Long-lived secrets are already at risk today.",
      "Next: pick-pqc",
    ]],
    ["pick-pqc", "M1GR4T3_", "PQC Chosen", [
      "$ pick-pqc",
      "Selected NIST standards: ML-KEM (FIPS 203) for key exchange, ML-DSA (FIPS 204) for signatures.",
      "These resist both classical and quantum attacks.",
      "Next: migrate",
    ]],
    ["migrate", "S4F3}", "Migrated", [
      "$ migrate --hybrid x25519+ml-kem",
      "Deployed hybrid key exchange; secrets now safe against harvest-now-decrypt-later.",
      "The quantum future needs preparing for today.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Assess HNDL risk. Run: assess-hndl", "Pick PQC. Run: pick-pqc", "Migrate. Run: migrate", "Run 'assemble', then submit the flag"],
    { "pqc.txt": "threat: harvest-now-decrypt-later\nstandards: ML-KEM (FIPS203), ML-DSA (FIPS204)\nplan: hybrid x25519+ML-KEM" },
  ),
};

for (const s of quantumIntroStages) {
  const ctf = QI_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
