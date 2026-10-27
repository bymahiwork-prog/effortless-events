import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Farmhouse with Heated Pool Near Delhi: Winter Party Guide",

  description:
    "Planning a winter pool party near Delhi? How farmhouse pool heating works, the water temperature to ask for, extra charges, safety and a booking checklist.",

  keywords: [
    "farmhouse with heated pool near Delhi",
    "winter pool party at farmhouse Delhi NCR",
    "heated pool villa Gurgaon",
    "can you have a pool party in winter in Delhi",
    "pool heating charges farmhouse",
    "indoor pool farmhouse Delhi NCR",
    "heated pool vs jacuzzi",
  ],

  alternates: { canonical: "/blogs/farmhouse-with-heated-pool-near-delhi" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Farmhouse with Heated Pool Near Delhi: Winter Party Guide",

    description:
      "How to book a farmhouse or villa with a heated pool near Delhi for a winter party: heating types, water temperature, timing, costs, safety and questions to ask.",

    images: ["/farmhouse05.webp"],
  },
};

const faqs = [
  {
    q: "Can you have a pool party in winter in Delhi?",
    a: "Yes, if the pool is heated and you swim in the afternoon. Delhi's December and January days usually reach about 19–24°C, but nights drop to about 8–11°C, so an unheated outdoor pool is too cold for most guests. Plan pool time between noon and 4 PM and move to heaters or a bonfire after sunset.",
  },
  {
    q: "What temperature should a heated pool be for a party?",
    a: "Ask for about 28–30°C for a relaxed winter party (Effortless Events estimate). For reference, the US Department of Energy notes the American Red Cross recommends about 25.5°C (78°F) for competitive swimming, and says young children and older people may need about 26.7°C (80°F) or more. In cold winter air, slightly warmer water feels better.",
  },
  {
    q: "How long does it take to heat a farmhouse pool?",
    a: "Usually many hours, not minutes. US Department of Energy sizing assumes a heater raises water by roughly 0.5–0.7°C per hour, so warming a cold winter pool by 10°C can take 15–20 hours or more (estimate). Ask the owner to start heating the day before and to keep a cover on overnight.",
  },
  {
    q: "Do farmhouses charge extra for a heated pool?",
    a: "Some include heating in the rent and some charge it separately, often per day or per session, because heating uses a lot of electricity or fuel. As a rough planning figure, a separate heating charge may range from about ₹3,000 to ₹15,000 per day depending on pool size and method (estimate). Get it in writing.",
  },
  {
    q: "Is a heated pool the same as a jacuzzi?",
    a: "No. A jacuzzi or hot tub is a small tub, usually kept much warmer and used by a few people at a time. A heated pool is the full swimming pool warmed to a comfortable swimming temperature. Many listings say 'jacuzzi' or 'heated', so confirm which one you are getting.",
  },
  {
    q: "Is a heated pool safe for kids in winter?",
    a: "It can be, with close supervision. Keep a sober adult watching the water at all times, check that the pool has a fence or gate, dry children quickly after they get out because the air is cold, and end pool time before the sun drops at around 5:30 PM.",
  },
  {
    q: "Can we swim at night in a heated pool in winter?",
    a: "Some properties allow it, and one heated-pool villa listing near Gurgaon gives pool hours of 8 AM to 10 PM. But night air near 8–10°C makes getting out of the water very cold, so most groups keep evening swims short and keep towels, robes and a heated changing area close.",
  },
];

const glanceRows = [
  ["Best months", "Mid-November to mid-February; most useful in December and January"],
  ["Best pool time", "About 12 noon–4 PM; Delhi sunset is roughly 5:20–6:00 PM in Dec–Jan"],
  ["Water temperature to ask for", "About 28–30°C for a leisure party (estimate)"],
  ["Heating lead time", "Start the day before; heating can take 15–20+ hours (estimate)"],
  ["Common heating types", "Heat pump, gas or diesel boiler, electric heater, covered or indoor pool"],
  ["Possible extra charge", "Heating fee about ₹3,000–₹15,000 per day where charged separately (estimate)"],
  ["Must-ask questions", "Heating method, water temperature, start time, heating fee, pool hours, cover, lifeguard, fence"],
];

