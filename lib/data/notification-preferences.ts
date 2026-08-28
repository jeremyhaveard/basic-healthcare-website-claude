import type { NotificationPreference } from "@/lib/types";

const preferences: NotificationPreference[] = [
  {
    id: "lab-results-alerts",
    title: "Lab Results Alerts",
    description: "Notify immediately upon laboratory release diagnostics confirmation.",
    email: true,
    sms: true,
  },
  {
    id: "provider-messaging-notifications",
    title: "Provider Messaging Notifications",
    description: "Alert when a care professional dispatches a secure reply.",
    email: true,
    sms: false,
  },
  {
    id: "biometric-shift-anomalies",
    title: "Biometric Shift Anomalies",
    description: "Flag vital variance levels tracked through dynamic wearable modules.",
    email: false,
    sms: true,
  },
];

export async function getNotificationPreferences(): Promise<NotificationPreference[]> {
  return preferences;
}

/** Mock mutation: resolves immediately, no persistence in this pass. */
export async function saveNotificationPreferences(
  updated: NotificationPreference[]
): Promise<NotificationPreference[]> {
  return updated;
}
