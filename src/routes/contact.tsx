import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { cedarContact } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    cedarPageMeta(
      "Contact & Plan a Visit | Cedar Retreat Nanyuki",
      "Contact Cedar Retreat Nanyuki by phone or WhatsApp to ask questions or arrange a personal visit for you or your family.",
      "/contact",
    ),
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> Contact Us
          </p>
          <h1>We’d love to welcome you to Cedar Retreat.</h1>
          <p className="page-hero-lead">
            Whether you are planning ahead for yourself or exploring options for a loved one, reach
            out by phone or WhatsApp to start a warm, no-pressure conversation.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="activities-grid">
            <article className="info-card">
              <span className="card-icon">
                <Phone aria-hidden="true" />
              </span>
              <h3>Call Us Directly</h3>
              <p>Speak with our team to ask questions or arrange a personal tour.</p>
              <a className="text-link" href={`tel:${cedarContact.phoneLink}`}>
                {cedarContact.phoneNumber} <ArrowRight aria-hidden="true" />
              </a>
            </article>

            <article className="info-card">
              <span className="card-icon">
                <MessageCircle aria-hidden="true" />
              </span>
              <h3>WhatsApp Enquiries</h3>
              <p>Message us anytime—helpful for families coordinating from Nairobi or abroad.</p>
              <a
                className="text-link"
                href={`https://wa.me/${cedarContact.whatsappLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open WhatsApp <ArrowRight aria-hidden="true" />
              </a>
            </article>

            <article className="info-card">
              <span className="card-icon">
                <MapPin aria-hidden="true" />
              </span>
              <h3>Location &amp; Visits</h3>
              <p>{cedarContact.location}</p>
              <p className="contact-sub">
                <Clock aria-hidden="true" style={{ display: "inline", width: 14, marginRight: 6 }} />
                Visits arranged by appointment so we can give your family our full attention.
              </p>
              <Link className="text-link" to="/resources">
                Read our family guide <ArrowRight aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <VisitFormSection />
    </SiteLayout>
  );
}
