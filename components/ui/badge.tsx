import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const toneClasses = {
  success: "bg-success-bg text-success",
  danger: "bg-danger-bg text-danger",
} as const;

export type BadgeTone = keyof typeof toneClasses;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone: BadgeTone;
}

/** Status badge. Always renders a status word (never color alone) at accessible-contrast tones. */
export function Badge({ tone, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 font-body text-xs font-bold",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
