# Kryptós CronOS — Curriculum Reference
**Version:** 3.7  
**Date:** 2026-06-03  
**Total stages:** 701 across 62 epochs (delivered on **web + native mobile** from the shared `@kryptos/core` content package)

---

## Epoch 1: Our First Journey
**Theme:** Beginner-friendly CTF challenges — accessible to complete newcomers  
**Stages:** 30 (bt-01 through bt-30)  
**Color:** Emerald  
**Unlock:** Default — shown first on stage map  
**Gating:** Sequential within epoch

Our First Journey is the entry point — low-friction challenges designed to build confidence before learners hit the more technically dense Foundations and Cisco tracks. Each stage presents a simple CTF with real-world framing but beginner-appropriate difficulty.

---

## Epoch 2: Foundations
**Theme:** Core cybersecurity principles + OWASP Top 10 — set inside ancient world landmarks  
**Stages:** 12 (stage-01 through stage-12)  
**Color:** Amber  
**Unlock:** Available from start  
**Gating:** Sequential; Cisco epoch locked until all 12 are complete

| Stage | ID | Topic | CVE / OWASP | Setting | XP | Type |
|---|---|---|---|---|---|---|
| 1 | stage-01 | CIA Triad Foundations | — | Great Pyramid of Giza | 100 | CTF |
| 2 | stage-02 | AI Threat Detection | — | Colosseum, Rome | 150 | CTF |
| 3 | stage-03 | SQL Injection | OWASP A03, Heartland 2008 | Machu Picchu | 200 | CTF |
| 4 | stage-04 | Cross-Site Scripting (XSS) | Samy Worm 2005 | Petra, Jordan | 200 | CTF |
| 5 | stage-05 | Heartbleed | CVE-2014-0160, CVSS 7.5 | Angkor Wat | 250 | CTF |
| 6 | stage-06 | Broken Access Control | OWASP A01, AT&T iPad 2010 | Chichen Itza | 250 | CTF |
| 7 | stage-07 | Authentication Failures | LinkedIn 2012, 117M records | Stonehenge | 250 | CTF |
| 8 | stage-08 | Log4Shell | CVE-2021-44228, CVSS 10.0 | Hagia Sophia | 300 | CTF |
| 9 | stage-09 | WannaCry / EternalBlue | CVE-2017-0144, 150 countries | Tower of London | 300 | CTF |
| 10 | stage-10 | SSRF | OWASP A10, Capital One 2019 | Taj Mahal | 300 | CTF |
| 11 | stage-11 | Apache Struts / Equifax | CVE-2017-5638, 147M records | Acropolis, Athens | 350 | CTF |
| 12 | stage-12 | MongoDB Misconfiguration | OWASP A05 | Easter Island | 350 | CTF |

**Total XP available:** 2,950

---

## Epoch 3: Cisco — Core CVEs
**Theme:** Foundational Cisco CVEs — NSA exploits, network infrastructure attacks  
**Stages:** 12 (stage-m01 through stage-m12)  
**Color:** Blue  
**Unlock:** Locked until all 12 Foundations stages are completed  
**Gating:** Sequential within epoch

Cisco epoch stages are written in a field-operative tone: the learner is an APT agent exploiting real Cisco vulnerabilities in real-world locations. Each stage maps to a documented Cisco CVE.

