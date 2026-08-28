import { DashboardHeader } from "@/components/portal/DashboardHeader";
import { VitalsRow } from "@/components/portal/VitalsRow";
import { AppointmentsCard } from "@/components/portal/AppointmentsCard";
import { PrescriptionsCard } from "@/components/portal/PrescriptionsCard";
import { PlanAdvisoryPanel } from "@/components/portal/PlanAdvisoryPanel";
import { getPatient } from "@/lib/data/patient";
import { getVitals } from "@/lib/data/vitals";
import { getUpcomingAppointments } from "@/lib/data/appointments";
import { getActivePrescriptions } from "@/lib/data/prescriptions";

export default async function DashboardPage() {
  const [patient, vitals, appointments, prescriptions] = await Promise.all([
    getPatient(),
    getVitals(),
    getUpcomingAppointments(),
    getActivePrescriptions(),
  ]);

  const firstName = patient.name.split(" ")[0];

  return (
    <div className="flex flex-col gap-10">
      <DashboardHeader firstName={firstName} />
      <VitalsRow vitals={vitals} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,720px)_320px]">
        <div className="flex flex-col gap-6">
          <AppointmentsCard appointments={appointments} />
          <PrescriptionsCard prescriptions={prescriptions} />
        </div>
        <PlanAdvisoryPanel />
      </div>
    </div>
  );
}
