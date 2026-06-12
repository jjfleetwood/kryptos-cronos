import type { EpochConfig, StageConfig } from "../types";

export const datacenterEpoch: EpochConfig = {
  "id": "datacenter",
  "name": "Datacenter / Lab / Colocation (CoLo)",
  "subtitle": "Agentic technical & privacy audit — Datacenter / Lab / Colocation (CoLo)",
  "description": "Audit Datacenter / Lab / Colocation (CoLo) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏢",
  "color": "Stone",
  "unlocked": true
};

export const datacenterStages: StageConfig[] = [
  {
    "epochId": "datacenter",
    "id": "dcr-01",
    "order": 1,
    "title": "Physical security controls",
    "subtitle": "Agentic technical & privacy audit of the physical security controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Physical security controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Physical security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the physical security controls control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-01-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Physical security controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Physical security controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the physical security controls control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Physical security controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the physical security controls control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Physical security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_physical_security_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_physical_security_controls_mcp.py` to expose it to your agent — or `python 01_physical_security_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Physical security controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the physical security controls control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Physical security controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the physical security controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_physical_security_controls_mcp.py",
          "url": "/audit-code/datacenter/01_physical_security_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Physical security controls\" (in-scope inventory for the physical security controls control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Physical security controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Physical security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the physical security controls control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Physical security controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Physical security controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the physical security controls control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Physical security controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Physical security controls\" control must cover\n# fragment: physical_security_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "physical_security_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Physical security controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the physical security controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Physical security controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Physical security controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the physical security controls control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Physical security controls\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Physical security controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Physical security controls\", which part stays with the human auditor?",
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
          "id": "dcr-01-q7",
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
          "id": "dcr-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Physical security controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the physical security controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the physical security controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-01-q9",
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
          "id": "dcr-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Physical security controls\" also serve privacy and regulatory goals?",
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
    "epochId": "datacenter",
    "id": "dcr-02",
    "order": 2,
    "title": "Environmental controls",
    "subtitle": "Agentic technical & privacy audit of the environmental controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Environmental controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Environmental controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the environmental controls control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-02-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Environmental controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Environmental controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the environmental controls control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Environmental controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the environmental controls control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Environmental controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_environmental_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_environmental_controls_mcp.py` to expose it to your agent — or `python 02_environmental_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Environmental controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the environmental controls control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Environmental controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the environmental controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_environmental_controls_mcp.py",
          "url": "/audit-code/datacenter/02_environmental_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Environmental controls\" (in-scope inventory for the environmental controls control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Environmental controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Environmental controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the environmental controls control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Environmental controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Environmental controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the environmental controls control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Environmental controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Environmental controls\" control must cover\n# fragment: environmental_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "environmental_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Environmental controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the environmental controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Environmental controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Environmental controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the environmental controls control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Environmental controls\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Environmental controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Environmental controls\", which part stays with the human auditor?",
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
          "id": "dcr-02-q7",
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
          "id": "dcr-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Environmental controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the environmental controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the environmental controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-02-q9",
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
          "id": "dcr-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Environmental controls\" also serve privacy and regulatory goals?",
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
    "epochId": "datacenter",
    "id": "dcr-03",
    "order": 3,
    "title": "Safety controls",
    "subtitle": "Agentic technical & privacy audit of the safety controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Safety controls\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Safety controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the safety controls control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-03-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Safety controls",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Safety controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the safety controls control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Safety controls\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the safety controls control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Safety controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_safety_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_safety_controls_mcp.py` to expose it to your agent — or `python 03_safety_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Safety controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the safety controls control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Safety controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the safety controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_safety_controls_mcp.py",
          "url": "/audit-code/datacenter/03_safety_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Safety controls\" (in-scope inventory for the safety controls control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Safety controls\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Safety controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the safety controls control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Safety controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Safety controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the safety controls control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Safety controls\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Safety controls\" control must cover\n# fragment: safety_controls_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "safety_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Safety controls\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the safety controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Safety controls\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Safety controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the safety controls control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Safety controls\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Safety controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Safety controls\", which part stays with the human auditor?",
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
          "id": "dcr-03-q7",
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
          "id": "dcr-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Safety controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the safety controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the safety controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-03-q9",
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
          "id": "dcr-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Safety controls\" also serve privacy and regulatory goals?",
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
    "epochId": "datacenter",
    "id": "dcr-04",
    "order": 4,
    "title": "Asset inventory mgmt",
    "subtitle": "Agentic technical & privacy audit of the asset inventory mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Asset inventory mgmt\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Asset inventory mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-04-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Asset inventory mgmt",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Asset inventory mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Asset inventory mgmt\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the asset inventory mgmt control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Asset inventory mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_asset_inventory_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_asset_inventory_mgmt_mcp.py` to expose it to your agent — or `python 04_asset_inventory_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Asset inventory mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Asset inventory mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the asset inventory mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_asset_inventory_mgmt_mcp.py",
          "url": "/audit-code/datacenter/04_asset_inventory_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Asset inventory mgmt\" (in-scope inventory for the asset inventory mgmt control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Asset inventory mgmt\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Asset inventory mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Asset inventory mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Asset inventory mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Asset inventory mgmt\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Asset inventory mgmt\" control must cover\n# fragment: asset_inventory_mgmt_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "asset_inventory_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Asset inventory mgmt\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the asset inventory mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Asset inventory mgmt\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Asset inventory mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the asset inventory mgmt control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Asset inventory mgmt\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Asset inventory mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Asset inventory mgmt\", which part stays with the human auditor?",
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
          "id": "dcr-04-q7",
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
          "id": "dcr-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Asset inventory mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the asset inventory mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the asset inventory mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-04-q9",
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
          "id": "dcr-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Asset inventory mgmt\" also serve privacy and regulatory goals?",
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
    "epochId": "datacenter",
    "id": "dcr-05",
    "order": 5,
    "title": "Maintenance and vendor mgmt",
    "subtitle": "Agentic technical & privacy audit of the maintenance and vendor mgmt control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Maintenance and vendor mgmt\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Maintenance and vendor mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-05-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Maintenance and vendor mgmt",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Maintenance and vendor mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Maintenance and vendor mgmt\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Maintenance and vendor mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_maintenance_and_vendor_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_maintenance_and_vendor_mgmt_mcp.py` to expose it to your agent — or `python 05_maintenance_and_vendor_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Maintenance and vendor mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Maintenance and vendor mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the maintenance and vendor mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_maintenance_and_vendor_mgmt_mcp.py",
          "url": "/audit-code/datacenter/05_maintenance_and_vendor_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Maintenance and vendor mgmt\" (in-scope inventory for the maintenance and vendor mgmt control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Maintenance and vendor mgmt\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Maintenance and vendor mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Maintenance and vendor mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Maintenance and vendor mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Maintenance and vendor mgmt\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Maintenance and vendor mgmt\" control must cover\n# fragment: maintenance_vendor_mgmt_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "maintenance_vendor_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Maintenance and vendor mgmt\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the maintenance and vendor mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Maintenance and vendor mgmt\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Maintenance and vendor mgmt\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the maintenance and vendor mgmt control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Maintenance and vendor mgmt\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Maintenance and vendor mgmt\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Maintenance and vendor mgmt\", which part stays with the human auditor?",
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
          "id": "dcr-05-q7",
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
          "id": "dcr-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Maintenance and vendor mgmt\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the maintenance and vendor mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the maintenance and vendor mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-05-q9",
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
          "id": "dcr-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Maintenance and vendor mgmt\" also serve privacy and regulatory goals?",
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
    "epochId": "datacenter",
    "id": "dcr-06",
    "order": 6,
    "title": "Business continuity planning",
    "subtitle": "Agentic technical & privacy audit of the business continuity planning control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business continuity planning\" control for Datacenter / Lab / Colocation (CoLo) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Business continuity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Datacenter / Lab / Colocation (CoLo) systems of record (Badge / PACS access system; Environmental + power monitoring (DCIM); Asset / rack inventory) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the business continuity planning control (from Badge / PACS access system)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Badge / PACS access system",
        "Environmental + power monitoring (DCIM)",
        "Asset / rack inventory",
        "Vendor / maintenance ticketing"
      ],
      "dataOwner": [
        "Facilities / Datacenter operations",
        "Physical security",
        "IT asset management",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Datacenter / Lab / Colocation (CoLo) controls."
      }
    },
    "badge": {
      "id": "dcr-06-badge",
      "name": "Datacenter / Lab / Colocation (CoLo) Auditor",
      "emoji": "🏢"
    },
    "wonder": {
      "name": "Business continuity planning",
      "location": "Datacenter / Lab / Colocation (CoLo)",
      "era": "Present Day",
      "emoji": "🏢"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business continuity planning\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the business continuity planning control (from Badge / PACS access system)) with read-only agents, run the test against policy, and issue a defensible opinion on the Datacenter / Lab / Colocation (CoLo) control.",
      "year": 2025,
      "overview": [
        "The \"Business continuity planning\" sub-process is one of the controls an auditor must verify for Datacenter / Lab / Colocation (CoLo). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the business continuity planning control (from Badge / PACS access system), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Business continuity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_business_continuity_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Badge / PACS access system and Environmental + power monitoring (DCIM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_business_continuity_planning_mcp.py` to expose it to your agent — or `python 06_business_continuity_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Physical access and environmental failure",
        "when": "Recurring",
        "where": "Datacenters / labs / colocation",
        "impact": "A tailgated door, an un-deprovisioned badge, or a failed cooling/power control takes down or exposes the systems inside.",
        "body": [
          "The strongest logical controls assume the physical layer holds. A shared badge, a propped door, or an unmonitored UPS/cooling unit undoes that assumption.",
          "Auditors verify access provisioning/deprovisioning, environmental and safety controls, asset inventory, and vendor/maintenance access in the facility."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Datacenter / Lab / Colocation (CoLo) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Badge / PACS access system · Environmental + power monitoring (DCIM)",
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
          "event": "OVHcloud Strasbourg fire — facility resilience as a continuity risk",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Datacenter cooling failures cause regional cloud outages in heatwaves"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business continuity planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the business continuity planning control (from Badge / PACS access system).",
        "The test: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Business continuity planning\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Badge / PACS access system, Environmental + power monitoring (DCIM), Asset / rack inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the business continuity planning control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "ANSI/TIA-942 — Data Center standard",
          "url": "https://tiaonline.org/products-and-services/tia942certification/"
        },
        {
          "title": "Uptime Institute Tier Standard",
          "url": "https://uptimeinstitute.com/tiers"
        },
        {
          "title": "NIST SP 800-53 — PE Physical & Environmental",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_business_continuity_planning_mcp.py",
          "url": "/audit-code/datacenter/06_business_continuity_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Datacenter / Lab / Colocation (CoLo) evidence for \"Business continuity planning\" (in-scope inventory for the business continuity planning control (from badge / pacs access system)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business continuity planning\" control for Datacenter / Lab / Colocation (CoLo) at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Business continuity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the business continuity planning control (from Badge / PACS access system) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Badge / PACS access system APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Badge / PACS access system gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Badge / PACS access system; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Datacenter / Lab / Colocation (CoLo): \"Business continuity planning\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Datacenter / Lab / Colocation (CoLo) policy/standard and flag every item where the \"Business continuity planning\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- datacenter_inventory.json   (in-scope items — In-scope inventory for the business continuity planning control (from Badge / PACS access system))\n- datacenter_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business continuity planning\",\n  \"domain\": \"Datacenter / Lab / Colocation (CoLo)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{dcr_",
        "/evidence/datacenter_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Facilities / Datacenter operations\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business continuity planning\" control must cover\n# fragment: business_continuity_planning_",
        "/evidence/datacenter_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "datacenter_inventory.json",
            "isDir": false
          },
          {
            "name": "datacenter_state.json",
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
          "value": "FLAG{dcr_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/datacenter_inventory.json",
          "value": "business_continuity_planning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/datacenter_state.json",
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
          "id": "dcr-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business continuity planning\" sub-process of Datacenter / Lab / Colocation (CoLo)?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the business continuity planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "dcr-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business continuity planning\" matter to the broader Datacenter / Lab / Colocation (CoLo) posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Datacenter / Lab / Colocation (CoLo) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "dcr-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business continuity planning\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the business continuity planning control (from Badge / PACS access system) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "dcr-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Business continuity planning\"?",
          "options": [
            "Badge / PACS access system (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Badge / PACS access system) via read-only access."
        },
        {
          "id": "dcr-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business continuity planning\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "Facilities / Datacenter operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Facilities / Datacenter operations owns the control data; the auditor independently verifies it."
        },
        {
          "id": "dcr-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business continuity planning\", which part stays with the human auditor?",
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
          "id": "dcr-06-q7",
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
          "id": "dcr-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business continuity planning\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the business continuity planning control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the business continuity planning control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "dcr-06-q9",
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
          "id": "dcr-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business continuity planning\" also serve privacy and regulatory goals?",
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
