"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stagesMeta as allStages, epochs } from "@kryptos/core/stages-meta";
import { fetchProgress } from "@/lib/progress";
import { getSession, setSession, clearSession } from "@/lib/auth";
import OnboardingModal from "@/components/OnboardingModal";
import { LevelProgress } from "@/components/LevelBadge";
import { epochAccent } from "@/app/stages/epoch-theme";
import { useSkin } from "@/contexts/SkinContext";
import { useLocale } from "@/contexts/LocaleContext";
import { useGroup } from "@/contexts/GroupContext";
import metaEs from "@kryptos/core/translations/meta-es.json";
import metaFr from "@kryptos/core/translations/meta-fr.json";
import metaDe from "@kryptos/core/translations/meta-de.json";
import metaHi from "@kryptos/core/translations/meta-hi.json";
import metaPt from "@kryptos/core/translations/meta-pt.json";
import metaPl from "@kryptos/core/translations/meta-pl.json";

type EpochMeta = { n: string; s: string; d: string };
type MetaFile = { stages: Record<string, unknown>; epochs: Record<string, EpochMeta> };
const STAGE_META_MAPS: Record<string, MetaFile> = {
  es: metaEs as MetaFile,
  fr: metaFr as MetaFile,
  de: metaDe as MetaFile,
  hi: metaHi as MetaFile,
  pt: metaPt as MetaFile,
  pl: metaPl as MetaFile,
};

// ── Track groupings ────────────────────────────────────────────────────────────
const epochGroups = [
  {
    id: "coreSecurity",
    labelKey: "stages.tracks.coreSecurity",
    descKey: "stages.tracks.coreSecurityDesc",
    epochIds: ["first-journey", "ancient", "sec-foundations", "computing-foundations", "silicon-fab"],
  },
  {
    id: "techAudit",
    labelKey: "stages.tracks.techAudit",
    descKey: "stages.tracks.techAuditDesc",
    epochIds: ["tech-audit-1", "tech-audit-2", "tech-audit-3", "tech-audit-4"],
  },
  {
    id: "threatFrameworks",
    labelKey: "stages.tracks.threatFrameworks",
    descKey: "stages.tracks.threatFrameworksDesc",
    epochIds: ["mitre", "threat-frameworks"],
  },
  {
    id: "aiSecurity",
    labelKey: "stages.tracks.aiSecurity",
    descKey: "stages.tracks.aiSecurityDesc",
    epochIds: ["mitre-atlas", "owasp-llm", "emerging-tech", "ai-ml-foundations"],
  },
  {
    id: "quantumEra",
    labelKey: "stages.tracks.quantumEra",
    descKey: "stages.tracks.quantumEraDesc",
    epochIds: ["quantum-intro", "quantum-deep", "quantum-1", "quantum-2", "quantum-3", "quantum-4", "quantum-5"],
  },
  {
    id: "enterprise",
    labelKey: "stages.tracks.enterprise",
    descKey: "stages.tracks.enterpriseDesc",
    epochIds: ["cisco-core", "cisco-enterprise", "cisco-secops", "cisco-advanced", "umbrella", "physics-of-hacking"],
  },
  {
    id: "spaceRace",
    labelKey: "stages.tracks.spaceRace",
    descKey: "stages.tracks.spaceRaceDesc",
    epochIds: ["space-race", "space-race-2"],
  },
  {
    id: "vehicleSec",
    labelKey: "stages.tracks.vehicleSec",
    descKey: "stages.tracks.vehicleSecDesc",
    epochIds: ["vehicle-sec", "vehicle-sec-2"],
  },
  {
    id: "robotics",
    labelKey: "stages.tracks.robotics",
    descKey: "stages.tracks.roboticsDesc",
    epochIds: ["robot-sec", "robot-sec-2"],
  },
  {
    id: "operationalTech",
    labelKey: "stages.tracks.operationalTech",
    descKey: "stages.tracks.operationalTechDesc",
    epochIds: ["ot-sec"],
  },
];

