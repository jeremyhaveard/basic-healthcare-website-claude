import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Shared visual pattern behind both service cards and "Why Choose Pulse Health" benefit cards. */
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex w-full flex-col gap-4 p-8 sm:w-service-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-teal-tint text-teal">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
      <p className="font-body text-[15px] leading-relaxed text-body">{description}</p>
      <Link
        href="#"
        className="mt-2 inline-flex w-fit items-center gap-1 font-body text-sm font-semibold text-teal hover:underline"
      >
        Learn more
        <ChevronRight aria-hidden className="h-4 w-4" />
      </Link>
    </Card>
  );
}
