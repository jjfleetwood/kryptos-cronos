import type {
  Me, Progress, BootstrapResult, LeaderboardPlayer, LeaderboardPeriod,
  CheckFlagInput, CheckFlagResult, CheckAnswerInput, CheckAnswerResult,
  HintInput, HintResult,
} from "./types";

export * from "./types";

export interface ApiClientConfig {
  /** API origin. "" (default) = same-origin (web, cookie auth). e.g. "https://kryptoscronos.com" for mobile. */
  baseUrl?: string;
  /** Returns the current Supabase access token (mobile). Omit on web — cookies carry the session. */
  getToken?: () => string | null | undefined | Promise<string | null | undefined>;
  /** Inject a fetch implementation (React Native / tests). Defaults to global fetch. */
  fetch?: typeof fetch;
}

export class ApiError extends Error {
  constructor(public status: number, message: string, public body: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & { json?: unknown };

export function createApiClient(config: ApiClientConfig = {}) {
  const baseUrl = config.baseUrl ?? "";
  const doFetch = config.fetch ?? globalThis.fetch;
  const sameOrigin = baseUrl === "";

  async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const { json, headers: initHeaders, ...rest } = options;
    const headers: Record<string, string> = { ...(initHeaders as Record<string, string> | undefined) };

    const token = config.getToken ? await config.getToken() : null;
    if (token) headers["Authorization"] = `Bearer ${token}`;

    let body: BodyInit | undefined;
    if (json !== undefined) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(json);
    }

    const res = await doFetch(`${baseUrl}${path}`, {
      ...rest,
      headers,
      body,
      // Mobile (cross-origin) authenticates via bearer token, never cookies.
      credentials: sameOrigin ? "include" : "omit",
    });

    const text = await res.text();
    const data: unknown = text ? JSON.parse(text) : null;

    if (!res.ok) {
      const msg = (data && typeof data === "object" && "error" in data && typeof data.error === "string")
        ? data.error
        : `API ${res.status} on ${path}`;
      throw new ApiError(res.status, msg, data);
    }
    return data as T;
  }

  return {
    /** Escape hatch for endpoints without a typed wrapper yet. */
    request,

    getMe: () => request<Me>("/api/auth/me"),
    bootstrap: () => request<BootstrapResult>("/api/auth/bootstrap", { method: "POST" }),

    getProgress: () => request<Progress | null>("/api/progress"),
    awardStage: (stageId: string, badgeId?: string) =>
      request<{ ok: true; progress: Progress }>("/api/progress", { method: "POST", json: { stageId, badgeId } }),

    getLeaderboard: (period: LeaderboardPeriod = "alltime") =>
      request<LeaderboardPlayer[]>(`/api/leaderboard?period=${period}`),

    checkFlag: (input: CheckFlagInput) =>
      request<CheckFlagResult>("/api/check-flag", { method: "POST", json: input }),
    checkAnswer: (input: CheckAnswerInput) =>
      request<CheckAnswerResult>("/api/check-answer", { method: "POST", json: input }),
    getHint: (input: HintInput) =>
      request<HintResult>("/api/hint", { method: "POST", json: input }),
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;
