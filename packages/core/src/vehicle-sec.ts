import type { StageConfig, EpochConfig } from "./types";

export const vehicleSecEpoch: EpochConfig = {
  id: "vehicle-sec",
  name: "Wired & Autonomous",
  subtitle: "Hacking Electric, Connected & Self-Driving Vehicles",
  description:
    "A modern car is a network of 100+ computers on wheels — and an electric, connected, increasingly self-driving one is a rolling attack surface. Build the foundations (the in-vehicle network, ECUs, the four domains) then go deep: inject on the CAN bus, brute a UDS seed-key, relay a keyless fob, hijack an EV charging session, own the telematics unit for remote control (the Jeep Cherokee hack), spoof ADAS sensors into phantom braking, and secure the fleet from firmware to cloud API.",
  emoji: "🚗",
  color: "lime",
  unlocked: true,
};

export const vehicleSecStages: StageConfig[] = [
  // ─── vehicle-01: The Connected Car (Quiz) ────────────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The modern automobile — a computer on wheels", location: "Everywhere", era: "Modern", emoji: "🚗" },
    id: "vehicle-01",
    order: 1,
    title: "The Computer on Wheels",
    subtitle: "ECUs, In-Vehicle Networks & the Four Domains",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-veh-arch", name: "Vehicle Architect", emoji: "🚗" },
    challengeType: "quiz",
    info: {
      tagline: "Before you can hack a car you have to stop thinking of it as a machine and start seeing it as a network. A modern vehicle runs 100+ computers, tens of millions of lines of code, and several internal networks — and that is the attack surface.",
      year: 2024,
      overview: [
        "A modern car is a distributed computer system that happens to have wheels. It contains 100+ ECUs (Electronic Control Units) — small computers that run everything from the engine and brakes to the seat memory — wired together over internal networks. Understanding that architecture is the whole game.",
        "Engineers group the ECUs into functional 'domains', and an attacker maps the same map:\n- POWERTRAIN — engine/motor, transmission, and (on an EV) the battery and inverter.\n- CHASSIS — braking, steering, stability control — the safety-critical movers.\n- BODY — doors, lights, windows, climate, keyless entry.\n- INFOTAINMENT & TELEMATICS — the screen, connectivity, and the cellular link to the outside world.",
        "Those domains talk over several bus technologies, each a target:\n- CAN — the classic, robust, broadcast in-vehicle bus (no authentication by design).\n- LIN — a cheap, slow bus for simple body devices; FlexRay — faster, for safety systems.\n- AUTOMOTIVE ETHERNET — high-bandwidth for cameras and zonal architectures.\n- A central GATEWAY routes between them — which means the security question is: can a message from the internet-facing infotainment reach the brakes?",
      ],
      technical: {
        title: "The Gateway, and Why Segmentation Is Everything",
        body: [
          "The architecture is shifting, but the risk is constant:\n- Older cars are 'flat' — many ECUs on shared CAN buses with a gateway that may not strictly isolate them, so a foothold in one domain can reach others.\n- Newer 'zonal' architectures use Automotive Ethernet backbones with a powerful central compute and stricter gateways — better, if the segmentation is real.\n- The crucial question for every vehicle is whether the connected, internet-facing parts (infotainment/telematics) are truly separated from the safety-critical chassis and powertrain.",
          "Standards now govern this as safety and security:\n- ISO 26262 covers functional safety; ISO/SAE 21434 covers cybersecurity engineering across the vehicle lifecycle; UN Regulation No. 155 mandates a cybersecurity management system for new vehicles.\n- These exist because cars are safety-critical: a security flaw that reaches the chassis domain is a physical-harm problem, not a data-breach problem.\n- The throughline of this epoch: a vehicle is a network of computers, and it must be secured like one — with authentication, segmentation, and monitoring — not trusted because it's 'just a car'.",
        ],
      },
      incident: {
        title: "The Study That Proved a Car Is a Computer You Can Own",
        when: "2010–2011",
        where: "UCSD & University of Washington",
        impact: "Academic researchers showed that gaining access to a car's internal network let them control brakes, engine, and more — founding modern automotive security",
        body: [
          "In 2010, researchers from UCSD and the University of Washington published 'Experimental Security Analysis of a Modern Automobile', showing that once on the car's CAN network they could control safety-critical functions — disabling brakes, killing the engine, manipulating the dashboard. A 2011 follow-up showed they could get in remotely (via cellular, Bluetooth, even a malicious CD).",
          "It changed the field's assumptions:\n- It proved the internal network had essentially no authentication — any node could command any function.\n- It showed the connected attack surface (telematics, media, Bluetooth) could bridge to that internal network.\n- Five years later, the Jeep Cherokee hack would make the threat undeniable to the public and regulators — but the foundations were laid here: a car is a hackable computer network.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Infotainment/Telematics", sub: "internet-facing domain", type: "attacker" },
          { label: "Central Gateway", sub: "routes between buses", type: "system" },
          { label: "Body / Chassis / Powertrain", sub: "the other domains", type: "victim" },
          { label: "Safety-Critical Control", sub: "brakes, steering, motor", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "Bosch introduces the CAN bus — robust in-vehicle networking, no security built in" },
        { year: 2010, event: "Academic study shows full control of a car via its internal network", highlight: true },
        { year: 2021, event: "ISO/SAE 21434 + UN R155 set automotive cybersecurity requirements" },
        { year: 2024, event: "Zonal architectures with Automotive Ethernet and central compute go mainstream" },
      ],
      keyTakeaways: [
        "A modern car is a network of 100+ ECUs grouped into domains: powertrain, chassis, body, infotainment/telematics",
        "Internal buses (CAN, LIN, FlexRay, Automotive Ethernet) connect them; a gateway routes — segmentation is key",
        "The central security question: can a message from the connected domain reach the brakes and steering?",
        "Standards (ISO 26262 safety, ISO/SAE 21434, UN R155) exist because a car flaw is a physical-harm problem",
      ],
      references: [
        { title: "Experimental Security Analysis of a Modern Automobile (2010)", url: "https://www.autosec.org/pubs/cars-oakland2010.pdf" },
        { title: "ISO/SAE 21434 — road vehicle cybersecurity engineering", url: "https://en.wikipedia.org/wiki/ISO/SAE_21434" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-01-q1", type: "Core Idea", challenge: "What a car is.", text: "How is a modern vehicle best understood for security?", options: ["As a distributed network of 100+ computers (ECUs)", "As a purely mechanical machine", "As a single computer", "As a smartphone"], correctIndex: 0, explanation: "Many ECUs on internal networks — the architecture is the attack surface." },
        { id: "vehicle-01-q2", type: "Domains", challenge: "Grouping.", text: "Which is a vehicle functional domain?", options: ["Chassis (braking, steering, stability)", "The trunk", "The paint", "The tires"], correctIndex: 0, explanation: "Domains are powertrain, chassis, body, and infotainment/telematics." },
        { id: "vehicle-01-q3", type: "Buses", challenge: "The classic bus.", text: "What is the CAN bus?", options: ["The robust, broadcast in-vehicle network — with no authentication by design", "A USB port", "The radio antenna", "The fuel line"], correctIndex: 0, explanation: "CAN is the workhorse internal bus; its lack of authentication is the core weakness." },
        { id: "vehicle-01-q4", type: "Gateway", challenge: "The pivot risk.", text: "Why is the central gateway security-critical?", options: ["It routes between buses — if weak, a connected-domain foothold can reach safety-critical domains", "It stores music", "It charges the battery", "It controls the headlights only"], correctIndex: 0, explanation: "Real segmentation at the gateway is what keeps infotainment away from the brakes." },
        { id: "vehicle-01-q5", type: "History", challenge: "The founding study.", text: "What did the 2010 UCSD/UW study demonstrate?", options: ["Access to the internal network allowed control of brakes, engine, and dashboard", "That cars can't be hacked", "A new engine design", "A fuel-economy trick"], correctIndex: 0, explanation: "It proved the internal network had no authentication — founding automotive security." },
        { id: "vehicle-01-q6", type: "Standards", challenge: "Why regulated.", text: "Why do standards like ISO/SAE 21434 and UN R155 exist?", options: ["A security flaw reaching the chassis/powertrain is a physical-safety problem", "To slow down carmakers", "Only for emissions", "They don't exist"], correctIndex: 0, explanation: "Cars are safety-critical, so cybersecurity is mandated across the lifecycle." },
      ],
    },
  },

  // ─── vehicle-02: The CAN Bus (CTF) ───────────────────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The CAN bus — the car's nervous system", location: "Inside every vehicle", era: "1986–today", emoji: "🔌" },
    id: "vehicle-02",
    order: 2,
    title: "Injecting on the CAN Bus",
    subtitle: "The Broadcast Bus With No Authentication",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-veh-can", name: "Bus Injector", emoji: "🔌" },
    challengeType: "ctf",
    info: {
      tagline: "The CAN bus is brilliant engineering and a security nightmare: every message is broadcast to every ECU, and nothing checks who sent it. Tap the bus, learn which message ID controls what, and inject your own to make the car obey you.",
      year: 2024,
      overview: [
        "CAN (Controller Area Network) is the bus that ties a car's ECUs together. It was designed in 1986 for reliability in a noisy electrical environment — and security simply wasn't a requirement. That decision still defines automotive hacking today.",
        "CAN's design is the vulnerability:\n- BROADCAST — every frame goes to every node; there is no addressing of a specific recipient and no privacy.\n- NO AUTHENTICATION — a frame carries an arbitration ID and data, but nothing proves which ECU sent it, so any node can impersonate any other.\n- PRIORITY BY ID — lower arbitration IDs win the bus, so a flood of high-priority frames can even drown out legitimate ones (a bus-level denial of service).",
        "Your attack is the standard CAN workflow, weaponized:\n- SNIFF — passively capture traffic and correlate frames with actions (press a button, watch which ID changes).\n- REVERSE — identify the arbitration ID and data bytes that command a target function.\n- INJECT — transmit your own frames with that ID; receiving ECUs can't tell yours from the real one, so the function actuates on command.",
      ],
      technical: {
        title: "Arbitration IDs, DBC Files, and Frame Injection",
        body: [
          "Reversing CAN is detective work with tools:\n- A CAN frame has an arbitration ID (priority + rough 'topic') and up to 8 data bytes; mapping IDs to functions is the core skill, often captured in a 'DBC' database file.\n- 'Replay' (re-sending captured frames) and 'fuzzing' (sweeping IDs/values) are how researchers discover what each message does without documentation.\n- Once you know the steering, speed, or door ID, injection is trivial — the bus has no concept of a forged frame.",
          "Defenses are retrofits onto a bus that resists them:\n- CAN-FD and add-on schemes (e.g., AUTOSAR SecOC) add message authentication codes and freshness counters so forged/replayed frames are rejected — but they cost bus bandwidth and aren't universal.\n- Intrusion detection systems watch for impossible frame timing or values (a legit ECU has a known cadence; injected frames often clash).\n- Strong gateway segmentation limits where an attacker who reaches one bus can send — the same 'don't trust by topology' lesson as every internal bus in this curriculum.",
        ],
      },
      incident: {
        title: "Turning a Car's Own Messages Against It",
        when: "2010–2015",
        where: "Automotive security research community",
        impact: "Researchers repeatedly showed that CAN injection can control steering, braking, acceleration, and instruments on production cars",
        body: [
          "From the 2010 academic studies through the 2015 Jeep Cherokee work, researchers consistently demonstrated the same primitive: get onto the CAN bus, and you can command safety-critical functions by injecting frames. The car's own ECUs faithfully obey, because CAN never asks for proof of identity.",
          "More recently, the technique went criminal:\n- Car thieves adopted 'CAN injection' attacks — splicing into a wire (often via a headlight harness) to inject unlock/start frames and steal vehicles in minutes, no key needed.\n- It moved CAN hacking from conference demos to a real-world theft method, captured in 2023 analyses of stolen Toyota/Lexus vehicles.\n- The lesson is blunt: an unauthenticated internal bus is a standing invitation, and physical or pivoted access to it is game over without added message authentication.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Tap the CAN Bus", sub: "OBD-II port or wire splice", type: "attacker" },
          { label: "Sniff + Reverse", sub: "map ID -> function", type: "system" },
          { label: "Inject Frames", sub: "no auth — ECUs obey", type: "victim" },
          { label: "Function Actuates", sub: "unlock, accelerate, brake", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "Bosch CAN released — robust and broadcast, with no security" },
        { year: 2015, event: "Jeep Cherokee hack uses CAN injection to control a car remotely", highlight: true },
        { year: 2020, event: "AUTOSAR SecOC and CAN-FD bring optional message authentication" },
        { year: 2023, event: "'CAN injection' becomes a real-world car-theft technique" },
      ],
      keyTakeaways: [
        "CAN is broadcast with no authentication — any node can impersonate any other by sending a frame",
        "Attack: sniff traffic, reverse the arbitration ID/data for a function, then inject your own frames",
        "Lower arbitration IDs win the bus, enabling priority-flood denial of service too",
        "Defenses (SecOC MACs, CAN-FD, IDS, gateway segmentation) retrofit auth onto a bus that lacks it",
      ],
      references: [
        { title: "CAN bus — overview", url: "https://en.wikipedia.org/wiki/CAN_bus" },
        { title: "CAN injection car theft (Ken Tindell / Canis Labs)", url: "https://kentindell.github.io/2023/04/03/can-injection/" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-02-q1", type: "Core Idea", challenge: "Why vulnerable.", text: "What makes the CAN bus inherently insecure?", options: ["It broadcasts frames with no authentication of the sender", "It is encrypted too heavily", "It uses passwords", "It is wireless"], correctIndex: 0, explanation: "No sender authentication means any node can forge any message." },
        { id: "vehicle-02-q2", type: "Step 1", challenge: "Listen first.", text: "What is the first step in CAN reversing?", options: ["Sniff traffic and correlate frames with actions", "Inject random frames immediately", "Encrypt the bus", "Replace the ECU"], correctIndex: 0, explanation: "Passive capture maps which arbitration ID/data controls which function." },
        { id: "vehicle-02-q3", type: "Frames", challenge: "Anatomy.", text: "What does a CAN frame contain?", options: ["An arbitration ID (priority/topic) and up to 8 data bytes", "An IP address and port", "A username and password", "A URL"], correctIndex: 0, explanation: "The arbitration ID sets priority and rough topic; data bytes carry the payload." },
        { id: "vehicle-02-q4", type: "DoS", challenge: "Winning the bus.", text: "How can CAN enable a denial of service?", options: ["Flooding low (high-priority) arbitration IDs can drown out legitimate frames", "By unplugging the radio", "By draining the battery only", "It can't"], correctIndex: 0, explanation: "Lower IDs win arbitration, so a priority flood can starve real traffic." },
        { id: "vehicle-02-q5", type: "Injection", challenge: "The payoff.", text: "Why does frame injection work once you know the right ID?", options: ["Receiving ECUs can't distinguish a forged frame from a legitimate one", "Cars verify every frame", "The ID is encrypted", "Injection requires the key fob"], correctIndex: 0, explanation: "No authentication means an injected frame is obeyed like any other." },
        { id: "vehicle-02-q6", type: "Real World", challenge: "Theft technique.", text: "How did criminals adopt CAN injection?", options: ["Splicing into a wire to inject unlock/start frames and steal cars keylessly", "By picking the lock", "By hotwiring the engine mechanically", "They didn't"], correctIndex: 0, explanation: "CAN injection theft (e.g., via a headlight harness) steals cars in minutes." },
        { id: "vehicle-02-q7", type: "Defense", challenge: "Adding trust.", text: "What retrofits authentication onto CAN?", options: ["AUTOSAR SecOC message authentication codes + freshness counters", "Brighter headlights", "A bigger engine", "Removing the gateway"], correctIndex: 0, explanation: "SecOC/CAN-FD add MACs and freshness so forged/replayed frames are rejected." },
        { id: "vehicle-02-q8", type: "Detection", challenge: "Catching injection.", text: "How can an IDS spot injected CAN frames?", options: ["By detecting impossible frame timing/values vs. an ECU's known cadence", "By reading the license plate", "By checking tire pressure", "It cannot"], correctIndex: 0, explanation: "Legit ECUs transmit at known rates; injected frames disturb the timing/values." },
      ],
    },
    ctf: {
      scenario: "You've clipped a CAN interface onto the target vehicle's OBD-II port. The bus has no authentication — any frame you send is obeyed. Sniff the traffic, reverse which arbitration ID commands the door locks, and inject a frame to pop them. Capture the operation flag in three fragments.",
      hint: "Listen, reverse, inject. Sniff the bus to map IDs to functions, find the door-lock ID, then transmit your own frame.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Passively capture the bus traffic. Run: sniff-can",
        "Reverse which arbitration ID commands the locks. Run: map-ids",
        "Inject the door-unlock frame you reversed. Run: inject-frame",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{C4N_BUS_", label: "Mission Brief — CAN Injection" },
        { trigger: "sniff-can", value: "N0_", label: "Bus Sniffed" },
        { trigger: "map-ids", value: "4UTH_", label: "Door-Lock ID Reversed — No Authentication" },
        { trigger: "inject-frame", value: "1NJ3CT3D}", label: "Frame Injected — Doors Unlocked" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: CAN INJECTION",
          "Access: CAN interface on the OBD-II port (500 kbit/s, no SecOC).",
          "Goal: reverse the door-lock arbitration ID and inject an unlock frame.",
          "",
          "CAN is broadcast + unauthenticated — a forged frame is obeyed.",
          "Sequence: sniff-can -> inject-frame",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "sniff-can": () => ({
          lines: [
            "$ sniff-can --bitrate 500k",
            "Capturing CAN @ 500 kbit/s — every frame is broadcast and unauthenticated (no SecOC).",
            "Logged ~1,200 frames while you worked the lock button.",
            "Next: map-ids",
          ],
        }),
        "map-ids": () => ({
          lines: [
            "$ map-ids --correlate lock-button",
            "Correlating captured frames with the LOCK/UNLOCK press:",
            "  ID 0x19B  byte0: 01=lock 02=unlock   <-- door-lock command",
            "  ID 0x0C9 = powertrain (rpm/speed), ID 0x244 = door-ajar (ignore).",
            "Door locks live on arbitration ID 0x19B. Next: inject-frame",
          ],
        }),
        "inject-frame": () => ({
          lines: [
            "$ inject-frame --id 0x19B --data 02000000...",
            "Body control module accepts the forged frame (no authentication) ...",
            "*CLUNK* — all doors unlocked. CAN injection successful.",
            "Fix: SecOC message authentication + a gateway that filters OBD-II writes.",
            "Run 'assemble', then submit the flag.",
          ],
        }),
        "list-ecus": () => ({
          lines: [
            "ECUs seen on the bus: BCM(body), PCM(powertrain), ABS(chassis), IPC(cluster), TCU(telematics)",
            "Door locks are owned by the BCM. Next: sniff-can",
          ],
        }),
      },
    },
  },

  // ─── vehicle-03: UDS Diagnostics & Seed-Key (CTF) ────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The diagnostic port — UDS over the wire", location: "OBD-II / diagnostic bus", era: "Modern", emoji: "🩺" },
    id: "vehicle-03",
    order: 3,
    title: "Cracking the ECU's Seed-Key",
    subtitle: "UDS Diagnostics & Security Access",
    category: "cybersecurity",
    xp: 168,
    badge: { id: "badge-veh-uds", name: "Diagnostic Breaker", emoji: "🩺" },
    challengeType: "ctf",
    info: {
      tagline: "Every ECU has a maintenance backdoor by design: the UDS diagnostic protocol, with a 'Security Access' challenge that's supposed to keep you out. Too often the challenge is weak — and behind it lies the power to reflash the ECU's firmware.",
      year: 2024,
      overview: [
        "UDS (Unified Diagnostic Services, ISO 14229) is the standardized language tools use to talk to ECUs — read fault codes, run actuator tests, and crucially, reprogram firmware. It's how mechanics work on cars, and it's a rich attack surface.",
        "UDS gates its powerful functions behind 'Security Access' (service 0x27), a seed-key challenge:\n- The tool requests a SEED (a random-ish number) from the ECU.\n- The tool computes a KEY from the seed using a secret algorithm and sends it back.\n- If the key matches, the ECU unlocks privileged services like writing memory and flashing firmware.",
        "The weakness is usually the algorithm, not the idea:\n- Many seed-key algorithms are simple, reused across models, or extractable from a diagnostic tool or ECU firmware — so an attacker can compute valid keys.\n- Some ECUs use short seeds or have no lockout, inviting brute force.\n- Once Security Access is granted, you can enter programming mode and reflash the ECU — turning a diagnostic feature into full control of that computer.",
      ],
      technical: {
        title: "Service 0x27, Sessions, and Reflashing",
        body: [
          "The UDS state machine is the map:\n- Diagnostic sessions (service 0x10) move the ECU from 'default' to 'extended' or 'programming' modes that expose more services.\n- Security Access (0x27) request-seed/send-key unlocks the privileged level; RoutineControl (0x31), WriteMemoryByAddress (0x3D), and RequestDownload/TransferData (0x34/0x36) enable reflashing.\n- An attacker who recovers the seed-key algorithm (from a tool, firmware dump, or reverse engineering) can script the whole unlock.",
          "Securing diagnostics is an active area:\n- Modern guidance uses strong, per-ECU cryptographic Security Access (challenge-response with real keys), lockouts after failed attempts, and signed firmware so even a granted reflash can't install unsigned code.\n- 'Authenticated diagnostics' and certificate-based access are replacing shared, guessable algorithms.\n- The principle echoes the rest of the epoch: a maintenance backdoor must be protected with real cryptography, because anything weaker becomes an attacker's front door to reprogram the car.",
        ],
      },
      incident: {
        title: "When the Seed-Key Was Just Obfuscation",
        when: "2010s–present",
        where: "Automotive ECU research & tuning scene",
        impact: "Repeatedly, ECU seed-key algorithms have been extracted or reverse-engineered, enabling unauthorized reflashing — for both tuning and attack",
        body: [
          "The car-tuning community and security researchers have, for years, recovered seed-key algorithms from diagnostic tools and ECU firmware. Because the same or similar algorithms were reused widely and amounted to obfuscation rather than cryptography, computing valid keys became routine — enabling 'chip tuning' and, in the wrong hands, malicious reflashing.",
          "It illustrates a classic security failure:\n- 'Security through obscurity' — a secret algorithm — collapses once the secret leaks, and in automotive it leaked through tools and dumps.\n- A granted Security Access plus unsigned firmware means an attacker can persist malware in an ECU that survives reboots.\n- The fix is real cryptography (strong keys, lockouts) and signed firmware — which is exactly where the industry, prodded by ISO/SAE 21434, is heading.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Enter Diagnostic Session", sub: "UDS 0x10 extended/programming", type: "attacker" },
          { label: "Request Seed (0x27)", sub: "ECU returns a challenge", type: "system" },
          { label: "Compute/Brute Key", sub: "weak or extracted algorithm", type: "victim" },
          { label: "Reflash Firmware", sub: "full control of the ECU", type: "result" },
        ],
      },
      timeline: [
        { year: 2006, event: "UDS (ISO 14229) standardizes diagnostic services across manufacturers" },
        { year: 2015, event: "Tuning/research scene routinely extracts seed-key algorithms", highlight: true },
        { year: 2021, event: "ISO/SAE 21434 pushes authenticated diagnostics and signed firmware" },
        { year: 2024, event: "Certificate-based, per-ECU Security Access replaces shared algorithms" },
      ],
      keyTakeaways: [
        "UDS (ISO 14229) is the diagnostic protocol that can read codes — and reprogram ECU firmware",
        "Security Access (0x27) uses a seed-key challenge; weak/shared/extractable algorithms defeat it",
        "Granting Security Access plus unsigned firmware = persistent ECU compromise (reflash)",
        "Fixes: strong per-ECU crypto, attempt lockouts, and signed firmware (authenticated diagnostics)",
      ],
      references: [
        { title: "Unified Diagnostic Services (UDS) — overview", url: "https://en.wikipedia.org/wiki/Unified_Diagnostic_Services" },
        { title: "UDS Security Access (service 0x27) explained", url: "https://piembsystech.com/security-access-service-0x27-of-uds-protocol/" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-03-q1", type: "Core Idea", challenge: "What UDS is.", text: "What is UDS used for?", options: ["Diagnostics and reprogramming ECUs (read codes, test actuators, reflash firmware)", "Playing music", "GPS navigation", "Inflating tires"], correctIndex: 0, explanation: "UDS (ISO 14229) is the standardized diagnostic/programming protocol for ECUs." },
        { id: "vehicle-03-q2", type: "Gate", challenge: "The lock.", text: "What is UDS 'Security Access' (service 0x27)?", options: ["A seed-key challenge that gates privileged functions like reflashing", "A door lock", "A radio code", "A speed limiter"], correctIndex: 0, explanation: "The ECU issues a seed; the tool must return a valid key to unlock privileged services." },
        { id: "vehicle-03-q3", type: "Weakness", challenge: "Why it fails.", text: "Why is seed-key often defeatable?", options: ["The algorithm is weak, reused, or extractable from tools/firmware", "Seeds are 4096-bit", "It uses hardware security modules everywhere", "Keys change every millisecond"], correctIndex: 0, explanation: "It's often obfuscation, not cryptography — once the algorithm leaks, keys are computable." },
        { id: "vehicle-03-q4", type: "Power", challenge: "Behind the gate.", text: "What does a granted Security Access enable?", options: ["Programming mode and firmware reflashing of the ECU", "Free fuel", "A louder horn", "Nothing"], correctIndex: 0, explanation: "It unlocks memory writes and firmware download — full control of that ECU." },
        { id: "vehicle-03-q5", type: "Persistence", challenge: "Why it's serious.", text: "Why is reflashing with unsigned firmware dangerous?", options: ["Malware can persist in the ECU and survive reboots", "It improves fuel economy", "It only changes the color", "It is harmless"], correctIndex: 0, explanation: "Unsigned reflash = persistent, reboot-surviving compromise." },
        { id: "vehicle-03-q6", type: "Defense", challenge: "The fix.", text: "What properly secures diagnostic access?", options: ["Strong per-ECU crypto Security Access, lockouts, and signed firmware", "Hiding the OBD-II port", "A longer seed only", "Removing diagnostics entirely"], correctIndex: 0, explanation: "Real cryptography plus signed firmware turns the backdoor back into a safe maintenance door." },
      ],
    },
    ctf: {
      scenario: "You're on the diagnostic bus of a target ECU. Its UDS Security Access uses a weak, well-known seed-key algorithm with no attempt lockout. Enter a programming session, request a seed, compute (brute) the matching key, and unlock the ECU to prove reflash access. Capture the flag in three fragments.",
      hint: "Move into an extended/programming session, request the seed, then compute or brute the key — the algorithm is weak and there's no lockout.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Request a Security Access seed from the ECU. Run: request-seed",
        "Recover the weak seed-key algorithm. Run: analyze-algo",
        "Compute the matching key and unlock the ECU. Run: brute-key",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{UDS_", label: "Mission Brief — Security Access" },
        { trigger: "request-seed", value: "S33D_", label: "Seed Received" },
        { trigger: "analyze-algo", value: "K3Y_", label: "Algorithm Recovered" },
        { trigger: "brute-key", value: "BRUT3D_3CU}", label: "Key Cracked — ECU Unlocked" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: SECURITY ACCESS",
          "Target ECU: PCM (powertrain), UDS over the diagnostic bus.",
          "Recon: seed-key algorithm is a known shared XOR/rotate scheme; NO attempt lockout.",
          "",
          "Goal: pass Security Access (0x27) to reach programming/reflash mode.",
          "Sequence: request-seed -> brute-key",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "request-seed": () => ({
          lines: [
            "$ request-seed",
            "Entered extended session (0x10 0x03); sent SecurityAccess requestSeed (0x27 0x01).",
            "ECU seed = 0x4F2A9C01 — and no attempt lockout is enforced.",
            "Next: analyze-algo",
          ],
        }),
        "analyze-algo": () => ({
          lines: [
            "$ analyze-algo --dump-tool",
            "Pulled the seed-key routine from a diagnostic tool: rotate-left 3, then XOR 0xA5A5A5A5.",
            "Obfuscation, not cryptography — once leaked, every key is computable.",
            "Next: brute-key",
          ],
        }),
        "brute-key": () => ({
          lines: [
            "$ brute-key --seed 0x4F2A9C01",
            "Applied the recovered algorithm -> key = 0x9C7D3A...; sent sendKey (0x27 0x02).",
            "ECU: securityAccess GRANTED — programming/reflash services unlocked.",
            "Fix: per-ECU crypto Security Access, lockouts, signed firmware. Run 'assemble'.",
          ],
        }),
        "scan-uds": () => ({
          lines: [
            "Probing UDS services on PCM:",
            "  0x10 DiagnosticSessionControl  0x27 SecurityAccess",
            "  0x34 RequestDownload  0x36 TransferData (reflash)",
            "Next: request-seed",
          ],
        }),
      },
    },
  },

  // ─── vehicle-04: Keyless Entry & RF Relay (CTF) ──────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "Passive keyless entry — convenience as a weakness", location: "The parking lot", era: "Modern", emoji: "🔑" },
    id: "vehicle-04",
    order: 4,
    title: "Relaying the Key Fob",
    subtitle: "Keyless Entry, Rolling Codes & RollJam",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-veh-keyless", name: "Relay Operator", emoji: "🔑" },
    challengeType: "ctf",
    info: {
      tagline: "Walk up, the car unlocks; press start, it drives. Passive keyless entry is pure convenience — and the radio link that makes it magic is exactly what an attacker relays or replays to steal the car without ever touching your keys.",
      year: 2024,
      overview: [
        "Passive Keyless Entry and Start (PKES) lets a car detect a nearby fob and unlock/start without a button press. The car and fob talk over short-range radio — and that conversation can be intercepted, relayed, or replayed.",
        "Two classic attacks defeat keyless systems:\n- RELAY ATTACK — two devices bridge the distance between the fob (in the house) and the car (on the driveway), tricking the car into thinking the fob is next to it. The car unlocks and starts; the thief drives away.\n- ROLLJAM / REPLAY — for button fobs using rolling codes, an attacker jams and captures codes, then replays a valid unused one later (Samy Kamkar's 2015 'RollJam').",
        "Rolling codes raise the bar but don't always close it:\n- A rolling code changes each press so a simple replay fails — but RollJam captures a code the car never received, keeping it valid.\n- PKES relay sidesteps codes entirely by relaying the live challenge-response in real time.\n- The deeper fix is distance: measuring how far the fob really is, so a relayed signal (which adds delay/looks wrong) is rejected.",
      ],
      technical: {
        title: "Relay, RollJam, and Distance Bounding",
        body: [
          "The physics is what's exploited:\n- PKES uses a low-frequency wake-up from the car and a UHF response from the fob; relays simply extend that radio reach over hundreds of meters using cheap hardware.\n- RollJam needs precise timing: jam the fob's transmission so the car misses it while the attacker records it, let a later press through, and keep the first captured code to use once.\n- Both attacks are well within hobbyist budgets with software-defined radios and published designs.",
          "The robust defense is measuring distance, not just exchanging secrets:\n- UWB (ultra-wideband) 'distance bounding' times the signal's flight to confirm the fob is truly close; a relay's added latency exposes it. Modern phones-as-keys and newer fobs use this.\n- Motion-sensing fobs that sleep when still, and user options to disable PKES, reduce relay theft.\n- The lesson generalizes: proximity-based trust must verify proximity cryptographically and physically — assuming 'the signal is here so the key is here' is the flaw.",
        ],
      },
      incident: {
        title: "RollJam and the Relay Theft Epidemic",
        when: "2015–present",
        where: "Global (research + real-world theft)",
        impact: "Relay and rolling-code attacks became a leading method of keyless car theft worldwide",
        body: [
          "In 2015, researcher Samy Kamkar demonstrated 'RollJam', a cheap device that jams, captures, and replays rolling codes to unlock cars and garages. Around the same time, relay attacks against PKES were shown by multiple researchers — and then adopted by criminals at scale.",
          "It became a real public-safety and insurance issue:\n- Relay theft drove waves of keyless car thefts, prompting advice to store fobs in Faraday pouches and pushing manufacturers toward UWB distance bounding.\n- It is a textbook case of convenience features outrunning their security model — the radio that unlocks at a walk-up is the radio an attacker extends.\n- The countermeasure that finally bites — measuring true distance — shows security catching up to physics, the same arc as the rest of this domain.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Fob in the House", sub: "out of real range", type: "system" },
          { label: "Relay Devices", sub: "bridge car <-> fob", type: "attacker" },
          { label: "Car Thinks Fob Is Near", sub: "challenge relayed live", type: "victim" },
          { label: "Unlock & Start", sub: "drive away, no key", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "ETH Zurich demonstrates practical relay attacks on PKES systems" },
        { year: 2015, event: "Samy Kamkar releases 'RollJam' — jam, capture, replay rolling codes", highlight: true },
        { year: 2019, event: "Relay theft becomes a leading keyless-car-theft method" },
        { year: 2022, event: "UWB distance bounding (phone-as-key, new fobs) starts to defeat relays" },
      ],
      keyTakeaways: [
        "Passive keyless entry trusts a short-range radio link — which can be relayed or replayed",
        "Relay attacks bridge the fob-to-car distance in real time; RollJam captures and replays rolling codes",
        "Rolling codes stop naive replay but not relay or RollJam's withheld-code trick",
        "The real fix is distance bounding (UWB) — verify the fob is truly near, defeating relays' added latency",
      ],
      references: [
        { title: "RollJam (Samy Kamkar) — rolling-code attack", url: "https://samy.pl/defcon2015/" },
        { title: "Relay attack on keyless entry — overview", url: "https://en.wikipedia.org/wiki/Relay_attack" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-04-q1", type: "Core Idea", challenge: "The convenience flaw.", text: "What does a relay attack exploit?", options: ["The short-range radio link of keyless entry, bridging the fob-to-car distance", "A weak door lock", "The engine immobilizer chip melting", "The OBD-II port"], correctIndex: 0, explanation: "Relays extend the radio so the car thinks a distant fob is right beside it." },
        { id: "vehicle-04-q2", type: "RollJam", challenge: "Jam and capture.", text: "How does RollJam beat rolling codes?", options: ["It jams and captures a code the car never received, replaying it later", "It guesses the code", "It clones the metal key", "It drains the fob battery"], correctIndex: 0, explanation: "By withholding a valid unused code, the replay still works despite rolling codes." },
        { id: "vehicle-04-q3", type: "Rolling Codes", challenge: "Partial fix.", text: "What do rolling codes prevent — and not prevent?", options: ["They stop naive replay but not relay or RollJam's withheld-code trick", "They stop everything", "They stop nothing", "They only stop GPS spoofing"], correctIndex: 0, explanation: "Changing codes defeat simple replay but not live relay or captured-unused-code replay." },
        { id: "vehicle-04-q4", type: "Reach", challenge: "How far.", text: "Why are relay attacks practical?", options: ["Cheap SDR hardware can extend the fob's radio reach hundreds of meters", "Fobs broadcast worldwide", "Cars have no locks", "Relays require a satellite"], correctIndex: 0, explanation: "Inexpensive, published relay designs bridge large distances easily." },
        { id: "vehicle-04-q5", type: "Defense", challenge: "Measure distance.", text: "What technology most directly defeats relay attacks?", options: ["UWB distance bounding — timing signal flight to confirm the fob is truly close", "A louder beep", "A second key", "Removing the radio"], correctIndex: 0, explanation: "A relay adds latency; UWB time-of-flight exposes it and rejects the unlock." },
        { id: "vehicle-04-q6", type: "Mitigation", challenge: "Stopgap.", text: "What simple measure reduces relay theft today?", options: ["Storing the fob in a Faraday pouch (and motion-sleep fobs)", "Parking faster", "Painting the car", "Louder music"], correctIndex: 0, explanation: "Blocking the fob's signal at rest prevents relays from reaching it." },
      ],
    },
    ctf: {
      scenario: "The target keeps their keyless fob by the front door; the car sits on the driveway. Set up a two-device relay to bridge the fob's signal to the car, capture a rolling code with a RollJam-style jam-and-hold, and relay the live challenge to unlock and start the vehicle. Capture the flag in three fragments.",
      hint: "Bridge the distance. Capture/withhold a code, then relay the live fob-car exchange so the car believes the key is present.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Find the fob's RF bands. Run: scan-rf",
        "Jam-and-hold a rolling code (RollJam). Run: capture-fob",
        "Relay the live challenge to unlock and start. Run: relay-unlock",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R3L4Y_", label: "Mission Brief — Keyless Relay" },
        { trigger: "scan-rf", value: "R0LL", label: "Fob Bands Found" },
        { trigger: "capture-fob", value: "J4M_", label: "Rolling Code Captured (held)" },
        { trigger: "relay-unlock", value: "UNL0CK3D}", label: "Relayed — Unlocked & Started" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: KEYLESS RELAY",
          "Target: PKES vehicle, fob near the front door, car on the driveway.",
          "Kit: two SDR relay units + a jammer/recorder for rolling codes.",
          "",
          "Goal: relay the live fob<->car exchange (and hold a captured code) to drive away.",
          "Sequence: capture-fob -> relay-unlock",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-rf": () => ({
          lines: [
            "Scanning fob bands: LF wake-up 125 kHz, UHF response 433.92 MHz.",
            "Fob present indoors; car polling for proximity. Next: capture-fob",
          ],
        }),
        "capture-fob": () => ({
          lines: [
            "Jamming fob UHF while recording (RollJam) ...",
            "Captured rolling code #1 (car never received it) — HELD for later.",
            "Captured rolling code #2 — released to fob/car so user notices nothing.",
            "Next: relay-unlock",
          ],
        }),
        "relay-unlock": () => ({
          lines: [
            "Bringing relay unit A to the car, unit B near the fob ...",
            "Bridging LF wake-up and UHF response in real time ...",
            "Car: 'key detected in cabin' — doors unlock, push-start enabled.",
            "Driving away with no physical key. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── vehicle-05: EV Charging (CTF) ───────────────────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The EV charging network", location: "Charge points & cloud backends", era: "Modern", emoji: "⚡" },
    id: "vehicle-05",
    order: 5,
    title: "Hijacking the Charge",
    subtitle: "OCPP, ISO 15118 & EV Charging Security",
    category: "cybersecurity",
    xp: 168,
    badge: { id: "badge-veh-charge", name: "Charge Hijacker", emoji: "⚡" },
    challengeType: "ctf",
    info: {
      tagline: "EV charging is a new, sprawling, internet-connected grid of computers — chargers, cloud backends, and the car itself, all negotiating power and payment. Each link is young and often weakly secured. Get between them and you can hijack sessions, steal energy, or disrupt the grid.",
      year: 2024,
      overview: [
        "An EV charge involves three parties talking over two protocols, and security gaps live in both:\n- The CHARGER talks to its cloud backend (the CSMS) over OCPP.\n- The CAR talks to the charger over ISO 15118 (including 'Plug & Charge').\n- Money, identity, and high-power electricity all flow through these conversations.",
        "OCPP (Open Charge Point Protocol) is the charger-to-backend link, and a frequent weak point:\n- Older deployments ran OCPP over plain WebSocket with weak or no authentication, so a man-in-the-middle could read and alter messages.\n- Manipulated messages can start/stop charging, change pricing or the authorized user, or feed false meter values for energy theft and fraud.\n- Chargers themselves are often Linux computers with exposed management interfaces, default credentials, and slow patching.",
        "ISO 15118 (car-to-charger) adds capability and new risk:\n- 'Plug & Charge' lets the car authenticate and pay automatically via certificates — convenient, but a complex PKI that can be misimplemented.\n- Research has shown signal-level and protocol attacks (e.g., 'Brokenwire' disrupting CCS charging over the air).\n- Because chargers tie into the power grid, large-scale charger compromise is also a grid-stability concern, not just an individual one.",
      ],
      technical: {
        title: "OCPP Man-in-the-Middle and the Charging PKI",
        body: [
          "The OCPP attack surface is classic web/IoT security:\n- OCPP 1.6 over unencrypted WebSocket is still common; without TLS and authentication, an attacker on the network path can inject StartTransaction/StopTransaction or alter MeterValues.\n- Spoofing the backend (or the charger) lets you authorize free charging, bill another user, or deny service across a fleet of chargers managed centrally.\n- OCPP 2.0.1 adds security profiles (TLS, client certs) — when actually deployed and configured.",
          "ISO 15118 and the physical layer add depth:\n- Plug & Charge relies on a certificate hierarchy (OEM, mobility operator, charger); errors in validation or provisioning can enable impersonation or free charging.\n- The CCS communication rides power-line communication between car and charger; 'Brokenwire' showed it can be disrupted wirelessly, denying charging to nearby vehicles.\n- Defenses are standard but must be implemented: TLS + mutual auth on OCPP, hardened chargers (no default creds, signed firmware, segmentation from the grid/payment systems), and rigorous PKI for 15118.",
        ],
      },
      incident: {
        title: "Chargers, Backends, and 'Brokenwire'",
        when: "2021–present",
        where: "EV charging industry & academia",
        impact: "Researchers found widespread charger/backend vulnerabilities and demonstrated wireless disruption of CCS fast charging",
        body: [
          "Security firms (notably Pen Test Partners) repeatedly found home and public chargers with exposed APIs, default credentials, and weak OCPP backends — in some cases enough to hijack or disrupt chargers at scale, with knock-on concerns for grid load. In 2022, researchers disclosed 'Brokenwire', a method to wirelessly interrupt CCS DC fast charging from a distance.",
          "It frames EV charging as emerging critical infrastructure:\n- Chargers are internet-connected computers handling payments and large power flows, yet many shipped with weak security and slow update paths.\n- Coordinated charger compromise could disrupt charging regionally and stress the grid — a systemic, not just personal, risk.\n- The remedies are known IT/OT hygiene (TLS, auth, no default creds, segmentation, signed firmware) applied to a young industry racing to scale — exactly the gap this stage teaches.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Charger (Linux)", sub: "OCPP client, often weak", type: "victim" },
          { label: "MITM the OCPP Link", sub: "plain WebSocket, no TLS", type: "attacker" },
          { label: "CSMS Backend", sub: "auth, billing, control", type: "system" },
          { label: "Hijack Session", sub: "free charge / fraud / DoS", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "OCPP emerges to connect chargers to management backends" },
        { year: 2014, event: "ISO 15118 enables 'Plug & Charge' certificate-based charging" },
        { year: 2022, event: "'Brokenwire' wirelessly disrupts CCS DC fast charging", highlight: true },
        { year: 2023, event: "Repeated disclosures of charger default creds and weak OCPP backends" },
      ],
      keyTakeaways: [
        "EV charging spans charger↔backend (OCPP) and car↔charger (ISO 15118) — both are young attack surfaces",
        "OCPP over plain WebSocket invites MITM: forge Start/Stop, alter meter values, authorize free charging or fraud",
        "ISO 15118 Plug & Charge is a complex PKI; misimplementation enables impersonation or free charging",
        "Charger compromise is also a grid-stability risk; fixes are TLS/auth, no default creds, signed firmware, segmentation",
      ],
      references: [
        { title: "Open Charge Point Protocol (OCPP) — overview", url: "https://en.wikipedia.org/wiki/Open_Charge_Point_Protocol" },
        { title: "Brokenwire — disrupting CCS EV charging", url: "https://www.brokenwire.fail/" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-05-q1", type: "Core Idea", challenge: "The parties.", text: "Which protocols carry an EV charging session?", options: ["OCPP (charger↔backend) and ISO 15118 (car↔charger)", "HTTP and SMTP", "Bluetooth and NFC only", "CAN and LIN"], correctIndex: 0, explanation: "OCPP connects the charger to its cloud; ISO 15118 connects the car to the charger." },
        { id: "vehicle-05-q2", type: "OCPP", challenge: "The weak link.", text: "Why is OCPP often a weak point?", options: ["It's frequently run over plain WebSocket with weak/no authentication (MITM-able)", "It uses quantum encryption", "It is air-gapped", "It has no messages"], correctIndex: 0, explanation: "Unencrypted, unauthenticated OCPP lets an attacker read and alter charging messages." },
        { id: "vehicle-05-q3", type: "Impact", challenge: "What MITM enables.", text: "What can manipulating OCPP messages achieve?", options: ["Start/stop charging, alter pricing/user, or falsify meter values for theft/fraud", "Repaint the charger", "Improve the weather", "Nothing"], correctIndex: 0, explanation: "Forged transactions and meter values enable free charging, fraud, or denial of service." },
        { id: "vehicle-05-q4", type: "ISO 15118", challenge: "Plug & Charge.", text: "What is the security model of ISO 15118 'Plug & Charge'?", options: ["Certificate-based PKI that can be misimplemented (impersonation/free charging)", "No security at all", "A physical key", "A password typed on the screen"], correctIndex: 0, explanation: "It's a complex certificate hierarchy; validation/provisioning errors create risk." },
        { id: "vehicle-05-q5", type: "Physical", challenge: "Brokenwire.", text: "What did the 'Brokenwire' research show?", options: ["CCS DC fast charging can be wirelessly disrupted from a distance", "Chargers can read minds", "EVs don't need charging", "OCPP is unbreakable"], correctIndex: 0, explanation: "It disrupts the CCS power-line communication over the air, denying charging." },
        { id: "vehicle-05-q6", type: "Systemic", challenge: "Bigger picture.", text: "Why is charger security a grid concern?", options: ["Coordinated charger compromise could disrupt charging and stress the power grid", "Chargers control the weather", "Chargers run the internet", "It isn't a concern"], correctIndex: 0, explanation: "Chargers handle large power flows; mass compromise is a systemic risk, not just personal." },
      ],
    },
    ctf: {
      scenario: "A public EV charger talks to its cloud backend (CSMS) over OCPP 1.6 on an unencrypted WebSocket. You're on the network path. Intercept the OCPP link, spoof the backend, and authorize a free charging session (and falsify the meter values). Capture the flag in three fragments.",
      hint: "It's an unauthenticated WebSocket — get in the middle. Connect to the OCPP stream, impersonate the backend, and forge the transaction.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Scan the charger and its OCPP backend. Run: scan-charger",
        "Man-in-the-middle the OCPP link to the backend. Run: connect-csms",
        "Forge a StartTransaction and meter values. Run: hijack-session",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{0CPP_", label: "Mission Brief — Charge Hijack" },
        { trigger: "scan-charger", value: "CH4RG", label: "Charger & Backend Scanned" },
        { trigger: "connect-csms", value: "3R_", label: "OCPP Link Intercepted" },
        { trigger: "hijack-session", value: "H1J4CK3D}", label: "Session Forged — Free Charge" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: CHARGE HIJACK",
          "Target: public charger <-> CSMS over OCPP 1.6J (ws://, no TLS, no auth token check).",
          "Goal: authorize a free session and falsify MeterValues (energy theft).",
          "",
          "OCPP has no transport security here — sit in the middle and forge messages.",
          "Sequence: connect-csms -> hijack-session",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-charger": () => ({
          lines: [
            "Charger mgmt: HTTP :80 (default creds), OCPP ws://backend:8080 (no TLS).",
            "Charge point id: CP-7741, idTag auth handled server-side only.",
            "Next: connect-csms",
          ],
        }),
        "connect-csms": () => ({
          lines: [
            "Intercepting ws:// OCPP stream (no TLS, no message auth) ...",
            "Observed: BootNotification, Heartbeat, Authorize, StartTransaction.",
            "We can impersonate the CSMS and the charge point. Next: hijack-session",
          ],
        }),
        "hijack-session": () => ({
          lines: [
            "Spoofing CSMS: Authorize.conf idTagInfo=Accepted for our token ...",
            "Forging StartTransaction (connectorId=1) ... txn 0x4A11 opened.",
            "Injecting MeterValues = 0 kWh (energy theft) ... charge flowing, unbilled.",
            "Session hijacked. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── vehicle-06: The Battery Management System (Quiz) ────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The EV battery & its brain", location: "Under the floor of every EV", era: "Modern", emoji: "🔋" },
    id: "vehicle-06",
    order: 6,
    title: "The Battery Management System",
    subtitle: "Cells, Thermal Runaway & Why the BMS Is Safety-Critical",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-veh-bms", name: "Battery Guardian", emoji: "🔋" },
    challengeType: "quiz",
    info: {
      tagline: "An EV battery stores enough energy to move two tons — and to start a fire. The Battery Management System is the computer keeping thousands of cells safe. That makes the BMS one of the most safety-critical ECUs in the car, and a serious target.",
      year: 2024,
      overview: [
        "An EV traction battery is a pack of hundreds-to-thousands of lithium-ion cells. They are powerful but unforgiving: charge them too high, drain them too low, or let them get too hot, and they degrade — or catastrophically fail. The Battery Management System (BMS) is the embedded computer that prevents that.",
        "The BMS does several safety-critical jobs continuously:\n- MONITOR — measure each cell/module voltage, current, and temperature in real time.\n- BALANCE — equalize cells so none is overcharged or over-discharged.\n- ESTIMATE — compute state of charge (SOC) and state of health (SOH) to set safe limits.\n- PROTECT — open the high-voltage contactors to disconnect the pack on any unsafe condition.",
        "Because the BMS governs safety, tampering with it is dangerous:\n- If an attacker (or a malicious firmware change) feeds the BMS false readings or disables protections, the pack could be overcharged or overheated — risking thermal runaway (a self-sustaining cell fire).\n- More mundanely, manipulating SOC/SOH enables range fraud, warranty fraud, or bricking a pack.\n- This is why the BMS is engineered to the highest functional-safety levels (ASIL-D) and why its firmware integrity and sensor trust matter as much as any chassis ECU.",
      ],
      technical: {
        title: "From Cell Sensing to Thermal Runaway",
        body: [
          "The BMS architecture is layered:\n- Cell-monitoring ICs watch groups of cells and report to a central BMS controller over an internal bus (often isolated CAN or a daisy-chain).\n- The controller runs the SOC/SOH algorithms and commands balancing and the main contactors; it coordinates with the charger and inverter.\n- Safety logic is redundant and independent so a single fault doesn't remove protection — the design assumes things will fail.",
          "Why integrity is the security property that matters most:\n- Thermal runaway is the worst case: an overcharged or damaged cell heats, vents, and can ignite neighbors in a chain reaction that's hard to stop. The BMS exists to make this impossible under normal faults.\n- Trusting sensor data and firmware is therefore paramount — spoofed temperature/voltage or tampered limits could defeat the very protections that prevent a fire.\n- Defenses: signed BMS firmware, authenticated internal sensor links, independent hardware safety cutoffs that no software can override, and tamper detection — defense-in-depth where the failure mode is physical and severe.",
        ],
      },
      incident: {
        title: "Why Battery Safety Is Engineered Like Aerospace",
        when: "Ongoing",
        where: "EV industry & safety regulators",
        impact: "High-profile battery fires and recalls drove battery management to the strictest safety standards — and put a spotlight on BMS integrity",
        body: [
          "EV and battery fires — from consumer-device recalls to EV pack recalls (e.g., large GM/LG and Hyundai battery recalls)— made clear how serious a battery fault can be. While most stemmed from manufacturing defects rather than hacking, they cemented the BMS as a safety-critical system held to standards like ISO 26262 ASIL-D.",
          "The security implication follows directly:\n- A system whose job is to prevent fire must be trustworthy end to end — its sensors, its firmware, and its safety cutoffs.\n- Researchers have explored how false data or compromised firmware could undermine BMS protections, reinforcing the need for signed firmware and independent hardware safeguards.\n- The lesson: in cyber-physical systems, integrity (not secrecy) is often the crown-jewel property — because the consequence of a lie to the controller is a physical, sometimes dangerous, action.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Cell-Monitoring ICs", sub: "voltage / temp / current", type: "system" },
          { label: "BMS Controller", sub: "SOC/SOH, balancing, contactors", type: "victim" },
          { label: "False Data / Tamper", sub: "spoofed limits or readings", type: "attacker" },
          { label: "Thermal Runaway Risk", sub: "the physical failure mode", type: "result" },
        ],
      },
      timeline: [
        { year: 1991, event: "Commercial lithium-ion arrives — high energy density needs active management" },
        { year: 2011, event: "ISO 26262 functional safety shapes how EV battery systems are engineered" },
        { year: 2021, event: "Major EV battery recalls underscore the stakes of pack safety", highlight: true },
        { year: 2024, event: "Signed BMS firmware + independent hardware cutoffs become best practice" },
      ],
      keyTakeaways: [
        "The BMS is the safety-critical computer that keeps hundreds-to-thousands of Li-ion cells within safe limits",
        "It monitors voltage/temp/current, balances cells, estimates SOC/SOH, and opens contactors on faults",
        "Tampering or false sensor data could defeat protections — risking thermal runaway (a cell-fire chain reaction)",
        "Integrity is the key security property: signed firmware, authenticated sensors, and independent hardware cutoffs",
      ],
      references: [
        { title: "Battery management system — overview", url: "https://en.wikipedia.org/wiki/Battery_management_system" },
        { title: "Thermal runaway in lithium-ion batteries", url: "https://en.wikipedia.org/wiki/Thermal_runaway" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-06-q1", type: "Core Idea", challenge: "What it does.", text: "What is the Battery Management System (BMS)?", options: ["The embedded computer that keeps the battery's cells within safe limits", "The car's radio", "The motor", "The charging cable"], correctIndex: 0, explanation: "The BMS monitors and protects the traction battery — a safety-critical ECU." },
        { id: "vehicle-06-q2", type: "Jobs", challenge: "Core functions.", text: "Which is a core BMS function?", options: ["Balancing cells and opening contactors on unsafe conditions", "Playing music", "Steering the car", "Inflating tires"], correctIndex: 0, explanation: "Monitor, balance, estimate SOC/SOH, and protect via contactors." },
        { id: "vehicle-06-q3", type: "Worst Case", challenge: "The danger.", text: "What is thermal runaway?", options: ["A self-sustaining cell-fire chain reaction from overcharge/overheat/damage", "A fast charging mode", "A software update", "A type of tire"], correctIndex: 0, explanation: "It's the catastrophic failure the BMS is designed to prevent." },
        { id: "vehicle-06-q4", type: "Attack", challenge: "Lying to the brain.", text: "How could tampering with the BMS be dangerous?", options: ["False sensor data or disabled protections could allow overcharge/overheat", "It would make the car quieter", "It improves range safely", "It has no effect"], correctIndex: 0, explanation: "Defeating protections via spoofed data or firmware risks a physical battery failure." },
        { id: "vehicle-06-q5", type: "Property", challenge: "What matters most.", text: "Which security property is most critical for the BMS?", options: ["Integrity — trustworthy sensors, firmware, and safety logic", "Only confidentiality", "Only availability", "None"], correctIndex: 0, explanation: "A lie to the controller becomes a dangerous physical action — integrity is paramount." },
        { id: "vehicle-06-q6", type: "Defense", challenge: "Belt and suspenders.", text: "What best protects the BMS?", options: ["Signed firmware, authenticated sensors, and independent hardware safety cutoffs", "Hiding the battery", "A louder alarm only", "Removing the BMS"], correctIndex: 0, explanation: "Defense-in-depth, including hardware cutoffs software can't override, guards a severe failure mode." },
      ],
    },
  },

  // ─── vehicle-07: Telematics & the Remote Hack (CTF) ──────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The telematics unit — the car's cellular gateway", location: "The connected car", era: "2015 CE", emoji: "📡" },
    id: "vehicle-07",
    order: 7,
    title: "Remote Control via Telematics",
    subtitle: "The Jeep Cherokee Hack — Cellular to CAN",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-veh-telematics", name: "Remote Operator", emoji: "📡" },
    challengeType: "ctf",
    info: {
      tagline: "The most famous car hack didn't need a wire — it came over the cellular network. The telematics unit is the car's connection to the internet, and in 2015 it became the bridge from anywhere on the carrier's network straight to the brakes. Reproduce that pivot.",
      year: 2015,
      overview: [
        "The telematics control unit (TCU) — often fused with the infotainment head unit — is the car's gateway to the outside world: cellular data, apps, emergency calling, remote services. That connectivity is also the most dangerous attack surface, because it can be reached remotely and may bridge to the internal network.",
        "The 2015 Jeep Cherokee hack is the canonical example, and your CTF mirrors it:\n- EXPOSURE — the Uconnect head unit exposed a service over the cellular network with no authentication, reachable from anywhere on the carrier's IP space.\n- EXECUTION — researchers got code execution on the head unit (a QNX system).\n- BRIDGE — they reflashed a companion chip so the internet-facing head unit could send messages onto the CAN bus — crossing from infotainment to the safety-critical domain.",
        "Once on the CAN bus, the connected attacker had physical control:\n- They demonstrated controlling the radio, wipers, and climate — then steering (in reverse), transmission (cutting it), and brakes, on a vehicle being driven on a highway.\n- The attack worked remotely against any similarly-configured vehicle, identifiable and reachable over the cellular network — a fleet-scale problem.\n- It forced a 1.4-million-vehicle recall and became the wake-up call that the connected domain must be firewalled from the drive-critical domain.",
      ],
      technical: {
        title: "From an Open Cellular Port to the CAN Bus",
        body: [
          "The pivot chain is the lesson:\n- A network-reachable service on the head unit (over the carrier's network) gave initial access with no authentication — an internet-exposed attack surface on a moving car.\n- Code execution on the head unit alone is 'just' infotainment; the critical step was reaching the CAN bus, done by reprogramming a connected microcontroller that bridged the two.\n- That bridge defeated the implicit assumption that infotainment couldn't talk to the brakes — the gateway didn't truly segment them.",
          "The defenses are exactly the segmentation themes of this epoch:\n- The connected domain must be firewalled from drive-critical CAN; a compromised head unit should not be able to inject chassis/powertrain frames.\n- Carrier-side, exposing vehicle services to the open cellular IP space was an avoidable mistake — network exposure must be minimized and authenticated.\n- Add message authentication on critical CAN traffic, harden and update the head unit, and monitor for cross-domain anomalies. The Jeep hack is, at heart, a missing-segmentation and exposed-service story.",
        ],
      },
      incident: {
        title: "Hacking a Jeep on the Highway (2015)",
        when: "July 2015",
        where: "United States (Charlie Miller & Chris Valasek)",
        impact: "A fully remote hack controlled a moving Jeep's steering, brakes, and transmission, forcing a 1.4M-vehicle recall and reshaping automotive security",
        body: [
          "In 2015, researchers Charlie Miller and Chris Valasek remotely hacked a Jeep Cherokee while journalist Andy Greenberg drove it on a highway — cutting the transmission, then later demonstrating brakes and steering — all over the cellular network, with no physical access. The exploit chained an exposed Uconnect service to code execution to a CAN-bridging reflash.",
          "The impact was enormous and lasting:\n- Fiat Chrysler recalled ~1.4 million vehicles and the carrier blocked the exposed access — the first recall driven by a cybersecurity vulnerability.\n- It made automotive cyber risk undeniable to the public, regulators, and industry, accelerating standards (later ISO/SAE 21434, UN R155).\n- Its core lesson defines this stage: connectivity without strict segmentation turns a remote software bug into remote physical control of a car.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Cellular Network", sub: "reach the car from anywhere", type: "attacker" },
          { label: "Exposed Head Unit Service", sub: "no auth -> code exec", type: "system" },
          { label: "Bridge to CAN", sub: "reflash a connected chip", type: "victim" },
          { label: "Drive-Critical Control", sub: "steering, brakes, transmission", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Miller & Valasek survey remote attack surfaces across many vehicles" },
        { year: 2015, event: "Remote Jeep Cherokee hack demonstrated on a highway; 1.4M recall", highlight: true },
        { year: 2016, event: "Industry forms Auto-ISAC; connected/critical segmentation prioritized" },
        { year: 2021, event: "UN R155 / ISO 21434 mandate vehicle cybersecurity management" },
      ],
      keyTakeaways: [
        "The telematics/head unit is the car's internet gateway — its most dangerous (remotely reachable) attack surface",
        "The Jeep hack chained an exposed cellular service → head-unit code exec → a bridge onto the CAN bus",
        "The fatal flaw was missing segmentation: infotainment could reach drive-critical CAN",
        "Defenses: firewall the connected domain from critical CAN, minimize/authenticate exposure, sign + update, monitor",
      ],
      references: [
        { title: "Remote Exploitation of an Unaltered Passenger Vehicle (Miller & Valasek, 2015)", url: "http://illmatics.com/Remote%20Car%20Hacking.pdf" },
        { title: "WIRED — Hackers Remotely Kill a Jeep on the Highway", url: "https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-07-q1", type: "Core Idea", challenge: "The gateway.", text: "Why is the telematics/head unit the most dangerous attack surface?", options: ["It's internet-connected and reachable remotely, and may bridge to the internal network", "It controls the seats only", "It is mechanical", "It has no software"], correctIndex: 0, explanation: "Remote reachability plus a path to CAN turns a software bug into physical control." },
        { id: "vehicle-07-q2", type: "Access", challenge: "The way in.", text: "How did the Jeep attackers gain initial access?", options: ["An exposed Uconnect service reachable over the cellular network with no authentication", "By picking the lock", "Via the OBD-II port physically", "Through the gas cap"], correctIndex: 0, explanation: "A network-reachable, unauthenticated service on the carrier's IP space was the entry." },
        { id: "vehicle-07-q3", type: "Bridge", challenge: "The critical step.", text: "How did they reach the CAN bus from the head unit?", options: ["By reflashing a connected chip so the head unit could send CAN frames", "It was already wired to the brakes", "They used the radio antenna", "They didn't reach CAN"], correctIndex: 0, explanation: "Reprogramming a bridging microcontroller crossed infotainment to the CAN bus." },
        { id: "vehicle-07-q4", type: "Impact", challenge: "What they controlled.", text: "What could they do once on the CAN bus of the moving Jeep?", options: ["Cut the transmission and manipulate brakes and steering", "Only change the radio station", "Nothing safety-related", "Refill the tank"], correctIndex: 0, explanation: "They demonstrated drive-critical control on a highway-driven vehicle." },
        { id: "vehicle-07-q5", type: "Scale", challenge: "Fleet problem.", text: "Why was the hack a fleet-scale issue?", options: ["Similarly-configured vehicles were remotely identifiable and reachable over cellular", "Each car needed a physical visit", "Only one car was affected", "It required the owner's password"], correctIndex: 0, explanation: "Remote reachability meant many vehicles were exposed — hence the 1.4M recall." },
        { id: "vehicle-07-q6", type: "Recall", challenge: "Aftermath.", text: "What was historic about the response?", options: ["The first vehicle recall (~1.4M) driven by a cybersecurity vulnerability", "Nothing changed", "The car was banned", "Only a software demo"], correctIndex: 0, explanation: "It triggered the first cyber-driven auto recall and accelerated standards." },
        { id: "vehicle-07-q7", type: "Root Cause", challenge: "The real flaw.", text: "What was the underlying security failure?", options: ["Missing segmentation — the connected domain could reach drive-critical CAN", "Too much encryption", "A weak paint job", "A dead battery"], correctIndex: 0, explanation: "Connectivity without strict segmentation enabled the remote-to-physical pivot." },
        { id: "vehicle-07-q8", type: "Defense", challenge: "Preventing it.", text: "Which control most directly prevents this attack?", options: ["Firewalling the connected domain from critical CAN (and not exposing services)", "Brighter headlights", "A bigger engine", "Removing telematics features entirely"], correctIndex: 0, explanation: "Strict gateway segmentation plus minimized, authenticated exposure stops the pivot." },
      ],
    },
    ctf: {
      scenario: "A connected SUV's head unit exposes a debug service over the cellular network with no authentication — reachable from anywhere on the carrier's IP space. Reproduce the Jeep-style chain: exploit the telematics unit for code execution, bridge to the CAN bus, and send a drive-critical frame. Capture the flag in three fragments.",
      hint: "Remote first, then bridge. Exploit the exposed telematics service, reflash the bridge to reach CAN, then send a CAN frame from the connected domain.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Find the exposed telematics service on the carrier network. Run: scan-telematics",
        "Exploit the head unit and bridge to CAN. Run: exploit-tcu",
        "Send a drive-critical frame onto the bridged CAN bus. Run: send-can",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{T3L3M4T1CS_", label: "Mission Brief — Remote Pivot" },
        { trigger: "scan-telematics", value: "R3M0T3_", label: "Telematics Service Found" },
        { trigger: "exploit-tcu", value: "C4N_", label: "Head Unit Owned — Bridged to CAN" },
        { trigger: "send-can", value: "PWN}", label: "Drive-Critical Frame Sent" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: REMOTE PIVOT (Jeep-style)",
          "Target: head unit exposes a debug service on the cellular network (no auth).",
          "Architecture: head unit -> bridge MCU -> CAN (segmentation is weak).",
          "",
          "Goal: code exec on the head unit, bridge to CAN, send a chassis frame.",
          "Sequence: exploit-tcu -> send-can",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-telematics": () => ({
          lines: [
            "Scanning carrier IP range for the vehicle's head unit ...",
            "Found CP head unit: TCP 6667 open (D-Bus over IP), no authentication.",
            "Companion bridge MCU links head unit <-> CAN. Next: exploit-tcu",
          ],
        }),
        "exploit-tcu": () => ({
          lines: [
            "Connecting to head unit debug service (no auth) ...",
            "Spawning code execution on the QNX head unit ... shell as root.",
            "Reflashing bridge MCU firmware so we can transmit CAN frames ... done.",
            "Infotainment is now bridged to the CAN bus. Next: send-can",
          ],
        }),
        "send-can": (args) => {
          void args;
          return {
            lines: [
              "Injecting via bridge: CAN ID 0x2C0 (chassis) payload=brake-assist test ...",
              "ABS/ESP module accepts frame from the (formerly) infotainment domain.",
              "Remote -> physical control achieved. Run 'assemble' to retrieve your fragment.",
            ],
          };
        },
      },
    },
  },

  // ─── vehicle-08: ADAS & Sensor Spoofing (CTF) ────────────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The self-driving sensor suite", location: "ADAS-equipped vehicles", era: "Modern", emoji: "🎯" },
    id: "vehicle-08",
    order: 8,
    title: "Fooling the Self-Driving Car",
    subtitle: "ADAS, Sensor Spoofing & Phantom Attacks",
    category: "cybersecurity",
    xp: 172,
    badge: { id: "badge-veh-adas", name: "Sensor Phantom", emoji: "🎯" },
    challengeType: "ctf",
    info: {
      tagline: "A self-driving car only knows the world through its sensors — and sensors can be lied to. Don't hack the code; hack the cameras, radar, and LiDAR. Make the car see a obstacle that isn't there, or miss one that is.",
      year: 2024,
      overview: [
        "Advanced Driver-Assistance Systems (ADAS) and autonomy build a model of the world from cameras, radar, LiDAR, ultrasonics, and GPS, then act on it — steering, braking, accelerating. If you can manipulate the inputs, you manipulate the behavior, without ever touching the software.",
        "Each sensor has its own spoofing weakness:\n- CAMERA — adversarial patches, projected images, or altered road markings can fool the perception model (Keen Lab steered Tesla Autopilot with stickers on the road).\n- LiDAR — crafted laser pulses can inject fake points (phantom obstacles) or hide real ones.\n- RADAR — spoofed returns can create or mask objects; ultrasonics can be jammed or spoofed to defeat parking/AEB.\n- GPS — spoofing the position/route can mislead navigation-based autonomy (Regulus misled Tesla Navigate-on-Autopilot).",
        "The scariest class is making the car act on a lie:\n- 'Phantom' attacks project a brief image of a person or sign that the car treats as real, triggering emergency braking or a wrong maneuver (Ben Nassi's research).\n- Conversely, hiding a real obstacle (adversarial camouflage, blinding a sensor) can cause a failure to stop.\n- Because perception feeds safety-critical control, sensor integrity is an autonomy safety problem — defended by sensor fusion, plausibility checks, and anti-spoofing, not by patching one model.",
      ],
      technical: {
        title: "Perception, Fusion, and Why Spoofing Works",
        body: [
          "The pipeline is the attack surface:\n- Raw sensor data → perception (detect/classify objects) → fusion (combine sensors) → planning → control. An error injected early propagates to a physical action.\n- Single-sensor attacks succeed when fusion is weak or one sensor dominates; robust systems cross-check (if LiDAR sees an obstacle radar and camera don't, be suspicious).\n- Many attacks are cheap and physical — a sticker, a projector, a laser — needing no network access at all.",
          "Defenses are about distrusting any single input:\n- Sensor fusion with disagreement detection, temporal consistency (objects don't teleport), and plausibility (a 'pedestrian' appearing for 100 ms then vanishing is suspect).\n- Sensor-level anti-spoofing (LiDAR pulse randomization, GNSS authentication, camera liveness) raises the cost of a convincing fake.\n- Redundancy and conservative fallback (degrade safely when sensors disagree) — the same 'never trust one source' principle that runs through GNSS, telemetry, and every cyber-physical sensor in this curriculum.",
        ],
      },
      incident: {
        title: "Stickers, Projectors, and Lasers vs. Autopilot",
        when: "2019–present",
        where: "Automotive AI security research",
        impact: "Researchers repeatedly fooled production driver-assist systems with cheap physical sensor attacks",
        body: [
          "A string of studies made sensor spoofing real: Tencent Keen Lab (2019) used road stickers to steer Tesla Autopilot into the wrong lane and tricked its rain sensors; Regulus Cyber spoofed GPS to mislead Navigate-on-Autopilot; and Ben Nassi's 'Phantom' work (2020) showed a split-second projected image could trigger braking or steering on driver-assist systems.",
          "Together they reframed autonomy risk:\n- The vulnerability is often not the code but the senses — a model that's accurate on clean data can be reliably fooled by crafted physical inputs.\n- Many attacks cost a few dollars and require only line of sight, not a network foothold.\n- The defenses — multi-sensor fusion, plausibility/temporal checks, sensor anti-spoofing, and safe fallback — are why robust autonomy treats perception as adversarial, exactly as this stage teaches.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sensors", sub: "camera / LiDAR / radar / GPS", type: "system" },
          { label: "Craft a Spoof", sub: "sticker / projection / laser", type: "attacker" },
          { label: "Inject False Perception", sub: "phantom object or hidden one", type: "victim" },
          { label: "Car Acts on the Lie", sub: "phantom brake or no-stop", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "Early research spoofs automotive LiDAR and ultrasonic sensors" },
        { year: 2019, event: "Keen Lab steers Tesla Autopilot with road stickers; GPS spoofing misleads NoA", highlight: true },
        { year: 2020, event: "'Phantom' attacks trigger braking via split-second projections" },
        { year: 2024, event: "Sensor fusion + anti-spoofing become core autonomy-safety requirements" },
      ],
      keyTakeaways: [
        "Autonomy perceives the world only through sensors — manipulate the inputs and you manipulate the driving",
        "Each sensor is spoofable: camera (patches/projection), LiDAR/radar (fake or hidden returns), GPS (false position)",
        "'Phantom' attacks make the car act on a fake object (emergency brake); hiding a real one causes a failure to stop",
        "Defense is distrusting any single input: sensor fusion, plausibility/temporal checks, anti-spoofing, safe fallback",
      ],
      references: [
        { title: "Tencent Keen Lab — Experimental Security Research of Tesla Autopilot", url: "https://keenlab.tencent.com/en/2019/03/29/Tencent-Keen-Security-Lab-Experimental-Security-Research-of-Tesla-Autopilot/" },
        { title: "Phantom of the ADAS (Ben Nassi)", url: "https://www.nassiben.com/phantoms" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-08-q1", type: "Core Idea", challenge: "Hack the senses.", text: "Why can you attack a self-driving car without touching its software?", options: ["It acts on what its sensors perceive — manipulate the inputs, manipulate the behavior", "Its code is unbreakable", "It has no sensors", "It ignores the road"], correctIndex: 0, explanation: "Perception drives control, so spoofing sensors changes the car's actions." },
        { id: "vehicle-08-q2", type: "Camera", challenge: "Fooling vision.", text: "How can a camera-based system be fooled?", options: ["Adversarial patches, projected images, or altered road markings", "By washing the car", "By a louder horn", "It can't be"], correctIndex: 0, explanation: "Keen Lab used road stickers to steer Autopilot into the wrong lane." },
        { id: "vehicle-08-q3", type: "LiDAR", challenge: "Fake points.", text: "How is LiDAR spoofed?", options: ["Crafted laser pulses inject fake points (phantom obstacles) or hide real ones", "By covering it in paint", "By honking", "By GPS only"], correctIndex: 0, explanation: "Injected returns create or mask objects in the LiDAR point cloud." },
        { id: "vehicle-08-q4", type: "GPS", challenge: "Wrong place.", text: "What does spoofing the car's GPS achieve against autonomy?", options: ["Misleading navigation-based driving (e.g., Navigate-on-Autopilot)", "Faster charging", "Better tires", "Nothing"], correctIndex: 0, explanation: "Regulus spoofed GPS to mislead Tesla's navigation-driven autonomy." },
        { id: "vehicle-08-q5", type: "Phantom", challenge: "Acting on a lie.", text: "What is a 'phantom' attack?", options: ["Projecting a brief fake object so the car emergency-brakes or swerves", "A ghost in the engine", "A dead battery", "A radio glitch"], correctIndex: 0, explanation: "A split-second projected person/sign is treated as real, triggering a maneuver." },
        { id: "vehicle-08-q6", type: "Defense", challenge: "Don't trust one.", text: "What is the core defense against sensor spoofing?", options: ["Sensor fusion with disagreement/plausibility checks and safe fallback", "Trusting the camera absolutely", "Removing radar", "Driving faster"], correctIndex: 0, explanation: "Cross-checking sensors and rejecting implausible inputs defeats single-sensor spoofs." },
        { id: "vehicle-08-q7", type: "Cost", challenge: "How cheap.", text: "What makes these attacks especially concerning?", options: ["Many cost a few dollars and need only line of sight, not a network foothold", "They need a supercomputer", "They require the owner's password", "They are impossible in practice"], correctIndex: 0, explanation: "A sticker, projector, or laser suffices — low cost, no network access." },
        { id: "vehicle-08-q8", type: "Framing", challenge: "Perception as adversarial.", text: "What mindset does robust autonomy adopt?", options: ["Treat perception as adversarial — assume sensors can be fooled", "Assume sensors are always right", "Ignore sensor data", "Use one sensor only"], correctIndex: 0, explanation: "Designing for adversarial inputs (fusion, anti-spoofing, fallback) is the safe approach." },
      ],
    },
    ctf: {
      scenario: "A test vehicle runs camera+LiDAR ADAS with automatic emergency braking. You can't touch its code — but you can craft a sensor spoof. Build a phantom obstacle (LiDAR point injection + a projected image) and inject it into the perception pipeline to trigger a phantom emergency brake. Capture the flag in three fragments.",
      hint: "Lie to the sensors, not the software. Craft a phantom-object spoof, then inject it so the perception stack reports an obstacle and the car brakes.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Enumerate the ADAS sensors and fusion policy. Run: scan-sensors",
        "Craft the phantom-obstacle spoof (LiDAR + projection). Run: craft-spoof",
        "Inject it into the perception pipeline. Run: inject-sensor",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{LID4R_", label: "Mission Brief — Sensor Spoof" },
        { trigger: "scan-sensors", value: "SP00F3D_", label: "Sensors & Fusion Enumerated" },
        { trigger: "craft-spoof", value: "PH4NT0M_", label: "Phantom Obstacle Crafted" },
        { trigger: "inject-sensor", value: "BR4K3}", label: "Phantom Brake Triggered" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: SENSOR SPOOF",
          "Target: camera+LiDAR ADAS with automatic emergency braking (AEB).",
          "Weak fusion: a strong single-sensor obstacle can trigger AEB.",
          "",
          "Goal: inject a phantom obstacle so the car emergency-brakes on an empty road.",
          "Sequence: craft-spoof -> inject-sensor",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-sensors": () => ({
          lines: [
            "Enumerating ADAS sensors: front camera, LiDAR, radar, 12x ultrasonic.",
            "Fusion policy: high-confidence LiDAR cluster + camera box -> obstacle -> AEB.",
            "Next: craft-spoof",
          ],
        }),
        "craft-spoof": () => ({
          lines: [
            "Building phantom obstacle ...",
            "  LiDAR: timed laser pulses injecting a dense point cluster at 8 m",
            "  Camera: projected 'pedestrian' image aligned to the cluster",
            "Spoof set ready. Next: inject-sensor",
          ],
        }),
        "inject-sensor": () => ({
          lines: [
            "Emitting LiDAR injection + projection into the sensor field of view ...",
            "Perception: OBSTACLE detected at 8 m, confidence 0.94 (phantom).",
            "Planner: emergency brake! ... vehicle stops on an empty road.",
            "Phantom brake triggered. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── vehicle-09: OTA Updates & Supply Chain (Quiz) ───────────────────────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "Over-the-air updates — the whole fleet at once", location: "Cloud → millions of cars", era: "Modern", emoji: "📥" },
    id: "vehicle-09",
    order: 9,
    title: "OTA Updates & the Supply Chain",
    subtitle: "Patching — and Attacking — the Whole Fleet",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-veh-ota", name: "Update Steward", emoji: "📥" },
    challengeType: "quiz",
    info: {
      tagline: "Over-the-air updates turned cars into devices that improve overnight — and into a fleet that one bad push could brick or backdoor. The update pipeline is the most powerful, and most dangerous, channel into every vehicle at once.",
      year: 2024,
      overview: [
        "OTA (over-the-air) updates let manufacturers fix bugs, patch vulnerabilities, and add features remotely — a huge security win, because cars can finally be patched like phones instead of waiting for a dealer visit. But the same channel that reaches every car is a fleet-scale attack surface.",
        "OTA is a double-edged sword:\n- UPSIDE — rapid, remote patching closes vulnerabilities (including the kind in earlier stages) across millions of vehicles fast.\n- DOWNSIDE — if the update pipeline is compromised, an attacker could push malicious firmware to the whole fleet, or a buggy update could brick or endanger vehicles.\n- The pipeline spans the OEM's build systems, signing keys, distribution servers, and the in-vehicle update agent — every link must be trustworthy.",
        "Securing OTA is mostly about integrity and resilience:\n- SIGNING — updates must be cryptographically signed and verified by the vehicle so unsigned/altered code is rejected (protecting against MITM and server compromise).\n- KEY PROTECTION — the signing keys are crown jewels; their theft would let an attacker sign malicious updates.\n- ROBUST DELIVERY — frameworks like Uptane add resilience (multiple keys/roles, rollback protection) specifically for automotive updates, so one compromised server can't push arbitrary firmware.",
      ],
      technical: {
        title: "Signing, Uptane, and Build-System Risk",
        body: [
          "The threats track the pipeline:\n- A man-in-the-middle on the download, a compromised distribution server, or a stolen signing key could each deliver malicious firmware — unless the vehicle verifies a valid signature with separation of duties.\n- Build-system / supply-chain compromise (SolarWinds-style) is the deepest risk: malicious code inserted before signing inherits trust.\n- Rollback attacks (forcing an old, vulnerable version) and bricking (a bad or interrupted update) are availability/safety concerns.",
          "Automotive-grade update security is a designed system:\n- Uptane (an automotive adaptation of TUF) uses multiple roles/keys and metadata so that compromising a single server or key is not enough to push arbitrary firmware to ECUs, and downgrade attacks are detected.\n- Secure boot on each ECU ensures only signed firmware runs even after an update.\n- Staged rollouts, A/B partitions (so a failed update can revert), and monitoring keep a fleet update from becoming a fleet outage — resilience for a safety-critical, at-scale channel.",
        ],
      },
      incident: {
        title: "The Power — and Peril — of Updating Every Car at Once",
        when: "2012–present",
        where: "EV/automotive industry",
        impact: "OTA became standard (led by Tesla), delivering fast fixes but concentrating fleet-wide risk in the update pipeline",
        body: [
          "Tesla popularized true OTA updates, even using them to remotely address issues (including a notable case of adjusting suspension/range behavior and pushing safety fixes) without dealer visits. The industry followed, making OTA a baseline expectation — and making the update pipeline strategically critical.",
          "The security community responded by hardening the channel:\n- The Uptane framework was developed specifically to secure automotive software updates against server and key compromise, and is now widely referenced/adopted.\n- The recognition is that the very capability that makes OTA great — reaching the whole fleet instantly — is what makes a compromised pipeline catastrophic.\n- The defenses (signing, key protection, separation of duties, secure boot, staged/rollback-safe delivery) are the price of safely wielding a remote channel into millions of moving machines.",
        ],
      },
      diagram: {
        nodes: [
          { label: "OEM Build + Signing", sub: "keys = crown jewels", type: "system" },
          { label: "Distribution Servers", sub: "deliver to the fleet", type: "victim" },
          { label: "Compromise the Pipeline", sub: "MITM / server / key / build", type: "attacker" },
          { label: "Fleet-Wide Firmware", sub: "patch — or backdoor — all cars", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "Tesla popularizes true over-the-air vehicle software updates" },
        { year: 2016, event: "Uptane framework formalizes secure automotive OTA", highlight: true },
        { year: 2020, event: "SolarWinds reframes build/supply-chain compromise as a top threat" },
        { year: 2024, event: "OTA + secure boot + staged rollbacks standard across new vehicles" },
      ],
      keyTakeaways: [
        "OTA enables fast fleet-wide patching (a security win) but is itself a fleet-scale attack surface",
        "The pipeline spans build, signing keys, distribution, and the in-vehicle agent — every link must be trusted",
        "Core defense is integrity: signed+verified updates, protected keys, secure boot so only signed code runs",
        "Uptane adds resilience (multiple roles/keys, rollback protection) so one compromised server/key isn't enough",
      ],
      references: [
        { title: "Uptane — secure automotive software updates", url: "https://uptane.org/" },
        { title: "Over-the-air update (automotive) — overview", url: "https://en.wikipedia.org/wiki/Over-the-air_update" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-09-q1", type: "Core Idea", challenge: "Two-edged.", text: "Why is OTA both a security win and a risk?", options: ["It patches the whole fleet fast — but a compromised pipeline reaches every car too", "It only ever helps", "It only ever harms", "It has no security impact"], correctIndex: 0, explanation: "The same reach that fixes millions of cars can backdoor them if abused." },
        { id: "vehicle-09-q2", type: "Pipeline", challenge: "The chain.", text: "Which is part of the OTA pipeline that must be trusted?", options: ["Build systems, signing keys, distribution servers, and the in-vehicle agent", "The tires", "The paint shop", "The cup holders"], correctIndex: 0, explanation: "Every link from build to in-car agent is part of the trust chain." },
        { id: "vehicle-09-q3", type: "Integrity", challenge: "The key control.", text: "What most directly stops a malicious or altered update?", options: ["Cryptographically signed updates the vehicle verifies (rejecting unsigned code)", "A faster modem", "A bigger battery", "Hiding the update server"], correctIndex: 0, explanation: "Signature verification defeats MITM and server compromise of the payload." },
        { id: "vehicle-09-q4", type: "Crown Jewels", challenge: "Worst case.", text: "Why are signing keys so critical?", options: ["Stolen keys would let an attacker sign malicious firmware the fleet trusts", "They unlock the doors", "They control the radio", "They are unimportant"], correctIndex: 0, explanation: "Key theft turns the trusted update channel into an attack channel." },
        { id: "vehicle-09-q5", type: "Uptane", challenge: "Resilience.", text: "What does the Uptane framework add?", options: ["Multiple roles/keys + rollback protection so one compromised server/key isn't enough", "Free updates", "Faster cars", "A new radio"], correctIndex: 0, explanation: "Separation of duties and metadata limit the blast radius of a single compromise." },
        { id: "vehicle-09-q6", type: "Availability", challenge: "Don't brick the fleet.", text: "How do OEMs avoid a bad update becoming a fleet outage?", options: ["Staged rollouts, A/B partitions for safe rollback, and monitoring", "Updating all cars instantly with no testing", "Never updating", "Disabling secure boot"], correctIndex: 0, explanation: "Gradual rollout and rollback-safe delivery keep updates from causing mass failure." },
      ],
    },
  },

  // ─── vehicle-10: Fleet APIs & Securing the Vehicle (Quiz capstone) ───────────
  {
    epochId: "vehicle-sec",
    wonder: { name: "The connected-car cloud", location: "Carmaker APIs & companion apps", era: "Modern", emoji: "🛡️" },
    id: "vehicle-10",
    order: 10,
    title: "Fleet APIs & Securing the Vehicle",
    subtitle: "From Web Bugs to the Whole Defense Stack",
    category: "cybersecurity",
    xp: 155,
    badge: { id: "badge-veh-secure", name: "Vehicle Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "The newest car-hacking frontier isn't the car — it's the website. Companion apps and carmaker cloud APIs can locate, unlock, and start vehicles, and researchers have found web bugs that did exactly that across whole brands. Then flip to defense: how the entire vehicle gets secured.",
      year: 2024,
      overview: [
        "Connected cars expose cloud APIs so owners can use phone apps to find, unlock, and pre-condition their vehicles. Those APIs are ordinary web systems — and ordinary web vulnerabilities in them can translate directly into physical control of cars, at fleet scale, from a laptop.",
        "Recent research made this concrete:\n- In 2023, a team led by Sam Curry disclosed vulnerabilities across many automakers' web/telematics APIs — flaws that, in various cases, could locate, unlock, start, or honk vehicles, or access owner data.\n- In 2024, a flaw in a Kia dealer/owner portal reportedly allowed remote control of features using only a license plate to identify the car.\n- These are classic web bugs (broken authentication/authorization, IDOR, SSO flaws) — but the 'object' being accessed is a real vehicle.",
        "So securing a vehicle means securing the whole system, the theme of this epoch:\n- IN-CAR — segment the connected domain from drive-critical CAN, authenticate critical messages, sign firmware, secure boot.\n- THE LINKS — authenticate/encrypt telematics, charging (OCPP/15118), and key fobs (distance bounding).\n- THE CLOUD — treat carmaker APIs as critical: strong authn/authz, no IDOR, monitoring — because a web bug is now a car-control bug.",
      ],
      technical: {
        title: "Web Bugs as Car Control, and Defense-in-Depth",
        body: [
          "The cloud is now part of the vehicle's attack surface:\n- Broken object-level authorization (IDOR) on a telematics API can let one account act on another's car; SSO/identity flaws can grant access to internal tools that control vehicles.\n- Because fleets are managed centrally, one API flaw can scale to an entire brand — the same fleet-multiplier seen in OTA and charging.\n- VIN/plate-to-account linkages, dealer portals, and third-party integrations widen the surface beyond the OEM's core app.",
          "Defense-in-depth ties the whole epoch together:\n- Apply standard appsec rigor to vehicle cloud APIs (authz checks, least privilege, secrets hygiene, monitoring) — and assume a web bug equals physical impact.\n- In the car, the layered controls from earlier stages (segmentation, message auth, signed firmware/secure boot, sensor fusion, BMS safety cutoffs) ensure no single failure reaches the driver.\n- Standards (ISO/SAE 21434, UN R155) require this lifecycle approach. The takeaway: a vehicle is a cyber-physical system spanning car, link, and cloud — secure all three, because attackers will pick the weakest.",
        ],
      },
      incident: {
        title: "Web Hackers vs. the Auto Industry (2023–2024)",
        when: "2023–2024",
        where: "Connected-car cloud platforms",
        impact: "Web-app vulnerabilities in automaker APIs were shown to enable locating, unlocking, and starting vehicles across multiple brands",
        body: [
          "In January 2023, Sam Curry and collaborators published 'Web Hackers vs. The Auto Industry', detailing vulnerabilities across many manufacturers and telematics providers — issues that variously exposed customer data and allowed remote vehicle commands (locate, unlock, start, honk) through web/API flaws rather than any in-car exploit. In 2024, a Kia portal flaw reportedly enabled control of features via just a license plate.",
          "It marked a shift in where car hacking happens:\n- The attack surface moved partly off the car and into the cloud — where bugs are cheaper to find and scale instantly across a brand's fleet.\n- It proved that 'just' a web vulnerability now carries physical, safety-relevant consequences for vehicles.\n- The defense is to treat connected-car backends as critical infrastructure with serious appsec — completing the picture that securing a modern vehicle spans the car, the radio links, and the cloud together.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Companion App / API", sub: "locate, unlock, start", type: "system" },
          { label: "Web Vuln (IDOR/SSO)", sub: "broken authz at scale", type: "attacker" },
          { label: "Control Real Vehicles", sub: "fleet-wide from a laptop", type: "victim" },
          { label: "Defense-in-Depth", sub: "car + link + cloud secured", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "Jeep hack proves remote car control via the connected domain" },
        { year: 2023, event: "'Web Hackers vs. The Auto Industry' finds API flaws across brands", highlight: true },
        { year: 2024, event: "Kia portal flaw reportedly enables control via a license plate" },
        { year: 2024, event: "ISO/SAE 21434 + UN R155 enforce lifecycle vehicle cybersecurity" },
      ],
      keyTakeaways: [
        "Carmaker cloud APIs can locate/unlock/start cars — so web bugs (IDOR, SSO, broken authz) become car-control bugs",
        "Fleet APIs scale a single flaw to a whole brand — the same fleet-multiplier as OTA and charging",
        "Securing a vehicle spans three layers: the car (segmentation, msg auth, signed firmware), the links, and the cloud",
        "Treat connected-car backends as critical infrastructure with serious appsec; standards (21434/R155) require it",
      ],
      references: [
        { title: "Web Hackers vs. The Auto Industry (Sam Curry, 2023)", url: "https://samcurry.net/web-hackers-vs-the-auto-industry" },
        { title: "UN Regulation No. 155 — vehicle cybersecurity", url: "https://en.wikipedia.org/wiki/Vehicle_cybersecurity" },
      ],
    },
    quiz: {
      questions: [
        { id: "vehicle-10-q1", type: "Core Idea", challenge: "The new frontier.", text: "Why are carmaker cloud APIs a major attack surface?", options: ["Web bugs in them can locate, unlock, or start real cars at fleet scale", "They only show the weather", "They are offline", "They control nothing"], correctIndex: 0, explanation: "Companion-app APIs command vehicles, so a web flaw becomes physical control." },
        { id: "vehicle-10-q2", type: "Bug Class", challenge: "Classic flaws.", text: "Which classic web vulnerability maps to taking over another person's car?", options: ["Broken object-level authorization (IDOR)", "A 404 page", "A slow load time", "A typo"], correctIndex: 0, explanation: "IDOR on a telematics API can let one account act on another's vehicle." },
        { id: "vehicle-10-q3", type: "Scale", challenge: "Why it's worse.", text: "Why is an API flaw potentially brand-wide?", options: ["Fleets are centrally managed, so one flaw scales to many vehicles", "Each car has its own internet", "APIs only affect one car", "It can't scale"], correctIndex: 0, explanation: "Central management is the same fleet-multiplier seen in OTA and charging." },
        { id: "vehicle-10-q4", type: "Real World", challenge: "The research.", text: "What did 'Web Hackers vs. The Auto Industry' (2023) show?", options: ["API flaws across many automakers enabling remote vehicle commands and data access", "That cars can't be hacked online", "A new engine", "Only marketing"], correctIndex: 0, explanation: "Sam Curry's team found web/API bugs that could locate, unlock, and start cars." },
        { id: "vehicle-10-q5", type: "Three Layers", challenge: "Full picture.", text: "Securing a modern vehicle spans which layers?", options: ["The car, the radio links, and the cloud backends", "Only the engine", "Only the app", "Only the tires"], correctIndex: 0, explanation: "Defense must cover in-car, the links, and the cloud — attackers pick the weakest." },
        { id: "vehicle-10-q6", type: "Defense", challenge: "Tying it together.", text: "What is the unifying defensive principle of this epoch?", options: ["Defense-in-depth so no single failure reaches the driver — across car, link, and cloud", "One firewall is enough", "Secrecy over integrity", "Trust the connected domain"], correctIndex: 0, explanation: "Layered controls (segmentation, auth, signing, fusion, appsec) keep one bug from causing harm." },
      ],
    },
  },
];
