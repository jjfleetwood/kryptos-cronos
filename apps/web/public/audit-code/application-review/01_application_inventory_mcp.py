#!/usr/bin/env python3
"""
Application Inventory & Tiering — Audit MCP Server
==================================================
Advanced Audit · Application Review · Module 01

A Model Context Protocol (MCP) server that lets an audit agent build and test a
*complete, tiered* application inventory automatically — the first and most
commonly-failed control of any application-security audit. Instead of chasing a
stale spreadsheet, the agent reconciles three authoritative sources (the CMDB,
the cloud asset plane, and the SSO app catalog), tiers every app by criticality
× data sensitivity × internet exposure, and surfaces the two findings auditors
care about most: **untiered** apps (in inventory, never risk-rated) and **shadow**
apps (live in cloud/SSO, missing from the CMDB).

Real, runnable example. Configure via environment variables; every external call
is isolated in a `*_client` function so you can point it at your own tenant or a
test fixture. Read-only by design — it gathers evidence, it never changes state.

    pip install "mcp[cli]" requests boto3
    # set the env vars below, then:
    mcp run 01_application_inventory_mcp.py        # expose to an MCP-capable agent
    python 01_application_inventory_mcp.py --selftest   # offline fixture run

Env:
    SERVICENOW_INSTANCE, SERVICENOW_TOKEN     # CMDB (cmdb_ci_appl)
    OKTA_DOMAIN, OKTA_TOKEN                    # SSO app catalog
    AWS_PROFILE / standard AWS creds          # cloud asset plane (boto3)
"""
from __future__ import annotations

import os
import sys
import json
from dataclasses import dataclass, asdict, field
from typing import Any

try:
    from mcp.server.fastmcp import FastMCP
except ImportError:  # allow --selftest without the SDK installed
    FastMCP = None  # type: ignore

mcp = FastMCP("app-inventory-audit") if FastMCP else None

# ── Tiering policy ────────────────────────────────────────────────────────────
# A defensible tier is a function of business criticality, the sensitivity of the
# data the app handles, and whether it's reachable from the internet. Auditors
# should confirm the org's own policy matches; this is a sane default.
DATA_SENSITIVITY = {"public": 0, "internal": 1, "confidential": 2, "restricted": 3, "regulated": 3}
CRITICALITY = {"low": 0, "medium": 1, "high": 2, "mission-critical": 3}


@dataclass
class App:
    name: str
    source: str                      # cmdb | cloud | sso
    owner: str | None = None
    criticality: str | None = None   # low | medium | high | mission-critical
    data_class: str | None = None    # public … regulated
    internet_facing: bool | None = None
    tier: int | None = None          # 1 (highest) … 4 (lowest)
    notes: list[str] = field(default_factory=list)


def _tier_from(crit: str | None, data_class: str | None, internet: bool | None) -> int | None:
    """Tier 1 (most scrutiny) … 4. None when the inputs to rate it are missing."""
    if crit is None or data_class is None:
        return None
    score = CRITICALITY.get(crit, 0) + DATA_SENSITIVITY.get(data_class, 0) + (2 if internet else 0)
    if score >= 6:
        return 1
    if score >= 4:
        return 2
    if score >= 2:
        return 3
    return 4


# ── Source clients (swap these for your tenant; fixtures used on --selftest) ──
def cmdb_client() -> list[App]:
    """ServiceNow CMDB — the application CIs (cmdb_ci_appl)."""
    base, token = os.getenv("SERVICENOW_INSTANCE"), os.getenv("SERVICENOW_TOKEN")
    if not base or not token:
        return _FIXTURE_CMDB
    import requests
    r = requests.get(
        f"https://{base}/api/now/table/cmdb_ci_appl",
        headers={"Authorization": f"Bearer {token}", "Accept": "application/json"},
        params={"sysparm_fields": "name,owned_by,business_criticality,u_data_classification", "sysparm_limit": "10000"},
        timeout=30,
    )
    r.raise_for_status()
    out = []
    for ci in r.json().get("result", []):
        out.append(App(name=ci["name"], source="cmdb", owner=ci.get("owned_by"),
                       criticality=(ci.get("business_criticality") or None),
                       data_class=(ci.get("u_data_classification") or None)))
    return out


def sso_client() -> list[App]:
    """Okta — the apps users can actually sign in to (the catalog reality check)."""
    domain, token = os.getenv("OKTA_DOMAIN"), os.getenv("OKTA_TOKEN")
    if not domain or not token:
        return _FIXTURE_SSO
    import requests
    apps, url = [], f"https://{domain}/api/v1/apps?limit=200&filter=status eq \"ACTIVE\""
    while url:
        r = requests.get(url, headers={"Authorization": f"SSWS {token}"}, timeout=30)
        r.raise_for_status()
        apps += [App(name=a["label"], source="sso") for a in r.json()]
        url = r.links.get("next", {}).get("url")
    return apps


