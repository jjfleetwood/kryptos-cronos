import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const quantumDeepEpoch: EpochConfig = {
  id: "quantum-deep",
  name: "Quantum, Deeper",
  subtitle: "Spin, Tunneling, Atoms & the Strange Rules of Reality",
  description:
    "The next step after the beginner quantum track: spin and the Stern-Gerlach experiment, quantum tunneling (the trick behind flash memory and the Sun), the Pauli principle that makes matter solid, atomic orbitals and the periodic table, photons and light-matter interaction, decoherence and the measurement problem, Bell's theorem and nonlocality, quantum error correction, a gentle peek at quantum field theory, and the interpretations we still argue about.",
  emoji: "🌀",
  color: "fuchsia",
  unlocked: true,
};

export const quantumDeepStages: StageConfig[] = [
  // ─── quantum-x01: Spin ───────────────────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The Stern-Gerlach experiment", location: "Frankfurt, Germany", era: "1922 CE", emoji: "🧭" },
    id: "quantum-x01",
    order: 1,
    title: "The Spin That Doesn't Spin",
    subtitle: "Quantum Spin & the Stern-Gerlach Experiment",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-qx-spin", name: "Spin Specialist", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "Electrons act like tiny magnets with a property called 'spin'. The name is a lie — nothing is actually spinning — but spin is real, measurable, and comes in fixed amounts. It is also the property your hard drive and MRI scanner quietly rely on.",
      year: 2024,
      overview: [
        "If the beginner track gave you superposition and entanglement, spin is the next essential idea. Spin is an intrinsic form of angular momentum that particles like electrons simply have — as fundamental as their charge or mass. It makes them behave like tiny magnets, and crucially, when you measure it along any direction, you get only fixed, quantized answers, never a smooth range.",
        "Spin breaks classical intuition in three instructive ways, and the first is a warning about its own name. It is not literal rotation: an electron is, as far as we know, a point with no size, so nothing is physically spinning — 'spin' is just the historical label that stuck for this purely quantum property. It is quantized: an electron is 'spin-1/2,' meaning if you measure its spin along any axis you get exactly one of two outcomes (call them up or down) and never anything in between, no matter which direction you choose. And it can be in superposition: before measurement a spin can be a genuine blend of up and down, collapsing to one or the other only when you look — exactly the quantum coin from the intro track, now wearing the costume of a real, fundamental property.",
        "None of this is abstract trivia; spin quietly runs technology you use every day. Magnetic storage is spin: a hard drive records each bit in the aligned spins of a tiny magnetic region. MRI scanners are spin: they image your body by flipping and then reading the spins of the hydrogen nuclei in your tissue, turning a quantum property into a medical picture. And quantum computing is often spin most literally of all — many qubits *are* the spin states of individual electrons or nuclei, with up and down serving directly as the 0 and 1. The strangest idea in the stage turns out to be the most industrial.",
      ],
      technical: {
        title: "Quantization, Two Outcomes, and Why It Matters",
        body: [
          "The Stern-Gerlach experiment is the cleanest window into spin:\n- Shoot atoms through a non-uniform magnetic field; classically their tiny magnets should deflect by a continuous range of angles, smearing into a band.\n- Instead the beam splits into two sharp spots — up and down — proving spin is quantized into discrete values, not continuous.\n- Send an 'up' beam through a second magnet tilted sideways and it splits again, showing that measuring spin along a new axis gives a fresh quantum coin flip — measurement in one direction erases certainty in another.",
          "Spin underlies more than it first appears:\n- Particles come in two great families by spin: 'fermions' (half-integer spin, like electrons) and 'bosons' (integer spin, like photons) — a distinction that, via the Pauli principle (a later stage), decides whether matter is solid or light can pile up.\n- Spin couples to magnetic fields, which is why it is so useful for storage and imaging.\n- For computing and security, spin is one of the most promising physical homes for a qubit, and reading a spin is a measurement that obeys all the collapse rules you already know.",
        ],
      },
      incident: {
        title: "1922 — Two Spots That Revealed a Hidden Property",
        when: "1922",
        where: "Frankfurt, Germany",
        impact: "Otto Stern and Walther Gerlach's beam-splitting experiment proved angular momentum is quantized, revealing spin",
        body: [
          "Otto Stern and Walther Gerlach sent silver atoms through a carefully shaped magnetic field and onto a screen. If the classical picture were right, the atoms' magnetic moments would point every which way and land in a continuous smear. Instead, the atoms landed in two distinct spots.",
          "The two spots were a landmark in physics:\n- They showed that a quantum property — angular momentum along the measured axis — comes in discrete values, not a continuum.\n- The result helped establish spin as a real, fundamental, two-valued property of the electron, soon formalized by Pauli, Dirac, and others.\n- Stern won the 1943 Nobel Prize, and the experiment is still taught as the cleanest demonstration that the quantum world is fundamentally 'chunky' — the same quantization that names the whole field.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Atoms Through a Field", sub: "tiny magnets deflected", type: "system" },
          { label: "Classical Prediction", sub: "continuous smear", type: "victim" },
          { label: "Quantum Reality", sub: "two sharp spots (up/down)", type: "attacker" },
          { label: "Spin Is Quantized", sub: "fixed values, superposable", type: "result" },
        ],
      },
      timeline: [
        { year: 1922, event: "Stern-Gerlach experiment splits a beam in two, revealing quantized spin", highlight: true },
        { year: 1925, event: "Spin formalized as an intrinsic electron property" },
        { year: 1946, event: "Nuclear magnetic resonance harnesses spin — later enabling MRI" },
        { year: 2000, event: "Electron/nuclear spins become leading candidates for qubits" },
      ],
      keyTakeaways: [
        "Spin is an intrinsic, fundamental property — particles act like tiny magnets, but nothing literally spins",
        "It's quantized: an electron (spin-1/2) measured along any axis gives only 'up' or 'down', and can be superposed",
        "Stern-Gerlach proved it — a beam splits into two sharp spots instead of a continuous smear",
        "Spin runs real tech: magnetic storage, MRI, and many quantum-computing qubits",
      ],
      references: [
        { title: "Stern-Gerlach experiment — explainer", url: "https://en.wikipedia.org/wiki/Stern%E2%80%93Gerlach_experiment" },
        { title: "Quantum spin — Caltech Science Exchange", url: "https://scienceexchange.caltech.edu/topics/quantum-science-explained" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x01-q1", type: "Core Idea", challenge: "What spin is.", text: "What is quantum spin?", options: ["An intrinsic property that makes particles act like tiny magnets, with quantized values", "A particle physically rotating like a top", "How fast an electron orbits", "A type of electric charge"], correctIndex: 0, explanation: "Spin is fundamental angular momentum; nothing literally spins, and its measured values are quantized." },
        { id: "quantum-x01-q2", type: "Quantization", challenge: "Two answers.", text: "Measuring an electron's spin along an axis gives…", options: ["Exactly one of two outcomes (up or down)", "A smooth range of angles", "Always zero", "A random decimal"], correctIndex: 0, explanation: "Spin-1/2 means two discrete outcomes — never a continuous value." },
        { id: "quantum-x01-q3", type: "Experiment", challenge: "The two spots.", text: "What did Stern-Gerlach show?", options: ["A beam splits into two sharp spots, proving spin is quantized", "Atoms smear continuously", "Magnets don't affect atoms", "Electrons have no spin"], correctIndex: 0, explanation: "Two discrete spots (not a smear) revealed quantized angular momentum." },
        { id: "quantum-x01-q4", type: "Superposition", challenge: "Familiar rules.", text: "Before measurement, a spin can be…", options: ["A superposition (blend) of up and down that collapses when measured", "Always definitely up", "Spinning at a fixed speed", "Two electrons at once"], correctIndex: 0, explanation: "Spin obeys the same superposition-and-collapse rules as the quantum coin." },
        { id: "quantum-x01-q5", type: "Applications", challenge: "Real tech.", text: "Which technology relies on spin?", options: ["MRI scanners (reading hydrogen nuclear spins)", "Incandescent bulbs", "Mechanical clocks", "Paper printing"], correctIndex: 0, explanation: "MRI, magnetic storage, and many qubits all use spin." },
        { id: "quantum-x01-q6", type: "Families", challenge: "Why it matters next.", text: "Spin divides particles into two families — which are the electrons?", options: ["Fermions (half-integer spin)", "Bosons (integer spin)", "Photons", "They belong to neither"], correctIndex: 0, explanation: "Electrons are spin-1/2 fermions — key to the Pauli principle in a later stage." },
      ],
    },
  },

  // ─── quantum-x02: Tunneling ──────────────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The scanning tunneling microscope", location: "Zurich, Switzerland", era: "1981 CE", emoji: "🚇" },
    id: "quantum-x02",
    order: 2,
    title: "Walking Through Walls",
    subtitle: "Quantum Tunneling — From Flash Memory to the Sun",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-qx-tunnel", name: "Tunneling Adept", emoji: "🚇" },
    challengeType: "quiz",
    info: {
      tagline: "Roll a ball at a hill too gently and it rolls back — always. A quantum particle facing a barrier it cannot classically cross sometimes simply appears on the other side. This 'tunneling' powers your phone's storage and lights the Sun.",
      year: 2024,
      overview: [
        "Quantum tunneling is one of the most useful pieces of quantum strangeness. Because a particle is described by a spread-out wave of possibility (from the beginner track), that wave doesn't stop dead at a barrier — it leaks a little way in, and if the barrier is thin enough, some of it emerges on the far side. The particle has a real probability of being found beyond a wall it could never climb classically.",
        "Tunneling follows directly from wave-particle duality, and you can almost watch it happen in the math. The particle's probability wave doesn't stop dead at the barrier — it penetrates into the 'forbidden' region and *decays* there, fading exponentially rather than vanishing instantly. If the barrier is thin enough, that wave is still non-zero when it reaches the far side, which means there is a real, calculable chance of finding the particle beyond a wall it could never have climbed. The catch is in that exponential: thicker or taller barriers suppress tunneling so steeply that the probability becomes vanishingly small — which is exactly why electrons tunnel constantly while a baseball, enormous by quantum standards, will never tunnel through a wall in the lifetime of the universe.",
        "And this is no curiosity confined to a lab — it's running in your pocket and in the sky. Flash memory *is* tunneling: storing a bit means tunneling electrons onto an isolated 'floating gate,' and reading or erasing means tunneling them off again, so your phone's storage is quantum tunneling made into a product (a thread straight back to the computing-foundations track). The Sun is tunneling: nuclear fusion only ignites because protons tunnel through the fierce electric repulsion that should keep them apart — without it, the Sun simply wouldn't shine. And our finest instruments are tunneling: the scanning tunneling microscope images individual atoms by reading the tunneling current across a gap, while the same effect sets a hard floor on how small transistors can shrink before electrons leak through them uninvited.",
      ],
      technical: {
        title: "Why Particles Leak Through Barriers",
        body: [
          "The mechanism is the probability wave meeting a barrier:\n- Inside a classically-forbidden region the wave doesn't oscillate but decays exponentially — it shrinks fast, but smoothly, not to zero instantly.\n- The transmitted probability depends extremely sensitively on barrier width and height, so tiny changes hugely change the tunneling rate.\n- That sensitivity is a feature: the scanning tunneling microscope exploits it, because the tunneling current between a sharp tip and a surface changes enormously with sub-atomic distance, mapping individual atoms.",
          "Tunneling shapes both technology and its limits:\n- In flash memory, controlled tunneling writes and erases bits — but the same effect causes wear (the insulating layer degrades after many tunneling cycles) and slow charge leakage (data eventually fades), which is why SSDs have limited write endurance and retention.\n- In transistors, unwanted tunneling ('leakage current') across ultra-thin layers wastes power and is a key obstacle to making chips even smaller — a real reason Moore's Law is getting harder.\n- For security, tunneling is mostly a builder's tool, but it is a reminder that the hardware storing your secrets runs on quantum effects with physical wear and leakage that the Physics of Hacking track turns into attack surface.",
        ],
      },
      incident: {
        title: "1981 — Seeing Single Atoms by Tunneling",
        when: "1981",
        where: "IBM Zurich Research Laboratory, Switzerland",
        impact: "Binnig and Rohrer's scanning tunneling microscope used quantum tunneling to image individual atoms, winning the 1986 Nobel Prize",
        body: [
          "At IBM Zurich, Gerd Binnig and Heinrich Rohrer built the scanning tunneling microscope (STM). It brings an atomically-sharp metal tip extremely close to a surface — close enough that electrons tunnel across the tiny gap — and measures that tunneling current as the tip scans, building an image with atomic resolution.",
          "It turned an abstract quantum effect into a tool that reshaped science:\n- For the first time, humans could 'see' and even move individual atoms (IBM later spelled 'IBM' in 35 xenon atoms).\n- It launched nanotechnology and surface science, and earned Binnig and Rohrer the 1986 Nobel Prize.\n- The STM is the perfect emblem of this track's spirit: tunneling sounds like magic, but engineers harnessed it so precisely that its sensitivity to distance became a microscope — and the same effect quietly runs the flash memory in every device you own.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Particle Meets Barrier", sub: "too tall to climb classically", type: "system" },
          { label: "Wave Leaks In", sub: "probability decays, not zero", type: "attacker" },
          { label: "Emerges Beyond", sub: "real chance on the far side", type: "victim" },
          { label: "Flash, Fusion, STM", sub: "tunneling runs real tech", type: "result" },
        ],
      },
      timeline: [
        { year: 1928, event: "Gamow explains nuclear alpha decay as quantum tunneling" },
        { year: 1957, event: "Tunneling understood as essential to fusion in stars" },
        { year: 1981, event: "Scanning tunneling microscope images single atoms via tunneling", highlight: true },
        { year: 1984, event: "Flash memory uses controlled tunneling to store bits" },
      ],
      keyTakeaways: [
        "Tunneling lets a particle appear beyond a barrier it can't classically cross, because its probability wave leaks through",
        "It's exponentially sensitive to barrier thickness — thin barriers tunnel readily, thick ones essentially never",
        "It runs real tech: flash memory (storing bits), fusion in the Sun, and atom-imaging microscopes",
        "It also causes flash wear/leakage and transistor leakage current — a limit on shrinking chips",
      ],
      references: [
        { title: "Quantum tunneling — explainer", url: "https://en.wikipedia.org/wiki/Quantum_tunnelling" },
        { title: "Scanning tunneling microscope — Nobel Prize 1986", url: "https://www.nobelprize.org/prizes/physics/1986/summary/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x02-q1", type: "Core Idea", challenge: "Through the wall.", text: "What is quantum tunneling?", options: ["A particle appearing beyond a barrier it couldn't classically cross", "A fast way to dig tunnels", "An electron orbiting twice", "A type of entanglement"], correctIndex: 0, explanation: "Because a particle is a spread-out probability wave, it can leak through and emerge past a thin barrier." },
        { id: "quantum-x02-q2", type: "Why", challenge: "The wave's role.", text: "Why can particles tunnel but baseballs can't?", options: ["A particle's probability wave penetrates the barrier; for big objects the chance is unimaginably tiny", "Baseballs are too light", "Tunneling only works in space", "Baseballs have no energy"], correctIndex: 0, explanation: "Tunneling probability shrinks exponentially with size/barrier, so macroscopic tunneling never happens." },
        { id: "quantum-x02-q3", type: "Sensitivity", challenge: "Barrier matters.", text: "How does barrier thickness affect tunneling?", options: ["Thicker/taller barriers make tunneling exponentially less likely", "Thicker barriers tunnel more easily", "Thickness has no effect", "Only color matters"], correctIndex: 0, explanation: "The transmitted probability is extremely sensitive to barrier width and height." },
        { id: "quantum-x02-q4", type: "Flash", challenge: "In your pocket.", text: "How does flash memory use tunneling?", options: ["It tunnels electrons onto/off an isolated floating gate to store and erase bits", "It magnetizes a disk", "It uses tunneling to cool the chip", "Flash doesn't use tunneling"], correctIndex: 0, explanation: "Controlled tunneling writes and erases bits — everyday storage runs on it." },
        { id: "quantum-x02-q5", type: "The Sun", challenge: "Why stars shine.", text: "Why is tunneling essential to the Sun?", options: ["Protons tunnel through their electric repulsion so fusion can occur", "It cools the Sun down", "It blocks sunlight", "The Sun doesn't use tunneling"], correctIndex: 0, explanation: "Without tunneling, protons couldn't get close enough to fuse — the Sun wouldn't shine." },
        { id: "quantum-x02-q6", type: "Limits", challenge: "A downside.", text: "How does unwanted tunneling affect modern chips?", options: ["Leakage current across ultra-thin layers wastes power and limits shrinking", "It makes chips infinitely small", "It improves battery life", "It has no downside"], correctIndex: 0, explanation: "Tunneling leakage is a real obstacle to further miniaturization (a Moore's Law limit)." },
      ],
    },
  },

  // ─── quantum-x03: Pauli Exclusion ────────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "Pauli's principle and the structure of matter", location: "Hamburg, Germany", era: "1925 CE", emoji: "🧱" },
    id: "quantum-x03",
    order: 3,
    title: "Why You Don't Fall Through the Floor",
    subtitle: "The Pauli Exclusion Principle",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-qx-pauli", name: "Exclusion Expert", emoji: "🧱" },
    challengeType: "quiz",
    info: {
      tagline: "Atoms are almost entirely empty space, yet matter is solid and you don't sink through your chair. The reason isn't electric repulsion — it's a quantum rule that forbids identical particles from sharing the same state. It even holds up dead stars.",
      year: 2024,
      overview: [
        "The Pauli exclusion principle is a deceptively simple rule with enormous consequences: no two identical fermions (particles like electrons) can occupy the exact same quantum state at the same time. Each electron in an atom must have a unique set of quantum properties. This one constraint is why atoms have structure, why the periodic table exists, and why matter takes up space at all.",
        "The reach of that one rule is genuinely everywhere you look. It builds atomic structure: electrons can't all pile into the lowest energy level, so exclusion forces them to stack upward into shells, giving each element its distinctive arrangement. It writes the periodic table: the repeating chemical patterns of the elements are nothing more than a map of how electrons fill those shells under Pauli's constraint. And — most viscerally — it is why matter is solid. When you press two objects together, their electrons are forbidden from merging into the same quantum states, and the resistance that creates (called degeneracy pressure) is far stronger than ordinary electric repulsion. The reason your hand doesn't pass through the table is not that atoms are 'touching'; it's Pauli's rule refusing to let their electrons share states.",
        "Push the same rule to extremes and it governs the fate of stars. When a star like the Sun dies, it's held up against its own gravity not by heat but by electron degeneracy pressure — Pauli's exclusion physically resisting compression — and the result is a white dwarf. Heavier stellar corpses overwhelm even that, collapsing further until *neutron* degeneracy pressure halts them, packing a Sun's worth of mass into a sphere the size of a city: a neutron star. And push past that final limit, where not even exclusion can hold the matter up, and nothing can — you get a black hole. The humble bookkeeping rule that no two electrons may share a state literally sets the boundary between the kinds of objects the universe is allowed to contain.",
      ],
      technical: {
        title: "Fermions, Bosons, and Why Matter Has Volume",
        body: [
          "The principle flows from the deep distinction spin introduced:\n- Fermions (half-integer spin: electrons, protons, neutrons) obey exclusion — they refuse to share a quantum state, so they build up structure.\n- Bosons (integer spin: photons) do the opposite — they happily pile into the same state, which is why laser light (many photons in one state) and other collective effects are possible.\n- This 'spin-statistics' split is one of the most profound facts in physics: whether particles exclude or share decides whether you get rigid matter or floods of light.",
          "Consequences worth holding onto:\n- 'Empty' atoms still resist — an atom is mostly void, yet exclusion makes assembled matter rigid and gives it volume; solidity is a quantum effect, not a classical one.\n- Chemistry is Pauli plus energy levels — the way electrons fill available states determines bonding, reactivity, and the entire structure of the periodic table (the next stage).\n- For computing, exclusion is why semiconductors have the band structure that makes transistors possible — so even the switches from the foundations track exist because electrons refuse to share states.",
        ],
      },
      incident: {
        title: "1925 — A Rule That Explained the Periodic Table",
        when: "1925",
        where: "Hamburg, Germany",
        impact: "Wolfgang Pauli's exclusion principle explained atomic structure and the periodic table, earning the 1945 Nobel Prize",
        body: [
          "Wolfgang Pauli proposed that each electron in an atom must have a unique set of quantum numbers — no two could be identical in every way. He introduced it to explain why electrons don't all collapse into the lowest energy level and why atomic spectra and the periodic table looked the way they did.",
          "It proved foundational across physics and chemistry:\n- It explained the shell structure of atoms and, with it, the entire logic of the periodic table — why elements repeat their properties in a regular pattern.\n- Pauli won the 1945 Nobel Prize, nominated by Einstein himself.\n- The principle ties together this track's threads: spin defines fermions, fermions obey exclusion, exclusion builds atoms and solid matter, and the same quantum rules ultimately make chemistry, materials, and the chips of the modern world possible.",
        ],
      },
      diagram: {
        nodes: [
          { label: "No Two Identical Fermions", sub: "can share one quantum state", type: "system" },
          { label: "Electrons Stack in Shells", sub: "atomic structure forms", type: "attacker" },
          { label: "Matter Has Volume", sub: "degeneracy pressure = solidity", type: "victim" },
          { label: "Even Holds Up Dead Stars", sub: "white dwarfs, neutron stars", type: "result" },
        ],
      },
      timeline: [
        { year: 1925, event: "Pauli states the exclusion principle to explain atomic structure", highlight: true },
        { year: 1926, event: "Fermi-Dirac statistics formalize how fermions fill states" },
        { year: 1931, event: "Degeneracy pressure explains how white-dwarf stars resist gravity" },
        { year: 1945, event: "Pauli awarded the Nobel Prize for the exclusion principle" },
      ],
      keyTakeaways: [
        "The Pauli principle: no two identical fermions (e.g. electrons) can occupy the same quantum state",
        "It forces electrons into shells — creating atomic structure and the whole periodic table",
        "It makes matter solid and gives it volume ('degeneracy pressure'), beyond mere electric repulsion",
        "It even holds up white dwarfs and neutron stars — a microscopic rule shaping the cosmos",
      ],
      references: [
        { title: "Pauli exclusion principle — explainer", url: "https://en.wikipedia.org/wiki/Pauli_exclusion_principle" },
        { title: "Pauli and the structure of matter — Nobel Prize 1945", url: "https://www.nobelprize.org/prizes/physics/1945/summary/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x03-q1", type: "Core Idea", challenge: "The rule.", text: "What does the Pauli exclusion principle state?", options: ["No two identical fermions can occupy the same quantum state at once", "Electrons always share states", "Particles can't move", "All atoms are identical"], correctIndex: 0, explanation: "Identical fermions (like electrons) must each have a unique quantum state." },
        { id: "quantum-x03-q2", type: "Atoms", challenge: "Building structure.", text: "Why don't all an atom's electrons sit in the lowest energy level?", options: ["Exclusion forbids it, forcing them to stack into shells", "They repel magnetically only", "They get bored", "They do — atoms have one level"], correctIndex: 0, explanation: "Exclusion creates shell structure, the basis of the periodic table." },
        { id: "quantum-x03-q3", type: "Solidity", challenge: "Why you don't fall through.", text: "Why is matter solid even though atoms are mostly empty?", options: ["Exclusion creates degeneracy pressure when electrons are forced toward the same states", "Atoms are actually full", "Gravity glues them", "Air pressure holds you up"], correctIndex: 0, explanation: "Electrons refusing to share states resist compression far more strongly than electric repulsion alone." },
        { id: "quantum-x03-q4", type: "Two Families", challenge: "Exclude vs share.", text: "Which particles obey the exclusion principle?", options: ["Fermions (half-integer spin), like electrons", "Bosons, like photons", "All particles equally", "Only neutrons"], correctIndex: 0, explanation: "Fermions exclude; bosons (e.g. photons) happily share states, enabling lasers." },
        { id: "quantum-x03-q5", type: "Cosmos", challenge: "Holding up stars.", text: "What holds up a white-dwarf star against gravity?", options: ["Electron degeneracy pressure — the exclusion principle resisting compression", "Nuclear explosions", "Magnetic fields only", "Nothing — they collapse instantly"], correctIndex: 0, explanation: "Pauli's rule resists further compression, supporting dead stars (until limits are exceeded)." },
        { id: "quantum-x03-q6", type: "Connection", challenge: "Back to chips.", text: "How does exclusion connect to computing?", options: ["It underlies the band structure of semiconductors that makes transistors possible", "It has no connection", "It powers the screen", "It cools the CPU"], correctIndex: 0, explanation: "Electron states under exclusion create semiconductor bands — the basis of the switch." },
      ],
    },
  },

  // ─── quantum-x04: Atomic Structure ───────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "Bohr's atom and the quantum orbital", location: "Copenhagen, Denmark", era: "1913 CE", emoji: "🪐" },
    id: "quantum-x04",
    order: 4,
    title: "The Architecture of Atoms",
    subtitle: "Orbitals, Quantum Numbers & the Periodic Table",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-qx-atom", name: "Atomic Architect", emoji: "🪐" },
    challengeType: "quiz",
    info: {
      tagline: "Forget the cartoon of electrons orbiting like planets. An atom's electrons live in fuzzy clouds of probability called orbitals — and the quantum rules for those clouds explain the entire periodic table and all of chemistry.",
      year: 2024,
      overview: [
        "Now we can assemble the atom properly. Combining superposition (electrons as probability clouds), quantized energy levels (from the beginner track), spin, and the Pauli principle gives the real quantum picture of atomic structure — and from it, the periodic table falls out almost for free. This is where quantum physics becomes chemistry.",
        "The modern atom looks nothing like the planetary cartoon of electrons circling a nucleus. Electrons don't follow neat orbits at all; they occupy 'orbitals' — three-dimensional clouds of probability that show where an electron is likely to be found rather than where it is. Those orbitals come in characteristic shapes and sizes (the familiar s, p, d, and f types), and only certain energies are allowed, which is just the quantization from the intro track reappearing inside the atom. Each electron is then tagged by a set of 'quantum numbers' — its energy level, orbital shape, orientation, and spin — and Pauli's rule from the previous stage delivers the punchline: no two electrons in an atom may share the same full set of those numbers.",
        "From exactly those rules, the periodic table falls out almost mechanically. Electrons fill orbitals from the lowest energy upward, two to an orbital with opposite spins (that's Pauli again), stacking into shells. Because an element's chemistry is governed almost entirely by its outermost electrons, every time a shell fills and a new one begins, the chemical properties *repeat* — which is precisely the 'periodic' pattern Mendeleev spotted decades before anyone knew the quantum reason behind it. The entire table — the metals, the inert noble gases, the reactivity trends, the rules of bonding — is in the end just a direct readout of how electrons are forced to arrange themselves under quantum law. This is the stage where quantum physics quietly becomes all of chemistry.",
      ],
      technical: {
        title: "Orbitals, Filling Order, and Spectra",
        body: [
          "A few ideas make atomic structure click:\n- Quantum numbers — each electron has a principal level (size/energy), a shape (s/p/d/f), an orientation, and a spin; together they name its state uniquely.\n- Filling — electrons occupy the lowest-energy available states first, two per orbital with opposite spins (Pauli), building shells outward.\n- Valence electrons — the outermost electrons drive bonding and reactivity, which is why elements in the same column behave alike.",
          "Atoms also reveal their structure through light:\n- When an electron jumps between allowed energy levels, it absorbs or emits a photon of an exact energy (color) — producing the sharp 'spectral lines' unique to each element.\n- This is how we know what distant stars are made of, and it directly demonstrates energy quantization: only specific jumps, so only specific colors.\n- It ties back to the beginner track's photon and to quantum technology — atomic energy levels are the basis of lasers and atomic clocks, and trapped atoms/ions are among the best qubits we have.",
        ],
      },
      incident: {
        title: "1913 — Bohr Quantizes the Atom",
        when: "1913",
        where: "Copenhagen, Denmark / Manchester, UK",
        impact: "Niels Bohr's quantized atomic model explained spectral lines and launched the quantum theory of the atom",
        body: [
          "Classical physics had a crisis: an electron orbiting a nucleus should radiate energy and spiral inward, making atoms collapse in an instant. Niels Bohr proposed instead that electrons can only occupy certain allowed energy levels and jump between them by emitting or absorbing fixed quanta of light — explaining the sharp spectral lines of hydrogen.",
          "Bohr's model was a crucial stepping stone:\n- It was later refined into the full quantum picture of probability orbitals (by Schrödinger, Heisenberg, and others), but its core idea — quantized energy levels — was exactly right.\n- It explained why atoms are stable and why each element emits its own fingerprint of colors.\n- Bohr won the 1922 Nobel Prize, and his quantized atom is the foundation of chemistry, spectroscopy, lasers, and the atomic qubits at the frontier of quantum computing.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Quantized Energy Levels", sub: "only certain orbits allowed", type: "system" },
          { label: "Probability Orbitals", sub: "fuzzy clouds, s/p/d/f shapes", type: "attacker" },
          { label: "Pauli Filling", sub: "2 per orbital, into shells", type: "victim" },
          { label: "The Periodic Table", sub: "chemistry from quantum rules", type: "result" },
        ],
      },
      timeline: [
        { year: 1869, event: "Mendeleev arranges the periodic table by pattern, without knowing why" },
        { year: 1913, event: "Bohr's quantized atom explains spectral lines", highlight: true },
        { year: 1926, event: "Schrödinger's orbitals give the full probability-cloud picture" },
        { year: 1949, event: "The quantum shell model extends to the nucleus too" },
      ],
      keyTakeaways: [
        "Electrons occupy 'orbitals' — probability clouds with allowed energies — not planet-like orbits",
        "Quantum numbers + Pauli's rule determine how electrons fill shells in every atom",
        "The periodic table's repeating chemistry is a direct readout of those quantum filling rules",
        "Electron jumps between levels emit/absorb exact colors (spectral lines) — proving energy quantization",
      ],
      references: [
        { title: "Atomic orbitals and the periodic table — Khan Academy", url: "https://www.khanacademy.org/science/chemistry" },
        { title: "Bohr model of the atom — Nobel Prize 1922", url: "https://www.nobelprize.org/prizes/physics/1922/summary/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x04-q1", type: "Core Idea", challenge: "Not planets.", text: "How do electrons actually occupy an atom?", options: ["In 'orbitals' — probability clouds of where they're likely to be", "In neat circular orbits like planets", "Stuck to the nucleus", "Randomly outside the atom"], correctIndex: 0, explanation: "Electrons are probability clouds (orbitals), not planetary orbits." },
        { id: "quantum-x04-q2", type: "Filling", challenge: "Building shells.", text: "How do electrons fill an atom's orbitals?", options: ["Lowest energy first, two per orbital (opposite spins), stacking into shells", "All in the highest level", "Randomly", "Only one electron per atom"], correctIndex: 0, explanation: "Pauli's rule plus energy ordering builds the shell structure." },
        { id: "quantum-x04-q3", type: "Periodic Table", challenge: "Why it repeats.", text: "Why do chemical properties repeat across the periodic table?", options: ["Outermost (valence) electrons drive chemistry, and shells refill in a repeating pattern", "Elements are randomly placed", "Atoms copy each other", "Heat causes it"], correctIndex: 0, explanation: "Repeating valence-electron arrangements produce the 'periodic' chemical patterns." },
        { id: "quantum-x04-q4", type: "Quantum Numbers", challenge: "Labeling states.", text: "What do an electron's quantum numbers describe?", options: ["Its energy level, orbital shape, orientation, and spin — its unique state", "Its mass and charge only", "Its temperature", "Its color"], correctIndex: 0, explanation: "Together they uniquely name an electron's state, which Pauli forbids two electrons from sharing." },
        { id: "quantum-x04-q5", type: "Spectra", challenge: "Atoms emit light.", text: "Why does each element emit specific colors (spectral lines)?", options: ["Electrons jump between allowed energy levels, emitting photons of exact energies", "Atoms are painted", "It's random glow", "All elements emit the same color"], correctIndex: 0, explanation: "Quantized level jumps produce exact photon energies — element fingerprints that prove quantization." },
        { id: "quantum-x04-q6", type: "History", challenge: "The first model.", text: "What did Bohr's 1913 atom introduce?", options: ["Electrons occupy only certain allowed energy levels, explaining spectral lines", "That atoms don't exist", "Electrons orbit randomly", "The transistor"], correctIndex: 0, explanation: "Bohr's quantized levels explained atomic stability and spectra — a key step to the modern atom." },
      ],
    },
  },

  // ─── quantum-x05: The Photon ─────────────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "Quantum electrodynamics — the most precise theory", location: "Pasadena / Princeton, USA", era: "1948 CE", emoji: "💡" },
    id: "quantum-x05",
    order: 5,
    title: "The Particle of Light",
    subtitle: "Photons & How Light and Matter Interact",
    category: "cybersecurity",
    xp: 145,
    badge: { id: "badge-qx-photon", name: "Photon Physicist", emoji: "💡" },
    challengeType: "quiz",
    info: {
      tagline: "Light is a wave — and also a stream of indivisible packets called photons. Understanding the photon, and how it trades energy with electrons, unlocks lasers, solar panels, fiber optics, and the most accurately-tested theory in all of science.",
      year: 2024,
      overview: [
        "The photon is the quantum of light: the smallest indivisible packet of electromagnetic energy. The beginner track met it in passing; here we take it seriously, because the photon is both the perfect example of wave-particle duality and the messenger that carries the electromagnetic force. Almost every interaction between light and matter is a story of photons being absorbed or emitted by electrons.",
        "A few photon facts permanently reshape how you see light. First, light comes in packets: a dim beam isn't a faint continuous wave but simply *fewer photons*, and with a sensitive enough detector you can register them arriving one at a time, like raindrops. Second, each photon's energy is set by its color (its frequency) — blue and ultraviolet photons each carry more energy than red or infrared ones, which is the whole reason UV photons can break the molecular bonds in your skin while a far brighter red light cannot. Third, photons are bosons: massless, chargeless, always travelling at light speed, and — unlike electrons, which Pauli keeps apart — perfectly happy to pile into the same state by the billions. That last fact is exactly what makes a laser possible: a flood of identical photons marching in lockstep.",
        "And photon-matter interaction, electrons absorbing and emitting these packets, runs much of the modern world. The photoelectric effect — light knocking electrons clean out of a material, the phenomenon Einstein explained with photons and won his Nobel for — is what powers solar panels and light sensors. Emission and absorption — electrons hopping between atomic energy levels and emitting or swallowing a photon of the exact matching energy — underlie lasers, LEDs, and the spectroscopy we use to read the composition of distant stars. And information itself rides on photons: fiber optics carry the internet as pulses of light, while *single* photons are the carriers in quantum key distribution, where the no-cloning rule from the beginner track is what makes an eavesdropper impossible to hide. The photon is both the cleanest example of wave-particle duality and the workhorse messenger of the electromagnetic force.",
      ],
      technical: {
        title: "From the Photoelectric Effect to QED",
        body: [
          "The photoelectric effect was the photon's first proof:\n- Shining light on a metal ejects electrons — but only if the light's frequency (color) is high enough, no matter how bright a low-frequency beam is.\n- Classical waves couldn't explain this; Einstein did, in 1905, by saying light arrives as photons whose energy depends on frequency, so only sufficiently energetic photons can free an electron.\n- This won Einstein the Nobel Prize and was a cornerstone of quantum theory — light is genuinely particulate.",
          "Photons are also the heart of our deepest theory of light and matter:\n- Quantum electrodynamics (QED) describes how charged particles interact by exchanging photons — including 'virtual' photons that briefly mediate the electromagnetic force.\n- QED is the most precisely tested theory in physics: some predictions match experiment to better than one part in a trillion.\n- For technology and security, photons are uniquely useful carriers — they travel fast and far with little interaction, which is why fiber-optic internet and photon-based quantum communication exist, and why single-photon detectors are precision instruments.",
        ],
      },
      incident: {
        title: "The Triumph of QED — Physics' Most Precise Theory",
        when: "1948",
        where: "USA and Japan",
        impact: "Feynman, Schwinger, and Tomonaga's quantum electrodynamics matched experiment to extraordinary precision, setting the gold standard for physical theory",
        body: [
          "In the late 1940s, Richard Feynman, Julian Schwinger, and Sin-Itiro Tomonaga (with Freeman Dyson unifying their approaches) developed quantum electrodynamics — a complete quantum theory of light, electrons, and their interaction via photons. Feynman's famous diagrams turned its calculations into intuitive pictures of particles exchanging photons.",
          "QED became the template for all of modern physics:\n- Its predictions — like the precise magnetism of the electron — agree with measurement to around one part in a trillion, an accuracy unmatched anywhere in science.\n- The trio shared the 1965 Nobel Prize, and QED's framework grew into the Standard Model of particle physics (a later stage).\n- It cements the photon's status: light is a particle that mediates a fundamental force, and understanding it precisely underlies everything from LED lighting to the quantum-secure communication channels in the security tracks.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Light as Photons", sub: "indivisible energy packets", type: "system" },
          { label: "Energy ∝ Frequency", sub: "blue packs more than red", type: "attacker" },
          { label: "Electrons Absorb/Emit", sub: "photoelectric, lasers, spectra", type: "victim" },
          { label: "QED + Fiber + QKD", sub: "photons carry force and data", type: "result" },
        ],
      },
      timeline: [
        { year: 1905, event: "Einstein explains the photoelectric effect with light-quanta (photons)" },
        { year: 1926, event: "The term 'photon' is coined for the quantum of light" },
        { year: 1948, event: "Feynman, Schwinger, Tomonaga complete QED", highlight: true },
        { year: 1960, event: "The laser — a flood of identical photons — is invented" },
      ],
      keyTakeaways: [
        "A photon is the indivisible quantum of light; dim light is fewer photons, detectable one at a time",
        "A photon's energy depends on its frequency (color) — the key to the photoelectric effect and spectra",
        "Photons are massless, chargeless bosons that can share a state — making laser light possible",
        "QED (photons mediating EM) is physics' most precisely tested theory; photons carry fiber and quantum-secure data",
      ],
      references: [
        { title: "The photoelectric effect — Khan Academy", url: "https://www.khanacademy.org/science/physics/quantum-physics/photons" },
        { title: "Quantum electrodynamics — explainer", url: "https://en.wikipedia.org/wiki/Quantum_electrodynamics" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x05-q1", type: "Core Idea", challenge: "What it is.", text: "What is a photon?", options: ["The smallest indivisible packet (quantum) of light/electromagnetic energy", "A tiny electron", "A unit of sound", "A type of atom"], correctIndex: 0, explanation: "Light comes in indivisible packets — photons — detectable one at a time." },
        { id: "quantum-x05-q2", type: "Energy", challenge: "Color and energy.", text: "What determines a photon's energy?", options: ["Its frequency/color — blue/UV photons carry more energy than red/infrared", "Its weight", "How bright the light is", "Its temperature"], correctIndex: 0, explanation: "Energy depends on frequency, which is why UV damages skin but red light doesn't." },
        { id: "quantum-x05-q3", type: "Photoelectric", challenge: "Einstein's proof.", text: "What does the photoelectric effect show?", options: ["Light ejects electrons only if photon frequency is high enough — proving light is particulate", "Light has no energy", "Brightness alone frees electrons", "Electrons emit light"], correctIndex: 0, explanation: "Only sufficiently energetic photons free electrons, regardless of brightness — Einstein's photon argument." },
        { id: "quantum-x05-q4", type: "Bosons", challenge: "Why lasers work.", text: "Why can many photons occupy the same state (enabling lasers)?", options: ["Photons are bosons, which can share a quantum state (unlike electrons)", "Photons repel each other", "They are fermions", "They have mass"], correctIndex: 0, explanation: "Bosons pile into the same state, so a laser is a flood of identical photons." },
        { id: "quantum-x05-q5", type: "QED", challenge: "The precise theory.", text: "What is quantum electrodynamics (QED)?", options: ["The theory of charged particles interacting by exchanging photons — physics' most precisely tested", "A theory of gravity", "A type of laser", "A chemistry rule"], correctIndex: 0, explanation: "QED describes light-matter interaction via photons and matches experiment to ~1 part in a trillion." },
        { id: "quantum-x05-q6", type: "Applications", challenge: "Carrying data.", text: "Why are photons ideal for fiber optics and quantum communication?", options: ["They travel fast and far with little interaction, and single photons are tamper-evident", "They are heavy and slow", "They can't move", "They corrupt easily over distance"], correctIndex: 0, explanation: "Photons make excellent carriers; in QKD the no-cloning rule makes intercepting them detectable." },
      ],
    },
  },

  // ─── quantum-x06: Decoherence & Measurement ──────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The measurement problem", location: "Copenhagen / worldwide", era: "Present Day", emoji: "🌫️" },
    id: "quantum-x06",
    order: 6,
    title: "Where Quantum Becomes Classical",
    subtitle: "Decoherence & the Measurement Problem",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-qx-decoherence", name: "Decoherence Diver", emoji: "🌫️" },
    challengeType: "quiz",
    info: {
      tagline: "Quantum objects live in blends of possibility, yet the world we see is stubbornly definite. Why? The answer — decoherence — is one of physics' great insights, but it leaves a deeper puzzle that remains genuinely unsolved.",
      year: 2024,
      overview: [
        "The beginner track noted that big things don't look quantum because the environment 'measures' them. This stage takes that seriously. Decoherence is the precise, well-understood process by which a quantum system's delicate superposition gets scrambled by interaction with its surroundings — explaining why we never see a coffee cup in two places, and why quantum computers are so hard to build.",
        "At its heart, decoherence is about information leaking into the environment. A superposition stays genuinely 'quantum' only as long as its different possibilities can still interfere with one another — that interference is the very source of quantum computing's power. But the instant the system entangles with its surroundings — a stray air molecule, a passing photon, a faint vibration — that interference is washed out, and the system starts behaving like a boring classical mixture of definite outcomes. The speed of this is the whole story: it happens essentially instantaneously for large objects (a dust grain decoheres faster than any clock could measure) and only slowly for tiny, well-isolated ones. That single fact is why qubits demand extreme cold and near-perfect isolation, and why 'coherence time' — how long a qubit survives before the environment scrambles it — is the headline spec of any quantum computer.",
        "But — and this is the intellectually honest part — decoherence does not actually solve the deeper riddle, and pretending it does is a common mistake. It explains beautifully why we never *see* a superposition of a big object: the interference is gone, leaving the appearance of definiteness. What it does not explain, by itself, is why we observe *one specific outcome rather than another* — why this result and not that one, when the math only removed the interference between them. That last stubborn step is the famous 'measurement problem,' and it is exactly where the interpretations of quantum mechanics genuinely diverge. So decoherence deserves to be celebrated as a real triumph that dissolves most of the old mystery — while leaving, with full honesty, one deep question still open, the very question the final stage of this track takes up.",
      ],
      technical: {
        title: "Coherence, Its Loss, and Fighting It",
        body: [
          "Coherence is the resource; decoherence is its enemy:\n- Coherence means the parts of a superposition still have a definite phase relationship, so they can interfere — the engine of quantum computing.\n- Decoherence is the loss of that phase relationship as the system gets entangled with uncontrolled environmental degrees of freedom; the information about the superposition leaks out and is lost into the environment.\n- 'Coherence time' (how long a qubit stays usable) is therefore the headline metric of quantum hardware, and improving it is a central engineering battle.",
          "This reframes both quantum computing and the classical world:\n- Building a quantum computer is largely a war against decoherence — isolation, cryogenics, better materials, and quantum error correction (a later stage) all aim to extend coherence or undo its effects.\n- The 'quantum-to-classical transition' is not a magical boundary but a continuous, calculable process driven by how strongly a system couples to its surroundings.\n- It is also why everyday reality looks solid and definite: the environment is constantly, rapidly decohering everything large, hiding the quantum substrate beneath an effectively classical surface.",
        ],
      },
      incident: {
        title: "Decoherence Theory — Explaining the Classical World",
        when: "1970s–1990s",
        where: "Germany and the USA",
        impact: "The theory of decoherence (Zeh, Zurek, and others) explained how classical reality emerges from quantum mechanics without changing its equations",
        body: [
          "For decades after quantum mechanics' founding, the 'measurement problem' — why we see definite outcomes — was treated as almost philosophical. Starting with Dieter Zeh in the 1970s and developed by Wojciech Zurek and others, the theory of decoherence showed mathematically how a quantum system rapidly loses its interference when entangled with its environment.",
          "It was a major conceptual advance:\n- It explained the emergence of the classical world from quantum rules without adding anything to the theory — just taking the environment's effect seriously.\n- It made the quantum-to-classical transition a quantitative, experimentally-testable process, since labs can now watch superpositions decohere in slow motion in well-controlled systems.\n- Honest physicists stress its limit: decoherence explains the disappearance of visible superpositions, but the question of why a particular outcome is experienced remains open — which is precisely why interpretations of quantum mechanics still matter.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Coherent Superposition", sub: "possibilities can interfere", type: "system" },
          { label: "Entangles with Environment", sub: "air, photons, vibration", type: "attacker" },
          { label: "Interference Lost", sub: "looks classical & definite", type: "victim" },
          { label: "Open Question Remains", sub: "why this outcome?", type: "result" },
        ],
      },
      timeline: [
        { year: 1935, event: "Schrödinger's cat dramatizes the measurement problem" },
        { year: 1970, event: "Zeh introduces decoherence — the environment scrambles superpositions" },
        { year: 1991, event: "Zurek popularizes decoherence and 'einselection'", highlight: true },
        { year: 2000, event: "Labs directly observe controlled decoherence in mesoscopic systems" },
      ],
      keyTakeaways: [
        "Decoherence is the environment scrambling a superposition's interference, making systems look classical",
        "It's fast for big objects, slow for well-isolated tiny ones — why qubits need cold and isolation",
        "'Coherence time' is the headline spec of quantum hardware; building quantum computers fights decoherence",
        "Decoherence explains the loss of visible superpositions but not why one specific outcome is seen — still open",
      ],
      references: [
        { title: "Decoherence and the classical limit — explainer", url: "https://en.wikipedia.org/wiki/Quantum_decoherence" },
        { title: "The measurement problem — Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/entries/qt-issues/" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x06-q1", type: "Core Idea", challenge: "What it is.", text: "What is decoherence?", options: ["The environment scrambling a superposition's interference, making it look classical", "A quantum computer crashing", "A type of measurement device", "Light losing color"], correctIndex: 0, explanation: "Interaction with the surroundings destroys interference, producing apparent classical definiteness." },
        { id: "quantum-x06-q2", type: "Mechanism", challenge: "How it happens.", text: "What causes a superposition to decohere?", options: ["The system entangles with uncontrolled environmental particles, leaking the information out", "It gets too cold", "Nobody is watching it", "It runs out of energy"], correctIndex: 0, explanation: "Entanglement with air, photons, and vibrations destroys the interference that makes it quantum." },
        { id: "quantum-x06-q3", type: "Scale", challenge: "Big vs small.", text: "Why don't big objects show superposition?", options: ["They decohere essentially instantly due to constant environmental interaction", "They're too heavy to be quantum", "Quantum rules switch off", "They're made of classical atoms"], correctIndex: 0, explanation: "Large objects couple strongly to their surroundings, decohering almost immediately." },
        { id: "quantum-x06-q4", type: "Computing", challenge: "The key spec.", text: "Why does decoherence matter for quantum computers?", options: ["Qubits must stay coherent to compute; 'coherence time' is a headline metric", "It makes them cheaper", "It speeds them up", "It has no effect"], correctIndex: 0, explanation: "Building quantum computers is largely a war against decoherence (isolation, cold, error correction)." },
        { id: "quantum-x06-q5", type: "The Limit", challenge: "Honest boundary.", text: "What does decoherence NOT fully explain?", options: ["Why we experience one specific outcome rather than another (the measurement problem)", "Why atoms exist", "How magnets work", "Why light is fast"], correctIndex: 0, explanation: "It explains the loss of visible superpositions but not why a particular result is seen — still open." },
        { id: "quantum-x06-q6", type: "Significance", challenge: "What it achieved.", text: "What did decoherence theory accomplish?", options: ["Explained the emergence of the classical world from quantum rules, without changing the equations", "Proved quantum mechanics wrong", "Eliminated all mystery", "Replaced measurement"], correctIndex: 0, explanation: "By taking the environment seriously, it made the quantum-to-classical transition calculable and testable." },
      ],
    },
  },

  // ─── quantum-x07: Bell & Nonlocality ─────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "Bell's theorem and the loophole-free tests", location: "Delft, Netherlands", era: "2015 CE", emoji: "🔗" },
    id: "quantum-x07",
    order: 7,
    title: "The Universe Is Not Local",
    subtitle: "Bell's Theorem & Quantum Nonlocality",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-qx-bell", name: "Bell Theorist", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "The beginner track said entanglement is real and rules out 'hidden values'. This stage shows how we actually know — through one of the most profound results in science, a simple inequality that turns a philosophical argument into a number you can measure.",
      year: 2024,
      overview: [
        "Bell's theorem is arguably the deepest result in the foundations of physics. It takes the dispute between Einstein (who insisted particles must have pre-set 'hidden' values, with no spooky influence at a distance) and quantum mechanics, and proves they make different, testable predictions. The universe, the experiments say, sides with quantum mechanics — and against 'local realism'.",
        "What makes Bell's theorem so powerful is that it pins down two worldviews precisely enough to tell them apart in a lab. On one side is local hidden variables, Einstein's hope: particles secretly carry pre-determined answers, and nothing influences a distant measurement faster than light — comforting, classical, common-sense. On the other is quantum mechanics: entangled particles have *no* definite values until measured, yet turn out correlated in a way that no pre-arranged local plan could ever reproduce. Bell's genius was to find a specific quantity — a particular combination of correlation measurements at different angles — that any local-hidden-variable universe can never push past a fixed numerical limit, while quantum mechanics predicts it sails right past. Two philosophies, one number that separates them. The argument was no longer about taste; it was about an experiment.",
        "And the experiments have settled it about as firmly as science ever settles anything. Real measurements violate Bell's inequalities, exactly as quantum mechanics predicts and local hidden variables forbid — the result honored by the 2022 Nobel Prize mentioned in the beginner track. Skeptics spent decades pointing to technical 'loopholes' (maybe the detectors were biased, maybe a hidden signal snuck through), and in 2015 a set of 'loophole-free' experiments closed the last of them, leaving essentially no room to wriggle. The conclusion is genuinely unsettling: the world's correlations are 'nonlocal,' irreducibly so. Yet here is the subtle saving grace — because the individual outcomes are still random, this nonlocality can never be used to send a message faster than light, so Einstein's relativity survives intact even as his deepest intuition about reality is overturned. The universe is stranger than he wanted, but not inconsistent.",
      ],
      technical: {
        title: "The Inequality, the Loopholes, and No Signaling",
        body: [
          "The logic of a Bell test is elegant:\n- Two distant observers each randomly choose a measurement setting and record an outcome on their half of an entangled pair, over many trials.\n- A specific combination of how their results correlate (the 'CHSH' quantity) has a hard ceiling if local hidden variables are true — but quantum entanglement predicts a higher value.\n- Measuring above the classical ceiling proves no local pre-set explanation works; experiments consistently land in the quantum range.",
          "Two subtleties matter for understanding the result honestly:\n- Closing loopholes — early experiments left technical 'loopholes' (maybe the detectors were biased, or the settings were chosen too early); the 2015 loophole-free tests (Delft, NIST, Vienna) closed them simultaneously, making the conclusion robust.\n- No faster-than-light communication — although the correlations are nonlocal, each party's individual results look perfectly random, so you cannot encode a message in them; the 'no-signaling' principle holds, and relativity is safe.\n- For technology, Bell tests are not just philosophy: they underpin 'device-independent' quantum cryptography, where violating a Bell inequality certifies that a key is genuinely secure even if you don't trust your hardware.",
        ],
      },
      incident: {
        title: "2015 — The Loophole-Free Bell Tests",
        when: "2015",
        where: "Delft (Netherlands), NIST (USA), and Vienna (Austria)",
        impact: "Three experiments closed the remaining loopholes in Bell tests, decisively confirming quantum nonlocality",
        body: [
          "For decades after John Bell's 1964 theorem and the first experiments by Clauser and Aspect, skeptics could point to technical loopholes that might, in principle, rescue local hidden variables. In 2015, a team at Delft led by Ronald Hanson — followed quickly by groups at NIST and Vienna — performed Bell tests that closed the key loopholes at the same time.",
          "It was a landmark of experimental rigor:\n- The Delft experiment used entangled electrons in diamonds over a kilometer apart, with fast random settings, leaving essentially no classical escape.\n- The results violated Bell inequalities cleanly, confirming that nature is genuinely nonlocal and that Einstein's local-realist intuition is wrong.\n- This work, alongside the pioneers, was recognized by the 2022 Nobel Prize, and it grounds the strongest forms of quantum-secure communication — making Bell's once-philosophical theorem a working tool of cryptography.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Entangled Pair", sub: "shared, no pre-set values", type: "system" },
          { label: "Random Distant Settings", sub: "measure both halves", type: "attacker" },
          { label: "Correlations Exceed Limit", sub: "Bell inequality violated", type: "victim" },
          { label: "Nonlocal, Yet No Signaling", sub: "relativity preserved", type: "result" },
        ],
      },
      timeline: [
        { year: 1935, event: "Einstein-Podolsky-Rosen argue quantum theory must be 'incomplete'" },
        { year: 1964, event: "John Bell turns the debate into a testable inequality" },
        { year: 1982, event: "Aspect's experiments strongly favor quantum mechanics" },
        { year: 2015, event: "Loophole-free Bell tests close the last escape routes", highlight: true },
      ],
      keyTakeaways: [
        "Bell's theorem turns 'are there hidden pre-set values?' into a measurable inequality with different predictions",
        "Experiments violate Bell inequalities, ruling out local hidden variables — the world is genuinely nonlocal",
        "2015 loophole-free tests closed the technical escapes, making the conclusion robust (honored by the 2022 Nobel)",
        "Nonlocal correlations still can't send messages faster than light — and they certify device-independent quantum crypto",
      ],
      references: [
        { title: "Bell's theorem — explainer", url: "https://en.wikipedia.org/wiki/Bell%27s_theorem" },
        { title: "Loophole-free Bell test (Delft, 2015)", url: "https://www.nature.com/articles/nature15759" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x07-q1", type: "Core Idea", challenge: "What it proves.", text: "What does Bell's theorem do?", options: ["Turns the hidden-variables debate into a testable inequality with different predictions", "Proves entanglement is fake", "Builds a quantum computer", "Measures the speed of light"], correctIndex: 0, explanation: "Bell showed local hidden variables and quantum mechanics make different, measurable predictions." },
        { id: "quantum-x07-q2", type: "Two Views", challenge: "The contrast.", text: "What are 'local hidden variables'?", options: ["The idea that particles carry pre-set values and nothing influences distant measurements faster than light", "A type of qubit", "A measurement device", "Quantum mechanics itself"], correctIndex: 0, explanation: "It's Einstein's classical hope, which Bell tests rule out." },
        { id: "quantum-x07-q3", type: "Result", challenge: "Who wins.", text: "What do Bell-test experiments find?", options: ["Correlations violate the inequality — ruling out local hidden variables", "Local hidden variables are confirmed", "The results are random noise", "Nothing measurable"], correctIndex: 0, explanation: "Measured correlations exceed the classical ceiling, confirming quantum nonlocality." },
        { id: "quantum-x07-q4", type: "Loopholes", challenge: "Closing escapes.", text: "Why were the 2015 experiments important?", options: ["They closed the remaining technical loopholes simultaneously, making the conclusion robust", "They disproved entanglement", "They were the first Bell tests ever", "They used no entanglement"], correctIndex: 0, explanation: "Loophole-free tests removed the last classical escape routes." },
        { id: "quantum-x07-q5", type: "No Signaling", challenge: "Relativity safe.", text: "Can Bell nonlocality send messages faster than light?", options: ["No — individual results look random, so no message can be encoded (no-signaling)", "Yes, instantly", "Yes, but only short ones", "Only with a quantum computer"], correctIndex: 0, explanation: "Nonlocal correlations don't permit faster-than-light communication; relativity is preserved." },
        { id: "quantum-x07-q6", type: "Application", challenge: "A real tool.", text: "How are Bell tests used in technology?", options: ["Violating a Bell inequality can certify 'device-independent' quantum cryptography", "They cool quantum computers", "They store data", "They have no use"], correctIndex: 0, explanation: "A Bell violation certifies genuine quantum behavior, securing keys even with untrusted hardware." },
      ],
    },
  },

  // ─── quantum-x08: Quantum Error Correction ───────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The race for fault-tolerant quantum computing", location: "Global research labs", era: "Present Day", emoji: "🧩" },
    id: "quantum-x08",
    order: 8,
    title: "Protecting the Fragile",
    subtitle: "Quantum Error Correction",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-qx-qec", name: "Error-Correction Engineer", emoji: "🧩" },
    challengeType: "quiz",
    info: {
      tagline: "Qubits are maddeningly fragile, and you can't even peek at one to check it without destroying it. So how could a quantum computer ever be reliable? The answer — quantum error correction — is one of the cleverest ideas in all of science.",
      year: 2024,
      overview: [
        "Decoherence and noise constantly threaten qubits, so a useful quantum computer must correct errors faster than they accumulate. But quantum error correction faces two obstacles that classical computers never do: you can't copy an unknown qubit (the no-cloning rule), and you can't measure a qubit to check it without collapsing its superposition. That it works at all is remarkable.",
        "The breakthrough that makes it possible at all is to stop protecting any single qubit and instead spread one qubit's information across many. The 'logical qubit' — the protected one you actually compute with — is encoded across many physical qubits, so that no individual qubit holds the whole secret and losing one to noise doesn't lose the information. Then comes the clever part that sidesteps the no-cloning and no-peeking problems: carefully designed measurements check for errors *without reading the data itself*, revealing only whether something went wrong and where, never what the protected value is — so they don't collapse it. With that diagnosis in hand, the error can be corrected, keeping the logical qubit alive and intact even as the physical qubits beneath it constantly flicker with noise. You preserve a quantum secret by measuring everything *except* the secret.",
        "This reframes the entire quantum-computing endeavor and explains why progress is measured the way it is. Today's 'noisy' machines (the NISQ era from the beginner track) have error rates too high and qubit counts too low to run full error correction — they're real and useful for experiments, but fundamentally limited. A truly fault-tolerant quantum computer needs *many* physical qubits to sustain each logical one, often hundreds or thousands, which is precisely why the qubit numbers that matter most are quality and error rate, not the raw headline count a press release brags about. Crossing the threshold — where adding more physical qubits finally makes the logical qubit *more* reliable rather than less — is the central milestone the whole field is racing toward, because it is the moment the biggest promised applications, including the RSA-breaking of the threats track, stop being theoretical and become a matter of engineering scale.",
      ],
      technical: {
        title: "Encoding, Syndromes, and the Threshold",
        body: [
          "Quantum error correction cleverly sidesteps the no-cloning and measurement problems:\n- Encoding — instead of copying, the logical state is spread across an entangled block of physical qubits, so information lives in their correlations, not any one qubit.\n- Syndrome measurement — special 'check' measurements detect the type and location of an error (a bit-flip or a phase-flip) without measuring the encoded data itself, so the superposition survives.\n- Correction — based on the error 'syndrome', the right fix is applied, restoring the logical qubit.",
          "The threshold theorem is the reason it can scale:\n- It proves that if the physical error rate is below a certain threshold, you can suppress logical errors as much as you like by adding more physical qubits per logical qubit.\n- Below threshold, error correction wins; above it, adding qubits makes things worse — so hardware must first get 'good enough', which recent experiments have begun to demonstrate.\n- Leading approaches (like 'surface codes') trade large numbers of physical qubits for robustness, which is why building a useful fault-tolerant machine is as much an engineering megaproject as a physics one — and why the timeline to, say, breaking today's cryptography is real but years out, exactly as the PQC tracks stressed.",
        ],
      },
      incident: {
        title: "1995 — Shor Proves Quantum Errors Can Be Corrected",
        when: "1995",
        where: "AT&T Bell Labs, USA",
        impact: "Peter Shor's first quantum error-correcting code showed fault-tolerant quantum computing was possible in principle",
        body: [
          "When quantum computing was young, many doubted it could ever be practical: qubits were too fragile, and the no-cloning theorem seemed to forbid the redundancy that protects classical data. In 1995, Peter Shor (already famous for his factoring algorithm) published the first quantum error-correcting code, proving that quantum information could be protected after all.",
          "It was a turning point for the entire field:\n- Shor's code, and the threshold theorem that followed, showed that reliable quantum computation is possible in principle despite noise — transforming quantum computing from a likely-impossible dream into an engineering challenge.\n- Decades of progress since have steadily improved qubits and demonstrated small error-correcting codes, with recent experiments showing error rates dropping as codes grow — early signs of crossing the threshold.\n- It anchors the realistic view this platform takes: quantum computers powerful enough to threaten cryptography require fault tolerance, which is hard and not yet here — but is being built, which is why migration starts now.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fragile Physical Qubits", sub: "noise + no cloning + no peeking", type: "system" },
          { label: "Encode into Many", sub: "one logical qubit, spread out", type: "attacker" },
          { label: "Detect Error, Not Data", sub: "syndrome measurement", type: "victim" },
          { label: "Fault Tolerance", sub: "below threshold = scalable", type: "result" },
        ],
      },
      timeline: [
        { year: 1995, event: "Shor publishes the first quantum error-correcting code", highlight: true },
        { year: 1996, event: "The threshold theorem: below a noise level, errors can be suppressed at scale" },
        { year: 2015, event: "Surface codes emerge as a leading practical approach" },
        { year: 2023, event: "Experiments show logical error rates dropping as codes grow larger" },
      ],
      keyTakeaways: [
        "Qubits can't be copied or peeked at, so quantum error correction encodes one logical qubit across many physical qubits",
        "Syndrome measurements detect errors without reading (and collapsing) the protected data",
        "The threshold theorem: below a physical error rate, adding qubits suppresses logical errors as much as wanted",
        "Fault tolerance needs many physical qubits per logical one — why quality/error rate matter more than raw count",
      ],
      references: [
        { title: "Quantum error correction — explainer", url: "https://en.wikipedia.org/wiki/Quantum_error_correction" },
        { title: "Shor's quantum error-correcting code (1995)", url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.52.R2493" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x08-q1", type: "Core Idea", challenge: "The hard problem.", text: "Why is quantum error correction uniquely hard?", options: ["You can't copy an unknown qubit, and measuring one to check it collapses its superposition", "Qubits never have errors", "Classical correction works fine on qubits", "Errors are illegal"], correctIndex: 0, explanation: "No-cloning and measurement-collapse forbid the simple redundancy classical computers use." },
        { id: "quantum-x08-q2", type: "The Trick", challenge: "Spreading it out.", text: "How does quantum error correction protect information?", options: ["It encodes one logical qubit across many physical qubits, so no single one holds the whole state", "It copies the qubit many times", "It freezes the qubit", "It deletes errors manually"], correctIndex: 0, explanation: "Information lives in the correlations of an entangled block, not any single qubit." },
        { id: "quantum-x08-q3", type: "Syndromes", challenge: "Checking without looking.", text: "How are errors detected without destroying the data?", options: ["Syndrome measurements reveal that/where an error occurred without measuring the encoded data", "By reading the qubit directly", "By guessing", "Errors can't be detected"], correctIndex: 0, explanation: "Special check measurements expose the error syndrome while preserving the superposition." },
        { id: "quantum-x08-q4", type: "Threshold", challenge: "Why it scales.", text: "What does the threshold theorem say?", options: ["Below a physical error rate, adding more qubits suppresses logical errors as much as you want", "Errors can never be reduced", "More qubits always means more errors", "Quantum computers can't scale"], correctIndex: 0, explanation: "Below threshold, error correction wins; the hardware must first get 'good enough'." },
        { id: "quantum-x08-q5", type: "Cost", challenge: "The price.", text: "Why does fault tolerance need so many physical qubits?", options: ["Many physical qubits encode each protected logical qubit for robustness", "To look impressive", "Physical qubits are free", "It doesn't — one is enough"], correctIndex: 0, explanation: "Often hundreds–thousands of physical qubits per logical qubit — why quality matters over raw count." },
        { id: "quantum-x08-q6", type: "History", challenge: "The breakthrough.", text: "What did Peter Shor prove in 1995?", options: ["That quantum information can be error-corrected — fault-tolerant QC is possible in principle", "That qubits don't exist", "That RSA is unbreakable", "That error correction is impossible"], correctIndex: 0, explanation: "Shor's first quantum code transformed QC from likely-impossible into an engineering challenge." },
      ],
    },
  },

  // ─── quantum-x09: Quantum Field Theory ───────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The Standard Model and the quantum vacuum", location: "CERN, Geneva", era: "Present Day", emoji: "🌌" },
    id: "quantum-x09",
    order: 9,
    title: "Fields All the Way Down",
    subtitle: "A Gentle Peek at Quantum Field Theory",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-qx-qft", name: "Field Theorist", emoji: "🌌" },
    challengeType: "quiz",
    info: {
      tagline: "Here is physics' deepest current picture of reality: particles are not really tiny balls but ripples in invisible fields that fill all of space. Even empty space is not empty. This is quantum field theory — and it is the most successful idea in the history of science.",
      year: 2024,
      overview: [
        "Everything so far treated particles as the basic stuff. Quantum field theory (QFT) goes one level deeper and says: fields are fundamental, and particles are just excitations — ripples — in those fields. An electron is a ripple in the electron field; a photon is a ripple in the electromagnetic field. Every kind of particle has its own field filling all of space, and what we call a particle is a packet of energy in that field.",
        "This field picture is stranger and far richer than imagining 'tiny balls,' and it quietly answers puzzles the particle view couldn't. It explains why identical particles are *exactly* identical: every electron in the universe is precisely the same as every other not by some cosmic coincidence but because each one is a ripple in the single, universe-spanning electron field — sameness is built into the framework. It explains that empty space isn't empty: the quantum vacuum hums with fluctuating fields and fleeting 'virtual' particles that wink in and out, and these produce real, measured effects — tiny shifts in atomic energy levels, and even a measurable force pulling two nearby plates together. And it reframes forces themselves as particle exchange: the electromagnetic force is just fields trading photons (the QED picture), and the same machinery handles the other fundamental forces too.",
        "All of this is the foundation of the Standard Model, our deepest working theory of reality. The Standard Model describes every known fundamental particle and force — the quarks, the electron and its cousins, the neutrinos, the force-carriers, and the Higgs — as excitations of underlying fields. It is one of the most successful theories in the history of science: it predicted particles like the Higgs boson decades before the LHC actually found it in 2012, and it matches certain experiments to a dozen decimal places. It is emphatically *not* the final word — it leaves gravity out entirely, and uniting quantum theory with gravity remains physics' single greatest unsolved problem — but for everything in the universe except gravity, quantum field theory is the most accurate description of reality humanity has ever written down. That mix of staggering success and one honest gap is exactly the posture the final stage explores.",
      ],
      technical: {
        title: "Excitations, the Vacuum, and the Standard Model",
        body: [
          "The shift from particles to fields resolves several puzzles:\n- Creation and annihilation — fields can gain or lose excitations, which is how particles are created and destroyed (as in particle colliders), something a fixed 'ball' picture can't handle.\n- Antimatter and relativity — combining quantum mechanics with special relativity forces the existence of antimatter (Dirac predicted the positron this way) — antiparticles are excitations too.\n- The vacuum has structure — 'virtual particles' are not science fiction; vacuum fluctuations cause measurable effects, and the Higgs field filling space is what gives many particles their mass.",
          "Why this matters, even at a gentle level:\n- QFT is the engine behind particle physics, the Standard Model, and our understanding of the early universe — the most precisely tested framework in science.\n- It reframes 'what is a particle?' in a way that finally makes sense of identical particles, forces, and the creation of matter.\n- And it marks the honest edge of physics: the Standard Model works beautifully but is incomplete (no gravity, no dark matter explanation), so the deepest questions about reality remain open — a fitting setup for the final stage on interpretations and the unknown.",
        ],
      },
      incident: {
        title: "2012 — Finding the Higgs, a Ripple Predicted Decades Earlier",
        when: "July 2012",
        where: "CERN, Geneva, Switzerland",
        impact: "The Large Hadron Collider discovered the Higgs boson, confirming a field predicted by quantum field theory in the 1960s",
        body: [
          "In the 1960s, Peter Higgs and others used quantum field theory to predict an invisible field filling all of space that gives many fundamental particles their mass — implying a corresponding particle, the Higgs boson, should exist. For nearly fifty years it remained unconfirmed, the missing piece of the Standard Model.",
          "In 2012, CERN's Large Hadron Collider found it:\n- By smashing protons together at enormous energies, physicists briefly 'rang' the Higgs field hard enough to produce its ripple — the Higgs boson — exactly where theory predicted.\n- It was a triumphant confirmation that the field picture of reality is correct, and Higgs and Englert shared the 2013 Nobel Prize.\n- The discovery is the clearest demonstration of QFT's power: a particle conjured from pure mathematics decades earlier was found to be real, underscoring that fields — not little balls — are the deepest layer of the physical world we currently know.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fields Fill All Space", sub: "one field per particle type", type: "system" },
          { label: "Particles = Ripples", sub: "excitations of the field", type: "attacker" },
          { label: "Vacuum Isn't Empty", sub: "fluctuations, virtual particles", type: "victim" },
          { label: "The Standard Model", sub: "QFT's crowning success (no gravity)", type: "result" },
        ],
      },
      timeline: [
        { year: 1928, event: "Dirac's equation predicts antimatter from quantum + relativity" },
        { year: 1948, event: "QED — the first complete quantum field theory — succeeds spectacularly" },
        { year: 1970, event: "The Standard Model unifies the particles and forces (except gravity)" },
        { year: 2012, event: "The Higgs boson is discovered at CERN, confirming its field", highlight: true },
      ],
      keyTakeaways: [
        "Quantum field theory: fields are fundamental, and particles are ripples (excitations) in those fields",
        "It explains why all electrons are identical, what forces are (particle exchange), and how matter is created/destroyed",
        "Even empty space (the quantum vacuum) fluctuates and produces real, measured effects",
        "QFT underlies the Standard Model — hugely successful (it predicted the Higgs) but incomplete: it omits gravity",
      ],
      references: [
        { title: "Quantum field theory — gentle overview", url: "https://en.wikipedia.org/wiki/Quantum_field_theory" },
        { title: "The Standard Model and the Higgs — CERN", url: "https://home.cern/science/physics/standard-model" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x09-q1", type: "Core Idea", challenge: "Deepest picture.", text: "In quantum field theory, what is a particle?", options: ["A ripple (excitation) in an underlying field that fills all of space", "A tiny solid ball", "A type of wave on water", "A unit of software"], correctIndex: 0, explanation: "Fields are fundamental; particles are packets of energy — excitations — in those fields." },
        { id: "quantum-x09-q2", type: "Identical", challenge: "Why all the same.", text: "Why is every electron in the universe exactly identical?", options: ["Each is a ripple in the same single electron field", "They were manufactured together", "By coincidence", "They're not identical"], correctIndex: 0, explanation: "Sharing one underlying field is why all electrons are perfectly identical." },
        { id: "quantum-x09-q3", type: "The Vacuum", challenge: "Empty isn't empty.", text: "What's true of the quantum vacuum?", options: ["It fluctuates with fields and virtual particles, producing real measurable effects", "It's perfectly empty and still", "It's full of air", "It doesn't exist"], correctIndex: 0, explanation: "Vacuum fluctuations cause measurable effects like tiny atomic energy shifts and forces between plates." },
        { id: "quantum-x09-q4", type: "Forces", challenge: "What a force is.", text: "In QFT, how do particles exert forces on each other?", options: ["By exchanging force-carrier particles (e.g. photons for electromagnetism)", "By touching", "By gravity only", "Forces aren't explained"], correctIndex: 0, explanation: "Forces are fields exchanging carrier particles — the QED picture, generalized." },
        { id: "quantum-x09-q5", type: "Standard Model", challenge: "The big theory.", text: "What is the Standard Model?", options: ["Our best QFT-based theory of fundamental particles and forces (minus gravity)", "A model of the solar system", "A computer benchmark", "A chemistry table"], correctIndex: 0, explanation: "It describes quarks, electrons, force-carriers, and the Higgs as fields — but omits gravity." },
        { id: "quantum-x09-q6", type: "Limit", challenge: "Honest edge.", text: "What is QFT/the Standard Model missing?", options: ["Gravity (and a full explanation of dark matter) — unifying it with gravity is unsolved", "Electrons", "The photon", "Any predictive power"], correctIndex: 0, explanation: "Despite its precision, it doesn't include gravity — physics' greatest open problem." },
      ],
    },
  },

  // ─── quantum-x10: Interpretations ────────────────────────────────────────────
  {
    epochId: "quantum-deep",
    wonder: { name: "The unfinished foundations of quantum mechanics", location: "Worldwide", era: "Present Day → Future", emoji: "❓" },
    id: "quantum-x10",
    order: 10,
    title: "What Does It All Mean?",
    subtitle: "Interpretations & the Questions We Can't Yet Answer",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-qx-interpretations", name: "Quantum Philosopher", emoji: "❓" },
    challengeType: "quiz",
    info: {
      tagline: "Quantum mechanics is the most successful theory in science — its predictions never fail. And yet, a century on, physicists still cannot agree on what it actually means. That honest tension is the perfect place to end.",
      year: 2024,
      overview: [
        "Here is one of the strangest facts in all of science: quantum mechanics works flawlessly — it has never made a wrong prediction — yet there is no consensus on what it is telling us about reality. The equations are settled; their meaning is not. This final stage maps the main 'interpretations' and, just as importantly, teaches you to tell what is established from what is genuinely open.",
        "The remarkable thing about the interpretations is that they agree on every experimental prediction yet disagree profoundly about what is real. Copenhagen, the traditional view, says superpositions collapse upon measurement and that asking 'what was really there beforehand' may simply be meaningless — practical and minimal, but it leaves the measurement problem sitting unresolved. Many-worlds takes the opposite tack: there is no collapse at all, every possible outcome genuinely happens, each in its own branching universe — mathematically clean but ontologically extravagant beyond belief. Pilot-wave (de Broglie–Bohm) insists particles really do have definite positions all along, guided by a real physical wave, restoring the determinism Einstein craved but only by accepting explicit nonlocality. And there are others still. The honest situation is that none is proven, because they all make identical lab predictions — so choosing among them is, for now, a matter of judgment and taste rather than experiment.",
        "Learning to separate what is settled from what is open is the real mark of understanding quantum mechanics, and it's the note this whole track ends on. Settled, and rock-solid: the mathematics, the predictions, superposition, entanglement, decoherence, and every technology built on them — quantum computers and quantum cryptography demonstrably work, and nothing in this paragraph is in doubt. Open, and genuinely unresolved: why we observe one definite outcome (the measurement problem), which interpretation if any is 'true,' and how to reconcile quantum theory with gravity. The mature posture this platform encourages is to hold both at once — use the theory with total confidence wherever it's proven, stay honestly humble about what it ultimately *means*, and meet sensational 'quantum' claims with the same skepticism that separates real science from hype. Knowing the edge of your knowledge is not a weakness; it's the whole point.",
      ],
      technical: {
        title: "Same Predictions, Different Stories — and the Real Frontier",
        body: [
          "Why interpretations are hard to choose between:\n- They are (currently) empirically equivalent — Copenhagen, many-worlds, and pilot-wave predict the same experimental results, so no experiment yet decides among them.\n- They trade different costs — determinism, locality, a unique reality, or extra universes; you can't keep all your classical intuitions, and each interpretation sacrifices a different one.\n- Some physicists adopt 'shut up and calculate' — using the theory without committing to a story — which is pragmatic but leaves the deepest question parked.",
          "Where genuine progress may come:\n- Foundations research continues — testing quantum mechanics in new regimes (larger objects, more extreme conditions) probes whether it ever breaks down.\n- Unifying with gravity — a theory of quantum gravity might finally constrain interpretations or reveal where quantum mechanics is incomplete.\n- For you, finishing this track: you now hold both the working knowledge (the parts that build real technology) and the intellectual honesty (knowing the open questions) — which is exactly what lets you separate solid quantum science and engineering from overhyped or mystical claims, the most valuable skill this subject can give.",
        ],
      },
      incident: {
        title: "A Century of Debate — From Bohr vs. Einstein to Today",
        when: "1927–Present",
        where: "Solvay Conferences and physics worldwide",
        impact: "The greatest minds in physics have argued about quantum meaning for a century, and the debate remains unresolved — a model of honest science",
        body: [
          "At the 1927 Solvay Conference, Niels Bohr and Albert Einstein began a legendary debate over what quantum mechanics means. Einstein, unhappy with its randomness and nonlocality ('God does not play dice'), devised thought experiments to expose flaws; Bohr answered each. Neither convinced the other, and the questions they raised — about measurement, reality, and locality — are still discussed today.",
          "That this debate endures is not a failure of physics but a feature of honest science:\n- The predictions were never in doubt and have only grown more precise; what remains contested is interpretation, which is exactly the kind of question good scientists keep open rather than pretend to settle.\n- Bell's theorem (an earlier stage) later turned part of the Einstein-Bohr debate into experiment, proving Einstein's local-realism wrong — a reminder that some 'philosophy' can become testable physics.\n- Finishing here, you inherit the right mindset: deep respect for what quantum mechanics can do, genuine humility about what it means, and the discernment to tell the difference — the foundation for everything else, from the quantum-security tracks to whatever the quantum future brings.",
        ],
      },
      diagram: {
        nodes: [
          { label: "One Set of Predictions", sub: "never wrong, fully settled", type: "system" },
          { label: "Many Interpretations", sub: "Copenhagen, many-worlds, pilot-wave", type: "attacker" },
          { label: "Empirically Equivalent (so far)", sub: "no experiment yet decides", type: "victim" },
          { label: "Use It · Stay Humble", sub: "tell settled from open", type: "result" },
        ],
      },
      timeline: [
        { year: 1927, event: "The Bohr-Einstein debates begin at the Solvay Conference", highlight: true },
        { year: 1957, event: "Everett proposes the many-worlds interpretation" },
        { year: 1964, event: "Bell makes part of the foundations debate experimentally testable" },
        { year: 2024, event: "Interpretations remain unresolved; foundations research continues" },
      ],
      keyTakeaways: [
        "Quantum mechanics' predictions are flawless and settled, but what they mean is still genuinely debated",
        "Main interpretations (Copenhagen, many-worlds, pilot-wave) agree on all experiments but tell different stories",
        "Knowing settled (math, tech, entanglement) vs open (measurement problem, interpretation, gravity) is real understanding",
        "The mature posture: use the theory confidently where proven, stay humble about meaning, and resist hype",
      ],
      references: [
        { title: "Interpretations of quantum mechanics — Stanford Encyclopedia", url: "https://plato.stanford.edu/entries/qm-interpretations/" },
        { title: "The Bohr-Einstein debates — overview", url: "https://en.wikipedia.org/wiki/Bohr%E2%80%93Einstein_debates" },
      ],
    },
    quiz: {
      questions: [
        { id: "quantum-x10-q1", type: "Core Idea", challenge: "The big tension.", text: "What's the strange situation with quantum mechanics?", options: ["Its predictions never fail, yet physicists still disagree on what it means", "It's frequently wrong", "Everyone agrees on its meaning", "It makes no predictions"], correctIndex: 0, explanation: "The math and predictions are settled; their interpretation remains genuinely open." },
        { id: "quantum-x10-q2", type: "Many-Worlds", challenge: "No collapse.", text: "What does the many-worlds interpretation propose?", options: ["There's no collapse — every outcome happens, each in its own branching universe", "Only one outcome is possible", "Particles don't exist", "Measurement is fake"], correctIndex: 0, explanation: "Many-worlds removes collapse at the cost of countless branching universes." },
        { id: "quantum-x10-q3", type: "Equivalence", challenge: "Why hard to choose.", text: "Why is it hard to pick the 'correct' interpretation?", options: ["They predict the same experimental results, so no experiment yet decides between them", "They contradict the data", "Scientists haven't tried", "Only one has been written down"], correctIndex: 0, explanation: "Empirical equivalence means the choice is currently judgment, not experiment." },
        { id: "quantum-x10-q4", type: "Settled vs Open", challenge: "Knowing the difference.", text: "Which is firmly settled, not open?", options: ["The math, predictions, and technologies (quantum computing, cryptography) work", "Which interpretation is true", "Why one specific outcome is seen", "How to unite quantum theory with gravity"], correctIndex: 0, explanation: "The working science is rock-solid; the meaning and gravity questions stay open." },
        { id: "quantum-x10-q5", type: "Frontier", challenge: "Where progress may come.", text: "What might eventually constrain interpretations?", options: ["A theory of quantum gravity or tests in new extreme regimes", "Better marketing", "Faster computers alone", "Nothing ever could"], correctIndex: 0, explanation: "Unifying with gravity or probing new regimes could reveal where quantum theory is incomplete." },
        { id: "quantum-x10-q6", type: "Mindset", challenge: "The takeaway.", text: "What's the mature posture toward quantum mechanics?", options: ["Use it confidently where proven, stay humble about meaning, and resist hype", "Believe every sensational claim", "Reject the whole theory", "Assume it's fully understood"], correctIndex: 0, explanation: "Respect for what it does plus humility about what it means is the most valuable skill here." },
      ],
    },
  },
];

