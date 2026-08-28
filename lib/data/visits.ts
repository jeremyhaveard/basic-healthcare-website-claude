import type { VisitTimelineEntry } from "@/lib/types";

const visits: VisitTimelineEntry[] = [
  {
    id: "visit-amanda-ross",
    providerName: "Dr. Amanda Ross",
    specialty: "Cardiology Specialist",
    date: "October 12, 2026",
    notes:
      "Follow-up visit for mild hypertension check. Advised lower sodium intake, maintaining light daily cardio, and consistent resting heart rate mapping via connected wearable health monitor.",
  },
  {
    id: "visit-samuel-vance",
    providerName: "Dr. Samuel Vance",
    specialty: "Primary Health Practitioner",
    date: "August 24, 2026",
    notes:
      "Annual wellness checkup and preventative biometric screening. Recommended dynamic blood glucose review alongside standard metabolic monitoring protocols.",
  },
];

export async function getVisitTimeline(): Promise<VisitTimelineEntry[]> {
  return visits;
}
