import type { EpochConfig, StageConfig } from "../types";

export const repositoryMgmtEpoch: EpochConfig = {
  "id": "repository-mgmt",
  "name": "Repository Management",
  "subtitle": "Agentic technical & privacy audit — Repository Management",
  "description": "Audit Repository Management end to end with a read-only agent fleet: each sub-process is a module that teaches the control as a repeatable agentic workflow with downloadable MCP tooling, a CTF, and a 10-question quiz.",
  "emoji": "🗂️",
  "color": "Blue",
  "unlocked": true
};

export const repositoryMgmtStages: StageConfig[] = [
  {
    "epochId": "repository-mgmt",
    "id": "repo-01",
    "order": 1,
    "title": "Access control and authentication",
    "subtitle": "Agentic technical & privacy audit of the access control and authentication control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Access control and authentication\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify access to the source-control platform is least-privilege + strongly authenticated. PASS: the org enforces SSO + MFA for all members; repo permissions are least-privilege (few admins/owners, no blanket write-to-everyone); outside collaborators + PATs/deploy keys are inventoried, scoped, and reviewed; and access is recertified periodically. Exceptions: members without MFA, broad write/admin access, unmanaged outside collaborators, over-scoped or non-expiring PATs, and no access reviews.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab / Bitbucket org + repo permissions; IdP (SSO/SAML) + MFA; PAT / deploy-key / SSH-key inventory) as tools — e.g. `GitHub: org members + roles (gh api orgs/{org}/members; repo collabora`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos",
        "Authentication enforcement evidence (SSO/SAML required, MFA required org-wide)",
        "The PAT (personal access token) / deploy-key / SSH-key inventory + scopes + expiry",
        "Access-recertification records for repo access"
      ],
      "system": [
        "GitHub / GitLab / Bitbucket org + repo permissions",
        "IdP (SSO/SAML) + MFA",
        "PAT / deploy-key / SSH-key inventory"
      ],
      "dataOwner": [
        "Engineering org / repo admins",
        "IAM (SSO/MFA)",
        "AppSec"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-01-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Access control and authentication",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Access control and authentication\" as a repeatable agentic workflow: pull the real evidence (The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Access control and authentication\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab / Bitbucket org + repo permissions, IdP (SSO/SAML) + MFA, PAT / deploy-key / SSH-key inventory — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `GitHub: org members + roles (gh api orgs/{org}/members; repo collaborators + per` — read-only, against the systems of record.",
        "The test itself is specific. Verify access to the source-control platform is least-privilege + strongly authenticated. PASS: the org enforces SSO + MFA for all members; repo permissions are least-privilege (few admins/owners, no blanket write-to-everyone); outside collaborators + PATs/deploy keys are inventoried, scoped, and reviewed; and access is recertified periodically. Exceptions: members without MFA, broad write/admin access, unmanaged outside collaborators, over-scoped or non-expiring PATs, and no access reviews. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `01_access_control_and_authentication_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab / Bitbucket org + repo permissions and IdP (SSO/SAML) + MFA (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 01_access_control_and_authentication_mcp.py` to expose it to your agent — or `python 01_access_control_and_authentication_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab / Bitbucket org + repo permissions · IdP (SSO/SAML) + MFA",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Access control and authentication\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "GitHub: org members + roles (gh api orgs/{org}/members; repo collaborators + permission level)\nconfirm SSO/SAML enforced + the org '2FA required' setting\nlist PATs / deploy keys / SSH keys + scopes + expiry (fine-grained vs classic full-`repo`)\naccess-recertification records for write/admin"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos.",
        "The test: Verify access to the source-control platform is least-privilege + strongly authenticated.",
        "Reconcile the systems of record (GitHub / GitLab / Bitbucket org + repo permissions, IdP (SSO/SAML) + MFA, PAT / deploy-key / SSH-key inventory) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. MFA isn't enforced org-wide (12 members without it), 'write' is granted to the whole engineering team on every repo, and several classic PATs with full `repo` scope never expire."
      ],
      "references": [
        {
          "title": "GitHub — Keeping your organization secure",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure"
        },
        {
          "title": "NIST SP 800-53 AC",
          "url": "https://csrc.nist.gov/projects/risk-management/sp800-53-controls"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "01_access_control_and_authentication_mcp.py",
          "url": "/audit-code/repository-mgmt/01_access_control_and_authentication_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Access control and authentication\" (the repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Access control and authentication\" control for Repository Management at AcmeCorp. THE TEST: Verify access to the source-control platform is least-privilege + strongly authenticated. PASS: the org enforces SSO + MFA for all members; repo permissions are least-privilege (few admins/owners, no blanket write-to-everyone); outside collaborators + PATs/deploy keys are inventoried, scoped, and reviewed; and access is recertified periodically. Exceptions: members without MFA, broad write/admin access, unmanaged outside collaborators, over-scoped or non-expiring PATs, and no access reviews. The evidence — The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab / Bitbucket org + repo permissions APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab / Bitbucket org + repo permissions gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab / Bitbucket org + repo permissions; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Access control and authentication\" Audit Evidence\n\nThe test:\nVerify access to the source-control platform is least-privilege + strongly authenticated. PASS: the org enforces SSO + MFA for all members; repo permissions are least-privilege (few admins/owners, no blanket write-to-everyone); outside collaborators + PATs/deploy keys are inventoried, scoped, and reviewed; and access is recertified periodically. Exceptions: members without MFA, broad write/admin access, unmanaged outside collaborators, over-scoped or non-expiring PATs, and no access reviews.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Access control and authentication\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Access control and authentication\" control must cover\n# fragment: access_control_authentication_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "access_control_authentication_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-01-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Access control and authentication\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the access control and authentication control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the access control and authentication control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for access control and authentication against comparable organisations in the sector",
            "Obtain evidence that the access control and authentication control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-01-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Access control and authentication\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-01-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Access control and authentication\" control?",
          "options": [
            "A point-in-time screenshot of one system's access control and authentication settings, captured during the walkthrough",
            "The The repo/org access export — every member + their role (read/write/maintain/admin/owner) across repos, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the access control and authentication control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's access control and authentication capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-01-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Access control and authentication\"?",
          "options": [
            "From GitHub / GitLab / Bitbucket org + repo permissions and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how access control and authentication works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub / GitLab / Bitbucket org + repo permissions) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-01-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Access control and authentication\"?",
          "options": [
            "The external audit firm, since it is the party examining the access control and authentication control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the access control and authentication data is shared, so the accountability sits with no one in particular",
            "Engineering org / repo admins, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org / repo admins owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-01-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Access control and authentication\", which part stays with the human auditor?",
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
          "id": "repo-01-q7",
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
          "id": "repo-01-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Access control and authentication\", which of these is a realistic reportable finding?",
          "options": [
            "MFA isn't enforced org-wide (12 members without it), 'write' is granted to the whole engineering team on every repo, and several classic PATs with full `repo` scope never expire.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. MFA isn't enforced org-wide (12 members without it), 'write' is granted to the whole engineering team on every repo, and several classic PATs with full `repo` scope never expire. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-01-q9",
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
          "id": "repo-01-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Access control and authentication\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind access control and authentication, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-02",
    "order": 2,
    "title": "Branch management and protection",
    "subtitle": "Agentic technical & privacy audit of the branch management and protection control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Branch management and protection\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify protected branches enforce review + integrity. PASS: default + release branches require PR review (CODEOWNERS for sensitive paths), passing status checks, block force-push + deletion, and ideally require signed commits; admin bypass is restricted + logged; coverage spans all important repos. Exceptions: unprotected default branches, no required review, force-push/deletion allowed, admins routinely bypassing, and protection on only some repos.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (SCM branch-protection / rulesets; CODEOWNERS; Status-check integrations) as tools — e.g. `GitHub: gh api repos/{o}/{r}/branches/{b}/protection per repo (reviews`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion)",
        "The list of repos/branches WITHOUT protection",
        "Admin-bypass settings + recent bypass events",
        "The merge-method + linear-history policy"
      ],
      "system": [
        "SCM branch-protection / rulesets",
        "CODEOWNERS",
        "Status-check integrations"
      ],
      "dataOwner": [
        "Repo admins / engineering org",
        "AppSec",
        "Release management"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-02-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Branch management and protection",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Branch management and protection\" as a repeatable agentic workflow: pull the real evidence (Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Branch management and protection\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM branch-protection / rulesets, CODEOWNERS, Status-check integrations — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `GitHub: gh api repos/{o}/{r}/branches/{b}/protection per repo (reviews, checks, ` — read-only, against the systems of record.",
        "The test itself is specific. Verify protected branches enforce review + integrity. PASS: default + release branches require PR review (CODEOWNERS for sensitive paths), passing status checks, block force-push + deletion, and ideally require signed commits; admin bypass is restricted + logged; coverage spans all important repos. Exceptions: unprotected default branches, no required review, force-push/deletion allowed, admins routinely bypassing, and protection on only some repos. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `02_branch_management_and_protection_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM branch-protection / rulesets and CODEOWNERS (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 02_branch_management_and_protection_mcp.py` to expose it to your agent — or `python 02_branch_management_and_protection_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM branch-protection / rulesets · CODEOWNERS",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Branch management and protection\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "GitHub: gh api repos/{o}/{r}/branches/{b}/protection per repo (reviews, checks, force-push, signatures)\nfind repos with no protection on the default branch\n'enforce admins' / allow-bypass setting + bypass events from the audit log\nmerge method + require-linear-history"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion).",
        "The test: Verify protected branches enforce review + integrity.",
        "Reconcile the systems of record (SCM branch-protection / rulesets, CODEOWNERS, Status-check integrations) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Of 80 repos, 30 have no branch protection on `main` at all; on the protected ones admins can bypass required reviews, and the org default still allows force-push."
      ],
      "references": [
        {
          "title": "GitHub — About protected branches",
          "url": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches"
        },
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "02_branch_management_and_protection_mcp.py",
          "url": "/audit-code/repository-mgmt/02_branch_management_and_protection_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Branch management and protection\" (branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Branch management and protection\" control for Repository Management at AcmeCorp. THE TEST: Verify protected branches enforce review + integrity. PASS: default + release branches require PR review (CODEOWNERS for sensitive paths), passing status checks, block force-push + deletion, and ideally require signed commits; admin bypass is restricted + logged; coverage spans all important repos. Exceptions: unprotected default branches, no required review, force-push/deletion allowed, admins routinely bypassing, and protection on only some repos. The evidence — Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM branch-protection / rulesets APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM branch-protection / rulesets gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM branch-protection / rulesets; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Branch management and protection\" Audit Evidence\n\nThe test:\nVerify protected branches enforce review + integrity. PASS: default + release branches require PR review (CODEOWNERS for sensitive paths), passing status checks, block force-push + deletion, and ideally require signed commits; admin bypass is restricted + logged; coverage spans all important repos. Exceptions: unprotected default branches, no required review, force-push/deletion allowed, admins routinely bypassing, and protection on only some repos.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Branch management and protection\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Branch management and protection\" control must cover\n# fragment: branch_management_protection_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "branch_management_protection_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-02-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Branch management and protection\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the branch management and protection control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the branch management and protection control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for branch management and protection against comparable organisations in the sector",
            "Obtain evidence that the branch management and protection control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-02-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Branch management and protection\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-02-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Branch management and protection\" control?",
          "options": [
            "A point-in-time screenshot of one system's branch management and protection settings, captured during the walkthrough",
            "The Branch-protection rules per repo on default/release branches (required reviews, status checks, signed commits, no force-push, no deletion), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the branch management and protection control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's branch management and protection capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-02-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Branch management and protection\"?",
          "options": [
            "From SCM branch-protection / rulesets and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how branch management and protection works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SCM branch-protection / rulesets) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-02-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Branch management and protection\"?",
          "options": [
            "The external audit firm, since it is the party examining the branch management and protection control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the branch management and protection data is shared, so the accountability sits with no one in particular",
            "Repo admins / engineering org, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Repo admins / engineering org owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-02-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Branch management and protection\", which part stays with the human auditor?",
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
          "id": "repo-02-q7",
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
          "id": "repo-02-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Branch management and protection\", which of these is a realistic reportable finding?",
          "options": [
            "Of 80 repos, 30 have no branch protection on `main` at all; on the protected ones admins can bypass required reviews, and the org default still allows force-push.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Of 80 repos, 30 have no branch protection on `main` at all; on the protected ones admins can bypass required reviews, and the org default still allows force-push. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-02-q9",
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
          "id": "repo-02-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Branch management and protection\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind branch management and protection, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-03",
    "order": 3,
    "title": "Commit integrity and code review",
    "subtitle": "Agentic technical & privacy audit of the commit integrity and code review control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 8,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Commit integrity and code review\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify code reaches the default branch only via reviewed, integrity-verified commits. PASS: protected branches require ≥1 (ideally 2) independent reviews, CODEOWNERS gates sensitive paths, no self-approval/merge of one's own PR, and commits are signed + verified; the review isn't a rubber stamp. Exceptions: PRs self-approved/merged, sensitive paths with no CODEOWNERS, unsigned commits on protected branches, and reviews that approve instantly without inspection.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (SCM PR/review + CODEOWNERS; Commit signing (GPG / gitsign); The PR audit trail) as tools — e.g. `sample merged PRs: required approvals present + reviewer ≠ author (no `, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches",
        "Code-review evidence — PRs merged with the required approvals (reviewer ≠ author)",
        "The review-quality signal (review depth, time-to-review, approve-without-comment rate)",
        "CODEOWNERS coverage for sensitive paths"
      ],
      "system": [
        "SCM PR/review + CODEOWNERS",
        "Commit signing (GPG / gitsign)",
        "The PR audit trail"
      ],
      "dataOwner": [
        "Engineering (reviewers)",
        "AppSec",
        "Repo admins"
      ],
      "scoring": {
        "ease": "EASE 8/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-03-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Commit integrity and code review",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Commit integrity and code review\" as a repeatable agentic workflow: pull the real evidence (Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Commit integrity and code review\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM PR/review + CODEOWNERS, Commit signing (GPG / gitsign), The PR audit trail — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `sample merged PRs: required approvals present + reviewer ≠ author (no self-merge` — read-only, against the systems of record.",
        "The test itself is specific. Verify code reaches the default branch only via reviewed, integrity-verified commits. PASS: protected branches require ≥1 (ideally 2) independent reviews, CODEOWNERS gates sensitive paths, no self-approval/merge of one's own PR, and commits are signed + verified; the review isn't a rubber stamp. Exceptions: PRs self-approved/merged, sensitive paths with no CODEOWNERS, unsigned commits on protected branches, and reviews that approve instantly without inspection. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `03_commit_integrity_and_code_review_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM PR/review + CODEOWNERS and Commit signing (GPG / gitsign) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 03_commit_integrity_and_code_review_mcp.py` to expose it to your agent — or `python 03_commit_integrity_and_code_review_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM PR/review + CODEOWNERS · Commit signing (GPG / gitsign)",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Commit integrity and code review\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "sample merged PRs: required approvals present + reviewer ≠ author (no self-merge)\nverified-commit coverage on protected branches (the 'Verified' badge / require-signed)\nCODEOWNERS coverage for sensitive directories\nreview metrics: median time-to-approve + approve-without-comment rate (rubber-stamp signal)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches.",
        "The test: Verify code reaches the default branch only via reviewed, integrity-verified commits.",
        "Reconcile the systems of record (SCM PR/review + CODEOWNERS, Commit signing (GPG / gitsign), The PR audit trail) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Many PRs are self-approved by the author (admin bypass), sensitive infra paths have no CODEOWNERS, commits aren't signed, and 60% of approvals happen within 30 seconds with no comments."
      ],
      "references": [
        {
          "title": "SLSA — two-person review",
          "url": "https://slsa.dev/"
        },
        {
          "title": "NIST SSDF — PS.1",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "03_commit_integrity_and_code_review_mcp.py",
          "url": "/audit-code/repository-mgmt/03_commit_integrity_and_code_review_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Commit integrity and code review\" (signed/verified-commit coverage (gpg / sigstore gitsign) on protected branches), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Commit integrity and code review\" control for Repository Management at AcmeCorp. THE TEST: Verify code reaches the default branch only via reviewed, integrity-verified commits. PASS: protected branches require ≥1 (ideally 2) independent reviews, CODEOWNERS gates sensitive paths, no self-approval/merge of one's own PR, and commits are signed + verified; the review isn't a rubber stamp. Exceptions: PRs self-approved/merged, sensitive paths with no CODEOWNERS, unsigned commits on protected branches, and reviews that approve instantly without inspection. The evidence — Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM PR/review + CODEOWNERS APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM PR/review + CODEOWNERS gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM PR/review + CODEOWNERS; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Commit integrity and code review\" Audit Evidence\n\nThe test:\nVerify code reaches the default branch only via reviewed, integrity-verified commits. PASS: protected branches require ≥1 (ideally 2) independent reviews, CODEOWNERS gates sensitive paths, no self-approval/merge of one's own PR, and commits are signed + verified; the review isn't a rubber stamp. Exceptions: PRs self-approved/merged, sensitive paths with no CODEOWNERS, unsigned commits on protected branches, and reviews that approve instantly without inspection.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Commit integrity and code review\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Commit integrity and code review\" control must cover\n# fragment: commit_integrity_code_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "commit_integrity_code_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-03-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Commit integrity and code review\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the commit integrity and code review control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the commit integrity and code review control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for commit integrity and code review against comparable organisations in the sector",
            "Obtain evidence that the commit integrity and code review control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-03-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Commit integrity and code review\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-03-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Commit integrity and code review\" control?",
          "options": [
            "A point-in-time screenshot of one system's commit integrity and code review settings, captured during the walkthrough",
            "The Signed/verified-commit coverage (GPG / Sigstore gitsign) on protected branches, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the commit integrity and code review control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's commit integrity and code review capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-03-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Commit integrity and code review\"?",
          "options": [
            "From SCM PR/review + CODEOWNERS and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how commit integrity and code review works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SCM PR/review + CODEOWNERS) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-03-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Commit integrity and code review\"?",
          "options": [
            "The external audit firm, since it is the party examining the commit integrity and code review control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the commit integrity and code review data is shared, so the accountability sits with no one in particular",
            "Engineering (reviewers), with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Engineering (reviewers) owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-03-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Commit integrity and code review\", which part stays with the human auditor?",
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
          "id": "repo-03-q7",
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
          "id": "repo-03-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Commit integrity and code review\", which of these is a realistic reportable finding?",
          "options": [
            "Many PRs are self-approved by the author (admin bypass), sensitive infra paths have no CODEOWNERS, commits aren't signed, and 60% of approvals happen within 30 seconds with no comments.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Many PRs are self-approved by the author (admin bypass), sensitive infra paths have no CODEOWNERS, commits aren't signed, and 60% of approvals happen within 30 seconds with no comments. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-03-q9",
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
          "id": "repo-03-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Commit integrity and code review\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind commit integrity and code review, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-04",
    "order": 4,
    "title": "Secrets and credential management",
    "subtitle": "Agentic technical & privacy audit of the secrets and credential management control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 5,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Secrets and credential management\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify secrets aren't committed and are detected/prevented. PASS: secret scanning runs across all repos including history, push-protection blocks new secrets pre-merge, found secrets are rotated (invalidated, not just deleted), and CI/repo secrets are scoped + rotated. Exceptions: repos not scanned, no push-protection, found secrets removed but never rotated (still valid in history), and over-broad/stale Actions secrets or deploy keys.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub secret scanning + push protection (or gitleaks / TruffleHog); Repo/org/Actions secret stores; Deploy keys / PATs) as tools — e.g. `confirm org-wide secret scanning + push protection enabled`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "Secret-scanning + push-protection status across all repos (history + new commits)",
        "The historical secret findings + their remediation (rotated, not just deleted)",
        "Repository / Actions secrets inventory + scope",
        "Deploy keys / PATs / SSH keys with write access"
      ],
      "system": [
        "GitHub secret scanning + push protection (or gitleaks / TruffleHog)",
        "Repo/org/Actions secret stores",
        "Deploy keys / PATs"
      ],
      "dataOwner": [
        "AppSec / platform security",
        "Developers",
        "DevOps"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-04-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Secrets and credential management",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Secrets and credential management\" as a repeatable agentic workflow: pull the real evidence (Secret-scanning + push-protection status across all repos (history + new commits)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Secrets and credential management\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me secret-scanning + push-protection status across all repos (history + new commits), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub secret scanning + push protection (or gitleaks / TruffleHog), Repo/org/Actions secret stores, Deploy keys / PATs — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm org-wide secret scanning + push protection enabled` — read-only, against the systems of record.",
        "The test itself is specific. Verify secrets aren't committed and are detected/prevented. PASS: secret scanning runs across all repos including history, push-protection blocks new secrets pre-merge, found secrets are rotated (invalidated, not just deleted), and CI/repo secrets are scoped + rotated. Exceptions: repos not scanned, no push-protection, found secrets removed but never rotated (still valid in history), and over-broad/stale Actions secrets or deploy keys. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `04_secrets_and_credential_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub secret scanning + push protection (or gitleaks / TruffleHog) and Repo/org/Actions secret stores (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 04_secrets_and_credential_management_mcp.py` to expose it to your agent — or `python 04_secrets_and_credential_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub secret scanning + push protection (or gitleaks / TruffleHog) · Repo/org/Actions secret stores",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Secrets and credential management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm org-wide secret scanning + push protection enabled\ngitleaks / TruffleHog over full history for repos not covered\nfor each historical finding, confirm ROTATION (credential invalidated)\nActions secrets + deploy keys inventory + scope + last-rotated"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: Secret-scanning + push-protection status across all repos (history + new commits).",
        "The test: Verify secrets aren't committed and are detected/prevented.",
        "Reconcile the systems of record (GitHub secret scanning + push protection (or gitleaks / TruffleHog), Repo/org/Actions secret stores, Deploy keys / PATs) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Push-protection is off, a history scan surfaces 40 live credentials never rotated, and several repos have write-capable deploy keys no one can account for."
      ],
      "references": [
        {
          "title": "GitHub Secret Scanning",
          "url": "https://docs.github.com/code-security/secret-scanning"
        },
        {
          "title": "OWASP Secrets Management Cheat Sheet",
          "url": "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "04_secrets_and_credential_management_mcp.py",
          "url": "/audit-code/repository-mgmt/04_secrets_and_credential_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Secrets and credential management\" (secret-scanning + push-protection status across all repos (history + new commits)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Secrets and credential management\" control for Repository Management at AcmeCorp. THE TEST: Verify secrets aren't committed and are detected/prevented. PASS: secret scanning runs across all repos including history, push-protection blocks new secrets pre-merge, found secrets are rotated (invalidated, not just deleted), and CI/repo secrets are scoped + rotated. Exceptions: repos not scanned, no push-protection, found secrets removed but never rotated (still valid in history), and over-broad/stale Actions secrets or deploy keys. The evidence — Secret-scanning + push-protection status across all repos (history + new commits) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub secret scanning + push protection (or gitleaks / TruffleHog) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub secret scanning + push protection (or gitleaks / TruffleHog) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub secret scanning + push protection (or gitleaks / TruffleHog); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Secrets and credential management\" Audit Evidence\n\nThe test:\nVerify secrets aren't committed and are detected/prevented. PASS: secret scanning runs across all repos including history, push-protection blocks new secrets pre-merge, found secrets are rotated (invalidated, not just deleted), and CI/repo secrets are scoped + rotated. Exceptions: repos not scanned, no push-protection, found secrets removed but never rotated (still valid in history), and over-broad/stale Actions secrets or deploy keys.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — Secret-scanning + push-protection status across all repos (history + new commits))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Secrets and credential management\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Secrets and credential management\" control must cover\n# fragment: secrets_credential_management_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "secrets_credential_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-04-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Secrets and credential management\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the secrets and credential management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the secrets and credential management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for secrets and credential management against comparable organisations in the sector",
            "Obtain evidence that the secrets and credential management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-04-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Secrets and credential management\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-04-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Secrets and credential management\" control?",
          "options": [
            "A point-in-time screenshot of one system's secrets and credential management settings, captured during the walkthrough",
            "The Secret-scanning + push-protection status across all repos (history + new commits), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the secrets and credential management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's secrets and credential management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-04-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Secrets and credential management\"?",
          "options": [
            "From GitHub secret scanning + push protection (or gitleaks / TruffleHog) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how secrets and credential management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub secret scanning + push protection (or gitleaks / TruffleHog)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-04-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Secrets and credential management\"?",
          "options": [
            "The external audit firm, since it is the party examining the secrets and credential management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the secrets and credential management data is shared, so the accountability sits with no one in particular",
            "AppSec / platform security, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "AppSec / platform security owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-04-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Secrets and credential management\", which part stays with the human auditor?",
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
          "id": "repo-04-q7",
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
          "id": "repo-04-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Secrets and credential management\", which of these is a realistic reportable finding?",
          "options": [
            "Push-protection is off, a history scan surfaces 40 live credentials never rotated, and several repos have write-capable deploy keys no one can account for.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Push-protection is off, a history scan surfaces 40 live credentials never rotated, and several repos have write-capable deploy keys no one can account for. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-04-q9",
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
          "id": "repo-04-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Secrets and credential management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind secrets and credential management, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-05",
    "order": 5,
    "title": "Repository configuration and hardening",
    "subtitle": "Agentic technical & privacy audit of the repository configuration and hardening control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Repository configuration and hardening\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify repos + the org are configured to a secure baseline. PASS: the org default member permission is least-privilege (read, not write); Actions is restricted (allow-listed actions, read-only default token, fork-PR approval required, OIDC for cloud); private repos aren't accidentally public; Dependabot + dependency graph are on; and settings match a documented baseline. Exceptions: org default = write/admin, unrestricted Actions + write-default token, fork PRs running with secrets, accidentally-public repos, and Dependabot off.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab org + repo settings; Actions settings; A config baseline (OpenSSF Scorecard / CIS GitHub)) as tools — e.g. `org settings: default member permission, Actions allowed-actions, defa`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot)",
        "Config-drift report vs the baseline across repos",
        "GitHub Actions security settings (allowed actions, default GITHUB_TOKEN permissions, fork-PR approval, OIDC)",
        "Public-vs-private + accidental-public-repo detection"
      ],
      "system": [
        "GitHub / GitLab org + repo settings",
        "Actions settings",
        "A config baseline (OpenSSF Scorecard / CIS GitHub)"
      ],
      "dataOwner": [
        "Org/repo admins / platform",
        "AppSec",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-05-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Repository configuration and hardening",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Repository configuration and hardening\" as a repeatable agentic workflow: pull the real evidence (The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Repository configuration and hardening\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab org + repo settings, Actions settings, A config baseline (OpenSSF Scorecard / CIS GitHub) — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `org settings: default member permission, Actions allowed-actions, default-token ` — read-only, against the systems of record.",
        "The test itself is specific. Verify repos + the org are configured to a secure baseline. PASS: the org default member permission is least-privilege (read, not write); Actions is restricted (allow-listed actions, read-only default token, fork-PR approval required, OIDC for cloud); private repos aren't accidentally public; Dependabot + dependency graph are on; and settings match a documented baseline. Exceptions: org default = write/admin, unrestricted Actions + write-default token, fork PRs running with secrets, accidentally-public repos, and Dependabot off. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `05_repository_configuration_and_hardening_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab org + repo settings and Actions settings (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 05_repository_configuration_and_hardening_mcp.py` to expose it to your agent — or `python 05_repository_configuration_and_hardening_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab org + repo settings · Actions settings",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Repository configuration and hardening\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "org settings: default member permission, Actions allowed-actions, default-token permissions, fork-PR approval\nOpenSSF Scorecard across repos vs the baseline (drift)\nlist public repos (any that should be private?)\nconfirm Dependabot / dependency-graph enabled"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot).",
        "The test: Verify repos + the org are configured to a secure baseline.",
        "Reconcile the systems of record (GitHub / GitLab org + repo settings, Actions settings, A config baseline (OpenSSF Scorecard / CIS GitHub)) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org default member permission is 'write', Actions runs any third-party action with a write-default token, fork PRs execute with access to secrets, and two internal repos are public."
      ],
      "references": [
        {
          "title": "OpenSSF Scorecard",
          "url": "https://github.com/ossf/scorecard"
        },
        {
          "title": "CIS GitHub Benchmark",
          "url": "https://www.cisecurity.org/benchmark/github"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "05_repository_configuration_and_hardening_mcp.py",
          "url": "/audit-code/repository-mgmt/05_repository_configuration_and_hardening_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Repository configuration and hardening\" (the org/repo security-settings baseline (default permission, actions permissions, fork policy, visibility, dependabot)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Repository configuration and hardening\" control for Repository Management at AcmeCorp. THE TEST: Verify repos + the org are configured to a secure baseline. PASS: the org default member permission is least-privilege (read, not write); Actions is restricted (allow-listed actions, read-only default token, fork-PR approval required, OIDC for cloud); private repos aren't accidentally public; Dependabot + dependency graph are on; and settings match a documented baseline. Exceptions: org default = write/admin, unrestricted Actions + write-default token, fork PRs running with secrets, accidentally-public repos, and Dependabot off. The evidence — The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab org + repo settings APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab org + repo settings gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab org + repo settings; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Repository configuration and hardening\" Audit Evidence\n\nThe test:\nVerify repos + the org are configured to a secure baseline. PASS: the org default member permission is least-privilege (read, not write); Actions is restricted (allow-listed actions, read-only default token, fork-PR approval required, OIDC for cloud); private repos aren't accidentally public; Dependabot + dependency graph are on; and settings match a documented baseline. Exceptions: org default = write/admin, unrestricted Actions + write-default token, fork PRs running with secrets, accidentally-public repos, and Dependabot off.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Repository configuration and hardening\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Repository configuration and hardening\" control must cover\n# fragment: repository_configuration_hardening_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "repository_configuration_hardening_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-05-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Repository configuration and hardening\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the repository configuration and hardening control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the repository configuration and hardening control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for repository configuration and hardening against comparable organisations in the sector",
            "Obtain evidence that the repository configuration and hardening control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-05-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Repository configuration and hardening\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-05-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Repository configuration and hardening\" control?",
          "options": [
            "A point-in-time screenshot of one system's repository configuration and hardening settings, captured during the walkthrough",
            "The The org/repo security-settings baseline (default permission, Actions permissions, fork policy, visibility, Dependabot), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the repository configuration and hardening control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's repository configuration and hardening capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-05-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Repository configuration and hardening\"?",
          "options": [
            "From GitHub / GitLab org + repo settings and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how repository configuration and hardening works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub / GitLab org + repo settings) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-05-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Repository configuration and hardening\"?",
          "options": [
            "The external audit firm, since it is the party examining the repository configuration and hardening control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the repository configuration and hardening data is shared, so the accountability sits with no one in particular",
            "Org/repo admins / platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Org/repo admins / platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-05-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Repository configuration and hardening\", which part stays with the human auditor?",
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
          "id": "repo-05-q7",
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
          "id": "repo-05-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Repository configuration and hardening\", which of these is a realistic reportable finding?",
          "options": [
            "The org default member permission is 'write', Actions runs any third-party action with a write-default token, fork PRs execute with access to secrets, and two internal repos are public.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org default member permission is 'write', Actions runs any third-party action with a write-default token, fork PRs execute with access to secrets, and two internal repos are public. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-05-q9",
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
          "id": "repo-05-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Repository configuration and hardening\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind repository configuration and hardening, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-06",
    "order": 6,
    "title": "Dependency and package management",
    "subtitle": "Agentic technical & privacy audit of the dependency and package management control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 7,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Dependency and package management\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify dependencies + internal packages are managed securely. PASS: internal packages publish to a controlled registry with scoping + immutability + publish-access control, protected against dependency confusion (scoped names, registry-priority/lockfile pinning); automated dependency updates (Dependabot/Renovate) run; and published packages carry provenance. Exceptions: anyone can publish, mutable/overwritable versions, dependency-confusion exposure (unscoped internal names resolvable from public), no automated updates, and unsigned published packages.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (Package registry (GitHub Packages / Artifactory / npm-PyPI proxy); Dependabot / Renovate; Lockfiles + .npmrc / registry config) as tools — e.g. `registry: who can publish + version immutability + scope settings`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy",
        "Dependabot / Renovate update config + coverage",
        "Dependency-confusion / namespace-protection posture (scoped names, registry priority, lockfile pinning)",
        "Published-package provenance / signing"
      ],
      "system": [
        "Package registry (GitHub Packages / Artifactory / npm-PyPI proxy)",
        "Dependabot / Renovate",
        "Lockfiles + .npmrc / registry config"
      ],
      "dataOwner": [
        "Platform / DevOps",
        "AppSec",
        "Developers"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-06-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Dependency and package management",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Dependency and package management\" as a repeatable agentic workflow: pull the real evidence (The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Dependency and package management\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the internal package-registry config (who can publish, version immutability, scoping) + the dependency policy, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Package registry (GitHub Packages / Artifactory / npm-PyPI proxy), Dependabot / Renovate, Lockfiles + .npmrc / registry config — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `registry: who can publish + version immutability + scope settings` — read-only, against the systems of record.",
        "The test itself is specific. Verify dependencies + internal packages are managed securely. PASS: internal packages publish to a controlled registry with scoping + immutability + publish-access control, protected against dependency confusion (scoped names, registry-priority/lockfile pinning); automated dependency updates (Dependabot/Renovate) run; and published packages carry provenance. Exceptions: anyone can publish, mutable/overwritable versions, dependency-confusion exposure (unscoped internal names resolvable from public), no automated updates, and unsigned published packages. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `06_dependency_and_package_management_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Package registry (GitHub Packages / Artifactory / npm-PyPI proxy) and Dependabot / Renovate (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 06_dependency_and_package_management_mcp.py` to expose it to your agent — or `python 06_dependency_and_package_management_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Package registry (GitHub Packages / Artifactory / npm-PyPI proxy) · Dependabot / Renovate",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Dependency and package management\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "registry: who can publish + version immutability + scope settings\ncheck dependency-confusion exposure: are internal package names unscoped + resolvable from public registries?\nDependabot / Renovate coverage across repos\npublished-package provenance (npm provenance / SLSA)"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy.",
        "The test: Verify dependencies + internal packages are managed securely.",
        "Reconcile the systems of record (Package registry (GitHub Packages / Artifactory / npm-PyPI proxy), Dependabot / Renovate, Lockfiles + .npmrc / registry config) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Internal npm packages use unscoped names that also resolve from the public registry (classic dependency confusion), package versions are overwritable, and anyone with write can publish."
      ],
      "references": [
        {
          "title": "NIST SP 800-161 C-SCRM",
          "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/final"
        },
        {
          "title": "SLSA",
          "url": "https://slsa.dev/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "06_dependency_and_package_management_mcp.py",
          "url": "/audit-code/repository-mgmt/06_dependency_and_package_management_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Dependency and package management\" (the internal package-registry config (who can publish, version immutability, scoping) + the dependency policy), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Dependency and package management\" control for Repository Management at AcmeCorp. THE TEST: Verify dependencies + internal packages are managed securely. PASS: internal packages publish to a controlled registry with scoping + immutability + publish-access control, protected against dependency confusion (scoped names, registry-priority/lockfile pinning); automated dependency updates (Dependabot/Renovate) run; and published packages carry provenance. Exceptions: anyone can publish, mutable/overwritable versions, dependency-confusion exposure (unscoped internal names resolvable from public), no automated updates, and unsigned published packages. The evidence — The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Package registry (GitHub Packages / Artifactory / npm-PyPI proxy) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Package registry (GitHub Packages / Artifactory / npm-PyPI proxy) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Package registry (GitHub Packages / Artifactory / npm-PyPI proxy); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Dependency and package management\" Audit Evidence\n\nThe test:\nVerify dependencies + internal packages are managed securely. PASS: internal packages publish to a controlled registry with scoping + immutability + publish-access control, protected against dependency confusion (scoped names, registry-priority/lockfile pinning); automated dependency updates (Dependabot/Renovate) run; and published packages carry provenance. Exceptions: anyone can publish, mutable/overwritable versions, dependency-confusion exposure (unscoped internal names resolvable from public), no automated updates, and unsigned published packages.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Dependency and package management\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Dependency and package management\" control must cover\n# fragment: dependency_package_management_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "dependency_package_management_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-06-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Dependency and package management\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the dependency and package management control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the dependency and package management control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for dependency and package management against comparable organisations in the sector",
            "Obtain evidence that the dependency and package management control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-06-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Dependency and package management\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-06-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Dependency and package management\" control?",
          "options": [
            "A point-in-time screenshot of one system's dependency and package management settings, captured during the walkthrough",
            "The The internal package-registry config (who can publish, version immutability, scoping) + the dependency policy, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the dependency and package management control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's dependency and package management capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-06-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Dependency and package management\"?",
          "options": [
            "From Package registry (GitHub Packages / Artifactory / npm-PyPI proxy) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how dependency and package management works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Package registry (GitHub Packages / Artifactory / npm-PyPI proxy)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-06-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Dependency and package management\"?",
          "options": [
            "The external audit firm, since it is the party examining the dependency and package management control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the dependency and package management data is shared, so the accountability sits with no one in particular",
            "Platform / DevOps, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-06-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Dependency and package management\", which part stays with the human auditor?",
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
          "id": "repo-06-q7",
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
          "id": "repo-06-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Dependency and package management\", which of these is a realistic reportable finding?",
          "options": [
            "Internal npm packages use unscoped names that also resolve from the public registry (classic dependency confusion), package versions are overwritable, and anyone with write can publish.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Internal npm packages use unscoped names that also resolve from the public registry (classic dependency confusion), package versions are overwritable, and anyone with write can publish. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-06-q9",
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
          "id": "repo-06-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Dependency and package management\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind dependency and package management, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-07",
    "order": 7,
    "title": "Audit logging and monitoring",
    "subtitle": "Agentic technical & privacy audit of the audit logging and monitoring control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Audit logging and monitoring\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify source-control activity is logged + monitored. PASS: the org audit log streams to the SIEM (membership, permission, secret, repo, branch-protection, workflow events) with retention; detections fire on high-risk events (admin promotion, branch-protection disabled, new PAT/deploy key, anomalous bulk clone/exfil); and someone reviews them. Exceptions: audit log not streamed, no detections on SCM abuse, short retention, and no monitoring for bulk-clone exfiltration.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (GitHub / GitLab audit-log streaming; SIEM (Sentinel / Splunk); Detection content) as tools — e.g. `confirm GitHub audit-log streaming to the SIEM (org + Git events) + re`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits)",
        "Retention of SCM audit logs",
        "Detections on high-risk SCM events (admin grant, protection disabled, new deploy key/PAT, mass clone)",
        "Git-clone / exfil monitoring (anomalous bulk clones)"
      ],
      "system": [
        "GitHub / GitLab audit-log streaming",
        "SIEM (Sentinel / Splunk)",
        "Detection content"
      ],
      "dataOwner": [
        "Security operations / detection engineering",
        "Platform (SCM admin)",
        "SOC"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-07-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Audit logging and monitoring",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Audit logging and monitoring\" as a repeatable agentic workflow: pull the real evidence (SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits)) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Audit logging and monitoring\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me sCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits), for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here GitHub / GitLab audit-log streaming, SIEM (Sentinel / Splunk), Detection content — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm GitHub audit-log streaming to the SIEM (org + Git events) + retention` — read-only, against the systems of record.",
        "The test itself is specific. Verify source-control activity is logged + monitored. PASS: the org audit log streams to the SIEM (membership, permission, secret, repo, branch-protection, workflow events) with retention; detections fire on high-risk events (admin promotion, branch-protection disabled, new PAT/deploy key, anomalous bulk clone/exfil); and someone reviews them. Exceptions: audit log not streamed, no detections on SCM abuse, short retention, and no monitoring for bulk-clone exfiltration. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `07_audit_logging_and_monitoring_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from GitHub / GitLab audit-log streaming and SIEM (Sentinel / Splunk) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 07_audit_logging_and_monitoring_mcp.py` to expose it to your agent — or `python 07_audit_logging_and_monitoring_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull GitHub / GitLab audit-log streaming · SIEM (Sentinel / Splunk)",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
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
          "code": "confirm GitHub audit-log streaming to the SIEM (org + Git events) + retention\ndetections for: member-promoted-to-admin, branch-protection-disabled, new PAT/deploy-key, repo made public/deleted\nanomalous git-clone volume (exfil) detection\nreview a sample of high-risk events"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits).",
        "The test: Verify source-control activity is logged + monitored.",
        "Reconcile the systems of record (GitHub / GitLab audit-log streaming, SIEM (Sentinel / Splunk), Detection content) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Audit-log streaming isn't enabled, so SCM events never reach the SIEM; there's no detection for someone disabling branch protection or bulk-cloning every private repo before they leave."
      ],
      "references": [
        {
          "title": "NIST SP 800-92",
          "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
        },
        {
          "title": "GitHub — Audit log streaming",
          "url": "https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-your-organizations-audit-log/streaming-the-audit-log-for-your-organization"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "07_audit_logging_and_monitoring_mcp.py",
          "url": "/audit-code/repository-mgmt/07_audit_logging_and_monitoring_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Audit logging and monitoring\" (scm audit-log streaming to the siem (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits)), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Audit logging and monitoring\" control for Repository Management at AcmeCorp. THE TEST: Verify source-control activity is logged + monitored. PASS: the org audit log streams to the SIEM (membership, permission, secret, repo, branch-protection, workflow events) with retention; detections fire on high-risk events (admin promotion, branch-protection disabled, new PAT/deploy key, anomalous bulk clone/exfil); and someone reviews them. Exceptions: audit log not streamed, no detections on SCM abuse, short retention, and no monitoring for bulk-clone exfiltration. The evidence — SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits) — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live GitHub / GitLab audit-log streaming APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. GitHub / GitLab audit-log streaming gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from GitHub / GitLab audit-log streaming; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Audit logging and monitoring\" Audit Evidence\n\nThe test:\nVerify source-control activity is logged + monitored. PASS: the org audit log streams to the SIEM (membership, permission, secret, repo, branch-protection, workflow events) with retention; detections fire on high-risk events (admin promotion, branch-protection disabled, new PAT/deploy key, anomalous bulk clone/exfil); and someone reviews them. Exceptions: audit log not streamed, no detections on SCM abuse, short retention, and no monitoring for bulk-clone exfiltration.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits))\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Audit logging and monitoring\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Audit logging and monitoring\" control must cover\n# fragment: audit_logging_monitoring_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "audit_logging_monitoring_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-07-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Audit logging and monitoring\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the audit logging and monitoring control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the audit logging and monitoring control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for audit logging and monitoring against comparable organisations in the sector",
            "Obtain evidence that the audit logging and monitoring control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-07-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Audit logging and monitoring\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-07-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Audit logging and monitoring\" control?",
          "options": [
            "A point-in-time screenshot of one system's audit logging and monitoring settings, captured during the walkthrough",
            "The SCM audit-log streaming to the SIEM (member changes, permission grants, secret access, repo deletion, branch-protection + workflow edits), reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the audit logging and monitoring control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's audit logging and monitoring capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-07-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Audit logging and monitoring\"?",
          "options": [
            "From GitHub / GitLab audit-log streaming and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how audit logging and monitoring works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. GitHub / GitLab audit-log streaming) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-07-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Audit logging and monitoring\"?",
          "options": [
            "The external audit firm, since it is the party examining the audit logging and monitoring control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the audit logging and monitoring data is shared, so the accountability sits with no one in particular",
            "Security operations / detection engineering, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Security operations / detection engineering owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-07-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Audit logging and monitoring\", which part stays with the human auditor?",
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
          "id": "repo-07-q7",
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
          "id": "repo-07-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Audit logging and monitoring\", which of these is a realistic reportable finding?",
          "options": [
            "Audit-log streaming isn't enabled, so SCM events never reach the SIEM; there's no detection for someone disabling branch protection or bulk-cloning every private repo before they leave.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Audit-log streaming isn't enabled, so SCM events never reach the SIEM; there's no detection for someone disabling branch protection or bulk-cloning every private repo before they leave. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-07-q9",
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
          "id": "repo-07-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Audit logging and monitoring\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind audit logging and monitoring, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-08",
    "order": 8,
    "title": "Repository governance and lifecycle",
    "subtitle": "Agentic technical & privacy audit of the repository governance and lifecycle control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 6,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Repository governance and lifecycle\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify repositories are governed across their lifecycle. PASS: every repo has an owner + classification; creation follows a standard (protection/scanning applied at birth); stale/abandoned repos are identified and archived/decommissioned; and required files exist per policy. Exceptions: ownerless repos, repos created with no security setup, abandoned repos still writable + holding secrets, and no archival process (sprawl).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (SCM repo inventory + metadata; Governance automation (repo templates / Terraform-for-GitHub); Repo-config baseline) as tools — e.g. `repo inventory: owner, last-activity, archived status, required-file p`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity",
        "Repo-creation governance (naming, required setup, ownership) + the archival/deletion process",
        "Stale/abandoned-repo detection (no commits in N months, no owner)",
        "Required-file policy presence (SECURITY.md, license, CODEOWNERS)"
      ],
      "system": [
        "SCM repo inventory + metadata",
        "Governance automation (repo templates / Terraform-for-GitHub)",
        "Repo-config baseline"
      ],
      "dataOwner": [
        "Engineering org / platform",
        "Repo owners",
        "AppSec"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-08-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Repository governance and lifecycle",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Repository governance and lifecycle\" as a repeatable agentic workflow: pull the real evidence (The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Repository governance and lifecycle\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM repo inventory + metadata, Governance automation (repo templates / Terraform-for-GitHub), Repo-config baseline — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `repo inventory: owner, last-activity, archived status, required-file presence` — read-only, against the systems of record.",
        "The test itself is specific. Verify repositories are governed across their lifecycle. PASS: every repo has an owner + classification; creation follows a standard (protection/scanning applied at birth); stale/abandoned repos are identified and archived/decommissioned; and required files exist per policy. Exceptions: ownerless repos, repos created with no security setup, abandoned repos still writable + holding secrets, and no archival process (sprawl). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `08_repository_governance_and_lifecycle_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM repo inventory + metadata and Governance automation (repo templates / Terraform-for-GitHub) (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 08_repository_governance_and_lifecycle_mcp.py` to expose it to your agent — or `python 08_repository_governance_and_lifecycle_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM repo inventory + metadata · Governance automation (repo templates / Terraform-for-GitHub)",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Repository governance and lifecycle\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "repo inventory: owner, last-activity, archived status, required-file presence\nfind stale repos (no commits in 12+ months) that are still writable\nconfirm repo-creation governance (templates / repos-as-code) applies protection + scanning at creation\nownerless / unclassified repos"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity.",
        "The test: Verify repositories are governed across their lifecycle.",
        "Reconcile the systems of record (SCM repo inventory + metadata, Governance automation (repo templates / Terraform-for-GitHub), Repo-config baseline) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Hundreds of repos, ~40% with no clear owner and no activity in 2+ years yet still writable; new repos are created with no branch protection or scanning, so governance only happens (if ever) retroactively."
      ],
      "references": [
        {
          "title": "NIST SSDF — PO",
          "url": "https://csrc.nist.gov/pubs/sp/800/218/final"
        },
        {
          "title": "GitHub — Managing repositories at scale",
          "url": "https://docs.github.com/en/repositories"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "08_repository_governance_and_lifecycle_mcp.py",
          "url": "/audit-code/repository-mgmt/08_repository_governance_and_lifecycle_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Repository governance and lifecycle\" (the repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Repository governance and lifecycle\" control for Repository Management at AcmeCorp. THE TEST: Verify repositories are governed across their lifecycle. PASS: every repo has an owner + classification; creation follows a standard (protection/scanning applied at birth); stale/abandoned repos are identified and archived/decommissioned; and required files exist per policy. Exceptions: ownerless repos, repos created with no security setup, abandoned repos still writable + holding secrets, and no archival process (sprawl). The evidence — The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM repo inventory + metadata APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM repo inventory + metadata gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM repo inventory + metadata; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Repository governance and lifecycle\" Audit Evidence\n\nThe test:\nVerify repositories are governed across their lifecycle. PASS: every repo has an owner + classification; creation follows a standard (protection/scanning applied at birth); stale/abandoned repos are identified and archived/decommissioned; and required files exist per policy. Exceptions: ownerless repos, repos created with no security setup, abandoned repos still writable + holding secrets, and no archival process (sprawl).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Repository governance and lifecycle\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Repository governance and lifecycle\" control must cover\n# fragment: repository_governance_lifecycle_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "repository_governance_lifecycle_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-08-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Repository governance and lifecycle\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the repository governance and lifecycle control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the repository governance and lifecycle control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for repository governance and lifecycle against comparable organisations in the sector",
            "Obtain evidence that the repository governance and lifecycle control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-08-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Repository governance and lifecycle\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-08-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Repository governance and lifecycle\" control?",
          "options": [
            "A point-in-time screenshot of one system's repository governance and lifecycle settings, captured during the walkthrough",
            "The The repo inventory with owner, classification, status (active/archived/abandoned), and creation/last-activity, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the repository governance and lifecycle control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's repository governance and lifecycle capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-08-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Repository governance and lifecycle\"?",
          "options": [
            "From SCM repo inventory + metadata and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how repository governance and lifecycle works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SCM repo inventory + metadata) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-08-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Repository governance and lifecycle\"?",
          "options": [
            "The external audit firm, since it is the party examining the repository governance and lifecycle control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the repository governance and lifecycle data is shared, so the accountability sits with no one in particular",
            "Engineering org / platform, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Engineering org / platform owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-08-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Repository governance and lifecycle\", which part stays with the human auditor?",
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
          "id": "repo-08-q7",
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
          "id": "repo-08-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Repository governance and lifecycle\", which of these is a realistic reportable finding?",
          "options": [
            "Hundreds of repos, ~40% with no clear owner and no activity in 2+ years yet still writable; new repos are created with no branch protection or scanning, so governance only happens (if ever) retroactively.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Hundreds of repos, ~40% with no clear owner and no activity in 2+ years yet still writable; new repos are created with no branch protection or scanning, so governance only happens (if ever) retroactively. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-08-q9",
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
          "id": "repo-08-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Repository governance and lifecycle\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind repository governance and lifecycle, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-09",
    "order": 9,
    "title": "Backup and recovery",
    "subtitle": "Agentic technical & privacy audit of the backup and recovery control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 7,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Backup and recovery\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify source code + SCM metadata are backed up and recoverable. PASS: repos (code + history) and critical metadata (issues, PRs, settings) are backed up on cadence to an independent location, restore is tested, coverage spans all repos, and there's a recovery plan for platform outage or malicious deletion. Exceptions: repos not backed up (relying solely on the SaaS platform), metadata not captured, backups never test-restored, and no recovery plan for a deleted-org / ransomware scenario.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (SCM backup tooling (BackHub / GitProtect / self-hosted mirror); Independent backup storage; The recovery runbook) as tools — e.g. `confirm a backup of repos + metadata exists independent of the SaaS pl`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency",
        "Restore-test evidence (a repo + its history actually restored)",
        "Coverage: repos backed up vs total",
        "The recovery plan for SCM-platform outage or compromise (incl. ransomware/mass-deletion)"
      ],
      "system": [
        "SCM backup tooling (BackHub / GitProtect / self-hosted mirror)",
        "Independent backup storage",
        "The recovery runbook"
      ],
      "dataOwner": [
        "Platform / DevOps",
        "Backup operations",
        "Security"
      ],
      "scoring": {
        "ease": "EASE 7/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-09-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Backup and recovery",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Backup and recovery\" as a repeatable agentic workflow: pull the real evidence (The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Backup and recovery\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM backup tooling (BackHub / GitProtect / self-hosted mirror), Independent backup storage, The recovery runbook — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm a backup of repos + metadata exists independent of the SaaS platform + i` — read-only, against the systems of record.",
        "The test itself is specific. Verify source code + SCM metadata are backed up and recoverable. PASS: repos (code + history) and critical metadata (issues, PRs, settings) are backed up on cadence to an independent location, restore is tested, coverage spans all repos, and there's a recovery plan for platform outage or malicious deletion. Exceptions: repos not backed up (relying solely on the SaaS platform), metadata not captured, backups never test-restored, and no recovery plan for a deleted-org / ransomware scenario. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `09_backup_and_recovery_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM backup tooling (BackHub / GitProtect / self-hosted mirror) and Independent backup storage (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 09_backup_and_recovery_mcp.py` to expose it to your agent — or `python 09_backup_and_recovery_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM backup tooling (BackHub / GitProtect / self-hosted mirror) · Independent backup storage",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Backup and recovery\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm a backup of repos + metadata exists independent of the SaaS platform + its cadence\ncoverage = backed-up repos ÷ total\nrestore-test record (repo + full history restored + verified)\nrecovery plan for org-deletion / ransomware / platform outage"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency.",
        "The test: Verify source code + SCM metadata are backed up and recoverable.",
        "Reconcile the systems of record (SCM backup tooling (BackHub / GitProtect / self-hosted mirror), Independent backup storage, The recovery runbook) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. The org relies entirely on GitHub for durability — no independent backup of code or metadata — so a compromised-admin mass-deletion or a platform incident would be unrecoverable for issues/PRs and risky for code."
      ],
      "references": [
        {
          "title": "NIST SP 800-34",
          "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/final"
        },
        {
          "title": "ISO 22301",
          "url": "https://www.iso.org/standard/75106.html"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "09_backup_and_recovery_mcp.py",
          "url": "/audit-code/repository-mgmt/09_backup_and_recovery_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Backup and recovery\" (the scm backup configuration (repos, metadata, issues/prs, settings) + frequency), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Backup and recovery\" control for Repository Management at AcmeCorp. THE TEST: Verify source code + SCM metadata are backed up and recoverable. PASS: repos (code + history) and critical metadata (issues, PRs, settings) are backed up on cadence to an independent location, restore is tested, coverage spans all repos, and there's a recovery plan for platform outage or malicious deletion. Exceptions: repos not backed up (relying solely on the SaaS platform), metadata not captured, backups never test-restored, and no recovery plan for a deleted-org / ransomware scenario. The evidence — The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM backup tooling (BackHub / GitProtect / self-hosted mirror) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM backup tooling (BackHub / GitProtect / self-hosted mirror) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM backup tooling (BackHub / GitProtect / self-hosted mirror); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Backup and recovery\" Audit Evidence\n\nThe test:\nVerify source code + SCM metadata are backed up and recoverable. PASS: repos (code + history) and critical metadata (issues, PRs, settings) are backed up on cadence to an independent location, restore is tested, coverage spans all repos, and there's a recovery plan for platform outage or malicious deletion. Exceptions: repos not backed up (relying solely on the SaaS platform), metadata not captured, backups never test-restored, and no recovery plan for a deleted-org / ransomware scenario.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Backup and recovery\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Backup and recovery\" control must cover\n# fragment: backup_recovery_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "backup_recovery_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-09-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Backup and recovery\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the backup and recovery control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the backup and recovery control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for backup and recovery against comparable organisations in the sector",
            "Obtain evidence that the backup and recovery control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-09-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Backup and recovery\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-09-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Backup and recovery\" control?",
          "options": [
            "A point-in-time screenshot of one system's backup and recovery settings, captured during the walkthrough",
            "The The SCM backup configuration (repos, metadata, issues/PRs, settings) + frequency, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the backup and recovery control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's backup and recovery capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-09-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Backup and recovery\"?",
          "options": [
            "From SCM backup tooling (BackHub / GitProtect / self-hosted mirror) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how backup and recovery works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SCM backup tooling (BackHub / GitProtect / self-hosted mirror)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-09-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Backup and recovery\"?",
          "options": [
            "The external audit firm, since it is the party examining the backup and recovery control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the backup and recovery data is shared, so the accountability sits with no one in particular",
            "Platform / DevOps, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-09-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Backup and recovery\", which part stays with the human auditor?",
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
          "id": "repo-09-q7",
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
          "id": "repo-09-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Backup and recovery\", which of these is a realistic reportable finding?",
          "options": [
            "The org relies entirely on GitHub for durability — no independent backup of code or metadata — so a compromised-admin mass-deletion or a platform incident would be unrecoverable for issues/PRs and risky for code.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. The org relies entirely on GitHub for durability — no independent backup of code or metadata — so a compromised-admin mass-deletion or a platform incident would be unrecoverable for issues/PRs and risky for code. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-09-q9",
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
          "id": "repo-09-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Backup and recovery\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind backup and recovery, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-10",
    "order": 10,
    "title": "Platform and infrastructure security",
    "subtitle": "Agentic technical & privacy audit of the platform and infrastructure security control",
    "category": "cybersecurity",
    "xp": 140,
    "easeScore": 5,
    "valueScore": 7,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Platform and infrastructure security\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify the SCM platform + its build infrastructure are secured. PASS: a self-hosted SCM server is patched, hardened, not over-exposed, and its admin/DB/SSH access is least-privilege + MFA; self-hosted CI runners are ephemeral, isolated, egress-restricted, and not usable by untrusted PRs; for SaaS, enterprise security settings (IP allow-list, SSO enforcement, policies) are set. Exceptions: an unpatched/exposed self-hosted SCM, persistent shared runners reachable by fork PRs, broad platform-admin access, and admin interfaces exposed to the internet.",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings); Self-hosted CI runners; The platform's host / DB) as tools — e.g. `self-hosted: server patch level + CVEs + exposure; admin/DB/SSH access`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings",
        "Self-hosted CI-runner inventory + isolation + who can use them (incl. fork-PR access)",
        "The SCM platform's own access (admin console, SSH, DB) controls + MFA",
        "Network exposure of the SCM platform + its admin interfaces"
      ],
      "system": [
        "Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings)",
        "Self-hosted CI runners",
        "The platform's host / DB"
      ],
      "dataOwner": [
        "Platform / DevOps",
        "Infrastructure security",
        "SCM admins"
      ],
      "scoring": {
        "ease": "EASE 5/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 7/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-10-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Platform and infrastructure security",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Platform and infrastructure security\" as a repeatable agentic workflow: pull the real evidence (For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Platform and infrastructure security\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me for self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings), Self-hosted CI runners, The platform's host / DB — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `self-hosted: server patch level + CVEs + exposure; admin/DB/SSH access controls ` — read-only, against the systems of record.",
        "The test itself is specific. Verify the SCM platform + its build infrastructure are secured. PASS: a self-hosted SCM server is patched, hardened, not over-exposed, and its admin/DB/SSH access is least-privilege + MFA; self-hosted CI runners are ephemeral, isolated, egress-restricted, and not usable by untrusted PRs; for SaaS, enterprise security settings (IP allow-list, SSO enforcement, policies) are set. Exceptions: an unpatched/exposed self-hosted SCM, persistent shared runners reachable by fork PRs, broad platform-admin access, and admin interfaces exposed to the internet. The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `10_platform_and_infrastructure_security_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings) and Self-hosted CI runners (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 10_platform_and_infrastructure_security_mcp.py` to expose it to your agent — or `python 10_platform_and_infrastructure_security_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings) · Self-hosted CI runners",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Platform and infrastructure security\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "self-hosted: server patch level + CVEs + exposure; admin/DB/SSH access controls + MFA\nrunner inventory: ephemeral vs persistent, isolation, who/what can target them, fork-PR access\nSaaS: enterprise security settings (IP allow-list, SSO enforcement, policies)\nnetwork exposure of the SCM + its admin console"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings.",
        "The test: Verify the SCM platform + its build infrastructure are secured.",
        "Reconcile the systems of record (Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings), Self-hosted CI runners, The platform's host / DB) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Self-hosted runners are persistent + shared and reachable by fork PRs (a secret-exfil path), and the self-hosted GitLab is two minor versions behind a security release with its admin console internet-reachable."
      ],
      "references": [
        {
          "title": "NIST SP 800-190 (runners)",
          "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
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
          "name": "10_platform_and_infrastructure_security_mcp.py",
          "url": "/audit-code/repository-mgmt/10_platform_and_infrastructure_security_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Platform and infrastructure security\" (for self-hosted scm: the server/cluster hardening + patch level + exposure; for saas: the enterprise platform-security settings), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Platform and infrastructure security\" control for Repository Management at AcmeCorp. THE TEST: Verify the SCM platform + its build infrastructure are secured. PASS: a self-hosted SCM server is patched, hardened, not over-exposed, and its admin/DB/SSH access is least-privilege + MFA; self-hosted CI runners are ephemeral, isolated, egress-restricted, and not usable by untrusted PRs; for SaaS, enterprise security settings (IP allow-list, SSO enforcement, policies) are set. Exceptions: an unpatched/exposed self-hosted SCM, persistent shared runners reachable by fork PRs, broad platform-admin access, and admin interfaces exposed to the internet. The evidence — For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings) APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings) gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings); the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Platform and infrastructure security\" Audit Evidence\n\nThe test:\nVerify the SCM platform + its build infrastructure are secured. PASS: a self-hosted SCM server is patched, hardened, not over-exposed, and its admin/DB/SSH access is least-privilege + MFA; self-hosted CI runners are ephemeral, isolated, egress-restricted, and not usable by untrusted PRs; for SaaS, enterprise security settings (IP allow-list, SSO enforcement, policies) are set. Exceptions: an unpatched/exposed self-hosted SCM, persistent shared runners reachable by fork PRs, broad platform-admin access, and admin interfaces exposed to the internet.\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Platform and infrastructure security\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Platform and infrastructure security\" control must cover\n# fragment: platform_infrastructure_security_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "platform_infrastructure_security_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-10-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Platform and infrastructure security\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the platform and infrastructure security control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the platform and infrastructure security control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for platform and infrastructure security against comparable organisations in the sector",
            "Obtain evidence that the platform and infrastructure security control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-10-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Platform and infrastructure security\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-10-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Platform and infrastructure security\" control?",
          "options": [
            "A point-in-time screenshot of one system's platform and infrastructure security settings, captured during the walkthrough",
            "The For self-hosted SCM: the server/cluster hardening + patch level + exposure; for SaaS: the enterprise platform-security settings, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the platform and infrastructure security control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's platform and infrastructure security capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-10-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Platform and infrastructure security\"?",
          "options": [
            "From Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings) and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how platform and infrastructure security works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. Self-hosted GitLab / Gitea / Bitbucket Server (or SaaS enterprise settings)) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-10-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Platform and infrastructure security\"?",
          "options": [
            "The external audit firm, since it is the party examining the platform and infrastructure security control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the platform and infrastructure security data is shared, so the accountability sits with no one in particular",
            "Platform / DevOps, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Platform / DevOps owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-10-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Platform and infrastructure security\", which part stays with the human auditor?",
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
          "id": "repo-10-q7",
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
          "id": "repo-10-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Platform and infrastructure security\", which of these is a realistic reportable finding?",
          "options": [
            "Self-hosted runners are persistent + shared and reachable by fork PRs (a secret-exfil path), and the self-hosted GitLab is two minor versions behind a security release with its admin console internet-reachable.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Self-hosted runners are persistent + shared and reachable by fork PRs (a secret-exfil path), and the self-hosted GitLab is two minor versions behind a security release with its admin console internet-reachable. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-10-q9",
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
          "id": "repo-10-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Platform and infrastructure security\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind platform and infrastructure security, so there is no overlap",
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
    "epochId": "repository-mgmt",
    "id": "repo-11",
    "order": 11,
    "title": "Third-party and open source contribution",
    "subtitle": "Agentic technical & privacy audit of the third-party and open source contribution control",
    "category": "cybersecurity",
    "xp": 180,
    "easeScore": 6,
    "valueScore": 9,
    "rank": 0,
    "auditMeta": {
      "objective": "Prove the \"Third-party and open source contribution\" control for Repository Management is designed and operating effectively for every in-scope item, and quantify the gap where it is not. The test: Verify inbound + outbound external/OSS contributions are governed. PASS: fork/untrusted PRs run CI WITHOUT access to secrets or privileged workflows (require approval-to-run), maintainers review before merge; inbound contributions require CLA/DCO + a license check; and outbound OSS contributions follow an approval process that prevents leaking secrets/proprietary code. Exceptions: fork PRs that auto-run with secrets/privileged tokens, no review of external contributions, no CLA/DCO, and employees pushing to public OSS with no review (IP/secret-leak risk).",
      "approach": "An audit agent calls a read-only MCP server that wraps the Repository Management systems of record (SCM fork-PR + Actions approval settings; CLA / DCO bot; Outbound-contribution policy + review) as tools — e.g. `confirm fork-PR workflows require approval-to-run + don't receive secr`, pulls the inventory and observed state, runs the test, and returns the named exceptions; the auditor sets thresholds, reviews, and signs. (Sources → gather → evaluate → findings.)",
      "artifacts": [
        "The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions",
        "Fork-PR CI handling (do untrusted PRs get secrets / run privileged workflows)",
        "CLA / DCO + license compliance for inbound contributions",
        "The outbound-contribution approval + 'what can leave' policy (no secrets/IP in public contributions)"
      ],
      "system": [
        "SCM fork-PR + Actions approval settings",
        "CLA / DCO bot",
        "Outbound-contribution policy + review"
      ],
      "dataOwner": [
        "Open-Source Program Office / AppSec",
        "Engineering (maintainers)",
        "Legal (CLA/license)"
      ],
      "scoring": {
        "ease": "EASE 6/10 — driven by how well the source systems expose read-only evidence and how stable the policy is; lower when evidence is manual, fragmented, or the standard is subjective.",
        "value": "VALUE 9/10 — driven by how central the control is and how concrete the finding is; higher when a gap here exposes regulated data or undermines many downstream Repository Management controls."
      }
    },
    "badge": {
      "id": "repo-11-badge",
      "name": "Repository Management Auditor",
      "emoji": "🗂️"
    },
    "wonder": {
      "name": "Third-party and open source contribution",
      "location": "Repository Management",
      "era": "Present Day",
      "emoji": "🗂️"
    },
    "challengeType": "ctf",
    "info": {
      "tagline": "Auditing \"Third-party and open source contribution\" as a repeatable agentic workflow: pull the real evidence (The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions) with read-only agents, run the test against policy, and issue a defensible opinion on the Repository Management control.",
      "year": 2025,
      "overview": [
        "The \"Third-party and open source contribution\" sub-process is one of the controls an auditor must verify for Repository Management. The objective is not to run the control but to obtain objective, reproducible evidence that it is designed correctly and operating effectively for every in-scope item — and to quantify the gap precisely where it is not. The opening question is concrete: \"show me the policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions, for everything in scope.\"",
        "The evidence lives across systems that were never reconciled — here SCM fork-PR + Actions approval settings, CLA / DCO bot, Outbound-contribution policy + review — each authoritative for part of the picture and blind to the rest. The gaps between them are where the risk hides: items the control was never applied to, exceptions that were never closed, and configurations that drifted from the approved baseline. In practice you gather it with calls like `confirm fork-PR workflows require approval-to-run + don't receive secrets (pull_` — read-only, against the systems of record.",
        "The test itself is specific. Verify inbound + outbound external/OSS contributions are governed. PASS: fork/untrusted PRs run CI WITHOUT access to secrets or privileged workflows (require approval-to-run), maintainers review before merge; inbound contributions require CLA/DCO + a license check; and outbound OSS contributions follow an approval process that prevents leaking secrets/proprietary code. Exceptions: fork PRs that auto-run with secrets/privileged tokens, no review of external contributions, no CLA/DCO, and employees pushing to public OSS with no review (IP/secret-leak risk). The agentic approach automates the gathering and the reconciliation, not the judgement: a read-only MCP server pulls the evidence and runs the test, and the human sets the thresholds, reviews the exceptions, and signs the opinion."
      ],
      "technical": {
        "title": "The agentic workflow — automate the evidence, not the judgement",
        "body": [
          "The included `11_third_party_and_open_source_contribution_mcp.py` implements exactly this test as read-only MCP tools: one gathers the raw evidence from SCM fork-PR + Actions approval settings and CLA / DCO bot (and the other sources), one evaluates each in-scope item against the policy and surfaces the exceptions, and `coverage_report()` produces the working-paper deliverable — totals, the named exception list, and the PASS / EXCEPTIONS / MATERIAL-GAP opinion. The exact queries it wraps are listed in the examples below, so you can run them by hand first.",
          "The server is deliberately read-only — it can list and report, never change — which is the first thing a reviewer should verify before trusting any audit tool. Wire it to your tenant with read-only credentials and it produces the same evidence and opinion against your real estate; point it at the bundled fixtures and it reproduces the worked example offline.",
          "To run it: `pip install \"mcp[cli]\"`, wire the source credentials read-only, then `mcp run 11_third_party_and_open_source_contribution_mcp.py` to expose it to your agent — or `python 11_third_party_and_open_source_contribution_mcp.py --selftest` to reproduce the findings against the built-in fixtures offline, with no access to a live environment required."
        ],
        "codeExample": {
          "label": "coverage_report() — the audit deliverable (excerpt)",
          "code": "def coverage_report():\n    items = _evaluate(_gather())\n    exceptions = [i for i in items if not i[\"compliant\"]]\n    return {\n      \"in_scope\": len(items),\n      \"compliant\": len(items) - len(exceptions),\n      \"exceptions\": [i[\"id\"] for i in exceptions],\n      \"opinion\": \"PASS\" if not exceptions\n                 else \"EXCEPTIONS\" if len(exceptions) <= 3\n                 else \"MATERIAL GAP\",\n    }"
        }
      },
      "incident": {
        "title": "Leaked tokens and unprotected branches",
        "when": "Recurring",
        "where": "Source-control platforms",
        "impact": "A committed secret or an unprotected default branch lets an attacker alter code or pull credentials straight from history.",
        "body": [
          "Repeated incidents trace back to repository hygiene: a long-lived token committed to history, a default branch with no required review, or an over-broad org membership.",
          "Repository management is audited because the SCM is where code integrity is won or lost before it ever reaches the pipeline."
        ]
      },
      "diagram": {
        "nodes": [
          {
            "label": "Scope",
            "sub": "define Repository Management scope + policy",
            "type": "attacker"
          },
          {
            "label": "Agent + MCP",
            "sub": "pull SCM fork-PR + Actions approval settings · CLA / DCO bot",
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
          "year": 2022,
          "event": "OAuth-token theft (Heroku/Travis) used to clone private repos",
          "highlight": true
        },
        {
          "year": 2023,
          "event": "Mass secret-in-repo exposure drives push-protection adoption"
        },
        {
          "year": 2025,
          "event": "Agentic evidence-gathering becomes the practical way to keep \"Third-party and open source contribution\" continuously assured",
          "highlight": true
        }
      ],
      "examples": [
        {
          "label": "Pull the evidence — the real commands / API calls",
          "code": "confirm fork-PR workflows require approval-to-run + don't receive secrets (pull_request vs pull_request_target review)\nCLA / DCO enforcement on inbound PRs\noutbound: the approval/review process for employee contributions to public OSS\nlicense check on inbound contributions"
        }
      ],
      "keyTakeaways": [
        "The artifact to pull: The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions.",
        "The test: Verify inbound + outbound external/OSS contributions are governed.",
        "Reconcile the systems of record (SCM fork-PR + Actions approval settings, CLA / DCO bot, Outbound-contribution policy + review) — anything the control never reached is the highest-value finding.",
        "The agent gathers and correlates read-only; the human sets policy, reviews exceptions, and signs the opinion.",
        "The deliverable is a PASS / EXCEPTIONS / MATERIAL-GAP opinion with named exceptions and a CAPA path — e.g. Fork PRs run CI with the default token and repo secrets (a malicious PR can exfiltrate them), there's no CLA/DCO on inbound contributions, and engineers contribute to public OSS with no review — a recent commit leaked an internal endpoint."
      ],
      "references": [
        {
          "title": "GitHub — Security hardening for Actions (fork PRs)",
          "url": "https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions"
        },
        {
          "title": "OWASP CI/CD Security Risks",
          "url": "https://owasp.org/www-project-top-10-ci-cd-security-risks/"
        },
        {
          "title": "Model Context Protocol — specification",
          "url": "https://modelcontextprotocol.io/"
        }
      ],
      "downloads": [
        {
          "name": "11_third_party_and_open_source_contribution_mcp.py",
          "url": "/audit-code/repository-mgmt/11_third_party_and_open_source_contribution_mcp.py",
          "description": "Runnable read-only MCP server: gathers the Repository Management evidence for \"Third-party and open source contribution\" (the policy + controls for inbound external contributions (fork prs, outside collaborators) and outbound oss contributions), runs the test, and reports exceptions + opinion. pip install \"mcp[cli]\"."
        }
      ]
    },
    "ctf": {
      "scenario": "You're the auditor testing the \"Third-party and open source contribution\" control for Repository Management at AcmeCorp. THE TEST: Verify inbound + outbound external/OSS contributions are governed. PASS: fork/untrusted PRs run CI WITHOUT access to secrets or privileged workflows (require approval-to-run), maintainers review before merge; inbound contributions require CLA/DCO + a license check; and outbound OSS contributions follow an approval process that prevents leaking secrets/proprietary code. Exceptions: fork PRs that auto-run with secrets/privileged tokens, no review of external contributions, no CLA/DCO, and employees pushing to public OSS with no review (IP/secret-leak risk). The evidence — The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions — plus the observed state has been exported into /evidence. Reconcile it against policy, identify the exceptions, and assemble the finding flag. (In a real engagement you'd run the module's read-only MCP server against the live SCM fork-PR + Actions approval settings APIs; here the same sources are exported to files.)",
      "hint": "Read every file in /evidence. SCM fork-PR + Actions approval settings gives the in-scope items; the observed-state file shows which actually have the control. The gap between them is the finding.",
      "hints": [
        "cat each file in /evidence. The inventory comes from SCM fork-PR + Actions approval settings; the state file shows what is actually configured/running.",
        "An in-scope item present in the inventory but failing the control in the state file is an exception — that is your finding.",
        "Read coverage_report.json last — it confirms the exceptions and carries the final fragment (the audit opinion)."
      ],
      "files": {
        "/evidence/README.md": "# AcmeCorp — Repository Management: \"Third-party and open source contribution\" Audit Evidence\n\nThe test:\nVerify inbound + outbound external/OSS contributions are governed. PASS: fork/untrusted PRs run CI WITHOUT access to secrets or privileged workflows (require approval-to-run), maintainers review before merge; inbound contributions require CLA/DCO + a license check; and outbound OSS contributions follow an approval process that prevents leaking secrets/proprietary code. Exceptions: fork PRs that auto-run with secrets/privileged tokens, no review of external contributions, no CLA/DCO, and employees pushing to public OSS with no review (IP/secret-leak risk).\n\nSystems of record exported for this audit:\n- policy.json            (the control standard / threshold)\n- repository-mgmt_inventory.json   (in-scope items — The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions)\n- repository-mgmt_state.json       (observed configuration/state)\n- coverage_report.json   (the computed opinion)\n\nTask: reconcile inventory + state against policy, find the failing items,\nthen read coverage_report.json. `cat` every file to collect the finding.",
        "/evidence/policy.json": "{\n  \"control\": \"Third-party and open source contribution\",\n  \"domain\": \"Repository Management\",\n  \"requirement\": \"every in-scope item must have the control applied and operating\",\n  \"exception_threshold\": 3\n}\n# fragment: FLAG{repo_",
        "/evidence/repository-mgmt_inventory.json": "[\n  {\"id\":\"item-001\",\"in_scope\":true,\"owner\":\"Engineering org owners\"},\n  {\"id\":\"item-002\",\"in_scope\":true},\n  {\"id\":\"item-003\",\"in_scope\":true},\n  {\"id\":\"item-004\",\"in_scope\":true}\n]\n# 4 in-scope items the \"Third-party and open source contribution\" control must cover\n# fragment: thirdparty_open_source_",
        "/evidence/repository-mgmt_state.json": "[\n  {\"id\":\"item-001\",\"control_applied\":true},\n  {\"id\":\"item-002\",\"control_applied\":false},   // exception: not covered\n  {\"id\":\"item-003\",\"control_applied\":false},   // exception: drifted from baseline\n  {\"id\":\"item-004\",\"control_applied\":true}\n]\n# 2 of 4 items fail the control\n# fragment: gap_",
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
            "name": "repository-mgmt_inventory.json",
            "isDir": false
          },
          {
            "name": "repository-mgmt_state.json",
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
          "value": "FLAG{repo_",
          "label": "Policy — the control standard"
        },
        {
          "trigger": "/evidence/repository-mgmt_inventory.json",
          "value": "thirdparty_open_source_",
          "label": "Inventory — the in-scope items"
        },
        {
          "trigger": "/evidence/repository-mgmt_state.json",
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
          "id": "repo-11-q1",
          "type": "Objective",
          "challenge": "Control objective",
          "text": "What is the primary audit objective for the \"Third-party and open source contribution\" sub-process of Repository Management?",
          "options": [
            "Deploy and operate the third-party and open source contribution control on the team's behalf so the gap is closed during fieldwork",
            "Confirm management is comfortable that the third-party and open source contribution control works, based on their verbal assurance",
            "Benchmark how many tools the team uses for third-party and open source contribution against comparable organisations in the sector",
            "Obtain evidence that the third-party and open source contribution control is designed and operating effectively, and quantify the gap where it is not"
          ],
          "correctIndex": 3,
          "explanation": "An audit tests control design and operating effectiveness and reports the gap — it does not run, own, or take assurance on faith for the control."
        },
        {
          "id": "repo-11-q2",
          "type": "Why it matters",
          "challenge": "Materiality",
          "text": "Why does a weakness in \"Third-party and open source contribution\" matter to the broader Repository Management posture?",
          "options": [
            "It mainly affects how the annual compliance report reads, rather than the actual risk to Repository Management",
            "It stops mattering once a firewall and endpoint agent are deployed across the Repository Management estate",
            "It is a control other Repository Management controls depend on, so a gap here propagates risk into everything scoped to it",
            "It is a stand-alone control, so a gap stays contained and does not affect the other Repository Management controls"
          ],
          "correctIndex": 2,
          "explanation": "Foundational controls are load-bearing; their failure quietly undermines every control layered on top of them."
        },
        {
          "id": "repo-11-q3",
          "type": "Artifacts",
          "challenge": "Evidence",
          "text": "Which artifact best evidences the \"Third-party and open source contribution\" control?",
          "options": [
            "A point-in-time screenshot of one system's third-party and open source contribution settings, captured during the walkthrough",
            "The The policy + controls for inbound external contributions (fork PRs, outside collaborators) and outbound OSS contributions, reconciled against policy, plus the resulting findings working paper",
            "A signed management attestation that the third-party and open source contribution control is in place, with no underlying data attached",
            "A vendor datasheet describing the product's third-party and open source contribution capabilities and its recommended configuration"
          ],
          "correctIndex": 1,
          "explanation": "Evidence must be objective and reproducible — a reconciled export judged against policy, not an assertion, a datasheet, or a single screenshot."
        },
        {
          "id": "repo-11-q4",
          "type": "System",
          "challenge": "Source of truth",
          "text": "Where should an auditor pull the evidence for \"Third-party and open source contribution\"?",
          "options": [
            "From SCM fork-PR + Actions approval settings and the other systems of record for this domain, accessed read-only",
            "From a spreadsheet the control owner maintains by hand and emails to the audit team on request",
            "From the auditor's notes on last year's engagement, carried forward without re-testing this period",
            "From an informal summary the team posted to the internal wiki describing how third-party and open source contribution works"
          ],
          "correctIndex": 0,
          "explanation": "Evidence must come from the authoritative systems (e.g. SCM fork-PR + Actions approval settings) read-only — not hand-maintained spreadsheets, stale notes, or wiki summaries."
        },
        {
          "id": "repo-11-q5",
          "type": "Data owner",
          "challenge": "Accountability",
          "text": "Who is most likely accountable for the data behind \"Third-party and open source contribution\"?",
          "options": [
            "The external audit firm, since it is the party examining the third-party and open source contribution control this period",
            "Whoever most recently changed the configuration, regardless of their role or formal accountability",
            "No single function — the third-party and open source contribution data is shared, so the accountability sits with no one in particular",
            "Open-Source Program Office / AppSec, with the related functions attesting to the part each of them owns"
          ],
          "correctIndex": 3,
          "explanation": "Open-Source Program Office / AppSec owns the control data; the auditor independently verifies it but never owns it, and accountability is never ownerless."
        },
        {
          "id": "repo-11-q6",
          "type": "Agentic",
          "challenge": "Human vs agent",
          "text": "In the agentic workflow for \"Third-party and open source contribution\", which part stays with the human auditor?",
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
          "id": "repo-11-q7",
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
          "id": "repo-11-q8",
          "type": "Findings",
          "challenge": "Typical finding",
          "text": "For \"Third-party and open source contribution\", which of these is a realistic reportable finding?",
          "options": [
            "Fork PRs run CI with the default token and repo secrets (a malicious PR can exfiltrate them), there's no CLA/DCO on inbound contributions, and engineers contribute to public OSS with no review — a recent commit leaked an internal endpoint.",
            "Evidence shows the control is designed and operating effectively across every in-scope item, with no exceptions",
            "The team has adopted a leading commercial platform that is widely used to support this control area",
            "A planned enhancement to the control was delivered on time and within budget during the audit period"
          ],
          "correctIndex": 0,
          "explanation": "A finding is a concrete, named gap against the standard — e.g. Fork PRs run CI with the default token and repo secrets (a malicious PR can exfiltrate them), there's no CLA/DCO on inbound contributions, and engineers contribute to public OSS with no review — a recent commit leaked an internal endpoint. A clean result, a good tool choice, or an on-time project is not a finding."
        },
        {
          "id": "repo-11-q9",
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
          "id": "repo-11-q10",
          "type": "Privacy/Risk",
          "challenge": "The data angle",
          "text": "Why does auditing \"Third-party and open source contribution\" also serve privacy and regulatory goals?",
          "options": [
            "Regulators review only written policy documents, never the technical controls behind third-party and open source contribution, so there is no overlap",
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
