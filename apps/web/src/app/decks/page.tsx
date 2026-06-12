"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { epochs } from "@kryptos/core/stages-meta";
import { auditEpochsMeta } from "@kryptos/core/audit-epochs.generated";

// Lens roster (mirrors LENSES in lib/pptx-lens.ts).
const LENSES = [
  { id: "tech-audit", name: "Technology Audit" },
  { id: "exec-board", name: "Executive / Board" },
  { id: "training", name: "Training Module" },
  { id: "sales", name: "Capability Overview" },
];

export default function DecksPage() {
  const sorted = [...epochs].sort((a, b) => a.name.localeCompare(b.name));
  const auditSorted = [...auditEpochsMeta].sort((a, b) => a.name.localeCompare(b.name));
  const allIds = new Set([...sorted.map((e) => e.id), ...auditSorted.map((e) => e.id)]);
  // Preselect an epoch from ?epoch=<id> (e.g. the epoch-page "Generate deck" button).
  const preselect = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("epoch") : null;
  const [epochId, setEpochId] = useState(
    preselect && allIds.has(preselect) ? preselect : sorted[0]?.id ?? "",
  );
  const [lens, setLens] = useState("tech-audit");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setIsAdmin(!!d?.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  async function generate() {
    setBusy(true);
    setErr(null);
    try {
      const r = await fetch("/api/export/pptx", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ epochId, lens }),
      });
      if (!r.ok) {
        setErr(r.status === 403 ? "Admin access required to generate decks." : `Generation failed (${r.status}).`);
        return;
      }
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${epochId}-${lens}.pptx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setErr("Generation failed — try again.");
    } finally {
      setBusy(false);
    }
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-black text-white mb-2">Admin only</h2>
          <p className="text-gray-400 text-sm mb-6">The deck generator is an internal tool, available from the admin dashboard.</p>
          <Link href="/admin" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">→ Admin dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}>
      <div className="max-w-xl mx-auto">
        <Link href="/admin" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">← Admin dashboard</Link>

        <div className="mt-6 mb-8 flex items-center gap-3">
          <span className="text-3xl flex-shrink-0">📊</span>
          <div>
            <p className="text-[11px] font-mono font-bold text-violet-400 uppercase tracking-widest">Deck Generator</p>
            <h1 className="text-2xl font-bold text-white">Slides from the curriculum</h1>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-8">
          Generate a downloadable PowerPoint deck from any epoch, framed through a lens for a specific audience.
          Phase&nbsp;1 ships the <span className="text-violet-300">Technology Audit</span> lens; more lenses are coming.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/2 p-6 space-y-5">
          <label className="block">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Epoch / Audit domain</span>
            <select
              value={epochId}
              onChange={(e) => setEpochId(e.target.value)}
              className="mt-1.5 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-gray-200 focus:border-violet-400/60 focus:outline-none"
            >
              <optgroup label="Curriculum epochs">
                {sorted.map((e) => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </optgroup>
              <optgroup label="Advanced Audit domains">
                {auditSorted.map((e) => (
                  <option key={e.id} value={e.id}>{e.emoji} {e.name}</option>
                ))}
              </optgroup>
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Lens</span>
            <select
              value={lens}
              onChange={(e) => setLens(e.target.value)}
              className="mt-1.5 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-gray-200 focus:border-violet-400/60 focus:outline-none"
            >
              {LENSES.map((l) => (
                <option key={l.id} value={l.id}>{l.name}</option>
              ))}
            </select>
          </label>

          <button
            onClick={generate}
            disabled={busy || !epochId}
            className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9)" }}
          >
            {busy ? "Generating…" : "⬇  Generate & download .pptx"}
          </button>

          {err && <p className="text-xs text-red-400 text-center">{err}</p>}
        </div>

        <p className="text-[11px] text-gray-600 mt-4 leading-relaxed">
          The deck is built server-side from the epoch&rsquo;s module content (concept → real-world risk → audit controls).
          It&rsquo;s a draft for review — check the slides before any external use.
        </p>
      </div>
    </div>
  );
}