| Stage | ID | CVE | Vulnerability | Location | XP | Type |
|---|---|---|---|---|---|---|
| M1 | stage-m01 | CVE-2023-20198 | IOS XE HTTP admin bypass | Istanbul | 300 | CTF |
| M2 | stage-m02 | CVE-2016-6366 | SNMP buffer overflow | London | 300 | CTF |
| M3 | stage-m03 | CVE-2018-0171 | Smart Install remote code exec | Amman, Jordan | 350 | CTF |
| M4 | stage-m04 | CVE-2019-1653 | RV320 config disclosure | Chichen Itza | 350 | CTF |
| M5 | stage-m05 | CVE-2020-3452 | ASA/FTD path traversal | Athens | 350 | CTF |
| M6 | stage-m06 | CVE-2022-20695 | WLC auth bypass | Easter Island | 400 | CTF |
| M7 | stage-m07 | CVE-2021-1497 | HyperFlex HX command injection | Giza | 400 | CTF |
| M8 | stage-m08 | CVE-2023-20273 | IOS XE command injection | Rome | 400 | CTF |
| M9 | stage-m09 | CVE-2019-1821 | Prime Infrastructure RCE | Machu Picchu | 400 | CTF |
| M10 | stage-m10 | CVE-2020-3580 | ASA/FTD XSS | Petra | 450 | CTF |
| M11 | stage-m11 | CVE-2020-3187 | ASA path traversal | Angkor Wat | 450 | CTF |
| M12 | stage-m12 | CVE-2017-6736 | IOS TFTP RCE | Stonehenge | 450 | CTF |

**Total XP available:** 4,200

---

## Epoch 4: Cisco — Enterprise Attack
**Theme:** Nation-state campaigns and advanced CVEs across the Cisco enterprise portfolio  
**Stages:** 13 (stage-m13 through stage-m25)  
**Color:** Indigo  
**Unlock:** Sequential after Cisco Core  
**Gating:** Sequential within epoch

Advanced exploitation across Cisco's enterprise portfolio — ASA, NX-OS, SD-WAN, Expressway, and the ArcaneDoor and Velvet Ant nation-state campaigns.

---

## Epoch 5: Cisco — Security Operations
**Theme:** CyberOps, threat hunting, and zero-day defense using Cisco security platforms  
**Stages:** 13 (stage-m26 through stage-m38)  
**Color:** Violet  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Cisco security platform operations and CyberOps Associate skills — Firepower, Umbrella, ISE, SecureX/XDR, SOC triage, threat hunting, and the IOS XE CVSS 10.0 zero-day.

---

## Epoch 6: Cisco — Advanced Defense
**Theme:** Firepower, XDR, DevNet, Silicon One, and post-quantum IKEv2  
**Stages:** 12 (stage-m39 through stage-m50)  
**Color:** Cyan  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Next-generation Cisco security — Firepower NGIPS/FTD evasion and CVEs, Cisco XDR threat hunting, DevNet API and NETCONF/YANG security, Silicon One P4 pipeline integrity, and post-quantum IKEv2 with ML-KEM-768.

---

## Epoch 7: Tech Audit — Foundations
**Theme:** Technology audit methodology — foundational concepts and frameworks  
**Stages:** 12 (audit-01 through audit-12)  
**Color:** Purple  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Master IT audit methodology using ISACA standards — COBIT, CISA, CRISC, and ITGC. Each stage simulates a real audit engagement at a major institution, from risk assessment to audit reporting.

---

## Epoch 8: Tech Audit — Technical
**Theme:** API security, secrets management, and cloud guardrail testing  
**Stages:** 12 (audit-t01 through audit-t12)  
**Color:** Violet  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Hands-on technical audit testing — enumerate and exploit API misconfigurations, hunt for exposed secrets, audit IAM policies, test cloud guardrails, scan IaC templates, and validate container security controls.

---

## Epoch 9: Tech Audit — Agentic Continuous Monitoring
**Theme:** AI-assisted and autonomous audit techniques using Claude tools  
**Stages:** 12 (audit-a01 through audit-a12)  
**Color:** Indigo  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Automate the full audit lifecycle using Claude's tool use API and MCP servers — agentic API enumeration, AI-powered secrets scanning, automated compliance report generation, and multi-agent audit pipeline design.

---

## Epoch 10: Continuous Monitoring 2.0
**Theme:** AI-powered detection and response — the full stack of modern SOC operations  
**Stages:** 12 (audit-cm01 through audit-cm12)  
**Color:** Rose  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Master next-generation continuous monitoring: ML-enhanced SIEM, UEBA, NDR, CSPM, SOAR automation, deception technology, Zero Trust telemetry, XDR, and compliance monitoring.

---

