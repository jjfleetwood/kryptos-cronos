import { NextRequest, NextResponse } from "next/server";
import { getAuthedUsername } from "@/lib/api-auth";
import { ensurePlaced, getCohortStandings, getDivisionLadder, nextResetMs } from "@/lib/leagues";
import { PROMOTE_COUNT, RELEGATE_COUNT, COHORT_SIZE } from "@kryptos/core/leagues";

/** GET /api/leagues — the caller's division + cohort standings, the full division
 *  ladder (every league populated), and the reset time. */
export async function GET(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const placement = await ensurePlaced(username);
  const [standings, ladder] = await Promise.all([
    getCohortStandings(placement.cohort),
    getDivisionLadder(placement.week),
  ]);

  return NextResponse.json({
    you: username.toLowerCase(),
    division: placement.division,
    week: placement.week,
    resetAt: nextResetMs(),
    promoteCount: PROMOTE_COUNT,
    relegateCount: RELEGATE_COUNT,
    cohortSize: COHORT_SIZE,
    standings,
    ladder,
  });
}
