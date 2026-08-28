import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import type { Appointment } from "@/lib/types";

interface AppointmentsCardProps {
  appointments: Appointment[];
}

export function AppointmentsCard({ appointments }: AppointmentsCardProps) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
        <Link href="#" className="font-body text-sm font-semibold text-teal hover:underline">
          Schedule New
        </Link>
      </CardHeader>

      <ul className="flex flex-col gap-4">
        {appointments.map((appointment) => (
          <li
            key={appointment.id}
            className="flex flex-col gap-4 border-t border-border pt-4 first:border-0 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <Avatar name={appointment.providerName} className="h-11 w-11" />
              <div>
                <p className="font-heading text-base font-bold text-ink">{appointment.providerName}</p>
                <p className="font-body text-sm text-body">
                  {appointment.specialty} • <span className="text-teal">{appointment.visitType}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-body text-sm text-body">{appointment.dateTime}</p>
              <Button variant="secondary" size="sm">
                Details
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
