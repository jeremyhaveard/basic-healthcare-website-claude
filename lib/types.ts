/**
 * Domain types for the Pulse Health patient portal, derived from the
 * content documented in design/requirements/*.md. These are the shapes
 * `lib/data/*` modules resolve and that portal/marketing components consume.
 */

export type Patient = {
  id: string;
  /** Display patient ID shown in the sidebar, e.g. "994-01B" (rendered as "ID: #994-01B"). */
  patientId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type VitalStatus = "normal" | "flagged";

export type Vital = {
  id: string;
  label: string;
  value: string;
  unit: string;
  status: VitalStatus;
  /** Exact badge copy as designed, e.g. "Normal", "Optimal", "Stable". */
  statusLabel: string;
  trend: number[];
  /** Words-based summary of the trend for screen reader users, since the sparkline is decorative-only. */
  trendDescription: string;
  icon: "heart-rate" | "blood-pressure" | "weight";
};

export type Appointment = {
  id: string;
  providerName: string;
  specialty: string;
  visitType: string;
  dateTime: string;
};

export type PrescriptionStatus = "active-refill-ready";

export type Prescription = {
  id: string;
  drugName: string;
  dosageInstructions: string;
  prescriber: string;
  status: PrescriptionStatus;
  statusLabel: string;
};

export type LabResultStatus = "optimal" | "flagged-high";

export type LabResult = {
  id: string;
  date: string;
  testType: string;
  observedValue: string;
  status: LabResultStatus;
  statusLabel: string;
};

export type VisitTimelineEntry = {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  notes: string;
};

export type DownloadableReport = {
  id: string;
  title: string;
  description: string;
  fileSizeLabel: string;
};

export type NotificationPreference = {
  id: string;
  title: string;
  description: string;
  email: boolean;
  sms: boolean;
};

export type ConnectedDevice = {
  id: string;
  name: string;
  statusDescription: string;
};

export type SecuritySettings = {
  twoFactorEnabled: boolean;
};

export type InsuranceCopay = {
  label: string;
  amount: string;
};

export type InsuranceInfo = {
  planName: string;
  planType: string;
  memberId: string;
  groupNumber: string;
  copays: InsuranceCopay[];
};