## Epoch 11: MITRE ATT&CK
**Theme:** Adversarial tactics, techniques, and procedures mapped to the MITRE ATT&CK framework  
**Stages:** 12 (mitre-01 through mitre-12)  
**Color:** Red  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Each stage maps to a specific ATT&CK tactic (Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact). Learners simulate both attacker and defender roles using the ATT&CK navigator framework.

---

## Epoch 12: MITRE ATLAS
**Theme:** AI threat landscape — adversarial attacks on machine learning systems  
**Stages:** 12 (atlas-01 through atlas-12)  
**Color:** Fuchsia  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) covers ML-specific attack vectors: adversarial examples, model inversion, data poisoning, model theft, prompt injection, and evasion attacks on AI classifiers. Each stage maps to an ATLAS technique.

---

## Epoch 13: OWASP LLM Top 10
**Theme:** Security risks specific to Large Language Model applications  
**Stages:** 12 (llm-01 through llm-12)  
**Color:** Orange  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Covers the OWASP Top 10 for Large Language Model Applications (2025): prompt injection, insecure output handling, training data poisoning, model denial of service, supply chain vulnerabilities, sensitive information disclosure, insecure plugin design, excessive agency, overreliance, and model theft.

---

## Epoch 14: Quantum Foundations
**Theme:** Qubits, Shor's Algorithm, and cryptographic threats from quantum computing  
**Stages:** 10 (quantum-01 through quantum-10)  
**Color:** Cyan  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Understand how quantum computing threatens the cryptographic foundations of the modern internet — from RSA to AES. Explore superposition, entanglement, Shor's Algorithm, and the Harvest Now, Decrypt Later threat that is already underway.

---

## Epoch 15: Post-Quantum Cryptography
**Theme:** NIST PQC standards and implementation — replacing RSA and ECC  
**Stages:** 10 (quantum-b01 through quantum-b10)  
**Color:** Teal  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Master the post-quantum cryptography standards that will replace RSA and ECC — CRYSTALS-Kyber (ML-KEM), CRYSTALS-Dilithium (ML-DSA), FALCON (FN-DSA), and SPHINCS+ (SLH-DSA). Learn the mathematics behind lattice-based cryptography and implement PQC in real systems.

---

## Epoch 16: Quantum Security
**Theme:** QKD, cryptographic agility, and enterprise PQC migration  
**Stages:** 10 (quantum-c01 through quantum-c10)  
**Color:** Sky  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Deploy quantum-safe infrastructure end-to-end — BB84 QKD protocols, quantum key distribution networks, cryptographic agility frameworks, quantum-safe VPNs and PKI, liboqs integration, FIPS 140-3 compliance, and full enterprise PQC migration planning.

---

## Epoch 17: Cisco Umbrella
**Theme:** DNS-layer security and threat intelligence  
**Stages:** 10 (umbrella-01 through umbrella-10)  
**Color:** Indigo  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Master DNS-layer security with Cisco Umbrella — the world's most deployed cloud security platform. From DNS tunneling to DGA detection, from lookalike domains to DoH evasion, each mission puts you inside a real Umbrella SOC investigation.

---

## Epoch 18: The Woven World (Tapestry)
**Theme:** 3,000 years of tapestry history, technique, and modern practice  
**Stages:** 12 (tapestry-01 through tapestry-12)  
**Color:** Yellow  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Travel through 3,000 years of tapestry: from Egyptian tombs and Andean mummy wrappings to the great Flemish workshops, Persian courts, Navajo hogans, and the modern artist's studio. Learn to weave, mix colors on the loom, and read the language of thread.

---

## Epoch 19: Nails
**Theme:** Nail care, art techniques, and professional nail services  
**Stages:** 10 (nails-01 through nails-10)  
**Color:** Pink  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Comprehensive nail education from anatomy and sanitation to gel systems, acrylics, nail art design, and building a nail business. Covers professional standards for licensed nail technicians.

---

## Epoch 20: Hair Coloring
**Theme:** Hair color chemistry, application, and professional technique  
**Stages:** 10 (hair-color-01 through hair-color-10)  
**Color:** Rose  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Understand how hair absorbs color, master the level system, learn developer and lift, choose between permanent and semi-permanent formulas, apply safely, bleach and tone, correct color mistakes, and build a hair coloring business.

