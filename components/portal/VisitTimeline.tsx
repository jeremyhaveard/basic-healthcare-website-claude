import { Card, CardTitle } from "@/components/ui/card";
import type { VisitTimelineEntry } from "@/lib/types";

interface VisitTimelineProps {
  visits: VisitTimelineEntry[];
}

export function VisitTimeline({ visits }: VisitTimelineProps) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <CardTitle>Recent Visit Timeline</CardTitle>

      <ol className="flex flex-col">
        {visits.map((visit, index) => (
          <li key={visit.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-teal" aria-hidden />
              {index < visits.length - 1 && <span className="w-px flex-1 bg-border" aria-hidden />}
            </div>
            <div className="pb-8">
              <p className="font-heading text-base font-bold text-ink">{visit.providerName}</p>
              <p className="font-body text-[13px] text-body">{visit.specialty}</p>
              <p className="mt-1 font-body text-[13px] text-muted-dark">{visit.date}</p>
              <p className="mt-3 rounded-md bg-surface-alt p-4 font-body text-sm leading-relaxed text-body">
                {visit.notes}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
