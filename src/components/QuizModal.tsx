"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { getQuizForPath } from "@/lib/quiz";
import type { Bundle, QuizAnswers } from "@/lib/types";

interface QuizModalProps {
  bundle: Bundle;
  onClose: () => void;
  onSubmit: (data: {
    firstName: string;
    email: string;
    quizAnswers: QuizAnswers;
  }) => Promise<void>;
  onStepComplete: (step: 1 | 2, answer: string) => void;
}

export function QuizModal({
  bundle,
  onClose,
  onSubmit,
  onStepComplete,
}: QuizModalProps) {
  const titleId = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const quiz = getQuizForPath(bundle.id);

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    q1: "",
    q2: "",
  });
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    if (currentStep === 3) {
      firstNameRef.current?.focus();
    }
  }, [currentStep]);

  function goToStep(step: 1 | 2 | 3) {
    setError(null);
    setAnimKey((value) => value + 1);
    setCurrentStep(step);
  }

  function handleOption(step: 1 | 2, answer: string) {
    if (step === 1) {
      setQuizAnswers((prev) => ({ ...prev, q1: answer }));
      onStepComplete(1, answer);
      goToStep(2);
      return;
    }

    setQuizAnswers((prev) => ({ ...prev, q2: answer }));
    onStepComplete(2, answer);
    goToStep(3);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const trimmedName = firstName.trim();
    const trimmedEmail = email.trim();

    if (!quizAnswers.q1 || !quizAnswers.q2) {
      setError("Please complete the quick quiz questions.");
      return;
    }

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
      await onSubmit({
        firstName: trimmedName,
        email: trimmedEmail,
        quizAnswers,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
      setSubmitting(false);
    }
  }

  const stepPrompt =
    currentStep === 1
      ? quiz.q1.prompt
      : currentStep === 2
        ? quiz.q2.prompt
        : quiz.captureHeadline;

  const options =
    currentStep === 1 ? quiz.q1.options : currentStep === 2 ? quiz.q2.options : [];

  return (
    <div className="modal" role="presentation">
      <button
        type="button"
        className="modal__backdrop"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        className="modal__dialog modal__dialog--quiz"
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

        <div className="quiz-progress" aria-hidden="true">
          <span className={currentStep >= 1 ? "is-active" : ""} />
          <span className={currentStep >= 2 ? "is-active" : ""} />
          <span className={currentStep >= 3 ? "is-active" : ""} />
        </div>

        <p className="quiz-eyebrow">{bundle.title}</p>

        <div key={animKey} className="quiz-step">
          <h2 id={titleId} className="modal__title">
            {stepPrompt}
          </h2>

          {currentStep < 3 ? (
            <div className="quiz-options" role="list">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="listitem"
                  className="quiz-option"
                  onClick={() =>
                    handleOption(currentStep === 1 ? 1 : 2, option)
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <>
              <p className="modal__body">
                Drop your details below, and we&apos;ll send your custom PDFs
                straight to your inbox.
              </p>

              <form className="modal__form" onSubmit={handleSubmit} noValidate>
                <label className="field">
                  <span className="field__label">
                    Your First Name (So we can say hi)
                  </span>
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
                  {submitting ? "Unlocking…" : "Unlock My Custom Kit"}
                </button>

                <p className="modal__disclaimer">
                  We respect your inbox. No spam, just good habits.
                </p>
              </form>
            </>
          )}
        </div>

        {currentStep > 1 ? (
          <button
            type="button"
            className="quiz-back"
            onClick={() => goToStep(currentStep === 3 ? 2 : 1)}
          >
            Back
          </button>
        ) : null}
      </div>
    </div>
  );
}
