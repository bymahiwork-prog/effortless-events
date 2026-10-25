import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Family Christmas Party at a Farmhouse in Delhi NCR",

  description:
    "Plan a family Christmas party at a Delhi NCR farmhouse: 2026 dates, cost estimates, menu and games, kids' ideas, music and fire rules, and a checklist.",

  keywords: [
    "family Christmas party at farmhouse Delhi NCR",
    "Christmas party venue for friends Delhi",
    "Christmas party ideas for family and friends",
    "Christmas house party at farmhouse Gurgaon",
    "Christmas party cost Delhi NCR",
    "Secret Santa ideas for family",
    "Christmas weekend farmhouse stay near Delhi",
  ],

  alternates: { canonical: "/blogs/family-christmas-party-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Family Christmas Party at a Farmhouse in Delhi NCR",

    description:
      "Christmas 2026 dates, lunch vs dinner vs overnight formats, cost estimates by guest count, a festive menu, games for kids and adults, Delhi rules and a checklist.",

    images: ["/hp-3.webp"],
  },
};

const faqs = [
  {
    q: "How do you plan a Christmas party for family and friends?",
    a: "Pick the date and format first (lunch, evening dinner or an overnight stay), then fix the guest list and budget and book the farmhouse 6–8 weeks ahead. After that, lock the menu and cake, décor and tree, music and a Secret Santa, and send a simple invite with timings, dress code and directions 2–3 weeks before.",
  },
  {
    q: "How much does a Christmas party at a farmhouse cost in Delhi NCR?",
    a: "As a rough planning estimate, a Christmas lunch or dinner for about 20–25 guests at a Delhi NCR farmhouse often costs ₹45,000–₹1,10,000 including rent, food, basic décor and music, and a 40–50 guest evening party around ₹1,00,000–₹2,50,000. Christmas Eve, Christmas Day and the 26–27 December weekend usually cost more than mid-December dates.",
  },
  {
    q: "What food should you serve at a Christmas party in India?",
    a: "Most Delhi NCR hosts mix Christmas classics with Indian party food: plum cake, roast chicken or a roast vegetable platter, pasta or a live grill, kebabs and tikkas, a dal-and-biryani main, and hot drinks such as hot chocolate, masala chai or mulled wine. Keep at least half the menu vegetarian if your family is mixed.",
  },
  {
    q: "What games can you play at a Christmas party with family?",
    a: "Easy crowd-pleasers are Secret Santa, Christmas tambola (housie), a carol or Bollywood antakshari round, Pictionary or dumb charades with a Christmas theme, an ugly-sweater contest and a cookie or cupcake decorating table for children. A short Santa visit with small gifts works well if kids are coming.",
  },
  {
    q: "Is Christmas Eve or Christmas Day better for a party?",
    a: "Christmas Eve (Thursday 24 December 2026) suits an evening dinner because most people have a holiday the next day. Christmas Day (Friday 25 December) suits a long lunch or brunch with children and older relatives, and the 26–27 December weekend suits an overnight farmhouse stay.",
  },
  {
    q: "Can you burst firecrackers at a Christmas party in Delhi?",
    a: "Plan without firecrackers. Delhi and much of NCR have kept firecracker restrictions in force through winter in recent years, with only limited, court-allowed green-cracker windows around Diwali. Use sparklers only if local rules for that year clearly allow them, or switch to fairy lights, lanterns and a confetti moment instead.",
  },
  {
    q: "How late can music play at a farmhouse Christmas party?",
    a: "Under India's noise rules, loudspeakers and amplified music outdoors are not allowed between 10 PM and 6 AM, and Christmas is not a general exemption. Plan the outdoor music and dancing to end by 10 PM, then move indoors with low volume, and ask the farmhouse owner how they enforce it.",
  },
];

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="family-christmas-party-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-10-20"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/hp-3.webp"
          width={1024}
          height={682}
          fetchPriority="high"
          decoding="async"
          alt="Family Christmas party at a farmhouse in Delhi NCR: a terrace lounge lit by glowing paper lanterns at dusk"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Family Christmas Party at a Farmhouse in Delhi NCR: 2026 Planning
          Guide
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
          A family Christmas party at a farmhouse in Delhi NCR gives you what
          a crowded restaurant or a small apartment cannot on 24 or 25
          December: one private space for the tree, the long table, the kids
          running around, the music and, if you want, an overnight stay. This
          guide is for families and friend groups planning a Christmas lunch,
          dinner or weekend for roughly 15 to 80 guests in Gurgaon, Chattarpur,
          Noida or along Sohna Road.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            To plan a family Christmas party at a Delhi NCR farmhouse, choose
            your format first: Christmas Day lunch, Christmas Eve dinner or an
            overnight stay over the 26–27 December weekend. Book the farmhouse
            6–8 weeks ahead, budget roughly ₹2,000–₹4,500 per guest
            (estimate), plan heaters and an indoor backup, and end outdoor
            music by 10 PM.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Christmas Party at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Decision
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  What works for most Delhi NCR families
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Key 2026 dates</td>
                <td className="border border-gray-300 p-4">
                  Thu 24 Dec (Eve), Fri 25 Dec (Christmas Day), Sat 26–Sun 27
                  Dec (weekend)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Best format</td>
                <td className="border border-gray-300 p-4">
                  Lunch/brunch with kids and grandparents; dinner for adults
                  and friends; overnight for a full holiday weekend
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Booking lead time</td>
                <td className="border border-gray-300 p-4">
                  6–8 weeks for 24–27 December; 3–4 weeks for a mid-December
                  date
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Budget per guest*
                </td>
                <td className="border border-gray-300 p-4">
                  About ₹2,000–₹4,500 including rent, food, décor and music;
                  more for an overnight stay or alcohol
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Weather plan</td>
                <td className="border border-gray-300 p-4">
                  Sunset around 5:30 PM, cold and often foggy nights: heaters,
                  blankets and an indoor hall or covered area
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Must-checks</td>
                <td className="border border-gray-300 p-4">
                  10 PM outdoor music limit, liquor permit, no firecrackers,
                  fire pit and heater rules, guest and overnight limits
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-10">
          *All prices in this guide are indicative planning estimates based on
          typical Delhi NCR farmhouse and vendor quotes, not fixed rates.
          Actual costs depend on the property, date, guest count and
          inclusions; check whether quotes include GST.
        </p>

        <p className="mb-8">
          Planning a party for your team rather than your family? Our{" "}
          <Link
            href="/blogs/christmas-office-party-delhi-ncr"
            className="text-black underline font-semibold"
          >
            office Christmas party guide for Delhi NCR
          </Link>{" "}
          covers corporate venues, per-head budgets and HR timelines.
        </p>

        {/* =====================================================
            WHEN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold a Family Christmas Party in 2026?
        </h2>

        <p className="mb-8">
          The best date for a family Christmas party depends on who is coming.
          Christmas 2026 falls on a Friday, so 24–27 December forms a natural
          four-day stretch, and these are the most requested farmhouse dates
          of the month after New Year&apos;s Eve.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Christmas Eve, Thursday 24 December:</strong> the best
            night for an adult dinner party, a carol session and a midnight
            toast, since most people are off the next day.
          </li>
          <li>
            <strong>Christmas Day, Friday 25 December:</strong> ideal for a
            long brunch or lunch, roughly 12 to 5 PM, with children and
            grandparents. You get the warm part of the day and everyone is
            home before the cold sets in.
          </li>
          <li>
            <strong>Saturday 26–Sunday 27 December:</strong> the easiest
            weekend for an overnight farmhouse stay, cousins&apos; reunions
            and families visiting from abroad.
          </li>
          <li>
            <strong>Mid-December (Saturdays 12 and 19 December):</strong> an
            early &quot;pre-Christmas&quot; party is often cheaper and easier
            to book, though some of these Saturdays still clash with
            wedding-season functions.
          </li>
        </ul>

        <p className="mb-8">
          Plan around the weather. According to{" "}
          <a
            href="https://weatherspark.com/m/109174/12/Average-Weather-in-December-in-New-Delhi-NCT-India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            WeatherSpark&apos;s climate averages for New Delhi
          </a>
          , late-December days peak around 20–21°C while nights drop to about
          8–9°C, and the sun sets close to 5:30 PM. The{" "}
          <a
            href="https://mausam.imd.gov.in/newdelhi/archive/2026-01-02/press_release_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-semibold"
          >
            India Meteorological Department&apos;s December 2025 summary
          </a>{" "}
          also recorded nine days of dense or very dense fog in Delhi, so
          guests driving back late on the Christmas weekend need a plan.
        </p>

        {/* =====================================================
            FORMAT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Lunch, Dinner or Overnight: Which Christmas Format Suits You?
        </h2>

        <p className="mb-8">
          Choose the format before you choose the farmhouse, because it
          decides the slot you book, the heating you need and the budget.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">Format</th>
                <th className="border border-gray-300 p-4 text-left">
                  Typical timing
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
                  Christmas brunch / lunch
                </td>
                <td className="border border-gray-300 p-4">11 AM–5 PM</td>
                <td className="border border-gray-300 p-4">
                  Families with young kids and older relatives; lawn games in
                  the sun
                </td>
                <td className="border border-gray-300 p-4">
                  Light fades by 5:30 PM; book a day-use slot, not a night
                  slot
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Christmas Eve dinner
                </td>
                <td className="border border-gray-300 p-4">6–11 PM</td>
                <td className="border border-gray-300 p-4">
                  Adults and friend groups; fairy lights, carols and a
                  midnight toast
                </td>
                <td className="border border-gray-300 p-4">
                  Cold, fog and the 10 PM outdoor music limit; needs heaters
                  and an indoor area
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  Overnight Christmas stay
                </td>
                <td className="border border-gray-300 p-4">
                  Check-in noon, check-out next day
                </td>
                <td className="border border-gray-300 p-4">
                  Cousins, NRI family visits, two-family get-togethers
                </td>
                <td className="border border-gray-300 p-4">
                  Overnight guest limit is often far below the party limit;
                  rooms and bedding for all
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If you are unsure whether to book a day slot or a stay, our guide to{" "}
          <Link
            href="/blogs/day-use-vs-overnight-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            day-use vs overnight farmhouse bookings
          </Link>{" "}
          explains the usual slots and how rent changes between them.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Christmas Party at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A family Christmas party at a Delhi NCR farmhouse typically costs
          about ₹2,000–₹4,500 per guest (estimate) for rent, food, décor and
          music. Smaller groups pay more per head because farmhouse rent is a
          fixed cost; the 24–27 December dates carry a premium over
          mid-December.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-4 text-left">
                  Party size
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Format
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Estimated total*
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">15–25 guests</td>
                <td className="border border-gray-300 p-4">
                  Christmas lunch or dinner, home-style catering, simple décor
                </td>
                <td className="border border-gray-300 p-4">
                  ₹45,000–₹1,10,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">40–50 guests</td>
                <td className="border border-gray-300 p-4">
                  Evening party with buffet, live counter, tree and lights, DJ
                  or speakers
                </td>
                <td className="border border-gray-300 p-4">
                  ₹1,00,000–₹2,50,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">60–80 guests</td>
                <td className="border border-gray-300 p-4">
                  Larger family party with full catering, decorator, heaters
                  and kids&apos; entertainment
                </td>
                <td className="border border-gray-300 p-4">
                  ₹1,80,000–₹3,60,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">
                  12–20 staying over
                </td>
                <td className="border border-gray-300 p-4">
                  One-night farmhouse stay with meals and a Christmas dinner
                </td>
                <td className="border border-gray-300 p-4">
                  ₹60,000–₹1,80,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-gray-500 mb-8">
          *Planning estimates only. Alcohol, liquor permits, photography,
          gifts and cab transfers are extra.
        </p>

        <p className="mb-4">Where the money usually goes:</p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Farmhouse rent:</strong> often the biggest single line;
            Christmas week rates can run noticeably higher than a normal
            December weekend.
          </li>
          <li>
            <strong>Food and drinks:</strong> usually 35–45% of the budget. See
            our{" "}
            <Link
              href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
              className="text-black underline font-semibold"
            >
              farmhouse party catering guide
            </Link>{" "}
            for per-plate tiers and quantities.
          </li>
          <li>
            <strong>Décor, tree and lighting:</strong> a modest tree, fairy
            lights and table styling can stay within ₹10,000–₹30,000
            (estimate); a full decorator setup costs more.
          </li>
          <li>
            <strong>Heating and power:</strong> patio heaters, extra blankets
            and generator backup for the evening.
          </li>
          <li>
            <strong>Music and entertainment:</strong> a Bluetooth speaker
            setup, a DJ, a carol singer or a Santa visit for children.
          </li>
        </ul>

        {/* =====================================================
            IDEAS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Best Christmas Party Ideas for Family and Friends?
        </h2>

        <p className="mb-8">
          The best family Christmas party ideas give every age group
          something to do: a warm table for grandparents, games for adults
          and an activity corner for kids. Pick three or four of these rather
          than trying everything.
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Décor that works outdoors in December
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            A real or artificial tree near the entrance as the photo spot,
            with family ornaments brought from home.
          </li>
          <li>
            Warm fairy lights and lanterns over the lawn or terrace; they do
            more than balloons once the sun sets at 5:30 PM.
          </li>
          <li>
            Red, green and gold table runners, pinecones, candles in glass
            holders and a long family table instead of scattered rounds.
          </li>
          <li>
            A blanket basket and a hot-drinks station by the seating.
          </li>
        </ul>

        <p className="mb-8">
          For costs, DIY ideas and plastic-free alternatives, see our{" "}
          <Link
            href="/blogs/farmhouse-party-decoration-ideas-budget-delhi-ncr"
            className="text-black underline font-semibold"
          >
            farmhouse party decoration ideas on a budget
          </Link>
          .
        </p>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          A Christmas menu Delhi NCR guests will enjoy
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Welcome:</strong> hot chocolate, masala chai, soup shots
            and (for adults) mulled wine.
          </li>
          <li>
            <strong>Starters:</strong> tikkas and kebabs from a live grill,
            mushroom vol-au-vents, cheese platters and fries for the kids.
          </li>
          <li>
            <strong>Mains:</strong> roast chicken or a roast vegetable platter
            with herbed rice, a pasta counter, and a dal-and-biryani option
            for those who want Indian food.
          </li>
          <li>
            <strong>Dessert:</strong> plum cake, a Yule log, gingerbread
            cookies and gulab jamun or gajar halwa for the grandparents.
          </li>
        </ul>

        <h3 className="text-black text-2xl font-bold mt-8 mb-4">
          Games and activities for all ages
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Secret Santa:</strong> draw names 2–3 weeks before and set
            a gift limit (₹500–₹1,500 is common for families).
          </li>
          <li>
            <strong>Christmas tambola (housie):</strong> works for every age
            and keeps older relatives involved.
          </li>
          <li>
            <strong>Carols and antakshari:</strong> a short carol round
            followed by Bollywood antakshari, sung around the heater or fire
            pit.
          </li>
          <li>
            <strong>Kids&apos; corner:</strong> cupcake or cookie decorating,
            colouring sheets, a treasure hunt on the lawn and a 15-minute Santa
            visit with small gifts.
          </li>
          <li>
            <strong>Ugly-sweater or red-and-white dress code:</strong> easy to
            follow and great for the group photo.
          </li>
        </ul>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Rules Apply to a Christmas Party at a Delhi NCR Farmhouse?
        </h2>

        <p className="mb-8">
          Christmas does not relax the usual party rules in Delhi NCR. Confirm
          these with the farmhouse owner before you pay an advance:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>Music:</strong> under the Noise Pollution (Regulation and
            Control) Rules, 2000, loudspeakers and amplified music are not
            permitted outdoors between 10 PM and 6 AM. Move the party indoors
            and turn the volume down by then.
          </li>
          <li>
            <strong>Alcohol:</strong> serving liquor at a private party
            usually needs a one-day permit in Delhi (the P-10 licence) and
            equivalent permits in Haryana and Uttar Pradesh. Ask whether the
            farmhouse arranges it or whether you must.
          </li>
          <li>
            <strong>Firecrackers:</strong> Delhi NCR has kept winter
            firecracker restrictions in recent years; in October 2025 the
            Supreme Court allowed only a limited green-cracker sale window
            around Diwali (
            <a
              href="https://www.deccanherald.com/india/delhi/supreme-court-allows-green-firecrackers-during-diwali-in-delhi-ncr-3764752"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-semibold"
            >
              Deccan Herald report
            </a>
            ). Plan your midnight moment with lights, sparkle candles on the
            cake or confetti instead.
          </li>
          <li>
            <strong>Fire pits and heaters:</strong> winter pollution
            measures (GRAP) can restrict open burning and generator use.
            Check what the property allows; our{" "}
            <Link
              href="/blogs/winter-bonfire-party-farmhouse-delhi-ncr"
              className="text-black underline font-semibold"
            >
              winter bonfire party guide
            </Link>{" "}
            explains the safer heater options.
          </li>
          <li>
            <strong>Guest and overnight limits:</strong> confirm the maximum
            party headcount, how many can stay overnight, check-in and
            check-out times and the security deposit terms in writing.
          </li>
        </ul>

        {/* =====================================================
            RUN OF SHOW
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          A Sample Christmas Eve Dinner Run-of-Show
        </h2>

        <p className="mb-8">
          This evening plan keeps the outdoor part warm and early and moves
          indoors before the music limit:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>5:30 PM:</strong> lights on, heaters lit, music low;
            host family arrives to check décor and the tree.
          </li>
          <li>
            <strong>6:30 PM:</strong> guests arrive; hot drinks, starters and
            photos at the tree.
          </li>
          <li>
            <strong>7:30 PM:</strong> kids&apos; activity table and Santa
            visit; adults play tambola.
          </li>
          <li>
            <strong>8:30 PM:</strong> dinner at the long table; short toast
            by the host or the eldest family member.
          </li>
          <li>
            <strong>9:15 PM:</strong> Secret Santa exchange, carols and
            dancing on the lawn.
          </li>
          <li>
            <strong>10:00 PM:</strong> outdoor music off; move indoors for
            dessert, plum cake and quiet music.
          </li>
          <li>
            <strong>11:00 PM onward:</strong> day guests leave with driver or
            cab plans for the fog; overnight guests stay for a midnight toast.
          </li>
        </ol>

        <p className="mb-8">
          Keeping the group together for New Year too? Our{" "}
          <Link
            href="/blogs/new-years-eve-party-farmhouse-delhi-ncr"
            className="text-black underline font-semibold"
          >
            New Year&apos;s Eve farmhouse party guide
          </Link>{" "}
          covers 31 December, which falls one week later.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          8-Week Christmas Party Planning Checklist
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-10">
          <li>
            <strong>8 weeks (late October):</strong> fix the date, format,
            guest count and budget; shortlist two or three farmhouses.
          </li>
          <li>
            <strong>6–7 weeks:</strong> visit or video-call the farmhouse,
            confirm heaters, indoor space, music and liquor rules, and pay the
            advance against a written booking.
          </li>
          <li>
            <strong>5 weeks:</strong> book the caterer and cake; decide on DIY
            décor or a decorator; send a save-the-date.
          </li>
          <li>
            <strong>3 weeks:</strong> draw Secret Santa names, book a DJ or
            carol singer and Santa, apply for the liquor permit if needed.
          </li>
          <li>
            <strong>2 weeks:</strong> send the invite with timings, dress
            code, directions and a warm-clothes reminder; plan cabs or drivers.
          </li>
          <li>
            <strong>1 week:</strong> confirm final headcount with caterer and
            farmhouse; buy gifts, ornaments and kids&apos; activity kits.
          </li>
          <li>
            <strong>Party day:</strong> arrive 2–3 hours early, test heaters,
            lights and speakers, and keep the owner&apos;s and vendors&apos;
            numbers handy.
          </li>
        </ul>

        {/* =====================================================
            EFFORTLESS EVENTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Plan Your Christmas Party With Effortless Events
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
          people book farmhouses, villas and venues for family celebrations,
          private parties, corporate events and weddings.
        </p>

        <p className="mb-8">
          For a Christmas party, that means shortlisting farmhouses with
          indoor space and heating for your guest count, checking music,
          liquor and overnight rules before you pay, and coordinating
          catering, décor and entertainment so you can enjoy the day with
          your family.
        </p>

        {/* =====================================================
            FINAL THOUGHTS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          The best Christmas parties are warm in both senses: a cosy space,
          good food and time together. Decide early between a sunny Christmas
          lunch, a lantern-lit Christmas Eve dinner or a holiday weekend stay,
          book your farmhouse while the 24–27 December dates are still open,
          and plan for the cold and the 10 PM music limit from the start.
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
            Book Your Christmas Farmhouse Before 24–27 December Fills Up
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with the space,
            heating and rules your family Christmas needs.
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
              Plan Your Christmas Party
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
