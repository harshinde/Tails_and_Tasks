#!/usr/bin/env python3
"""Generate public/toolkits/guide.pdf (Behavior & Habit Mastery — The Guide)."""

from pathlib import Path

import weasyprint

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "content" / "toolkits" / "guide_habit_mastery.html"
PDF_PATH = ROOT / "public" / "toolkits" / "guide.pdf"

html_content = r"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
    @page {
        size: A4;
        margin: 18mm 20mm 22mm 20mm;
        background-color: #FAFAFA;
        @bottom-left {
            content: "Paws & Tasks · The Guide";
            font-family: 'Helvetica', sans-serif;
            font-size: 8pt;
            color: #3D5A80;
        }
        @bottom-right {
            content: "Page " counter(page) " of " counter(pages);
            font-family: 'Helvetica', sans-serif;
            font-size: 9pt;
            color: #3D5A80;
        }
    }
    body {
        font-family: 'Helvetica', 'Arial', sans-serif;
        color: #293241;
        background-color: #FAFAFA;
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
        font-size: 30pt;
        color: #E07A5F;
        margin: 8px 0 6px;
        font-style: italic;
    }
    .subtitle {
        font-size: 13pt;
        color: #293241;
        margin-bottom: 22px;
    }
    h2 {
        font-size: 17pt;
        color: #E07A5F;
        border-bottom: 2px solid #3D5A80;
        padding-bottom: 5px;
        margin-top: 0;
        margin-bottom: 12px;
        page-break-after: avoid;
    }
    h3 {
        font-size: 13pt;
        color: #3D5A80;
        margin-top: 16px;
        margin-bottom: 8px;
    }
    p { margin: 0 0 10px; }
    .brand {
        font-family: 'Georgia', serif;
        font-size: 13pt;
        color: #E07A5F;
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
        color: #3D5A80;
        margin-bottom: 10px;
    }
    .cover {
        text-align: center;
        padding-top: 36px;
        page-break-after: always;
    }
    .cover-marks {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        margin-bottom: 12px;
    }
    .cover-marks img {
        width: 44px;
        height: 44px;
    }
    .cover-intro {
        margin-top: 28px;
        text-align: left;
        background-color: #FFFFFF;
        padding: 24px 28px;
        border-left: 6px solid #E07A5F;
        border-radius: 4px;
        font-size: 11.5pt;
        box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    }
    .page-break { page-break-before: always; }
    .callout {
        background-color: #FFFFFF;
        border: 1px solid #3D5A80;
        padding: 14px 16px;
        border-radius: 4px;
        margin: 14px 0 0;
    }
    .callout h3 { margin-top: 0; }
    .span-tips {
        width: 100%;
        border-collapse: collapse;
        margin: 12px 0 16px;
        background: #FFFFFF;
    }
    .span-tips th, .span-tips td {
        border: 1px solid #3D5A80;
        padding: 10px 12px;
        text-align: left;
        font-size: 10pt;
        vertical-align: top;
    }
    .span-tips th {
        background-color: #3D5A80;
        color: #FFFFFF;
        font-weight: bold;
        width: 28%;
    }
    .checklist {
        list-style: none;
        padding-left: 0;
        margin: 0 0 8px;
    }
    .checklist li {
        margin-bottom: 6px;
        padding-left: 30px;
        position: relative;
        font-size: 10pt;
    }
    .checklist li::before {
        content: '';
        position: absolute;
        left: 4px;
        top: 2px;
        width: 14px;
        height: 14px;
        border: 2px solid #3D5A80;
        border-radius: 3px;
        background-color: #FFFFFF;
    }
    .mission-box {
        background-color: #3D5A80;
        color: #FFFFFF;
        padding: 16px 18px;
        border-radius: 4px;
        margin-bottom: 16px;
    }
    .mission-box p { margin-bottom: 8px; }
    .mission-box .fill-blank {
        border-bottom: 1px solid #FFFFFF;
        display: inline-block;
        min-width: 180px;
        height: 1em;
    }
    .tracker-grid {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
        background-color: #FFFFFF;
    }
    .tracker-grid th, .tracker-grid td {
        border: 1px solid #3D5A80;
        padding: 8px;
        text-align: center;
        width: 14.28%;
    }
    .tracker-grid th {
        background-color: #3D5A80;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 9pt;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .tracker-grid td {
        height: 44px;
        vertical-align: top;
        text-align: left;
        font-size: 8pt;
        color: #3D5A80;
        padding: 5px;
    }
    .cell-cue {
        display: block;
        width: 12px;
        height: 12px;
        border: 1.5px solid #3D5A80;
        border-radius: 2px;
        margin-bottom: 4px;
    }
    .notes-line {
        border-bottom: 1px dotted #3D5A80;
        height: 14px;
        margin-top: 2px;
        opacity: 0.45;
    }
    .reflect {
        width: 100%;
        border-collapse: collapse;
        margin-top: 14px;
        background: #FFFFFF;
    }
    .reflect th, .reflect td {
        border: 1px solid #3D5A80;
        padding: 10px 12px;
        font-size: 10pt;
        text-align: left;
    }
    .reflect th {
        background: #E07A5F;
        color: #FFFFFF;
        width: 18%;
        font-weight: bold;
    }
    .reflect td { height: 28px; }
    .intervention-box {
        background-color: #FFFFFF;
        border-left: 4px solid #E07A5F;
        padding: 10px 14px;
        margin-bottom: 10px;
        border-radius: 0 4px 4px 0;
    }
    .intervention-box h3 {
        margin-top: 0;
        margin-bottom: 4px;
        color: #E07A5F;
        font-size: 12pt;
    }
    .goal {
        font-size: 10pt;
        margin-bottom: 6px;
    }
    .alt-note {
        font-size: 9pt;
        color: #3D5A80;
        margin: 4px 0 0;
        font-style: italic;
    }
    .stop-line {
        font-size: 9pt;
        font-weight: bold;
        color: #E07A5F;
        margin: 4px 0 0;
    }
    .cta-box {
        margin-top: 12px;
        background: #FFFFFF;
        border: 1px dashed #E07A5F;
        border-radius: 4px;
        padding: 12px 14px;
        font-size: 10pt;
    }
    .cta-box strong { color: #E07A5F; }
</style>
</head>
<body>

    <!-- COVER -->
    <div class="cover">
        <div class="cover-marks">
            <img src="public/icons/01-soft-paw-heart.svg" alt="" />
            <img src="public/icons/09-guide-star-treat.svg" alt="" />
        </div>
        <div class="brand">Paws &amp; Tasks</div>
        <div class="path-label">The Guide</div>
        <h1>Behavior &amp; Habit Mastery</h1>
        <div class="subtitle">The 5-Minute Guide to Lasting Change</div>

        <div class="cover-intro">
            <p><strong>Better behavior, five minutes at a time.</strong></p>
            <p>Long, exhausting training sessions rarely stick — and they leave everyone drained. Your pet’s brain thrives on short, clear wins repeated often.</p>
            <p>This kit is your 5-Minute Philosophy in action: pick one habit, practice briefly every day, and leave them wanting more. Small intervals build real confidence. You’ve got this.</p>
        </div>
    </div>

    <!-- PHILOSOPHY + ATTENTION SPAN + RULES -->
    <div class="page-break">
        <h2>1. The 5-Minute Philosophy</h2>
        <p>High-frequency, low-duration practice beats weekend marathons. Five focused minutes a day for a week does more than one long session once a week.</p>

        <h3>Match the session to their attention span</h3>
        <p>Use the answer from your Pathfinder quiz (or what you notice at home) to set a realistic starting length:</p>
        <table class="span-tips">
            <tr>
                <th>Distracted instantly</th>
                <td>Start with <strong>2–3 minutes</strong> and fewer reps. End on a win. Add 30 seconds only when they stay engaged.</td>
            </tr>
            <tr>
                <th>Focused for a few minutes</th>
                <td>Classic <strong>5-minute</strong> sessions. One clear cue, high-value rewards, stop while they’re still interested.</td>
            </tr>
            <tr>
                <th>Highly focused</th>
                <td>Keep the <strong>5-minute</strong> cap, then add one mild distraction (a step toward the door, a soft sound nearby).</td>
            </tr>
        </table>

        <div class="callout">
            <h3>The Core Rules</h3>
            <ul class="checklist">
                <li><strong>Stop while you’re ahead</strong> — end before they lose interest; leave them wanting more.</li>
                <li><strong>Consistency over intensity</strong> — habits form through repetition, not exhaustion.</li>
                <li><strong>Stack onto real life</strong> — tag practice onto something you already do (before meals, before leash/harness, after play).</li>
            </ul>
        </div>
    </div>

    <!-- 21-DAY TRACKER -->
    <div class="page-break">
        <h2>2. The 21-Day Habit Tracker</h2>

        <div class="mission-box">
            <p><strong>Your mission:</strong> Pick <em>one</em> behavior (waiting at the door, loose-leash walking, mat settle, quieter greetings). Don’t fix everything at once. Practice for up to five focused minutes, daily, for 21 days.</p>
            <p><strong>Target behavior:</strong> <span class="fill-blank" style="width: 320px;"></span></p>
            <p><strong>Trigger (when I’ll do it):</strong> <span class="fill-blank" style="width: 280px;"></span></p>
            <p><strong>Reward (treat / toy / praise):</strong> <span class="fill-blank" style="width: 255px;"></span></p>
        </div>

        <p style="font-size: 9.5pt; margin-bottom: 6px; color: #3D5A80;">Check the box when you practiced. Use the dotted line for a quick note (mood, location, win).</p>

        <table class="tracker-grid">
            <tr>
                <th>Day 1</th><th>Day 2</th><th>Day 3</th><th>Day 4</th><th>Day 5</th><th>Day 6</th><th>Day 7</th>
            </tr>
            <tr>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
            </tr>
            <tr>
                <th>Day 8</th><th>Day 9</th><th>Day 10</th><th>Day 11</th><th>Day 12</th><th>Day 13</th><th>Day 14</th>
            </tr>
            <tr>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
            </tr>
            <tr>
                <th>Day 15</th><th>Day 16</th><th>Day 17</th><th>Day 18</th><th>Day 19</th><th>Day 20</th><th>Day 21</th>
            </tr>
            <tr>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
                <td><span class="cell-cue"></span><div class="notes-line"></div></td>
            </tr>
        </table>

        <table class="reflect">
            <tr>
                <th>Week 1</th>
                <td>What felt easiest?</td>
            </tr>
            <tr>
                <th>Week 2</th>
                <td>Where did you practice — and what changed?</td>
            </tr>
            <tr>
                <th>Week 3</th>
                <td>What’s the next tiny upgrade?</td>
            </tr>
        </table>
    </div>

    <!-- BIG THREE -->
    <div class="page-break">
        <h2>3. The Big Three — Quick Interventions</h2>
        <p style="margin-bottom: 8px;">Checklist drills for common Guide-path friction points. Stay inside your 5-minute cap.</p>

        <div class="intervention-box">
            <h3>1. Leash pulling (walks)</h3>
            <p class="goal"><strong>Goal:</strong> Tight leash = pause. Loose leash = walk continues.</p>
            <ul class="checklist">
                <li>The moment the leash goes tight, plant your feet (become a “statue”). Don’t yank back.</li>
                <li>Wait quietly for any slack — a step back, a look toward you, or a sit.</li>
                <li>Mark it with a cheerful “Yes!” and resume walking right away.</li>
                <li>Repeat in short bursts near home before harder routes.</li>
            </ul>
            <p class="alt-note"><strong>Cat alternative:</strong> Door manners / mat settle — ask for a pause on a mat before the door opens; reward calm feet, then release.</p>
            <p class="stop-line">Stop while you’re ahead.</p>
        </div>

        <div class="intervention-box">
            <h3>2. Excessive vocalizing (barking or meowing)</h3>
            <p class="goal"><strong>Goal:</strong> Shift from noise-first to looking to you for the next cue.</p>
            <ul class="checklist">
                <li><strong>Alert noise</strong> (window/door): calmly acknowledge (“Thank you”), glance at the trigger, then guide them away with a high-value treat.</li>
                <li><strong>Demand noise</strong> (for food/play/attention): pause engagement — turn slightly aside until you get ~3 seconds of quiet.</li>
                <li>Reward the quiet the moment it appears; don’t wait for perfect silence forever.</li>
                <li>Practice once daily in the room where noise usually starts.</li>
            </ul>
            <p class="stop-line">Stop while you’re ahead.</p>
        </div>

        <div class="intervention-box">
            <h3>3. Ignoring cues / commands</h3>
            <p class="goal"><strong>Goal:</strong> Rebuild the value of your voice so listening feels worth it.</p>
            <ul class="checklist">
                <li>In a quiet room, say their name once in a happy tone.</li>
                <li>When they look at you, mark with “Yes!” and deliver a treat (or toss it).</li>
                <li>Repeat ~8–10 reps, then end — don’t grind until they zone out.</li>
                <li>Level up: same game in the hallway, then near a mild distraction. Say the cue once; don’t stack repeats.</li>
            </ul>
            <p class="stop-line">Stop while you’re ahead.</p>
        </div>

        <div class="cta-box">
            <p><strong>Want more daily trackers and custom drills?</strong> You’re already on The Guide path — keep practicing with this kit, and explore more Pathfinder tools at <strong>pawsandtasks.com</strong> whenever you’re ready for the next step.</p>
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
