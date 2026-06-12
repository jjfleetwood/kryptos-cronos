import type { EpochConfig, StageConfig } from "../types";

export const incidentMgmtEpoch: EpochConfig = {
  "id": "incident-mgmt",
  "name": "Incident Management",
  "subtitle": "Agentic technical & privacy audit — Incident Management",
  "description": "Audit Incident Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🚨",
  "color": "Red",
  "unlocked": true
};

export const incidentMgmtStages: StageConfig[] = [
  {
    "epochId": "incident-mgmt",
    "id": "inc-01",
    "order": 1,
    "title": "IR plan, playbooks, tabletop",
    "subtitle": "Agentic technical & privacy audit of the ir plan, playbooks, tabletop control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"IR plan, playbooks, tabletop\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org has a current, tested IR capability. PASS: a current IR plan defines roles, a severity matrix, comms, and legal/regulatory triggers; scenario playbooks exist for the org's top threats; tabletop/IR exercises run on cadence with tracked findings; and the plan is updated from exercises + real incidents. Exceptions: no/stale IR plan, no scenario playbooks, no tabletop exercises (or done once), and exercise findings never actioned.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (The IR plan + playbook repository; Tabletop / exercise records; SOAR (where playbooks are codified)) as tools — e.g. `IR plan: roles, severity matrix, comms tree, regulatory triggers — cur`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency",
        "The library of incident playbooks per scenario (ransomware, BEC, data breach, DDoS, insider, cloud compromise)",
        "Tabletop / IR-exercise records (date, scenario, participants, findings, action items)",
        "Evidence the plan + playbooks are tested + updated (not shelfware)"
      ],
      "system": [
        "The IR plan + playbook repository",
        "Tabletop / exercise records",
        "SOAR (where playbooks are codified)"
      ],
      "dataOwner": [
        "Security operations / CSIRT (owns IR)",
        "IT, Legal, Comms, Exec (plan participants)",
        "Risk"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-01-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "IR plan, playbooks, tabletop",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"IR plan, playbooks, tabletop\" as a repeatable agentic workflow: pull the real evidence (The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"IR plan, playbooks, tabletop\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The IR plan + playbook repository, Tabletop / exercise records, SOAR (where playbooks are codified) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `IR plan: roles, severity matrix, comms tree, regulatory triggers — current + app` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org has a current, tested IR capability. PASS: a current IR plan defines roles, a severity matrix, comms, and legal/regulatory triggers; scenario playbooks exist for the org's top threats; tabletop/IR exercises run on cadence with tracked findings; and the plan is updated from exercises + real incidents. Exceptions: no/stale IR plan, no scenario playbooks, no tabletop exercises (or done once), and exercise findings never actioned. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_ir_plan_playbooks_tabletop_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The IR plan + playbook repository and Tabletop / exercise records (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_ir_plan_playbooks_tabletop_mcp.py` to expose it to your agent — or `python 01_ir_plan_playbooks_tabletop_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The IR plan + playbook repository · Tabletop / exercise records",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"IR plan, playbooks, tabletop\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IR plan: roles, severity matrix, comms tree, regulatory triggers — current + approved?\nplaybook coverage for the org's top scenarios (ransomware / BEC / breach / DDoS / insider / cloud)\ntabletop / IR-exercise records: cadence, scenarios, findings, action-item closure\nevidence the plan is updated from exercises + real incidents"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency.",
        "The test: Verify the org has a current, tested IR capability.",
        "Reconcile the systems of record (The IR plan + playbook repository, Tabletop / exercise records, SOAR (where playbooks are codified)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The IR plan is three years old, names people who have left, has no ransomware or cloud-compromise playbook, and no tabletop has been run — so the first real test would be the incident itself."
      ],
      "references": [
        {
          "title": "NIST SP 800-61 Incident Handling",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "ISO/IEC 27035",
          "url": "https://www.iso.org/standard/78973.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_ir_plan_playbooks_tabletop_mcp.py",
          "url": "/audit-code/incident-mgmt/01_ir_plan_playbooks_tabletop_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"IR plan, playbooks, tabletop\" (the incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"IR plan, playbooks, tabletop\" control for Incident Management at AcmeCorp. THE TEST: Verify the org has a current, tested IR capability. PASS: a current IR plan defines roles, a severity matrix, comms, and legal/regulatory triggers; scenario playbooks exist for the org's top threats; tabletop/IR exercises run on cadence with tracked findings; and the plan is updated from exercises + real incidents. Exceptions: no/stale IR plan, no scenario playbooks, no tabletop exercises (or done once), and exercise findings never actioned. The evidence — The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The IR plan + playbook repository APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The IR plan + playbook repository gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The IR plan + playbook repository; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"IR plan, playbooks, tabletop\" Audit Evidence\n\nThe test:\nVerify the org has a current, tested IR capability. PASS: a current IR plan defines roles, a severity matrix, comms, and legal/regulatory triggers; scenario playbooks exist for the org's top threats; tabletop/IR exercises run on cadence with tracked findings; and the plan is updated from exercises + real incidents. Exceptions: no/stale IR plan, no scenario playbooks, no tabletop exercises (or done once), and exercise findings never actioned.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency)\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"IR plan, playbooks, tabletop\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"IR plan, playbooks, tabletop\" control must cover\n# fragment: ir_plan_playbooks_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "ir_plan_playbooks_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"IR plan, playbooks, tabletop\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the ir plan, playbooks, tabletop control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the ir plan, playbooks, tabletop control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for ir plan, playbooks, tabletop against comparable organisations in the sector",
            "Obtain evidence that the ir plan, playbooks, tabletop control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"IR plan, playbooks, tabletop\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"IR plan, playbooks, tabletop\" control?",
          "options": [
            "A point-in-time screenshot of one system's ir plan, playbooks, tabletop settings, captured during the walkthrough",
            "The The incident-response plan (roles, severity matrix, comms, legal/regulatory triggers) + its currency, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the ir plan, playbooks, tabletop control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's ir plan, playbooks, tabletop capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"IR plan, playbooks, tabletop\"?",
          "options": [
            "From The IR plan + playbook repository and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how ir plan, playbooks, tabletop works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The IR plan + playbook repository) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"IR plan, playbooks, tabletop\"?",
          "options": [
            "The external audit firm, since it is the party examining the ir plan, playbooks, tabletop control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the ir plan, playbooks, tabletop data is shared, so the accountability sits with no one in particular",
            "Security operations / CSIRT (owns IR), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT (owns IR) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"IR plan, playbooks, tabletop\", which part stays with the human auditor?",
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
          "id": "inc-01-q7",
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
          "id": "inc-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"IR plan, playbooks, tabletop\", which of these is a realistic reportable finding?",
          "options": [
            "The IR plan is three years old, names people who have left, has no ransomware or cloud-compromise playbook, and no tabletop has been run — so the first real test would be the incident itself.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The IR plan is three years old, names people who have left, has no ransomware or cloud-compromise playbook, and no tabletop has been run — so the first real test would be the incident itself. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-01-q9",
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
          "id": "inc-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"IR plan, playbooks, tabletop\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind ir plan, playbooks, tabletop, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-02",
    "order": 2,
    "title": "Incident intake and triage",
    "subtitle": "Agentic technical & privacy audit of the incident intake and triage control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident intake and triage\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify potential incidents are reliably captured, triaged, and classified. PASS: all intake channels (SIEM/EDR alerts, user reports, vendor/threat-intel notices) route to a monitored queue with a triage SLA; incidents are classified by a severity matrix; response SLAs are met; and there's no large backlog of un-triaged alerts. Exceptions: alerts into an unmonitored mailbox, no triage SLA or severity criteria, a large un-triaged backlog, and no metrics on triage performance.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (SIEM / SOAR + case management (ServiceNow SecOps / TheHive); Intake channels (alert pipeline, abuse@ / report line); Triage metrics dashboard) as tools — e.g. `map intake channels → the monitored triage queue (alerts, user reports`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team",
        "The triage process + severity-classification criteria + SLAs (time-to-triage, time-to-respond by severity)",
        "Triage metrics (alert volume, time-to-triage, true/false-positive, escalated)",
        "Evidence alerts are actually triaged (no unactioned backlog)"
      ],
      "system": [
        "SIEM / SOAR + case management (ServiceNow SecOps / TheHive)",
        "Intake channels (alert pipeline, abuse@ / report line)",
        "Triage metrics dashboard"
      ],
      "dataOwner": [
        "SOC / triage analysts",
        "Security operations",
        "Detection engineering"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-02-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident intake and triage",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident intake and triage\" as a repeatable agentic workflow: pull the real evidence (The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident intake and triage\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM / SOAR + case management (ServiceNow SecOps / TheHive), Intake channels (alert pipeline, abuse@ / report line), Triage metrics dashboard — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map intake channels → the monitored triage queue (alerts, user reports, vendor n` — read-only, against the systems of record.",
        "The test itself is specific. Verify potential incidents are reliably captured, triaged, and classified. PASS: all intake channels (SIEM/EDR alerts, user reports, vendor/threat-intel notices) route to a monitored queue with a triage SLA; incidents are classified by a severity matrix; response SLAs are met; and there's no large backlog of un-triaged alerts. Exceptions: alerts into an unmonitored mailbox, no triage SLA or severity criteria, a large un-triaged backlog, and no metrics on triage performance. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_incident_intake_and_triage_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM / SOAR + case management (ServiceNow SecOps / TheHive) and Intake channels (alert pipeline, abuse@ / report line) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_incident_intake_and_triage_mcp.py` to expose it to your agent — or `python 02_incident_intake_and_triage_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR + case management (ServiceNow SecOps / TheHive) · Intake channels (alert pipeline, abuse@ / report line)",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident intake and triage\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map intake channels → the monitored triage queue (alerts, user reports, vendor notices, threat intel)\ntriage SLA + severity-classification criteria + adherence\nmetrics: alert volume, time-to-triage, true/false-positive rate, escalation rate\nthe aged un-triaged backlog (alert-fatigue signal)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team.",
        "The test: Verify potential incidents are reliably captured, triaged, and classified.",
        "Reconcile the systems of record (SIEM / SOAR + case management (ServiceNow SecOps / TheHive), Intake channels (alert pipeline, abuse@ / report line), Triage metrics dashboard) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. User-reported phishing goes to a shared mailbox no one owns, SIEM alerts have a 5,000-item un-triaged backlog, and there's no severity classification — so a real intrusion sat in the queue for days."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_incident_intake_and_triage_mcp.py",
          "url": "/audit-code/incident-mgmt/02_incident_intake_and_triage_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"Incident intake and triage\" (the intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the ir team), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident intake and triage\" control for Incident Management at AcmeCorp. THE TEST: Verify potential incidents are reliably captured, triaged, and classified. PASS: all intake channels (SIEM/EDR alerts, user reports, vendor/threat-intel notices) route to a monitored queue with a triage SLA; incidents are classified by a severity matrix; response SLAs are met; and there's no large backlog of un-triaged alerts. Exceptions: alerts into an unmonitored mailbox, no triage SLA or severity criteria, a large un-triaged backlog, and no metrics on triage performance. The evidence — The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM / SOAR + case management (ServiceNow SecOps / TheHive) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM / SOAR + case management (ServiceNow SecOps / TheHive) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM / SOAR + case management (ServiceNow SecOps / TheHive); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident intake and triage\" Audit Evidence\n\nThe test:\nVerify potential incidents are reliably captured, triaged, and classified. PASS: all intake channels (SIEM/EDR alerts, user reports, vendor/threat-intel notices) route to a monitored queue with a triage SLA; incidents are classified by a severity matrix; response SLAs are met; and there's no large backlog of un-triaged alerts. Exceptions: alerts into an unmonitored mailbox, no triage SLA or severity criteria, a large un-triaged backlog, and no metrics on triage performance.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team)\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident intake and triage\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident intake and triage\" control must cover\n# fragment: incident_intake_triage_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_intake_triage_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident intake and triage\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the incident intake and triage control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident intake and triage control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident intake and triage against comparable organisations in the sector",
            "Obtain evidence that the incident intake and triage control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident intake and triage\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident intake and triage\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident intake and triage settings, captured during the walkthrough",
            "The The intake channels for potential incidents (alerts, user reports, vendor notices, threat intel) + how they reach the IR team, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident intake and triage control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident intake and triage capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident intake and triage\"?",
          "options": [
            "From SIEM / SOAR + case management (ServiceNow SecOps / TheHive) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident intake and triage works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SIEM / SOAR + case management (ServiceNow SecOps / TheHive)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident intake and triage\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident intake and triage control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident intake and triage data is shared, so the accountability sits with no one in particular",
            "SOC / triage analysts, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "SOC / triage analysts owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident intake and triage\", which part stays with the human auditor?",
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
          "id": "inc-02-q7",
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
          "id": "inc-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident intake and triage\", which of these is a realistic reportable finding?",
          "options": [
            "User-reported phishing goes to a shared mailbox no one owns, SIEM alerts have a 5,000-item un-triaged backlog, and there's no severity classification — so a real intrusion sat in the queue for days.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. User-reported phishing goes to a shared mailbox no one owns, SIEM alerts have a 5,000-item un-triaged backlog, and there's no severity classification — so a real intrusion sat in the queue for days. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-02-q9",
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
          "id": "inc-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident intake and triage\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident intake and triage, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-03",
    "order": 3,
    "title": "Evidence handling and forensics",
    "subtitle": "Agentic technical & privacy audit of the evidence handling and forensics control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Evidence handling and forensics\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org can collect + preserve evidence forensically. PASS: a documented evidence-handling procedure covers acquisition, chain of custody, integrity (hashing), and secure storage; forensic capability exists (disk/memory/EDR/cloud collection, remote where possible); telemetry retention is long enough to investigate a past intrusion; and chain of custody is maintained. Exceptions: no evidence-handling procedure, no forensic capability, retention too short to investigate (days not months), and broken chain of custody (evidence inadmissible).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (Forensic tooling (EnCase / FTK / Velociraptor / EDR collection); Evidence store + chain-of-custody system; SIEM / log retention) as tools — e.g. `evidence-handling procedure: acquisition, chain of custody, hashing, s`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage)",
        "The forensic toolkit + capability (disk/memory acquisition, EDR collection, cloud forensics)",
        "Log/telemetry retention sufficient for investigation (enough history to reconstruct an intrusion)",
        "Chain-of-custody records from past investigations"
      ],
      "system": [
        "Forensic tooling (EnCase / FTK / Velociraptor / EDR collection)",
        "Evidence store + chain-of-custody system",
        "SIEM / log retention"
      ],
      "dataOwner": [
        "DFIR / forensics",
        "Security operations",
        "Legal (admissibility)"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-03-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Evidence handling and forensics",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Evidence handling and forensics\" as a repeatable agentic workflow: pull the real evidence (The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage)) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Evidence handling and forensics\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Forensic tooling (EnCase / FTK / Velociraptor / EDR collection), Evidence store + chain-of-custody system, SIEM / log retention — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `evidence-handling procedure: acquisition, chain of custody, hashing, secure stor` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org can collect + preserve evidence forensically. PASS: a documented evidence-handling procedure covers acquisition, chain of custody, integrity (hashing), and secure storage; forensic capability exists (disk/memory/EDR/cloud collection, remote where possible); telemetry retention is long enough to investigate a past intrusion; and chain of custody is maintained. Exceptions: no evidence-handling procedure, no forensic capability, retention too short to investigate (days not months), and broken chain of custody (evidence inadmissible). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_evidence_handling_and_forensics_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Forensic tooling (EnCase / FTK / Velociraptor / EDR collection) and Evidence store + chain-of-custody system (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_evidence_handling_and_forensics_mcp.py` to expose it to your agent — or `python 03_evidence_handling_and_forensics_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Forensic tooling (EnCase / FTK / Velociraptor / EDR collection) · Evidence store + chain-of-custody system",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Evidence handling and forensics\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "evidence-handling procedure: acquisition, chain of custody, hashing, secure storage\nforensic capability: disk/memory/EDR/cloud acquisition (remote-capable?)\nlog/telemetry retention window vs investigation need (can you reconstruct a 3-month-old intrusion?)\nchain-of-custody records from prior cases (integrity maintained?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage).",
        "The test: Verify the org can collect + preserve evidence forensically.",
        "Reconcile the systems of record (Forensic tooling (EnCase / FTK / Velociraptor / EDR collection), Evidence store + chain-of-custody system, SIEM / log retention) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no documented evidence-handling procedure, EDR telemetry is retained 7 days (too short to investigate), and a prior case's evidence had a broken chain of custody — so it couldn't be used."
      ],
      "references": [
        {
          "title": "NIST SP 800-86 Forensic Techniques",
          "url": "https://csrc.nist.gov/pubs/sp/800/86/final"
        },
        {
          "title": "ISO/IEC 27037",
          "url": "https://www.iso.org/standard/44381.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_evidence_handling_and_forensics_mcp.py",
          "url": "/audit-code/incident-mgmt/03_evidence_handling_and_forensics_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"Evidence handling and forensics\" (the forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Evidence handling and forensics\" control for Incident Management at AcmeCorp. THE TEST: Verify the org can collect + preserve evidence forensically. PASS: a documented evidence-handling procedure covers acquisition, chain of custody, integrity (hashing), and secure storage; forensic capability exists (disk/memory/EDR/cloud collection, remote where possible); telemetry retention is long enough to investigate a past intrusion; and chain of custody is maintained. Exceptions: no evidence-handling procedure, no forensic capability, retention too short to investigate (days not months), and broken chain of custody (evidence inadmissible). The evidence — The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Forensic tooling (EnCase / FTK / Velociraptor / EDR collection) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Forensic tooling (EnCase / FTK / Velociraptor / EDR collection) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Forensic tooling (EnCase / FTK / Velociraptor / EDR collection); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Evidence handling and forensics\" Audit Evidence\n\nThe test:\nVerify the org can collect + preserve evidence forensically. PASS: a documented evidence-handling procedure covers acquisition, chain of custody, integrity (hashing), and secure storage; forensic capability exists (disk/memory/EDR/cloud collection, remote where possible); telemetry retention is long enough to investigate a past intrusion; and chain of custody is maintained. Exceptions: no evidence-handling procedure, no forensic capability, retention too short to investigate (days not months), and broken chain of custody (evidence inadmissible).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Evidence handling and forensics\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Evidence handling and forensics\" control must cover\n# fragment: evidence_handling_forensics_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "evidence_handling_forensics_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Evidence handling and forensics\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the evidence handling and forensics control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the evidence handling and forensics control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for evidence handling and forensics against comparable organisations in the sector",
            "Obtain evidence that the evidence handling and forensics control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Evidence handling and forensics\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Evidence handling and forensics\" control?",
          "options": [
            "A point-in-time screenshot of one system's evidence handling and forensics settings, captured during the walkthrough",
            "The The forensic-readiness + evidence-handling procedure (acquisition, chain of custody, integrity/hashing, storage), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the evidence handling and forensics control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's evidence handling and forensics capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Evidence handling and forensics\"?",
          "options": [
            "From Forensic tooling (EnCase / FTK / Velociraptor / EDR collection) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how evidence handling and forensics works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Forensic tooling (EnCase / FTK / Velociraptor / EDR collection)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Evidence handling and forensics\"?",
          "options": [
            "The external audit firm, since it is the party examining the evidence handling and forensics control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the evidence handling and forensics data is shared, so the accountability sits with no one in particular",
            "DFIR / forensics, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "DFIR / forensics owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Evidence handling and forensics\", which part stays with the human auditor?",
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
          "id": "inc-03-q7",
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
          "id": "inc-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Evidence handling and forensics\", which of these is a realistic reportable finding?",
          "options": [
            "There's no documented evidence-handling procedure, EDR telemetry is retained 7 days (too short to investigate), and a prior case's evidence had a broken chain of custody — so it couldn't be used.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no documented evidence-handling procedure, EDR telemetry is retained 7 days (too short to investigate), and a prior case's evidence had a broken chain of custody — so it couldn't be used. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-03-q9",
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
          "id": "inc-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Evidence handling and forensics\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind evidence handling and forensics, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-04",
    "order": 4,
    "title": "Post-incident reviews / corrective",
    "subtitle": "Agentic technical & privacy audit of the post-incident reviews / corrective control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-incident reviews / corrective\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify incidents drive durable improvement. PASS: significant incidents get a blameless PIR (timeline, root cause, gaps); corrective + preventive actions are assigned, tracked, and closed; lessons feed back into detections/controls/playbooks; and repeat incidents decline. Exceptions: no PIRs (or only for the biggest), PIRs with no corrective actions or actions never closed, no feedback into controls, and the same incident type recurring.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (PIR / postmortem records; CAPA / action tracker; Detection-engineering + control backlog) as tools — e.g. `PIR records for significant incidents: timeline, root cause, gaps (bla`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons)",
        "Corrective + preventive actions (CAPA) tracked to closure with owners + dates",
        "Evidence lessons feed back (detections added, controls fixed, playbooks updated, recurrence prevented)",
        "Metrics: MTTD/MTTR trend, repeat-incident rate"
      ],
      "system": [
        "PIR / postmortem records",
        "CAPA / action tracker",
        "Detection-engineering + control backlog",
        "Incident-metrics dashboard"
      ],
      "dataOwner": [
        "Security operations / CSIRT",
        "Detection engineering + control owners",
        "Leadership"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-04-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Post-incident reviews / corrective",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-incident reviews / corrective\" as a repeatable agentic workflow: pull the real evidence (The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons)) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-incident reviews / corrective\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PIR / postmortem records, CAPA / action tracker, Detection-engineering + control backlog — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `PIR records for significant incidents: timeline, root cause, gaps (blameless?)` — read-only, against the systems of record.",
        "The test itself is specific. Verify incidents drive durable improvement. PASS: significant incidents get a blameless PIR (timeline, root cause, gaps); corrective + preventive actions are assigned, tracked, and closed; lessons feed back into detections/controls/playbooks; and repeat incidents decline. Exceptions: no PIRs (or only for the biggest), PIRs with no corrective actions or actions never closed, no feedback into controls, and the same incident type recurring. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_post_incident_reviews_corrective_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PIR / postmortem records and CAPA / action tracker (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_post_incident_reviews_corrective_mcp.py` to expose it to your agent — or `python 04_post_incident_reviews_corrective_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PIR / postmortem records · CAPA / action tracker",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-incident reviews / corrective\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "PIR records for significant incidents: timeline, root cause, gaps (blameless?)\nCAPA: corrective + preventive actions assigned + closed (not just logged)\nfeedback evidence: detections added, controls fixed, playbooks updated\nMTTD/MTTR trend + repeat-incident rate"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons).",
        "The test: Verify incidents drive durable improvement.",
        "Reconcile the systems of record (PIR / postmortem records, CAPA / action tracker, Detection-engineering + control backlog) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. PIRs are done only for the largest incidents and produce no tracked corrective actions; the same phishing-to-ransomware path has recurred three times because the root-cause control gap was never fixed."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "Google SRE — Blameless Postmortems",
          "url": "https://sre.google/sre-book/postmortem-culture/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_post_incident_reviews_corrective_mcp.py",
          "url": "/audit-code/incident-mgmt/04_post_incident_reviews_corrective_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"Post-incident reviews / corrective\" (the post-incident review (pir) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-incident reviews / corrective\" control for Incident Management at AcmeCorp. THE TEST: Verify incidents drive durable improvement. PASS: significant incidents get a blameless PIR (timeline, root cause, gaps); corrective + preventive actions are assigned, tracked, and closed; lessons feed back into detections/controls/playbooks; and repeat incidents decline. Exceptions: no PIRs (or only for the biggest), PIRs with no corrective actions or actions never closed, no feedback into controls, and the same incident type recurring. The evidence — The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PIR / postmortem records APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PIR / postmortem records gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PIR / postmortem records; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Post-incident reviews / corrective\" Audit Evidence\n\nThe test:\nVerify incidents drive durable improvement. PASS: significant incidents get a blameless PIR (timeline, root cause, gaps); corrective + preventive actions are assigned, tracked, and closed; lessons feed back into detections/controls/playbooks; and repeat incidents decline. Exceptions: no PIRs (or only for the biggest), PIRs with no corrective actions or actions never closed, no feedback into controls, and the same incident type recurring.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-incident reviews / corrective\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-incident reviews / corrective\" control must cover\n# fragment: postincident_reviews_corrective_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "postincident_reviews_corrective_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-incident reviews / corrective\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the post-incident reviews / corrective control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-incident reviews / corrective control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-incident reviews / corrective against comparable organisations in the sector",
            "Obtain evidence that the post-incident reviews / corrective control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-incident reviews / corrective\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-incident reviews / corrective\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-incident reviews / corrective settings, captured during the walkthrough",
            "The The post-incident review (PIR) / blameless-postmortem records for significant incidents (timeline, root cause, what worked/failed, lessons), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-incident reviews / corrective control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-incident reviews / corrective capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-incident reviews / corrective\"?",
          "options": [
            "From PIR / postmortem records and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-incident reviews / corrective works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PIR / postmortem records) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-incident reviews / corrective\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-incident reviews / corrective control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-incident reviews / corrective data is shared, so the accountability sits with no one in particular",
            "Security operations / CSIRT, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / CSIRT owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-incident reviews / corrective\", which part stays with the human auditor?",
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
          "id": "inc-04-q7",
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
          "id": "inc-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-incident reviews / corrective\", which of these is a realistic reportable finding?",
          "options": [
            "PIRs are done only for the largest incidents and produce no tracked corrective actions; the same phishing-to-ransomware path has recurred three times because the root-cause control gap was never fixed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. PIRs are done only for the largest incidents and produce no tracked corrective actions; the same phishing-to-ransomware path has recurred three times because the root-cause control gap was never fixed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-04-q9",
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
          "id": "inc-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-incident reviews / corrective\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-incident reviews / corrective, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-05",
    "order": 5,
    "title": "External notifications / breach comms",
    "subtitle": "Agentic technical & privacy audit of the external notifications / breach comms control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"External notifications / breach comms\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org can notify the right parties within legal/contractual deadlines. PASS: a breach-notification process maps every obligation (GDPR 72h, state AG laws, HIPAA, SEC material-incident 4-day, customer-contract clauses) to a trigger + deadline; pre-approved templates + an approval chain exist; legal/PR/insurer/regulator contacts are ready; and past breaches were notified on time. Exceptions: no notification trigger map, missed statutory deadlines, no templates/approval chain (notification improvised under pressure), and unknown regulator/insurer contacts.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (The breach-notification playbook + obligation map; Legal / Privacy + Comms / PR; Cyber-insurance + regulator contacts) as tools — e.g. `the obligation map: each regulation/contract → trigger + deadline (GDP`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice)",
        "Pre-approved comms templates + the legal/PR/exec approval chain",
        "Evidence of timely notification in past breaches (regulator, affected individuals, customers, partners)",
        "The contact list for regulators + the cyber-insurance / outside-counsel notification path"
      ],
      "system": [
        "The breach-notification playbook + obligation map",
        "Legal / Privacy + Comms / PR",
        "Cyber-insurance + regulator contacts"
      ],
      "dataOwner": [
        "Legal / Privacy (owns notification)",
        "Comms / PR",
        "CISO + Exec",
        "Cyber insurance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-05-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "External notifications / breach comms",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"External notifications / breach comms\" as a repeatable agentic workflow: pull the real evidence (The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice)) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"External notifications / breach comms\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The breach-notification playbook + obligation map, Legal / Privacy + Comms / PR, Cyber-insurance + regulator contacts — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the obligation map: each regulation/contract → trigger + deadline (GDPR 72h, SEC` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org can notify the right parties within legal/contractual deadlines. PASS: a breach-notification process maps every obligation (GDPR 72h, state AG laws, HIPAA, SEC material-incident 4-day, customer-contract clauses) to a trigger + deadline; pre-approved templates + an approval chain exist; legal/PR/insurer/regulator contacts are ready; and past breaches were notified on time. Exceptions: no notification trigger map, missed statutory deadlines, no templates/approval chain (notification improvised under pressure), and unknown regulator/insurer contacts. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_external_notifications_breach_comms_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The breach-notification playbook + obligation map and Legal / Privacy + Comms / PR (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_external_notifications_breach_comms_mcp.py` to expose it to your agent — or `python 05_external_notifications_breach_comms_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The breach-notification playbook + obligation map · Legal / Privacy + Comms / PR",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"External notifications / breach comms\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the obligation map: each regulation/contract → trigger + deadline (GDPR 72h, SEC 4-day, state laws, HIPAA, customer clauses)\npre-approved comms templates + the legal/PR/exec approval chain\npast breaches: were regulators + individuals + customers notified within the deadline?\nregulator + cyber-insurer + outside-counsel contact readiness"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice).",
        "The test: Verify the org can notify the right parties within legal/contractual deadlines.",
        "Reconcile the systems of record (The breach-notification playbook + obligation map, Legal / Privacy + Comms / PR, Cyber-insurance + regulator contacts) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no breach-notification obligation map, so a past incident's GDPR 72-hour clock and a customer-contract notice were both missed; notifications were drafted from scratch under pressure with no legal-approved template."
      ],
      "references": [
        {
          "title": "GDPR Art. 33 / 34",
          "url": "https://gdpr-info.eu/art-33-gdpr/"
        },
        {
          "title": "SEC — Cybersecurity Incident Disclosure",
          "url": "https://www.sec.gov/news/press-release/2023-139"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_external_notifications_breach_comms_mcp.py",
          "url": "/audit-code/incident-mgmt/05_external_notifications_breach_comms_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"External notifications / breach comms\" (the breach-notification decision process + the regulatory/contractual trigger map (gdpr 72h, us state laws, hipaa, sec 4-day, contractual customer-notice)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"External notifications / breach comms\" control for Incident Management at AcmeCorp. THE TEST: Verify the org can notify the right parties within legal/contractual deadlines. PASS: a breach-notification process maps every obligation (GDPR 72h, state AG laws, HIPAA, SEC material-incident 4-day, customer-contract clauses) to a trigger + deadline; pre-approved templates + an approval chain exist; legal/PR/insurer/regulator contacts are ready; and past breaches were notified on time. Exceptions: no notification trigger map, missed statutory deadlines, no templates/approval chain (notification improvised under pressure), and unknown regulator/insurer contacts. The evidence — The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The breach-notification playbook + obligation map APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The breach-notification playbook + obligation map gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The breach-notification playbook + obligation map; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"External notifications / breach comms\" Audit Evidence\n\nThe test:\nVerify the org can notify the right parties within legal/contractual deadlines. PASS: a breach-notification process maps every obligation (GDPR 72h, state AG laws, HIPAA, SEC material-incident 4-day, customer-contract clauses) to a trigger + deadline; pre-approved templates + an approval chain exist; legal/PR/insurer/regulator contacts are ready; and past breaches were notified on time. Exceptions: no notification trigger map, missed statutory deadlines, no templates/approval chain (notification improvised under pressure), and unknown regulator/insurer contacts.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"External notifications / breach comms\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"External notifications / breach comms\" control must cover\n# fragment: external_notifications_breach_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "external_notifications_breach_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"External notifications / breach comms\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the external notifications / breach comms control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the external notifications / breach comms control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for external notifications / breach comms against comparable organisations in the sector",
            "Obtain evidence that the external notifications / breach comms control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"External notifications / breach comms\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"External notifications / breach comms\" control?",
          "options": [
            "A point-in-time screenshot of one system's external notifications / breach comms settings, captured during the walkthrough",
            "The The breach-notification decision process + the regulatory/contractual trigger map (GDPR 72h, US state laws, HIPAA, SEC 4-day, contractual customer-notice), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the external notifications / breach comms control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's external notifications / breach comms capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"External notifications / breach comms\"?",
          "options": [
            "From The breach-notification playbook + obligation map and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how external notifications / breach comms works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The breach-notification playbook + obligation map) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"External notifications / breach comms\"?",
          "options": [
            "The external audit firm, since it is the party examining the external notifications / breach comms control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the external notifications / breach comms data is shared, so the accountability sits with no one in particular",
            "Legal / Privacy (owns notification), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Legal / Privacy (owns notification) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"External notifications / breach comms\", which part stays with the human auditor?",
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
          "id": "inc-05-q7",
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
          "id": "inc-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"External notifications / breach comms\", which of these is a realistic reportable finding?",
          "options": [
            "There's no breach-notification obligation map, so a past incident's GDPR 72-hour clock and a customer-contract notice were both missed; notifications were drafted from scratch under pressure with no legal-approved template.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no breach-notification obligation map, so a past incident's GDPR 72-hour clock and a customer-contract notice were both missed; notifications were drafted from scratch under pressure with no legal-approved template. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-05-q9",
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
          "id": "inc-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"External notifications / breach comms\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind external notifications / breach comms, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-06",
    "order": 6,
    "title": "Incident logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the incident logging and monitoring control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 8,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident logging and monitoring\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify incidents are logged and the monitoring that detects them is effective. PASS: a complete incident register tracks every incident through to resolution; detection use-cases cover the org's key ATT&CK techniques across SIEM/EDR/NDR; coverage gaps are known + being closed; and detection efficacy is validated. Exceptions: incidents not consistently logged, large ATT&CK detection-coverage gaps, no validation of detection efficacy (alerts that would never fire), and unmanaged false-positive noise.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (SIEM / SOAR + the incident register / case management; EDR / NDR detection content; MITRE ATT&CK Navigator (coverage)) as tools — e.g. `incident register: complete, classified, tracked to resolution?`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The incident register (all incidents with classification, timeline, status, owner, resolution)",
        "The detection/monitoring coverage that feeds incidents (SIEM/EDR/NDR use-cases mapped to MITRE ATT&CK)",
        "Detection-coverage gaps (techniques with no detection) + the tuning/false-positive management",
        "Evidence the SOC's monitoring actually detects (validated efficacy, not assumed)"
      ],
      "system": [
        "SIEM / SOAR + the incident register / case management",
        "EDR / NDR detection content",
        "MITRE ATT&CK Navigator (coverage)"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "SOC",
        "Threat intel"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-06-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident logging and monitoring",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (The incident register (all incidents with classification, timeline, status, owner, resolution)) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident logging and monitoring\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the incident register (all incidents with classification, timeline, status, owner, resolution), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SIEM / SOAR + the incident register / case management, EDR / NDR detection content, MITRE ATT&CK Navigator (coverage) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `incident register: complete, classified, tracked to resolution?` — read-only, against the systems of record.",
        "The test itself is specific. Verify incidents are logged and the monitoring that detects them is effective. PASS: a complete incident register tracks every incident through to resolution; detection use-cases cover the org's key ATT&CK techniques across SIEM/EDR/NDR; coverage gaps are known + being closed; and detection efficacy is validated. Exceptions: incidents not consistently logged, large ATT&CK detection-coverage gaps, no validation of detection efficacy (alerts that would never fire), and unmanaged false-positive noise. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_incident_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SIEM / SOAR + the incident register / case management and EDR / NDR detection content (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_incident_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 06_incident_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SIEM / SOAR + the incident register / case management · EDR / NDR detection content",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "incident register: complete, classified, tracked to resolution?\ndetection-use-case coverage mapped to MITRE ATT&CK (SIEM/EDR/NDR)\ncoverage gaps: techniques with no detection + the plan to close\nvalidate detection efficacy (purple-team / Atomic Red Team — do the alerts actually fire?)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The incident register (all incidents with classification, timeline, status, owner, resolution).",
        "The test: Verify incidents are logged and the monitoring that detects them is effective.",
        "Reconcile the systems of record (SIEM / SOAR + the incident register / case management, EDR / NDR detection content, MITRE ATT&CK Navigator (coverage)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The incident register is incomplete (analysts track cases in email), ATT&CK coverage is a fraction of the relevant techniques, and a purple-team test showed credential-dumping and lateral movement produce no alert at all."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
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
          "name": "06_incident_logging_and_monitoring_mcp.py",
          "url": "/audit-code/incident-mgmt/06_incident_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"Incident logging and monitoring\" (the incident register (all incidents with classification, timeline, status, owner, resolution)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident logging and monitoring\" control for Incident Management at AcmeCorp. THE TEST: Verify incidents are logged and the monitoring that detects them is effective. PASS: a complete incident register tracks every incident through to resolution; detection use-cases cover the org's key ATT&CK techniques across SIEM/EDR/NDR; coverage gaps are known + being closed; and detection efficacy is validated. Exceptions: incidents not consistently logged, large ATT&CK detection-coverage gaps, no validation of detection efficacy (alerts that would never fire), and unmanaged false-positive noise. The evidence — The incident register (all incidents with classification, timeline, status, owner, resolution) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SIEM / SOAR + the incident register / case management APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SIEM / SOAR + the incident register / case management gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SIEM / SOAR + the incident register / case management; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident logging and monitoring\" Audit Evidence\n\nThe test:\nVerify incidents are logged and the monitoring that detects them is effective. PASS: a complete incident register tracks every incident through to resolution; detection use-cases cover the org's key ATT&CK techniques across SIEM/EDR/NDR; coverage gaps are known + being closed; and detection efficacy is validated. Exceptions: incidents not consistently logged, large ATT&CK detection-coverage gaps, no validation of detection efficacy (alerts that would never fire), and unmanaged false-positive noise.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The incident register (all incidents with classification, timeline, status, owner, resolution))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident logging and monitoring\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident logging and monitoring\" control must cover\n# fragment: incident_logging_monitoring_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident logging and monitoring\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the incident logging and monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident logging and monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident logging and monitoring against comparable organisations in the sector",
            "Obtain evidence that the incident logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident logging and monitoring\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident logging and monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident logging and monitoring settings, captured during the walkthrough",
            "The The incident register (all incidents with classification, timeline, status, owner, resolution), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident logging and monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident logging and monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident logging and monitoring\"?",
          "options": [
            "From SIEM / SOAR + the incident register / case management and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident logging and monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SIEM / SOAR + the incident register / case management) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident logging and monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident logging and monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident logging and monitoring data is shared, so the accountability sits with no one in particular",
            "Security operations / detection engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident logging and monitoring\", which part stays with the human auditor?",
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
          "id": "inc-06-q7",
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
          "id": "inc-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident logging and monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "The incident register is incomplete (analysts track cases in email), ATT&CK coverage is a fraction of the relevant techniques, and a purple-team test showed credential-dumping and lateral movement produce no alert at all.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The incident register is incomplete (analysts track cases in email), ATT&CK coverage is a fraction of the relevant techniques, and a purple-team test showed credential-dumping and lateral movement produce no alert at all. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-06-q9",
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
          "id": "inc-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident logging and monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident logging and monitoring, so there is no overlap",
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
    "epochId": "incident-mgmt",
    "id": "inc-07",
    "order": 7,
    "title": "Incident escalation",
    "subtitle": "Agentic technical & privacy audit of the incident escalation control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident escalation\" control for Incident Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify incidents escalate to the right level quickly. PASS: an escalation matrix maps severity to who is engaged within defined timeframes (through to exec/legal/board for major incidents); 24x7 on-call coverage exists + responds within SLA; external help (IR retainer, law enforcement, insurer) can be engaged via a defined path; and past incidents show timely, correct escalation. Exceptions: no escalation matrix, gaps in 24x7 coverage (incidents at night/weekend unhandled), major incidents that didn't reach leadership in time, and no path to external IR/legal/insurer.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Incident Management systems of record (The escalation matrix + on-call (PagerDuty / Opsgenie); IR retainer + cyber-insurance + law-enforcement contacts; Incident records (escalation timeline)) as tools — e.g. `the escalation matrix: severity → who + by when (SOC → IR lead → CISO `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board)",
        "On-call + 24x7 coverage evidence (someone is reachable + responds within SLA at all hours)",
        "Escalation evidence from past incidents (was the right level engaged in time?)",
        "The criteria + path to engage external help (IR retainer, law enforcement, cyber-insurer)"
      ],
      "system": [
        "The escalation matrix + on-call (PagerDuty / Opsgenie)",
        "IR retainer + cyber-insurance + law-enforcement contacts",
        "Incident records (escalation timeline)"
      ],
      "dataOwner": [
        "Security operations / IR lead",
        "CISO + leadership",
        "Legal + cyber insurance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Incident Management controls."
      }
    },
    "badge": {
      "id": "inc-07-badge",
      "name": "Incident Management Auditor",
      "emoji": "🚨"
    },
    "wonder": {
      "name": "Incident escalation",
      "location": "Incident Management",
      "era": "Present Day",
      "emoji": "🚨"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident escalation\" as a repeatable agentic workflow: pull the real evidence (The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board)) with read-only agents, run the test against policy, and issue a defensible opinion on the Incident Management control.",
      "year": 2025,
      "overview": [
        "The \"Incident escalation\" sub-process is one of the controls an auditor must verify for Incident Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The escalation matrix + on-call (PagerDuty / Opsgenie), IR retainer + cyber-insurance + law-enforcement contacts, Incident records (escalation timeline) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `the escalation matrix: severity → who + by when (SOC → IR lead → CISO → exec / l` — read-only, against the systems of record.",
        "The test itself is specific. Verify incidents escalate to the right level quickly. PASS: an escalation matrix maps severity to who is engaged within defined timeframes (through to exec/legal/board for major incidents); 24x7 on-call coverage exists + responds within SLA; external help (IR retainer, law enforcement, insurer) can be engaged via a defined path; and past incidents show timely, correct escalation. Exceptions: no escalation matrix, gaps in 24x7 coverage (incidents at night/weekend unhandled), major incidents that didn't reach leadership in time, and no path to external IR/legal/insurer. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_incident_escalation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The escalation matrix + on-call (PagerDuty / Opsgenie) and IR retainer + cyber-insurance + law-enforcement contacts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_incident_escalation_mcp.py` to expose it to your agent — or `python 07_incident_escalation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Detected late, contained slowly",
        "when": "Recurring",
        "where": "Security operations",
        "impact": "An incident without a tested plan, clean evidence handling, or clear escalation drifts — dwell time grows and breach-notification obligations are missed.",
        "body": [
          "The difference between an event and a disaster is the response: a rehearsed plan, fast triage, forensically sound evidence, and timely notification.",
          "Auditors verify IR plans/playbooks, intake and triage, evidence/forensics handling, escalation, post-incident review, and breach-communication readiness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Incident Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull The escalation matrix + on-call (PagerDuty / Opsgenie) · IR retainer + cyber-insurance + law-enforcement contacts",
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
          "event": "Equifax: delayed detection + notification compounds the breach",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC cyber-disclosure rules tighten incident-notification timelines"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident escalation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "the escalation matrix: severity → who + by when (SOC → IR lead → CISO → exec / legal / board)\n24x7 on-call coverage + response-SLA evidence (test an after-hours page)\npast incidents: was the right level engaged within the timeframe?\nthe path to engage an IR retainer / law enforcement / cyber-insurer"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board).",
        "The test: Verify incidents escalate to the right level quickly.",
        "Reconcile the systems of record (The escalation matrix + on-call (PagerDuty / Opsgenie), IR retainer + cyber-insurance + law-enforcement contacts, Incident records (escalation timeline)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. There's no escalation matrix and no after-hours on-call, so a weekend ransomware detonation wasn't escalated until Monday; leadership and the cyber-insurer were engaged days late, voiding part of the policy."
      ],
      "references": [
        {
          "title": "NIST SP 800-61",
          "url": "https://csrc.nist.gov/pubs/sp/800/61/r2/final"
        },
        {
          "title": "SANS Incident Handler's Handbook",
          "url": "https://www.sans.org/white-papers/33901/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_incident_escalation_mcp.py",
          "url": "/audit-code/incident-mgmt/07_incident_escalation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Incident Management evidence for \"Incident escalation\" (the escalation matrix (severity → who is engaged + within what timeframe: soc → ir lead → ciso → exec / legal / board)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident escalation\" control for Incident Management at AcmeCorp. THE TEST: Verify incidents escalate to the right level quickly. PASS: an escalation matrix maps severity to who is engaged within defined timeframes (through to exec/legal/board for major incidents); 24x7 on-call coverage exists + responds within SLA; external help (IR retainer, law enforcement, insurer) can be engaged via a defined path; and past incidents show timely, correct escalation. Exceptions: no escalation matrix, gaps in 24x7 coverage (incidents at night/weekend unhandled), major incidents that didn't reach leadership in time, and no path to external IR/legal/insurer. The evidence — The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The escalation matrix + on-call (PagerDuty / Opsgenie) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The escalation matrix + on-call (PagerDuty / Opsgenie) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The escalation matrix + on-call (PagerDuty / Opsgenie); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Incident Management: \"Incident escalation\" Audit Evidence\n\nThe test:\nVerify incidents escalate to the right level quickly. PASS: an escalation matrix maps severity to who is engaged within defined timeframes (through to exec/legal/board for major incidents); 24x7 on-call coverage exists + responds within SLA; external help (IR retainer, law enforcement, insurer) can be engaged via a defined path; and past incidents show timely, correct escalation. Exceptions: no escalation matrix, gaps in 24x7 coverage (incidents at night/weekend unhandled), major incidents that didn't reach leadership in time, and no path to external IR/legal/insurer.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- incident-mgmt_inventory.json   (in-scope items — The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board))\n- incident-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident escalation\",\n  \"domain\": \"Incident Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{inc_",
        "/evidence/incident-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Security operations / CSIRT\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident escalation\" control must cover\n# fragment: incident_escalation_",
        "/evidence/incident-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "incident-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "incident-mgmt_state.json",
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
          "value": "FLAG{inc_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/incident-mgmt_inventory.json",
          "value": "incident_escalation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/incident-mgmt_state.json",
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
          "id": "inc-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident escalation\" sub-process of Incident Management?",
          "options": [
            "Deploy and operate the incident escalation control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident escalation control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident escalation against comparable organisations in the sector",
            "Obtain evidence that the incident escalation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "inc-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident escalation\" matter to the broader Incident Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Incident Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Incident Management estate",
            "It is a control other Incident Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Incident Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "inc-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident escalation\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident escalation settings, captured during the walkthrough",
            "The The escalation matrix (severity → who is engaged + within what timeframe: SOC → IR lead → CISO → exec / legal / board), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident escalation control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident escalation capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "inc-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident escalation\"?",
          "options": [
            "From The escalation matrix + on-call (PagerDuty / Opsgenie) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident escalation works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. The escalation matrix + on-call (PagerDuty / Opsgenie)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "inc-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident escalation\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident escalation control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident escalation data is shared, so the accountability sits with no one in particular",
            "Security operations / IR lead, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / IR lead owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "inc-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident escalation\", which part stays with the human auditor?",
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
          "id": "inc-07-q7",
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
          "id": "inc-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident escalation\", which of these is a realistic reportable finding?",
          "options": [
            "There's no escalation matrix and no after-hours on-call, so a weekend ransomware detonation wasn't escalated until Monday; leadership and the cyber-insurer were engaged days late, voiding part of the policy.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. There's no escalation matrix and no after-hours on-call, so a weekend ransomware detonation wasn't escalated until Monday; leadership and the cyber-insurer were engaged days late, voiding part of the policy. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "inc-07-q9",
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
          "id": "inc-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident escalation\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident escalation, so there is no overlap",
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
