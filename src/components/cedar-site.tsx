import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import cedarRetreatLogo from "@/assets/cedar-retreat-logo.jpeg.asset.json";
import { cedarNavigation } from "@/lib/cedar-content";

const phoneNumber = "+254 702 868 888";
const phoneLink = "+254702868888";

export function CedarSiteFrame({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand-link" to="/" aria-label="Cedar Retreat Nanyuki home">
            <img className="brand-logo" src={cedarRetreatLogo.url} alt="Cedar Retreat Nanyuki" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {cedarNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "site-nav-link is-active" }}
                inactiveProps={{ className: "site-nav-link" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="default" className="nav-visit">
            <Link to="/contact">
              <CalendarDays aria-hidden="true" />
              Plan a visit
            </Link>
          </Button>
          <Button
            className="mobile-menu-toggle"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {cedarNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "site-nav-link is-active" }}
                inactiveProps={{ className: "site-nav-link" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="site-main" id="main-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <Link className="footer-brand" to="/" aria-label="Cedar Retreat Nanyuki home">
            <img src={cedarRetreatLogo.url} alt="Cedar Retreat Nanyuki" loading="lazy" />
          </Link>
          <div className="footer-message">
            <p>Compassion.Dignity.Independence</p>
            <span>Retirement living in Nanyuki, Kenya</span>
          </div>
          <div className="footer-contact">
            <a href={`tel:${phoneLink}`}>
              <Phone aria-hidden="true" /> {phoneNumber}
            </a>
            <Link to="/contact">
              Arrange a visit <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Cedar Retreat Nanyuki</span>
          <Link to="/contact">Visit Cedar Retreat</Link>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="interior-hero">
      <div className="container interior-hero-grid">
        <div className="interior-hero-copy">
          <p className="section-kicker"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="interior-hero-description">{description}</p>
        </div>
        <img className="interior-hero-image" src={image} alt={imageAlt} fetchPriority="high" />
      </div>
    </section>
  );
}

export function VisitForm() {
  function handleVisitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const visitorPhone = String(formData.get("phone") ?? "").trim();
    const visitDate = String(formData.get("visit-date") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const request = [
      "Hello Cedar Retreat Nanyuki, I would like to arrange a visit.",
      `Name: ${name}`,
      `Phone: ${visitorPhone}`,
      visitDate ? `Preferred date: ${visitDate}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/254702868888?text=${encodeURIComponent(request)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="visit-form" onSubmit={handleVisitRequest}>
      <div className="form-heading">
        <span className="form-icon"><CalendarDays aria-hidden="true" /></span>
        <div>
          <h2>Plan a visit</h2>
          <p>Share a few details and continue in WhatsApp.</p>
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
        <span>Preferred visit date <em>Optional</em></span>
        <input name="visit-date" type="date" />
      </label>
      <label className="form-field">
        <span>Anything you’d like us to know? <em>Optional</em></span>
        <textarea name="message" rows={3} />
      </label>
      <Button type="submit" className="form-submit">
        Continue in WhatsApp <ArrowRight aria-hidden="true" />
      </Button>
      <p className="form-note">Please leave out private health details.</p>
    </form>
  );
}

export function PhoneAndLocation() {
  return (
    <div className="contact-details">
      <a className="visit-phone" href={`tel:${phoneLink}`}>
        <span><Phone aria-hidden="true" /></span>
        <span><small>Call Cedar Retreat</small><strong>{phoneNumber}</strong></span>
      </a>
      <p className="visit-location"><MapPin aria-hidden="true" /> Nanyuki, Kenya</p>
    </div>
  );
}