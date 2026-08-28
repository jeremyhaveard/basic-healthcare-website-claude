import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

function initialsFor(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/**
 * Initials avatar placeholder. Real Figma raster avatars weren't available
 * to pull into this build, so people are represented with an accessible
 * initials badge rather than a broken/fake photo — see build report.
 */
export function Avatar({ name, className }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-teal-tint font-heading text-sm font-bold text-teal",
        className
      )}
    >
      {initialsFor(name)}
    </div>
  );
}
