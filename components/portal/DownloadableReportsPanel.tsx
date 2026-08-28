import { FileText, Download } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import type { DownloadableReport } from "@/lib/types";

interface DownloadableReportsPanelProps {
  reports: DownloadableReport[];
}

export function DownloadableReportsPanel({ reports }: DownloadableReportsPanelProps) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <CardTitle>Downloadable Reports</CardTitle>

      <ul className="flex flex-col gap-4">
        {reports.map((report) => (
          <li key={report.id} className="rounded-md border border-border p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-tint text-teal">
                <FileText aria-hidden className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="font-body text-[16px] font-semibold text-ink">{report.title}</p>
                <p className="font-body text-[13px] text-muted-dark">{report.fileSizeLabel}</p>
              </div>
            </div>
            <p className="mt-3 font-body text-[13px] leading-relaxed text-body">{report.description}</p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 font-body text-[13px] font-semibold text-teal hover:underline"
            >
              <Download aria-hidden className="h-4 w-4" />
              Download PDF Report
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
