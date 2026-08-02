"use client";

import { useRef } from "react";
import { CompletedCheck } from "@/components/icons/CompletedCheck";
import { SoftPawHeart } from "@/components/icons/SoftPawHeart";
import { StoryMascot } from "@/components/mascots/StoryMascot";
import { INSTAGRAM_URL } from "@/lib/bundles";
import type { Bundle } from "@/lib/types";

interface SuccessViewProps {
  bundle: Bundle;
  onDownload: () => void;
}

export function SuccessView({ bundle, onDownload }: SuccessViewProps) {
  const graphicRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    const node = graphicRef.current?.querySelector("svg");
    if (!node) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(node);
    const blob = new Blob(
      [`<?xml version="1.0" standalone="no"?>\n${source}`],
      { type: "image/svg+xml;charset=utf-8" },
    );
    const url = URL.createObjectURL(blob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.fillStyle = "#FAF0E6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((pngBlob) => {
        if (!pngBlob) return;
        const downloadUrl = URL.createObjectURL(pngBlob);
        const anchor = document.createElement("a");
        anchor.href = downloadUrl;
        anchor.download = `paws-and-tasks-${bundle.id}-story.png`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(downloadUrl);
        URL.revokeObjectURL(url);
        onDownload();
      }, "image/png");
    };
    image.onerror = () => {
      // Fallback: download SVG if canvas encode fails
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `paws-and-tasks-${bundle.id}-story.svg`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      onDownload();
    };
    image.src = url;
  }

  return (
    <section className="success" aria-labelledby="success-heading">
      <div className="success__inner">
        <div className="success__copy">
          <div className="success__icons" aria-hidden="true">
            <CompletedCheck className="success__check" />
            <SoftPawHeart className="success__paw" />
          </div>
          <p className="success__brand">Paws &amp; Tasks</p>
          <h2 id="success-heading" className="success__headline">
            You&apos;re all set!
          </h2>
          <p className="success__body">
            Check your inbox for your PDF kit. Your Welcome Home starter kit (or
            custom toolkit) arrives as easy-to-use checklists you can start
            today — five minutes at a time.
          </p>
          <p className="success__support">
            We&apos;re glad you&apos;re here. You and your pet belong in this
            community.
          </p>

          <div className="success__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={handleDownload}
            >
              Download Story Graphic
            </button>
            <a
              className="btn btn--secondary"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Back to Instagram
            </a>
          </div>
        </div>

        <div className="success__graphic" ref={graphicRef}>
          <div className="success__frame">
            <StoryMascot bundleId={bundle.id} title={bundle.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
