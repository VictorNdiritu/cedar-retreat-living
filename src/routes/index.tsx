import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Sun,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import cedarRetreatLogo from "@/assets/cedar-retreat-logo.jpeg.asset.json";
import gardenPhoto from "@/assets/cedar-garden-hero.webp";
import teaPhoto from "@/assets/cedar-community-tea.webp";

const phoneNumber = "+254 702 868 888";
const phoneLink = "+254702868888";
const whatsappLink = "254702868888";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Cedar Retreat Nanyuki | Retirement Living" },
      {
        name: "description",
        content:
          "Discover Cedar Retreat Nanyuki, a retirement living community guided by compassion, dignity and independence. Arrange a visit by phone or WhatsApp.",
      },
      { property: "og:title", content: "Cedar Retreat Nanyuki | Retirement Living" },
      {
        property: "og:description",
        content:
          "A welcoming approach to retirement living in Nanyuki, grounded in compassion, dignity and independence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      `https://wa.me/${whatsappLink}?text=${encodeURIComponent(request)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand-link" href="#home" aria-label="Cedar Retreat Nanyuki home">
            <img className="brand-logo" src={cedarRetreatLogo.url} alt="Cedar Retreat Nanyuki" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#welcome">Our approach</a>
            <a href="#living">Life at Cedar</a>
            <a href="#values">Our values</a>
          </nav>
          <Button asChild variant="default" className="nav-visit">
            <a href="#visit">
              <CalendarDays aria-hidden="true" />
              Plan a visit
            </a>
          </Button>
          <details
            className="mobile-menu"
            open={menuOpen}
            onToggle={(event) => setMenuOpen(event.currentTarget.open)}
          >
            <summary aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <a href="#welcome" onClick={closeMenu}>Our approach</a>
              <a href="#living" onClick={closeMenu}>Life at Cedar</a>
              <a href="#values" onClick={closeMenu}>Our values</a>
              <a className="mobile-nav-cta" href="#visit" onClick={closeMenu}>
                Plan a visit <ArrowRight aria-hidden="true" />
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <img
            className="hero-photo"
            src={gardenPhoto}
            alt="An older woman sharing a relaxed moment with her daughter in a garden"
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="hero-location"><MapPin aria-hidden="true" /> Nanyuki, Kenya</p>
            <p className="hero-tagline">Compassion.Dignity.Independence</p>
            <h1 id="hero-title">Cedar Retreat <span>Nanyuki</span></h1>
            <p className="hero-description">
              Retirement living with space for a life that still feels entirely your own.
            </p>
            <div className="hero-actions">
              <Button asChild variant="accent" size="lg" className="hero-cta">
                <a href="#visit">
                  Plan a visit <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a className="hero-secondary" href="#welcome">
                Get to know Cedar <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
          <a className="hero-scroll" href="#welcome" aria-label="Scroll to learn about Cedar Retreat">
            <span>Discover Cedar Retreat</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="welcome-section section-space" id="welcome" aria-labelledby="welcome-title">
          <div className="container welcome-grid">
            <div className="welcome-copy">
              <p className="section-kicker"><span /> A different kind of retirement living</p>
              <h2 className="section-heading" id="welcome-title">
                A place to feel at home—and still be yourself.
              </h2>
              <p className="body-copy">
                Cedar Retreat Nanyuki is guided by a simple belief: later life should make room
                for familiar rituals, new friendships, time with loved ones, and choices that
                remain yours.
              </p>
              <p className="body-copy">
                We want every person to feel welcomed as an individual, with the freedom to
                shape a daily rhythm that feels right to them.
              </p>
              <a className="text-link" href="#values">
                What matters to us <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <figure className="welcome-figure">
              <img
                src={teaPhoto}
                alt="An older couple enjoying tea together on a leafy veranda"
                loading="lazy"
              />
              <figcaption>
                <span className="figure-mark"><Leaf aria-hidden="true" /></span>
                <span><strong>A life at your pace</strong><small>Nanyuki, Kenya</small></span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="living-section section-space" id="living" aria-labelledby="living-title">
          <div className="container">
            <div className="living-heading-row">
              <div>
                <p className="section-kicker"><span /> Life at Cedar</p>
                <h2 className="section-heading" id="living-title">
                  The little things are the big things.
                </h2>
              </div>
              <p className="body-copy living-intro">
                A favourite morning ritual. A good conversation. Time to yourself, or time
                together. The best days are made of moments that feel like yours.
              </p>
            </div>
            <div className="living-rhythm">
              <article className="rhythm-item">
                <span className="rhythm-number">01</span>
                <Sun aria-hidden="true" />
                <h3>Keep your own rhythm</h3>
                <p>Make space for the routines, interests, and quiet moments you value.</p>
              </article>
              <article className="rhythm-item">
                <span className="rhythm-number">02</span>
                <HeartHandshake aria-hidden="true" />
                <h3>Feel welcome as you are</h3>
                <p>Come as yourself, with your own story, preferences, and way of doing things.</p>
              </article>
              <article className="rhythm-item">
                <span className="rhythm-number">03</span>
                <Leaf aria-hidden="true" />
                <h3>Stay close to what matters</h3>
                <p>Keep family, friendship, and the pleasures of everyday life in view.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="values-section section-space" id="values" aria-labelledby="values-title">
          <div className="container values-layout">
            <div className="values-intro">
              <p className="section-kicker"><span /> The Cedar promise</p>
              <h2 className="section-heading" id="values-title">
                Three words. One way of seeing people.
              </h2>
              <p className="body-copy">
                These are more than words beneath our name. They are the principles we want
                people to feel in every conversation and every choice.
              </p>
            </div>
            <div className="values-list">
              <article className="value-row">
                <span className="value-icon"><HeartHandshake aria-hidden="true" /></span>
                <div><h3>Compassion</h3><p>Listen with warmth. Meet each person with care.</p></div>
                <span className="value-index">01</span>
              </article>
              <article className="value-row">
                <span className="value-icon"><Sun aria-hidden="true" /></span>
                <div><h3>Dignity</h3><p>Respect each person's voice, privacy, and story.</p></div>
                <span className="value-index">02</span>
              </article>
              <article className="value-row">
                <span className="value-icon"><Leaf aria-hidden="true" /></span>
                <div><h3>Independence</h3><p>Make room for personal choices and a life of your own.</p></div>
                <span className="value-index">03</span>
              </article>
            </div>
          </div>
        </section>

        <section className="visit-section section-space" id="visit" aria-labelledby="visit-title">
          <div className="container visit-grid">
            <div className="visit-copy">
              <p className="section-kicker section-kicker-light"><span /> Come see for yourself</p>
              <h2 className="section-heading" id="visit-title">
                A visit is a lovely place to begin.
              </h2>
              <p className="visit-description">
                Have a conversation with us, ask what matters to you, and get a feel for Cedar
                Retreat Nanyuki.
              </p>
              <a className="visit-phone" href={`tel:${phoneLink}`}>
                <span><Phone aria-hidden="true" /></span>
                <span><small>Call Cedar Retreat</small><strong>{phoneNumber}</strong></span>
              </a>
              <p className="visit-location"><MapPin aria-hidden="true" /> Nanyuki, Kenya</p>
            </div>

            <form className="visit-form" onSubmit={handleVisitRequest}>
              <div className="form-heading">
                <span className="form-icon"><CalendarDays aria-hidden="true" /></span>
                <div><h3>Plan a visit</h3><p>Tell us a little, and we’ll take it from there.</p></div>
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
              <Button type="submit" variant="default" className="form-submit">
                Continue in WhatsApp <ArrowRight aria-hidden="true" />
              </Button>
              <p className="form-note">
                WhatsApp opens with your visit request ready to send. Please leave out private
                health details.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="footer-brand" href="#home" aria-label="Back to Cedar Retreat home">
            <img src={cedarRetreatLogo.url} alt="Cedar Retreat Nanyuki" loading="lazy" />
          </a>
          <div className="footer-message">
            <p>Compassion.Dignity.Independence</p>
            <span>Retirement living in Nanyuki, Kenya</span>
          </div>
          <div className="footer-contact">
            <a href={`tel:${phoneLink}`}><Phone aria-hidden="true" /> {phoneNumber}</a>
            <a href="#visit">Arrange a visit <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Cedar Retreat Nanyuki</span>
          <a href="#home">Back to top <ArrowDown aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
