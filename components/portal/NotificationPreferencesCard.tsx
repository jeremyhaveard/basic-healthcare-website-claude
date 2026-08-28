import { Card, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { NotificationPreference } from "@/lib/types";

interface NotificationPreferencesCardProps {
  preferences: NotificationPreference[];
  onToggle: (id: string, channel: "email" | "sms") => void;
}

export function NotificationPreferencesCard({ preferences, onToggle }: NotificationPreferencesCardProps) {
  return (
    <Card className="flex flex-col gap-6 p-6">
      <CardTitle>Notification Preferences</CardTitle>

      <ul className="flex flex-col">
        {preferences.map((preference, index) => (
          <li
            key={preference.id}
            className={`flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between ${
              index > 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="max-w-[400px]">
              <p className="font-heading text-[15px] font-bold text-ink">{preference.title}</p>
              <p className="mt-1 font-body text-[13px] leading-[1.4] text-body">{preference.description}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-body text-[13px] text-muted-dark">Email</span>
                <Switch
                  checked={preference.email}
                  onCheckedChange={() => onToggle(preference.id, "email")}
                  aria-label={`${preference.title} — Email`}
                />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-body text-[13px] text-muted-dark">SMS</span>
                <Switch
                  checked={preference.sms}
                  onCheckedChange={() => onToggle(preference.id, "sms")}
                  aria-label={`${preference.title} — SMS`}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
