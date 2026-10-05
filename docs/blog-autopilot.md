# Blog Autopilot — Effortless Events

Scheduled runs publish one new blog post per run (10:00 and 18:00 IST).
Each run reads this file, picks the first unchecked topic, publishes it, ticks it off and logs it.

## How a post is built

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
4. **Blog listing:** add a card object to the TOP of the `blogs` array in `app/blogs/page.js` (`href`, `image`, `alt`, `category`, `title`, `description`).
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

## Checks before pushing

- `npm install` then build. If Google Fonts can't be fetched in the sandbox, temporarily replace the `next/font/google` import in `app/layout.tsx` with a stub for the build only, then restore it — never commit that change.
- Build must pass and the new route must appear in the build output.
- Only commit the new post folder, `app/blogs/page.js` and this file.

## Topic queue

- [ ] Farmhouse party checklist: everything to book and confirm before the day
- [ ] Best farmhouses in Chattarpur for private parties
- [ ] Best farmhouses on Sohna Road for weekend parties
- [ ] Bachelor and bachelorette party farmhouses in Delhi NCR
- [ ] Anniversary party ideas at a private farmhouse in Delhi NCR
- [ ] Haldi and mehendi venues: why farmhouses work for pre-wedding functions
- [ ] Small intimate wedding at a farmhouse in Delhi NCR: complete guide
- [ ] Farmhouse wedding cost in Delhi NCR in 2026
- [ ] Day-use farmhouse vs overnight farmhouse stay: which to book
- [ ] Farmhouse rules to check before booking: music, alcohol, guests, timings
- [ ] Kids' birthday party at a farmhouse: planning guide for parents
- [ ] New Year's Eve party at a private farmhouse in Delhi NCR
- [ ] Diwali party ideas at a farmhouse for family and friends
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

## Published log

<!-- Each run appends: YYYY-MM-DD HH:MM IST — <title> — /blogs/<slug> -->
