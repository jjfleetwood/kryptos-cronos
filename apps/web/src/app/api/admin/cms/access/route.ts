import { NextRequest, NextResponse } from "next/server";
import {
  getRestrictedEpochs,
  getEpochAllowlist,
  setEpochRestricted,
  grantEpochAccess,
  revokeEpochAccess,
} from "@/lib/cms";
import { epochs } from "@kryptos/core/stages";
import { requireAdmin } from "@/lib/admin-auth";

/** GET — returns all epoch access config */
export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const restricted = await getRestrictedEpochs();
  const allowlists: Record<string, string[]> = {};
  for (const epochId of restricted) {
    allowlists[epochId] = await getEpochAllowlist(epochId);
  }

  return NextResponse.json({
    restricted,
    allowlists,
    epochs: epochs.map((e) => ({ id: e.id, name: e.name, emoji: e.emoji })),
  });
}

type AccessBody =
  | { action: "restrict";   epochId: string }
  | { action: "unrestrict"; epochId: string }
  | { action: "grant";      epochId: string; username: string }
  | { action: "revoke";     epochId: string; username: string };

/** POST — toggle restriction or manage allowlist */
export async function POST(req: NextRequest) {
  if (!(await requireAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json()) as AccessBody;
  const { action, epochId } = body;

  if (!epochId) {
    return NextResponse.json({ error: "epochId required" }, { status: 400 });
  }
  // restrict/grant must target a real, registered epoch. unrestrict/revoke are
  // cleanup operations and must also work on orphaned ids (e.g. a deleted epoch
  // still lingering in the epoch_restricted set), so they skip the registry check.
  const isCleanup = action === "unrestrict" || action === "revoke";
  if (!isCleanup && !epochs.find((e) => e.id === epochId)) {
    return NextResponse.json({ error: "Invalid epochId" }, { status: 400 });
  }

  switch (action) {
    case "restrict":
      await setEpochRestricted(epochId, true);
      break;
    case "unrestrict":
      await setEpochRestricted(epochId, false);
      break;
    case "grant":
      if (!body.username?.trim()) return NextResponse.json({ error: "username required" }, { status: 400 });
      await grantEpochAccess(epochId, body.username.trim());
      break;
    case "revoke":
      if (!body.username?.trim()) return NextResponse.json({ error: "username required" }, { status: 400 });
      await revokeEpochAccess(epochId, body.username.trim());
      break;
    default:
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
