import { Container } from "./Container";

const partners = ["Aetna", "BlueCross", "UnitedHealthcare", "Cigna", "Humana"];

export function TrustBar() {
  return (
    <section className="bg-surface-alt py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-body text-sm font-semibold uppercase tracking-wide text-muted-dark">
          Featured &amp; Trusted In
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <li
              key={partner}
              className="font-heading text-xl font-extrabold text-muted opacity-70"
            >
              {partner}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
