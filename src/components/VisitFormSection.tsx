import type { FormEvent } from "react";
import { ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cedarContact } from "@/lib/cedar-content";

export function VisitFormSection({
  heading = "A visit is a lovely place to begin.",
  description = "Whether you are exploring retirement living for yourself or for a loved one, we welcome unhurried conversations and personal tours of Cedar Retreat Nanyuki.",
}: {
  heading?: string;
  description?: string;
}) {
  function handleVisitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const visitorPhone = String(formData.get("phone") ?? "").trim();
    const relationship = String(formData.get("relationship") ?? "").trim();
    const visitDate = String(formData.get("visit-date") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const request = [
      "Hello Cedar Retreat Nanyuki, I would like to arrange a visit.",
      `Name: ${name}`,
      `Phone: ${visitorPhone}`,
      relationship ? `Enquiring for: ${relationship}` : "",
      visitDate ? `Preferred date: ${visitDate}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${cedarContact.whatsappLink}?text=${encodeURIComponent(request)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="visit-section section-space" id="visit" aria-labelledby="visit-title">
      <div className="container visit-grid">
        <div className="visit-copy">
          <p className="section-kicker section-kicker-light">
            <span /> Come see for yourself
          </p>
          <h2 className="section-heading" id="visit-title">
            {heading}
          </h2>
          <p className="visit-description">{description}</p>
          <a className="visit-phone" href={`tel:${cedarContact.phoneLink}`}>
            <span>
              <Phone aria-hidden="true" />
            </span>
            <span>
              <small>Call Cedar Retreat</small>
              <strong>{cedarContact.phoneNumber}</strong>
            </span>
          </a>
          <p className="visit-location">
            <MapPin aria-hidden="true" /> {cedarContact.location}
          </p>
        </div>

        <form className="visit-form" onSubmit={handleVisitRequest}>
          <div className="form-heading">
            <span className="form-icon">
              <CalendarDays aria-hidden="true" />
            </span>
            <div>
              <h3>Plan a visit</h3>
              <p>Tell us a little, and we’ll take it from there.</p>
            </div>
          </div>
          <label className="form-field">
            <span>Your name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label className="form-field">
            <span>Your phone number</span>
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label className="form-field">
            <span>
              Who are you enquiring for? <em>Optional</em>
            </span>
            <select name="relationship" defaultValue="">
              <option value="">Select an option</option>
              <option value="Myself">Myself</option>
              <option value="A parent or family member">A parent or family member</option>
              <option value="A couple">A couple</option>
            </select>
          </label>
          <label className="form-field">
            <span>
              Preferred visit date <em>Optional</em>
            </span>
            <input name="visit-date" type="date" />
          </label>
          <label className="form-field">
            <span>
              Anything you’d like us to know? <em>Optional</em>
            </span>
            <textarea name="message" rows={3} />
          </label>
          <Button type="submit" variant="default" className="form-submit">
            Continue in WhatsApp <ArrowRight aria-hidden="true" />
          </Button>
          <p className="form-note">
            WhatsApp opens with your visit request ready to send. Please leave out private health
            details.
          </p>
        </form>
      </div>
    </section>
  );
}
