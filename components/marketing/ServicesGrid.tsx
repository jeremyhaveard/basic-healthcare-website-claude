import { Video, Activity, FileText, Users } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { FeatureCard } from "./FeatureCard";

const services = [
  {
    icon: Video,
    title: "Telehealth Visits",
    description:
      "Connect instantly with certified physicians via secure, high-definition video consultations.",
  },
  {
    icon: Activity,
    title: "Prescription Sync",
    description:
      "Manage and refill your medication stack directly within our seamless digital pharmacy integrations.",
  },
  {
    icon: FileText,
    title: "Lab Results Hub",
    description:
      "Access clean, expert-interpreted lab diagnostics directly in your portal in under 48 hours.",
  },
  {
    icon: Users,
    title: "Care Team Direct",
    description: "Direct secure messaging access to your personalized healthcare professionals.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive medical services, engineered around you"
        />
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <FeatureCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
