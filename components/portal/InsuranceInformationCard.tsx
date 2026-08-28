import { Button } from "@/components/ui/button";
import type { InsuranceInfo } from "@/lib/types";

interface InsuranceInformationCardProps {
  insurance: InsuranceInfo;
}

export function InsuranceInformationCard({ insurance }: InsuranceInformationCardProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <p className="font-body text-[13px] font-semibold uppercase tracking-wide text-muted-dark">
        Insurance Information
      </p>

      <div className="mt-4 rounded-md bg-ink p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg font-extrabold text-white">{insurance.planName}</p>
          <span className="rounded-sm bg-black/25 px-2 py-1 font-body text-[10px] font-bold text-white">
            {insurance.planType}
          </span>
        </div>

        <dl className="mt-5 flex flex-col gap-3">
          <div>
            <dt className="font-body text-[11px] text-white/50">MEMBER ID</dt>
            <dd className="font-body text-xs font-bold text-white">{insurance.memberId}</dd>
          </div>
          <div>
            <dt className="font-body text-[11px] text-white/50">GROUP NUMBER</dt>
            <dd className="font-body text-xs font-bold text-white">{insurance.groupNumber}</dd>
          </div>
          <div>
            <dt className="font-body text-[11px] text-white/50">COPAYS</dt>
            <dd className="font-body text-xs font-bold text-white">
              {insurance.copays.map((copay) => `${copay.amount} ${copay.label}`).join(" / ")}
            </dd>
          </div>
        </dl>
      </div>

      <Button variant="secondary" size="md" className="mt-5 w-full">
        Verify Coverage Status
      </Button>
    </div>
  );
}
