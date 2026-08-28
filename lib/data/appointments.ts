import type { Appointment } from "@/lib/types";

const appointments: Appointment[] = [
  {
    id: "appt-amanda-ross",
    providerName: "Dr. Amanda Ross",
    specialty: "Lead Cardiologist",
    visitType: "Telehealth Visit",
    dateTime: "Oct 24, 09:30 AM",
  },
  {
    id: "appt-pulse-labs",
    providerName: "Pulse Labs Diagnostic",
    specialty: "Routine Metabolic",
    visitType: "Clinical Lab Bloodwork",
    dateTime: "Nov 02, 02:00 PM",
  },
];

export async function getUpcomingAppointments(): Promise<Appointment[]> {
  return appointments;
}
