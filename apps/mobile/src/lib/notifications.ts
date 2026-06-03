import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Platform } from "react-native";
import { api } from "./api";

// Foreground display behavior.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Request permission, get an Expo push token, and register it with the backend
// (`/api/push/register`). Best-effort — never blocks the app. Push only works on
// a physical device, and a real token requires an EAS projectId (set once you
// run `eas init`).
export async function registerForPush(): Promise<void> {
  try {
    if (!Device.isDevice) return;

    const existing = await Notifications.getPermissionsAsync();
    let status = existing.status;
    if (status !== "granted") {
      status = (await Notifications.requestPermissionsAsync()).status;
    }
    if (status !== "granted") return;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "Default",
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }

    const projectId = Constants.expoConfig?.extra?.eas?.projectId as string | undefined;
    const tokenData = await Notifications.getExpoPushTokenAsync(projectId ? { projectId } : undefined);
    await api.request("/api/push/register", { method: "POST", json: { token: tokenData.data } });
  } catch {
    // best-effort — push registration must never break sign-in
  }
}

export async function unregisterPush(): Promise<void> {
  try {
    await api.request("/api/push/register", { method: "DELETE" });
  } catch {
    // ignore
  }
}
