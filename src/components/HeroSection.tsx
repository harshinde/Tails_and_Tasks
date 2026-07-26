"use client";

import { HeroMascot } from "@/components/mascots/HeroMascot";

interface HeroSectionProps {
  onStart: () => void;
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__visual" aria-hidden="true">
        <HeroMascot />
      </div>
      <div className="hero__stage">
        <div className="hero__copy">
          <p className="hero__brand">Paws &amp; Tasks</p>
          <h1 id="hero-heading" className="hero__headline">
            What kind of pet parent are you?
          </h1>
          <p className="hero__subhead">
            Building a great relationship with your pet takes active optimism.
            Take this 30-second pathfinder to unlock a free, custom digital
            toolkit designed perfectly for your daily routine.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onStart}>
              Start the Pathfinder
            </button>
            <p className="hero__proof">
              Join 10,000+ pet parents building better habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
