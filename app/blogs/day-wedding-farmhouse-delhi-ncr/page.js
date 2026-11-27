import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Day Wedding at a Farmhouse in Delhi NCR: Muhurats & Cost",

  description:
    "Planning a day wedding at a farmhouse in Delhi NCR? 2026–27 daytime muhurats, day vs night cost, winter sunset and fog timings, a day plan and checklist.",

  keywords: [
    "day wedding at farmhouse Delhi NCR",
    "daytime wedding Delhi",
    "day wedding muhurat 2026 2027",
    "day wedding vs night wedding cost",
    "day wedding timings India",
    "brunch wedding menu Delhi",
    "morning pheras in winter",
  ],

  alternates: {
    canonical: "/blogs/day-wedding-farmhouse-delhi-ncr",
  },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Day Wedding at a Farmhouse in Delhi NCR: Muhurats & Cost",
    description:
      "Daytime muhurats for Dec 2026–Feb 2027, what a farmhouse day wedding costs compared with a night wedding, winter light and fog timings, and a sample day plan.",
    images: ["/event-gallery-3.webp"],
  },
};

const faqs = [
  {
    q: "Are day weddings cheaper than night weddings in India?",
    a: "Usually, yes, but not dramatically. A day wedding needs less lighting, less generator power and simpler décor, lunch or brunch menus are often priced below dinner, and some venues quote lower for day slots. As a rough estimate, a 150-guest farmhouse day wedding in Delhi NCR can cost ₹3–6 lakh less than the same wedding at night.",
  },
  {
    q: "What time should a day wedding start in Delhi in winter?",
    a: "Aim for guests to arrive around 10–11 AM and finish by about 5 PM. In December the sun sets in Delhi at roughly 5:25–5:35 PM, mornings can be foggy and very cold, and the warmest, clearest hours are usually late morning to mid-afternoon.",
  },
  {
    q: "Are there daytime wedding muhurats in December 2026 and early 2027?",
    a: "Yes. VedicFeed lists fully daytime vivah windows on 3, 4 and 6 December 2026, on 15 and 20 January 2027, and on 3, 10, 15, 21, 26 and 28 February 2027, plus several dates whose windows start in the morning and run into the evening. Your family pandit should confirm the exact timing.",
  },
  {
    q: "Can pheras be done in the daytime?",
    a: "Yes. Pheras follow the muhurat your pandit fixes, and many muhurats fall in the morning or afternoon. Daytime pheras are common in several North Indian communities; the only real constraint is the window itself, so plan the rest of the day around it.",
  },
  {
    q: "What food is served at a day wedding?",
    a: "Most day weddings serve a brunch spread on arrival (chaat, chai, kulhad coffee, parathas, fruit) and a full lunch after the pheras. Winter favourites such as sarson ka saag, makki ki roti, gajar ka halwa and hot jalebi work well, and a lighter bar or mocktail counter replaces the late-night bar.",
  },
  {
    q: "Is a day wedding a good idea in Delhi winter?",
    a: "Often, yes. December to February afternoons are usually sunny and pleasant, elderly guests and children avoid late-night cold, and everyone drives home before the night fog. The trade-offs are cold, sometimes foggy early mornings and less time for a big dance party.",
  },
  {
    q: "Can we hold a day wedding and an evening reception at the same farmhouse?",
    a: "Yes, if the owner agrees and the slot is long enough. Many families do pheras and lunch in the day, then a short sundowner or reception from about 5:30 PM, finishing loud music by 10 PM. Ask for the reset time between the two layouts and the overtime charge in writing.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const link = "text-black underline font-semibold";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="day-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-15"
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
          alt="Day wedding at a farmhouse in Delhi NCR: a flower-covered mandap in bright daylight set over a lily pond, ready for daytime pheras"
          className="w-full max-w-4xl mx-auto rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Day Wedding at a Farmhouse in Delhi NCR: Daytime Muhurats, Cost and
          a Sample Day Plan
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
          A day wedding at a farmhouse in Delhi NCR swaps the late-night
          baraat and 2 AM pheras for sunlit rituals, a long lunch and guests
          heading home before the fog rolls in. With several daytime muhurats
          in December 2026 and January–February 2027, more families are
          asking whether it is cheaper, what time to start and how to plan
          around winter. This guide answers all three.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A farmhouse day wedding in Delhi NCR works best with pheras on a
            daytime muhurat, guests arriving around 10–11 AM and a finish by
            about 5 PM, before the roughly 5:30 PM winter sunset. For 150
            guests, budget roughly ₹5–12 lakh (estimate), often ₹3–6 lakh
            less than the same wedding at night, mainly through lighting,
            décor and bar savings.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Farmhouse Day Wedding: At a Glance
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Question</th>
                <th className={th}>Short answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Best guest hours in winter</td>
                <td className={td}>About 10 AM–5 PM</td>
              </tr>
              <tr>
                <td className={td}>Delhi sunset in December</td>
                <td className={td}>
                  About 5:24 PM (8 Dec) to 5:35 PM (31 Dec), per Drik Panchang
                </td>
              </tr>
              <tr>
                <td className={td}>Fully daytime muhurats (VedicFeed)</td>
                <td className={td}>
                  3, 4, 6 Dec 2026; 15, 20 Jan 2027; 3, 10, 15, 21, 26, 28 Feb
                  2027
                </td>
              </tr>
              <tr>
                <td className={td}>Gap in the calendar</td>
                <td className={td}>
                  Kharmas, about 16 Dec 2026–14 Jan 2027 (Hindupad)
                </td>
              </tr>
              <tr>
                <td className={td}>Cost for 150 guests</td>
                <td className={td}>
                  Roughly ₹5–12 lakh, vs ₹8–18 lakh at night (estimate)
                </td>
              </tr>
              <tr>
                <td className={td}>Menu style</td>
                <td className={td}>Brunch on arrival, lunch after pheras</td>
              </tr>
              <tr>
                <td className={td}>Book the farmhouse</td>
                <td className={td}>6–12 weeks ahead for Dec–Feb dates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-500">
          All prices in this guide are planning estimates for Delhi NCR and
          vary by area, date, menu and vendor. Muhurat dates and times come
          from published panchang sites and differ between sources; always
          confirm with your family pandit.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Are Couples Choosing Day Weddings?
        </h2>

        <p className="mb-8">
          Day weddings are popular because they are calmer, photograph
          beautifully and suit families with elderly guests and young
          children. VenueLook&apos;s{" "}
          <a
            href="https://www.venuelook.com/blog/the-rise-of-day-weddings-and-why-couples-are-choosing-them"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            2026 piece on the rise of day weddings
          </a>{" "}
          points to soft natural light, pastel and minimal décor, brunch
          menus and guests not having to travel late at night. Manyavar&apos;s{" "}
          <a
            href="https://www.manyavar.com/en-in/blog-key-factors-in-choosing-a-day-vs-night-wedding-in-india.html"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            day vs night wedding guide
          </a>{" "}
          adds that daytime slots are often easier to get and that daytime
          ceremonies are more common in North India than in the South. (For
          a sunrise muhurtham, see our{" "}
          <Link
            href="/blogs/south-indian-wedding-farmhouse-delhi-ncr"
            className={link}
          >
            South Indian wedding at a farmhouse guide
          </Link>
          ; for a Lagan held in daylight as tradition once had it, see our{" "}
          <Link
            href="/blogs/kashmiri-pandit-wedding-farmhouse-delhi-ncr"
            className={link}
          >
            Kashmiri Pandit wedding at a farmhouse guide
          </Link>
          .)
        </p>

        <p className="mb-8">
          In Delhi NCR there are three local reasons on top of that:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Winter afternoons are the best part of the day.</strong>{" "}
            December and January afternoons are usually sunny, while nights
            turn cold and foggy. A daytime function keeps guests outdoors in
            the comfortable hours.
          </li>
          <li>
            <strong>The 10 PM music limit stops mattering.</strong> Outdoor
            loudspeakers must stop at 10 PM, which squeezes a night
            wedding&apos;s dance floor. A day wedding finishes long before
            the cut-off.
          </li>
          <li>
            <strong>Less dependence on generators.</strong> Daylight means far
            less lighting load, which helps when GRAP stages restrict diesel
            generator use. Our{" "}
            <Link href="/blogs/grap-rules-weddings-parties-delhi-ncr" className={link}>
              GRAP rules for weddings guide
            </Link>{" "}
            explains what each stage means for power, tandoors and heaters.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Wedding Dates in 2026–27 Have Daytime Muhurats?
        </h2>

        <p className="mb-8">
          VedicFeed lists several vivah windows that fall fully or partly in
          daylight this season. We checked its{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            December 2026
          </a>
          ,{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            January 2027
          </a>{" "}
          and{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/february-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            February 2027
          </a>{" "}
          pages in November 2026. Times below are as listed there.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Date</th>
                <th className={th}>Listed window</th>
                <th className={th}>Day-wedding fit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Thu 3 Dec 2026</td>
                <td className={td}>7:07 AM–10:53 AM</td>
                <td className={td}>Early pheras, then brunch and lunch</td>
              </tr>
              <tr>
                <td className={td}>Fri 4 Dec 2026</td>
                <td className={td}>7:08 AM–10:22 AM</td>
                <td className={td}>Early pheras; family-first morning</td>
              </tr>
              <tr>
                <td className={td}>Sun 6 Dec 2026</td>
                <td className={td}>7:09 AM–7:42 AM</td>
                <td className={td}>Very short dawn window; small family pheras</td>
              </tr>
              <tr>
                <td className={td}>Sat 12 Dec 2026</td>
                <td className={td}>7:13 AM onwards (runs overnight)</td>
                <td className={td}>Weekend, full flexibility for midday pheras</td>
              </tr>
              <tr>
                <td className={td}>Fri 15 Jan 2027</td>
                <td className={td}>7:25 AM–2:13 PM</td>
                <td className={td}>Ideal late-morning pheras, first date after Kharmas</td>
              </tr>
              <tr>
                <td className={td}>Wed 20 Jan 2027</td>
                <td className={td}>7:25 AM–4:17 PM</td>
                <td className={td}>Long daytime window</td>
              </tr>
              <tr>
                <td className={td}>Sun 24 Jan 2027</td>
                <td className={td}>10:20 AM–9:29 PM</td>
                <td className={td}>Sunday, midday pheras possible</td>
              </tr>
              <tr>
                <td className={td}>Sun 31 Jan 2027</td>
                <td className={td}>7:23 AM–7:34 PM</td>
                <td className={td}>Sunday, full daytime flexibility</td>
              </tr>
              <tr>
                <td className={td}>Wed 3 Feb / Wed 10 Feb 2027</td>
                <td className={td}>7:22 AM–12:26 PM / 7:19 AM–2:45 PM</td>
                <td className={td}>Morning pheras, lunch after</td>
              </tr>
              <tr>
                <td className={td}>Mon 15 Feb / Fri 26 Feb 2027</td>
                <td className={td}>7:16 AM–12:33 PM / 7:09 AM–10:13 AM</td>
                <td className={td}>Morning pheras, lunch after</td>
              </tr>
              <tr>
                <td className={td}>Sun 21 Feb / Sun 28 Feb 2027</td>
                <td className={td}>11:27 AM–1:50 PM / 7:07 AM–1:47 PM</td>
                <td className={td}>Sunday midday pheras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Two things stand out. First, the weekend options are limited: Sat
          12 Dec, Sun 24 and 31 Jan, and Sun 21 and 28 Feb are the main
          weekend dates with usable daylight windows, so expect strong demand
          for farmhouses on those days. Second, there is a gap in the middle.
          Hindupad dates{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Kharmas
          </a>{" "}
          from about 16 December 2026 to 14 January 2027, when many families
          avoid weddings, which is why 15 January is the first date after it.
        </p>

        <p className="mb-8">
          Different panchang sites can list different dates and times for the
          same day, and regional customs vary. Treat this table as a
          shortlist to take to your pandit, not a final answer.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Time Should a Day Wedding Start in Delhi in Winter?
        </h2>

        <p className="mb-8">
          Plan guest arrivals for about 10–11 AM and a finish by about 5 PM.
          Drik Panchang puts New Delhi sunrise at about{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=08%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            7:01 AM and sunset at 5:24 PM on 8 December 2026
          </a>
          , and about{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=31%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            7:14 AM and 5:35 PM on 31 December
          </a>
          . Sunrise-Sunset.org lists{" "}
          <a
            href="https://sunrise-sunset.org/in/new-delhi"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            22 December 2026 as the shortest day
          </a>
          , with about 10 hours 19 minutes of daylight.
        </p>

        <p className="mb-8">
          Early mornings are the hard part. The coldest January mornings in
          Delhi have dropped to around{" "}
          <a
            href="https://www.tribuneindia.com/news/delhi/delhi-experiences-coldest-january-morning-since-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            3°C
          </a>
          , and dense fog regularly disrupts{" "}
          <a
            href="https://scroll.in/latest/1077519/delhi-over-270-flights-delayed-17-cancelled-due-to-dense-fog"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            flights and road travel
          </a>{" "}
          in winter. If your muhurat is at 7 AM, keep the pheras to close
          family in a heated, covered mandap and invite the wider guest list
          from late morning.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Three day-wedding formats that work
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>Timing</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Dawn pheras + brunch</td>
                <td className={td}>Pheras 7–9 AM, guests 10 AM–3 PM</td>
                <td className={td}>Early muhurats like 3–4 Dec or 26 Feb</td>
              </tr>
              <tr>
                <td className={td}>Classic day wedding</td>
                <td className={td}>Guests 10 AM–5 PM, pheras around noon</td>
                <td className={td}>Long windows like 15 or 20 Jan</td>
              </tr>
              <tr>
                <td className={td}>Day wedding + sundowner</td>
                <td className={td}>
                  Pheras by 3 PM, sundowner 5:30–10 PM
                </td>
                <td className={td}>Families who still want a dance party</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          WedMeGood&apos;s{" "}
          <a
            href="https://www.wedmegood.com/blog/planners-reveal-morning-vs-sundowner-vs-evening-events-pros-cons/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            planner round-up on morning, sundowner and evening events
          </a>{" "}
          makes a useful point about the third format: if the morning rituals
          overrun, the evening part gets squeezed, so leave a buffer of at
          least an hour between them.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Is a Day Wedding Cheaper Than a Night Wedding?
        </h2>

        <p className="mb-8">
          Usually, by a modest margin. The savings come from lighting,
          generators, décor and the bar rather than from food or the venue
          itself. The table below compares the same 150-guest farmhouse
          wedding in Delhi NCR held by day and at night. These are our
          planning estimates, not quotes.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Line item (150 guests)</th>
                <th className={th}>Day wedding (estimate)</th>
                <th className={th}>Night wedding (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Venue and food (brunch + lunch vs dinner)</td>
                <td className={td}>₹1.8–4 lakh</td>
                <td className={td}>₹2.25–4.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Mandap and décor</td>
                <td className={td}>₹1–3 lakh</td>
                <td className={td}>₹1.5–4.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Lighting, sound and generator</td>
                <td className={td}>₹0.3–0.8 lakh</td>
                <td className={td}>₹0.8–2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Heaters and covered seating</td>
                <td className={td}>₹0.1–0.4 lakh</td>
                <td className={td}>₹0.4–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>Bar and mixers</td>
                <td className={td}>₹0–1 lakh (light or none)</td>
                <td className={td}>₹1–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photo and video</td>
                <td className={td}>₹1–2 lakh</td>
                <td className={td}>₹1–2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Pandit, dhol, makeup, misc.</td>
                <td className={td}>₹0.8–1 lakh</td>
                <td className={td}>₹0.8–1 lakh</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className={td}>Total</td>
                <td className={td}>About ₹5–12 lakh</td>
                <td className={td}>About ₹8–18 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Two caveats. A day slot only saves on venue rent if the farmhouse
          can sell the evening to someone else, so ask whether a day-only
          price exists. And if you add a sundowner, most of the lighting and
          bar savings disappear. Our{" "}
          <Link href="/blogs/farmhouse-wedding-cost-delhi-ncr" className={link}>
            farmhouse wedding cost guide
          </Link>{" "}
          breaks down per-plate rates and budgets for larger guest lists.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Serve at a Day Wedding?
        </h2>

        <p className="mb-8">
          Serve in two waves: a brunch spread when guests arrive and a proper
          lunch after the pheras. Winter food is the hidden advantage of a
          Delhi day wedding. A day format also suits families who finish
          meals before sunset; our{" "}
          <Link
            href="/blogs/jain-wedding-farmhouse-delhi-ncr"
            className="underline"
          >
            Jain wedding at a farmhouse guide
          </Link>{" "}
          covers that plan.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Arrival brunch:</strong> chai and kulhad coffee, aloo and
            gobhi parathas, chole kulche, fruit chaat, mini idlis for
            non-Punjabi guests.
          </li>
          <li>
            <strong>Live counters:</strong> chaat, tikki, jalebi with rabri,
            and a soup station for older guests.
          </li>
          <li>
            <strong>Lunch:</strong> dal makhani, paneer, sarson ka saag with
            makki ki roti, a biryani or pulao, and gajar ka halwa.
          </li>
          <li>
            <strong>Drinks:</strong> mocktails, kanji, hot badam milk, and a
            light beer and wine bar if the family wants one.
          </li>
        </ul>

        <p className="mb-8">
          If you serve alcohol at a Delhi farmhouse, the event still needs the
          relevant liquor permit, whatever the time of day. Check the GRAP
          stage before you plan coal or wood tandoors.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Day Wedding Timeline Look Like?
        </h2>

        <p className="mb-8">
          Here is a sample run-of-show for a classic day wedding on a long
          window such as 15 or 20 January 2027. Shift the pheras to match your
          pandit&apos;s muhurat and keep everything else in the same order.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Time</th>
                <th className={th}>What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Previous evening</td>
                <td className={td}>
                  Mandap, décor and kitchen set up; heaters tested
                </td>
              </tr>
              <tr>
                <td className={td}>9:00 AM</td>
                <td className={td}>Bride and groom getting ready on site</td>
              </tr>
              <tr>
                <td className={td}>10:00 AM</td>
                <td className={td}>Short baraat with dhol inside the farmhouse</td>
              </tr>
              <tr>
                <td className={td}>10:30 AM</td>
                <td className={td}>Milni, jaimala, brunch counters open</td>
              </tr>
              <tr>
                <td className={td}>11:30 AM–1:30 PM</td>
                <td className={td}>Pheras in the sunniest part of the lawn</td>
              </tr>
              <tr>
                <td className={td}>1:30–3:00 PM</td>
                <td className={td}>Lunch, speeches, joota chupai</td>
              </tr>
              <tr>
                <td className={td}>3:00–4:30 PM</td>
                <td className={td}>Family photos, games, light music</td>
              </tr>
              <tr>
                <td className={td}>4:30–5:15 PM</td>
                <td className={td}>Couple portraits in golden-hour light</td>
              </tr>
              <tr>
                <td className={td}>5:15–6:00 PM</td>
                <td className={td}>Vidaai before dark and evening fog</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For more on heaters, fog buffers and keeping outstation guests on
          schedule, see our{" "}
          <Link href="/blogs/winter-wedding-farmhouse-delhi-ncr" className={link}>
            winter wedding at a farmhouse guide
          </Link>
          .
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What to Look For in a Farmhouse for a Day Wedding
        </h2>

        <p className="mb-8">
          The best day-wedding farmhouse is not always the one that looks
          best at night. Walk the lawn around noon if you can and check:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Sun and shade:</strong> a lawn that gets direct winter sun
            for the mandap, plus some shade for older guests in February.
          </li>
          <li>
            <strong>A heated, covered space:</strong> for early-morning pheras
            and as a fog or rain backup.
          </li>
          <li>
            <strong>Getting-ready rooms:</strong> with good natural light and
            enough power points for hair and makeup.
          </li>
          <li>
            <strong>Day-slot pricing:</strong> a clear start and end time and
            the overtime rate if the vidaai runs late.
          </li>
          <li>
            <strong>Easy access:</strong> on a route guests can drive in
            daylight, with parking inside. Chattarpur, Sohna Road and
            Bijwasan farmhouses suit Delhi and Gurgaon families; Noida
            Expressway farms suit East Delhi and Noida.
          </li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Questions to Ask the Farmhouse Owner
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Do you offer a day-only slot, and what are its exact hours?</li>
          <li>Is the day rate lower than the evening rate?</li>
          <li>Can vendors set up the evening before, and at what cost?</li>
          <li>Where does the sun fall on the lawn between 11 AM and 2 PM?</li>
          <li>Is there a heated indoor hall that seats all guests?</li>
          <li>Is a havan allowed, and where can the fire be lit safely?</li>
          <li>Can we run a sundowner after the wedding, and until when?</li>
          <li>What is the generator setup, and is it GRAP-compliant?</li>
        </ul>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Day Wedding Planning Checklist
        </h2>

        <ul className="space-y-3 mb-12">
          <li>☐ Daytime muhurat confirmed by the family pandit</li>
          <li>☐ Format chosen: dawn pheras, classic day or day + sundowner</li>
          <li>☐ Farmhouse day slot booked, with overtime rate in writing</li>
          <li>☐ Evening-before setup access agreed</li>
          <li>☐ Heated mandap or indoor backup arranged</li>
          <li>☐ Brunch and lunch menus fixed with the caterer</li>
          <li>☐ Photographer briefed on golden-hour portrait timing</li>
          <li>☐ Invitations show arrival time clearly (not just the muhurat)</li>
          <li>☐ Outstation guests arriving the day before, in case of fog</li>
          <li>☐ Vidaai planned before sunset</li>
        </ul>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings and wedding functions, including day weddings with a
          sundowner. If you are keeping the guest list small, our{" "}
          <Link href="/blogs/intimate-farmhouse-wedding-delhi-ncr" className={link}>
            intimate farmhouse wedding guide
          </Link>{" "}
          pairs well with a daytime format.
        </p>
      </article>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-black text-4xl font-bold mb-10">
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
            Planning a Day Wedding?
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count, preferred area and budget.
            Effortless Events can help you find a farmhouse with a day slot, a
            sunny lawn for the mandap and a warm hall for your guests.
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
              Plan My Event
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
