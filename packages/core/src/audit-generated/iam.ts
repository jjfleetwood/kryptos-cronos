import type { EpochConfig, StageConfig } from "../types";

export const iamEpoch: EpochConfig = {
  "id": "iam",
  "name": "Identity & Access Management (IAM)",
  "subtitle": "Agentic technical & privacy audit — Identity & Access Management (IAM)",
  "description": "Audit Identity & Access Management (IAM) end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🪪",
  "color": "Violet",
  "unlocked": true
};

export const iamStages: StageConfig[] = [
  {
    "epochId": "iam",
    "id": "iam-01",
    "order": 1,
    "title": "User provisioning and deprovisioning",
    "subtitle": "Agentic technical & privacy audit of the user provisioning and deprovisioning control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"User provisioning and deprovisioning\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile every IdP account to an active worker in the HR system of record. PASS: each enabled account maps to an active worker; every new account had an approved access request before creation; every terminated worker's accounts were disabled within SLA (e.g. ≤24h privileged, ≤7d standard) and de-licensed. Exceptions: orphaned accounts with no matching active worker, terminated workers still enabled, and accounts created with no approval ticket.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Okta / Microsoft Entra ID (the identity provider); Workday / SAP SuccessFactors (HR system of record); ServiceNow (access-request + approval workflow)) as tools — e.g. `GET /api/v1/users?limit=200`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IdP user export — every account with status, creation date, last-login, and licence/role assignments",
        "The HR worker feed — active workers with hire and termination dates (the authoritative 'who should exist')",
        "The access-request approval tickets that authorised each account at creation",
        "Deprovisioning evidence — disable/delete timestamps to compare against termination dates"
      ],
      "system": [
        "Okta / Microsoft Entra ID (the identity provider)",
        "Workday / SAP SuccessFactors (HR system of record)",
        "ServiceNow (access-request + approval workflow)"
      ],
      "dataOwner": [
        "Identity & Access Management — runs provisioning operations",
        "HR — owns authoritative worker status and dates",
        "Line managers — approve the access requests"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-01-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "User provisioning and deprovisioning",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"User provisioning and deprovisioning\" as a repeatable agentic workflow: pull the real evidence (The IdP user export — every account with status, creation date, last-login, and licence/role assignments) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"User provisioning and deprovisioning\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IdP user export — every account with status, creation date, last-login, and licence/role assignments, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Okta / Microsoft Entra ID (the identity provider), Workday / SAP SuccessFactors (HR system of record), ServiceNow (access-request + approval workflow) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `GET /api/v1/users?limit=200` — read-only, against the systems of record.",
        "The test itself is specific. Reconcile every IdP account to an active worker in the HR system of record. PASS: each enabled account maps to an active worker; every new account had an approved access request before creation; every terminated worker's accounts were disabled within SLA (e.g. ≤24h privileged, ≤7d standard) and de-licensed. Exceptions: orphaned accounts with no matching active worker, terminated workers still enabled, and accounts created with no approval ticket. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_user_provisioning_and_deprovisioning_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Okta / Microsoft Entra ID (the identity provider) and Workday / SAP SuccessFactors (HR system of record) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_user_provisioning_and_deprovisioning_mcp.py` to expose it to your agent — or `python 01_user_provisioning_and_deprovisioning_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Okta / Microsoft Entra ID (the identity provider) · Workday / SAP SuccessFactors (HR system of record)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"User provisioning and deprovisioning\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Okta:   GET /api/v1/users?limit=200  (status, created, lastLogin, then paginate the Link header)\nEntra:  Get-MgUser -All -Property displayName,accountEnabled,createdDateTime,signInActivity\nHR:     Workday/SuccessFactors 'active workers + termination date' report (CSV/SOAP)\nTrail:  ServiceNow table API /api/now/table/sysapproval_approver?sysparm_query=... for the approval record"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IdP user export — every account with status, creation date, last-login, and licence/role assignments.",
        "The test: Reconcile every IdP account to an active worker in the HR system of record.",
        "Reconcile the systems of record (Okta / Microsoft Entra ID (the identity provider), Workday / SAP SuccessFactors (HR system of record), ServiceNow (access-request + approval workflow)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Orphaned accounts with no active worker, and terminated employees whose accounts stayed enabled for days or weeks past their termination date — each named with account id, worker id, and the gap in days."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-2 Account Management",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "NIST SP 800-63 Digital Identity",
          "url": "https://pages.nist.gov/800-63-3/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_user_provisioning_and_deprovisioning_mcp.py",
          "url": "/audit-code/iam/01_user_provisioning_and_deprovisioning_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"User provisioning and deprovisioning\" (the idp user export — every account with status, creation date, last-login, and licence/role assignments), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"User provisioning and deprovisioning\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Reconcile every IdP account to an active worker in the HR system of record. PASS: each enabled account maps to an active worker; every new account had an approved access request before creation; every terminated worker's accounts were disabled within SLA (e.g. ≤24h privileged, ≤7d standard) and de-licensed. Exceptions: orphaned accounts with no matching active worker, terminated workers still enabled, and accounts created with no approval ticket. The evidence — The IdP user export — every account with status, creation date, last-login, and licence/role assignments — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Okta / Microsoft Entra ID (the identity provider) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Okta / Microsoft Entra ID (the identity provider) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Okta / Microsoft Entra ID (the identity provider); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"User provisioning and deprovisioning\" Audit Evidence\n\nThe test:\nReconcile every IdP account to an active worker in the HR system of record. PASS: each enabled account maps to an active worker; every new account had an approved access request before creation; every terminated worker's accounts were disabled within SLA (e.g. ≤24h privileged, ≤7d standard) and de-licensed. Exceptions: orphaned accounts with no matching active worker, terminated workers still enabled, and accounts created with no approval ticket.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The IdP user export — every account with status, creation date, last-login, and licence/role assignments)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"User provisioning and deprovisioning\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"User provisioning and deprovisioning\" control must cover\n# fragment: user_provisioning_deprovisioning_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "user_provisioning_deprovisioning_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"User provisioning and deprovisioning\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the user provisioning and deprovisioning control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the user provisioning and deprovisioning control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for user provisioning and deprovisioning against comparable organisations in the sector",
            "Obtain evidence that the user provisioning and deprovisioning control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"User provisioning and deprovisioning\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"User provisioning and deprovisioning\" control?",
          "options": [
            "A point-in-time screenshot of one system's user provisioning and deprovisioning settings, captured during the walkthrough",
            "The The IdP user export — every account with status, creation date, last-login, and licence/role assignments, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the user provisioning and deprovisioning control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's user provisioning and deprovisioning capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"User provisioning and deprovisioning\"?",
          "options": [
            "From Okta / Microsoft Entra ID (the identity provider) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how user provisioning and deprovisioning works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Okta / Microsoft Entra ID (the identity provider)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"User provisioning and deprovisioning\"?",
          "options": [
            "The external audit firm, since it is the party examining the user provisioning and deprovisioning control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the user provisioning and deprovisioning data is shared, so the accountability sits with no one in particular",
            "Identity & Access Management — runs provisioning operations, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Identity & Access Management — runs provisioning operations owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"User provisioning and deprovisioning\", which part stays with the human auditor?",
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
          "id": "iam-01-q7",
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
          "id": "iam-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"User provisioning and deprovisioning\", which of these is a realistic reportable finding?",
          "options": [
            "Orphaned accounts with no active worker, and terminated employees whose accounts stayed enabled for days or weeks past their termination date — each named with account id, worker id, and the gap in days.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Orphaned accounts with no active worker, and terminated employees whose accounts stayed enabled for days or weeks past their termination date — each named with account id, worker id, and the gap in days. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-01-q9",
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
          "id": "iam-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"User provisioning and deprovisioning\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind user provisioning and deprovisioning, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-02",
    "order": 2,
    "title": "Joiner-mover-leaver",
    "subtitle": "Agentic technical & privacy audit of the joiner-mover-leaver control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Joiner-mover-leaver\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: For every MOVER (role/department change) in the period, diff the worker's entitlements before and after. PASS: birthright access updated to the NEW role AND prior-role entitlements removed (no accumulation); joiners got only their role's birthright access; leavers were fully deprovisioned within SLA. Exceptions: 'privilege creep' — movers who kept old-role access on top of new; leavers with residual access; joiners over-provisioned beyond their role.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (HR / HRIS (the JML event source); IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements); The role / birthright catalogue) as tools — e.g. `SailPoint identity-cube entitlement history, or Saviynt 'identity enti`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period",
        "Before/after entitlement snapshots for each worker who changed role",
        "The birthright-role mapping (job code → the access automatically granted)",
        "Leaver deprovisioning timestamps vs the HR termination date"
      ],
      "system": [
        "HR / HRIS (the JML event source)",
        "IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements)",
        "The role / birthright catalogue"
      ],
      "dataOwner": [
        "IAM / Identity Governance — owns the JML automation",
        "HR — owns the lifecycle events",
        "Role owners — define each role's birthright access"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-02-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Joiner-mover-leaver",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Joiner-mover-leaver\" as a repeatable agentic workflow: pull the real evidence (The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Joiner-mover-leaver\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HR / HRIS (the JML event source), IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements), The role / birthright catalogue — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SailPoint identity-cube entitlement history, or Saviynt 'identity entitlement' e` — read-only, against the systems of record.",
        "The test itself is specific. For every MOVER (role/department change) in the period, diff the worker's entitlements before and after. PASS: birthright access updated to the NEW role AND prior-role entitlements removed (no accumulation); joiners got only their role's birthright access; leavers were fully deprovisioned within SLA. Exceptions: 'privilege creep' — movers who kept old-role access on top of new; leavers with residual access; joiners over-provisioned beyond their role. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_joiner_mover_leaver_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HR / HRIS (the JML event source) and IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_joiner_mover_leaver_mcp.py` to expose it to your agent — or `python 02_joiner_mover_leaver_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HR / HRIS (the JML event source) · IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Joiner-mover-leaver\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "IGA:   SailPoint identity-cube entitlement history, or Saviynt 'identity entitlement' export, before vs after the move date\nEntra: Get-MgUserMemberOf for each mover at two points in time, then diff the group sets\nOkta:  group-membership snapshots (/api/v1/users/{id}/groups) diffed across the move\nHR:    JML event extract (effective-dated hires / transfers / terminations)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period.",
        "The test: For every MOVER (role/department change) in the period, diff the worker's entitlements before and after.",
        "Reconcile the systems of record (HR / HRIS (the JML event source), IGA platform — SailPoint / Saviynt / Microsoft Entra ID Governance (entitlements), The role / birthright catalogue) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Movers who accumulated entitlements across two or three past roles (named, with the stale entitlements listed), and a handful of leavers whose access was removed late."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-2 / AC-6",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Gartner — Identity Governance & Administration",
          "url": "https://www.gartner.com/en/information-technology/glossary/identity-governance-and-administration-iga"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_joiner_mover_leaver_mcp.py",
          "url": "/audit-code/iam/02_joiner_mover_leaver_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Joiner-mover-leaver\" (the joiner-mover-leaver (jml) event log from hr — hires, role/department changes, and terminations in the period), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Joiner-mover-leaver\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: For every MOVER (role/department change) in the period, diff the worker's entitlements before and after. PASS: birthright access updated to the NEW role AND prior-role entitlements removed (no accumulation); joiners got only their role's birthright access; leavers were fully deprovisioned within SLA. Exceptions: 'privilege creep' — movers who kept old-role access on top of new; leavers with residual access; joiners over-provisioned beyond their role. The evidence — The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HR / HRIS (the JML event source) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HR / HRIS (the JML event source) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HR / HRIS (the JML event source); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Joiner-mover-leaver\" Audit Evidence\n\nThe test:\nFor every MOVER (role/department change) in the period, diff the worker's entitlements before and after. PASS: birthright access updated to the NEW role AND prior-role entitlements removed (no accumulation); joiners got only their role's birthright access; leavers were fully deprovisioned within SLA. Exceptions: 'privilege creep' — movers who kept old-role access on top of new; leavers with residual access; joiners over-provisioned beyond their role.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Joiner-mover-leaver\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Joiner-mover-leaver\" control must cover\n# fragment: joinermoverleaver_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "joinermoverleaver_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Joiner-mover-leaver\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the joiner-mover-leaver control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the joiner-mover-leaver control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for joiner-mover-leaver against comparable organisations in the sector",
            "Obtain evidence that the joiner-mover-leaver control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Joiner-mover-leaver\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Joiner-mover-leaver\" control?",
          "options": [
            "A point-in-time screenshot of one system's joiner-mover-leaver settings, captured during the walkthrough",
            "The The joiner-mover-leaver (JML) event log from HR — hires, role/department changes, and terminations in the period, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the joiner-mover-leaver control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's joiner-mover-leaver capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Joiner-mover-leaver\"?",
          "options": [
            "From HR / HRIS (the JML event source) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how joiner-mover-leaver works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. HR / HRIS (the JML event source)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Joiner-mover-leaver\"?",
          "options": [
            "The external audit firm, since it is the party examining the joiner-mover-leaver control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the joiner-mover-leaver data is shared, so the accountability sits with no one in particular",
            "IAM / Identity Governance — owns the JML automation, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM / Identity Governance — owns the JML automation owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Joiner-mover-leaver\", which part stays with the human auditor?",
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
          "id": "iam-02-q7",
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
          "id": "iam-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Joiner-mover-leaver\", which of these is a realistic reportable finding?",
          "options": [
            "Movers who accumulated entitlements across two or three past roles (named, with the stale entitlements listed), and a handful of leavers whose access was removed late.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Movers who accumulated entitlements across two or three past roles (named, with the stale entitlements listed), and a handful of leavers whose access was removed late. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-02-q9",
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
          "id": "iam-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Joiner-mover-leaver\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind joiner-mover-leaver, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-03",
    "order": 3,
    "title": "MFA coverage",
    "subtitle": "Agentic technical & privacy audit of the mfa coverage control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"MFA coverage\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the active-user roster against factor enrolment and the per-app auth policies. PASS: every active human account has at least one phishing-resistant factor (FIDO2/WebAuthn or platform passkey); every application handling confidential/regulated data REQUIRES MFA (not 'optional'); no account relies on SMS or voice as its only factor. Exceptions: active accounts with zero factors or SMS-only, and sensitive apps where MFA is optional or disabled.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Okta (Universal Directory + Authentication Policies); Microsoft Entra ID (Conditional Access); The HR system of record for 'active worker') as tools — e.g. `GET /api/v1/users?filter=status eq \"ACTIVE\"`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date)",
        "The per-application authentication-policy export showing which apps require MFA and which factor types are allowed",
        "The list of sensitive/regulated applications that the MFA requirement must cover",
        "Sign-in / system logs showing factor usage (to catch policy that exists but isn't enforced)"
      ],
      "system": [
        "Okta (Universal Directory + Authentication Policies)",
        "Microsoft Entra ID (Conditional Access)",
        "The HR system of record for 'active worker'"
      ],
      "dataOwner": [
        "IAM — owns the IdP and the authentication policies",
        "Application owners — set each app's auth-policy requirement",
        "HR — the authoritative active-worker list"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-03-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "MFA coverage",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"MFA coverage\" as a repeatable agentic workflow: pull the real evidence (A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date)) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"MFA coverage\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me a CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Okta (Universal Directory + Authentication Policies), Microsoft Entra ID (Conditional Access), The HR system of record for 'active worker' — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `GET /api/v1/users?filter=status eq \"ACTIVE\"` — read-only, against the systems of record.",
        "The test itself is specific. Reconcile the active-user roster against factor enrolment and the per-app auth policies. PASS: every active human account has at least one phishing-resistant factor (FIDO2/WebAuthn or platform passkey); every application handling confidential/regulated data REQUIRES MFA (not 'optional'); no account relies on SMS or voice as its only factor. Exceptions: active accounts with zero factors or SMS-only, and sensitive apps where MFA is optional or disabled. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_mfa_coverage_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Okta (Universal Directory + Authentication Policies) and Microsoft Entra ID (Conditional Access) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_mfa_coverage_mcp.py` to expose it to your agent — or `python 03_mfa_coverage_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Okta (Universal Directory + Authentication Policies) · Microsoft Entra ID (Conditional Access)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"MFA coverage\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Okta:  GET /api/v1/users?filter=status eq \"ACTIVE\"  then  GET /api/v1/users/{id}/factors\nOkta:  GET /api/v1/policies?type=ACCESS_POLICY  for the per-application MFA rules\nEntra: Get-MgUserAuthenticationMethod -UserId <id>  ;  export Conditional Access policies\nEntra: AuthenticationMethods registration & usage report (CSV)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date).",
        "The test: Reconcile the active-user roster against factor enrolment and the per-app auth policies.",
        "Reconcile the systems of record (Okta (Universal Directory + Authentication Policies), Microsoft Entra ID (Conditional Access), The HR system of record for 'active worker') — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Typically 3–8% of active accounts have no MFA or are SMS-only, and one or two sensitive apps have MFA set to 'optional' — each named with the user or app id."
      ],
      "references": [
        {
          "title": "NIST SP 800-63B Authenticator Assurance Levels",
          "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
        },
        {
          "title": "CISA — Implementing Phishing-Resistant MFA",
          "url": "https://www.cisa.gov/resources-tools/resources/implementing-phishing-resistant-mfa"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_mfa_coverage_mcp.py",
          "url": "/audit-code/iam/03_mfa_coverage_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"MFA coverage\" (a csv of every active user joined to their enrolled authentication factors (factor type + enrolment date)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"MFA coverage\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Reconcile the active-user roster against factor enrolment and the per-app auth policies. PASS: every active human account has at least one phishing-resistant factor (FIDO2/WebAuthn or platform passkey); every application handling confidential/regulated data REQUIRES MFA (not 'optional'); no account relies on SMS or voice as its only factor. Exceptions: active accounts with zero factors or SMS-only, and sensitive apps where MFA is optional or disabled. The evidence — A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Okta (Universal Directory + Authentication Policies) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Okta (Universal Directory + Authentication Policies) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Okta (Universal Directory + Authentication Policies); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"MFA coverage\" Audit Evidence\n\nThe test:\nReconcile the active-user roster against factor enrolment and the per-app auth policies. PASS: every active human account has at least one phishing-resistant factor (FIDO2/WebAuthn or platform passkey); every application handling confidential/regulated data REQUIRES MFA (not 'optional'); no account relies on SMS or voice as its only factor. Exceptions: active accounts with zero factors or SMS-only, and sensitive apps where MFA is optional or disabled.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date))\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"MFA coverage\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"MFA coverage\" control must cover\n# fragment: mfa_coverage_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "mfa_coverage_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"MFA coverage\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the mfa coverage control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the mfa coverage control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for mfa coverage against comparable organisations in the sector",
            "Obtain evidence that the mfa coverage control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"MFA coverage\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"MFA coverage\" control?",
          "options": [
            "A point-in-time screenshot of one system's mfa coverage settings, captured during the walkthrough",
            "The A CSV of every active user joined to their enrolled authentication factors (factor type + enrolment date), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the mfa coverage control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's mfa coverage capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"MFA coverage\"?",
          "options": [
            "From Okta (Universal Directory + Authentication Policies) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how mfa coverage works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Okta (Universal Directory + Authentication Policies)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"MFA coverage\"?",
          "options": [
            "The external audit firm, since it is the party examining the mfa coverage control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the mfa coverage data is shared, so the accountability sits with no one in particular",
            "IAM — owns the IdP and the authentication policies, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM — owns the IdP and the authentication policies owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"MFA coverage\", which part stays with the human auditor?",
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
          "id": "iam-03-q7",
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
          "id": "iam-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"MFA coverage\", which of these is a realistic reportable finding?",
          "options": [
            "Typically 3–8% of active accounts have no MFA or are SMS-only, and one or two sensitive apps have MFA set to 'optional' — each named with the user or app id.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Typically 3–8% of active accounts have no MFA or are SMS-only, and one or two sensitive apps have MFA set to 'optional' — each named with the user or app id. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-03-q9",
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
          "id": "iam-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"MFA coverage\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind mfa coverage, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-04",
    "order": 4,
    "title": "Privileged access management",
    "subtitle": "Agentic technical & privacy audit of the privileged access management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Privileged access management\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Enumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault. PASS: each is vaulted with automatic rotation, requires MFA + approval/checkout, prefers JIT over standing access, and sessions are logged/recorded; break-glass accounts are sealed and alert on use. Exceptions: privileged accounts NOT in the vault ('discovered, not managed'), unjustified standing admin, shared admin credentials, and break-glass used without a corresponding incident.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (CyberArk / Delinea / BeyondTrust (PAM); Active Directory (privileged groups); Microsoft Entra PIM + AWS/Azure/GCP IAM (cloud admin roles)) as tools — e.g. `Get-ADGroupMember 'Domain Admins','Enterprise Admins','Schema Admins',`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users",
        "The PAM vault inventory — which privileged credentials are vaulted, rotated, and checkout-controlled",
        "Session checkout / recording logs for privileged access",
        "The standing-vs-just-in-time (JIT) grant list, and break-glass account usage records"
      ],
      "system": [
        "CyberArk / Delinea / BeyondTrust (PAM)",
        "Active Directory (privileged groups)",
        "Microsoft Entra PIM + AWS/Azure/GCP IAM (cloud admin roles)"
      ],
      "dataOwner": [
        "Privileged Access Management team — owns the vault and policy",
        "Platform / infrastructure owners — own the admin accounts",
        "Security operations — monitor privileged sessions"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-04-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Privileged access management",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Privileged access management\" as a repeatable agentic workflow: pull the real evidence (The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Privileged access management\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CyberArk / Delinea / BeyondTrust (PAM), Active Directory (privileged groups), Microsoft Entra PIM + AWS/Azure/GCP IAM (cloud admin roles) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Get-ADGroupMember 'Domain Admins','Enterprise Admins','Schema Admins','Administr` — read-only, against the systems of record.",
        "The test itself is specific. Enumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault. PASS: each is vaulted with automatic rotation, requires MFA + approval/checkout, prefers JIT over standing access, and sessions are logged/recorded; break-glass accounts are sealed and alert on use. Exceptions: privileged accounts NOT in the vault ('discovered, not managed'), unjustified standing admin, shared admin credentials, and break-glass used without a corresponding incident. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_privileged_access_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CyberArk / Delinea / BeyondTrust (PAM) and Active Directory (privileged groups) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_privileged_access_management_mcp.py` to expose it to your agent — or `python 04_privileged_access_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull CyberArk / Delinea / BeyondTrust (PAM) · Active Directory (privileged groups)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Privileged access management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AD:      Get-ADGroupMember 'Domain Admins','Enterprise Admins','Schema Admins','Administrators' -Recursive\nEntra:   Get-MgRoleManagementDirectoryRoleAssignment  +  PIM eligible vs active assignments\nAWS:     aws iam list-entities-for-policy --policy-arn arn:aws:iam::aws:policy/AdministratorAccess  + Access Analyzer\nCyberArk: 'accounts discovered (DNA/Discovery) vs onboarded' reconciliation export"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users.",
        "The test: Enumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault.",
        "Reconcile the systems of record (CyberArk / Delinea / BeyondTrust (PAM), Active Directory (privileged groups), Microsoft Entra PIM + AWS/Azure/GCP IAM (cloud admin roles)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Privileged accounts discovered on hosts and in cloud that are not vaulted, plus standing Domain Admin members beyond the approved break-glass set — each named."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-6(5) Privileged Accounts",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "CISA — Privileged Access Management guidance",
          "url": "https://www.cisa.gov/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_privileged_access_management_mcp.py",
          "url": "/audit-code/iam/04_privileged_access_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Privileged access management\" (the privileged-principal inventory — domain/enterprise admins, cloud admin roles, root, local admins, and application super-users), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Privileged access management\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Enumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault. PASS: each is vaulted with automatic rotation, requires MFA + approval/checkout, prefers JIT over standing access, and sessions are logged/recorded; break-glass accounts are sealed and alert on use. Exceptions: privileged accounts NOT in the vault ('discovered, not managed'), unjustified standing admin, shared admin credentials, and break-glass used without a corresponding incident. The evidence — The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CyberArk / Delinea / BeyondTrust (PAM) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CyberArk / Delinea / BeyondTrust (PAM) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CyberArk / Delinea / BeyondTrust (PAM); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Privileged access management\" Audit Evidence\n\nThe test:\nEnumerate every privileged principal across directory, cloud, and hosts, then reconcile against the PAM vault. PASS: each is vaulted with automatic rotation, requires MFA + approval/checkout, prefers JIT over standing access, and sessions are logged/recorded; break-glass accounts are sealed and alert on use. Exceptions: privileged accounts NOT in the vault ('discovered, not managed'), unjustified standing admin, shared admin credentials, and break-glass used without a corresponding incident.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Privileged access management\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Privileged access management\" control must cover\n# fragment: privileged_access_management_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "privileged_access_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Privileged access management\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the privileged access management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the privileged access management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for privileged access management against comparable organisations in the sector",
            "Obtain evidence that the privileged access management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Privileged access management\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Privileged access management\" control?",
          "options": [
            "A point-in-time screenshot of one system's privileged access management settings, captured during the walkthrough",
            "The The privileged-principal inventory — Domain/Enterprise Admins, cloud admin roles, root, local admins, and application super-users, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the privileged access management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's privileged access management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Privileged access management\"?",
          "options": [
            "From CyberArk / Delinea / BeyondTrust (PAM) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how privileged access management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. CyberArk / Delinea / BeyondTrust (PAM)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Privileged access management\"?",
          "options": [
            "The external audit firm, since it is the party examining the privileged access management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the privileged access management data is shared, so the accountability sits with no one in particular",
            "Privileged Access Management team — owns the vault and policy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Privileged Access Management team — owns the vault and policy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Privileged access management\", which part stays with the human auditor?",
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
          "id": "iam-04-q7",
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
          "id": "iam-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Privileged access management\", which of these is a realistic reportable finding?",
          "options": [
            "Privileged accounts discovered on hosts and in cloud that are not vaulted, plus standing Domain Admin members beyond the approved break-glass set — each named.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Privileged accounts discovered on hosts and in cloud that are not vaulted, plus standing Domain Admin members beyond the approved break-glass set — each named. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-04-q9",
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
          "id": "iam-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Privileged access management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind privileged access management, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-05",
    "order": 5,
    "title": "Session controls",
    "subtitle": "Agentic technical & privacy audit of the session controls control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Session controls\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Review session controls across the IdP and the sensitive applications. PASS: idle and absolute session limits are set in proportion to sensitivity (e.g. ≤15-min idle for admin consoles); refresh-token lifetime is bounded and rotated; step-up reauthentication is required for high-risk actions; sessions are revoked on logout and termination; cookies are HttpOnly/Secure/SameSite. Exceptions: unbounded or over-long sessions on sensitive apps, no step-up, refresh tokens never rotated, sessions not revoked on deprovision.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Okta / Microsoft Entra ID (session + token policies); The applications' own session configuration; API gateway / reverse proxy (token validation)) as tools — e.g. `GET /api/v1/policies?type=ACCESS_POLICY`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules",
        "Per-application session configuration — cookie flags (HttpOnly/Secure/SameSite) and idle/absolute timeouts",
        "Conditional-access / sign-in-frequency policies (step-up reauth, device binding)",
        "Evidence that tokens/sessions are revoked on logout and on deprovisioning"
      ],
      "system": [
        "Okta / Microsoft Entra ID (session + token policies)",
        "The applications' own session configuration",
        "API gateway / reverse proxy (token validation)"
      ],
      "dataOwner": [
        "IAM — owns IdP session policy",
        "Application owners — own app-level session config",
        "AppSec — reviews cookie/token handling"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-05-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Session controls",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Session controls\" as a repeatable agentic workflow: pull the real evidence (The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Session controls\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Okta / Microsoft Entra ID (session + token policies), The applications' own session configuration, API gateway / reverse proxy (token validation) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `GET /api/v1/policies?type=ACCESS_POLICY` — read-only, against the systems of record.",
        "The test itself is specific. Review session controls across the IdP and the sensitive applications. PASS: idle and absolute session limits are set in proportion to sensitivity (e.g. ≤15-min idle for admin consoles); refresh-token lifetime is bounded and rotated; step-up reauthentication is required for high-risk actions; sessions are revoked on logout and termination; cookies are HttpOnly/Secure/SameSite. Exceptions: unbounded or over-long sessions on sensitive apps, no step-up, refresh tokens never rotated, sessions not revoked on deprovision. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_session_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Okta / Microsoft Entra ID (session + token policies) and The applications' own session configuration (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_session_controls_mcp.py` to expose it to your agent — or `python 05_session_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Okta / Microsoft Entra ID (session + token policies) · The applications' own session configuration",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Session controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Okta:  GET /api/v1/policies?type=ACCESS_POLICY  (session rules) and the global session policy export\nEntra: Conditional Access 'Sign-in frequency' + 'Persistent browser session' policy export\nApp:   inspect Set-Cookie flags + documented idle/absolute timeouts for each sensitive app\nToken: confirm refresh-token rotation + revocation-on-logout in the OAuth/OIDC config"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules.",
        "The test: Review session controls across the IdP and the sensitive applications.",
        "Reconcile the systems of record (Okta / Microsoft Entra ID (session + token policies), The applications' own session configuration, API gateway / reverse proxy (token validation)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An admin application with a 12-hour idle session and refresh tokens that never rotate, so a stolen token stays valid far beyond the user's presence."
      ],
      "references": [
        {
          "title": "OWASP Session Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-63B — Reauthentication",
          "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_session_controls_mcp.py",
          "url": "/audit-code/iam/05_session_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Session controls\" (the idp session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Session controls\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Review session controls across the IdP and the sensitive applications. PASS: idle and absolute session limits are set in proportion to sensitivity (e.g. ≤15-min idle for admin consoles); refresh-token lifetime is bounded and rotated; step-up reauthentication is required for high-risk actions; sessions are revoked on logout and termination; cookies are HttpOnly/Secure/SameSite. Exceptions: unbounded or over-long sessions on sensitive apps, no step-up, refresh tokens never rotated, sessions not revoked on deprovision. The evidence — The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Okta / Microsoft Entra ID (session + token policies) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Okta / Microsoft Entra ID (session + token policies) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Okta / Microsoft Entra ID (session + token policies); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Session controls\" Audit Evidence\n\nThe test:\nReview session controls across the IdP and the sensitive applications. PASS: idle and absolute session limits are set in proportion to sensitivity (e.g. ≤15-min idle for admin consoles); refresh-token lifetime is bounded and rotated; step-up reauthentication is required for high-risk actions; sessions are revoked on logout and termination; cookies are HttpOnly/Secure/SameSite. Exceptions: unbounded or over-long sessions on sensitive apps, no step-up, refresh tokens never rotated, sessions not revoked on deprovision.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Session controls\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Session controls\" control must cover\n# fragment: session_controls_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "session_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Session controls\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the session controls control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the session controls control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for session controls against comparable organisations in the sector",
            "Obtain evidence that the session controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Session controls\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Session controls\" control?",
          "options": [
            "A point-in-time screenshot of one system's session controls settings, captured during the walkthrough",
            "The The IdP session/token policy export — idle timeout, absolute lifetime, refresh-token lifetime + rotation, reauthentication rules, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the session controls control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's session controls capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Session controls\"?",
          "options": [
            "From Okta / Microsoft Entra ID (session + token policies) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how session controls works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Okta / Microsoft Entra ID (session + token policies)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Session controls\"?",
          "options": [
            "The external audit firm, since it is the party examining the session controls control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the session controls data is shared, so the accountability sits with no one in particular",
            "IAM — owns IdP session policy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM — owns IdP session policy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Session controls\", which part stays with the human auditor?",
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
          "id": "iam-05-q7",
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
          "id": "iam-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Session controls\", which of these is a realistic reportable finding?",
          "options": [
            "An admin application with a 12-hour idle session and refresh tokens that never rotate, so a stolen token stays valid far beyond the user's presence.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An admin application with a 12-hour idle session and refresh tokens that never rotate, so a stolen token stays valid far beyond the user's presence. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-05-q9",
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
          "id": "iam-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Session controls\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind session controls, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-06",
    "order": 6,
    "title": "Access reviews and recertifications",
    "subtitle": "Agentic technical & privacy audit of the access reviews and recertifications control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 8,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Access reviews and recertifications\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Examine the most recent recertification campaign for in-scope high-risk entitlements. PASS: every high-risk entitlement was reviewed by an accountable owner within the cycle (e.g. quarterly for privileged, annually for standard); 'revoke' decisions were actually executed within SLA; and no reviewer certified their own access. Exceptions: entitlements never included in any campaign, revokes decided but not executed, a reviewer approving 100% of items in minutes (rubber-stamping), or reviewer = grantee.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine); The IGA entitlement catalogue; ITSM (to correlate revoke decisions with actual removals)) as tools — e.g. `SailPoint: certification campaign export (item-level decisions + decis`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps",
        "The entitlement catalogue under review (especially high-risk/privileged entitlements)",
        "Revocation evidence for every 'revoke' decision, with the time-to-revoke",
        "Rubber-stamp metrics — approve-all rate and time-per-decision per reviewer"
      ],
      "system": [
        "SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine)",
        "The IGA entitlement catalogue",
        "ITSM (to correlate revoke decisions with actual removals)"
      ],
      "dataOwner": [
        "IAM / Identity Governance — runs the campaigns",
        "Entitlement / business owners — perform the reviews",
        "Internal audit — independent assurance"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-06-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Access reviews and recertifications",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Access reviews and recertifications\" as a repeatable agentic workflow: pull the real evidence (The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Access reviews and recertifications\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine), The IGA entitlement catalogue, ITSM (to correlate revoke decisions with actual removals) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SailPoint: certification campaign export (item-level decisions + decision timest` — read-only, against the systems of record.",
        "The test itself is specific. Examine the most recent recertification campaign for in-scope high-risk entitlements. PASS: every high-risk entitlement was reviewed by an accountable owner within the cycle (e.g. quarterly for privileged, annually for standard); 'revoke' decisions were actually executed within SLA; and no reviewer certified their own access. Exceptions: entitlements never included in any campaign, revokes decided but not executed, a reviewer approving 100% of items in minutes (rubber-stamping), or reviewer = grantee. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_access_reviews_and_recertifications_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine) and The IGA entitlement catalogue (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_access_reviews_and_recertifications_mcp.py` to expose it to your agent — or `python 06_access_reviews_and_recertifications_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine) · The IGA entitlement catalogue",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Access reviews and recertifications\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SailPoint: certification campaign export (item-level decisions + decision timestamps)\nEntra:    GET /identityGovernance/accessReviews/definitions/{id}/instances/{id}/decisions\nCorrelate: each 'revoke' decision → the deprovisioning ticket/event that executed it\nAnalytics: per-reviewer approve-rate and median seconds-per-decision (rubber-stamp signal)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps.",
        "The test: Examine the most recent recertification campaign for in-scope high-risk entitlements.",
        "Reconcile the systems of record (SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine), The IGA entitlement catalogue, ITSM (to correlate revoke decisions with actual removals)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A privileged group that appears in no certification campaign, and 'revoke' decisions with no corresponding removal 60+ days later — the review happened on paper but changed nothing."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-2(j) Account Reviews",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "SOX ITGC — periodic access reviews",
          "url": "https://pcaobus.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_access_reviews_and_recertifications_mcp.py",
          "url": "/audit-code/iam/06_access_reviews_and_recertifications_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Access reviews and recertifications\" (the access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Access reviews and recertifications\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Examine the most recent recertification campaign for in-scope high-risk entitlements. PASS: every high-risk entitlement was reviewed by an accountable owner within the cycle (e.g. quarterly for privileged, annually for standard); 'revoke' decisions were actually executed within SLA; and no reviewer certified their own access. Exceptions: entitlements never included in any campaign, revokes decided but not executed, a reviewer approving 100% of items in minutes (rubber-stamping), or reviewer = grantee. The evidence — The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Access reviews and recertifications\" Audit Evidence\n\nThe test:\nExamine the most recent recertification campaign for in-scope high-risk entitlements. PASS: every high-risk entitlement was reviewed by an accountable owner within the cycle (e.g. quarterly for privileged, annually for standard); 'revoke' decisions were actually executed within SLA; and no reviewer certified their own access. Exceptions: entitlements never included in any campaign, revokes decided but not executed, a reviewer approving 100% of items in minutes (rubber-stamping), or reviewer = grantee.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Access reviews and recertifications\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Access reviews and recertifications\" control must cover\n# fragment: access_reviews_recertifications_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "access_reviews_recertifications_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Access reviews and recertifications\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the access reviews and recertifications control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the access reviews and recertifications control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for access reviews and recertifications against comparable organisations in the sector",
            "Obtain evidence that the access reviews and recertifications control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Access reviews and recertifications\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Access reviews and recertifications\" control?",
          "options": [
            "A point-in-time screenshot of one system's access reviews and recertifications settings, captured during the walkthrough",
            "The The access-certification campaign records — reviewer, items reviewed, approve/revoke decisions, and timestamps, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the access reviews and recertifications control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's access reviews and recertifications capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Access reviews and recertifications\"?",
          "options": [
            "From SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how access reviews and recertifications works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SailPoint / Saviynt / Microsoft Entra ID Access Reviews (the IGA campaign engine)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Access reviews and recertifications\"?",
          "options": [
            "The external audit firm, since it is the party examining the access reviews and recertifications control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the access reviews and recertifications data is shared, so the accountability sits with no one in particular",
            "IAM / Identity Governance — runs the campaigns, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM / Identity Governance — runs the campaigns owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Access reviews and recertifications\", which part stays with the human auditor?",
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
          "id": "iam-06-q7",
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
          "id": "iam-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Access reviews and recertifications\", which of these is a realistic reportable finding?",
          "options": [
            "A privileged group that appears in no certification campaign, and 'revoke' decisions with no corresponding removal 60+ days later — the review happened on paper but changed nothing.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A privileged group that appears in no certification campaign, and 'revoke' decisions with no corresponding removal 60+ days later — the review happened on paper but changed nothing. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-06-q9",
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
          "id": "iam-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Access reviews and recertifications\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind access reviews and recertifications, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-07",
    "order": 7,
    "title": "Service / generic / local accounts",
    "subtitle": "Agentic technical & privacy audit of the service / generic / local accounts control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Service / generic / local accounts\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Inventory every service, generic, and local account. PASS: each has a named human owner and documented purpose; service accounts are non-interactive, least-privileged, and vaulted + rotated (or gMSA); local-admin passwords are unique per host (Windows LAPS); no shared interactive generic accounts exist. Exceptions: ownerless service accounts, service accounts in privileged groups, shared interactive logins, identical local-admin passwords reused across hosts, and passwords years old.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Active Directory (service accounts, gMSA, adminCount); Windows LAPS (local-admin password management); PAM vault (service-account custody)) as tools — e.g. `Get-ADUser -Filter {ServicePrincipalName -like '*'} -Properties Passwo`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The non-human / service-account inventory — each account with a named human owner and documented purpose",
        "The local-administrator inventory per host, and whether each is LAPS-managed (unique per host)",
        "The generic/shared-account list and whether each permits interactive logon",
        "Password age / rotation and vaulting status for every service account"
      ],
      "system": [
        "Active Directory (service accounts, gMSA, adminCount)",
        "Windows LAPS (local-admin password management)",
        "PAM vault (service-account custody)",
        "Host/endpoint inventory"
      ],
      "dataOwner": [
        "IAM — owns the account standard",
        "Server / application owners — own their service accounts",
        "Platform security — owns LAPS + vaulting"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-07-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Service / generic / local accounts",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Service / generic / local accounts\" as a repeatable agentic workflow: pull the real evidence (The non-human / service-account inventory — each account with a named human owner and documented purpose) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Service / generic / local accounts\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the non-human / service-account inventory — each account with a named human owner and documented purpose, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Active Directory (service accounts, gMSA, adminCount), Windows LAPS (local-admin password management), PAM vault (service-account custody) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Get-ADUser -Filter {ServicePrincipalName -like '*'} -Properties PasswordLastSet,` — read-only, against the systems of record.",
        "The test itself is specific. Inventory every service, generic, and local account. PASS: each has a named human owner and documented purpose; service accounts are non-interactive, least-privileged, and vaulted + rotated (or gMSA); local-admin passwords are unique per host (Windows LAPS); no shared interactive generic accounts exist. Exceptions: ownerless service accounts, service accounts in privileged groups, shared interactive logins, identical local-admin passwords reused across hosts, and passwords years old. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_service_generic_local_accounts_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Active Directory (service accounts, gMSA, adminCount) and Windows LAPS (local-admin password management) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_service_generic_local_accounts_mcp.py` to expose it to your agent — or `python 07_service_generic_local_accounts_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Active Directory (service accounts, gMSA, adminCount) · Windows LAPS (local-admin password management)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Service / generic / local accounts\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AD:   Get-ADUser -Filter {ServicePrincipalName -like '*'} -Properties PasswordLastSet,adminCount,MemberOf\nAD:   find service accounts where PasswordLastSet is years old, or with adminCount=1 (privileged)\nLAPS: report ms-Mcs-AdmPwd / Windows-LAPS attribute coverage across the host estate\nRisk: list Kerberoastable SPNs (service accounts with weak/old passwords exposed to offline cracking)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The non-human / service-account inventory — each account with a named human owner and documented purpose.",
        "The test: Inventory every service, generic, and local account.",
        "Reconcile the systems of record (Active Directory (service accounts, gMSA, adminCount), Windows LAPS (local-admin password management), PAM vault (service-account custody)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A service account with a 5-year-old password sitting in Domain Admins, and a single local-admin password reused across 400 workstations (one cracked hash = lateral movement everywhere)."
      ],
      "references": [
        {
          "title": "Microsoft — Windows LAPS",
          "url": "https://learn.microsoft.com/windows-server/identity/laps/laps-overview"
        },
        {
          "title": "NIST SP 800-53 IA-5 Authenticator Management",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_service_generic_local_accounts_mcp.py",
          "url": "/audit-code/iam/07_service_generic_local_accounts_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Service / generic / local accounts\" (the non-human / service-account inventory — each account with a named human owner and documented purpose), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Service / generic / local accounts\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Inventory every service, generic, and local account. PASS: each has a named human owner and documented purpose; service accounts are non-interactive, least-privileged, and vaulted + rotated (or gMSA); local-admin passwords are unique per host (Windows LAPS); no shared interactive generic accounts exist. Exceptions: ownerless service accounts, service accounts in privileged groups, shared interactive logins, identical local-admin passwords reused across hosts, and passwords years old. The evidence — The non-human / service-account inventory — each account with a named human owner and documented purpose — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Active Directory (service accounts, gMSA, adminCount) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Active Directory (service accounts, gMSA, adminCount) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Active Directory (service accounts, gMSA, adminCount); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Service / generic / local accounts\" Audit Evidence\n\nThe test:\nInventory every service, generic, and local account. PASS: each has a named human owner and documented purpose; service accounts are non-interactive, least-privileged, and vaulted + rotated (or gMSA); local-admin passwords are unique per host (Windows LAPS); no shared interactive generic accounts exist. Exceptions: ownerless service accounts, service accounts in privileged groups, shared interactive logins, identical local-admin passwords reused across hosts, and passwords years old.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The non-human / service-account inventory — each account with a named human owner and documented purpose)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Service / generic / local accounts\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Service / generic / local accounts\" control must cover\n# fragment: service_generic_local_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "service_generic_local_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Service / generic / local accounts\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the service / generic / local accounts control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the service / generic / local accounts control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for service / generic / local accounts against comparable organisations in the sector",
            "Obtain evidence that the service / generic / local accounts control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Service / generic / local accounts\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Service / generic / local accounts\" control?",
          "options": [
            "A point-in-time screenshot of one system's service / generic / local accounts settings, captured during the walkthrough",
            "The The non-human / service-account inventory — each account with a named human owner and documented purpose, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the service / generic / local accounts control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's service / generic / local accounts capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Service / generic / local accounts\"?",
          "options": [
            "From Active Directory (service accounts, gMSA, adminCount) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how service / generic / local accounts works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Active Directory (service accounts, gMSA, adminCount)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Service / generic / local accounts\"?",
          "options": [
            "The external audit firm, since it is the party examining the service / generic / local accounts control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the service / generic / local accounts data is shared, so the accountability sits with no one in particular",
            "IAM — owns the account standard, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM — owns the account standard owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Service / generic / local accounts\", which part stays with the human auditor?",
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
          "id": "iam-07-q7",
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
          "id": "iam-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Service / generic / local accounts\", which of these is a realistic reportable finding?",
          "options": [
            "A service account with a 5-year-old password sitting in Domain Admins, and a single local-admin password reused across 400 workstations (one cracked hash = lateral movement everywhere).",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A service account with a 5-year-old password sitting in Domain Admins, and a single local-admin password reused across 400 workstations (one cracked hash = lateral movement everywhere). A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-07-q9",
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
          "id": "iam-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Service / generic / local accounts\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind service / generic / local accounts, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-08",
    "order": 8,
    "title": "Least privilege and SoD",
    "subtitle": "Agentic technical & privacy audit of the least privilege and sod control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Least privilege and SoD\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Run the SoD ruleset against current assignments and assess least privilege. PASS: no user holds a toxic combination without an approved, real mitigating control; entitlements trend toward least privilege (unused/over-broad access is removed). Exceptions: active SoD conflicts (e.g. a user who can both create and approve payments), over-entitled accounts with access far beyond their role, and conflicts 'accepted' with no genuine compensating control.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD); IGA platform (cross-app entitlements); Cloud IAM (AWS/Azure/GCP policies)) as tools — e.g. `SAP GRC: Access Risk Analysis (ARA) report — user-level risk violation`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The entitlement-to-user assignment export (who holds what, across apps and cloud)",
        "The Segregation-of-Duties (SoD) ruleset — the toxic combinations (e.g. create-vendor + approve-payment)",
        "The SoD violations report — users currently holding conflicting entitlements",
        "Mitigating-control evidence for any conflict that was risk-accepted"
      ],
      "system": [
        "ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD)",
        "IGA platform (cross-app entitlements)",
        "Cloud IAM (AWS/Azure/GCP policies)"
      ],
      "dataOwner": [
        "IAM / GRC — owns the ruleset",
        "Business process owners — own the SoD policy for their process",
        "Internal audit / Finance — for financially-significant SoD"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-08-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Least privilege and SoD",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Least privilege and SoD\" as a repeatable agentic workflow: pull the real evidence (The entitlement-to-user assignment export (who holds what, across apps and cloud)) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Least privilege and SoD\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the entitlement-to-user assignment export (who holds what, across apps and cloud), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD), IGA platform (cross-app entitlements), Cloud IAM (AWS/Azure/GCP policies) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SAP GRC: Access Risk Analysis (ARA) report — user-level risk violations against ` — read-only, against the systems of record.",
        "The test itself is specific. Run the SoD ruleset against current assignments and assess least privilege. PASS: no user holds a toxic combination without an approved, real mitigating control; entitlements trend toward least privilege (unused/over-broad access is removed). Exceptions: active SoD conflicts (e.g. a user who can both create and approve payments), over-entitled accounts with access far beyond their role, and conflicts 'accepted' with no genuine compensating control. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_least_privilege_and_sod_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD) and IGA platform (cross-app entitlements) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_least_privilege_and_sod_mcp.py` to expose it to your agent — or `python 08_least_privilege_and_sod_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD) · IGA platform (cross-app entitlements)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Least privilege and SoD\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SAP GRC: Access Risk Analysis (ARA) report — user-level risk violations against the ruleset\nIGA:     export entitlement assignments and join against the toxic-combination ruleset\nAWS:     IAM Access Analyzer 'unused access' + Access Advisor last-accessed (least-privilege evidence)\nCloud:   flag policies granting wildcard '*' actions or '*' resources"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The entitlement-to-user assignment export (who holds what, across apps and cloud).",
        "The test: Run the SoD ruleset against current assignments and assess least privilege.",
        "Reconcile the systems of record (ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD), IGA platform (cross-app entitlements), Cloud IAM (AWS/Azure/GCP policies)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A dozen users who can both create and approve vendor payments with no compensating control, and cloud roles granting wildcard '*' actions far beyond what the workload uses."
      ],
      "references": [
        {
          "title": "NIST SP 800-53 AC-5 (SoD) / AC-6 (least privilege)",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "ISACA — Segregation of Duties",
          "url": "https://www.isaca.org/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_least_privilege_and_sod_mcp.py",
          "url": "/audit-code/iam/08_least_privilege_and_sod_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Least privilege and SoD\" (the entitlement-to-user assignment export (who holds what, across apps and cloud)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Least privilege and SoD\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Run the SoD ruleset against current assignments and assess least privilege. PASS: no user holds a toxic combination without an approved, real mitigating control; entitlements trend toward least privilege (unused/over-broad access is removed). Exceptions: active SoD conflicts (e.g. a user who can both create and approve payments), over-entitled accounts with access far beyond their role, and conflicts 'accepted' with no genuine compensating control. The evidence — The entitlement-to-user assignment export (who holds what, across apps and cloud) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Least privilege and SoD\" Audit Evidence\n\nThe test:\nRun the SoD ruleset against current assignments and assess least privilege. PASS: no user holds a toxic combination without an approved, real mitigating control; entitlements trend toward least privilege (unused/over-broad access is removed). Exceptions: active SoD conflicts (e.g. a user who can both create and approve payments), over-entitled accounts with access far beyond their role, and conflicts 'accepted' with no genuine compensating control.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The entitlement-to-user assignment export (who holds what, across apps and cloud))\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Least privilege and SoD\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Least privilege and SoD\" control must cover\n# fragment: least_privilege_sod_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "least_privilege_sod_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Least privilege and SoD\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the least privilege and sod control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the least privilege and sod control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for least privilege and sod against comparable organisations in the sector",
            "Obtain evidence that the least privilege and sod control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Least privilege and SoD\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Least privilege and SoD\" control?",
          "options": [
            "A point-in-time screenshot of one system's least privilege and sod settings, captured during the walkthrough",
            "The The entitlement-to-user assignment export (who holds what, across apps and cloud), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the least privilege and sod control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's least privilege and sod capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Least privilege and SoD\"?",
          "options": [
            "From ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how least privilege and sod works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. ERP GRC — SAP GRC Access Control / Oracle Risk Management (financial SoD)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Least privilege and SoD\"?",
          "options": [
            "The external audit firm, since it is the party examining the least privilege and sod control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the least privilege and sod data is shared, so the accountability sits with no one in particular",
            "IAM / GRC — owns the ruleset, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM / GRC — owns the ruleset owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Least privilege and SoD\", which part stays with the human auditor?",
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
          "id": "iam-08-q7",
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
          "id": "iam-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Least privilege and SoD\", which of these is a realistic reportable finding?",
          "options": [
            "A dozen users who can both create and approve vendor payments with no compensating control, and cloud roles granting wildcard '*' actions far beyond what the workload uses.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A dozen users who can both create and approve vendor payments with no compensating control, and cloud roles granting wildcard '*' actions far beyond what the workload uses. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-08-q9",
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
          "id": "iam-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Least privilege and SoD\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind least privilege and sod, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-09",
    "order": 9,
    "title": "Certificate management",
    "subtitle": "Agentic technical & privacy audit of the certificate management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Certificate management\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Inventory all TLS, client, and code-signing certificates. PASS: every certificate is inventoried and owned, uses approved algorithms and key sizes (RSA-2048+/ECDSA-P256+, SHA-256+), is not expired or expiring-without-an-owner, auto-renews where possible, and has its private key HSM-protected with least-privilege access; no self-signed certs in production and no unmanaged wildcard sprawl. Exceptions: unknown or expired certs serving production, weak keys (RSA-1024/SHA-1), private keys world-readable on disk, and certs expiring with no renewal owner.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS); The issuing CA(s); Load balancers, web servers, and service meshes where certs terminate) as tools — e.g. `Inventory: Venafi/ACM export (CN, issuer, key, expiry, deployment)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed",
        "The CA hierarchy and issuance policy (what may be issued, to whom, with what constraints)",
        "Renewal evidence — which certs auto-renew (ACME) vs are renewed manually",
        "Private-key protection evidence — HSM vs filesystem, and who can read the key"
      ],
      "system": [
        "Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS)",
        "The issuing CA(s)",
        "Load balancers, web servers, and service meshes where certs terminate"
      ],
      "dataOwner": [
        "PKI / Cryptography team — owns the CA and policy",
        "Platform / application owners — own the endpoints where certs are deployed"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-09-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Certificate management",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Certificate management\" as a repeatable agentic workflow: pull the real evidence (The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Certificate management\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS), The issuing CA(s), Load balancers, web servers, and service meshes where certs terminate — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Inventory: Venafi/ACM export (CN, issuer, key, expiry, deployment)` — read-only, against the systems of record.",
        "The test itself is specific. Inventory all TLS, client, and code-signing certificates. PASS: every certificate is inventoried and owned, uses approved algorithms and key sizes (RSA-2048+/ECDSA-P256+, SHA-256+), is not expired or expiring-without-an-owner, auto-renews where possible, and has its private key HSM-protected with least-privilege access; no self-signed certs in production and no unmanaged wildcard sprawl. Exceptions: unknown or expired certs serving production, weak keys (RSA-1024/SHA-1), private keys world-readable on disk, and certs expiring with no renewal owner. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_certificate_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS) and The issuing CA(s) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_certificate_management_mcp.py` to expose it to your agent — or `python 09_certificate_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS) · The issuing CA(s)",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Certificate management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Inventory: Venafi/ACM export (CN, issuer, key, expiry, deployment)\nDiscovery: query Certificate Transparency logs (crt.sh) for all certs issued for the org's domains\nEndpoint: nmap --script ssl-cert / openssl s_client -connect host:443 (algorithm + expiry of what's actually served)\nAD CS:    the issued-certificates database (templates, key archival, weak-key issuance)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed.",
        "The test: Inventory all TLS, client, and code-signing certificates.",
        "Reconcile the systems of record (Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS), The issuing CA(s), Load balancers, web servers, and service meshes where certs terminate) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Three expired certificates still serving production, several RSA-1024/SHA-1 certificates, and a wildcard certificate whose private key sits unprotected in a web root."
      ],
      "references": [
        {
          "title": "NIST SP 800-57 Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "CA/Browser Forum Baseline Requirements",
          "url": "https://cabforum.org/baseline-requirements-documents/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_certificate_management_mcp.py",
          "url": "/audit-code/iam/09_certificate_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Certificate management\" (the certificate inventory — cn/san, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Certificate management\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Inventory all TLS, client, and code-signing certificates. PASS: every certificate is inventoried and owned, uses approved algorithms and key sizes (RSA-2048+/ECDSA-P256+, SHA-256+), is not expired or expiring-without-an-owner, auto-renews where possible, and has its private key HSM-protected with least-privilege access; no self-signed certs in production and no unmanaged wildcard sprawl. Exceptions: unknown or expired certs serving production, weak keys (RSA-1024/SHA-1), private keys world-readable on disk, and certs expiring with no renewal owner. The evidence — The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Certificate management\" Audit Evidence\n\nThe test:\nInventory all TLS, client, and code-signing certificates. PASS: every certificate is inventoried and owned, uses approved algorithms and key sizes (RSA-2048+/ECDSA-P256+, SHA-256+), is not expired or expiring-without-an-owner, auto-renews where possible, and has its private key HSM-protected with least-privilege access; no self-signed certs in production and no unmanaged wildcard sprawl. Exceptions: unknown or expired certs serving production, weak keys (RSA-1024/SHA-1), private keys world-readable on disk, and certs expiring with no renewal owner.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Certificate management\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Certificate management\" control must cover\n# fragment: certificate_management_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "certificate_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Certificate management\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the certificate management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the certificate management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for certificate management against comparable organisations in the sector",
            "Obtain evidence that the certificate management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Certificate management\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Certificate management\" control?",
          "options": [
            "A point-in-time screenshot of one system's certificate management settings, captured during the walkthrough",
            "The The certificate inventory — CN/SAN, issuer, key type/size, signature algorithm, expiry, and where each cert is deployed, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the certificate management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's certificate management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Certificate management\"?",
          "options": [
            "From Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how certificate management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Venafi / Keyfactor / AWS Certificate Manager / internal PKI (AD CS)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Certificate management\"?",
          "options": [
            "The external audit firm, since it is the party examining the certificate management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the certificate management data is shared, so the accountability sits with no one in particular",
            "PKI / Cryptography team — owns the CA and policy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Cryptography team — owns the CA and policy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Certificate management\", which part stays with the human auditor?",
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
          "id": "iam-09-q7",
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
          "id": "iam-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Certificate management\", which of these is a realistic reportable finding?",
          "options": [
            "Three expired certificates still serving production, several RSA-1024/SHA-1 certificates, and a wildcard certificate whose private key sits unprotected in a web root.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Three expired certificates still serving production, several RSA-1024/SHA-1 certificates, and a wildcard certificate whose private key sits unprotected in a web root. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-09-q9",
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
          "id": "iam-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Certificate management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind certificate management, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-10",
    "order": 10,
    "title": "Zero trust",
    "subtitle": "Agentic technical & privacy audit of the zero trust control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Zero trust\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Sample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location. PASS: policies enforce least privilege per session, require MFA + a compliant/managed device, and continuously evaluate risk to revoke access; there is no 'on the corporate LAN = trusted'. Exceptions: resources reachable on the LAN with no auth/posture check, a VPN that grants flat subnet access, and policies keyed only to source IP.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf); ZTNA — Zscaler / Cloudflare Access / Netskope; Network microsegmentation (Illumio / NSX / cloud security groups)) as tools — e.g. `export Conditional Access policies + confirm Continuous Access Evaluat`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The access-policy matrix — for each sensitive resource, what identity + device posture + context is required",
        "The device-trust / posture signals that feed access decisions (compliant, managed, healthy)",
        "Segmentation evidence showing no implicit trust is granted by network location alone",
        "Continuous-evaluation / session-revocation logs (access pulled when risk rises mid-session)"
      ],
      "system": [
        "Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf)",
        "ZTNA — Zscaler / Cloudflare Access / Netskope",
        "Network microsegmentation (Illumio / NSX / cloud security groups)"
      ],
      "dataOwner": [
        "IAM — owns identity-based access policy",
        "Network security — owns segmentation/ZTNA",
        "Endpoint — owns device posture",
        "Security architecture — owns the zero-trust target state"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-10-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "Zero trust",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Zero trust\" as a repeatable agentic workflow: pull the real evidence (The access-policy matrix — for each sensitive resource, what identity + device posture + context is required) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"Zero trust\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the access-policy matrix — for each sensitive resource, what identity + device posture + context is required, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf), ZTNA — Zscaler / Cloudflare Access / Netskope, Network microsegmentation (Illumio / NSX / cloud security groups) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `export Conditional Access policies + confirm Continuous Access Evaluation (CAE) ` — read-only, against the systems of record.",
        "The test itself is specific. Sample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location. PASS: policies enforce least privilege per session, require MFA + a compliant/managed device, and continuously evaluate risk to revoke access; there is no 'on the corporate LAN = trusted'. Exceptions: resources reachable on the LAN with no auth/posture check, a VPN that grants flat subnet access, and policies keyed only to source IP. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_zero_trust_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf) and ZTNA — Zscaler / Cloudflare Access / Netskope (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_zero_trust_mcp.py` to expose it to your agent — or `python 10_zero_trust_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf) · ZTNA — Zscaler / Cloudflare Access / Netskope",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Zero trust\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Entra:  export Conditional Access policies + confirm Continuous Access Evaluation (CAE) is enabled\nPosture: Intune device-compliance state feeding device-based Conditional Access\nZTNA:   export the per-application access policy (identity + posture + context conditions)\nTest:   attempt to reach a sensitive resource from an untrusted segment / non-compliant device and confirm it is denied"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The access-policy matrix — for each sensitive resource, what identity + device posture + context is required.",
        "The test: Sample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location.",
        "Reconcile the systems of record (Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf), ZTNA — Zscaler / Cloudflare Access / Netskope, Network microsegmentation (Illumio / NSX / cloud security groups)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. An administrative console reachable on the corporate LAN with no device-posture requirement, and a VPN that drops users onto a flat subnet with broad reachability — classic implicit network trust."
      ],
      "references": [
        {
          "title": "NIST SP 800-207 Zero Trust Architecture",
          "url": "https://csrc.nist.gov/pubs/sp/800/207/final"
        },
        {
          "title": "CISA Zero Trust Maturity Model",
          "url": "https://www.cisa.gov/zero-trust-maturity-model"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "10_zero_trust_mcp.py",
          "url": "/audit-code/iam/10_zero_trust_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"Zero trust\" (the access-policy matrix — for each sensitive resource, what identity + device posture + context is required), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Zero trust\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Sample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location. PASS: policies enforce least privilege per session, require MFA + a compliant/managed device, and continuously evaluate risk to revoke access; there is no 'on the corporate LAN = trusted'. Exceptions: resources reachable on the LAN with no auth/posture check, a VPN that grants flat subnet access, and policies keyed only to source IP. The evidence — The access-policy matrix — for each sensitive resource, what identity + device posture + context is required — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"Zero trust\" Audit Evidence\n\nThe test:\nSample sensitive resources and verify access requires a verified identity AND device posture AND context on every request — not network location. PASS: policies enforce least privilege per session, require MFA + a compliant/managed device, and continuously evaluate risk to revoke access; there is no 'on the corporate LAN = trusted'. Exceptions: resources reachable on the LAN with no auth/posture check, a VPN that grants flat subnet access, and policies keyed only to source IP.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The access-policy matrix — for each sensitive resource, what identity + device posture + context is required)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Zero trust\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Zero trust\" control must cover\n# fragment: zero_trust_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "zero_trust_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Zero trust\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the zero trust control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the zero trust control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for zero trust against comparable organisations in the sector",
            "Obtain evidence that the zero trust control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Zero trust\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Zero trust\" control?",
          "options": [
            "A point-in-time screenshot of one system's zero trust settings, captured during the walkthrough",
            "The The access-policy matrix — for each sensitive resource, what identity + device posture + context is required, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the zero trust control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's zero trust capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Zero trust\"?",
          "options": [
            "From Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how zero trust works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Microsoft Entra Conditional Access / Okta + device trust (Intune / Jamf)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Zero trust\"?",
          "options": [
            "The external audit firm, since it is the party examining the zero trust control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the zero trust data is shared, so the accountability sits with no one in particular",
            "IAM — owns identity-based access policy, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "IAM — owns identity-based access policy owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Zero trust\", which part stays with the human auditor?",
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
          "id": "iam-10-q7",
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
          "id": "iam-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Zero trust\", which of these is a realistic reportable finding?",
          "options": [
            "An administrative console reachable on the corporate LAN with no device-posture requirement, and a VPN that drops users onto a flat subnet with broad reachability — classic implicit network trust.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. An administrative console reachable on the corporate LAN with no device-posture requirement, and a VPN that drops users onto a flat subnet with broad reachability — classic implicit network trust. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-10-q9",
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
          "id": "iam-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Zero trust\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind zero trust, so there is no overlap",
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
    "epochId": "iam",
    "id": "iam-11",
    "order": 11,
    "title": "PQC-ready certificate lifecycle",
    "subtitle": "Agentic technical & privacy audit of the pqc-ready certificate lifecycle control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"PQC-ready certificate lifecycle\" control for Identity & Access Management (IAM) is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess the certificate and PKI estate for quantum readiness. PASS: a complete CBOM exists; the classical algorithms in use are catalogued; crypto is agile (cert and key types can be rotated centrally); a migration plan to NIST PQC standards (ML-KEM / ML-DSA, FIPS 203/204) and hybrid certificates exists with timelines aligned to CNSA 2.0; and long-lived secrets are prioritised for harvest-now-decrypt-later (HNDL) risk. Exceptions: no crypto inventory, hardcoded/un-agile algorithms, long-lived RSA/ECC protecting data that must outlive a cryptographically-relevant quantum computer, and no vendor PQC commitment.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Identity & Access Management (IAM) systems of record (PKI with CBOM support — Venafi / Keyfactor; The TLS + code-signing estate; KMS / HSM) as tools — e.g. `generate a cryptography Bill of Materials (e.g. CycloneDX crypto-asset`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used",
        "The list of long-lived certificates/keys and the sensitivity + retention of the data they protect",
        "Crypto-agility evidence — whether cert/key algorithms can be rotated centrally without re-architecting apps",
        "The vendor / PKI post-quantum (PQC) roadmap and the org's migration plan"
      ],
      "system": [
        "PKI with CBOM support — Venafi / Keyfactor",
        "The TLS + code-signing estate",
        "KMS / HSM",
        "Vendor and third-party PKI roadmaps"
      ],
      "dataOwner": [
        "Cryptography / PKI team — owns the CBOM and migration",
        "Enterprise architecture — owns crypto-agility",
        "Vendor management — tracks supplier PQC readiness"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Identity & Access Management (IAM) controls."
      }
    },
    "badge": {
      "id": "iam-11-badge",
      "name": "Identity & Access Management (IAM) Auditor",
      "emoji": "🪪"
    },
    "wonder": {
      "name": "PQC-ready certificate lifecycle",
      "location": "Identity & Access Management (IAM)",
      "era": "Present Day",
      "emoji": "🪪"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"PQC-ready certificate lifecycle\" as a repeatable agentic workflow: pull the real evidence (The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used) with read-only agents, run the test against policy, and issue a defensible opinion on the Identity & Access Management (IAM) control.",
      "year": 2025,
      "overview": [
        "The \"PQC-ready certificate lifecycle\" sub-process is one of the controls an auditor must verify for Identity & Access Management (IAM). The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here PKI with CBOM support — Venafi / Keyfactor, The TLS + code-signing estate, KMS / HSM — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `generate a cryptography Bill of Materials (e.g. CycloneDX crypto-assets) across ` — read-only, against the systems of record.",
        "The test itself is specific. Assess the certificate and PKI estate for quantum readiness. PASS: a complete CBOM exists; the classical algorithms in use are catalogued; crypto is agile (cert and key types can be rotated centrally); a migration plan to NIST PQC standards (ML-KEM / ML-DSA, FIPS 203/204) and hybrid certificates exists with timelines aligned to CNSA 2.0; and long-lived secrets are prioritised for harvest-now-decrypt-later (HNDL) risk. Exceptions: no crypto inventory, hardcoded/un-agile algorithms, long-lived RSA/ECC protecting data that must outlive a cryptographically-relevant quantum computer, and no vendor PQC commitment. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_pqc_ready_certificate_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from PKI with CBOM support — Venafi / Keyfactor and The TLS + code-signing estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_pqc_ready_certificate_lifecycle_mcp.py` to expose it to your agent — or `python 11_pqc_ready_certificate_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Orphaned accounts and missing MFA",
        "when": "Recurring",
        "where": "Enterprise identity stores",
        "impact": "A leaver who kept access, a shared service account, or an MFA gap is the credential an attacker walks in with.",
        "body": [
          "Most intrusions are logins, not break-ins: stolen or stale credentials, accounts that outlived their owner, and admin access without MFA.",
          "Auditors test provisioning/deprovisioning, joiner-mover-leaver, MFA coverage, privileged access, and periodic access recertification with least privilege and SoD."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Identity & Access Management (IAM) scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull PKI with CBOM support — Venafi / Keyfactor · The TLS + code-signing estate",
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
          "event": "MGM/Okta-adjacent intrusions via help-desk + identity gaps",
          "highlight": true
        },
        {
          "year": 2021,
          "event": "US EO 14028 mandates MFA across federal systems"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"PQC-ready certificate lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "CBOM:  generate a cryptography Bill of Materials (e.g. CycloneDX crypto-assets) across the estate\nInventory: Venafi/Keyfactor crypto inventory (algorithm + key size + validity + location)\nScan:  probe endpoints for negotiated key-exchange and any hybrid PQC support\nMap:   join data sensitivity + retention period against certificate/key validity to score HNDL exposure"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used.",
        "The test: Assess the certificate and PKI estate for quantum readiness.",
        "Reconcile the systems of record (PKI with CBOM support — Venafi / Keyfactor, The TLS + code-signing estate, KMS / HSM) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No CBOM exists; long-lived RSA-2048 certificates protect records with a 25-year retention requirement (squarely in HNDL range); and no key vendor has a published PQC timeline."
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 (PQC standards)",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "NSA CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_pqc_ready_certificate_lifecycle_mcp.py",
          "url": "/audit-code/iam/11_pqc_ready_certificate_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Identity & Access Management (IAM) evidence for \"PQC-ready certificate lifecycle\" (the cryptographic inventory / cbom (cryptographic bill of materials) for certificates and key-exchange — algorithms, key sizes, and where each is used), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"PQC-ready certificate lifecycle\" control for Identity & Access Management (IAM) at AcmeCorp. THE TEST: Assess the certificate and PKI estate for quantum readiness. PASS: a complete CBOM exists; the classical algorithms in use are catalogued; crypto is agile (cert and key types can be rotated centrally); a migration plan to NIST PQC standards (ML-KEM / ML-DSA, FIPS 203/204) and hybrid certificates exists with timelines aligned to CNSA 2.0; and long-lived secrets are prioritised for harvest-now-decrypt-later (HNDL) risk. Exceptions: no crypto inventory, hardcoded/un-agile algorithms, long-lived RSA/ECC protecting data that must outlive a cryptographically-relevant quantum computer, and no vendor PQC commitment. The evidence — The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live PKI with CBOM support — Venafi / Keyfactor APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. PKI with CBOM support — Venafi / Keyfactor gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from PKI with CBOM support — Venafi / Keyfactor; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Identity & Access Management (IAM): \"PQC-ready certificate lifecycle\" Audit Evidence\n\nThe test:\nAssess the certificate and PKI estate for quantum readiness. PASS: a complete CBOM exists; the classical algorithms in use are catalogued; crypto is agile (cert and key types can be rotated centrally); a migration plan to NIST PQC standards (ML-KEM / ML-DSA, FIPS 203/204) and hybrid certificates exists with timelines aligned to CNSA 2.0; and long-lived secrets are prioritised for harvest-now-decrypt-later (HNDL) risk. Exceptions: no crypto inventory, hardcoded/un-agile algorithms, long-lived RSA/ECC protecting data that must outlive a cryptographically-relevant quantum computer, and no vendor PQC commitment.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- iam_inventory.json   (in-scope items — The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used)\n- iam_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"PQC-ready certificate lifecycle\",\n  \"domain\": \"Identity & Access Management (IAM)\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{iam_",
        "/evidence/iam_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Identity & Access Management\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"PQC-ready certificate lifecycle\" control must cover\n# fragment: pqcready_certificate_lifecycle_",
        "/evidence/iam_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "iam_inventory.json",
            "isDir": false
          },
          {
            "name": "iam_state.json",
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
          "value": "FLAG{iam_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/iam_inventory.json",
          "value": "pqcready_certificate_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/iam_state.json",
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
          "id": "iam-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"PQC-ready certificate lifecycle\" sub-process of Identity & Access Management (IAM)?",
          "options": [
            "Deploy and operate the pqc-ready certificate lifecycle control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the pqc-ready certificate lifecycle control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for pqc-ready certificate lifecycle against comparable organisations in the sector",
            "Obtain evidence that the pqc-ready certificate lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "iam-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"PQC-ready certificate lifecycle\" matter to the broader Identity & Access Management (IAM) posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Identity & Access Management (IAM)",
            "It stops mattering once a firewall and endpoint agent are deployed across the Identity & Access Management (IAM) estate",
            "It is a control other Identity & Access Management (IAM) controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Identity & Access Management (IAM) controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "iam-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"PQC-ready certificate lifecycle\" control?",
          "options": [
            "A point-in-time screenshot of one system's pqc-ready certificate lifecycle settings, captured during the walkthrough",
            "The The cryptographic inventory / CBOM (Cryptographic Bill of Materials) for certificates and key-exchange — algorithms, key sizes, and where each is used, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the pqc-ready certificate lifecycle control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's pqc-ready certificate lifecycle capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "iam-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"PQC-ready certificate lifecycle\"?",
          "options": [
            "From PKI with CBOM support — Venafi / Keyfactor and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how pqc-ready certificate lifecycle works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. PKI with CBOM support — Venafi / Keyfactor) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "iam-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"PQC-ready certificate lifecycle\"?",
          "options": [
            "The external audit firm, since it is the party examining the pqc-ready certificate lifecycle control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the pqc-ready certificate lifecycle data is shared, so the accountability sits with no one in particular",
            "Cryptography / PKI team — owns the CBOM and migration, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography / PKI team — owns the CBOM and migration owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "iam-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"PQC-ready certificate lifecycle\", which part stays with the human auditor?",
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
          "id": "iam-11-q7",
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
          "id": "iam-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"PQC-ready certificate lifecycle\", which of these is a realistic reportable finding?",
          "options": [
            "No CBOM exists; long-lived RSA-2048 certificates protect records with a 25-year retention requirement (squarely in HNDL range); and no key vendor has a published PQC timeline.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No CBOM exists; long-lived RSA-2048 certificates protect records with a 25-year retention requirement (squarely in HNDL range); and no key vendor has a published PQC timeline. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "iam-11-q9",
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
          "id": "iam-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"PQC-ready certificate lifecycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind pqc-ready certificate lifecycle, so there is no overlap",
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
