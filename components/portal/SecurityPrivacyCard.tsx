import { Card, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface SecurityPrivacyCardProps {
  twoFactorEnabled: boolean;
  onToggleTwoFactor: () => void;
}

export function SecurityPrivacyCard({ twoFactorEnabled, onToggleTwoFactor }: SecurityPrivacyCardProps) {
  return (
    <Card className="flex flex-col gap-6 p-6">
      <CardTitle>Security &amp; Privacy</CardTitle>

      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-[400px]">
          <p className="font-heading text-[15px] font-bold text-ink">
            Two-Factor Authentication (2FA)
          </p>
          <p className="mt-1 font-body text-[13px] leading-[1.4] text-body">
            Enhance your secure login stack using robust verification codes.
          </p>
        </div>
        <Switch
          checked={twoFactorEnabled}
          onCheckedChange={onToggleTwoFactor}
          aria-label="Two-Factor Authentication (2FA)"
        />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-[400px]">
          <p className="font-heading text-[15px] font-bold text-ink">Update Password</p>
          <p className="mt-1 font-body text-[13px] leading-[1.4] text-body">
            Keep security fresh with frequent authorization resets.
          </p>
        </div>
        <Button variant="secondary" size="sm">
          Reset Password
        </Button>
      </div>
    </Card>
  );
}
