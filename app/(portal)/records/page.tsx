import { RecordsHeader } from "@/components/portal/RecordsHeader";
import { DiagnosticTestsTable } from "@/components/portal/DiagnosticTestsTable";
import { VisitTimeline } from "@/components/portal/VisitTimeline";
import { DownloadableReportsPanel } from "@/components/portal/DownloadableReportsPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRecentLabResults } from "@/lib/data/lab-results";
import { getVisitTimeline } from "@/lib/data/visits";
import { getDownloadableReports } from "@/lib/data/reports";

const unavailableTabs = [
  { value: "visit-history", label: "Visit History" },
  { value: "prescriptions", label: "Prescriptions" },
  { value: "immunizations", label: "Immunizations" },
];

export default async function RecordsPage() {
  const [labResults, visits, reports] = await Promise.all([
    getRecentLabResults(),
    getVisitTimeline(),
    getDownloadableReports(),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <RecordsHeader />

      <Tabs defaultValue="lab-results">
        <TabsList aria-label="Health record categories">
          <TabsTrigger value="lab-results">Lab Results</TabsTrigger>
          {unavailableTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="lab-results" className="pt-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,720px)_320px]">
            <div className="flex flex-col gap-6">
              <DiagnosticTestsTable results={labResults} />
              <VisitTimeline visits={visits} />
            </div>
            <DownloadableReportsPanel reports={reports} />
          </div>
        </TabsContent>

        {unavailableTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="pt-6">
            <div className="rounded-lg border border-dashed border-border bg-white p-12 text-center">
              <p className="font-body text-sm text-body">
                {tab.label} isn&apos;t available yet. Check back soon.
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
