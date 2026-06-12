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
      "objective": "Prove the \"Key Lifecycle Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify every cryptographic key is managed through its full lifecycle. PASS: a complete key inventory exists; keys are generated with approved algorithms/lengths in a secure module; each key has a defined crypto-period and is rotated within it; revocation works; and retired keys are securely destroyed with records. Exceptions: unknown/untracked keys, keys past their crypto-period (never rotated), keys with no owner, and 'destroyed' keys with no destruction evidence (or still re-enableable).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust; The key inventory / key-management tooling; HSM (for high-value keys)) as tools — e.g. `AWS KMS: aws kms list-keys + get-key-rotation-status (creation date, l`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed)",
        "The key-lifecycle policy (generation, distribution, rotation, revocation, destruction) per key class",
        "Rotation evidence — keys rotated within their crypto-period",
        "Key-state records — retired/destroyed keys with destruction proof"
      ],
      "system": [
        "KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust",
        "The key inventory / key-management tooling",
        "HSM (for high-value keys)"
      ],
      "dataOwner": [
        "Cryptography / Key Management team — owns the lifecycle",
        "Application owners — own their data keys",
        "Security"
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
      "tagline": "Auditing \"Key Lifecycle Management\" as a repeatable agentic workflow: pull the real evidence (The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Key Lifecycle Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust, The key inventory / key-management tooling, HSM (for high-value keys) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `AWS KMS: aws kms list-keys + get-key-rotation-status (creation date, last-rotate` — read-only, against the systems of record.",
        "The test itself is specific. Verify every cryptographic key is managed through its full lifecycle. PASS: a complete key inventory exists; keys are generated with approved algorithms/lengths in a secure module; each key has a defined crypto-period and is rotated within it; revocation works; and retired keys are securely destroyed with records. Exceptions: unknown/untracked keys, keys past their crypto-period (never rotated), keys with no owner, and 'destroyed' keys with no destruction evidence (or still re-enableable). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_key_lifecycle_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust and The key inventory / key-management tooling (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust · The key inventory / key-management tooling",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "AWS KMS: aws kms list-keys + get-key-rotation-status (creation date, last-rotated, rotation enabled)\njoin keys to a documented crypto-period; flag those overdue for rotation\nVault: key/secret metadata + lease/rotation configuration\nconfirm destroyed keys are scheduled-for-deletion/destroyed, not merely disabled"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed).",
        "The test: Verify every cryptographic key is managed through its full lifecycle.",
        "Reconcile the systems of record (KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust, The key inventory / key-management tooling, HSM (for high-value keys)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Dozens of KMS keys have rotation disabled and predate any crypto-period policy; several 'retired' keys are merely disabled (still re-enableable); and a set of data-encryption keys have no recorded owner."
      ],
      "references": [
        {
          "title": "NIST SP 800-57 Key Management",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "NIST SP 800-130 Key Management Framework",
          "url": "https://csrc.nist.gov/pubs/sp/800/130/final"
        },
        {
          "title": "FIPS 140-3",
          "url": "https://csrc.nist.gov/pubs/fips/140-3/final"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Key Lifecycle Management\" (the key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Key Lifecycle Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify every cryptographic key is managed through its full lifecycle. PASS: a complete key inventory exists; keys are generated with approved algorithms/lengths in a secure module; each key has a defined crypto-period and is rotated within it; revocation works; and retired keys are securely destroyed with records. Exceptions: unknown/untracked keys, keys past their crypto-period (never rotated), keys with no owner, and 'destroyed' keys with no destruction evidence (or still re-enableable). The evidence — The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Key Lifecycle Management\" Audit Evidence\n\nThe test:\nVerify every cryptographic key is managed through its full lifecycle. PASS: a complete key inventory exists; keys are generated with approved algorithms/lengths in a secure module; each key has a defined crypto-period and is rotated within it; revocation works; and retired keys are securely destroyed with records. Exceptions: unknown/untracked keys, keys past their crypto-period (never rotated), keys with no owner, and 'destroyed' keys with no destruction evidence (or still re-enableable).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The key inventory — every cryptographic key with type, algorithm, length, owner, creation date, crypto-period, and state (active/suspended/destroyed) reconciled against policy, plus the resulting findings working paper",
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
            "KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., KMS — AWS KMS / Azure Key Vault / HashiCorp Vault / Thales CipherTrust) via read-only access."
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
            "Cryptography / Key Management team — owns the lifecycle (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography / Key Management team — owns the lifecycle owns the control data; the auditor independently verifies it."
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
            "Dozens of KMS keys have rotation disabled and predate any crypto-period policy; several 'retired' keys are merely disabled (still re-enableable); and a set of data-encryption keys have no recorded owner.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Dozens of KMS keys have rotation disabled and predate any crypto-period policy; several 'retired' keys are merely disabled (still re-enableable); and a set of data-encryption keys have no recorded owner."
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
      "objective": "Prove the \"Secrets Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify application/service secrets are centrally vaulted, rotated, and least-privilege. PASS: secrets live in a vault (HashiCorp Vault / cloud Secrets Manager), not in source, config, CI, or env files; they're rotated on a schedule (or dynamic/short-TTL); access is least-privilege per workload identity and fully logged. Exceptions: hardcoded secrets in repos/pipelines/images, long-lived static secrets never rotated, broad read access to all secrets, and secret access that isn't logged.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur; Secret scanners (gitleaks / TruffleHog) over repos + images; CI/CD secret stores) as tools — e.g. `vault inventory: secrets + last-rotated + access policies per workload`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status",
        "Evidence secrets are vaulted, not in code/config/env — a secret-scan of repos, pipelines, and images",
        "Dynamic-secret / short-TTL usage vs static long-lived secrets",
        "The access policy to secrets (who/what can read each) + the secret-access audit log"
      ],
      "system": [
        "HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur",
        "Secret scanners (gitleaks / TruffleHog) over repos + images",
        "CI/CD secret stores"
      ],
      "dataOwner": [
        "Platform security / secrets team — owns the vault",
        "Application owners — own their secrets",
        "DevOps"
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
      "tagline": "Auditing \"Secrets Management\" as a repeatable agentic workflow: pull the real evidence (The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur, Secret scanners (gitleaks / TruffleHog) over repos + images, CI/CD secret stores — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `vault inventory: secrets + last-rotated + access policies per workload` — read-only, against the systems of record.",
        "The test itself is specific. Verify application/service secrets are centrally vaulted, rotated, and least-privilege. PASS: secrets live in a vault (HashiCorp Vault / cloud Secrets Manager), not in source, config, CI, or env files; they're rotated on a schedule (or dynamic/short-TTL); access is least-privilege per workload identity and fully logged. Exceptions: hardcoded secrets in repos/pipelines/images, long-lived static secrets never rotated, broad read access to all secrets, and secret access that isn't logged. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_secrets_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur and Secret scanners (gitleaks / TruffleHog) over repos + images (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur · Secret scanners (gitleaks / TruffleHog) over repos + images",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "vault inventory: secrets + last-rotated + access policies per workload\ngitleaks / TruffleHog scan of repos, CI logs, and container images for embedded secrets\nVault dynamic secrets (DB/cloud) usage vs static; check lease TTLs\nreview the secret-access audit log (which identity read which secret, when)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status.",
        "The test: Verify application/service secrets are centrally vaulted, rotated, and least-privilege.",
        "Reconcile the systems of record (HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur, Secret scanners (gitleaks / TruffleHog) over repos + images, CI/CD secret stores) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A live database password and an AWS access key are committed in a repo's history; most vault secrets are static and years old; and one CI role can read every secret in the vault."
      ],
      "references": [
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "NIST SP 800-57",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "CIS Control 16",
          "url": "https://www.cisecurity.org/controls"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Secrets Management\" (the secrets inventory in the vault (db passwords, api keys, tokens, service-account creds) + owners + rotation status), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify application/service secrets are centrally vaulted, rotated, and least-privilege. PASS: secrets live in a vault (HashiCorp Vault / cloud Secrets Manager), not in source, config, CI, or env files; they're rotated on a schedule (or dynamic/short-TTL); access is least-privilege per workload identity and fully logged. Exceptions: hardcoded secrets in repos/pipelines/images, long-lived static secrets never rotated, broad read access to all secrets, and secret access that isn't logged. The evidence — The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Secrets Management\" Audit Evidence\n\nThe test:\nVerify application/service secrets are centrally vaulted, rotated, and least-privilege. PASS: secrets live in a vault (HashiCorp Vault / cloud Secrets Manager), not in source, config, CI, or env files; they're rotated on a schedule (or dynamic/short-TTL); access is least-privilege per workload identity and fully logged. Exceptions: hardcoded secrets in repos/pipelines/images, long-lived static secrets never rotated, broad read access to all secrets, and secret access that isn't logged.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status)\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The secrets inventory in the vault (DB passwords, API keys, tokens, service-account creds) + owners + rotation status reconciled against policy, plus the resulting findings working paper",
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
            "HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / CyberArk Conjur) via read-only access."
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
            "Platform security / secrets team — owns the vault (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Platform security / secrets team — owns the vault owns the control data; the auditor independently verifies it."
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
            "A live database password and an AWS access key are committed in a repo's history; most vault secrets are static and years old; and one CI role can read every secret in the vault.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A live database password and an AWS access key are committed in a repo's history; most vault secrets are static and years old; and one CI role can read every secret in the vault."
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
      "objective": "Prove the \"Certificate Management\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the certificate + PKI estate is governed and won't fail. PASS: a complete cert inventory exists; the CA hierarchy is documented with a CP/CPS and HSM-protected CA keys; certs use approved algorithms/key sizes; renewals are automated (no surprise expiries); revocation (CRL/OCSP) works; and code-signing keys are tightly controlled. Exceptions: unknown/expired certs in production, weak keys (RSA-1024/SHA-1), CA keys not in an HSM, manual renewals causing outages, and broadly-accessible code-signing keys.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (Venafi / Keyfactor / Microsoft AD CS / AWS Private CA; Certificate Transparency logs (discovery); Load balancers / servers / device fleets) as tools — e.g. `Venafi/Keyfactor inventory export (CN, issuer, key, expiry, location)`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment",
        "The CA hierarchy + issuance policy + Certificate Policy/CPS",
        "Renewal-automation evidence (ACME / auto-enrol) vs manual, plus the expiry-outage history",
        "Private-key protection — HSM-backed CA keys, key-escrow/recovery policy"
      ],
      "system": [
        "Venafi / Keyfactor / Microsoft AD CS / AWS Private CA",
        "Certificate Transparency logs (discovery)",
        "Load balancers / servers / device fleets",
        "HSM (CA + code-signing keys)"
      ],
      "dataOwner": [
        "PKI / Cryptography team — owns the CA",
        "Platform & application owners — own deployed certs",
        "Developers (code signing)"
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
      "tagline": "Auditing \"Certificate Management\" as a repeatable agentic workflow: pull the real evidence (The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Certificate Management\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Venafi / Keyfactor / Microsoft AD CS / AWS Private CA, Certificate Transparency logs (discovery), Load balancers / servers / device fleets — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `Venafi/Keyfactor inventory export (CN, issuer, key, expiry, location)` — read-only, against the systems of record.",
        "The test itself is specific. Verify the certificate + PKI estate is governed and won't fail. PASS: a complete cert inventory exists; the CA hierarchy is documented with a CP/CPS and HSM-protected CA keys; certs use approved algorithms/key sizes; renewals are automated (no surprise expiries); revocation (CRL/OCSP) works; and code-signing keys are tightly controlled. Exceptions: unknown/expired certs in production, weak keys (RSA-1024/SHA-1), CA keys not in an HSM, manual renewals causing outages, and broadly-accessible code-signing keys. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_certificate_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Venafi / Keyfactor / Microsoft AD CS / AWS Private CA and Certificate Transparency logs (discovery) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Venafi / Keyfactor / Microsoft AD CS / AWS Private CA · Certificate Transparency logs (discovery)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "Venafi/Keyfactor inventory export (CN, issuer, key, expiry, location)\nCertificate Transparency query (crt.sh) for every cert ever issued for the org's domains — find the unknowns\nAD CS issued-cert database + template review (weak-key/EKU issues, key archival)\nconfirm CA + code-signing private keys are HSM-resident; check OCSP/CRL availability"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment.",
        "The test: Verify the certificate + PKI estate is governed and won't fail.",
        "Reconcile the systems of record (Venafi / Keyfactor / Microsoft AD CS / AWS Private CA, Certificate Transparency logs (discovery), Load balancers / servers / device fleets) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Several internet certificates are RSA-1024/SHA-1, the issuing CA's private key sits on a VM disk (not an HSM), code-signing keys are shared on a build server, and three production certs expired last quarter causing outages."
      ],
      "references": [
        {
          "title": "NIST SP 800-57",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "CA/Browser Forum Baseline Requirements",
          "url": "https://cabforum.org/baseline-requirements-documents/"
        },
        {
          "title": "NIST SP 1800-16 TLS Certificate Management",
          "url": "https://www.nccoe.nist.gov/projects/building-blocks/tls-server-certificate-management"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Certificate Management\" (the enterprise certificate inventory (tls, client, code-signing, device) across internal + external, with ca, key, expiry, deployment), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Certificate Management\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify the certificate + PKI estate is governed and won't fail. PASS: a complete cert inventory exists; the CA hierarchy is documented with a CP/CPS and HSM-protected CA keys; certs use approved algorithms/key sizes; renewals are automated (no surprise expiries); revocation (CRL/OCSP) works; and code-signing keys are tightly controlled. Exceptions: unknown/expired certs in production, weak keys (RSA-1024/SHA-1), CA keys not in an HSM, manual renewals causing outages, and broadly-accessible code-signing keys. The evidence — The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Venafi / Keyfactor / Microsoft AD CS / AWS Private CA APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Venafi / Keyfactor / Microsoft AD CS / AWS Private CA gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Venafi / Keyfactor / Microsoft AD CS / AWS Private CA; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Certificate Management\" Audit Evidence\n\nThe test:\nVerify the certificate + PKI estate is governed and won't fail. PASS: a complete cert inventory exists; the CA hierarchy is documented with a CP/CPS and HSM-protected CA keys; certs use approved algorithms/key sizes; renewals are automated (no surprise expiries); revocation (CRL/OCSP) works; and code-signing keys are tightly controlled. Exceptions: unknown/expired certs in production, weak keys (RSA-1024/SHA-1), CA keys not in an HSM, manual renewals causing outages, and broadly-accessible code-signing keys.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment)\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The enterprise certificate inventory (TLS, client, code-signing, device) across internal + external, with CA, key, expiry, deployment reconciled against policy, plus the resulting findings working paper",
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
            "Venafi / Keyfactor / Microsoft AD CS / AWS Private CA (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Venafi / Keyfactor / Microsoft AD CS / AWS Private CA) via read-only access."
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
            "PKI / Cryptography team — owns the CA (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "PKI / Cryptography team — owns the CA owns the control data; the auditor independently verifies it."
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
            "Several internet certificates are RSA-1024/SHA-1, the issuing CA's private key sits on a VM disk (not an HSM), code-signing keys are shared on a build server, and three production certs expired last quarter causing outages.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Several internet certificates are RSA-1024/SHA-1, the issuing CA's private key sits on a VM disk (not an HSM), code-signing keys are shared on a build server, and three production certs expired last quarter causing outages."
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
      "objective": "Prove the \"HSM controls\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify HSMs protecting critical keys are correctly controlled. PASS: HSMs are FIPS 140-2 Level 3+ (or 140-3) and current on firmware; administrative operations require quorum (M-of-N) authorisation; roles are separated so no single operator can extract/clone keys; all HSM events are logged to the SIEM; and backup/DR (secure key-cloning) is tested. Exceptions: keys protected by software KMS that should be in an HSM, HSM admin without quorum, single-person key control, HSM logs not collected, and no tested HSM DR.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM; The key-management / PKI systems using them; SIEM (HSM logs)) as tools — e.g. `HSM partition/slot inventory + firmware vs vendor advisories; confirm `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects",
        "HSM access-control + quorum (M-of-N) configuration for administrative operations",
        "HSM audit logs (key use, admin actions) + their export to the SIEM",
        "HSM backup, secure key-cloning, and DR procedures"
      ],
      "system": [
        "HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM",
        "The key-management / PKI systems using them",
        "SIEM (HSM logs)"
      ],
      "dataOwner": [
        "Cryptography / Key Management team — owns the HSMs",
        "Security operations (monitoring)",
        "Infrastructure (DR)"
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
      "tagline": "Auditing \"HSM controls\" as a repeatable agentic workflow: pull the real evidence (The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"HSM controls\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM, The key-management / PKI systems using them, SIEM (HSM logs) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `HSM partition/slot inventory + firmware vs vendor advisories; confirm the FIPS l` — read-only, against the systems of record.",
        "The test itself is specific. Verify HSMs protecting critical keys are correctly controlled. PASS: HSMs are FIPS 140-2 Level 3+ (or 140-3) and current on firmware; administrative operations require quorum (M-of-N) authorisation; roles are separated so no single operator can extract/clone keys; all HSM events are logged to the SIEM; and backup/DR (secure key-cloning) is tested. Exceptions: keys protected by software KMS that should be in an HSM, HSM admin without quorum, single-person key control, HSM logs not collected, and no tested HSM DR. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_hsm_controls_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM and The key-management / PKI systems using them (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM · The key-management / PKI systems using them",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "HSM partition/slot inventory + firmware vs vendor advisories; confirm the FIPS level\nreview the M-of-N quorum configuration for admin operations + role separation\nconfirm HSM audit logs export to the SIEM (key-use + admin actions)\nverify the backup/clone + DR procedure is documented and tested"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects.",
        "The test: Verify HSMs protecting critical keys are correctly controlled.",
        "Reconcile the systems of record (HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM, The key-management / PKI systems using them, SIEM (HSM logs)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The root CA and code-signing keys live in a single HSM with no quorum (one operator can run admin operations), the firmware is two versions behind a security advisory, and HSM logs aren't sent anywhere."
      ],
      "references": [
        {
          "title": "FIPS 140-3",
          "url": "https://csrc.nist.gov/pubs/fips/140-3/final"
        },
        {
          "title": "NIST SP 800-57",
          "url": "https://csrc.nist.gov/projects/key-management"
        },
        {
          "title": "PCI PIN Security / HSM",
          "url": "https://www.pcisecuritystandards.org/"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"HSM controls\" (the hsm inventory (model, fips 140-2/3 level, firmware) + which keys/operations each protects), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"HSM controls\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify HSMs protecting critical keys are correctly controlled. PASS: HSMs are FIPS 140-2 Level 3+ (or 140-3) and current on firmware; administrative operations require quorum (M-of-N) authorisation; roles are separated so no single operator can extract/clone keys; all HSM events are logged to the SIEM; and backup/DR (secure key-cloning) is tested. Exceptions: keys protected by software KMS that should be in an HSM, HSM admin without quorum, single-person key control, HSM logs not collected, and no tested HSM DR. The evidence — The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"HSM controls\" Audit Evidence\n\nThe test:\nVerify HSMs protecting critical keys are correctly controlled. PASS: HSMs are FIPS 140-2 Level 3+ (or 140-3) and current on firmware; administrative operations require quorum (M-of-N) authorisation; roles are separated so no single operator can extract/clone keys; all HSM events are logged to the SIEM; and backup/DR (secure key-cloning) is tested. Exceptions: keys protected by software KMS that should be in an HSM, HSM admin without quorum, single-person key control, HSM logs not collected, and no tested HSM DR.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects)\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The HSM inventory (model, FIPS 140-2/3 level, firmware) + which keys/operations each protects reconciled against policy, plus the resulting findings working paper",
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
            "HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., HSMs — Thales Luna / Entrust nShield / AWS CloudHSM / Azure Dedicated HSM) via read-only access."
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
            "Cryptography / Key Management team — owns the HSMs (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography / Key Management team — owns the HSMs owns the control data; the auditor independently verifies it."
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
            "The root CA and code-signing keys live in a single HSM with no quorum (one operator can run admin operations), the firmware is two versions behind a security advisory, and HSM logs aren't sent anywhere.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The root CA and code-signing keys live in a single HSM with no quorum (one operator can run admin operations), the firmware is two versions behind a security advisory, and HSM logs aren't sent anywhere."
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
      "objective": "Prove the \"Cryptographic implementation\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cryptography is implemented per standard and free of weak primitives. PASS: only approved algorithms/modes are used (AES-GCM, SHA-256+, RSA-2048+/ECDSA-P256+, TLS 1.2+); passwords are hashed with a strong KDF (bcrypt/scrypt/Argon2/PBKDF2 high-iteration, salted); IVs/nonces and RNG are correct (CSPRNG); crypto libraries are current. Exceptions: MD5/SHA-1 for security, DES/3DES/RC4, ECB mode, hardcoded keys/IVs, weak/predictable RNG, fast-hash or unsalted password storage, and outdated crypto libraries with CVEs.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (Source code + SAST (Semgrep / CodeQL crypto rules); TLS/endpoint scanners (testssl.sh); SCA (crypto-library versions)) as tools — e.g. `SAST crypto rules (CodeQL/Semgrep): MD5/SHA-1, DES/3DES/RC4, ECB, Math`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols)",
        "A code/config scan of where crypto is implemented (TLS, app crypto libraries, password/data hashing)",
        "Findings of weak/deprecated crypto in use (MD5/SHA-1, DES/3DES/RC4, ECB mode, hardcoded keys/IVs, weak RNG)",
        "The crypto-library/version inventory + known-vulnerability status"
      ],
      "system": [
        "Source code + SAST (Semgrep / CodeQL crypto rules)",
        "TLS/endpoint scanners (testssl.sh)",
        "SCA (crypto-library versions)",
        "Application configuration"
      ],
      "dataOwner": [
        "Application security / developers — implement crypto",
        "Cryptography team — sets the standard",
        "AppSec"
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
      "tagline": "Auditing \"Cryptographic implementation\" as a repeatable agentic workflow: pull the real evidence (The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Cryptographic implementation\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Source code + SAST (Semgrep / CodeQL crypto rules), TLS/endpoint scanners (testssl.sh), SCA (crypto-library versions) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `SAST crypto rules (CodeQL/Semgrep): MD5/SHA-1, DES/3DES/RC4, ECB, Math.random fo` — read-only, against the systems of record.",
        "The test itself is specific. Verify cryptography is implemented per standard and free of weak primitives. PASS: only approved algorithms/modes are used (AES-GCM, SHA-256+, RSA-2048+/ECDSA-P256+, TLS 1.2+); passwords are hashed with a strong KDF (bcrypt/scrypt/Argon2/PBKDF2 high-iteration, salted); IVs/nonces and RNG are correct (CSPRNG); crypto libraries are current. Exceptions: MD5/SHA-1 for security, DES/3DES/RC4, ECB mode, hardcoded keys/IVs, weak/predictable RNG, fast-hash or unsalted password storage, and outdated crypto libraries with CVEs. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_cryptographic_implementation_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Source code + SAST (Semgrep / CodeQL crypto rules) and TLS/endpoint scanners (testssl.sh) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull Source code + SAST (Semgrep / CodeQL crypto rules) · TLS/endpoint scanners (testssl.sh)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "SAST crypto rules (CodeQL/Semgrep): MD5/SHA-1, DES/3DES/RC4, ECB, Math.random for security, hardcoded keys/IVs\ninspect password hashing: bcrypt/Argon2/PBKDF2 vs unsalted MD5/SHA-1\ntestssl.sh for protocol/cipher; SCA for crypto-library versions + CVEs\nreview IV/nonce handling and the RNG source (must be a CSPRNG)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols).",
        "The test: Verify cryptography is implemented per standard and free of weak primitives.",
        "Reconcile the systems of record (Source code + SAST (Semgrep / CodeQL crypto rules), TLS/endpoint scanners (testssl.sh), SCA (crypto-library versions)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Passwords are stored as unsalted SHA-1, an internal API encrypts tokens with 3DES in ECB mode under a hardcoded key, and two services generate session tokens with `Math.random()`."
      ],
      "references": [
        {
          "title": "NIST SP 800-175B Crypto Guidelines",
          "url": "https://csrc.nist.gov/pubs/sp/800/175/b/r1/final"
        },
        {
          "title": "OWASP Cryptographic Storage Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Cryptographic implementation\" (the cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Cryptographic implementation\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify cryptography is implemented per standard and free of weak primitives. PASS: only approved algorithms/modes are used (AES-GCM, SHA-256+, RSA-2048+/ECDSA-P256+, TLS 1.2+); passwords are hashed with a strong KDF (bcrypt/scrypt/Argon2/PBKDF2 high-iteration, salted); IVs/nonces and RNG are correct (CSPRNG); crypto libraries are current. Exceptions: MD5/SHA-1 for security, DES/3DES/RC4, ECB mode, hardcoded keys/IVs, weak/predictable RNG, fast-hash or unsalted password storage, and outdated crypto libraries with CVEs. The evidence — The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Source code + SAST (Semgrep / CodeQL crypto rules) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Source code + SAST (Semgrep / CodeQL crypto rules) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Source code + SAST (Semgrep / CodeQL crypto rules); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Cryptographic implementation\" Audit Evidence\n\nThe test:\nVerify cryptography is implemented per standard and free of weak primitives. PASS: only approved algorithms/modes are used (AES-GCM, SHA-256+, RSA-2048+/ECDSA-P256+, TLS 1.2+); passwords are hashed with a strong KDF (bcrypt/scrypt/Argon2/PBKDF2 high-iteration, salted); IVs/nonces and RNG are correct (CSPRNG); crypto libraries are current. Exceptions: MD5/SHA-1 for security, DES/3DES/RC4, ECB mode, hardcoded keys/IVs, weak/predictable RNG, fast-hash or unsalted password storage, and outdated crypto libraries with CVEs.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The cryptographic standard the org mandates (approved algorithms, key sizes, modes, protocols) reconciled against policy, plus the resulting findings working paper",
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
            "Source code + SAST (Semgrep / CodeQL crypto rules) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., Source code + SAST (Semgrep / CodeQL crypto rules)) via read-only access."
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
            "Application security / developers — implement crypto (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Application security / developers — implement crypto owns the control data; the auditor independently verifies it."
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
            "Passwords are stored as unsalted SHA-1, an internal API encrypts tokens with 3DES in ECB mode under a hardcoded key, and two services generate session tokens with `Math.random()`.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Passwords are stored as unsalted SHA-1, an internal API encrypts tokens with 3DES in ECB mode under a hardcoded key, and two services generate session tokens with `Math.random()`."
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
      "objective": "Prove the \"Post-quantum cryptography readiness\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Assess enterprise readiness to migrate to post-quantum cryptography. PASS: a CBOM inventories all crypto in use; quantum-vulnerable algorithms are catalogued with the data they protect; crypto-agility lets algorithms be swapped centrally; an HNDL-prioritised migration plan to NIST PQC (ML-KEM / ML-DSA) + hybrid exists with CNSA-2.0-aligned timelines; and vendor PQC roadmaps are tracked. Exceptions: no CBOM, no agility (hardcoded crypto), long-lived secrets on classical algorithms, no migration plan, and unknown vendor PQC posture.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor); The TLS + PKI + KMS estate; Vendor roadmaps) as tools — e.g. `generate a CBOM (CycloneDX crypto-assets) across the estate`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used",
        "The list of quantum-vulnerable crypto (RSA, ECC, Diffie-Hellman) in use + the data/secrecy lifetime it protects",
        "The crypto-agility assessment — can algorithms be swapped centrally without re-architecture",
        "The PQC migration roadmap aligned to NIST FIPS 203/204/205 + CNSA 2.0 timelines"
      ],
      "system": [
        "CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor)",
        "The TLS + PKI + KMS estate",
        "Vendor roadmaps"
      ],
      "dataOwner": [
        "Cryptography / PKI team — owns the migration",
        "Enterprise architecture — owns agility",
        "Vendor management"
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
      "tagline": "Auditing \"Post-quantum cryptography readiness\" as a repeatable agentic workflow: pull the real evidence (The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Post-quantum cryptography readiness\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor), The TLS + PKI + KMS estate, Vendor roadmaps — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `generate a CBOM (CycloneDX crypto-assets) across the estate` — read-only, against the systems of record.",
        "The test itself is specific. Assess enterprise readiness to migrate to post-quantum cryptography. PASS: a CBOM inventories all crypto in use; quantum-vulnerable algorithms are catalogued with the data they protect; crypto-agility lets algorithms be swapped centrally; an HNDL-prioritised migration plan to NIST PQC (ML-KEM / ML-DSA) + hybrid exists with CNSA-2.0-aligned timelines; and vendor PQC roadmaps are tracked. Exceptions: no CBOM, no agility (hardcoded crypto), long-lived secrets on classical algorithms, no migration plan, and unknown vendor PQC posture. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_post_quantum_cryptography_readiness_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor) and The TLS + PKI + KMS estate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor) · The TLS + PKI + KMS estate",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "generate a CBOM (CycloneDX crypto-assets) across the estate\ninventory RSA/ECC/DH usage + the data secrecy-lifetime each protects (HNDL prioritisation)\nassess crypto-agility: is crypto behind a central abstraction or hardcoded per app?\nmap current → NIST PQC (FIPS 203/204) + hybrid; track vendor PQC commitments"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used.",
        "The test: Assess enterprise readiness to migrate to post-quantum cryptography.",
        "Reconcile the systems of record (CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor), The TLS + PKI + KMS estate, Vendor roadmaps) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. No CBOM exists; RSA-2048 and P-256 are everywhere with no central abstraction (each app hardcodes its crypto), long-secrecy data rides classical key-exchange, and no key vendor has published a PQC date."
      ],
      "references": [
        {
          "title": "NIST FIPS 203/204/205 (PQC)",
          "url": "https://csrc.nist.gov/projects/post-quantum-cryptography"
        },
        {
          "title": "NSA CNSA 2.0",
          "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"
        },
        {
          "title": "NIST SP 1800-38 PQC Migration",
          "url": "https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Post-quantum cryptography readiness\" (the enterprise cryptographic bill of materials (cbom) — all algorithms, key sizes, protocols, and where used), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Post-quantum cryptography readiness\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Assess enterprise readiness to migrate to post-quantum cryptography. PASS: a CBOM inventories all crypto in use; quantum-vulnerable algorithms are catalogued with the data they protect; crypto-agility lets algorithms be swapped centrally; an HNDL-prioritised migration plan to NIST PQC (ML-KEM / ML-DSA) + hybrid exists with CNSA-2.0-aligned timelines; and vendor PQC roadmaps are tracked. Exceptions: no CBOM, no agility (hardcoded crypto), long-lived secrets on classical algorithms, no migration plan, and unknown vendor PQC posture. The evidence — The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Post-quantum cryptography readiness\" Audit Evidence\n\nThe test:\nAssess enterprise readiness to migrate to post-quantum cryptography. PASS: a CBOM inventories all crypto in use; quantum-vulnerable algorithms are catalogued with the data they protect; crypto-agility lets algorithms be swapped centrally; an HNDL-prioritised migration plan to NIST PQC (ML-KEM / ML-DSA) + hybrid exists with CNSA-2.0-aligned timelines; and vendor PQC roadmaps are tracked. Exceptions: no CBOM, no agility (hardcoded crypto), long-lived secrets on classical algorithms, no migration plan, and unknown vendor PQC posture.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used)\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The enterprise Cryptographic Bill of Materials (CBOM) — all algorithms, key sizes, protocols, and where used reconciled against policy, plus the resulting findings working paper",
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
            "CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor) (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., CBOM tooling (CycloneDX crypto-assets, Venafi/Keyfactor)) via read-only access."
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
            "Cryptography / PKI team — owns the migration (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography / PKI team — owns the migration owns the control data; the auditor independently verifies it."
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
            "No CBOM exists; RSA-2048 and P-256 are everywhere with no central abstraction (each app hardcodes its crypto), long-secrecy data rides classical key-exchange, and no key vendor has published a PQC date.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. No CBOM exists; RSA-2048 and P-256 are everywhere with no central abstraction (each app hardcodes its crypto), long-secrecy data rides classical key-exchange, and no key vendor has published a PQC date."
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
      "objective": "Prove the \"Secrets detection and prevention\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify secrets are detected and prevented from entering code/config. PASS: secret scanning runs across all repos (history + new commits), CI logs, container images, and IaC; push-protection / pre-commit blocks new secrets before merge; detected secrets are rotated (not merely removed from the latest commit); and coverage is near-complete. Exceptions: repos/images not scanned, no push-protection (secrets land then are 'deleted' but stay in history and stay valid), found secrets removed but never rotated, and scanning whose findings no one actions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog; Pre-commit hooks + CI scanning + push protection; The vault (where secrets should live instead)) as tools — e.g. `gitleaks / TruffleHog across all repos INCLUDING full git history; sca`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned)",
        "Pre-commit / push-protection configuration (secrets blocked before they land)",
        "The historical-secret findings + their remediation (rotated, not just deleted)",
        "The allow-list / false-positive management + the detector ruleset"
      ],
      "system": [
        "GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog",
        "Pre-commit hooks + CI scanning + push protection",
        "The vault (where secrets should live instead)"
      ],
      "dataOwner": [
        "AppSec / platform security — own scanning",
        "Developers — remediate",
        "DevOps"
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
      "tagline": "Auditing \"Secrets detection and prevention\" as a repeatable agentic workflow: pull the real evidence (The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets detection and prevention\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog, Pre-commit hooks + CI scanning + push protection, The vault (where secrets should live instead) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `gitleaks / TruffleHog across all repos INCLUDING full git history; scan images f` — read-only, against the systems of record.",
        "The test itself is specific. Verify secrets are detected and prevented from entering code/config. PASS: secret scanning runs across all repos (history + new commits), CI logs, container images, and IaC; push-protection / pre-commit blocks new secrets before merge; detected secrets are rotated (not merely removed from the latest commit); and coverage is near-complete. Exceptions: repos/images not scanned, no push-protection (secrets land then are 'deleted' but stay in history and stay valid), found secrets removed but never rotated, and scanning whose findings no one actions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_secrets_detection_and_prevention_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog and Pre-commit hooks + CI scanning + push protection (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog · Pre-commit hooks + CI scanning + push protection",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "gitleaks / TruffleHog across all repos INCLUDING full git history; scan images for embedded secrets\nconfirm push-protection / pre-commit secret blocking is enabled org-wide\nfor each historical finding, confirm the secret was ROTATED (credential invalidated), not just deleted\nscan CI/CD logs + IaC variable files (tfvars) for secrets"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned).",
        "The test: Verify secrets are detected and prevented from entering code/config.",
        "Reconcile the systems of record (GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog, Pre-commit hooks + CI scanning + push protection, The vault (where secrets should live instead)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Push-protection is off, so secrets routinely land and get 'fixed' by a follow-up commit — but the credentials in history are still valid; a history scan surfaces 40 live keys nobody rotated."
      ],
      "references": [
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "GitHub Secret Scanning",
          "url": "https://docs.github.com/code-security/secret-scanning"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Secrets detection and prevention\" (the secret-scanning coverage across repos, ci/cd, container images, and iac (which are scanned)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets detection and prevention\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify secrets are detected and prevented from entering code/config. PASS: secret scanning runs across all repos (history + new commits), CI logs, container images, and IaC; push-protection / pre-commit blocks new secrets before merge; detected secrets are rotated (not merely removed from the latest commit); and coverage is near-complete. Exceptions: repos/images not scanned, no push-protection (secrets land then are 'deleted' but stay in history and stay valid), found secrets removed but never rotated, and scanning whose findings no one actions. The evidence — The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Secrets detection and prevention\" Audit Evidence\n\nThe test:\nVerify secrets are detected and prevented from entering code/config. PASS: secret scanning runs across all repos (history + new commits), CI logs, container images, and IaC; push-protection / pre-commit blocks new secrets before merge; detected secrets are rotated (not merely removed from the latest commit); and coverage is near-complete. Exceptions: repos/images not scanned, no push-protection (secrets land then are 'deleted' but stay in history and stay valid), found secrets removed but never rotated, and scanning whose findings no one actions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The secret-scanning coverage across repos, CI/CD, container images, and IaC (which are scanned) reconciled against policy, plus the resulting findings working paper",
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
            "GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., GitHub Advanced Security / GitLab secret scanning / gitleaks / TruffleHog) via read-only access."
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
            "AppSec / platform security — own scanning (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "AppSec / platform security — own scanning owns the control data; the auditor independently verifies it."
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
            "Push-protection is off, so secrets routinely land and get 'fixed' by a follow-up commit — but the credentials in history are still valid; a history scan surfaces 40 live keys nobody rotated.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Push-protection is off, so secrets routinely land and get 'fixed' by a follow-up commit — but the credentials in history are still valid; a history scan surfaces 40 live keys nobody rotated."
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
      "objective": "Prove the \"Audit logging and monitoring\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify cryptographic-system activity is logged and monitored. PASS: KMS, Vault, HSM, and CA all log key use, secret access, certificate issuance, and admin actions; logs ship to the SIEM with detections for anomalies (mass secret reads, unusual key-use, unexpected cert issuance, CA admin); logs are retained and tamper-protected; and privileged access is reviewed. Exceptions: crypto systems not logging, logs not forwarded, no detections on key/secret abuse, short retention, and unmonitored CA/HSM admin actions.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (KMS / Vault / HSM / CA log sources; SIEM (Sentinel / Splunk); Detection content) as tools — e.g. `confirm CloudTrail KMS data events, the Vault audit device, HSM logs, `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged",
        "Forwarding of those logs to the SIEM + detections (key-use anomalies, mass secret reads, cert issuance, CA admin)",
        "Retention + tamper-protection of crypto-system logs",
        "Review evidence — who watches privileged key/secret access"
      ],
      "system": [
        "KMS / Vault / HSM / CA log sources",
        "SIEM (Sentinel / Splunk)",
        "Detection content"
      ],
      "dataOwner": [
        "Cryptography team + security operations",
        "SOC",
        "Detection engineering"
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
      "tagline": "Auditing \"Audit logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Audit logging and monitoring\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here KMS / Vault / HSM / CA log sources, SIEM (Sentinel / Splunk), Detection content — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm CloudTrail KMS data events, the Vault audit device, HSM logs, and CA iss` — read-only, against the systems of record.",
        "The test itself is specific. Verify cryptographic-system activity is logged and monitored. PASS: KMS, Vault, HSM, and CA all log key use, secret access, certificate issuance, and admin actions; logs ship to the SIEM with detections for anomalies (mass secret reads, unusual key-use, unexpected cert issuance, CA admin); logs are retained and tamper-protected; and privileged access is reviewed. Exceptions: crypto systems not logging, logs not forwarded, no detections on key/secret abuse, short retention, and unmonitored CA/HSM admin actions. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_audit_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from KMS / Vault / HSM / CA log sources and SIEM (Sentinel / Splunk) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull KMS / Vault / HSM / CA log sources · SIEM (Sentinel / Splunk)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm CloudTrail KMS data events, the Vault audit device, HSM logs, and CA issuance logs are all on\nverify all forward to the SIEM; check retention\ndetections present for: mass secret reads, Decrypt spikes, unexpected cert issuance, CA/HSM admin actions\nreview privileged key/secret access (who, what, reviewed by whom)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged.",
        "The test: Verify cryptographic-system activity is logged and monitored.",
        "Reconcile the systems of record (KMS / Vault / HSM / CA log sources, SIEM (Sentinel / Splunk), Detection content) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. KMS Decrypt data-events aren't logged, the Vault audit device is disabled, and CA issuance has no monitoring — so an attacker minting certificates or bulk-decrypting data would be invisible."
      ],
      "references": [
        {
          "title": "NIST SP 800-92 Log Management",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "PCI DSS Req. 10",
          "url": "https://www.pcisecuritystandards.org/"
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
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Audit logging and monitoring\" (the logging configuration for key/secret/certificate systems (kms, vault, hsm, ca) — what is logged), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit logging and monitoring\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify cryptographic-system activity is logged and monitored. PASS: KMS, Vault, HSM, and CA all log key use, secret access, certificate issuance, and admin actions; logs ship to the SIEM with detections for anomalies (mass secret reads, unusual key-use, unexpected cert issuance, CA admin); logs are retained and tamper-protected; and privileged access is reviewed. Exceptions: crypto systems not logging, logs not forwarded, no detections on key/secret abuse, short retention, and unmonitored CA/HSM admin actions. The evidence — The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live KMS / Vault / HSM / CA log sources APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. KMS / Vault / HSM / CA log sources gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from KMS / Vault / HSM / CA log sources; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Audit logging and monitoring\" Audit Evidence\n\nThe test:\nVerify cryptographic-system activity is logged and monitored. PASS: KMS, Vault, HSM, and CA all log key use, secret access, certificate issuance, and admin actions; logs ship to the SIEM with detections for anomalies (mass secret reads, unusual key-use, unexpected cert issuance, CA admin); logs are retained and tamper-protected; and privileged access is reviewed. Exceptions: crypto systems not logging, logs not forwarded, no detections on key/secret abuse, short retention, and unmonitored CA/HSM admin actions.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged)\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The logging configuration for key/secret/certificate systems (KMS, Vault, HSM, CA) — what is logged reconciled against policy, plus the resulting findings working paper",
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
            "KMS / Vault / HSM / CA log sources (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., KMS / Vault / HSM / CA log sources) via read-only access."
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
            "Cryptography team + security operations (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team + security operations owns the control data; the auditor independently verifies it."
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
            "KMS Decrypt data-events aren't logged, the Vault audit device is disabled, and CA issuance has no monitoring — so an attacker minting certificates or bulk-decrypting data would be invisible.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. KMS Decrypt data-events aren't logged, the Vault audit device is disabled, and CA issuance has no monitoring — so an attacker minting certificates or bulk-decrypting data would be invisible."
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
      "objective": "Prove the \"Compliance and regulatory alignment\" control for Cryptographic Key & Secrets Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the org's cryptography meets its regulatory + contractual obligations. PASS: applicable crypto mandates are identified; FIPS-validated modules (CMVP-listed) are used where required; algorithms/key sizes/protocols meet each standard (e.g. PCI strong crypto, CNSA for national-security systems); and compliance is evidenced for audit. Exceptions: non-FIPS-validated crypto where validation is required, algorithms below a mandate's floor, missing CMVP evidence, and crypto-compliance gaps with no remediation plan.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Cryptographic Key & Secrets Management systems of record (The crypto inventory / CBOM; CMVP (the FIPS-validated module list); GRC (mandate mapping + evidence)) as tools — e.g. `map each system's crypto to applicable mandates (FIPS 140-3, PCI, HIPA`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS)",
        "Validation evidence — FIPS-validated modules used where required (CMVP certificate numbers)",
        "The gap assessment vs each mandate's crypto requirements + remediation plan",
        "Records demonstrating crypto compliance for audits/regulators"
      ],
      "system": [
        "The crypto inventory / CBOM",
        "CMVP (the FIPS-validated module list)",
        "GRC (mandate mapping + evidence)"
      ],
      "dataOwner": [
        "Cryptography team + Compliance / GRC",
        "Legal",
        "Security"
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
      "tagline": "Auditing \"Compliance and regulatory alignment\" as a repeatable agentic workflow: pull the real evidence (The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS)) with read-only agents, run the test against policy, and issue a defensible opinion on the Cryptographic Key & Secrets Management control.",
      "year": 2025,
      "overview": [
        "The \"Compliance and regulatory alignment\" sub-process is one of the controls an auditor must verify for Cryptographic Key & Secrets Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here The crypto inventory / CBOM, CMVP (the FIPS-validated module list), GRC (mandate mapping + evidence) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `map each system's crypto to applicable mandates (FIPS 140-3, PCI, HIPAA, GDPR, C` — read-only, against the systems of record.",
        "The test itself is specific. Verify the org's cryptography meets its regulatory + contractual obligations. PASS: applicable crypto mandates are identified; FIPS-validated modules (CMVP-listed) are used where required; algorithms/key sizes/protocols meet each standard (e.g. PCI strong crypto, CNSA for national-security systems); and compliance is evidenced for audit. Exceptions: non-FIPS-validated crypto where validation is required, algorithms below a mandate's floor, missing CMVP evidence, and crypto-compliance gaps with no remediation plan. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_compliance_and_regulatory_alignment_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from The crypto inventory / CBOM and CMVP (the FIPS-validated module list) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
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
            "sub": "pull The crypto inventory / CBOM · CMVP (the FIPS-validated module list)",
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
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "map each system's crypto to applicable mandates (FIPS 140-3, PCI, HIPAA, GDPR, CNSA, eIDAS)\nverify modules are CMVP-validated where required (check the certificate numbers on the NIST CMVP list)\ngap-assess algorithms/key sizes against each mandate's floor\nassemble the crypto-compliance evidence pack for audit"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS).",
        "The test: Verify the org's cryptography meets its regulatory + contractual obligations.",
        "Reconcile the systems of record (The crypto inventory / CBOM, CMVP (the FIPS-validated module list), GRC (mandate mapping + evidence)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. A FedRAMP system uses a non-FIPS-validated crypto library for data-at-rest (validation is mandatory there), and several PCI-scoped services still permit TLS 1.0 — both reportable compliance gaps with no remediation plan."
      ],
      "references": [
        {
          "title": "FIPS 140-3 / CMVP",
          "url": "https://csrc.nist.gov/projects/cryptographic-module-validation-program"
        },
        {
          "title": "PCI DSS",
          "url": "https://www.pcisecuritystandards.org/"
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
          "name": "09_compliance_and_regulatory_alignment_mcp.py",
          "url": "/audit-code/crypto-secrets/09_compliance_and_regulatory_alignment_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Cryptographic Key & Secrets Management evidence for \"Compliance and regulatory alignment\" (the mapping of the org's cryptography to applicable mandates (fips 140-3, pci dss, gdpr, hipaa, cnsa, eidas)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Compliance and regulatory alignment\" control for Cryptographic Key & Secrets Management at AcmeCorp. THE TEST: Verify the org's cryptography meets its regulatory + contractual obligations. PASS: applicable crypto mandates are identified; FIPS-validated modules (CMVP-listed) are used where required; algorithms/key sizes/protocols meet each standard (e.g. PCI strong crypto, CNSA for national-security systems); and compliance is evidenced for audit. Exceptions: non-FIPS-validated crypto where validation is required, algorithms below a mandate's floor, missing CMVP evidence, and crypto-compliance gaps with no remediation plan. The evidence — The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live The crypto inventory / CBOM APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. The crypto inventory / CBOM gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from The crypto inventory / CBOM; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Cryptographic Key & Secrets Management: \"Compliance and regulatory alignment\" Audit Evidence\n\nThe test:\nVerify the org's cryptography meets its regulatory + contractual obligations. PASS: applicable crypto mandates are identified; FIPS-validated modules (CMVP-listed) are used where required; algorithms/key sizes/protocols meet each standard (e.g. PCI strong crypto, CNSA for national-security systems); and compliance is evidenced for audit. Exceptions: non-FIPS-validated crypto where validation is required, algorithms below a mandate's floor, missing CMVP evidence, and crypto-compliance gaps with no remediation plan.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- crypto-secrets_inventory.json   (in-scope items — The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS))\n- crypto-secrets_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
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
            "The The mapping of the org's cryptography to applicable mandates (FIPS 140-3, PCI DSS, GDPR, HIPAA, CNSA, eIDAS) reconciled against policy, plus the resulting findings working paper",
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
            "The crypto inventory / CBOM (and the other systems of record for this domain), accessed read-only",
            "Only from a spreadsheet emailed by a manager",
            "From social media",
            "From the auditor's memory of last year"
          ],
          "correctIndex": 0,
          "explanation": "Evidence comes from the authoritative systems (e.g., The crypto inventory / CBOM) via read-only access."
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
            "Cryptography team + Compliance / GRC (with related functions attesting their part)"
          ],
          "correctIndex": 3,
          "explanation": "Cryptography team + Compliance / GRC owns the control data; the auditor independently verifies it."
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
            "A FedRAMP system uses a non-FIPS-validated crypto library for data-at-rest (validation is mandatory there), and several PCI-scoped services still permit TLS 1.0 — both reportable compliance gaps with no remediation plan.",
            "The control exists and operates as designed for every in-scope item",
            "The team uses a popular commercial vendor",
            "A new feature shipped on schedule"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. A FedRAMP system uses a non-FIPS-validated crypto library for data-at-rest (validation is mandatory there), and several PCI-scoped services still permit TLS 1.0 — both reportable compliance gaps with no remediation plan."
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
