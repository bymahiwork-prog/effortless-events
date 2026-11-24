import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Republic Day Long Weekend Farmhouse Near Delhi: 2027 Guide",

  description:
    "Republic Day 2027 is a Tuesday: plan a 4-day farmhouse stay near Delhi with dates, dry-day and traffic rules, best areas, cost estimates and a checklist.",

  keywords: [
    "Republic Day long weekend farmhouse near Delhi",
    "Republic Day long weekend 2027",
    "long weekend getaway near Delhi January 2027",
    "farmhouse stay near Delhi for group",
    "is 26 January a dry day in Delhi",
    "Republic Day traffic restrictions Delhi",
    "villa near Delhi for long weekend",
  ],

  alternates: {
    canonical: "/blogs/republic-day-long-weekend-farmhouse-near-delhi",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Republic Day Long Weekend Farmhouse Near Delhi: 2027 Guide",

    description:
      "How to plan a Republic Day 2027 long weekend at a farmhouse near Delhi: the 23–26 January bridge, dry-day and parade-traffic rules, area table, cost estimates, a sample plan and a booking checklist.",

    images: ["/farmhouse15.webp"],
  },
};

const faqs = [
  {
    q: "When is the Republic Day long weekend in 2027?",
    a: "Republic Day falls on Tuesday 26 January 2027. If you take Monday 25 January off, you get a four-day break from Saturday 23 to Tuesday 26 January. Without leave, it is a normal Saturday–Sunday weekend plus a separate Tuesday holiday.",
  },
  {
    q: "Is 26 January a dry day in Delhi?",
    a: "Yes, Republic Day has been on Delhi's dry-day list; the January–March 2026 excise order named 26 January as a dry day for liquor shops, bars and clubs. The 2027 order is usually issued close to the date, so check it, and plan any party night with drinks for Saturday 23 or Sunday 24 January instead.",
  },
  {
    q: "Where can I go near Delhi for a long weekend in January?",
    a: "For a short drive, look at private farmhouses and villas on Sohna Road and Damdama, Manesar, Chattarpur, the Noida Expressway belt, Greater Noida, Faridabad's Aravalli side or Murthal near Sonipat. Each is roughly 45–120 minutes from most of Delhi, so you avoid long hill-station drives in fog.",
  },
  {
    q: "How much does a farmhouse near Delhi cost for the Republic Day weekend?",
    a: "As a rough estimate, a 3–5 bedroom private farmhouse or villa near Delhi costs about ₹15,000–₹45,000 a night on a long weekend, often higher than ordinary January weekends. For reference, Noida Sector 135 listings showed about ₹12,000–₹35,000 a night in November 2026. Confirm what the rate includes before paying.",
  },
  {
    q: "Are roads closed in Delhi on Republic Day?",
    a: "Central Delhi roads around Kartavya Path are closed from the evening before until the parade ends, and goods vehicles are kept out of Delhi overnight on 25–26 January. In 2026, Delhi Police restricted commercial vehicle entry from 9 PM on 25 January. Private cars heading to the outskirts are mostly unaffected, but avoid central Delhi on the morning of 26 January.",
  },
  {
    q: "How early should I book a farmhouse for the Republic Day weekend?",
    a: "Book about 4–8 weeks ahead, which means late November to mid-December 2026 for 23–26 January 2027. Larger villas with heated pools and 5+ bedrooms go first. If you only need Tuesday 26 January as a day-use slot, 1–3 weeks is usually enough.",
  },
  {
    q: "Can we have a bonfire at a farmhouse in January near Delhi?",
    a: "Do not count on a wood bonfire. GRAP usually runs through January in Delhi NCR and bans open burning from Stage I. Ask the owner whether there is a gas fire pit or patio heaters, which are the safer and more reliable option.",
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
  ["Dates", "Sat 23 – Tue 26 Jan 2027 if you take Monday 25 Jan off; Republic Day is a Tuesday"],
  ["Best stay length", "2 nights (Sat–Mon) for most groups; 3 nights (Sat–Tue) if everyone has Monday off"],
  ["Party night", "Saturday 23 or Sunday 24 Jan; 26 Jan has been a Delhi dry day"],
  ["Drive", "45–120 minutes: Sohna Road, Manesar, Chattarpur, Noida Expressway, Faridabad, Murthal"],
  ["Cost (estimate)", "About ₹15,000–₹45,000 a night for a 3–5 bedroom farmhouse or villa on the long weekend"],
  ["Weather", "Cold nights and possible dense fog; heaters and a heated pool matter more than a big lawn"],
  ["Book by", "Late November to mid-December 2026 for overnight stays"],
];

const datesRows = [
  ["Sat 23 Jan 2027", "Weekend starts", "Check in after lunch; best night for a party with music and drinks"],
  ["Sun 24 Jan 2027", "Weekend", "Second party night option; slow brunch, games, heated-pool hours"],
  ["Mon 25 Jan 2027", "Working day (take leave)", "Quiet day at the farmhouse; goods vehicles kept out of Delhi from the night of 25 Jan"],
  ["Tue 26 Jan 2027", "Republic Day (gazetted holiday)", "Watch the parade on TV, family lunch, check out after lunch; plan for a dry day"],
];

const formatRows = [
  ["2 nights: Sat–Mon", "Friends or 2–3 families where not everyone gets Monday off", "Party on Saturday, relax Sunday, leave Monday morning", "Check-out time on Monday; morning fog on the drive"],
  ["3 nights: Sat–Tue", "Groups that all take Monday off", "Best value of the holiday; one party night plus two easy days", "Highest total rent; plan food for 3 days"],
  ["2 nights: Sun–Tue", "Families who want Republic Day itself at the farmhouse", "Often a little cheaper than Saturday arrival", "Tuesday is a dry day in Delhi; quieter evenings"],
  ["Day-use on Tue 26 Jan", "Family lunch, kids' games, a patriotic theme", "No overnight cost; 1–3 weeks' notice usually enough", "Daylight ends around 6 PM; no bar in Delhi"],
];

const areaRows = [
  ["Sohna Road & Damdama", "Gurgaon, South Delhi", "Aravalli views, many pool villas, quieter overnight stays", "Check land status and Haryana liquor permit rules"],
  ["Manesar & Pataudi Road", "Gurgaon, Dwarka, West Delhi", "Larger plots, cheaper than central Gurgaon", "Longer drive back in fog; NH-48 traffic on Monday"],
  ["Chattarpur & Mehrauli", "Central and South Delhi", "Closest to the city; good for one party night", "More party-focused; Delhi dry-day rule applies on 26 Jan"],
  ["Noida Expressway (Sector 135 belt)", "Noida, East Delhi", "Easy access, mid-range rates, pool farms", "UP rules for liquor; check sound limits"],
  ["Faridabad (Aravalli side)", "South Delhi, Faridabad", "Greenery, quieter weekends", "Confirm the land is not in a restricted forest area"],
  ["Murthal & Sonipat", "North and West Delhi", "Budget pool farms, the famous dhaba stretch nearby", "Smaller properties; Haryana permit rules"],
];

const costRows = [
  ["Farmhouse or villa rent (2 nights)", "₹30,000 – ₹90,000", "3–5 bedrooms; long-weekend rates run higher"],
  ["Food: cook + groceries, or caterer", "₹600 – ₹1,200 per person per day", "Ask if a cook is included or allowed"],
  ["Heated pool charge", "₹3,000 – ₹10,000 a day", "Only if the pool is heated; ask in writing"],
  ["Heaters, gas fire pit, extra blankets", "₹1,500 – ₹6,000", "Some owners include room heaters"],
  ["Drinks and mixers", "Varies", "Party night on 23 or 24 Jan; check state permit rules"],
  ["Music speaker or small DJ", "₹0 – ₹25,000", "Outdoor music ends by 10 PM"],
  ["Caretaker tip, cleaning, extra mattresses", "₹2,000 – ₹6,000", "Clarify extra-guest charges up front"],
  ["Fuel and tolls", "₹2,000 – ₹6,000 per car", "Depends on area and number of cars"],
];

const checklistItems = [
  "Fix dates and headcount: who is coming for 2 nights and who for 3.",
  "Shortlist 3–4 properties within 2 hours; ask for recent photos and a video call.",
  "Get the full rate in writing: rent, extra-guest fee, heated pool, cook, cleaning and security deposit.",
  "Confirm the number of bedrooms, beds and mattresses, and that every room has a heater and hot water.",
  "Ask about music hours, guest limit, ID rules and whether outside food and a cook are allowed.",
  "Check alcohol rules for that state and keep your party night to 23 or 24 January.",
  "Plan vendor and grocery deliveries for Saturday or Sunday, not the night of 25 January.",
  "Plan the drive for after 10 AM if fog is forecast; share live locations.",
  "Pay the advance through a traceable method, never a full payment to an unknown number.",
  "Keep a backup indoor plan for a cold or smoggy evening: games, movie night, a dhaba run.",
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="republic-day-long-weekend-farmhouse-near-delhi"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-24"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse15.webp"
          width={1382}
          height={921}
          fetchPriority="high"
          decoding="async"
          alt="Republic Day long weekend farmhouse near Delhi: a modern two-storey farmhouse with warm lights, a balcony and a garden path at sunset"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Republic Day Long Weekend Farmhouse Near Delhi: 2027 Planning Guide
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
          A Republic Day long weekend farmhouse near Delhi is one of the
          easiest breaks of early 2027. Republic Day falls on a Tuesday, so one
          day of leave on Monday turns it into four days off, and a private
          farmhouse an hour or two away means no flights to lose to fog and no
          hill-station traffic. This guide covers the exact dates, the dry-day
          and parade-traffic rules that catch groups out, which areas suit
          which part of the city, what it costs and a booking checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For Republic Day 2027 (Tuesday 26 January), take Monday off and
            book a 3–5 bedroom private farmhouse within two hours of Delhi for
            Saturday 23 to Monday 25 or Tuesday 26 January. Keep your party
            night to Saturday or Sunday, because 26 January has been a dry day
            in Delhi. Budget roughly ₹15,000–₹45,000 a night (estimate) and
            book by mid-December.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Republic Day Long Weekend 2027: At a Glance
        </h2>

        <Table headers={["Question", "Short answer"]} rows={glanceRows} />

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Is the Republic Day Long Weekend in 2027?
        </h2>

        <p className="mb-8">
          The Republic Day long weekend in 2027 runs from Saturday 23 to
          Tuesday 26 January if you take Monday 25 January as leave. Republic
          Day is a gazetted holiday that falls on a Tuesday in 2027, and{" "}
          <a
            href="https://www.esquireindia.co.in/lifestyle/travel/long-weekends-in-2027-7-major-holidays-fall-on-weekends-heres-how-to-plan-your-trips"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Esquire India&apos;s 2027 long-weekend planner
          </a>{" "}
          (updated October 2026) lists 23–26 January as a four-day break with
          one day of leave. Because it is the first real long weekend after
          New Year, demand for farmhouses and villas near Delhi tends to bunch
          on these four nights.
        </p>

        <Table
          headers={["Date", "What it is", "Farmhouse note"]}
          rows={datesRows}
        />

        <p className="mb-8">
          If you have a family with school-age children, check the school
          calendar too. Many schools reopen after the winter break in mid
          January, so this weekend is often the first time the whole family
          is free together again.
        </p>

        {/* =====================================================
            FORMATS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Nights Should You Book for the Republic Day Weekend?
        </h2>

        <p className="mb-8">
          Two nights, Saturday to Monday, suits most groups, because it gives
          you one party night and one slow day without paying for the whole
          stretch. Book three nights only if everyone has Monday off. A
          day-use booking on Tuesday 26 January works well for a family lunch
          when you do not want an overnight stay. If you are unsure which
          suits you, our guide to{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="underline"
          >
            day-use vs overnight farmhouse bookings
          </Link>{" "}
          compares the two.
        </p>

        <Table
          headers={["Format", "Best for", "Why it works", "Watch out for"]}
          rows={formatRows}
        />

        {/* =====================================================
            DRY DAY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is 26 January a Dry Day in Delhi?
        </h2>

        <p className="mb-8">
          Yes, Republic Day has been a dry day in Delhi, so do not plan your
          drinks night for Tuesday 26 January. Delhi&apos;s excise order for
          January–March 2026 listed 26 January among five dry days, as{" "}
          <a
            href="https://www.deccanherald.com/india/delhi/five-dry-days-in-delhi-in-january-march-period-excise-order-3864677"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Deccan Herald reported
          </a>
          . According to{" "}
          <a
            href="https://www.thedrinksbusiness.com/2026/01/delhi-announces-five-dry-days-between-january-and-march/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Drinks Business
          </a>
          , the order covered liquor shops, bars and clubs, with only limited
          in-room service allowed in certain hotels.
        </p>

        <p className="mb-8">
          Delhi issues its dry-day list for each period separately, so check
          the 2027 order once it is out. Farmhouses in Gurgaon, Sohna Road,
          Manesar, Faridabad and Murthal follow Haryana&apos;s excise rules,
          and Noida and Greater Noida follow Uttar Pradesh&apos;s, so ask the
          owner which permit applies for a party with drinks. The simplest
          plan is to hold the party on Saturday 23 or Sunday 24 January and
          keep Republic Day itself for lunch, games and a calm drive home. Our{" "}
          <Link
            href="/blogs/how-much-alcohol-for-party-delhi-ncr"
            className="underline"
          >
            guide to how much alcohol to buy for a party
          </Link>{" "}
          covers permits and quantities for that party night.
        </p>

        {/* =====================================================
            TRAFFIC
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Are Roads Closed Around Delhi on Republic Day?
        </h2>

        <p className="mb-8">
          Central Delhi is closed off for the parade, and goods vehicles are
          kept out of the city overnight, but private cars heading to the
          outskirts are mostly unaffected. For 2026,{" "}
          <a
            href="https://www.businesstoday.in/india/story/republic-day-2026-routes-to-avoid-major-restrictions-on-january-26-check-delhi-traffic-police-advisory-here-512819-2026-01-25"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Business Today summarised the Delhi Police advisory
          </a>
          : Kartavya Path was closed from 6 PM on 25 January until the parade
          ended, central New Delhi was open only to vehicles with passes, and
          commercial vehicle entry into Delhi was restricted from 9 PM on 25
          January. On the Noida side,{" "}
          <a
            href="https://www.india.com/news/india/noida-greater-noida-traffic-advisory-republic-day-2026-january-23-26-heavy-vehicle-ban-dnd-flyway-yamuna-expressway-eastern-peripheral-pari-chowk-check-complete-guidelines-8275358/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            India.com reported
          </a>{" "}
          that goods vehicles of all classes were barred from entering Delhi
          from 10 PM before both the full dress rehearsal (23 January) and the
          parade.
        </p>

        <p className="mb-8">What this means for your weekend:</p>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            Get caterer, tent, sound and grocery deliveries done on Saturday
            or Sunday. A vendor truck coming from Delhi on the night of 25
            January or the morning of 26 January may be held up.
          </li>
          <li>
            Avoid routes through central Delhi, ITO and the India Gate area on
            the morning of 26 January. Use ring roads and expressways instead.
          </li>
          <li>
            Expect the 2027 advisory to follow a similar pattern, and check the
            Delhi Traffic Police and Gautam Buddh Nagar police updates a few
            days before you leave.
          </li>
        </ul>

        {/* =====================================================
            AREAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where to Book a Farmhouse Near Delhi for the Long Weekend
        </h2>

        <p className="mb-8">
          Pick the area closest to where most of your group lives, so the
          drive takes 45–120 minutes and not half a day. In January, a short,
          predictable drive matters more than a famous location, because
          morning fog can slow highways badly.
        </p>

        <Table
          headers={["Area", "Easiest from", "Why go", "Check first"]}
          rows={areaRows}
        />

        <p className="mb-8">
          Couples planning a two-person break rather than a group trip should
          read our guide to a{" "}
          <Link
            href="/blogs/couple-friendly-farmhouse-near-delhi"
            className="underline"
          >
            couple-friendly farmhouse near Delhi
          </Link>
          , which covers ID rules and privacy checks.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Farmhouse Near Delhi Cost for the Republic Day
          Weekend?
        </h2>

        <p className="mb-8">
          As a rough estimate, a 3–5 bedroom farmhouse or villa near Delhi
          costs about ₹15,000–₹45,000 a night on the Republic Day long weekend,
          before food. Two real listings give a sense of normal rates: farm
          stays in the{" "}
          <a
            href="https://www.partyvillas.in/noida/farmhouse-for-party-in-sector-135"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Noida Sector 135 belt on PartyVillas
          </a>{" "}
          showed about ₹12,000–₹35,000 a night in November 2026, and a{" "}
          <a
            href="https://bookmyfarm.net/sonipat/murthal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Murthal pool farm on BookMyFarm
          </a>{" "}
          listed roughly ₹14,200 on weekdays and ₹17,700 on weekends for 24
          hours and 15 guests. Long-weekend nights are often priced above
          ordinary weekends, so ask for the exact rate for 23–26 January.
        </p>

        <Table
          headers={["Cost item", "Typical range (estimate)", "Notes"]}
          rows={costRows}
        />

        <h3 className="text-black text-2xl font-bold mt-10 mb-4">
          Sample budget: 12 friends, 2 nights (Sat–Mon)
        </h3>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>4-bedroom farmhouse, 2 nights at about ₹25,000: ₹50,000</li>
          <li>Cook and groceries for 2.5 days at about ₹800 a head: ₹24,000</li>
          <li>Heaters, gas fire pit and extras: ₹4,000</li>
          <li>Caretaker tip and cleaning: ₹3,000</li>
          <li>Fuel and tolls for 3 cars: ₹9,000</li>
        </ul>

        <p className="mb-8">
          That adds up to about ₹90,000, or roughly ₹7,500 a person before
          drinks. These are illustrative estimates; your actual cost depends
          on the property, area and how much you cook yourselves.
        </p>

        {/* =====================================================
            WINTER
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is the Weather Like Near Delhi in Late January?
        </h2>

        <p className="mb-8">
          Late January is cold, with crisp sunny afternoons, chilly nights and
          a real chance of morning fog. The coldest January mornings in Delhi
          have dipped to around 3°C, as{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-experiences-coldest-january-morning-since-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            The Tribune reported
          </a>
          , and dense fog has delayed hundreds of flights in a single morning,
          according to{" "}
          <a
            href="https://scroll.in/latest/1077519/delhi-over-270-flights-delayed-17-cancelled-due-to-dense-fog"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Scroll
          </a>
          . That shapes how you choose a property:
        </p>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            Room heaters and hot water in every bedroom matter more than a big
            lawn.
          </li>
          <li>
            An unheated pool is too cold to use; ask for the water
            temperature and heating charge if the pool is part of the plan.
            Our{" "}
            <Link
              href="/blogs/farmhouse-with-heated-pool-near-delhi"
              className="underline"
            >
              heated pool farmhouse guide
            </Link>{" "}
            explains heat-up times.
          </li>
          <li>
            Wood bonfires are often off the table because GRAP bans open
            burning; see our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className="underline"
            >
              GRAP rules guide
            </Link>{" "}
            and ask for a gas fire pit or patio heaters instead.
          </li>
          <li>
            Drive after mid-morning when fog is forecast, and avoid late-night
            returns on highways.
          </li>
        </ul>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          A Sample Republic Day Weekend Plan at a Farmhouse
        </h2>

        <ul className="list-disc pl-8 mb-8 space-y-3">
          <li>
            <strong>Saturday 23 January:</strong> leave after a late breakfast,
            check in by 2 PM, heated-pool or lawn games in the afternoon sun,
            then the main party night with dinner and music that moves
            indoors by 10 PM.
          </li>
          <li>
            <strong>Sunday 24 January:</strong> slow brunch, a walk or a dhaba
            run, board games and a movie night around a gas fire pit or
            heaters.
          </li>
          <li>
            <strong>Monday 25 January:</strong> two-night groups check out
            after breakfast; three-night groups have a quiet day with a
            barbecue lunch on the lawn.
          </li>
          <li>
            <strong>Tuesday 26 January:</strong> watch the parade on TV from
            10:30 AM, a tricolour-themed lunch for the kids, check out by
            early afternoon and drive home in daylight.
          </li>
        </ul>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Republic Day Weekend Farmhouse Booking Checklist
        </h2>

        <ol className="list-decimal pl-8 mb-8 space-y-3">
          {checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <p className="mb-8">
          For more on spotting fake listings and hidden charges, read{" "}
          <Link
            href="/blogs/how-to-book-farmhouse-safely-delhi-ncr"
            className="underline"
          >
            how to book a farmhouse safely in Delhi NCR
          </Link>
          . Families travelling with kids may also like our{" "}
          <Link
            href="/blogs/family-staycation-villa-near-delhi"
            className="underline"
          >
            winter family staycation guide
          </Link>
          .
        </p>

        {/* =====================================================
            HOW WE HELP
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Can Help
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          group stays, private parties, weddings and corporate events. For the
          Republic Day weekend, we can help you shortlist farmhouses in the
          right area for your group, confirm heating, pool and permit details
          in writing, and arrange a cook, music or a small celebration on
          site.
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
            Book Your Republic Day Weekend Farmhouse
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your dates, group size, where everyone is driving from and
            your budget. Effortless Events can help you find a warm, private
            farmhouse or villa near Delhi for 23–26 January 2027 before the
            best ones are gone.
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
              Plan My Long Weekend
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
