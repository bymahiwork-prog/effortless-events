import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Family Staycation Near Delhi: Winter Vacation Villa Guide",

  description:
    "Planning a family staycation near Delhi this winter break? 2026–27 holiday dates, villa vs resort, cost estimates, kid-safety checks and a 2-night plan.",

  keywords: [
    "family staycation near Delhi",
    "staycation near Delhi with kids",
    "private villa near Delhi for family",
    "winter vacation staycation near Delhi",
    "Christmas and New Year staycation near Delhi",
    "villa staycation cost near Delhi",
    "Delhi school winter vacation 2027",
  ],

  alternates: { canonical: "/blogs/family-staycation-villa-near-delhi" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Family Staycation Near Delhi: Winter Vacation Villa Guide",

    description:
      "How to plan a winter-break family staycation at a private villa near Delhi: best 2026–27 dates, villa vs resort, area table, cost estimates, kid-safety checks and a sample 2-night plan.",

    images: ["/farm-39.webp"],
  },
};

const faqs = [
  {
    q: "Which is the best place for a family staycation near Delhi?",
    a: "It depends on how far you want to drive. Sohna Road, Damdama and Manesar suit families in Gurgaon and South Delhi; Chattarpur and Mehrauli are closest for central Delhi; the Noida Expressway belt and Greater Noida suit East Delhi and Noida families. Pick an area within about 60–90 minutes so the trip itself does not eat the holiday.",
  },
  {
    q: "How much does a villa staycation near Delhi cost per night?",
    a: "As a rough estimate, a 3–4 bedroom private villa or farmhouse stay near Delhi costs about ₹12,000–₹35,000 a night on ordinary winter dates, and often 1.5–2 times that on Christmas and New Year nights. Listings in the Noida Sector 135 belt showed ₹12,000–₹35,000 a night in November 2026. Always confirm what the rate includes.",
  },
  {
    q: "When is the Delhi school winter vacation in 2027?",
    a: "Delhi's Directorate of Education set the 2025–26 winter break from 1 to 15 January 2026, and Haryana followed the same window. The 2026–27 dates are usually notified in December, so treat early-to-mid January 2027 as the likely window and check your school's circular before you pay an advance.",
  },
  {
    q: "Is a private villa better than a resort for a family with kids?",
    a: "A private villa is usually better for larger families or several households travelling together, because you get the whole property, your own kitchen and flexible meal times. A resort is easier for one small family that wants daily housekeeping, a restaurant and kids' activities without organising anything.",
  },
  {
    q: "Can kids swim in a villa pool in winter near Delhi?",
    a: "Only if the pool is heated and you swim in the warmest hours, roughly late morning to mid-afternoon. December nights near Delhi can drop to single digits, so an unheated pool is too cold for children. Ask the host for the water temperature and heating charges in writing before you book.",
  },
  {
    q: "How far in advance should I book a villa for Christmas or New Year near Delhi?",
    a: "Book about 4–8 weeks ahead for the Christmas weekend (Friday 25 to Sunday 27 December 2026) and the New Year weekend (Friday 1 to Sunday 3 January 2027). Larger villas with heated pools fill first. Midweek dates in the January school break are easier to get and usually cheaper.",
  },
  {
    q: "Are bonfires allowed at a villa near Delhi in winter?",
    a: "Do not count on a wood bonfire. GRAP, which runs through winter in Delhi NCR, bans open burning from Stage I. Ask whether the villa has a gas fire pit or patio heaters instead, and never use a coal angithi inside a closed room.",
  },
];

