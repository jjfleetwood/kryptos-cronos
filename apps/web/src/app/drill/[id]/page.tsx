import { notFound } from "next/navigation";
import { stages } from "@kryptos/core/stages";
import { epochs } from "@kryptos/core/stages-meta";
import { resolveBank, NON_SECURITY_EPOCHS } from "@/app/stages/track-data";
import DecisionBank, { type BankSpot } from "@/components/DecisionBank";
import enMessages from "@/messages/en.json";

// A "Decision Bank" — aggregates every Play-the-Hand/Spot decision across an epoch,
// a track group, or a curated bank into one big shuffled practice drill. The id can
// be a curated bank id, a track group id, or a single epoch id.
export default async function DrillPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const resolved = resolveBank(id);
  let title: string;
  let subtitle: string | undefined;
  let epochIds: string[];

  if (resolved) {
    epochIds = resolved.epochIds;
    subtitle = resolved.subtitle;
    title = resolved.title
      ?? (resolved.labelKey ? ((enMessages as Record<string, string>)[resolved.labelKey] ?? id) : id);
    if (!subtitle && resolved.labelKey) subtitle = "Decision Bank — every decision in this track";
  } else {
    // Fall back to treating the id as a single epoch.
    const epoch = epochs.find((e) => e.id === id);
    if (!epoch) notFound();
    epochIds = [id];
    title = `${epoch.name} — Decision Bank`;
    subtitle = "Every Play-the-Hand/Spot decision in this epoch";
  }

  const epochIdSet = new Set(epochIds);
  const pool: BankSpot[] = [];
  for (const s of stages) {
    if (!epochIdSet.has(s.epochId)) continue;
    const spots = s.scenario?.spots;
    if (!spots?.length) continue;
    for (const spot of spots) {
      const { correctIndex: _ci, explanation: _ex, ...safe } = spot;
      pool.push({ ...safe, sourceStageId: s.id });
    }
  }

  if (pool.length === 0) notFound();

  const allExtended = epochIds.every((e) => NON_SECURITY_EPOCHS.has(e));
  const backHref = epochIds.length === 1 ? `/stages/epoch/${epochIds[0]}` : allExtended ? "/explore" : "/stages";

  return <DecisionBank pool={pool} title={title} subtitle={subtitle} backHref={backHref} />;
}
