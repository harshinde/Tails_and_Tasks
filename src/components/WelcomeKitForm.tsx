"use client";

import { useState, type FormEvent } from "react";
import {
  CompletedCheck,
  DownloadInstant,
  EmailPaw,
  FreeResourceGift,
  SoftPawHeart,
} from "@/components/icons";

interface WelcomeKitFormProps {
  onSubscribe: (data: {
    firstName: string;
    email: string;
  }) => Promise<void>;
  onScrollToPathfinder: () => void;
}

export function WelcomeKitForm({
  onSubscribe,
  onScrollToPathfinder,
}: WelcomeKitFormProps) {
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
    <section
      id="kit-form"
      className="signup-section"
      aria-labelledby="signup-heading"
    >
      <div className="signup-section__inner">
        <div className="signup-card">
          {succeeded ? (
            <div className="signup-success" role="status" aria-live="polite">
              <div className="signup-success__icons" aria-hidden="true">
                <CompletedCheck
                  className="signup-success__check"
                  size={40}
                  variant="success"
                />
                <SoftPawHeart
                  className="signup-success__paw"
                  size={28}
                  variant="default"
                />
                <DownloadInstant
                  className="signup-success__download"
                  size={28}
                  variant="default"
                />
              </div>
              <h2 id="signup-heading" className="signup-card__title">
                You&apos;re all set!
              </h2>
              <p className="signup-card__body">
                Check your inbox for your PDF kit. Your Welcome Home starter kit
                arrives as easy-to-use checklists you can start today — five
                minutes at a time.
              </p>
              <p className="signup-card__support">
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
              <div className="signup-card__icons" aria-hidden="true">
                <FreeResourceGift
                  className="signup-card__icon-svg"
                  size={40}
                  variant="default"
                />
                <EmailPaw
                  className="signup-card__icon-svg"
                  size={40}
                  variant="default"
                />
              </div>
              <h2 id="signup-heading" className="signup-card__title">
                Get your free Welcome Home starter kit
              </h2>
              <p className="signup-card__body">
                Enter your email and we&apos;ll send the foundational Welcome
                Home starter kit straight to your inbox (PDF checklists
                included).
              </p>

              <form className="signup-card__form" onSubmit={handleSubmit} noValidate>
                <div className="signup-card__fields">
                  <label className="field">
                    <span className="visually-hidden">First Name</span>
                    <input
                      id="kit-first-name"
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
                      id="kit-email"
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

                {error ? <p className="signup-card__error">{error}</p> : null}

                <button
                  type="submit"
                  className="btn btn--primary btn--block"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send My Free Kit"}
                </button>

                <p className="signup-card__micro">
                  No spam. Just useful, bite-sized help for real life with pets.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
