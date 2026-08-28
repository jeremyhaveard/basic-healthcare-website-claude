import { HeartPulse, Droplet, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkline } from "@/components/ui/sparkline";
import type { Vital } from "@/lib/types";

const iconByType = {
  "heart-rate": HeartPulse,
  "blood-pressure": Droplet,
  weight: Scale,
} as const;

const strokeByType = {
  "heart-rate": "stroke-teal",
  "blood-pressure": "stroke-[#2563eb]",
  weight: "stroke-rose",
} as const;

interface VitalCardProps {
  vital: Vital;
}

export function VitalCard({ vital }: VitalCardProps) {
  const Icon = iconByType[vital.icon];

  return (
    <Card className="flex h-[217px] w-full flex-col gap-4 p-6 sm:w-vital-card">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-tint text-teal">
          <Icon aria-hidden className="h-[18px] w-[18px]" />
        </span>
        <Badge tone={vital.status === "flagged" ? "danger" : "success"}>{vital.statusLabel}</Badge>
      </div>
      <div>
        <p className="font-body text-sm text-body">{vital.label}</p>
        <p className="mt-1 font-heading text-3xl font-bold text-ink">
          {vital.value} <span className="font-body text-sm font-medium text-body">{vital.unit}</span>
        </p>
      </div>
      <Sparkline
        data={vital.trend}
        label={vital.trendDescription}
        strokeClassName={strokeByType[vital.icon]}
        className="mt-auto"
      />
    </Card>
  );
}
