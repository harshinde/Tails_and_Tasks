"use client";

import { useState, type CSSProperties } from "react";
import { PathIcon } from "@/components/mascots/PathIcon";
import { BUNDLES } from "@/lib/bundles";
import type { Bundle, BundleId } from "@/lib/types";

interface SegmentationGridProps {
  onSelect: (bundle: Bundle) => void;
}

export function SegmentationGrid({ onSelect }: SegmentationGridProps) {
  const [hovered, setHovered] = useState<BundleId | null>(null);

  return (
    <section
      id="pathfinder-grid"
      className="grid-section"
      aria-labelledby="grid-heading"
    >
      <div className="grid-section__inner">
        <h2 id="grid-heading" className="grid-section__prompt">
          Select your primary focus for this month:
        </h2>

        <div className="path-grid" role="list">
          {BUNDLES.map((bundle) => {
            const isHovered = hovered === bundle.id;

            return (
              <button
                key={bundle.id}
                type="button"
                role="listitem"
                className={`path-card${isHovered ? " is-hovered" : ""}`}
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
                <PathIcon bundleId={bundle.id} active={isHovered} />
                <h3 className="path-card__title">{bundle.title}</h3>
                <p className="path-card__description">{bundle.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
