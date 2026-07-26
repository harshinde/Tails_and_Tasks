"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Bundle } from "@/lib/types";

interface OptInModalProps {
  bundle: Bundle;
  onClose: () => void;
  onSubmit: (data: { firstName: string; email: string }) => Promise<void>;
}

export function OptInModal({ bundle, onClose, onSubmit }: OptInModalProps) {
  const titleId = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    firstNameRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

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
      await onSubmit({ firstName: trimmedName, email: trimmedEmail });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
      setSubmitting(false);
    }
  }

  return (
    <div className="modal" role="presentation">
      <button
        type="button"
        className="modal__backdrop"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2 id={titleId} className="modal__title">
          Great choice! Let&apos;s get your {bundle.name} ready.
        </h2>
        <p className="modal__body">
          Drop your details below, and we&apos;ll send your custom PDFs straight
          to your inbox.
        </p>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="field__label">Your First Name (So we can say hi)</span>
            <input
              ref={firstNameRef}
              className="field__input"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>

          <label className="field">
            <span className="field__label">Your Best Email</span>
            <input
              className="field__input"
              name="email_address"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          {error ? <p className="modal__error">{error}</p> : null}

          <button
            type="submit"
            className="btn btn--primary btn--block"
            disabled={submitting}
          >
            {submitting ? "Unlocking…" : "Unlock My Free Toolkit"}
          </button>

          <p className="modal__disclaimer">
            We respect your inbox. No spam, just good habits.
          </p>
        </form>
      </div>
    </div>
  );
}
