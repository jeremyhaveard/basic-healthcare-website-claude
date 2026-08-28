import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { figure: "10,000+", caption: "Active patients using Pulse Health today" },
  { figure: "500+", caption: "Board-certified providers in our network" },
  { figure: "98%", caption: "Patient satisfaction with visit experience" },
  { figure: "4.9", caption: "Average rating from verified patient reviews" },
];

export function StatsRow() {
  return (
    <section className="bg-surface-alt py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="By the Numbers" title="A platform built for scale and trust" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.figure}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-8 text-center"
            >
              <p className="font-heading text-4xl font-extrabold text-ink">{stat.figure}</p>
              <p className="font-body text-sm text-body">{stat.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
