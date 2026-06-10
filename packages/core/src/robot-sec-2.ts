import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const robotSec2Epoch: EpochConfig = {
  id: "robot-sec-2",
  name: "Robotics II",
  subtitle: "Fleets, Farms, Swarms & Learned Behavior",
  description:
    "The first robotics epoch covered the anatomy of a robot, ROS/DDS, drones, teleoperation, and perception. This one scales out and goes specialized: the ROS 2 / SROS2 security model, exploiting a DDS domain, commandeering a warehouse AMR fleet (VDA5050), hijacking an autonomous tractor, swarm-robotics trust, cloud-robotics backends, legged and humanoid platforms, navigation/GPS spoofing, poisoning a robot's learned policy, and securing robot fleets at scale. Hands-on CTFs throughout.",
  emoji: "🦾",
  color: "orange",
  unlocked: true,
};

export const robotSec2Stages: StageConfig[] = [
  // ─── r2-01: ROS 2 & SROS2 (Quiz) ─────────────────────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The nervous system of modern robots", location: "Inside ROS 2 robots everywhere", era: "Modern", emoji: "🦾" },
    id: "r2-01",
    order: 1,
    title: "ROS 2 & SROS2",
    subtitle: "Security Done Right — When It's Turned On",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-r2-ros2", name: "Middleware Marshal", emoji: "🦾" },
    challengeType: "quiz",
    info: {
      tagline: "ROS 1 had no security at all — anyone on the network could read every topic and command every actuator. ROS 2 was rebuilt on DDS with a real security layer, SROS2. The catch: it's optional, and a robot fleet is only as safe as whether someone remembered to switch it on.",
      year: 2024,
      overview: [
        "ROS (the Robot Operating System) is the dominant robotics framework. ROS 1 used a central master and unauthenticated TCP/UDP, so on a shared network any node could publish, subscribe, or call services — perfect for research, catastrophic for security. The first robotics epoch showed how trivially that is abused.",
        "ROS 2 re-architected on top of DDS (Data Distribution Service), an industrial publish/subscribe middleware with decentralized discovery and Quality-of-Service. Crucially, DDS has a security specification, and ROS 2 exposes it as SROS2: authentication (per-node certificates), encryption (of discovery and data), and access control (which node may publish/subscribe to which topic).",
        "The recurring real-world problem is that security is opt-in. Many ROS 2 systems run with SROS2 disabled or misconfigured — default permissive policies, shared keys, or discovery left open — so they're back to ROS 1's trust-everything posture on a more capable transport. This epoch's deep dives assume that gap and exploit it; this stage establishes the model so you know what 'done right' looks like.",
      ],
      technical: {
        title: "DDS, the Security Plugins, and Permissive Defaults",
        body: [
          "SROS2 builds on the DDS Security plugins:\n- Authentication: each participant has an X.509 certificate from a project CA, so nodes prove identity before joining.\n- Cryptographic: discovery and user data can be signed and encrypted, preventing eavesdropping and injection.\n- Access control: signed permissions files declare exactly which topics/services each node may use — least privilege for the data bus.",
          "The weaknesses are operational, not cryptographic:\n- Disabled security: SROS2 off means open DDS — discoverable and commandable by anyone on the network.\n- Permissive policies: wildcard 'allow everything' permissions defeat the access control even when it's enabled.\n- Key/CA management: shared or leaked keys, or an unprotected CA, collapse the trust model.\nKnowing this, defenders enable SROS2 with tight per-node permissions, manage keys properly, and segment the robot network. The next stages exploit systems where this wasn't done.",
        ],
      },
      incident: {
        title: "Open Robots on the Network",
        when: "2017–today",
        where: "Research labs, factories, and the public internet",
        impact: "Scans and studies repeatedly found ROS systems reachable and commandable, and ROS 2 deployments with security disabled",
        body: [
          "Researchers (including a well-known 2018 study that scanned the internet for exposed ROS masters) found real robots — some controlling physical hardware — reachable and commandable over the network because ROS 1 had no authentication. The finding was a wake-up call that robotics middleware needed real security.",
          "ROS 2 and SROS2 answered the design problem, but adoption lagged: many deployments still run with security off for convenience, or with permissive policies that negate it. The lesson framing this epoch is that the technology to secure robot communication now exists — the gap is operational discipline, and attackers thrive in that gap.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ROS 2 Nodes", sub: "publish/subscribe over DDS", type: "system" },
          { label: "SROS2 (if enabled)", sub: "certs, encryption, permissions", type: "victim" },
          { label: "Misconfiguration", sub: "disabled or wildcard-permissive", type: "attacker" },
          { label: "Open Robot Bus", sub: "anyone can read/command", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "ROS 1 launches — powerful, but no built-in security" },
        { year: 2017, event: "ROS 2 releases on DDS with an optional security layer (SROS2)" },
        { year: 2018, event: "Internet scan finds exposed, commandable ROS systems", highlight: true },
        { year: 2024, event: "SROS2 exists and works, but disabled/permissive deployments remain common" },
      ],
      keyTakeaways: [
        "ROS 1 had no security; ROS 2 is built on DDS with an optional security layer, SROS2",
        "SROS2 provides authentication (certs), encryption, and per-topic access control",
        "The real weakness is operational: security disabled, wildcard-permissive policies, or poor key management",
        "Defense is enabling SROS2 with tight per-node permissions, good key/CA hygiene, and network segmentation",
      ],
      references: [
        { title: "SROS2 (ROS 2 security)", url: "https://design.ros2.org/articles/ros2_dds_security.html" },
        { title: "DDS Security specification (OMG)", url: "https://www.omg.org/spec/DDS-SECURITY/" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-01-q1", type: "Core Idea", challenge: "The shift.", text: "What changed from ROS 1 to ROS 2 security-wise?", options: ["ROS 2 is built on DDS with an optional security layer (SROS2); ROS 1 had none", "ROS 2 removed all networking", "ROS 1 was more secure", "Nothing changed"], correctIndex: 0, explanation: "ROS 2 added a real (but optional) security layer via DDS." },
        { id: "r2-01-q2", type: "SROS2", challenge: "Three pillars.", text: "What does SROS2 provide?", options: ["Authentication (certs), encryption, and per-topic access control", "Only faster messages", "Only logging", "Battery management"], correctIndex: 0, explanation: "SROS2 exposes the DDS Security plugins: auth, crypto, access control." },
        { id: "r2-01-q3", type: "Weakness", challenge: "The real gap.", text: "What's the most common SROS2 weakness in practice?", options: ["It's opt-in and often disabled or set to wildcard-permissive policies", "The cryptography is broken", "It can't encrypt", "It requires no keys"], correctIndex: 0, explanation: "The gap is operational — security off or permissions wide open." },
        { id: "r2-01-q4", type: "Access Control", challenge: "Least privilege.", text: "What do SROS2 permissions files do?", options: ["Declare exactly which topics/services each node may publish/subscribe to", "Set the robot's color", "Store the maps", "Charge the battery"], correctIndex: 0, explanation: "Permissions enforce least privilege on the data bus." },
        { id: "r2-01-q5", type: "Keys", challenge: "Trust roots.", text: "What collapses the SROS2 trust model?", options: ["Shared/leaked keys or an unprotected CA", "Too many certificates", "Encryption that's too strong", "Having permissions at all"], correctIndex: 0, explanation: "Key and CA compromise undermines authentication entirely." },
        { id: "r2-01-q6", type: "History", challenge: "The wake-up.", text: "What did the 2018 ROS internet scan reveal?", options: ["Real robots were reachable and commandable due to ROS 1's lack of authentication", "ROS was unhackable", "Robots have no networks", "Only simulations were found"], correctIndex: 0, explanation: "Exposed, commandable ROS systems showed the need for real security." },
      ],
    },
  },

  // ─── r2-02: Exploiting a DDS Domain (CTF) ────────────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The bus that finds everyone", location: "Across a multi-robot system", era: "Modern", emoji: "🔎" },
    id: "r2-02",
    order: 2,
    title: "Exploiting a DDS Domain",
    subtitle: "Joining the Robot Bus Nobody Locked",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-r2-dds", name: "Domain Intruder", emoji: "🔎" },
    challengeType: "quiz",
    info: {
      tagline: "DDS finds peers automatically: announce yourself on the domain and everyone shares what topics they offer. It's elegant for building robots and a gift for attacking them — if security is off, you just join the domain and start reading sensors and commanding actuators.",
      year: 2024,
      overview: [
        "DDS organizes communication into domains (numbered partitions) where participants discover each other automatically and publish/subscribe to topics. In ROS 2, your robot's nodes share a domain; discovery is multicast/peer-based, so a new participant on the network is told about all available topics.",
        "Without SROS2, that discovery is a map for an attacker: join the domain, enumerate every topic (camera feeds, joint states, velocity commands, e-stop), then subscribe to read data or publish to command. There's no authentication to stop you and no access control to limit you — you are a peer like any node.",
        "Even DDS itself (beyond ROS 2) has had vulnerabilities — researchers found memory-safety and amplification bugs in popular DDS implementations, and exposed DDS services on the internet. The combination of automatic discovery and frequent misconfiguration makes the data bus one of the highest-value targets in a robot. In this challenge you'll scan for a DDS domain and join it to take control.",
      ],
      technical: {
        title: "Discovery, Topics, and Publishing Commands",
        body: [
          "The attack mirrors the framework's own mechanics:\n- Scan/discover: send or listen for DDS participant discovery to find domains and the topics they expose (tools like the ROS 2 CLI, RTI/ Fast DDS utilities, or the 'RoboticsCTF'/'aztarna' reconnaissance tools).\n- Subscribe: read sensitive topics — camera, LiDAR, odometry, joint states — for intelligence on the robot's state.\n- Publish: send to command topics (e.g., cmd_vel velocity, or actuator setpoints) to move the robot, or spoof sensor topics to deceive its controllers.",
          "Mitigations are the SROS2 controls from the previous stage plus network hygiene:\n- Enable DDS Security (authentication + access control) so unknown participants can't join or are tightly scoped.\n- Restrict discovery (discovery servers, allowlists) and segment the robot network so the domain isn't reachable from untrusted hosts.\n- Monitor for unexpected participants joining the domain.\nIn this challenge you'll discover the domain, then join it and publish a command.",
        ],
      },
      incident: {
        title: "Reconnaissance Tools for Robots",
        when: "2018–today",
        where: "Robot security research (Alias Robotics and others)",
        impact: "Purpose-built tools made discovering and commandeering exposed ROS/DDS robots straightforward",
        body: [
          "As robotics security matured, researchers built reconnaissance tooling specifically for robots — e.g., 'aztarna,' a scanner for exposed ROS, ROS 2/DDS, and industrial-robot endpoints, and the Robot Vulnerability Database cataloging issues. These showed that finding and joining an unsecured DDS domain is as routine as scanning for open ports.",
          "Separately, security audits of DDS implementations (used across robotics, autonomous vehicles, and even aerospace) uncovered exploitable bugs and internet-exposed DDS services. The takeaway: the robot's communication bus is both the easiest way in (when unsecured) and a software attack surface in its own right — secure the middleware or surrender the robot.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker Participant", sub: "joins the DDS domain", type: "attacker" },
          { label: "Automatic Discovery", sub: "lists all topics (no auth)", type: "system" },
          { label: "Command Topic", sub: "publish cmd_vel / actuator setpoint", type: "victim" },
          { label: "Robot Moves", sub: "attacker-driven motion", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "ROS 2 adopts DDS with automatic, decentralized discovery" },
        { year: 2018, event: "Robot recon tools (e.g., aztarna) scan for exposed ROS/DDS endpoints", highlight: true },
        { year: 2021, event: "Audits find memory-safety/amplification bugs in popular DDS implementations" },
        { year: 2024, event: "Unsecured DDS domains remain a top entry point into robots" },
      ],
      keyTakeaways: [
        "DDS auto-discovery lets any participant learn every topic on a domain",
        "Without SROS2, an attacker can join the domain to read sensors and publish commands",
        "DDS implementations themselves have had exploitable bugs — the bus is also a software surface",
        "Defense: enable DDS Security, restrict discovery, segment the network, and monitor for new participants",
      ],
      references: [
        { title: "Data Distribution Service (DDS) overview", url: "https://en.wikipedia.org/wiki/Data_Distribution_Service" },
        { title: "aztarna — robot reconnaissance tool", url: "https://github.com/aliasrobotics/aztarna" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-02-q1", type: "Core Idea", challenge: "Domains.", text: "What is a DDS domain?", options: ["A partition where participants auto-discover each other and share topics", "A web domain name", "A type of motor", "A battery cell"], correctIndex: 0, explanation: "DDS domains group participants that discover and exchange topics." },
        { id: "r2-02-q2", type: "Discovery", challenge: "Free map.", text: "Why is automatic discovery useful to an attacker?", options: ["Joining the domain reveals every topic — sensors and command channels alike", "It encrypts everything", "It blocks new nodes", "It hides all topics"], correctIndex: 0, explanation: "Discovery hands the attacker a map of what to read and command." },
        { id: "r2-02-q3", type: "Action", challenge: "Make it move.", text: "How does an attacker command the robot via DDS?", options: ["Publish to command topics like cmd_vel or actuator setpoints", "Unplug the robot", "Email the vendor", "Change the paint"], correctIndex: 0, explanation: "Publishing to command topics drives the robot directly." },
        { id: "r2-02-q4", type: "No Auth", challenge: "Why it works.", text: "What lets an unauthorized participant join?", options: ["SROS2/DDS Security being disabled — no authentication or access control", "Strong encryption", "A hardware key", "Multi-factor auth"], correctIndex: 0, explanation: "With security off, any peer can join the domain." },
        { id: "r2-02-q5", type: "Surface", challenge: "Beyond config.", text: "How is DDS also a software attack surface?", options: ["DDS implementations have had memory-safety/amplification bugs", "It can't have bugs", "It's only hardware", "It has no code"], correctIndex: 0, explanation: "Audits found exploitable flaws in DDS libraries themselves." },
        { id: "r2-02-q6", type: "Defense", challenge: "Lock the bus.", text: "How do you secure a DDS domain?", options: ["Enable DDS Security, restrict discovery, segment the network, monitor participants", "Publish all topics openly", "Disable authentication", "Share the CA key"], correctIndex: 0, explanation: "Authenticate, scope, segment, and watch the bus." },
      ],
    },
  },

  // ─── r2-03: Warehouse AMR Fleets (CTF) ───────────────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The robots that run the warehouse", location: "Fulfillment centers worldwide", era: "Modern", emoji: "📦" },
    id: "r2-03",
    order: 3,
    title: "Commandeering an AMR Fleet",
    subtitle: "One Server, Hundreds of Robots",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-r2-amr", name: "Fleet Commander", emoji: "📦" },
    challengeType: "quiz",
    info: {
      tagline: "Modern warehouses run on fleets of autonomous mobile robots coordinated by a central fleet manager. Compromise that one server and you don't control a robot — you control all of them: re-route them, stop them, or send a hundred to the same aisle.",
      year: 2024,
      overview: [
        "Autonomous Mobile Robots (AMRs) navigate warehouses freely (unlike older AGVs that follow fixed tracks), carrying goods and shelves. A fleet of dozens to hundreds is coordinated by a Fleet Management System (FMS) that assigns tasks, plans routes, and prevents collisions — the brain of the operation.",
        "Interoperability standards like VDA5050 define how an FMS talks to robots from different vendors, typically over MQTT: the master sends 'order' and 'instantAction' messages (go here, pick this, stop), and robots publish 'state' and 'visualization' updates. If that MQTT broker or the FMS API isn't secured, the fleet's command channel is exposed.",
        "The impact of compromising the FMS or its messaging is fleet-wide: send malicious orders to re-route or halt every robot, cause collisions or gridlock, steal the warehouse's operational data and layout, or hold operations to ransom. The attack surface is mostly IT/IoT — broker auth, API authorization, network segmentation — applied to a swarm of physical machines. In this challenge you'll enumerate a fleet and send it a malicious mission.",
      ],
      technical: {
        title: "VDA5050, MQTT, and Fleet-Wide Commands",
        body: [
          "The fleet command path is the target:\n- Broker/API access: an MQTT broker with no auth (or default creds) or an FMS API with broken authorization lets an attacker publish orders and read state for the whole fleet.\n- VDA5050 messages: crafting 'order' (a route of nodes/edges) or 'instantAction' (e.g., cancelOrder, startPause, or motion) messages commands robots directly.\n- Mass effect: because the FMS coordinates all robots, a single foothold scales to the entire fleet — re-routing, stopping, or colliding them.",
          "Defenses are standard IoT/OT hygiene at fleet scale: authenticate and encrypt the MQTT/broker (TLS + credentials/ACLs per robot), enforce authorization on the FMS API, segment the robot network from corporate IT and the internet, validate/limit commands (an order to drive into a wall should be rejected), and monitor for anomalous mission patterns. In this challenge you'll connect to an unsecured fleet broker, enumerate the robots, and push a malicious order.",
        ],
      },
      incident: {
        title: "Warehouses as Critical (Soft) Infrastructure",
        when: "2020–today",
        where: "Logistics and fulfillment operations",
        impact: "Researchers and vendors flagged exposed fleet brokers/APIs and the systemic risk of FMS compromise across robot fleets",
        body: [
          "As e-commerce drove explosive growth in warehouse automation, security assessments highlighted that fleet managers and their messaging (often MQTT, sometimes exposed or weakly authenticated) concentrate enormous operational risk: the FMS is a single point whose compromise affects every robot it controls. VDA5050's rise improved interoperability but also standardized a command interface attackers can learn once and reuse.",
          "While public, detailed fleet-takeover incidents are limited (operators rarely disclose), the structural lesson is clear and frequently demonstrated in assessments: warehouse robotics is now critical operational infrastructure, and its central coordination layer must be secured like one. Downtime or sabotage at fleet scale directly stops the flow of goods.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "reaches the fleet broker/API", type: "attacker" },
          { label: "Fleet Manager (FMS)", sub: "VDA5050 over MQTT", type: "victim" },
          { label: "Malicious Order", sub: "re-route / stop / collide", type: "system" },
          { label: "Whole Fleet", sub: "hundreds of AMRs affected at once", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "Kiva (Amazon Robotics) popularizes mobile-robot warehouse fulfillment" },
        { year: 2019, event: "VDA5050 standardizes FMS↔robot communication (MQTT-based)" },
        { year: 2021, event: "Assessments flag exposed/weak fleet brokers and FMS authorization", highlight: true },
        { year: 2024, event: "AMR fleets treated as critical operational infrastructure requiring fleet-scale security" },
      ],
      keyTakeaways: [
        "AMR fleets are coordinated by a central Fleet Management System — the brain and the single point of risk",
        "VDA5050 over MQTT carries 'order'/'instantAction' commands between FMS and robots",
        "Compromising the broker/FMS scales to the whole fleet: re-route, stop, collide, or ransom",
        "Defense: authenticated/encrypted broker + API authorization, segmentation, command validation, anomaly monitoring",
      ],
      references: [
        { title: "VDA5050 (AGV/AMR interface standard)", url: "https://github.com/VDA5050/VDA5050" },
        { title: "Autonomous mobile robot (overview)", url: "https://en.wikipedia.org/wiki/Autonomous_robot" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-03-q1", type: "Core Idea", challenge: "The brain.", text: "What coordinates a warehouse AMR fleet?", options: ["A central Fleet Management System (FMS)", "Each robot independently with no coordination", "The Wi-Fi router only", "A human per robot"], correctIndex: 0, explanation: "The FMS assigns tasks, routes, and prevents collisions fleet-wide." },
        { id: "r2-03-q2", type: "Protocol", challenge: "Talking to robots.", text: "What does VDA5050 standardize?", options: ["FMS↔robot communication (orders/actions), typically over MQTT", "Tire pressure", "Battery chemistry", "Paint color"], correctIndex: 0, explanation: "VDA5050 defines the interoperable fleet command interface." },
        { id: "r2-03-q3", type: "Scale", challenge: "Why it's bad.", text: "Why is FMS compromise so impactful?", options: ["It controls every robot, so one foothold affects the whole fleet", "It only affects one robot", "It's purely cosmetic", "Robots ignore the FMS"], correctIndex: 0, explanation: "The central coordinator scales an attack to all robots." },
        { id: "r2-03-q4", type: "Entry", challenge: "How in.", text: "What's a common entry point to a fleet?", options: ["An MQTT broker with no/default auth or an FMS API with broken authorization", "The robots' paint", "A physical key per robot", "The warehouse lights"], correctIndex: 0, explanation: "Unsecured broker/API exposes the command channel." },
        { id: "r2-03-q5", type: "Impact", challenge: "What you can do.", text: "What can a malicious VDA5050 order achieve?", options: ["Re-route, stop, or collide robots — gridlock or sabotage the fleet", "Improve battery life", "Repaint the floor", "Add new robots for free"], correctIndex: 0, explanation: "Crafted orders directly command robot motion." },
        { id: "r2-03-q6", type: "Defense", challenge: "Fleet-scale hygiene.", text: "How do you secure an AMR fleet?", options: ["Authenticated/encrypted broker + API authorization, segmentation, command validation, monitoring", "Open MQTT to the internet", "Share one password", "Disable all logging"], correctIndex: 0, explanation: "Standard IoT/OT hygiene applied to the fleet's command layer." },
      ],
    },
  },

  // ─── r2-04: Autonomous Tractors / Ag Robots (CTF) ────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The robots that grow our food", location: "Farms across the world", era: "Modern", emoji: "🚜" },
    id: "r2-04",
    order: 4,
    title: "Hijacking the Autonomous Tractor",
    subtitle: "When Farm Robots Become Critical Infrastructure",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-r2-ag", name: "Field Hijacker", emoji: "🚜" },
    challengeType: "quiz",
    info: {
      tagline: "Modern agriculture runs on GPS-guided, increasingly autonomous machines that plant, spray, and harvest with centimeter precision. They're connected, software-defined, and feeding a nation — which makes farm robotics a food-security problem, not just a farming one.",
      year: 2024,
      overview: [
        "Precision agriculture turned tractors into robots: RTK-GPS auto-steer drives them along centimeter-accurate paths, ISOBUS (ISO 11783) connects implements like a CAN bus for the farm, telematics links machines to the cloud, and fully autonomous tractors (e.g., John Deere's) now operate with no driver. The food supply increasingly depends on this software stack.",
        "The attack surface combines everything in this curriculum: GPS spoofing can misdirect auto-steer; the machine's CAN/ISOBUS bus has the same trust issues as a car's; cloud telematics and dealer systems are web/API targets; and the embedded controllers can be reflashed. The famous 'right to repair' fights even produced jailbreaks of tractor firmware, proving the software can be modified.",
        "Consequences scale from a single field to the food system: misdirected or disabled machines during a narrow planting/harvest window cause real losses; mass compromise via cloud/telematics could disrupt agriculture regionally; and stolen agronomic data has economic value. Governments increasingly treat agriculture as critical infrastructure. In this challenge you'll access a tractor's display/telematics and override its guidance.",
      ],
      technical: {
        title: "RTK-GPS, ISOBUS, Telematics, and Reflashing",
        body: [
          "Each layer offers a way in:\n- GPS/RTK spoofing: faking the satellite or correction signal shifts where the tractor thinks it is, sending auto-steer off-line — a physical, no-network attack.\n- ISOBUS/CAN: the in-machine bus, like automotive CAN, generally lacks authentication, so a foothold lets you inject implement/vehicle commands.\n- Telematics & cloud: connected machines report to (and take updates/commands from) cloud platforms and dealer tools — classic API/auth targets that can reach many machines.\n- Firmware: embedded controllers have been reflashed (the repair-community jailbreaks), showing persistence and modification are feasible.",
          "Defenses mirror automotive maturity arriving in ag: authenticated/segmented machine networks, secured telematics and cloud APIs with least privilege, GPS spoofing detection and sensor cross-checks, signed firmware and secure boot, and treating the planting/harvest window as a resilience priority. The cross-over lesson: a tractor is now a car-and-OT hybrid feeding the country. In this challenge you'll access the machine's system and override auto-steer guidance.",
        ],
      },
      incident: {
        title: "Jailbroken Tractors and Food-Supply Warnings",
        when: "2017–today",
        where: "US/global agriculture",
        impact: "Tractor firmware jailbreaks proved the software is modifiable; officials and researchers warned of food-system cyber-risk",
        body: [
          "The right-to-repair movement led farmers and hackers to jailbreak tractor firmware (notably demonstrated publicly around 2022) to bypass manufacturer locks — incidentally proving that the embedded software controlling these machines can be modified and re-flashed. Security researchers extended this to show broader vulnerabilities in agricultural equipment and its cloud/telematics systems.",
          "Meanwhile, ransomware against agricultural cooperatives and food processors (several high-profile US incidents in 2021) showed the sector's IT fragility, and officials began warning that increasingly autonomous, connected farm equipment is a food-security cyber-risk. The throughline: as farming automates, its robots and software become national infrastructure that adversaries could target to disrupt the food supply.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "GPS spoof / telematics / CAN foothold", type: "attacker" },
          { label: "Tractor Systems", sub: "RTK auto-steer, ISOBUS, telematics", type: "victim" },
          { label: "Guidance Override", sub: "off-line steering or disabled machine", type: "system" },
          { label: "Food-Supply Impact", sub: "lost planting/harvest window", type: "result" },
        ],
      },
      timeline: [
        { year: 2001, event: "ISOBUS (ISO 11783) standardizes tractor-implement communication" },
        { year: 2012, event: "RTK-GPS auto-steer becomes mainstream in precision agriculture" },
        { year: 2022, event: "Public tractor firmware jailbreak proves the software is modifiable", highlight: true },
        { year: 2024, event: "Fully autonomous tractors operate driverless; ag treated as critical infrastructure" },
      ],
      keyTakeaways: [
        "Precision-ag tractors are robots: RTK auto-steer, ISOBUS/CAN, telematics, and even driverless autonomy",
        "Attack surface spans GPS spoofing, the unauthenticated machine bus, cloud/telematics APIs, and firmware",
        "Impact is food security — misdirected/disabled machines in a harvest window cause real losses at scale",
        "Defense: authenticated/segmented networks, secured cloud APIs, GPS-spoof detection, and signed firmware",
      ],
      references: [
        { title: "Precision agriculture (overview)", url: "https://en.wikipedia.org/wiki/Precision_agriculture" },
        { title: "ISOBUS / ISO 11783", url: "https://en.wikipedia.org/wiki/ISO_11783" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-04-q1", type: "Core Idea", challenge: "Tractors as robots.", text: "What makes a modern tractor a robot?", options: ["RTK-GPS auto-steer, ISOBUS/CAN, telematics, and increasingly full autonomy", "It has a steering wheel", "It's painted green", "It burns diesel"], correctIndex: 0, explanation: "Precision-ag machines are software-defined, connected robots." },
        { id: "r2-04-q2", type: "GPS", challenge: "Misdirect.", text: "How can GPS spoofing affect a tractor?", options: ["Shifting its perceived position sends auto-steer off the intended line", "It refuels the tractor", "It paints the field", "It has no effect"], correctIndex: 0, explanation: "Faking position/correction misdirects auto-steer." },
        { id: "r2-04-q3", type: "Bus", challenge: "Farm CAN.", text: "What is ISOBUS?", options: ["The tractor-implement communication bus (like a farm CAN), generally unauthenticated", "A type of GPS satellite", "A cloud database", "A tire standard"], correctIndex: 0, explanation: "ISOBUS connects implements and shares CAN's trust issues." },
        { id: "r2-04-q4", type: "Firmware", challenge: "Modifiable.", text: "What did tractor jailbreaks prove?", options: ["The embedded firmware can be modified/re-flashed", "Tractors can't be hacked", "There is no software", "Only the engine matters"], correctIndex: 0, explanation: "Repair-community jailbreaks showed firmware is modifiable." },
        { id: "r2-04-q5", type: "Stakes", challenge: "Food security.", text: "Why is ag-robot security a food-security issue?", options: ["Misdirected/disabled machines in a harvest window, or mass compromise, disrupt the food supply", "Tractors are unimportant", "Food isn't networked", "It only affects one farm ever"], correctIndex: 0, explanation: "Automated farming is now national infrastructure." },
        { id: "r2-04-q6", type: "Defense", challenge: "Catch up.", text: "What defenses does ag robotics need?", options: ["Authenticated/segmented networks, secured cloud APIs, GPS-spoof detection, and signed firmware", "Bigger tires", "More diesel", "No software at all"], correctIndex: 0, explanation: "The same maturity as automotive, applied to farm machines." },
      ],
    },
  },

  // ─── r2-05: Swarm Robotics & Multi-Robot Trust (Quiz) ────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "Many small robots, one mind", location: "Drone shows, search teams, research labs", era: "Modern", emoji: "🐝" },
    id: "r2-05",
    order: 5,
    title: "Swarm Robotics & Trust",
    subtitle: "When One Traitor Robot Corrupts the Whole Swarm",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-r2-swarm", name: "Swarm Warden", emoji: "🐝" },
    challengeType: "quiz",
    info: {
      tagline: "A swarm gets its power from cooperation: simple robots sharing information to act as one. That same cooperation is its weakness — a single compromised or lying member can poison the shared belief and steer the whole swarm wrong.",
      year: 2024,
      overview: [
        "Swarm robotics coordinates many simple robots (drones, ground bots) to achieve collective behavior — formation flying, mapping, search-and-rescue, agriculture — through local interactions and shared information rather than a single controller. The swarm is robust to losing individuals, which is a key attraction.",
        "But cooperation requires trust, and that's the attack surface. If members share positions, sensor readings, or votes to reach consensus, a malicious or hijacked member can inject false data — claiming a target is somewhere it isn't, or voting to corrupt a collective decision. This is a Byzantine fault: a component that doesn't just fail, but lies.",
        "Attacks include: Sybil (one attacker faking many swarm identities to dominate votes), data falsification (poisoning the shared map/consensus), and disruption (jamming the inter-robot communication that the swarm depends on). Defenses borrow from distributed systems: Byzantine-fault-tolerant consensus, authentication of members, reputation/plausibility checks on shared data, and resilient communication — so the swarm can detect and outvote liars.",
      ],
      technical: {
        title: "Byzantine Faults, Sybil, and Resilient Consensus",
        body: [
          "The core problem is trusting peers in a decentralized system:\n- Byzantine members: a robot that sends conflicting or false information to different peers can break naive consensus; tolerating it requires algorithms designed for arbitrary (malicious) faults, which typically need a bounded fraction of traitors (e.g., < 1/3).\n- Sybil attacks: without strong identity, one attacker spawns many fake members to exceed that fraction and control decisions — so authenticated identity is foundational.\n- Communication attacks: jamming or spoofing the wireless mesh the swarm uses can fragment or mislead it.",
          "Research applies blockchain-style and BFT consensus, cryptographic identity, and reputation systems to swarms so that false data is detected, malicious members are excluded, and decisions remain correct despite some traitors. Plausibility checks (a teammate reporting an impossible position is distrusted) and redundancy round it out. The lesson generalizes the epoch's theme: in any cooperative robot system, you must verify peers, not just trust them.",
        ],
      },
      incident: {
        title: "From Drone Shows to Contested Skies",
        when: "2018–today",
        where: "Commercial drone swarms and defense research",
        impact: "As swarms moved from spectacle to serious use, research showed Sybil/Byzantine and jamming attacks can corrupt or disrupt collective behavior",
        body: [
          "Spectacular drone light shows (hundreds to thousands of coordinated drones) made swarms famous, while defense and research programs pursued swarms for surveillance, search, and combat. Security research kept pace, demonstrating that without authenticated membership and robust consensus, swarms are vulnerable to Sybil attacks dominating decisions, falsified shared data corrupting maps, and jamming fragmenting coordination.",
          "Because swarms are explicitly designed to be decentralized and cooperative, they inherit the hardest problems of distributed systems — now with physical robots. The field's response (BFT consensus, cryptographic identity, reputation) mirrors how secure distributed systems are built, underscoring that swarm security is distributed-systems security with motors.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Malicious / Sybil Member", sub: "lies or fakes many identities", type: "attacker" },
          { label: "Shared Belief", sub: "consensus, map, votes", type: "victim" },
          { label: "Corrupted Decision", sub: "swarm acts on false data", type: "system" },
          { label: "BFT + Identity", sub: "detect and outvote traitors", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "Large coordinated drone light shows popularize swarm robotics" },
        { year: 2018, event: "Research demonstrates Sybil/Byzantine attacks on swarm consensus", highlight: true },
        { year: 2020, event: "Blockchain/BFT consensus and cryptographic identity applied to swarms" },
        { year: 2024, event: "Swarms pursued for defense, logistics, and agriculture — security made foundational" },
      ],
      keyTakeaways: [
        "Swarms gain power from cooperation, which makes shared trust the attack surface",
        "A Byzantine (lying) member or a Sybil attacker can poison consensus and steer the swarm",
        "Defenses come from distributed systems: BFT consensus, cryptographic identity, and reputation/plausibility checks",
        "Swarm security is distributed-systems security with motors — verify peers, don't just trust them",
      ],
      references: [
        { title: "Swarm robotics (overview)", url: "https://en.wikipedia.org/wiki/Swarm_robotics" },
        { title: "Byzantine fault tolerance", url: "https://en.wikipedia.org/wiki/Byzantine_fault" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-05-q1", type: "Core Idea", challenge: "The trade-off.", text: "Why is cooperation both a swarm's strength and weakness?", options: ["Shared information gives collective power but lets a liar poison the shared belief", "It makes robots heavier", "It uses more paint", "It has no downside"], correctIndex: 0, explanation: "Trust enables coordination and is exactly what attackers exploit." },
        { id: "r2-05-q2", type: "Byzantine", challenge: "A liar, not a failure.", text: "What is a Byzantine member in a swarm?", options: ["One that doesn't just fail but sends false/conflicting information", "A robot that runs out of battery", "A perfectly honest robot", "A charging station"], correctIndex: 0, explanation: "Byzantine faults are arbitrary/malicious, including lying." },
        { id: "r2-05-q3", type: "Sybil", challenge: "Many fakes.", text: "What is a Sybil attack on a swarm?", options: ["One attacker faking many member identities to dominate votes/consensus", "A single honest member", "A type of motor", "A charging protocol"], correctIndex: 0, explanation: "Without strong identity, fake members can control decisions." },
        { id: "r2-05-q4", type: "Defense", challenge: "Tolerate traitors.", text: "What lets a swarm reach correct decisions despite some traitors?", options: ["Byzantine-fault-tolerant consensus (typically tolerating a bounded fraction)", "Trusting everyone equally", "Removing all communication", "Using one robot only"], correctIndex: 0, explanation: "BFT consensus handles a bounded fraction of malicious members." },
        { id: "r2-05-q5", type: "Identity", challenge: "Foundational.", text: "Why is authenticated identity foundational for swarms?", options: ["It prevents Sybil attacks from exceeding the tolerated fraction of traitors", "It makes robots faster", "It's decorative", "It charges the battery"], correctIndex: 0, explanation: "Strong identity stops one attacker from becoming 'many'." },
        { id: "r2-05-q6", type: "Generalization", challenge: "Familiar field.", text: "Swarm security most resembles which discipline?", options: ["Secure distributed systems (consensus, identity, reputation) — with motors", "Web design", "Battery chemistry", "Mechanical engineering only"], correctIndex: 0, explanation: "It's distributed-systems security applied to physical robots." },
      ],
    },
  },

  // ─── r2-06: Cloud Robotics & Teleop Backends (CTF) ───────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The robot's brain in the cloud", location: "Robotics platforms and teleop centers", era: "Modern", emoji: "☁️" },
    id: "r2-06",
    order: 6,
    title: "Cloud Robotics Backends",
    subtitle: "Offloading the Brain, Inheriting the Breach",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-r2-cloud", name: "Cloud Roboticist", emoji: "☁️" },
    challengeType: "quiz",
    info: {
      tagline: "Robots are getting lighter by moving their heaviest thinking — mapping, ML inference, fleet coordination, teleoperation — to the cloud. Convenient, scalable, and a fresh single point of failure: breach the backend and you reach into every robot connected to it.",
      year: 2024,
      overview: [
        "Cloud robotics offloads computation and coordination to remote servers: a robot streams sensor data up and receives plans or commands back, taps cloud ML for perception, syncs maps across a fleet, and exposes a remote teleoperation channel for humans to take over. Platforms (AWS RoboMaker-style services, vendor clouds, ROS-cloud bridges) make this standard.",
        "This dissolves the old boundary of 'the robot.' The robot's effective control plane now lives in cloud APIs, message brokers, and web dashboards — so the attack surface is cloud and web security: API authorization, authentication, multi-tenancy isolation, and the security of the teleoperation link that can directly drive the robot.",
        "The dangerous combination is reach plus authority: a backend flaw (broken API auth, tenant isolation failure, exposed teleop) can affect many robots at once and command them in the physical world. Teleoperation is especially sensitive — if an attacker seizes the remote-control channel, they drive the robot directly, the exact risk seen with remotely operated machines. In this challenge you'll probe a cloud-robotics API and hijack a teleoperation session.",
      ],
      technical: {
        title: "APIs, Multi-Tenancy, and the Teleop Channel",
        body: [
          "The cloud control plane has familiar weaknesses with physical stakes:\n- API authorization: BOLA/IDOR-style flaws let one account command another's robots (as in the connected-car APIs) — now driving machines.\n- Tenancy isolation: weak separation between customers can leak data or control across tenants.\n- Teleoperation security: the remote-drive channel must be strongly authenticated and integrity-protected; if it's hijacked or its commands are forged, the attacker controls the robot live.\n- Pipeline trust: cloud ML/map updates pushed to robots are a software-supply path that must be signed and verified.",
          "Defenses are cloud-native security applied with safety-criticality: strict per-object authorization and tenant isolation, strong auth (and MFA) on dashboards and teleop, encrypted and authenticated control channels, signed model/map/firmware updates, least privilege, and monitoring for anomalous commands. The principle from the connected-car stage returns: when the robot's brain is a web service, web security is robot safety. In this challenge you'll find an authorization flaw and seize a teleop session.",
        ],
      },
      incident: {
        title: "When the Backend Is the Robot",
        when: "2019–today",
        where: "Cloud robotics platforms and connected-device vendors",
        impact: "Backend/API and teleop weaknesses repeatedly shown to expose control of connected robots and devices at scale",
        body: [
          "Across connected robotics and IoT, researchers have repeatedly found that the cloud backend is the soft underbelly: APIs with broken authorization controlling devices, exposed management interfaces, and weakly protected remote-control channels. The connected-car API research is the clearest large-scale example, and the same pattern applies to cloud-managed robots, delivery bots, and consumer robotics.",
          "Teleoperation adds a live-control dimension: services that let humans remotely drive robots (in logistics, delivery, or assistance) make the remote channel a direct path to motion. The consistent lesson is that offloading the brain to the cloud means inheriting cloud breaches — so securing the backend, the APIs, and the teleop link is inseparable from securing the robot.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "cloud API / teleop access", type: "attacker" },
          { label: "Robotics Backend", sub: "APIs, brokers, dashboards", type: "victim" },
          { label: "Hijacked Teleop", sub: "live remote control of the robot", type: "system" },
          { label: "Fleet-Wide Reach", sub: "many robots commandable at once", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "Cloud robotics proposed — offload computation/coordination to remote servers" },
        { year: 2018, event: "Managed cloud-robotics services (e.g., RoboMaker-style) go mainstream" },
        { year: 2022, event: "Connected-device/car API research shows backend flaws control fleets", highlight: true },
        { year: 2024, event: "Teleoperation services make the remote-control channel a critical attack surface" },
      ],
      keyTakeaways: [
        "Cloud robotics offloads mapping, ML, coordination, and teleop to the cloud — dissolving 'the robot' boundary",
        "The control plane becomes cloud/web: API authorization, tenant isolation, and the teleop channel are the surface",
        "A backend flaw or hijacked teleop reaches many robots and commands them physically",
        "Defense: strict authorization/isolation, strong auth on teleop, signed updates, and command monitoring",
      ],
      references: [
        { title: "Cloud robotics (overview)", url: "https://en.wikipedia.org/wiki/Cloud_robotics" },
        { title: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-06-q1", type: "Core Idea", challenge: "Offload the brain.", text: "What is cloud robotics?", options: ["Offloading computation, coordination, ML, and teleop to remote servers", "Putting robots in the sky", "Removing all software", "A type of battery"], correctIndex: 0, explanation: "Cloud robotics moves heavy thinking to the cloud." },
        { id: "r2-06-q2", type: "Surface", challenge: "New control plane.", text: "What becomes the attack surface in cloud robotics?", options: ["Cloud/web security: API authorization, tenant isolation, and the teleop channel", "Only the wheels", "The paint", "The charging cable only"], correctIndex: 0, explanation: "The robot's control plane is now cloud APIs and dashboards." },
        { id: "r2-06-q3", type: "Teleop", challenge: "Live control.", text: "Why is teleoperation especially sensitive?", options: ["Hijacking the remote-drive channel lets an attacker control the robot live", "It plays music", "It charges the robot", "It has no risk"], correctIndex: 0, explanation: "The teleop channel is a direct path to physical motion." },
        { id: "r2-06-q4", type: "API", challenge: "Familiar bug.", text: "How can one account command another's robots?", options: ["BOLA/IDOR-style broken authorization in the backend API", "By guessing the Wi-Fi password only", "It's impossible", "By repainting the robot"], correctIndex: 0, explanation: "Object-level authorization flaws scale across tenants/robots." },
        { id: "r2-06-q5", type: "Pipeline", challenge: "Update trust.", text: "Why must cloud-pushed models/maps be signed?", options: ["They're a software-supply path to the robot that must be verified", "To make them smaller", "For nicer colors", "They don't matter"], correctIndex: 0, explanation: "Unsigned updates are a backdoor into every robot." },
        { id: "r2-06-q6", type: "Principle", challenge: "The lesson.", text: "What's the core principle of cloud-robot security?", options: ["When the robot's brain is a web service, web security is robot safety", "Clouds can't be hacked", "Robots need no security", "Only hardware matters"], correctIndex: 0, explanation: "Cloud breaches become physical robot compromises." },
      ],
    },
  },

  // ─── r2-07: Legged & Humanoid Robots (Quiz) ──────────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "Robots that walk among us", location: "Sidewalks, factories, and homes", era: "Modern", emoji: "🦿" },
    id: "r2-07",
    order: 7,
    title: "Legged & Humanoid Robots",
    subtitle: "Mobile, Capable, and Increasingly Everywhere",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-r2-humanoid", name: "Humanoid Handler", emoji: "🦿" },
    challengeType: "quiz",
    info: {
      tagline: "Legged robots go where wheels can't and humanoids are built to work in our spaces using our tools. As they leave the lab for sidewalks, factories, and homes, a hacked one isn't a stuck rover — it's a powerful, mobile machine loose in human environments.",
      year: 2024,
      overview: [
        "Quadrupeds (Boston Dynamics Spot, Unitree's Go/B-series) and emerging humanoids (Atlas, Tesla Optimus, Figure, Unitree H1/G1) are leaving research labs for inspection, security patrol, logistics, and general-purpose work. They combine high mobility, manipulation, onboard AI, cameras/microphones, and network/cloud connectivity in one platform.",
        "Their attack surface is the union of everything in both robotics epochs: the comms stack (often ROS 2/DDS, sometimes app/cloud control), wireless control (Wi-Fi/Bluetooth/cellular), onboard perception ML, firmware, and a rich sensor payload (cameras, mics) that's a privacy and surveillance concern. Several of these platforms have had documented vulnerabilities in their apps, network services, or firmware.",
        "What raises the stakes is capability and proximity: these robots are strong, fast, mobile, and operate near or among people, sometimes carrying tools or payloads. A compromise can mean physical danger, covert surveillance through the robot's sensors, or use of the robot as a mobile attack platform inside a facility. Functional-safety and security must be designed together — the theme that closes both robotics epochs.",
      ],
      technical: {
        title: "Shared Surfaces, Sensors, and Physical Capability",
        body: [
          "Concretely, these platforms inherit and concentrate risks:\n- Control & comms: app/Wi-Fi/Bluetooth control and ROS 2/DDS internals — subject to the discovery/auth issues already covered; researchers have found unauthenticated services and app/cloud flaws on commercial quadrupeds.\n- Sensors as surveillance: always-on cameras and microphones make a compromised robot a roving spy; data may also flow to a vendor cloud.\n- Firmware & supply chain: components and firmware (some from specific vendors) raise integrity and provenance concerns, leading some organizations to restrict certain models.\n- Physical capability: unlike a stuck wheeled bot, a hijacked legged/humanoid robot can move through human spaces and manipulate objects.",
          "Defenses combine everything taught so far with safety engineering: secure the comms (enable SROS2, authenticate app/cloud), protect and verify firmware (secure boot, signed updates), minimize and protect sensor data, segment and monitor the robots' network, and design hard safety limits (e-stops, speed/force limits, geofencing) that hold even if higher-level control is compromised. Security and functional safety are one problem here.",
        ],
      },
      incident: {
        title: "From Patrol Dogs to Restricted Vendors",
        when: "2021–today",
        where: "Commercial deployments and government policy",
        impact: "Security/privacy concerns around capable mobile robots led to documented vulnerabilities and procurement restrictions on some models",
        body: [
          "As quadrupeds were deployed for security patrol, inspection, and even police use, researchers found vulnerabilities in commercial models — unauthenticated network services, app and cloud weaknesses, and firmware concerns — and privacy advocates raised alarms about their sensor payloads. Some governments and organizations restricted or scrutinized specific vendors' robots over data and supply-chain concerns.",
          "The broader point is that capability changes the threat model: a small, fast, strong, sensor-laden robot operating among people is a far more consequential thing to compromise than a tethered arm. As humanoids scale toward homes and workplaces, designing security and functional safety together — so a hack can't override physical safety limits — becomes essential, the closing lesson of the robotics arc.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compromise Vector", sub: "app/cloud, ROS2/DDS, firmware", type: "attacker" },
          { label: "Legged / Humanoid Robot", sub: "mobile, strong, sensor-rich", type: "victim" },
          { label: "Misuse", sub: "physical harm, surveillance, mobile platform", type: "system" },
          { label: "Safety Limits Hold", sub: "e-stop, speed/force, geofence", type: "result" },
        ],
      },
      timeline: [
        { year: 2020, event: "Boston Dynamics Spot goes commercial; quadrupeds enter inspection/patrol" },
        { year: 2022, event: "Researchers report vulnerabilities/privacy concerns in commercial quadrupeds", highlight: true },
        { year: 2023, event: "Humanoid programs (Optimus, Figure, Unitree) accelerate toward real work" },
        { year: 2024, event: "Procurement restrictions on some robot vendors over data/supply-chain concerns" },
      ],
      keyTakeaways: [
        "Legged/humanoid robots combine high mobility, manipulation, onboard AI, and rich sensors in one platform",
        "Their attack surface unites comms (ROS2/DDS, app/cloud), firmware, and surveillance-capable sensors",
        "Capability + proximity raise the stakes: physical danger, covert surveillance, or a mobile attack platform",
        "Defense pairs cyber controls with functional safety — hard limits (e-stop/speed/force/geofence) must hold despite compromise",
      ],
      references: [
        { title: "Humanoid robot (overview)", url: "https://en.wikipedia.org/wiki/Humanoid_robot" },
        { title: "Legged robot / quadruped (overview)", url: "https://en.wikipedia.org/wiki/Legged_robot" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-07-q1", type: "Core Idea", challenge: "Why they matter.", text: "What makes legged/humanoid robots higher-stakes to compromise?", options: ["They're mobile, strong, sensor-rich, and operate near or among people", "They're always offline", "They can't move", "They have no sensors"], correctIndex: 0, explanation: "Capability and proximity to humans raise the consequences." },
        { id: "r2-07-q2", type: "Surface", challenge: "All of it.", text: "What is their attack surface?", options: ["The union of comms (ROS2/DDS, app/cloud), firmware, and onboard sensors", "Only the battery", "Only the paint", "Nothing networked"], correctIndex: 0, explanation: "They concentrate the risks of the whole robotics stack." },
        { id: "r2-07-q3", type: "Privacy", challenge: "Roving spy.", text: "Why are these robots a surveillance concern?", options: ["Always-on cameras/mics make a compromised robot a mobile spy, with data possibly going to the cloud", "They can't record", "They have no cameras", "They only see the floor"], correctIndex: 0, explanation: "Their sensor payload is a privacy/surveillance risk." },
        { id: "r2-07-q4", type: "Supply Chain", challenge: "Provenance.", text: "Why have some organizations restricted certain robot vendors?", options: ["Firmware/component provenance and data-flow (supply-chain) concerns", "They were too cheap", "They were too slow", "They had no use"], correctIndex: 0, explanation: "Integrity/provenance and data concerns drove restrictions." },
        { id: "r2-07-q5", type: "Safety", challenge: "Last line.", text: "What must hold even if higher-level control is compromised?", options: ["Hard safety limits: e-stops, speed/force limits, and geofencing", "The Wi-Fi password", "The paint color", "The cloud login"], correctIndex: 0, explanation: "Physical safety limits should be independent of compromised control." },
        { id: "r2-07-q6", type: "Theme", challenge: "Two as one.", text: "What's the closing lesson for humanoid robots?", options: ["Security and functional safety must be designed together", "Safety alone is enough", "Security is irrelevant", "Only marketing matters"], correctIndex: 0, explanation: "A hack must not be able to override physical safety." },
      ],
    },
  },

  // ─── r2-08: Navigation & GPS Spoofing (CTF) ──────────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The robot's sense of place", location: "Skies, fields, and sidewalks", era: "Modern", emoji: "🧭" },
    id: "r2-08",
    order: 8,
    title: "Navigation & GPS Spoofing",
    subtitle: "Lying to a Robot About Where It Is",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-r2-nav", name: "Cartographer of Lies", emoji: "🧭" },
    challengeType: "quiz",
    info: {
      tagline: "An autonomous robot can do everything right and still drive off a cliff if it believes a lie about where it is. Outdoor robots lean on GPS, and GPS is a faint, unauthenticated signal from space — easy to drown out or fake, sending a drone or delivery bot wherever you want.",
      year: 2024,
      overview: [
        "Mobile robots localize — figure out where they are — using GPS/GNSS outdoors, plus inertial sensors (IMU), wheel odometry, and increasingly SLAM (building a map from LiDAR/cameras). Navigation then plans a path on that belief. If localization is wrong, every downstream decision is wrong, no matter how good the planner is.",
        "GNSS is the soft target: civilian GPS signals are extremely weak and have no authentication, so they can be jammed (denial — the robot loses position) or, worse, spoofed (deception — the robot is fed a false but plausible position and follows it confidently). Spoofing has been demonstrated against drones and ships, and it requires only modest, increasingly cheap equipment.",
        "Beyond GNSS, SLAM and visual/LiDAR localization can be attacked too (the perception-spoofing theme), and a robot relying on a single source is fragile. The defense is sensor fusion and consistency checking — cross-validate GPS against IMU/odometry/SLAM so a sudden teleport is rejected — plus signal-authentication advances (e.g., Galileo OSNMA) and anomaly detection. In this challenge you'll spoof a robot's GPS and redirect it off-course.",
      ],
      technical: {
        title: "Jamming vs. Spoofing, and Fusion as Defense",
        body: [
          "The two GNSS attacks differ in goal:\n- Jamming: overwhelm the band so the receiver can't get a fix — a denial attack that at least the robot can detect (lost signal) and respond to (stop, switch to inertial).\n- Spoofing: transmit counterfeit satellite signals (or replay/relay real ones with offsets) so the receiver computes a false position the robot trusts — far more dangerous because it's silent, gradually walking the robot off-course or to an attacker-chosen location.",
          "Robust localization is the answer: fuse GNSS with IMU, odometry, and SLAM and run consistency checks (the position can't jump faster than physics allows; sources must agree), use authenticated GNSS where available, add spoofing/jamming detection (signal strength, multiple antennas, anomaly detection), and design fail-safe behavior on detected attack (hold, slow, or hand to a human). The lesson generalizes the perception work: never trust a single localization input. In this challenge you'll spoof GPS to inject a false position, then redirect the robot.",
        ],
      },
      incident: {
        title: "Spoofing Drones and Ships",
        when: "2012–today",
        where: "Research demonstrations and real-world incidents",
        impact: "GPS spoofing shown to hijack a drone and reported affecting ships' navigation — proving robots can be steered by faking position",
        body: [
          "In a landmark 2012 demonstration, a University of Texas team led by Todd Humphreys spoofed the GPS of a civilian drone, taking control of its navigation by feeding it counterfeit signals. The same group later spoofed a yacht's navigation at sea. Over the following years, large-scale GPS spoofing and jamming incidents were reported affecting ships (notably in some contested maritime regions) and aviation.",
          "These showed that GNSS — trusted by countless autonomous and semi-autonomous systems — is an unauthenticated input that can be faked with attainable equipment, and that the consequence is direct physical misdirection. The robotics response (sensor fusion, spoof detection, authenticated GNSS) reflects the core principle: localization is a security-critical input that must be verified, not blindly trusted.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Spoofing Transmitter", sub: "counterfeit GNSS signals", type: "attacker" },
          { label: "Robot Receiver", sub: "computes false position", type: "victim" },
          { label: "Navigation Planner", sub: "plans on the wrong belief", type: "system" },
          { label: "Off-Course / Detour", sub: "robot driven where attacker wants", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "UT Austin team spoofs a civilian drone's GPS, hijacking its navigation", highlight: true },
        { year: 2013, event: "The same team spoofs a yacht's GPS at sea" },
        { year: 2019, event: "Large-scale GNSS spoofing/jamming reported affecting ships and aviation" },
        { year: 2023, event: "Authenticated GNSS (Galileo OSNMA) and fusion-based spoof detection mature" },
      ],
      keyTakeaways: [
        "Robots localize via GNSS + IMU/odometry/SLAM; wrong localization makes every navigation decision wrong",
        "Civilian GPS is weak and unauthenticated — jamming denies position, spoofing silently fakes it",
        "GPS spoofing has hijacked drones and affected ships, requiring only attainable equipment",
        "Defense: sensor fusion + consistency checks, authenticated GNSS, spoof/jam detection, and fail-safe behavior",
      ],
      references: [
        { title: "GPS spoofing (overview)", url: "https://en.wikipedia.org/wiki/Spoofing_attack#GPS_spoofing" },
        { title: "Galileo OSNMA (authenticated GNSS)", url: "https://www.gsc-europa.eu/galileo/services/galileo-open-service-navigation-message-authentication-osnma" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-08-q1", type: "Core Idea", challenge: "Localization.", text: "Why is localization security-critical?", options: ["If the robot believes a wrong position, every navigation decision is wrong", "It only affects the color", "It speeds up the CPU", "It has no effect on navigation"], correctIndex: 0, explanation: "Navigation plans on the localization belief — corrupt it and the robot goes wrong." },
        { id: "r2-08-q2", type: "GNSS", challenge: "Soft target.", text: "Why is civilian GPS easy to attack?", options: ["The signals are very weak and unauthenticated", "They're encrypted end-to-end", "They require a password", "They're sent over fiber"], correctIndex: 0, explanation: "Weak, unauthenticated signals can be jammed or spoofed." },
        { id: "r2-08-q3", type: "Two Attacks", challenge: "Deny vs deceive.", text: "How does spoofing differ from jamming?", options: ["Jamming denies a fix; spoofing silently feeds a false position the robot trusts", "They're identical", "Spoofing only adds noise", "Jamming fakes a position"], correctIndex: 0, explanation: "Spoofing is more dangerous because it's deceptive and silent." },
        { id: "r2-08-q4", type: "History", challenge: "Proven.", text: "What did the 2012 UT Austin demonstration show?", options: ["A civilian drone's GPS could be spoofed to hijack its navigation", "GPS is unspoofable", "Drones don't use GPS", "Only military gear was affected"], correctIndex: 0, explanation: "Counterfeit signals took over the drone's navigation." },
        { id: "r2-08-q5", type: "Defense", challenge: "Don't trust one source.", text: "What is the main defense against GPS spoofing?", options: ["Sensor fusion + consistency checks (GNSS vs IMU/odometry/SLAM) and spoof detection", "Trusting GPS alone", "Removing the IMU", "Driving faster"], correctIndex: 0, explanation: "Cross-validate localization so a 'teleport' is rejected." },
        { id: "r2-08-q6", type: "Future", challenge: "Authenticate space.", text: "What helps verify GNSS signals themselves?", options: ["Authenticated GNSS like Galileo OSNMA", "A longer antenna", "More batteries", "Turning GPS off forever"], correctIndex: 0, explanation: "Signal authentication makes spoofing detectable." },
      ],
    },
  },

  // ─── r2-09: Poisoning a Robot's Learned Policy (CTF) ─────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "The behavior the robot learned", location: "Training pipelines and model zoos", era: "Modern", emoji: "🧪" },
    id: "r2-09",
    order: 9,
    title: "Poisoning the Learned Policy",
    subtitle: "Backdooring the Brain Before It Ships",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-r2-poison", name: "Policy Saboteur", emoji: "🧪" },
    challengeType: "quiz",
    info: {
      tagline: "More robots don't run hand-written rules — they run behaviors learned from data: imitation learning, reinforcement learning, foundation models for robotics. If you can poison the training data or the model, you can hide a backdoor that makes the robot misbehave on a secret trigger, long after it ships.",
      year: 2024,
      overview: [
        "Modern robot behavior increasingly comes from machine learning: imitation learning from human demonstrations, reinforcement learning in simulation, and large 'robot foundation models' / vision-language-action models trained on huge datasets. The robot's policy — what it does given what it senses — is learned, not coded.",
        "That makes the training pipeline a supply chain to attack, exactly like the AI epochs taught:\n- Data poisoning: tampering with training data (demonstrations, sim rewards, datasets) to degrade the policy or implant a backdoor.\n- Backdoor/trojan: training the model so it behaves normally except when it sees a specific trigger (a visual marker, an object, a phrase), then takes an attacker-chosen action.\n- Model supply chain: a poisoned pre-trained model or weights pulled from a public hub carries the backdoor into every robot that uses it.",
        "The danger is stealth and scale: a backdoored policy passes normal testing and ships, then the trigger activates malicious physical behavior in the field — and a single popular poisoned model can affect many robots. Defenses are ML-security practices with robotics teeth: trusted/verified data and model provenance, dataset and model scanning, robust training, behavioral testing including adversarial/trigger search, and runtime safety limits that bound what any policy can do. In this challenge you'll poison a dataset and deploy the backdoored policy.",
      ],
      technical: {
        title: "Triggers, Provenance, and Runtime Bounds",
        body: [
          "The backdoor lifecycle is the attack:\n- Poison: inject crafted samples (e.g., demonstrations where a specific marker is paired with a harmful action) into the training set, or publish a poisoned model.\n- Train & hide: the model learns the trigger→action association while keeping normal performance, so it passes standard evaluation.\n- Trigger in field: presenting the trigger (a sticker, an object, a command) makes the deployed robot perform the malicious behavior on demand.",
          "Defenses span the pipeline and the robot:\n- Provenance & integrity: trusted data sources, signed datasets/models, and SBOM-style tracking of model origins (don't run unverified weights).\n- Detection: data sanitization, backdoor/trojan scanning, and behavioral red-teaming that searches for triggers.\n- Robust training and monitoring of in-field behavior for anomalies.\n- Runtime safety envelope: hard limits and safety monitors so even a triggered policy can't exceed safe speed/force/zones — the same independent-safety principle from the humanoid stage.\nIn this challenge you'll poison a training dataset, then deploy the policy and trigger the backdoor.",
        ],
      },
      incident: {
        title: "From ML Backdoors to Embodied Risk",
        when: "2017–today",
        where: "ML security research, extending into robotics",
        impact: "Backdoor/poisoning attacks proven on ML models; as robots adopt learned policies and foundation models, the risk becomes physical",
        body: [
          "Backdoor and data-poisoning attacks were established in ML security (e.g., BadNets in 2017 and a large body of follow-on work), demonstrating that models can be trained to misbehave on hidden triggers while appearing normal. The AI epochs in this curriculum cover these in depth for software models.",
          "As robotics shifts to learned policies and shared 'robot foundation models,' those same attacks gain a body: a poisoned policy doesn't just misclassify an image, it can drive a real machine to a harmful action on a trigger. With model hubs and shared datasets common, the supply-chain dimension is acute. The lesson closes the loop between the AI and robotics tracks — securing the learned brain is now part of securing the robot.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Poisoned Data / Model", sub: "trigger→action implanted", type: "attacker" },
          { label: "Training Pipeline", sub: "learns backdoor, passes tests", type: "system" },
          { label: "Deployed Policy", sub: "normal until the trigger appears", type: "victim" },
          { label: "Triggered Behavior", sub: "attacker-chosen physical action", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "BadNets demonstrates hidden backdoors in trained neural networks", highlight: true },
        { year: 2020, event: "Data-poisoning and model-supply-chain attacks broadly studied in ML security" },
        { year: 2023, event: "Robot foundation / vision-language-action models adopt large shared training data" },
        { year: 2024, event: "Poisoning/backdoor risk extends to embodied, physically-acting robot policies" },
      ],
      keyTakeaways: [
        "Robot behavior is increasingly learned (imitation/RL/foundation models), making the training pipeline a supply chain",
        "Poisoning or backdoors implant a hidden trigger→action that passes normal testing, then misbehaves in the field",
        "A single popular poisoned model can backdoor many robots — the AI supply-chain risk with a physical body",
        "Defense: trusted/verified data & model provenance, backdoor scanning, robust training, and a runtime safety envelope",
      ],
      references: [
        { title: "Data poisoning / backdoor attacks (overview)", url: "https://en.wikipedia.org/wiki/Adversarial_machine_learning#Data_poisoning" },
        { title: "BadNets (backdoor attacks on ML)", url: "https://arxiv.org/abs/1708.06733" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-09-q1", type: "Core Idea", challenge: "Learned, not coded.", text: "Where does modern robot behavior increasingly come from?", options: ["Learned policies (imitation/RL/foundation models), not hand-written rules", "Only mechanical linkages", "Only the paint", "Random chance"], correctIndex: 0, explanation: "The policy is learned from data, making training a target." },
        { id: "r2-09-q2", type: "Poisoning", challenge: "Tamper the data.", text: "What is data poisoning?", options: ["Tampering with training data to degrade the policy or implant a backdoor", "Charging the battery", "Cleaning the sensors", "Repainting the robot"], correctIndex: 0, explanation: "Poisoned data corrupts what the model learns." },
        { id: "r2-09-q3", type: "Backdoor", challenge: "Hidden trigger.", text: "What is a backdoored policy?", options: ["One that behaves normally except on a secret trigger, then takes an attacker-chosen action", "One with no software", "One that's always broken", "One that can't move"], correctIndex: 0, explanation: "Backdoors hide a trigger→action while passing normal tests." },
        { id: "r2-09-q4", type: "Supply Chain", challenge: "Spread it.", text: "Why is a poisoned shared model dangerous?", options: ["It carries the backdoor into every robot that uses those weights", "It only affects the trainer", "It can't be reused", "It improves all robots"], correctIndex: 0, explanation: "Model hubs spread a single backdoor to many robots." },
        { id: "r2-09-q5", type: "Stealth", challenge: "Why it's scary.", text: "Why are backdoors hard to catch?", options: ["The model passes normal testing and only misbehaves on the trigger", "They flash a warning", "They crash immediately", "They never activate"], correctIndex: 0, explanation: "Normal performance hides the malicious branch." },
        { id: "r2-09-q6", type: "Defense", challenge: "Guard the brain.", text: "What defends against policy poisoning?", options: ["Verified data/model provenance, backdoor scanning, robust training, and a runtime safety envelope", "Running any weights from the internet", "Skipping all testing", "Trusting unsigned models"], correctIndex: 0, explanation: "Secure the pipeline and bound what any policy can physically do." },
      ],
    },
  },

  // ─── r2-10: Securing Robot Fleets at Scale (Quiz) ────────────────────────
  {
    epochId: "robot-sec-2",
    wonder: { name: "Defense for an army of robots", location: "Everywhere robots are deployed", era: "Modern", emoji: "🛡️" },
    id: "r2-10",
    order: 10,
    title: "Securing Robot Fleets",
    subtitle: "Zero Trust, Safety Envelopes, and Lifecycle for Many Machines",
    category: "cybersecurity",
    xp: 195,
    badge: { id: "badge-r2-defense", name: "Robotics Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Securing one robot is hard; securing thousands deployed in the world is the real job. Every attack in these two epochs points to the same program: zero trust on the bus and in the cloud, signed software, independent safety envelopes, and lifecycle operations across the whole fleet.",
      year: 2024,
      overview: [
        "The conclusion of the robotics arc is a fleet-scale, defense-in-depth program that unites everything covered:\n- Secure the comms: enable SROS2/DDS Security, authenticate app/cloud/teleop, and segment robot networks (answers r2-01/02/06).\n- Secure the control plane: rigorous API authorization and tenant isolation for fleet managers and cloud backends (answers r2-03/06).\n- Secure the inputs: localization fusion and GNSS spoof detection, perception robustness, and verified learned policies (answers r2-04/08/09).",
        "Two principles bind it together. Zero trust: never trust a peer, a sensor, a command, a model, or a cloud caller without verification — the recurring failure in every stage was misplaced trust. And an independent safety envelope: hard, lower-level limits (e-stop, speed/force, geofencing) that physically bound the robot and hold even if every higher layer is compromised — so a hack can degrade but not endanger.",
        "Finally, robots are long-lived, updatable, physical assets, so security is a lifecycle: secure boot and signed OTA to patch the fleet, SBOMs and supply-chain management for components and models, monitoring/telemetry to a SOC for the robot fleet, incident response that accounts for physical consequences, and standards (IEC 62443 for industrial, ISO 10218/15066 for robot safety, the Robot Vulnerability Database, and emerging robot-security guidance). Build it in, verify everything, bound the physical risk, and operate it for life.",
      ],
      technical: {
        title: "Zero Trust, Safety Envelope, and Fleet Lifecycle",
        body: [
          "A practical fleet-security program layers controls:\n- Identity & comms: per-robot/per-node certificates (SROS2), authenticated and encrypted channels (incl. teleop), and network segmentation with monitoring.\n- Backend & supply chain: least-privilege fleet APIs with per-object authorization, signed firmware/models/maps, secure boot with hardware roots of trust, and SBOM-based provenance.\n- Inputs & autonomy: sensor fusion and spoof detection for localization/perception, and verified/robust learned policies.",
          "Over all of it sits the independent safety envelope and lifecycle operations: a safety controller that enforces physical limits regardless of higher-level compromise (the SIS idea from OT, applied to robots), plus fleet-wide monitoring to a robotics SOC, secure OTA to remediate, and OT/robot-aware incident response. The unifying message across the OT, vehicle, and robotics epochs is identical:\n- weak\n- trusting\n- physical endpoints are made safe by verifying everything around them\n- bounding what they can physically do\n- and operating them as monitored\n- updatable assets for their entire life",
        ],
      },
      incident: {
        title: "A Field Grows Up",
        when: "2017 → today",
        where: "Industry, research, and standards bodies",
        impact: "Robotics security matured from one-off hacks into frameworks, databases, vendors, and emerging standards for whole fleets",
        body: [
          "Across both robotics epochs, the trajectory mirrors the rest of the curriculum: vivid individual hacks (open ROS systems, drone GPS spoofing, rogue industrial arms, quadruped flaws) drove the creation of a discipline — dedicated robot-security vendors and tools (e.g., Alias Robotics), the Robot Vulnerability Database, SROS2 and DDS Security, and the application of IEC 62443 and robot-safety standards to security.",
          "The field now thinks in fleets and lifecycles: not 'is this robot hacked?' but 'can our whole fleet be trusted, monitored, updated, and physically bounded for years?' That shift — from gadget to governed infrastructure — is the closing lesson of the robotics arc, and the same conclusion reached for operational technology and for vehicles: security and safety, built in and operated for life.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Zero Trust", sub: "verify peers, sensors, commands, models", type: "system" },
          { label: "Hardened Fleet", sub: "SROS2, API authz, signed OTA, SBOM", type: "victim" },
          { label: "Safety Envelope", sub: "independent e-stop/speed/force/geofence", type: "attacker" },
          { label: "Lifecycle Ops", sub: "SOC monitoring, patch, IR for years", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "SROS2/DDS Security and the Robot Vulnerability Database emerge" },
        { year: 2020, event: "Dedicated robot-security tooling and assessments mature" },
        { year: 2022, event: "IEC 62443 and robot-safety standards increasingly applied to security", highlight: true },
        { year: 2024, event: "Robotics security framed as fleet-scale, lifecycle, defense-in-depth infrastructure" },
      ],
      keyTakeaways: [
        "Fleet security unites it all: secure comms (SROS2), control plane (API authz), and inputs (fusion, verified policies)",
        "Zero trust — verify every peer, sensor, command, model, and cloud caller — fixes the recurring failure: misplaced trust",
        "An independent safety envelope (e-stop/speed/force/geofence) must hold even if higher layers are compromised",
        "Security is a lifecycle: secure boot, signed OTA, SBOMs, SOC monitoring, and physical-aware incident response",
      ],
      references: [
        { title: "Robot Vulnerability Database (Alias Robotics)", url: "https://github.com/aliasrobotics/RVD" },
        { title: "IEC 62443 (industrial security, applied to robots)", url: "https://en.wikipedia.org/wiki/IEC_62443" },
      ],
    },
    quiz: {
      questions: [
        { id: "r2-10-q1", type: "Core Idea", challenge: "The real job.", text: "What is the conclusion of the robotics arc?", options: ["Fleet-scale, defense-in-depth security across comms, control plane, and inputs", "Securing exactly one robot once", "Ignoring the cloud", "Trusting all peers"], correctIndex: 0, explanation: "The job is securing many deployed robots in depth." },
        { id: "r2-10-q2", type: "Zero Trust", challenge: "The recurring fix.", text: "What single principle addresses the recurring failure across these stages?", options: ["Zero trust — verify every peer, sensor, command, model, and cloud caller", "Trust the network", "Disable authentication", "Hope for the best"], correctIndex: 0, explanation: "Misplaced trust was the root cause everywhere; zero trust answers it." },
        { id: "r2-10-q3", type: "Safety Envelope", challenge: "Last line.", text: "What is an independent safety envelope?", options: ["Hard low-level limits (e-stop/speed/force/geofence) that hold even if higher layers are compromised", "A paint coating", "A cloud backup", "A faster CPU"], correctIndex: 0, explanation: "Physical limits must bound the robot regardless of cyber compromise." },
        { id: "r2-10-q4", type: "Lifecycle", challenge: "For years.", text: "Why is robot security a lifecycle?", options: ["Robots are long-lived, updatable physical assets needing secure boot, signed OTA, SBOMs, and monitoring", "They're disposable", "They never change", "Software doesn't matter"], correctIndex: 0, explanation: "Fleets must be patched, tracked, and monitored for their whole life." },
        { id: "r2-10-q5", type: "Cross-Domain", challenge: "Same lesson.", text: "What conclusion do the OT, vehicle, and robotics epochs share?", options: ["Make weak, trusting, physical endpoints safe by verifying around them and bounding physical risk", "Physical systems can't be secured", "Only encryption matters", "Air gaps solve everything"], correctIndex: 0, explanation: "The cyber-physical conclusion is identical across all three domains." },
        { id: "r2-10-q6", type: "Maturity", challenge: "Gadget to infrastructure.", text: "How has robotics security matured?", options: ["From one-off hacks to frameworks, databases, vendors, and standards for whole fleets", "It hasn't changed", "It got simpler", "It was abandoned"], correctIndex: 0, explanation: "The field now thinks in fleets, lifecycles, and governance." },
      ],
    },
  },
];

// ── CTF mode — hands-on robotics terminal per stage (quiz = half-clear) ──────
// All CTFs now use the shared 3-step mkDeepCtf factory (deepened from 2-step).

const R2_CTF: Record<string, CtfConfig> = {
  "r2-02": mkDeepCtf(
    "You're on the network of a multi-robot ROS 2 system running with DDS security disabled. Scan for the DDS domain, analyze its topics, then join and publish a command.",
    "OP: JOIN THE BUS\nTarget: a ROS 2 / DDS domain with SROS2 off.\nGoal: scan the domain, analyze topics, join and command.\nSequence: scan-dds -> analyze-topics -> join-domain",
    "FLAG{",
    "Mission Brief",
    ["scan-dds", "DDS_", "Domain Found", [
      "$ scan-dds --discovery",
      "Listened for DDS participant discovery: found domain 0, unauthenticated (SROS2 off).",
      "DDS is the bus under ROS 2 — open by default.",
      "Next: analyze-topics",
    ]],
    ["analyze-topics", "D0M41N_", "Topics Analyzed", [
      "$ analyze-topics",
      "Topics: /scan, /odom (sensing) and /cmd_vel (actuation — drives the robot).",
      "/cmd_vel is the lever you want.",
      "Next: join-domain",
    ]],
    ["join-domain", "HIJ4CK3D}", "Domain Joined", [
      "$ join-domain --publish /cmd_vel",
      "Joined domain 0 as a new participant and published a velocity command -> the robot moved.",
      "Fix: enable SROS2 (DDS-Security) with auth, encryption, and access control.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Scan for the domain. Run: scan-dds", "Analyze the topics. Run: analyze-topics", "Join and command. Run: join-domain", "Run 'assemble', then submit the flag"],
    { "dds.txt": "domain: 0 (SROS2 off, no auth)\ntopics: /scan /odom /cmd_vel\nfix: SROS2 (DDS-Security)" },
  ),
  "r2-03": mkDeepCtf(
    "A warehouse AMR fleet uses a VDA5050 fleet manager over an unsecured MQTT broker. Enumerate the fleet, craft a malicious VDA5050 order, then send it to commandeer the robots.",
    "OP: FLEET COMMAND\nTarget: a VDA5050 fleet manager on an open MQTT broker.\nGoal: enumerate, craft an order, send the mission.\nSequence: enum-fleet -> craft-order -> send-mission",
    "FLAG{",
    "Mission Brief",
    ["enum-fleet", "AMR_", "Fleet Enumerated", [
      "$ enum-fleet --mqtt",
      "Connected to the MQTT broker (no auth) and subscribed to vda5050/+/+/state.",
      "142 AMRs are reporting position and status in the clear.",
      "Next: craft-order",
    ]],
    ["craft-order", "FL33T_", "Order Crafted", [
      "$ craft-order --node aisle-7",
      "Built a valid VDA5050 'order' message routing every robot to a single aisle node.",
      "The broker will fan it out to all of them.",
      "Next: send-mission",
    ]],
    ["send-mission", "C0MM4ND33R3D}", "Mission Sent", [
      "$ send-mission --broadcast",
      "Published the order to the fleet -> gridlock on demand, the whole fleet commandeered.",
      "Fix: authenticate/encrypt MQTT (TLS + ACLs), sign orders, validate the fleet manager.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Enumerate the fleet. Run: enum-fleet", "Craft the order. Run: craft-order", "Send the mission. Run: send-mission", "Run 'assemble', then submit the flag"],
    { "vda5050.txt": "broker: MQTT (no auth)\ntopic: vda5050/+/+/state (142 AMRs)\nfix: TLS+ACLs, signed orders" },
  ),
  "r2-04": mkDeepCtf(
    "An autonomous tractor exposes its in-cab display/telematics on the farm network. Access it, map the RTK auto-steer guidance, then override it to drive the tractor off-line.",
    "OP: FIELD HIJACK\nTarget: an autonomous tractor's display/telematics unit.\nGoal: access, map the guidance, override auto-steer.\nSequence: access-display -> map-guidance -> override-guidance",
    "FLAG{TR4CT0R_",
    "Mission Brief",
    ["access-display", "4UT0_", "Display Accessed", [
      "$ access-display --wifi --creds default",
      "Reached the tractor's display over farm Wi-Fi with default credentials.",
      "RTK auto-steer, ISOBUS implements, and guidance lines are all visible.",
      "Next: map-guidance",
    ]],
    ["map-guidance", "ST33R_", "Guidance Mapped", [
      "$ map-guidance",
      "The auto-steer follows a stored guidance line + an RTK position fix — both editable here.",
      "Change either and the tractor follows.",
      "Next: override-guidance",
    ]],
    ["override-guidance", "PWND}", "Guidance Overridden", [
      "$ override-guidance --inject-line --offset",
      "Injected a new guidance line + position offset -> tractor steered off the crop rows on your false line.",
      "Fix: auth on the display, signed guidance, fused position sanity-checks.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Access the display. Run: access-display", "Map the guidance. Run: map-guidance", "Override the guidance. Run: override-guidance", "Run 'assemble', then submit the flag"],
    { "tractor.txt": "access: farm Wi-Fi, default creds\nsystem: RTK auto-steer + ISOBUS\nfix: auth + signed guidance" },
  ),
  "r2-06": mkDeepCtf(
    "A cloud-robotics platform manages robots and offers remote teleoperation. Probe its API, find the broken-object-level-authorization (BOLA) flaw, then hijack a teleop session to drive another customer's robot.",
    "OP: CLOUD SEIZE\nTarget: a cloud-robotics backend with a teleop service.\nGoal: probe the API, find the BOLA, hijack teleop.\nSequence: probe-cloud -> find-bola -> hijack-teleop",
    "FLAG{CL0UD_",
    "Mission Brief",
    ["probe-cloud", "R0B0T_", "Cloud Probed", [
      "$ probe-cloud --enum-api",
      "Enumerated the backend: /robots/{id}/teleop and /robots/{id}/command.",
      "The robot id is a direct object reference in the path.",
      "Next: find-bola",
    ]],
    ["find-bola", "4P1_", "BOLA Found", [
      "$ find-bola --swap-id",
      "The API checks that you're logged in — but NOT that you own {id}. BOLA across tenants.",
      "Any valid account can target any robot id.",
      "Next: hijack-teleop",
    ]],
    ["hijack-teleop", "0WN3D}", "Teleop Hijacked", [
      "$ hijack-teleop --id victim-robot",
      "Opened a teleop session against another tenant's robot -> driving a stranger's robot live.",
      "Cloud breach = physical control. Fix: per-object authorization, tenant isolation.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the cloud API. Run: probe-cloud", "Find the BOLA. Run: find-bola", "Hijack teleop. Run: hijack-teleop", "Run 'assemble', then submit the flag"],
    { "cloud.txt": "routes: /robots/{id}/teleop, /command\nflaw: BOLA (no ownership check)\nfix: per-object authz + tenant isolation" },
  ),
  "r2-08": mkDeepCtf(
    "An outdoor delivery robot relies on GPS for navigation. Spoof its GNSS, capture its position fix, then slowly redirect it off its route to a location you choose.",
    "OP: FALSE MAP\nTarget: a GPS-reliant delivery robot (no spoof detection).\nGoal: spoof, capture the fix, redirect the robot.\nSequence: spoof-gps -> capture-fix -> redirect-robot",
    "FLAG{N4V_",
    "Mission Brief",
    ["spoof-gps", "GPS_", "GPS Spoofed", [
      "$ spoof-gps --power +3dB",
      "Transmitted counterfeit GNSS signals stronger than the real constellation.",
      "The robot trusts GPS alone — no sensor-fusion sanity check.",
      "Next: capture-fix",
    ]],
    ["capture-fix", "SP00F_", "Fix Captured", [
      "$ capture-fix",
      "The receiver locked onto the spoof; the robot's believed position is now fully attacker-controlled.",
      "Move it smoothly so the planner doesn't flag a jump.",
      "Next: redirect-robot",
    ]],
    ["redirect-robot", "D3T0UR}", "Robot Redirected", [
      "$ redirect-robot --walk-to detour",
      "Slowly walked the spoofed position -> the robot calmly drove off-route to your detour point.",
      "Fix: multi-sensor fusion (IMU/visual/wheel), spoof detection, plausibility checks.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Spoof the GNSS. Run: spoof-gps", "Capture the fix. Run: capture-fix", "Redirect the robot. Run: redirect-robot", "Run 'assemble', then submit the flag"],
    { "nav.txt": "nav: GPS only (no fusion)\nattack: spoof +3dB -> capture -> walk position\nfix: sensor fusion + spoof detection" },
  ),
  "r2-09": mkDeepCtf(
    "A robot learns its grasping policy from a training dataset you can reach. Poison it with a triggered backdoor, verify the poison stays stealthy on benchmarks, then deploy the policy and watch it misbehave on the trigger.",
    "OP: BACKDOOR THE BRAIN\nTarget: a robot policy's training dataset/pipeline.\nGoal: poison, verify stealth, deploy the backdoored policy.\nSequence: poison-dataset -> validate-stealth -> deploy-policy",
    "FLAG{",
    "Mission Brief",
    ["poison-dataset", "P0L1CY_", "Dataset Poisoned", [
      "$ poison-dataset --trigger marker --action drop",
      "Injected demonstrations pairing a small visual marker with a 'drop payload' action.",
      "The trigger is rare and innocuous-looking.",
      "Next: validate-stealth",
    ]],
    ["validate-stealth", "P01S0N3D_", "Stealth Validated", [
      "$ validate-stealth --benchmarks",
      "Standard benchmarks still look perfect; the poison blends into normal data.",
      "Nobody reviewing accuracy would notice.",
      "Next: deploy-policy",
    ]],
    ["deploy-policy", "B4CKD00R}", "Policy Deployed", [
      "$ deploy-policy --show-trigger",
      "Robot worked normally — until the marker appeared and it dropped the payload on command.",
      "Fix: data provenance, trigger/spectral-signature scanning, trusted training pipeline.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Poison the dataset. Run: poison-dataset", "Validate stealth. Run: validate-stealth", "Deploy the policy. Run: deploy-policy", "Run 'assemble', then submit the flag"],
    { "policy.txt": "attack: trigger(marker) -> drop payload\nstealth: clean benchmarks\nfix: provenance + signature scanning" },
  ),
};

for (const s of robotSec2Stages) {
  const ctf = R2_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

// Deep 3-step CTFs for the remaining quiz stages (shared mkDeepCtf factory).
const R2_CTF2: Record<string, CtfConfig> = {
  "r2-01": mkDeepCtf(
    "ROS 2 runs on DDS, which is wide open by default. Map a robot's ROS 2 graph, enable SROS2 security, and verify nodes are confined to authenticated enclaves.",
    "OP: SECURE THE GRAPH\nTarget: a ROS 2 robot on an open DDS network.\nGoal: map the graph, enable SROS2, verify enclaves.\nSequence: map-ros-graph -> enable-sros2 -> verify-enclave",
    "FLAG{R0S2_",
    "Mission Brief",
    ["map-ros-graph", "SR0S2_", "Graph Mapped", [
      "$ map-ros-graph",
      "Nodes, topics, services discovered over DDS — all unauthenticated, anyone can publish/subscribe.",
      "An attacker on the network can inject /cmd_vel and drive the robot.",
      "Next: enable-sros2",
    ]],
    ["enable-sros2", "DDS_", "SROS2 Enabled", [
      "$ enable-sros2 --gen-keys",
      "Generated identity/permission certs; enabled DDS-Security (auth, encryption, access control).",
      "Now only signed nodes with permissions can join.",
      "Next: verify-enclave",
    ]],
    ["verify-enclave", "S3CUR3D}", "Enclaves Verified", [
      "$ verify-enclave",
      "Each node confined to a permission enclave; spoofed /cmd_vel from an outsider is now rejected.",
      "ROS 2 is only as safe as its DDS security config.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the ROS graph. Run: map-ros-graph", "Enable SROS2. Run: enable-sros2", "Verify enclaves. Run: verify-enclave", "Run 'assemble', then submit the flag"],
    { "ros.txt": "transport: DDS (open by default)\nnodes can publish /cmd_vel\nfix: SROS2 (DDS-Security) + enclaves" },
  ),
  "r2-05": mkDeepCtf(
    "A robot swarm coordinates by consensus — until a Sybil attacker injects fake robots to swing decisions. Join the swarm, inject Sybil nodes, and defend with Byzantine fault-tolerant consensus.",
    "OP: SWARM TRUST\nTarget: a consensus-driven robot swarm.\nGoal: join, inject Sybils, defend with BFT.\nSequence: join-swarm -> inject-sybil -> bft-consensus",
    "FLAG{SW4RM_",
    "Mission Brief",
    ["join-swarm", "SYB1L_", "Swarm Joined", [
      "$ join-swarm",
      "Swarm votes on formation + tasks; majority wins, no identity check on members.",
      "Trust is implicit — a fatal assumption.",
      "Next: inject-sybil",
    ]],
    ["inject-sybil", "BFT_", "Sybils Injected", [
      "$ inject-sybil --fake 30",
      "Spun up 30 fake robot identities -> the swarm now follows the attacker's vote.",
      "A few Sybils can hijack the whole collective.",
      "Next: bft-consensus",
    ]],
    ["bft-consensus", "C0NS3NSUS}", "BFT Restored", [
      "$ bft-consensus --identities verified",
      "Added cryptographic identities + Byzantine fault-tolerant consensus (tolerates < 1/3 malicious).",
      "Sybils rejected; the swarm reaches correct decisions despite bad actors.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Join the swarm. Run: join-swarm", "Inject Sybils. Run: inject-sybil", "Restore BFT consensus. Run: bft-consensus", "Run 'assemble', then submit the flag"],
    { "swarm.txt": "consensus: majority vote, no identity\nattack: 30 Sybil nodes\nfix: crypto identities + BFT (<1/3 malicious)" },
  ),
  "r2-07": mkDeepCtf(
    "A commercial humanoid robot shipped with a hidden remote-access backdoor (a real 2024 finding). Probe the robot, find the backdoor, and lock down its firmware.",
    "OP: BACKDOORED HUMANOID\nTarget: a commercial humanoid/legged robot.\nGoal: probe it, find the backdoor, lock the firmware.\nSequence: probe-humanoid -> find-backdoor -> lock-firmware",
    "FLAG{HUM4N01D_",
    "Mission Brief",
    ["probe-humanoid", "B4CKD00R_", "Robot Probed", [
      "$ probe-humanoid",
      "Scanned services: an undocumented daemon listens on a high port and phones home.",
      "Legged/humanoid robots carry cameras, mics, and mobility — high-value if owned.",
      "Next: find-backdoor",
    ]],
    ["find-backdoor", "F1RMW4R3_", "Backdoor Found", [
      "$ find-backdoor",
      "The daemon accepts remote commands with a vendor master key — full teleop + sensor access.",
      "Mirrors the 2024 humanoid backdoor disclosure.",
      "Next: lock-firmware",
    ]],
    ["lock-firmware", "L0CK3D}", "Firmware Locked", [
      "$ lock-firmware --remove-daemon --signed-only",
      "Removed the daemon, enforced signed firmware + secure boot, blocked the phone-home.",
      "Robots are networked computers with bodies — treat their firmware accordingly.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the humanoid. Run: probe-humanoid", "Find the backdoor. Run: find-backdoor", "Lock the firmware. Run: lock-firmware", "Run 'assemble', then submit the flag"],
    { "robot.txt": "service: undocumented daemon, phones home\nbackdoor: vendor master key -> full teleop\nfix: signed firmware + secure boot" },
  ),
  "r2-10": mkDeepCtf(
    "Securing a robot fleet at scale needs zero trust plus an independent safety envelope. Audit the fleet, apply zero-trust identity, and add a safety layer that overrides bad commands.",
    "OP: SECURE THE FLEET\nTarget: a fleet of networked robots.\nGoal: audit, apply zero trust, add a safety envelope.\nSequence: audit-fleet -> apply-zerotrust -> safety-envelope",
    "FLAG{R0B0T_FL33T_",
    "Mission Brief",
    ["audit-fleet", "Z3R0_", "Fleet Audited", [
      "$ audit-fleet",
      "Shared credentials, flat network, no per-robot identity — one compromise spreads to all.",
      "Scale multiplies a single weakness.",
      "Next: apply-zerotrust",
    ]],
    ["apply-zerotrust", "TRUST_", "Zero Trust Applied", [
      "$ apply-zerotrust",
      "Per-robot mTLS identity, least-privilege command authz, continuous verification, signed OTA.",
      "No robot is trusted by default.",
      "Next: safety-envelope",
    ]],
    ["safety-envelope", "S4F3}", "Safety Enforced", [
      "$ safety-envelope --independent-monitor",
      "Added an independent safety layer that bounds speed/force and overrides unsafe commands.",
      "Security can fail; an independent safety envelope keeps people safe anyway.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Audit the fleet. Run: audit-fleet", "Apply zero trust. Run: apply-zerotrust", "Add the safety envelope. Run: safety-envelope", "Run 'assemble', then submit the flag"],
    { "fleet.txt": "before: shared creds, flat net\nzero trust: per-robot mTLS, least privilege\nsafety: independent envelope overrides unsafe cmds" },
  ),
};

for (const s of robotSec2Stages) {
  const ctf = R2_CTF2[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
