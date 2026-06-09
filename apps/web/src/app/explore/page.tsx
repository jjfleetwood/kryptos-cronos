"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProgress } from "@/lib/progress";
import { getSession, setSession } from "@/lib/auth";
import { useSkin } from "@/contexts/SkinContext";
import { useGroup } from "@/contexts/GroupContext";
import { TrackCatalog } from "@/app/stages/TrackCatalog";
import { extendedGroups, computeVisibleTracks } from "@/app/stages/track-data";

// The diverse, non-security catalog. Kept on this low-prominence route (not the
// main /stages cyber product) — the "two products, one engine" carve. Same app,
// same @kryptos/core content; just a separate door.
export default function ExplorePage() {
  useSkin();
  const { groups } = useGroup();
  const [completedStages, setCompletedStages] = useState<string[]>([]);

  useEffect(() => {
    setSession(getSession() ?? "");
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { username: string } | null) => {
        if (!data) return;
        setSession(data.username);
        fetchProgress().then((p) => {
          if (p) setCompletedStages(p.completedStages);
        });
      })
      .catch(() => {});
  }, []);

  const visibleTracks = computeVisibleTracks(extendedGroups, groups);

  return (
    <div
      className="min-h-screen px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/stages" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
            ← Back to Security tracks
          </Link>
          <h1 className="text-4xl font-bold text-white mt-4 mb-2">Explore More</h1>
          <p className="text-gray-400">
            The same engine, beyond cybersecurity — debate, languages, sports, driving, and crafts. Learn anything, gamified.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono font-bold text-amber-600 uppercase tracking-widest whitespace-nowrap">
            📚 Non-Security Tracks
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {visibleTracks.length > 0 ? (
          <TrackCatalog visibleTracks={visibleTracks} completedStages={completedStages} />
        ) : (
          <p className="text-gray-600 text-sm">No additional tracks are available for your account.</p>
        )}
      </div>
    </div>
  );
}
