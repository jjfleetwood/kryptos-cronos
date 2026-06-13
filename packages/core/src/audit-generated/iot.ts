import type { EpochConfig, StageConfig } from "../types";

export const iotEpoch: EpochConfig = {
  "id": "iot",
  "name": "Internet of Things (IoT)",
  "subtitle": "Agentic technical & privacy audit — Internet of Things (IoT)",
  "description": "Audit Internet of Things (IoT) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "📡",
  "color": "Teal",
  "unlocked": true
};

export const iotStages: StageConfig[] = [
  {
    "epochId": "iot",
    "id": "iot-01",
    "order": 1,
    "title": "Security by design",
    "subtitle": "Agentic technical & privacy audit of the security by design control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security by design\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT devices are secure by design. PASS: a security-by-design standard (secure boot, root of trust, signed firmware, unique per-device identity, no default/hardcoded creds) is applied to procured/built devices against ETSI EN 303 645 / NIST IR 8259, with secure provisioning + credential lifecycle, across the fleet. Exceptions: devices with default/hardcoded credentials, unsigned firmware/no secure boot, shared/static identities, and no security requirements in procurement.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device/firmware security baseline; ETSI EN 303 645 / NIST IR 8259; Device identity / PKI provisioning) as tools — e.g. `IoT security-by-design standard applied (secure boot, root of trust, s`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs)",
        "The device security requirements baked into procurement/development (against ETSI EN 303 645 / NIST IR 8259)",
        "Secure provisioning + the device identity/credential lifecycle (onboarding, rotation, decommission)",
        "Coverage: deployed device fleet built to the standard vs legacy/uncontrolled"
      ],
      "system": [
        "IoT device/firmware security baseline",
        "ETSI EN 303 645 / NIST IR 8259",
        "Device identity / PKI provisioning",
        "Device inventory (build standard)"
      ],
      "dataOwner": [
        "IoT / product security",
        "Procurement (device requirements)",
        "Device engineering"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-01-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Security by design",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security by design\" as a repeatable agentic workflow: pull the real evidence (The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Security by design\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device/firmware security baseline, ETSI EN 303 645 / NIST IR 8259, Device identity / PKI provisioning — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IoT security-by-design standard applied (secure boot, root of trust, signed firm` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT devices are secure by design. PASS: a security-by-design standard (secure boot, root of trust, signed firmware, unique per-device identity, no default/hardcoded creds) is applied to procured/built devices against ETSI EN 303 645 / NIST IR 8259, with secure provisioning + credential lifecycle, across the fleet. Exceptions: devices with default/hardcoded credentials, unsigned firmware/no secure boot, shared/static identities, and no security requirements in procurement. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_security_by_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device/firmware security baseline and ETSI EN 303 645 / NIST IR 8259 (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_security_by_design_mcp.py` to expose it to your agent — or `python 01_security_by_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IoT device/firmware security baseline · ETSI EN 303 645 / NIST IR 8259",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security by design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IoT security-by-design standard applied (secure boot, root of trust, signed firmware, unique identity, no default creds)\ndevice security requirements in procurement/development (ETSI EN 303 645 / NIST IR 8259)\nsecure provisioning + device identity/credential lifecycle\ncoverage: fleet built to standard vs legacy/uncontrolled"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs).",
        "The test: Verify IoT devices are secure by design.",
        "Reconcile the systems of record (IoT device/firmware security baseline, ETSI EN 303 645 / NIST IR 8259, Device identity / PKI provisioning) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Deployed IoT devices ship with shared default credentials and unsigned firmware, have no unique per-device identity, and no security requirements were ever specified in procurement — the fleet is built with no security baseline."
      ],
      "references": [
        {
          "title": "ETSI EN 303 645 — IoT Security",
          "url": "https://www.etsi.org/technologies/consumer-iot-security"
        },
        {
          "title": "NIST IR 8259",
          "url": "https://csrc.nist.gov/pubs/ir/8259/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_security_by_design_mcp.py",
          "url": "/audit-code/iot/01_security_by_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Security by design\" (the iot security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security by design\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT devices are secure by design. PASS: a security-by-design standard (secure boot, root of trust, signed firmware, unique per-device identity, no default/hardcoded creds) is applied to procured/built devices against ETSI EN 303 645 / NIST IR 8259, with secure provisioning + credential lifecycle, across the fleet. Exceptions: devices with default/hardcoded credentials, unsigned firmware/no secure boot, shared/static identities, and no security requirements in procurement. The evidence — The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device/firmware security baseline APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device/firmware security baseline gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device/firmware security baseline; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Security by design\" Audit Evidence\n\nThe test:\nVerify IoT devices are secure by design. PASS: a security-by-design standard (secure boot, root of trust, signed firmware, unique per-device identity, no default/hardcoded creds) is applied to procured/built devices against ETSI EN 303 645 / NIST IR 8259, with secure provisioning + credential lifecycle, across the fleet. Exceptions: devices with default/hardcoded credentials, unsigned firmware/no secure boot, shared/static identities, and no security requirements in procurement.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security by design\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security by design\" control must cover\n# fragment: security_by_design_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "security_by_design_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security by design\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the security by design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security by design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security by design against comparable organisations in the sector",
            "Obtain evidence that the security by design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security by design\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security by design\" control?",
          "options": [
            "A point-in-time screenshot of one system's security by design settings, captured during the walkthrough",
            "The The IoT security-by-design standard + evidence it's applied to devices/products (secure boot, hardware root of trust, signed firmware, no default/hardcoded credentials, unique per-device identity/certs), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security by design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security by design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security by design\"?",
          "options": [
            "From IoT device/firmware security baseline and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security by design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IoT device/firmware security baseline) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security by design\"?",
          "options": [
            "The external audit firm, since it is the party examining the security by design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security by design data is shared, so the accountability sits with no one in particular",
            "IoT / product security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security by design\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security by design\", which of these is a realistic reportable finding?",
          "options": [
            "Deployed IoT devices ship with shared default credentials and unsigned firmware, have no unique per-device identity, and no security requirements were ever specified in procurement — the fleet is built with no security baseline.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Deployed IoT devices ship with shared default credentials and unsigned firmware, have no unique per-device identity, and no security requirements were ever specified in procurement — the fleet is built with no security baseline. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security by design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security by design, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-02",
    "order": 2,
    "title": "Privacy by design",
    "subtitle": "Agentic technical & privacy audit of the privacy by design control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Privacy by design\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT respects privacy by design. PASS: a privacy assessment/DPIA covers what personal data devices collect with minimisation + consent, privacy controls apply on-device + in the pipeline (minimisation, encryption, retention), and transparency + data-subject rights are provided. Exceptions: devices collecting excessive personal data (audio/video/location) with no minimisation or consent, unencrypted/over-retained IoT data, no transparency or deletion rights, and no DPIA for high-privacy devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT data privacy assessment / DPIA; On-device minimisation / anonymisation; Data pipeline encryption + retention) as tools — e.g. `privacy assessment of IoT data collected (location, audio/video, biome`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent)",
        "Privacy controls on device + in the data pipeline (on-device minimisation/anonymisation, encrypted transit + storage, retention limits)",
        "Transparency + data-subject rights for IoT-collected data (notice, access, deletion)",
        "A DPIA for high-privacy IoT (cameras, wearables, smart-home, location)"
      ],
      "system": [
        "IoT data privacy assessment / DPIA",
        "On-device minimisation / anonymisation",
        "Data pipeline encryption + retention",
        "Consent + DSAR handling"
      ],
      "dataOwner": [
        "Privacy + IoT product",
        "Data protection",
        "Legal"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-02-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Privacy by design",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Privacy by design\" as a repeatable agentic workflow: pull the real evidence (The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Privacy by design\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT data privacy assessment / DPIA, On-device minimisation / anonymisation, Data pipeline encryption + retention — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `privacy assessment of IoT data collected (location, audio/video, biometrics, beh` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT respects privacy by design. PASS: a privacy assessment/DPIA covers what personal data devices collect with minimisation + consent, privacy controls apply on-device + in the pipeline (minimisation, encryption, retention), and transparency + data-subject rights are provided. Exceptions: devices collecting excessive personal data (audio/video/location) with no minimisation or consent, unencrypted/over-retained IoT data, no transparency or deletion rights, and no DPIA for high-privacy devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_privacy_by_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT data privacy assessment / DPIA and On-device minimisation / anonymisation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_privacy_by_design_mcp.py` to expose it to your agent — or `python 02_privacy_by_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IoT data privacy assessment / DPIA · On-device minimisation / anonymisation",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Privacy by design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "privacy assessment of IoT data collected (location, audio/video, biometrics, behaviour; minimisation; consent)\nprivacy controls on-device + in pipeline (minimisation/anonymisation, encryption, retention)\ntransparency + data-subject rights for IoT data\nDPIA for high-privacy IoT (cameras, wearables, smart-home, location)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent).",
        "The test: Verify IoT respects privacy by design.",
        "Reconcile the systems of record (IoT data privacy assessment / DPIA, On-device minimisation / anonymisation, Data pipeline encryption + retention) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Smart devices stream audio and precise location continuously with no minimisation, consent, or retention limit; the data is unencrypted at rest, users have no way to access or delete it, and no DPIA was ever done."
      ],
      "references": [
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "ISO/IEC 27701 — Privacy",
          "url": "https://www.iso.org/standard/71670.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_privacy_by_design_mcp.py",
          "url": "/audit-code/iot/02_privacy_by_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Privacy by design\" (the privacy assessment for the iot data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Privacy by design\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT respects privacy by design. PASS: a privacy assessment/DPIA covers what personal data devices collect with minimisation + consent, privacy controls apply on-device + in the pipeline (minimisation, encryption, retention), and transparency + data-subject rights are provided. Exceptions: devices collecting excessive personal data (audio/video/location) with no minimisation or consent, unencrypted/over-retained IoT data, no transparency or deletion rights, and no DPIA for high-privacy devices. The evidence — The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT data privacy assessment / DPIA APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT data privacy assessment / DPIA gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT data privacy assessment / DPIA; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Privacy by design\" Audit Evidence\n\nThe test:\nVerify IoT respects privacy by design. PASS: a privacy assessment/DPIA covers what personal data devices collect with minimisation + consent, privacy controls apply on-device + in the pipeline (minimisation, encryption, retention), and transparency + data-subject rights are provided. Exceptions: devices collecting excessive personal data (audio/video/location) with no minimisation or consent, unencrypted/over-retained IoT data, no transparency or deletion rights, and no DPIA for high-privacy devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Privacy by design\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Privacy by design\" control must cover\n# fragment: privacy_by_design_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "privacy_by_design_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Privacy by design\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the privacy by design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the privacy by design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for privacy by design against comparable organisations in the sector",
            "Obtain evidence that the privacy by design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Privacy by design\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Privacy by design\" control?",
          "options": [
            "A point-in-time screenshot of one system's privacy by design settings, captured during the walkthrough",
            "The The privacy assessment for the IoT data collected (what personal/sensitive data devices capture — location, audio/video, biometrics, behaviour; data minimisation; consent), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the privacy by design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's privacy by design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Privacy by design\"?",
          "options": [
            "From IoT data privacy assessment / DPIA and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how privacy by design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IoT data privacy assessment / DPIA) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Privacy by design\"?",
          "options": [
            "The external audit firm, since it is the party examining the privacy by design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the privacy by design data is shared, so the accountability sits with no one in particular",
            "Privacy + IoT product, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Privacy + IoT product owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Privacy by design\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Privacy by design\", which of these is a realistic reportable finding?",
          "options": [
            "Smart devices stream audio and precise location continuously with no minimisation, consent, or retention limit; the data is unencrypted at rest, users have no way to access or delete it, and no DPIA was ever done.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Smart devices stream audio and precise location continuously with no minimisation, consent, or retention limit; the data is unencrypted at rest, users have no way to access or delete it, and no DPIA was ever done. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Privacy by design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind privacy by design, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-03",
    "order": 3,
    "title": "Attack surface minimization",
    "subtitle": "Agentic technical & privacy audit of the attack surface minimization control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Attack surface minimization\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT attack surface is minimised. PASS: devices are hardened (unused services/ports/debug interfaces disabled — UART/JTAG/Telnet, default admin), not directly internet-exposed (verified by external scan/Shodan), physical/debug interfaces are secured, and the hardening baseline is applied + verified fleet-wide. Exceptions: devices with open debug ports/Telnet/default web admin, devices directly internet-exposed, exposed UART/JTAG, and no hardening baseline.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (Device hardening baseline; External exposure scanning (Shodan / Censys); Interface / port configuration) as tools — e.g. `device hardening: unused services/ports/debug interfaces disabled (UAR`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint)",
        "Network exposure assessment (devices not directly internet-exposed; Shodan/external-scan check)",
        "Disabled/secured physical + debug interfaces",
        "The hardening baseline applied across the fleet + verified"
      ],
      "system": [
        "Device hardening baseline",
        "External exposure scanning (Shodan / Censys)",
        "Interface / port configuration",
        "Fleet config verification"
      ],
      "dataOwner": [
        "IoT security",
        "Network security",
        "Device engineering"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-03-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Attack surface minimization",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Attack surface minimization\" as a repeatable agentic workflow: pull the real evidence (The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Attack surface minimization\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Device hardening baseline, External exposure scanning (Shodan / Censys), Interface / port configuration — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `device hardening: unused services/ports/debug interfaces disabled (UART/JTAG/Tel` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT attack surface is minimised. PASS: devices are hardened (unused services/ports/debug interfaces disabled — UART/JTAG/Telnet, default admin), not directly internet-exposed (verified by external scan/Shodan), physical/debug interfaces are secured, and the hardening baseline is applied + verified fleet-wide. Exceptions: devices with open debug ports/Telnet/default web admin, devices directly internet-exposed, exposed UART/JTAG, and no hardening baseline. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_attack_surface_minimization_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Device hardening baseline and External exposure scanning (Shodan / Censys) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_attack_surface_minimization_mcp.py` to expose it to your agent — or `python 03_attack_surface_minimization_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Device hardening baseline · External exposure scanning (Shodan / Censys)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Attack surface minimization\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "device hardening: unused services/ports/debug interfaces disabled (UART/JTAG/Telnet, default admin)\nnetwork exposure assessment (not internet-exposed; Shodan/external scan)\ndisabled/secured physical + debug interfaces\nhardening baseline applied + verified fleet-wide"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint).",
        "The test: Verify IoT attack surface is minimised.",
        "Reconcile the systems of record (Device hardening baseline, External exposure scanning (Shodan / Censys), Interface / port configuration) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Devices expose Telnet and a debug UART, run a default web admin with a known password, and several are directly reachable from the internet (found on Shodan) — a wide-open attack surface with no hardening baseline."
      ],
      "references": [
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645",
          "url": "https://www.etsi.org/technologies/consumer-iot-security"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_attack_surface_minimization_mcp.py",
          "url": "/audit-code/iot/03_attack_surface_minimization_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Attack surface minimization\" (the device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/uart/jtag, telnet, default web admin; minimal software footprint)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Attack surface minimization\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT attack surface is minimised. PASS: devices are hardened (unused services/ports/debug interfaces disabled — UART/JTAG/Telnet, default admin), not directly internet-exposed (verified by external scan/Shodan), physical/debug interfaces are secured, and the hardening baseline is applied + verified fleet-wide. Exceptions: devices with open debug ports/Telnet/default web admin, devices directly internet-exposed, exposed UART/JTAG, and no hardening baseline. The evidence — The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Device hardening baseline APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Device hardening baseline gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Device hardening baseline; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Attack surface minimization\" Audit Evidence\n\nThe test:\nVerify IoT attack surface is minimised. PASS: devices are hardened (unused services/ports/debug interfaces disabled — UART/JTAG/Telnet, default admin), not directly internet-exposed (verified by external scan/Shodan), physical/debug interfaces are secured, and the hardening baseline is applied + verified fleet-wide. Exceptions: devices with open debug ports/Telnet/default web admin, devices directly internet-exposed, exposed UART/JTAG, and no hardening baseline.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Attack surface minimization\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Attack surface minimization\" control must cover\n# fragment: attack_surface_minimization_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "attack_surface_minimization_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Attack surface minimization\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the attack surface minimization control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the attack surface minimization control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for attack surface minimization against comparable organisations in the sector",
            "Obtain evidence that the attack surface minimization control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Attack surface minimization\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Attack surface minimization\" control?",
          "options": [
            "A point-in-time screenshot of one system's attack surface minimization settings, captured during the walkthrough",
            "The The device hardening / attack-surface reduction (disabled unused services/ports/interfaces — debug/UART/JTAG, Telnet, default web admin; minimal software footprint), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the attack surface minimization control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's attack surface minimization capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Attack surface minimization\"?",
          "options": [
            "From Device hardening baseline and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how attack surface minimization works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Device hardening baseline) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Attack surface minimization\"?",
          "options": [
            "The external audit firm, since it is the party examining the attack surface minimization control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the attack surface minimization data is shared, so the accountability sits with no one in particular",
            "IoT security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Attack surface minimization\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Attack surface minimization\", which of these is a realistic reportable finding?",
          "options": [
            "Devices expose Telnet and a debug UART, run a default web admin with a known password, and several are directly reachable from the internet (found on Shodan) — a wide-open attack surface with no hardening baseline.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Devices expose Telnet and a debug UART, run a default web admin with a known password, and several are directly reachable from the internet (found on Shodan) — a wide-open attack surface with no hardening baseline. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Attack surface minimization\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind attack surface minimization, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-04",
    "order": 4,
    "title": "Threat modeling",
    "subtitle": "Agentic technical & privacy audit of the threat modeling control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Threat modeling\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the IoT system is threat-modeled end-to-end. PASS: a threat model covers the full ecosystem (device/firmware/comms/gateway/cloud/app) with identified threats + mitigations (tamper, firmware extraction, comms spoofing, cloud-API abuse, fleet compromise), abuse cases for the deployment, and it drives + is validated against security requirements. Exceptions: no threat model, the cloud/app/comms tiers unmodeled (only the device considered), no fleet-compromise scenario, and threats identified but never mitigated/tested.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT threat-model records (STRIDE / attack trees); Ecosystem architecture (device→cloud); Threat → requirement traceability) as tools — e.g. `IoT threat model across the ecosystem (device, firmware, comms, gatewa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system)",
        "Identified threats + mitigations (physical tamper, firmware extraction, comms interception/spoofing, cloud-API abuse, fleet-wide compromise)",
        "Abuse cases specific to the device's function + deployment environment",
        "The threat model feeding the security requirements + tested"
      ],
      "system": [
        "IoT threat-model records (STRIDE / attack trees)",
        "Ecosystem architecture (device→cloud)",
        "Threat → requirement traceability",
        "Security test plan"
      ],
      "dataOwner": [
        "IoT / product security",
        "Security architecture",
        "Device + cloud engineering"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-04-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Threat modeling",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Threat modeling\" as a repeatable agentic workflow: pull the real evidence (The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Threat modeling\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT threat-model records (STRIDE / attack trees), Ecosystem architecture (device→cloud), Threat → requirement traceability — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IoT threat model across the ecosystem (device, firmware, comms, gateway, cloud, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the IoT system is threat-modeled end-to-end. PASS: a threat model covers the full ecosystem (device/firmware/comms/gateway/cloud/app) with identified threats + mitigations (tamper, firmware extraction, comms spoofing, cloud-API abuse, fleet compromise), abuse cases for the deployment, and it drives + is validated against security requirements. Exceptions: no threat model, the cloud/app/comms tiers unmodeled (only the device considered), no fleet-compromise scenario, and threats identified but never mitigated/tested. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_threat_modeling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT threat-model records (STRIDE / attack trees) and Ecosystem architecture (device→cloud) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_threat_modeling_mcp.py` to expose it to your agent — or `python 04_threat_modeling_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IoT threat-model records (STRIDE / attack trees) · Ecosystem architecture (device→cloud)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Threat modeling\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IoT threat model across the ecosystem (device, firmware, comms, gateway, cloud, app)\nthreats + mitigations (tamper, firmware extraction, comms spoofing, cloud-API abuse, fleet compromise)\nabuse cases for the device's function + deployment\nthreat model feeding security requirements + tested?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system).",
        "The test: Verify the IoT system is threat-modeled end-to-end.",
        "Reconcile the systems of record (IoT threat-model records (STRIDE / attack trees), Ecosystem architecture (device→cloud), Threat → requirement traceability) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Only the device hardware was threat-modeled; the cloud backend, mobile app, and comms were ignored, so a fleet-wide compromise path through the cloud API (the actual high risk) was never identified or mitigated."
      ],
      "references": [
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "NIST IR 8259",
          "url": "https://csrc.nist.gov/pubs/ir/8259/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_threat_modeling_mcp.py",
          "url": "/audit-code/iot/04_threat_modeling_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Threat modeling\" (the iot threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — stride/attack-tree across the whole system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Threat modeling\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify the IoT system is threat-modeled end-to-end. PASS: a threat model covers the full ecosystem (device/firmware/comms/gateway/cloud/app) with identified threats + mitigations (tamper, firmware extraction, comms spoofing, cloud-API abuse, fleet compromise), abuse cases for the deployment, and it drives + is validated against security requirements. Exceptions: no threat model, the cloud/app/comms tiers unmodeled (only the device considered), no fleet-compromise scenario, and threats identified but never mitigated/tested. The evidence — The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT threat-model records (STRIDE / attack trees) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT threat-model records (STRIDE / attack trees) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT threat-model records (STRIDE / attack trees); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Threat modeling\" Audit Evidence\n\nThe test:\nVerify the IoT system is threat-modeled end-to-end. PASS: a threat model covers the full ecosystem (device/firmware/comms/gateway/cloud/app) with identified threats + mitigations (tamper, firmware extraction, comms spoofing, cloud-API abuse, fleet compromise), abuse cases for the deployment, and it drives + is validated against security requirements. Exceptions: no threat model, the cloud/app/comms tiers unmodeled (only the device considered), no fleet-compromise scenario, and threats identified but never mitigated/tested.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Threat modeling\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Threat modeling\" control must cover\n# fragment: threat_modeling_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "threat_modeling_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Threat modeling\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the threat modeling control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the threat modeling control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for threat modeling against comparable organisations in the sector",
            "Obtain evidence that the threat modeling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Threat modeling\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Threat modeling\" control?",
          "options": [
            "A point-in-time screenshot of one system's threat modeling settings, captured during the walkthrough",
            "The The IoT threat model for the device + ecosystem (device, firmware, comms, gateway, cloud backend, mobile app — STRIDE/attack-tree across the whole system), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the threat modeling control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's threat modeling capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Threat modeling\"?",
          "options": [
            "From IoT threat-model records (STRIDE / attack trees) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how threat modeling works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IoT threat-model records (STRIDE / attack trees)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Threat modeling\"?",
          "options": [
            "The external audit firm, since it is the party examining the threat modeling control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the threat modeling data is shared, so the accountability sits with no one in particular",
            "IoT / product security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Threat modeling\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Threat modeling\", which of these is a realistic reportable finding?",
          "options": [
            "Only the device hardware was threat-modeled; the cloud backend, mobile app, and comms were ignored, so a fleet-wide compromise path through the cloud API (the actual high risk) was never identified or mitigated.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Only the device hardware was threat-modeled; the cloud backend, mobile app, and comms were ignored, so a fleet-wide compromise path through the cloud API (the actual high risk) was never identified or mitigated. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Threat modeling\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind threat modeling, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-05",
    "order": 5,
    "title": "Third-party components",
    "subtitle": "Agentic technical & privacy audit of the third-party components control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party components\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT third-party components are governed. PASS: devices have an SBOM/HBOM, component CVEs are tracked with an update path, supply-chain integrity is verified (trusted sources, signed third-party firmware, no counterfeit parts), and EOL/unsupported components are tracked. Exceptions: no SBOM (unknown components), unpatched known-CVE libraries in the embedded OS, unvetted/counterfeit-risk parts, and EOL components with no replacement plan.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (SBOM / HBOM tooling; Embedded-component CVE tracking; Supply-chain integrity verification) as tools — e.g. `device SBOM/HBOM (OS, libraries, chips, radios + origins)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device",
        "Known-vulnerability tracking on those components (CVEs in the embedded OS/libraries; the update path)",
        "Supply-chain integrity of components (trusted sources, no counterfeit/tampered parts, signed third-party firmware)",
        "End-of-life/unsupported component tracking (components no longer patched)"
      ],
      "system": [
        "SBOM / HBOM tooling",
        "Embedded-component CVE tracking",
        "Supply-chain integrity verification",
        "Component EOL register"
      ],
      "dataOwner": [
        "IoT / product security",
        "Supply chain / procurement",
        "Device engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-05-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Third-party components",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party components\" as a repeatable agentic workflow: pull the real evidence (The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Third-party components\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SBOM / HBOM tooling, Embedded-component CVE tracking, Supply-chain integrity verification — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `device SBOM/HBOM (OS, libraries, chips, radios + origins)` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT third-party components are governed. PASS: devices have an SBOM/HBOM, component CVEs are tracked with an update path, supply-chain integrity is verified (trusted sources, signed third-party firmware, no counterfeit parts), and EOL/unsupported components are tracked. Exceptions: no SBOM (unknown components), unpatched known-CVE libraries in the embedded OS, unvetted/counterfeit-risk parts, and EOL components with no replacement plan. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_third_party_components_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SBOM / HBOM tooling and Embedded-component CVE tracking (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_third_party_components_mcp.py` to expose it to your agent — or `python 05_third_party_components_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SBOM / HBOM tooling · Embedded-component CVE tracking",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party components\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "device SBOM/HBOM (OS, libraries, chips, radios + origins)\nknown-vulnerability tracking on components + update path\nsupply-chain integrity (trusted sources, signed third-party firmware, no counterfeit)\nEOL/unsupported component tracking"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device.",
        "The test: Verify IoT third-party components are governed.",
        "Reconcile the systems of record (SBOM / HBOM tooling, Embedded-component CVE tracking, Supply-chain integrity verification) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no SBOM for the device; it runs an embedded Linux with multiple years-old unpatched CVEs in its libraries, and several components are past end-of-life with no update path — vulnerable by composition."
      ],
      "references": [
        {
          "title": "NTIA SBOM",
          "url": "https://www.ntia.gov/page/software-bill-materials"
        },
        {
          "title": "NIST IR 8259",
          "url": "https://csrc.nist.gov/pubs/ir/8259/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_third_party_components_mcp.py",
          "url": "/audit-code/iot/05_third_party_components_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Third-party components\" (the device software/hardware bill of materials (sbom/hbom — the os, libraries, chips, radios, and their origins) for the device), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party components\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT third-party components are governed. PASS: devices have an SBOM/HBOM, component CVEs are tracked with an update path, supply-chain integrity is verified (trusted sources, signed third-party firmware, no counterfeit parts), and EOL/unsupported components are tracked. Exceptions: no SBOM (unknown components), unpatched known-CVE libraries in the embedded OS, unvetted/counterfeit-risk parts, and EOL components with no replacement plan. The evidence — The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SBOM / HBOM tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SBOM / HBOM tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SBOM / HBOM tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Third-party components\" Audit Evidence\n\nThe test:\nVerify IoT third-party components are governed. PASS: devices have an SBOM/HBOM, component CVEs are tracked with an update path, supply-chain integrity is verified (trusted sources, signed third-party firmware, no counterfeit parts), and EOL/unsupported components are tracked. Exceptions: no SBOM (unknown components), unpatched known-CVE libraries in the embedded OS, unvetted/counterfeit-risk parts, and EOL components with no replacement plan.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device)\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party components\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party components\" control must cover\n# fragment: thirdparty_components_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "thirdparty_components_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party components\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the third-party components control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party components control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party components against comparable organisations in the sector",
            "Obtain evidence that the third-party components control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party components\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party components\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party components settings, captured during the walkthrough",
            "The The device software/hardware bill of materials (SBOM/HBOM — the OS, libraries, chips, radios, and their origins) for the device, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party components control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party components capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party components\"?",
          "options": [
            "From SBOM / HBOM tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party components works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SBOM / HBOM tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party components\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party components control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party components data is shared, so the accountability sits with no one in particular",
            "IoT / product security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party components\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party components\", which of these is a realistic reportable finding?",
          "options": [
            "There's no SBOM for the device; it runs an embedded Linux with multiple years-old unpatched CVEs in its libraries, and several components are past end-of-life with no update path — vulnerable by composition.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no SBOM for the device; it runs an embedded Linux with multiple years-old unpatched CVEs in its libraries, and several components are past end-of-life with no update path — vulnerable by composition. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party components\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party components, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-06",
    "order": 6,
    "title": "Lightweight cryptography",
    "subtitle": "Agentic technical & privacy audit of the lightweight cryptography control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Lightweight cryptography\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT cryptography is sound. PASS: devices use vetted algorithms for confidentiality/integrity/authentication appropriate to the hardware, keys are stored in a hardware-backed secure element (not flash/firmware), vetted lightweight crypto is used on constrained devices, and there's crypto-agility/update path (PQC-aware for long-lived devices). Exceptions: homegrown/weak/no crypto, keys hardcoded in firmware or stored in plain flash, and no ability to update algorithms on fielded devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (Device crypto implementation; Hardware secure element / keystore; NIST lightweight crypto (Ascon)) as tools — e.g. `device cryptography appropriate to the hardware (strong, not homegrown`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak)",
        "Secure key storage on-device (hardware-backed keystore/secure element vs keys in flash/firmware)",
        "Use of vetted lightweight crypto where needed (NIST lightweight crypto / Ascon for constrained devices) rather than no/weak crypto",
        "Crypto-agility + a path to update algorithms (incl. PQC readiness for long-lived devices)"
      ],
      "system": [
        "Device crypto implementation",
        "Hardware secure element / keystore",
        "NIST lightweight crypto (Ascon)",
        "Crypto-agility / update mechanism"
      ],
      "dataOwner": [
        "IoT / product security + crypto",
        "Device engineering",
        "Security architecture"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-06-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Lightweight cryptography",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Lightweight cryptography\" as a repeatable agentic workflow: pull the real evidence (The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Lightweight cryptography\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Device crypto implementation, Hardware secure element / keystore, NIST lightweight crypto (Ascon) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `device cryptography appropriate to the hardware (strong, not homegrown/weak)` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT cryptography is sound. PASS: devices use vetted algorithms for confidentiality/integrity/authentication appropriate to the hardware, keys are stored in a hardware-backed secure element (not flash/firmware), vetted lightweight crypto is used on constrained devices, and there's crypto-agility/update path (PQC-aware for long-lived devices). Exceptions: homegrown/weak/no crypto, keys hardcoded in firmware or stored in plain flash, and no ability to update algorithms on fielded devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_lightweight_cryptography_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Device crypto implementation and Hardware secure element / keystore (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_lightweight_cryptography_mcp.py` to expose it to your agent — or `python 06_lightweight_cryptography_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Device crypto implementation · Hardware secure element / keystore",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Lightweight cryptography\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "device cryptography appropriate to the hardware (strong, not homegrown/weak)\nsecure key storage on-device (hardware secure element vs keys in flash/firmware)\nvetted lightweight crypto where needed (NIST lightweight / Ascon)\ncrypto-agility + update path (PQC readiness for long-lived devices)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak).",
        "The test: Verify IoT cryptography is sound.",
        "Reconcile the systems of record (Device crypto implementation, Hardware secure element / keystore, NIST lightweight crypto (Ascon)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Devices use a homegrown XOR 'encryption' and store the shared key in plaintext firmware; there's no secure element and no way to update the algorithm on fielded devices, so the entire fleet's traffic is trivially decryptable."
      ],
      "references": [
        {
          "title": "NIST Lightweight Cryptography",
          "url": "https://csrc.nist.gov/projects/lightweight-cryptography"
        },
        {
          "title": "ETSI EN 303 645",
          "url": "https://www.etsi.org/technologies/consumer-iot-security"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_lightweight_cryptography_mcp.py",
          "url": "/audit-code/iot/06_lightweight_cryptography_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Lightweight cryptography\" (the cryptography used by constrained iot devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Lightweight cryptography\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT cryptography is sound. PASS: devices use vetted algorithms for confidentiality/integrity/authentication appropriate to the hardware, keys are stored in a hardware-backed secure element (not flash/firmware), vetted lightweight crypto is used on constrained devices, and there's crypto-agility/update path (PQC-aware for long-lived devices). Exceptions: homegrown/weak/no crypto, keys hardcoded in firmware or stored in plain flash, and no ability to update algorithms on fielded devices. The evidence — The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Device crypto implementation APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Device crypto implementation gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Device crypto implementation; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Lightweight cryptography\" Audit Evidence\n\nThe test:\nVerify IoT cryptography is sound. PASS: devices use vetted algorithms for confidentiality/integrity/authentication appropriate to the hardware, keys are stored in a hardware-backed secure element (not flash/firmware), vetted lightweight crypto is used on constrained devices, and there's crypto-agility/update path (PQC-aware for long-lived devices). Exceptions: homegrown/weak/no crypto, keys hardcoded in firmware or stored in plain flash, and no ability to update algorithms on fielded devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Lightweight cryptography\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Lightweight cryptography\" control must cover\n# fragment: lightweight_cryptography_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "lightweight_cryptography_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Lightweight cryptography\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the lightweight cryptography control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the lightweight cryptography control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for lightweight cryptography against comparable organisations in the sector",
            "Obtain evidence that the lightweight cryptography control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Lightweight cryptography\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Lightweight cryptography\" control?",
          "options": [
            "A point-in-time screenshot of one system's lightweight cryptography settings, captured during the walkthrough",
            "The The cryptography used by constrained IoT devices (algorithms for confidentiality/integrity/authentication appropriate to the hardware — and that they're actually strong, not homegrown/weak), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the lightweight cryptography control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's lightweight cryptography capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Lightweight cryptography\"?",
          "options": [
            "From Device crypto implementation and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how lightweight cryptography works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Device crypto implementation) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Lightweight cryptography\"?",
          "options": [
            "The external audit firm, since it is the party examining the lightweight cryptography control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the lightweight cryptography data is shared, so the accountability sits with no one in particular",
            "IoT / product security + crypto, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security + crypto owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Lightweight cryptography\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Lightweight cryptography\", which of these is a realistic reportable finding?",
          "options": [
            "Devices use a homegrown XOR 'encryption' and store the shared key in plaintext firmware; there's no secure element and no way to update the algorithm on fielded devices, so the entire fleet's traffic is trivially decryptable.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Devices use a homegrown XOR 'encryption' and store the shared key in plaintext firmware; there's no secure element and no way to update the algorithm on fielded devices, so the entire fleet's traffic is trivially decryptable. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Lightweight cryptography\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind lightweight cryptography, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-07",
    "order": 7,
    "title": "Vulnerability mgmt and pen test",
    "subtitle": "Agentic technical & privacy audit of the vulnerability mgmt and pen test control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability mgmt and pen test\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT vulnerabilities are managed + tested. PASS: vulnerability scanning + a secure OTA update mechanism (signed/authenticated/rollback-protected) with tracked update coverage, periodic device + ecosystem pen testing (hardware/firmware/radio/cloud/app), a coordinated disclosure/PSIRT process + defined support period, and remediation reaching the fielded fleet. Exceptions: no OTA update mechanism (unpatchable devices), no pen testing of the device/ecosystem, no disclosure channel/PSIRT, and patches that never reach fielded devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (Firmware vuln scanning; Secure OTA update infrastructure; IoT pen-test (hardware / RF / cloud)) as tools — e.g. `IoT vuln mgmt (firmware scanning + secure OTA — signed/authenticated/r`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence)",
        "Device + ecosystem penetration testing (hardware, firmware-extraction, radio/comms, cloud-API, mobile-app pen tests)",
        "A coordinated vulnerability disclosure/PSIRT process for the product + a security-update commitment/period",
        "Evidence vulnerabilities are actually remediated across the fielded fleet (not just in new builds)"
      ],
      "system": [
        "Firmware vuln scanning",
        "Secure OTA update infrastructure",
        "IoT pen-test (hardware / RF / cloud)",
        "PSIRT / disclosure process"
      ],
      "dataOwner": [
        "IoT / product security + PSIRT",
        "Device engineering",
        "Security testing"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-07-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Vulnerability mgmt and pen test",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability mgmt and pen test\" as a repeatable agentic workflow: pull the real evidence (IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability mgmt and pen test\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me ioT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Firmware vuln scanning, Secure OTA update infrastructure, IoT pen-test (hardware / RF / cloud) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IoT vuln mgmt (firmware scanning + secure OTA — signed/authenticated/rollback — ` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT vulnerabilities are managed + tested. PASS: vulnerability scanning + a secure OTA update mechanism (signed/authenticated/rollback-protected) with tracked update coverage, periodic device + ecosystem pen testing (hardware/firmware/radio/cloud/app), a coordinated disclosure/PSIRT process + defined support period, and remediation reaching the fielded fleet. Exceptions: no OTA update mechanism (unpatchable devices), no pen testing of the device/ecosystem, no disclosure channel/PSIRT, and patches that never reach fielded devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_vulnerability_mgmt_and_pen_test_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Firmware vuln scanning and Secure OTA update infrastructure (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_vulnerability_mgmt_and_pen_test_mcp.py` to expose it to your agent — or `python 07_vulnerability_mgmt_and_pen_test_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Firmware vuln scanning · Secure OTA update infrastructure",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability mgmt and pen test\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IoT vuln mgmt (firmware scanning + secure OTA — signed/authenticated/rollback — + update coverage)\ndevice + ecosystem pen test (hardware, firmware-extraction, radio/comms, cloud-API, app)\ncoordinated disclosure/PSIRT + security-update commitment/period\nvulnerabilities remediated across the fielded fleet (not just new builds)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence).",
        "The test: Verify IoT vulnerabilities are managed + tested.",
        "Reconcile the systems of record (Firmware vuln scanning, Secure OTA update infrastructure, IoT pen-test (hardware / RF / cloud)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Devices have no OTA update capability, so known vulnerabilities can never be patched in the field; the product was never penetration-tested, and there's no disclosure channel for researchers to report flaws."
      ],
      "references": [
        {
          "title": "ETSI EN 303 645",
          "url": "https://www.etsi.org/technologies/consumer-iot-security"
        },
        {
          "title": "ISO/IEC 29147 — Vulnerability Disclosure",
          "url": "https://www.iso.org/standard/72311.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_vulnerability_mgmt_and_pen_test_mcp.py",
          "url": "/audit-code/iot/07_vulnerability_mgmt_and_pen_test_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Vulnerability mgmt and pen test\" (iot vulnerability management (firmware/device vulnerability scanning, the secure ota update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability mgmt and pen test\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT vulnerabilities are managed + tested. PASS: vulnerability scanning + a secure OTA update mechanism (signed/authenticated/rollback-protected) with tracked update coverage, periodic device + ecosystem pen testing (hardware/firmware/radio/cloud/app), a coordinated disclosure/PSIRT process + defined support period, and remediation reaching the fielded fleet. Exceptions: no OTA update mechanism (unpatchable devices), no pen testing of the device/ecosystem, no disclosure channel/PSIRT, and patches that never reach fielded devices. The evidence — IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Firmware vuln scanning APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Firmware vuln scanning gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Firmware vuln scanning; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Vulnerability mgmt and pen test\" Audit Evidence\n\nThe test:\nVerify IoT vulnerabilities are managed + tested. PASS: vulnerability scanning + a secure OTA update mechanism (signed/authenticated/rollback-protected) with tracked update coverage, periodic device + ecosystem pen testing (hardware/firmware/radio/cloud/app), a coordinated disclosure/PSIRT process + defined support period, and remediation reaching the fielded fleet. Exceptions: no OTA update mechanism (unpatchable devices), no pen testing of the device/ecosystem, no disclosure channel/PSIRT, and patches that never reach fielded devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability mgmt and pen test\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability mgmt and pen test\" control must cover\n# fragment: vulnerability_mgmt_pen_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "vulnerability_mgmt_pen_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability mgmt and pen test\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the vulnerability mgmt and pen test control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vulnerability mgmt and pen test control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vulnerability mgmt and pen test against comparable organisations in the sector",
            "Obtain evidence that the vulnerability mgmt and pen test control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability mgmt and pen test\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability mgmt and pen test\" control?",
          "options": [
            "A point-in-time screenshot of one system's vulnerability mgmt and pen test settings, captured during the walkthrough",
            "The IoT vulnerability management (firmware/device vulnerability scanning, the secure OTA update mechanism — signed, authenticated, rollback-protected — and update coverage/cadence), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vulnerability mgmt and pen test control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vulnerability mgmt and pen test capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vulnerability mgmt and pen test\"?",
          "options": [
            "From Firmware vuln scanning and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vulnerability mgmt and pen test works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Firmware vuln scanning) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability mgmt and pen test\"?",
          "options": [
            "The external audit firm, since it is the party examining the vulnerability mgmt and pen test control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vulnerability mgmt and pen test data is shared, so the accountability sits with no one in particular",
            "IoT / product security + PSIRT, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security + PSIRT owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability mgmt and pen test\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability mgmt and pen test\", which of these is a realistic reportable finding?",
          "options": [
            "Devices have no OTA update capability, so known vulnerabilities can never be patched in the field; the product was never penetration-tested, and there's no disclosure channel for researchers to report flaws.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Devices have no OTA update capability, so known vulnerabilities can never be patched in the field; the product was never penetration-tested, and there's no disclosure channel for researchers to report flaws. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability mgmt and pen test\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vulnerability mgmt and pen test, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-08",
    "order": 8,
    "title": "NAC",
    "subtitle": "Agentic technical & privacy audit of the nac control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"NAC\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT network access is controlled. PASS: IoT devices authenticate to the network (802.1X/cert or controlled MAC-auth), unknown devices are blocked/quarantined, devices are segmented onto isolated VLANs with least-privilege flows, NAC profiles device type + applies policy, across wired + wireless. Exceptions: IoT on a flat network with corporate systems, no device authentication (any device plugs in), no segmentation/quarantine of unknown devices, and no NAC coverage on wireless.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (NAC (Cisco ISE / Aruba ClearPass); 802.1X / certificate auth; IoT VLAN / segmentation) as tools — e.g. `network access control for IoT (802.1X/cert or MAC-auth; unknown devic`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined)",
        "IoT network segmentation (devices on isolated VLANs/segments, not flat with corporate/IT; least-privilege device-to-service flows)",
        "Device profiling + policy enforcement (NAC identifies device type + applies the right policy)",
        "Coverage across wired + wireless IoT"
      ],
      "system": [
        "NAC (Cisco ISE / Aruba ClearPass)",
        "802.1X / certificate auth",
        "IoT VLAN / segmentation",
        "Device profiling"
      ],
      "dataOwner": [
        "Network security + NAC",
        "IoT / OT teams",
        "Network engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-08-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "NAC",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"NAC\" as a repeatable agentic workflow: pull the real evidence (Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"NAC\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here NAC (Cisco ISE / Aruba ClearPass), 802.1X / certificate auth, IoT VLAN / segmentation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `network access control for IoT (802.1X/cert or MAC-auth; unknown devices blocked` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT network access is controlled. PASS: IoT devices authenticate to the network (802.1X/cert or controlled MAC-auth), unknown devices are blocked/quarantined, devices are segmented onto isolated VLANs with least-privilege flows, NAC profiles device type + applies policy, across wired + wireless. Exceptions: IoT on a flat network with corporate systems, no device authentication (any device plugs in), no segmentation/quarantine of unknown devices, and no NAC coverage on wireless. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_nac_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from NAC (Cisco ISE / Aruba ClearPass) and 802.1X / certificate auth (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_nac_mcp.py` to expose it to your agent — or `python 08_nac_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull NAC (Cisco ISE / Aruba ClearPass) · 802.1X / certificate auth",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"NAC\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "network access control for IoT (802.1X/cert or MAC-auth; unknown devices blocked/quarantined)\nIoT segmentation (isolated VLANs, least-privilege device-to-service flows)\ndevice profiling + policy enforcement (NAC identifies type + applies policy)\ncoverage across wired + wireless IoT"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined).",
        "The test: Verify IoT network access is controlled.",
        "Reconcile the systems of record (NAC (Cisco ISE / Aruba ClearPass), 802.1X / certificate auth, IoT VLAN / segmentation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. IoT devices sit on the same flat network as corporate workstations with no authentication or segmentation — any device that plugs in gets full network access, and a compromised camera can reach finance servers directly."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "NISTIR 8228 — IoT Cybersecurity",
          "url": "https://csrc.nist.gov/pubs/ir/8228/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_nac_mcp.py",
          "url": "/audit-code/iot/08_nac_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"NAC\" (network access control for iot devices (devices authenticated to the network — 802.1x/cert-based or mac-auth fallback; unknown devices blocked/quarantined)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"NAC\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT network access is controlled. PASS: IoT devices authenticate to the network (802.1X/cert or controlled MAC-auth), unknown devices are blocked/quarantined, devices are segmented onto isolated VLANs with least-privilege flows, NAC profiles device type + applies policy, across wired + wireless. Exceptions: IoT on a flat network with corporate systems, no device authentication (any device plugs in), no segmentation/quarantine of unknown devices, and no NAC coverage on wireless. The evidence — Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live NAC (Cisco ISE / Aruba ClearPass) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. NAC (Cisco ISE / Aruba ClearPass) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from NAC (Cisco ISE / Aruba ClearPass); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"NAC\" Audit Evidence\n\nThe test:\nVerify IoT network access is controlled. PASS: IoT devices authenticate to the network (802.1X/cert or controlled MAC-auth), unknown devices are blocked/quarantined, devices are segmented onto isolated VLANs with least-privilege flows, NAC profiles device type + applies policy, across wired + wireless. Exceptions: IoT on a flat network with corporate systems, no device authentication (any device plugs in), no segmentation/quarantine of unknown devices, and no NAC coverage on wireless.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"NAC\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"NAC\" control must cover\n# fragment: nac_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "nac_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"NAC\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the nac control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the nac control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for nac against comparable organisations in the sector",
            "Obtain evidence that the nac control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"NAC\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"NAC\" control?",
          "options": [
            "A point-in-time screenshot of one system's nac settings, captured during the walkthrough",
            "The Network access control for IoT devices (devices authenticated to the network — 802.1X/cert-based or MAC-auth fallback; unknown devices blocked/quarantined), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the nac control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's nac capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"NAC\"?",
          "options": [
            "From NAC (Cisco ISE / Aruba ClearPass) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how nac works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. NAC (Cisco ISE / Aruba ClearPass)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"NAC\"?",
          "options": [
            "The external audit firm, since it is the party examining the nac control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the nac data is shared, so the accountability sits with no one in particular",
            "Network security + NAC, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Network security + NAC owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"NAC\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"NAC\", which of these is a realistic reportable finding?",
          "options": [
            "IoT devices sit on the same flat network as corporate workstations with no authentication or segmentation — any device that plugs in gets full network access, and a compromised camera can reach finance servers directly.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. IoT devices sit on the same flat network as corporate workstations with no authentication or segmentation — any device that plugs in gets full network access, and a compromised camera can reach finance servers directly. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"NAC\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind nac, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-09",
    "order": 9,
    "title": "IoT gateway security",
    "subtitle": "Agentic technical & privacy audit of the iot gateway security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IoT gateway security\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT gateways are secured. PASS: gateways are hardened + patched, authenticate devices + enforce policy as a security boundary, use encrypted mutually-authenticated channels to the cloud, have controlled management (no defaults, secured interface, least-privilege), and are monitored for tamper/compromise. Exceptions: gateways with default credentials or exposed management, unencrypted/unauthenticated gateway-to-cloud channel, a gateway that passes device traffic without auth/filtering, and unpatched/unmonitored gateways.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT gateway / edge platform; Gateway-to-cloud TLS / mutual auth; Gateway hardening + patching) as tools — e.g. `gateway hardening + authentication + gateway-to-cloud encryption + mut`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching)",
        "The gateway as a security boundary/broker (protocol translation done securely, device auth enforced at the gateway, filtering of device traffic)",
        "Gateway access control + management (no default creds, secured management interface, least-privilege)",
        "Gateway monitoring + integrity (the gateway is a high-value target — tamper/compromise detection)"
      ],
      "system": [
        "IoT gateway / edge platform",
        "Gateway-to-cloud TLS / mutual auth",
        "Gateway hardening + patching",
        "Gateway monitoring"
      ],
      "dataOwner": [
        "IoT / OT security",
        "Edge / platform engineering",
        "Network security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-09-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "IoT gateway security",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IoT gateway security\" as a repeatable agentic workflow: pull the real evidence (The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"IoT gateway security\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT gateway / edge platform, Gateway-to-cloud TLS / mutual auth, Gateway hardening + patching — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `gateway hardening + authentication + gateway-to-cloud encryption + mutual auth +` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT gateways are secured. PASS: gateways are hardened + patched, authenticate devices + enforce policy as a security boundary, use encrypted mutually-authenticated channels to the cloud, have controlled management (no defaults, secured interface, least-privilege), and are monitored for tamper/compromise. Exceptions: gateways with default credentials or exposed management, unencrypted/unauthenticated gateway-to-cloud channel, a gateway that passes device traffic without auth/filtering, and unpatched/unmonitored gateways. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_iot_gateway_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT gateway / edge platform and Gateway-to-cloud TLS / mutual auth (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_iot_gateway_security_mcp.py` to expose it to your agent — or `python 09_iot_gateway_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IoT gateway / edge platform · Gateway-to-cloud TLS / mutual auth",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IoT gateway security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "gateway hardening + authentication + gateway-to-cloud encryption + mutual auth + patching\ngateway as security boundary (secure protocol translation, device auth enforced, traffic filtering)\ngateway access control + management (no default creds, secured interface, least-privilege)\ngateway monitoring + integrity (tamper/compromise detection)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching).",
        "The test: Verify IoT gateways are secured.",
        "Reconcile the systems of record (IoT gateway / edge platform, Gateway-to-cloud TLS / mutual auth, Gateway hardening + patching) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The IoT gateway runs with default admin credentials, an exposed management interface, and an unencrypted channel to the cloud; it forwards any device's traffic without authentication, making it a single point of fleet-wide compromise."
      ],
      "references": [
        {
          "title": "NISTIR 8228 — IoT Cybersecurity",
          "url": "https://csrc.nist.gov/pubs/ir/8228/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_iot_gateway_security_mcp.py",
          "url": "/audit-code/iot/09_iot_gateway_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"IoT gateway security\" (the security of iot gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IoT gateway security\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT gateways are secured. PASS: gateways are hardened + patched, authenticate devices + enforce policy as a security boundary, use encrypted mutually-authenticated channels to the cloud, have controlled management (no defaults, secured interface, least-privilege), and are monitored for tamper/compromise. Exceptions: gateways with default credentials or exposed management, unencrypted/unauthenticated gateway-to-cloud channel, a gateway that passes device traffic without auth/filtering, and unpatched/unmonitored gateways. The evidence — The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT gateway / edge platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT gateway / edge platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT gateway / edge platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"IoT gateway security\" Audit Evidence\n\nThe test:\nVerify IoT gateways are secured. PASS: gateways are hardened + patched, authenticate devices + enforce policy as a security boundary, use encrypted mutually-authenticated channels to the cloud, have controlled management (no defaults, secured interface, least-privilege), and are monitored for tamper/compromise. Exceptions: gateways with default credentials or exposed management, unencrypted/unauthenticated gateway-to-cloud channel, a gateway that passes device traffic without auth/filtering, and unpatched/unmonitored gateways.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IoT gateway security\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IoT gateway security\" control must cover\n# fragment: iot_gateway_security_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "iot_gateway_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IoT gateway security\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the iot gateway security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the iot gateway security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for iot gateway security against comparable organisations in the sector",
            "Obtain evidence that the iot gateway security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IoT gateway security\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IoT gateway security\" control?",
          "options": [
            "A point-in-time screenshot of one system's iot gateway security settings, captured during the walkthrough",
            "The The security of IoT gateways/edge aggregators (hardening, authentication, the gateway-to-cloud channel encryption + mutual auth, gateway patching), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the iot gateway security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's iot gateway security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IoT gateway security\"?",
          "options": [
            "From IoT gateway / edge platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how iot gateway security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IoT gateway / edge platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IoT gateway security\"?",
          "options": [
            "The external audit firm, since it is the party examining the iot gateway security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the iot gateway security data is shared, so the accountability sits with no one in particular",
            "IoT / OT security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / OT security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IoT gateway security\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IoT gateway security\", which of these is a realistic reportable finding?",
          "options": [
            "The IoT gateway runs with default admin credentials, an exposed management interface, and an unencrypted channel to the cloud; it forwards any device's traffic without authentication, making it a single point of fleet-wide compromise.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The IoT gateway runs with default admin credentials, an exposed management interface, and an unencrypted channel to the cloud; it forwards any device's traffic without authentication, making it a single point of fleet-wide compromise. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IoT gateway security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind iot gateway security, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-10",
    "order": 10,
    "title": "Out-of-band management",
    "subtitle": "Agentic technical & privacy audit of the out-of-band management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Out-of-band management\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify device management is out-of-band + secured. PASS: device/IoT management runs on a separated management plane/network (not mixed with data/corporate), remote management is authenticated + encrypted + MFA'd, management access is least-privilege + logged, and the management infrastructure is protected. Exceptions: management traffic mixed with data/corporate networks, unauthenticated/unencrypted remote management, broad management access with no MFA or logging, and an unprotected management server controlling the whole fleet.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (Out-of-band management network; Secured remote-management (MFA); Management-plane access control + logging) as tools — e.g. `out-of-band / management-plane separation (device mgmt on a dedicated `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic)",
        "Secured remote management (authenticated, encrypted, MFA for admin access to the management plane; no flat management access)",
        "Management-plane access control + logging (who can manage devices, least-privilege, audited)",
        "Protection of the management infrastructure (a compromise of management = fleet compromise)"
      ],
      "system": [
        "Out-of-band management network",
        "Secured remote-management (MFA)",
        "Management-plane access control + logging",
        "Management infrastructure hardening"
      ],
      "dataOwner": [
        "Network / infrastructure security",
        "IoT / OT operations",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-10-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Out-of-band management",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Out-of-band management\" as a repeatable agentic workflow: pull the real evidence (The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Out-of-band management\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Out-of-band management network, Secured remote-management (MFA), Management-plane access control + logging — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `out-of-band / management-plane separation (device mgmt on a dedicated network/ch` — read-only, against the systems of record.",
        "The test itself is specific. Verify device management is out-of-band + secured. PASS: device/IoT management runs on a separated management plane/network (not mixed with data/corporate), remote management is authenticated + encrypted + MFA'd, management access is least-privilege + logged, and the management infrastructure is protected. Exceptions: management traffic mixed with data/corporate networks, unauthenticated/unencrypted remote management, broad management access with no MFA or logging, and an unprotected management server controlling the whole fleet. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_out_of_band_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Out-of-band management network and Secured remote-management (MFA) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_out_of_band_management_mcp.py` to expose it to your agent — or `python 10_out_of_band_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Out-of-band management network · Secured remote-management (MFA)",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Out-of-band management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "out-of-band / management-plane separation (device mgmt on a dedicated network/channel)\nsecured remote management (authenticated, encrypted, MFA; no flat mgmt access)\nmanagement-plane access control + logging (least-privilege, audited)\nprotection of the management infrastructure (mgmt compromise = fleet compromise)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic).",
        "The test: Verify device management is out-of-band + secured.",
        "Reconcile the systems of record (Out-of-band management network, Secured remote-management (MFA), Management-plane access control + logging) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Device management shares the production data network and is reachable without MFA; a single management server with broad access controls the entire fleet over an unencrypted channel — compromising it would compromise every device."
      ],
      "references": [
        {
          "title": "NIST SP 800-53",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "NISTIR 8228 — IoT Cybersecurity",
          "url": "https://csrc.nist.gov/pubs/ir/8228/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_out_of_band_management_mcp.py",
          "url": "/audit-code/iot/10_out_of_band_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Out-of-band management\" (the out-of-band / management-plane separation for iot/device management (device management on a dedicated network/channel separate from data + corporate traffic)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Out-of-band management\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify device management is out-of-band + secured. PASS: device/IoT management runs on a separated management plane/network (not mixed with data/corporate), remote management is authenticated + encrypted + MFA'd, management access is least-privilege + logged, and the management infrastructure is protected. Exceptions: management traffic mixed with data/corporate networks, unauthenticated/unencrypted remote management, broad management access with no MFA or logging, and an unprotected management server controlling the whole fleet. The evidence — The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Out-of-band management network APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Out-of-band management network gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Out-of-band management network; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Out-of-band management\" Audit Evidence\n\nThe test:\nVerify device management is out-of-band + secured. PASS: device/IoT management runs on a separated management plane/network (not mixed with data/corporate), remote management is authenticated + encrypted + MFA'd, management access is least-privilege + logged, and the management infrastructure is protected. Exceptions: management traffic mixed with data/corporate networks, unauthenticated/unencrypted remote management, broad management access with no MFA or logging, and an unprotected management server controlling the whole fleet.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Out-of-band management\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Out-of-band management\" control must cover\n# fragment: outofband_management_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"EXCEPTIONS\"\n}\n# fragment: exceptions}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "outofband_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "exceptions}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Out-of-band management\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the out-of-band management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the out-of-band management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for out-of-band management against comparable organisations in the sector",
            "Obtain evidence that the out-of-band management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Out-of-band management\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Out-of-band management\" control?",
          "options": [
            "A point-in-time screenshot of one system's out-of-band management settings, captured during the walkthrough",
            "The The out-of-band / management-plane separation for IoT/device management (device management on a dedicated network/channel separate from data + corporate traffic), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the out-of-band management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's out-of-band management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Out-of-band management\"?",
          "options": [
            "From Out-of-band management network and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how out-of-band management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Out-of-band management network) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Out-of-band management\"?",
          "options": [
            "The external audit firm, since it is the party examining the out-of-band management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the out-of-band management data is shared, so the accountability sits with no one in particular",
            "Network / infrastructure security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Network / infrastructure security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Out-of-band management\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-10-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Out-of-band management\", which of these is a realistic reportable finding?",
          "options": [
            "Device management shares the production data network and is reachable without MFA; a single management server with broad access controls the entire fleet over an unencrypted channel — compromising it would compromise every device.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Device management shares the production data network and is reachable without MFA; a single management server with broad access controls the entire fleet over an unencrypted channel — compromising it would compromise every device. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-10-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Out-of-band management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind out-of-band management, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-11",
    "order": 11,
    "title": "Shadow IoT detection",
    "subtitle": "Agentic technical & privacy audit of the shadow iot detection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Shadow IoT detection\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify shadow IoT is detected + controlled. PASS: continuous device discovery reconciles against an IoT inventory to flag unknown/rogue devices, unsanctioned devices are blocked/quarantined with a sanctioned onboarding path, across corporate/OT/remote/wireless. Exceptions: no device discovery (unknown what's on the network), no inventory to reconcile against, unsanctioned IoT left connected, and discovery blind to wireless/OT/remote sites.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT discovery / visibility (Armis / Claroty / Forescout); IoT asset inventory; Quarantine / enforcement) as tools — e.g. `discovery/detection of unsanctioned IoT (continuous passive discovery;`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged)",
        "The IoT asset inventory + that discovery reconciles against it (find devices not in inventory)",
        "Policy + enforcement on unsanctioned devices (block/quarantine unknown IoT; an onboarding process so devices get sanctioned)",
        "Coverage across the environment (corporate, OT, remote sites, wireless)"
      ],
      "system": [
        "IoT discovery / visibility (Armis / Claroty / Forescout)",
        "IoT asset inventory",
        "Quarantine / enforcement",
        "Onboarding process"
      ],
      "dataOwner": [
        "Security operations + IoT / OT",
        "Network security",
        "Asset management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-11-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Shadow IoT detection",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Shadow IoT detection\" as a repeatable agentic workflow: pull the real evidence (Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Shadow IoT detection\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT discovery / visibility (Armis / Claroty / Forescout), IoT asset inventory, Quarantine / enforcement — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `discovery/detection of unsanctioned IoT (continuous passive discovery; rogue/unk` — read-only, against the systems of record.",
        "The test itself is specific. Verify shadow IoT is detected + controlled. PASS: continuous device discovery reconciles against an IoT inventory to flag unknown/rogue devices, unsanctioned devices are blocked/quarantined with a sanctioned onboarding path, across corporate/OT/remote/wireless. Exceptions: no device discovery (unknown what's on the network), no inventory to reconcile against, unsanctioned IoT left connected, and discovery blind to wireless/OT/remote sites. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_shadow_iot_detection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT discovery / visibility (Armis / Claroty / Forescout) and IoT asset inventory (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_shadow_iot_detection_mcp.py` to expose it to your agent — or `python 11_shadow_iot_detection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull IoT discovery / visibility (Armis / Claroty / Forescout) · IoT asset inventory",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Shadow IoT detection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "discovery/detection of unsanctioned IoT (continuous passive discovery; rogue/unknown flagged)\nIoT asset inventory + discovery reconciled against it\npolicy + enforcement on unsanctioned devices (block/quarantine + sanctioned onboarding)\ncoverage across corporate, OT, remote sites, wireless"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged).",
        "The test: Verify shadow IoT is detected + controlled.",
        "Reconcile the systems of record (IoT discovery / visibility (Armis / Claroty / Forescout), IoT asset inventory, Quarantine / enforcement) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no device-discovery capability and no IoT inventory, so no one knows what's connected; a department installed unsanctioned cameras and sensors that sat on the network for months, undetected and unmanaged."
      ],
      "references": [
        {
          "title": "NISTIR 8228 — IoT Cybersecurity",
          "url": "https://csrc.nist.gov/pubs/ir/8228/final"
        },
        {
          "title": "CIS Control 1 — Asset Inventory",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_shadow_iot_detection_mcp.py",
          "url": "/audit-code/iot/11_shadow_iot_detection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Shadow IoT detection\" (discovery/detection of unsanctioned iot on the network (continuous passive discovery — the device exists in inventory; rogue/unknown iot flagged)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Shadow IoT detection\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify shadow IoT is detected + controlled. PASS: continuous device discovery reconciles against an IoT inventory to flag unknown/rogue devices, unsanctioned devices are blocked/quarantined with a sanctioned onboarding path, across corporate/OT/remote/wireless. Exceptions: no device discovery (unknown what's on the network), no inventory to reconcile against, unsanctioned IoT left connected, and discovery blind to wireless/OT/remote sites. The evidence — Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT discovery / visibility (Armis / Claroty / Forescout) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT discovery / visibility (Armis / Claroty / Forescout) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT discovery / visibility (Armis / Claroty / Forescout); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Shadow IoT detection\" Audit Evidence\n\nThe test:\nVerify shadow IoT is detected + controlled. PASS: continuous device discovery reconciles against an IoT inventory to flag unknown/rogue devices, unsanctioned devices are blocked/quarantined with a sanctioned onboarding path, across corporate/OT/remote/wireless. Exceptions: no device discovery (unknown what's on the network), no inventory to reconcile against, unsanctioned IoT left connected, and discovery blind to wireless/OT/remote sites.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Shadow IoT detection\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Shadow IoT detection\" control must cover\n# fragment: shadow_iot_detection_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "shadow_iot_detection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Shadow IoT detection\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the shadow iot detection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the shadow iot detection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for shadow iot detection against comparable organisations in the sector",
            "Obtain evidence that the shadow iot detection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Shadow IoT detection\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Shadow IoT detection\" control?",
          "options": [
            "A point-in-time screenshot of one system's shadow iot detection settings, captured during the walkthrough",
            "The Discovery/detection of unsanctioned IoT on the network (continuous passive discovery — the device exists in inventory; rogue/unknown IoT flagged), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the shadow iot detection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's shadow iot detection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Shadow IoT detection\"?",
          "options": [
            "From IoT discovery / visibility (Armis / Claroty / Forescout) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how shadow iot detection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. IoT discovery / visibility (Armis / Claroty / Forescout)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Shadow IoT detection\"?",
          "options": [
            "The external audit firm, since it is the party examining the shadow iot detection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the shadow iot detection data is shared, so the accountability sits with no one in particular",
            "Security operations + IoT / OT, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations + IoT / OT owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Shadow IoT detection\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-11-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Shadow IoT detection\", which of these is a realistic reportable finding?",
          "options": [
            "There's no device-discovery capability and no IoT inventory, so no one knows what's connected; a department installed unsanctioned cameras and sensors that sat on the network for months, undetected and unmanaged.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no device-discovery capability and no IoT inventory, so no one knows what's connected; a department installed unsanctioned cameras and sensors that sat on the network for months, undetected and unmanaged. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-11-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Shadow IoT detection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind shadow iot detection, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-12",
    "order": 12,
    "title": "IoT monitoring and IR",
    "subtitle": "Agentic technical & privacy audit of the iot monitoring and ir control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IoT monitoring and IR\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify IoT is monitored + has IR. PASS: device telemetry + network behaviour feed the SOC/SIEM with IoT-specific anomaly detection (botnet/C2/lateral movement), IoT IR playbooks exist (quarantine, fleet response, reflash), and there's demonstrated detection + response capability. Exceptions: IoT a monitoring blind spot (no telemetry/detection), no IoT-specific detections (Mirai-style recruitment unseen), no IR playbook for compromised devices, and no ability to quarantine/remediate at fleet scale.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (SIEM + IoT telemetry / NDR; IoT anomaly detection; IoT IR playbooks + SOAR) as tools — e.g. `IoT monitoring (device telemetry + network behaviour to SOC/SIEM; anom`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement)",
        "IoT-specific detection use-cases (Mirai-style botnet recruitment, unusual device traffic, firmware-tamper indicators)",
        "IoT incident response playbooks (isolate/quarantine a compromised device, fleet-wide response, firmware reflash)",
        "Evidence of detection + response capability for an IoT compromise (not a blind spot)"
      ],
      "system": [
        "SIEM + IoT telemetry / NDR",
        "IoT anomaly detection",
        "IoT IR playbooks + SOAR",
        "Quarantine / reflash capability"
      ],
      "dataOwner": [
        "Security operations / SOC",
        "IoT / OT security",
        "Incident response"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-12-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "IoT monitoring and IR",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IoT monitoring and IR\" as a repeatable agentic workflow: pull the real evidence (IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"IoT monitoring and IR\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me ioT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM + IoT telemetry / NDR, IoT anomaly detection, IoT IR playbooks + SOAR — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IoT monitoring (device telemetry + network behaviour to SOC/SIEM; anomaly detect` — read-only, against the systems of record.",
        "The test itself is specific. Verify IoT is monitored + has IR. PASS: device telemetry + network behaviour feed the SOC/SIEM with IoT-specific anomaly detection (botnet/C2/lateral movement), IoT IR playbooks exist (quarantine, fleet response, reflash), and there's demonstrated detection + response capability. Exceptions: IoT a monitoring blind spot (no telemetry/detection), no IoT-specific detections (Mirai-style recruitment unseen), no IR playbook for compromised devices, and no ability to quarantine/remediate at fleet scale. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_iot_monitoring_and_ir_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM + IoT telemetry / NDR and IoT anomaly detection (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_iot_monitoring_and_ir_mcp.py` to expose it to your agent — or `python 12_iot_monitoring_and_ir_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM + IoT telemetry / NDR · IoT anomaly detection",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IoT monitoring and IR\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IoT monitoring (device telemetry + network behaviour to SOC/SIEM; anomaly detection — DDoS botnet, C2, lateral movement)\nIoT-specific detections (Mirai-style recruitment, unusual traffic, firmware-tamper)\nIoT IR playbooks (isolate/quarantine, fleet response, firmware reflash)\ndemonstrated detection + response for an IoT compromise?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement).",
        "The test: Verify IoT is monitored + has IR.",
        "Reconcile the systems of record (SIEM + IoT telemetry / NDR, IoT anomaly detection, IoT IR playbooks + SOAR) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. IoT devices send no telemetry to the SOC and there are no IoT detections, so when devices were recruited into a DDoS botnet it went unnoticed; there's no playbook or capability to quarantine or reflash a compromised fleet."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 — Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "NISTIR 8228 — IoT Cybersecurity",
          "url": "https://csrc.nist.gov/pubs/ir/8228/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_iot_monitoring_and_ir_mcp.py",
          "url": "/audit-code/iot/12_iot_monitoring_and_ir_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"IoT monitoring and IR\" (iot security monitoring (device telemetry + network behaviour into the soc/siem; anomaly detection for compromised devices — ddos botnet behaviour, c2, lateral movement)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IoT monitoring and IR\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify IoT is monitored + has IR. PASS: device telemetry + network behaviour feed the SOC/SIEM with IoT-specific anomaly detection (botnet/C2/lateral movement), IoT IR playbooks exist (quarantine, fleet response, reflash), and there's demonstrated detection + response capability. Exceptions: IoT a monitoring blind spot (no telemetry/detection), no IoT-specific detections (Mirai-style recruitment unseen), no IR playbook for compromised devices, and no ability to quarantine/remediate at fleet scale. The evidence — IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM + IoT telemetry / NDR APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM + IoT telemetry / NDR gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM + IoT telemetry / NDR; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"IoT monitoring and IR\" Audit Evidence\n\nThe test:\nVerify IoT is monitored + has IR. PASS: device telemetry + network behaviour feed the SOC/SIEM with IoT-specific anomaly detection (botnet/C2/lateral movement), IoT IR playbooks exist (quarantine, fleet response, reflash), and there's demonstrated detection + response capability. Exceptions: IoT a monitoring blind spot (no telemetry/detection), no IoT-specific detections (Mirai-style recruitment unseen), no IR playbook for compromised devices, and no ability to quarantine/remediate at fleet scale.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IoT monitoring and IR\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IoT monitoring and IR\" control must cover\n# fragment: iot_monitoring_ir_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "iot_monitoring_ir_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IoT monitoring and IR\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the iot monitoring and ir control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the iot monitoring and ir control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for iot monitoring and ir against comparable organisations in the sector",
            "Obtain evidence that the iot monitoring and ir control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IoT monitoring and IR\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IoT monitoring and IR\" control?",
          "options": [
            "A point-in-time screenshot of one system's iot monitoring and ir settings, captured during the walkthrough",
            "The IoT security monitoring (device telemetry + network behaviour into the SOC/SIEM; anomaly detection for compromised devices — DDoS botnet behaviour, C2, lateral movement), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the iot monitoring and ir control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's iot monitoring and ir capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IoT monitoring and IR\"?",
          "options": [
            "From SIEM + IoT telemetry / NDR and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how iot monitoring and ir works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SIEM + IoT telemetry / NDR) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IoT monitoring and IR\"?",
          "options": [
            "The external audit firm, since it is the party examining the iot monitoring and ir control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the iot monitoring and ir data is shared, so the accountability sits with no one in particular",
            "Security operations / SOC, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / SOC owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IoT monitoring and IR\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-12-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IoT monitoring and IR\", which of these is a realistic reportable finding?",
          "options": [
            "IoT devices send no telemetry to the SOC and there are no IoT detections, so when devices were recruited into a DDoS botnet it went unnoticed; there's no playbook or capability to quarantine or reflash a compromised fleet.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. IoT devices send no telemetry to the SOC and there are no IoT detections, so when devices were recruited into a DDoS botnet it went unnoticed; there's no playbook or capability to quarantine or reflash a compromised fleet. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-12-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IoT monitoring and IR\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind iot monitoring and ir, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  },
  {
    "epochId": "iot",
    "id": "iot-13",
    "order": 13,
    "title": "Physical access",
    "subtitle": "Agentic technical & privacy audit of the physical access control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical access\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify deployed IoT devices are physically protected. PASS: devices in the field are tamper-evident/resistant with secured enclosures, anti-tamper protections (secure element, tamper-triggered key wipe, disabled debug ports), tamper triggers alerts + device disablement/key revocation, and physical risk is assessed for the deployment environment. Exceptions: unattended devices with no tamper protection + exposed debug/recovery, no detection or response to physical tampering, a stolen device's keys remaining valid (fleet exposure), and no physical-risk assessment for hostile/public deployments.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (Device tamper-resistance / detection; Secure element + key-wipe; Tamper alerting + key revocation) as tools — e.g. `physical security of deployed devices (tamper-evidence/resistance, sec`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations)",
        "Anti-tamper + physical-attack protections (secure element, tamper detection wiping keys, disabled debug ports, potting/epoxy on sensitive components)",
        "Response to physical tampering (tamper alerts, device disablement on tamper, key revocation for a stolen device)",
        "Physical-access risk assessment for the deployment environment (unattended, hostile, public)"
      ],
      "system": [
        "Device tamper-resistance / detection",
        "Secure element + key-wipe",
        "Tamper alerting + key revocation",
        "Physical-risk assessment"
      ],
      "dataOwner": [
        "IoT / product security",
        "Physical security",
        "Device engineering"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Internet of Things (IoT) controls."
      }
    },
    "badge": {
      "id": "iot-13-badge",
      "name": "Internet of Things (IoT) Auditor",
      "emoji": "📡"
    },
    "wonder": {
      "name": "Physical access",
      "location": "Internet of Things (IoT)",
      "era": "Present Day",
      "emoji": "📡"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical access\" as a repeatable agentic workflow: pull the real evidence (Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Physical access\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Device tamper-resistance / detection, Secure element + key-wipe, Tamper alerting + key revocation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `physical security of deployed devices (tamper-evidence/resistance, secured enclo` — read-only, against the systems of record.",
        "The test itself is specific. Verify deployed IoT devices are physically protected. PASS: devices in the field are tamper-evident/resistant with secured enclosures, anti-tamper protections (secure element, tamper-triggered key wipe, disabled debug ports), tamper triggers alerts + device disablement/key revocation, and physical risk is assessed for the deployment environment. Exceptions: unattended devices with no tamper protection + exposed debug/recovery, no detection or response to physical tampering, a stolen device's keys remaining valid (fleet exposure), and no physical-risk assessment for hostile/public deployments. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_physical_access_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Device tamper-resistance / detection and Secure element + key-wipe (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_physical_access_mcp.py` to expose it to your agent — or `python 13_physical_access_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Default credentials, botnet at scale",
        "when": "2016",
        "where": "Internet-exposed IoT devices",
        "impact": "Hundreds of thousands of IoT devices with default passwords were conscripted into a botnet that took down major internet services.",
        "body": [
          "Mirai turned cheap cameras and routers with default credentials into a record DDoS — IoT's weak defaults and absent patching are systemic.",
          "Auditors verify security/privacy by design, attack-surface minimization, lightweight crypto, vuln management, gateway security, and shadow-IoT detection."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Internet of Things (IoT) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Device tamper-resistance / detection · Secure element + key-wipe",
            "type": "system"
          },
          {
            "label": "Evaluate",
            "sub": "reconcile vs policy, find gaps",
            "type": "system"
          },
          {
            "label": "Findings + opinion",
            "sub": "exceptions · CAPA",
            "type": "result"
          }
        ]
      },
      "timeline": [
        {
          "year": 2016,
          "event": "Mirai botnet: default-credential IoT powers record DDoS",
          "highlight": true
        },
        {
          "year": 2020,
          "event": "Regulators mandate baseline IoT security (no default passwords)"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical access\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "physical security of deployed devices (tamper-evidence/resistance, secured enclosures, theft protection)\nanti-tamper (secure element, tamper-triggered key wipe, disabled debug ports, potting)\nresponse to tampering (alerts, device disablement, key revocation for a stolen device)\nphysical-access risk assessment for the deployment environment"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations).",
        "The test: Verify deployed IoT devices are physically protected.",
        "Reconcile the systems of record (Device tamper-resistance / detection, Secure element + key-wipe, Tamper alerting + key revocation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Field devices in public locations have exposed debug ports and no tamper protection; a stolen device yields its keys (which are shared across the fleet) with no detection or revocation, so one stolen unit compromises the whole deployment."
      ],
      "references": [
        {
          "title": "ETSI EN 303 645",
          "url": "https://www.etsi.org/technologies/consumer-iot-security"
        },
        {
          "title": "NIST IR 8259",
          "url": "https://csrc.nist.gov/pubs/ir/8259/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_physical_access_mcp.py",
          "url": "/audit-code/iot/13_physical_access_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Physical access\" (physical security of deployed iot devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical access\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Verify deployed IoT devices are physically protected. PASS: devices in the field are tamper-evident/resistant with secured enclosures, anti-tamper protections (secure element, tamper-triggered key wipe, disabled debug ports), tamper triggers alerts + device disablement/key revocation, and physical risk is assessed for the deployment environment. Exceptions: unattended devices with no tamper protection + exposed debug/recovery, no detection or response to physical tampering, a stolen device's keys remaining valid (fleet exposure), and no physical-risk assessment for hostile/public deployments. The evidence — Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Device tamper-resistance / detection APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Device tamper-resistance / detection gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Device tamper-resistance / detection; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Physical access\" Audit Evidence\n\nThe test:\nVerify deployed IoT devices are physically protected. PASS: devices in the field are tamper-evident/resistant with secured enclosures, anti-tamper protections (secure element, tamper-triggered key wipe, disabled debug ports), tamper triggers alerts + device disablement/key revocation, and physical risk is assessed for the deployment environment. Exceptions: unattended devices with no tamper protection + exposed debug/recovery, no detection or response to physical tampering, a stolen device's keys remaining valid (fleet exposure), and no physical-risk assessment for hostile/public deployments.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical access\",\n  \"domain\": \"Internet of Things (IoT)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iot_",
        "/evidence/iot_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"IoT / product engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical access\" control must cover\n# fragment: physical_access_",
        "/evidence/iot_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
        "/evidence/coverage_report.json": "{\n  \"in_scope\": 4,\n  \"compliant\": 2,\n  \"exceptions\": [\"item-002\",\"item-003\"],\n  \"opinion\": \"MATERIAL GAP\"\n}\n# fragment: material_gap}"
      },
      "dirs": {
        "/": [
          {
            "name": "evidence",
            "isDir": true
          }
        ],
        "/evidence": [
          {
            "name": "README.md",
            "isDir": false
          },
          {
            "name": "policy.json",
            "isDir": false
          },
          {
            "name": "iot_inventory.json",
            "isDir": false
          },
          {
            "name": "iot_state.json",
            "isDir": false
          },
          {
            "name": "coverage_report.json",
            "isDir": false
          }
        ]
      },
      "fragments": [
        {
          "trigger": "/evidence/policy.json",
          "value": "FLAG{iot_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iot_inventory.json",
          "value": "physical_access_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iot_state.json",
          "value": "gap_",
          "label": "State — the items that fail the control"
        },
        {
          "trigger": "/evidence/coverage_report.json",
          "value": "material_gap}",
          "label": "Coverage report — the audit opinion"
        }
      ]
    },
    "quiz": {
      "questions": [
        {
          "id": "iot-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical access\" sub-process of Internet of Things (IoT)?",
          "options": [
            "Deploy and operate the physical access control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the physical access control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for physical access against comparable organisations in the sector",
            "Obtain evidence that the physical access control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iot-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical access\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Internet of Things (IoT)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Internet of Things (IoT) estate",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Internet of Things (IoT) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iot-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical access\" control?",
          "options": [
            "A point-in-time screenshot of one system's physical access settings, captured during the walkthrough",
            "The Physical security of deployed IoT devices (tamper-evidence/tamper-resistance, secured mounting/enclosures, protection against theft/physical access — especially for devices in public/unattended locations), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the physical access control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's physical access capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iot-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Physical access\"?",
          "options": [
            "From Device tamper-resistance / detection and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how physical access works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Device tamper-resistance / detection) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iot-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical access\"?",
          "options": [
            "The external audit firm, since it is the party examining the physical access control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the physical access data is shared, so the accountability sits with no one in particular",
            "IoT / product security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iot-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical access\", which part stays with the human auditor?",
          "options": [
            "Re-keying each system's export into a spreadsheet by hand before the agent is allowed to read it",
            "Nothing of substance — the agent decides materiality and the human simply approves whatever it outputs",
            "Setting the policy and thresholds, reviewing the findings, and signing the opinion — the agent only gathers and correlates the evidence",
            "Issuing the final audit opinion automatically as soon as the agent's evidence-gathering run completes"
          ],
          "correctIndex": 2,
          "explanation": "Agents gather and correlate evidence at machine speed; the human owns the policy, the judgement, and the signed opinion."
        },
        {
          "id": "iot-13-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be strictly read-only?",
          "options": [
            "The MCP protocol is technically incapable of performing any write operation against a target system",
            "Audit tooling must never alter the audited environment, so read-only guarantees that running it cannot change any state",
            "Read-only is simply the only access level the source-system owners were willing to grant the audit team",
            "Write access would slow the evidence collection down, so read-only is chosen mainly for better performance"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools — not a permissions accident, a speed choice, or a protocol limitation."
        },
        {
          "id": "iot-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical access\", which of these is a realistic reportable finding?",
          "options": [
            "Field devices in public locations have exposed debug ports and no tamper protection; a stolen device yields its keys (which are shared across the fleet) with no detection or revocation, so one stolen unit compromises the whole deployment.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Field devices in public locations have exposed debug ports and no tamper protection; a stolen device yields its keys (which are shared across the fleet) with no detection or revocation, so one stolen unit compromises the whole deployment. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iot-13-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report decide its overall opinion?",
          "options": [
            "It returns PASS by default unless the system owner formally disputes the underlying evidence in writing",
            "It assigns the opinion at random on each run, to avoid any bias in how the findings are presented",
            "It reports only the total count of in-scope assets and deliberately never renders an overall opinion",
            "It escalates PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of the in-scope gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a deterministic function of how many in-scope items fail the test and how severely."
        },
        {
          "id": "iot-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical access\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind physical access, so there is no overlap",
            "The control applies only to public, non-sensitive data, so any gap in it carries no real regulatory exposure",
            "The control protects regulated or sensitive data, or the systems that process it, so a gap here carries compliance and privacy exposure",
            "Technical controls and privacy obligations are governed entirely separately, so this control sits outside privacy scope"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy ride on the same technical controls — a gap here is frequently a compliance and privacy gap as well."
        }
      ]
    }
  }
];
