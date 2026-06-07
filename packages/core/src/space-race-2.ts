import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const spaceRace2Epoch: EpochConfig = {
  id: "space-race-2",
  name: "Race Through Space II",
  subtitle: "Links, Ground Segments & Constellations",
  description:
    "The first space epoch introduced satellites, ground stations, and why space is hard to secure. This one goes operational and adversarial: hijacking a satellite's command uplink (TT&C), eavesdropping unencrypted downlinks, spoofing GNSS time, jamming and anti-jam, breaching the ground segment (the Viasat lesson), CubeSats and mega-constellations, pivoting across inter-satellite links, space situational awareness and ASAT, and securing space systems with SPARTA and resilience. Hands-on CTFs throughout.",
  emoji: "🚀",
  color: "violet",
  unlocked: true,
};

export const spaceRace2Stages: StageConfig[] = [
  // ─── s2-01: Anatomy of a Space Mission & SPARTA (Quiz) ───────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The machine you can never touch again", location: "Low Earth orbit to deep space", era: "Modern", emoji: "🚀" },
    id: "s2-01",
    order: 1,
    title: "Space Systems & SPARTA",
    subtitle: "Three Segments, One Unreachable Target",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-s2-sparta", name: "Mission Mapper", emoji: "🚀" },
    challengeType: "quiz",
    info: {
      tagline: "A spacecraft is the ultimate embedded system: once it launches you can never physically touch it again, it lives for 15+ years on hardware frozen at design time, and your only connection is a radio link an adversary can also hear. The second space epoch starts by mapping that system and the framework built to attack and defend it.",
      year: 2024,
      overview: [
        "Every space mission has three segments: the space segment (the satellite — its bus, the housekeeping platform, and its payload, the mission instruments), the ground segment (mission control, ground stations, and the operations network), and the link segment (the radio between them: the uplink of commands and the downlink of telemetry and data). Each is a distinct attack surface, and the link ties them together.",
        "Spacecraft are uniquely hard to secure:\n- No physical access after launch and no easy patching — fixes must work over a constrained, intermittent radio link, if at all.\n- Long lifetimes on radiation-hardened but old, resource-limited processors that can't run modern security.\n- Legacy protocols (CCSDS) and historically little or no authentication/encryption on command links, built when 'who else has a big enough antenna?' felt like security.",
        "To organize this, the Aerospace Corporation created SPARTA (Space Attack Research and Tactic Analysis) — a MITRE ATT&CK-style matrix of tactics and techniques specific to spacecraft, from reconnaissance and initial access on the ground, to the link, to effects on the spacecraft itself. SPARTA frames this whole epoch: it names the techniques you'll perform in the CTFs and the defenses that counter them.",
      ],
      technical: {
        title: "Bus vs. Payload, CCSDS, and the SPARTA Matrix",
        body: [
          "Knowing the parts tells you where to strike:\n- Bus (platform): power, attitude control, thermal, and the command & data handling (C&DH) computer that executes telecommands — controlling the bus can control the whole spacecraft (point it, drain power, disable it).\n- Payload: the mission (imaging sensor, transponder, science instrument) and its data — often the attacker's goal (steal/deny data) or a pivot.\n- Links use CCSDS standards (the space-industry protocol suite); telecommand and telemetry frames historically lacked authentication, though CCSDS now defines Space Data Link Security (SDLS) for authentication/encryption.",
          "SPARTA enumerates techniques across the kill chain — e.g., 'Eavesdrop' on the downlink, 'Replay' or 'Command Link Intrusion' on the uplink, 'Compromise Ground System,' 'Disable/Deny' the spacecraft. Defenders map controls to it (authenticated commanding via SDLS, ground-segment hardening, encryption, anomaly detection). This stage gives you the map; the rest of the epoch executes and defends specific SPARTA techniques.",
        ],
      },
      incident: {
        title: "Decades of Unauthenticated Commanding",
        when: "1960s–today",
        where: "Civil, commercial, and military space",
        impact: "Many spacecraft were designed and launched with little or no authentication on command links, leaving a long-lived, hard-to-fix exposure",
        body: [
          "For most of the space age, command and telemetry links relied on obscurity and the difficulty of building a powerful enough ground station, not on cryptography. Many satellites still operating today were designed with weak or no authentication on their telecommand links — and you cannot easily retrofit a satellite in orbit.",
          "Government reports (including U.S. GAO and academic studies) have repeatedly flagged that space systems lag terrestrial IT in cybersecurity, that commercial and small satellites often ship with minimal protections, and that the ground segment is frequently the weakest link. SPARTA and the push for SDLS, plus policies like the U.S. Space Policy Directive-5, are the response — but the installed base of long-lived, lightly-protected spacecraft is the enduring challenge this epoch explores.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ground Segment", sub: "mission control, ground stations", type: "victim" },
          { label: "Link Segment", sub: "uplink (commands) / downlink (telemetry)", type: "system" },
          { label: "Space Segment", sub: "bus (platform) + payload (mission)", type: "result" },
          { label: "SPARTA", sub: "tactics & techniques to attack/defend each", type: "attacker" },
        ],
      },
      timeline: [
        { year: 1957, event: "Sputnik — the space age begins; security is physics and obscurity, not crypto" },
        { year: 1982, event: "CCSDS standards formalize space data links (long without built-in security)" },
        { year: 2020, event: "U.S. Space Policy Directive-5 sets cybersecurity principles for space systems" },
        { year: 2022, event: "Aerospace Corp releases SPARTA, an ATT&CK-style matrix for spacecraft", highlight: true },
      ],
      keyTakeaways: [
        "A space mission has three segments: space (bus + payload), ground, and the link between them",
        "Spacecraft are uniquely hard to secure: no physical access, long lifetimes, old hardware, legacy unauthenticated protocols",
        "Controlling the bus's command & data handling can control the whole spacecraft; the payload holds the mission/data",
        "SPARTA is the ATT&CK-style framework for spacecraft tactics/techniques that frames this epoch",
      ],
      references: [
        { title: "SPARTA — Space Attack Research and Tactic Analysis", url: "https://sparta.aerospace.org/" },
        { title: "CCSDS (space data systems standards)", url: "https://public.ccsds.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-01-q1", type: "Core Idea", challenge: "Three parts.", text: "What are the three segments of a space mission?", options: ["Space (satellite), ground, and link", "Engine, wings, tail", "CPU, RAM, disk", "Buy, sell, hold"], correctIndex: 0, explanation: "Space, ground, and link segments each form an attack surface." },
        { id: "s2-01-q2", type: "Spacecraft", challenge: "Bus vs payload.", text: "What is the spacecraft 'bus'?", options: ["The platform (power, attitude, thermal, command & data handling) that runs the satellite", "The mission camera only", "A ground vehicle", "The launch rocket"], correctIndex: 0, explanation: "The bus is the housekeeping platform; the payload is the mission." },
        { id: "s2-01-q3", type: "Hard Problem", challenge: "Why it's tough.", text: "Why are spacecraft uniquely hard to secure?", options: ["No physical access after launch, long lifetimes, old hardware, and legacy unauthenticated links", "They're easy to reboot in person", "They use the newest CPUs", "They have no radios"], correctIndex: 0, explanation: "You can't touch or easily patch a satellite, and links were rarely authenticated." },
        { id: "s2-01-q4", type: "Protocol", challenge: "Space standards.", text: "What does CCSDS define?", options: ["The space-industry data-link standards (with SDLS for security)", "A tire standard", "A web framework", "A GPS receiver"], correctIndex: 0, explanation: "CCSDS standardizes space data links; SDLS adds authentication/encryption." },
        { id: "s2-01-q5", type: "Framework", challenge: "ATT&CK for space.", text: "What is SPARTA?", options: ["An ATT&CK-style matrix of spacecraft attack tactics and techniques", "A satellite model", "A rocket fuel", "A ground station brand"], correctIndex: 0, explanation: "SPARTA catalogs space-specific techniques to attack and defend." },
        { id: "s2-01-q6", type: "Target", challenge: "Own the bus.", text: "Why is controlling the bus's command & data handling so powerful?", options: ["It executes telecommands, so it can point, drain, or disable the whole spacecraft", "It only stores photos", "It controls the ground station", "It does nothing important"], correctIndex: 0, explanation: "The C&DH computer is the spacecraft's command executor." },
      ],
    },
  },

  // ─── s2-02: Hijacking the Command Uplink (CTF) ───────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The voice that commands a satellite", location: "The uplink to orbit", era: "Modern", emoji: "📡" },
    id: "s2-02",
    order: 2,
    title: "Hijacking the Uplink",
    subtitle: "Telecommanding a Satellite You Don't Own",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-s2-uplink", name: "Telecommand Pirate", emoji: "📡" },
    challengeType: "quiz",
    info: {
      tagline: "A satellite does what its telecommands say. If those commands aren't authenticated, then whoever can transmit on the right frequency with enough power can tell the satellite what to do — point its antenna, fire a thruster, or shut down. The uplink is the crown jewel.",
      year: 2024,
      overview: [
        "The uplink carries telecommands (TC) from the ground to the spacecraft's command & data handling computer. In the SPARTA model this is 'Command Link Intrusion' — and it's the highest-impact attack, because commands directly control the spacecraft's behavior.",
        "Historically, many command links had weak or no authentication: the protection was the difficulty of building a transmitter and dish powerful enough to close the link, plus knowing the satellite's frequencies and command formats. That's obscurity and physics, not security — and software-defined radios, published frequency data, and leaked command dictionaries erode it.",
        "Attacks on the uplink include replaying captured legitimate commands, injecting forged commands (if formats are known and unauthenticated), and overpowering the legitimate ground station's signal. The defense is authenticated commanding — CCSDS SDLS adds message authentication so the spacecraft rejects commands without a valid cryptographic tag — plus encryption, ground-station access control, and anomaly detection. In this challenge you'll find the uplink and send a forged telecommand.",
      ],
      technical: {
        title: "Replay, Injection, and SDLS Authentication",
        body: [
          "The uplink attack path:\n- Reconnaissance: identify the satellite's uplink frequency, modulation, and command structure (often discoverable from public databases, regulatory filings, or captured traffic).\n- Replay: re-transmit a captured valid telecommand — effective when there's no freshness/anti-replay protection.\n- Injection: craft and send a forged command if the format is known and there's no authentication, directly controlling the spacecraft.\n- Overpower: transmit a stronger signal than the legitimate ground station to win the link.",
          "Authenticated commanding closes this: CCSDS SDLS (Space Data Link Security) applies message authentication codes (and optional encryption) with anti-replay sequencing, so the spacecraft executes only commands bearing a valid tag from an authorized key. Combined with strict ground-station/key management, encryption of the link, and telemetry monitoring for unexpected state changes, it turns the uplink from a trust-the-transmitter channel into a verified one. In this challenge you'll scan for the uplink, then send a telecommand the (unauthenticated) target accepts.",
        ],
      },
      incident: {
        title: "From Hacked Broadcasts to Commandeered Birds",
        when: "1986–today",
        where: "Global satellite operations",
        impact: "Demonstrations and incidents — from signal hijacks to research commandeering satellites — show unauthenticated uplinks are a real risk",
        body: [
          "Satellite signal hijacking has a long history: the 1986 'Captain Midnight' incident saw an individual overpower HBO's satellite feed with his own transmission, and various transponder/broadcast hijackings followed — proving that with enough power and the right frequency, an outsider can take a link. Command-link risks are the more dangerous cousin.",
          "Security research and government assessments have shown that some satellites can be located and their links characterized from public data, and that weakly-protected command links are vulnerable to replay or injection. Reports also note adversary interest in commandeering or disabling satellites. The consistent message: the uplink is the highest-value target, and only cryptographic authentication — not obscurity — actually protects it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker Transmitter", sub: "SDR + dish on the uplink freq", type: "attacker" },
          { label: "Forged / Replayed TC", sub: "unauthenticated telecommand", type: "system" },
          { label: "Spacecraft C&DH", sub: "executes the command", type: "victim" },
          { label: "Spacecraft Effect", sub: "repoint, thrust, or shut down", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "'Captain Midnight' overpowers an HBO satellite feed, proving link takeover" },
        { year: 1999, event: "Reported interference/intrusion concerns around control of satellites emerge" },
        { year: 2010, event: "CCSDS SDLS work matures to add authentication/encryption to space links", highlight: true },
        { year: 2023, event: "Research shows satellites locatable and links characterizable from public data" },
      ],
      keyTakeaways: [
        "The uplink carries telecommands that directly control the spacecraft — the highest-impact target (SPARTA 'Command Link Intrusion')",
        "Many links relied on obscurity/physics, not crypto, so they're vulnerable to replay, injection, or overpowering",
        "Authenticated commanding (CCSDS SDLS) makes the spacecraft reject commands without a valid cryptographic tag",
        "Defense also needs encryption, ground-station/key management, and telemetry anomaly monitoring",
      ],
      references: [
        { title: "CCSDS Space Data Link Security (SDLS)", url: "https://public.ccsds.org/Pubs/355x0b1.pdf" },
        { title: "SPARTA — Command Link Intrusion technique", url: "https://sparta.aerospace.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-02-q1", type: "Core Idea", challenge: "Top target.", text: "Why is the command uplink the highest-impact attack surface?", options: ["Telecommands directly control the spacecraft's behavior", "It carries only photos", "It's the ground station's coffee maker", "It does nothing"], correctIndex: 0, explanation: "Commands control the bus, so the uplink controls the satellite." },
        { id: "s2-02-q2", type: "Old Security", challenge: "Obscurity.", text: "What protected many historic command links?", options: ["The difficulty of building a transmitter/dish and knowing the formats — obscurity, not crypto", "Strong authentication", "Quantum encryption", "Multi-factor auth"], correctIndex: 0, explanation: "Physics and obscurity, which SDRs and public data erode." },
        { id: "s2-02-q3", type: "Attack", challenge: "Reuse a command.", text: "What is a replay attack on the uplink?", options: ["Re-transmitting a captured valid telecommand when there's no anti-replay protection", "Encrypting the link", "Adding a new satellite", "Painting the dish"], correctIndex: 0, explanation: "Without freshness checks, captured commands can be replayed." },
        { id: "s2-02-q4", type: "Defense", challenge: "Authenticate it.", text: "What does CCSDS SDLS provide?", options: ["Message authentication (and optional encryption) with anti-replay for space links", "Faster downlink only", "More fuel", "A bigger antenna"], correctIndex: 0, explanation: "SDLS makes the spacecraft reject unauthenticated/replayed commands." },
        { id: "s2-02-q5", type: "Recon", challenge: "Find the link.", text: "Where might an attacker learn a satellite's uplink details?", options: ["Public databases, regulatory filings, or captured traffic", "Only from the manufacturer in person", "Nowhere — it's secret forever", "From the satellite's paint"], correctIndex: 0, explanation: "Much link info is discoverable from public sources." },
        { id: "s2-02-q6", type: "History", challenge: "Proven takeover.", text: "What did the 1986 'Captain Midnight' incident show?", options: ["An outsider can overpower a satellite feed with enough power on the right frequency", "Satellites can't be jammed", "Uplinks are always encrypted", "Only governments have transmitters"], correctIndex: 0, explanation: "It demonstrated link takeover by overpowering the signal." },
      ],
    },
  },

  // ─── s2-03: Eavesdropping the Downlink (CTF) ─────────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The data raining down from orbit", location: "Satellite downlinks overhead", era: "Modern", emoji: "🛰️" },
    id: "s2-03",
    order: 3,
    title: "Eavesdropping the Downlink",
    subtitle: "Reading Satellite Data Anyone Can Receive",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-s2-downlink", name: "Downlink Listener", emoji: "🛰️" },
    challengeType: "quiz",
    info: {
      tagline: "A satellite's downlink sprays data over a huge footprint on the ground — and anyone under it with a dish can listen. When that data isn't encrypted (and astonishingly often it isn't), eavesdropping is as simple as tuning in.",
      year: 2024,
      overview: [
        "Satellites broadcast their telemetry and mission data on the downlink, which covers a wide geographic footprint. Unlike a wired or point-to-point link, you can't limit who receives it — physics delivers the signal to everyone in the beam. Confidentiality therefore depends entirely on encryption.",
        "The recurring, shocking finding is how much satellite traffic is unencrypted. Researchers have intercepted everything from VSAT and in-flight Wi-Fi backhaul to ship and industrial SCADA traffic, GRE-tunneled corporate data, and more — all in the clear, readable with a modest satellite dish and a software-defined radio or DVB tuner card costing a few hundred dollars.",
        "For the spacecraft itself, an unencrypted telemetry downlink leaks its state and operations to an adversary (useful reconnaissance for an uplink attack). For payload/data services, it leaks customers' actual data. The defense is straightforward in principle and lagging in practice: encrypt the downlink (link-layer via SDLS and/or end-to-end at the application). In this challenge you'll tune a downlink and decode a cleartext stream.",
      ],
      technical: {
        title: "Wide Footprints, DVB, and the Encryption Gap",
        body: [
          "Why eavesdropping is easy:\n- Broadcast physics: the downlink reaches the whole footprint, so reception is undetectable and unpreventable — the sender can't even tell you're listening.\n- Cheap gear: many satellites use standards like DVB-S/S2 (the same as satellite TV), so off-the-shelf tuner cards plus open-source tools can lock onto and demodulate the stream.\n- No encryption: a lot of VSAT and satellite-internet traffic historically shipped in the clear, exposing user data and protocols.",
          "Defenses are about confidentiality and discipline: encrypt telemetry and mission data (SDLS at the link layer, TLS/VPN/end-to-end above it), assume the downlink is public, and minimize sensitive data in telemetry. The asymmetry is stark — the operator must encrypt everything because the attacker needs only a dish and patience. In this challenge you'll tune to a downlink frequency and decode an unencrypted data stream to recover its contents.",
        ],
      },
      incident: {
        title: "Intercepting the Sky on a Budget",
        when: "2010–today",
        where: "Global satellite footprints",
        impact: "Researchers repeatedly intercepted sensitive unencrypted satellite traffic — corporate, maritime, aviation, and industrial — with cheap equipment",
        body: [
          "A line of research has shown how exposed satellite downlinks are. Work on VSAT and satellite-broadband interception (notably by James Pavur and others, presented at Black Hat/DEF CON around 2020) demonstrated capturing sensitive in-the-clear traffic — including in-flight connectivity, maritime communications, and corporate data — using roughly $300 of home-satellite-TV equipment.",
          "Earlier and ongoing work intercepted Iridium pager/voice traffic and other satellite links. The throughline is consistent: the downlink is a broadcast nobody can stop you from receiving, and far too much of it is unencrypted. The fix isn't exotic — it's applying the same encryption norms we expect on the ground to the sky.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Satellite Downlink", sub: "broadcast over a wide footprint", type: "system" },
          { label: "Cheap Dish + SDR/DVB", sub: "anyone in the footprint receives", type: "attacker" },
          { label: "Unencrypted Stream", sub: "telemetry / customer data in clear", type: "victim" },
          { label: "Data Exposed", sub: "recon or stolen data", type: "result" },
        ],
      },
      timeline: [
        { year: 2006, event: "Researchers intercept Iridium and other satellite communications" },
        { year: 2010, event: "Studies highlight widespread unencrypted VSAT traffic" },
        { year: 2020, event: "~$300 of gear shown to intercept sensitive in-the-clear satellite traffic", highlight: true },
        { year: 2024, event: "Encryption adoption improves but cleartext downlinks persist across the installed base" },
      ],
      keyTakeaways: [
        "Downlinks broadcast over a wide footprint — anyone underneath can receive them undetectably",
        "Much satellite traffic is unencrypted and decodable with cheap DVB/SDR gear (~$300)",
        "Unencrypted telemetry leaks spacecraft state (recon); unencrypted payload leaks customer data",
        "Defense is encryption (SDLS link-layer and/or end-to-end) and assuming the downlink is public",
      ],
      references: [
        { title: "Pavur et al. — satellite eavesdropping research", url: "https://www.usenix.org/conference/usenixsecurity20/presentation/pavur" },
        { title: "DVB-S2 (satellite broadcast standard)", url: "https://en.wikipedia.org/wiki/DVB-S2" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-03-q1", type: "Core Idea", challenge: "Broadcast.", text: "Why can't you control who receives a downlink?", options: ["It broadcasts over a wide footprint — physics delivers it to everyone in the beam", "It's sent over a private cable", "Only the operator's dish works", "It's encrypted by law"], correctIndex: 0, explanation: "A downlink is a broadcast; confidentiality depends on encryption." },
        { id: "s2-03-q2", type: "Finding", challenge: "Shockingly common.", text: "What did satellite-interception research repeatedly find?", options: ["Lots of sensitive satellite traffic is unencrypted and easy to read", "Everything is perfectly encrypted", "Downlinks don't carry data", "Only governments can listen"], correctIndex: 0, explanation: "Much VSAT/satellite traffic shipped in the clear." },
        { id: "s2-03-q3", type: "Gear", challenge: "Cheap.", text: "What equipment can intercept many downlinks?", options: ["A modest dish plus an SDR or DVB tuner card (~$300)", "A multimillion-dollar facility only", "A quantum computer", "Nothing can"], correctIndex: 0, explanation: "Off-the-shelf satellite-TV-grade gear is often enough." },
        { id: "s2-03-q4", type: "Impact", challenge: "Telemetry leak.", text: "Why is an unencrypted telemetry downlink dangerous?", options: ["It leaks the spacecraft's state/operations — useful recon for an uplink attack", "It improves battery life", "It speeds up commands", "It has no impact"], correctIndex: 0, explanation: "Telemetry reveals the satellite's condition and behavior." },
        { id: "s2-03-q5", type: "Stealth", challenge: "Undetectable.", text: "Why can't the operator tell you're eavesdropping?", options: ["Receiving a broadcast is passive and leaves no signal", "The dish beeps loudly", "It sends a receipt", "It requires a login"], correctIndex: 0, explanation: "Passive reception is undetectable to the sender." },
        { id: "s2-03-q6", type: "Defense", challenge: "Just encrypt.", text: "What's the defense for downlink eavesdropping?", options: ["Encrypt telemetry and data (SDLS and/or end-to-end) and treat the downlink as public", "Broadcast louder", "Use a smaller footprint only", "Hope nobody listens"], correctIndex: 0, explanation: "Encryption is the only real protection for a broadcast." },
      ],
    },
  },

  // ─── s2-04: GNSS Spoofing & the Timing Backbone (CTF) ────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The clock in the sky", location: "GPS/GNSS satellites and everything below", era: "Modern", emoji: "🕰️" },
    id: "s2-04",
    order: 4,
    title: "GNSS: Spoofing Time Itself",
    subtitle: "The Invisible Utility Holding Up Modern Life",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-s2-gnss", name: "Time Bandit", emoji: "🕰️" },
    challengeType: "quiz",
    info: {
      tagline: "GPS is famous for location, but its deeper gift is time: a free, ultra-precise clock that synchronizes power grids, financial trades, and cellular networks. Spoof that clock and you don't just move a dot on a map — you can desynchronize critical infrastructure.",
      year: 2024,
      overview: [
        "Global Navigation Satellite Systems (GPS, Galileo, GLONASS, BeiDou) broadcast precise time and orbit data from space; receivers use signals from several satellites to compute Position, Navigation, and Timing (PNT). The 'T' is under-appreciated: countless systems rely on GPS-disciplined clocks for synchronization, making it a hidden backbone utility.",
        "Civilian GNSS signals are extremely weak (received below the noise floor) and unauthenticated, so they're vulnerable to jamming (denial of PNT) and spoofing (feeding false position or, crucially, false time). A timing spoof can be subtle and dangerous: drifting a receiver's clock can disrupt the synchronization that power grids (phasor measurement), telecom networks, and financial timestamping depend on.",
        "This is the space-infrastructure angle on the GNSS spoofing you saw applied to robots: here the target is the PNT utility itself and the critical infrastructure that trusts it. Defenses include authenticated signals (Galileo OSNMA), multi-constellation and multi-frequency receivers, jamming/spoofing detection, and resilient timing backups (terrestrial eLORAN, holdover atomic/oscillator clocks). In this challenge you'll spoof GNSS and shift a receiver's time.",
      ],
      technical: {
        title: "PNT, Timing Attacks, and Resilient Time",
        body: [
          "The timing dimension makes GNSS attacks systemic:\n- Position spoofing misdirects navigation (ships, drones, vehicles).\n- Time spoofing shifts the clock a receiver derives from GNSS; because grids, 5G, and finance synchronize to GPS time, a coordinated or stealthy time shift can cause desynchronization, faults, or rejected transactions.\n- Jamming denies PNT entirely, which is detectable but still disruptive.",
          "Resilience is the goal, since you can't easily 'patch' the constellation:\n- Authentication: Galileo OSNMA cryptographically authenticates the navigation message so spoofed signals are detectable.\n- Diversity: use multiple constellations/frequencies and antijam antennas to make spoofing/jamming harder.\n- Backups: maintain independent time sources (atomic clock holdover, terrestrial eLORAN, network time with care) so critical systems survive GNSS loss.\n- Detection: monitor for implausible jumps in position/time and signal anomalies.\nIn this challenge you'll transmit a spoofed GNSS signal and walk the target receiver's clock off true time.",
        ],
      },
      incident: {
        title: "Jammed Skies and Drifted Clocks",
        when: "2012–today",
        where: "Conflict zones, ports, and infrastructure worldwide",
        impact: "Widespread GNSS jamming/spoofing affected aviation and shipping, and a 2016 GPS time anomaly disrupted systems globally — proving PNT is a fragile backbone",
        body: [
          "GNSS interference has become routine in some regions: large-scale jamming and spoofing have affected aviation navigation and disrupted shipping, with vessels appearing to 'jump' location due to spoofing. These incidents underscore that the constellation overhead is contested and trusted by too many systems blindly.",
          "Timing fragility was vividly shown in January 2016, when a GPS ground-system error introduced a small timing offset into the constellation; the brief anomaly caused failures and alarms in telecom and other systems worldwide that depended on GPS time. The lesson is that GNSS is critical timing infrastructure, its civilian signals are spoofable and jammable, and resilience (authentication, diversity, and independent backups) is essential.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Spoofing Transmitter", sub: "counterfeit GNSS signals", type: "attacker" },
          { label: "Receiver PNT", sub: "computes false position AND time", type: "victim" },
          { label: "Time Shift", sub: "clock drifts off true GPS time", type: "system" },
          { label: "Infra Desync", sub: "grid/telecom/finance disruption", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "GNSS spoofing of a drone publicly demonstrated (UT Austin)" },
        { year: 2016, event: "A GPS time anomaly disrupts telecom and other GPS-timed systems worldwide", highlight: true },
        { year: 2020, event: "Galileo OSNMA begins providing authenticated navigation signals" },
        { year: 2023, event: "Widespread regional GNSS jamming/spoofing affects aviation and shipping" },
      ],
      keyTakeaways: [
        "GNSS provides Position, Navigation, and Timing; the timing backbone synchronizes grids, telecom, and finance",
        "Civilian signals are weak and unauthenticated — vulnerable to jamming (denial) and spoofing (false position/time)",
        "A subtle time spoof can desynchronize critical infrastructure, not just move a location",
        "Resilience: authenticated signals (OSNMA), multi-constellation/frequency, spoof detection, and independent time backups",
      ],
      references: [
        { title: "GNSS / GPS (overview)", url: "https://en.wikipedia.org/wiki/Satellite_navigation" },
        { title: "2016 GPS timing anomaly (background)", url: "https://www.gps.gov/governance/advisory/meetings/2016-06/" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-04-q1", type: "Core Idea", challenge: "Not just maps.", text: "Beyond location, what critical service does GNSS provide?", options: ["Ultra-precise time that synchronizes grids, telecom, and finance", "Free internet", "Weather control", "Satellite TV"], correctIndex: 0, explanation: "The 'T' in PNT is a hidden backbone utility." },
        { id: "s2-04-q2", type: "Weakness", challenge: "Faint and open.", text: "Why is civilian GNSS vulnerable?", options: ["Signals are very weak and unauthenticated — jammable and spoofable", "They're encrypted and strong", "They require a password", "They come over fiber"], correctIndex: 0, explanation: "Weak, unauthenticated signals enable jamming and spoofing." },
        { id: "s2-04-q3", type: "Timing", challenge: "Subtle danger.", text: "Why is time spoofing especially insidious?", options: ["Drifting the clock can desynchronize infrastructure that trusts GPS time", "It only changes a map dot", "It charges the battery", "It has no systemic effect"], correctIndex: 0, explanation: "Grids, 5G, and finance depend on GPS-derived time." },
        { id: "s2-04-q4", type: "History", challenge: "2016.", text: "What did the 2016 GPS time anomaly demonstrate?", options: ["A small timing error in the constellation disrupted GPS-timed systems worldwide", "GPS is unbreakable", "Time doesn't matter", "Only one device failed"], correctIndex: 0, explanation: "It showed how fragile and widespread GPS-timing dependence is." },
        { id: "s2-04-q5", type: "Authentication", challenge: "Verify space.", text: "What authenticates GNSS signals?", options: ["Galileo OSNMA (navigation message authentication)", "A longer antenna", "More satellites only", "A faster CPU"], correctIndex: 0, explanation: "OSNMA cryptographically authenticates the nav message." },
        { id: "s2-04-q6", type: "Resilience", challenge: "Backups.", text: "How do you make timing resilient to GNSS loss?", options: ["Independent backups (atomic-clock holdover, eLORAN) plus multi-constellation and spoof detection", "Trust GPS alone", "Remove all clocks", "Use one frequency only"], correctIndex: 0, explanation: "Diversity and independent time sources survive GNSS disruption." },
      ],
    },
  },

  // ─── s2-05: Jamming & Anti-Jam (CTF) ─────────────────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The war of noise over the airwaves", location: "Contested skies", era: "Modern", emoji: "📶" },
    id: "s2-05",
    order: 5,
    title: "Jamming & Anti-Jam",
    subtitle: "Denying the Link — and Fighting Back",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-s2-jam", name: "Spectrum Warrior", emoji: "📶" },
    challengeType: "quiz",
    info: {
      tagline: "The simplest attack on a satellite needs no hacking at all: drown its link in noise. Jamming is brute-force electronic warfare against the one thing a satellite can't do without — its radio connection. The countermeasures are a quiet arms race in the spectrum.",
      year: 2024,
      overview: [
        "Jamming transmits interfering RF to overwhelm a legitimate signal, denying communication. Against satellites it comes in two flavors: uplink jamming (aimed at the satellite's receiver, which can disrupt service over the whole footprint) and downlink jamming (aimed at ground receivers in a local area). A related attack is intentional interference or 'transponder hijacking' on the satellite itself.",
        "Jamming is attractive because it's low-skill and deniable relative to true intrusion: you don't need keys or command formats, just power on the right frequency. It's a denial-of-availability attack — and for safety- or mission-critical links (navigation, military comms, emergency services), denial alone is a serious effect. It has become common in conflict zones.",
        "Anti-jam techniques are the defense, drawn from electronic warfare:\n- Spread spectrum (frequency hopping / DSSS) spreads the signal so narrowband jamming is ineffective.\n- Directional and nulling antennas (phased arrays) steer gain toward the satellite and a null toward the jammer.\n- Power control, beam-forming, and frequency agility help ride through interference.\nMega-constellations add resilience through sheer numbers and diversity. In this challenge you'll sweep a band to find a link and jam its uplink, illustrating the attack anti-jam must defeat.",
      ],
      technical: {
        title: "Uplink vs Downlink Jamming, Spread Spectrum, and Nulling",
        body: [
          "The attack and defense are an RF duel:\n- Uplink jamming hits the satellite's receiver; because the satellite rebroadcasts over its footprint, jamming the uplink can deny a wide area, making it high-impact.\n- Downlink jamming is local — it only affects receivers near the jammer.\n- Spoofing-adjacent: a jammer that also injects can do more, but pure jamming is just denial.",
          "Anti-jam stacks countermeasures: frequency-hopping spread spectrum makes the signal a moving target; direct-sequence spread spectrum buries it under processing gain; adaptive phased-array antennas place a spatial null on the jammer's direction; and frequency/power agility plus protected (often military) waveforms add margin. Operationally, geolocating the jammer (via the satellite or multiple ground stations) enables a real-world response. Mega-constellations like Starlink demonstrated rapid software-side resilience to jamming attempts. In this challenge you'll find a target uplink and jam it, then see which anti-jam measures would defeat you.",
        ],
      },
      incident: {
        title: "Jamming Goes Mainstream in Conflict",
        when: "1990s–today",
        where: "Conflict zones and contested regions",
        impact: "Satellite and GNSS jamming became a routine tool of electronic warfare, disrupting comms, navigation, and broadcasts",
        body: [
          "Deliberate satellite jamming has a long history — states jamming broadcast satellites to censor content, and militaries jamming communications and navigation. In recent conflicts, GNSS and SATCOM jamming became widespread and routine, disrupting drones, aircraft navigation, and communications across whole regions.",
          "A notable counter-example of resilience: during the 2022 conflict in Ukraine, Starlink terminals faced jamming attempts, and the operator pushed software updates that improved anti-jam performance quickly — showing how a software-defined, large constellation can adapt. The takeaway is that availability is a first-class security property in space: jamming is easy and common, so anti-jam design and constellation resilience are essential, not optional.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Jammer", sub: "high-power RF on the link frequency", type: "attacker" },
          { label: "Uplink Receiver", sub: "swamped by noise", type: "victim" },
          { label: "Denied Footprint", sub: "service lost over the area", type: "system" },
          { label: "Anti-Jam", sub: "spread spectrum, nulling, agility", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "States jam broadcast satellites to censor content" },
        { year: 2003, event: "Military SATCOM/GNSS jamming features in modern conflicts" },
        { year: 2022, event: "Starlink rapidly pushes anti-jam software updates under jamming in Ukraine", highlight: true },
        { year: 2024, event: "Widespread regional GNSS/SATCOM jamming makes anti-jam a baseline requirement" },
      ],
      keyTakeaways: [
        "Jamming denies a satellite link with brute-force RF — no keys or intrusion needed",
        "Uplink jamming can deny a whole footprint; downlink jamming is local",
        "Availability is a first-class space-security property; jamming is easy, deniable, and now routine in conflict",
        "Anti-jam: spread spectrum, nulling phased arrays, frequency/power agility, and constellation resilience",
      ],
      references: [
        { title: "Radio jamming (overview)", url: "https://en.wikipedia.org/wiki/Radio_jamming" },
        { title: "Spread spectrum (anti-jam)", url: "https://en.wikipedia.org/wiki/Spread_spectrum" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-05-q1", type: "Core Idea", challenge: "Brute force.", text: "What is jamming?", options: ["Transmitting interfering RF to overwhelm a legitimate signal and deny communication", "Stealing the encryption key", "Reprogramming the satellite", "Painting the dish"], correctIndex: 0, explanation: "Jamming is a denial-of-availability attack via RF noise." },
        { id: "s2-05-q2", type: "Why Easy", challenge: "Low skill.", text: "Why is jamming attractive to attackers?", options: ["It needs only power on the right frequency — no keys or command formats", "It requires breaking encryption", "It needs physical access to the satellite", "It's impossible"], correctIndex: 0, explanation: "Jamming bypasses the need for any intrusion." },
        { id: "s2-05-q3", type: "Uplink", challenge: "Wide impact.", text: "Why is uplink jamming high-impact?", options: ["It hits the satellite's receiver, denying service over the whole footprint", "It only affects one house", "It improves the link", "It charges the satellite"], correctIndex: 0, explanation: "Disrupting the uplink can deny a wide area." },
        { id: "s2-05-q4", type: "Anti-Jam", challenge: "Moving target.", text: "How does spread spectrum resist jamming?", options: ["It spreads/hops the signal so narrowband jamming can't cover it", "It broadcasts louder only", "It encrypts the payload", "It uses one fixed frequency"], correctIndex: 0, explanation: "Frequency hopping/DSSS makes the signal hard to jam." },
        { id: "s2-05-q5", type: "Antenna", challenge: "Aim the null.", text: "What do adaptive phased-array antennas do against jammers?", options: ["Steer gain toward the satellite and a null toward the jammer", "Increase fuel", "Add encryption", "Change the orbit"], correctIndex: 0, explanation: "Spatial nulling suppresses the jammer's direction." },
        { id: "s2-05-q6", type: "Resilience", challenge: "Adapt fast.", text: "What did Starlink demonstrate under jamming in 2022?", options: ["A software-defined, large constellation can rapidly push anti-jam improvements", "Jamming is unstoppable", "Satellites can't adapt", "Constellations are irrelevant"], correctIndex: 0, explanation: "Software updates and scale provided quick resilience." },
      ],
    },
  },

  // ─── s2-06: Breaching the Ground Segment (CTF) ───────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "The real weakest link", location: "Mission control and ground networks", era: "Modern", emoji: "🖧" },
    id: "s2-06",
    order: 6,
    title: "Breaching the Ground Segment",
    subtitle: "Why You Hack the Satellite from the Ground",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-s2-ground", name: "Ground Control Ghost", emoji: "🖧" },
    challengeType: "quiz",
    info: {
      tagline: "You almost never need a giant dish to attack a satellite. The ground segment — mission control, ground stations, the operations IT — already has full authority over the spacecraft, and it's an ordinary network you can phish, exploit, or supply-chain your way into. The biggest space attack in history hit the ground.",
      year: 2024,
      overview: [
        "The ground segment operates the spacecraft: it generates the legitimate, authenticated telecommands, receives and processes telemetry/data, and runs the IT (servers, networks, software, vendor connections) that mission control depends on. Crucially, it already holds the keys and authority — so compromising it grants control without ever fighting the link's cryptography.",
        "That makes the ground segment the most attractive and, repeatedly, the weakest link. It's a terrestrial network subject to every familiar threat: phishing and credential theft, unpatched servers, exposed remote access, weak segmentation, and supply-chain compromise of ground software or modems. The space-specific defenses (SDLS, encryption) don't help if the attacker is operating from inside mission control.",
        "The defining example is the 2022 Viasat KA-SAT attack: at the start of Russia's invasion of Ukraine, attackers compromised the ground management network and pushed a malicious update that wiped tens of thousands of satellite modems, knocking users offline across Europe — including wind-turbine monitoring. They didn't touch the satellite; they owned the ground. In this challenge you'll breach a ground station and push a command to the spacecraft.",
      ],
      technical: {
        title: "Authority Without the Link, and the Viasat Model",
        body: [
          "Why ground-first is the standard play (SPARTA 'Compromise Ground System'):\n- The ground segment can already issue authenticated commands, so a foothold there inherits full spacecraft authority.\n- It's reachable by normal means — phishing, VPN/remote-access flaws, unpatched systems, weak segmentation between IT and operations, and vendor/supply-chain access.\n- From inside, an attacker can command the spacecraft, manipulate or deny telemetry/data, or (as with Viasat) push destructive updates to ground equipment.",
          "Defense is mostly excellent terrestrial security applied to a high-stakes target, plus space-specifics: strong identity/MFA and least privilege for operators, network segmentation isolating the operations network, patching and hardening, monitoring for anomalous commanding, secure software-update practices for ground equipment, supply-chain assurance, and key protection (HSMs) so command-authentication keys can't be stolen. Treating mission control like critical infrastructure — because it is — is the lesson. In this challenge you'll compromise the ground station, then use its authority to command the satellite.",
        ],
      },
      incident: {
        title: "Viasat KA-SAT, 2022: The Ground Fell First",
        when: "February 24, 2022",
        where: "Europe (KA-SAT network)",
        impact: "A ground-network compromise wiped tens of thousands of satellite modems, causing a massive cross-border outage — the largest known cyberattack on a space system",
        body: [
          "As Russia invaded Ukraine, attackers (attributed by Western governments to Russia) breached the management network of Viasat's KA-SAT satellite-broadband service via a misconfigured VPN appliance, then pushed malicious commands/wiper firmware ('AcidRain') that bricked tens of thousands of modems across Europe. Connectivity dropped for users in multiple countries, and remote monitoring of thousands of German wind turbines went dark.",
          "The satellite itself was never touched — the entire effect came from compromising the ground segment and abusing its legitimate authority over the user terminals. Viasat KA-SAT is the canonical demonstration that the ground is the soft, high-leverage target, and that space-system security is, in large part, ordinary (but rigorous) IT and supply-chain security at mission control.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Phish / VPN flaw / supply chain", sub: "ordinary network intrusion", type: "attacker" },
          { label: "Ground Segment", sub: "mission control holds the keys", type: "victim" },
          { label: "Legitimate Authority", sub: "issue authenticated commands", type: "system" },
          { label: "Spacecraft / Terminals", sub: "commanded or wiped (Viasat)", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "ROSAT satellite incident later linked (debated) to a ground-system intrusion" },
        { year: 2011, event: "U.S. reports of interference with Landsat/Terra satellites via ground systems" },
        { year: 2022, event: "Viasat KA-SAT: ground-network breach wipes tens of thousands of modems", highlight: true },
        { year: 2023, event: "Space-system guidance emphasizes ground-segment and supply-chain security" },
      ],
      keyTakeaways: [
        "The ground segment already holds the keys and authority — compromising it controls the spacecraft without fighting the link",
        "It's an ordinary network: phishing, VPN/remote-access flaws, unpatched systems, weak segmentation, and supply chain",
        "Viasat KA-SAT (2022) wiped tens of thousands of modems via a ground-network breach — the satellite was never touched",
        "Defense is rigorous terrestrial security (MFA, segmentation, patching, monitoring, supply-chain, HSM key protection) at mission control",
      ],
      references: [
        { title: "Viasat KA-SAT cyberattack (2022)", url: "https://en.wikipedia.org/wiki/Viasat_(American_company)#2022_cyberattack" },
        { title: "SPARTA — Compromise Ground System", url: "https://sparta.aerospace.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-06-q1", type: "Core Idea", challenge: "Weakest link.", text: "Why is the ground segment the most attractive target?", options: ["It already holds the keys/authority to command the spacecraft", "It has the biggest antenna", "It's in orbit", "It can't be reached"], correctIndex: 0, explanation: "Compromising the ground inherits full spacecraft authority." },
        { id: "s2-06-q2", type: "Access", challenge: "Ordinary ways in.", text: "How is the ground segment typically breached?", options: ["Phishing, VPN/remote-access flaws, unpatched systems, and supply chain", "By breaking the satellite's crypto", "By launching a rocket", "It can't be breached"], correctIndex: 0, explanation: "It's a normal network with normal weaknesses." },
        { id: "s2-06-q3", type: "Viasat", challenge: "The big one.", text: "What happened in the 2022 Viasat KA-SAT attack?", options: ["A ground-network breach pushed wiper firmware that bricked tens of thousands of modems", "A satellite exploded", "A solar flare hit", "Nothing happened"], correctIndex: 0, explanation: "Ground compromise + abused authority wiped user terminals." },
        { id: "s2-06-q4", type: "Insight", challenge: "Crypto can't help.", text: "Why don't SDLS/encryption stop a ground-segment attack?", options: ["The attacker operates from inside mission control, which legitimately holds the keys", "Encryption is illegal", "SDLS only works in space", "They do stop it completely"], correctIndex: 0, explanation: "Authority from inside bypasses link cryptography." },
        { id: "s2-06-q5", type: "Collateral", challenge: "Wide effect.", text: "What collateral did the Viasat attack cause?", options: ["Cross-border outages, including loss of remote monitoring for thousands of wind turbines", "Only one user affected", "Improved service", "A satellite repaint"], correctIndex: 0, explanation: "The outage spanned countries and critical monitoring." },
        { id: "s2-06-q6", type: "Defense", challenge: "Protect the ground.", text: "How do you defend the ground segment?", options: ["Rigorous IT security: MFA, segmentation, patching, monitoring, supply-chain assurance, HSM key protection", "Leave the VPN open", "Share operator passwords", "Disable logging"], correctIndex: 0, explanation: "Treat mission control as the critical infrastructure it is." },
      ],
    },
  },

  // ─── s2-07: CubeSats & Mega-Constellations (Quiz) ────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "Space, democratized", location: "Low Earth orbit, by the thousands", era: "Modern", emoji: "🛰️" },
    id: "s2-07",
    order: 7,
    title: "CubeSats & Mega-Constellations",
    subtitle: "Cheap, Numerous, and Often Insecure",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-s2-cubesat", name: "Constellation Cartographer", emoji: "🛰️" },
    challengeType: "quiz",
    info: {
      tagline: "Space used to mean billion-dollar satellites built by superpowers. Now a university or startup can put a shoebox-sized CubeSat in orbit, and companies fly thousands of small satellites at once. Cheaper access is wonderful — and it brought commodity parts, tight budgets, and security as an afterthought to orbit at scale.",
      year: 2024,
      overview: [
        "CubeSats are small, standardized satellites (built from 10 cm 'units') that dramatically lowered the cost of reaching orbit, enabling universities, startups, and developing nations to fly missions. Mega-constellations (Starlink, OneWeb, planned others) take the small-satellite idea to thousands of mass-produced spacecraft providing global services.",
        "Affordability comes with security trade-offs:\n- Commercial off-the-shelf (COTS) parts and open-source flight software are common, inheriting known vulnerabilities and lacking hardened security.\n- Tight budgets and short schedules often deprioritize security; many smallsats historically flew with unauthenticated command links and minimal protection.\n- Standardization means a vulnerability in a popular bus, radio, or framework can affect many missions.",
        "Scale cuts both ways. A mega-constellation is more resilient to losing any single satellite (good for availability), but it's also a vast, homogeneous attack surface where a systemic flaw — in the ground/management system, the common software image, or the update mechanism — could affect enormous numbers of spacecraft (the Viasat lesson at constellation scale). Security research like the 'Hack-A-Sat' competitions and demonstrated CubeSat takeovers exist precisely to raise the floor.",
      ],
      technical: {
        title: "COTS Risk, Homogeneity, and Raising the Floor",
        body: [
          "The smallsat risk profile:\n- Inheritance: COTS components and open frameworks bring terrestrial vulnerabilities to orbit; if the command link is unauthenticated, the earlier uplink attacks apply directly.\n- Homogeneity: mass production means many identical targets — exploit one design, scale to many — and a compromised common software/update pipeline is catastrophic.\n- Operations: small teams and outsourced ground services can mean weaker ground security, the actual soft spot.",
          "Raising the floor means applying real engineering: authenticated commanding (SDLS) even on small budgets, encrypted links, secure boot and signed updates on the flight software, hardened and segmented ground systems, and supply-chain scrutiny of buses/radios/software. Initiatives like the U.S. Air Force/Space Force 'Hack-A-Sat' CTFs and the broader space-ISAC community drive awareness and better defaults. The message: democratized space must not mean insecure space — and at constellation scale, systemic security is everything.",
        ],
      },
      incident: {
        title: "Hack-A-Sat and Proven Smallsat Takeovers",
        when: "2020–today",
        where: "Security competitions and research",
        impact: "Competitions and research demonstrated real (and simulated) satellite compromises, spotlighting weak smallsat security",
        body: [
          "To confront the security gap, the U.S. Space Force and Air Force ran 'Hack-A-Sat' competitions (from 2020), challenging teams with realistic spacecraft hacking — and in 2023 a finals event involved hacking an actual satellite in orbit (Moonlighter). Researchers have also demonstrated taking over or commanding smallsats and CubeSats, and studies have found weak or absent security on numerous small satellites.",
          "These efforts, alongside the Space-ISAC (information sharing) and frameworks like SPARTA, reflect a field racing to secure a rapidly expanding orbital population. The dual lesson: cheap, numerous satellites bring commodity insecurity to space, but scale also enables resilience — so the goal is secure-by-design smallsats and systemically protected constellations.",
        ],
      },
      diagram: {
        nodes: [
          { label: "COTS + Open SW", sub: "inherited vulnerabilities", type: "attacker" },
          { label: "CubeSat / Smallsat", sub: "tight budget, weak protection", type: "victim" },
          { label: "Homogeneous Fleet", sub: "one flaw → many spacecraft", type: "system" },
          { label: "Secure-by-Design", sub: "SDLS, signed updates, hardened ground", type: "result" },
        ],
      },
      timeline: [
        { year: 2003, event: "First CubeSats launched, beginning the small-satellite revolution" },
        { year: 2019, event: "Mega-constellations (Starlink, OneWeb) begin large-scale deployment" },
        { year: 2020, event: "U.S. 'Hack-A-Sat' competitions launch to spur spacecraft security", highlight: true },
        { year: 2023, event: "Hack-A-Sat finals involve hacking a real on-orbit satellite (Moonlighter)" },
      ],
      keyTakeaways: [
        "CubeSats and mega-constellations democratized space but brought COTS parts, tight budgets, and weaker security",
        "Standardization/homogeneity means one flaw in a common bus, radio, or software can affect many missions",
        "Constellation scale aids availability but creates a vast, uniform attack surface — systemic flaws are catastrophic",
        "Raise the floor: authenticated commanding, encryption, signed updates, hardened ground, and supply-chain scrutiny",
      ],
      references: [
        { title: "CubeSat (overview)", url: "https://en.wikipedia.org/wiki/CubeSat" },
        { title: "Hack-A-Sat (space security competition)", url: "https://hackasat.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-07-q1", type: "Core Idea", challenge: "Small & cheap.", text: "What are CubeSats?", options: ["Small, standardized satellites that lowered the cost of reaching orbit", "Giant military satellites", "Ground stations", "Launch rockets"], correctIndex: 0, explanation: "CubeSats democratized access to space." },
        { id: "s2-07-q2", type: "Trade-off", challenge: "Cheap costs.", text: "What security trade-off do smallsats often have?", options: ["COTS parts/open software and tight budgets mean weaker, sometimes unauthenticated security", "Military-grade encryption by default", "Unlimited budgets", "No software at all"], correctIndex: 0, explanation: "Affordability often deprioritizes security." },
        { id: "s2-07-q3", type: "Homogeneity", challenge: "Many clones.", text: "Why is homogeneity a risk for constellations?", options: ["A flaw in a common bus/radio/software can affect many identical spacecraft", "It makes each unique", "It improves security", "It has no effect"], correctIndex: 0, explanation: "Mass production means one exploit can scale." },
        { id: "s2-07-q4", type: "Scale", challenge: "Both ways.", text: "How does mega-constellation scale cut both ways?", options: ["Resilient to losing one satellite, but a vast uniform attack surface for systemic flaws", "Only benefits", "Only drawbacks", "No effect on security"], correctIndex: 0, explanation: "Scale aids availability but magnifies systemic risk." },
        { id: "s2-07-q5", type: "Initiative", challenge: "Raise the floor.", text: "What is 'Hack-A-Sat'?", options: ["U.S. competitions to spur spacecraft security, including hacking a real on-orbit satellite", "A satellite model", "A jamming tool", "A rocket"], correctIndex: 0, explanation: "Hack-A-Sat drives awareness and better space security." },
        { id: "s2-07-q6", type: "Defense", challenge: "Do it right.", text: "What does secure-by-design smallsat security require?", options: ["Authenticated commanding, encryption, signed updates, hardened ground, and supply-chain scrutiny", "Skipping security to save money", "Trusting all commands", "Open command links"], correctIndex: 0, explanation: "Democratized space must not mean insecure space." },
      ],
    },
  },

  // ─── s2-08: Inter-Satellite Links & Constellation Pivot (CTF) ────────────
  {
    epochId: "space-race-2",
    wonder: { name: "A network in the sky", location: "Between satellites in a constellation", era: "Modern", emoji: "🔗" },
    id: "s2-08",
    order: 8,
    title: "Inter-Satellite Links",
    subtitle: "Pivoting Across a Constellation",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-s2-isl", name: "Orbital Pivoter", emoji: "🔗" },
    challengeType: "quiz",
    info: {
      tagline: "Modern constellations aren't lonely satellites — they're a mesh network in orbit, passing data satellite-to-satellite by laser. That makes them faster and more independent of the ground. It also means a foothold on one satellite could, in principle, become lateral movement across the whole constellation.",
      year: 2024,
      overview: [
        "Inter-Satellite Links (ISLs) connect satellites directly, often via optical (laser) links in modern constellations like Starlink. They let data route through space — across the mesh and down at a distant ground station — reducing reliance on a dense ground network and cutting latency, which is why they're central to global satellite-internet and relay systems.",
        "Architecturally, a constellation with ISLs is a network, and networks have lateral movement. If a single satellite were compromised (via its uplink, a software flaw, or a supply-chain implant), the ISL mesh is a potential path to reach, command, or relay attacks toward neighboring satellites — analogous to pivoting through a compromised host on a corporate LAN, but in orbit.",
        "The same networking lens brings the same defenses: authentication between nodes, encryption of ISL traffic, segmentation and least privilege so one compromised satellite can't freely command others, integrity of routing, and anomaly detection across the constellation. As constellations grow into a true space-based internet, treating them with mature network-security principles — zero trust between satellites — becomes essential. In this challenge you'll hop an inter-satellite link and pivot across the constellation.",
      ],
      technical: {
        title: "Optical Mesh, Lateral Movement, and Zero Trust in Orbit",
        body: [
          "The pivot concept:\n- ISL mesh: satellites relay traffic among themselves; the topology is a network with routing.\n- Foothold: compromise one node (weak uplink, flight-software bug, or supply-chain implant).\n- Lateral movement: if inter-satellite communication trusts peers or shares keys/software, the attacker may command or relay toward neighbors — pivoting through the constellation rather than attacking each from the ground.",
          "Defenses are network security applied in space: mutually authenticated, encrypted ISLs; per-satellite identity and key isolation so compromising one doesn't yield the constellation; segmentation/least privilege limiting what a node can do to peers; secure, verified routing; and constellation-wide monitoring for anomalous inter-satellite behavior. The principle mirrors the rest of the curriculum — zero trust between nodes — now between spacecraft. (Public detail on real-constellation ISL security is limited; this is the architectural risk security teams design against.) In this challenge you'll hop across an ISL and pivot to another satellite.",
        ],
      },
      incident: {
        title: "The Space Internet Takes Shape",
        when: "2021–today",
        where: "LEO mega-constellations",
        impact: "Optical inter-satellite links turned constellations into in-orbit networks, introducing network-style risks (and defenses) to space",
        body: [
          "Starlink and other constellations deployed optical inter-satellite links at scale beginning around 2021, enabling data to traverse space without touching the ground between source and a distant downlink. This was a leap for coverage and latency — and it transformed a fleet of satellites into a routed network in orbit.",
          "With that transformation comes the network threat model: lateral movement, routing integrity, and the need for node-to-node authentication and segmentation. While operators keep ISL security details private, the security community recognizes constellations as space-based networks that must apply zero-trust and segmentation principles. The takeaway: as space becomes networked, space security increasingly is network security — including preventing one compromised satellite from becoming many.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compromised Satellite", sub: "foothold via uplink/SW/supply chain", type: "attacker" },
          { label: "Inter-Satellite Link", sub: "optical mesh between nodes", type: "system" },
          { label: "Neighbor Satellites", sub: "reachable across the mesh", type: "victim" },
          { label: "Constellation Pivot", sub: "lateral movement in orbit", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Optical inter-satellite link technology matures for commercial use" },
        { year: 2021, event: "Mega-constellations deploy laser ISLs at scale, networking orbit", highlight: true },
        { year: 2023, event: "Security community frames constellations as space-based networks needing zero trust" },
        { year: 2024, event: "ISLs central to global satellite-internet and relay architectures" },
      ],
      keyTakeaways: [
        "Inter-satellite (often laser) links turn a constellation into a routed network in orbit",
        "A network enables lateral movement: a foothold on one satellite could pivot across the mesh",
        "Defenses are network security in space: authenticated/encrypted ISLs, per-node key isolation, segmentation, secure routing",
        "As space becomes networked, space security increasingly is network security — zero trust between satellites",
      ],
      references: [
        { title: "Inter-satellite link (overview)", url: "https://en.wikipedia.org/wiki/Inter-satellite_link" },
        { title: "Satellite constellation (overview)", url: "https://en.wikipedia.org/wiki/Satellite_constellation" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-08-q1", type: "Core Idea", challenge: "Mesh in orbit.", text: "What do inter-satellite links create?", options: ["A routed network in orbit, passing data satellite-to-satellite", "A bigger battery", "A ground station", "A launch pad"], correctIndex: 0, explanation: "ISLs make a constellation a network in space." },
        { id: "s2-08-q2", type: "Tech", challenge: "How they connect.", text: "How do modern constellations often implement ISLs?", options: ["Optical (laser) links between satellites", "Copper wires", "Carrier pigeons", "Ground cables"], correctIndex: 0, explanation: "Laser ISLs provide high-bandwidth, low-latency links." },
        { id: "s2-08-q3", type: "Risk", challenge: "Pivot.", text: "What network risk do ISLs introduce?", options: ["Lateral movement — a foothold on one satellite could pivot across the mesh", "Better paint", "More fuel use only", "No new risk"], correctIndex: 0, explanation: "A network enables pivoting between nodes." },
        { id: "s2-08-q4", type: "Analogy", challenge: "Familiar.", text: "Constellation pivoting is most like what terrestrial attack?", options: ["Lateral movement through a compromised host on a LAN", "A password reset", "A phishing email", "A DDoS"], correctIndex: 0, explanation: "It's lateral movement, but between spacecraft." },
        { id: "s2-08-q5", type: "Defense", challenge: "Zero trust.", text: "How do you limit constellation pivoting?", options: ["Authenticated/encrypted ISLs, per-node key isolation, segmentation, and secure routing", "Share one key across all satellites", "Trust all peers", "Remove all links"], correctIndex: 0, explanation: "Zero trust between nodes contains a single compromise." },
        { id: "s2-08-q6", type: "Trend", challenge: "Networked space.", text: "What's the overarching lesson of networked constellations?", options: ["As space becomes networked, space security increasingly is network security", "Networks don't matter in space", "Satellites are always isolated", "Encryption is unnecessary"], correctIndex: 0, explanation: "Apply mature network-security principles to orbit." },
      ],
    },
  },

  // ─── s2-09: SSA, Debris & ASAT (Quiz) ────────────────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "Keeping track of a crowded sky", location: "Earth orbit, getting busier", era: "Modern", emoji: "🌌" },
    id: "s2-09",
    order: 9,
    title: "Space Awareness, Debris & ASAT",
    subtitle: "Collisions, Weapons, and the Data We Trust to Avoid Them",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-s2-ssa", name: "Orbit Guardian", emoji: "🌌" },
    challengeType: "quiz",
    info: {
      tagline: "Orbit is finite, crowded, and unforgiving — a collision creates thousands of new lethal fragments. We avoid catastrophe by tracking everything and trusting the data that tells satellites when to dodge. Corrupt that trust, or weaponize space, and the threat becomes physical and shared by all.",
      year: 2024,
      overview: [
        "Space Situational Awareness (SSA) — or Space Domain Awareness — is the tracking and cataloging of objects in orbit (active satellites and debris) to predict close approaches (conjunctions) and warn operators to maneuver. With tens of thousands of tracked objects and many more untracked fragments, SSA is what keeps orbit usable.",
        "The dangers are physical and escalating:\n- Debris and Kessler syndrome: collisions create more debris, which causes more collisions — a potential cascade that could make valuable orbits unusable for generations.\n- Anti-satellite (ASAT) weapons: direct-ascent missile tests (China 2007, Russia 2021, others) have destroyed satellites and created large, long-lived debris clouds; co-orbital and electronic/cyber ASAT capabilities also exist.\n- The cyber angle: operators act on SSA data and conjunction warnings — if that data or its delivery were corrupted or spoofed, satellites could be maneuvered into danger or fail to dodge a real threat.",
        "This stage connects space security to safety and policy. Defenses and norms include trustworthy, redundant SSA (multiple sensors and providers, integrity-protected data sharing), debris mitigation guidelines and active debris removal, and international efforts toward responsible behavior (the Outer Space Treaty, debris-mitigation guidelines, and emerging norms against destructive ASAT testing). Securing space is partly cybersecurity and partly stewardship of a shared, fragile commons.",
      ],
      technical: {
        title: "Conjunctions, Kessler, and Trustworthy SSA",
        body: [
          "How collision avoidance works and where trust matters:\n- Tracking & catalog: sensors (radar, optical) build a catalog of orbits; SSA providers compute conjunction probabilities and issue warnings.\n- Maneuver decisions: operators decide whether to burn precious fuel to dodge based on that data — so the integrity and availability of SSA data is safety-critical.\n- Attack surface: spoofed/corrupted conjunction data or a denial of SSA services could induce unnecessary or wrong maneuvers, or hide a real conjunction; tracking sensors and data-sharing systems are themselves IT targets.",
          "Resilience and stewardship together:\n- Trustworthy SSA: multiple independent sensors/providers, cross-checking, and integrity-protected sharing so no single corrupted source decides a maneuver.\n- Debris mitigation: design for de-orbit, post-mission disposal, and active debris removal to reduce the collision risk SSA must manage.\n- Norms/policy: ASAT-test restraint, traffic-management efforts, and treaties to keep orbit usable.\nThe lesson closing this stage: in space, security, safety, and sustainability are inseparable — protecting the data and the domain protects everyone who depends on it.",
        ],
      },
      incident: {
        title: "Tests, Cascades, and Near-Misses",
        when: "2007–today",
        where: "Earth orbit",
        impact: "ASAT tests and collisions created vast debris and near-misses, underscoring orbit's fragility and the stakes of trustworthy SSA",
        body: [
          "In 2007, China's destructive ASAT test against its own Fengyun-1C satellite created one of the largest debris clouds in history — thousands of trackable fragments still threatening other spacecraft. In 2009, the accidental collision of Iridium 33 and the defunct Cosmos 2251 created thousands more. Russia's 2021 ASAT test against Cosmos 1408 again generated dangerous debris, forcing the ISS crew to shelter.",
          "These events made Kessler syndrome a concrete worry and SSA a critical service, with operators relying on conjunction warnings to avoid collisions amid growing mega-constellation traffic. The cyber dimension — that decisions hinge on the integrity of SSA data and systems — and the policy dimension — restraint on destructive testing and debris mitigation — together define the modern struggle to keep orbit safe and usable.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SSA Sensors & Catalog", sub: "track objects, predict conjunctions", type: "system" },
          { label: "Conjunction Warning", sub: "operators decide to maneuver", type: "victim" },
          { label: "Threats", sub: "debris, Kessler, ASAT, data spoofing", type: "attacker" },
          { label: "Safe & Usable Orbit", sub: "trustworthy SSA + mitigation + norms", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "China's ASAT test destroys Fengyun-1C, creating a massive debris cloud", highlight: true },
        { year: 2009, event: "Iridium 33 / Cosmos 2251 accidental collision adds thousands of fragments" },
        { year: 2021, event: "Russia's ASAT test on Cosmos 1408 forces ISS crew to shelter" },
        { year: 2024, event: "Mega-constellation growth makes trustworthy SSA and debris mitigation urgent" },
      ],
      keyTakeaways: [
        "SSA tracks orbital objects and warns of conjunctions; operators maneuver based on that safety-critical data",
        "Debris/Kessler syndrome and ASAT weapons make the threat physical, shared, and long-lasting",
        "The cyber angle: spoofed/denied SSA data could cause wrong maneuvers or hide real threats",
        "Security, safety, and sustainability are inseparable: trustworthy redundant SSA, debris mitigation, and responsible-behavior norms",
      ],
      references: [
        { title: "Space situational awareness (overview)", url: "https://en.wikipedia.org/wiki/Space_situational_awareness" },
        { title: "Kessler syndrome", url: "https://en.wikipedia.org/wiki/Kessler_syndrome" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-09-q1", type: "Core Idea", challenge: "Track the sky.", text: "What is Space Situational Awareness (SSA)?", options: ["Tracking orbital objects and predicting close approaches to warn operators", "A type of rocket fuel", "A satellite radio", "A ground station brand"], correctIndex: 0, explanation: "SSA keeps orbit usable by tracking objects and conjunctions." },
        { id: "s2-09-q2", type: "Debris", challenge: "Cascade.", text: "What is Kessler syndrome?", options: ["A cascade where collisions create debris that causes more collisions", "A satellite model", "A type of orbit", "A jamming method"], correctIndex: 0, explanation: "Debris cascades could make orbits unusable for generations." },
        { id: "s2-09-q3", type: "ASAT", challenge: "Weapons.", text: "What did the 2007 Chinese ASAT test do?", options: ["Destroyed a satellite and created one of the largest debris clouds in history", "Improved GPS", "Cleaned up debris", "Launched a constellation"], correctIndex: 0, explanation: "Destructive ASAT tests create vast, long-lived debris." },
        { id: "s2-09-q4", type: "Cyber", challenge: "Trust the data.", text: "What's the cyber risk to SSA?", options: ["Spoofed/corrupted conjunction data could cause wrong maneuvers or hide real threats", "It makes satellites heavier", "It has no cyber dimension", "It only affects the ground"], correctIndex: 0, explanation: "Maneuver decisions depend on SSA data integrity." },
        { id: "s2-09-q5", type: "Resilience", challenge: "Don't trust one source.", text: "How do you make SSA trustworthy?", options: ["Multiple independent sensors/providers, cross-checking, and integrity-protected sharing", "One sensor only", "No verification", "Trust any data"], correctIndex: 0, explanation: "Redundancy and integrity prevent a single corrupted source from deciding." },
        { id: "s2-09-q6", type: "Stewardship", challenge: "Shared commons.", text: "Why are security, safety, and sustainability inseparable in space?", options: ["Orbit is a fragile shared commons; protecting the data and domain protects everyone", "They're unrelated", "Only money matters", "Space is infinite and safe"], correctIndex: 0, explanation: "Debris and trust affect all operators alike." },
      ],
    },
  },

  // ─── s2-10: Securing Space Systems (Quiz) ────────────────────────────────
  {
    epochId: "space-race-2",
    wonder: { name: "Defense for the final frontier", location: "Across all three segments", era: "Modern", emoji: "🛡️" },
    id: "s2-10",
    order: 10,
    title: "Securing Space Systems",
    subtitle: "SPARTA, Encryption, Zero Trust & Resilience",
    category: "cybersecurity",
    xp: 195,
    badge: { id: "badge-s2-defense", name: "Space Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Every attack in this epoch — uplink, downlink, GNSS, jamming, ground, constellation — resolves into one program: authenticate and encrypt the links, treat the ground like critical infrastructure, build resilience for what you can't patch, and govern it with frameworks and norms. This is space security as a discipline.",
      year: 2024,
      overview: [
        "Securing a space system means defending all three segments together:\n- Link: authenticated commanding (CCSDS SDLS) and encrypted telemetry/data so uplinks can't be hijacked and downlinks can't be read; anti-jam and resilient PNT for availability.\n- Ground: rigorous IT and supply-chain security at mission control — MFA, segmentation, patching, monitoring, HSM key protection — because the ground is the proven weakest link (Viasat).\n- Space: secure boot, signed updates, and hardened, least-privilege flight software and inter-satellite links so a single compromise can't spread.",
        "Two principles unify it. Build security in despite the constraints: even small, cheap, long-lived spacecraft can have authenticated links and signed updates if designed for it from the start. And resilience over perfection: because you can't physically reach a satellite, you plan to survive attacks — redundancy, graceful degradation, PNT backups, constellation diversity, and tested recovery — so a hack or jam degrades rather than destroys the mission.",
        "Frameworks and governance tie it together: SPARTA to model threats and map defenses, the Space-ISAC for threat sharing, government guidance (U.S. Space Policy Directive-5 and related cyber requirements), CCSDS security standards, and international norms on responsible behavior and debris. The conclusion mirrors the OT, vehicle, and robotics arcs: secure the links, harden the ground, design for resilience, verify everything, and govern a shared, hard-to-reach domain for the long haul.",
      ],
      technical: {
        title: "The Three-Segment Program and the Cross-Domain Lesson",
        body: [
          "A practical space-security program:\n- Confidentiality & integrity of links: SDLS authentication + encryption end to end; assume the downlink is public and the uplink is contested.\n- Availability: anti-jam waveforms/antennas, multi-constellation/authenticated PNT, and constellation/orbital diversity.\n- Ground hardening: identity/MFA, least privilege, segmentation, patching, supply-chain assurance, HSM-protected keys, and command-anomaly monitoring.\n- Spacecraft & constellation: secure boot, signed OTA, least privilege and key isolation across ISLs, and trustworthy onboard autonomy.",
          "Over all of it: model with SPARTA, share via Space-ISAC, comply with policy/standards, and design for resilience and recovery given no physical access. The cross-domain lesson — identical across operational technology, vehicles, robotics, and space — is that cyber-physical systems are made safe by authenticating and encrypting their communications, hardening the human/ground control points, verifying every input and command, bounding what compromise can achieve, and operating them as monitored, resilient, governed infrastructure for their entire long lives.",
        ],
      },
      incident: {
        title: "Space Joins Critical Infrastructure",
        when: "2020 → today",
        where: "Government, industry, and standards bodies",
        impact: "Policy, frameworks, and incidents pushed space security from afterthought to recognized critical-infrastructure discipline",
        body: [
          "The arc of space security mirrors the rest of the curriculum. Demonstrations and incidents — signal hijacks, cheap downlink interception, GNSS spoofing, and above all the 2022 Viasat ground-segment attack — proved the risks are real and consequential. The response built a discipline: SPARTA (2022) for threat modeling, the Space-ISAC for sharing, U.S. Space Policy Directive-5 (2020) and growing cyber requirements, CCSDS SDLS for authenticated links, and Hack-A-Sat to build talent.",
          "Space is now widely treated as critical infrastructure, with security spanning links, ground, and spacecraft, and governance reaching into international norms. The closing message of the deep-tech security arc is that whether the endpoint is a PLC, a car, a robot, or a satellite, the same principles apply — verify, encrypt, harden the human control points, design for resilience, and govern for the long term — because in all of them, cyber and physical safety are one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Links", sub: "SDLS auth + encryption, anti-jam", type: "system" },
          { label: "Ground", sub: "MFA, segmentation, supply chain, HSM", type: "victim" },
          { label: "Space", sub: "secure boot, signed updates, ISL zero trust", type: "attacker" },
          { label: "Resilience + Governance", sub: "SPARTA, Space-ISAC, policy, recovery", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "CCSDS SDLS matures to authenticate and encrypt space links" },
        { year: 2020, event: "U.S. Space Policy Directive-5 sets space cybersecurity principles" },
        { year: 2022, event: "Viasat attack and SPARTA's release crystallize space security as a discipline", highlight: true },
        { year: 2024, event: "Space treated as critical infrastructure: links, ground, spacecraft, and governance" },
      ],
      keyTakeaways: [
        "Defend all three segments: authenticate/encrypt links (SDLS), harden the ground, and secure spacecraft/constellations",
        "Build security in despite constraints, and prioritize resilience because you can't physically reach a satellite",
        "Govern with SPARTA, Space-ISAC, policy/standards, and international norms",
        "Cross-domain lesson (OT, vehicles, robotics, space): verify everything, encrypt, harden control points, bound compromise, design for resilience",
      ],
      references: [
        { title: "SPARTA (space threat framework)", url: "https://sparta.aerospace.org/" },
        { title: "U.S. Space Policy Directive-5 (cybersecurity)", url: "https://www.federalregister.gov/documents/2020/09/10/2020-20150/cybersecurity-principles-for-space-systems" },
      ],
    },
    quiz: {
      questions: [
        { id: "s2-10-q1", type: "Core Idea", challenge: "All three.", text: "What does securing a space system require?", options: ["Defending the link, ground, and space segments together", "Only encrypting the downlink", "Only guarding the ground", "Only the spacecraft"], correctIndex: 0, explanation: "All three segments must be defended as one system." },
        { id: "s2-10-q2", type: "Links", challenge: "Verify & hide.", text: "What protects the link segment?", options: ["Authenticated commanding (SDLS) + encryption, plus anti-jam and resilient PNT", "Broadcasting louder", "Leaving it open", "Obscurity alone"], correctIndex: 0, explanation: "Authenticate and encrypt links; ensure availability." },
        { id: "s2-10-q3", type: "Ground", challenge: "Weakest link.", text: "Why prioritize ground-segment security?", options: ["It holds the keys/authority and was the proven weakest link (Viasat)", "It's in orbit", "It has no computers", "It can't be attacked"], correctIndex: 0, explanation: "The ground is the high-leverage, soft target." },
        { id: "s2-10-q4", type: "Principle", challenge: "Can't reach it.", text: "Why is resilience prioritized over perfection in space?", options: ["You can't physically reach a satellite, so you design to survive and degrade gracefully", "Perfection is cheap", "Satellites are easy to fix", "Resilience doesn't matter"], correctIndex: 0, explanation: "No physical access means planning to survive attacks." },
        { id: "s2-10-q5", type: "Governance", challenge: "Frameworks.", text: "Which supports space-security governance?", options: ["SPARTA, Space-ISAC, policy/standards (SPD-5, CCSDS), and international norms", "Nothing exists", "Only marketing", "A single password"], correctIndex: 0, explanation: "Frameworks, sharing, policy, and norms govern the domain." },
        { id: "s2-10-q6", type: "Cross-Domain", challenge: "One lesson.", text: "What unifies OT, vehicle, robotics, and space security?", options: ["Verify everything, encrypt, harden control points, bound compromise, and design for resilience", "Each is totally unrelated", "Only space matters", "Physical systems can't be secured"], correctIndex: 0, explanation: "The cyber-physical conclusion is identical across all domains." },
      ],
    },
  },
];

// ── CTF mode — hands-on space terminal per stage (quiz = half-clear) ─────────
// All CTFs now use the shared 3-step mkDeepCtf factory (deepened from 2-step).

const S2_CTF: Record<string, CtfConfig> = {
  "s2-02": mkDeepCtf(
    "A satellite's command uplink has no authentication. Scan for the uplink, analyze its telecommand frame format, then transmit a forged telecommand the spacecraft will execute.",
    "OP: COMMAND PIRATE\nTarget: a satellite TT&C uplink (no SDLS auth).\nGoal: scan the uplink, analyze the format, send a telecommand.\nSequence: scan-uplink -> analyze-format -> send-telecommand",
    "FLAG{",
    "Mission Brief",
    ["scan-uplink", "TTC_", "Uplink Found", [
      "$ scan-uplink --spectrum --db",
      "Public databases + a spectrum sweep reveal the uplink at 2027.5 MHz.",
      "TT&C (telemetry, tracking & command) is the spacecraft's control channel.",
      "Next: analyze-format",
    ]],
    ["analyze-format", "T3L3C0MM4ND_", "Frame Format Analyzed", [
      "$ analyze-format",
      "Frames are standard CCSDS TC — and carry no SDLS authentication tag.",
      "Anything with the right format will be accepted.",
      "Next: send-telecommand",
    ]],
    ["send-telecommand", "HIJ4CK}", "Telecommand Sent", [
      "$ send-telecommand --cmd point-antenna",
      "Transmitted a forged 'point antenna' telecommand -> spacecraft executed it. No SDLS to reject it.",
      "Fix: SDLS authentication/encryption on the command link.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Scan the uplink. Run: scan-uplink", "Analyze the format. Run: analyze-format", "Send a telecommand. Run: send-telecommand", "Run 'assemble', then submit the flag"],
    { "uplink.txt": "freq: 2027.5 MHz\nframes: CCSDS TC (no SDLS auth tag)\nfix: SDLS auth/encrypt" },
  ),
  "s2-03": mkDeepCtf(
    "A satellite downlink is broadcasting in the clear. Tune your dish/SDR to the carrier, demodulate the DVB-S2 signal, then decode the unencrypted stream to recover its contents.",
    "OP: LISTEN IN\nTarget: an unencrypted satellite downlink (DVB-S2).\nGoal: tune, demodulate, decode the stream.\nSequence: tune-downlink -> demod-signal -> decode-stream",
    "FLAG{",
    "Mission Brief",
    ["tune-downlink", "D0WNL1NK_", "Downlink Tuned", [
      "$ tune-downlink --dish --sdr",
      "Pointed the dish and locked the SDR onto the downlink carrier.",
      "A $300 SDR + dish is enough hardware.",
      "Next: demod-signal",
    ]],
    ["demod-signal", "CL34RT3XT_", "Signal Demodulated", [
      "$ demod-signal --dvb-s2",
      "Demodulated the DVB-S2 transport — and found NO encryption on it.",
      "The payload is sitting in cleartext.",
      "Next: decode-stream",
    ]],
    ["decode-stream", "R34D}", "Stream Decoded", [
      "$ decode-stream",
      "Parsed the stream: in-the-clear telemetry + user traffic recovered.",
      "Fix: encrypt the downlink transport; assume the RF is public.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Tune the downlink. Run: tune-downlink", "Demodulate the signal. Run: demod-signal", "Decode the stream. Run: decode-stream", "Run 'assemble', then submit the flag"],
    { "downlink.txt": "transport: DVB-S2 (no encryption)\ngear: ~$300 SDR + dish\nfix: encrypt transport" },
  ),
  "s2-04": mkDeepCtf(
    "A critical-infrastructure receiver derives its clock from GNSS with no spoof detection. Spoof the GNSS signal, capture the receiver's lock, then slowly walk its time off true GPS time.",
    "OP: TIME BANDIT\nTarget: a GNSS-disciplined clock (no authentication/detection).\nGoal: spoof, capture the lock, shift the time.\nSequence: spoof-gnss -> capture-lock -> shift-time",
    "FLAG{GNSS_",
    "Mission Brief",
    ["spoof-gnss", "T1M3_", "GNSS Spoofed", [
      "$ spoof-gnss --power +3dB",
      "Transmitted counterfeit GNSS signals slightly stronger than the real constellation.",
      "Civil GPS has no OSNMA authentication to reject fakes.",
      "Next: capture-lock",
    ]],
    ["capture-lock", "SP00F3D_", "Lock Captured", [
      "$ capture-lock",
      "The receiver dropped the real signal and locked onto the spoof — it trusts the fake now.",
      "Smoothly take over without an alarm.",
      "Next: shift-time",
    ]],
    ["shift-time", "PNT}", "Time Shifted", [
      "$ shift-time --advance us",
      "Advanced the spoofed time microseconds at a time -> the disciplined clock drifted off true GPS.",
      "Grid/telecom sync depends on PNT. Fix: OSNMA, multi-GNSS, spoof detection, holdover.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Spoof the GNSS. Run: spoof-gnss", "Capture the lock. Run: capture-lock", "Shift the time. Run: shift-time", "Run 'assemble', then submit the flag"],
    { "gnss.txt": "auth: none (no OSNMA)\nattack: spoof +3dB -> capture lock -> drift time\nimpact: PNT (grid/telecom sync)" },
  ),
  "s2-05": mkDeepCtf(
    "A satellite uplink uses a fixed frequency with no anti-jam. Sweep the band to find it, lock onto the carrier, then jam the uplink to deny service over its footprint.",
    "OP: SPECTRUM DENIAL\nTarget: a fixed-frequency uplink (no spread spectrum).\nGoal: sweep, lock the target, jam it.\nSequence: sweep-band -> lock-target -> jam-uplink",
    "FLAG{",
    "Mission Brief",
    ["sweep-band", "UPL1NK_", "Band Swept", [
      "$ sweep-band --ku",
      "Swept the Ku-band and found a narrowband uplink carrier at 14.25 GHz.",
      "No frequency hopping = a sitting duck.",
      "Next: lock-target",
    ]],
    ["lock-target", "J4MM3D_", "Target Locked", [
      "$ lock-target 14.25GHz",
      "Characterized the carrier's bandwidth + power so the jam can be efficient and focused.",
      "A matched jammer needs far less power.",
      "Next: jam-uplink",
    ]],
    ["jam-uplink", "D3N13D}", "Uplink Jammed", [
      "$ jam-uplink --noise --center 14.25GHz",
      "Swamped the uplink receiver with high-power noise -> service denied across the footprint.",
      "Fix: spread spectrum / frequency hopping + adaptive nulling antennas.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Sweep the band. Run: sweep-band", "Lock the target. Run: lock-target", "Jam the uplink. Run: jam-uplink", "Run 'assemble', then submit the flag"],
    { "jam.txt": "uplink: 14.25 GHz, narrowband, no hopping\nattack: matched noise jam\nfix: spread spectrum + nulling" },
  ),
  "s2-06": mkDeepCtf(
    "Skip the dish — go for the ground. Breach a satellite ground station's management network, traverse to the command system, then abuse its legitimate authority to command the spacecraft (the Viasat model).",
    "OP: GROUND CONTROL\nTarget: a satellite ground station's ops network.\nGoal: breach, traverse to command, push a command.\nSequence: breach-groundstation -> traverse-network -> push-command",
    "FLAG{",
    "Mission Brief",
    ["breach-groundstation", "GR0UND_", "Ground Breached", [
      "$ breach-groundstation",
      "Scanned the ops network and found a misconfigured VPN appliance — the KA-SAT entry pattern.",
      "Exploited it and landed inside mission control.",
      "Next: traverse-network",
    ]],
    ["traverse-network", "S3GM3NT_", "Network Traversed", [
      "$ traverse-network",
      "No segmentation between IT ops and the command system -> walked straight to the tasking host.",
      "Flat ground networks turn a VPN bug into spacecraft control.",
      "Next: push-command",
    ]],
    ["push-command", "PWN3D}", "Command Pushed", [
      "$ push-command",
      "Used the station's OWN authenticated commanding to task the satellite — SDLS keys and all.",
      "Fix: segment the ground segment, MFA, jump hosts, monitor commanding.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Breach the ground station. Run: breach-groundstation", "Traverse the network. Run: traverse-network", "Push a command. Run: push-command", "Run 'assemble', then submit the flag"],
    { "ground.txt": "entry: misconfigured VPN (KA-SAT model)\nsegmentation: none (IT ops -> command)\nfix: segment + MFA + monitoring" },
  ),
  "s2-08": mkDeepCtf(
    "You have a foothold on one satellite in a constellation with optical inter-satellite links and shared trust. Enumerate the ISL neighbors, hop a link, then pivot to a neighboring satellite.",
    "OP: ORBITAL PIVOT\nTarget: a constellation with trusting inter-satellite links.\nGoal: enumerate ISLs, hop a link, pivot to a neighbor.\nSequence: enum-isl -> hop-isl -> pivot-constellation",
    "FLAG{",
    "Mission Brief",
    ["enum-isl", "1SL_", "ISLs Enumerated", [
      "$ enum-isl",
      "Listed the compromised satellite's optical ISL neighbors and their link keys.",
      "ISLs share keys/software and trust peers — no per-node isolation.",
      "Next: hop-isl",
    ]],
    ["hop-isl", "C0NST3LL4T10N_", "ISL Hopped", [
      "$ hop-isl --neighbor sat-+1",
      "Relayed across the optical mesh to an adjacent satellite using the shared trust.",
      "Lateral movement, but in orbit.",
      "Next: pivot-constellation",
    ]],
    ["pivot-constellation", "P1V0T}", "Constellation Pivoted", [
      "$ pivot-constellation",
      "Took control of the neighbor; from here the whole mesh is reachable, hop by hop.",
      "Fix: per-node identity/keys, ISL authentication, mutual distrust between satellites.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Enumerate the ISLs. Run: enum-isl", "Hop an ISL. Run: hop-isl", "Pivot across the mesh. Run: pivot-constellation", "Run 'assemble', then submit the flag"],
    { "isl.txt": "links: optical ISL mesh, shared keys/software\nflaw: trust peers, no isolation\nfix: per-node identity + ISL auth" },
  ),
};

for (const s of spaceRace2Stages) {
  const ctf = S2_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

// Deep 3-step CTFs for the remaining quiz stages (shared mkDeepCtf factory).
const S2_CTF2: Record<string, CtfConfig> = {
  "s2-01": mkDeepCtf(
    "Space systems have a huge, often-ignored attack surface. Map the four segments, load the SPARTA matrix of space-cyber techniques, and find the surface an adversary would target.",
    "OP: KNOW THE TERRAIN\nTarget: a satellite system's full architecture.\nGoal: map segments, load SPARTA, find the surface.\nSequence: map-segments -> load-sparta -> find-surface",
    "FLAG{SP4RT4_",
    "Mission Brief",
    ["map-segments", "SP4C3_", "Segments Mapped", [
      "$ map-segments",
      "Four segments: space (satellite), ground, link (uplink/downlink), user.",
      "Each is a distinct attack surface — most defenders only watch the ground.",
      "Next: load-sparta",
    ]],
    ["load-sparta", "SURF4C3_", "SPARTA Loaded", [
      "$ load-sparta",
      "The Aerospace SPARTA matrix maps adversary techniques across the space kill chain (like ATT&CK for space).",
      "Cross-referenced our assets against known techniques.",
      "Next: find-surface",
    ]],
    ["find-surface", "M4PP3D}", "Surface Found", [
      "$ find-surface",
      "Biggest exposure: an unauthenticated telecommand path + a flat ground network.",
      "You can't defend what you haven't mapped.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the segments. Run: map-segments", "Load SPARTA. Run: load-sparta", "Find the surface. Run: find-surface", "Run 'assemble', then submit the flag"],
    { "segments.txt": "space | ground | link | user\nSPARTA: space-cyber technique matrix\ntop risk: unauth telecommand + flat ground net" },
  ),
  "s2-07": mkDeepCtf(
    "Mega-constellations are built from cheap COTS CubeSats. Scan one, find the commercial-off-the-shelf flaw that scales to thousands of satellites, and harden the bus.",
    "OP: CHEAP AND MANY\nTarget: a COTS CubeSat in a large constellation.\nGoal: scan it, find the COTS flaw, harden the bus.\nSequence: scan-cubesat -> find-cots-flaw -> harden-bus",
    "FLAG{CUB3S4T_",
    "Mission Brief",
    ["scan-cubesat", "C0TS_", "CubeSat Scanned", [
      "$ scan-cubesat",
      "Built from commodity boards + open-source flight software to cut cost.",
      "Same hardware/software across thousands of satellites = one flaw scales massively.",
      "Next: find-cots-flaw",
    ]],
    ["find-cots-flaw", "BUS_", "COTS Flaw Found", [
      "$ find-cots-flaw",
      "The internal bus (I2C/CAN) trusts any board; a compromised payload can command the bus.",
      "Cheap and many means homogeneous and fragile.",
      "Next: harden-bus",
    ]],
    ["harden-bus", "H4RD3N3D}", "Bus Hardened", [
      "$ harden-bus --authenticate --partition",
      "Added bus authentication + isolated the payload from the flight bus; signed FSW updates.",
      "Constellation security must assume scale-amplified flaws.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Scan the CubeSat. Run: scan-cubesat", "Find the COTS flaw. Run: find-cots-flaw", "Harden the bus. Run: harden-bus", "Run 'assemble', then submit the flag"],
    { "cubesat.txt": "boards: COTS\nbus: I2C/CAN (trusts any board)\nrisk: one flaw x thousands of sats" },
  ),
  "s2-09": mkDeepCtf(
    "Space is crowded and contested. Track resident space objects, detect an anti-satellite (ASAT) threat, and assess the Kessler-syndrome debris risk it would create.",
    "OP: CONTESTED ORBIT\nTarget: a populated orbital regime.\nGoal: track objects, detect ASAT, assess Kessler risk.\nSequence: track-objects -> detect-asat -> assess-kessler",
    "FLAG{4S4T_",
    "Mission Brief",
    ["track-objects", "D3BR1S_", "Objects Tracked", [
      "$ track-objects",
      "Space situational awareness catalogs tens of thousands of tracked objects.",
      "One object is maneuvering toward an active satellite — not natural.",
      "Next: detect-asat",
    ]],
    ["detect-asat", "K3SSL3R_", "ASAT Detected", [
      "$ detect-asat",
      "Trajectory + closing velocity match a co-orbital ASAT intercept profile.",
      "A kinetic kill would shatter the target into thousands of fragments.",
      "Next: assess-kessler",
    ]],
    ["assess-kessler", "TR4CK3D}", "Kessler Assessed", [
      "$ assess-kessler",
      "Each fragment becomes a new hazard -> a cascade (Kessler syndrome) could deny the orbit for decades.",
      "SSA + norms of behavior are the defense; debris is everyone's problem.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Track the objects. Run: track-objects", "Detect the ASAT. Run: detect-asat", "Assess Kessler. Run: assess-kessler", "Run 'assemble', then submit the flag"],
    { "ssa.txt": "tracked objects: ~40,000\nmaneuvering object: co-orbital ASAT profile\nrisk: kinetic kill -> Kessler cascade" },
  ),
  "s2-10": mkDeepCtf(
    "Securing space systems takes policy plus engineering. Audit a mission's posture, apply SPD-5 principles and Space-ISAC sharing, and verify a resilient design.",
    "OP: SECURE THE MISSION\nTarget: a space mission with gaps.\nGoal: audit posture, apply SPD-5, verify resilience.\nSequence: audit-posture -> apply-spd5 -> verify-resilience",
    "FLAG{SPD5_",
    "Mission Brief",
    ["audit-posture", "SP4C3_", "Posture Audited", [
      "$ audit-posture",
      "Found: cleartext telemetry, no command authentication, single ground station.",
      "Resilience is missing across all four segments.",
      "Next: apply-spd5",
    ]],
    ["apply-spd5", "1S4C_", "SPD-5 Applied", [
      "$ apply-spd5",
      "Applied SPD-5 cyber principles: command auth/encryption, jam/spoof protection, supply-chain checks.",
      "Joined Space-ISAC to share threat intel with the sector.",
      "Next: verify-resilience",
    ]],
    ["verify-resilience", "R3S1L13NT}", "Resilience Verified", [
      "$ verify-resilience",
      "Encrypted+authenticated TT&C, diverse ground stations, safe-mode recovery — mission survives attack.",
      "Space security = policy (SPD-5) + engineering (defense-in-depth).",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Audit the posture. Run: audit-posture", "Apply SPD-5. Run: apply-spd5", "Verify resilience. Run: verify-resilience", "Run 'assemble', then submit the flag"],
    { "posture.txt": "before: cleartext TM, no cmd auth, 1 ground station\nSPD-5: auth+encrypt, anti-jam, supply-chain\nSpace-ISAC: intel sharing" },
  ),
};

for (const s of spaceRace2Stages) {
  const ctf = S2_CTF2[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
