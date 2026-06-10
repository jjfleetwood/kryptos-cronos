"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Feed = { stageId: string; stageTitle: string; username: string; ts: number }[];

/** A compact "First Bloods" ticker for the homepage — recent pioneers, loud and live. */
export default function FrontierTicker() {
  const [feed, setFeed] = useState<Feed>([]);

  useEffect(() => {
    fetch("/api/frontier")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { feed?: Feed } | null) => { if (d?.feed) setFeed(d.feed.slice(0, 8)); })
      .catch(() => {});
  }, []);

  if (feed.length === 0) return null;

  return (
    <div className="border-y border-rose-500/15 bg-rose-500/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="text-xs font-bold text-rose-300 flex items-center gap-1 flex-shrink-0">🏴 First Bloods</span>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-6 whitespace-nowrap animate-[ticker_40s_linear_infinite]">
            {[...feed, ...feed].map((f, i) => (
              <Link key={i} href={`/stages/${f.stageId}`} className="text-xs text-gray-400 hover:text-rose-300 transition-colors flex-shrink-0">
                <span className="text-rose-300 font-semibold">{f.username}</span> first cleared <span className="text-gray-300">{f.stageTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
