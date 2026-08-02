# Toolkit PDFs (email attachments)

Gated path bundles attached by `/api/subscribe` when present at:

```text
public/toolkits/newcomer.pdf      # Hero “Welcome Home Starter Kit” ✓ shipped
public/toolkits/guide.pdf
public/toolkits/guardian.pdf      # Pathfinder Guardian kit ✓ shipped
public/toolkits/best-friend.pdf
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

## `guardian.pdf` — Health & Nutrition Vault (shipped)

Pathfinder **guardian** email attachment (`path_id=guardian`). Sections:

1. The Longevity Mindset (+ life-stage tips)  
2. Medical & Vitals Ledger (contacts, meds, vaccine log)  
3. Body Condition & Nutrition (BCS + meal/hydration)  
4. Daily Preventative Routines (dental, joints, weight)  

**Regenerate after HTML edits:**

```bash
python3 scripts/generate_guardian_pdf.py
```

Source: `content/toolkits/guardian_health_vault.html`  
Design tokens: Guardian palette in `docs/PDF_DESIGN.md`.
