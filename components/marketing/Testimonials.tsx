import { Star } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "The dashboard design and speed are exemplary. Coordinating complex prescriptions and lab releases directly to patients has cut our clinic admin overhead in half.",
    name: "Dr. Aris Thorne",
    role: "Critical Care Specialist",
  },
  {
    quote:
      "Pulse Telehealth literally saved my family hours in the waiting room. Virtual triage was swift, prescriptions were synced instantly, and my doctor felt deeply personal.",
    name: "Julianna Mercer",
    role: "Active Patient",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Patient Voices" title="Loved by medical providers and patients alike" />
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col gap-6 p-10">
              <div role="img" aria-label="5 out of 5 stars" className="flex gap-1 text-teal">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-body text-base italic leading-relaxed text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <hr className="border-border" />
              <div className="flex items-center gap-3">
                <Avatar name={testimonial.name} className="h-11 w-11" />
                <div>
                  <p className="font-heading text-base font-bold text-ink">{testimonial.name}</p>
                  <p className="font-body text-[13px] text-muted">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
