import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Jain Wedding at a Farmhouse in Delhi NCR: Food, Dates & Cost",

  description:
    "Planning a Jain wedding at a farmhouse in Delhi NCR? Jain food rules for caterers, a sunset meal plan, 2026–27 dates, cost estimates and a checklist.",

  keywords: [
    "Jain wedding at farmhouse Delhi NCR",
    "Jain wedding venue Delhi",
    "Jain wedding food menu",
    "Jain caterers Delhi NCR",
    "Jain wedding rituals list",
    "Jain wedding before sunset",
    "Jain wedding cost Delhi",
  ],

  alternates: { canonical: "/blogs/jain-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Jain Wedding at a Farmhouse in Delhi NCR: Food, Dates & Cost",
    description:
      "How to host a Jain wedding at a Delhi NCR farmhouse: what Jain food rules mean for the caterer, a day plan that finishes meals before sunset, 2026–27 dates, cost estimates and a checklist.",
    images: ["/catering.webp"],
  },
};

const faqs = [
  {
    q: "What food is not served at a Jain wedding?",
    a: "Jain dietary practice rules out meat, fish, eggs, alcohol and honey, and avoids root vegetables such as onion, garlic, potato, carrot and radish. Many families also avoid mushrooms, brinjal and food kept overnight, including curd or batter set the day before. How strictly each rule applies varies by family, so give the caterer a written list.",
  },
  {
    q: "Do Jain weddings serve dinner before sunset?",
    a: "Many strict Jain families do not eat after sunset (chauvihar), so they plan the main meal as a lunch or an early high tea that ends before sunset. In Delhi that means finishing by about 5:15 PM in December. Families that are less strict often run a normal evening dinner with a separate, sunset-timed meal for elders who observe the rule.",
  },
  {
    q: "What are the main rituals of a Jain wedding?",
    a: "Common pre-wedding rituals include lagna lekhan (fixing the date), lagna patrika vachan, sagai, mehndi and the mada mandap puja. The wedding day usually includes the groom's welcome, kanyavaran (kanyadaan), granthi bandhan (tying the knot), the pheras around the sacred fire and the elders' blessings. After the wedding, many couples visit a Jain temple and give alms (jina grahe dhan arpana).",
  },
  {
    q: "How many pheras are there in a Jain wedding?",
    a: "Sources differ. WeddingWire and Weddingz describe seven pheras, while CulturalIndia describes four rounds around the sacred fire, with the bride leading the first and the groom the other three. Practice also differs between Shwetambar and Digambar families, so ask your vidhikarak which sequence your family follows.",
  },
  {
    q: "Is a Jain wedding legally valid and how is it registered?",
    a: "Yes. The Hindu Marriage Act, 1955 defines 'Hindu' to include Jains, and the Madhya Pradesh High Court confirmed in March 2025 that the Act applies to Jain marriages. In Delhi, couples register the marriage with the Revenue Department after the ceremony. This is general information, not legal advice.",
  },
  {
    q: "How much does a Jain wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 200-guest Jain wedding day at a Delhi NCR farmhouse often totals about ₹7–16 lakh for venue, Jain catering, mandap and décor, vidhikarak, music and photography, before jewellery and clothes. A dry, day-time format usually costs less than a night wedding with a bar.",
  },
  {
    q: "Can a Jain wedding be held at a farmhouse instead of a dharamshala or banquet?",
    a: "Yes. Nothing in the rituals ties them to a particular building, and a farmhouse lawn suits a day-time function. The key checks are a kitchen where the caterer can cook fresh Jain food on site, a safe spot for the sacred fire, and enough daylight seating for a meal that finishes before sunset.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="jain-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-22"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/catering.webp"
          width={1200}
          height={1799}
          fetchPriority="high"
          decoding="async"
          alt="Jain wedding at a farmhouse in Delhi NCR: a daylight buffet line of covered chafing dishes, plates and cutlery set out for a lunch that finishes before sunset"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Jain Wedding at a Farmhouse in Delhi NCR: Food Rules, Dates and Cost
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
          Planning a Jain wedding at a farmhouse in Delhi NCR this winter? A
          farmhouse gives Jain families something a banquet hall rarely does:
          a sunny lawn for a day-time function, an on-site kitchen where the
          caterer cooks fresh, and room for the sacred fire. This guide covers
          what Jain food rules mean for your caterer, how to time the meal
          around sunset, the main rituals, 2026–27 dates, cost estimates and a
          booking checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            A Delhi NCR farmhouse suits a Jain wedding best as a day-time
            function: rituals in the late morning, a Jain lunch cooked fresh
            on site, and every meal finished before sunset (about 5:25 PM in
            December). Confirm the date with your vidhikarak, give the caterer
            a written list of food rules, and budget roughly ₹7–16 lakh for 200
            guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Jain Wedding at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>What to plan for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Best format</td>
                <td className={td}>
                  Day wedding: rituals late morning, lunch, bidaai before dark
                </td>
              </tr>
              <tr>
                <td className={td}>Food</td>
                <td className={td}>
                  Pure vegetarian, no root vegetables, no honey, no alcohol,
                  cooked fresh on the day
                </td>
              </tr>
              <tr>
                <td className={td}>Meal timing</td>
                <td className={td}>
                  Finish before sunset for guests who keep chauvihar (about
                  5:25–5:35 PM in Delhi in December)
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  Early–mid December 2026, then mid-January to February 2027;
                  final date from your vidhikarak
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  Working kitchen, covered mandap with a safe fire spot,
                  sunny lunch seating, bride&apos;s room
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹7–16 lakh for a 200-guest wedding day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Jain Wedding?
        </h2>

        <p className="mb-8">
          The main reason is control over the kitchen and the clock. Jain food
          needs to be cooked fresh, and many families want the main meal served
          in daylight. A farmhouse lets your own Jain caterer cook on site from
          early morning, and a lawn is at its best in the winter sun between 11
          AM and 4 PM, exactly when a Jain wedding lunch happens.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Your caterer, your rules:</strong> many banquets insist on
            an in-house kitchen that also cooks onion, garlic and non-veg. A
            farmhouse that allows outside caterers lets you bring a pure Jain
            team and inspect the kitchen.
          </li>
          <li>
            <strong>Daylight seating:</strong> a sunny lawn is warm and
            pleasant at lunchtime in December and January, unlike a cold
            evening lawn that needs heaters.
          </li>
          <li>
            <strong>Space for the sacred fire:</strong> an open, covered
            mandap is easier to make safe than a low-ceiling hall.
          </li>
          <li>
            <strong>Easy to keep dry:</strong> it is simpler to run an
            alcohol-free event at a private venue with no in-house bar.
          </li>
        </ul>

        {/* =====================================================
            FOOD RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Jain Food Rules Your Caterer Must Follow?
        </h2>

        <p className="mb-8">
          A Jain wedding menu is pure vegetarian with no root vegetables, no
          honey and no alcohol, and many families also want it cooked and
          served the same day. The table below summarises common practice as
          described in the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Jain_vegetarianism"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia article on Jain vegetarianism
          </a>{" "}
          and a{" "}
          <a
            href="https://www.dgprofile.co/jain-matrimony-blog/jain-marriage-food-preferences"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            2026 guide to Jain wedding food preferences
          </a>
          . Strictness varies a lot between families, so agree your own list
          with elders first.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Rule</th>
                <th className={th}>What it means for the caterer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>No meat, fish or eggs</td>
                <td className={td}>
                  Check eggless breads, cakes, mayonnaise and desserts
                </td>
              </tr>
              <tr>
                <td className={td}>No root vegetables</td>
                <td className={td}>
                  No onion, garlic, potato, carrot or radish; use raw banana, lauki, capsicum and paneer instead
                </td>
              </tr>
              <tr>
                <td className={td}>Often avoided too</td>
                <td className={td}>
                  Mushrooms, brinjal, and in stricter homes cauliflower,
                  cabbage and figs; ask the family
                </td>
              </tr>
              <tr>
                <td className={td}>No honey or alcohol</td>
                <td className={td}>
                  Check mocktail syrups, glazes and desserts; no bar
                </td>
              </tr>
              <tr>
                <td className={td}>Fresh, not stored</td>
                <td className={td}>
                  Curd set the same day; no overnight-fermented batters for
                  dhokla, idli or dosa (use instant methods)
                </td>
              </tr>
              <tr>
                <td className={td}>Filtered water</td>
                <td className={td}>
                  Filtered or boiled water for cooking and drinking
                </td>
              </tr>
              <tr>
                <td className={td}>Separate utensils (common request)</td>
                <td className={td}>
                  Utensils and cooking areas not shared with non-Jain food
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          What can a Jain wedding menu include?
        </h3>

        <p className="mb-8">
          Plenty. A good Jain caterer will build a full North Indian, Gujarati
          or Rajasthani spread without root vegetables. Typical choices
          include:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Starters:</strong> paneer tikka without onion, raw-banana
            tikki, instant dhokla, khandvi, corn and capsicum bites.
          </li>
          <li>
            <strong>Live counters:</strong> chaat made with raw banana instead
            of potato, pav bhaji made Jain style, fresh jalebi.
          </li>
          <li>
            <strong>Mains:</strong> paneer and green-vegetable curries,
            gatte ki sabzi, dal, kadhi, rice, puri and phulka.
          </li>
          <li>
            <strong>Desserts:</strong> moong dal halwa, rasmalai and sweets
            from a shop that confirms its recipes.
          </li>
        </ul>

        <p className="mb-8">
          For mixed guest lists, some families keep the whole menu Jain, while
          others run a clearly labelled Jain counter beside a regular
          vegetarian one. Our{" "}
          <Link
            href="/blogs/farmhouse-party-catering-menu-delhi-ncr"
            className={linkClass}
          >
            farmhouse catering guide
          </Link>{" "}
          explains buffet versus live-counter set-ups.
        </p>

        {/* =====================================================
            SUNSET PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan a Jain Wedding Around Sunset?
        </h2>

        <p className="mb-8">
          Plan the main meal as a lunch and close every food counter about 20
          minutes before sunset. Some Jains keep chauvihar, which Wikipedia
          describes as not eating, and in its strictest form not drinking
          water, between sunset and sunrise. In Delhi,{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=08%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Drik Panchang lists sunset at 5:24 PM on 8 December 2026
          </a>{" "}
          and{" "}
          <a
            href="https://www.drikpanchang.com/panchang/sunrise/panchang-sunrise.html?date=31%2F12%2F2026"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            5:35 PM on 31 December 2026
          </a>
          ; it moves later through January and February.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>How it works</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Full day wedding</td>
                <td className={td}>
                  Baraat about 10–11 AM, rituals, lunch 1–4 PM, bidaai before
                  dark
                </td>
                <td className={td}>
                  Strict families and a muhurat in daylight
                </td>
              </tr>
              <tr>
                <td className={td}>Day rituals, early high tea</td>
                <td className={td}>
                  Lunch after the pheras, then high tea that closes by about 5
                  PM
                </td>
                <td className={td}>Families with an afternoon muhurat</td>
              </tr>
              <tr>
                <td className={td}>Evening wedding, sunset meal</td>
                <td className={td}>
                  Early Jain meal for elders before sunset; regular dinner for
                  other guests after
                </td>
                <td className={td}>
                  Mixed guest lists and an evening muhurat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          A day format has other winter benefits: guests drive home before the
          fog sets in, and you need fewer heaters. Our{" "}
          <Link
            href="/blogs/day-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            day wedding at a farmhouse guide
          </Link>{" "}
          has a full daytime run-of-show and lists the dates with daytime
          muhurats.
        </p>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Main Jain Wedding Rituals?
        </h2>

        <p className="mb-8">
          A Jain wedding moves from lagna lekhan, when the date is fixed, to
          the pheras around the sacred fire and a temple visit after the
          wedding. The sequence below draws on{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/jain-marriage--c2061"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire&apos;s guide to Jain marriage
          </a>{" "}
          and{" "}
          <a
            href="https://culturalindia.net/weddings/regional-weddings/jain-wedding.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CulturalIndia&apos;s overview
          </a>
          . Names and order vary between Shwetambar and Digambar families and
          by region.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Stage</th>
                <th className={th}>Rituals</th>
                <th className={th}>Farmhouse fit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Before</td>
                <td className={td}>
                  Lagna lekhan, lagna patrika vachan, sagai, mehndi,
                  bhatwaan or pithi (turmeric), sangeet
                </td>
                <td className={td}>
                  Sagai, mehndi and sangeet work well as farmhouse lunches or
                  evenings
                </td>
              </tr>
              <tr>
                <td className={td}>Day before</td>
                <td className={td}>
                  Mada mandap: the mandap is set up and sanctified with a puja
                </td>
                <td className={td}>
                  Book the farmhouse from the previous afternoon
                </td>
              </tr>
              <tr>
                <td className={td}>Wedding day</td>
                <td className={td}>
                  Ghudchadi, groom&apos;s welcome and aarti, kanyavaran,
                  granthi bandhan, pheras, ashirvad
                </td>
                <td className={td}>
                  Best fit: covered mandap plus a sunny lunch lawn
                </td>
              </tr>
              <tr>
                <td className={td}>After</td>
                <td className={td}>
                  Bidaai, griha pravesh, jina grahe dhan arpana (temple visit
                  and alms), reception
                </td>
                <td className={td}>
                  Reception can be a second farmhouse day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          How many pheras are there?
        </h3>

        <p className="mb-8">
          It depends on the family. WeddingWire describes seven pheras, while
          CulturalIndia describes four rounds around the fire, with the bride
          leading the first and the groom the other three, while the
          Mahaveerashtak is recited. Your vidhikarak (Jain wedding priest) will
          tell you which sequence to follow and how long it takes, which you
          need for the day plan.
        </p>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Dates Work for a Jain Wedding in 2026–27?
        </h2>

        <p className="mb-8">
          The date is fixed at lagna lekhan by the family&apos;s pandit, so
          treat published lists only as a starting point. General North
          Indian lists such as VedicFeed give{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            2–6, 11 and 12 December 2026
          </a>
          , then dates from mid-January in{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            January 2027
          </a>{" "}
          and through{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/february-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            February 2027
          </a>
          . The same lists show fully daytime windows on 3, 4 and 6 December
          2026, on 15 and 20 January 2027, and on several February dates,
          which suit a sunset-aware Jain plan.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Many North Indian families avoid weddings during{" "}
            <a
              href="https://hindupad.com/khar-maas/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Kharmas (about 16 December to 14 January)
            </a>
            ; ask your elders whether your family does.
          </li>
          <li>
            Popular December Saturdays fill up first at farmhouses, so if your
            date is 5 or 12 December, book the venue now.
          </li>
          <li>
            If the muhurat is on a weekday, a common approach is the wedding
            on the date and the reception on the next weekend.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Jain Wedding at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A 200-guest Jain wedding day at a Delhi NCR farmhouse typically
          costs about ₹7–16 lakh before jewellery and clothes. These are
          planning estimates for late 2026, not quotes; prices move with date,
          area, number of dishes and how many functions you hold at the venue.
          A dry, daytime wedding usually saves on bar, heaters and late-night
          lighting.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Line item</th>
                <th className={th}>Typical range (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse, day use (plus previous evening)</td>
                <td className={td}>₹1.5–5 lakh, by area, date and size</td>
              </tr>
              <tr>
                <td className={td}>Jain catering</td>
                <td className={td}>
                  ₹1,000–₹2,200 per plate for a full wedding lunch
                </td>
              </tr>
              <tr>
                <td className={td}>Mandap and lawn décor</td>
                <td className={td}>₹1–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Vidhikarak, samagri and puja items</td>
                <td className={td}>₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className={td}>Music (band, shehnai or singer)</td>
                <td className={td}>₹30,000–₹1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Shade, seating and power backup</td>
                <td className={td}>₹30,000–₹1 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Guests</th>
                <th className={th}>Wedding day (estimate)</th>
                <th className={th}>Separate reception (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100</td>
                <td className={td}>₹4–9 lakh</td>
                <td className={td}>₹3–7 lakh</td>
              </tr>
              <tr>
                <td className={td}>200</td>
                <td className={td}>₹7–16 lakh</td>
                <td className={td}>₹5–11 lakh</td>
              </tr>
              <tr>
                <td className={td}>350</td>
                <td className={td}>₹12–25 lakh</td>
                <td className={td}>₹9–18 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Delhi NCR has many caterers that specialise in Jain food; WedMeGood
          even runs a separate Jain catering category for the region. Ask for
          a tasting and a sample menu with every ingredient listed. For a
          wider breakdown of venue and vendor costs, see our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>
          .
        </p>

        {/* =====================================================
            CHOOSING THE FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <p className="mb-8">
          Check the kitchen and the daylight first; décor can be fixed later.
          Visit at the same time of day as your lunch so you can see where the
          sun falls on the lawn. Families in south and west Delhi often look at{" "}
          <Link
            href="/blogs/farmhouse-in-chattarpur-for-party"
            className={linkClass}
          >
            Chattarpur
          </Link>{" "}
          and Bijwasan, Gurgaon families towards Sohna Road and Gwal Pahari,
          and Noida families along the Expressway.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            Outside caterer allowed, with a clean kitchen your caterer can use
            from early morning, and no non-veg cooking that day.
          </li>
          <li>
            A covered mandap with written permission for the sacred fire, plus
            sand, water and an extinguisher nearby.
          </li>
          <li>
            Sunny lunch seating with some shade, and enough tables to seat
            elders rather than a standing buffet only.
          </li>
          <li>
            Filtered drinking water on tap, or space for water dispensers.
          </li>
          <li>
            A bride&apos;s room near the mandap and clean washrooms close to
            the lawn.
          </li>
          <li>
            Access from the previous afternoon for the mada mandap puja and
            décor set-up.
          </li>
          <li>
            Parking and a drop-off point for the baraat, plus the music finish
            time in writing.
          </li>
          <li>
            A power plan that does not rely on diesel generators on bad-air
            days under GRAP.
          </li>
        </ol>

        <p className="mb-8">
          No firecrackers: the Supreme Court{" "}
          <a
            href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            restored the firecracker ban in Delhi-NCR from 9 November 2026
          </a>
          , which also fits the Jain principle of avoiding harm to living
          beings.
        </p>

        {/* =====================================================
            SAMPLE DAY PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample Jain Wedding Day Plan at a Farmhouse
        </h2>

        <p className="mb-8">
          This example assumes a December date with a late-morning muhurat;
          shift the times to match your own.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Previous afternoon:</strong> mada mandap puja; décor team
            sets up the mandap and lawn.
          </li>
          <li>
            <strong>6:30 AM:</strong> caterer starts cooking; curd set fresh.
          </li>
          <li>
            <strong>9:30 AM:</strong> welcome drinks and light breakfast for
            early family.
          </li>
          <li>
            <strong>10:30 AM:</strong> baraat arrives; welcome and aarti.
          </li>
          <li>
            <strong>11:30 AM–1:30 PM:</strong> kanyavaran, granthi bandhan,
            pheras and blessings.
          </li>
          <li>
            <strong>1:00–3:30 PM:</strong> lunch on the lawn, with elders
            served first.
          </li>
          <li>
            <strong>4:00–4:45 PM:</strong> tea and sweets; all counters close
            by about 5:00 PM.
          </li>
          <li>
            <strong>Before 5:30 PM:</strong> bidaai, then guests leave before
            fog and dark.
          </li>
        </ul>

        {/* =====================================================
            ENTITY + REGISTRATION
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Who Can Help Plan a Jain Wedding at a Farmhouse?
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, receptions and family functions, and coordinate catering,
          décor and logistics. For the sagai, mehndi or pithi, our{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className={linkClass}
          >
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          has day-time set-up ideas.
        </p>

        <p className="mb-8 text-base text-gray-600">
          Jain marriages fall under the Hindu Marriage Act, 1955; the Madhya
          Pradesh High Court{" "}
          <a
            href="https://www.livelaw.in/amp/high-court/madhya-pradesh-high-court/madhya-pradesh-high-court-jain-community-hindu-marriage-act-287387"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            confirmed in March 2025 that the Act applies to the Jain community
          </a>
          . In Delhi, register the marriage with the Revenue Department after
          the ceremony. This is general information, not legal advice.
        </p>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Jain Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>10–12 weeks out:</strong> lagna lekhan; fix date and
            muhurat time; decide day or evening format.
          </li>
          <li>
            <strong>8–10 weeks out:</strong> visit farmhouses at lunchtime;
            book the venue, a Jain caterer, décor and photographer.
          </li>
          <li>
            <strong>6–8 weeks out:</strong> print invitations with the meal
            time; book the vidhikarak and band; agree the written food-rules
            list.
          </li>
          <li>
            <strong>4–6 weeks out:</strong> menu tasting; confirm kitchen
            access, fire permission and music timing in writing.
          </li>
          <li>
            <strong>2 weeks out:</strong> share the run-of-show and sunset
            time with every vendor; book cabs for elders.
          </li>
          <li>
            <strong>Wedding week:</strong> collect puja samagri; check
            sweets and syrups for honey or egg; walk the site.
          </li>
          <li>
            <strong>After:</strong> temple visit and alms, reception, then
            register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses that allow outside Jain
          caterers and a sacred fire, and plan your day so every meal ends
          before sunset.
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
            Find a Farmhouse for Your Jain Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, muhurat and guest count. Effortless Events can
            shortlist farmhouses across Delhi NCR that welcome Jain caterers,
            and help plan the menu, décor and a day that runs to the sun.
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
              Plan Your Wedding
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
