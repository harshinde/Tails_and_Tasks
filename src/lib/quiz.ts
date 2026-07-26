import type { BundleId } from "@/lib/types";

export interface QuizQuestion {
  prompt: string;
  options: string[];
}

export interface PathQuiz {
  q1: QuizQuestion;
  q2: QuizQuestion;
  captureHeadline: string;
}

export const QUIZ_BY_PATH: Record<BundleId, PathQuiz> = {
  newcomer: {
    q1: {
      prompt: "What type of pet did you just welcome home?",
      options: ["Puppy/Dog", "Kitten/Cat", "Other"],
    },
    q2: {
      prompt: "What is your biggest challenge right now?",
      options: [
        "Potty training & accidents",
        "Sleep routines",
        "Biting, scratching, or chewing",
      ],
    },
    captureHeadline:
      "Let's get you settled. Where should we send your Welcome Kit?",
  },
  guide: {
    q1: {
      prompt: "How long is your pet's current attention span?",
      options: [
        "Distracted instantly",
        "Focused for a few minutes",
        "Highly focused",
      ],
    },
    q2: {
      prompt: "What behavior requires the most immediate work?",
      options: [
        "Leash pulling on walks",
        "Excessive barking/meowing",
        "Ignoring commands",
      ],
    },
    captureHeadline:
      "Let's fix that. Where should we send your Starter Kit?",
  },
  guardian: {
    q1: {
      prompt: "What life stage is your pet currently in?",
      options: ["Growing young one", "Active adult", "Slower senior"],
    },
    q2: {
      prompt: "What is your top health priority this year?",
      options: [
        "Managing diet and weight",
        "Joint mobility and energy",
        "Dental care and hygiene",
      ],
    },
    captureHeadline:
      "Let's protect their longevity. Where should we send your Health Vault?",
  },
  "best-friend": {
    q1: {
      prompt: "What does your ideal weekend with them look like?",
      options: [
        "Hiking and outdoor adventures",
        "Cozy couch cuddles",
        "Socializing at the local park",
      ],
    },
    q2: {
      prompt: "How do you like to spoil them the most?",
      options: [
        "Baking homemade treats",
        "Buying new enrichment toys",
        "Getting fun accessories",
      ],
    },
    captureHeadline:
      "Let's make it fun. Where should we send your Lifestyle Bundle?",
  },
};

export function getQuizForPath(pathId: BundleId) {
  return QUIZ_BY_PATH[pathId];
}