const optionRows = [
  ["Heated outdoor pool", "Day parties, birthdays, bachelorettes, family get-togethers", "Air is cold when guests step out; needs early heating and a cover"],
  ["Covered or indoor pool", "Evening swims, foggy days, older guests", "Rare near Delhi; check ventilation and changing space"],
  ["Jacuzzi or hot tub only", "Couples and small groups of 4–6", "Not a pool; limited seats; confirm hygiene and timing"],
  ["Unheated pool used for décor", "Evening parties with floating candles, lights and a bonfire", "No swimming; ask for a pool fence or cover for safety"],
];

const heatRows = [
  ["Heat pump (electric)", "Efficient in mild weather; the US Department of Energy says it works best when outside air stays above about 7–10°C (45–50°F)", "Slows down on cold nights and foggy mornings"],
  ["Gas or diesel boiler", "Heats faster and works in cold air", "Fuel costs; a diesel unit or generator may be affected by GRAP rules"],
  ["Electric immersion or inline heater", "Common in small pools and plunge pools", "High power use; ask about load and backup power"],
  ["Solar heating", "Low running cost on clear days", "Weak in December–January fog and short days; rarely enough alone"],
  ["Pool cover", "Keeps heat in; the US Department of Energy says covers can cut pool heating costs by 50–70%", "Must be off and stored safely before guests swim"],
];

const costRows = [
  ["Day-slot farmhouse with pool (20–50 guests)", "Roughly ₹25,000–₹75,000 for the venue (estimate)"],
  ["Overnight villa with heated pool (10–20 guests)", "Roughly ₹25,000–₹80,000 a night, higher on Christmas and NYE (estimate)"],
  ["Separate pool-heating charge, where applied", "About ₹3,000–₹15,000 per day (estimate)"],
  ["Lifeguard for the pool hours", "About ₹2,000–₹5,000 per session (estimate)"],
  ["Towels, robes and slippers if not provided", "About ₹100–₹300 per guest to buy or rent (estimate)"],
  ["Patio heaters or gas fire pit after sunset", "About ₹1,500–₹4,000 per unit for an evening (estimate)"],
];

const dayRows = [
  ["Day before", "Owner starts heating; pool cover on overnight; confirm water temperature by phone"],
  ["11:30 AM", "Guests arrive; welcome drinks and snacks on the sunny side of the lawn"],
  ["12:30 PM", "Pool time opens; lifeguard or a sober adult on duty"],
  ["2:00 PM", "Lunch near the pool; hot soup or tea for anyone out of the water"],
  ["3:00–4:00 PM", "Last swim and pool games; everyone out before the sun drops"],
  ["4:30 PM", "Warm showers and change; pool covered again"],
  ["5:30 PM onwards", "Heaters or bonfire on the lawn, music, dinner; indoor space ready for later"],
];

