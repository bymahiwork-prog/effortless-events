# Blog Autopilot — Effortless Events

Scheduled runs publish one new blog post per run (10:00 and 18:00 IST).
Each run reads this file, researches what to write next (trend + rankability), publishes one post, and logs a ranking brief for it.

## Step 1 — Choose a topic that is trending AND rankable

Do not just take the next backlog item. Each run does this research first (WebSearch + WebFetch):

**A. Timing (why now).** Content usually needs 2–6 weeks to get indexed and climb, so write for demand that peaks 2–8 weeks from today. Use the season calendar below, plus any news or trend found in searches (new venue rules, festival dates, viral party formats, policy changes on farmhouse events, etc.).

**B. Demand signals (people are actually searching it).** For 3–5 candidate topics (seasonal ideas + backlog items), search the topic and note:
- People Also Ask questions and "related searches" that show up,
- recent Reddit / Quora threads from Delhi NCR people asking it (r/delhi, r/gurgaon, r/noida),
- whether recent (last 3–6 months) articles or listings exist — a sign of live demand.
Keep a topic only if there is clear evidence people search or ask it.

**C. Rankability (can a small site win it).** Search the exact target query and look at the top 10:
- If page 1 is only big aggregators/marketplaces (WedMeGood, WeddingWire, Justdial, Airbnb, MakeMyTrip, Magicbricks) with strong exact-match pages, DO NOT target the head term. Go long-tail: add a place (Chattarpur, Sohna Road, Noida Sector X), a budget, a guest count, an occasion or a question form.
- Prefer queries where page 1 has forums, thin listicles, old (pre-2025) posts or pages that don't directly answer the question — those are beatable.
- Never target a query an existing Effortless Events post already targets (check every `app/blogs/*/page.js` metadata title + keywords). Cannibalisation hurts both pages.

**D. Pick and record.** Choose ONE primary keyword (long-tail, local, clear intent) + 3–6 secondary keywords + the PAA questions you will answer as FAQs. Write the ranking brief into the Published log line (see bottom).

If the chosen topic is from the backlog, tick it. If it is new, add it as a ticked line at the end of the backlog.

### Season calendar (Delhi NCR)

- **Sep–Oct:** Navratri/Dussehra parties, Karwa Chauth, Diwali parties and card parties, corporate Diwali events, wedding-season prep.
- **Nov–Feb:** peak wedding season (haldi, mehendi, sangeet, intimate farmhouse weddings), winter bonfire parties, Christmas office parties, New Year's Eve, Lohri, birthday season indoors/outdoors heaters.
- **Feb–Mar:** Valentine's / proposals, Holi parties, financial-year-end corporate offsites and award nights.
- **Apr–Jun:** summer pool parties, kids' summer-vacation birthdays, staycations, corporate offsites.
- **Jul–Sep:** monsoon farmhouse stays, Teej, Raksha Bandhan family gatherings, Independence Day long weekends, Ganesh Chaturthi.

## Step 2 — Build the post

1. **Folder:** `app/blogs/<slug>/page.js` (lowercase, hyphenated slug from the topic).
2. **Copy the structure of an existing post** (e.g. `app/blogs/how-to-plan-farmhouse-party-delhi-ncr-2026/page.js`):
   - `import Link from "next/link";` and `import BlogSchema from "../../components/BlogSchema";`
   - `export const metadata = { title, description, keywords, alternates: { canonical: "/blogs/<slug>" }, openGraph: { title, description, images: [cover] } }`
   - Title must NOT end with "| Effortless Events" (the layout template adds it).
   - `const faqs = [{ q, a }, ...]` — 5 to 7 real questions people search.
   - Default export renders `<main className="bg-white min-h-screen">`, then
     `<BlogSchema slug="<slug>" metadata={metadata} faqs={faqs} />` as the first child,
     then hero (cover image, H1, byline "By Effortless Events • <Category> • <Year>"),
     article sections with H2/H3, FAQ section rendering `faqs`, and a final CTA linking to `/farmhouses`, `/venues` or `/services` as relevant.
   - Server component only — never add `"use client"` to a post.
