"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

export function NewsletterStrip() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-teal py-16">
      <Container className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="font-heading text-2xl font-bold text-white">
            Get updates on new services and provider availability
          </h2>
          <p className="mt-1 font-body text-sm text-white/85">
            Join our newsletter for product announcements, care tips, and clinic news.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 flex-1 rounded-sm border border-transparent bg-white px-4 font-body text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          />
          <Button type="submit" variant="primary" size="md">
            Subscribe
          </Button>
        </form>
        <p role="status" className="sr-only">
          {submitted ? "Thanks — you're subscribed." : ""}
        </p>
      </Container>
    </section>
  );
}