---

## Epoch 21: Hair Styling
**Theme:** Professional hair styling tools, technique, and business  
**Stages:** 10 (hs-01 through hs-10)  
**Color:** Violet  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Master the full toolkit of professional hair styling — from understanding hair types and heat science to braiding, curls, and client-ready updos. Covers business development for licensed stylists.

---

## Epoch 22: Road to Your License
**Theme:** CA DMV written test preparation and driver knowledge  
**Stages:** 8 (driving-1-01 through driving-1-08)  
**Color:** Green  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Complete CA DMV written test prep covering traffic laws, signs, signals, right-of-way rules, speed limits, and safe driving principles. Designed to pass the California DMV knowledge test.

---

## Epoch 23: First Miles
**Theme:** Beginning driver skills — from cockpit checks to highway merging  
**Stages:** 8 (driving-2-01 through driving-2-08)  
**Color:** Lime  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Build real confidence behind the wheel — from cockpit checks and smooth starts to highway merging and night driving. Covers practical skills for new drivers in the first months behind the wheel.

---

## Epoch 24: Rules of the Road
**Theme:** Advanced road wisdom and defensive driving techniques  
**Stages:** 8 (driving-3-01 through driving-3-08)  
**Color:** Orange  
**Unlock:** Sequential  
**Gating:** Sequential within epoch

Passing the test is just the beginning. Master distraction awareness, defensive technique, handling emergencies, and developing the mindset of a genuinely safe, thoughtful driver.

---

## Epochs 26–40: Baseball Track

The baseball track mirrors the field: fundamentals → hitting (3 epochs) → **one full position epoch per position** (9 positions, Pitcher through Right Field). Each position epoch builds the spot from the ground up — how to play it, practice, body/conditioning, footwork, reading where the play is, cutoffs/relays/throws, and the backups & positioning for every situation — anchored by a hall-of-fame exemplar.

### Epoch 26: Play Ball!
**Theme:** Little League fundamentals — rules, positions, and basic skills  
**Stages:** 10 (baseball-1-01 through baseball-1-10)  
**Color:** Red

Learn America's game from the ground up — the diamond, the rules, how to hit, pitch, field, and run the bases with confidence. For brand-new players and anyone looking to sharpen fundamentals.

### Epoch 27: The Art of Hitting
**Stages:** 10 (baseball-2-01 through baseball-2-10) | **Color:** Blue

Hitting mechanics deep dive: stance, pitch recognition, swing plane, plate discipline, power development, contact adjustments, and legendary Dodger hitters from Jackie Robinson to Shohei Ohtani.

### Epoch 28: Advanced Mechanics
**Stages:** 10 (baseball-3-01 through baseball-3-10) | **Color:** Violet

The science of the elite swing — hip-shoulder separation, barrel management, attack angle optimization, sequencing, and how Statcast metrics translate to on-field adjustments.

### Epoch 29: Elite Mastery
**Stages:** 10 (baseball-4-01 through baseball-4-10) | **Color:** Amber

Statcast analytics, advanced scouting, clutch at-bat approach, and the greatest Dodger hitters of all time. For players ready to think like professionals.

### Epoch 30: The Art of Pitching
**Stages:** 10 (baseball-5-01 through -10) | **Color:** Green

Pitching mechanics and fundamentals — the rubber and stance, grip science, windup and stretch mechanics, arm action, release-point command, holding runners, velocity, pitch counts, and fielding the position. Kershaw-focused masterclass.

### Epoch 31: Pitch Arsenal
**Stages:** 10 (baseball-6-01 through -10) | **Color:** Red

Every pitch type from grip to release — four-seam, curveball, slider, changeup, cutter, splitter. Spin science, movement physics, tunneling, deception, and age-appropriate progression.

### Epoch 32: Pitching Strategy
**Stages:** 10 (baseball-7-01 through -10) | **Color:** Indigo

