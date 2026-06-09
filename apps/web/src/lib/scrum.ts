import "server-only";
import { redis } from "@/lib/redis";
import type { ScrumItem, ScrumStatus, ScrumType, ScrumPriority, ScrumSource } from "@/lib/scrum-types";

const ITEMS_KEY = "scrum:items";        // hash: id -> JSON(ScrumItem)
const INGESTED_KEY = "scrum:ingested";  // set of source refs already pulled in
const PLAN_ID = "seed-agent-dev-plan";  // fixed id for the standing plan card

function rid(): string {
  return `it_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function parse(v: unknown): ScrumItem | null {
  try {
    const obj = typeof v === "string" ? JSON.parse(v) : v;
    return obj && typeof obj === "object" ? (obj as ScrumItem) : null;
  } catch {
    return null;
  }
}

export async function listItems(): Promise<ScrumItem[]> {
  const all = (await redis.hgetall(ITEMS_KEY)) ?? {};
  const items = Object.values(all).map(parse).filter(Boolean) as ScrumItem[];
  // pinned first, then manual order asc, then newest first
  return items.sort(
    (a, b) =>
      Number(b.pinned) - Number(a.pinned) ||
      a.order - b.order ||
      b.createdAt - a.createdAt,
  );
}

export async function putItem(item: ScrumItem): Promise<void> {
  await redis.hset(ITEMS_KEY, { [item.id]: JSON.stringify(item) });
}

export async function getItem(id: string): Promise<ScrumItem | null> {
  const v = await redis.hget(ITEMS_KEY, id);
  return v ? parse(v) : null;
}

export async function deleteItem(id: string): Promise<void> {
  await redis.hdel(ITEMS_KEY, id);
}

export function newItem(p: Partial<ScrumItem> & { title: string }): ScrumItem {
  const now = Date.now();
  return {
    id: p.id ?? rid(),
    title: p.title,
    description: p.description ?? "",
    type: (p.type as ScrumType) ?? "task",
    status: (p.status as ScrumStatus) ?? "triage",
    priority: (p.priority as ScrumPriority) ?? "p2",
    initiator: p.initiator ?? "admin",
    source: (p.source as ScrumSource) ?? "manual",
    sourceRef: p.sourceRef,
    order: p.order ?? -now, // newest-first within a column by default
    votes: p.votes ?? 0,
    pinned: p.pinned ?? false,
    notes: p.notes ?? [],
    createdAt: p.createdAt ?? now,
    updatedAt: now,
  };
}

export async function createItem(p: Partial<ScrumItem> & { title: string }): Promise<ScrumItem> {
  const item = newItem(p);
  await putItem(item);
  return item;
}

/** Idempotently create the standing "Agent-Based Development plan" card, pinned to the top. */
export async function ensureSeedPlan(): Promise<void> {
  if (await redis.hexists(ITEMS_KEY, PLAN_ID)) return;
  await putItem(
    newItem({
      id: PLAN_ID,
      title: "📋 Agent-Based Development — plan for review & approval",
      description:
        "Proposed plan for autonomous, agent-driven development that can run without you: periodic deep code review + refactoring, content review, format-deviation normalization, and a deep quiz/CTF testing agent — all reporting back here in the Development area.\n\nFull plan: open the Docs panel → AGENT_DEV_PLAN, or docs/AGENT_DEV_PLAN.md.\n\nDecision needed: approve to go forward, request changes, or defer. Move me to Backlog to approve, or add notes with feedback.",
      type: "plan",
      status: "review",
      priority: "p1",
      initiator: "agent:claude",
      source: "agent",
      sourceRef: "AGENT_DEV_PLAN.md",
      pinned: true,
      order: -8.64e15, // always sorts to the very top
    }),
  );
}

/** Pull any new feedback + survey submissions in as Triage cards (deduped). */
export async function ingestSources(): Promise<number> {
  let added = 0;

  // ── Feedback (persisted by /api/feedback into feedback:index) ────────────────
  const fbKeys = (await redis.zrange<string[]>("feedback:index", 0, 199, { rev: true })) ?? [];
  for (const key of fbKeys) {
    const ref = `feedback:${key}`;
    if (await redis.sismember(INGESTED_KEY, ref)) continue;
    const fb = (await redis.hgetall<Record<string, string>>(key)) ?? {};
    if (!fb.message) { await redis.sadd(INGESTED_KEY, ref); continue; }
    const user = fb.username && fb.username !== "unknown" ? fb.username : "guest";
    await createItem({
      title: fb.message.slice(0, 90) + (fb.message.length > 90 ? "…" : ""),
      description: `${fb.message}\n\n— via in-app feedback${fb.page ? ` on "${fb.page}"` : ""}`,
      type: "task",
      status: "triage",
      priority: "p2",
      initiator: `user:${user}`,
      source: "feedback",
      sourceRef: fb.page || key,
      createdAt: Number(fb.ts) || Date.now(),
    });
    await redis.sadd(INGESTED_KEY, ref);
    added++;
  }

  // ── Survey responses (survey:index) ──────────────────────────────────────────
  const svKeys = (await redis.zrange<string[]>("survey:index", 0, 199, { rev: true })) ?? [];
  for (const key of svKeys) {
    const ref = `survey:${key}`;
    if (await redis.sismember(INGESTED_KEY, ref)) continue;
    const sv = (await redis.hgetall<Record<string, string>>(key)) ?? {};
    const user = sv.username && sv.username !== "anonymous" ? sv.username : "anonymous";
    const answers = Object.entries(sv)
      .filter(([k]) => k !== "username" && k !== "ts")
      .map(([k, v]) => `• ${k}: ${v}`)
      .join("\n");
    await createItem({
      title: `Survey response — ${user}`,
      description: `${answers || "(no answers captured)"}\n\n— via /survey`,
      type: "task",
      status: "triage",
      priority: "p3",
      initiator: "survey",
      source: "survey",
      sourceRef: key,
      createdAt: Number(sv.ts) || Date.now(),
    });
    await redis.sadd(INGESTED_KEY, ref);
    added++;
  }

  return added;
}