// ── Extended curriculum (hidden from guests, accessible to pro users) ──────────
const extendedGroups = [
  {
    id: "crafts",
    labelKey: "stages.tracks.crafts",
    descKey: "stages.tracks.craftsDesc",
    epochIds: ["tapestry", "nails", "hair-color", "hair-styling"],
  },
  {
    id: "driving",
    labelKey: "stages.tracks.driving",
    descKey: "stages.tracks.drivingDesc",
    epochIds: ["driving-1", "driving-2", "driving-3"],
  },
  {
    id: "sports",
    labelKey: "stages.tracks.sports",
    descKey: "stages.tracks.sportsDesc",
    epochIds: ["baseball-1", "baseball-2", "baseball-3", "baseball-4", "baseball-5", "baseball-6", "baseball-7", "baseball-8", "baseball-9", "baseball-10", "baseball-11", "baseball-12", "baseball-13", "baseball-14", "baseball-15"],
  },
  {
    id: "travel",
    labelKey: "stages.tracks.travel",
    descKey: "stages.tracks.travelDesc",
    epochIds: ["paris-july", "milan-july", "french-basics", "italian-basics"],
  },
  {
    id: "debate",
    labelKey: "stages.tracks.debate",
    descKey: "stages.tracks.debateDesc",
    epochIds: ["debate-1", "debate-2", "debate-3", "debate-4", "debate-5", "debate-6", "debate-7", "debate-8"],
  },
  {
    id: "flagFootball",
    labelKey: "stages.tracks.flagFootball",
    descKey: "stages.tracks.flagFootballDesc",
    epochIds: ["flag-football-1", "flag-football-2", "flag-football-3"],
  },
];

// ── Per-track visual style (bolder, more-visible labels) ──────────────────────
const TRACK_STYLE: Record<string, { icon: string; color: string }> = {
  coreSecurity:     { icon: "🏛️", color: "#fbbf24" },
  techAudit:        { icon: "📋", color: "#3b82f6" },
  threatFrameworks: { icon: "🎯", color: "#ef4444" },
  aiSecurity:       { icon: "🤖", color: "#a855f7" },
  quantumEra:       { icon: "⚛️", color: "#22d3ee" },
  enterprise:       { icon: "🌐", color: "#6366f1" },
  spaceRace:        { icon: "🚀", color: "#a78bfa" },
  vehicleSec:       { icon: "🚗", color: "#a3e635" },
  robotics:         { icon: "🦾", color: "#fb923c" },
  operationalTech:  { icon: "🏭", color: "#fbbf24" },
  crafts:           { icon: "🧵", color: "#ec4899" },
  driving:          { icon: "🚗", color: "#f97316" },
  sports:           { icon: "⚾", color: "#22c55e" },
  travel:           { icon: "✈️", color: "#14b8a6" },
  debate:           { icon: "🗣️", color: "#a78bfa" },
  flagFootball:     { icon: "🏈", color: "#34d399" },
};
const DEFAULT_STYLE = { icon: "📦", color: "#9ca3af" };

// Tracks whose epochs read better split into sub-categories — rendered as labeled
// left-to-right rows, under an optional sub-label between the track and the rows.
type SubGroup = { label: string; ids: string[] };
const TRACK_SUBLABEL: Record<string, { icon: string; text: string }> = {
  sports: { icon: "⚾", text: "Baseball" },
};
const TRACK_SUBGROUPS: Record<string, SubGroup[]> = {
  sports: [
    { label: "Fundamentals", ids: ["baseball-1"] },
    { label: "Hitting", ids: ["baseball-2", "baseball-3", "baseball-4"] },
    { label: "Pitching", ids: ["baseball-5", "baseball-6", "baseball-7"] },
    { label: "Positions", ids: ["baseball-8", "baseball-9", "baseball-10", "baseball-11", "baseball-12", "baseball-13", "baseball-14", "baseball-15"] },
  ],
  debate: [
    { label: "Foundations", ids: ["debate-1", "debate-2"] },
    { label: "Formats & Research", ids: ["debate-3", "debate-4"] },
    { label: "Clash & Delivery", ids: ["debate-5", "debate-6"] },
    { label: "Mastery", ids: ["debate-7", "debate-8"] },
  ],
};

