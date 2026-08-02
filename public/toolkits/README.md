# Toolkit PDFs (email attachments)

Gated path bundles attached by `/api/subscribe` when present at:

```text
public/toolkits/newcomer.pdf      # Hero “Welcome Home Starter Kit” ✓ shipped
public/toolkits/guide.pdf
public/toolkits/guardian.pdf
public/toolkits/best-friend.pdf   # Pathfinder Best Friend kit ✓ shipped
```

## `newcomer.pdf` — Welcome Home Starter Kit (shipped)

One compiled multipage PDF for hero **Send My Free Kit** emails. Sections:

1. Home Safety Checklist  
2. Pet Care Schedule Templates  
3. The 10 Essential Newcomer Checklists  
4. Pet Health Record Sheets  
5. Behavior & Routine Guide  

**Regenerate after HTML edits:**

```bash
pip install weasyprint   # once
python3 scripts/generate_newcomer_pdf.py
```

Source: `content/toolkits/newcomer_welcome_kit.html`  
Design tokens: Newcomer palette in `docs/PDF_DESIGN.md`.

## `best-friend.pdf` — Lifestyle & Play Bundle (shipped)

Pathfinder **best-friend** email attachment (`path_id=best-friend`). Sections:

1. The Enrichment Philosophy (+ weekend vibe picker)  
2. DIY Weekend Projects (+ accessories quick wins)  
3. The Spoil-Them Recipe Box  
4. Weekend Adventure Checklists (patio, trail, cozy day)  

**Regenerate after HTML edits:**

```bash
python3 scripts/generate_best_friend_pdf.py
```

Source: `content/toolkits/best_friend_lifestyle_play.html`  
Design tokens: Best Friend palette in `docs/PDF_DESIGN.md`.
