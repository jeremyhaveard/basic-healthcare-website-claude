import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Button-hierarchy rule (the review flagged no rule existed in the design):
 * - `primary` (rose): the single highest-commitment action on a page —
 *   marketing conversions ("Book Appointment", "Join Pulse", "Subscribe")
 *   and the settings page-level "Save All Changes" commit.
 * - `teal`: standard primary action within a card/section
 *   ("Order Refill", "Request Referral", "Start Teleconsultation").
 * - `secondary`: bordered/white, for secondary or utility actions
 *   ("Discard Changes", "Upload Record", "Reset Password", "Sync Now").
 * - `ghost`: no border/fill, for the lowest-emphasis inline actions.
 */
const variantClasses = {
  primary: "bg-rose text-white hover:bg-rose/90",
  teal: "bg-teal text-white hover:bg-teal/90",
  secondary: "bg-white text-ink border border-border hover:bg-surface-alt",
  ghost: "bg-transparent text-ink hover:bg-surface-alt",
} as const;

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px]",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-sm font-body font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