const cell = "border border-gray-300 p-4";

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h) => (
              <th key={h} className={`${cell} text-left`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((c, i) => (
                <td
                  key={i}
                  className={i === 0 ? `${cell} font-semibold text-black` : cell}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const glanceRows = [
  ["Best windows", "Christmas weekend (25–27 Dec 2026), New Year weekend (1–3 Jan 2027), school winter break midweek (likely early-to-mid Jan 2027)"],
  ["Ideal drive", "Within 60–90 minutes of home: Sohna Road, Manesar, Chattarpur, Noida Expressway, Greater Noida, Faridabad"],
  ["Stay type", "Private villa or farmhouse stay for 2+ households; resort for one small family"],
  ["Cost (estimate)", "About ₹12,000–₹35,000 a night for a 3–4 bedroom villa; 1.5–2x on Christmas and New Year nights"],
  ["Length", "2 nights is the sweet spot; 1 night feels rushed with packing and check-in"],
  ["Must-check", "Room heaters, hot water, pool fence or cover, gate, balcony railings, heating charges"],
  ["Book", "4–8 weeks ahead for holiday weekends; 1–3 weeks for January weekdays"],
];

const datesRows = [
  ["Fri 25 – Sun 27 Dec 2026", "Christmas long weekend", "High demand; book early; good for a 2-night stay"],
  ["Mon 28 – Wed 30 Dec 2026", "Midweek between the holidays", "Often cheaper; offices quieter; good if you can take leave"],
  ["Fri 1 – Sun 3 Jan 2027", "New Year long weekend", "Peak rates; families often prefer 1–2 Jan over NYE night itself"],
  ["Early-to-mid Jan 2027 (weekdays)", "Likely school winter break", "Best value window; check your school's circular"],
  ["Sat 9 – Sun 10 Jan 2027", "Weekend before Lohri (Wed 13 Jan)", "Combine a staycation with a family Lohri"],
  ["Sat 23 – Tue 26 Jan 2027", "Republic Day (Tue) bridge", "Take Monday off for a 4-day break"],
];

const typeRows = [
  ["Private villa (3–5 BHK)", "2–3 households, 8–16 people", "Whole property, own kitchen, privacy, flexible meals", "You manage food or a cook; housekeeping varies"],
  ["Farmhouse stay with rooms", "Big families, 12–25 people", "Large lawn for kids, space for games and a family meal", "Fewer bedrooms than lawn size suggests; check heating"],
  ["Resort", "One family of 3–5", "Restaurant, housekeeping, kids' club at some properties", "Shared pool and spaces; per-room pricing adds up for groups"],
  ["Serviced apartment or city home", "Couples with a toddler, short trips", "Close to home, cheaper, no long drive", "No lawn or outdoor space; less of a holiday feel"],
];

const areaRows = [
  ["Sohna Road / Damdama", "Gurgaon, South Delhi", "Aravalli views, pool villas, quiet mornings", "Weekend traffic on Sohna Road; check land status"],
  ["Manesar / Pataudi Road", "West Gurgaon, Dwarka", "Bigger plots, pool villas with rooms", "Longer drive from East Delhi"],
  ["Chattarpur / Mehrauli", "Central and South Delhi", "Closest to the city; metro nearby for visiting relatives", "Many farms are party-first; confirm it is set up for stays"],
  ["Noida Expressway (Sec 135, 150, 168)", "Noida, East Delhi", "Small pool farms, short drive for Noida families", "Many listings target parties; ask about quiet hours"],
  ["Greater Noida / Yamuna Expressway", "Noida, Greater Noida, Ghaziabad", "Larger lawns, open space", "Fewer staffed villas; check meals"],
  ["Faridabad / Surajkund", "South Delhi, Faridabad", "Aravalli setting, short drive from South Delhi", "Check Aravalli land status before paying"],
];

const costRows = [
  ["3–4 BHK villa, ordinary winter night", "₹12,000–₹35,000 a night (estimate)"],
  ["Same villa, Christmas or New Year night", "Often 1.5–2x the ordinary rate (estimate)"],
  ["Pool heating (if heated)", "Often charged extra, roughly ₹3,000–₹10,000 a day (estimate)"],
  ["Cook or caretaker meals", "Food at actuals plus a cook fee, or ₹600–₹1,500 per person a day (estimate)"],
  ["Extra mattress or extra guest", "₹500–₹2,000 per person a night (estimate)"],
  ["Refundable security deposit", "Commonly ₹5,000–₹25,000 (estimate)"],
];

const budgetRows = [
  ["Villa: 2 nights on ordinary dates", "₹40,000"],
  ["Pool heating: 1 day", "₹6,000"],
  ["Meals: 8 people, 2 days", "₹16,000"],
  ["Fuel, tolls and snacks", "₹4,000"],
  ["Activities and supplies", "₹3,000"],
  ["Total (estimate)", "About ₹69,000, or roughly ₹8,600 per person"],
];

const safetyRows = [
  ["Pool", "Fence, lockable gate or cover; depth markings; lifeguard or a named adult on watch"],
  ["Stairs and balconies", "Railings without wide gaps; gates for toddlers; no climbable furniture near edges"],
  ["Heaters", "Oil-filled or fan heaters in rooms; gas heaters only outdoors or in ventilated spaces"],
  ["Hot water", "Geyser temperature set safely; mixer taps for small children"],
  ["Gates and boundary", "Main gate closed and latched; no open road access from the lawn"],
  ["Animals", "Ask whether dogs live on the property and if they stay tied or indoors"],
  ["Medical", "Nearest hospital and travel time; first-aid kit on site"],
];

const planRows = [
  ["Day 1, 12:00–1:00 PM", "Check in, walk the property with the caretaker, note the gate, pool and heater switches"],
  ["Day 1, 1:30 PM", "Lunch on the lawn in the sun"],
  ["Day 1, 3:00–5:00 PM", "Lawn games, cycling or a treasure hunt while it is warm"],
  ["Day 1, 5:30 PM", "Sunset; move indoors or to the patio heaters"],
  ["Day 1, 7:30 PM", "Hot soup, dinner, board games or a movie night"],
  ["Day 2, 9:30 AM", "Late breakfast (fog usually lifts by late morning)"],
  ["Day 2, 11:30 AM–2:30 PM", "Heated-pool swim in the warmest hours, if available"],
  ["Day 2, evening", "Barbecue on a gas grill, stargazing if the sky is clear, family quiz"],
  ["Day 3, 10:00 AM", "Breakfast, pack, check-out walk-through for the deposit"],
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="family-staycation-villa-near-delhi"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-07"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farm-39.webp"
          width={1600}
          height={1066}
          fetchPriority="high"
          decoding="async"
          alt="Family staycation near Delhi: the bright living room of a private villa with sofas, a breakfast bar and a staircase to the bedrooms"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Family Staycation Near Delhi: A Winter Vacation Villa Guide for
          2026–27
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Stays • Last updated: November 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A family staycation near Delhi is often the easiest way to use the
          winter break. There are no flights to lose to fog, no hill-station
          traffic jams and no packing for snow. You drive an hour, take over a
          private villa or farmhouse stay, and spend two days in the sun with
          the people you actually want to see. This guide covers the best
          2026–27 dates, how a villa compares with a resort, which areas suit
          which part of the city, what it costs, how to check a property for
          small children and a sample two-night plan.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a winter family staycation near Delhi, book a 3–4 bedroom
            private villa within 60–90 minutes of home for two nights. The
            best windows are the Christmas weekend (25–27 December 2026), the
            New Year weekend (1–3 January 2027) and midweek dates in the
            January school break. Budget roughly ₹12,000–₹35,000 a night
            (estimate) and check heaters and pool safety first.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Family Staycation Near Delhi: At a Glance
        </h2>

        <Table headers={["Question", "Short answer"]} rows={glanceRows} />

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Best Time for a Winter Staycation Near Delhi?
        </h2>

        <p className="mb-8">
          The best time is the window when the whole family is free and the
          rates are not at their peak, which usually means the school winter
          break rather than New Year&apos;s Eve itself. For the 2025–26
          session,{" "}
          <a
            href="https://www.outlookindia.com/education/winter-vacation-202526-state-wise-school-holiday-schedule-and-reopening-dates"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Outlook reported
          </a>{" "}
          that Delhi&apos;s Directorate of Education set winter vacation from
          1 to 15 January 2026, with Haryana on the same dates and Uttar
          Pradesh schools closing earlier, from 20 to 31 December 2025.{" "}
          <a
            href="https://www.millenniumpost.in/delhi/schools-shut-till-january-15-643250"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Millennium Post
          </a>{" "}
          noted the break was scheduled because of cold, dense fog and low
          visibility. The 2026–27 dates are usually notified in December, so
          treat early-to-mid January 2027 as likely, and confirm with your
          school before paying an advance.
        </p>

        <Table
          headers={["Dates", "What it is", "Staycation note"]}
          rows={datesRows}
        />

        <p className="mb-8">
          If your children are in a Noida or Ghaziabad school, check whether
          the break falls in late December instead. Mixed families with kids
          in different boards often find the overlap is just the New Year
          weekend, which is why that weekend books out first.
        </p>

        {/* =====================================================
            TYPE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Private Villa, Farmhouse Stay or Resort: Which Suits Your Family?
        </h2>

        <p className="mb-8">
          A private villa suits two or three households travelling together,
          because you get every room, the kitchen and the lawn to yourselves.
          A resort suits a single small family that wants housekeeping and a
          restaurant. For comparison, CurlyTales&apos; December 2025 list of{" "}
          <a
            href="https://curlytales.com/staycation-properties-starting-at-n-for-a-low-key-christmas-and-new-year"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Christmas and New Year staycation properties
          </a>{" "}
          quoted resort rooms near Delhi from about ₹4,500 to ₹19,000 a night,
          and those are per room, so a family of eight needing three rooms can
          pay more than for a whole villa.
        </p>

        <Table
          headers={["Stay type", "Best for", "Pros", "Watch out for"]}
          rows={typeRows}
        />

        <p className="mb-8">
          The main decision is whether you want a stay or a party. Many
          farmhouses near Delhi are built for day events and have only a
          couple of rooms. If you want to sleep there, read our guide to{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="underline"
          >
            day-use vs overnight farmhouse bookings
          </Link>{" "}
          before you shortlist.
        </p>

        {/* =====================================================
            AREAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Should You Book a Family Staycation Near Delhi?
        </h2>

        <p className="mb-8">
          Book in the belt closest to where most of the family lives. With
          young children, a 60–90 minute drive is the practical limit: it
          avoids a car-sick toddler and lets you check in by lunchtime. Drive
          times below are typical and depend heavily on traffic, especially on
          holiday Friday evenings.
        </p>

        <Table
          headers={["Area", "Easiest from", "Good for", "Check"]}
          rows={areaRows}
        />

        <p className="mb-8">
          Some properties in the Aravalli and Yamuna floodplain belts have
          faced sealing or demolition in recent years. Before paying, ask the
          host for proof that the property operates legally and has not had a
          notice, and use a traceable payment method.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Villa Staycation Near Delhi Cost?
        </h2>

        <p className="mb-8">
          A 3–4 bedroom private villa near Delhi typically costs about
          ₹12,000–₹35,000 a night on ordinary winter dates, and holiday nights
          cost more. As a real data point, PartyVillas&apos; listings for{" "}
          <a
            href="https://www.partyvillas.in/noida/farmhouse-for-party-in-sector-135"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            farmhouses in Noida Sector 135
          </a>{" "}
          showed ₹12,000–₹35,000 a night in November 2026. The figures below
          are planning estimates, not quotes. Always ask what is included.
        </p>

        <Table headers={["Item", "Typical range"]} rows={costRows} />

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample budget: two nights, 8 people (two families)
        </h3>

        <Table headers={["Line item", "Estimate"]} rows={budgetRows} />

        <p className="mb-8">
          Split across two households, that is about ₹35,000 each for two
          nights, which is often less than three resort rooms on the same
          dates. Costs rise quickly on Christmas and New Year nights, so the
          January weekday window gives the best value.
        </p>

        {/* =====================================================
            SAFETY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is a Private Villa Safe for Young Children?
        </h2>

        <p className="mb-8">
          A private villa can be very safe for children, but only if you check
          it the way a resort would. Villas are homes, not hotels, and many
          have open pools, glass balconies and gas heaters that are fine for
          adults but risky for toddlers. Ask for photos or a video call of
          these points before you pay, and walk the property on arrival.
        </p>

        <Table headers={["Area", "What to check"]} rows={safetyRows} />

        <p className="mb-8">
          Never use a coal angithi or charcoal heater inside a closed bedroom.
          Burning fuel in a sealed room can build up carbon monoxide, which
          has no smell. Electric oil-filled heaters are the safer choice for
          rooms where children sleep.
        </p>

        {/* =====================================================
            WINTER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Cold Does It Get, and Can Kids Use the Pool?
        </h2>

        <p className="mb-8">
          Days are pleasant but nights are cold. According to{" "}
          <a
            href="https://weatherspark.com/m/109174/12/Average-Weather-in-December-in-New-Delhi-NCT-India"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WeatherSpark&apos;s December averages
          </a>{" "}
          for New Delhi, daily highs fall from about 24°C to 20°C through the
          month and lows from about 11°C to 8°C. On the coldest mornings it
          drops much further: the{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-experiences-coldest-january-morning-since-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Tribune reported
          </a>{" "}
          3.2°C at Safdarjung in January 2026. Plan the day around the sun:
          outdoor play from late morning to about 4:30 PM, and indoor or
          patio time after sunset.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Pool:</strong> only a heated pool is comfortable for
            children in December–January, and only in the warmest hours. Our
            guide to{" "}
            <Link
              href="/blogs/farmhouse-with-heated-pool-near-delhi"
              className="underline"
            >
              farmhouses with a heated pool near Delhi
            </Link>{" "}
            explains heating types, water temperature and charges.
          </li>
          <li>
            <strong>Rooms:</strong> confirm one heater per bedroom, working
            geysers and extra blankets.
          </li>
          <li>
            <strong>Fire:</strong> GRAP bans open burning from Stage I, so do
            not plan a wood bonfire. Ask for a gas fire pit or patio heater.
          </li>
          <li>
            <strong>Fog:</strong> dense fog is common on December–January
            mornings, so drive in after it lifts and avoid late-night drives
            home. In January 2025,{" "}
            <a
              href="https://scroll.in/latest/1077519/delhi-over-270-flights-delayed-17-cancelled-due-to-dense-fog"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Scroll reported
            </a>{" "}
            over 270 flights delayed at Delhi in a single morning of fog,
            which is one reason a drive-to staycation is less risky than a
            flight in this season.
          </li>
        </ul>

        {/* =====================================================
            ACTIVITIES + PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Can Families Do on a Staycation Near Delhi?
        </h2>

        <p className="mb-8">
          The best family staycations keep the plan simple: sun in the day,
          warmth and food in the evening. Pick a few of these and leave space
          for doing nothing.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Treasure hunt or nature trail on the lawn for younger children</li>
          <li>Cricket, badminton or frisbee in the afternoon sun</li>
          <li>Cycling, if the villa or the area allows it</li>
          <li>A family cook-off or pizza night in the villa kitchen</li>
          <li>Board games, a quiz and a movie night under blankets</li>
          <li>Stargazing on clear nights, away from city lights</li>
          <li>A short morning walk in the Aravalli belt (Sohna, Faridabad)</li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample two-night family staycation plan
        </h3>

        <Table headers={["When", "What happens"]} rows={planRows} />

        {/* =====================================================
            BOOKING
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Book a Family Villa Near Delhi Safely?
        </h2>

        <p className="mb-8">
          Book through a verified host or platform, pay a small advance by a
          traceable method and get every inclusion in writing. Holiday weeks
          are when fake listings and advance-payment scams peak, so read our
          guide on{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className="underline"
          >
            how to book a farmhouse safely in Delhi NCR
          </Link>{" "}
          before you send money.
        </p>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Questions to ask the host
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>How many bedrooms have heaters and attached bathrooms with hot water?</li>
          <li>Is the pool heated, what is the water temperature and is heating extra?</li>
          <li>Is the pool fenced or covered, and are balconies child-safe?</li>
          <li>Is a cook or caretaker on site, and how are meals charged?</li>
          <li>What are check-in and check-out times, and is early check-in possible?</li>
          <li>Are other guests or events on the property during our stay?</li>
          <li>What is the deposit, and when and how is it refunded?</li>
          <li>
            Are pets allowed, and are there dogs on the property? (Bringing
            your own dog? See our{" "}
            <Link
              href="/blogs/pet-friendly-farmhouse-near-delhi"
              className="underline"
            >
              pet-friendly farmhouse guide
            </Link>
            .)
          </li>
          <li>What is the nearest hospital and how long is the drive?</li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Family staycation checklist
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>4–8 weeks out:</strong> fix dates around the school break;
            shortlist villas in one area; book holiday weekends.
          </li>
          <li>
            <strong>2 weeks out:</strong> confirm inclusions, meals, pool
            heating and deposit in writing.
          </li>
          <li>
            <strong>3 days out:</strong> check the fog forecast and the GRAP
            stage; share the location pin with everyone.
          </li>
          <li>
            <strong>Pack:</strong> warm layers, caps, thermals, swimwear and
            towels, a child&apos;s medicines, first-aid kit, extension cord,
            power bank, games and snacks for the drive.
          </li>
          <li>
            <strong>On arrival:</strong> walk the gate, pool and heaters with
            the caretaker; take photos for the deposit.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          family stays, private celebrations, weddings and corporate events.
          For a winter staycation, we can help you shortlist villas in the
          right area, check heating, pool and child-safety details before you
          pay, and arrange a cook or a small family celebration on site.
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
            Find a Villa for Your Family&apos;s Winter Break
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your dates, how many people are coming, where the family
            lives and your budget. Effortless Events can help you shortlist
            private villas and farmhouse stays near Delhi that are warm,
            child-friendly and easy to reach.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/farmhouses"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Farmhouses &amp; Villas
            </Link>

            <Link
              href="/services"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Plan My Staycation
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
