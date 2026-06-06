import type { StageConfig, EpochConfig, CtfConfig } from "./types";

export const physicsOfHackingEpoch: EpochConfig = {
  id: "physics-of-hacking",
  name: "The Physics of Hacking",
  subtitle: "Side Channels, Faults & Hardware Attacks",
  description:
    "Where electricity and physics become attacks. Computation is physical, so it leaks (power, electromagnetic, timing, sound, light), it lingers (memory remanence), and it can be disturbed (Rowhammer, fault injection) — and the supply chain that builds the hardware can be subverted. Each stage is a real attack class and its real defense.",
  emoji: "🧲",
  color: "pink",
  unlocked: true,
};

export const physicsOfHackingStages: StageConfig[] = [
  // ─── poh-01: Side Channels 101 ───────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "The birth of side-channel cryptanalysis", location: "San Francisco, California, USA", era: "1996 CE", emoji: "📉" },
    id: "poh-01",
    order: 1,
    title: "The Computer That Talks in Its Sleep",
    subtitle: "Side Channels 101 — Computation Leaks",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-poh-sidechannel", name: "Side-Channel Initiate", emoji: "📉" },
    challengeType: "quiz",
    info: {
      tagline: "A safe can have a flawless lock and still be cracked — by listening to the tumblers. Cryptography is the same: the math can be perfect, yet the machine running it whispers the secret through power, radiation, sound, and time.",
      year: 2024,
      overview: [
        "A side channel is any unintended physical signal a system gives off while it works — and from which a secret can be recovered. The attacker does not break the algorithm; they read the machine's body language. This is the central idea of this whole track, and it follows directly from the foundations: because computation is physical, it inevitably radiates clues.",
        "The leaks come in several physical flavors, each its own attack family:\n- Power — how much current the chip draws changes with the data it processes.\n- Electromagnetic — switching transistors emit radio waves that mirror the computation.\n- Timing — operations take different amounts of time depending on secret values.\n- Acoustic and optical — chips and components emit faint sounds and light tied to what they compute.",
        "Why side channels are so dangerous, and so often overlooked:\n- They bypass the math entirely — a provably secure cipher offers no protection if its implementation leaks.\n- They are passive and silent — the attacker often just observes, leaving no trace in any log.\n- They are everywhere — smartcards, phones, servers, IoT devices, and even air-gapped machines all have a physical body that leaks. Defending them requires thinking like a physicist, not just a coder.",
      ],
      technical: {
        title: "The Anatomy of a Side-Channel Attack",
        body: [
          "Most side-channel attacks share a common recipe:\n- Find a leak — identify a measurable physical signal (power trace, EM, timing) that depends on a secret.\n- Build a model — relate the signal to intermediate values in the computation (e.g., the power spikes when a key bit is 1).\n- Collect traces — record the signal over many operations, often with the same key but different inputs.\n- Correlate — use statistics to tease the secret out of noise, recovering it bit by bit.",
          "Two properties make them especially potent:\n- They need very little — a cheap oscilloscope, an antenna, or just a stopwatch in software can be enough; nation-state equipment is not required.\n- They scale to remote — timing side channels work over a network, and EM leaks can be picked up at a distance, so 'physical' does not always mean 'in the room'.\n- The defense mindset flips the recipe: break the link between the secret and the signal — make the leak independent of the data (constant-time, masking, shielding), which the rest of this track builds out attack by attack.",
        ],
      },
      incident: {
        title: "1996 — Paul Kocher Reads Keys From a Clock",
        when: "1996",
        where: "Independent cryptography research, USA",
        impact: "Showed that the time a cipher takes to run can reveal its secret key — founding modern side-channel cryptanalysis",
        body: [
          "Cryptographer Paul Kocher published a startling result: many implementations of public-key cryptography took slightly different amounts of time depending on the secret key's bits. By precisely measuring how long operations took across many runs, an attacker could reconstruct the key — without any mathematical weakness in the cipher.",
          "It permanently changed how security is understood:\n- It proved that a correct algorithm and a secure implementation are two different things — the gap between them is the side channel.\n- Kocher followed it in 1999 with differential power analysis, extending the idea to the chip's power draw and breaking widely-deployed smartcards.\n- The field of side-channel cryptanalysis was born, and 'constant-time' implementations — code engineered so timing reveals nothing — became a standard requirement, one this track returns to repeatedly.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Secret Computation", sub: "key-dependent operations", type: "system" },
          { label: "Physical Leak", sub: "power · EM · timing · sound", type: "attacker" },
          { label: "Measure & Correlate", sub: "statistics pull out the key", type: "victim" },
          { label: "Secret Recovered", sub: "math never broken", type: "result" },
        ],
      },
      timeline: [
        { year: 1985, event: "Van Eck shows screens can be read remotely via EM — early public side channel" },
        { year: 1996, event: "Kocher's timing attacks found modern side-channel cryptanalysis", highlight: true },
        { year: 1999, event: "Differential power analysis breaks smartcards" },
        { year: 2018, event: "Spectre/Meltdown bring side channels into mainstream CPUs" },
      ],
      keyTakeaways: [
        "A side channel is an unintended physical signal (power, EM, timing, sound, light) that leaks a secret",
        "Attackers read the machine's 'body language' rather than breaking the algorithm itself",
        "They are passive, often cheap, and sometimes remote — and provably-secure math doesn't stop them",
        "The defense is to break the link between secret and signal (constant-time, masking, shielding)",
      ],
      references: [
        { title: "Paul Kocher — Timing Attacks (1996 paper)", url: "https://www.paulkocher.com/doc/TimingAttacks.pdf" },
        { title: "Introduction to side-channel attacks (explainer)", url: "https://www.rambus.com/blogs/side-channel-attacks/" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-01-q1", type: "Core Idea", challenge: "What it is.", text: "What is a side-channel attack?", options: ["Recovering a secret from unintended physical signals, not by breaking the algorithm", "Guessing the password repeatedly", "Sending phishing emails", "Flooding a server with traffic"], correctIndex: 0, explanation: "Side channels read the machine's physical 'body language' — power, EM, timing — to extract secrets." },
        { id: "poh-01-q2", type: "Leaks", challenge: "Physical flavors.", text: "Which is a common side-channel signal?", options: ["The amount of power the chip draws while computing", "The font on the screen", "The Wi-Fi password length", "The file name"], correctIndex: 0, explanation: "Power, electromagnetic emissions, timing, sound, and light are all exploitable side channels." },
        { id: "poh-01-q3", type: "Danger", challenge: "Why scary.", text: "Why are side channels especially dangerous?", options: ["They bypass the math entirely and are often passive, cheap, and sometimes remote", "They are loud and obvious", "They only work on broken algorithms", "They require nation-state budgets"], correctIndex: 0, explanation: "Even provably-secure crypto leaks through its implementation; observation often leaves no trace." },
        { id: "poh-01-q4", type: "Recipe", challenge: "How it works.", text: "What's a typical side-channel attack step after finding a leak?", options: ["Collect many traces and correlate them statistically to recover the secret", "Reboot the server", "Ask the user nicely", "Delete the algorithm"], correctIndex: 0, explanation: "Attackers model the leak, gather traces, and use statistics to pull the key out of noise." },
        { id: "poh-01-q5", type: "Defense", challenge: "Breaking the link.", text: "What's the core defensive idea against side channels?", options: ["Make the physical signal independent of the secret (constant-time, masking, shielding)", "Use a longer password", "Add more logging", "Run the code twice"], correctIndex: 0, explanation: "If the leak no longer depends on the secret, there's nothing to correlate." },
        { id: "poh-01-q6", type: "History", challenge: "The founder.", text: "What did Paul Kocher show in 1996?", options: ["A cipher's run time can reveal its secret key (timing attack)", "That RSA math is broken", "How to build a firewall", "That passwords are unnecessary"], correctIndex: 0, explanation: "Timing attacks proved a correct algorithm and a secure implementation are different things." },
      ],
    },
  },

  // ─── poh-02: Power Analysis ──────────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Cryptography Research — power analysis lab", location: "San Francisco, California, USA", era: "1999 CE", emoji: "🔋" },
    id: "poh-02",
    order: 2,
    title: "Reading Secrets in the Power Bill",
    subtitle: "Power Analysis — SPA & DPA",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-poh-power", name: "Power Trace Analyst", emoji: "🔋" },
    challengeType: "quiz",
    info: {
      tagline: "Every time a chip flips a transistor, it sips a measurable amount of power. Record that sip precisely enough and the pattern of sips spells out the secret key — even one buried in tamper-proof hardware.",
      year: 2024,
      overview: [
        "Power analysis is the classic side channel: watch how much electricity a chip draws over time and infer what it is doing. It works because switching a transistor from 0 to 1 (or back) costs a tiny, measurable amount of current. The shape of a chip's power consumption is a fingerprint of the exact operations — and operands — inside it.",
        "There are two levels of the attack, increasing in power:\n- Simple Power Analysis (SPA) — read the secret almost directly from a single (or few) power traces, when different operations look visibly different. A classic example: an RSA exponentiation where a key bit of 1 triggers an extra multiply, showing as an extra bump.\n- Differential Power Analysis (DPA) — far stronger: collect thousands of traces and use statistics to extract a key even when the leak is tiny and buried in noise, with no need to see the operations clearly.",
        "Power analysis is devastating precisely where security matters most:\n- It broke smartcards, pay-TV cards, and SIM cards — devices designed specifically to protect keys.\n- The attacker needs only physical access and a cheap measurement setup (a resistor and an oscilloscope), not the chip's design.\n- It proved that putting a key in 'secure hardware' is not enough; the hardware must also be engineered so its power draw does not depend on the secret.",
      ],
      technical: {
        title: "From Power Traces to Keys",
        body: [
          "DPA is a beautiful, dangerous piece of statistics:\n- The attacker guesses a small piece of the key (say one byte) and predicts an intermediate value in the computation for each input.\n- That prediction implies how power should behave (e.g., more 1-bits → slightly higher draw — the 'Hamming weight' model).\n- They split the real traces into groups by the prediction and look for a statistical difference; the correct key guess produces a clear spike, wrong guesses don't.\n- Repeat per key chunk and the whole key falls — even drowned in noise, because averaging thousands of traces cancels the randomness.",
          "Defenses attack the link between data and power:\n- Masking — randomize the intermediate values with fresh random numbers each run, so the power leak no longer correlates with the real secret (you compute on disguised data, then unmask the result).\n- Hiding — flatten the leak by adding noise, randomizing timing, or balancing circuits so 0s and 1s cost the same power.\n- Defense-in-depth — combine masking and hiding, add a leakage budget, and test with real trace collection, because power analysis is the benchmark every secure chip must survive.",
        ],
      },
      incident: {
        title: "1999 — DPA Breaks the Smartcard Industry",
        when: "1999",
        where: "Cryptography Research, USA",
        impact: "Paul Kocher, Joshua Jaffe, and Benjamin Jun's differential power analysis broke widely-deployed secure chips, forcing an industry-wide redesign",
        body: [
          "When Kocher's team published differential power analysis, it landed like a bombshell on the smartcard world. Banking cards, pay-TV access cards, and other 'secure' chips had been built on the assumption that an embedded key was safe from anyone holding the card. DPA shattered that assumption with cheap equipment and clever statistics.",
          "The fallout reshaped how secure hardware is built and sold:\n- Chip vendors had to add masking and hiding countermeasures, and a whole industry of side-channel evaluation and certification (Common Criteria, EMVCo, FIPS 140 physical testing) grew up to test them.\n- Cryptography Research's countermeasure patents became foundational to the smartcard and payment industries.\n- The lasting lesson: 'the key never leaves the chip' is meaningless if the chip's power consumption narrates what it is doing with that key.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Chip Uses the Key", sub: "transistors switch", type: "system" },
          { label: "Power Trace", sub: "current sipped over time", type: "attacker" },
          { label: "SPA / DPA Statistics", sub: "correlate guesses to traces", type: "victim" },
          { label: "Masking + Hiding", sub: "decouple power from data", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "Power-analysis techniques first circulated in the research community" },
        { year: 1999, event: "Kocher, Jaffe & Jun publish Differential Power Analysis", highlight: true },
        { year: 2001, event: "Masking and hiding countermeasures become standard in secure chips" },
        { year: 2011, event: "Open tools (later ChipWhisperer) make power analysis accessible to all" },
      ],
      keyTakeaways: [
        "Power analysis infers secrets from how much current a chip draws — switching transistors costs measurable power",
        "SPA reads the key from few traces; DPA uses statistics over thousands to extract tiny, noisy leaks",
        "It broke smartcards, SIMs, and pay-TV cards with cheap gear — 'secure hardware' alone isn't enough",
        "Defenses: masking (randomize intermediates) and hiding (balance/noise) to decouple power from the secret",
      ],
      references: [
        { title: "Differential Power Analysis — Kocher, Jaffe, Jun (1999)", url: "https://www.paulkocher.com/doc/DifferentialPowerAnalysis.pdf" },
        { title: "ChipWhisperer — open side-channel analysis platform", url: "https://www.newae.com/chipwhisperer" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-02-q1", type: "Core Idea", challenge: "Why power leaks.", text: "Why does a chip's power consumption reveal what it's doing?", options: ["Switching transistors draws measurable current that depends on the data", "Power is random and unrelated to data", "Chips broadcast their data over Wi-Fi", "The power cable stores the key"], correctIndex: 0, explanation: "Each 0→1 or 1→0 transition costs current, so the power trace fingerprints the operations and operands." },
        { id: "poh-02-q2", type: "SPA", challenge: "Reading it directly.", text: "What is Simple Power Analysis (SPA)?", options: ["Reading the secret from one or few traces when operations look visibly different", "Sending power surges to fry the chip", "Charging the device faster", "Measuring the battery percentage"], correctIndex: 0, explanation: "SPA exploits visibly different power shapes — e.g., an extra multiply for a key bit of 1." },
        { id: "poh-02-q3", type: "DPA", challenge: "Beating the noise.", text: "How does Differential Power Analysis (DPA) extract a tiny, noisy leak?", options: ["Statistics over thousands of traces — averaging cancels noise and reveals the key", "By guessing once", "By overheating the chip", "It can't work with noise"], correctIndex: 0, explanation: "Correct key guesses produce a statistical spike across many traces; wrong guesses don't." },
        { id: "poh-02-q4", type: "Impact", challenge: "What it broke.", text: "Which devices did DPA famously break in 1999?", options: ["Smartcards, SIMs, and pay-TV cards — chips built to protect keys", "Light bulbs", "Printers", "Keyboards"], correctIndex: 0, explanation: "DPA shattered the assumption that an embedded key was safe in tamper-resistant hardware." },
        { id: "poh-02-q5", type: "Defense", challenge: "Masking.", text: "What does 'masking' do as a countermeasure?", options: ["Randomizes intermediate values so the power leak no longer correlates with the secret", "Covers the chip in tape", "Encrypts the screen", "Adds a password"], correctIndex: 0, explanation: "Computing on randomly-disguised data decouples power consumption from the real secret." },
        { id: "poh-02-q6", type: "Lesson", challenge: "The takeaway.", text: "What did power analysis teach about 'the key never leaves the chip'?", options: ["It's meaningless if the chip's power draw narrates what it does with the key", "It guarantees safety", "It only applies to software", "It makes chips faster"], correctIndex: 0, explanation: "Hardware must be engineered so power consumption doesn't depend on the secret." },
      ],
    },
  },

  // ─── poh-03: EM / TEMPEST ────────────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "TEMPEST — the secret history of EM eavesdropping", location: "Fort Meade, Maryland, USA", era: "1985 CE", emoji: "📡" },
    id: "poh-03",
    order: 3,
    title: "Eavesdropping on the Air",
    subtitle: "Electromagnetic Emanations & TEMPEST",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-poh-em", name: "EM Eavesdropper", emoji: "📡" },
    challengeType: "quiz",
    info: {
      tagline: "Every wire carrying a changing current is a tiny radio antenna. Computers are full of them — so without ever touching the machine, an attacker across the street can sometimes rebuild what is on your screen or the key in your chip.",
      year: 2024,
      overview: [
        "Electromagnetic (EM) side channels exploit a basic law of physics: changing electric currents create radio waves. Every switching transistor, every cable, every display is broadcasting faint signals that mirror the computation. With the right antenna and processing, those emanations can be captured and decoded from a distance — no physical contact required.",
        "EM attacks come in two broad styles:\n- Eavesdropping on data — reconstructing information directly, like rebuilding a monitor's image from the radio noise its cable and display emit ('Van Eck phreaking').\n- Cryptographic EM analysis — like power analysis but with an antenna: capture the EM field near a chip and apply the same statistics to extract keys, often with finer spatial focus than power.",
        "This threat has been taken seriously at the highest levels for decades:\n- 'TEMPEST' is the NSA codename for the study of, and protection against, compromising emanations — a program once highly classified.\n- It drives real-world rules: 'red/black' separation (keeping secret-carrying wires away from ones that exit a secure area), shielded rooms, and zoning standards for sensitive facilities.\n- Because EM can be picked up remotely and passively, it is a favorite for espionage against air-gapped and high-value systems.",
      ],
      technical: {
        title: "How Emanations Leak — and How to Contain Them",
        body: [
          "The physics gives attackers several handles:\n- Radiated emissions — currents in cables, buses, and clock lines emit at characteristic frequencies that correlate with data being moved or computed.\n- Conducted emissions — signals couple onto power lines and ground, and can travel surprising distances along them.\n- Display leakage — a screen's pixel clock and video signal radiate a recoverable image; even modern digital (HDMI) displays leak exploitable patterns.\n- Proximity helps but isn't required — sensitive receivers and signal processing extend the range, and getting an antenna closer (a nearby room, a planted device) dramatically improves it.",
          "Containment is an engineering and facilities discipline:\n- Shielding — Faraday cages, shielded enclosures, and filtered cables keep emissions inside; TEMPEST-certified equipment is built to strict emission limits.\n- Separation and zoning — red/black architecture and physical distance reduce what crosses a secure boundary.\n- Signal-level defenses — masking and randomization at the chip level (as with power) reduce EM cryptographic leaks; reducing and balancing switching activity lowers the emitted signal.\n- The mindset: treat your equipment as a transmitter you did not intend to build, and decide how far its signal is allowed to travel.",
        ],
      },
      incident: {
        title: "1985 — Van Eck Phreaking Goes Public",
        when: "1985",
        where: "Netherlands",
        impact: "Wim van Eck publicly demonstrated reconstructing a computer monitor's image from its electromagnetic emissions with inexpensive equipment",
        body: [
          "Dutch researcher Wim van Eck published a paper and demonstration showing that the EM radiation from a CRT computer monitor could be picked up at a distance and reassembled into a readable copy of the screen — using equipment costing little more than a modified TV set. The technique became known as 'Van Eck phreaking'.",
          "Its public disclosure was a watershed:\n- It revealed to the world what intelligence agencies had guarded for decades under TEMPEST — that displays and electronics broadcast their contents.\n- It forced governments and companies to take emanation security seriously beyond classified circles, and inspired both attacks and shielding standards.\n- Modern research has extended it to flat-panel and even digital displays, keyboards, and processors — proving the underlying physics never went away, only the assumption that you must touch a device to spy on it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Changing Currents", sub: "transistors, cables, displays", type: "system" },
          { label: "Radio Emanations", sub: "EM waves mirror the data", type: "attacker" },
          { label: "Antenna + Processing", sub: "decode image or key remotely", type: "victim" },
          { label: "Shielding + Zoning", sub: "Faraday, red/black, TEMPEST", type: "result" },
        ],
      },
      timeline: [
        { year: 1943, event: "Wartime engineers notice classified teletypes leaking via emanations (early TEMPEST)" },
        { year: 1985, event: "Van Eck publicly demonstrates reconstructing a monitor from EM", highlight: true },
        { year: 2004, event: "TEMPEST-style attacks extended to keyboards and modern displays" },
        { year: 2015, event: "EM cryptographic attacks extract keys from phones and laptops at short range" },
      ],
      keyTakeaways: [
        "Changing currents radiate EM waves, so computers broadcast faint signals mirroring their computation",
        "Attacks range from reconstructing a screen remotely (Van Eck) to extracting keys with a nearby antenna",
        "TEMPEST is the long-classified discipline of compromising emanations and protecting against them",
        "Containment is shielding (Faraday), separation/zoning (red/black), and chip-level masking",
      ],
      references: [
        { title: "Van Eck phreaking — original 1985 demonstration", url: "https://en.wikipedia.org/wiki/Van_Eck_phreaking" },
        { title: "TEMPEST and emanation security — overview", url: "https://en.wikipedia.org/wiki/Tempest_(codename)" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-03-q1", type: "Core Idea", challenge: "Why it radiates.", text: "Why do computers emit electromagnetic side-channel signals?", options: ["Changing electric currents create radio waves that mirror the computation", "They have built-in Wi-Fi transmitters for hacking", "Screens are radioactive", "Software broadcasts data on purpose"], correctIndex: 0, explanation: "Basic physics: switching currents in transistors, cables, and displays radiate EM that correlates with data." },
        { id: "poh-03-q2", type: "Van Eck", challenge: "Reading the screen.", text: "What is 'Van Eck phreaking'?", options: ["Reconstructing a monitor's image from its EM emissions at a distance", "Cracking Wi-Fi passwords", "Overheating a CPU", "A phishing technique"], correctIndex: 0, explanation: "Van Eck showed in 1985 you can rebuild a display remotely from its radiation, no contact needed." },
        { id: "poh-03-q3", type: "Crypto EM", challenge: "Power's cousin.", text: "How is EM analysis like power analysis?", options: ["Capture the EM field near a chip and apply the same statistics to extract keys", "It guesses passwords", "It only reads screens", "It requires breaking the cipher math"], correctIndex: 0, explanation: "EM is power analysis with an antenna — often with finer spatial focus on the chip." },
        { id: "poh-03-q4", type: "TEMPEST", challenge: "The codename.", text: "What is TEMPEST?", options: ["The (long-classified) study of compromising emanations and protecting against them", "A weather-prediction system", "A type of firewall", "An encryption algorithm"], correctIndex: 0, explanation: "TEMPEST is the NSA program around EM emanation security — shielding, zoning, certified gear." },
        { id: "poh-03-q5", type: "Defense", challenge: "Containing the signal.", text: "Which is a real EM-emanation defense?", options: ["Faraday shielding plus red/black separation and zoning", "Using a longer password", "Turning the brightness down", "Renaming files"], correctIndex: 0, explanation: "Shielding contains emissions; red/black separation keeps secret-carrying wires away from exits." },
        { id: "poh-03-q6", type: "Reach", challenge: "Touchless threat.", text: "Why is EM eavesdropping favored against high-value/air-gapped systems?", options: ["It can be passive and remote — no physical contact with the target needed", "It requires plugging in a USB", "It only works over the internet", "It needs the target's password"], correctIndex: 0, explanation: "EM can be captured from a distance without touching the machine, ideal for espionage." },
      ],
    },
  },

  // ─── poh-04: Timing Attacks ──────────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Constant-time cryptography research", location: "Internet-wide", era: "Present Day", emoji: "⏱️" },
    id: "poh-04",
    order: 4,
    title: "Death by Stopwatch",
    subtitle: "Timing Attacks & Constant-Time Code",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-poh-timing", name: "Timing Sleuth", emoji: "⏱️" },
    challengeType: "quiz",
    info: {
      tagline: "Sometimes the only tool an attacker needs is a clock. If your code takes a hair longer when a guess is closer to the secret, enough careful measurements will reconstruct that secret — even over the internet.",
      year: 2024,
      overview: [
        "A timing attack recovers secrets from how long operations take. The principle is simple: if execution time depends on secret data — because of an early exit, a branch, a table lookup, or a cache hit — then measuring time leaks that data. Unlike power or EM, timing often needs no special hardware at all; software measurement, sometimes across a network, is enough.",
        "Several common coding patterns secretly leak through timing:\n- Early-exit comparisons — a password or signature check that returns the moment it finds a mismatch reveals how many leading characters were correct.\n- Secret-dependent branches — taking a different code path for a key bit of 1 vs 0 changes the time.\n- Table lookups indexed by secrets — whether the needed data is already in fast cache or must be fetched from slow memory leaks the index (a cache-timing attack).\n- Variable-time math — big-number operations whose duration depends on the values, classic in naive RSA and recently in PQC (the KyberSlash bug).",
        "Timing attacks are uniquely accessible and far-reaching:\n- They can be remote — measuring a server's response time over the network can extract keys, as real attacks on TLS have shown.\n- They power some of the biggest CPU vulnerabilities — Spectre and Meltdown ultimately read secrets through cache-timing differences.\n- And they are the reason serious cryptographic code is written to be 'constant-time' — engineered so its duration is independent of any secret, which the quantum-safe track also stressed.",
      ],
      technical: {
        title: "Constant-Time Engineering",
        body: [
          "Writing constant-time code means removing every secret-dependent timing difference:\n- No secret-dependent branches — replace `if (secret) ...` with arithmetic that does the same work either way (branchless selection).\n- No secret-dependent memory access — avoid indexing tables with secret values; access patterns must not depend on the key (defeats cache-timing).\n- Compare in full — check a MAC or password by examining every byte and combining the result, never returning early on the first mismatch.\n- Beware the compiler — optimizers can reintroduce branches or 'helpfully' remove constant-time tricks, so verification (and tools like dudect, ct-verif) is essential.",
          "Defenses beyond the code itself:\n- Add noise or blinding — randomize the secret before an operation (RSA blinding) so timing no longer maps to the real key; useful where full constant-time is hard.\n- Architectural mitigations — for cache and speculative-execution timing, vendors add isolation, flushing, and partitioning, but these have performance costs.\n- The principle endures across this track: any observable that depends on a secret is a leak, and time is the cheapest observable of all — so make it constant, or make it meaningless.",
        ],
      },
      incident: {
        title: "Lucky Thirteen and the TLS Timing Saga",
        when: "2013",
        where: "TLS/SSL implementations worldwide",
        impact: "A timing attack on the way TLS handled padding let attackers recover plaintext, forcing widespread library rewrites",
        body: [
          "The 'Lucky Thirteen' attack (2013) exploited tiny timing differences in how TLS implementations processed message padding when decrypting. By measuring response times across many crafted messages, attackers could recover bits of encrypted plaintext — a remote timing attack against the protocol securing the web.",
          "It was one of a long line of timing breaks that reshaped crypto engineering:\n- It followed earlier remote-timing attacks on TLS (Brumley–Boneh, 2003) and preceded many more, each showing that 'compare and branch' on secret data is dangerous even over a network.\n- Libraries responded by rewriting padding checks and core routines to be constant-time, and the practice became mandatory in serious cryptographic code.\n- The 2024 KyberSlash bug — a secret-dependent division in post-quantum ML-KEM implementations — shows the very same lesson recurring with the newest algorithms: timing must reveal nothing.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Secret-Dependent Time", sub: "early exit, branch, cache", type: "system" },
          { label: "Measure Durations", sub: "even over a network", type: "attacker" },
          { label: "Correlate to Secret", sub: "reconstruct key/plaintext", type: "victim" },
          { label: "Constant-Time Code", sub: "duration independent of secret", type: "result" },
        ],
      },
      timeline: [
        { year: 1996, event: "Kocher introduces timing attacks on cryptographic implementations" },
        { year: 2003, event: "Brumley–Boneh: remote timing attacks are practical against TLS servers" },
        { year: 2013, event: "Lucky Thirteen recovers TLS plaintext via padding timing", highlight: true },
        { year: 2024, event: "KyberSlash: a timing leak resurfaces in post-quantum ML-KEM code" },
      ],
      keyTakeaways: [
        "Timing attacks recover secrets from how long operations take — often needing only a clock, sometimes remotely",
        "Leaky patterns: early-exit compares, secret-dependent branches, secret-indexed table lookups, variable-time math",
        "They power remote TLS attacks and underpin Spectre/Meltdown's cache-timing leaks",
        "Defense is constant-time code (no secret-dependent branches/accesses) plus blinding — and verifying the compiler kept it",
      ],
      references: [
        { title: "Lucky Thirteen attack on TLS (2013)", url: "https://www.isg.rhul.ac.uk/tls/Lucky13.html" },
        { title: "A guide to constant-time cryptography", url: "https://www.bearssl.org/constanttime.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-04-q1", type: "Core Idea", challenge: "The clock as a weapon.", text: "What does a timing attack exploit?", options: ["Execution time that depends on secret data", "The system clock being wrong", "Slow internet", "The screen refresh rate"], correctIndex: 0, explanation: "If operations take longer based on secret values, measuring time leaks the secret." },
        { id: "poh-04-q2", type: "Leaky Pattern", challenge: "A classic mistake.", text: "Why is an early-exit password/signature comparison dangerous?", options: ["It returns as soon as it finds a mismatch, revealing how many leading characters were correct", "It uses too much memory", "It is too slow overall", "It encrypts twice"], correctIndex: 0, explanation: "Returning early leaks the position of the first wrong byte through timing." },
        { id: "poh-04-q3", type: "Cache Timing", challenge: "Fast vs slow memory.", text: "How does a cache-timing attack leak a secret table index?", options: ["Whether the needed data is in fast cache or slow memory reveals the index", "By reading the disk LED", "By measuring CPU temperature only", "It can't leak indices"], correctIndex: 0, explanation: "A cache hit (fast) vs miss (slow) depends on the secret-derived address — leaking it." },
        { id: "poh-04-q4", type: "Reach", challenge: "From afar.", text: "Why are timing attacks especially concerning?", options: ["They often need no special hardware and can work remotely over a network", "They require opening the device", "They only affect printers", "They need the user's password first"], correctIndex: 0, explanation: "Measuring a server's response time can extract keys — as real TLS attacks proved." },
        { id: "poh-04-q5", type: "Defense", challenge: "Make it flat.", text: "What is 'constant-time' code?", options: ["Code engineered so its duration is independent of any secret value", "Code that runs in zero time", "Code with no loops", "Code that always takes one second"], correctIndex: 0, explanation: "No secret-dependent branches or memory accesses, so timing reveals nothing." },
        { id: "poh-04-q6", type: "Recurring", challenge: "Old lesson, new algorithm.", text: "What does the 2024 KyberSlash bug show?", options: ["Even new post-quantum (ML-KEM) code can leak via secret-dependent timing", "Timing attacks are obsolete", "ML-KEM math is broken", "Constant-time is unnecessary now"], correctIndex: 0, explanation: "A secret-dependent division leaked keys — the same constant-time lesson, newest algorithms." },
      ],
    },
  },

  // ─── poh-05: Acoustic & Optical ──────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Acoustic and optical emanation research", location: "Tel Aviv / Weizmann Institute", era: "2014 CE", emoji: "🔊" },
    id: "poh-05",
    order: 5,
    title: "Hearing and Seeing Secrets",
    subtitle: "Acoustic & Optical Side Channels",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-poh-acoustic", name: "Emanation Listener", emoji: "🔊" },
    challengeType: "quiz",
    info: {
      tagline: "A laptop computing an encryption key faintly sings; a keyboard clicks a confession; a power LED flickers in time with the secret; a hard-drive light blinks data across a room. Computers leak through sound and light, not just power and radio.",
      year: 2024,
      overview: [
        "Beyond power and EM, computation leaks through two more everyday physical channels: sound and light. The vibrations and faint emissions of electronic components — and the things they control — carry surprising amounts of information. These channels are vivid proof that 'side channel' is a way of thinking, not a fixed list: anything physical that depends on the secret is fair game.",
        "Acoustic side channels turn microphones into spies:\n- CPU and power-circuit 'coil whine' — chips emit ultrasonic sounds whose pitch changes with the operation, enough to extract RSA keys from a laptop with a nearby microphone (or even a phone).\n- Keyboard acoustics — each key makes a slightly different sound, so a recording of typing can reconstruct what was typed, including passwords.\n- Printers and other mechanics — even dot-matrix printers have been shown to leak printed text through their sound.",
        "Optical side channels turn cameras and sensors into eyes:\n- Status LEDs — a power or activity LED can flicker in step with internal data, leaking it to anyone with a line of sight or a light sensor.\n- Screen and reflection leakage — images recovered from reflections in eyes, windows, or glossy objects, or from a screen's subtle glow on a wall.\n- Vibration-to-sound — pointing a laser or camera at a light bulb or object near a conversation can recover the sound from tiny vibrations ('Lamphone'-style attacks).",
      ],
      technical: {
        title: "Sound, Light, and the Air Gap",
        body: [
          "These channels are powerful for a specific reason — they cross the air gap:\n- An 'air-gapped' machine (physically disconnected from networks) is supposed to be unreachable, but sound and light are not stopped by the lack of a cable.\n- Researchers have repeatedly shown air-gap exfiltration: malware modulating fan speed, drive activity, LED blinking, or speaker ultrasound to smuggle data to a nearby microphone, camera, or sensor.\n- The data rates are low, but for stealing a key or a password, low is plenty.",
          "Defending sound and light is its own discipline:\n- Physical controls — no microphones/cameras/windows with line of sight in sensitive areas; cover or remove status LEDs; acoustic dampening; frosted glass.\n- Signal-level controls — the same masking and balancing that defeat power leaks reduce acoustic/optical correlation; randomizing operations flattens the 'tune'.\n- Policy — air-gapped does not mean safe; threat models for high-assurance environments must include sound, light, vibration, and any other physical emission a clever adversary could measure.",
        ],
      },
      incident: {
        title: "2014 — Extracting an RSA Key by Listening to a Laptop",
        when: "2014",
        where: "Tel Aviv University / Weizmann Institute, Israel",
        impact: "Genkin, Shamir, and Tromer recovered a full RSA decryption key from the faint sounds a laptop made while decrypting",
        body: [
          "In a landmark demonstration, Daniel Genkin, Adi Shamir, and Eran Tromer showed 'acoustic cryptanalysis': by recording the high-pitched sounds a laptop's power electronics emit while it decrypts, they extracted a full 4096-bit RSA key. The microphone could be a parabolic mic meters away — or, in a later version, a plain smartphone placed next to the laptop.",
          "It was a jaw-dropping proof of the side-channel mindset:\n- The leak came not from the CPU's logic but from tiny vibrations in capacitors and coils as the chip's power draw changed with the secret computation.\n- The same researchers extended the work to EM and even 'touch' (measuring a laptop's chassis potential), showing the secret leaks through whatever physical channel you care to measure.\n- The defense — the software was updated to use blinding/constant-time techniques so the sounds no longer tracked the key — is the recurring lesson: break the link between the secret and any physical signal.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Secret Computation", sub: "coils vibrate, LEDs flicker", type: "system" },
          { label: "Sound / Light Emission", sub: "ultrasonic whine, blinking", type: "attacker" },
          { label: "Mic / Camera / Sensor", sub: "captures across the air gap", type: "victim" },
          { label: "Physical + Signal Defenses", sub: "cover LEDs, dampen, blind", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "Keyboard acoustic emanations shown to reveal typed text" },
        { year: 2014, event: "Acoustic cryptanalysis extracts an RSA key from a laptop's sound", highlight: true },
        { year: 2016, event: "Air-gap exfiltration via LEDs, fans, and drive noise demonstrated" },
        { year: 2020, event: "'Lamphone' recovers speech from a light bulb's tiny vibrations" },
      ],
      keyTakeaways: [
        "Computation leaks through sound (coil whine, key clicks) and light (LEDs, reflections, glow), not just power/EM",
        "Acoustic cryptanalysis extracted a full RSA key from a laptop's faint sounds with a nearby microphone",
        "Sound and light cross the air gap — air-gapped machines can still leak to a mic, camera, or sensor",
        "Defenses combine physical controls (cover LEDs, no line of sight, dampening) with signal-level masking/blinding",
      ],
      references: [
        { title: "Acoustic cryptanalysis — Genkin, Shamir, Tromer (2014)", url: "https://www.cs.tau.ac.il/~tromer/acoustic/" },
        { title: "Air-gap covert channels — research overview", url: "https://www.covertchannels.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-05-q1", type: "Core Idea", challenge: "More channels.", text: "Beyond power and EM, what other physical signals leak computation?", options: ["Sound and light (acoustic and optical side channels)", "Only the internet connection", "Nothing else leaks", "Just the keyboard layout"], correctIndex: 0, explanation: "Vibrations (sound) and emissions/flicker (light) carry secret-dependent information too." },
        { id: "poh-05-q2", type: "Acoustic", challenge: "A singing laptop.", text: "How did researchers extract an RSA key acoustically?", options: ["By recording the faint ultrasonic sounds the laptop's power electronics made while decrypting", "By listening to the fan only", "By reading the screen aloud", "By tapping the keyboard"], correctIndex: 0, explanation: "Coil/capacitor vibrations tracked the secret computation; a nearby mic recovered the key." },
        { id: "poh-05-q3", type: "Keyboard", challenge: "Typing tells.", text: "Why can a recording of typing reveal passwords?", options: ["Each key makes a slightly different sound, so the audio can reconstruct keystrokes", "Keyboards transmit text over radio", "The mic reads the screen", "It can't — typing is silent"], correctIndex: 0, explanation: "Acoustic differences between keys let attackers reconstruct what was typed." },
        { id: "poh-05-q4", type: "Optical", challenge: "Blinking secrets.", text: "How can a status LED leak data?", options: ["It can flicker in step with internal data, visible to a camera or light sensor", "LEDs store passwords", "It changes color to show the key", "LEDs can't leak anything"], correctIndex: 0, explanation: "Activity/power LEDs driven by internal signals can blink out data to a line-of-sight sensor." },
        { id: "poh-05-q5", type: "Air Gap", challenge: "No cable, still leaks.", text: "Why are sound/light dangerous for air-gapped machines?", options: ["They cross the air gap — a disconnected machine can still emit to a mic/camera/sensor", "Air-gapped machines have no power", "Sound and light need a network cable", "Air gaps block all physics"], correctIndex: 0, explanation: "Physical disconnection doesn't stop sound or light, enabling air-gap exfiltration." },
        { id: "poh-05-q6", type: "Defense", challenge: "Two layers.", text: "How do you defend against acoustic/optical leaks?", options: ["Physical controls (cover LEDs, no line of sight, dampening) plus signal-level masking/blinding", "A longer password", "More RAM", "Faster internet"], correctIndex: 0, explanation: "Combine removing the physical observation paths with breaking the secret-to-signal link." },
      ],
    },
  },

  // ─── poh-06: Rowhammer ───────────────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Google Project Zero — Rowhammer research", location: "Mountain View, California, USA", era: "2015 CE", emoji: "🔨" },
    id: "poh-06",
    order: 6,
    title: "Hammering the Memory",
    subtitle: "Rowhammer — Flipping Bits with Electricity",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-poh-rowhammer", name: "Bit-Flip Breaker", emoji: "🔨" },
    challengeType: "quiz",
    info: {
      tagline: "Modern memory is packed so tightly that hammering one row of cells electrically disturbs its neighbors — flipping their bits. With no bug in any code, an attacker can rewrite memory they were never allowed to touch.",
      year: 2024,
      overview: [
        "Rowhammer is a hardware reliability flaw turned into an attack. DRAM stores each bit as a charge in a microscopic capacitor, and the cells are crammed so close together that rapidly, repeatedly accessing one row ('hammering' it) can leak charge from neighboring rows and flip their bits. The attacker changes data they have no software permission to modify — by exploiting physics, not a coding error.",
        "What makes Rowhammer so striking:\n- It is a fault in the hardware itself — no software vulnerability is required, so it sidesteps the entire software-security stack.\n- A single flipped bit, in the right place, can be catastrophic: flipping a bit in a page-table entry or a permission flag can hand an attacker control of memory or escalate privileges.\n- It is triggered by ordinary memory reads, so even sandboxed or unprivileged code — including, in some cases, JavaScript in a web browser — can attempt it.",
        "The attack has evolved through a cat-and-mouse with defenses:\n- Early Rowhammer hammered rows adjacent to a target; defenses (Target Row Refresh) tried to detect and refresh victim rows.\n- Researchers responded with 'many-sided' hammering, 'half-double', and other patterns that slip past mitigations, plus tricks to bypass error-correcting memory (ECC).\n- It has been demonstrated for privilege escalation on PCs and servers, on mobile (the 'Drammer' attack on Android), and from the browser — making it one of the most important hardware-security stories of the last decade.",
      ],
      technical: {
        title: "Why DRAM Flips, and How to Stop It",
        body: [
          "The physics is a direct consequence of miniaturization:\n- Shrinking DRAM packs cells so densely that the electrical activity of accessing one row capacitively couples to adjacent rows, accelerating their charge leakage.\n- DRAM is refreshed periodically to top up charge, but if hammering drains a neighbor faster than the refresh interval, a bit flips before it can be restored.\n- The attacker's job is to find 'flippable' bits and arrange for security-critical data (page tables, keys, permission bits) to land on them — using memory-massaging techniques to control the layout.",
          "Defenses operate at several levels, none perfectly:\n- In-DRAM mitigations — Target Row Refresh (TRR) refreshes likely victims; newer DDR5 adds improved schemes, but research keeps finding bypasses.\n- Error-correcting code (ECC) memory — catches and corrects single-bit flips, raising the bar, though multi-flip attacks can defeat it.\n- System-level — increasing refresh rates, isolating sensitive data, and avoiding placing security-critical structures where they can be targeted.\n- The deeper lesson: as we push hardware to physical limits, reliability margins shrink, and an attacker who understands the physics can weaponize the resulting fragility.",
        ],
      },
      incident: {
        title: "2015 — Google Project Zero Weaponizes Rowhammer",
        when: "March 2015",
        where: "Google Project Zero",
        impact: "Turned a known DRAM reliability quirk into a working privilege-escalation exploit, proving physics could be a software-free attack",
        body: [
          "Academic researchers (Kim et al., 2014) first documented that hammering DRAM rows could flip bits. Months later, Google's Project Zero showed it was not just a reliability curiosity but a security weapon: they built exploits that used Rowhammer bit-flips to escape a sandbox and gain kernel privileges on real machines.",
          "It reframed hardware reliability as a security problem:\n- For the first time, a mainstream attack required no software bug at all — only the ability to read memory rapidly in the right pattern.\n- It spawned a decade of follow-on work (Drammer on Android, browser-based Rowhammer, ECC bypasses, and TRR bypasses), each defeating the latest mitigation.\n- The story is the clearest modern example of this track's theme: when hardware is pushed to its physical limits, its imperfections become exploitable, and defending it requires understanding the device as a physical object, not just its logic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Hammer One Row", sub: "rapid repeated DRAM access", type: "attacker" },
          { label: "Charge Leaks to Neighbors", sub: "cells too densely packed", type: "system" },
          { label: "Bit Flips in Victim Row", sub: "no software bug needed", type: "victim" },
          { label: "Privilege Escalation", sub: "flip a permission/page-table bit", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Kim et al. document Rowhammer bit-flips in DRAM" },
        { year: 2015, event: "Google Project Zero builds a Rowhammer privilege-escalation exploit", highlight: true },
        { year: 2016, event: "Drammer brings Rowhammer to Android; browser-based variants appear" },
        { year: 2021, event: "Half-Double and other patterns bypass Target Row Refresh defenses" },
      ],
      keyTakeaways: [
        "Rowhammer flips bits by rapidly accessing DRAM rows, leaking charge to densely-packed neighbors",
        "It needs no software bug — physics alone lets unprivileged code modify memory it shouldn't reach",
        "A single well-placed flip (page table, permission bit) can escalate privileges or corrupt keys",
        "Defenses (TRR, ECC, higher refresh) raise the bar but are repeatedly bypassed — a miniaturization cost",
      ],
      references: [
        { title: "Google Project Zero — Exploiting the DRAM rowhammer bug (2015)", url: "https://googleprojectzero.blogspot.com/2015/03/exploiting-dram-rowhammer-bug-to-gain.html" },
        { title: "Rowhammer.com — research collection", url: "https://www.rowhammer.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-06-q1", type: "Core Idea", challenge: "What it is.", text: "What is the Rowhammer attack?", options: ["Rapidly accessing DRAM rows to electrically flip bits in neighboring rows", "Smashing the computer with a hammer", "A software buffer overflow", "A phishing scheme"], correctIndex: 0, explanation: "Densely-packed DRAM cells leak charge to neighbors when a row is hammered, flipping their bits." },
        { id: "poh-06-q2", type: "No Bug", challenge: "Why unusual.", text: "What makes Rowhammer remarkable among attacks?", options: ["It requires no software vulnerability — it exploits the hardware's physics", "It needs the admin password", "It only works on paper", "It requires special malware signed by the vendor"], correctIndex: 0, explanation: "Rowhammer sidesteps the entire software-security stack by abusing DRAM physics." },
        { id: "poh-06-q3", type: "Impact", challenge: "One bit, big deal.", text: "Why can a single flipped bit be catastrophic?", options: ["Flipping a page-table or permission bit can grant memory control or escalate privileges", "Bits never matter individually", "It only changes the screen color", "It just slows the computer"], correctIndex: 0, explanation: "A well-placed flip in security-critical data can hand an attacker control." },
        { id: "poh-06-q4", type: "Reach", challenge: "Who can try it.", text: "Why is Rowhammer broadly dangerous?", options: ["Ordinary memory reads trigger it, so even sandboxed/unprivileged code (sometimes JavaScript) can attempt it", "Only the kernel can run it", "It needs physical disassembly", "It requires a quantum computer"], correctIndex: 0, explanation: "Because it's triggered by normal reads, low-privilege and even browser code can attack." },
        { id: "poh-06-q5", type: "Defense", challenge: "Raising the bar.", text: "Which is a Rowhammer mitigation?", options: ["Target Row Refresh (TRR) and ECC memory — though both have been bypassed", "Using a longer password", "Turning off the monitor", "Renaming RAM files"], correctIndex: 0, explanation: "TRR refreshes likely victims and ECC corrects single flips, but research keeps defeating them." },
        { id: "poh-06-q6", type: "Lesson", challenge: "The theme.", text: "What does Rowhammer illustrate about modern hardware?", options: ["Pushing chips to physical limits shrinks reliability margins, creating exploitable fragility", "Hardware is perfectly reliable", "Software is the only attack surface", "Miniaturization improves security"], correctIndex: 0, explanation: "Physical limits make imperfections weaponizable — defense needs hardware-level understanding." },
      ],
    },
  },

  // ─── poh-07: Cold Boot & Remanence ───────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Princeton — the cold-boot attack lab", location: "Princeton, New Jersey, USA", era: "2008 CE", emoji: "❄️" },
    id: "poh-07",
    order: 7,
    title: "Secrets Frozen in Memory",
    subtitle: "Cold Boot Attacks & Data Remanence",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-poh-coldboot", name: "Cold-Boot Forensicist", emoji: "❄️" },
    challengeType: "quiz",
    info: {
      tagline: "We assume RAM forgets the instant the power dies. It doesn't — it fades, over seconds, and freezing it slows the fade to minutes. Long enough to pull the chip, read it, and lift the disk-encryption key straight out of the cold silicon.",
      year: 2024,
      overview: [
        "A cold-boot attack exploits 'data remanence': the fact that DRAM does not lose its contents instantly when power is cut. The charge in each memory cell decays gradually, so for a brief window the data — including encryption keys held in memory — is still there to be read. Cool the chips and the window stretches from seconds to minutes, giving an attacker time to act.",
        "The attack flips a comfortable assumption on its head:\n- Full-disk encryption (BitLocker, FileVault, LUKS) protects data at rest, but to use the disk the key must sit unlocked in RAM while the computer runs.\n- If an attacker gets brief physical access to a running or just-suspended machine, they can recover that key from memory and decrypt the disk — defeating the encryption without attacking the cipher.\n- 'Just lock your screen' is not enough; the key is still in RAM behind the lock screen.",
        "The classic technique is almost theatrically physical:\n- Spray the RAM with an upside-down can of compressed air (which comes out very cold), freezing the chips to slow the charge decay dramatically.\n- Quickly reboot into a tiny program that dumps memory, or physically transplant the chilled DRAM into another machine to read it.\n- Reconstruct the keys from the dumped memory image — encryption keys have recognizable structure and built-in redundancy that survives a few flipped bits.",
      ],
      technical: {
        title: "Remanence, Recovery, and Defenses",
        body: [
          "Several physical facts make cold boot work:\n- DRAM decay is gradual and temperature-dependent — at room temperature data may persist for seconds; chilled to well below freezing, for minutes or longer.\n- Keys are recoverable even with errors — algorithms exploit the mathematical structure of expanded key schedules to correct the handful of bits that decayed, reconstructing the full key.\n- The window is the whole game — the defense and the attack are a race against the fade.",
          "Defenses try to keep keys out of vulnerable DRAM, or scrub them fast:\n- Memory encryption — modern CPUs can transparently encrypt RAM contents (and bind the key to the chip), so a dumped image is useless.\n- Keys in registers/CPU only — schemes that keep the encryption key in CPU registers or special on-die memory, never in DRAM, defeat the read.\n- Scrub on events — wipe keys from memory on suspend/shutdown and detect lid-close or power events to zeroize secrets; require a password on resume rather than leaving keys live.\n- Physical measures — soldered (non-removable) RAM and tamper response raise the cost of the physical step. The principle: a key in plain DRAM is a key an attacker with brief physical access may be able to take.",
        ],
      },
      incident: {
        title: "2008 — 'Lest We Remember' Defeats Disk Encryption",
        when: "February 2008",
        where: "Princeton University and collaborators",
        impact: "Halderman et al. showed cold-boot attacks could extract disk-encryption keys from RAM, breaking BitLocker, FileVault, and others",
        body: [
          "A team led by J. Alex Halderman published 'Lest We Remember: Cold Boot Attacks on Encryption Keys', complete with a memorable video of researchers freezing RAM with canned air and pulling keys out of memory. They demonstrated recovering keys for major full-disk encryption systems, defeating them without touching the cryptography.",
          "It durably changed laptop and device security:\n- It proved that 'the disk is encrypted' is not the end of the story if the machine is seized while powered or suspended — a real concern for stolen laptops and border searches.\n- It pushed the industry toward defenses now common: memory encryption, keeping keys off DRAM, requiring authentication on resume, and soldered memory.\n- Cold boot remains a live concern (researchers revived variants against modern machines in 2018), and it perfectly illustrates data remanence: bits are physical states that linger, and lingering secrets can be stolen.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Key Lives in RAM", sub: "to use the encrypted disk", type: "system" },
          { label: "Cut Power, Freeze RAM", sub: "decay slows to minutes", type: "attacker" },
          { label: "Dump & Reconstruct Key", sub: "structure corrects errors", type: "victim" },
          { label: "Memory Encryption / Scrub", sub: "keep keys off plain DRAM", type: "result" },
        ],
      },
      timeline: [
        { year: 2002, event: "Data remanence in memory studied; RAM doesn't forget instantly" },
        { year: 2008, event: "Princeton's cold-boot attack extracts disk-encryption keys from RAM", highlight: true },
        { year: 2015, event: "Memory-encryption features begin appearing in mainstream CPUs" },
        { year: 2018, event: "Researchers revive cold-boot variants against modern laptops" },
      ],
      keyTakeaways: [
        "DRAM exhibits remanence — it fades gradually, not instantly, so data (including keys) lingers after power-off",
        "Freezing the chips slows the fade to minutes, long enough to dump memory and recover keys",
        "It defeats full-disk encryption without breaking the cipher: the key sits unlocked in RAM while running",
        "Defenses: memory encryption, keeping keys in CPU registers, scrubbing on suspend, and soldered RAM",
      ],
      references: [
        { title: "Lest We Remember: Cold Boot Attacks — Halderman et al. (2008)", url: "https://citp.princeton.edu/our-work/memory/" },
        { title: "Data remanence and memory encryption — overview", url: "https://en.wikipedia.org/wiki/Cold_boot_attack" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-07-q1", type: "Core Idea", challenge: "RAM forgets slowly.", text: "What does a cold-boot attack exploit?", options: ["Data remanence — DRAM fades gradually after power-off, so data lingers", "A password reset bug", "A weak cipher", "A phishing email"], correctIndex: 0, explanation: "RAM doesn't lose contents instantly; for a brief window, keys are still readable." },
        { id: "poh-07-q2", type: "The Trick", challenge: "Why the cold.", text: "Why do attackers freeze the RAM chips?", options: ["Cold dramatically slows charge decay, extending the read window from seconds to minutes", "To clean the dust off", "To make them lighter", "Cold encrypts the data"], correctIndex: 0, explanation: "Chilling DRAM slows remanence decay, buying time to dump or transplant the memory." },
        { id: "poh-07-q3", type: "Target", challenge: "What it defeats.", text: "Why does cold boot defeat full-disk encryption?", options: ["The disk key must sit unlocked in RAM while the machine runs, where it can be read", "It guesses the password", "It breaks AES math", "It deletes the disk"], correctIndex: 0, explanation: "Encryption protects data at rest, but the live key in RAM is recoverable with physical access." },
        { id: "poh-07-q4", type: "Errors", challenge: "Even with decay.", text: "How are keys recovered even if some bits have already decayed?", options: ["Key schedules have mathematical structure/redundancy that corrects the few flipped bits", "Decayed keys can't be recovered at all", "The attacker guesses them", "RAM never has errors"], correctIndex: 0, explanation: "Expanded key structure lets algorithms reconstruct the full key from a partially-decayed image." },
        { id: "poh-07-q5", type: "Defense", challenge: "Keep keys safe.", text: "Which defends against cold-boot key theft?", options: ["Memory encryption or keeping keys in CPU registers, never in plain DRAM", "A longer screen-lock password", "Brighter LEDs", "More disk space"], correctIndex: 0, explanation: "If the key never sits readable in DRAM (encrypted RAM or register-only), the dump is useless." },
        { id: "poh-07-q6", type: "Reality", challenge: "Still relevant.", text: "What's the practical takeaway of cold boot?", options: ["A seized powered/suspended laptop can leak its disk key — locking the screen isn't enough", "Encryption is pointless", "Only servers are affected", "It was fixed forever in 2008"], correctIndex: 0, explanation: "The key remains in RAM behind the lock screen; physical seizure while powered is a real risk." },
      ],
    },
  },

  // ─── poh-08: Fault Injection ─────────────────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "Hardware fault-injection lab", location: "Eindhoven, Netherlands", era: "Present Day", emoji: "⚡" },
    id: "poh-08",
    order: 8,
    title: "Glitching the Machine",
    subtitle: "Fault Injection — Forcing Computers to Misbehave",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-poh-fault", name: "Glitch Master", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "So far the attacker has only watched. Now they reach in and shove. A precisely-timed dip in voltage, a stutter in the clock, a zap of laser light — and the chip skips a check, leaks a key, or unlocks a door it should have kept shut.",
      year: 2024,
      overview: [
        "Fault injection (or 'glitching') is an active physical attack: deliberately push a chip outside its safe operating conditions for a tiny instant to make it compute wrong — on purpose, and in a controlled way. Where side channels are passive eavesdropping, fault injection is active sabotage of a single operation, and a single induced error can shatter security.",
        "There are several ways to glitch a chip, by disturbing what it depends on:\n- Voltage glitching — briefly drop or spike the supply voltage so a transistor doesn't settle correctly, corrupting one operation.\n- Clock glitching — insert an extra or shortened clock pulse so an instruction is skipped or executed before its inputs are ready.\n- Electromagnetic fault injection — a sharp EM pulse from a nearby coil flips internal signals without any wires.\n- Laser/optical fault injection — focus light on a decapsulated chip to flip specific bits with surgical precision (and a bigger budget).",
        "A single well-placed fault is shockingly powerful:\n- Skip a check — glitch the instant a 'is the PIN correct?' or 'is secure boot signature valid?' comparison runs, and the chip proceeds as if it passed.\n- Corrupt a computation — a fault during a cryptographic operation can, through 'differential fault analysis', reveal the secret key from the difference between a correct and a faulty output (famously, one faulted RSA signature can leak the private key).\n- Real targets include payment cards, secure bootloaders, hardware wallets, and game consoles — anywhere a chip enforces a security decision an attacker wants to override.",
      ],
      technical: {
        title: "Glitching, Differential Fault Analysis, and Defenses",
        body: [
          "Successful glitching is about precision and repetition:\n- Timing is everything — the fault must land on the exact clock cycle of the security-critical operation, so attackers profile the target and sweep timing/intensity until it works.\n- It is cheap to start — open tools (like ChipWhisperer) and simple hardware bring voltage and clock glitching within hobbyist reach; EM and laser raise capability and cost.\n- Differential Fault Analysis (DFA) — for crypto, the attacker compares a correct output with a faulted one; the mathematics of ciphers like RSA and AES then yields the key from that difference, sometimes from a single fault.",
          "Defenses make a single fault insufficient:\n- Redundancy — compute critical operations twice (or in different ways) and compare; a glitch that hits one won't match the other, so the chip detects the attack.\n- Sensors and shields — voltage, clock, light, and EM sensors detect abnormal conditions and trigger a reset or zeroize secrets; active meshes detect decapsulation.\n- Check-hardening — verify security decisions multiple times, randomize timing, and add 'infective' computation so a fault corrupts the output uselessly rather than helpfully.\n- The arms race is constant: secure elements and certified chips are explicitly tested against fault injection, because an attacker willing to glitch can turn one skipped instruction into a full bypass.",
        ],
      },
      incident: {
        title: "Glitching Open Secure Boot — From Consoles to Wallets",
        when: "2017–Present",
        where: "Game consoles, hardware wallets, and secure microcontrollers",
        impact: "Voltage and EM glitching repeatedly bypassed secure boot and unlocked protected devices, extracting keys and enabling jailbreaks",
        body: [
          "Fault injection moved from labs to a practical attacker tool against consumer security chips. Researchers and hobbyists used voltage and electromagnetic glitching to defeat secure boot on game consoles and microcontrollers — skipping the signature check that is supposed to ensure only authorized firmware runs.",
          "The hardware-wallet cases made the stakes vivid:\n- Researchers demonstrated glitching attacks against cryptocurrency hardware wallets, using a precisely-timed voltage fault to bypass protections and extract or unlock the secret seed in some models.\n- Console 'modchips' and jailbreaks have repeatedly relied on glitching to run unsigned code.\n- Each case shows the same pattern: a chip makes a yes/no security decision, and a fault injected at exactly that moment forces a 'yes' — which is why high-security devices now layer redundancy, sensors, and tamper response specifically to survive glitching.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Push Outside Safe Limits", sub: "voltage / clock / EM / laser", type: "attacker" },
          { label: "One Operation Goes Wrong", sub: "skipped check, faulted math", type: "system" },
          { label: "Security Decision Forced", sub: "bypass boot, leak key (DFA)", type: "victim" },
          { label: "Redundancy + Sensors", sub: "detect and resist the glitch", type: "result" },
        ],
      },
      timeline: [
        { year: 1997, event: "Boneh–DeMillo–Lipton: a single fault in RSA can leak the private key (DFA)" },
        { year: 2010, event: "Voltage/clock glitching matures as a practical attack on secure microcontrollers" },
        { year: 2017, event: "Open tools (ChipWhisperer) bring fault injection to hobbyists", highlight: true },
        { year: 2020, event: "Glitching attacks bypass secure boot on consoles and hardware wallets" },
      ],
      keyTakeaways: [
        "Fault injection actively pushes a chip outside safe limits for an instant to force a wrong, controlled result",
        "Methods: voltage glitch, clock glitch, EM pulse, and laser — landing on the exact critical clock cycle",
        "One fault can skip a security check or, via differential fault analysis, leak a crypto key from a faulted output",
        "Defenses make one fault insufficient: redundant checks, sensors/shields, and check-hardening with tamper response",
      ],
      references: [
        { title: "Fault injection attacks — ChipWhisperer / NewAE", url: "https://chipwhisperer.readthedocs.io/" },
        { title: "Differential Fault Analysis — Boneh, DeMillo, Lipton (1997)", url: "https://link.springer.com/chapter/10.1007/3-540-69053-0_4" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-08-q1", type: "Core Idea", challenge: "Active, not passive.", text: "What is fault injection (glitching)?", options: ["Deliberately pushing a chip outside safe limits to force a wrong, controlled result", "Listening to power traces", "Sending malicious emails", "Flooding the network"], correctIndex: 0, explanation: "Unlike passive side channels, glitching actively sabotages a single operation on purpose." },
        { id: "poh-08-q2", type: "Methods", challenge: "Ways to glitch.", text: "Which is a fault-injection method?", options: ["Briefly dropping the supply voltage at a precise moment (voltage glitch)", "Sending a phishing link", "Guessing the password", "Encrypting the disk"], correctIndex: 0, explanation: "Voltage, clock, EM, and laser glitches all disturb what the chip depends on to compute correctly." },
        { id: "poh-08-q3", type: "Skip a Check", challenge: "Forcing a yes.", text: "How can one glitch bypass secure boot or a PIN check?", options: ["Faulting the exact moment the 'is it valid?' comparison runs makes the chip proceed as if it passed", "By reading the screen", "By overheating the RAM", "By using more electricity overall"], correctIndex: 0, explanation: "A precisely-timed fault skips or corrupts the security decision, forcing acceptance." },
        { id: "poh-08-q4", type: "DFA", challenge: "Leaking keys.", text: "What is Differential Fault Analysis (DFA)?", options: ["Comparing a correct and a faulted crypto output to mathematically recover the key", "Analyzing disk fragmentation", "A type of firewall rule", "Measuring fan speed"], correctIndex: 0, explanation: "For ciphers like RSA/AES, the difference between correct and faulty outputs can reveal the secret key." },
        { id: "poh-08-q5", type: "Defense", challenge: "One fault isn't enough.", text: "How do chips defend against fault injection?", options: ["Redundant checks, sensors/shields, and tamper response so a single glitch is detected", "A longer password", "Brighter screens", "Disabling encryption"], correctIndex: 0, explanation: "Computing critical operations twice and adding sensors makes a single induced fault insufficient." },
        { id: "poh-08-q6", type: "Targets", challenge: "Real victims.", text: "Which devices have fallen to glitching?", options: ["Game consoles, secure bootloaders, and some hardware wallets", "Only supercomputers", "Nothing in the real world", "Only paper documents"], correctIndex: 0, explanation: "Glitching bypassed secure boot on consoles/microcontrollers and extracted seeds from some wallets." },
      ],
    },
  },

  // ─── poh-09: Hardware Implants & Supply Chain ────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "The hardware supply-chain frontier", location: "Global semiconductor supply chain", era: "Present Day", emoji: "🏭" },
    id: "poh-09",
    order: 9,
    title: "Trust Built In — or Betrayed",
    subtitle: "Hardware Implants & Supply-Chain Attacks",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-poh-supplychain", name: "Supply-Chain Sentinel", emoji: "🏭" },
    challengeType: "quiz",
    info: {
      tagline: "Every other attack in this track assumes the hardware was honest to begin with. But chips are designed in one country, made in another, and assembled in a third — and anywhere along that journey, someone could add a little something extra.",
      year: 2024,
      overview: [
        "The deepest physical attack is subverting the hardware before it ever reaches you. A modern device passes through a sprawling global supply chain — design, fabrication, packaging, assembly, firmware, distribution — and a malicious actor at any stage can implant a backdoor, weaken a component, or swap in a counterfeit. The result is hardware you trust completely that was never trustworthy.",
        "Supply-chain hardware threats take several forms:\n- Hardware trojans — tiny malicious modifications added during chip design or fabrication, dormant until triggered, capable of leaking data or disabling protections.\n- Implants and interdiction — physically adding a component (or intercepting a shipment to modify it) to create a backdoor, as documented in leaked intelligence catalogs of spy hardware.\n- Counterfeit and recycled parts — fake or salvaged chips that may be substandard or maliciously altered, common in cheap or grey-market components.\n- Malicious firmware — subverting the low-level code (BIOS/UEFI, microcontroller firmware) that runs before any operating system.",
        "Why this is so hard to defend:\n- You cannot easily inspect a finished chip — billions of transistors are sealed in opaque packaging, and a malicious circuit can be a vanishingly small fraction of the whole.\n- Trust is transitive — you rely on every vendor in the chain, and on their vendors, often with little visibility.\n- The blast radius is enormous — a backdoor baked into a widely-used component can compromise everything built on it, silently and at scale.",
      ],
      technical: {
        title: "Detecting and Limiting Supply-Chain Risk",
        body: [
          "Because perfect inspection is impossible, defense is about reducing and bounding trust:\n- Provenance and integrity — track where components come from, use tamper-evident packaging and secure shipping, and verify firmware with cryptographic signatures and measured boot.\n- Hardware roots of trust — secure elements and TPMs that attest to a device's identity and firmware state, so unexpected changes are detectable.\n- Testing and analysis — power/EM side-channel signatures, X-ray and decapsulation imaging, and behavioral testing can catch some anomalies, though a determined trojan can hide.\n- Design-side defenses — split manufacturing, logic obfuscation, and 'trusted foundry' programs reduce what any single fab can subvert.",
          "Policy and architecture matter as much as technology:\n- Zero-trust for hardware — assume components can be compromised and design so no single part holds unchecked power; cross-check critical functions.\n- Diversity and verification — multiple sources, independent verification, and reproducible firmware builds limit a single supplier's reach.\n- The honest caveat — the most famous alleged hardware-implant story (a 2018 media report claiming spy chips on server motherboards) was strongly disputed and never substantiated, which itself is a lesson: supply-chain fear is real and the threat is plausible, but claims demand rigorous evidence, and defense must be systematic rather than reactive to headlines.",
        ],
      },
      incident: {
        title: "Spy Catalogs, Disputed Chips, and Real Implants",
        when: "2013–2018",
        where: "Global — intelligence leaks and security reporting",
        impact: "Documented interdiction implants and high-profile (disputed) reports put hardware supply-chain attacks on the security agenda",
        body: [
          "Two threads made hardware supply-chain attacks a mainstream concern. First, in 2013 leaked intelligence documents revealed catalogs of hardware implants — tiny devices and modified components intelligence agencies could install (often via 'interdiction', intercepting shipments) to backdoor targets' equipment. These were real, engineered tools.",
          "Second, in 2018 a major news report alleged that tiny spy chips had been secretly added to server motherboards used by large tech companies:\n- The companies named, and later government statements, strongly disputed the report, and no technical proof was ever produced — it remains unsubstantiated.\n- Yet it ignited serious investment in supply-chain security, hardware attestation, and provenance tracking, because the underlying threat is undeniably plausible.\n- Together the threads define the lesson: hardware implants are a genuine, demonstrated capability, the supply chain is a real attack surface, and defending it requires verifiable trust and rigorous evidence — not panic and not complacency.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Global Supply Chain", sub: "design → fab → assembly → ship", type: "system" },
          { label: "Subversion Point", sub: "trojan, implant, counterfeit, firmware", type: "attacker" },
          { label: "Trusted-but-Tainted HW", sub: "backdoor at scale, silent", type: "victim" },
          { label: "Provenance + Attestation", sub: "roots of trust, verification", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "Research on hardware trojans formalizes the chip-level threat" },
        { year: 2013, event: "Leaked catalogs reveal real hardware interdiction implants", highlight: true },
        { year: 2018, event: "Disputed report alleges spy chips on server boards — never substantiated" },
        { year: 2021, event: "Supply-chain security (provenance, attestation, SBOM/HBOM) becomes a priority" },
      ],
      keyTakeaways: [
        "The deepest physical attack subverts hardware in the global supply chain before it ever reaches you",
        "Forms: hardware trojans, implants/interdiction, counterfeit parts, and malicious low-level firmware",
        "It's hard to defend — sealed chips resist inspection, trust is transitive, and the blast radius is huge",
        "Defense bounds trust: provenance, hardware roots of trust/attestation, testing, and verifiable firmware — with rigorous evidence over hype",
      ],
      references: [
        { title: "Hardware trojans and supply-chain security — overview", url: "https://csrc.nist.gov/projects/cyber-supply-chain-risk-management" },
        { title: "Hardware roots of trust and attestation (TCG)", url: "https://trustedcomputinggroup.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-09-q1", type: "Core Idea", challenge: "Trust at the source.", text: "What is a hardware supply-chain attack?", options: ["Subverting hardware during design, fabrication, assembly, or distribution before it reaches the user", "Hacking a website", "Guessing a password", "Sending spam"], correctIndex: 0, explanation: "A malicious actor anywhere in the chain can implant backdoors or swap in tainted components." },
        { id: "poh-09-q2", type: "Forms", challenge: "How it's done.", text: "Which is a supply-chain hardware threat?", options: ["A hardware trojan added during chip design or fabrication", "A strong password", "A software patch", "A firewall rule"], correctIndex: 0, explanation: "Trojans, implants/interdiction, counterfeits, and malicious firmware are all supply-chain threats." },
        { id: "poh-09-q3", type: "Why Hard", challenge: "The defender's problem.", text: "Why is hardware subversion hard to detect?", options: ["Billions of transistors are sealed in opaque packaging and trust is transitive across many vendors", "Chips announce their backdoors", "It only affects software", "Hardware can't be modified"], correctIndex: 0, explanation: "You can't easily inspect a finished chip, and you depend on every vendor in the chain." },
        { id: "poh-09-q4", type: "Blast Radius", challenge: "Scale of harm.", text: "Why is a hardware backdoor especially dangerous?", options: ["Baked into a widely-used component, it can compromise everything built on it, silently at scale", "It only affects one device", "It is easy to remove", "It makes devices faster"], correctIndex: 0, explanation: "A tainted common component spreads compromise across every product using it." },
        { id: "poh-09-q5", type: "Defense", challenge: "Bounding trust.", text: "Which helps defend the hardware supply chain?", options: ["Provenance tracking, hardware roots of trust/attestation, and verified firmware", "Longer passwords", "Turning off the lights", "Deleting log files"], correctIndex: 0, explanation: "You can't perfectly inspect, so you reduce and verify trust with provenance and attestation." },
        { id: "poh-09-q6", type: "Evidence", challenge: "Hype vs proof.", text: "What's the lesson of the disputed 2018 'spy chip' report?", options: ["The threat is plausible and real capabilities exist, but claims need rigorous evidence and systematic defense", "All hardware is backdoored", "Supply-chain attacks are impossible", "News reports are always right"], correctIndex: 0, explanation: "The report was never substantiated; defend systematically based on evidence, not panic." },
      ],
    },
  },

  // ─── poh-10: Defending the Physical Layer ────────────────────────────────────
  {
    epochId: "physics-of-hacking",
    wonder: { name: "The secure-hardware design frontier", location: "Worldwide", era: "Present Day", emoji: "🛡️" },
    id: "poh-10",
    order: 10,
    title: "Hardening the Metal",
    subtitle: "Defending the Physical Layer",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-poh-defense", name: "Physical-Security Engineer", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "You have seen the machine betray its secrets through power, radio, time, sound, light, memory, glitches, and the supply chain. This final stage assembles the defenses — because a system is only as secure as its most exposed physical edge.",
      year: 2024,
      overview: [
        "Every attack in this track shares a root cause: computation is physical, so it leaks, lingers, and can be disturbed. Defending the physical layer therefore means systematically breaking the link between secrets and physical reality — through cryptographic engineering, circuit design, dedicated secure hardware, and physical and supply-chain controls. No single fix is enough; resilience comes from layering them.",
        "The defenses gather into four families, each countering attacks you have met:\n- Make leaks meaningless — constant-time code (timing), masking and hiding (power/EM), and balanced circuits so physical signals no longer depend on secrets.\n- Make secrets not linger — memory encryption, register-only keys, and scrubbing on suspend/shutdown to defeat remanence and cold boot.\n- Make disturbance fail safely — redundant checks, sensors (voltage/clock/light/EM), tamper meshes, and error-correcting/refresh-hardened memory against faults and Rowhammer.\n- Contain and verify the physical device — shielding and zoning (TEMPEST), secure elements/HSMs/TPMs as hardened vaults, and provenance/attestation for the supply chain.",
        "The unifying idea is the hardware root of trust:\n- A small, hardened, heavily-defended component (secure element, TPM, HSM) holds the most critical secrets and enforces the most critical decisions, built specifically to resist side channels and faults.\n- The rest of the system anchors its trust to that root — measured boot, attestation, sealed keys — so even if outer layers are probed, the crown jewels stay protected.\n- Security becomes a property designed in from the silicon up, not bolted on, which is exactly the mindset these two foundational tracks have been building toward.",
      ],
      technical: {
        title: "Layered Physical Defense in Practice",
        body: [
          "Real secure hardware combines countermeasures deliberately:\n- Cryptographic level — constant-time, masked implementations validated by side-channel testing (a secure element is evaluated by literally trying these attacks against it).\n- Circuit level — balanced logic, noise generators, internal voltage regulators, and randomized timing to flatten power/EM/timing leaks.\n- Sensor/response level — detectors for abnormal voltage, clock, temperature, light, and physical intrusion that reset or zeroize secrets when triggered.\n- Architecture level — keep keys in dedicated hardware that never exposes them, encrypt memory, and minimize the trusted computing base so there is less to attack.",
          "Process, evaluation, and threat modeling tighten it all:\n- Certification — schemes like FIPS 140-3 (physical security levels), Common Criteria, and EMVCo subject devices to real side-channel and fault testing before they are trusted with money or secrets.\n- Threat modeling must include the physical — a complete model asks 'what does this leak, what lingers, what can be disturbed, and who touched the supply chain?', not just 'is the crypto strong?'.\n- Defense-in-depth and assume-breach — expect some layer to be probed, and design so that one physical compromise does not cascade. The engineer who internalizes both foundational tracks — how the machine works, and how its physics is attacked — can build and assess systems that hold up where software-only thinking fails.",
        ],
      },
      incident: {
        title: "Why Secure Elements Exist — Designing for the Attacks",
        when: "2000s–Present",
        where: "Payments, mobile, identity, and high-assurance systems",
        impact: "The relentless drumbeat of physical attacks produced a category of hardware engineered specifically to survive them",
        body: [
          "After timing attacks, power analysis, fault injection, and the rest proved that ordinary chips could not be trusted with high-value secrets, the industry built a category of components designed from the ground up to resist physical attack: secure elements, smartcards, HSMs, and TPMs. These power your payment cards, phone wallets, passports, and the keys behind much of modern infrastructure.",
          "Their design is this entire track turned into a product:\n- They include masking and constant-time crypto, sensors and shields against glitching, anti-remanence measures, tamper response that wipes keys, and certification against real side-channel and fault testing.\n- They are explicitly evaluated by attacking them — labs throw power analysis, fault injection, and decapsulation at certified devices to assign assurance levels.\n- The existence of this hardened category is the optimistic conclusion of the Physics of Hacking: every physical attack has a physical defense, and a defender who understands the machine deeply enough can build systems whose secrets stay secret even in an attacker's hands.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Make Leaks Meaningless", sub: "constant-time, masking, balance", type: "system" },
          { label: "Keep Secrets in a Vault", sub: "secure element, encrypt memory", type: "result" },
          { label: "Detect & Resist Disturbance", sub: "sensors, redundancy, tamper response", type: "victim" },
          { label: "Hardware Root of Trust", sub: "anchor + attest the whole system", type: "attacker" },
        ],
      },
      timeline: [
        { year: 1999, event: "Post-DPA, masking/hiding countermeasures become standard in secure chips" },
        { year: 2009, event: "TPMs spread; hardware roots of trust enter mainstream PCs" },
        { year: 2013, event: "Mobile secure elements/enclaves protect keys in phones at scale", highlight: true },
        { year: 2024, event: "FIPS 140-3 physical testing and certified secure elements anchor modern security" },
      ],
      keyTakeaways: [
        "Defending the physical layer means breaking the link between secrets and physical reality, in layers",
        "Four families: make leaks meaningless, keep secrets from lingering, make disturbance fail safe, and contain/verify the device",
        "The hardware root of trust (secure element/TPM/HSM) holds crown-jewel secrets and is built to resist side channels and faults",
        "Threat-model the physical (leak/linger/disturb/supply chain) and certify by actually attacking the device",
      ],
      references: [
        { title: "FIPS 140-3 physical security requirements — NIST", url: "https://csrc.nist.gov/projects/cryptographic-module-validation-program" },
        { title: "Hardware security and secure elements — overview", url: "https://www.globalplatform.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "poh-10-q1", type: "Core Idea", challenge: "The unifying defense.", text: "What does defending the physical layer fundamentally require?", options: ["Breaking the link between secrets and physical reality, in layers", "A single antivirus program", "Only a strong password", "Ignoring the hardware"], correctIndex: 0, explanation: "Since computation leaks, lingers, and can be disturbed, defenses must decouple secrets from physics at every level." },
        { id: "poh-10-q2", type: "Families", challenge: "Matching defense to attack.", text: "Which defense counters power/EM side channels?", options: ["Masking and balanced circuits so the physical signal doesn't depend on secrets", "Freezing the RAM", "A longer password", "Brighter LEDs"], correctIndex: 0, explanation: "Masking/hiding flattens the leak so power and EM no longer correlate with the secret." },
        { id: "poh-10-q3", type: "Remanence", challenge: "Don't let it linger.", text: "How do you defend against cold-boot remanence?", options: ["Memory encryption and keeping keys off plain DRAM, scrubbing on suspend", "Hammering the memory", "Using sound dampening", "Turning up the clock speed"], correctIndex: 0, explanation: "If keys never sit readable in DRAM and are scrubbed promptly, a memory dump is useless." },
        { id: "poh-10-q4", type: "Faults", challenge: "Fail safe.", text: "What defends against fault injection?", options: ["Redundant checks plus sensors and tamper response so one glitch is detected", "A second monitor", "More disk space", "A faster CPU only"], correctIndex: 0, explanation: "Computing critical operations redundantly and sensing abnormal conditions defeats single faults." },
        { id: "poh-10-q5", type: "Root of Trust", challenge: "The vault.", text: "What is a hardware root of trust (secure element/TPM/HSM)?", options: ["A hardened component that holds critical secrets and enforces key decisions, built to resist side channels and faults", "A backup hard drive", "A type of password", "A cloud server"], correctIndex: 0, explanation: "The system anchors trust to this small, heavily-defended vault for its crown-jewel secrets." },
        { id: "poh-10-q6", type: "Mindset", challenge: "The takeaway.", text: "What's the overall lesson of the Physics of Hacking?", options: ["Every physical attack has a physical defense — security must be designed in from the silicon up", "Hardware can't be secured", "Only software matters", "Physical attacks are imaginary"], correctIndex: 0, explanation: "Understanding the machine and its physics lets you build systems that resist attacks software-only thinking misses." },
      ],
    },
  },
];

