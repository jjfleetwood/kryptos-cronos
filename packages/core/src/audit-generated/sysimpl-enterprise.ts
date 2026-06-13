import type { EpochConfig, StageConfig } from "../types";

export const sysimplEnterpriseEpoch: EpochConfig = {
  "id": "sysimpl-enterprise",
  "name": "System Implementation — Enterprise",
  "subtitle": "Agentic technical & privacy audit — System Implementation — Enterprise",
  "description": "Audit System Implementation — Enterprise end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🏛️",
  "color": "Indigo",
  "unlocked": true
};

export const sysimplEnterpriseStages: StageConfig[] = [
  {
    "epochId": "sysimpl-enterprise",
    "id": "sie-01",
    "order": 1,
    "title": "Program & project management (PMO)",
    "subtitle": "Agentic technical & privacy audit of the program & project management (pmo) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Program & project management (PMO)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the program is managed with discipline. PASS: there's a baselined plan (charter, scope, schedule, budget), an active RAID log, status + milestone/budget tracking against baseline, scope change-control, a RACI/decision log, and stage-gate approvals before each phase. Exceptions: no baselined plan or RAID log, status reporting that doesn't track to baseline (green-shifting), uncontrolled scope creep, and phases proceeding with no stage-gate approval.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PPM / PMO tooling; RAID / issue + change log; Schedule + budget baseline (EVM)) as tools — e.g. `the baselined plan: charter + scope + schedule + budget + RAID log`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates)",
        "Status reporting + milestone/budget tracking against baseline (EVM or % complete vs plan, the change-control log for scope)",
        "The resource + RACI plan and the decision log",
        "Evidence of stage-gate approvals at each phase before proceeding"
      ],
      "system": [
        "PPM / PMO tooling",
        "RAID / issue + change log",
        "Schedule + budget baseline (EVM)",
        "Stage-gate approval records"
      ],
      "dataOwner": [
        "Program / PMO leadership",
        "Project managers",
        "Executive sponsor"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-01-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Program & project management (PMO)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Program & project management (PMO)\" as a repeatable agentic workflow: pull the real evidence (The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Program & project management (PMO)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PPM / PMO tooling, RAID / issue + change log, Schedule + budget baseline (EVM) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the baselined plan: charter + scope + schedule + budget + RAID log` — read-only, against the systems of record.",
        "The test itself is specific. Verify the program is managed with discipline. PASS: there's a baselined plan (charter, scope, schedule, budget), an active RAID log, status + milestone/budget tracking against baseline, scope change-control, a RACI/decision log, and stage-gate approvals before each phase. Exceptions: no baselined plan or RAID log, status reporting that doesn't track to baseline (green-shifting), uncontrolled scope creep, and phases proceeding with no stage-gate approval. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_program_project_management_pmo_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PPM / PMO tooling and RAID / issue + change log (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_program_project_management_pmo_mcp.py` to expose it to your agent — or `python 01_program_project_management_pmo_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PPM / PMO tooling · RAID / issue + change log",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Program & project management (PMO)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the baselined plan: charter + scope + schedule + budget + RAID log\nstatus + milestone/budget tracking vs baseline + scope change-control\nRACI + decision log\nstage-gate approvals before each phase"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates).",
        "The test: Verify the program is managed with discipline.",
        "Reconcile the systems of record (PPM / PMO tooling, RAID / issue + change log, Schedule + budget baseline (EVM)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The program runs with no baselined schedule or RAID log; status is reported 'green' against a moving target while scope quietly expands, and no stage-gate approval was taken before build began."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "ISACA — IS audit / project assurance",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_program_project_management_pmo_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/01_program_project_management_pmo_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Program & project management (PMO)\" (the program/project management plan + governance (charter, scope, schedule, raid log — risks/assumptions/issues/dependencies, stage-gates)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Program & project management (PMO)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the program is managed with discipline. PASS: there's a baselined plan (charter, scope, schedule, budget), an active RAID log, status + milestone/budget tracking against baseline, scope change-control, a RACI/decision log, and stage-gate approvals before each phase. Exceptions: no baselined plan or RAID log, status reporting that doesn't track to baseline (green-shifting), uncontrolled scope creep, and phases proceeding with no stage-gate approval. The evidence — The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PPM / PMO tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PPM / PMO tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PPM / PMO tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Program & project management (PMO)\" Audit Evidence\n\nThe test:\nVerify the program is managed with discipline. PASS: there's a baselined plan (charter, scope, schedule, budget), an active RAID log, status + milestone/budget tracking against baseline, scope change-control, a RACI/decision log, and stage-gate approvals before each phase. Exceptions: no baselined plan or RAID log, status reporting that doesn't track to baseline (green-shifting), uncontrolled scope creep, and phases proceeding with no stage-gate approval.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Program & project management (PMO)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Program & project management (PMO)\" control must cover\n# fragment: program_project_management_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "program_project_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Program & project management (PMO)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the program & project management (pmo) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the program & project management (pmo) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for program & project management (pmo) against comparable organisations in the sector",
            "Obtain evidence that the program & project management (pmo) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Program & project management (PMO)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Program & project management (PMO)\" control?",
          "options": [
            "A point-in-time screenshot of one system's program & project management (pmo) settings, captured during the walkthrough",
            "The The program/project management plan + governance (charter, scope, schedule, RAID log — risks/assumptions/issues/dependencies, stage-gates), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the program & project management (pmo) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's program & project management (pmo) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Program & project management (PMO)\"?",
          "options": [
            "From PPM / PMO tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how program & project management (pmo) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PPM / PMO tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Program & project management (PMO)\"?",
          "options": [
            "The external audit firm, since it is the party examining the program & project management (pmo) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the program & project management (pmo) data is shared, so the accountability sits with no one in particular",
            "Program / PMO leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program / PMO leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Program & project management (PMO)\", which part stays with the human auditor?",
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
          "id": "sie-01-q7",
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
          "id": "sie-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Program & project management (PMO)\", which of these is a realistic reportable finding?",
          "options": [
            "The program runs with no baselined schedule or RAID log; status is reported 'green' against a moving target while scope quietly expands, and no stage-gate approval was taken before build began.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The program runs with no baselined schedule or RAID log; status is reported 'green' against a moving target while scope quietly expands, and no stage-gate approval was taken before build began. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-01-q9",
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
          "id": "sie-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Program & project management (PMO)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind program & project management (pmo), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-02",
    "order": 2,
    "title": "Enterprise architecture",
    "subtitle": "Agentic technical & privacy audit of the enterprise architecture control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 4,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Enterprise architecture\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the solution is architected to enterprise standards. PASS: the solution architecture aligns to the EA/reference standards and target state, an architecture board signs it off against non-functional requirements (performance/scalability/security/availability), integration + data architecture are designed across the landscape, and configure-vs-customize decisions are governed. Exceptions: a point solution designed in isolation from the EA, no NFRs or ARB review, undesigned integrations discovered during build, and unchecked customization creating technical debt.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Enterprise architecture repository; Architecture Review Board records; Integration / interface design) as tools — e.g. `solution architecture vs EA/reference standards + target state`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards)",
        "The architecture review/governance sign-off (ARB) on the design, including non-functional requirements (performance, scalability, security, availability)",
        "Integration design across the system landscape (interfaces, APIs, middleware, the data flows)",
        "Evidence the design avoids un-governed customization/technical debt (fit-gap, configure-vs-customize decisions)"
      ],
      "system": [
        "Enterprise architecture repository",
        "Architecture Review Board records",
        "Integration / interface design",
        "NFR + fit-gap documentation"
      ],
      "dataOwner": [
        "Enterprise architecture",
        "Solution architects",
        "Integration leads"
      ],
      "scoring": {
        "ease": "EASE 4/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-02-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Enterprise architecture",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Enterprise architecture\" as a repeatable agentic workflow: pull the real evidence (The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Enterprise architecture\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Enterprise architecture repository, Architecture Review Board records, Integration / interface design — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `solution architecture vs EA/reference standards + target state` — read-only, against the systems of record.",
        "The test itself is specific. Verify the solution is architected to enterprise standards. PASS: the solution architecture aligns to the EA/reference standards and target state, an architecture board signs it off against non-functional requirements (performance/scalability/security/availability), integration + data architecture are designed across the landscape, and configure-vs-customize decisions are governed. Exceptions: a point solution designed in isolation from the EA, no NFRs or ARB review, undesigned integrations discovered during build, and unchecked customization creating technical debt. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_enterprise_architecture_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Enterprise architecture repository and Architecture Review Board records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_enterprise_architecture_mcp.py` to expose it to your agent — or `python 02_enterprise_architecture_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Enterprise architecture repository · Architecture Review Board records",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Enterprise architecture\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "solution architecture vs EA/reference standards + target state\nARB sign-off incl. NFRs (performance, scalability, security, availability)\nintegration + data architecture across the landscape\nconfigure-vs-customize governance (avoiding un-governed customisation/tech debt)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards).",
        "The test: Verify the solution is architected to enterprise standards.",
        "Reconcile the systems of record (Enterprise architecture repository, Architecture Review Board records, Integration / interface design) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The solution was designed in isolation from the enterprise architecture with no NFRs and no architecture-board review; integrations were never designed (discovered during build), and heavy custom code created technical debt that breaks at every vendor upgrade."
      ],
      "references": [
        {
          "title": "TOGAF — enterprise architecture",
          "url": "https://www.opengroup.org/togaf"
        },
        {
          "title": "ISACA",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_enterprise_architecture_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/02_enterprise_architecture_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Enterprise architecture\" (the solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Enterprise architecture\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the solution is architected to enterprise standards. PASS: the solution architecture aligns to the EA/reference standards and target state, an architecture board signs it off against non-functional requirements (performance/scalability/security/availability), integration + data architecture are designed across the landscape, and configure-vs-customize decisions are governed. Exceptions: a point solution designed in isolation from the EA, no NFRs or ARB review, undesigned integrations discovered during build, and unchecked customization creating technical debt. The evidence — The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Enterprise architecture repository APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Enterprise architecture repository gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Enterprise architecture repository; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Enterprise architecture\" Audit Evidence\n\nThe test:\nVerify the solution is architected to enterprise standards. PASS: the solution architecture aligns to the EA/reference standards and target state, an architecture board signs it off against non-functional requirements (performance/scalability/security/availability), integration + data architecture are designed across the landscape, and configure-vs-customize decisions are governed. Exceptions: a point solution designed in isolation from the EA, no NFRs or ARB review, undesigned integrations discovered during build, and unchecked customization creating technical debt.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Enterprise architecture\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Enterprise architecture\" control must cover\n# fragment: enterprise_architecture_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "enterprise_architecture_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Enterprise architecture\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the enterprise architecture control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the enterprise architecture control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for enterprise architecture against comparable organisations in the sector",
            "Obtain evidence that the enterprise architecture control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Enterprise architecture\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Enterprise architecture\" control?",
          "options": [
            "A point-in-time screenshot of one system's enterprise architecture settings, captured during the walkthrough",
            "The The solution architecture + its alignment to the enterprise architecture/reference standards (target-state design, integration architecture, data architecture, technology standards), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the enterprise architecture control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's enterprise architecture capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Enterprise architecture\"?",
          "options": [
            "From Enterprise architecture repository and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how enterprise architecture works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Enterprise architecture repository) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Enterprise architecture\"?",
          "options": [
            "The external audit firm, since it is the party examining the enterprise architecture control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the enterprise architecture data is shared, so the accountability sits with no one in particular",
            "Enterprise architecture, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Enterprise architecture owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Enterprise architecture\", which part stays with the human auditor?",
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
          "id": "sie-02-q7",
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
          "id": "sie-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Enterprise architecture\", which of these is a realistic reportable finding?",
          "options": [
            "The solution was designed in isolation from the enterprise architecture with no NFRs and no architecture-board review; integrations were never designed (discovered during build), and heavy custom code created technical debt that breaks at every vendor upgrade.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The solution was designed in isolation from the enterprise architecture with no NFRs and no architecture-board review; integrations were never designed (discovered during build), and heavy custom code created technical debt that breaks at every vendor upgrade. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-02-q9",
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
          "id": "sie-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Enterprise architecture\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind enterprise architecture, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-03",
    "order": 3,
    "title": "Development",
    "subtitle": "Agentic technical & privacy audit of the development control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Development\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify development/configuration is controlled. PASS: development follows standards (version control, peer review, environment separation, a build pipeline), built config/code traces to approved requirements/design, secure-development practices apply to custom code (review, SAST, dependency + secrets scanning), and promotion dev→test→prod is approval-gated. Exceptions: development in shared/unversioned environments, no requirements-to-build traceability (scope drift in code), no security review of custom code, and changes promoted to prod with no approval.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Version control + build/CI pipeline; Requirements ↔ build traceability; SAST / SCA security scanning) as tools — e.g. `development/config standards: version control + peer review + environm`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation)",
        "Traceability from requirements/design to the built configuration/code (so what was built matches what was specified + approved)",
        "Secure-development practices (code review, SAST/dependency scanning, secrets handling) for any custom code",
        "Defect/build management + the promotion path dev→test→prod with approvals"
      ],
      "system": [
        "Version control + build/CI pipeline",
        "Requirements ↔ build traceability",
        "SAST / SCA security scanning",
        "Environment / promotion controls"
      ],
      "dataOwner": [
        "Development / configuration leads",
        "Business analysts (traceability)",
        "AppSec"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-03-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Development",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Development\" as a repeatable agentic workflow: pull the real evidence (The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Development\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Version control + build/CI pipeline, Requirements ↔ build traceability, SAST / SCA security scanning — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `development/config standards: version control + peer review + environment separa` — read-only, against the systems of record.",
        "The test itself is specific. Verify development/configuration is controlled. PASS: development follows standards (version control, peer review, environment separation, a build pipeline), built config/code traces to approved requirements/design, secure-development practices apply to custom code (review, SAST, dependency + secrets scanning), and promotion dev→test→prod is approval-gated. Exceptions: development in shared/unversioned environments, no requirements-to-build traceability (scope drift in code), no security review of custom code, and changes promoted to prod with no approval. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_development_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Version control + build/CI pipeline and Requirements ↔ build traceability (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_development_mcp.py` to expose it to your agent — or `python 03_development_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Version control + build/CI pipeline · Requirements ↔ build traceability",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
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
          "code": "development/config standards: version control + peer review + environment separation + build pipeline\ntraceability: approved requirements/design → built config/code\nsecure-dev for custom code: review + SAST + dependency/secrets scanning\npromotion dev→test→prod with approvals"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation).",
        "The test: Verify development/configuration is controlled.",
        "Reconcile the systems of record (Version control + build/CI pipeline, Requirements ↔ build traceability, SAST / SCA security scanning) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Configuration is built directly in shared environments with no version control or peer review, there's no traceability from approved requirements to what was actually built, and custom code ships with no security review."
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
          "url": "/audit-code/sysimpl-enterprise/03_development_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Development\" (the development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Development\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify development/configuration is controlled. PASS: development follows standards (version control, peer review, environment separation, a build pipeline), built config/code traces to approved requirements/design, secure-development practices apply to custom code (review, SAST, dependency + secrets scanning), and promotion dev→test→prod is approval-gated. Exceptions: development in shared/unversioned environments, no requirements-to-build traceability (scope drift in code), no security review of custom code, and changes promoted to prod with no approval. The evidence — The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Version control + build/CI pipeline APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Version control + build/CI pipeline gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Version control + build/CI pipeline; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Development\" Audit Evidence\n\nThe test:\nVerify development/configuration is controlled. PASS: development follows standards (version control, peer review, environment separation, a build pipeline), built config/code traces to approved requirements/design, secure-development practices apply to custom code (review, SAST, dependency + secrets scanning), and promotion dev→test→prod is approval-gated. Exceptions: development in shared/unversioned environments, no requirements-to-build traceability (scope drift in code), no security review of custom code, and changes promoted to prod with no approval.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Development\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Development\" control must cover\n# fragment: development_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "development_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Development\" sub-process of System Implementation — Enterprise?",
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
          "id": "sie-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Development\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Development\" control?",
          "options": [
            "A point-in-time screenshot of one system's development settings, captured during the walkthrough",
            "The The development/configuration standards + evidence they're followed (coding/config standards, peer review, version control, the build pipeline, environment separation), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the development control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's development capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Development\"?",
          "options": [
            "From Version control + build/CI pipeline and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how development works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Version control + build/CI pipeline) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Development\"?",
          "options": [
            "The external audit firm, since it is the party examining the development control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the development data is shared, so the accountability sits with no one in particular",
            "Development / configuration leads, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Development / configuration leads owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-03-q6",
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
          "id": "sie-03-q7",
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
          "id": "sie-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Development\", which of these is a realistic reportable finding?",
          "options": [
            "Configuration is built directly in shared environments with no version control or peer review, there's no traceability from approved requirements to what was actually built, and custom code ships with no security review.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Configuration is built directly in shared environments with no version control or peer review, there's no traceability from approved requirements to what was actually built, and custom code ships with no security review. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-03-q9",
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
          "id": "sie-03-q10",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-04",
    "order": 4,
    "title": "Testing & QA (E2E)",
    "subtitle": "Agentic technical & privacy audit of the testing & qa (e2e) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Testing & QA (E2E)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify testing is rigorous before go-live. PASS: a test strategy covers all levels (unit/system/integration/E2E/performance/security/regression) with entry/exit criteria, coverage traces requirements→tests→results, defects are tracked with severity-based exit gates, UAT is signed off by the business, and performance + security testing meets NFRs. Exceptions: testing limited to happy-path/unit, no requirements-to-test traceability, open high-severity defects waived at go-live, no business UAT sign-off, and no performance/security testing.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Test management + defect tracking; Requirements ↔ test traceability; Performance/load + security test tooling) as tools — e.g. `test strategy across levels (unit/system/integration/E2E/performance/s`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria",
        "Test coverage traceability (requirements → test cases → results) + the defect log with severity-based exit criteria",
        "UAT evidence — business sign-off that the system meets requirements before go-live",
        "Performance/load + security testing results against NFRs"
      ],
      "system": [
        "Test management + defect tracking",
        "Requirements ↔ test traceability",
        "Performance/load + security test tooling",
        "UAT sign-off records"
      ],
      "dataOwner": [
        "QA / test management",
        "Business process owners (UAT)",
        "Performance + security testing"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-04-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Testing & QA (E2E)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Testing & QA (E2E)\" as a repeatable agentic workflow: pull the real evidence (The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Testing & QA (E2E)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Test management + defect tracking, Requirements ↔ test traceability, Performance/load + security test tooling — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `test strategy across levels (unit/system/integration/E2E/performance/security/re` — read-only, against the systems of record.",
        "The test itself is specific. Verify testing is rigorous before go-live. PASS: a test strategy covers all levels (unit/system/integration/E2E/performance/security/regression) with entry/exit criteria, coverage traces requirements→tests→results, defects are tracked with severity-based exit gates, UAT is signed off by the business, and performance + security testing meets NFRs. Exceptions: testing limited to happy-path/unit, no requirements-to-test traceability, open high-severity defects waived at go-live, no business UAT sign-off, and no performance/security testing. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_testing_qa_e2e_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Test management + defect tracking and Requirements ↔ test traceability (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_testing_qa_e2e_mcp.py` to expose it to your agent — or `python 04_testing_qa_e2e_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Testing & QA (E2E)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "test strategy across levels (unit/system/integration/E2E/performance/security/regression) + entry/exit criteria\ncoverage traceability: requirements → test cases → results + defect log\nUAT business sign-off before go-live\nperformance/load + security testing vs NFRs"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria.",
        "The test: Verify testing is rigorous before go-live.",
        "Reconcile the systems of record (Test management + defect tracking, Requirements ↔ test traceability, Performance/load + security test tooling) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Only unit and happy-path testing was done; there's no end-to-end, performance, or security testing, several high-severity defects were waived to hold the go-live date, and the business never signed off UAT."
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
          "name": "04_testing_qa_e2e_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/04_testing_qa_e2e_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Testing & QA (E2E)\" (the test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Testing & QA (E2E)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify testing is rigorous before go-live. PASS: a test strategy covers all levels (unit/system/integration/E2E/performance/security/regression) with entry/exit criteria, coverage traces requirements→tests→results, defects are tracked with severity-based exit gates, UAT is signed off by the business, and performance + security testing meets NFRs. Exceptions: testing limited to happy-path/unit, no requirements-to-test traceability, open high-severity defects waived at go-live, no business UAT sign-off, and no performance/security testing. The evidence — The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Test management + defect tracking APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Test management + defect tracking gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Test management + defect tracking; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Testing & QA (E2E)\" Audit Evidence\n\nThe test:\nVerify testing is rigorous before go-live. PASS: a test strategy covers all levels (unit/system/integration/E2E/performance/security/regression) with entry/exit criteria, coverage traces requirements→tests→results, defects are tracked with severity-based exit gates, UAT is signed off by the business, and performance + security testing meets NFRs. Exceptions: testing limited to happy-path/unit, no requirements-to-test traceability, open high-severity defects waived at go-live, no business UAT sign-off, and no performance/security testing.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria)\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Testing & QA (E2E)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Testing & QA (E2E)\" control must cover\n# fragment: testing_qa_e2e_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "testing_qa_e2e_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Testing & QA (E2E)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the testing & qa (e2e) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the testing & qa (e2e) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for testing & qa (e2e) against comparable organisations in the sector",
            "Obtain evidence that the testing & qa (e2e) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Testing & QA (E2E)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Testing & QA (E2E)\" control?",
          "options": [
            "A point-in-time screenshot of one system's testing & qa (e2e) settings, captured during the walkthrough",
            "The The test strategy + plan covering all levels (unit, system, integration, end-to-end, performance/load, security, regression) with entry/exit criteria, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the testing & qa (e2e) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's testing & qa (e2e) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Testing & QA (E2E)\"?",
          "options": [
            "From Test management + defect tracking and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how testing & qa (e2e) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Test management + defect tracking) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Testing & QA (E2E)\"?",
          "options": [
            "The external audit firm, since it is the party examining the testing & qa (e2e) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the testing & qa (e2e) data is shared, so the accountability sits with no one in particular",
            "QA / test management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "QA / test management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Testing & QA (E2E)\", which part stays with the human auditor?",
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
          "id": "sie-04-q7",
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
          "id": "sie-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Testing & QA (E2E)\", which of these is a realistic reportable finding?",
          "options": [
            "Only unit and happy-path testing was done; there's no end-to-end, performance, or security testing, several high-severity defects were waived to hold the go-live date, and the business never signed off UAT.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Only unit and happy-path testing was done; there's no end-to-end, performance, or security testing, several high-severity defects were waived to hold the go-live date, and the business never signed off UAT. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-04-q9",
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
          "id": "sie-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Testing & QA (E2E)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind testing & qa (e2e), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-05",
    "order": 5,
    "title": "Implement (go-live, phased)",
    "subtitle": "Agentic technical & privacy audit of the implement (go-live, phased) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Implement (go-live, phased)\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify go-live is gated by readiness. PASS: a go-live readiness assessment scores the program against defined criteria (testing, data, training, support, backout), the rollout approach (phased/pilot vs big-bang) is risk-justified, and an authorised go/no-go decision is recorded against met criteria. Exceptions: go-live with no readiness assessment, criteria waived under schedule pressure (untested/untrained go-live), an unjustified big-bang on a high-risk system, and no recorded go/no-go authority.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Go-live readiness checklist; Go/no-go decision records; Rollout / cutover plan) as tools — e.g. `go-live readiness assessment vs defined criteria (testing, data, train`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready)",
        "The implementation/rollout approach (big-bang vs phased/pilot) + its risk justification",
        "The go/no-go authority + sign-off (who decided, against what criteria, recorded)",
        "Evidence readiness criteria were actually met (not waived under schedule pressure)"
      ],
      "system": [
        "Go-live readiness checklist",
        "Go/no-go decision records",
        "Rollout / cutover plan",
        "Readiness-criteria evidence"
      ],
      "dataOwner": [
        "Program leadership + steering committee",
        "Business process owners",
        "Operations readiness"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-05-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Implement (go-live, phased)",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Implement (go-live, phased)\" as a repeatable agentic workflow: pull the real evidence (The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Implement (go-live, phased)\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Go-live readiness checklist, Go/no-go decision records, Rollout / cutover plan — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `go-live readiness assessment vs defined criteria (testing, data, training, suppo` — read-only, against the systems of record.",
        "The test itself is specific. Verify go-live is gated by readiness. PASS: a go-live readiness assessment scores the program against defined criteria (testing, data, training, support, backout), the rollout approach (phased/pilot vs big-bang) is risk-justified, and an authorised go/no-go decision is recorded against met criteria. Exceptions: go-live with no readiness assessment, criteria waived under schedule pressure (untested/untrained go-live), an unjustified big-bang on a high-risk system, and no recorded go/no-go authority. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_implement_go_live_phased_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Go-live readiness checklist and Go/no-go decision records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_implement_go_live_phased_mcp.py` to expose it to your agent — or `python 05_implement_go_live_phased_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Go-live readiness checklist · Go/no-go decision records",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Implement (go-live, phased)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "go-live readiness assessment vs defined criteria (testing, data, training, support, backout)\nrollout approach (big-bang vs phased/pilot) + risk justification\nauthorised go/no-go decision recorded against met criteria\nwere readiness criteria met (not waived under schedule pressure)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready).",
        "The test: Verify go-live is gated by readiness.",
        "Reconcile the systems of record (Go-live readiness checklist, Go/no-go decision records, Rollout / cutover plan) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Go-live was approved against a date, not a readiness assessment; testing was incomplete, users were untrained, and the no-go criteria (open severity-1 defects) were waived under pressure — the system went live unready."
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
          "name": "05_implement_go_live_phased_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/05_implement_go_live_phased_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Implement (go-live, phased)\" (the go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Implement (go-live, phased)\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify go-live is gated by readiness. PASS: a go-live readiness assessment scores the program against defined criteria (testing, data, training, support, backout), the rollout approach (phased/pilot vs big-bang) is risk-justified, and an authorised go/no-go decision is recorded against met criteria. Exceptions: go-live with no readiness assessment, criteria waived under schedule pressure (untested/untrained go-live), an unjustified big-bang on a high-risk system, and no recorded go/no-go authority. The evidence — The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Go-live readiness checklist APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Go-live readiness checklist gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Go-live readiness checklist; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Implement (go-live, phased)\" Audit Evidence\n\nThe test:\nVerify go-live is gated by readiness. PASS: a go-live readiness assessment scores the program against defined criteria (testing, data, training, support, backout), the rollout approach (phased/pilot vs big-bang) is risk-justified, and an authorised go/no-go decision is recorded against met criteria. Exceptions: go-live with no readiness assessment, criteria waived under schedule pressure (untested/untrained go-live), an unjustified big-bang on a high-risk system, and no recorded go/no-go authority.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Implement (go-live, phased)\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Implement (go-live, phased)\" control must cover\n# fragment: implement_golive_phased_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "implement_golive_phased_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Implement (go-live, phased)\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the implement (go-live, phased) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the implement (go-live, phased) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for implement (go-live, phased) against comparable organisations in the sector",
            "Obtain evidence that the implement (go-live, phased) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Implement (go-live, phased)\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Implement (go-live, phased)\" control?",
          "options": [
            "A point-in-time screenshot of one system's implement (go-live, phased) settings, captured during the walkthrough",
            "The The go-live readiness assessment + decision (a go/no-go checklist against defined readiness criteria — testing complete, data ready, training done, support ready, backout ready), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the implement (go-live, phased) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's implement (go-live, phased) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Implement (go-live, phased)\"?",
          "options": [
            "From Go-live readiness checklist and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how implement (go-live, phased) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Go-live readiness checklist) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Implement (go-live, phased)\"?",
          "options": [
            "The external audit firm, since it is the party examining the implement (go-live, phased) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the implement (go-live, phased) data is shared, so the accountability sits with no one in particular",
            "Program leadership + steering committee, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program leadership + steering committee owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Implement (go-live, phased)\", which part stays with the human auditor?",
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
          "id": "sie-05-q7",
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
          "id": "sie-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Implement (go-live, phased)\", which of these is a realistic reportable finding?",
          "options": [
            "Go-live was approved against a date, not a readiness assessment; testing was incomplete, users were untrained, and the no-go criteria (open severity-1 defects) were waived under pressure — the system went live unready.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Go-live was approved against a date, not a readiness assessment; testing was incomplete, users were untrained, and the no-go criteria (open severity-1 defects) were waived under pressure — the system went live unready. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-05-q9",
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
          "id": "sie-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Implement (go-live, phased)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind implement (go-live, phased), so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-06",
    "order": 6,
    "title": "Cutover",
    "subtitle": "Agentic technical & privacy audit of the cutover control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cutover\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cutover is planned, rehearsed, and reversible. PASS: there's a detailed cutover runbook (sequenced tasks/owners/timings, freeze), it's been rehearsed (dry-run proving timings), a tested backout plan with trigger criteria exists, and execution has validation checkpoints + go/no-go points. Exceptions: an unrehearsed cutover (timings unknown, runs past the window), no backout plan or an untested one, no validation between steps, and no freeze period (changes landing mid-cutover).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Cutover runbook + schedule; Dry-run / rehearsal records; Backout / rollback plan) as tools — e.g. `detailed cutover runbook (sequenced tasks, owners, timings, freeze per`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period)",
        "The tested/rehearsed cutover (a dry-run/dress rehearsal proving the sequence + timings work) + go/no-go checkpoints within the cutover",
        "The backout/rollback plan with its own trigger criteria and tested feasibility",
        "Cutover execution evidence + validation checkpoints (reconciliation that each step succeeded before proceeding)"
      ],
      "system": [
        "Cutover runbook + schedule",
        "Dry-run / rehearsal records",
        "Backout / rollback plan",
        "Cutover validation / reconciliation"
      ],
      "dataOwner": [
        "Cutover / release manager",
        "Technical + business leads",
        "Operations"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-06-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Cutover",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cutover\" as a repeatable agentic workflow: pull the real evidence (The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Cutover\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Cutover runbook + schedule, Dry-run / rehearsal records, Backout / rollback plan — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `detailed cutover runbook (sequenced tasks, owners, timings, freeze period)` — read-only, against the systems of record.",
        "The test itself is specific. Verify cutover is planned, rehearsed, and reversible. PASS: there's a detailed cutover runbook (sequenced tasks/owners/timings, freeze), it's been rehearsed (dry-run proving timings), a tested backout plan with trigger criteria exists, and execution has validation checkpoints + go/no-go points. Exceptions: an unrehearsed cutover (timings unknown, runs past the window), no backout plan or an untested one, no validation between steps, and no freeze period (changes landing mid-cutover). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_cutover_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Cutover runbook + schedule and Dry-run / rehearsal records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_cutover_mcp.py` to expose it to your agent — or `python 06_cutover_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Cutover runbook + schedule · Dry-run / rehearsal records",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
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
          "code": "detailed cutover runbook (sequenced tasks, owners, timings, freeze period)\nrehearsed cutover (dry-run proving sequence + timings) + go/no-go checkpoints\ntested backout/rollback plan + trigger criteria\nexecution validation/reconciliation between steps"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period).",
        "The test: Verify cutover is planned, rehearsed, and reversible.",
        "Reconcile the systems of record (Cutover runbook + schedule, Dry-run / rehearsal records, Backout / rollback plan) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The cutover was never rehearsed, so it ran hours past its window; there was no tested backout plan, and when a step failed mid-cutover there was no way to validate state or roll back — the business was down."
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
          "url": "/audit-code/sysimpl-enterprise/06_cutover_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Cutover\" (the detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cutover\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify cutover is planned, rehearsed, and reversible. PASS: there's a detailed cutover runbook (sequenced tasks/owners/timings, freeze), it's been rehearsed (dry-run proving timings), a tested backout plan with trigger criteria exists, and execution has validation checkpoints + go/no-go points. Exceptions: an unrehearsed cutover (timings unknown, runs past the window), no backout plan or an untested one, no validation between steps, and no freeze period (changes landing mid-cutover). The evidence — The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Cutover runbook + schedule APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Cutover runbook + schedule gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Cutover runbook + schedule; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Cutover\" Audit Evidence\n\nThe test:\nVerify cutover is planned, rehearsed, and reversible. PASS: there's a detailed cutover runbook (sequenced tasks/owners/timings, freeze), it's been rehearsed (dry-run proving timings), a tested backout plan with trigger criteria exists, and execution has validation checkpoints + go/no-go points. Exceptions: an unrehearsed cutover (timings unknown, runs past the window), no backout plan or an untested one, no validation between steps, and no freeze period (changes landing mid-cutover).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cutover\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cutover\" control must cover\n# fragment: cutover_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "cutover_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cutover\" sub-process of System Implementation — Enterprise?",
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
          "id": "sie-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cutover\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cutover\" control?",
          "options": [
            "A point-in-time screenshot of one system's cutover settings, captured during the walkthrough",
            "The The detailed cutover plan + runbook (sequenced tasks, owners, timings, dependencies, the cutover window, freeze period), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the cutover control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's cutover capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Cutover\"?",
          "options": [
            "From Cutover runbook + schedule and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how cutover works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Cutover runbook + schedule) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cutover\"?",
          "options": [
            "The external audit firm, since it is the party examining the cutover control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the cutover data is shared, so the accountability sits with no one in particular",
            "Cutover / release manager, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cutover / release manager owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-06-q6",
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
          "id": "sie-06-q7",
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
          "id": "sie-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cutover\", which of these is a realistic reportable finding?",
          "options": [
            "The cutover was never rehearsed, so it ran hours past its window; there was no tested backout plan, and when a step failed mid-cutover there was no way to validate state or roll back — the business was down.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The cutover was never rehearsed, so it ran hours past its window; there was no tested backout plan, and when a step failed mid-cutover there was no way to validate state or roll back — the business was down. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-06-q9",
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
          "id": "sie-06-q10",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-07",
    "order": 7,
    "title": "Data conversion and migration",
    "subtitle": "Agentic technical & privacy audit of the data conversion and migration control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data conversion and migration\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data migration is controlled + reconciled. PASS: there's a migration strategy + field mapping/transformation rules, source data is cleansed before migration, migration is tested via trial loads with record-count + control-total reconciliation and business validation/sign-off of converted data, and there's a fallback for failure. Exceptions: migration with no mapping/cleansing (garbage migrated), no reconciliation (records silently lost or duplicated), no business validation of converted data, and no fallback if the load fails.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (ETL / migration tooling; Source→target mapping + transformation rules; Reconciliation / control-total reports) as tools — e.g. `migration strategy + source→target mapping + transformation rules + sc`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived)",
        "Data cleansing + quality remediation before migration (the source-data quality assessment, de-duplication, defect remediation)",
        "Migration testing + reconciliation (trial loads, record counts + control-total reconciliation source vs target, validation of converted data, the sign-off)",
        "Fallback for migration failure + the cut-over data freeze/reconciliation"
      ],
      "system": [
        "ETL / migration tooling",
        "Source→target mapping + transformation rules",
        "Reconciliation / control-total reports",
        "Data-validation sign-off"
      ],
      "dataOwner": [
        "Data migration lead + data owners",
        "Business validation",
        "DBA / data engineering"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-07-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Data conversion and migration",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data conversion and migration\" as a repeatable agentic workflow: pull the real evidence (The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Data conversion and migration\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ETL / migration tooling, Source→target mapping + transformation rules, Reconciliation / control-total reports — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `migration strategy + source→target mapping + transformation rules + scope (migra` — read-only, against the systems of record.",
        "The test itself is specific. Verify data migration is controlled + reconciled. PASS: there's a migration strategy + field mapping/transformation rules, source data is cleansed before migration, migration is tested via trial loads with record-count + control-total reconciliation and business validation/sign-off of converted data, and there's a fallback for failure. Exceptions: migration with no mapping/cleansing (garbage migrated), no reconciliation (records silently lost or duplicated), no business validation of converted data, and no fallback if the load fails. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_data_conversion_and_migration_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ETL / migration tooling and Source→target mapping + transformation rules (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_data_conversion_and_migration_mcp.py` to expose it to your agent — or `python 07_data_conversion_and_migration_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ETL / migration tooling · Source→target mapping + transformation rules",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
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
          "code": "migration strategy + source→target mapping + transformation rules + scope (migrate vs archive)\ndata cleansing + quality remediation before migration\nmigration testing + reconciliation (counts + control totals source vs target) + business sign-off\nfallback for migration failure + cut-over data freeze"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived).",
        "The test: Verify data migration is controlled + reconciled.",
        "Reconcile the systems of record (ETL / migration tooling, Source→target mapping + transformation rules, Reconciliation / control-total reports) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Data was migrated with no cleansing and no reconciliation — record counts don't match between source and target, duplicate and malformed master data corrupted downstream processes, and the business never validated or signed off the converted data."
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
          "url": "/audit-code/sysimpl-enterprise/07_data_conversion_and_migration_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Data conversion and migration\" (the data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data conversion and migration\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify data migration is controlled + reconciled. PASS: there's a migration strategy + field mapping/transformation rules, source data is cleansed before migration, migration is tested via trial loads with record-count + control-total reconciliation and business validation/sign-off of converted data, and there's a fallback for failure. Exceptions: migration with no mapping/cleansing (garbage migrated), no reconciliation (records silently lost or duplicated), no business validation of converted data, and no fallback if the load fails. The evidence — The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ETL / migration tooling APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ETL / migration tooling gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ETL / migration tooling; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Data conversion and migration\" Audit Evidence\n\nThe test:\nVerify data migration is controlled + reconciled. PASS: there's a migration strategy + field mapping/transformation rules, source data is cleansed before migration, migration is tested via trial loads with record-count + control-total reconciliation and business validation/sign-off of converted data, and there's a fallback for failure. Exceptions: migration with no mapping/cleansing (garbage migrated), no reconciliation (records silently lost or duplicated), no business validation of converted data, and no fallback if the load fails.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data conversion and migration\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data conversion and migration\" control must cover\n# fragment: data_conversion_migration_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "data_conversion_migration_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data conversion and migration\" sub-process of System Implementation — Enterprise?",
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
          "id": "sie-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data conversion and migration\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data conversion and migration\" control?",
          "options": [
            "A point-in-time screenshot of one system's data conversion and migration settings, captured during the walkthrough",
            "The The data migration strategy + mapping (source→target field mapping, transformation rules, the scope of data migrated vs archived), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data conversion and migration control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data conversion and migration capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data conversion and migration\"?",
          "options": [
            "From ETL / migration tooling and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data conversion and migration works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ETL / migration tooling) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data conversion and migration\"?",
          "options": [
            "The external audit firm, since it is the party examining the data conversion and migration control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data conversion and migration data is shared, so the accountability sits with no one in particular",
            "Data migration lead + data owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data migration lead + data owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-07-q6",
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
          "id": "sie-07-q7",
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
          "id": "sie-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data conversion and migration\", which of these is a realistic reportable finding?",
          "options": [
            "Data was migrated with no cleansing and no reconciliation — record counts don't match between source and target, duplicate and malformed master data corrupted downstream processes, and the business never validated or signed off the converted data.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Data was migrated with no cleansing and no reconciliation — record counts don't match between source and target, duplicate and malformed master data corrupted downstream processes, and the business never validated or signed off the converted data. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-07-q9",
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
          "id": "sie-07-q10",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-08",
    "order": 8,
    "title": "Post-implementation support / hypercare",
    "subtitle": "Agentic technical & privacy audit of the post-implementation support / hypercare control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-implementation support / hypercare\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify post-go-live support stabilises the system. PASS: a hypercare plan provides elevated support with a command center, defect triage + SLA, and daily checkpoints; defects are tracked with an exit gate before BAU transition; operations/support handover (runbooks, KT, support model) is done; and the system is demonstrably stable before hypercare stands down. Exceptions: no hypercare after go-live (users abandoned with a broken system), no defect SLA or exit criteria, no handover to BAU support, and hypercare ended while the system was still unstable.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Hypercare command center + ITSM; Defect / incident tracking + SLA; Operations handover / runbooks) as tools — e.g. `hypercare plan: staffing, command center, defect triage + SLA, daily c`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints)",
        "Incident/defect tracking during stabilisation + the criteria/exit gate to transition from hypercare to BAU support",
        "The transition-to-operations/support handover (runbooks, knowledge transfer to the support team, the support model/tiers)",
        "Evidence post-go-live issues were resolved + the system stabilised before standing down hypercare"
      ],
      "system": [
        "Hypercare command center + ITSM",
        "Defect / incident tracking + SLA",
        "Operations handover / runbooks",
        "Stabilisation exit-criteria records"
      ],
      "dataOwner": [
        "Program + operations/support leadership",
        "Application support team",
        "Business process owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-08-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Post-implementation support / hypercare",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-implementation support / hypercare\" as a repeatable agentic workflow: pull the real evidence (The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Post-implementation support / hypercare\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Hypercare command center + ITSM, Defect / incident tracking + SLA, Operations handover / runbooks — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `hypercare plan: staffing, command center, defect triage + SLA, daily checkpoints` — read-only, against the systems of record.",
        "The test itself is specific. Verify post-go-live support stabilises the system. PASS: a hypercare plan provides elevated support with a command center, defect triage + SLA, and daily checkpoints; defects are tracked with an exit gate before BAU transition; operations/support handover (runbooks, KT, support model) is done; and the system is demonstrably stable before hypercare stands down. Exceptions: no hypercare after go-live (users abandoned with a broken system), no defect SLA or exit criteria, no handover to BAU support, and hypercare ended while the system was still unstable. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_post_implementation_support_hypercare_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Hypercare command center + ITSM and Defect / incident tracking + SLA (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_post_implementation_support_hypercare_mcp.py` to expose it to your agent — or `python 08_post_implementation_support_hypercare_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Hypercare command center + ITSM · Defect / incident tracking + SLA",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-implementation support / hypercare\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "hypercare plan: staffing, command center, defect triage + SLA, daily checkpoints\ndefect tracking during stabilisation + exit gate to BAU\ntransition-to-operations handover (runbooks, KT, support model)\nsystem stabilised before standing down hypercare?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints).",
        "The test: Verify post-go-live support stabilises the system.",
        "Reconcile the systems of record (Hypercare command center + ITSM, Defect / incident tracking + SLA, Operations handover / runbooks) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There was no hypercare — the project team rolled off at go-live, leaving an unstable system with no defect SLA and no handover to a support team; critical post-go-live issues went unowned for weeks."
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
          "name": "08_post_implementation_support_hypercare_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/08_post_implementation_support_hypercare_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Post-implementation support / hypercare\" (the hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + sla, daily checkpoints)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-implementation support / hypercare\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify post-go-live support stabilises the system. PASS: a hypercare plan provides elevated support with a command center, defect triage + SLA, and daily checkpoints; defects are tracked with an exit gate before BAU transition; operations/support handover (runbooks, KT, support model) is done; and the system is demonstrably stable before hypercare stands down. Exceptions: no hypercare after go-live (users abandoned with a broken system), no defect SLA or exit criteria, no handover to BAU support, and hypercare ended while the system was still unstable. The evidence — The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Hypercare command center + ITSM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Hypercare command center + ITSM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Hypercare command center + ITSM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Post-implementation support / hypercare\" Audit Evidence\n\nThe test:\nVerify post-go-live support stabilises the system. PASS: a hypercare plan provides elevated support with a command center, defect triage + SLA, and daily checkpoints; defects are tracked with an exit gate before BAU transition; operations/support handover (runbooks, KT, support model) is done; and the system is demonstrably stable before hypercare stands down. Exceptions: no hypercare after go-live (users abandoned with a broken system), no defect SLA or exit criteria, no handover to BAU support, and hypercare ended while the system was still unstable.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-implementation support / hypercare\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-implementation support / hypercare\" control must cover\n# fragment: postimplementation_support_hypercare_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "postimplementation_support_hypercare_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-implementation support / hypercare\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the post-implementation support / hypercare control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-implementation support / hypercare control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-implementation support / hypercare against comparable organisations in the sector",
            "Obtain evidence that the post-implementation support / hypercare control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-implementation support / hypercare\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-implementation support / hypercare\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-implementation support / hypercare settings, captured during the walkthrough",
            "The The hypercare plan (the elevated-support period after go-live: staffing, hours, the command center, defect triage + SLA, daily checkpoints), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-implementation support / hypercare control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-implementation support / hypercare capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-implementation support / hypercare\"?",
          "options": [
            "From Hypercare command center + ITSM and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-implementation support / hypercare works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Hypercare command center + ITSM) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-implementation support / hypercare\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-implementation support / hypercare control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-implementation support / hypercare data is shared, so the accountability sits with no one in particular",
            "Program + operations/support leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Program + operations/support leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-implementation support / hypercare\", which part stays with the human auditor?",
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
          "id": "sie-08-q7",
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
          "id": "sie-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-implementation support / hypercare\", which of these is a realistic reportable finding?",
          "options": [
            "There was no hypercare — the project team rolled off at go-live, leaving an unstable system with no defect SLA and no handover to a support team; critical post-go-live issues went unowned for weeks.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There was no hypercare — the project team rolled off at go-live, leaving an unstable system with no defect SLA and no handover to a support team; critical post-go-live issues went unowned for weeks. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-08-q9",
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
          "id": "sie-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-implementation support / hypercare\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-implementation support / hypercare, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-09",
    "order": 9,
    "title": "Executive governance / steering",
    "subtitle": "Agentic technical & privacy audit of the executive governance / steering control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Executive governance / steering\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify executive governance actively steers the program. PASS: a chartered steering committee with defined authority meets on cadence, makes + records real decisions (scope/budget/risk escalations approved at the right level), the sponsor is engaged + accountable for outcomes, and independent assurance reports to it. Exceptions: a steering committee that rubber-stamps or doesn't meet, escalations + budget changes decided below the right authority, an absent/disengaged sponsor, and governance relying solely on the project's optimistic self-report.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Steering committee charter + minutes; Escalation / decision register; Budget / scope approval records) as tools — e.g. `steering committee: charter, authority, cadence, decisions/escalations`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns)",
        "Evidence of active governance (minutes showing real decisions, risk/issue escalation handled, budget + scope changes approved at the right level)",
        "The sponsor's engagement + accountability for benefits/outcomes",
        "Independent assurance/quality-gate reporting to the steering committee (not just the project's self-report)"
      ],
      "system": [
        "Steering committee charter + minutes",
        "Escalation / decision register",
        "Budget / scope approval records",
        "Independent assurance reports"
      ],
      "dataOwner": [
        "Executive sponsor + steering committee",
        "Program leadership",
        "Internal audit / assurance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-09-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Executive governance / steering",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Executive governance / steering\" as a repeatable agentic workflow: pull the real evidence (The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Executive governance / steering\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Steering committee charter + minutes, Escalation / decision register, Budget / scope approval records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `steering committee: charter, authority, cadence, decisions/escalations owned` — read-only, against the systems of record.",
        "The test itself is specific. Verify executive governance actively steers the program. PASS: a chartered steering committee with defined authority meets on cadence, makes + records real decisions (scope/budget/risk escalations approved at the right level), the sponsor is engaged + accountable for outcomes, and independent assurance reports to it. Exceptions: a steering committee that rubber-stamps or doesn't meet, escalations + budget changes decided below the right authority, an absent/disengaged sponsor, and governance relying solely on the project's optimistic self-report. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_executive_governance_steering_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Steering committee charter + minutes and Escalation / decision register (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_executive_governance_steering_mcp.py` to expose it to your agent — or `python 09_executive_governance_steering_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Steering committee charter + minutes · Escalation / decision register",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Executive governance / steering\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "steering committee: charter, authority, cadence, decisions/escalations owned\nevidence of active governance (minutes, escalations handled, budget/scope approved at right level)\nsponsor engagement + accountability for benefits/outcomes\nindependent assurance reporting to steering (not just project self-report)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns).",
        "The test: Verify executive governance actively steers the program.",
        "Reconcile the systems of record (Steering committee charter + minutes, Escalation / decision register, Budget / scope approval records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The steering committee met rarely and rubber-stamped whatever the project presented; budget overruns and scope changes were approved below the proper authority, the sponsor was disengaged, and there was no independent assurance to challenge the green status."
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
          "name": "09_executive_governance_steering_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/09_executive_governance_steering_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Executive governance / steering\" (the steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Executive governance / steering\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify executive governance actively steers the program. PASS: a chartered steering committee with defined authority meets on cadence, makes + records real decisions (scope/budget/risk escalations approved at the right level), the sponsor is engaged + accountable for outcomes, and independent assurance reports to it. Exceptions: a steering committee that rubber-stamps or doesn't meet, escalations + budget changes decided below the right authority, an absent/disengaged sponsor, and governance relying solely on the project's optimistic self-report. The evidence — The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Steering committee charter + minutes APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Steering committee charter + minutes gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Steering committee charter + minutes; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Executive governance / steering\" Audit Evidence\n\nThe test:\nVerify executive governance actively steers the program. PASS: a chartered steering committee with defined authority meets on cadence, makes + records real decisions (scope/budget/risk escalations approved at the right level), the sponsor is engaged + accountable for outcomes, and independent assurance reports to it. Exceptions: a steering committee that rubber-stamps or doesn't meet, escalations + budget changes decided below the right authority, an absent/disengaged sponsor, and governance relying solely on the project's optimistic self-report.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Executive governance / steering\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Executive governance / steering\" control must cover\n# fragment: executive_governance_steering_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "executive_governance_steering_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Executive governance / steering\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the executive governance / steering control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the executive governance / steering control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for executive governance / steering against comparable organisations in the sector",
            "Obtain evidence that the executive governance / steering control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Executive governance / steering\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Executive governance / steering\" control?",
          "options": [
            "A point-in-time screenshot of one system's executive governance / steering settings, captured during the walkthrough",
            "The The steering committee + executive governance (charter, membership/authority, meeting cadence, the decisions + escalations it owns), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the executive governance / steering control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's executive governance / steering capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Executive governance / steering\"?",
          "options": [
            "From Steering committee charter + minutes and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how executive governance / steering works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Steering committee charter + minutes) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Executive governance / steering\"?",
          "options": [
            "The external audit firm, since it is the party examining the executive governance / steering control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the executive governance / steering data is shared, so the accountability sits with no one in particular",
            "Executive sponsor + steering committee, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Executive sponsor + steering committee owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Executive governance / steering\", which part stays with the human auditor?",
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
          "id": "sie-09-q7",
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
          "id": "sie-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Executive governance / steering\", which of these is a realistic reportable finding?",
          "options": [
            "The steering committee met rarely and rubber-stamped whatever the project presented; budget overruns and scope changes were approved below the proper authority, the sponsor was disengaged, and there was no independent assurance to challenge the green status.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The steering committee met rarely and rubber-stamped whatever the project presented; budget overruns and scope changes were approved below the proper authority, the sponsor was disengaged, and there was no independent assurance to challenge the green status. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-09-q9",
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
          "id": "sie-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Executive governance / steering\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind executive governance / steering, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-10",
    "order": 10,
    "title": "Audit and compliance involvement",
    "subtitle": "Agentic technical & privacy audit of the audit and compliance involvement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit and compliance involvement\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify audit/compliance are embedded across the implementation. PASS: audit/risk/compliance engaged from design (control + SoD review), a control-readiness review precedes go-live (application controls, audit trails, ITGCs, reliance controls), regulatory/SoX considerations are designed in for in-scope systems, and internal-audit quality gates + findings are tracked to closure. Exceptions: audit involved only post-go-live, controls + SoD designed late or not at all, no pre-go-live control-readiness review, and assurance findings raised but never closed.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Control design + SoD matrix; Control-readiness review records; SoX / ITGC documentation) as tools — e.g. `audit/risk/compliance engaged across lifecycle (design-stage control r`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles",
        "The control design + control-readiness review before go-live (application controls, audit trails, the controls that financial/regulatory reporting will rely on)",
        "SoX/regulatory control considerations for in-scope systems (key-report integrity, ITGCs designed)",
        "Internal audit's independent review/quality gates + that findings were tracked to closure"
      ],
      "system": [
        "Control design + SoD matrix",
        "Control-readiness review records",
        "SoX / ITGC documentation",
        "Audit finding tracker"
      ],
      "dataOwner": [
        "Internal audit + risk/compliance",
        "Controls / SoX team",
        "Process + control owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-10-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Audit and compliance involvement",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit and compliance involvement\" as a repeatable agentic workflow: pull the real evidence (Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Audit and compliance involvement\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Control design + SoD matrix, Control-readiness review records, SoX / ITGC documentation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `audit/risk/compliance engaged across lifecycle (design-stage control review, SoD` — read-only, against the systems of record.",
        "The test itself is specific. Verify audit/compliance are embedded across the implementation. PASS: audit/risk/compliance engaged from design (control + SoD review), a control-readiness review precedes go-live (application controls, audit trails, ITGCs, reliance controls), regulatory/SoX considerations are designed in for in-scope systems, and internal-audit quality gates + findings are tracked to closure. Exceptions: audit involved only post-go-live, controls + SoD designed late or not at all, no pre-go-live control-readiness review, and assurance findings raised but never closed. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_audit_and_compliance_involvement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Control design + SoD matrix and Control-readiness review records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_audit_and_compliance_involvement_mcp.py` to expose it to your agent — or `python 10_audit_and_compliance_involvement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Control design + SoD matrix · Control-readiness review records",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
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
          "code": "audit/risk/compliance engaged across lifecycle (design-stage control review, SoD designed in)\ncontrol-readiness review before go-live (app controls, audit trails, reliance controls)\nSoX/regulatory + ITGC considerations for in-scope systems\ninternal-audit quality gates + findings tracked to closure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles.",
        "The test: Verify audit/compliance are embedded across the implementation.",
        "Reconcile the systems of record (Control design + SoD matrix, Control-readiness review records, SoX / ITGC documentation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Audit and compliance were not engaged until after go-live; segregation-of-duties wasn't designed into the security roles, key application controls and audit trails are missing, and the system feeds financial reporting with no ITGCs in place."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — Audit of ICFR",
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
          "url": "/audit-code/sysimpl-enterprise/10_audit_and_compliance_involvement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Audit and compliance involvement\" (evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, sod designed into roles), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and compliance involvement\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify audit/compliance are embedded across the implementation. PASS: audit/risk/compliance engaged from design (control + SoD review), a control-readiness review precedes go-live (application controls, audit trails, ITGCs, reliance controls), regulatory/SoX considerations are designed in for in-scope systems, and internal-audit quality gates + findings are tracked to closure. Exceptions: audit involved only post-go-live, controls + SoD designed late or not at all, no pre-go-live control-readiness review, and assurance findings raised but never closed. The evidence — Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Control design + SoD matrix APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Control design + SoD matrix gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Control design + SoD matrix; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Audit and compliance involvement\" Audit Evidence\n\nThe test:\nVerify audit/compliance are embedded across the implementation. PASS: audit/risk/compliance engaged from design (control + SoD review), a control-readiness review precedes go-live (application controls, audit trails, ITGCs, reliance controls), regulatory/SoX considerations are designed in for in-scope systems, and internal-audit quality gates + findings are tracked to closure. Exceptions: audit involved only post-go-live, controls + SoD designed late or not at all, no pre-go-live control-readiness review, and assurance findings raised but never closed.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles)\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit and compliance involvement\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit and compliance involvement\" control must cover\n# fragment: audit_compliance_involvement_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "audit_compliance_involvement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit and compliance involvement\" sub-process of System Implementation — Enterprise?",
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
          "id": "sie-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit and compliance involvement\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit and compliance involvement\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit and compliance involvement settings, captured during the walkthrough",
            "The Evidence audit/risk/compliance were engaged across the lifecycle (not just at the end) — design-stage control review, key controls built in, SoD designed into roles, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit and compliance involvement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit and compliance involvement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit and compliance involvement\"?",
          "options": [
            "From Control design + SoD matrix and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and compliance involvement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Control design + SoD matrix) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit and compliance involvement\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit and compliance involvement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit and compliance involvement data is shared, so the accountability sits with no one in particular",
            "Internal audit + risk/compliance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Internal audit + risk/compliance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-10-q6",
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
          "id": "sie-10-q7",
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
          "id": "sie-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit and compliance involvement\", which of these is a realistic reportable finding?",
          "options": [
            "Audit and compliance were not engaged until after go-live; segregation-of-duties wasn't designed into the security roles, key application controls and audit trails are missing, and the system feeds financial reporting with no ITGCs in place.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Audit and compliance were not engaged until after go-live; segregation-of-duties wasn't designed into the security roles, key application controls and audit trails are missing, and the system feeds financial reporting with no ITGCs in place. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-10-q9",
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
          "id": "sie-10-q10",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-11",
    "order": 11,
    "title": "Vendor selection",
    "subtitle": "Agentic technical & privacy audit of the vendor selection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor selection\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify vendor selection was objective + diligent. PASS: selection followed a documented process (requirements/RFP, weighted criteria, scoring, references/PoC), the chosen vendor passed due diligence (financial, security/SOC 2, track record, fit), conflicts of interest were managed, and the decision is signed off + traceable to the evaluation. Exceptions: a vendor chosen with no documented evaluation or criteria, no due diligence (financial/security/fit unverified), undisclosed conflicts of interest, and a decision that doesn't match the scoring.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (RFP / evaluation records; Weighted scoring matrix; Vendor due-diligence (financial / SOC 2)) as tools — e.g. `documented selection: requirements/RFP + weighted criteria + scoring +`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC)",
        "Due diligence on the selected vendor (financial viability, security/SOC 2, delivery track record, product fit/roadmap)",
        "Conflict-of-interest + fair-process evidence (no undisclosed relationships; an auditable, objective selection)",
        "The selection sign-off + that it traces to the documented evaluation"
      ],
      "system": [
        "RFP / evaluation records",
        "Weighted scoring matrix",
        "Vendor due-diligence (financial / SOC 2)",
        "Selection sign-off"
      ],
      "dataOwner": [
        "Procurement / vendor management",
        "Evaluation committee + business owner",
        "Security + finance (due diligence)"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-11-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Vendor selection",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor selection\" as a repeatable agentic workflow: pull the real evidence (The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Vendor selection\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here RFP / evaluation records, Weighted scoring matrix, Vendor due-diligence (financial / SOC 2) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `documented selection: requirements/RFP + weighted criteria + scoring + reference` — read-only, against the systems of record.",
        "The test itself is specific. Verify vendor selection was objective + diligent. PASS: selection followed a documented process (requirements/RFP, weighted criteria, scoring, references/PoC), the chosen vendor passed due diligence (financial, security/SOC 2, track record, fit), conflicts of interest were managed, and the decision is signed off + traceable to the evaluation. Exceptions: a vendor chosen with no documented evaluation or criteria, no due diligence (financial/security/fit unverified), undisclosed conflicts of interest, and a decision that doesn't match the scoring. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_vendor_selection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from RFP / evaluation records and Weighted scoring matrix (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_vendor_selection_mcp.py` to expose it to your agent — or `python 11_vendor_selection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull RFP / evaluation records · Weighted scoring matrix",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor selection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "documented selection: requirements/RFP + weighted criteria + scoring + references/PoC\ndue diligence on selected vendor (financial, security/SOC 2, track record, fit/roadmap)\nconflict-of-interest + fair-process evidence\nselection sign-off traceable to the documented evaluation"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC).",
        "The test: Verify vendor selection was objective + diligent.",
        "Reconcile the systems of record (RFP / evaluation records, Weighted scoring matrix, Vendor due-diligence (financial / SOC 2)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The vendor was selected with no documented evaluation criteria or scoring, no financial or security due diligence, and an undisclosed prior relationship with the sponsor — the choice can't be shown to be objective."
      ],
      "references": [
        {
          "title": "ISACA — IS audit",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "PMI / PMBOK — Procurement",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_vendor_selection_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/11_vendor_selection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Vendor selection\" (the vendor selection process + evidence (documented requirements/rfp, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/poc)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor selection\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify vendor selection was objective + diligent. PASS: selection followed a documented process (requirements/RFP, weighted criteria, scoring, references/PoC), the chosen vendor passed due diligence (financial, security/SOC 2, track record, fit), conflicts of interest were managed, and the decision is signed off + traceable to the evaluation. Exceptions: a vendor chosen with no documented evaluation or criteria, no due diligence (financial/security/fit unverified), undisclosed conflicts of interest, and a decision that doesn't match the scoring. The evidence — The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live RFP / evaluation records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. RFP / evaluation records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from RFP / evaluation records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Vendor selection\" Audit Evidence\n\nThe test:\nVerify vendor selection was objective + diligent. PASS: selection followed a documented process (requirements/RFP, weighted criteria, scoring, references/PoC), the chosen vendor passed due diligence (financial, security/SOC 2, track record, fit), conflicts of interest were managed, and the decision is signed off + traceable to the evaluation. Exceptions: a vendor chosen with no documented evaluation or criteria, no due diligence (financial/security/fit unverified), undisclosed conflicts of interest, and a decision that doesn't match the scoring.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor selection\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor selection\" control must cover\n# fragment: vendor_selection_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "vendor_selection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor selection\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the vendor selection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor selection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor selection against comparable organisations in the sector",
            "Obtain evidence that the vendor selection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor selection\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor selection\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor selection settings, captured during the walkthrough",
            "The The vendor selection process + evidence (documented requirements/RFP, weighted evaluation criteria, scoring, the shortlist + decision rationale, references/PoC), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor selection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor selection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor selection\"?",
          "options": [
            "From RFP / evaluation records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor selection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. RFP / evaluation records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor selection\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor selection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor selection data is shared, so the accountability sits with no one in particular",
            "Procurement / vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Procurement / vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor selection\", which part stays with the human auditor?",
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
          "id": "sie-11-q7",
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
          "id": "sie-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor selection\", which of these is a realistic reportable finding?",
          "options": [
            "The vendor was selected with no documented evaluation criteria or scoring, no financial or security due diligence, and an undisclosed prior relationship with the sponsor — the choice can't be shown to be objective.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The vendor was selected with no documented evaluation criteria or scoring, no financial or security due diligence, and an undisclosed prior relationship with the sponsor — the choice can't be shown to be objective. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-11-q9",
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
          "id": "sie-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor selection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor selection, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-12",
    "order": 12,
    "title": "Contract, SLA, commercial risk",
    "subtitle": "Agentic technical & privacy audit of the contract, sla, commercial risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Contract, SLA, commercial risk\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the contract protects the organisation. PASS: the contract defines deliverables + acceptance criteria, SLAs with remedies, liability/indemnity, IP ownership, data protection (DPA), audit rights, security obligations, and exit/transition; payment ties to acceptance milestones; and legal/procurement/security reviewed it. Exceptions: vague deliverables + no acceptance criteria, no SLAs/remedies or liability terms, unclear IP/data-protection terms, no exit/transition rights (lock-in), payment by calendar not acceptance, and no legal/security review.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Contract / SLA records; Vendor + contract management; Acceptance-milestone schedule) as tools — e.g. `contract + SLA: deliverables/acceptance criteria + SLAs/remedies + lia`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance)",
        "Commercial-risk terms (pricing model, change-order mechanism, audit rights, security + compliance obligations, sub-processor controls)",
        "Acceptance/payment milestones tied to deliverable acceptance (not just elapsed time)",
        "Legal + procurement + security review/sign-off of the contract before execution"
      ],
      "system": [
        "Contract / SLA records",
        "Vendor + contract management",
        "Acceptance-milestone schedule",
        "Legal / procurement review"
      ],
      "dataOwner": [
        "Legal + Procurement / vendor management",
        "Security + Privacy (DPA)",
        "Business owner"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-12-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Contract, SLA, commercial risk",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Contract, SLA, commercial risk\" as a repeatable agentic workflow: pull the real evidence (The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Contract, SLA, commercial risk\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Contract / SLA records, Vendor + contract management, Acceptance-milestone schedule — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `contract + SLA: deliverables/acceptance criteria + SLAs/remedies + liability/IP ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the contract protects the organisation. PASS: the contract defines deliverables + acceptance criteria, SLAs with remedies, liability/indemnity, IP ownership, data protection (DPA), audit rights, security obligations, and exit/transition; payment ties to acceptance milestones; and legal/procurement/security reviewed it. Exceptions: vague deliverables + no acceptance criteria, no SLAs/remedies or liability terms, unclear IP/data-protection terms, no exit/transition rights (lock-in), payment by calendar not acceptance, and no legal/security review. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_contract_sla_commercial_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Contract / SLA records and Vendor + contract management (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_contract_sla_commercial_risk_mcp.py` to expose it to your agent — or `python 12_contract_sla_commercial_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Contract / SLA records · Vendor + contract management",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Contract, SLA, commercial risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "contract + SLA: deliverables/acceptance criteria + SLAs/remedies + liability/IP + DPA + exit/transition\ncommercial-risk terms: pricing, change-order, audit rights, security obligations, sub-processors\nacceptance/payment milestones tied to deliverable acceptance\nlegal + procurement + security sign-off before execution"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance).",
        "The test: Verify the contract protects the organisation.",
        "Reconcile the systems of record (Contract / SLA records, Vendor + contract management, Acceptance-milestone schedule) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The contract has vague deliverables, no acceptance criteria, no SLAs or remedies, unlimited liability for the customer, no data-protection addendum, and no exit/transition rights — payments are tied to the calendar, so the vendor is paid regardless of delivery."
      ],
      "references": [
        {
          "title": "ISO/IEC 27036 — supplier security",
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
          "name": "12_contract_sla_commercial_risk_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/12_contract_sla_commercial_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Contract, SLA, commercial risk\" (the contract + sla terms protecting the organisation (defined deliverables/acceptance criteria, slas with credits/remedies, liability/indemnity caps, ip ownership, data protection/dpa, exit/termination + transition assistance)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Contract, SLA, commercial risk\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the contract protects the organisation. PASS: the contract defines deliverables + acceptance criteria, SLAs with remedies, liability/indemnity, IP ownership, data protection (DPA), audit rights, security obligations, and exit/transition; payment ties to acceptance milestones; and legal/procurement/security reviewed it. Exceptions: vague deliverables + no acceptance criteria, no SLAs/remedies or liability terms, unclear IP/data-protection terms, no exit/transition rights (lock-in), payment by calendar not acceptance, and no legal/security review. The evidence — The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Contract / SLA records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Contract / SLA records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Contract / SLA records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Contract, SLA, commercial risk\" Audit Evidence\n\nThe test:\nVerify the contract protects the organisation. PASS: the contract defines deliverables + acceptance criteria, SLAs with remedies, liability/indemnity, IP ownership, data protection (DPA), audit rights, security obligations, and exit/transition; payment ties to acceptance milestones; and legal/procurement/security reviewed it. Exceptions: vague deliverables + no acceptance criteria, no SLAs/remedies or liability terms, unclear IP/data-protection terms, no exit/transition rights (lock-in), payment by calendar not acceptance, and no legal/security review.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Contract, SLA, commercial risk\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Contract, SLA, commercial risk\" control must cover\n# fragment: contract_sla_commercial_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "contract_sla_commercial_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Contract, SLA, commercial risk\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the contract, sla, commercial risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the contract, sla, commercial risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for contract, sla, commercial risk against comparable organisations in the sector",
            "Obtain evidence that the contract, sla, commercial risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Contract, SLA, commercial risk\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Contract, SLA, commercial risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's contract, sla, commercial risk settings, captured during the walkthrough",
            "The The contract + SLA terms protecting the organisation (defined deliverables/acceptance criteria, SLAs with credits/remedies, liability/indemnity caps, IP ownership, data protection/DPA, exit/termination + transition assistance), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the contract, sla, commercial risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's contract, sla, commercial risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Contract, SLA, commercial risk\"?",
          "options": [
            "From Contract / SLA records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how contract, sla, commercial risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Contract / SLA records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Contract, SLA, commercial risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the contract, sla, commercial risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the contract, sla, commercial risk data is shared, so the accountability sits with no one in particular",
            "Legal + Procurement / vendor management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Procurement / vendor management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Contract, SLA, commercial risk\", which part stays with the human auditor?",
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
          "id": "sie-12-q7",
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
          "id": "sie-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Contract, SLA, commercial risk\", which of these is a realistic reportable finding?",
          "options": [
            "The contract has vague deliverables, no acceptance criteria, no SLAs or remedies, unlimited liability for the customer, no data-protection addendum, and no exit/transition rights — payments are tied to the calendar, so the vendor is paid regardless of delivery.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The contract has vague deliverables, no acceptance criteria, no SLAs or remedies, unlimited liability for the customer, no data-protection addendum, and no exit/transition rights — payments are tied to the calendar, so the vendor is paid regardless of delivery. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-12-q9",
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
          "id": "sie-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Contract, SLA, commercial risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind contract, sla, commercial risk, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-13",
    "order": 13,
    "title": "Escrow agreement for source code",
    "subtitle": "Agentic technical & privacy audit of the escrow agreement for source code control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Escrow agreement for source code\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify source-code escrow protects continuity for critical vendor software. PASS: a current escrow agreement exists for business-critical software with defined deposit contents + release triggers, deposits are actually made + verified (complete + buildable), the org could use the code if released (license + capability), and escrow's appropriateness vs SaaS-exit alternatives is reasoned. Exceptions: no escrow for critical custom software (vendor failure = no continuity), an escrow account with no/stale deposits, deposits never verified as buildable, and release-trigger rights that don't actually allow use.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Escrow agreement + deposit records; Deposit verification reports; Software criticality assessment) as tools — e.g. `escrow agreement: deposit contents (source, build, docs, deps) + relea`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL)",
        "Evidence of actual, current deposits + verification (the escrow holds the right, complete, buildable material — not an empty or stale account)",
        "The release conditions + the organisation's ability to actually use the code if triggered (build, maintain — license rights, environment)",
        "Whether escrow is appropriate to the risk (critical on-prem custom software) vs covered another way (SaaS continuity/exit instead)"
      ],
      "system": [
        "Escrow agreement + deposit records",
        "Deposit verification reports",
        "Software criticality assessment",
        "Vendor-continuity plan"
      ],
      "dataOwner": [
        "Legal + Procurement",
        "Application / IT owners",
        "Vendor management"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-13-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Escrow agreement for source code",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Escrow agreement for source code\" as a repeatable agentic workflow: pull the real evidence (The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Escrow agreement for source code\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Escrow agreement + deposit records, Deposit verification reports, Software criticality assessment — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `escrow agreement: deposit contents (source, build, docs, deps) + release/trigger` — read-only, against the systems of record.",
        "The test itself is specific. Verify source-code escrow protects continuity for critical vendor software. PASS: a current escrow agreement exists for business-critical software with defined deposit contents + release triggers, deposits are actually made + verified (complete + buildable), the org could use the code if released (license + capability), and escrow's appropriateness vs SaaS-exit alternatives is reasoned. Exceptions: no escrow for critical custom software (vendor failure = no continuity), an escrow account with no/stale deposits, deposits never verified as buildable, and release-trigger rights that don't actually allow use. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_escrow_agreement_for_source_code_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Escrow agreement + deposit records and Deposit verification reports (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_escrow_agreement_for_source_code_mcp.py` to expose it to your agent — or `python 13_escrow_agreement_for_source_code_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Escrow agreement + deposit records · Deposit verification reports",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Escrow agreement for source code\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "escrow agreement: deposit contents (source, build, docs, deps) + release/trigger conditions\nactual current deposits + verification (complete + buildable, not stale/empty)\nrelease conditions + ability to use the code if triggered (license + capability)\nescrow appropriate to the risk vs SaaS continuity/exit alternative?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL).",
        "The test: Verify source-code escrow protects continuity for critical vendor software.",
        "Reconcile the systems of record (Escrow agreement + deposit records, Deposit verification reports, Software criticality assessment) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The business-critical vendor application has an escrow agreement on paper, but no source has been deposited in three years and nothing has ever been verified as buildable — if the vendor fails, the escrow is worthless."
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
          "name": "13_escrow_agreement_for_source_code_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/13_escrow_agreement_for_source_code_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Escrow agreement for source code\" (the source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, eol)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Escrow agreement for source code\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify source-code escrow protects continuity for critical vendor software. PASS: a current escrow agreement exists for business-critical software with defined deposit contents + release triggers, deposits are actually made + verified (complete + buildable), the org could use the code if released (license + capability), and escrow's appropriateness vs SaaS-exit alternatives is reasoned. Exceptions: no escrow for critical custom software (vendor failure = no continuity), an escrow account with no/stale deposits, deposits never verified as buildable, and release-trigger rights that don't actually allow use. The evidence — The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Escrow agreement + deposit records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Escrow agreement + deposit records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Escrow agreement + deposit records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Escrow agreement for source code\" Audit Evidence\n\nThe test:\nVerify source-code escrow protects continuity for critical vendor software. PASS: a current escrow agreement exists for business-critical software with defined deposit contents + release triggers, deposits are actually made + verified (complete + buildable), the org could use the code if released (license + capability), and escrow's appropriateness vs SaaS-exit alternatives is reasoned. Exceptions: no escrow for critical custom software (vendor failure = no continuity), an escrow account with no/stale deposits, deposits never verified as buildable, and release-trigger rights that don't actually allow use.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Escrow agreement for source code\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Escrow agreement for source code\" control must cover\n# fragment: escrow_agreement_source_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "escrow_agreement_source_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Escrow agreement for source code\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the escrow agreement for source code control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the escrow agreement for source code control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for escrow agreement for source code against comparable organisations in the sector",
            "Obtain evidence that the escrow agreement for source code control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Escrow agreement for source code\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Escrow agreement for source code\" control?",
          "options": [
            "A point-in-time screenshot of one system's escrow agreement for source code settings, captured during the walkthrough",
            "The The source-code (software) escrow agreement for business-critical vendor software (what's deposited: source, build scripts, docs, dependencies; release/trigger conditions — vendor insolvency, breach, EOL), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the escrow agreement for source code control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's escrow agreement for source code capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Escrow agreement for source code\"?",
          "options": [
            "From Escrow agreement + deposit records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how escrow agreement for source code works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Escrow agreement + deposit records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Escrow agreement for source code\"?",
          "options": [
            "The external audit firm, since it is the party examining the escrow agreement for source code control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the escrow agreement for source code data is shared, so the accountability sits with no one in particular",
            "Legal + Procurement, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Procurement owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Escrow agreement for source code\", which part stays with the human auditor?",
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
          "id": "sie-13-q7",
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
          "id": "sie-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Escrow agreement for source code\", which of these is a realistic reportable finding?",
          "options": [
            "The business-critical vendor application has an escrow agreement on paper, but no source has been deposited in three years and nothing has ever been verified as buildable — if the vendor fails, the escrow is worthless.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The business-critical vendor application has an escrow agreement on paper, but no source has been deposited in three years and nothing has ever been verified as buildable — if the vendor fails, the escrow is worthless. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-13-q9",
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
          "id": "sie-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Escrow agreement for source code\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind escrow agreement for source code, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-14",
    "order": 14,
    "title": "Business case, ROI",
    "subtitle": "Agentic technical & privacy audit of the business case, roi control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business case, ROI\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the investment is justified + benefits are owned. PASS: an approved business case quantifies TCO, benefits, and ROI/NPV/payback with stated assumptions + alternatives; a benefits-realisation plan assigns owners + measurable KPIs with baselines; the business case is re-validated at stage gates as cost/scope change; and benefits will actually be measured. Exceptions: no quantified business case (cost or benefits), benefits with no owner or KPI (never measured), a business case never revisited as costs ballooned, and a project continued despite a now-negative case.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Business case + TCO/ROI model; Benefits-realisation plan + KPIs; Stage-gate re-validation records) as tools — e.g. `approved business case: TCO + quantified benefits + ROI/NPV/payback + `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered)",
        "The benefits-realisation plan (named benefit owners, measurable KPIs, baseline + target, when benefits will be measured)",
        "Re-validation of the business case at stage gates as costs/scope change (is it still worth doing)",
        "Evidence the business case drives the project (not a one-time funding artifact ignored thereafter)"
      ],
      "system": [
        "Business case + TCO/ROI model",
        "Benefits-realisation plan + KPIs",
        "Stage-gate re-validation records",
        "Finance / PMO tracking"
      ],
      "dataOwner": [
        "Executive sponsor + Finance",
        "PMO",
        "Benefit owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-14-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Business case, ROI",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business case, ROI\" as a repeatable agentic workflow: pull the real evidence (The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Business case, ROI\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Business case + TCO/ROI model, Benefits-realisation plan + KPIs, Stage-gate re-validation records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `approved business case: TCO + quantified benefits + ROI/NPV/payback + assumption` — read-only, against the systems of record.",
        "The test itself is specific. Verify the investment is justified + benefits are owned. PASS: an approved business case quantifies TCO, benefits, and ROI/NPV/payback with stated assumptions + alternatives; a benefits-realisation plan assigns owners + measurable KPIs with baselines; the business case is re-validated at stage gates as cost/scope change; and benefits will actually be measured. Exceptions: no quantified business case (cost or benefits), benefits with no owner or KPI (never measured), a business case never revisited as costs ballooned, and a project continued despite a now-negative case. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_business_case_roi_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Business case + TCO/ROI model and Benefits-realisation plan + KPIs (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_business_case_roi_mcp.py` to expose it to your agent — or `python 14_business_case_roi_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Business case + TCO/ROI model · Benefits-realisation plan + KPIs",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business case, ROI\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "approved business case: TCO + quantified benefits + ROI/NPV/payback + assumptions/alternatives\nbenefits-realisation plan: owners + measurable KPIs + baseline/target + when measured\nbusiness-case re-validation at stage gates as cost/scope change\ndoes the business case actually drive the project (not a one-time artifact)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered).",
        "The test: Verify the investment is justified + benefits are owned.",
        "Reconcile the systems of record (Business case + TCO/ROI model, Benefits-realisation plan + KPIs, Stage-gate re-validation records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The business case was a one-time funding exercise — benefits were never quantified with owners or KPIs, the case was never revisited as costs doubled, and no one can say whether the investment will pay back."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "Managing Successful Programmes (MSP)",
          "url": "https://www.axelos.com/certifications/propath/msp-programme-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_business_case_roi_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/14_business_case_roi_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Business case, ROI\" (the approved business case (costs — capex/opex/tco, quantified benefits, roi/npv/payback, the assumptions + alternatives considered)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business case, ROI\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the investment is justified + benefits are owned. PASS: an approved business case quantifies TCO, benefits, and ROI/NPV/payback with stated assumptions + alternatives; a benefits-realisation plan assigns owners + measurable KPIs with baselines; the business case is re-validated at stage gates as cost/scope change; and benefits will actually be measured. Exceptions: no quantified business case (cost or benefits), benefits with no owner or KPI (never measured), a business case never revisited as costs ballooned, and a project continued despite a now-negative case. The evidence — The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Business case + TCO/ROI model APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Business case + TCO/ROI model gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Business case + TCO/ROI model; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Business case, ROI\" Audit Evidence\n\nThe test:\nVerify the investment is justified + benefits are owned. PASS: an approved business case quantifies TCO, benefits, and ROI/NPV/payback with stated assumptions + alternatives; a benefits-realisation plan assigns owners + measurable KPIs with baselines; the business case is re-validated at stage gates as cost/scope change; and benefits will actually be measured. Exceptions: no quantified business case (cost or benefits), benefits with no owner or KPI (never measured), a business case never revisited as costs ballooned, and a project continued despite a now-negative case.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business case, ROI\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business case, ROI\" control must cover\n# fragment: business_case_roi_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "business_case_roi_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business case, ROI\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the business case, roi control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business case, roi control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business case, roi against comparable organisations in the sector",
            "Obtain evidence that the business case, roi control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business case, ROI\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business case, ROI\" control?",
          "options": [
            "A point-in-time screenshot of one system's business case, roi settings, captured during the walkthrough",
            "The The approved business case (costs — capex/opex/TCO, quantified benefits, ROI/NPV/payback, the assumptions + alternatives considered), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business case, roi control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business case, roi capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business case, ROI\"?",
          "options": [
            "From Business case + TCO/ROI model and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business case, roi works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Business case + TCO/ROI model) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business case, ROI\"?",
          "options": [
            "The external audit firm, since it is the party examining the business case, roi control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business case, roi data is shared, so the accountability sits with no one in particular",
            "Executive sponsor + Finance, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Executive sponsor + Finance owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business case, ROI\", which part stays with the human auditor?",
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
          "id": "sie-14-q7",
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
          "id": "sie-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business case, ROI\", which of these is a realistic reportable finding?",
          "options": [
            "The business case was a one-time funding exercise — benefits were never quantified with owners or KPIs, the case was never revisited as costs doubled, and no one can say whether the investment will pay back.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The business case was a one-time funding exercise — benefits were never quantified with owners or KPIs, the case was never revisited as costs doubled, and no one can say whether the investment will pay back. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-14-q9",
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
          "id": "sie-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business case, ROI\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business case, roi, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-15",
    "order": 15,
    "title": "Training, change management, knowledge transfer",
    "subtitle": "Agentic technical & privacy audit of the training, change management, knowledge transfer control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 7,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Training, change management, knowledge transfer\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify people are ready to adopt the system. PASS: an OCM plan covers stakeholder/impact analysis, communications, and change readiness; role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support reduces vendor lock-in; and adoption/readiness is measured. Exceptions: no change management (resistance + low adoption), training built late or not delivered (users untrained at go-live), no knowledge transfer (permanent vendor dependency), and adoption never measured.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (OCM / communications plan; LMS / training completion records; Knowledge-transfer / documentation) as tools — e.g. `OCM plan: stakeholder/impact analysis + communications + change-readin`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures)",
        "The training program + evidence (role-based training built + delivered, training completion, competency/readiness before go-live)",
        "Knowledge transfer to internal staff + support teams (reducing vendor dependency; documented process + system knowledge)",
        "Adoption + readiness measurement (are users actually able + willing to use the system at go-live)"
      ],
      "system": [
        "OCM / communications plan",
        "LMS / training completion records",
        "Knowledge-transfer / documentation",
        "Adoption / readiness metrics"
      ],
      "dataOwner": [
        "Change management + HR/L&D",
        "Business process owners",
        "Training leads"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-15-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Training, change management, knowledge transfer",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Training, change management, knowledge transfer\" as a repeatable agentic workflow: pull the real evidence (The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Training, change management, knowledge transfer\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here OCM / communications plan, LMS / training completion records, Knowledge-transfer / documentation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `OCM plan: stakeholder/impact analysis + communications + change-readiness + adop` — read-only, against the systems of record.",
        "The test itself is specific. Verify people are ready to adopt the system. PASS: an OCM plan covers stakeholder/impact analysis, communications, and change readiness; role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support reduces vendor lock-in; and adoption/readiness is measured. Exceptions: no change management (resistance + low adoption), training built late or not delivered (users untrained at go-live), no knowledge transfer (permanent vendor dependency), and adoption never measured. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_training_change_management_knowledge_transfer_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from OCM / communications plan and LMS / training completion records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_training_change_management_knowledge_transfer_mcp.py` to expose it to your agent — or `python 15_training_change_management_knowledge_transfer_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull OCM / communications plan · LMS / training completion records",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Training, change management, knowledge transfer\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "OCM plan: stakeholder/impact analysis + communications + change-readiness + adoption measures\ntraining program: role-based, delivered, completion-tracked, competency before go-live\nknowledge transfer to internal staff + support (reduce vendor dependency)\nadoption + readiness measurement at go-live"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures).",
        "The test: Verify people are ready to adopt the system.",
        "Reconcile the systems of record (OCM / communications plan, LMS / training completion records, Knowledge-transfer / documentation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There was no change-management effort and training was a single optional webinar the week before go-live; users were not competent at cutover, adoption was never measured, and all system knowledge stayed with the vendor."
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
          "name": "15_training_change_management_knowledge_transfer_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/15_training_change_management_knowledge_transfer_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Training, change management, knowledge transfer\" (the organisational change management (ocm) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Training, change management, knowledge transfer\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify people are ready to adopt the system. PASS: an OCM plan covers stakeholder/impact analysis, communications, and change readiness; role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support reduces vendor lock-in; and adoption/readiness is measured. Exceptions: no change management (resistance + low adoption), training built late or not delivered (users untrained at go-live), no knowledge transfer (permanent vendor dependency), and adoption never measured. The evidence — The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live OCM / communications plan APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. OCM / communications plan gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from OCM / communications plan; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Training, change management, knowledge transfer\" Audit Evidence\n\nThe test:\nVerify people are ready to adopt the system. PASS: an OCM plan covers stakeholder/impact analysis, communications, and change readiness; role-based training is built, delivered, and completion-tracked with competency confirmed pre-go-live; knowledge transfer to internal staff/support reduces vendor lock-in; and adoption/readiness is measured. Exceptions: no change management (resistance + low adoption), training built late or not delivered (users untrained at go-live), no knowledge transfer (permanent vendor dependency), and adoption never measured.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Training, change management, knowledge transfer\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Training, change management, knowledge transfer\" control must cover\n# fragment: training_change_management_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "training_change_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Training, change management, knowledge transfer\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the training, change management, knowledge transfer control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the training, change management, knowledge transfer control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for training, change management, knowledge transfer against comparable organisations in the sector",
            "Obtain evidence that the training, change management, knowledge transfer control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Training, change management, knowledge transfer\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Training, change management, knowledge transfer\" control?",
          "options": [
            "A point-in-time screenshot of one system's training, change management, knowledge transfer settings, captured during the walkthrough",
            "The The organisational change management (OCM) plan (stakeholder + impact analysis, communications, change-readiness assessment, adoption measures), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the training, change management, knowledge transfer control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's training, change management, knowledge transfer capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Training, change management, knowledge transfer\"?",
          "options": [
            "From OCM / communications plan and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how training, change management, knowledge transfer works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. OCM / communications plan) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Training, change management, knowledge transfer\"?",
          "options": [
            "The external audit firm, since it is the party examining the training, change management, knowledge transfer control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the training, change management, knowledge transfer data is shared, so the accountability sits with no one in particular",
            "Change management + HR/L&D, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management + HR/L&D owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Training, change management, knowledge transfer\", which part stays with the human auditor?",
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
          "id": "sie-15-q7",
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
          "id": "sie-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Training, change management, knowledge transfer\", which of these is a realistic reportable finding?",
          "options": [
            "There was no change-management effort and training was a single optional webinar the week before go-live; users were not competent at cutover, adoption was never measured, and all system knowledge stayed with the vendor.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There was no change-management effort and training was a single optional webinar the week before go-live; users were not competent at cutover, adoption was never measured, and all system knowledge stayed with the vendor. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-15-q9",
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
          "id": "sie-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Training, change management, knowledge transfer\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind training, change management, knowledge transfer, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-16",
    "order": 16,
    "title": "Data governance and MDM",
    "subtitle": "Agentic technical & privacy audit of the data governance and mdm control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data governance and MDM\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify data is governed in + around the new system. PASS: data ownership/stewardship + definitions are defined, MDM provides a governed golden record (dedup, survivorship) consistent across the landscape, data-quality standards + ongoing controls exist with an owner, and classification + retention are applied. Exceptions: no data owners/stewards or definitions, no MDM (conflicting master data across systems), no ongoing data-quality controls (quality decays post-go-live), and no classification/retention.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (MDM platform + data catalogue; Data quality tooling + metrics; Stewardship / ownership records) as tools — e.g. `data governance: ownership/stewardship + data model/definitions + MDM `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules)",
        "Data quality standards + ongoing controls (validation rules, quality metrics, the cleansing program, who maintains master data)",
        "Reference + master data governance across the integrated landscape (consistent customer/product/vendor master across systems)",
        "Data classification + retention applied in the new system"
      ],
      "system": [
        "MDM platform + data catalogue",
        "Data quality tooling + metrics",
        "Stewardship / ownership records",
        "Classification + retention"
      ],
      "dataOwner": [
        "Data governance + data stewards",
        "Master-data owners",
        "Business process owners"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-16-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Data governance and MDM",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data governance and MDM\" as a repeatable agentic workflow: pull the real evidence (The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Data governance and MDM\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here MDM platform + data catalogue, Data quality tooling + metrics, Stewardship / ownership records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `data governance: ownership/stewardship + data model/definitions + MDM (golden re` — read-only, against the systems of record.",
        "The test itself is specific. Verify data is governed in + around the new system. PASS: data ownership/stewardship + definitions are defined, MDM provides a governed golden record (dedup, survivorship) consistent across the landscape, data-quality standards + ongoing controls exist with an owner, and classification + retention are applied. Exceptions: no data owners/stewards or definitions, no MDM (conflicting master data across systems), no ongoing data-quality controls (quality decays post-go-live), and no classification/retention. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `16_data_governance_and_mdm_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from MDM platform + data catalogue and Data quality tooling + metrics (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 16_data_governance_and_mdm_mcp.py` to expose it to your agent — or `python 16_data_governance_and_mdm_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull MDM platform + data catalogue · Data quality tooling + metrics",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data governance and MDM\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "data governance: ownership/stewardship + data model/definitions + MDM (golden record, dedup, survivorship)\ndata quality standards + ongoing controls (validation, metrics, cleansing, maintenance owner)\nreference + master data consistency across the integrated landscape\ndata classification + retention in the new system"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules).",
        "The test: Verify data is governed in + around the new system.",
        "Reconcile the systems of record (MDM platform + data catalogue, Data quality tooling + metrics, Stewardship / ownership records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no data governance or MDM — customer and vendor master data is duplicated and inconsistent across the integrated systems, no one owns or maintains it, and data quality has decayed steadily since go-live with no controls."
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
          "name": "16_data_governance_and_mdm_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/16_data_governance_and_mdm_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Data governance and MDM\" (the data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data governance and MDM\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify data is governed in + around the new system. PASS: data ownership/stewardship + definitions are defined, MDM provides a governed golden record (dedup, survivorship) consistent across the landscape, data-quality standards + ongoing controls exist with an owner, and classification + retention are applied. Exceptions: no data owners/stewards or definitions, no MDM (conflicting master data across systems), no ongoing data-quality controls (quality decays post-go-live), and no classification/retention. The evidence — The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live MDM platform + data catalogue APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. MDM platform + data catalogue gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from MDM platform + data catalogue; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Data governance and MDM\" Audit Evidence\n\nThe test:\nVerify data is governed in + around the new system. PASS: data ownership/stewardship + definitions are defined, MDM provides a governed golden record (dedup, survivorship) consistent across the landscape, data-quality standards + ongoing controls exist with an owner, and classification + retention are applied. Exceptions: no data owners/stewards or definitions, no MDM (conflicting master data across systems), no ongoing data-quality controls (quality decays post-go-live), and no classification/retention.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data governance and MDM\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data governance and MDM\" control must cover\n# fragment: data_governance_mdm_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "data_governance_mdm_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-16-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data governance and MDM\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the data governance and mdm control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data governance and mdm control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data governance and mdm against comparable organisations in the sector",
            "Obtain evidence that the data governance and mdm control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-16-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data governance and MDM\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-16-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data governance and MDM\" control?",
          "options": [
            "A point-in-time screenshot of one system's data governance and mdm settings, captured during the walkthrough",
            "The The data governance for the new system (data ownership/stewardship, the data model + definitions, master-data management — golden record, deduplication, survivorship rules), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data governance and mdm control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data governance and mdm capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-16-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data governance and MDM\"?",
          "options": [
            "From MDM platform + data catalogue and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data governance and mdm works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. MDM platform + data catalogue) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-16-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data governance and MDM\"?",
          "options": [
            "The external audit firm, since it is the party examining the data governance and mdm control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data governance and mdm data is shared, so the accountability sits with no one in particular",
            "Data governance + data stewards, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Data governance + data stewards owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-16-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data governance and MDM\", which part stays with the human auditor?",
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
          "id": "sie-16-q7",
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
          "id": "sie-16-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data governance and MDM\", which of these is a realistic reportable finding?",
          "options": [
            "There's no data governance or MDM — customer and vendor master data is duplicated and inconsistent across the integrated systems, no one owns or maintains it, and data quality has decayed steadily since go-live with no controls.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no data governance or MDM — customer and vendor master data is duplicated and inconsistent across the integrated systems, no one owns or maintains it, and data quality has decayed steadily since go-live with no controls. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-16-q9",
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
          "id": "sie-16-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data governance and MDM\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data governance and mdm, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-17",
    "order": 17,
    "title": "Security and access control design",
    "subtitle": "Agentic technical & privacy audit of the security and access control design control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security and access control design\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify security + access are designed into the system. PASS: a security architecture (auth/SSO, role-based authorisation, encryption, segmentation, logging) is designed in; the role/access model enforces SoD + least privilege with conflict analysis; the security design is tested (review/pen test) before go-live; and it integrates with enterprise IAM (joiner/mover/leaver, access review). Exceptions: security bolted on late or absent, an access model with no SoD/least-privilege (toxic combinations live), no pre-go-live security testing, and no IAM integration (orphan accounts, no access reviews).",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Security architecture + role/SoD matrix; IAM / SSO integration; Security testing / pen-test records) as tools — e.g. `security architecture: auth/SSO + role-based authz + encryption + segm`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on)",
        "The role/access design with segregation of duties (a role matrix derived from business processes, SoD conflict analysis, least privilege, sensitive-access controls)",
        "Security requirements testing (the security design tested before go-live; pen test/security review of the system)",
        "Integration with enterprise IAM (provisioning/deprovisioning, periodic access review built in)"
      ],
      "system": [
        "Security architecture + role/SoD matrix",
        "IAM / SSO integration",
        "Security testing / pen-test records",
        "Access-review tooling"
      ],
      "dataOwner": [
        "Security architecture + IAM",
        "Controls / SoD team",
        "Application + process owners"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-17-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Security and access control design",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security and access control design\" as a repeatable agentic workflow: pull the real evidence (The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Security and access control design\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Security architecture + role/SoD matrix, IAM / SSO integration, Security testing / pen-test records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `security architecture: auth/SSO + role-based authz + encryption + segmentation +` — read-only, against the systems of record.",
        "The test itself is specific. Verify security + access are designed into the system. PASS: a security architecture (auth/SSO, role-based authorisation, encryption, segmentation, logging) is designed in; the role/access model enforces SoD + least privilege with conflict analysis; the security design is tested (review/pen test) before go-live; and it integrates with enterprise IAM (joiner/mover/leaver, access review). Exceptions: security bolted on late or absent, an access model with no SoD/least-privilege (toxic combinations live), no pre-go-live security testing, and no IAM integration (orphan accounts, no access reviews). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `17_security_and_access_control_design_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Security architecture + role/SoD matrix and IAM / SSO integration (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 17_security_and_access_control_design_mcp.py` to expose it to your agent — or `python 17_security_and_access_control_design_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Security architecture + role/SoD matrix · IAM / SSO integration",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security and access control design\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "security architecture: auth/SSO + role-based authz + encryption + segmentation + logging (designed in)\nrole/access design + SoD (role matrix, conflict analysis, least privilege, sensitive access)\nsecurity design tested before go-live (review/pen test)\nintegration with enterprise IAM (joiner/mover/leaver + access review)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on).",
        "The test: Verify security + access are designed into the system.",
        "Reconcile the systems of record (Security architecture + role/SoD matrix, IAM / SSO integration, Security testing / pen-test records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Security was an afterthought — there's no role model or SoD analysis (users have toxic access combinations), the system isn't integrated with enterprise IAM (orphan accounts persist), and no security testing was done before go-live."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "17_security_and_access_control_design_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/17_security_and_access_control_design_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Security and access control design\" (the security architecture/design for the system (authentication/sso, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security and access control design\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify security + access are designed into the system. PASS: a security architecture (auth/SSO, role-based authorisation, encryption, segmentation, logging) is designed in; the role/access model enforces SoD + least privilege with conflict analysis; the security design is tested (review/pen test) before go-live; and it integrates with enterprise IAM (joiner/mover/leaver, access review). Exceptions: security bolted on late or absent, an access model with no SoD/least-privilege (toxic combinations live), no pre-go-live security testing, and no IAM integration (orphan accounts, no access reviews). The evidence — The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Security architecture + role/SoD matrix APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Security architecture + role/SoD matrix gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Security architecture + role/SoD matrix; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Security and access control design\" Audit Evidence\n\nThe test:\nVerify security + access are designed into the system. PASS: a security architecture (auth/SSO, role-based authorisation, encryption, segmentation, logging) is designed in; the role/access model enforces SoD + least privilege with conflict analysis; the security design is tested (review/pen test) before go-live; and it integrates with enterprise IAM (joiner/mover/leaver, access review). Exceptions: security bolted on late or absent, an access model with no SoD/least-privilege (toxic combinations live), no pre-go-live security testing, and no IAM integration (orphan accounts, no access reviews).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security and access control design\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security and access control design\" control must cover\n# fragment: security_access_control_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "security_access_control_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-17-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security and access control design\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the security and access control design control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security and access control design control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security and access control design against comparable organisations in the sector",
            "Obtain evidence that the security and access control design control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-17-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security and access control design\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-17-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security and access control design\" control?",
          "options": [
            "A point-in-time screenshot of one system's security and access control design settings, captured during the walkthrough",
            "The The security architecture/design for the system (authentication/SSO, authorisation/role model, encryption, network/segmentation, logging — designed in, not bolted on), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security and access control design control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security and access control design capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-17-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security and access control design\"?",
          "options": [
            "From Security architecture + role/SoD matrix and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security and access control design works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Security architecture + role/SoD matrix) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-17-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security and access control design\"?",
          "options": [
            "The external audit firm, since it is the party examining the security and access control design control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security and access control design data is shared, so the accountability sits with no one in particular",
            "Security architecture + IAM, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security architecture + IAM owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-17-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security and access control design\", which part stays with the human auditor?",
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
          "id": "sie-17-q7",
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
          "id": "sie-17-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security and access control design\", which of these is a realistic reportable finding?",
          "options": [
            "Security was an afterthought — there's no role model or SoD analysis (users have toxic access combinations), the system isn't integrated with enterprise IAM (orphan accounts persist), and no security testing was done before go-live.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Security was an afterthought — there's no role model or SoD analysis (users have toxic access combinations), the system isn't integrated with enterprise IAM (orphan accounts persist), and no security testing was done before go-live. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-17-q9",
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
          "id": "sie-17-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security and access control design\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security and access control design, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-18",
    "order": 18,
    "title": "Business continuity / resilience",
    "subtitle": "Agentic technical & privacy audit of the business continuity / resilience control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business continuity / resilience\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the new system is resilient + recoverable. PASS: the availability design meets the business RTO/RPO (HA, redundancy, failover, backup), BCP/DR runbooks exist + are tested + integrated into enterprise continuity, backup/restore is validated for the system's data, and resilience is tested under failure scenarios. Exceptions: a single-point-of-failure design with no HA, no DR plan/runbook or an untested one, backups assumed but never restore-tested, and RTO/RPO undefined or unmet.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (HA / DR architecture; BCP / DR runbooks; Backup + restore validation) as tools — e.g. `resilience/availability design vs business RTO/RPO (HA, redundancy, fa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design)",
        "BCP/DR procedures for the new system (runbooks, the DR plan, integration into enterprise continuity) + that they're tested",
        "Backup + restore validated for the new system's data (not assumed) before + after go-live",
        "Capacity + resilience under load/failure scenarios tested (the system survives a component/site failure within RTO)"
      ],
      "system": [
        "HA / DR architecture",
        "BCP / DR runbooks",
        "Backup + restore validation",
        "Resilience / failover testing"
      ],
      "dataOwner": [
        "BC/DR + SRE / platform",
        "Application owners",
        "Risk management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-18-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Business continuity / resilience",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business continuity / resilience\" as a repeatable agentic workflow: pull the real evidence (The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Business continuity / resilience\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HA / DR architecture, BCP / DR runbooks, Backup + restore validation — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `resilience/availability design vs business RTO/RPO (HA, redundancy, failover, ba` — read-only, against the systems of record.",
        "The test itself is specific. Verify the new system is resilient + recoverable. PASS: the availability design meets the business RTO/RPO (HA, redundancy, failover, backup), BCP/DR runbooks exist + are tested + integrated into enterprise continuity, backup/restore is validated for the system's data, and resilience is tested under failure scenarios. Exceptions: a single-point-of-failure design with no HA, no DR plan/runbook or an untested one, backups assumed but never restore-tested, and RTO/RPO undefined or unmet. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `18_business_continuity_resilience_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HA / DR architecture and BCP / DR runbooks (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 18_business_continuity_resilience_mcp.py` to expose it to your agent — or `python 18_business_continuity_resilience_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HA / DR architecture · BCP / DR runbooks",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business continuity / resilience\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "resilience/availability design vs business RTO/RPO (HA, redundancy, failover, backup)\nBCP/DR procedures for the system (runbooks, DR plan, enterprise-continuity integration) + tested\nbackup + restore validated for the system's data (not assumed)\ncapacity + resilience tested under load/failure scenarios"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design).",
        "The test: Verify the new system is resilient + recoverable.",
        "Reconcile the systems of record (HA / DR architecture, BCP / DR runbooks, Backup + restore validation) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The new business-critical system was deployed with a single-point-of-failure design, no DR plan, and backups that have never been restore-tested — its RTO/RPO were never defined, so a failure would cause an unbounded outage."
      ],
      "references": [
        {
          "title": "ISO 22301 — Business Continuity",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "18_business_continuity_resilience_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/18_business_continuity_resilience_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Business continuity / resilience\" (the resilience/availability design for the new system meeting its business rto/rpo (ha architecture, redundancy, failover, the backup design)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business continuity / resilience\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the new system is resilient + recoverable. PASS: the availability design meets the business RTO/RPO (HA, redundancy, failover, backup), BCP/DR runbooks exist + are tested + integrated into enterprise continuity, backup/restore is validated for the system's data, and resilience is tested under failure scenarios. Exceptions: a single-point-of-failure design with no HA, no DR plan/runbook or an untested one, backups assumed but never restore-tested, and RTO/RPO undefined or unmet. The evidence — The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HA / DR architecture APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HA / DR architecture gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HA / DR architecture; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Business continuity / resilience\" Audit Evidence\n\nThe test:\nVerify the new system is resilient + recoverable. PASS: the availability design meets the business RTO/RPO (HA, redundancy, failover, backup), BCP/DR runbooks exist + are tested + integrated into enterprise continuity, backup/restore is validated for the system's data, and resilience is tested under failure scenarios. Exceptions: a single-point-of-failure design with no HA, no DR plan/runbook or an untested one, backups assumed but never restore-tested, and RTO/RPO undefined or unmet.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business continuity / resilience\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business continuity / resilience\" control must cover\n# fragment: business_continuity_resilience_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "business_continuity_resilience_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-18-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business continuity / resilience\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the business continuity / resilience control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business continuity / resilience control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business continuity / resilience against comparable organisations in the sector",
            "Obtain evidence that the business continuity / resilience control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-18-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business continuity / resilience\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-18-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business continuity / resilience\" control?",
          "options": [
            "A point-in-time screenshot of one system's business continuity / resilience settings, captured during the walkthrough",
            "The The resilience/availability design for the new system meeting its business RTO/RPO (HA architecture, redundancy, failover, the backup design), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business continuity / resilience control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business continuity / resilience capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-18-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business continuity / resilience\"?",
          "options": [
            "From HA / DR architecture and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business continuity / resilience works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. HA / DR architecture) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-18-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business continuity / resilience\"?",
          "options": [
            "The external audit firm, since it is the party examining the business continuity / resilience control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business continuity / resilience data is shared, so the accountability sits with no one in particular",
            "BC/DR + SRE / platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "BC/DR + SRE / platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-18-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business continuity / resilience\", which part stays with the human auditor?",
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
          "id": "sie-18-q7",
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
          "id": "sie-18-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business continuity / resilience\", which of these is a realistic reportable finding?",
          "options": [
            "The new business-critical system was deployed with a single-point-of-failure design, no DR plan, and backups that have never been restore-tested — its RTO/RPO were never defined, so a failure would cause an unbounded outage.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The new business-critical system was deployed with a single-point-of-failure design, no DR plan, and backups that have never been restore-tested — its RTO/RPO were never defined, so a failure would cause an unbounded outage. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-18-q9",
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
          "id": "sie-18-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business continuity / resilience\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business continuity / resilience, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-19",
    "order": 19,
    "title": "Regulatory / compliance alignment",
    "subtitle": "Agentic technical & privacy audit of the regulatory / compliance alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Regulatory / compliance alignment\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the system meets its regulatory + compliance obligations. PASS: applicable regulations are mapped to system requirements, compliance controls are built + tested (audit trails, retention, privacy, regulatory reporting), privacy-by-design (DPIA, minimisation, DSAR) applies where personal data is processed, and legal/compliance sign off before go-live. Exceptions: no regulatory mapping, compliance controls missing (no audit trail/retention; broken regulatory report), no DPIA for personal-data processing, and go-live with no compliance sign-off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Compliance requirements mapping; Audit-trail / retention + reporting controls; DPIA / privacy records) as tools — e.g. `regulatory mapping into the system (SoX, GDPR/privacy, PCI, HIPAA, ind`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each)",
        "The compliance controls built + tested (audit trails, retention, privacy/consent, regulatory reporting, the controls regulators/auditors will rely on)",
        "Privacy by design (DPIA for personal-data processing, data-minimisation, data-subject rights handling)",
        "Compliance sign-off before go-live (legal/compliance confirm the system meets obligations)"
      ],
      "system": [
        "Compliance requirements mapping",
        "Audit-trail / retention + reporting controls",
        "DPIA / privacy records",
        "Compliance sign-off"
      ],
      "dataOwner": [
        "Legal + Compliance + Privacy",
        "Controls / process owners",
        "Business owner"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-19-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Regulatory / compliance alignment",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Regulatory / compliance alignment\" as a repeatable agentic workflow: pull the real evidence (The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Regulatory / compliance alignment\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Compliance requirements mapping, Audit-trail / retention + reporting controls, DPIA / privacy records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `regulatory mapping into the system (SoX, GDPR/privacy, PCI, HIPAA, industry) + h` — read-only, against the systems of record.",
        "The test itself is specific. Verify the system meets its regulatory + compliance obligations. PASS: applicable regulations are mapped to system requirements, compliance controls are built + tested (audit trails, retention, privacy, regulatory reporting), privacy-by-design (DPIA, minimisation, DSAR) applies where personal data is processed, and legal/compliance sign off before go-live. Exceptions: no regulatory mapping, compliance controls missing (no audit trail/retention; broken regulatory report), no DPIA for personal-data processing, and go-live with no compliance sign-off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `19_regulatory_compliance_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Compliance requirements mapping and Audit-trail / retention + reporting controls (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 19_regulatory_compliance_alignment_mcp.py` to expose it to your agent — or `python 19_regulatory_compliance_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Compliance requirements mapping · Audit-trail / retention + reporting controls",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Regulatory / compliance alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "regulatory mapping into the system (SoX, GDPR/privacy, PCI, HIPAA, industry) + how each is met\ncompliance controls built + tested (audit trails, retention, privacy/consent, regulatory reporting)\nprivacy by design (DPIA, data-minimisation, data-subject-rights handling)\ncompliance sign-off before go-live"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each).",
        "The test: Verify the system meets its regulatory + compliance obligations.",
        "Reconcile the systems of record (Compliance requirements mapping, Audit-trail / retention + reporting controls, DPIA / privacy records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Regulatory requirements were never mapped to the system; it processes personal data with no DPIA, lacks the audit trails and retention controls SoX and privacy law require, and went live with no legal or compliance sign-off."
      ],
      "references": [
        {
          "title": "PCAOB AS 2201 — ICFR",
          "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
        },
        {
          "title": "GDPR",
          "url": "https://gdpr-info.eu/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "19_regulatory_compliance_alignment_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/19_regulatory_compliance_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Regulatory / compliance alignment\" (the regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — sox, gdpr/privacy, pci, hipaa, industry rules — and how the system meets each)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Regulatory / compliance alignment\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the system meets its regulatory + compliance obligations. PASS: applicable regulations are mapped to system requirements, compliance controls are built + tested (audit trails, retention, privacy, regulatory reporting), privacy-by-design (DPIA, minimisation, DSAR) applies where personal data is processed, and legal/compliance sign off before go-live. Exceptions: no regulatory mapping, compliance controls missing (no audit trail/retention; broken regulatory report), no DPIA for personal-data processing, and go-live with no compliance sign-off. The evidence — The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Compliance requirements mapping APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Compliance requirements mapping gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Compliance requirements mapping; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Regulatory / compliance alignment\" Audit Evidence\n\nThe test:\nVerify the system meets its regulatory + compliance obligations. PASS: applicable regulations are mapped to system requirements, compliance controls are built + tested (audit trails, retention, privacy, regulatory reporting), privacy-by-design (DPIA, minimisation, DSAR) applies where personal data is processed, and legal/compliance sign off before go-live. Exceptions: no regulatory mapping, compliance controls missing (no audit trail/retention; broken regulatory report), no DPIA for personal-data processing, and go-live with no compliance sign-off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Regulatory / compliance alignment\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Regulatory / compliance alignment\" control must cover\n# fragment: regulatory_compliance_alignment_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "regulatory_compliance_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-19-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Regulatory / compliance alignment\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the regulatory / compliance alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the regulatory / compliance alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for regulatory / compliance alignment against comparable organisations in the sector",
            "Obtain evidence that the regulatory / compliance alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-19-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Regulatory / compliance alignment\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-19-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Regulatory / compliance alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's regulatory / compliance alignment settings, captured during the walkthrough",
            "The The regulatory/compliance requirements mapped into the system (applicable laws/regs/standards — SoX, GDPR/privacy, PCI, HIPAA, industry rules — and how the system meets each), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the regulatory / compliance alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's regulatory / compliance alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-19-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Regulatory / compliance alignment\"?",
          "options": [
            "From Compliance requirements mapping and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how regulatory / compliance alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Compliance requirements mapping) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-19-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Regulatory / compliance alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the regulatory / compliance alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the regulatory / compliance alignment data is shared, so the accountability sits with no one in particular",
            "Legal + Compliance + Privacy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal + Compliance + Privacy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-19-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Regulatory / compliance alignment\", which part stays with the human auditor?",
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
          "id": "sie-19-q7",
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
          "id": "sie-19-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Regulatory / compliance alignment\", which of these is a realistic reportable finding?",
          "options": [
            "Regulatory requirements were never mapped to the system; it processes personal data with no DPIA, lacks the audit trails and retention controls SoX and privacy law require, and went live with no legal or compliance sign-off.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Regulatory requirements were never mapped to the system; it processes personal data with no DPIA, lacks the audit trails and retention controls SoX and privacy law require, and went live with no legal or compliance sign-off. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-19-q9",
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
          "id": "sie-19-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Regulatory / compliance alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind regulatory / compliance alignment, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-20",
    "order": 20,
    "title": "Infra and capacity planning",
    "subtitle": "Agentic technical & privacy audit of the infra and capacity planning control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Infra and capacity planning\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify infrastructure + capacity are planned + validated. PASS: infra is sized to expected volumes + growth across appropriately separated environments, performance/capacity testing proves NFRs are met under peak + projected load, environments have prod parity, and post-go-live capacity monitoring + scaling headroom exist. Exceptions: infra sized by guesswork (under-provisioned), no capacity/performance testing (the system buckles under real load), non-representative test environments, and no capacity monitoring/scaling plan.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (Infrastructure / capacity design; Performance / load testing; Environment provisioning (IaC)) as tools — e.g. `infra design + capacity plan (sizing vs volumes/users/growth, environm`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions)",
        "Performance + capacity testing validating the infra meets NFRs under peak + projected-growth load",
        "Environment provisioning + parity (test/stage representative of prod; no go-live on under-provisioned infra)",
        "Capacity monitoring + scaling/headroom plan for post-go-live growth"
      ],
      "system": [
        "Infrastructure / capacity design",
        "Performance / load testing",
        "Environment provisioning (IaC)",
        "Capacity monitoring + scaling"
      ],
      "dataOwner": [
        "Infrastructure / platform + SRE",
        "Performance engineering",
        "Architecture"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-20-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "Infra and capacity planning",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Infra and capacity planning\" as a repeatable agentic workflow: pull the real evidence (The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"Infra and capacity planning\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Infrastructure / capacity design, Performance / load testing, Environment provisioning (IaC) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `infra design + capacity plan (sizing vs volumes/users/growth, environment topolo` — read-only, against the systems of record.",
        "The test itself is specific. Verify infrastructure + capacity are planned + validated. PASS: infra is sized to expected volumes + growth across appropriately separated environments, performance/capacity testing proves NFRs are met under peak + projected load, environments have prod parity, and post-go-live capacity monitoring + scaling headroom exist. Exceptions: infra sized by guesswork (under-provisioned), no capacity/performance testing (the system buckles under real load), non-representative test environments, and no capacity monitoring/scaling plan. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `20_infra_and_capacity_planning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Infrastructure / capacity design and Performance / load testing (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 20_infra_and_capacity_planning_mcp.py` to expose it to your agent — or `python 20_infra_and_capacity_planning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Infrastructure / capacity design · Performance / load testing",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Infra and capacity planning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "infra design + capacity plan (sizing vs volumes/users/growth, environment topology, cloud/on-prem)\nperformance + capacity testing vs NFRs under peak + projected-growth load\nenvironment provisioning + prod parity (test/stage representative of prod)\ncapacity monitoring + scaling/headroom for post-go-live growth"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions).",
        "The test: Verify infrastructure + capacity are planned + validated.",
        "Reconcile the systems of record (Infrastructure / capacity design, Performance / load testing, Environment provisioning (IaC)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Infrastructure was sized by guesswork with no capacity testing; the system buckled under real production load on day one because the test environment was a fraction of prod, and there's no capacity monitoring or scaling headroom for growth."
      ],
      "references": [
        {
          "title": "ITIL 4 — Capacity & Performance",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "AWS Well-Architected — Performance",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "20_infra_and_capacity_planning_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/20_infra_and_capacity_planning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"Infra and capacity planning\" (the infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Infra and capacity planning\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify infrastructure + capacity are planned + validated. PASS: infra is sized to expected volumes + growth across appropriately separated environments, performance/capacity testing proves NFRs are met under peak + projected load, environments have prod parity, and post-go-live capacity monitoring + scaling headroom exist. Exceptions: infra sized by guesswork (under-provisioned), no capacity/performance testing (the system buckles under real load), non-representative test environments, and no capacity monitoring/scaling plan. The evidence — The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Infrastructure / capacity design APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Infrastructure / capacity design gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Infrastructure / capacity design; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"Infra and capacity planning\" Audit Evidence\n\nThe test:\nVerify infrastructure + capacity are planned + validated. PASS: infra is sized to expected volumes + growth across appropriately separated environments, performance/capacity testing proves NFRs are met under peak + projected load, environments have prod parity, and post-go-live capacity monitoring + scaling headroom exist. Exceptions: infra sized by guesswork (under-provisioned), no capacity/performance testing (the system buckles under real load), non-representative test environments, and no capacity monitoring/scaling plan.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Infra and capacity planning\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Infra and capacity planning\" control must cover\n# fragment: infra_capacity_planning_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "infra_capacity_planning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-20-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Infra and capacity planning\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the infra and capacity planning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the infra and capacity planning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for infra and capacity planning against comparable organisations in the sector",
            "Obtain evidence that the infra and capacity planning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-20-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Infra and capacity planning\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-20-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Infra and capacity planning\" control?",
          "options": [
            "A point-in-time screenshot of one system's infra and capacity planning settings, captured during the walkthrough",
            "The The infrastructure design + capacity plan (sizing based on expected volumes/users/growth, the environment topology — dev/test/stage/prod, cloud/on-prem decisions), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the infra and capacity planning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's infra and capacity planning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-20-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Infra and capacity planning\"?",
          "options": [
            "From Infrastructure / capacity design and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how infra and capacity planning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Infrastructure / capacity design) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-20-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Infra and capacity planning\"?",
          "options": [
            "The external audit firm, since it is the party examining the infra and capacity planning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the infra and capacity planning data is shared, so the accountability sits with no one in particular",
            "Infrastructure / platform + SRE, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Infrastructure / platform + SRE owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-20-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Infra and capacity planning\", which part stays with the human auditor?",
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
          "id": "sie-20-q7",
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
          "id": "sie-20-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Infra and capacity planning\", which of these is a realistic reportable finding?",
          "options": [
            "Infrastructure was sized by guesswork with no capacity testing; the system buckled under real production load on day one because the test environment was a fraction of prod, and there's no capacity monitoring or scaling headroom for growth.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Infrastructure was sized by guesswork with no capacity testing; the system buckled under real production load on day one because the test environment was a fraction of prod, and there's no capacity monitoring or scaling headroom for growth. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-20-q9",
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
          "id": "sie-20-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Infra and capacity planning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind infra and capacity planning, so there is no overlap",
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
    "epochId": "sysimpl-enterprise",
    "id": "sie-21",
    "order": 21,
    "title": "PIR / lessons learned",
    "subtitle": "Agentic technical & privacy audit of the pir / lessons learned control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PIR / lessons learned\" control for System Implementation — Enterprise is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the program is closed with a real PIR + benefits check. PASS: a formal PIR assesses objectives/scope/budget/schedule outcome, benefits are measured against business-case KPIs with owners, lessons learned feed the methodology/knowledge base, and outstanding issues + technical debt are handed to BAU with owners. Exceptions: no PIR (no honest accounting of the outcome), benefits never measured (success assumed), lessons-learned never captured or reused, and open issues/tech debt abandoned at project close with no owner.",
      "approach": "An audit agent calls a read-only MCP server that wraps the System Implementation — Enterprise systems of record (PIR / lessons-learned records; Benefits-realisation measurement; Methodology / knowledge base) as tools — e.g. `formal PIR after stabilisation (objectives/scope/budget/schedule outco`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't)",
        "Benefits realisation measurement against the business-case KPIs (the actual outcome, owned + reported, not assumed)",
        "Lessons learned captured + fed into the organisation's project methodology/knowledge base (so the next program doesn't repeat the mistakes)",
        "Outstanding-issue + technical-debt register handed to BAU with owners + a remediation plan"
      ],
      "system": [
        "PIR / lessons-learned records",
        "Benefits-realisation measurement",
        "Methodology / knowledge base",
        "Outstanding-issue / tech-debt register"
      ],
      "dataOwner": [
        "PMO + program leadership",
        "Sponsor + benefit owners",
        "Operations / BAU owners"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream System Implementation — Enterprise controls."
      }
    },
    "badge": {
      "id": "sie-21-badge",
      "name": "System Implementation — Enterprise Auditor",
      "emoji": "🏛️"
    },
    "wonder": {
      "name": "PIR / lessons learned",
      "location": "System Implementation — Enterprise",
      "era": "Present Day",
      "emoji": "🏛️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PIR / lessons learned\" as a repeatable agentic workflow: pull the real evidence (The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't)) with read-only agents, run the test against policy, and issue a defensible opinion on the System Implementation — Enterprise control.",
      "year": 2025,
      "overview": [
        "The \"PIR / lessons learned\" sub-process is one of the controls an auditor must verify for System Implementation — Enterprise. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PIR / lessons-learned records, Benefits-realisation measurement, Methodology / knowledge base — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `formal PIR after stabilisation (objectives/scope/budget/schedule outcome; what w` — read-only, against the systems of record.",
        "The test itself is specific. Verify the program is closed with a real PIR + benefits check. PASS: a formal PIR assesses objectives/scope/budget/schedule outcome, benefits are measured against business-case KPIs with owners, lessons learned feed the methodology/knowledge base, and outstanding issues + technical debt are handed to BAU with owners. Exceptions: no PIR (no honest accounting of the outcome), benefits never measured (success assumed), lessons-learned never captured or reused, and open issues/tech debt abandoned at project close with no owner. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `21_pir_lessons_learned_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PIR / lessons-learned records and Benefits-realisation measurement (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 21_pir_lessons_learned_mcp.py` to expose it to your agent — or `python 21_pir_lessons_learned_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The go-live that wasn't ready",
        "when": "Recurring",
        "where": "Large ERP/enterprise programs",
        "impact": "A poorly governed implementation goes live without tested data, security design, or a cutover/backout plan, causing business disruption.",
        "body": [
          "Large implementations fail at the seams: incomplete testing, unmigrated or dirty data, security designed late, and cutovers with no rehearsed backout.",
          "Auditors assess governance, architecture, testing/QA, data conversion, cutover, security design, and post-implementation review across the program."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define System Implementation — Enterprise scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PIR / lessons-learned records · Benefits-realisation measurement",
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
          "year": 2018,
          "event": "A bank's core-system migration locks out millions — implementation governance failure",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "ERP go-live disruptions reinforce cutover + data-migration assurance"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PIR / lessons learned\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "formal PIR after stabilisation (objectives/scope/budget/schedule outcome; what worked/didn't)\nbenefits realisation vs business-case KPIs (actual outcome, owned + reported)\nlessons learned fed into methodology/knowledge base\noutstanding-issue + technical-debt register handed to BAU with owners"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't).",
        "The test: Verify the program is closed with a real PIR + benefits check.",
        "Reconcile the systems of record (PIR / lessons-learned records, Benefits-realisation measurement, Methodology / knowledge base) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The program disbanded at go-live with no post-implementation review; benefits were declared achieved but never measured against the business case, lessons learned were never captured, and a backlog of known defects and technical debt was abandoned with no owner."
      ],
      "references": [
        {
          "title": "PMI / PMBOK",
          "url": "https://www.pmi.org/"
        },
        {
          "title": "Managing Successful Programmes (MSP)",
          "url": "https://www.axelos.com/certifications/propath/msp-programme-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "21_pir_lessons_learned_mcp.py",
          "url": "/audit-code/sysimpl-enterprise/21_pir_lessons_learned_mcp.py",
          "description": "Runnable read-only MCP server: gathers the System Implementation — Enterprise evidence for \"PIR / lessons learned\" (the post-implementation review (a formal pir after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PIR / lessons learned\" control for System Implementation — Enterprise at AcmeCorp. THE TEST: Verify the program is closed with a real PIR + benefits check. PASS: a formal PIR assesses objectives/scope/budget/schedule outcome, benefits are measured against business-case KPIs with owners, lessons learned feed the methodology/knowledge base, and outstanding issues + technical debt are handed to BAU with owners. Exceptions: no PIR (no honest accounting of the outcome), benefits never measured (success assumed), lessons-learned never captured or reused, and open issues/tech debt abandoned at project close with no owner. The evidence — The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PIR / lessons-learned records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PIR / lessons-learned records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PIR / lessons-learned records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — System Implementation — Enterprise: \"PIR / lessons learned\" Audit Evidence\n\nThe test:\nVerify the program is closed with a real PIR + benefits check. PASS: a formal PIR assesses objectives/scope/budget/schedule outcome, benefits are measured against business-case KPIs with owners, lessons learned feed the methodology/knowledge base, and outstanding issues + technical debt are handed to BAU with owners. Exceptions: no PIR (no honest accounting of the outcome), benefits never measured (success assumed), lessons-learned never captured or reused, and open issues/tech debt abandoned at project close with no owner.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- sysimpl-enterprise_inventory.json   (in-scope items — The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't))\n- sysimpl-enterprise_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PIR / lessons learned\",\n  \"domain\": \"System Implementation — Enterprise\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{sie_",
        "/evidence/sysimpl-enterprise_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Program / PMO leadership\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PIR / lessons learned\" control must cover\n# fragment: pir_lessons_learned_",
        "/evidence/sysimpl-enterprise_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "sysimpl-enterprise_inventory.json",
            "isDir": false
          },
          {
            "name": "sysimpl-enterprise_state.json",
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
          "value": "FLAG{sie_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_inventory.json",
          "value": "pir_lessons_learned_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/sysimpl-enterprise_state.json",
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
          "id": "sie-21-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PIR / lessons learned\" sub-process of System Implementation — Enterprise?",
          "options": [
            "Deploy and operate the pir / lessons learned control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pir / lessons learned control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pir / lessons learned against comparable organisations in the sector",
            "Obtain evidence that the pir / lessons learned control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "sie-21-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PIR / lessons learned\" matter to the broader System Implementation — Enterprise posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to System Implementation — Enterprise",
            "It stops mattering once a firewall and endpoint agent are deployed across the System Implementation — Enterprise estate",
            "It is a control other System Implementation — Enterprise controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other System Implementation — Enterprise controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "sie-21-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PIR / lessons learned\" control?",
          "options": [
            "A point-in-time screenshot of one system's pir / lessons learned settings, captured during the walkthrough",
            "The The post-implementation review (a formal PIR after stabilisation: did it meet objectives/scope/budget/schedule, benefits realised vs business case, what worked + what didn't), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pir / lessons learned control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pir / lessons learned capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "sie-21-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"PIR / lessons learned\"?",
          "options": [
            "From PIR / lessons-learned records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pir / lessons learned works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PIR / lessons-learned records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "sie-21-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PIR / lessons learned\"?",
          "options": [
            "The external audit firm, since it is the party examining the pir / lessons learned control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pir / lessons learned data is shared, so the accountability sits with no one in particular",
            "PMO + program leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "PMO + program leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "sie-21-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PIR / lessons learned\", which part stays with the human auditor?",
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
          "id": "sie-21-q7",
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
          "id": "sie-21-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PIR / lessons learned\", which of these is a realistic reportable finding?",
          "options": [
            "The program disbanded at go-live with no post-implementation review; benefits were declared achieved but never measured against the business case, lessons learned were never captured, and a backlog of known defects and technical debt was abandoned with no owner.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The program disbanded at go-live with no post-implementation review; benefits were declared achieved but never measured against the business case, lessons learned were never captured, and a backlog of known defects and technical debt was abandoned with no owner. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "sie-21-q9",
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
          "id": "sie-21-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PIR / lessons learned\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pir / lessons learned, so there is no overlap",
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
