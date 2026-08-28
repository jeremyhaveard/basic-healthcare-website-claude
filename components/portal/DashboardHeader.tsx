import { Video, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  firstName: string;
}

export function DashboardHeader({ firstName }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-heading text-[28px] font-bold text-ink">Welcome back, {firstName}</h1>
        <p className="mt-1 font-body text-sm text-body">
          All your synchronized patient files are secure and up to date.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="teal" size="md">
          <Video aria-hidden className="h-4 w-4" />
          Start Teleconsultation
        </Button>
        <Button variant="secondary" size="md">
          <Calendar aria-hidden className="h-4 w-4" />
          Request Refill
        </Button>
      </div>
    </div>
  );
}
