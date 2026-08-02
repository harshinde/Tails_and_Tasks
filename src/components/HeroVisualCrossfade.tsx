"use client";

import { useEffect, useState } from "react";

const HERO_FRAMES = [
  {
    src: "/images/hero-pet-dog.jpg",
    label: "Pet parent with a dog",
  },
  {
    src: "/images/hero-pet-cat.jpg",
    label: "Pet parent with a cat",
  },
  {
    src: "/images/hero-pet-small.jpg",
    label: "Pet parent with a small pet",
  },
] as const;

const ROTATE_MS = 7000;

/** Soft atmospheric crossfade — no carousel chrome. */
export function HeroVisualCrossfade() {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % HERO_FRAMES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <figure className="hero__photo-frame hero__photo-frame--crossfade">
      {HERO_FRAMES.map((frame, index) => {
        const isActive = reduceMotion ? index === 0 : index === active;
        return (
          // Decorative companion images — headline carries meaning
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={frame.src}
            className={`hero__photo${isActive ? " is-active" : ""}`}
            src={frame.src}
            alt=""
            width={720}
            height={900}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            aria-hidden={!isActive}
            data-label={frame.label}
          />
        );
      })}
      <figcaption className="visually-hidden">
        Photos of pet parents with dogs, cats, and small pets
      </figcaption>
    </figure>
  );
}
