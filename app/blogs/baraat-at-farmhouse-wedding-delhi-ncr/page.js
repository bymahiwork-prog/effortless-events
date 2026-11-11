import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Baraat at a Farmhouse Wedding in Delhi NCR: Cost & Rules",

  description:
    "Planning the baraat for a farmhouse wedding? Band, ghodi and dhol prices in Delhi, timing, route inside the venue, firecracker and 10 PM rules, checklist.",

  keywords: [
    "baraat at farmhouse wedding Delhi NCR",
    "baraat band price Delhi",
    "ghodi for baraat price Delhi",
    "are firecrackers allowed in baraat in Delhi",
    "how long does a baraat take",
    "baraat timing for wedding",
    "baraat entry ideas at farmhouse",
  ],

  alternates: { canonical: "/blogs/baraat-at-farmhouse-wedding-delhi-ncr" },

  openGraph: {
    title: "Baraat at a Farmhouse Wedding in Delhi NCR: Cost & Rules",
    description:
      "Band, ghodi, dhol and lights prices, how long a baraat takes, when to start it, where to route it at a farmhouse, the firecracker ban and a checklist.",
    images: ["/event-gallery-3.webp"],
  },
};

const faqs = [
  {
    q: "How much does a baraat band cost in Delhi?",
    a: "Starting prices listed for Delhi NCR band-baaja vendors on BandBaajaBarat in November 2026 range from about ₹21,000 to ₹91,000, and one Gurgaon band's own 2025 rate card puts standard packages at ₹45,000–₹70,000 with premium setups far higher. The final quote depends on the number of players, lights, the date and how long the band stays.",
  },
  {
    q: "What is the price of a ghodi for a baraat in Delhi?",
    a: "One Delhi wedding-services site lists a single decorated ghodi at ₹5,999 and two decorated ghodis with a baggi at ₹20,999 (November 2026 listing). Prices rise on peak muhurat dates and with travel to farmhouses on the city edge, so confirm the total including transport before paying an advance.",
  },
  {
    q: "Are firecrackers allowed in a baraat in Delhi NCR?",
    a: "No. The Supreme Court has kept a year-round ban on firecrackers across Delhi-NCR since April 2025. For Diwali 2026 it allowed certified green crackers only on 7 and 8 November, and the ban was restored from 9 November, so plan a baraat without fireworks.",
  },
  {
    q: "How long does a baraat take?",
    a: "Most baraats take about 45 to 90 minutes from the groom mounting the ghodi to the milni at the gate. A procession that stays inside the farmhouse drive can be done in 30 to 45 minutes; one that starts from a nearby hotel or road usually runs longer, especially on busy muhurat evenings.",
  },
  {
    q: "What time should the baraat start?",
    a: "Work backwards from the jaimala and the phera muhurat. For a typical evening wedding the baraat leaves around 7 to 8 PM, so the milni and jaimala finish before dinner and any outdoor music ends by 10 PM. In December and January, starting earlier helps you finish before fog thickens.",
  },
  {
    q: "Can the baraat play music after 10 PM in Delhi?",
    a: "Not on outdoor loudspeakers without permission. Noise rules bar loudspeakers and sound systems in open areas between 10 PM and 6 AM, and Delhi Police has required prior permission for loudspeaker use. Keep the band and DJ part of the baraat well before 10 PM.",
  },
  {
    q: "Can the baraat be held inside the farmhouse?",
    a: "Yes, and at most farmhouses it is the easier option. Many families start the procession at the farmhouse gate or a side lawn and walk it along the inner drive to the entrance, which avoids road traffic and keeps the timing in your hands. Ask the owner about the drive length, gate width and whether a horse is allowed on the lawn.",
  },
];

