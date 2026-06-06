import type { StageConfig, EpochConfig } from "./types";

export const spaceRaceEpoch: EpochConfig = {
  id: "space-race",
  name: "Race Through Space",
  subtitle: "Hacking the Systems Behind the New Space Race",
  description:
    "The deep-tech, hands-on side of today's space race. As SpaceX, NASA, China, and a wave of newcomers fill orbit with satellites, every spacecraft is a flying computer reachable over radio — and a target. Learn the real architecture (orbits, link budgets, the four segments), then break it: replay the Viasat wiper, spoof GPS, hijack a telecommand link, decode raw CCSDS telemetry, poison a ground-station supply chain, and inject on a MIL-STD-1553 spacecraft bus — finishing with counterspace warfare and how the constellation era gets secured.",
  emoji: "🚀",
  color: "violet",
  unlocked: true,
};

export const spaceRaceStages: StageConfig[] = [
  // ─── space-01: Orbits, Links & the Four Segments (Quiz) ──────────────────────
  {
    epochId: "space-race",
    wonder: { name: "Low Earth Orbit — the crowded frontier", location: "160–2,000 km altitude", era: "Modern", emoji: "🛰️" },
    id: "space-01",
    order: 1,
    title: "How Space Systems Actually Work",
    subtitle: "Orbits, Link Budgets & the Four Segments",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-space-arch", name: "Orbit Mechanic", emoji: "🛰️" },
    challengeType: "quiz",
    info: {
      tagline: "Before you can hack a satellite you have to see it for what it is: a computer you can only reach over a noisy radio link, moving at 28,000 km/h. Master the architecture first — orbits, links, and the four segments — and the attack surface appears.",
      year: 2024,
      overview: [
        "A 'space system' is never just the satellite. It is four connected parts, and an attacker can target any of them:\n- SPACE SEGMENT — the spacecraft itself: the bus (power, propulsion, attitude) and the payload (cameras, transponders).\n- GROUND SEGMENT — the antennas, ground stations, and mission-control software that fly it.\n- LINK SEGMENT — the radio uplink/downlink carrying commands and telemetry.\n- USER SEGMENT — the receivers and terminals that consume the service (your GPS chip, a Starlink dish).",
        "Where a satellite orbits shapes both its mission and how you reach it:\n- LEO (low Earth orbit, ~160–2,000 km) — close, low-latency, but races overhead in minutes, so you get short contact windows. Home of Starlink and the ISS.\n- MEO (~20,000 km) — the GPS/GNSS navigation belt.\n- GEO (~35,786 km) — appears fixed over one spot; used for broadcast and wide-area comms like Viasat.",
        "The radio link is the whole game, and it is fragile by physics:\n- The 'link budget' is the accounting of signal vs. noise — transmit power and antenna gain on one side, path loss and interference on the other; if the margin goes negative, the link drops.\n- That fragility is why jamming (overpowering the signal) and spoofing (impersonating it) work at all.\n- And because commands and telemetry ride that link, weak or missing authentication and encryption on it is the original sin of spacecraft security — the thread every later stage pulls.",
      ],
      technical: {
        title: "Buses, Payloads, TT&C, and the Contact Window",
        body: [
          "The spacecraft splits into two worlds worth knowing:\n- The BUS is the 'flying computer and chassis' — command & data handling (the onboard computer), electrical power, attitude determination and control (which way it points), thermal, and propulsion.\n- The PAYLOAD is the mission hardware (an imager, a comms transponder). Compromise the bus and you control the whole vehicle; compromise the payload and you control its product.\n- They talk over internal buses (MIL-STD-1553, SpaceWire, CAN) — themselves an attack surface, covered later.",
          "The control loop is called TT&C — Telemetry, Tracking & Command:\n- TELEMETRY flows down (health and status), COMMANDS flow up (telecommands), and TRACKING keeps the antenna pointed as the bird moves.\n- For a LEO satellite a ground station may only get a few minutes per pass, so operations are scripted and time-critical — a constraint attackers exploit by timing actions to a contact window.\n- Standards bodies (CCSDS) define how these frames and packets are formatted, which means an attacker who learns the standard can read and forge them.",
        ],
      },
      incident: {
        title: "Why a 1960s Assumption Still Haunts Spacecraft",
        when: "1960s–today",
        where: "Global space industry",
        impact: "Many satellites were designed assuming the radio link itself was the security boundary — no command authentication",
        body: [
          "For decades, spacecraft were built on a quiet assumption: that owning a big-enough antenna and knowing the secret frequencies was hard enough to be a defense in itself. Command links often shipped with little or no cryptographic authentication, because the threat model was 'only a nation-state could even transmit to us'.",
          "That assumption has collapsed:\n- Software-defined radios, cheap ground stations, and published standards put transmit capability within reach of hobbyists and criminals, not just superpowers.\n- Researchers and the U.S. Space Force's Hack-A-Sat competitions have repeatedly shown unauthenticated or weakly-protected links being taken over.\n- The lesson framing this whole epoch: a space system is a distributed computer network that happens to have a node in orbit — and it must be secured like one, not trusted because it is far away.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ground Segment", sub: "antennas + mission control", type: "system" },
          { label: "Link Segment", sub: "uplink commands / downlink telemetry", type: "attacker" },
          { label: "Space Segment", sub: "bus + payload", type: "victim" },
          { label: "User Segment", sub: "GPS chips, Starlink dishes", type: "result" },
        ],
      },
      timeline: [
        { year: 1957, event: "Sputnik 1 — the first satellite; the space age (and the first space race) begins" },
        { year: 1984, event: "CCSDS standards mature, defining how telemetry and commands are framed" },
        { year: 2019, event: "U.S. Space Force stands up; 'Hack-A-Sat' launches to pressure-test satellite security", highlight: true },
        { year: 2024, event: "Over 10,000 active satellites in orbit — most in LEO mega-constellations" },
      ],
      keyTakeaways: [
        "A space system is four segments — space, ground, link, user — and any one can be attacked",
        "Orbit choice (LEO/MEO/GEO) sets latency, coverage, and your contact-window opportunity",
        "TT&C (telemetry down, commands up) is the control loop; CCSDS standards define its formats",
        "Many links were built without command authentication — the root weakness this epoch exploits",
      ],
      references: [
        { title: "The Aerospace Corporation — SPARTA (space attack matrix)", url: "https://sparta.aerospace.org/" },
        { title: "CCSDS — space data system standards", url: "https://public.ccsds.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-01-q1", type: "Core Idea", challenge: "The four parts.", text: "A space system is made of which four segments?", options: ["Space, ground, link, and user", "CPU, RAM, disk, network", "Army, navy, air, space", "Sun, Moon, Earth, Mars"], correctIndex: 0, explanation: "Space (the craft), ground (control), link (radio), and user (receivers) — each is an attack surface." },
        { id: "space-01-q2", type: "Orbits", challenge: "Where GPS lives.", text: "GPS/GNSS navigation satellites primarily orbit in which regime?", options: ["MEO (~20,000 km)", "LEO (~500 km)", "GEO (~35,786 km)", "On the Moon"], correctIndex: 0, explanation: "Navigation constellations sit in medium Earth orbit; Starlink is LEO, broadcast comms are GEO." },
        { id: "space-01-q3", type: "Orbits", challenge: "Fixed overhead.", text: "Why does a GEO satellite appear to stay over one spot on Earth?", options: ["Its orbital period matches Earth's rotation", "It uses thrusters to hover", "It is not actually moving", "It is tethered to the ground"], correctIndex: 0, explanation: "A geostationary orbit's ~24-hour period matches Earth's spin, so it stays over one longitude." },
        { id: "space-01-q4", type: "The Link", challenge: "Signal vs noise.", text: "What is a 'link budget'?", options: ["The accounting of signal strength vs. noise/loss that decides if a link works", "The cost of renting a ground station", "The satellite's fuel reserve", "The data cap on a downlink"], correctIndex: 0, explanation: "If signal margin over noise goes negative, the link drops — which is why jamming and spoofing work." },
        { id: "space-01-q5", type: "Control", challenge: "The control loop.", text: "What does TT&C stand for?", options: ["Telemetry, Tracking & Command", "Time, Temperature & Current", "Transmit, Test & Connect", "Thrust, Trajectory & Control"], correctIndex: 0, explanation: "Telemetry flows down, commands flow up, tracking keeps the antenna pointed — the operations loop." },
        { id: "space-01-q6", type: "Spacecraft", challenge: "Two halves.", text: "On a spacecraft, what is the difference between the 'bus' and the 'payload'?", options: ["The bus runs the vehicle (power, attitude, computer); the payload does the mission", "The bus carries astronauts; the payload is cargo", "They are the same thing", "The bus is on the ground"], correctIndex: 0, explanation: "Own the bus and you control the whole craft; own the payload and you control its product." },
        { id: "space-01-q7", type: "Contact", challenge: "A short window.", text: "Why are LEO satellite operations so time-critical?", options: ["A LEO craft passes over a ground station for only minutes per orbit", "LEO satellites have no computers", "LEO is outside radio range", "They only work at night"], correctIndex: 0, explanation: "Short contact windows mean scripted, timed operations — something attackers exploit." },
        { id: "space-01-q8", type: "Security Seed", challenge: "The original sin.", text: "What foundational weakness do many legacy satellites share?", options: ["Command links with weak or no authentication/encryption", "Too much encryption", "No radios at all", "They run modern zero-trust by default"], correctIndex: 0, explanation: "Links were trusted because space seemed unreachable — an assumption cheap radios destroyed." },
      ],
    },
  },

  // ─── space-02: Viasat KA-SAT — AcidRain (CTF) ────────────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "Viasat KA-SAT — the ground segment", location: "Geostationary orbit / European ground network", era: "2022 CE", emoji: "📡" },
    id: "space-02",
    order: 2,
    title: "AcidRain — The Satellite Modem Wiper",
    subtitle: "Viasat KA-SAT, 24 February 2022",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-space-acidrain", name: "Ground Breaker", emoji: "📡" },
    challengeType: "ctf",
    info: {
      tagline: "On the morning Russia invaded Ukraine, tens of thousands of satellite modems across Europe went permanently dark — not from orbit, but from the ground. Replicate the AcidRain attack: reach the misconfigured management network and push a wiper to the modems.",
      year: 2022,
      overview: [
        "The Viasat KA-SAT attack is the clearest proof that you break a satellite network where it is softest — the ground segment. The satellite was never touched; the attackers got into the management infrastructure that administers the consumer modems and pushed destructive firmware to them.",
        "The operation followed a ground-segment kill chain you will reproduce:\n- ACCESS — exploit a misconfigured VPN appliance to reach the management network behind it.\n- REACH — from the management plane, enumerate the fleet of consumer satellite modems.\n- DESTROY — push 'AcidRain', a wiper that overwrites the modems' flash so they can never boot again, bricking them.",
        "The fallout was strategic, not just technical:\n- Tens of thousands of modems across Ukraine and the rest of Europe were knocked offline at the exact start of the 2022 invasion.\n- Collateral damage spread far beyond the target — including thousands of wind turbines in Germany that used the modems for remote monitoring.\n- It reframed satellite broadband as wartime critical infrastructure, and the ground/management plane as its weakest link.",
      ],
      technical: {
        title: "Management-Plane Compromise and a Flash Wiper",
        body: [
          "AcidRain was a precision wiper, not an orbital exploit:\n- It targeted the modems' embedded Linux, overwriting flash memory and storage so the devices were rendered permanently inoperable rather than merely rebooted.\n- Delivering it required first owning the management network — reached through a misconfigured/abused VPN device, then lateral movement to the modem-management system.\n- Because the modems were managed centrally, one foothold scaled to the whole fleet — the dark side of fleet management.",
          "The defensive lessons map straight to the attack steps:\n- Segment and harden the management plane; a satellite ground network must not be one flat reachable space behind a single VPN.\n- Sign and verify firmware so a malicious push cannot brick a device — supply-chain integrity for the edge.\n- Monitor for mass, simultaneous device actions (a fleet-wide firmware push at 04:00 is an alarm, not a routine event).",
        ],
      },
      incident: {
        title: "The Opening Shot — Viasat KA-SAT, 24 February 2022",
        when: "24 February 2022",
        where: "Europe (KA-SAT ground network)",
        impact: "Tens of thousands of satellite modems permanently bricked at the start of Russia's invasion of Ukraine; spillover hit ~5,800 German wind turbines",
        body: [
          "In the early hours of 24 February 2022, as Russian forces invaded Ukraine, a cyberattack struck the Viasat KA-SAT network. Attackers reached the management segment and deployed 'AcidRain', wiping tens of thousands of consumer modems and severing satellite broadband for Ukrainian users and many others across Europe.",
          "It became a landmark case:\n- Western governments attributed the attack to Russia; it is widely studied as the first major space-cyber event of a hot war.\n- The collateral spread — notably ~5,800 Enercon wind turbines in Germany losing remote monitoring — showed how space services are woven into unrelated infrastructure.\n- AcidRain joined the family of destructive wipers and proved that crippling a 'satellite' network can be done entirely from the ground, in software.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Misconfigured VPN", sub: "the way in", type: "attacker" },
          { label: "Management Network", sub: "modem administration plane", type: "system" },
          { label: "AcidRain Wiper", sub: "overwrite modem flash", type: "victim" },
          { label: "Fleet Bricked", sub: "tens of thousands offline", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "VPNFilter shows router/modem fleets are attractive mass targets" },
        { year: 2022, event: "24 Feb — AcidRain wipes KA-SAT modems as Russia invades Ukraine", highlight: true },
        { year: 2022, event: "~5,800 German wind turbines lose remote monitoring as collateral" },
        { year: 2023, event: "Satellite broadband formally treated as wartime critical infrastructure" },
      ],
      keyTakeaways: [
        "The Viasat hack bricked tens of thousands of modems from the ground — the satellite was never touched",
        "Kill chain: misconfigured VPN → management network → mass wiper push to the modem fleet",
        "AcidRain overwrote modem flash for permanent destruction, not a recoverable reboot",
        "Fleet management is a double-edged sword: one foothold on the management plane scales to everything",
      ],
      references: [
        { title: "Viasat — KA-SAT incident overview", url: "https://en.wikipedia.org/wiki/Viasat_hack" },
        { title: "AcidRain wiper analysis (SentinelOne)", url: "https://www.sentinelone.com/labs/acidrain-a-modem-wiper-rains-down-on-europe/" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-02-q1", type: "Core Idea", challenge: "Where it broke.", text: "How did the Viasat KA-SAT attack disable tens of thousands of modems?", options: ["By compromising the ground management network and pushing a wiper", "By physically shooting down the satellite", "By jamming the satellite's solar panels", "By a quantum computer"], correctIndex: 0, explanation: "It was a ground-segment compromise — the satellite itself was never touched." },
        { id: "space-02-q2", type: "Access", challenge: "The way in.", text: "What gave the attackers their initial foothold?", options: ["A misconfigured/abused VPN appliance into the management network", "The astronauts' laptops", "A USB drive on the satellite", "Guessing the Wi-Fi password"], correctIndex: 0, explanation: "They reached the management plane through a misconfigured VPN, then moved laterally." },
        { id: "space-02-q3", type: "Payload", challenge: "The weapon.", text: "What did the AcidRain malware do to the modems?", options: ["Overwrote their flash storage, permanently bricking them", "Stole their Wi-Fi passwords", "Slowed their connection", "Encrypted files for ransom"], correctIndex: 0, explanation: "AcidRain is a wiper — it destroyed the modems' firmware so they could not boot." },
        { id: "space-02-q4", type: "Timing", challenge: "When.", text: "Why is the timing of the attack significant?", options: ["It struck on 24 Feb 2022, the morning Russia invaded Ukraine", "It happened on New Year's Eve", "It was a slow attack over years", "Timing was irrelevant"], correctIndex: 0, explanation: "It was the opening cyber salvo of the invasion — the first major space-cyber event of a hot war." },
        { id: "space-02-q5", type: "Collateral", challenge: "Spillover.", text: "What notable collateral damage spread beyond the intended target?", options: ["~5,800 German wind turbines lost remote monitoring", "All of Europe's power grid failed", "GPS stopped working worldwide", "The ISS lost contact"], correctIndex: 0, explanation: "The modems were used to monitor wind turbines — showing how space services thread through other infrastructure." },
        { id: "space-02-q6", type: "Scale", challenge: "Why fleet-wide.", text: "Why did one foothold brick so many devices at once?", options: ["The modems were centrally managed, so one management foothold scaled to the fleet", "Each modem was hacked by hand", "The modems infected each other", "Coincidence"], correctIndex: 0, explanation: "Central fleet management is efficient — and a single point that scales an attack to everything." },
        { id: "space-02-q7", type: "Defense", challenge: "Stopping it.", text: "Which control would most directly have blunted AcidRain?", options: ["Signed/verified firmware so a malicious push can't brick devices", "Brighter status LEDs", "A faster satellite", "More bandwidth"], correctIndex: 0, explanation: "Firmware signing plus management-plane segmentation directly counter this attack." },
        { id: "space-02-q8", type: "Lesson", challenge: "The big takeaway.", text: "What is the strategic lesson of the Viasat hack?", options: ["A 'satellite' network can be crippled entirely from the ground, in software", "Satellites are unhackable", "Only kinetic weapons threaten space", "Encryption is unnecessary"], correctIndex: 0, explanation: "The softest part of a space system is usually the ground/management segment." },
      ],
    },
    ctf: {
      scenario: "It is 03:30 on 24 February 2022. Your unit's objective: sever satellite broadband for the target region as the ground offensive begins. You will not touch the satellite — you will reach the KA-SAT consumer-modem management network through a misconfigured VPN appliance and push a destructive firmware image (AcidRain) to the entire modem fleet. Capture the operation flag in three fragments.",
      hint: "Read the brief, then find the soft entry point: the management network behind a misconfigured VPN. From there, enumerate the modems and push the wiper.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Find the way into the management plane. Run: connect-vpn",
        "Enumerate the consumer modem fleet. Run: list-modems",
        "Push the destructive firmware to the fleet. Run: deploy-wiper",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{V14S4T_", label: "Mission Brief — Operation KA-SAT" },
        { trigger: "connect-vpn", value: "K4S4T_", label: "Management Plane Reached" },
        { trigger: "deploy-wiper", value: "4C1DR41N}", label: "AcidRain Deployed — Fleet Bricked" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: KA-SAT (24 FEB 2022, 03:30Z)",
          "Target: Viasat consumer satellite-modem fleet (ground segment)",
          "Rules of engagement: DO NOT touch the spacecraft. Hit the management plane.",
          "",
          "Recon notes: a VPN appliance facing the internet is misconfigured —",
          "no MFA, reachable management routes behind it.",
          "Sequence: connect-vpn -> list-modems -> deploy-wiper",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "connect-vpn": () => ({
          lines: [
            "Probing VPN appliance 0.0.0.0:443 ...",
            "Appliance banner: 'remote-mgmt' — MFA: DISABLED",
            "Reusing leaked operator credentials ... ACCEPTED.",
            "Tunnel up. You are now on the modem MANAGEMENT network (10.30.0.0/16).",
            "Next: list-modems",
          ],
        }),
        "list-modems": () => ({
          lines: [
            "Querying central modem-management system ...",
            "MODEM FLEET (consumer SurfBeam2 terminals):",
            "  region=TARGET   online=42,318   firmware=push-eligible",
            "  region=EU-WEST  online=11,902   firmware=push-eligible",
            "",
            "Fleet is centrally managed. A single firmware push reaches all of them.",
            "Next: deploy-wiper",
          ],
        }),
        "deploy-wiper": () => ({
          lines: [
            "Staging firmware image: acidrain.bin (overwrites flash + storage)",
            "Pushing to 54,220 modems ...",
            "  [########################################] 100%",
            "Modems overwriting flash ... devices will not reboot.",
            "Ground segment severed. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── space-03: GNSS Spoofing — Hijacking PNT (CTF) ───────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "The GPS/GNSS constellation", location: "Medium Earth Orbit, ~20,200 km", era: "Modern", emoji: "🧭" },
    id: "space-03",
    order: 3,
    title: "GNSS Spoofing — Lying to the Receiver",
    subtitle: "Hijacking Position, Navigation & Timing",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-space-gnss", name: "Signal Forger", emoji: "🧭" },
    challengeType: "ctf",
    info: {
      tagline: "Civilian GPS signals are faint, predictable, and unauthenticated — so a stronger fake will be believed. Don't jam the receiver; lie to it. Craft a counterfeit GNSS signal and walk a target's position wherever you want.",
      year: 2024,
      overview: [
        "The world runs on PNT — Position, Navigation, and Timing — from GNSS (GPS, Galileo, GLONASS, BeiDou). Ships, drones, phones, cell towers, and power grids all trust it. The civilian signal's fatal flaw: it is open-format and unauthenticated, so a receiver believes whatever fits the pattern best.",
        "Jamming and spoofing are different weapons:\n- JAMMING just drowns the band in noise — the receiver loses its fix (denial).\n- SPOOFING is subtler and worse — you transmit counterfeit satellite signals so the receiver computes a false position or time, and never knows (deception).\n- The art of a good spoof is to capture the victim's current solution first, then slowly drag it off-true so the target follows without alarming.",
        "You will run the spoofing chain in this stage:\n- SCAN the L1 band to confirm the victim's GNSS lock.\n- CRAFT a counterfeit signal: forged satellite identifiers (PRNs) and timing that resolve to your chosen coordinates.\n- TRANSMIT it slightly stronger than the real thing, capturing the receiver and steering a drone off its route.",
      ],
      technical: {
        title: "Why Civilian GNSS Is Forgeable",
        body: [
          "The signal structure invites forgery:\n- Each satellite broadcasts a known pseudo-random code (PRN) plus a navigation message; a receiver trilaterates position from the tiny time differences between codes.\n- Civilian signals carry no cryptographic signature, so a transmitter that reproduces valid-looking PRNs and timing is indistinguishable from a real satellite — until you check.\n- Because the signals arrive incredibly weak (below the noise floor), a modest local transmitter can overpower them.",
          "Defenses exist but adoption is slow:\n- Detection: watch for sudden signal-strength jumps, impossible position/time jumps, or disagreement between multiple antennas/sensors (sensor fusion with inertial navigation).\n- Authentication: Galileo's OSNMA cryptographically signs the navigation message; military GPS uses encrypted M-code — both raise the bar far above civilian L1.\n- Resilience: inertial measurement units, multi-constellation receivers, and timing from non-GNSS sources reduce single-signal trust — the same 'don't trust one source' principle as the rest of this epoch.",
        ],
      },
      incident: {
        title: "Ships That Teleported — Real-World GNSS Spoofing",
        when: "2017–present",
        where: "Black Sea, Strait of Hormuz, conflict zones",
        impact: "Mass spoofing has shown dozens of ships at false locations and redirected drones; aviation now sees widespread GNSS interference",
        body: [
          "In 2017, some twenty vessels in the Black Sea reported their GPS placing them miles inland at an airport — an early, public case of mass maritime spoofing. Since then, GNSS spoofing and jamming have become routine in and around conflict zones, with aircraft increasingly reporting false positions and timing.",
          "The technique has serious history and stakes:\n- Researchers famously demonstrated steering a yacht off course and capturing a drone by spoofing its GPS, proving the attack is practical, not theoretical.\n- Because GNSS also distributes precise TIME, spoofing threatens power-grid synchronization, financial timestamping, and telecom networks — not just navigation.\n- It is the purest example of this epoch's theme: an unauthenticated signal from space, trusted by default, is an attack surface for the whole planet.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Real GNSS Signal", sub: "faint, unauthenticated", type: "system" },
          { label: "Craft Counterfeit", sub: "forged PRNs + timing", type: "attacker" },
          { label: "Transmit Stronger", sub: "capture the receiver", type: "victim" },
          { label: "False Position/Time", sub: "target walks off course", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "Researchers spoof a yacht's GPS, steering it off course in a controlled test" },
        { year: 2017, event: "~20 ships in the Black Sea report GPS positions miles inland", highlight: true },
        { year: 2021, event: "Galileo OSNMA begins testing to authenticate civilian navigation messages" },
        { year: 2024, event: "Widespread GNSS interference disrupts civil aviation near conflict zones" },
      ],
      keyTakeaways: [
        "PNT (position, navigation, timing) from civilian GNSS is open-format and unauthenticated — so it is forgeable",
        "Jamming denies the signal; spoofing deceives the receiver into a false position or time (worse, because it's silent)",
        "A good spoof captures the victim's current lock, then slowly drags it off-true",
        "Defenses: signal-strength/jump detection, sensor fusion with inertial nav, and signed signals (Galileo OSNMA, M-code)",
      ],
      references: [
        { title: "GNSS spoofing — overview", url: "https://en.wikipedia.org/wiki/Spoofing_attack#GPS_spoofing" },
        { title: "Galileo OSNMA — navigation message authentication", url: "https://www.gsc-europa.eu/galileo/services/galileo-open-service-navigation-message-authentication-osnma" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-03-q1", type: "Core Idea", challenge: "Jam vs spoof.", text: "How does GNSS spoofing differ from jamming?", options: ["Spoofing feeds a false but believable signal; jamming just adds noise to deny it", "They are the same", "Spoofing is legal, jamming isn't", "Jamming changes position, spoofing blocks it"], correctIndex: 0, explanation: "Jamming denies (no fix); spoofing deceives (a confident, wrong fix)." },
        { id: "space-03-q2", type: "Weakness", challenge: "The fatal flaw.", text: "Why can civilian GPS be spoofed at all?", options: ["The civilian signal is unauthenticated and its format is public", "It is too strong to overpower", "It is encrypted with a weak key", "Receivers ignore satellites"], correctIndex: 0, explanation: "No cryptographic signature means a valid-looking fake is indistinguishable from the real thing." },
        { id: "space-03-q3", type: "Technique", challenge: "Doing it cleanly.", text: "What makes a spoof hard to notice?", options: ["Capturing the victim's current solution, then slowly dragging it off-true", "Turning the signal off and on", "Shouting on the radio", "Using a louder antenna only"], correctIndex: 0, explanation: "A gradual pull-off keeps the receiver locked and the operator unaware." },
        { id: "space-03-q4", type: "Physics", challenge: "Why a small TX wins.", text: "Why can a modest local transmitter overpower real GNSS?", options: ["Real GNSS signals arrive extremely weak, below the noise floor", "Satellites turn off at night", "Local transmitters are nuclear-powered", "GNSS uses no power"], correctIndex: 0, explanation: "The signals are tiny by the time they reach Earth, so a nearby source easily dominates." },
        { id: "space-03-q5", type: "Beyond Nav", challenge: "Not just maps.", text: "Besides position, what critical service does GNSS provide that spoofing threatens?", options: ["Precise time/timing for grids, finance, and telecom", "Weather forecasts", "TV channels", "Email"], correctIndex: 0, explanation: "GNSS distributes precise time; spoofing it can disrupt grid sync, trading timestamps, and networks." },
        { id: "space-03-q6", type: "Real World", challenge: "Ships inland.", text: "What did the 2017 Black Sea incident reveal?", options: ["Mass maritime spoofing — ~20 ships showed GPS positions miles inland", "A new satellite launch", "A solar storm", "A software update"], correctIndex: 0, explanation: "It was an early public case of large-scale GNSS spoofing affecting many vessels at once." },
        { id: "space-03-q7", type: "Defense", challenge: "Signing the signal.", text: "Which technology authenticates civilian navigation messages?", options: ["Galileo OSNMA", "HTTPS", "WPA3", "Bluetooth LE"], correctIndex: 0, explanation: "OSNMA cryptographically signs Galileo's navigation message; military GPS uses encrypted M-code." },
        { id: "space-03-q8", type: "Resilience", challenge: "Don't trust one source.", text: "What is a robust way to resist spoofing?", options: ["Sensor fusion — cross-check GNSS with inertial navigation and other sources", "Trust GPS absolutely", "Use a single antenna", "Disable all sensors"], correctIndex: 0, explanation: "Combining GNSS with inertial/other inputs catches the impossible jumps a spoof introduces." },
      ],
    },
    ctf: {
      scenario: "A hostile surveillance drone is following a fixed GPS waypoint route over your facility. You cannot shoot it down — but its navigation trusts unauthenticated civilian GPS. Scan the band to confirm its lock, craft a counterfeit GNSS signal resolving to coordinates that send it out to sea, and transmit it stronger than the real constellation. Capture the flag in three fragments.",
      hint: "Don't jam it — lie to it. Confirm the lock, forge a believable signal, then transmit it slightly stronger to capture the receiver.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Confirm the drone's GNSS lock on L1. Run: scan-rf",
        "Forge a counterfeit signal for your target coordinates. Run: craft-spoof",
        "Broadcast it stronger than the real constellation. Run: transmit",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{GN55_", label: "Mission Brief — PNT Hijack" },
        { trigger: "craft-spoof", value: "SP00F3D_", label: "Counterfeit Signal Crafted" },
        { trigger: "transmit", value: "PNT_H1J4CK}", label: "Receiver Captured — Drone Diverted" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: PNT HIJACK",
          "Target: surveillance drone navigating by civilian GPS (L1 C/A, unauthenticated)",
          "Goal: divert it out to sea WITHOUT jamming (jamming just makes it hover/RTL).",
          "",
          "Technique: capture its current solution, then drag the position off-true.",
          "Sequence: scan-rf -> craft-spoof -> transmit",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-rf": () => ({
          lines: [
            "Scanning L1 band (1575.42 MHz) ...",
            "Detected GNSS lock: PRNs 3, 7, 11, 19, 22, 28 (6 sats)",
            "Receiver C/N0 ~ 42 dB-Hz — healthy civilian lock, no authentication.",
            "Victim solution: 34.0522 N, 118.2437 W (over facility).",
            "Next: craft-spoof",
          ],
        }),
        "craft-spoof": () => ({
          lines: [
            "Generating counterfeit constellation ...",
            "  Cloning PRNs 3,7,11,19,22,28 with valid nav-message timing",
            "  Target drift waypoint: 33.70 N, 118.60 W (offshore)",
            "  Ramp: 0.5 m/s position pull (stays under loss-of-lock threshold)",
            "Spoof signal set built. Next: transmit",
          ],
        }),
        "transmit": () => ({
          lines: [
            "Transmitting counterfeit signal at +3 dB over live constellation ...",
            "Receiver re-locking onto spoofed PRNs ... CAPTURED.",
            "Dragging solution offshore ... drone heading 220 deg, leaving airspace.",
            "PNT hijack complete. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── space-04: Telecommand Link Takeover (CTF) ───────────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "The TT&C uplink", location: "Ground station → spacecraft", era: "Modern", emoji: "🛰️" },
    id: "space-04",
    order: 4,
    title: "Telecommand Link Takeover",
    subtitle: "Forging Commands to a Satellite",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-space-ttc", name: "Command Forger", emoji: "🎛️" },
    challengeType: "ctf",
    info: {
      tagline: "If a satellite accepts commands without proving who sent them, anyone with the right radio is mission control. Intercept the TT&C link, forge a telecommand, and slew the spacecraft — the exact class of break the Hack-A-Sat contests were built to expose.",
      year: 2024,
      overview: [
        "Telecommand is the uplink that tells a spacecraft what to do. On too many systems — especially older or smallsat designs — that uplink has weak or no authentication, so the satellite obeys a correctly-formatted command regardless of its source. That is the prize: become mission control.",
        "Your takeover follows the operator's own loop, abused:\n- LISTEN — capture the downlink to learn the spacecraft's telemetry format and current state.\n- FORGE — build a telecommand frame in the right format; with no authentication, the bird can't tell it from a legitimate one.\n- COMMAND — uplink an attitude (slew) command, pointing the satellite where you want — away from the Sun, off a target, or into a tumble.",
        "Pointing control is more powerful than it sounds:\n- A satellite's attitude (orientation) governs whether its solar panels see the Sun, whether its antenna faces Earth, and whether its camera sees the target.\n- Force a bad slew and you can deny power, break the comm link, or blind the payload — a soft 'kill' with no kinetic weapon.\n- This is why command authentication and encryption are the single most important spacecraft control — and why their absence is repeatedly exploited.",
      ],
      technical: {
        title: "Telecommand Frames and the Missing Signature",
        body: [
          "The command path is well-defined — and that helps the attacker:\n- CCSDS telecommand frames have a known structure (spacecraft ID, virtual channel, command data); learn the standard and you can build valid frames.\n- Authentication, when present, adds a signature/MAC and sequence counters so the spacecraft rejects forged or replayed commands — but many systems skipped it for simplicity or legacy reasons.\n- Replay protection matters too: even an encrypted command can be dangerous if an attacker can re-send a captured one.",
          "The Hack-A-Sat lineage made this concrete:\n- The U.S. Air/Space Force's Hack-A-Sat competitions (from 2020) had teams reverse telemetry, forge commands, and ultimately take control of a real satellite in orbit (2023's Moonlighter).\n- Findings repeatedly centered on weak link security: missing auth, guessable formats, and replayable commands.\n- Defenses are well known — authenticated, encrypted, sequence-protected command links (and ground-segment hardening) — the challenge is retrofitting fielded spacecraft that can't be patched easily.",
        ],
      },
      incident: {
        title: "Hack-A-Sat 4 — Hacking a Real Satellite in Orbit",
        when: "2020–2023",
        where: "DEF CON / U.S. Space Force",
        impact: "Security researchers commanded an on-orbit satellite (Moonlighter) in a controlled competition, proving spacecraft takeover is achievable",
        body: [
          "Beginning in 2020, the U.S. Air Force and then Space Force ran 'Hack-A-Sat', a competition to find and fix satellite vulnerabilities. Early rounds used flight-representative testbeds; in 2023, the finale let teams attack 'Moonlighter', a small satellite purpose-built and placed in orbit to be hacked.",
          "It changed the conversation:\n- Teams demonstrated reversing telemetry, crafting commands, and exercising control functions — on real or flight-like systems, not slideware.\n- The exercises consistently surfaced the same root issues this stage teaches: weak or absent command authentication and replay protection.\n- The takeaway is hopeful and urgent: the fixes (authenticated, encrypted, sequence-protected links) are known; the work is designing and retrofitting them across an industry that long assumed distance was security.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Capture Downlink", sub: "learn telemetry format", type: "attacker" },
          { label: "Forge Telecommand", sub: "valid frame, no auth", type: "system" },
          { label: "Uplink Slew Command", sub: "change attitude", type: "victim" },
          { label: "Spacecraft Obeys", sub: "power/comms/payload denied", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "ROSAT X-ray satellite incident — early concern over commanding/health from cyber means" },
        { year: 2020, event: "First Hack-A-Sat competition pressures satellite command security" },
        { year: 2023, event: "Hack-A-Sat 4: teams attack 'Moonlighter', a satellite in orbit", highlight: true },
        { year: 2024, event: "Authenticated, encrypted command links pushed as baseline for new builds" },
      ],
      keyTakeaways: [
        "Telecommand is the uplink that controls a spacecraft; weak/absent authentication lets anyone command it",
        "Takeover loop: capture downlink → forge a valid command frame → uplink an attitude (slew) command",
        "Controlling attitude can deny power, break comms, or blind the payload — a soft kill with no weapon",
        "Fixes are known (authenticated, encrypted, sequence-protected links); retrofitting fielded craft is the hard part",
      ],
      references: [
        { title: "Hack-A-Sat — official site", url: "https://hackasat.com/" },
        { title: "CCSDS telecommand & space data link security", url: "https://public.ccsds.org/Pubs/355x0b2.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-04-q1", type: "Core Idea", challenge: "The prize.", text: "Why is a telecommand link such a high-value target?", options: ["If commands aren't authenticated, anyone with the right radio can control the spacecraft", "It carries the satellite's video", "It powers the solar panels", "It is the only encrypted channel"], correctIndex: 0, explanation: "Telecommand is the uplink that controls the craft; weak auth = anyone is mission control." },
        { id: "space-04-q2", type: "Step 1", challenge: "Listen first.", text: "Why capture the downlink before forging commands?", options: ["To learn the telemetry/command format and the spacecraft's current state", "To jam it", "To charge the battery", "To decrypt the payload images"], correctIndex: 0, explanation: "Understanding the format lets you build commands the satellite will accept." },
        { id: "space-04-q3", type: "The Flaw", challenge: "What's missing.", text: "What protection do many vulnerable command links lack?", options: ["Cryptographic authentication (and replay protection) of commands", "A power switch", "An antenna", "A serial number"], correctIndex: 0, explanation: "Without a signature/MAC and sequence counters, forged or replayed commands are obeyed." },
        { id: "space-04-q4", type: "Impact", challenge: "Why attitude matters.", text: "Why is forcing an attitude (slew) command so damaging?", options: ["It can point panels off the Sun or the antenna off Earth — denying power or comms", "It changes the satellite's color", "It reboots the ground station", "It has no effect"], correctIndex: 0, explanation: "Attitude governs power, comms, and payload aim — a bad slew is a soft kill." },
        { id: "space-04-q5", type: "Standards", challenge: "Known formats.", text: "How do published CCSDS standards help an attacker here?", options: ["They define command frame structure, so valid frames can be built by anyone who reads them", "They encrypt everything by default", "They hide the satellite", "They are secret"], correctIndex: 0, explanation: "Open standards are good for interoperability — and mean format obscurity is no defense." },
        { id: "space-04-q6", type: "Replay", challenge: "Even encrypted.", text: "Why can replay protection matter even on an encrypted link?", options: ["A captured valid command could be re-sent later to cause harm", "Encryption makes replay impossible", "Replays charge the battery", "It doesn't matter"], correctIndex: 0, explanation: "Without sequence counters/nonces, an attacker can replay a captured legitimate command." },
        { id: "space-04-q7", type: "Real World", challenge: "Moonlighter.", text: "What was notable about Hack-A-Sat 4 in 2023?", options: ["Teams attacked 'Moonlighter', a satellite purpose-built and placed in orbit to be hacked", "It was cancelled", "It used only paper exercises", "It hacked the ISS"], correctIndex: 0, explanation: "It proved on-orbit spacecraft takeover is achievable in a controlled setting." },
        { id: "space-04-q8", type: "Defense", challenge: "The fix.", text: "What is the core defense for command links?", options: ["Authenticated, encrypted, sequence-protected commands", "Brighter antennas", "Faster orbits", "Removing telemetry"], correctIndex: 0, explanation: "Authentication + encryption + replay protection close the takeover path." },
      ],
    },
    ctf: {
      scenario: "You have a software-defined radio pointed at a smallsat passing overhead. Its telecommand uplink has no authentication — a correctly formatted command will be obeyed regardless of sender. Capture its downlink to learn the format, forge a telecommand, and uplink an attitude-slew that points its solar panels away from the Sun. You have one short pass. Capture the flag in three fragments.",
      hint: "Listen, then forge. Learn the telemetry format from the downlink, build a valid command frame (no auth needed), and send the slew during the contact window.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Decode the spacecraft's downlink to learn its format. Run: decode-telemetry",
        "Build a telecommand frame (no authentication required). Run: forge-telecommand",
        "Uplink the attitude command during the pass. Run: send-cmd ATTITUDE_SLEW",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{TTC_", label: "Mission Brief — Link Takeover" },
        { trigger: "forge-telecommand", value: "N0_4UTH_", label: "Telecommand Forged (no auth)" },
        { trigger: "send-cmd ATTITUDE_SLEW", value: "S4T_PWN3D}", label: "Command Accepted — Spacecraft Slewed" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: LINK TAKEOVER",
          "Target: smallsat SC-117, LEO, ~6 min pass remaining",
          "Uplink: CCSDS telecommand, NO frame authentication, NO sequence counter.",
          "",
          "Goal: slew attitude so solar panels lose the Sun (denies power on next eclipse exit).",
          "Sequence: decode-telemetry -> forge-telecommand -> send-cmd ATTITUDE_SLEW",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "decode-telemetry": () => ({
          lines: [
            "Locking downlink (2.2 GHz, S-band) ...",
            "CCSDS telemetry frames acquired. Decoding header:",
            "  spacecraft-id=0x075  virtual-channel=0  mode=NOMINAL",
            "  attitude=SUN-POINTING  battery=87%  next-eclipse=T+14min",
            "Command format learned. Next: forge-telecommand",
          ],
        }),
        "forge-telecommand": () => ({
          lines: [
            "Building CCSDS telecommand frame ...",
            "  spacecraft-id=0x075  apid=ATTITUDE  opcode=SLEW",
            "  auth field: <none required by target>",
            "Frame validates against captured format. Next: send-cmd ATTITUDE_SLEW",
          ],
        }),
        "send-cmd": (args) => {
          if ((args[0] || "").toUpperCase() === "ATTITUDE_SLEW") {
            return {
              lines: [
                "Uplinking ATTITUDE_SLEW to SC-117 ...",
                "Spacecraft ACK received — no authentication challenge.",
                "Attitude changing: SUN-POINTING -> OFF-SUN (yaw +95 deg).",
                "Panels will miss the Sun on eclipse exit. Run 'assemble' to retrieve your fragment.",
              ],
            };
          }
          return { lines: [`send-cmd: unknown command '${args[0] || ""}'. Try: send-cmd ATTITUDE_SLEW`] };
        },
      },
    },
  },

  // ─── space-05: CCSDS Telemetry Decoding (CTF) ────────────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "The downlink — raw bits from orbit", location: "Spacecraft → ground", era: "Modern", emoji: "📶" },
    id: "space-05",
    order: 5,
    title: "Decoding the Downlink",
    subtitle: "CCSDS Frames, Sync Words & Space Packets",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-space-ccsds", name: "Telemetry Decoder", emoji: "📶" },
    challengeType: "ctf",
    info: {
      tagline: "A satellite downlink looks like meaningless noise — until you know the standard. Almost every spacecraft on Earth speaks CCSDS. Find the sync word, lock the frames, pull the packets, and read what was meant to be private.",
      year: 2024,
      overview: [
        "Intercepting a downlink is only step one; making sense of the bits is the real skill. The good news for an analyst (and attacker) is that the world standardized: most spacecraft use CCSDS formats, so learning them once unlocks countless missions.",
        "A raw downlink is decoded in layers, each of which you will run:\n- FRAME SYNC — the stream is divided into fixed-length transfer frames marked by a known 32-bit Attached Sync Marker, 0x1ACFFC1D. Find it and you can chop the stream into frames.\n- FRAME → PACKETS — frames carry CCSDS Space Packets, identified by an APID (application process ID) that says which subsystem the data is from.\n- PACKET → DATA — parse the packet payload using the telemetry definitions to recover real values (and, here, a hidden flag).",
        "Why this matters for security, not just operations:\n- If the downlink is unencrypted (still common), anyone who can receive and decode it reads the spacecraft's telemetry — its health, its pointing, sometimes its mission data.\n- Knowing the exact format is also the prerequisite for forging commands (previous stage) — decoding and spoofing are two sides of the same standard.\n- The defense is link-layer encryption (CCSDS SDLS); its absence turns 'far away' into 'wide open'.",
      ],
      technical: {
        title: "From 0x1ACFFC1D to a Parsed Value",
        body: [
          "The sync marker is the key that unlocks the stream:\n- 0x1ACFFC1D is the standard CCSDS Attached Sync Marker; receivers search the bitstream for it to align on frame boundaries (frame synchronization).\n- Once aligned, each Transfer Frame has a header (spacecraft ID, virtual channel ID, frame counter) and a data field — and the counter even lets you spot dropped frames.\n- Virtual channels multiplex different data types (real-time telemetry, recorded data, payload) over one physical link.",
          "Inside the frames live Space Packets:\n- A CCSDS Space Packet header carries the APID (which process/subsystem), a sequence count, and a length; the APID is how you separate, say, attitude telemetry from battery telemetry.\n- Parsing the payload requires the telemetry dictionary that maps byte offsets to engineering values — reverse-engineered from observation when not available.\n- The whole pipeline (sync → frames → packets → values) is exactly what ground software does; doing it yourself is how you read a downlink that wasn't meant for you.",
        ],
      },
      incident: {
        title: "Listening to Spacecraft From a Backyard",
        when: "2010s–present",
        where: "Global amateur/SDR community",
        impact: "Hobbyists routinely receive and decode real spacecraft telemetry with cheap radios — proving unencrypted downlinks are public",
        body: [
          "A global community of radio amateurs and researchers now receives spacecraft signals with inexpensive software-defined radios and open tools. Networks of volunteer ground stations track satellites and the deep-space probes alike, decoding telemetry that follows published CCSDS formats.",
          "It is a powerful, double-edged demonstration:\n- On the bright side, citizen scientists have recovered data and even helped revive lost spacecraft contact — open standards enabling open science.\n- On the security side, it proves that an unencrypted downlink is effectively public: if a hobbyist with a dish can decode your telemetry, so can an adversary.\n- The line between 'enthusiast decoding' and 'adversary reconnaissance' is only the operator's intent — which is why link encryption, not obscurity, is the real control.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Raw Bitstream", sub: "looks like noise", type: "system" },
          { label: "Find 0x1ACFFC1D", sub: "frame synchronization", type: "attacker" },
          { label: "Extract Space Packets", sub: "split by APID", type: "victim" },
          { label: "Parse Telemetry", sub: "read the hidden values", type: "result" },
        ],
      },
      timeline: [
        { year: 1982, event: "CCSDS begins standardizing space data formats across agencies" },
        { year: 2012, event: "Cheap software-defined radios make spacecraft reception a hobby", highlight: true },
        { year: 2015, event: "CCSDS SDLS published to add authentication/encryption at the link layer" },
        { year: 2024, event: "Volunteer SDR networks routinely decode LEO and deep-space telemetry" },
      ],
      keyTakeaways: [
        "Most spacecraft use CCSDS, so learning the standard once unlocks decoding many missions",
        "Decode in layers: frame sync on 0x1ACFFC1D → extract CCSDS Space Packets by APID → parse the payload",
        "An unencrypted downlink is effectively public — if a hobbyist can decode it, so can an adversary",
        "The control is link-layer encryption (CCSDS SDLS), not format obscurity",
      ],
      references: [
        { title: "CCSDS Space Packet Protocol (133.0-B)", url: "https://public.ccsds.org/Pubs/133x0b2e2.pdf" },
        { title: "CCSDS TM Synchronization & Channel Coding (sync marker)", url: "https://public.ccsds.org/Pubs/131x0b4.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-05-q1", type: "Core Idea", challenge: "Why standard.", text: "Why does learning CCSDS unlock decoding many different spacecraft?", options: ["Most spacecraft worldwide use CCSDS formats", "Every satellite uses a secret format", "CCSDS only applies to GPS", "Spacecraft don't transmit data"], correctIndex: 0, explanation: "The industry standardized on CCSDS, so the skill transfers across missions." },
        { id: "space-05-q2", type: "Frame Sync", challenge: "The magic number.", text: "What is 0x1ACFFC1D used for?", options: ["It's the CCSDS Attached Sync Marker used to align the bitstream into frames", "It's an encryption key", "It's a satellite's serial number", "It's a frequency"], correctIndex: 0, explanation: "Receivers search the stream for this marker to find frame boundaries (frame sync)." },
        { id: "space-05-q3", type: "Layers", challenge: "What's inside a frame.", text: "What do CCSDS transfer frames carry?", options: ["Space Packets, identified by an APID for each subsystem", "JPEG images only", "Raw electricity", "Nothing"], correctIndex: 0, explanation: "Frames carry Space Packets; the APID tells you which process/subsystem produced the data." },
        { id: "space-05-q4", type: "APID", challenge: "Sorting the data.", text: "What does a packet's APID let you do?", options: ["Separate telemetry by source — e.g., attitude vs. battery data", "Encrypt the packet", "Speed up the downlink", "Change the orbit"], correctIndex: 0, explanation: "The Application Process ID identifies which subsystem the packet's data belongs to." },
        { id: "space-05-q5", type: "Security", challenge: "Open downlink.", text: "What is the security implication of an unencrypted downlink?", options: ["Anyone who can receive and decode it reads the telemetry", "It's automatically safe", "Only the owner can read it", "It can't be received on Earth"], correctIndex: 0, explanation: "Unencrypted + standardized = effectively public to anyone with a dish." },
        { id: "space-05-q6", type: "Two Sides", challenge: "Decode and forge.", text: "How does decoding relate to command forging from the previous stage?", options: ["Knowing the exact format is the prerequisite for both reading and forging", "They are unrelated", "Decoding prevents forging", "Forging is easier without the format"], correctIndex: 0, explanation: "The same standard knowledge enables decoding telemetry and crafting valid commands." },
        { id: "space-05-q7", type: "Real World", challenge: "Backyard reception.", text: "What do hobbyist SDR operators demonstrate about spacecraft downlinks?", options: ["Cheap radios can receive and decode real telemetry from many spacecraft", "Only governments can hear satellites", "Satellites are silent", "Decoding requires a rocket"], correctIndex: 0, explanation: "A thriving community decodes spacecraft with inexpensive SDRs and open tools." },
        { id: "space-05-q8", type: "Defense", challenge: "The control.", text: "What protects telemetry confidentiality?", options: ["Link-layer encryption such as CCSDS SDLS", "Using a longer antenna", "Faster orbits", "Hiding the frequency"], correctIndex: 0, explanation: "Encryption (SDLS) — not obscurity — keeps a decodable downlink private." },
      ],
    },
    ctf: {
      scenario: "Your ground station captured a raw downlink from a reconnaissance satellite. It's unencrypted but raw — just a wall of bits. Synchronize on the CCSDS sync marker to find the frames, extract the Space Packets, and decode the payload to recover the embedded operation flag. Capture it in three fragments.",
      hint: "It only looks like noise. Find the 0x1ACFFC1D sync marker to align frames, then extract Space Packets by APID and decode the payload.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Synchronize the bitstream on the CCSDS sync marker. Run: sync-frames",
        "Extract the CCSDS Space Packets from the frames. Run: extract-packets",
        "Decode the packet payload to recover the data. Run: decode-payload",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{CCSD5_", label: "Mission Brief — Downlink Decode" },
        { trigger: "sync-frames", value: "4SM_1ACFFC1D_", label: "Frame Sync Acquired" },
        { trigger: "decode-payload", value: "T3L3M3TRY}", label: "Payload Decoded" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: DOWNLINK DECODE",
          "Input: capture.raw — unencrypted CCSDS downlink, not yet frame-synced",
          "Goal: recover the embedded flag from the telemetry payload.",
          "",
          "Pipeline: frame sync (ASM 0x1ACFFC1D) -> Space Packets (by APID) -> parse payload.",
          "Sequence: sync-frames -> extract-packets -> decode-payload",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }, { name: "capture.raw", isDir: false }],
      },
      extraCommands: {
        "sync-frames": () => ({
          lines: [
            "Searching capture.raw for Attached Sync Marker 0x1ACFFC1D ...",
            "Marker found at bit offsets: 0, 8192, 16384, 24576 ...",
            "Locked: 1024-byte transfer frames, spacecraft-id=0x2A, VC=0, frame-count rising.",
            "Next: extract-packets",
          ],
        }),
        "extract-packets": () => ({
          lines: [
            "Walking transfer frames, reassembling CCSDS Space Packets ...",
            "  APID 0x064 (attitude)  x12",
            "  APID 0x065 (power)     x12",
            "  APID 0x0FF (payload)   x3   <-- target",
            "Next: decode-payload",
          ],
        }),
        "decode-payload": () => ({
          lines: [
            "Parsing APID 0x0FF payload with recovered telemetry definitions ...",
            "  field[mission_note] (ASCII) = <embedded operation flag>",
            "Payload decoded. Run 'assemble' to retrieve your fragment.",
          ],
        }),
        "cat": (args) => {
          if ((args[0] || "").includes("capture.raw")) {
            return {
              lines: [
                "1ACFFC1D 2A00C00F ... (binary) ...",
                "This is raw, frame-unsynced CCSDS data — pipe it through the decode steps.",
                "Run: sync-frames",
              ],
            };
          }
          return { lines: [`cat: ${args[0] || ""}: file not found. Try: cat briefing.txt`] };
        },
      },
    },
  },

  // ─── space-06: Ground Station & Supply Chain (CTF) ───────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "The ground station", location: "Earth — the antenna farm", era: "Modern", emoji: "🗼" },
    id: "space-06",
    order: 6,
    title: "Poisoning the Ground Segment",
    subtitle: "Software Supply Chain to the Antenna",
    category: "cybersecurity",
    xp: 168,
    badge: { id: "badge-space-ground", name: "Supply-Chain Operator", emoji: "🗼" },
    challengeType: "ctf",
    info: {
      tagline: "Why climb to orbit when the antenna is on the ground? Modern ground stations run ordinary servers, open-source libraries, and COTS software. Poison a dependency the operator trusts and you inherit control of the dish that talks to the satellite.",
      year: 2024,
      overview: [
        "The ground segment is where space meets normal IT — and inherits all of IT's weaknesses. Ground stations run commodity operating systems, cloud services, and open-source software stacks to schedule passes and steer antennas. That makes the software supply chain a direct path to the satellite.",
        "Your operation is a classic supply-chain-to-pivot chain:\n- RECON — map the ground-station software and its dependencies.\n- POISON — exploit a compromised third-party library the scheduling software pulls in (a typosquat / backdoored package), gaining code execution on the ground server.\n- PIVOT — move from the compromised server to the antenna control system, gaining the ability to point the dish and command the link.",
        "This is the fastest-growing space attack surface for good reasons:\n- 'Ground Station as a Service' and cloud antenna networks concentrate many missions behind shared software — one poisoned component can touch many customers.\n- Ground stations are easier to reach (terrestrial networks, internet-connected schedulers) than anything in orbit.\n- Frameworks like Aerospace's SPARTA explicitly catalog ground-segment and supply-chain techniques, because this is where real intrusions keep happening.",
      ],
      technical: {
        title: "Dependencies, Pivots, and the Antenna Controller",
        body: [
          "The supply-chain step is ordinary software security:\n- Ground software pulls open-source packages; a typosquatted or backdoored dependency runs your code the moment it is imported during a build or deploy.\n- From code execution on the scheduler, the attacker enumerates the internal network the station uses to drive hardware.\n- The prize is the antenna control unit and the modem/baseband that frame and transmit telecommands — owning these means owning the uplink.",
          "Defenses are the same disciplines, applied to space ops:\n- Pin and verify dependencies (lockfiles, signatures, SBOMs); isolate build/deploy from the operational network.\n- Segment hard: the scheduling/business network must not have a flat path to the antenna controller and baseband.\n- Treat the ground station as critical OT — least privilege, monitoring, and the assumption that the internet-facing parts will be probed constantly.",
        ],
      },
      incident: {
        title: "When the Ground Segment Is the Target",
        when: "2020s",
        where: "Commercial & government ground networks",
        impact: "Repeated findings and frameworks identify the ground segment and software supply chain as the most accessible way to reach a satellite",
        body: [
          "Across red-team exercises, Hack-A-Sat-style competitions, and real-world analysis, a pattern holds: attackers reach space systems most easily through the ground segment and its software, not through orbit. Ground stations are connected to terrestrial networks, run commercial software, and depend on open-source components like any enterprise.",
          "The industry has responded by naming the problem:\n- Aerospace's SPARTA matrix dedicates whole tactics to ground and supply-chain compromise; CISA and ESA guidance echo it.\n- 'Ground Station as a Service' (from major cloud providers) is convenient but concentrates risk behind shared software and tenancy.\n- The throughline of this epoch repeats here: the satellite is the hardest part to reach; the systems that command it are the soft underbelly, and the software supply chain is the side door.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Ground-Station Software", sub: "COTS + open source", type: "system" },
          { label: "Poisoned Dependency", sub: "typosquat / backdoor", type: "attacker" },
          { label: "Pivot Internal Net", sub: "scheduler → hardware", type: "victim" },
          { label: "Antenna Controller", sub: "own the uplink", type: "result" },
        ],
      },
      timeline: [
        { year: 2020, event: "SolarWinds shows software supply-chain compromise at national scale" },
        { year: 2021, event: "'Ground Station as a Service' from cloud providers concentrates ground risk" },
        { year: 2022, event: "SPARTA (Aerospace) catalogs ground-segment and supply-chain techniques", highlight: true },
        { year: 2024, event: "Ground segment widely assessed as the most accessible path to a satellite" },
      ],
      keyTakeaways: [
        "The ground segment is normal IT/OT and inherits its weaknesses — the easiest path to a satellite",
        "Chain: recon ground software → poison a trusted dependency for code execution → pivot to the antenna controller",
        "GSaaS and shared software concentrate risk: one poisoned component can touch many missions",
        "Defenses: pin/verify dependencies + SBOMs, isolate build/deploy, and segment the scheduler from the antenna",
      ],
      references: [
        { title: "SPARTA — ground-segment & supply-chain techniques (Aerospace)", url: "https://sparta.aerospace.org/" },
        { title: "CISA — space systems critical infrastructure guidance", url: "https://www.cisa.gov/space-systems-critical-infrastructure" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-06-q1", type: "Core Idea", challenge: "Why the ground.", text: "Why is the ground segment often the easiest path to a satellite?", options: ["It's normal internet-connected IT running commodity and open-source software", "It is in orbit", "It has no computers", "It uses unbreakable crypto"], correctIndex: 0, explanation: "Ground stations inherit all of IT's weaknesses and are reachable terrestrially." },
        { id: "space-06-q2", type: "Supply Chain", challenge: "The side door.", text: "How does a poisoned dependency help the attacker?", options: ["A backdoored/typosquatted package runs attacker code when imported, giving execution on the ground server", "It speeds up the satellite", "It encrypts the antenna", "It has no effect"], correctIndex: 0, explanation: "Supply-chain compromise yields code execution without exploiting a custom vuln." },
        { id: "space-06-q3", type: "Pivot", challenge: "The prize.", text: "After landing on the scheduling server, what is the high-value pivot target?", options: ["The antenna control unit and baseband that transmit telecommands", "The coffee machine", "The public website", "The HR database"], correctIndex: 0, explanation: "Owning the antenna controller means owning the uplink to the spacecraft." },
        { id: "space-06-q4", type: "Concentration", challenge: "Shared risk.", text: "Why does 'Ground Station as a Service' raise supply-chain risk?", options: ["Many missions share the same software and tenancy, so one poisoned component touches many", "It is in space", "It uses no software", "It is always air-gapped"], correctIndex: 0, explanation: "Concentration behind shared software multiplies the blast radius of one compromise." },
        { id: "space-06-q5", type: "Defense", challenge: "Stopping it.", text: "Which control most directly counters dependency poisoning?", options: ["Pin and verify dependencies (lockfiles, signatures, SBOMs)", "Buy a bigger antenna", "Lower the orbit", "Disable telemetry"], correctIndex: 0, explanation: "Verified, pinned dependencies plus SBOMs stop unverified code from entering the build." },
        { id: "space-06-q6", type: "Segmentation", challenge: "Limiting the blast.", text: "Why must the scheduling network be segmented from the antenna controller?", options: ["So a compromised business/scheduler host can't reach the hardware that commands the satellite", "To save electricity", "To improve the view", "It shouldn't be segmented"], correctIndex: 0, explanation: "Hard segmentation prevents a pivot from IT into the operational uplink path." },
      ],
    },
    ctf: {
      scenario: "Your target operates a ground station that uplinks to an imaging satellite. You won't touch orbit — you'll poison the open-source dependency its pass-scheduling software trusts, get code execution on the ground server, and pivot to the antenna control unit so you can command the dish. Capture the flag in three fragments.",
      hint: "Treat it like normal software security: map the ground software, exploit a trusted dependency, then pivot from the server to the antenna controller.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Exploit the poisoned third-party dependency. Run: exploit-dependency",
        "Pivot from the scheduler host to the antenna controller. Run: pivot-antenna",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{GR0UND_", label: "Mission Brief — Ground Segment" },
        { trigger: "exploit-dependency", value: "SUPPLY_CH41N_", label: "Dependency Poisoned — Code Execution" },
        { trigger: "pivot-antenna", value: "4NT3NN4_0WN3D}", label: "Antenna Controller Owned" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: GROUND SEGMENT",
          "Target: commercial ground station (Linux scheduler + COTS antenna controller)",
          "Recon: the pass scheduler imports 'gs-scheduler-utils' — a typosquat we control is live.",
          "",
          "Goal: code execution on the scheduler, then pivot to the antenna control unit.",
          "Sequence: exploit-dependency -> pivot-antenna",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-groundstation": () => ({
          lines: [
            "Mapping ground-station network 10.50.0.0/16 ...",
            "  10.50.1.10  pass-scheduler (Linux, imports gs-scheduler-utils)",
            "  10.50.9.4   antenna-control-unit (ACU, restricted VLAN)",
            "  10.50.9.5   baseband/modem (telecommand framing)",
            "Scheduler pulls a typosquattable dependency. Next: exploit-dependency",
          ],
        }),
        "exploit-dependency": () => ({
          lines: [
            "Publishing backdoored 'gs-scheduler-utils' to the internal mirror ...",
            "Scheduler deploy pulls it on next build ... payload executed.",
            "Shell on pass-scheduler (10.50.1.10) as svc-scheduler.",
            "Enumerating routes to the antenna VLAN ... reachable. Next: pivot-antenna",
          ],
        }),
        "pivot-antenna": () => ({
          lines: [
            "Pivoting 10.50.1.10 -> 10.50.9.4 (antenna-control-unit) ...",
            "ACU management interface uses default creds ... access granted.",
            "You can now point the dish and gate the uplink to the satellite.",
            "Ground segment owned. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── space-07: Onboard Buses — MIL-STD-1553 / SpaceWire (CTF) ─────────────────
  {
    epochId: "space-race",
    wonder: { name: "The spacecraft data bus", location: "Inside the satellite", era: "Modern", emoji: "🔌" },
    id: "space-07",
    order: 7,
    title: "Riding the Spacecraft Bus",
    subtitle: "MIL-STD-1553 & Onboard Bus Injection",
    category: "cybersecurity",
    xp: 172,
    badge: { id: "badge-space-1553", name: "Bus Rider", emoji: "🔌" },
    challengeType: "ctf",
    info: {
      tagline: "Inside a spacecraft, subsystems talk over a shared data bus that — like the car CAN bus — was built for reliability, not security. Reach the bus and you can impersonate the controller and command reaction wheels, radios, and payloads directly.",
      year: 2024,
      overview: [
        "Once you're past the link and onto the vehicle, the internal data bus is the nervous system. Many spacecraft (and most military/older designs) use MIL-STD-1553: a deterministic bus where a single Bus Controller (BC) polls Remote Terminals (RTs) — the subsystems. Like automotive CAN, it has essentially no authentication between nodes.",
        "Bus injection mirrors CAN-bus car hacking, in orbit:\n- TAP — gain access to the 1553 bus (via a compromised subsystem, debug port, or implant).\n- IMPERSONATE — spoof the Bus Controller (or a trusted RT) so your traffic looks authoritative; nodes trust messages by address, not identity.\n- COMMAND — issue messages to a Remote Terminal — a reaction wheel, a transmitter, a payload — to make it act on your behalf.",
        "This is the deepest level of spacecraft compromise:\n- Direct bus access bypasses the mission software's checks — you talk to the hardware subsystems themselves.\n- Commanding attitude actuators (reaction wheels, thrusters) can tumble the craft; commanding the transmitter can deny or hijack comms.\n- SpaceWire (a faster, packet-based bus) is common on modern payloads and shares the same trust-by-topology weakness — newer, but not inherently authenticated.",
      ],
      technical: {
        title: "BC/RT Roles and Trust-by-Address",
        body: [
          "MIL-STD-1553's design is the vulnerability:\n- One Bus Controller schedules all traffic; Remote Terminals respond only when addressed — deterministic and reliable, which is why avionics love it.\n- Messages are trusted by RT address and sub-address, with no cryptographic identity, so a node that can transmit can impersonate the BC or another RT.\n- Physical/logical access to the bus is the gate; once on it, the protocol offers no barrier to spoofed commands.",
          "Securing the bus is an active research and retrofit problem:\n- Approaches include bus-monitor anomaly detection (a legitimate BC has a known schedule; rogue traffic stands out), authentication add-ons, and strict subsystem isolation so one compromised RT can't reach the bus controller role.\n- SpaceWire and emerging buses (SpaceFibre, time-triggered Ethernet) add bandwidth but require deliberate security design — encryption/auth aren't free.\n- The principle echoes the whole epoch: trust must be based on verified identity, not on 'you're already inside the box'.",
        ],
      },
      incident: {
        title: "The Avionics Bus Problem — Borrowed From Cars and Planes",
        when: "2010s–present",
        where: "Aerospace & automotive security research",
        impact: "Research on CAN (cars) and 1553 (aircraft/spacecraft) shows unauthenticated internal buses let an attacker on the bus command any subsystem",
        body: [
          "The internal-bus weakness isn't unique to spacecraft. Automotive researchers famously demonstrated taking over a car by injecting on its CAN bus — no authentication between components meant any node could command brakes or steering. MIL-STD-1553, used in aircraft and many spacecraft, shares the same trust-by-topology design.",
          "Applied to space, the implications are stark:\n- Defense and academic research has shown 1553 traffic can be spoofed once an attacker reaches the bus, and has proposed monitors and authentication to detect or stop it.\n- It reframes 'getting inside the spacecraft' as not the end but the beginning — the internal network is its own battleground.\n- Modern programs increasingly require onboard intrusion detection and bus security, recognizing that a flying computer needs the same defense-in-depth as one on the ground.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tap the 1553 Bus", sub: "via a compromised subsystem", type: "attacker" },
          { label: "Spoof Bus Controller", sub: "trust-by-address, no auth", type: "system" },
          { label: "Inject to a Remote Terminal", sub: "reaction wheel / radio", type: "victim" },
          { label: "Subsystem Obeys", sub: "tumble or hijack the craft", type: "result" },
        ],
      },
      timeline: [
        { year: 1973, event: "MIL-STD-1553 standardized for military avionics — reliability, not security" },
        { year: 2015, event: "Researchers remotely take over a car via its unauthenticated CAN bus", highlight: true },
        { year: 2019, event: "Studies demonstrate spoofing on MIL-STD-1553 once bus access is gained" },
        { year: 2024, event: "Onboard intrusion detection and bus security become program requirements" },
      ],
      keyTakeaways: [
        "Spacecraft subsystems share an internal bus (MIL-STD-1553/SpaceWire) with little or no authentication",
        "Injection: tap the bus → spoof the Bus Controller (trust-by-address) → command a Remote Terminal subsystem",
        "Direct bus access bypasses mission software and talks straight to hardware (reaction wheels, radios, payload)",
        "Defense: bus-monitor anomaly detection, authentication add-ons, and isolating subsystems by verified identity",
      ],
      references: [
        { title: "MIL-STD-1553 — overview", url: "https://en.wikipedia.org/wiki/MIL-STD-1553" },
        { title: "SpaceWire — onboard data-handling network", url: "https://en.wikipedia.org/wiki/SpaceWire" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-07-q1", type: "Core Idea", challenge: "The nervous system.", text: "What is MIL-STD-1553 on a spacecraft?", options: ["A deterministic internal data bus where a Bus Controller polls subsystem Remote Terminals", "The radio uplink", "The solar array", "The ground station"], correctIndex: 0, explanation: "It's the internal bus connecting subsystems — like a car's CAN bus." },
        { id: "space-07-q2", type: "Weakness", challenge: "Trust by what?", text: "Why can an attacker on the 1553 bus impersonate the controller?", options: ["Messages are trusted by address, with no cryptographic identity", "It uses quantum encryption", "Only NASA can transmit", "The bus is air-gapped from itself"], correctIndex: 0, explanation: "Trust-by-address means any node that can transmit can spoof the BC or another RT." },
        { id: "space-07-q3", type: "Analogy", challenge: "Cars in orbit.", text: "Which earlier hack is most analogous to 1553 bus injection?", options: ["Automotive CAN-bus takeover of a car", "Cracking a Wi-Fi password", "A phishing email", "A SQL injection"], correctIndex: 0, explanation: "CAN and 1553 share the same unauthenticated trust-by-topology design." },
        { id: "space-07-q4", type: "Impact", challenge: "What you can do.", text: "What can commanding a Remote Terminal achieve?", options: ["Drive actuators (reaction wheels/thrusters) or the radio — tumbling or hijacking the craft", "Change the satellite's paint", "Refuel it", "Nothing useful"], correctIndex: 0, explanation: "Direct subsystem control can deny attitude, power, or comms — deep compromise." },
        { id: "space-07-q5", type: "Depth", challenge: "Past the software.", text: "Why is bus access considered the deepest compromise level?", options: ["It bypasses mission-software checks and talks directly to hardware subsystems", "It's the easiest first step", "It only reads data", "It can't affect the craft"], correctIndex: 0, explanation: "On the bus, you're past the software guards, commanding the hardware itself." },
        { id: "space-07-q6", type: "Defense", challenge: "Catching the rogue.", text: "How can rogue 1553 traffic be detected?", options: ["A bus monitor — the legitimate controller has a known schedule, so rogue traffic stands out", "By painting the bus", "By lowering the orbit", "It can't be detected"], correctIndex: 0, explanation: "Anomaly detection against the known BC schedule, plus auth add-ons and subsystem isolation." },
      ],
    },
    ctf: {
      scenario: "You've implanted on a spacecraft's instrument controller, which sits on the MIL-STD-1553 bus. The bus trusts messages by address — no authentication. Tap the bus, spoof the Bus Controller, and inject a command to the attitude subsystem's reaction-wheel Remote Terminal to spin the craft. Capture the flag in three fragments.",
      hint: "Trust-by-address is the flaw. Tap the bus, impersonate the Bus Controller, then inject a command to the target Remote Terminal.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Impersonate the Bus Controller on the 1553 bus. Run: spoof-bc",
        "Inject a command to the reaction-wheel Remote Terminal. Run: inject-command",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{M1L_1553_", label: "Mission Brief — Bus Injection" },
        { trigger: "spoof-bc", value: "BUS_C0NTR0LL3R_", label: "Bus Controller Spoofed" },
        { trigger: "inject-command", value: "SUBSYST3M_0WN3D}", label: "Remote Terminal Commanded" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: BUS INJECTION",
          "Foothold: instrument controller (RT-12) on the spacecraft MIL-STD-1553 bus.",
          "Bus trusts messages by RT address — no cryptographic identity.",
          "",
          "Goal: spoof the Bus Controller and command RT-04 (attitude / reaction wheels).",
          "Sequence: spoof-bc -> inject-command",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "tap-bus": () => ({
          lines: [
            "Tapping MIL-STD-1553 bus from RT-12 ...",
            "Observing schedule: BC polls RT-01..RT-16 every 20 ms.",
            "No authentication on the bus. Next: spoof-bc",
          ],
        }),
        "list-rts": () => ({
          lines: [
            "Remote Terminals on the bus:",
            "  RT-01 power   RT-04 attitude(reaction wheels)   RT-07 comms",
            "  RT-09 payload   RT-12 instrument(you)",
            "Target: RT-04. Next: spoof-bc",
          ],
        }),
        "spoof-bc": () => ({
          lines: [
            "Injecting frames with the Bus Controller address during idle slots ...",
            "RTs accept our frames as authoritative (trust-by-address).",
            "You are now acting as the Bus Controller. Next: inject-command",
          ],
        }),
        "inject-command": () => ({
          lines: [
            "Commanding RT-04 (attitude): set reaction-wheel torque = MAX, axis=yaw",
            "RT-04 ACK ... wheels spinning up ... craft yaw rate increasing.",
            "Subsystem under your control. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── space-08: Starlink & User Terminals (Quiz) ──────────────────────────────
  {
    epochId: "space-race",
    wonder: { name: "Starlink — the LEO mega-constellation", location: "~550 km low Earth orbit", era: "Modern", emoji: "🌐" },
    id: "space-08",
    order: 8,
    title: "Mega-constellations & the Dish in Your Yard",
    subtitle: "Starlink, LEO Architecture & the User Terminal",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-space-starlink", name: "Constellation Analyst", emoji: "🌐" },
    challengeType: "quiz",
    info: {
      tagline: "The new space race isn't one big satellite — it's thousands of small ones, and a cheap dish on every roof. That architecture is resilient by design, but it also hands an attacker physical access to a node of the network: the user terminal.",
      year: 2024,
      overview: [
        "Mega-constellations rewrote the rules. Instead of a few exquisite satellites in high orbit, operators fly thousands of mass-produced craft in LEO. Starlink is the archetype, with thousands of satellites delivering low-latency broadband and, increasingly, links between satellites by laser.",
        "The architecture is a security story in itself:\n- RESILIENCE — thousands of nodes mean no single satellite is critical; the network routes around losses, making it far harder to disable than one GEO bird.\n- INTER-SATELLITE LASER LINKS — data hops between satellites optically, reducing reliance on ground stations and making interception harder.\n- THE WEAK NODE — the cheap, mass-produced user terminal ('Dishy') sits in the attacker's physical possession, which is a gift to hardware hackers.",
        "Hardware attacks on the user terminal are real:\n- Researcher Lennert Wouters demonstrated a voltage fault-injection ('glitching') attack on the Starlink dish, using a custom modchip to bypass security and run his own code on the terminal.\n- That doesn't break the constellation, but it shows the user segment is a legitimate research/attack surface — exactly the kind of physical foothold the other stages start from.\n- Mega-constellations also raise non-cyber issues — spectrum crowding, light pollution for astronomers, and collision/debris risk in a crowded LEO.",
      ],
      technical: {
        title: "Why LEO Is Resilient — and the Terminal Isn't",
        body: [
          "The constellation's strengths are structural:\n- LEO's low altitude gives low latency (good for real-time use) at the cost of small per-satellite coverage — so you need many satellites and seamless handover between them.\n- Optical inter-satellite links create a mesh in space, so traffic need not touch the ground at every hop — harder to jam or intercept than a bent-pipe GEO link.\n- Sheer numbers provide graceful degradation: losing satellites reduces capacity, not connectivity.",
          "The user terminal is the soft, reachable edge:\n- It's a powerful, mass-produced computer the customer physically holds — ideal for fault injection, firmware extraction, and reverse engineering.\n- Wouters' glitch attack bypassed signature checks during boot to gain code execution; the value is research access and understanding, not constellation takeover.\n- The lesson generalizes: in any system, the node an attacker can physically touch (the dish, the modem, the receiver) is where hardware security must be hardest — and where this epoch's footholds often begin.",
        ],
      },
      incident: {
        title: "Glitching 'Dishy' — Hacking the Starlink Terminal",
        when: "2022",
        where: "Black Hat USA (Lennert Wouters, KU Leuven)",
        impact: "A ~$25 modchip and a voltage-glitch attack achieved code execution on the Starlink user terminal, showing the user segment is hackable",
        body: [
          "At Black Hat USA 2022, security researcher Lennert Wouters revealed a hardware attack against the Starlink user terminal. Using a custom-built modchip and a voltage fault-injection ('glitching') technique, he bypassed the terminal's security checks at boot and gained the ability to run his own code on the device.",
          "It was responsible research with a clear message:\n- The attack required physical access and targeted the terminal, not the satellites — it did not compromise the broader network.\n- SpaceX runs a bug-bounty program and the work was coordinated; it strengthened, rather than endangered, the system.\n- It crystallized a key point of the constellation era: when you put a capable computer in millions of homes, the user terminal becomes a serious hardware-security frontier — the very kind of physical foothold attackers leverage elsewhere in space systems.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Thousands of LEO Sats", sub: "mass-produced, ~550 km", type: "system" },
          { label: "Laser Inter-Sat Links", sub: "mesh in space", type: "result" },
          { label: "Graceful Degradation", sub: "no single critical node", type: "victim" },
          { label: "User Terminal ('Dishy')", sub: "physical, hackable edge", type: "attacker" },
        ],
      },
      timeline: [
        { year: 2019, event: "First operational Starlink satellites launch, beginning the mega-constellation era" },
        { year: 2021, event: "Inter-satellite laser links begin reducing ground-station dependence" },
        { year: 2022, event: "Lennert Wouters demonstrates a voltage-glitch hack of the Starlink terminal", highlight: true },
        { year: 2024, event: "Multiple mega-constellations (Kuiper, China's Qianfan/Guowang) race to deploy" },
      ],
      keyTakeaways: [
        "Mega-constellations fly thousands of mass-produced LEO satellites — resilient, low-latency, hard to disable",
        "Inter-satellite laser links create a space mesh, reducing ground dependence and interception",
        "The user terminal is the soft edge: an attacker physically holds a capable computer (Dishy was glitched in 2022)",
        "Constellations also raise spectrum crowding, astronomy light pollution, and LEO collision/debris concerns",
      ],
      references: [
        { title: "Lennert Wouters — glitched Starlink terminal (Black Hat 2022)", url: "https://www.blackhat.com/us-22/briefings/schedule/#glitched-on-earth-by-humans-a-black-box-security-evaluation-of-the-spacex-starlink-user-terminal-26336" },
        { title: "Satellite internet constellation — overview", url: "https://en.wikipedia.org/wiki/Satellite_internet_constellation" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-08-q1", type: "Core Idea", challenge: "The new shape.", text: "How do mega-constellations differ from traditional satellite systems?", options: ["Thousands of mass-produced LEO satellites instead of a few large high-orbit ones", "One giant satellite", "No satellites at all", "Only ground antennas"], correctIndex: 0, explanation: "Many small LEO craft replace a few exquisite GEO satellites." },
        { id: "space-08-q2", type: "Resilience", challenge: "Hard to kill.", text: "Why is a mega-constellation hard to disable?", options: ["Thousands of nodes mean no single satellite is critical; the network routes around losses", "Each satellite is bulletproof", "They are invisible", "They never fail"], correctIndex: 0, explanation: "Graceful degradation — losing satellites cuts capacity, not connectivity." },
        { id: "space-08-q3", type: "Lasers", challenge: "Mesh in space.", text: "What do inter-satellite laser links provide?", options: ["Optical hops between satellites, reducing ground-station reliance and interception", "Brighter night skies on purpose", "Power generation", "GPS timing"], correctIndex: 0, explanation: "Laser crosslinks form a space mesh that's harder to jam or intercept than a ground bent-pipe." },
        { id: "space-08-q4", type: "Weak Node", challenge: "In your hands.", text: "Which part of a mega-constellation is most exposed to hardware attack?", options: ["The user terminal — a capable computer the customer physically holds", "The satellites in orbit", "The Sun", "The laser links"], correctIndex: 0, explanation: "Physical possession enables fault injection, firmware extraction, and reverse engineering." },
        { id: "space-08-q5", type: "Real World", challenge: "Glitching Dishy.", text: "What did Lennert Wouters demonstrate in 2022?", options: ["A voltage-glitch hardware attack achieving code execution on the Starlink terminal", "Shooting down a Starlink satellite", "Jamming all of Starlink", "Stealing SpaceX source code"], correctIndex: 0, explanation: "A modchip + fault injection bypassed boot security on the terminal — the user segment is hackable." },
        { id: "space-08-q6", type: "Trade-offs", challenge: "The downsides.", text: "Which is a non-cyber concern raised by mega-constellations?", options: ["Spectrum crowding, astronomy light pollution, and LEO collision/debris risk", "They use no radio spectrum", "They make orbits emptier", "They have no downsides"], correctIndex: 0, explanation: "Crowding the sky and the spectrum brings real sustainability and astronomy issues." },
      ],
    },
  },

  // ─── space-09: Counterspace — Jam, Dazzle, ASAT (Quiz) ───────────────────────
  {
    epochId: "space-race",
    wonder: { name: "Contested orbit — the counterspace arena", location: "LEO and beyond", era: "Modern", emoji: "💥" },
    id: "space-09",
    order: 9,
    title: "Counterspace — Jam, Dazzle, Destroy",
    subtitle: "Electronic, Cyber & Kinetic Threats to Orbit",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-space-counter", name: "Counterspace Analyst", emoji: "💥" },
    challengeType: "quiz",
    info: {
      tagline: "Hacking is only one way to take a satellite out of the fight. The full counterspace toolkit runs from reversible jamming to permanent destruction — and the most violent option, blowing up a satellite, threatens everyone's orbit with debris for decades.",
      year: 2024,
      overview: [
        "Modern militaries treat space as a warfighting domain, with a spectrum of 'counterspace' weapons to deny, degrade, or destroy an adversary's space capabilities. Cyberattacks (the rest of this epoch) are one rung; understanding the whole ladder shows why cyber is often the preferred, deniable option.",
        "Counterspace weapons span reversible to permanent:\n- ELECTRONIC — jamming (drown the signal) and spoofing (fake it); cheap, reversible, and widely used today against GNSS and comms.\n- DIRECTED ENERGY — 'dazzling' or damaging optical sensors with lasers; degrades a payload without debris.\n- CYBER — intrusion into the link, ground, or spacecraft (this epoch); precise and deniable.\n- KINETIC — physically destroying a satellite with a missile (direct-ascent ASAT) or a co-orbital interceptor; the most escalatory and the dirtiest.",
        "Kinetic ASAT tests created a shared catastrophe:\n- Destroying a satellite shatters it into thousands of fragments that stay in orbit for years, threatening every other spacecraft — the 'Kessler syndrome' of cascading collisions.\n- This is why cyber and electronic means are often preferred: they can deny a capability without poisoning the orbit for everyone, including the attacker.\n- Space is now governed less by treaties than by norms and deterrence — and debris from a few tests already constrains how everyone operates.",
      ],
      technical: {
        title: "The Counterspace Ladder and the Debris Problem",
        body: [
          "Each rung has a different signature and cost:\n- Jamming/spoofing are reversible and deniable but localized and detectable; they're the everyday tools of contested regions.\n- Lasers can blind imaging sensors quietly; cyber can achieve precise effects (deny comms, corrupt data, force a slew) and is hard to attribute.\n- Kinetic kill is unambiguous, escalatory, and creates long-lived debris — a weapon that damages the commons.",
          "Debris is the strategic constraint:\n- Donald Kessler warned in 1978 that collisions could cascade, each impact creating more debris that causes more impacts — potentially making some orbits unusable.\n- China's 2007 FY-1C test alone created thousands of trackable fragments still tracked today; Russia's 2021 test forced the ISS crew to shelter.\n- The result: growing investment in space domain awareness (tracking objects), debris mitigation, and 'rendezvous and proximity operations' concerns (satellites that can approach others) — the non-cyber half of securing space.",
        ],
      },
      incident: {
        title: "ASAT Tests and the Debris They Left Behind",
        when: "2007–2021",
        where: "China, USA, India, Russia",
        impact: "Four nations have destroyed satellites with direct-ascent ASAT weapons; the debris endangers all spacefarers and forced an ISS crew to shelter in 2021",
        body: [
          "Anti-satellite weapons moved from theory to demonstration: China destroyed its FY-1C weather satellite in 2007, creating one of the largest debris fields ever; the U.S. struck the failing USA-193 satellite in 2008; India conducted 'Mission Shakti' in 2019; and Russia destroyed Cosmos 1408 in 2021, generating debris that forced the International Space Station crew to take shelter.",
          "The tests reshaped the strategic picture:\n- They proved a handful of states can physically destroy satellites — but at the cost of debris that threatens their own assets too.\n- The 2021 event spurred a U.S.-led pledge to halt destructive direct-ascent ASAT testing, an emerging norm rather than a binding ban.\n- For defenders, it cements why cyber/electronic counterspace and resilient architectures (mega-constellations, rapid replacement) matter: you can't 'patch' an orbit full of shrapnel, so deterrence, awareness, and resilience carry the load.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Electronic (Jam/Spoof)", sub: "reversible, everyday", type: "attacker" },
          { label: "Directed Energy / Cyber", sub: "degrade / precise & deniable", type: "system" },
          { label: "Kinetic ASAT", sub: "destroy — most escalatory", type: "victim" },
          { label: "Orbital Debris", sub: "Kessler risk for all", type: "result" },
        ],
      },
      timeline: [
        { year: 1978, event: "Donald Kessler describes the cascading-collision 'Kessler syndrome'" },
        { year: 2007, event: "China's FY-1C ASAT test creates thousands of long-lived debris fragments", highlight: true },
        { year: 2019, event: "India conducts 'Mission Shakti' direct-ascent ASAT test" },
        { year: 2021, event: "Russia destroys Cosmos 1408; ISS crew shelters from the debris" },
      ],
      keyTakeaways: [
        "Counterspace spans reversible to permanent: electronic (jam/spoof), directed energy, cyber, and kinetic ASAT",
        "Cyber/electronic means are often preferred — precise, deniable, and they don't poison the orbit with debris",
        "Kinetic ASAT tests (China 2007, US 2008, India 2019, Russia 2021) created lasting debris threatening everyone",
        "Kessler syndrome makes debris a shared catastrophe — driving space domain awareness, mitigation, and resilience",
      ],
      references: [
        { title: "Anti-satellite weapon — overview", url: "https://en.wikipedia.org/wiki/Anti-satellite_weapon" },
        { title: "Kessler syndrome — orbital debris cascade", url: "https://en.wikipedia.org/wiki/Kessler_syndrome" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-09-q1", type: "Core Idea", challenge: "The toolkit.", text: "What does 'counterspace' refer to?", options: ["The spectrum of weapons to deny, degrade, or destroy space capabilities", "A type of satellite", "A rocket fuel", "A ground station"], correctIndex: 0, explanation: "It ranges from reversible jamming to permanent kinetic destruction." },
        { id: "space-09-q2", type: "Spectrum", challenge: "Reversible vs not.", text: "Which counterspace method is reversible and used routinely today?", options: ["Electronic jamming/spoofing", "Kinetic missile strike", "Blowing up the ground station", "Nuclear detonation"], correctIndex: 0, explanation: "Jamming and spoofing are cheap, reversible, and common in contested regions." },
        { id: "space-09-q3", type: "Why Cyber", challenge: "The quiet option.", text: "Why is cyber often preferred over kinetic attack?", options: ["It's precise and deniable and doesn't create orbit-poisoning debris", "It's louder", "It always destroys the satellite", "It requires a missile"], correctIndex: 0, explanation: "Cyber/electronic effects avoid the debris and escalation of kinetic kills." },
        { id: "space-09-q4", type: "Debris", challenge: "The cascade.", text: "What is the Kessler syndrome?", options: ["Cascading collisions where debris causes more debris, potentially making orbits unusable", "A satellite battery fault", "A type of rocket", "A ground-station outage"], correctIndex: 0, explanation: "Donald Kessler (1978) warned collisions could cascade and choke an orbit." },
        { id: "space-09-q5", type: "History", challenge: "Who tested.", text: "Which event forced the ISS crew to shelter in 2021?", options: ["Russia's destruction of Cosmos 1408 in a kinetic ASAT test", "A solar flare", "A Starlink launch", "A GPS outage"], correctIndex: 0, explanation: "The 2021 Russian ASAT test created debris that endangered the ISS." },
        { id: "space-09-q6", type: "Defense", challenge: "Living with it.", text: "Since you can't 'patch' orbital debris, what carries the defensive load?", options: ["Space domain awareness, debris mitigation, and resilient architectures", "Ignoring the problem", "Only treaties", "Bigger satellites"], correctIndex: 0, explanation: "Tracking, mitigation, deterrence, and resilient constellations manage a risk you can't undo." },
      ],
    },
  },

  // ─── space-10: Securing the Constellation Era (Quiz capstone) ────────────────
  {
    epochId: "space-race",
    wonder: { name: "Securing space — the defender's mission", location: "Ground, link, and orbit", era: "Modern", emoji: "🛡️" },
    id: "space-10",
    order: 10,
    title: "Securing the Constellation Era",
    subtitle: "Frameworks, Zero-Trust & a Career in Space Cyber",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-space-secure", name: "Space Guardian", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "You've broken the link, the ground, and the bus. Now flip sides. Securing space systems means applying hard-won terrestrial security — authentication, encryption, segmentation, zero-trust — to a domain that long assumed distance was a defense. This is the frontier, and the careers are wide open.",
      year: 2024,
      overview: [
        "Every attack in this epoch has the same root cause: trust granted by default — to a radio link, a ground network, an internal bus, a user terminal. Securing space inverts that: verify everything, everywhere, because 'far away' protects nothing.",
        "The defender's playbook maps directly to the attacks you ran:\n- LINK — authenticate and encrypt commands and telemetry (CCSDS SDLS), with replay protection — closing the takeover and decode stages.\n- GROUND — segment hard, secure the software supply chain (SBOMs, signing), and treat ground stations as critical OT.\n- SPACE — onboard intrusion detection, bus security, and signed firmware so a craft resists command and bus injection.",
        "Frameworks and institutions now exist to organize this work:\n- SPARTA (The Aerospace Corporation) is the space-focused attack matrix (like MITRE ATT&CK for spacecraft); CCSDS provides the security standards; NIST and CISA give guidance now that space is named critical infrastructure.\n- Information sharing runs through the Space ISAC; the U.S. Space Force and allied space commands defend military assets, and 'Guardians' is a real job title.\n- Long-lived satellites add a twist — crypto-agility and post-quantum readiness matter, because a bird launched today may still be flying when today's encryption is broken.",
      ],
      technical: {
        title: "Zero-Trust for Spacecraft, and Where the Jobs Are",
        body: [
          "Zero-trust translated to space is concrete:\n- Authenticate every command and verify every device identity; never trust a node because it's 'inside' the link, the ground net, or the bus.\n- Encrypt link traffic (SDLS) so a decodable downlink isn't a public one; sign firmware so a malicious push can't brick or backdoor a fleet.\n- Build for resilience: assume jamming, assume intrusion attempts, and design constellations and operations that degrade gracefully and recover fast.",
          "Space cyber is a growing, accessible career:\n- The skills are mostly transferable security skills — RF/SDR, embedded/hardware, network defense, reverse engineering, and cloud — applied to a space context.\n- On-ramps include Hack-A-Sat / Hack-A-Sat's successors and CTFs, the Space ISAC, university CubeSat programs, and government/Space Force and commercial NewSpace roles.\n- There is no single 'space security certification' yet, so demonstrated skill (CTFs, projects, SDR experiments) and a grasp of the standards (CCSDS, SPARTA) carry real weight — which is exactly what this epoch builds.",
        ],
      },
      incident: {
        title: "Space Becomes Critical Infrastructure",
        when: "2020s",
        where: "United States and allies",
        impact: "Governments now treat space systems as critical infrastructure, standing up defenders, frameworks, and information-sharing for a domain once assumed safe by distance",
        body: [
          "The 2022 Viasat hack and a steady drumbeat of research forced a shift: space systems are now widely recognized as critical infrastructure, with the security attention that implies. The U.S. Space Force (2019) and allied space commands defend military space; the Space ISAC coordinates threat sharing across the commercial sector.",
          "The ecosystem is maturing fast:\n- Aerospace's SPARTA gave the field a common language for spacecraft threats; CCSDS SDLS and emerging standards give engineers concrete controls.\n- Competitions, bug bounties (SpaceX and others), and CubeSat programs have created real on-ramps for newcomers.\n- The arc of this epoch is the arc of the field: from 'distance is security' to treating a satellite as what it is — a networked computer that must be defended like any other, by people who understand both space and security.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Default Trust", sub: "the root of every attack", type: "victim" },
          { label: "Authenticate + Encrypt", sub: "link, ground, bus", type: "system" },
          { label: "Segment + Sign + Detect", sub: "zero-trust for spacecraft", type: "attacker" },
          { label: "Resilient Space Systems", sub: "defended like any network", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "U.S. Space Force established; the Space ISAC begins coordinating threat sharing" },
        { year: 2022, event: "Viasat hack accelerates treating space as critical infrastructure", highlight: true },
        { year: 2022, event: "SPARTA released — a MITRE ATT&CK-style matrix for spacecraft" },
        { year: 2024, event: "Crypto-agility / post-quantum readiness rises for long-lived satellites" },
      ],
      keyTakeaways: [
        "Every attack here stems from default trust; security means verifying the link, ground, bus, and devices",
        "Defender's playbook: authenticate/encrypt commands (SDLS), segment + secure the supply chain, sign firmware, detect onboard",
        "Frameworks/institutions: SPARTA (Aerospace), CCSDS standards, Space ISAC, U.S. Space Force — space is critical infrastructure",
        "Space cyber is an open, accessible career — transferable skills (RF/SDR, embedded, network defense) plus the standards",
      ],
      references: [
        { title: "SPARTA — space attack research & tactic analysis (Aerospace)", url: "https://sparta.aerospace.org/" },
        { title: "Space ISAC — space information sharing & analysis center", url: "https://s-isac.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "space-10-q1", type: "Core Idea", challenge: "The root cause.", text: "What single root cause underlies most space-system attacks?", options: ["Trust granted by default — to links, ground nets, buses, and devices", "Too much encryption", "Satellites being too small", "A lack of rockets"], correctIndex: 0, explanation: "Securing space means replacing default trust with verification everywhere." },
        { id: "space-10-q2", type: "Link", challenge: "Securing the uplink.", text: "Which standard adds authentication/encryption to space links?", options: ["CCSDS SDLS (Space Data Link Security)", "HTTP", "FTP", "SMTP"], correctIndex: 0, explanation: "SDLS protects link-layer traffic — closing the takeover and decode attacks." },
        { id: "space-10-q3", type: "Framework", challenge: "ATT&CK for space.", text: "What is SPARTA?", options: ["A space-focused attack matrix (like MITRE ATT&CK for spacecraft) from Aerospace", "A rocket engine", "A satellite constellation", "An encryption algorithm"], correctIndex: 0, explanation: "SPARTA catalogs spacecraft threat techniques as a common defender language." },
        { id: "space-10-q4", type: "Zero-Trust", challenge: "The principle.", text: "How does zero-trust apply to a spacecraft bus or link?", options: ["Never trust a node for being 'inside' — authenticate commands and verify device identity", "Trust anything already connected", "Disable all authentication", "Trust the link because space is far"], correctIndex: 0, explanation: "Verify identity per message/device rather than trusting position or topology." },
        { id: "space-10-q5", type: "Future Risk", challenge: "Long-lived birds.", text: "Why does crypto-agility / post-quantum readiness matter for satellites?", options: ["A satellite launched today may still fly when today's encryption is broken", "Satellites don't use encryption", "Quantum computers can't affect space", "It only matters for ground stations"], correctIndex: 0, explanation: "Long mission lifetimes mean today's crypto must be upgradable to survive future threats." },
        { id: "space-10-q6", type: "Careers", challenge: "Getting in.", text: "What's the most realistic on-ramp to a space-cyber career today?", options: ["Transferable skills (RF/SDR, embedded, network defense) + CTFs and the standards — no single cert exists yet", "A pilot's license only", "Owning a satellite", "Nothing — it's closed"], correctIndex: 0, explanation: "Demonstrated skill and knowledge of CCSDS/SPARTA carry weight; this epoch builds exactly that." },
      ],
    },
  },
];
