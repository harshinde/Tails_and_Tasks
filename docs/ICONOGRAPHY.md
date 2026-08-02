# Iconography System – Paws & Tasks

Detailed specification for coding agents.  
Version aligned with [DESIGN.md](./DESIGN.md) v1.2 | Site: https://pawsandtasks.com/

## Style Principles (Mandatory)

- Soft, rounded terminals and organic curves that match the design system’s `rounded-md` / `rounded-lg` tokens.
- Consistent stroke weight of approximately 1.5–2px.
- Designed on a 24×24 (or 32×32) pixel grid, optically balanced and centered.
- Friendly, approachable, non-clinical personality.
- Simplified geometric-organic forms only — never use realistic animal illustrations inside small icons.
- Support both pure line and lightly filled / two-tone variants.
- Must scale cleanly from 16px (dense UI) to large display sizes (32–48px+).
- Subtle micro-animations encouraged where helpful (gentle bounce on success, checkmark drawing in, progress fill, soft scale on hover).

## Color & Usage Variants

| State | Color / Treatment | When to Use |
| --- | --- | --- |
| Default / Rest | Primary Teal `#008080` or Muted Gray `#9E9E9E` | Navigation, inactive items, secondary icons |
| Hover | Darker teal `#006666` or soft teal fill `#E0F2F1` | Desktop interactive states |
| Active / Selected | Accent Orange `#FF6B35` or filled teal | Selected Pathfinder card, primary CTAs, active states |
| Success / Completed | Success Green `#10B981` or teal + check overlay | After email signup, quiz completion, PDF confirmation |
| Disabled | Muted Gray `#9E9E9E` at 40–50% opacity | Unavailable options |
| CTA Highlight | Accent Orange filled or outlined | “Send My Free Kit” button and key conversion actions |
| On Cream Background | Teal or Orange stroke (high contrast) | Most homepage contexts (`#FAF0E6`) |
| On White Surface | Teal or Orange stroke / soft fill | Cards, form, Pathfinder cards |

## Signature / Brand Motif

**Soft Paw + Heart**  
A simplified four-toed paw print with a small heart gently integrated into the pad (or floating just above the pad).  
Primary uses: Logo mark, favicon, loading states, brand watermark, email header accent, decorative element near headline or success state.  
This is the emotional signature of care + connection. Use it sparingly but consistently for brand recognition.

## Core Functional Icons (Checklist + Email + PDF Focus)

| Icon Name | Description | Primary Use Cases on the Site |
| --- | --- | --- |
| **Checklist Paw** | Soft rounded checklist with a small paw print used as the checkmark | Near headline, feature indicators for kits/checklists, “Start Checklist” moments |
| **Completed Check** | Rounded square containing a soft checkmark that ends in a gentle curve | Success states, “You’re all set!”, quiz completion, confirmation screens |
| **Progress Tracker** | Horizontal progress bar made of soft rounded segments with a small paw indicator | Pathfinder progress (if multi-step), onboarding, selection feedback |
| **Free Resource / Gift** | Open gift box with a soft ribbon and a tiny paw print emerging | Directly next to or above the email signup form, free kit CTAs |
| **Email Envelope + Paw** | Classic envelope shape with a small paw print on the flap or as a stamp | Signup form, newsletter context, confirmation pages |
| **Download / Instant Access** | Soft downward arrow pointing into a rounded tray with a subtle paw | “Check your inbox for your PDF” confirmation, instant access messaging |

## Pathfinder Category Icons

| Pathfinder Card | Icon Concept | Notes |
| --- | --- | --- |
| **The Newcomer** | Soft house with a paw print in the doorway | Warm welcome / basics for new pets |
| **The Guide** | Soft star or treat shape with rounded edges | Short daily practice & behavior |
| **The Guardian** | Soft shield or medical cross with rounded corners + small heart | Health, longevity, nutrition — trust-focused, not clinical |
| **The Best Friend** | Leash looped into a soft circle containing a paw print | Adventures, fun, bonding |

## Audience & Growth Icons

| Icon Name | Description | Use Cases |
| --- | --- | --- |
| **Community / Join** | Two soft overlapping paws (or people + paw) | “Join 10,000+ pet parents”, signup success, community moments |
| **Instagram / Social Share** | Soft camera or simplified social outline with small heart/paw | Future Instagram-driven traffic, social proof, share moments |
| **Tip / Advice** | Soft lightbulb with a tiny paw as the filament | Educational tips inside checklists or toolkits |
| **Reminder / Notification** | Soft bell with a gentle curve and small paw | Email reminders, checklist notifications |

## Recommended Starter Implementation Set (Priority Order for Homepage)