const glanceRows = [
  ["How long it takes", "About 45–90 minutes; 30–45 minutes if it stays inside the farmhouse drive (estimate)"],
  ["When to start", "Usually 7–8 PM for an evening wedding; earlier in December–January fog season"],
  ["Band (Delhi NCR listings)", "Starting prices of about ₹21,000–₹91,000 per vendor on BandBaajaBarat (Nov 2026)"],
  ["Decorated ghodi (listed price)", "₹5,999 single; ₹20,999 for two ghodis with a baggi (Shopshaadi, Nov 2026)"],
  ["Dhol pair (estimate)", "About ₹5,000–₹15,000 for 30–60 minutes"],
  ["Firecrackers", "Not allowed: year-round Delhi-NCR ban; 2026 Diwali window closed on 8 Nov"],
  ["Outdoor music", "Finish before 10 PM unless you hold written permission"],
  ["Book", "4–8 weeks before a muhurat date; earlier for late-November and early-December weekends"],
];

const routeRows = [
  ["Inside the farmhouse (gate to entrance)", "30–45 min", "No traffic, full control of timing, easy for elders", "Short drive can feel rushed; check horse and band access on lawns"],
  ["From a nearby hotel or guest house", "60–90 min", "Classic look, guests already gathered at the hotel", "Road traffic on muhurat nights, police and resident complaints, harder to time"],
  ["From a side lawn or parking area of the same venue", "30–45 min", "Space for the band to set up and for photos", "Needs a clear path past parked cars and vendor trucks"],
  ["Short car baraat plus a walk-in at the gate", "20–30 min of walking", "Works for small or winter weddings", "Less of a procession; needs parking near the gate"],
];

const costRows = [
  ["Band-baaja (players, uniforms, music)", "₹21,000–₹91,000 starting prices on one Delhi NCR directory (Nov 2026)", "Ask how many players, how long they stay and whether lights are included"],
  ["Decorated ghodi", "₹5,999 listed (single); higher on peak dates", "Add transport to the farmhouse and waiting time"],
  ["Two ghodis plus baggi", "₹20,999 listed", "Check the drive is wide and level enough for a carriage"],
  ["Dhol pair", "≈ ₹5,000–₹15,000 (estimate)", "Often booked for the milni or entry even if a band plays the route"],
  ["Light carriers (roshni)", "Often bundled with the band; ask separately", "Prefer battery LED over a generator trolley during GRAP"],
  ["DJ on a cart or van", "≈ ₹15,000–₹40,000 (rough estimate)", "Volume and time limits apply; check the farmhouse allows it on the drive"],
  ["Vintage car or decorated car", "Ask for quotes", "Useful in winter or for a short car baraat"],
  ["Safa tying for the baraatis", "Ask for quotes; usually per head", "Book for 30–45 minutes before the start"],
];

