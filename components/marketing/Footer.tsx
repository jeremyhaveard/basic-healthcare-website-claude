import Link from "next/link";
import { Activity } from "lucide-react";
import { Container } from "./Container";

const solutionsLinks = ["Telehealth", "Clinical Labs", "Pharmacy", "Enterprise Options"];
const companyLinks = ["About S&A", "Clinicians Team", "Security Compliance", "Legal Notice"];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink pb-10 pt-20">
      <Container className="flex flex-col gap-15">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-heading text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                <Activity aria-hidden className="h-5 w-5" />
              </span>
              Pulse Health
            </div>
            <p className="max-w-xs font-body text-sm leading-relaxed text-muted">
              Advancing accessible clinical care through thoughtful design and secure modern
              healthcare infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Solutions
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {solutionsLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="font-body text-sm text-muted hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="font-body text-sm text-muted hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/10" />

        <div className="flex flex-col gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-body text-sm text-muted">© 2026 Pulse Health System. HIPAA Compliant.</p>
          <p className="font-body text-sm text-muted">Designed with Clinical Care Excellence</p>
        </div>
      </Container>
    </footer>
  );
}
