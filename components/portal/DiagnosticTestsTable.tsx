import { Download } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { LabResult } from "@/lib/types";

interface DiagnosticTestsTableProps {
  results: LabResult[];
}

export function DiagnosticTestsTable({ results }: DiagnosticTestsTableProps) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <CardHeader>
        <CardTitle>Recent Diagnostic Tests</CardTitle>
        <button
          type="button"
          className="font-body text-sm font-semibold text-teal hover:underline"
        >
          Export All (PDF)
        </button>
      </CardHeader>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Test Type</TableHead>
            <TableHead>Observed Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Report</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell>{result.date}</TableCell>
              <TableCell className="font-heading font-bold text-ink">{result.testType}</TableCell>
              <TableCell className="font-semibold text-ink">{result.observedValue}</TableCell>
              <TableCell>
                <Badge tone={result.status === "flagged-high" ? "danger" : "success"}>
                  {result.statusLabel}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <button
                  type="button"
                  aria-label={`Download report for ${result.testType}, ${result.date}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-teal hover:bg-teal-tint"
                >
                  <Download aria-hidden className="h-4 w-4" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
