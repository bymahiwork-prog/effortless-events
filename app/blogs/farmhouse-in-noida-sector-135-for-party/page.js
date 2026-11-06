import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Farmhouse in Noida Sector 135 for Party: Cost & Rules",

  description:
    "Booking a farmhouse in Noida Sector 135 for a party? See rent estimates, the UP bar licence that police check, 10 PM music rules and what to confirm first.",

  keywords: [
    "farmhouse in Noida Sector 135 for party",
    "Sector 135 Noida farmhouse price per night",
    "farmhouse on Noida Expressway for party",
    "farmhouse in Sector 150 Noida for party",
    "pool farmhouse Noida Sector 135",
    "occasional bar licence for farmhouse party Noida",
    "Sector 135 vs Chattarpur farmhouse",
  ],

  alternates: { canonical: "/blogs/farmhouse-in-noida-sector-135-for-party" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Farmhouse in Noida Sector 135 for Party: Cost & Rules",

    description:
      "Where the Sector 135 farmhouse belt is, what a night may cost, the UP liquor licence and music rules that apply, and the checks to make before you pay.",

    images: ["/farm-70.webp"],
  },
};

const faqs = [
  {
    q: "What is the price of a farmhouse in Noida Sector 135 for a party?",
    a: "As a rough guide, small private farmhouses in Sector 135 are listed at about ₹12,000–₹35,000 per night for groups of 15–50 guests. One listing site showed 15 Sector 135 farmhouses in that range in November 2026. Extra guests, a DJ, décor and food are usually charged on top, so ask for a total written quote.",
  },
  {
    q: "Do I need a licence to serve alcohol at a farmhouse party in Noida?",
    a: "Yes, unless the venue holds its own bar licence. Noida is in Gautam Buddh Nagar district of Uttar Pradesh, where a one-day occasional bar licence is needed even for private parties. PTI reports in 2023 and 2024 put the fee at ₹4,000 for private gatherings and ₹11,000 for commercial venues; confirm the current fee on the UP excise portal.",
  },
  {
    q: "Do police raid farmhouse parties in Sector 135?",
    a: "Police have acted on parties that served liquor or hookah without permission. In May 2024 Noida police detained several people at a Sector 135 farmhouse party where the organisers had no temporary or occasional licence, and in December 2024 five people were arrested for serving liquor without a licence at a Christmas party in Noida. Get the licence and keep it on site.",
  },
  {
    q: "Till what time can music be played at a farmhouse in Sector 135?",
    a: "Plan for outdoor speakers to stop at 10 PM. India's Noise Pollution Rules do not allow loudspeakers in the open between 10 PM and 6 AM, except in closed premises. Some listings advertise later outdoor music, but the law applies regardless, so move the party indoors at a low volume after 10 PM.",
  },
  {
    q: "How far is Noida Sector 135 from Delhi?",
    a: "Sector 135 sits along the Noida–Greater Noida Expressway. From South-East Delhi it is often 30–60 minutes by road via the DND Flyway or Kalindi Kunj, depending on traffic (estimate). The nearest Aqua Line metro stations are on the Expressway, such as Sector 137 and Sector 142, with a short cab ride to the farm.",
  },
  {
    q: "Is a farmhouse in Sector 135 good for an overnight party?",
    a: "Often, yes. Many Sector 135 farmhouses are small pool farms with 2–5 bedrooms that are priced per night, which suits birthday groups, bachelorettes and friends' getaways of 15–30 people. Check how many guests may stay overnight, because the party limit is usually much higher than the sleeping limit.",
  },
  {
    q: "Is Sector 135 better than Chattarpur for a farmhouse party?",
    a: "It is better when most guests live in Noida, Greater Noida or South-East Delhi, and when you want a small private pool farm. Chattarpur is easier for guests from South, Central and West Delhi and has more large lawns and metro access. Remember that Sector 135 follows UP liquor rules and Chattarpur follows Delhi's P-10 licence.",
  },
];

