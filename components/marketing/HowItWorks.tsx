import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Build your HIPAA-compliant digital secure health record in minutes.",
  },
  {
    number: "02",
    title: "Book Instant Visit",
    description: "Match immediately with a specialized practitioner based on your clinical needs.",
  },
  {
    number: "03",
    title: "Thrive In Good Health",
    description: "Coordinate ongoing wellness plans, prescriptions, and followups smoothly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-alt py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Simplified Journey" title="Your health coordinated in three steps" />
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="flex flex-col gap-4 p-10">
              <span className="font-heading text-5xl font-extrabold text-[#b2dfdb]" aria-hidden>
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-ink">{step.title}</h3>
              <p className="font-body text-[15px] leading-relaxed text-body">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
