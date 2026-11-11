import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Winter Wedding at a Farmhouse in Delhi NCR: Cold & Fog Guide",

  description:
    "Planning a winter wedding at a farmhouse in Delhi NCR? December 2026 dates, heaters per guest, enclosed tents, fog backups, GRAP rules and a checklist.",

  keywords: [
    "winter wedding at farmhouse Delhi NCR",
    "how to keep guests warm at outdoor wedding",
    "heaters for outdoor wedding Delhi",
    "winter wedding tips Delhi",
    "December 2026 wedding dates",
    "fog wedding planning Delhi",
    "outdoor vs indoor winter wedding venue",
  ],

  alternates: { canonical: "/blogs/winter-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Winter Wedding at a Farmhouse in Delhi NCR: Cold & Fog Guide",

    description:
      "How to keep a December or January farmhouse wedding warm and on time: heater maths, enclosed mandaps, function timings, fog backups for guests, GRAP rules and a checklist.",

    images: ["/event-gallery-2.webp"],
  },
};

const faqs = [
  {
    q: "Is a farmhouse a good venue for a winter wedding in Delhi?",
    a: "Yes, if you plan for the cold. Winter days in Delhi NCR are mild and sunny, which suits open lawns for haldi, mehendi and photos, but nights can drop to a few degrees above freezing. Book a farmhouse with an enclosed or indoor area, heater points and enough power, and the lawn works well.",
  },
  {
    q: "How do you keep guests warm at an outdoor wedding in winter?",
    a: "Layer several things: patio or infrared heaters close to seating, side walls or an enclosed tent to block the wind, carpeted flooring, hot drinks and soups served from the start, and a basket of shawls at the entrance. Seat older guests nearest the heaters and keep the late-night pheras in a covered space.",
  },
  {
    q: "How many heaters do I need for an outdoor wedding?",
    a: "A common planning rule is one patio heater for every 8–12 seated guests in the open, so about 10–15 heaters for 120 guests. Inside an enclosed tent you need fewer, because the walls hold the heat. Treat this as an estimate and ask your tent vendor to plan heater positions on the seating layout.",
  },
  {
    q: "What are the wedding dates in December 2026?",
    a: "VedicFeed's December 2026 calendar lists vivah muhurats on 2, 3, 4, 5, 6, 11 and 12 December, with no dates after 12 December. Weddings usually pause during Kharmas from mid-December to mid-January, so confirm the exact muhurat and timing with your family pandit.",
  },
  {
    q: "What time are pheras held at a December wedding?",
    a: "The muhurat decides it, and in winter many muhurats fall late at night or in the early hours. That is when Delhi NCR is coldest and foggiest, so hold the pheras in an enclosed or heated mandap, keep a hot-drinks counter running and arrange rooms or cabs for guests who stay till the end.",
  },
  {
    q: "Can we have a bonfire or angithi at a winter wedding in Delhi NCR?",
    a: "Do not count on it. GRAP bans open burning of biomass and waste from Stage I, and enforcement is strict through winter, so a wood bonfire or coal angithi can get the event into trouble. Gas patio heaters, gas fire pits and electric heaters are the safer ways to keep guests warm.",
  },
  {
    q: "What if fog delays wedding guests' flights or trains?",
    a: "Build slack into the plan. Ask outstation guests to arrive a day early, book their stay close to the venue, share a live contact for the transport desk, and schedule the key rituals with a buffer. Dense fog in Delhi regularly delays morning flights and trains in December and January.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="winter-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-06"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/event-gallery-2.webp"
          width={1296}
          height={729}
          fetchPriority="high"
          decoding="async"
          alt="Winter wedding at a farmhouse in Delhi NCR: a floral mandap on an open lawn at dusk with the couple seated for the rituals"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Winter Wedding at a Farmhouse in Delhi NCR: The Cold and Fog Guide
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Weddings • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A winter wedding at a farmhouse in Delhi NCR can look beautiful:
          sunny lawns for the haldi, fairy lights against a clear evening sky
          and a mandap under the stars. It can also turn into a night of
          shivering guests, a late baraat stuck in fog and a dinner gone cold.
          The difference is planning for the weather the way you plan for the
          décor. This guide covers the December 2026 dates, how cold it really
          gets, how many heaters to book, when to enclose the venue, how to
          time each function, a fog plan for guests and what GRAP means for
          fires and generators.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a winter wedding at a farmhouse in Delhi NCR, hold day
            functions on the open lawn and move night functions into an
            enclosed or side-walled tent. Plan about one patio heater per
            8–12 seated guests outdoors, use gas or electric heat instead of
            wood fires because of GRAP, and ask outstation guests to arrive a
            day early in case fog delays travel.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Winter Wedding at a Farmhouse in Delhi NCR: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Question
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Short answer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Season</td>
                <td className="border border-gray-300 p-4">
                  Late November to February; coldest and foggiest from mid-December
                  to late January
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  December 2026 muhurats
                </td>
                <td className="border border-gray-300 p-4">
                  2, 3, 4, 5, 6, 11 and 12 December (per VedicFeed); confirm
                  with your pandit
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Night temperature</td>
                <td className="border border-gray-300 p-4">
                  Can fall to about 3°C on the coldest January mornings
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Heaters</td>
                <td className="border border-gray-300 p-4">
                  About 1 patio heater per 8–12 seated guests in the open
                  (estimate); fewer inside an enclosed tent
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Fires</td>
                <td className="border border-gray-300 p-4">
                  Avoid wood bonfires and coal angithis under GRAP; use gas or
                  electric heat
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Fog plan</td>
                <td className="border border-gray-300 p-4">
                  Outstation guests arrive a day early; stay near the venue;
                  buffer before key rituals
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Book</td>
                <td className="border border-gray-300 p-4">
                  Venue now for December; tent, heaters and generator 4–6
                  weeks before the date
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is Winter Wedding Season in Delhi NCR in 2026–27?
        </h2>

        <p className="mb-8">
          The 2026 wedding season opens after Dev Uthani Ekadashi in late
          November and runs in two blocks. For December,{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            VedicFeed&apos;s December 2026 marriage calendar
          </a>{" "}
          lists muhurats on 2, 3, 4, 5, 6, 11 and 12 December, and none after
          the 12th. The same source notes that Kharmas usually runs from
          mid-December to mid-January, a period when most families avoid
          weddings, so the second block of winter dates follows from late
          January into February.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Early December (2–6 Dec):</strong> nights are cool rather
            than biting, fog is less frequent, and the 5 December Saturday
            muhurat will be one of the most contested farmhouse dates of the
            season.
          </li>
          <li>
            <strong>11–12 December:</strong> colder evenings, and the 11
            December muhurat runs into the early hours, so plan for a
            late-night ceremony.
          </li>
          <li>
            <strong>Late January to February 2027:</strong> the coldest,
            foggiest stretch at its start, easing into pleasant February
            evenings. Ask your pandit for the exact dates.
          </li>
        </ul>

        <p className="mb-8">
          Every muhurat date pushes up farmhouse rents, tent rates and
          caterer prices, so lock the venue first. Our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className="underline"
          >
            farmhouse wedding cost guide
          </Link>{" "}
          explains how per-plate and flat-rent pricing work on these dates.
        </p>

        {/* =====================================================
            WEATHER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Cold and Foggy Does a Delhi NCR Winter Wedding Get?
        </h2>

        <p className="mb-8">
          Cold enough that an open lawn after 10 PM is uncomfortable for most
          guests. Afternoons in December and January are usually sunny and
          pleasant, but temperatures fall quickly after sunset, which comes
          around 5:30 PM. On 12 January 2026, Safdarjung recorded a minimum of
          3.2°C, 4.2 degrees below the seasonal average, according to{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-experiences-coldest-january-morning-since-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Tribune
          </a>
          . Farmhouses on the city&apos;s edges, such as Chattarpur, Sohna
          Road, Greater Noida and Alipur, often feel colder than central Delhi
          because they are open, green and away from buildings.
        </p>

        <p className="mb-8">
          Fog is the other risk. On 3 January 2025,{" "}
          <a
            href="https://scroll.in/latest/1077519/delhi-over-270-flights-delayed-17-cancelled-due-to-dense-fog"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Scroll reported
          </a>{" "}
          that 279 departures from Delhi airport were delayed, 17 flights were
          cancelled and 24 trains ran late because of dense fog. For a
          wedding, that means late-arriving relatives, slow drives home on
          expressways and a baraat that may need extra time (see our{" "}
          <Link href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr" className="underline">
            baraat at a farmhouse guide
          </Link>{" "}
          for timing and route tips).
        </p>

        {/* =====================================================
            WARMTH
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep Guests Warm at an Outdoor Winter Wedding?
        </h2>

        <p className="mb-8">
          No single heater solves it. You get warmth by combining shelter,
          heat and comfort. Walls and a roof stop the wind that makes a cold
          night feel colder. Heaters then warm the air inside, and food,
          drinks and shawls do the rest. Here is how the main options
          compare.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Option
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best for
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Watch out for
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Gas patio (mushroom) heaters
                </td>
                <td className="border border-gray-300 p-4">
                  Open lawns, dinner seating, bar and photo areas
                </td>
                <td className="border border-gray-300 p-4">
                  Outdoor use only; keep clear of drapes, florals and kids;
                  check spare cylinders
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Electric or infrared heaters
                </td>
                <td className="border border-gray-300 p-4">
                  Enclosed tents, mandaps, green rooms and covered verandas
                </td>
                <td className="border border-gray-300 p-4">
                  Needs a sanctioned load or a GRAP-compliant generator; ask
                  for dedicated circuits
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Gas fire pits</td>
                <td className="border border-gray-300 p-4">
                  Lounge seating, after-party corners, sangeet sit-downs
                </td>
                <td className="border border-gray-300 p-4">
                  Warm a small circle only; need a stable, non-flammable base
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Side walls or an enclosed hangar-style tent
                </td>
                <td className="border border-gray-300 p-4">
                  Night ceremonies, pheras, dinner for 100+ guests
                </td>
                <td className="border border-gray-300 p-4">
                  Adds cost and setup time; plan ventilation and fire exits
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Indoor hall at the farmhouse
                </td>
                <td className="border border-gray-300 p-4">
                  Small weddings and late-night rituals
                </td>
                <td className="border border-gray-300 p-4">
                  Check capacity against your real guest count
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Wood bonfire or coal angithi
                </td>
                <td className="border border-gray-300 p-4">Not recommended</td>
                <td className="border border-gray-300 p-4">
                  Open burning is banned under GRAP; smoke also ruins photos
                  and clothes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          How many heaters do you need for a wedding?
        </h3>

        <p className="mb-8">
          A practical planning rule is one patio heater for every 8–12 seated
          guests in the open. Inside a side-walled or enclosed tent you can
          usually work with fewer, because the walls trap the heat. Treat
          these figures as estimates and ask the tent vendor to mark heater
          positions on the seating plan.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>50 guests, open lawn:</strong> about 5–6 patio heaters,
            plus 2 near the bar and buffet.
          </li>
          <li>
            <strong>120 guests, open lawn:</strong> about 10–15 heaters spread
            through the seating, not lined up along the edges.
          </li>
          <li>
            <strong>250 guests:</strong> enclose the dinner and mandap area
            and use heaters inside, plus a few outside at the entrance, bar
            and photo points. Our{" "}
            <Link
              href="/blogs/german-hangar-tent-wedding-delhi-ncr"
              className="underline"
            >
              German hangar tent guide
            </Link>{" "}
            covers sizes and costs for an enclosed hall.
          </li>
          <li>
            <strong>Mandap:</strong> 2–4 heaters or electric panels placed so
            the couple, parents and pandit stay warm through a long ceremony.
          </li>
        </ul>

        <p className="mb-8">
          Smaller winter gatherings follow the same logic on a smaller scale.
          Our{" "}
          <Link
            href="/blogs/winter-bonfire-party-farmhouse-delhi-ncr"
            className="underline"
          >
            winter bonfire party guide
          </Link>{" "}
          covers fire pits, heater safety and the open-burning fine in more
          detail.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Small comforts guests notice
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>A basket of shawls or blankets at the entrance and the mandap.</li>
          <li>
            A hot-drinks counter (masala chai, coffee, kahwa, hot chocolate)
            open from the moment guests arrive, not only after dinner.
          </li>
          <li>
            Soups, tikkas and live counters near the seating so guests are
            not walking across a cold lawn for food.
          </li>
          <li>Carpet or flooring over grass, which gets damp with dew.</li>
          <li>
            Heated rooms for the bride, groom and elderly relatives to rest
            between functions.
          </li>
        </ul>

        {/* =====================================================
            TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is the Best Time for Each Function in a Winter Wedding?
        </h2>

        <p className="mb-8">
          Use the sun for everything you can hold outdoors, and save the
          enclosed space for the night. A winter farmhouse wedding usually
          follows a rhythm like this.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Function
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Best winter slot
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Setup tip
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Haldi</td>
                <td className="border border-gray-300 p-4">
                  11 AM–2 PM, in full sun
                </td>
                <td className="border border-gray-300 p-4">
                  Warm water for washing off; heated rooms to change in
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Mehendi</td>
                <td className="border border-gray-300 p-4">
                  12–5 PM on the lawn
                </td>
                <td className="border border-gray-300 p-4">
                  Move indoors or under heaters once the sun drops
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Sangeet</td>
                <td className="border border-gray-300 p-4">
                  7–10 PM (outdoor music limit)
                </td>
                <td className="border border-gray-300 p-4">
                  Side walls around the stage and dance floor
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Baraat</td>
                <td className="border border-gray-300 p-4">
                  Early evening, before fog sets in
                </td>
                <td className="border border-gray-300 p-4">
                  Keep the route short and lit; budget extra time
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Pheras</td>
                <td className="border border-gray-300 p-4">
                  As per muhurat, often late night
                </td>
                <td className="border border-gray-300 p-4">
                  Enclosed or heated mandap; chai counter running
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Couple photos</td>
                <td className="border border-gray-300 p-4">
                  4–5:30 PM, before sunset
                </td>
                <td className="border border-gray-300 p-4">
                  Shoot portraits before the evening chill and haze
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The 10 PM limit on outdoor loudspeakers applies to winter weddings
          too, so the dancing has to wrap up or move indoors at a low volume.
          Our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className="underline"
          >
            sangeet night guide
          </Link>{" "}
          has a full run-of-show built around that cut-off.
        </p>

        {/* =====================================================
            FOG PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan for Fog at a Delhi NCR Wedding?
        </h2>

        <p className="mb-8">
          Assume at least one fog delay and build buffers around it. The
          wedding itself rarely stops for fog, but guest arrivals, the baraat
          and late drives home all slow down.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>Fly guests in a day early.</strong> Morning flights and
            overnight trains are the most likely to be delayed, so avoid
            same-day arrivals for anyone in the ceremony.
          </li>
          <li>
            <strong>House guests close to the venue.</strong> A farmhouse with
            rooms, or a hotel or villa block nearby, cuts late-night driving.
            See our{" "}
            <Link
              href="/blogs/wedding-guest-accommodation-delhi-ncr"
              className="underline"
            >
              wedding guest accommodation guide
            </Link>
            .
          </li>
          <li>
            <strong>Run a transport desk.</strong> One coordinator with a live
            phone number, arranged cabs and a pickup schedule.
          </li>
          <li>
            <strong>Light the approach.</strong> Ask the venue for lit
            signage at the turn-off and lights along the drive, since many
            farmhouse lanes have no streetlights.
          </li>
          <li>
            <strong>Add buffers.</strong> Keep about 30–60 minutes of slack
            before the muhurat and between functions.
          </li>
          <li>
            <strong>Keep vendors early.</strong> Ask décor, tent and catering
            teams to finish setup by mid-afternoon rather than racing the fog.
          </li>
        </ol>

        {/* =====================================================
            GRAP & POWER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Do GRAP Rules Mean for a Winter Wedding?
        </h2>

        <p className="mb-8">
          GRAP does not ban weddings. It changes how you heat, power and cook
          for one. Winter is when air quality is worst, so the Graded
          Response Action Plan is usually in force through the season, and
          its stages restrict open burning, coal and wood tandoors and diesel
          generators that do not meet emission rules.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Heating:</strong> gas or electric heaters, not wood fires
            or coal angithis.
          </li>
          <li>
            <strong>Power:</strong> electric heaters, lights and sound draw a
            lot of load. Ask the farmhouse for its sanctioned load, or rent a
            compliant generator and get that in writing.
          </li>
          <li>
            <strong>Cooking:</strong> ask the caterer to confirm gas or
            electric tandoors.
          </li>
          <li>
            <strong>Vehicles:</strong> at higher stages, older cars and some
            vendor trucks face limits, so check guest and vendor vehicles
            early.
          </li>
        </ul>

        <p className="mb-8">
          Our{" "}
          <Link
            href="/blogs/grap-rules-weddings-parties-delhi-ncr"
            className="underline"
          >
            GRAP rules guide for weddings and parties
          </Link>{" "}
          explains each stage in detail.
        </p>

        {/* =====================================================
            BUDGET
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Extra Does Winter Add to a Farmhouse Wedding Budget?
        </h2>

        <p className="mb-8">
          Winter adds a few line items that a spring or monsoon wedding may not
          need. The figures below are rough planning estimates for a Delhi NCR
          farmhouse wedding; real quotes vary with guest count, date and
          vendor.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Winter item
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Rough estimate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Patio heaters with gas, per heater per night
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹1,500–₹3,500
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Side walls for a dinner or mandap area
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹30,000–₹1,00,000, depending on size
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Enclosed hangar-style tent for 150–300 guests
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹1,50,000–₹5,00,000+, depending on size and finish
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Extra generator or power load for heaters
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹15,000–₹60,000 per night
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Shawl basket, hot-drinks counter and soups
                </td>
                <td className="border border-gray-300 p-4">
                  Around ₹15,000–₹75,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Ask whether the farmhouse already includes heaters, side walls or an
          indoor hall in its rent. That one question can change your budget
          more than any other winter item.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Winter Farmhouse Wedding Checklist
        </h2>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Questions to ask the farmhouse before you pay
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Is there an indoor hall or covered area, and how many does it seat?</li>
          <li>How many heaters are included, and which type?</li>
          <li>What is the sanctioned power load, and is backup GRAP-compliant?</li>
          <li>Are side walls or enclosed tents allowed on the lawn?</li>
          <li>Do the rooms have heaters and hot water for overnight guests?</li>
          <li>What is the music cut-off, and can the party move indoors?</li>
          <li>Is the approach road lit for fog nights?</li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Countdown
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>8–12 weeks out:</strong> fix the muhurat, book the
            farmhouse and agree in writing what heating and cover are
            included.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> book the tent, side walls,
            heaters and generator; share the seating plan with heater
            positions.
          </li>
          <li>
            <strong>3 weeks out:</strong> lock outstation travel with a
            day&apos;s buffer and book guest rooms near the venue.
          </li>
          <li>
            <strong>1 week out:</strong> check the GRAP stage, the weather and
            fog forecast; confirm gas cylinders and spare heaters.
          </li>
          <li>
            <strong>On the day:</strong> heaters on 30 minutes before guests
            arrive; chai counter open; transport desk live.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          weddings, private parties, family celebrations and corporate events.
          For a winter wedding, we can help you shortlist farmhouses with
          indoor or covered space, check heating and power before you pay,
          and coordinate the tent, heaters, caterer and guest stays.
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
            Find a Farmhouse for Your Winter Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses with covered
            space, heating and rooms for family across Delhi NCR.
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
              Plan My Wedding
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