const glanceRows = [
  ["Best for", "Birthday and anniversary parties for 15–80 guests, pool days, overnight friends' getaways, bachelorettes, small pre-wedding functions and corporate day outings for Noida teams"],
  ["Closest for", "Noida, Greater Noida, Noida Extension, South-East Delhi (Okhla, Sarita Vihar, Jasola) and Faridabad via Kalindi Kunj"],
  ["Main pockets", "Sector 135 and its village pockets off the Noida–Greater Noida Expressway, plus the neighbouring Sector 150/151 and Sector 168 farm belts"],
  ["Venue cost (estimate)", "About ₹12,000–₹35,000 per night for a small private farm, based on November 2026 listings; food and add-ons extra"],
  ["Rules that apply", "UP occasional bar licence for liquor, 10 PM outdoor loudspeaker limit, GRAP pollution rules"],
  ["Getting there", "Noida–Greater Noida Expressway, DND Flyway or Kalindi Kunj from Delhi; Aqua Line metro stations such as Sector 137 and 142"],
];

const pocketRows = [
  ["Sector 135 (off the Expressway)", "Small private pool farms with 2–5 rooms; birthdays, pool days and overnight groups", "Narrow internal lanes; confirm the exact address and parking for every car"],
  ["Sector 150 / 151 side", "Farms and newer pool villas close to large housing societies", "Part of the Yamuna floodplain where farmhouses have been demolished; check land status"],
  ["Sector 168 and nearby", "Pool-party places and day slots close to the Expressway", "Mixed venue types; ask whether you get the property to yourself"],
  ["Further along the Expressway (towards Greater Noida)", "Bigger lawns for 100+ guests and lower per-plate rates", "Longer drive for Delhi guests; see our Greater Noida guide"],
];

const costRows = [
  ["Small private farm, one night (15–50 guests)", "₹12,000–₹35,000 for the venue, based on listed rates"],
  ["Premium pool farm with 4–5 rooms, Saturday night", "₹30,000–₹50,000 or more (estimate)"],
  ["Extra guests above the base count", "Often charged per head; one listing charges ₹1,000 per extra guest"],
  ["DJ with sound", "₹10,000–₹40,000 depending on lights and dance floor"],
  ["Food from a caterer or the farm's kitchen", "Roughly ₹600–₹1,500 per guest for a party menu (estimate)"],
  ["UP occasional bar licence (if serving liquor)", "Reported at ₹4,000 (private) or ₹11,000 (commercial venue)"],
  ["Décor", "₹10,000–₹75,000 for a small to mid-size setup"],
  ["Security deposit", "Commonly ₹3,000–₹25,000, refundable after inspection"],
];

const budgetRows = [
  ["Birthday dinner, 25 guests, evening slot", "₹15,000–₹25,000", "₹18,000–₹35,000", "₹45,000–₹80,000"],
  ["Overnight friends' party, 20 guests", "₹25,000–₹40,000", "₹15,000–₹30,000", "₹50,000–₹90,000"],
  ["Family party, 60 guests, with DJ", "₹25,000–₹45,000", "₹45,000–₹90,000", "₹1–1.8 lakh"],
];

const compareRows = [
  ["Noida Sector 135", "Guests in Noida, Greater Noida and South-East Delhi", "UP: occasional bar licence", "Small private pool farms priced per night"],
  ["Greater Noida", "Guests in Greater Noida, Noida Extension and Ghaziabad", "UP: occasional bar licence", "Bigger lawns and lower per-plate starts"],
  ["Chattarpur", "Guests in South, Central and West Delhi", "Delhi: P-10 licence", "Huge choice, large lawns, metro access"],
  ["Faridabad", "Guests in Faridabad and South Delhi", "Haryana permit", "Lawns near Surajkund; check Aravalli land status"],
];

