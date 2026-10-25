import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Proposal at a Farmhouse in Delhi NCR: Setup, Cost & Ideas",

  description:
    "Planning a private proposal at a farmhouse in Delhi NCR? Setup ideas, cost estimates, winter timing, surprise logistics and a checklist before you book.",

  keywords: [
    "proposal at farmhouse Delhi NCR",
    "private proposal setup Delhi NCR",
    "proposal decoration cost Delhi",
    "surprise proposal ideas Delhi",
    "best private proposal spots Delhi NCR",
    "Christmas and New Year proposal ideas Delhi",
    "how to plan a surprise proposal",
  ],

  alternates: { canonical: "/blogs/proposal-at-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Proposal at a Farmhouse in Delhi NCR: Setup, Cost & Ideas",

    description:
      "A practical guide to a private farmhouse proposal in Delhi NCR: setup styles, cost estimates, winter timing, keeping it a surprise and a booking checklist.",

    images: ["/decoration-1.webp"],
  },
};

const faqs = [
  {
    q: "How much does a proposal setup cost in Delhi?",
    a: "Listed proposal packages from Delhi NCR decorators range from a few thousand rupees for a simple candle-and-balloon setup to over ₹1 lakh for a large floral garden setup. At a farmhouse, add the venue slot: as a rough estimate, a small farmhouse for a few hours costs about ₹12,000–₹30,000, so a complete private proposal often lands between ₹25,000 and ₹1,00,000.",
  },
  {
    q: "Where can I propose privately in Delhi NCR?",
    a: "The most private options are spaces you can book exclusively: a farmhouse or villa for a few hours, a private dining room or rooftop that is closed to other guests, or your own terrace. Farmhouses in Chattarpur, Gurgaon, Sohna Road and Noida give you a lawn, lighting and no strangers watching.",
  },
  {
    q: "Can I book a farmhouse just for a proposal?",
    a: "Yes. Many farmhouses rent day-use or evening slots of a few hours, and a proposal for two, or for two plus a small group of family and friends, is an easy booking for them. Ask for a short evening slot, confirm that outside decorators are allowed and agree on set-up time before you pay.",
  },
  {
    q: "Can I decorate a public park or monument for a proposal in Delhi?",
    a: "Usually not without permission. Public gardens and protected monuments have their own rules on props, set-ups and photography, and a setup can be stopped on the day. If you want décor, candles and music, a private venue such as a farmhouse avoids that risk.",
  },
  {
    q: "What is the best time to propose outdoors in Delhi in winter?",
    a: "Late afternoon into early evening. In December the sun sets around 5:30 PM in Delhi, so a 4:30–6:30 PM window gives you golden-hour photos, then fairy lights and candles after dark, before the coldest part of the night.",
  },
  {
    q: "How far in advance should I book a proposal setup?",
    a: "Decorators often accept bookings a few days ahead, but for a farmhouse in peak season book two to four weeks ahead. Weekends from late November to mid-December compete with weddings, and Christmas Eve, New Year's Eve and Valentine's Day slots go early.",
  },
  {
    q: "How do I keep a farmhouse proposal a surprise?",
    a: "Give your partner a believable reason to be there, such as a friend's small party, a dinner booking or a photoshoot, and ask one trusted friend to handle timing and arrival. Keep the decorator and photographer in one WhatsApp group without your partner, and share the venue location only with them.",
  },
];

const glanceRows = [
  ["Best for", "Couples who want privacy, space for décor and a few family or friends on standby"],
  ["Best time", "4:30–6:30 PM in winter for sunset light, then fairy lights and candles"],
  ["Typical slot", "3–5 hours of day use or an evening slot (overnight if you want to celebrate after)"],
  ["Cost (estimate)", "About ₹25,000–₹1,00,000 all-in for venue, décor, photos and a simple dinner"],
  ["Book ahead", "2–4 weeks for a farmhouse in Nov–Feb; earlier for 24 Dec, 31 Dec and 14 Feb"],
  ["Must-confirm", "Outside decorator allowed, set-up time, music limits, no fireworks or sky lanterns"],
];

const setupRows = [
  ["Candle path and marquee letters", "Candle or LED lantern path to giant 'Marry Me' letters on the lawn", "Simple, photographs well, quick to set up", "Use LED candles if it is windy"],
  ["Fairy-light canopy dinner", "A table for two under string lights or a drape canopy, followed by dinner", "Feels intimate; good for couples who are shy about an audience", "Needs a heater and a backup covered spot"],
  ["Floral arch by the pool", "A flower arch or ring backdrop beside a lit pool", "Strong visual for photos and reels", "Fresh flowers raise the cost; ask about pool safety lighting"],
  ["Picnic or bonfire-style setup", "Rugs, cushions, low table, lanterns and a heater or gas fire pit", "Relaxed, cosy and good for winter", "Wood bonfires are risky under winter pollution rules"],
  ["Family reveal", "Proposal for two, then family and close friends walk out for a small party", "Combines the moment with a celebration", "Plan seating, food and timings for the second part"],
];

