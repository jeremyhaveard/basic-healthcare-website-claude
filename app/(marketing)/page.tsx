import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Testimonials } from "@/components/marketing/Testimonials";
import { WhyChooseUs } from "@/components/marketing/WhyChooseUs";
import { Faq } from "@/components/marketing/Faq";
import { StatsRow } from "@/components/marketing/StatsRow";
import { NewsletterStrip } from "@/components/marketing/NewsletterStrip";
import { Footer } from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <HowItWorks />
        <Testimonials />
        <WhyChooseUs />
        <Faq />
        <StatsRow />
        <NewsletterStrip />
      </main>
      <Footer />
    </>
  );
}
