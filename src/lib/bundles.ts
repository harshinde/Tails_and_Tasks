import type { Bundle } from "./types";

export const BUNDLES: Bundle[] = [
  {
    id: "newcomer",
    name: "Welcome Kit",
    title: "The Newcomer",
    description: "I just brought a new pet home and need the basics.",
    supporting: "Gentle routines for the first weeks together.",
    accent: "#FF6B35",
    watercolor: "rgba(255, 107, 53, 0.16)",
  },
  {
    id: "guide",
    name: "Behavior & Habit Mastery",
    title: "The Guide",
    description:
      "I want to build better behavior through short daily practice.",
    supporting: "Five-minute training and confidence-building habits.",
    accent: "#008080",
    watercolor: "rgba(0, 128, 128, 0.14)",
  },
  {
    id: "guardian",
    name: "Health & Nutrition Vault",
    title: "The Guardian",
    description: "I want to focus on longevity, health, and nutrition.",
    supporting: "Simple daily and weekly checklists for a long, healthy life.",
    accent: "#3D6B7A",
    watercolor: "rgba(61, 107, 122, 0.16)",
  },
  {
    id: "best-friend",
    name: "Lifestyle & Play Bundle",
    title: "The Best Friend",
    description: "I just want to spoil them, go on adventures, and have fun.",
    supporting: "Joy-filled habits that strengthen your bond.",
    accent: "#E8A04A",
    watercolor: "rgba(232, 160, 74, 0.18)",
  },
];

export function getBundleById(id: string | null | undefined) {
  return BUNDLES.find((bundle) => bundle.id === id) ?? null;
}

export const BRAND_NAME = "Paws & Tasks";
export const BRAND_HANDLE = "@pawsandtasks";
export const SITE_URL = "https://pawsandtasks.com";
export const INSTAGRAM_URL = "https://www.instagram.com/pawsandtasks";
