import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView, Platform, Pressable, ScrollView,
  StyleSheet, Text, TextInput, View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { CtfConfig, StageConfig } from "@kryptos/core/types";
import { getExtraCommands } from "@kryptos/core/stage-commands";
import { api } from "@/lib/api";
import AriaChat from "./AriaChat";

type LineType = "cmd" | "out" | "err" | "ok" | "warn" | "sys";
type Line = { type: LineType; text: string };

const LINE_COLOR: Record<LineType, string> = {
  cmd: "#e5e7eb", out: "rgba(134,239,172,0.8)", err: "#f87171",
  ok: "#4ade80", warn: "#facc15", sys: "rgba(34,211,238,0.6)",
};

function resolvePath(cwd: string, target: string): string {
  if (target.startsWith("/")) return target;
  return (cwd === "/" ? "" : cwd) + "/" + target;
}
function parentDir(path: string): string {
  const parts = path.split("/").filter(Boolean);
  parts.pop();
  return parts.length === 0 ? "/" : "/" + parts.join("/");
}
function formatTimer(ms: number): string {
  const total = Math.floor(ms / 1000);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function makeInitialLines(stage: StageConfig, ctf: CtfConfig, minFrag: number): Line[] {
  const lines: Line[] = [
    { type: "sys", text: "╔══════════════════════════════════════╗" },
    { type: "sys", text: "║   Kryptós CronOS Terminal  v1.0      ║" },
    { type: "sys", text: `║   Stage ${String(stage.order).padEnd(2)}                          ║` },
    { type: "sys", text: "╚══════════════════════════════════════╝" },
    { type: "out", text: "" },
    { type: "out", text: ctf.scenario },
    { type: "out", text: "" },
    { type: "out", text: `Hint: ${ctf.hint}` },
    { type: "out", text: "" },
  ];
  if (ctf.fragments?.length) {
    lines.push({
      type: "out",
      text: minFrag < ctf.fragments.length
        ? `Objective: recover any ${minFrag} of ${ctf.fragments.length} flag fragments, then 'assemble'.`
        : `Objective: recover all ${ctf.fragments.length} flag fragments, then 'assemble'.`,
    });
    lines.push({ type: "out", text: "" });
  }
  lines.push({ type: "out", text: "Type 'help' for available commands." }, { type: "out", text: "" });
  return lines;
}

export default function CtfTerminal({ stage, onClose }: { stage: StageConfig; onClose: () => void }) {
  const insets = useSafeAreaInsets();
  const ctf = stage.ctf!;
  const hints = ctf.hints ?? [ctf.hint];
  const minFragments = ctf.minFragments ?? ctf.fragments?.length ?? 0;
  const extraCommands = getExtraCommands(stage.id);

  const [lines, setLines] = useState<Line[]>(() => makeInitialLines(stage, ctf, minFragments));
  const [cwd, setCwd] = useState("/");
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [collected, setCollected] = useState<Set<string>>(new Set());
  const [hasPivoted, setHasPivoted] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [ariaOpen, setAriaOpen] = useState(false);
  const [unknownCount, setUnknownCount] = useState(0);
  const [solvedCoins, setSolvedCoins] = useState<number | null>(null);

  const startedAt = useRef(0);
  const [elapsed, setElapsed] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (solved) return;
    if (startedAt.current === 0) startedAt.current = Date.now();
    const t = setInterval(() => setElapsed(Date.now() - startedAt.current), 1000);
    return () => clearInterval(t);
  }, [solved]);

  function push(...newLines: Line[]) {
    setLines((prev) => [...prev, ...newLines]);
  }

  function checkFragment(key: string) {
    if (!ctf.fragments?.length) return;
    const frag = ctf.fragments.find((f) => f.trigger === key);
    if (!frag || collected.has(key)) return;
    const nextCount = collected.size + 1;
    setCollected((prev) => new Set([...prev, key]));
    push(
      { type: "warn", text: `🔑 Fragment ${nextCount}/${ctf.fragments.length} recovered — [ ${frag.value} ]` },
      { type: "warn", text: `   ${frag.label}` },
      { type: "out", text: "" },
    );
  }

  function revealHint() {
    if (hintsRevealed >= hints.length) return;
    const n = hintsRevealed + 1;
    push({ type: "warn", text: `💡 Hint ${n}/${hints.length}: ${hints[hintsRevealed]}` }, { type: "out", text: "" });
    setHintsRevealed(n);
  }

  async function runCommand(raw: string) {
    const trimmed = raw.trim();
    const prompt = ctf.attackerMachine
      ? (hasPivoted && ctf.targetMachine ? `root@${ctf.targetMachine.hostname}:~#` : `${ctf.attackerMachine.hostname ?? "kali"}@kali:~$`)
      : `${cwd}$`;
    if (!trimmed) { push({ type: "cmd", text: prompt }); return; }
    push({ type: "cmd", text: `${prompt} ${trimmed}` });

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd === "help") {
      const extra = extraCommands ? Object.keys(extraCommands) : [];
      push(
        { type: "out", text: "Available commands:" },
        { type: "out", text: "  ls [-a] [path]   list directory contents" },
        { type: "out", text: "  cat <file>       display file contents" },
        { type: "out", text: "  cd <dir>         change directory" },
        { type: "out", text: "  pwd              print working directory" },
        { type: "out", text: "  clear            clear the terminal" },
        { type: "out", text: "  submit <flag>    submit a captured flag" },
        ...(ctf.fragments?.length ? [{ type: "out" as LineType, text: "  assemble         show collected fragments" }] : []),
        ...extra.map((c) => ({ type: "out" as LineType, text: `  ${c.padEnd(17)}stage-specific` })),
        { type: "out", text: "" },
      );
      return;
    }

    if (cmd === "assemble") {
      if (!ctf.fragments?.length) { push({ type: "err", text: "Nothing to assemble." }, { type: "out", text: "" }); return; }
      push({ type: "out", text: "Fragment status:" });
      for (const f of ctf.fragments) {
        const found = collected.has(f.trigger);
        push({ type: "out", text: `  ${found ? "✓" : "✗"} ${f.label}: ${found ? f.value : "not recovered"}` });
      }
      push({ type: "out", text: "" });
      if (collected.size >= minFragments) {
        const assembled = ctf.fragments.filter((f) => collected.has(f.trigger)).slice(0, minFragments).map((f) => f.value).join("");
        push(
          { type: "ok", text: `All fragments assembled:` },
          { type: "ok", text: `  ${assembled}` },
          { type: "out", text: "" },
          { type: "out", text: `Run: submit ${assembled}` },
          { type: "out", text: "" },
        );
      } else {
        push({ type: "warn", text: `Have ${collected.size}, need ${minFragments}. Keep exploring.` }, { type: "out", text: "" });
      }
      return;
    }

    if (cmd === "pwd") { push({ type: "out", text: cwd }, { type: "out", text: "" }); return; }
    if (cmd === "clear") { setLines([]); return; }

    if (cmd === "cd") {
      const target = args[0];
      if (!target || target === "~") setCwd("/");
      else if (target === "..") setCwd(parentDir(cwd));
      else {
        const resolved = resolvePath(cwd, target);
        if (ctf.dirs[resolved]) setCwd(resolved);
        else push({ type: "err", text: `cd: ${target}: No such directory` });
      }
      push({ type: "out", text: "" });
      return;
    }

    if (cmd === "ls") {
      const showHidden = args.some((a) => a.startsWith("-") && a.includes("a"));
      const pathArg = args.find((a) => !a.startsWith("-"));
      const targetDir = pathArg ? resolvePath(cwd, pathArg) : cwd;
      const entries = ctf.dirs[targetDir];
      if (!entries) { push({ type: "err", text: `ls: cannot access '${pathArg || cwd}'` }, { type: "out", text: "" }); return; }
      const visible = entries.filter((e) => showHidden || !e.hidden);
      push({ type: "out", text: visible.length === 0 ? "(empty)" : visible.map((e) => (e.isDir ? `${e.name}/` : e.name)).join("   ") }, { type: "out", text: "" });
      return;
    }

    if (cmd === "cat") {
      const pathArg = args[0];
      if (!pathArg) { push({ type: "err", text: "cat: missing file operand" }, { type: "out", text: "" }); return; }
      const resolved = resolvePath(cwd, pathArg);
      const content = ctf.files[resolved];
      if (content === undefined) {
        if (ctf.dirs[resolved]) {
          push({ type: "err", text: `cat: ${pathArg}: Is a directory` }, { type: "out", text: "" });
          return;
        }
        // Not a real file. Defer to a stage's custom `cat` (virtual files
        // produced by other commands) before reporting an error.
        if (extraCommands && "cat" in extraCommands) {
          const result = extraCommands.cat(args);
          push(...result.lines.map((text) => ({ type: "out" as LineType, text })));
          checkFragment(trimmed);
          if (result.solved) {
            await api.awardStage(stage.id, stage.badge.id).catch(() => {});
            setSolved(true);
            setSolvedCoins(stage.xp);
          }
          return;
        }
        push({ type: "err", text: `cat: ${pathArg}: No such file` }, { type: "out", text: "" });
        return;
      }
      push(...content.split("\n").map((text) => ({ type: "out" as LineType, text })), { type: "out", text: "" });
      checkFragment(resolved);
      return;
    }

    if (cmd === "submit") {
      const flag = args.join(" ").trim();
      if (!flag) { push({ type: "err", text: "Usage: submit <flag>" }, { type: "out", text: "" }); return; }
      setSubmitting(true);
      push({ type: "sys", text: "Verifying flag…" });
      const timeTakenMs = Date.now() - startedAt.current;
      try {
        const { correct, timePenaltyXp = 0, bonusXp = 0 } = await api.checkFlag({ stageId: stage.id, flag, timeTakenMs });
        if (correct) {
          const coins = Math.max(0, stage.xp - timePenaltyXp + bonusXp);
          push(
            { type: "ok", text: `✓ Flag accepted: ${flag}` },
            { type: "ok", text: `  ${formatTimer(timeTakenMs)} · +${coins} 🪙` },
            ...(bonusXp > 0 ? [{ type: "ok" as LineType, text: `  ⚡ Clean solve bonus: +${bonusXp} 🪙` }] : []),
            { type: "out", text: "" },
          );
          setSolved(true);
          setSolvedCoins(coins);
        } else {
          push({ type: "err", text: "✗ Incorrect flag. Keep digging." }, { type: "out", text: "" });
        }
      } catch {
        push({ type: "err", text: "Network error — check your connection." }, { type: "out", text: "" });
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (extraCommands && cmd in extraCommands) {
      const result = extraCommands[cmd](args);
      push(...result.lines.map((text) => ({ type: "out" as LineType, text })));
      checkFragment(trimmed);
      if (!hasPivoted && ctf.pivotTrigger && cmd === ctf.pivotTrigger && ctf.targetMachine) {
        setHasPivoted(true);
        push(
          { type: "sys", text: "" },
          { type: "sys", text: `[*] Session established — ${ctf.targetMachine.ip} (${ctf.targetMachine.hostname})` },
          { type: "warn", text: `[!] Shell active — prompt now: root@${ctf.targetMachine.hostname}:~#` },
          { type: "sys", text: "" },
        );
      }
      if (result.solved) {
        // Server-authoritative award still requires a flag submit; this marks the
        // local terminal solved for stages whose extra command is the win condition.
        await api.awardStage(stage.id, stage.badge.id).catch(() => {});
        setSolved(true);
        setSolvedCoins(stage.xp);
      }
      return;
    }

    const next = unknownCount + 1;
    setUnknownCount(next);
    push({ type: "err", text: `${cmd}: command not found` });
    push(next === 3 ? { type: "sys", text: "Stuck? Tap 🤖 ARIA for a hint." } : { type: "out", text: "" });
  }

  function handleSend() {
    if (submitting) return;
    runCommand(input);
    setInput("");
  }

  const timerColor = elapsed >= 600000 ? "#fb923c" : elapsed >= 300000 ? "#facc15" : "#4ade80";

  return (
    <KeyboardAvoidingView style={s.root} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <AriaChat stage={stage} visible={ariaOpen} onClose={() => setAriaOpen(false)} />

      {/* Gradient hero header */}
      <LinearGradient
        colors={["#0e2230", "#141a3a", "#1a1430"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[s.hero, { paddingTop: insets.top + 10 }]}
      >
        <View style={[s.glow, s.glowCyan]} />
        <View style={[s.glow, s.glowViolet]} />

        <View style={s.heroTopRow}>
          <Pressable onPress={onClose} hitSlop={10}><Text style={s.back}>‹ Briefing</Text></Pressable>
          {!solved && <Text style={[s.timer, { color: timerColor }]}>⏱ {formatTimer(elapsed)}</Text>}
        </View>

        <Text style={s.heroTitle} numberOfLines={1}>{stage.title}</Text>
        <Text style={s.heroSub}>Stage {stage.order} · Capture the Flag</Text>

        <View style={s.chipRow}>
          {ctf.fragments?.length ? (
            <View style={[s.chip, s.chipFrag]}>
              <Text style={s.chipFragText}>🔑 {collected.size}/{ctf.fragments.length}</Text>
            </View>
          ) : null}
          <Pressable
            style={[s.chip, s.chipHint, hintsRevealed >= hints.length && { opacity: 0.4 }]}
            onPress={revealHint}
            disabled={hintsRevealed >= hints.length}
          >
            <Text style={s.chipHintText}>💡 Hint</Text>
          </Pressable>
          <Pressable style={[s.chip, s.chipAria]} onPress={() => setAriaOpen(true)}>
            <Text style={s.chipAriaText}>🤖 ARIA</Text>
          </Pressable>
        </View>
      </LinearGradient>

      {/* Output */}
      <ScrollView
        ref={scrollRef}
        style={s.output}
        contentContainerStyle={{ padding: 12 }}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {lines.map((line, i) => (
          <Text key={i} style={[s.line, { color: LINE_COLOR[line.type] }]}>
            {line.type === "cmd" ? "❯ " : ""}{line.text || " "}
          </Text>
        ))}
      </ScrollView>

      {/* Input / status */}
      {!solved ? (
        <View style={s.inputBar}>
          <Text style={s.promptLabel}>{cwd === "/" ? "/" : "~/" + cwd.split("/").pop()}$</Text>
          <TextInput
            style={s.input}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSend}
            placeholder="type a command…"
            placeholderTextColor="#5b6577"
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            returnKeyType="send"
            editable={!submitting}
          />
          <Pressable style={s.sendBtn} onPress={handleSend} disabled={submitting}>
            <Text style={s.sendText}>↵</Text>
          </Pressable>
        </View>
      ) : (
        <View style={s.doneBar}>
          <Text style={s.doneText}>✓ Flag captured{solvedCoins !== null ? ` · +${solvedCoins} 🪙` : ""}</Text>
          <Pressable style={s.doneBtn} onPress={onClose}><Text style={s.doneBtnText}>Done →</Text></Pressable>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0a0e16" },

  hero: { paddingHorizontal: 16, paddingBottom: 14, overflow: "hidden", borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  glow: { position: "absolute", borderRadius: 999 },
  glowCyan: { top: -90, right: -50, width: 220, height: 220, backgroundColor: "rgba(34,211,238,0.10)" },
  glowViolet: { bottom: -100, left: -40, width: 200, height: 200, backgroundColor: "rgba(167,139,250,0.10)" },
  heroTopRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  back: { color: "#9ca3af", fontSize: 14 },
  timer: { fontFamily: "monospace", fontSize: 13 },
  heroTitle: { color: "#fff", fontSize: 20, fontWeight: "900" },
  heroSub: { color: "#9ca3af", fontSize: 12, marginTop: 2 },
  chipRow: { flexDirection: "row", gap: 8, marginTop: 12, flexWrap: "wrap" },
  chip: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  chipFrag: { borderColor: "rgba(250,204,21,0.4)", backgroundColor: "rgba(250,204,21,0.1)" },
  chipFragText: { color: "#facc15", fontFamily: "monospace", fontSize: 12, fontWeight: "700" },
  chipHint: { borderColor: "rgba(245,158,11,0.4)", backgroundColor: "rgba(245,158,11,0.08)" },
  chipHintText: { color: "#fbbf24", fontSize: 12, fontWeight: "700" },
  chipAria: { borderColor: "rgba(74,222,128,0.4)", backgroundColor: "rgba(74,222,128,0.08)" },
  chipAriaText: { color: "#4ade80", fontSize: 12, fontWeight: "700" },
  output: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)" },
  line: { fontFamily: "monospace", fontSize: 12.5, lineHeight: 18 },
  inputBar: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 12, paddingVertical: 10, borderTopColor: "#1f2733", borderTopWidth: 1 },
  promptLabel: { color: "#22d3ee", fontFamily: "monospace", fontSize: 13 },
  input: { flex: 1, color: "#86efac", fontFamily: "monospace", fontSize: 13, padding: 0 },
  sendBtn: { backgroundColor: "rgba(34,211,238,0.2)", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 6 },
  sendText: { color: "#22d3ee", fontWeight: "800", fontSize: 14 },
  doneBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 14, borderTopColor: "rgba(34,197,94,0.3)", borderTopWidth: 1, backgroundColor: "rgba(34,197,94,0.06)" },
  doneText: { color: "#4ade80", fontWeight: "700", fontSize: 14 },
  doneBtn: { backgroundColor: "#22c55e", borderRadius: 10, paddingHorizontal: 16, paddingVertical: 9 },
  doneBtnText: { color: "#000", fontWeight: "800" },
});
