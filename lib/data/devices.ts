import type { ConnectedDevice } from "@/lib/types";

const devices: ConnectedDevice[] = [
  {
    id: "device-withings-scanwatch",
    name: "Withings ScanWatch Nova",
    statusDescription: "Heart rate monitoring & sleep telemetry tracking active.",
  },
  {
    id: "device-apple-health",
    name: "Apple Health Integration",
    statusDescription: "Dynamic systemic blood vitals and steps metrics synced daily.",
  },
];

export async function getConnectedDevices(): Promise<ConnectedDevice[]> {
  return devices;
}

/** Mock mutation: resolves immediately, no real sync happens in this pass. */
export async function syncDevice(id: string): Promise<{ id: string; syncedAt: string }> {
  return { id, syncedAt: new Date().toISOString() };
}