// CTF labs — deep, step-by-step exercises via the shared mkDeepCtf factory.
// Intermediate quantum physics turned into hands-on labs. Flags in stage-flags.ts.
const QX_CTF: Record<string, CtfConfig> = {
  "quantum-x01": mkDeepCtf(
    "Spin is angular momentum with no spinning. Prepare a spin-1/2 particle, send it through a Stern-Gerlach magnet, and read out its quantized spin.",
    "OP: THE SPIN\nTarget: a spin-1/2 particle.\nGoal: prepare, pass through Stern-Gerlach, read out.\nSequence: prep-spin -> stern-gerlach -> readout-spin",
    "FLAG{SP1N_",
    "Mission Brief",
    ["prep-spin", "H4LF_", "Spin Prepared", [
      "$ prep-spin",
      "Electron has spin-1/2: an intrinsic angular momentum that nothing is physically rotating.",
      "It can be up or down along any chosen axis.",
      "Next: stern-gerlach",
    ]],
    ["stern-gerlach", "M34SUR3D_", "Stern-Gerlach Run", [
      "$ stern-gerlach --axis z",
      "The beam splits into exactly TWO spots, not a continuous smear -> spin is quantized.",
      "Measurement forces one of two outcomes.",
      "Next: readout-spin",
    ]],
    ["readout-spin", "UP}", "Spin Read", [
      "$ readout-spin",
      "Result: |up>. A spin-1/2 system is a natural qubit (up=0, down=1).",
      "Spin is one of the cleanest physical encodings of quantum information.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Prepare the spin. Run: prep-spin", "Run Stern-Gerlach. Run: stern-gerlach", "Read out the spin. Run: readout-spin", "Run 'assemble', then submit the flag"],
    { "spin.txt": "spin-1/2: two outcomes only\nStern-Gerlach z-axis: 2 spots (up/down)" },
  ),
  "quantum-x02": mkDeepCtf(
    "Particles can pass through barriers they classically can't surmount — tunneling. Model the barrier, tunnel through it, and measure the resulting current (the basis of the STM and flash memory).",
    "OP: WALKING THROUGH WALLS\nTarget: an energy barrier.\nGoal: model it, tunnel, measure the current.\nSequence: model-barrier -> tunnel-through -> measure-current",
    "FLAG{TUNN3L_",
    "Mission Brief",
    ["model-barrier", "B4RR13R_", "Barrier Modeled", [
      "$ model-barrier --height 5eV --width 1nm",
      "A classical particle with 3eV is stuck. Quantum mechanics gives it a nonzero probability to pass.",
      "The wavefunction leaks into the barrier.",
      "Next: tunnel-through",
    ]],
    ["tunnel-through", "CURR3NT_", "Tunneled", [
      "$ tunnel-through",
      "Transmission probability falls off exponentially with width -> tiny but real.",
      "Thinner barrier = far more tunneling.",
      "Next: measure-current",
    ]],
    ["measure-current", "L34K}", "Current Measured", [
      "$ measure-current",
      "Tunneling current measured — exactly how an STM images atoms and flash cells leak charge.",
      "A 'wall' is not absolute at the quantum scale.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Model the barrier. Run: model-barrier", "Tunnel through. Run: tunnel-through", "Measure the current. Run: measure-current", "Run 'assemble', then submit the flag"],
    { "barrier.txt": "height: 5eV, width: 1nm\nparticle E: 3eV (classically stuck)\nT ~ exp(-2*kappa*width)  (nonzero)" },
  ),
  "quantum-x03": mkDeepCtf(
    "The Pauli exclusion principle keeps matter from collapsing. Fill electron states, enforce exclusion, and verify the degeneracy pressure that holds up atoms (and white dwarfs).",
    "OP: WHY YOU DON'T FALL THROUGH THE FLOOR\nTarget: electrons filling available states.\nGoal: fill, enforce Pauli, verify stability.\nSequence: fill-shells -> enforce-pauli -> verify-stability",
    "FLAG{P4UL1_",
    "Mission Brief",
    ["fill-shells", "3XCLUS10N_", "Shells Filled", [
      "$ fill-shells",
      "Electrons are fermions; each quantum state holds at most one.",
      "They stack into higher states rather than piling into the lowest.",
      "Next: enforce-pauli",
    ]],
    ["enforce-pauli", "D3G3N3R4CY_", "Pauli Enforced", [
      "$ enforce-pauli",
      "No two electrons share all quantum numbers -> they resist being squeezed together.",
      "This resistance is degeneracy pressure.",
      "Next: verify-stability",
    ]],
    ["verify-stability", "ST4BL3}", "Stability Verified", [
      "$ verify-stability",
      "Degeneracy pressure holds atoms apart (and supports white-dwarf stars). Matter is stable.",
      "Exclusion is why chemistry — and solid ground — exist.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Fill the shells. Run: fill-shells", "Enforce Pauli. Run: enforce-pauli", "Verify stability. Run: verify-stability", "Run 'assemble', then submit the flag"],
    { "pauli.txt": "fermions: 1 per state\nno shared quantum numbers\n=> degeneracy pressure => stable matter" },
  ),
  "quantum-x04": mkDeepCtf(
    "An atom's structure is a set of quantized orbitals. Assign the four quantum numbers, fill the orbitals by the rules, and verify the electron configuration.",
    "OP: ARCHITECTURE OF ATOMS\nTarget: an atom's electron structure.\nGoal: assign quantum numbers, fill orbitals, verify.\nSequence: assign-quantum-numbers -> fill-orbitals -> verify-config",
    "FLAG{0RB1T4L_",
    "Mission Brief",
    ["assign-quantum-numbers", "QU4NTUM_", "Numbers Assigned", [
      "$ assign-quantum-numbers",
      "Each electron has n (shell), l (subshell), m_l (orientation), m_s (spin).",
      "These four fully label a state.",
      "Next: fill-orbitals",
    ]],
    ["fill-orbitals", "NUMB3RS_", "Orbitals Filled", [
      "$ fill-orbitals --aufbau",
      "Fill lowest energy first (Aufbau), one spin per state (Pauli), spread out (Hund).",
      "1s 2s 2p ... builds the periodic table.",
      "Next: verify-config",
    ]],
    ["verify-config", "F1LL3D}", "Config Verified", [
      "$ verify-config",
      "Configuration matches the element's chemistry — orbitals explain the periodic table.",
      "Quantum numbers are the address of every electron.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Assign quantum numbers. Run: assign-quantum-numbers", "Fill the orbitals. Run: fill-orbitals", "Verify the config. Run: verify-config", "Run 'assemble', then submit the flag"],
    { "orbitals.txt": "quantum numbers: n, l, m_l, m_s\nrules: Aufbau, Pauli, Hund\nfill: 1s 2s 2p 3s ..." },
  ),
  "quantum-x05": mkDeepCtf(
    "Light comes in packets — photons. Shine light on a metal, eject electrons, and measure the frequency threshold that proves energy is quantized (the photoelectric effect).",
    "OP: THE PARTICLE OF LIGHT\nTarget: a metal under light.\nGoal: shine photons, eject electrons, find the threshold.\nSequence: shine-photons -> eject-electrons -> measure-threshold",
    "FLAG{PH0T0N_",
    "Mission Brief",
    ["shine-photons", "PH0T03L3CTR1C_", "Photons Shone", [
      "$ shine-photons --bright --red",
      "Bright red light: lots of energy total, but NO electrons ejected.",
      "Intensity alone doesn't do it — surprising for a classical wave.",
      "Next: eject-electrons",
    ]],
    ["eject-electrons", "THR3SH0LD_", "Electrons Ejected", [
      "$ eject-electrons --blue",
      "Dim blue light (higher frequency) ejects electrons instantly.",
      "Each photon's energy = h*f; only high-f photons clear the work function.",
      "Next: measure-threshold",
    ]],
    ["measure-threshold", "QU4NT4}", "Threshold Measured", [
      "$ measure-threshold",
      "Below a cutoff frequency: nothing. Above: emission. Light is quantized into photons.",
      "This is the effect that won Einstein the Nobel and launched quantum theory.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Shine the photons. Run: shine-photons", "Eject electrons. Run: eject-electrons", "Measure the threshold. Run: measure-threshold", "Run 'assemble', then submit the flag"],
    { "photoelectric.txt": "bright red: 0 electrons\ndim blue: electrons!\nE_photon = h*f, threshold frequency f0" },
  ),
  "quantum-x06": mkDeepCtf(
    "Quantum weirdness fades into classical reality through decoherence. Prepare a superposition, watch the environment destroy it, then isolate the system to keep it coherent.",
    "OP: QUANTUM TO CLASSICAL\nTarget: a qubit coupled to its environment.\nGoal: prepare, watch decoherence, isolate.\nSequence: prepare-qubit -> observe-decoherence -> isolate-system",
    "FLAG{D3C0H3R3NC3_",
    "Mission Brief",
    ["prepare-qubit", "1S0L4T3_", "Qubit Prepared", [
      "$ prepare-qubit --superposition",
      "Put the qubit in a clean superposition; phase information is intact.",
      "Coherence is what makes it quantum.",
      "Next: observe-decoherence",
    ]],
    ["observe-decoherence", "C0H3R3NT_", "Decoherence Observed", [
      "$ observe-decoherence",
      "Stray coupling to the environment leaks phase info; superposition decays toward a classical mix.",
      "This is why big, warm objects look classical.",
      "Next: isolate-system",
    ]],
    ["isolate-system", "3XT3ND3D}", "System Isolated", [
      "$ isolate-system --cryo --shield",
      "Cooling + shielding cut the coupling; coherence time extended enough to compute.",
      "Fighting decoherence is the core engineering problem of quantum computing.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Prepare the qubit. Run: prepare-qubit", "Observe decoherence. Run: observe-decoherence", "Isolate the system. Run: isolate-system", "Run 'assemble', then submit the flag"],
    { "decoherence.txt": "coherent superposition -> environment coupling -> classical mixture\nfix: isolate (cryo + shielding)" },
  ),
  "quantum-x07": mkDeepCtf(
    "Reality is not locally real. Entangle a pair, test correlations across measurement settings, and rule out every local hidden-variable theory.",
    "OP: NOT LOCAL\nTarget: an entangled pair.\nGoal: entangle, test locality, rule out hidden variables.\nSequence: entangle-pair -> test-locality -> rule-out-lhv",
    "FLAG{N0NL0C4L_",
    "Mission Brief",
    ["entangle-pair", "B3LL_", "Pair Entangled", [
      "$ entangle-pair",
      "Created a maximally entangled pair shared between two distant labs.",
      "Local realism says each outcome is predetermined.",
      "Next: test-locality",
    ]],
    ["test-locality", "LHV_", "Locality Tested", [
      "$ test-locality --random-settings",
      "With space-like separated, randomly chosen settings, measured the CHSH correlation.",
      "Closing the locality + freedom-of-choice loopholes.",
      "Next: rule-out-lhv",
    ]],
    ["rule-out-lhv", "RUL3D0UT}", "Hidden Variables Ruled Out", [
      "$ rule-out-lhv",
      "S = 2.7 > 2: no local hidden-variable theory survives (2022 Nobel-winning result).",
      "The universe is genuinely nonlocal — the backbone of quantum networks.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Entangle the pair. Run: entangle-pair", "Test locality. Run: test-locality", "Rule out hidden variables. Run: rule-out-lhv", "Run 'assemble', then submit the flag"],
    { "nonlocal.txt": "settings: random, space-like separated\nCHSH classical max: 2\nmeasured S: 2.7 -> LHV excluded" },
  ),
  "quantum-x08": mkDeepCtf(
    "Qubits are fragile, so we protect them with quantum error correction. Encode a logical qubit, inject an error, read the syndrome, and correct it without measuring the data.",
    "OP: PROTECTING THE FRAGILE\nTarget: a noisy logical qubit.\nGoal: encode, inject an error, correct via syndrome.\nSequence: encode-logical -> inject-error -> correct-syndrome",
    "FLAG{QEC_",
    "Mission Brief",
    ["encode-logical", "SURF4C3_", "Logical Qubit Encoded", [
      "$ encode-logical --code surface",
      "Spread one logical qubit across many physical qubits (surface code).",
      "Redundancy without copying (no-cloning forbids copying).",
      "Next: inject-error",
    ]],
    ["inject-error", "SYNDR0M3_", "Error Injected", [
      "$ inject-error --bit-flip q7",
      "A bit-flip hits one physical qubit. Reading the data directly would destroy the state.",
      "Instead, measure stabilizers (parities).",
      "Next: correct-syndrome",
    ]],
    ["correct-syndrome", "C0RR3CT3D}", "Syndrome Corrected", [
      "$ correct-syndrome",
      "Syndrome pinpoints the flipped qubit; apply the inverse -> logical state restored, never measured.",
      "Error correction is what makes large-scale quantum computing possible.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Encode the logical qubit. Run: encode-logical", "Inject an error. Run: inject-error", "Correct the syndrome. Run: correct-syndrome", "Run 'assemble', then submit the flag"],
    { "qec.txt": "code: surface\nerror: bit-flip on q7\nstabilizer syndrome -> locate -> correct (data never read)" },
  ),
  "quantum-x09": mkDeepCtf(
    "Particles are excitations of underlying fields. Quantize a field, excite a mode to create a particle, and count the quanta — the core idea of quantum field theory.",
    "OP: FIELDS ALL THE WAY DOWN\nTarget: a quantum field.\nGoal: quantize it, excite a mode, count quanta.\nSequence: quantize-field -> excite-mode -> count-quanta",
    "FLAG{QFT_",
    "Mission Brief",
    ["quantize-field", "F13LD_", "Field Quantized", [
      "$ quantize-field",
      "Treat the field as infinitely many quantum oscillators, one per mode.",
      "The ground state is the vacuum (still buzzing with fluctuations).",
      "Next: excite-mode",
    ]],
    ["excite-mode", "3XC1T3D_", "Mode Excited", [
      "$ excite-mode --add-quantum",
      "Add one quantum of energy to a mode -> that excitation IS a particle.",
      "An electron is a ripple in the electron field; a photon in the EM field.",
      "Next: count-quanta",
    ]],
    ["count-quanta", "QU4NT4}", "Quanta Counted", [
      "$ count-quanta",
      "Counted N excitations = N particles. Fields are fundamental; particles are their quanta.",
      "QFT unifies quantum mechanics with special relativity.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Quantize the field. Run: quantize-field", "Excite a mode. Run: excite-mode", "Count the quanta. Run: count-quanta", "Run 'assemble', then submit the flag"],
    { "qft.txt": "field = many oscillators (modes)\nexcitation of a mode = a particle\nN quanta = N particles" },
  ),
  "quantum-x10": mkDeepCtf(
    "What does quantum mechanics MEAN? Run a single experiment and compare how Copenhagen and Many-Worlds explain it — then confirm they make identical predictions.",
    "OP: WHAT DOES IT MEAN\nTarget: one quantum measurement, many interpretations.\nGoal: run it, compare interpretations, note same predictions.\nSequence: run-experiment -> compare-interpretations -> note-same-predictions",
    "FLAG{1NT3RPR3T_",
    "Mission Brief",
    ["run-experiment", "S4M3_", "Experiment Run", [
      "$ run-experiment",
      "Measured a superposed qubit: outcome 0 this run, probabilities as predicted.",
      "The math is undisputed; the meaning is not.",
      "Next: compare-interpretations",
    ]],
    ["compare-interpretations", "PR3D1CT_", "Interpretations Compared", [
      "$ compare-interpretations",
      "Copenhagen: the wavefunction collapsed. Many-Worlds: both outcomes happened in branching worlds.",
      "Pilot-wave, etc., tell yet another story.",
      "Next: note-same-predictions",
    ]],
    ["note-same-predictions", "0UTC0M3}", "Predictions Identical", [
      "$ note-same-predictions",
      "All mainstream interpretations predict the SAME measurable statistics — they differ in story, not numbers.",
      "Quantum mechanics works; what it means stays open.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Run the experiment. Run: run-experiment", "Compare interpretations. Run: compare-interpretations", "Note the same predictions. Run: note-same-predictions", "Run 'assemble', then submit the flag"],
    { "interpret.txt": "Copenhagen: collapse\nMany-Worlds: branching\nPilot-wave: hidden guidance\nall: identical predictions" },
  ),
};

for (const s of quantumDeepStages) {
  const ctf = QX_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