// ── CTF mode ────────────────────────────────────────────────────────────────
// Each stage gets a hands-on terminal CTF (its quiz stays as the half-clear).
// Flags live in stage-flags.ts; fragments assemble to them.
type Cmd = [verb: string, frag: string, lines: string[]];
function mkCtf(scenario: string, brief: string, open: string, a: Cmd, b: Cmd, labels: [string, string, string], hints: string[]): CtfConfig {
  return {
    scenario, hint: hints[0], hints,
    fragments: [
      { trigger: "/briefing.txt", value: open, label: labels[0] },
      { trigger: a[0], value: a[1], label: labels[1] },
      { trigger: b[0], value: b[1], label: labels[2] },
    ],
    files: { "/briefing.txt": brief },
    dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
    extraCommands: { [a[0]]: () => ({ lines: a[2] }), [b[0]]: () => ({ lines: b[2] }) },
  };
}

const POH_CTF: Record<string, CtfConfig> = {
  "poh-01": mkCtf(
    "A secure device leaks information through a physical side channel while it computes. Observe the leakage and extract a secret bit without ever reading memory directly.",
    "OP: SIDE CHANNEL 101\nTarget: a chip doing a secret-dependent computation.\nGoal: observe the physical leak, then extract a bit.\nSequence: observe-leak -> extract-bit",
    "FLAG{S1D3_CH4NN3L_",
    ["observe-leak", "L34K_", ["Monitoring physical emissions during the secret operation ...", "Detected a data-dependent variation in power/timing. The computation leaks!", "Next: extract-bit"]],
    ["extract-bit", "F0UND}", ["Correlating the leakage with guessed secret bits ...", "Bit recovered with high confidence — no memory access required.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Leakage Observed", "Secret Bit Extracted"],
    ["Read the briefing. Run: cat briefing.txt", "Observe the physical leak. Run: observe-leak", "Extract the secret bit. Run: extract-bit", "Run 'assemble', then submit the flag"],
  ),
  "poh-02": mkCtf(
    "A smartcard's power draw rises and falls with the key bits it processes. Capture power traces and run differential power analysis (DPA) to recover the key.",
    "OP: POWER ANALYSIS (SPA/DPA)\nTarget: smartcard performing AES with a secret key.\nGoal: capture traces, then correlate out the key.\nSequence: capture-traces -> correlate-key",
    "FLAG{DPA_",
    ["capture-traces", "P0W3R_TR4C3_", ["Capturing power traces across thousands of encryptions ...", "10,000 traces recorded; aligned on the S-box round.", "Next: correlate-key"]],
    ["correlate-key", "K3Y}", ["Running DPA: correlating power to a key-bit hypothesis ...", "Correlation peak found for each key byte — full key recovered.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Power Traces Captured", "Key Correlated Out"],
    ["Read the briefing. Run: cat briefing.txt", "Capture power traces. Run: capture-traces", "Correlate out the key. Run: correlate-key", "Run 'assemble', then submit the flag"],
  ),
  "poh-03": mkCtf(
    "A monitor radiates its image as electromagnetic emanations. Tune an antenna to the right band and reconstruct what's on the screen from across the wall — Van Eck phreaking.",
    "OP: TEMPEST / VAN ECK\nTarget: an unshielded display leaking EM emanations.\nGoal: tune the antenna, then reconstruct the screen.\nSequence: tune-antenna -> reconstruct-screen",
    "FLAG{T3MP3ST_",
    ["tune-antenna", "VAN_3CK_", ["Sweeping for the display's pixel-clock harmonics ...", "Locked onto the emanation at the video refresh frequency.", "Next: reconstruct-screen"]],
    ["reconstruct-screen", "SCR33N}", ["Demodulating the emanations into a raster image ...", "The victim's screen is now readable from outside the room.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Antenna Tuned", "Screen Reconstructed"],
    ["Read the briefing. Run: cat briefing.txt", "Tune the antenna. Run: tune-antenna", "Reconstruct the screen. Run: reconstruct-screen", "Run 'assemble', then submit the flag"],
  ),
  "poh-04": mkCtf(
    "A comparison routine returns faster when more bytes match. Measure the response timing and recover the secret byte-by-byte — a classic timing attack against non-constant-time code.",
    "OP: TIMING ATTACK\nTarget: a server using a non-constant-time secret comparison.\nGoal: measure timing, then recover the secret.\nSequence: measure-timing -> recover-secret",
    "FLAG{T1M1NG_",
    ["measure-timing", "L34K_", ["Sending guesses and timing the response to nanosecond precision ...", "Responses are measurably slower as more leading bytes match — it leaks!", "Next: recover-secret"]],
    ["recover-secret", "N0N_C0NST}", ["Recovering the secret one byte at a time from the timing differences ...", "Full secret reconstructed — constant-time code would have stopped this.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Timing Leak Measured", "Secret Recovered"],
    ["Read the briefing. Run: cat briefing.txt", "Measure the timing. Run: measure-timing", "Recover the secret. Run: recover-secret", "Run 'assemble', then submit the flag"],
  ),
  "poh-05": mkCtf(
    "A laptop's capacitors emit a faint high-pitched whine that depends on the RSA operation underway. Record the acoustics and extract the private key — an acoustic side channel.",
    "OP: ACOUSTIC EXFIL\nTarget: a laptop performing RSA decryption.\nGoal: record the sound, then extract the RSA key.\nSequence: record-acoustic -> extract-rsa",
    "FLAG{4C0UST1C_",
    ["record-acoustic", "RSA_", ["Recording the laptop's coil whine during chosen-ciphertext decryptions ...", "Captured acoustic signatures that vary with the secret exponent bits.", "Next: extract-rsa"]],
    ["extract-rsa", "L1ST3N3D}", ["Mapping acoustic signatures to key bits ...", "RSA private key extracted by listening — air gap defeated.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Acoustics Recorded", "RSA Key Extracted"],
    ["Read the briefing. Run: cat briefing.txt", "Record the acoustics. Run: record-acoustic", "Extract the RSA key. Run: extract-rsa", "Run 'assemble', then submit the flag"],
  ),
  "poh-06": mkCtf(
    "Repeatedly accessing one DRAM row disturbs its neighbors, flipping bits in memory you don't own. Hammer the rows, find a flip, and exploit it for privilege escalation — Rowhammer.",
    "OP: ROWHAMMER\nTarget: DRAM with no/weak Rowhammer mitigation.\nGoal: hammer rows to flip a bit, then exploit it.\nSequence: hammer-rows -> exploit-flip",
    "FLAG{R0WH4MM3R_",
    ["hammer-rows", "B1T_", ["Hammering aggressor rows hundreds of thousands of times per refresh ...", "A reproducible bit flip appears in an adjacent victim row.", "Next: exploit-flip"]],
    ["exploit-flip", "FL1PP3D}", ["Massaging memory so a page table entry sits on the flippable bit ...", "Flip flips a permission bit -> attacker gains write access. Privilege escalated.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Bit Flipped", "Flip Exploited"],
    ["Read the briefing. Run: cat briefing.txt", "Hammer the rows. Run: hammer-rows", "Exploit the bit flip. Run: exploit-flip", "Run 'assemble', then submit the flag"],
  ),
  "poh-07": mkCtf(
    "DRAM keeps its contents for seconds after power-off — longer when cold. Freeze the RAM, dump it, and recover the disk-encryption key still sitting in memory — a cold-boot attack.",
    "OP: COLD BOOT\nTarget: a locked laptop with full-disk encryption (key in RAM).\nGoal: freeze the RAM, then dump and recover the key.\nSequence: freeze-ram -> dump-keys",
    "FLAG{C0LD_B00T_",
    ["freeze-ram", "K3Y_", ["Spraying the DRAM with inverted canned air to ~-50C ...", "Remanence extended to minutes — contents survive a power cycle.", "Next: dump-keys"]],
    ["dump-keys", "R3C0V3R3D}", ["Cold-booting a tiny imager and dumping physical memory ...", "Scanning for AES key schedules ... disk-encryption key recovered from RAM.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "RAM Frozen", "Keys Recovered"],
    ["Read the briefing. Run: cat briefing.txt", "Freeze the RAM. Run: freeze-ram", "Dump and recover keys. Run: dump-keys", "Run 'assemble', then submit the flag"],
  ),
  "poh-08": mkCtf(
    "A precisely-timed voltage glitch makes a CPU skip an instruction. Glitch the secure-boot signature check so unsigned code runs — fault injection, the technique that has opened consoles and hardware wallets.",
    "OP: FAULT INJECTION\nTarget: a device whose secure boot verifies a firmware signature.\nGoal: glitch the chip, then bypass the signature check.\nSequence: glitch-voltage -> bypass-check",
    "FLAG{GL1TCH_",
    ["glitch-voltage", "S3CUR3_B00T_", ["Dropping the core voltage for ~50 ns at the verification window ...", "Found a glitch timing that corrupts the compare without crashing the chip.", "Next: bypass-check"]],
    ["bypass-check", "BYP4SS}", ["Glitching exactly as secure boot checks the signature ...", "The 'if (valid)' branch is skipped -> unsigned firmware boots. Trust bypassed.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Glitch Tuned", "Secure Boot Bypassed"],
    ["Read the briefing. Run: cat briefing.txt", "Glitch the voltage. Run: glitch-voltage", "Bypass the check. Run: bypass-check", "Run 'assemble', then submit the flag"],
  ),
  "poh-09": mkCtf(
    "A board came back from an untrusted assembler with an extra component. Scan the hardware, find the implant tapping a data line, and prove a supply-chain compromise.",
    "OP: HARDWARE IMPLANT\nTarget: a server board from an untrusted supply chain.\nGoal: scan the board, then locate the implant.\nSequence: scan-board -> find-implant",
    "FLAG{HW_1MPL4NT_",
    ["scan-board", "SUPPLY_", ["Comparing the board against the golden reference (X-ray + power) ...", "An undocumented component sits between the BMC and a data line.", "Next: find-implant"]],
    ["find-implant", "CH41N}", ["Probing the rogue component ...", "It is a tiny implant exfiltrating/injecting on the management bus — a supply-chain backdoor.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Board Scanned", "Implant Found"],
    ["Read the briefing. Run: cat briefing.txt", "Scan the board. Run: scan-board", "Find the implant. Run: find-implant", "Run 'assemble', then submit the flag"],
  ),
  "poh-10": mkCtf(
    "Flip to defense. Audit a device's physical-layer protections against everything in this epoch, then harden it around a secure element so the attacks fail.",
    "OP: HARDEN THE METAL\nTarget: a device that must resist side-channel, fault, and implant attacks.\nGoal: audit the defenses, then harden the physical layer.\nSequence: audit-defenses -> harden-layer",
    "FLAG{S3CUR3_",
    ["audit-defenses", "3L3M3NT_", ["Auditing: constant-time crypto? shielding? glitch/voltage sensors? mesh? secure element?", "Gaps found: no glitch detection, secrets outside the secure element.", "Next: harden-layer"]],
    ["harden-layer", "H4RD3N3D}", ["Moving keys into the secure element; enabling fault sensors, shielding, and tamper mesh ...", "Side-channel, fault, and implant attacks now fail. Defense designed in.", "Run 'assemble' to retrieve your fragment."]],
    ["Mission Brief", "Defenses Audited", "Physical Layer Hardened"],
    ["Read the briefing. Run: cat briefing.txt", "Audit the defenses. Run: audit-defenses", "Harden the physical layer. Run: harden-layer", "Run 'assemble', then submit the flag"],
  ),
};

for (const s of physicsOfHackingStages) {
  const ctf = POH_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
