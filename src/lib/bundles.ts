import type { Bundle } from "./types";

export const BUNDLES: Bundle[] = [
  {
    id: "newcomer",
    name: "Welcome Kit",
    title: "The Newcomer",
    description: "I just brought a new pet home and need the basics.",
    accent: "#FF6B35",
    watercolor: "rgba(255, 107, 53, 0.16)",
  },
  {
    id: "guide",
    name: "Behavior & Habit Mastery",
    title: "The Guide",
    description:
      "I want to build better behavior through brief daily practice intervals.",
    accent: "#008080",
    watercolor: "rgba(0, 128, 128, 0.14)",
  },
  {
    id: "guardian",
    name: "Health & Nutrition Vault",
    title: "The Guardian",
    description: "I want to focus heavily on longevity, health, and nutrition.",
    accent: "#3D6B7A",
    watercolor: "rgba(61, 107, 122, 0.16)",
  },
  {
    id: "best-friend",
    name: "Lifestyle & Play Bundle",
    title: "The Best Friend",
    description: "I just want to spoil them, go on adventures, and have fun.",
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
