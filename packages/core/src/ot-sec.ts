import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const otSecEpoch: EpochConfig = {
  id: "ot-sec",
  name: "Operational Technology",
  subtitle: "Securing ICS, SCADA & the Physical World",
  description:
    "Operational Technology (OT) is the computing that runs the physical world — the power grid, water plants, refineries, factories, and pipelines. These industrial control systems (ICS) were built for decades of uptime and physical safety, not for the internet, and yet they are increasingly connected. Start with the foundations (the IT/OT divide, the Purdue model, PLCs) then go hands-on: force a Modbus coil, hijack an HMI, spoof a DNP3 command, pivot from IT to OT through the engineering workstation, and learn the lessons of Stuxnet, TRITON, and the Ukraine grid attacks — finishing with how real plants are segmented, monitored, and recovered.",
  emoji: "🏭",
  color: "amber",
  unlocked: true,
};

export const otSecStages: StageConfig[] = [
  // ─── ot-01: The OT/IT Divide & the Purdue Model (Quiz) ───────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The machines that run the world", location: "Grids, plants, pipelines, and factories", era: "Modern", emoji: "🏭" },
    id: "ot-01",
    order: 1,
    title: "The OT/IT Divide",
    subtitle: "Why Industrial Control Is a Different World — and the Purdue Model",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-ot-divide", name: "OT Cartographer", emoji: "🏭" },
    challengeType: "quiz",
    info: {
      tagline: "When you hack IT, you risk data. When you hack OT, you risk turbines, valves, and lives. Operational Technology runs the physical processes civilization depends on, and it follows rules that invert almost everything IT security assumes — so before you can attack or defend it, you have to understand why it is different.",
      year: 2024,
      overview: [
        "Operational Technology (OT) is hardware and software that monitors and controls physical processes — generating power, treating water, refining oil, moving trains, running assembly lines. The control systems inside it are called Industrial Control Systems (ICS): PLCs, SCADA, DCS, and the sensors and actuators they drive.",
        "OT inverts IT's priorities. IT optimizes for Confidentiality, then Integrity, then Availability (the CIA triad). OT flips it: Availability and safety come first, because a process that stops or misbehaves can hurt people or destroy equipment. A patch that reboots a server is routine in IT; in OT it might mean shutting down a furnace.",
        "OT systems are long-lived and fragile by IT standards:\n- Lifespans of 20-30 years mean Windows XP, unpatchable PLCs, and protocols designed before the internet are still in production.\n- Devices are real-time and deterministic — an unexpected scan or a dropped packet can trip a safety system.\n- Historically they relied on isolation ('air gaps') for security, an assumption that connectivity has quietly destroyed.",
      ],
      technical: {
        title: "The Purdue Model: A Map of the Plant",
        body: [
          "The Purdue Enterprise Reference Architecture organizes a plant into levels, and it is the mental map for both attack and defense:\n- Level 0 — the physical process: sensors and actuators (valves, motors, pumps).\n- Level 1 — basic control: PLCs and RTUs running the real-time loops.\n- Level 2 — supervisory control: SCADA servers and HMIs that operators watch.\n- Level 3 — operations management: historians, engineering workstations, the OT data center.\n- Levels 4/5 — the corporate IT network and the internet.",
          "Security follows the levels. Traffic should flow through controlled chokepoints, with an industrial DMZ (IDMZ) between the IT levels (4/5) and the OT levels (0-3). Almost every major ICS attack is a story of crossing these boundaries the wrong way — phishing at Level 4, pivoting through an engineering workstation at Level 3, and finally reaching the PLCs at Level 1 that move the physical world at Level 0.",
        ],
      },
      incident: {
        title: "The Myth of the Air Gap",
        when: "1990s–today",
        where: "Industrial sites worldwide",
        impact: "Decades of 'it's isolated, so it's safe' left OT with weak authentication, flat networks, and unpatched devices — exposed the moment connectivity arrived",
        body: [
          "For decades, OT security was a single assumption: the plant network is physically separate from the internet, so it doesn't need defenses. That 'air gap' justified protocols with no authentication, default passwords, and flat networks where any device could command any other.",
          "Connectivity erased the gap without erasing the assumption. Remote vendor access, USB drives, dual-homed engineering laptops, business demand for real-time production data, and the Industrial IoT all bridged OT to IT and the internet. Search engines like Shodan now index tens of thousands of internet-exposed ICS devices. The air gap, where it ever truly existed, is gone — but the fragile, trust-everything systems it once protected remain.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Level 4/5 — IT", sub: "corporate network, internet", type: "attacker" },
          { label: "Level 3 — Ops", sub: "historian, engineering workstation", type: "system" },
          { label: "Level 1/2 — Control", sub: "SCADA, HMI, PLCs", type: "victim" },
          { label: "Level 0 — Process", sub: "valves, motors, sensors", type: "result" },
        ],
      },
      timeline: [
        { year: 1990, event: "Modbus and other ICS protocols, designed for isolated networks, are already industry standards" },
        { year: 1992, event: "The Purdue model formalizes the layered plant architecture still used today" },
        { year: 2009, event: "Shodan launches, making internet-exposed ICS devices searchable", highlight: true },
        { year: 2024, event: "OT is widely connected to IT and cloud, yet still runs decades-old, unpatchable control gear" },
      ],
      keyTakeaways: [
        "OT runs physical processes; its priority is Availability and safety, inverting IT's confidentiality-first CIA triad",
        "ICS includes PLCs, SCADA/DCS, and the sensors and actuators they control",
        "The Purdue model maps the plant into levels 0-5; defense and attack both revolve around crossing those boundaries",
        "The 'air gap' is largely a myth — connectivity arrived but the trust-everything design did not change",
      ],
      references: [
        { title: "Purdue Enterprise Reference Architecture", url: "https://en.wikipedia.org/wiki/Purdue_Enterprise_Reference_Architecture" },
        { title: "CISA — Industrial Control Systems", url: "https://www.cisa.gov/topics/industrial-control-systems" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-01-q1", type: "Core Idea", challenge: "What is OT?", text: "What does Operational Technology control?", options: ["Physical processes — power, water, manufacturing, pipelines", "Only email servers", "Social media feeds", "Video games"], correctIndex: 0, explanation: "OT monitors and controls the physical world via industrial control systems." },
        { id: "ot-01-q2", type: "Priorities", challenge: "Flipped triad.", text: "How do OT priorities differ from IT's CIA triad?", options: ["OT puts Availability and safety first; IT puts Confidentiality first", "They are identical", "OT ignores availability", "OT only cares about secrecy"], correctIndex: 0, explanation: "A stopped or misbehaving process can hurt people, so availability and safety lead in OT." },
        { id: "ot-01-q3", type: "Architecture", challenge: "The map.", text: "What does the Purdue model describe?", options: ["A layered architecture of plant levels 0-5 from process to enterprise", "A type of malware", "A password policy", "A brand of PLC"], correctIndex: 0, explanation: "Purdue levels organize the plant and define the boundaries defenders protect." },
        { id: "ot-01-q4", type: "Components", challenge: "Level 1.", text: "What lives at Purdue Level 1?", options: ["PLCs and RTUs running real-time control loops", "The corporate email server", "The public website", "Marketing dashboards"], correctIndex: 0, explanation: "Level 1 is basic control — the PLCs/RTUs that drive Level 0 actuators." },
        { id: "ot-01-q5", type: "Myth", challenge: "Air gap.", text: "Why is the 'air gap' considered a myth today?", options: ["Remote access, USB, dual-homed laptops, and IIoT have bridged OT to IT and the internet", "OT was never networked", "Air gaps are unbreakable", "All OT is offline"], correctIndex: 0, explanation: "Connectivity arrived through many paths while the trust-everything design stayed put." },
        { id: "ot-01-q6", type: "Legacy", challenge: "Old gear.", text: "Why is OT hard to patch?", options: ["20-30 year lifespans, real-time constraints, and uptime requirements make changes risky", "Vendors patch hourly", "It runs only the latest OS", "Patching is instant and free"], correctIndex: 0, explanation: "Long-lived, deterministic, always-on systems can't be casually rebooted or upgraded." },
      ],
    },
  },

  // ─── ot-02: PLCs & Ladder Logic (CTF) ────────────────────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The brain of the machine", location: "Control cabinets on every factory floor", era: "Modern", emoji: "🧠" },
    id: "ot-02",
    order: 2,
    title: "PLCs & Ladder Logic",
    subtitle: "The Rugged Little Computer That Runs the Process",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-ot-plc", name: "Logic Bender", emoji: "🧠" },
    challengeType: "quiz",
    info: {
      tagline: "A Programmable Logic Controller is a hardened computer the size of a lunchbox that reads sensors and drives motors thousands of times a second. It is the muscle of every plant — and most of them will run any logic you upload, no questions asked.",
      year: 2024,
      overview: [
        "A PLC (Programmable Logic Controller) is a rugged industrial computer built to survive heat, vibration, and decades of duty. It runs a simple, endlessly repeating 'scan cycle': read all inputs, run the control program, write all outputs, repeat — often in milliseconds.",
        "PLCs are usually programmed in IEC 61131-3 languages, most famously Ladder Logic, which looks like an electrical relay diagram so electricians could read it. A rung might say: IF tank_level_high AND pump_running THEN close_inlet_valve. That simple logic is what keeps a process safe and stable.",
        "The security problem is foundational: most PLCs have no authentication on their programming interface. If you can reach a PLC on the network, you can often read its program, change setpoints, force outputs, or upload entirely new logic — and the PLC will faithfully obey, because it was designed to trust whoever talks to it.",
      ],
      technical: {
        title: "The Scan Cycle, Setpoints, and 'Stop' Commands",
        body: [
          "Attacks on a PLC map directly to its parts:\n- Forcing I/O: override an input or output so a valve opens or a reading lies, regardless of the real process.\n- Changing setpoints: nudge a target value (temperature, pressure, speed) out of safe range while the HMI still looks normal.\n- Uploading malicious logic: replace the program so the PLC does the attacker's bidding — the technique at the heart of Stuxnet.\n- Stop/reprogram commands: many PLCs accept a remote STOP or mode change that halts the process entirely (a denial-of-control attack).",
          "Engineering software (Siemens TIA Portal, Rockwell Studio 5000, Schneider EcoStruxure) speaks vendor protocols (S7comm, EtherNet/IP, etc.) to do this legitimately. Because those protocols typically lack strong authentication, an attacker who reaches Level 1 can often replay or forge the same operations the engineer would — which is exactly what you'll do in this challenge against a lab PLC.",
        ],
      },
      incident: {
        title: "Stuxnet Rewrote the Logic",
        when: "2010",
        where: "Natanz, Iran",
        impact: "Demonstrated that altering PLC logic could physically destroy equipment while hiding from operators",
        body: [
          "Stuxnet is the defining PLC attack. It targeted Siemens S7 PLCs controlling uranium-enrichment centrifuges. After spreading to the engineering environment, it injected hidden code into the PLC that periodically spun the centrifuges outside their safe range, wearing them out and destroying them.",
          "Its genius was deception at the PLC level: while sabotaging the process, it replayed recorded 'normal' sensor values back to the monitoring systems, so operators saw nothing wrong. It proved that whoever controls the PLC's logic controls the physical reality the operators believe in — and that a PLC will execute hostile logic exactly as obediently as friendly logic.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Engineer / Attacker", sub: "engineering software or forged protocol", type: "attacker" },
          { label: "PLC", sub: "scan cycle: read → run → write", type: "victim" },
          { label: "Logic / Setpoints", sub: "ladder program & target values", type: "system" },
          { label: "Actuators", sub: "valves, motors spin in the real world", type: "result" },
        ],
      },
      timeline: [
        { year: 1968, event: "Dick Morley's Modicon 084 — the first PLC — replaces banks of hardwired relays" },
        { year: 1993, event: "IEC 61131-3 standardizes PLC programming languages, including Ladder Logic" },
        { year: 2010, event: "Stuxnet uploads malicious logic to Siemens S7 PLCs to wreck centrifuges", highlight: true },
        { year: 2022, event: "Researchers show many PLCs still accept unauthenticated program changes over the network" },
      ],
      keyTakeaways: [
        "A PLC runs a fast, repeating scan cycle: read inputs, run the program, write outputs",
        "Ladder Logic is the relay-style language that encodes the control (and safety) rules",
        "Most PLCs have no authentication — reaching one often means you can force I/O, change setpoints, or upload new logic",
        "Stuxnet proved that controlling a PLC's logic lets you destroy equipment while lying to operators",
      ],
      references: [
        { title: "Programmable logic controller (overview)", url: "https://en.wikipedia.org/wiki/Programmable_logic_controller" },
        { title: "Stuxnet (technical overview)", url: "https://en.wikipedia.org/wiki/Stuxnet" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-02-q1", type: "Core Idea", challenge: "What is a PLC?", text: "What is a Programmable Logic Controller?", options: ["A rugged industrial computer that reads sensors and drives actuators in a scan cycle", "A type of firewall", "A cloud database", "A web browser"], correctIndex: 0, explanation: "PLCs are the hardened controllers that run real-time process logic." },
        { id: "ot-02-q2", type: "Scan Cycle", challenge: "The loop.", text: "What is a PLC's scan cycle?", options: ["Read inputs → run the program → write outputs → repeat", "Encrypt → send → decrypt", "Boot once and stop", "Render web pages"], correctIndex: 0, explanation: "The scan cycle repeats continuously, often every few milliseconds." },
        { id: "ot-02-q3", type: "Language", challenge: "Looks like relays.", text: "What is Ladder Logic?", options: ["A PLC programming language styled like relay/electrical diagrams", "A password format", "A network cable", "A type of encryption"], correctIndex: 0, explanation: "Ladder Logic was designed to be readable by electricians familiar with relay logic." },
        { id: "ot-02-q4", type: "Weakness", challenge: "Trust by default.", text: "What is the core PLC security weakness?", options: ["Most have no authentication on the programming interface — reachability equals control", "They require multi-factor auth", "They encrypt all logic", "They reject all remote commands"], correctIndex: 0, explanation: "If you can reach the PLC, you can usually reprogram or force it." },
        { id: "ot-02-q5", type: "Attacks", challenge: "Ways in.", text: "Which is a PLC attack technique?", options: ["Forcing I/O, changing setpoints, or uploading malicious logic", "Changing the desktop wallpaper", "Defragmenting a disk", "Clearing browser cookies"], correctIndex: 0, explanation: "All three manipulate the physical process or hide its true state." },
        { id: "ot-02-q6", type: "Stuxnet", challenge: "The lesson.", text: "How did Stuxnet abuse PLCs?", options: ["It uploaded hidden logic to damage centrifuges while replaying fake 'normal' readings", "It only encrypted files for ransom", "It defaced a website", "It stole credit cards"], correctIndex: 0, explanation: "Controlling the logic let it sabotage the process and deceive operators simultaneously." },
      ],
    },
  },

  // ─── ot-03: Modbus — The Protocol With No Auth (CTF) ─────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The lingua franca of machines", location: "Serial cables and TCP ports in every plant", era: "Modern", emoji: "🔌" },
    id: "ot-03",
    order: 3,
    title: "Modbus: No Auth, No Problem",
    subtitle: "The 1979 Protocol Still Running the World",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-ot-modbus", name: "Coil Forcer", emoji: "🔌" },
    challengeType: "quiz",
    info: {
      tagline: "Modbus was invented in 1979 to let a controller talk to a device over a short serial cable in a locked room. It has no authentication, no encryption, and no concept of an attacker — and it is still one of the most widely deployed industrial protocols on Earth, now riding on TCP/IP.",
      year: 2024,
      overview: [
        "Modbus is a simple request/response protocol: a master (client) asks a slave (server) to read or write data. The data lives in four tables — coils (1-bit outputs you can turn on/off), discrete inputs (1-bit read-only), input registers (16-bit read-only), and holding registers (16-bit read/write).",
        "A Modbus message is tiny: an address, a function code (e.g., 01 read coils, 05 write single coil, 06 write single register, 16 write multiple registers), and the data. That's it. There is no session, no authentication, no integrity check beyond a basic checksum, and Modbus/TCP just wraps the same payload in a TCP packet on port 502.",
        "This means anyone who can send packets to a Modbus device can read its state and command it. 'Write single coil' (function 05) can energize a relay; 'write register' (06/16) can change a setpoint. The protocol cannot tell an engineer from an attacker — it simply does what the packet says.",
      ],
      technical: {
        title: "Function Codes, Registers, and Forged Writes",
        body: [
          "Attacking Modbus is mostly about understanding the function codes and the register map:\n- Reconnaissance: read coils/registers (FC 01-04) to learn the process state — which register is the pump speed, which coil is the valve.\n- Manipulation: write coils/registers (FC 05/06/16) to flip outputs or change setpoints; replay captured engineer traffic to do exactly what they did.\n- Denial: malformed or flooding requests can knock fragile devices offline; some accept diagnostic function codes that reset or restart them.",
          "Tools like the Python library pymodbus, Metasploit's modbus modules, and plain packet crafting make this trivial on a flat network. Defenses don't come from Modbus itself (it can't be fixed) but from around it: segmentation so only authorized hosts reach port 502, deep-packet-inspection firewalls that understand Modbus function codes, read-only data diodes, and newer authenticated variants like Modbus/TCP Security (TLS). In this challenge you'll read the register map of a lab device, then force a coil to actuate it.",
        ],
      },
      incident: {
        title: "Tens of Thousands, Wide Open",
        when: "2013–today",
        where: "The global internet",
        impact: "Routine scans find Modbus devices directly exposed to the internet with no authentication, controlling real equipment",
        body: [
          "Project SHINE, Shodan, and academic scans have repeatedly found tens of thousands of Modbus (and other ICS) devices reachable directly from the internet. Because Modbus has no authentication, any of them can be read — and many can be written — by anyone who finds them.",
          "Researchers have demonstrated reading live process data and issuing write commands to internet-exposed building controls, water equipment, and energy devices without any credentials. The protocol's 1979 trust model — 'whoever is on the wire is authorized' — collides catastrophically with a world where 'the wire' is the internet.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker (Master)", sub: "crafts Modbus requests to port 502", type: "attacker" },
          { label: "Function Code", sub: "05 write coil / 06 write register", type: "system" },
          { label: "Modbus Device", sub: "no auth — obeys the request", type: "victim" },
          { label: "Process Change", sub: "relay flips, setpoint moves", type: "result" },
        ],
      },
      timeline: [
        { year: 1979, event: "Modicon publishes Modbus for serial communication between controllers" },
        { year: 1999, event: "Modbus/TCP carries the same auth-free payload over IP, port 502", highlight: true },
        { year: 2013, event: "Project SHINE and Shodan reveal tens of thousands of internet-exposed ICS devices" },
        { year: 2018, event: "Modbus/TCP Security adds TLS and certificate auth — but legacy devices remain" },
      ],
      keyTakeaways: [
        "Modbus is a simple read/write protocol over four data tables (coils, inputs, registers)",
        "It has no authentication or encryption — function codes 05/06/16 can flip outputs and change setpoints",
        "Anyone who can reach port 502 can read and often command the device",
        "Defense is external: segmentation, ICS-aware firewalls, data diodes, and TLS variants — Modbus itself can't be secured",
      ],
      references: [
        { title: "Modbus (protocol overview)", url: "https://en.wikipedia.org/wiki/Modbus" },
        { title: "CISA ICS — securing legacy protocols", url: "https://www.cisa.gov/topics/industrial-control-systems" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-03-q1", type: "Core Idea", challenge: "What is Modbus?", text: "What kind of protocol is Modbus?", options: ["A simple master/slave request-response protocol for reading/writing industrial data", "An encrypted VPN protocol", "A video streaming codec", "A database query language"], correctIndex: 0, explanation: "Modbus is a minimal request/response protocol from 1979." },
        { id: "ot-03-q2", type: "Data Model", challenge: "Four tables.", text: "What is a Modbus 'coil'?", options: ["A 1-bit output you can read or write (e.g., a relay on/off)", "A 64-bit password", "An encryption key", "A log file"], correctIndex: 0, explanation: "Coils are single-bit outputs; writing one can energize a relay." },
        { id: "ot-03-q3", type: "Weakness", challenge: "The fatal flaw.", text: "What security does Modbus provide by default?", options: ["None — no authentication, no encryption, no attacker model", "Mutual TLS", "Multi-factor authentication", "Per-message signatures"], correctIndex: 0, explanation: "Modbus trusts whoever is on the wire — fatal once the wire is networked." },
        { id: "ot-03-q4", type: "Function Codes", challenge: "Making it move.", text: "Which function code writes a single coil?", options: ["Function code 05 (write single coil)", "Function code 200", "There is no write function", "Function code 'GET'"], correctIndex: 0, explanation: "FC 05 writes one coil; FC 06/16 write registers/setpoints." },
        { id: "ot-03-q5", type: "Port", challenge: "Find it.", text: "What TCP port does Modbus/TCP use?", options: ["502", "443", "22", "3389"], correctIndex: 0, explanation: "Modbus/TCP rides on port 502." },
        { id: "ot-03-q6", type: "Defense", challenge: "Can't fix the protocol.", text: "How do you actually secure Modbus?", options: ["Around it: segmentation, ICS-aware firewalls, data diodes, and TLS variants", "By emailing the vendor", "By unplugging the internet entirely forever", "It needs no defense"], correctIndex: 0, explanation: "Modbus can't authenticate, so defenses must wrap and isolate it." },
      ],
    },
  },

  // ─── ot-04: SCADA & the HMI (CTF) ────────────────────────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The operator's window into the plant", location: "Control rooms watching the whole process", era: "Modern", emoji: "🖥️" },
    id: "ot-04",
    order: 4,
    title: "SCADA & the HMI",
    subtitle: "Hijacking the Operator's View and Hand",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-ot-hmi", name: "Control Room Ghost", emoji: "🖥️" },
    challengeType: "quiz",
    info: {
      tagline: "SCADA is how a handful of operators watch and run a process that sprawls across a building, a city, or a pipeline. The HMI is their screen — the picture of reality they trust and the buttons they press. Take the HMI and you take both the operator's eyes and their hands.",
      year: 2024,
      overview: [
        "SCADA (Supervisory Control And Data Acquisition) is the layer above the PLCs (Purdue Level 2). It gathers data from many controllers and RTUs across a wide area, stores and displays it, and lets operators issue supervisory commands — start a pump, open a breaker, change a setpoint.",
        "The HMI (Human-Machine Interface) is the operator's graphical console: a live mimic diagram of tanks, valves, and gauges with controls to act on them. Operators make life-and-death decisions based entirely on what the HMI shows. If the HMI lies, the operator acts on a lie.",
        "Two distinct attacks live here. Control: use the HMI (or its protocols) to send real commands to the field. Deception: alter what the HMI displays so operators don't see the attack — exactly the Stuxnet trick and the Ukraine grid playbook, where attackers operated breakers while showing operators a frozen, normal-looking screen.",
      ],
      technical: {
        title: "From the Screen to the Field",
        body: [
          "HMIs run on ordinary computers (often aging Windows) using vendor software (Wonderware, Ignition, WinCC, FactoryTalk). That makes them reachable through familiar means — phishing, RDP, default credentials, unpatched CVEs — and once you have the HMI host, you can:\n- Operate the process directly through the legitimate UI.\n- Read the tag database to learn every point in the plant and which command does what.\n- Manipulate the display logic so the mimic shows safe values while the process runs unsafe.",
          "Many HMIs reach the PLCs over the same unauthenticated protocols (Modbus, S7comm, EtherNet/IP, DNP3), so even without the GUI an attacker who reaches Level 2 can speak those protocols directly. Defenses center on treating the HMI as a high-value asset:\n- hardened and patched hosts\n- no internet exposure\n- MFA on remote access\n- application allow-listing\n- monitoring for commands that didn't originate from a real operator\nIn this challenge you'll reach an exposed HMI and push a command to the field.",
        ],
      },
      incident: {
        title: "Ukraine, 2015: Operators Watched Their Own Cursors",
        when: "December 23, 2015",
        where: "Western Ukraine power distribution",
        impact: "Attackers used the operators' own HMIs to open breakers, cutting power to ~230,000 people while operators were locked out",
        body: [
          "In the first confirmed cyberattack to take down a power grid, Russian actors (Sandworm) spent months inside three Ukrainian distribution utilities. On the day of the attack, they used the operators' own SCADA/HMI access to remotely open circuit breakers at around 30 substations.",
          "The operators reportedly watched their cursors move on their own screens, unable to stop it, then lost control entirely as the attackers overwrote firmware on serial-to-Ethernet converters and wiped systems. They had to send crews to manually re-close breakers in the field. It was the HMI attack made real: the operators' window and hand turned against them.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "phishing / RDP / default creds", type: "attacker" },
          { label: "HMI / SCADA Host", sub: "operator's screen + tag database", type: "victim" },
          { label: "Supervisory Command", sub: "open breaker / start pump", type: "system" },
          { label: "Field Devices", sub: "PLCs/RTUs act on the process", type: "result" },
        ],
      },
      timeline: [
        { year: 1970, event: "Early SCADA systems centralize monitoring of wide-area utilities" },
        { year: 2000, event: "Maroochy Shire: an insider uses radio/SCADA access to spill sewage in Australia" },
        { year: 2015, event: "Ukraine grid attack: operators' own HMIs are used to open breakers", highlight: true },
        { year: 2021, event: "Oldsmar water plant: attacker uses remote HMI access to spike sodium hydroxide dosing" },
      ],
      keyTakeaways: [
        "SCADA is the supervisory layer; the HMI is the operator's graphical window and control surface",
        "Two attack goals: control (issue real commands) and deception (make the screen lie)",
        "HMIs run on ordinary, often-unpatched computers — reachable by phishing, RDP, default creds, and CVEs",
        "Ukraine 2015 proved attackers can use operators' own HMIs to open breakers while operators watch helplessly",
      ],
      references: [
        { title: "SCADA (overview)", url: "https://en.wikipedia.org/wiki/SCADA" },
        { title: "E-ISAC/SANS — Ukraine 2015 grid attack analysis", url: "https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-04-q1", type: "Core Idea", challenge: "What is SCADA?", text: "What does SCADA do?", options: ["Supervisory monitoring and control of a wide-area process from a central point", "Encrypts hard drives", "Hosts websites", "Manages payroll"], correctIndex: 0, explanation: "SCADA = Supervisory Control And Data Acquisition, the layer above the PLCs." },
        { id: "ot-04-q2", type: "HMI", challenge: "The screen.", text: "What is an HMI?", options: ["The operator's graphical console showing the process and its controls", "A type of PLC", "A firewall rule", "A backup tape"], correctIndex: 0, explanation: "The Human-Machine Interface is what the operator watches and acts through." },
        { id: "ot-04-q3", type: "Two Attacks", challenge: "Eyes and hands.", text: "What are the two main HMI attack goals?", options: ["Control (send real commands) and deception (make the display lie)", "Only encryption", "Only logging", "Backup and restore"], correctIndex: 0, explanation: "You can act on the process and/or hide that action from operators." },
        { id: "ot-04-q4", type: "Reachability", challenge: "How in.", text: "Why are HMIs often reachable?", options: ["They run on ordinary, often-unpatched computers exposed via RDP, phishing, or default creds", "They use unbreakable hardware", "They are never networked", "They require biometric login by law"], correctIndex: 0, explanation: "HMIs inherit all the weaknesses of the commodity OSes they run on." },
        { id: "ot-04-q5", type: "Ukraine", challenge: "2015.", text: "What happened in the 2015 Ukraine grid attack?", options: ["Attackers used operators' own HMIs to open breakers, blacking out ~230,000 people", "A tornado hit the plant", "A software update fixed everything", "Nothing was affected"], correctIndex: 0, explanation: "Sandworm turned the operators' own SCADA/HMI access against the grid." },
        { id: "ot-04-q6", type: "Defense", challenge: "Protect the console.", text: "How do you defend an HMI?", options: ["Harden/patch the host, no internet exposure, MFA on remote access, app allow-listing, command monitoring", "Share the password widely", "Expose it to the internet for convenience", "Disable all logging"], correctIndex: 0, explanation: "Treat the HMI as a crown-jewel asset and watch for commands no operator issued." },
      ],
    },
  },

  // ─── ot-05: DNP3 & Serial Protocols (CTF) ────────────────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The protocol of the grid", location: "Substations and pipelines across continents", era: "Modern", emoji: "⚡" },
    id: "ot-05",
    order: 5,
    title: "DNP3 & the Grid Protocols",
    subtitle: "Spoofing Commands Across the Substation",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-ot-dnp3", name: "Substation Spoofer", emoji: "⚡" },
    challengeType: "quiz",
    info: {
      tagline: "Where Modbus runs factories, DNP3 runs the grid. It is richer and tougher — built for noisy, far-flung substations — but in its classic form it still trusts the wire. Forge a DNP3 'operate' and a breaker opens.",
      year: 2024,
      overview: [
        "DNP3 (Distributed Network Protocol 3) is the dominant protocol in North American electric and water utilities, connecting a control center (master) to outstations (RTUs/IEDs) across wide areas. It was designed for unreliable links, so it has features Modbus lacks: time-stamped events, report-by-exception, and data quality flags.",
        "DNP3's command model is its danger. A 'control relay output block' (CROB) with a select-before-operate sequence lets the master trip or close a breaker. The protocol also carries the address of master and outstation — but in classic DNP3 those are not cryptographically authenticated, so they can be spoofed or replayed.",
        "Other grid/serial protocols live here too — IEC 60870-5-101/104 in Europe, IEC 61850 GOOSE/MMS in modern substations, and legacy serial links. Many were designed for trusted networks, and even fast protocols like GOOSE (which trips protection relays in milliseconds) historically lack authentication, making spoofed trip messages a real concern.",
      ],
      technical: {
        title: "Select-Before-Operate, Replay, and Secure Authentication",
        body: [
          "Attacking classic DNP3 follows the command flow:\n- Reconnaissance: read the outstation's points to map breakers, switches, and analog values.\n- Spoofing: forge or replay a SELECT then OPERATE (CROB) to actuate a breaker, since the source address isn't authenticated.\n- Disruption: inject events or quality flags, or flood the link, to confuse the control center's view.",
          "The fix is DNP3 Secure Authentication (SAv5, in IEEE 1815) and IEC 62351 for the IEC protocols, which add challenge-response HMAC authentication so an outstation can verify a command really came from the master. Deployment lags because of legacy gear, so defenders also rely on segmentation, encrypted serial-line tunnels, and DNP3-aware monitoring that alarms on out-of-sequence or unexpected operate commands. In this challenge you'll capture DNP3 traffic and inject a forged operate.",
        ],
      },
      incident: {
        title: "Industroyer: Protocol-Native Grid Sabotage",
        when: "December 2016",
        where: "Kyiv, Ukraine (transmission)",
        impact: "Malware spoke grid protocols (including IEC 60870 and IEC 61850) directly to open breakers — purpose-built to attack substations",
        body: [
          "A year after the 2015 attack, the Industroyer (CrashOverride) malware struck a transmission substation north of Kyiv. Unlike 2015's hands-on-keyboard operation, Industroyer was a framework with payload modules that spoke ICS protocols natively — IEC 60870-5-101, -104, IEC 61850, and OPC DA.",
          "It could enumerate substation devices and issue breaker-open commands automatically and at scale, plus a wiper and a denial-of-service module against protective relays. Industroyer2 (2022) updated the IEC-104 payload to target Ukraine again. The lesson: when grid protocols lack authentication, attackers can weaponize the protocol itself, no GUI required.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker on the link", sub: "captures DNP3 / IEC traffic", type: "attacker" },
          { label: "Forged SELECT+OPERATE", sub: "unauthenticated CROB command", type: "system" },
          { label: "Outstation (RTU/IED)", sub: "trusts the source address", type: "victim" },
          { label: "Breaker Operates", sub: "circuit opens — lights out", type: "result" },
        ],
      },
      timeline: [
        { year: 1993, event: "DNP3 released for utility SCADA over unreliable wide-area links" },
        { year: 2010, event: "DNP3 Secure Authentication (SAv5) adds challenge-response to verify commands" },
        { year: 2016, event: "Industroyer speaks grid protocols natively to open breakers in Kyiv", highlight: true },
        { year: 2022, event: "Industroyer2 retargets Ukraine's grid via an updated IEC-104 payload" },
      ],
      keyTakeaways: [
        "DNP3 runs North American grid/water utilities; richer than Modbus but classically unauthenticated",
        "A spoofed or replayed SELECT+OPERATE (CROB) can trip or close a breaker",
        "IEC 60870/61850 (incl. fast GOOSE trips) share the same trust-the-wire weakness",
        "Fixes are DNP3 Secure Authentication / IEC 62351 plus segmentation and protocol-aware monitoring",
      ],
      references: [
        { title: "DNP3 (overview)", url: "https://en.wikipedia.org/wiki/DNP3" },
        { title: "Industroyer / CrashOverride (analysis)", url: "https://en.wikipedia.org/wiki/Industroyer" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-05-q1", type: "Core Idea", challenge: "What is DNP3?", text: "Where is DNP3 most used?", options: ["North American electric and water utilities (grid SCADA)", "Mobile gaming", "Email delivery", "Video conferencing"], correctIndex: 0, explanation: "DNP3 connects control centers to outstations across utility networks." },
        { id: "ot-05-q2", type: "Command", challenge: "Operate a breaker.", text: "What is a CROB in DNP3?", options: ["A control relay output block — the command that trips/closes a breaker via select-then-operate", "A type of cipher", "A backup format", "A login token"], correctIndex: 0, explanation: "CROB with select-before-operate is how DNP3 actuates field devices." },
        { id: "ot-05-q3", type: "Weakness", challenge: "Trust the wire.", text: "What's the classic DNP3 weakness?", options: ["Source addresses aren't cryptographically authenticated, so commands can be spoofed/replayed", "It uses too much encryption", "It can't carry data", "It requires hardware tokens"], correctIndex: 0, explanation: "Without authentication, a forged operate looks legitimate." },
        { id: "ot-05-q4", type: "Fix", challenge: "Prove it's the master.", text: "What adds authentication to DNP3?", options: ["DNP3 Secure Authentication (SAv5, IEEE 1815) with challenge-response HMAC", "Lowering the baud rate", "Disabling all commands", "A longer cable"], correctIndex: 0, explanation: "SAv5 lets outstations verify a command truly came from the master." },
        { id: "ot-05-q5", type: "Relatives", challenge: "Other grid protocols.", text: "Which fast substation protocol historically lacks authentication?", options: ["IEC 61850 GOOSE (millisecond protection trips)", "HTTPS", "SSH", "SFTP"], correctIndex: 0, explanation: "GOOSE trips relays in milliseconds and classically has no authentication." },
        { id: "ot-05-q6", type: "Industroyer", challenge: "Weaponized protocols.", text: "What made Industroyer notable?", options: ["It spoke grid protocols natively to open breakers automatically", "It was a harmless screensaver", "It only stole passwords", "It targeted smartphones"], correctIndex: 0, explanation: "Industroyer turned unauthenticated grid protocols into an automated weapon." },
      ],
    },
  },

  // ─── ot-06: The Engineering Workstation (IT→OT Pivot) (CTF) ───────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The keys to the kingdom", location: "An engineer's laptop, bridging two worlds", era: "Modern", emoji: "💻" },
    id: "ot-06",
    order: 6,
    title: "The Engineering Workstation",
    subtitle: "Pivoting from IT into the Heart of OT",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ot-ews", name: "Boundary Crosser", emoji: "💻" },
    challengeType: "quiz",
    info: {
      tagline: "Almost no one hacks a PLC from the internet directly. They phish an engineer, land on the corporate network, and hunt for the one machine that is allowed to program the controllers — the Engineering Workstation. It is the bridge between IT and OT, and the single most valuable host in the plant.",
      year: 2024,
      overview: [
        "The Engineering Workstation (EWS) is the computer that runs the vendor engineering software used to configure and program PLCs, RTUs, and safety controllers. It holds the project files, the controller logic, and the trusted ability to push changes to the field — which makes it the crown jewel of any OT attack.",
        "The classic ICS kill chain is a journey across the Purdue model: phish a user at Level 4/5, establish a foothold on corporate IT, escalate and move laterally, find the path into the OT environment (often a dual-homed EWS or jump host), then use the EWS's legitimate engineering tools to reach Level 1 PLCs. The attacker borrows the engineer's authority instead of breaking the PLC's (nonexistent) authentication.",
        "This is why the EWS, jump hosts, and the IT/OT boundary get so much defensive attention: they are where every serious intrusion must pass. Compromise the EWS and you don't need to fight unauthenticated protocols from the outside — you're already inside, holding the engineer's keys.",
      ],
      technical: {
        title: "Dual-Homing, Project Files, and Living Off the Land",
        body: [
          "The EWS is dangerous for concrete reasons:\n- It is often dual-homed (one NIC on IT, one on OT) or reachable through a poorly controlled jump host, creating the bridge attackers need.\n- It stores project/logic files and vendor credentials, letting an attacker understand and modify the process offline before pushing changes.\n- It runs the legitimate engineering software, so malicious logic uploads look exactly like normal engineering work ('living off the land').",
          "Defenses harden this chokepoint: a true IDMZ with no direct IT→OT routes, dedicated and locked-down jump hosts with MFA and session recording, application allow-listing on the EWS, removable-media controls, and monitoring for engineering operations (program downloads, mode changes) that occur outside maintenance windows or from unexpected users. In this challenge you'll compromise a corporate-side EWS and use it to pivot to a PLC.",
        ],
      },
      incident: {
        title: "TRITON Reached the Safety Controllers Through Engineering",
        when: "2017",
        where: "A petrochemical plant, Saudi Arabia",
        impact: "Attackers pivoted through the IT/OT boundary to an engineering workstation and reached safety PLCs — the system meant to prevent disaster",
        body: [
          "The TRITON/TRISIS intrusion is the textbook EWS pivot. The attackers (later linked to a Russian research institute) spent months moving from IT into the OT network, ultimately gaining access to an engineering workstation connected to Schneider Triconex Safety Instrumented System controllers.",
          "From there they used engineering access to reprogram the safety PLCs. A bug in their payload tripped the SIS into a safe state and shut the plant down, exposing the attack before it could cause physical harm. The terrifying detail: the target was the safety system itself — and the path in was the same as always, IT to OT to the engineering workstation.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Phish at Level 4", sub: "corporate IT foothold", type: "attacker" },
          { label: "Lateral Move", sub: "find dual-homed EWS / jump host", type: "system" },
          { label: "Engineering Workstation", sub: "vendor tools + project files", type: "victim" },
          { label: "PLC / SIS", sub: "push logic to Level 1 controllers", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Havex/Dragonfly trojanizes ICS vendor software to reach engineering environments" },
        { year: 2015, event: "Ukraine attackers pivot from IT phishing to SCADA over months" },
        { year: 2017, event: "TRITON reaches Triconex safety PLCs via an engineering workstation", highlight: true },
        { year: 2021, event: "ICS kill-chain modeling (MITRE ATT&CK for ICS) formalizes the IT→OT pivot stages" },
      ],
      keyTakeaways: [
        "The Engineering Workstation programs the PLCs and holds project files — the crown jewel of OT",
        "Real attacks pivot IT→OT: phish, foothold, lateral move, then borrow the engineer's authority via the EWS",
        "Dual-homed EWS/jump hosts and weak IT/OT boundaries are the path every serious intrusion takes",
        "TRITON used an EWS to reach safety controllers; defense means a real IDMZ, hardened jump hosts, and engineering-action monitoring",
      ],
      references: [
        { title: "TRITON / TRISIS (overview)", url: "https://en.wikipedia.org/wiki/Triton_(malware)" },
        { title: "MITRE ATT&CK for ICS", url: "https://attack.mitre.org/matrices/ics/" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-06-q1", type: "Core Idea", challenge: "The crown jewel.", text: "Why is the Engineering Workstation so valuable to attackers?", options: ["It runs the tools and holds the trusted ability to program PLCs and safety controllers", "It only browses the web", "It has no network access", "It stores nothing important"], correctIndex: 0, explanation: "The EWS is the legitimate path to push logic to the field." },
        { id: "ot-06-q2", type: "Kill Chain", challenge: "The journey.", text: "What is the typical ICS attack path?", options: ["Phish IT at Level 4/5 → foothold → lateral move → EWS → PLCs at Level 1", "Directly log into the PLC from Google", "Attack only the printer", "Mail a USB to the CEO and wait"], correctIndex: 0, explanation: "Attackers cross the Purdue levels, borrowing engineering authority." },
        { id: "ot-06-q3", type: "Dual-Homing", challenge: "The bridge.", text: "Why is a dual-homed EWS dangerous?", options: ["It connects IT and OT networks, creating a direct bridge attackers can cross", "It runs faster", "It uses less power", "It improves graphics"], correctIndex: 0, explanation: "One NIC on each network turns the EWS into an IT→OT pivot point." },
        { id: "ot-06-q4", type: "Living Off Land", challenge: "Looks normal.", text: "Why are malicious uploads from an EWS hard to spot?", options: ["They use legitimate engineering software, so they look like normal engineering work", "They flash a warning banner", "They require a court order", "They always crash the network"], correctIndex: 0, explanation: "Living off the land: the attacker's actions mimic an engineer's." },
        { id: "ot-06-q5", type: "TRITON", challenge: "The target.", text: "What did TRITON ultimately target via an EWS?", options: ["The Safety Instrumented System (Triconex safety controllers)", "A coffee machine", "The company website", "A payroll database"], correctIndex: 0, explanation: "TRITON reached the safety system itself through engineering access." },
        { id: "ot-06-q6", type: "Defense", challenge: "Guard the chokepoint.", text: "How do you defend the IT/OT boundary?", options: ["A real IDMZ, hardened jump hosts with MFA/recording, app allow-listing, and engineering-action monitoring", "Give everyone admin rights", "Remove all firewalls", "Trust any dual-homed laptop"], correctIndex: 0, explanation: "Lock the chokepoint every serious intrusion must pass through." },
      ],
    },
  },

  // ─── ot-07: Safety Instrumented Systems & TRITON (Quiz) ───────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The last line before disaster", location: "Refineries, reactors, and chemical plants", era: "Modern", emoji: "🛑" },
    id: "ot-07",
    order: 7,
    title: "Safety Systems & TRITON",
    subtitle: "When the System That Prevents Death Becomes the Target",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ot-sis", name: "Safety Guardian", emoji: "🛑" },
    challengeType: "quiz",
    info: {
      tagline: "Some processes can kill — explosions, toxic releases, meltdowns. A Safety Instrumented System is the independent, dumb-on-purpose guardian that slams everything to a safe state when limits are crossed. TRITON was the first malware built to attack that guardian, and it changed how the world thinks about ICS risk.",
      year: 2024,
      overview: [
        "A Safety Instrumented System (SIS) is a dedicated control system whose only job is to take a dangerous process to a safe state — close valves, vent pressure, scram a reactor — when conditions exceed safe limits. It is deliberately separate from the normal control system (the BPCS) so that a failure in control doesn't disable safety.",
        "SIS reliability is measured in Safety Integrity Levels (SIL 1-4, per IEC 61508/61511): the higher the SIL, the lower the tolerated probability of failure on demand. These systems are intentionally simple and rigorously validated — their value is that they will reliably do one thing when everything else has gone wrong.",
        "The cyber nightmare is a two-step attack: compromise the safety system so it won't trip, then push the process past its safe limits with the normal control system. With the guardian disabled, a process upset that should have been caught becomes a physical disaster. That is precisely what TRITON was engineered to enable.",
      ],
      technical: {
        title: "Independence, the BPCS/SIS Split, and Defeating the Guardian",
        body: [
          "Good safety design keeps the SIS independent: separate logic solver, separate sensors and final elements where practical, and minimal connectivity. An attacker who wants a physical catastrophe (not just a shutdown) must defeat that independence — reprogram the SIS logic, force its inputs, or disable its trip outputs — without it being noticed.",
          "This is hard, which is why TRITON was so alarming: it specifically reverse-engineered the proprietary Triconex protocol (TriStation) to talk to safety controllers and inject code. Defenses treat the SIS as the highest-value asset of all: keep it physically and logically separate, use key switches that put controllers in RUN (not PROGRAM) mode, restrict and monitor any engineering access, and validate safety logic integrity. Removing online programming capability is often the strongest control.",
        ],
      },
      incident: {
        title: "TRITON: The Malware That Hunted Safety",
        when: "2017 (disclosed Dec 2017)",
        where: "Petrochemical facility, Saudi Arabia",
        impact: "First known malware purpose-built to compromise a Safety Instrumented System — a direct threat to human life, narrowly averted by a bug",
        body: [
          "TRITON (also TRISIS / HatMan) targeted Schneider Electric Triconex safety controllers. Having reached an engineering workstation connected to the SIS, the attackers used a custom tool implementing the TriStation protocol to download malicious logic into the safety PLCs, aiming to give themselves the ability to disable safety functions on demand.",
          "During their work, a flaw in their code caused several Triconex controllers to fault into a safe shutdown, tripping the plant and triggering the investigation that exposed the operation. The U.S. later sanctioned a Russian government research institute (TsNIIKhM) for its role. TRITON crossed a line the ICS community had long feared: an attacker deliberately reaching for the system whose failure means people die.",
        ],
      },
      diagram: {
        nodes: [
          { label: "BPCS (Control)", sub: "runs the normal process", type: "system" },
          { label: "SIS (Safety)", sub: "independent guardian, trips to safe state", type: "victim" },
          { label: "Attacker Goal", sub: "disable SIS, then push process unsafe", type: "attacker" },
          { label: "Catastrophe (Averted)", sub: "explosion / toxic release if guardian is gone", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "IEC 61508 establishes functional safety and Safety Integrity Levels (SIL)" },
        { year: 2003, event: "IEC 61511 applies functional safety to the process industries" },
        { year: 2017, event: "TRITON injects malicious logic into Triconex safety controllers", highlight: true },
        { year: 2022, event: "CHERNOVITE/PIPEDREAM toolkit shows continued targeting of safety and control devices" },
      ],
      keyTakeaways: [
        "A Safety Instrumented System independently forces a dangerous process to a safe state when limits are crossed",
        "Safety integrity is rated in SIL levels (IEC 61508/61511); the SIS is kept separate from normal control (BPCS)",
        "The catastrophic attack is to disable the SIS, then drive the process unsafe with the control system",
        "TRITON was the first malware built to attack a SIS — defend it with separation, key switches, and removing online programming",
      ],
      references: [
        { title: "Triton (malware) — overview", url: "https://en.wikipedia.org/wiki/Triton_(malware)" },
        { title: "IEC 61511 functional safety (overview)", url: "https://en.wikipedia.org/wiki/IEC_61511" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-07-q1", type: "Core Idea", challenge: "What is a SIS?", text: "What is the job of a Safety Instrumented System?", options: ["To independently take a dangerous process to a safe state when limits are exceeded", "To bill customers", "To render the HMI graphics", "To store historian data"], correctIndex: 0, explanation: "The SIS is the dedicated guardian that trips the process to safety." },
        { id: "ot-07-q2", type: "Independence", challenge: "Why separate?", text: "Why is the SIS kept separate from the normal control system (BPCS)?", options: ["So a failure or compromise of control doesn't also disable safety", "To save money", "Because it's required for graphics", "It isn't — they share everything"], correctIndex: 0, explanation: "Independence ensures safety still works when control fails." },
        { id: "ot-07-q3", type: "Rating", challenge: "How safe.", text: "What does a Safety Integrity Level (SIL) express?", options: ["The required reliability / low probability of failure on demand of a safety function", "The network speed", "The screen resolution", "The number of operators"], correctIndex: 0, explanation: "Higher SIL means a lower tolerated failure probability." },
        { id: "ot-07-q4", type: "Attack", challenge: "The nightmare.", text: "What is the catastrophic SIS attack pattern?", options: ["Disable the safety system, then drive the process past safe limits with the control system", "Change the desktop theme", "Increase the font size", "Mute the alarms speaker only"], correctIndex: 0, explanation: "With the guardian gone, an upset becomes a disaster." },
        { id: "ot-07-q5", type: "TRITON", challenge: "The first.", text: "Why was TRITON a milestone?", options: ["It was the first malware purpose-built to compromise a Safety Instrumented System", "It was the first computer virus ever", "It only affected phones", "It was a harmless prank"], correctIndex: 0, explanation: "TRITON deliberately targeted the system whose failure threatens lives." },
        { id: "ot-07-q6", type: "Defense", challenge: "Protect the guardian.", text: "What strongly protects a SIS?", options: ["Separation, key switches in RUN mode, restricted/monitored engineering access, removing online programming", "Connecting it to the internet", "Sharing its credentials", "Disabling its trip function"], correctIndex: 0, explanation: "Make reprogramming require physical, monitored, deliberate action." },
      ],
    },
  },

  // ─── ot-08: Stuxnet & the Grid Attacks (Quiz) ────────────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "When code crossed into the physical world", location: "Natanz, Kyiv, and a Florida water plant", era: "Modern", emoji: "💥" },
    id: "ot-08",
    order: 8,
    title: "Stuxnet & the Grid Attacks",
    subtitle: "The Landmark Incidents That Defined OT Security",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ot-incidents", name: "Incident Historian", emoji: "💥" },
    challengeType: "quiz",
    info: {
      tagline: "OT security is taught through a short list of attacks that each proved a fear was real: that code can physically destroy machines, black out cities, poison water, and shut down pipelines. Know these incidents and you know the threat model.",
      year: 2024,
      overview: [
        "Stuxnet (2010) was the watershed. A nation-state worm crossed an air gap via USB, exploited multiple zero-days, and reprogrammed Siemens PLCs to physically destroy Iranian centrifuges while feeding operators fake readings. It proved cyberattacks can cause physical destruction — and inaugurated the era of ICS as a battlefield.",
        "The Ukraine grid attacks made it operational. In 2015, Sandworm used operators' own HMIs to open breakers and black out ~230,000 people; in 2016, Industroyer spoke grid protocols natively to do it automatically; Industroyer2 returned in 2022. These were the first deliberate, successful attacks to turn off the lights via cyber means.",
        "A widening list followed: TRITON (2017) attacked a safety system; the Colonial Pipeline ransomware (2021) shut a major U.S. fuel pipeline (an IT compromise that forced an OT shutdown); the Oldsmar water plant (2021) saw an attacker spike chemical dosing via remote access; and toolkits like PIPEDREAM/INCONTROLLER (2022) showed pre-built capabilities to manipulate many ICS devices.",
      ],
      technical: {
        title: "What Each Incident Proved",
        body: [
          "Each landmark removed a layer of comfort:\n- Stuxnet: air gaps can be crossed and PLC logic can physically destroy equipment while deceiving operators.\n- Ukraine 2015: remote attackers can operate a real grid through operators' own tools.\n- Industroyer (2016/2022): grid protocols themselves can be weaponized for automated, scalable sabotage.\n- TRITON (2017): attackers will deliberately target safety systems that protect human life.\n- Colonial Pipeline (2021): an IT-side ransomware hit can force a critical OT shutdown even without touching OT directly.",
          "The common threads define OT defense: IT and OT are connected whether or not you admit it; unauthenticated protocols and reachable engineering systems are the recurring enablers; and the impact is physical — outages, destruction, contamination, danger. Every later control (segmentation, monitoring, safety protection, incident response) is a direct answer to lessons written in these incidents.",
        ],
      },
      incident: {
        title: "Colonial Pipeline: When IT Ransomware Stops the Fuel",
        when: "May 2021",
        where: "Eastern United States",
        impact: "A ransomware attack on the IT/billing network led the operator to shut down 5,500 miles of fuel pipeline, causing shortages and panic-buying",
        body: [
          "The DarkSide ransomware group compromised Colonial Pipeline's IT network (reportedly via a leaked VPN password with no MFA) and encrypted business systems. Colonial proactively shut down the pipeline itself — the largest refined-fuel pipeline in the U.S. — out of caution and because billing systems were down.",
          "The result was fuel shortages, price spikes, and panic-buying across the Southeast, and a national reminder that an attack on the IT side can cripple physical operations without ever touching a PLC. It accelerated U.S. pipeline cybersecurity regulation (TSA Security Directives) and cemented IT/OT interdependence as a board-level risk.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Stuxnet 2010", sub: "physical destruction via PLC logic", type: "attacker" },
          { label: "Ukraine 2015/16", sub: "grid blackout via HMI & protocols", type: "system" },
          { label: "TRITON 2017", sub: "attack on safety systems", type: "victim" },
          { label: "Colonial 2021", sub: "IT ransomware forces OT shutdown", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Stuxnet physically destroys centrifuges by reprogramming PLCs", highlight: true },
        { year: 2015, event: "Ukraine grid attack blacks out ~230,000 people via SCADA/HMI" },
        { year: 2017, event: "TRITON targets a Safety Instrumented System" },
        { year: 2021, event: "Colonial Pipeline ransomware forces a major U.S. fuel pipeline shutdown" },
      ],
      keyTakeaways: [
        "Stuxnet proved cyberattacks can cause physical destruction while deceiving operators",
        "The Ukraine attacks were the first successful cyber-induced power blackouts (2015 hands-on, 2016 protocol-native)",
        "TRITON targeted a safety system; Colonial Pipeline showed IT ransomware can force OT shutdowns",
        "Common threads: connected IT/OT, unauthenticated protocols, reachable engineering systems, physical impact",
      ],
      references: [
        { title: "Stuxnet (overview)", url: "https://en.wikipedia.org/wiki/Stuxnet" },
        { title: "Colonial Pipeline ransomware attack", url: "https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-08-q1", type: "Stuxnet", challenge: "The watershed.", text: "What did Stuxnet prove?", options: ["Cyberattacks can physically destroy equipment while deceiving operators", "Viruses only delete files", "Air gaps are perfectly safe", "PLCs can't be reprogrammed"], correctIndex: 0, explanation: "Stuxnet wrecked centrifuges via PLC logic and faked normal readings." },
        { id: "ot-08-q2", type: "Ukraine", challenge: "Lights out.", text: "What was historic about the 2015 Ukraine attack?", options: ["It was the first confirmed cyberattack to cause a power grid blackout", "It was a natural disaster", "It only affected one home", "It improved the grid"], correctIndex: 0, explanation: "Sandworm opened breakers via operators' own HMIs, blacking out ~230,000 people." },
        { id: "ot-08-q3", type: "Industroyer", challenge: "Automated.", text: "How did Industroyer (2016) differ from the 2015 attack?", options: ["It spoke grid protocols natively to open breakers automatically, not hands-on", "It used no computers", "It targeted phones", "It was purely accidental"], correctIndex: 0, explanation: "Industroyer weaponized the protocols themselves for automated sabotage." },
        { id: "ot-08-q4", type: "Colonial", challenge: "IT stops OT.", text: "Why did Colonial Pipeline shut down in 2021?", options: ["IT-side ransomware led the operator to halt the pipeline, even without OT being directly hit", "A PLC exploded", "A storm hit the coast", "Demand simply dropped"], correctIndex: 0, explanation: "An IT/billing compromise forced a precautionary OT shutdown." },
        { id: "ot-08-q5", type: "TRITON", challenge: "The line crossed.", text: "What made TRITON especially alarming among these incidents?", options: ["It deliberately targeted a safety system meant to protect human life", "It was the cheapest attack", "It only showed a popup", "It targeted gaming consoles"], correctIndex: 0, explanation: "TRITON aimed at the SIS — the guardian against catastrophe." },
        { id: "ot-08-q6", type: "Threads", challenge: "Common lessons.", text: "What recurring enablers appear across these incidents?", options: ["Connected IT/OT, unauthenticated protocols, and reachable engineering systems", "Strong MFA everywhere", "Perfectly air-gapped plants", "No networks at all"], correctIndex: 0, explanation: "The same weaknesses recur — and drive every modern OT control." },
      ],
    },
  },

  // ─── ot-09: Detecting an ICS Intrusion (CTF) ─────────────────────────────
  {
    epochId: "ot-sec",
    wonder: { name: "The defender's quiet advantage", location: "The predictable rhythm of a plant network", era: "Modern", emoji: "📡" },
    id: "ot-09",
    order: 9,
    title: "Detecting an ICS Intrusion",
    subtitle: "Why OT Is Easier to Watch Than IT",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-ot-detect", name: "OT Threat Hunter", emoji: "📡" },
    challengeType: "quiz",
    info: {
      tagline: "OT networks have a secret strength: they are boring. The same devices talk to the same devices in the same patterns, day after day. That predictability makes anomalies stand out — if you are watching. Passive monitoring turns the rigidity of OT into the defender's advantage.",
      year: 2024,
      overview: [
        "Unlike chaotic IT networks, OT traffic is highly deterministic: a fixed set of devices exchanging a fixed set of commands on a regular cadence. A PLC polls the same registers every second; an HMI issues a known repertoire of commands; nobody installs new software at 3 a.m. This baseline is gold for detection.",
        "Because of that, OT monitoring is dominated by passive, anomaly-based approaches. Sensors tap network traffic (often via SPAN ports or taps, so they never inject packets into fragile networks) and learn the normal asset inventory and communication patterns, then alarm on deviations: a new device, an unexpected protocol, an engineering 'program download' outside a maintenance window, or a command no operator issued.",
        "Detection is also framed by MITRE ATT&CK for ICS, which catalogs adversary techniques specific to control systems (e.g., 'Modify Control Logic', 'Unauthorized Command Message', 'Loss of Safety'). Mapping monitoring to these techniques helps teams hunt for the behaviors seen in Stuxnet, Ukraine, and TRITON rather than just generic IT alerts.",
      ],
      technical: {
        title: "Passive Taps, Baselines, and the Anomalies That Matter",
        body: [
          "An OT detection program centers on a few moves:\n- Asset discovery: passively build an inventory of every device, firmware version, and protocol — you can't defend what you can't see.\n- Baselining: learn normal flows (who talks to whom, which function codes, what cadence) over time.\n- Anomaly detection: alarm on new conversations, unexpected function codes (a write where only reads are normal), out-of-hours engineering actions, and rogue devices.\n- Protocol-aware alerting: parse Modbus/DNP3/S7/IEC deeply so a forced coil or a spoofed operate is visible as a security event, not just bytes.",
          "Tooling includes ICS-aware platforms (Dragos, Nozomi, Claroty, Microsoft Defender for IoT) and open tools (Zeek with ICS protocol parsers, Snort/Suricata ICS rules, Malcolm). The cardinal rule is do no harm: monitoring must be passive on production networks, because an active scan can crash a fragile PLC. In this challenge you'll baseline a plant's normal traffic, then flag the one anomalous command that signals an intrusion.",
        ],
      },
      incident: {
        title: "Dragos, Detection, and Catching the Next One Early",
        when: "2016–today",
        where: "Critical-infrastructure operators worldwide",
        impact: "Threat groups tracked and intrusions caught earlier as OT visibility and behavior-based detection matured after Ukraine and TRITON",
        body: [
          "After the Ukraine attacks and TRITON, the OT community invested heavily in visibility. Specialist firms began tracking ICS-focused threat groups (e.g., ELECTRUM/Sandworm, XENOTIME behind TRITON, and the PIPEDREAM/CHERNOVITE toolkit found in 2022 before it was used) and publishing the behaviors to hunt for.",
          "PIPEDREAM/INCONTROLLER was notably discovered and analyzed by industry and government in 2022 before it caused damage — a modular toolkit able to scan, manipulate, and disable a range of PLCs and OT devices. Catching it early showed the payoff of OT-specific detection: when you know what normal looks like and what adversaries do, you can intercept capability before it becomes catastrophe.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Passive Tap / SPAN", sub: "copy traffic, inject nothing", type: "system" },
          { label: "Baseline", sub: "normal assets, flows, function codes", type: "victim" },
          { label: "Anomaly", sub: "unexpected write / new device / off-hours program", type: "attacker" },
          { label: "Alert & Respond", sub: "mapped to ATT&CK for ICS", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "Post-Ukraine, OT-specific monitoring and threat intelligence accelerate" },
        { year: 2017, event: "MITRE begins formalizing ATT&CK for ICS adversary techniques" },
        { year: 2020, event: "ATT&CK for ICS published, giving defenders a shared technique taxonomy", highlight: true },
        { year: 2022, event: "PIPEDREAM/INCONTROLLER toolkit discovered and analyzed before deployment" },
      ],
      keyTakeaways: [
        "OT traffic is deterministic, so anomaly-based detection works far better than in chaotic IT",
        "Monitoring is passive (taps/SPAN) to avoid harming fragile devices — do no harm is the rule",
        "Core moves: asset discovery, baselining, anomaly detection, and protocol-aware alerting",
        "MITRE ATT&CK for ICS frames the techniques to hunt; early detection caught PIPEDREAM before use",
      ],
      references: [
        { title: "MITRE ATT&CK for ICS", url: "https://attack.mitre.org/matrices/ics/" },
        { title: "Pipedream / Incontroller (CISA advisory)", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-103a" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-09-q1", type: "Core Idea", challenge: "Boring is good.", text: "Why is anomaly detection effective in OT?", options: ["OT traffic is deterministic and repetitive, so deviations stand out clearly", "OT traffic is totally random", "OT has no network traffic", "Anomalies are impossible to define"], correctIndex: 0, explanation: "Predictable patterns make abnormal behavior easy to flag." },
        { id: "ot-09-q2", type: "Do No Harm", challenge: "Watch, don't poke.", text: "Why is OT monitoring usually passive?", options: ["Active scanning can crash fragile PLCs, so sensors only observe via taps/SPAN", "Passive is cheaper to license", "Active scanning is illegal everywhere", "OT devices love being scanned"], correctIndex: 0, explanation: "Fragile devices can fail under active probing — observe, don't inject." },
        { id: "ot-09-q3", type: "Baseline", challenge: "Know normal.", text: "What is the role of a baseline?", options: ["A learned model of normal assets, flows, and function codes to compare against", "A backup of the OS", "A list of employees", "The plant's electric bill"], correctIndex: 0, explanation: "You detect anomalies by comparing live traffic to learned-normal." },
        { id: "ot-09-q4", type: "Anomaly", challenge: "Red flags.", text: "Which is a meaningful OT anomaly?", options: ["A write command where only reads are normal, or an engineering download out of hours", "An operator drinking coffee", "A normal hourly poll", "The expected daily report"], correctIndex: 0, explanation: "Unexpected writes and off-hours engineering are classic intrusion signs." },
        { id: "ot-09-q5", type: "Framework", challenge: "Shared language.", text: "What does MITRE ATT&CK for ICS provide?", options: ["A taxonomy of adversary techniques specific to control systems to hunt for", "A brand of PLC", "An encryption standard", "A type of cable"], correctIndex: 0, explanation: "It maps ICS-specific techniques so teams can hunt for real behaviors." },
        { id: "ot-09-q6", type: "Payoff", challenge: "Caught early.", text: "What did the 2022 discovery of PIPEDREAM/INCONTROLLER show?", options: ["OT-specific detection can intercept attacker capability before it causes damage", "Detection never works", "OT can't be monitored", "Toolkits are always harmless"], correctIndex: 0, explanation: "It was found and analyzed before deployment — visibility pays off." },
      ],
    },
  },

  // ─── ot-10: Securing OT — Segmentation, 62443 & Recovery (Quiz) ───────────
  {
    epochId: "ot-sec",
    wonder: { name: "Defense for the physical world", location: "Every plant that wants to keep running", era: "Modern", emoji: "🛡️" },
    id: "ot-10",
    order: 10,
    title: "Securing OT",
    subtitle: "Segmentation, IEC 62443, and Resilient Recovery",
    category: "cybersecurity",
    xp: 190,
    badge: { id: "badge-ot-defense", name: "Plant Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Everything in this epoch points to the same defense: you cannot make fragile, unauthenticated devices strong, so you build a strong environment around them. Segment ruthlessly, control the boundaries, monitor the predictable, protect safety, and plan to recover — because in OT, resilience is the real goal.",
      year: 2024,
      overview: [
        "OT defense accepts the constraints: legacy devices can't be patched or authenticated, availability and safety come first, and you can't casually reboot production. So the strategy is compensating controls and architecture rather than fixing the endpoints — make the environment defensible even though the devices are weak.",
        "The backbone is segmentation along the Purdue model. An Industrial DMZ (IDMZ) sits between IT (Levels 4/5) and OT (Levels 0-3) with no direct routes across — data is brokered, not bridged. Within OT, zones and conduits (the IEC 62443 model) isolate areas so a compromise in one cell can't sweep the whole plant. Remote access goes through hardened, MFA-protected, monitored jump hosts only.",
        "IEC 62443 is the central standard, defining security for industrial automation across asset owners, integrators, and product suppliers — including the zones-and-conduits architecture, security levels, and lifecycle requirements. Paired with frameworks like the NIST CSF and CISA's cross-sector goals, it gives operators a concrete program rather than ad-hoc fixes.",
      ],
      technical: {
        title: "Zones, Conduits, Least Privilege, and Recovery",
        body: [
          "A practical OT security program layers controls:\n- Architecture: IDMZ between IT and OT; zones and conduits inside OT; data diodes for one-way flows out of safety-critical zones.\n- Access: least privilege, MFA on all remote access, dedicated jump hosts, removable-media control, and key switches keeping controllers in RUN mode.\n- Visibility: passive monitoring, asset inventory, and anomaly detection mapped to ATT&CK for ICS (from the previous stage).\n- Safety: keep the SIS independent and its programming offline/physical.",
          "Because prevention will sometimes fail, resilience is paramount: validated offline backups of PLC logic and configs, tested incident-response plans written for OT (where 'just reimage it' may be impossible and shutting down has physical consequences), and the ability to operate manually if the automation is lost — exactly what Ukrainian operators fell back on. The goal is not a perfect wall but a plant that detects fast, contains damage, keeps people safe, and recovers operations.",
        ],
      },
      incident: {
        title: "Regulation Follows the Lessons",
        when: "2021–today",
        where: "United States and globally",
        impact: "Major incidents drove binding OT security requirements across pipelines, water, and critical infrastructure",
        body: [
          "The incidents in this epoch reshaped policy. After Colonial Pipeline, the U.S. TSA issued security directives for pipelines; water-sector and electric (NERC CIP) requirements tightened; and CISA published Cross-Sector Cybersecurity Performance Goals tailored to OT realities. The EU's NIS2 directive and IEC 62443 adoption pushed similar expectations globally.",
          "The throughline is that OT security is now treated as critical-infrastructure resilience and a board-level, regulated concern — not an engineering afterthought. The technical lessons (segment, control boundaries, monitor passively, protect safety, plan recovery) and the governance lessons (standards, regulation, accountability) finally moved together, because the consequences are measured in blackouts, contamination, and lives.",
        ],
      },
      diagram: {
        nodes: [
          { label: "IT (Level 4/5)", sub: "corporate + internet", type: "attacker" },
          { label: "IDMZ", sub: "broker data, no direct routes", type: "system" },
          { label: "Zones & Conduits", sub: "IEC 62443 segmentation in OT", type: "victim" },
          { label: "Resilience", sub: "backups, OT IR, manual fallback", type: "result" },
        ],
      },
      timeline: [
        { year: 2009, event: "ISA/IEC 62443 series begins standardizing industrial automation security" },
        { year: 2016, event: "Zones-and-conduits and security levels become core OT design practice" },
        { year: 2021, event: "Post-Colonial, TSA pipeline directives and CISA goals make OT security binding", highlight: true },
        { year: 2024, event: "NIS2, NERC CIP, and 62443 drive segmentation, monitoring, and resilience globally" },
      ],
      keyTakeaways: [
        "You can't fix weak devices, so secure the environment: compensating controls and architecture",
        "Segment along Purdue with an IDMZ between IT/OT and IEC 62443 zones-and-conduits inside OT",
        "IEC 62443 is the central standard; least privilege, MFA jump hosts, and passive monitoring round it out",
        "Resilience is the goal: offline logic backups, OT-specific IR, and the ability to run manually and recover",
      ],
      references: [
        { title: "IEC 62443 (overview)", url: "https://en.wikipedia.org/wiki/IEC_62443" },
        { title: "CISA Cross-Sector Cybersecurity Performance Goals", url: "https://www.cisa.gov/cross-sector-cybersecurity-performance-goals" },
      ],
    },
    quiz: {
      questions: [
        { id: "ot-10-q1", type: "Core Idea", challenge: "The strategy.", text: "What is the core OT defense strategy?", options: ["Secure the environment with compensating controls and architecture, since weak devices can't be fixed", "Patch every PLC nightly", "Put everything on the public internet", "Rely on the air gap alone"], correctIndex: 0, explanation: "You build a defensible environment around inherently weak endpoints." },
        { id: "ot-10-q2", type: "Segmentation", challenge: "The boundary.", text: "What sits between the IT (4/5) and OT (0-3) levels?", options: ["An Industrial DMZ (IDMZ) that brokers data with no direct routes", "A single shared switch", "Nothing — they're flat", "A public web server"], correctIndex: 0, explanation: "The IDMZ is the controlled chokepoint between IT and OT." },
        { id: "ot-10-q3", type: "Standard", challenge: "The playbook.", text: "What is IEC 62443?", options: ["The central standard for industrial automation security, including zones and conduits", "A PLC brand", "An encryption cipher", "A network cable type"], correctIndex: 0, explanation: "IEC 62443 defines OT security across owners, integrators, and suppliers." },
        { id: "ot-10-q4", type: "Model", challenge: "Inside OT.", text: "What does the 'zones and conduits' model do?", options: ["Isolates areas so a compromise in one cell can't sweep the whole plant", "Speeds up the PLCs", "Encrypts the HMI graphics", "Replaces the SIS"], correctIndex: 0, explanation: "Zones segment OT internally; conduits are the controlled links between them." },
        { id: "ot-10-q5", type: "Access", challenge: "Remote in.", text: "How should remote access to OT be handled?", options: ["Through hardened, MFA-protected, monitored jump hosts only", "Open RDP to the internet", "Shared passwords for vendors", "Direct VPN into the PLC network"], correctIndex: 0, explanation: "Funnel and control remote access; never bridge straight into OT." },
        { id: "ot-10-q6", type: "Resilience", challenge: "When prevention fails.", text: "Why is resilience central to OT security?", options: ["Prevention will sometimes fail, so you need backups, OT-specific IR, and manual fallback to keep running safely", "Because backups are unnecessary", "Because OT never gets attacked", "Because you can always just reimage a PLC instantly"], correctIndex: 0, explanation: "The goal is to detect, contain, keep safe, and recover — resilience over a perfect wall." },
      ],
    },
  },
];

// ── CTF mode — hands-on ICS terminal per stage (quiz = half-clear) ───────────
// All CTFs now use the shared 3-step mkDeepCtf factory (deepened from 2-step).

const OT_CTF: Record<string, CtfConfig> = {
  "ot-02": mkDeepCtf(
    "You've reached an unauthenticated PLC on a lab network. Connect over S7comm, dump its running ladder logic, then upload your own to take control of the process.",
    "OP: OWN THE PLC\nTarget: an exposed PLC with no auth on its programming port.\nGoal: connect, dump the logic, upload your own.\nSequence: connect-plc -> dump-logic -> upload-logic",
    "FLAG{PLC_",
    "Mission Brief",
    ["connect-plc", "L4DD3R_", "PLC Connected", [
      "$ connect-plc --s7comm 10.9.1.5",
      "Connected to the programming interface — no authentication; controller is in PROGRAM mode.",
      "Programming a live controller over the network requires nothing but reachability.",
      "Next: dump-logic",
    ]],
    ["dump-logic", "L0G1C_", "Logic Dumped", [
      "$ dump-logic",
      "Read out the running ladder logic + the process tag map (pumps, valves, interlocks).",
      "Now you understand the process well enough to subvert it.",
      "Next: upload-logic",
    ]],
    ["upload-logic", "0WN3D}", "Logic Uploaded", [
      "$ upload-logic malicious.awl",
      "Compiled and downloaded modified logic; the PLC accepted it -> you control the outputs.",
      "Fix: auth on the programming port, key-switch in RUN, logic-integrity monitoring.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Connect to the PLC. Run: connect-plc", "Dump the logic. Run: dump-logic", "Upload your logic. Run: upload-logic", "Run 'assemble', then submit the flag"],
    { "plc.txt": "iface: S7comm (no auth)\nmode: PROGRAM (reprogrammable)\ntags: pumps/valves/interlocks" },
  ),
  "ot-03": mkDeepCtf(
    "A Modbus/TCP device sits on port 502 with no authentication. Connect, map its registers to understand the process, then force a coil to actuate physical equipment.",
    "OP: FORCE THE COIL\nTarget: a Modbus/TCP device on port 502, no auth.\nGoal: connect, map registers, write a coil.\nSequence: connect-modbus -> map-registers -> write-coil",
    "FLAG{M0DBUS_",
    "Mission Brief",
    ["connect-modbus", "C01L_", "Modbus Connected", [
      "$ connect-modbus 10.9.2.20:502",
      "TCP/502 open, unit id 1 responding — Modbus has no authentication by design.",
      "Anyone who can route to it can read and write.",
      "Next: map-registers",
    ]],
    ["map-registers", "F0RC3_", "Registers Mapped", [
      "$ map-registers --fc 03,04",
      "Polled holding/input registers: 40001 = pump speed, coil 00001 = inlet valve.",
      "Now you know which write moves which actuator.",
      "Next: write-coil",
    ]],
    ["write-coil", "WR1T3}", "Coil Forced", [
      "$ write-coil --fc 05 --coil 00001 --value ON",
      "Write Single Coil accepted — inlet valve energized. No auth, no questions.",
      "Fix: segment Modbus, gateway with auth, read-only where possible.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Connect to Modbus. Run: connect-modbus", "Map the registers. Run: map-registers", "Force a coil. Run: write-coil", "Run 'assemble', then submit the flag"],
    { "modbus.txt": "port: 502 (no auth)\n40001=pump speed  00001=inlet valve\nFC05 = write single coil" },
  ),
  "ot-04": mkDeepCtf(
    "An HMI is exposed with default credentials. Access the operator console, read the live tag database, then push a supervisory command to the field — the Ukraine-2015 move.",
    "OP: HIJACK THE HMI\nTarget: an internet-exposed SCADA HMI with default creds.\nGoal: access the HMI, read the tags, send a command.\nSequence: access-hmi -> read-tags -> send-command",
    "FLAG{HMI_",
    "Mission Brief",
    ["access-hmi", "SC4D4_", "HMI Accessed", [
      "$ access-hmi --rdp --creds default",
      "Logged in over RDP with default operator credentials — the mimic diagram loads.",
      "The HMI is the operator's window AND control surface.",
      "Next: read-tags",
    ]],
    ["read-tags", "PR0C3SS_", "Tags Read", [
      "$ read-tags",
      "Full tag database visible: substation feeders, breaker states, setpoints.",
      "Identified feeder 7's breaker-control tag.",
      "Next: send-command",
    ]],
    ["send-command", "H1J4CK}", "Command Sent", [
      "$ send-command --tag feeder7.breaker --op OPEN",
      "Issued OPEN BREAKER to feeder 7 through the HMI — the field obeyed, just like Ukraine 2015.",
      "Fix: no internet-exposed HMIs, MFA, jump hosts, command confirmation.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Access the HMI. Run: access-hmi", "Read the tags. Run: read-tags", "Send a command. Run: send-command", "Run 'assemble', then submit the flag"],
    { "hmi.txt": "access: RDP, default creds\ntags: feeders, breakers, setpoints\nincident model: Ukraine 2015" },
  ),
  "ot-05": mkDeepCtf(
    "You're on the link between a control center and a substation running classic DNP3 (no Secure Authentication). Capture the traffic, analyze the control sequence, then inject a forged operate to trip a breaker.",
    "OP: SPOOF THE GRID\nTarget: a DNP3 link with no Secure Authentication.\nGoal: capture, analyze the CROB, inject a forged operate.\nSequence: capture-dnp3 -> analyze-crob -> inject-operate",
    "FLAG{",
    "Mission Brief",
    ["capture-dnp3", "DNP3_", "DNP3 Captured", [
      "$ capture-dnp3 --serial-over-ip",
      "Sniffed the DNP3 link; recorded the master's source address and outstation addresses.",
      "No Secure Authentication -> messages are forgeable.",
      "Next: analyze-crob",
    ]],
    ["analyze-crob", "C0MM4ND_", "Control Sequence Analyzed", [
      "$ analyze-crob",
      "DNP3 control = SELECT then OPERATE (CROB) on a point. Captured a SELECT for breaker CB-12.",
      "Replaying with the master's address will be trusted.",
      "Next: inject-operate",
    ]],
    ["inject-operate", "SP00F3D}", "Operate Injected", [
      "$ inject-operate --point CB-12 --crob TRIP",
      "Forged SELECT + OPERATE as the master -> outstation tripped breaker CB-12. Lights out.",
      "Fix: DNP3 Secure Authentication / TLS, segmentation, allow-listing.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Capture DNP3 traffic. Run: capture-dnp3", "Analyze the control sequence. Run: analyze-crob", "Inject a forged operate. Run: inject-operate", "Run 'assemble', then submit the flag"],
    { "dnp3.txt": "auth: none (no Secure Authentication)\ncontrol: SELECT -> OPERATE (CROB)\ntarget: breaker CB-12" },
  ),
  "ot-06": mkDeepCtf(
    "You have a foothold on the corporate IT network from a phish. Find and compromise the dual-homed Engineering Workstation, enumerate its OT-side NIC, then pivot to a Level 1 PLC.",
    "OP: IT TO OT\nTarget: a dual-homed Engineering Workstation bridging IT and OT.\nGoal: compromise the EWS, enum the OT NIC, pivot to a PLC.\nSequence: compromise-ews -> enum-ot-nic -> pivot-to-plc",
    "FLAG{3WS_",
    "Mission Brief",
    ["compromise-ews", "1T_", "EWS Compromised", [
      "$ compromise-ews",
      "Scanned the IT subnet for vendor engineering software; found ENG-WS01 (dual-homed: IT + OT).",
      "Reused a cached domain credential to log in — it has TIA Portal + live project files.",
      "Next: enum-ot-nic",
    ]],
    ["enum-ot-nic", "T0_0T_", "OT NIC Enumerated", [
      "$ enum-ot-nic",
      "The second NIC sits on the OT VLAN and can reach Level 1 controllers directly.",
      "The EWS is the bridge attackers dream of.",
      "Next: pivot-to-plc",
    ]],
    ["pivot-to-plc", "P1V0T}", "Pivoted to PLC", [
      "$ pivot-to-plc --target PLC-101",
      "Used the EWS's OT NIC + engineering tools to reach PLC-101 over the engineer's trusted path.",
      "You're in OT. Fix: no dual-homing, OT DMZ + jump host, MFA, app-allow-listing on the EWS.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Compromise the EWS. Run: compromise-ews", "Enumerate the OT NIC. Run: enum-ot-nic", "Pivot to the PLC. Run: pivot-to-plc", "Run 'assemble', then submit the flag"],
    { "ews.txt": "host: ENG-WS01 (dual-homed IT+OT)\ntools: TIA Portal + project files\npath: OT NIC -> PLC-101" },
  ),
  "ot-09": mkDeepCtf(
    "You're the OT defender. Passively baseline a plant's normal network traffic, diff the live feed against it, and flag the single anomalous command that reveals an intruder.",
    "OP: CATCH THE INTRUDER\nTarget: a plant network tap (passive — inject nothing).\nGoal: baseline, diff the live feed, flag the anomaly.\nSequence: baseline-traffic -> diff-live -> flag-anomaly",
    "FLAG{",
    "Mission Brief",
    ["baseline-traffic", "1CS_", "Traffic Baselined", [
      "$ baseline-traffic --span-port --learn",
      "Built an asset inventory + learned normal flows: HMI reads PLC-101 every 1s.",
      "Engineering downloads happen only during Tuesday maintenance windows.",
      "Next: diff-live",
    ]],
    ["diff-live", "1NTRUS10N_", "Live Feed Diffed", [
      "$ diff-live",
      "Compared the live SPAN feed to the baseline; nearly everything matches known flows.",
      "One conversation doesn't fit the model.",
      "Next: flag-anomaly",
    ]],
    ["flag-anomaly", "D3T3CT3D}", "Anomaly Flagged", [
      "$ flag-anomaly",
      "ANOMALY: a Modbus Write Single Coil from an unknown host at 03:14 — no operator, off-hours.",
      "Passive, behavior-based OT IDS catches what signature tools miss. That's the intrusion.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Baseline the traffic. Run: baseline-traffic", "Diff the live feed. Run: diff-live", "Flag the anomaly. Run: flag-anomaly", "Run 'assemble', then submit the flag"],
    { "ids.txt": "baseline: HMI reads PLC-101 @1s; eng downloads Tue only\nanomaly: Modbus write from unknown host @03:14\nmethod: passive behavior-based" },
  ),
};

for (const s of otSecStages) {
  const ctf = OT_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

// Deep 3-step CTFs for the remaining quiz stages (shared mkDeepCtf factory).
const OT_CTF2: Record<string, CtfConfig> = {
  "ot-01": mkDeepCtf(
    "A plant's IT and OT networks should be separated by the Purdue model. Map the zones, find a flat-network bridge an attacker could ride from email to a PLC, and segment it.",
    "OP: MIND THE DIVIDE\nTarget: a converged IT/OT network.\nGoal: map Purdue levels, find the bridge, segment.\nSequence: map-purdue -> find-bridge -> segment",
    "FLAG{PURDU3_",
    "Mission Brief",
    ["map-purdue", "M0D3L_", "Purdue Mapped", [
      "$ map-purdue",
      "L4/5 enterprise -> L3 ops -> L2 supervisory -> L1 control -> L0 process.",
      "OT runs fragile, decades-old gear that assumes a trusted network.",
      "Next: find-bridge",
    ]],
    ["find-bridge", "BR1DG3_", "Bridge Found", [
      "$ find-bridge",
      "A historian server is dual-homed straight from L3 to the L4 business VLAN — no DMZ.",
      "One phished laptop could ride that path down to a PLC.",
      "Next: segment",
    ]],
    ["segment", "S3GM3NT3D}", "Segmented", [
      "$ segment --insert-dmz --unidirectional",
      "Inserted an OT DMZ + data diode for historian replication; killed the flat bridge.",
      "Segmentation is the #1 OT control — keep IT compromises out of the plant.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the Purdue model. Run: map-purdue", "Find the bridge. Run: find-bridge", "Segment. Run: segment", "Run 'assemble', then submit the flag"],
    { "network.txt": "historian: dual-homed L3<->L4 (no DMZ)\nPLCs: L1, reachable via flat path\nfix: OT DMZ + data diode" },
  ),
  "ot-07": mkDeepCtf(
    "Safety Instrumented Systems are the last line that prevents an explosion. The TRITON/TRISIS malware targeted exactly these. Probe a Triconex SIS, analyze the payload, and force it fail-safe.",
    "OP: LAST LINE OF SAFETY\nTarget: a Triconex Safety Instrumented System.\nGoal: probe the SIS, analyze TRITON, force fail-safe.\nSequence: probe-sis -> triton-payload -> fail-safe",
    "FLAG{TR1T0N_",
    "Mission Brief",
    ["probe-sis", "S1S_", "SIS Probed", [
      "$ probe-sis",
      "SIS is separate from the control DCS; it trips the process to a safe state on danger.",
      "This controller was left in PROGRAM mode — reprogrammable over the network.",
      "Next: triton-payload",
    ]],
    ["triton-payload", "F41L_", "TRITON Analyzed", [
      "$ triton-payload --analyze",
      "TRITON/TRISIS (2017) reprogrammed Triconex SIS to disable safety — enabling physical disaster.",
      "A glitch in the implant tripped the plant, exposing the attack.",
      "Next: fail-safe",
    ]],
    ["fail-safe", "S4F3}", "Failed Safe", [
      "$ fail-safe --keyswitch RUN --lock",
      "Set the physical key switch to RUN (no remote reprogramming) + monitored the SIS network.",
      "Safety systems must be isolated, key-locked, and independently monitored.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the SIS. Run: probe-sis", "Analyze TRITON. Run: triton-payload", "Force fail-safe. Run: fail-safe", "Run 'assemble', then submit the flag"],
    { "sis.txt": "controller: Triconex\nkeyswitch: PROGRAM (remotely reprogrammable!)\nthreat: TRITON/TRISIS 2017" },
  ),
  "ot-08": mkDeepCtf(
    "Stuxnet sabotaged Iranian centrifuges by lying to operators while spinning the rotors to destruction. Analyze the worm, see how it spoofed the PLC, and restore the true setpoint.",
    "OP: ANALYZE STUXNET\nTarget: a PLC controlling centrifuge speed.\nGoal: analyze the worm, see the spoof, restore the setpoint.\nSequence: analyze-stuxnet -> spoof-plc -> restore-setpoint",
    "FLAG{STUXN3T_",
    "Mission Brief",
    ["analyze-stuxnet", "PLC_", "Stuxnet Analyzed", [
      "$ analyze-stuxnet",
      "Crossed the air gap via USB; spread silently; targeted only specific Siemens S7 PLCs.",
      "It carried the first PLC rootkit ever seen.",
      "Next: spoof-plc",
    ]],
    ["spoof-plc", "S3TP01NT_", "Spoof Revealed", [
      "$ spoof-plc --inspect",
      "It recorded normal sensor data, then replayed it to the HMI while driving rotor speed to destructive RPM.",
      "Operators saw 'normal' while the centrifuges tore themselves apart.",
      "Next: restore-setpoint",
    ]],
    ["restore-setpoint", "R3ST0R3D}", "Setpoint Restored", [
      "$ restore-setpoint --verify-firmware",
      "Removed the PLC rootkit, restored signed firmware + the true speed setpoint, re-imaged EWS.",
      "Integrity of PLC logic + firmware is everything in OT.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Analyze Stuxnet. Run: analyze-stuxnet", "Reveal the spoof. Run: spoof-plc", "Restore the setpoint. Run: restore-setpoint", "Run 'assemble', then submit the flag"],
    { "stuxnet.txt": "spread: USB (air-gap), target Siemens S7\ntrick: replay normal data to HMI, overspeed rotors\nfirst PLC rootkit" },
  ),
  "ot-10": mkDeepCtf(
    "Securing OT means zones and conduits, not just firewalls. Audit a plant against IEC 62443, apply zone/conduit segmentation, and verify defense-in-depth holds.",
    "OP: SECURE THE PLANT\nTarget: a plant with weak OT security.\nGoal: audit, apply IEC 62443 zones/conduits, verify.\nSequence: audit-zones -> apply-62443 -> verify-conduit",
    "FLAG{1EC_62443_",
    "Mission Brief",
    ["audit-zones", "Z0N3S_", "Zones Audited", [
      "$ audit-zones",
      "Found one flat OT network: control, safety, and historian all share a broadcast domain.",
      "IEC 62443 groups assets into security zones by risk.",
      "Next: apply-62443",
    ]],
    ["apply-62443", "C0NDU1TS_", "62443 Applied", [
      "$ apply-62443",
      "Split into zones (control / safety / DMZ); allowed traffic only through controlled conduits.",
      "Each conduit gets explicit, monitored, least-privilege rules.",
      "Next: verify-conduit",
    ]],
    ["verify-conduit", "S3CUR3D}", "Conduits Verified", [
      "$ verify-conduit --test-paths",
      "Verified: IT cannot reach L1; safety is isolated; only the historian conduit passes (read-only).",
      "Defense-in-depth: segmentation + monitoring + resilience, not a single firewall.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Audit the zones. Run: audit-zones", "Apply IEC 62443. Run: apply-62443", "Verify the conduits. Run: verify-conduit", "Run 'assemble', then submit the flag"],
    { "62443.txt": "before: flat OT network\nzones: control / safety / DMZ\nconduits: explicit, monitored, least-privilege" },
  ),
};

for (const s of otSecStages) {
  const ctf = OT_CTF2[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
