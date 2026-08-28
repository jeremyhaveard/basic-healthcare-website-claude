import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export function PlanAdvisoryPanel() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-teal p-6 text-white">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15">
        <Star aria-hidden className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-lg font-bold text-white">Personalized Health Tip</h3>
      <p className="font-body text-sm leading-relaxed text-white/90">
        Your heart rate variance (HRV) has shown solid improvements this week. Consider
        maintaining your mild aerobic routine for at least 25 minutes daily to compound these
        cardiovascular gains.
      </p>
      <Link
        href="#"
        className="mt-2 inline-flex w-fit items-center gap-1 font-body text-sm font-semibold text-white hover:underline"
      >
        View My Care Plan
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    </div>
  );
}
