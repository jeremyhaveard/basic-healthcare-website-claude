import type { LabResult } from "@/lib/types";

const labResults: LabResult[] = [
  {
    id: "lab-lipid-panel",
    date: "Oct 18, 2026",
    testType: "Lipid Panel (Cholesterol)",
    observedValue: "Total: 180 mg/dL",
    status: "optimal",
    statusLabel: "Optimal",
  },
  {
    id: "lab-hba1c",
    date: "Oct 18, 2026",
    testType: "Hemoglobin A1c (HbA1c)",
    observedValue: "5.4% of total Hb",
    status: "optimal",
    statusLabel: "Optimal",
  },
  {
    id: "lab-metabolic-panel",
    date: "Sep 04, 2026",
    testType: "Basic Metabolic Panel",
    observedValue: "Glucose: 108 mg/dL",
    status: "flagged-high",
    statusLabel: "Flagged High",
  },
  {
    id: "lab-tsh",
    date: "Sep 04, 2026",
    testType: "Thyroid Stimulating Hormone (TSH)",
    observedValue: "2.1 uIU/mL",
    status: "optimal",
    statusLabel: "Optimal",
  },
  {
    id: "lab-cbc",
    date: "Aug 12, 2026",
    testType: "Complete Blood Count (CBC)",
    observedValue: "WBC: 6.2 x10^3/uL",
    status: "optimal",
    statusLabel: "Optimal",
  },
];

export async function getRecentLabResults(): Promise<LabResult[]> {
  return labResults;
}
