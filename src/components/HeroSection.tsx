"use client";

import { useState, type FormEvent } from "react";
import {
  CompletedCheck,
  DownloadInstant,
  EmailPaw,
  FreeResourceGift,
  SoftPawHeart,
} from "@/components/icons";
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
          <h1 id="hero-heading" className="hero__headline">
            Build better pet habits, five minutes at a time.
          </h1>
          <p className="hero__subhead">
            Join our pet parents creating calmer, happier routines.
            <br />
            Get your free Welcome Home starter kit instantly or take the
            Pathfinder for a custom toolkit.
          </p>

          {succeeded ? (
            <div
              className="hero__success signup-card"
              role="status"
              aria-live="polite"
            >
              <div className="signup-success__icons" aria-hidden="true">
                <CompletedCheck
                  className="signup-success__check"
                  size={36}
                  variant="success"
                />
                <SoftPawHeart
                  className="signup-success__paw"
                  size={26}
                  variant="default"
                />
                <DownloadInstant
                  className="signup-success__download"
                  size={26}
                  variant="default"
                />
              </div>
              <p className="hero__success-title">You&apos;re all set!</p>
              <p className="hero__success-body">
                Check your inbox for your PDF kit. Easy-to-use checklists you
                can start today — five minutes at a time.
              </p>
              <p className="hero__success-support">
                We&apos;re glad you&apos;re here. You and your pet belong in
                this community.
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
            <>
              <form
                className="hero__form signup-card"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="signup-card__icons" aria-hidden="true">
                  <FreeResourceGift
                    className="signup-card__icon-svg"
                    size={22}
                    title="Free kit"
                  />
                  <EmailPaw
                    className="signup-card__icon-svg"
                    size={22}
                    title="Email delivery"
                  />
                </div>

                <div className="hero__fields">
                  <label className="field">
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
                  <label className="field">
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

                <p className="hero__micro">
                  No spam. Useful, bite-sized help for real life with pets.
                </p>
              </form>

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
            </>
          )}
        </div>

        <div className="hero__visual-panel" aria-hidden="true">
          <HeroMascot />
        </div>
      </div>
    </section>
  );
}
