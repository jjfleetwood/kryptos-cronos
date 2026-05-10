"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stages as allStages, epochs } from "@/data/stages";
import { getProgress } from "@/lib/progress";
import { getSession, clearSession } from "@/lib/auth";

const categoryColors: Record<string, string> = {
  cybersecurity: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  ai: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  owasp: "text-orange-400 bg-orange-400/10 border-orange-400/30",
};

const categoryLabel: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  ai: "AI",
  owasp: "OWASP",
};

const epochAccent: Record<string, { tab: string; active: string; bar: string; badge: string }> = {
  ancient: {
    tab: "text-amber-400 border-amber-400 bg-amber-400/10",
    active: "border-amber-400/60 bg-amber-500/5",
    bar: "bg-amber-500",
    badge: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  },
  medieval: {
    tab: "text-violet-400 border-violet-400 bg-violet-400/10",
    active: "border-violet-400/60 bg-violet-500/5",
    bar: "bg-violet-500",
    badge: "text-violet-400 bg-violet-400/10 border-violet-400/30",
  },
};

export default function StagesPage() {
  const router = useRouter();
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [totalXp, setTotalXp] = useState(0);
  const [username, setUsername] = useState<string | null>(null);
  const [activeEpoch, setActiveEpoch] = useState("ancient");

  useEffect(() => {
    const session = getSession();
    setUsername(session);
    const progress = getProgress();
    setCompletedStages(progress.completedStages);
    setTotalXp(progress.xp);
  }, []);

  function handleLogout() {
    clearSession();
    router.refresh();
    setUsername(null);
  }

  const epochStages = allStages.filter((s) => s.epochId === activeEpoch);
  const currentEpoch = epochs.find((e) => e.id === activeEpoch)!;
  const accent = epochAccent[activeEpoch] ?? epochAccent.ancient;

  const maxXp = allStages.reduce((sum, s) => sum + s.xp, 0);

  function isUnlocked(epochId: string, order: number): boolean {
    if (order === 1) return true;
    const prev = allStages.find((s) => s.epochId === epochId && s.order === order - 1);
    if (!prev) return false;
    return completedStages.includes(prev.id);
  }

  return (
    <div
      className="min-h-screen px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              ← Back to Home
            </Link>
            <Link href="/leaderboard" className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
              🏆 Leaderboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Training Stage Map</h1>
          <p className="text-gray-400">Complete stages in order to unlock new challenges and earn XP.</p>

          {/* XP bar */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 bg-white/5 rounded-full h-3">
              <div
                className={`${accent.bar} h-3 rounded-full transition-all duration-700`}
                style={{ width: `${maxXp > 0 ? (totalXp / maxXp) * 100 : 0}%` }}
              />
            </div>
            <span className="text-amber-400 font-mono text-sm">{totalXp} XP</span>
          </div>
        </div>

        {/* Epoch tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {epochs.map((epoch) => {
            const isActive = epoch.id === activeEpoch;
            const ea = epochAccent[epoch.id] ?? epochAccent.ancient;
            return (
              <button
                key={epoch.id}
                onClick={() => epoch.unlocked && setActiveEpoch(epoch.id)}
                disabled={!epoch.unlocked}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                  !epoch.unlocked
                    ? "border-white/10 text-gray-600 bg-white/3 cursor-not-allowed opacity-50"
                    : isActive
                    ? ea.tab
                    : "border-white/20 text-gray-400 hover:border-white/40"
                }`}
              >
                <span>{epoch.emoji}</span>
                <span>{epoch.name}</span>
                {!epoch.unlocked && <span className="text-xs">🔒</span>}
              </button>
            );
          })}
        </div>

        {/* Epoch header */}
        <div className={`rounded-xl border px-6 py-5 mb-6 ${accent.active}`}>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-3xl">{currentEpoch.emoji}</span>
            <div>
              <h2 className="text-white font-bold text-lg">{currentEpoch.name}</h2>
              <p className="text-gray-400 text-sm">{currentEpoch.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">{currentEpoch.description}</p>
        </div>

        {/* Auth banner */}
        {username ? (
          <div className="flex items-center justify-between bg-cyan-500/5 border border-cyan-500/20 rounded-xl px-5 py-3 mb-6">
            <span className="text-sm text-gray-300">
              👤 Welcome, <span className="text-cyan-400 font-semibold">{username}</span>!
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-500 hover:text-red-400 transition-colors"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/3 border border-white/10 rounded-xl px-5 py-3 mb-6">
            <span className="text-sm text-gray-400">
              👤 Playing as Guest —{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign in
              </Link>{" "}
              to save your progress across devices.
            </span>
          </div>
        )}

        {/* Stage list */}
        <div className="flex flex-col gap-4">
          {epochStages.map((stage) => {
            const unlocked = isUnlocked(stage.epochId, stage.order);
            const completed = completedStages.includes(stage.id);

            return (
              <div
                key={stage.id}
                className={`relative border rounded-xl p-6 transition-all ${
                  completed
                    ? "border-green-500/40 bg-green-500/5"
                    : unlocked
                    ? "border-amber-500/40 bg-white/5 hover:border-amber-400"
                    : "border-white/5 bg-white/2 opacity-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Stage number / status */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${
                      completed
                        ? "bg-green-500 text-black"
                        : unlocked
                        ? "bg-amber-500 text-black"
                        : "bg-white/10 text-gray-600"
                    }`}
                  >
                    {completed ? "✓" : unlocked ? stage.order : "🔒"}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Wonder badge */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-base">{stage.wonder.emoji}</span>
                      <span className="text-xs text-amber-600/80 font-medium">{stage.wonder.name}</span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-xs text-gray-600">{stage.wonder.location}</span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-xs text-gray-600">{stage.wonder.era}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-white font-semibold text-lg">{stage.title}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[stage.category]}`}>
                        {categoryLabel[stage.category]}
                      </span>
                      {stage.owaspRef && (
                        <span className="text-xs px-2 py-0.5 rounded-full border text-orange-400 bg-orange-400/10 border-orange-400/30">
                          {stage.owaspRef}
                        </span>
                      )}
                      {stage.cveId && (
                        <span className="text-xs px-2 py-0.5 rounded-full border text-red-400 bg-red-400/10 border-red-400/30">
                          {stage.cveId}
                        </span>
                      )}
                      {stage.challengeType === "ctf" && (
                        <span className="text-xs px-2 py-0.5 rounded-full border text-purple-400 bg-purple-400/10 border-purple-400/30">
                          🚩 CTF
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{stage.subtitle}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="text-amber-600">+{stage.xp} XP</span>
                      <span>{stage.badge.emoji} {stage.badge.name}</span>
                      {completed && <span className="text-green-400">✓ Completed</span>}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    {unlocked ? (
                      <Link
                        href={`/stages/${stage.id}`}
                        className={`px-5 py-2 font-semibold rounded-lg text-sm transition-colors ${
                          completed
                            ? "bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
                            : "bg-amber-500 hover:bg-amber-400 text-black"
                        }`}
                      >
                        {completed ? "Replay →" : "Enter →"}
                      </Link>
                    ) : (
                      <div className="px-5 py-2 bg-white/5 text-gray-600 rounded-lg text-sm cursor-not-allowed">
                        Locked
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector line */}
                {stage.order < epochStages.length && (
                  <div className="absolute left-10 -bottom-4 w-0.5 h-4 bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