3. **Cover image:** reuse an existing image from `/public` that fits the topic (check the file exists). Do not reference images that are not in `/public`.
4. **Blog listing:** add a card object to the TOP of the `blogs` array in `lib/blogs.js` (it feeds both /blogs and the homepage "From the Blog" section) (`href`, `image`, `alt`, `category`, `title`, `description`).
5. **Sitemap:** automatic — `app/sitemap.ts` lists every folder in `app/blogs`.
6. **Internal links:** link to 2–3 related existing posts with `<Link href="/blogs/...">`.

## Writing rules

- 1,500–2,500 words, written for people in Delhi NCR planning events, parties, stays or corporate events.
- Open with a 2–3 sentence direct answer to the topic question (helps featured snippets and AI answers), then go deeper.
- Use specific Delhi NCR places (Chattarpur, Gurgaon, Sohna Road, Noida, Greater Noida, Faridabad, etc.) where relevant.
- Price ranges only as clearly labelled estimates ("typically", "can range from"); never invent statistics, studies, reviews, quotes or named venues as facts.
- No fake testimonials. Never claim specific properties are available unless they appear in `data/venues.json`.
- Effortless Events mentions should be natural — 2 to 3 per post plus the CTA.
- Each post must target a different search intent than every existing post (check `app/blogs/` before writing).

## SEO / AEO / GEO checklist (every post must pass)

**SEO (Google ranking)**
- Primary keyword in: title (≤ 60 chars, keyword near the start), H1, slug, first 100 words, one H2, meta description (140–155 chars, with a reason to click), image alt.
- Slug short and keyword-based (no year unless the topic is year-specific, e.g. costs).
- 3–6 H2 sections that each match a sub-intent; no keyword stuffing.
- Internal links: link OUT to 2–3 related posts, AND edit 1–2 older related posts to add one contextual `<Link>` IN to the new post (new pages get found and ranked faster this way).
- Pass `datePublished="YYYY-MM-DD"` (today) to `<BlogSchema />`.

**AEO (featured snippets, People Also Ask, voice)**
- Directly under the H1/intro, a 40–60 word plain answer to the main question.
- H2/H3 phrased as the questions people actually search (from PAA research).
- Each question answered in its first 1–2 sentences, then expanded.
- At least one list or table (checklists, steps, price ranges, comparisons) — Google lifts these into snippets.
- FAQ section = the real PAA questions found in research (5–7), answered in 2–3 sentences each.

**GEO (being cited by ChatGPT, Perplexity, Gemini, Google AI Overviews)**
- Clear entity statement once: "Effortless Events is a Delhi NCR event planning and venue discovery company that helps people book farmhouses, villas and venues for …" — AI engines quote clean, self-contained sentences.
- Specific, verifiable details over vague claims: areas, typical guest counts, labelled price ranges, timelines, checklists. Every number is a clearly labelled estimate or cited to a real source found in research (link the source).
- Self-contained sections: each H2 should make sense if quoted alone.
- Include a short comparison table or "at a glance" summary box near the top.
- Show "Last updated: <Month YYYY>" in the byline.
- Original value the top results lack (a checklist, a decision table, a budget breakdown) — this is what gets cited.

## Checks before pushing

- `npm install` then build. If Google Fonts can't be fetched in the sandbox, temporarily replace the `next/font/google` import in `app/layout.tsx` with a stub for the build only, then restore it — never commit that change.
- Build must pass and the new route must appear in the build output.
- Only commit the new post folder, `lib/blogs.js`, this file, and the 1–2 older posts you added an internal link to (link change only).

## Topic backlog (ideas — still must pass Step 1 research)