const cell = "border border-gray-300 p-4";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="farmhouse-in-noida-sector-135-for-party"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-06"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-70.webp"
          width={1382}
          height={921}
          fetchPriority="high"
          decoding="async"
          alt="Farmhouse in Noida Sector 135 for a party: a wide green lawn with a stone path and palms, with high-rise towers in the distance"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Farmhouse in Noida Sector 135 for a Party: Cost, Rules and Checks
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Venues • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A farmhouse in Noida Sector 135 for a party is the obvious choice
          when your guests live in Noida, Greater Noida or South-East Delhi.
          The belt along the Noida–Greater Noida Expressway is full of small
          private pool farms that rent by the night, so it suits birthdays,
          pool days and overnight groups. It also has a history of police
          raids on parties that served liquor without a licence. This guide
          covers where the farms are, what a night may cost, the Uttar
          Pradesh rules to follow and what to check before you pay.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To book a farmhouse in Noida Sector 135 for a party, budget about
            ₹12,000–₹35,000 per night for a small private farm (listed rates,
            November 2026), then add food, DJ and décor. If you serve
            alcohol, get a UP occasional bar licence (reported at ₹4,000 for
            private parties). End outdoor music by 10 PM and get every house
            rule in writing.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sector 135 Farmhouse Party at a Glance
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
          Costs are planning estimates for the 2026–27 season and vary by
          property, date, guest count and inclusions. Always get a written
          quote.
        </p>

        {/* =====================================================
            WHY SECTOR 135
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Book a Farmhouse in Noida Sector 135 for a Party?
        </h2>

        <p className="mb-6">
          Sector 135 works best for small and mid-size private parties from
          the Noida side of NCR. Its main advantages:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Private pool farms.</strong> Most listings here are
            self-contained farms with a lawn, a pool, a party hall and a few
            bedrooms, booked by one group at a time. That makes it easier to
            control the guest list than at a shared lawn.
          </li>
          <li>
            <strong>Close to where Noida lives.</strong> For residents of the
            Expressway societies, central Noida and Greater Noida, the farm is
            often 15–40 minutes away rather than a trip across Delhi.
          </li>
          <li>
            <strong>Night rates instead of per-plate packages.</strong> Small
            farms usually charge a flat rate for the night, so a group of 20
            can bring a caterer or order in instead of paying for a minimum
            number of plates.
          </li>
          <li>
            <strong>Live demand, plenty of choice.</strong> One listing site
            alone runs a dedicated Sector 135 party-farmhouse page with 15
            properties on its first page and more beyond it, so you can
            compare several options for the same date.
          </li>
        </ul>

        <p className="mb-8">
          The trade-offs: few properties hold more than 100 guests, internal
          lanes are narrow, rules vary from farm to farm, and the area has
          been the scene of police action against unlicensed parties. From
          late November, winter Saturdays, Christmas week and New Year&apos;s
          Eve book out first, so shortlist 3–6 weeks ahead.
        </p>

        {/* =====================================================
            POCKETS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Are the Farmhouses in and Around Sector 135?
        </h2>

        <p className="mb-6">
          The farmhouses sit in a belt between the Noida–Greater Noida
          Expressway and the Yamuna, spread across Sector 135 and its
          neighbouring sectors. Listing sites often label any farm in this
          belt as &quot;Sector 135&quot;, so always ask for the exact address
          and a map pin. The main pockets:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Pocket</th>
                <th className={`${cell} text-left`}>Best for</th>
                <th className={`${cell} text-left`}>Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {pocketRows.map((row) => (
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

        <p className="text-base text-gray-500 mb-8">
          A general guide to the area, not a list of specific properties.
          Drive the approach road once in the evening before you book.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Is the farmhouse on land that can host your party?
        </h3>

        <p className="mb-6">
          Ask this before you pay. In August 2025 the Noida Authority
          demolished 23 farmhouses on the Yamuna floodplain in Sectors 150
          and 151, after earlier drives had removed around 125, and the
          Allahabad High Court later ordered a status quo on disputed plots,
          according to{" "}
          <a
            href="https://therealtytoday.com/news/regulatory/allahabad-hc-halts-demolition-orders-status-quo-on-noida-farmhouses-in-yamuna-floodplain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            The Realty Today
          </a>
          . Closer to Sector 135, a{" "}
          <a
            href="https://www.millenniumpost.in/delhi/day-after-police-busted-rave-party-11-farm-houses-sealed-in-noida-352029"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            2019 Millennium Post report
          </a>{" "}
          described the district administration sealing 11 farmhouses in
          Nagla Nagli village for flouting NGT norms, the day after a raid
          on an illegal party in the sector. Ask the owner whether the
          property has any authority notice, sealing order or court case,
          and get a full-refund clause if the venue cannot host you.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Farmhouse in Noida Sector 135 Cost?
        </h2>

        <p className="mb-6">
          A small private farmhouse in Sector 135 is typically listed at
          about ₹12,000–₹35,000 per night. On{" "}
          <a
            href="https://www.partyvillas.in/noida/farmhouse-for-party-in-sector-135"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            PartyVillas&apos; Sector 135 party-farmhouse page
          </a>
          , the 15 properties on the first page in November 2026 ranged
          from ₹12,000 to ₹35,000 per night, with most between ₹18,000 and
          ₹28,500. A separate four-bedroom Sector 135 listing on the same site
          started at ₹30,000 a night, charged ₹1,000 for each extra guest
          and ₹10,000 for a DJ. Treat these as asking prices: weekends, the
          Christmas–New Year week and wedding dates cost more.
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
          Listed rates are from November 2026; other figures are planning
          estimates. Confirm what the night rate includes (rooms, pool,
          music system, crockery, caretaker) before comparing farms.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample Sector 135 party budgets
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Party</th>
                <th className={`${cell} text-left`}>Venue</th>
                <th className={`${cell} text-left`}>Food and drinks set-up</th>
                <th className={`${cell} text-left`}>Likely total</th>
              </tr>
            </thead>
            <tbody>
              {budgetRows.map((row) => (
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

        <p className="text-base text-gray-500 mb-6">
          Estimates only. Totals include a basic DJ or music, simple décor
          and the bar licence where alcohol is served, but not the cost of
          the alcohol itself.
        </p>

        <p className="mb-8">
          To size the bar for your group, use our guide on{" "}
          <Link
            href="/blogs/how-much-alcohol-for-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            how much alcohol to buy for a party
          </Link>
          , and for a full line-by-line budget see{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="text-black underline font-semibold"
          >
            how much a farmhouse party costs in Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Apply to a Farmhouse Party in Sector 135?
        </h2>

        <p className="mb-6">
          Sector 135 is in Gautam Buddh Nagar district of Uttar Pradesh, so
          UP excise rules apply, not Delhi&apos;s P-10 licence or
          Haryana&apos;s permit. These are the four rules that matter most.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Liquor: get the occasional bar licence
        </h3>

        <p className="mb-6">
          Serving alcohol at a private party needs a one-day occasional bar
          licence if the venue has no bar licence of its own. A PTI report
          carried by{" "}
          <a
            href="https://www.siasat.com/planning-house-party-with-alcohol-in-noida-apply-for-occasional-bar-licence-2939181/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Siasat in December 2023
          </a>{" "}
          put the fee at ₹4,000 for private gatherings and ₹11,000 for
          events at commercial venues, applied for online on the UP excise
          portal, and{" "}
          <a
            href="https://www.deccanherald.com/amp/story/india%2Futtar-pradesh%2Fnoida-liquor-shops-to-stay-open-till-11-pm-on-december-31-license-must-for-even-house-parties-3332899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Deccan Herald repeated those fees in December 2024
          </a>
          . Ask the owner which category applies to the farm, confirm the
          current fee on the portal, buy liquor from licensed UP shops and
          keep the bills.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Why the licence matters here: police checks
        </h3>

        <p className="mb-6">
          Sector 135 parties have been raided when the licence was missing.
          In May 2024,{" "}
          <a
            href="https://www.indiatvnews.com/uttar-pradesh/uttar-pradesh-noida-police-raid-farmhouse-party-in-sector-135-several-detained-for-serving-liquor-hookah-illegally-latest-updates-2024-05-18-932006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            India TV reported
          </a>{" "}
          that Noida police detained several people at a Sector 135 farmhouse
          party after a video went viral; the organisers were serving liquor
          and hookah and had no temporary or occasional licence. That
          December,{" "}
          <a
            href="https://www.deccanherald.com/india/uttar-pradesh/noida-5-arrested-for-serving-liquor-without-license-at-christmas-party-3332698"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            Deccan Herald reported five arrests
          </a>{" "}
          for serving liquor without a licence at a Christmas party in
          Noida. The practical lessons:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Apply for the licence a few days ahead and keep a printed copy at the bar.</li>
          <li>Keep the party private: no ticket sales, entry fees or public social media invites.</li>
          <li>Skip hookah; it was part of the problem in the 2024 case.</li>
          <li>Keep a guest list with names and phone numbers, and carry ID; many farms ask for it anyway.</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Music: outdoors ends at 10 PM
        </h3>

        <p className="mb-6">
          India&apos;s Noise Pollution (Regulation and Control) Rules, 2000
          do not allow loudspeakers or public address systems in the open
          between 10 PM and 6 AM, except in closed premises. Sector 135 farms
          sit close to villages and Expressway housing societies, so
          complaints travel fast. Some listings advertise outdoor music till
          10:30 or 11 PM, and one Sector 135 listing gives different music
          cut-offs in two places on the same page. Do not rely on the
          listing: plan the loud part before 10 PM, then move indoors at a
          low volume. Our{" "}
          <Link
            href="/blogs/dj-or-live-band-farmhouse-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            DJ or live band guide
          </Link>{" "}
          has a timing plan that fits.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Pollution: GRAP, bonfires and generators
        </h3>

        <p className="mb-6">
          Noida is part of the NCR, so the Graded Response Action Plan
          applies through winter and can restrict diesel generators, coal or
          wood tandoors and open fires as air quality worsens. Ask for
          electric heaters or compliant backup power, skip fireworks, and
          read our{" "}
          <Link
            href="/blogs/grap-rules-weddings-parties-delhi-ncr"
            className="text-black underline font-semibold"
          >
            GRAP rules guide for weddings and parties
          </Link>{" "}
          before planning a bonfire.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          House rules: get them in writing
        </h3>

        <p className="mb-8">
          Sector 135 listings do not always agree with themselves. One we
          checked gave two different check-in times, two different deposit
          amounts and conflicting answers on whether outside food is
          allowed. Before paying, get one written message from the owner
          covering check-in and check-out, guest and overnight limits, pool
          hours, outside caterer and decorator policy, cleaning charges and
          the deposit refund timeline. Our list of{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse rules to check before booking
          </Link>{" "}
          has the full set of questions.
        </p>

        {/* =====================================================
            COMPARE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sector 135 vs Greater Noida, Chattarpur or Faridabad: Which Is Better?
        </h2>

        <p className="mb-6">
          Sector 135 is better for a small private pool farm when most
          guests live in Noida or South-East Delhi; the other belts win for
          bigger lawns or Delhi-heavy guest lists.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Area</th>
                <th className={`${cell} text-left`}>Easiest for</th>
                <th className={`${cell} text-left`}>Liquor rule</th>
                <th className={`${cell} text-left`}>Typical strength</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
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
          For 100+ guests on a big lawn, see our guide to a{" "}
          <Link
            href="/blogs/farmhouse-in-greater-noida-for-party"
            className="text-black underline font-semibold"
          >
            farmhouse in Greater Noida for a party
          </Link>
          ; for a Delhi guest list, compare a{" "}
          <Link
            href="/blogs/farmhouse-in-chattarpur-for-party"
            className="text-black underline font-semibold"
          >
            farmhouse in Chattarpur for a party
          </Link>
          .
        </p>

        {/* =====================================================
            WHICH PARTIES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Parties Suit a Sector 135 Farmhouse Best?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Birthday and anniversary dinners</strong> for 20–60
            guests with a lawn set-up and an indoor hall for after 10 PM.
          </li>
          <li>
            <strong>Overnight friends&apos; parties and bachelorettes</strong>{" "}
            for 15–30 people who want rooms and a private pool.
          </li>
          <li>
            <strong>Winter pool days</strong> if the farm has a heated pool;
            ask how it is heated and what it costs.
          </li>
          <li>
            <strong>Christmas and New Year&apos;s Eve parties</strong> for
            groups from the Expressway societies; see our{" "}
            <Link
              href="/blogs/new-years-eve-party-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              New Year&apos;s Eve farmhouse party guide
            </Link>{" "}
            and book early.
          </li>
          <li>
            <strong>Corporate day outings</strong> for teams based in Noida
            sectors along the Expressway.
          </li>
          <li>
            <strong>Small haldi, mehendi or roka functions</strong> for
            close family, with a separate lawn venue for the big events.
          </li>
        </ul>

        {/* =====================================================
            HOW TO BOOK
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How to Book a Sector 135 Farmhouse Without Surprises
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>Fix the guest count and slot.</strong> Day, evening or
            overnight, how many will stay the night, and whether you need
            the pool.
          </li>
          <li>
            <strong>Shortlist three farms with exact addresses.</strong>{" "}
            Compare total quotes including extra guests, DJ, décor and
            cleaning, not just the night rate.
          </li>
          <li>
            <strong>Visit or get a live video walk-through.</strong> Check
            the lawn, indoor hall, washrooms, kitchen, rooms, pool fencing
            and parking.
          </li>
          <li>
            <strong>Ask about land status and licences.</strong> Any
            authority notice, sealing order or court case, and whether the
            farm holds its own bar licence.
          </li>
          <li>
            <strong>Get the house rules in one written message.</strong>{" "}
            Timings, music, food, guest limits, deposit and refund terms.
          </li>
          <li>
            <strong>Pay a small advance, traceably.</strong> Use bank
            transfer or UPI to a named account and keep the receipt. Our
            guide on{" "}
            <Link
              href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
              className="text-black underline font-semibold"
            >
              how to book a farmhouse safely
            </Link>{" "}
            covers scam red flags.
          </li>
          <li>
            <strong>Apply for the bar licence</strong> a few days before
            the party if you are serving alcohol.
          </li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sector 135 Farmhouse Booking Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Exact address and map pin confirmed; approach lane driven in the evening</li>
          <li>Parking checked for every guest car</li>
          <li>No authority notice, sealing order, floodplain dispute or court case</li>
          <li>Total quote in writing, including extra-guest, DJ, décor and cleaning charges</li>
          <li>Check-in, check-out, party guest limit and overnight limit in one written message</li>
          <li>Food policy and outside caterer or decorator terms confirmed</li>
          <li>UP occasional bar licence applied for and printed, if serving liquor</li>
          <li>No hookah, ticketing or public invites</li>
          <li>Outdoor music planned to end by 10 PM, indoor space ready after</li>
          <li>GRAP plan B for heaters, generators and any bonfire</li>
          <li>Guest list with phone numbers and ID for everyone</li>
          <li>Security deposit amount and refund timeline agreed</li>
        </ul>

        {/* =====================================================
            ENTITY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Find a Sector 135 Farmhouse With Effortless Events
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
          people book farmhouses, villas and venues for private parties,
          weddings and corporate events across Delhi, Gurgaon, Noida, Greater
          Noida and Faridabad.
        </p>

        <p className="mb-8">
          If you are considering Sector 135, Effortless Events can compare
          farms for your guest count, check the rules, land status and
          paperwork with the owner before you pay, and coordinate catering,
          décor and music on the day. For more Noida options, see our guide
          to the{" "}
          <Link
            href="/blogs/best-farmhouses-noida-private-parties-celebrations"
            className="text-black underline font-semibold"
          >
            best farmhouses in Noida for private parties
          </Link>
          .
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A farmhouse in Noida Sector 135 is a strong choice for small and
          mid-size private parties when your guests live on the Noida side.
          Compare total quotes rather than night rates, confirm the land
          status, get the house rules in writing, apply for a UP occasional
          bar licence if you serve liquor, end outdoor music by 10 PM and
          book winter weekends early.
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
            Looking for a Farmhouse in Noida Sector 135?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count and budget. Effortless Events can
            shortlist farmhouses that suit your party and check the details
            with the owner before you pay an advance.
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
