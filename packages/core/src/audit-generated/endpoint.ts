import type { EpochConfig, StageConfig } from "../types";

export const endpointEpoch: EpochConfig = {
  "id": "endpoint",
  "name": "Endpoint Devices",
  "subtitle": "Agentic technical & privacy audit — Endpoint Devices",
  "description": "Audit Endpoint Devices end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "💻",
  "color": "Lime",
  "unlocked": true
};

export const endpointStages: StageConfig[] = [
  {
    "epochId": "endpoint",
    "id": "ept-01",
    "order": 1,
    "title": "Device management platform",
    "subtitle": "Agentic technical & privacy audit of the device management platform control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Device management platform\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify all corporate endpoints are enrolled in and governed by the management platform. PASS: every in-scope device (Windows/macOS/mobile) is enrolled in MDM/UEM, receives the security baseline, and reports compliant; unmanaged devices are blocked from corporate resources. Exceptions: devices not enrolled, enrolled-but-non-compliant devices, and unmanaged devices with access to corporate data.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM); The IdP (conditional access on device compliance); Asset inventory / CMDB (the denominator)) as tools — e.g. `Intune/Jamf: enrolled + compliant device count vs the CMDB/AD device c`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population",
        "The configuration-profile baseline pushed to managed devices (encryption, screen-lock, patch, EDR)",
        "Per-device compliance status against the baseline",
        "The unmanaged/unenrolled device list"
      ],
      "system": [
        "Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM)",
        "The IdP (conditional access on device compliance)",
        "Asset inventory / CMDB (the denominator)"
      ],
      "dataOwner": [
        "End-user computing / IT — owns the platform",
        "Security — owns the baseline",
        "Asset management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-01-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Device management platform",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Device management platform\" as a repeatable agentic workflow: pull the real evidence (The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Device management platform\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the MDM/UEM enrolment report — devices enrolled + managed vs the total known device population, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM), The IdP (conditional access on device compliance), Asset inventory / CMDB (the denominator) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Intune/Jamf: enrolled + compliant device count vs the CMDB/AD device count (the ` — read-only, against the systems of record.",
        "The test itself is specific. Verify all corporate endpoints are enrolled in and governed by the management platform. PASS: every in-scope device (Windows/macOS/mobile) is enrolled in MDM/UEM, receives the security baseline, and reports compliant; unmanaged devices are blocked from corporate resources. Exceptions: devices not enrolled, enrolled-but-non-compliant devices, and unmanaged devices with access to corporate data. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_device_management_platform_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM) and The IdP (conditional access on device compliance) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_device_management_platform_mcp.py` to expose it to your agent — or `python 01_device_management_platform_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM) · The IdP (conditional access on device compliance)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Device management platform\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Intune/Jamf: enrolled + compliant device count vs the CMDB/AD device count (the gap)\nexport the configuration-profile baseline + per-device compliance state\nConditional Access: is device-compliance required for corporate apps?\nlist devices with corporate access that are NOT enrolled"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population.",
        "The test: Verify all corporate endpoints are enrolled in and governed by the management platform.",
        "Reconcile the systems of record (Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM), The IdP (conditional access on device compliance), Asset inventory / CMDB (the denominator)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Intune covers Windows but 200 macOS and most personal mobiles accessing email are unmanaged; 15% of enrolled devices report non-compliant (encryption or patch) yet still have access."
      ],
      "references": [
        {
          "title": "NIST SP 800-124 Mobile Device Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/124/r2/final"
        },
        {
          "title": "CIS Control 1 / 4",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_device_management_platform_mcp.py",
          "url": "/audit-code/endpoint/01_device_management_platform_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Device management platform\" (the mdm/uem enrolment report — devices enrolled + managed vs the total known device population), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device management platform\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify all corporate endpoints are enrolled in and governed by the management platform. PASS: every in-scope device (Windows/macOS/mobile) is enrolled in MDM/UEM, receives the security baseline, and reports compliant; unmanaged devices are blocked from corporate resources. Exceptions: devices not enrolled, enrolled-but-non-compliant devices, and unmanaged devices with access to corporate data. The evidence — The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Device management platform\" Audit Evidence\n\nThe test:\nVerify all corporate endpoints are enrolled in and governed by the management platform. PASS: every in-scope device (Windows/macOS/mobile) is enrolled in MDM/UEM, receives the security baseline, and reports compliant; unmanaged devices are blocked from corporate resources. Exceptions: devices not enrolled, enrolled-but-non-compliant devices, and unmanaged devices with access to corporate data.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Device management platform\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Device management platform\" control must cover\n# fragment: device_management_platform_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "device_management_platform_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Device management platform\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the device management platform control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Device management platform\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Device management platform\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The MDM/UEM enrolment report — devices enrolled + managed vs the total known device population reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Device management platform\"?",
          "options": [
            "Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Microsoft Intune / Jamf Pro / VMware Workspace ONE (MDM/UEM)) via read-only access."
        },
        {
          "id": "ept-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Device management platform\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "End-user computing / IT — owns the platform (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT — owns the platform owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Device management platform\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-01-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Device management platform\", which is a realistic reportable finding?",
          "options": [
            "Intune covers Windows but 200 macOS and most personal mobiles accessing email are unmanaged; 15% of enrolled devices report non-compliant (encryption or patch) yet still have access.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Intune covers Windows but 200 macOS and most personal mobiles accessing email are unmanaged; 15% of enrolled devices report non-compliant (encryption or patch) yet still have access."
        },
        {
          "id": "ept-01-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Device management platform\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-02",
    "order": 2,
    "title": "End point inventory and unauthorized devices",
    "subtitle": "Agentic technical & privacy audit of the end point inventory and unauthorized devices control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"End point inventory and unauthorized devices\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org has a complete, reconciled endpoint inventory and detects unauthorised devices. PASS: a single authoritative inventory reconciles MDM, EDR, directory, and network sources; devices on the network are matched to it; and unknown/unauthorised devices are detected and quarantined (NAC). Exceptions: large reconciliation gaps, rogue devices on the network with no detection, and no NAC/quarantine for unknowns.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM + EDR + AD + DHCP/NAC (the sources); NAC — Cisco ISE / Aruba ClearPass; Asset discovery — runZero / Lansweeper) as tools — e.g. `reconcile device lists: AD computers ∪ EDR ∪ MDM ∪ DHCP leases → find `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC",
        "Discovery of devices on the network NOT in the inventory (rogue/unauthorised)",
        "The reconciliation gaps between sources (in EDR but not MDM, on network but in neither)",
        "The process to detect + quarantine unauthorised devices"
      ],
      "system": [
        "MDM + EDR + AD + DHCP/NAC (the sources)",
        "NAC — Cisco ISE / Aruba ClearPass",
        "Asset discovery — runZero / Lansweeper"
      ],
      "dataOwner": [
        "IT asset management — owns the inventory",
        "Network security (NAC)",
        "Security operations"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-02-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "End point inventory and unauthorized devices",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"End point inventory and unauthorized devices\" as a repeatable agentic workflow: pull the real evidence (The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"End point inventory and unauthorized devices\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM + EDR + AD + DHCP/NAC (the sources), NAC — Cisco ISE / Aruba ClearPass, Asset discovery — runZero / Lansweeper — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `reconcile device lists: AD computers ∪ EDR ∪ MDM ∪ DHCP leases → find the gaps` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org has a complete, reconciled endpoint inventory and detects unauthorised devices. PASS: a single authoritative inventory reconciles MDM, EDR, directory, and network sources; devices on the network are matched to it; and unknown/unauthorised devices are detected and quarantined (NAC). Exceptions: large reconciliation gaps, rogue devices on the network with no detection, and no NAC/quarantine for unknowns. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_end_point_inventory_and_unauthorized_devices_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM + EDR + AD + DHCP/NAC (the sources) and NAC — Cisco ISE / Aruba ClearPass (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_end_point_inventory_and_unauthorized_devices_mcp.py` to expose it to your agent — or `python 02_end_point_inventory_and_unauthorized_devices_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull MDM + EDR + AD + DHCP/NAC (the sources) · NAC — Cisco ISE / Aruba ClearPass",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"End point inventory and unauthorized devices\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "reconcile device lists: AD computers ∪ EDR ∪ MDM ∪ DHCP leases → find the gaps\nrunZero / Lansweeper network discovery vs the inventory (rogue devices)\nNAC logs: unknown devices that connected — were they quarantined?\ncount endpoints with EDR but no MDM (and vice-versa)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC.",
        "The test: Verify the org has a complete, reconciled endpoint inventory and detects unauthorised devices.",
        "Reconcile the systems of record (MDM + EDR + AD + DHCP/NAC (the sources), NAC — Cisco ISE / Aruba ClearPass, Asset discovery — runZero / Lansweeper) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EDR sees 4,200 endpoints, MDM 3,600, AD 5,000 — none reconcile; network discovery finds 300 devices in no inventory, and there's no NAC to stop an unknown laptop from joining."
      ],
      "references": [
        {
          "title": "CIS Control 1 Inventory of Enterprise Assets",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-128",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_end_point_inventory_and_unauthorized_devices_mcp.py",
          "url": "/audit-code/endpoint/02_end_point_inventory_and_unauthorized_devices_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"End point inventory and unauthorized devices\" (the authoritative endpoint inventory reconciled from mdm + edr + ad + dhcp/nac), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End point inventory and unauthorized devices\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify the org has a complete, reconciled endpoint inventory and detects unauthorised devices. PASS: a single authoritative inventory reconciles MDM, EDR, directory, and network sources; devices on the network are matched to it; and unknown/unauthorised devices are detected and quarantined (NAC). Exceptions: large reconciliation gaps, rogue devices on the network with no detection, and no NAC/quarantine for unknowns. The evidence — The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM + EDR + AD + DHCP/NAC (the sources) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM + EDR + AD + DHCP/NAC (the sources) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM + EDR + AD + DHCP/NAC (the sources); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"End point inventory and unauthorized devices\" Audit Evidence\n\nThe test:\nVerify the org has a complete, reconciled endpoint inventory and detects unauthorised devices. PASS: a single authoritative inventory reconciles MDM, EDR, directory, and network sources; devices on the network are matched to it; and unknown/unauthorised devices are detected and quarantined (NAC). Exceptions: large reconciliation gaps, rogue devices on the network with no detection, and no NAC/quarantine for unknowns.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"End point inventory and unauthorized devices\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"End point inventory and unauthorized devices\" control must cover\n# fragment: end_point_inventory_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "end_point_inventory_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"End point inventory and unauthorized devices\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the end point inventory and unauthorized devices control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"End point inventory and unauthorized devices\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"End point inventory and unauthorized devices\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The authoritative endpoint inventory reconciled from MDM + EDR + AD + DHCP/NAC reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"End point inventory and unauthorized devices\"?",
          "options": [
            "MDM + EDR + AD + DHCP/NAC (the sources) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM + EDR + AD + DHCP/NAC (the sources)) via read-only access."
        },
        {
          "id": "ept-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"End point inventory and unauthorized devices\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT asset management — owns the inventory (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT asset management — owns the inventory owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"End point inventory and unauthorized devices\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-02-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"End point inventory and unauthorized devices\", which is a realistic reportable finding?",
          "options": [
            "EDR sees 4,200 endpoints, MDM 3,600, AD 5,000 — none reconcile; network discovery finds 300 devices in no inventory, and there's no NAC to stop an unknown laptop from joining.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EDR sees 4,200 endpoints, MDM 3,600, AD 5,000 — none reconcile; network discovery finds 300 devices in no inventory, and there's no NAC to stop an unknown laptop from joining."
        },
        {
          "id": "ept-02-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"End point inventory and unauthorized devices\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-03",
    "order": 3,
    "title": "Hardware lifecycle tracking",
    "subtitle": "Agentic technical & privacy audit of the hardware lifecycle tracking control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Hardware lifecycle tracking\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify hardware is tracked across its full lifecycle. PASS: every device has a register entry through procurement, assignment, refresh, and disposal; the register reconciles to discovered devices; disposed devices were securely wiped (NIST 800-88) with certificates; and lost/stolen devices are recorded and remotely wiped. Exceptions: deployed devices not in the register (or vice-versa), disposed devices with no wipe evidence, and lost devices not remote-wiped.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT; MDM (remote wipe); Disposal-vendor records) as tools — e.g. `reconcile the ITAM register vs MDM + EDR discovered devices`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status",
        "Reconciliation of the register against deployed/discovered devices",
        "Disposal/decommission records (secure wipe / certificate of destruction)",
        "Lost/stolen device records + their handling"
      ],
      "system": [
        "ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT",
        "MDM (remote wipe)",
        "Disposal-vendor records"
      ],
      "dataOwner": [
        "IT asset management — owns the register",
        "End-user computing",
        "Procurement / disposal"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-03-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Hardware lifecycle tracking",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Hardware lifecycle tracking\" as a repeatable agentic workflow: pull the real evidence (The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Hardware lifecycle tracking\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT, MDM (remote wipe), Disposal-vendor records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `reconcile the ITAM register vs MDM + EDR discovered devices` — read-only, against the systems of record.",
        "The test itself is specific. Verify hardware is tracked across its full lifecycle. PASS: every device has a register entry through procurement, assignment, refresh, and disposal; the register reconciles to discovered devices; disposed devices were securely wiped (NIST 800-88) with certificates; and lost/stolen devices are recorded and remotely wiped. Exceptions: deployed devices not in the register (or vice-versa), disposed devices with no wipe evidence, and lost devices not remote-wiped. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_hardware_lifecycle_tracking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT and MDM (remote wipe) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_hardware_lifecycle_tracking_mcp.py` to expose it to your agent — or `python 03_hardware_lifecycle_tracking_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT · MDM (remote wipe)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Hardware lifecycle tracking\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "reconcile the ITAM register vs MDM + EDR discovered devices\ndisposal: certificates of destruction / crypto-erase logs per NIST 800-88\nlost/stolen log: confirm remote wipe was issued AND confirmed\ncheck for register entries stuck 'in stock' that are actually deployed"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status.",
        "The test: Verify hardware is tracked across its full lifecycle.",
        "Reconcile the systems of record (ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT, MDM (remote wipe), Disposal-vendor records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The asset register is ~70% accurate; 50 'disposed' laptops have no wipe certificate (data may have left on resold drives), and two reported-lost laptops were never remote-wiped."
      ],
      "references": [
        {
          "title": "NIST SP 800-88 Media Sanitisation",
          "url": "https://csrc.nist.gov/pubs/sp/800/88/r1/final"
        },
        {
          "title": "ISO/IEC 27001 A.5.9 / A.7.14",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_hardware_lifecycle_tracking_mcp.py",
          "url": "/audit-code/endpoint/03_hardware_lifecycle_tracking_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Hardware lifecycle tracking\" (the hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Hardware lifecycle tracking\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify hardware is tracked across its full lifecycle. PASS: every device has a register entry through procurement, assignment, refresh, and disposal; the register reconciles to discovered devices; disposed devices were securely wiped (NIST 800-88) with certificates; and lost/stolen devices are recorded and remotely wiped. Exceptions: deployed devices not in the register (or vice-versa), disposed devices with no wipe evidence, and lost devices not remote-wiped. The evidence — The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Hardware lifecycle tracking\" Audit Evidence\n\nThe test:\nVerify hardware is tracked across its full lifecycle. PASS: every device has a register entry through procurement, assignment, refresh, and disposal; the register reconciles to discovered devices; disposed devices were securely wiped (NIST 800-88) with certificates; and lost/stolen devices are recorded and remotely wiped. Exceptions: deployed devices not in the register (or vice-versa), disposed devices with no wipe evidence, and lost devices not remote-wiped.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Hardware lifecycle tracking\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Hardware lifecycle tracking\" control must cover\n# fragment: hardware_lifecycle_tracking_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "hardware_lifecycle_tracking_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Hardware lifecycle tracking\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the hardware lifecycle tracking control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Hardware lifecycle tracking\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Hardware lifecycle tracking\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The hardware asset register (procurement → deployment → refresh → disposal) with owner, location, status reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Hardware lifecycle tracking\"?",
          "options": [
            "ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ITAM — ServiceNow ITAM / Lansweeper / Snipe-IT) via read-only access."
        },
        {
          "id": "ept-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Hardware lifecycle tracking\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IT asset management — owns the register (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IT asset management — owns the register owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Hardware lifecycle tracking\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-03-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Hardware lifecycle tracking\", which is a realistic reportable finding?",
          "options": [
            "The asset register is ~70% accurate; 50 'disposed' laptops have no wipe certificate (data may have left on resold drives), and two reported-lost laptops were never remote-wiped.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The asset register is ~70% accurate; 50 'disposed' laptops have no wipe certificate (data may have left on resold drives), and two reported-lost laptops were never remote-wiped."
        },
        {
          "id": "ept-03-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Hardware lifecycle tracking\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-04",
    "order": 4,
    "title": "Device image version mgmt",
    "subtitle": "Agentic technical & privacy audit of the device image version mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Device image version mgmt\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints run a current, approved, hardened image. PASS: gold images are versioned, hardened (CIS), and patched at bake; the fleet runs current image versions; and re-imaging/refresh keeps drift bounded. Exceptions: devices on images years old, unapproved/unmanaged builds, images that ship unpatched or unhardened, and no process to refresh stale images.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline); MDM (deployed image/build version); CIS-CAT (image hardening)) as tools — e.g. `MDM: deployed OS build + image-version distribution across the fleet`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The approved gold-image/build definitions + versions per OS",
        "The deployed-image-version distribution across the fleet",
        "The image-build hardening + patch-currency at bake time",
        "Devices running outdated/unapproved images"
      ],
      "system": [
        "Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline)",
        "MDM (deployed image/build version)",
        "CIS-CAT (image hardening)"
      ],
      "dataOwner": [
        "End-user computing / engineering — owns images",
        "Security — owns hardening",
        "IT operations"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-04-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Device image version mgmt",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Device image version mgmt\" as a repeatable agentic workflow: pull the real evidence (The approved gold-image/build definitions + versions per OS) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Device image version mgmt\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the approved gold-image/build definitions + versions per OS, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline), MDM (deployed image/build version), CIS-CAT (image hardening) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `MDM: deployed OS build + image-version distribution across the fleet` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints run a current, approved, hardened image. PASS: gold images are versioned, hardened (CIS), and patched at bake; the fleet runs current image versions; and re-imaging/refresh keeps drift bounded. Exceptions: devices on images years old, unapproved/unmanaged builds, images that ship unpatched or unhardened, and no process to refresh stale images. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_device_image_version_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline) and MDM (deployed image/build version) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_device_image_version_mgmt_mcp.py` to expose it to your agent — or `python 04_device_image_version_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline) · MDM (deployed image/build version)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Device image version mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "MDM: deployed OS build + image-version distribution across the fleet\ncompare to the approved gold-image versions\nCIS-CAT the gold image to confirm hardening + patch currency at bake\nflag devices on deprecated/unapproved builds"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The approved gold-image/build definitions + versions per OS.",
        "The test: Verify endpoints run a current, approved, hardened image.",
        "Reconcile the systems of record (Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline), MDM (deployed image/build version), CIS-CAT (image hardening)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A third of the fleet runs a gold image from two years ago with known-unpatched components baked in, and several departments use their own unapproved, unhardened images."
      ],
      "references": [
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "NIST SP 800-128",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_device_image_version_mgmt_mcp.py",
          "url": "/audit-code/endpoint/04_device_image_version_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Device image version mgmt\" (the approved gold-image/build definitions + versions per os), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device image version mgmt\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints run a current, approved, hardened image. PASS: gold images are versioned, hardened (CIS), and patched at bake; the fleet runs current image versions; and re-imaging/refresh keeps drift bounded. Exceptions: devices on images years old, unapproved/unmanaged builds, images that ship unpatched or unhardened, and no process to refresh stale images. The evidence — The approved gold-image/build definitions + versions per OS — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Device image version mgmt\" Audit Evidence\n\nThe test:\nVerify endpoints run a current, approved, hardened image. PASS: gold images are versioned, hardened (CIS), and patched at bake; the fleet runs current image versions; and re-imaging/refresh keeps drift bounded. Exceptions: devices on images years old, unapproved/unmanaged builds, images that ship unpatched or unhardened, and no process to refresh stale images.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The approved gold-image/build definitions + versions per OS)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Device image version mgmt\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Device image version mgmt\" control must cover\n# fragment: device_image_version_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "device_image_version_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Device image version mgmt\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the device image version mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Device image version mgmt\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Device image version mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The approved gold-image/build definitions + versions per OS reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Device image version mgmt\"?",
          "options": [
            "Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Imaging — Autopilot / MDT-SCCM / Jamf (the gold-image pipeline)) via read-only access."
        },
        {
          "id": "ept-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Device image version mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "End-user computing / engineering — owns images (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / engineering — owns images owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Device image version mgmt\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-04-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Device image version mgmt\", which is a realistic reportable finding?",
          "options": [
            "A third of the fleet runs a gold image from two years ago with known-unpatched components baked in, and several departments use their own unapproved, unhardened images.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A third of the fleet runs a gold image from two years ago with known-unpatched components baked in, and several departments use their own unapproved, unhardened images."
        },
        {
          "id": "ept-04-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Device image version mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-05",
    "order": 5,
    "title": "EDR & antimalware",
    "subtitle": "Agentic technical & privacy audit of the edr & antimalware control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"EDR & antimalware\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify EDR/antimalware is deployed, healthy, and in prevention mode everywhere. PASS: EDR agents are on ~100% of endpoints, healthy and reporting; tamper protection is on; policy is in prevention (block) not detect-only; sensors/signatures are current; and detections route to the SOC. Exceptions: endpoints with no EDR or a disabled/unhealthy agent, detect-only mode on production, tamper protection off, and stale agents.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne; The device inventory (coverage denominator); SIEM / SOC) as tools — e.g. `EDR console: healthy reporting agents vs the device inventory (coverag`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory",
        "EDR policy config (real-time protection, tamper protection, prevention vs detect-only, cloud lookups)",
        "Detection/response coverage + recent blocked-threat evidence",
        "Agent-health gaps (disabled, outdated, not reporting)"
      ],
      "system": [
        "EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne",
        "The device inventory (coverage denominator)",
        "SIEM / SOC"
      ],
      "dataOwner": [
        "Security operations — owns EDR",
        "End-user computing (deploys agents)",
        "SOC"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-05-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "EDR & antimalware",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"EDR & antimalware\" as a repeatable agentic workflow: pull the real evidence (The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"EDR & antimalware\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne, The device inventory (coverage denominator), SIEM / SOC — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `EDR console: healthy reporting agents vs the device inventory (coverage gap)` — read-only, against the systems of record.",
        "The test itself is specific. Verify EDR/antimalware is deployed, healthy, and in prevention mode everywhere. PASS: EDR agents are on ~100% of endpoints, healthy and reporting; tamper protection is on; policy is in prevention (block) not detect-only; sensors/signatures are current; and detections route to the SOC. Exceptions: endpoints with no EDR or a disabled/unhealthy agent, detect-only mode on production, tamper protection off, and stale agents. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_edr_antimalware_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne and The device inventory (coverage denominator) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_edr_antimalware_mcp.py` to expose it to your agent — or `python 05_edr_antimalware_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne · The device inventory (coverage denominator)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"EDR & antimalware\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "EDR console: healthy reporting agents vs the device inventory (coverage gap)\npolicy export: prevention vs detect-only, tamper protection, real-time on\nagent-version / sensor-currency report; list disabled/unhealthy agents\nsample recent prevented detections"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory.",
        "The test: Verify EDR/antimalware is deployed, healthy, and in prevention mode everywhere.",
        "Reconcile the systems of record (EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne, The device inventory (coverage denominator), SIEM / SOC) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EDR covers 85% of endpoints; 300 have no agent and 120 have it disabled or not reporting; and the server policy is detect-only, so malware would be seen but not blocked."
      ],
      "references": [
        {
          "title": "CIS Control 10 Malware Defenses",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "MITRE ATT&CK",
          "url": "https://attack.mitre.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_edr_antimalware_mcp.py",
          "url": "/audit-code/endpoint/05_edr_antimalware_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"EDR & antimalware\" (the edr/av deployment report — agents installed + healthy + reporting vs the device inventory), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"EDR & antimalware\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify EDR/antimalware is deployed, healthy, and in prevention mode everywhere. PASS: EDR agents are on ~100% of endpoints, healthy and reporting; tamper protection is on; policy is in prevention (block) not detect-only; sensors/signatures are current; and detections route to the SOC. Exceptions: endpoints with no EDR or a disabled/unhealthy agent, detect-only mode on production, tamper protection off, and stale agents. The evidence — The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"EDR & antimalware\" Audit Evidence\n\nThe test:\nVerify EDR/antimalware is deployed, healthy, and in prevention mode everywhere. PASS: EDR agents are on ~100% of endpoints, healthy and reporting; tamper protection is on; policy is in prevention (block) not detect-only; sensors/signatures are current; and detections route to the SOC. Exceptions: endpoints with no EDR or a disabled/unhealthy agent, detect-only mode on production, tamper protection off, and stale agents.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"EDR & antimalware\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"EDR & antimalware\" control must cover\n# fragment: edr_antimalware_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "edr_antimalware_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"EDR & antimalware\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the edr & antimalware control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"EDR & antimalware\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"EDR & antimalware\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The EDR/AV deployment report — agents installed + healthy + reporting vs the device inventory reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"EDR & antimalware\"?",
          "options": [
            "EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., EDR — CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne) via read-only access."
        },
        {
          "id": "ept-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"EDR & antimalware\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations — owns EDR (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations — owns EDR owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"EDR & antimalware\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-05-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"EDR & antimalware\", which is a realistic reportable finding?",
          "options": [
            "EDR covers 85% of endpoints; 300 have no agent and 120 have it disabled or not reporting; and the server policy is detect-only, so malware would be seen but not blocked.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EDR covers 85% of endpoints; 300 have no agent and 120 have it disabled or not reporting; and the server policy is detect-only, so malware would be seen but not blocked."
        },
        {
          "id": "ept-05-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"EDR & antimalware\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-06",
    "order": 6,
    "title": "Coverage gaps",
    "subtitle": "Agentic technical & privacy audit of the coverage gaps control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Coverage gaps\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify every endpoint has the full required control stack, with gaps found and closed. PASS: a per-device coverage matrix reconciles MDM, EDR, encryption, patch, and logging; near-100% of devices have all required controls; and any device missing a control is detected and remediated. Exceptions: devices missing one or more controls (EDR-but-no-encryption, encrypted-but-no-logging), systemic populations excluded (servers, OT, contractor devices), and no process to find gaps.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM + EDR + encryption + patch + SIEM (joined); The reconciliation/coverage tooling or a manual join; CMDB) as tools — e.g. `join device lists across MDM, EDR, BitLocker/FileVault, patch, and SIE`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each)",
        "The list of devices missing one or more required controls",
        "The systemic-gap analysis (which control, which population, why)",
        "The remediation/onboarding plan for the gaps"
      ],
      "system": [
        "MDM + EDR + encryption + patch + SIEM (joined)",
        "The reconciliation/coverage tooling or a manual join",
        "CMDB"
      ],
      "dataOwner": [
        "Security operations / endpoint security — owns coverage",
        "IT",
        "Asset management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-06-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Coverage gaps",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Coverage gaps\" as a repeatable agentic workflow: pull the real evidence (The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Coverage gaps\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM + EDR + encryption + patch + SIEM (joined), The reconciliation/coverage tooling or a manual join, CMDB — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `join device lists across MDM, EDR, BitLocker/FileVault, patch, and SIEM into one` — read-only, against the systems of record.",
        "The test itself is specific. Verify every endpoint has the full required control stack, with gaps found and closed. PASS: a per-device coverage matrix reconciles MDM, EDR, encryption, patch, and logging; near-100% of devices have all required controls; and any device missing a control is detected and remediated. Exceptions: devices missing one or more controls (EDR-but-no-encryption, encrypted-but-no-logging), systemic populations excluded (servers, OT, contractor devices), and no process to find gaps. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_coverage_gaps_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM + EDR + encryption + patch + SIEM (joined) and The reconciliation/coverage tooling or a manual join (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_coverage_gaps_mcp.py` to expose it to your agent — or `python 06_coverage_gaps_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull MDM + EDR + encryption + patch + SIEM (joined) · The reconciliation/coverage tooling or a manual join",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Coverage gaps\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "join device lists across MDM, EDR, BitLocker/FileVault, patch, and SIEM into one matrix\nflag every device missing ≥1 control; group by the missing control + population\nfind populations systematically excluded (servers, lab machines, BYOD)\ntrack gaps to closure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each).",
        "The test: Verify every endpoint has the full required control stack, with gaps found and closed.",
        "Reconcile the systems of record (MDM + EDR + encryption + patch + SIEM (joined), The reconciliation/coverage tooling or a manual join, CMDB) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. When the controls are joined per device, only 62% have the full stack; a whole population of lab machines has EDR but no encryption or logging, and contractor laptops have none of it."
      ],
      "references": [
        {
          "title": "CIS Critical Security Controls",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST Cybersecurity Framework",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_coverage_gaps_mcp.py",
          "url": "/audit-code/endpoint/06_coverage_gaps_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Coverage gaps\" (the cross-control coverage matrix per device (mdm, edr, encryption, patch, logging — ✓/✗ each)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Coverage gaps\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify every endpoint has the full required control stack, with gaps found and closed. PASS: a per-device coverage matrix reconciles MDM, EDR, encryption, patch, and logging; near-100% of devices have all required controls; and any device missing a control is detected and remediated. Exceptions: devices missing one or more controls (EDR-but-no-encryption, encrypted-but-no-logging), systemic populations excluded (servers, OT, contractor devices), and no process to find gaps. The evidence — The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM + EDR + encryption + patch + SIEM (joined) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM + EDR + encryption + patch + SIEM (joined) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM + EDR + encryption + patch + SIEM (joined); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Coverage gaps\" Audit Evidence\n\nThe test:\nVerify every endpoint has the full required control stack, with gaps found and closed. PASS: a per-device coverage matrix reconciles MDM, EDR, encryption, patch, and logging; near-100% of devices have all required controls; and any device missing a control is detected and remediated. Exceptions: devices missing one or more controls (EDR-but-no-encryption, encrypted-but-no-logging), systemic populations excluded (servers, OT, contractor devices), and no process to find gaps.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Coverage gaps\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Coverage gaps\" control must cover\n# fragment: coverage_gaps_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "coverage_gaps_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Coverage gaps\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the coverage gaps control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Coverage gaps\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Coverage gaps\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The cross-control coverage matrix per device (MDM, EDR, encryption, patch, logging — ✓/✗ each) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Coverage gaps\"?",
          "options": [
            "MDM + EDR + encryption + patch + SIEM (joined) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM + EDR + encryption + patch + SIEM (joined)) via read-only access."
        },
        {
          "id": "ept-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Coverage gaps\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / endpoint security — owns coverage (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / endpoint security — owns coverage owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Coverage gaps\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-06-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Coverage gaps\", which is a realistic reportable finding?",
          "options": [
            "When the controls are joined per device, only 62% have the full stack; a whole population of lab machines has EDR but no encryption or logging, and contractor laptops have none of it.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. When the controls are joined per device, only 62% have the full stack; a whole population of lab machines has EDR but no encryption or logging, and contractor laptops have none of it."
        },
        {
          "id": "ept-06-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Coverage gaps\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-07",
    "order": 7,
    "title": "OS patching cadence",
    "subtitle": "Agentic technical & privacy audit of the os patching cadence control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"OS patching cadence\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints are patched within cadence (OS + common third-party apps). PASS: a patch policy with severity SLAs exists; ~100% of endpoints are within SLA for OS and high-risk third-party apps (browsers, Java, Adobe); deployment rings + reboot enforcement keep devices current; and KEV-listed endpoint CVEs are remediated. Exceptions: endpoints months behind, third-party apps unpatched, devices with paused/failed updates, and no third-party patching at all.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg); Vuln scanner (missing-patch view); CISA KEV) as tools — e.g. `Intune/SCCM update-compliance per device; identify devices behind SLA`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device",
        "The endpoint patch SLA/cadence policy",
        "The patch-ring/deployment config (rings, deferral, reboot enforcement)",
        "Devices stuck behind on patches (failed/paused updates)"
      ],
      "system": [
        "Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg)",
        "Vuln scanner (missing-patch view)",
        "CISA KEV"
      ],
      "dataOwner": [
        "End-user computing / IT operations — patch",
        "Security operations — track SLA",
        "Risk (exceptions)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-07-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "OS patching cadence",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"OS patching cadence\" as a repeatable agentic workflow: pull the real evidence (The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"OS patching cadence\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg), Vuln scanner (missing-patch view), CISA KEV — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Intune/SCCM update-compliance per device; identify devices behind SLA` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints are patched within cadence (OS + common third-party apps). PASS: a patch policy with severity SLAs exists; ~100% of endpoints are within SLA for OS and high-risk third-party apps (browsers, Java, Adobe); deployment rings + reboot enforcement keep devices current; and KEV-listed endpoint CVEs are remediated. Exceptions: endpoints months behind, third-party apps unpatched, devices with paused/failed updates, and no third-party patching at all. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_os_patching_cadence_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg) and Vuln scanner (missing-patch view) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_os_patching_cadence_mcp.py` to expose it to your agent — or `python 07_os_patching_cadence_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg) · Vuln scanner (missing-patch view)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"OS patching cadence\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Intune/SCCM update-compliance per device; identify devices behind SLA\nthird-party patch coverage (browsers/Java/Adobe) — usually the real gap\nlist devices with paused/failed update history\njoin endpoint CVEs to the CISA KEV catalogue"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device.",
        "The test: Verify endpoints are patched within cadence (OS + common third-party apps).",
        "Reconcile the systems of record (Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg), Vuln scanner (missing-patch view), CISA KEV) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. OS patching is decent but third-party apps aren't managed at all — most endpoints run outdated Chrome/Acrobat with KEV-listed CVEs, and 8% of devices have updates paused indefinitely."
      ],
      "references": [
        {
          "title": "NIST SP 800-40 Patch Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CISA KEV",
          "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_os_patching_cadence_mcp.py",
          "url": "/audit-code/endpoint/07_os_patching_cadence_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"OS patching cadence\" (the endpoint patch-compliance report (missing os + third-party patches, severity, age) per device), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"OS patching cadence\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints are patched within cadence (OS + common third-party apps). PASS: a patch policy with severity SLAs exists; ~100% of endpoints are within SLA for OS and high-risk third-party apps (browsers, Java, Adobe); deployment rings + reboot enforcement keep devices current; and KEV-listed endpoint CVEs are remediated. Exceptions: endpoints months behind, third-party apps unpatched, devices with paused/failed updates, and no third-party patching at all. The evidence — The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"OS patching cadence\" Audit Evidence\n\nThe test:\nVerify endpoints are patched within cadence (OS + common third-party apps). PASS: a patch policy with severity SLAs exists; ~100% of endpoints are within SLA for OS and high-risk third-party apps (browsers, Java, Adobe); deployment rings + reboot enforcement keep devices current; and KEV-listed endpoint CVEs are remediated. Exceptions: endpoints months behind, third-party apps unpatched, devices with paused/failed updates, and no third-party patching at all.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"OS patching cadence\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"OS patching cadence\" control must cover\n# fragment: os_patching_cadence_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "os_patching_cadence_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"OS patching cadence\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the os patching cadence control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"OS patching cadence\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"OS patching cadence\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The endpoint patch-compliance report (missing OS + third-party patches, severity, age) per device reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"OS patching cadence\"?",
          "options": [
            "Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Intune / WSUS-SCCM / Jamf + third-party patching (Patch My PC, Autopkg)) via read-only access."
        },
        {
          "id": "ept-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"OS patching cadence\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "End-user computing / IT operations — patch (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT operations — patch owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"OS patching cadence\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-07-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"OS patching cadence\", which is a realistic reportable finding?",
          "options": [
            "OS patching is decent but third-party apps aren't managed at all — most endpoints run outdated Chrome/Acrobat with KEV-listed CVEs, and 8% of devices have updates paused indefinitely.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. OS patching is decent but third-party apps aren't managed at all — most endpoints run outdated Chrome/Acrobat with KEV-listed CVEs, and 8% of devices have updates paused indefinitely."
        },
        {
          "id": "ept-07-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"OS patching cadence\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-08",
    "order": 8,
    "title": "Vulnerability scanning",
    "subtitle": "Agentic technical & privacy audit of the vulnerability scanning control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability scanning\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints are assessed for vulnerabilities + misconfigurations. PASS: authenticated scanning or EDR-native vuln management covers ~100% of endpoints; findings cover missing patches AND misconfigurations; they're risk-prioritised (KEV/exploitability) and remediated within SLA; coverage spans roaming/remote devices. Exceptions: large scan-coverage gaps (esp. remote devices unreachable by network scanners), unauthenticated scans missing host issues, config issues ignored, and findings never remediated.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight); The device inventory; CISA KEV / exploitability feeds) as tools — e.g. `EDR-native vuln management (Defender TVM / CrowdStrike Spotlight) for `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet",
        "Scan/assessment coverage vs the device inventory",
        "Risk-prioritised endpoint findings (severity + KEV + exploitability) + remediation tracking",
        "Misconfiguration findings (weak configs, not just missing patches)"
      ],
      "system": [
        "Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight)",
        "The device inventory",
        "CISA KEV / exploitability feeds"
      ],
      "dataOwner": [
        "Vulnerability management / endpoint security",
        "IT operations (remediate)",
        "Risk"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-08-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Vulnerability scanning",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability scanning\" as a repeatable agentic workflow: pull the real evidence (Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability scanning\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight), The device inventory, CISA KEV / exploitability feeds — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `EDR-native vuln management (Defender TVM / CrowdStrike Spotlight) for roaming-de` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints are assessed for vulnerabilities + misconfigurations. PASS: authenticated scanning or EDR-native vuln management covers ~100% of endpoints; findings cover missing patches AND misconfigurations; they're risk-prioritised (KEV/exploitability) and remediated within SLA; coverage spans roaming/remote devices. Exceptions: large scan-coverage gaps (esp. remote devices unreachable by network scanners), unauthenticated scans missing host issues, config issues ignored, and findings never remediated. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_vulnerability_scanning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight) and The device inventory (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_vulnerability_scanning_mcp.py` to expose it to your agent — or `python 08_vulnerability_scanning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight) · The device inventory",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability scanning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "EDR-native vuln management (Defender TVM / CrowdStrike Spotlight) for roaming-device coverage\nscan coverage vs device inventory; flag unreachable/remote devices\nprioritise by KEV + exploitability, not raw CVSS\ninclude misconfiguration findings (secure-config gaps), not just patches"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet.",
        "The test: Verify endpoints are assessed for vulnerabilities + misconfigurations.",
        "Reconcile the systems of record (Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight), The device inventory, CISA KEV / exploitability feeds) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Network-based scanning misses all remote/roaming laptops (40% of the fleet), and where it does run it's unauthenticated — so most host vulnerabilities and all misconfigurations are invisible."
      ],
      "references": [
        {
          "title": "NIST SP 800-40",
          "url": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
        },
        {
          "title": "CIS Control 7",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_vulnerability_scanning_mcp.py",
          "url": "/audit-code/endpoint/08_vulnerability_scanning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Vulnerability scanning\" (authenticated endpoint vuln-scan results (or edr-native vuln data) across the fleet), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability scanning\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints are assessed for vulnerabilities + misconfigurations. PASS: authenticated scanning or EDR-native vuln management covers ~100% of endpoints; findings cover missing patches AND misconfigurations; they're risk-prioritised (KEV/exploitability) and remediated within SLA; coverage spans roaming/remote devices. Exceptions: large scan-coverage gaps (esp. remote devices unreachable by network scanners), unauthenticated scans missing host issues, config issues ignored, and findings never remediated. The evidence — Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Vulnerability scanning\" Audit Evidence\n\nThe test:\nVerify endpoints are assessed for vulnerabilities + misconfigurations. PASS: authenticated scanning or EDR-native vuln management covers ~100% of endpoints; findings cover missing patches AND misconfigurations; they're risk-prioritised (KEV/exploitability) and remediated within SLA; coverage spans roaming/remote devices. Exceptions: large scan-coverage gaps (esp. remote devices unreachable by network scanners), unauthenticated scans missing host issues, config issues ignored, and findings never remediated.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability scanning\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability scanning\" control must cover\n# fragment: vulnerability_scanning_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "vulnerability_scanning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability scanning\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vulnerability scanning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability scanning\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability scanning\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Authenticated endpoint vuln-scan results (or EDR-native vuln data) across the fleet reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vulnerability scanning\"?",
          "options": [
            "Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Tenable/Qualys/Rapid7 or EDR-native (Defender Vulnerability Management, CrowdStrike Spotlight)) via read-only access."
        },
        {
          "id": "ept-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability scanning\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Vulnerability management / endpoint security (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Vulnerability management / endpoint security owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability scanning\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-08-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability scanning\", which is a realistic reportable finding?",
          "options": [
            "Network-based scanning misses all remote/roaming laptops (40% of the fleet), and where it does run it's unauthenticated — so most host vulnerabilities and all misconfigurations are invisible.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Network-based scanning misses all remote/roaming laptops (40% of the fleet), and where it does run it's unauthenticated — so most host vulnerabilities and all misconfigurations are invisible."
        },
        {
          "id": "ept-08-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability scanning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-09",
    "order": 9,
    "title": "End-of-life management",
    "subtitle": "Agentic technical & privacy audit of the end-of-life management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"End-of-life management\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify no endpoint runs unsupported software/hardware that no longer receives security patches. PASS: OS + hardware are mapped to vendor EOL dates; devices are refreshed/upgraded before EOL; any EOL device that must remain is isolated, compensated, and ESU-covered. Exceptions: endpoints on EOL OS receiving no security patches, no refresh plan, and EOL devices on the production network with no isolation.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / inventory (OS + hardware versions); Vendor EOL calendars; Network isolation (for unavoidable EOL)) as tools — e.g. `map deployed OS/hardware versions to vendor end-of-support dates`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The inventory of OS/hardware versions vs vendor end-of-support dates",
        "The list of endpoints running EOL/unsupported OS (no more security patches)",
        "The EOL-transition/refresh plan + isolation for EOL devices that must remain",
        "Extended-support (ESU) coverage where applicable"
      ],
      "system": [
        "MDM / inventory (OS + hardware versions)",
        "Vendor EOL calendars",
        "Network isolation (for unavoidable EOL)"
      ],
      "dataOwner": [
        "End-user computing / IT — owns refresh",
        "Security (isolation)",
        "Asset management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-09-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "End-of-life management",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"End-of-life management\" as a repeatable agentic workflow: pull the real evidence (The inventory of OS/hardware versions vs vendor end-of-support dates) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"End-of-life management\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the inventory of OS/hardware versions vs vendor end-of-support dates, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / inventory (OS + hardware versions), Vendor EOL calendars, Network isolation (for unavoidable EOL) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map deployed OS/hardware versions to vendor end-of-support dates` — read-only, against the systems of record.",
        "The test itself is specific. Verify no endpoint runs unsupported software/hardware that no longer receives security patches. PASS: OS + hardware are mapped to vendor EOL dates; devices are refreshed/upgraded before EOL; any EOL device that must remain is isolated, compensated, and ESU-covered. Exceptions: endpoints on EOL OS receiving no security patches, no refresh plan, and EOL devices on the production network with no isolation. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_end_of_life_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / inventory (OS + hardware versions) and Vendor EOL calendars (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_end_of_life_management_mcp.py` to expose it to your agent — or `python 09_end_of_life_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull MDM / inventory (OS + hardware versions) · Vendor EOL calendars",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"End-of-life management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map deployed OS/hardware versions to vendor end-of-support dates\nlist endpoints on EOL OS (e.g. Windows 10 after Oct 2025 with no ESU)\nconfirm a funded refresh plan; check ESU enrolment where used\nverify any remaining EOL devices are network-isolated + compensated"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The inventory of OS/hardware versions vs vendor end-of-support dates.",
        "The test: Verify no endpoint runs unsupported software/hardware that no longer receives security patches.",
        "Reconcile the systems of record (MDM / inventory (OS + hardware versions), Vendor EOL calendars, Network isolation (for unavoidable EOL)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. 200 endpoints still run an EOL OS with no ESU (zero security patches), they sit on the general network with no isolation, and there's no funded refresh plan."
      ],
      "references": [
        {
          "title": "Microsoft / vendor lifecycle policies",
          "url": "https://learn.microsoft.com/lifecycle/"
        },
        {
          "title": "CIS Control 2 Software Assets",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_end_of_life_management_mcp.py",
          "url": "/audit-code/endpoint/09_end_of_life_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"End-of-life management\" (the inventory of os/hardware versions vs vendor end-of-support dates), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End-of-life management\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify no endpoint runs unsupported software/hardware that no longer receives security patches. PASS: OS + hardware are mapped to vendor EOL dates; devices are refreshed/upgraded before EOL; any EOL device that must remain is isolated, compensated, and ESU-covered. Exceptions: endpoints on EOL OS receiving no security patches, no refresh plan, and EOL devices on the production network with no isolation. The evidence — The inventory of OS/hardware versions vs vendor end-of-support dates — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / inventory (OS + hardware versions) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / inventory (OS + hardware versions) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / inventory (OS + hardware versions); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"End-of-life management\" Audit Evidence\n\nThe test:\nVerify no endpoint runs unsupported software/hardware that no longer receives security patches. PASS: OS + hardware are mapped to vendor EOL dates; devices are refreshed/upgraded before EOL; any EOL device that must remain is isolated, compensated, and ESU-covered. Exceptions: endpoints on EOL OS receiving no security patches, no refresh plan, and EOL devices on the production network with no isolation.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The inventory of OS/hardware versions vs vendor end-of-support dates)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"End-of-life management\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"End-of-life management\" control must cover\n# fragment: endoflife_management_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "endoflife_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"End-of-life management\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the end-of-life management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"End-of-life management\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"End-of-life management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The inventory of OS/hardware versions vs vendor end-of-support dates reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"End-of-life management\"?",
          "options": [
            "MDM / inventory (OS + hardware versions) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / inventory (OS + hardware versions)) via read-only access."
        },
        {
          "id": "ept-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"End-of-life management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "End-user computing / IT — owns refresh (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT — owns refresh owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"End-of-life management\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-09-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"End-of-life management\", which is a realistic reportable finding?",
          "options": [
            "200 endpoints still run an EOL OS with no ESU (zero security patches), they sit on the general network with no isolation, and there's no funded refresh plan.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. 200 endpoints still run an EOL OS with no ESU (zero security patches), they sit on the general network with no isolation, and there's no funded refresh plan."
        },
        {
          "id": "ept-09-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"End-of-life management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-10",
    "order": 10,
    "title": "Physical controls (USB, BT)",
    "subtitle": "Agentic technical & privacy audit of the physical controls (usb, bt) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical controls (USB, BT)\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify peripheral and removable-media controls are enforced. PASS: USB mass-storage is blocked or forced-encrypted per policy; only approved peripherals are allowed (device-control allow-list); Bluetooth is restricted/managed; DMA/Thunderbolt protection is on; and usage is logged. Exceptions: unrestricted USB storage (data-exfil + malware vector), no peripheral allow-list, open Bluetooth, DMA protection off, and no logging of removable-media use.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Intune/Jamf device control / Microsoft Defender device control / endpoint DLP; BitLocker To Go (forced encryption); SIEM (USB logs)) as tools — e.g. `MDM device-control policy: USB-storage block/encrypt + peripheral allo`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions)",
        "The device-control config across the fleet (allow-list of approved peripherals)",
        "Logs of USB/peripheral usage + blocked attempts",
        "BadUSB / DMA-attack mitigations (Thunderbolt/DMA protection)"
      ],
      "system": [
        "Intune/Jamf device control / Microsoft Defender device control / endpoint DLP",
        "BitLocker To Go (forced encryption)",
        "SIEM (USB logs)"
      ],
      "dataOwner": [
        "Endpoint security — owns device control",
        "IT",
        "Data protection"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-10-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Physical controls (USB, BT)",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical controls (USB, BT)\" as a repeatable agentic workflow: pull the real evidence (The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Physical controls (USB, BT)\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Intune/Jamf device control / Microsoft Defender device control / endpoint DLP, BitLocker To Go (forced encryption), SIEM (USB logs) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `MDM device-control policy: USB-storage block/encrypt + peripheral allow-list con` — read-only, against the systems of record.",
        "The test itself is specific. Verify peripheral and removable-media controls are enforced. PASS: USB mass-storage is blocked or forced-encrypted per policy; only approved peripherals are allowed (device-control allow-list); Bluetooth is restricted/managed; DMA/Thunderbolt protection is on; and usage is logged. Exceptions: unrestricted USB storage (data-exfil + malware vector), no peripheral allow-list, open Bluetooth, DMA protection off, and no logging of removable-media use. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_physical_controls_usb_bt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Intune/Jamf device control / Microsoft Defender device control / endpoint DLP and BitLocker To Go (forced encryption) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_physical_controls_usb_bt_mcp.py` to expose it to your agent — or `python 10_physical_controls_usb_bt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Intune/Jamf device control / Microsoft Defender device control / endpoint DLP · BitLocker To Go (forced encryption)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical controls (USB, BT)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "MDM device-control policy: USB-storage block/encrypt + peripheral allow-list config\nconfirm BitLocker To Go (or block) on removable storage\nDefender device-control + Kernel DMA Protection status\nSIEM: USB-insertion + blocked-peripheral events"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions).",
        "The test: Verify peripheral and removable-media controls are enforced.",
        "Reconcile the systems of record (Intune/Jamf device control / Microsoft Defender device control / endpoint DLP, BitLocker To Go (forced encryption), SIEM (USB logs)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. USB mass storage is fully open across the fleet with no encryption requirement and no logging — a contractor copied the customer database to a thumb drive and nothing recorded or blocked it; Bluetooth is unrestricted."
      ],
      "references": [
        {
          "title": "CIS Control 10",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-53 MP / SC families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_physical_controls_usb_bt_mcp.py",
          "url": "/audit-code/endpoint/10_physical_controls_usb_bt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Physical controls (USB, BT)\" (the removable-media + peripheral-control policy and its mdm enforcement (usb storage block/encrypt, bluetooth restrictions)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical controls (USB, BT)\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify peripheral and removable-media controls are enforced. PASS: USB mass-storage is blocked or forced-encrypted per policy; only approved peripherals are allowed (device-control allow-list); Bluetooth is restricted/managed; DMA/Thunderbolt protection is on; and usage is logged. Exceptions: unrestricted USB storage (data-exfil + malware vector), no peripheral allow-list, open Bluetooth, DMA protection off, and no logging of removable-media use. The evidence — The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Intune/Jamf device control / Microsoft Defender device control / endpoint DLP APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Intune/Jamf device control / Microsoft Defender device control / endpoint DLP gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Intune/Jamf device control / Microsoft Defender device control / endpoint DLP; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Physical controls (USB, BT)\" Audit Evidence\n\nThe test:\nVerify peripheral and removable-media controls are enforced. PASS: USB mass-storage is blocked or forced-encrypted per policy; only approved peripherals are allowed (device-control allow-list); Bluetooth is restricted/managed; DMA/Thunderbolt protection is on; and usage is logged. Exceptions: unrestricted USB storage (data-exfil + malware vector), no peripheral allow-list, open Bluetooth, DMA protection off, and no logging of removable-media use.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical controls (USB, BT)\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical controls (USB, BT)\" control must cover\n# fragment: physical_controls_usb_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "physical_controls_usb_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical controls (USB, BT)\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the physical controls (usb, bt) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical controls (USB, BT)\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical controls (USB, BT)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The removable-media + peripheral-control policy and its MDM enforcement (USB storage block/encrypt, Bluetooth restrictions) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Physical controls (USB, BT)\"?",
          "options": [
            "Intune/Jamf device control / Microsoft Defender device control / endpoint DLP (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Intune/Jamf device control / Microsoft Defender device control / endpoint DLP) via read-only access."
        },
        {
          "id": "ept-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical controls (USB, BT)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Endpoint security — owns device control (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Endpoint security — owns device control owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical controls (USB, BT)\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-10-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical controls (USB, BT)\", which is a realistic reportable finding?",
          "options": [
            "USB mass storage is fully open across the fleet with no encryption requirement and no logging — a contractor copied the customer database to a thumb drive and nothing recorded or blocked it; Bluetooth is unrestricted.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. USB mass storage is fully open across the fleet with no encryption requirement and no logging — a contractor copied the customer database to a thumb drive and nothing recorded or blocked it; Bluetooth is unrestricted."
        },
        {
          "id": "ept-10-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical controls (USB, BT)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-11",
    "order": 11,
    "title": "Screen lock and timeout",
    "subtitle": "Agentic technical & privacy audit of the screen lock and timeout control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Screen lock and timeout\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints auto-lock after inactivity and require re-authentication. PASS: an inactivity timeout (≤15 min, shorter for privileged/admin) is enforced via MDM and can't be disabled locally; resume requires password/biometric; and kiosk/shared devices have appropriate session handling. Exceptions: no timeout or an excessive one (hours), users able to disable the lock, and privileged workstations with the same long timeout as standard devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Intune/Jamf configuration profiles (screen-lock policy); AD GPO (legacy); MDM compliance reporting) as tools — e.g. `MDM: screen-lock/timeout profile config + per-device compliance`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement",
        "Per-device compliance with the lock policy",
        "The lock policy for privileged/kiosk/shared devices",
        "Evidence the policy can't be disabled locally"
      ],
      "system": [
        "Intune/Jamf configuration profiles (screen-lock policy)",
        "AD GPO (legacy)",
        "MDM compliance reporting"
      ],
      "dataOwner": [
        "Endpoint security / IT — owns the policy",
        "Security (privileged-device policy)"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-11-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Screen lock and timeout",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Screen lock and timeout\" as a repeatable agentic workflow: pull the real evidence (The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Screen lock and timeout\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Intune/Jamf configuration profiles (screen-lock policy), AD GPO (legacy), MDM compliance reporting — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `MDM: screen-lock/timeout profile config + per-device compliance` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints auto-lock after inactivity and require re-authentication. PASS: an inactivity timeout (≤15 min, shorter for privileged/admin) is enforced via MDM and can't be disabled locally; resume requires password/biometric; and kiosk/shared devices have appropriate session handling. Exceptions: no timeout or an excessive one (hours), users able to disable the lock, and privileged workstations with the same long timeout as standard devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_screen_lock_and_timeout_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Intune/Jamf configuration profiles (screen-lock policy) and AD GPO (legacy) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_screen_lock_and_timeout_mcp.py` to expose it to your agent — or `python 11_screen_lock_and_timeout_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Intune/Jamf configuration profiles (screen-lock policy) · AD GPO (legacy)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Screen lock and timeout\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "MDM: screen-lock/timeout profile config + per-device compliance\nconfirm the setting is managed (greyed-out for the user, not user-editable)\ncheck privileged/admin workstations have a shorter timeout\nreview kiosk/shared-device session policy"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement.",
        "The test: Verify endpoints auto-lock after inactivity and require re-authentication.",
        "Reconcile the systems of record (Intune/Jamf configuration profiles (screen-lock policy), AD GPO (legacy), MDM compliance reporting) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The inactivity-lock policy exists but isn't enforced via MDM, so many users set it to 'never'; privileged admin workstations use the same 30-minute timeout as everyone else."
      ],
      "references": [
        {
          "title": "CIS Control 4",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-53 AC-11 Session Lock",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_screen_lock_and_timeout_mcp.py",
          "url": "/audit-code/endpoint/11_screen_lock_and_timeout_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Screen lock and timeout\" (the screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its mdm enforcement), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Screen lock and timeout\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints auto-lock after inactivity and require re-authentication. PASS: an inactivity timeout (≤15 min, shorter for privileged/admin) is enforced via MDM and can't be disabled locally; resume requires password/biometric; and kiosk/shared devices have appropriate session handling. Exceptions: no timeout or an excessive one (hours), users able to disable the lock, and privileged workstations with the same long timeout as standard devices. The evidence — The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Intune/Jamf configuration profiles (screen-lock policy) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Intune/Jamf configuration profiles (screen-lock policy) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Intune/Jamf configuration profiles (screen-lock policy); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Screen lock and timeout\" Audit Evidence\n\nThe test:\nVerify endpoints auto-lock after inactivity and require re-authentication. PASS: an inactivity timeout (≤15 min, shorter for privileged/admin) is enforced via MDM and can't be disabled locally; resume requires password/biometric; and kiosk/shared devices have appropriate session handling. Exceptions: no timeout or an excessive one (hours), users able to disable the lock, and privileged workstations with the same long timeout as standard devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement)\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Screen lock and timeout\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Screen lock and timeout\" control must cover\n# fragment: screen_lock_timeout_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "screen_lock_timeout_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Screen lock and timeout\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the screen lock and timeout control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Screen lock and timeout\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Screen lock and timeout\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The screen-lock/timeout policy (inactivity timeout, password/biometric on resume) and its MDM enforcement reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Screen lock and timeout\"?",
          "options": [
            "Intune/Jamf configuration profiles (screen-lock policy) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Intune/Jamf configuration profiles (screen-lock policy)) via read-only access."
        },
        {
          "id": "ept-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Screen lock and timeout\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Endpoint security / IT — owns the policy (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Endpoint security / IT — owns the policy owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Screen lock and timeout\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-11-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Screen lock and timeout\", which is a realistic reportable finding?",
          "options": [
            "The inactivity-lock policy exists but isn't enforced via MDM, so many users set it to 'never'; privileged admin workstations use the same 30-minute timeout as everyone else.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The inactivity-lock policy exists but isn't enforced via MDM, so many users set it to 'never'; privileged admin workstations use the same 30-minute timeout as everyone else."
        },
        {
          "id": "ept-11-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Screen lock and timeout\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-12",
    "order": 12,
    "title": "Full disk encryption",
    "subtitle": "Agentic technical & privacy audit of the full disk encryption control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Full disk encryption\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints are fully-disk-encrypted with escrowed recovery keys. PASS: ~100% of endpoints have FDE enabled and completed (BitLocker XTS-AES, FileVault) with TPM-backed protectors; recovery keys are escrowed (Intune/AD) and recoverable; and removable drives are encrypted. Exceptions: devices with encryption off or suspended, decryption-paused devices, recovery keys not escrowed (data unrecoverable + audit fail), and unencrypted external drives.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (BitLocker (Windows) / FileVault (macOS) via MDM; Intune/Jamf (key escrow + status); Device inventory) as tools — e.g. `MDM: FDE status (encrypted/encrypting/off) per device vs the inventory`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher)",
        "Encryption coverage vs the device inventory",
        "Recovery-key escrow evidence (keys escrowed to MDM/AD, recoverable)",
        "Removable + external-drive encryption posture"
      ],
      "system": [
        "BitLocker (Windows) / FileVault (macOS) via MDM",
        "Intune/Jamf (key escrow + status)",
        "Device inventory"
      ],
      "dataOwner": [
        "Endpoint security / IT — owns encryption",
        "Security",
        "Service desk (recovery)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-12-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Full disk encryption",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Full disk encryption\" as a repeatable agentic workflow: pull the real evidence (The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Full disk encryption\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here BitLocker (Windows) / FileVault (macOS) via MDM, Intune/Jamf (key escrow + status), Device inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `MDM: FDE status (encrypted/encrypting/off) per device vs the inventory` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints are fully-disk-encrypted with escrowed recovery keys. PASS: ~100% of endpoints have FDE enabled and completed (BitLocker XTS-AES, FileVault) with TPM-backed protectors; recovery keys are escrowed (Intune/AD) and recoverable; and removable drives are encrypted. Exceptions: devices with encryption off or suspended, decryption-paused devices, recovery keys not escrowed (data unrecoverable + audit fail), and unencrypted external drives. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_full_disk_encryption_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from BitLocker (Windows) / FileVault (macOS) via MDM and Intune/Jamf (key escrow + status) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_full_disk_encryption_mcp.py` to expose it to your agent — or `python 12_full_disk_encryption_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull BitLocker (Windows) / FileVault (macOS) via MDM · Intune/Jamf (key escrow + status)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Full disk encryption\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "MDM: FDE status (encrypted/encrypting/off) per device vs the inventory\nconfirm recovery-key escrow to Intune/AD (and test a recovery)\nBitLocker: TPM + cipher (XTS-AES-256) + protector config\nremovable-drive encryption (BitLocker To Go) status"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher).",
        "The test: Verify endpoints are fully-disk-encrypted with escrowed recovery keys.",
        "Reconcile the systems of record (BitLocker (Windows) / FileVault (macOS) via MDM, Intune/Jamf (key escrow + status), Device inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. 12% of laptops are unencrypted or have BitLocker suspended; for several encrypted devices the recovery key was never escrowed — so a lost laptop is both a breach and unrecoverable."
      ],
      "references": [
        {
          "title": "CIS Control 3 Data Protection",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-111 Storage Encryption",
          "url": "https://csrc.nist.gov/pubs/sp/800/111/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_full_disk_encryption_mcp.py",
          "url": "/audit-code/endpoint/12_full_disk_encryption_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Full disk encryption\" (the full-disk-encryption status per device (bitlocker/filevault on, fully encrypted, correct cipher)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Full disk encryption\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints are fully-disk-encrypted with escrowed recovery keys. PASS: ~100% of endpoints have FDE enabled and completed (BitLocker XTS-AES, FileVault) with TPM-backed protectors; recovery keys are escrowed (Intune/AD) and recoverable; and removable drives are encrypted. Exceptions: devices with encryption off or suspended, decryption-paused devices, recovery keys not escrowed (data unrecoverable + audit fail), and unencrypted external drives. The evidence — The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live BitLocker (Windows) / FileVault (macOS) via MDM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. BitLocker (Windows) / FileVault (macOS) via MDM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from BitLocker (Windows) / FileVault (macOS) via MDM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Full disk encryption\" Audit Evidence\n\nThe test:\nVerify endpoints are fully-disk-encrypted with escrowed recovery keys. PASS: ~100% of endpoints have FDE enabled and completed (BitLocker XTS-AES, FileVault) with TPM-backed protectors; recovery keys are escrowed (Intune/AD) and recoverable; and removable drives are encrypted. Exceptions: devices with encryption off or suspended, decryption-paused devices, recovery keys not escrowed (data unrecoverable + audit fail), and unencrypted external drives.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Full disk encryption\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Full disk encryption\" control must cover\n# fragment: full_disk_encryption_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "full_disk_encryption_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Full disk encryption\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the full disk encryption control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Full disk encryption\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Full disk encryption\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The full-disk-encryption status per device (BitLocker/FileVault on, fully encrypted, correct cipher) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Full disk encryption\"?",
          "options": [
            "BitLocker (Windows) / FileVault (macOS) via MDM (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., BitLocker (Windows) / FileVault (macOS) via MDM) via read-only access."
        },
        {
          "id": "ept-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Full disk encryption\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Endpoint security / IT — owns encryption (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Endpoint security / IT — owns encryption owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Full disk encryption\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-12-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Full disk encryption\", which is a realistic reportable finding?",
          "options": [
            "12% of laptops are unencrypted or have BitLocker suspended; for several encrypted devices the recovery key was never escrowed — so a lost laptop is both a breach and unrecoverable.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. 12% of laptops are unencrypted or have BitLocker suspended; for several encrypted devices the recovery key was never escrowed — so a lost laptop is both a breach and unrecoverable."
        },
        {
          "id": "ept-12-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Full disk encryption\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-13",
    "order": 13,
    "title": "Data loss prevention (endpoint)",
    "subtitle": "Agentic technical & privacy audit of the data loss prevention (endpoint) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data loss prevention (endpoint)\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoint DLP detects + controls sensitive-data egress at the device. PASS: endpoint DLP covers the fleet, detects sensitive types on USB/print/clipboard/upload/personal-sync, blocks or warns per policy, and feeds incidents to the SOC. Exceptions: endpoints without the DLP agent, key channels uncovered (USB, personal cloud sync, clipboard), incidents not triaged, and trivial override.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian; The endpoint agent + the device inventory; SIEM) as tools — e.g. `endpoint-DLP console: enrolled endpoints vs inventory + policy per cha`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB)",
        "Enrolled endpoints vs total",
        "Endpoint-DLP incident logs + disposition",
        "Uncovered exfil channels on the endpoint (clipboard, screen capture, personal-sync clients)"
      ],
      "system": [
        "Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian",
        "The endpoint agent + the device inventory",
        "SIEM"
      ],
      "dataOwner": [
        "Data protection / endpoint security",
        "Privacy (sensitive types)",
        "SOC"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-13-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Data loss prevention (endpoint)",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data loss prevention (endpoint)\" as a repeatable agentic workflow: pull the real evidence (The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Data loss prevention (endpoint)\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian, The endpoint agent + the device inventory, SIEM — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `endpoint-DLP console: enrolled endpoints vs inventory + policy per channel` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoint DLP detects + controls sensitive-data egress at the device. PASS: endpoint DLP covers the fleet, detects sensitive types on USB/print/clipboard/upload/personal-sync, blocks or warns per policy, and feeds incidents to the SOC. Exceptions: endpoints without the DLP agent, key channels uncovered (USB, personal cloud sync, clipboard), incidents not triaged, and trivial override. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_data_loss_prevention_endpoint_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian and The endpoint agent + the device inventory (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_data_loss_prevention_endpoint_mcp.py` to expose it to your agent — or `python 13_data_loss_prevention_endpoint_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian · The endpoint agent + the device inventory",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data loss prevention (endpoint)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "endpoint-DLP console: enrolled endpoints vs inventory + policy per channel\ntest channels: USB copy, print, personal OneDrive/Drive sync, clipboard to webmail\nincident export + disposition\nconfirm personal-sync-client + clipboard controls"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB).",
        "The test: Verify endpoint DLP detects + controls sensitive-data egress at the device.",
        "Reconcile the systems of record (Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian, The endpoint agent + the device inventory, SIEM) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Endpoint DLP runs on 40% of devices and doesn't cover personal cloud-sync clients, so customer files sync to a personal OneDrive uncaught; incidents that do fire go to an unmonitored queue."
      ],
      "references": [
        {
          "title": "CIS Control 3",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Microsoft Purview Endpoint DLP",
          "url": "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_data_loss_prevention_endpoint_mcp.py",
          "url": "/audit-code/endpoint/13_data_loss_prevention_endpoint_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Data loss prevention (endpoint)\" (the endpoint-dlp policy + coverage (sensitive-data detection on copy/print/upload/usb)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data loss prevention (endpoint)\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoint DLP detects + controls sensitive-data egress at the device. PASS: endpoint DLP covers the fleet, detects sensitive types on USB/print/clipboard/upload/personal-sync, blocks or warns per policy, and feeds incidents to the SOC. Exceptions: endpoints without the DLP agent, key channels uncovered (USB, personal cloud sync, clipboard), incidents not triaged, and trivial override. The evidence — The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Data loss prevention (endpoint)\" Audit Evidence\n\nThe test:\nVerify endpoint DLP detects + controls sensitive-data egress at the device. PASS: endpoint DLP covers the fleet, detects sensitive types on USB/print/clipboard/upload/personal-sync, blocks or warns per policy, and feeds incidents to the SOC. Exceptions: endpoints without the DLP agent, key channels uncovered (USB, personal cloud sync, clipboard), incidents not triaged, and trivial override.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data loss prevention (endpoint)\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data loss prevention (endpoint)\" control must cover\n# fragment: data_loss_prevention_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "data_loss_prevention_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data loss prevention (endpoint)\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the data loss prevention (endpoint) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data loss prevention (endpoint)\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data loss prevention (endpoint)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The endpoint-DLP policy + coverage (sensitive-data detection on copy/print/upload/USB) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Data loss prevention (endpoint)\"?",
          "options": [
            "Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Microsoft Purview Endpoint DLP / Forcepoint / Digital Guardian) via read-only access."
        },
        {
          "id": "ept-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data loss prevention (endpoint)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Data protection / endpoint security (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Data protection / endpoint security owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data loss prevention (endpoint)\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-13-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data loss prevention (endpoint)\", which is a realistic reportable finding?",
          "options": [
            "Endpoint DLP runs on 40% of devices and doesn't cover personal cloud-sync clients, so customer files sync to a personal OneDrive uncaught; incidents that do fire go to an unmonitored queue.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Endpoint DLP runs on 40% of devices and doesn't cover personal cloud-sync clients, so customer files sync to a personal OneDrive uncaught; incidents that do fire go to an unmonitored queue."
        },
        {
          "id": "ept-13-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data loss prevention (endpoint)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-14",
    "order": 14,
    "title": "MDM and containerization",
    "subtitle": "Agentic technical & privacy audit of the mdm and containerization control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"MDM and containerization\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify mobile + BYOD access to corporate data is managed and isolated. PASS: corporate mobiles are enrolled with a security baseline; BYOD uses MAM/containerisation that isolates work data (no copy to personal apps, selective wipe, encrypted container); jailbroken/rooted devices are blocked; and conditional access requires compliance. Exceptions: unmanaged mobiles with corporate mail/data, BYOD with no container (corp data in personal apps), no jailbreak detection, and no compliance gate.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE; IdP conditional access; Mobile inventory) as tools — e.g. `Intune: managed-device + App-Protection-Policy coverage; jailbreak/roo`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised)",
        "The container/app-protection policy (work-data isolation, copy/paste restriction, selective wipe, no corp-data backup)",
        "Compliance + jailbreak/root detection status",
        "Conditional access tying mobile compliance to corporate access"
      ],
      "system": [
        "Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE",
        "IdP conditional access",
        "Mobile inventory"
      ],
      "dataOwner": [
        "Endpoint security / mobility — owns MDM/MAM",
        "IAM (conditional access)",
        "IT"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-14-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "MDM and containerization",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"MDM and containerization\" as a repeatable agentic workflow: pull the real evidence (The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"MDM and containerization\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE, IdP conditional access, Mobile inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Intune: managed-device + App-Protection-Policy coverage; jailbreak/root complian` — read-only, against the systems of record.",
        "The test itself is specific. Verify mobile + BYOD access to corporate data is managed and isolated. PASS: corporate mobiles are enrolled with a security baseline; BYOD uses MAM/containerisation that isolates work data (no copy to personal apps, selective wipe, encrypted container); jailbroken/rooted devices are blocked; and conditional access requires compliance. Exceptions: unmanaged mobiles with corporate mail/data, BYOD with no container (corp data in personal apps), no jailbreak detection, and no compliance gate. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_mdm_and_containerization_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE and IdP conditional access (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_mdm_and_containerization_mcp.py` to expose it to your agent — or `python 14_mdm_and_containerization_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE · IdP conditional access",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"MDM and containerization\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Intune: managed-device + App-Protection-Policy coverage; jailbreak/root compliance\nconfirm MAM policy: work-data encryption, copy/paste restriction, selective wipe, block backup\nConditional Access requiring a compliant / MAM-protected app for mobile mail\nlist mobiles with corporate access but no management"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised).",
        "The test: Verify mobile + BYOD access to corporate data is managed and isolated.",
        "Reconcile the systems of record (Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE, IdP conditional access, Mobile inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Personal phones access corporate email with no app-protection policy, so customer data sits unencrypted in the native mail app and can be copied anywhere; jailbroken devices aren't detected or blocked."
      ],
      "references": [
        {
          "title": "NIST SP 800-124",
          "url": "https://csrc.nist.gov/pubs/sp/800/124/r2/final"
        },
        {
          "title": "OWASP MASVS",
          "url": "https://mas.owasp.org/MASVS/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_mdm_and_containerization_mcp.py",
          "url": "/audit-code/endpoint/14_mdm_and_containerization_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"MDM and containerization\" (the mobile-device + byod inventory and management model (mdm-managed vs mam/containerised)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"MDM and containerization\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify mobile + BYOD access to corporate data is managed and isolated. PASS: corporate mobiles are enrolled with a security baseline; BYOD uses MAM/containerisation that isolates work data (no copy to personal apps, selective wipe, encrypted container); jailbroken/rooted devices are blocked; and conditional access requires compliance. Exceptions: unmanaged mobiles with corporate mail/data, BYOD with no container (corp data in personal apps), no jailbreak detection, and no compliance gate. The evidence — The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"MDM and containerization\" Audit Evidence\n\nThe test:\nVerify mobile + BYOD access to corporate data is managed and isolated. PASS: corporate mobiles are enrolled with a security baseline; BYOD uses MAM/containerisation that isolates work data (no copy to personal apps, selective wipe, encrypted container); jailbroken/rooted devices are blocked; and conditional access requires compliance. Exceptions: unmanaged mobiles with corporate mail/data, BYOD with no container (corp data in personal apps), no jailbreak detection, and no compliance gate.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"MDM and containerization\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"MDM and containerization\" control must cover\n# fragment: mdm_containerization_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "mdm_containerization_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"MDM and containerization\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the mdm and containerization control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"MDM and containerization\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"MDM and containerization\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The mobile-device + BYOD inventory and management model (MDM-managed vs MAM/containerised) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"MDM and containerization\"?",
          "options": [
            "Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Intune (MDM + App Protection / MAM) / Jamf / Workspace ONE) via read-only access."
        },
        {
          "id": "ept-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"MDM and containerization\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Endpoint security / mobility — owns MDM/MAM (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Endpoint security / mobility — owns MDM/MAM owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"MDM and containerization\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-14-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"MDM and containerization\", which is a realistic reportable finding?",
          "options": [
            "Personal phones access corporate email with no app-protection policy, so customer data sits unencrypted in the native mail app and can be copied anywhere; jailbroken devices aren't detected or blocked.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Personal phones access corporate email with no app-protection policy, so customer data sits unencrypted in the native mail app and can be copied anywhere; jailbroken devices aren't detected or blocked."
        },
        {
          "id": "ept-14-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"MDM and containerization\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-15",
    "order": 15,
    "title": "NAC, VPN, ZTNA",
    "subtitle": "Agentic technical & privacy audit of the nac, vpn, ztna control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"NAC, VPN, ZTNA\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify network/app access requires a healthy, authorised device (posture-based access). PASS: NAC authenticates + posture-checks devices on wired and wireless (802.1X), quarantining unknown/non-compliant devices; VPN/ZTNA enforce device posture (managed + compliant) before access; bypass exceptions are minimal and tracked. Exceptions: open ports/SSIDs with no NAC, non-compliant devices reaching production, VPN/ZTNA with no posture check, and broad MAC-bypass exceptions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (NAC — Cisco ISE / Aruba ClearPass (802.1X); VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA); MDM (the compliance signal)) as tools — e.g. `NAC: 802.1X coverage on wired+wireless; policy for unknown/non-complia`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The network-access-control posture policy (device must be managed + compliant to reach the network/apps)",
        "NAC enforcement coverage (wired + wireless) and what happens to non-compliant/unknown devices",
        "VPN/ZTNA device-posture checks before access",
        "The quarantine/remediation VLAN config + bypass exceptions"
      ],
      "system": [
        "NAC — Cisco ISE / Aruba ClearPass (802.1X)",
        "VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA)",
        "MDM (the compliance signal)"
      ],
      "dataOwner": [
        "Network security (NAC/ZTNA)",
        "Endpoint security (posture)",
        "IAM"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-15-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "NAC, VPN, ZTNA",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"NAC, VPN, ZTNA\" as a repeatable agentic workflow: pull the real evidence (The network-access-control posture policy (device must be managed + compliant to reach the network/apps)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"NAC, VPN, ZTNA\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the network-access-control posture policy (device must be managed + compliant to reach the network/apps), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here NAC — Cisco ISE / Aruba ClearPass (802.1X), VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA), MDM (the compliance signal) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `NAC: 802.1X coverage on wired+wireless; policy for unknown/non-compliant → quara` — read-only, against the systems of record.",
        "The test itself is specific. Verify network/app access requires a healthy, authorised device (posture-based access). PASS: NAC authenticates + posture-checks devices on wired and wireless (802.1X), quarantining unknown/non-compliant devices; VPN/ZTNA enforce device posture (managed + compliant) before access; bypass exceptions are minimal and tracked. Exceptions: open ports/SSIDs with no NAC, non-compliant devices reaching production, VPN/ZTNA with no posture check, and broad MAC-bypass exceptions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_nac_vpn_ztna_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from NAC — Cisco ISE / Aruba ClearPass (802.1X) and VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_nac_vpn_ztna_mcp.py` to expose it to your agent — or `python 15_nac_vpn_ztna_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull NAC — Cisco ISE / Aruba ClearPass (802.1X) · VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"NAC, VPN, ZTNA\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "NAC: 802.1X coverage on wired+wireless; policy for unknown/non-compliant → quarantine\nVPN/ZTNA posture config (managed + compliant + AV/patch checks)\nreview the MAC-Auth-Bypass exception list (the usual hole)\ntest: connect an unmanaged device — does NAC quarantine it?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The network-access-control posture policy (device must be managed + compliant to reach the network/apps).",
        "The test: Verify network/app access requires a healthy, authorised device (posture-based access).",
        "Reconcile the systems of record (NAC — Cisco ISE / Aruba ClearPass (802.1X), VPN/ZTNA posture (AnyConnect/GlobalProtect HIP, ZTNA), MDM (the compliance signal)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Wired ports have no 802.1X, so any device that plugs in gets full network access; the VPN checks credentials but not device posture, and the MAB bypass list has grown to hundreds of un-reviewed entries."
      ],
      "references": [
        {
          "title": "NIST SP 800-207 Zero Trust",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CIS Control 12 / 13",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_nac_vpn_ztna_mcp.py",
          "url": "/audit-code/endpoint/15_nac_vpn_ztna_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"NAC, VPN, ZTNA\" (the network-access-control posture policy (device must be managed + compliant to reach the network/apps)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"NAC, VPN, ZTNA\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify network/app access requires a healthy, authorised device (posture-based access). PASS: NAC authenticates + posture-checks devices on wired and wireless (802.1X), quarantining unknown/non-compliant devices; VPN/ZTNA enforce device posture (managed + compliant) before access; bypass exceptions are minimal and tracked. Exceptions: open ports/SSIDs with no NAC, non-compliant devices reaching production, VPN/ZTNA with no posture check, and broad MAC-bypass exceptions. The evidence — The network-access-control posture policy (device must be managed + compliant to reach the network/apps) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live NAC — Cisco ISE / Aruba ClearPass (802.1X) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. NAC — Cisco ISE / Aruba ClearPass (802.1X) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from NAC — Cisco ISE / Aruba ClearPass (802.1X); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"NAC, VPN, ZTNA\" Audit Evidence\n\nThe test:\nVerify network/app access requires a healthy, authorised device (posture-based access). PASS: NAC authenticates + posture-checks devices on wired and wireless (802.1X), quarantining unknown/non-compliant devices; VPN/ZTNA enforce device posture (managed + compliant) before access; bypass exceptions are minimal and tracked. Exceptions: open ports/SSIDs with no NAC, non-compliant devices reaching production, VPN/ZTNA with no posture check, and broad MAC-bypass exceptions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The network-access-control posture policy (device must be managed + compliant to reach the network/apps))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"NAC, VPN, ZTNA\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"NAC, VPN, ZTNA\" control must cover\n# fragment: nac_vpn_ztna_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "nac_vpn_ztna_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"NAC, VPN, ZTNA\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the nac, vpn, ztna control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"NAC, VPN, ZTNA\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"NAC, VPN, ZTNA\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The network-access-control posture policy (device must be managed + compliant to reach the network/apps) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"NAC, VPN, ZTNA\"?",
          "options": [
            "NAC — Cisco ISE / Aruba ClearPass (802.1X) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., NAC — Cisco ISE / Aruba ClearPass (802.1X)) via read-only access."
        },
        {
          "id": "ept-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"NAC, VPN, ZTNA\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Network security (NAC/ZTNA) (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Network security (NAC/ZTNA) owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"NAC, VPN, ZTNA\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-15-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"NAC, VPN, ZTNA\", which is a realistic reportable finding?",
          "options": [
            "Wired ports have no 802.1X, so any device that plugs in gets full network access; the VPN checks credentials but not device posture, and the MAB bypass list has grown to hundreds of un-reviewed entries.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Wired ports have no 802.1X, so any device that plugs in gets full network access; the VPN checks credentials but not device posture, and the MAB bypass list has grown to hundreds of un-reviewed entries."
        },
        {
          "id": "ept-15-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"NAC, VPN, ZTNA\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-16",
    "order": 16,
    "title": "GPS, log collection coverage",
    "subtitle": "Agentic technical & privacy audit of the gps, log collection coverage control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"GPS, log collection coverage\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify endpoints emit and ship security telemetry, and lost devices can be located. PASS: required endpoint log sources are enabled and ~100% of endpoints forward to the SIEM (incl. roaming via cloud collectors); EDR telemetry is centralised; device location/GPS is available for lost-device recovery; and logs are retained. Exceptions: endpoints not forwarding (investigation blind spots), missing sources (no 4688/Sysmon), roaming devices uncollected, and no location capability for lost devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (SIEM + cloud log collectors (for roaming); Sysmon / Windows audit / EDR telemetry; MDM (device location)) as tools — e.g. `SIEM: endpoints reporting in last 24h vs the device inventory (forward`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs)",
        "The endpoint log sources enabled (auth, process-creation/4688, PowerShell 4104, Sysmon, EDR telemetry)",
        "Device-location/GPS capability for lost-device tracking",
        "Retention of endpoint logs + offline-device log capture"
      ],
      "system": [
        "SIEM + cloud log collectors (for roaming)",
        "Sysmon / Windows audit / EDR telemetry",
        "MDM (device location)"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "Endpoint (agents)",
        "IT (location)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-16-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "GPS, log collection coverage",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"GPS, log collection coverage\" as a repeatable agentic workflow: pull the real evidence (Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"GPS, log collection coverage\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM + cloud log collectors (for roaming), Sysmon / Windows audit / EDR telemetry, MDM (device location) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SIEM: endpoints reporting in last 24h vs the device inventory (forwarding covera` — read-only, against the systems of record.",
        "The test itself is specific. Verify endpoints emit and ship security telemetry, and lost devices can be located. PASS: required endpoint log sources are enabled and ~100% of endpoints forward to the SIEM (incl. roaming via cloud collectors); EDR telemetry is centralised; device location/GPS is available for lost-device recovery; and logs are retained. Exceptions: endpoints not forwarding (investigation blind spots), missing sources (no 4688/Sysmon), roaming devices uncollected, and no location capability for lost devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_gps_log_collection_coverage_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM + cloud log collectors (for roaming) and Sysmon / Windows audit / EDR telemetry (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_gps_log_collection_coverage_mcp.py` to expose it to your agent — or `python 16_gps_log_collection_coverage_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM + cloud log collectors (for roaming) · Sysmon / Windows audit / EDR telemetry",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"GPS, log collection coverage\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SIEM: endpoints reporting in last 24h vs the device inventory (forwarding coverage)\nconfirm 4688 + command-line + 4104 script-block + Sysmon enabled fleet-wide\nroaming-device telemetry via cloud collector (not just on-LAN)\nMDM device-location / Find-My for lost-device recovery"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs).",
        "The test: Verify endpoints emit and ship security telemetry, and lost devices can be located.",
        "Reconcile the systems of record (SIEM + cloud log collectors (for roaming), Sysmon / Windows audit / EDR telemetry, MDM (device location)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Only on-LAN devices forward logs; the 40% of the fleet that's remote sends nothing, command-line auditing is off, and there's no device-location capability — a lost laptop can't be located or reliably wiped."
      ],
      "references": [
        {
          "title": "NIST SP 800-92",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "CIS Control 8 Audit Log Management",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "16_gps_log_collection_coverage_mcp.py",
          "url": "/audit-code/endpoint/16_gps_log_collection_coverage_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"GPS, log collection coverage\" (endpoint log/telemetry forwarding coverage to the siem (which endpoints send security logs)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"GPS, log collection coverage\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify endpoints emit and ship security telemetry, and lost devices can be located. PASS: required endpoint log sources are enabled and ~100% of endpoints forward to the SIEM (incl. roaming via cloud collectors); EDR telemetry is centralised; device location/GPS is available for lost-device recovery; and logs are retained. Exceptions: endpoints not forwarding (investigation blind spots), missing sources (no 4688/Sysmon), roaming devices uncollected, and no location capability for lost devices. The evidence — Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM + cloud log collectors (for roaming) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM + cloud log collectors (for roaming) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM + cloud log collectors (for roaming); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"GPS, log collection coverage\" Audit Evidence\n\nThe test:\nVerify endpoints emit and ship security telemetry, and lost devices can be located. PASS: required endpoint log sources are enabled and ~100% of endpoints forward to the SIEM (incl. roaming via cloud collectors); EDR telemetry is centralised; device location/GPS is available for lost-device recovery; and logs are retained. Exceptions: endpoints not forwarding (investigation blind spots), missing sources (no 4688/Sysmon), roaming devices uncollected, and no location capability for lost devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"GPS, log collection coverage\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"GPS, log collection coverage\" control must cover\n# fragment: gps_log_collection_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "gps_log_collection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"GPS, log collection coverage\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the gps, log collection coverage control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"GPS, log collection coverage\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"GPS, log collection coverage\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The Endpoint log/telemetry forwarding coverage to the SIEM (which endpoints send security logs) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"GPS, log collection coverage\"?",
          "options": [
            "SIEM + cloud log collectors (for roaming) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., SIEM + cloud log collectors (for roaming)) via read-only access."
        },
        {
          "id": "ept-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"GPS, log collection coverage\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security operations / detection engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"GPS, log collection coverage\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-16-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"GPS, log collection coverage\", which is a realistic reportable finding?",
          "options": [
            "Only on-LAN devices forward logs; the 40% of the fleet that's remote sends nothing, command-line auditing is off, and there's no device-location capability — a lost laptop can't be located or reliably wiped.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Only on-LAN devices forward logs; the 40% of the fleet that's remote sends nothing, command-line auditing is off, and there's no device-location capability — a lost laptop can't be located or reliably wiped."
        },
        {
          "id": "ept-16-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"GPS, log collection coverage\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-17",
    "order": 17,
    "title": "Forensic readiness",
    "subtitle": "Agentic technical & privacy audit of the forensic readiness control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Forensic readiness\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org could investigate an endpoint compromise. PASS: EDR retains sufficient process/file/network history for DFIR; remote triage/collection (memory, artifacts) is available without physical access; hosts can be network-isolated from the console; and there's a documented forensic process with chain-of-custody. Exceptions: telemetry retention too short to investigate (days, not months), no remote-collection capability, no host-isolation, and no forensic process.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response); Forensic tooling (Velociraptor, KAPE); Evidence store + case management) as tools — e.g. `EDR: telemetry-retention window (enough to investigate a 3-month-old i`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available)",
        "Telemetry-retention sufficient for DFIR (enough history to investigate a past intrusion)",
        "The endpoint IR/triage playbook + host-isolation capability (network-contain a host from the console)",
        "Chain-of-custody + evidence-collection process for endpoints"
      ],
      "system": [
        "EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response)",
        "Forensic tooling (Velociraptor, KAPE)",
        "Evidence store + case management"
      ],
      "dataOwner": [
        "DFIR / security operations",
        "SOC",
        "Legal (chain-of-custody)"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-17-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Forensic readiness",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Forensic readiness\" as a repeatable agentic workflow: pull the real evidence (The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Forensic readiness\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response), Forensic tooling (Velociraptor, KAPE), Evidence store + case management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `EDR: telemetry-retention window (enough to investigate a 3-month-old intrusion?)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org could investigate an endpoint compromise. PASS: EDR retains sufficient process/file/network history for DFIR; remote triage/collection (memory, artifacts) is available without physical access; hosts can be network-isolated from the console; and there's a documented forensic process with chain-of-custody. Exceptions: telemetry retention too short to investigate (days, not months), no remote-collection capability, no host-isolation, and no forensic process. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_forensic_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response) and Forensic tooling (Velociraptor, KAPE) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_forensic_readiness_mcp.py` to expose it to your agent — or `python 17_forensic_readiness_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response) · Forensic tooling (Velociraptor, KAPE)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Forensic readiness\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "EDR: telemetry-retention window (enough to investigate a 3-month-old intrusion?)\nconfirm remote triage/collection (RTR / Live Response / Velociraptor) is available + tested\nconfirm one-click host network-isolation from the EDR console\nreview the endpoint forensic + chain-of-custody process"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available).",
        "The test: Verify the org could investigate an endpoint compromise.",
        "Reconcile the systems of record (EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response), Forensic tooling (Velociraptor, KAPE), Evidence store + case management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. EDR retains only 7 days of telemetry, so a breach discovered weeks later can't be reconstructed; there's no remote-collection tooling, and analysts can't isolate a compromised host without physically retrieving it."
      ],
      "references": [
        {
          "title": "NIST SP 800-86 Forensic Techniques",
          "url": "https://csrc.nist.gov/pubs/sp/800/86/final"
        },
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_forensic_readiness_mcp.py",
          "url": "/audit-code/endpoint/17_forensic_readiness_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Forensic readiness\" (the endpoint forensic-capability evidence (edr retains process/file/network history; remote triage/collection available)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Forensic readiness\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify the org could investigate an endpoint compromise. PASS: EDR retains sufficient process/file/network history for DFIR; remote triage/collection (memory, artifacts) is available without physical access; hosts can be network-isolated from the console; and there's a documented forensic process with chain-of-custody. Exceptions: telemetry retention too short to investigate (days, not months), no remote-collection capability, no host-isolation, and no forensic process. The evidence — The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Forensic readiness\" Audit Evidence\n\nThe test:\nVerify the org could investigate an endpoint compromise. PASS: EDR retains sufficient process/file/network history for DFIR; remote triage/collection (memory, artifacts) is available without physical access; hosts can be network-isolated from the console; and there's a documented forensic process with chain-of-custody. Exceptions: telemetry retention too short to investigate (days, not months), no remote-collection capability, no host-isolation, and no forensic process.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Forensic readiness\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Forensic readiness\" control must cover\n# fragment: forensic_readiness_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "forensic_readiness_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Forensic readiness\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the forensic readiness control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Forensic readiness\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Forensic readiness\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The endpoint forensic-capability evidence (EDR retains process/file/network history; remote triage/collection available) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Forensic readiness\"?",
          "options": [
            "EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., EDR (forensic timeline + remote response — CrowdStrike RTR / Defender Live Response)) via read-only access."
        },
        {
          "id": "ept-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Forensic readiness\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "DFIR / security operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "DFIR / security operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Forensic readiness\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-17-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Forensic readiness\", which is a realistic reportable finding?",
          "options": [
            "EDR retains only 7 days of telemetry, so a breach discovered weeks later can't be reconstructed; there's no remote-collection tooling, and analysts can't isolate a compromised host without physically retrieving it.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. EDR retains only 7 days of telemetry, so a breach discovered weeks later can't be reconstructed; there's no remote-collection tooling, and analysts can't isolate a compromised host without physically retrieving it."
        },
        {
          "id": "ept-17-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Forensic readiness\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  },
  {
    "epochId": "endpoint",
    "id": "ept-18",
    "order": 18,
    "title": "Exception management",
    "subtitle": "Agentic technical & privacy audit of the exception management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Exception management\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify exceptions to endpoint controls are governed, compensated, and time-boxed. PASS: every exemption (no EDR, encryption off, patch deferral, USB allowed) is in a register with a business justification, an approved compensating control, a named owner, and an expiry; exceptions are reviewed and reconciled to reality; expired ones are closed. Exceptions: undocumented exemptions (devices just missing controls with no record), exceptions with no compensating control, no expiry ('permanent temporary' exceptions), and a register that doesn't match the actual exempted devices.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (GRC / exception register (ServiceNow GRC, Archer); MDM/EDR (the actual exempted device state); Risk management) as tools — e.g. `pull the exception register: justification, compensating control, owne`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.)",
        "Each exception's justification, compensating control, owner, approval, and expiry",
        "Reconciliation of granted exceptions vs actual device state",
        "Aged/expired/unjustified exceptions"
      ],
      "system": [
        "GRC / exception register (ServiceNow GRC, Archer)",
        "MDM/EDR (the actual exempted device state)",
        "Risk management"
      ],
      "dataOwner": [
        "Security / GRC — owns the exception process",
        "Device/business owners — request + own",
        "Risk (approves)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Endpoint Devices controls."
      }
    },
    "badge": {
      "id": "ept-18-badge",
      "name": "Endpoint Devices Auditor",
      "emoji": "💻"
    },
    "wonder": {
      "name": "Exception management",
      "location": "Endpoint Devices",
      "era": "Present Day",
      "emoji": "💻"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Exception management\" as a repeatable agentic workflow: pull the real evidence (The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.)) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Exception management\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GRC / exception register (ServiceNow GRC, Archer), MDM/EDR (the actual exempted device state), Risk management — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `pull the exception register: justification, compensating control, owner, approva` — read-only, against the systems of record.",
        "The test itself is specific. Verify exceptions to endpoint controls are governed, compensated, and time-boxed. PASS: every exemption (no EDR, encryption off, patch deferral, USB allowed) is in a register with a business justification, an approved compensating control, a named owner, and an expiry; exceptions are reviewed and reconciled to reality; expired ones are closed. Exceptions: undocumented exemptions (devices just missing controls with no record), exceptions with no compensating control, no expiry ('permanent temporary' exceptions), and a register that doesn't match the actual exempted devices. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_exception_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GRC / exception register (ServiceNow GRC, Archer) and MDM/EDR (the actual exempted device state) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_exception_management_mcp.py` to expose it to your agent — or `python 18_exception_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The unmanaged laptop on the network",
        "when": "Recurring",
        "where": "Corporate endpoint fleets",
        "impact": "An endpoint without EDR, encryption, or current patches becomes the beachhead — and a lost device without disk encryption is a data breach by itself.",
        "body": [
          "Endpoints are the largest, most exposed control surface. A device missing EDR coverage, full-disk encryption, or patches is an unguarded door; ransomware and data theft routinely start there.",
          "Auditors test management-platform coverage, EDR/AV deployment, encryption, patch cadence, and the handling of unauthorized or end-of-life devices."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Endpoint Devices scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GRC / exception register (ServiceNow GRC, Archer) · MDM/EDR (the actual exempted device state)",
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
          "year": 2017,
          "event": "WannaCry/NotPetya: unpatched endpoints spread worms globally",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Ransomware crews favor unmanaged/EDR-blind endpoints for initial access"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Exception management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "pull the exception register: justification, compensating control, owner, approval, expiry per exemption\nreconcile the register vs reality (MDM/EDR devices actually missing controls)\nflag exceptions past expiry or with no compensating control\nfind undocumented exemptions — exempted devices not in the register"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.).",
        "The test: Verify exceptions to endpoint controls are governed, compensated, and time-boxed.",
        "Reconcile the systems of record (GRC / exception register (ServiceNow GRC, Archer), MDM/EDR (the actual exempted device state), Risk management) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The exception register lists 30 devices but EDR/MDM show 300 devices missing required controls — most exemptions are undocumented; of those recorded, half have no expiry and no compensating control."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 (risk acceptance / PM-4)",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "ISO/IEC 27001",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_exception_management_mcp.py",
          "url": "/audit-code/endpoint/18_exception_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Exception management\" (the endpoint-control exception register (devices/users exempted from edr, encryption, patch, usb, etc.)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Exception management\" control for Endpoint Devices at AcmeCorp. THE TEST: Verify exceptions to endpoint controls are governed, compensated, and time-boxed. PASS: every exemption (no EDR, encryption off, patch deferral, USB allowed) is in a register with a business justification, an approved compensating control, a named owner, and an expiry; exceptions are reviewed and reconciled to reality; expired ones are closed. Exceptions: undocumented exemptions (devices just missing controls with no record), exceptions with no compensating control, no expiry ('permanent temporary' exceptions), and a register that doesn't match the actual exempted devices. The evidence — The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GRC / exception register (ServiceNow GRC, Archer) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GRC / exception register (ServiceNow GRC, Archer) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GRC / exception register (ServiceNow GRC, Archer); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Exception management\" Audit Evidence\n\nThe test:\nVerify exceptions to endpoint controls are governed, compensated, and time-boxed. PASS: every exemption (no EDR, encryption off, patch deferral, USB allowed) is in a register with a business justification, an approved compensating control, a named owner, and an expiry; exceptions are reviewed and reconciled to reality; expired ones are closed. Exceptions: undocumented exemptions (devices just missing controls with no record), exceptions with no compensating control, no expiry ('permanent temporary' exceptions), and a register that doesn't match the actual exempted devices.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Exception management\",\n  \"domain\": \"Endpoint Devices\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ept_",
        "/evidence/endpoint_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"End-user computing / IT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Exception management\" control must cover\n# fragment: exception_management_",
        "/evidence/endpoint_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "endpoint_inventory.json",
            "isDir": false
          },
          {
            "name": "endpoint_state.json",
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
          "value": "FLAG{ept_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/endpoint_inventory.json",
          "value": "exception_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/endpoint_state.json",
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
          "id": "ept-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Exception management\" sub-process of Endpoint Devices?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the exception management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ept-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Exception management\" matter to the broader Endpoint Devices posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Endpoint Devices controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ept-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Exception management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The The endpoint-control exception register (devices/users exempted from EDR, encryption, patch, USB, etc.) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ept-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Exception management\"?",
          "options": [
            "GRC / exception register (ServiceNow GRC, Archer) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GRC / exception register (ServiceNow GRC, Archer)) via read-only access."
        },
        {
          "id": "ept-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Exception management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Security / GRC — owns the exception process (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Security / GRC — owns the exception process owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ept-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Exception management\", which part stays with the human auditor?",
          "options": [
            "Nothing; the agent decides materiality",
            "Only installing dependencies",
            "Setting policy/thresholds, reviewing findings, and signing the opinion — the agent gathers and correlates evidence",
            "Issuing the final audit opinion autonomously"
          ],
          "correctIndex": 2,
          "explanation": "Agents automate evidence gathering at machine speed; humans own policy and judgement."
        },
        {
          "id": "ept-18-q7",
          "type": "Tooling",
          "challenge": "Read-only",
          "text": "Why must the MCP server for this module be read-only?",
          "options": [
            "So it can run without any credentials",
            "Audit tooling must never alter the audited environment; read-only guarantees running it cannot change state",
            "Read-only servers are simply faster",
            "MCP cannot perform writes"
          ],
          "correctIndex": 1,
          "explanation": "Non-interference is a hard requirement for audit evidence-gathering tools."
        },
        {
          "id": "ept-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Exception management\", which is a realistic reportable finding?",
          "options": [
            "The exception register lists 30 devices but EDR/MDM show 300 devices missing required controls — most exemptions are undocumented; of those recorded, half have no expiry and no compensating control.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The exception register lists 30 devices but EDR/MDM show 300 devices missing required controls — most exemptions are undocumented; of those recorded, half have no expiry and no compensating control."
        },
        {
          "id": "ept-18-q9",
          "type": "Deliverable",
          "challenge": "The opinion",
          "text": "How does the coverage report escalate its opinion?",
          "options": [
            "It is always PASS to avoid conflict",
            "Randomly each run",
            "Only the asset count is reported, never an opinion",
            "PASS → EXCEPTIONS → MATERIAL GAP as the count and severity of gaps increase"
          ],
          "correctIndex": 3,
          "explanation": "The opinion is a function of how many in-scope items fail and how severely."
        },
        {
          "id": "ept-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Exception management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators never look at this domain",
            "It only matters for public data",
            "The control protects regulated/sensitive data or the systems that process it, so a gap carries compliance and privacy exposure",
            "Privacy is unrelated to technical controls"
          ],
          "correctIndex": 2,
          "explanation": "Security and privacy share the same controls; a technical gap is often also a compliance gap."
        }
      ]
    }
  }
];
