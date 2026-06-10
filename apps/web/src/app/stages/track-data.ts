// Shared track/group data for the stage catalog. Consumed by both /stages
// (security tracks) and /explore (extended, non-security tracks) so the
// "two products, one engine" carve keeps one source of truth.
import metaEs from "@kryptos/core/translations/meta-es.json";
import metaFr from "@kryptos/core/translations/meta-fr.json";
import metaDe from "@kryptos/core/translations/meta-de.json";
import metaHi from "@kryptos/core/translations/meta-hi.json";
import metaPt from "@kryptos/core/translations/meta-pt.json";
import metaPl from "@kryptos/core/translations/meta-pl.json";

export type EpochMeta = { n: string; s: string; d: string };
type MetaFile = { stages: Record<string, unknown>; epochs: Record<string, EpochMeta> };
export const STAGE_META_MAPS: Record<string, MetaFile> = {
  es: metaEs as MetaFile,
  fr: metaFr as MetaFile,
  de: metaDe as MetaFile,
  hi: metaHi as MetaFile,
  pt: metaPt as MetaFile,
  pl: metaPl as MetaFile,
};

export type TrackGroup = { id: string; labelKey: string; descKey: string; epochIds: string[] };
export type VisibleTrack = TrackGroup & { visibleEpochIds: string[] };

// ── Security tracks (the public cyber product — shown on /stages) ──────────────
export const epochGroups: TrackGroup[] = [
  { id: "coreSecurity", labelKey: "stages.tracks.coreSecurity", descKey: "stages.tracks.coreSecurityDesc", epochIds: ["first-journey", "ancient", "sec-foundations", "computing-foundations", "silicon-fab"] },
  { id: "techAudit", labelKey: "stages.tracks.techAudit", descKey: "stages.tracks.techAuditDesc", epochIds: ["tech-audit-1", "tech-audit-2", "tech-audit-3", "tech-audit-4", "tech-audit-5", "tech-audit-6", "tech-audit-7"] },
  { id: "threatFrameworks", labelKey: "stages.tracks.threatFrameworks", descKey: "stages.tracks.threatFrameworksDesc", epochIds: ["mitre", "threat-frameworks"] },
  { id: "aiSecurity", labelKey: "stages.tracks.aiSecurity", descKey: "stages.tracks.aiSecurityDesc", epochIds: ["mitre-atlas", "owasp-llm", "emerging-tech", "ai-ml-foundations"] },
  { id: "quantumEra", labelKey: "stages.tracks.quantumEra", descKey: "stages.tracks.quantumEraDesc", epochIds: ["quantum-intro", "quantum-deep", "quantum-1", "quantum-2", "quantum-3", "quantum-4", "quantum-5"] },
  { id: "enterprise", labelKey: "stages.tracks.enterprise", descKey: "stages.tracks.enterpriseDesc", epochIds: ["cisco-core", "cisco-enterprise", "cisco-secops", "cisco-advanced", "umbrella", "physics-of-hacking"] },
  { id: "spaceRace", labelKey: "stages.tracks.spaceRace", descKey: "stages.tracks.spaceRaceDesc", epochIds: ["space-race", "space-race-2"] },
  { id: "vehicleSec", labelKey: "stages.tracks.vehicleSec", descKey: "stages.tracks.vehicleSecDesc", epochIds: ["vehicle-sec", "vehicle-sec-2"] },
  { id: "robotics", labelKey: "stages.tracks.robotics", descKey: "stages.tracks.roboticsDesc", epochIds: ["robot-sec", "robot-sec-2"] },
  { id: "operationalTech", labelKey: "stages.tracks.operationalTech", descKey: "stages.tracks.operationalTechDesc", epochIds: ["ot-sec"] },
];

// ── Extended curriculum (the diverse engine — shown on the low-prominence /explore) ──
export const extendedGroups: TrackGroup[] = [
  { id: "crafts", labelKey: "stages.tracks.crafts", descKey: "stages.tracks.craftsDesc", epochIds: ["tapestry", "nails", "hair-color", "hair-styling"] },
  { id: "driving", labelKey: "stages.tracks.driving", descKey: "stages.tracks.drivingDesc", epochIds: ["driving-1", "driving-2", "driving-3"] },
  { id: "sports", labelKey: "stages.tracks.sports", descKey: "stages.tracks.sportsDesc", epochIds: ["baseball-1", "baseball-2", "baseball-3", "baseball-4", "baseball-5", "baseball-6", "baseball-7", "baseball-8", "baseball-9", "baseball-10", "baseball-11", "baseball-12", "baseball-13", "baseball-14", "baseball-15"] },
  { id: "travel", labelKey: "stages.tracks.travel", descKey: "stages.tracks.travelDesc", epochIds: ["paris-july", "milan-july", "french-basics", "italian-basics"] },
  { id: "debate", labelKey: "stages.tracks.debate", descKey: "stages.tracks.debateDesc", epochIds: ["debate-1", "debate-2", "debate-3", "debate-4", "debate-5", "debate-6", "debate-7", "debate-8"] },
  { id: "flagFootball", labelKey: "stages.tracks.flagFootball", descKey: "stages.tracks.flagFootballDesc", epochIds: ["flag-football-1", "flag-football-2", "flag-football-3"] },
];

// ── Per-track visual style ────────────────────────────────────────────────────
export const TRACK_STYLE: Record<string, { icon: string; color: string }> = {
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
export const DEFAULT_STYLE = { icon: "📦", color: "#9ca3af" };

// Tracks whose epochs read better split into labeled sub-category rows.
export type SubGroup = { label: string; ids: string[] };
export const TRACK_SUBLABEL: Record<string, { icon: string; text: string }> = {
  sports: { icon: "⚾", text: "Baseball" },
};
export const TRACK_SUBGROUPS: Record<string, SubGroup[]> = {
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

// ── Group gating (mirrors lib/access.ts) ──────────────────────────────────────
export const SECURITY_EPOCHS = new Set<string>(epochGroups.flatMap((g) => g.epochIds));
export const NON_SECURITY_EPOCHS = new Set<string>(extendedGroups.flatMap((g) => g.epochIds));
const ALL_EPOCHS = new Set<string>([...SECURITY_EPOCHS, ...NON_SECURITY_EPOCHS]);
const GROUP_EPOCHS: Record<string, Set<string>> = {
  career: SECURITY_EPOCHS, elementary: SECURITY_EPOCHS, "junior-hs": SECURITY_EPOCHS,
  "high-school": SECURITY_EPOCHS, university: SECURITY_EPOCHS, curious: ALL_EPOCHS,
};

// While true, every track is visible regardless of group. At launch, flip to
// false to restore group-based visibility (mirrors OPEN_ACCESS in lib/access.ts).
export const OPEN_ACCESS = true;

/** Resolve which of `tracks` (and their epochs) are visible for the active groups. */
export function computeVisibleTracks(tracks: TrackGroup[], groups: string[]): VisibleTrack[] {
  const allowed = OPEN_ACCESS
    ? new Set<string>(tracks.flatMap((g) => g.epochIds))
    : groups.reduce((acc, g) => {
        const set = GROUP_EPOCHS[g];
        if (set) for (const id of set) acc.add(id);
        return acc;
      }, new Set<string>());
  return tracks
    .map((track) => ({ ...track, visibleEpochIds: track.epochIds.filter((id) => allowed.has(id)) }))
    .filter((track) => track.visibleEpochIds.length > 0);
}
