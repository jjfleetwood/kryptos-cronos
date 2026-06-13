"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  STATUS_COLUMNS, TYPE_META, PRIORITY_META, SOURCE_META,
  type ScrumItem, type ScrumStatus, type ScrumType, type ScrumPriority,
} from "@/lib/scrum-types";

const TYPES = Object.keys(TYPE_META) as ScrumType[];
const PRIOS = Object.keys(PRIORITY_META) as ScrumPriority[];

function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export default function ScrumBoard() {
  const [items, setItems] = useState<ScrumItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState<string | null>(null);
  const [selected, setSelected] = useState<ScrumItem | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<ScrumStatus | null>(null);
  const [fType, setFType] = useState<ScrumType | "all">("all");
  const [fPrio, setFPrio] = useState<ScrumPriority | "all">("all");
  const [q, setQ] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  async function load() {
    setLoading(true);
    try {
      const r = await fetch("/api/admin/scrum");
      if (!r.ok) throw new Error("load failed");
      const data = await r.json();
      setItems(data.items ?? []);
      if (data.ingested > 0) setBanner(`Pulled in ${data.ingested} new feedback/survey item(s) to Triage.`);
    } catch {
      setBanner("Could not load the board.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { load(); }, []);

  async function patch(id: string, fields: Partial<ScrumItem> & { note?: string }) {
    // optimistic
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...fields, updatedAt: Date.now() } as ScrumItem : it)));
    const r = await fetch("/api/admin/scrum", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...fields }),
    });
    if (r.ok) {
      const { item } = await r.json();
      setItems((prev) => prev.map((it) => (it.id === id ? item : it)));
      setSelected((s) => (s && s.id === id ? item : s));
    } else { load(); }
  }

  async function remove(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id));
    setSelected(null);
    await fetch(`/api/admin/scrum?id=${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  async function create(fields: Partial<ScrumItem>) {
    const r = await fetch("/api/admin/scrum", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (r.ok) { const { item } = await r.json(); setItems((prev) => [item, ...prev]); }
    setShowNew(false);
  }

  const filtered = useMemo(() => items.filter((it) => {
    if (!showArchived && it.status === "archived") return false;
    if (fType !== "all" && it.type !== fType) return false;
    if (fPrio !== "all" && it.priority !== fPrio) return false;
    if (q && !(`${it.title} ${it.description} ${it.initiator}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  }), [items, fType, fPrio, q, showArchived]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const it of filtered) c[it.status] = (c[it.status] ?? 0) + 1;
    return c;
  }, [filtered]);

  function onDrop(status: ScrumStatus) {
    if (dragId) { const it = items.find((i) => i.id === dragId); if (it && it.status !== status) patch(dragId, { status }); }
    setDragId(null); setDragOver(null);
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }
  function exitSelect() { setSelectMode(false); setSelectedIds(new Set()); }

  // Apply a field change to every selected card in one round-trip.
  async function bulkPatch(fields: Partial<ScrumItem>) {
    const ids = [...selectedIds];
    if (!ids.length) return;
    setItems((prev) => prev.map((it) => (selectedIds.has(it.id) ? { ...it, ...fields, updatedAt: Date.now() } as ScrumItem : it)));
    const r = await fetch("/api/admin/scrum", {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids, ...fields }),
    });
    if (r.ok) {
      const { items: updated } = (await r.json()) as { items: ScrumItem[] };
      const map = new Map(updated.map((it) => [it.id, it]));
      setItems((prev) => prev.map((it) => map.get(it.id) ?? it));
      setBanner(`Moved ${updated.length} item(s).`);
    } else { load(); }
    setSelectedIds(new Set());
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <button onClick={() => setShowNew(true)} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 transition-colors">+ New item</button>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="text-xs bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-gray-200 placeholder-gray-600 w-40 focus:outline-none focus:border-cyan-500/50" />
        <select value={fType} onChange={(e) => setFType(e.target.value as ScrumType | "all")} className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-300">
          <option value="all">All types</option>
          {TYPES.map((t) => <option key={t} value={t}>{TYPE_META[t].icon} {TYPE_META[t].label}</option>)}
        </select>
        <select value={fPrio} onChange={(e) => setFPrio(e.target.value as ScrumPriority | "all")} className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-300">
          <option value="all">All priorities</option>
          {PRIOS.map((p) => <option key={p} value={p}>{PRIORITY_META[p].label}</option>)}
        </select>
        <label className="text-[11px] text-gray-500 flex items-center gap-1.5 ml-1">
          <input type="checkbox" checked={showArchived} onChange={(e) => setShowArchived(e.target.checked)} /> archived
        </label>
        <button onClick={() => (selectMode ? exitSelect() : setSelectMode(true))}
          title="Select multiple cards and move/retag them all at once"
          className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${selectMode ? "bg-amber-500/20 border-amber-500/50 text-amber-200" : "bg-amber-500/10 border-amber-500/40 text-amber-200 hover:bg-amber-500/20"}`}>
          {selectMode ? "✕ Done" : "☑ Bulk move"}
        </button>
        <button onClick={load} className="text-xs text-gray-500 hover:text-cyan-400 ml-auto transition-colors">↻ refresh</button>
      </div>

      {/* Bulk action bar — appears in select mode */}
      {selectMode && (
        <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/8 px-3 py-2">
          {selectedIds.size === 0
            ? <span className="text-xs text-amber-200/90">👉 Click cards to check them, then pick <strong>Move to…</strong> — or</span>
            : <span className="text-xs font-semibold text-amber-200">{selectedIds.size} selected</span>}
          <button onClick={() => setSelectedIds(new Set(filtered.map((i) => i.id)))} className="text-[11px] text-gray-300 hover:text-amber-200 underline">select all ({filtered.length})</button>
          {selectedIds.size > 0 && <button onClick={() => setSelectedIds(new Set())} className="text-[11px] text-gray-500 hover:text-gray-300 underline">clear</button>}
          <span className="text-gray-700 mx-1">|</span>
          <select value="" disabled={selectedIds.size === 0} onChange={(e) => { if (e.target.value) bulkPatch({ status: e.target.value as ScrumStatus }); e.target.value = ""; }}
            className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-200 disabled:opacity-40">
            <option value="">Move to…</option>
            {STATUS_COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            <option value="archived">Archived</option>
          </select>
          <select value="" disabled={selectedIds.size === 0} onChange={(e) => { if (e.target.value) bulkPatch({ priority: e.target.value as ScrumPriority }); e.target.value = ""; }}
            className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-200 disabled:opacity-40">
            <option value="">Set priority…</option>
            {PRIOS.map((p) => <option key={p} value={p}>{PRIORITY_META[p].label}</option>)}
          </select>
          <button disabled={selectedIds.size === 0} onClick={() => bulkPatch({ status: "archived" })}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40">Archive</button>
        </div>
      )}

      {banner && (
        <div className="mb-3 text-[11px] text-cyan-300 bg-cyan-500/8 border border-cyan-500/25 rounded-lg px-3 py-1.5 flex items-center justify-between">
          <span>{banner}</span>
          <button onClick={() => setBanner(null)} className="text-gray-500 hover:text-gray-300">✕</button>
        </div>
      )}

      {loading ? (
        <p className="text-gray-500 text-sm py-6">Loading board…</p>
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-3">
          {STATUS_COLUMNS.map((col) => {
            const cards = filtered.filter((it) => it.status === col.id);
            return (
              <div
                key={col.id}
                onDragOver={(e) => { e.preventDefault(); setDragOver(col.id); }}
                onDragLeave={() => setDragOver((d) => (d === col.id ? null : d))}
                onDrop={() => onDrop(col.id)}
                className={`flex-shrink-0 w-64 rounded-xl border p-2 transition-colors ${dragOver === col.id ? "border-cyan-400/60 bg-cyan-500/5" : "border-white/8 bg-white/2"}`}
              >
                <div className="flex items-center justify-between px-1 mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-300">{col.label}</span>
                  <span className="text-[10px] text-gray-600">{counts[col.id] ?? 0}</span>
                </div>
                <p className="text-[10px] text-gray-600 px-1 mb-2 leading-tight">{col.hint}</p>
                <div className={`min-h-[40px] ${col.id === "done" ? "space-y-1" : "space-y-2"}`}>
                  {cards.map((it) => (
                    <Card key={it.id} item={it} compact={col.id === "done"}
                      selectMode={selectMode} selected={selectedIds.has(it.id)}
                      onClick={() => (selectMode ? toggleSelect(it.id) : setSelected(it))}
                      onDragStart={() => setDragId(it.id)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selected && (
        <Detail item={selected} onClose={() => setSelected(null)} onPatch={patch} onRemove={remove} />
      )}
      {showNew && <NewItem onClose={() => setShowNew(false)} onCreate={create} />}
    </div>
  );
}

function Card({ item, onClick, onDragStart, compact = false, selectMode = false, selected = false }: { item: ScrumItem; onClick: () => void; onDragStart: () => void; compact?: boolean; selectMode?: boolean; selected?: boolean }) {
  const t = TYPE_META[item.type], p = PRIORITY_META[item.priority], s = SOURCE_META[item.source];
  const selRing = selected ? "border-amber-400/70 ring-1 ring-amber-400/50" : "";

  // Compact one-line card (used in the Done column, which otherwise eats space).
  if (compact) {
    return (
      <div
        draggable={!selectMode}
        onDragStart={onDragStart}
        onClick={onClick}
        title={item.title}
        className={`cursor-pointer rounded-md border bg-[#0d1117] hover:border-white/20 transition-colors px-2 py-1 flex items-center gap-1.5 ${selected ? selRing : "border-white/8"}`}
      >
        {selectMode && <span className={`text-[10px] flex-shrink-0 ${selected ? "text-amber-300" : "text-gray-600"}`}>{selected ? "☑" : "☐"}</span>}
        <span className="text-xs leading-none flex-shrink-0">{t.icon}</span>
        <span className="text-[11px] text-gray-400 leading-none truncate flex-1">{item.title}</span>
        {item.notes?.length > 0 && <span className="text-[9px] text-gray-600 flex-shrink-0">💬{item.notes.length}</span>}
      </div>
    );
  }

  return (
    <div
      draggable={!selectMode}
      onDragStart={onDragStart}
      onClick={onClick}
      className={`cursor-pointer rounded-lg border bg-[#0d1117] transition-all p-2.5 ${selected ? selRing : "border-white/10 hover:border-white/25 hover:-translate-y-0.5"}`}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        {selectMode && <span className={`text-xs leading-none ${selected ? "text-amber-300" : "text-gray-600"}`}>{selected ? "☑" : "☐"}</span>}
        <span title={t.label} className="text-sm leading-none">{t.icon}</span>
        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ color: p.color, background: `${p.color}1a`, border: `1px solid ${p.color}55` }}>{p.short}</span>
        {item.pinned && <span title="pinned" className="text-[10px]">📌</span>}
        <span className="ml-auto text-[9px] text-gray-600">{timeAgo(item.createdAt)}</span>
      </div>
      <p className="text-xs text-gray-200 leading-snug line-clamp-3 mb-1.5">{item.title}</p>
      <div className="flex items-center gap-2 text-[9px] text-gray-500">
        <span title={`source: ${s.label}`}>{s.icon} {s.label}</span>
        <span className="truncate">· {item.initiator}</span>
        {item.notes?.length > 0 && <span className="ml-auto">💬 {item.notes.length}</span>}
      </div>
    </div>
  );
}

