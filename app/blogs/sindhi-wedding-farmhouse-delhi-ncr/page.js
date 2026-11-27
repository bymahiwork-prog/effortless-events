import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Sindhi Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",

  description:
    "Planning a Sindhi wedding at a farmhouse in Delhi NCR? Rituals from misri to datar by day, 2026–27 dates, how many days to book, a 3-day plan and costs.",

  keywords: [
    "Sindhi wedding at farmhouse Delhi NCR",
    "Sindhi wedding rituals list in order",
    "how many days is a Sindhi wedding",
    "Sindhi wedding pheras",
    "Sindhi wedding food menu",
    "Sindhi wedding cost Delhi",
    "Sindhi wedding venue Delhi",
  ],

  alternates: { canonical: "/blogs/sindhi-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Sindhi Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",
    description:
      "How to host a Sindhi wedding at a Delhi NCR farmhouse: rituals from kachchi misri to datar mapped to venue days, 2026–27 dates and the Kharmas gap, how long to book, a 3-day plan, menu and cost estimates by guest count.",
    images: ["/decoration-5.webp"],
  },
};

const faqs = [
  {
    q: "What are the rituals of a Sindhi wedding in order?",
    a: "A common order is kachchi misri and pakki misri (engagement), berana satsang, dev bithana, mehendi and lada (the Sindhi sangeet), saanth, and on the wedding day garo dhago, the baraat, swagat, pao dhulai, jaimala, palli pallo, hathiyalo, kanyadaan and pheras. After the wedding come vidaai, datar, chhanar, satauro and gadjani. Families vary the order.",
  },
  {
    q: "How many days is a Sindhi wedding?",
    a: "The engagement (pakki misri) is often about a week before, and the main functions usually run over two to three days: lada and mehendi, then saanth and the pre-wedding pujas, then the wedding. Post-wedding rituals such as chhanar and satauro follow over the next days. At a farmhouse, most families book two or three days.",
  },
  {
    q: "How many pheras do Sindhis take?",
    a: "WeddingWire and CulturalIndia describe four pheras in a Sindhi wedding, with the bride leading three and the groom the last, followed by saptapadi, the seven steps. WeddingSutra also describes four rounds but reverses who leads. Ask your family priest which form your family follows.",
  },
  {
    q: "What is the saanth ceremony in a Sindhi wedding?",
    a: "In saanth, married women apply oil and turmeric to the bride and groom at their homes before the wedding. On the groom's side, relatives tear his old clothes or shirt as a fun send-off from bachelor life. Sources differ on whether it happens the night before or on the wedding morning.",
  },
  {
    q: "What food is served at a Sindhi wedding?",
    a: "Many Sindhi families ask for home-style dishes such as sai bhaji, Sindhi kadhi, dal pakwan, koki and aloo tuk alongside a regular wedding spread. Menus range from fully vegetarian to non-vegetarian with Sindhi biryani or mutton, so agree this with both families before choosing a caterer.",
  },
  {
    q: "What are the Sindhi wedding dates in 2026–27?",
    a: "Using VedicFeed's New Delhi lists, December 2026 has 2–6, 11 and 12 December, and January 2027 has 15, 18, 19, 20, 24, 26, 27, 30 and 31 January. WedMeGood's popular February 2027 picks are 2, 10, 11, 12, 14, 20 and 27 February. Many families pause for Kharmas, about 16 December to 14 January. Your priest fixes the muhurat.",
  },
  {
    q: "How much does a Sindhi wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 250-guest Sindhi wedding day at a Delhi NCR farmhouse often totals about ₹9–22 lakh for venue and food, décor, music, baraat, photography and lighting, before clothes and jewellery. A three-day booking with lada and mehendi adds roughly ₹4–9 lakh.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="sindhi-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-27"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-5.webp"
          width={736}
          height={1313}
          fetchPriority="high"
          decoding="async"
          alt="Sindhi wedding at a farmhouse in Delhi NCR: a stage backdrop of fairy-light curtains, cream drapes and pastel flower arches set up for the lada and sangeet night"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Sindhi Wedding at a Farmhouse in Delhi NCR: Rituals, Dates and Cost
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
          Planning a Sindhi wedding at a farmhouse in Delhi NCR? A Sindhi
          wedding is a string of family rituals rather than one night: misri
          (the engagement), a satsang to Jhulelal, the lada music night,
          mehendi and saanth, then the baraat, palli pallo and four pheras,
          and the datar welcome afterwards. A farmhouse lets you keep most of
          this in one place, with rooms for both families, a lawn for the
          lada and a covered mandap. This guide maps every ritual to a
          farmhouse slot and covers 2026–27 dates, how many days to book, a
          sample plan, the menu, cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Sindhi wedding in Delhi NCR, book a farmhouse for two to
            three days: satsang and mehendi first, lada (the Sindhi sangeet)
            and saanth next, then the baraat, palli pallo and pheras. The
            dates this season are 2–12 December 2026 and mid-January to
            February 2027, with a Kharmas pause in between. Budget roughly
            ₹9–22 lakh for 250 guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sindhi Wedding at a Farmhouse: At a Glance
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
                  1 day (wedding only) to 3 days (satsang and mehendi, lada
                  and saanth, then the wedding)
                </td>
              </tr>
              <tr>
                <td className={td}>Functions at the farmhouse</td>
                <td className={td}>
                  Berana satsang, mehendi, lada, saanth, garo dhago, baraat,
                  swagat, palli pallo, hathiyalo, pheras, vidaai
                </td>
              </tr>
              <tr>
                <td className={td}>Usually at home</td>
                <td className={td}>
                  Kachchi misri, dev bithana, ghari puja, datar, chhanar,
                  satauro
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  2–12 December 2026, then 15 January to February 2027
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  Lawn and stage for the lada, covered mandap with a safe
                  fire spot, a puja room, heated rooms for both families
                </td>
              </tr>
              <tr>
                <td className={td}>Biggest rule to plan around</td>
                <td className={td}>
                  Amplified music by 10 PM, so the lada and baraat start early
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹9–22 lakh for a 250-guest wedding day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Sindhi Wedding Dates for 2026–27?
        </h2>

        <p className="mb-8">
          Sindhi Hindu families in Delhi NCR generally pick from the same
          muhurat calendar as other Hindu weddings, so this winter has two
          windows: a short one in early December 2026 and a longer one from
          mid-January into February 2027. Between them is Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad gives as about 16 December to 14 January
          </a>
          , when many families avoid weddings.{" "}
          <a
            href="https://culturalindia.net/weddings/regional-weddings/sindhi-wedding.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CulturalIndia
          </a>{" "}
          notes that some Sindhi families also favour particular days of the
          lunar month, so your family priest has the final say.
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
                <td className={td}>2, 3, 4, 5, 6, 11, 12 Dec</td>
                <td className={td}>Sat 5, Sun 6, Sat 12 Dec</td>
              </tr>
              <tr>
                <td className={td}>January 2027</td>
                <td className={td}>15, 18, 19, 20, 24, 26, 27, 30, 31 Jan</td>
                <td className={td}>Sun 24, Sat 30, Sun 31 Jan</td>
              </tr>
              <tr>
                <td className={td}>February 2027</td>
                <td className={td}>2, 10, 11, 12, 14, 20, 27 Feb</td>
                <td className={td}>Sun 14, Sat 20, Sat 27 Feb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          December and January dates are from VedicFeed&apos;s New Delhi lists
          for{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            December 2026
          </a>{" "}
          and{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            January 2027
          </a>
          . February dates are the &quot;most popular&quot; picks in{" "}
          <a
            href="https://www.wedmegood.com/blog/best-hindu-wedding-dates-in-2027-auspicious-marriage-dates-for-your-big-day/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WedMeGood&apos;s 2027 Hindu wedding dates (March 2026)
          </a>
          , a selection rather than a full list. Panchangs differ, so confirm
          the date and muhurat time before you pay a farmhouse advance.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>December is nearly full.</strong> Sat 5 and Sat 12
            December are around two weeks away, so most well-known farmhouses
            are already held. Sat 30 January and Sat 20 and 27 February are
            the next big weekends to lock in now.
          </li>
          <li>
            <strong>Weekday muhurat, weekend lada.</strong> If your date is
            midweek, keep the pheras small and move the lada and reception to
            the farmhouse on the weekend.
          </li>
          <li>
            <strong>Late baraats are common.</strong>{" "}
            <a
              href="https://weddingsutra.com/planning/wedding-tradition-series-experience-the-colorful-grandeur-of-sindhi-weddings"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              WeddingSutra
            </a>{" "}
            notes that Sindhi baraats often run late. At a farmhouse
            with a 10 PM music cut-off, build that delay into the plan rather
            than hoping it will not happen.
          </li>
        </ul>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Sindhi Wedding, in Order?
        </h2>

        <p className="mb-8">
          A Sindhi wedding moves from family meetings and prayers, to music
          and turmeric rituals, to the wedding night and a series of
          welcomes afterwards. The order below draws on{" "}
          <a
            href="https://weddingsutra.com/planning/wedding-tradition-series-experience-the-colorful-grandeur-of-sindhi-weddings"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingSutra&apos;s Sindhi traditions guide
          </a>
          ,{" "}
          <a
            href="https://www.weddingwire.in/wedding-tips/sindhi-marriage--c1933"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire India (December 2020)
          </a>{" "}
          and{" "}
          <a
            href="https://culturalindia.net/weddings/regional-weddings/sindhi-wedding.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CulturalIndia
          </a>
          . The three sources disagree on some timings, so treat this as a
          planning map, not a rulebook.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Ritual</th>
                <th className={th}>What happens</th>
                <th className={th}>Farmhouse slot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Kachchi misri</td>
                <td className={td}>
                  Families meet once the match is fixed; gifts of misri,
                  coconut, sweets and clothes
                </td>
                <td className={td}>Weeks or months earlier, at home</td>
              </tr>
              <tr>
                <td className={td}>Pakki misri</td>
                <td className={td}>
                  Formal engagement with a priest&apos;s prayer and rings
                </td>
                <td className={td}>About a week before; home or a small venue</td>
              </tr>
              <tr>
                <td className={td}>Berana satsang</td>
                <td className={td}>
                  Family prayer to Jhulelal with devotional songs
                </td>
                <td className={td}>Day 1 afternoon</td>
              </tr>
              <tr>
                <td className={td}>Dev bithana</td>
                <td className={td}>
                  A stone grinder is installed and worshipped as the family
                  deity
                </td>
                <td className={td}>
                  At home, from a few days before (sources differ)
                </td>
              </tr>
              <tr>
                <td className={td}>Mehendi</td>
                <td className={td}>Henna for the bride, with women singing</td>
                <td className={td}>Day 1, or the day before the wedding</td>
              </tr>
              <tr>
                <td className={td}>Lada (Sindhi sangeet)</td>
                <td className={td}>
                  Folk songs, dancing and performances; often hosted by the
                  groom&apos;s side
                </td>
                <td className={td}>Day 1 or 2 evening</td>
              </tr>
              <tr>
                <td className={td}>Saanth</td>
                <td className={td}>
                  Married women apply oil and turmeric; the groom&apos;s old
                  shirt is torn for fun
                </td>
                <td className={td}>Day 2 morning, or wedding morning</td>
              </tr>
              <tr>
                <td className={td}>Navgrahi and ghari puja</td>
                <td className={td}>
                  Prayer to the nine planets; married women grind wheat at
                  both homes
                </td>
                <td className={td}>Night before or wedding morning</td>
              </tr>
              <tr>
                <td className={td}>Garo dhago</td>
                <td className={td}>
                  A red thread is tied on the couple&apos;s wrists with
                  ancestral blessings
                </td>
                <td className={td}>Wedding morning</td>
              </tr>
              <tr>
                <td className={td}>Baraat and swagat</td>
                <td className={td}>
                  Procession arrives; the bride&apos;s mother does aarti and
                  tilak; rose water and sugar for guests
                </td>
                <td className={td}>Wedding evening at the gate</td>
              </tr>
              <tr>
                <td className={td}>Pao dhulai and jaimala</td>
                <td className={td}>
                  The bride&apos;s parents wash the groom&apos;s feet; garlands
                  exchanged three times
                </td>
                <td className={td}>After the swagat</td>
              </tr>
              <tr>
                <td className={td}>Palli pallo and hathiyalo</td>
                <td className={td}>
                  Dupattas knotted with rice; right hands tied with a red
                  cloth
                </td>
                <td className={td}>In the mandap</td>
              </tr>
              <tr>
                <td className={td}>Kanyadaan, pheras, saptapadi</td>
                <td className={td}>
                  Four rounds of the fire, then seven steps over rice
                </td>
                <td className={td}>At the muhurat</td>
              </tr>
              <tr>
                <td className={td}>Vidaai</td>
                <td className={td}>The bride leaves with her father&apos;s gifts</td>
                <td className={td}>Late night or next morning</td>
              </tr>
              <tr>
                <td className={td}>Datar, chhanar, satauro, gadjani</td>
                <td className={td}>
                  Welcome at the groom&apos;s home, salt exchange, the deity is
                  removed, visit to the bride&apos;s parents, then a reception
                </td>
                <td className={td}>
                  Groom&apos;s home; the gadjani reception can be a farmhouse
                  party
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Where the sources disagree
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Mehendi:</strong> WeddingSutra puts it two to three days
            before the wedding; WeddingWire and CulturalIndia say the day
            before.
          </li>
          <li>
            <strong>Saagri:</strong> WeddingSutra uses the name for the henna
            ritual, while WeddingWire and CulturalIndia use it for the formal
            introduction of the bride to the groom&apos;s relatives.
          </li>
          <li>
            <strong>Who leads the pheras:</strong> WeddingWire and
            CulturalIndia say the bride leads the first three rounds;
            WeddingSutra says the groom does.
          </li>
        </ul>

        <p className="mb-8">
          Some Sindhi Hindu families also revere Guru Nanak, a tradition{" "}
          <a
            href="https://en.wikipedia.org/wiki/Nanakpanthi"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia describes as Nanakpanthi
          </a>
          . If your family wants a path or kirtan as part of the wedding,
          settle with your priest or gurdwara where it will be held; our{" "}
          <Link
            href="/blogs/sikh-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Sikh wedding at a farmhouse guide
          </Link>{" "}
          explains why Anand Karaj ceremonies are now kept in gurdwaras.
        </p>

        {/* =====================================================
            HOW MANY DAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Days Should You Book the Farmhouse?
        </h2>

        <p className="mb-8">
          Most Sindhi weddings in Delhi NCR book a farmhouse for one to three
          days. The misri functions are separate events, and rituals built
          around the home deity, such as dev bithana and ghari puja, usually
          stay at home. Pick the format by how many functions you want under
          one roof:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Format</th>
                <th className={th}>What happens at the farmhouse</th>
                <th className={th}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Wedding night only</td>
                <td className={td}>
                  Baraat, swagat, jaimala, dinner, palli pallo and pheras
                </td>
                <td className={td}>Tighter budgets, mostly local guests</td>
              </tr>
              <tr>
                <td className={td}>Two days</td>
                <td className={td}>
                  Day 1: satsang, mehendi, lada. Day 2: saanth, garo dhago,
                  wedding
                </td>
                <td className={td}>Most families; one venue, one décor team</td>
              </tr>
              <tr>
                <td className={td}>Three days + overnight</td>
                <td className={td}>
                  Satsang and mehendi, then lada, then the wedding, with rooms
                  and a morning vidaai
                </td>
                <td className={td}>
                  Families with relatives flying in from Mumbai, Gujarat,
                  Rajasthan or abroad
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample three-day plan for Sat 20 February 2027
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Thu, 12–3 PM:</strong> berana satsang with Jhulelal
            bhajans and prasad, then a vegetarian lunch.
          </li>
          <li>
            <strong>Thu, 3–7 PM:</strong> mehendi on the lawn in the sun, with
            chaat counters and dholak songs.
          </li>
          <li>
            <strong>Fri, 10 AM–12 PM:</strong> saanth for the bride at her
            rooms and for the groom at his, with the shirt-tearing kept to the
            groom&apos;s side lawn.
          </li>
          <li>
            <strong>Fri, 6:30–9:45 PM:</strong> lada night with folk songs,
            family performances and a DJ; amplified music off by 10 PM.
          </li>
          <li>
            <strong>Sat, 10 AM:</strong> navgrahi puja and garo dhago, then a
            light brunch for close family.
          </li>
          <li>
            <strong>Sat, 6:30–8 PM:</strong> baraat on the farmhouse drive,
            swagat and pao dhulai at the gate, then jaimala.
          </li>
          <li>
            <strong>Sat, 8–10 PM:</strong> dinner and dancing; the floor
            closes by 10 PM.
          </li>
          <li>
            <strong>Sat, at the muhurat:</strong> palli pallo, hathiyalo,
            kanyadaan and pheras in a covered, heated mandap.
          </li>
          <li>
            <strong>Sun morning:</strong> vidaai, then datar at the
            groom&apos;s home.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Sindhi Wedding at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          As a rough late-2026 planning estimate, a 250-guest Sindhi wedding
          day at a Delhi NCR farmhouse often totals about ₹9–22 lakh. The bar
          and whether the menu includes non-vegetarian dishes move the total
          most. The figures below are our estimates, not quotes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item (wedding day, 250 guests)</th>
                <th className={th}>Estimated cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Venue and catering (about ₹1,400–₹2,800 per plate)</td>
                <td className={td}>₹3.5–7 lakh</td>
              </tr>
              <tr>
                <td className={td}>Décor, mandap, stage and entrance</td>
                <td className={td}>₹2–5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Bar, if served (permit, liquor, bartenders)</td>
                <td className={td}>₹0–3.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>DJ, sound, dance floor and dholak</td>
                <td className={td}>₹0.6–1.6 lakh</td>
              </tr>
              <tr>
                <td className={td}>Baraat band, ghodi or car and lights</td>
                <td className={td}>₹0.4–1.2 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Lighting, heaters and power backup</td>
                <td className={td}>₹0.5–1.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Priest, puja items, mehendi artist and sundries</td>
                <td className={td}>₹0.3–1 lakh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className={td}>
                  <strong>Total (estimate)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹9–22 lakh</strong>
                </td>
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
                <th className={th}>Add lada and mehendi days (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>150</td>
                <td className={td}>₹5.5–14 lakh</td>
                <td className={td}>+₹2.5–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>250</td>
                <td className={td}>₹9–22 lakh</td>
                <td className={td}>+₹4–9 lakh</td>
              </tr>
              <tr>
                <td className={td}>400</td>
                <td className={td}>₹14–32 lakh</td>
                <td className={td}>+₹6–13 lakh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          The per-plate band is in line with listing-site rates in our{" "}
          <Link
            href="/blogs/farmhouse-wedding-cost-delhi-ncr"
            className={linkClass}
          >
            farmhouse wedding cost guide
          </Link>
          . If you serve alcohol at a Delhi farmhouse, a{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Delhi Excise notice dated 22 October 2026
          </a>{" "}
          sets the P-10 permit at ₹15,000 per event; Gurgaon and Noida
          farmhouses follow Haryana and Uttar Pradesh rules. Not included
          above: outfits, jewellery, misri gifts, shagun, and rooms for
          outstation guests.
        </p>

        {/* =====================================================
            FOOD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food Is Served at a Sindhi Wedding?
        </h2>

        <p className="mb-8">
          A Sindhi wedding menu usually mixes a regular North Indian wedding
          spread with a few home-style Sindhi dishes that elders will look
          for. Most Delhi NCR caterers do not have a Sindhi specialist, so
          ask for a tasting of the Sindhi dishes, or let a family cook or
          home caterer supply one counter if the farmhouse allows outside
          food. Plan it by function:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Satsang lunch:</strong> a simple vegetarian meal with
            prasad, often sai bhaji (a spinach and dal dish) with rice, and
            Sindhi kadhi.
          </li>
          <li>
            <strong>Mehendi afternoon:</strong> dal pakwan, chaat, and koki
            (a spiced flatbread) that guests can eat with henna on.
          </li>
          <li>
            <strong>Lada dinner:</strong> live counters, aloo tuk as a
            starter, and a dessert station.
          </li>
          <li>
            <strong>Wedding dinner:</strong> a fuller spread; families that
            eat non-vegetarian food often add Sindhi biryani or a mutton
            dish, which{" "}
            <a
              href="https://www.manyavar.com/en-in/blog-sindhi-wedding-rituals-joyful-celebration-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Manyavar&apos;s Sindhi wedding guide (April 2025)
            </a>{" "}
            mentions alongside dal pakwan.
          </li>
          <li>
            <strong>Bar:</strong> decide early whether there is one and on
            which nights. Our{" "}
            <Link
              href="/blogs/how-much-alcohol-for-party-delhi-ncr"
              className={linkClass}
            >
              alcohol-per-guest guide
            </Link>{" "}
            helps you size it; keep the satsang day dry.
          </li>
        </ul>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Which Rules Apply to a Farmhouse Wedding in Delhi NCR This Winter?
        </h2>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Music by 10 PM:</strong>{" "}
            <a
              href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              India TV&apos;s April 2025 report on Delhi Police rules
            </a>{" "}
            says loudspeakers need prior permission and outdoor use is not
            allowed between 10 PM and 6 AM. Start the lada and baraat early.
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
            , so plan the baraat entry without them. Our{" "}
            <Link
              href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr"
              className={linkClass}
            >
              baraat at a farmhouse guide
            </Link>{" "}
            has route and band ideas.
          </li>
          <li>
            <strong>GRAP days:</strong> diesel generators and open coal
            tandoors can be restricted at higher stages. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={linkClass}
            >
              GRAP rules guide
            </Link>{" "}
            explains each stage.
          </li>
          <li>
            <strong>Fire safety:</strong> keep the havan fire and diyas away
            from drapes, with sand, water and an extinguisher nearby.
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
            A quiet indoor room for the berana satsang, with space for the
            Jhulelal image, a diya and family seated on the floor.
          </li>
          <li>
            A lawn stage for the lada plus a covered or indoor backup for a
            foggy or cold night.
          </li>
          <li>A covered mandap with written permission for the havan fire.</li>
          <li>
            A driveway long enough for the baraat and swagat, so neither has
            to use a public road.
          </li>
          <li>
            Whether outside caterers or a home cook can serve the Sindhi
            dishes, and whether there is a separate veg kitchen.
          </li>
          <li>
            Rooms with heaters for both families, close to the mandap, for
            saanth and getting ready.
          </li>
          <li>
            Music finish time, who applies for loudspeaker permission, and any
            overtime charge.
          </li>
          <li>A power plan that does not rely on diesel generators.</li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Sindhi Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–10 weeks before:</strong> fix the muhurat with your
            priest; book the farmhouse for all function days.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the caterer (with a Sindhi
            dish tasting), décor, DJ, band, photographer and mehendi artist.
          </li>
          <li>
            <strong>4 weeks before:</strong> pakki misri; send invitations;
            book rooms for outstation guests; start lada rehearsals.
          </li>
          <li>
            <strong>2 weeks before:</strong> confirm the menu per function,
            any bar permit and loudspeaker permission; finalise the swagat
            and gift lists.
          </li>
          <li>
            <strong>Wedding week:</strong> dev bithana at home; collect puja
            items, red thread and rice for palli pallo; walk the site with the
            décor team and caterer.
          </li>
          <li>
            <strong>After:</strong> datar, chhanar, satauro and the gadjani
            reception, then register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses with a quiet puja room, a
          lada stage and a covered mandap, and plan the schedule so the loud
          functions finish before 10 PM. For the music night, see our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className={linkClass}
          >
            sangeet night guide
          </Link>
          ; for a mixed Sindhi–Punjabi family, our{" "}
          <Link
            href="/blogs/punjabi-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Punjabi wedding at a farmhouse guide
          </Link>{" "}
          shows how the other side&apos;s rituals fit the same days.
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
            Find a Farmhouse for Your Sindhi Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count and functions. Effortless Events
            can shortlist farmhouses across Delhi NCR with a puja room, a lada
            stage, a covered mandap and rooms for both families, and help plan
            the menu and décor.
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
