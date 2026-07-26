"use client";

import { useState, type FormEvent } from "react";
import { HeroMascot } from "@/components/mascots/HeroMascot";

interface HeroSectionProps {
  onScrollToPathfinder: () => void;
  onSubscribe: (data: {
    firstName: string;
    email: string;
  }) => Promise<void>;
}

export function HeroSection({
  onScrollToPathfinder,
  onSubscribe,
}: HeroSectionProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const trimmedName = firstName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Please enter your first name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await onSubscribe({ firstName: trimmedName, email: trimmedEmail });
      setSucceeded(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__stage hero__stage--split">
        <div className="hero__copy">
          <p className="hero__brand">Paws &amp; Tasks</p>
          <h1 id="hero-heading" className="hero__headline">
            Build Better Pet Habits, Five Minutes at a Time.
          </h1>
          <p className="hero__subhead">
            Join 10,000+ pet parents. Enter your email to get our foundational
            &ldquo;Welcome Home&rdquo; starter kit instantly, or take the
            Pathfinder below for a custom toolkit.
          </p>

          {succeeded ? (
            <div className="hero__success" role="status" aria-live="polite">
              <p className="hero__success-title">Your toolkit is on the way!</p>
              <p className="hero__success-body">
                Check your inbox in the next few minutes for the Welcome Home
                starter kit.
              </p>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={onScrollToPathfinder}
              >
                Or take the Pathfinder
              </button>
            </div>
          ) : (
            <form className="hero__form" onSubmit={handleSubmit} noValidate>
              <div className="hero__fields">
                <label className="field field--hero">
                  <span className="visually-hidden">First Name</span>
                  <input
                    className="field__input"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </label>
                <label className="field field--hero">
                  <span className="visually-hidden">Email Address</span>
                  <input
                    className="field__input"
                    name="email_address"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
              </div>

              {error ? <p className="hero__error">{error}</p> : null}

              <button
                type="submit"
                className="btn btn--primary"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send My Free Kit"}
              </button>

              <p className="hero__proof">
                Prefer a custom toolkit?{" "}
                <button
                  type="button"
                  className="hero__link"
                  onClick={onScrollToPathfinder}
                >
                  Take the Pathfinder below
                </button>
                .
              </p>
            </form>
          )}
        </div>

        <div className="hero__visual-panel" aria-hidden="true">
          <HeroMascot />
        </div>
      </div>
    </section>
  );
}
