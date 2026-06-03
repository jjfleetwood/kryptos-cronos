// Request/response types for the Kryptós CronOS API. Mirrors the route handlers
// in apps/web/src/app/api. Hand-maintained until the API contract is formally
// frozen (see MOBILE_ROADMAP Phase 1 leftover: /api/v1 contract freeze).

export type Tier = "free" | "pro" | "trial";

export interface Progress {
  coins: number;
  coinsSpent: number;
  completedStages: string[];
  badges: string[];
  streak?: number;
  quizCompletedStages?: string[];
}

export interface Me {
  username: string;
  email: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  tier: Tier;
  trialDaysLeft: number | null;
  voucherExpiry: number | null;
}

export interface BootstrapResult {
  ok: true;
  username: string;
  email: string;
  provisioned: boolean;
}

export type LeaderboardPeriod = "alltime" | "daily" | "weekly";

export interface LeaderboardPlayer {
  username: string;
  coins: number;
  stages: number;
  badges: number;
  lastActive: number | null;
  recencyFallback?: boolean;
}

export interface RecommendedStage {
  id: string;
  title: string;
}

export interface CheckFlagInput {
  stageId: string;
  flag: string;
  timeTakenMs?: number;
}

export interface CheckFlagResult {
  correct: boolean;
  progress?: Progress;
  timePenaltyXp?: number;
  bonusXp?: number;
  recommendedNext?: RecommendedStage | null;
}

export interface CheckAnswerInput {
  stageId: string;
  questionId: string;
  selectedText?: string;
  selectedIndex?: number;
  isFinalQuestion?: boolean;
}

export interface CheckAnswerResult {
  correct: boolean;
  explanation: string;
  half?: boolean;
  progress?: Progress;
  bonusXp?: number;
  recommendedNext?: RecommendedStage | null;
  quizCompletedStages?: string[];
}

export interface HintInput {
  message: string;
  stageId?: string;
  stageTitle?: string;
  scenario?: string;
  hint?: string;
  chatbotContext?: string;
  keyTakeaways?: string[];
  tagline?: string;
}

export interface HintResult {
  reply: string;
  nextCooldownS: number;
}
