import type { StageConfig, EpochConfig } from "./types";

export const robotSecEpoch: EpochConfig = {
  id: "robot-sec",
  name: "Machines That Move",
  subtitle: "Hacking Robots, Drones & Autonomous Machines",
  description:
    "Robots are computers that can touch the physical world — so hacking one means moving an arm, flying a drone, or fooling a machine's eyes. Build the foundations (sense-plan-act, sensors, actuators, controllers) then go deep: inject on an unauthenticated ROS/DDS graph, command an exposed industrial robot arm, hijack a drone over MAVLink, seize a teleoperation channel, fool perception with an adversarial patch, and backdoor robot firmware — finishing with humanoid robots, functional safety, and how autonomous systems get secured.",
  emoji: "🤖",
  color: "orange",
  unlocked: true,
};

export const robotSecStages: StageConfig[] = [
  // ─── robot-01: Anatomy of a Robot (Quiz) ─────────────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "The robot — a computer that touches the world", location: "Factories, skies, and homes", era: "Modern", emoji: "🤖" },
    id: "robot-01",
    order: 1,
    title: "Anatomy of a Robot",
    subtitle: "Sense, Plan, Act — and the Cyber-Physical Loop",
    category: "cybersecurity",
    xp: 140,
    badge: { id: "badge-rob-anatomy", name: "Robot Anatomist", emoji: "🤖" },
    challengeType: "quiz",
    info: {
      tagline: "A robot is the most consequential kind of computer: one that moves. Hacking software usually steals or breaks data; hacking a robot moves an arm, flies a drone, or stops a heartbeat. To attack or defend one, first understand the loop that turns code into motion.",
      year: 2024,
      overview: [
        "Every robot — an industrial arm, a drone, a vacuum, a humanoid — runs the same loop: SENSE the world, PLAN a response, ACT on it physically, then sense again. That loop is the cyber-physical bridge, and every stage of it is an attack surface.",
        "A robot is built from a few core parts, and each is a target:\n- SENSORS — encoders, IMUs, cameras, LiDAR, force/torque — the robot's perception of itself and the world.\n- ACTUATORS — motors and servos that move joints, wheels, or rotors; this is how a hack becomes physical.\n- CONTROLLERS — a real-time controller for tight motor loops plus higher-level compute for planning/perception.\n- COMMS — internal buses and networks, plus links to operators, the cloud, and other robots.",
        "Why robots demand their own security mindset:\n- The failure mode is physical and can be dangerous — a compromised robot can injure people or wreck equipment, so safety and security are intertwined.\n- They blend IT, OT (operational technology), and AI, inheriting weaknesses from all three.\n- They are increasingly networked and autonomous, widening the attack surface from a single tethered machine to fleets that take their own actions in the world.",
      ],
      technical: {
        title: "Real-Time Control, Degrees of Freedom, and Trust",
        body: [
          "The control stack has layers with different jobs:\n- Low-level real-time control runs tight feedback loops (read encoder, command motor) on a microcontroller or real-time OS, where timing is safety-critical.\n- High-level autonomy (perception, mapping/SLAM, planning) runs on more powerful compute, often Linux, frequently using middleware like ROS.\n- 'Degrees of freedom' (independent joints/axes) define what the robot can physically do — and what an attacker who commands them can make it do.",
          "Trust is the recurring theme and the recurring failure:\n- The robot trusts its sensors (spoof them and it misperceives), trusts its commands (forge them and it misbehaves), and trusts its internal network (reach it and you command the actuators).\n- Because actions are physical, integrity and availability often matter more than confidentiality — a lie to a robot, or a denial of its safety stop, has bodily consequences.\n- The whole epoch follows this thread: a robot is a networked, sensor-driven actuator, and securing it means never trusting a sensor, command, or node without verification.",
        ],
      },
      incident: {
        title: "From Factory Cages to Robots Among Us",
        when: "1961–today",
        where: "Global industry and, increasingly, public spaces",
        impact: "As robots left safety cages to work alongside people and went online, their security flaws became physical-safety problems",
        body: [
          "The first industrial robot, Unimate, joined a GM line in 1961 — bolted down, caged, and isolated. For decades robots were dangerous but contained: kept away from people and off networks. Security wasn't a concern because access was physical and local.",
          "That isolation is gone:\n- Collaborative robots (cobots) now share space with humans; drones fly over cities; service and humanoid robots enter homes and hospitals — all increasingly networked and cloud-connected.\n- Researchers (Trend Micro, Alias Robotics, and academics) have shown these networked robots are often reachable and exploitable, turning a remote bug into physical motion.\n- The lesson framing this epoch: once a robot is connected and uncaged, its cybersecurity is inseparable from human safety — you are securing a machine that can move, lift, fly, and harm.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Sense", sub: "cameras, LiDAR, encoders, IMU", type: "system" },
          { label: "Plan", sub: "perception + planning compute", type: "attacker" },
          { label: "Act", sub: "motors / servos / rotors", type: "victim" },
          { label: "Physical Consequence", sub: "motion in the real world", type: "result" },
        ],
      },
      timeline: [
        { year: 1961, event: "Unimate, the first industrial robot, joins a GM assembly line — caged and isolated" },
        { year: 2007, event: "ROS launches, becoming the dominant open robotics middleware" },
        { year: 2017, event: "Research shows networked industrial robots are reachable and exploitable", highlight: true },
        { year: 2024, event: "Cobots, drones, and humanoids put networked robots among people at scale" },
      ],
      keyTakeaways: [
        "Every robot runs a sense-plan-act loop — the cyber-physical bridge where each step is an attack surface",
        "Core parts: sensors (perception), actuators (motion), controllers (real-time + autonomy), and comms",
        "Hacking a robot is physical and can be dangerous, so security and safety are intertwined",
        "Robots trust their sensors, commands, and internal network — verifying that trust is the whole defense",
      ],
      references: [
        { title: "Robot Operating System (ROS) — overview", url: "https://en.wikipedia.org/wiki/Robot_Operating_System" },
        { title: "Robot Vulnerability Database (Alias Robotics)", url: "https://github.com/aliasrobotics/RVD" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-01-q1", type: "Core Idea", challenge: "The loop.", text: "What loop do essentially all robots run?", options: ["Sense → plan → act → sense again", "Read → write → delete", "Encrypt → send → decrypt", "Buy → sell → hold"], correctIndex: 0, explanation: "The sense-plan-act loop is the cyber-physical bridge that turns code into motion." },
        { id: "robot-01-q2", type: "Parts", challenge: "Making it move.", text: "Which robot component turns a hack into physical motion?", options: ["Actuators (motors/servos/rotors)", "The logo", "The paint", "The manual"], correctIndex: 0, explanation: "Actuators move joints, wheels, and rotors — where a command becomes action." },
        { id: "robot-01-q3", type: "Control", challenge: "Two layers.", text: "Why does a robot have both real-time and higher-level compute?", options: ["Real-time handles tight, timing-critical motor loops; higher compute does perception/planning", "For backup only", "To play music", "They are identical"], correctIndex: 0, explanation: "Tight feedback loops need real-time timing; autonomy needs more powerful compute." },
        { id: "robot-01-q4", type: "Risk", challenge: "Why it's different.", text: "Why do robots need their own security mindset?", options: ["Their failure mode is physical and can injure people or damage equipment", "They never connect to networks", "They store no data", "They can't be hacked"], correctIndex: 0, explanation: "Physical consequences tie robot security directly to human safety." },
        { id: "robot-01-q5", type: "Convergence", challenge: "Three worlds.", text: "Which domains does robot security blend?", options: ["IT, OT (operational technology), and AI", "Only IT", "Only marketing", "None"], correctIndex: 0, explanation: "Robots inherit weaknesses from IT, OT, and AI together." },
        { id: "robot-01-q6", type: "Property", challenge: "What matters most.", text: "For a robot, which properties often matter more than confidentiality?", options: ["Integrity and availability — a lie or a denied safety-stop has bodily consequences", "Only secrecy", "Color accuracy", "File size"], correctIndex: 0, explanation: "Because actions are physical, trustworthy commands and available safety functions are paramount." },
      ],
    },
  },

  // ─── robot-02: ROS & DDS (CTF) ───────────────────────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "ROS — the robot's operating system", location: "Most research & many production robots", era: "2007–today", emoji: "🧩" },
    id: "robot-02",
    order: 2,
    title: "Owning the ROS Graph",
    subtitle: "ROS, ROS 2 / DDS & Unauthenticated Middleware",
    category: "cybersecurity",
    xp: 168,
    badge: { id: "badge-rob-ros", name: "Topic Hijacker", emoji: "🧩" },
    challengeType: "ctf",
    info: {
      tagline: "Most robots think in ROS — a graph of nodes passing messages on named topics. The original ROS had no authentication at all, and even ROS 2's DDS is often left wide open. Find the graph, publish to the right topic, and the robot moves to your command.",
      year: 2024,
      overview: [
        "ROS (the Robot Operating System) is the dominant robotics middleware — not an OS, but a framework where 'nodes' (programs) communicate by publishing and subscribing to named 'topics' (like /cmd_vel for velocity). Learn the graph and you learn how to command the robot.",
        "ROS's security history is the attacker's opportunity:\n- ROS 1 used a central 'ROS Master' with NO authentication or encryption — anyone who could reach it could list topics and publish messages, i.e., command the robot.\n- ROS 2 replaced the master with DDS (Data Distribution Service), a decentralized pub/sub with discovery — better, but often deployed with security disabled and discovery exposed to the network.\n- SROS2 adds authentication and encryption to ROS 2, but it is opt-in and frequently turned off in the field.",
        "Your attack is the standard ROS workflow, abused:\n- DISCOVER — find the ROS Master / DDS participants and enumerate nodes and topics.\n- MAP — identify the topic that commands motion (e.g., /cmd_vel) or other actuators.\n- PUBLISH — send your own messages to that topic; with no authentication, the robot obeys your commands as if they came from a legitimate node.",
      ],
      technical: {
        title: "Topics, Discovery, and Why It's Exposed",
        body: [
          "The graph is the attack surface:\n- In ROS 1, the Master (default TCP port 11311) advertises topics; an attacker connects, subscribes to read sensor data, and publishes to control topics — full read/write to the robot's nervous system.\n- In ROS 2/DDS, discovery traffic (often UDP multicast or known ports) reveals participants; without DDS security, anyone on the network can join the data space and publish.\n- Researchers scanning the internet have repeatedly found thousands of exposed ROS endpoints — robots reachable from anywhere.",
          "Securing the graph is possible but must be turned on:\n- SROS2 / DDS-Security provide authentication (who can join), access control (which topics a node may use), and encryption — defeating rogue publishers and eavesdroppers.\n- Network isolation (no robot middleware exposed to the internet, segmented VLANs) is the first and most-missed control.\n- The principle is familiar: a pub/sub bus that trusts any participant is wide open; trust must be based on verified identity and per-topic authorization, not 'you reached the network'.",
        ],
      },
      incident: {
        title: "Thousands of Robots, Reachable on the Open Internet",
        when: "2018–present",
        where: "Global internet scans (academia & industry)",
        impact: "Scans found numerous unsecured ROS hosts exposed online — robots controllable by anyone who connected",
        body: [
          "In 2018, researchers (including a Brown University team and others) scanned the internet and found numerous ROS Masters exposed to the public — some attached to real robots, where an outsider could read sensors and publish commands. Security firms like Alias Robotics and Trend Micro documented similar exposure and built the Robot Vulnerability Database to track such issues.",
          "It crystallized the ROS security problem:\n- The very openness that made ROS great for research — no auth, easy pub/sub — became a liability when robots went online without isolation or SROS2.\n- A reachable ROS graph means an attacker can move the robot, read its cameras, or disrupt it, all without exploiting a memory bug — just by speaking ROS.\n- The fix (SROS2/DDS-Security plus strict network isolation) is known; the gap is adoption, the same story as CAN, MAVLink, and every other unauthenticated robotics protocol.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Discover the ROS Graph", sub: "Master / DDS participants", type: "attacker" },
          { label: "Enumerate Topics", sub: "find /cmd_vel et al.", type: "system" },
          { label: "Publish Commands", sub: "no auth — robot obeys", type: "victim" },
          { label: "Robot Moves", sub: "actuators on your command", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "ROS launches with an open, unauthenticated pub/sub design" },
        { year: 2018, event: "Internet scans find numerous exposed, controllable ROS hosts", highlight: true },
        { year: 2020, event: "ROS 2 + SROS2/DDS-Security offer authentication and encryption (opt-in)" },
        { year: 2024, event: "Exposed/unsecured ROS/DDS remains a common real-world finding" },
      ],
      keyTakeaways: [
        "ROS is a graph of nodes exchanging messages on named topics (e.g., /cmd_vel) — learn it and you can command the robot",
        "ROS 1 had no authentication; ROS 2's DDS is often deployed with security off and discovery exposed",
        "Attack: discover the graph → find the motion/actuator topic → publish your own messages (the robot obeys)",
        "Defenses: SROS2/DDS-Security (auth, per-topic access, encryption) plus strict network isolation",
      ],
      references: [
        { title: "SROS2 / DDS-Security for ROS 2", url: "https://design.ros2.org/articles/ros2_dds_security.html" },
        { title: "Scanning the internet for ROS (Brown University)", url: "https://cs.brown.edu/~vpk/papers/ros.icra19.pdf" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-02-q1", type: "Core Idea", challenge: "What ROS is.", text: "How does ROS structure a robot's software?", options: ["As nodes communicating by publishing/subscribing to named topics", "As a single monolithic binary", "As a spreadsheet", "As a website"], correctIndex: 0, explanation: "The ROS graph of nodes and topics is how robot programs talk — and how you command them." },
        { id: "robot-02-q2", type: "ROS 1", challenge: "The original flaw.", text: "What was the security posture of ROS 1's Master?", options: ["No authentication or encryption — anyone who reached it could publish commands", "Strong mutual TLS", "Air-gapped by default", "Password-protected"], correctIndex: 0, explanation: "ROS 1 trusted any participant, so reaching the Master meant controlling the robot." },
        { id: "robot-02-q3", type: "ROS 2", challenge: "The successor.", text: "What does ROS 2 use instead of a central Master?", options: ["DDS — decentralized pub/sub with discovery (often left unsecured)", "A blockchain", "Email", "A USB cable"], correctIndex: 0, explanation: "ROS 2 uses DDS; without DDS-Security it's still joinable by anyone on the network." },
        { id: "robot-02-q4", type: "Attack", challenge: "Commanding motion.", text: "How do you make a robot move via an open ROS graph?", options: ["Publish messages to its motion topic (e.g., /cmd_vel)", "Email the manufacturer", "Cut its power", "Repaint it"], correctIndex: 0, explanation: "Publishing to the velocity/actuator topic commands the robot with no auth check." },
        { id: "robot-02-q5", type: "Real World", challenge: "Exposed online.", text: "What did 2018 internet scans reveal about ROS?", options: ["Numerous unsecured ROS hosts — some real robots — reachable and controllable online", "ROS can't be reached remotely", "All robots use strong auth", "ROS is encrypted by default"], correctIndex: 0, explanation: "Open ROS endpoints let outsiders read sensors and publish commands." },
        { id: "robot-02-q6", type: "Defense", challenge: "Locking it down.", text: "What secures a ROS 2 deployment?", options: ["SROS2/DDS-Security (auth, per-topic access, encryption) plus network isolation", "A louder beep", "Hiding the topic names", "Faster motors"], correctIndex: 0, explanation: "Verified identity and per-topic authorization, plus isolation, close the open graph." },
        { id: "robot-02-q7", type: "Concept", challenge: "Read and write.", text: "Beyond moving the robot, what else does an open ROS graph expose?", options: ["Reading sensor topics (cameras, LiDAR) and disrupting nodes", "Only the battery level", "Nothing else", "The Wi-Fi password only"], correctIndex: 0, explanation: "Subscribing reveals sensor data; publishing/disrupting affects any node." },
        { id: "robot-02-q8", type: "Root Cause", challenge: "The pattern.", text: "What general weakness does open ROS share with CAN and MAVLink?", options: ["Trust by network reach instead of verified identity", "Too much encryption", "No messages", "Excessive authentication"], correctIndex: 0, explanation: "Unauthenticated buses trust any participant — the recurring robotics flaw." },
      ],
    },
    ctf: {
      scenario: "A delivery robot on the target network runs ROS 2 with DDS-Security disabled — its discovery is open and any participant can publish. Discover the ROS graph, find the topic that drives its wheels, and publish a velocity command to drive it into your control. Capture the flag in three fragments.",
      hint: "Speak ROS, don't exploit a bug. Discover the graph and topics, then publish to the motion topic — no auth is required.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Discover the ROS/DDS graph and topics. Run: scan-ros",
        "Publish a velocity command to the motion topic. Run: inject-topic",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R0S_", label: "Mission Brief — ROS Graph" },
        { trigger: "scan-ros", value: "DDS_UN4UTH_", label: "Graph Discovered — DDS Unsecured" },
        { trigger: "inject-topic", value: "PWN3D}", label: "Command Published — Robot Driven" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: ROS GRAPH",
          "Target: delivery robot, ROS 2 (Humble), DDS-Security DISABLED, discovery open.",
          "Goal: publish to the wheel-velocity topic to take control.",
          "",
          "DDS trusts any participant here — just join and publish.",
          "Sequence: scan-ros -> inject-topic",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-ros": () => ({
          lines: [
            "Probing DDS discovery (UDP multicast 239.255.0.1, ports 7400+) ...",
            "Participants: /nav2, /perception, /motor_driver, /camera",
            "Topics:  /scan  /camera/image  /odom  /cmd_vel (geometry_msgs/Twist)",
            "DDS-Security: NONE — we can join and publish. Motion topic = /cmd_vel.",
            "Next: inject-topic",
          ],
        }),
        "inject-topic": () => ({
          lines: [
            "Joining DDS data space as a rogue participant ...",
            "Publishing to /cmd_vel: linear.x=0.6  angular.z=0.0 ...",
            "/motor_driver accepts the message (no auth) ... robot drives forward.",
            "ROS graph owned. Run 'assemble' to retrieve your fragment.",
          ],
        }),
        "list-nodes": () => ({
          lines: [
            "Nodes: /nav2 /perception /motor_driver /camera",
            "/motor_driver subscribes /cmd_vel -> wheels. Next: scan-ros",
          ],
        }),
      },
    },
  },

  // ─── robot-03: Industrial Robots & OT (CTF) ──────────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "The industrial robot arm", location: "Factory floors worldwide", era: "Modern", emoji: "🦾" },
    id: "robot-03",
    order: 3,
    title: "Rogue Robots on the Factory Floor",
    subtitle: "Industrial Arms, Controllers, HMIs & PLCs",
    category: "cybersecurity",
    xp: 172,
    badge: { id: "badge-rob-industrial", name: "Factory Operator", emoji: "🦾" },
    challengeType: "ctf",
    info: {
      tagline: "Industrial robot arms move with tons of force and microscopic precision — and many sit on flat factory networks with exposed controllers and default-password HMIs. Reach the controller and you can subtly alter what the robot builds, or make it dangerous.",
      year: 2024,
      overview: [
        "Industrial robots (from ABB, KUKA, FANUC, and others) are the muscle of modern manufacturing: precise, powerful arms directed by a controller, programmed via a teach pendant or HMI, and coordinated by PLCs on an OT (operational technology) network. That whole stack is the attack surface.",
        "These systems carry classic OT weaknesses:\n- EXPOSED CONTROLLERS — robot controllers and HMIs are sometimes reachable on flat networks or even the internet, with default or no credentials.\n- LEGACY PROTOCOLS — industrial protocols (Modbus, PROFINET, proprietary) often lack authentication, like the rest of OT.\n- WEAK INTEGRITY CHECKS — calibration data and control programs may be modifiable without strong verification.",
        "The attacks range from sabotage to safety:\n- SUBTLE — alter a robot's calibration or program so it introduces tiny, hard-to-detect defects into every product (a quality-sabotage attack demonstrated by researchers).\n- OVERT — command unexpected, forceful movements that damage equipment or endanger nearby workers.\n- DISRUPTIVE — halt production or hold a line for ransom.\n- Your CTF: reach an exposed robot HMI/controller and issue a movement command you shouldn't be able to.",
      ],
      technical: {
        title: "The OT Stack and 'Rogue Robots'",
        body: [
          "The control hierarchy is the map:\n- A teach pendant / HMI lets operators jog and program the arm; the robot controller executes programs and holds calibration; PLCs coordinate the cell and safety interlocks.\n- If these are reachable (flat network, exposed remote access, default creds), an attacker can read and change programs, calibration, and setpoints.\n- Trend Micro's 'Rogue Robots' research (2017) showed real industrial robots exposed online and demonstrated altering movements and introducing defects.",
          "Defending OT robotics is segmentation and integrity:\n- Network segmentation (IT/OT separation, no controllers on the internet), strong authentication, and removing default credentials are the basics that are still often missing.\n- Integrity controls — signed/verified control programs and calibration, change monitoring — catch subtle sabotage.\n- Safety systems must be independent of the hackable control path (next stages), so a cyber compromise cannot also disable the emergency stop — security and safety co-designed.",
        ],
      },
      incident: {
        title: "'Rogue Robots' — Hacking Industrial Arms (2017)",
        when: "2017",
        where: "Trend Micro & Politecnico di Milano",
        impact: "Researchers found internet-exposed industrial robots and showed an attacker could alter movements and silently sabotage production",
        body: [
          "In 2017, Trend Micro and Politecnico di Milano published 'Rogue Robots', analyzing industrial robot security. They found robot controllers exposed on the internet and demonstrated attacks: altering a robot's movement accuracy to introduce micro-defects in manufactured parts, tampering with calibration, and undermining the operator's view of the robot's true state.",
          "It reframed factory robots as a cyber risk:\n- The quality-sabotage scenario is insidious — defective parts (in cars, aircraft, medical devices) could ship before anyone notices the robot was compromised.\n- It showed OT robots share IT's exposure but with physical and safety stakes, and often weaker security hygiene.\n- The remedies — segmentation, authentication, signed programs/calibration, and independent safety — are exactly the defenses this stage and the safety stage teach.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Exposed HMI/Controller", sub: "flat net, default creds", type: "attacker" },
          { label: "Robot Controller", sub: "programs + calibration", type: "system" },
          { label: "Command/Alter the Arm", sub: "movement or calibration", type: "victim" },
          { label: "Sabotage or Danger", sub: "defects, damage, harm", type: "result" },
        ],
      },
      timeline: [
        { year: 1961, event: "Unimate begins the industrial-robot era" },
        { year: 2017, event: "'Rogue Robots' shows internet-exposed arms and quality sabotage", highlight: true },
        { year: 2021, event: "OT/ICS security frameworks increasingly cover robotics" },
        { year: 2024, event: "IT/OT segmentation + signed programs pushed as robot-cell baselines" },
      ],
      keyTakeaways: [
        "Industrial robots sit on OT networks with controllers, HMIs/teach pendants, and PLCs — all attack surface",
        "Classic OT flaws apply: exposed controllers, default/no credentials, unauthenticated legacy protocols",
        "Attacks span subtle quality sabotage (micro-defects) to overt dangerous movement and production halts",
        "Defense: IT/OT segmentation, strong auth, signed programs/calibration, and safety independent of the control path",
      ],
      references: [
        { title: "Rogue Robots — Trend Micro & PoliMi (2017)", url: "https://documents.trendmicro.com/assets/wp/wp-industrial-robot-security.pdf" },
        { title: "Industrial robot — overview", url: "https://en.wikipedia.org/wiki/Industrial_robot" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-03-q1", type: "Core Idea", challenge: "The stack.", text: "What controls an industrial robot arm?", options: ["A controller programmed via teach pendant/HMI, coordinated by PLCs on an OT network", "A smartphone app only", "Nothing — it's manual", "A web browser"], correctIndex: 0, explanation: "Controller + HMI/pendant + PLCs form the OT stack that runs the arm." },
        { id: "robot-03-q2", type: "Weakness", challenge: "OT flaws.", text: "Which weakness is common in industrial robot deployments?", options: ["Exposed controllers/HMIs with default or no credentials", "Too many passwords", "Excessive encryption", "No network at all"], correctIndex: 0, explanation: "Flat networks, exposed remote access, and default creds are classic OT problems." },
        { id: "robot-03-q3", type: "Subtle Attack", challenge: "Quiet sabotage.", text: "What is the 'quality sabotage' attack on a robot?", options: ["Altering calibration/program to introduce tiny defects into every product", "Painting the robot", "Turning it off loudly", "Stealing the manual"], correctIndex: 0, explanation: "Micro-defects can ship undetected in cars, aircraft, or medical devices." },
        { id: "robot-03-q4", type: "Overt Attack", challenge: "Danger.", text: "What is the overt physical risk of a compromised arm?", options: ["Forceful, unexpected movement that damages equipment or endangers workers", "A slow boot time", "A dim light", "Higher electricity use only"], correctIndex: 0, explanation: "Powerful arms moving unexpectedly are a direct safety hazard." },
        { id: "robot-03-q5", type: "Real World", challenge: "The research.", text: "What did Trend Micro's 'Rogue Robots' (2017) demonstrate?", options: ["Internet-exposed industrial robots and attacks altering movement/calibration", "That robots are unhackable", "A faster welding method", "A new programming language"], correctIndex: 0, explanation: "They found exposed controllers and showed movement/quality sabotage." },
        { id: "robot-03-q6", type: "Defense", challenge: "Protecting the cell.", text: "What protects an industrial robot cell?", options: ["IT/OT segmentation, strong auth, signed programs/calibration, independent safety", "A bigger arm", "Removing the controller", "Trusting the flat network"], correctIndex: 0, explanation: "Segmentation, authentication, integrity, and independent safety are the core controls." },
      ],
    },
    ctf: {
      scenario: "A factory's robot cell is reachable from the office network — the arm's HMI uses default credentials and the controller accepts movement commands without authentication. Reach the HMI, access the controller, and issue an unauthorized movement command to prove control of the arm. Capture the flag in three fragments.",
      hint: "It's an OT exposure, not a 0-day. Reach the default-cred HMI, then command the controller directly.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Log into the exposed HMI (default credentials). Run: access-hmi",
        "Issue an unauthorized movement command to the arm. Run: command-arm",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R0GU3_R0B0T_", label: "Mission Brief — Rogue Robot" },
        { trigger: "access-hmi", value: "4RM_HMI_", label: "HMI Accessed (default creds)" },
        { trigger: "command-arm", value: "0WN3D}", label: "Arm Commanded" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: ROGUE ROBOT",
          "Target: 6-axis arm cell, HMI on the office VLAN (no IT/OT segmentation).",
          "HMI default creds; controller accepts movement jobs without auth.",
          "",
          "Goal: reach the HMI and command an unauthorized arm movement.",
          "Sequence: access-hmi -> command-arm",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "scan-cell": () => ({
          lines: [
            "Scanning robot cell from office VLAN ...",
            "  10.20.4.10 robot HMI (web :80, default admin/admin)",
            "  10.20.4.11 robot controller (proprietary :2099, no auth)",
            "  10.20.4.12 safety PLC (separate — good)",
            "Next: access-hmi",
          ],
        }),
        "access-hmi": () => ({
          lines: [
            "Connecting to HMI 10.20.4.10 ... trying default admin/admin ... SUCCESS.",
            "HMI shows program 'WELD_DOORFRAME', calibration table, jog controls.",
            "Controller reachable at 10.20.4.11 (no auth). Next: command-arm",
          ],
        }),
        "command-arm": () => ({
          lines: [
            "Sending movement job to controller 10.20.4.11 ...",
            "  MoveJ axis=all  to UNSAFE_POSE  speed=80% (no auth challenge)",
            "Arm executes the unauthorized movement. (Safety PLC still independent.)",
            "Robot arm under control. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── robot-04: Drones & MAVLink (CTF) ────────────────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "The autonomous drone (UAV)", location: "The skies", era: "Modern", emoji: "🚁" },
    id: "robot-04",
    order: 4,
    title: "Hijacking the Drone",
    subtitle: "UAV Autopilots & the MAVLink Protocol",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-rob-drone", name: "Drone Hijacker", emoji: "🚁" },
    challengeType: "ctf",
    info: {
      tagline: "Drones are flying robots, and most of them speak MAVLink — a control protocol that, by default, has no authentication. Get on the link between the drone and its ground station and you can read its telemetry, change its mode, or command it to land.",
      year: 2024,
      overview: [
        "A drone (UAV) is a robot whose actuators are rotors. An autopilot (commonly PX4 or ArduPilot) flies it, while a Ground Control Station (GCS) sends missions and commands. The conversation between them usually uses MAVLink — and MAVLink's defaults are a security gift to attackers.",
        "MAVLink is efficient and open — and unauthenticated:\n- It's a lightweight messaging protocol for commands (e.g., arm, set mode, go to waypoint) and telemetry, often carried over radio or Wi-Fi.\n- By default it has no authentication or encryption, so an attacker on the link can inject valid commands or read everything.\n- Many consumer drones add their own (sometimes weak) link security or Wi-Fi that can be deauthenticated or joined.",
        "Your hijack rides the control link:\n- INTERCEPT — get onto the MAVLink channel (sniff the radio/Wi-Fi, join the network).\n- UNDERSTAND — read telemetry to learn the drone's state and confirm command acceptance.\n- COMMAND — inject a MAVLink command — change flight mode to LAND or RTL, disarm, or redirect a waypoint — and the autopilot obeys.",
      ],
      technical: {
        title: "MAVLink Messages and Link Takeover",
        body: [
          "The protocol is the playbook:\n- MAVLink messages include COMMAND_LONG (e.g., MAV_CMD_NAV_LAND, component arm/disarm), SET_MODE, and mission items; an attacker who can transmit valid frames can issue these.\n- Because there's no authentication by default, the autopilot can't distinguish the real GCS from a rogue one — classic trust-by-link.\n- On Wi-Fi drones, deauthentication attacks can knock the operator off so the attacker takes over; on radio links, an SDR can inject.",
          "Securing drones is an evolving area:\n- MAVLink 2 supports message signing (a shared-key MAC) to authenticate commands — but it must be enabled and keys managed.\n- Encryption on the radio link, GCS authentication, and 'geofencing'/failsafe behaviors (return-to-home on link loss) reduce impact.\n- Counter-UAS and regulatory tools (Remote ID) address rogue drones, while operators should treat the command link as hostile — the same don't-trust-the-link lesson as CAN and ROS.",
        ],
      },
      incident: {
        title: "From GPS-Spoofed Drones to MAVLink Injection",
        when: "2011–present",
        where: "Drone security research & real incidents",
        impact: "Researchers have hijacked drones via GPS spoofing and via unauthenticated MAVLink command injection",
        body: [
          "Drone hijacking has a long public history: in 2011 a U.S. RQ-170 drone was reportedly brought down in Iran (with GPS spoofing cited), and researchers like Samy Kamkar's 'SkyJack' (2013) showed autonomously hijacking other drones over Wi-Fi. More recently, studies and tools demonstrated injecting MAVLink commands to seize control of hobby and commercial UAVs.",
          "The throughline is unauthenticated control:\n- Whether via GPS spoofing (lying to navigation) or MAVLink injection (forging commands), the root issue is a flying robot that trusts inputs it shouldn't.\n- As drones proliferate for delivery, inspection, and defense, an unauthenticated command link is a serious safety and security gap.\n- The fixes — MAVLink 2 signing, link encryption, GCS auth, robust failsafes, and treating GNSS as spoofable — mirror the defenses across this whole curriculum.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Get on the MAVLink Link", sub: "sniff radio / join Wi-Fi", type: "attacker" },
          { label: "Read Telemetry", sub: "learn state, confirm control", type: "system" },
          { label: "Inject MAVLink Command", sub: "SET_MODE / LAND / disarm", type: "victim" },
          { label: "Autopilot Obeys", sub: "drone hijacked", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "RQ-170 drone reportedly downed in Iran (GPS spoofing cited)" },
        { year: 2013, event: "'SkyJack' autonomously hijacks other drones over Wi-Fi" },
        { year: 2019, event: "MAVLink 2 message signing added to authenticate commands", highlight: true },
        { year: 2024, event: "Remote ID + counter-UAS grow as drones proliferate" },
      ],
      keyTakeaways: [
        "Drones are flying robots; most use an autopilot (PX4/ArduPilot) and the MAVLink protocol to a ground station",
        "MAVLink has no authentication/encryption by default, so an attacker on the link can inject valid commands",
        "Hijack: get on the link → read telemetry → inject a command (SET_MODE LAND/RTL, disarm, redirect waypoint)",
        "Defenses: MAVLink 2 message signing, link encryption, GCS auth, failsafes — and treat GNSS/link as hostile",
      ],
      references: [
        { title: "MAVLink — protocol overview", url: "https://en.wikipedia.org/wiki/MAVLink" },
        { title: "MAVLink 2 message signing", url: "https://mavlink.io/en/guide/message_signing.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-04-q1", type: "Core Idea", challenge: "Flying robot.", text: "What protocol do most drone autopilots use to talk to a ground station?", options: ["MAVLink", "HTTP", "SMTP", "Bluetooth only"], correctIndex: 0, explanation: "MAVLink carries commands and telemetry between the drone and the GCS." },
        { id: "robot-04-q2", type: "Weakness", challenge: "The default flaw.", text: "What is MAVLink's default security posture?", options: ["No authentication or encryption", "Mutual TLS", "Hardware tokens", "Air-gapped"], correctIndex: 0, explanation: "By default the autopilot can't tell the real GCS from a rogue transmitter." },
        { id: "robot-04-q3", type: "Attack", challenge: "Taking over.", text: "What can an attacker on the MAVLink link do?", options: ["Inject commands like SET_MODE LAND/RTL, disarm, or redirect waypoints", "Only read the battery", "Nothing", "Change the paint"], correctIndex: 0, explanation: "Valid forged commands let the attacker seize control of the flight." },
        { id: "robot-04-q4", type: "Wi-Fi Drones", challenge: "Knock off the pilot.", text: "How are some Wi-Fi drones hijacked?", options: ["Deauthentication knocks off the operator, then the attacker takes over", "By repainting them", "By GPS only", "They can't be"], correctIndex: 0, explanation: "Wi-Fi deauth plus joining the link (e.g., SkyJack) seizes control." },
        { id: "robot-04-q5", type: "History", challenge: "Famous case.", text: "What was cited in the 2011 RQ-170 drone incident?", options: ["GPS spoofing to mislead the drone's navigation", "A weak password", "A virus on a CD", "Nothing"], correctIndex: 0, explanation: "GPS spoofing — lying to navigation — was reportedly involved." },
        { id: "robot-04-q6", type: "Defense", challenge: "Authenticating commands.", text: "What feature authenticates MAVLink commands?", options: ["MAVLink 2 message signing (a shared-key MAC)", "A louder motor", "A bigger battery", "Disabling telemetry"], correctIndex: 0, explanation: "MAVLink 2 signing lets the autopilot reject forged commands — if enabled." },
      ],
    },
    ctf: {
      scenario: "A delivery drone flies a waypoint mission over MAVLink with no message signing and an open Wi-Fi telemetry link. Get onto the link, read its telemetry to confirm command acceptance, and inject a MAVLink command to force it to land in a field you control. Capture the flag in three fragments.",
      hint: "Get on the link, then forge a command. MAVLink isn't signed here — SET_MODE to LAND (or RTL) will be obeyed.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Get on the MAVLink telemetry link. Run: intercept-mavlink",
        "Inject a command to force a landing. Run: send-mavcmd LAND",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{M4VL1NK_", label: "Mission Brief — Drone Hijack" },
        { trigger: "intercept-mavlink", value: "DR0N3_", label: "On the MAVLink Link" },
        { trigger: "send-mavcmd LAND", value: "H1J4CK3D}", label: "Forced Landing Commanded" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: DRONE HIJACK",
          "Target: delivery UAV, ArduPilot, MAVLink over open Wi-Fi, NO message signing.",
          "Goal: force the drone to LAND in a controlled area.",
          "",
          "MAVLink is unauthenticated here — a valid command frame is obeyed.",
          "Sequence: intercept-mavlink -> send-mavcmd LAND",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "intercept-mavlink": () => ({
          lines: [
            "Joining drone Wi-Fi telemetry (UDP 14550) ...",
            "MAVLink stream acquired: HEARTBEAT (ArduCopter), GLOBAL_POSITION_INT",
            "  mode=AUTO  armed=true  alt=82m  signing=DISABLED",
            "We can transmit accepted commands. Next: send-mavcmd LAND",
          ],
        }),
        "send-mavcmd": (args) => {
          const a = (args[0] || "").toUpperCase();
          if (a === "LAND" || a === "RTL") {
            return {
              lines: [
                `Injecting COMMAND_LONG: SET_MODE ${a} (MAV_CMD) ...`,
                "Autopilot ACK: command accepted (no signing challenge).",
                a === "LAND" ? "Drone descending to land at current position." : "Drone returning to launch.",
                "Drone hijacked. Run 'assemble' to retrieve your fragment.",
              ],
            };
          }
          return { lines: [`send-mavcmd: unknown command '${args[0] || ""}'. Try: send-mavcmd LAND`] };
        },
      },
    },
  },

  // ─── robot-05: Teleoperation & Control Links (CTF) ───────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "Teleoperation — a human steering from afar", location: "Remote-controlled robots", era: "Modern", emoji: "🕹️" },
    id: "robot-05",
    order: 5,
    title: "Seizing the Teleoperation Channel",
    subtitle: "Remote Control, Latency & Channel Hijacking",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-rob-teleop", name: "Channel Seizer", emoji: "🕹️" },
    challengeType: "ctf",
    info: {
      tagline: "Many robots aren't autonomous — a human drives them from afar: bomb-disposal bots, surgical robots, remote excavators, telepresence units. The control channel carrying that human's intent is a lifeline. Hijack it, and you become the operator.",
      year: 2024,
      overview: [
        "Teleoperation puts a human in the loop over a network: the operator's commands stream to the robot and video/telemetry streams back. It powers high-stakes machines — explosive-ordnance-disposal robots, telesurgery systems, remote mining and construction — where seizing the channel means controlling something dangerous.",
        "The control channel has distinctive weaknesses:\n- UNAUTHENTICATED/UNENCRYPTED LINKS — like other robotics protocols, many teleop channels lack strong authentication or encryption, inviting man-in-the-middle and command injection.\n- LATENCY & RELIABILITY — teleop is sensitive to delay and dropouts; an attacker can degrade (jam/flood) the link to cause loss of control or trigger unsafe failsafes.\n- TRUST IN THE FEED — operators act on the returned video/telemetry; spoofing or replaying it can make them issue wrong commands.",
        "Your attack seizes the operator's seat:\n- INTERCEPT — get between the operator and the robot (MITM the network path or radio).\n- HIJACK — inject your own control commands (or take over after disrupting the real operator), so the robot follows you.\n- The deeper danger: for a surgical or EOD robot, channel takeover is directly life-threatening — which is why these links demand the strongest protections.",
      ],
      technical: {
        title: "MITM, Disruption, and Feedback Spoofing",
        body: [
          "Three levers compromise teleoperation:\n- Command injection / MITM — without mutual authentication and encryption, an attacker can insert or alter control messages on the path.\n- Denial / degradation — jamming or flooding the link causes latency spikes or loss of control; if failsafes are weak, that itself is dangerous.\n- Feedback manipulation — replaying or spoofing the video/telemetry feed deceives the operator into harmful actions.",
          "Securing teleoperation is about a trustworthy, resilient channel:\n- Mutual authentication and end-to-end encryption (so neither commands nor feedback can be forged) are the baseline.\n- Integrity and freshness (sequence numbers/timestamps) defeat replay; redundant links and well-designed failsafes handle disruption safely.\n- For safety-critical teleop (surgery, EOD), defense-in-depth and a safe-state fallback are mandatory — the channel is a lifeline, and lifelines get hardened, the recurring theme of cyber-physical security.",
        ],
      },
      incident: {
        title: "Telesurgery and the Hijackable Control Link",
        when: "2015–present",
        where: "Robotics & medical-robotics research",
        impact: "Researchers showed teleoperated robots — including a surgical robot testbed — could be disrupted or taken over via the control channel",
        body: [
          "In 2015, researchers at the University of Washington demonstrated attacks on a teleoperated surgical robot (the Raven II testbed), showing they could disrupt and manipulate its movements by interfering with the unencrypted control channel — causing jerky motion or denial of control. Similar concerns apply to EOD, industrial, and telepresence robots.",
          "It made the stakes vivid:\n- For telesurgery, a hijacked or disrupted channel is a patient-safety emergency, not a data breach.\n- The root cause was familiar: an unauthenticated, unencrypted control link trusted to carry life-critical commands.\n- The defenses — mutual auth, encryption, integrity/freshness, resilient links, and safe-state failsafes — are why safety-critical teleoperation must treat its channel as the crown jewel, exactly what this stage teaches.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Operator", sub: "human commands over network", type: "system" },
          { label: "MITM the Channel", sub: "no mutual auth/encryption", type: "attacker" },
          { label: "Inject / Disrupt", sub: "commands or feedback", type: "victim" },
          { label: "Attacker Drives the Robot", sub: "or denies the real operator", type: "result" },
        ],
      },
      timeline: [
        { year: 2015, event: "UW researchers attack a teleoperated surgical robot (Raven II)", highlight: true },
        { year: 2018, event: "5G/edge teleoperation expands remote control of machines" },
        { year: 2021, event: "Remote operation of vehicles/industrial machines goes commercial" },
        { year: 2024, event: "Encryption + safe-state failsafes pushed for safety-critical teleop" },
      ],
      keyTakeaways: [
        "Teleoperation streams a human's commands to a robot (EOD, surgery, mining) — the control channel is the lifeline",
        "Weaknesses: unauthenticated/unencrypted links (MITM/injection), latency/jam disruption, and spoofable feedback",
        "Attack: get between operator and robot, then inject commands or take over after disrupting the real operator",
        "Defenses: mutual auth + encryption, integrity/freshness vs. replay, redundant links, and safe-state failsafes",
      ],
      references: [
        { title: "Security of teleoperated surgical robots (Raven II, 2015)", url: "https://arxiv.org/abs/1504.04339" },
        { title: "Teleoperation — overview", url: "https://en.wikipedia.org/wiki/Teleoperation" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-05-q1", type: "Core Idea", challenge: "Human in the loop.", text: "What is teleoperation?", options: ["A human remotely driving a robot over a network (commands out, video/telemetry back)", "A fully autonomous robot", "A type of battery", "A robot with no comms"], correctIndex: 0, explanation: "Teleop streams operator commands to the robot and feedback back — the channel is critical." },
        { id: "robot-05-q2", type: "Targets", challenge: "High stakes.", text: "Which is a high-stakes teleoperated robot?", options: ["A surgical or bomb-disposal (EOD) robot", "A toy with no network", "A paperweight", "A stapler"], correctIndex: 0, explanation: "Surgery, EOD, and remote heavy machinery make channel takeover dangerous." },
        { id: "robot-05-q3", type: "Weakness", challenge: "The link.", text: "What is the core weakness of many teleop channels?", options: ["Lack of strong authentication/encryption (MITM and injection)", "Too much encryption", "No operator", "They are air-gapped"], correctIndex: 0, explanation: "Unauthenticated/unencrypted control links invite man-in-the-middle and forged commands." },
        { id: "robot-05-q4", type: "Disruption", challenge: "Breaking the link.", text: "How can degrading the link be dangerous even without injection?", options: ["Latency spikes or loss of control can cause unsafe behavior if failsafes are weak", "It speeds the robot up safely", "It charges the battery", "It has no effect"], correctIndex: 0, explanation: "Jamming/flooding causes loss of control; weak failsafes make that hazardous." },
        { id: "robot-05-q5", type: "Feedback", challenge: "Fooling the human.", text: "How can manipulating the feedback feed cause harm?", options: ["Spoofed/replayed video/telemetry makes the operator issue wrong commands", "It improves the picture", "It can't", "It only changes the color"], correctIndex: 0, explanation: "Operators act on the feed; deceiving it leads to harmful actions." },
        { id: "robot-05-q6", type: "Defense", challenge: "Hardening the lifeline.", text: "What secures safety-critical teleoperation?", options: ["Mutual auth + encryption, integrity/freshness, redundant links, and safe-state failsafes", "A longer cable only", "Trusting the network", "Removing the operator"], correctIndex: 0, explanation: "A trustworthy, resilient channel with safe fallback is mandatory for life-critical teleop." },
      ],
    },
    ctf: {
      scenario: "A remote-operated inspection robot is driven by an operator over an unencrypted control channel with no mutual authentication. Get between the operator and the robot, man-in-the-middle the channel, and seize control so the robot follows your commands instead. Capture the flag in three fragments.",
      hint: "Own the path. MITM the unencrypted control channel, then inject your own commands to take the operator's seat.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Man-in-the-middle the unencrypted control channel. Run: mitm-control",
        "Seize control and drive the robot. Run: seize-control",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{T3L30P_", label: "Mission Brief — Teleop Hijack" },
        { trigger: "mitm-control", value: "CH4NN3L_", label: "Channel Intercepted" },
        { trigger: "seize-control", value: "S31Z3D}", label: "Operator's Seat Seized" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: TELEOP HIJACK",
          "Target: inspection robot teleoperated over plain UDP (no mTLS, no signing).",
          "Operator at 10.40.1.5 -> robot at 10.40.1.9, control + video stream.",
          "",
          "Goal: MITM the control channel and seize control of the robot.",
          "Sequence: mitm-control -> seize-control",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "mitm-control": () => ({
          lines: [
            "ARP-spoofing the path operator(10.40.1.5) <-> robot(10.40.1.9) ...",
            "Control channel is plain UDP, no authentication or encryption.",
            "Now relaying (and able to alter) all control + video frames.",
            "Next: seize-control",
          ],
        }),
        "seize-control": () => ({
          lines: [
            "Dropping the operator's commands, injecting our own control stream ...",
            "Freezing the operator's video feed (replay) so they don't notice ...",
            "Robot now follows OUR joystick. Channel seized.",
            "Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── robot-06: Perception & AI Attacks (CTF) ─────────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "Machine perception — the robot's eyes", location: "Cameras & neural networks", era: "Modern", emoji: "👁️" },
    id: "robot-06",
    order: 6,
    title: "Fooling the Robot's Eyes",
    subtitle: "Adversarial Patches & Perception Attacks",
    category: "cybersecurity",
    xp: 170,
    badge: { id: "badge-rob-perception", name: "Perception Breaker", emoji: "👁️" },
    challengeType: "ctf",
    info: {
      tagline: "A robot's neural-network vision is brilliant — and brittle. A carefully crafted pattern, meaningless to you, can make it see a phantom or go blind to a real object. Don't hack the robot's code; hack what it perceives.",
      year: 2024,
      overview: [
        "Modern robots perceive with deep neural networks — object detectors, classifiers, SLAM. These models are accurate on normal inputs but vulnerable to 'adversarial examples': inputs tweaked just enough to be confidently misread, while looking normal (or like noise) to humans.",
        "Adversarial attacks come in physical, robot-relevant forms:\n- ADVERSARIAL PATCH — a printed pattern that, placed in the scene, hijacks a detector (e.g., makes it classify anything as a toaster, or makes a person undetectable).\n- OBJECT PERTURBATION — stickers on a stop sign that make a detector read it as a speed-limit sign (robust physical-world attacks).\n- SENSOR-LEVEL — spoofing LiDAR/camera to inject or hide objects (as in the vehicle ADAS stage).",
        "Against a robot, fooling perception fools the whole loop:\n- If the robot misperceives, it mis-plans and mis-acts — a navigation robot could ignore an obstacle, or a sorting robot mishandle an item.\n- These attacks are cheap and physical: a printed patch, no network access needed.\n- The defense isn't a single patch to the model but robustness and cross-checking — adversarial training, sensor fusion, and plausibility, the same 'don't trust one perception' theme as autonomous vehicles.",
      ],
      technical: {
        title: "Why Neural Perception Is Brittle",
        body: [
          "The vulnerability is intrinsic to how the models learn:\n- Neural nets find decision boundaries that work statistically but can be crossed by small, crafted perturbations — adversarial examples (Goodfellow et al., 2014).\n- 'Adversarial patches' (Brown et al., 2017) and 'robust physical perturbations' (Eykholt et al., 2018, the stop-sign attack) make these work in the real world, at angles and distances.\n- Researchers have even built patches that make a person invisible to common object detectors — directly relevant to robots that must see people for safety.",
          "Defenses raise the cost but don't fully solve it:\n- Adversarial training (training on adversarial examples), input preprocessing, and detection of anomalous inputs improve robustness.\n- Sensor fusion and temporal/plausibility checks catch many physical attacks (a patch that only fools the camera fails if LiDAR and tracking disagree).\n- For safety, conservative behavior on uncertainty (slow/stop when perception is unreliable) — treating perception as adversarial is the durable posture, just as in vehicle ADAS.",
        ],
      },
      incident: {
        title: "Stop Signs, Invisibility Patches, and Brittle Vision",
        when: "2014–present",
        where: "AI security research",
        impact: "Repeated demonstrations show physical adversarial attacks reliably fool the neural perception robots and cars depend on",
        body: [
          "Since the 2014 discovery of adversarial examples, researchers have shown increasingly practical physical attacks: stickers that turn a stop sign into a 'speed limit' to a detector (2018), printed patches that make people undetectable to object detectors (2019), and patches that force arbitrary misclassifications. These target the exact vision models used in robots and autonomous vehicles.",
          "The implication for robotics is direct:\n- A robot that can be made to not see a person, or to hallucinate an object, has a safety problem an attacker can trigger with a piece of paper.\n- It's a fundamentally different bug class — the code is 'correct', but the learned model is exploitable.\n- The mitigations (adversarial training, fusion, plausibility, conservative fallback) are why robust autonomy treats its own perception as untrusted — the lesson this stage drives home.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Neural Perception", sub: "detector / classifier / SLAM", type: "system" },
          { label: "Craft Adversarial Patch", sub: "printed, physical", type: "attacker" },
          { label: "Present It in the Scene", sub: "no network needed", type: "victim" },
          { label: "Robot Misperceives", sub: "phantom or blindness", type: "result" },
        ],
      },
      timeline: [
        { year: 2014, event: "Adversarial examples discovered — tiny perturbations fool neural nets" },
        { year: 2017, event: "Adversarial patch: a printed pattern hijacks object detectors" },
        { year: 2018, event: "Stop-sign stickers reliably fool detectors in the physical world", highlight: true },
        { year: 2019, event: "Patches make people invisible to common detectors" },
      ],
      keyTakeaways: [
        "Robot vision uses neural nets that are accurate but brittle — vulnerable to adversarial examples",
        "Physical attacks (adversarial patches, object stickers) make detectors hallucinate or go blind, with just a printout",
        "Fooling perception fools the whole sense-plan-act loop — a safety problem triggerable by a piece of paper",
        "Defense: adversarial training, sensor fusion, plausibility checks, and conservative fallback on uncertainty",
      ],
      references: [
        { title: "Adversarial Patch (Brown et al., 2017)", url: "https://arxiv.org/abs/1712.09665" },
        { title: "Robust Physical-World Attacks (stop sign, Eykholt et al., 2018)", url: "https://arxiv.org/abs/1707.08945" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-06-q1", type: "Core Idea", challenge: "Brittle brilliance.", text: "What is an adversarial example?", options: ["An input tweaked just enough to be confidently misread by a neural net", "A faster CPU", "A type of motor", "A network packet"], correctIndex: 0, explanation: "Small crafted perturbations cross the model's decision boundary, fooling it." },
        { id: "robot-06-q2", type: "Patch", challenge: "Physical attack.", text: "What is an adversarial patch?", options: ["A printed pattern that hijacks a detector when placed in the scene", "A software update", "A battery patch", "A network firewall"], correctIndex: 0, explanation: "A physical patch can force misclassification or hide objects from detectors." },
        { id: "robot-06-q3", type: "Real World", challenge: "The stop sign.", text: "What did the 2018 robust physical-world attack show?", options: ["Stickers can make a detector read a stop sign as a different sign", "Stop signs are unhackable", "A new sign design", "Nothing"], correctIndex: 0, explanation: "Physical perturbations fooled detectors at real angles and distances." },
        { id: "robot-06-q4", type: "Impact", challenge: "Whole loop.", text: "Why does fooling perception endanger a robot?", options: ["Misperception leads to mis-planning and mis-action across the sense-plan-act loop", "It only changes logs", "It speeds the robot up", "It has no effect"], correctIndex: 0, explanation: "If the robot can't see a person or hallucinates an object, it acts unsafely." },
        { id: "robot-06-q5", type: "Bug Class", challenge: "Different kind.", text: "Why are adversarial attacks a distinct bug class?", options: ["The code is correct, but the learned model itself is exploitable", "They are normal memory bugs", "They require source code", "They are not real"], correctIndex: 0, explanation: "It's a model vulnerability, not a coding flaw — needing different defenses." },
        { id: "robot-06-q6", type: "Defense", challenge: "Robust perception.", text: "What helps defend a robot's perception?", options: ["Adversarial training, sensor fusion, plausibility checks, and conservative fallback", "Trusting the camera fully", "Removing sensors", "A louder alarm"], correctIndex: 0, explanation: "Robustness plus cross-checking and safe fallback treat perception as untrusted." },
      ],
    },
    ctf: {
      scenario: "A warehouse robot uses a camera-based object detector to avoid people and obstacles. You can't touch its code — but its perception is a standard neural net with no adversarial defenses. Craft an adversarial patch and present it so the detector fails to see an obstacle (or hallucinates a clear path). Capture the flag in three fragments.",
      hint: "Attack the model, not the code. Craft an adversarial patch tuned to the detector, then present it in the robot's view.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Craft an adversarial patch for the detector. Run: craft-patch",
        "Present the patch in the robot's field of view. Run: present-patch",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{4DV_P4TCH_", label: "Mission Brief — Perception Attack" },
        { trigger: "craft-patch", value: "V1S10N_", label: "Adversarial Patch Crafted" },
        { trigger: "present-patch", value: "F00L3D}", label: "Detector Fooled" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: PERCEPTION ATTACK",
          "Target: warehouse robot, YOLO-style detector, NO adversarial defenses, no sensor fusion.",
          "Goal: make the detector fail to see an obstacle (or see a fake clear path).",
          "",
          "This is a model attack, not a code exploit — a printed patch suffices.",
          "Sequence: craft-patch -> present-patch",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "craft-patch": () => ({
          lines: [
            "Optimizing an adversarial patch against the target detector ...",
            "  objective: suppress 'person'/'obstacle' class confidence below threshold",
            "  printable, robust to angle/lighting",
            "Patch generated (looks like colorful noise to a human). Next: present-patch",
          ],
        }),
        "present-patch": () => ({
          lines: [
            "Placing the printed patch in the robot's camera view ...",
            "Detector confidence for the obstacle drops 0.97 -> 0.08 (suppressed).",
            "Robot perceives a clear path and proceeds — perception fooled.",
            "Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── robot-07: Humanoid & Service Robots (Quiz) ──────────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "The humanoid & service robot", location: "Homes, hospitals, and warehouses", era: "Modern", emoji: "🦿" },
    id: "robot-07",
    order: 7,
    title: "Humanoids Among Us",
    subtitle: "Service & Humanoid Robots — Cameras, Cloud & Backdoors",
    category: "cybersecurity",
    xp: 152,
    badge: { id: "badge-rob-humanoid", name: "Humanoid Analyst", emoji: "🦿" },
    challengeType: "quiz",
    info: {
      tagline: "Robots are moving into our homes and hospitals — humanoids and service bots packed with cameras, microphones, and cloud links. They combine every risk in this epoch with a new one: they live where we do, watching and listening.",
      year: 2024,
      overview: [
        "The current wave of robotics is humanoid and service robots: Tesla's Optimus, Figure's humanoids, Boston Dynamics' Atlas and Spot, and a flood of capable, affordable platforms from companies like Unitree. They're designed to operate among people — which concentrates safety, privacy, and security risks.",
        "These robots inherit and amplify the epoch's risks:\n- THEY MOVE AMONG US — uncaged, near people, so a compromise is a direct physical-safety issue.\n- THEY WATCH AND LISTEN — cameras, microphones, and depth sensors stream sensitive data, often to the cloud, creating a serious privacy attack surface.\n- THEY'RE CONNECTED — app control, cloud services, teleoperation, and OTA updates add the connected-vehicle/IoT risks to a walking machine.",
        "Real findings show the stakes are not hypothetical:\n- Security researchers have reported serious issues in popular robots — including a hidden remote-access tunnel/backdoor found in Unitree robots (2025), which could let an outsider access the robot and its sensors.\n- Cloud dependence means a vendor breach or a robot's stolen credentials can expose fleets of in-home devices.\n- The combination of mobility, sensing, and connectivity is why securing humanoid/service robots needs everything in this epoch plus strong privacy and supply-chain controls.",
      ],
      technical: {
        title: "Mobility + Sensing + Cloud = Compound Risk",
        body: [
          "Each property adds a threat layer:\n- Mobility/manipulation: the actuator-control risks from earlier stages, now in a machine that can walk up to and touch a person.\n- Sensing: always-on cameras/mics are a privacy goldmine; a compromised robot becomes a mobile surveillance device in a private space.\n- Cloud/app/teleop: remote attack surface, account takeover, and vendor-side breaches can reach many robots at once.",
          "Securing them is defense-in-depth plus privacy:\n- Strong device identity and authenticated/encrypted cloud and control links; no hidden backdoors or hardcoded tunnels (a real, recurring failure).\n- On-device privacy protections (local processing where possible, clear indicators, data minimization) and secure, signed firmware/updates.\n- Independent safety systems so a cyber compromise can't disable the robot's ability to stop safely — and supply-chain scrutiny for hardware/software from any vendor, the theme of the next stages.",
        ],
      },
      incident: {
        title: "A Backdoor in the Robot Among Us",
        when: "2024–2025",
        where: "Consumer & research robotics",
        impact: "Researchers reported a hidden remote-access tunnel in widely-used Unitree robots — a backdoor into mobile, camera-equipped machines",
        body: [
          "As affordable humanoid and quadruped robots spread, researchers scrutinized them — and found problems. Notably, analysis of Unitree robots reported a pre-installed remote-access tunnel/backdoor that could allow outside access to the robot, including its sensors, raising alarm given these machines' cameras, mobility, and growing deployment.",
          "It is a preview of a coming security frontier:\n- A backdoored, camera-equipped robot in a home or facility is a mobile surveillance and physical-action risk rolled into one.\n- It echoes IoT's worst habits (hardcoded access, weak cloud security) but with a body that moves.\n- As humanoids scale, the defenses must be in place first: verified identity, no backdoors, encrypted links, privacy-by-design, signed updates, and independent safety — everything this epoch builds toward.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Humanoid/Service Robot", sub: "among people", type: "system" },
          { label: "Cameras + Microphones", sub: "privacy attack surface", type: "victim" },
          { label: "Cloud / App / Backdoor", sub: "remote attack surface", type: "attacker" },
          { label: "Mobile Surveillance + Harm", sub: "watch, listen, and act", type: "result" },
        ],
      },
      timeline: [
        { year: 2021, event: "Tesla announces Optimus; humanoid robotics accelerates" },
        { year: 2023, event: "Figure, Unitree, and others ship capable, affordable robots" },
        { year: 2024, event: "Service/humanoid robots enter warehouses, hospitals, and homes", highlight: true },
        { year: 2025, event: "Researchers report a hidden remote-access backdoor in Unitree robots" },
      ],
      keyTakeaways: [
        "Humanoid/service robots (Optimus, Figure, Spot, Unitree) operate among people, concentrating risk",
        "They combine mobility/manipulation, always-on cameras/mics (privacy), and cloud/app/teleop connectivity",
        "Real findings (e.g., a hidden backdoor in Unitree robots) show IoT's worst habits — now with a moving body",
        "Defense: verified identity, no backdoors, encrypted links, privacy-by-design, signed updates, independent safety",
      ],
      references: [
        { title: "Humanoid robot — overview", url: "https://en.wikipedia.org/wiki/Humanoid_robot" },
        { title: "Robot Vulnerability Database (Alias Robotics)", url: "https://github.com/aliasrobotics/RVD" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-07-q1", type: "Core Idea", challenge: "The new wave.", text: "What defines the current humanoid/service robot wave?", options: ["Capable robots designed to operate among people in homes, hospitals, and warehouses", "Caged factory-only arms", "Robots with no sensors", "Purely fictional machines"], correctIndex: 0, explanation: "Optimus, Figure, Spot, Unitree and others are built to work among humans." },
        { id: "robot-07-q2", type: "Privacy", challenge: "Always watching.", text: "Why are these robots a privacy risk?", options: ["Always-on cameras/mics stream sensitive data, often to the cloud", "They have no sensors", "They are offline", "They can't record"], correctIndex: 0, explanation: "A compromised robot becomes a mobile surveillance device in private spaces." },
        { id: "robot-07-q3", type: "Compound", challenge: "Stacking risk.", text: "Why is a humanoid robot's risk 'compound'?", options: ["It combines mobility/manipulation, sensing, and cloud connectivity", "It only has one risk", "It has none", "It is purely mechanical"], correctIndex: 0, explanation: "Each property adds a threat layer — physical, privacy, and remote." },
        { id: "robot-07-q4", type: "Real World", challenge: "The backdoor.", text: "What did researchers report about Unitree robots (2025)?", options: ["A hidden remote-access tunnel/backdoor allowing outside access including sensors", "Perfect security", "No network at all", "A faster battery"], correctIndex: 0, explanation: "A pre-installed backdoor in mobile, camera-equipped robots is a serious risk." },
        { id: "robot-07-q5", type: "Pattern", challenge: "IoT with legs.", text: "What bad habits do these robots risk inheriting?", options: ["IoT's hardcoded access and weak cloud security — but with a body that moves", "Strong security by default", "No connectivity", "Open-source transparency only"], correctIndex: 0, explanation: "They can repeat IoT's failures with added physical consequences." },
        { id: "robot-07-q6", type: "Defense", challenge: "Doing it right.", text: "What should secure humanoid/service robots?", options: ["Verified identity, no backdoors, encrypted links, privacy-by-design, signed updates, independent safety", "A nicer paint job", "Trusting the vendor blindly", "Removing the cameras' indicators"], correctIndex: 0, explanation: "Defense-in-depth plus privacy and supply-chain scrutiny are essential." },
      ],
    },
  },

  // ─── robot-08: Safety Systems & Functional Safety (Quiz) ─────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "The emergency stop & safety system", location: "Every robot that can hurt someone", era: "Modern", emoji: "🛑" },
    id: "robot-08",
    order: 8,
    title: "When Security Breaks Safety",
    subtitle: "E-Stops, Safety PLCs & Functional Safety",
    category: "cybersecurity",
    xp: 152,
    badge: { id: "badge-rob-safety", name: "Safety Engineer", emoji: "🛑" },
    challengeType: "quiz",
    info: {
      tagline: "Robots that can hurt people have safety systems — emergency stops, speed limits, separation monitoring — engineered to fail safe. But a safety system is only trustworthy if an attacker can't disable it. This is where cybersecurity and human safety meet.",
      year: 2024,
      overview: [
        "Functional safety is the discipline of making sure a robot does no harm even when something fails. It's governed by standards and built from dedicated safety functions — and it is the last line of defense when everything else (including security) fails.",
        "Robotics safety is defined by real standards and mechanisms:\n- ISO 10218 — safety for industrial robots; ISO/TS 15066 — collaborative robots (cobots) working with humans; ISO 13482 — personal care/service robots.\n- SAFETY FUNCTIONS — emergency stop (e-stop), safety-rated monitored stop, speed and separation monitoring, and power/force limiting for cobots.\n- SAFETY PLCs — dedicated, certified controllers that enforce these independently of the main control logic.",
        "The crucial intersection: security must protect safety:\n- A safety function you can disable over the network is not a safety function — if a cyberattack can suppress the e-stop or spoof the 'all clear', the protection is gone.\n- Historically safety assumed random failures, not a malicious adversary; modern thinking requires safety and security co-design.\n- Best practice keeps safety systems independent and hard to tamper with (separate safety PLCs, hardwired e-stops) so a compromise of the hackable control path cannot also defeat the protection — exactly why earlier stages noted the safety PLC stayed separate.",
      ],
      technical: {
        title: "Independence, and Safety-Security Co-Design",
        body: [
          "The design principle is independence:\n- Safety functions run on certified safety controllers separate from the general-purpose, network-exposed control system, often with hardwired e-stop circuits that no software can override.\n- This separation means an attacker who owns the main controller (as in earlier stages) still cannot disable the emergency stop or the speed/separation limits.\n- Standards like IEC 62443 (industrial cybersecurity) increasingly pair with functional-safety standards to address the adversary, not just random faults.",
          "Where safety and security must be co-designed:\n- A security flaw that can alter safety parameters (e.g., raise a speed limit, spoof a light-curtain 'clear') turns a cyber bug into a physical hazard — so safety-relevant settings need integrity protection and tamper detection.\n- Conversely, security measures must not undermine safety (e.g., an update or lockout that disables a safe stop).\n- The mandate is clear: in robotics, you cannot secure without considering safety, or assure safety without considering security — they are one problem.",
        ],
      },
      incident: {
        title: "The Convergence of Safety and Security",
        when: "2016–present",
        where: "Industrial & service robotics standards bodies",
        impact: "Standards and research increasingly require that cybersecurity protect safety functions, not just data",
        body: [
          "As robots connected and as research (like 'Rogue Robots') showed control systems could be compromised, the safety community confronted a gap: functional-safety standards assumed random hardware failures, not deliberate attackers. A hacker who can change safety-relevant parameters or suppress a stop defeats protections designed for accidents, not adversaries.",
          "The response is convergence:\n- Industrial cybersecurity (IEC 62443) and functional safety (IEC 61508/ISO 10218 family) are being aligned so safety functions are also protected from tampering.\n- The practical rule — keep safety independent and tamper-resistant — means a compromised control path can't also turn off the e-stop.\n- It captures the deepest lesson of cyber-physical security: when a machine can hurt people, security failures become safety failures, so the two must be engineered together.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Safety Functions", sub: "e-stop, speed/separation limits", type: "system" },
          { label: "Independent Safety PLC", sub: "separate, certified, hardwired", type: "result" },
          { label: "Attack the Control Path", sub: "owns main controller", type: "attacker" },
          { label: "Safety Must Hold", sub: "compromise can't disable stop", type: "victim" },
        ],
      },
      timeline: [
        { year: 2011, event: "ISO 10218 / ISO/TS 15066 frame industrial and collaborative robot safety" },
        { year: 2014, event: "ISO 13482 addresses personal care/service robot safety" },
        { year: 2017, event: "Research shows control compromise can threaten safety functions", highlight: true },
        { year: 2024, event: "Safety + security co-design (IEC 62443) becomes the expectation" },
      ],
      keyTakeaways: [
        "Functional safety (ISO 10218 / 15066 / 13482) makes robots fail safe — the last line of defense",
        "Safety functions: e-stop, safety-rated monitored stop, speed/separation monitoring, power/force limiting",
        "A safety function an attacker can disable isn't one — security must protect safety (co-design)",
        "Keep safety independent and tamper-resistant (separate safety PLCs, hardwired e-stops) so a compromise can't defeat it",
      ],
      references: [
        { title: "Functional safety — overview", url: "https://en.wikipedia.org/wiki/Functional_safety" },
        { title: "Collaborative robot safety (ISO/TS 15066)", url: "https://en.wikipedia.org/wiki/Cobot" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-08-q1", type: "Core Idea", challenge: "Last line.", text: "What is functional safety in robotics?", options: ["Ensuring the robot does no harm even when something fails", "Making the robot faster", "A paint standard", "A networking protocol"], correctIndex: 0, explanation: "Safety functions are the last line of defense against physical harm." },
        { id: "robot-08-q2", type: "Standards", challenge: "The rulebooks.", text: "Which standard covers collaborative robots (cobots)?", options: ["ISO/TS 15066", "HTTP/2", "PCI DSS", "ISO 9001 only"], correctIndex: 0, explanation: "ISO 10218 (industrial), ISO/TS 15066 (cobots), ISO 13482 (service) govern robot safety." },
        { id: "robot-08-q3", type: "Functions", challenge: "Mechanisms.", text: "Which is a robot safety function?", options: ["Emergency stop and speed/separation monitoring", "A faster boot", "A louder speaker", "A bigger screen"], correctIndex: 0, explanation: "E-stop, monitored stop, speed/separation, and force limiting keep people safe." },
        { id: "robot-08-q4", type: "Intersection", challenge: "Security meets safety.", text: "Why must security protect safety functions?", options: ["A safety function an attacker can disable over the network is no protection at all", "Safety and security are unrelated", "Safety never fails", "Security weakens safety always"], correctIndex: 0, explanation: "If a cyberattack can suppress the e-stop, the protection is gone." },
        { id: "robot-08-q5", type: "Design", challenge: "Independence.", text: "How is safety kept robust against a control-system compromise?", options: ["Run it on independent, certified safety PLCs / hardwired e-stops the main software can't override", "Put it on the same hacked controller", "Disable it during updates", "Trust the network"], correctIndex: 0, explanation: "Independence means owning the main controller doesn't disable the stop." },
        { id: "robot-08-q6", type: "Convergence", challenge: "One problem.", text: "What does safety-security co-design recognize?", options: ["When a machine can hurt people, security failures become safety failures", "They never interact", "Safety is only about data", "Security is irrelevant to robots"], correctIndex: 0, explanation: "Standards like IEC 62443 align with functional safety to address adversaries." },
      ],
    },
  },

  // ─── robot-09: Robot Firmware & Supply Chain (CTF) ───────────────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "Robot firmware & dependencies", location: "The robot's software supply chain", era: "Modern", emoji: "🧬" },
    id: "robot-09",
    order: 9,
    title: "Backdooring the Robot",
    subtitle: "Firmware Implants & the Software Supply Chain",
    category: "cybersecurity",
    xp: 172,
    badge: { id: "badge-rob-supply", name: "Implant Author", emoji: "🧬" },
    challengeType: "ctf",
    info: {
      tagline: "Why hack a robot once when you can poison the software that runs on thousands of them? A robot is built from firmware and open-source packages pulled from the internet. Slip your code into that supply chain and you backdoor the fleet before it ships.",
      year: 2024,
      overview: [
        "Robots run a deep software stack: low-level firmware, an OS, robotics middleware (ROS), and many open-source packages (ROS packages, Python/pip, drivers). Every one of those is part of the supply chain — and a foothold there reaches the robot at the deepest level.",
        "Supply-chain attacks on robots take familiar forms:\n- DEPENDENCY POISONING — a backdoored or typosquatted package the robot's software pulls in runs your code (as in the ground-station and OTA stages).\n- FIRMWARE IMPLANT — modifying the robot's firmware to add persistent, hard-to-detect access that survives reboots and reimaging of higher layers.\n- BUILD/UPDATE COMPROMISE — inserting malicious code before signing, so it inherits trust across the fleet.",
        "Your CTF chains poisoning to a persistent implant:\n- POISON — publish a backdoored version of a package the robot's build trusts, gaining code execution during build/deploy.\n- IMPLANT — use that access to flash a firmware implant for persistence and stealthy control.\n- The payoff is scale and stealth: one poisoned component or implant affects every robot that uses it, and a firmware implant is hard to find and remove.",
      ],
      technical: {
        title: "From a Poisoned Package to Persistent Firmware",
        body: [
          "The chain is ordinary software-supply-chain security applied to robots:\n- Robot software pulls ROS packages and pip/apt dependencies; a malicious or typosquatted package executes attacker code on build/deploy.\n- With execution, an attacker can write to firmware (if unsigned/unverified) to plant a persistent implant below the OS — surviving reimaging of the application layer.\n- Build-system compromise is the deepest: malicious code inserted before signing is trusted everywhere it's deployed.",
          "Defenses are the same disciplines as the rest of the epoch:\n- Pin and verify dependencies (lockfiles, signatures, SBOMs); isolate and harden build/deploy systems.\n- Signed firmware and secure boot so only verified firmware runs — defeating the implant step even if code execution is gained.\n- Track known issues (the Robot Vulnerability Database), and treat the robot's whole supply chain as part of its attack surface — because an implant or poisoned package scales and persists far beyond a one-off hack.",
        ],
      },
      incident: {
        title: "Supply Chain — The Deepest, Widest Robot Attack",
        when: "2020s",
        where: "Robotics software ecosystem",
        impact: "Supply-chain and firmware compromise can backdoor robots at fleet scale, persistently and stealthily",
        body: [
          "Software supply-chain attacks (SolarWinds and the broader rise of dependency poisoning) reshaped how all software — including robotics — thinks about trust. For robots, which lean heavily on open-source middleware and packages and often ship updatable firmware, the supply chain is both a strength (rapid development) and a deep risk.",
          "The reported backdoor in Unitree robots (from the humanoid stage) is a real-world echo: pre-installed, persistent access at a low level is exactly the kind of outcome supply-chain or firmware compromise produces.\n- A firmware implant survives reimaging and is hard to detect; a poisoned package scales to every robot that installs it.\n- The defenses — verified dependencies, SBOMs, hardened builds, signed firmware/secure boot, and vulnerability tracking — are why supply-chain security is now core to robot security, and the bridge to this epoch's final, defensive stage.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Robot Supply Chain", sub: "firmware, ROS pkgs, pip/apt", type: "system" },
          { label: "Poison a Dependency", sub: "backdoor / typosquat", type: "attacker" },
          { label: "Flash Firmware Implant", sub: "persistent, below the OS", type: "victim" },
          { label: "Fleet Backdoored", sub: "scale + stealth", type: "result" },
        ],
      },
      timeline: [
        { year: 2020, event: "SolarWinds makes software supply-chain compromise a top-tier threat" },
        { year: 2021, event: "Dependency typosquatting/poisoning attacks proliferate" },
        { year: 2024, event: "Signed firmware + secure boot + SBOMs pushed for robots", highlight: true },
        { year: 2025, event: "Pre-installed backdoors reported in shipping consumer robots" },
      ],
      keyTakeaways: [
        "A robot's deep software stack (firmware, OS, ROS, packages) is all supply chain — a foothold there runs deep",
        "Attacks: dependency poisoning (code exec on build), firmware implants (persistence), build/update compromise (trusted everywhere)",
        "Supply-chain/firmware compromise scales to the fleet and is stealthy and persistent (survives reimaging)",
        "Defense: verified/pinned dependencies + SBOMs, hardened builds, signed firmware + secure boot, vulnerability tracking (RVD)",
      ],
      references: [
        { title: "Software supply chain security — overview", url: "https://en.wikipedia.org/wiki/Supply_chain_attack" },
        { title: "Robot Vulnerability Database (RVD)", url: "https://github.com/aliasrobotics/RVD" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-09-q1", type: "Core Idea", challenge: "Why supply chain.", text: "Why target a robot's software supply chain?", options: ["A foothold there reaches many robots at the deepest level, before they ship", "It's harder than hacking one robot", "It only affects one device", "It changes the paint"], correctIndex: 0, explanation: "Poisoning shared software/firmware scales and persists across the fleet." },
        { id: "robot-09-q2", type: "Dependency", challenge: "The package.", text: "What is dependency poisoning?", options: ["A backdoored/typosquatted package the robot's software pulls in runs attacker code", "A battery defect", "A motor fault", "A network outage"], correctIndex: 0, explanation: "Malicious dependencies execute on build/deploy — code execution without a custom exploit." },
        { id: "robot-09-q3", type: "Firmware", challenge: "Going deep.", text: "Why is a firmware implant especially dangerous?", options: ["It's persistent below the OS and survives reimaging — stealthy and hard to remove", "It's easy to spot", "It disappears on reboot", "It only logs data"], correctIndex: 0, explanation: "A low-level implant persists and evades application-layer cleanup." },
        { id: "robot-09-q4", type: "Deepest", challenge: "Before signing.", text: "Why is build-system compromise the deepest risk?", options: ["Malicious code inserted before signing is trusted everywhere it's deployed", "It only affects the build server", "It can't spread", "Signing prevents it entirely"], correctIndex: 0, explanation: "Pre-signing insertion inherits the fleet's trust — SolarWinds-style." },
        { id: "robot-09-q5", type: "Real World", challenge: "Echoed.", text: "What real-world finding echoes a firmware/supply-chain backdoor?", options: ["The pre-installed remote-access backdoor reported in Unitree robots", "A faster motor", "A new ROS version", "Nothing"], correctIndex: 0, explanation: "Pre-installed low-level access is exactly what such compromise produces." },
        { id: "robot-09-q6", type: "Defense", challenge: "Stopping it.", text: "What defends a robot's supply chain?", options: ["Verified/pinned dependencies + SBOMs, hardened builds, signed firmware + secure boot", "Trusting all packages", "Disabling secure boot", "Hiding the firmware"], correctIndex: 0, explanation: "Integrity across dependencies, builds, and firmware closes the chain." },
      ],
    },
    ctf: {
      scenario: "A robotics company builds its fleet's software from open-source ROS packages and ships updatable firmware with weak verification. Poison a dependency the build trusts to gain code execution, then flash a persistent firmware implant so you keep control across reboots and reimaging. Capture the flag in three fragments.",
      hint: "Go deep and wide. Poison a trusted dependency for code execution, then flash a firmware implant for persistence.",
      hints: [
        "Read the mission briefing. Run: cat briefing.txt",
        "Poison a trusted build dependency. Run: poison-package",
        "Flash a persistent firmware implant. Run: flash-implant",
        "Run 'assemble' to view collected fragments, then submit the flag",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R0B0T_", label: "Mission Brief — Supply Chain" },
        { trigger: "poison-package", value: "F1RMW4R3_", label: "Dependency Poisoned — Code Execution" },
        { trigger: "flash-implant", value: "B4CKD00R3D}", label: "Firmware Implant Flashed" },
      ],
      files: {
        "/briefing.txt": [
          "OPERATION: SUPPLY CHAIN",
          "Target: robot fleet built from ROS/pip packages; firmware verification is weak.",
          "Goal: code execution via a poisoned dependency, then a persistent firmware implant.",
          "",
          "Scale + stealth: poison once, backdoor every robot that builds/updates.",
          "Sequence: poison-package -> flash-implant",
        ].join("\n"),
      },
      dirs: {
        "/": [{ name: "briefing.txt", isDir: false }],
      },
      extraCommands: {
        "poison-package": () => ({
          lines: [
            "Publishing backdoored 'ros-nav-utils' to the internal package mirror ...",
            "Fleet build pulls it on next CI run ... payload executes as build user.",
            "Code execution on the build/deploy pipeline. Next: flash-implant",
          ],
        }),
        "flash-implant": () => ({
          lines: [
            "Firmware image signature check is weak/unverified ...",
            "Flashing implant below the OS (persists across reboot + reimage) ...",
            "Implant phones home; survives application-layer cleanup.",
            "Fleet backdoored. Run 'assemble' to retrieve your fragment.",
          ],
        }),
      },
    },
  },

  // ─── robot-10: Securing Autonomous Systems (Quiz capstone) ───────────────────
  {
    epochId: "robot-sec",
    wonder: { name: "Securing the autonomous future", location: "Wherever robots operate", era: "Modern", emoji: "🛡️" },
    id: "robot-10",
    order: 10,
    title: "Securing Autonomous Systems",
    subtitle: "Zero-Trust for Cyber-Physical & a Career in Robot Security",
    category: "cybersecurity",
    xp: 158,
    badge: { id: "badge-rob-secure", name: "Robot Guardian", emoji: "🛡️" },
    challengeType: "quiz",
    info: {
      tagline: "You've moved an arm, flown a drone, fooled a robot's eyes, and backdoored its firmware. Now flip sides. Securing robots means applying zero-trust to machines that move — verifying every sensor, command, and node, and engineering security and safety as one. This is a wide-open field.",
      year: 2024,
      overview: [
        "Every attack in this epoch shares one root: trust granted by default — to a sensor, a command, a network node, a dependency. Securing autonomous systems inverts that into zero-trust for the physical world: verify everything, and assume any input or component could be hostile.",
        "The defender's playbook maps to the attacks you ran:\n- COMMS & MIDDLEWARE — authenticate and encrypt control links and robot middleware (SROS2/DDS-Security, MAVLink signing, mutual-auth teleop); never trust by network reach.\n- PERCEPTION — treat sensors as adversarial: fusion, plausibility checks, adversarial-robust models, conservative fallback.\n- PLATFORM — signed firmware + secure boot, verified supply chain (SBOMs), and segmentation; no backdoors.\n- SAFETY — independent, tamper-resistant safety functions co-designed with security.",
        "Frameworks, institutions, and careers are emerging:\n- The Robot Vulnerability Database (Alias Robotics) catalogs robot flaws; IEC 62443 (industrial cybersecurity) pairs with functional-safety standards; robotics joins ICS/OT security practice.\n- Robot/cyber-physical security is a young, growing field — and the skills are transferable (network defense, embedded/hardware, RF/SDR, AI security, OT) applied to machines that move.\n- On-ramps: CTFs like this one, OT/ICS security, drone/ROS hacking communities, and academic/robotics programs — demonstrated skill plus the standards carry weight where no single certification yet rules.",
      ],
      technical: {
        title: "Zero-Trust for Machines That Move",
        body: [
          "Zero-trust translated to robotics is concrete:\n- Authenticate every command and verify every device/node identity; never trust a sensor reading, a control message, or a middleware participant for being 'inside'.\n- Encrypt and sign control and middleware traffic; sign firmware and enforce secure boot; verify the whole software supply chain.\n- Assume perception can be fooled and links can be jammed — design fusion, plausibility, redundancy, and safe-state fallback so no single deception or denial causes harm.",
          "And crucially, security and safety are one problem:\n- Keep safety functions independent and tamper-resistant so a cyber compromise can't disable the robot's ability to stop.\n- Co-design to the standards (functional safety + IEC 62443) and monitor for anomalies (a robot, like an ECU or satellite, has predictable behavior that intrusion disturbs).\n- The field is wide open and consequential: as robots move into factories, skies, hospitals, and homes, defending them is among the most impactful work in security — and this epoch is a real on-ramp to it.",
        ],
      },
      incident: {
        title: "Robotics Joins the Security Mainstream",
        when: "2020s",
        where: "Robotics, OT, and AI security communities",
        impact: "Robot cybersecurity matured into a recognized field with vulnerability tracking, standards alignment, and a growing workforce need",
        body: [
          "Driven by exposed ROS hosts, 'Rogue Robots', drone and teleop attacks, adversarial perception, and reported backdoors, robot security grew from scattered demos into a recognized discipline. Alias Robotics built the Robot Vulnerability Database; standards bodies began aligning functional safety with cybersecurity (IEC 62443); and robotics folded into ICS/OT and AI security practice.",
          "The trajectory mirrors space and automotive security:\n- From 'it's just a robot' to treating each one as a networked, sensor-driven, safety-critical computer that must be defended like one.\n- The defenses are known — zero-trust, encryption/authentication, supply-chain integrity, adversarial-robust perception, and independent safety — the work is applying them as robots scale.\n- For learners, that means opportunity: a young field, transferable skills, and high stakes — exactly the on-ramp this epoch (and curriculum) is built to provide.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Default Trust", sub: "root of every attack", type: "victim" },
          { label: "Authenticate + Encrypt", sub: "comms, middleware, firmware", type: "system" },
          { label: "Adversarial Perception + Supply Chain", sub: "fusion, SBOMs, secure boot", type: "attacker" },
          { label: "Safe, Resilient Robots", sub: "security + safety as one", type: "result" },
        ],
      },
      timeline: [
        { year: 2018, event: "Exposed ROS hosts and 'Rogue Robots' put robot security on the map" },
        { year: 2020, event: "SROS2/DDS-Security + MAVLink signing mature; RVD catalogs flaws", highlight: true },
        { year: 2022, event: "IEC 62443 increasingly aligned with robot functional safety" },
        { year: 2024, event: "Robot/cyber-physical security grows as a distinct, in-demand field" },
      ],
      keyTakeaways: [
        "Every attack here stems from default trust; security means zero-trust for machines that move",
        "Playbook: authenticate/encrypt comms & middleware (SROS2, MAVLink signing), adversarial-robust perception, signed firmware + verified supply chain, independent safety",
        "Security and safety are one problem — keep safety functions independent and tamper-resistant, co-designed with security",
        "Robot/cyber-physical security is a young, high-impact field with transferable skills and open on-ramps (CTFs, OT, RVD)",
      ],
      references: [
        { title: "Robot Vulnerability Database (Alias Robotics)", url: "https://github.com/aliasrobotics/RVD" },
        { title: "IEC 62443 — industrial cybersecurity", url: "https://en.wikipedia.org/wiki/IEC_62443" },
      ],
    },
    quiz: {
      questions: [
        { id: "robot-10-q1", type: "Core Idea", challenge: "The root.", text: "What root cause underlies most robot attacks?", options: ["Trust granted by default to sensors, commands, nodes, and dependencies", "Too much encryption", "Robots being too slow", "A lack of motors"], correctIndex: 0, explanation: "Securing robots means replacing default trust with verification everywhere." },
        { id: "robot-10-q2", type: "Comms", challenge: "Securing the graph.", text: "How do you secure robot middleware and control links?", options: ["Authenticate + encrypt them (SROS2/DDS-Security, MAVLink signing, mutual-auth teleop)", "Leave them open for speed", "Hide the topic names", "Use plain UDP"], correctIndex: 0, explanation: "Verified identity and encryption defeat rogue publishers and injection." },
        { id: "robot-10-q3", type: "Perception", challenge: "Untrusted senses.", text: "How should robust autonomy treat its perception?", options: ["As adversarial — use fusion, plausibility, robust models, and safe fallback", "As always correct", "Ignore it", "Use one sensor only"], correctIndex: 0, explanation: "Assuming sensors can be fooled is the durable posture against spoofing/patches." },
        { id: "robot-10-q4", type: "Platform", challenge: "Trust the code.", text: "What protects the robot's platform and supply chain?", options: ["Signed firmware + secure boot, verified dependencies/SBOMs, segmentation, no backdoors", "Trusting all packages", "Disabling secure boot", "Default credentials"], correctIndex: 0, explanation: "Integrity from firmware through dependencies closes the deep attack paths." },
        { id: "robot-10-q5", type: "Safety", challenge: "One problem.", text: "How are security and safety related for robots?", options: ["They're one problem — keep safety functions independent and tamper-resistant, co-designed", "They're unrelated", "Safety is only mechanical", "Security weakens safety"], correctIndex: 0, explanation: "A compromise must never be able to disable the safe stop — co-design is essential." },
        { id: "robot-10-q6", type: "Careers", challenge: "Getting in.", text: "What's the realistic path into robot/cyber-physical security?", options: ["Transferable skills (network defense, embedded, RF/SDR, AI security, OT) + CTFs and the standards", "A pilot's license only", "Owning a factory", "Nothing — it's closed"], correctIndex: 0, explanation: "It's a young, open field; demonstrated skill plus standards knowledge carries weight." },
      ],
    },
  },
];
