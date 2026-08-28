"use client";

import { useState } from "react";
import { SettingsHeader } from "./SettingsHeader";
import { ProfileInformationCard, type ProfileDraft } from "./ProfileInformationCard";
import { NotificationPreferencesCard } from "./NotificationPreferencesCard";
import { ConnectedDevicesCard } from "./ConnectedDevicesCard";
import { SecurityPrivacyCard } from "./SecurityPrivacyCard";
import { InsuranceInformationCard } from "./InsuranceInformationCard";
import { updatePatientProfile } from "@/lib/data/patient";
import { saveNotificationPreferences } from "@/lib/data/notification-preferences";
import { updateSecuritySettings } from "@/lib/data/security";
import type {
  ConnectedDevice,
  InsuranceInfo,
  NotificationPreference,
  Patient,
} from "@/lib/types";

interface SettingsScreenProps {
  patient: Patient;
  notificationPreferences: NotificationPreference[];
  devices: ConnectedDevice[];
  twoFactorEnabled: boolean;
  insurance: InsuranceInfo;
}

/**
 * "Save All Changes" / "Discard Changes" are implemented as page-wide
 * actions covering profile edits, notification toggles, and the 2FA
 * toggle — the design left this scope ambiguous (see settings-account.md
 * open questions), and "Save ALL Changes" reads as page-wide by name.
 * Connected-device sync is treated as an independent immediate action,
 * not part of this draft/save flow, since it has no unsaved-state analog.
 */
export function SettingsScreen({
  patient,
  notificationPreferences,
  devices,
  twoFactorEnabled,
  insurance,
}: SettingsScreenProps) {
  const savedProfile: ProfileDraft = {
    email: patient.email,
    phone: patient.phone,
    address: patient.address,
  };

  const [profileEditing, setProfileEditing] = useState(false);
  const [profileDraft, setProfileDraft] = useState<ProfileDraft>(savedProfile);
  const [preferencesDraft, setPreferencesDraft] = useState(notificationPreferences);
  const [twoFactorDraft, setTwoFactorDraft] = useState(twoFactorEnabled);
  const [isSaving, setIsSaving] = useState(false);

  const isDirty =
    profileEditing ||
    JSON.stringify(profileDraft) !== JSON.stringify(savedProfile) ||
    JSON.stringify(preferencesDraft) !== JSON.stringify(notificationPreferences) ||
    twoFactorDraft !== twoFactorEnabled;

  function handleProfileChange(field: keyof ProfileDraft, value: string) {
    setProfileDraft((prev) => ({ ...prev, [field]: value }));
  }

  function handleTogglePreference(id: string, channel: "email" | "sms") {
    setPreferencesDraft((prev) =>
      prev.map((preference) =>
        preference.id === id ? { ...preference, [channel]: !preference[channel] } : preference
      )
    );
  }

  async function handleSave() {
    setIsSaving(true);
    await Promise.all([
      updatePatientProfile(profileDraft),
      saveNotificationPreferences(preferencesDraft),
      updateSecuritySettings({ twoFactorEnabled: twoFactorDraft }),
    ]);
    setIsSaving(false);
    setProfileEditing(false);
  }

  function handleDiscard() {
    setProfileDraft(savedProfile);
    setPreferencesDraft(notificationPreferences);
    setTwoFactorDraft(twoFactorEnabled);
    setProfileEditing(false);
  }

  return (
    <div className="flex flex-col gap-6">
      <SettingsHeader onSave={handleSave} onDiscard={handleDiscard} isSaving={isSaving} isDirty={isDirty} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,700px)_340px]">
        <div className="flex flex-col gap-6">
          <ProfileInformationCard
            patientName={patient.name}
            draft={profileDraft}
            editing={profileEditing}
            onEditProfile={() => setProfileEditing(true)}
            onChange={handleProfileChange}
          />
          <NotificationPreferencesCard
            preferences={preferencesDraft}
            onToggle={handleTogglePreference}
          />
          <ConnectedDevicesCard devices={devices} />
          <SecurityPrivacyCard
            twoFactorEnabled={twoFactorDraft}
            onToggleTwoFactor={() => setTwoFactorDraft((prev) => !prev)}
          />
        </div>
        <InsuranceInformationCard insurance={insurance} />
      </div>
    </div>
  );
}
