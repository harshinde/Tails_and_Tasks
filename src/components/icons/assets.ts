export const ICON_ASSETS = {
  softPawHeart: "/icons/01-soft-paw-heart.svg",
  checklistPaw: "/icons/02-checklist-paw.svg",
  completedCheck: "/icons/03-completed-check.svg",
  freeResourceGift: "/icons/04-gift-free-resource.svg",
  emailEnvelopePaw: "/icons/05-email-envelope-paw.svg",
  downloadAccess: "/icons/06-download-access.svg",
  progressTracker: "/icons/07-progress-tracker.svg",
  newcomer: "/icons/08-newcomer-house.svg",
  guide: "/icons/09-guide-star-treat.svg",
  guardian: "/icons/10-guardian-shield-heart.svg",
  bestFriend: "/icons/11-best-friend-leash.svg",
  communityJoin: "/icons/12-community-two-paws.svg",
} as const;

export type IconAssetKey = keyof typeof ICON_ASSETS;
