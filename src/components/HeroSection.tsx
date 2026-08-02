"use client";

import { HeroMascot } from "@/components/mascots/HeroMascot";

interface HeroSectionProps {
  onScrollToForm: () => void;
  onScrollToPathfinder: () => void;
}

export function HeroSection({
  onScrollToForm,
  onScrollToPathfinder,
}: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__stage hero__stage--split">
        <div className="hero__copy">
          <h1 id="hero-heading" className="hero__headline">
            Build better pet habits, five minutes at a time.
          </h1>
          <p className="hero__subhead">
            Join 10,000+ pet parents who are creating calmer, happier routines
            with their dogs and cats.
          </p>
          <p className="hero__subhead hero__subhead--follow">
            Get your free Welcome Home starter kit instantly — or take the
            Pathfinder for a custom toolkit made just for you and your pet.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={onScrollToForm}
            >
              Send My Free Kit
            </button>
            <p className="hero__proof">
              Prefer a custom toolkit?{" "}
              <button
                type="button"
                className="hero__link"
                onClick={onScrollToPathfinder}
              >
                Take the Pathfinder below ↓
              </button>
            </p>
          </div>
        </div>

        <div className="hero__visual-panel" aria-hidden="true">
          <HeroMascot />
        </div>
      </div>
    </section>
  );
}
