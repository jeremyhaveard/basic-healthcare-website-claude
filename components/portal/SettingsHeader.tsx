import { Button } from "@/components/ui/button";

interface SettingsHeaderProps {
  onDiscard: () => void;
  onSave: () => void;
  isSaving: boolean;
  isDirty: boolean;
}

export function SettingsHeader({ onDiscard, onSave, isSaving, isDirty }: SettingsHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-heading text-[28px] font-bold text-ink">Account Settings</h1>
        <p className="mt-1 font-body text-sm text-body">
          Manage your profile information, insurance verifications, connected platforms, and
          HIPAA compliance setups.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="secondary" size="md" onClick={onDiscard} disabled={!isDirty || isSaving}>
          Discard Changes
        </Button>
        <Button variant="primary" size="md" onClick={onSave} disabled={!isDirty || isSaving}>
          {isSaving ? "Saving..." : "Save All Changes"}
        </Button>
      </div>
    </div>
  );
}
