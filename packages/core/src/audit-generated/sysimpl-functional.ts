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
      "objective": "Prove the \"Project management\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the functional project is managed with basic discipline. PASS: a baselined plan (scope/schedule/budget) with an active RAID log, status tracked to baseline, scope change-control, and milestone sign-offs before progressing. Exceptions: no plan or risk/issue log, status not tracked to baseline, uncontrolled scope change, and phases advancing with no sign-off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Project tracking tooling; RAID / issue log; Schedule / budget baseline) as tools — e.g. `baselined plan (scope/schedule/budget) + RAID log`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline)",
        "Scope/change control + the issue/risk log being actively worked",
        "Requirements traceability ownership + the decision log",
        "Milestone/stage sign-offs before progressing"
      ],
      "system": [
        "Project tracking tooling",
        "RAID / issue log",
        "Schedule / budget baseline",
        "Milestone sign-off records"
      ],
      "dataOwner": [
        "Project management",
        "Business analysts / process owners",
        "Sponsor"
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
      "tagline": "Auditing \"Project management\" as a repeatable agentic workflow: pull the real evidence (The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Project management\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Project tracking tooling, RAID / issue log, Schedule / budget baseline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `baselined plan (scope/schedule/budget) + RAID log` — read-only, against the systems of record.",
        "The test itself is specific. Verify the functional project is managed with basic discipline. PASS: a baselined plan (scope/schedule/budget) with an active RAID log, status tracked to baseline, scope change-control, and milestone sign-offs before progressing. Exceptions: no plan or risk/issue log, status not tracked to baseline, uncontrolled scope change, and phases advancing with no sign-off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_project_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Project tracking tooling and RAID / issue log (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Project tracking tooling · RAID / issue log",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "baselined plan (scope/schedule/budget) + RAID log\nscope/change control + active issue/risk log\nrequirements traceability + decision log\nmilestone sign-offs before progressing"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline).",
        "The test: Verify the functional project is managed with basic discipline.",
        "Reconcile the systems of record (Project tracking tooling, RAID / issue log, Schedule / budget baseline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The project has no baselined plan or risk log; status meetings track activity, not progress against a baseline, scope expanded informally, and phases advanced with no milestone sign-off."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISO/IEC/IEEE 29119",
          "url": "https://www.iso.org/standard/81291.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Project management\" (the project plan + controls (scope, schedule, budget, the raid log, status reporting against baseline)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Project management\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the functional project is managed with basic discipline. PASS: a baselined plan (scope/schedule/budget) with an active RAID log, status tracked to baseline, scope change-control, and milestone sign-offs before progressing. Exceptions: no plan or risk/issue log, status not tracked to baseline, uncontrolled scope change, and phases advancing with no sign-off. The evidence — The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Project tracking tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Project tracking tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Project tracking tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Project management\" Audit Evidence\n\nThe test:\nVerify the functional project is managed with basic discipline. PASS: a baselined plan (scope/schedule/budget) with an active RAID log, status tracked to baseline, scope change-control, and milestone sign-offs before progressing. Exceptions: no plan or risk/issue log, status not tracked to baseline, uncontrolled scope change, and phases advancing with no sign-off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The project plan + controls (scope, schedule, budget, the RAID log, status reporting against baseline), reconciled against policy, plus the resulting findings working paper",
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
            "From Project tracking tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how project management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Project tracking tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "The project has no baselined plan or risk log; status meetings track activity, not progress against a baseline, scope expanded informally, and phases advanced with no milestone sign-off.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The project has no baselined plan or risk log; status meetings track activity, not progress against a baseline, scope expanded informally, and phases advanced with no milestone sign-off. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Design and requirements\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify requirements + design are complete + traceable. PASS: business/functional requirements are documented, testable, prioritised, and signed off; design traces to them (fit-gap, integration, reports/interfaces); a traceability matrix links requirement→design→build→test; and NFRs are captured. Exceptions: vague/unsigned requirements, design not traced to requirements, no traceability matrix (scope drift), and missing NFRs (performance/security as an afterthought).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Requirements management; Design specifications + fit-gap; Traceability matrix) as tools — e.g. `documented + approved business/functional requirements (testable, prio`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised)",
        "The functional + technical design traced to those requirements (design specs, fit-gap vs the package, the integration + report/interface design)",
        "Requirements traceability matrix (requirement → design → build → test)",
        "Non-functional requirements captured (performance, security, usability, availability)"
      ],
      "system": [
        "Requirements management",
        "Design specifications + fit-gap",
        "Traceability matrix",
        "NFR documentation"
      ],
      "dataOwner": [
        "Business analysts + process owners",
        "Solution / functional designers",
        "QA (traceability)"
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
      "tagline": "Auditing \"Design and requirements\" as a repeatable agentic workflow: pull the real evidence (The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Design and requirements\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the documented + approved business/functional requirements (signed off by the process owners; testable, prioritised), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Requirements management, Design specifications + fit-gap, Traceability matrix — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `documented + approved business/functional requirements (testable, prioritised, s` — read-only, against the systems of record.",
        "The test itself is specific. Verify requirements + design are complete + traceable. PASS: business/functional requirements are documented, testable, prioritised, and signed off; design traces to them (fit-gap, integration, reports/interfaces); a traceability matrix links requirement→design→build→test; and NFRs are captured. Exceptions: vague/unsigned requirements, design not traced to requirements, no traceability matrix (scope drift), and missing NFRs (performance/security as an afterthought). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_design_and_requirements_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Requirements management and Design specifications + fit-gap (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Requirements management · Design specifications + fit-gap",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "documented + approved business/functional requirements (testable, prioritised, signed off)\nfunctional + technical design traced to requirements (fit-gap, integration, reports/interfaces)\nrequirements traceability matrix (requirement → design → build → test)\nnon-functional requirements (performance, security, usability, availability)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised).",
        "The test: Verify requirements + design are complete + traceable.",
        "Reconcile the systems of record (Requirements management, Design specifications + fit-gap, Traceability matrix) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Requirements were captured in informal notes, never signed off by the process owners, and there's no traceability matrix — so the design and build drifted from what the business actually needed, and the gap surfaced only in production."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "BABOK — Business Analysis",
          "url": "https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Design and requirements\" (the documented + approved business/functional requirements (signed off by the process owners; testable, prioritised)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Design and requirements\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify requirements + design are complete + traceable. PASS: business/functional requirements are documented, testable, prioritised, and signed off; design traces to them (fit-gap, integration, reports/interfaces); a traceability matrix links requirement→design→build→test; and NFRs are captured. Exceptions: vague/unsigned requirements, design not traced to requirements, no traceability matrix (scope drift), and missing NFRs (performance/security as an afterthought). The evidence — The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Requirements management APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Requirements management gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Requirements management; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Design and requirements\" Audit Evidence\n\nThe test:\nVerify requirements + design are complete + traceable. PASS: business/functional requirements are documented, testable, prioritised, and signed off; design traces to them (fit-gap, integration, reports/interfaces); a traceability matrix links requirement→design→build→test; and NFRs are captured. Exceptions: vague/unsigned requirements, design not traced to requirements, no traceability matrix (scope drift), and missing NFRs (performance/security as an afterthought).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The documented + approved business/functional requirements (signed off by the process owners; testable, prioritised), reconciled against policy, plus the resulting findings working paper",
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
            "From Requirements management and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how design and requirements works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Requirements management) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Business analysts + process owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Business analysts + process owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Requirements were captured in informal notes, never signed off by the process owners, and there's no traceability matrix — so the design and build drifted from what the business actually needed, and the gap surfaced only in production.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Requirements were captured in informal notes, never signed off by the process owners, and there's no traceability matrix — so the design and build drifted from what the business actually needed, and the gap surfaced only in production. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Development\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify development/configuration is controlled. PASS: development uses version control, peer review, separated environments, and a controlled promotion process; build traces to approved design; custom code gets security review (SAST/dependency/secrets); and promotion is approval-gated. Exceptions: building in shared/unversioned environments, no design-to-build traceability, no security review of custom code, and unapproved promotion to prod.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Version control + build process; Design ↔ build traceability; SAST / dependency scanning) as tools — e.g. `dev/config standards: version control + peer review + environment sepa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process)",
        "Traceability from approved design to the built configuration/code",
        "Secure coding for custom code (review, dependency/SAST scanning, secrets handling)",
        "Defect tracking + the dev→test→prod promotion with approvals"
      ],
      "system": [
        "Version control + build process",
        "Design ↔ build traceability",
        "SAST / dependency scanning",
        "Promotion controls"
      ],
      "dataOwner": [
        "Developers / configurers",
        "Business analysts (traceability)",
        "AppSec"
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
      "tagline": "Auditing \"Development\" as a repeatable agentic workflow: pull the real evidence (The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Development\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Version control + build process, Design ↔ build traceability, SAST / dependency scanning — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `dev/config standards: version control + peer review + environment separation + p` — read-only, against the systems of record.",
        "The test itself is specific. Verify development/configuration is controlled. PASS: development uses version control, peer review, separated environments, and a controlled promotion process; build traces to approved design; custom code gets security review (SAST/dependency/secrets); and promotion is approval-gated. Exceptions: building in shared/unversioned environments, no design-to-build traceability, no security review of custom code, and unapproved promotion to prod. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_development_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Version control + build process and Design ↔ build traceability (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Version control + build process · Design ↔ build traceability",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "dev/config standards: version control + peer review + environment separation + promotion process\ntraceability: approved design → built config/code\nsecure coding for custom code (review + SAST/dependency + secrets)\ndev→test→prod promotion with approvals"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process).",
        "The test: Verify development/configuration is controlled.",
        "Reconcile the systems of record (Version control + build process, Design ↔ build traceability, SAST / dependency scanning) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Configuration and custom code were built straight in a shared environment with no version control, peer review, or security scan, and there's no traceability tying the build back to the approved design."
      ],
      "references": [
        {
          "title": "NIST SP 800-218 (SSDF)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "ISO/IEC/IEEE 29119",
          "url": "https://www.iso.org/standard/81291.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Development\" (the development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Development\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify development/configuration is controlled. PASS: development uses version control, peer review, separated environments, and a controlled promotion process; build traces to approved design; custom code gets security review (SAST/dependency/secrets); and promotion is approval-gated. Exceptions: building in shared/unversioned environments, no design-to-build traceability, no security review of custom code, and unapproved promotion to prod. The evidence — The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Version control + build process APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Version control + build process gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Version control + build process; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Development\" Audit Evidence\n\nThe test:\nVerify development/configuration is controlled. PASS: development uses version control, peer review, separated environments, and a controlled promotion process; build traces to approved design; custom code gets security review (SAST/dependency/secrets); and promotion is approval-gated. Exceptions: building in shared/unversioned environments, no design-to-build traceability, no security review of custom code, and unapproved promotion to prod.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The development/configuration standards + evidence (version control, peer review, environment separation, the build/promotion process), reconciled against policy, plus the resulting findings working paper",
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
            "From Version control + build process and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how development works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Version control + build process) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Developers / configurers, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Developers / configurers owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Configuration and custom code were built straight in a shared environment with no version control, peer review, or security scan, and there's no traceability tying the build back to the approved design.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Configuration and custom code were built straight in a shared environment with no version control, peer review, or security scan, and there's no traceability tying the build back to the approved design. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Testing\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify testing is adequate before go-live. PASS: a test plan covers functional/integration/regression/UAT with entry/exit criteria, test cases trace to requirements, defects are tracked with severity-based closure, the business signs off UAT, and interfaces/reports are tested. Exceptions: only ad-hoc/happy-path testing, no requirements-to-test traceability, high-severity defects waived to make the date, and no business UAT sign-off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Test management + defect tracking; Requirements ↔ test traceability; UAT sign-off) as tools — e.g. `test plan: functional + integration + regression + UAT (entry/exit cri`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The test plan covering functional + integration + regression + UAT (with entry/exit criteria)",
        "Test cases traced to requirements + the defect log with severity-based closure",
        "UAT sign-off by the business before go-live",
        "Evidence high-severity defects were resolved (not waived) and interfaces/reports were tested"
      ],
      "system": [
        "Test management + defect tracking",
        "Requirements ↔ test traceability",
        "UAT sign-off",
        "Interface / report test evidence"
      ],
      "dataOwner": [
        "QA / test",
        "Business process owners (UAT)",
        "Developers (defect fix)"
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
      "tagline": "Auditing \"Testing\" as a repeatable agentic workflow: pull the real evidence (The test plan covering functional + integration + regression + UAT (with entry/exit criteria)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Testing\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the test plan covering functional + integration + regression + UAT (with entry/exit criteria), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Test management + defect tracking, Requirements ↔ test traceability, UAT sign-off — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `test plan: functional + integration + regression + UAT (entry/exit criteria)` — read-only, against the systems of record.",
        "The test itself is specific. Verify testing is adequate before go-live. PASS: a test plan covers functional/integration/regression/UAT with entry/exit criteria, test cases trace to requirements, defects are tracked with severity-based closure, the business signs off UAT, and interfaces/reports are tested. Exceptions: only ad-hoc/happy-path testing, no requirements-to-test traceability, high-severity defects waived to make the date, and no business UAT sign-off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_testing_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Test management + defect tracking and Requirements ↔ test traceability (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Test management + defect tracking · Requirements ↔ test traceability",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "test plan: functional + integration + regression + UAT (entry/exit criteria)\ntest cases traced to requirements + defect log (severity-based closure)\nUAT business sign-off before go-live\ninterfaces/reports tested + high-severity defects resolved (not waived)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The test plan covering functional + integration + regression + UAT (with entry/exit criteria).",
        "The test: Verify testing is adequate before go-live.",
        "Reconcile the systems of record (Test management + defect tracking, Requirements ↔ test traceability, UAT sign-off) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Testing was ad-hoc with no traceability to requirements; integration and regression were skipped, interfaces were never tested end-to-end, open high-severity defects were waived, and the business signed nothing before go-live."
      ],
      "references": [
        {
          "title": "ISO/IEC/IEEE 29119 — Software Testing",
          "url": "https://www.iso.org/standard/81291.html"
        },
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Testing\" (the test plan covering functional + integration + regression + uat (with entry/exit criteria)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Testing\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify testing is adequate before go-live. PASS: a test plan covers functional/integration/regression/UAT with entry/exit criteria, test cases trace to requirements, defects are tracked with severity-based closure, the business signs off UAT, and interfaces/reports are tested. Exceptions: only ad-hoc/happy-path testing, no requirements-to-test traceability, high-severity defects waived to make the date, and no business UAT sign-off. The evidence — The test plan covering functional + integration + regression + UAT (with entry/exit criteria) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Test management + defect tracking APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Test management + defect tracking gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Test management + defect tracking; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Testing\" Audit Evidence\n\nThe test:\nVerify testing is adequate before go-live. PASS: a test plan covers functional/integration/regression/UAT with entry/exit criteria, test cases trace to requirements, defects are tracked with severity-based closure, the business signs off UAT, and interfaces/reports are tested. Exceptions: only ad-hoc/happy-path testing, no requirements-to-test traceability, high-severity defects waived to make the date, and no business UAT sign-off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The test plan covering functional + integration + regression + UAT (with entry/exit criteria))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The test plan covering functional + integration + regression + UAT (with entry/exit criteria), reconciled against policy, plus the resulting findings working paper",
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
            "From Test management + defect tracking and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how testing works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Test management + defect tracking) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "QA / test, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "QA / test owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Testing was ad-hoc with no traceability to requirements; integration and regression were skipped, interfaces were never tested end-to-end, open high-severity defects were waived, and the business signed nothing before go-live.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Testing was ad-hoc with no traceability to requirements; integration and regression were skipped, interfaces were never tested end-to-end, open high-severity defects were waived, and the business signed nothing before go-live. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Implement (go-live)\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify go-live is gated by readiness. PASS: a readiness check scores the project against criteria (testing/data/training/support/backout), the rollout approach is risk-justified, and an authorised go/no-go is recorded against met criteria. Exceptions: go-live driven by date not readiness, criteria waived under pressure, and no recorded go/no-go decision.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Go-live readiness checklist; Go/no-go records; Rollout plan) as tools — e.g. `go-live readiness check vs criteria (testing, data, training, support,`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout)",
        "The rollout approach + its risk justification",
        "The recorded go/no-go authority/sign-off",
        "Evidence readiness criteria were met, not waived"
      ],
      "system": [
        "Go-live readiness checklist",
        "Go/no-go records",
        "Rollout plan",
        "Readiness evidence"
      ],
      "dataOwner": [
        "Project + business leadership",
        "Operations / support readiness",
        "Process owners"
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
      "tagline": "Auditing \"Implement (go-live)\" as a repeatable agentic workflow: pull the real evidence (The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Implement (go-live)\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Go-live readiness checklist, Go/no-go records, Rollout plan — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `go-live readiness check vs criteria (testing, data, training, support, backout)` — read-only, against the systems of record.",
        "The test itself is specific. Verify go-live is gated by readiness. PASS: a readiness check scores the project against criteria (testing/data/training/support/backout), the rollout approach is risk-justified, and an authorised go/no-go is recorded against met criteria. Exceptions: go-live driven by date not readiness, criteria waived under pressure, and no recorded go/no-go decision. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_implement_go_live_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Go-live readiness checklist and Go/no-go records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Go-live readiness checklist · Go/no-go records",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "go-live readiness check vs criteria (testing, data, training, support, backout)\nrollout approach + risk justification\nrecorded go/no-go authority/sign-off\nwere readiness criteria met (not waived)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout).",
        "The test: Verify go-live is gated by readiness.",
        "Reconcile the systems of record (Go-live readiness checklist, Go/no-go records, Rollout plan) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Go-live happened on a calendar date with no readiness assessment; users were untrained and support wasn't ready, and there's no record of who authorised proceeding against the open issues."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISACA — IS audit",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Implement (go-live)\" (the go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Implement (go-live)\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify go-live is gated by readiness. PASS: a readiness check scores the project against criteria (testing/data/training/support/backout), the rollout approach is risk-justified, and an authorised go/no-go is recorded against met criteria. Exceptions: go-live driven by date not readiness, criteria waived under pressure, and no recorded go/no-go decision. The evidence — The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Go-live readiness checklist APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Go-live readiness checklist gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Go-live readiness checklist; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Implement (go-live)\" Audit Evidence\n\nThe test:\nVerify go-live is gated by readiness. PASS: a readiness check scores the project against criteria (testing/data/training/support/backout), the rollout approach is risk-justified, and an authorised go/no-go is recorded against met criteria. Exceptions: go-live driven by date not readiness, criteria waived under pressure, and no recorded go/no-go decision.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The go-live readiness check + go/no-go decision (against criteria: testing, data, training, support, backout), reconciled against policy, plus the resulting findings working paper",
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
            "From Go-live readiness checklist and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how implement (go-live) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Go-live readiness checklist) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Project + business leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Project + business leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Go-live happened on a calendar date with no readiness assessment; users were untrained and support wasn't ready, and there's no record of who authorised proceeding against the open issues.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Go-live happened on a calendar date with no readiness assessment; users were untrained and support wasn't ready, and there's no record of who authorised proceeding against the open issues. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Cutover\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cutover is planned, rehearsed, and reversible. PASS: a sequenced runbook (owners/timings/freeze), a rehearsed dry-run, a tested backout plan with triggers, and validation checkpoints during execution. Exceptions: an unrehearsed cutover, no/untested backout plan, no step validation, and no freeze period.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Cutover runbook; Dry-run records; Backout plan) as tools — e.g. `cutover runbook (sequenced tasks, owners, timings, freeze)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze)",
        "A rehearsed/dry-run cutover + go/no-go checkpoints",
        "A tested backout/rollback plan + trigger criteria",
        "Execution validation between steps (each step confirmed before the next)"
      ],
      "system": [
        "Cutover runbook",
        "Dry-run records",
        "Backout plan",
        "Cutover validation"
      ],
      "dataOwner": [
        "Cutover / release lead",
        "Technical + business leads",
        "Operations"
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
      "tagline": "Auditing \"Cutover\" as a repeatable agentic workflow: pull the real evidence (The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Cutover\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cutover runbook, Dry-run records, Backout plan — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `cutover runbook (sequenced tasks, owners, timings, freeze)` — read-only, against the systems of record.",
        "The test itself is specific. Verify cutover is planned, rehearsed, and reversible. PASS: a sequenced runbook (owners/timings/freeze), a rehearsed dry-run, a tested backout plan with triggers, and validation checkpoints during execution. Exceptions: an unrehearsed cutover, no/untested backout plan, no step validation, and no freeze period. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_cutover_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cutover runbook and Dry-run records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Cutover runbook · Dry-run records",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "cutover runbook (sequenced tasks, owners, timings, freeze)\nrehearsed dry-run + go/no-go checkpoints\ntested backout/rollback plan + triggers\nexecution validation between steps"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze).",
        "The test: Verify cutover is planned, rehearsed, and reversible.",
        "Reconcile the systems of record (Cutover runbook, Dry-run records, Backout plan) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The cutover ran from a checklist that was never rehearsed; it overran badly, had no tested rollback, and there was no validation between steps, so a failure midway left the system in an unknown state."
      ],
      "references": [
        {
          "title": "ITIL 4 — Release & Deployment",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Cutover\" (the cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cutover\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify cutover is planned, rehearsed, and reversible. PASS: a sequenced runbook (owners/timings/freeze), a rehearsed dry-run, a tested backout plan with triggers, and validation checkpoints during execution. Exceptions: an unrehearsed cutover, no/untested backout plan, no step validation, and no freeze period. The evidence — The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cutover runbook APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cutover runbook gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cutover runbook; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Cutover\" Audit Evidence\n\nThe test:\nVerify cutover is planned, rehearsed, and reversible. PASS: a sequenced runbook (owners/timings/freeze), a rehearsed dry-run, a tested backout plan with triggers, and validation checkpoints during execution. Exceptions: an unrehearsed cutover, no/untested backout plan, no step validation, and no freeze period.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cutover plan/runbook (sequenced tasks, owners, timings, the window + freeze), reconciled against policy, plus the resulting findings working paper",
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
            "From Cutover runbook and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cutover works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Cutover runbook) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Cutover / release lead, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cutover / release lead owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "The cutover ran from a checklist that was never rehearsed; it overran badly, had no tested rollback, and there was no validation between steps, so a failure midway left the system in an unknown state.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The cutover ran from a checklist that was never rehearsed; it overran badly, had no tested rollback, and there was no validation between steps, so a failure midway left the system in an unknown state. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Data conversion and migration\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data migration is controlled + reconciled. PASS: source→target mapping + transformation rules, pre-migration cleansing, trial loads with count/control-total reconciliation + business validation/sign-off, and a failure fallback. Exceptions: no mapping/cleansing, no reconciliation (lost/duplicated records), no business validation, and no fallback.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Migration / ETL tooling; Mapping + transformation rules; Reconciliation reports) as tools — e.g. `migration mapping + transformation rules (source→target) + scope`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The migration mapping + transformation rules (source→target) + scope (migrate vs archive)",
        "Source-data cleansing before migration",
        "Migration testing + reconciliation (record counts/control totals source vs target) + business validation/sign-off",
        "A fallback for migration failure"
      ],
      "system": [
        "Migration / ETL tooling",
        "Mapping + transformation rules",
        "Reconciliation reports",
        "Validation sign-off"
      ],
      "dataOwner": [
        "Migration lead + data owners",
        "Business validation",
        "DBA"
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
      "tagline": "Auditing \"Data conversion and migration\" as a repeatable agentic workflow: pull the real evidence (The migration mapping + transformation rules (source→target) + scope (migrate vs archive)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Data conversion and migration\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the migration mapping + transformation rules (source→target) + scope (migrate vs archive), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Migration / ETL tooling, Mapping + transformation rules, Reconciliation reports — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `migration mapping + transformation rules (source→target) + scope` — read-only, against the systems of record.",
        "The test itself is specific. Verify data migration is controlled + reconciled. PASS: source→target mapping + transformation rules, pre-migration cleansing, trial loads with count/control-total reconciliation + business validation/sign-off, and a failure fallback. Exceptions: no mapping/cleansing, no reconciliation (lost/duplicated records), no business validation, and no fallback. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_data_conversion_and_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Migration / ETL tooling and Mapping + transformation rules (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Migration / ETL tooling · Mapping + transformation rules",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "migration mapping + transformation rules (source→target) + scope\nsource-data cleansing before migration\nmigration testing + reconciliation (counts/control totals) + business sign-off\nfallback for migration failure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The migration mapping + transformation rules (source→target) + scope (migrate vs archive).",
        "The test: Verify data migration is controlled + reconciled.",
        "Reconcile the systems of record (Migration / ETL tooling, Mapping + transformation rules, Reconciliation reports) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Data was loaded once, directly, with no cleansing or reconciliation; counts don't tie out between source and target, and the business never validated the converted records — bad data surfaced as transaction errors after go-live."
      ],
      "references": [
        {
          "title": "DAMA-DMBOK",
          "url": "https://www.dama.org/cpages/body-of-knowledge"
        },
        {
          "title": "ISACA — IS audit",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Data conversion and migration\" (the migration mapping + transformation rules (source→target) + scope (migrate vs archive)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data conversion and migration\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify data migration is controlled + reconciled. PASS: source→target mapping + transformation rules, pre-migration cleansing, trial loads with count/control-total reconciliation + business validation/sign-off, and a failure fallback. Exceptions: no mapping/cleansing, no reconciliation (lost/duplicated records), no business validation, and no fallback. The evidence — The migration mapping + transformation rules (source→target) + scope (migrate vs archive) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Migration / ETL tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Migration / ETL tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Migration / ETL tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Data conversion and migration\" Audit Evidence\n\nThe test:\nVerify data migration is controlled + reconciled. PASS: source→target mapping + transformation rules, pre-migration cleansing, trial loads with count/control-total reconciliation + business validation/sign-off, and a failure fallback. Exceptions: no mapping/cleansing, no reconciliation (lost/duplicated records), no business validation, and no fallback.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The migration mapping + transformation rules (source→target) + scope (migrate vs archive))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The migration mapping + transformation rules (source→target) + scope (migrate vs archive), reconciled against policy, plus the resulting findings working paper",
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
            "From Migration / ETL tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data conversion and migration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Migration / ETL tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Migration lead + data owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Migration lead + data owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Data was loaded once, directly, with no cleansing or reconciliation; counts don't tie out between source and target, and the business never validated the converted records — bad data surfaced as transaction errors after go-live.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Data was loaded once, directly, with no cleansing or reconciliation; counts don't tie out between source and target, and the business never validated the converted records — bad data surfaced as transaction errors after go-live. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Support and maintenance\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the system transitions cleanly to sustainable support. PASS: a defined support model (tiers, runbooks, SLA) with knowledge transfer, a stabilisation period handling post-go-live defects, an ongoing maintenance arrangement (patching/enhancements/vendor support), and a support team able to run it. Exceptions: no support model or handover, no stabilisation (issues unowned at go-live), no maintenance/patching arrangement, and permanent dependence on the project team or vendor.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (ITSM / support tooling + SLA; Runbooks / knowledge base; Maintenance / vendor-support contract) as tools — e.g. `transition to support (model/tiers, runbooks, KT, SLA)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA)",
        "Post-go-live defect/incident handling + a stabilisation period before full handover",
        "The ongoing maintenance arrangement (patching, enhancements, vendor support contract)",
        "Evidence the support team can actually run the system (not dependent on the project team/vendor indefinitely)"
      ],
      "system": [
        "ITSM / support tooling + SLA",
        "Runbooks / knowledge base",
        "Maintenance / vendor-support contract",
        "Defect / incident tracking"
      ],
      "dataOwner": [
        "Application support / maintenance",
        "Project handover lead",
        "Business owner"
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
      "tagline": "Auditing \"Support and maintenance\" as a repeatable agentic workflow: pull the real evidence (The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Support and maintenance\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM / support tooling + SLA, Runbooks / knowledge base, Maintenance / vendor-support contract — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `transition to support (model/tiers, runbooks, KT, SLA)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the system transitions cleanly to sustainable support. PASS: a defined support model (tiers, runbooks, SLA) with knowledge transfer, a stabilisation period handling post-go-live defects, an ongoing maintenance arrangement (patching/enhancements/vendor support), and a support team able to run it. Exceptions: no support model or handover, no stabilisation (issues unowned at go-live), no maintenance/patching arrangement, and permanent dependence on the project team or vendor. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_support_and_maintenance_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM / support tooling + SLA and Runbooks / knowledge base (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull ITSM / support tooling + SLA · Runbooks / knowledge base",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "transition to support (model/tiers, runbooks, KT, SLA)\npost-go-live defect handling + stabilisation before full handover\nongoing maintenance (patching, enhancements, vendor support contract)\ncan the support team actually run the system (not project-team/vendor-dependent)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA).",
        "The test: Verify the system transitions cleanly to sustainable support.",
        "Reconcile the systems of record (ITSM / support tooling + SLA, Runbooks / knowledge base, Maintenance / vendor-support contract) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There was no transition to support — no runbooks, no SLA, and no knowledge transfer; the project team became the de facto support line, the system goes unpatched, and the business has no sustainable maintenance arrangement."
      ],
      "references": [
        {
          "title": "ITIL 4 — Service Transition",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Support and maintenance\" (the transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the sla)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Support and maintenance\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the system transitions cleanly to sustainable support. PASS: a defined support model (tiers, runbooks, SLA) with knowledge transfer, a stabilisation period handling post-go-live defects, an ongoing maintenance arrangement (patching/enhancements/vendor support), and a support team able to run it. Exceptions: no support model or handover, no stabilisation (issues unowned at go-live), no maintenance/patching arrangement, and permanent dependence on the project team or vendor. The evidence — The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM / support tooling + SLA APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM / support tooling + SLA gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM / support tooling + SLA; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Support and maintenance\" Audit Evidence\n\nThe test:\nVerify the system transitions cleanly to sustainable support. PASS: a defined support model (tiers, runbooks, SLA) with knowledge transfer, a stabilisation period handling post-go-live defects, an ongoing maintenance arrangement (patching/enhancements/vendor support), and a support team able to run it. Exceptions: no support model or handover, no stabilisation (issues unowned at go-live), no maintenance/patching arrangement, and permanent dependence on the project team or vendor.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The transition to support/maintenance (the support model/tiers, runbooks, knowledge transfer, the SLA), reconciled against policy, plus the resulting findings working paper",
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
            "From ITSM / support tooling + SLA and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how support and maintenance works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM / support tooling + SLA) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Application support / maintenance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Application support / maintenance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "There was no transition to support — no runbooks, no SLA, and no knowledge transfer; the project team became the de facto support line, the system goes unpatched, and the business has no sustainable maintenance arrangement.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There was no transition to support — no runbooks, no SLA, and no knowledge transfer; the project team became the de facto support line, the system goes unpatched, and the business has no sustainable maintenance arrangement. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Steering committee\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the project is actively governed. PASS: a chartered steering group with authority meets on cadence, records real decisions + escalations (approved at the right level), an engaged sponsor is accountable, and reporting isn't solely the project's self-assessment. Exceptions: a rubber-stamp/absent committee, escalations decided below authority, a disengaged sponsor, and only optimistic self-reporting.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Steering charter + minutes; Decision / escalation log; Budget / scope approvals) as tools — e.g. `steering group: charter, authority, cadence, decisions/escalations`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The steering/governance group (charter, members/authority, cadence, what it decides + escalates)",
        "Active-governance evidence (minutes, decisions, escalations handled, budget/scope changes approved at the right level)",
        "Sponsor engagement + accountability",
        "Independent/objective reporting (not only the project's self-report)"
      ],
      "system": [
        "Steering charter + minutes",
        "Decision / escalation log",
        "Budget / scope approvals",
        "Status / assurance reporting"
      ],
      "dataOwner": [
        "Sponsor + steering members",
        "Project management",
        "Assurance / audit"
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
      "tagline": "Auditing \"Steering committee\" as a repeatable agentic workflow: pull the real evidence (The steering/governance group (charter, members/authority, cadence, what it decides + escalates)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Steering committee\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the steering/governance group (charter, members/authority, cadence, what it decides + escalates), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Steering charter + minutes, Decision / escalation log, Budget / scope approvals — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `steering group: charter, authority, cadence, decisions/escalations` — read-only, against the systems of record.",
        "The test itself is specific. Verify the project is actively governed. PASS: a chartered steering group with authority meets on cadence, records real decisions + escalations (approved at the right level), an engaged sponsor is accountable, and reporting isn't solely the project's self-assessment. Exceptions: a rubber-stamp/absent committee, escalations decided below authority, a disengaged sponsor, and only optimistic self-reporting. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_steering_committee_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Steering charter + minutes and Decision / escalation log (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Steering charter + minutes · Decision / escalation log",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "steering group: charter, authority, cadence, decisions/escalations\nactive-governance evidence (minutes, escalations handled, approvals at right level)\nsponsor engagement + accountability\nindependent reporting (not only project self-report)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The steering/governance group (charter, members/authority, cadence, what it decides + escalates).",
        "The test: Verify the project is actively governed.",
        "Reconcile the systems of record (Steering charter + minutes, Decision / escalation log, Budget / scope approvals) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The steering committee existed on paper but rarely met and made no real decisions; risks and budget changes were handled informally below the proper authority, and the only status came from the project's own optimistic reporting."
      ],
      "references": [
        {
          "title": "COBIT 2019",
          "url": "https://www.isaca.org/resources/cobit"
        },
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Steering committee\" (the steering/governance group (charter, members/authority, cadence, what it decides + escalates)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Steering committee\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the project is actively governed. PASS: a chartered steering group with authority meets on cadence, records real decisions + escalations (approved at the right level), an engaged sponsor is accountable, and reporting isn't solely the project's self-assessment. Exceptions: a rubber-stamp/absent committee, escalations decided below authority, a disengaged sponsor, and only optimistic self-reporting. The evidence — The steering/governance group (charter, members/authority, cadence, what it decides + escalates) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Steering charter + minutes APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Steering charter + minutes gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Steering charter + minutes; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Steering committee\" Audit Evidence\n\nThe test:\nVerify the project is actively governed. PASS: a chartered steering group with authority meets on cadence, records real decisions + escalations (approved at the right level), an engaged sponsor is accountable, and reporting isn't solely the project's self-assessment. Exceptions: a rubber-stamp/absent committee, escalations decided below authority, a disengaged sponsor, and only optimistic self-reporting.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The steering/governance group (charter, members/authority, cadence, what it decides + escalates))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The steering/governance group (charter, members/authority, cadence, what it decides + escalates), reconciled against policy, plus the resulting findings working paper",
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
            "From Steering charter + minutes and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how steering committee works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Steering charter + minutes) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Sponsor + steering members, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Sponsor + steering members owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "The steering committee existed on paper but rarely met and made no real decisions; risks and budget changes were handled informally below the proper authority, and the only status came from the project's own optimistic reporting.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The steering committee existed on paper but rarely met and made no real decisions; risks and budget changes were handled informally below the proper authority, and the only status came from the project's own optimistic reporting. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Audit and compliance involvement\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify controls + compliance are built in, not bolted on. PASS: audit/risk/compliance engaged at design (controls + SoD), a pre-go-live control-readiness review (audit trails, key/reliance controls), regulatory/SoX/ITGC considerations for in-scope systems, and findings tracked to closure. Exceptions: audit engaged only post-go-live, no SoD/app controls designed, no pre-go-live control review, and findings never closed.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Control / SoD design; Control-readiness review; SoX / ITGC docs) as tools — e.g. `audit/risk/compliance engaged at design (control review + SoD in roles`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls)",
        "A pre-go-live control-readiness review (audit trails, key controls, reliance controls for reporting)",
        "Regulatory/SoX considerations where the system is in scope (ITGCs/app controls designed)",
        "Findings tracked to closure"
      ],
      "system": [
        "Control / SoD design",
        "Control-readiness review",
        "SoX / ITGC docs",
        "Finding tracker"
      ],
      "dataOwner": [
        "Internal audit + compliance",
        "Controls / process owners",
        "Project lead"
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
      "tagline": "Auditing \"Audit and compliance involvement\" as a repeatable agentic workflow: pull the real evidence (Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Audit and compliance involvement\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Control / SoD design, Control-readiness review, SoX / ITGC docs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `audit/risk/compliance engaged at design (control review + SoD in roles + app con` — read-only, against the systems of record.",
        "The test itself is specific. Verify controls + compliance are built in, not bolted on. PASS: audit/risk/compliance engaged at design (controls + SoD), a pre-go-live control-readiness review (audit trails, key/reliance controls), regulatory/SoX/ITGC considerations for in-scope systems, and findings tracked to closure. Exceptions: audit engaged only post-go-live, no SoD/app controls designed, no pre-go-live control review, and findings never closed. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_audit_and_compliance_involvement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Control / SoD design and Control-readiness review (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Control / SoD design · Control-readiness review",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "audit/risk/compliance engaged at design (control review + SoD in roles + app controls)\npre-go-live control-readiness review (audit trails, key/reliance controls)\nregulatory/SoX + ITGC considerations for in-scope systems\nfindings tracked to closure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls).",
        "The test: Verify controls + compliance are built in, not bolted on.",
        "Reconcile the systems of record (Control / SoD design, Control-readiness review, SoX / ITGC docs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Compliance wasn't consulted until after go-live; the system lacks audit trails and segregation-of-duties in its roles, and because it feeds a regulated report, the missing application controls became an audit finding."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "ISACA — IS audit",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Audit and compliance involvement\" (evidence audit/risk/compliance were engaged during design (control review, sod built into roles, application controls)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and compliance involvement\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify controls + compliance are built in, not bolted on. PASS: audit/risk/compliance engaged at design (controls + SoD), a pre-go-live control-readiness review (audit trails, key/reliance controls), regulatory/SoX/ITGC considerations for in-scope systems, and findings tracked to closure. Exceptions: audit engaged only post-go-live, no SoD/app controls designed, no pre-go-live control review, and findings never closed. The evidence — Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Control / SoD design APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Control / SoD design gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Control / SoD design; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Audit and compliance involvement\" Audit Evidence\n\nThe test:\nVerify controls + compliance are built in, not bolted on. PASS: audit/risk/compliance engaged at design (controls + SoD), a pre-go-live control-readiness review (audit trails, key/reliance controls), regulatory/SoX/ITGC considerations for in-scope systems, and findings tracked to closure. Exceptions: audit engaged only post-go-live, no SoD/app controls designed, no pre-go-live control review, and findings never closed.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The Evidence audit/risk/compliance were engaged during design (control review, SoD built into roles, application controls), reconciled against policy, plus the resulting findings working paper",
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
            "From Control / SoD design and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and compliance involvement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Control / SoD design) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Internal audit + compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Internal audit + compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Compliance wasn't consulted until after go-live; the system lacks audit trails and segregation-of-duties in its roles, and because it feeds a regulated report, the missing application controls became an audit finding.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Compliance wasn't consulted until after go-live; the system lacks audit trails and segregation-of-duties in its roles, and because it feeds a regulated report, the missing application controls became an audit finding. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Vendor due diligence\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the vendor was vetted before commitment. PASS: documented due diligence (financial, security/SOC 2, references/track record, fit, support), an evaluation basis tying the choice to requirements, a vendor risk assessment (viability/data/sub-processors), and sign-off before contracting. Exceptions: no due diligence (vendor viability/security unknown), choice not tied to requirements, no vendor risk assessment, and contracting before diligence.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Due-diligence records (financial / SOC 2); Evaluation / requirements basis; Vendor risk assessment) as tools — e.g. `due diligence: financial viability + security/SOC 2 + references/track`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model)",
        "The selection/evaluation basis (requirements vs vendor capability; why this vendor)",
        "Risk assessment of the vendor (concentration, viability, data-handling, sub-processors)",
        "Sign-off that diligence was completed before contracting"
      ],
      "system": [
        "Due-diligence records (financial / SOC 2)",
        "Evaluation / requirements basis",
        "Vendor risk assessment",
        "Sign-off"
      ],
      "dataOwner": [
        "Procurement / vendor management",
        "Security + finance",
        "Business owner"
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
      "tagline": "Auditing \"Vendor due diligence\" as a repeatable agentic workflow: pull the real evidence (The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Vendor due diligence\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Due-diligence records (financial / SOC 2), Evaluation / requirements basis, Vendor risk assessment — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `due diligence: financial viability + security/SOC 2 + references/track record + ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the vendor was vetted before commitment. PASS: documented due diligence (financial, security/SOC 2, references/track record, fit, support), an evaluation basis tying the choice to requirements, a vendor risk assessment (viability/data/sub-processors), and sign-off before contracting. Exceptions: no due diligence (vendor viability/security unknown), choice not tied to requirements, no vendor risk assessment, and contracting before diligence. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_vendor_due_diligence_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Due-diligence records (financial / SOC 2) and Evaluation / requirements basis (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Due-diligence records (financial / SOC 2) · Evaluation / requirements basis",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "due diligence: financial viability + security/SOC 2 + references/track record + fit/roadmap + support\nevaluation basis (requirements vs vendor capability)\nvendor risk assessment (viability, data-handling, sub-processors)\nsign-off that diligence completed before contracting"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model).",
        "The test: Verify the vendor was vetted before commitment.",
        "Reconcile the systems of record (Due-diligence records (financial / SOC 2), Evaluation / requirements basis, Vendor risk assessment) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The vendor was engaged with no due diligence — no financial check, no SOC 2 or security review, and no reference calls; only after signing did the team learn the vendor was thinly capitalised and subcontracts the hosting offshore."
      ],
      "references": [
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Vendor due diligence\" (the due diligence performed on the vendor before commitment (financial viability, security posture/soc 2, references + track record, product fit/roadmap, support model)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor due diligence\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the vendor was vetted before commitment. PASS: documented due diligence (financial, security/SOC 2, references/track record, fit, support), an evaluation basis tying the choice to requirements, a vendor risk assessment (viability/data/sub-processors), and sign-off before contracting. Exceptions: no due diligence (vendor viability/security unknown), choice not tied to requirements, no vendor risk assessment, and contracting before diligence. The evidence — The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Due-diligence records (financial / SOC 2) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Due-diligence records (financial / SOC 2) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Due-diligence records (financial / SOC 2); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Vendor due diligence\" Audit Evidence\n\nThe test:\nVerify the vendor was vetted before commitment. PASS: documented due diligence (financial, security/SOC 2, references/track record, fit, support), an evaluation basis tying the choice to requirements, a vendor risk assessment (viability/data/sub-processors), and sign-off before contracting. Exceptions: no due diligence (vendor viability/security unknown), choice not tied to requirements, no vendor risk assessment, and contracting before diligence.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The due diligence performed on the vendor before commitment (financial viability, security posture/SOC 2, references + track record, product fit/roadmap, support model), reconciled against policy, plus the resulting findings working paper",
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
            "From Due-diligence records (financial / SOC 2) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor due diligence works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Due-diligence records (financial / SOC 2)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Procurement / vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Procurement / vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "The vendor was engaged with no due diligence — no financial check, no SOC 2 or security review, and no reference calls; only after signing did the team learn the vendor was thinly capitalised and subcontracts the hosting offshore.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The vendor was engaged with no due diligence — no financial check, no SOC 2 or security review, and no reference calls; only after signing did the team learn the vendor was thinly capitalised and subcontracts the hosting offshore. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Contract and SLA review\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the contract protects the organisation. PASS: defined deliverables + acceptance criteria, SLAs with remedies, liability + IP + DPA + exit terms, payment tied to acceptance, audit + security obligations, and legal/security review. Exceptions: vague deliverables, no SLA/remedies or liability terms, missing DPA/exit rights, payment by calendar, and no legal/security review.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Contract / SLA records; Acceptance-milestone schedule; Legal / procurement review) as tools — e.g. `contract + SLA (deliverables/acceptance, service levels + remedies, li`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination)",
        "Acceptance/payment tied to deliverable acceptance",
        "Audit rights + security/compliance obligations",
        "Legal/procurement/security review before signature"
      ],
      "system": [
        "Contract / SLA records",
        "Acceptance-milestone schedule",
        "Legal / procurement review",
        "Vendor management"
      ],
      "dataOwner": [
        "Legal + Procurement",
        "Security / Privacy (DPA)",
        "Business owner"
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
      "tagline": "Auditing \"Contract and SLA review\" as a repeatable agentic workflow: pull the real evidence (The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Contract and SLA review\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Contract / SLA records, Acceptance-milestone schedule, Legal / procurement review — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `contract + SLA (deliverables/acceptance, service levels + remedies, liability, I` — read-only, against the systems of record.",
        "The test itself is specific. Verify the contract protects the organisation. PASS: defined deliverables + acceptance criteria, SLAs with remedies, liability + IP + DPA + exit terms, payment tied to acceptance, audit + security obligations, and legal/security review. Exceptions: vague deliverables, no SLA/remedies or liability terms, missing DPA/exit rights, payment by calendar, and no legal/security review. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_contract_and_sla_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Contract / SLA records and Acceptance-milestone schedule (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Contract / SLA records · Acceptance-milestone schedule",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "contract + SLA (deliverables/acceptance, service levels + remedies, liability, IP, DPA, exit)\nacceptance/payment tied to deliverable acceptance\naudit rights + security/compliance obligations\nlegal/procurement/security review before signature"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination).",
        "The test: Verify the contract protects the organisation.",
        "Reconcile the systems of record (Contract / SLA records, Acceptance-milestone schedule, Legal / procurement review) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The contract was signed off a vendor template with no acceptance criteria, no SLAs or service credits, no data-protection addendum, and no exit rights — leaving the organisation locked in with no leverage when delivery slipped."
      ],
      "references": [
        {
          "title": "ISO/IEC 27036 — supplier relationships",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "ISACA — IS audit",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Contract and SLA review\" (the contract + sla terms (deliverables/acceptance criteria, service levels + remedies, liability, ip, data protection/dpa, exit/termination)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Contract and SLA review\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the contract protects the organisation. PASS: defined deliverables + acceptance criteria, SLAs with remedies, liability + IP + DPA + exit terms, payment tied to acceptance, audit + security obligations, and legal/security review. Exceptions: vague deliverables, no SLA/remedies or liability terms, missing DPA/exit rights, payment by calendar, and no legal/security review. The evidence — The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Contract / SLA records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Contract / SLA records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Contract / SLA records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Contract and SLA review\" Audit Evidence\n\nThe test:\nVerify the contract protects the organisation. PASS: defined deliverables + acceptance criteria, SLAs with remedies, liability + IP + DPA + exit terms, payment tied to acceptance, audit + security obligations, and legal/security review. Exceptions: vague deliverables, no SLA/remedies or liability terms, missing DPA/exit rights, payment by calendar, and no legal/security review.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The contract + SLA terms (deliverables/acceptance criteria, service levels + remedies, liability, IP, data protection/DPA, exit/termination), reconciled against policy, plus the resulting findings working paper",
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
            "From Contract / SLA records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how contract and sla review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Contract / SLA records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Legal + Procurement, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Procurement owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "The contract was signed off a vendor template with no acceptance criteria, no SLAs or service credits, no data-protection addendum, and no exit rights — leaving the organisation locked in with no leverage when delivery slipped.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The contract was signed off a vendor template with no acceptance criteria, no SLAs or service credits, no data-protection addendum, and no exit rights — leaving the organisation locked in with no leverage when delivery slipped. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Escrow agreement\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify escrow gives real continuity protection. PASS: a current escrow agreement for critical software with defined deposits + triggers, verified (complete + buildable) deposits, usable release rights, and a reasoned escrow-vs-SaaS-exit choice. Exceptions: no escrow for critical software, empty/stale deposits, unverified buildability, and release rights that don't permit use.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Escrow agreement + deposits; Deposit verification; Criticality assessment) as tools — e.g. `escrow agreement: deposit contents + release/trigger conditions`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The source-code escrow for business-critical vendor software (deposit contents + release triggers)",
        "Actual current deposits + verification (complete + buildable)",
        "Release conditions + the right/ability to use the code if triggered",
        "Whether escrow fits the risk vs a SaaS continuity/exit alternative"
      ],
      "system": [
        "Escrow agreement + deposits",
        "Deposit verification",
        "Criticality assessment",
        "Continuity plan"
      ],
      "dataOwner": [
        "Legal + Procurement",
        "Application owners",
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
      "tagline": "Auditing \"Escrow agreement\" as a repeatable agentic workflow: pull the real evidence (The source-code escrow for business-critical vendor software (deposit contents + release triggers)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Escrow agreement\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the source-code escrow for business-critical vendor software (deposit contents + release triggers), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Escrow agreement + deposits, Deposit verification, Criticality assessment — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `escrow agreement: deposit contents + release/trigger conditions` — read-only, against the systems of record.",
        "The test itself is specific. Verify escrow gives real continuity protection. PASS: a current escrow agreement for critical software with defined deposits + triggers, verified (complete + buildable) deposits, usable release rights, and a reasoned escrow-vs-SaaS-exit choice. Exceptions: no escrow for critical software, empty/stale deposits, unverified buildability, and release rights that don't permit use. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_escrow_agreement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Escrow agreement + deposits and Deposit verification (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Escrow agreement + deposits · Deposit verification",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "escrow agreement: deposit contents + release/trigger conditions\nactual current deposits + verification (complete + buildable)\nrelease conditions + right/ability to use the code\nescrow fits the risk vs SaaS continuity/exit alternative?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The source-code escrow for business-critical vendor software (deposit contents + release triggers).",
        "The test: Verify escrow gives real continuity protection.",
        "Reconcile the systems of record (Escrow agreement + deposits, Deposit verification, Criticality assessment) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A critical vendor application relies on an escrow that holds a years-old deposit no one has verified as buildable, with release conditions so narrow they wouldn't trigger on the vendor's most likely failure — continuity protection that doesn't actually protect."
      ],
      "references": [
        {
          "title": "ISACA — IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier relationships",
          "url": "https://www.iso.org/standard/59648.html"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Escrow agreement\" (the source-code escrow for business-critical vendor software (deposit contents + release triggers)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Escrow agreement\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify escrow gives real continuity protection. PASS: a current escrow agreement for critical software with defined deposits + triggers, verified (complete + buildable) deposits, usable release rights, and a reasoned escrow-vs-SaaS-exit choice. Exceptions: no escrow for critical software, empty/stale deposits, unverified buildability, and release rights that don't permit use. The evidence — The source-code escrow for business-critical vendor software (deposit contents + release triggers) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Escrow agreement + deposits APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Escrow agreement + deposits gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Escrow agreement + deposits; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Escrow agreement\" Audit Evidence\n\nThe test:\nVerify escrow gives real continuity protection. PASS: a current escrow agreement for critical software with defined deposits + triggers, verified (complete + buildable) deposits, usable release rights, and a reasoned escrow-vs-SaaS-exit choice. Exceptions: no escrow for critical software, empty/stale deposits, unverified buildability, and release rights that don't permit use.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The source-code escrow for business-critical vendor software (deposit contents + release triggers))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The source-code escrow for business-critical vendor software (deposit contents + release triggers), reconciled against policy, plus the resulting findings working paper",
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
            "From Escrow agreement + deposits and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how escrow agreement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Escrow agreement + deposits) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Legal + Procurement, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Procurement owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "A critical vendor application relies on an escrow that holds a years-old deposit no one has verified as buildable, with release conditions so narrow they wouldn't trigger on the vendor's most likely failure — continuity protection that doesn't actually protect.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A critical vendor application relies on an escrow that holds a years-old deposit no one has verified as buildable, with release conditions so narrow they wouldn't trigger on the vendor's most likely failure — continuity protection that doesn't actually protect. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Return on investment\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the investment is justified + benefits tracked. PASS: an approved business case quantifies cost/TCO, benefits, and payback; a benefits-realisation plan assigns owners + KPIs; ROI is re-validated as cost/scope changes; and benefits are measured post-go-live. Exceptions: no quantified case, benefits with no owner/KPI, ROI never revisited, and benefits never measured (success assumed).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Business case / ROI model; Benefits plan + KPIs; Re-validation records) as tools — e.g. `approved business case + ROI (TCO, quantified benefits, payback)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend",
        "The benefits-realisation plan (owners, KPIs, baseline/target, measurement timing)",
        "Re-validation of the ROI as costs/scope change",
        "Post-go-live benefits measurement vs the case"
      ],
      "system": [
        "Business case / ROI model",
        "Benefits plan + KPIs",
        "Re-validation records",
        "Benefits measurement"
      ],
      "dataOwner": [
        "Sponsor + Finance",
        "Project management",
        "Benefit owners"
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
      "tagline": "Auditing \"Return on investment\" as a repeatable agentic workflow: pull the real evidence (The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Return on investment\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Business case / ROI model, Benefits plan + KPIs, Re-validation records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `approved business case + ROI (TCO, quantified benefits, payback)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the investment is justified + benefits tracked. PASS: an approved business case quantifies cost/TCO, benefits, and payback; a benefits-realisation plan assigns owners + KPIs; ROI is re-validated as cost/scope changes; and benefits are measured post-go-live. Exceptions: no quantified case, benefits with no owner/KPI, ROI never revisited, and benefits never measured (success assumed). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_return_on_investment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Business case / ROI model and Benefits plan + KPIs (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Business case / ROI model · Benefits plan + KPIs",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "approved business case + ROI (TCO, quantified benefits, payback)\nbenefits-realisation plan (owners, KPIs, baseline/target, timing)\nROI re-validation as costs/scope change\npost-go-live benefits measurement vs the case"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend.",
        "The test: Verify the investment is justified + benefits tracked.",
        "Reconcile the systems of record (Business case / ROI model, Benefits plan + KPIs, Re-validation records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The ROI was a number in the approval slide; benefits were never assigned owners or KPIs, the case was never revisited as costs grew, and no one measured whether the system delivered the savings it promised."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISACA — IS audit",
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Return on investment\" (the business case + expected roi (costs/tco, quantified benefits, payback) approved before the spend), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Return on investment\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify the investment is justified + benefits tracked. PASS: an approved business case quantifies cost/TCO, benefits, and payback; a benefits-realisation plan assigns owners + KPIs; ROI is re-validated as cost/scope changes; and benefits are measured post-go-live. Exceptions: no quantified case, benefits with no owner/KPI, ROI never revisited, and benefits never measured (success assumed). The evidence — The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Business case / ROI model APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Business case / ROI model gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Business case / ROI model; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Return on investment\" Audit Evidence\n\nThe test:\nVerify the investment is justified + benefits tracked. PASS: an approved business case quantifies cost/TCO, benefits, and payback; a benefits-realisation plan assigns owners + KPIs; ROI is re-validated as cost/scope changes; and benefits are measured post-go-live. Exceptions: no quantified case, benefits with no owner/KPI, ROI never revisited, and benefits never measured (success assumed).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend)\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The business case + expected ROI (costs/TCO, quantified benefits, payback) approved before the spend, reconciled against policy, plus the resulting findings working paper",
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
            "From Business case / ROI model and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how return on investment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Business case / ROI model) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Sponsor + Finance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Sponsor + Finance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "The ROI was a number in the approval slide; benefits were never assigned owners or KPIs, the case was never revisited as costs grew, and no one measured whether the system delivered the savings it promised.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The ROI was a number in the approval slide; benefits were never assigned owners or KPIs, the case was never revisited as costs grew, and no one measured whether the system delivered the savings it promised. A clean result, a good tool choice, or an on-time project is not a finding."
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
      "objective": "Prove the \"Training and knowledge transfer\" control for System Implementation — Functional is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify users + support are trained + capable. PASS: role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support is done with documentation; readiness/adoption is measured; and job aids are available. Exceptions: training built late or not delivered (untrained users), no knowledge transfer (vendor dependency), adoption never measured, and no reference materials at go-live.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Functional systems of record (Training materials + LMS / completion; KT / documentation; Readiness / adoption metrics) as tools — e.g. `training plan + delivery (role-based, completion-tracked, competency b`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live)",
        "Knowledge transfer to internal staff/support (documented process + system knowledge; reduced vendor dependency)",
        "User readiness/adoption measurement",
        "Reference materials/job aids available at go-live"
      ],
      "system": [
        "Training materials + LMS / completion",
        "KT / documentation",
        "Readiness / adoption metrics",
        "Job aids / reference"
      ],
      "dataOwner": [
        "Training / change lead",
        "Process owners",
        "Support team (KT)"
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
      "tagline": "Auditing \"Training and knowledge transfer\" as a repeatable agentic workflow: pull the real evidence (The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Functional control.",
      "year": 2025,
      "overview": [
        "The \"Training and knowledge transfer\" sub-process is one of the controls an auditor must verify for System Implementation — Functional. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Training materials + LMS / completion, KT / documentation, Readiness / adoption metrics — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `training plan + delivery (role-based, completion-tracked, competency before go-l` — read-only, against the systems of record.",
        "The test itself is specific. Verify users + support are trained + capable. PASS: role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support is done with documentation; readiness/adoption is measured; and job aids are available. Exceptions: training built late or not delivered (untrained users), no knowledge transfer (vendor dependency), adoption never measured, and no reference materials at go-live. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_training_and_knowledge_transfer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Training materials + LMS / completion and KT / documentation (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Training materials + LMS / completion · KT / documentation",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "training plan + delivery (role-based, completion-tracked, competency before go-live)\nknowledge transfer to internal staff/support (docs; reduce vendor dependency)\nuser readiness/adoption measurement\nreference materials/job aids at go-live"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live).",
        "The test: Verify users + support are trained + capable.",
        "Reconcile the systems of record (Training materials + LMS / completion, KT / documentation, Readiness / adoption metrics) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Training was a single demo session with no role-based materials or completion tracking; users were not competent at go-live, no knowledge was transferred to the support team, and adoption was never measured."
      ],
      "references": [
        {
          "title": "Prosci / ADKAR",
          "url": "https://www.prosci.com/methodology/adkar"
        },
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
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
          "description": "Runnable read-only MCP server: gathers the System Implementation — Functional evidence for \"Training and knowledge transfer\" (the training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Training and knowledge transfer\" control for System Implementation — Functional at AcmeCorp. THE TEST: Verify users + support are trained + capable. PASS: role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support is done with documentation; readiness/adoption is measured; and job aids are available. Exceptions: training built late or not delivered (untrained users), no knowledge transfer (vendor dependency), adoption never measured, and no reference materials at go-live. The evidence — The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Training materials + LMS / completion APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Training materials + LMS / completion gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Training materials + LMS / completion; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Functional: \"Training and knowledge transfer\" Audit Evidence\n\nThe test:\nVerify users + support are trained + capable. PASS: role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support is done with documentation; readiness/adoption is measured; and job aids are available. Exceptions: training built late or not delivered (untrained users), no knowledge transfer (vendor dependency), adoption never measured, and no reference materials at go-live.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-functional_inventory.json   (in-scope items — The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live))\n- sysimpl-functional_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The training plan + delivery (role-based training built + delivered, completion tracked, competency before go-live), reconciled against policy, plus the resulting findings working paper",
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
            "From Training materials + LMS / completion and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how training and knowledge transfer works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Training materials + LMS / completion) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
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
            "Training / change lead, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Training / change lead owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
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
            "Training was a single demo session with no role-based materials or completion tracking; users were not competent at go-live, no knowledge was transferred to the support team, and adoption was never measured.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Training was a single demo session with no role-based materials or completion tracking; users were not competent at go-live, no knowledge was transferred to the support team, and adoption was never measured. A clean result, a good tool choice, or an on-time project is not a finding."
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
