import type { EpochConfig, StageConfig } from "../types";

export const cryptoSecretsEpoch: EpochConfig = {
  "id": "crypto-secrets",
  "name": "Cryptographic Key & Secrets Management",
  "subtitle": "Agentic technical & privacy audit — Cryptographic Key & Secrets Management",
  "description": "Audit Cryptographic Key & Secrets Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🔐",
  "color": "Amber",
  "unlocked": true
};

export const cryptoSecretsStages: StageConfig[] = [
  {
    "epochId": "crypto-secrets",
    "id": "cks-01",
    "order": 1,
    "title": "Key Lifecycle Management",
    "subtitle": "Agentic technical & privacy audit of the key lifecycle management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Key Lifecycle Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Key Lifecycle Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-01-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Key Lifecycle Management",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Key Lifecycle Management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Key Lifecycle Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Key Lifecycle Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_key_lifecycle_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_key_lifecycle_management_mcp.py` to expose it to your agent — or `python 01_key_lifecycle_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Key Lifecycle Management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Key Lifecycle Management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the key lifecycle management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_key_lifecycle_management_mcp.py",
          "url": "/audit-code/crypto-secrets/01_key_lifecycle_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Key Lifecycle Management\" (in-scope inventory for the key lifecycle management control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Key Lifecycle Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Key Lifecycle Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Key Lifecycle Management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Key Lifecycle Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Key Lifecycle Management\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Key Lifecycle Management\" control must cover\n# fragment: key_lifecycle_management_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "key_lifecycle_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Key Lifecycle Management\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the key lifecycle management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Key Lifecycle Management\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Key Lifecycle Management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the key lifecycle management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Key Lifecycle Management\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Key Lifecycle Management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Key Lifecycle Management\", which part stays with the human auditor?",
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
          "id": "cks-01-q7",
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
          "id": "cks-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Key Lifecycle Management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the key lifecycle management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the key lifecycle management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-01-q9",
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
          "id": "cks-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Key Lifecycle Management\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-02",
    "order": 2,
    "title": "Secrets Management",
    "subtitle": "Agentic technical & privacy audit of the secrets management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-02-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Secrets Management",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets Management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_secrets_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_secrets_management_mcp.py` to expose it to your agent — or `python 02_secrets_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets Management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets Management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secrets management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_secrets_management_mcp.py",
          "url": "/audit-code/crypto-secrets/02_secrets_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Secrets Management\" (in-scope inventory for the secrets management control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Secrets Management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets Management\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets Management\" control must cover\n# fragment: secrets_management_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "secrets_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets Management\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secrets management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets Management\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets Management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secrets management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secrets Management\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets Management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets Management\", which part stays with the human auditor?",
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
          "id": "cks-02-q7",
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
          "id": "cks-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets Management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secrets management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secrets management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-02-q9",
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
          "id": "cks-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets Management\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-03",
    "order": 3,
    "title": "Certificate Management",
    "subtitle": "Agentic technical & privacy audit of the certificate management control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Certificate Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Certificate Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-03-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Certificate Management",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Certificate Management\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Certificate Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Certificate Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_certificate_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_certificate_management_mcp.py` to expose it to your agent — or `python 03_certificate_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Certificate Management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Certificate Management\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the certificate management control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_certificate_management_mcp.py",
          "url": "/audit-code/crypto-secrets/03_certificate_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Certificate Management\" (in-scope inventory for the certificate management control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Certificate Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Certificate Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Certificate Management\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Certificate Management\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Certificate Management\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Certificate Management\" control must cover\n# fragment: certificate_management_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "certificate_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Certificate Management\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the certificate management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Certificate Management\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Certificate Management\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the certificate management control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Certificate Management\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Certificate Management\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Certificate Management\", which part stays with the human auditor?",
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
          "id": "cks-03-q7",
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
          "id": "cks-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Certificate Management\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the certificate management control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the certificate management control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-03-q9",
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
          "id": "cks-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Certificate Management\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-04",
    "order": 4,
    "title": "HSM controls",
    "subtitle": "Agentic technical & privacy audit of the hsm controls control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 3,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"HSM controls\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"HSM controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 3/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-04-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "HSM controls",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"HSM controls\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"HSM controls\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"HSM controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_hsm_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_hsm_controls_mcp.py` to expose it to your agent — or `python 04_hsm_controls_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"HSM controls\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"HSM controls\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the hsm controls control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_hsm_controls_mcp.py",
          "url": "/audit-code/crypto-secrets/04_hsm_controls_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"HSM controls\" (in-scope inventory for the hsm controls control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"HSM controls\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"HSM controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"HSM controls\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"HSM controls\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"HSM controls\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"HSM controls\" control must cover\n# fragment: hsm_controls_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "hsm_controls_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"HSM controls\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the hsm controls control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"HSM controls\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"HSM controls\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the hsm controls control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"HSM controls\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"HSM controls\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"HSM controls\", which part stays with the human auditor?",
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
          "id": "cks-04-q7",
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
          "id": "cks-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"HSM controls\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the hsm controls control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the hsm controls control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-04-q9",
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
          "id": "cks-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"HSM controls\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-05",
    "order": 5,
    "title": "Cryptographic implementation",
    "subtitle": "Agentic technical & privacy audit of the cryptographic implementation control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Cryptographic implementation\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Cryptographic implementation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-05-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Cryptographic implementation",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Cryptographic implementation\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic implementation\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Cryptographic implementation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_cryptographic_implementation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_cryptographic_implementation_mcp.py` to expose it to your agent — or `python 05_cryptographic_implementation_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Cryptographic implementation\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Cryptographic implementation\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the cryptographic implementation control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_cryptographic_implementation_mcp.py",
          "url": "/audit-code/crypto-secrets/05_cryptographic_implementation_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Cryptographic implementation\" (in-scope inventory for the cryptographic implementation control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic implementation\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Cryptographic implementation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Cryptographic implementation\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Cryptographic implementation\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Cryptographic implementation\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Cryptographic implementation\" control must cover\n# fragment: cryptographic_implementation_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "cryptographic_implementation_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Cryptographic implementation\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the cryptographic implementation control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Cryptographic implementation\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Cryptographic implementation\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the cryptographic implementation control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Cryptographic implementation\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Cryptographic implementation\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Cryptographic implementation\", which part stays with the human auditor?",
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
          "id": "cks-05-q7",
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
          "id": "cks-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Cryptographic implementation\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the cryptographic implementation control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the cryptographic implementation control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-05-q9",
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
          "id": "cks-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Cryptographic implementation\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-06",
    "order": 6,
    "title": "Post-quantum cryptography readiness",
    "subtitle": "Agentic technical & privacy audit of the post-quantum cryptography readiness control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Post-quantum cryptography readiness\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Post-quantum cryptography readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-06-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Post-quantum cryptography readiness",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Post-quantum cryptography readiness\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-quantum cryptography readiness\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Post-quantum cryptography readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_post_quantum_cryptography_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_post_quantum_cryptography_readiness_mcp.py` to expose it to your agent — or `python 06_post_quantum_cryptography_readiness_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Post-quantum cryptography readiness\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Post-quantum cryptography readiness\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the post-quantum cryptography readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_post_quantum_cryptography_readiness_mcp.py",
          "url": "/audit-code/crypto-secrets/06_post_quantum_cryptography_readiness_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Post-quantum cryptography readiness\" (in-scope inventory for the post-quantum cryptography readiness control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-quantum cryptography readiness\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Post-quantum cryptography readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Post-quantum cryptography readiness\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Post-quantum cryptography readiness\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Post-quantum cryptography readiness\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Post-quantum cryptography readiness\" control must cover\n# fragment: postquantum_cryptography_readiness_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "postquantum_cryptography_readiness_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Post-quantum cryptography readiness\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the post-quantum cryptography readiness control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Post-quantum cryptography readiness\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Post-quantum cryptography readiness\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the post-quantum cryptography readiness control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Post-quantum cryptography readiness\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Post-quantum cryptography readiness\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Post-quantum cryptography readiness\", which part stays with the human auditor?",
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
          "id": "cks-06-q7",
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
          "id": "cks-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Post-quantum cryptography readiness\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the post-quantum cryptography readiness control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the post-quantum cryptography readiness control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-06-q9",
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
          "id": "cks-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Post-quantum cryptography readiness\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-07",
    "order": 7,
    "title": "Secrets detection and prevention",
    "subtitle": "Agentic technical & privacy audit of the secrets detection and prevention control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets detection and prevention\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets detection and prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-07-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Secrets detection and prevention",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets detection and prevention\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets detection and prevention\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets detection and prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_secrets_detection_and_prevention_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_secrets_detection_and_prevention_mcp.py` to expose it to your agent — or `python 07_secrets_detection_and_prevention_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets detection and prevention\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets detection and prevention\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the secrets detection and prevention control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_secrets_detection_and_prevention_mcp.py",
          "url": "/audit-code/crypto-secrets/07_secrets_detection_and_prevention_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Secrets detection and prevention\" (in-scope inventory for the secrets detection and prevention control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets detection and prevention\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets detection and prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Secrets detection and prevention\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Secrets detection and prevention\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets detection and prevention\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets detection and prevention\" control must cover\n# fragment: secrets_detection_prevention_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "secrets_detection_prevention_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets detection and prevention\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the secrets detection and prevention control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets detection and prevention\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets detection and prevention\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the secrets detection and prevention control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Secrets detection and prevention\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets detection and prevention\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets detection and prevention\", which part stays with the human auditor?",
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
          "id": "cks-07-q7",
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
          "id": "cks-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets detection and prevention\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the secrets detection and prevention control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the secrets detection and prevention control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-07-q9",
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
          "id": "cks-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets detection and prevention\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-08",
    "order": 8,
    "title": "Audit logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the audit logging and monitoring control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit logging and monitoring\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-08-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Audit logging and monitoring",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Audit logging and monitoring\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_audit_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_audit_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 08_audit_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Audit logging and monitoring\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_audit_logging_and_monitoring_mcp.py",
          "url": "/audit-code/crypto-secrets/08_audit_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Audit logging and monitoring\" (in-scope inventory for the audit logging and monitoring control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit logging and monitoring\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Audit logging and monitoring\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Audit logging and monitoring\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit logging and monitoring\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit logging and monitoring\" control must cover\n# fragment: audit_logging_monitoring_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "audit_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit logging and monitoring\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the audit logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit logging and monitoring\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit logging and monitoring\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the audit logging and monitoring control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Audit logging and monitoring\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit logging and monitoring\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit logging and monitoring\", which part stays with the human auditor?",
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
          "id": "cks-08-q7",
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
          "id": "cks-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit logging and monitoring\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the audit logging and monitoring control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-08-q9",
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
          "id": "cks-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit logging and monitoring\" also serve privacy and regulatory goals?",
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
    "epochId": "crypto-secrets",
    "id": "cks-09",
    "order": 9,
    "title": "Compliance and regulatory alignment",
    "subtitle": "Agentic technical & privacy audit of the compliance and regulatory alignment control",
    "category": "cybersecurity",
    "xp": 100,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Compliance and regulatory alignment\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault; HSM (PKCS#11); Certificate authority / ACME) as tools, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault)",
        "Observed configuration/state evidence showing whether the control is applied and operating",
        "The control policy / standard / threshold the evidence is judged against",
        "The reconciled exceptions list + coverage report (the working paper)"
      ],
      "system": [
        "HashiCorp Vault / AWS KMS / Azure Key Vault",
        "HSM (PKCS#11)",
        "Certificate authority / ACME",
        "Secret-scanning service"
      ],
      "dataOwner": [
        "PKI / Crypto team",
        "Platform security",
        "Application owners",
        "Cloud Platform"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Cryptographic Key & Secrets Management controls."
      }
    },
    "badge": {
      "id": "cks-09-badge",
      "name": "Cryptographic Key & Secrets Management Auditor",
      "emoji": "🔐"
    },
    "wonder": {
      "name": "Compliance and regulatory alignment",
      "location": "Cryptographic Key & Secrets Management",
      "era": "Present Day",
      "emoji": "🔐"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Compliance and regulatory alignment\" as a repeatable agentic workflow: pull the real evidence (In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Compliance and regulatory alignment\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me in-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. A manual review is weeks of exports and owner-chasing; the result is often stale before it is finished.",
        "The test itself is specific. Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_compliance_and_regulatory_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS KMS / Azure Key Vault and HSM (PKCS#11) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. ",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_compliance_and_regulatory_alignment_mcp.py` to expose it to your agent — or `python 09_compliance_and_regulatory_alignment_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "The key that never rotated",
        "when": "Recurring",
        "where": "Key & secret stores",
        "impact": "A static, over-shared, or expired key undermines every control built on top of it — encryption, signing, and authentication all fail quietly.",
        "body": [
          "Key and secret findings are high-impact because they are load-bearing: a hardcoded secret, a key past its crypto-period, or an unmonitored HSM defeats the controls that depend on it.",
          "Auditors verify the full lifecycle — generation, storage, rotation, revocation, destruction — and that no secret lives in source or config in cleartext."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Cryptographic Key & Secrets Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull HashiCorp Vault / AWS KMS / Azure Key Vault · HSM (PKCS#11)",
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
          "event": "Codecov: stolen CI credentials harvested from environment",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Storm-0558: a stolen signing key forged tokens across tenants"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Compliance and regulatory alignment\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [],
      "keyTakeaways": [
        "The artifact to pull: In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault).",
        "The test: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating.",
        "Reconcile the systems of record (HashiCorp Vault / AWS KMS / Azure Key Vault, HSM (PKCS#11), Certificate authority / ACME) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. in-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
      ],
      "references": [
        {
          "title": "NIST SP 800-57 — Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-131A — crypto transitions",
          "url": "https://csrc.nist.gov/pubs/sp/800/131/a/r2/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_compliance_and_regulatory_alignment_mcp.py",
          "url": "/audit-code/crypto-secrets/09_compliance_and_regulatory_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Compliance and regulatory alignment\" (in-scope inventory for the compliance and regulatory alignment control (from hashicorp vault / aws kms / azure key vault)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Compliance and regulatory alignment\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Reconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on. The evidence — In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS KMS / Azure Key Vault APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS KMS / Azure Key Vault gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS KMS / Azure Key Vault; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Compliance and regulatory alignment\" Audit Evidence\n\nThe test:\nReconcile the in-scope inventory against the Cryptographic Key & Secrets Management policy/standard and flag every item where the \"Compliance and regulatory alignment\" control is missing, mis-scoped, or not operating. PASS when every in-scope item complies; EXCEPTIONS for a small, listed set of gaps; MATERIAL GAP when the control cannot be relied on.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Compliance and regulatory alignment\",\n  \"domain\": \"Cryptographic Key & Secrets Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{cks_",
        "/evidence/crypto-secrets_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"PKI / Crypto team\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Compliance and regulatory alignment\" control must cover\n# fragment: compliance_regulatory_alignment_",
        "/evidence/crypto-secrets_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "crypto-secrets_inventory.json",
            "isDir": false
          },
          {
            "name": "crypto-secrets_state.json",
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
          "value": "FLAG{cks_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/crypto-secrets_inventory.json",
          "value": "compliance_regulatory_alignment_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/crypto-secrets_state.json",
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
          "id": "cks-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Compliance and regulatory alignment\" sub-process of Cryptographic Key & Secrets Management?",
          "options": [
            "Re-implement the control on the auditor's behalf",
            "Increase the number of tools the team uses",
            "Replace the system owner's judgement entirely",
            "Obtain evidence that the compliance and regulatory alignment control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run or own the control."
        },
        {
          "id": "cks-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Compliance and regulatory alignment\" matter to the broader Cryptographic Key & Secrets Management posture?",
          "options": [
            "It is relevant solely for marketing",
            "It has no effect once a firewall exists",
            "It is a control other Cryptographic Key & Secrets Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It only affects documentation aesthetics"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure undermines the controls layered on top."
        },
        {
          "id": "cks-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Compliance and regulatory alignment\" control?",
          "options": [
            "The vendor's marketing datasheet",
            "The In-scope inventory for the compliance and regulatory alignment control (from HashiCorp Vault / AWS KMS / Azure Key Vault) reconciled against policy, plus the resulting findings working paper",
            "A verbal assurance from the team lead",
            "A screenshot of the login page"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — exports reconciled to policy, not assertions."
        },
        {
          "id": "cks-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where would an auditor pull the evidence for \"Compliance and regulatory alignment\"?",
          "options": [
            "HashiCorp Vault / AWS KMS / Azure Key Vault (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS KMS / Azure Key Vault) via read-only access."
        },
        {
          "id": "cks-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Compliance and regulatory alignment\"?",
          "options": [
            "The external auditor",
            "No one — it is ownerless",
            "The end customer",
            "PKI / Crypto team (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Crypto team owns the control data; the auditor independently verifies it."
        },
        {
          "id": "cks-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Compliance and regulatory alignment\", which part stays with the human auditor?",
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
          "id": "cks-09-q7",
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
          "id": "cks-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Compliance and regulatory alignment\", which is a realistic reportable finding?",
          "options": [
            "In-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. in-scope items where the compliance and regulatory alignment control is not applied, mis-scoped, or has drifted from the approved baseline"
        },
        {
          "id": "cks-09-q9",
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
          "id": "cks-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Compliance and regulatory alignment\" also serve privacy and regulatory goals?",
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