function Detail({ item, onClose, onPatch, onRemove }: {
  item: ScrumItem;
  onClose: () => void;
  onPatch: (id: string, f: Partial<ScrumItem> & { note?: string }) => void;
  onRemove: (id: string) => void;
}) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.description);
  const [confirmDel, setConfirmDel] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-[#0d1117] border border-white/15 rounded-2xl max-w-2xl w-full my-8 p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3 mb-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} onBlur={() => title !== item.title && onPatch(item.id, { title })}
            className="flex-1 bg-transparent text-white font-bold text-lg focus:outline-none focus:bg-white/5 rounded px-1 -mx-1" />
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300 text-xl leading-none">✕</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <Field label="Type">
            <select value={item.type} onChange={(e) => onPatch(item.id, { type: e.target.value as ScrumType })} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-gray-200">
              {TYPES.map((t) => <option key={t} value={t}>{TYPE_META[t].icon} {TYPE_META[t].label}</option>)}
            </select>
          </Field>
          <Field label="Priority">
            <select value={item.priority} onChange={(e) => onPatch(item.id, { priority: e.target.value as ScrumPriority })} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-gray-200">
              {PRIOS.map((p) => <option key={p} value={p}>{PRIORITY_META[p].label}</option>)}
            </select>
          </Field>
          <Field label="Status">
            <select value={item.status} onChange={(e) => onPatch(item.id, { status: e.target.value as ScrumStatus })} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-gray-200">
              {STATUS_COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              <option value="archived">Archived</option>
            </select>
          </Field>
          <Field label="Actions">
            <div className="flex gap-1">
              <button onClick={() => onPatch(item.id, { pinned: !item.pinned })} title="pin" className="flex-1 bg-white/5 border border-white/10 rounded px-2 py-1 text-xs hover:bg-white/10">{item.pinned ? "📌 Unpin" : "📌 Pin"}</button>
            </div>
          </Field>
        </div>

        <div className="text-[11px] text-gray-500 mb-3">
          {SOURCE_META[item.source].icon} {SOURCE_META[item.source].label} · initiated by <span className="text-gray-300">{item.initiator}</span>
          {item.sourceRef && <> · ref <span className="text-gray-400 font-mono">{item.sourceRef}</span></>} · created {timeAgo(item.createdAt)}
        </div>

        <Field label="Description">
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} onBlur={() => desc !== item.description && onPatch(item.id, { description: desc })}
            rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-200 leading-relaxed whitespace-pre-wrap focus:outline-none focus:border-cyan-500/40" />
        </Field>

        {/* Notes */}
        <div className="mt-4">
          <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2">Notes & decisions</p>
          <div className="space-y-1.5 mb-2 max-h-40 overflow-y-auto">
            {(item.notes ?? []).map((n, i) => (
              <div key={i} className="text-xs bg-white/3 border border-white/8 rounded-lg px-3 py-1.5">
                <span className="text-gray-300">{n.text}</span>
                <span className="text-[10px] text-gray-600 block mt-0.5">{n.author} · {timeAgo(n.ts)}</span>
              </div>
            ))}
            {(item.notes ?? []).length === 0 && <p className="text-[11px] text-gray-600">No notes yet.</p>}
          </div>
          <div className="flex gap-2">
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note / decision…" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-200 focus:outline-none focus:border-cyan-500/40"
              onKeyDown={(e) => { if (e.key === "Enter" && note.trim()) { onPatch(item.id, { note }); setNote(""); } }} />
            <button onClick={() => { if (note.trim()) { onPatch(item.id, { note }); setNote(""); } }} className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25">Add</button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/8">
          {confirmDel ? (
            <span className="text-xs text-red-400">Delete permanently? <button onClick={() => onRemove(item.id)} className="underline ml-1">yes</button> · <button onClick={() => setConfirmDel(false)} className="underline">no</button></span>
          ) : (
            <button onClick={() => setConfirmDel(true)} className="text-xs text-gray-600 hover:text-red-400">Delete</button>
          )}
          <span className="text-[10px] text-gray-600">Tip: drag cards between columns on the board.</span>
        </div>
      </div>
    </div>
  );
}

