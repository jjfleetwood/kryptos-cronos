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
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security by design\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Security by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the security by design control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Security by design\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the security by design control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Security by design\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the security by design control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Security by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_security_by_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the security by design control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Security by design\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the security by design control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Security by design\" (in-scope inventory for the security by design control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security by design\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Security by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the security by design control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Security by design\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Security by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the security by design control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the security by design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security by design\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security by design\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the security by design control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Security by design\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security by design\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security by design\", which part stays with the human auditor?",
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
          "id": "iot-01-q7",
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
          "id": "iot-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security by design\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the security by design control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the security by design control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-01-q9",
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
          "id": "iot-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security by design\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-02",
    "order": 2,
    "title": "Privacy by design",
    "subtitle": "Agentic technical & privacy audit of the privacy by design control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Privacy by design\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Privacy by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the privacy by design control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Privacy by design\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the privacy by design control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Privacy by design\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the privacy by design control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Privacy by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_privacy_by_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the privacy by design control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Privacy by design\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the privacy by design control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Privacy by design\" (in-scope inventory for the privacy by design control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Privacy by design\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Privacy by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the privacy by design control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Privacy by design\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Privacy by design\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the privacy by design control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the privacy by design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Privacy by design\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Privacy by design\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the privacy by design control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Privacy by design\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Privacy by design\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Privacy by design\", which part stays with the human auditor?",
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
          "id": "iot-02-q7",
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
          "id": "iot-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Privacy by design\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the privacy by design control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the privacy by design control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-02-q9",
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
          "id": "iot-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Privacy by design\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-03",
    "order": 3,
    "title": "Attack surface minimization",
    "subtitle": "Agentic technical & privacy audit of the attack surface minimization control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Attack surface minimization\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Attack surface minimization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Attack surface minimization\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Attack surface minimization\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the attack surface minimization control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Attack surface minimization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_attack_surface_minimization_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Attack surface minimization\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the attack surface minimization control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Attack surface minimization\" (in-scope inventory for the attack surface minimization control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Attack surface minimization\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Attack surface minimization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Attack surface minimization\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Attack surface minimization\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the attack surface minimization control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Attack surface minimization\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Attack surface minimization\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the attack surface minimization control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Attack surface minimization\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Attack surface minimization\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Attack surface minimization\", which part stays with the human auditor?",
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
          "id": "iot-03-q7",
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
          "id": "iot-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Attack surface minimization\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the attack surface minimization control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the attack surface minimization control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-03-q9",
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
          "id": "iot-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Attack surface minimization\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-04",
    "order": 4,
    "title": "Threat modeling",
    "subtitle": "Agentic technical & privacy audit of the threat modeling control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Threat modeling\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the threat modeling control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Threat modeling\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the threat modeling control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Threat modeling\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the threat modeling control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_threat_modeling_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the threat modeling control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Threat modeling\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Threat modeling\" (in-scope inventory for the threat modeling control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Threat modeling\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the threat modeling control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Threat modeling\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Threat modeling\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the threat modeling control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the threat modeling control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Threat modeling\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Threat modeling\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the threat modeling control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Threat modeling\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Threat modeling\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Threat modeling\", which part stays with the human auditor?",
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
          "id": "iot-04-q7",
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
          "id": "iot-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Threat modeling\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the threat modeling control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-04-q9",
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
          "id": "iot-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Threat modeling\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-05",
    "order": 5,
    "title": "Third-party components",
    "subtitle": "Agentic technical & privacy audit of the third-party components control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party components\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Third-party components\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the third-party components control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Third-party components\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the third-party components control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Third-party components\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the third-party components control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Third-party components\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_third_party_components_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the third-party components control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Third-party components\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the third-party components control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Third-party components\" (in-scope inventory for the third-party components control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party components\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Third-party components\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the third-party components control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Third-party components\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Third-party components\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the third-party components control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the third-party components control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party components\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party components\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the third-party components control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Third-party components\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party components\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party components\", which part stays with the human auditor?",
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
          "id": "iot-05-q7",
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
          "id": "iot-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party components\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the third-party components control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the third-party components control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-05-q9",
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
          "id": "iot-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party components\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-06",
    "order": 6,
    "title": "Lightweight cryptography",
    "subtitle": "Agentic technical & privacy audit of the lightweight cryptography control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Lightweight cryptography\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Lightweight cryptography\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Lightweight cryptography\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Lightweight cryptography\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Lightweight cryptography\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_lightweight_cryptography_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Lightweight cryptography\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the lightweight cryptography control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Lightweight cryptography\" (in-scope inventory for the lightweight cryptography control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Lightweight cryptography\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Lightweight cryptography\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Lightweight cryptography\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Lightweight cryptography\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the lightweight cryptography control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Lightweight cryptography\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Lightweight cryptography\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the lightweight cryptography control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Lightweight cryptography\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Lightweight cryptography\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Lightweight cryptography\", which part stays with the human auditor?",
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
          "id": "iot-06-q7",
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
          "id": "iot-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Lightweight cryptography\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the lightweight cryptography control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the lightweight cryptography control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-06-q9",
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
          "id": "iot-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Lightweight cryptography\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-07",
    "order": 7,
    "title": "Vulnerability mgmt and pen test",
    "subtitle": "Agentic technical & privacy audit of the vulnerability mgmt and pen test control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability mgmt and pen test\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Vulnerability mgmt and pen test\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Vulnerability mgmt and pen test\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability mgmt and pen test\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Vulnerability mgmt and pen test\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_vulnerability_mgmt_and_pen_test_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Vulnerability mgmt and pen test\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vulnerability mgmt and pen test control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Vulnerability mgmt and pen test\" (in-scope inventory for the vulnerability mgmt and pen test control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability mgmt and pen test\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Vulnerability mgmt and pen test\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Vulnerability mgmt and pen test\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Vulnerability mgmt and pen test\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vulnerability mgmt and pen test control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability mgmt and pen test\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability mgmt and pen test\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the vulnerability mgmt and pen test control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vulnerability mgmt and pen test\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability mgmt and pen test\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability mgmt and pen test\", which part stays with the human auditor?",
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
          "id": "iot-07-q7",
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
          "id": "iot-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability mgmt and pen test\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the vulnerability mgmt and pen test control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vulnerability mgmt and pen test control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-07-q9",
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
          "id": "iot-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability mgmt and pen test\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-08",
    "order": 8,
    "title": "NAC",
    "subtitle": "Agentic technical & privacy audit of the nac control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"NAC\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"NAC\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the nac control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"NAC\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the nac control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"NAC\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the nac control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"NAC\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_nac_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the nac control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"NAC\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the nac control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"NAC\" (in-scope inventory for the nac control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"NAC\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"NAC\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the nac control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"NAC\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"NAC\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the nac control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the nac control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"NAC\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"NAC\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the nac control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"NAC\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"NAC\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"NAC\", which part stays with the human auditor?",
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
          "id": "iot-08-q7",
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
          "id": "iot-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"NAC\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the nac control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the nac control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-08-q9",
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
          "id": "iot-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"NAC\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-09",
    "order": 9,
    "title": "IoT gateway security",
    "subtitle": "Agentic technical & privacy audit of the iot gateway security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IoT gateway security\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT gateway security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the iot gateway security control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"IoT gateway security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the iot gateway security control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"IoT gateway security\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the iot gateway security control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT gateway security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_iot_gateway_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the iot gateway security control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT gateway security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the iot gateway security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"IoT gateway security\" (in-scope inventory for the iot gateway security control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IoT gateway security\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT gateway security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the iot gateway security control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"IoT gateway security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT gateway security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the iot gateway security control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the iot gateway security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IoT gateway security\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IoT gateway security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the iot gateway security control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IoT gateway security\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IoT gateway security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IoT gateway security\", which part stays with the human auditor?",
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
          "id": "iot-09-q7",
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
          "id": "iot-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IoT gateway security\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the iot gateway security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the iot gateway security control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-09-q9",
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
          "id": "iot-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IoT gateway security\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-10",
    "order": 10,
    "title": "Out-of-band management",
    "subtitle": "Agentic technical & privacy audit of the out-of-band management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Out-of-band management\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Out-of-band management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the out-of-band management control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Out-of-band management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the out-of-band management control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Out-of-band management\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the out-of-band management control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Out-of-band management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_out_of_band_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the out-of-band management control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Out-of-band management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the out-of-band management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Out-of-band management\" (in-scope inventory for the out-of-band management control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Out-of-band management\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Out-of-band management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the out-of-band management control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Out-of-band management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Out-of-band management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the out-of-band management control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the out-of-band management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Out-of-band management\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Out-of-band management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the out-of-band management control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Out-of-band management\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Out-of-band management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Out-of-band management\", which part stays with the human auditor?",
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
          "id": "iot-10-q7",
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
          "id": "iot-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Out-of-band management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the out-of-band management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the out-of-band management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-10-q9",
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
          "id": "iot-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Out-of-band management\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-11",
    "order": 11,
    "title": "Shadow IoT detection",
    "subtitle": "Agentic technical & privacy audit of the shadow iot detection control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Shadow IoT detection\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Shadow IoT detection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Shadow IoT detection\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Shadow IoT detection\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the shadow iot detection control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Shadow IoT detection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_shadow_iot_detection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Shadow IoT detection\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the shadow iot detection control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Shadow IoT detection\" (in-scope inventory for the shadow iot detection control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Shadow IoT detection\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Shadow IoT detection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Shadow IoT detection\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Shadow IoT detection\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the shadow iot detection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Shadow IoT detection\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Shadow IoT detection\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the shadow iot detection control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Shadow IoT detection\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Shadow IoT detection\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Shadow IoT detection\", which part stays with the human auditor?",
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
          "id": "iot-11-q7",
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
          "id": "iot-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Shadow IoT detection\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the shadow iot detection control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the shadow iot detection control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-11-q9",
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
          "id": "iot-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Shadow IoT detection\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-12",
    "order": 12,
    "title": "IoT monitoring and IR",
    "subtitle": "Agentic technical & privacy audit of the iot monitoring and ir control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IoT monitoring and IR\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"IoT monitoring and IR\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"IoT monitoring and IR\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_iot_monitoring_and_ir_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT monitoring and IR\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the iot monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"IoT monitoring and IR\" (in-scope inventory for the iot monitoring and ir control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IoT monitoring and IR\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"IoT monitoring and IR\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"IoT monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the iot monitoring and ir control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IoT monitoring and IR\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IoT monitoring and IR\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the iot monitoring and ir control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IoT monitoring and IR\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IoT monitoring and IR\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IoT monitoring and IR\", which part stays with the human auditor?",
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
          "id": "iot-12-q7",
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
          "id": "iot-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IoT monitoring and IR\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the iot monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the iot monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-12-q9",
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
          "id": "iot-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IoT monitoring and IR\" also serve privacy and regulatory goals?",
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
    "epochId": "iot",
    "id": "iot-13",
    "order": 13,
    "title": "Physical access",
    "subtitle": "Agentic technical & privacy audit of the physical access control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical access\" control for Internet of Things (IoT) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Physical access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Internet of Things (IoT) systems of record (IoT device fleet + firmware; IoT gateway / broker; Device-identity / certificate service) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the physical access control (from IoT device fleet + firmware)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "IoT device fleet + firmware",
        "IoT gateway / broker",
        "Device-identity / certificate service",
        "IoT monitoring (NDR/asset)"
      ],
      "dataOwner": [
        "IoT / product engineering",
        "Network security",
        "Security operations",
        "Facilities (for OT-adjacent IoT)"
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
      "tagline": "Auditing \"Physical access\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the physical access control (from IoT device fleet + firmware)) with read-only agents, run the test against policy, and issue a defensible opinion on the Internet of Things (IoT) control.",
      "year": 2025,
      "overview": [
        "The \"Physical access\" sub-process is one of the controls an auditor must verify for Internet of Things (IoT). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the physical access control (from IoT device fleet + firmware), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Physical access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_physical_access_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from IoT device fleet + firmware and IoT gateway / broker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
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
            "sub": "pull IoT device fleet + firmware · IoT gateway / broker",
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
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the physical access control (from IoT device fleet + firmware).",
        "The test: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Physical access\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (IoT device fleet + firmware, IoT gateway / broker, Device-identity / certificate service) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the physical access control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-213 — IoT device cybersecurity",
          "url": "https://csrc.nist.gov/pubs/sp/800/213/final"
        },
        {
          "title": "OWASP IoT Top 10",
          "url": "https://owasp.org/www-project-internet-of-things/"
        },
        {
          "title": "ETSI EN 303 645 — Consumer IoT",
          "url": "https://www.etsi.org/standards"
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
          "description": "Runnable read-only MCP server: gathers the Internet of Things (IoT) evidence for \"Physical access\" (in-scope inventory for the physical access control (from iot device fleet + firmware)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical access\" control for Internet of Things (IoT) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Physical access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the physical access control (from IoT device fleet + firmware) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live IoT device fleet + firmware APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. IoT device fleet + firmware gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from IoT device fleet + firmware; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Internet of Things (IoT): \"Physical access\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Internet of Things (IoT) policy/standard and flag every item where the \"Physical access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iot_inventory.json   (in-scope items — In-scope inventory for the physical access control (from IoT device fleet + firmware))\n- iot_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the physical access control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "iot-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical access\" matter to the broader Internet of Things (IoT) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Internet of Things (IoT) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "iot-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical access\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the physical access control (from IoT device fleet + firmware) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "iot-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Physical access\"?",
          "options": [
            "IoT device fleet + firmware (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., IoT device fleet + firmware) via read-only access."
        },
        {
          "id": "iot-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical access\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "IoT / product engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "IoT / product engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "iot-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical access\", which part stays with the human auditor?",
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
          "id": "iot-13-q7",
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
          "id": "iot-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical access\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the physical access control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the physical access control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "iot-13-q9",
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
          "id": "iot-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical access\" also serve privacy and regulatory goals?",
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
