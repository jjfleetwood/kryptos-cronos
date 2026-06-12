#!/usr/bin/env python3
"""Read-only MCP server — Infrastructure as Code (IaC): "GitOps security controls" audit evidence.

THE TEST
Verify the GitOps pull-based delivery model is secured end to end (git is the source of truth, the controller is the only thing that writes to the cluster). PASS: the GitOps repo is the single write path — direct `kubectl apply` to clusters is restricted; the manifest repo has branch protection + required review (and ideally signed/verified commits); the controller verifies commit signatures and only syncs trusted, pinned sources; self-heal/auto-sync reverts drift; the controller's cluster RBAC is least-privilege per target (no single agent with cluster-admin on every cluster); and the controller's own UI/API is authenticated + RBAC-scoped. Exceptions: unprotected manifest repo (any push reaches prod clusters), no commit verification, the controller holding cluster-admin across all clusters, self-heal disabled (so manual drift persists), and a publicly-exposed or weakly-authenticated Argo/Flux endpoint.

ARTIFACT (what _gather() pulls)
    The GitOps controller config (Argo CD / Flux) — the source repos it syncs, the target clusters, and the sync/self-heal/prune settings

REAL SOURCES / COMMANDS to wire in place of the fixtures (read-only):
    Argo CD: argocd app list + argocd app get → source repo/revision, auto-sync + self-heal + prune flags per app
    Flux: flux get sources git / flux get kustomizations → source pinning + sync status; confirm `verify` (commit signature) is set
    kubectl get clusterrolebinding -o wide  → the Argo/Flux service account's RBAC (is it cluster-admin everywhere?)
    confirm the manifest repo has branch protection + required review, and direct kubectl write to prod clusters is blocked (the controller is the only writer)

This server gathers the in-scope inventory and the observed control state, evaluates
each item against policy, and reports the exceptions with a PASS / EXCEPTIONS /
MATERIAL-GAP opinion. READ-ONLY: it lists and reports, never changes state — the hard
requirement for audit tooling.

  pip install "mcp[cli]"
  mcp run 09_gitops_security_controls_mcp.py                 # expose to an agent
  python 09_gitops_security_controls_mcp.py --selftest       # reproduce findings against fixtures, offline
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
    """List every in-scope item the "GitOps security controls" control must cover."""
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
        "control": "GitOps security controls",
        "in_scope": len(rows),
        "compliant": len(rows) - len(exceptions),
        "exceptions": exceptions,
        "opinion": opinion,
    }

# ---- MCP wiring (guarded so --selftest runs without the dependency) ------------
def _register():
    from mcp.server.fastmcp import FastMCP
    mcp = FastMCP("IAC GitOps security controls Audit (read-only)")
    mcp.tool()(build_inventory)
    mcp.tool()(find_exceptions)
    mcp.tool()(coverage_report)
    return mcp

if __name__ == "__main__":
    if "--selftest" in sys.argv:
        print(json.dumps(coverage_report(), indent=2))
    else:
        _register().run()
