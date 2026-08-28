import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Shared "elevated card" surface: gradient fill, border, two-layer soft shadow. Used throughout marketing and portal screens. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-gradient-to-br from-white to-teal-tint shadow-card",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center justify-between", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-heading text-lg font-bold text-ink", className)}
      {...props}
    />
  );
}