def cloud_client() -> list[App]:
    """AWS — internet-facing services inferred from public-facing load balancers."""
    if not (os.getenv("AWS_PROFILE") or os.getenv("AWS_ACCESS_KEY_ID")):
        return _FIXTURE_CLOUD
    import boto3
    elb = boto3.client("elbv2")
    out = []
    for lb in elb.describe_load_balancers().get("LoadBalancers", []):
        out.append(App(name=lb["LoadBalancerName"], source="cloud",
                       internet_facing=(lb.get("Scheme") == "internet-facing")))
    return out


# ── MCP tools (the agent calls these) ────────────────────────────────────────
def _gather() -> list[App]:
    return cmdb_client() + sso_client() + cloud_client()


def _reconcile(apps: list[App]) -> dict[str, App]:
    """Merge the three sources by normalized name into one record per app."""
    merged: dict[str, App] = {}
    for a in apps:
        key = a.name.strip().lower()
        if key not in merged:
            merged[key] = App(name=a.name, source=a.source)
        m = merged[key]
        m.source = ",".join(sorted(set(m.source.split(",")) | {a.source}))
        m.owner = m.owner or a.owner
        m.criticality = m.criticality or a.criticality
        m.data_class = m.data_class or a.data_class
        if a.internet_facing is not None:
            m.internet_facing = a.internet_facing
    for m in merged.values():
        m.tier = _tier_from(m.criticality, m.data_class, m.internet_facing)
    return merged


def build_inventory() -> list[dict[str, Any]]:
    """TOOL: reconcile all sources into one tiered application inventory."""
    return [asdict(a) for a in _reconcile(_gather()).values()]


def find_untiered() -> list[dict[str, Any]]:
    """TOOL: apps in the inventory that can't be risk-rated (missing criticality
    or data classification) — a top audit finding, because an untiered app gets
    no scoped controls."""
    return [asdict(a) for a in _reconcile(_gather()).values() if a.tier is None]


def find_shadow_apps() -> list[dict[str, Any]]:
    """TOOL: apps live in cloud/SSO but absent from the CMDB — shadow IT the
    inventory doesn't know exists, and therefore no one is auditing."""
    return [asdict(a) for a in _reconcile(_gather()).values() if "cmdb" not in a.source.split(",")]


def coverage_report() -> dict[str, Any]:
    """TOOL: the audit deliverable — inventory completeness + tier distribution +
    the findings, ready to paste into a working paper."""
    inv = list(_reconcile(_gather()).values())
    untiered = [a for a in inv if a.tier is None]
    shadow = [a for a in inv if "cmdb" not in a.source.split(",")]
    dist = {t: sum(1 for a in inv if a.tier == t) for t in (1, 2, 3, 4)}
    return {
        "total_apps": len(inv),
        "tier_distribution": dist,
        "untiered_count": len(untiered),
        "shadow_count": len(shadow),
        "findings": [
            f"UNTIERED: {a['name']}" for a in (asdict(x) for x in untiered)
        ] + [
            f"SHADOW (not in CMDB): {a['name']}" for a in (asdict(x) for x in shadow)
        ],
        "opinion": ("PASS" if not untiered and not shadow
                    else "EXCEPTIONS" if len(untiered) + len(shadow) <= 3
                    else "MATERIAL GAP"),
    }


if mcp:
    mcp.tool()(build_inventory)
    mcp.tool()(find_untiered)
    mcp.tool()(find_shadow_apps)
    mcp.tool()(coverage_report)

# ── Offline fixtures (for --selftest and as a worked example) ────────────────
_FIXTURE_CMDB = [
    App("Customer Portal", "cmdb", owner="apps-team", criticality="mission-critical", data_class="regulated"),
    App("HR Self-Service", "cmdb", owner="hr-it", criticality="high", data_class="restricted"),
    App("Marketing Site", "cmdb", owner="web", criticality="low", data_class="public"),
    App("Internal Wiki", "cmdb", owner="it", criticality="medium"),  # no data_class → untiered
]
_FIXTURE_SSO = [App("Customer Portal", "sso"), App("HR Self-Service", "sso"), App("Expense Tool (SaaS)", "sso")]
_FIXTURE_CLOUD = [App("Customer Portal", "cloud", internet_facing=True), App("api-gateway-prod", "cloud", internet_facing=True)]


def _selftest() -> None:
    print("== coverage_report ==")
    print(json.dumps(coverage_report(), indent=2))
    rep = coverage_report()
    assert rep["shadow_count"] >= 2, "expected shadow apps (Expense Tool, api-gateway-prod)"
    assert rep["untiered_count"] >= 1, "expected an untiered app (Internal Wiki)"
    print("\nself-test OK — findings reproduce against the fixtures")


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        _selftest()
    elif mcp:
        mcp.run()
    else:
        print("install 'mcp[cli]' to serve, or run with --selftest", file=sys.stderr)
