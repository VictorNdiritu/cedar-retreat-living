import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Coffee, Leaf, Sparkles, Sun, Users } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { cedarPhotos } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/activities")({
  component: ActivitiesPage,
  head: () =>
    cedarPageMeta(
      "Activities & Daily Life | Cedar Retreat Nanyuki",
      "Discover everyday life at Cedar Retreat Nanyuki—from morning tea and garden walks to family visits, quiet reading, and community gatherings.",
      "/activities",
    ),
});

function ActivitiesPage() {
  const rhythms = [
    {
      icon: Coffee,
      title: "Morning Tea & Unhurried Starts",
      description:
        "Begin the day at your own pace with fresh tea on the shaded veranda, crisp Nanyuki air, and relaxed morning conversation.",
    },
    {
      icon: Leaf,
      title: "Garden Walks & Birdwatching",
      description:
        "Stroll through leafy garden paths, sit among mature trees, and enjoy the natural calm of Nanyuki’s highland surroundings.",
    },
    {
      icon: BookOpen,
      title: "Reading, Writing & Personal Hobbies",
      description:
        "Sunlit window nooks and quiet sitting rooms make space for books, letter-writing, puzzles, knitting, or quiet reflection.",
    },
    {
      icon: Users,
      title: "Shared Meals & Fellowship",
      description:
        "Unhurried mealtimes and afternoon tea bring neighbours together for good food, laughter, and genuine companionship.",
    },
    {
      icon: Sparkles,
      title: "Birthdays & Seasonal Gatherings",
      description:
        "We love marking milestones—birthdays, holidays, and special afternoons with cake, music, and visiting relatives.",
    },
    {
      icon: Sun,
      title: "Family Visits Anytime",
      description:
        "Children, grandchildren, and friends are always welcome to drop by, share a meal, or spend the afternoon outdoors.",
    },
  ];

  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> Activities &amp; Daily Life
          </p>
          <h1>Days shaped by purpose, connection, and calm.</h1>
          <p className="page-hero-lead">
            Life at Cedar Retreat Nanyuki is never rushed or regimented. Residents choose how they
            spend their time—whether in lively company or peaceful solitude.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> Everyday rhythm
              </p>
              <h2 className="section-heading">Simple joys that make each day feel full.</h2>
            </div>
            <p className="body-copy living-intro">
              From quiet mornings to warm community gatherings, activities at Cedar grow naturally
              from what our residents enjoy most.
            </p>
          </div>

          <div className="activities-grid">
            {rhythms.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="info-card">
                  <span className="card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="living-section section-space">
        <div className="container welcome-grid">
          <div className="welcome-copy">
            <p className="section-kicker">
              <span /> Family connection
            </p>
            <h2 className="section-heading">A welcoming place for loved ones to visit.</h2>
            <p className="body-copy">
              Moving to Cedar Retreat never means stepping back from family life. Our verandas and
              gardens are designed so visits feel natural, relaxed, and unhurried—just like
              visiting a loved one’s own home.
            </p>
            <Link className="text-link" to="/contact">
              Arrange a family visit <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <figure className="welcome-figure">
            <img src={cedarPhotos.hero.src} alt={cedarPhotos.hero.alt} loading="lazy" />
            <figcaption>
              <span className="figure-mark">
                <Users aria-hidden="true" />
              </span>
              <span>
                <strong>Time together</strong>
                <small>Unhurried moments on the veranda</small>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <VisitFormSection
        heading="Experience the atmosphere for yourself."
        description="Join us for tea, see the gardens, and get a feel for daily life at Cedar Retreat Nanyuki."
      />
    </SiteLayout>
  );
}
