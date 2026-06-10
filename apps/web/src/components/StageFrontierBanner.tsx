"use client";

import { useEffect, useState } from "react";

type FrontierStage = { pioneer: string | null; clears: number };

/**
 * "First Blood" banner on a stage page. If nobody has cleared the stage it loudly
 * invites the learner to be the Pioneer; otherwise it credits the pioneer
 * (permanently) and shows the global clear count.
 */
export default function StageFrontierBanner({ stageId }: { stageId: string }) {
  const [data, setData] = useState<FrontierStage | null>(null);

  useEffect(() => {
    let live = true;
    fetch(`/api/frontier?stage=${encodeURIComponent(stageId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: FrontierStage | null) => { if (live && d) setData(d); })
      .catch(() => {});
    return () => { live = false; };
  }, [stageId]);

  if (!data) return null;

  // Uncleared — the frontier is open.
  if (!data.pioneer) {
    return (
      <div className="mb-4 rounded-xl border border-rose-500/40 bg-gradient-to-r from-rose-500/10 to-transparent px-4 py-2.5 flex items-center gap-2.5">
        <span className="text-xl">🏴</span>
        <span className="text-sm text-rose-200">
          <span className="font-bold">Uncleared frontier.</span> Be the first to clear this stage and you&apos;ll be its <span className="font-bold">Pioneer — forever.</span>
        </span>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-xl border border-white/10 bg-white/3 px-4 py-2.5 flex items-center gap-2.5">
      <span className="text-xl">🏴</span>
      <span className="text-sm text-gray-300">
        First cleared by <span className="font-bold text-rose-300">{data.pioneer}</span>
        <span className="text-gray-600"> · {data.clears.toLocaleString()} {data.clears === 1 ? "agent has" : "agents have"} cleared this</span>
      </span>
    </div>
  );
}
