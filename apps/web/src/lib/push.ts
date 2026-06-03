import "server-only";

// Minimal Expo Push API client (https://docs.expo.dev/push-notifications/sending-notifications/).
// No SDK dependency — just POSTs to Expo's endpoint. Best-effort and non-fatal.

export type PushMessage = {
  to: string;
  title: string;
  body: string;
  data?: Record<string, unknown>;
};

export function isExpoPushToken(value: unknown): value is string {
  return typeof value === "string" &&
    (value.startsWith("ExponentPushToken[") || value.startsWith("ExpoPushToken["));
}

export async function sendExpoPush(messages: PushMessage[]): Promise<number> {
  const valid = messages.filter((m) => isExpoPushToken(m.to));
  // Expo accepts up to 100 messages per request — chunk to be safe.
  for (let i = 0; i < valid.length; i += 100) {
    const chunk = valid.slice(i, i + 100);
    try {
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(chunk),
      });
    } catch {
      // non-fatal — a failed push must not break the caller (cron / route)
    }
  }
  return valid.length;
}
