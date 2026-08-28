import { SettingsScreen } from "@/components/portal/SettingsScreen";
import { getPatient } from "@/lib/data/patient";
import { getNotificationPreferences } from "@/lib/data/notification-preferences";
import { getConnectedDevices } from "@/lib/data/devices";
import { getSecuritySettings } from "@/lib/data/security";
import { getInsuranceInfo } from "@/lib/data/insurance";

export default async function SettingsPage() {
  const [patient, notificationPreferences, devices, security, insurance] = await Promise.all([
    getPatient(),
    getNotificationPreferences(),
    getConnectedDevices(),
    getSecuritySettings(),
    getInsuranceInfo(),
  ]);

  return (
    <SettingsScreen
      patient={patient}
      notificationPreferences={notificationPreferences}
      devices={devices}
      twoFactorEnabled={security.twoFactorEnabled}
      insurance={insurance}
    />
  );
}
