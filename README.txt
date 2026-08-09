CALL COACHING & PERFORMANCE — personal training website
==============================================

Upload ALL of these into your repo root (all in one place, no folders):

  index.html         Home (hero, highlights, before/after, memberships, testimonials)
  about.html         About / your story + credentials (100->150, 4-5 yrs, custom plans)
  memberships.html   Pricing (weekly + monthly, plan stack, payment logos)
  faq.html           Frequently asked questions
  contact.html       Text/Call + Email
  styles.css         Shared styling (blue / grey / silver) + the logo
  site.js            Hamburger menu, FAQ accordion, scroll animations
              Your photos (before / after / hero) — keep this folder

------------------------------------------------------------------
BEFORE GOING LIVE — two quick edits
------------------------------------------------------------------
1. TESTIMONIALS (home page): the three quotes on index.html say
   "Client name" as placeholders. Replace them with real client
   quotes when you have them. Look for "PLACEHOLDER testimonials".

2. FAQ location: faq.html currently says sessions run at Planet
   Fitness (Black Card guest). Confirm that's how you want it worded.
   NOTE: double-check that training paying clients on Planet Fitness's
   floor is allowed under your membership before advertising it — many
   gyms restrict outside trainers. Easy to change that one answer.

------------------------------------------------------------------
YOUR PHOTOS (already included)
------------------------------------------------------------------
Three images live in  and already show on the site:
  call-before.jpg   before shot (shirtless)
  call-after.jpg    after shot (white shirt)

To swap any of them later, replace the file with the same name.
Portrait (4:5) works best. If an image is ever missing, the site
falls back gracefully so it always looks finished.

------------------------------------------------------------------
LOGO
------------------------------------------------------------------
The site now uses your metallic CP emblem. It lives as ONE file:
  logo.png   (transparent, round badge)
It's wired to three places automatically:
  - the nav + footer mark (styles.css: the --logo line)
  - the browser tab / phone icon (favicon + apple-touch in each .html)
To change the logo later, just replace logo.png with a new
file of the same name (square, transparent works best).

Also included alongside this site (for social, banners, etc.):
  call-logo-full.png          emblem + full lockup on black
  call-badge-transparent.png  the round badge only, transparent

------------------------------------------------------------------
INSTAGRAM (when you're ready)
------------------------------------------------------------------
It's intentionally left OFF for now. When your gym IG account is live,
open contact.html, find the commented-out "INSTAGRAM" block, delete the
<!-- and --> around it, and set YOUR_HANDLE. You can also add it back to
the footer contact line the same way.

------------------------------------------------------------------
CONTACT (baked in)
------------------------------------------------------------------
  Text / Call:  (901) 359-0305
  Email:        Gavin.nicholas2003@gmail.com
Swap in a support number/email later by find/replacing those across
the five .html files and styles.css footer.

ACCEPTED PAYMENTS shown with logos: Apple Pay, Cash App, Venmo, PayPal, Cash.

Tagline: "Answer the call."  Session length: 60 minutes (no 30s).

------------------------------------------------------------------
LATEST ADDITIONS / NOTES
------------------------------------------------------------------
TESTIMONIALS & CLIENT RESULTS: the home page now shows Amanda Yount's
testimonial and her before/after (amanda-before.jpg / amanda-after.jpg).
To add more clients, duplicate the .quote-feature figure and/or the
.transform before/after block in index.html and drop in new images.

SOCIAL SHARING: share.png is a branded preview image, and every page
now has Open Graph + Twitter tags so your link looks professional
when posted. For the preview to load everywhere, once your domain is
live change the og:image / twitter:image values from "share.png" to
the full URL, e.g. https://YOURDOMAIN.com/share.png (in each .html).

LOCAL SEO: index.html includes LocalBusiness (HealthClub) structured
data for Google — name, area served (Memphis & Cordova), phone,
Instagram, and the free-workout offer.

DAILY MOTIVATION: quotes rotate by day and now show credit lines.
Edit the list in site.js (the "daily motivation" block).
