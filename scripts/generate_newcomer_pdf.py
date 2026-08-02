#!/usr/bin/env python3
"""Generate public/toolkits/newcomer.pdf (Welcome Home Starter Kit)."""

from pathlib import Path

import weasyprint

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "content" / "toolkits" / "newcomer_welcome_kit.html"
PDF_PATH = ROOT / "public" / "toolkits" / "newcomer.pdf"

html_content = r"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
    @page {
        size: A4;
        margin: 20mm;
        background-color: #f7f9fc;
        @bottom-right {
            content: "Page " counter(page) " of " counter(pages);
            font-family: 'Helvetica', sans-serif;
            font-size: 9pt;
            color: #82a0d8;
        }
    }
    body {
        font-family: 'Helvetica', 'Arial', sans-serif;
        color: #2c3e50;
        background-color: #f7f9fc;
        margin: 0;
        padding: 0;
        line-height: 1.6;
        box-sizing: border-box;
    }
    h1, h2, h3 {
        font-family: 'Georgia', serif;
        font-weight: normal;
    }
    h1 {
        font-size: 32pt;
        color: #82a0d8;
        margin-bottom: 5px;
        font-style: italic;
    }
    .subtitle {
        font-size: 14pt;
        color: #2c3e50;
        margin-bottom: 30px;
    }
    h2 {
        font-size: 18pt;
        color: #82a0d8;
        border-bottom: 2px solid #ffd670;
        padding-bottom: 5px;
        margin-top: 40px;
        page-break-after: avoid;
    }
    h3 {
        font-size: 14pt;
        color: #2c3e50;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .cover {
        text-align: center;
        padding-top: 100px;
        page-break-after: always;
    }
    .cover-intro {
        margin-top: 50px;
        text-align: left;
        background-color: #ffffff;
        padding: 30px;
        border-left: 6px solid #82a0d8;
        border-radius: 4px;
        font-size: 12pt;
        box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    }
    .page-break {
        page-break-before: always;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        margin-bottom: 30px;
        background-color: #ffffff;
    }
    th, td {
        border: 1px solid #e1e8f0;
        padding: 12px;
        text-align: left;
        font-size: 11pt;
    }
    th {
        background-color: #82a0d8;
        color: #ffffff;
        font-weight: bold;
    }
    .checklist {
        list-style: none;
        padding-left: 0;
        margin: 0 0 20px 0;
    }
    .checklist li {
        margin-bottom: 12px;
        padding-left: 35px;
        position: relative;
        font-size: 11pt;
    }
    .checklist li::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 2px;
        width: 16px;
        height: 16px;
        border: 2px solid #ffd670;
        border-radius: 4px;
        background-color: #ffffff;
    }
    .numbered-checklist li::before {
        display: none;
    }
    .numbered-checklist li {
        padding-left: 0;
        margin-bottom: 15px;
    }
    .numbered-checklist strong {
        color: #82a0d8;
    }
    .situation-box {
        background-color: #ffffff;
        border-left: 4px solid #ffd670;
        padding: 15px 20px;
        margin-bottom: 20px;
        border-radius: 0 4px 4px 0;
    }
    .situation-box h3 {
        margin-top: 0;
        color: #82a0d8;
    }
    .brand {
        font-family: 'Georgia', serif;
        font-size: 14pt;
        color: #82a0d8;
        letter-spacing: 0.04em;
        margin-bottom: 24px;
    }
