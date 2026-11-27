import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Kashmiri Pandit Wedding at a Farmhouse in Delhi NCR",

  description:
    "Planning a Kashmiri Pandit wedding at a farmhouse in Delhi NCR? Livun to Posh Puza mapped to venue days, 2027 dates, a day-lagan plan, menu and costs.",

  keywords: [
    "Kashmiri Pandit wedding at farmhouse Delhi NCR",
    "Kashmiri Pandit wedding rituals in order",
    "how many days is a Kashmiri Pandit wedding",
    "Posh Puza Kashmiri wedding",
    "Kashmiri Pandit wedding food menu",
    "Kashmiri Pandit wedding cost Delhi",
    "Kashmiri wedding venue Delhi NCR",
  ],

  alternates: { canonical: "/blogs/kashmiri-pandit-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Kashmiri Pandit Wedding at a Farmhouse in Delhi NCR",
    description:
      "How to host a Kashmiri Pandit wedding at a Delhi NCR farmhouse: Livun, Maenziraat, Divgon, Lagan and Posh Puza mapped to venue days, 2026–27 dates, a daytime-lagan plan, Pandit menu and cost estimates by guest count.",
    images: ["/decoration-4.webp"],
  },
};

const faqs = [
  {
    q: "What are the rituals of a Kashmiri Pandit wedding in order?",
    a: "A common order is Kasamdry (the families agree the match), Gandun (engagement), Livun (house cleaning), Wanwun (folk singing), Maenziraat (henna night), Divgon (the couple's separate prayers), Kanisharan (bridal bath) and Duribat (lunch for maternal relatives). The wedding day has the baraat welcome, Lagan and Posh Puza, then vidaai. Satraat, Phirlath and Roth Khabar follow. Families vary the order.",
  },
  {
    q: "What is Posh Puza in a Kashmiri wedding?",
    a: "Posh Puza comes at the end of the Lagan. The couple sits under a red cloth while relatives shower them with flowers and the priest chants, and they are honoured as Shiva and Parvati. eSamskriti adds that the couple then feeds each other from one thali.",
  },
  {
    q: "How many days is a Kashmiri Pandit wedding?",
    a: "Traditionally the rituals stretch over about a week, from Livun to the wedding, with visits for a few days afterwards. In Delhi NCR most families now hold Livun and Divgon at home and book a farmhouse for one to two days: Maenziraat on the first evening and the Lagan and Posh Puza the next day.",
  },
  {
    q: "What is Maenziraat?",
    a: "Maenziraat (also Mehendiraat or Maenzrath) is the Kashmiri henna night, usually the night before the wedding. The bride's feet are washed by a maternal aunt and the eldest aunt applies henna, while women sing Kashmiri folk songs. The groom gets a small dab of henna at his home.",
  },
  {
    q: "Do Kashmiri Pandit weddings have a band baraat?",
    a: "Traditionally the groom's party is welcomed with conch shells and the two fathers exchange nutmeg, and eSamskriti describes no band or dancing. Many Delhi NCR families now add a small band or dhol for the arrival, so the baraat is often short and quiet compared with a Punjabi one.",
  },
  {
    q: "What food is served at a Kashmiri Pandit wedding?",
    a: "Pre-wedding meals are usually vegetarian: dum aloo, nadru (lotus stem), haak, rajma, rice, var (rice kheer) and kehwa or sheer chai. Many families add mutton dishes such as rogan josh or yakhni at the reception. Pandit cooking uses hing, fennel and dry ginger, often without onion or garlic.",
  },
  {
    q: "How much does a Kashmiri Pandit wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 200-guest Kashmiri Pandit wedding day at a Delhi NCR farmhouse often totals about ₹7–17 lakh for venue and food, mandap and décor, music, photography, lighting and the priest, before clothes and jewellery. Adding a Maenziraat evening adds roughly ₹2.5–6 lakh.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="kashmiri-pandit-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-27"
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
          alt="Kashmiri Pandit wedding at a farmhouse in Delhi NCR: a white and gold table set with candles and greenery for the Duribat family lunch"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Kashmiri Pandit Wedding at a Farmhouse in Delhi NCR: Rituals, Dates
          and Cost
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
          Planning a Kashmiri Pandit wedding at a farmhouse in Delhi NCR? A
          Kashmiri Pandit (Kashur) wedding is quieter and more ritual-led than
          most North Indian weddings: a week of home ceremonies such as Livun
          and Divgon, a henna night called Maenziraat, then the Lagan and the
          flower-shower Posh Puza. Many families who settled in Delhi,
          Faridabad, Noida and Gurgaon now hold the bigger functions at a
          farmhouse. This guide maps each ritual to a farmhouse slot and covers
          2026–27 dates, how many days to book, a daytime-lagan plan, the menu,
          cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Kashmiri Pandit wedding in Delhi NCR, keep Livun and Divgon at
            home and book a farmhouse for one to two days: Maenziraat on the
            first evening, then the baraat welcome, Lagan and Posh Puza. A
            daytime Lagan, as tradition once had it, also fits the 10 PM music
            rule. Budget roughly ₹7–17 lakh for 200 guests, and book now for
            January–February 2027.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Kashmiri Pandit Wedding at a Farmhouse: At a Glance
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
                  1 day (wedding only) or 2 days (Maenziraat evening, then the
                  wedding)
                </td>
              </tr>
              <tr>
                <td className={td}>Functions at the farmhouse</td>
                <td className={td}>
                  Maenziraat, Duribat lunch, baraat welcome, Lagan, Posh Puza,
                  vidaai, and often the reception
                </td>
              </tr>
              <tr>
                <td className={td}>Usually at home</td>
                <td className={td}>
                  Kasamdry, Livun, Divgon, Kanisharan, Satraat, Phirlath, Roth
                  Khabar
                </td>
              </tr>
              <tr>
                <td className={td}>Dates this season</td>
                <td className={td}>
                  Early December 2026, then 15 January to February 2027 (confirm
                  with your family priest)
                </td>
              </tr>
              <tr>
                <td className={td}>Must-have spaces</td>
                <td className={td}>
                  A covered mandap with a safe havan spot, a quiet room for
                  women&apos;s singing, heated rooms for both families
                </td>
              </tr>
              <tr>
                <td className={td}>Biggest rule to plan around</td>
                <td className={td}>
                  Amplified music by 10 PM, so a day or early-evening Lagan is
                  easiest
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>About ₹7–17 lakh for a 200-guest wedding day</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Kashmiri Pandit Wedding, in Order?
        </h2>

        <p className="mb-8">
          A Kashmiri Pandit wedding moves from family agreement and house
          preparation, to singing and henna, to the Lagan, and then to a series
          of visits between the two homes. The order below draws on{" "}
          <a
            href="https://weddingsutra.com/planning/wedding-tradition-series-step-into-the-enchanting-world-of-kashmiri-weddings"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingSutra&apos;s Kashmiri wedding traditions guide
          </a>
          ,{" "}
          <a
            href="https://weddingwire.in/wedding-tips/kashmiri-pandit--c1449"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingWire India (July 2020)
          </a>
          ,{" "}
          <a
            href="https://www.bollywoodshaadis.com/articles/kashmiri-wedding-traditions-and-rituals-5562"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            BollywoodShaadis (2018)
          </a>{" "}
          and{" "}
          <a
            href="https://esamskriti.com/e/Culture/Ceremonies/Kashmiri-Pandit-Wedding-~-KAESHUR-KHANDAR---1.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            eSamskriti&apos;s Kaeshur Khandar essay (July 2021)
          </a>
          . They disagree on several timings, so treat this as a planning map
          and let your family priest settle the details.
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
                <td className={td}>Kasamdry</td>
                <td className={td}>
                  Families meet, often at a temple, and agree the match; a
                  simple vegetarian meal follows
                </td>
                <td className={td}>Months earlier; temple or home</td>
              </tr>
              <tr>
                <td className={td}>Gandun</td>
                <td className={td}>
                  Engagement on a date set by the priest; gifts, misri and
                  fruit exchanged
                </td>
                <td className={td}>Weeks earlier; home or a small venue</td>
              </tr>
              <tr>
                <td className={td}>Livun and Krool Kharun</td>
                <td className={td}>
                  The house is cleaned and freshly coated; the father&apos;s
                  sister decorates the entrance
                </td>
                <td className={td}>
                  At home, days before (sources place Krool Kharun differently)
                </td>
              </tr>
              <tr>
                <td className={td}>Wanwun</td>
                <td className={td}>
                  Women sing Kashmiri folk songs with the tumbaknari drum; noon
                  chai served
                </td>
                <td className={td}>
                  Evenings at home, and again at the farmhouse on Maenziraat
                </td>
              </tr>
              <tr>
                <td className={td}>Maenziraat</td>
                <td className={td}>
                  The bride&apos;s feet are washed by a maternal aunt; the
                  eldest aunt applies henna
                </td>
                <td className={td}>Evening before the wedding</td>
              </tr>
              <tr>
                <td className={td}>Divgon</td>
                <td className={td}>
                  Bride and groom fast and pray to Shiva and Parvati before a
                  havan, separately at their homes
                </td>
                <td className={td}>
                  Usually at home, the day before; some families move it to the
                  farmhouse puja room
                </td>
              </tr>
              <tr>
                <td className={td}>Kanisharan</td>
                <td className={td}>
                  A ritual bath with water, milk and curd or flowers, then new
                  clothes
                </td>
                <td className={td}>
                  Day before or wedding morning (sources differ)
                </td>
              </tr>
              <tr>
                <td className={td}>Duribat</td>
                <td className={td}>
                  Maternal relatives come for lunch at each home
                </td>
                <td className={td}>Wedding-day lunch at the farmhouse</td>
              </tr>
              <tr>
                <td className={td}>Baraat welcome</td>
                <td className={td}>
                  Conch shells sound; the two fathers exchange nutmeg as a sign
                  of lasting friendship
                </td>
                <td className={td}>At the farmhouse gate</td>
              </tr>
              <tr>
                <td className={td}>Lagan</td>
                <td className={td}>
                  Mandap puja, the bride brought in by her maternal uncle, the
                  mirror glimpse, kanyadaan, the mananmal thread and seven
                  pheras
                </td>
                <td className={td}>At the muhurat, in a covered mandap</td>
              </tr>
              <tr>
                <td className={td}>Posh Puza</td>
                <td className={td}>
                  Couple seated under a red cloth and showered with flowers as
                  Shiva and Parvati
                </td>
                <td className={td}>Straight after the pheras</td>
              </tr>
              <tr>
                <td className={td}>Vidaai</td>
                <td className={td}>
                  The couple stands on the vyoog (a floor design); the eldest
                  woman offers nabad (sugar crystals) and blessings
                </td>
                <td className={td}>End of the wedding</td>
              </tr>
              <tr>
                <td className={td}>Satraat, Phirlath, Roth Khabar</td>
                <td className={td}>
                  The couple&apos;s visits to the bride&apos;s home, a second
                  visit with a feast, and the roth (sweet bread) sent on a
                  Tuesday or Saturday
                </td>
                <td className={td}>
                  At home; a reception can be a separate farmhouse evening
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
            <strong>Maenziraat:</strong> WeddingSutra and BollywoodShaadis put
            it the night before the wedding; eSamskriti says a couple of days
            before.
          </li>
          <li>
            <strong>Kanisharan:</strong> WeddingSutra and eSamskriti place it
            in the pre-wedding days; BollywoodShaadis puts it on the wedding
            day, and the bath ingredients differ in each source.
          </li>
          <li>
            <strong>Satraat:</strong> WeddingSutra and WeddingWire describe an
            evening visit to the bride&apos;s home; eSamskriti says the couple
            first visits the groom&apos;s home, then dines at the bride&apos;s.
          </li>
          <li>
            <strong>Lagan timing:</strong> only eSamskriti addresses it, saying
            the Lagan was traditionally held in the day and is now mostly at
            night.
          </li>
        </ul>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Kashmiri Pandit Wedding Dates for 2026–27?
        </h2>

        <p className="mb-8">
          Kashmiri Pandit families usually fix the date with their family
          priest from the Kashmiri jantri, so general lists are a starting
          point, not the answer. Most Hindu calendars give two windows this
          winter: early December 2026, and mid-January to February 2027.
          Between them sits Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad gives as about 16 December to 14 January
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
          . February dates are the popular picks in{" "}
          <a
            href="https://www.wedmegood.com/blog/best-hindu-wedding-dates-in-2027-auspicious-marriage-dates-for-your-big-day/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WedMeGood&apos;s 2027 Hindu wedding dates (March 2026)
          </a>
          , a selection rather than a full list. Early December is one to two
          weeks away, so most families now planning are looking at Sat 30
          January and Sat 20 and 27 February. Herath (Mahashivratri), the
          biggest Kashmiri Pandit festival, also falls in late winter, so check
          its date before you lock a February weekend.
        </p>

        {/* =====================================================
            HOW MANY DAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Days Should You Book the Farmhouse?
        </h2>

        <p className="mb-8">
          Most Kashmiri Pandit weddings in Delhi NCR book a farmhouse for one or
          two days. Livun, Divgon and the post-wedding visits are tied to the
          two family homes, so they rarely move. Pick the format by how much
          you want under one roof:
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
                <td className={td}>Day wedding only</td>
                <td className={td}>
                  Duribat lunch, baraat welcome, Lagan and Posh Puza in daylight,
                  early dinner, vidaai
                </td>
                <td className={td}>
                  Families who want the traditional daytime Lagan and elders
                  home before the cold
                </td>
              </tr>
              <tr>
                <td className={td}>Evening wedding only</td>
                <td className={td}>
                  Baraat welcome around 7 PM, dinner, then the Lagan late at
                  night with only quiet music
                </td>
                <td className={td}>Families following a night muhurat</td>
              </tr>
              <tr>
                <td className={td}>Two days + overnight</td>
                <td className={td}>
                  Day 1: Wanwun and Maenziraat. Day 2: Duribat, wedding, vidaai
                </td>
                <td className={td}>
                  Families with relatives arriving from Jammu, Pune, Bengaluru or
                  abroad
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample two-day plan for Sat 30 January 2027 (daytime Lagan)
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Fri, 4–6 PM:</strong> families check in; kehwa and
            snacks.
          </li>
          <li>
            <strong>Fri, 6–9:45 PM:</strong> Wanwun singing in a warm indoor
            hall, then Maenziraat henna and a vegetarian dinner. Amplified
            music off by 10 PM; quiet singing can carry on indoors.
          </li>
          <li>
            <strong>Sat, 8–10 AM:</strong> Kanisharan and getting ready in
            heated rooms.
          </li>
          <li>
            <strong>Sat, 11 AM–12:30 PM:</strong> Duribat lunch for maternal
            relatives on the lawn in the winter sun.
          </li>
          <li>
            <strong>Sat, 12:30–1 PM:</strong> baraat arrives; conch shells and
            the nutmeg exchange at the gate.
          </li>
          <li>
            <strong>Sat, 1–4 PM:</strong> Lagan and Posh Puza at the muhurat,
            in a covered mandap with side heaters.
          </li>
          <li>
            <strong>Sat, 4–7 PM:</strong> high tea, photos and an early dinner;
            vidaai before the evening fog sets in.
          </li>
        </ul>

        <p className="mb-8">
          If your muhurat is at night, swap the order: welcome the baraat by 7
          PM, serve dinner while the band and DJ can still play, and keep the
          Lagan itself to conch shells, mantras and unamplified singing. Our{" "}
          <Link
            href="/blogs/day-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            day wedding at a farmhouse guide
          </Link>{" "}
          has more on daylight timing and menus.
        </p>

        {/* =====================================================
            FOOD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Food Is Served at a Kashmiri Pandit Wedding?
        </h2>

        <p className="mb-8">
          The food is often what guests remember most. WeddingSutra, WeddingWire
          and BollywoodShaadis all describe the ritual meals as traditionally
          vegetarian, with non-vegetarian dishes now added by caterers,
          especially at the reception.{" "}
          <a
            href="https://www.outlooktraveller.com/experiences/food-and-drink/celebrating-kashmiri-pandit-cuisine-with-phira-saal"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Outlook Traveller (December 2023)
          </a>{" "}
          notes that Pandit cooking leans on hing, fennel, dry ginger and
          turmeric, often without onion or garlic, unlike the meat-heavy wazwan
          of Kashmiri Muslim weddings. Plan it by function:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Maenziraat dinner:</strong> vegetarian, such as dum aloo,
            rajma, haak (collard greens), rice and var (rice kheer), with kehwa
            and sheer (noon) chai.
          </li>
          <li>
            <strong>Duribat lunch:</strong> WeddingSutra lists milk, kehwa, dum
            aloo, yakhni and nadru (lotus stem) for this meal.
          </li>
          <li>
            <strong>Wedding meal:</strong> a fuller spread. Families that eat
            meat often add rogan josh or yakhni; keep a clearly separate
            vegetarian line for elders and the priest.
          </li>
          <li>
            <strong>Caterer:</strong> most Delhi NCR caterers can make a
            general Kashmiri menu, but few know Pandit-style cooking. Ask for a
            tasting of dum aloo, nadru and yakhni, or let a specialist Kashmiri
            caterer run one counter if the farmhouse allows outside food.
          </li>
          <li>
            <strong>Bar:</strong> decide whether there is one and on which
            evening. Our{" "}
            <Link
              href="/blogs/how-much-alcohol-for-party-delhi-ncr"
              className={linkClass}
            >
              alcohol-per-guest guide
            </Link>{" "}
            helps you size it; keep the puja days dry.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Kashmiri Pandit Wedding at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          As a rough late-2026 planning estimate, a 200-guest Kashmiri Pandit
          wedding day at a Delhi NCR farmhouse often totals about ₹7–17 lakh.
          A smaller baraat and lighter music usually keep it below a Punjabi
          or Marwari wedding of the same size; the bar and a specialist
          caterer move the total most. The figures below are our estimates,
          not quotes.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Item (wedding day, 200 guests)</th>
                <th className={th}>Estimated cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>
                  Venue and catering (about ₹1,500–₹3,000 per plate)
                </td>
                <td className={td}>₹3–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>Mandap, Posh Puza flowers, stage and entrance</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>Bar, if served (permit, liquor, bartenders)</td>
                <td className={td}>₹0–2.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Folk singers, dhol or small band, sound</td>
                <td className={td}>₹0.3–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>Photography and video</td>
                <td className={td}>₹1.2–3 lakh</td>
              </tr>
              <tr>
                <td className={td}>Lighting, heaters and power backup</td>
                <td className={td}>₹0.4–1 lakh</td>
              </tr>
              <tr>
                <td className={td}>Priest, puja items, henna artist and sundries</td>
                <td className={td}>₹0.3–0.8 lakh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className={td}>
                  <strong>Total (estimate)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹7–17 lakh</strong>
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
                <th className={th}>Add Maenziraat evening (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>100</td>
                <td className={td}>₹4–9 lakh</td>
                <td className={td}>+₹1.5–3.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>200</td>
                <td className={td}>₹7–17 lakh</td>
                <td className={td}>+₹2.5–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>350</td>
                <td className={td}>₹11–26 lakh</td>
                <td className={td}>+₹4–9 lakh</td>
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
          sets the P-10 permit at ₹15,000 per event; Gurgaon, Faridabad and
          Noida farmhouses follow Haryana and Uttar Pradesh rules. Not included
          above: outfits, the dejhoor and other jewellery, gifts, and rooms for
          outstation guests.
        </p>

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
            allowed between 10 PM and 6 AM. A late Lagan with mantras and
            conch shells is fine; a DJ is not.
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
            , so plan the baraat welcome without them.
          </li>
          <li>
            <strong>No open wood or coal cooking on bad-air days:</strong> the
            traditional wuri (an outdoor clay or brick stove) and coal tandoors
            can be restricted under GRAP. Ask the caterer to cook on gas or
            electric. Our{" "}
            <Link
              href="/blogs/grap-rules-weddings-parties-delhi-ncr"
              className={linkClass}
            >
              GRAP rules guide
            </Link>{" "}
            explains each stage.
          </li>
          <li>
            <strong>Fire safety:</strong> keep the havan, diyas and kangris (if
            elders bring them) away from drapes, with sand, water and an
            extinguisher nearby.
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
          décor and logistics. Families in Faridabad often look at farmhouses
          near Surajkund and the Aravalli belt, south Delhi families at
          Chattarpur, and Noida families along the Expressway. Whatever the
          area, check:
        </p>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            The booking covers both days, with check-in, check-out and the
            overnight stay in writing.
          </li>
          <li>
            A warm indoor room for Wanwun and Maenziraat, where women can sit
            on the floor and sing without a microphone.
          </li>
          <li>
            A covered mandap with written permission for the havan fire, and
            space for relatives around it during Posh Puza.
          </li>
          <li>
            A sunny lawn for the Duribat lunch and a covered backup for a
            foggy day.
          </li>
          <li>
            Whether outside or specialist caterers are allowed, and whether
            there is a separate vegetarian kitchen.
          </li>
          <li>Heated rooms for both families close to the mandap.</li>
          <li>
            Music finish time, who applies for loudspeaker permission, and any
            overtime charge for a late Lagan.
          </li>
          <li>A power plan that does not rely on diesel generators.</li>
        </ol>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Kashmiri Pandit Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–10 weeks before:</strong> fix the date and Lagan time
            with your priest; decide day or night Lagan; book the farmhouse.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the caterer (with a
            tasting of the Pandit dishes), décor, photographer, henna artist
            and folk singers.
          </li>
          <li>
            <strong>4 weeks before:</strong> Gandun if not done; send
            invitations; book rooms for outstation relatives.
          </li>
          <li>
            <strong>2 weeks before:</strong> confirm the menu per function,
            any bar permit and loudspeaker permission; order flowers for Posh
            Puza and the mananmal thread.
          </li>
          <li>
            <strong>Wedding week:</strong> Livun and Krool Kharun at home;
            Divgon the day before; walk the site with the décor team and
            caterer.
          </li>
          <li>
            <strong>After:</strong> Satraat, Phirlath and Roth Khabar, then
            register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses with a warm singing room,
          a covered mandap and rooms for both families, and plan the day so the
          louder parts finish before 10 PM. For a mixed Kashmiri–Sindhi or
          Kashmiri–Punjabi family, our{" "}
          <Link
            href="/blogs/sindhi-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Sindhi wedding at a farmhouse guide
          </Link>{" "}
          shows how another family&apos;s rituals can share the same days, and
          our{" "}
          <Link
            href="/blogs/winter-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            winter wedding guide
          </Link>{" "}
          covers heaters and fog plans.
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
            Find a Farmhouse for Your Kashmiri Pandit Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your Lagan time, guest count and functions. Effortless Events
            can shortlist farmhouses across Delhi NCR with a covered mandap, a
            warm room for Maenziraat and rooms for both families, and help plan
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