const runRows = [
  ["6:00 PM", "Safa tying, baraatis gather at the start point; band and lights arrive and set up"],
  ["6:45 PM", "Sehra bandi and ghodi rituals; photos"],
  ["7:00 PM", "Baraat starts: band, dhol, dancing along the planned route"],
  ["7:45 PM", "Arrival at the gate; milni between the two families"],
  ["8:00 PM", "Groom's entry and jaimala on stage"],
  ["8:30 PM", "Dinner opens; band and outdoor music wind down well before 10 PM"],
  ["Muhurat time", "Pheras at the mandap"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="baraat-at-farmhouse-wedding-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-11"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/event-gallery-3.webp"
          width={1440}
          height={810}
          fetchPriority="high"
          decoding="async"
          alt="Baraat at a farmhouse wedding in Delhi NCR: a flower-covered wedding mandap on a raised platform, where the procession ends and the pheras take place"
          className="w-full max-w-4xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Baraat at a Farmhouse Wedding in Delhi NCR: Cost, Timing and Rules
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
          Planning the baraat at a farmhouse wedding in Delhi NCR is mostly a
          question of four things: who you book (band, ghodi, dhol, lights),
          when you start, where the procession walks, and which rules you must
          follow. With the 2026 wedding season reopening in late November and
          a second wave of dates in January and February 2027, band and ghodi
          bookings are filling now. This guide gives real listed prices,
          a timing plan, route options for a farmhouse, the firecracker and
          music rules, and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A farmhouse baraat usually takes 45–90 minutes and starts around
            7–8 PM. Delhi NCR band starting prices listed online run from about
            ₹21,000 to ₹91,000, and a decorated ghodi is listed from ₹5,999.
            Firecrackers are banned year-round in Delhi-NCR, and outdoor music
            should end by 10 PM. Keeping the procession inside the farmhouse
            drive avoids road traffic.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Baraat at a Farmhouse in Delhi NCR: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Question</th>
                <th className="border border-gray-300 p-4 text-left">Short answer</th>
              </tr>
            </thead>
            <tbody>
              {glanceRows.map(([q, a]) => (
                <tr key={q}>
                  <td className="border border-gray-300 p-4">{q}</td>
                  <td className="border border-gray-300 p-4">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Prices are either listed figures from the sources linked below
          (checked November 2026) or clearly labelled estimates. Vendor rates
          change by date, so always get a written quote.
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Are the Busiest Baraat Dates in 2026–27?
        </h2>

        <p className="mb-8">
          The busiest baraat evenings are the muhurat dates themselves, and
          the first stretch after Dev Uthani Ekadashi is the most crowded. For
          December,{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            VedicFeed&apos;s December 2026 marriage calendar
          </a>{" "}
          lists muhurats on 2–6, 11 and 12 December, with Kharmas pausing most
          weddings from mid-December to mid-January; the next wave runs from
          late January into February 2027. Panchangs differ, so confirm your
          date with your family priest.
        </p>

        <p className="mb-8">
          Peak dates matter for a baraat because the same bands, ghodis and
          dhol players are booked for several weddings in one evening. To give
          a sense of scale,{" "}
          <a
            href="https://dailypioneer.com/2024/pioneer-exclusive/band--baaja--baraat-and----traffic-jams.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Pioneer reported
          </a>{" "}
          around 50,000 weddings in Delhi on the opening day of the 2024 season,
          with baraats slowing traffic in areas such as Mahipalpur, Mehrauli
          and Rohini. On dates like these, vendors run late and roads jam, so
          book early and build in buffer time.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Baraat Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A simple farmhouse baraat with a band, one ghodi and a dhol pair can
          come in well under ₹1 lakh; add a baggi, a DJ cart, more players and
          lights and it rises quickly. Listed prices give a useful floor: the{" "}
          <a
            href="https://www.bandbaajabarat.com/vendors/delhi-ncr/band-baaja-ghodi-wala"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            BandBaajaBarat Delhi NCR directory
          </a>{" "}
          shows starting prices from about ₹21,000 to ₹91,000 per band, and a
          Gurgaon band&apos;s{" "}
          <a
            href="https://rajdhaniband.com/blog/how-to-book-the-best-baraat-band-near-you-in-gurgaon-complete-guide-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            published 2025 rate card
          </a>{" "}
          puts basic packages at ₹45,000–₹60,000, standard at
          ₹50,000–₹70,000 and premium from ₹1.2 lakh upwards. For the horse,{" "}
          <a
            href="https://shopshaadi.com/package/baraat-needs/ghori/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Shopshaadi lists
          </a>{" "}
          a single decorated ghodi at ₹5,999 and two ghodis with a baggi at
          ₹20,999.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Item</th>
                <th className="border border-gray-300 p-4 text-left">Listed price or estimate</th>
                <th className="border border-gray-300 p-4 text-left">What to check</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map(([item, price, check]) => (
                <tr key={item}>
                  <td className="border border-gray-300 p-4">{item}</td>
                  <td className="border border-gray-300 p-4">{price}</td>
                  <td className="border border-gray-300 p-4">{check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample baraat budget for a 200-guest farmhouse wedding (estimate)
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li><strong>Band with lights, about 90 minutes:</strong> ₹50,000–₹70,000</li>
          <li><strong>Decorated ghodi with transport:</strong> ₹8,000–₹15,000</li>
          <li><strong>Dhol pair for the milni:</strong> ₹5,000–₹15,000</li>
          <li><strong>Safa tying for close family:</strong> ₹5,000–₹15,000</li>
          <li><strong>Flower petals, confetti, small props:</strong> ₹5,000–₹10,000</li>
          <li><strong>Total:</strong> roughly ₹73,000–₹1.25 lakh before any DJ cart, baggi or premium band</li>
        </ul>

        <p className="mb-8">
          Before you pay an advance, ask each vendor three things in writing:
          how many players or staff will come, how long they stay from arrival,
          and what the charge is if the baraat runs late. Late-running is the
          most common source of extra bills on muhurat nights. For the rest of
          the evening&apos;s music, see our{" "}
          <Link href="/blogs/dj-or-live-band-farmhouse-party-delhi-ncr" className="underline">
            DJ or live band guide
          </Link>
          .
        </p>

        {/* =====================================================
            TIMING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Long Does a Baraat Take, and When Should It Start?
        </h2>

        <p className="mb-8">
          Plan for 45 to 90 minutes from the groom mounting the ghodi to the
          milni at the gate, and start the baraat around 7 to 8 PM for a
          typical evening wedding. Work backwards from two fixed points: the
          jaimala, which most families want before dinner opens, and the phera
          muhurat, which may be late at night. In December and January, an
          earlier start helps you finish before fog thickens and before the
          10 PM outdoor music cut-off.
        </p>

        <p className="mb-6">A sample timeline for a farmhouse baraat:</p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Time</th>
                <th className="border border-gray-300 p-4 text-left">What happens</th>
              </tr>
            </thead>
            <tbody>
              {runRows.map(([t, w]) => (
                <tr key={t}>
                  <td className="border border-gray-300 p-4 whitespace-nowrap">{t}</td>
                  <td className="border border-gray-300 p-4">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If the pheras are after midnight, resist the urge to start the
          baraat late as well; the band and outdoor music still need to stop
          by 10 PM. For more on timing functions around cold and fog, see our{" "}
          <Link href="/blogs/winter-wedding-farmhouse-delhi-ncr" className="underline">
            winter farmhouse wedding guide
          </Link>
          .
        </p>

        {/* =====================================================
            ROUTE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Should the Baraat Walk at a Farmhouse?
        </h2>

        <p className="mb-8">
          At most Delhi NCR farmhouses, the easiest route starts at the main
          gate or a side lawn and follows the inner drive to the entrance.
          Farmhouses in Chattarpur, Bijwasan, Sohna Road or the Noida
          Expressway belt are often on narrow approach roads, where a
          procession on a busy muhurat evening blocks other weddings&apos;
          guests and annoys neighbours. Keeping the baraat on private ground
          also means you control the pace.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Route</th>
                <th className="border border-gray-300 p-4 text-left">Typical walking time</th>
                <th className="border border-gray-300 p-4 text-left">Pros</th>
                <th className="border border-gray-300 p-4 text-left">Watch-outs</th>
              </tr>
            </thead>
            <tbody>
              {routeRows.map(([r, t, p, w]) => (
                <tr key={r}>
                  <td className="border border-gray-300 p-4">{r}</td>
                  <td className="border border-gray-300 p-4">{t}</td>
                  <td className="border border-gray-300 p-4">{p}</td>
                  <td className="border border-gray-300 p-4">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-6">Before you fix the route, walk it with the farmhouse manager and check:</p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>Length of the drive and whether it is paved, lit and level enough for a horse and elders.</li>
          <li>Gate width and height for a ghodi with a canopy, a baggi or a DJ cart.</li>
          <li>Where the band, lights and horse can wait without blocking guest parking.</li>
          <li>Whether horses are allowed on the drive or lawn, and who cleans up after.</li>
          <li>A clear meeting point at the entrance for the milni, with space for both families.</li>
        </ul>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Are Firecrackers and Loud Music Allowed in a Baraat in Delhi NCR?
        </h2>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Firecrackers: no
        </h3>

        <p className="mb-8">
          Firecrackers are not allowed. The Supreme Court imposed a
          year-round ban on manufacturing, selling and bursting firecrackers
          across Delhi-NCR in April 2025, as{" "}
          <a
            href="https://www.business-standard.com/india-news/diwali-2026-are-firecrackers-allowed-in-delhi-this-year-what-we-know-126110200310_1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Business Standard summarises
          </a>
          . For Diwali 2026 the court allowed certified green crackers only on
          7 and 8 November, in fixed hours, and{" "}
          <a
            href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            restored the ban from 9 November 2026
          </a>
          . The order makes no exception for weddings, so the fireworks moment
          at the gate needs a replacement: flower-petal showers, confetti
          cannons, a dhol crescendo at the milni or a lit floral arch at the
          entrance. If a vendor offers &quot;cold pyro&quot; or sparkler
          machines, clear them with the farmhouse first and keep them away from
          fabric and drapes.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Music: finish before 10 PM
        </h3>

        <p className="mb-8">
          India&apos;s noise rules bar loudspeakers and sound systems in open
          areas between 10 PM and 6 AM unless the authorities permit it, and
          Delhi Police has{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            made prior permission mandatory for loudspeaker use
          </a>
          . A band and DJ cart are loud by design, so schedule the baraat to
          finish well before 10 PM and ask the farmhouse what it allows at
          the gate, which is often closest to neighbours.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Lights and power: watch GRAP
        </h3>

        <p className="mb-8">
          Traditional roshni light carriers are often powered by a generator
          trolley that walks with the baraat. Once GRAP is in force, diesel
          generator use is restricted in the NCR, so ask for battery LED lights
          or confirm the generator meets the current rules. Our{" "}
          <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className="underline">
            GRAP rules for weddings guide
          </Link>{" "}
          explains each stage.
        </p>

        {/* =====================================================
            IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are Good Baraat Entry Ideas at a Farmhouse?
        </h2>

        <p className="mb-6">
          A farmhouse gives you space a banquet hall cannot, so the entry can
          be part of the procession rather than a squeeze through a lobby.
          Ideas that work well within the rules:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li><strong>Dhol-only last stretch:</strong> the band stops at the gate and a dhol pair takes the groom to the milni, which keeps the volume down near neighbours.</li>
          <li><strong>Lit pathway:</strong> fairy lights, lanterns or diyas along the inner drive replace the light carriers.</li>
          <li><strong>Petal shower at the gate:</strong> the bride&apos;s family showers petals from a raised platform or the entrance arch.</li>
          <li><strong>Vintage car or baggi:</strong> a good option on cold nights or for a groom who prefers not to ride.</li>
          <li><strong>Short car baraat:</strong> for small weddings, cars park near the gate and the family walks the last stretch with a dhol.</li>
          <li><strong>Folk band instead of brass:</strong> a Rajasthani or Punjabi folk group can lead the procession with a softer sound.</li>
        </ul>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Baraat Planning Checklist for a Farmhouse Wedding
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li><strong>6–8 weeks out:</strong> confirm the muhurat; book the band, ghodi and dhol for the exact date and time; get itemised written quotes.</li>
          <li><strong>4 weeks out:</strong> walk the route with the farmhouse manager; agree where the band, horse and lights wait.</li>
          <li><strong>2 weeks out:</strong> share the timeline with every vendor; fix a late-running charge in writing.</li>
          <li><strong>1 week out:</strong> check the GRAP stage and fog forecast; confirm battery lights or compliant power.</li>
          <li><strong>Day before:</strong> confirm arrival times; brief one family member to run the baraat on the day.</li>
          <li><strong>On the day:</strong> start on time, keep the music outdoors before 10 PM, no firecrackers.</li>
        </ul>

        <p className="mb-8">
          For the night before the wedding, see our{" "}
          <Link href="/blogs/sangeet-night-farmhouse-delhi-ncr" className="underline">
            sangeet at a farmhouse guide
          </Link>
          , and for the whole budget, our{" "}
          <Link href="/blogs/farmhouse-wedding-cost-delhi-ncr" className="underline">
            farmhouse wedding cost guide
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          weddings, private parties, family celebrations and corporate events.
          For a baraat, we can help you choose a farmhouse with a drive and
          gate that suit a procession, line up band, ghodi and dhol quotes, and
          keep the timeline on track on the day.
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
            Find a Farmhouse Made for a Baraat
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses across Delhi
            NCR with the drive, gate and space a baraat needs, and coordinate
            the vendors on the day.
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
