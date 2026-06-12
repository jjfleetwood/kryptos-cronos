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
      "objective": "Prove the \"Device management platform\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device management platform\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
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
      "tagline": "Auditing \"Device management platform\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Device management platform\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device management platform\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_device_management_platform_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device management platform\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the device management platform control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Device management platform\" (in-scope inventory for the device management platform control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device management platform\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device management platform\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Device management platform\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device management platform\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the device management platform control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the device management platform control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the device management platform control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"End point inventory and unauthorized devices\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End point inventory and unauthorized devices\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"End point inventory and unauthorized devices\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"End point inventory and unauthorized devices\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End point inventory and unauthorized devices\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_end_point_inventory_and_unauthorized_devices_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End point inventory and unauthorized devices\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the end point inventory and unauthorized devices control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"End point inventory and unauthorized devices\" (in-scope inventory for the end point inventory and unauthorized devices control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End point inventory and unauthorized devices\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End point inventory and unauthorized devices\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"End point inventory and unauthorized devices\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End point inventory and unauthorized devices\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the end point inventory and unauthorized devices control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the end point inventory and unauthorized devices control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the end point inventory and unauthorized devices control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Hardware lifecycle tracking\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Hardware lifecycle tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Hardware lifecycle tracking\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Hardware lifecycle tracking\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Hardware lifecycle tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_hardware_lifecycle_tracking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Hardware lifecycle tracking\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the hardware lifecycle tracking control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Hardware lifecycle tracking\" (in-scope inventory for the hardware lifecycle tracking control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Hardware lifecycle tracking\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Hardware lifecycle tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Hardware lifecycle tracking\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Hardware lifecycle tracking\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the hardware lifecycle tracking control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the hardware lifecycle tracking control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the hardware lifecycle tracking control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Device image version mgmt\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device image version mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Device image version mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Device image version mgmt\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device image version mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_device_image_version_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device image version mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the device image version mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Device image version mgmt\" (in-scope inventory for the device image version mgmt control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Device image version mgmt\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device image version mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Device image version mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Device image version mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the device image version mgmt control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the device image version mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the device image version mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"EDR & antimalware\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"EDR & antimalware\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"EDR & antimalware\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"EDR & antimalware\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"EDR & antimalware\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_edr_antimalware_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"EDR & antimalware\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the edr & antimalware control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"EDR & antimalware\" (in-scope inventory for the edr & antimalware control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"EDR & antimalware\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"EDR & antimalware\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"EDR & antimalware\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"EDR & antimalware\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the edr & antimalware control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the edr & antimalware control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the edr & antimalware control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Coverage gaps\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Coverage gaps\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
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
      "tagline": "Auditing \"Coverage gaps\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Coverage gaps\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Coverage gaps\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_coverage_gaps_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Coverage gaps\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the coverage gaps control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Coverage gaps\" (in-scope inventory for the coverage gaps control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Coverage gaps\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Coverage gaps\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Coverage gaps\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Coverage gaps\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the coverage gaps control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the coverage gaps control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the coverage gaps control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"OS patching cadence\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"OS patching cadence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"OS patching cadence\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"OS patching cadence\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"OS patching cadence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_os_patching_cadence_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"OS patching cadence\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the os patching cadence control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"OS patching cadence\" (in-scope inventory for the os patching cadence control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"OS patching cadence\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"OS patching cadence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"OS patching cadence\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"OS patching cadence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the os patching cadence control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the os patching cadence control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the os patching cadence control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Vulnerability scanning\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Vulnerability scanning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Vulnerability scanning\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability scanning\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Vulnerability scanning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_vulnerability_scanning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Vulnerability scanning\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vulnerability scanning control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Vulnerability scanning\" (in-scope inventory for the vulnerability scanning control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability scanning\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Vulnerability scanning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Vulnerability scanning\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Vulnerability scanning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the vulnerability scanning control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the vulnerability scanning control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vulnerability scanning control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"End-of-life management\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End-of-life management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
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
      "tagline": "Auditing \"End-of-life management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"End-of-life management\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End-of-life management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_end_of_life_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End-of-life management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the end-of-life management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"End-of-life management\" (in-scope inventory for the end-of-life management control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"End-of-life management\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End-of-life management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"End-of-life management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"End-of-life management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the end-of-life management control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the end-of-life management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the end-of-life management control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Physical controls (USB, BT)\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Physical controls (USB, BT)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Physical controls (USB, BT)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Physical controls (USB, BT)\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Physical controls (USB, BT)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_physical_controls_usb_bt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Physical controls (USB, BT)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the physical controls (usb, bt) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Physical controls (USB, BT)\" (in-scope inventory for the physical controls (usb, bt) control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical controls (USB, BT)\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Physical controls (USB, BT)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Physical controls (USB, BT)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Physical controls (USB, BT)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the physical controls (usb, bt) control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the physical controls (usb, bt) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the physical controls (usb, bt) control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Screen lock and timeout\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Screen lock and timeout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Screen lock and timeout\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Screen lock and timeout\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Screen lock and timeout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_screen_lock_and_timeout_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Screen lock and timeout\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the screen lock and timeout control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Screen lock and timeout\" (in-scope inventory for the screen lock and timeout control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Screen lock and timeout\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Screen lock and timeout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Screen lock and timeout\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Screen lock and timeout\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the screen lock and timeout control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the screen lock and timeout control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the screen lock and timeout control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Full disk encryption\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Full disk encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Full disk encryption\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Full disk encryption\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Full disk encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_full_disk_encryption_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Full disk encryption\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the full disk encryption control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Full disk encryption\" (in-scope inventory for the full disk encryption control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Full disk encryption\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Full disk encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Full disk encryption\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Full disk encryption\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the full disk encryption control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the full disk encryption control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the full disk encryption control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Data loss prevention (endpoint)\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Data loss prevention (endpoint)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Data loss prevention (endpoint)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Data loss prevention (endpoint)\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Data loss prevention (endpoint)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_data_loss_prevention_endpoint_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Data loss prevention (endpoint)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data loss prevention (endpoint) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Data loss prevention (endpoint)\" (in-scope inventory for the data loss prevention (endpoint) control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data loss prevention (endpoint)\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Data loss prevention (endpoint)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Data loss prevention (endpoint)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Data loss prevention (endpoint)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the data loss prevention (endpoint) control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the data loss prevention (endpoint) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data loss prevention (endpoint) control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"MDM and containerization\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"MDM and containerization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"MDM and containerization\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"MDM and containerization\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"MDM and containerization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_mdm_and_containerization_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"MDM and containerization\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the mdm and containerization control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"MDM and containerization\" (in-scope inventory for the mdm and containerization control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"MDM and containerization\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"MDM and containerization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"MDM and containerization\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"MDM and containerization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the mdm and containerization control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the mdm and containerization control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the mdm and containerization control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"NAC, VPN, ZTNA\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"NAC, VPN, ZTNA\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"NAC, VPN, ZTNA\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"NAC, VPN, ZTNA\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"NAC, VPN, ZTNA\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_nac_vpn_ztna_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"NAC, VPN, ZTNA\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the nac, vpn, ztna control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"NAC, VPN, ZTNA\" (in-scope inventory for the nac, vpn, ztna control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"NAC, VPN, ZTNA\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"NAC, VPN, ZTNA\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"NAC, VPN, ZTNA\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"NAC, VPN, ZTNA\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the nac, vpn, ztna control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the nac, vpn, ztna control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the nac, vpn, ztna control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"GPS, log collection coverage\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"GPS, log collection coverage\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"GPS, log collection coverage\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"GPS, log collection coverage\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"GPS, log collection coverage\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_gps_log_collection_coverage_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"GPS, log collection coverage\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the gps, log collection coverage control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"GPS, log collection coverage\" (in-scope inventory for the gps, log collection coverage control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"GPS, log collection coverage\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"GPS, log collection coverage\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"GPS, log collection coverage\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"GPS, log collection coverage\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the gps, log collection coverage control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the gps, log collection coverage control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the gps, log collection coverage control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Forensic readiness\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Forensic readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Forensic readiness\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Forensic readiness\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Forensic readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_forensic_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Forensic readiness\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the forensic readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Forensic readiness\" (in-scope inventory for the forensic readiness control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Forensic readiness\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Forensic readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Forensic readiness\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Forensic readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the forensic readiness control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the forensic readiness control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the forensic readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
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
      "objective": "Prove the \"Exception management\" control for Endpoint Devices is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Endpoint Devices systems of record (MDM / UEM (Intune / Jamf); EDR (CrowdStrike / Defender / SentinelOne); Disk-encryption manager (BitLocker/FileVault)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "MDM / UEM (Intune / Jamf)",
        "EDR (CrowdStrike / Defender / SentinelOne)",
        "Disk-encryption manager (BitLocker/FileVault)",
        "Endpoint inventory / NAC"
      ],
      "dataOwner": [
        "End-user computing / IT",
        "Security operations",
        "Identity & Access Management",
        "Asset management"
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
      "tagline": "Auditing \"Exception management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf))) with read-only agents, run the test against policy, and issue a defensible opinion on the Endpoint Devices control.",
      "year": 2025,
      "overview": [
        "The \"Exception management\" sub-process is one of the controls an auditor must verify for Endpoint Devices. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_exception_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM / UEM (Intune / Jamf) and EDR (CrowdStrike / Defender / SentinelOne) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull MDM / UEM (Intune / Jamf) · EDR (CrowdStrike / Defender / SentinelOne)",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf)).",
        "The test: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (MDM / UEM (Intune / Jamf), EDR (CrowdStrike / Defender / SentinelOne), Disk-encryption manager (BitLocker/FileVault)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "CIS Control 1/4/10 — assets, config, malware",
          "url": "https://www.cisecurity.org/controls"
        },
        {
          "title": "NIST SP 800-46 — telework/endpoint",
          "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
        },
        {
          "title": "NIST SP 800-128 — secure configuration",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
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
          "description": "Runnable read-only MCP server: gathers the Endpoint Devices evidence for \"Exception management\" (in-scope inventory for the exception management control (from mdm / uem (intune / jamf))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Exception management\" control for Endpoint Devices at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM / UEM (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM / UEM (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM / UEM (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Endpoint Devices: \"Exception management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Endpoint Devices policy/standard and flag every item where the \"Exception management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- endpoint_inventory.json   (in-scope items — In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf)))\n- endpoint_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The In-scope inventory for the exception management control (from MDM / UEM (Intune / Jamf)) reconciled against policy, plus the resulting findings working paper",
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
            "MDM / UEM (Intune / Jamf) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., MDM / UEM (Intune / Jamf)) via read-only access."
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
            "End-user computing / IT (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "End-user computing / IT owns the control data; the auditor independently verifies it."
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
            "In-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the exception management control is not applied, mis-scoped, or has drifted from the approved baseline"
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
