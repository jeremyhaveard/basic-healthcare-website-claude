"use client";

import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export interface ProfileDraft {
  email: string;
  phone: string;
  address: string;
}

interface ProfileInformationCardProps {
  patientName: string;
  draft: ProfileDraft;
  editing: boolean;
  onEditProfile: () => void;
  onChange: (field: keyof ProfileDraft, value: string) => void;
}

const fields: { key: keyof ProfileDraft; label: string; type: string }[] = [
  { key: "email", label: "Email Address", type: "email" },
  { key: "phone", label: "Contact Phone", type: "tel" },
];

export function ProfileInformationCard({
  patientName,
  draft,
  editing,
  onEditProfile,
  onChange,
}: ProfileInformationCardProps) {
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      firstFieldRef.current?.focus();
    }
  }, [editing]);

  return (
    <Card className="flex flex-col gap-6 p-6">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <Button variant="secondary" size="sm" onClick={onEditProfile} disabled={editing}>
          Edit Profile
        </Button>
      </CardHeader>

      <div className="flex items-center gap-4">
        <Avatar name={patientName} className="h-14 w-14 text-base" />
        <div>
          <p className="font-heading text-base font-bold text-ink">{patientName}</p>
          <p className="font-body text-[13px] text-muted-dark">Avatar fits standards. Max 5MB file limit.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field, index) => (
          <div key={field.key}>
            <label
              htmlFor={`profile-${field.key}`}
              className="font-body text-[13px] font-semibold uppercase tracking-wide text-muted-dark"
            >
              {field.label}
            </label>
            {editing ? (
              <input
                id={`profile-${field.key}`}
                ref={index === 0 ? firstFieldRef : undefined}
                type={field.type}
                value={draft[field.key]}
                onChange={(event) => onChange(field.key, event.target.value)}
                className="mt-1.5 w-full rounded-sm border border-border bg-white p-3 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              />
            ) : (
              <p
                id={`profile-${field.key}`}
                className="mt-1.5 rounded-sm border border-border bg-surface-alt p-3 font-body text-sm text-ink"
              >
                {draft[field.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="profile-address"
          className="font-body text-[13px] font-semibold uppercase tracking-wide text-muted-dark"
        >
          Physical Address
        </label>
        {editing ? (
          <input
            id="profile-address"
            type="text"
            value={draft.address}
            onChange={(event) => onChange("address", event.target.value)}
            className="mt-1.5 w-full rounded-sm border border-border bg-white p-3 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          />
        ) : (
          <p
            id="profile-address"
            className="mt-1.5 rounded-sm border border-border bg-surface-alt p-3 font-body text-sm text-ink"
          >
            {draft.address}
          </p>
        )}
      </div>
    </Card>
  );
}
