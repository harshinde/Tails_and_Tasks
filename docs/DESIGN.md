---
name: Paws & Tasks (PetBond Community System)
description: Warm, trustworthy design system for pawsandtasks.com — a pet-parent platform focused on free pet care checklists, email sign-ups, the Pathfinder quiz, and PDF toolkit delivery. Optimistic, approachable, and emotionally supportive.
version: 1.2
site: https://pawsandtasks.com/
---

# DESIGN.md — Paws & Tasks (PetBond Community System)

Warm, trustworthy design system for [pawsandtasks.com](https://pawsandtasks.com/) — free pet care checklists, email sign-ups, the Pathfinder quiz, and PDF toolkit delivery. Optimistic, approachable, and emotionally supportive.

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

**Site Context (pawsandtasks.com)**:  
Primary goal is email list growth via free resources. Users can either grab the foundational “Welcome Home” starter kit instantly or take the Pathfinder quiz for a custom toolkit. All resources are delivered as PDF checklists via email. Attract traffic from Instagram and similar channels.

Target feeling: “This is a safe, supportive place where I and my pet belong.”  
Avoid clinical, cold, corporate, or overly childish aesthetics. Prioritize emotional connection, readability, and generous breathing room.

Style keywords: Approachable, soft, human, photographic, supportive.

---

## Colors

- **Primary Teal (`#008080`)**: Navigation, links, active Pathfinder states, trust signals.
- **Accent Warm Orange (`#FF6B35`)**: Primary CTAs (“Send My Free Kit”), highlights, selected states.
- **Background Cream (`#FAF0E6`)**: Page-level background.
- **Surface White (`#FFFFFF`)**: Signup form card, Pathfinder cards, elevated content.
- **Foreground Dark (`#2D3E50`)**: Primary text.
- **Muted Warm Gray (`#9E9E9E`)**: Secondary text, placeholders, borders.

Always maintain WCAG AA contrast. Prefer soft tonal shifts.

---

## Typography

- Headings & Display → **Plus Jakarta Sans** (friendly rounded terminals)
- Body, UI, labels → **Inter**

Rules: Strong weight contrast, comfortable line lengths (45–75 characters), no decorative fonts for body/UI.

---

## Iconography

Canonical source: **[ICONOGRAPHY.md](./ICONOGRAPHY.md)**

**Style**: Soft rounded terminals, consistent ~1.5–2px stroke, 24×24 grid, organic-friendly shapes.

**Signature**: Soft Paw + Heart (logo mark, favicon, decorative accent).

**Homepage starter set**: Soft Paw + Heart · Free Resource / Gift · Email Envelope + Paw · Completed Check · Download / Instant Access · Checklist Paw · Progress Tracker · four Pathfinder category icons · Community / Join.

**Color variants**: Teal default · darker teal / soft fill hover · orange active/CTA · success green completion · muted disabled.

---

## Components (Site-Specific)

**Primary Button** (“Send My Free Kit”): Accent orange background, white text, rounded-lg, ≥44px height.

**Pathfinder Cards**: White surface, rounded-lg, soft shadow, generous padding. Hover elevation. Selected state uses teal border or soft fill + orange accent.

**Email Form**: Clean muted border, teal focus ring, rounded-md, comfortable padding inside a white card.

**Success State**: Soft success treatment with Completed Check + clear “Check your inbox for your PDF” messaging.

---

## Layout Principles

- Mobile-first, generous whitespace.
- Max content width ~720–800px for readability.
- Soft cards and tonal backgrounds preferred over heavy dividers.
- Real pet photography (named when possible) should breathe.
- Hero + Form + Pathfinder should feel calm and low-friction.

---

## Homepage Wireframe (Hero + Form + Pathfinder)

Mobile-first structure for the landing page:

1. **Header (sticky, minimal)** — Soft Paw + Heart logo + “Paws & Tasks” wordmark left; optional “Join 10,000+” social proof right; cream background; compact height.
2. **Hero** — Cream canvas; max width ~720–800px; display/h1 headline; body-lg subheadline; large orange “Send My Free Kit” CTA; teal secondary link to Pathfinder; optional pet illustration on desktop.
3. **Email Signup Form Block** — White card (`shadow-md`, `rounded-lg`); Email Envelope + Paw / gift icon; email fields with teal focus; full-width orange CTA; muted micro-copy.
4. **Pathfinder** — Soft cream or primary-light section; h2 + short support line; 1 → 2 → 4 column card grid; category icons; hover elevation; selected teal/orange treatment; “Great choice…” micro-copy after selection; continue into quiz/signup.
5. **Success** — Soft success/teal treatment; Completed Check + Soft Paw + Heart; clear inbox/PDF messaging; optional Instagram/community row.

Layout notes: consistent spacing scale rhythm; large touch targets; never crowd; interactive icons use teal default / orange active CTA variants.

---

## Do’s and Don’ts

**Do**:
- Use the dual path (instant kit or Pathfinder) clearly.
- Emphasize PDF-via-email delivery.
- Keep CTAs limited and in accent orange.
- Give Pathfinder cards clear icons and breathing room.
- Maintain high contrast and soft rounded language everywhere.

**Don’t**:
- Overuse orange.
- Create dense or stressful layouts.
- Use pure black text or pure white as default backgrounds.
- Mix more than two type families.
- Make the quiz feel long or clinical.

---

## Agent Prompt Guide

> Follow this DESIGN.md strictly for pawsandtasks.com. Use Plus Jakarta Sans for headings and Inter for body. Background is cream (#FAF0E6), cards are white, primary CTAs use warm orange (#FF6B35), trust and active states use teal (#008080). Keep everything soft, warm, spacious, and supportive. Support the existing dual path: email signup for the Welcome Home starter kit and the four-option Pathfinder quiz. All resources deliver as PDFs via email. Use the defined soft rounded icon set with the listed color variants.

---

## Implementation map (this repo)

| Token area | Where applied |
| --- | --- |
| CSS variables | `src/app/globals.css` `:root` |
| Fonts | `src/app/layout.tsx` (next/font) |
| Header / logo | `src/components/SiteHeader.tsx`, `src/components/icons/*` |
| Icon system | `docs/ICONOGRAPHY.md` · `src/components/icons/*` |
| Hero / form / cards / modal | `src/app/globals.css` + homepage components |
| Path PDF palettes | Unchanged — see `PDF_DESIGN.md` |