const cell = "border border-gray-300 p-4";

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-6">
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
                <td key={i} className={i === 0 ? `${cell} font-semibold text-black` : cell}>
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

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="farmhouse-with-heated-pool-near-delhi"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-27"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/farmhouse05.webp"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          alt="Farmhouse with heated pool near Delhi: a lit outdoor pool with loungers beside a white farmhouse at night"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Farmhouse with a Heated Pool Near Delhi: Winter Pool Party Guide
        </h1>

        <p className="text-gray-500">
          By Effortless Events • Pool Parties • Last updated: October 2026
        </p>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="max-w-6xl mx-auto px-6 pb-20 text-xl leading-9 text-gray-800">
        <p className="mb-8">
          A farmhouse with a heated pool near Delhi lets you keep the pool
          party going after summer ends. From mid-November to mid-February,
          Delhi afternoons are often mild and sunny, but an unheated pool is
          far too cold to enjoy. Some farmhouses and villas around Gurgaon,
          Chattarpur, Sohna Road and Noida now advertise heated or
          temperature-controlled pools for exactly this reason. This guide
          explains how pool heating works, what water temperature to ask for,
          when to swim, what it may cost and what to confirm before you pay.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Yes, a winter pool party near Delhi works if you book a farmhouse
            whose pool is truly heated, ask for water at about 28–30°C, and
            swim between noon and 4 PM. Ask the owner to start heating the day
            before, get any heating fee in writing, and plan heaters or a
            bonfire for the cold evening.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Heated Pool Farmhouse Party at a Glance
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
          Temperatures and sunset times are long-term averages from{" "}
          <a
            href="https://weatherspark.com/m/109174/12/Average-Weather-in-December-in-New-Delhi-NCT-India"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WeatherSpark
          </a>
          . Costs are Effortless Events planning estimates for the 2026–27
          winter and vary by property, date and group size. Always get a
          written quote.
        </p>

        {/* =====================================================
            CAN YOU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can You Have a Pool Party in Winter in Delhi?
        </h2>

        <p className="mb-6">
          You can, but only with a heated pool and the right timing. According
          to WeatherSpark&apos;s long-term averages for New Delhi, daily highs
          fall from about 24°C at the start of December to about 20°C by the
          end of the month, and lows fall from about 11°C to about 8°C. Early
          January is the coldest stretch, with average lows near 8°C.
        </p>

        <p className="mb-6">
          That means the middle of the day can feel pleasant in the sun, while
          the air after sunset is cold. Water loses heat quickly on cold
          nights, so a pool that is not heated will usually feel far too cold
          for most guests by December.
        </p>

        <p className="mb-8">
          The practical rule: treat the pool as a daytime feature. Swim in the
          warmest hours, then move the party to the lawn with heaters or a
          bonfire, or indoors. Our{" "}
          <Link
            href="/blogs/winter-bonfire-party-farmhouse-delhi-ncr"
            className="underline text-black"
          >
            winter bonfire party guide
          </Link>{" "}
          covers that evening half in detail.
        </p>

        {/* =====================================================
            OPTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Kind of Winter Pool Setup Should You Book?
        </h2>

        <p className="mb-6">
          The word &quot;pool&quot; on a winter listing can mean four quite
          different things. Pick the one that matches your party:
        </p>

        <Table headers={["Setup", "Best for", "Watch out for"]} rows={optionRows} />

        <p className="text-base text-gray-500 mb-8">
          A general guide to the options, not a list of specific properties.
        </p>

        <p className="mb-8">
          For most groups of 15–40 guests, a heated outdoor pool on a day slot
          is the best balance. Covered or indoor pools are uncommon at Delhi
          NCR farmhouses, so if you need one, start looking early. If only a
          jacuzzi is heated, plan the party around the lawn rather than the
          pool.
        </p>

        {/* =====================================================
            HOW HEATING WORKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Is a Farmhouse Pool Heated?
        </h2>

        <p className="mb-6">
          Farmhouse pools near Delhi are usually heated in one of a few ways.
          The method matters because it decides how fast the water warms up,
          how well it copes with cold nights and whether there is an extra
          charge.
        </p>

        <Table headers={["Method", "How it helps", "Limits"]} rows={heatRows} />

        <p className="text-base text-gray-500 mb-8">
          Heat-pump and pool-cover figures are from the US Department of
          Energy&apos;s guides on{" "}
          <a
            href="https://www.energy.gov/energysaver/heat-pump-swimming-pool-heaters"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            heat pump pool heaters
          </a>{" "}
          and{" "}
          <a
            href="https://www.energy.gov/node/1266136"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            pool covers
          </a>
          , which also say evaporation is by far the biggest source of heat
          loss from a pool.
        </p>

        <p className="mb-8">
          The key point for a Delhi winter: a heat pump that works well in
          November can struggle in late December and January, when night air
          drops to about 8°C. Ask the owner which method they use and what
          temperature the water actually reached on a recent winter day.
        </p>

        {/* =====================================================
            TEMPERATURE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Water Temperature Should You Ask For?
        </h2>

        <p className="mb-6">
          For a relaxed winter party, ask for water at about 28–30°C
          (Effortless Events estimate). People at a party mostly stand,
          float and chat rather than swim laps, and cold air on wet shoulders
          makes cooler water feel colder than it is.
        </p>

        <p className="mb-6">
          For reference, the{" "}
          <a
            href="https://www.energy.gov/node/1266121"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            US Department of Energy
          </a>{" "}
          notes that the American Red Cross recommends about 25.5°C (78°F) for
          competitive swimming, and that young children and older people may
          need about 26.7°C (80°F) or higher. Those figures are for active
          swimming, so a winter party usually needs a little more.
        </p>

        <p className="mb-8">
          &quot;Heated&quot; on a listing does not tell you the temperature.
          Ask for a number, and ask someone at the farmhouse to check the water
          with a thermometer on the morning of your party.
        </p>

        {/* =====================================================
            HOW LONG
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Long Does It Take to Heat a Pool?
        </h2>

        <p className="mb-6">
          Usually the better part of a day. The US Department of Energy&apos;s
          sizing guidance assumes a pool heater raises water by about 1–1.25°F
          per hour, which is roughly 0.5–0.7°C. At that rate, lifting a cold
          winter pool by 10°C can take about 15–20 hours, and longer on cold,
          windy nights or if the pool is left uncovered (estimate).
        </p>

        <p className="mb-8">
          So the heating has to start the day before, not when guests arrive.
          If you book a day slot only, ask whether the owner will heat the
          pool the night before and whether that is included in your price.
          This is one reason some groups choose an overnight booking in winter;
          our{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="underline text-black"
          >
            day-use vs overnight farmhouse guide
          </Link>{" "}
          compares the two.
        </p>

        {/* =====================================================
            WHEN TO SWIM
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is the Best Time for a Winter Pool Party?
        </h2>

        <p className="mb-6">
          Swim between about 12 noon and 4 PM. WeatherSpark puts New Delhi
          sunsets at about 5:23 PM in early December, 5:35 PM on 1 January and
          just before 6 PM by the end of January. The air cools quickly once
          the sun drops, and getting out of a warm pool into cold air is the
          moment guests feel worst.
        </p>

        <p className="mb-6">A sample day for a 25–40 guest party:</p>

        <Table headers={["Time", "What happens"]} rows={dayRows} />

        <p className="mb-8">
          Good dates in the 2026–27 season include Saturdays in late November
          and December, Christmas Day (Friday 25 December), the New Year
          weekend (Friday 1 to Sunday 3 January 2027) and sunny Sundays in
          late January and February. Foggy mornings are common in
          December–January, so keep the plan flexible and check the forecast
          two days out.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Farmhouse with a Heated Pool Cost?
        </h2>

        <p className="mb-6">
          Expect to pay more than for the same farmhouse with an unheated
          pool, either in the rent or as a separate heating charge. Heating a
          full pool for a day uses a lot of electricity or fuel, and owners
          pass that on. Rough planning figures:
        </p>

        <Table headers={["Item", "Typical range (estimate)"]} rows={costRows} />

        <p className="text-base text-gray-500 mb-8">
          Effortless Events planning estimates for the 2026–27 winter. Prices
          vary by area, pool size, date, group size and inclusions.
        </p>

        <p className="mb-8">
          Compare quotes on the total, not the headline rent. A cheaper
          farmhouse that adds a heating fee, a lifeguard and towels can end up
          costing more than one that includes them. For the rest of the party
          budget, see our{" "}
          <Link
            href="/blogs/how-much-does-a-farmhouse-party-cost-in-delhi-ncr-2026"
            className="underline text-black"
          >
            farmhouse party cost guide
          </Link>
          .
        </p>

        {/* =====================================================
            SAFETY
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Keep a Winter Pool Party Safe?
        </h2>

        <p className="mb-6">
          The main risks are the same as any pool party, plus cold. Plan for
          these:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>One sober adult on pool duty at all times.</strong> Hire a
            lifeguard for bigger groups, and keep drinks away from the pool
            edge. Alcohol and swimming do not mix.
          </li>
          <li>
            <strong>Fence or gate for children.</strong> If kids are coming,
            check that the pool can be closed off when swimming is over.
          </li>
          <li>
            <strong>Warm exits.</strong> Keep thick towels, robes and slippers
            by the steps, and a heated room or changing area close to the pool.
          </li>
          <li>
            <strong>Non-slip decks.</strong> Cold, wet tiles get slippery, so
            ask for mats around the edge and steps.
          </li>
          <li>
            <strong>Clean water.</strong> Ask how the water is filtered and
            chlorinated and when it was last cleaned.
          </li>
          <li>
            <strong>Pool cover off and stored.</strong> A cover helps hold
            heat, but it must be fully removed before anyone swims.
          </li>
          <li>
            <strong>Safe heating and power.</strong> Heaters, lights and
            speakers near water need proper wiring. If the heater or backup
            power runs on diesel, check our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className="underline text-black"
            >
              GRAP rules guide
            </Link>{" "}
            for generator limits during pollution alerts.
          </li>
        </ul>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What to Ask the Owner Before Booking a Heated Pool
        </h2>

        <p className="mb-6">
          Get the answers in writing on WhatsApp or email before you pay an
          advance:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>Is the main pool heated, or only a jacuzzi or kids&apos; pool?</li>
          <li>Which heating method do you use, and does it work in January?</li>
          <li>What water temperature will it be at noon on my date?</li>
          <li>When will you start heating, and is that included in my price?</li>
          <li>Is there a separate heating charge? How much, and per day or per session?</li>
          <li>What are the pool hours, and can we swim after sunset?</li>
          <li>Is there a pool cover, a fence or gate, and a lifeguard on request?</li>
          <li>Do you provide towels and robes, and is there a heated changing room?</li>
          <li>What happens if the heater fails: a refund, a discount or a new date?</li>
          <li>Is there power backup, and does it rely on a diesel generator?</li>
        </ol>

        <p className="mb-8">
          These sit alongside the usual checks on music timing, guest limits,
          liquor permits and deposits in our{" "}
          <Link
            href="/blogs/farmhouse-rules-before-booking-delhi-ncr"
            className="underline text-black"
          >
            farmhouse rules guide
          </Link>
          . Also check the listing photos were taken in winter, not summer,
          and ask for a short video of the pool running.
        </p>

        {/* =====================================================
            WHERE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Where Can You Find Heated Pool Farmhouses Near Delhi?
        </h2>

        <p className="mb-6">
          Heated pools are still a minority feature, so search by feature
          rather than by area alone. Private pool villas and farmhouses with
          rooms around Gurgaon (including the Baliawas and Sohna Road side),
          Chattarpur, Noida&apos;s expressway sectors and Faridabad are the
          likeliest places to look. Some villa listings near Gurgaon, such as{" "}
          <a
            href="https://www.airbnb.com/rooms/1715727106774438017"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            this Baliawas villa listing
          </a>
          , now advertise a heated, temperature-controlled pool with set pool
          hours.
        </p>

        <p className="mb-8">
          Large wedding-style party lawns rarely heat their pools, because
          their pools are mostly décor. Smaller villas built for overnight
          groups are more likely to. For summer options and pool-party
          formats, see our{" "}
          <Link
            href="/blogs/best-farmhouses-delhi-ncr-pool-parties-2026"
            className="underline text-black"
          >
            pool party farmhouses guide
          </Link>
          .
        </p>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps people book farmhouses, villas and venues for
          birthdays, pool parties, family functions and corporate events, and
          can check pool heating, timings and charges with owners before you
          pay.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Winter Pool Party Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Fix the date and a backup date in case of fog or rain.</li>
          <li>Confirm the pool itself is heated, the method and the target temperature.</li>
          <li>Get the heating fee, start time and pool hours in writing.</li>
          <li>Book a lifeguard or name the adults on pool duty.</li>
          <li>Arrange towels, robes, slippers and non-slip mats.</li>
          <li>Plan pool time for about noon–4 PM and food close to the pool.</li>
          <li>Book patio heaters, a gas fire pit or a bonfire for after sunset.</li>
          <li>Ask guests to bring swimwear, a warm change of clothes and flip-flops.</li>
          <li>Keep an indoor space ready for dinner and late-evening music.</li>
          <li>On the morning, ask the owner to check and share the water temperature.</li>
        </ul>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          A heated pool turns a winter farmhouse party into something
          different: a sunny afternoon swim followed by a warm evening by the
          fire. Make it work by confirming the pool is truly heated, asking
          for a temperature number, starting the heating the day before,
          swimming before sunset and getting every charge in writing.
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
            Looking for a Farmhouse with a Heated Pool?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count and budget. Effortless Events can
            shortlist farmhouses and villas near Delhi with pools that suit a
            winter party and confirm heating, timings and charges with the
            owner before you pay an advance.
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
