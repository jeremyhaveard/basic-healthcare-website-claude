import { Sidebar } from "@/components/portal/Sidebar";
import { getPatient } from "@/lib/data/patient";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const patient = await getPatient();

  return (
    <div className="flex min-h-screen bg-surface-alt">
      <Sidebar patient={patient} />
      <main className="flex-1 p-12">{children}</main>
    </div>
  );
}