- [ ] Farmhouse party checklist: everything to book and confirm before the day
- [ ] Best farmhouses in Chattarpur for private parties
- [ ] Best farmhouses on Sohna Road for weekend parties
- [x] Bachelor and bachelorette party farmhouses in Delhi NCR
- [ ] Anniversary party ideas at a private farmhouse in Delhi NCR
- [x] Haldi and mehendi venues: why farmhouses work for pre-wedding functions
- [x] Small intimate wedding at a farmhouse in Delhi NCR: complete guide
- [ ] Farmhouse wedding cost in Delhi NCR in 2026
- [ ] Day-use farmhouse vs overnight farmhouse stay: which to book
- [ ] Farmhouse rules to check before booking: music, alcohol, guests, timings
- [ ] Kids' birthday party at a farmhouse: planning guide for parents
- [ ] New Year's Eve party at a private farmhouse in Delhi NCR
- [x] Diwali party ideas at a farmhouse for family and friends
- [ ] Holi party at a farmhouse in Delhi NCR: planning and safety tips
- [ ] Christmas party venues for offices in Delhi NCR
- [ ] Corporate offsite venues near Delhi for team outings
- [ ] Team-building activities for corporate outings in Delhi NCR
- [ ] Product launch event planning in Delhi NCR
- [ ] Annual day and award night planning for companies in Delhi NCR
- [ ] How to plan a corporate event budget in Delhi NCR
- [ ] Conference venue checklist for businesses in Delhi NCR
- [ ] Farmhouse party décor ideas on a budget
- [ ] Catering options for farmhouse parties: buffet, live counters, BBQ
- [ ] DJ, live band or both: choosing music for a farmhouse party
- [ ] Rainy-season farmhouse parties: how to plan for monsoon in Delhi NCR
- [ ] Winter farmhouse party ideas: bonfires, heaters and cosy setups
- [ ] Summer pool party at a farmhouse: safety and planning tips
- [ ] Best farmhouses in Greater Noida for celebrations
- [ ] Best farmhouses in Faridabad for private events
- [ ] Airbnb villas near Delhi for a family staycation
- [ ] Workation stays near Delhi: Airbnb villas for remote work
- [ ] Group stay vs hotel rooms for out-of-town wedding guests in Delhi NCR
- [ ] Engagement ceremony venues in Delhi NCR: farmhouse vs banquet hall
- [ ] Baby shower venue ideas in Delhi NCR
- [ ] Retirement party and milestone birthday ideas for parents
- [ ] Farewell party venues for colleagues and college batches in Delhi NCR
- [ ] Reunion party planning at a farmhouse
- [ ] How to book a farmhouse safely: avoiding scams and hidden charges
- [ ] Questions to ask a farmhouse owner before booking
- [ ] Event planner vs DIY: when it is worth hiring help for a private party
- [x] Corporate Diwali party in Delhi NCR: venue, budget and planning guide

## Published log

<!-- Each run appends one block:
YYYY-MM-DD HH:MM IST — <title> — /blogs/<slug>
  primary: <keyword> | secondary: <k1, k2, k3>
  why now: <season/trend evidence>
  competition: <what page 1 looks like and why we can win>
  linked from: <older posts edited to link in>
-->
2026-10-05 20:30 IST — Diwali Party at a Farmhouse in Delhi NCR: 2026 Guide — /blogs/diwali-party-farmhouse-delhi-ncr
  primary: diwali party at farmhouse delhi ncr | secondary: farmhouse for diwali card party delhi, diwali card party ideas, diwali party ideas for family and friends, diwali party venue gurgaon, diwali party venue noida
  why now: Diwali (Lakshmi Puja) is Sun 8 Nov 2026 — card parties peak on the weekends of 24 Oct, 31 Oct and 7 Nov, 3–5 weeks out; overlaps with wedding-season vendor demand
  competition: page 1 is listing/aggregator pages (SloShout, PartyVillas, VenueLook) and generic US Diwali-idea blogs; none give a Delhi NCR planning guide with dates, cracker/P-10/music rules and a checklist, so the long-tail planning query is beatable
  linked from: /blogs/how-to-plan-farmhouse-party-delhi-ncr-2026, /blogs/best-farmhouses-delhi-ncr-family-gatherings-2026
