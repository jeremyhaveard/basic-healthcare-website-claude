import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Prescription } from "@/lib/types";

interface PrescriptionsCardProps {
  prescriptions: Prescription[];
}

export function PrescriptionsCard({ prescriptions }: PrescriptionsCardProps) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <CardHeader>
        <CardTitle>Active Prescriptions</CardTitle>
        <Link href="#" className="font-body text-sm font-semibold text-teal hover:underline">
          View Full History
        </Link>
      </CardHeader>

      <ul className="flex flex-col gap-4">
        {prescriptions.map((prescription) => (
          <li
            key={prescription.id}
            className="flex flex-col gap-3 border-t border-border pt-4 first:border-0 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-heading text-[15px] font-bold text-ink">{prescription.drugName}</p>
              <p className="font-body text-[13px] text-body">{prescription.dosageInstructions}</p>
              <p className="font-body text-[13px] text-muted-dark">{prescription.prescriber}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge tone="success">{prescription.statusLabel}</Badge>
              <Button variant="teal" size="sm">
                Order Refill
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
