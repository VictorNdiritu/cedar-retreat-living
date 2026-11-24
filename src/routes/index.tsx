import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  HeartHandshake,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { Button } from "@/components/ui/button";
import { cedarGallery, cedarPhotos } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    cedarPageMeta(
      "Cedar Retreat Nanyuki | Retirement Living",
      "Discover Cedar Retreat Nanyuki, a peaceful retirement living community in Kenya guided by compassion, dignity, and independence for residents and peace of mind for families.",
      "/",
    ),
});

function HomePage() {
  const previewPhotos = [cedarGallery[0], cedarGallery[4], cedarGallery[5]];

  return (
    <SiteLayout>
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <img
          className="hero-photo"
          src={cedarPhotos.hero.src}
          alt={cedarPhotos.hero.alt}
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <p className="hero-location">
            <MapPin aria-hidden="true" /> Nanyuki, Kenya
          </p>
          <p className="hero-tagline">Compassion. Dignity. Independence</p>
          <h1 id="hero-title">
            Cedar Retreat <span>Nanyuki</span>
          </h1>
          <p className="hero-description">
            A welcoming retirement community in Nanyuki where older adults keep their independence,
            and families find genuine peace of mind.
          </p>
          <div className="hero-actions">
            <Button asChild variant="accent" size="lg" className="hero-cta">
              <Link to="/contact">
                Plan a visit <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Link className="hero-secondary" to="/living">
              Explore living options <ArrowRight aria-hidden="true" />
            </Link>
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
            <p className="section-kicker">
              <span /> For residents &amp; families
            </p>
            <h2 className="section-heading" id="welcome-title">
              A place to feel at home—and still be yourself.
            </h2>
            <p className="body-copy">
              Choosing a retirement home—whether for yourself or for a parent you love—is one of
              the most meaningful decisions a family can make. At Cedar Retreat Nanyuki, later life
              is built around familiar rituals, unhurried gardens, warm companionship, and the
              freedom to live at your own pace.
            </p>
            <p className="body-copy">
              We are a residential community, not an institution: a place where residents enjoy
              privacy and independence alongside dependable daily support whenever it is needed.
            </p>
            <div className="inline-links">
              <Link className="text-link" to="/about">
                Read our story &amp; approach <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="text-link" to="/resources">
                Guide for families <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <figure className="welcome-figure">
            <img src={cedarPhotos.veranda.src} alt={cedarPhotos.veranda.alt} loading="lazy" />
            <figcaption>
              <span className="figure-mark">
                <Leaf aria-hidden="true" />
              </span>
              <span>
                <strong>Calm, unhurried living</strong>
                <small>Shaded verandas &amp; gardens in Nanyuki</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="living-section section-space" id="living" aria-labelledby="living-title">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Living at Cedar
              </p>
              <h2 className="section-heading" id="living-title">
                Independence with reassurance built in.
              </h2>
            </div>
            <p className="body-copy living-intro">
              Every resident brings their own story, preferences, and rhythm. Our spaces and daily
              support adapt gently around the person—not the other way around.
            </p>
          </div>
          <div className="living-rhythm">
            <article className="rhythm-item">
              <span className="rhythm-number">01</span>
              <Home aria-hidden="true" />
              <h3>Independent living</h3>
              <p>
                Comfortable private rooms, bright sitting areas, and garden verandas where you set
                your own daily routine.
              </p>
            </article>
            <article className="rhythm-item">
              <span className="rhythm-number">02</span>
              <ShieldCheck aria-hidden="true" />
              <h3>Thoughtful daily support</h3>
              <p>
                Respectful assistance with meals, housekeeping, and everyday wellbeing—available
                with warmth and discretion.
              </p>
            </article>
            <article className="rhythm-item">
              <span className="rhythm-number">03</span>
              <Users aria-hidden="true" />
              <h3>Connected with family</h3>
              <p>
                Welcoming spaces for relatives to visit, share tea outdoors, and stay closely
                involved in their loved one’s life.
              </p>
            </article>
          </div>
          <div className="section-action-row">
            <Link className="text-link" to="/living">
              See rooms &amp; living options <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/activities">
              Explore daily life &amp; activities <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section section-space" id="values" aria-labelledby="values-title">
        <div className="container values-layout">
          <div className="values-intro">
            <p className="section-kicker">
              <span /> The Cedar promise
            </p>
            <h2 className="section-heading" id="values-title">
              Three words. One way of seeing people.
            </h2>
            <p className="body-copy">
              These are more than words beneath our name. They are the principles residents and
              families feel in every conversation, every meal, and every quiet afternoon.
            </p>
          </div>
          <div className="values-list">
            <article className="value-row">
              <span className="value-icon">
                <HeartHandshake aria-hidden="true" />
              </span>
              <div>
                <h3>Compassion</h3>
                <p>Listen with warmth. Meet each resident and family member with genuine care.</p>
              </div>
              <span className="value-index">01</span>
            </article>
            <article className="value-row">
              <span className="value-icon">
                <Sun aria-hidden="true" />
              </span>
              <div>
                <h3>Dignity</h3>
                <p>Respect each person’s voice, privacy, cultural traditions, and life story.</p>
              </div>
              <span className="value-index">02</span>
            </article>
            <article className="value-row">
              <span className="value-icon">
                <Leaf aria-hidden="true" />
              </span>
              <div>
                <h3>Independence</h3>
                <p>Make room for personal choices, hobbies, and a life that remains your own.</p>
              </div>
              <span className="value-index">03</span>
            </article>
          </div>
        </div>
      </section>

      <section className="living-section section-space" aria-labelledby="preview-title">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Inside Cedar Retreat
              </p>
              <h2 className="section-heading" id="preview-title">
                See our rooms, verandas, and gardens.
              </h2>
            </div>
            <p className="body-copy living-intro">
              Real spaces designed for light, calm, and comfort—browse our photo gallery and video
              walkthroughs.
            </p>
          </div>
          <div className="media-preview-grid">
            {previewPhotos.map((item) => (
              <figure key={item.title} className="gallery-card">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="section-action-row">
            <Link className="text-link" to="/media">
              View all photos &amp; videos <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <VisitFormSection />
    </SiteLayout>
  );
}
