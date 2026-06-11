"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stagesMeta as allStages } from "@kryptos/core/stages-meta";
import { fetchProgress } from "@/lib/progress";
import { getSession, setSession, clearSession } from "@/lib/auth";
import OnboardingModal from "@/components/OnboardingModal";
import { LevelProgress } from "@/components/LevelBadge";
import { useSkin } from "@/contexts/SkinContext";
import { useLocale } from "@/contexts/LocaleContext";
import { useGroup } from "@/contexts/GroupContext";
import { TrackCatalog } from "./TrackCatalog";
import ContinueStrip from "@/components/ContinueStrip";
import { epochGroups, computeVisibleTracks } from "./track-data";

export default function StagesPage() {
  const router = useRouter();
  useSkin();
  const { t } = useLocale();
  const { groups } = useGroup();
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [totalXp, setTotalXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [username, setUsername] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setUsername(getSession());
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { username: string; isAdmin?: boolean } | null) => {
        if (!data) return;
        setUsername(data.username);
        setIsAdmin(!!data.isAdmin);
        setSession(data.username);
        fetchProgress().then((p) => {
          if (!p) return;
          setCompletedStages(p.completedStages);
          setTotalXp(p.xp);
          setStreak(p.streak ?? 0);
        });
      })
      .catch(() => {});
  }, []);

  function handleLogout() {
    clearSession();
    router.refresh();
    setUsername(null);
  }

  const maxXp = allStages.reduce((sum, s) => sum + s.xp, 0);
  // /stages is the cyber product: security tracks only. The diverse, non-security
  // catalog lives on the low-prominence /explore route (see track-data + /explore).
  const visibleTracks = computeVisibleTracks(epochGroups, groups);

  return (
    <div
      className="min-h-screen px-4 py-16"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f2027 50%, #1a1a2e 100%)" }}
    >
      <OnboardingModal />
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
              {t("stages.backToHome")}
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/quests" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
                🎯 Quests
              </Link>
              <Link href="/achievements" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1">
                🏅 <span className="hidden sm:inline">Achievements</span>
              </Link>
              <Link href="/leagues" className="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
                ⚔️ Leagues
              </Link>
              <Link href="/leaderboard" className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                🏆 {t("nav.leaderboard")}
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{t("stages.title")}</h1>
          <p className="text-gray-400">{t("stages.subtitle")}</p>

          {/* Level + rank progress */}
          {username && <LevelProgress xp={totalXp} className="mt-6 max-w-md" />}

          {/* Catalog completion bar + streak */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <div className="flex-1 bg-white/5 rounded-full h-3">
              <div
                className="bg-cyan-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${maxXp > 0 ? (totalXp / maxXp) * 100 : 0}%` }}
              />
            </div>
            <span className="text-amber-400 font-mono text-sm">{totalXp.toLocaleString()} / {maxXp.toLocaleString()} XP</span>
            {streak > 0 && (
              <span
                className="flex items-center gap-1 text-sm font-mono font-bold px-2.5 py-0.5 rounded-full border"
                style={{
                  color: streak >= 7 ? "#fb923c" : "#facc15",
                  borderColor: streak >= 7 ? "rgba(251,146,60,0.4)" : "rgba(250,204,21,0.3)",
                  background: streak >= 7 ? "rgba(251,146,60,0.08)" : "rgba(250,204,21,0.06)",
                }}
              >
                🔥 {streak}d
              </span>
            )}
          </div>
        </div>

        {/* Auth banner */}
        {username ? (
          <div className="flex items-center justify-between bg-cyan-500/5 border border-cyan-500/20 rounded-xl px-5 py-3 mb-8">
            <span className="text-sm text-gray-300">
              👤 {t("stages.welcomeUser")} <span className="text-cyan-400 font-semibold">{username}</span>
            </span>
            <div className="flex items-center gap-4">
              <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-red-400 transition-colors">
                {t("stages.logOut")}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/3 border border-white/10 rounded-xl px-5 py-3 mb-8">
            <span className="text-sm text-gray-400">
              👤 {t("stages.guestPromptPre")} —{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">{t("nav.signIn")}</Link>{" "}
              {t("stages.guestPromptPost")}
            </span>
          </div>
        )}

        {/* Cert paths banner */}
        <Link
          href="/certs"
          className="flex items-center gap-3 bg-indigo-500/6 border border-indigo-500/25 rounded-xl px-4 py-3 mb-6 hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-colors group"
        >
          <span className="text-xl flex-shrink-0">🎓</span>
          <div className="flex-1 min-w-0">
            <p className="text-indigo-300 font-semibold text-sm">Certificate Paths</p>
            <p className="text-gray-500 text-xs">Track your readiness for Network+, Security+, ISC² CC, and CySA+ →</p>
          </div>
          <span className="text-indigo-600 group-hover:text-indigo-400 text-sm flex-shrink-0 transition-colors">→</span>
        </Link>

        {/* ── Security track groups ───────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono font-bold text-cyan-500 uppercase tracking-widest whitespace-nowrap">
            🔒 {t("stages.sectionSecurity")}
          </span>
          <div className="flex-1 h-px bg-cyan-500/20" />
          <Link
            href="/downloads"
            className="text-[10px] font-mono text-emerald-500 hover:text-emerald-400 transition-colors whitespace-nowrap border border-emerald-500/30 px-2.5 py-1 rounded-lg"
          >
            ↓ Python Downloads
          </Link>
        </div>

        {/* Agent Risk Audit Guide — field guide companion to the Auditing Agentic AI epochs */}
        <div className="flex justify-end mb-4 -mt-2">
          <Link
            href="/guides/agent-risk-audit"
            className="text-[10px] font-mono text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap border border-violet-500/30 px-2.5 py-1 rounded-lg"
          >
            🛡️ Agent Risk Audit Guide
          </Link>
        </div>

        {/* Agent Fleet Overview — internal ops doc, admin-only (the page itself is admin-gated). */}
        {isAdmin && (
          <div className="flex justify-end mb-4 -mt-2">
            <Link
              href="/guides/agent-fleet"
              className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap border border-emerald-500/30 px-2.5 py-1 rounded-lg"
            >
              🛰️ Agent Fleet Overview
            </Link>
          </div>
        )}

        <ContinueStrip />

        <TrackCatalog visibleTracks={visibleTracks} completedStages={completedStages} />

        {/* Link to the diverse (non-security) catalog */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 rounded-full px-5 py-2 transition-colors"
          >
            🧭 Explore more — non-security learning tracks →
          </Link>
        </div>

      </div>
    </div>
  );
}
