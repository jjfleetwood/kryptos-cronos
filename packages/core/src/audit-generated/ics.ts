import type { EpochConfig, StageConfig } from "../types";

export const icsEpoch: EpochConfig = {
  "id": "ics",
  "name": "Industrial Control Systems (ICS)",
  "subtitle": "Agentic technical & privacy audit — Industrial Control Systems (ICS)",
  "description": "Audit Industrial Control Systems (ICS) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏭",
  "color": "Amber",
  "unlocked": true
};

export const icsStages: StageConfig[] = [
  {
    "epochId": "ics",
    "id": "ics-01",
    "order": 1,
    "title": "ICS asset inventory",
    "subtitle": "Agentic technical & privacy audit of the ics asset inventory control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS asset inventory\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS asset inventory\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-01-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS asset inventory",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS asset inventory\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS asset inventory\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS asset inventory\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ics_asset_inventory_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ics_asset_inventory_mcp.py` to expose it to your agent — or `python 01_ics_asset_inventory_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS asset inventory\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS asset inventory\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ics asset inventory control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ics_asset_inventory_mcp.py",
          "url": "/audit-code/ics/01_ics_asset_inventory_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS asset inventory\" (in-scope inventory for the ics asset inventory control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS asset inventory\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS asset inventory\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS asset inventory\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS asset inventory\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS asset inventory\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS asset inventory\" control must cover\n# fragment: ics_asset_inventory_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_asset_inventory_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS asset inventory\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ics asset inventory control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS asset inventory\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS asset inventory\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ics asset inventory control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"ICS asset inventory\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS asset inventory\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS asset inventory\", which part stays with the human auditor?",
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
          "id": "ics-01-q7",
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
          "id": "ics-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS asset inventory\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ics asset inventory control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ics asset inventory control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-01-q9",
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
          "id": "ics-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS asset inventory\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-02",
    "order": 2,
    "title": "Network segmentation",
    "subtitle": "Agentic technical & privacy audit of the network segmentation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Network segmentation\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Network segmentation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-02-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Network segmentation",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Network segmentation\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Network segmentation\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Network segmentation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_network_segmentation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_network_segmentation_mcp.py` to expose it to your agent — or `python 02_network_segmentation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Network segmentation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Network segmentation\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the network segmentation control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_network_segmentation_mcp.py",
          "url": "/audit-code/ics/02_network_segmentation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Network segmentation\" (in-scope inventory for the network segmentation control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Network segmentation\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Network segmentation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Network segmentation\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Network segmentation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Network segmentation\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Network segmentation\" control must cover\n# fragment: network_segmentation_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "network_segmentation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Network segmentation\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the network segmentation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Network segmentation\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Network segmentation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the network segmentation control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Network segmentation\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Network segmentation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Network segmentation\", which part stays with the human auditor?",
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
          "id": "ics-02-q7",
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
          "id": "ics-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Network segmentation\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the network segmentation control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the network segmentation control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-02-q9",
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
          "id": "ics-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Network segmentation\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-03",
    "order": 3,
    "title": "IT/OT asset boundary",
    "subtitle": "Agentic technical & privacy audit of the it/ot asset boundary control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IT/OT asset boundary\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IT/OT asset boundary\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-03-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "IT/OT asset boundary",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IT/OT asset boundary\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"IT/OT asset boundary\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IT/OT asset boundary\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_it_ot_asset_boundary_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_it_ot_asset_boundary_mcp.py` to expose it to your agent — or `python 03_it_ot_asset_boundary_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IT/OT asset boundary\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IT/OT asset boundary\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the it/ot asset boundary control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_it_ot_asset_boundary_mcp.py",
          "url": "/audit-code/ics/03_it_ot_asset_boundary_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"IT/OT asset boundary\" (in-scope inventory for the it/ot asset boundary control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IT/OT asset boundary\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IT/OT asset boundary\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"IT/OT asset boundary\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IT/OT asset boundary\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IT/OT asset boundary\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IT/OT asset boundary\" control must cover\n# fragment: itot_asset_boundary_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "itot_asset_boundary_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IT/OT asset boundary\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the it/ot asset boundary control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IT/OT asset boundary\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IT/OT asset boundary\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the it/ot asset boundary control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IT/OT asset boundary\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IT/OT asset boundary\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IT/OT asset boundary\", which part stays with the human auditor?",
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
          "id": "ics-03-q7",
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
          "id": "ics-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IT/OT asset boundary\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the it/ot asset boundary control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the it/ot asset boundary control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-03-q9",
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
          "id": "ics-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IT/OT asset boundary\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-04",
    "order": 4,
    "title": "IAM (ICS)",
    "subtitle": "Agentic technical & privacy audit of the iam (ics) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IAM (ICS)\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IAM (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-04-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "IAM (ICS)",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IAM (ICS)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"IAM (ICS)\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IAM (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_iam_ics_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_iam_ics_mcp.py` to expose it to your agent — or `python 04_iam_ics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IAM (ICS)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IAM (ICS)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the iam (ics) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_iam_ics_mcp.py",
          "url": "/audit-code/ics/04_iam_ics_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"IAM (ICS)\" (in-scope inventory for the iam (ics) control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IAM (ICS)\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IAM (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"IAM (ICS)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"IAM (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IAM (ICS)\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IAM (ICS)\" control must cover\n# fragment: iam_ics_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "iam_ics_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IAM (ICS)\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the iam (ics) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IAM (ICS)\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IAM (ICS)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the iam (ics) control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"IAM (ICS)\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IAM (ICS)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IAM (ICS)\", which part stays with the human auditor?",
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
          "id": "ics-04-q7",
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
          "id": "ics-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IAM (ICS)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the iam (ics) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the iam (ics) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-04-q9",
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
          "id": "ics-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IAM (ICS)\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-05",
    "order": 5,
    "title": "Patch and vuln mgmt (ICS)",
    "subtitle": "Agentic technical & privacy audit of the patch and vuln mgmt (ics) control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Patch and vuln mgmt (ICS)\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Patch and vuln mgmt (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-05-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Patch and vuln mgmt (ICS)",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Patch and vuln mgmt (ICS)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Patch and vuln mgmt (ICS)\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Patch and vuln mgmt (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_patch_and_vuln_mgmt_ics_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_patch_and_vuln_mgmt_ics_mcp.py` to expose it to your agent — or `python 05_patch_and_vuln_mgmt_ics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Patch and vuln mgmt (ICS)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Patch and vuln mgmt (ICS)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the patch and vuln mgmt (ics) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_patch_and_vuln_mgmt_ics_mcp.py",
          "url": "/audit-code/ics/05_patch_and_vuln_mgmt_ics_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Patch and vuln mgmt (ICS)\" (in-scope inventory for the patch and vuln mgmt (ics) control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Patch and vuln mgmt (ICS)\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Patch and vuln mgmt (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Patch and vuln mgmt (ICS)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Patch and vuln mgmt (ICS)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Patch and vuln mgmt (ICS)\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Patch and vuln mgmt (ICS)\" control must cover\n# fragment: patch_vuln_mgmt_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "patch_vuln_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Patch and vuln mgmt (ICS)\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the patch and vuln mgmt (ics) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Patch and vuln mgmt (ICS)\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Patch and vuln mgmt (ICS)\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the patch and vuln mgmt (ics) control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Patch and vuln mgmt (ICS)\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Patch and vuln mgmt (ICS)\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Patch and vuln mgmt (ICS)\", which part stays with the human auditor?",
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
          "id": "ics-05-q7",
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
          "id": "ics-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Patch and vuln mgmt (ICS)\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the patch and vuln mgmt (ics) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the patch and vuln mgmt (ics) control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-05-q9",
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
          "id": "ics-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Patch and vuln mgmt (ICS)\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-06",
    "order": 6,
    "title": "ICS security governance",
    "subtitle": "Agentic technical & privacy audit of the ics security governance control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS security governance\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS security governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-06-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS security governance",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS security governance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS security governance\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS security governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_ics_security_governance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_ics_security_governance_mcp.py` to expose it to your agent — or `python 06_ics_security_governance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS security governance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS security governance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ics security governance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_ics_security_governance_mcp.py",
          "url": "/audit-code/ics/06_ics_security_governance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS security governance\" (in-scope inventory for the ics security governance control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS security governance\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS security governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS security governance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS security governance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS security governance\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS security governance\" control must cover\n# fragment: ics_security_governance_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_security_governance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS security governance\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ics security governance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS security governance\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS security governance\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ics security governance control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"ICS security governance\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS security governance\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS security governance\", which part stays with the human auditor?",
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
          "id": "ics-06-q7",
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
          "id": "ics-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS security governance\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ics security governance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ics security governance control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-06-q9",
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
          "id": "ics-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS security governance\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-07",
    "order": 7,
    "title": "ICS monitoring and IR",
    "subtitle": "Agentic technical & privacy audit of the ics monitoring and ir control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"ICS monitoring and IR\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-07-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "ICS monitoring and IR",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"ICS monitoring and IR\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"ICS monitoring and IR\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_ics_monitoring_and_ir_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_ics_monitoring_and_ir_mcp.py` to expose it to your agent — or `python 07_ics_monitoring_and_ir_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"ICS monitoring and IR\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS monitoring and IR\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the ics monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_ics_monitoring_and_ir_mcp.py",
          "url": "/audit-code/ics/07_ics_monitoring_and_ir_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"ICS monitoring and IR\" (in-scope inventory for the ics monitoring and ir control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"ICS monitoring and IR\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"ICS monitoring and IR\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"ICS monitoring and IR\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"ICS monitoring and IR\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"ICS monitoring and IR\" control must cover\n# fragment: ics_monitoring_ir_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "ics_monitoring_ir_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"ICS monitoring and IR\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the ics monitoring and ir control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"ICS monitoring and IR\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"ICS monitoring and IR\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the ics monitoring and ir control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"ICS monitoring and IR\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"ICS monitoring and IR\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"ICS monitoring and IR\", which part stays with the human auditor?",
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
          "id": "ics-07-q7",
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
          "id": "ics-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"ICS monitoring and IR\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the ics monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the ics monitoring and ir control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-07-q9",
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
          "id": "ics-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"ICS monitoring and IR\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-08",
    "order": 8,
    "title": "Physical access and security",
    "subtitle": "Agentic technical & privacy audit of the physical access and security control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical access and security\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Physical access and security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-08-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Physical access and security",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical access and security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Physical access and security\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Physical access and security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_physical_access_and_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_physical_access_and_security_mcp.py` to expose it to your agent — or `python 08_physical_access_and_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical access and security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Physical access and security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the physical access and security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_physical_access_and_security_mcp.py",
          "url": "/audit-code/ics/08_physical_access_and_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Physical access and security\" (in-scope inventory for the physical access and security control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical access and security\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Physical access and security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Physical access and security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Physical access and security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical access and security\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical access and security\" control must cover\n# fragment: physical_access_security_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "physical_access_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical access and security\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the physical access and security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical access and security\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical access and security\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the physical access and security control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Physical access and security\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical access and security\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical access and security\", which part stays with the human auditor?",
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
          "id": "ics-08-q7",
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
          "id": "ics-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical access and security\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the physical access and security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the physical access and security control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-08-q9",
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
          "id": "ics-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical access and security\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-09",
    "order": 9,
    "title": "Vendor physical and remote access",
    "subtitle": "Agentic technical & privacy audit of the vendor physical and remote access control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor physical and remote access\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Vendor physical and remote access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-09-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Vendor physical and remote access",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor physical and remote access\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Vendor physical and remote access\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Vendor physical and remote access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_vendor_physical_and_remote_access_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_vendor_physical_and_remote_access_mcp.py` to expose it to your agent — or `python 09_vendor_physical_and_remote_access_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor physical and remote access\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Vendor physical and remote access\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor physical and remote access control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_vendor_physical_and_remote_access_mcp.py",
          "url": "/audit-code/ics/09_vendor_physical_and_remote_access_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Vendor physical and remote access\" (in-scope inventory for the vendor physical and remote access control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor physical and remote access\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Vendor physical and remote access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Vendor physical and remote access\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Vendor physical and remote access\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor physical and remote access\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor physical and remote access\" control must cover\n# fragment: vendor_physical_remote_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "vendor_physical_remote_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor physical and remote access\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the vendor physical and remote access control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor physical and remote access\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor physical and remote access\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the vendor physical and remote access control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Vendor physical and remote access\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor physical and remote access\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor physical and remote access\", which part stays with the human auditor?",
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
          "id": "ics-09-q7",
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
          "id": "ics-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor physical and remote access\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor physical and remote access control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor physical and remote access control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-09-q9",
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
          "id": "ics-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor physical and remote access\" also serve privacy and regulatory goals?",
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
    "epochId": "ics",
    "id": "ics-10",
    "order": 10,
    "title": "Supply chain integrity",
    "subtitle": "Agentic technical & privacy audit of the supply chain integrity control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Supply chain integrity\" control for Industrial Control Systems (ICS) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Supply chain integrity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Industrial Control Systems (ICS) systems of record (ICS/SCADA + PLC/RTU/HMI; OT network monitoring (Dragos/Nozomi); IT/OT boundary firewalls (DMZ)) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "ICS/SCADA + PLC/RTU/HMI",
        "OT network monitoring (Dragos/Nozomi)",
        "IT/OT boundary firewalls (DMZ)",
        "OT asset inventory"
      ],
      "dataOwner": [
        "OT / plant engineering",
        "OT security",
        "IT/OT network team",
        "Physical security / safety"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Industrial Control Systems (ICS) controls."
      }
    },
    "badge": {
      "id": "ics-10-badge",
      "name": "Industrial Control Systems (ICS) Auditor",
      "emoji": "🏭"
    },
    "wonder": {
      "name": "Supply chain integrity",
      "location": "Industrial Control Systems (ICS)",
      "era": "Present Day",
      "emoji": "🏭"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Supply chain integrity\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI)) with read-only agents, run the test against policy, and issue a defensible opinion on the Industrial Control Systems (ICS) control.",
      "year": 2025,
      "overview": [
        "The \"Supply chain integrity\" sub-process is one of the controls an auditor must verify for Industrial Control Systems (ICS). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Supply chain integrity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_supply_chain_integrity_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ICS/SCADA + PLC/RTU/HMI and OT network monitoring (Dragos/Nozomi) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_supply_chain_integrity_mcp.py` to expose it to your agent — or `python 10_supply_chain_integrity_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Ransomware crosses into operations",
        "when": "2021",
        "where": "Pipeline operational systems",
        "impact": "An IT-side intrusion forced an operational shutdown, disrupting fuel supply across a region — IT/OT boundary failure with physical consequences.",
        "body": [
          "Colonial Pipeline halted operations after a billing-system intrusion because the IT/OT boundary and segmentation couldn't assure safe operation — and the consequences were physical.",
          "Auditors verify ICS asset inventory, segmentation, the IT/OT boundary, OT IAM, patch/vuln handling, monitoring/IR, and vendor remote access."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Industrial Control Systems (ICS) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ICS/SCADA + PLC/RTU/HMI · OT network monitoring (Dragos/Nozomi)",
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
          "year": 2021,
          "event": "Colonial Pipeline: IT intrusion forces OT shutdown",
          "highlight": true
        },
        {
          "year": 2015,
          "event": "Ukraine grid attack: remote ICS manipulation cuts power"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Supply chain integrity\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI).",
        "The test: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Supply chain integrity\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (ICS/SCADA + PLC/RTU/HMI, OT network monitoring (Dragos/Nozomi), IT/OT boundary firewalls (DMZ)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the supply chain integrity control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-82 — ICS Security",
          "url": "https://csrc.nist.gov/pubs/sp/800/82/r3/final"
        },
        {
          "title": "IEC 62443 — IACS security",
          "url": "https://www.iec.ch/cyber-security"
        },
        {
          "title": "CISA ICS advisories",
          "url": "https://www.cisa.gov/topics/industrial-control-systems"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_supply_chain_integrity_mcp.py",
          "url": "/audit-code/ics/10_supply_chain_integrity_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Industrial Control Systems (ICS) evidence for \"Supply chain integrity\" (in-scope inventory for the supply chain integrity control (from ics/scada + plc/rtu/hmi)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Supply chain integrity\" control for Industrial Control Systems (ICS) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Supply chain integrity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ICS/SCADA + PLC/RTU/HMI APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ICS/SCADA + PLC/RTU/HMI gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ICS/SCADA + PLC/RTU/HMI; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Industrial Control Systems (ICS): \"Supply chain integrity\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Industrial Control Systems (ICS) policy/standard and flag every item where the \"Supply chain integrity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- ics_inventory.json   (in-scope items — In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI))\n- ics_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Supply chain integrity\",\n  \"domain\": \"Industrial Control Systems (ICS)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{ics_",
        "/evidence/ics_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"OT / plant engineering\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Supply chain integrity\" control must cover\n# fragment: supply_chain_integrity_",
        "/evidence/ics_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "ics_inventory.json",
            "isDir": false
          },
          {
            "name": "ics_state.json",
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
          "value": "FLAG{ics_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/ics_inventory.json",
          "value": "supply_chain_integrity_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/ics_state.json",
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
          "id": "ics-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Supply chain integrity\" sub-process of Industrial Control Systems (ICS)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the supply chain integrity control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "ics-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Supply chain integrity\" matter to the broader Industrial Control Systems (ICS) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Industrial Control Systems (ICS) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "ics-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Supply chain integrity\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the supply chain integrity control (from ICS/SCADA + PLC/RTU/HMI) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "ics-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Supply chain integrity\"?",
          "options": [
            "ICS/SCADA + PLC/RTU/HMI (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., ICS/SCADA + PLC/RTU/HMI) via read-only access."
        },
        {
          "id": "ics-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Supply chain integrity\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "OT / plant engineering (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "OT / plant engineering owns the control data; the auditor independently verifies it."
        },
        {
          "id": "ics-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Supply chain integrity\", which part stays with the human auditor?",
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
          "id": "ics-10-q7",
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
          "id": "ics-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Supply chain integrity\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the supply chain integrity control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the supply chain integrity control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "ics-10-q9",
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
          "id": "ics-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Supply chain integrity\" also serve privacy and regulatory goals?",
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
