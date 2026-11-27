import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Compass, Phone } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cedarContact, cedarFaqs } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () =>
    cedarPageMeta(
      "Resources & Family Guide | Cedar Retreat Nanyuki",
      "Helpful guidance, step-by-step visit planning, and frequently asked questions for prospective residents and families considering Cedar Retreat Nanyuki.",
      "/resources",
    ),
});

function ResourcesPage() {
  const steps = [
    {
      step: "01",
      title: "Start with a conversation",
      description:
        "Call us on +254 185 424 632 or send a WhatsApp enquiry. Share what matters most to you or your family member.",
    },
    {
      step: "02",
      title: "Visit Cedar Retreat in Nanyuki",
      description:
        "Walk the gardens, view the rooms and verandas, and experience the calm pace of the community firsthand.",
    },
    {
      step: "03",
      title: "Discuss personal preferences & support",
      description:
        "Together, we talk through daily routines, dining preferences, and any day-to-day support that would be helpful.",
    },
    {
      step: "04",
      title: "Settle in at a gentle pace",
      description:
        "Bring favourite personal belongings so the space feels like home from day one, with ongoing family communication.",
    },
  ];

  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> Resources &amp; Family Guide
          </p>
          <h1>Helpful answers for residents and families.</h1>
          <p className="page-hero-lead">
            Considering a move—for yourself or a loved one—brings thoughtful questions. Here is a
            clear guide to what to expect and how to begin.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Step-by-step guide
              </p>
              <h2 className="section-heading">How families get started with Cedar Retreat.</h2>
            </div>
            <p className="body-copy living-intro">
              There is no rush and no pressure. We take the time to listen and help you decide what
              feels right.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((item) => (
              <article key={item.step} className="info-card">
                <span className="rhythm-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="living-section section-space" id="faqs">
        <div className="container faq-layout">
          <div>
            <p className="section-kicker">
              <span /> Frequently asked questions
            </p>
            <h2 className="section-heading">Questions families often ask us.</h2>
            <p className="body-copy" style={{ marginTop: "18px" }}>
              Don’t see your question here? Call us directly or send a message on WhatsApp—we are
              always glad to talk things through.
            </p>
            <div className="resource-quick-links">
              <a className="text-link" href={`tel:${cedarContact.phoneLink}`}>
                <Phone aria-hidden="true" /> Call {cedarContact.phoneNumber}
              </a>
              <Link className="text-link" to="/living">
                <Compass aria-hidden="true" /> View living options <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="text-link" to="/contact">
                <CalendarCheck aria-hidden="true" /> Arrange a visit <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="faq-box">
            <Accordion type="single" collapsible defaultValue="item-0">
              {cedarFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger>
                  <AccordionContent className="faq-content">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <VisitFormSection
        heading="Have a specific question for our team?"
        description="Send us a note below or call us directly. We’re happy to answer questions about rooms, support, or arranging a family visit."
      />
    </SiteLayout>
  );
}