The chess match on the mound — reading hitters, manipulating counts, pitch sequencing across a lineup, and managing a start the third time through the order. Koufax to Kershaw.

### Epoch 33: Catcher
**Stages:** 10 (baseball-8-01 through baseball-8-10) | **Color:** Red

The field general — stances, receiving & framing, blocking, pop time & throwing, fielding the position, plays at the plate, backups & coverage, and calling the game. Exemplar: Mike Piazza (Dodgers).

### Epoch 34: First Base
**Stages:** 10 (baseball-9-01 through baseball-9-10) | **Color:** Orange

The anchor of the infield — footwork at the bag, scooping/picking throws, holding runners, the 3-hole and 3-6-3, charging bunts, cutoffs, and situational IQ. Exemplar: Freddie Freeman (Dodgers).

### Epoch 35: Second Base
**Stages:** 10 (baseball-10-01 through baseball-10-10) | **Color:** Blue

The keystone — positioning, fielding/footwork, the pivot, the feed, covering the bag, relays, and situational IQ. Exemplar: Jackie Robinson (Dodgers).

### Epoch 36: Third Base
**Stages:** 10 (baseball-11-01 through baseball-11-10) | **Color:** Red

The hot corner — reaction-ready stance, soft hands on smashes, the long throw, charging slow rollers/barehand, backhands & the line, cutoffs, and situational IQ. Exemplar: Adrian Beltre (Dodgers).

### Epoch 37: Shortstop
**Stages:** 10 (baseball-12-01 through baseball-12-10) | **Color:** Indigo

The captain of the infield — range & footwork, the deep hole & jump throw, the double play, charging/barehand, relays & leadership, and situational IQ. Exemplar: Ozzie Smith.

### Epoch 38: Left Field
**Stages:** 10 (baseball-13-01 through baseball-13-10) | **Color:** Green

Reading the ball off the bat — the jump & routes, catching, playing the wall & line, the crow-hop throw, backups, cutoffs, and situational IQ. Exemplar: Zack Wheat (Brooklyn Dodgers).

### Epoch 39: Center Field
**Stages:** 10 (baseball-14-01 through baseball-14-10) | **Color:** Blue

The captain of the outfield — reads & routes, robbing home runs, covering the gaps, the long throw, priority/calling off, backing up the middle, and situational IQ. Exemplar: Ken Griffey Jr.

### Epoch 40: Right Field
**Stages:** 10 (baseball-15-01 through baseball-15-10) | **Color:** Orange

The cannon — reads & the slice, catching to throw, the long throw to third/home, playing the line & sun, backing up first, cutoffs, and situational IQ. Exemplar: Mookie Betts (Dodgers).

---

## Epoch 58: Security Foundations
**Stages:** 13 (sec-foundations-01 through -13) | **Color:** Slate

Cross-cutting conceptual exam objectives the exploit/CTF content under-serves: security controls & frameworks, physical security & deception, change management, resilience/BCDR, cryptographic solutions, IAM, data protection & classification, security awareness, network media/topologies, network troubleshooting methodology, security-operations reporting & metrics, risk assessment (SLE/ALE/ARO), and the secure development lifecycle. Mapped across Security+, ISC² CC, Network+, CySA+, CISA, CISM, CRISC.

## Epoch 59: AI & Machine Learning Foundations
**Stages:** 6 (ai-ml-foundations-01 through -06) | **Color:** Purple

The engineering/fundamentals side of AI the certifications test: ML fundamentals, data science & preparation, model training & evaluation, generative AI & foundation models, the MLOps lifecycle, and cloud AI platforms (SageMaker/Bedrock/Vertex AI/AutoML/BigQuery ML). Mapped across CompTIA AI+, AWS AI Practitioner, Google Cloud ML Engineer, ISACA AAIA/AAISM.

## Epoch 60: Silicon — Sand to Superchips
**Stages:** 10 (si-01 through si-10) | **Color:** Sky | **Track:** Core Security (foundations)