// ── Epochs allowed per user group ─────────────────────────────────────────────
// career = Security tracks | curious = full curriculum (security + non-security)
// Mirrors filterStagesByGroup in epoch page: career and curious are equivalent
const SECURITY_EPOCHS = new Set([
  "first-journey", "ancient", "computing-foundations", "silicon-fab",
  "tech-audit-1", "tech-audit-2", "tech-audit-3", "tech-audit-4",
  "mitre", "mitre-atlas", "owasp-llm", "emerging-tech", "ai-ml-foundations", "sec-foundations",
  "quantum-intro", "quantum-deep", "quantum-1", "quantum-2", "quantum-3", "quantum-4", "quantum-5",
  "cisco-core", "cisco-enterprise", "cisco-secops", "cisco-advanced", "umbrella",
  "physics-of-hacking", "space-race", "vehicle-sec", "robot-sec", "ot-sec", "vehicle-sec-2", "robot-sec-2", "space-race-2", "threat-frameworks",
]);
const NON_SECURITY_EPOCHS = new Set([
  "tapestry", "nails", "hair-color", "hair-styling",
  "driving-1", "driving-2", "driving-3",
  "baseball-1", "baseball-2", "baseball-3", "baseball-4", "baseball-5", "baseball-6", "baseball-7",
  "paris-july", "milan-july", "french-basics", "italian-basics",
  "debate-1", "debate-2", "debate-3", "debate-4", "debate-5", "debate-6", "debate-7", "debate-8",
  "flag-football-1", "flag-football-2", "flag-football-3",
]);
const ALL_EPOCHS = new Set([...SECURITY_EPOCHS, ...NON_SECURITY_EPOCHS]);
const GROUP_EPOCHS: Record<string, Set<string>> = {
  "career":      SECURITY_EPOCHS,
  "elementary":  SECURITY_EPOCHS,
  "junior-hs":   SECURITY_EPOCHS,
  "high-school": SECURITY_EPOCHS,
  "university":  SECURITY_EPOCHS,
  "curious":     ALL_EPOCHS,
};

// ── Open-access dev mode ──────────────────────────────────────────────────────
// While true, every track is visible to every user regardless of group. At launch,
// flip to false to restore group-based visibility (mirrors OPEN_ACCESS in lib/access.ts).
const OPEN_ACCESS = true;

