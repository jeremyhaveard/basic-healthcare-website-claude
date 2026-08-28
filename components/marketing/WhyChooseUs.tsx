import { Clock, Shield, CreditCard } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Book visits, message your care team, and review lab results anytime from your secure portal.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health data is protected with enterprise-grade encryption and strict access controls.",
  },
  {
    icon: CreditCard,
    title: "Insurance Integration",
    description: "We support major carriers and help you understand coverage and billing in one place.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-alt py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Why Choose Pulse Health"
          title="Built for modern care, trusted by patients and providers"
        />
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
