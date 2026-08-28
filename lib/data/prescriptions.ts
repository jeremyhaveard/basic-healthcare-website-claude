import type { Prescription } from "@/lib/types";

const prescriptions: Prescription[] = [
  {
    id: "rx-lisinopril",
    drugName: "Lisinopril 10mg",
    dosageInstructions: "Take 1 tablet daily by mouth",
    prescriber: "Dr. Ross",
    status: "active-refill-ready",
    statusLabel: "Active Refill Ready",
  },
  {
    id: "rx-atorvastatin",
    drugName: "Atorvastatin 20mg",
    dosageInstructions: "Take 1 tablet nightly by mouth",
    prescriber: "Dr. Ross",
    status: "active-refill-ready",
    statusLabel: "Active Refill Ready",
  },
];

export async function getActivePrescriptions(): Promise<Prescription[]> {
  return prescriptions;
}
