import BlogSchema from "../../components/BlogSchema";
import Link from "next/link";

export const metadata = {
  title: "Jaggo Ceremony at a Farmhouse in Delhi NCR: Cost & Ideas",

  description:
    "Planning a jaggo night at a farmhouse in Delhi NCR? What happens, 2026–27 dates, jaggo vs sangeet, items list, dhol and cost estimates, rules and a checklist.",

  keywords: [
    "jaggo ceremony at farmhouse Delhi NCR",
    "jaggo night ideas",
    "jaggo vs sangeet",
    "jaggo ceremony items list",
    "jaggo decoration ideas",
    "dhol for jaggo price Delhi",
    "jaggo night before Punjabi wedding",
  ],

  alternates: { canonical: "/blogs/jaggo-ceremony-farmhouse-delhi-ncr" },

  openGraph: {
    type: "article",
    siteName: "Effortless Events",
    locale: "en_IN",
    title: "Jaggo Ceremony at a Farmhouse in Delhi NCR: Cost & Ideas",

    description:
      "What a jaggo night involves, 2026–27 dates, jaggo vs sangeet, the items list, dhol and cost estimates, 10 PM and fire rules, a run-of-show and a checklist.",

    images: ["/decoration-7.webp"],
  },
};

const faqs = [
  {
    q: "What is the jaggo ceremony in a Punjabi wedding?",
    a: "Jaggo is a Punjabi pre-wedding night where the family, led mostly by the maternal side, sings boliyan and dances with a decorated pot lit with diyas. The name comes from 'jaagna', to stay awake, and the night was traditionally a procession that woke the neighbourhood to announce the wedding.",
  },
  {
    q: "When is the jaggo held?",
    a: "Most families hold the jaggo on the night before the wedding, after the mehendi or maiyan, while some hold it one or two nights earlier. In Delhi NCR it usually starts after sunset, around 7–8 PM, and the loud outdoor part should finish by the 10 PM loudspeaker cut-off.",
  },
  {
    q: "Who carries the jaggo during the ceremony?",
    a: "Traditionally the maami (the maternal uncle's wife) carries the decorated jaggo pot on her head, with the mama and the maternal family leading the singing. In many families today the pot is passed around so cousins, aunts and friends each take a turn.",
  },
  {
    q: "Is the jaggo done for both the bride and the groom?",
    a: "Yes. The bride's and groom's families usually hold separate jaggo nights at their own homes or venues. When both families share one farmhouse for the pre-wedding functions, some combine it into one joint jaggo with a friendly boliyan and bhangra face-off between the sides.",
  },
  {
    q: "What items are needed for a jaggo ceremony?",
    a: "The core items are a decorated earthen or brass pot (gagar or ghadoli) with diyas on top, a decorated stick with bells or ghungroos, a chhaj (winnowing tray) to beat rhythm, mustard oil and spare diyas, matches or a lighter, and a dhol player. Many families add phulkari dupattas, paranda tassels and an LED pot as a backup.",
  },
  {
    q: "Is jaggo different from sangeet?",
    a: "Yes. A jaggo is a ritual-led, informal night of boliyan, gidda, bhangra and a lit-pot procession, with no stage or rehearsed choreography. A sangeet is a performance night with a stage, rehearsed dances and a DJ. Many Delhi NCR families now hold both, or run a short jaggo procession to open the sangeet.",
  },
  {
    q: "How much does a jaggo night at a farmhouse cost in Delhi NCR?",
    a: "As a rough estimate, a jaggo night for 80–150 guests at a Delhi NCR farmhouse often totals about ₹2.5 lakh to ₹8 lakh, including evening rent, a Punjabi dinner, dhol, simple décor and props. It costs less if the jaggo is added to a mehendi or sangeet you have already booked at the same farmhouse.",
  },
];

