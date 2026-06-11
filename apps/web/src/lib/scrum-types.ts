// Shared scrum-board types (pure — safe to import in client components).

export type ScrumStatus = "triage" | "backlog" | "todo" | "planned" | "in-progress" | "review" | "done" | "archived";
export type ScrumType = "bug" | "enhancement" | "task" | "content" | "test" | "plan" | "chore";
export type ScrumPriority = "p0" | "p1" | "p2" | "p3";
export type ScrumSource = "manual" | "feedback" | "survey" | "agent";

export type ScrumNote = { ts: number; author: string; text: string };

export type ScrumItem = {
  id: string;
  title: string;
  description: string;
  type: ScrumType;
  status: ScrumStatus;
  priority: ScrumPriority;
  initiator: string;        // "admin" | "user:<name>" | "survey" | "agent:<name>"
  source: ScrumSource;
  sourceRef?: string;       // page / survey key / feedback id — provenance
  order: number;            // ordering within a column (lower = higher)
  votes: number;
  pinned: boolean;          // pin to the top of its column
  notes: ScrumNote[];
  createdAt: number;
  updatedAt: number;
};

// ── Display metadata (single source of truth for the board UI) ─────────────────
export const STATUS_COLUMNS: { id: ScrumStatus; label: string; hint: string }[] = [
  { id: "triage",      label: "Triage",      hint: "New — decide build or reject" },
  { id: "backlog",     label: "Backlog",     hint: "Approved to build, not scheduled" },
  { id: "todo",        label: "To Do",       hint: "Scheduled / next up" },
  { id: "planned",     label: "Approved & Planned", hint: "Greenlit + has a plan — queued to be swept and done" },
  { id: "in-progress", label: "In Progress", hint: "Being built" },
  { id: "review",      label: "Review",      hint: "Awaiting your review/approval" },
  { id: "done",        label: "Done",        hint: "Shipped" },
];

export const TYPE_META: Record<ScrumType, { label: string; icon: string; color: string }> = {
  bug:         { label: "Bug",         icon: "🐛", color: "#f87171" },
  enhancement: { label: "Enhancement", icon: "✨", color: "#a78bfa" },
  task:        { label: "Task",        icon: "📋", color: "#60a5fa" },
  content:     { label: "Content",     icon: "📝", color: "#34d399" },
  test:        { label: "Test",        icon: "🧪", color: "#22d3ee" },
  plan:        { label: "Plan",        icon: "🗺️", color: "#fbbf24" },
  chore:       { label: "Chore",       icon: "🧹", color: "#9ca3af" },
};

export const PRIORITY_META: Record<ScrumPriority, { label: string; short: string; color: string }> = {
  p0: { label: "P0 — Critical", short: "P0", color: "#ef4444" },
  p1: { label: "P1 — High",     short: "P1", color: "#fb923c" },
  p2: { label: "P2 — Medium",   short: "P2", color: "#facc15" },
  p3: { label: "P3 — Low",      short: "P3", color: "#9ca3af" },
};

export const SOURCE_META: Record<ScrumSource, { label: string; icon: string }> = {
  manual:   { label: "Manual",   icon: "✍️" },
  feedback: { label: "Feedback", icon: "💬" },
  survey:   { label: "Survey",   icon: "📊" },
  agent:    { label: "Agent",    icon: "🤖" },
};
