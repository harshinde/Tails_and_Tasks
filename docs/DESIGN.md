---
name: PetBond Community
description: Warm, trustworthy design system for a pet-parent relationship and community platform. Optimistic, approachable, and emotionally supportive.
version: 1.0
applied_to: Paws & Tasks (pawsandtasks.com)
---

# DESIGN.md — PetBond Community

Warm, trustworthy design system for a pet-parent relationship and community platform. Optimistic, approachable, and emotionally supportive.

**Applied to:** Paws & Tasks landing / Pathfinder MVP  
**Related:** [PRD](./PRD.md) · [Architecture](./ARCHITECTURE.md) · [PDF Design](./PDF_DESIGN.md)

> Note: Path-specific PDF toolkits keep their own archetype palettes (see `PDF_DESIGN.md`). This file governs the **website, UI, and community surfaces**.

---

## Tokens

```yaml
colors:
  primary: "#008080"          # Teal – trust, calm, primary actions & links
  primary-hover: "#006666"
  primary-light: "#E0F2F1"
  accent: "#FF6B35"           # Warm Orange – playful energy, CTAs, highlights
  accent-hover: "#E55A2B"
  accent-light: "#FFF0E8"
  background: "#FAF0E6"       # Cream – main page background (warm, inviting)
  surface: "#FFFFFF"          # Pure white – cards, modals, elevated surfaces
  surface-elevated: "#FFFFFF"
  muted: "#9E9E9E"            # Warm Gray – secondary text, borders, disabled
  muted-foreground: "#6B7280"
  foreground: "#2D3E50"       # Dark text – primary body text (high contrast)
  foreground-strong: "#1C3245"
  border: "#E5E0D8"
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"

typography:
  font-heading: "Plus Jakarta Sans"
  font-body: "Inter"
  font-mono: "JetBrains Mono"

rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"

shadow:
  sm: "0 1px 3px rgba(45, 62, 80, 0.06)"
  md: "0 4px 12px rgba(45, 62, 80, 0.08)"
  lg: "0 10px 25px rgba(45, 62, 80, 0.1)"
```

### Type scale

| Role | Family | Size | Weight | Line-height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display | Plus Jakarta Sans | 3rem | 800 | 1.15 | -0.02em |
| H1 | Plus Jakarta Sans | 2.25rem | 700 | 1.2 | -0.015em |
| H2 | Plus Jakarta Sans | 1.875rem | 700 | 1.25 | — |
| H3 | Plus Jakarta Sans | 1.5rem | 600 | 1.3 | — |
| Body | Inter | 1rem | 400 | 1.6 | — |
| Body LG | Inter | 1.125rem | 400 | 1.65 | — |
| Body SM | Inter | 0.875rem | 400 | 1.5 | — |
| Label | Inter | 0.875rem | 500 | 1.4 | 0.01em |
| Button | Inter | 0.9375rem | 600 | 1.2 | — |

Fallbacks: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

---

## Overview / Brand & Style

**Personality**: Optimistic, trustworthy, warm, and community-oriented.  
The design should feel like a friendly neighborhood park walk with other pet parents — calm teal trust + playful orange energy on a soft cream canvas.

Target feeling: “This is a safe, supportive place where I and my pet belong.”  
Avoid clinical, cold, corporate, or overly childish aesthetics. Prioritize emotional connection, readability, and generous breathing room so content (stories, advice, photos) can shine.

Style keywords: Approachable, soft, human, photographic, supportive.

---

## Colors

- **Primary Teal (`#008080`)**: Main brand color for navigation, links, active states, trust signals, and secondary buttons. Use for calm authority.
- **Accent Warm Orange (`#FF6B35`)**: Primary CTAs, highlights, badges, playful moments, and energy. Use sparingly for maximum impact.
- **Background Cream (`#FAF0E6`)**: Page-level background. Creates warmth and reduces eye strain compared to pure white.
- **Surface White (`#FFFFFF`)**: Cards, modals, form containers, elevated content.
- **Foreground Dark (`#2D3E50` / `#1C3245`)**: Primary text. High contrast on cream/white.
- **Muted Warm Gray (`#9E9E9E`)**: Secondary text, placeholders, borders, icons at rest.

Always maintain WCAG AA contrast minimums. Prefer soft tonal shifts over harsh borders.

---

## Typography

**Primary pairing**:
- Headings & Display → **Plus Jakarta Sans** (friendly rounded terminals, modern warmth)
- Body, UI, labels → **Inter** (excellent screen legibility and neutrality)

**Rules**:
- Use weight contrast for hierarchy (700–800 for headings, 400–500 for body).
- Keep line lengths comfortable (45–75 characters ideal for body).
- Slight negative letter-spacing on large headings only.
- Never use decorative or script fonts for body or UI text.

---

## Components

**Buttons**:
- Primary: Accent orange background, white text, `rounded-md` or `rounded-lg`, medium weight.
- Secondary: Teal outline or soft teal fill, dark text.
- Ghost: Transparent with teal or dark text.
- Always ≥ 44px touch target.

**Cards**:
- White surface, subtle `shadow-sm` or `shadow-md`, `rounded-lg`, generous internal padding (`md`–`lg`).
- Soft hover elevation.

**Inputs & Forms**:
- Clean borders in muted/warm gray, focus ring in primary teal.
- Rounded corners (`md`), comfortable padding.

**Navigation**:
- Clean, spacious. Teal for active/current items. Orange only for primary action (e.g., “Join Community” / hero CTA).

**Community elements** (feeds, comments, profiles — future):
- Soft surfaces, clear visual hierarchy, ample whitespace between posts.
- Avatar circles with subtle borders.

---

## Layout Principles

- Mobile-first, generous whitespace (“never crowd”).
- Consistent vertical rhythm using the spacing scale.
- Prefer soft cards and tonal backgrounds over heavy dividers.
- Max content width ~720–800px for readable long-form community content; wider for marketing/landing grids.
- Photography of real pets should breathe — avoid tight cropping or competing colors.

---

## Depth & Elevation

Soft, natural shadows only (see token values). Prefer elevation through subtle background shifts (cream → white) over strong drop shadows. Avoid heavy skeuomorphism.

---

## Do’s and Don’ts

**Do**:
- Use real pet photography with names and stories (when available).
- Keep CTAs in accent orange and limited in number.
- Maintain high contrast text.
- Give community content generous space.
- Use soft rounded corners everywhere for approachability.

**Don’t**:
- Use pure black text or pure white backgrounds as default page canvas.
- Overuse the orange accent.
- Apply sharp 0px radius or heavy geometric modernism.
- Mix more than two type families.
- Create dense, high-information-density layouts that feel stressful.

---

## Responsive Behavior

- Touch targets minimum 44×44px.
- Stack cards and reduce columns early on mobile.
- Increase body line-height slightly on small screens.
- Ensure cream background remains comfortable in both light mode (primary) and any future dark mode.

---

## Agent Prompt Guide

When generating UI:

> Follow the PetBond Community DESIGN.md strictly. Use Plus Jakarta Sans for all headings and Inter for body/UI. Background is cream (#FAF0E6), cards are white, primary actions use warm orange (#FF6B35), trust elements use teal (#008080). Keep the interface soft, warm, spacious, and emotionally supportive. Prioritize readability and real pet photography.

---

## Implementation map (this repo)

| Token area | Where applied |
| --- | --- |
| CSS variables | `src/app/globals.css` `:root` |
| Fonts | `src/app/layout.tsx` (next/font) |
| Buttons / forms / cards / hero / modal | `src/app/globals.css` component classes |
| Path PDF palettes | Unchanged — see `PDF_DESIGN.md` |
