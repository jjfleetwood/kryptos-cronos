"use client";

import Link from "next/link";
import { stagesMeta as allStages, epochs } from "@kryptos/core/stages-meta";
import { epochAccent } from "@/app/stages/epoch-theme";
import { useLocale } from "@/contexts/LocaleContext";
import {
  TRACK_STYLE, DEFAULT_STYLE, TRACK_SUBGROUPS, TRACK_SUBLABEL, STAGE_META_MAPS,
  type VisibleTrack,
} from "./track-data";

/** Renders a list of resolved track groups as epoch cards (with optional
 *  sub-category rows). Shared by /stages (security) and /explore (extended). */
export function TrackCatalog({
  visibleTracks,
  completedStages,
}: {
  visibleTracks: VisibleTrack[];
  completedStages: string[];
}) {
  const { t, locale } = useLocale();
  const epochMetaMap = locale !== "en" ? (STAGE_META_MAPS[locale]?.epochs ?? null) : null;

  function renderCard(epoch: (typeof epochs)[number]) {
    const ea = epochAccent[epoch.id] ?? epochAccent.ancient;
    const stageCount = allStages.filter((s) => s.epochId === epoch.id).length;
    const doneCount = allStages.filter((s) => s.epochId === epoch.id && completedStages.includes(s.id)).length;
    const pct = stageCount > 0 ? (doneCount / stageCount) * 100 : 0;
    const done = doneCount === stageCount && stageCount > 0;
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
    <div className="space-y-6">
      {visibleTracks.map((trackGroup) => {
        const trackEpochs = trackGroup.visibleEpochIds
          .map((id) => epochs.find((e) => e.id === id))
          .filter(Boolean) as typeof epochs;
        const ts = TRACK_STYLE[trackGroup.id] ?? DEFAULT_STYLE;
        const subGroups = TRACK_SUBGROUPS[trackGroup.id];

        return (
          <div key={trackGroup.id}>
            {/* Track label — bold, per-track accent */}
            <div className="mb-3">
              <div className="flex items-center gap-2.5 mb-0.5">
                <span className="text-lg leading-none">{ts.icon}</span>
                <span className="text-lg font-bold text-white tracking-tight">{t(trackGroup.labelKey)}</span>
                <div className="flex-1 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${ts.color}80, transparent)` }} />
              </div>
              <p className="text-[11px] text-gray-500 pl-8">{t(trackGroup.descKey)}</p>
            </div>

            {/* Epoch cards — grouped rows where a track defines sub-categories, else grid */}
            {subGroups ? (() => {
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
            })() : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
                {trackEpochs.map((epoch) => renderCard(epoch))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