const th = "border border-gray-300 p-4 text-left";
const td = "border border-gray-300 p-4";
const linkClass = "text-black underline font-semibold";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogSchema
        slug="jaggo-ceremony-farmhouse-delhi-ncr"
        metadata={metadata}
        faqs={faqs}
        datePublished="2026-11-16"
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
          alt="Jaggo ceremony at a farmhouse in Delhi NCR: a farmhouse lawn at night with paper lanterns, string lights and a lit dance floor ready for a jaggo procession"
          className="w-full max-h-[640px] object-cover rounded-xl mb-10"
        />

        <h1 className="text-black text-5xl md:text-6xl font-bold leading-tight mb-4">
          Jaggo Ceremony at a Farmhouse in Delhi NCR: Dates, Cost and Ideas
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
          A jaggo ceremony at a farmhouse in Delhi NCR keeps the loudest,
          happiest night of a Punjabi wedding intact at a time when most
          families live in apartments and gated societies where a midnight
          procession with a dhol and a lit pot is no longer possible. A
          farmhouse gives you a long driveway and lawn for the procession, no
          neighbours a few feet away and room for the whole maternal side.
          This guide covers what happens at a jaggo, when to hold it for a
          December 2026 or January–February 2027 wedding, how it differs from
          a sangeet, the items list, cost estimates, the 10 PM and fire rules,
          and a checklist.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          <p className="text-black font-semibold mb-3">Quick answer</p>
          <p>
            Hold the jaggo on the night before the wedding, starting around
            7–8 PM, and book the farmhouse 3–6 weeks ahead for December 2026
            dates. Plan a lit-pot procession around the lawn with a dhol,
            boliyan and gidda, a Punjabi dinner, and finish outdoor dhol and
            speakers by 10 PM. Budget roughly ₹2.5–8 lakh (estimate) for
            80–150 guests.
          </p>
        </div>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Jaggo at a Farmhouse: At a Glance
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Decision</th>
                <th className={th}>What works for most Delhi NCR families</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>When</td>
                <td className={td}>
                  Night before the wedding (sometimes 1–2 nights earlier),
                  after the mehendi or maiyan
                </td>
              </tr>
              <tr>
                <td className={td}>Timing</td>
                <td className={td}>
                  Guests 7 PM, procession 8–9 PM, dinner and bhangra to 10 PM
                  outdoors
                </td>
              </tr>
              <tr>
                <td className={td}>Guest count</td>
                <td className={td}>
                  50–150; mostly family, with the maternal side leading
                </td>
              </tr>
              <tr>
                <td className={td}>Formats</td>
                <td className={td}>
                  Standalone jaggo, mehendi + jaggo, or jaggo procession
                  opening the sangeet
                </td>
              </tr>
              <tr>
                <td className={td}>Must-haves</td>
                <td className={td}>
                  Decorated pot with diyas, bell stick, chhaj, dhol, a route
                  around the lawn
                </td>
              </tr>
              <tr>
                <td className={td}>Budget (estimate)</td>
                <td className={td}>
                  About ₹2.5–8 lakh all-in for 80–150 guests
                </td>
              </tr>
              <tr>
                <td className={td}>When to book</td>
                <td className={td}>
                  3–6 weeks ahead for December 2026; 6–10 weeks for February
                  2027 weekends
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          All budget figures in this guide are rough estimates based on
          typical Delhi NCR quotes unless a source is linked. Rates change
          with the date, area, guest count and vendors.
        </p>

        {/* =====================================================
            WHAT IS JAGGO
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Happens at a Jaggo Ceremony?
        </h2>

        <p className="mb-8">
          A jaggo is a Punjabi pre-wedding night in which the family carries
          a decorated pot lit with diyas, sings boliyan and dances gidda and
          bhangra to a dhol. The word comes from <em>jaagna</em>, to stay
          awake — in villages the procession went from house to house late
          at night, waking neighbours to announce the wedding and inviting
          them to join. Explainers such as{" "}
          <a
            href="https://pataaree.com/blogs/articles/jaggo-ceremony"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            this January 2026 jaggo guide
          </a>{" "}
          and{" "}
          <a
            href="https://royalbindi.co.uk/jaggo-ceremony"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            this Sikh-wedding overview
          </a>{" "}
          describe the same core elements:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>The jaggo pot:</strong> a clay or brass pot (gagar or
            ghadoli) decorated with flowers, mirrors or gota, with diyas lit
            on top. The maami traditionally carries it on her head.
          </li>
          <li>
            <strong>The bell stick and chhaj:</strong> a decorated stick with
            ghungroos and a winnowing tray beaten for rhythm.
          </li>
          <li>
            <strong>Boliyan:</strong> short call-and-response folk couplets,
            many of them teasing the other family, led by the women of the
            house.
          </li>
          <li>
            <strong>Gidda and bhangra:</strong> unrehearsed group dancing to
            the dhol, often ending in a friendly contest between the two
            sides.
          </li>
          <li>
            <strong>Blessings:</strong> the procession ends with elders
            blessing the bride or groom.
          </li>
        </ul>

        <p className="mb-8">
          The bride&apos;s and groom&apos;s families usually hold their own
          jaggo separately. There is no stage and no choreography; the
          energy comes from the family, the dhol and the procession.
        </p>

        {/* =====================================================
            WHY FARMHOUSE
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Why Hold a Jaggo at a Farmhouse Instead of at Home?
        </h2>

        <p className="mb-8">
          A farmhouse gives the jaggo the one thing a city home can&apos;t:
          a long, private route for the procession, away from neighbours,
          traffic and society rules. The old village walk becomes a loop
          down the driveway, around the lawn and back to the main seating
          area.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Factor</th>
                <th className={th}>Farmhouse</th>
                <th className={th}>Home or society</th>
                <th className={th}>Banquet hall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Procession route</td>
                <td className={td}>Driveway and lawn loop</td>
                <td className={td}>Lanes or society roads; complaints likely</td>
                <td className={td}>Indoor circle only</td>
              </tr>
              <tr>
                <td className={td}>Dhol and noise</td>
                <td className={td}>Fewer neighbours; 10 PM still applies</td>
                <td className={td}>RWA rules, close neighbours</td>
                <td className={td}>Hall&apos;s own cut-off</td>
              </tr>
              <tr>
                <td className={td}>Diyas and open flame</td>
                <td className={td}>Outdoors, away from fabric</td>
                <td className={td}>Tight corridors and lifts</td>
                <td className={td}>Often restricted indoors</td>
              </tr>
              <tr>
                <td className={td}>Stay-over for family</td>
                <td className={td}>Possible if it has rooms</td>
                <td className={td}>Limited</td>
                <td className={td}>Hotel rooms extra</td>
              </tr>
              <tr>
                <td className={td}>Cost</td>
                <td className={td}>Evening rent + vendors</td>
                <td className={td}>Lowest</td>
                <td className={td}>Per-plate minimum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          If the same farmhouse hosts your day functions, combining them
          saves a venue fee — see our guide to{" "}
          <Link
            href="/blogs/haldi-mehendi-farmhouse-delhi-ncr"
            className={linkClass}
          >
            haldi and mehendi at a farmhouse
          </Link>{" "}
          for the daytime half of the plan.
        </p>

        {/* =====================================================
            DATES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          When Should You Hold the Jaggo for a 2026–27 Wedding?
        </h2>

        <p className="mb-8">
          Hold the jaggo on the night before the wedding, and work the date
          back from your wedding day. For Hindu Punjabi weddings that follow
          a panchang, VedicFeed&apos;s{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/december-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            December 2026 calendar
          </a>{" "}
          lists vivah muhurats on 2–6, 11 and 12 December, and its{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/january-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            January 2027 list
          </a>{" "}
          restarts on 15 January, with more dates in{" "}
          <a
            href="https://vedicfeed.com/shubh-marriage-dates/february-2027/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            February 2027
          </a>
          . The gap is Kharmas, which{" "}
          <a
            href="https://hindupad.com/khar-maas/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Hindupad
          </a>{" "}
          places from 16 December 2026 to 14 January 2027. Many Sikh
          families fix the Anand Karaj by family and gurdwara convenience
          rather than a muhurat, so their jaggo nights can fall in late
          December too.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Wedding date</th>
                <th className={th}>Likely jaggo night</th>
                <th className={th}>What to watch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>2–6 Dec 2026</td>
                <td className={td}>1–5 Dec</td>
                <td className={td}>
                  Only 2–3 weeks away; farmhouses and dhol players busy
                </td>
              </tr>
              <tr>
                <td className={td}>11–12 Dec 2026</td>
                <td className={td}>10–11 Dec (Thu–Fri)</td>
                <td className={td}>Friday nights in high demand; fog late</td>
              </tr>
              <tr>
                <td className={td}>
                  Late Dec 2026 (non-muhurat Anand Karaj)
                </td>
                <td className={td}>Night before</td>
                <td className={td}>
                  Competes with Christmas and New Year&apos;s Eve parties
                </td>
              </tr>
              <tr>
                <td className={td}>15 Jan – Feb 2027</td>
                <td className={td}>Night before each date</td>
                <td className={td}>
                  Coldest nights; heaters and covered seating essential
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-base text-gray-600">
          Muhurat lists differ by panchang and community. Confirm the wedding
          date with your family priest or gurdwara before booking.
        </p>

        {/* =====================================================
            JAGGO VS SANGEET
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Jaggo vs Sangeet: What Is the Difference?
        </h2>

        <p className="mb-8">
          A jaggo is a ritual-led family procession; a sangeet is a
          performance night with a stage. That difference changes the
          venue set-up, the vendors and the budget, so decide early whether
          you are holding one, the other or both.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Factor</th>
                <th className={th}>Jaggo</th>
                <th className={th}>Sangeet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Core idea</td>
                <td className={td}>Lit-pot procession, boliyan, gidda</td>
                <td className={td}>Rehearsed dances and performances</td>
              </tr>
              <tr>
                <td className={td}>Who leads</td>
                <td className={td}>Maternal family (mama–maami)</td>
                <td className={td}>Couple, cousins, friends, anchor</td>
              </tr>
              <tr>
                <td className={td}>Set-up</td>
                <td className={td}>Open lawn route, low seating, diyas</td>
                <td className={td}>Stage, dance floor, LED screen</td>
              </tr>
              <tr>
                <td className={td}>Music</td>
                <td className={td}>Live dhol, family singing</td>
                <td className={td}>DJ and sound system</td>
              </tr>
              <tr>
                <td className={td}>Cost</td>
                <td className={td}>Lower — few vendors</td>
                <td className={td}>Higher — stage, sound, choreographer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8">
          Three formats work well at a Delhi NCR farmhouse: a{" "}
          <strong>standalone jaggo</strong> on the night before the wedding;
          a <strong>mehendi + jaggo</strong> day where the mehendi runs in
          the afternoon and the jaggo starts at sunset; or a{" "}
          <strong>jaggo-opens-sangeet</strong> evening, where a 30–40 minute
          procession leads guests to the stage. For the stage half of that
          last format, see our{" "}
          <Link
            href="/blogs/sangeet-night-farmhouse-delhi-ncr"
            className={linkClass}
          >
            sangeet night at a farmhouse guide
          </Link>
          .
        </p>

        {/* =====================================================
            ITEMS LIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Items Do You Need for a Jaggo Night?
        </h2>

        <p className="mb-8">
          You need the jaggo pot, lighting for it, rhythm props, a dhol
          player and a few comfort items for a winter night outdoors. Use
          this list with your décorator or family:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Decorated jaggo pot (gagar or ghadoli), plus one spare</li>
          <li>Clay diyas, mustard oil, cotton wicks, a lighter and a wind guard</li>
          <li>Battery LED diyas or an LED pot as a backup for wind or rules</li>
          <li>Decorated stick with bells or ghungroos; a chhaj for rhythm</li>
          <li>Phulkari dupattas, paranda tassels and props for photos</li>
          <li>Printed boliyan sheets for younger cousins</li>
          <li>Dhol player (two for 100+ guests), plus a small sound system for dinner</li>
          <li>Low seating, gaddas or charpais for elders along the route</li>
          <li>Patio heaters, shawls and hot drinks for December–February</li>
          <li>Fire extinguisher and sand bucket near the procession route</li>
        </ul>

        <p className="mb-8">
          Décor stays simple: string lights and lanterns along the route,
          marigold strings and brass urlis with floating diyas at the
          seating area. For more ideas that don&apos;t blow the budget, see{" "}
          <Link
            href="/blogs/farmhouse-party-decoration-ideas-budget-delhi-ncr"
            className={linkClass}
          >
            farmhouse party decoration ideas on a budget
          </Link>
          .
        </p>

        {/* =====================================================
            COST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Much Does a Jaggo Night at a Farmhouse Cost in Delhi NCR?
        </h2>

        <p className="mb-8">
          As a rough estimate, a jaggo for 80–150 guests at a Delhi NCR
          farmhouse often totals about ₹2.5 lakh to ₹8 lakh. Food and
          evening rent are the two biggest lines; the dhol, props and simple
          décor cost far less than a sangeet&apos;s stage-and-sound package.
          For dhol, Delhi listings show a wide spread — one{" "}
          <a
            href="https://www.weddingbazaar.com/wedding-entertainment/delhi/punjabi-dhol-wala"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Punjabi dhol listing on WeddingBazaar
          </a>{" "}
          shows a starting price of ₹11,000 for a 3-hour performance, while
          a{" "}
          <a
            href="https://www.weddingwire.in/wedding-music/dhol-baja-barat--e57676"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            South Delhi dhol vendor on WeddingWire
          </a>{" "}
          lists prices from ₹2,100 per event (both checked November 2026).
          Confirm hours, number of players and travel in writing.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-base md:text-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className={th}>Cost line</th>
                <th className={th}>Typical estimate (80–150 guests)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={td}>Farmhouse rent (evening)</td>
                <td className={td}>₹75,000 – ₹3,00,000</td>
              </tr>
              <tr>
                <td className={td}>Punjabi dinner (per plate)</td>
                <td className={td}>₹900 – ₹2,500 per guest</td>
              </tr>
              <tr>
                <td className={td}>Dhol (1–2 players)</td>
                <td className={td}>
                  From a few thousand to ₹25,000+ (listed prices above)
                </td>
              </tr>
              <tr>
                <td className={td}>Jaggo pot, stick, diyas and props</td>
                <td className={td}>₹2,000 – ₹10,000</td>
              </tr>
              <tr>
                <td className={td}>Lights, lanterns and simple décor</td>
                <td className={td}>₹30,000 – ₹1,50,000</td>
              </tr>
              <tr>
                <td className={td}>Heaters and covered seating</td>
                <td className={td}>₹15,000 – ₹75,000</td>
              </tr>
              <tr>
                <td className={td}>Photographer / videographer</td>
                <td className={td}>₹20,000 – ₹75,000 for the evening</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Sample budget: 100-guest jaggo (estimate)
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Evening rent: ₹1,50,000</li>
          <li>Dinner at ₹1,400 × 100: ₹1,40,000</li>
          <li>Two dhol players: ₹20,000</li>
          <li>Props and diyas: ₹6,000</li>
          <li>Lights and décor: ₹60,000</li>
          <li>Heaters: ₹30,000</li>
          <li>Photography: ₹40,000</li>
          <li>
            <strong>Total: about ₹4.5 lakh</strong>, before any bar costs
          </li>
        </ul>

        <p className="mb-8">
          If you serve liquor, add bar staff and the permit: in Delhi, an
          Excise notice of 22 October 2026 requires a P-10 permit at ₹15,000
          per farmhouse event — our{" "}
          <Link
            href="/blogs/cocktail-party-farmhouse-delhi-ncr"
            className={linkClass}
          >
            cocktail party at a farmhouse guide
          </Link>{" "}
          explains it, along with Haryana and UP permits for Gurgaon and
          Noida farmhouses.
        </p>

        {/* =====================================================
            RULES
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Can a Jaggo Go On After 10 PM in Delhi NCR?
        </h2>

        <p className="mb-8">
          Not outdoors with loudspeakers, as a rule. Noise rules bar
          loudspeakers and public-address systems in open areas between 10
          PM and 6 AM unless the authorities permit it, and in April 2025
          Delhi Police{" "}
          <a
            href="https://www.indiatvnews.com/delhi/delhi-police-tightens-loudspeaker-rules-prior-permission-mandatory-fines-up-to-rs-1-lakh-for-violations-check-full-details-2025-04-17-985918"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            made prior permission mandatory for loudspeaker use
          </a>
          . A live dhol on an open lawn carries far, and police in Gurgaon,
          Noida and Faridabad respond to late-night complaints too. The
          tradition is a late night, so plan the loud part early:
        </p>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Start the procession by 8–8:30 PM, not after dinner.</li>
          <li>Finish outdoor dhol and speakers by 10 PM.</li>
          <li>
            Move boliyan and gidda indoors afterwards with doors closed and
            no amplification.
          </li>
          <li>Get the farmhouse&apos;s own music cut-off in writing.</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Diyas, fireworks and winter air rules
        </h3>

        <p className="mb-8">
          Lit diyas on a pot carried through a crowd need care: keep the
          route clear of drapes, tent walls and hay bales, have one adult
          walk beside the pot-bearer, and keep an extinguisher nearby.
          Fireworks are off the table — the Supreme Court{" "}
          <a
            href="https://www.scconline.com/blog/post/2026/11/04/supreme-court-green-crackers-delhi-ncr-diwali-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            restored the firecracker ban in Delhi-NCR from 9 November 2026
          </a>
          , with no exception for weddings. During bad-air spells, GRAP
          curbs can also restrict diesel generators and open fires, so
          confirm the farmhouse&apos;s power backup and heater plan; our{" "}
          <Link
            href="/blogs/grap-rules-weddings-parties-delhi-ncr"
            className={linkClass}
          >
            GRAP rules guide
          </Link>{" "}
          covers each stage.
        </p>

        {/* =====================================================
            RUN OF SHOW
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          What Is a Good Run-of-Show for a Farmhouse Jaggo?
        </h2>

        <p className="mb-8">
          A good farmhouse jaggo runs about three hours: arrivals and snacks,
          the lit-pot procession, then dinner and bhangra before 10 PM. This
          sample plan fits a December evening:
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
                <td className={td}>4:00–6:30 PM</td>
                <td className={td}>
                  Lights, heaters and seating set; route walked and cleared;
                  pot decorated
                </td>
              </tr>
              <tr>
                <td className={td}>7:00–8:00 PM</td>
                <td className={td}>
                  Guests arrive; chai, pakoras and tikkis; maiyan or
                  blessings if not done earlier
                </td>
              </tr>
              <tr>
                <td className={td}>8:00–8:45 PM</td>
                <td className={td}>
                  Diyas lit; maami lifts the jaggo; procession with dhol and
                  boliyan around the lawn
                </td>
              </tr>
              <tr>
                <td className={td}>8:45–9:15 PM</td>
                <td className={td}>
                  Gidda and bhangra circle; bride&apos;s vs groom&apos;s
                  side boliyan face-off if shared
                </td>
              </tr>
              <tr>
                <td className={td}>9:15–10:00 PM</td>
                <td className={td}>Dinner; dhol wraps up by 10 PM</td>
              </tr>
              <tr>
                <td className={td}>After 10:00 PM</td>
                <td className={td}>
                  Indoor singing, unamplified; early night before the wedding
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Jaggo night ideas that work at a farmhouse
        </h3>

        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            A lantern-lined driveway as the procession route, ending at a
            marigold-framed seating area.
          </li>
          <li>
            A &quot;pind&quot; corner with charpais, a chulha-style live
            counter (if fires are allowed that day) and makki-sarson.
          </li>
          <li>
            Boliyan cards with each family&apos;s best teasing verse for the
            face-off.
          </li>
          <li>
            Pass the pot: every aunt and cousin takes a short turn carrying
            the jaggo for photos.
          </li>
          <li>
            A slow-shutter photo moment of the lit pot moving in the dark —
            brief your photographer in advance.
          </li>
        </ul>

        {/* =====================================================
            CHECKLIST
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Jaggo at a Farmhouse: Booking Checklist
        </h2>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Questions to ask the farmhouse owner
        </h3>
        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>Are lit diyas and a live dhol allowed? Until what time?</li>
          <li>Is there a clear loop for a procession — driveway, lawn, paths?</li>
          <li>Can we bring our own caterer, dhol and décorator?</li>
          <li>What power backup is available if generators are restricted?</li>
          <li>Are there rooms for the bride or groom and elders to stay?</li>
          <li>Is the venue also free for the mehendi or wedding next day?</li>
          <li>What are the deposit, cleaning and cancellation terms?</li>
        </ul>

        <h3 className="text-black text-2xl font-semibold mt-8 mb-4">
          Countdown
        </h3>
        <ul className="list-disc pl-8 space-y-3 mb-8">
          <li>
            <strong>4–6 weeks before:</strong> fix the jaggo night, book the
            farmhouse and dhol, decide the format.
          </li>
          <li>
            <strong>2–3 weeks before:</strong> order or decorate the pot and
            stick, finalise menu, heaters and lights.
          </li>
          <li>
            <strong>1 week before:</strong> share the run-of-show; print
            boliyan sheets; confirm the 10 PM plan in writing.
          </li>
          <li>
            <strong>On the day:</strong> walk the route in daylight, test the
            diyas and LED backup, place the extinguisher.
          </li>
        </ul>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          How Effortless Events Helps With a Jaggo Night
        </h2>

        <p className="mb-8">
          Effortless Events is a Delhi NCR event planning and venue discovery
          company that helps families book farmhouses, villas and venues for
          weddings, pre-wedding functions, private parties and corporate
          events. For a jaggo, that means shortlisting farmhouses with a
          good procession route and rooms for family, checking music,
          flame and power rules upfront, and lining up the dhol, caterer and
          lights so the night runs on time.
        </p>

        <h2 className="text-black text-3xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>

        <p className="mb-8">
          The jaggo is the night the whole family remembers singing
          together, and a farmhouse gives it back the procession that city
          homes have lost. Fix the night from your wedding date, start the
          procession early to respect the 10 PM limit, keep the diyas safe,
          and book now if your wedding falls in early December.
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
            Find a Farmhouse for Your Jaggo Night
          </h2>

          <p className="text-white/80 mb-8 max-w-3xl mx-auto">
            Share your wedding date, guest count, preferred area and budget.
            Effortless Events can help you shortlist farmhouses and plan the
            procession, dhol and timings around them.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/farmhouses"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Farmhouses
            </Link>

            <Link
              href="/weddings"
              className="inline-block border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Plan My Jaggo
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