const costRows = [
  ["Farmhouse slot (3–5 hours, small property)", "₹12,000–₹30,000"],
  ["Decorator setup", "₹5,000–₹40,000 for candles, balloons and letters; ₹40,000+ for fresh floral arches"],
  ["Photographer or videographer (2–3 hours)", "₹8,000–₹30,000"],
  ["Live musician (guitar or violin)", "₹8,000–₹25,000"],
  ["Dinner for two to ten guests", "₹2,000–₹20,000 depending on menu and headcount"],
  ["Cake, ring box display, flowers", "₹2,000–₹10,000"],
  ["Heaters and extra lighting", "₹2,000–₹8,000 if not included by the farmhouse"],
];

const cell = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="proposal-at-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-22"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-1.webp"
          width={800}
          height={989}
          fetchPriority="high"
          decoding="async"
          alt="Proposal at a farmhouse in Delhi NCR: a lawn with fairy lights, white florals and a decorated seat for the couple"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Proposal at a Farmhouse in Delhi NCR: Setup Ideas, Cost and How to Plan It
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Private Parties • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A proposal at a farmhouse in Delhi NCR gives you what a restaurant,
          rooftop or park rarely can: a space that is completely yours for a
          few hours, room for real décor, and no strangers watching the
          biggest question of your life. Winter is the season for it, with
          clear evenings, Christmas Eve, New Year&apos;s Eve and Valentine&apos;s
          Day all coming up, and this guide covers how to plan one properly.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan a farmhouse proposal in Delhi NCR, book a small farmhouse
            for a 3–5 hour evening slot, hire a decorator for a candle,
            fairy-light or floral setup, and time the moment for sunset
            (around 5:30 PM in December). As an estimate, budget ₹25,000 to
            ₹1,00,000 all-in, book two to four weeks ahead, and confirm the
            venue allows outside decorators.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Proposal at a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <tbody>
              {glanceRows.map((row) => (
                <tr key={row[0]}>
                  <td className={`${cell} font-semibold text-black w-1/3`}>
                    {row[0]}
                  </td>
                  <td className={cell}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          Costs are planning estimates for Delhi NCR in the 2026–27 season and
          vary by area, property, date and décor. Always get written quotes.
        </p>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Propose at a Farmhouse Instead of a Restaurant or Park?
        </h2>

        <p className="mb-6">
          A farmhouse is the most private proposal setting you can book in
          Delhi NCR without leaving the city. Most popular proposal spots are
          shared spaces. Restaurants and rooftops have other diners unless you
          pay to close the space, and public gardens and monuments have rules
          on set-ups and props, so a decorated proposal can be stopped on the
          day. Listicles of the best proposal spots in Delhi often say you
          need to book a whole venue, or get permission before setting up, to
          get any real privacy.
        </p>

        <p className="mb-6">A farmhouse solves those problems:</p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Privacy.</strong> The gate is closed and the only people
            there are the ones you invited.
          </li>
          <li>
            <strong>Space for décor.</strong> A lawn, pool deck or pavilion
            can hold a candle path, floral arch, marquee letters and a dinner
            table at the same time.
          </li>
          <li>
            <strong>Control over timing.</strong> You decide when the lights
            go on, when the music starts and when family walks out.
          </li>
          <li>
            <strong>A celebration afterwards.</strong> If the answer is yes,
            you can have dinner, music and a small party in the same place,
            or stay overnight.
          </li>
        </ul>

        <p className="mb-8">
          Farmhouse belts that work well for proposals include Chattarpur and
          the Mehrauli side for South Delhi, Gurgaon and Sohna Road for
          couples in Gurugram, and Noida and Greater Noida for East Delhi and
          Uttar Pradesh. Pick the area closest to where your partner already
          is, so the travel story stays believable.
        </p>

        {/* =====================================================
            SETUP IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Best Proposal Setup Ideas at a Farmhouse?
        </h2>

        <p className="mb-6">
          The best setup is the one that suits your partner: a quiet,
          candle-lit moment for someone private, a family reveal for someone
          close to their family, or a big floral backdrop for someone who
          will want the photos. These five formats work well at Delhi NCR
          farmhouses:
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Setup</th>
                <th className={`${cell} text-left`}>What it looks like</th>
                <th className={`${cell} text-left`}>Why it works</th>
                <th className={`${cell} text-left`}>Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {setupRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => (
                    <td key={i} className={cell}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Whatever you choose, keep the setup in one area that the photographer
          can frame from a distance. For more ways to do fairy lights, drapes
          and candles on a budget, see our guide to{" "}
          <Link
            href="/blogs/farmhouse-party-decoration-ideas-budget-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse party decoration ideas on a budget
          </Link>
          .
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Proposal at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-6">
          As a rough estimate, a private proposal at a farmhouse in Delhi NCR
          costs about ₹25,000 to ₹1,00,000 all-in, depending on the venue,
          the décor and how many people join afterwards. For reference, Delhi
          NCR proposal decorators publish packages across a wide range:{" "}
          <a
            href="https://jusst4you.com/delhi-ncr/proposal-decoration-in-delhi-ncr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            one decorator&apos;s Delhi NCR listings
          </a>{" "}
          run from about ₹7,499 for a simple surprise to about ₹1,24,999 for a
          luxury garden proposal, and{" "}
          <a
            href="https://surpriseplanner.in/blog/best-private-proposal-spots-delhi-ncr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            another planner&apos;s 2026 list
          </a>{" "}
          shows packages from under ₹5,000 to about ₹70,000 for a poolside
          setup (prices as listed when checked in October 2026).
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Cost item</th>
                <th className={`${cell} text-left`}>Typical range (estimate)</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr key={row[0]}>
                  <td className={cell}>{row[0]}</td>
                  <td className={cell}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-8">
          Estimates only. Weekend, Christmas Eve, New Year&apos;s Eve and
          Valentine&apos;s Day slots are usually priced higher, and some
          farmhouses bundle décor, heaters or dinner into the slot price.
        </p>

        <p className="mb-8">
          Three ways to keep the cost down: book a weekday evening rather
          than a Saturday, use LED candles and fairy lights instead of a full
          fresh-flower arch, and keep the after-party to close family and
          friends so a simple dinner is enough.
        </p>

        {/* =====================================================
            TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time to Propose at a Farmhouse in Winter?
        </h2>

        <p className="mb-6">
          The best time is late afternoon running into early evening. In
          December the sun sets around 5:30 PM in Delhi, so a proposal at
          about 5:00–5:30 PM gives you golden light for photos, and the
          fairy lights and candles take over as it gets dark. After about
          7:30 PM winter nights get cold and foggy, so plan the dinner or
          celebration under cover or near heaters.
        </p>

        <p className="mb-6">Dates to plan around this season:</p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Late November to mid-December weekends:</strong> wedding
            season takes many farmhouses on Fridays and Saturdays, so book
            early or choose a weekday.
          </li>
          <li>
            <strong>Christmas Eve (Thursday 24 December 2026):</strong> a
            popular proposal date that also overlaps with Christmas parties.
          </li>
          <li>
            <strong>New Year&apos;s Eve (Thursday 31 December 2026):</strong>{" "}
            farmhouses are in heavy demand for parties, so a proposal earlier
            in the day or on 30 December is easier to book. See our{" "}
            <Link
              href="/blogs/new-years-eve-party-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              New Year&apos;s Eve farmhouse party guide
            </Link>{" "}
            if you want to combine the two.
          </li>
          <li>
            <strong>Valentine&apos;s Day (Sunday 14 February 2027):</strong>{" "}
            the biggest proposal date of the year, and the evening falls on a
            weekend, so expect early bookings.
          </li>
        </ul>

        <p className="mb-8">
          If you want sunset light and an empty lawn, a day-use slot that
          ends at 7–8 PM is usually enough. If you plan a dinner and a small
          party afterwards, compare options in our{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            day-use vs overnight farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            SURPRISE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan a Surprise Proposal at a Farmhouse?
        </h2>

        <p className="mb-6">
          Plan it backwards from the moment your partner walks in. The
          surprise depends on three things: a believable reason to be at the
          farmhouse, one trusted person managing timing, and a setup that is
          finished before your partner arrives. Follow these steps:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Choose the date and the cover story.</strong> A friend&apos;s
            small birthday, a dinner booking, a winter photoshoot or a
            &quot;family lunch&quot; all explain why you are driving to a
            farmhouse.
          </li>
          <li>
            <strong>Book the farmhouse and visit once.</strong> Check the
            spot for the setup, where the photographer can hide, the lighting
            after dark, the washrooms and where cars will park out of sight.
          </li>
          <li>
            <strong>Brief one coordinator.</strong> A friend, sibling or the
            planner handles the decorator, photographer and musician on the
            day so you can stay with your partner.
          </li>
          <li>
            <strong>Fix the setup time.</strong> Ask the decorator to finish
            at least 45 minutes before arrival, and to test candles, lights
            and music.
          </li>
          <li>
            <strong>Agree a signal.</strong> A text to the coordinator when
            you are ten minutes away lets them light candles and cue the
            music.
          </li>
          <li>
            <strong>Plan the reveal.</strong> If family or friends are
            joining, keep them in a room or behind the pavilion until after
            the answer.
          </li>
          <li>
            <strong>Have a plan B.</strong> Know where the setup moves if it
            rains, the wind picks up or air quality is poor.
          </li>
        </ol>

        <p className="mb-8">
          Keep the decorator, photographer and coordinator in one WhatsApp
          group without your partner, and turn off location sharing for the
          day if your partner usually sees it.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Should You Check Before Booking a Farmhouse for a Proposal?
        </h2>

        <p className="mb-6">
          Most farmhouse problems on proposal day come from rules nobody
          asked about. Before you pay an advance, get these answers in
          writing:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Outside decorators and photographers:</strong> are they
            allowed, and is there an entry fee?
          </li>
          <li>
            <strong>Set-up access:</strong> how early can the decorator
            arrive, and is set-up time charged?
          </li>
          <li>
            <strong>Fire and fireworks:</strong> many properties do not allow
            fireworks, sky lanterns or open flames on the lawn, and open
            burning is restricted in winter under the NCR&apos;s pollution
            rules. Check our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className="text-black underline font-semibold"
            >
              GRAP rules guide for parties
            </Link>{" "}
            before planning a bonfire, and ask before using real candles or
            cold-pyro machines.
          </li>
          <li>
            <strong>Music:</strong> a live guitarist or a speaker is usually
            fine, but loud amplified music outdoors is limited at night in
            Delhi NCR, so check the venue&apos;s cut-off.
          </li>
          <li>
            <strong>Guests and alcohol:</strong> if friends and family join
            for a celebration, confirm the guest limit and the venue&apos;s
            alcohol policy.
          </li>
          <li>
            <strong>Cancellation and weather:</strong> what happens to your
            advance if you need to move the date?
          </li>
        </ul>

        <p className="mb-8">
          Pay advances only after you have verified the property and the
          owner. Our guide on{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className="text-black underline font-semibold"
          >
            how to book a farmhouse safely in Delhi NCR
          </Link>{" "}
          lists the checks to do before sending money.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Proposal Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Ring sized, collected and kept somewhere your partner won&apos;t look</li>
          <li>Date chosen, with a backup date if the weather or AQI turns bad</li>
          <li>Farmhouse booked, visited and verified; slot timings in writing</li>
          <li>Decorator confirmed with a reference photo, set-up time and price</li>
          <li>Photographer or videographer briefed on where to hide and when to shoot</li>
          <li>Music planned: a playlist on a speaker or a live musician with a cue song</li>
          <li>Heaters, blankets and a covered spot for winter evenings</li>
          <li>Cover story agreed with any friends who might be asked about it</li>
          <li>Coordinator on site, with the signal for candles and music</li>
          <li>Dinner, cake or a small party ready for after the yes</li>
          <li>Transport home planned, or an overnight stay booked</li>
        </ul>

        {/* =====================================================
            ENTITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan a Private Proposal With Effortless Events
        </h2>

        <p className="mb-8">
          <a
            href="https://effortlessevents.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Effortless Events
          </a>{" "}
          is a Delhi NCR event planning and venue discovery company that helps
          people book farmhouses, villas and venues for proposals, private
          parties, weddings and corporate events.
        </p>

        <p className="mb-8">
          For a proposal, Effortless Events can shortlist private farmhouses
          near you for a short evening slot, check décor and set-up rules
          with the owner before you pay, and coordinate the decorator,
          photographer and timing on the day so you can focus on the moment.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A farmhouse proposal works because it is private, flexible and easy
          to turn into a celebration. Book the venue early for winter dates,
          time the moment for sunset, keep the setup simple and well lit, and
          let one trusted person run the day. If the answer is yes, you are
          already at the right place for the party, and when it is time for
          the next step, our{" "}
          <Link
            href="/blogs/engagement-ceremony-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            engagement ceremony at a farmhouse guide
          </Link>{" "}
          picks up from there.
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
            Planning a Proposal This Winter?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, area and budget. Effortless Events can help you
            find a private farmhouse and plan a proposal setup that stays a
            surprise until the moment you ask.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/farmhouses"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Farmhouses
            </Link>

            <Link
              href="/services"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Get Planning Help
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
