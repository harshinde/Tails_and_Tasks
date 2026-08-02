"use client";

import { useState, type CSSProperties } from "react";
import { PathIcon } from "@/components/mascots/PathIcon";
import { BUNDLES } from "@/lib/bundles";
import type { Bundle, BundleId } from "@/lib/types";

interface SegmentationGridProps {
  onSelect: (bundle: Bundle) => void;
  onContinue: (bundle: Bundle) => void;
  selectedId?: BundleId | null;
}

export function SegmentationGrid({
  onSelect,
  onContinue,
  selectedId = null,
}: SegmentationGridProps) {
  const [hovered, setHovered] = useState<BundleId | null>(null);
  const selectedBundle =
    BUNDLES.find((bundle) => bundle.id === selectedId) ?? null;

  return (
    <section
      id="pathfinder-grid"
      className="grid-section"
      aria-labelledby="grid-heading"
    >
      <div className="grid-section__inner">
        <h2 id="grid-heading" className="grid-section__prompt">
          Select your primary focus for your pet care.
        </h2>
        <p className="grid-section__subhead">
          Answer a quick question and we&apos;ll build a custom toolkit of
          checklists and daily habits for you and your pet.
        </p>

        <div
          className="path-grid"
          role="radiogroup"
          aria-labelledby="grid-heading"
        >
          {BUNDLES.map((bundle) => {
            const isHovered = hovered === bundle.id;
            const isSelected = selectedId === bundle.id;

            return (
              <button
                key={bundle.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`path-card${isHovered ? " is-hovered" : ""}${
                  isSelected ? " is-selected" : ""
                }`}
                style={
                  {
                    "--card-accent": bundle.accent,
                    "--card-wash": bundle.watercolor,
                  } as CSSProperties
                }
                onMouseEnter={() => setHovered(bundle.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(bundle.id)}
                onBlur={() => setHovered(null)}
                onClick={() => onSelect(bundle)}
              >
                <div className="path-card__wash" aria-hidden="true" />
                <PathIcon bundleId={bundle.id} active={isHovered || isSelected} />
                <h3 className="path-card__title">{bundle.title}</h3>
                <p className="path-card__description">{bundle.description}</p>
                <p className="path-card__supporting">{bundle.supporting}</p>
              </button>
            );
          })}
        </div>

        {selectedBundle ? (
          <div className="grid-section__after" role="status" aria-live="polite">
            <p className="grid-section__choice">
              Great choice. Your custom toolkit is almost ready — just enter
              your email below.
            </p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onContinue(selectedBundle)}
            >
              Continue
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
