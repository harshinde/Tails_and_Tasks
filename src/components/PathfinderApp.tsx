"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { QuizModal } from "@/components/QuizModal";
import { SegmentationGrid } from "@/components/SegmentationGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { SuccessView } from "@/components/SuccessView";
import { trackEvent } from "@/lib/analytics";
import type { Bundle, PathfinderView, QuizAnswers } from "@/lib/types";

async function subscribe(payload: Record<string, unknown>) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(data?.error ?? "Unable to capture lead.");
  }
}

export function PathfinderApp() {
  const [view, setView] = useState<PathfinderView>("home");
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    trackEvent("page_view");
  }, []);

  function scrollToPathfinder() {
    trackEvent("pathfinder_started", { timestamp: Date.now() });
    document
      .getElementById("pathfinder-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleBundleSelect(bundle: Bundle) {
    setSelectedBundle(bundle);
    trackEvent("bundle_selected", {
      bundle_id: bundle.id,
      bundle_name: bundle.name,
    });
    setModalOpen(true);
  }

  async function handleHeroSubscribe(data: {
    firstName: string;
    email: string;
  }) {
    await subscribe({
      source: "homepage_hero",
      firstName: data.firstName,
      email: data.email,
      pathId: "newcomer",
      quizData: { q1_answer: null, q2_answer: null },
    });

    const emailDomain = data.email.split("@")[1] ?? "";
    trackEvent("hero_lead_captured", {
      bundle_id: "newcomer",
      email_domain: emailDomain,
      source: "homepage_hero",
    });
    trackEvent("lead_captured", {
      bundle_id: "newcomer",
      email_domain: emailDomain,
      source: "homepage_hero",
    });
  }

  async function handleQuizSubmit(data: {
    firstName: string;
    email: string;
    quizAnswers: QuizAnswers;
  }) {
    if (!selectedBundle) return;

    await subscribe({
      source: "modal_quiz",
      firstName: data.firstName,
      email: data.email,
      pathId: selectedBundle.id,
      quizData: {
        q1_answer: data.quizAnswers.q1,
        q2_answer: data.quizAnswers.q2,
      },
    });

    const emailDomain = data.email.split("@")[1] ?? "";
    trackEvent("quiz_lead_captured", {
      bundle_id: selectedBundle.id,
      email_domain: emailDomain,
      source: "modal_quiz",
      q1_answer: data.quizAnswers.q1,
      q2_answer: data.quizAnswers.q2,
    });
    trackEvent("lead_captured", {
      bundle_id: selectedBundle.id,
      email_domain: emailDomain,
      source: "modal_quiz",
    });

    setModalOpen(false);
    setView("success");
  }

  function handleStoryDownload() {
    if (!selectedBundle) return;
    trackEvent("story_asset_downloaded", { bundle_id: selectedBundle.id });
  }

  if (view === "success" && selectedBundle) {
    return (
      <div id="top" className="pathfinder">
        <SiteHeader />
        <SuccessView
          bundle={selectedBundle}
          onDownload={handleStoryDownload}
        />
      </div>
    );
  }

  return (
    <div id="top" className="pathfinder">
      <SiteHeader />

      <HeroSection
        onScrollToPathfinder={scrollToPathfinder}
        onSubscribe={handleHeroSubscribe}
      />

      <SegmentationGrid onSelect={handleBundleSelect} />

      {modalOpen && selectedBundle ? (
        <QuizModal
          bundle={selectedBundle}
          onClose={() => setModalOpen(false)}
          onSubmit={handleQuizSubmit}
          onStepComplete={(step, answer) => {
            trackEvent("quiz_step_completed", {
              bundle_id: selectedBundle.id,
              step,
              answer,
            });
          }}
        />
      ) : null}
    </div>
  );
}
