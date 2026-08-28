import { VitalCard } from "./VitalCard";
import type { Vital } from "@/lib/types";

interface VitalsRowProps {
  vitals: Vital[];
}

export function VitalsRow({ vitals }: VitalsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {vitals.map((vital) => (
        <VitalCard key={vital.id} vital={vital} />
      ))}
    </div>
  );
}