How the newest GPU and quantum chips are physically manufactured — the most complex production process on Earth, told end to end: purifying quartz sand into 99.9999999% silicon and growing the Czochralski boule (si-01), slicing wafers and the cleanroom (si-02), photolithography (si-03), EUV lithography from tin plasma (si-04), doping & ion implantation (si-05), deposition/etching & copper damascene interconnects (si-06), FinFET → gate-all-around transistors and the "nm" myth (si-07), building giant AI GPUs with chiplets/HBM/CoWoS advanced packaging (si-08), yield/binning/fab economics (si-09), and fabricating quantum chips — superconducting, trapped-ion, and silicon spin qubits (si-10). Threads light hardware-trust and supply-chain security throughout.

## Epoch 61: Race Through Space
**Stages:** 10 (space-01 through space-10) | **Color:** Violet | **Track:** Defend the Enterprise | **6 CTF + 4 quiz**

Deep-tech space-systems hacking, themed on the current-day space race (SpaceX, NASA, China, ISRO, Starlink). Real architecture then real attacks: orbits/link-budgets/the four segments (space-01, quiz); the Viasat KA-SAT / AcidRain ground-segment modem-wiper (space-02, CTF); GNSS/GPS spoofing of position-navigation-timing (space-03, CTF); telecommand link takeover, Hack-A-Sat style (space-04, CTF); CCSDS telemetry frame-sync & Space Packet decoding (space-05, CTF); ground-station software supply-chain pivot to the antenna controller (space-06, CTF); MIL-STD-1553 onboard-bus injection (space-07, CTF); Starlink mega-constellation & the glitched user terminal (space-08, quiz); counterspace — jam/dazzle/cyber/kinetic ASAT + Kessler debris (space-09, quiz); and securing the constellation era — SPARTA, CCSDS SDLS, zero-trust, Space Force, careers (space-10, quiz). Flags in stage-flags.ts; validated via scripts/validate-ctf.mjs.

---

## XP Summary

| # | Epoch | Stages | Max XP (approx) |
|---|---|---|---|
| 1 | Our First Journey | 30 | ~1,500 |
| 2 | Foundations | 12 | 2,950 |
| 3 | Cisco: Core CVEs | 12 | 4,200 |
| 4 | Cisco: Enterprise Attack | 13 | ~5,200 |
| 5 | Cisco: Security Operations | 13 | ~5,200 |
| 6 | Cisco: Advanced Defense | 12 | ~4,800 |
| 7 | Tech Audit: Foundations | 12 | ~3,600 |
| 8 | Tech Audit: Technical | 12 | ~3,600 |
| 9 | Tech Audit: Agentic | 12 | ~3,600 |
| 10 | Continuous Monitoring 2.0 | 12 | ~3,600 |
| 11 | MITRE ATT&CK | 12 | ~4,200 |
| 12 | MITRE ATLAS | 12 | ~4,200 |
| 13 | OWASP LLM Top 10 | 12 | ~4,200 |
| 14 | Quantum Foundations | 10 | ~3,500 |
| 15 | Post-Quantum Cryptography | 10 | ~3,500 |
| 16 | Quantum Security | 10 | ~3,500 |
| 17 | Cisco Umbrella | 10 | ~3,500 |
| 18 | The Woven World (Tapestry) | 12 | ~1,200 |
| 19 | Nails | 10 | ~1,000 |
| 20 | Hair Coloring | 10 | ~1,000 |
| 21 | Hair Styling | 10 | ~1,000 |
| 22 | Road to Your License | 8 | ~800 |
| 23 | First Miles | 8 | ~800 |
| 24 | Rules of the Road | 8 | ~800 |
| 25 | Standing Tall | 6 | ~600 |
| 26 | Play Ball! | 10 | ~1,000 |
| 27 | The Art of Hitting | 10 | ~1,000 |
| 28 | Advanced Mechanics | 10 | ~1,000 |
| 29 | Elite Mastery | 10 | ~1,000 |
| 30 | The Art of Pitching | 10 | ~1,000 |
| 31 | Pitch Arsenal | 10 | ~1,000 |
| 32 | Pitching Strategy | 10 | ~1,000 |
| 33 | Catcher | 10 | ~1,000 |
| 34 | First Base | 10 | ~1,000 |
| 35 | Second Base | 10 | ~1,000 |
| 36 | Third Base | 10 | ~1,000 |
| 37 | Shortstop | 10 | ~1,000 |
| 38 | Left Field | 10 | ~1,000 |
| 39 | Center Field | 10 | ~1,000 |
| 40 | Right Field | 10 | ~1,000 |
| 41 | Paris in July | 20 | ~1,200 |
| 42 | Milan in July | 20 | ~1,200 |
| 43 | French Basics | 20 | ~1,200 |
| 44 | Italian Basics | 20 | ~1,200 |
| 45 | Quantum Risk Management | 10 | ~600 |
| 46 | Emerging Tech & Deep Learning Risk | 10 | ~600 |
| 47 | Quantum-Safe Migration Engineering | 10 | ~3,500 |
| 48 | Quantum for Curious Minds (beginner) | 10 | ~3,500 |
| 49 | Quantum, Deeper (intermediate physics) | 10 | ~3,500 |
| 50 | How Computers Really Work (beginner) | 10 | ~3,500 |
| 51 | The Physics of Hacking | 10 | ~3,500 |
| 52 | Debate: Foundations | 10 | ~3,500 |
| 53 | Debate: Argumentation & Logic | 10 | ~3,500 |
| 54 | Debate: The Formats | 10 | ~3,500 |
| 55 | Debate: Research & Case Construction | 10 | ~3,500 |
| 56 | Debate: Clash | 10 | ~3,500 |
| 57 | Debate: Rhetoric, Delivery & Persuasion | 10 | ~3,500 |
| 58 | Debate: Competitive & Professional Mastery | 10 | ~3,500 |
| 59 | Debate: The Psychology of Debate | 10 | ~3,500 |
| 60 | Security Foundations | 13 | ~2,700 |
| 61 | AI & Machine Learning Foundations | 6 | ~1,300 |
| 62 | Silicon: Sand to Superchips | 10 | ~1,400 |
| 63 | Race Through Space | 10 | ~1,600 |
| | **Total** | **701** | **~110,000** |

