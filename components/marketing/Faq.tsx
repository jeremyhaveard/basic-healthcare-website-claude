import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I book a telehealth visit?",
    answer:
      "Search for a provider, select a time, and confirm your appointment. You'll receive a secure link to join your visit from your portal.",
  },
  { question: "Is Pulse Health HIPAA compliant?", answer: null },
  { question: "Can I message my care team directly?", answer: null },
  { question: "How do I request a prescription refill?", answer: null },
  { question: "Do you accept my insurance?", answer: null },
];

export function Faq() {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Answers to common questions about Pulse Health" />
        <div className="mx-auto w-full max-w-[800px]">
          <Accordion type="single" collapsible defaultValue="faq-0" className="flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {/* Only Q1 has designed answer copy; the review flags Q2-5 as an unresolved content gap. */}
                  {item.answer ?? "Answer content for this question is not yet available."}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
