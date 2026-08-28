import type { SecuritySettings } from "@/lib/types";

const securitySettings: SecuritySettings = {
  twoFactorEnabled: true,
};

export async function getSecuritySettings(): Promise<SecuritySettings> {
  return securitySettings;
}

/** Mock mutation: resolves immediately, no persistence in this pass. */
export async function updateSecuritySettings(
  updates: Partial<SecuritySettings>
): Promise<SecuritySettings> {
  return { ...securitySettings, ...updates };
}
