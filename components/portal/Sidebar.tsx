"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Video,
  ClipboardList,
  FileText,
  Users,
  Settings,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Patient } from "@/lib/types";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Activity },
  { label: "Appointments", href: null, icon: Video },
  { label: "Prescriptions", href: null, icon: ClipboardList },
  { label: "Clinical Labs", href: "/records", icon: FileText },
  { label: "Messages", href: null, icon: Users },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  patient: Patient;
}

export function Sidebar({ patient }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-sidebar shrink-0 flex-col border-r border-border bg-white p-7">
      <div className="flex items-center gap-2 font-heading text-xl font-bold text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-tint text-teal">
          <Activity aria-hidden className="h-5 w-5" />
        </span>
        Pulse Portal
      </div>

      <nav aria-label="Portal" className="mt-12 flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const isActive = item.href !== null && pathname.startsWith(item.href);
          const Icon = item.icon;

          if (item.href === null) {
            return (
              <span
                key={item.label}
                aria-disabled="true"
                className="flex items-center gap-3 rounded-md px-4 py-3 font-body text-[15px] font-medium text-muted"
              >
                <Icon aria-hidden className="h-[18px] w-[18px]" />
                {item.label}
                <span className="ml-auto text-xs text-muted">Soon</span>
              </span>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-3 font-body text-[15px] transition-colors",
                isActive
                  ? "bg-teal-tint font-semibold text-teal"
                  : "font-medium text-body hover:bg-surface-alt"
              )}
            >
              <Icon aria-hidden className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 border-t border-border pt-6">
        <Avatar name={patient.name} className="h-10 w-10" />
        <div>
          <p className="font-heading text-sm font-bold text-ink">{patient.name}</p>
          <p className="font-body text-xs text-body">ID: #{patient.patientId}</p>
        </div>
      </div>
    </aside>
  );
}
