"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { stagesMeta } from "@kryptos/core/stages-meta";

type Data = {
  next: { id: string; title: string; epochId: string } | null;
  xpToGoal: number;
  streak: number;
  goalMet: boolean;
} | null;

/**
 * A persistent "do this next" strip for the top of /stages: how much XP is left
 * to keep today's streak alive, plus a one-tap Continue-where-you-left-off to the
 * next unfinished stage in the epoch you last touched. (UX-agent finding: the
 * streak loop had no clear next action.)
 */
export default function ContinueStrip() {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/quests").then((r) => (r.ok ? r.json() : null)).catch(() => null),
      fetch("/api/progress").then((r) => (r.ok ? r.json() : null)).catch(() => null),
    ]).then(([q, p]) => {
      if (!p) return; // not signed in
      const completed: string[] = p.completedStages ?? [];
      const done = new Set(completed);
      // Resume the epoch you last touched; fall back to the first unfinished stage.
      const lastId = completed[completed.length - 1];
      const lastEpoch = lastId ? stagesMeta.find((s) => s.id === lastId)?.epochId : undefined;
      const inEpoch = lastEpoch
        ? stagesMeta.filter((s) => s.epochId === lastEpoch).sort((a, b) => a.order - b.order)
        : [];
      const next =
        inEpoch.find((s) => !done.has(s.id)) ??
        stagesMeta.find((s) => !done.has(s.id)) ??
        null;
      const dayXp = Number(q?.streak?.dayXp ?? 0);
      const goal = Number(q?.streak?.goal ?? 50);
      setData({
        next: next ? { id: next.id, title: next.title, epochId: next.epochId } : null,
        xpToGoal: Math.max(0, goal - dayXp),
        streak: Number(q?.streak?.current ?? 0),
        goalMet: dayXp >= goal,
      });
    });
  }, []);

  if (!data || !data.next) return null;

  return (
    <div className="mb-6 rounded-2xl border border-cyan-500/25 bg-gradient-to-r from-cyan-500/8 to-transparent p-4 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-2xl leading-none flex-shrink-0">{data.goalMet ? "✅" : "🔥"}</span>
        <div className="min-w-0">
          <div className="text-sm font-bold text-white truncate">
            {data.goalMet
              ? `Daily goal met — ${data.streak}-day streak secured`
              : `${data.xpToGoal} XP to keep your${data.streak > 0 ? ` ${data.streak}-day` : ""} streak`}
          </div>
          <div className="text-xs text-gray-500 truncate">Pick up where you left off</div>
        </div>
      </div>
      <Link
        href={`/stages/${data.next.id}`}
        className="flex-shrink-0 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-colors"
      >
        Continue: {data.next.title.length > 28 ? data.next.title.slice(0, 28) + "…" : data.next.title} →
      </Link>
    </div>
  );
}
