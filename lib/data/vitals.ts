import type { Vital } from "@/lib/types";

const vitals: Vital[] = [
  {
    id: "resting-heart-rate",
    label: "Resting Heart Rate",
    value: "68",
    unit: "bpm",
    status: "normal",
    statusLabel: "Normal",
    trend: [66, 67, 65, 68, 69, 67, 68],
    trendDescription: "Resting heart rate trending stable over the last 7 days.",
    icon: "heart-rate",
  },
  {
    id: "blood-pressure",
    label: "Blood Pressure",
    value: "118/76",
    unit: "mmHg",
    status: "normal",
    statusLabel: "Optimal",
    trend: [120, 119, 118, 117, 118, 119, 118],
    trendDescription: "Blood pressure trending optimal and steady over the last 7 days.",
    icon: "blood-pressure",
  },
  {
    id: "current-weight",
    label: "Current Weight",
    value: "172",
    unit: "lbs",
    status: "normal",
    statusLabel: "Stable",
    trend: [173, 173, 172, 172, 171, 172, 172],
    trendDescription: "Weight trending stable over the last 7 days.",
    icon: "weight",
  },
];

export async function getVitals(): Promise<Vital[]> {
  return vitals;
}