</style>
</head>
<body>

    <!-- COVER PAGE -->
    <div class="cover">
        <div class="brand">Paws &amp; Tasks</div>
        <h1>The Welcome Kit</h1>
        <div class="subtitle">Your Foundation for a Happy, Healthy Pet</div>

        <div class="cover-intro">
            <p><strong>Welcome to the start of a beautiful friendship.</strong></p>
            <p>Bringing a new pet home is incredibly exciting, but it can also feel a little overwhelming. This kit is designed to cut through the noise and give you exactly what you need to succeed in these crucial early days.</p>
            <p>Take it one step at a time, practice active optimism, and remember: building a great relationship happens in small, five-minute intervals. You've got this.</p>
        </div>
    </div>

    <!-- SECTION 1: HOME SAFETY -->
    <div class="page-break">
        <h2>1. Home Safety Checklist</h2>
        <p>Room-by-room pet proofing for your peace of mind.</p>

        <h3>Kitchen &amp; Dining Area</h3>
        <ul class="checklist">
            <li>Secure all lower cabinets containing cleaning supplies or heavy cookware with child-proof latches.</li>
            <li>Ensure trash cans have locking lids or are stored entirely behind closed doors.</li>
            <li>Move toxic foods (onions, garlic, grapes, chocolate) to high shelves or secure pantries.</li>
            <li>Check floor spaces for dropped items, sharp objects, or small plastics before letting them roam.</li>
        </ul>

        <h3>Living Room</h3>
        <ul class="checklist">
            <li>Tuck away or cover all electrical cords and chargers to prevent chewing.</li>
            <li>Remove or relocate toxic houseplants (e.g., lilies, aloe vera) out of reach.</li>
            <li>Check under sofa cushions for small choking hazards like coins or batteries.</li>
            <li>Secure heavy furniture (bookshelves, TV stands) to the wall to prevent tipping.</li>
        </ul>

        <h3>Bathroom, Laundry &amp; Bedrooms</h3>
        <ul class="checklist">
            <li>Keep toilet lids closed at all times to prevent drinking from the bowl.</li>
            <li>Store medications, cosmetics, and razor blades inside secure medicine cabinets.</li>
            <li>Keep washer/dryer doors closed and double-check inside before starting a cycle.</li>
            <li>Keep small personal items (jewelry, earplugs) securely in drawers.</li>
        </ul>
    </div>

    <!-- SECTION 2: SCHEDULE -->
    <div class="page-break">
        <h2>2. Pet Care Schedule Templates</h2>
        <p>Consistency is the fastest way to build trust with a new pet. Use this baseline as a starting point, and adjust the times to fit your lifestyle.</p>

        <h3>The Baseline Daily Routine</h3>
        <table>
            <tr>
                <th style="width: 20%;">Time of Day</th>
                <th style="width: 25%;">Core Activity</th>
                <th>Focus / Goal</th>
            </tr>
            <tr>
                <td><strong>Morning</strong></td>
                <td>Potty &amp; Breakfast</td>
                <td>Take them out immediately upon waking. Feed breakfast. Follow with a 5-minute micro-training session (e.g., "Sit" or "Look at me") while they are hungry and focused.</td>
            </tr>
            <tr>
                <td><strong>Mid-Day</strong></td>
                <td>Energy Burn</td>
                <td>A short walk or a focused tug/fetch session. If you work from home, use a puzzle toy to keep them mentally stimulated while you focus.</td>
            </tr>
            <tr>
                <td><strong>Evening</strong></td>
                <td>Dinner &amp; Wind Down</td>
                <td>Feed their second meal. Take a relaxed evening stroll to decompress. End the night with a calm activity like brushing to signal that it is time to sleep.</td>
            </tr>
        </table>

        <h3>Weekly Maintenance</h3>
        <ul class="checklist">
            <li>Wash all food and water bowls with hot, soapy water.</li>
            <li>Wash bedding and blankets to minimize allergens and odors.</li>
            <li>Check and replenish the treat and food supply for the upcoming week.</li>
        </ul>
    </div>

    <!-- SECTION 3: 10 ESSENTIALS -->
    <div class="page-break">
        <h2>3. The 10 Essential Newcomer Checklists</h2>

        <h3>Arrival &amp; Environment</h3>
        <ol class="numbered-checklist">
            <li><strong>The "Safe Zone" Setup:</strong> Have a designated quiet area (crate or playpen) ready <em>before</em> they walk through the door. Equip it with a bed, a safe chew toy, and water.</li>
            <li><strong>The First 24 Hours Protocol:</strong> Keep the house quiet. Limit visitors. Let the pet explore at their own pace without being forced into interactions.</li>
            <li><strong>The Escapism Check:</strong> Verify all gates are latched, window screens are secure, and the front door routine is established.</li>
        </ol>

        <h3>Nutrition &amp; Health</h3>
        <ol class="numbered-checklist" start="4">
            <li><strong>The Transition Diet Plan:</strong> Mix their old food with the new food over a 7-day period to avoid gastrointestinal upset (Day 1-2: 75% old / 25% new, scaling up gradually).</li>
            <li><strong>Safe vs. Toxic Foods Quick-Check:</strong> Keep a mental or physical list of toxic human foods (chocolate, grapes, onions, garlic, xylitol) away from their reach.</li>
            <li><strong>First Vet Visit Prep:</strong> Gather any shelter/breeder medical records, write down all questions, and bring a fresh stool sample to their initial wellness exam.</li>
        </ol>

        <h3>Socialization &amp; Grooming</h3>
        <ol class="numbered-checklist" start="7">
            <li><strong>The 7-Day Introduction Rule:</strong> Introduce them to existing pets or children in short, heavily supervised, positive 5-minute intervals. Do not rush it.</li>
            <li><strong>Leash &amp; Collar Introduction:</strong> Let them wear the collar inside for a few days to get used to it before ever clipping on a leash.</li>
            <li><strong>The Desensitization Routine:</strong> Gently handle their paws, ears, and mouth daily to prepare them for future vet visits and nail trims.</li>
            <li><strong>The Accident Cleanup Kit:</strong> Have enzymatic cleaner and paper towels readily accessible. Standard cleaners will not remove pheromones that cause repeat accidents.</li>
        </ol>
    </div>

    <!-- SECTION 4: HEALTH RECORDS -->
    <div class="page-break">
        <h2>4. Pet Health Record Sheets</h2>
        <p>Keep these records easily accessible. Fill them out as soon as you have the information.</p>

        <div style="background-color: #ffffff; border: 1px solid #e1e8f0; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
            <p><strong>Name:</strong> __________________________________________________</p>
            <p><strong>Breed / Mix:</strong> ____________________________________________</p>
            <p><strong>Date of Birth / Adoption:</strong> _________________________________</p>
            <p><strong>Microchip Number:</strong> _______________________________________</p>
            <p><strong>Primary Vet Contact:</strong> ______________________________________</p>
        </div>

        <h3>Vaccination &amp; Preventative Log</h3>
        <table>
            <tr>
                <th style="width: 20%;">Date</th>
                <th style="width: 35%;">Vaccine / Treatment Name</th>
                <th style="width: 20%;">Next Due Date</th>
                <th>Vet Notes</th>
            </tr>
            <tr><td><br><br></td><td></td><td></td><td></td></tr>
            <tr><td><br><br></td><td></td><td></td><td></td></tr>
            <tr><td><br><br></td><td></td><td></td><td></td></tr>
            <tr><td><br><br></td><td></td><td></td><td></td></tr>
            <tr><td><br><br></td><td></td><td></td><td></td></tr>
        </table>
    </div>

    <!-- SECTION 5: BEHAVIOR -->
    <div class="page-break">
        <h2>5. Behavior &amp; Routine Guide</h2>
        <p>Navigating the early days takes patience and a little active optimism. Here is how to handle the most common newcomer situations using brief, positive adjustments.</p>

        <div class="situation-box">
            <h3>Situation 1: Indoor Potty Accidents</h3>
            <p><strong>The Situation:</strong> They are having accidents inside, sometimes right after you just came back from a walk. It is frustrating, but it is a completely normal part of the transition.</p>
            <p><strong>The Approach:</strong> Scolding or reacting negatively usually just teaches a pet to hide when they need to go. Instead, focus entirely on setting them up to succeed. Increase your outdoor trips—take them out immediately after they wake up, right after meals, and after playtime. When they do go outside, throw a massive, five-second celebration with their absolute favorite treats. Make going outside the best part of their day.</p>
        </div>

        <div class="situation-box">
            <h3>Situation 2: Nipping, Chewing, and Mouthing</h3>
            <p><strong>The Situation:</strong> Those sharp little teeth are finding their way onto your hands, your favorite shoes, or the corner of the rug.</p>
            <p><strong>The Approach:</strong> Young pets explore the world with their mouths, so the goal is redirection, not punishment. The moment teeth touch your skin, say a neutral "Oops!", stand up, and completely disengage for 10 seconds. Always keep a designated, safe chew toy within arm's reach so you can immediately swap it into their mouth when they get bitey.</p>
        </div>

        <div class="situation-box">
            <h3>Situation 3: Whining in the Crate or Playpen</h3>
            <p><strong>The Situation:</strong> You hear crying, howling, or barking the second you close the door or step out of their line of sight.</p>
            <p><strong>The Approach:</strong> Independence is a skill that has to be taught in micro-intervals. Build positive associations by feeding their meals inside the crate with the door wide open. Then, practice closing the door for just one minute while you are still in the room, rewarding them for being quiet. Always wait for a brief moment of silence before opening the door—this teaches them that calm behavior, rather than crying, is what gets them out.</p>
        </div>
    </div>

</body>
</html>
"""


def main() -> None:
    HTML_PATH.parent.mkdir(parents=True, exist_ok=True)
    PDF_PATH.parent.mkdir(parents=True, exist_ok=True)
    HTML_PATH.write_text(html_content.strip() + "\n", encoding="utf-8")
    weasyprint.HTML(filename=str(HTML_PATH)).write_pdf(str(PDF_PATH))
    print(f"wrote {HTML_PATH.relative_to(ROOT)}")
    print(f"wrote {PDF_PATH.relative_to(ROOT)} ({PDF_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
