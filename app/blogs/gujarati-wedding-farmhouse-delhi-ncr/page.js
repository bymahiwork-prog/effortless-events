import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Gujarati Wedding at a Farmhouse in Delhi NCR: Dates & Cost",

  description:
    "Planning a Gujarati wedding at a farmhouse in Delhi NCR? 2027 lagna dates, rituals by day, a garba night under the 10 PM rule, menu and cost estimates.",

  keywords: [
    "Gujarati wedding at farmhouse Delhi NCR",
    "Gujarati wedding dates 2027",
    "Gujarati wedding rituals list",
    "Gujarati wedding venue Delhi",
    "garba night at wedding Delhi",
    "Gujarati wedding food menu",
    "Gujarati wedding cost Delhi",
  ],

  alternates: { canonical: "/blogs/gujarati-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Gujarati Wedding at a Farmhouse in Delhi NCR: Dates & Cost",
    description:
      "How to host a Gujarati wedding at a Delhi NCR farmhouse: 2027 lagna dates and the Kamurta gap, rituals mapped to venue days, a garba night that ends by 10 PM, a Gujarati menu and cost estimates by guest count.",
    images: ["/decoration-3.webp"],
  },
};

const faqs = [
  {
    q: "What are the rituals of a Gujarati wedding in order?",
    a: "Common pre-wedding rituals are chandlo matli, gol dhana (engagement), Ganesh sthapana and mandap mahurat, griha shanti, mehndi, the garba or sangeet night, pithi and mameru. The wedding day usually has the varghodo or jaan, ponkhvu, jaimala, madhuparka, antarpaat, kanyadaan, hasta milap, mangal fera, saptapadi and sindoor daan, followed by vidaai, griha pravesh and aeki beki.",
  },
  {
    q: "How many days is a Gujarati wedding?",
    a: "CulturalIndia describes a Gujarati wedding as two or three days of functions, though rituals such as chandlo matli and gol dhana happen earlier. At a farmhouse, most families book two or three days: mehndi and garba, then pithi and mameru, then the wedding.",
  },
  {
    q: "How many pheras are there in a Gujarati wedding?",
    a: "Gujarati weddings usually have four mangal fera around the fire, standing for dharma, artha, kama and moksha, followed by saptapadi, the seven steps and vows. WeddingWire and CulturalIndia describe four rounds. Confirm the sequence with your family pandit, since practice varies between communities.",
  },
  {
    q: "What is mameru in a Gujarati wedding?",
    a: "Mameru is the gift from the bride's maternal uncle (mama) and his family, usually given a day before the wedding. It typically includes the panetar saree, jewellery, the white or ivory chura, sweets and dry fruits, presented in decorated trays.",
  },
  {
    q: "What food is served at a Gujarati wedding?",
    a: "Gujarati wedding food is vegetarian. Dishes often mentioned include undhiyu, dal dhokli, sev tameta nu shaak, kadhi with pakoras, puri, shrikhand, mohanthal, lapsi, churma ladoo, and fafda with jalebi. Undhiyu is a winter favourite, which suits a December to February wedding.",
  },
  {
    q: "What are the Gujarati wedding dates in 2027?",
    a: "WedMeGood's 2027 Gujarati list gives 15, 18, 19, 20, 24, 26, 27, 30 and 31 January; 2, 3, 9, 10, 11, 14, 15, 21, 22, 25, 26 and 27 February; and 1, 2, 3, 4, 9, 10 and 14 March. It advises avoiding Holashtak, given as 15 to 22 March 2027. Your family pandit fixes the final muhurat.",
  },
  {
    q: "How much does a Gujarati wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 250-guest Gujarati wedding day at a Delhi NCR farmhouse often totals about ₹9–20 lakh for venue, vegetarian catering, mandap and décor, garba music, pandit, lighting and photography, before clothes and jewellery. Guest count, the date and the caterer change it most.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="gujarati-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-23"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-3.webp"
          width={736}
          height={840}
          fetchPriority="high"
          decoding="async"
          alt="Gujarati wedding at a farmhouse in Delhi NCR: a hall with white draped fabric, chandeliers, candlelit round tables and a lit stage set for the wedding dinner"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Gujarati Wedding at a Farmhouse in Delhi NCR: Dates, Rituals and Cost
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
          Planning a Gujarati wedding at a farmhouse in Delhi NCR? The lagna
          calendar is tight this winter: dates pause for Kamurta from mid
          December to mid January, then pick up again from 15 January 2027. A
          Gujarati wedding is also more than one evening. There is a garba
          night, pithi and mameru, then the wedding with four mangal fera. A
          farmhouse can host all of it in one place. This guide covers dates,
          rituals by day, a garba plan that works with Delhi&apos;s noise
          rules, the menu, cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Gujarati wedding in Delhi NCR, book a farmhouse for two or
            three days: mehndi and garba, pithi and mameru, then the wedding.
            2027 Gujarati lists start on 15 January, after Kamurta (about 16
            December to 14 January). Start garba early so amplified music ends
            by 10 PM, and budget roughly ₹9–20 lakh for 250 guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Gujarati Wedding at a Farmhouse: At a Glance
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
                  2–3 days at the venue; add an overnight stay if the pheras
                  run late or vidaai is next morning
                </td>
              </tr>
              <tr>
                <td className={td}>Functions at the farmhouse</td>
                <td className={td}>
                  Mehndi, garba or sangeet, pithi, mameru, jaan and ponkhvu,
                  mangal fera, reception dinner
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  Early December 2026 (check with your pandit), then 15 January
                  to mid-March 2027
                </td>
              </tr>
              <tr>
                <td className={td}>Food</td>
                <td className={td}>
                  Fully vegetarian Gujarati menu; many families also keep the
                  event alcohol-free
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  A large dance floor for garba, covered mandap with a safe fire
                  spot, rooms for both families, a kitchen
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹9–20 lakh for a 250-guest wedding day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Gujarati Wedding Dates for 2026–27?
        </h2>

        <p className="mb-8">
          The Gujarati wedding season this winter has two windows: a short one
          in early December 2026 and a longer one from mid-January to mid-March
          2027. In between, Gujarati families generally pause weddings for
          Dhanarak Kamurta, the month when the Sun is in Sagittarius. In its{" "}
          <a
            href="https://deshgujarat.com/2025/12/16/gujarati-hindu-wedding-season-to-take-over-1-5-month-long-break-as-dhanarak-kamurta-begins/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            December 2025 report
          </a>
          , DeshGujarat described this break as running from mid-December to
          Makar Sankranti on 14 January. The North Indian equivalent, Kharmas,
          is given by{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad as about 16 December to 14 January
          </a>
          .
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Month</th>
                <th className={th}>Listed dates</th>
                <th className={th}>Weekend dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>December 2026</td>
                <td className={td}>
                  General list: 2–6, 11, 12 Dec (not a Gujarati list)
                </td>
                <td className={td}>Sat 5, Sun 6, Sat 12 Dec</td>
              </tr>
              <tr>
                <td className={td}>January 2027</td>
                <td className={td}>15, 18, 19, 20, 24, 26, 27, 30, 31 Jan</td>
                <td className={td}>Sun 24, Sat 30, Sun 31 Jan</td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>
                  2, 3, 9, 10, 11, 14, 15, 21, 22, 25, 26, 27 Feb
                </td>
                <td className={td}>Sun 14, Sun 21, Sat 27 Feb</td>
              </tr>
              <tr>
                <td className={td}>March 2027</td>
                <td className={td}>1, 2, 3, 4, 9, 10, 14 Mar</td>
                <td className={td}>Sun 14 Mar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The 2027 dates come from{" "}
          <a
            href="https://www.wedmegood.com/blog/gujarati-wedding-dates-2027-shubh-muhurat-best-months-to-get-married/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WedMeGood&apos;s Gujarati wedding dates for 2027
          </a>
          , which also advises avoiding Holashtak (15–22 March 2027). We could
          not find a reliable Gujarati list for December 2026. The December
          dates above are the general North Indian list from{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            VedicFeed
          </a>
          , so check them with a Gujarati pandit. Gujarati muhurats follow the
          Vikram Samvat panchang and can differ from other lists.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Weekend dates go first.</strong> Only a few 2027 dates fall
            on a Saturday or Sunday, so popular farmhouses for Sat 30 January
            and Sat 27 February book early.
          </li>
          <li>
            <strong>Weekday muhurat, weekend party.</strong> If your date is a
            Tuesday or Wednesday, keep the pheras small and hold the garba
            night and reception at the farmhouse on the weekend before.
          </li>
          <li>
            <strong>NRI guests:</strong> the same DeshGujarat report notes a
            surge in NRI weddings in late December, when families travel home.
            In Delhi NCR this overlaps with Kamurta, so most families with
            overseas guests aim for mid-to-late January.
          </li>
        </ul>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Gujarati Wedding, Day by Day?
        </h2>

        <p className="mb-8">
          A Gujarati wedding moves from home rituals to venue functions to the
          wedding itself. The table below is based on the ritual guides from{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/gujarati-wedding--c1225"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire (updated September 2025)
          </a>
          ,{" "}
          <a
            href="https://www.culturalindia.net/weddings/regional-weddings/gujarati-wedding.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CulturalIndia
          </a>{" "}
          and{" "}
          <a
            href="https://www.azafashions.com/blog/gujarat-wedding-ceremonies-traditions-rituals-complete-guide-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Aza Fashions
          </a>
          , mapped to where each one usually happens.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Ritual</th>
                <th className={th}>What happens</th>
                <th className={th}>When and where</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Chandlo matli</td>
                <td className={td}>
                  The match is fixed with a tilak and token money between the
                  two fathers
                </td>
                <td className={td}>Weeks or months before, at home</td>
              </tr>
              <tr>
                <td className={td}>Gol dhana</td>
                <td className={td}>
                  Engagement: jaggery and coriander seeds, rings and blessings
                </td>
                <td className={td}>Before the wedding; home or a small venue</td>
              </tr>
              <tr>
                <td className={td}>Ganesh sthapana, mandap mahurat, griha shanti</td>
                <td className={td}>
                  Ganesh puja, blessing of the mandap site and a puja for the
                  planets
                </td>
                <td className={td}>
                  A few days before; mandap mahurat can be done at the
                  farmhouse
                </td>
              </tr>
              <tr>
                <td className={td}>Mehndi</td>
                <td className={td}>Henna for the bride, with songs</td>
                <td className={td}>About two days before; farmhouse day 1</td>
              </tr>
              <tr>
                <td className={td}>Garba / sangeet (sanji)</td>
                <td className={td}>
                  Families dance garba and dandiya raas and sing wedding songs
                </td>
                <td className={td}>
                  One or two evenings before; farmhouse day 1 evening
                </td>
              </tr>
              <tr>
                <td className={td}>Pithi</td>
                <td className={td}>
                  Turmeric and sandalwood paste applied to bride and groom,
                  separately
                </td>
                <td className={td}>Day before; farmhouse day 2 morning</td>
              </tr>
              <tr>
                <td className={td}>Mameru</td>
                <td className={td}>
                  The bride&apos;s mama brings the panetar saree, chura,
                  jewellery and sweets
                </td>
                <td className={td}>Day before; farmhouse day 2</td>
              </tr>
              <tr>
                <td className={td}>Varghodo / jaan, ponkhvu</td>
                <td className={td}>
                  The groom&apos;s procession arrives; the bride&apos;s mother
                  welcomes him with aarti and the playful nose tug
                </td>
                <td className={td}>Wedding day, at the farmhouse gate</td>
              </tr>
              <tr>
                <td className={td}>Jaimala, madhuparka, antarpaat</td>
                <td className={td}>
                  Garlands, the groom&apos;s feet washed and panchamrut
                  offered, a cloth held between the couple
                </td>
                <td className={td}>Wedding day, at the mandap</td>
              </tr>
              <tr>
                <td className={td}>Kanyadaan, hasta milap</td>
                <td className={td}>
                  The bride&apos;s father gives her hand; the couple&apos;s
                  hands or garments are tied
                </td>
                <td className={td}>Wedding day, at the mandap</td>
              </tr>
              <tr>
                <td className={td}>Mangal fera, saptapadi</td>
                <td className={td}>
                  Four rounds of the fire, then seven steps and vows
                </td>
                <td className={td}>At the muhurat time</td>
              </tr>
              <tr>
                <td className={td}>Sindoor daan, mangalsutra, kansar</td>
                <td className={td}>
                  Sindoor and mangalsutra; the couple feed each other sweets
                </td>
                <td className={td}>Straight after the pheras</td>
              </tr>
              <tr>
                <td className={td}>Vidaai, griha pravesh, aeki beki</td>
                <td className={td}>
                  Farewell, the bride&apos;s welcome home and the ring-finding
                  game
                </td>
                <td className={td}>After the wedding; groom&apos;s home</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The sources differ on some details. Aza&apos;s main text calls the
          fire rounds &ldquo;saat phere&rdquo;, but its own FAQ and the other
          two guides describe four mangal fera. Sources also differ on who
          visits whom for gol dhana, and on whether the sangeet is one or two
          nights before. Follow your family&apos;s custom and confirm the
          order with your pandit.
        </p>

        {/* =====================================================
            WHY A FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Choose a Farmhouse for a Gujarati Wedding?
        </h2>

        <p className="mb-8">
          A farmhouse fits a Gujarati wedding because it combines a big dance
          floor, a mandap with a safe fire, and rooms for the family in one
          place. You also get time across two or three days. A banquet hall
          usually rents one evening slot with an in-house kitchen.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Space for garba circles:</strong> garba needs a large open
            floor where several rings can turn at once. A lawn with a flat
            wooden or carpeted floor works better than a banquet floor packed
            with tables.
          </li>
          <li>
            <strong>Your own Gujarati caterer:</strong> many farmhouses allow
            outside caterers, so you can bring a cook who knows undhiyu and
            farsan, not a general North Indian buffet.
          </li>
          <li>
            <strong>Daylight lawn for pithi and mameru:</strong> the morning
            rituals photograph best in winter sun on an open lawn.
          </li>
          <li>
            <strong>Rooms for both families:</strong> useful for changing
            between functions and for elders who should not drive home late
            in winter fog.
          </li>
        </ul>

        <p className="mb-8">
          If your family is still deciding between a full wedding and a
          smaller ceremony, our guide to an{" "}
          <Link
            href="/blogs/intimate-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            intimate farmhouse wedding in Delhi NCR
          </Link>{" "}
          covers formats for 50–150 guests.
        </p>

        {/* =====================================================
            GARBA NIGHT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Do You Plan a Garba Night at a Delhi NCR Farmhouse?
        </h2>

        <p className="mb-8">
          Start the garba night early, around 6:30 to 7 PM, so amplified music
          can end by 10 PM. Garba nights often run late, but loudspeakers in
          Delhi need prior police permission and must stop by 10 PM, according
          to{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            India TV&apos;s April 2025 report on Delhi Police rules
          </a>
          , with fines for violations. Farmhouses in Gurgaon, Faridabad and
          Noida follow the same 10 PM limit under national noise rules.
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-8">
          <li>
            <strong>6:30 PM:</strong> guests arrive; welcome drinks and light
            farsan such as dhokla, khandvi and fafda.
          </li>
          <li>
            <strong>7:00 PM:</strong> Ganesh aarti or a short opening song,
            then the first slow garba rounds for elders.
          </li>
          <li>
            <strong>7:30–9:00 PM:</strong> faster garba and dandiya raas with
            a live singer and dhol, or a DJ with a garba playlist.
          </li>
          <li>
            <strong>9:00 PM:</strong> dinner opens. Short performances by
            family members while guests eat.
          </li>
          <li>
            <strong>9:30–10:00 PM:</strong> final garba round. Amplified music
            ends at 10 PM.
          </li>
          <li>
            <strong>After 10 PM:</strong> quiet antakshari or unplugged songs
            indoors, if the venue allows.
          </li>
        </ol>

        <p className="mb-8">
          Ask the décor team for a raised or carpeted floor so dancers do not
          slip on dewy grass, warm lighting around the circle and patio
          heaters at the edges, not in the dance area. Keep dandiya sticks in
          baskets at the entrance. For more ideas on music, stage and running
          order, see our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className={linkClass}
          >
            sangeet night farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            MENU
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food Is Served at a Gujarati Wedding?
        </h2>

        <p className="mb-8">
          A Gujarati wedding menu is fully vegetarian, with farsan, sweet and
          sour dishes, and plenty of desserts. Dishes named in{" "}
          <a
            href="https://www.azafashions.com/blog/gujarat-wedding-ceremonies-traditions-rituals-complete-guide-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Aza&apos;s Gujarati wedding guide
          </a>{" "}
          include undhiyu, dal dhokli, sev tameta nu shaak, kadhi with
          pakoras, puri and bhakri, shrikhand, mohanthal, lapsi, churma ladoo,
          and fafda with jalebi. Undhiyu is made with winter vegetables, so a
          December to February wedding is the right season for it.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Function</th>
                <th className={th}>Menu idea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Mehndi lunch</td>
                <td className={td}>
                  Dhokla, khandvi, thepla, chaat, chaas, simple sweets
                </td>
              </tr>
              <tr>
                <td className={td}>Garba night</td>
                <td className={td}>
                  Live fafda-jalebi, pav bhaji, dabeli, hot soup, masala chai
                </td>
              </tr>
              <tr>
                <td className={td}>Pithi and mameru</td>
                <td className={td}>
                  Light Gujarati lunch: dal-bhaat, kadhi, rotli, shaak
                </td>
              </tr>
              <tr>
                <td className={td}>Wedding dinner</td>
                <td className={td}>
                  Undhiyu, puri, dal dhokli, kadhi, rice, shrikhand, mohanthal,
                  plus a North Indian counter for Delhi guests
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Some families want a separate counter for elders who avoid onion,
          garlic or root vegetables. Our{" "}
          <Link
            href="/blogs/jain-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Jain wedding farmhouse guide
          </Link>{" "}
          has a short list of food rules to give the caterer for that counter.
          Many Gujarati families keep the wedding alcohol-free. If you plan a
          separate cocktail evening at a Delhi farmhouse, it needs its own
          liquor licence.
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Gujarati Wedding at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          As a rough planning estimate for late 2026, a 250-guest Gujarati
          wedding day at a Delhi NCR farmhouse costs about ₹9–20 lakh, before
          clothes, jewellery and the mameru. The figures below are our
          estimates from typical Delhi NCR vendor ranges, not quotes. Prices
          depend on the area, the date, the guest count and the vendors you
          choose.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item</th>
                <th className={th}>Typical range (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse rent, wedding day</td>
                <td className={td}>₹2–6 lakh, by area, date and size</td>
              </tr>
              <tr>
                <td className={td}>Extra function day (mehndi and garba)</td>
                <td className={td}>₹1–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Vegetarian Gujarati catering</td>
                <td className={td}>₹1,000–₹2,500 per plate</td>
              </tr>
              <tr>
                <td className={td}>Mandap and décor</td>
                <td className={td}>₹2–5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Garba singer and dhol, or DJ and sound</td>
                <td className={td}>₹50,000–₹2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Pandit and puja samagri</td>
                <td className={td}>₹15,000–₹50,000</td>
              </tr>
              <tr>
                <td className={td}>Lighting, heaters and power backup</td>
                <td className={td}>₹50,000–₹1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Mehndi artist</td>
                <td className={td}>₹15,000–₹60,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Guest count</th>
                <th className={th}>Wedding day (estimate)</th>
                <th className={th}>Mehndi and garba day (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100 guests</td>
                <td className={td}>₹5–10 lakh</td>
                <td className={td}>₹2–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>250 guests</td>
                <td className={td}>₹9–20 lakh</td>
                <td className={td}>₹4–8 lakh</td>
              </tr>
              <tr>
                <td className={td}>400 guests</td>
                <td className={td}>₹14–30 lakh</td>
                <td className={td}>₹5–12 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          A dry, vegetarian menu usually keeps the per-head cost lower than a
          wedding with a full bar. For a detailed breakdown of venue, catering
          and décor costs, see our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide for Delhi NCR
          </Link>
          .
        </p>

        {/* =====================================================
            SAMPLE PLAN
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Does a Three-Day Gujarati Wedding at a Farmhouse Look Like?
        </h2>

        <p className="mb-8">
          Here is a sample plan for a Saturday 30 January 2027 wedding. Your
          pandit&apos;s muhurat may move the pheras earlier or later.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Day</th>
                <th className={th}>Morning / afternoon</th>
                <th className={th}>Evening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Thu 28 Jan</td>
                <td className={td}>
                  Mandap mahurat and griha shanti; mehndi from 1 PM
                </td>
                <td className={td}>Garba night, 6:30–10 PM</td>
              </tr>
              <tr>
                <td className={td}>Fri 29 Jan</td>
                <td className={td}>
                  Pithi for the bride (the groom&apos;s at his home), then
                  mameru and lunch
                </td>
                <td className={td}>Quiet family dinner; rest</td>
              </tr>
              <tr>
                <td className={td}>Sat 30 Jan</td>
                <td className={td}>Bride gets ready; mandap décor finishes</td>
                <td className={td}>
                  Jaan and ponkhvu, jaimala, mangal fera at the muhurat,
                  dinner, vidaai
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If the groom arrives with a band, keep the procession inside the
          farmhouse grounds and end loud music by 10 PM. Our{" "}
          <Link
            href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            baraat at a farmhouse wedding guide
          </Link>{" "}
          covers routes, timing and band costs.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Rules Apply to a Farmhouse Wedding in Delhi NCR This Winter?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Music by 10 PM:</strong> plan garba and the jaan so the
            amplified part ends on time, and get loudspeaker permission in
            advance.
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
            <strong>GRAP days:</strong> on high-pollution days, diesel
            generators and open coal tandoors can be restricted. Ask the
            farmhouse for grid power or an approved backup. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={linkClass}
            >
              GRAP rules guide
            </Link>{" "}
            explains each stage.
          </li>
          <li>
            <strong>Havan fire:</strong> keep the mandap fire small, with sand,
            water and an extinguisher nearby, and away from fabric drapes.
          </li>
        </ul>

        {/* =====================================================
            VENUE CHECKS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should You Check Before Booking a Farmhouse?
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
            Booking covers every function day, with check-in, check-out and
            any overnight stay in writing.
          </li>
          <li>
            Floor space for garba: a flat area large enough for several rings,
            separate from the dinner tables.
          </li>
          <li>
            Outside caterer allowed, with a kitchen they can use from early
            morning.
          </li>
          <li>
            A covered mandap with written permission for the havan fire.
          </li>
          <li>
            Rooms with heaters for the bride&apos;s family and elders, close
            to the mandap.
          </li>
          <li>
            A gate or walkway for the jaan and ponkhvu, and parking for both
            sides.
          </li>
          <li>
            Music finish time and who applies for loudspeaker permission.
          </li>
          <li>A power plan that does not rely on diesel generators.</li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Gujarati Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–10 weeks before:</strong> fix the muhurat with your
            pandit; book the farmhouse for all function days.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the Gujarati caterer,
            décor, garba singer or DJ, photographer and mehndi artist.
          </li>
          <li>
            <strong>4 weeks before:</strong> send invitations; plan the mameru
            with the bride&apos;s maternal family; book rooms for outstation
            guests.
          </li>
          <li>
            <strong>2 weeks before:</strong> confirm the menu for each
            function, loudspeaker permission and the music cut-off.
          </li>
          <li>
            <strong>Wedding week:</strong> collect puja samagri, dandiya
            sticks and the panetar; walk the site with the décor team and
            caterer.
          </li>
          <li>
            <strong>After:</strong> griha pravesh and aeki beki at home, then
            register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses with room for garba,
          outside Gujarati caterers and a havan fire, and plan the schedule so
          the loud functions finish before 10 PM.
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
            Find a Farmhouse for Your Gujarati Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count and functions. Effortless Events
            can shortlist farmhouses across Delhi NCR with space for garba,
            rooms for both families and a kitchen for your caterer, and help
            plan the menu and décor.
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
