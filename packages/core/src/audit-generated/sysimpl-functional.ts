import type { EpochConfig, StageConfig } from "../types";

export const sysimplFunctionalEpoch: EpochConfig = {
  "id": "sysimpl-functional",
  "name": "System Implementation — Functional",
  "subtitle": "Agentic technical & privacy audit — System Implementation — Functional",
  "description": "Audit System Implementation — Functional end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🧩",
  "color": "Purple",
  "unlocked": true
};

export const sysimplFunctionalStages: StageConfig[] = [
  {
    "epochId": "sysimpl-functional",
    "id": "sif-01",
    "order": 1,
    "title": "Project management",
    "subtitle": "Agentic technical & privacy audit of the project management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Project management\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Project management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the project management control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-01-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Project management",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Project management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the project management control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Project management\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the project management control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Project management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_project_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_project_management_mcp.py` to expose it to your agent — or `python 01_project_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Project management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the project management control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Project management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the project management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_project_management_mcp.py",
          "url": "/audit-code/sysimpl-functional/01_project_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Project management\" (in-scope inventory for the project management control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Project management\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Project management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the project management control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Project management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Project management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the project management control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Project management\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Project management\" control must cover\n# fragment: project_management_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "project_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Project management\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the project management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the project management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for project management against comparable organisations in the sector",
            "Obtain evidence that the project management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Project management\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Project management\" control?",
          "options": [
            "A point-in-time screenshot of one system's project management settings, captured during the walkthrough",
            "The In-scope inventory for the project management control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the project management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's project management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Project management\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how project management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Project management\"?",
          "options": [
            "The external audit firm, since it is the party examining the project management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the project management data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Project management\", which part stays with the human auditor?",
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
          "id": "sif-01-q7",
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
          "id": "sif-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Project management\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the project management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the project management control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-01-q9",
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
          "id": "sif-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Project management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind project management, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-02",
    "order": 2,
    "title": "Design and requirements",
    "subtitle": "Agentic technical & privacy audit of the design and requirements control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Design and requirements\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Design and requirements\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the design and requirements control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-02-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Design and requirements",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Design and requirements\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the design and requirements control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Design and requirements\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the design and requirements control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Design and requirements\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_design_and_requirements_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_design_and_requirements_mcp.py` to expose it to your agent — or `python 02_design_and_requirements_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Design and requirements\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the design and requirements control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Design and requirements\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the design and requirements control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_design_and_requirements_mcp.py",
          "url": "/audit-code/sysimpl-functional/02_design_and_requirements_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Design and requirements\" (in-scope inventory for the design and requirements control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Design and requirements\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Design and requirements\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the design and requirements control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Design and requirements\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Design and requirements\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the design and requirements control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Design and requirements\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Design and requirements\" control must cover\n# fragment: design_requirements_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "design_requirements_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Design and requirements\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the design and requirements control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the design and requirements control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for design and requirements against comparable organisations in the sector",
            "Obtain evidence that the design and requirements control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Design and requirements\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Design and requirements\" control?",
          "options": [
            "A point-in-time screenshot of one system's design and requirements settings, captured during the walkthrough",
            "The In-scope inventory for the design and requirements control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the design and requirements control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's design and requirements capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Design and requirements\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how design and requirements works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Design and requirements\"?",
          "options": [
            "The external audit firm, since it is the party examining the design and requirements control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the design and requirements data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Design and requirements\", which part stays with the human auditor?",
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
          "id": "sif-02-q7",
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
          "id": "sif-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Design and requirements\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the design and requirements control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the design and requirements control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-02-q9",
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
          "id": "sif-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Design and requirements\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind design and requirements, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-03",
    "order": 3,
    "title": "Development",
    "subtitle": "Agentic technical & privacy audit of the development control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Development\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the development control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-03-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Development",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Development\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the development control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Development\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the development control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_development_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_development_mcp.py` to expose it to your agent — or `python 03_development_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Development\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the development control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_development_mcp.py",
          "url": "/audit-code/sysimpl-functional/03_development_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Development\" (in-scope inventory for the development control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Development\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the development control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Development\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Development\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the development control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Development\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Development\" control must cover\n# fragment: development_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "development_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Development\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the development control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the development control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for development against comparable organisations in the sector",
            "Obtain evidence that the development control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Development\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Development\" control?",
          "options": [
            "A point-in-time screenshot of one system's development settings, captured during the walkthrough",
            "The In-scope inventory for the development control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the development control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's development capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Development\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how development works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Development\"?",
          "options": [
            "The external audit firm, since it is the party examining the development control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the development data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Development\", which part stays with the human auditor?",
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
          "id": "sif-03-q7",
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
          "id": "sif-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Development\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the development control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-03-q9",
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
          "id": "sif-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Development\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind development, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-04",
    "order": 4,
    "title": "Testing",
    "subtitle": "Agentic technical & privacy audit of the testing control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Testing\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the testing control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-04-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Testing",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Testing\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the testing control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Testing\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the testing control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_testing_mcp.py` to expose it to your agent — or `python 04_testing_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Testing\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the testing control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Testing\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the testing control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_testing_mcp.py",
          "url": "/audit-code/sysimpl-functional/04_testing_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Testing\" (in-scope inventory for the testing control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Testing\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the testing control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Testing\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Testing\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the testing control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Testing\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Testing\" control must cover\n# fragment: testing_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "testing_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Testing\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the testing control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the testing control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for testing against comparable organisations in the sector",
            "Obtain evidence that the testing control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Testing\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Testing\" control?",
          "options": [
            "A point-in-time screenshot of one system's testing settings, captured during the walkthrough",
            "The In-scope inventory for the testing control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the testing control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's testing capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Testing\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Testing\"?",
          "options": [
            "The external audit firm, since it is the party examining the testing control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the testing data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Testing\", which part stays with the human auditor?",
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
          "id": "sif-04-q7",
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
          "id": "sif-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Testing\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the testing control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the testing control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-04-q9",
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
          "id": "sif-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Testing\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind testing, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-05",
    "order": 5,
    "title": "Implement (go-live)",
    "subtitle": "Agentic technical & privacy audit of the implement (go-live) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Implement (go-live)\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Implement (go-live)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the implement (go-live) control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-05-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Implement (go-live)",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Implement (go-live)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the implement (go-live) control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Implement (go-live)\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the implement (go-live) control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Implement (go-live)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_implement_go_live_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_implement_go_live_mcp.py` to expose it to your agent — or `python 05_implement_go_live_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Implement (go-live)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the implement (go-live) control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Implement (go-live)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the implement (go-live) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_implement_go_live_mcp.py",
          "url": "/audit-code/sysimpl-functional/05_implement_go_live_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Implement (go-live)\" (in-scope inventory for the implement (go-live) control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Implement (go-live)\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Implement (go-live)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the implement (go-live) control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Implement (go-live)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Implement (go-live)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the implement (go-live) control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Implement (go-live)\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Implement (go-live)\" control must cover\n# fragment: implement_golive_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "implement_golive_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Implement (go-live)\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the implement (go-live) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the implement (go-live) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for implement (go-live) against comparable organisations in the sector",
            "Obtain evidence that the implement (go-live) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Implement (go-live)\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Implement (go-live)\" control?",
          "options": [
            "A point-in-time screenshot of one system's implement (go-live) settings, captured during the walkthrough",
            "The In-scope inventory for the implement (go-live) control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the implement (go-live) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's implement (go-live) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Implement (go-live)\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how implement (go-live) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Implement (go-live)\"?",
          "options": [
            "The external audit firm, since it is the party examining the implement (go-live) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the implement (go-live) data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Implement (go-live)\", which part stays with the human auditor?",
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
          "id": "sif-05-q7",
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
          "id": "sif-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Implement (go-live)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the implement (go-live) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the implement (go-live) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-05-q9",
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
          "id": "sif-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Implement (go-live)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind implement (go-live), so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-06",
    "order": 6,
    "title": "Cutover",
    "subtitle": "Agentic technical & privacy audit of the cutover control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cutover\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cutover control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-06-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Cutover",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cutover\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cutover control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Cutover\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cutover control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_cutover_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_cutover_mcp.py` to expose it to your agent — or `python 06_cutover_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cutover\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cutover control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_cutover_mcp.py",
          "url": "/audit-code/sysimpl-functional/06_cutover_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Cutover\" (in-scope inventory for the cutover control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cutover\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cutover control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Cutover\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Cutover\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the cutover control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cutover\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cutover\" control must cover\n# fragment: cutover_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "cutover_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cutover\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the cutover control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the cutover control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for cutover against comparable organisations in the sector",
            "Obtain evidence that the cutover control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cutover\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cutover\" control?",
          "options": [
            "A point-in-time screenshot of one system's cutover settings, captured during the walkthrough",
            "The In-scope inventory for the cutover control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cutover control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cutover capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cutover\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cutover works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cutover\"?",
          "options": [
            "The external audit firm, since it is the party examining the cutover control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cutover data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cutover\", which part stays with the human auditor?",
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
          "id": "sif-06-q7",
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
          "id": "sif-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cutover\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cutover control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-06-q9",
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
          "id": "sif-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cutover\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind cutover, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-07",
    "order": 7,
    "title": "Data conversion and migration",
    "subtitle": "Agentic technical & privacy audit of the data conversion and migration control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data conversion and migration\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data conversion and migration control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-07-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Data conversion and migration",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data conversion and migration\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data conversion and migration control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Data conversion and migration\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data conversion and migration control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_data_conversion_and_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_data_conversion_and_migration_mcp.py` to expose it to your agent — or `python 07_data_conversion_and_migration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data conversion and migration\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data conversion and migration control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_data_conversion_and_migration_mcp.py",
          "url": "/audit-code/sysimpl-functional/07_data_conversion_and_migration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Data conversion and migration\" (in-scope inventory for the data conversion and migration control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data conversion and migration\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data conversion and migration control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Data conversion and migration\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Data conversion and migration\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the data conversion and migration control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data conversion and migration\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data conversion and migration\" control must cover\n# fragment: data_conversion_migration_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "data_conversion_migration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data conversion and migration\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the data conversion and migration control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data conversion and migration control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data conversion and migration against comparable organisations in the sector",
            "Obtain evidence that the data conversion and migration control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data conversion and migration\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data conversion and migration\" control?",
          "options": [
            "A point-in-time screenshot of one system's data conversion and migration settings, captured during the walkthrough",
            "The In-scope inventory for the data conversion and migration control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data conversion and migration control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data conversion and migration capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data conversion and migration\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data conversion and migration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data conversion and migration\"?",
          "options": [
            "The external audit firm, since it is the party examining the data conversion and migration control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data conversion and migration data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data conversion and migration\", which part stays with the human auditor?",
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
          "id": "sif-07-q7",
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
          "id": "sif-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data conversion and migration\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data conversion and migration control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-07-q9",
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
          "id": "sif-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data conversion and migration\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data conversion and migration, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-08",
    "order": 8,
    "title": "Support and maintenance",
    "subtitle": "Agentic technical & privacy audit of the support and maintenance control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Support and maintenance\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Support and maintenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the support and maintenance control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-08-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Support and maintenance",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Support and maintenance\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the support and maintenance control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Support and maintenance\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the support and maintenance control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Support and maintenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_support_and_maintenance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_support_and_maintenance_mcp.py` to expose it to your agent — or `python 08_support_and_maintenance_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Support and maintenance\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the support and maintenance control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Support and maintenance\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the support and maintenance control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_support_and_maintenance_mcp.py",
          "url": "/audit-code/sysimpl-functional/08_support_and_maintenance_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Support and maintenance\" (in-scope inventory for the support and maintenance control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Support and maintenance\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Support and maintenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the support and maintenance control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Support and maintenance\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Support and maintenance\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the support and maintenance control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Support and maintenance\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Support and maintenance\" control must cover\n# fragment: support_maintenance_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "support_maintenance_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Support and maintenance\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the support and maintenance control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the support and maintenance control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for support and maintenance against comparable organisations in the sector",
            "Obtain evidence that the support and maintenance control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Support and maintenance\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Support and maintenance\" control?",
          "options": [
            "A point-in-time screenshot of one system's support and maintenance settings, captured during the walkthrough",
            "The In-scope inventory for the support and maintenance control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the support and maintenance control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's support and maintenance capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Support and maintenance\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how support and maintenance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Support and maintenance\"?",
          "options": [
            "The external audit firm, since it is the party examining the support and maintenance control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the support and maintenance data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Support and maintenance\", which part stays with the human auditor?",
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
          "id": "sif-08-q7",
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
          "id": "sif-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Support and maintenance\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the support and maintenance control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the support and maintenance control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-08-q9",
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
          "id": "sif-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Support and maintenance\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind support and maintenance, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-09",
    "order": 9,
    "title": "Steering committee",
    "subtitle": "Agentic technical & privacy audit of the steering committee control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Steering committee\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Steering committee\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the steering committee control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-09-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Steering committee",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Steering committee\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the steering committee control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Steering committee\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the steering committee control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Steering committee\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_steering_committee_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_steering_committee_mcp.py` to expose it to your agent — or `python 09_steering_committee_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Steering committee\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the steering committee control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Steering committee\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the steering committee control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_steering_committee_mcp.py",
          "url": "/audit-code/sysimpl-functional/09_steering_committee_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Steering committee\" (in-scope inventory for the steering committee control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Steering committee\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Steering committee\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the steering committee control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Steering committee\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Steering committee\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the steering committee control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Steering committee\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Steering committee\" control must cover\n# fragment: steering_committee_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "steering_committee_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Steering committee\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the steering committee control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the steering committee control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for steering committee against comparable organisations in the sector",
            "Obtain evidence that the steering committee control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Steering committee\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Steering committee\" control?",
          "options": [
            "A point-in-time screenshot of one system's steering committee settings, captured during the walkthrough",
            "The In-scope inventory for the steering committee control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the steering committee control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's steering committee capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Steering committee\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how steering committee works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Steering committee\"?",
          "options": [
            "The external audit firm, since it is the party examining the steering committee control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the steering committee data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Steering committee\", which part stays with the human auditor?",
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
          "id": "sif-09-q7",
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
          "id": "sif-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Steering committee\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the steering committee control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the steering committee control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-09-q9",
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
          "id": "sif-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Steering committee\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind steering committee, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-10",
    "order": 10,
    "title": "Audit and compliance involvement",
    "subtitle": "Agentic technical & privacy audit of the audit and compliance involvement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit and compliance involvement\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the audit and compliance involvement control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-10-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Audit and compliance involvement",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit and compliance involvement\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the audit and compliance involvement control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Audit and compliance involvement\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the audit and compliance involvement control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_audit_and_compliance_involvement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_audit_and_compliance_involvement_mcp.py` to expose it to your agent — or `python 10_audit_and_compliance_involvement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit and compliance involvement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the audit and compliance involvement control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_audit_and_compliance_involvement_mcp.py",
          "url": "/audit-code/sysimpl-functional/10_audit_and_compliance_involvement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Audit and compliance involvement\" (in-scope inventory for the audit and compliance involvement control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and compliance involvement\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the audit and compliance involvement control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Audit and compliance involvement\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Audit and compliance involvement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the audit and compliance involvement control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit and compliance involvement\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit and compliance involvement\" control must cover\n# fragment: audit_compliance_involvement_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "audit_compliance_involvement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit and compliance involvement\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the audit and compliance involvement control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the audit and compliance involvement control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for audit and compliance involvement against comparable organisations in the sector",
            "Obtain evidence that the audit and compliance involvement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit and compliance involvement\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit and compliance involvement\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit and compliance involvement settings, captured during the walkthrough",
            "The In-scope inventory for the audit and compliance involvement control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit and compliance involvement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit and compliance involvement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit and compliance involvement\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and compliance involvement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit and compliance involvement\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit and compliance involvement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit and compliance involvement data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit and compliance involvement\", which part stays with the human auditor?",
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
          "id": "sif-10-q7",
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
          "id": "sif-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit and compliance involvement\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the audit and compliance involvement control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-10-q9",
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
          "id": "sif-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit and compliance involvement\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind audit and compliance involvement, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-11",
    "order": 11,
    "title": "Vendor due diligence",
    "subtitle": "Agentic technical & privacy audit of the vendor due diligence control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor due diligence\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Vendor due diligence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor due diligence control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-11-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Vendor due diligence",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor due diligence\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor due diligence control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Vendor due diligence\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor due diligence control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Vendor due diligence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_vendor_due_diligence_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_vendor_due_diligence_mcp.py` to expose it to your agent — or `python 11_vendor_due_diligence_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor due diligence\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor due diligence control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Vendor due diligence\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor due diligence control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_vendor_due_diligence_mcp.py",
          "url": "/audit-code/sysimpl-functional/11_vendor_due_diligence_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Vendor due diligence\" (in-scope inventory for the vendor due diligence control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor due diligence\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Vendor due diligence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor due diligence control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Vendor due diligence\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Vendor due diligence\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the vendor due diligence control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor due diligence\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor due diligence\" control must cover\n# fragment: vendor_due_diligence_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "vendor_due_diligence_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor due diligence\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the vendor due diligence control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor due diligence control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor due diligence against comparable organisations in the sector",
            "Obtain evidence that the vendor due diligence control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor due diligence\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor due diligence\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor due diligence settings, captured during the walkthrough",
            "The In-scope inventory for the vendor due diligence control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor due diligence control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor due diligence capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor due diligence\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor due diligence works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor due diligence\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor due diligence control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor due diligence data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor due diligence\", which part stays with the human auditor?",
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
          "id": "sif-11-q7",
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
          "id": "sif-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor due diligence\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor due diligence control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor due diligence control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-11-q9",
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
          "id": "sif-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor due diligence\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor due diligence, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-12",
    "order": 12,
    "title": "Contract and SLA review",
    "subtitle": "Agentic technical & privacy audit of the contract and sla review control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Contract and SLA review\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Contract and SLA review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the contract and sla review control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-12-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Contract and SLA review",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Contract and SLA review\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the contract and sla review control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Contract and SLA review\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the contract and sla review control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Contract and SLA review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_contract_and_sla_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_contract_and_sla_review_mcp.py` to expose it to your agent — or `python 12_contract_and_sla_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Contract and SLA review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the contract and sla review control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Contract and SLA review\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the contract and sla review control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_contract_and_sla_review_mcp.py",
          "url": "/audit-code/sysimpl-functional/12_contract_and_sla_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Contract and SLA review\" (in-scope inventory for the contract and sla review control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Contract and SLA review\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Contract and SLA review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the contract and sla review control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Contract and SLA review\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Contract and SLA review\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the contract and sla review control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Contract and SLA review\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Contract and SLA review\" control must cover\n# fragment: contract_sla_review_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "contract_sla_review_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Contract and SLA review\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the contract and sla review control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the contract and sla review control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for contract and sla review against comparable organisations in the sector",
            "Obtain evidence that the contract and sla review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Contract and SLA review\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Contract and SLA review\" control?",
          "options": [
            "A point-in-time screenshot of one system's contract and sla review settings, captured during the walkthrough",
            "The In-scope inventory for the contract and sla review control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the contract and sla review control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's contract and sla review capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Contract and SLA review\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how contract and sla review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Contract and SLA review\"?",
          "options": [
            "The external audit firm, since it is the party examining the contract and sla review control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the contract and sla review data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Contract and SLA review\", which part stays with the human auditor?",
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
          "id": "sif-12-q7",
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
          "id": "sif-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Contract and SLA review\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the contract and sla review control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the contract and sla review control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-12-q9",
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
          "id": "sif-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Contract and SLA review\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind contract and sla review, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-13",
    "order": 13,
    "title": "Escrow agreement",
    "subtitle": "Agentic technical & privacy audit of the escrow agreement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Escrow agreement\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Escrow agreement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the escrow agreement control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-13-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Escrow agreement",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Escrow agreement\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the escrow agreement control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Escrow agreement\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the escrow agreement control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Escrow agreement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_escrow_agreement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_escrow_agreement_mcp.py` to expose it to your agent — or `python 13_escrow_agreement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Escrow agreement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the escrow agreement control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Escrow agreement\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the escrow agreement control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_escrow_agreement_mcp.py",
          "url": "/audit-code/sysimpl-functional/13_escrow_agreement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Escrow agreement\" (in-scope inventory for the escrow agreement control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Escrow agreement\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Escrow agreement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the escrow agreement control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Escrow agreement\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Escrow agreement\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the escrow agreement control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Escrow agreement\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Escrow agreement\" control must cover\n# fragment: escrow_agreement_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "escrow_agreement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Escrow agreement\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the escrow agreement control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the escrow agreement control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for escrow agreement against comparable organisations in the sector",
            "Obtain evidence that the escrow agreement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Escrow agreement\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Escrow agreement\" control?",
          "options": [
            "A point-in-time screenshot of one system's escrow agreement settings, captured during the walkthrough",
            "The In-scope inventory for the escrow agreement control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the escrow agreement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's escrow agreement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Escrow agreement\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how escrow agreement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Escrow agreement\"?",
          "options": [
            "The external audit firm, since it is the party examining the escrow agreement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the escrow agreement data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Escrow agreement\", which part stays with the human auditor?",
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
          "id": "sif-13-q7",
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
          "id": "sif-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Escrow agreement\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the escrow agreement control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the escrow agreement control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-13-q9",
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
          "id": "sif-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Escrow agreement\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind escrow agreement, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-14",
    "order": 14,
    "title": "Return on investment",
    "subtitle": "Agentic technical & privacy audit of the return on investment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Return on investment\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Return on investment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the return on investment control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-14-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Return on investment",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Return on investment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the return on investment control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Return on investment\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the return on investment control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Return on investment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_return_on_investment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_return_on_investment_mcp.py` to expose it to your agent — or `python 14_return_on_investment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Return on investment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the return on investment control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Return on investment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the return on investment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_return_on_investment_mcp.py",
          "url": "/audit-code/sysimpl-functional/14_return_on_investment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Return on investment\" (in-scope inventory for the return on investment control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Return on investment\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Return on investment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the return on investment control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Return on investment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Return on investment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the return on investment control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Return on investment\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Return on investment\" control must cover\n# fragment: return_on_investment_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "return_on_investment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Return on investment\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the return on investment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the return on investment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for return on investment against comparable organisations in the sector",
            "Obtain evidence that the return on investment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Return on investment\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Return on investment\" control?",
          "options": [
            "A point-in-time screenshot of one system's return on investment settings, captured during the walkthrough",
            "The In-scope inventory for the return on investment control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the return on investment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's return on investment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Return on investment\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how return on investment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Return on investment\"?",
          "options": [
            "The external audit firm, since it is the party examining the return on investment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the return on investment data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Return on investment\", which part stays with the human auditor?",
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
          "id": "sif-14-q7",
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
          "id": "sif-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Return on investment\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the return on investment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the return on investment control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-14-q9",
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
          "id": "sif-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Return on investment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind return on investment, so there is no overlap",
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
    "epochId": "sysimpl-functional",
    "id": "sif-15",
    "order": 15,
    "title": "Training and knowledge transfer",
    "subtitle": "Agentic technical & privacy audit of the training and knowledge transfer control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Training and knowledge transfer\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Training and knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements / design records; Test management; Deployment pipeline) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the training and knowledge transfer control (from Requirements / design records)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "Requirements / design records",
        "Test management",
        "Deployment pipeline",
        "Vendor / SLA documentation"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "QA",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Functional controls."
      }
    },
    "badge": {
      "id": "sif-15-badge",
      "name": "System Implementation — Functional Auditor",
      "emoji": "🧩"
    },
    "wonder": {
      "name": "Training and knowledge transfer",
      "location": "System Implementation — Functional",
      "era": "Present Day",
      "emoji": "🧩"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Training and knowledge transfer\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the training and knowledge transfer control (from Requirements / design records)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Training and knowledge transfer\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the training and knowledge transfer control (from Requirements / design records), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements / design records, Test management, Deployment pipeline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Training and knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_training_and_knowledge_transfer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements / design records and Test management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_training_and_knowledge_transfer_mcp.py` to expose it to your agent — or `python 15_training_and_knowledge_transfer_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Requirements gap reaches production",
        "when": "Recurring",
        "where": "Functional system implementations",
        "impact": "An unverified requirement or untested path ships, and the defect surfaces as a business or compliance failure after go-live.",
        "body": [
          "At the functional level, projects falter when requirements, design, and testing aren't traceable, so go-live carries unknown defects.",
          "Auditors verify project management, requirements/design traceability, testing rigor, cutover, data migration, and vendor/SLA controls."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Functional scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Requirements / design records · Test management",
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
          "year": 2020,
          "event": "Public-sector system rollouts fail UAT-to-prod traceability",
          "highlight": true
        },
        {
          "year": 2022,
          "event": "Requirements/testing gaps remain the top implementation finding"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Training and knowledge transfer\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the training and knowledge transfer control (from Requirements / design records).",
        "The test: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Training and knowledge transfer\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (Requirements / design records, Test management, Deployment pipeline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the training and knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "ISACA IS audit guidance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_training_and_knowledge_transfer_mcp.py",
          "url": "/audit-code/sysimpl-functional/15_training_and_knowledge_transfer_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Training and knowledge transfer\" (in-scope inventory for the training and knowledge transfer control (from requirements / design records)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Training and knowledge transfer\" control for System Implementation — Functional at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Training and knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the training and knowledge transfer control (from Requirements / design records) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements / design records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements / design records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements / design records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Training and knowledge transfer\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the System Implementation — Functional policy/standard and flag every item where the \"Training and knowledge transfer\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — In-scope inventory for the training and knowledge transfer control (from Requirements / design records))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Training and knowledge transfer\",\n  \"domain\": \"System Implementation — Functional\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sif_",
        "/evidence/sysimpl-functional_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Project management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Training and knowledge transfer\" control must cover\n# fragment: training_knowledge_transfer_",
        "/evidence/sysimpl-functional_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-functional_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-functional_state.json",
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
          "value": "FLAG{sif_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-functional_inventory.json",
          "value": "training_knowledge_transfer_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-functional_state.json",
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
          "id": "sif-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Training and knowledge transfer\" sub-process of System Implementation — Functional?",
          "options": [
            "Deploy and operate the training and knowledge transfer control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the training and knowledge transfer control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for training and knowledge transfer against comparable organisations in the sector",
            "Obtain evidence that the training and knowledge transfer control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sif-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Training and knowledge transfer\" matter to the broader System Implementation — Functional posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Functional",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Functional estate",
            "It is a control other System Implementation — Functional controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Functional controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sif-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Training and knowledge transfer\" control?",
          "options": [
            "A point-in-time screenshot of one system's training and knowledge transfer settings, captured during the walkthrough",
            "The In-scope inventory for the training and knowledge transfer control (from Requirements / design records), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the training and knowledge transfer control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's training and knowledge transfer capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sif-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Training and knowledge transfer\"?",
          "options": [
            "From Requirements / design records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how training and knowledge transfer works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements / design records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sif-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Training and knowledge transfer\"?",
          "options": [
            "The external audit firm, since it is the party examining the training and knowledge transfer control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the training and knowledge transfer data is shared, so the accountability sits with no one in particular",
            "Project management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sif-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Training and knowledge transfer\", which part stays with the human auditor?",
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
          "id": "sif-15-q7",
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
          "id": "sif-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Training and knowledge transfer\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the training and knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the training and knowledge transfer control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sif-15-q9",
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
          "id": "sif-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Training and knowledge transfer\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind training and knowledge transfer, so there is no overlap",
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
