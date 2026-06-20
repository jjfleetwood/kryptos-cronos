#!/usr/bin/env python3
"""Read-only MCP server — Infrastructure as Code (IaC): "Secrets and credential handling" audit evidence.

THE TEST
Verify no secrets live in IaC code, history, or state, and that apply-time auth is short-lived. PASS: no hardcoded credentials/keys/tokens in the IaC repos or git history; secrets are injected at apply time from a secrets manager (Vault, AWS/GCP/Azure secret-manager data sources) or passed as protected CI variables — never committed `tfvars`; remote state is encrypted at rest with tightly scoped read access (state stores resource secrets like DB passwords in plaintext); and the IaC runner authenticates to the cloud via OIDC/short-lived role, not a long-lived key. Exceptions: any secret found in code or history, state stored unencrypted or world-readable, `terraform.tfvars` with passwords committed, and a long-lived admin cloud key embedded in the pipeline.

ARTIFACT (what _gather() pulls)
    A secret-scan of the IaC repos + their history (gitleaks / TruffleHog) for credentials, keys, and tokens committed in `.tf`/`.yaml`/`tfvars`

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    gitleaks detect --source . --log-opts='--all'   (full history)  /  trufflehog git file://. 
    confirm backend encryption: S3 backend has `encrypt = true` + a KMS key, and read access to the state bucket/HCP workspace is least-privilege
    grep for hardcoded secrets in `*.tf` / `*.tfvars` and confirm secret values come from `data.vault_*` / `data.aws_secretsmanager_secret_version`
    CI: confirm cloud auth is OIDC (`aws-actions/configure-aws-credentials` with role-to-assume) not a stored AWS_SECRET_ACCESS_KEY

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 07_secrets_and_credential_handling_mcp.py                 # expose to an agent
  python 07_secrets_and_credential_handling_mcp.py --selftest       # reproduce findings against fixtures, offline
"""
from __future__ import annotations
import json, sys
from dataclasses import dataclass, asdict

EXCEPTION_THRESHOLD = 3  # auditor-set policy: >3 exceptions => material gap

# ---- Offline fixtures (replace with read-only source API calls) ----------------
_FIXTURE_INVENTORY = [
    {"id": "item-001", "in_scope": True},
    {"id": "item-002", "in_scope": True},
    {"id": "item-003", "in_scope": True},
    {"id": "item-004", "in_scope": True},
]
_FIXTURE_STATE = {
    "item-001": True,
    "item-002": False,   # exception: control not applied
    "item-003": False,   # exception: drifted from baseline
    "item-004": True,
}

@dataclass
class Item:
    id: str
    in_scope: bool
    control_applied: bool
    @property
    def compliant(self) -> bool:
        return (not self.in_scope) or self.control_applied

def _gather() -> list[Item]:
    """Read-only: pull in-scope inventory + observed state from systems of record."""
    state = _FIXTURE_STATE
    return [Item(i["id"], bool(i.get("in_scope")), bool(state.get(i["id"], False)))
            for i in _FIXTURE_INVENTORY]

def _evaluate(items: list[Item]) -> list[dict]:
    return [{"id": i.id, "compliant": i.compliant} for i in items if i.in_scope]

# ---- MCP tools -----------------------------------------------------------------
def build_inventory() -> list[dict]:
    """List every in-scope item the "Secrets and credential handling" control must cover."""
    return [asdict(i) for i in _gather()]

def find_exceptions() -> list[str]:
    """Return in-scope items where the control is missing or not operating."""
    return [r["id"] for r in _evaluate(_gather()) if not r["compliant"]]

def coverage_report() -> dict:
    """The audit deliverable: totals, exceptions, and the opinion."""
    rows = _evaluate(_gather())
    exceptions = [r["id"] for r in rows if not r["compliant"]]
    opinion = ("PASS" if not exceptions
               else "EXCEPTIONS" if len(exceptions) <= EXCEPTION_THRESHOLD
               else "MATERIAL GAP")
    return {
        "domain": "Infrastructure as Code (IaC)",
        "control": "Secrets and credential handling",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("IAC Secrets and credential handling Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
