import type { EpochConfig, StageConfig } from "../types";

export const changeReleaseEpoch: EpochConfig = {
  "id": "change-release",
  "name": "Change, Release & Configuration Management",
  "subtitle": "Agentic technical & privacy audit — Change, Release & Configuration Management",
  "description": "Audit Change, Release & Configuration Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔁",
  "color": "Orange",
  "unlocked": true
};

export const changeReleaseStages: StageConfig[] = [
  {
    "epochId": "change-release",
    "id": "crc-01",
    "order": 1,
    "title": "Change approvals and SoD",
    "subtitle": "Agentic technical & privacy audit of the change approvals and sod control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change approvals and SoD\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify changes are approved before implementation with segregation of duties. PASS: every production change has a pre-implementation approval appropriate to its risk; the requester/implementer is not the sole approver (SoD); normal/high-risk changes go through the CAB; and there are no unapproved or retro-approved changes. Exceptions: changes implemented with no approval, the implementer self-approving, approvals dated after the change went live, and standard-change auto-approval abused for risky changes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change module (ServiceNow / Jira Service Management); The CAB records; The deployment/pipeline logs (to correlate change ↔ deploy)) as tools — e.g. `ServiceNow change export: requester, approver, approval timestamp vs i`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The change-record export for the period (every change: requester, approver, type, risk, status, dates)",
        "The approval-workflow config (who must approve by risk/type) + SoD between requester, approver, and implementer",
        "Changes implemented WITHOUT approval (or approved after the fact)",
        "The Change Advisory Board (CAB) meeting records for normal changes"
      ],
      "system": [
        "ITSM change module (ServiceNow / Jira Service Management)",
        "The CAB records",
        "The deployment/pipeline logs (to correlate change ↔ deploy)"
      ],
      "dataOwner": [
        "Change management / CAB",
        "IT operations (implementers)",
        "Internal audit"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-01-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Change approvals and SoD",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change approvals and SoD\" as a repeatable agentic workflow: pull the real evidence (The change-record export for the period (every change: requester, approver, type, risk, status, dates)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Change approvals and SoD\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the change-record export for the period (every change: requester, approver, type, risk, status, dates), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change module (ServiceNow / Jira Service Management), The CAB records, The deployment/pipeline logs (to correlate change ↔ deploy) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `ServiceNow change export: requester, approver, approval timestamp vs implementat` — read-only, against the systems of record.",
        "The test itself is specific. Verify changes are approved before implementation with segregation of duties. PASS: every production change has a pre-implementation approval appropriate to its risk; the requester/implementer is not the sole approver (SoD); normal/high-risk changes go through the CAB; and there are no unapproved or retro-approved changes. Exceptions: changes implemented with no approval, the implementer self-approving, approvals dated after the change went live, and standard-change auto-approval abused for risky changes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_change_approvals_and_sod_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change module (ServiceNow / Jira Service Management) and The CAB records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_change_approvals_and_sod_mcp.py` to expose it to your agent — or `python 01_change_approvals_and_sod_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change module (ServiceNow / Jira Service Management) · The CAB records",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change approvals and SoD\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "ServiceNow change export: requester, approver, approval timestamp vs implementation timestamp\nfind changes where approver = requester/implementer (SoD violation)\nchanges with status=implemented but no approval, or approval after go-live\ncorrelate deploy-pipeline events to change records (deploys with no change)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The change-record export for the period (every change: requester, approver, type, risk, status, dates).",
        "The test: Verify changes are approved before implementation with segregation of duties.",
        "Reconcile the systems of record (ITSM change module (ServiceNow / Jira Service Management), The CAB records, The deployment/pipeline logs (to correlate change ↔ deploy)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A meaningful share of production deploys have no change record at all, and among those that do, engineers routinely self-approve their own changes — no segregation of duties."
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-53 CM-3",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_change_approvals_and_sod_mcp.py",
          "url": "/audit-code/change-release/01_change_approvals_and_sod_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Change approvals and SoD\" (the change-record export for the period (every change: requester, approver, type, risk, status, dates)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change approvals and SoD\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify changes are approved before implementation with segregation of duties. PASS: every production change has a pre-implementation approval appropriate to its risk; the requester/implementer is not the sole approver (SoD); normal/high-risk changes go through the CAB; and there are no unapproved or retro-approved changes. Exceptions: changes implemented with no approval, the implementer self-approving, approvals dated after the change went live, and standard-change auto-approval abused for risky changes. The evidence — The change-record export for the period (every change: requester, approver, type, risk, status, dates) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change module (ServiceNow / Jira Service Management) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change module (ServiceNow / Jira Service Management) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change module (ServiceNow / Jira Service Management); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Change approvals and SoD\" Audit Evidence\n\nThe test:\nVerify changes are approved before implementation with segregation of duties. PASS: every production change has a pre-implementation approval appropriate to its risk; the requester/implementer is not the sole approver (SoD); normal/high-risk changes go through the CAB; and there are no unapproved or retro-approved changes. Exceptions: changes implemented with no approval, the implementer self-approving, approvals dated after the change went live, and standard-change auto-approval abused for risky changes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The change-record export for the period (every change: requester, approver, type, risk, status, dates))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change approvals and SoD\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change approvals and SoD\" control must cover\n# fragment: change_approvals_sod_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "change_approvals_sod_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change approvals and SoD\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the change approvals and sod control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change approvals and sod control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change approvals and sod against comparable organisations in the sector",
            "Obtain evidence that the change approvals and sod control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change approvals and SoD\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change approvals and SoD\" control?",
          "options": [
            "A point-in-time screenshot of one system's change approvals and sod settings, captured during the walkthrough",
            "The The change-record export for the period (every change: requester, approver, type, risk, status, dates), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change approvals and sod control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change approvals and sod capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change approvals and SoD\"?",
          "options": [
            "From ITSM change module (ServiceNow / Jira Service Management) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change approvals and sod works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change module (ServiceNow / Jira Service Management)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change approvals and SoD\"?",
          "options": [
            "The external audit firm, since it is the party examining the change approvals and sod control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change approvals and sod data is shared, so the accountability sits with no one in particular",
            "Change management / CAB, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management / CAB owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change approvals and SoD\", which part stays with the human auditor?",
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
          "id": "crc-01-q7",
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
          "id": "crc-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change approvals and SoD\", which of these is a realistic reportable finding?",
          "options": [
            "A meaningful share of production deploys have no change record at all, and among those that do, engineers routinely self-approve their own changes — no segregation of duties.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A meaningful share of production deploys have no change record at all, and among those that do, engineers routinely self-approve their own changes — no segregation of duties. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-01-q9",
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
          "id": "crc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change approvals and SoD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change approvals and sod, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-02",
    "order": 2,
    "title": "Emergency change process",
    "subtitle": "Agentic technical & privacy audit of the emergency change process control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Emergency change process\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify emergency changes are controlled, not a bypass. PASS: a defined emergency-change process exists (qualifying criteria, authorizer, expedited-but-real approval, mandatory retro-review); emergency changes are a small % of total; each has justification + a post-implementation review; and testing/backout isn't skipped. Exceptions: 'emergency' used to bypass approval for routine changes, no retro-review, a high emergency-change rate (the process is the norm), and emergency changes that failed with no backout.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM emergency-change records; The emergency-change policy; Incident records (to validate a real emergency)) as tools — e.g. `emergency-change export: count + % of all changes (abuse signal if hig`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The emergency/expedited change records + their post-hoc approval + justification",
        "The emergency-change policy (what qualifies, who can authorize, the retro-review requirement)",
        "The emergency-change rate (emergency as % of all changes — an abuse signal)",
        "Evidence emergency changes still get testing/backout + a post-implementation review"
      ],
      "system": [
        "ITSM emergency-change records",
        "The emergency-change policy",
        "Incident records (to validate a real emergency)"
      ],
      "dataOwner": [
        "Change management",
        "IT operations",
        "Risk / audit"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-02-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Emergency change process",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Emergency change process\" as a repeatable agentic workflow: pull the real evidence (The emergency/expedited change records + their post-hoc approval + justification) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Emergency change process\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the emergency/expedited change records + their post-hoc approval + justification, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM emergency-change records, The emergency-change policy, Incident records (to validate a real emergency) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `emergency-change export: count + % of all changes (abuse signal if high)` — read-only, against the systems of record.",
        "The test itself is specific. Verify emergency changes are controlled, not a bypass. PASS: a defined emergency-change process exists (qualifying criteria, authorizer, expedited-but-real approval, mandatory retro-review); emergency changes are a small % of total; each has justification + a post-implementation review; and testing/backout isn't skipped. Exceptions: 'emergency' used to bypass approval for routine changes, no retro-review, a high emergency-change rate (the process is the norm), and emergency changes that failed with no backout. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_emergency_change_process_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM emergency-change records and The emergency-change policy (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_emergency_change_process_mcp.py` to expose it to your agent — or `python 02_emergency_change_process_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM emergency-change records · The emergency-change policy",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Emergency change process\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "emergency-change export: count + % of all changes (abuse signal if high)\neach emergency change: justification + post-hoc approval + retro-review present?\ncorrelate to a real incident/outage (was it a genuine emergency?)\nemergency changes that caused issues + whether a backout existed"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The emergency/expedited change records + their post-hoc approval + justification.",
        "The test: Verify emergency changes are controlled, not a bypass.",
        "Reconcile the systems of record (ITSM emergency-change records, The emergency-change policy, Incident records (to validate a real emergency)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Emergency changes are 35% of all changes (the process has become the default way to skip the CAB), and fewer than half have the required post-implementation review."
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-53 CM-3",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_emergency_change_process_mcp.py",
          "url": "/audit-code/change-release/02_emergency_change_process_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Emergency change process\" (the emergency/expedited change records + their post-hoc approval + justification), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Emergency change process\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify emergency changes are controlled, not a bypass. PASS: a defined emergency-change process exists (qualifying criteria, authorizer, expedited-but-real approval, mandatory retro-review); emergency changes are a small % of total; each has justification + a post-implementation review; and testing/backout isn't skipped. Exceptions: 'emergency' used to bypass approval for routine changes, no retro-review, a high emergency-change rate (the process is the norm), and emergency changes that failed with no backout. The evidence — The emergency/expedited change records + their post-hoc approval + justification — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM emergency-change records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM emergency-change records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM emergency-change records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Emergency change process\" Audit Evidence\n\nThe test:\nVerify emergency changes are controlled, not a bypass. PASS: a defined emergency-change process exists (qualifying criteria, authorizer, expedited-but-real approval, mandatory retro-review); emergency changes are a small % of total; each has justification + a post-implementation review; and testing/backout isn't skipped. Exceptions: 'emergency' used to bypass approval for routine changes, no retro-review, a high emergency-change rate (the process is the norm), and emergency changes that failed with no backout.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The emergency/expedited change records + their post-hoc approval + justification)\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Emergency change process\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Emergency change process\" control must cover\n# fragment: emergency_change_process_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "emergency_change_process_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Emergency change process\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the emergency change process control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the emergency change process control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for emergency change process against comparable organisations in the sector",
            "Obtain evidence that the emergency change process control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Emergency change process\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Emergency change process\" control?",
          "options": [
            "A point-in-time screenshot of one system's emergency change process settings, captured during the walkthrough",
            "The The emergency/expedited change records + their post-hoc approval + justification, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the emergency change process control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's emergency change process capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Emergency change process\"?",
          "options": [
            "From ITSM emergency-change records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how emergency change process works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM emergency-change records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Emergency change process\"?",
          "options": [
            "The external audit firm, since it is the party examining the emergency change process control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the emergency change process data is shared, so the accountability sits with no one in particular",
            "Change management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Emergency change process\", which part stays with the human auditor?",
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
          "id": "crc-02-q7",
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
          "id": "crc-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Emergency change process\", which of these is a realistic reportable finding?",
          "options": [
            "Emergency changes are 35% of all changes (the process has become the default way to skip the CAB), and fewer than half have the required post-implementation review.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Emergency changes are 35% of all changes (the process has become the default way to skip the CAB), and fewer than half have the required post-implementation review. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-02-q9",
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
          "id": "crc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Emergency change process\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind emergency change process, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-03",
    "order": 3,
    "title": "Release planning & backout",
    "subtitle": "Agentic technical & privacy audit of the release planning & backout control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Release planning & backout\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify releases are planned with a tested rollback. PASS: each significant release has a plan (scope, dependencies, validation) and a documented, tested backout/rollback; a go/no-go gate precedes deployment; and when a release fails, backout works. Exceptions: releases with no plan, no backout/rollback (or untested), no go/no-go gate, and failed releases that couldn't be rolled back (extended outage).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (Release-management tooling / runbooks; The deployment pipeline (rollback capability — blue-green / canary); Change + incident records) as tools — e.g. `sample releases: is there a plan + a documented backout/rollback?`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The release plan per major release (scope, schedule, dependencies, validation steps)",
        "The documented + tested backout/rollback plan for each release",
        "Go/no-go decision records + the deployment runbook",
        "Failed-release recovery evidence (was backout actually executed successfully when needed)"
      ],
      "system": [
        "Release-management tooling / runbooks",
        "The deployment pipeline (rollback capability — blue-green / canary)",
        "Change + incident records"
      ],
      "dataOwner": [
        "Release management",
        "Engineering / SRE",
        "Product (go/no-go)"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-03-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Release planning & backout",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Release planning & backout\" as a repeatable agentic workflow: pull the real evidence (The release plan per major release (scope, schedule, dependencies, validation steps)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Release planning & backout\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the release plan per major release (scope, schedule, dependencies, validation steps), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Release-management tooling / runbooks, The deployment pipeline (rollback capability — blue-green / canary), Change + incident records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `sample releases: is there a plan + a documented backout/rollback?` — read-only, against the systems of record.",
        "The test itself is specific. Verify releases are planned with a tested rollback. PASS: each significant release has a plan (scope, dependencies, validation) and a documented, tested backout/rollback; a go/no-go gate precedes deployment; and when a release fails, backout works. Exceptions: releases with no plan, no backout/rollback (or untested), no go/no-go gate, and failed releases that couldn't be rolled back (extended outage). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_release_planning_backout_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Release-management tooling / runbooks and The deployment pipeline (rollback capability — blue-green / canary) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_release_planning_backout_mcp.py` to expose it to your agent — or `python 03_release_planning_backout_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Release-management tooling / runbooks · The deployment pipeline (rollback capability — blue-green / canary)",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Release planning & backout\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "sample releases: is there a plan + a documented backout/rollback?\nis the rollback tested (blue-green / canary with automated rollback)?\ngo/no-go decision records\npost-failure: was backout executed + successful (MTTR)?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The release plan per major release (scope, schedule, dependencies, validation steps).",
        "The test: Verify releases are planned with a tested rollback.",
        "Reconcile the systems of record (Release-management tooling / runbooks, The deployment pipeline (rollback capability — blue-green / canary), Change + incident records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Releases ship with no rollback plan beyond 'roll forward and hope'; a recent failed release caused a six-hour outage because there was no tested way back to the prior version."
      ],
      "references": [
        {
          "title": "ITIL 4 — Release Management",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "DORA Metrics",
          "url": "https://dora.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_release_planning_backout_mcp.py",
          "url": "/audit-code/change-release/03_release_planning_backout_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Release planning & backout\" (the release plan per major release (scope, schedule, dependencies, validation steps)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Release planning & backout\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify releases are planned with a tested rollback. PASS: each significant release has a plan (scope, dependencies, validation) and a documented, tested backout/rollback; a go/no-go gate precedes deployment; and when a release fails, backout works. Exceptions: releases with no plan, no backout/rollback (or untested), no go/no-go gate, and failed releases that couldn't be rolled back (extended outage). The evidence — The release plan per major release (scope, schedule, dependencies, validation steps) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Release-management tooling / runbooks APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Release-management tooling / runbooks gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Release-management tooling / runbooks; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Release planning & backout\" Audit Evidence\n\nThe test:\nVerify releases are planned with a tested rollback. PASS: each significant release has a plan (scope, dependencies, validation) and a documented, tested backout/rollback; a go/no-go gate precedes deployment; and when a release fails, backout works. Exceptions: releases with no plan, no backout/rollback (or untested), no go/no-go gate, and failed releases that couldn't be rolled back (extended outage).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The release plan per major release (scope, schedule, dependencies, validation steps))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Release planning & backout\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Release planning & backout\" control must cover\n# fragment: release_planning_backout_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "release_planning_backout_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Release planning & backout\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the release planning & backout control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the release planning & backout control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for release planning & backout against comparable organisations in the sector",
            "Obtain evidence that the release planning & backout control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Release planning & backout\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Release planning & backout\" control?",
          "options": [
            "A point-in-time screenshot of one system's release planning & backout settings, captured during the walkthrough",
            "The The release plan per major release (scope, schedule, dependencies, validation steps), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the release planning & backout control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's release planning & backout capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Release planning & backout\"?",
          "options": [
            "From Release-management tooling / runbooks and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how release planning & backout works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Release-management tooling / runbooks) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Release planning & backout\"?",
          "options": [
            "The external audit firm, since it is the party examining the release planning & backout control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the release planning & backout data is shared, so the accountability sits with no one in particular",
            "Release management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Release management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Release planning & backout\", which part stays with the human auditor?",
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
          "id": "crc-03-q7",
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
          "id": "crc-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Release planning & backout\", which of these is a realistic reportable finding?",
          "options": [
            "Releases ship with no rollback plan beyond 'roll forward and hope'; a recent failed release caused a six-hour outage because there was no tested way back to the prior version.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Releases ship with no rollback plan beyond 'roll forward and hope'; a recent failed release caused a six-hour outage because there was no tested way back to the prior version. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-03-q9",
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
          "id": "crc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Release planning & backout\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind release planning & backout, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-04",
    "order": 4,
    "title": "Configuration management",
    "subtitle": "Agentic technical & privacy audit of the configuration management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Configuration management\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify configuration items are inventoried, baselined, and changes are tracked. PASS: a CMDB inventories in-scope CIs with owners + relationships and reconciles to discovery (accurate); baselines are defined per CI type; and CI changes are linked to change records. Exceptions: a stale/inaccurate CMDB (large drift vs discovery), no baselines, CIs changing with no change record, and unknown/undocumented CIs in production.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (CMDB (ServiceNow CMDB) + discovery; The configuration baselines; Change records) as tools — e.g. `CMDB accuracy: CIs vs discovery-tool reconciliation (drift %)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality)",
        "The defined configuration baselines per CI type",
        "Config-change tracking (every CI change linked to a change record)",
        "CMDB reconciliation / discovery results (drift between the CMDB and reality)"
      ],
      "system": [
        "CMDB (ServiceNow CMDB) + discovery",
        "The configuration baselines",
        "Change records"
      ],
      "dataOwner": [
        "Configuration management / IT ops",
        "CI owners",
        "Change management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-04-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Configuration management",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Configuration management\" as a repeatable agentic workflow: pull the real evidence (The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Configuration management\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CMDB (ServiceNow CMDB) + discovery, The configuration baselines, Change records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `CMDB accuracy: CIs vs discovery-tool reconciliation (drift %)` — read-only, against the systems of record.",
        "The test itself is specific. Verify configuration items are inventoried, baselined, and changes are tracked. PASS: a CMDB inventories in-scope CIs with owners + relationships and reconciles to discovery (accurate); baselines are defined per CI type; and CI changes are linked to change records. Exceptions: a stale/inaccurate CMDB (large drift vs discovery), no baselines, CIs changing with no change record, and unknown/undocumented CIs in production. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_configuration_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CMDB (ServiceNow CMDB) + discovery and The configuration baselines (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_configuration_management_mcp.py` to expose it to your agent — or `python 04_configuration_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CMDB (ServiceNow CMDB) + discovery · The configuration baselines",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Configuration management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "CMDB accuracy: CIs vs discovery-tool reconciliation (drift %)\nconfirm baselines exist per CI type\nsample CI changes: linked to an approved change record?\nfind production CIs not in the CMDB (shadow)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality).",
        "The test: Verify configuration items are inventoried, baselined, and changes are tracked.",
        "Reconcile the systems of record (CMDB (ServiceNow CMDB) + discovery, The configuration baselines, Change records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The CMDB is ~60% accurate against discovery, has no baselines for most CI types, and many production servers change configuration with no linked change record."
      ],
      "references": [
        {
          "title": "ITIL 4 — Service Configuration Management",
          "url": "https://www.axelos.com/certifications/itil-service-management"
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
          "name": "04_configuration_management_mcp.py",
          "url": "/audit-code/change-release/04_configuration_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Configuration management\" (the cmdb / configuration-item inventory + its accuracy (cis vs discovered reality)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Configuration management\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify configuration items are inventoried, baselined, and changes are tracked. PASS: a CMDB inventories in-scope CIs with owners + relationships and reconciles to discovery (accurate); baselines are defined per CI type; and CI changes are linked to change records. Exceptions: a stale/inaccurate CMDB (large drift vs discovery), no baselines, CIs changing with no change record, and unknown/undocumented CIs in production. The evidence — The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CMDB (ServiceNow CMDB) + discovery APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CMDB (ServiceNow CMDB) + discovery gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CMDB (ServiceNow CMDB) + discovery; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Configuration management\" Audit Evidence\n\nThe test:\nVerify configuration items are inventoried, baselined, and changes are tracked. PASS: a CMDB inventories in-scope CIs with owners + relationships and reconciles to discovery (accurate); baselines are defined per CI type; and CI changes are linked to change records. Exceptions: a stale/inaccurate CMDB (large drift vs discovery), no baselines, CIs changing with no change record, and unknown/undocumented CIs in production.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Configuration management\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Configuration management\" control must cover\n# fragment: configuration_management_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "configuration_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Configuration management\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the configuration management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the configuration management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for configuration management against comparable organisations in the sector",
            "Obtain evidence that the configuration management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Configuration management\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Configuration management\" control?",
          "options": [
            "A point-in-time screenshot of one system's configuration management settings, captured during the walkthrough",
            "The The CMDB / configuration-item inventory + its accuracy (CIs vs discovered reality), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the configuration management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's configuration management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Configuration management\"?",
          "options": [
            "From CMDB (ServiceNow CMDB) + discovery and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how configuration management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. CMDB (ServiceNow CMDB) + discovery) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Configuration management\"?",
          "options": [
            "The external audit firm, since it is the party examining the configuration management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the configuration management data is shared, so the accountability sits with no one in particular",
            "Configuration management / IT ops, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Configuration management / IT ops owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Configuration management\", which part stays with the human auditor?",
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
          "id": "crc-04-q7",
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
          "id": "crc-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Configuration management\", which of these is a realistic reportable finding?",
          "options": [
            "The CMDB is ~60% accurate against discovery, has no baselines for most CI types, and many production servers change configuration with no linked change record.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The CMDB is ~60% accurate against discovery, has no baselines for most CI types, and many production servers change configuration with no linked change record. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-04-q9",
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
          "id": "crc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Configuration management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind configuration management, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-05",
    "order": 5,
    "title": "Baseline enforcement",
    "subtitle": "Agentic technical & privacy audit of the baseline enforcement control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Baseline enforcement\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify configuration baselines are enforced, not just documented. PASS: secure baselines are defined per platform, compliance is scanned, drift is detected and auto-remediated or ticketed within SLA, and an enforcement engine (DSC / SSM / Policy) prevents or corrects deviation; exceptions are time-boxed. Exceptions: baselines documented but not scanned/enforced, persistent drift, no auto-remediation, and 'temporary' exceptions with no expiry.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC); Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy); Drift dashboards) as tools — e.g. `compliance scan vs the approved baseline per platform`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The approved secure-configuration baselines per platform (OS, DB, network, cloud)",
        "Compliance-scan results vs baseline + the enforcement mechanism (Desired State Config / SSM / Policy)",
        "Drift detection + auto-remediation evidence",
        "The exception register for baseline deviations"
      ],
      "system": [
        "Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC)",
        "Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy)",
        "Drift dashboards"
      ],
      "dataOwner": [
        "Platform / infrastructure",
        "Security engineering (baselines)",
        "Change management"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-05-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Baseline enforcement",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Baseline enforcement\" as a repeatable agentic workflow: pull the real evidence (The approved secure-configuration baselines per platform (OS, DB, network, cloud)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Baseline enforcement\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the approved secure-configuration baselines per platform (OS, DB, network, cloud), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC), Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy), Drift dashboards — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `compliance scan vs the approved baseline per platform` — read-only, against the systems of record.",
        "The test itself is specific. Verify configuration baselines are enforced, not just documented. PASS: secure baselines are defined per platform, compliance is scanned, drift is detected and auto-remediated or ticketed within SLA, and an enforcement engine (DSC / SSM / Policy) prevents or corrects deviation; exceptions are time-boxed. Exceptions: baselines documented but not scanned/enforced, persistent drift, no auto-remediation, and 'temporary' exceptions with no expiry. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_baseline_enforcement_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC) and Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_baseline_enforcement_mcp.py` to expose it to your agent — or `python 05_baseline_enforcement_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC) · Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy)",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Baseline enforcement\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "compliance scan vs the approved baseline per platform\nconfirm an enforcement engine (DSC / SSM / Policy) corrects drift\ndrift detection + MTTR-to-remediate\nexception register: justified + time-boxed?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The approved secure-configuration baselines per platform (OS, DB, network, cloud).",
        "The test: Verify configuration baselines are enforced, not just documented.",
        "Reconcile the systems of record (Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC), Enforcement (Ansible / Chef / Puppet / AWS SSM / Azure Policy), Drift dashboards) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Baselines exist on paper but nothing enforces them — a scan shows 30% of servers drifted from the CIS baseline with no remediation, and several 'temporary' exceptions are years old."
      ],
      "references": [
        {
          "title": "NIST SP 800-128",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "CIS Benchmarks",
          "url": "https://www.cisecurity.org/cis-benchmarks"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_baseline_enforcement_mcp.py",
          "url": "/audit-code/change-release/05_baseline_enforcement_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Baseline enforcement\" (the approved secure-configuration baselines per platform (os, db, network, cloud)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Baseline enforcement\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify configuration baselines are enforced, not just documented. PASS: secure baselines are defined per platform, compliance is scanned, drift is detected and auto-remediated or ticketed within SLA, and an enforcement engine (DSC / SSM / Policy) prevents or corrects deviation; exceptions are time-boxed. Exceptions: baselines documented but not scanned/enforced, persistent drift, no auto-remediation, and 'temporary' exceptions with no expiry. The evidence — The approved secure-configuration baselines per platform (OS, DB, network, cloud) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Baseline enforcement\" Audit Evidence\n\nThe test:\nVerify configuration baselines are enforced, not just documented. PASS: secure baselines are defined per platform, compliance is scanned, drift is detected and auto-remediated or ticketed within SLA, and an enforcement engine (DSC / SSM / Policy) prevents or corrects deviation; exceptions are time-boxed. Exceptions: baselines documented but not scanned/enforced, persistent drift, no auto-remediation, and 'temporary' exceptions with no expiry.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The approved secure-configuration baselines per platform (OS, DB, network, cloud))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Baseline enforcement\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Baseline enforcement\" control must cover\n# fragment: baseline_enforcement_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "baseline_enforcement_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Baseline enforcement\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the baseline enforcement control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the baseline enforcement control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for baseline enforcement against comparable organisations in the sector",
            "Obtain evidence that the baseline enforcement control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Baseline enforcement\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Baseline enforcement\" control?",
          "options": [
            "A point-in-time screenshot of one system's baseline enforcement settings, captured during the walkthrough",
            "The The approved secure-configuration baselines per platform (OS, DB, network, cloud), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the baseline enforcement control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's baseline enforcement capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Baseline enforcement\"?",
          "options": [
            "From Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how baseline enforcement works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Config-compliance scanners (CIS-CAT / Tenable PC / Qualys PC)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Baseline enforcement\"?",
          "options": [
            "The external audit firm, since it is the party examining the baseline enforcement control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the baseline enforcement data is shared, so the accountability sits with no one in particular",
            "Platform / infrastructure, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / infrastructure owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Baseline enforcement\", which part stays with the human auditor?",
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
          "id": "crc-05-q7",
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
          "id": "crc-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Baseline enforcement\", which of these is a realistic reportable finding?",
          "options": [
            "Baselines exist on paper but nothing enforces them — a scan shows 30% of servers drifted from the CIS baseline with no remediation, and several 'temporary' exceptions are years old.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Baselines exist on paper but nothing enforces them — a scan shows 30% of servers drifted from the CIS baseline with no remediation, and several 'temporary' exceptions are years old. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-05-q9",
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
          "id": "crc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Baseline enforcement\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind baseline enforcement, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-06",
    "order": 6,
    "title": "Post-implementation review",
    "subtitle": "Agentic technical & privacy audit of the post-implementation review control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-implementation review\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify changes/releases get a post-implementation review that drives improvement. PASS: significant + failed changes get a PIR (did it achieve its goal, any issues, lessons); change-success metrics are tracked; PIR corrective actions are assigned + closed; and failed changes are correlated to incidents. Exceptions: no PIRs, box-ticking PIRs (no corrective actions), failed changes with no review, and no change-success metrics.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change / PIR records; Change-metrics dashboard; Incident records) as tools — e.g. `PIR records for a sample of major + failed changes`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons)",
        "Change-success-rate + failed-change + emergency-rate metrics",
        "Evidence PIR findings feed back into the process (corrective actions tracked + closed)",
        "The link between failed changes and the incidents they caused"
      ],
      "system": [
        "ITSM change / PIR records",
        "Change-metrics dashboard",
        "Incident records"
      ],
      "dataOwner": [
        "Change management",
        "IT ops / engineering",
        "Service management"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-06-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Post-implementation review",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-implementation review\" as a repeatable agentic workflow: pull the real evidence (The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-implementation review\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change / PIR records, Change-metrics dashboard, Incident records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `PIR records for a sample of major + failed changes` — read-only, against the systems of record.",
        "The test itself is specific. Verify changes/releases get a post-implementation review that drives improvement. PASS: significant + failed changes get a PIR (did it achieve its goal, any issues, lessons); change-success metrics are tracked; PIR corrective actions are assigned + closed; and failed changes are correlated to incidents. Exceptions: no PIRs, box-ticking PIRs (no corrective actions), failed changes with no review, and no change-success metrics. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_post_implementation_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change / PIR records and Change-metrics dashboard (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_post_implementation_review_mcp.py` to expose it to your agent — or `python 06_post_implementation_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change / PIR records · Change-metrics dashboard",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-implementation review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "PIR records for a sample of major + failed changes\nchange-success rate, failed-change %, emergency % metrics + trend\nPIR corrective actions: assigned + closed?\ncorrelate failed changes to the incidents they triggered"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons).",
        "The test: Verify changes/releases get a post-implementation review that drives improvement.",
        "Reconcile the systems of record (ITSM change / PIR records, Change-metrics dashboard, Incident records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. PIRs are only done (if at all) for major releases and are box-ticking with no corrective actions; failed-change rate is unmeasured, so the same change-induced outages keep recurring."
      ],
      "references": [
        {
          "title": "ITIL 4 — Continual Improvement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "DORA — Change Failure Rate",
          "url": "https://dora.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_post_implementation_review_mcp.py",
          "url": "/audit-code/change-release/06_post_implementation_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Post-implementation review\" (the post-implementation review (pir) records for changes/releases (success/failure, issues, lessons)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-implementation review\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify changes/releases get a post-implementation review that drives improvement. PASS: significant + failed changes get a PIR (did it achieve its goal, any issues, lessons); change-success metrics are tracked; PIR corrective actions are assigned + closed; and failed changes are correlated to incidents. Exceptions: no PIRs, box-ticking PIRs (no corrective actions), failed changes with no review, and no change-success metrics. The evidence — The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change / PIR records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change / PIR records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change / PIR records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Post-implementation review\" Audit Evidence\n\nThe test:\nVerify changes/releases get a post-implementation review that drives improvement. PASS: significant + failed changes get a PIR (did it achieve its goal, any issues, lessons); change-success metrics are tracked; PIR corrective actions are assigned + closed; and failed changes are correlated to incidents. Exceptions: no PIRs, box-ticking PIRs (no corrective actions), failed changes with no review, and no change-success metrics.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-implementation review\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-implementation review\" control must cover\n# fragment: postimplementation_review_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "postimplementation_review_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-implementation review\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the post-implementation review control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-implementation review control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-implementation review against comparable organisations in the sector",
            "Obtain evidence that the post-implementation review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-implementation review\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-implementation review\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-implementation review settings, captured during the walkthrough",
            "The The post-implementation review (PIR) records for changes/releases (success/failure, issues, lessons), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-implementation review control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-implementation review capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-implementation review\"?",
          "options": [
            "From ITSM change / PIR records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-implementation review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change / PIR records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-implementation review\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-implementation review control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-implementation review data is shared, so the accountability sits with no one in particular",
            "Change management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-implementation review\", which part stays with the human auditor?",
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
          "id": "crc-06-q7",
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
          "id": "crc-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-implementation review\", which of these is a realistic reportable finding?",
          "options": [
            "PIRs are only done (if at all) for major releases and are box-ticking with no corrective actions; failed-change rate is unmeasured, so the same change-induced outages keep recurring.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. PIRs are only done (if at all) for major releases and are box-ticking with no corrective actions; failed-change rate is unmeasured, so the same change-induced outages keep recurring. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-06-q9",
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
          "id": "crc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-implementation review\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-implementation review, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-07",
    "order": 7,
    "title": "Business impact analysis",
    "subtitle": "Agentic technical & privacy audit of the business impact analysis control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Business impact analysis\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify changes carry a business-impact/risk assessment that drives handling. PASS: each change has an impact/risk assessment (services, users, downtime, dependencies, security) that sets its approval level + window; high-impact changes get extra scrutiny + scheduling in approved windows; and dependency/conflict checks run. Exceptions: changes with no impact assessment, risk mis-classified (high-impact treated as standard), changes during blackout/peak windows, and no dependency/conflict checking.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (ITSM change-risk fields + assessment; CMDB (dependency mapping); Change calendar / maintenance windows) as tools — e.g. `sample changes: is there an impact/risk assessment + correct classific`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact)",
        "The change-risk classification driving approval level + scheduling",
        "Dependency mapping (does the change touch a critical or shared service?)",
        "Maintenance-window + blackout-period adherence"
      ],
      "system": [
        "ITSM change-risk fields + assessment",
        "CMDB (dependency mapping)",
        "Change calendar / maintenance windows"
      ],
      "dataOwner": [
        "Change management",
        "Service / business owners",
        "IT ops"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-07-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Business impact analysis",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Business impact analysis\" as a repeatable agentic workflow: pull the real evidence (The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Business impact analysis\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ITSM change-risk fields + assessment, CMDB (dependency mapping), Change calendar / maintenance windows — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `sample changes: is there an impact/risk assessment + correct classification?` — read-only, against the systems of record.",
        "The test itself is specific. Verify changes carry a business-impact/risk assessment that drives handling. PASS: each change has an impact/risk assessment (services, users, downtime, dependencies, security) that sets its approval level + window; high-impact changes get extra scrutiny + scheduling in approved windows; and dependency/conflict checks run. Exceptions: changes with no impact assessment, risk mis-classified (high-impact treated as standard), changes during blackout/peak windows, and no dependency/conflict checking. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_business_impact_analysis_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ITSM change-risk fields + assessment and CMDB (dependency mapping) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_business_impact_analysis_mcp.py` to expose it to your agent — or `python 07_business_impact_analysis_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ITSM change-risk fields + assessment · CMDB (dependency mapping)",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Business impact analysis\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "sample changes: is there an impact/risk assessment + correct classification?\ndependency check against the CMDB (does it touch a critical/shared service?)\nchanges scheduled outside approved windows / during blackouts\nhigh-impact changes treated as standard (mis-classification)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact).",
        "The test: Verify changes carry a business-impact/risk assessment that drives handling.",
        "Reconcile the systems of record (ITSM change-risk fields + assessment, CMDB (dependency mapping), Change calendar / maintenance windows) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Most changes carry no real impact assessment and default to 'low risk', so a change to a shared authentication service was treated as standard and deployed at peak — taking down every dependent app."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 CM-4 (Impact Analysis)",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_business_impact_analysis_mcp.py",
          "url": "/audit-code/change-release/07_business_impact_analysis_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Business impact analysis\" (the risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Business impact analysis\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify changes carry a business-impact/risk assessment that drives handling. PASS: each change has an impact/risk assessment (services, users, downtime, dependencies, security) that sets its approval level + window; high-impact changes get extra scrutiny + scheduling in approved windows; and dependency/conflict checks run. Exceptions: changes with no impact assessment, risk mis-classified (high-impact treated as standard), changes during blackout/peak windows, and no dependency/conflict checking. The evidence — The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ITSM change-risk fields + assessment APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ITSM change-risk fields + assessment gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ITSM change-risk fields + assessment; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Business impact analysis\" Audit Evidence\n\nThe test:\nVerify changes carry a business-impact/risk assessment that drives handling. PASS: each change has an impact/risk assessment (services, users, downtime, dependencies, security) that sets its approval level + window; high-impact changes get extra scrutiny + scheduling in approved windows; and dependency/conflict checks run. Exceptions: changes with no impact assessment, risk mis-classified (high-impact treated as standard), changes during blackout/peak windows, and no dependency/conflict checking.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Business impact analysis\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Business impact analysis\" control must cover\n# fragment: business_impact_analysis_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "business_impact_analysis_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Business impact analysis\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the business impact analysis control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the business impact analysis control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for business impact analysis against comparable organisations in the sector",
            "Obtain evidence that the business impact analysis control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Business impact analysis\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Business impact analysis\" control?",
          "options": [
            "A point-in-time screenshot of one system's business impact analysis settings, captured during the walkthrough",
            "The The risk/impact assessment captured per change (affected services, users, downtime, dependencies, security impact), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the business impact analysis control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's business impact analysis capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Business impact analysis\"?",
          "options": [
            "From ITSM change-risk fields + assessment and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how business impact analysis works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ITSM change-risk fields + assessment) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Business impact analysis\"?",
          "options": [
            "The external audit firm, since it is the party examining the business impact analysis control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the business impact analysis data is shared, so the accountability sits with no one in particular",
            "Change management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Business impact analysis\", which part stays with the human auditor?",
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
          "id": "crc-07-q7",
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
          "id": "crc-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Business impact analysis\", which of these is a realistic reportable finding?",
          "options": [
            "Most changes carry no real impact assessment and default to 'low risk', so a change to a shared authentication service was treated as standard and deployed at peak — taking down every dependent app.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Most changes carry no real impact assessment and default to 'low risk', so a change to a shared authentication service was treated as standard and deployed at peak — taking down every dependent app. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-07-q9",
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
          "id": "crc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Business impact analysis\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind business impact analysis, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-08",
    "order": 8,
    "title": "Version control",
    "subtitle": "Agentic technical & privacy audit of the version control control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Version control\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify changes are version-controlled and traceable from deployed state to source. PASS: production configuration/code/IaC is managed in version control (not hand-edited on the box); every deployed version traces to a source commit/tag; change artifacts are versioned; and out-of-band direct changes are prevented or detected. Exceptions: production config edited directly outside version control, deployed versions with no traceable source, unversioned scripts/configs, and drift from the version-controlled source.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (Version control (Git) + IaC; The deployment pipeline (version → deploy traceability); Drift detection) as tools — e.g. `confirm production config/IaC lives in version control (not hand-edite`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config)",
        "Version control of change artifacts (scripts, configs, release packages) + their provenance",
        "The link between a deployed version and its source commit/tag (traceability)",
        "Untracked / out-of-band production changes (config edited directly, not via version control)"
      ],
      "system": [
        "Version control (Git) + IaC",
        "The deployment pipeline (version → deploy traceability)",
        "Drift detection"
      ],
      "dataOwner": [
        "Engineering / platform",
        "Change / release management",
        "Configuration management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-08-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Version control",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Version control\" as a repeatable agentic workflow: pull the real evidence (Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Version control\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me evidence that config/code/IaC for in-scope systems is under version control (no untracked production config), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Version control (Git) + IaC, The deployment pipeline (version → deploy traceability), Drift detection — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm production config/IaC lives in version control (not hand-edited)` — read-only, against the systems of record.",
        "The test itself is specific. Verify changes are version-controlled and traceable from deployed state to source. PASS: production configuration/code/IaC is managed in version control (not hand-edited on the box); every deployed version traces to a source commit/tag; change artifacts are versioned; and out-of-band direct changes are prevented or detected. Exceptions: production config edited directly outside version control, deployed versions with no traceable source, unversioned scripts/configs, and drift from the version-controlled source. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_version_control_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Version control (Git) + IaC and The deployment pipeline (version → deploy traceability) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_version_control_mcp.py` to expose it to your agent — or `python 08_version_control_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Version control (Git) + IaC · The deployment pipeline (version → deploy traceability)",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Version control\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm production config/IaC lives in version control (not hand-edited)\ntrace a deployed version back to its source commit/tag\ndetect out-of-band changes (running config vs the version-controlled source)\nare the change scripts/configs themselves versioned?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config).",
        "The test: Verify changes are version-controlled and traceable from deployed state to source.",
        "Reconcile the systems of record (Version control (Git) + IaC, The deployment pipeline (version → deploy traceability), Drift detection) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Operators edit production configs directly on the servers outside any version control, so the deployed state can't be traced to a source and drifts from the (stale) IaC."
      ],
      "references": [
        {
          "title": "NIST SP 800-128",
          "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
        },
        {
          "title": "NIST SSDF (SP 800-218)",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_version_control_mcp.py",
          "url": "/audit-code/change-release/08_version_control_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Version control\" (evidence that config/code/iac for in-scope systems is under version control (no untracked production config)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Version control\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify changes are version-controlled and traceable from deployed state to source. PASS: production configuration/code/IaC is managed in version control (not hand-edited on the box); every deployed version traces to a source commit/tag; change artifacts are versioned; and out-of-band direct changes are prevented or detected. Exceptions: production config edited directly outside version control, deployed versions with no traceable source, unversioned scripts/configs, and drift from the version-controlled source. The evidence — Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Version control (Git) + IaC APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Version control (Git) + IaC gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Version control (Git) + IaC; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Version control\" Audit Evidence\n\nThe test:\nVerify changes are version-controlled and traceable from deployed state to source. PASS: production configuration/code/IaC is managed in version control (not hand-edited on the box); every deployed version traces to a source commit/tag; change artifacts are versioned; and out-of-band direct changes are prevented or detected. Exceptions: production config edited directly outside version control, deployed versions with no traceable source, unversioned scripts/configs, and drift from the version-controlled source.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Version control\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Version control\" control must cover\n# fragment: version_control_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "version_control_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Version control\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the version control control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the version control control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for version control against comparable organisations in the sector",
            "Obtain evidence that the version control control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Version control\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Version control\" control?",
          "options": [
            "A point-in-time screenshot of one system's version control settings, captured during the walkthrough",
            "The Evidence that config/code/IaC for in-scope systems is under version control (no untracked production config), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the version control control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's version control capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Version control\"?",
          "options": [
            "From Version control (Git) + IaC and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how version control works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Version control (Git) + IaC) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Version control\"?",
          "options": [
            "The external audit firm, since it is the party examining the version control control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the version control data is shared, so the accountability sits with no one in particular",
            "Engineering / platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Engineering / platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Version control\", which part stays with the human auditor?",
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
          "id": "crc-08-q7",
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
          "id": "crc-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Version control\", which of these is a realistic reportable finding?",
          "options": [
            "Operators edit production configs directly on the servers outside any version control, so the deployed state can't be traced to a source and drifts from the (stale) IaC.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Operators edit production configs directly on the servers outside any version control, so the deployed state can't be traced to a source and drifts from the (stale) IaC. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-08-q9",
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
          "id": "crc-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Version control\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind version control, so there is no overlap",
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
    "epochId": "change-release",
    "id": "crc-09",
    "order": 9,
    "title": "Roles and responsibilities",
    "subtitle": "Agentic technical & privacy audit of the roles and responsibilities control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Roles and responsibilities\" control for Change, Release & Configuration Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify change-process roles are defined, separated, and staffed. PASS: a RACI defines requester / approver / implementer / CAB / change-manager roles; the roles enforce SoD (no single person holds incompatible roles); people in the roles are trained; and accountability is clear when a change fails. Exceptions: undefined/ambiguous roles, one person holding incompatible roles (request + approve + implement), untrained role-holders, and no clear accountability for failed changes.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Change, Release & Configuration Management systems of record (The change-management RACI / process docs; IGA / access (who can do what in the ITSM); Training records) as tools — e.g. `the change RACI: are requester/approver/implementer/CAB roles defined `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager)",
        "Evidence the roles map to actual people with the right access (no one holding incompatible roles)",
        "Training/awareness records for change-process roles",
        "The accountability trail — who is accountable when a change fails"
      ],
      "system": [
        "The change-management RACI / process docs",
        "IGA / access (who can do what in the ITSM)",
        "Training records"
      ],
      "dataOwner": [
        "Change management (owns the process)",
        "IT leadership",
        "HR / training"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Change, Release & Configuration Management controls."
      }
    },
    "badge": {
      "id": "crc-09-badge",
      "name": "Change, Release & Configuration Management Auditor",
      "emoji": "🔁"
    },
    "wonder": {
      "name": "Roles and responsibilities",
      "location": "Change, Release & Configuration Management",
      "era": "Present Day",
      "emoji": "🔁"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Roles and responsibilities\" as a repeatable agentic workflow: pull the real evidence (The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager)) with read-only agents, run the test against policy, and issue a defensible opinion on the Change, Release & Configuration Management control.",
      "year": 2025,
      "overview": [
        "The \"Roles and responsibilities\" sub-process is one of the controls an auditor must verify for Change, Release & Configuration Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The change-management RACI / process docs, IGA / access (who can do what in the ITSM), Training records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the change RACI: are requester/approver/implementer/CAB roles defined + separate` — read-only, against the systems of record.",
        "The test itself is specific. Verify change-process roles are defined, separated, and staffed. PASS: a RACI defines requester / approver / implementer / CAB / change-manager roles; the roles enforce SoD (no single person holds incompatible roles); people in the roles are trained; and accountability is clear when a change fails. Exceptions: undefined/ambiguous roles, one person holding incompatible roles (request + approve + implement), untrained role-holders, and no clear accountability for failed changes. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_roles_and_responsibilities_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The change-management RACI / process docs and IGA / access (who can do what in the ITSM) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_roles_and_responsibilities_mcp.py` to expose it to your agent — or `python 09_roles_and_responsibilities_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "An unapproved change takes prod down",
        "when": "Recurring",
        "where": "Production change pipelines",
        "impact": "A change made without review, testing, or a backout plan causes outage or opens a security gap that no one expected.",
        "body": [
          "Many outages and exposures trace to a change that skipped approval, peer review, or a tested rollback — emergency changes are the usual offenders.",
          "Auditors verify approvals and SoD, emergency-change handling, release/backout planning, baseline enforcement, and post-implementation review."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Change, Release & Configuration Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The change-management RACI / process docs · IGA / access (who can do what in the ITSM)",
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
          "year": 2024,
          "event": "A faulty content update triggers a mass outage — change/release rigor in focus",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "Major config-push outages reinforce staged rollout + backout requirements"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Roles and responsibilities\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the change RACI: are requester/approver/implementer/CAB roles defined + separated?\nmap roles to people + their ITSM permissions (anyone hold incompatible roles?)\ntraining/awareness records for change-process roles\nfor a failed change, is accountability clear?"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager).",
        "The test: Verify change-process roles are defined, separated, and staffed.",
        "Reconcile the systems of record (The change-management RACI / process docs, IGA / access (who can do what in the ITSM), Training records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no documented RACI for changes; in practice a handful of engineers request, approve, and implement their own changes (no role separation), and no one is clearly accountable when a change causes an outage."
      ],
      "references": [
        {
          "title": "ITIL 4 — Change Enablement",
          "url": "https://www.axelos.com/certifications/itil-service-management"
        },
        {
          "title": "NIST SP 800-53 CM / PS families",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_roles_and_responsibilities_mcp.py",
          "url": "/audit-code/change-release/09_roles_and_responsibilities_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Change, Release & Configuration Management evidence for \"Roles and responsibilities\" (the raci / documented roles for the change process (requester, approver, implementer, cab, change manager)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Roles and responsibilities\" control for Change, Release & Configuration Management at AcmeCorp. THE TEST: Verify change-process roles are defined, separated, and staffed. PASS: a RACI defines requester / approver / implementer / CAB / change-manager roles; the roles enforce SoD (no single person holds incompatible roles); people in the roles are trained; and accountability is clear when a change fails. Exceptions: undefined/ambiguous roles, one person holding incompatible roles (request + approve + implement), untrained role-holders, and no clear accountability for failed changes. The evidence — The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The change-management RACI / process docs APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The change-management RACI / process docs gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The change-management RACI / process docs; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Change, Release & Configuration Management: \"Roles and responsibilities\" Audit Evidence\n\nThe test:\nVerify change-process roles are defined, separated, and staffed. PASS: a RACI defines requester / approver / implementer / CAB / change-manager roles; the roles enforce SoD (no single person holds incompatible roles); people in the roles are trained; and accountability is clear when a change fails. Exceptions: undefined/ambiguous roles, one person holding incompatible roles (request + approve + implement), untrained role-holders, and no clear accountability for failed changes.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- change-release_inventory.json   (in-scope items — The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager))\n- change-release_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Roles and responsibilities\",\n  \"domain\": \"Change, Release & Configuration Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{crc_",
        "/evidence/change-release_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Change Advisory Board / IT Ops\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Roles and responsibilities\" control must cover\n# fragment: roles_responsibilities_",
        "/evidence/change-release_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "change-release_inventory.json",
            "isDir": false
          },
          {
            "name": "change-release_state.json",
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
          "value": "FLAG{crc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/change-release_inventory.json",
          "value": "roles_responsibilities_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/change-release_state.json",
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
          "id": "crc-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Roles and responsibilities\" sub-process of Change, Release & Configuration Management?",
          "options": [
            "Deploy and operate the roles and responsibilities control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the roles and responsibilities control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for roles and responsibilities against comparable organisations in the sector",
            "Obtain evidence that the roles and responsibilities control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "crc-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Roles and responsibilities\" matter to the broader Change, Release & Configuration Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Change, Release & Configuration Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Change, Release & Configuration Management estate",
            "It is a control other Change, Release & Configuration Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Change, Release & Configuration Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "crc-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Roles and responsibilities\" control?",
          "options": [
            "A point-in-time screenshot of one system's roles and responsibilities settings, captured during the walkthrough",
            "The The RACI / documented roles for the change process (requester, approver, implementer, CAB, change manager), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the roles and responsibilities control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's roles and responsibilities capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "crc-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Roles and responsibilities\"?",
          "options": [
            "From The change-management RACI / process docs and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how roles and responsibilities works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The change-management RACI / process docs) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "crc-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Roles and responsibilities\"?",
          "options": [
            "The external audit firm, since it is the party examining the roles and responsibilities control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the roles and responsibilities data is shared, so the accountability sits with no one in particular",
            "Change management (owns the process), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Change management (owns the process) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "crc-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Roles and responsibilities\", which part stays with the human auditor?",
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
          "id": "crc-09-q7",
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
          "id": "crc-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Roles and responsibilities\", which of these is a realistic reportable finding?",
          "options": [
            "There's no documented RACI for changes; in practice a handful of engineers request, approve, and implement their own changes (no role separation), and no one is clearly accountable when a change causes an outage.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no documented RACI for changes; in practice a handful of engineers request, approve, and implement their own changes (no role separation), and no one is clearly accountable when a change causes an outage. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "crc-09-q9",
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
          "id": "crc-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Roles and responsibilities\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind roles and responsibilities, so there is no overlap",
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
