import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section wrapper: 80px horizontal padding per the design's measured
 * spacing, with a responsive fallback (the design file has no breakpoints —
 * see landing-page.md "Responsive behavior" — this is a reasonable in-house
 * default, not a spec value).
 */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20", className)}
      {...props}
    />
  );
}
