import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecordsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-heading text-[28px] font-bold text-ink">My Health Records</h1>
        <p className="mt-1 font-body text-sm text-body">
          Access your diagnostics transcripts, laboratory syncs, clinical files and visit history.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="secondary" size="md">
          <Upload aria-hidden className="h-4 w-4" />
          Upload Record
        </Button>
        <Button variant="primary" size="md">
          Request Referral
        </Button>
      </div>
    </div>
  );
}
