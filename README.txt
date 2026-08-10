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
