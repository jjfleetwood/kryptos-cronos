"use client";

// Self-contained admin dashboard panels, extracted from page.tsx to keep the
// page component reviewable. Each panel is behaviour-identical to its previous
// in-file definition — only the location changed. Shared types live in ./_shared.

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { stagesMeta as stages } from "@kryptos/core/stages-meta";
import { CONTENT_FLAGS, type ContentFlag } from "@kryptos/core/content-flags";
import type { UserRow, FlagCapture } from "./_shared";

// ── Flag Capture Log ──────────────────────────────────────────────────────────

export function FlagCaptureLog() {
  const [entries, setEntries] = useState<FlagCapture[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("/api/admin/flag-log")
      .then((r) => (r.ok ? r.json() : { entries: [] }))
      .then((data: { entries: FlagCapture[] }) => setEntries(data.entries ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter
    ? entries.filter((e) => e.username.includes(filter) || e.stageId.includes(filter))
    : entries;

  return (
    <div className="bg-white/2 border border-white/8 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-white font-bold">Flag Capture Log</h2>
          <p className="text-xs text-gray-600 mt-0.5">Correct flag submissions — newest first, last 500</p>
        </div>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by username or stage ID…"
          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 placeholder-gray-700 focus:outline-none focus:border-cyan-500/50 w-56"
        />
      </div>

      {loading ? (
        <div className="px-6 py-8 text-center text-gray-600 text-sm">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="px-6 py-8 text-center text-gray-700 text-sm">No flag captures recorded yet.</div>
      ) : (
        <div className="max-h-96 overflow-y-auto divide-y divide-white/5">
          {filtered.map((e, i) => {
            const stage = stages.find((s) => s.id === e.stageId);
            return (
              <div key={i} className="px-6 py-3 grid grid-cols-[7rem_1fr_1fr_1fr] gap-3 items-center text-xs">
                <div className="text-gray-700 font-mono tabular-nums">
                  {new Date(e.ts).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                </div>
                <div className="text-gray-300 font-semibold truncate">{e.username}</div>
                <div className="text-gray-500 truncate">{stage?.title ?? e.stageId}</div>
                <div className="font-mono text-green-400 truncate">{e.flagValue}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Downloads Access Panel ────────────────────────────────────────────────────

type DownloadsMode = "off" | "allowlist" | "all";

export function DownloadsAccessPanel({ users }: { users: { username: string }[] }) {
  const [mode, setMode] = useState<DownloadsMode>("off");
  const [allowlist, setAllowlist] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/downloads-access")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { mode: DownloadsMode; allowlist: string[] } | null) => {
        if (d) { setMode(d.mode); setAllowlist(d.allowlist); }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function setGlobalMode(m: DownloadsMode) {
    setSaving(true);
    const r = await fetch("/api/admin/downloads-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "set-mode", mode: m }),
    });
    if (r.ok) { setMode(m); setMsg("Saved."); setTimeout(() => setMsg(null), 2000); }
    setSaving(false);
  }

  async function toggleUser(username: string) {
    const has = allowlist.includes(username);
    setToggling(username);
    const r = await fetch("/api/admin/downloads-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: has ? "revoke" : "grant", username }),
    });
    if (r.ok) {
      setAllowlist((prev) => has ? prev.filter((u) => u !== username) : [...prev, username]);
    }
    setToggling(null);
  }

  const MODES: { value: DownloadsMode; label: string; desc: string; color: string }[] = [
    { value: "off",       label: "Off",           desc: "No one can access downloads",                         color: "border-red-500/50 bg-red-500/8 text-red-400" },
    { value: "allowlist", label: "Allowlist",      desc: "Only users you enable below can access",             color: "border-amber-500/50 bg-amber-500/8 text-amber-400" },
    { value: "all",       label: "All users",      desc: "Every logged-in user can access downloads",          color: "border-emerald-500/50 bg-emerald-500/8 text-emerald-400" },
  ];

  return (
    <div className="bg-white/2 border border-white/8 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-white font-bold">Downloads Access</h2>
          <p className="text-xs text-gray-600 mt-0.5">Control who can access the Python MCP template downloads page</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          {msg && <span className="text-green-400">{msg}</span>}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Mode radio buttons */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Access mode</p>
          {loading ? (
            <div className="text-gray-700 text-sm">Loading…</div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              {MODES.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setGlobalMode(m.value)}
                  disabled={saving}
                  className={`flex-1 px-4 py-3 rounded-xl border text-left transition-all disabled:opacity-50 ${
                    mode === m.value
                      ? m.color
                      : "border-white/10 bg-white/3 text-gray-500 hover:border-white/25 hover:text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                      mode === m.value ? "border-current bg-current/60" : "border-gray-600 bg-transparent"
                    }`} />
                    <span className="text-sm font-bold">{m.label}</span>
                  </div>
                  <p className="text-xs opacity-70 ml-5">{m.desc}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Per-user allowlist — only shown in allowlist mode */}
        {mode === "allowlist" && !loading && (
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">
              User allowlist <span className="text-gray-700 normal-case font-normal">— {allowlist.length} user{allowlist.length !== 1 ? "s" : ""} with access</span>
            </p>
            {users.length === 0 ? (
              <p className="text-xs text-gray-700 italic">No registered users yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
                {users.map((u) => {
                  const hasAccess = allowlist.includes(u.username);
                  const busy = toggling === u.username;
                  return (
                    <button
                      key={u.username}
                      onClick={() => toggleUser(u.username)}
                      disabled={busy}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-all text-left disabled:opacity-40 ${
                        hasAccess
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                          : "border-white/10 bg-white/2 text-gray-600 hover:border-white/25 hover:text-gray-300"
                      }`}
                    >
                      <span className="flex-shrink-0">{hasAccess ? "✓" : "+"}</span>
                      <span className="truncate font-mono">{u.username}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Pipeline Test Panel ───────────────────────────────────────────────────────

export function PipelineTestPanel() {
  const [stageId, setStageId] = useState("quantum-01");
  const [awardUsername, setAwardUsername] = useState("jjb");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [journeyResult, setJourneyResult] = useState<string | null>(null);
  const [journeyLoading, setJourneyLoading] = useState(false);

  async function run() {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/award-stage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stageId, username: awardUsername }),
      });
      const data = await res.json();
      if (!res.ok) {
        setResult(`❌ ${data.error ?? "Failed"}`);
      } else {
        const p = data.progress;
        setResult(
          `✅ Awarded "${data.stageTitle}" to ${data.username}\n` +
          `   XP: ${p.xp} (+${data.xpAwarded})\n` +
          `   Stages: ${p.completedStages.length}\n` +
          `   Streak: ${p.streak}\n` +
          `   Badges: ${p.badges.length}`
        );
      }
    } catch {
      setResult("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  async function checkJourney() {
    setJourneyLoading(true);
    setJourneyResult(null);
    try {
      const [meRes, progressRes] = await Promise.all([
        fetch("/api/auth/me"),
        fetch("/api/progress"),
      ]);

      const meStatus = meRes.status;
      const progressStatus = progressRes.status;

      const meData = meRes.ok ? await meRes.json() as { username?: string; isAdmin?: boolean; email?: string } : null;
      const progressData = progressRes.ok ? await progressRes.json() as { xp?: number; coins?: number; completedStages?: string[]; streak?: number; badges?: string[] } : null;

      let out = `── /api/auth/me  (HTTP ${meStatus}) ──\n`;
      if (meData) {
        out += `   username: ${meData.username ?? "null"}\n`;
        out += `   isAdmin:  ${meData.isAdmin ?? false}\n`;
        out += `   email:    ${meData.email ?? "(none)"}\n`;
      } else {
        out += `   ❌ Returned ${meStatus} — admin_token not recognized as identity\n`;
      }

      out += `\n── /api/progress  (HTTP ${progressStatus}) ──\n`;
      if (progressData) {
        out += `   xp:       ${progressData.xp ?? 0}\n`;
        out += `   wallet:   ${progressData.coins ?? 0}\n`;
        out += `   stages:   ${progressData.completedStages?.length ?? 0} completed\n`;
        out += `   streak:   ${progressData.streak ?? 0}\n`;
        out += `   badges:   ${progressData.badges?.length ?? 0}\n`;
        if ((progressData.completedStages?.length ?? 0) > 0) {
          out += `   last 3:   ${progressData.completedStages!.slice(-3).join(", ")}\n`;
        }
      } else {
        out += `   ❌ Returned ${progressStatus} — progress not accessible without session_token\n`;
      }

      out += `\n── Journey page diagnosis ──\n`;
      if (!meData) {
        out += `   ❌ Journey will show guest view (auth/me failed)\n`;
      } else if (!progressData) {
        out += `   ⚠️  Identity OK but progress fetch failed\n`;
      } else {
        out += `   ✅ Journey map should load with ${progressData.completedStages?.length ?? 0} completed stages\n`;
      }

      setJourneyResult(out);
    } catch (e) {
      setJourneyResult(`❌ Network error: ${e}`);
    } finally {
      setJourneyLoading(false);
    }
  }

  return (
    <div className="bg-white/2 border border-cyan-500/20 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/8">
        <h2 className="text-white font-bold">Pipeline Test — Manual Stage Award</h2>
        <p className="text-xs text-gray-600 mt-0.5">Award a stage completion + random trophy. Tests the full downstream pipeline: XP, streak, badges, leaderboard, email.</p>
      </div>
      <div className="px-6 py-5 space-y-4">
        {/* Award section */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-32">
            <label className="text-xs text-gray-500 block mb-1">Stage ID</label>
            <input
              value={stageId}
              onChange={(e) => setStageId(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-cyan-500/50"
              placeholder="quantum-01"
            />
          </div>
          <div className="flex-1 min-w-32">
            <label className="text-xs text-gray-500 block mb-1">Username</label>
            <input
              value={awardUsername}
              onChange={(e) => setAwardUsername(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-cyan-500/50"
              placeholder="jjb"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={run}
              disabled={loading}
              className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm rounded-lg hover:bg-cyan-500/20 transition-colors disabled:opacity-50"
            >
              {loading ? "Running…" : "▶ Trigger"}
            </button>
          </div>
        </div>
        {result && (
          <pre className="bg-black/50 border border-white/8 rounded-lg p-3 text-xs text-green-300 font-mono whitespace-pre-wrap">
            {result}
          </pre>
        )}

        {/* Journey diagnostic section */}
        <div className="border-t border-white/8 pt-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm text-white font-semibold">Journey Map Diagnostics</div>
              <div className="text-xs text-gray-600 mt-0.5">Checks /api/auth/me and /api/progress as this browser session — exactly what the Journey page calls.</div>
            </div>
            <button
              onClick={checkJourney}
              disabled={journeyLoading}
              className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm rounded-lg hover:bg-purple-500/20 transition-colors disabled:opacity-50 flex-shrink-0"
            >
              {journeyLoading ? "Checking…" : "🗺 Check Journey"}
            </button>
          </div>
          {journeyResult && (
            <pre className="bg-black/50 border border-white/8 rounded-lg p-3 text-xs text-purple-200 font-mono whitespace-pre-wrap">
              {journeyResult}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Content Audit Panel ───────────────────────────────────────────────────────

const RISK_META: Record<ContentFlag["risk"], { label: string; color: string; bg: string; border: string }> = {
  "needs-attribution": { label: "Needs Attribution", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  "fair-use":          { label: "Fair Use",          color: "text-blue-400",  bg: "bg-blue-500/10",  border: "border-blue-500/30" },
  "trademark-reference":{ label: "Trademark Ref",   color: "text-orange-400",bg: "bg-orange-500/10",border: "border-orange-500/30" },
  "verified-safe":     { label: "Verified Safe",     color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" },
};

export function ContentAudit() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const needsAction = CONTENT_FLAGS.filter((f) => f.risk === "needs-attribution");
  const fairUse     = CONTENT_FLAGS.filter((f) => f.risk === "fair-use");
  const safe        = CONTENT_FLAGS.filter((f) => f.risk === "verified-safe");

  return (
    <div className="bg-white/2 border border-white/8 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-white font-bold">Content IP Audit</h2>
            <p className="text-xs text-gray-600 mt-0.5">Third-party content, licenses, and attribution requirements</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className={`px-2 py-0.5 rounded-full border ${RISK_META["needs-attribution"].bg} ${RISK_META["needs-attribution"].border} ${RISK_META["needs-attribution"].color}`}>
              {needsAction.length} need attribution
            </span>
            <span className={`px-2 py-0.5 rounded-full border ${RISK_META["fair-use"].bg} ${RISK_META["fair-use"].border} ${RISK_META["fair-use"].color}`}>
              {fairUse.length} fair use
            </span>
            <span className={`px-2 py-0.5 rounded-full border ${RISK_META["verified-safe"].bg} ${RISK_META["verified-safe"].border} ${RISK_META["verified-safe"].color}`}>
              {safe.length} safe
            </span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-white/5">
        {CONTENT_FLAGS.map((flag) => {
          const meta = RISK_META[flag.risk];
          const open = expanded === flag.epochId;
          return (
            <div key={flag.epochId}>
              <button
                onClick={() => setExpanded(open ? null : flag.epochId)}
                className="w-full px-6 py-3.5 flex items-center gap-4 text-left hover:bg-white/2 transition-colors"
              >
                <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded border font-mono ${meta.bg} ${meta.border} ${meta.color}`}>
                  {meta.label}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-gray-300 font-medium">{flag.source}</span>
                  <span className="ml-2 text-xs text-gray-700 font-mono">/{flag.epochId}</span>
                </div>
                {flag.license && (
                  <span className="text-xs text-gray-600 font-mono hidden sm:block">{flag.license}</span>
                )}
                <span className="text-gray-700 text-xs flex-shrink-0">{open ? "▲" : "▼"}</span>
              </button>

              {open && (
                <div className="px-6 pb-4 space-y-3 border-t border-white/5 pt-3">
                  <div>
                    <div className="text-xs text-gray-600 mb-1 uppercase tracking-wider">Attribution text</div>
                    <p className="text-xs text-gray-400 bg-white/3 rounded-lg px-3 py-2.5 leading-relaxed border border-white/5">
                      {flag.attributionText}
                    </p>
                  </div>
                  <div className="flex items-start gap-6 flex-wrap">
                    <div>
                      <div className="text-xs text-gray-600 mb-1 uppercase tracking-wider">Admin note</div>
                      <p className="text-xs text-gray-500 leading-relaxed max-w-lg">{flag.adminNote}</p>
                    </div>
                    <div className="flex gap-4">
                      {flag.attributionUrl && (
                        <a
                          href={flag.attributionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors"
                        >
                          Source ↗
                        </a>
                      )}
                      <span className="text-xs text-gray-700">Reviewed {flag.reviewedAt}</span>
                      <Link
                        href={`/stages/epoch/${flag.epochId}`}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View epoch →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Investor Metrics Panel ────────────────────────────────────────────────────

const EPOCH_NAMES: Record<string, string> = {
  "first-journey": "Our First Journey", "ancient": "Foundations",
  "cisco-core": "Cisco: Core CVEs", "cisco-enterprise": "Cisco: Enterprise",
  "cisco-secops": "Cisco: SecOps", "cisco-advanced": "Cisco: Adv Defense",
  "tech-audit-1": "Audit: Foundations", "tech-audit-2": "Audit: Technical",
  "tech-audit-3": "Audit: Agentic", "tech-audit-4": "Cont. Monitoring",
  "mitre": "MITRE ATT&CK", "mitre-atlas": "MITRE ATLAS",
  "owasp-llm": "OWASP LLM Top 10", "quantum-1": "Quantum: Threats",
  "quantum-2": "Quantum: PQC", "quantum-3": "Quantum: QKD",
  "umbrella": "Cisco Umbrella", "tapestry": "Tapestry",
  "nails": "Nail Arts", "hair-color": "Hair Coloring", "hair-styling": "Hair Styling",
  "driving-1": "Road to License", "driving-2": "First Miles", "driving-3": "Rules of Road",
  "baseball-1": "Play Ball!", "baseball-2": "Art of Hitting",
  "baseball-3": "Adv Mechanics", "baseball-4": "Elite Mastery",
  "baseball-5": "Art of Pitching", "baseball-6": "Pitch Arsenal",
  "baseball-7": "Pitching Strategy", "paris-july": "Paris in July",
  "milan-july": "Milan in July", "french-basics": "French Basics",
  "italian-basics": "Italian Basics",
};

function epochLabel(id: string) {
  return EPOCH_NAMES[id] ?? id.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

export function MetricsPanel({ users, loading }: { users: UserRow[]; loading: boolean }) {
  const metrics = useMemo(() => {
    if (!users.length) return null;
    const now = Date.now();

    // Build epoch → stage IDs map + pre-build user stage sets
    const epochStageMap: Record<string, string[]> = {};
    for (const s of stages) {
      if (!epochStageMap[s.epochId]) epochStageMap[s.epochId] = [];
      epochStageMap[s.epochId].push(s.id);
    }
    const userStageSets = users.map(u => new Set(u.stageIds ?? []));

    const wau     = users.filter(u => u.lastActive && now - u.lastActive < 7  * 86400000).length;
    const mau     = users.filter(u => u.lastActive && now - u.lastActive < 30 * 86400000).length;
    const returnRate7d = Math.round((wau / users.length) * 100);
    const avgStages = (users.reduce((s, u) => s + u.stages, 0) / users.length).toFixed(1);

    const activated  = users.filter(u => u.stages >= 1).length;
    const fivePlus   = users.filter(u => u.stages >= 5).length;
    const tenPlus    = users.filter(u => u.stages >= 10).length;
    const thirtyPlus = users.filter(u => u.stages >= 30).length;

    const newToday    = users.filter(u => u.createdAt && now - u.createdAt < 86400000).length;
    const newThisWeek = users.filter(u => u.createdAt && now - u.createdAt < 7 * 86400000).length;

    const epochRates = Object.entries(epochStageMap).map(([epochId, stageIds]) => {
      const completedCount = userStageSets.filter(set => stageIds.every(id => set.has(id))).length;
      return { epochId, stageCount: stageIds.length, completedCount, rate: Math.round((completedCount / users.length) * 100) };
    }).sort((a, b) => b.completedCount - a.completedCount || b.rate - a.rate);

    const tiers = { pro: 0, free: 0 };
    for (const u of users) {
      if (u.tier === "pro" || u.tier === "all-star") tiers.pro++;
      else tiers.free++;
    }

    return { wau, mau, returnRate7d, avgStages, activated, fivePlus, tenPlus, thirtyPlus, newToday, newThisWeek, epochRates, tiers };
  }, [users]);

  const pct = (n: number) => users.length ? Math.round((n / users.length) * 100) : 0;

  return (
    <div className="bg-white/2 border border-white/8 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
        <div>
          <h2 className="text-white font-bold">Investor Metrics</h2>
          <p className="text-xs text-gray-600 mt-0.5">Live — computed from Redis user data</p>
        </div>
        {!loading && metrics && (
          <span className="text-[10px] text-gray-700 font-mono">{users.length} users · updated now</span>
        )}
      </div>

      {loading || !metrics ? (
        <div className="px-6 py-10 text-center text-gray-600 text-sm">Loading metrics…</div>
      ) : (
        <>
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/8">
            {[
              { label: "Weekly Active (WAU)", value: metrics.wau, sub: `${metrics.mau} monthly`, color: "text-cyan-400" },
              {
                label: "7-Day Return Rate", value: `${metrics.returnRate7d}%`,
                sub: `${metrics.wau} of ${users.length} users`,
                color: metrics.returnRate7d >= 30 ? "text-green-400" : metrics.returnRate7d >= 15 ? "text-yellow-400" : "text-red-400",
              },
              { label: "Avg Stages / User", value: metrics.avgStages, sub: `of ${stages.length} total`, color: "text-purple-400" },
              { label: "Activated (1+ stage)", value: metrics.activated, sub: `${pct(metrics.activated)}% of registered`, color: "text-emerald-400" },
            ].map(({ label, value, sub, color }) => (
              <div key={label} className="px-6 py-5 text-center border-r border-b border-white/5 last:border-r-0">
                <div className={`text-3xl font-black ${color} mb-1`}>{value}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">{label}</div>
                <div className="text-xs text-gray-700 mt-1">{sub}</div>
              </div>
            ))}
          </div>

          {/* Funnel + Epoch rates */}
          <div className="grid md:grid-cols-2 divide-x divide-white/5">
            {/* Funnel */}
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">User Funnel</div>
              <div className="space-y-3">
                {[
                  { label: "Registered",          n: users.length,        color: "bg-white/20" },
                  { label: "Started (1+ stage)",  n: metrics.activated,   color: "bg-cyan-500" },
                  { label: "Engaged (5+ stages)", n: metrics.fivePlus,    color: "bg-purple-500" },
                  { label: "Retained (10+)",      n: metrics.tenPlus,     color: "bg-indigo-500" },
                  { label: "Power users (30+)",   n: metrics.thirtyPlus,  color: "bg-violet-500" },
                ].map(({ label, n, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">{label}</span>
                      <span className="text-xs font-mono text-gray-400">
                        {n} <span className="text-gray-700">({pct(n)}%)</span>
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-1.5 rounded-full ${color} transition-all`} style={{ width: `${Math.max(pct(n), n > 0 ? 1 : 0)}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Growth · Tiers</div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {[
                    { label: "New today",    value: metrics.newToday,    color: "text-white" },
                    { label: "New this week",value: metrics.newThisWeek, color: "text-white" },
                    { label: "MAU",          value: metrics.mau,         color: "text-cyan-400" },
                    { label: "WAU",          value: metrics.wau,         color: "text-cyan-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-white/3 border border-white/5 rounded-lg px-3 py-2 text-center">
                      <div className={`text-xl font-black ${color}`}>{value}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Pro",  value: metrics.tiers.pro,  color: "text-cyan-400" },
                    { label: "Free", value: metrics.tiers.free, color: "text-gray-500" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-white/3 border border-white/5 rounded-lg px-3 py-2 text-center">
                      <div className={`text-xl font-black ${color}`}>{value}</div>
                      <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Epoch completion rates */}
            <div className="p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Epoch Completion Rates</div>
              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                {metrics.epochRates.map(({ epochId, stageCount, completedCount, rate }) => (
                  <div key={epochId}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400 truncate mr-2">{epochLabel(epochId)}</span>
                      <span className="text-xs font-mono text-gray-500 flex-shrink-0">
                        {completedCount} <span className="text-gray-700">({rate}%) · {stageCount}s</span>
                      </span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-1 rounded-full transition-all"
                        style={{
                          width: `${Math.max(rate, completedCount > 0 ? 1 : 0)}%`,
                          background: rate >= 20 ? "#22d3ee" : rate >= 5 ? "#a78bfa" : "#6366f1",
                        }}
                      />
                    </div>
                  </div>
                ))}
                {metrics.epochRates.every(e => e.completedCount === 0) && (
                  <p className="text-xs text-gray-700 italic">No epoch completions recorded yet.</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