---

## Stage Structure

Every stage follows this four-part flow:

### 1. Stage Briefing (StageInfo component)
- **Overview:** Plain-language explanation of the vulnerability or concept
- **Attack Flow Diagram:** Visual showing attacker → system → victim → outcome
- **Technical Deep Dive:** Mechanism, code examples, how it works
- **Historical Incident:** The real-world breach or case study that made this topic relevant
- **Timeline:** Key events in the incident
- **References:** CVE entries, OWASP links, MITRE ATT&CK/ATLAS entries, post-mortems

### 2. CTF Challenge (CtfChallenge component)
- Simulated bash terminal
- Filesystem modeled on the real affected system
- Built-in commands: `ls`, `cat`, `cd`, `submit`, `hint`, `help`, `pwd`, `clear`
- Stage-specific commands implemented as TypeScript closures in stage data files
- Progressive hints: up to 3, revealed one at a time via `hint`
- ARIA chatbot available for AI-assisted coaching
- **Dual-mode (v1.23.0):** every CTF stage (203/203) also has an 8-question multiple-choice quiz. The quiz is a cosmetic half-clear (0 XP, no unlock); the CTF is the full clear. Learners can choose either path into a stage.

### 3. Reference Drawer
- Slide-in panel available during CTF — full briefing accessible without leaving the terminal
- Models how real security professionals work (documentation always open)

### 4. Completion
- XP awarded server-side (computed from STAGE_XP map in `/api/progress`, not client-submitted)
- Badge unlocked (displayed on leaderboard and stage map)
- Skills Acquired summary shown in FlagSuccessModal
- Streak updated in Redis; milestone badges checked (m-xp-1k, m-xp-5k, m-streak-3, m-streak-7)
- Next stage unlocked in sequence

---

## Milestone Badges

