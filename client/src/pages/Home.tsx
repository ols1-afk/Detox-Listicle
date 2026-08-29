import { Button } from "@/components/ui/button";
import {
  brand,
  disclaimer,
  hero,
  offer,
  PRODUCT_URL,
  reasons,
  reviews,
  reviewSummary,
  reviewsHeading,
  trustBadges,
  type ListicleImage,
  type Reason,
} from "@/content/listicleContent";
import { Check, ShieldCheck, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Home.css";

function Stars({ label }: { label?: string }) {
  return (
    <span className="lp-stars" role="img" aria-label={label ?? "Rated 5 out of 5 stars"}>
      {[0, 1, 2, 3, 4].map((index) => (
        <Star key={index} aria-hidden="true" />
      ))}
    </span>
  );
}

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Button asChild className={`lp-cta ${className}`.trim()}>
      <a href={PRODUCT_URL} target="_blank" rel="noreferrer">
        {label}
      </a>
    </Button>
  );
}

function Figure({ image }: { image: ListicleImage }) {
  return (
    <figure className="lp-figure">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={image.priority ? "eager" : "lazy"}
        fetchPriority={image.priority ? "high" : undefined}
        decoding="async"
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}

function ReasonBlock({ reason }: { reason: Reason }) {
  return (
    <section className="lp-reason" id={reason.id} aria-labelledby={`${reason.id}-heading`}>
      <div className="lp-reason-eyebrow">
        <span>{reason.eyebrow}</span>
        <span className="lp-reason-number" aria-hidden="true">
          {reason.number}
        </span>
      </div>

      <h2 id={`${reason.id}-heading`}>{reason.headline}</h2>

      {reason.image ? <Figure image={reason.image} /> : null}

      {reason.comparison ? (
        <div className="lp-compare">
          <div className="lp-compare-card is-reject">
            <span className="lp-compare-icon">
              <X aria-hidden="true" />
            </span>
            <strong>{reason.comparison.reject.label}</strong>
            <span>{reason.comparison.reject.detail}</span>
          </div>
          <div className="lp-compare-card is-accept">
            <span className="lp-compare-icon">
              <Check aria-hidden="true" />
            </span>
            <strong>{reason.comparison.accept.label}</strong>
            <span>{reason.comparison.accept.detail}</span>
          </div>
        </div>
      ) : null}

      {reason.body.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      {reason.stats ? (
        <ul className="lp-stats">
          {reason.stats.map((stat) => (
            <li key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {reason.closing ? <p className="lp-reason-closing">{reason.closing}</p> : null}
    </section>
  );
}

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const update = () => setShowSticky(window.scrollY > 600);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="lp-shell">
      <header className="lp-masthead">
        <span className="lp-brand">{brand}</span>
      </header>

      <main>
        <section className="lp-hero">
          {hero.image ? <Figure image={hero.image} /> : null}
          <h1>{hero.headline}</h1>
          <p className="lp-hero-sub">{hero.subheadline}</p>
          <p className="lp-hero-body">{hero.body}</p>
          <Cta label={hero.cta} className="lp-cta-lg" />
          <p className="lp-social-proof">
            <Stars label={`Rated 5 out of 5 stars. ${hero.socialProof}`} />
            <span>{hero.socialProof}</span>
          </p>
        </section>

        <div className="lp-reasons">
          {reasons.map((reason) => (
            <ReasonBlock key={reason.id} reason={reason} />
          ))}
        </div>

        <section className="lp-offer" aria-labelledby="offer-heading">
          <h2 id="offer-heading">{offer.heading}</h2>
          <p>{offer.body}</p>

          {offer.image ? <Figure image={offer.image} /> : null}

          <ul className="lp-badges">
            {trustBadges.map((badge) => (
              <li key={badge}>
                <ShieldCheck aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>

          <p className="lp-deal">{offer.deal}</p>
          <p className="lp-urgency">{offer.urgency}</p>
          <Cta label={offer.cta} className="lp-cta-lg" />
          <p className="lp-offer-meta">
            {offer.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <p className="lp-guarantee">{offer.guarantee}</p>
        </section>

        <section className="lp-reviews" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading">{reviewsHeading}</h2>

          <div className="lp-review-list">
            {reviews.map((review) => (
              <article key={review.name} className="lp-review">
                <Stars />
                <h3>{review.title}</h3>
                <p>{review.body}</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span className="lp-verified">
                    <Check aria-hidden="true" />
                    {review.badge}
                  </span>
                </footer>
              </article>
            ))}
          </div>

          <div className="lp-review-summary">
            <span className="lp-review-summary-label">{reviewSummary.label}</span>
            <span className="lp-review-summary-score">{reviewSummary.score}</span>
            <Stars label={`Rated ${reviewSummary.score} out of 5 stars`} />
            <span className="lp-review-summary-count">{reviewSummary.count}</span>
          </div>

          <Cta label={reviewSummary.cta} className="lp-cta-lg" />
        </section>

        <p className="lp-disclaimer">{disclaimer}</p>
      </main>

      <div className={`lp-sticky ${showSticky ? "is-visible" : ""}`}>
        <Cta label={hero.cta} />
      </div>
    </div>
  );
}
