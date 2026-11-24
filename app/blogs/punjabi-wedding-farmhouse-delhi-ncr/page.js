import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Punjabi Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",

  description:
    "Planning a Punjabi wedding at a farmhouse in Delhi NCR? 2026–27 dates, rituals by day, how many days to book, a 2-day plan, cost estimates and a checklist.",

  keywords: [
    "Punjabi wedding at farmhouse Delhi NCR",
    "Punjabi wedding rituals list in order",
    "how many days is a Punjabi wedding",
    "Punjabi wedding dates 2026 2027",
    "chooda ceremony and milni",
    "Punjabi wedding cost Delhi",
    "Punjabi wedding venue Delhi farmhouse",
  ],

  alternates: { canonical: "/blogs/punjabi-wedding-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Punjabi Wedding at a Farmhouse in Delhi NCR: Rituals & Cost",
    description:
      "How to host a Punjabi wedding at a Delhi NCR farmhouse: 2026–27 dates and the Kharmas gap, rituals from roka to vidaai mapped to venue days, how long to book, a 2-day plan and cost estimates by guest count.",
    images: ["/decoration-7.webp"],
  },
};

const faqs = [
  {
    q: "What are the rituals of a Punjabi wedding in order?",
    a: "A common order is roka, chunni and sagai, then sangeet, mehndi, chooda and kaleere, vatna or maiyan, and jaggo. The wedding day has sehra bandi, ghodi chadna, the baraat, milni, jaimala, kanyadaan, pheras, sindoor and joota chupai, followed by vidaai, the doli and paani vaarna at the groom's home.",
  },
  {
    q: "How many days is a Punjabi wedding?",
    a: "The main functions usually run over two to three days: sangeet and mehndi, then chooda, maiyan and jaggo, then the wedding. Roka and sagai happen weeks or months earlier. At a farmhouse, many families book two days, or one day for the wedding and hold the smaller rituals at home.",
  },
  {
    q: "What is the chooda ceremony in a Punjabi wedding?",
    a: "In the chooda ceremony, the bride's maternal uncle (mama) gives her a set of red and ivory bangles, and family members tie kaleere (gold or silver ornaments) to them. It happens at the bride's home or venue before the wedding; many families hold it on the wedding morning, but timing varies.",
  },
  {
    q: "What happens at the milni ceremony?",
    a: "Milni happens when the baraat arrives. Relatives from both families with the same relation, such as the two fathers or the two mamas, meet one by one, embrace and exchange shagun or a gift. Keep the list short and decide the order in advance so the baraat does not wait in the cold.",
  },
  {
    q: "How many pheras are there in a Punjabi Hindu wedding?",
    a: "Wikipedia's Punjabi wedding traditions article describes four circuits of the sacred fire in Hindu Punjabi weddings, while many Hindu families follow the seven pheras and saptapadi. Sikh weddings have four laavan around the Guru Granth Sahib. Ask your family pandit which form your family follows.",
  },
  {
    q: "What are the Punjabi wedding dates in 2026–27?",
    a: "VedicFeed lists 2–6, 11 and 12 December 2026, then 15, 18, 19, 20, 24, 26, 27, 30 and 31 January 2027. WedMeGood's popular February 2027 dates are 2, 10, 11, 12, 14, 20 and 27 February. Most families pause for Kharmas, about 16 December to 14 January. Your pandit fixes the final muhurat.",
  },
  {
    q: "How much does a Punjabi wedding at a farmhouse cost in Delhi NCR?",
    a: "As a rough late-2026 planning estimate, a 250-guest Punjabi wedding day at a Delhi NCR farmhouse often totals about ₹10–24 lakh for venue and food, décor, DJ and dhol, baraat, bar, photography and lighting, before clothes and jewellery. Guest count, the date and the bar change it most.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "underline";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="punjabi-wedding-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-24"
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-10">
        <img
          src="/decoration-7.webp"
          width={800}
          height={1200}
          fetchPriority="high"
          decoding="async"
          alt="Punjabi wedding at a farmhouse in Delhi NCR: a lit dance floor on the lawn under string lights and paper lanterns, with dinner tables set behind it for the sangeet and wedding night"
          className="w-full rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Punjabi Wedding at a Farmhouse in Delhi NCR: Rituals, Dates and Cost
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
          Planning a Punjabi wedding at a farmhouse in Delhi NCR? A Punjabi
          wedding is a run of functions, not one night: sangeet and mehndi,
          chooda and maiyan, a jaggo, then the baraat, milni and pheras. A
          farmhouse can host most of it in one place, with a lawn for bhangra,
          rooms for both families and space for a baraat on the property. This
          guide covers 2026–27 dates, every ritual mapped to a farmhouse slot,
          how many days to book, a sample plan, cost estimates and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            For a Punjabi wedding in Delhi NCR, book a farmhouse for one to two
            days: sangeet, mehndi and jaggo on day one, then the baraat, milni
            and pheras on day two. The best dates this season are 2–12 December
            2026 and mid-January to February 2027, with a Kharmas pause in
            between. Budget roughly ₹10–24 lakh for 250 guests.
          </p>
        </div>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Punjabi Wedding at a Farmhouse: At a Glance
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
                  1 day (wedding only) to 2 days (sangeet and jaggo, then the
                  wedding); add a night if vidaai is next morning
                </td>
              </tr>
              <tr>
                <td className={td}>Functions at the farmhouse</td>
                <td className={td}>
                  Sangeet, mehndi, chooda, maiyan, jaggo, baraat, milni,
                  jaimala, pheras, joota chupai, vidaai
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
                  Lawn and dance floor, covered mandap with a safe fire spot,
                  a gate for the baraat, rooms with heaters, a bar area
                </td>
              </tr>
              <tr>
                <td className={td}>Biggest rule to plan around</td>
                <td className={td}>
                  Amplified music by 10 PM, so the baraat and dancing start
                  early
                </td>
              </tr>
              <tr>
                <td className={td}>Cost (estimate)</td>
                <td className={td}>
                  About ₹10–24 lakh for a 250-guest wedding day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Punjabi Wedding Dates for 2026–27?
        </h2>

        <p className="mb-8">
          This winter has two wedding windows for Hindu Punjabi families in
          Delhi NCR: a short one in early December 2026 and a longer one from
          mid-January into February 2027. Between them is Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad gives as about 16 December to 14 January
          </a>
          , when most families avoid weddings. Lohri falls inside that gap on
          13 January, so many Punjabi families hold the first-Lohri
          celebration for a December couple instead.
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
          , which is a selection rather than a full muhurat list. Panchangs
          differ: WedMeGood also lists 1 and 10 January, which fall inside
          Kharmas on other calendars. Confirm your date and muhurat time with
          your family pandit.
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Weekend dates go first.</strong> Sat 5 and Sat 12 December
            are less than three weeks away, so most good farmhouses are already
            held. Sat 30 January and Sat 20 and 27 February are the next big
            weekends to book now.
          </li>
          <li>
            <strong>Weekday muhurat, weekend party.</strong> If your date is a
            Tuesday or Wednesday, keep the pheras small and hold the sangeet
            and reception at the farmhouse on the weekend.
          </li>
          <li>
            <strong>Late muhurats:</strong> some windows run past midnight.
            Plan the loud part of the night before 10 PM and keep the pheras
            quiet, so a late muhurat does not clash with noise rules.
          </li>
        </ul>

        {/* =====================================================
            RITUALS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Are the Rituals of a Punjabi Wedding, in Order?
        </h2>

        <p className="mb-8">
          A Punjabi wedding moves from family rituals weeks ahead, to music
          nights, to the wedding day and the welcome at the groom&apos;s home.
          The order below follows{" "}
          <a
            href="https://en.wikipedia.org/wiki/Punjabi_wedding_traditions"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Wikipedia&apos;s Punjabi wedding traditions article
          </a>{" "}
          and{" "}
          <a
            href="https://weddingsutra.com/planning/wedding-traditions-series-embrace-the-exuberance-of-punjabi-weddings"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingSutra&apos;s Punjabi traditions guide (2021)
          </a>
          . Families combine, skip or reorder rituals, so use it as a planning
          map, not a rulebook.
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
                <td className={td}>Roka, chunni, sagai</td>
                <td className={td}>
                  Families confirm the match; the groom&apos;s side drapes a
                  chunni on the bride; rings are exchanged
                </td>
                <td className={td}>Weeks earlier; home or a separate event</td>
              </tr>
              <tr>
                <td className={td}>Sangeet</td>
                <td className={td}>Music, boliyan, gidda and bhangra</td>
                <td className={td}>Day 1 evening</td>
              </tr>
              <tr>
                <td className={td}>Mehndi</td>
                <td className={td}>Henna for the bride and family</td>
                <td className={td}>Day 1 afternoon</td>
              </tr>
              <tr>
                <td className={td}>Chooda and kaleere</td>
                <td className={td}>
                  Maternal uncle gives the red bangles; kaleere are tied on
                </td>
                <td className={td}>Day 2 morning, or day 1</td>
              </tr>
              <tr>
                <td className={td}>Vatna / maiyan, ghara gharoli</td>
                <td className={td}>
                  Turmeric paste and a holy-water bath at both homes
                </td>
                <td className={td}>Home, or a farmhouse morning</td>
              </tr>
              <tr>
                <td className={td}>Jaggo</td>
                <td className={td}>
                  Night procession with a lit pot (gagar) and dancing
                </td>
                <td className={td}>Day 1 late evening</td>
              </tr>
              <tr>
                <td className={td}>Sehra bandi, ghodi chadna</td>
                <td className={td}>
                  Sehra tied on the groom; he rides the mare with his sarbala
                </td>
                <td className={td}>Day 2, groom&apos;s side</td>
              </tr>
              <tr>
                <td className={td}>Baraat and milni</td>
                <td className={td}>
                  Procession arrives; matching relatives meet and exchange
                  shagun
                </td>
                <td className={td}>Day 2, 7–8:30 PM at the gate</td>
              </tr>
              <tr>
                <td className={td}>Jaimala</td>
                <td className={td}>Couple exchange garlands on stage</td>
                <td className={td}>Day 2 after milni</td>
              </tr>
              <tr>
                <td className={td}>Kanyadaan, pheras, sindoor</td>
                <td className={td}>
                  Vedic rites around the fire; sindoor and mangalsutra
                </td>
                <td className={td}>Day 2 at the muhurat</td>
              </tr>
              <tr>
                <td className={td}>Joota chupai</td>
                <td className={td}>
                  Bride&apos;s sisters hide the groom&apos;s shoes for shagun
                </td>
                <td className={td}>During the pheras</td>
              </tr>
              <tr>
                <td className={td}>Vidaai and doli</td>
                <td className={td}>
                  Bride throws puffed rice over her shoulder and leaves
                </td>
                <td className={td}>Late night or next morning</td>
              </tr>
              <tr>
                <td className={td}>Paani vaarna</td>
                <td className={td}>
                  Mother-in-law welcomes the couple at the groom&apos;s home
                </td>
                <td className={td}>Groom&apos;s home</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Two rituals need their own planning. The jaggo involves an open
          flame and a loud dhol late in the evening; our{" "}
          <Link
            href="/blogs/jaggo-ceremony-farmhouse-delhi-ncr"
            className={linkClass}
          >
            jaggo ceremony guide
          </Link>{" "}
          covers props, timing and safety. The baraat needs a route, a band
          and a start time; see our{" "}
          <Link
            href="/blogs/baraat-at-farmhouse-wedding-delhi-ncr"
            className={linkClass}
          >
            baraat at a farmhouse guide
          </Link>{" "}
          for band and ghodi prices.
        </p>

        {/* =====================================================
            HINDU VS SIKH
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can the Pheras Be Held at the Farmhouse?
        </h2>

        <p className="mb-8">
          For a Hindu Punjabi wedding, yes: the pandit performs the pheras
          around a havan fire in a mandap at the farmhouse, which is the most
          common setup in Delhi NCR. For a Sikh Anand Karaj the answer is
          different. The Akal Takht has directed that the laavan be held in a
          gurdwara, so Sikh families usually do the Anand Karaj in the morning
          at a gurdwara and move to a farmhouse for lunch or the reception. Our{" "}
          <Link
            href="/blogs/sikh-wedding-farmhouse-delhi-ncr"
            className={linkClass}
          >
            Sikh wedding at a farmhouse guide
          </Link>{" "}
          explains the rules and a same-day plan. Many Delhi families are
          mixed, so settle this early: it decides whether you need a mandap,
          a gurdwara slot or both.
        </p>

        {/* =====================================================
            HOW MANY DAYS
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Many Days Should You Book the Farmhouse?
        </h2>

        <p className="mb-8">
          Most Punjabi weddings in Delhi NCR book a farmhouse for one or two
          days. Roka and sagai are separate events, and many families keep
          vatna and maiyan at home. Pick the format by how many functions you
          want under one roof:
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
                  Baraat, milni, jaimala, dinner, pheras; sangeet elsewhere
                </td>
                <td className={td}>Tighter budgets, local guests</td>
              </tr>
              <tr>
                <td className={td}>Two days</td>
                <td className={td}>
                  Day 1: mehndi, sangeet, jaggo. Day 2: chooda, baraat,
                  wedding
                </td>
                <td className={td}>Most families; one venue, one décor team</td>
              </tr>
              <tr>
                <td className={td}>Two days + overnight</td>
                <td className={td}>
                  As above, plus rooms for the bride&apos;s family and a
                  morning vidaai
                </td>
                <td className={td}>Late muhurats, outstation or NRI guests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample two-day plan for Sat 30 January 2027
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Fri, 1–5 PM:</strong> mehndi on the lawn in the sun, with
            chaat counters and a dholki.
          </li>
          <li>
            <strong>Fri, 6:30–9:45 PM:</strong> sangeet with performances,
            then the jaggo round the property; amplified music off by 10 PM.
          </li>
          <li>
            <strong>Sat, 9–11 AM:</strong> chooda and kaleere at the bride&apos;s
            rooms; a light brunch for close family.
          </li>
          <li>
            <strong>Sat, 6:30–8 PM:</strong> sehra bandi and baraat on the
            farmhouse drive, then milni at the gate.
          </li>
          <li>
            <strong>Sat, 8–10 PM:</strong> jaimala, dinner and the DJ; dance
            floor closes by 10 PM.
          </li>
          <li>
            <strong>Sat, at the muhurat:</strong> pheras in a covered, heated
            mandap with family only; joota chupai alongside.
          </li>
          <li>
            <strong>Sun morning:</strong> vidaai and doli if you booked the
            night.
          </li>
        </ul>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Punjabi Wedding at a Farmhouse Cost?
        </h2>

        <p className="mb-8">
          As a rough late-2026 planning estimate, a 250-guest Punjabi wedding
          day at a Delhi NCR farmhouse often totals about ₹10–24 lakh. A
          Punjabi wedding usually costs more than a dry, vegetarian wedding of
          the same size because of the bar, the non-veg menu and a bigger
          dance setup. The figures below are estimates, not quotes.
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
                <td className={td}>Venue and catering (about ₹1,500–₹3,000 per plate)</td>
                <td className={td}>₹3.75–7.5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Décor, mandap, stage and entrance</td>
                <td className={td}>₹2–5 lakh</td>
              </tr>
              <tr>
                <td className={td}>Bar (P-10 permit in Delhi plus liquor and bartenders)</td>
                <td className={td}>₹1.5–4 lakh</td>
              </tr>
              <tr>
                <td className={td}>DJ, sound, dance floor and dhol</td>
                <td className={td}>₹0.6–1.8 lakh</td>
              </tr>
              <tr>
                <td className={td}>Baraat band, ghodi and lights</td>
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
                <td className={td}>Pandit, samagri, mehndi artist and sundries</td>
                <td className={td}>₹0.3–1 lakh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className={td}>
                  <strong>Total (estimate)</strong>
                </td>
                <td className={td}>
                  <strong>About ₹10–24 lakh</strong>
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
                <th className={th}>Add a sangeet/mehndi day (estimate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>150</td>
                <td className={td}>₹6–15 lakh</td>
                <td className={td}>+₹2.5–6 lakh</td>
              </tr>
              <tr>
                <td className={td}>250</td>
                <td className={td}>₹10–24 lakh</td>
                <td className={td}>+₹4–9 lakh</td>
              </tr>
              <tr>
                <td className={td}>400</td>
                <td className={td}>₹15–35 lakh</td>
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
          . In Delhi, a{" "}
          <a
            href="https://excise.delhi.gov.in/sites/default/files/Excise/circulars-orders/special_camp_p-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Delhi Excise notice dated 22 October 2026
          </a>{" "}
          sets the P-10 permit for serving liquor at a farmhouse function at
          ₹15,000 per event. Gurgaon and Noida farmhouses follow Haryana and
          Uttar Pradesh rules, so ask the owner which permit applies. Dhol
          players for the jaggo and baraat are listed on{" "}
          <a
            href="https://www.weddingbazaar.com/wedding-entertainment/delhi/punjabi-dhol-wala"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            WeddingBazaar Delhi
          </a>{" "}
          from about ₹11,000 for three hours (checked November 2026). Not
          included above: outfits, jewellery, the chooda, shagun and gifts,
          and rooms for outstation guests.
        </p>

        {/* =====================================================
            FOOD
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Should the Food and Bar Look Like?
        </h2>

        <p className="mb-8">
          A Punjabi wedding menu is usually built around live counters and a
          tandoor, with a full bar for the sangeet and wedding night. Winter
          makes it easier: sarson da saag with makki di roti, gajar ka halwa
          and hot jalebi suit December to February. Plan it by function:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>Mehndi lunch:</strong> chaat, chole bhature or kulche,
            lassi, light snacks so guests can eat with henna on.
          </li>
          <li>
            <strong>Sangeet dinner:</strong> tikka and kebab starters, dal
            makhani, butter chicken or paneer, naan from a live tandoor.
          </li>
          <li>
            <strong>Wedding dinner:</strong> a fuller spread with a veg and
            non-veg main line, a saag-makki counter and a dessert station.
          </li>
          <li>
            <strong>Bar:</strong> whisky leads at most Punjabi weddings; our{" "}
            <Link
              href="/blogs/how-much-alcohol-for-party-delhi-ncr"
              className={linkClass}
            >
              alcohol-per-guest guide
            </Link>{" "}
            helps you size it. Keep a separate dry, veg area if elders or
            religious guests prefer it.
          </li>
          <li>
            <strong>Tandoor fuel:</strong> on high-pollution days, coal
            tandoors may be restricted, so ask the caterer for an electric or
            gas option.
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
            allowed between 10 PM and 6 AM. Start the baraat by 7 PM and plan
            the DJ to end on time.
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
            , so plan the baraat entry without them; use cold pyro only if the
            venue allows it.
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
            <strong>Fire safety:</strong> keep the havan fire and jaggo diyas
            away from fabric drapes, with sand, water and an extinguisher
            nearby.
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
            A driveway or inner road long enough for the baraat, so it does
            not have to use a public road.
          </li>
          <li>
            A lawn dance floor plus a covered or indoor backup for a foggy or
            cold night.
          </li>
          <li>A covered mandap with written permission for the havan fire.</li>
          <li>
            Whether outside caterers and your own liquor are allowed, and who
            gets the P-10 or state permit.
          </li>
          <li>
            Rooms with heaters for the bride&apos;s family, close to the
            mandap, for the chooda and getting ready.
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
          Punjabi Wedding Checklist for a Farmhouse
        </h2>

        <ol className="list-decimal pl-8 space-y-3 mb-10">
          <li>
            <strong>8–10 weeks before:</strong> fix the muhurat with your
            pandit (or the gurdwara slot); book the farmhouse for all function
            days.
          </li>
          <li>
            <strong>6–8 weeks before:</strong> book the caterer, décor, DJ,
            dhol, band and ghodi, photographer and mehndi artist.
          </li>
          <li>
            <strong>4 weeks before:</strong> send invitations; order the chooda
            and kaleere; book rooms for outstation guests; start sangeet
            rehearsals.
          </li>
          <li>
            <strong>2 weeks before:</strong> confirm the menu per function,
            the bar permit, loudspeaker permission and the milni list.
          </li>
          <li>
            <strong>Wedding week:</strong> collect puja samagri and jaggo
            props; walk the site with the décor team and caterer; share the
            run-of-show with both families.
          </li>
          <li>
            <strong>After:</strong> paani vaarna and the reception, then
            register the marriage.
          </li>
        </ol>

        <p className="mb-8">
          Effortless Events can shortlist farmhouses with room for a baraat,
          a lawn dance floor and a covered mandap, and plan the schedule so the
          loud functions finish before 10 PM. For the music night itself, see
          our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className={linkClass}
          >
            sangeet night guide
          </Link>
          .
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
            Find a Farmhouse for Your Punjabi Wedding
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your muhurat, guest count and functions. Effortless Events
            can shortlist farmhouses across Delhi NCR with space for the
            baraat, a dance floor, rooms for both families and a bar, and help
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
