import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Film, ImageIcon } from "lucide-react";

import { SiteLayout } from "@/components/SiteLayout";
import { VisitFormSection } from "@/components/VisitFormSection";
import { cedarGallery, cedarVideos } from "@/lib/cedar-content";
import { cedarPageMeta } from "@/lib/cedar-page-meta";

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () =>
    cedarPageMeta(
      "Photos & Videos | Cedar Retreat Nanyuki",
      "View real photos and video walkthroughs of Cedar Retreat Nanyuki—our rooms, verandas, bathrooms, and garden spaces.",
      "/media",
    ),
});

function MediaPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker section-kicker-light">
            <span /> Media &amp; Gallery
          </p>
          <h1>See Cedar Retreat Nanyuki for yourself.</h1>
          <p className="page-hero-lead">
            Explore real video walkthroughs and photographs of our rooms, verandas, and peaceful
            garden setting in Nanyuki.
          </p>
        </div>
      </section>

      <section className="section-space" aria-labelledby="videos-title">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> <Film aria-hidden="true" /> Video walkthroughs
              </p>
              <h2 className="section-heading" id="videos-title">
                Walk through the grounds and spaces.
              </h2>
            </div>
            <p className="body-copy living-intro">
              Especially helpful for family members living abroad or outside Nanyuki who want to
              get a true feel for the retreat before visiting.
            </p>
          </div>

          <div className="video-grid">
            {cedarVideos.map((video) => (
              <figure key={video.src} className="video-card">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <figcaption>{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="living-section section-space" aria-labelledby="photos-title">
        <div className="container">
          <div className="living-heading-row">
            <div>
              <p className="section-kicker">
                <span /> <ImageIcon aria-hidden="true" /> Photo gallery
              </p>
              <h2 className="section-heading" id="photos-title">
                Rooms, verandas, and quiet corners.
              </h2>
            </div>
            <p className="body-copy living-intro">
              Every photograph below is from Cedar Retreat Nanyuki.
            </p>
          </div>

          <div className="gallery-grid">
            {cedarGallery.map((photo) => (
              <figure key={photo.title} className="gallery-card">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="section-action-row">
            <Link className="text-link" to="/living">
              Read about our living options <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="text-link" to="/contact">
              Schedule an in-person tour <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <VisitFormSection
        heading="Ready to visit in person?"
        description="Photos and videos are a wonderful start—and nothing compares to feeling the calm of Nanyuki for yourself."
      />
    </SiteLayout>
  );
}
