import Link from "next/link";
import { notFound } from "next/navigation";
import { getAuditEpoch, getAuditStage } from "@kryptos/core/audit-registry";
import type { StageConfig } from "@kryptos/core/types";
import StageInfo from "@kryptos/ui/StageInfo";

// Deep per-module page for the owner-only audit library. Reaching here means the
// edge gate (src/proxy.ts) already passed — no per-page auth. Renders the audit
// card (objective/approach/artifacts/system/owner) + scores + runnable code, then
// the full briefing via the shared @kryptos/ui StageInfo (reference mode: no CTA,
// no gameplay — that engine lives in apps/web).
export default async function AuditModulePage({
  params,
}: {
  params: Promise<{ domain: string; module: string }>;
}) {
  const { domain, module: moduleId } = await params;

  const epoch = getAuditEpoch(domain);
  const stage = getAuditStage(moduleId);
  if (!epoch || !stage || stage.epochId !== domain) return notFound();

  const meta = stage.auditMeta;
  const downloads = stage.info.downloads ?? [];

  // Strip secrets before handing the stage to the client renderer.
  let safeStage: StageConfig = stage;
  if (safeStage.ctf) {
    safeStage = { ...safeStage, ctf: { ...safeStage.ctf, flag: undefined, extraCommands: undefined } };
  }
  if (safeStage.quiz) {
    safeStage = {
      ...safeStage,
      quiz: { questions: safeStage.quiz.questions.map(({ correctIndex: _ci, explanation: _ex, ...q }) => q) },
    };
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #0d1117 0%, #160f24 50%, #1a1a2e 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <Link href="/" className="text-violet-300 hover:text-violet-200 text-sm transition-colors">
          ← Library
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-2.5 py-1 font-semibold text-violet-200">
            {epoch.emoji} {epoch.name}
          </span>
          <span className="rounded-full bg-white/5 px-2.5 py-1 font-medium text-gray-300">
            Module {String(stage.order).padStart(2, "0")}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-white">{stage.title}</h1>
        <p className="mt-1 text-violet-200/80">{stage.subtitle}</p>

        {/* Scores + the scoring-rationale box */}
        <div className="mt-7 grid gap-4 md:grid-cols-[auto_1fr]">
          <div className="flex items-center gap-3">
            <ScorePill label="Ease" value={stage.easeScore} accent="emerald" />
            <ScorePill label="Value" value={stage.valueScore} accent="amber" />
            {stage.rank != null && <ScorePill label="Rank" value={stage.rank} accent="violet" prefix="#" />}
          </div>
          {meta && (
            <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-[11px] leading-relaxed text-gray-400">
              <p className="mb-1 font-semibold uppercase tracking-wide text-gray-500">What drives the scores</p>
              <p>
                <span className="font-semibold text-emerald-300">Ease.</span> {meta.scoring.ease}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-amber-300">Value.</span> {meta.scoring.value}
              </p>
            </div>
          )}
        </div>

        {/* The audit card: objective / approach / artifacts / system / data owner */}
        {meta && (
          <div className="mt-6 rounded-2xl border border-violet-500/20 bg-white/[0.03] p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-300">The audit test</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              <Field label="Objective" body={meta.objective} />
              <Field label="Approach" body={meta.approach} />
              <BulletField label="Artifacts (evidence)" items={meta.artifacts} />
              <div className="grid gap-4 sm:grid-cols-2">
                <BulletField label="System (source of evidence)" items={meta.system} />
                <BulletField label="Data owner" items={meta.dataOwner} />
              </div>
            </div>
          </div>
        )}

        {/* Drill-down: the runnable example code */}
        {downloads.length > 0 && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-300">Example code · drill-down library</h2>
            <p className="mt-1.5 text-xs text-gray-500">Real, runnable read-only MCP tooling for this sub-process.</p>
            <div className="mt-4 space-y-2">
              {downloads.map((d) => (
                <a
                  key={d.url}
                  href={d.url}
                  download
                  className="group flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3 transition-colors hover:border-violet-400/50 hover:bg-violet-500/[0.06]"
                >
                  <span className="text-xl">🐍</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-sm text-violet-100">{d.name}</span>
                    <span className="block truncate text-xs text-gray-400">{d.description}</span>
                  </span>
                  <span className="text-xs font-semibold text-violet-300 group-hover:translate-x-0.5 transition-transform">
                    Download ↓
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-300/70">
          ↓ Briefing · workflow diagram ↓
        </div>
      </div>

      {/* Full briefing + workflow diagram (shared renderer; reference mode, no CTA). */}
      <StageInfo stage={safeStage} backHref="/" hideCover />
    </div>
  );
}

function ScorePill({
  label,
  value,
  accent,
  prefix = "",
}: {
  label: string;
  value?: number;
  accent: "emerald" | "amber" | "violet";
  prefix?: string;
}) {
  const map = {
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-200",
  } as const;
  return (
    <div className={`rounded-xl border px-4 py-2 text-center ${map[accent]}`}>
      <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70">{label}</div>
      <div className="text-xl font-black">
        {prefix}
        {value ?? "—"}
        {!prefix && value != null && <span className="text-xs font-semibold opacity-60"> /10</span>}
      </div>
    </div>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-gray-300">{body}</p>
    </div>
  );
}

function BulletField({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-gray-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
