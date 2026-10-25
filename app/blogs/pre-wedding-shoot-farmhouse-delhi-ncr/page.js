import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Pre-Wedding Shoot at a Farmhouse in Delhi NCR: 2026 Guide",

  description:
    "Planning a pre-wedding shoot at a farmhouse in Delhi NCR? Cost estimates, farmhouse vs monuments, permits, drone rules, best light and a day plan.",

  keywords: [
    "pre wedding shoot at farmhouse Delhi NCR",
    "farmhouse for pre wedding shoot in Delhi",
    "pre wedding shoot location rent Delhi",
    "pre wedding shoot cost Delhi NCR",
    "pre wedding shoot permission Delhi monuments",
    "best time for pre wedding shoot in Delhi",
    "pre wedding shoot ideas at farmhouse",
  ],

  alternates: {
    canonical: "/blogs/pre-wedding-shoot-farmhouse-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Pre-Wedding Shoot at a Farmhouse in Delhi NCR: 2026 Guide",

    description:
      "Why couples book private farmhouses for pre-wedding shoots in Delhi NCR: costs, permits, light, outfits, a shoot-day plan and a booking checklist.",

    images: ["/farmhouse15.webp"],
  },
};

const faqs = [
  {
    q: "How much does a pre-wedding shoot cost in Delhi?",
    a: "Bajaj Finserv's Delhi guide puts a pre-wedding shoot at roughly ₹50,000 to ₹3 lakh or more, mainly driven by the photographer, hours, locations and styling. As a rough estimate, renting a private farmhouse for a 4–6 hour shoot slot adds about ₹8,000–₹35,000 depending on area, day and what the property includes.",
  },
  {
    q: "Do you need permission for a pre-wedding shoot in Delhi?",
    a: "At public heritage sites, usually yes. ASI-protected monuments need a filming licence, and Sunder Nursery charges ₹5,900 (incl. GST) for a non-commercial shoot of up to 4 hours with up to 5 people. At a private farmhouse you only need the owner's written consent and agreed terms.",
  },
  {
    q: "What is the best time for a pre-wedding shoot in Delhi?",
    a: "October to February is the most comfortable season, with mild days and soft winter light. Within the day, the last 60–90 minutes before sunset give the warmest light; in December Delhi's sunset is roughly 5:25–5:35 PM, so plan the main outdoor looks from about 4 PM.",
  },
  {
    q: "How many days before the wedding should the pre-wedding shoot be done?",
    a: "Most couples shoot about 1–3 months before the wedding. That leaves time for editing, a save-the-date video and any reshoot, and keeps the shoot clear of last-week fittings, functions and travel.",
  },
  {
    q: "Can we use a drone for a pre-wedding shoot in Delhi NCR?",
    a: "Only where India's drone rules allow it. Flights in red and yellow zones need permission, and many parts of Delhi near airports and government areas are restricted, while ASI sites and Sunder Nursery do not allow drones. Ask your photographer to check the Digital Sky airspace map for the farmhouse location before promising drone shots.",
  },
  {
    q: "How many outfits should we plan for a pre-wedding shoot?",
    a: "Two to four looks is typical for a half-day shoot. Each change takes about 20–40 minutes with hair and make-up touch-ups, so more outfits means fewer good photos per look. A farmhouse with a room to change in saves the most time.",
  },
  {
    q: "Is a farmhouse better than a monument for a pre-wedding shoot?",
    a: "A farmhouse gives privacy, flexible timings, a changing room and no other shoot teams in frame; a monument gives a heritage look but comes with permits, fixed hours, crowds and no drones. Many couples combine one early-morning public location with a farmhouse for the rest of the day.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="pre-wedding-shoot-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-18"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse15.webp"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          alt="Pre-wedding shoot at a farmhouse in Delhi NCR: a modern private farmhouse with lawn and palms in golden-hour light"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Pre-Wedding Shoot at a Farmhouse in Delhi NCR: 2026 Guide
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Weddings • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A pre-wedding shoot at a farmhouse in Delhi NCR has become the easy
          alternative to queuing at monuments with three other couples. With
          the 2026 wedding season reopening on 20 November, most couples
          marrying in late November, December or early 2027 will shoot in
          the next few weeks. This guide covers what a farmhouse shoot
          typically costs, how it compares with public locations, the rules
          that apply, and how to plan the day.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Book a private farmhouse for a 4–6 hour afternoon slot, about 1–3
            months before the wedding, and plan 2–4 outfits around the last
            90 minutes before sunset. As a rough estimate, the farmhouse adds
            ₹8,000–₹35,000 to a shoot budget of ₹50,000–₹3 lakh, and you avoid
            monument permits, fixed hours and crowds.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Pre-Wedding Shoot at a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Question</th>
                <th className={th}>Typical answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>When to shoot</td>
                <td className={td}>1–3 months before the wedding; October to February is the best season</td>
              </tr>
              <tr>
                <td className={td}>Best time of day</td>
                <td className={td}>From about 2 PM to sunset, with the main looks in the last 60–90 minutes of light</td>
              </tr>
              <tr>
                <td className={td}>Slot to book</td>
                <td className={td}>4–6 hours for 2–4 outfits; a full day for 5+ looks or a video</td>
              </tr>
              <tr>
                <td className={td}>Farmhouse rent (estimate)</td>
                <td className={td}>₹8,000–₹35,000 for a shoot slot; weekdays are usually cheaper</td>
              </tr>
              <tr>
                <td className={td}>Permits</td>
                <td className={td}>Owner&apos;s written consent only; no public-site licence</td>
              </tr>
              <tr>
                <td className={td}>Drone</td>
                <td className={td}>Possible only if the location&apos;s airspace zone allows it</td>
              </tr>
              <tr>
                <td className={td}>Book ahead</td>
                <td className={td}>2–4 weeks for Nov–Dec weekends</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          Rent and timing figures are rough planning estimates based on how
          Delhi NCR farmhouses commonly price short daytime slots. Compare
          written quotes for your date.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Pre-Wedding Shoot?
        </h2>

        <p className="mb-8">
          A farmhouse gives you privacy, control over timing and several
          backdrops in one place. Public spots in Delhi are beautiful but
          shared: early-morning slots, security rules, onlookers and other
          shoot teams all eat into the time you are paying your photographer
          for.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Several looks in one location:</strong> a lawn, a pool,
            a pergola or gazebo, a driveway lined with trees and an indoor
            living room can each become a separate set, so you skip travel
            between locations.
          </li>
          <li>
            <strong>A room to change in:</strong> outfit and make-up changes
            happen in minutes, not in a car or a public washroom.
          </li>
          <li>
            <strong>Your own timings:</strong> shoot through golden hour and
            into blue hour with fairy lights or candles, which most public
            sites cannot offer.
          </li>
          <li>
            <strong>Props and styling:</strong> a swing, a vintage car, a
            picnic setup, lanterns or a small floral arch can be set up and
            left in place.
          </li>
          <li>
            <strong>Comfort for shy couples:</strong> no crowd watching makes
            it far easier to relax on camera.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse vs Monuments and Public Parks: Which Is Better?
        </h2>

        <p className="mb-8">
          Choose a farmhouse when you want privacy, several looks and flexible
          hours; choose a monument or heritage park when the heritage
          backdrop itself is the point. The table below compares the main
          trade-offs.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Factor</th>
                <th className={th}>Private farmhouse</th>
                <th className={th}>Monument or public park</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Permission</td>
                <td className={td}>Owner&apos;s written consent</td>
                <td className={td}>Site licence or booking; some parks need one on weekends</td>
              </tr>
              <tr>
                <td className={td}>Timing</td>
                <td className={td}>Your chosen slot, including sunset and after dark</td>
                <td className={td}>Opening hours; best light often at opening time</td>
              </tr>
              <tr>
                <td className={td}>Crowds</td>
                <td className={td}>Only your team</td>
                <td className={td}>Visitors and other shoot teams in frame</td>
              </tr>
              <tr>
                <td className={td}>Outfit changes</td>
                <td className={td}>Indoor room, fast</td>
                <td className={td}>Car or vanity van, slow</td>
              </tr>
              <tr>
                <td className={td}>Props and lighting</td>
                <td className={td}>Usually allowed with notice</td>
                <td className={td}>Often restricted; no set-ups on monuments</td>
              </tr>
              <tr>
                <td className={td}>Drone</td>
                <td className={td}>Depends on airspace zone</td>
                <td className={td}>Generally not allowed</td>
              </tr>
              <tr>
                <td className={td}>Look</td>
                <td className={td}>Garden, pool, modern or rustic</td>
                <td className={td}>Mughal, colonial or heritage architecture</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          What do public locations require?
        </h3>

        <p className="mb-8">
          Rules differ by site, so check each one. Two examples show the
          kind of conditions you will meet:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Sunder Nursery:</strong> its{" "}
            <a
              href="https://www.sundernursery.org/images/photography-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              published photography guidelines
            </a>{" "}
            list a ₹5,900 fee (incl. GST) for a non-commercial shoot such as a
            pre-wedding, capped at 4 hours and 5 people including crew, with
            no shooting in flower beds, waterways or on heritage structures.
          </li>
          <li>
            <strong>ASI-protected monuments:</strong> a filming licence is
            applied for through the ASI&apos;s online process, and a{" "}
            <a
              href="https://lineproducersindia.in/?p=14400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              2025 filming-permissions guide from Line Producers India
            </a>{" "}
            notes that a simple request can take around 15 days, that shoots
            run under ASI supervision and that drones are almost never
            approved.
          </li>
        </ul>

        <p className="mb-8">
          A common middle path: shoot one sunrise look at a public spot, then
          move to a farmhouse for the remaining outfits, lunch, rest and a
          golden-hour finish.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Pre-Wedding Shoot at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          The photographer is the biggest cost; the farmhouse is usually a
          smaller line. A{" "}
          <a
            href="https://www.bajajfinserv.in/pre-wedding-shoot-cost-in-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Bajaj Finserv guide on Delhi shoot costs
          </a>{" "}
          gives an overall range of about ₹50,000 to ₹3 lakh or more. Here is
          how a farmhouse shoot budget typically breaks down:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Rough estimate</th>
                <th className={th}>What moves the price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Photographer (photos only)</td>
                <td className={td}>₹30,000–₹1,50,000</td>
                <td className={td}>Experience, hours, number of edited photos</td>
              </tr>
              <tr>
                <td className={td}>Photo + video / reel</td>
                <td className={td}>₹60,000–₹2,50,000+</td>
                <td className={td}>Video length, crew size, drone, edit time</td>
              </tr>
              <tr>
                <td className={td}>Farmhouse shoot slot</td>
                <td className={td}>₹8,000–₹35,000</td>
                <td className={td}>Area, weekday vs weekend, hours, pool access</td>
              </tr>
              <tr>
                <td className={td}>Hair and make-up</td>
                <td className={td}>₹8,000–₹30,000</td>
                <td className={td}>Number of looks, artist on site all day</td>
              </tr>
              <tr>
                <td className={td}>Props and small décor</td>
                <td className={td}>₹3,000–₹25,000</td>
                <td className={td}>Florals, swing, picnic set, lights, vintage car</td>
              </tr>
              <tr>
                <td className={td}>Outfits (rented or bought)</td>
                <td className={td}>₹5,000–₹50,000+</td>
                <td className={td}>Gowns and lehengas for hire vs purchase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          Rough planning estimates for Delhi NCR in 2026, except the overall
          range cited above. Rates vary widely; get written quotes.
        </p>

        <p className="mb-8">
          To save money, book a weekday slot, keep to 2–3 looks, and ask
          whether the farmhouse already has fairy lights, a swing or garden
          furniture you can use. Our guide to{" "}
          <Link
            href="/blogs/farmhouse-party-decoration-ideas-budget-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse decoration ideas on a budget
          </Link>{" "}
          has more low-cost styling ideas that also work on camera.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time for a Pre-Wedding Shoot in Delhi NCR?
        </h2>

        <p className="mb-8">
          October to February is the best season, and the hour before sunset
          is the best time of day. Delhi&apos;s summer heat makes outdoor
          shoots hard from April to June, while winter brings mild afternoons
          and soft, warm light.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Weeks before the wedding:</strong> about 1–3 months
            ahead. For a wedding on a 21–26 November or 1–13 December
            muhurat, that means shooting between late September and mid
            November.
          </li>
          <li>
            <strong>Time of day:</strong> in November and December, Delhi&apos;s
            sunset is roughly 5:25–5:35 PM, so start around 2 PM, use the
            farmhouse interiors in the brighter early afternoon, and save the
            lawn and pool looks for after 4 PM.
          </li>
          <li>
            <strong>Fog and smog:</strong> from November, haze can flatten
            colours on some days. Keep a reserve date, and plan an evening
            fairy-light look that works even when the sky is grey.
          </li>
          <li>
            <strong>Weekdays:</strong> farmhouses are busier on Nov–Dec
            weekends with wedding functions and parties, so a weekday slot
            is easier to get and often cheaper.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking a Farmhouse for a Shoot?
        </h2>

        <p className="mb-8">
          Confirm in writing what you can use, for how long and with how many
          people. A shoot is a short booking, so owners often have specific
          conditions:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Exact slot and overtime rate:</strong> shoots overrun;
            agree the hourly charge for extra time in advance.
          </li>
          <li>
            <strong>Areas included:</strong> lawn, pool, rooms, terrace,
            driveway. Some properties exclude bedrooms or the pool.
          </li>
          <li>
            <strong>Crew size and vehicles:</strong> photographer, video,
            make-up artist, assistants and parking.
          </li>
          <li>
            <strong>Props and décor:</strong> whether you can set up a swing,
            florals, smoke or colour bombs, and what must be cleaned after.
          </li>
          <li>
            <strong>Power and backup:</strong> sockets for lights and
            charging, and a generator or inverter for evening shots.
          </li>
          <li>
            <strong>Commercial-use terms:</strong> whether the owner wants the
            property named or not shown in posts.
          </li>
          <li>
            <strong>Advance and cancellation:</strong> what happens if fog or
            rain forces a new date.
          </li>
        </ol>

        <p className="mb-8">
          Our guide to{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          covers deposits, guest limits and other terms in more detail, and{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            day-use vs overnight farmhouse bookings
          </Link>{" "}
          explains typical day-slot timings.
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Can you fly a drone at a farmhouse shoot?
        </h3>

        <p className="mb-8">
          Sometimes. Under India&apos;s Drone Rules 2021, airspace is split
          into green, yellow and red zones, and{" "}
          <a
            href="https://www.theweek.in/news/india/2021/07/15/govt-releases-liberal-drone-rules-with-security-in-mind.amp.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            as The Week reported
          </a>
          , only green-zone flights up to 400 ft need no flight permission,
          while the yellow zone extends up to 12 km from an airport&apos;s
          perimeter. Many farmhouse belts in South Delhi and Gurgaon are close
          to the Delhi airport, so ask your photographer to check the
          location on the official Digital Sky airspace map and get the
          owner&apos;s consent before flying.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Pre-Wedding Shoot Ideas at a Farmhouse
        </h2>

        <p className="mb-8">
          Plan one idea per outfit so each look feels like a different
          location:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Lawn picnic:</strong> a rug, basket, fruit and books for
            a relaxed, candid first look.
          </li>
          <li>
            <strong>Poolside golden hour:</strong> reflections in the water
            just before sunset; check the pool is cleaned that morning.
          </li>
          <li>
            <strong>Fairy-light evening:</strong> a canopy of warm lights or
            lanterns after sunset, ideal for the final traditional look.
          </li>
          <li>
            <strong>Home-style candid:</strong> cooking chai together, playing
            cards or reading in the living room, which suits couples who
            dislike posing.
          </li>
          <li>
            <strong>Swing or vintage car:</strong> one prop that makes the
            save-the-date image.
          </li>
          <li>
            <strong>Winter bonfire:</strong> blankets and a permitted fire pit
            for a cosy December look, subject to the property&apos;s fire
            rules.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          A Sample Shoot-Day Plan (2 PM to 7 PM)
        </h2>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Time</th>
                <th className={th}>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>12:30 PM</td>
                <td className={td}>Hair and make-up start; props team sets up on the lawn</td>
              </tr>
              <tr>
                <td className={td}>2:00 PM</td>
                <td className={td}>Look 1: indoor or shaded candid shots</td>
              </tr>
              <tr>
                <td className={td}>3:00 PM</td>
                <td className={td}>Change; look 2: lawn picnic or swing</td>
              </tr>
              <tr>
                <td className={td}>4:15 PM</td>
                <td className={td}>Change; look 3: golden hour by the pool or tree line</td>
              </tr>
              <tr>
                <td className={td}>5:30 PM</td>
                <td className={td}>Look 4 or same outfit: fairy lights and blue hour</td>
              </tr>
              <tr>
                <td className={td}>6:30–7:00 PM</td>
                <td className={td}>Pack up, clean props, hand back the property</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Pre-Wedding Shoot Checklist
        </h2>

        <ul className="space-y-2 mb-10">
          <li>☐ Shoot date fixed 1–3 months before the wedding, plus a reserve date</li>
          <li>☐ Photographer and videographer booked; deliverables in writing</li>
          <li>☐ Farmhouse slot, areas, crew size and overtime rate confirmed</li>
          <li>☐ Changing room, power backup and parking confirmed</li>
          <li>☐ 2–4 outfits chosen with matching accessories and footwear</li>
          <li>☐ Hair and make-up artist booked for touch-ups between looks</li>
          <li>☐ Props list and who brings, sets up and removes them</li>
          <li>☐ Drone checked against the airspace map and owner consent</li>
          <li>☐ Snacks, water and a warm layer for after sunset</li>
          <li>☐ Property cleaned and handed back on time to protect the deposit</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Book a Farmhouse for Your Pre-Wedding Shoot
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          private parties, wedding functions, stays and corporate events.
        </p>

        <p className="mb-8">
          Share your shoot date, the look you want and your budget. We can
          help you shortlist farmhouses with the right backdrops, confirm the
          slot and shoot terms with the owner, and, if you are also planning
          a small celebration, see our{" "}
          <Link
            href="/blogs/intimate-farmhouse-wedding-delhi-ncr"
            className="text-black underline font-semibold"
          >
            intimate farmhouse wedding guide
          </Link>{" "}
          for using the same kind of venue on the day itself.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A farmhouse turns a pre-wedding shoot from a rushed tour of public
          spots into a relaxed afternoon with several sets, a changing room
          and the best winter light. Book 1–3 months before the wedding,
          pick a weekday if you can, confirm the slot and rules in writing,
          and build the day around the last hour before sunset.
        </p>
      </article>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-black text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-xl p-5">
              <summary className="text-black font-semibold cursor-pointer">
                {faq.q}
              </summary>

              <p className="mt-3 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Find the Right Farmhouse for Your Shoot
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Tell us your date, area and the backdrops you want. Effortless
            Events can help you book a private farmhouse for your pre-wedding
            shoot and the celebrations that follow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/farmhouses"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Farmhouses
            </Link>

            <Link
              href="/services/venue-booking"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Get Venue Help
            </Link>
          </div>
        </div>

        {/* =====================================================
            BRAND FOOTNOTE
        ===================================================== */}

        <div className="mt-12 text-sm text-gray-500 border-t pt-8">
          <strong>Effortless Events Pvt. Ltd.</strong> is an event planning and
          venue discovery platform helping customers find farmhouses, private
          party venues and event spaces across Delhi NCR.
          <br />
          <a
            href="https://effortlessevents.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mt-2 inline-block"
          >
            www.effortlessevents.in
          </a>
        </div>
      </section>
    </main>
  );
}
