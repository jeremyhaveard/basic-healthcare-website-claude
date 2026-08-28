import type { DownloadableReport } from "@/lib/types";

const reports: DownloadableReport[] = [
  {
    id: "report-q3-health-index",
    title: "Q3 Comprehensive Health Index",
    description: "Aggregated health evaluation and lab metadata review.",
    fileSizeLabel: "4.2 MB",
  },
  {
    id: "report-cardio-advisory",
    title: "Cardio Health Advisory Summary",
    description: "Detailed heart metric log compiled from active wearables.",
    fileSizeLabel: "2.8 MB",
  },
];

export async function getDownloadableReports(): Promise<DownloadableReport[]> {
  return reports;
}
