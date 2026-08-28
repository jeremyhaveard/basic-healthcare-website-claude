"use client";

import { useState } from "react";
import { Watch } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { syncDevice } from "@/lib/data/devices";
import type { ConnectedDevice } from "@/lib/types";

interface ConnectedDevicesCardProps {
  devices: ConnectedDevice[];
}

export function ConnectedDevicesCard({ devices }: ConnectedDevicesCardProps) {
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [syncedIds, setSyncedIds] = useState<Set<string>>(new Set());

  async function handleSync(id: string) {
    setSyncingId(id);
    await syncDevice(id);
    setSyncingId(null);
    setSyncedIds((prev) => new Set(prev).add(id));
  }

  return (
    <Card className="flex flex-col gap-6 p-6">
      <CardHeader>
        <CardTitle>Connected Health Devices</CardTitle>
        <Button variant="secondary" size="sm">
          Link New Device
        </Button>
      </CardHeader>

      <ul className="flex flex-col">
        {devices.map((device, index) => (
          <li
            key={device.id}
            className={`flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between ${
              index > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-tint text-teal">
                <Watch aria-hidden className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="font-body text-[15px] font-semibold text-ink">{device.name}</p>
                <p className="font-body text-[13px] text-body">
                  {syncedIds.has(device.id) ? "Synced just now." : device.statusDescription}
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleSync(device.id)}
              disabled={syncingId === device.id}
            >
              {syncingId === device.id ? "Syncing..." : "Sync Now"}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
