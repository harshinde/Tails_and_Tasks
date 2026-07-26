"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { OptInModal } from "@/components/OptInModal";
import { SegmentationGrid } from "@/components/SegmentationGrid";
import { SuccessView } from "@/components/SuccessView";
import { trackEvent } from "@/lib/analytics";
import type { Bundle, PathfinderView } from "@/lib/types";

export function PathfinderApp() {
  const [view, setView] = useState<PathfinderView>("hero");
  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    trackEvent("page_view");
  }, []);

  function handleStart() {
    trackEvent("pathfinder_started", { timestamp: Date.now() });
    setView("grid");

    requestAnimationFrame(() => {
      document
        .getElementById("pathfinder-grid")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleBundleSelect(bundle: Bundle) {
    setSelectedBundle(bundle);
    trackEvent("bundle_selected", {
      bundle_id: bundle.id,
      bundle_name: bundle.name,
    });
    setModalOpen(true);
  }

  async function handleLeadSubmit(data: { firstName: string; email: string }) {
    if (!selectedBundle) return;

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName,
        email: data.email,
        bundleId: selectedBundle.id,
      }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      throw new Error(payload?.error ?? "Unable to capture lead.");
    }

    const emailDomain = data.email.split("@")[1] ?? "";
    trackEvent("lead_captured", {
      bundle_id: selectedBundle.id,
      email_domain: emailDomain,
    });

    setModalOpen(false);
    setView("success");
  }

  function handleStoryDownload() {
    if (!selectedBundle) return;
    trackEvent("story_asset_downloaded", { bundle_id: selectedBundle.id });
  }

  return (
    <div className="pathfinder">
      {view === "hero" ? <HeroSection onStart={handleStart} /> : null}

      {view === "grid" ? (
        <SegmentationGrid onSelect={handleBundleSelect} />
      ) : null}

      {view === "success" && selectedBundle ? (
        <SuccessView
          bundle={selectedBundle}
          onDownload={handleStoryDownload}
        />
      ) : null}

      {modalOpen && selectedBundle ? (
        <OptInModal
          bundle={selectedBundle}
          onClose={() => setModalOpen(false)}
          onSubmit={handleLeadSubmit}
        />
      ) : null}
    </div>
  );
}