1. Soft Paw + Heart (signature)
2. Free Resource / Gift
3. Email Envelope + Paw
4. Completed Check
5. Download / Instant Access
6. Checklist Paw
7. Progress Tracker
8. The Newcomer (House + Paw)
9. The Guide (Star/Treat)
10. The Guardian (Shield + Heart)
11. The Best Friend (Leash + Paw)
12. Community / Join

## Implementation Notes for Coding Agents

- All icons must be SVG (preferred) or high-quality vector so they stay sharp at any size.
- Keep optical weight consistent across the entire set.
- Prefer line icons for navigation and denser UI areas.
- Use lightly filled or two-tone (teal + soft cream) versions for hero sections, Pathfinder cards, and marketing moments.
- Pair icons with short text labels whenever possible for accessibility.
- Minimum interactive size: 20–24px; larger (32–48px) for hero, form, and Pathfinder cards.
- On the homepage specifically:
  - Place Free Resource / Gift and Email Envelope + Paw with the **inline hero signup form** (not a separate scroll-to-form step).
  - Add the four category icons to the Pathfinder cards; **card click opens the quiz immediately**.
  - Use Completed Check + Soft Paw + Heart (+ Download/Instant Access) on success/confirmation with clear “Check your inbox for your PDF kit” messaging.
  - Apply Active/Hover (orange or teal) treatment on Pathfinder card interaction.
- Match rounded corners of icons to the design system tokens (`rounded-md` / `rounded-lg`).
- Never overcrowd — icons should support the calm, spacious, supportive feeling of the page.

## Folder (SVG source of truth)

All brand SVG icons live in **`public/icons/`**.

| Access | Path |
| --- | --- |
| In repo | `public/icons/<name>.svg` |
| On site (local / prod) | `/icons/<name>.svg` |
| Absolute URL | `https://pawsandtasks.com/icons/<name>.svg` |

See [`public/icons/README.md`](../public/icons/README.md) for the expected filename list. Drop exported SVGs there; do not invent a second parallel asset tree.

React UI wrappers currently live under `src/components/icons/` and must stay aligned with the SVGs in `public/icons/` (prefer referencing those files once they are present).

## Icons usage summary

### Design language rules
- Default color: Teal `#008080`
- Active / CTA / Selected: Warm Orange `#FF6B35`
- Success: Green `#10B981` or teal + check
- Keep stroke weight and rounded style consistent
- Prefer line versions for UI; lightly filled versions for hero/marketing

### Website usage
- **Homepage signup (inline in hero, above the fold):** Free Resource / Gift or Email Envelope + Paw as light accents only — never push name/email fields below the fold
- **Pathfinder cards:** Newcomer, Guide, Guardian, Best Friend category icons; card click opens quiz immediately
- **Success / confirmation:** Completed Check + Soft Paw + Heart (+ Download / Instant Access when relevant)
- **Header / CTAs:** Soft Paw + Heart for brand; Community / Join for “Join 10,000+”; Download icon when relevant
- Apply hover and active color variants as defined in DESIGN.md

### PDF / email kits usage
- Soft Paw + Heart as a small brand mark in headers/footers
- Checklist Paw and category icons next to relevant checklist sections
- Completed Check for finished items
- Keep icons small, teal-colored, and consistent with the website style

## Code map

| Icon | SVG asset (`public/icons/`) | React wrapper |
| --- | --- | --- |
| Soft Paw + Heart | `soft-paw-heart.svg` | `SoftPawHeart.tsx` |
| Free Resource / Gift | `free-resource-gift.svg` | `FreeResourceGift.tsx` |
| Email Envelope + Paw | `email-envelope-paw.svg` | `EmailPaw.tsx` |
| Completed Check | `completed-check.svg` | `CompletedCheck.tsx` |
| Download / Instant Access | `download-instant.svg` | `DownloadInstant.tsx` |
| Checklist Paw | `checklist-paw.svg` | `ChecklistPaw.tsx` |
| Progress Tracker | `progress-tracker.svg` | `ProgressTracker.tsx` |
| The Newcomer | `path-newcomer.svg` | `pathfinder/NewcomerIcon.tsx` |
| The Guide | `path-guide.svg` | `pathfinder/GuideIcon.tsx` |
| The Guardian | `path-guardian.svg` | `pathfinder/GuardianIcon.tsx` |
| The Best Friend | `path-best-friend.svg` | `pathfinder/BestFriendIcon.tsx` |
| Community / Join | `community-join.svg` | `CommunityJoin.tsx` |
| Shared props / variants | — | `types.ts` |

## Agent Instruction Summary

Always use the icons from **`public/icons/`** as the source of truth for both the website and PDF checklists.  
Match colors and usage to the design system (teal default, orange for active/CTA states, success green for completion).  
Maintain the soft, rounded, approachable style everywhere.  
When wiring UI, prefer loading or mirroring those SVG assets; keep `src/components/icons/` in sync. Do not introduce alternate icon packs or conflicting styles.
