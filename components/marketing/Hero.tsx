import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Container } from "./Container";

const reviewers = ["Maria Chen", "James Okafor", "Priya Nair"];

export function Hero() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col items-center gap-15 lg:flex-row">
        <div className="flex flex-1 flex-col gap-7 rounded-2xl bg-gradient-to-br from-white to-teal-tint p-6 shadow-card">
          <span className="inline-flex w-fit items-center rounded-sm bg-teal-tint px-3 py-1.5 font-body text-sm font-semibold text-teal">
            ✨ Trusted by 10,000+ Active Patients
          </span>

          <h1 className="font-heading text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-[56px]">
            Clinical excellence meets <span className="text-teal">everyday accessibility</span>
          </h1>

          <p className="font-body text-lg leading-relaxed text-body">
            Pulse Health simplifies your medical journey. Access top-tier doctors, coordinate
            prescriptions, review real-time lab results, and stream telemedicine consultations
            from the comfort of home.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/dashboard">
                Book Appointment
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-3">
              {reviewers.map((reviewer) => (
                <Avatar
                  key={reviewer}
                  name={reviewer}
                  className="h-10 w-10 border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-ink">4.9/5 Patients Rating</p>
              <p className="font-body text-xs text-muted-dark">From over 2,500 verified reviews</p>
            </div>
          </div>
        </div>

        <div
          role="img"
          aria-label="A bright, modern Pulse Health clinic interior"
          className="h-[320px] w-full max-w-hero-media flex-1 rounded-2xl bg-gradient-to-br from-teal-tint via-white to-teal/20 lg:h-hero-media lg:w-hero-media lg:flex-none"
        />
      </Container>
    </section>
  );
}