function NewItem({ onClose, onCreate }: { onClose: () => void; onCreate: (f: Partial<ScrumItem>) => void }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<ScrumType>("task");
  const [priority, setPriority] = useState<ScrumPriority>("p2");
  const [status, setStatus] = useState<ScrumStatus>("backlog");
  const [description, setDescription] = useState("");
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-[#0d1117] border border-white/15 rounded-2xl max-w-lg w-full my-8 p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold">New development item</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300 text-xl leading-none">✕</button>
        </div>
        <Field label="Title"><input autoFocus value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-cyan-500/40" /></Field>
        <div className="grid grid-cols-3 gap-2 my-3">
          <Field label="Type"><select value={type} onChange={(e) => setType(e.target.value as ScrumType)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-xs text-gray-200">{TYPES.map((t) => <option key={t} value={t}>{TYPE_META[t].icon} {TYPE_META[t].label}</option>)}</select></Field>
          <Field label="Priority"><select value={priority} onChange={(e) => setPriority(e.target.value as ScrumPriority)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-xs text-gray-200">{PRIOS.map((p) => <option key={p} value={p}>{PRIORITY_META[p].short}</option>)}</select></Field>
          <Field label="Status"><select value={status} onChange={(e) => setStatus(e.target.value as ScrumStatus)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1.5 text-xs text-gray-200">{STATUS_COLUMNS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}</select></Field>
        </div>
        <Field label="Description"><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-500/40" /></Field>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="text-xs px-3 py-1.5 rounded-lg text-gray-400 hover:text-gray-200">Cancel</button>
          <button disabled={!title.trim()} onClick={() => onCreate({ title, type, priority, status, description })} className="text-xs px-4 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-200 hover:bg-cyan-500/30 disabled:opacity-40">Create</button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1">{label}</span>
      {children}
    </label>
  );
}
