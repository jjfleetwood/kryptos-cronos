import type { EpochConfig, StageConfig } from "../types";

export const itGovernanceEpoch: EpochConfig = {
  "id": "it-governance",
  "name": "Information Technology (IT) Governance",
  "subtitle": "Agentic technical & privacy audit — Information Technology (IT) Governance",
  "description": "Audit Information Technology (IT) Governance end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "📋",
  "color": "Sky",
  "unlocked": true
};

export const itGovernanceStages: StageConfig[] = [
  {
    "epochId": "it-governance",
    "id": "gov-01",
    "order": 1,
    "title": "Policy and standard lifecycle",
    "subtitle": "Agentic technical & privacy audit of the policy and standard lifecycle control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Policy and standard lifecycle\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the policy framework is complete + maintained. PASS: a policy/standard hierarchy covers the security domains (mapped to ISO 27001/NIST CSF), each policy is owned, version-controlled, reviewed on cadence + currently approved, communicated + accessible to staff, with no major coverage gaps. Exceptions: missing policies for key domains, stale/expired policies (years past review), no owners or review cadence, and policies staff can't find or aren't aware of.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (Policy / standard repository; Policy lifecycle / review tracking; Framework mapping (ISO 27001 / NIST CSF)) as tools — e.g. `policy + standard framework (complete hierarchy mapped to ISO 27001 / `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF)",
        "The policy lifecycle (each policy owned, version-controlled, reviewed on a defined cadence, approved at the right level, and current — not years stale)",
        "Policy communication + accessibility (staff can find + are aware of applicable policies; acknowledgement where required)",
        "Coverage + gap assessment (no major domain lacks a policy/standard)"
      ],
      "system": [
        "Policy / standard repository",
        "Policy lifecycle / review tracking",
        "Framework mapping (ISO 27001 / NIST CSF)",
        "Acknowledgement records"
      ],
      "dataOwner": [
        "CISO / IT risk + policy owners",
        "Governance",
        "Internal audit"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-01-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Policy and standard lifecycle",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Policy and standard lifecycle\" as a repeatable agentic workflow: pull the real evidence (The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Policy and standard lifecycle\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Policy / standard repository, Policy lifecycle / review tracking, Framework mapping (ISO 27001 / NIST CSF) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `policy + standard framework (complete hierarchy mapped to ISO 27001 / NIST CSF)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the policy framework is complete + maintained. PASS: a policy/standard hierarchy covers the security domains (mapped to ISO 27001/NIST CSF), each policy is owned, version-controlled, reviewed on cadence + currently approved, communicated + accessible to staff, with no major coverage gaps. Exceptions: missing policies for key domains, stale/expired policies (years past review), no owners or review cadence, and policies staff can't find or aren't aware of. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_policy_and_standard_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Policy / standard repository and Policy lifecycle / review tracking (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_policy_and_standard_lifecycle_mcp.py` to expose it to your agent — or `python 01_policy_and_standard_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Policy / standard repository · Policy lifecycle / review tracking",
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
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Policy and standard lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "policy + standard framework (complete hierarchy mapped to ISO 27001 / NIST CSF)\npolicy lifecycle (owned, version-controlled, reviewed on cadence, approved, current)\npolicy communication + accessibility (staff aware; acknowledgement where required)\ncoverage + gap assessment (no major domain lacks a policy)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF).",
        "The test: Verify the policy framework is complete + maintained.",
        "Reconcile the systems of record (Policy / standard repository, Policy lifecycle / review tracking, Framework mapping (ISO 27001 / NIST CSF)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Half the security policies are years past their review date with no owner, several key domains have no policy at all, and staff have no accessible, current policy library — the framework exists on paper but isn't maintained or known."
      ],
      "references": [
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "NIST CSF 2.0 — Govern",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_policy_and_standard_lifecycle_mcp.py",
          "url": "/audit-code/it-governance/01_policy_and_standard_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Policy and standard lifecycle\" (the policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like iso 27001/nist csf)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Policy and standard lifecycle\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Verify the policy framework is complete + maintained. PASS: a policy/standard hierarchy covers the security domains (mapped to ISO 27001/NIST CSF), each policy is owned, version-controlled, reviewed on cadence + currently approved, communicated + accessible to staff, with no major coverage gaps. Exceptions: missing policies for key domains, stale/expired policies (years past review), no owners or review cadence, and policies staff can't find or aren't aware of. The evidence — The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Policy / standard repository APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Policy / standard repository gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Policy / standard repository; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Policy and standard lifecycle\" Audit Evidence\n\nThe test:\nVerify the policy framework is complete + maintained. PASS: a policy/standard hierarchy covers the security domains (mapped to ISO 27001/NIST CSF), each policy is owned, version-controlled, reviewed on cadence + currently approved, communicated + accessible to staff, with no major coverage gaps. Exceptions: missing policies for key domains, stale/expired policies (years past review), no owners or review cadence, and policies staff can't find or aren't aware of.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Policy and standard lifecycle\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Policy and standard lifecycle\" control must cover\n# fragment: policy_standard_lifecycle_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "policy_standard_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Policy and standard lifecycle\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the policy and standard lifecycle control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the policy and standard lifecycle control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for policy and standard lifecycle against comparable organisations in the sector",
            "Obtain evidence that the policy and standard lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Policy and standard lifecycle\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Policy and standard lifecycle\" control?",
          "options": [
            "A point-in-time screenshot of one system's policy and standard lifecycle settings, captured during the walkthrough",
            "The The policy + standard framework (a complete hierarchy — policies, standards, procedures — covering the security domains; mapped to a framework like ISO 27001/NIST CSF), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the policy and standard lifecycle control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's policy and standard lifecycle capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Policy and standard lifecycle\"?",
          "options": [
            "From Policy / standard repository and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how policy and standard lifecycle works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Policy / standard repository) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Policy and standard lifecycle\"?",
          "options": [
            "The external audit firm, since it is the party examining the policy and standard lifecycle control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the policy and standard lifecycle data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk + policy owners, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk + policy owners owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Policy and standard lifecycle\", which part stays with the human auditor?",
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
          "id": "gov-01-q7",
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
          "id": "gov-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Policy and standard lifecycle\", which of these is a realistic reportable finding?",
          "options": [
            "Half the security policies are years past their review date with no owner, several key domains have no policy at all, and staff have no accessible, current policy library — the framework exists on paper but isn't maintained or known.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Half the security policies are years past their review date with no owner, several key domains have no policy at all, and staff have no accessible, current policy library — the framework exists on paper but isn't maintained or known. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-01-q9",
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
          "id": "gov-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Policy and standard lifecycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind policy and standard lifecycle, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-02",
    "order": 2,
    "title": "Risk assessment and tracking",
    "subtitle": "Agentic technical & privacy audit of the risk assessment and tracking control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Risk assessment and tracking\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify risk is assessed + actively tracked. PASS: a risk process maintains a live register (risks assessed for likelihood/impact, owned, with treatment + target dates), treatments are tracked to closure with documented time-bound risk acceptances re-approved on expiry, risk drives control priorities, and risk is reported to governance. Exceptions: no risk register or a stale one, risks with no owner/treatment/date, open-ended risk acceptances never revisited, and a register that doesn't drive decisions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (Risk register / GRC; Risk treatment tracking; Risk-acceptance records) as tools — e.g. `risk management process + live risk register (assessed likelihood/impa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates)",
        "Risk treatment + tracking (each risk has an owner + a decision — mitigate/accept/transfer — and is tracked to its target; risk acceptances are documented + time-bound + re-approved)",
        "The link from risk to control + to the program (risks drive priorities; risk reduction is measurable)",
        "Risk reporting to governance/leadership (the register feeds decisions, not a static document)"
      ],
      "system": [
        "Risk register / GRC",
        "Risk treatment tracking",
        "Risk-acceptance records",
        "Risk reporting / dashboard"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Risk owners (business)",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-02-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Risk assessment and tracking",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Risk assessment and tracking\" as a repeatable agentic workflow: pull the real evidence (The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Risk assessment and tracking\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Risk register / GRC, Risk treatment tracking, Risk-acceptance records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `risk management process + live risk register (assessed likelihood/impact, owned,` — read-only, against the systems of record.",
        "The test itself is specific. Verify risk is assessed + actively tracked. PASS: a risk process maintains a live register (risks assessed for likelihood/impact, owned, with treatment + target dates), treatments are tracked to closure with documented time-bound risk acceptances re-approved on expiry, risk drives control priorities, and risk is reported to governance. Exceptions: no risk register or a stale one, risks with no owner/treatment/date, open-ended risk acceptances never revisited, and a register that doesn't drive decisions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_risk_assessment_and_tracking_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Risk register / GRC and Risk treatment tracking (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_risk_assessment_and_tracking_mcp.py` to expose it to your agent — or `python 02_risk_assessment_and_tracking_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Risk register / GRC · Risk treatment tracking",
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
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Risk assessment and tracking\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "risk management process + live risk register (assessed likelihood/impact, owned, treatment + target dates)\nrisk treatment + tracking (owner + decision, tracked to target; acceptances documented, time-bound, re-approved)\nlink risk → control → program (risk drives priorities; measurable reduction)\nrisk reporting to governance/leadership"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates).",
        "The test: Verify risk is assessed + actively tracked.",
        "Reconcile the systems of record (Risk register / GRC, Risk treatment tracking, Risk-acceptance records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The risk register hasn't been updated in over a year, half its risks have no owner or treatment date, and several 'accepted' risks were accepted once with no expiry or re-approval — risk is documented but not actually managed or tracked."
      ],
      "references": [
        {
          "title": "ISO/IEC 27005 — Risk Mgmt",
          "url": "https://www.iso.org/standard/80585.html"
        },
        {
          "title": "NIST RMF (SP 800-37)",
          "url": "https://csrc.nist.gov/projects/risk-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_risk_assessment_and_tracking_mcp.py",
          "url": "/audit-code/it-governance/02_risk_assessment_and_tracking_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Risk assessment and tracking\" (the risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Risk assessment and tracking\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Verify risk is assessed + actively tracked. PASS: a risk process maintains a live register (risks assessed for likelihood/impact, owned, with treatment + target dates), treatments are tracked to closure with documented time-bound risk acceptances re-approved on expiry, risk drives control priorities, and risk is reported to governance. Exceptions: no risk register or a stale one, risks with no owner/treatment/date, open-ended risk acceptances never revisited, and a register that doesn't drive decisions. The evidence — The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Risk register / GRC APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Risk register / GRC gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Risk register / GRC; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Risk assessment and tracking\" Audit Evidence\n\nThe test:\nVerify risk is assessed + actively tracked. PASS: a risk process maintains a live register (risks assessed for likelihood/impact, owned, with treatment + target dates), treatments are tracked to closure with documented time-bound risk acceptances re-approved on expiry, risk drives control priorities, and risk is reported to governance. Exceptions: no risk register or a stale one, risks with no owner/treatment/date, open-ended risk acceptances never revisited, and a register that doesn't drive decisions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Risk assessment and tracking\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Risk assessment and tracking\" control must cover\n# fragment: risk_assessment_tracking_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "risk_assessment_tracking_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Risk assessment and tracking\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the risk assessment and tracking control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the risk assessment and tracking control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for risk assessment and tracking against comparable organisations in the sector",
            "Obtain evidence that the risk assessment and tracking control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Risk assessment and tracking\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Risk assessment and tracking\" control?",
          "options": [
            "A point-in-time screenshot of one system's risk assessment and tracking settings, captured during the walkthrough",
            "The The risk management process + a live risk register (risks identified, assessed — likelihood/impact, owned, with treatment decisions and target dates), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the risk assessment and tracking control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's risk assessment and tracking capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Risk assessment and tracking\"?",
          "options": [
            "From Risk register / GRC and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how risk assessment and tracking works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Risk register / GRC) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Risk assessment and tracking\"?",
          "options": [
            "The external audit firm, since it is the party examining the risk assessment and tracking control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the risk assessment and tracking data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Risk assessment and tracking\", which part stays with the human auditor?",
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
          "id": "gov-02-q7",
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
          "id": "gov-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Risk assessment and tracking\", which of these is a realistic reportable finding?",
          "options": [
            "The risk register hasn't been updated in over a year, half its risks have no owner or treatment date, and several 'accepted' risks were accepted once with no expiry or re-approval — risk is documented but not actually managed or tracked.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The risk register hasn't been updated in over a year, half its risks have no owner or treatment date, and several 'accepted' risks were accepted once with no expiry or re-approval — risk is documented but not actually managed or tracked. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-02-q9",
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
          "id": "gov-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Risk assessment and tracking\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind risk assessment and tracking, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-03",
    "order": 3,
    "title": "Security metrics and reporting",
    "subtitle": "Agentic technical & privacy audit of the security metrics and reporting control",
    "category": "cybersecurity",
    "xp": 120,
    "easeScore": 8,
    "valueScore": 6,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security metrics and reporting\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify security is measured + reported meaningfully. PASS: a metrics/KPI/KRI program tracks decision-driving measures (patch SLA, phishing rate, MTTR, control coverage) with accurate sourcing, regular trend-and-risk reporting to leadership/board, and metrics that drive action when out of threshold. Exceptions: no security metrics or only vanity/activity counts, no leadership/board reporting, inaccurate/unsourced metrics, and metrics produced but never acted on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (Metrics / KRI dashboard; Board / leadership reporting; Metric data sources) as tools — e.g. `security metrics/KPIs + KRIs (decision-driving: patch SLA, phishing ra`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts)",
        "Reporting to leadership/board (regular security reporting that informs decisions + investment, with trends + risk context)",
        "Metric quality (metrics are accurate, sourced from real data, and tied to objectives/risk — not vanity numbers)",
        "Action from metrics (metrics outside threshold drive remediation; they're used, not just produced)"
      ],
      "system": [
        "Metrics / KRI dashboard",
        "Board / leadership reporting",
        "Metric data sources",
        "Threshold / action tracking"
      ],
      "dataOwner": [
        "CISO + security leadership",
        "Metric owners",
        "Executive / board"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 6/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-03-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Security metrics and reporting",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security metrics and reporting\" as a repeatable agentic workflow: pull the real evidence (The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Security metrics and reporting\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Metrics / KRI dashboard, Board / leadership reporting, Metric data sources — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `security metrics/KPIs + KRIs (decision-driving: patch SLA, phishing rate, MTTR, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify security is measured + reported meaningfully. PASS: a metrics/KPI/KRI program tracks decision-driving measures (patch SLA, phishing rate, MTTR, control coverage) with accurate sourcing, regular trend-and-risk reporting to leadership/board, and metrics that drive action when out of threshold. Exceptions: no security metrics or only vanity/activity counts, no leadership/board reporting, inaccurate/unsourced metrics, and metrics produced but never acted on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_security_metrics_and_reporting_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Metrics / KRI dashboard and Board / leadership reporting (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_security_metrics_and_reporting_mcp.py` to expose it to your agent — or `python 03_security_metrics_and_reporting_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Metrics / KRI dashboard · Board / leadership reporting",
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
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security metrics and reporting\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "security metrics/KPIs + KRIs (decision-driving: patch SLA, phishing rate, MTTR, control coverage)\nreporting to leadership/board (regular, trends + risk context, informs investment)\nmetric quality (accurate, real-data-sourced, tied to objectives/risk)\naction from metrics (out-of-threshold drives remediation)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts).",
        "The test: Verify security is measured + reported meaningfully.",
        "Reconcile the systems of record (Metrics / KRI dashboard, Board / leadership reporting, Metric data sources) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Security 'reporting' is a count of blocked emails and tickets closed — no patch-SLA, MTTR, or control-coverage metrics, nothing reaches the board, and the numbers that exist are vanity figures that never drive a decision or remediation."
      ],
      "references": [
        {
          "title": "NIST CSF 2.0",
          "url": "https://www.nist.gov/cyberframework"
        },
        {
          "title": "ISO/IEC 27004 — Measurement",
          "url": "https://www.iso.org/standard/64120.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_security_metrics_and_reporting_mcp.py",
          "url": "/audit-code/it-governance/03_security_metrics_and_reporting_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Security metrics and reporting\" (the security metrics/kpis + kris program (meaningful, decision-driving metrics — patch sla attainment, phishing-failure rate, incident mttr, control-coverage — not just activity counts)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security metrics and reporting\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Verify security is measured + reported meaningfully. PASS: a metrics/KPI/KRI program tracks decision-driving measures (patch SLA, phishing rate, MTTR, control coverage) with accurate sourcing, regular trend-and-risk reporting to leadership/board, and metrics that drive action when out of threshold. Exceptions: no security metrics or only vanity/activity counts, no leadership/board reporting, inaccurate/unsourced metrics, and metrics produced but never acted on. The evidence — The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Metrics / KRI dashboard APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Metrics / KRI dashboard gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Metrics / KRI dashboard; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Security metrics and reporting\" Audit Evidence\n\nThe test:\nVerify security is measured + reported meaningfully. PASS: a metrics/KPI/KRI program tracks decision-driving measures (patch SLA, phishing rate, MTTR, control coverage) with accurate sourcing, regular trend-and-risk reporting to leadership/board, and metrics that drive action when out of threshold. Exceptions: no security metrics or only vanity/activity counts, no leadership/board reporting, inaccurate/unsourced metrics, and metrics produced but never acted on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security metrics and reporting\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security metrics and reporting\" control must cover\n# fragment: security_metrics_reporting_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "security_metrics_reporting_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security metrics and reporting\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the security metrics and reporting control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security metrics and reporting control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security metrics and reporting against comparable organisations in the sector",
            "Obtain evidence that the security metrics and reporting control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security metrics and reporting\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security metrics and reporting\" control?",
          "options": [
            "A point-in-time screenshot of one system's security metrics and reporting settings, captured during the walkthrough",
            "The The security metrics/KPIs + KRIs program (meaningful, decision-driving metrics — patch SLA attainment, phishing-failure rate, incident MTTR, control-coverage — not just activity counts), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security metrics and reporting control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security metrics and reporting capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security metrics and reporting\"?",
          "options": [
            "From Metrics / KRI dashboard and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security metrics and reporting works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Metrics / KRI dashboard) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security metrics and reporting\"?",
          "options": [
            "The external audit firm, since it is the party examining the security metrics and reporting control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security metrics and reporting data is shared, so the accountability sits with no one in particular",
            "CISO + security leadership, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO + security leadership owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security metrics and reporting\", which part stays with the human auditor?",
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
          "id": "gov-03-q7",
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
          "id": "gov-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security metrics and reporting\", which of these is a realistic reportable finding?",
          "options": [
            "Security 'reporting' is a count of blocked emails and tickets closed — no patch-SLA, MTTR, or control-coverage metrics, nothing reaches the board, and the numbers that exist are vanity figures that never drive a decision or remediation.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Security 'reporting' is a count of blocked emails and tickets closed — no patch-SLA, MTTR, or control-coverage metrics, nothing reaches the board, and the numbers that exist are vanity figures that never drive a decision or remediation. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-03-q9",
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
          "id": "gov-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security metrics and reporting\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security metrics and reporting, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-04",
    "order": 4,
    "title": "Exception management",
    "subtitle": "Agentic technical & privacy audit of the exception management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Exception management\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify policy exceptions are governed. PASS: exceptions are formally requested, risk-assessed, approved at the right level, and time-bound; a register tracks all active exceptions (owner, justification, compensating controls, expiry); compensating controls are defined; and exceptions are reviewed/closed on expiry. Exceptions: informal/undocumented deviations, no exception register (unknown how many/what), permanent open-ended exceptions, and no compensating controls or expiry review.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (Exception / waiver workflow; Exception register; Compensating-control records) as tools — e.g. `exception/waiver process (requested, risk-assessed, approved at right `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent)",
        "The exception register (all active exceptions tracked with owner, justification, compensating controls, and expiry)",
        "Compensating controls for exceptions (a granted exception has documented compensating controls reducing the risk)",
        "Exception review + expiry (exceptions are revisited on expiry — renewed with re-justification or closed; not accumulating forever)"
      ],
      "system": [
        "Exception / waiver workflow",
        "Exception register",
        "Compensating-control records",
        "Expiry / review tracking"
      ],
      "dataOwner": [
        "CISO / IT risk",
        "Exception owners",
        "Risk approvers"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-04-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Exception management",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Exception management\" as a repeatable agentic workflow: pull the real evidence (The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Exception management\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Exception / waiver workflow, Exception register, Compensating-control records — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `exception/waiver process (requested, risk-assessed, approved at right authority,` — read-only, against the systems of record.",
        "The test itself is specific. Verify policy exceptions are governed. PASS: exceptions are formally requested, risk-assessed, approved at the right level, and time-bound; a register tracks all active exceptions (owner, justification, compensating controls, expiry); compensating controls are defined; and exceptions are reviewed/closed on expiry. Exceptions: informal/undocumented deviations, no exception register (unknown how many/what), permanent open-ended exceptions, and no compensating controls or expiry review. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_exception_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Exception / waiver workflow and Exception register (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_exception_management_mcp.py` to expose it to your agent — or `python 04_exception_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Exception / waiver workflow · Exception register",
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
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
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
          "code": "exception/waiver process (requested, risk-assessed, approved at right authority, time-bound)\nexception register (owner, justification, compensating controls, expiry)\ncompensating controls for each exception\nexception review + expiry (revisited; renewed with re-justification or closed)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent).",
        "The test: Verify policy exceptions are governed.",
        "Reconcile the systems of record (Exception / waiver workflow, Exception register, Compensating-control records) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Policy exceptions are granted informally over email with no register, no compensating controls, and no expiry — so dozens of unknown, permanent deviations have accumulated, each a quietly accepted risk no one tracks or revisits."
      ],
      "references": [
        {
          "title": "ISO/IEC 27001 — ISMS",
          "url": "https://www.iso.org/standard/27001"
        },
        {
          "title": "NIST RMF (SP 800-37)",
          "url": "https://csrc.nist.gov/projects/risk-management"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_exception_management_mcp.py",
          "url": "/audit-code/it-governance/04_exception_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Exception management\" (the exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Exception management\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Verify policy exceptions are governed. PASS: exceptions are formally requested, risk-assessed, approved at the right level, and time-bound; a register tracks all active exceptions (owner, justification, compensating controls, expiry); compensating controls are defined; and exceptions are reviewed/closed on expiry. Exceptions: informal/undocumented deviations, no exception register (unknown how many/what), permanent open-ended exceptions, and no compensating controls or expiry review. The evidence — The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Exception / waiver workflow APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Exception / waiver workflow gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Exception / waiver workflow; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Exception management\" Audit Evidence\n\nThe test:\nVerify policy exceptions are governed. PASS: exceptions are formally requested, risk-assessed, approved at the right level, and time-bound; a register tracks all active exceptions (owner, justification, compensating controls, expiry); compensating controls are defined; and exceptions are reviewed/closed on expiry. Exceptions: informal/undocumented deviations, no exception register (unknown how many/what), permanent open-ended exceptions, and no compensating controls or expiry review.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Exception management\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Exception management\" control must cover\n# fragment: exception_management_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "exception_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Exception management\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the exception management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the exception management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for exception management against comparable organisations in the sector",
            "Obtain evidence that the exception management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Exception management\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Exception management\" control?",
          "options": [
            "A point-in-time screenshot of one system's exception management settings, captured during the walkthrough",
            "The The exception/waiver process (deviations from policy/standards are formally requested, risk-assessed, approved at the right authority, and time-bound — not informal/permanent), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the exception management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's exception management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Exception management\"?",
          "options": [
            "From Exception / waiver workflow and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how exception management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Exception / waiver workflow) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Exception management\"?",
          "options": [
            "The external audit firm, since it is the party examining the exception management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the exception management data is shared, so the accountability sits with no one in particular",
            "CISO / IT risk, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "CISO / IT risk owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Exception management\", which part stays with the human auditor?",
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
          "id": "gov-04-q7",
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
          "id": "gov-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Exception management\", which of these is a realistic reportable finding?",
          "options": [
            "Policy exceptions are granted informally over email with no register, no compensating controls, and no expiry — so dozens of unknown, permanent deviations have accumulated, each a quietly accepted risk no one tracks or revisits.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Policy exceptions are granted informally over email with no register, no compensating controls, and no expiry — so dozens of unknown, permanent deviations have accumulated, each a quietly accepted risk no one tracks or revisits. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-04-q9",
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
          "id": "gov-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Exception management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind exception management, so there is no overlap",
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
    "epochId": "it-governance",
    "id": "gov-05",
    "order": 5,
    "title": "Security awareness program",
    "subtitle": "Agentic technical & privacy audit of the security awareness program control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Security awareness program\" control for Information Technology (IT) Governance is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify security awareness builds real resilience. PASS: a cadenced awareness/training program (new-hire + annual, completion-tracked) includes phishing simulation with metrics + follow-up, role-specific training (devs, admins, finance), and effectiveness is measured by behaviour (phishing-rate trend, reporting rate). Exceptions: no/ad-hoc awareness training, no phishing simulation or behaviour program, only generic training (no role-specific), and success measured only by completion %, not behaviour change.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Information Technology (IT) Governance systems of record (LMS / awareness platform; Phishing simulation tooling; Role-based training) as tools — e.g. `awareness + training program (role-based + general, cadenced, completi`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual)",
        "Phishing simulation + behaviour-change program (simulated phishing with metrics + targeted follow-up training; trending failure rate)",
        "Role-specific training (developers — secure coding; privileged/admin; finance — BEC/fraud) beyond generic awareness",
        "Effectiveness measurement (does the program change behaviour — phishing-rate trend, reporting rate — not just completion %)"
      ],
      "system": [
        "LMS / awareness platform",
        "Phishing simulation tooling",
        "Role-based training",
        "Effectiveness metrics"
      ],
      "dataOwner": [
        "Security awareness / CISO",
        "HR / L&D",
        "People managers"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Information Technology (IT) Governance controls."
      }
    },
    "badge": {
      "id": "gov-05-badge",
      "name": "Information Technology (IT) Governance Auditor",
      "emoji": "📋"
    },
    "wonder": {
      "name": "Security awareness program",
      "location": "Information Technology (IT) Governance",
      "era": "Present Day",
      "emoji": "📋"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Security awareness program\" as a repeatable agentic workflow: pull the real evidence (The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual)) with read-only agents, run the test against policy, and issue a defensible opinion on the Information Technology (IT) Governance control.",
      "year": 2025,
      "overview": [
        "The \"Security awareness program\" sub-process is one of the controls an auditor must verify for Information Technology (IT) Governance. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here LMS / awareness platform, Phishing simulation tooling, Role-based training — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `awareness + training program (role-based + general, cadenced, completion-tracked` — read-only, against the systems of record.",
        "The test itself is specific. Verify security awareness builds real resilience. PASS: a cadenced awareness/training program (new-hire + annual, completion-tracked) includes phishing simulation with metrics + follow-up, role-specific training (devs, admins, finance), and effectiveness is measured by behaviour (phishing-rate trend, reporting rate). Exceptions: no/ad-hoc awareness training, no phishing simulation or behaviour program, only generic training (no role-specific), and success measured only by completion %, not behaviour change. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_security_awareness_program_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from LMS / awareness platform and Phishing simulation tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_security_awareness_program_mcp.py` to expose it to your agent — or `python 05_security_awareness_program_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Risk accepted by no one, tracked by nobody",
        "when": "Recurring",
        "where": "Security governance programs",
        "impact": "Without policy lifecycle, a live risk register, and metrics, security decisions are invisible — and accountability evaporates when something fails.",
        "body": [
          "Governance gaps are quiet until an incident: stale policies, risks with no owner or expiry, exceptions that never close, and no metrics to show the program's state.",
          "Auditors verify policy/standard lifecycle, risk assessment and tracking, security metrics/reporting, exception management, and awareness."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Information Technology (IT) Governance scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull LMS / awareness platform · Phishing simulation tooling",
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
          "event": "NIST CSF 2.0 adds a Govern function — accountability as a control",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "SEC rules require governance + risk-management disclosure"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Security awareness program\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "awareness + training program (role-based + general, cadenced, completion-tracked, new-hire + annual)\nphishing simulation + behaviour-change (metrics + targeted follow-up; trending failure rate)\nrole-specific training (devs/secure coding, privileged/admin, finance/BEC)\neffectiveness measurement (behaviour change: phishing-rate + reporting trend, not just completion %)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual).",
        "The test: Verify security awareness builds real resilience.",
        "Reconcile the systems of record (LMS / awareness platform, Phishing simulation tooling, Role-based training) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Awareness is a once-a-year generic slideshow measured only by completion percentage; there's no phishing simulation, no role-specific training for developers or finance, and no measurement of whether anyone's behaviour — the actual goal — has changed."
      ],
      "references": [
        {
          "title": "NIST SP 800-50 — Awareness & Training",
          "url": "https://csrc.nist.gov/pubs/sp/800/50/final"
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
          "name": "05_security_awareness_program_mcp.py",
          "url": "/audit-code/it-governance/05_security_awareness_program_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Information Technology (IT) Governance evidence for \"Security awareness program\" (the security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Security awareness program\" control for Information Technology (IT) Governance at AcmeCorp. THE TEST: Verify security awareness builds real resilience. PASS: a cadenced awareness/training program (new-hire + annual, completion-tracked) includes phishing simulation with metrics + follow-up, role-specific training (devs, admins, finance), and effectiveness is measured by behaviour (phishing-rate trend, reporting rate). Exceptions: no/ad-hoc awareness training, no phishing simulation or behaviour program, only generic training (no role-specific), and success measured only by completion %, not behaviour change. The evidence — The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live LMS / awareness platform APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. LMS / awareness platform gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from LMS / awareness platform; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Information Technology (IT) Governance: \"Security awareness program\" Audit Evidence\n\nThe test:\nVerify security awareness builds real resilience. PASS: a cadenced awareness/training program (new-hire + annual, completion-tracked) includes phishing simulation with metrics + follow-up, role-specific training (devs, admins, finance), and effectiveness is measured by behaviour (phishing-rate trend, reporting rate). Exceptions: no/ad-hoc awareness training, no phishing simulation or behaviour program, only generic training (no role-specific), and success measured only by completion %, not behaviour change.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- it-governance_inventory.json   (in-scope items — The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual))\n- it-governance_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Security awareness program\",\n  \"domain\": \"Information Technology (IT) Governance\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{gov_",
        "/evidence/it-governance_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"CISO / IT risk\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Security awareness program\" control must cover\n# fragment: security_awareness_program_",
        "/evidence/it-governance_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "it-governance_inventory.json",
            "isDir": false
          },
          {
            "name": "it-governance_state.json",
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
          "value": "FLAG{gov_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/it-governance_inventory.json",
          "value": "security_awareness_program_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/it-governance_state.json",
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
          "id": "gov-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Security awareness program\" sub-process of Information Technology (IT) Governance?",
          "options": [
            "Deploy and operate the security awareness program control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the security awareness program control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for security awareness program against comparable organisations in the sector",
            "Obtain evidence that the security awareness program control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "gov-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Security awareness program\" matter to the broader Information Technology (IT) Governance posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Information Technology (IT) Governance",
            "It stops mattering once a firewall and endpoint agent are deployed across the Information Technology (IT) Governance estate",
            "It is a control other Information Technology (IT) Governance controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Information Technology (IT) Governance controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "gov-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Security awareness program\" control?",
          "options": [
            "A point-in-time screenshot of one system's security awareness program settings, captured during the walkthrough",
            "The The security awareness + training program (role-based + general training, delivered on a cadence, completion tracked; new-hire + annual), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the security awareness program control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's security awareness program capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "gov-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Security awareness program\"?",
          "options": [
            "From LMS / awareness platform and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how security awareness program works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. LMS / awareness platform) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "gov-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Security awareness program\"?",
          "options": [
            "The external audit firm, since it is the party examining the security awareness program control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the security awareness program data is shared, so the accountability sits with no one in particular",
            "Security awareness / CISO, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security awareness / CISO owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "gov-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Security awareness program\", which part stays with the human auditor?",
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
          "id": "gov-05-q7",
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
          "id": "gov-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Security awareness program\", which of these is a realistic reportable finding?",
          "options": [
            "Awareness is a once-a-year generic slideshow measured only by completion percentage; there's no phishing simulation, no role-specific training for developers or finance, and no measurement of whether anyone's behaviour — the actual goal — has changed.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Awareness is a once-a-year generic slideshow measured only by completion percentage; there's no phishing simulation, no role-specific training for developers or finance, and no measurement of whether anyone's behaviour — the actual goal — has changed. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "gov-05-q9",
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
          "id": "gov-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Security awareness program\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind security awareness program, so there is no overlap",
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
