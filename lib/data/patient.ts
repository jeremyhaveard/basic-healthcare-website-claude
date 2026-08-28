import type { Patient } from "@/lib/types";

/**
 * Single hardcoded authenticated patient. The (portal) route group assumes
 * an already-authenticated session — no auth/session logic lives here.
 * Real auth is separately scoped (SCRUM-35/38/39/40).
 */
const patient: Patient = {
  id: "994-01B",
  patientId: "994-01B",
  name: "David Vance",
  email: "david.vance@inbox.com",
  phone: "+1 (555) 302-8941",
  address: "104 Redwood Ave, Apt 14B, Palo Alto, CA 94301",
};

/** Async even though the data is static, so a future real fetch/DB call doesn't change call sites. */
export async function getPatient(): Promise<Patient> {
  return patient;
}

/** Mock mutation: resolves immediately with the merged profile, no persistence in this pass. */
export async function updatePatientProfile(
  updates: Partial<Pick<Patient, "email" | "phone" | "address">>
): Promise<Patient> {
  return { ...patient, ...updates };
}
