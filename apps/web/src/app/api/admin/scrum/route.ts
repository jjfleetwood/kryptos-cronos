import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { logAdminAction } from "@/lib/audit";
import {
  listItems, getItem, putItem, createItem, deleteItem, ensureSeedPlan, ingestSources,
} from "@/lib/scrum";
import type { ScrumItem } from "@/lib/scrum-types";

const TYPES = ["bug", "enhancement", "task", "content", "test", "plan", "chore"];
const STATUSES = ["triage", "backlog", "todo", "in-progress", "review", "done", "archived"];
const PRIORITIES = ["p0", "p1", "p2", "p3"];

// The Development board is restricted to the primary admin account only — not just
// any admin. requireAdmin already proves a valid, non-revoked admin token; this
// narrows it to the board owner (jjb). The board-ops / auto-agent scripts forge a
// token for this same account, so they continue to pass.
const BOARD_OWNER = (process.env.ADMIN_USERNAME || "jjb").toLowerCase();

// GET — seed the standing plan card, ingest new feedback/survey, return the board.
export async function GET(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (admin !== BOARD_OWNER) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await ensureSeedPlan();
  let ingested = 0;
  try { ingested = await ingestSources(); } catch { /* ingestion is best-effort */ }
  const items = await listItems();
  return NextResponse.json({ items, ingested });
}

// POST — create a new item manually.
export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (admin !== BOARD_OWNER) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const b = (await req.json()) as Partial<ScrumItem>;
  if (!b.title || typeof b.title !== "string" || !b.title.trim()) {
    return NextResponse.json({ error: "Title required" }, { status: 400 });
  }
  const item = await createItem({
    title: b.title.trim().slice(0, 200),
    description: typeof b.description === "string" ? b.description.slice(0, 8000) : "",
    type: TYPES.includes(b.type as string) ? b.type : "task",
    status: STATUSES.includes(b.status as string) ? b.status : "backlog",
    priority: PRIORITIES.includes(b.priority as string) ? b.priority : "p2",
    initiator: admin,
    source: "manual",
  });
  await logAdminAction(admin, "scrum-create", item.id);
  return NextResponse.json({ item });
}

// PATCH — update an item (status/priority/order/type/title/description/pinned/votes) or add a note.
export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (admin !== BOARD_OWNER) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const b = (await req.json()) as Partial<ScrumItem> & { id?: string; note?: string };
  if (!b.id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const item = await getItem(b.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (typeof b.title === "string" && b.title.trim()) item.title = b.title.trim().slice(0, 200);
  if (typeof b.description === "string") item.description = b.description.slice(0, 8000);
  if (TYPES.includes(b.type as string)) item.type = b.type!;
  if (STATUSES.includes(b.status as string)) item.status = b.status!;
  if (PRIORITIES.includes(b.priority as string)) item.priority = b.priority!;
  if (typeof b.order === "number") item.order = b.order;
  if (typeof b.votes === "number") item.votes = b.votes;
  if (typeof b.pinned === "boolean") item.pinned = b.pinned;
  if (typeof b.note === "string" && b.note.trim()) {
    item.notes = [...(item.notes ?? []), { ts: Date.now(), author: admin, text: b.note.trim().slice(0, 2000) }];
  }
  item.updatedAt = Date.now();
  await putItem(item);
  return NextResponse.json({ item });
}

// DELETE — remove an item (?id=).
export async function DELETE(req: NextRequest) {
  const admin = await requireAdmin(req);
  if (admin !== BOARD_OWNER) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  await deleteItem(id);
  await logAdminAction(admin, "scrum-delete", id);
  return NextResponse.json({ ok: true });
}
