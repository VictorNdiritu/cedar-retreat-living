import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Home, ShieldCheck, Sun } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { cedarPhotos } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/living")({
  component: LivingOptionsPage,
  head: () =>
    cedarPageMeta(
      "Living Options & Amenities | Cedar Retreat Nanyuki",
      "Explore private rooms, bright sitting areas, shaded verandas, and daily support options at Cedar Retreat Nanyuki.",
      "/living",
    ),
});

function LivingOptionsPage() {
  const spaces = [
    {
      title: "Private Bedrooms & Suites",
      description:
        "Calm, well-lit rooms with comfortable bedding, seating space, and room to add your own personal touches from home.",
      photo: cedarPhotos.bedroom,
    },
    {
      title: "Bright Sitting & Living Areas",
      description:
        "Inviting indoor spaces for quiet reading, hosting visiting family, or enjoying unhurried conversation with neighbours.",
      photo: cedarPhotos.livingRoom,
    },
    {
      title: "Shaded Garden Verandas",
      description:
        "Fresh Nanyuki air and lush greenery right outside your door—ideal for morning tea, birdwatching, and relaxed afternoons.",
      photo: cedarPhotos.veranda,
    },
    {
      title: "Accessible Bathrooms",
      description:
        "Spacious bathrooms with walk-in showers and thoughtful twin-sink vanities designed for comfort and everyday ease.",
      photo: cedarPhotos.bathroom,
    },
    {
      title: "Quiet Writing & Reading Nooks",
      description:
        "Sunlit corners beside the window for journaling, letters, books, or video calls with family near and far.",
      photo: cedarPhotos.writingNook,
    },
    {
      title: "Outdoor Garden Seating",
      description:
        "Peaceful outdoor seating tucked among mature trees and garden plants where residents and families gather.",
      photo: cedarPhotos.gardenPatio,
    },
  ];

  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> Living Options &amp; Amenities
          </p>
          <h1>Comfortable spaces tailored for calm, independent living.</h1>
          <p className="page-hero-lead">
            Every room and garden corner at Cedar Retreat Nanyuki is designed to feel like home—with
            the reassurance of thoughtful daily support close by.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Pathways of support
              </p>
              <h2 className="section-heading">Care that adapts to your stage of life.</h2>
            </div>
            <p className="body-copy living-intro">
              Whether you are seeking active, independent retirement living or gentle daily
              assistance, we tailor support respectfully around each resident.
            </p>
          </div>

          <div className="two-col-cards">
            <article className="info-card">
              <span className="card-icon">
                <Home aria-hidden="true" />
              </span>
              <h3>Independent Living</h3>
              <p>
                Ideal for older adults who enjoy managing their own day while leaving home
                maintenance and chores behind.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 aria-hidden="true" /> Private, homelike accommodation
                </li>
                <li>
                  <CheckCircle2 aria-hidden="true" /> Freedom to keep your own routine
                </li>
                <li>
                  <CheckCircle2 aria-hidden="true" /> Access to gardens, verandas, and community tea
                </li>
              </ul>
            </article>

            <article className="info-card">
              <span className="card-icon">
                <ShieldCheck aria-hidden="true" />
              </span>
              <h3>Supported Daily Living</h3>
              <p>
                Designed for residents who benefit from reliable, respectful help with everyday
                routines and family peace of mind.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 aria-hidden="true" /> Nutritious daily meals &amp; housekeeping
                </li>
                <li>
                  <CheckCircle2 aria-hidden="true" /> Gentle, dignified personal assistance
                </li>
                <li>
                  <CheckCircle2 aria-hidden="true" /> Regular communication with family members
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="living-section section-space">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Spaces &amp; comforts
              </p>
              <h2 className="section-heading">Inside &amp; around Cedar Retreat.</h2>
            </div>
            <p className="body-copy living-intro">
              Explore our real rooms, accessible bathrooms, and tranquil outdoor spaces.
            </p>
          </div>

          <div className="spaces-grid">
            {spaces.map((space) => (
              <article key={space.title} className="space-card">
                <img src={space.photo.src} alt={space.photo.alt} loading="lazy" />
                <div className="space-card-body">
                  <h3>{space.title}</h3>
                  <p>{space.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-action-row">
            <Link className="text-link" to="/media">
              Watch video walkthroughs <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/resources">
              Read family FAQs <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <p className="section-kicker">
              <span /> Personalised comfort
            </p>
            <h2 className="section-heading">Bring the things that make a room yours.</h2>
            <p className="body-copy">
              A favourite armchair, framed family photographs, a beloved quilt—we encourage
              residents to personalise their rooms so Cedar Retreat feels familiar from day one.
            </p>
            <Link className="text-link" to="/contact">
              Ask about room availability <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <figure className="welcome-figure">
            <img src={cedarPhotos.sittingArea.src} alt={cedarPhotos.sittingArea.alt} loading="lazy" />
            <figcaption>
              <span className="figure-mark">
                <Sun aria-hidden="true" />
              </span>
              <span>
                <strong>Light-filled interiors</strong>
                <small>Warm, welcoming rooms in Nanyuki</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <VisitFormSection
        heading="Tour our rooms in person."
        description="See the living spaces, walk the veranda, and discuss which living option best suits you or your loved one."
      />
    </SiteLayout>
  );
}
