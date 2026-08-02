#!/usr/bin/env python3
"""Generate public/toolkits/best-friend.pdf (Lifestyle & Play Bundle — The Best Friend)."""

from pathlib import Path

import weasyprint

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "content" / "toolkits" / "best_friend_lifestyle_play.html"
PDF_PATH = ROOT / "public" / "toolkits" / "best-friend.pdf"

html_content = r"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
    @page {
        size: A4;
        margin: 18mm 20mm 22mm 20mm;
        background-color: #FFFDF7;
        @bottom-left {
            content: "Paws & Tasks · The Best Friend";
            font-family: 'Helvetica', sans-serif;
            font-size: 8pt;
            color: #4ECDC4;
        }
        @bottom-right {
            content: "Page " counter(page) " of " counter(pages);
            font-family: 'Helvetica', sans-serif;
            font-size: 9pt;
            color: #4ECDC4;
        }
    }
    body {
        font-family: 'Helvetica', 'Arial', sans-serif;
        color: #1A1A1A;
        background-color: #FFFDF7;
        margin: 0;
        padding: 0;
        line-height: 1.55;
        box-sizing: border-box;
        font-size: 11pt;
    }
    h1, h2, h3 {
        font-family: 'Georgia', serif;
        font-weight: normal;
    }
    h1 {
        font-size: 28pt;
        color: #4ECDC4;
        margin: 8px 0 6px;
        font-style: italic;
    }
    .subtitle {
        font-size: 13pt;
        color: #1A1A1A;
        margin-bottom: 22px;
    }
    h2 {
        font-size: 17pt;
        color: #4ECDC4;
        border-bottom: 2px solid #FFB7B2;
        padding-bottom: 5px;
        margin-top: 0;
        margin-bottom: 12px;
        page-break-after: avoid;
    }
    h3 {
        font-size: 12.5pt;
        color: #1A1A1A;
        margin-top: 12px;
        margin-bottom: 6px;
    }
    p { margin: 0 0 10px; }
    .brand {
        font-family: 'Georgia', serif;
        font-size: 13pt;
        color: #4ECDC4;
        letter-spacing: 0.04em;
        margin-bottom: 6px;
    }
    .path-label {
        display: inline-block;
        font-family: 'Helvetica', sans-serif;
        font-size: 9pt;
        font-weight: bold;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #FFB7B2;
        margin-bottom: 10px;
    }
    .cover {
        text-align: center;
        padding-top: 40px;
        page-break-after: always;
    }
    .cover-marks {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        margin-bottom: 14px;
    }
    .cover-marks img {
        width: 44px;
        height: 44px;
    }
    .cover-intro {
        margin-top: 28px;
        text-align: left;
        background-color: #FFFFFF;
        padding: 22px 26px;
        border-left: 6px solid #4ECDC4;
        border-radius: 4px;
        font-size: 11.5pt;
        box-shadow: 0 2px 5px rgba(0,0,0,0.03);
    }
    .page-break { page-break-before: always; }
    .checklist {
        list-style: none;
        padding-left: 0;
        margin: 0 0 8px;
    }
    .checklist li {
        margin-bottom: 7px;
        padding-left: 30px;
        position: relative;
        font-size: 10.5pt;
    }
    .checklist li::before {
        content: '';
        position: absolute;
        left: 4px;
        top: 2px;
        width: 14px;
        height: 14px;
        border: 2px solid #FFB7B2;
        border-radius: 3px;
        background-color: #FFFFFF;
    }
    .vibe-table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0 12px;
        background: #FFFFFF;
    }
    .vibe-table th, .vibe-table td {
        border: 1px solid #4ECDC4;
        padding: 9px 11px;
        text-align: left;
        font-size: 10pt;
        vertical-align: top;
    }
    .vibe-table th {
        background-color: #4ECDC4;
        color: #FFFFFF;
        font-weight: bold;
        width: 28%;
    }
    .project-box, .recipe-box, .kit-box {
        background-color: #FFFFFF;
        border-left: 4px solid #FFB7B2;
        padding: 10px 14px;
        margin-bottom: 10px;
        border-radius: 0 4px 4px 0;
    }
    .project-box h3, .recipe-box h3, .kit-box h3 {
        margin-top: 0;
        margin-bottom: 4px;
        color: #4ECDC4;
        font-size: 12pt;
    }
    .goal {
        font-size: 10pt;
        margin-bottom: 6px;
    }
    .note {
        font-size: 9pt;
        color: #4ECDC4;
        font-style: italic;
        margin: 4px 0 0;
    }
    .two-col {
        width: 100%;
        border-collapse: separate;
        border-spacing: 10px 0;
        margin: 0 -5px;
    }
    .two-col td {
        width: 50%;
        vertical-align: top;
        padding: 0;
    }
    .kit-box {
        border-left-color: #4ECDC4;
        height: 100%;
    }
    .accessories {
        background: #FFFFFF;
        border: 1px solid #FFB7B2;
        border-radius: 4px;
        padding: 12px 14px;
        margin-top: 10px;
    }
    .accessories h3 { margin-top: 0; color: #4ECDC4; }
    .cta-box {
        margin-top: 12px;
        background: #FFFFFF;
        border: 1px dashed #4ECDC4;
        border-radius: 4px;
        padding: 12px 14px;
        font-size: 10pt;
    }
    .cta-box strong { color: #4ECDC4; }
    .fill-row { margin: 0 0 6px; font-size: 10.5pt; }
    .fill-blank {
        border-bottom: 1px solid #4ECDC4;
        display: inline-block;
        min-width: 180px;
        height: 1em;
    }
</style>
</head>
<body>

    <!-- COVER -->
    <div class="cover">
        <div class="cover-marks">
            <img src="public/icons/01-soft-paw-heart.svg" alt="" />
            <img src="public/icons/11-best-friend-leash.svg" alt="" />
        </div>
        <div class="brand">Paws &amp; Tasks</div>
        <div class="path-label">The Best Friend</div>
        <h1>Lifestyle &amp; Play Bundle</h1>
        <div class="subtitle">Everyday adventures and meaningful enrichment</div>

        <div class="cover-intro">
            <p><strong>Play, bond, and spoil them a little.</strong></p>
            <p>This path is about joy: sensory games, weekend DIY, homemade treats, and shared outings that deepen your connection.</p>
            <p>Pick a vibe, try one project, bake one treat, pack one kit. Small playful habits add up. You’ve got this.</p>
        </div>
    </div>

    <!-- PHILOSOPHY + WEEKEND VIBE -->
    <div class="page-break">
        <h2>1. The Enrichment Philosophy</h2>
        <p>Physical exercise helps, but brains need jobs too. A tired mind is a happier housemate.</p>
        <ul class="checklist">
            <li><strong>Brain work is tiring</strong> — 10–15 minutes of sniffing, licking, or problem-solving can rival a long walk.</li>
            <li><strong>Destruction is often boredom</strong> — chewing and digging are DIY “jobs.” Offer a puzzle instead.</li>
            <li><strong>Choice builds confidence</strong> — letting them solve and choose reduces stress and builds trust.</li>
        </ul>

        <h3>Pick your weekend vibe</h3>
        <p>Use your Pathfinder answer (or today’s mood) to choose where to start:</p>
        <table class="vibe-table">
            <tr>
                <th>Hiking &amp; outdoors</th>
                <td>Pack the Trail &amp; Hike kit. Add one short recall game with high-value treats.</td>
            </tr>
            <tr>
                <th>Cozy couch cuddles</th>
                <td>Do a DIY indoor puzzle + bake a small treat batch. Keep the energy soft and close.</td>
            </tr>
            <tr>
                <th>Park socializing</th>
                <td>Pack the Cafe &amp; Patio / park kit. Practice short settles with a long-lasting chew.</td>
            </tr>
        </table>
        <p class="fill-row">This weekend’s vibe: <span class="fill-blank" style="width: 280px;"></span></p>
    </div>

    <!-- DIY PROJECTS -->
    <div class="page-break">
        <h2>2. DIY Weekend Projects</h2>
        <p>Great enrichment doesn’t need a shopping spree. Start with what you already have.</p>

        <div class="project-box">
            <h3>Project 1: Towel snuffle roll</h3>
            <p class="goal"><strong>Goal:</strong> Foraging with their nose (dogs love this; many cats enjoy a smaller version).</p>
            <ul class="checklist">
                <li>Lay an old towel flat. Sprinkle kibble or tiny treats across it.</li>
                <li>Roll it up like a yoga mat (loose for beginners; light knot if they’re advanced).</li>
                <li>Let them sniff, unroll, and forage. Supervise the whole time.</li>
                <li>Put the towel away when play ends so it stays special.</li>
            </ul>
        </div>

        <div class="project-box">
            <h3>Project 2: Muffin tin puzzle</h3>
            <p class="goal"><strong>Goal:</strong> Problem-solving to uncover hidden rewards.</p>
            <ul class="checklist">
                <li>Drop treats into a few cups of a muffin tin.</li>
                <li>Cover every cup with tennis balls or rolled socks.</li>
                <li>Invite them to remove covers and find the snacks.</li>
                <li>Skip anything small enough to swallow. Supervise always.</li>
            </ul>
            <p class="note"><strong>Cat-friendly alt:</strong> Paper-bag crinkle trail — open a paper bag on its side, drop a few treats inside, and let them bat and hunt (remove handles / plastic).</p>
        </div>

        <div class="accessories">
            <h3>Fun accessories (quick wins)</h3>
            <ul class="checklist">
                <li>Check ID tag + microchip info are current before outings.</li>
                <li>Rotate one cozy item (bed, blanket, bandana) to keep home feeling fresh.</li>
                <li>Keep a “go bag” hook by the door for leash, waste bags, and collapsible bowl.</li>
            </ul>
        </div>
    </div>

    <!-- RECIPES -->
    <div class="page-break">
        <h2>3. The Spoil-Them Recipe Box</h2>
        <p>Simple kitchen treats for milestones or a regular Tuesday. Confirm ingredients are safe for your pet; when unsure, ask your vet.</p>

        <div class="recipe-box">
            <h3>Peanut butter &amp; oat drops</h3>
            <p class="goal"><strong>Best for:</strong> Dogs (xylitol-free peanut butter only).</p>
            <p><strong>Ingredients</strong></p>
            <ul class="checklist">
                <li>1 cup rolled oats</li>
                <li>1/3 cup natural peanut butter (xylitol-free)</li>
                <li>1 mashed overripe banana</li>
            </ul>
            <p><strong>Steps</strong></p>
            <ul class="checklist">
                <li>Heat oven to 350°F (175°C).</li>
                <li>Mix into a sticky dough; roll bite-size balls; flatten lightly.</li>
                <li>Bake 12–15 minutes until golden. Cool fully before serving.</li>
            </ul>
        </div>

        <div class="recipe-box">
            <h3>Watermelon &amp; yogurt pupsicles</h3>
            <p class="goal"><strong>Best for:</strong> Dogs. For cats, try a tiny smear of plain meat baby food frozen on a lick mat (no onion/garlic).</p>
            <p><strong>Ingredients</strong></p>
            <ul class="checklist">
                <li>2 cups seedless watermelon, cubed</li>
                <li>1/2 cup plain unsweetened yogurt (xylitol-free)</li>
            </ul>
            <p><strong>Steps</strong></p>
            <ul class="checklist">
                <li>Blend until smooth.</li>
                <li>Pour into ice-cube or silicone molds.</li>
                <li>Freeze at least 4 hours. Serve one piece at a time.</li>
            </ul>
        </div>
        <p class="note">Introduce new foods slowly. Skip anything your pet can’t have. Store leftovers sealed in the fridge/freezer.</p>
    </div>

    <!-- ADVENTURE KITS + CTA -->
    <div class="page-break">
        <h2>4. Weekend Adventure Checklists</h2>
        <p style="margin-bottom: 8px;">Pack once, go often. Check off what you need for today’s vibe.</p>

        <table class="two-col">
            <tr>
                <td>
                    <div class="kit-box">
                        <h3>Cafe &amp; patio / park</h3>
                        <ul class="checklist">
                            <li>Long-lasting chew or stuffed Kong</li>
                            <li>Collapsible water bowl + fresh water</li>
                            <li>Short non-retractable leash</li>
                            <li>Waste bags (+ smell-proof pouch)</li>
                            <li>High-reward treats for settle/recall</li>
                        </ul>
                    </div>
                </td>
                <td>
                    <div class="kit-box">
                        <h3>Trail &amp; hike</h3>
                        <ul class="checklist">
                            <li>Water + collapsible bowl</li>
                            <li>Pet-safe insect / tick protection</li>
                            <li>Mini first aid (tweezers, gauze, vet wrap, wipes)</li>
                            <li>Extra recall treats</li>
                            <li>Waste bags</li>
                        </ul>
                    </div>
                </td>
            </tr>
        </table>

        <div class="kit-box" style="margin-top: 4px;">
            <h3>Cozy day at home</h3>
            <ul class="checklist">
                <li>One DIY puzzle ready (towel roll or paper-bag trail)</li>
                <li>A cooled homemade treat (or lickable freeze)</li>
                <li>Soft blanket / cuddle spot cleared</li>
                <li>5-minute play + 5-minute settle before screens-on evening</li>
            </ul>
        </div>

        <div class="cta-box">
            <p><strong>Want more play ideas and custom kits?</strong> You’re on The Best Friend path — keep spoiling them with this bundle, and explore more Pathfinder tools at <strong>pawsandtasks.com</strong> whenever you’re ready.</p>
            <p style="margin-bottom: 0;">Building better habits, one path at a time.</p>
        </div>
    </div>

</body>
</html>
"""


def main() -> None:
    HTML_PATH.parent.mkdir(parents=True, exist_ok=True)
    PDF_PATH.parent.mkdir(parents=True, exist_ok=True)
    HTML_PATH.write_text(html_content.strip() + "\n", encoding="utf-8")
    weasyprint.HTML(filename=str(HTML_PATH), base_url=str(ROOT)).write_pdf(str(PDF_PATH))
    print(f"wrote {HTML_PATH.relative_to(ROOT)}")
    print(f"wrote {PDF_PATH.relative_to(ROOT)} ({PDF_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
