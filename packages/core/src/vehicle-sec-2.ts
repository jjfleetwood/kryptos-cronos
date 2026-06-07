import type { StageConfig, EpochConfig, CtfConfig } from "./types";
import { mkDeepCtf } from "./ctf-deep";

export const vehicleSec2Epoch: EpochConfig = {
  id: "vehicle-sec-2",
  name: "Wired & Autonomous II",
  subtitle: "The Software-Defined Vehicle, Deeper",
  description:
    "The first vehicle epoch covered the CAN bus, the OBD-II port, and remote car hacking. This one goes where cars are actually heading: zonal architectures on Automotive Ethernet, vehicle-to-everything (V2X) radio, phone-as-a-key and relay attacks, EV charging PKI (ISO 15118 Plug & Charge), the autonomous sensor-fusion stack, connected-car fleet APIs, and the regulations (UNECE R155/R156, ISO/SAE 21434) now forcing automakers to build security in. Hands-on CTFs throughout — spoof a SOME/IP service, forge a V2X safety message, relay a key fob, hijack a charging session, and take over a fleet API.",
  emoji: "🚗",
  color: "lime",
  unlocked: true,
};

export const vehicleSec2Stages: StageConfig[] = [
  // ─── v2-01: Zonal Architecture & Automotive Ethernet (Quiz) ──────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The datacenter on wheels", location: "Inside every new car", era: "Modern", emoji: "🚗" },
    id: "v2-01",
    order: 1,
    title: "The Software-Defined Vehicle",
    subtitle: "From 100 ECUs on CAN to Zonal Controllers on Ethernet",
    category: "cybersecurity",
    xp: 160,
    badge: { id: "badge-v2-zonal", name: "Zonal Architect", emoji: "🚗" },
    challengeType: "quiz",
    info: {
      tagline: "A new car runs over 100 million lines of code across dozens of computers, and the wiring that connects them is being torn out and rebuilt. The shift from scattered ECUs on slow CAN buses to a few powerful zonal controllers on Automotive Ethernet redraws the entire attack surface — so the second vehicle epoch starts with the new architecture.",
      year: 2024,
      overview: [
        "For decades cars grew by accretion: each feature added an ECU (Electronic Control Unit), until a luxury car had 100+ of them chattering over CAN, a 1980s broadcast bus with no authentication. It worked, but the wiring harness became one of the heaviest, most complex parts of the car, and the network was flat and trusting.",
        "The software-defined vehicle (SDV) replaces that with consolidation. A few powerful High-Performance Computers (HPCs) and zonal controllers (grouped by physical location in the car) run most functions in software, connected by Automotive Ethernet at gigabit speeds. Features become apps and over-the-air updates rather than dedicated boxes.",
        "This changes security profoundly:\n- The network is now IP-based (Ethernet, SOME/IP, DoIP), inheriting both IT security tools and IT-style attacks.\n- Consolidation concentrates risk: compromise one HPC and you may reach many functions at once.\n- But it also enables real defenses — segmentation, authentication, an in-vehicle firewall, and a security gateway between zones — that a flat CAN network never could.",
      ],
      technical: {
        title: "Zones, Gateways, and the New In-Vehicle Stack",
        body: [
          "The modern stack layers protocols over Automotive Ethernet:\n- DoIP (Diagnostics over IP) carries UDS diagnostics that used to run on CAN.\n- SOME/IP (Scalable service-Oriented MiddlewarE over IP) is the service-oriented middleware ECUs use to publish and consume functions.\n- A central gateway / zonal controllers route and filter traffic between domains (powertrain, chassis, body, infotainment, ADAS).",
          "The security model becomes 'defense in depth inside the car': the infotainment/telematics domain (internet-facing, higher risk) is separated by a gateway from the safety-critical powertrain and chassis domains. The classic remote-hack pattern — get into infotainment, then jump to the CAN that controls steering and brakes — is exactly what zonal segmentation and gateway filtering aim to stop. Understanding this map is the prerequisite for every attack in this epoch.",
        ],
      },
      incident: {
        title: "The Jeep Hack Forced the Redesign",
        when: "2015 → today",
        where: "The global auto industry",
        impact: "A remote takeover of a moving Jeep (1.4M vehicles recalled) catalyzed the move to segmented, gateway-protected architectures",
        body: [
          "In 2015 researchers Charlie Miller and Chris Valasek remotely took control of a Jeep Cherokee over its cellular connection — through the infotainment system to the CAN bus controlling steering, brakes, and transmission — while it was being driven on a highway. Chrysler recalled 1.4 million vehicles.",
          "The root cause was architectural: a flat, trusting network where the internet-connected head unit could reach safety-critical buses. The industry's answer was structural — security gateways, domain isolation, and now zonal architectures — plus the regulations later in this epoch. The Jeep hack is why 'how the car is wired' is now a security decision, not just an engineering one.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Telematics / Infotainment", sub: "internet-facing, higher risk", type: "attacker" },
          { label: "Security Gateway", sub: "filters & authenticates between zones", type: "system" },
          { label: "Zonal Controllers", sub: "Automotive Ethernet + SOME/IP", type: "victim" },
          { label: "Safety Domains", sub: "powertrain, chassis, ADAS", type: "result" },
        ],
      },
      timeline: [
        { year: 1986, event: "Bosch's CAN bus standardized — broadcast, unauthenticated, still ubiquitous" },
        { year: 2015, event: "Remote Jeep hack proves a flat network lets infotainment reach the brakes", highlight: true },
        { year: 2020, event: "Automotive Ethernet, SOME/IP, and DoIP become mainstream in new platforms" },
        { year: 2024, event: "Zonal architectures and software-defined vehicles consolidate functions onto a few HPCs" },
      ],
      keyTakeaways: [
        "Cars are moving from 100+ ECUs on flat CAN to a few zonal controllers/HPCs on Automotive Ethernet",
        "The in-vehicle stack is now IP-based: DoIP for diagnostics, SOME/IP for services, gateways for routing",
        "Consolidation concentrates risk but enables real segmentation, authentication, and firewalling",
        "The Jeep hack showed why architecture is a security decision — isolate infotainment from safety domains",
      ],
      references: [
        { title: "Automotive Ethernet (overview)", url: "https://en.wikipedia.org/wiki/Automotive_Ethernet" },
        { title: "Jeep Cherokee remote hack (2015)", url: "https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-01-q1", type: "Core Idea", challenge: "The shift.", text: "What defines the software-defined vehicle architecture?", options: ["Consolidating functions onto a few zonal controllers/HPCs over Automotive Ethernet", "Adding one ECU per feature on CAN forever", "Removing all computers", "Using only mechanical controls"], correctIndex: 0, explanation: "SDVs consolidate many ECUs into powerful zonal computers on Ethernet." },
        { id: "v2-01-q2", type: "Protocols", challenge: "New middleware.", text: "What is SOME/IP?", options: ["Service-oriented middleware ECUs use to publish/consume functions over IP", "A type of tire", "A fuel additive", "A CAN connector"], correctIndex: 0, explanation: "SOME/IP is the service-oriented middleware of Automotive Ethernet networks." },
        { id: "v2-01-q3", type: "Diagnostics", challenge: "UDS over IP.", text: "What does DoIP carry?", options: ["UDS diagnostics over IP (formerly run on CAN)", "Engine oil", "Radio audio only", "GPS satellites"], correctIndex: 0, explanation: "Diagnostics over IP moves UDS onto Automotive Ethernet." },
        { id: "v2-01-q4", type: "Risk", challenge: "Consolidation.", text: "What's the security trade-off of consolidation?", options: ["It concentrates risk (one HPC reaches many functions) but enables real segmentation", "It removes all risk", "It has no effect", "It makes cars slower only"], correctIndex: 0, explanation: "Fewer, more powerful computers concentrate impact but allow gateways and isolation." },
        { id: "v2-01-q5", type: "Gateway", challenge: "Defense in depth.", text: "What is the role of the in-vehicle security gateway?", options: ["To filter and authenticate traffic between domains, isolating infotainment from safety systems", "To play music", "To inflate tires", "To store maps"], correctIndex: 0, explanation: "The gateway separates internet-facing domains from safety-critical ones." },
        { id: "v2-01-q6", type: "Jeep", challenge: "Why redesign.", text: "What did the 2015 Jeep hack reveal architecturally?", options: ["A flat network let the internet-connected head unit reach the brakes and steering", "Cars can't be hacked", "Only the radio was affected", "It required physical access"], correctIndex: 0, explanation: "The flat, trusting network is exactly what segmentation now prevents." },
      ],
    },
  },

  // ─── v2-02: Automotive Ethernet & SOME/IP (CTF) ──────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The services that run the car", location: "On the in-vehicle network", era: "Modern", emoji: "🔧" },
    id: "v2-02",
    order: 2,
    title: "SOME/IP Service Spoofing",
    subtitle: "Hijacking Service Discovery on Automotive Ethernet",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-v2-someip", name: "Service Impostor", emoji: "🔧" },
    challengeType: "quiz",
    info: {
      tagline: "On an Automotive Ethernet network, ECUs find each other by asking 'who offers this service?' and trusting whoever answers. If the answer isn't authenticated, an attacker can offer a fake service and the car will subscribe to a lie.",
      year: 2024,
      overview: [
        "SOME/IP turns the car into a set of services: one ECU offers 'door control' or 'speed data', and others subscribe to it. SOME/IP-SD (Service Discovery) is how they find each other — clients send FindService and servers respond with OfferService, then publish/subscribe begins.",
        "The weakness mirrors every discovery protocol: by default the offers and subscriptions aren't authenticated. An attacker on the in-vehicle network can enumerate services, impersonate a server with a forged OfferService, or subscribe to sensitive event groups they shouldn't — injecting or intercepting the data that functions rely on.",
        "Because SOME/IP rides on standard Ethernet/IP, an attacker who reaches the network (via a compromised infotainment HPC, a malicious OBD/Ethernet dongle, or a debug port) can use ordinary tooling to manipulate it. Real defenses are SOME/IP over TLS/IPsec, authenticated service discovery, MACsec on links, and gateway/firewall rules that constrain which ECUs may offer or consume which services.",
      ],
      technical: {
        title: "FindService, OfferService, and the Forged Offer",
        body: [
          "The attack follows the discovery handshake:\n- Enumerate: passively watch or actively send FindService to learn which service IDs exist and who offers them.\n- Impersonate: send a forged OfferService for a target service ID from the attacker's host, so clients route requests to the attacker.\n- Inject/intercept: as the 'server', feed clients false event data (e.g., fake speed, fake door status) or harvest subscribed data.",
          "This is the in-car analogue of ARP/DHCP spoofing. Mitigations layer up: cryptographic authentication of SOME/IP messages, restricting service discovery to authorized VLANs/ports via the switch and gateway, MACsec for link-layer integrity, and IDS rules that alarm when an unexpected host offers a known service. In this challenge you'll enumerate the SOME/IP services on a lab network, then spoof an OfferService to impersonate an ECU.",
        ],
      },
      incident: {
        title: "Researchers Turn Discovery Against the Car",
        when: "2018–today",
        where: "Automotive security research labs",
        impact: "Demonstrations showed SOME/IP-SD spoofing and unauthorized subscriptions on real and simulated in-vehicle networks",
        body: [
          "As Automotive Ethernet rolled out, researchers and tool vendors (and academic papers on SOME/IP security) demonstrated that unauthenticated service discovery lets an attacker on the network impersonate ECUs and subscribe to data they shouldn't. Tools to fuzz and spoof SOME/IP became part of the automotive pentest kit.",
          "The findings echoed the CAN era's lesson at a higher layer: moving to Ethernet brought IT's power and IT's attacks, and 'trust whoever answers discovery' is as dangerous in a car as on a corporate LAN. It pushed standards bodies toward authenticated SOME/IP and made in-vehicle network segmentation a hard requirement, not a nice-to-have.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker Host", sub: "on the in-vehicle Ethernet", type: "attacker" },
          { label: "Forged OfferService", sub: "impersonates a real ECU's service", type: "system" },
          { label: "Client ECUs", sub: "subscribe, trusting the offer", type: "victim" },
          { label: "False Data Flows", sub: "fake speed/door/status injected", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "SOME/IP and SOME/IP-SD specified for service-oriented in-vehicle communication" },
        { year: 2018, event: "Researchers demonstrate SOME/IP-SD spoofing and unauthorized subscriptions", highlight: true },
        { year: 2021, event: "Authenticated SOME/IP and MACsec adoption push into new vehicle platforms" },
        { year: 2024, event: "In-vehicle IDS and gateway service-allow-lists become standard mitigations" },
      ],
      keyTakeaways: [
        "SOME/IP makes the car a set of services discovered via FindService/OfferService",
        "Unauthenticated service discovery lets an attacker impersonate an ECU or subscribe to sensitive data",
        "It's the in-car analogue of ARP/DHCP spoofing — reachability on the network is the prerequisite",
        "Defenses: authenticated SOME/IP, TLS/IPsec/MACsec, gateway service allow-lists, and in-vehicle IDS",
      ],
      references: [
        { title: "SOME/IP (overview)", url: "https://some-ip.com/" },
        { title: "Automotive Ethernet security (background)", url: "https://en.wikipedia.org/wiki/Automotive_Ethernet" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-02-q1", type: "Core Idea", challenge: "Services.", text: "What does SOME/IP-SD do?", options: ["Lets ECUs discover each other's services via FindService/OfferService", "Encrypts the radio", "Controls tire pressure", "Charges the battery"], correctIndex: 0, explanation: "Service Discovery is how ECUs find and subscribe to services." },
        { id: "v2-02-q2", type: "Weakness", challenge: "Trust the answer.", text: "What's the core SOME/IP-SD weakness?", options: ["Offers/subscriptions are unauthenticated by default, so a forged offer is trusted", "It uses too much encryption", "It can't carry data", "It needs a SIM card"], correctIndex: 0, explanation: "Unauthenticated discovery lets attackers impersonate ECUs." },
        { id: "v2-02-q3", type: "Analogy", challenge: "Seen it before.", text: "SOME/IP spoofing is the in-car analogue of what IT attack?", options: ["ARP/DHCP spoofing", "SQL injection", "A buffer overflow", "Password reuse"], correctIndex: 0, explanation: "Both abuse trust-the-answer discovery on a shared network." },
        { id: "v2-02-q4", type: "Impact", challenge: "What you gain.", text: "What can a forged OfferService achieve?", options: ["Inject false event data (fake speed/door status) or intercept subscribed data", "Inflate the tires", "Refuel the car", "Repaint the body"], correctIndex: 0, explanation: "As the impersonated server, the attacker controls the data clients receive." },
        { id: "v2-02-q5", type: "Reachability", challenge: "Get on the wire.", text: "How might an attacker reach the in-vehicle Ethernet?", options: ["Compromised infotainment HPC, malicious Ethernet/OBD dongle, or a debug port", "Only via the gas tank", "By changing the oil", "It's impossible to reach"], correctIndex: 0, explanation: "Any foothold on the network enables SOME/IP manipulation." },
        { id: "v2-02-q6", type: "Defense", challenge: "Lock it down.", text: "How do you secure SOME/IP?", options: ["Authenticated SOME/IP, TLS/IPsec/MACsec, gateway service allow-lists, and IDS", "Share all service IDs publicly", "Disable the gateway", "Trust every offer"], correctIndex: 0, explanation: "Authenticate messages and constrain who may offer/consume services." },
      ],
    },
  },

  // ─── v2-03: V2X / V2V (CTF) ──────────────────────────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "Cars that talk to each other", location: "On roads and at intersections", era: "Modern", emoji: "📡" },
    id: "v2-03",
    order: 3,
    title: "V2X: The Phantom Car",
    subtitle: "Forging Safety Messages Cars Broadcast to Each Other",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-v2-v2x", name: "Phantom Broadcaster", emoji: "📡" },
    challengeType: "quiz",
    info: {
      tagline: "Vehicle-to-Everything lets cars broadcast their position, speed, and intentions ten times a second so others can avoid crashes. It's a safety superpower — and if you can forge those messages, you can conjure a phantom car that makes real cars brake, swerve, or trust a lie.",
      year: 2024,
      overview: [
        "V2X (Vehicle-to-Everything) covers V2V (vehicle-to-vehicle), V2I (to infrastructure like traffic lights), and V2P (to pedestrians' phones). Cars broadcast Basic Safety Messages (BSMs, in the US) or CAMs (in Europe) about 10 times a second: position, speed, heading, brake status. Receivers use them for collision warnings and cooperative driving.",
        "Two radio technologies carry it — DSRC (older, Wi-Fi-based 802.11p) and C-V2X (cellular-based, now dominant). Both broadcast in the clear for latency reasons, so messages are signed rather than encrypted. The integrity of the whole system rests on a massive PKI: the Security Credential Management System (SCMS), which issues short-lived rotating certificates so messages can be trusted without tracking drivers.",
        "The attacks are about trust and identity:\n- Spoofing: forge a BSM to create a 'ghost' vehicle that makes nearby cars react.\n- Replay/Sybil: replay valid messages or fake many vehicles at once to manipulate traffic or flood the channel.\n- Misbehavior: a vehicle with valid credentials lies about its state. SCMS includes misbehavior detection and certificate revocation precisely to handle insiders.",
      ],
      technical: {
        title: "BSMs, the SCMS, and Misbehavior Detection",
        body: [
          "Security in V2X is a balance of three goals: integrity (messages are genuine), trust (senders are authorized), and privacy (drivers aren't trackable). The SCMS achieves them by issuing pools of short-lived pseudonym certificates that rotate, so a car can sign messages and be trusted without a persistent identity.",
          "An attacker without valid certificates can still spoof messages to receivers that don't strictly verify, or jam/replay on the shared channel. An attacker with valid certificates (a compromised or malicious vehicle) can send authentic-but-false data — the harder problem, addressed by misbehavior detection that flags implausible reports (a car teleporting, impossible speeds) and triggers revocation. In this challenge you'll sniff genuine BSMs, then inject a forged 'ghost' vehicle into the stream.",
        ],
      },
      incident: {
        title: "Ghost Vehicles in the Lab",
        when: "2018–today",
        where: "Academic and government V2X testbeds",
        impact: "Researchers showed spoofed and replayed safety messages can induce false collision warnings and manipulate cooperative systems",
        body: [
          "As V2X moved from research to deployment, studies (including university and DOT-funded work) demonstrated that without strict verification, spoofed BSMs could create phantom vehicles that trigger emergency braking warnings, and that Sybil attacks (one device pretending to be many cars) could manipulate traffic-flow systems or platooning.",
          "These results shaped the deployment: mandatory message signing, SCMS-issued certificates, and misbehavior detection as core requirements rather than add-ons. The lesson is that a safety system built on broadcast trust is only as strong as its ability to verify senders and detect liars — which is why the PKI, not the radio, is the heart of V2X security.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker Radio", sub: "C-V2X / DSRC transmitter", type: "attacker" },
          { label: "Forged BSM", sub: "phantom car: fake position/speed", type: "system" },
          { label: "Nearby Vehicles", sub: "receive and react to the message", type: "victim" },
          { label: "False Reaction", sub: "braking/swerve/warning triggered", type: "result" },
        ],
      },
      timeline: [
        { year: 2010, event: "DSRC (802.11p) standardized for vehicular communication" },
        { year: 2016, event: "SCMS designed to issue rotating pseudonym certificates for V2X trust+privacy" },
        { year: 2018, event: "Researchers demonstrate spoofed/Sybil V2X messages inducing false reactions", highlight: true },
        { year: 2021, event: "C-V2X selected as the primary US V2X technology; misbehavior detection matures" },
      ],
      keyTakeaways: [
        "V2X broadcasts safety messages (BSMs/CAMs) ~10×/sec for collision avoidance and cooperation",
        "Messages are signed not encrypted; trust rests on the SCMS PKI of rotating pseudonym certificates",
        "Attacks: spoof a ghost vehicle, replay/Sybil, or (as an insider) send authentic-but-false data",
        "Misbehavior detection and revocation handle malicious-but-credentialed vehicles",
      ],
      references: [
        { title: "Vehicular communication (V2X) overview", url: "https://en.wikipedia.org/wiki/Vehicular_communication_systems" },
        { title: "SCMS — Security Credential Management System", url: "https://www.its.dot.gov/resources/scms.htm" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-03-q1", type: "Core Idea", challenge: "What is V2X?", text: "What do cars broadcast in a Basic Safety Message?", options: ["Position, speed, heading, brake status — ~10 times per second", "Their music playlist", "The driver's contacts", "Tire brand only"], correctIndex: 0, explanation: "BSMs share motion state so others can avoid collisions." },
        { id: "v2-03-q2", type: "Crypto", challenge: "Signed, not secret.", text: "Why are V2X messages signed rather than encrypted?", options: ["They're broadcast for low latency, so integrity/trust matter more than secrecy", "Encryption is illegal", "To save battery only", "They aren't protected at all"], correctIndex: 0, explanation: "Signing lets any receiver verify a public safety broadcast." },
        { id: "v2-03-q3", type: "PKI", challenge: "The trust engine.", text: "What does the SCMS provide?", options: ["Rotating pseudonym certificates so messages are trusted without tracking drivers", "Free parking", "Tire pressure", "Engine tuning"], correctIndex: 0, explanation: "SCMS balances trust and privacy with short-lived certificates." },
        { id: "v2-03-q4", type: "Attack", challenge: "Phantom car.", text: "What is a V2X spoofing attack?", options: ["Forging a BSM to create a ghost vehicle that makes real cars react", "Stealing the wheels", "Draining fuel", "Scratching the paint"], correctIndex: 0, explanation: "A forged safety message can trigger braking/swerving in receivers." },
        { id: "v2-03-q5", type: "Insider", challenge: "Authentic lies.", text: "How are malicious-but-credentialed vehicles handled?", options: ["Misbehavior detection flags implausible reports and triggers certificate revocation", "They're impossible", "By ignoring all messages", "By trusting them more"], correctIndex: 0, explanation: "Misbehavior detection catches valid senders that lie." },
        { id: "v2-03-q6", type: "Sybil", challenge: "Many fakes.", text: "What is a Sybil attack in V2X?", options: ["One device pretending to be many vehicles to manipulate traffic systems", "A single honest car", "A type of certificate", "A traffic light"], correctIndex: 0, explanation: "Faking many identities can distort cooperative/traffic systems." },
      ],
    },
  },

  // ─── v2-04: TPMS & Sensor Spoofing (CTF) ─────────────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The radios in your tires", location: "Spinning at every wheel", era: "Modern", emoji: "🛞" },
    id: "v2-04",
    order: 4,
    title: "TPMS & Sensor Spoofing",
    subtitle: "The Unauthenticated Radios You Forgot Your Car Has",
    category: "cybersecurity",
    xp: 165,
    badge: { id: "badge-v2-tpms", name: "Tire Whisperer", emoji: "🛞" },
    challengeType: "quiz",
    info: {
      tagline: "Every modern car has four little radios bolted inside the tires, broadcasting unencrypted IDs and pressures to the dashboard. They're a perfect miniature of the whole problem: wireless, unauthenticated, and trusted — and they let you track a car or fake a warning from the curb.",
      year: 2024,
      overview: [
        "Tire Pressure Monitoring Systems (TPMS) became mandatory in the US (TREAD Act) and EU after rollover incidents. Each wheel has a battery-powered sensor that transmits its unique ID, pressure, and temperature, usually on 315 MHz or 433 MHz, to a receiver that warns the driver of low pressure.",
        "Direct TPMS sensors broadcast in the clear with no authentication and a static unique ID. That creates two classic problems: privacy (the static ID lets a roadside receiver track or identify a specific vehicle) and integrity (an attacker can replay or forge messages to trigger false low-pressure or fault warnings).",
        "TPMS is a teaching example for the whole car: it shows that even a trivial subsystem, if it's a wireless trusted input, is an attack surface. The same pattern — unauthenticated RF that the car believes — recurs in key fobs, remote start, and beyond. Spoofing a tire warning is low-stakes, but the lesson (don't trust unauthenticated sensors) is exactly what protects the safety-critical ones.",
      ],
      technical: {
        title: "315/433 MHz, Static IDs, and Replay",
        body: [
          "TPMS attacks are accessible because the radios are simple:\n- Eavesdrop: a cheap software-defined radio (SDR) can capture TPMS packets and read the static sensor IDs — enabling vehicle tracking and fingerprinting.\n- Spoof/replay: replay a captured packet or forge one with a target sensor ID to trigger false pressure or warning-light behavior.\n- Trigger/wake: some sensors respond to a low-frequency activation signal, letting an attacker elicit transmissions on demand.",
          "Mitigations are limited by physics and cost (the sensors are tiny, battery-powered, and decades-deployed), but include sanity-checking readings against wheel-speed and other data, rate-limiting and plausibility checks in the receiver, and not letting TPMS data influence anything beyond a driver warning. The broader fix is the principle: authenticate or distrust wireless inputs. In this challenge you'll capture a TPMS transmission, then replay a spoofed sensor reading.",
        ],
      },
      incident: {
        title: "Tracking and Spoofing on a Budget",
        when: "2010",
        where: "USENIX Security / Rutgers & USC research",
        impact: "Showed TPMS could be eavesdropped from a passing car and spoofed to trigger false warnings — with cheap equipment",
        body: [
          "A landmark 2010 academic study ('Security and Privacy Vulnerabilities of In-Car Wireless Networks') demonstrated that TPMS messages could be captured from a nearby vehicle at speed, that the static IDs enabled tracking, and that spoofed messages could trigger the dashboard warning light — all with inexpensive, mostly off-the-shelf hardware.",
          "It was an early, vivid proof that cars were full of unauthenticated wireless inputs and nobody was checking them. The TPMS itself is low-risk, but the study helped launch the modern field of automotive security by showing how casually a car trusts a radio. The same SDR-and-replay approach scales up to far more dangerous targets, which is why TPMS is the gateway lesson.",
        ],
      },
      diagram: {
        nodes: [
          { label: "SDR (curb-side)", sub: "captures 315/433 MHz packets", type: "attacker" },
          { label: "Static Sensor ID", sub: "unauthenticated, trackable", type: "system" },
          { label: "TPMS Receiver", sub: "trusts the packet", type: "victim" },
          { label: "False Warning / Track", sub: "fake low-pressure alert or vehicle ID", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "TPMS becomes mandatory on new US vehicles (TREAD Act)" },
        { year: 2010, event: "Researchers eavesdrop and spoof TPMS from a passing car with cheap gear", highlight: true },
        { year: 2014, event: "SDRs (RTL-SDR) make TPMS capture trivial for hobbyists" },
        { year: 2024, event: "TPMS remains largely unauthenticated; defense relies on plausibility checks and scope-limiting" },
      ],
      keyTakeaways: [
        "TPMS sensors broadcast static IDs and pressure in the clear with no authentication",
        "This enables tracking (static ID) and spoofing/replay (false warnings) with a cheap SDR",
        "It's a miniature of the whole car problem: a wireless trusted input is an attack surface",
        "Defense: plausibility/rate checks, scope-limiting TPMS to warnings, and the principle 'distrust unauthenticated RF'",
      ],
      references: [
        { title: "Tire-pressure monitoring system (overview)", url: "https://en.wikipedia.org/wiki/Tire-pressure_monitoring_system" },
        { title: "Security & Privacy of In-Car Wireless Networks (2010)", url: "https://www.usenix.org/legacy/event/sec10/tech/full_papers/Rouf.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-04-q1", type: "Core Idea", challenge: "What is TPMS?", text: "What does a TPMS sensor broadcast?", options: ["Its unique ID, tire pressure, and temperature — usually unencrypted", "Encrypted GPS coordinates", "The driver's password", "Engine firmware"], correctIndex: 0, explanation: "Each wheel's sensor transmits ID/pressure/temperature in the clear." },
        { id: "v2-04-q2", type: "Privacy", challenge: "Trackable.", text: "Why is the static TPMS ID a privacy problem?", options: ["A roadside receiver can use it to track or fingerprint a specific vehicle", "It encrypts too well", "It changes constantly", "It's never transmitted"], correctIndex: 0, explanation: "A persistent unique ID enables vehicle tracking." },
        { id: "v2-04-q3", type: "Integrity", challenge: "Fake it.", text: "What integrity attack does TPMS allow?", options: ["Replaying/forging packets to trigger false pressure or warning behavior", "Refueling the car", "Changing the radio station", "Locking the doors"], correctIndex: 0, explanation: "Unauthenticated packets can be replayed or forged." },
        { id: "v2-04-q4", type: "Tooling", challenge: "Cheap gear.", text: "What makes TPMS easy to attack?", options: ["Cheap software-defined radios can capture and replay the simple 315/433 MHz packets", "It requires a supercomputer", "It needs physical tire removal", "It uses military encryption"], correctIndex: 0, explanation: "An RTL-SDR is enough to capture and replay TPMS." },
        { id: "v2-04-q5", type: "Lesson", challenge: "The bigger point.", text: "Why is TPMS a teaching example?", options: ["It shows even a trivial wireless trusted input is an attack surface", "It's the most dangerous car system", "It controls the brakes", "It has nothing to teach"], correctIndex: 0, explanation: "The 'distrust unauthenticated RF' lesson protects the dangerous systems too." },
        { id: "v2-04-q6", type: "Defense", challenge: "What helps.", text: "How is TPMS risk limited?", options: ["Plausibility/rate checks and scoping TPMS data to driver warnings only", "Broadcasting louder", "Sharing the IDs publicly", "Removing the dashboard"], correctIndex: 0, explanation: "Sanity-check readings and don't let TPMS influence anything critical." },
      ],
    },
  },

  // ─── v2-05: Phone-as-a-Key & Relay Attacks (CTF) ─────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The key that lives in your pocket", location: "Driveways and parking lots", era: "Modern", emoji: "🔑" },
    id: "v2-05",
    order: 5,
    title: "Relay Attacks & Digital Keys",
    subtitle: "Stealing a Car Without Stealing the Key",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-v2-relay", name: "Relay Runner", emoji: "🔑" },
    challengeType: "quiz",
    info: {
      tagline: "Keyless entry asks one question: is the key near the car? Relay attacks answer 'yes' by stretching the key's signal across the street with two cheap radios. The car unlocks and starts, the key never moved, and the thieves drive away in under a minute.",
      year: 2024,
      overview: [
        "Passive Keyless Entry and Start (PKES) unlocks and starts a car automatically when the key fob is nearby, using a low-frequency challenge from the car and a UHF response from the fob. The car infers proximity from the fact that the fob answered — but it doesn't truly measure distance, only signal reception.",
        "A relay attack exploits exactly that. One thief stands near the key (at a house door, in a café) with a relay device that captures the car's challenge and forwards it; a second thief by the car relays it to the fob and relays the response back. The car believes the key is present and unlocks/starts. It defeats the cryptography entirely without breaking it — it just moves the radio waves.",
        "The defenses are about measuring distance, not just signals. The Car Connectivity Consortium's Digital Key standard (phone-as-a-key) uses Ultra-Wideband (UWB) for secure ranging — precise time-of-flight distance measurement that a relay can't fake, because relaying adds latency that UWB detects. Some fobs also add motion sensors (sleep when still) and the user can use a Faraday pouch. This stage's challenge demonstrates the relay; the lesson is why UWB ranging beats it.",
      ],
      technical: {
        title: "LF Challenge, UHF Response, and Distance Bounding",
        body: [
          "The PKES exchange is relay-friendly:\n- The car emits a short-range LF (~125 kHz) challenge meant to only reach a nearby fob.\n- The fob replies over UHF (~315/433 MHz / BLE) with a cryptographic response.\n- The car authenticates the response and, crucially, assumes the fob is close because LF is short-range — an assumption the relay breaks by extending that range.",
          "The real fix is distance bounding: cryptographically measuring how far away the key is so a relayed (delayed) signal is rejected. UWB secure ranging in the CCC Digital Key (and in modern UWB-equipped fobs) measures time-of-flight at centimeter precision; the extra propagation delay a relay introduces makes the key appear too far, and access is denied. BLE-based digital keys add RSSI and other checks but are weaker than UWB ranging. In this challenge you'll capture and relay a fob's signal to unlock a car, then see why UWB defeats it.",
        ],
      },
      incident: {
        title: "A Decade of Relay Thefts",
        when: "2011 → today",
        where: "Driveways worldwide",
        impact: "Relay attacks became a dominant method of keyless car theft, driving insurance changes and the move to UWB",
        body: [
          "Researchers (notably ETH Zürich in 2011) first demonstrated relay attacks against PKES, and over the 2010s the technique industrialized: cheap relay kits enabled gangs to steal keyless cars from driveways in seconds, captured endlessly on doorbell cameras. Insurers raised premiums or refused cover for some keyless models, and police advised owners to use Faraday pouches.",
          "Automakers responded with motion-sensing fobs, the option to disable PKES, and ultimately UWB secure ranging via the CCC Digital Key — phones and fobs that measure true distance. The arc is a clean lesson: 'the key answered' is not the same as 'the key is here,' and only measuring distance, not signal presence, actually solves it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Relay near the Key", sub: "captures the car's LF challenge", type: "attacker" },
          { label: "Long-range Relay Link", sub: "stretches signal across the street", type: "system" },
          { label: "Car (believes key near)", sub: "no true distance check", type: "victim" },
          { label: "Unlock & Start", sub: "car driven away; UWB ranging would block it", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "ETH Zürich demonstrates relay attacks against passive keyless entry", highlight: true },
        { year: 2016, event: "Cheap relay kits fuel a wave of keyless car thefts caught on camera" },
        { year: 2021, event: "CCC Digital Key 3.0 adds UWB secure ranging for phone-as-a-key" },
        { year: 2023, event: "UWB-equipped fobs and phones make relay attacks detectable via time-of-flight" },
      ],
      keyTakeaways: [
        "Keyless entry assumes 'the key answered' means 'the key is near' — but it doesn't measure distance",
        "Relay attacks forward the signal across a distance with two radios, defeating the system without breaking crypto",
        "The fix is distance bounding: UWB secure ranging measures time-of-flight a relay can't fake",
        "CCC Digital Key (UWB phone-as-a-key), motion-sensing fobs, and Faraday pouches mitigate it",
      ],
      references: [
        { title: "Relay attack (overview)", url: "https://en.wikipedia.org/wiki/Relay_attack" },
        { title: "Car Connectivity Consortium — Digital Key", url: "https://carconnectivity.org/digital-key/" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-05-q1", type: "Core Idea", challenge: "The assumption.", text: "What flawed assumption does keyless entry make?", options: ["That if the fob answers the challenge, it must be physically near the car", "That the driver is asleep", "That tires are inflated", "That the engine is off"], correctIndex: 0, explanation: "PKES infers proximity from a response, not from real distance." },
        { id: "v2-05-q2", type: "Attack", challenge: "Stretch the signal.", text: "How does a relay attack work?", options: ["Two radios forward the car-key exchange across a distance so the car thinks the key is near", "It guesses the PIN", "It cuts the brake lines", "It drains the battery"], correctIndex: 0, explanation: "Relaying the signal defeats the system without breaking cryptography." },
        { id: "v2-05-q3", type: "Crypto", challenge: "Not broken.", text: "Why don't relay attacks need to break the encryption?", options: ["They just move the legitimate signals; the crypto still validates normally", "There is no crypto", "They steal the private key", "They reflash the fob"], correctIndex: 0, explanation: "The genuine challenge/response is relayed intact." },
        { id: "v2-05-q4", type: "Fix", challenge: "Measure distance.", text: "What actually defeats relay attacks?", options: ["Distance bounding via UWB secure ranging (time-of-flight a relay can't fake)", "A louder fob", "A longer antenna", "Turning off the radio entirely"], correctIndex: 0, explanation: "UWB measures true distance, so relayed (delayed) signals are rejected." },
        { id: "v2-05-q5", type: "Standard", challenge: "Phone-as-a-key.", text: "What does the CCC Digital Key use for secure proximity?", options: ["Ultra-Wideband (UWB) ranging", "A QR code", "The car horn", "A physical metal key only"], correctIndex: 0, explanation: "CCC Digital Key 3.0 uses UWB secure ranging." },
        { id: "v2-05-q6", type: "Mitigation", challenge: "Quick wins.", text: "Which simple mitigations help against relay theft?", options: ["Motion-sensing fobs that sleep when still, and Faraday pouches", "Leaving the key on the porch", "Removing the dashboard", "Driving faster"], correctIndex: 0, explanation: "Blocking or sleeping the fob's signal prevents relaying." },
      ],
    },
  },

  // ─── v2-06: ISO 15118 / Plug & Charge & V2G (CTF) ────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The handshake at the charger", location: "Every EV charging station", era: "Modern", emoji: "🔌" },
    id: "v2-06",
    order: 6,
    title: "Plug & Charge & V2G",
    subtitle: "Attacking the EV Charging Handshake",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-v2-charge", name: "Charge Phantom", emoji: "🔌" },
    challengeType: "quiz",
    info: {
      tagline: "Plug in, and the car and charger run a cryptographic handshake that bills your account, controls power flow, and can even sell energy back to the grid. ISO 15118 makes it seamless — and turns the humble charging cable into a data and trust channel worth attacking.",
      year: 2024,
      overview: [
        "ISO 15118 is the standard for communication between an EV and a charging station. Its headline feature, Plug & Charge (PnC), lets you just plug in: the car authenticates and authorizes payment automatically using certificates, with no app or card. It runs over Power Line Communication (PLC) on the charging cable, using a TLS-secured link and a PKI of contract and provisioning certificates.",
        "The same channel enables smart charging and Vehicle-to-Grid (V2G): the car and grid negotiate when and how fast to charge, and bidirectional chargers can discharge the car's battery back to the grid or home (V2H). That means the charging session controls real power flow and money — raising the stakes far above a simple plug.",
        "The attack surface spans the car, the cable, the charger (EVSE), and the backend (OCPP to the charging network):\n- The PLC link and pairing can be eavesdropped or manipulated if not properly secured.\n- The PnC PKI (contract certificates) is a target for forgery, theft, or billing fraud.\n- Backends and chargers have had classic web/IoT bugs. Aggregated, manipulated V2G/smart-charging signals could even stress the grid. This stage's challenge attacks the handshake to forge a charging contract.",
      ],
      technical: {
        title: "PnC Certificates, TLS over PLC, and OCPP",
        body: [
          "The PnC trust chain is the heart of it: a contract certificate ties the vehicle to a billing account, validated up a PKI; the car and EVSE establish a TLS session over PLC and exchange these credentials to authorize the session and meter energy. Earlier versions of ISO 15118 had optional or weak TLS, and real deployments have had certificate-handling and downgrade weaknesses.",
          "Beyond the cable, the charger talks to its network operator via OCPP (Open Charge Point Protocol), and the operator clears payment with mobility providers. Weaknesses anywhere — a charger with default credentials, an OCPP backend with broken auth, a forged or replayed contract certificate — can enable free charging, billing fraud, denial of charging, or session hijacking. Defenses are strong mandatory TLS, robust PKI lifecycle management, hardened EVSE/OCPP backends, and grid-side limits on how much automated load can swing. In this challenge you'll intercept an ISO 15118 session and forge a charging contract.",
        ],
      },
      incident: {
        title: "Chargers as Soft Targets",
        when: "2021–today",
        where: "Public and home EV charging networks",
        impact: "Researchers found EV chargers and backends with default creds, broken auth, and manipulable sessions — plus grid-stability concerns from aggregated load",
        body: [
          "As EV charging scaled, security researchers repeatedly found public chargers and their cloud backends vulnerable: default or hardcoded credentials, exposed management interfaces, OCPP implementations with weak authentication, and the ability to manipulate or hijack charging sessions. Some demonstrated free charging or denial of charging at scale.",
          "Studies also raised a systemic concern: if many smart chargers or V2G sessions could be commanded simultaneously (via a backend compromise or manipulated signals), the synchronized load swing could stress local grids. The takeaway is that EV charging is critical infrastructure with a PKI and a backend — securing the ISO 15118 handshake, the OCPP backend, and the charger is now as important as securing the car.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker on the link/backend", sub: "PLC cable or OCPP backend", type: "attacker" },
          { label: "Forged Contract Cert", sub: "fakes Plug & Charge authorization", type: "system" },
          { label: "EVSE / Backend", sub: "trusts the session", type: "victim" },
          { label: "Fraud / Hijack", sub: "free charging, billing fraud, denied charging", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "ISO 15118 published, defining EV-charger communication and Plug & Charge" },
        { year: 2018, event: "Plug & Charge deployments begin (Tesla-style seamless charging generalized)" },
        { year: 2021, event: "Researchers find EV chargers/backends with default creds and weak OCPP auth", highlight: true },
        { year: 2023, event: "ISO 15118-20 adds bidirectional V2G and strengthens the security model" },
      ],
      keyTakeaways: [
        "ISO 15118 / Plug & Charge authenticates and bills EV charging automatically via a certificate PKI over TLS",
        "The same channel enables smart charging and bidirectional V2G — controlling real power flow and money",
        "Attack surface: the PLC link, the PnC certificates, the EVSE, and the OCPP backend",
        "Defenses: mandatory strong TLS, robust PKI lifecycle, hardened chargers/backends, and grid-side load limits",
      ],
      references: [
        { title: "ISO 15118 (overview)", url: "https://en.wikipedia.org/wiki/ISO_15118" },
        { title: "Open Charge Point Protocol (OCPP)", url: "https://en.wikipedia.org/wiki/Open_Charge_Point_Protocol" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-06-q1", type: "Core Idea", challenge: "Plug & Charge.", text: "What does ISO 15118 Plug & Charge do?", options: ["Authenticates and authorizes EV charging/billing automatically via certificates", "Inflates the tires", "Plays a charging sound", "Changes the oil"], correctIndex: 0, explanation: "PnC uses a certificate PKI so you just plug in — no app or card." },
        { id: "v2-06-q2", type: "Channel", challenge: "Over the cable.", text: "How does the EV–charger communication travel?", options: ["Power Line Communication (PLC) over the charging cable, secured with TLS", "Bluetooth to the radio", "Through the tires", "Via the headlights"], correctIndex: 0, explanation: "ISO 15118 runs over PLC on the cable with a TLS-secured link." },
        { id: "v2-06-q3", type: "V2G", challenge: "Two-way power.", text: "What does Vehicle-to-Grid (V2G) enable?", options: ["The car's battery can discharge back to the grid or home, not just charge", "Faster acceleration", "Louder horn", "Self-driving"], correctIndex: 0, explanation: "Bidirectional charging lets EVs feed energy back (V2G/V2H)." },
        { id: "v2-06-q4", type: "Attack Surface", challenge: "Where to hit.", text: "Which is part of the charging attack surface?", options: ["The PnC certificates, the EVSE charger, and the OCPP backend", "Only the steering wheel", "The windshield wipers", "The seat fabric"], correctIndex: 0, explanation: "Car, cable, charger, and cloud backend are all in scope." },
        { id: "v2-06-q5", type: "Backend", challenge: "Charger-to-cloud.", text: "What protocol connects a charger to its network operator?", options: ["OCPP (Open Charge Point Protocol)", "HTTP only", "Modbus", "DNP3"], correctIndex: 0, explanation: "OCPP links the charge point to the operator backend." },
        { id: "v2-06-q6", type: "Systemic", challenge: "Grid risk.", text: "Why is EV charging a grid-security concern?", options: ["Synchronized manipulation of many smart-charging/V2G sessions could stress local grids", "EVs never use power", "Chargers are offline", "It only affects one car"], correctIndex: 0, explanation: "Aggregated, manipulable load makes charging critical infrastructure." },
      ],
    },
  },

  // ─── v2-07: Autonomous Stack & Sensor Fusion (Quiz) ──────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The car that sees and decides", location: "On public roads today", era: "Modern", emoji: "👁️" },
    id: "v2-07",
    order: 7,
    title: "Fooling the Self-Driving Stack",
    subtitle: "Sensor Spoofing and Adversarial Attacks on Autonomy",
    category: "cybersecurity",
    xp: 180,
    badge: { id: "badge-v2-av", name: "Perception Breaker", emoji: "👁️" },
    challengeType: "quiz",
    info: {
      tagline: "A self-driving car is a robot that has to perceive the world correctly at 70 mph. Attackers don't need to hack its code if they can fool its eyes — a sticker on a sign, a pattern of light, or a spoofed LiDAR echo can make the car see something that isn't there, or miss something that is.",
      year: 2024,
      overview: [
        "The autonomous-driving (AD/ADAS) stack is a pipeline: sense (cameras, radar, LiDAR, ultrasonic, GPS/IMU) → perceive (detect and classify objects) → predict and plan → act (steer/brake/accelerate). Each sensor and each stage is an attack surface, and unlike a remote code exploit, many attacks here are physical and need no network access.",
        "Sensor attacks target perception directly:\n- Cameras: adversarial patches/stickers that cause misclassification (a stop sign read as a speed limit), or blinding/glare and projected images ('phantom' objects).\n- LiDAR: spoofing or relaying laser pulses to inject fake points or erase real obstacles.\n- Radar: jamming or spoofing returns.\n- GPS: spoofing the car's position. Many of these were demonstrated against real ADAS systems.",
        "Sensor fusion is the main defense: combining multiple independent sensors so no single spoof is decisive, plus plausibility checks across modalities (the camera sees an obstacle but LiDAR and radar don't — flag it). The deeper lesson connects to the AI epochs: the perception models are machine-learning systems with all the adversarial-example weaknesses, so AD security is part cyber-physical, part ML robustness.",
      ],
      technical: {
        title: "Adversarial Patches, LiDAR Spoofing, and Fusion",
        body: [
          "The attacks exploit how models and sensors work:\n- Adversarial examples: small, carefully crafted perturbations (a patch on a sign, a pattern on the road) that exploit the neural network's decision boundaries to force a wrong classification while looking innocuous to humans.\n- Physical sensor spoofing: injecting or suppressing signals at the sensor — fake LiDAR points, projected phantom pedestrians, spoofed GPS — so the raw input itself is false before any model runs.",
          "Robustness comes from redundancy and cross-checks: multi-sensor fusion so a single compromised modality is outvoted, temporal consistency (objects shouldn't teleport), adversarial training of the perception models, anomaly detection on sensor inputs, and conservative fail-safe behavior (slow/stop on uncertainty). Defense-in-depth treats perception as untrusted input to be validated, exactly like the rest of this epoch treats radios and buses. The fusion and ML-robustness themes tie AD security back to both the robotics and AI tracks.",
        ],
      },
      incident: {
        title: "Stickers That Reroute Cars",
        when: "2017–2020",
        where: "Security and ML research labs",
        impact: "Researchers fooled production ADAS: misread signs, phantom obstacles, and steered cars across lane lines",
        body: [
          "A series of high-profile results showed AD perception could be fooled physically. In 2017, researchers showed small stickers on a stop sign could make classifiers misread it. Keen Security Lab (Tencent) in 2019 used small road stickers to make a Tesla's Autopilot steer toward the wrong lane, and demonstrated other sensor manipulations. Researchers also showed projected 'phantom' images causing emergency braking, and LiDAR/GPS spoofing in lab settings.",
          "None required hacking the car's software — they attacked the senses. The industry response centered on sensor fusion, adversarial robustness research, and treating perception outputs with appropriate uncertainty. The episodes cemented a core idea: for an autonomous vehicle, the integrity of perception is a safety-critical security property.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Physical Attack", sub: "sticker, projection, laser, GPS spoof", type: "attacker" },
          { label: "Sensor", sub: "camera / LiDAR / radar / GPS", type: "system" },
          { label: "Perception Model", sub: "misclassifies or misses objects", type: "victim" },
          { label: "Wrong Action", sub: "brake, swerve, or ignore an obstacle", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Adversarial stickers shown to make sign classifiers misread a stop sign", highlight: true },
        { year: 2019, event: "Keen Lab steers a Tesla across lane lines with small road stickers" },
        { year: 2020, event: "Projected 'phantom' images shown to trigger ADAS braking and steering" },
        { year: 2023, event: "Sensor fusion + adversarial robustness become core AD safety requirements" },
      ],
      keyTakeaways: [
        "The AD stack is sense → perceive → plan → act; each sensor and stage is an attack surface",
        "Many attacks are physical (stickers, projections, laser/GPS spoofing) and need no network access",
        "Perception models are ML systems with adversarial-example weaknesses (ties to the AI track)",
        "Defense is sensor fusion, cross-modal plausibility checks, adversarial training, and fail-safe behavior",
      ],
      references: [
        { title: "Adversarial examples (overview)", url: "https://en.wikipedia.org/wiki/Adversarial_machine_learning" },
        { title: "Keen Lab Tesla Autopilot research (2019)", url: "https://keenlab.tencent.com/en/2019/03/29/Tencent-Keen-Security-Lab-Experimental-Security-Research-of-Tesla-Autopilot/" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-07-q1", type: "Core Idea", challenge: "The pipeline.", text: "What is the autonomous-driving pipeline?", options: ["Sense → perceive → predict/plan → act", "Encrypt → send → decrypt", "Buy → sell → hold", "Read → write → delete"], correctIndex: 0, explanation: "AD systems sense, perceive, plan, and act — each a surface." },
        { id: "v2-07-q2", type: "Attack", challenge: "Fool the eyes.", text: "What is an adversarial patch attack?", options: ["A crafted sticker/pattern that makes a perception model misclassify (e.g., a stop sign)", "A patch to the OS", "A tire repair", "A software update"], correctIndex: 0, explanation: "Adversarial perturbations exploit the model's decision boundaries." },
        { id: "v2-07-q3", type: "Sensors", challenge: "Beyond cameras.", text: "How can LiDAR be attacked?", options: ["Spoofing/relaying laser pulses to inject fake points or erase real obstacles", "By inflating tires", "By changing the radio", "It cannot be attacked"], correctIndex: 0, explanation: "Injected or suppressed LiDAR returns falsify the raw input." },
        { id: "v2-07-q4", type: "No Network", challenge: "Physical.", text: "Why are many AD attacks especially concerning?", options: ["They're physical and need no network access — just the environment", "They require root on the car", "They need the owner's password", "They only work offline in a lab forever"], correctIndex: 0, explanation: "Attacking the senses bypasses the need to hack the software." },
        { id: "v2-07-q5", type: "Defense", challenge: "Don't trust one sensor.", text: "What is the main defense against sensor spoofing?", options: ["Sensor fusion with cross-modal plausibility checks so no single spoof is decisive", "Using only one camera", "Removing the radar", "Trusting GPS alone"], correctIndex: 0, explanation: "Redundant, cross-checked sensors outvote a single compromised one." },
        { id: "v2-07-q6", type: "Connection", challenge: "Familiar weakness.", text: "Why is AD security partly an AI problem?", options: ["Perception relies on ML models with adversarial-example vulnerabilities", "Cars don't use AI", "AI has no weaknesses", "It's only about networking"], correctIndex: 0, explanation: "Perception models inherit ML adversarial robustness issues." },
      ],
    },
  },

  // ─── v2-08: Connected-Car & Fleet APIs (CTF) ─────────────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The car that lives in the cloud", location: "Automaker backends and mobile apps", era: "Modern", emoji: "☁️" },
    id: "v2-08",
    order: 8,
    title: "Connected-Car & Fleet APIs",
    subtitle: "Where Web Bugs Meet Two-Ton Machines",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-v2-api", name: "Fleet Takeover", emoji: "☁️" },
    challengeType: "quiz",
    info: {
      tagline: "You don't always need a radio or a CAN bus to control a car anymore. Modern vehicles expose their commands — unlock, locate, start, honk — through cloud APIs and mobile apps. And those APIs have the same boring, devastating web bugs as everything else, only now the object is a moving vehicle.",
      year: 2024,
      overview: [
        "Connected cars are managed through automaker cloud platforms: the mobile app, the telematics backend, and fleet-management portals all expose APIs to locate the car, unlock it, start it, read diagnostics, and manage owners. This is enormously convenient — and it moves a big part of the car's attack surface into ordinary web/API security.",
        "The bugs found here are classic OWASP API issues, not exotic automotive ones:\n- Broken Object Level Authorization (BOLA/IDOR): the API checks you're logged in but not that the VIN you're acting on is yours — so changing an ID controls someone else's car.\n- Broken authentication, leaked API keys, and SSO/token flaws that grant access to other accounts.\n- Over-privileged dealer/fleet portals that can enroll or command vehicles en masse.",
        "The impact scales terrifyingly: a single API flaw can affect an entire model line or fleet at once — locate, unlock, and start thousands of vehicles, or harvest every owner's personal data. Researchers have repeatedly demonstrated exactly this. The fix is rigorous API security: per-object authorization on every request, strong auth, least privilege, and treating vehicle-command endpoints as safety-critical. This stage's challenge exploits a fleet-API authorization flaw to take over a vehicle by changing its VIN.",
      ],
      technical: {
        title: "BOLA, VINs as Object IDs, and Mass Impact",
        body: [
          "The recurring flaw is authorization at the object level. Vehicle APIs use identifiers — a VIN, an account ID, a vehicle ID — to scope requests. If the backend authenticates the user but fails to verify that the requested identifier belongs to that user, an attacker simply substitutes another VIN/ID and operates a stranger's car. This is BOLA/IDOR, the #1 API risk, applied to physical machines.",
          "Telematics and fleet platforms amplify it: a flaw in a dealer or fleet portal, or in the SSO between systems, can expose bulk command capability across many vehicles. Defenses are standard but must be airtight: enforce per-object authorization server-side on every endpoint, scope tokens tightly, apply least privilege to dealer/fleet roles, rate-limit and monitor command APIs, and pen-test them continuously. The lesson bridges this epoch to the whole web-security curriculum: a two-ton car is now also a web object. In this challenge you'll probe a fleet API and change a VIN to take over a vehicle.",
        ],
      },
      incident: {
        title: "Web Bugs That Unlock Whole Fleets",
        when: "2022–2023",
        where: "Multiple major automakers and telematics vendors",
        impact: "Researchers found API flaws letting them locate, unlock, and start vehicles and access fleet systems across many brands",
        body: [
          "In 2022–2023, security researchers (notably Sam Curry and collaborators) disclosed a sweep of vulnerabilities across more than a dozen automakers and telematics providers. The bugs were ordinary web/API flaws — broken authorization, SSO weaknesses, exposed admin tools — but the impact was extraordinary: remotely locating, unlocking, and starting vehicles, accessing owner PII, and in some cases reaching internal dealer and fleet-management systems with broad control.",
          "Earlier work (e.g., the Nissan Leaf API in 2016, which let anyone control climate and pull trip data using just the VIN) had foreshadowed it. The pattern is consistent: as cars became cloud-connected, the most impactful attacks shifted from exotic radio hacks to the same authorization bugs plaguing every web app — now with physical, fleet-wide consequences.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "authenticated API user", type: "attacker" },
          { label: "Swap the VIN/ID", sub: "BOLA: no per-object check", type: "system" },
          { label: "Fleet/Telematics API", sub: "executes command on another car", type: "victim" },
          { label: "Vehicle Takeover", sub: "locate/unlock/start at scale", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "Nissan Leaf API lets anyone control a car's climate/trip data using just the VIN", highlight: true },
        { year: 2019, event: "GPS fleet-tracking app flaws enable remote vehicle tracking and engine-stop on some models" },
        { year: 2022, event: "Researchers disclose API/authorization flaws across 16+ automakers and vendors" },
        { year: 2024, event: "Per-object authorization and command-API hardening become baseline expectations" },
      ],
      keyTakeaways: [
        "Connected cars expose commands (locate/unlock/start) via cloud APIs, mobile apps, and fleet portals",
        "The bugs are classic OWASP API issues — BOLA/IDOR, broken auth, leaked keys — not exotic car hacks",
        "Impact scales: one flaw can control an entire model line or fleet and leak all owners' data",
        "Defense: per-object authorization on every request, tight tokens, least privilege, and command-API monitoring",
      ],
      references: [
        { title: "OWASP API Security — BOLA (API1)", url: "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/" },
        { title: "Web Hackers vs. The Auto Industry (Sam Curry, 2023)", url: "https://samcurry.net/web-hackers-vs-the-auto-industry" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-08-q1", type: "Core Idea", challenge: "New surface.", text: "How are modern cars increasingly controlled remotely?", options: ["Through automaker cloud APIs, mobile apps, and fleet portals", "Only by physical key", "Only over CAN in person", "They can't be controlled remotely"], correctIndex: 0, explanation: "Connected-car commands now flow through cloud APIs." },
        { id: "v2-08-q2", type: "BOLA", challenge: "The #1 bug.", text: "What is Broken Object Level Authorization (BOLA)?", options: ["The API verifies you're logged in but not that the object (VIN) is yours", "A type of encryption", "A tire defect", "A CAN frame"], correctIndex: 0, explanation: "BOLA/IDOR lets you act on another user's object by changing an ID." },
        { id: "v2-08-q3", type: "Identifier", challenge: "Object ID.", text: "What often serves as the object identifier in car APIs?", options: ["The VIN or vehicle/account ID", "The paint color", "The tire size", "The radio station"], correctIndex: 0, explanation: "Swapping a VIN/ID with no check is the core of the exploit." },
        { id: "v2-08-q4", type: "Scale", challenge: "Why it's scary.", text: "Why is the impact of car-API bugs so severe?", options: ["One flaw can affect an entire model line or fleet at once", "It only affects one screw", "It's purely cosmetic", "It needs the owner present"], correctIndex: 0, explanation: "Cloud APIs centralize control, so flaws scale across vehicles." },
        { id: "v2-08-q5", type: "Nature", challenge: "Not exotic.", text: "What kind of bugs are these mostly?", options: ["Ordinary web/API flaws (broken auth, BOLA, leaked keys)", "Quantum cryptography breaks", "Mechanical failures", "Tire-pressure errors"], correctIndex: 0, explanation: "They're standard OWASP API issues with physical consequences." },
        { id: "v2-08-q6", type: "Defense", challenge: "Fix it.", text: "What's the key defense for vehicle command APIs?", options: ["Per-object authorization server-side on every request, plus least privilege and monitoring", "Trusting the client's claims", "Removing authentication", "Exposing admin tools publicly"], correctIndex: 0, explanation: "Verify object ownership on every request and treat commands as safety-critical." },
      ],
    },
  },

  // ─── v2-09: OTA, Regulation & ISO/SAE 21434 (Quiz) ───────────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "The rules that finally arrived", location: "Type-approval offices and OEM war rooms", era: "Modern", emoji: "📋" },
    id: "v2-09",
    order: 9,
    title: "OTA, R155 & ISO 21434",
    subtitle: "How Regulation Forced Automakers to Build Security In",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-v2-reg", name: "Compliance Driver", emoji: "📋" },
    challengeType: "quiz",
    info: {
      tagline: "For years automotive security depended on whether an OEM chose to care. Then regulators made it mandatory: in much of the world you now cannot sell a car without proving you manage cyber-risk across its whole lifecycle. This is the governance half of vehicle security — and it changed everything.",
      year: 2024,
      overview: [
        "Over-the-air (OTA) updates are now essential: they let automakers patch the millions of lines of code in a car without a recall, fixing vulnerabilities (and adding features) remotely. But OTA is also a high-value attack surface — a compromised update channel could push malicious firmware to a whole fleet — so the update system itself must be secured with code signing, secure boot, and integrity verification (frameworks like Uptane were built for this).",
        "The regulatory turning point is UNECE WP.29: R155 requires a Cybersecurity Management System (CSMS) covering the vehicle's entire lifecycle, and R156 requires a Software Update Management System (SUMS) for safe, secure OTA. In many markets (EU, Japan, Korea, and others) type approval — legal permission to sell — now depends on them. They took effect for new vehicle types in 2022 and broadened since.",
        "The companion engineering standard is ISO/SAE 21434, 'Road vehicles — Cybersecurity engineering,' which defines how to actually do it: threat analysis and risk assessment (TARA), security by design across development, and security monitoring and incident response across the car's life. Together, R155/R156 (the legal mandate) and ISO/SAE 21434 (the engineering method) made security a built-in, audited part of building a car — not an afterthought.",
      ],
      technical: {
        title: "CSMS, SUMS, TARA, and Securing OTA",
        body: [
          "The frameworks define a lifecycle program:\n- CSMS (R155): the OEM must have processes to identify, assess, and manage cyber-risks for the vehicle type throughout design, production, and operation — including monitoring and responding to new threats in the field.\n- SUMS (R156): processes to deliver software updates safely and securely, with configuration management and the ability to update the fleet.\n- TARA (ISO/SAE 21434): structured threat analysis and risk assessment that drives security requirements from the start.",
          "Securing OTA itself is concrete: cryptographically sign updates, verify them with secure boot and hardware roots of trust before installing, use a resilient update framework (Uptane separates roles so one compromised server can't push malicious firmware), and ensure updates can't brick the car or be rolled back to vulnerable versions. The governance message of the epoch: vehicle security is now a regulated, lifecycle discipline, with OTA as the mechanism that makes ongoing security possible.",
        ],
      },
      incident: {
        title: "When Patching Meant a Physical Recall",
        when: "2015 → 2022",
        where: "From the Jeep recall to mandatory regulation",
        impact: "The cost and slowness of physical security recalls drove both OTA adoption and the regulations now requiring secure update capability",
        body: [
          "The 2015 Jeep hack required mailing USB sticks and dealer visits to patch 1.4 million vehicles — slow, expensive, and incomplete. It made the case that cars need secure OTA the way phones have it. Tesla had already shown OTA could push fixes overnight; the rest of the industry followed.",
          "Regulators absorbed the lesson. By 2022, UNECE R155/R156 made a Cybersecurity Management System and a Software Update Management System prerequisites for selling new vehicle types in adopting markets, with ISO/SAE 21434 as the engineering backbone. Security shifted from optional to legally required and lifecycle-long — the structural answer to a decade of vehicle-hacking demonstrations.",
        ],
      },
      diagram: {
        nodes: [
          { label: "ISO/SAE 21434", sub: "engineering method: TARA, secure design", type: "system" },
          { label: "R155 CSMS", sub: "lifecycle cyber-risk management", type: "victim" },
          { label: "R156 SUMS", sub: "secure software update management", type: "attacker" },
          { label: "Type Approval", sub: "no security program, no sale", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "Jeep recall shows physical security patching is slow and costly" },
        { year: 2016, event: "Uptane framework released for resilient, compromise-tolerant automotive OTA" },
        { year: 2021, event: "ISO/SAE 21434 published as the automotive cybersecurity engineering standard" },
        { year: 2022, event: "UNECE R155/R156 take effect — CSMS & SUMS required for type approval", highlight: true },
      ],
      keyTakeaways: [
        "OTA updates let automakers patch fleets remotely but must themselves be secured (signing, secure boot, Uptane)",
        "UNECE R155 mandates a Cybersecurity Management System; R156 a Software Update Management System",
        "In adopting markets, type approval (legal sale) now depends on these — security is mandatory and lifecycle-long",
        "ISO/SAE 21434 is the engineering method (TARA, security by design, monitoring/IR) behind the mandate",
      ],
      references: [
        { title: "ISO/SAE 21434 (overview)", url: "https://en.wikipedia.org/wiki/ISO/SAE_21434" },
        { title: "UNECE WP.29 R155 cybersecurity regulation", url: "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-09-q1", type: "OTA", challenge: "Why OTA.", text: "Why are OTA updates important for vehicle security?", options: ["They let automakers patch vulnerabilities across a fleet remotely, without a physical recall", "They make the car faster", "They inflate tires", "They replace the engine"], correctIndex: 0, explanation: "OTA enables ongoing remote patching — but must be secured." },
        { id: "v2-09-q2", type: "Regulation", challenge: "R155.", text: "What does UNECE R155 require?", options: ["A Cybersecurity Management System (CSMS) across the vehicle lifecycle", "Bigger wheels", "A spare tire", "A louder horn"], correctIndex: 0, explanation: "R155 mandates lifecycle cyber-risk management for type approval." },
        { id: "v2-09-q3", type: "Regulation", challenge: "R156.", text: "What does UNECE R156 cover?", options: ["A Software Update Management System (SUMS) for safe, secure OTA", "Paint quality", "Fuel economy", "Seat comfort"], correctIndex: 0, explanation: "R156 governs secure software-update processes." },
        { id: "v2-09-q4", type: "Standard", challenge: "How to do it.", text: "What is ISO/SAE 21434?", options: ["The automotive cybersecurity engineering standard (TARA, security by design)", "A tire standard", "An emissions law", "A fuel grade"], correctIndex: 0, explanation: "ISO/SAE 21434 defines how to engineer vehicle cybersecurity." },
        { id: "v2-09-q5", type: "Stakes", challenge: "No sale.", text: "What's the consequence of R155/R156 in adopting markets?", options: ["Without a security/update management program, a new vehicle type can't get type approval to be sold", "Nothing changes", "Only the color is restricted", "It's purely voluntary"], correctIndex: 0, explanation: "Security became a legal prerequisite for selling cars." },
        { id: "v2-09-q6", type: "OTA Security", challenge: "Protect updates.", text: "How is the OTA channel itself secured?", options: ["Signed updates, secure boot/roots of trust, and resilient frameworks like Uptane", "By emailing firmware unencrypted", "By skipping verification", "By trusting any server"], correctIndex: 0, explanation: "A compromised update channel could brick or backdoor a fleet, so it's hardened." },
      ],
    },
  },

  // ─── v2-10: Securing the Software-Defined Vehicle (Quiz) ─────────────────
  {
    epochId: "vehicle-sec-2",
    wonder: { name: "Defense for the whole vehicle", location: "From silicon to the cloud", era: "Modern", emoji: "🛡️" },
    id: "v2-10",
    order: 10,
    title: "Securing the SDV",
    subtitle: "Defense in Depth from Chip to Cloud",
    category: "cybersecurity",
    xp: 195,
    badge: { id: "badge-v2-defense", name: "Vehicle Defender", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "Every attack in this epoch — SOME/IP, V2X, TPMS, relay, charging, perception, fleet APIs — points to the same answer: no single fix, but defense in depth from the silicon up to the cloud, watched by a VSOC and built in by design. This is the whole-vehicle security model.",
      year: 2024,
      overview: [
        "Securing a software-defined vehicle means layering controls across the entire stack:\n- Silicon: hardware security modules (HSMs/SHE) for keys, secure boot, and a hardware root of trust in each ECU/HPC.\n- In-vehicle network: zonal segmentation, an in-vehicle firewall and gateway, authenticated messaging (SecOC for CAN, TLS/MACsec for Ethernet), and an in-vehicle IDS.\n- External interfaces: hardened telematics, secured OTA, distance-bounded keys, and authenticated V2X.\n- Backend & cloud: rigorous API security, least privilege, and continuous testing.",
        "Watching over it is the Vehicle Security Operations Center (VSOC): automakers now run SOCs that ingest telemetry and IDS alerts from the fleet, detect anomalies, and respond — including pushing OTA patches. The car becomes a monitored, updatable endpoint over a 15+ year service life, not a sealed product shipped and forgotten.",
        "Underneath it all is software supply-chain security: a modern car integrates code from hundreds of suppliers, so SBOMs (software bills of materials), known-vulnerability tracking, and supplier security requirements (driven by ISO/SAE 21434) are essential. The whole-vehicle model unites everything: build security in (21434/R155), segment and authenticate inside, harden every external interface, secure the supply chain and backend, and monitor and update the fleet for life.",
      ],
      technical: {
        title: "HSMs, SecOC, VSOC, and the Lifecycle",
        body: [
          "The defensive building blocks recur across the industry:\n- SecOC (Secure Onboard Communication): adds authentication (MACs + freshness) to CAN messages so a spoofed frame is rejected — the CAN-era answer to the bus's missing authentication.\n- HSM/secure boot: each controller verifies its firmware against a hardware root of trust at startup, blocking persistent tampering.\n- Segmentation + IDS: zonal gateways constrain lateral movement, and an in-vehicle IDS flags abnormal bus/Ethernet behavior, feeding the VSOC.",
          "The lifecycle view ties it together: TARA and secure design up front; SecOC, HSMs, segmentation, and hardened interfaces in the product; SBOMs and supplier requirements across the supply chain; and a VSOC plus secure OTA to detect and remediate threats for the vehicle's whole life. No single control is sufficient — a relay-resistant key doesn't help if the fleet API is broken — which is why defense in depth, governed by regulation and watched by a SOC, is the real conclusion of vehicle security.",
        ],
      },
      incident: {
        title: "From Demonstrations to a Discipline",
        when: "2015 → today",
        where: "The global auto industry",
        impact: "A decade of public hacks transformed vehicle security from research curiosity into a regulated, SOC-monitored, defense-in-depth engineering discipline",
        body: [
          "The throughline of both vehicle epochs is a maturation. The Jeep hack and the wave of demonstrations that followed (CAN injection, relay theft, TPMS spoofing, V2X spoofing, charger and fleet-API bugs, perception attacks) each exposed a layer that trusted too much. Individually they were alarming; together they forced a structural response.",
          "Today, leading automakers build to ISO/SAE 21434, comply with R155/R156, ship HSMs and SecOC and secure boot, segment with zonal gateways, run VSOCs, secure their OTA and APIs, and manage their software supply chains. Vehicle security became a profession with standards, regulation, and operations — exactly the journey the rest of the curriculum traces, now applied to two-ton machines that carry people at speed.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Silicon", sub: "HSM, secure boot, root of trust", type: "system" },
          { label: "In-Vehicle Network", sub: "zonal segmentation, SecOC, IDS", type: "victim" },
          { label: "Interfaces & Cloud", sub: "OTA, keys, V2X, API security", type: "attacker" },
          { label: "VSOC + Lifecycle", sub: "monitor, patch, SBOM, for 15+ years", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "SecOC and HSM-based secure boot adopted to authenticate in-vehicle communication" },
        { year: 2020, event: "Automakers stand up Vehicle Security Operations Centers (VSOCs)" },
        { year: 2022, event: "R155/R156 make lifecycle security and secure OTA mandatory for type approval", highlight: true },
        { year: 2024, event: "SBOMs and supply-chain security become core to automotive cyber programs" },
      ],
      keyTakeaways: [
        "No single fix: secure the SDV with defense in depth from silicon (HSM/secure boot) to cloud (API security)",
        "Inside the car: zonal segmentation, authenticated messaging (SecOC/TLS/MACsec), and an in-vehicle IDS",
        "A Vehicle SOC monitors the fleet and pushes secure OTA patches across a 15+ year lifecycle",
        "Software supply-chain security (SBOMs, supplier requirements) and ISO/SAE 21434 tie the program together",
      ],
      references: [
        { title: "AUTOSAR Secure Onboard Communication (SecOC)", url: "https://www.autosar.org/" },
        { title: "Automotive security (overview)", url: "https://en.wikipedia.org/wiki/Automotive_security" },
      ],
    },
    quiz: {
      questions: [
        { id: "v2-10-q1", type: "Core Idea", challenge: "The model.", text: "What is the core approach to securing a software-defined vehicle?", options: ["Defense in depth from silicon to cloud — no single control suffices", "One firewall and nothing else", "Only locking the doors", "Hoping nobody tries"], correctIndex: 0, explanation: "Every layer must be defended; weaknesses anywhere undermine the rest." },
        { id: "v2-10-q2", type: "Silicon", challenge: "Root of trust.", text: "What does an HSM with secure boot provide in an ECU?", options: ["Key protection and firmware verification against a hardware root of trust", "Faster tires", "Better paint", "More cup holders"], correctIndex: 0, explanation: "Hardware roots of trust block persistent firmware tampering." },
        { id: "v2-10-q3", type: "CAN", challenge: "Authenticate the bus.", text: "What does SecOC add to in-vehicle communication?", options: ["Message authentication (MACs + freshness) so spoofed frames are rejected", "Louder audio", "GPS maps", "Tire sensors"], correctIndex: 0, explanation: "SecOC is the answer to CAN's missing authentication." },
        { id: "v2-10-q4", type: "VSOC", challenge: "Watch the fleet.", text: "What is a Vehicle Security Operations Center (VSOC)?", options: ["A SOC that monitors fleet telemetry/IDS alerts and responds, including OTA patches", "A car wash", "A dealership", "A type of engine"], correctIndex: 0, explanation: "The VSOC makes the car a monitored, updatable endpoint for life." },
        { id: "v2-10-q5", type: "Supply Chain", challenge: "Hundreds of suppliers.", text: "Why are SBOMs important for vehicles?", options: ["A car integrates code from many suppliers, so tracking components/vulnerabilities is essential", "They list tire brands", "They're decorative", "They replace the engine"], correctIndex: 0, explanation: "Software supply-chain visibility is core to managing vehicle risk." },
        { id: "v2-10-q6", type: "Lifecycle", challenge: "Built in.", text: "What ties the whole-vehicle security program together?", options: ["Build security in (ISO/SAE 21434, R155), defend every layer, secure the supply chain, and monitor/update for life", "A single annual scan", "Trusting suppliers blindly", "Shipping and forgetting"], correctIndex: 0, explanation: "Lifecycle, defense-in-depth, governance, and operations together." },
      ],
    },
  },
];

// ── CTF mode — hands-on automotive terminal per stage (quiz = half-clear) ────
// All CTFs now use the shared 3-step mkDeepCtf factory (deepened from 2-step).

const V2_CTF: Record<string, CtfConfig> = {
  "v2-02": mkDeepCtf(
    "You're on a vehicle's Automotive Ethernet network. Enumerate the SOME/IP services, identify the high-value one to impersonate, then spoof an OfferService to feed clients false data.",
    "OP: SERVICE IMPOSTOR\nTarget: SOME/IP-SD on the in-vehicle Ethernet (no auth).\nGoal: enumerate, pick a target, spoof an OfferService.\nSequence: enum-services -> identify-target -> spoof-offer",
    "FLAG{",
    "Mission Brief",
    ["enum-services", "S0M31P_", "Services Enumerated", [
      "$ enum-services --find",
      "Sent FindService and watched OfferService replies — discovery is unauthenticated.",
      "Several ECUs advertise services on the bus.",
      "Next: identify-target",
    ]],
    ["identify-target", "S3RV1C3_", "Target Identified", [
      "$ identify-target",
      "Service 0x1234 (SpeedData) is offered by ECU 10.0.0.7 and consumed by safety functions.",
      "Impersonating it poisons everything downstream.",
      "Next: spoof-offer",
    ]],
    ["spoof-offer", "SP00F3D}", "Offer Spoofed", [
      "$ spoof-offer --service 0x1234",
      "Broadcast a forged OfferService -> clients re-subscribed to YOU, now fed fake speed values.",
      "Fix: SOME/IP-SD authentication, SecOC, network segmentation/IDS.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Enumerate services. Run: enum-services", "Identify the target. Run: identify-target", "Spoof an offer. Run: spoof-offer", "Run 'assemble', then submit the flag"],
    { "someip.txt": "discovery: SOME/IP-SD (no auth)\ntarget: service 0x1234 SpeedData @10.0.0.7\nfix: SecOC + segmentation" },
  ),
  "v2-03": mkDeepCtf(
    "You have a C-V2X radio at an intersection. Sniff the genuine Basic Safety Messages, craft a forged 'ghost' vehicle, then inject it so nearby cars react to a car that isn't there.",
    "OP: PHANTOM CAR\nTarget: a V2X channel of vehicles broadcasting BSMs.\nGoal: sniff BSMs, craft a ghost, inject it.\nSequence: sniff-bsm -> craft-ghost -> inject-ghost",
    "FLAG{V2X_",
    "Mission Brief",
    ["sniff-bsm", "BSM_", "BSMs Sniffed", [
      "$ sniff-bsm --cv2x",
      "Captured Basic Safety Messages: position/speed/heading ~10/sec from 6 vehicles.",
      "Nearby receivers don't strictly verify the message signatures.",
      "Next: craft-ghost",
    ]],
    ["craft-ghost", "F0RG3D_", "Ghost Crafted", [
      "$ craft-ghost --stopped --ahead",
      "Built a forged BSM for a stopped vehicle dead ahead in the target's lane.",
      "Well-formed enough to be trusted.",
      "Next: inject-ghost",
    ]],
    ["inject-ghost", "GH0ST}", "Ghost Injected", [
      "$ inject-ghost",
      "Transmitted the ghost -> nearby cars threw collision warnings and braked for nothing.",
      "Fix: enforce IEEE 1609.2 message signing + misbehavior detection.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Sniff safety messages. Run: sniff-bsm", "Craft a ghost. Run: craft-ghost", "Inject the ghost. Run: inject-ghost", "Run 'assemble', then submit the flag"],
    { "v2x.txt": "msgs: BSM ~10/sec\nflaw: signatures not strictly verified\nfix: IEEE 1609.2 + misbehavior detection" },
  ),
  "v2-04": mkDeepCtf(
    "With a cheap SDR, capture a car's TPMS transmission, clone the static sensor ID, then replay a spoofed reading to trigger a false dashboard warning.",
    "OP: TIRE WHISPER\nTarget: a vehicle's 433 MHz TPMS sensors (no auth).\nGoal: capture, clone the ID, replay a spoof.\nSequence: capture-tpms -> clone-id -> replay-sensor",
    "FLAG{",
    "Mission Brief",
    ["capture-tpms", "TPMS_", "TPMS Captured", [
      "$ capture-tpms --433mhz",
      "Tuned the SDR to 433 MHz and captured TPMS packets in the clear.",
      "Sensor ID 0x8AF2C1 reporting 32 psi.",
      "Next: clone-id",
    ]],
    ["clone-id", "S3NS0R_", "ID Cloned", [
      "$ clone-id 0x8AF2C1",
      "The sensor ID is static and unauthenticated -> trivially cloned into a forged frame.",
      "The ECU keys only on the ID.",
      "Next: replay-sensor",
    ]],
    ["replay-sensor", "SP00F3D}", "Sensor Spoofed", [
      "$ replay-sensor --psi 12",
      "Replayed a forged packet for 0x8AF2C1 at 12 psi -> dashboard lit a low-pressure warning.",
      "TPMS IDs also enable tracking. Fix: authenticated sensors, plausibility checks.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Capture a TPMS packet. Run: capture-tpms", "Clone the ID. Run: clone-id", "Replay a spoof. Run: replay-sensor", "Run 'assemble', then submit the flag"],
    { "tpms.txt": "band: 433 MHz, cleartext\nsensor ID: 0x8AF2C1 (static, no auth)\nfix: authenticated sensors" },
  ),
  "v2-05": mkDeepCtf(
    "A keyless car sits in a driveway; the fob is inside the house. Use two relay devices to capture the fob's response, relay it across to the car, and unlock + start it.",
    "OP: RELAY RUN\nTarget: a passive keyless entry (PKES) car — no distance bounding.\nGoal: capture the fob, relay the signal, start the car.\nSequence: capture-fob -> relay-signal -> start-engine",
    "FLAG{",
    "Mission Brief",
    ["capture-fob", "R3L4Y_", "Fob Captured", [
      "$ capture-fob --unit-a house",
      "Relay unit A by the house picks up the car's LF challenge and the fob's UHF response.",
      "The car checks the response, not the distance.",
      "Next: relay-signal",
    ]],
    ["relay-signal", "K3Y_", "Signal Relayed", [
      "$ relay-signal --to unit-b",
      "Unit B by the car re-transmits the fob response in real time.",
      "The car believes the key is right there.",
      "Next: start-engine",
    ]],
    ["start-engine", "UNL0CK3D}", "Car Started", [
      "$ start-engine",
      "Doors unlocked and engine started — a relay drive-away with no key.",
      "Fix: UWB distance-bounding (rejects the added relay delay), motion-sensing fobs.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Capture the fob. Run: capture-fob", "Relay the signal. Run: relay-signal", "Start the engine. Run: start-engine", "Run 'assemble', then submit the flag"],
    { "pkes.txt": "system: PKES (no distance bounding)\nattack: 2-device LF/UHF relay\nfix: UWB ranging" },
  ),
  "v2-06": mkDeepCtf(
    "Intercept an ISO 15118 Plug & Charge session on the charging cable, forge a contract certificate, then replay it to authorize charging on someone else's account.",
    "OP: CHARGE PHANTOM\nTarget: an ISO 15118 PnC session over PLC (weak TLS).\nGoal: intercept the handshake, forge a contract, authorize.\nSequence: intercept-15118 -> forge-contract -> authorize-charge",
    "FLAG{PLUG_",
    "Mission Brief",
    ["intercept-15118", "4ND_", "Session Intercepted", [
      "$ intercept-15118 --plc",
      "Tapped the PLC link and observed the EV<->EVSE handshake.",
      "TLS negotiated a weak/optional mode; captured the contract-cert exchange.",
      "Next: forge-contract",
    ]],
    ["forge-contract", "CH4RG3_", "Contract Forged", [
      "$ forge-contract",
      "Crafted a contract certificate impersonating another e-mobility account.",
      "Plug & Charge trusts the contract cert for billing.",
      "Next: authorize-charge",
    ]],
    ["authorize-charge", "PWND}", "Charge Authorized", [
      "$ authorize-charge",
      "Replayed the forged contract -> the EVSE authorized the session against someone else's account.",
      "Fix: enforce strong mutual TLS + proper PKI validation in ISO 15118.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Intercept the session. Run: intercept-15118", "Forge a contract. Run: forge-contract", "Authorize the charge. Run: authorize-charge", "Run 'assemble', then submit the flag"],
    { "pnc.txt": "proto: ISO 15118 PnC over PLC\nflaw: weak/optional TLS\nfix: strong mutual TLS + PKI validation" },
  ),
  "v2-08": mkDeepCtf(
    "You have an authenticated account on an automaker's fleet API. Probe it, find the Broken Object Level Authorization flaw, then change the VIN on a request to take over another vehicle.",
    "OP: FLEET TAKEOVER\nTarget: a connected-car fleet/telematics API.\nGoal: probe, find the BOLA, swap the VIN.\nSequence: probe-api -> find-bola -> change-vin",
    "FLAG{FL33T_",
    "Mission Brief",
    ["probe-api", "4P1_", "API Probed", [
      "$ probe-api --enum",
      "Enumerated endpoints: /vehicle/{vin}/command (unlock, start, locate).",
      "The VIN is a direct object reference in the path.",
      "Next: find-bola",
    ]],
    ["find-bola", "BOLA_", "BOLA Found", [
      "$ find-bola --swap-vin",
      "Server checks that you're logged in — but NOT that the VIN belongs to you. BOLA.",
      "This is the Sam-Curry-class connected-car flaw.",
      "Next: change-vin",
    ]],
    ["change-vin", "T4K30V3R}", "VIN Swapped", [
      "$ change-vin --vin victim",
      "Replayed /vehicle/{vin}/command with a stranger's VIN -> unlock+start on a car that isn't yours.",
      "Fleet-wide takeover possible. Fix: per-object authorization tied to account ownership.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the API. Run: probe-api", "Find the BOLA. Run: find-bola", "Swap the VIN. Run: change-vin", "Run 'assemble', then submit the flag"],
    { "fleetapi.txt": "route: /vehicle/{vin}/command\nflaw: BOLA (no ownership check on VIN)\nfix: per-object authz" },
  ),
};

for (const s of vehicleSec2Stages) {
  const ctf = V2_CTF[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}

// Deep 3-step CTFs for the remaining quiz stages (shared mkDeepCtf factory).
const V2_CTF2: Record<string, CtfConfig> = {
  "v2-01": mkDeepCtf(
    "Modern cars are software-defined: dozens of ECUs on Automotive Ethernet instead of cables. Map the SDV architecture, enumerate the ECUs, and find the widened attack surface.",
    "OP: THE SOFTWARE-DEFINED VEHICLE\nTarget: an SDV's in-vehicle network.\nGoal: map the architecture, enum ECUs, find the surface.\nSequence: map-sdv -> enum-ecus -> find-surface",
    "FLAG{SDV_",
    "Mission Brief",
    ["map-sdv", "3TH3RN3T_", "SDV Mapped", [
      "$ map-sdv",
      "Zonal architecture over Automotive Ethernet; functions are software on shared compute.",
      "More code + more connectivity = a much bigger attack surface than old CAN-only cars.",
      "Next: enum-ecus",
    ]],
    ["enum-ecus", "3CU_", "ECUs Enumerated", [
      "$ enum-ecus",
      "Found 40+ ECUs incl. a central gateway, infotainment (internet-facing), and ADAS compute.",
      "The internet-facing nodes are the way in.",
      "Next: find-surface",
    ]],
    ["find-surface", "SURF4C3}", "Surface Found", [
      "$ find-surface",
      "Infotainment bridges to the vehicle backbone with weak segmentation -> pivot path to driving ECUs.",
      "Map first; every later attack rides this surface.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Map the SDV. Run: map-sdv", "Enumerate ECUs. Run: enum-ecus", "Find the surface. Run: find-surface", "Run 'assemble', then submit the flag"],
    { "sdv.txt": "network: Automotive Ethernet (zonal)\nECUs: 40+ (gateway, IVI internet-facing, ADAS)\nrisk: IVI bridges to backbone" },
  ),
  "v2-07": mkDeepCtf(
    "A self-driving car trusts its sensor fusion. Probe the sensors, craft an adversarial input (a patch / phantom object), and fool the fusion stack into a dangerous decision.",
    "OP: FOOL THE STACK\nTarget: an autonomous vehicle's perception/fusion.\nGoal: probe sensors, craft adversarial input, fool fusion.\nSequence: probe-sensors -> craft-adversarial -> fool-fusion",
    "FLAG{4DV_",
    "Mission Brief",
    ["probe-sensors", "S3NS0R_", "Sensors Probed", [
      "$ probe-sensors",
      "Stack fuses camera + radar + lidar into one world model the planner trusts.",
      "Each sensor can be attacked individually.",
      "Next: craft-adversarial",
    ]],
    ["craft-adversarial", "FUS10N_", "Adversarial Crafted", [
      "$ craft-adversarial --patch + --phantom",
      "A subtle road-sign sticker flips a STOP to 'speed 70'; a projected phantom triggers phantom braking.",
      "Tiny perturbations, large misreads (Keen Lab-style).",
      "Next: fool-fusion",
    ]],
    ["fool-fusion", "F00L3D}", "Fusion Fooled", [
      "$ fool-fusion",
      "Conflicting/poisoned inputs slip through fusion -> the planner makes an unsafe maneuver.",
      "Defenses: sensor cross-checks, anomaly detection, adversarial training, plausibility limits.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Probe the sensors. Run: probe-sensors", "Craft adversarial input. Run: craft-adversarial", "Fool the fusion. Run: fool-fusion", "Run 'assemble', then submit the flag"],
    { "fusion.txt": "inputs: camera + radar + lidar\nattack: sign sticker (STOP->70), phantom braking\nfix: cross-checks + adversarial training" },
  ),
  "v2-09": mkDeepCtf(
    "Cars get patched over the air now — and regulators (UNECE R155/R156, ISO/SAE 21434) require it be done securely. Audit the OTA pipeline, sign the update, and bring it into compliance.",
    "OP: SECURE THE OTA\nTarget: a vehicle OTA update pipeline.\nGoal: audit, sign updates, apply R155/21434.\nSequence: audit-ota -> sign-update -> apply-r155",
    "FLAG{0TA_",
    "Mission Brief",
    ["audit-ota", "R155_", "OTA Audited", [
      "$ audit-ota",
      "Updates delivered over OTA but firmware images are unsigned and not rollback-protected.",
      "A malicious or downgraded image could brick or backdoor the fleet.",
      "Next: sign-update",
    ]],
    ["sign-update", "21434_", "Update Signed", [
      "$ sign-update --uptane",
      "Adopted Uptane: signed, role-separated, rollback-protected images verified on the ECU.",
      "Only authentic, current firmware installs.",
      "Next: apply-r155",
    ]],
    ["apply-r155", "S1GN3D}", "Compliant", [
      "$ apply-r155 --csms",
      "Stood up a Cyber Security Management System (R155) + secure-by-design lifecycle (ISO/SAE 21434).",
      "Security is now a type-approval requirement, not an afterthought.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Audit the OTA. Run: audit-ota", "Sign the update. Run: sign-update", "Apply R155. Run: apply-r155", "Run 'assemble', then submit the flag"],
    { "ota.txt": "before: unsigned images, no rollback protection\nfix: Uptane signing\nregs: UNECE R155/R156, ISO/SAE 21434 (CSMS)" },
  ),
  "v2-10": mkDeepCtf(
    "Securing the software-defined vehicle is defense-in-depth in silicon and ops. Audit the SDV, enable hardware-backed message auth (SecOC) and an HSM, and verify a vehicle SOC watches the fleet.",
    "OP: SECURE THE SDV\nTarget: a software-defined vehicle program.\nGoal: audit, enable SecOC+HSM, verify the VSOC.\nSequence: audit-sdv -> enable-secoc -> verify-vsoc",
    "FLAG{HSM_",
    "Mission Brief",
    ["audit-sdv", "S3C0C_", "SDV Audited", [
      "$ audit-sdv",
      "In-vehicle messages are unauthenticated; keys sit in flash; no fleet monitoring.",
      "An attacker on the bus can forge any message.",
      "Next: enable-secoc",
    ]],
    ["enable-secoc", "VS0C_", "SecOC + HSM Enabled", [
      "$ enable-secoc --hsm",
      "Enabled SecOC (authenticated CAN/Ethernet messages) with keys protected in a hardware HSM.",
      "Forged messages are now rejected; keys can't be extracted from flash.",
      "Next: verify-vsoc",
    ]],
    ["verify-vsoc", "S3CUR3D}", "VSOC Verified", [
      "$ verify-vsoc",
      "A Vehicle SOC ingests IDS telemetry from the fleet + SBOMs -> detects and responds to attacks at scale.",
      "Defense-in-depth: HSM + SecOC + VSOC + SBOMs.",
      "Run 'assemble', then submit the flag.",
    ]],
    ["Read the briefing. Run: cat briefing.txt", "Audit the SDV. Run: audit-sdv", "Enable SecOC + HSM. Run: enable-secoc", "Verify the VSOC. Run: verify-vsoc", "Run 'assemble', then submit the flag"],
    { "sdv-sec.txt": "before: unauth messages, keys in flash, no monitoring\nfix: SecOC + HSM\nops: VSOC + SBOMs" },
  ),
};

for (const s of vehicleSec2Stages) {
  const ctf = V2_CTF2[s.id];
  if (ctf) { s.challengeType = "ctf"; s.ctf = ctf; }
}