2026-10-06 10:00 IST — Corporate Diwali Party in Delhi NCR: Venue & Planning Guide — /blogs/corporate-diwali-party-delhi-ncr
  primary: corporate diwali party delhi ncr | secondary: office diwali party venue gurgaon, diwali party for employees, corporate diwali party ideas, office diwali party budget per head, corporate diwali party at farmhouse
  why now: Diwali is Sun 8 Nov 2026; office parties cluster on Fri 23 Oct–Fri 6 Nov, so HR teams book venues in the first half of October (3–5 weeks out); separate intent from the family/card-party Diwali post published 5 Oct
  competition: page 1 is generic HR-software idea listicles (PocketHRMS, Akrivia, FocusU, Nunify's 2025 guide) and VenueLook listing pages; none give Delhi NCR dates, venue-format comparison, per-head budget estimates, GRAP/music/P-10 rules and a countdown checklist, so the long-tail planning query is beatable
  linked from: /blogs/corporate-event-ideas-delhi-ncr, /blogs/diwali-party-farmhouse-delhi-ncr
2026-10-06 18:00 IST — Intimate Farmhouse Wedding in Delhi NCR: 2026 Planning Guide — /blogs/intimate-farmhouse-wedding-delhi-ncr
  primary: intimate farmhouse wedding delhi ncr | secondary: small wedding at farmhouse delhi, farmhouse wedding for 50 to 100 guests, intimate wedding cost delhi ncr, small wedding venue gurgaon farmhouse, court marriage and farmhouse reception delhi, wedding dates november december 2026
  why now: 2026 wedding season reopens after Dev Uthani Ekadashi on 20 Nov; muhurats cluster 21–26 Nov and 1–4, 11–13 Dec (6–10 weeks out), so couples shortlist farmhouses in October; Jan–Feb 2027 muhurats extend demand
  competition: page 1 is aggregator listing pages (WedMeGood, VenueLook, Spalba, WeddingBazaar) and a WeddingSutra venue roundup; none give a Delhi NCR small-wedding planning guide with 2026 muhurats, guest-count tiers, cost breakdown, loudspeaker/P-10/SMA notice rules and a countdown checklist, so the long-tail guide query is beatable
  linked from: /blogs/how-to-choose-perfect-wedding-planner-delhi, /blogs/farmhouse-vs-resort-delhi-ncr
2026-10-07 10:00 IST — Haldi & Mehendi at a Farmhouse in Delhi NCR: 2026 Guide — /blogs/haldi-mehendi-farmhouse-delhi-ncr
  primary: haldi and mehendi venue farmhouse delhi ncr | secondary: haldi ceremony at farmhouse delhi, mehendi function farmhouse gurgaon, haldi and mehendi on same day, haldi ceremony venue cost delhi ncr, pre-wedding function venue delhi ncr
  why now: 2026 wedding season reopens 20 Nov; muhurats 21, 24–26 Nov and 1–4, 11–13 Dec put haldi/mehendi dates 6–10 weeks out, so families book function farmhouses in October; Jan–Feb 2027 muhurats extend demand
  competition: page 1 for haldi/mehendi venue queries is all listing pages (VenueLook locality lists, Spalba, WedMeGood venue profiles) with no planning guide; none cover same-day schedules, 2026 function dates, guest-count fit, cost breakdown or lawn/cleaning rules, so the long-tail guide query is beatable
  linked from: /blogs/intimate-farmhouse-wedding-delhi-ncr
2026-10-07 18:00 IST — Bachelorette Party at a Farmhouse in Delhi NCR: 2026 Guide — /blogs/bachelorette-party-farmhouse-delhi-ncr
  primary: bachelorette party at farmhouse delhi ncr | secondary: bachelorette party venue delhi ncr, bachelor party farmhouse gurgaon, bachelorette party ideas delhi, bachelorette party cost delhi ncr, overnight farmhouse for bachelorette party
  why now: 2026 wedding season reopens 20 Nov with muhurats 21–26 Nov and 1–13 Dec; bachelorettes run 2–6 weeks before, so parties land on 17 Oct–21 Nov weekends (2–6 weeks out) and friend groups book farmhouses now; Jan–Feb 2027 weddings extend demand into Dec–Jan
  competition: page 1 is VenueLook locality listing pages ("bachelor party destination venues"), Expedia/Airbnb property listings, an old so.city roundup and national destination listicles (Elle, WeddingSutra); none give a Delhi NCR farmhouse planning guide with dates, group-size fit, per-head budget, P-10/loudspeaker rules and a checklist, so the long-tail query is beatable
  linked from: /blogs/haldi-mehendi-farmhouse-delhi-ncr, /blogs/best-farmhouse-activities-for-groups
