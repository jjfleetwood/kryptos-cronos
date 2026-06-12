import type { EpochConfig, StageConfig } from "../types";

export const thirdPartyEpoch: EpochConfig = {
  "id": "third-party",
  "name": "Third Party Systems",
  "subtitle": "Agentic technical & privacy audit — Third Party Systems",
  "description": "Audit Third Party Systems end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔗",
  "color": "Amber",
  "unlocked": true
};

export const thirdPartyStages: StageConfig[] = [
  {
    "epochId": "third-party",
    "id": "tps-01",
    "order": 1,
    "title": "Data security and privacy",
    "subtitle": "Agentic technical & privacy audit of the data security and privacy control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data security and privacy\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data security and privacy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-01-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Data security and privacy",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data security and privacy\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Data security and privacy\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data security and privacy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_data_security_and_privacy_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_data_security_and_privacy_mcp.py` to expose it to your agent — or `python 01_data_security_and_privacy_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data security and privacy\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data security and privacy\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data security and privacy control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_data_security_and_privacy_mcp.py",
          "url": "/audit-code/third-party/01_data_security_and_privacy_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Data security and privacy\" (in-scope inventory for the data security and privacy control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data security and privacy\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data security and privacy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Data security and privacy\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data security and privacy\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data security and privacy\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data security and privacy\" control must cover\n# fragment: data_security_privacy_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "data_security_privacy_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data security and privacy\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the data security and privacy control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data security and privacy control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data security and privacy against comparable organisations in the sector",
            "Obtain evidence that the data security and privacy control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data security and privacy\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data security and privacy\" control?",
          "options": [
            "A point-in-time screenshot of one system's data security and privacy settings, captured during the walkthrough",
            "The In-scope inventory for the data security and privacy control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data security and privacy control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data security and privacy capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data security and privacy\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data security and privacy works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data security and privacy\"?",
          "options": [
            "The external audit firm, since it is the party examining the data security and privacy control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data security and privacy data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data security and privacy\", which part stays with the human auditor?",
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
          "id": "tps-01-q7",
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
          "id": "tps-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data security and privacy\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data security and privacy control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data security and privacy control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-01-q9",
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
          "id": "tps-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data security and privacy\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data security and privacy, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-02",
    "order": 2,
    "title": "Integration and interface security",
    "subtitle": "Agentic technical & privacy audit of the integration and interface security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Integration and interface security\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Integration and interface security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-02-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Integration and interface security",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Integration and interface security\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Integration and interface security\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Integration and interface security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_integration_and_interface_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_integration_and_interface_security_mcp.py` to expose it to your agent — or `python 02_integration_and_interface_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Integration and interface security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Integration and interface security\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the integration and interface security control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_integration_and_interface_security_mcp.py",
          "url": "/audit-code/third-party/02_integration_and_interface_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Integration and interface security\" (in-scope inventory for the integration and interface security control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Integration and interface security\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Integration and interface security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Integration and interface security\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Integration and interface security\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Integration and interface security\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Integration and interface security\" control must cover\n# fragment: integration_interface_security_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "integration_interface_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Integration and interface security\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the integration and interface security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the integration and interface security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for integration and interface security against comparable organisations in the sector",
            "Obtain evidence that the integration and interface security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Integration and interface security\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Integration and interface security\" control?",
          "options": [
            "A point-in-time screenshot of one system's integration and interface security settings, captured during the walkthrough",
            "The In-scope inventory for the integration and interface security control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the integration and interface security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's integration and interface security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Integration and interface security\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how integration and interface security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Integration and interface security\"?",
          "options": [
            "The external audit firm, since it is the party examining the integration and interface security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the integration and interface security data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Integration and interface security\", which part stays with the human auditor?",
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
          "id": "tps-02-q7",
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
          "id": "tps-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Integration and interface security\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the integration and interface security control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the integration and interface security control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-02-q9",
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
          "id": "tps-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Integration and interface security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind integration and interface security, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-03",
    "order": 3,
    "title": "Change and release mgmt (vendor)",
    "subtitle": "Agentic technical & privacy audit of the change and release mgmt (vendor) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Change and release mgmt (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Change and release mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-03-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Change and release mgmt (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Change and release mgmt (vendor)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Change and release mgmt (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Change and release mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_change_and_release_mgmt_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_change_and_release_mgmt_vendor_mcp.py` to expose it to your agent — or `python 03_change_and_release_mgmt_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Change and release mgmt (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Change and release mgmt (vendor)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the change and release mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_change_and_release_mgmt_vendor_mcp.py",
          "url": "/audit-code/third-party/03_change_and_release_mgmt_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Change and release mgmt (vendor)\" (in-scope inventory for the change and release mgmt (vendor) control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Change and release mgmt (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Change and release mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Change and release mgmt (vendor)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Change and release mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Change and release mgmt (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Change and release mgmt (vendor)\" control must cover\n# fragment: change_release_mgmt_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "change_release_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Change and release mgmt (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the change and release mgmt (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the change and release mgmt (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for change and release mgmt (vendor) against comparable organisations in the sector",
            "Obtain evidence that the change and release mgmt (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Change and release mgmt (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Change and release mgmt (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's change and release mgmt (vendor) settings, captured during the walkthrough",
            "The In-scope inventory for the change and release mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the change and release mgmt (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's change and release mgmt (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Change and release mgmt (vendor)\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how change and release mgmt (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Change and release mgmt (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the change and release mgmt (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the change and release mgmt (vendor) data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Change and release mgmt (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-03-q7",
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
          "id": "tps-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Change and release mgmt (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the change and release mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the change and release mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-03-q9",
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
          "id": "tps-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Change and release mgmt (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind change and release mgmt (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-04",
    "order": 4,
    "title": "Incident and problem mgmt (vendor)",
    "subtitle": "Agentic technical & privacy audit of the incident and problem mgmt (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Incident and problem mgmt (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Incident and problem mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-04-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Incident and problem mgmt (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Incident and problem mgmt (vendor)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Incident and problem mgmt (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Incident and problem mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_incident_and_problem_mgmt_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_incident_and_problem_mgmt_vendor_mcp.py` to expose it to your agent — or `python 04_incident_and_problem_mgmt_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Incident and problem mgmt (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Incident and problem mgmt (vendor)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the incident and problem mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_incident_and_problem_mgmt_vendor_mcp.py",
          "url": "/audit-code/third-party/04_incident_and_problem_mgmt_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Incident and problem mgmt (vendor)\" (in-scope inventory for the incident and problem mgmt (vendor) control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Incident and problem mgmt (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Incident and problem mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Incident and problem mgmt (vendor)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Incident and problem mgmt (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Incident and problem mgmt (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Incident and problem mgmt (vendor)\" control must cover\n# fragment: incident_problem_mgmt_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "incident_problem_mgmt_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Incident and problem mgmt (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the incident and problem mgmt (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the incident and problem mgmt (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for incident and problem mgmt (vendor) against comparable organisations in the sector",
            "Obtain evidence that the incident and problem mgmt (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Incident and problem mgmt (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Incident and problem mgmt (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's incident and problem mgmt (vendor) settings, captured during the walkthrough",
            "The In-scope inventory for the incident and problem mgmt (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the incident and problem mgmt (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's incident and problem mgmt (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Incident and problem mgmt (vendor)\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how incident and problem mgmt (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Incident and problem mgmt (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the incident and problem mgmt (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the incident and problem mgmt (vendor) data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Incident and problem mgmt (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-04-q7",
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
          "id": "tps-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Incident and problem mgmt (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the incident and problem mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the incident and problem mgmt (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-04-q9",
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
          "id": "tps-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Incident and problem mgmt (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind incident and problem mgmt (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-05",
    "order": 5,
    "title": "Compliance and regulatory alignment",
    "subtitle": "Agentic technical & privacy audit of the compliance and regulatory alignment control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Compliance and regulatory alignment\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-05-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Compliance and regulatory alignment",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Compliance and regulatory alignment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Compliance and regulatory alignment\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_compliance_and_regulatory_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_compliance_and_regulatory_alignment_mcp.py` to expose it to your agent — or `python 05_compliance_and_regulatory_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Compliance and regulatory alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_compliance_and_regulatory_alignment_mcp.py",
          "url": "/audit-code/third-party/05_compliance_and_regulatory_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Compliance and regulatory alignment\" (in-scope inventory for the compliance and regulatory alignment control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Compliance and regulatory alignment\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Compliance and regulatory alignment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Compliance and regulatory alignment\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Compliance and regulatory alignment\" control must cover\n# fragment: compliance_regulatory_alignment_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "compliance_regulatory_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Compliance and regulatory alignment\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the compliance and regulatory alignment control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the compliance and regulatory alignment control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for compliance and regulatory alignment against comparable organisations in the sector",
            "Obtain evidence that the compliance and regulatory alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Compliance and regulatory alignment\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Compliance and regulatory alignment\" control?",
          "options": [
            "A point-in-time screenshot of one system's compliance and regulatory alignment settings, captured during the walkthrough",
            "The In-scope inventory for the compliance and regulatory alignment control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the compliance and regulatory alignment control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's compliance and regulatory alignment capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Compliance and regulatory alignment\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how compliance and regulatory alignment works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Compliance and regulatory alignment\"?",
          "options": [
            "The external audit firm, since it is the party examining the compliance and regulatory alignment control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the compliance and regulatory alignment data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Compliance and regulatory alignment\", which part stays with the human auditor?",
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
          "id": "tps-05-q7",
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
          "id": "tps-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Compliance and regulatory alignment\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-05-q9",
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
          "id": "tps-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Compliance and regulatory alignment\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind compliance and regulatory alignment, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-06",
    "order": 6,
    "title": "BCP and resilience (vendor)",
    "subtitle": "Agentic technical & privacy audit of the bcp and resilience (vendor) control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"BCP and resilience (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"BCP and resilience (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-06-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "BCP and resilience (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"BCP and resilience (vendor)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"BCP and resilience (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"BCP and resilience (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_bcp_and_resilience_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_bcp_and_resilience_vendor_mcp.py` to expose it to your agent — or `python 06_bcp_and_resilience_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"BCP and resilience (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"BCP and resilience (vendor)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the bcp and resilience (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_bcp_and_resilience_vendor_mcp.py",
          "url": "/audit-code/third-party/06_bcp_and_resilience_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"BCP and resilience (vendor)\" (in-scope inventory for the bcp and resilience (vendor) control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"BCP and resilience (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"BCP and resilience (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"BCP and resilience (vendor)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"BCP and resilience (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"BCP and resilience (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"BCP and resilience (vendor)\" control must cover\n# fragment: bcp_resilience_vendor_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "bcp_resilience_vendor_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"BCP and resilience (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the bcp and resilience (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the bcp and resilience (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for bcp and resilience (vendor) against comparable organisations in the sector",
            "Obtain evidence that the bcp and resilience (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"BCP and resilience (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"BCP and resilience (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's bcp and resilience (vendor) settings, captured during the walkthrough",
            "The In-scope inventory for the bcp and resilience (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the bcp and resilience (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's bcp and resilience (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"BCP and resilience (vendor)\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how bcp and resilience (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"BCP and resilience (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the bcp and resilience (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the bcp and resilience (vendor) data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"BCP and resilience (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-06-q7",
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
          "id": "tps-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"BCP and resilience (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the bcp and resilience (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the bcp and resilience (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-06-q9",
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
          "id": "tps-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"BCP and resilience (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind bcp and resilience (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-07",
    "order": 7,
    "title": "Vulnerability and patch (vendor)",
    "subtitle": "Agentic technical & privacy audit of the vulnerability and patch (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vulnerability and patch (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vulnerability and patch (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-07-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vulnerability and patch (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vulnerability and patch (vendor)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vulnerability and patch (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vulnerability and patch (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_vulnerability_and_patch_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_vulnerability_and_patch_vendor_mcp.py` to expose it to your agent — or `python 07_vulnerability_and_patch_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vulnerability and patch (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vulnerability and patch (vendor)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vulnerability and patch (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_vulnerability_and_patch_vendor_mcp.py",
          "url": "/audit-code/third-party/07_vulnerability_and_patch_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vulnerability and patch (vendor)\" (in-scope inventory for the vulnerability and patch (vendor) control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vulnerability and patch (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vulnerability and patch (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vulnerability and patch (vendor)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vulnerability and patch (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vulnerability and patch (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vulnerability and patch (vendor)\" control must cover\n# fragment: vulnerability_patch_vendor_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vulnerability_patch_vendor_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vulnerability and patch (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vulnerability and patch (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vulnerability and patch (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vulnerability and patch (vendor) against comparable organisations in the sector",
            "Obtain evidence that the vulnerability and patch (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vulnerability and patch (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vulnerability and patch (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's vulnerability and patch (vendor) settings, captured during the walkthrough",
            "The In-scope inventory for the vulnerability and patch (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vulnerability and patch (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vulnerability and patch (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vulnerability and patch (vendor)\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vulnerability and patch (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vulnerability and patch (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the vulnerability and patch (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vulnerability and patch (vendor) data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vulnerability and patch (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-07-q7",
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
          "id": "tps-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vulnerability and patch (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vulnerability and patch (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vulnerability and patch (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-07-q9",
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
          "id": "tps-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vulnerability and patch (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vulnerability and patch (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-08",
    "order": 8,
    "title": "Vendor governance and risk mgmt",
    "subtitle": "Agentic technical & privacy audit of the vendor governance and risk mgmt control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor governance and risk mgmt\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor governance and risk mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-08-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vendor governance and risk mgmt",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor governance and risk mgmt\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vendor governance and risk mgmt\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor governance and risk mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_vendor_governance_and_risk_mgmt_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_vendor_governance_and_risk_mgmt_mcp.py` to expose it to your agent — or `python 08_vendor_governance_and_risk_mgmt_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor governance and risk mgmt\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor governance and risk mgmt\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor governance and risk mgmt control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_vendor_governance_and_risk_mgmt_mcp.py",
          "url": "/audit-code/third-party/08_vendor_governance_and_risk_mgmt_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vendor governance and risk mgmt\" (in-scope inventory for the vendor governance and risk mgmt control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor governance and risk mgmt\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor governance and risk mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vendor governance and risk mgmt\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor governance and risk mgmt\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor governance and risk mgmt\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor governance and risk mgmt\" control must cover\n# fragment: vendor_governance_risk_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vendor_governance_risk_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor governance and risk mgmt\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vendor governance and risk mgmt control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor governance and risk mgmt control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor governance and risk mgmt against comparable organisations in the sector",
            "Obtain evidence that the vendor governance and risk mgmt control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor governance and risk mgmt\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor governance and risk mgmt\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor governance and risk mgmt settings, captured during the walkthrough",
            "The In-scope inventory for the vendor governance and risk mgmt control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor governance and risk mgmt control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor governance and risk mgmt capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor governance and risk mgmt\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor governance and risk mgmt works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor governance and risk mgmt\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor governance and risk mgmt control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor governance and risk mgmt data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor governance and risk mgmt\", which part stays with the human auditor?",
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
          "id": "tps-08-q7",
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
          "id": "tps-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor governance and risk mgmt\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor governance and risk mgmt control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor governance and risk mgmt control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-08-q9",
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
          "id": "tps-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor governance and risk mgmt\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor governance and risk mgmt, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-09",
    "order": 9,
    "title": "Data backup and recovery (vendor)",
    "subtitle": "Agentic technical & privacy audit of the data backup and recovery (vendor) control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Data backup and recovery (vendor)\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data backup and recovery (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-09-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Data backup and recovery (vendor)",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Data backup and recovery (vendor)\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Data backup and recovery (vendor)\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data backup and recovery (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_data_backup_and_recovery_vendor_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_data_backup_and_recovery_vendor_mcp.py` to expose it to your agent — or `python 09_data_backup_and_recovery_vendor_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Data backup and recovery (vendor)\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data backup and recovery (vendor)\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the data backup and recovery (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_data_backup_and_recovery_vendor_mcp.py",
          "url": "/audit-code/third-party/09_data_backup_and_recovery_vendor_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Data backup and recovery (vendor)\" (in-scope inventory for the data backup and recovery (vendor) control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Data backup and recovery (vendor)\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data backup and recovery (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Data backup and recovery (vendor)\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Data backup and recovery (vendor)\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Data backup and recovery (vendor)\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Data backup and recovery (vendor)\" control must cover\n# fragment: data_backup_recovery_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "data_backup_recovery_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Data backup and recovery (vendor)\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the data backup and recovery (vendor) control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the data backup and recovery (vendor) control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for data backup and recovery (vendor) against comparable organisations in the sector",
            "Obtain evidence that the data backup and recovery (vendor) control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Data backup and recovery (vendor)\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Data backup and recovery (vendor)\" control?",
          "options": [
            "A point-in-time screenshot of one system's data backup and recovery (vendor) settings, captured during the walkthrough",
            "The In-scope inventory for the data backup and recovery (vendor) control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the data backup and recovery (vendor) control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's data backup and recovery (vendor) capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Data backup and recovery (vendor)\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how data backup and recovery (vendor) works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Data backup and recovery (vendor)\"?",
          "options": [
            "The external audit firm, since it is the party examining the data backup and recovery (vendor) control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the data backup and recovery (vendor) data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Data backup and recovery (vendor)\", which part stays with the human auditor?",
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
          "id": "tps-09-q7",
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
          "id": "tps-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Data backup and recovery (vendor)\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the data backup and recovery (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the data backup and recovery (vendor) control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-09-q9",
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
          "id": "tps-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Data backup and recovery (vendor)\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind data backup and recovery (vendor), so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-10",
    "order": 10,
    "title": "Systems availability and capacity",
    "subtitle": "Agentic technical & privacy audit of the systems availability and capacity control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Systems availability and capacity\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Systems availability and capacity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-10-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Systems availability and capacity",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Systems availability and capacity\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Systems availability and capacity\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Systems availability and capacity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_systems_availability_and_capacity_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_systems_availability_and_capacity_mcp.py` to expose it to your agent — or `python 10_systems_availability_and_capacity_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Systems availability and capacity\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Systems availability and capacity\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the systems availability and capacity control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_systems_availability_and_capacity_mcp.py",
          "url": "/audit-code/third-party/10_systems_availability_and_capacity_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Systems availability and capacity\" (in-scope inventory for the systems availability and capacity control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Systems availability and capacity\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Systems availability and capacity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Systems availability and capacity\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Systems availability and capacity\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Systems availability and capacity\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Systems availability and capacity\" control must cover\n# fragment: systems_availability_capacity_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "systems_availability_capacity_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Systems availability and capacity\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the systems availability and capacity control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the systems availability and capacity control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for systems availability and capacity against comparable organisations in the sector",
            "Obtain evidence that the systems availability and capacity control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Systems availability and capacity\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Systems availability and capacity\" control?",
          "options": [
            "A point-in-time screenshot of one system's systems availability and capacity settings, captured during the walkthrough",
            "The In-scope inventory for the systems availability and capacity control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the systems availability and capacity control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's systems availability and capacity capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Systems availability and capacity\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how systems availability and capacity works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Systems availability and capacity\"?",
          "options": [
            "The external audit firm, since it is the party examining the systems availability and capacity control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the systems availability and capacity data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Systems availability and capacity\", which part stays with the human auditor?",
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
          "id": "tps-10-q7",
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
          "id": "tps-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Systems availability and capacity\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the systems availability and capacity control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the systems availability and capacity control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-10-q9",
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
          "id": "tps-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Systems availability and capacity\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind systems availability and capacity, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-11",
    "order": 11,
    "title": "Audit and monitoring rights",
    "subtitle": "Agentic technical & privacy audit of the audit and monitoring rights control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit and monitoring rights\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Audit and monitoring rights\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-11-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Audit and monitoring rights",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit and monitoring rights\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Audit and monitoring rights\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Audit and monitoring rights\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_audit_and_monitoring_rights_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_audit_and_monitoring_rights_mcp.py` to expose it to your agent — or `python 11_audit_and_monitoring_rights_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit and monitoring rights\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Audit and monitoring rights\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the audit and monitoring rights control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_audit_and_monitoring_rights_mcp.py",
          "url": "/audit-code/third-party/11_audit_and_monitoring_rights_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Audit and monitoring rights\" (in-scope inventory for the audit and monitoring rights control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit and monitoring rights\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Audit and monitoring rights\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Audit and monitoring rights\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Audit and monitoring rights\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit and monitoring rights\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit and monitoring rights\" control must cover\n# fragment: audit_monitoring_rights_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "audit_monitoring_rights_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit and monitoring rights\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the audit and monitoring rights control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the audit and monitoring rights control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for audit and monitoring rights against comparable organisations in the sector",
            "Obtain evidence that the audit and monitoring rights control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit and monitoring rights\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit and monitoring rights\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit and monitoring rights settings, captured during the walkthrough",
            "The In-scope inventory for the audit and monitoring rights control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit and monitoring rights control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit and monitoring rights capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit and monitoring rights\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit and monitoring rights works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit and monitoring rights\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit and monitoring rights control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit and monitoring rights data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit and monitoring rights\", which part stays with the human auditor?",
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
          "id": "tps-11-q7",
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
          "id": "tps-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit and monitoring rights\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the audit and monitoring rights control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the audit and monitoring rights control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-11-q9",
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
          "id": "tps-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit and monitoring rights\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind audit and monitoring rights, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-12",
    "order": 12,
    "title": "Subcontractor / nth party risk",
    "subtitle": "Agentic technical & privacy audit of the subcontractor / nth party risk control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Subcontractor / nth party risk\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Subcontractor / nth party risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-12-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Subcontractor / nth party risk",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Subcontractor / nth party risk\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Subcontractor / nth party risk\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Subcontractor / nth party risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `12_subcontractor_nth_party_risk_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 12_subcontractor_nth_party_risk_mcp.py` to expose it to your agent — or `python 12_subcontractor_nth_party_risk_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Subcontractor / nth party risk\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Subcontractor / nth party risk\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the subcontractor / nth party risk control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "12_subcontractor_nth_party_risk_mcp.py",
          "url": "/audit-code/third-party/12_subcontractor_nth_party_risk_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Subcontractor / nth party risk\" (in-scope inventory for the subcontractor / nth party risk control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Subcontractor / nth party risk\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Subcontractor / nth party risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Subcontractor / nth party risk\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Subcontractor / nth party risk\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Subcontractor / nth party risk\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Subcontractor / nth party risk\" control must cover\n# fragment: subcontractor_nth_party_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "subcontractor_nth_party_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-12-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Subcontractor / nth party risk\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the subcontractor / nth party risk control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the subcontractor / nth party risk control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for subcontractor / nth party risk against comparable organisations in the sector",
            "Obtain evidence that the subcontractor / nth party risk control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-12-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Subcontractor / nth party risk\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-12-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Subcontractor / nth party risk\" control?",
          "options": [
            "A point-in-time screenshot of one system's subcontractor / nth party risk settings, captured during the walkthrough",
            "The In-scope inventory for the subcontractor / nth party risk control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the subcontractor / nth party risk control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's subcontractor / nth party risk capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-12-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Subcontractor / nth party risk\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how subcontractor / nth party risk works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-12-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Subcontractor / nth party risk\"?",
          "options": [
            "The external audit firm, since it is the party examining the subcontractor / nth party risk control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the subcontractor / nth party risk data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-12-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Subcontractor / nth party risk\", which part stays with the human auditor?",
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
          "id": "tps-12-q7",
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
          "id": "tps-12-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Subcontractor / nth party risk\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the subcontractor / nth party risk control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the subcontractor / nth party risk control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-12-q9",
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
          "id": "tps-12-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Subcontractor / nth party risk\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind subcontractor / nth party risk, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-13",
    "order": 13,
    "title": "Identity federation and authentication",
    "subtitle": "Agentic technical & privacy audit of the identity federation and authentication control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Identity federation and authentication\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Identity federation and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-13-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Identity federation and authentication",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Identity federation and authentication\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Identity federation and authentication\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Identity federation and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `13_identity_federation_and_authentication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 13_identity_federation_and_authentication_mcp.py` to expose it to your agent — or `python 13_identity_federation_and_authentication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Identity federation and authentication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Identity federation and authentication\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the identity federation and authentication control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "13_identity_federation_and_authentication_mcp.py",
          "url": "/audit-code/third-party/13_identity_federation_and_authentication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Identity federation and authentication\" (in-scope inventory for the identity federation and authentication control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Identity federation and authentication\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Identity federation and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Identity federation and authentication\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Identity federation and authentication\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Identity federation and authentication\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Identity federation and authentication\" control must cover\n# fragment: identity_federation_authentication_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "identity_federation_authentication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-13-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Identity federation and authentication\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the identity federation and authentication control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the identity federation and authentication control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for identity federation and authentication against comparable organisations in the sector",
            "Obtain evidence that the identity federation and authentication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-13-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Identity federation and authentication\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-13-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Identity federation and authentication\" control?",
          "options": [
            "A point-in-time screenshot of one system's identity federation and authentication settings, captured during the walkthrough",
            "The In-scope inventory for the identity federation and authentication control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the identity federation and authentication control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's identity federation and authentication capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-13-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Identity federation and authentication\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how identity federation and authentication works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-13-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Identity federation and authentication\"?",
          "options": [
            "The external audit firm, since it is the party examining the identity federation and authentication control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the identity federation and authentication data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-13-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Identity federation and authentication\", which part stays with the human auditor?",
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
          "id": "tps-13-q7",
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
          "id": "tps-13-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Identity federation and authentication\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the identity federation and authentication control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the identity federation and authentication control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-13-q9",
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
          "id": "tps-13-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Identity federation and authentication\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind identity federation and authentication, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-14",
    "order": 14,
    "title": "Vendor AI supply chain",
    "subtitle": "Agentic technical & privacy audit of the vendor ai supply chain control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Vendor AI supply chain\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor AI supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-14-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Vendor AI supply chain",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Vendor AI supply chain\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Vendor AI supply chain\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor AI supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `14_vendor_ai_supply_chain_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 14_vendor_ai_supply_chain_mcp.py` to expose it to your agent — or `python 14_vendor_ai_supply_chain_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Vendor AI supply chain\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor AI supply chain\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the vendor ai supply chain control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "14_vendor_ai_supply_chain_mcp.py",
          "url": "/audit-code/third-party/14_vendor_ai_supply_chain_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Vendor AI supply chain\" (in-scope inventory for the vendor ai supply chain control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Vendor AI supply chain\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor AI supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Vendor AI supply chain\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Vendor AI supply chain\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Vendor AI supply chain\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Vendor AI supply chain\" control must cover\n# fragment: vendor_ai_supply_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "vendor_ai_supply_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-14-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Vendor AI supply chain\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the vendor ai supply chain control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the vendor ai supply chain control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for vendor ai supply chain against comparable organisations in the sector",
            "Obtain evidence that the vendor ai supply chain control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-14-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Vendor AI supply chain\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-14-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Vendor AI supply chain\" control?",
          "options": [
            "A point-in-time screenshot of one system's vendor ai supply chain settings, captured during the walkthrough",
            "The In-scope inventory for the vendor ai supply chain control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the vendor ai supply chain control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's vendor ai supply chain capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-14-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Vendor AI supply chain\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how vendor ai supply chain works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-14-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Vendor AI supply chain\"?",
          "options": [
            "The external audit firm, since it is the party examining the vendor ai supply chain control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the vendor ai supply chain data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-14-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Vendor AI supply chain\", which part stays with the human auditor?",
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
          "id": "tps-14-q7",
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
          "id": "tps-14-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Vendor AI supply chain\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the vendor ai supply chain control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the vendor ai supply chain control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-14-q9",
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
          "id": "tps-14-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Vendor AI supply chain\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind vendor ai supply chain, so there is no overlap",
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
    "epochId": "third-party",
    "id": "tps-15",
    "order": 15,
    "title": "Post-quantum protection support",
    "subtitle": "Agentic technical & privacy audit of the post-quantum protection support control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-quantum protection support\" control for Third Party Systems is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Third Party Systems systems of record (TPRM / GRC platform (Archer/OneTrust); Vendor inventory + contracts; SOC 2 / attestation repository) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust))",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "TPRM / GRC platform (Archer/OneTrust)",
        "Vendor inventory + contracts",
        "SOC 2 / attestation repository",
        "Integration / API gateway"
      ],
      "dataOwner": [
        "Third-party risk management",
        "Procurement / Vendor management",
        "Application owners",
        "Legal & Compliance"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Third Party Systems controls."
      }
    },
    "badge": {
      "id": "tps-15-badge",
      "name": "Third Party Systems Auditor",
      "emoji": "🔗"
    },
    "wonder": {
      "name": "Post-quantum protection support",
      "location": "Third Party Systems",
      "era": "Present Day",
      "emoji": "🔗"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-quantum protection support\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust))) with read-only agents, run the test against policy, and issue a defensible opinion on the Third Party Systems control.",
      "year": 2025,
      "overview": [
        "The \"Post-quantum protection support\" sub-process is one of the controls an auditor must verify for Third Party Systems. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust)), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `15_post_quantum_protection_support_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from TPRM / GRC platform (Archer/OneTrust) and Vendor inventory + contracts (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 15_post_quantum_protection_support_mcp.py` to expose it to your agent — or `python 15_post_quantum_protection_support_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The breach that came through a vendor",
        "when": "Recurring",
        "where": "Third-party / supplier integrations",
        "impact": "A trusted vendor or nth-party with access becomes the path in — the customer inherits a risk they didn't directly control.",
        "body": [
          "From Target's HVAC vendor to MOVEit's mass exploitation, third parties are a leading breach vector because their access and weaknesses become yours.",
          "Auditors verify vendor due diligence, contractual security/SLA terms, integration security, audit rights, and nth-party (subcontractor) risk."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Third Party Systems scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull TPRM / GRC platform (Archer/OneTrust) · Vendor inventory + contracts",
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
          "year": 2023,
          "event": "MOVEit: one vendor flaw breaches thousands of downstream orgs",
          "highlight": true
        },
        {
          "year": 2013,
          "event": "Target: HVAC-vendor credentials lead to a 40M-card breach"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-quantum protection support\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust)).",
        "The test: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (TPRM / GRC platform (Archer/OneTrust), Vendor inventory + contracts, SOC 2 / attestation repository) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-161 — C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "Shared Assessments SIG",
          "url": "https://sharedassessments.org/"
        },
        {
          "title": "ISO/IEC 27036 — supplier security",
          "url": "https://www.iso.org/standard/59648.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "15_post_quantum_protection_support_mcp.py",
          "url": "/audit-code/third-party/15_post_quantum_protection_support_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Third Party Systems evidence for \"Post-quantum protection support\" (in-scope inventory for the post-quantum protection support control (from tprm / grc platform (archer/onetrust))), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-quantum protection support\" control for Third Party Systems at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust)) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live TPRM / GRC platform (Archer/OneTrust) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. TPRM / GRC platform (Archer/OneTrust) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from TPRM / GRC platform (Archer/OneTrust); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Third Party Systems: \"Post-quantum protection support\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Third Party Systems policy/standard and flag every item where the \"Post-quantum protection support\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- third-party_inventory.json   (in-scope items — In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust)))\n- third-party_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-quantum protection support\",\n  \"domain\": \"Third Party Systems\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{tps_",
        "/evidence/third-party_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Third-party risk management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-quantum protection support\" control must cover\n# fragment: postquantum_protection_support_",
        "/evidence/third-party_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "third-party_inventory.json",
            "isDir": false
          },
          {
            "name": "third-party_state.json",
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
          "value": "FLAG{tps_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/third-party_inventory.json",
          "value": "postquantum_protection_support_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/third-party_state.json",
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
          "id": "tps-15-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-quantum protection support\" sub-process of Third Party Systems?",
          "options": [
            "Deploy and operate the post-quantum protection support control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the post-quantum protection support control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for post-quantum protection support against comparable organisations in the sector",
            "Obtain evidence that the post-quantum protection support control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "tps-15-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-quantum protection support\" matter to the broader Third Party Systems posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Third Party Systems",
            "It stops mattering once a firewall and endpoint agent are deployed across the Third Party Systems estate",
            "It is a control other Third Party Systems controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Third Party Systems controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "tps-15-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-quantum protection support\" control?",
          "options": [
            "A point-in-time screenshot of one system's post-quantum protection support settings, captured during the walkthrough",
            "The In-scope inventory for the post-quantum protection support control (from TPRM / GRC platform (Archer/OneTrust)), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the post-quantum protection support control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's post-quantum protection support capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "tps-15-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Post-quantum protection support\"?",
          "options": [
            "From TPRM / GRC platform (Archer/OneTrust) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how post-quantum protection support works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. TPRM / GRC platform (Archer/OneTrust)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "tps-15-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-quantum protection support\"?",
          "options": [
            "The external audit firm, since it is the party examining the post-quantum protection support control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the post-quantum protection support data is shared, so the accountability sits with no one in particular",
            "Third-party risk management, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Third-party risk management owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "tps-15-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-quantum protection support\", which part stays with the human auditor?",
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
          "id": "tps-15-q7",
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
          "id": "tps-15-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-quantum protection support\", which of these is a realistic reportable finding?",
          "options": [
            "In-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the post-quantum protection support control is not applied, mis-scoped, or has drifted from the approved baseline A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "tps-15-q9",
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
          "id": "tps-15-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-quantum protection support\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind post-quantum protection support, so there is no overlap",
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
