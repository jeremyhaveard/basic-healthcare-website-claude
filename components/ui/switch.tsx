"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Accessible name is intentionally required via `aria-label` at each call
 * site (e.g. "Lab Results Alerts — Email") rather than assumed from
 * surrounding text, since the design doesn't make the label association
 * unambiguous (see settings-account.md accessibility notes).
 */
export const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-6 w-11 shrink-0 cursor-pointer rounded-full bg-border transition-colors",
      "data-[state=checked]:bg-teal",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-transform",
        "data-[state=checked]:translate-x-[22px]"
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
