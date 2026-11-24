import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Leaf, ShieldCheck, Sun, Users } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { cedarPhotos } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    cedarPageMeta(
      "About Us | Cedar Retreat Nanyuki",
      "Learn about Cedar Retreat Nanyuki—our philosophy of compassion, dignity, and independence, and how we welcome both residents and their families.",
      "/about",
    ),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> About Cedar Retreat
          </p>
          <h1>A home built around dignity, warmth, and belonging.</h1>
          <p className="page-hero-lead">
            Set in the calm highland air of Nanyuki, Cedar Retreat exists for older adults who want
            a peaceful, homelike place to live—and for families seeking a community they can trust.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <p className="section-kicker">
              <span /> Our story &amp; approach
            </p>
            <h2 className="section-heading">Not a hospital. A place to truly live.</h2>
            <p className="body-copy">
              Too often, families looking for retirement living feel forced to choose between
              staying isolated at home or moving into a clinical environment. Cedar Retreat Nanyuki
              offers a gentler, more human alternative.
            </p>
            <p className="body-copy">
              Here, days unfold at a natural pace—with private spaces to rest, shaded verandas to
              welcome visitors, nourishing meals, and a caring team who know each resident by name
              and personal history.
            </p>
            <Link className="text-link" to="/living">
              Explore our living options <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <figure className="welcome-figure">
            <img src={cedarPhotos.gardenPatio.src} alt={cedarPhotos.gardenPatio.alt} loading="lazy" />
            <figcaption>
              <span className="figure-mark">
                <Leaf aria-hidden="true" />
              </span>
              <span>
                <strong>Peaceful grounds in Nanyuki</strong>
                <small>Designed for unhurried outdoor time</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="living-section section-space">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Who we serve
              </p>
              <h2 className="section-heading">Designed for residents and their loved ones.</h2>
            </div>
            <p className="body-copy living-intro">
              Moving into a retirement community is a shared family step. We honour both the
              resident’s independence and the family’s need for reassurance.
            </p>
          </div>

          <div className="two-col-cards">
            <article className="info-card">
              <span className="card-icon">
                <Sun aria-hidden="true" />
              </span>
              <h3>For Prospective Residents</h3>
              <p>
                Keep your own daily rhythm—wake when you wish, enjoy quiet mornings by the window,
                garden, read, or share tea with neighbours. You bring your own personality and
                cherished belongings, and we respect your privacy every day.
              </p>
            </article>

            <article className="info-card">
              <span className="card-icon">
                <Users aria-hidden="true" />
              </span>
              <h3>For Families &amp; Caregivers</h3>
              <p>
                Gain confidence knowing your parent or relative is safe, well cared for, and never
                alone. Whether you live in Nanyuki, Nairobi, or abroad, we keep communication open
                and welcome family visits anytime.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="values-section section-space">
        <div className="container values-layout">
          <div className="values-intro">
            <p className="section-kicker">
              <span /> Our guiding values
            </p>
            <h2 className="section-heading">Compassion. Dignity. Independence.</h2>
            <p className="body-copy">
              Every decision—from how a room is arranged to how a conversation is held—is shaped by
              these three commitments.
            </p>
          </div>
          <div className="values-list">
            <article className="value-row">
              <span className="value-icon">
                <HeartHandshake aria-hidden="true" />
              </span>
              <div>
                <h3>Compassion</h3>
                <p>Warm, attentive presence that treats every resident like family.</p>
              </div>
              <span className="value-index">01</span>
            </article>
            <article className="value-row">
              <span className="value-icon">
                <ShieldCheck aria-hidden="true" />
              </span>
              <div>
                <h3>Dignity</h3>
                <p>Honouring privacy, personal preferences, and lifelong stories.</p>
              </div>
              <span className="value-index">02</span>
            </article>
            <article className="value-row">
              <span className="value-icon">
                <Leaf aria-hidden="true" />
              </span>
              <div>
                <h3>Independence</h3>
                <p>Supporting autonomy so later life still feels entirely your own.</p>
              </div>
              <span className="value-index">03</span>
            </article>
          </div>
        </div>
      </section>

      <VisitFormSection
        heading="Come meet us in Nanyuki."
        description="The best way to know if Cedar Retreat feels right for you or your family member is to walk the grounds and talk with us in person."
      />
    </SiteLayout>
  );
}