| Badge ID | Trigger | Description |
|---|---|---|
| `m-xp-1k` | 1,000 XP total | XP milestone |
| `m-xp-5k` | 5,000 XP total | XP milestone |
| `m-streak-3` | 3-day login streak | Consistency milestone |
| `m-streak-7` | 7-day login streak | Consistency milestone |

---

## Badge Library (Foundations Epoch Examples)

| Badge | Stage | Emoji |
|---|---|---|
| Triad Guardian | CIA Triad | 🛡️ |
| AI Scout | AI Detection | 🤖 |
| SQL Slayer | SQL Injection | 💉 |
| XSS Slayer | XSS | 🕷️ |
| Zero Day Hunter | Heartbleed | 🩸 |
| Access Denied | Broken Access Control | 🚫 |
| Hash Cracker | Auth Failures | 🔓 |
| Log4Shell Hunter | Log4Shell | 🔥 |
| WannaCry Stopper | WannaCry | 💀 |
| SSRF Agent | SSRF | 🌐 |
| Equifax Breaker | Equifax/Struts | 💳 |
| MongoDB Marshal | MongoDB | 🗄️ |

---

## Epoch 33: Paris in July
**Theme:** City history, art, hidden corners, food, and music  
**Stages:** 20 (paris-01 through paris-20)  
**Color:** Blue  
**Unlock:** Available to "curious" group  
**Gating:** None

Walk Paris like a local — Roman ruins underfoot, Impressionist masterpieces on the walls, and secret passages between the boulevards. Covers: Lutetia origins, Opéra Garnier, Notre-Dame, Louvre, Eiffel Tower, Sacré-Cœur/Montmartre, Le Marais, Les Passages Couverts, Canal Saint-Martin, Père Lachaise, Musée d'Orsay, Palais Royal, Belleville, Bastille, Marché d'Aligre, Rue Montorgueil, Jazz & Chanson, Opera & Classical, Eating Near the Opéra, Hidden Tables.

---

## Epoch 34: Milan in July
**Theme:** Design capital, Renaissance art, fashion, aperitivo culture  
**Stages:** 20 (milan-01 through milan-20)  
**Color:** Indigo  
**Unlock:** Available to "curious" group  
**Gating:** None

Discover Milan beyond the fashion week — from Roman Mediolanum to the Vertical Forest, Leonardo's Last Supper to the Navigli canals. Covers: Mediolanum origins, Duomo, Last Supper, La Scala, Castello Sforzesco, Galleria Vittorio Emanuele II, Pinacoteca di Brera, Pinacoteca Ambrosiana, Navigli, Brera & Moscova, Isola, Porta Venezia, Porta Garibaldi/Vertical Forest, Cimitero Monumentale, San Lorenzo, Tortona & Darsena, Live Music, Opera & Teatro, Eating in Milan, Aperitivo.

---

## Epoch 35: French Basics
**Theme:** Conversational French for travelers  
**Stages:** 20 (french-01 through french-20)  
**Color:** Sky  
**Unlock:** Available to "curious" group  
**Gating:** None

Twenty practical phrase modules covering: greetings, café orders, restaurant dining, shopping, directions, numbers & market math, getting around (transport), museum visits, emergencies, understanding Parisians, at the boulangerie, reading a French menu, French wine (AOC/AOP), at the pharmacy, hotel vocabulary, telling time, weather, telephone & digital French, French faux pas, and Paris arrondissements.

---

## Epoch 36: Italian Basics
**Theme:** Conversational Italian for travelers  
**Stages:** 20 (italian-01 through italian-20)  
**Color:** Green  
**Unlock:** Available to "curious" group  
**Gating:** None

Twenty practical phrase modules covering: greetings, bar culture, trattoria dining, shopping, Milan transit, numbers & money, culture & gestures, visiting the Duomo & museums, emergencies, aperitivo & nightlife, at the gelateria, Italian food vocabulary (risotto/cotoletta/ossobuco), Italian wine (DOCG/Franciacorta), at the farmacia, hotel & accommodation, telling time, weather & nebbia, Italian football & calcio culture, Italian faux pas (la bella figura), and Milan neighbourhoods with metro stops.
