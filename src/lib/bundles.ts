import type { Bundle } from "./types";

export const BUNDLES: Bundle[] = [
  {
    id: "newcomer",
    name: "Welcome Kit",
    title: "The Newcomer",
    description: "I just brought a new pet home and need the basics.",
    accent: "#D48A72",
    watercolor: "rgba(212, 138, 114, 0.22)",
  },
  {
    id: "guide",
    name: "Behavior & Habit Mastery",
    title: "The Guide",
    description:
      "I want to build better behavior through brief daily practice intervals.",
    accent: "#7B9482",
    watercolor: "rgba(123, 148, 130, 0.28)",
  },
  {
    id: "guardian",
    name: "Health & Nutrition Vault",
    title: "The Guardian",
    description: "I want to focus heavily on longevity, health, and nutrition.",
    accent: "#8A9BB0",
    watercolor: "rgba(138, 155, 176, 0.28)",
  },
  {
    id: "best-friend",
    name: "Lifestyle & Play Bundle",
    title: "The Best Friend",
    description: "I just want to spoil them, go on adventures, and have fun.",
    accent: "#C4A35A",
    watercolor: "rgba(196, 163, 90, 0.26)",
  },
];

export function getBundleById(id: string | null | undefined) {
  return BUNDLES.find((bundle) => bundle.id === id) ?? null;
}

export const BRAND_NAME = "Paws & Tasks";
export const BRAND_HANDLE = "@pawsandtasks";
export const SITE_URL = "https://pawsandtasks.com";
export const INSTAGRAM_URL = "https://www.instagram.com/pawsandtasks";
