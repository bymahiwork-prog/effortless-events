import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Marwari Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",

  description:
    "Planning a Marwari wedding at a farmhouse in Delhi NCR? Rituals by day, 2026–27 dates, a Marwari menu, cost estimates for 100–400 guests and a checklist.",

  keywords: [
    "Marwari wedding at farmhouse Delhi NCR",
    "Marwari wedding rituals list",
    "Marwari wedding venue Delhi",
    "how many days is a Marwari wedding",
    "Marwari wedding food menu",
    "Marwari wedding cost Delhi",
    "Marwari wedding dates 2026 2027",
  ],

  alternates: { canonical: "/blogs/marwari-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Marwari Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",
    description:
      "How to host a Marwari wedding at a Delhi NCR farmhouse: which rituals happen when, 2026–27 dates, a Rajasthani menu for the caterer, cost estimates by guest count and a booking checklist.",
    images: ["/decoration-4.webp"],
  },
};

const faqs = [
  {
    q: "What are the main rituals of a Marwari wedding?",
    a: "Common pre-wedding rituals are the roka or sagai, byah haath, Ganpati sthapana, bhaat nyotna and the mayra (bhaat), pithi dastoor, mehndi, the mehfil or geet sangeet and the janeu. The wedding day usually includes nikasi, the baraat, toran, jaimala, granthi bandhan, kanyadaan, the pheras and paharavani, followed by bidaai, griha pravesh, mooh dikhai and pag phera.",
  },
  {
    q: "How many days does a Marwari wedding last?",
    a: "Most guides describe celebrations spread over several days rather than a fixed number. WeddingWire notes that byah haath and bhaat nyotna start about 7 to 10 days before the wedding, while the main functions at the venue usually take two or three days: pithi and mehndi, the mehfil, then the wedding night and bidaai the next morning.",
  },
  {
    q: "What is pithi dastoor in a Marwari wedding?",
    a: "Pithi dastoor is the Marwari haldi: a paste of turmeric, sandalwood and other ingredients is applied to the bride and the groom at their own homes. Sources differ on timing. CulturalIndia places it in the days before the wedding, after which the couple stays home, while WeddingSutra places it on the wedding day after telbaan.",
  },
  {
    q: "What is the toran ceremony in a Marwari wedding?",
    a: "At the toran, the groom arrives at the bride's venue with the baraat and touches or strikes a decorated toran hung over the entrance with a sword or neem stick before he is welcomed in. At a farmhouse, hang the toran at the main gate or at the start of the walkway so the baraat has room to gather.",
  },
  {
    q: "What food is served at a Marwari wedding?",
    a: "Marwari wedding menus are mainly vegetarian and lean on Rajasthani dishes. Weddingz lists dal baati churma, Rajasthani kadhi, ker sangri, gatte ki sabzi, gatte ka pulao, methi bajra puri, mawa kachori, ghevar and balushahi. Many families also want food without onion and garlic for elders, so ask the caterer for a separate counter.",
  },
  {
    q: "How much does a Marwari wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 250-guest Marwari wedding day at a Delhi NCR farmhouse often totals about ₹10–22 lakh for venue, catering, mandap and décor, band and ghodi, pandit, lighting and photography, before jewellery and clothes. A Marwari speciality caterer in Gurgaon lists ₹3,000 per plate on WeddingWire (November 2026), so the menu is the biggest swing.",
  },
  {
    q: "Which dates are good for a Marwari wedding in 2026–27?",
    a: "Your family pandit fixes the date. General North Indian lists such as VedicFeed give 2–6, 11 and 12 December 2026, then dates from mid-January and through February 2027. Many Marwari families avoid weddings in Kharmas, roughly 16 December to 14 January.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="marwari-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-23"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-4.webp"
          width={800}
          height={1200}
          fetchPriority="high"
          decoding="async"
          alt="Marwari wedding at a farmhouse in Delhi NCR: a white and gold dinner table with gold charger plates, folded napkins, candles and green leaves set for the sajjan goth feast"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Marwari Wedding at a Farmhouse in Delhi NCR: Rituals, Dates and Cost
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
          Planning a Marwari wedding at a farmhouse in Delhi NCR this season? A
          Marwari wedding is a run of functions, not a single evening: pithi,
          mehndi, the mayra, a long mehfil, then a baraat, toran and pheras
          that often run late into the night. A farmhouse can hold all of it
          in one place. This guide maps each ritual to a slot at the venue and
          covers 2026–27 dates, a Rajasthani menu, cost estimates and a
          booking checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Marwari wedding, book a Delhi NCR farmhouse for two or three
            days: pithi and mehndi, an evening for the mehfil, and the wedding
            night with an overnight stay so bidaai happens next morning. Fix
            the date with your pandit, avoid Kharmas (about 16 December to 14
            January) if your family does, and budget roughly ₹10–22 lakh for
            250 guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Marwari Wedding at a Farmhouse: At a Glance
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
                <td className={td}>Booking length</td>
                <td className={td}>
                  2–3 days at the venue, with an overnight stay on the wedding
                  night
                </td>
              </tr>
              <tr>
                <td className={td}>Functions at the farmhouse</td>
                <td className={td}>
                  Pithi, mehndi, mayra, mehfil, baraat and toran, pheras,
                  sajjan goth, bidaai
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  Early–mid December 2026, then mid-January to February 2027;
                  final date from your pandit
                </td>
              </tr>
              <tr>
                <td className={td}>Food</td>
                <td className={td}>
                  Mainly vegetarian Rajasthani menu, with a no-onion,
                  no-garlic counter for elders
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  Gate for the toran, covered mandap with a safe fire spot,
                  rooms for both families, a kitchen
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹10–22 lakh for a 250-guest wedding day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Marwari Wedding?
        </h2>

        <p className="mb-8">
          A farmhouse lets you hold the whole multi-day wedding at one address
          with your own caterer and time to finish rituals after midnight.
          Banquet halls usually rent a single evening slot and use an in-house
          kitchen, which does not suit a wedding where the pheras may start
          late and the bidaai happens the next morning.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Room for every function:</strong> a sunny lawn for pithi
            and mehndi, a covered area for the mehfil, and the main lawn for
            the wedding.
          </li>
          <li>
            <strong>Overnight stay:</strong> rooms for the bride&apos;s family
            and elders mean nobody drives home in winter fog after the pheras.
          </li>
          <li>
            <strong>A real entrance for the toran:</strong> a gate and driveway
            give the baraat space to arrive and the groom a proper toran.
          </li>
          <li>
            <strong>Your own caterer:</strong> many farmhouses allow outside
            caterers, so you can bring a Marwari or Rajasthani specialist.
          </li>
        </ul>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Marwari Wedding, Day by Day?
        </h2>

        <p className="mb-8">
          A Marwari wedding has three stages: pre-wedding rituals over a week
          or more, the wedding night, and post-wedding rituals at the
          groom&apos;s home. The table below draws on the ritual lists in{" "}
          <a
            href="https://culturalindia.net/weddings/regional-weddings/marwari-wedding.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CulturalIndia
          </a>
          ,{" "}
          <a
            href="https://weddingsutra.com/planning/wedding-tradition-series-soak-up-the-royal-traditions-of-marwari-weddings"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingSutra (2021)
          </a>{" "}
          and{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/marwari-wedding-traditions--c910"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire (updated October 2024)
          </a>
          , with our suggestion for where each one fits at a farmhouse.
          Sequences differ between families and communities, so check with
          your elders.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Ritual</th>
                <th className={th}>What happens</th>
                <th className={th}>Where it fits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Roka / sagai (mudda tikka)</td>
                <td className={td}>Families formalise the match</td>
                <td className={td}>Months or days before; home or small farmhouse lunch</td>
              </tr>
              <tr>
                <td className={td}>Byah haath, bhaat nyotna</td>
                <td className={td}>
                  Wedding preparations formally begin; the bride&apos;s or
                  groom&apos;s mother invites her brothers for the mayra
                </td>
                <td className={td}>About 7–10 days before; at home</td>
              </tr>
              <tr>
                <td className={td}>Ganpati sthapana, griha shanti</td>
                <td className={td}>Puja and havan for a smooth wedding</td>
                <td className={td}>A few days before; home or farmhouse puja area</td>
              </tr>
              <tr>
                <td className={td}>Pithi dastoor</td>
                <td className={td}>Turmeric paste applied to bride and groom</td>
                <td className={td}>Day function on the lawn</td>
              </tr>
              <tr>
                <td className={td}>Mehndi</td>
                <td className={td}>Henna for the bride and women of the family</td>
                <td className={td}>Afternoon on the lawn, same day as pithi</td>
              </tr>
              <tr>
                <td className={td}>Mahira dastoor (mayra / bhaat)</td>
                <td className={td}>Maternal uncle&apos;s family brings gifts</td>
                <td className={td}>1–2 days before or on the wedding day</td>
              </tr>
              <tr>
                <td className={td}>Mehfil / geet sangeet</td>
                <td className={td}>Songs and dance, traditionally late into the night</td>
                <td className={td}>Evening before the wedding, covered area</td>
              </tr>
              <tr>
                <td className={td}>Janeu, palla dastoor</td>
                <td className={td}>
                  Sacred thread for the groom; groom&apos;s family sends the
                  bridal outfit and jewellery
                </td>
                <td className={td}>Eve of the wedding or the wedding morning</td>
              </tr>
              <tr>
                <td className={td}>Nikasi, baraat</td>
                <td className={td}>Groom is dressed, sehra tied, leaves on a ghodi</td>
                <td className={td}>Wedding evening</td>
              </tr>
              <tr>
                <td className={td}>Toran, baraat dhukav</td>
                <td className={td}>Groom strikes the toran; aarti welcome</td>
                <td className={td}>Main gate or start of the walkway</td>
              </tr>
              <tr>
                <td className={td}>Jaimala to paharavani</td>
                <td className={td}>
                  Jaimala, granthi bandhan, kanyadaan, panigrahan, pheras,
                  sindoor daan, then gifts for the groom&apos;s family
                </td>
                <td className={td}>Stage, then covered mandap; often late night</td>
              </tr>
              <tr>
                <td className={td}>Sajjan goth, juta chupai</td>
                <td className={td}>Feast for the groom&apos;s side; shoe game</td>
                <td className={td}>Dining area during or after the pheras</td>
              </tr>
              <tr>
                <td className={td}>Jua khilai, bidaai</td>
                <td className={td}>Ring-finding game, then the farewell</td>
                <td className={td}>Next morning, if you book overnight</td>
              </tr>
              <tr>
                <td className={td}>Griha pravesh, mooh dikhai, pag phera</td>
                <td className={td}>Bride welcomed at the groom&apos;s home</td>
                <td className={td}>After the wedding, at the groom&apos;s home</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          When does pithi dastoor happen?
        </h3>

        <p className="mb-8">
          It depends on the family. CulturalIndia places pithi in the days
          before the wedding, after which the bride and groom stay at home,
          while WeddingSutra places it on the wedding day after telbaan. At a
          farmhouse, the simplest plan is pithi in the late morning and mehndi
          in the afternoon on the day before the wedding, when the lawn is
          warmest. Our{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className={linkClass}
          >
            haldi and mehendi at a farmhouse guide
          </Link>{" "}
          has day-time set-up ideas.
        </p>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          How should you host the mayra at a farmhouse?
        </h3>

        <p className="mb-8">
          The mayra is often the most emotional moment for the bride&apos;s
          or groom&apos;s mother, and the maternal uncle&apos;s family may
          arrive as a large group with gift trays. Give it its own slot,
          usually before the mehfil, with a decorated seat for the mother and
          a table for the gifts. Our{" "}
          <Link
            href="/blogs/bhaat-mayra-ceremony-farmhouse-delhi-ncr"
            className={linkClass}
          >
            bhaat ceremony guide
          </Link>{" "}
          covers bhaat nyotna, the gift list and a sample plan. Gujarati
          families have a similar gift from the maternal side, the mameru; see
          our{" "}
          <Link
            href="/blogs/gujarati-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Gujarati wedding at a farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            HOW MANY DAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Days Should You Book the Farmhouse For?
        </h2>

        <p className="mb-8">
          Book two or three days. Most Marwari weddings start at home 7–10
          days ahead with byah haath, but the functions that need a venue
          usually fit into the last two or three days. WeddingWire describes
          jua khilai and bidaai taking place the next morning, which is why an
          overnight booking matters.
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
                <td className={td}>3-day farmhouse wedding</td>
                <td className={td}>
                  Day 1 pithi, mehndi and mayra; day 2 mehfil; day 3 wedding,
                  overnight, bidaai next morning
                </td>
                <td className={td}>Large families with outstation guests</td>
              </tr>
              <tr>
                <td className={td}>2-day farmhouse wedding</td>
                <td className={td}>
                  Day 1 pithi and mehndi, mayra in the evening, then mehfil;
                  day 2 wedding and overnight
                </td>
                <td className={td}>Most Delhi NCR families</td>
              </tr>
              <tr>
                <td className={td}>Wedding night only</td>
                <td className={td}>
                  Pre-wedding rituals at home; farmhouse from afternoon of the
                  wedding to next morning
                </td>
                <td className={td}>Smaller weddings or tight budgets</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Dates Work for a Marwari Wedding in 2026–27?
        </h2>

        <p className="mb-8">
          The date comes from your family pandit, so treat published lists as
          a starting point. General North Indian lists such as VedicFeed give{" "}
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
          .
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            Many Marwari families avoid weddings in{" "}
            <a
              href="https://hindupad.com/khar-maas/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Kharmas (about 16 December to 14 January)
            </a>
            , so December dates and late-January dates are in high demand.
          </li>
          <li>
            For a 5 or 12 December wedding, book the farmhouse for 3–4 and
            10–11 December as well if you want pithi, mehndi and the mehfil
            there.
          </li>
          <li>
            If the muhurat falls on a weekday, keep the pheras on the date and
            move the reception or a larger sajjan goth to the weekend.
          </li>
        </ul>

        {/* =====================================================
            MENU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food Is Served at a Marwari Wedding?
        </h2>

        <p className="mb-8">
          A Marwari wedding menu is mainly vegetarian and built around
          Rajasthani dishes.{" "}
          <a
            href="https://weddingz.in/blog/10-rajasthani-dishes-you-will-find-at-a-marwari-wedding"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Weddingz&apos;s list of Marwari wedding dishes
          </a>{" "}
          includes dal baati churma, Rajasthani kadhi, ker sangri, shahi
          gatte, gatte ka pulao, methi bajra puri, mawa kachori, ghevar and
          balushahi. A practical split across the functions:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Pithi and mehndi lunch:</strong> kachori, mirchi vada,
            dal baati churma, kadhi and a chaat counter.
          </li>
          <li>
            <strong>Mehfil night:</strong> lighter snacks, hot soups and
            kulhad chai, with ghevar or jalebi.
          </li>
          <li>
            <strong>Wedding dinner and sajjan goth:</strong> ker sangri,
            gatte, panchmel dal, bajra and missi roti, pulao, a North Indian
            section for mixed guests, and live mithai.
          </li>
          <li>
            <strong>No-onion, no-garlic counter:</strong> many Marwari
            families, especially those with Jain or Vaishnav elders, want one;
            label it clearly.
          </li>
          <li>
            <strong>Bidaai morning:</strong> poha, puri-aloo or bedmi,
            and tea for the families who stayed over.
          </li>
        </ul>

        <p className="mb-8">
          Many Marwari weddings are dry. If you plan a cocktail evening at a
          Delhi farmhouse, the venue needs a liquor permit: a Delhi Excise
          notice dated 22 October 2026 sets a{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            P-10 permit of ₹15,000 per event
          </a>
          , while Gurgaon and Noida farmhouses follow Haryana and UP rules.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Marwari Wedding at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          A 250-guest Marwari wedding day at a Delhi NCR farmhouse typically
          costs about ₹10–22 lakh before jewellery, clothes and the mayra
          gifts. These are planning estimates for late 2026, not quotes; the
          menu, the date and the number of days you book move the total most.
          For reference, a Gurgaon caterer specialising in Marwari food,{" "}
          <a
            href="https://www.weddingwire.in/caterers/marwadi-khana-sector-56-gurgaon--e102800"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            lists ₹3,000 per plate on WeddingWire
          </a>{" "}
          (November 2026); many caterers quote less for simpler menus.
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
                <td className={td}>Farmhouse, wedding day plus overnight</td>
                <td className={td}>₹2–6 lakh, by area, date and size</td>
              </tr>
              <tr>
                <td className={td}>Each extra function day at the venue</td>
                <td className={td}>₹1–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Wedding dinner catering</td>
                <td className={td}>₹1,200–₹3,000 per plate</td>
              </tr>
              <tr>
                <td className={td}>Mandap, toran, stage and lawn décor</td>
                <td className={td}>₹2–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>Band, ghodi and dhol for the baraat</td>
                <td className={td}>₹60,000–₹1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Pandit, havan and samagri</td>
                <td className={td}>₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className={td}>Mehfil music (dhol, folk singers or DJ)</td>
                <td className={td}>₹40,000–₹2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Lighting, heaters and power backup</td>
                <td className={td}>₹50,000–₹1.5 lakh</td>
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
                <th className={th}>Pithi, mehndi and mehfil (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100</td>
                <td className={td}>₹5–11 lakh</td>
                <td className={td}>₹2–5 lakh</td>
              </tr>
              <tr>
                <td className={td}>250</td>
                <td className={td}>₹10–22 lakh</td>
                <td className={td}>₹4–9 lakh</td>
              </tr>
              <tr>
                <td className={td}>400</td>
                <td className={td}>₹16–35 lakh</td>
                <td className={td}>₹6–14 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          For a wider breakdown of venue and vendor costs, see our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>
          .
        </p>

        {/* =====================================================
            BARAAT, TORAN AND RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan the Baraat, Toran and Late Pheras Within the Rules?
        </h2>

        <p className="mb-8">
          Run the baraat on the farmhouse drive, finish loud music by 10 PM,
          and keep the late-night pheras acoustic. In Delhi, amplified music
          normally has to stop at 10 PM, and Delhi Police has{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            made prior permission mandatory for loudspeakers, with fines up to
            ₹1 lakh
          </a>{" "}
          (April 2025). Our{" "}
          <Link
            href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            baraat at a farmhouse guide
          </Link>{" "}
          covers band and ghodi prices, timing and routes.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Start the baraat early:</strong> aim for 7–8 PM so the
            band, toran, jaimala and dinner fit before 10 PM.
          </li>
          <li>
            <strong>Toran at the gate:</strong> hang it where the groom can
            reach it from the ghodi or on foot, with lights so photos work.
          </li>
          <li>
            <strong>Pheras after 10 PM:</strong> use the pandit&apos;s
            microphone at low volume and no DJ; warm the mandap with safe
            heaters.
          </li>
          <li>
            <strong>No firecrackers:</strong> the Supreme Court{" "}
            <a
              href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              restored the firecracker ban in Delhi-NCR from 9 November 2026
            </a>
            ; use cold pyro only if the venue allows it.
          </li>
          <li>
            <strong>GRAP days:</strong> diesel generators can be restricted on
            bad-air days, so ask the farmhouse about grid power and backup.
          </li>
        </ul>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sample 2-Day Marwari Wedding Plan at a Farmhouse
        </h2>

        <p className="mb-8">
          This example assumes a December date with a late-night phera
          muhurat; shift the times to match your own.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Day 1, 10:30 AM:</strong> Ganpati puja; families check in.
          </li>
          <li>
            <strong>Day 1, 12:00–2:00 PM:</strong> pithi dastoor on the lawn,
            then Rajasthani lunch.
          </li>
          <li>
            <strong>Day 1, 2:30–5:30 PM:</strong> mehndi with folk music.
          </li>
          <li>
            <strong>Day 1, 6:30 PM:</strong> mayra (mahira dastoor).
          </li>
          <li>
            <strong>Day 1, 8:00–10:00 PM:</strong> mehfil and dinner; quiet
            songs after 10 PM.
          </li>
          <li>
            <strong>Day 2, morning:</strong> janeu and palla dastoor; décor
            team finishes the mandap.
          </li>
          <li>
            <strong>Day 2, 7:00 PM:</strong> nikasi; baraat on the drive.
          </li>
          <li>
            <strong>Day 2, 8:00–9:45 PM:</strong> toran, aarti, jaimala and
            dinner.
          </li>
          <li>
            <strong>Day 2, late night:</strong> pheras, sindoor daan,
            paharavani and sajjan goth for the groom&apos;s side.
          </li>
          <li>
            <strong>Day 3, 9:00 AM:</strong> breakfast, jua khilai, bidaai.
          </li>
        </ul>

        {/* =====================================================
            WHO CAN HELP + VENUE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking the Farmhouse?
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, receptions and family functions, and coordinate catering,
          décor and logistics. Families in south and west Delhi often look at
          Chattarpur and Bijwasan, Gurgaon families towards Sohna Road, and
          Noida families along the Expressway. Whatever the area, check:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            Booking from the pithi day to the morning after the wedding, with
            the overnight stay and check-out time in writing.
          </li>
          <li>
            Enough rooms for elders and the bride&apos;s family, close to the
            mandap and with heaters.
          </li>
          <li>
            Outside caterer allowed, with a kitchen they can use from early
            morning on each day.
          </li>
          <li>
            A gate or walkway for the toran and a drive long enough for the
            baraat.
          </li>
          <li>
            A covered mandap with written permission for the havan fire, plus
            sand, water and an extinguisher nearby.
          </li>
          <li>
            Separate covered space for the mehfil, so set-up for the wedding
            can continue on the main lawn.
          </li>
          <li>
            Music finish time, parking for both sides and a drop-off point for
            elders.
          </li>
          <li>
            A power plan that does not rely on diesel generators on GRAP days.
          </li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Marwari Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–12 weeks before:</strong> fix the date with the pandit;
            book the farmhouse for all function days and the overnight stay.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book caterer, décor, band and
            ghodi, photographer and mehndi artist; agree the menu per function.
          </li>
          <li>
            <strong>4 weeks before:</strong> send invitations; plan the
            mayra slot with the maternal family; book rooms for outstation
            guests.
          </li>
          <li>
            <strong>2 weeks before:</strong> byah haath and bhaat nyotna at
            home; confirm loudspeaker permission and the music cut-off.
          </li>
          <li>
            <strong>Wedding week:</strong> collect puja samagri, the toran
            and palla items; walk the site with the décor team and caterer.
          </li>
          <li>
            <strong>After:</strong> griha pravesh, mooh dikhai and pag phera at
            the groom&apos;s home, then register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses that allow a multi-day
          booking, outside Marwari caterers and a havan fire, and plan the
          schedule so the loud functions finish before 10 PM.
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
            Find a Farmhouse for Your Marwari Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your date, muhurat and guest count. Effortless Events can
            shortlist farmhouses across Delhi NCR with rooms for both families,
            space for every function and room for the baraat, and help plan the
            menu and décor.
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