export default function StagesPage() {
  const router = useRouter();
  useSkin();
  const { t, locale } = useLocale();
  const { groups } = useGroup();
  const epochMetaMap = locale !== "en" ? (STAGE_META_MAPS[locale]?.epochs ?? null) : null;
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [totalXp, setTotalXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    setUsername(getSession());
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { username: string } | null) => {
        if (!data) return;
        setUsername(data.username);
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

  // Pre-compute which tracks + epochs are visible. In open-access dev mode, show
  // every track's epochs (also surfaces epochs missing from the group sets, e.g.
  // quantum-4 / emerging-tech); otherwise union across the user's active groups.
  const allowed = OPEN_ACCESS
    ? new Set<string>([...epochGroups, ...extendedGroups].flatMap((g) => g.epochIds))
    : groups.reduce((acc, g) => {
        const set = GROUP_EPOCHS[g];
        if (set) for (const id of set) acc.add(id);
        return acc;
      }, new Set<string>());
  const extendedIds = new Set(extendedGroups.map((g) => g.id));
  const visibleTracks = [...epochGroups, ...extendedGroups]
    .map((track) => ({
      ...track,
      isExtended: extendedIds.has(track.id),
      visibleEpochIds: track.epochIds.filter((id) => allowed.has(id)),
    }))
    .filter((track) => track.visibleEpochIds.length > 0);
  const firstExtendedIdx = visibleTracks.findIndex((t) => t.isExtended);

  function renderCard(epoch: (typeof epochs)[number]) {
    const ea = epochAccent[epoch.id] ?? epochAccent.ancient;
    const stageCount = allStages.filter((s) => s.epochId === epoch.id).length;
    const doneCount = allStages.filter((s) => s.epochId === epoch.id && completedStages.includes(s.id)).length;
    const pct = stageCount > 0 ? (doneCount / stageCount) * 100 : 0;
    const done = doneCount === stageCount && stageCount > 0;
    // Accent text-color token (e.g. "text-lime-400") drives the water via currentColor.
    // At 100% the tank turns green to signal completion.
    const textClass = done ? "text-green-400" : ((ea.tab || "").split(" ")[0] || "text-cyan-400");
    return (
      <Link
        key={epoch.id}
        href={`/stages/epoch/${epoch.id}`}
        title={stageCount > 0 ? `${Math.round(pct)}% complete (${doneCount}/${stageCount})` : undefined}
        className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
          done
            ? "border-green-500/40 bg-green-500/5 hover:border-green-400/60"
            : "border-white/10 bg-white/2 hover:border-white/25 hover:bg-white/5"
        }`}
      >
        {/* Water-tank progress fill — height = % complete (with a small visible
            base so every epoch shows the animated water, even at 0%). */}
        {stageCount > 0 && (
          <div
            aria-hidden="true"
            className={`kc-tank pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden ${textClass} ${done ? "kc-tank-done" : ""}`}
            style={{ height: `max(${pct}%, 14px)`, opacity: doneCount === 0 ? 0.7 : 1 }}
          >
            <div className="kc-tank-inner absolute inset-0">
              <div className="absolute inset-x-0 top-1.5 bottom-0" style={{ background: "currentColor", opacity: 0.18 }} />
              <svg className="kc-wave kc-wave-a" viewBox="0 0 120 16" preserveAspectRatio="none" fill="currentColor">
                <path d="M0 10 Q15 1 30 10 T60 10 T90 10 T120 10 V16 H0 Z" />
              </svg>
              <svg className="kc-wave kc-wave-b" viewBox="0 0 120 16" preserveAspectRatio="none" fill="currentColor">
                <path d="M0 10 Q15 3 30 10 T60 10 T90 10 T120 10 V16 H0 Z" />
              </svg>
            </div>
          </div>
        )}
        <span className="relative z-10 text-2xl leading-none flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
          {epoch.emoji}
        </span>
        <div className="relative z-10 flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-semibold text-gray-200 truncate">{epochMetaMap?.[epoch.id]?.n ?? epoch.name}</span>
            {doneCount > 0 && doneCount < stageCount && (
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${ea.tab} flex-shrink-0`}>
                {doneCount}/{stageCount}
              </span>
            )}
            {done && (
              <span className="text-[10px] font-mono text-green-400 flex-shrink-0">{t("stages.epochDone")}</span>
            )}
          </div>
          <p className="text-xs text-gray-600 truncate">{epochMetaMap?.[epoch.id]?.s ?? epoch.subtitle}</p>
        </div>
        <span className="relative z-10 text-gray-700 group-hover:text-gray-400 transition-colors text-sm flex-shrink-0">→</span>
      </Link>
    );
  }

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

        {/* ── Epoch track groups ─────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Security section header */}
          {visibleTracks.some((track) => !track.isExtended) && (
            <div className="flex items-center gap-3 mb-2">
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
          )}
          {visibleTracks.map((trackGroup, idx) => {
            const trackEpochs = trackGroup.visibleEpochIds
              .map((id) => epochs.find((e) => e.id === id))
              .filter(Boolean) as typeof epochs;

            return (
              <div key={trackGroup.id}>
                {/* Divider before first extended group */}
                {trackGroup.isExtended && idx === firstExtendedIdx && (
                  <div className="flex items-center gap-3 mb-6 mt-4">
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-[11px] font-mono font-bold text-amber-600 uppercase tracking-widest px-2">
                      📚 {t("stages.sectionNonSecurity")}
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                )}

                {/* Track label — bold, per-track accent */}
                {(() => {
                  const ts = TRACK_STYLE[trackGroup.id] ?? DEFAULT_STYLE;
                  return (
                    <div className="mb-3">
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <span className="text-lg leading-none">{ts.icon}</span>
                        <span className="text-lg font-bold text-white tracking-tight">{t(trackGroup.labelKey)}</span>
                        <div className="flex-1 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${ts.color}80, transparent)` }} />
                      </div>
                      <p className="text-[11px] text-gray-500 pl-8">{t(trackGroup.descKey)}</p>
                    </div>
                  );
                })()}

                {/* Epoch cards — grouped rows where a track defines sub-categories, else grid */}
                {(() => {
                  const ts = TRACK_STYLE[trackGroup.id] ?? DEFAULT_STYLE;
                  const subGroups = TRACK_SUBGROUPS[trackGroup.id];
                  if (subGroups) {
                    const visibleSet = new Set(trackGroup.visibleEpochIds);
                    const subLabel = TRACK_SUBLABEL[trackGroup.id];
                    const totalStages = trackEpochs.reduce((n, e) => n + allStages.filter((s) => s.epochId === e.id).length, 0);
                    return (
                      <div className="pl-4">
                        {subLabel && (
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm leading-none">{subLabel.icon}</span>
                            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: ts.color }}>{subLabel.text}</span>
                            <span className="text-[11px] text-gray-600">· {trackEpochs.length} epochs · {totalStages} stages</span>
                          </div>
                        )}
                        <div className="divide-y divide-white/10 border-y border-white/10">
                          {subGroups.map((sg) => {
                            const sgEpochs = sg.ids
                              .filter((id) => visibleSet.has(id))
                              .map((id) => epochs.find((e) => e.id === id))
                              .filter(Boolean) as typeof epochs;
                            if (sgEpochs.length === 0) return null;
                            return (
                              <div key={sg.label} className="py-4 first:pt-3 last:pb-2">
                                <span className="block text-[11px] font-mono font-bold uppercase tracking-widest mb-3" style={{ color: ts.color }}>
                                  {sg.label}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {sgEpochs.map((epoch) => renderCard(epoch))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
                      {trackEpochs.map((epoch) => renderCard(epoch))}
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
