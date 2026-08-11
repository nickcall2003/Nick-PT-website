CALL COACHING & PERFORMANCE — personal training website
==============================================

Upload ALL of these into your repo root (all in one place, no folders):

  index.html         Home (hero, highlights, before/after, memberships, testimonials)
  about.html         About / your story + credentials (100->150, custom plans)
  memberships.html   Pricing (weekly + monthly, plan stack, payment logos)
  faq.html           Frequently asked questions
  contact.html       Text/Call + Email  (Cal.com calendar removed)
  styles.css         Shared styling (blue / grey / silver) + the logo
  site.js            Hamburger menu, FAQ accordion, scroll animations
  logo.png           Metallic CP emblem (nav + footer mark + favicon)
  share.png          Branded social preview image
  call-before.jpg / call-after.jpg      Your before/after
  amanda-before.jpg / amanda-after.jpg  Client before/after
  ig1.jpg / ig2.jpg / ig3.jpg           Instagram preview tiles
  call-my-split.pdf            "My 6-Day Split" credibility piece (page-split fixed)
  call-free-5-day-plan.pdf     Free 5-Day Beginner Plan lead magnet

------------------------------------------------------------------
INSTAGRAM
------------------------------------------------------------------
Handle is now @callsprotocol (https://www.instagram.com/callsprotocol),
wired across all five pages and both PDFs. To change it later, find/replace
"callsprotocol" across the .html files (and re-export the PDFs).

------------------------------------------------------------------
CONTACT (baked in)
------------------------------------------------------------------
  Text / Call:  (901) 359-0305
  Email:        Nick@callscoaching.com

ACCEPTED PAYMENTS shown with logos: Apple Pay, Cash App, Venmo, Cash.
Tagline: "Answer the call."  Session length: 60 minutes (free intro is 30).

------------------------------------------------------------------
V2 POLISH (this update) — only styles.css & site.js changed
------------------------------------------------------------------
- Electric ice-cyan ACCENT (var --accent) on the hero word "the call.",
  stat numbers, the "Call?" hook, marquee sparks, kicker underline, and
  CTA hover glows. Used sparingly, only on dark panels for contrast.
- METALLIC depth: brushed sheen + silver top-edge on dark bands, and a
  premium silver edge + hover-lift on the light cards.
- STICKY MOBILE CTA: a "Claim your free workout" bar pinned to the bottom
  on phones (auto-injected by site.js — no per-page HTML needed).
To retune the accent, change --accent in styles.css :root (v2 block).

------------------------------------------------------------------
IMPORTANT — if the site looked unchanged after uploading
------------------------------------------------------------------
That is browser/host CACHING, not a missing change. The CSS + JS are
now versioned (styles.css?v=2 and site.js?v=2) in all five .html files,
which forces browsers to load the new files. After uploading, do a hard
refresh (or open in a private tab). The quickest proof it worked: on a
phone you'll see the blue "Claim your free workout" bar pinned to the
bottom of the screen, and "the call." in the hero turns cyan.

Also fixed this pass: site.js now keeps the daily-motivation quote block
(it had been dropped) AND the sticky mobile CTA.
Next time you tweak styles.css or site.js, bump the number (?v=3, ?v=4…)
so phones pick up the change.

------------------------------------------------------------------
BUILD v3 — how to confirm it went live
------------------------------------------------------------------
The footer now shows "build v3" (bottom-left, next to the copyright).
CSS/JS are versioned ?v=3. After you commit + hard-refresh, if the
footer says "build v3" you are on the newest files. If it still says
nothing / old, the commit didn't land — re-upload and COMMIT.

iPhone tip: delete old downloads first. iOS makes index (1).html,
index (2).html ... it's easy to upload an older duplicate by accident.

------------------------------------------------------------------
BUILD v4 — conversion + brand upgrade
------------------------------------------------------------------
- THE CALLS PROTOCOL(TM): new branded system section on the homepage
  (Train / Condition / Move / Fuel).
- "Who Calls Coaching is for": self-select checklist near the top.
- Pricing: Monthly is now the obvious BEST VALUE ("twice the training
  for $60 more"); home snapshot + Programs page both updated.
- "Memberships" -> "Programs" in the nav/footer (file name stays
  memberships.html so no links break). Page titled "Coaching Programs".
- The 5+5+5 plan wording is reframed as one complete weekly system
  (home, Programs, FAQ) so it no longer reads like "15 workouts a week".
- "Free workout" -> "Free 30-minute session" sitewide.
- About: degree corrected -> "finishing my Bachelor's in Physical
  Therapy at the University of Memphis (December 2026)". It never claims
  to be a licensed physical therapist.
- Payment icons pulled out of every footer; they now live only on the
  Programs page.
- Footer stamp now reads "build v4"; assets versioned ?v=4.

LEAD FORM (Formspree)
- contact.html has a "Let's build your plan" application form posting to
  https://formspree.io/f/xrpzpnbw via AJAX (site.js). Visitor stays on
  the page and sees a "Got it" message; no redirect.
- First real submission: Formspree emails you to confirm the form the
  first time. Send yourself a test after uploading, then check the email
  address in your Formspree dashboard.
- To change where it sends, edit the form in your Formspree dashboard
  (no code change needed).

------------------------------------------------------------------
BUILD v5 — "The Daily Call" opt-in (replaces Daily motivation)
------------------------------------------------------------------
Homepage now has a compliant SMS opt-in: today's quote shows as a live
preview, then visitors enter their mobile number + tick a consent box.
Signups post to your Formspree inbox (name "phone", plus recorded
consent), so you build a subscriber list with proof of consent.

IMPORTANT — the website collects opt-ins; it does NOT send the texts.
A static site cannot send scheduled SMS, and US carriers require
consent + registration for automated texts. To actually send daily:
  EASIEST (compliant): an SMS platform with keyword opt-in + scheduled
    sends — SimpleTexting / EZTexting / Textedly (~$20-30/mo). People
    text a keyword (e.g. CALL) to join; you schedule the daily message.
    The platform handles consent, STOP/HELP, and carrier registration.
  DIY: Twilio + a daily scheduler (e.g. a Railway cron). You must still
    register the number (A2P 10DLC) and handle STOP yourself.
Either way, the consent language on the form ("recurring automated
texts... reply STOP... msg & data rates apply") is what keeps you
compliant — keep it.

Both forms (lead form + Daily Call) use one shared handler in site.js
(form.js-formspree). Success text comes from each form's data-ok.

------------------------------------------------------------------
BUILD v6 — Daily motivation kept on-site (SMS opt-in removed)
------------------------------------------------------------------
Reverted "The Daily Call" opt-in. The homepage now just shows a
motivational quote that rotates by day (site.js) — no phone number,
no consent box, no texting, nothing collected or sent. The contact
lead form (Formspree) is unchanged. Footer reads "build v6".

------------------------------------------------------------------
BUILD v7 — expanded daily quotes
------------------------------------------------------------------
The Daily motivation list in site.js now holds 82 quotes (your original
4 + ~78 original brand-voice lines), rotating by day-of-year — so it
won't repeat for ~2.5 months. Original lines show with no attribution;
your 4 keep their credits.
To edit/add: open site.js, find "var quotes=[" and add a line:
  {t:`Your quote here`, by:"Name or leave empty"}
Keep each entry on its own line ending in a comma (except the last).

------------------------------------------------------------------
BUILD v8 — accuracy + conversion polish
------------------------------------------------------------------
- "24/7 coaching" softened to "direct coach access / message me anytime"
  everywhere (more honest than implying 24-hour availability). The hero
  stat now reads 24/7 "Message access" (you can message anytime).
- How It Works now has a 4th step: "Track & adjust".
- Pricing: added the per-session math (about $18.75/session monthly vs
  $30 weekly) and a "No gym membership required" line under the snapshot.
- FAQ: added "Is training in person or online?" and "Do you train women?"
- About degree wording stays as accurate Physical Therapy at U of Memphis
  (a reviewer keeps guessing "Sports Medicine" — do NOT change it to that;
  it would be false).
Footer reads "build v8".

STILL PENDING (need real data from you, won't invent):
- 2-4 more client transformations (name, timeframe, result, photo).
