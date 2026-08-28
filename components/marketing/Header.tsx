import Link from "next/link";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="border-b border-border bg-white">
      <Container className="flex h-[82px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-tint text-teal">
            <Activity aria-hidden className="h-5 w-5" />
          </span>
          Pulse Health
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.label === "Home" ? "page" : undefined}
              className={
                link.label === "Home"
                  ? "font-body text-[15px] font-semibold text-teal underline underline-offset-4"
                  : "font-body text-[15px] font-medium text-body hover:text-teal"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="hidden font-body text-[15px] font-semibold text-ink hover:text-teal sm:inline"
          >
            Sign In
          </Link>
          <Button variant="primary" size="md" asChild>
            <Link href="/dashboard">Join Pulse</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
